import { useDispatch, useSelect } from '@wordpress/data';
import { STORE_KEY } from '../store';
import { getAstraSitesProStatus } from '../utils/helpers';
import apiFetch from '@wordpress/api-fetch';
import { toast } from 'react-toastify';
import toaster from '../components/reusable/toaster';
import { useState } from '@wordpress/element';

const loadingStatuses = {
	loading: 'loading',
	success: 'success',
	error: 'error',
};

const useLicense = () => {
	const { licenseStatus } = useSelect( ( select ) => {
		const { getLicenseStatus } = select( STORE_KEY );

		return {
			licenseStatus: getLicenseStatus(),
		};
	}, [] );
	const { updateLicenseStatus } = useDispatch( STORE_KEY );

	const [ loadingStatus, setLoadingStatus ] = useState( '' );

	const handleActivateLicense = async ( licenseKey ) => {
		if ( loadingStatus === loadingStatuses.loading ) {
			return;
		}
		setLoadingStatus( loadingStatuses.loading );
		try {
			const response = await apiFetch( {
				path: `/bsf-core/v1/license/activate`,
				data: {
					'license-key': licenseKey,
					'product-id': 'astra-pro-sites',
				},
				method: 'POST',
				headers: {
					'X-WP-Nonce': ast_block_template_vars.rest_api_nonce,
				},
			} );

			if ( response.success ) {
				setLoadingStatus( loadingStatuses.success );

				toast(
					toaster( {
						title: 'Successfully activated!',
						message: 'Your license key has been activated successfully.',
					} ),
					toaster.getOptions( { type: 'success' } )
				);

				// Update the redux store license status.
				updateLicenseStatus( 'active' );

				return response;
			}
			throw response;
		} catch ( error ) {
			setLoadingStatus( loadingStatuses.error );

			toast(
				toaster( {
					title: 'Failed to activate!',
					message: error?.message ?? 'Your license key could not be activated.',
				} ),
				toaster.getOptions( { type: 'error' } )
			);

			console.error( error );

			return error;
		}
	};

	return { licenseStatus, getAstraSitesProStatus, handleActivateLicense, loadingStatus };
};

export default useLicense;
