/**
 * BLOCK: Social Share Child
 */

import UAGB_Block_Icons from '@Controls/block-icons';
import attributes from './attributes';
import Edit from './edit';
import save from './save';
import './style.scss';
import deprecated from './deprecated';
import { __ } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks';
import PreviewImage from '@Controls/previewImage';
import { applyFilters } from '@wordpress/hooks';
import addCommonDataToSpectraBlocks from '@Controls/addCommonDataToSpectraBlocks';
let socialShareChildCommonData = {};
socialShareChildCommonData = applyFilters(
	'uagb/social-share-child',
	addCommonDataToSpectraBlocks( socialShareChildCommonData )
);
registerBlockType( 'uagb/social-share-child', {
	...socialShareChildCommonData,
	title: __( 'Social Share Child', 'ultimate-addons-for-gutenberg' ),
	description: __( 'Share your content on this social media platform .', 'ultimate-addons-for-gutenberg' ),
	icon: UAGB_Block_Icons.social_share_child,
	parent: [ 'uagb/social-share' ],
	keywords: [
		__( 'social share', 'ultimate-addons-for-gutenberg' ),
		__( 'icon', 'ultimate-addons-for-gutenberg' ),
		__( 'uag', 'ultimate-addons-for-gutenberg' ),
	],
	attributes,
	category: uagb_blocks_info.category,
	edit: ( props ) =>
		props.attributes.isPreview ? (
			<PreviewImage image="social-share-child" isChildren={ true } />
		) : (
			<Edit { ...props } />
		),
	save,
	deprecated,
} );
