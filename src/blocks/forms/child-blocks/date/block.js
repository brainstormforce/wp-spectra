/**
 * BLOCK: Forms - Date
 */

import UAGB_Block_Icons from '@Controls/block-icons';
import attributes from './attributes';
import edit from './edit';
import save from './save';
import deprecated from './deprecated';

import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';
registerBlockType( 'uagb/forms-date', {
	title: __( 'Datepicker', 'ultimate-addons-for-gutenberg' ),
	description: __( 'This block helps to add Datepicker field.', 'ultimate-addons-for-gutenberg' ),
	icon: UAGB_Block_Icons.datepicker,
	category: uagb_blocks_info.category,
	parent: [ 'uagb/forms' ],
	attributes,
	edit,
	supports: {
		anchor: true,
	},
	example: {},
	save,
	deprecated,
} );
