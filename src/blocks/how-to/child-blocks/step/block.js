/**
 * BLOCK: How To - Step
 */

import UAGB_Block_Icons from '@Controls/block-icons';
import attributes from './attributes';
import edit from './edit';
import save from './save';
import { registerBlockType } from '@wordpress/blocks';

registerBlockType( 'uagb/how-to-step', {
	title: uagb_blocks_info.blocks[ 'uagb/how-to-step' ].title,
	description: uagb_blocks_info.blocks[ 'uagb/how-to-step' ].description,
	icon: UAGB_Block_Icons.name,
	category: uagb_blocks_info.category,
	parent: [ 'uagb/how-to' ],
	attributes,
	edit,
	supports: {
		anchor: true,
	},
	example: {},
	save,
} );
