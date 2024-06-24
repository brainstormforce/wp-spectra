import './masonry-gallery';
import './advanced-settings';
import './copy-paste-styles';
import './condition-block';
import './uagb-selected-block-editor-css';
import './quick-action-sidebar';
import './header-titlebar';
import { registerPlugin } from '@wordpress/plugins';
import SpectraPageSettingsPopup from './spectra-page-settings-popup';
import { select } from '@wordpress/data';
if ( select( 'core/editor' ) ) { // If Gutenberg editor, then only.
	registerPlugin( 'spectra-page-level-settings', { render: SpectraPageSettingsPopup } );
}

