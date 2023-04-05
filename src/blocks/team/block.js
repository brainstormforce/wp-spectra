/**
 * BLOCK: Team
 */

import UAGB_Block_Icons from '@Controls/block-icons';
import Edit from './edit';
import save from './save';
import deprecated from './deprecated';
import attributes from './attributes';
import './style.scss';

import { __ } from '@wordpress/i18n';

import { registerBlockType } from '@wordpress/blocks';
import PreviewImage from '@Controls/previewImage';
import { applyFilters } from '@wordpress/hooks';
import addCommonDataToSpectraBlocks from '@Controls/addCommonDataToSpectraBlocks';
let teamCommonData = {};
teamCommonData = applyFilters( 'uagb/team', addCommonDataToSpectraBlocks( teamCommonData ) );
registerBlockType( 'uagb/team', {
	...teamCommonData,
	title: __( 'Team', 'ultimate-addons-for-gutenberg' ),
	description: __( 'Showcase your team by displaying info and social media profiles.', 'ultimate-addons-for-gutenberg' ),
	icon: UAGB_Block_Icons.team,
	keywords: [
		__( 'team', 'ultimate-addons-for-gutenberg' ),
		__( 'members', 'ultimate-addons-for-gutenberg' ),
		__( 'uag', 'ultimate-addons-for-gutenberg' ),
	],
	supports: {
		anchor: true,
	},
	attributes,
category: uagb_blocks_info.category,
	edit: ( props ) =>
			props.attributes.isPreview ? (
				<PreviewImage image="team" />
			) : (
				<Edit { ...props } />
			),
	save,
	deprecated,
} );
