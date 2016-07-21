app.directive('muebleImage',function() {
	return {
    	restrict: 'E',
    	scope: {
    		mueble: '='
    	},
    	templateUrl: 'js/directives/muebleImage.html'
  	};
});
