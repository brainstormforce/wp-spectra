import { useEffect, useRef } from '@wordpress/element';
import { useSelect } from '@wordpress/data';
import { STORE_KEY } from '../store';
import { toast } from 'react-toastify';
import toaster from '../components/reusable/toaster';

/**
 * Used to show toaster when sync is in progress.
 *
 * @param {string} type
 * @return {void}
 */
const useSyncToaster = ( type ) => {
	const { syncFlags, syncStatus, reSyncCatContent, currentCategory, syncMessage } =
		useSelect( ( select ) => {
			const {
				getDynamicContentSyncStatus,
				getDynamicContentSyncFlags,
				getDynamicContentReSyncStatus,
				getCurrentCategory,
				getDynamicContentSyncMessage,
			} = select( STORE_KEY );
			return {
				syncStatus: getDynamicContentSyncStatus()[ type ],
				syncFlags: getDynamicContentSyncFlags()[ type ],
				reSyncCatContent: getDynamicContentReSyncStatus(),
				currentCategory: getCurrentCategory()[ type ],
				syncMessage: getDynamicContentSyncMessage(),
			};
		} );
	const syncToast = useRef( null );

	useEffect( () => {
		if ( reSyncCatContent ) {
			return;
		}

		const calculateSyncProgress = () => {
			const totalFlags = Object.values( syncFlags );
			const doneSync = totalFlags.reduce( ( acc, flag ) => {
				if ( flag ) {
					return acc + 1;
				}
				return acc;
			}, 0 );
			return Math.round( ( doneSync / totalFlags.length ) * 100 );
		};

		if ( !! syncStatus && syncToast.current === null && currentCategory?.name ) {
			syncToast.current = toast(
				toaster( {
					title: 'Personalizing "' + currentCategory?.name + '"',
					message: 'Please wait a few moments. We are personalizing categories.',
					showProgress: true,
					progress: calculateSyncProgress(),
				} ),
				toaster.getOptions( { type: 'sync' } )
			);
		}

		if ( syncToast.current !== null && currentCategory?.name ) {
			toast.update(
				syncToast.current,
				{
					...toaster.getOptions( { type: 'sync' } ),
					render: toaster(
						{
							title: 'Personalizing "' + currentCategory?.name + '"',
							message:
                                'Please wait a few moments. We are personalizing categories.',
							showProgress: true,
							progress: calculateSyncProgress(),
						}
					),
				}
			);
		}

		if ( ! syncStatus && syncToast.current !== null && calculateSyncProgress() === 100 ) {
			toast.update(
				syncToast.current,
				{
					...toaster.getOptions( { type: 'success' } ),
					render: toaster(
						{
							title: 'Library Personalized',
							message:
								'Your library personalized successfully.',
						}
					),
				}
			);
			syncToast.current = null;
		}

		if ( ! syncStatus && syncToast.current !== null && calculateSyncProgress() < 100 && !! syncMessage ) {
			toast.update(
				syncToast.current,
				{
					...toaster.getOptions( { type: syncMessage.type } ),
					render: toaster(
						{
							title: syncMessage.title,
							message: syncMessage.message,
						}
					),
				}
			);
			syncToast.current = null;
		}

		if ( ! syncStatus && syncToast.current !== null && calculateSyncProgress() < 100 ) {
			toast.update(
				syncToast.current,
				{
					...toaster.getOptions( { type: 'error' } ),
					render: toaster(
						{
							title: 'Error!',
							message:
								'An error occurred while personalizing. Please try again.',
						}
					),
				}
			);
			syncToast.current = null;
		}
	}, [ syncStatus, syncFlags, currentCategory, reSyncCatContent, syncToast ] );
};

export default useSyncToaster;
