const express = require( 'express' );
require( 'dotenv' ).config();
const cors = require( 'cors' );


// Express server
const app = express();

// CORS
app.use( cors() );

// public directory
app.use( express.static( 'public' ) );

// Read and parse body
app.use( express.json() );

// Routes
app.use( '/api/categories', require( './routes/categories' ) );
app.use( '/api/notifications', require( './routes/notifications' ) );

// Request listen
app.listen( process.env.PORT, () => {
  console.log( `Server running in port ${ process.env.PORT }` );
});
