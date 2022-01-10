// Code goes here

angular.module("login", [])

.controller("loginCtrl", ['$scope', '$http', 'login', function($scope, $http, login) {
  $scope.partialUrl = "login.html"
  $scope.user = {};
  $scope.doLogin = function(user) {
    //do networking stuff here
    login(user.name)
    console.log("user logged in:  " + user.name)
  };
  $scope.goToRegistration = function() {
    $scope.partialUrl = "register.html"
    $scope.newUser = {};
  };
  $scope.registerUser = function(user) {
    //do networking stuff here
    console.log("registered: " + user.name)
  };
}])

.factory('login', ['$http', function($http) {
  var auth = [];
  
  return function(auth) {
    var user = {
      "username" : $("#username").val(),
      "password" : $("#password").val()
      
    }
    console.log(user);
    $http.post('http://thecurtisplace.com/startuppredictions/public_html/php/login.php', {
      userName: user.username,
      password: user.password
    }).
    then(function(response) {
      // this callback will be called asynchronously
      // when the response is available
    }, function(response) {
      // called asynchronously if an error occurs
      // or server returns response with an error status.
    });
  };
}]);