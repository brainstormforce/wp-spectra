/**
 * BLOCK: Image
 */

import Edit from './edit';
import save from './save';
import attributes from './attributes';
import UAGB_Block_Icons from '@Controls/block-icons';
import { __ } from '@wordpress/i18n';
import './style.scss';
import { registerBlockType } from '@wordpress/blocks';
import deprecated from './deprecated';
import PreviewImage from '@Controls/previewImage';
import { applyFilters } from '@wordpress/hooks';
import addCommonDataToSpectraBlocks from '@Controls/addCommonDataToSpectraBlocks';
import transforms from './transforms';
let imageCommonData = {};
imageCommonData = applyFilters( 'uagb/image', addCommonDataToSpectraBlocks( imageCommonData ) );
registerBlockType( 'uagb/image', {
	...imageCommonData,
	title: __( 'Image', 'ultimate-addons-for-gutenberg' ),
	description: __(
		'Add images on your webpage with multiple customization options.',
		'ultimate-addons-for-gutenberg'
	),
	icon: UAGB_Block_Icons.image,
	keywords: [
		__( 'image', 'ultimate-addons-for-gutenberg' ),
		__( 'advance image', 'ultimate-addons-for-gutenberg' ),
		__( 'caption', 'ultimate-addons-for-gutenberg' ),
		__( 'overlay image', 'ultimate-addons-for-gutenberg' ),
	],
	supports: {
		anchor: true,
		color: {
			__experimentalDuotone: 'img',
			text: false,
			background: false,
		},
		align: true,
	},

	attributes,
	category: uagb_blocks_info.category,
	edit: ( props ) => ( props.attributes.isPreview ? <PreviewImage image="image" /> : <Edit { ...props } /> ),
	save,
	__experimentalLabel: ( atts, { context } ) => {
		if ( context === 'list-view' && atts?.metadata?.name && atts.metadata.name ) {
			return atts.metadata.name;
		}

		return applyFilters( 'uag_loop_data_source_label', __( 'Image', 'ultimate-addons-for-gutenberg' ), atts );
	},
	usesContext: [ 'postId', 'postType' ],
	deprecated,
	transforms,
} );
