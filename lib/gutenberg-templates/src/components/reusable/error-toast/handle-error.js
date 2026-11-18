import { toast } from 'react-toastify';
import { __, sprintf } from '@wordpress/i18n';
import toaster from '../toaster';

/**
 * Display an error toast notification and log the error to the console.
 *
 * @param {Error} error The error object.
 */
export const logError = ( error ) => {
	const errorMessage = error.message ? error.message : error.data;

	toast(
		toaster( {
			title: __( 'Error Occurred!', 'ast-block-templates' ),
			message: sprintf(
				/* translators: %s: error message */
				__( 'Error: %s', 'ast-block-templates' ),
				errorMessage.toString()
			),
		} ),
		toaster.getOptions( { type: 'error' } )
	);
};
