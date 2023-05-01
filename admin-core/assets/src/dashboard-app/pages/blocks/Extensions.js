import DisplayConditionsExtension from '@DashboardApp/pages/blocks/DisplayConditionsExtension';
import MasonryGalleryExtension from '@DashboardApp/pages/blocks/MasonryGalleryExtension';
import ResponsiveConditionsExtention from '@DashboardApp/pages/blocks/ResponsiveConditionsExtention';
import AnimationsExtension from '@DashboardApp/pages/blocks/AnimationsExtension';
import DynamicContentExtension from '@DashboardApp/pages/blocks/DynamicContentExtension';

const Extensions = ( { currentTab } ) => {
	// All extensions should be sorted in Alphabetical Order of their labels.
	// Render all Extensions when required, render Pro Extensions on the Pro Tab.
	if ( 'extensions' === currentTab || 'all' === currentTab ) {
		return (
			<>
				<AnimationsExtension/>
				<DisplayConditionsExtension/>
				<DynamicContentExtension/>
				<MasonryGalleryExtension/>
				<ResponsiveConditionsExtention/>
			</>
		);
	} else if ( 'pro' === currentTab ) {
		return (
			<>
				<DynamicContentExtension/>
			</>
		);
	}
	return null;
};

export default Extensions;
