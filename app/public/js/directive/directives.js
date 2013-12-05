var directives = angular.module('Directives', []);

directives.directive('ngEnter', function() {
	return function(scope, element, attrs) {
        element.bind("keydown keypress", function(event) {
           	if(event.which === 13) {
            	scope.$apply(function(){
                	scope.$eval(attrs.ngEnter);
            	});

                event.preventDefault();
            }
        });
    };
}).directive( 'goClick', function ( $location ) {
  return function ( scope, element, attrs ) {
    var path;

    attrs.$observe( 'goClick', function (val) {
      path = val;
    });

    element.bind( 'click', function () {
      scope.$apply( function () {
        $location.path( path );
      });
    });
  };
});