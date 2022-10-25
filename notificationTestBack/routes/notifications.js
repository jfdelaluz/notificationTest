/*
  Notifications routes
  host + /api/notifications
*/

const { Router } = require( 'express' );
const { createNotification, getLog } = require( '../controllers/notifications' );
const { passthru } = require( '../middlewares/passthru' );

const router = Router();

router.get( '/', passthru, getLog );
router.post( '/', passthru, createNotification );

module.exports = router;
