/**
 * BLOCK: Forms - Accept
 */

import UAGB_Block_Icons from '@Controls/block-icons';
import attributes from './attributes';
import edit from './edit';
import save from './save';

import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';

registerBlockType( 'uagb/forms-accept', {
	title: __( 'Accept', 'ultimate-addons-for-gutenberg' ),
	description: __( 'This block helps to add Accept field.', 'ultimate-addons-for-gutenberg' ),
	icon: UAGB_Block_Icons.accept,
	category: uagb_blocks_info.category,
	parent: [ 'uagb/forms' ],
	attributes,
	edit,
	supports: {
		anchor: true,
	},
	example: {},
	save,
} );
