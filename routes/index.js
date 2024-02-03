// Imports express
// express.Router class creates modular, mountable route handlers
// A Router instance is a complete middleware and routing system "mini-app"
const router = require('express').Router();

// Imports module for html-routes
const htmlRouter = require('./html-routes');
// Imports module for api-routes
const apiRouter = require('./api-routes');

// Use our html route
router.use('/html', htmlRouter);
// Use our api route
router.use('/api', apiRouter);

// Exports app
module.exports = router;