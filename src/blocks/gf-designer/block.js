/**
 * BLOCK: Gravity Form Styler
 */

// Import block dependencies and components.
import UAGB_Block_Icons from '@Controls/block-icons';
import edit from './edit';
import './style.scss';
import { __ } from '@wordpress/i18n';

import { registerBlockType } from '@wordpress/blocks';

if ( uagb_blocks_info.blocks[ 'uagb/gf-styler' ].is_active ) {
	registerBlockType( 'uagb/gf-styler', {
		title: __( 'Gravity Form Designer', 'ultimate-addons-for-gutenberg' ), // Block title.
		description: __( 'This block allows you to add and style your Gravity Forms right in the Gutenberg editor.', 'ultimate-addons-for-gutenberg' ), // Block description.
		icon: UAGB_Block_Icons.gf_styler,
		keywords: [
			__( 'GF styler', 'ultimate-addons-for-gutenberg' ),
			__( 'gravity form styler', 'ultimate-addons-for-gutenberg' ),
			__( 'uag', 'ultimate-addons-for-gutenberg' ),
		],
		supports: {
			anchor: true,
		},
		category: uagb_blocks_info.category,
		edit,
		example: {},
		save() {
			return null;
		},
	} );
}
