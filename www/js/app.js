// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var app = angular.module($app, $dependencies);

app.config(function($stateProvider, $urlRouterProvider){
    $urlRouterProvider.otherwise('fun');

    $stateProvider
        .state('fun', {
            url: '/fun',
            templateUrl: 'modules/fun/views/index.html',
            controller: 'funController'
        })

})