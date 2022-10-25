const sendByPushNotification = ( message ) => {
  console.log( `Sending message '${ message.notificationContent }' via Push Notification to ${ message.user.name }...` );
};

module.exports = {
  sendByPushNotification
};
