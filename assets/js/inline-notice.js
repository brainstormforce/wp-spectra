document.addEventListener( 'DOMContentLoaded', function() {
	var notices = document.querySelectorAll(
		'.wp-block-uagb-inline-notice.uagb-inline_notice__outer-wrap[data-id]'
	);

	notices.forEach( function( element ) {
		var unique_id = element.getAttribute( 'data-id' );

		var delete_local_storage = element.getAttribute( 'data-delete' );

		var dismissible = element.querySelector( '.uagb-notice-dismiss' );

		if ( ! localStorage.getItem( 'uagb-notice-' + unique_id ) ) {

			element.style.display = 'block';
		}

		if ( dismissible ) {
			if ( 'deleteThis' === delete_local_storage ){
				localStorage.removeItem( 'uagb-notice-' + unique_id );
			} else if( 'deleteAll' === delete_local_storage ) {
				localStorage.clear();
			} else{
				localStorage.setItem( 'uagb-notice-' + unique_id, '1' );
			}
			dismissible.addEventListener( 'click', function( event ) {
				event.preventDefault();
					element.style.display = 'none';
			} );
		}
	} );

} );