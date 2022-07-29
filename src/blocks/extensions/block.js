import './masonry-gallery';
import './advanced-settings';
import './copy-paste-styles';
import { registerPlugin } from '@wordpress/plugins';
import SpectraPageSettingsPopup from './spectra-page-settings-popup';

registerPlugin( 'spectra-page-level-settings', { render: SpectraPageSettingsPopup } );
