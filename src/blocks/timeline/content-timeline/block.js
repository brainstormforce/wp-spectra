import UAGB_Block_Icons from '@Controls/block-icons';
//  Import CSS.
import '.././style.scss';
import deprecated from './deprecated';
import save from './save';
import attributes from './attributes';
import Edit from './edit';

// Components
import { __ } from '@wordpress/i18n';

// Register block controls
import { registerBlockType } from '@wordpress/blocks';

import { addFilter, applyFilters } from '@wordpress/hooks';
import { withSelect } from '@wordpress/data';
import { compose, createHigherOrderComponent } from '@wordpress/compose';
import PreviewImage from '@Controls/previewImage';

/**
 * Override the default block element to add	wrapper props.
 *
 * @param  {Function} BlockListBlock Original component
 * @return {Function} Wrapped component
 */

const enhance = compose(
	withSelect( ( select ) => {
		return {
			selected: select( 'core/block-editor' ).getSelectedBlock(),
		};
	} )
);
/**
 * Add custom UAG attributes to selected blocks
 *
 * @param {Function} BlockEdit Original component.
 * @return {string} Wrapped component.
 */
const withcontentTimeline = createHigherOrderComponent( ( BlockEdit ) => {
	return enhance( ( { ...props } ) => {
		return <BlockEdit { ...props } />;
	} );
}, 'withcontentTimeline' );

import addCommonDataToSpectraBlocks from '@Controls/addCommonDataToSpectraBlocks';
let contentTimelineCommonData = {};
contentTimelineCommonData = applyFilters(
	'uagb/content-timeline',
	addCommonDataToSpectraBlocks( contentTimelineCommonData )
);
registerBlockType( 'uagb/content-timeline', {
	...contentTimelineCommonData,
	// Block name. Block names must be string that contains a namespace prefix. Example: my-plugin/my-custom-block.
	title: __( 'Content Timeline', 'ultimate-addons-for-gutenberg' ), // Block title.
	description: __( 'Create a timeline displaying contents of your site.', 'ultimate-addons-for-gutenberg' ), // Block description.
	icon: UAGB_Block_Icons.content_timeline, // Block icon from Dashicons → https://developer.wordpress.org/resource/dashicons/.
	keywords: [
		__( 'Content Timeline', 'ultimate-addons-for-gutenberg' ),
		__( 'Timeline', 'ultimate-addons-for-gutenberg' ),
		__( 'uag', 'ultimate-addons-for-gutenberg' ),
	],
	category: uagb_blocks_info.category,
	supports: {
		anchor: true,
	},
	attributes,
	edit: ( props ) =>
		props.attributes.isPreview ? <PreviewImage image="content-timeline" /> : <Edit { ...props } />,
	save,
	deprecated,
} );

addFilter( 'editor.BlockEdit', 'uagb/content-timeline', withcontentTimeline );
