(function($) {
    "use strict";

	// Listen for events.
	window.addEventListener("load", uagbTmFunc);

	// Callback function for all event listeners.
	function uagbTmFunc() {
		
		if( $('.wp-block-uagb-testimonial').length > 0){
			console.log("admin");
		}else{
			console.log("frontend");
		}
	}

 })(jQuery);
