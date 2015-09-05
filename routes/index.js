var express = require('express'),
    app = express(),
    http = require('http'),
    mongoose = require('mongoose'),
    methodOverride = require('method-override'),
    path = require('path'), // Allows us to deal with file structures
    morgan = require('morgan'),  // This keeps the server logs
    bodyParser = require('body-parser'), // Breakdown a POST request by request.body

// router
var router = express.Router(), // Allows us to do server side routing

// models
var Drone = require('../models/Drone');

// controllers
var welcomeController = require('../controllers/welcomeController');

/* Home page */
router.get('/', welcomeController.index);

module.exports = router
