var app = angular.module("myApp",[]);
app.controller("myCtrl",function($scope) {
    $scope.callHome= function(message) {
            alert(message)
    }
});

app.directive("phone",function() {
    return {
        scope:{
            dial:"&"
        },
        template:'<input type="text" ng-module="value">' + 
        '<div class="button" ng-click="dial({message:value})">call home!</div>'
    }
});

app.directive("zippy",function() {
    return {
        restrict:"E",
        template:'<div>Hello world</div>'
    }
});

app.config(function($routeProvider,$locationProvider) {
    $routeProvider
    .when('/',
    {
        templateUrl: "view/app.html",
        controller: "ViewCtrl",
        resolve: {
            loadData: viewCtrl.loadData
        }
    })
});

app.directive("error",function($rootScope) {
    return {
        restrict: "E",
        template:'div class="alert-box alert">error!!!!</div>'
    }
})
