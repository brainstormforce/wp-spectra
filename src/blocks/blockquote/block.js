/**
 * BLOCK: Quote
 */

import UAGB_Block_Icons from '@Controls/block-icons';
import Edit from './edit';
import save from './save';
import './style.scss';
import deprecated from './deprecated';
import attributes from './attributes';
import { __ } from '@wordpress/i18n';
import transforms from './transforms';
import { registerBlockType} from '@wordpress/blocks';
import PreviewImage from '@Controls/previewImage';
import { applyFilters } from '@wordpress/hooks';
import addCommonDataToSpectraBlocks from '@Controls/addCommonDataToSpectraBlocks';
let blockquoteCommonData = {};
blockquoteCommonData = applyFilters( 'uagb/blockquote', addCommonDataToSpectraBlocks( blockquoteCommonData ) );
registerBlockType( 'uagb/blockquote', {
	...blockquoteCommonData,
	title: __( 'Blockquote', 'ultimate-addons-for-gutenberg' ),
	description: __( 'Display qoutes/quoted texts using blockquote.', 'ultimate-addons-for-gutenberg' ),
	icon: UAGB_Block_Icons.blockquote,
	keywords: [
		__( 'blockquote', 'ultimate-addons-for-gutenberg' ),
		__( 'quote', 'ultimate-addons-for-gutenberg' ),
		__( 'uagb', 'ultimate-addons-for-gutenberg' ),
	],
	supports: {
		anchor: true,
	},
	attributes,
	category: uagb_blocks_info.category,
	edit: ( props ) => ( props.attributes.isPreview ? <PreviewImage image="blockquote" /> : <Edit { ...props } /> ),
	save,
	deprecated,
	transforms,
} );
