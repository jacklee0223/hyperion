var Drone = require('../models/Drone');



// GET ALL
var getAll = function(request, response) {
  Drone.find(function(error, drones) {
    if(error) response.json({message: 'Could not find any drone'});

    response.json({drones: drones});
  });
}

// POST
function createDrone(request, response) {
  console.log('in POST');
  console.log('body:',request.body);

  var drone = new Drone(request.body);

  drone.save(function(error) {
    if(error) response.json({messsage: 'Could not create drone b/c:' + error});

    response.json({drone: drone});
    response.redirect('/');
    console.log('drone created');
  });
}

// GET BY ID
function getDrone(request, response) {
  var id = request.params.id;

  Drone.findById({_id: id}, function(error, drone) {
    if(error) response.json({message: 'Could not find drone b/c:' + error});

    response.json({drone: drone});
  });
}

// Update
function updateDrone(request, response) {
  var id = request.params.id;

  Drone.findById({_id: id}, function(error, drone) {
    if(error) response.json({message: 'Could not find drone b/c:' + error});

    if(request.body.name) drone.name = request.body.name;
    if(request.body.start) drone.start = request.body.start;
    if(request.body.end) drone.end = request.body.end;

    drone.save(function(error) {
      if(error) response.json({messsage: 'Could not update drone b/c:' + error});

      response.json({message: 'Drone successfully updated', drone: drone});
    });
  });
}

// Delete
function removeDrone(request, response) {
  var id = request.params.id;

  Drone.remove({_id: id}, function(error) {
    if(error) response.json({message: 'Could not delete drone b/c:' + error});

    response.json({message: 'Drone successfully deleted'});
  });
}

module.exports = {
  getAll: getAll,
  createDrone: createDrone,
  getDrone: getDrone,
  updateDrone: updateDrone,
  removeDrone: removeDrone
}
