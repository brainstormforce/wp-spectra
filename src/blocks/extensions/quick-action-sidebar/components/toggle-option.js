/**
 * Creates a toggle option.
 */
import { ToggleControl } from '@wordpress/components';
import getApiData from '@Controls/getApiData';
import { dispatch } from '@wordpress/data';
import { sidebarNoticeID } from './notice';
import { useState } from '@wordpress/element';

const ToggleOption = ( props ) => {
	const { label, enableQuickActionSidebar, getNoticeForQuickActionSidebar, updateNoticeForQuickSidebarBlocks, updateEnableQuickActionSidebar } = props;
	const [isEventTriggered, setIsEventTriggered] = useState( false );
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
		// Check if localize value ( not store value ) disable, then run create custom event with value toggle status. 
		if ( ! isEventTriggered && 'disabled' === uagb_blocks_info.enableQuickActionSidebar ){
			const loadQABEditor = new CustomEvent( 'UAGBQABEditor', {
				// eslint-disable-line no-undef
				detail: { toggleStatus },
			} );
			setIsEventTriggered( true );
			document?.dispatchEvent( loadQABEditor );
		}
		// If getNoticeForQuickActionSidebar is 1, then remove notice using id and update notice value to hide.
		if ( 1 === getNoticeForQuickActionSidebar ) {
			dispatch( 'core/notices' ).removeNotice( sidebarNoticeID );
			updateNoticeForQuickSidebarBlocks( 'hide' );
		}

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