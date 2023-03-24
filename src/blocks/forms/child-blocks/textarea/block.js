/**
 * BLOCK: Forms - Textarea
 */

import UAGB_Block_Icons from '@Controls/block-icons';
import attributes from './attributes';
import Edit from './edit';
import save from './save';
import deprecated from './deprecated';
import { __ } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks';
import PreviewImage from '@Controls/previewImage';
import { applyFilters } from '@wordpress/hooks';
import addCommonDataToSpectraBlocks from '@Controls/addCommonDataToSpectraBlocks';
let textareaCommonData = {};
textareaCommonData = applyFilters( 'uagb/forms-textarea', addCommonDataToSpectraBlocks( textareaCommonData ) );
registerBlockType( 'uagb/forms-textarea', {
	...textareaCommonData,
	title: __( 'Textarea', 'ultimate-addons-for-gutenberg' ),
	description: __( 'Add a text field in your form.', 'ultimate-addons-for-gutenberg' ),
	icon: UAGB_Block_Icons.textarea,
	parent: [ 'uagb/forms' ],
	attributes,
	category: uagb_blocks_info.category,
	edit: ( props ) =>
		props.attributes.isPreview ? (
			<PreviewImage image="form-textarea" isChildren={ true } />
		) : (
			<Edit { ...props } />
		),
	supports: {
		anchor: true,
	},
	save,
	deprecated,
} );
