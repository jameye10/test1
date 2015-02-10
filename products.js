(function()(
	var app = angular.module('tutorials-directives', []);

	  app.directive("thingsUrl", function() {
      return {
        restrict: 'AEC',
        templateUrl: "things-url.html"
      };
    });

    app.directive("thingsTitle", function() {
      return {
        restrict: 'AEC',
        templateUrl: "things-title.html"
      };
    });

    app.directive("thingsImage", function() {
      return {
        restrict:"AEC",
        templateUrl: "things-image.html"
      };
    });

	 app.directive("thingsAuthor", function() {
      return {
        restrict:"AEC",
        templateUrl: "things-author.html"
      };
    });
	
	)
)