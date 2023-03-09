/**
 * BLOCK: Marketing Button
 */
import UAGB_Block_Icons from '@Controls/block-icons';
import attributes from './attributes';
import Edit from './edit';
import save from './save';
import deprecated from './deprecated';
import './style.scss';

import { __ } from '@wordpress/i18n';

import { registerBlockType } from '@wordpress/blocks';
import PreviewImage from '@Controls/previewImage';

registerBlockType( 'uagb/marketing-button', {
	title: __( 'Marketing Button', 'ultimate-addons-for-gutenberg' ),
	description: __( 'Add a marketing call to action button with a short description.', 'ultimate-addons-for-gutenberg' ),
	icon: UAGB_Block_Icons.marketing_button,
	category: uagb_blocks_info.category,
	keywords: [
		__( 'marketing button', 'ultimate-addons-for-gutenberg' ),
		__( 'cta', 'ultimate-addons-for-gutenberg' ),
		__( 'uag', 'ultimate-addons-for-gutenberg' ),
	],
	supports: {
		anchor: true,
	},
	attributes,
	edit: ( props ) =>
			props.attributes.isPreview ? (
				<PreviewImage image="marketing-button" />
			) : (
				<Edit { ...props } />
			),
	save,
	example: {
		attributes: {
			isPreview: true,
		}
	},
	deprecated,
} );
