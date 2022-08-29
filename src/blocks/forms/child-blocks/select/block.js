/**
 * BLOCK: Forms - Select
 */

import UAGB_Block_Icons from '@Controls/block-icons';
import attributes from './attributes';
import edit from './edit';
import save from './save';
import { __ } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks';

registerBlockType( 'uagb/forms-select', {
	title: __( 'Select', 'ultimate-addons-for-gutenberg' ),
	description: __( 'Add a select dropdown to list choices.', 'ultimate-addons-for-gutenberg' ),
	icon: UAGB_Block_Icons.select,
	category: uagb_blocks_info.category,
	parent: [ 'uagb/forms' ],
	attributes,
	edit,
	example: {
		attributes: {
			isPreview: true,
		}
	},
	save,
} );
