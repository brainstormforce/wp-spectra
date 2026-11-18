import { useSelect } from '@wordpress/data';
import { useEffect, useRef } from '@wordpress/element';
import { STORE_KEY } from '../store';
import { toast } from 'react-toastify';
import toaster from '../components/reusable/toaster';

const useSyncLib = () => {
	const { notice } = useSelect( ( select ) => {
		const { getNotice } = select( STORE_KEY );
		return {
			notice: getNotice(),
		};
	} );
	const toastId = useRef( null );

	useEffect( () => {
		const { type, title, message } = notice;
		if ( ( type === 'info' || type === 'personalize' ) && ! toastId.current ) {
			toastId.current = toast(
				toaster( {
					title: title || 'Syncing design library',
					message: message || 'Please wait for a few moment, we are syncing the library',
				} ),
				toaster.getOptions( { type: type === 'personalize' ? 'personalize' : 'sync-lib-start' } )
			);
		}

		if ( type === 'success' && toastId.current ) {
			toast.update(
				toastId.current,
				{
					...toaster.getOptions( { type: 'sync-lib-success' } ),
					render: toaster( {
						title: title || 'Successfully synced!',
						message: message || 'Syncing design library is completed',
					} ),
				}
			);
			toastId.current = null;
		}

		if ( type === 'error' && toastId.current ) {
			toast.update(
				toastId.current,
				{
					...toaster.getOptions( { type: 'sync-lib-error' } ),
					render: toaster( {
						title: title || 'Syncing failed!',
						message: message || 'Syncing design library is failed',
					} ),
				}
			);
			toastId.current = null;
		}
	}, [ notice ] );
};

export default useSyncLib;
