const passthru = ( req, res, next ) => {
  console.log( 'Request received...' );
  next();
};

module.exports = {
  passthru
};
