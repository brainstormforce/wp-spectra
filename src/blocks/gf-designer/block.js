/**
 * BLOCK: Gravity Form Styler
 */

// Import block dependencies and components.
import { renderLegacyBlockEditorIcon } from '@Controls/block-icons';
import Edit from './edit';
import './style.scss';
import { __ } from '@wordpress/i18n';

import { registerBlockType } from '@wordpress/blocks';
import PreviewImage from '@Controls/previewImage';
import { applyFilters } from '@wordpress/hooks';
import addCommonDataToSpectraBlocks from '@Controls/addCommonDataToSpectraBlocks';
let gfStylerCommonData = {};
gfStylerCommonData = applyFilters( 'uagb/gf-styler', addCommonDataToSpectraBlocks( gfStylerCommonData ) );
if ( uagb_blocks_info.gf_is_active && ( 'yes' === uagb_blocks_info.uagb_old_user_less_than_2 || 'yes' === uagb_blocks_info.enable_legacy_blocks ) ) {
	registerBlockType( 'uagb/gf-styler', {
		...gfStylerCommonData,
		title: __( 'Gravity Form Designer', 'ultimate-addons-for-gutenberg' ), // Block title.
		description: __( 'Highly customize and style your forms created by Gravity Forms.', 'ultimate-addons-for-gutenberg' ), // Block description.
		icon: renderLegacyBlockEditorIcon( 'gf_styler' ),
		keywords: [
			__( 'GF styler', 'ultimate-addons-for-gutenberg' ),
			__( 'gravity form styler', 'ultimate-addons-for-gutenberg' ),
			__( 'uag', 'ultimate-addons-for-gutenberg' ),
		],
		supports: {
			anchor: true,
		},
		edit: ( props ) =>
			props.attributes.isPreview ? (
				<PreviewImage image="gravity-form-styler" />
			) : (
				<Edit { ...props } />
			),
		save() {
			return null;
		},
	} );
}
