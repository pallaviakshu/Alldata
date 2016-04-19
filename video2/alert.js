var app = angular.module("myapp",[]);

app.controller("myCtrl",function() {
    this.openDoor = function() {
        alert("creak");

    }
});