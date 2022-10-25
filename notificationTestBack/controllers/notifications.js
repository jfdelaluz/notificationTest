const { saveNotification, getNotificationsList } = require( '../services/NotificationService' );

const getLog = ( req, res ) => {
  res.json({
    ok: true,
    notifications: getNotificationsList()
  })
};

const createNotification = ( req, res ) => {

  try {
    saveNotification( req.body );
  
    res.json({
      ok: true,
    });
  } catch ( error ) {
    console.log( error )
    res.status( 400 ).json({
      ok: false,
      message: error
    })
  }
};

module.exports = {
  getLog,
  createNotification
};
