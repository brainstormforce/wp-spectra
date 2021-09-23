/**
 * BLOCK: Table of Contents
 */

import UAGB_Block_Icons from '@Controls/block-icons';
import attributes from './attributes';
import edit from './edit';
import deprecated from './deprecated';
import './style.scss';

import { __ } from '@wordpress/i18n';

import { registerBlockType } from '@wordpress/blocks';

registerBlockType( 'uagb/table-of-contents', {
	title: __( 'Table of Contents', 'ultimate-addons-for-gutenberg' ),
	description: __( 'This block allows you to place a Table of Contents for Pages/Posts.', 'ultimate-addons-for-gutenberg' ),
	icon: UAGB_Block_Icons.table_of_contents,
	category: uagb_blocks_info.category,
	keywords: [
		__( 'table of contents', 'ultimate-addons-for-gutenberg' ),
		__( 'table', 'ultimate-addons-for-gutenberg' ),
		__( 'uag', 'ultimate-addons-for-gutenberg' ),
	],
	supports: {
		anchor: true,
	},
	attributes,
	edit,
	// Render via PHP
	save() {
		return null;
	},
	example: {},
	deprecated,
} );
