/**
 * BLOCK: Column
 */

import UAGB_Block_Icons from '@Controls/block-icons';
import edit from './edit';
import save from './save';
import deprecated from './deprecated';
import attributes from './attributes';
import './style.scss';
import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';

if ( 'yes' === uagb_blocks_info.uagb_old_user_less_than_2 ) {
	registerBlockType( 'uagb/column', {
		title: __( 'Column', 'ultimate-addons-for-gutenberg' ),
		description: __( 'This block is an immediate child of Advanced Columns.', 'ultimate-addons-for-gutenberg' ),
		icon: UAGB_Block_Icons.column,
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
	} );
}
