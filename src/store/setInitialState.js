import apiFetch from '@wordpress/api-fetch';
import { dispatch } from '@wordpress/data';
import { store as spectraStore } from '@Store';

const setInitialState = () => {
    apiFetch( {
        path: '/spectra/v1/editor',
    } ).then( ( data ) => {
        const initialState = {
            initialStateSetFlag : true,
            globalBlockStyles: data.spectra_global_block_styles,
            globalBlockStylesFontFamilies: data.spectra_gbs_google_fonts_editor,
            enableQuickActionSidebar: data.uag_enable_quick_action_sidebar, // 'enabled' | 'disabled' quick action sidebar.
            defaultAllowedQuickSidebarBlocks: data.uagb_quick_sidebar_allowed_blocks, // Default blocks allowed in the quick action sidebar.
        };
		// Check if the data is available in the database.
		if ( data.uag_show_notice_for_qab )	{
			initialState.showNoticeForQuickActionSidebar = 1; // Show notice for quick action sidebar.
		}
        dispatch( spectraStore ).updateInitialState( initialState );
    } );
};

export default setInitialState;
