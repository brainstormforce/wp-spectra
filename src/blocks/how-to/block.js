/**
 * BLOCK: How-To Schema
 */

import UAGB_Block_Icons from '@Controls/block-icons';
import attributes from './attributes';
import Edit from './edit';
import save from './save';
import './style.scss';
import deprecated from './deprecated';
import { __ } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks';
import PreviewImage from '@Controls/previewImage';

registerBlockType( 'uagb/how-to', {
	title: __( 'How To', 'ultimate-addons-for-gutenberg' ),
	description: __( 'Add instructions/steps on processes using how to block.', 'ultimate-addons-for-gutenberg' ),
	icon: UAGB_Block_Icons.how_to,
	category: uagb_blocks_info.category,
	keywords: [
		__( 'how to', 'ultimate-addons-for-gutenberg' ),
		__( 'schema', 'ultimate-addons-for-gutenberg' ),
		__( 'uag', 'ultimate-addons-for-gutenberg' ),
	],
	supports: {
		anchor: true,
	},
	example: {
		attributes: {
			isPreview: true,
		}
	},
	attributes,
	edit: ( props ) =>
			props.attributes.isPreview ? (
				<PreviewImage image="how-to" />
			) : (
				<Edit { ...props } />
			),
	save,
	deprecated,
} );
