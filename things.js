
    var app = angular.module('tutorials-directives', []);

    app.directive("thingUrl", function () {
        return {
            restrict: 'E',
            templateUrl: "thing-url.html"
        };
    });

    app.directive("thingTitle", function () {
        return {
            restrict: 'E',
            templateUrl: "thing-title.html"
        };
    });

    app.directive("thingImage", function () {
        return {
            restrict: "E",
            templateUrl: "thing-image.html"
        };
    });

    app.directive("thingAuthor", function () {
        return {
            restrict: "E",
            templateUrl: "thing-author.html"
        };
    });

