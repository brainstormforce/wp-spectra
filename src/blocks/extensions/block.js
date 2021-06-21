import './masonry-gallery';
import './condition-block';

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
