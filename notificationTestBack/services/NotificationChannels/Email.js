const sendByEmail = ( message ) => {
  console.log( `Sending message '${ message.notificationContent }' via Email to ${ message.user.email }...` );
};

module.exports = {
  sendByEmail
};