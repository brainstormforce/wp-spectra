import { __ } from '@wordpress/i18n';
import getApiData from '@Controls/getApiData';
import { useEffect } from '@wordpress/element';
import { useDispatch } from '@wordpress/data';
// Notice ID.
export const sidebarNoticeID = 'quick-action-sidebar/add-notices-flow/guide-notice';

export const Notice = ( props ) => {
	const { getNoticeForQuickActionSidebar, updateEnableQuickActionSidebar } = props;
	const { createNotice } = useDispatch( 'core/notices' );

	useEffect( () => {
		// If getNoticeForQuickActionSidebar is 1, then set it to 'enabled'.
		if ( 1 === getNoticeForQuickActionSidebar ) {
			// Step 1 : Show notice for quick action sidebar.
			const linkText = __( 'Refer documentation for more information', 'ultimate-addons-for-gutenberg' );
			const description = __( 'To disable the Quick Action Bar, click the Spectra icon at the top right of the editing screen and disable the Quick Action Bar in the "Spectra Page Settings" section.', 'ultimate-addons-for-gutenberg' );
			const noticeLink = `
			<div class="components-notice__content">
				${description}
				<div class="components-notice__actions">
					<a href="https://wpspectra.com/docs/quick-action-bar/" target="_blank" rel="noreferrer" class="components-button components-notice__action is-link">
						${linkText}
					</a>
				</div>
			</div>`;

			createNotice(
				'info',
				noticeLink,
				{
					isDismissible: true, // Whether the user can dismiss the notice.
					id: sidebarNoticeID,
					__unstableHTML: true,
				}
			);

			// Step 2 : Call Ajax to update the getEnableQuickActionSidebar value in the database to 'enabled'.
			updateEnableQuickActionSidebar( 'enabled' );

			// Create an object with the uagb_ajax_nonce and confirmation properties.
			const data = {
				security: uagb_blocks_info.uagb_ajax_nonce,
				enableQuickActionSidebar: 'enabled',
			};

			// Call the getApiData function with the specified parameters.
			getApiData( {
				url: uagb_blocks_info.ajax_url,
				action: 'uag_global_sidebar_enabled',
				data,
			} );
		}
	}, [] );

	return null;
};