import './masonry-gallery';
import './advanced-settings';
import './copy-paste-styles';
import './condition-block';
import './uagb-selected-block-editor-css';
import { registerPlugin } from '@wordpress/plugins';
import SpectraPageSettingsPopup from './spectra-page-settings-popup';
import { select } from '@wordpress/data';
if( 'site-editor' !== uagb_blocks_info.is_site_editor && 'yes' === uagb_blocks_info.enable_on_page_css_button && select( 'core/editor' ) ){
	registerPlugin( 'spectra-page-level-settings', { render: SpectraPageSettingsPopup } );
}
