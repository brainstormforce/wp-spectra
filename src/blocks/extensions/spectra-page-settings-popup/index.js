/**
 * Meta Options build.
 */
import { PluginSidebar, PluginSidebarMoreMenuItem } from '@wordpress/edit-post';
import { compose } from '@wordpress/compose';
import { withSelect, withDispatch } from '@wordpress/data';
import { __ } from '@wordpress/i18n';
import { image } from '@wordpress/icons';
import PageCustomCSS from '../custom-page-css';

const SpectraPageSettingsPopup = props => {

	return (
		<>
			{/* Page Settings Icon. */}
			<PluginSidebarMoreMenuItem
				target="spectra-page-settings-panel"
				icon={ image }
			>
				{ __('Spectra Page Settings') }
			</PluginSidebarMoreMenuItem>

			{/* Page Settings Area. */}
			<PluginSidebar
				isPinnable={ true }
				icon={ image }
				name="spectra-page-settings-panel"
				title={ __('Spectra Page Settings') }
			>
				<PageCustomCSS/>
			</PluginSidebar>
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
