/**
 * BLOCK: Star Rating
 */

import UAGB_Block_Icons from '@Controls/block-icons';
import attributes from './attributes';
import Edit from './edit';
import save from './save';
import './style.scss';
import { __ } from '@wordpress/i18n';
import deprecated from './deprecated';
import { registerBlockType } from '@wordpress/blocks';
import PreviewImage from '@Controls/previewImage';
import { applyFilters } from '@wordpress/hooks';
import addCommonDataToSpectraBlocks from '@Controls/addCommonDataToSpectraBlocks';
let starRatingCommonData = {};
starRatingCommonData = applyFilters( 'uagb/star-rating', addCommonDataToSpectraBlocks( starRatingCommonData ) );
registerBlockType( 'uagb/star-rating', {
	...starRatingCommonData,
	title: __( 'Star Ratings', 'ultimate-addons-for-gutenberg' ),
	description: __(
		'Display customizable star ratings on your page.',
		'ultimate-addons-for-gutenberg'
	),
	icon: UAGB_Block_Icons.star_rating,
	keywords: [
		__( 'rating', 'ultimate-addons-for-gutenberg' ),
		__( 'star rating', 'ultimate-addons-for-gutenberg' ),
		__( 'review', 'ultimate-addons-for-gutenberg' ),
	],
	supports: {
		anchor: true,
	},
	attributes,
category: uagb_blocks_info.category,
	edit: ( props ) =>
			props.attributes.isPreview ? (
				<PreviewImage image="star-rating" />
			) : (
				<Edit { ...props } />
			),
	save,
	deprecated
} );
