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
            enableFileGeneration : data.enable_file_generation,
            enableTemplates : data.enable_templates_button,
			enableOnPageCSS : data.enable_on_page_css_button,
            enableBeta : data.enable_beta_updates,
            enableSelectedFontFamilies : data.load_select_font_globally,
            selectedFontFamilies :  data.select_font_globally,
            enableFSEFontFamilies : data.load_fse_font_globally,
            enableLoadFontsLocally : data.load_gfonts_locally,
            enablePreloadLocalFonts : data.preload_local_fonts,
            enableCollapsePanels : data.collapse_panels,
            enableCopyPasteStyles : data.copy_paste,
            enableDisplayConditions: data.enable_block_condition,
            enableMasonryExtension: data.enable_masonry_gallery,
            enableDynamicContentExtension: data.enable_dynamic_content,
            dynamicContentMode: data.dynamic_content_mode,
			enableResponsiveConditions: data.enable_block_responsive,
			contentWidth: data.uag_content_width,
			siteKeyV2: data.recaptcha_site_key_v2,
			secretKeyV2: data.recaptcha_secret_key_v2,
			siteKeyV3: data.recaptcha_site_key_v3,
			secretKeyV3: data.recaptcha_secret_key_v3,
			visibilityMode: data.uag_visibility_mode,
			visibilityPage: data.visibility_page,
			blocksEditorSpacing: data.uag_blocks_editor_spacing,
			containerGlobalPadding: data.uag_container_global_padding,
			containerGlobalElementsGap: data.uag_container_global_elements_gap,
			enableFontAwesome5: data.uag_load_font_awesome_5,
			enableAutoBlockRecovery: data.uag_auto_block_recovery,
			enableLegacyBlocks: data.uag_enable_legacy_blocks,
			social: data.social,
            instaLinkedAccounts: data?.insta_linked_accounts,
            coreBlocks: data.spectra_core_blocks,
            enableAnimationsExtension: data.uag_enable_animations_extension,
            spectraFSEFonts: data.spectra_global_fse_fonts,
            spectraIsBlockTheme: data.wp_is_block_theme,
            themeFonts: data.theme_fonts,
            btnInheritFromTheme: data.uag_btn_inherit_from_theme,
	        enableGBSExtension: data.uag_enable_gbs_extension,
        };

        store.dispatch( {type: 'UPDATE_INITIAL_STATE', payload: initialState} );

    } );
};

export default setInitialState;
