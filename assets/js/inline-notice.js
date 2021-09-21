( function ( $ ) {
	UAGBInlineNotice = { // eslint-disable-line no-undef
		_run( attr, id ) {
			if ( $( id ).length === 0 ) {
				return;
			}

			const unique_id = attr.c_id;
			const is_cookie = attr.cookies;
			const cookies_days = attr.close_cookie_days;
			const current_cookie = Cookies.get( 'uagb-notice-' + unique_id ); // eslint-disable-line no-undef

			if ( 'undefined' === typeof current_cookie && true === is_cookie ) {
				$( id ).show();
			}

			if ( attr.noticeDismiss !== '' ) {
				$( id + ' .uagb-notice-dismiss' ).on( 'click', function () {
					if (
						true === is_cookie &&
						'undefined' !== typeof current_cookie
					) {
						current_cookies = Cookies.set( // eslint-disable-line no-undef
							'uagb-notice-' + unique_id,
							true,
							{ expires: cookies_days }
						);
						$( id )
							.addClass( 'uagb-notice__active' )
							.css( 'display', 'none' );
					}

					if (
						'undefined' === typeof current_cookie &&
						true === is_cookie
					) {
						current_cookies = Cookies.set( // eslint-disable-line no-undef
							'uagb-notice-' + unique_id,
							true,
							{ expires: cookies_days }
						);
						$( id )
							.addClass( 'uagb-notice__active' )
							.css( 'display', 'none' );
					}

					if ( false === is_cookie ) {
						$( id )
							.addClass( 'uagb-notice__active' )
							.css( 'display', 'none' );
					}
				} );
			}
		},
	};
} )( jQuery );
