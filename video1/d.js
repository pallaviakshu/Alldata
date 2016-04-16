var app = angular.module("myApp",[]);

// app.config(function($routeProvider){
//     $routeProvider
//     .when('/',
//     {
//         tempplateUrl: "view/app.html",
//         controller: "myCtrl",
//         resolve: {
//             app: function($q){
//                 var defer = $q.defer();
//                 defer.resolve();
//                 return defer.promise;
//             }
//         }
//     })
// });

// app.config(function($routeProvider){
//      $routeProvider
//      .when('/:message',
//         {         
//             tempplateUrl: "app.html",
//             controller: "myCtrl",
//         })
// });



app.controller("myCtrl",function($scope){
    $scope.things = ["one","two","three"]

      // $scope.model = {
      //     message: $routeParams.message
      // }

    // $scope.model = {
    //      message: "Address:" + 
    //      $routeParams.country + " " + 
    //      $routeParams.state + " " + 
    //      $routeParams.city + " " + 
    // }
});

app.directive("clock",function() {
    return {
        restrict: "E",
        scope: {
            timezone: "@"
        },
        template: "<div>12:00pm {{timezone}}</div>"
    }
});

app.directive("country",function() {
    return {
        restrict: "E",
        controller: function() {
            this.makeAnnouncement = function (message){
                console.log("Country says:" + message);
            }
        }
    }
});

app.directive("state",function() {
    return {
        restrict: "E",
        require: "country",
        controller: function() {
            this.makelaw = function(law) {
                console.log("Law:" +law);
            }
        },
        link: function(scope,element,attrs,countryCtrl) {
        }
    }
});

 app.directive("city",function() {
     return {
         restrict: "E",
         require: ["^country","^state"],
            link: function($scope,element,attrs,ctrls) {
               ctrls[0].makeAnnouncement("from city");
             ctrls[1].makelaw("Jump higher");
            }
     }
});


