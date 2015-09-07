// require models
var User = require('../models/User');


// GET ALL
var getAll = function(request, response) {
  User.find(function(error, users) {
    if(error) response.json({message: 'Could not find any user'});

    response.json({users: users});
    // response.render('users/index')
  });
}

// POST
function createUser(request, response) {
  console.log('in POST');
  console.log('body:',request.body);

  var user = new User(request.body);

  user.save(function(error) {
    if(error) response.json({messsage: 'Could not create user b/c:' + error});

    response.json({user: user});
  });
}

// GET BY ID
function getUser(request, response) {
  var id = request.params.id;

  User.findById({_id: id}, function(error, user) {
    if(error) response.json({message: 'Could not find user b/c:' + error});

    response.json({user: user});
  });
}

// Update
function updateUser(request, response) {
  var id = request.params.id;

  User.findById({_id: id}, function(error, user) {
    if(error) response.json({message: 'Could not find user b/c:' + error});

    if(request.body.name) user.name = request.body.name;
    if(request.body.start) user.start = request.body.start;
    if(request.body.end) user.end = request.body.end;

    user.save(function(error) {
      if(error) response.json({messsage: 'Could not update user b/c:' + error});

      response.json({message: 'User successfully updated', user: user});
    });
  });
}

// Delete
function removeUser(request, response) {
  var id = request.params.id;

  User.remove({_id: id}, function(error) {
    if(error) response.json({message: 'Could not delete drone b/c:' + error});

    response.json({message: 'User successfully deleted'});
  });
}

module.exports = {
  getAll: getAll,
  createUser: createUser,
  getUser: getUser,
  updateUser: updateUser,
  removeUser: removeUser
}
