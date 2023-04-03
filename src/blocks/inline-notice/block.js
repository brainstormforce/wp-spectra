/**
 * BLOCK: Inline Notice Block.
 */
import UAGB_Block_Icons from '@Controls/block-icons';
import attributes from './attributes';
import Edit from './edit';
import save from './save';
import './style.scss';
import deprecated from './deprecated';
import { __ } from '@wordpress/i18n';

import { registerBlockType } from '@wordpress/blocks';
import PreviewImage from '@Controls/previewImage';
import { applyFilters } from '@wordpress/hooks';
import addCommonDataToSpectraBlocks from '@Controls/addCommonDataToSpectraBlocks';
let inlineNoticeCommonData = {};
inlineNoticeCommonData = applyFilters( 'uagb/inline-notice', addCommonDataToSpectraBlocks( inlineNoticeCommonData ) );
registerBlockType( 'uagb/inline-notice', {
	...inlineNoticeCommonData,
	title: __( 'Inline Notice', 'ultimate-addons-for-gutenberg' ),
	description: __( 'Highlight important information using inline notice block.', 'ultimate-addons-for-gutenberg' ),
	icon: UAGB_Block_Icons.inline_notice,

	keywords: [
		__( 'inline notice', 'ultimate-addons-for-gutenberg' ),
		__( 'notice', 'ultimate-addons-for-gutenberg' ),
		__( 'uag', 'ultimate-addons-for-gutenberg' ),
	],
	supports: {
		anchor: true,
	},
	attributes,
category: uagb_blocks_info.category,
	deprecated,
	edit: ( props ) =>
			props.attributes.isPreview ? (
				<PreviewImage image="inline-notice" />
			) : (
				<Edit { ...props } />
			),
	save,
} );
