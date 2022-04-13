/**
 * BLOCK: Multi Buttons
 */

import UAGB_Block_Icons from '@Controls/block-icons';
import attributes from './attributes';
import edit from './edit';
import deprecated from './deprecated';
import save from './save';
import './style.scss';
import { __ } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks';

if ( 'yes' === uagb_blocks_info.uagb_old_user_less_than_2 ) {
	registerBlockType( 'uagb/buttons', {
		title: __( 'Multi Buttons', 'ultimate-addons-for-gutenberg' ),
		description:  __( 'This block allows you to add multiple buttons with a single block.', 'ultimate-addons-for-gutenberg' ),
		icon: UAGB_Block_Icons.buttons,
		category: uagb_blocks_info.category,
		keywords: [
			__( 'buttons', 'ultimate-addons-for-gutenberg' ),
			__( 'multi buttons', 'ultimate-addons-for-gutenberg' ),
			__( 'uag', 'ultimate-addons-for-gutenberg' ),
		],
		supports: {
			anchor: true,
		},
		getEditWrapperProps( attribute ) {
			return { 'data-btn-width': attribute.align };
		},
		example: {
			attributes: {
				isPreview: true,
			}
		},
		attributes,
		edit,
		save,
		deprecated,
	} );
}
