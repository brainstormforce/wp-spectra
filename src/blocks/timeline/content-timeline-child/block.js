/**
 * BLOCK: Content Timeline Child
 */

import UAGB_Block_Icons from '@Controls/block-icons';
import '.././style.scss';
import './style.scss';
import save from './save';
import attributes from './attributes';
import Edit from './edit';
import deprecated from './deprecated';

import { __ } from '@wordpress/i18n';

import { registerBlockType } from '@wordpress/blocks';
import PreviewImage from '@Controls/previewImage';
import { applyFilters } from '@wordpress/hooks';
import addCommonDataToSpectraBlocks from '@Controls/addCommonDataToSpectraBlocks';
let contentTimelineChildCommonData = {};
contentTimelineChildCommonData = applyFilters( 'uagb/content-timeline-child', addCommonDataToSpectraBlocks( contentTimelineChildCommonData ) );
registerBlockType( 'uagb/content-timeline-child', {
	...contentTimelineChildCommonData,
	title: __( 'Content Timeline Child', 'ultimate-addons-for-gutenberg' ),
	description: __( 'Add and customize content of this timeline.', 'ultimate-addons-for-gutenberg' ),
	icon: UAGB_Block_Icons.content_timeline_child,
	parent: [ 'uagb/content-timeline' ],
	keywords: [
		__( 'Content Timeline', 'ultimate-addons-for-gutenberg' ),
		__( 'Timeline', 'ultimate-addons-for-gutenberg' ),
		__( 'uag', 'ultimate-addons-for-gutenberg' ),
	],
	category: uagb_blocks_info.category,
	attributes,
	edit: ( props ) =>
			props.attributes.isPreview ? (
				<PreviewImage image="content-timeline-child" isChildren={ true } />
			) : (
				<Edit { ...props } />
			),
	save,
	deprecated,
} );
