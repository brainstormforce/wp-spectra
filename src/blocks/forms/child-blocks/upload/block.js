/**
 * BLOCK: Forms - Upload
 */

import UAGB_Block_Icons from '@Controls/block-icons';
import attributes from './attributes';
import edit from './edit';
import save from './save';
import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';
import { applyFilters } from '@wordpress/hooks';
import addCommonDataToSpectraBlocks from '@Controls/addCommonDataToSpectraBlocks';
let uploadCommonData = {};
uploadCommonData = applyFilters( 'uagb/forms-upload', addCommonDataToSpectraBlocks( uploadCommonData ) );
registerBlockType( 'uagb/forms-upload', {
	...uploadCommonData,
	title: __( 'Upload', 'ultimate-addons-for-gutenberg' ),
	description: __( 'Add a attachment in your form.', 'ultimate-addons-for-gutenberg' ),
	icon: UAGB_Block_Icons.faq,
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
