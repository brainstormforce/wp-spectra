/**
 * BLOCK: Lottie
 */

import edit from './edit';
import UAGB_Block_Icons from '@Controls/block-icons';

import { __ } from '@wordpress/i18n';

import { registerBlockType } from '@wordpress/blocks';

registerBlockType( 'uagb/lottie', {
	title: __( 'Lottie Animation', 'ultimate-addons-for-gutenberg' ),
	description: __( 'This block helps you add Lottie animation and customize it as required.', 'ultimate-addons-for-gutenberg' ),
	icon: UAGB_Block_Icons.lottie,
	keywords: [
		__( 'lottie', 'ultimate-addons-for-gutenberg' ),
		__( 'animation', 'ultimate-addons-for-gutenberg' ),
		__( 'uag', 'ultimate-addons-for-gutenberg' ),
	],
	example: {
		attributes: {
			isPreview: true,
		}
	},
	category: uagb_blocks_info.category,
	edit,
	// Render via PHP
	save() {
		return null;
	},
} );
