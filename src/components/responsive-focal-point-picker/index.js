/**
 * External dependencies
 */
 import React from 'react';
 import { useDeviceType } from '@Controls/getPreviewType';
 import ResponsiveToggle from '../responsive-toggle';
 import { __ } from '@wordpress/i18n';
 import { FocalPointPicker } from '@wordpress/components';

 const ResponsiveUAGFocalPointPicker = ( props ) => {

	const { backgroundPosition, backgroundImage, setAttributes } = props;

	const responsive = true;

	const deviceType = useDeviceType();
	const device = deviceType.toLowerCase();

	const output = {};
	const url = backgroundImage[device]?.value?.url;
	const value = backgroundPosition[device]?.value;

	 output.Desktop = (
		<FocalPointPicker
			url={ url }
			value={ value }
			onChange={ ( focalPoint ) => {
				setAttributes( { [ backgroundPosition[device]?.label ]: focalPoint } );
			} }
		/>
	 );
	 output.Tablet = (
		<FocalPointPicker
			url={ url }
			value={ value }
			onChange={ ( focalPoint ) => {
				setAttributes( { [ backgroundPosition[device]?.label ]: focalPoint } );
			} }
		/>
	 );
	 output.Mobile = (
		<FocalPointPicker
			url={ url }
			value={ value }
			onChange={ ( focalPoint ) => {
				setAttributes( { [ backgroundPosition[device]?.label ]: focalPoint } );
			} }
		/>
	 );

	 return (
		 <div className="components-base-control uagb-responsive-select-control">
			 <div className="uagb-size-type-field-tabs">
				 <div className="uagb-control__header">
					 <ResponsiveToggle
						 label= { __( 'Position', 'ultimate-addons-for-gutenberg' ) }
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
