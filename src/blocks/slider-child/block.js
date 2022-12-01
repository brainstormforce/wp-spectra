/**
 * BLOCK: Slider Child
 */

import UAGB_Block_Icons from '@Controls/block-icons';
import save from './save';
import attributes from './attributes';
import edit from './edit';

import { __ } from '@wordpress/i18n';

import { registerBlockType } from '@wordpress/blocks';

registerBlockType( 'uagb/slider-child', {
	title: __( 'Slider Child', 'ultimate-addons-for-gutenberg' ),
	description: __( 'Add and customize content of this slide.', 'ultimate-addons-for-gutenberg' ),
	icon: UAGB_Block_Icons.slider,
	category: uagb_blocks_info.category,
	parent: [ 'uagb/slider' ],
	keywords: [
		__( 'slider', 'ultimate-addons-for-gutenberg' ),
		__( 'uag', 'ultimate-addons-for-gutenberg' ),
	],
	attributes,
	edit,
	save,
} );
