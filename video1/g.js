var app = angular.module("myApp",[]);

app.directive("clock",function() {
    return {
        restrict: "E",
        scope: {
            timezone: "@"
        },
        template: "<div>12:00pm {{timezone}}</div>"
    }
});
