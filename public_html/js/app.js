angular.module('Autorizar', [])
var app = angular.module('indexApp', ['Autorizar', 'ngRoute']);

app.config(function ($routeProvider) {
    $routeProvider
            .when('/', {
                templateUrl: 'modules/login/views/login.html',
                controller: 'LoginController'
            })
            .when('/home', {
                templateUrl: 'view/home.html',
                controller: 'Home'
            })
            .when('/lista', {
                templateUrl: 'view/lista.html',
                controller: 'Lista'
            });
});
app.controller('LoginController', function ($scope, $http) {
    $http({
        method: "GET",
        url: "http://localhost:8080/webServicesRest/rs/usuario/1"
    }).then(function mySucces(response) {
        $scope.content = response.data;
        $scope.statuscode = response.status;
        $scope.statustext = response.statustext; 
    }, function myError(response) {
        alert("error");
    });
});
//app.controller("parisCtrl", function ($scope) {
//    $scope.msg = "I love Paris";
//});