/**
 * BLOCK: Forms - Textarea
 */

import UAGB_Block_Icons from '@Controls/block-icons';
import attributes from './attributes';
import edit from './edit';
import save from './save';
import { __ } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks';

registerBlockType( 'uagb/forms-textarea', {
	title: __( 'Textarea', 'ultimate-addons-for-gutenberg' ),
	description: __( 'This block helps to add Textarea field.', 'ultimate-addons-for-gutenberg' ),
	icon: UAGB_Block_Icons.textarea,
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
