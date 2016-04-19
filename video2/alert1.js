var app = angular.module("myApp",[]);

var phoneAppStuff = {}

phoneAppStuff.controllers = {}
phoneAppStuff.controllers.AppCtrl = function ($scope) {
    this.sayHi = function() {
        alert("hi");
    }
    return $scope.AppCtrl = this;
}

phoneAppStuff.directives = {}
phoneAppStuff.directives.panel = function() {
    return {
        restrict: "E"
    }
}

app.directive(phoneAppStuff.directives);
app.controller(phoneAppStuff.controllers);
