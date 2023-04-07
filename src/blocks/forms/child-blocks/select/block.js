/**
 * BLOCK: Forms - Select
 */

import UAGB_Block_Icons from '@Controls/block-icons';
import attributes from './attributes';
import Edit from './edit';
import save from './save';
import { __ } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks';
import deprecated from './deprecated';
import PreviewImage from '@Controls/previewImage';
import { applyFilters } from '@wordpress/hooks';
import addCommonDataToSpectraBlocks from '@Controls/addCommonDataToSpectraBlocks';
let selectCommonData = {};
selectCommonData = applyFilters( 'uagb/forms-select', addCommonDataToSpectraBlocks( selectCommonData ) );
registerBlockType( 'uagb/forms-select', {
	...selectCommonData,
	title: __( 'Select', 'ultimate-addons-for-gutenberg' ),
	description: __( 'Add a select dropdown to list choices.', 'ultimate-addons-for-gutenberg' ),
	icon: UAGB_Block_Icons.select,
	parent: [ 'uagb/forms' ],
	attributes,
	category: uagb_blocks_info.category,
	edit: ( props ) =>
		props.attributes.isPreview ? <PreviewImage image="form-field" isChildren={ true } /> : <Edit { ...props } />,
	save,
	deprecated,
} );
