(function() {
  angular.module('app')
         .controller('UsersController', UsersController);

  UsersController.$inject = ['$http', '$location', '$window'];

  function UsersController($http, $location, $window){
    var self = this;
    self.all = [];
    self.addUser = addUser;
    self.newUser = {};
    self.getUsers = getUsers;
    self.deleteUser = deleteUser;

    getUsers();
    function getUsers(){
      $http
        .get('http://localhost:3000/users')
        .then(function(response){
          self.all = response.data.users;
      });
    }

    function addUser(){
      $http
        .post('http://localhost:3000/users', self.newUser)
        .then(function(response){
          getUsers();
      });
      self.newUser = {};
      $window.location.href = '/';
    }

    function deleteUser(user){
      $http
        .delete("http://localhost:3000/users/" + user._id)
        .then(function(response){
          var index = self.all.indexOf(user);
          self.all.splice(index, 1);
        });
    }
  }
})();



