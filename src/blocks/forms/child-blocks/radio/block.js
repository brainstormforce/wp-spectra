/**
 * BLOCK: Forms - Radio
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
let radioCommonData = {};
radioCommonData = applyFilters( 'uagb/forms-radio', addCommonDataToSpectraBlocks( radioCommonData ) );
registerBlockType( 'uagb/forms-radio', {
	...radioCommonData,
	title: __( 'Radio', 'ultimate-addons-for-gutenberg' ),
	description: __( 'Add radio select boxes to allow a single choice from options.', 'ultimate-addons-for-gutenberg' ),
	icon: UAGB_Block_Icons.radio,
	parent: [ 'uagb/forms' ],
	attributes,
	category: uagb_blocks_info.category,
	edit: ( props ) =>
		props.attributes.isPreview ? <PreviewImage image="form-radio" isChildren={ true } /> : <Edit { ...props } />,
	supports: {
		anchor: true,
	},
	save,
	deprecated,
} );
