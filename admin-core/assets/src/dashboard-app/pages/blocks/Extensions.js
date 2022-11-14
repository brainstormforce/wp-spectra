import DisplayConditionsExtension from '@DashboardApp/pages/blocks/DisplayConditionsExtension';
import MasonryGalleryExtension from '@DashboardApp/pages/blocks/MasonryGalleryExtension';
import ResponsiveConditionsExtention from '@DashboardApp/pages/blocks/ResponsiveConditionsExtention';
import DynamicContentExtension from '@DashboardApp/pages/blocks/DynamicContentExtension';

const Extensions = () => {

    return (
       <>
			<ResponsiveConditionsExtention/>
            <DisplayConditionsExtension/>
            <MasonryGalleryExtension/>
			<DynamicContentExtension />
       </>
    );
};

export default Extensions;
