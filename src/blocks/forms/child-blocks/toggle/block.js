/**
 * BLOCK: Forms - Toggle
 */

import UAGB_Block_Icons from '@Controls/block-icons';
import attributes from './attributes';
import Edit from './edit';
import save from './save';
import { __ } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks';
import PreviewImage from '@Controls/previewImage';
import { applyFilters } from '@wordpress/hooks';
import addCommonDataToSpectraBlocks from '@Controls/addCommonDataToSpectraBlocks';
import Version from './deprecated/';
import Version2_4_1 from './2_4_1';
import Version2_7_2 from './2_7_2';
let toggleCommonData = {};
toggleCommonData = applyFilters( 'uagb/forms-toggle', addCommonDataToSpectraBlocks( toggleCommonData ) );
registerBlockType( 'uagb/forms-toggle', {
	...toggleCommonData,
	title: __( 'Toggle', 'ultimate-addons-for-gutenberg' ),
	description: __( 'Add a toggle button in your form.', 'ultimate-addons-for-gutenberg' ),
	icon: UAGB_Block_Icons.toggle,
	parent: [ 'uagb/forms' ],
	attributes,
	category: uagb_blocks_info.category,
	edit: ( props ) =>
		props.attributes.isPreview ? <PreviewImage image="form-toggle" isChildren={ true } /> : <Edit { ...props } />,
	supports: {
		anchor: true,
	},
	save,
	deprecated : [ Version2_7_2, Version2_4_1, Version ],
} );
