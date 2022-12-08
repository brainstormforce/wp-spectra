/**
 * BLOCK: Column
 */

import { renderLegacyBlockEditorIcon } from '@Controls/block-icons';
import edit from './edit';
import save from './save';
import deprecated from './deprecated';
import attributes from './attributes';
import './style.scss';
import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';

registerBlockType( 'uagb/column', {
	title: __( 'Column', 'ultimate-addons-for-gutenberg' ),
	description: __( 'Immediate child of Advanced Columns', 'ultimate-addons-for-gutenberg' ),
	icon: renderLegacyBlockEditorIcon ( 'column' ),
	category: uagb_blocks_info.category,
	parent: [ 'uagb/columns' ],
	supports: {
		inserter: false,
		// Add EditorsKit block navigator toolbar
		editorsKitBlockNavigator: true,
	},
	attributes,
	edit,
	save,
	deprecated,
	example: {
		attributes: {
			isPreview: true,
		}
	},
} );

