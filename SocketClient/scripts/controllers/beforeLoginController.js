var beforeLoginModule = angular.module('beforeLoginModule', []);

beforeLoginModule.controller('messagesController', [
    '$scope',
    'socketService',
    '$location',
    '$mdSidenav',
    function ($scope, socketService, $location, $mdSidenav) {
		$scope.messages = [
			{
				profilePic: 'https://lh5.googleusercontent.com/-VJYHg0mTQ1s/UBMQSq0HljI/AAAAAAAAAHo/z5eMBtvrz1w/s426/300.jc.usher.2050212.jpg',
				user: 'Debarshi',
				lastMessage: 'Hello',
			},
			{
				profilePic: 'https://lh5.googleusercontent.com/-VJYHg0mTQ1s/UBMQSq0HljI/AAAAAAAAAHo/z5eMBtvrz1w/s426/300.jc.usher.2050212.jpg',
				user: 'Debarshi',
				lastMessage: 'Hello',
			},
			{
				profilePic: 'https://lh5.googleusercontent.com/-VJYHg0mTQ1s/UBMQSq0HljI/AAAAAAAAAHo/z5eMBtvrz1w/s426/300.jc.usher.2050212.jpg',
				user: 'Debarshi',
				lastMessage: 'Hello',
			},
			{
				profilePic: 'https://lh5.googleusercontent.com/-VJYHg0mTQ1s/UBMQSq0HljI/AAAAAAAAAHo/z5eMBtvrz1w/s426/300.jc.usher.2050212.jpg',
				user: 'Debarshi',
				lastMessage: 'Hello',
			},
			{
				profilePic: 'https://lh5.googleusercontent.com/-VJYHg0mTQ1s/UBMQSq0HljI/AAAAAAAAAHo/z5eMBtvrz1w/s426/300.jc.usher.2050212.jpg',
				user: 'Debarshi',
				lastMessage: 'Hello',
			}
		];

		$scope.showFriends = function () {
			$mdSidenav('right').toggle();
		};
		$scope.openFriends = function () {
			$mdSidenav('right').open();
		};
		$scope.closeFriends = function () {
			$mdSidenav('right').close();
		};

    }
]);

beforeLoginModule.controller('welcomeController', [
    '$scope',
    'socketService',
    '$location',
    function ($scope, socketService, $location) {
		$scope.login = function () {
			$location.path('/messages');
		};
		$scope.goSignup = function () {
			$location.path('/signUp');
		};

    }
]);
beforeLoginModule.controller('signupController', [
    '$scope',
    'socketService',
    function ($scope, socketService) {
		$scope.user = {
			mobile: '',
			pass: '',
			email: ''
		};
		$scope.$on('userExist', function () {
			alert('dupli');
		});
		$scope.$on('signInSuccess', function () {
			alert('entry');
		});
		$scope.signup = function () {
			socketService.signUp($scope.user);
		};
    }
]);
