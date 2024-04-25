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

const SpectraPageSettingsPopup = ( props ) => {
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
		return {
			meta: { ...oldPostMeta, ...postMeta },
			oldMeta: oldPostMeta,
		};
	} ),
	withDispatch( ( dispatch ) => ( {
		setMetaFieldValue: ( value, field ) => dispatch( 'core/editor' ).editPost( { meta: { [ field ]: value } } ),
	} ) )
)( SpectraPageSettingsPopup );
