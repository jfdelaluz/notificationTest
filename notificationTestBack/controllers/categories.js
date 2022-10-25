const { categoriesList } = require( '../data/categories' );

const getCategoriesList = ( req, res ) => {
  res.json({
    ok: true,
    categories: categoriesList
  });
};

module.exports = {
  getCategoriesList
};
