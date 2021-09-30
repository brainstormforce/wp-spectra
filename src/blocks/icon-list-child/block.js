/**
 * BLOCK: Icon List - Child
 */

import UAGB_Block_Icons from '@Controls/block-icons';
import attributes from './attributes';
import edit from './edit';
import save from './save';
import './style.scss';
import deprecated from './deprecated';
import { __ } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks';

registerBlockType( 'uagb/icon-list-child', {
	title: __( 'Icon', 'ultimate-addons-for-gutenberg' ),
	description: __( 'This block allows you to place an image or icon in a list format.', 'ultimate-addons-for-gutenberg' ),
	icon: UAGB_Block_Icons.icon_list_child,
	category: uagb_blocks_info.category,
	parent: [ 'uagb/icon-list' ],
	attributes,
	edit,
	save,
	deprecated,
} );
