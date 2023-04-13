/**
 * BLOCK: Info Box
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
let infoBoxCommonData = {};
infoBoxCommonData = applyFilters( 'uagb/info-box', addCommonDataToSpectraBlocks( infoBoxCommonData ) );
registerBlockType( 'uagb/info-box', {
	...infoBoxCommonData,
	title: __( 'Info Box', 'ultimate-addons-for-gutenberg' ),
	description: __(
		'Add image/icon, separator and text description using a single block.',
		'ultimate-addons-for-gutenberg'
	),
	icon: UAGB_Block_Icons.info_box,
	keywords: [ __( 'info box', 'ultimate-addons-for-gutenberg' ), __( 'uag', 'ultimate-addons-for-gutenberg' ) ],
	supports: {
		anchor: true,
	},
	usesContext: [ 'postId', 'postType' ],
	attributes,
	category: uagb_blocks_info.category,
	edit: ( props ) => ( props.attributes.isPreview ? <PreviewImage image="info-box" /> : <Edit { ...props } /> ),
	save,
	deprecated,
} );
