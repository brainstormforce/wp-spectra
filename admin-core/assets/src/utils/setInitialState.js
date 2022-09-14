import apiFetch from '@wordpress/api-fetch';

const setInitialState = ( store ) => {
    apiFetch( {
        path: '/uag/v1/admin/commonsettings/',
    } ).then( ( data ) => {
        const initialState = {
            initialStateSetFlag : true,
            activeBlocksFilterTab : 'all',
            activeSettingsNavigationTab : 'global-settings',
			settingsSavedNotification: '',
            blocksStatuses : data.blocks_activation_and_deactivation,
            enableFileGeneration : data._uagb_allow_file_generation,
            enableTemplates : data.uag_enable_templates_button,
            enableBeta : data.uagb_beta,
			enableLegacyBlocks: data.uag_enable_legacy_blocks,
            enableSelectedFontFamilies : data.uag_load_select_font_globally,
            selectedFontFamilies :  data.uag_select_font_globally,
            enableLoadFontsLocally : data.uag_load_gfonts_locally,
            enablePreloadLocalFonts : data.uag_preload_local_fonts,
            enableCollapsePanels : data.uag_collapse_panels,
            enableCopyPasteStyles : data.uag_copy_paste,
            enableDisplayConditions: data.uag_enable_block_condition,
            enableMasonryExtension: data.uag_enable_masonry_gallery,
			enableResponsiveConditions: data.uag_enable_block_responsive,
			contentWidth: data.uag_content_width,
			siteKeyV2: data.recaptcha_site_key_v2,
			secretKeyV2: data.recaptcha_secret_key_v2,
			siteKeyV3: data.recaptcha_site_key_v3,
			secretKeyV3: data.recaptcha_secret_key_v3,
			enableComingSoonMode: data.uag_enable_coming_soon_mode,
			comingSoonPage: data.coming_soon_page,
			blocksEditorSpacing: data.uag_blocks_editor_spacing,
			containerGlobalPadding: data.uag_container_global_padding,
			containerGlobalElementsGap: data.uag_container_global_elements_gap,
			enableFontAwesome5: data.uag_load_font_awesome_5,
			enableAutoBlockRecovery: data.uag_auto_block_recovery,
        };

        store.dispatch( {type: 'UPDATE_INITIAL_STATE', payload: initialState} );

    } );
};

export default setInitialState;
