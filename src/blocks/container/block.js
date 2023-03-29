/**
 * BLOCK: Container
 */

import UAGB_Block_Icons from '@Controls/block-icons';
import attributes from './attributes';
import Edit from './edit';
import save from './save';
import './style.scss';
import { __ } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks';
import variations from './variations';
import transforms from './transforms';
import PreviewImage from '@Controls/previewImage';
import { applyFilters } from '@wordpress/hooks';
import addCommonDataToSpectraBlocks from '@Controls/addCommonDataToSpectraBlocks';
let containerCommonData = {};
containerCommonData = applyFilters( 'uagb/container', addCommonDataToSpectraBlocks( containerCommonData ) );
registerBlockType( 'uagb/container', {
	...containerCommonData,
	apiVersion: 2,
	title: __( 'Container', 'ultimate-addons-for-gutenberg' ),
	description: __(
		'Create beautiful layouts with flexbox powered container block.',
		'ultimate-addons-for-gutenberg'
	),
	icon: UAGB_Block_Icons.container,
	keywords: [
		__( 'container', 'ultimate-addons-for-gutenberg' ),
		__( 'uag', 'ultimate-addons-for-gutenberg' ),
		__( 'flex', 'ultimate-addons-for-gutenberg' ),
	],
	supports: {
		anchor: true,
	},
	attributes,
category: uagb_blocks_info.category,
	variations,
	edit: ( props ) =>
		props.attributes.isPreview ? (
			<PreviewImage image="container" />
		) : (
			<Edit { ...props } />
		),
	save,
	transforms,
} );
