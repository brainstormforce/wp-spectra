/**
 * BLOCK: FAQ - Schema - Child
 */

import UAGB_Block_Icons from '@Controls/block-icons';
import attributes from './attributes';
import edit from './edit';
import save from './save';
import './style.scss';
import deprecated from './deprecated';
import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';

registerBlockType( 'uagb/faq-child', {
	title: __( 'FAQ - Schema Child', 'ultimate-addons-for-gutenberg' ),
	description: __( 'This block helps you add single FAQ.', 'ultimate-addons-for-gutenberg' ),
	icon: UAGB_Block_Icons.faq,
	category: uagb_blocks_info.category,
	parent: [ 'uagb/faq' ],
	attributes,
	edit,
	supports: {
		anchor: true,
	},
	save,
	deprecated,
} );
