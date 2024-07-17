/**
 * BLOCK: Google Map
 */

import UAGB_Block_Icons from '@Controls/block-icons';
import './style.scss';
import Edit from './edit';
import deprecated from './deprecated';
import attributes from './attributes';
import { __ } from '@wordpress/i18n';

import { registerBlockType } from '@wordpress/blocks';
import PreviewImage from '@Controls/previewImage';

wp.uagb_google_api_key = 'AIzaSyAsd_d46higiozY-zNqtr7zdA81Soswje4';
import { applyFilters } from '@wordpress/hooks';
import addCommonDataToSpectraBlocks from '@Controls/addCommonDataToSpectraBlocks';
let googleMapCommonData = {};
googleMapCommonData = applyFilters( 'uagb/google-map', addCommonDataToSpectraBlocks( googleMapCommonData ) );
registerBlockType( 'uagb/google-map', {
	...googleMapCommonData,
	title: __( 'Google Maps', 'ultimate-addons-for-gutenberg' ),
	description: __( 'Show a Google Map location on your website.', 'ultimate-addons-for-gutenberg' ),
	icon: UAGB_Block_Icons.google_map,
	keywords: [
		__( 'google', 'ultimate-addons-for-gutenberg' ),
		__( 'maps', 'ultimate-addons-for-gutenberg' ),
		__( 'uag', 'ultimate-addons-for-gutenberg' ),
	],
	supports: {
		anchor: true,
	},
	attributes,
	category: uagb_blocks_info.category,
	edit: ( props ) => ( props.attributes.isPreview ? <PreviewImage image="google-maps" /> : <Edit { ...props } /> ),
	// Render via PHP
	save: () => null,
	deprecated,
} );
