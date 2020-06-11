( function( $ ) {

	UAGBInlineNotice = {

	_run: function( attr, id ) {
	var unique_id = $(id).data( 'id' );
	var is_cookie = $(id).data( 'cookies' );
	var cookies_days = $(id).data( 'cookies-days' );
	var current_cookie = Cookies.get( 'uagb-notice-' + unique_id );

	var dismissible = document.querySelector( '.uagb-notice-dismiss' );

	if ( dismissible ) {

	 $(id+" .uagb-notice-dismiss").click(function(){
	 	if ( true === is_cookie && 'undefined' !== typeof current_cookie) {
	 		 current_cookies = Cookies.set( 'uagb-notice-' + unique_id, true, { expires: cookies_days } );
   			 $(".uagb-block-"+unique_id).addClass("active");
   			 $(id).css('display' ,'none')
   		}

   		if( 'undefined' === typeof current_cookie && true === is_cookie ){
  	 		current_cookies = Cookies.set( 'uagb-notice-' + unique_id, true, { expires: cookies_days } );
   			 $(".uagb-block-"+unique_id).addClass("active");
   		 	$(id).css('display' ,'none')
  	 	}

  	 	if( false === is_cookie ){
  	 		$(".uagb-block-"+unique_id).addClass("active");
   			  $(id).css('display' ,'none')
   		}
  	 });

  	 $( window ).on( "load", function(){
  	 	if ( true === is_cookie && 'undefined' !== typeof current_cookie ) {
   		 $(".uagb-block-"+unique_id).addClass("active");
   		 $(id).css('display' ,'none')
   		}

   		if( 'undefined' === typeof current_cookie && true === is_cookie ){
  	 		$(id).css('display' ,'block')
  	 	}
  	 });

  	}
  	}
  }

} )( jQuery );