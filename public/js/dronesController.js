(function() {
  angular.module('app')
         .controller('DronesController', dronesController);

  dronesController.$inject = ['$http'];

  function DronesController($http){
    var self = this;
    self.all = [];
    self.addDrone = addDrone;
    self.newDrone = {};
    self.getDrone = getDrone;
    self.deleteDrone = deleteDrone;
  }

    getDrones();
    function getDrones(){
      $http
        .get('http://localhost:3000/drones')
        .then(function(response){
          self.all = response.data.drones;
      });
    }

    function addDrone(){
      $http
        .post('http://localhost:3000/drones', self.newDrone)
        .then(function(response){
          getDrones();
      });
      self.newDrone = {};
    }

    function deleteDrone(drone){
      $http
        .delete("http://localhost:3000/drones/" + drone._id)
        .then(function(response){
          var index = self.all.indexOf(drone);
          self.all.splice(index, 1);
        });
    }

})();



