/**
 * BLOCK: Call To Action.
 */

// Import block dependencies and components.
import UAGB_Block_Icons from '@Controls/block-icons';

// Import icon.
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
let CallToActionCommonData = {};
CallToActionCommonData = applyFilters( 'uagb/call-to-action', addCommonDataToSpectraBlocks( CallToActionCommonData ) );
registerBlockType( 'uagb/call-to-action', {
	...CallToActionCommonData,
	title: __( 'Call To Action', 'ultimate-addons-for-gutenberg' ),
	description: __( 'Add a button along with heading and description.', 'ultimate-addons-for-gutenberg' ),
	icon: UAGB_Block_Icons.call_to_action,
	keywords: [
		__( 'cta', 'ultimate-addons-for-gutenberg' ),
		__( 'call to action', 'ultimate-addons-for-gutenberg' ),
		__( 'uag', 'ultimate-addons-for-gutenberg' ),
	],
	supports: {
		anchor: true,
	},
	attributes,
	category: uagb_blocks_info.category,
	edit: ( props ) => ( props.attributes.isPreview ? <PreviewImage image="call-to-action" /> : <Edit { ...props } /> ),
	save,
	deprecated,
} );
