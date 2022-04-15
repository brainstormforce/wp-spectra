/**
 * External dependencies
 */
 import React from 'react';
 import { useDeviceType } from '@Controls/getPreviewType';
 import ResponsiveToggle from '../responsive-toggle';
 import UAGImage from '@Components/image';
 import { __ } from '@wordpress/i18n';
 import { FocalPointPicker } from '@wordpress/components';

 const ResponsiveUAGFocalPointPicker = ( props ) => {
	 const { backgroundPosition, setAttributes } = props;

	 const responsive = true;

	 const deviceType = useDeviceType();
	 const device = deviceType.toLowerCase();

	 const output = {};
	 output.Desktop = (
		<UAGImage
			onSelectImage={ onSelectImage }
			backgroundImage={ backgroundImage.desktop.value }
			onRemoveImage={ onRemoveImage }
			label={false}
		/>
	 );
	 output.Tablet = (
		<UAGImage
			onSelectImage={ onSelectImage }
			backgroundImage={ backgroundImage.tablet.value }
			onRemoveImage={ onRemoveImage }
			label={false}
		/>
	 );
	 output.Mobile = (
		<UAGImage
			onSelectImage={ onSelectImage }
			backgroundImage={ backgroundImage.mobile.value }
			onRemoveImage={ onRemoveImage }
			label={false}
		/>
	 );

	 return (
		 <div className="components-base-control uagb-responsive-select-control">
			 <div className="uagb-size-type-field-tabs">
				 <div className="uagb-control__header">
					 <ResponsiveToggle
						 label= { __( 'Image', 'ultimate-addons-for-gutenberg' ) }
						 responsive= { responsive }
					 />
				 </div>
				 { output[ deviceType ] ? output[ deviceType ] : output.Desktop }
			 </div>
			 { props.help && (
				 <p className="uag-control-help-notice">{ props.help }</p>
			 ) }
		 </div>
	 );
 };

 export default ResponsiveUAGFocalPointPicker;
