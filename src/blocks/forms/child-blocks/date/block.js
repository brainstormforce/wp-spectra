/**
 * BLOCK: Forms - Date
 */

import UAGB_Block_Icons from '@Controls/block-icons';
import attributes from './attributes';
import Edit from './edit';
import save from './save';
import deprecated from './deprecated';

import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';
import PreviewImage from '@Controls/previewImage';
import { applyFilters } from '@wordpress/hooks';
import addCommonDataToSpectraBlocks from '@Controls/addCommonDataToSpectraBlocks';
let dateCommonData = {};
dateCommonData = applyFilters( 'uagb/forms-date', addCommonDataToSpectraBlocks( dateCommonData ) );
registerBlockType( 'uagb/forms-date', {
	...dateCommonData,
	title: __( 'Datepicker', 'ultimate-addons-for-gutenberg' ),
	description: __( 'Add a calendar based date picker in your form.', 'ultimate-addons-for-gutenberg' ),
	icon: UAGB_Block_Icons.datepicker,
	parent: [ 'uagb/forms' ],
	attributes,
	category: uagb_blocks_info.category,
	edit: ( props ) =>
		props.attributes.isPreview ? <PreviewImage image="form-field" isChildren={ true } /> : <Edit { ...props } />,
	supports: {
		anchor: true,
	},
	save,
	deprecated,
} );
