var express = require('express'),
    app = express(),
    http = require('http'),
    mongoose = require('mongoose'),
    methodOverride = require('method-override'),
    path = require('path'), // Allows us to deal with file structures
    morgan = require('morgan'),  // This keeps the server logs
    bodyParser = require('body-parser'), // Breakdown a POST request by request.body
    passport = require('passport');

// router
var router = express.Router();

// require models
var Drone = require('../models/Drone'),
    User  = require('../models/User');

//require controllers
var droneController = require('../controllers/droneController'),
    userController = require('../controllers/userController'),
    homeController = require('../controllers/homeController');

//Landing Page
router.get('/', homeController.index);
// router.get('/drones', droneController.index);
router.get('/command', homeController.userRender);

//Drones Routes

// http://127.0.0.1:3000/drones
router.route('/drones')

  //GET all drones
  .get(droneController.getAll)

  //POST a new blob
  .post(droneController.createDrone);


router.route('/drones/:id')

  // GET return specific drone
  .get(droneController.getDrone)

  // PATCH update existing drone
  .patch(droneController.updateDrone)

  // DELETE remove specific drone from DB
  .delete(droneController.removeDrone);

//Users Routes

// router.get('/userindex', userController.index);

// http://127.0.0.1:3000/users
router.route('/users')

  //GET all users
  .get(userController.getAll)

  //POST a new blob
  .post(userController.createUser);


router.route('/users/:id')

  // GET return specific user
  .get(userController.getUser)

  // PATCH update existing user
  .patch(userController.updateUser)

  // DELETE remove specific user from DB
  .delete(userController.removeUser);



//export
module.exports = router;


