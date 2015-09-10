(function() {
  angular.module('app')
         .controller('DronesController', DronesController);

  DronesController.$inject = ['$https', '$location', '$window'];

  function DronesController($https, $location, $window){
    var self = this;
    self.all = [];
    self.addDrone = addDrone;
    self.newDrone = {};
    self.getDrones = getDrones;
    self.updateDrone = updateDrone;
    self.deleteDrone = deleteDrone;

    getDrones();
    function getDrones(){
      $https
        .get('https://young-crag-5724.herokuapp.com/drones')
        .then(function(response){
          self.all = response.data.drones;
      });
    }

    function addDrone(){
      $https
        .post('https://young-crag-5724.herokuapp.com/drones', self.newDrone)
        .then(function(response){
          getDrones();
      });
      self.newDrone = {};
      $window.location.href = '/';
    }

    function updateDrone(drone){
      $https
        .put("https://young-crag-5724.herokuapp.com/drones" + drone._id)
        .then(function(response){
          var index = self.all.indexOf(drone);
          self.all.splice(index, 1);
        });
    }

    function deleteDrone(drone){
      $https
        .delete("https://young-crag-5724.herokuapp.com/drones" + drone._id)
        .then(function(response){
          var index = self.all.indexOf(drone);
          self.all.splice(index, 1);
        });
        // $window.location.href = '/';
    }
  }

})();



