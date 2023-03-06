/**
 * BLOCK: Image
 */

import Edit from './edit';
import save from './save';
import attributes from './attributes'
import UAGB_Block_Icons from '@Controls/block-icons';
import { __ } from '@wordpress/i18n';
import './style.scss';
import { registerBlockType, createBlock } from '@wordpress/blocks';
import deprecated from './deprecated';
import PreviewImage from '@Controls/previewImage';


registerBlockType( 'uagb/image', {
	title: __( 'Image', 'ultimate-addons-for-gutenberg' ),
	description: __( 'Add images on your webpage with multiple customization options.', 'ultimate-addons-for-gutenberg' ),
	icon: UAGB_Block_Icons.image,
	keywords: [
		__( 'image', 'ultimate-addons-for-gutenberg' ),
		__( 'advance image', 'ultimate-addons-for-gutenberg' ),
		__( 'caption', 'ultimate-addons-for-gutenberg' ),
		__( 'overlay image', 'ultimate-addons-for-gutenberg' ),
	],
	example: {
		attributes: {
			isPreview: true,
		}
	},
	supports: {
		anchor: true,
		color: {
			__experimentalDuotone: 'img',
			text: false,
			background: false
		},
		align: true,
	},
	category: uagb_blocks_info.category,
	attributes,
	edit: ( props ) =>
			props.attributes.isPreview ? (
				<PreviewImage image="image" />
			) : (
				<Edit { ...props } />
			),
	save,
	deprecated,
	transforms: {
		from: [
			{
				type: 'block',
				blocks: [ 'core/image' ],
				transform: ( { url, sizeSlug } ) => {
					return createBlock( 'uagb/image', {
						url,
						sizeSlug,
					} );
				},
			},
			{
				type: 'block',
				blocks: [ 'core/post-featured-image' ],
				transform: ( { sizeSlug } ) => {
					return createBlock( 'uagb/image', {
						useDynamicData: true,
						dynamicContentType: 'featured-image',
						sizeSlug,
					} );
				},
			},
		],
		to: [
			{
				type: 'block',
				blocks: [ 'core/image' ],
				transform: ( { url, sizeSlug } ) => {
					return createBlock( 'core/image', {
						url,
						sizeSlug,
					} );
				},
			},
		],
	},
} );
