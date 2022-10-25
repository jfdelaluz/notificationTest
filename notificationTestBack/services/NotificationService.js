const fs = require( 'fs' );
const path = require( 'path' );
const { usersList } = require( '../data/users' );
const { sendMessageByChannel } = require('./NotificationChannelsService');

const getNotificationsList = () =>  {
  const fileContents = fs.readFileSync(
    path.resolve( __dirname, '../data/notifications.log' ),
    { encoding:'utf8', flag:'r' }
  );
  let logs = [];

  if ( fileContents.trim().length > 0 ) {
    fileContents.trim().split(/\r?\n/).map( line => {
      logs.push( line );
    });
  }

  return logs.reverse();
};

const saveNotification = ( data ) => {
  const { category, notificationContent } = data;

  if ( notificationContent.length <= 0 ) {
    throw new Error( 'Notification Message required' );
  }

  const usersToNotify = usersList().filter( (user) => {
    if ( user.subscribed.indexOf( category ) > -1 ) {
      return user;
    }
  });

  usersToNotify.map( (user) => {
    return buildMessage(user, category, notificationContent);
  });
};

const buildMessage = ( user, category, notificationContent ) => {
  const currentDate = new Date();

  user.channels.map( ( channel ) => {
    let message = {
      date: currentDate.getTime(),
      category,
      channel,
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        phoneNumber: user.phoneNumber,
      },
      notificationContent,
    };

    sendMessageByChannel( channel, message );

    fs.writeFile(
      path.resolve( __dirname, '../data/notifications.log' ),
      JSON.stringify( message ) + "\n",
      { 'flag': 'a' },
      ( err, data ) => {
        if ( err ) return console.log( err );
      }
    );
  });
};

module.exports = {
  getNotificationsList,
  saveNotification
};
