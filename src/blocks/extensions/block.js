import './masonry-gallery';
import './advanced-settings';
import './copy-paste-styles';
import './condition-block';
import { registerPlugin } from '@wordpress/plugins';
import SpectraPageSettingsPopup from './spectra-page-settings-popup';
import { select } from '@wordpress/data';
if( select( 'core/editor' ) ){
	registerPlugin( 'spectra-page-level-settings', { render: SpectraPageSettingsPopup } );
}
