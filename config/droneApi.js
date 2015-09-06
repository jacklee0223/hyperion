var express = require('express'),
    router = express.Router(),
    bodyParser = require('body-parser'), //parses information from POST
    methodOverride = require('method-override'); //used to manipulate POST

var dronesController = require('../controllers/droneController');

// http://127.0.0.1:3000/drones
router.route('/drones')

  //GET all drones
  .get(dronesController.getAll)

  //POST a new blob
  .post(dronesController.createDrone);


router.route('/drones/:id')

  // GET return specific drone
  .get(dronesController.getDrone)

  // PATCH update existing drone
  .patch(dronesController.updateDrone)

  // DELETE remove specific drone from DB
  .delete(dronesController.removeDrone);


module.exports = router
