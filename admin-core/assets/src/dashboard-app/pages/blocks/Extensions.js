import DisplayConditionsExtension from '@DashboardApp/pages/blocks/DisplayConditionsExtension';
import MasonryGalleryExtension from '@DashboardApp/pages/blocks/MasonryGalleryExtension';
import ResponsiveConditionsExtention from '@DashboardApp/pages/blocks/ResponsiveConditionsExtention';

const Extensions = () => {

    return (
       <>
            <DisplayConditionsExtension/>
            <MasonryGalleryExtension/>
			<ResponsiveConditionsExtention/>
       </>
    );
};

export default Extensions;
