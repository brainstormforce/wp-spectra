/**
 * BLOCK: Info Box
 */

import UAGB_Block_Icons from '@Controls/block-icons';
import edit from './edit';
import save from './save';
import attributes from './attributes';
import deprecated from './deprecated';
import './style.scss';

import { __ } from '@wordpress/i18n';

import { registerBlockType } from '@wordpress/blocks';

registerBlockType( 'uagb/info-box', {
	title: __( 'Info Box', 'ultimate-addons-for-gutenberg' ),
	description: __( 'This block allows you to place an image or icon along with a heading and description within a single block.', 'ultimate-addons-for-gutenberg' ),
	icon: UAGB_Block_Icons.info_box,
	keywords: [
		__( 'info box', 'ultimate-addons-for-gutenberg' ),
		__( 'uag', 'ultimate-addons-for-gutenberg' ),
	],
	supports: {
		anchor: true,
	},
	category: uagb_blocks_info.category,
	attributes,
	edit,
	save,
	example: {
		attributes: {
			isPreview: true,
		}
	},
	deprecated,
} );
