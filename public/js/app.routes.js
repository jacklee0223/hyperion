// inject ngRoute for all our routing needs
angular.module('app.routes', ['ngAnimate', 'ngRoute'])

// configure our routes
.config(function($routeProvider, $locationProvider) {
    $routeProvider

    // route for the home page
        .when('/', {
        templateUrl: 'index.html',
        controller: 'homeController',
        controllerAs: 'home'
    })



    // fallback mechanism that applies to all requests that do not
    //  match the above predefined routes
    .otherwise({
        redirecTo: '/'
    });


    $locationProvider.html5Mode(true);
});
