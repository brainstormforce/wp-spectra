/**
 * BLOCK: WP-Search
 */

import './style.scss';
import save from './save';
import Edit from './edit';
import attributes from './attributes';
import { renderLegacyBlockEditorIcon } from '@Controls/block-icons';
import deprecated from './deprecated';
import { __ } from '@wordpress/i18n';

import { registerBlockType } from '@wordpress/blocks';
import PreviewImage from '@Controls/previewImage';
import { applyFilters } from '@wordpress/hooks';
import addCommonDataToSpectraBlocks from '@Controls/addCommonDataToSpectraBlocks';
let searchCommonData = {};
searchCommonData = applyFilters( 'uagb/wp-search', addCommonDataToSpectraBlocks( searchCommonData ) );
if ( 'yes' === uagb_blocks_info.uagb_old_user_less_than_2 || 'yes' === uagb_blocks_info.enable_legacy_blocks ) {
	registerBlockType( 'uagb/wp-search', {
		...searchCommonData,
		title: __( 'Search', 'ultimate-addons-for-gutenberg' ),
		description: __( 'Add a search widget to let users search posts from your website.', 'ultimate-addons-for-gutenberg' ),
		icon: renderLegacyBlockEditorIcon( 'wp_search' ),
		keywords: [
			__( 'search', 'ultimate-addons-for-gutenberg' ),
			__( 'wp', 'ultimate-addons-for-gutenberg' ),
			__( 'uag', 'ultimate-addons-for-gutenberg' ),
		],
		supports: {
			anchor: true,
		},
		attributes,
category: uagb_blocks_info.category,
		edit: ( props ) =>
			props.attributes.isPreview ? (
				<PreviewImage image="wp-search" />
			) : (
				<Edit { ...props } />
			),
		save,
		deprecated
	} );
}
