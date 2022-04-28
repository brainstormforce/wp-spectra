import React, { useLayoutEffect } from 'react';
import {
	Button,
	ButtonGroup,
	SelectControl,
	TextControl,
} from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import styles from './editor.lazy.scss';
import useDimensionHandler from './use-dimension-handler';
import { useDeviceType } from '@Controls/getPreviewType';
import ResponsiveToggle from '../responsive-toggle';

const IMAGE_SIZE_PRESETS = [ 25, 50, 75, 100 ];

export default function ImageSizeControl( {
	imageWidth,
	imageHeight,
	imageSizeOptions = [],
	isResizable = true,
	slug,
	width,
	widthTablet,
	widthMobile,
	height,
	heightTablet,
	heightMobile,
	setAttributes,
	onChange,
	onChangeImage,
} ) {

	// Add and remove the CSS on the drop and remove of the component.
	useLayoutEffect( () => {
		styles.use();
		return () => {
			styles.unuse();
		};
	}, [] );

	const deviceType = useDeviceType();
	const responsive = true;

	const {
		currentHeight,
		currentWidth,
		updateDimension,
		updateDimensions,
	} = useDimensionHandler( height, width, imageHeight, imageWidth, onChange );

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
				onChange={ ( value ) =>
					updateDimension( 'height', value )
				}
			/>
		</>
	);

	output.Tablet = (
		<>
			<TextControl
				type="number"
				className="block-editor-image-size-control__width"
				label={ __( 'Width' ) }
				value={ widthTablet }
				min={ 1 }
				onChange={ ( value ) =>
					setAttributes( { widthTablet: value} )
				}
			/>
			<TextControl
				type="number"
				className="block-editor-image-size-control__height"
				label={ __( 'Height' ) }
				value={ heightTablet }
				min={ 1 }
				onChange={ ( value ) =>
					setAttributes( { heightTablet: value} )
				}
			/>
		</>
	);

	output.Mobile = (
		<>
			<TextControl
				type="number"
				className="block-editor-image-size-control__width"
				label={ __( 'Width' ) }
				value={ widthMobile }
				min={ 1 }
				onChange={ ( value ) =>
					setAttributes( { widthMobile: value} )
				}
			/>
			<TextControl
				type="number"
				className="block-editor-image-size-control__height"
				label={ __( 'Height' ) }
				value={ heightMobile }
				min={ 1 }
				onChange={ ( value ) =>
					setAttributes( { heightMobile: value} )
				}
			/>
		</>
	);

	const imageSizePresetHandler = (scaledHeight, scaledWidth) => {
		if(deviceType === 'Tablet'){
			setAttributes( { widthTablet: scaledWidth, heightTablet: scaledHeight} )
		} else if(deviceType === 'Mobile'){
			setAttributes( { widthMobile: scaledWidth, heightMobile: scaledHeight} )
		} else {
			updateDimensions(
				scaledHeight,
				scaledWidth
			)
		}
	}

	return (
		<>
			{ imageSizeOptions.length !== 0 && (
				<SelectControl
					label={ __( 'Image size' ) }
					value={ slug }
					options={ imageSizeOptions }
					onChange={ onChangeImage }
				/>
			) }
			{ isResizable && (
				<div className="components-base-control block-editor-image-size-control">
					<div className='uagb-size-type-field-tabs'>
						<div className='uagb-control__header'>
							<ResponsiveToggle
								label= { __( 'Image dimensions' )  }
								responsive= { responsive }
							/>
						</div>
						<div className="block-editor-image-size-control__row">
							{output[deviceType]}
						</div>
						<div className="block-editor-image-size-control__row">
							<ButtonGroup aria-label={ __( 'Image size presets' ) }>
								{ IMAGE_SIZE_PRESETS.map( ( scale ) => {
									const scaledWidth = Math.round(
										imageWidth * ( scale / 100 )
									);
									const scaledHeight = Math.round(
										imageHeight * ( scale / 100 )
									);

									const isCurrent =
										currentWidth === scaledWidth &&
										currentHeight === scaledHeight;

									return (
										<Button
											key={ scale }
											isSmall
											variant={
												isCurrent ? 'primary' : undefined
											}
											isPressed={ isCurrent }
											onClick={ () => imageSizePresetHandler(scaledHeight,scaledWidth)}
										>
											{ scale }%
										</Button>
									);
								} ) }
							</ButtonGroup>
							<Button isSmall onClick={ () => updateDimensions() }>
								<span className="dashicon dashicons dashicons-image-rotate"></span>
							</Button>
						</div>
					</div>
				</div>
			) }
		</>
	);
}
