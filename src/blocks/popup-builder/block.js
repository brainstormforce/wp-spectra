/**
 * BLOCK: Popup Builder
 */

import UAGB_Block_Icons from '@Controls/block-icons';
import './style.scss';
import attributes from './attributes';
import Edit from './edit';
import save from './save';
import variations from './variations';
import { __ } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks';
import { addFilter } from '@wordpress/hooks';
import PreviewImage from '@Controls/previewImage';
import { addSidebarPopupMenu } from './sidebar-settings/popup-sidebar';

if ( 'spectra-popup' === window.typenow ) {
	registerBlockType( 'uagb/popup-builder', {
		apiVersion: 2,
		title: __( 'Popup Builder', 'ultimate-addons-for-gutenberg' ),
		description: __(
			'This block allows you to build a site-wide popup.',
			'ultimate-addons-for-gutenberg'
		),
		icon: UAGB_Block_Icons.popup_builder,
		keywords: [
			__( 'popup', 'ultimate-addons-for-gutenberg' ),
			__( 'builder', 'ultimate-addons-for-gutenberg' ),
		],
		supports: {
			anchor: true,
			multiple: false,
			reusable: false,
			lock: false,
		},
		category: uagb_blocks_info.category,
		attributes,
		edit: ( props ) => (
			props.attributes.isPreview ? (
				<PreviewImage image="modal" />
			) : (
				<Edit { ...props } />
			)
		),
		save,
		variations,
		example: {
			attributes: {
				isPreview: true,
			}
		},
	} );

	addFilter(
		'spectra.page-sidebar.before',
		'uagb/popup-builder',
		addSidebarPopupMenu,
		1
	);
}
