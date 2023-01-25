import React, { useLayoutEffect } from 'react';
import ResponsiveSelectControl from '@Components/responsive-select';
import { __ } from '@wordpress/i18n';
import styles from './editor.lazy.scss';
import { useDeviceType } from '@Controls/getPreviewType';
import ResponsiveToggle from '../responsive-toggle';
import UAGNumberControl from '@Components/number-control';

export default function ImageSizeControl( {
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

	const output = {}
	output.Desktop = (
		<>
			<UAGNumberControl
				label={ __( 'Width', 'ultimate-addons-for-gutenberg' ) }
				value={ width }
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
				inlineControl={ false }
			/>
			<UAGNumberControl
				label={ __( 'Height', 'ultimate-addons-for-gutenberg' ) }
				value={ height }
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
				inlineControl={ false }
			/>
		</>
	);

	output.Tablet = (
		<>
			<UAGNumberControl
				label={ __( 'Width', 'ultimate-addons-for-gutenberg' ) }
				value={ widthTablet }
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
			/>
			<UAGNumberControl
				label={ __( 'Height', 'ultimate-addons-for-gutenberg' ) }
				value={ heightTablet }
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
			/>
		</>
	);

	output.Mobile = (
		<>
			<UAGNumberControl
				label={ __( 'Width', 'ultimate-addons-for-gutenberg' ) }
				value={ widthMobile }
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
			/>
			<UAGNumberControl
				label={ __( 'Height', 'ultimate-addons-for-gutenberg' ) }
				value={ heightMobile }
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
			/>
		</>
	);

	return (
		<>
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
		</>
	);
}
