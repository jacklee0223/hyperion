// var express = require('express'),
//     app = express(),
//     http = require('http'),
//     mongoose = require('mongoose'),
//     methodOverride = require('method-override'),
//     path = require('path'), // Allows us to deal with file structures
//     morgan = require('morgan'),  // This keeps the server logs
//     bodyParser = require('body-parser'); // Breakdown a POST request by request.body

// // router
// var router = express.Router(), // Allows us to do server side routing

// // models
// var Drone = require('../models/Drone');

// // controllers
// var droneController = require('../controllers/droneController');

// // /* Command Center */
// // router.get('/drones', droneController.getAll);

// // http://127.0.0.1:3000/drones
// router.route('/drones')

//   //GET all drones
//   .get(dronesController.getAll)

//   //POST a new blob
//   .post(dronesController.createDrone);


// router.route('/drones/:id')

//   // GET return specific drone
//   .get(dronesController.getDrone)

//   // PATCH update existing drone
//   .patch(dronesController.updateDrone)

//   // DELETE remove specific drone from DB
//   .delete(dronesController.removeDrone);


// module.exports = router
