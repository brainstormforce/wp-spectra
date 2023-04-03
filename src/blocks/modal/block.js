/**
 * BLOCK: Modal
 */

import UAGB_Block_Icons from '@Controls/block-icons';
import attributes from './attributes';
import Edit from './edit';
import save from './save';
import './style.scss';
import { __ } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks';
import PreviewImage from '@Controls/previewImage';
import deprecated from './deprecated';
import { applyFilters } from '@wordpress/hooks';
import addCommonDataToSpectraBlocks from '@Controls/addCommonDataToSpectraBlocks';
let modalCommonData = {};
modalCommonData = applyFilters( 'uagb/modal', addCommonDataToSpectraBlocks( modalCommonData ) );
registerBlockType( 'uagb/modal', {
	...modalCommonData,
	title: __( 'Modal', 'ultimate-addons-for-gutenberg' ),
	description: __(
		'This block allows you to add modal popup.',
		'ultimate-addons-for-gutenberg'
	),
	icon: UAGB_Block_Icons.modal,
	keywords: [
		__( 'modal', 'ultimate-addons-for-gutenberg' ),
		__( 'popup', 'ultimate-addons-for-gutenberg' ),
	],
	supports: {
		anchor: true,
	},

	attributes,
category: uagb_blocks_info.category,
	edit: ( props ) =>
			props.attributes.isPreview ? (
				<PreviewImage image="modal" />
			) : (
				<Edit { ...props } />
			),
	save,
	deprecated,
} );
