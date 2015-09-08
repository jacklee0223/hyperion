(function() {
  angular.module('app')
         .factory('mySocket', ['socketFactory', function (socketFactory) {
             return socketFactory();
         }])
         .controller('ArduController', ArduController);

  ArduController.$inject = ['$scope', 'mySocket'];

      function ArduController ($scope, mySocket) {
             $scope.ledOn = function () {
                 mySocket.emit('led:on');
                 console.log('LED ON');
             };
             $scope.ledOff = function () {
                 mySocket.emit('led:off');
                 console.log('LED OFF');
             };
          };
})();


//     var app = angular.module('app')
//                     .factory('mySocket', function (socketFactory) {
//                         return socketFactory();
//                     })
//                     .controller('ArduController', function ($scope,mySocket) {

//                         $scope.ledOn = function () {

//                             mySocket.emit('led:on');
//                             console.log('LED ON');
//                         };


//                         $scope.ledOff = function () {

//                             mySocket.emit('led:off');
//                             console.log('LED OFF');
//                         };
// });


