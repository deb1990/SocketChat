var app = angular.module("socketChat",[
    'ngRoute',
    'ngTouch',
    'ngMaterial',
    'beforeLoginModule',
    'socketService',
    'deviceService'
]);

app.config(function($routeProvider){
    $routeProvider.when('/',{
        templateUrl: 'partials/welcomeScreen.html',
        controller: 'welcomeController'
    });
	$routeProvider.when('/signUp',{
        templateUrl: 'partials/signupScreen.html',
        controller: 'signupController'
    });
	$routeProvider.when('/messages',{
        templateUrl: 'partials/messagesScreen.html',
        controller: 'messagesController'
    });
    $routeProvider.otherwise({
        redirectTo: '/'
    });
});

