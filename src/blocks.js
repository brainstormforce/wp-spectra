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

// Delete the local storage on every refresh.
const uagLocalStorage = getUAGEditorStateLocalStorage();
if ( uagLocalStorage ) {
	uagLocalStorage.removeItem( 'uagSettingState' );
}

import blocksEditorSpacing from './blocks/extensions/blocks-editor-spacing';
blocksEditorSpacing();

__webpack_public_path__ = uagb_blocks_info.uagb_url + 'dist/';

// Priorities need to be adequately updated in the respective includes/blocks/block.php files.

// Core Spectra Blocks: P1 - P9 .
import './blocks/container/block.js'; // P1.
import './blocks/advanced-heading/block.js'; // P2.
import './blocks/image/block.js'; // P3.
import './blocks/buttons/block.js'; // P4.
import './blocks/buttons-child/block.js'; // Child Block.
import './blocks/info-box/block.js'; // P5.
import './blocks/call-to-action/block.js'; // P6.
// Alphabetically Ordered Blocks: P10+.
import './blocks/blockquote/block.js'; // P10.
import './blocks/timeline/content-timeline/block.js'; // P11.
import './blocks/timeline/content-timeline-child/block.js'; // Child Block.
import './blocks/faq/block.js'; // P12.
import './blocks/faq-child/block.js'; // Child Block.
import './blocks/forms/block.js'; // P13.
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
import './blocks/google-map/block.js'; // P14.
import './blocks/how-to/block.js'; // P15.
import './blocks/how-to/child-blocks/step/block.js'; // Child Block.
import './blocks/icon-list/block.js'; // P16.
import './blocks/icon-list-child/block.js'; // Child Block.
import './blocks/inline-notice/block.js'; // P17.
import './blocks/lottie/block.js'; // P18.
import './blocks/marketing-button/block.js'; // P19.
import './blocks/post/block.js'; // Carousel P20 | Grid P21.
import './blocks/timeline/post-timeline/block.js'; // P22.
import './blocks/price-list/block.js'; // P23.
import './blocks/price-list-child/block.js'; // Child Block.
import './blocks/review/block.js'; // P24.
import './blocks/social-share/block.js'; // P25.
import './blocks/social-share-child/block.js'; // Child Block.
import './blocks/star-rating/block.js'; // P26.
import './blocks/table-of-contents/block.js'; // P27.
import './blocks/tabs/block.js'; // P28.
import './blocks/tabs-child/block.js'; // Child Block.
import './blocks/taxonomy-list/block.js'; // P29.
import './blocks/team/block.js'; // P30.
import './blocks/testimonial/block.js'; // P31.
// Extensions.
import './blocks/extensions/attributes.js';
import './blocks/extensions/block.js';
// Deprecated Blocks: P90+.
import './blocks/columns/block.js'; // P90.
import './blocks/section/block.js'; // P91.
import './blocks/column/block.js'; // Child Block.
import './blocks/cf7-designer/block.js'; // P92.
import './blocks/gf-designer/block.js'; // P93.
import './blocks/post/deprecated-block.js'; // Masonry P94.
import './blocks/wp-search/block.js'; // P95.

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
