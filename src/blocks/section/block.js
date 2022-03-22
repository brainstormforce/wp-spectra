/**
 * BLOCK: Section
 */

import UAGB_Block_Icons from '@Controls/block-icons';
import './style.scss';
import attributes from './attributes';
import edit from './edit';
import save from './save';
import deprecated from './deprecated';
import { __ } from '@wordpress/i18n';

import { registerBlockType } from '@wordpress/blocks';

if ( 'yes' === uagb_blocks_info.uagb_old_user_less_than_2 ) {
	registerBlockType( 'uagb/section', {
		title: __( 'Advanced Row', 'ultimate-addons-for-gutenberg' ),
		description: __( 'This block is an outer wrap section that allows you to add other blocks within it.', 'ultimate-addons-for-gutenberg' ),
		icon: UAGB_Block_Icons.section,
		category: uagb_blocks_info.category,
		keywords: [
			__( 'advanced row', 'ultimate-addons-for-gutenberg' ),
			__( 'wrapper', 'ultimate-addons-for-gutenberg' ),
			__( 'uag', 'ultimate-addons-for-gutenberg' ),
		],
		supports: {
			anchor: true,
		},
		attributes,
		edit,
		getEditWrapperProps( attribute ) {
			const { align, contentWidth } = attribute;
			if (
				'left' === align ||
				'right' === align ||
				'wide' === align ||
				'full' === align
			) {
				if ( 'full_width' === contentWidth ) {
					return { 'data-align': align };
				}
			}
		},
		save,
		example: {},
		deprecated,
	} );
}
