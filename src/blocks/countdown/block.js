/**
 * BLOCK: Countdown
 */

import UAGB_Block_Icons from '@Controls/block-icons';
import attributes from './attributes';
import Edit from './edit';
import save from './save';
import './style.scss';
import { __ } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks';
import PreviewImage from '@Controls/previewImage';

import { applyFilters } from '@wordpress/hooks';
import addCommonDataToSpectraBlocks from '@Controls/addCommonDataToSpectraBlocks';
let countdownCommonData = {};
countdownCommonData = applyFilters( 'uagb/countdown', addCommonDataToSpectraBlocks( countdownCommonData ) );
registerBlockType( 'uagb/countdown', {
	...countdownCommonData,
	apiVersion: 2,
	title: __( 'Countdown', 'ultimate-addons-for-gutenberg' ),
	description: __( 'Create a sense of urgency among your visitors.', 'ultimate-addons-for-gutenberg' ),
	icon: UAGB_Block_Icons.countdown,
	keywords: [
		__( 'countdown', 'ultimate-addons-for-gutenberg' ),
		__( 'timer', 'ultimate-addons-for-gutenberg' ),
		__( 'sale', 'ultimate-addons-for-gutenberg' ),
		__( 'offer', 'ultimate-addons-for-gutenberg' ),
		__( 'discount', 'ultimate-addons-for-gutenberg' ),
	],
	supports: {
		anchor: true,
	},
	attributes,
	category: uagb_blocks_info.category,
	edit: ( props ) => ( props.attributes.isPreview ? <PreviewImage image="countdown" /> : <Edit { ...props } /> ),
	save,
} );
