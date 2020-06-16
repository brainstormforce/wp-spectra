( function( $ ) {

	UAGBInlineNotice = {

	_run: function( attr, id ) {

	var unique_id = $(id).data( 'id' );
	var is_cookie = $(id).data( 'cookies' );
	var cookies_days = $(id).data( 'cookies-days' );
	var current_cookie = Cookies.get( 'uagb-notice-' + unique_id );

	$( document ).ready(function() {

		if( 'undefined' === typeof current_cookie && true === is_cookie ){
			$(id).show()
		}
	});
	
	var dismissible = document.querySelector( '.uagb-notice-dismiss' );

	if ( dismissible ) {
	 $(id+" .uagb-notice-dismiss").click(function(){
	 	if ( true === is_cookie && 'undefined' !== typeof current_cookie) {
	 		 current_cookies = Cookies.set( 'uagb-notice-' + unique_id, true, { expires: cookies_days } );
         $(id).addClass("active").css('display' ,'none')
   		}

   		if( 'undefined' === typeof current_cookie && true === is_cookie ){
  	 		current_cookies = Cookies.set( 'uagb-notice-' + unique_id, true, { expires: cookies_days } );
        $(id).addClass("active").css('display' ,'none')
  	 	}

  	 	if( false === is_cookie ){
          $(id).addClass("active").css('display' ,'none')
   		}
  	 });


  	}
  	}
  }

} )( jQuery );