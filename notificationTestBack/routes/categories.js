/*
  Categories routes
  host + /api/categories
*/

const { Router } = require( 'express' );
const { getCategoriesList } = require( '../controllers/categories' );
const { passthru } = require( '../middlewares/passthru' );

const router = Router();

router.get( '/', passthru, getCategoriesList );

module.exports = router;
