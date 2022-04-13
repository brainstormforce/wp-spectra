import DisplayConditionsExtension from '@DashboardApp/pages/blocks/DisplayConditionsExtension';
import MasonryGalleryExtension from '@DashboardApp/pages/blocks/MasonryGalleryExtension';
import ResponsiveConditionsExtention from '@DashboardApp/pages/blocks/ResponsiveConditionsExtention';

const Extensions = () => {

    return (
       <>
			<ResponsiveConditionsExtention/>
            <DisplayConditionsExtension/>
            <MasonryGalleryExtension/>
       </>
    );
};

export default Extensions;
