var app = angular.module("myApp",[]);
 app.controller("myCtrl",function($scope){
     this.sayHi = function (){
         alert("hi");
     }
     alert("welcome")
 });


app.run(function($templateCache) {
    $templateCache.put("zippy.html",'<div><h3 ng-click="toggleContent()">{{title}}</h3><div ng-show="isContentVisible" ng-transclude></div></div>')
});

app.directive("zippy",function($templateCache) {

    return{
        restrict:"E",
        transclude:true,
        scope:{
            title:"@"
        },
        templateUrl:'zippy.html',
        link: function(scope) {
            scope.isContentVisible = true;

            scope.toggleContent =function() {
                scope.isContentVisible = !scope.isContentVisible;
            }
        }
    }
});