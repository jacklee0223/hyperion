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
                 console.log('LED ON/OFF');
             };

             $scope.ledBlink = function () {
                 mySocket.emit('led:blink');
                 console.log('LED Blink');
             };

             $scope.servoGo = function () {
                 mySocket.emit('servo:go');
                 console.log('Servo Go');
             };

             $scope.servoBack = function () {
                 mySocket.emit('servo:back');
                 console.log('Servo Back');
             };

             $scope.servoStop = function () {
                 mySocket.emit('servo:stop');
                 console.log('Servo Stop');
             };

             $scope.servoLeft = function () {
                 mySocket.emit('servo:left');
                 console.log('Servo Left Turn');
             };

             $scope.servoRight = function () {
                 mySocket.emit('servo:right');
                 console.log('Servo Right Turn');
             };
          };
})();
