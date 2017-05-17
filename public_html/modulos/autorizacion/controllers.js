var appLogin = angular.module('Autorizacion');

appLogin.service('mensaje', function ($timeout, $location, borrarMensaje, reDireccionar) {
    this.mostraMensaje = function ($scope, response) {
        if (response.data === "Valido") {
            $scope.success = "Bienvedido";
            reDireccionar.redi($timeout, $location);
        } else {
            $scope.error = response.data;
            borrarMensaje.borrar($timeout, $scope);
        }
    };

});

appLogin.service('reDireccionar', function () {
    this.redi = function ($timeout, $location) {
        $timeout(function () {
            $location.path('/home');
        }, 1000);
    };

});

appLogin.service('borrarMensaje', function () {
    this.borrar = function ($timeout, $scope) {
        $timeout(function () {
            $scope.error = "";
            $scope.dataLoading = false;
        }, 2000);
    };

});

appLogin.controller('LoginController', function ($scope, $http, mensaje) {
    var baseUrl = "http://localhost:8080/webServicesRest/rs/usuario/login/";
    $scope.login = function () {
        $scope.dataLoading = true;
        $http.get(baseUrl + $scope.username + "/" + $scope.password)
                .then(function(response) {
                    mensaje.mostraMensaje($scope, response);
                }, function (response) {
                    alert(response.statusText);
                });
    };
});