var myApp = angular.module('myApp', []);
myApp.factory('Data',function () {
return {message:"I am pallavi gaikwad"}
})

myApp.filter('reverse',function (){
     return function(text) {
         return text.split("").reverse().join("");
     }
})

function myCtrl($scope,Data){
    $scope.data= Data;
}

function SecondCtrl($scope,Data){
    $scope.data= Data;

    $scope.reversedMessage = function (message) {
        return message.split(""),reverse().join("");
    }
}