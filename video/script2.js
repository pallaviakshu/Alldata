var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope) {
    $scope.message="angular";
    $scope.firtName="pallavi";
    $scope.lastName="gaikwad";
    $scope.firstNo=5;
    $scope.secondNo=7;
    $scope.data1="pallavi";
    $scope.logClore = function (chore) {
        alert(chore + "is done!");
    }
    function display_alert()
    {
        alert("hi");
    }

    $scope.sayHi = function (){
         alert("hi")
     }
});

app.directive("kid",function() {
    return {
        restrict: "E",
        scope:{
            done:"&"
        },
        template: '<input type="text" ng-model="chore">' + 
        '{{chore}}' + 
        '<div class="button" ng-click="done({chore:chore})">I\'am done!</div>'
    }
});

app.directive("superman",function() {
     return {
         restrict: "A",
        link: function() {
             alert("I am superman")
         }
     }
 });

 app.directive("flash",function() {
     return {
         restrict: "A",
         link: function() {
             alert("I am working faster")
         }
     }
 });


app.directive("enter",function() {
    return function($scope,element,attrs) {
        element.bind("mouseenter",function() {
           element.addClass(attrs.enter);
    });
    }
});


app.directive("leave",function() {
    return function($scope,element,attrs) {
        element.bind("mouseleave",function() {
            element.removeClass(attrs.enter);
        });
    }
});



