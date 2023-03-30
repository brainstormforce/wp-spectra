/**
 * BLOCK: Forms - Checkbox
 */

import UAGB_Block_Icons from '@Controls/block-icons';
import attributes from './attributes';
import Edit from './edit';
import save from './save';
import deprecated from './deprecated';

import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';
import PreviewImage from '@Controls/previewImage';
import { applyFilters } from '@wordpress/hooks';
import addCommonDataToSpectraBlocks from '@Controls/addCommonDataToSpectraBlocks';
let checkboxCommonData = {};
checkboxCommonData = applyFilters( 'uagb/forms-checkbox', addCommonDataToSpectraBlocks( checkboxCommonData ) );
registerBlockType( 'uagb/forms-checkbox', {
	...checkboxCommonData,
	title: __( 'Checkbox', 'ultimate-addons-for-gutenberg' ),
	description: __( 'Add checkboxes to allow multiple choices from options.', 'ultimate-addons-for-gutenberg' ),
	icon: UAGB_Block_Icons.checkbox,
	parent: [ 'uagb/forms' ],
	attributes,
	category: uagb_blocks_info.category,
	edit: ( props ) =>
		props.attributes.isPreview ? <PreviewImage image="form-checkbox" isChildren={ true } /> : <Edit { ...props } />,
	supports: {
		anchor: true,
	},
	save,
	deprecated,
} );
