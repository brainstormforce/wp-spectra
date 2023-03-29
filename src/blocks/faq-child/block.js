/**
 * BLOCK: FAQ - Schema - Child
 */

import UAGB_Block_Icons from '@Controls/block-icons';
import attributes from './attributes';
import Edit from './edit';
import save from './save';
import './style.scss';
import deprecated from './deprecated';
import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';
import PreviewImage from '@Controls/previewImage';
import { applyFilters } from '@wordpress/hooks';
import addCommonDataToSpectraBlocks from '@Controls/addCommonDataToSpectraBlocks';
let faqChildCommonData = {};
faqChildCommonData = applyFilters( 'uagb/faq-child', addCommonDataToSpectraBlocks( faqChildCommonData ) );
registerBlockType( 'uagb/faq-child', {
	...faqChildCommonData,
	title: __( 'FAQ Child', 'ultimate-addons-for-gutenberg' ),
	description: __( 'Add a frequently asked question/accordion to display information.', 'ultimate-addons-for-gutenberg' ),
	icon: UAGB_Block_Icons.faq_child,
	parent: [ 'uagb/faq' ],
	attributes,
category: uagb_blocks_info.category,
	edit: ( props ) =>
		props.attributes.isPreview ? (
			<PreviewImage image="faq-child" isChildren={ true } />
		) : (
			<Edit { ...props } />
		),
	supports: {
		anchor: true,
	},
	save,
	deprecated,
} );
