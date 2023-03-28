/**
 * BLOCK: Testimonial
 */

import UAGB_Block_Icons from '@Controls/block-icons';
import Edit from './edit';
import save from './save';
import attributes from './attributes';
import deprecated from './deprecated';
import './style.scss';
import { __ } from '@wordpress/i18n';

import { registerBlockType } from '@wordpress/blocks';
import PreviewImage from '@Controls/previewImage';
import { applyFilters } from '@wordpress/hooks';
import addCommonDataToSpectraBlocks from '@Controls/addCommonDataToSpectraBlocks';
let testimonialCommonData = {};
testimonialCommonData = applyFilters( 'uagb/testimonial', addCommonDataToSpectraBlocks( testimonialCommonData ) );
registerBlockType( 'uagb/testimonial', {
	...testimonialCommonData,
	title: __( 'Testimonials', 'ultimate-addons-for-gutenberg' ), // Block title.
	description: __( 'Display customer testimonials in customizable layouts.', 'ultimate-addons-for-gutenberg' ), // Block description.
	icon: UAGB_Block_Icons.testimonial, // Block icon from Dashicons → https://developer.wordpress.org/resource/dashicons/.
	keywords: [
		__( 'testimonial', 'ultimate-addons-for-gutenberg' ),
		__( 'uag', 'ultimate-addons-for-gutenberg' ),
	],
	supports: {
		anchor: true,
	},
	attributes,
category: uagb_blocks_info.category,
	edit: ( props ) =>
			props.attributes.isPreview ? (
				<PreviewImage image="testimonial" />
			) : (
				<Edit { ...props } />
			),
	save,
	deprecated,
} );
