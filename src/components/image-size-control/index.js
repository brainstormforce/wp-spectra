import { useLayoutEffect, useEffect, useState, useRef } from '@wordpress/element';
import ResponsiveSelectControl from '@Components/responsive-select';
import { __ } from '@wordpress/i18n';
import styles from './editor.lazy.scss';
import { useDeviceType } from '@Controls/getPreviewType';
import { select } from '@wordpress/data';
import { getPanelIdFromRef } from '@Utils/Helpers';
import ResponsiveToggle from '../responsive-toggle';
import UAGNumberControl from '@Components/number-control';
import useDimensionHandler from './use-dimension-handler';

export default function ImageSizeControl( {
	imageWidth,
	imageHeight,
	imageSizeOptions = [],
	isResizable = true,
	data,
	width,
	widthTablet,
	widthMobile,
	height,
	heightTablet,
	heightMobile,
	setAttributes,
	onChange,
	help,
} ) {

	const [panelNameForHook, setPanelNameForHook] = useState( null );
	const panelRef = useRef( null );

	// Add and remove the CSS on the drop and remove of the component.
	useLayoutEffect( () => {
		styles.use();
		return () => {
			styles.unuse();
		};
	}, [] );

	const { getSelectedBlock } = select( 'core/block-editor' );

	const blockNameForHook = getSelectedBlock()?.name.split( '/' ).pop(); // eslint-disable-line @wordpress/no-unused-vars-before-return
	useEffect( () => {
		setPanelNameForHook( getPanelIdFromRef( panelRef ) )
	}, [blockNameForHook] )

	const deviceType = useDeviceType();
	const responsive = true;

	let deviceHeight;
	let deviceWidth;

	switch ( deviceType ) {
		case 'Tablet':
			deviceHeight = heightTablet;
			deviceWidth = widthTablet;
			break;
		case 'Mobile':
			deviceHeight = heightMobile;
			deviceWidth = widthMobile;
			break;
		default:
			deviceHeight = height;
			deviceWidth = width;
	}

	const {
		currentHeight,
		currentWidth,
		updateDimension,
	} = useDimensionHandler( deviceHeight, deviceWidth, imageHeight, imageWidth, onChange );

	const output = {}
	output.Desktop = (
		<>
			<UAGNumberControl
				label={ __( 'Width', 'ultimate-addons-for-gutenberg' ) }
				value={ currentWidth }
				data={ {
					value: width,
					label: 'width',
				} }
				displayUnit={ false }
				setAttributes={ setAttributes }
				min={ Infinity }
				step={ 1 }
				max={ -Infinity }
				showControlHeader={ false }
				onChange={ ( value ) =>
					updateDimension( 'width', value )
				}
			/>
			<UAGNumberControl
				label={ __( 'Height', 'ultimate-addons-for-gutenberg' ) }
				value={ currentHeight }
				data={ {
					value: height,
					label: 'height',
				} }
				displayUnit={ false }
				setAttributes={ setAttributes }
				min={ Infinity }
				step={ 1 }
				max={ -Infinity }
				showControlHeader={ false }
				onChange={ ( value ) => {
					updateDimension( 'height', value )
					if ( ! isNaN( value ) && '' !== value ) {
						setAttributes( { customHeightSetDesktop: true } );
					} else {
						setAttributes( { customHeightSetDesktop: false } );
					}
				} }
			/>
		</>
	);

	output.Tablet = (
		<>
			<UAGNumberControl
				label={ __( 'Width', 'ultimate-addons-for-gutenberg' ) }
				value={ currentWidth }
				data={ {
					value: widthTablet,
					label: 'widthTablet',
				} }
				displayUnit={ false }
				setAttributes={ setAttributes }
				min={ Infinity }
				step={ 1 }
				max={ -Infinity }
				showControlHeader={ false }
				onChange={ ( value ) =>
					updateDimension( 'widthTablet', value )
				}
			/>
			<UAGNumberControl
				label={ __( 'Height', 'ultimate-addons-for-gutenberg' ) }
				value={ currentHeight }
				data={ {
					value: heightTablet,
					label: 'heightTablet',
				} }
				displayUnit={ false }
				setAttributes={ setAttributes }
				min={ Infinity }
				step={ 1 }
				max={ -Infinity }
				showControlHeader={ false }
				onChange={ ( value ) => {
					updateDimension( 'heightTablet', value )
					if ( ! isNaN( value ) && '' !== value ) {
						setAttributes( { customHeightSetTablet: true } );
					} else {
						setAttributes( { customHeightSetTablet: false } );
					}
				}}
			/>
		</>
	);

	output.Mobile = (
		<>
			<UAGNumberControl
				label={ __( 'Width', 'ultimate-addons-for-gutenberg' ) }
				value={ currentWidth }
				data={ {
					value: widthMobile,
					label: 'widthMobile',
				} }
				displayUnit={ false }
				setAttributes={ setAttributes }
				min={ Infinity }
				step={ 1 }
				max={ -Infinity }
				showControlHeader={ false }
				onChange={ ( value ) =>
					updateDimension( 'widthMobile', value )
				}
			/>
			<UAGNumberControl
				label={ __( 'Height', 'ultimate-addons-for-gutenberg' ) }
				value={ currentHeight }
				data={ {
					value: heightMobile,
					label: 'heightMobile',
				} }
				displayUnit={ false }
				setAttributes={ setAttributes }
				min={ Infinity }
				step={ 1 }
				max={ -Infinity }
				showControlHeader={ false }
				onChange={ ( value ) => {
					updateDimension( 'heightMobile', value )
					if ( ! isNaN( value ) && '' !== value ) {
						setAttributes( { customHeightSetMobile: true } );
					} else {
						setAttributes( { customHeightSetMobile: false } );
					}
				}}
			/>
		</>
	);


	const controlName = 'image-size'; // This components have no label props that's why added hard coded label
	const controlBeforeDomElement = wp.hooks.applyFilters( `spectra.${blockNameForHook}.${panelNameForHook}.${controlName}.before`, '', blockNameForHook );
	const controlAfterDomElement = wp.hooks.applyFilters( `spectra.${blockNameForHook}.${panelNameForHook}.${controlName}`, '', blockNameForHook );


	return (
		<div
			ref={panelRef}
			className="components-base-control"
		>
			{
				controlBeforeDomElement
			}
			{ imageSizeOptions.length !== 0 && (
				<ResponsiveSelectControl
					label={ __( 'Image Size', 'ultimate-addons-for-gutenberg' ) }
					options={ {
						desktop: imageSizeOptions,
						tablet: imageSizeOptions,
						mobile: imageSizeOptions,
					} }
					data={ {
						desktop: {
							label: data.sizeSlug.label,
							value: data.sizeSlug.value,
						},
						tablet: {
							label: data.sizeSlugTablet.label,
							value: data.sizeSlugTablet.value,
						},
						mobile: {
							label: data.sizeSlugMobile.label,
							value: data.sizeSlugMobile.value,
						},
					} }
					setAttributes={ setAttributes }
				/>
			) }
			{ isResizable && (
				<div className="block-editor-image-size-control">
					<div className='uagb-size-type-field-tabs'>
						<div className='uagb-control__header'>
							<ResponsiveToggle
								label= { __( 'Image Dimensions' )  }
								responsive= { responsive }
							/>
						</div>
						<div className="block-editor-image-size-control__row">
							{output[deviceType]}
						</div>
					</div>
					{ help && (
						<p className="components-base-control__help">{ help }</p>
					) }
				</div>
			) }
			{
				controlAfterDomElement
			}
		</div>
	);
}
