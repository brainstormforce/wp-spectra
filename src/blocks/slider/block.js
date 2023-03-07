/**
 * BLOCK: Slider
 */

 import UAGB_Block_Icons from '@Controls/block-icons';
 import attributes from './attributes';
 import Edit from './edit';
 import save from './save';
 import './style.scss';
 import { __ } from '@wordpress/i18n';
 import { registerBlockType } from '@wordpress/blocks';
 import PreviewImage from '@Controls/previewImage';

 registerBlockType( 'uagb/slider', {
     apiVersion: 2,
     title: __( 'Slider', 'ultimate-addons-for-gutenberg' ),
     description: __(
         'Create beautiful sliders with slider block.',
         'ultimate-addons-for-gutenberg'
     ),
     icon: UAGB_Block_Icons.slider,
     keywords: [
         __( 'slider', 'ultimate-addons-for-gutenberg' ),
         __( 'uag', 'ultimate-addons-for-gutenberg' ),
         __( 'flex', 'ultimate-addons-for-gutenberg' ),
     ],
     supports: {
         anchor: true,
     },
     category: uagb_blocks_info.category,
     attributes,
     example: {
         attributes: {
             isPreview: true,
         }
     },
     edit: ( props ) =>
			props.attributes.isPreview ? (
				<PreviewImage image="slider" />
			) : (
				<Edit { ...props } />
			),
     save
 } );
