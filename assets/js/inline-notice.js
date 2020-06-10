( function( $ ) {

	var is_cookie = $('.wp-block-uagb-inline-notice.uagb-inline_notice__outer-wrap').data( 'cookies' );
	var cookies_days = $('.wp-block-uagb-inline-notice.uagb-inline_notice__outer-wrap').data( 'cookies-days' );
	var unique_id = $('.wp-block-uagb-inline-notice.uagb-inline_notice__outer-wrap').data( 'id' );

	var current_cookie = Cookies.get( 'uagb-notice-' + unique_id );

	var dismissible = document.querySelector( '.uagb-notice-dismiss' );

	if ( dismissible ) {

	 $(".uagb-notice-dismiss").click(function(){
	 	if ( true === is_cookie && 'undefined' !== typeof current_cookie) {
	 		 current_cookies = Cookies.set( 'uagb-notice-' + unique_id, true, { expires: cookies_days } );
   			 $(".uagb-block-"+unique_id).addClass("active");
   			 $('.wp-block-uagb-inline-notice.uagb-inline_notice__outer-wrap').css('display' ,'none')
   		}

   		if( 'undefined' === typeof current_cookie && true === is_cookie ){
  	 		current_cookies = Cookies.set( 'uagb-notice-' + unique_id, true, { expires: cookies_days } );
   			 $(".uagb-block-"+unique_id).addClass("active");
   		 	$('.wp-block-uagb-inline-notice.uagb-inline_notice__outer-wrap').css('display' ,'none')
  	 	}

  	 	if( false === is_cookie ){
  	 		$(".uagb-block-"+unique_id).addClass("active");
   			 $('.wp-block-uagb-inline-notice.uagb-inline_notice__outer-wrap').css('display' ,'none')
   		}
  	 });

  	 $( window ).on( "load", function(){
  	 	if ( true === is_cookie && 'undefined' !== typeof current_cookie ) {
   		 $(".uagb-block-"+unique_id).addClass("active");
   		 $('.wp-block-uagb-inline-notice.uagb-inline_notice__outer-wrap').css('display' ,'none');
   		}

   		if( 'undefined' === typeof current_cookie && true === is_cookie ){
  	 		$('.wp-block-uagb-inline-notice.uagb-inline_notice__outer-wrap').css('display' ,'block');
  	 	}
  	 });

  	}

} )( jQuery );