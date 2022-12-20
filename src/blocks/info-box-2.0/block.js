/**
 * BLOCK: Container
 */

import UAGB_Block_Icons from '@Controls/block-icons';
import attributes from './attributes';
import edit from './edit';
import save from './save';
import './style.scss';
import { __ } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks';

registerBlockType( 'uagb/info-box-2.0', {
	apiVersion: 2,
	title: __( 'Info-Box 2.0', 'ultimate-addons-for-gutenberg' ),
	description: __(
		'Create beautiful layouts with flexbox powered container block.',
		'ultimate-addons-for-gutenberg'
	),
	icon: UAGB_Block_Icons.container,
	keywords: [
		__( 'Info-Box 2.0', 'ultimate-addons-for-gutenberg' ),
		__( 'uag', 'ultimate-addons-for-gutenberg' ),
		__( 'flex', 'ultimate-addons-for-gutenberg' ),
	],
	supports: {
		anchor: true,
	},
	category: uagb_blocks_info.category,
	attributes,
	example: {
		attributes: {
			isPreview: true,
		}
	},
	edit,
	save,
} );
