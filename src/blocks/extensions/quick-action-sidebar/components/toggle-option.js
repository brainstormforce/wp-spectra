/**
 * Creates a toggle option.
 */
import { ToggleControl } from '@wordpress/components';
import getApiData from '@Controls/getApiData';

const ToggleOption = ( props ) => {
	const { label, enableQuickActionSidebar, updateEnableQuickActionSidebar } = props;

	const saveOptionToDatabase = ( toggleStatus ) => {
		updateEnableQuickActionSidebar( toggleStatus );
		// Create an object with the uagb_ajax_nonce and confirmation properties.
		const data = {
			security: uagb_blocks_info.uagb_ajax_nonce,
			enableQuickActionSidebar: toggleStatus,
		};
		// Call the getApiData function with the specified parameters.
		getApiData( {
			url: uagb_blocks_info.ajax_url,
			action: 'uag_global_sidebar_enabled',
			data,
		} );
	}

	const toggleHandler = () => {
		const toggleStatus = 'disabled' === enableQuickActionSidebar ? 'enabled' : 'disabled';
		saveOptionToDatabase( toggleStatus );
	};

	return (
		<div>
			<ToggleControl
				label={ label }
				checked={ 'enabled' === enableQuickActionSidebar }
				onChange={ toggleHandler }
			/>
		</div>
	);
};

export default ToggleOption;