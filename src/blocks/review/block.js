/**
 * BLOCK: Rating Block.
 */
import UAGB_Block_Icons from '@Controls/block-icons';
import attributes from './attributes';
import Edit from './edit';
import save from './save';
import './style.scss';
import { __ } from '@wordpress/i18n';
import deprecated from './deprecated';
import { registerBlockType } from '@wordpress/blocks';
import PreviewImage from '@Controls/previewImage';
import { applyFilters } from '@wordpress/hooks';
import addCommonDataToSpectraBlocks from '@Controls/addCommonDataToSpectraBlocks';
let reviewCommonData = {};
reviewCommonData = applyFilters( 'uagb/review', addCommonDataToSpectraBlocks( reviewCommonData ) );
registerBlockType( 'uagb/review', {
	...reviewCommonData,
	title: __( 'Review', 'ultimate-addons-for-gutenberg' ),
	description: __( 'Add reviews to items with Schema support.', 'ultimate-addons-for-gutenberg' ),
	icon: UAGB_Block_Icons.review,
	keywords: [
		__( 'ratings', 'ultimate-addons-for-gutenberg' ),
		__( 'review', 'ultimate-addons-for-gutenberg' ),
		__( 'schema', 'ultimate-addons-for-gutenberg' ),
		__( 'uag', 'ultimate-addons-for-gutenberg' ),
	],
	supports: {
		anchor: true,
	},
	attributes,
	category: uagb_blocks_info.category,
	edit: ( props ) => ( props.attributes.isPreview ? <PreviewImage image="review" /> : <Edit { ...props } /> ),
	save,
	deprecated,
} );
