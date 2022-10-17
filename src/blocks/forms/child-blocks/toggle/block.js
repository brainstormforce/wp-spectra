/**
 * BLOCK: Forms - Toggle
 */

import UAGB_Block_Icons from '@Controls/block-icons';
import attributes from './attributes';
import edit from './edit';
import save from './save';
import deprecated from './deprecated';
import { __ } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks';

registerBlockType( 'uagb/forms-toggle', {
	title: __( 'Toggle', 'ultimate-addons-for-gutenberg' ),
	description: __( 'Add a toggle button in your form.', 'ultimate-addons-for-gutenberg' ),
	icon: UAGB_Block_Icons.toggle,
	category: uagb_blocks_info.category,
	parent: [ 'uagb/forms' ],
	attributes,
	edit,
	supports: {
		anchor: true,
	},
	example: {
		attributes: {
			isPreview: true,
		}
	},
	save,
	deprecated,
} );
