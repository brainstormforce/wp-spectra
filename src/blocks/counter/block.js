/**
 * BLOCK: Counter
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
let counterCommonData = {};
counterCommonData = applyFilters( 'uagb/counter', addCommonDataToSpectraBlocks( counterCommonData ) );
registerBlockType( 'uagb/counter', {
	...counterCommonData,
	title: __( 'Counter', 'ultimate-addons-for-gutenberg' ),
	description: __( 'This block allows you to add number counter.', 'ultimate-addons-for-gutenberg' ),
	icon: UAGB_Block_Icons.counter,
	keywords: [ __( 'counter', 'ultimate-addons-for-gutenberg' ), __( 'number', 'ultimate-addons-for-gutenberg' ) ],
	supports: {
		anchor: true,
	},
	attributes,
	category: uagb_blocks_info.category,
	edit: ( props ) => ( props.attributes.isPreview ? <PreviewImage image="counter" /> : <Edit { ...props } /> ),
	save,
} );
