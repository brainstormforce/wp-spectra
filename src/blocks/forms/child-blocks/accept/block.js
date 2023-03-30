/**
 * BLOCK: Forms - Accept
 */

import UAGB_Block_Icons from '@Controls/block-icons';
import attributes from './attributes';
import Edit from './edit';
import save from './save';

import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';
import PreviewImage from '@Controls/previewImage';
import { applyFilters } from '@wordpress/hooks';
import addCommonDataToSpectraBlocks from '@Controls/addCommonDataToSpectraBlocks';
let acceptCommonData = {};
acceptCommonData = applyFilters( 'uagb/forms-accept', addCommonDataToSpectraBlocks( acceptCommonData ) );
registerBlockType( 'uagb/forms-accept', {
	...acceptCommonData,
	title: __( 'Accept', 'ultimate-addons-for-gutenberg' ),
	description: __( 'Add a consent statement with a checkbox in your form.', 'ultimate-addons-for-gutenberg' ),
	icon: UAGB_Block_Icons.accept,
	parent: [ 'uagb/forms' ],
	attributes,
	category: uagb_blocks_info.category,
	edit: ( props ) =>
		props.attributes.isPreview ? <PreviewImage image="form-accept" isChildren={ true } /> : <Edit { ...props } />,
	supports: {
		anchor: true,
	},
	save,
} );
