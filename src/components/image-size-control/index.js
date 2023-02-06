import React, { useLayoutEffect, useEffect, useState, useRef } from 'react';
import {
	TextControl,
} from '@wordpress/components';
import ResponsiveSelectControl from '@Components/responsive-select';
import { __ } from '@wordpress/i18n';
import styles from './editor.lazy.scss';
import useDimensionHandler from './use-dimension-handler';
import { useDeviceType } from '@Controls/getPreviewType';
import { select } from '@wordpress/data';
import { getPanelIdFromRef } from '@Utils/Helpers';
import ResponsiveToggle from '../responsive-toggle';

export default function ImageSizeControl( {
	imageWidth,
	imageHeight,
	imageSizeOptions = [],
	isResizable = true,
	sizeSlug,
	sizeSlugTablet,
	sizeSlugMobile,
	width,
	widthTablet,
	widthMobile,
	height,
	heightTablet,
	heightMobile,
	setAttributes,
	onChange,
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
			<TextControl
				type="number"
				className="block-editor-image-size-control__width"
				label={ __( 'Width' ) }
				value={ currentWidth }
				min={ 1 }
				onChange={ ( value ) =>
					updateDimension( 'width', value )
				}
			/>
			<TextControl
				type="number"
				className="block-editor-image-size-control__height"
				label={ __( 'Height' ) }
				value={ currentHeight }
				min={ 1 }
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
			<TextControl
				type="number"
				className="block-editor-image-size-control__width"
				label={ __( 'Width' ) }
				value={ currentWidth }
				min={ 1 }
				onChange={ ( value ) =>
					updateDimension( 'widthTablet', value )
				}
			/>
			<TextControl
				type="number"
				className="block-editor-image-size-control__height"
				label={ __( 'Height' ) }
				value={ currentHeight }
				min={ 1 }
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
			<TextControl
				type="number"
				className="block-editor-image-size-control__width"
				label={ __( 'Width' ) }
				value={ currentWidth }
				min={ 1 }
				onChange={ ( value ) =>
					updateDimension( 'widthMobile', value )
				}
			/>
			<TextControl
				type="number"
				className="block-editor-image-size-control__height"
				label={ __( 'Height' ) }
				value={ currentHeight }
				min={ 1 }
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
							value: sizeSlug,
							label: 'sizeSlug'
						},
						tablet: {
							value: sizeSlugTablet,
							label: 'sizeSlugTablet'
						},
						mobile: {
							value: sizeSlugMobile,
							label: 'sizeSlugMobile'
						},
					} }
					setAttributes={ setAttributes }
				/>
			) }
			{ isResizable && (
				<div className="components-base-control block-editor-image-size-control">
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
				</div>
			) }
			{
				controlAfterDomElement
			}
		</div>
	);
}
