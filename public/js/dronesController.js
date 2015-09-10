(function() {
  angular.module('app')
         .controller('DronesController', DronesController);

  DronesController.$inject = ['$http', '$location'];

  function DronesController($http, $location, $window){
    var self = this;
    self.all = [];
    self.addDrone = addDrone;
    self.newDrone = {};
    self.getDrones = getDrones;
    self.updateDrone = updateDrone;
    self.deleteDrone = deleteDrone;

    getDrones();
    function getDrones(){
      $http
        .get('https://young-crag-5724.herokuapp.com/drones')
        .then(function(response){
          self.all = response.data.drones;
      });
    }

    function addDrone(){
      $http
        .post('https://young-crag-5724.herokuapp.com/drones', self.newDrone)
        .then(function(response){
          getDrones();
      });
      self.newDrone = {};
      $http.location.href = '/';
    }

    function updateDrone(drone){
      $http
        .put("https://young-crag-5724.herokuapp.com/drones/" + drone._id)
        .then(function(response){
          getDrones();
        });
    }

    function deleteDrone(drone){
      $http
        .delete("https://young-crag-5724.herokuapp.com/drones/" + drone._id)
        .then(function(response){
          var index = self.all.indexOf(drone);
          self.all.splice(index, 1);
        });
        // $window.location.href = '/';
    }
  }

})();



