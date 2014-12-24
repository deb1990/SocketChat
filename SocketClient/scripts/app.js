var app = angular.module("socketChat",[
    'ngRoute',
    'ngMaterial',
    'socketService'
]);

app.config(function($routeProvider){
    $routeProvider.when('/',{
        templateUrl: 'partials/signupScreen.html',
        controller: 'signupController'
    });
    $routeProvider.otherwise({
        redirectTo: '/'
    })
});
app.controller('signupController',[
    '$scope',
    'socketService',
    function($scope,socketService){
        $scope.user={
            firstName:'',
            lastName:'',
            pass:'',
            email:''
        };
        $scope.$on('userExist',function(){
            alert('dupli');
        });
        $scope.$on('signInSuccess',function(){
            alert('entry');
        });
        $scope.signup=function(){
            socketService.signUp($scope.user);
        };
    }
]);
