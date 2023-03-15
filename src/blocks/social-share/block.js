/**
 * BLOCK: Social Share
 */

import UAGB_Block_Icons from '@Controls/block-icons';
import './style.scss';
import transform from './transform';
import attributes from './attributes';
import Edit from './edit';
import save from './save';
import deprecated from './deprecated';
import { __ } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks';
import PreviewImage from '@Controls/previewImage';

registerBlockType( 'uagb/social-share', {
	title: __( 'Social Share', 'ultimate-addons-for-gutenberg' ),
	description: __( 'Share your content on different social media platforms.', 'ultimate-addons-for-gutenberg' ),
	icon: UAGB_Block_Icons.social_share,
	category: uagb_blocks_info.category,
	keywords: [
		__( 'social share', 'ultimate-addons-for-gutenberg' ),
		__( 'icon', 'ultimate-addons-for-gutenberg' ),
		__( 'uag', 'ultimate-addons-for-gutenberg' ),
	],
	supports: {
		anchor: true,
	},
	example: {
		attributes: {
			isPreview: true,
		}
	},
	attributes,
	edit: ( props ) =>
			props.attributes.isPreview ? (
				<PreviewImage image="social-share" />
			) : (
				<Edit { ...props } />
			),
	save,
	transform,
	deprecated,
} );
