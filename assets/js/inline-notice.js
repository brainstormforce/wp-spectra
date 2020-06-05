document.addEventListener( 'DOMContentLoaded', function() {
	var notices = document.querySelectorAll(
		'.wp-block-uagb-inline-notice.uagb-inline_notice__outer-wrap[data-id]'
	);

	notices.forEach( function( element ) {
		var unique_id = element.getAttribute( 'data-id' );

		var dismissible = element.querySelector( '.uagb-notice-dismiss' );

		if ( ! localStorage.getItem( 'uagb-notice-' + unique_id ) ) {

			element.style.display = 'block';
		}

		if ( dismissible ) {
			dismissible.addEventListener( 'click', function( event ) {
				event.preventDefault();
				localStorage.setItem( 'uagb-notice-' + unique_id, '1' );
				element.style.display = 'none';
			} );
		}
	} );

} );