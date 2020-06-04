( function( $ ) {

	$ = jQuery;

	var InlineNoticeElements = document.getElementsByClassName( 'wp-block-uagb-inline-notice' );

	$('span.uagb-notice-dismiss').click(function () {
	        InlineNoticeElements[0].style.display='none'
	        // $("#").show();   
	    });

} )( jQuery )