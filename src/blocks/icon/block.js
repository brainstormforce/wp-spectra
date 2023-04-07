/**
 * BLOCK: Icon
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
let iconCommonData = {};
iconCommonData = applyFilters( 'uagb/icon', addCommonDataToSpectraBlocks( iconCommonData ) );
registerBlockType( 'uagb/icon', {
	...iconCommonData,
	apiVersion: 2,
	title: __( 'Icon', 'ultimate-addons-for-gutenberg' ),
	description: __( 'Add stunning customizable icons to your website.', 'ultimate-addons-for-gutenberg' ),
	icon: UAGB_Block_Icons.icon,
	keywords: [
		// More keywords can be added.
		__( 'icon', 'ultimate-addons-for-gutenberg' ),
		__( 'uag', 'ultimate-addons-for-gutenberg' ),
	],
	supports: {
		anchor: true,
	},
	attributes,
	category: uagb_blocks_info.category,
	edit: ( props ) => ( props.attributes.isPreview ? <PreviewImage image="icon" /> : <Edit { ...props } /> ),
	save,
} );
