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

             $scope.servoGo = function () {
                 mySocket.emit('servo:go');
                 console.log('Servo Go');
             };

             $scope.servoStop = function () {
                 mySocket.emit('servo:stop');
                 console.log('Servo Stop');
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

