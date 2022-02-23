/**
 * BLOCK: Forms - Block
 */

import UAGB_Block_Icons from '@Controls/block-icons';
import attributes from './attributes';
import edit from './edit';
import save from './save';
import './style.scss';
import variations from './variations';
import deprecated from './deprecated';
import { __ } from '@wordpress/i18n';

import { registerBlockType } from '@wordpress/blocks';

registerBlockType( 'uagb/forms', {
	title: __( 'Form', 'ultimate-addons-for-gutenberg' ),
	description: __( 'This block allow you to create interactive contact form, newsletter, suggestion, etc easily.', 'ultimate-addons-for-gutenberg' ),
	icon: UAGB_Block_Icons.forms,
	category: uagb_blocks_info.category,
	keywords: [
		__( 'forms', 'ultimate-addons-for-gutenberg' ),
		__( 'uag', 'ultimate-addons-for-gutenberg' ),
	],
	example: {},
	attributes,
	variations,
	edit,
	supports: {
		anchor: true,
	},
	deprecated,
	save,
} );
