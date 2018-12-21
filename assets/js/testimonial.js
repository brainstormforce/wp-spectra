function uagb_testimonial_init( selector, settings) {
	if( jQuery(".wp-block-uagb-testimonial").length > 0){
		return true
	}else{
		jQuery( selector ).find( ".is-carousel" ).slick( settings );
	}
}