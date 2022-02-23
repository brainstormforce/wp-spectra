/**
 * BLOCK: Buttons - Child
 */

import UAGB_Block_Icons from '@Controls/block-icons';
import attributes from './attributes';
import deprecated from './deprecated';
import edit from './edit';
import save from './save';
import './style.scss';
import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';

registerBlockType( 'uagb/buttons-child', {
	title: __( 'Button', 'ultimate-addons-for-gutenberg' ),
	description: __( 'This block allows you to style button.', 'ultimate-addons-for-gutenberg' ),
	icon: UAGB_Block_Icons.buttons_child,
	category: uagb_blocks_info.category,
	parent: [ 'uagb/buttons' ],
	attributes,
	edit,
	save,
	deprecated,
} );
