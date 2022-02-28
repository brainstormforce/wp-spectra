/**
 * BLOCK: Container
 */

import UAGB_Block_Icons from '@Controls/block-icons';
import attributes from './attributes';
import edit from './edit';
import save from './save';
import './style.scss';
import { __ } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks';


registerBlockType( 'uagb/counter', {
	title: __( 'Counter', 'ultimate-addons-for-gutenberg' ),
	description: __(
		'This block allows you to add number counter.',
		'ultimate-addons-for-gutenberg'
	),
	icon: UAGB_Block_Icons.container,
	keywords: [
		__( 'counter', 'ultimate-addons-for-gutenberg' ),
		__( 'number', 'ultimate-addons-for-gutenberg' ),
	],
	supports: {
		anchor: true,
	},
	category: uagb_blocks_info.category,
	attributes,
	edit,
	save,
	example: {}
} );
