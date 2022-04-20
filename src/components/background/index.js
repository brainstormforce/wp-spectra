import { __ } from '@wordpress/i18n';
import AdvancedPopColorControl from '@Components/color-control/advanced-pop-color-control.js';
import { SelectControl } from '@wordpress/components';
import styles from './editor.lazy.scss';
import GradientSettings from '@Components/gradient-settings';
import React, { useLayoutEffect } from 'react';
import UAGImage from '@Components/image';
import ResponsiveSlider from '@Components/responsive-slider';
import ResponsiveSelectControl from '@Components/responsive-select';
import { useDeviceType } from '@Controls/getPreviewType';
import ResponsiveUAGImage from '@Components/responsive-image';
import ResponsiveUAGFocalPointPicker from '@Components/responsive-focal-point-picker';

const Background = ( props ) => {
	// Add and remove the CSS on the drop and remove of the component.
	useLayoutEffect( () => {
		styles.use();
		return () => {
			styles.unuse();
		};
	}, [] );

	const deviceType = useDeviceType().toLowerCase();

	const {
		setAttributes,
		backgroundImageColor,
		overlayType,
		backgroundSize,
		backgroundRepeat,
		backgroundAttachment,
		backgroundPosition,
		backgroundImage,
		backgroundColor,
		backgroundVideoType,
		backgroundType,
		backgroundVideo,
		backgroundVideoColor,
		onOpacityChange,
		backgroundCustomSize,
		backgroundCustomSizeType,
		imageResponsive
	} = props;

	const onRemoveImage = () => {
		setAttributes( { [ backgroundImage.label ]: null } );
	};

	const onSelectImage = ( media ) => {
		if ( ! media || ! media.url ) {
			setAttributes( { [ backgroundImage.label ]: null } );
			return;
		}

		if ( ! media.type || 'image' !== media.type ) {
			return;
		}

		setAttributes( { [ backgroundImage.label ]: media } );
	};

	const onRemoveVideo = () => {
		setAttributes( { [ backgroundVideo.label ]: null } );
	};

	const onSelectVideo = ( media ) => {
		if ( ! media || ! media.url ) {
			setAttributes( { [ backgroundVideo.label ]: null } );
			return;
		}
		if ( ! media.type || 'video' !== media.type ) {
			return;
		}
		setAttributes( { [ backgroundVideo.label ]: media } );
	};

	let bgOptions = [];

	bgOptions = [
		{
			value: 'none',
			label: __( 'None', 'ultimate-addons-for-gutenberg' ),
		},
		{
			value: 'color',
			label: __( 'Color', 'ultimate-addons-for-gutenberg' ),
		},
		{
			value: 'gradient',
			label: __( 'Gradient', 'ultimate-addons-for-gutenberg' ),
		},
		{
			value: 'image',
			label: __( 'Image', 'ultimate-addons-for-gutenberg' ),
		},
	];

	let bgSizeOptions = [
		{
			value: 'auto',
			label: __(
				'Auto',
				'ultimate-addons-for-gutenberg'
			),
		},
		{
			value: 'cover',
			label: __(
				'Cover',
				'ultimate-addons-for-gutenberg'
			),
		},
		{
			value: 'contain',
			label: __(
				'Contain',
				'ultimate-addons-for-gutenberg'
			),
		},
		{
			value: 'custom',
			label: __(
				'Custom',
				'ultimate-addons-for-gutenberg'
			),
		},
	];

	if ( ! backgroundCustomSize ) {
		bgSizeOptions = [
			{
				value: 'auto',
				label: __(
					'Auto',
					'ultimate-addons-for-gutenberg'
				),
			},
			{
				value: 'cover',
				label: __(
					'Cover',
					'ultimate-addons-for-gutenberg'
				),
			},
			{
				value: 'contain',
				label: __(
					'Contain',
					'ultimate-addons-for-gutenberg'
				),
			},
		];
	}

	if ( backgroundVideoType.value ) {
		bgOptions.push( {
			value: 'video',
			label: __( 'Video', 'ultimate-addons-for-gutenberg' ),
		} );
	}

	const advancedControls = (
		<>
			<div className="uag-background-type">
				<SelectControl
					value={ backgroundType.value }
					onChange={ ( value ) =>
						setAttributes( { [ backgroundType.label ]: value } )
					}
					options={ bgOptions }
					label={ __( 'Type', 'ultimate-addons-for-gutenberg' ) }
				/>
			</div>
			{ 'color' === backgroundType.value && (
				<div className="uag-background-color">
					<AdvancedPopColorControl
						label={ __( 'Color', 'ultimate-addons-for-gutenberg' ) }
						colorValue={
							backgroundColor.value ? backgroundColor.value : ''
						}
						onColorChange={ ( value ) =>
							setAttributes( {
								[ backgroundColor.label ]: value,
							} )
						}
					/>
				</div>
			) }
			{ 'image' === backgroundType.value && (
				<div className="uag-background-image">
					{ ! imageResponsive &&
						<UAGImage
							onSelectImage={ onSelectImage }
							backgroundImage={ backgroundImage.value }
							onRemoveImage={ onRemoveImage }
						/>
					}
					{ ! imageResponsive && backgroundImage.value && (
						<>
							<div className="uag-background-image-position">
								<SelectControl
									label={ __(
										'Image Position',
										'ultimate-addons-for-gutenberg'
									) }
									value={ backgroundPosition.value }
									onChange={ ( value ) =>
										setAttributes( {
											[ backgroundPosition.label ]: value,
										} )
									}
									options={ [
										{
											value: 'left top',
											label: __(
												'Top Left',
												'ultimate-addons-for-gutenberg'
											),
										},
										{
											value: 'center top',
											label: __(
												'Top Center',
												'ultimate-addons-for-gutenberg'
											),
										},
										{
											value: 'right top',
											label: __(
												'Top Right',
												'ultimate-addons-for-gutenberg'
											),
										},
										{
											value: 'center top',
											label: __(
												'Center Top',
												'ultimate-addons-for-gutenberg'
											),
										},
										{
											value: 'center center',
											label: __(
												'Center Center',
												'ultimate-addons-for-gutenberg'
											),
										},
										{
											value: 'center bottom',
											label: __(
												'Center Bottom',
												'ultimate-addons-for-gutenberg'
											),
										},
										{
											value: 'left bottom',
											label: __(
												'Bottom Left',
												'ultimate-addons-for-gutenberg'
											),
										},
										{
											value: 'center bottom',
											label: __(
												'Bottom Center',
												'ultimate-addons-for-gutenberg'
											),
										},
										{
											value: 'right bottom',
											label: __(
												'Bottom Right',
												'ultimate-addons-for-gutenberg'
											),
										},
									] }
								/>
							</div>
							<div className="uag-background-image-attachment">
								<SelectControl
									label={ __(
										'Attachment',
										'ultimate-addons-for-gutenberg'
									) }
									value={ backgroundAttachment.value }
									onChange={ ( value ) =>
										setAttributes( {
											[ backgroundAttachment.label ]: value,
										} )
									}
									options={ [
										{
											value: 'fixed',
											label: __(
												'Fixed',
												'ultimate-addons-for-gutenberg'
											),
										},
										{
											value: 'scroll',
											label: __(
												'Scroll',
												'ultimate-addons-for-gutenberg'
											),
										},
									] }
								/>
							</div>
							<div className="uag-background-image-repeat">
								<SelectControl
									label={ __(
										'Repeat',
										'ultimate-addons-for-gutenberg'
									) }
									value={ backgroundRepeat.value }
									onChange={ ( value ) =>
										setAttributes( {
											[ backgroundRepeat.label ]: value,
										} )
									}
									options={ [
										{
											value: 'no-repeat',
											label: __(
												'No Repeat',
												'ultimate-addons-for-gutenberg'
											),
										},
										{
											value: 'repeat',
											label: __(
												'Repeat',
												'ultimate-addons-for-gutenberg'
											),
										},
										{
											value: 'repeat-x',
											label: __(
												'Repeat-x',
												'ultimate-addons-for-gutenberg'
											),
										},
										{
											value: 'repeat-y',
											label: __(
												'Repeat-y',
												'ultimate-addons-for-gutenberg'
											),
										},
									] }
								/>
							</div>
							<div className="uag-background-image-size">
								<SelectControl
									label={ __(
										'Size',
										'ultimate-addons-for-gutenberg'
									) }
									value={ backgroundSize.value }
									onChange={ ( value ) =>
										setAttributes( {
											[ backgroundSize.label ]: value,
										} )
									}
									options={ bgSizeOptions }
								/>
								{ 'custom' === backgroundSize.value && backgroundCustomSize &&
									<ResponsiveSlider
										label={ __(
											'Width',
											'ultimate-addons-for-gutenberg'
										) }
										data={ {
											desktop: {
												value: backgroundCustomSize.desktop.value,
												label: backgroundCustomSize.desktop.label,
											},
											tablet: {
												value: backgroundCustomSize.tablet.value,
												label: backgroundCustomSize.tablet.label,
											},
											mobile: {
												value: backgroundCustomSize.mobile.value,
												label: backgroundCustomSize.mobile.label,
											},
										} }
										min={ 0 }
										limitMax={ { 'px': 1600, '%': 100, 'em': 574 } }
										unit={ {
											value: backgroundCustomSizeType.value,
											label: backgroundCustomSizeType.label,
										} }
										units={ [
											{
												name: __(
													'PX',
													'ultimate-addons-for-gutenberg'
												),
												unitValue: 'px',
											},
											{
												name: __( '%', 'ultimate-addons-for-gutenberg' ),
												unitValue: '%',
											},
											{
												name: __( 'EM', 'ultimate-addons-for-gutenberg' ),
												unitValue: 'em',
											},
										] }
										setAttributes={ setAttributes }
									/>
								}
							</div>
						</>
					) }
					{ imageResponsive && backgroundImage &&
						<ResponsiveUAGImage
							backgroundImage={backgroundImage}
							setAttributes={setAttributes}
						/>
					}
					{ imageResponsive && backgroundImage[deviceType] && backgroundImage[deviceType]?.value && (
						<>
							<div className="uag-background-image-position">
								<ResponsiveUAGFocalPointPicker
									backgroundPosition={backgroundPosition}
									setAttributes={ setAttributes }
									backgroundImage={backgroundImage}
								/>
							</div>
							<div className="uag-background-image-attachment">
								<ResponsiveSelectControl
									label={ __( 'Attachment', 'ultimate-addons-for-gutenberg' ) }
									data={backgroundAttachment}
									options={ { desktop: [
										{
											value: 'fixed',
											label: __(
												'Fixed',
												'ultimate-addons-for-gutenberg'
											),
										},
										{
											value: 'scroll',
											label: __(
												'Scroll',
												'ultimate-addons-for-gutenberg'
											),
										},
									] } }
									setAttributes={ setAttributes }
								/>
							</div>
							<div className="uag-background-image-repeat">
								<ResponsiveSelectControl
									label={ __( 'Repeat', 'ultimate-addons-for-gutenberg' ) }
									data={backgroundRepeat}
									options={ { desktop: [
										{
											value: 'no-repeat',
											label: __(
												'No Repeat',
												'ultimate-addons-for-gutenberg'
											),
										},
										{
											value: 'repeat',
											label: __(
												'Repeat',
												'ultimate-addons-for-gutenberg'
											),
										},
										{
											value: 'repeat-x',
											label: __(
												'Repeat-x',
												'ultimate-addons-for-gutenberg'
											),
										},
										{
											value: 'repeat-y',
											label: __(
												'Repeat-y',
												'ultimate-addons-for-gutenberg'
											),
										},
									] } }
									setAttributes={ setAttributes }
								/>
							</div>
							<div className="uag-background-image-size">
								<ResponsiveSelectControl
									label={ __( 'Size', 'ultimate-addons-for-gutenberg' ) }
									data={backgroundSize}
									options={ { desktop: [
										{
											value: 'auto',
											label: __(
												'Auto',
												'ultimate-addons-for-gutenberg'
											),
										},
										{
											value: 'cover',
											label: __(
												'Cover',
												'ultimate-addons-for-gutenberg'
											),
										},
										{
											value: 'contain',
											label: __(
												'Contain',
												'ultimate-addons-for-gutenberg'
											),
										},
										{
											value: 'custom',
											label: __(
												'Custom',
												'ultimate-addons-for-gutenberg'
											),
										},
									] } }
									setAttributes={ setAttributes }
								/>
								{ 'custom' === backgroundSize[deviceType].value && backgroundCustomSize &&
									<ResponsiveSlider
										label={ __(
											'Width',
											'ultimate-addons-for-gutenberg'
										) }
										data={ backgroundCustomSize }
										min={ 0 }
										limitMax={ { 'px': 1600, '%': 100, 'em': 574 } }
										unit={ {
											value: backgroundCustomSizeType.value,
											label: backgroundCustomSizeType.label,
										} }
										units={ [
											{
												name: __(
													'PX',
													'ultimate-addons-for-gutenberg'
												),
												unitValue: 'px',
											},
											{
												name: __( '%', 'ultimate-addons-for-gutenberg' ),
												unitValue: '%',
											},
											{
												name: __( 'EM', 'ultimate-addons-for-gutenberg' ),
												unitValue: 'em',
											},
										] }
										setAttributes={ setAttributes }
									/>
								}
							</div>
						</>
					) }
					{ overlayType && backgroundImage &&
						<>
							<div className="uag-background-image-overlay-type">
								<SelectControl
									label={ __(
										'Overlay Type',
										'ultimate-addons-for-gutenberg'
									) }
									value={ overlayType.value }
									onChange={ ( value ) =>
										setAttributes( {
											[ overlayType.label ]: value,
										} )
									}
									options={ [
										{
											value: 'color',
											label: __(
												'Color',
												'ultimate-addons-for-gutenberg'
											),
										},
										{
											value: 'gradient',
											label: __(
												'Gradient',
												'ultimate-addons-for-gutenberg'
											),
										},
										{
											value: 'none',
											label: __(
												'None',
												'ultimate-addons-for-gutenberg'
											),
										},
									] }
								/>
							</div>
							{ 'color' === overlayType.value && (
								<div className="uag-background-image-overlay-color">
									<AdvancedPopColorControl
										label={ __(
											'Image Overlay Color',
											'ultimate-addons-for-gutenberg'
										) }
										colorValue={
											backgroundImageColor.value
										}
										onColorChange={ ( value ) =>
											setAttributes( {
												[ backgroundImageColor.label ]: value,
											} )
										}
									/>
								</div>
							) }
							{ 'gradient' === overlayType.value && (
								<div className="uag-background-image-overlay-gradient">
									<GradientSettings
										backgroundGradient={
											props.backgroundGradient
										}
										setAttributes={ setAttributes }
									/>
								</div>
							) }
						</>
					}
				</div>
			) }
			{ 'gradient' === backgroundType.value && (
				<div className="uag-background-gradient">
					<GradientSettings
						backgroundGradient={ props.backgroundGradient }
						setAttributes={ props.setAttributes }
					/>
				</div>
			) }
			{ 'video' === backgroundType.value && backgroundVideoType.value && (
				<div className="uag-background-video">
					<UAGImage
						onSelectImage={ onSelectVideo }
						backgroundImage={ backgroundVideo.value }
						onRemoveImage={ onRemoveVideo }
						showVideoInput={ true }
					/>
				</div>
			) }
			{ 'video' === backgroundType.value &&
				backgroundVideo.value &&
				backgroundVideoType.value && (
					<div className="uag-background-video-overlay">
						{ overlayType && backgroundVideo &&
							<>
								<div className="uag-background-image-overlay-type">
									<SelectControl
										label={ __(
											'Overlay Type',
											'ultimate-addons-for-gutenberg'
										) }
										value={ overlayType.value }
										onChange={ ( value ) =>
											setAttributes( {
												[ overlayType.label ]: value,
											} )
										}
										options={ [
											{
												value: 'color',
												label: __(
													'Color',
													'ultimate-addons-for-gutenberg'
												),
											},
											{
												value: 'gradient',
												label: __(
													'Gradient',
													'ultimate-addons-for-gutenberg'
												),
											},
											{
												value: 'none',
												label: __(
													'None',
													'ultimate-addons-for-gutenberg'
												),
											},
										] }
									/>
								</div>
								{ 'color' === overlayType.value && (
									<div className="uag-background-image-overlay-color">
										<AdvancedPopColorControl
											label={ __(
												'Image Overlay Color',
												'ultimate-addons-for-gutenberg'
											) }
											colorValue={
												backgroundVideoColor.value
											}
											onColorChange={ ( value ) =>
												setAttributes( {
													[ backgroundVideoColor.label ]: value,
												} )
											}
											onOpacityChange={onOpacityChange}
										/>
									</div>
								) }
								{ 'gradient' === overlayType.value && (
									<div className="uag-background-image-overlay-gradient">
										<GradientSettings
											backgroundGradient={
												props.backgroundGradient
											}
											setAttributes={ setAttributes }
										/>
									</div>
								) }
							</>
						}
					</div>
				) }
		</>
	);

	return (
		<div className="uag-bg-select-control components-base-control">
			{ advancedControls }
		</div>
	);
};

export default Background;
