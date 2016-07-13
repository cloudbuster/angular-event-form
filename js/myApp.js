var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function($routeProvider){
  $routeProvider

    .when('/viewRegister', {
      templateUrl : './templates/registerView.html',
      controller: 'registerViewController'
    })

    .when('/viewAttendees', {
      templateUrl : './templates/viewView.html',
      controller: 'viewViewController'
    })

    .otherwise({
      redirectTo: '/',
      templateUrl: 'templates/mainView.html',
      controller: 'mainViewController'
    });

});

myApp.controller('mainController', ['$scope', function($scope){
  $scope.title = 'mainController $scope';
}]);

myApp.controller('mainViewController', ['$scope', function($scope){
  $scope.title = 'mainViewController $scope';
}]);

myApp.controller('registerViewController', ['$scope', function($scope){
  $scope.title = 'registerViewController $scope';
}]);

myApp.controller('viewViewController', ['$scope', function($scope){
  $scope.title = 'viewViewController $scope';
}]);


