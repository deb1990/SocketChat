var deviceService = angular.module('deviceService',[]);

deviceService.service('deviceService', ['$log','$rootScope', function($log,$rootScope) {
    var _getAllContacts=function(){
		var allMobileNos=[
			'12345',
			'23456',
			'34567',
			'45678',
			'56789'
		]
        return allMobileNos;
    };
    return {
        getAllContacts: _getAllContacts
    };
}]);
