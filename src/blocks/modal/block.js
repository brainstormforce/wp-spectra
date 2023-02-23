/**
 * BLOCK: Modal
 */

import UAGB_Block_Icons from '@Controls/block-icons';
import attributes from './attributes';
import edit from './edit';
import save from './save';
import './style.scss';
import { __ } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks';
import deprecated from './deprecated';

registerBlockType( 'uagb/modal', {
	title: __( 'Modal', 'ultimate-addons-for-gutenberg' ),
	description: __(
		'This block allows you to add modal popup.',
		'ultimate-addons-for-gutenberg'
	),
	icon: UAGB_Block_Icons.modal,
	keywords: [
		__( 'modal', 'ultimate-addons-for-gutenberg' ),
		__( 'popup', 'ultimate-addons-for-gutenberg' ),
	],
	supports: {
		anchor: true,
	},
	category: uagb_blocks_info.category,
	attributes,
	edit,
	save,
	deprecated,
	example: {
		attributes: {
			isPreview: true,
		}
	},
} );
