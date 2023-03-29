/**
 * External dependencies
 */
import { useEffect, useState,useRef } from '@wordpress/element';
import { getPanelIdFromRef } from '@Utils/Helpers';
 import { useDeviceType } from '@Controls/getPreviewType';
 import ResponsiveToggle from '../responsive-toggle';
 import UAGMediaPicker from '@Components/image';
 import { select } from '@wordpress/data';
 import { __ } from '@wordpress/i18n';
 import UAGHelpText from '@Components/help-text';
 import { applyFilters } from '@wordpress/hooks';

const ResponsiveUAGImage = ( props ) => {
	const [panelNameForHook, setPanelNameForHook] = useState( null );
	const panelRef = useRef( null );
	const { backgroundImage, setAttributes, help = false } = props;
	const { getSelectedBlock } = select( 'core/block-editor' );

	const blockNameForHook = getSelectedBlock()?.name.split( '/' ).pop(); // eslint-disable-line @wordpress/no-unused-vars-before-return
	useEffect( () => {
		setPanelNameForHook( getPanelIdFromRef( panelRef ) )
	}, [blockNameForHook] )

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
		<UAGMediaPicker
			onSelectImage={ onSelectImage }
			backgroundImage={ backgroundImage.desktop.value }
			onRemoveImage={ onRemoveImage }
			disableLabel={ true }
		/>
	 );
	 output.Tablet = (
		<UAGMediaPicker
			onSelectImage={ onSelectImage }
			backgroundImage={ backgroundImage.tablet.value }
			onRemoveImage={ onRemoveImage }
			disableLabel={ true }
		/>
	 );
	 output.Mobile = (
		<UAGMediaPicker
			onSelectImage={ onSelectImage }
			backgroundImage={ backgroundImage.mobile.value }
			onRemoveImage={ onRemoveImage }
			disableLabel={ true }
		/>
	 );


	 const controlName = 'image'; // there is no label props that's why keep hard coded label
	 const controlBeforeDomElement = applyFilters( `spectra.${blockNameForHook}.${panelNameForHook}.${controlName}.before`, '', blockNameForHook );
	 const controlAfterDomElement = applyFilters( `spectra.${blockNameForHook}.${panelNameForHook}.${controlName}`, '', blockNameForHook );

	 return (
		<div
			ref={panelRef}
			className="components-base-control"
		>
			{
				controlBeforeDomElement
			}
			<div className="uag-responsive-image-select uagb-responsive-select-control">
				<div className="uagb-size-type-field-tabs">
					<div className="uagb-control__header">
						<ResponsiveToggle
							label= { __( 'Image', 'ultimate-addons-for-gutenberg' ) }
							responsive= { responsive }
						/>
					</div>
					{ output[ deviceType ] ? output[ deviceType ] : output.Desktop }
				</div>
				<UAGHelpText text={ help } />
			</div>
			{
				controlAfterDomElement
			}
		</div>
	 );
 };

 export default ResponsiveUAGImage;
