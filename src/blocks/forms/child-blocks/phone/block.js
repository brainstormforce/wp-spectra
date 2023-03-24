/**
 * BLOCK: Forms - Phone
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
let phoneCommonData = {};
phoneCommonData = applyFilters( 'uagb/forms-phone', addCommonDataToSpectraBlocks( phoneCommonData ) );
registerBlockType( 'uagb/forms-phone', {
	...phoneCommonData,
	title: __( 'Phone', 'ultimate-addons-for-gutenberg' ),
	description: __( 'Add a phone number field in your form.', 'ultimate-addons-for-gutenberg' ),
	icon: UAGB_Block_Icons.phone,
	parent: [ 'uagb/forms' ],
	attributes,
	category: uagb_blocks_info.category,
	edit: ( props ) =>
		props.attributes.isPreview ? (
			<PreviewImage image="form-phone" isChildren={ true } />
		) : (
			<Edit { ...props } />
		),
	supports: {
		anchor: true,
	},
	save,
	deprecated
} );
