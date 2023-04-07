/**
 * BLOCK: Column
 */

import { renderLegacyBlockEditorIcon } from '@Controls/block-icons';
import Edit from './edit';
import save from './save';
import deprecated from './deprecated';
import attributes from './attributes';
import './style.scss';
import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';
import PreviewImage from '@Controls/previewImage';
import { applyFilters } from '@wordpress/hooks';
import addCommonDataToSpectraBlocks from '@Controls/addCommonDataToSpectraBlocks';
let columnCommonData = {};
columnCommonData = applyFilters( 'uagb/column', addCommonDataToSpectraBlocks( columnCommonData ) );
registerBlockType( 'uagb/column', {
	...columnCommonData,
	title: __( 'Column', 'ultimate-addons-for-gutenberg' ),
	description: __( 'Immediate child of Advanced Columns', 'ultimate-addons-for-gutenberg' ),
	icon: renderLegacyBlockEditorIcon( 'column' ),
	parent: [ 'uagb/columns' ],
	supports: {
		inserter: false,
		// Add EditorsKit block navigator toolbar
		editorsKitBlockNavigator: true,
	},
	attributes,
	category: uagb_blocks_info.category,
	edit: ( props ) =>
		props.attributes.isPreview ? (
			<PreviewImage image="advanced-columns-child" isChildren={ true } />
		) : (
			<Edit { ...props } />
		),
	save,
	deprecated,
} );
