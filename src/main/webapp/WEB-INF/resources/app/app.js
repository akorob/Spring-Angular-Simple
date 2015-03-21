var app = angular.module('templ', []);

app.run(function () { });

app.controller("NavController", ["$scope", "$rootScope",
    function ($scope, $rootScope) {
        console.log("NavController");

        $scope.placeholder = "hello world";


}]);


