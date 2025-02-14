import './sure-cart-checkout/block.js';
import './sure-cart-product/block.js';
import './sure-forms/block.js';
import getApiData from '@Controls/getApiData';
import { __, sprintf } from '@wordpress/i18n';
// Common function for plugin activation
export const handlePluginActivation = async ( button, action, messages, setSureCartBlockHelper ) => {
	const { ajax_url, uagb_ajax_nonce } = uagb_blocks_info;

	const updateButtonText = ( blockText ) => {
		if ( setSureCartBlockHelper ) {
			setSureCartBlockHelper( blockText );
		}
		button.innerText = sprintf( /* translators: abbreviation for units */ __( '%s ', 'ultimate-addons-for-gutenberg' ), blockText );
	};

	const fetchApiData = async ( action ) => { // eslint-disable-line no-shadow
		const data = {
			security: uagb_ajax_nonce,
		};

		try {
			const response = await getApiData( {
				url: ajax_url,
				action,
				data,
			} );
			return typeof response === 'object' ? response : response.json();
		} catch ( error ) {
			return { success: false };
		}
	};

	const displayNotice = ( status, message ) => {
		( function ( wp ) {
			wp.data.dispatch( 'core/notices' ).createNotice(
				status, // Can be one of: success, info, warning, error.
				message, // Text string to display.
				{
					isDismissible: true, // Whether the user can dismiss the notice.
				}
			);
		}( window.wp ) );
	};

	updateButtonText( messages.blockTextStart );

	const result = await fetchApiData( action );
	if ( result.success ) {
		const currentPostId = wp.data.select( 'core/editor' )?.getCurrentPostId();
		if ( currentPostId ) {
			let message;
			try {
				message = sprintf( /* translators: abbreviation for units */ __( '%s The page will be saved and refreshed.', 'ultimate-addons-for-gutenberg' ), messages.blockTextSuccess )
				displayNotice( 'success', message );
				await wp.data.dispatch( 'core/editor' ).savePost( currentPostId );
				updateButtonText( messages.blockTextSuccess );
				window.location.reload();
			} catch ( error ) {
				message = sprintf(
					/* translators: %s: error message */
					__( `Error saving the page: %s`, 'ultimate-addons-for-gutenberg' ),
					error
				);
				displayNotice( 'error', message );
			}
		}
		const widgetArea = wp.data.select( 'core/edit-widgets' );
		if ( widgetArea ) {
			let message;
			try {
				message = sprintf( /* translators: abbreviation for units */ __( '%s The page will be saved and refreshed.', 'ultimate-addons-for-gutenberg' ), messages.blockTextSuccess )
				displayNotice( 'success', message );
				await wp.data.dispatch( 'core/edit-widgets' ).saveEditedWidgetAreas();
				updateButtonText( messages.blockTextSuccess );
				window.location.reload();
			} catch ( error ) {
				message = sprintf(
					/* translators: %s: error message */
					__( `Error saving the page: %s`, 'ultimate-addons-for-gutenberg' ),
					error
				);
				displayNotice( 'error', message );
			}
		}
	} else {
		updateButtonText( messages.error );
	}
};