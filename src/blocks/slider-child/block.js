/**
 * BLOCK: Slider Child
 */

import UAGB_Block_Icons from '@Controls/block-icons';
import save from './save';
import attributes from './attributes';
import Edit from './edit';

import { __ } from '@wordpress/i18n';

import { registerBlockType } from '@wordpress/blocks';
import PreviewImage from '@Controls/previewImage';
import deprecated from './deprecated';


registerBlockType( 'uagb/slider-child', {
	title: __( 'Slider Child', 'ultimate-addons-for-gutenberg' ),
	description: __( 'Add and customize content of this slide.', 'ultimate-addons-for-gutenberg' ),
	icon: UAGB_Block_Icons.slider_child,
	category: uagb_blocks_info.category,
	parent: [ 'uagb/slider' ],
	keywords: [
		__( 'slider', 'ultimate-addons-for-gutenberg' ),
		__( 'uag', 'ultimate-addons-for-gutenberg' ),
	],
	attributes,
	edit: ( props ) =>
			props.attributes.isPreview ? (
				<PreviewImage image="slider-child" isChildren={ true } />
			) : (
				<Edit { ...props } />
			),
	save,
	deprecated,
	example: {
		attributes: {
			isPreview: true,
		}
	},
} );
