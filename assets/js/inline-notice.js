
UAGBInlineNotice = { // eslint-disable-line no-undef
	init( attr, id ) {
		const main = document.querySelectorAll( id );

		if( main.length === 0 ){
			return;
		}

		const uniqueId = attr.c_id;
		const isCookie = attr.cookies;
		const cookiesDays = attr.close_cookie_days;
		const currentCookie = Cookies.get( 'uagb-notice-' + uniqueId );

		for ( const mainWrap of main ) {
			if ( 'undefined' === typeof currentCookie && true === isCookie ) {
				mainWrap.style.display = 'block';
			}
			const noticeDismissClass = mainWrap.querySelector( '.uagb-notice-dismiss' );
			const closeBtn = noticeDismissClass ? noticeDismissClass : mainWrap.querySelector( 'svg' );

			if ( '' !== attr.noticeDismiss && '' !== attr.icon ) {
				closeBtn.addEventListener( 'click', function () {
					if ( true === isCookie && 'undefined' === typeof currentCookie ) {
						Cookies.set(
							'uagb-notice-' + uniqueId,
							true,
							{ expires: cookiesDays }
						);
					}

					this.parentElement.classList.add( 'uagb-notice__active' );
					this.parentElement.style.display = 'none';
				} );
			}
		}
	},
};
