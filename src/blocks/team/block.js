/**
 * BLOCK: Team
 */

import UAGB_Block_Icons from '@Controls/block-icons';
import edit from './edit';
import save from './save';
import deprecated from './deprecated';
import attributes from './attributes';
import './style.scss';

import { __ } from '@wordpress/i18n';

import { registerBlockType } from '@wordpress/blocks';

registerBlockType( 'uagb/team', {
	title: __( 'Team', 'ultimate-addons-for-gutenberg' ),
	description: __( 'This block allows you to display your team. Add their picture, name, what they do and links to their social profiles.', 'ultimate-addons-for-gutenberg' ),
	icon: UAGB_Block_Icons.team,
	keywords: [
		__( 'team', 'ultimate-addons-for-gutenberg' ),
		__( 'members', 'ultimate-addons-for-gutenberg' ),
		__( 'uag', 'ultimate-addons-for-gutenberg' ),
	],
	supports: {
		anchor: true,
	},
	category: uagb_blocks_info.category,
	attributes,
	example: {
		attributes: {
			isPreview: true,
		}
	},
	edit,
	save,
	deprecated,
} );
