/**
 * BLOCK: Lottie
 */

import Edit from './edit';
import UAGB_Block_Icons from '@Controls/block-icons';

import { __ } from '@wordpress/i18n';

import { registerBlockType } from '@wordpress/blocks';
import PreviewImage from '@Controls/previewImage';
import attributes from './attributes';

import { applyFilters } from '@wordpress/hooks';
import addCommonDataToSpectraBlocks from '@Controls/addCommonDataToSpectraBlocks';
let lottieCommonData = {};
lottieCommonData = applyFilters( 'uagb/lottie', addCommonDataToSpectraBlocks( lottieCommonData ) );
registerBlockType( 'uagb/lottie', {
	...lottieCommonData,
	title: __( 'Lottie Animation', 'ultimate-addons-for-gutenberg' ),
	description: __( 'Add customizable lottie animation on your page.', 'ultimate-addons-for-gutenberg' ),
	icon: UAGB_Block_Icons.lottie,
	keywords: [
		__( 'lottie', 'ultimate-addons-for-gutenberg' ),
		__( 'animation', 'ultimate-addons-for-gutenberg' ),
		__( 'uag', 'ultimate-addons-for-gutenberg' ),
	],
	category: uagb_blocks_info.category,
	attributes,
	edit: ( props ) =>
			props.attributes.isPreview ? (
				<PreviewImage image="lottie" />
			) : (
				<Edit { ...props } />
			),
	// Render via PHP
	save: () => null,
} );
