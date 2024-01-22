import './masonry-gallery';
import './advanced-settings';
import './copy-paste-styles';
import './condition-block';
import './uagb-selected-block-editor-css';
import './quick-action-sidebar';
import { registerPlugin } from '@wordpress/plugins';
import SpectraPageSettingsPopup from './spectra-page-settings-popup';
import SpectraRenameOption from './rename-option'; // TODO: Once Gutenberg merged the rename functionality code in WP then we need to remove import SpectraRenameOption.
import { select } from '@wordpress/data';
if ( select( 'core/editor' ) ) { // If Gutenberg editor, then only.
	registerPlugin( 'spectra-page-level-settings', { render: SpectraPageSettingsPopup } );
}
registerPlugin( 'rename-option', { render: SpectraRenameOption } ); // TODO: Once Gutenberg merged the rename functionality code in WP then we need to remove registerPlugin code for SpectraRenameOption.
