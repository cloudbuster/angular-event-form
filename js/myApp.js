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

myApp.service('myService', function(){
  this.mockupData = [
  {
    "firstName": "Joukko",
    "lastName": "Jaakkola",
    "email": "jouko.jaakkola@www.fi",
    "diet": "fish",
    "sauna": false
  },
  {
    "firstName": "Antero",
    "lastName": "Mertaranta",
    "email": "antero.mertaranta@mtv3.fi",
    "diet": "meat",
    "sauna": true
  },
  {
    "firstName": "Irmeli",
    "lastName": "Hietanen",
    "email": "miss.irmeli@treffi.fi",
    "diet": "fish",
    "sauna": true
  },
  {
    "firstName": "Erja",
    "lastName": "Hakalainen",
    "email": "erja.hakalainen@jyu.fi",
    "diet": "vegetarian",
    "sauna": true
  },
  {
    "firstName": "Timo",
    "lastName": "Varis",
    "email": "timo.varis@cs.hut.fi",
    "diet": "meat",
    "sauna": true
  },

  {
    "firstName": "Matti",
    "lastName": "Meikäläinen",
    "email": "matti@suomi.fi",
    "diet": "meat",
    "sauna": true
  },
  {
    "firstName": "Maija",
    "lastName": "Toijalainen",
    "email": "maija@suomi.fi",
    "diet": "vegetarian",
    "sauna": false
  }];
});


myApp.controller('mainController', ['$scope', function($scope){
  $scope.title = 'mainController $scope';
}]);

myApp.controller('mainViewController', ['$scope', function($scope){
  $scope.title = 'mainViewController $scope';
}]);

myApp.controller('registerViewController', ['$scope', '$log', 'myService', function($scope, $log, myService){
  $scope.title = 'registerViewController $scope';

  $scope.register = function(){

    $log.info("You clicked the button!");
  
    /*
    myService.mockupData.firstName = $scope.reg.firstName;
    myService.mockupData.lastName.push($scope.reg.lastName);
    myService.mockupData.email.push($scope.reg.email);
    myService.mockupData.diet.push($scope.reg.diet);
    myService.mockupData.sauna.push($scope.reg.sauna);

    if (myService.mockupData.sauna === true) {
      myService.mockupData.sauna = "Yes";
    } else { 
      myService.mockupData.sauna = "No"; 
    }
  }; */

}]);

myApp.controller('viewViewController', ['$scope', 'myService', function($scope, myService){
  $scope.title = 'Attendees';
  $scope.attendees = myService.mockupData;
}]);


