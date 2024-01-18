import { useSelect } from '@wordpress/data';

export const useDeviceType = () => {
	const deviceType = useSelect( ( select ) => {
		const getDeviceFromStore = select( 'core/edit-site' )?.__experimentalGetPreviewDeviceType() ||
			select( 'core/edit-post' )?.__experimentalGetPreviewDeviceType();
		
		return getDeviceFromStore || 'Desktop'
	}, [] );

	return deviceType || '';
};
