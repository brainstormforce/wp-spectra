/**
 * Meta Options build.
 */
import { PluginSidebar, PluginSidebarMoreMenuItem } from '@wordpress/edit-post';
import { compose } from '@wordpress/compose';
import { withSelect, withDispatch } from '@wordpress/data';
import { __ } from '@wordpress/i18n';
import SettingsIcons from './icons.js';
import PageCustomCSS from '../custom-page-css';
import { PanelBody } from '@wordpress/components';

const SpectraPageSettingsPopup = () => {

	return (
		<>
		{ 'yes' === uagb_blocks_info.enable_on_page_css_button && (
			<>
			{/* Page Settings Icon. */}
			<PluginSidebarMoreMenuItem
				target="spectra-page-settings-panel"
				icon={ SettingsIcons.logo }
			>
				{ __( 'Spectra Page Settings' ) }
			</PluginSidebarMoreMenuItem>

			{/* Page Settings Area. */}
			<PluginSidebar
				isPinnable={ true }
				icon={ SettingsIcons.logo }
				name="spectra-page-settings-panel"
				title={ __( 'Spectra Page Settings' ) }
				className={'spectra-sidebar'}
			>
				<PanelBody
					title={ __( 'Custom CSS' ) }
					initialOpen={ true }
					className={'spectra-custom-css-panel'}
				>
					<PageCustomCSS/>
				</PanelBody>
			</PluginSidebar>
			</>
		)}
		</>
	);
}

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
		setMetaFieldValue: ( value, field ) => dispatch( 'core/editor' ).editPost(
			{ meta: { [ field ]: value } }
		),
	} ) ),
)( SpectraPageSettingsPopup );
