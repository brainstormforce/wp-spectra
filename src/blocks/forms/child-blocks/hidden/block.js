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

registerBlockType( 'uagb/forms-hidden', {
	title: __( 'Hidden', 'ultimate-addons-for-gutenberg' ),
	description: __( 'Add a hidden field in your form to pass data.', 'ultimate-addons-for-gutenberg' ),
	icon: UAGB_Block_Icons.hidden,
	category: uagb_blocks_info.category,
	parent: [ 'uagb/forms' ],
	attributes,
	edit: ( props ) =>
		props.attributes.isPreview ? (
			<PreviewImage image="form-hidden" isChildren={ true } />
		) : (
			<Edit { ...props } />
		),
	supports: {
		anchor: true,
	},
	example: {
		attributes: {
			isPreview: true,
		}
	},
	save,
	deprecated
} );
