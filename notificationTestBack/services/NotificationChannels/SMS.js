const sendBySMS = ( message ) => {
  console.log( `Sending message '${ message.notificationContent }' via SMS to ${ message.user.phoneNumber }...` );
};

module.exports = {
  sendBySMS
};
