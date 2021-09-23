/**
 * BLOCK: Marketing Button
 */
import UAGB_Block_Icons from '@Controls/block-icons';
import attributes from './attributes';
import edit from './edit';
import save from './save';
import deprecated from './deprecated';
import './style.scss';

import { __ } from '@wordpress/i18n';

import { registerBlockType } from '@wordpress/blocks';

registerBlockType( 'uagb/marketing-button', {
	title: __( 'Marketing Button', 'ultimate-addons-for-gutenberg' ),
	description: __( 'This block allows you to place a Marketing Button with small description.', 'ultimate-addons-for-gutenberg' ),
	icon: UAGB_Block_Icons.marketing_button,
	category: uagb_blocks_info.category,
	keywords: [
		__( 'marketing button', 'ultimate-addons-for-gutenberg' ),
		__( 'cta', 'ultimate-addons-for-gutenberg' ),
		__( 'uag', 'ultimate-addons-for-gutenberg' ),
	],
	supports: {
		anchor: true,
	},
	attributes,
	edit,
	save,
	example: {},
	deprecated,
} );
