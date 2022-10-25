const { sendByEmail } = require('./NotificationChannels/Email');
const { sendByPushNotification } = require('./NotificationChannels/PushNotification');
const { sendBySMS } = require( './NotificationChannels/SMS' );

const sendMessageByChannel = ( channel, message ) => {
  switch( channel ) {
    case 'sms':
      sendBySMS( message );
      break;
    case 'email':
      sendByEmail( message );
      break;
    case 'push-notification':
      sendByPushNotification( message );
      break;
  }
};

module.exports = {
  sendMessageByChannel
};
