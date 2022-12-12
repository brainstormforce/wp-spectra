/**
 * Gutenberg Blocks
 *
 * All blocks related JavaScript files should be imported here.
 * You can create a new block folder in this dir and include code
 * for that block here as well.
 *
 * All blocks should be included here since this is the file that
 * Webpack is compiling as the input file.
 */

import domReady from '@wordpress/dom-ready';
import getUAGEditorStateLocalStorage from '@Controls/getUAGEditorStateLocalStorage';
import apiFetch from '@wordpress/api-fetch';
// Delete the local storage on every refresh.
const uagLocalStorage = getUAGEditorStateLocalStorage();
if ( uagLocalStorage ) {
	uagLocalStorage.removeItem( 'uagSettingState' );
	uagLocalStorage.removeItem( 'isSpectraFontAwesomeAPILoading' );

}

import blocksEditorSpacing from './blocks/extensions/blocks-editor-spacing';
blocksEditorSpacing();

__webpack_public_path__ = uagb_blocks_info.uagb_url + 'dist/';

// Add Font Awesome Polyfiller to localized variable.
const isSpectraFontAwesomeAPILoading = uagLocalStorage?.getItem( 'isSpectraFontAwesomeAPILoading' ) || false;

if( 0 === uagb_blocks_info.font_awesome_5_polyfill.length && ! isSpectraFontAwesomeAPILoading ) {
	uagLocalStorage?.setItem( 'isSpectraFontAwesomeAPILoading', true );
	const formData = new window.FormData();
	formData.append( 'action', 'uagb_spectra_font_awesome_polyfiller' );
	formData.append(
		'nonce',
		uagb_blocks_info.uagb_ajax_nonce
	);
	apiFetch( {
		url: uagb_blocks_info.ajax_url,
		method: 'POST',
		body: formData,
	} ).then( ( data ) => {
		uagLocalStorage?.setItem( 'isSpectraFontAwesomeAPILoading', false );
		uagb_blocks_info.font_awesome_5_polyfill = data;
	} );
}

// The Block Slugs need to be added exactly as below into the array at: /classes/class-spectra-block-prioritization.php.
// Priorities need to be adequately updated in the respective includes/blocks/block.php files.

// Core Spectra Blocks.
import './blocks/container/block.js';
import './blocks/advanced-heading/block.js';
import './blocks/image/block.js';
import './blocks/buttons/block.js';
import './blocks/buttons-child/block.js'; // Child Block.
import './blocks/info-box/block.js';
import './blocks/call-to-action/block.js';
// Alphabetically Ordered Blocks.
import './blocks/blockquote/block.js';
import './blocks/timeline/content-timeline/block.js';
import './blocks/timeline/content-timeline-child/block.js'; // Child Block.
import './blocks/counter/block.js';
import './blocks/faq/block.js';
import './blocks/faq-child/block.js'; // Child Block.
import './blocks/forms/block.js';
import './blocks/forms/child-blocks/name/block.js'; // Child Block.
import './blocks/forms/child-blocks/email/block.js'; // Child Block.
import './blocks/forms/child-blocks/hidden/block.js'; // Child Block.
import './blocks/forms/child-blocks/phone/block.js'; // Child Block.
import './blocks/forms/child-blocks/textarea/block.js'; // Child Block.
import './blocks/forms/child-blocks/checkbox/block.js'; // Child Block.
import './blocks/forms/child-blocks/radio/block.js'; // Child Block.
import './blocks/forms/child-blocks/url/block.js'; // Child Block.
import './blocks/forms/child-blocks/select/block.js'; // Child Block.
import './blocks/forms/child-blocks/toggle/block.js'; // Child Block.
import './blocks/forms/child-blocks/date/block.js'; // Child Block.
import './blocks/forms/child-blocks/accept/block.js'; // Child Block.
import './blocks/google-map/block.js';
import './blocks/how-to/block.js';
import './blocks/how-to/child-blocks/step/block.js'; // Child Block.
import './blocks/icon-list/block.js';
import './blocks/icon-list-child/block.js'; // Child Block.
import './blocks/image-gallery/block.js';
import './blocks/inline-notice/block.js';
import './blocks/lottie/block.js';
import './blocks/marketing-button/block.js';
import './blocks/post/block.js'; // Carousel, Grid.
import './blocks/timeline/post-timeline/block.js';
import './blocks/price-list/block.js';
import './blocks/price-list-child/block.js'; // Child Block.
import './blocks/review/block.js';
import './blocks/social-share/block.js';
import './blocks/social-share-child/block.js'; // Child Block.
import './blocks/star-rating/block.js';
import './blocks/table-of-contents/block.js';
import './blocks/tabs/block.js';
import './blocks/tabs-child/block.js'; // Child Block.
import './blocks/taxonomy-list/block.js';
import './blocks/team/block.js';
import './blocks/testimonial/block.js';
// Extensions.
import './blocks/extensions/attributes.js';
import './blocks/extensions/block.js';
// Legacy Blocks.
import './blocks/columns/block.js';
import './blocks/column/block.js'; // Child Block.
import './blocks/section/block.js';
import './blocks/cf7-designer/block.js';
import './blocks/gf-designer/block.js';
import './blocks/post/deprecated-block.js'; // Masonry.
import './blocks/wp-search/block.js';

// Responsive Device Icons on Editor
import './components/responsive-icons/index.js';

wp.UAGBSvgIcons = Object.keys( uagb_blocks_info.uagb_svg_icons );

import UAGB_Block_Icons from '@Controls/block-icons';
import autoBlockRecovery from '@Controls/autoBlockRecovery';

import { updateCategory } from '@wordpress/blocks';

updateCategory( 'uagb', {
	icon: UAGB_Block_Icons.logo,
} );

export const initAutoBlockRecovery = () => {
	if ( window._wpLoadBlockEditor ) {
		window._wpLoadBlockEditor.then( () => {
			autoBlockRecovery();
		} );
	}
};

if ( 'disabled' !== uagb_blocks_info.auto_block_recovery ) {
	domReady( initAutoBlockRecovery );
}
