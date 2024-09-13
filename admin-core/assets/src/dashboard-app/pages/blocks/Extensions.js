import DisplayConditionsExtension from '@DashboardApp/pages/blocks/DisplayConditionsExtension';
import MasonryGalleryExtension from '@DashboardApp/pages/blocks/MasonryGalleryExtension';
import ResponsiveConditionsExtention from '@DashboardApp/pages/blocks/ResponsiveConditionsExtention';
import AnimationsExtension from '@DashboardApp/pages/blocks/AnimationsExtension';
import DynamicContentExtension from '@DashboardApp/pages/blocks/DynamicContentExtension';
import GlobalBlockStyleExtension from '@DashboardApp/pages/blocks/GlobalBlockStyleExtension';

const Extensions = () => {
	// All extensions should be sorted in Alphabetical Order of their labels.
		return (
			<>
				<AnimationsExtension/>
				<DisplayConditionsExtension/>
				{ 'active' === uag_react.pro_plugin_status && (
					<> 
						<DynamicContentExtension/>
						<GlobalBlockStyleExtension/> 
					</>
				) }
				<MasonryGalleryExtension/>
				<ResponsiveConditionsExtention/>
			</>
		);
};

export default Extensions;
