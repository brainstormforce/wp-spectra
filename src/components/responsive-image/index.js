/**
 * External dependencies
 */
 import React from 'react';
 import { useDeviceType } from '@Controls/getPreviewType';
 import ResponsiveToggle from '../responsive-toggle';
 import UAGImage from '@Components/image';
 import { __ } from '@wordpress/i18n';

 const ResponsiveUAGImage = ( props ) => {
	 const { backgroundImage, setAttributes } = props;

	 const responsive = true;

	 const deviceType = useDeviceType();
	 const device = deviceType.toLowerCase();

	 /*
	 * Event to set Image as while adding.
	 */
	const onSelectImage = ( media ) => {

		if ( ! media || ! media.url ) {
			setAttributes( { [backgroundImage[device].label]: null } );
			return;
		}

		if ( ! media.type || 'image' !== media.type ) {
			setAttributes( { [backgroundImage[device].label]: null } );
			return;
		}

		setAttributes( { [backgroundImage[device].label]: media } );
	};

	/*
	 * Event to set Image as null while removing.
	 */
	const onRemoveImage = () => {
		setAttributes( { [backgroundImage[device].label]: '' } );
	};

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
		 <div className="uag-responsive-image-select components-base-control uagb-responsive-select-control">
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

 export default ResponsiveUAGImage;
