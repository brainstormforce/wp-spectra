import UserConditionOptions from './condition-block';

import { __ } from '@wordpress/i18n';
const enableConditions = uagb_blocks_info.uagb_display_condition;
const enableMasonryGallery = uagb_blocks_info.enableMasonryGallery;

const AdvancedControlsBlock = wp.compose.createHigherOrderComponent((BlockEdit) => {

	return (props) => {
		
		const { Fragment } = wp.element;
		
		const { InspectorAdvancedControls } = wp.blockEditor;
		
		const { isSelected } = props;
		
		const blocks_name = props.name;
		
		const block_type = ['uagb/buttons-child','uagb/faq-child', 'uagb/icon-list-child', 'uagb/social-share-child', 'uagb/restaurant-menu-child', 'wpforms/form-selector','formidable/simple-form','formidable/calculator','llms/lesson-navigation','llms/pricing-table','llms/course-syllabus','llms/instructors','core/archives','core/calendar','core/latest-comments','core/tag-cloud','core/rss','real-media-library/gallery'];
		return (
			<Fragment>
				<BlockEdit {...props} />
				{isSelected && ! block_type.includes(blocks_name) &&
					<InspectorAdvancedControls>
						<p className="components-base-control__help">{ __( "Below setting will only take effect once you are on the live page, and not while you're editing.", 'ultimate-addons-for-gutenberg' ) }</p> 
						{ UserConditionOptions( props ) }						
					</InspectorAdvancedControls>
				}
			</Fragment>
		);
	};
}, 'AdvancedControlsBlock');

const MasonryGallery = wp.compose.createHigherOrderComponent((BlockEdit) => {

	return (props) => {
		
		const { Fragment } = wp.element;
		const { attributes, setAttributes, isSelected } = props;
		const { InspectorAdvancedControls } = wp.blockEditor;
		const {
			ToggleControl
		} = wp.components;
		const blocks_name = props.name;
		const block_type = [ 'core/gallery' ];
		return (
			<Fragment>
				<BlockEdit {...props} />
				{isSelected && block_type.includes(blocks_name) &&
					<InspectorAdvancedControls>
						<hr />
						<p><strong>{ __( "Masonry Gallery", 'ultimate-addons-for-gutenberg' ) }</strong></p>
						<p className="components-base-control__help">{ __( "Below setting will only take effect once you are on the live page, and not while you're editing.", 'ultimate-addons-for-gutenberg' ) }</p> 
						<ToggleControl
							label={ __('Enable Masonry Layout')}
							checked={attributes.masonry}
							onChange={(value) => setAttributes({ masonry: !attributes.masonry })}
						/>
						<hr />			
					</InspectorAdvancedControls>
				}
			</Fragment>
		);
	};
}, 'MasonryGallery');

function ApplyExtraClass(extraProps, blockType, attributes) {

	const { 
		UAGHideDesktop,
		UAGHideTab,
		UAGHideMob,
		UAGDisplayConditions,
	} = attributes;

	if ( 'responsiveVisibility' === UAGDisplayConditions ) {
		if ( UAGHideDesktop ) {
			extraProps.className = extraProps.className + ' uag-hide-desktop';
		}
	
		if ( UAGHideTab ) {	
			extraProps.className = extraProps.className + ' uag-hide-tab';
		}
	
		if ( UAGHideMob ) {	
			extraProps.className = extraProps.className + ' uag-hide-mob';
		}
		
	}

	if ( 'core/gallery' === blockType.name && attributes.masonry ) {
		extraProps.className = extraProps.className + ' uag-masonry';
	}

	return extraProps;
}
wp.hooks.addFilter(
	'blocks.getSaveContent.extraProps',
	'uagb/apply-extra-class',
	ApplyExtraClass,
);
if ( enableMasonryGallery ) {
	wp.hooks.addFilter(
		'editor.BlockEdit',
		'uagb/masonry-gallery',
		MasonryGallery,
	);
}
if(enableConditions){
	wp.hooks.addFilter(
		'editor.BlockEdit',
		'uagb/advanced-control-block',
		AdvancedControlsBlock,
	);
}