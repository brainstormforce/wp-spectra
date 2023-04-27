/**
 * BLOCK: Forms - Hidden
 */

import UAGB_Block_Icons from '@Controls/block-icons';
import attributes from './attributes';
import Edit from './edit';
import save from './save';
import { __ } from '@wordpress/i18n';
import deprecated from './deprecated';
import { registerBlockType } from '@wordpress/blocks';
import PreviewImage from '@Controls/previewImage';
import { applyFilters } from '@wordpress/hooks';
import addCommonDataToSpectraBlocks from '@Controls/addCommonDataToSpectraBlocks';
let hiddenCommonData = {};
hiddenCommonData = applyFilters( 'uagb/forms-hidden', addCommonDataToSpectraBlocks( hiddenCommonData ) );
registerBlockType( 'uagb/forms-hidden', {
	...hiddenCommonData,
	title: __( 'Hidden', 'ultimate-addons-for-gutenberg' ),
	description: __( 'Add a hidden field in your form to pass data.', 'ultimate-addons-for-gutenberg' ),
	icon: UAGB_Block_Icons.hidden,
	parent: [ 'uagb/forms' ],
	attributes,
	category: uagb_blocks_info.category,
	edit: ( props ) =>
		props.attributes.isPreview ? <PreviewImage image="form-hidden" isChildren={ true } /> : <Edit { ...props } />,
	supports: {
		anchor: true,
	},
	save,
	deprecated,
} );
