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

registerBlockType( 'uagb/forms-accept', {
	title: __( 'Accept', 'ultimate-addons-for-gutenberg' ),
	description: __( 'Add a consent statement with a checkbox in your form.', 'ultimate-addons-for-gutenberg' ),
	icon: UAGB_Block_Icons.accept,
	category: uagb_blocks_info.category,
	parent: [ 'uagb/forms' ],
	attributes,
	edit: ( props ) =>
		props.attributes.isPreview ? (
			<PreviewImage image="form-accept" isChildren={ true } />
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
} );
