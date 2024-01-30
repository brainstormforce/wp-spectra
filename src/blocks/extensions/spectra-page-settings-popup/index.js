/**
 * Meta Options build.
 */
import { compose } from '@wordpress/compose';
import { withSelect, withDispatch } from '@wordpress/data';
import { __ } from '@wordpress/i18n';
import SettingsIcons from './icons.js';
import PageCustomCSS from '../custom-page-css';
import { PanelBody } from '@wordpress/components';
import { applyFilters } from '@wordpress/hooks';
import ToggleOption from '../quick-action-sidebar/components/toggle-option';
import { store as spectraStore } from '@Store';
import { STORE_NAME as storeName } from '@Store/constants';

const SpectraPageSettingsPopup = ( props ) => {
	const { getEnableQuickActionSidebar, updateEnableQuickActionSidebar, getNoticeForQuickActionSidebar, updateNoticeForQuickSidebarBlocks, getFullscreenMode, getDistractionFreeMode } = props;
	const getSidebarStore = 'site-editor' !== uagb_blocks_info.is_site_editor ? window?.wp?.editPost : window?.wp?.editSite;
	if ( !getSidebarStore || !getSidebarStore?.PluginSidebar || !getSidebarStore?.PluginSidebarMoreMenuItem ) {
		return null;
	}
	const PluginSidebar = getSidebarStore.PluginSidebar;
	const PluginSidebarMoreMenuItem = getSidebarStore.PluginSidebarMoreMenuItem;
	// If the PluginSidebar or PluginSidebarMoreMenuItem is still not available, then return null for WP lower version.
	if ( 'function' !== typeof PluginSidebarMoreMenuItem || 'function' !== typeof PluginSidebar ) {
		return null;
	}

	const pluginSidebarBefore = applyFilters( `spectra.page-sidebar.before`, '', props );
	const pluginSidebarAfter = applyFilters( `spectra.page-sidebar.after`, '', props );
	
	return (
		<>
			{ /* Page Settings Icon. */ }
			<PluginSidebarMoreMenuItem target="spectra-page-settings-panel" icon={ SettingsIcons.logo }>
				{ __( 'Spectra Page Settings', 'ultimate-addons-for-gutenberg' ) }
			</PluginSidebarMoreMenuItem>

			{ /* Page Settings Area. */ }
			<PluginSidebar
				isPinnable={ true }
				icon={ SettingsIcons.logo }
				name="spectra-page-settings-panel"
				title={ __( 'Spectra Page Settings', 'ultimate-addons-for-gutenberg' ) }
				className={ 'spectra-sidebar' }
			>
				{ /* QAB Setting will be visible only when we are in fullscreenMode and distractionFree is disabled. */ }
				{ ( getFullscreenMode && ! getDistractionFreeMode ) && 
				<PanelBody
					title={__( 'Quick Action Bar', 'ultimate-addons-for-gutenberg' )}
					initialOpen={true}
					className={'spectra-quick-action-sidebar-panel'}
				>
					<ToggleOption label={__( 'Enable Quick Action Bar', 'ultimate-addons-for-gutenberg' )} enableQuickActionSidebar={getEnableQuickActionSidebar} updateEnableQuickActionSidebar={updateEnableQuickActionSidebar} getNoticeForQuickActionSidebar={getNoticeForQuickActionSidebar} updateNoticeForQuickSidebarBlocks={updateNoticeForQuickSidebarBlocks}/>
				</PanelBody>
				}
				{ pluginSidebarBefore }
				{ 'site-editor' !== uagb_blocks_info.is_site_editor && 'yes' === uagb_blocks_info.enable_on_page_css_button && (
				<PanelBody
					title={ __( 'Custom CSS', 'ultimate-addons-for-gutenberg' ) }
					initialOpen={ true }
					className={ 'spectra-custom-css-panel' }
				>
					<PageCustomCSS />
				</PanelBody>
				)}
				{ pluginSidebarAfter }
			</PluginSidebar>
		</>
	);
};

export default compose(
	withSelect( ( select ) => {
		const postMeta = select( 'core/editor' ).getEditedPostAttribute( 'meta' );
		const oldPostMeta = select( 'core/editor' ).getCurrentPostAttribute( 'meta' );
		const getEnableQuickActionSidebar = select( spectraStore ).getEnableQuickActionSidebar();
		const getNoticeForQuickActionSidebar = select( spectraStore ).getNoticeForQuickActionSidebar();
		const getFullscreenMode = select( 'core/edit-post' )?.isFeatureActive( 'fullscreenMode' );
		const getBlockEditorStore = select( 'core/block-editor' );
		const getDistractionFreeMode = getBlockEditorStore?.getSettings()?.isDistractionFree;
		return {
			meta: { ...oldPostMeta, ...postMeta },
			oldMeta: oldPostMeta,
			getEnableQuickActionSidebar,
			getNoticeForQuickActionSidebar,
			getFullscreenMode,
			getDistractionFreeMode
		};
	} ),
	withDispatch( ( dispatch ) => ( {
		setMetaFieldValue: ( value, field ) => dispatch( 'core/editor' ).editPost( { meta: { [ field ]: value } } ),
		updateEnableQuickActionSidebar: ( value ) => dispatch( storeName ).updateEnableQuickActionSidebar( value ),
		updateNoticeForQuickSidebarBlocks: ( value ) => dispatch( storeName ).updateNoticeForQuickSidebarBlocks( value ),
	} ) )
)( SpectraPageSettingsPopup );
