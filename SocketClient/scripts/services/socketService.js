var socketService = angular.module('socketService',[]);

socketService.service('socketService', ['$log','$rootScope', function($log,$rootScope) {
    var socket = io.connect('http://localhost:3702');
    socket.on('connect', function () {
        console.log("socket connected");
    });
    socket.on('userExist', function () {
        $rootScope.$broadcast('userExist');
    });
    socket.on('signInSuccess', function () {
        $rootScope.$broadcast('signInSuccess');
    });
    var _signUp=function(userData){
        socket.emit('signUp', {user: userData});
    };
    return {
        signUp: _signUp
    };
}]);
