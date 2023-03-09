/**
 * BLOCK: Columns
 */

import { renderLegacyBlockEditorIcon } from '@Controls/block-icons';
import attributes from './attributes';
import Edit from './edit';
import deprecated from './deprecated';
import variations from './variations';
import './style.scss';
import save from './save';

import { __ } from '@wordpress/i18n';

import { registerBlockType } from '@wordpress/blocks';
import PreviewImage from '@Controls/previewImage';

if ( 'yes' === uagb_blocks_info.uagb_old_user_less_than_2 || 'yes' === uagb_blocks_info.enable_legacy_blocks ) {
	registerBlockType( 'uagb/columns', {
		title: __( 'Advanced Columns', 'ultimate-addons-for-gutenberg' ),
		description:  __( 'Insert a number of columns within a single row.', 'ultimate-addons-for-gutenberg' ),
		icon: renderLegacyBlockEditorIcon( 'columns' ),
		category: uagb_blocks_info.category,
		keywords: [
			__( 'columns', 'ultimate-addons-for-gutenberg' ),
			__( 'rows', 'ultimate-addons-for-gutenberg' ),
			__( 'uag', 'ultimate-addons-for-gutenberg' ),
		],
		attributes,
		variations,
		edit: ( props ) =>
		props.attributes.isPreview ? (
			<PreviewImage image="advanced-columns" />
		) : (
			<Edit { ...props } />
		),
		getEditWrapperProps( attribute ) {
			return {
				'data-align': attribute.align,
				'data-valign': attribute.vAlign,
			};
		},
		supports: {
			// Add EditorsKit block navigator toolbar
			editorsKitBlockNavigator: true,
			anchor: true,
		},
		example: {
			attributes: {
				isPreview: true,
			}
		},
		save,
		deprecated,
	} );
}
