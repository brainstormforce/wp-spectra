/**
 * BLOCK: Forms - Date
 */

import UAGB_Block_Icons from '@Controls/block-icons';
import attributes from './attributes';
import Edit from './edit';
import save from './save';
import deprecated from './deprecated';

import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';
import PreviewImage from '@Controls/previewImage';

registerBlockType( 'uagb/forms-date', {
	title: __( 'Datepicker', 'ultimate-addons-for-gutenberg' ),
	description: __( 'Add a calendar based date picker in your form.', 'ultimate-addons-for-gutenberg' ),
	icon: UAGB_Block_Icons.datepicker,
	category: uagb_blocks_info.category,
	parent: [ 'uagb/forms' ],
	attributes,
	edit: ( props ) =>
		props.attributes.isPreview ? (
			<PreviewImage image="form-field" isChildren={ true } />
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
	deprecated,
} );
