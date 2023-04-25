/**
 * BLOCK: Icon List
 */

import UAGB_Block_Icons from '@Controls/block-icons';
import attributes from './attributes';
import Edit from './edit';
import save from './save';
import deprecated from './deprecated';
import './style.scss';

import { __ } from '@wordpress/i18n';

import { registerBlockType } from '@wordpress/blocks';
import PreviewImage from '@Controls/previewImage';
import { applyFilters } from '@wordpress/hooks';
import addCommonDataToSpectraBlocks from '@Controls/addCommonDataToSpectraBlocks';
let iconListCommonData = {};
iconListCommonData = applyFilters( 'uagb/icon-list', addCommonDataToSpectraBlocks( iconListCommonData ) );
registerBlockType( 'uagb/icon-list', {
	...iconListCommonData,
	title: __( 'Icon List', 'ultimate-addons-for-gutenberg' ),
	description: __( 'Create a list highlighted with icons/images.', 'ultimate-addons-for-gutenberg' ),
	icon: UAGB_Block_Icons.icon_list,
	keywords: [
		__( 'icon list', 'ultimate-addons-for-gutenberg' ),
		__( 'image list', 'ultimate-addons-for-gutenberg' ),
		__( 'uag', 'ultimate-addons-for-gutenberg' ),
	],
	supports: {
		anchor: true,
	},
	attributes,
	category: uagb_blocks_info.category,
	edit: ( props ) => ( props.attributes.isPreview ? <PreviewImage image="icon-list" /> : <Edit { ...props } /> ),
	save,
	deprecated,
} );
