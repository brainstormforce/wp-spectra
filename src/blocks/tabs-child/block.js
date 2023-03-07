/**
 * BLOCK: Tabs Child Block
 */

import UAGB_Block_Icons from '@Controls/block-icons';
import './style.scss';
import attributes from './attributes';
import Edit from './edit';
import deprecated from './deprecated';
import save from './save';

import { __ } from '@wordpress/i18n';

import { registerBlockType } from '@wordpress/blocks';
import PreviewImage from '@Controls/previewImage';

registerBlockType( 'uagb/tabs-child', {
	title: __( 'Tabs child', 'ultimate-addons-for-gutenberg' ),
	description: __( 'Display your content in a tab.', 'ultimate-addons-for-gutenberg' ),
	parent: [ 'uagb/tabs' ],
	icon: UAGB_Block_Icons.tabs_child,
	category: uagb_blocks_info.category,
	keywords: [
		__( 'tabs', 'ultimate-addons-for-gutenberg' ),
		__( 'uag', 'ultimate-addons-for-gutenberg' ),
	],
	supports: {
		anchor: true,
	},
	attributes,
	edit: ( props ) =>
			props.attributes.isPreview ? (
				<PreviewImage image="tabs-child" isChildren={ true } />
			) : (
				<Edit { ...props } />
			),
	save,
	deprecated,
	example: {
		attributes: {
			isPreview: true,
		}
	},
} );
