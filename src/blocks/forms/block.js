/**
 * BLOCK: Forms - Block
 */

import UAGB_Block_Icons from '@Controls/block-icons';
import attributes from './attributes';
import Edit from './edit';
import save from './save';
import './style.scss';
import variations from './variations';
import deprecated from './deprecated';
import { __ } from '@wordpress/i18n';

import { registerBlockType } from '@wordpress/blocks';
import PreviewImage from '@Controls/previewImage';
import { applyFilters } from '@wordpress/hooks';
import addCommonDataToSpectraBlocks from '@Controls/addCommonDataToSpectraBlocks';
let formsCommonData = {};
formsCommonData = applyFilters( 'uagb/forms', addCommonDataToSpectraBlocks( formsCommonData ) );
registerBlockType( 'uagb/forms', {
	...formsCommonData,
	title: __( 'Form', 'ultimate-addons-for-gutenberg' ),
	description: __( 'Add easily customizable forms to gather information.', 'ultimate-addons-for-gutenberg' ),
	icon: UAGB_Block_Icons.forms,

	keywords: [ __( 'forms', 'ultimate-addons-for-gutenberg' ), __( 'uag', 'ultimate-addons-for-gutenberg' ) ],
	attributes,
	category: uagb_blocks_info.category,
	variations,
	edit: ( props ) => ( props.attributes.isPreview ? <PreviewImage image="form" /> : <Edit { ...props } /> ),
	supports: {
		anchor: true,
	},
	deprecated,
	save,
} );
