

angular.module("Autorizacion", []);

angular.module("Home", []);

var app = angular.module("myApp", ["Autorizacion", "Home", "ngRoute"]);

app.config(function ($routeProvider) {
    $routeProvider
            .when("/", {
                controller: "LoginController",
                templateUrl: "modulos/autorizacion/views/login.html"
            })
            .when("/home", {
                controller: "HomeController",
                templateUrl: "modulos/home/views/home.html"
            });
});