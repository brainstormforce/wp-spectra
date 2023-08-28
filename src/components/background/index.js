import { __ } from '@wordpress/i18n';
import AdvancedPopColorControl from '@Components/color-control/advanced-pop-color-control.js';
import { SelectControl } from '@wordpress/components';
import styles from './editor.lazy.scss';
import GradientSettings from '@Components/gradient-settings';
import { useEffect, useState, useRef, useLayoutEffect } from '@wordpress/element';
import UAGMediaPicker from '@Components/image';
import ResponsiveSlider from '@Components/responsive-slider';
import ResponsiveSelectControl from '@Components/responsive-select';
import { useDeviceType } from '@Controls/getPreviewType';
import ResponsiveUAGImage from '@Components/responsive-image';
import ResponsiveUAGFocalPointPicker from '@Components/responsive-focal-point-picker';
import MultiButtonsControl from '@Components/multi-buttons-control';
import UAGB_Block_Icons from '@Controls/block-icons';
import { getPanelIdFromRef } from '@Utils/Helpers';
import { select } from '@wordpress/data';
import UAGHelpText from '@Components/help-text';
import { applyFilters } from '@wordpress/hooks';
import Range from '@Components/range/Range';
import Separator from '@Components/separator';

const Background = ( props ) => {
	const { getSelectedBlock } = select( 'core/block-editor' );
	const [ panelNameForHook, setPanelNameForHook ] = useState( null );
	const panelRef = useRef( null );

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
		overlayType,
		overlayOpacity,
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
		imageResponsive,
		gradientOverlay,
		customPosition,
		xPositionDesktop,
		xPositionTablet,
		xPositionMobile,
		xPositionType,
		xPositionTypeTablet,
		xPositionTypeMobile,
		yPositionDesktop,
		yPositionTablet,
		yPositionMobile,
		yPositionType,
		yPositionTypeTablet,
		yPositionTypeMobile,
		backgroundVideoOpacity,
		help = false,
		backgroundOverlaySize,
		backgroundOverlayRepeat,
		backgroundOverlayAttachment,
		backgroundOverlayPosition,
		backgroundOverlayImage,
		backgroundImageColor,
		backgroundOverlayCustomSize,
		backgroundOverlayCustomSizeType,
		customOverlayPosition,
		xPositionOverlayDesktop,
		xPositionOverlayTablet,
		xPositionOverlayMobile,
		xPositionOverlayType,
		xPositionOverlayTypeTablet,
		xPositionOverlayTypeMobile,
		yPositionOverlayDesktop,
		yPositionOverlayTablet,
		yPositionOverlayMobile,
		yPositionOverlayType,
		yPositionOverlayTypeTablet,
		yPositionOverlayTypeMobile,
		overlayBlendMode,
		imageOverlayResponsive,
		label = __( 'Type', 'ultimate-addons-for-gutenberg' ),
	} = props;

	const blockNameForHook = getSelectedBlock()?.name.split( '/' ).pop(); // eslint-disable-line @wordpress/no-unused-vars-before-return
	useEffect( () => {
		setPanelNameForHook( getPanelIdFromRef( panelRef ) );
	}, [ blockNameForHook ] );

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

	// For now, we are only rendering this setting if the current block is a Container.
	const currentBlock = select( 'core/block-editor' ).getSelectedBlock();

	const isContainer = 'uagb/container' === currentBlock?.name;

	let overlayOptions = [];

	if ( isContainer ) {
		// Only allow specific overlay options for Container with different background types
		switch ( backgroundType.value ) {
			case 'color':
			case 'gradient':
				overlayOptions.push( {
					value: 'image',
					icon: UAGB_Block_Icons.bg_image,
					tooltip: __( 'Image', 'ultimate-addons-for-gutenberg' ),
				} );
				break;
			case 'image':
				overlayOptions.push(
					{
						value: 'color',
						icon: UAGB_Block_Icons.bg_color,
						tooltip: __( 'Color', 'ultimate-addons-for-gutenberg' ),
					},
					{
						value: 'gradient',
						icon: UAGB_Block_Icons.bg_gradient,
						tooltip: __( 'Gradient', 'ultimate-addons-for-gutenberg' ),
					},
					{
						value: 'image',
						icon: UAGB_Block_Icons.bg_image,
						tooltip: __( 'Image', 'ultimate-addons-for-gutenberg' ),
					}
				);
				break;
			case 'video':
				overlayOptions.push(
					{
						value: 'color',
						icon: UAGB_Block_Icons.bg_color,
						tooltip: __( 'Color', 'ultimate-addons-for-gutenberg' ),
					},
					{
						value: 'gradient',
						icon: UAGB_Block_Icons.bg_gradient,
						tooltip: __( 'Gradient', 'ultimate-addons-for-gutenberg' ),
					}
				);
				break;
		}
	} else {
		// Default overlay options for non-Container blocks
		overlayOptions = [
			{
				value: 'none',
				label: __( 'None', 'ultimate-addons-for-gutenberg' ),
			},
			{
				value: 'color',
				label: __( 'Classic', 'ultimate-addons-for-gutenberg' ),
			},
		];

		if ( gradientOverlay.value ) {
			overlayOptions.push( {
				value: 'gradient',
				label: __( 'Gradient', 'ultimate-addons-for-gutenberg' ),
			} );
		}
	}

	const bgIconOptions = [
		{
			value: 'color',
			icon: UAGB_Block_Icons.bg_color,
			tooltip: __( 'Color', 'ultimate-addons-for-gutenberg' ),
		},
		{
			value: 'gradient',
			icon: UAGB_Block_Icons.bg_gradient,
			tooltip: __( 'Gradient', 'ultimate-addons-for-gutenberg' ),
		},
		{
			value: 'image',
			icon: UAGB_Block_Icons.bg_image,
			tooltip: __( 'Image', 'ultimate-addons-for-gutenberg' ),
		},
	];

	let bgSizeOptions = [
		{
			value: 'auto',
			label: __( 'Auto', 'ultimate-addons-for-gutenberg' ),
		},
		{
			value: 'cover',
			label: __( 'Cover', 'ultimate-addons-for-gutenberg' ),
		},
		{
			value: 'contain',
			label: __( 'Contain', 'ultimate-addons-for-gutenberg' ),
		},
		{
			value: 'custom',
			label: __( 'Custom', 'ultimate-addons-for-gutenberg' ),
		},
	];

	if ( ! backgroundCustomSize ) {
		bgSizeOptions = [
			{
				value: 'auto',
				label: __( 'Auto', 'ultimate-addons-for-gutenberg' ),
			},
			{
				value: 'cover',
				label: __( 'Cover', 'ultimate-addons-for-gutenberg' ),
			},
			{
				value: 'contain',
				label: __( 'Contain', 'ultimate-addons-for-gutenberg' ),
			},
		];
	}

	if ( backgroundVideoType.value ) {
		bgIconOptions.push( {
			value: 'video',
			icon: UAGB_Block_Icons.bg_video,
			tooltip: __( 'Video', 'ultimate-addons-for-gutenberg' ),
		} );
	}

	const setImage =
		imageResponsive &&
		( backgroundImage.desktop?.value || backgroundImage.tablet?.value || backgroundImage.mobile?.value )
			? true
			: false;

	// Render Common Overlay Controls.
	const renderOverlayControls = () => {
		// Return early if the selected block is not a Container.
		if ( ! isContainer ) {
			return null;
		}

		return (
			<>
				<div className="uag-background-image-overlay-opacity">
					<Range
						label={ __( 'Overlay Opacity', 'ultimate-addons-for-gutenberg' ) }
						setAttributes={ setAttributes }
						value={ overlayOpacity.value }
						data={ {
							value: overlayOpacity.value,
							label: overlayOpacity.label,
						} }
						min={ 0 }
						max={ 1 }
						step={ 0.05 }
						displayUnit={ false }
					/>
				</div>
			</>
		);
	};

	//Render Common Overlay Controls.
	const renderOverlayImageControls = () => {
		// Return early if the selected block is not a Container.
		if ( ! isContainer ) {
			return null;
		}

		const onRemoveOverlayImage = () => {
			setAttributes( { [ backgroundOverlayImage.label ]: null } );
		};

		const onSelectOverlayImage = ( media ) => {
			if ( ! media || ! media.url ) {
				setAttributes( { [ backgroundOverlayImage.label ]: null } );
				return;
			}

			if ( ! media.type || 'image' !== media.type ) {
				return;
			}

			setAttributes( { [ backgroundOverlayImage.label ]: media } );
		};

		const setOverlayImage =
			imageOverlayResponsive &&
			( backgroundOverlayImage.desktop?.value ||
				backgroundOverlayImage.tablet?.value ||
				backgroundOverlayImage.mobile?.value )
				? true
				: false;

		return (
			<>
				<div className="uag-background-image">
					{ ! imageOverlayResponsive && (
						<UAGMediaPicker
							onSelectImage={ onSelectOverlayImage }
							backgroundOverlayImage={ backgroundOverlayImage.value }
							onRemoveImage={ onRemoveOverlayImage }
							disableLabel={ true }
						/>
					) }
					{ ! imageOverlayResponsive && backgroundOverlayImage.value && (
						<>
							<div className="uag-background-image-position">
								<SelectControl
									label={ __( 'Image Position', 'ultimate-addons-for-gutenberg' ) }
									value={ backgroundOverlayPosition.value }
									onChange={ ( value ) =>
										setAttributes( {
											[ backgroundOverlayPosition.label ]: value,
										} )
									}
									options={ [
										{
											value: 'left top',
											label: __( 'Top Left', 'ultimate-addons-for-gutenberg' ),
										},
										{
											value: 'center top',
											label: __( 'Top Center', 'ultimate-addons-for-gutenberg' ),
										},
										{
											value: 'right top',
											label: __( 'Top Right', 'ultimate-addons-for-gutenberg' ),
										},
										{
											value: 'center top',
											label: __( 'Center Top', 'ultimate-addons-for-gutenberg' ),
										},
										{
											value: 'center center',
											label: __( 'Center Center', 'ultimate-addons-for-gutenberg' ),
										},
										{
											value: 'center bottom',
											label: __( 'Center Bottom', 'ultimate-addons-for-gutenberg' ),
										},
										{
											value: 'left bottom',
											label: __( 'Bottom Left', 'ultimate-addons-for-gutenberg' ),
										},
										{
											value: 'center bottom',
											label: __( 'Bottom Center', 'ultimate-addons-for-gutenberg' ),
										},
										{
											value: 'right bottom',
											label: __( 'Bottom Right', 'ultimate-addons-for-gutenberg' ),
										},
									] }
								/>
							</div>
							<div className="uag-background-image-attachment">
								<SelectControl
									label={ __( 'Attachment', 'ultimate-addons-for-gutenberg' ) }
									value={ backgroundOverlayAttachment.value }
									onChange={ ( value ) =>
										setAttributes( {
											[ backgroundOverlayAttachment.label ]: value,
										} )
									}
									options={ [
										{
											value: 'fixed',
											label: __( 'Fixed', 'ultimate-addons-for-gutenberg' ),
										},
										{
											value: 'scroll',
											label: __( 'Scroll', 'ultimate-addons-for-gutenberg' ),
										},
									] }
								/>
							</div>
							<div className="uag-background-blend-mode">
								<SelectControl
									label={ __( 'Blend Mode', 'ultimate-addons-for-gutenberg' ) }
									value={ overlayBlendMode.value }
									onChange={ ( value ) =>
										setAttributes( {
											[ overlayBlendMode.label ]: value,
										} )
									}
									options={ [
										{
											value: 'normal',
											label: __( 'Normal', 'ultimate-addons-for-gutenberg' ),
										},
										{
											value: 'multiply',
											label: __( 'Multiply', 'ultimate-addons-for-gutenberg' ),
										},
										{
											value: 'screen',
											label: __( 'Screen', 'ultimate-addons-for-gutenberg' ),
										},
										{
											value: 'overlay',
											label: __( 'Overlay', 'ultimate-addons-for-gutenberg' ),
										},
										{
											value: 'darken',
											label: __( 'Darken', 'ultimate-addons-for-gutenberg' ),
										},
										{
											value: 'lighten',
											label: __( 'Lighten', 'ultimate-addons-for-gutenberg' ),
										},
										{
											value: 'color-dodge',
											label: __( 'Color Dodge', 'ultimate-addons-for-gutenberg' ),
										},
										{
											value: 'saturation',
											label: __( 'Saturation', 'ultimate-addons-for-gutenberg' ),
										},
										{
											value: 'color',
											label: __( 'Color', 'ultimate-addons-for-gutenberg' ),
										},
									] }
								/>
							</div>
							<div className="uag-background-image-repeat">
								<SelectControl
									label={ __( 'Repeat', 'ultimate-addons-for-gutenberg' ) }
									value={ backgroundOverlayRepeat.value }
									onChange={ ( value ) =>
										setAttributes( {
											[ backgroundOverlayRepeat.label ]: value,
										} )
									}
									options={ [
										{
											value: 'no-repeat',
											label: __( 'No Repeat', 'ultimate-addons-for-gutenberg' ),
										},
										{
											value: 'repeat',
											label: __( 'Repeat', 'ultimate-addons-for-gutenberg' ),
										},
										{
											value: 'repeat-x',
											label: __( 'Repeat-x', 'ultimate-addons-for-gutenberg' ),
										},
										{
											value: 'repeat-y',
											label: __( 'Repeat-y', 'ultimate-addons-for-gutenberg' ),
										},
									] }
								/>
							</div>
							<div className="uag-background-image-size">
								<SelectControl
									label={ __( 'Size', 'ultimate-addons-for-gutenberg' ) }
									value={ backgroundOverlaySize.value }
									onChange={ ( value ) =>
										setAttributes( {
											[ backgroundOverlaySize.label ]: value,
										} )
									}
									options={ bgSizeOptions }
								/>
								{ 'custom' === backgroundOverlaySize.value && backgroundOverlayCustomSize && (
									<ResponsiveSlider
										label={ __( 'Width', 'ultimate-addons-for-gutenberg' ) }
										data={ {
											desktop: {
												value: backgroundOverlayCustomSize.desktop.value,
												label: backgroundOverlayCustomSize.desktop.label,
											},
											tablet: {
												value: backgroundOverlayCustomSize.tablet.value,
												label: backgroundOverlayCustomSize.tablet.label,
											},
											mobile: {
												value: backgroundOverlayCustomSize.mobile.value,
												label: backgroundOverlayCustomSize.mobile.label,
											},
										} }
										min={ 0 }
										limitMax={ { 'px': 1600, '%': 100, 'em': 574 } }
										unit={ {
											value: backgroundOverlayCustomSizeType.value,
											label: backgroundOverlayCustomSizeType.label,
										} }
										units={ [
											{
												name: __( 'PX', 'ultimate-addons-for-gutenberg' ),
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
								) }
							</div>
						</>
					) }
					{ imageOverlayResponsive && backgroundOverlayImage && (
						<ResponsiveUAGImage
							backgroundImage={ backgroundOverlayImage }
							setAttributes={ setAttributes }
						/>
					) }
					{ imageOverlayResponsive && backgroundOverlayImage && setOverlayImage && (
						<>
							<div className="uag-background-image-position">
								<MultiButtonsControl
									setAttributes={ setAttributes }
									label={ __( 'Image Position', 'ultimate-addons-for-gutenberg' ) }
									data={ {
										value: customOverlayPosition.value,
										label: customOverlayPosition.label,
									} }
									options={ [
										{ value: 'default', label: __( 'Default', 'ultimate-addons-for-gutenberg' ) },
										{ value: 'custom', label: __( 'Custom', 'ultimate-addons-for-gutenberg' ) },
									] }
								/>
							</div>
							{ 'custom' !== customOverlayPosition.value && (
								<div className="uag-background-image-position">
									<ResponsiveUAGFocalPointPicker
										backgroundPosition={ backgroundOverlayPosition }
										setAttributes={ setAttributes }
										backgroundImage={ backgroundOverlayImage }
									/>
								</div>
							) }
							{ 'custom' === customOverlayPosition.value && (
								<>
									<div className="uag-background-image-position">
										<ResponsiveSlider
											label={ __( 'X Position', 'ultimate-addons-for-gutenberg' ) }
											data={ {
												desktop: {
													value: xPositionOverlayDesktop.value,
													label: 'xPositionOverlayDesktop',
													unit: {
														value: xPositionOverlayType.value,
														label: 'xPositionOverlayType',
													},
												},
												tablet: {
													value: xPositionOverlayTablet.value,
													label: 'xPositionOverlayTablet',
													unit: {
														value: xPositionOverlayTypeTablet.value,
														label: 'xPositionOverlayTypeTablet',
													},
												},
												mobile: {
													value: xPositionOverlayMobile.value,
													label: 'xPositionOverlayMobile',
													unit: {
														value: xPositionOverlayTypeMobile.value,
														label: 'xPositionOverlayTypeMobile',
													},
												},
											} }
											limitMin={ { 'px': -800, '%': -100, 'em': -100, 'vw': -100 } }
											limitMax={ { 'px': 800, '%': 100, 'em': 100, 'vw': 100 } }
											units={ [
												{
													name: __( 'PX', 'ultimate-addons-for-gutenberg' ),
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
												{
													name: __( 'VW', 'ultimate-addons-for-gutenberg' ),
													unitValue: 'vw',
												},
											] }
											setAttributes={ setAttributes }
										/>
									</div>
									<div className="uag-background-image-position">
										<ResponsiveSlider
											label={ __( 'Y Position', 'ultimate-addons-for-gutenberg' ) }
											data={ {
												desktop: {
													value: yPositionOverlayDesktop.value,
													label: 'yPositionOverlayDesktop',
													unit: {
														value: yPositionOverlayType.value,
														label: 'yPositionOverlayType',
													},
												},
												tablet: {
													value: yPositionOverlayTablet.value,
													label: 'yPositionOverlayTablet',
													unit: {
														value: yPositionOverlayTypeTablet.value,
														label: 'yPositionOverlayTypeTablet',
													},
												},
												mobile: {
													value: yPositionOverlayMobile.value,
													label: 'yPositionOverlayMobile',
													unit: {
														value: yPositionOverlayTypeMobile.value,
														label: 'yPositionOverlayTypeMobile',
													},
												},
											} }
											limitMin={ { 'px': -800, '%': -100, 'em': -100, 'vh': -100 } }
											limitMax={ { 'px': 800, '%': 100, 'em': 100, 'vh': 100 } }
											units={ [
												{
													name: __( 'PX', 'ultimate-addons-for-gutenberg' ),
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
												{
													name: __( 'VH', 'ultimate-addons-for-gutenberg' ),
													unitValue: 'vh',
												},
											] }
											setAttributes={ setAttributes }
										/>
									</div>
								</>
							) }
							<div className="uag-background-image-attachment">
								<ResponsiveSelectControl
									label={ __( 'Attachment', 'ultimate-addons-for-gutenberg' ) }
									data={ backgroundOverlayAttachment }
									options={ {
										desktop: [
											{
												value: 'fixed',
												label: __( 'Fixed', 'ultimate-addons-for-gutenberg' ),
											},
											{
												value: 'scroll',
												label: __( 'Scroll', 'ultimate-addons-for-gutenberg' ),
											},
										],
									} }
									setAttributes={ setAttributes }
								/>
							</div>
							<div className="uag-background-blend-mode">
								<ResponsiveSelectControl
									label={ __( 'Blend Mode', 'ultimate-addons-for-gutenberg' ) }
									data={ overlayBlendMode }
									options={ {
										desktop: [
											{
												value: 'normal',
												label: __( 'Normal', 'ultimate-addons-for-gutenberg' ),
											},
											{
												value: 'multiply',
												label: __( 'Multiply', 'ultimate-addons-for-gutenberg' ),
											},
											{
												value: 'screen',
												label: __( 'Screen', 'ultimate-addons-for-gutenberg' ),
											},
											{
												value: 'overlay',
												label: __( 'Overlay', 'ultimate-addons-for-gutenberg' ),
											},
											{
												value: 'darken',
												label: __( 'Darken', 'ultimate-addons-for-gutenberg' ),
											},
											{
												value: 'lighten',
												label: __( 'Lighten', 'ultimate-addons-for-gutenberg' ),
											},
											{
												value: 'color-dodge',
												label: __( 'Color Dodge', 'ultimate-addons-for-gutenberg' ),
											},
											{
												value: 'saturation',
												label: __( 'Saturation', 'ultimate-addons-for-gutenberg' ),
											},
											{
												value: 'color',
												label: __( 'Color', 'ultimate-addons-for-gutenberg' ),
											},
										],
									} }
									setAttributes={ setAttributes }
								/>
							</div>
							<div className="uag-background-image-repeat">
								<ResponsiveSelectControl
									label={ __( 'Repeat', 'ultimate-addons-for-gutenberg' ) }
									data={ backgroundOverlayRepeat }
									options={ {
										desktop: [
											{
												value: 'no-repeat',
												label: __( 'No Repeat', 'ultimate-addons-for-gutenberg' ),
											},
											{
												value: 'repeat',
												label: __( 'Repeat', 'ultimate-addons-for-gutenberg' ),
											},
											{
												value: 'repeat-x',
												label: __( 'Repeat-x', 'ultimate-addons-for-gutenberg' ),
											},
											{
												value: 'repeat-y',
												label: __( 'Repeat-y', 'ultimate-addons-for-gutenberg' ),
											},
										],
									} }
									setAttributes={ setAttributes }
								/>
							</div>
							<div className="uag-background-image-size">
								<ResponsiveSelectControl
									label={ __( 'Size', 'ultimate-addons-for-gutenberg' ) }
									data={ backgroundOverlaySize }
									options={ {
										desktop: [
											{
												value: 'auto',
												label: __( 'Auto', 'ultimate-addons-for-gutenberg' ),
											},
											{
												value: 'cover',
												label: __( 'Cover', 'ultimate-addons-for-gutenberg' ),
											},
											{
												value: 'contain',
												label: __( 'Contain', 'ultimate-addons-for-gutenberg' ),
											},
											{
												value: 'custom',
												label: __( 'Custom', 'ultimate-addons-for-gutenberg' ),
											},
										],
									} }
									setAttributes={ setAttributes }
								/>
								{ 'custom' === backgroundOverlaySize[ deviceType ].value &&
									backgroundOverlayCustomSize && (
										<ResponsiveSlider
											label={ __( 'Width', 'ultimate-addons-for-gutenberg' ) }
											data={ backgroundOverlayCustomSize }
											min={ 0 }
											limitMax={ { 'px': 1600, '%': 100, 'em': 574 } }
											unit={ {
												value: backgroundOverlayCustomSizeType.value,
												label: backgroundOverlayCustomSizeType.label,
											} }
											units={ [
												{
													name: __( 'PX', 'ultimate-addons-for-gutenberg' ),
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
									) }
							</div>
						</>
					) }
					{ renderOverlayControls() }
				</div>
			</>
		);
	};

	const OverlayControls = () => {
		// Return early if the selected block is not a Container.
		if ( ! isContainer ) {
			return null;
		}

		const buttonControl = () => {
			return (
				<>
					<Separator />
					<div className="uag-background-image-overlay-type">
						<MultiButtonsControl
							setAttributes={ setAttributes }
							label={ __( 'Overlay Type', 'ultimate-addons-for-gutenberg' ) }
							data={ {
								value: overlayType.value,
								label: overlayType.label,
							} }
							options={ overlayOptions }
							showIcons={ isContainer ? true : false }
							colorVariant="secondary"
							layoutVariant="inline"
						/>
					</div>
				</>
			);
		};

		return (
			<>
				{ ( ( backgroundType.value === 'color' && backgroundColor.value ) ||
					( backgroundType.value === 'gradient' && gradientOverlay.value ) ) && (
					<>
						{ buttonControl() }
						{ 'image' === overlayType.value && renderOverlayImageControls() }
					</>
				) }
				{ backgroundType.value === 'image' &&
					( ( imageResponsive && setImage ) || ( ! imageResponsive && backgroundImage?.value ) ) && (
						<>
							{ buttonControl() }
							{ 'color' === overlayType.value && (
								<>
									<div className="uag-background-image-overlay-color">
										<AdvancedPopColorControl
											label={ __( 'Image Overlay Color', 'ultimate-addons-for-gutenberg' ) }
											colorValue={ backgroundImageColor.value }
											data={ {
												value: backgroundImageColor.value,
												label: backgroundImageColor.label,
											} }
											setAttributes={ setAttributes }
										/>
									</div>
									{ renderOverlayControls() }
								</>
							) }
							{ 'gradient' === overlayType.value && (
								<>
									<div className="uag-background-image-overlay-gradient">
										<GradientSettings
											backgroundGradient={ props.backgroundOverlayGradient }
											setAttributes={ setAttributes }
											gradientType={ props.gradientType }
											backgroundGradientColor2={ props.backgroundGradientColor2 }
											backgroundGradientColor1={ props.backgroundGradientColor1 }
											backgroundGradientType={ props.backgroundGradientType }
											backgroundGradientLocation1={ props.backgroundGradientLocation1 }
											backgroundGradientLocation2={ props.backgroundGradientLocation2 }
											backgroundGradientAngle={ props.backgroundGradientAngle }
										/>
									</div>
									{ renderOverlayControls() }
								</>
							) }
							{ 'image' === overlayType.value && renderOverlayImageControls() }
						</>
					) }
				{ backgroundType.value === 'video' &&
					'video' === backgroundType.value &&
					backgroundVideo.value &&
					backgroundVideoType.value && (
						<div className="uag-background-video-overlay">
							{ overlayType && backgroundVideo && backgroundVideo.value && (
								<>
									{ buttonControl() }
									{ 'color' === overlayType.value && (
										<>
											<div className="uag-background-image-overlay-color">
												<AdvancedPopColorControl
													label={ __(
														'Image Overlay Color',
														'ultimate-addons-for-gutenberg'
													) }
													colorValue={ backgroundVideoColor.value }
													data={ {
														value: backgroundVideoColor.value,
														label: backgroundVideoColor.label,
													} }
													setAttributes={ setAttributes }
													onOpacityChange={ onOpacityChange }
													backgroundVideoOpacity={ {
														value: backgroundVideoOpacity.value,
														label: backgroundVideoOpacity.label,
													} }
												/>
											</div>
											{ renderOverlayControls() }
										</>
									) }
									{ gradientOverlay.value && 'gradient' === overlayType.value && (
										<>
											<div className="uag-background-image-overlay-gradient">
												<GradientSettings
													backgroundGradient={ props.backgroundOverlayGradient }
													setAttributes={ setAttributes }
													gradientType={ props.gradientType }
													backgroundGradientColor2={ props.backgroundGradientColor2 }
													backgroundGradientColor1={ props.backgroundGradientColor1 }
													backgroundGradientType={ props.backgroundGradientType }
													backgroundGradientLocation1={ props.backgroundGradientLocation1 }
													backgroundGradientLocation2={ props.backgroundGradientLocation2 }
													backgroundGradientAngle={ props.backgroundGradientAngle }
												/>
											</div>
											{ renderOverlayControls() }
										</>
									) }
								</>
							) }
						</div>
					) }
			</>
		);
	};

	const advancedControls = (
		<>
			<MultiButtonsControl
				setAttributes={ setAttributes }
				label={ label }
				data={ {
					value: backgroundType.value,
					label: backgroundType.label,
				} }
				options={ bgIconOptions }
				showIcons={ true }
				colorVariant="secondary"
				layoutVariant="inline"
			/>
			{ 'color' === backgroundType.value && (
				<div className="uag-background-color">
					<AdvancedPopColorControl
						label={ __( 'Color', 'ultimate-addons-for-gutenberg' ) }
						colorValue={ backgroundColor.value ? backgroundColor.value : '' }
						data={ {
							value: backgroundColor.value,
							label: backgroundColor.label,
						} }
						setAttributes={ setAttributes }
					/>
				</div>
			) }
			{ 'image' === backgroundType.value && (
				<div className="uag-background-image">
					{ ! imageResponsive && (
						<UAGMediaPicker
							onSelectImage={ onSelectImage }
							backgroundImage={ backgroundImage.value }
							onRemoveImage={ onRemoveImage }
							disableLabel={ true }
						/>
					) }
					{ ! imageResponsive && backgroundImage.value && (
						<>
							<div className="uag-background-image-position">
								<SelectControl
									label={ __( 'Image Position', 'ultimate-addons-for-gutenberg' ) }
									value={ backgroundPosition.value }
									onChange={ ( value ) =>
										setAttributes( {
											[ backgroundPosition.label ]: value,
										} )
									}
									options={ [
										{
											value: 'left top',
											label: __( 'Top Left', 'ultimate-addons-for-gutenberg' ),
										},
										{
											value: 'center top',
											label: __( 'Top Center', 'ultimate-addons-for-gutenberg' ),
										},
										{
											value: 'right top',
											label: __( 'Top Right', 'ultimate-addons-for-gutenberg' ),
										},
										{
											value: 'center top',
											label: __( 'Center Top', 'ultimate-addons-for-gutenberg' ),
										},
										{
											value: 'center center',
											label: __( 'Center Center', 'ultimate-addons-for-gutenberg' ),
										},
										{
											value: 'center bottom',
											label: __( 'Center Bottom', 'ultimate-addons-for-gutenberg' ),
										},
										{
											value: 'left bottom',
											label: __( 'Bottom Left', 'ultimate-addons-for-gutenberg' ),
										},
										{
											value: 'center bottom',
											label: __( 'Bottom Center', 'ultimate-addons-for-gutenberg' ),
										},
										{
											value: 'right bottom',
											label: __( 'Bottom Right', 'ultimate-addons-for-gutenberg' ),
										},
									] }
								/>
							</div>
							<div className="uag-background-image-attachment">
								<SelectControl
									label={ __( 'Attachment', 'ultimate-addons-for-gutenberg' ) }
									value={ backgroundAttachment.value }
									onChange={ ( value ) =>
										setAttributes( {
											[ backgroundAttachment.label ]: value,
										} )
									}
									options={ [
										{
											value: 'fixed',
											label: __( 'Fixed', 'ultimate-addons-for-gutenberg' ),
										},
										{
											value: 'scroll',
											label: __( 'Scroll', 'ultimate-addons-for-gutenberg' ),
										},
									] }
								/>
							</div>
							<div className="uag-background-image-repeat">
								<SelectControl
									label={ __( 'Repeat', 'ultimate-addons-for-gutenberg' ) }
									value={ backgroundRepeat.value }
									onChange={ ( value ) =>
										setAttributes( {
											[ backgroundRepeat.label ]: value,
										} )
									}
									options={ [
										{
											value: 'no-repeat',
											label: __( 'No Repeat', 'ultimate-addons-for-gutenberg' ),
										},
										{
											value: 'repeat',
											label: __( 'Repeat', 'ultimate-addons-for-gutenberg' ),
										},
										{
											value: 'repeat-x',
											label: __( 'Repeat-x', 'ultimate-addons-for-gutenberg' ),
										},
										{
											value: 'repeat-y',
											label: __( 'Repeat-y', 'ultimate-addons-for-gutenberg' ),
										},
									] }
								/>
							</div>
							<div className="uag-background-image-size">
								<SelectControl
									label={ __( 'Size', 'ultimate-addons-for-gutenberg' ) }
									value={ backgroundSize.value }
									onChange={ ( value ) =>
										setAttributes( {
											[ backgroundSize.label ]: value,
										} )
									}
									options={ bgSizeOptions }
								/>
								{ 'custom' === backgroundSize.value && backgroundCustomSize && (
									<ResponsiveSlider
										label={ __( 'Width', 'ultimate-addons-for-gutenberg' ) }
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
												name: __( 'PX', 'ultimate-addons-for-gutenberg' ),
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
								) }
							</div>
						</>
					) }
					{ imageResponsive && backgroundImage && (
						<ResponsiveUAGImage backgroundImage={ backgroundImage } setAttributes={ setAttributes } />
					) }
					{ imageResponsive && backgroundImage && setImage && (
						<>
							<div className="uag-background-image-position">
								<MultiButtonsControl
									setAttributes={ setAttributes }
									label={ __( 'Image Position', 'ultimate-addons-for-gutenberg' ) }
									data={ {
										value: customPosition.value,
										label: customPosition.label,
									} }
									options={ [
										{ value: 'default', label: __( 'Default', 'ultimate-addons-for-gutenberg' ) },
										{ value: 'custom', label: __( 'Custom', 'ultimate-addons-for-gutenberg' ) },
									] }
								/>
							</div>
							{ 'custom' !== customPosition.value && (
								<div className="uag-background-image-position">
									<ResponsiveUAGFocalPointPicker
										backgroundPosition={ backgroundPosition }
										setAttributes={ setAttributes }
										backgroundImage={ backgroundImage }
									/>
								</div>
							) }
							{ 'custom' === customPosition.value && (
								<>
									<div className="uag-background-image-position">
										<ResponsiveSlider
											label={ __( 'X Position', 'ultimate-addons-for-gutenberg' ) }
											data={ {
												desktop: {
													value: xPositionDesktop.value,
													label: 'xPositionDesktop',
													unit: {
														value: xPositionType.value,
														label: 'xPositionType',
													},
												},
												tablet: {
													value: xPositionTablet.value,
													label: 'xPositionTablet',
													unit: {
														value: xPositionTypeTablet.value,
														label: 'xPositionTypeTablet',
													},
												},
												mobile: {
													value: xPositionMobile.value,
													label: 'xPositionMobile',
													unit: {
														value: xPositionTypeMobile.value,
														label: 'xPositionTypeMobile',
													},
												},
											} }
											limitMin={ { 'px': -800, '%': -100, 'em': -100, 'vw': -100 } }
											limitMax={ { 'px': 800, '%': 100, 'em': 100, 'vw': 100 } }
											units={ [
												{
													name: __( 'PX', 'ultimate-addons-for-gutenberg' ),
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
												{
													name: __( 'VW', 'ultimate-addons-for-gutenberg' ),
													unitValue: 'vw',
												},
											] }
											setAttributes={ setAttributes }
										/>
									</div>
									<div className="uag-background-image-position">
										<ResponsiveSlider
											label={ __( 'Y Position', 'ultimate-addons-for-gutenberg' ) }
											data={ {
												desktop: {
													value: yPositionDesktop.value,
													label: 'yPositionDesktop',
													unit: {
														value: yPositionType.value,
														label: 'yPositionType',
													},
												},
												tablet: {
													value: yPositionTablet.value,
													label: 'yPositionTablet',
													unit: {
														value: yPositionTypeTablet.value,
														label: 'yPositionTypeTablet',
													},
												},
												mobile: {
													value: yPositionMobile.value,
													label: 'yPositionMobile',
													unit: {
														value: yPositionTypeMobile.value,
														label: 'yPositionTypeMobile',
													},
												},
											} }
											limitMin={ { 'px': -800, '%': -100, 'em': -100, 'vh': -100 } }
											limitMax={ { 'px': 800, '%': 100, 'em': 100, 'vh': 100 } }
											units={ [
												{
													name: __( 'PX', 'ultimate-addons-for-gutenberg' ),
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
												{
													name: __( 'VH', 'ultimate-addons-for-gutenberg' ),
													unitValue: 'vh',
												},
											] }
											setAttributes={ setAttributes }
										/>
									</div>
								</>
							) }
							<div className="uag-background-image-attachment">
								<ResponsiveSelectControl
									label={ __( 'Attachment', 'ultimate-addons-for-gutenberg' ) }
									data={ backgroundAttachment }
									options={ {
										desktop: [
											{
												value: 'fixed',
												label: __( 'Fixed', 'ultimate-addons-for-gutenberg' ),
											},
											{
												value: 'scroll',
												label: __( 'Scroll', 'ultimate-addons-for-gutenberg' ),
											},
										],
									} }
									setAttributes={ setAttributes }
								/>
							</div>
							<div className="uag-background-image-repeat">
								<ResponsiveSelectControl
									label={ __( 'Repeat', 'ultimate-addons-for-gutenberg' ) }
									data={ backgroundRepeat }
									options={ {
										desktop: [
											{
												value: 'no-repeat',
												label: __( 'No Repeat', 'ultimate-addons-for-gutenberg' ),
											},
											{
												value: 'repeat',
												label: __( 'Repeat', 'ultimate-addons-for-gutenberg' ),
											},
											{
												value: 'repeat-x',
												label: __( 'Repeat-x', 'ultimate-addons-for-gutenberg' ),
											},
											{
												value: 'repeat-y',
												label: __( 'Repeat-y', 'ultimate-addons-for-gutenberg' ),
											},
										],
									} }
									setAttributes={ setAttributes }
								/>
							</div>
							<div className="uag-background-image-size">
								<ResponsiveSelectControl
									label={ __( 'Size', 'ultimate-addons-for-gutenberg' ) }
									data={ backgroundSize }
									options={ {
										desktop: [
											{
												value: 'auto',
												label: __( 'Auto', 'ultimate-addons-for-gutenberg' ),
											},
											{
												value: 'cover',
												label: __( 'Cover', 'ultimate-addons-for-gutenberg' ),
											},
											{
												value: 'contain',
												label: __( 'Contain', 'ultimate-addons-for-gutenberg' ),
											},
											{
												value: 'custom',
												label: __( 'Custom', 'ultimate-addons-for-gutenberg' ),
											},
										],
									} }
									setAttributes={ setAttributes }
								/>
								{ 'custom' === backgroundSize[ deviceType ].value && backgroundCustomSize && (
									<ResponsiveSlider
										label={ __( 'Width', 'ultimate-addons-for-gutenberg' ) }
										data={ backgroundCustomSize }
										min={ 0 }
										limitMax={ { 'px': 1600, '%': 100, 'em': 574 } }
										unit={ {
											value: backgroundCustomSizeType.value,
											label: backgroundCustomSizeType.label,
										} }
										units={ [
											{
												name: __( 'PX', 'ultimate-addons-for-gutenberg' ),
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
								) }
							</div>
						</>
					) }
					{ ! isContainer &&
						overlayType &&
						backgroundImage &&
						( ( imageResponsive && setImage ) || ( ! imageResponsive && backgroundImage?.value ) ) && (
							<>
								<div className="uag-background-image-overlay-type">
									<MultiButtonsControl
										setAttributes={ setAttributes }
										label={ __( 'Overlay Type', 'ultimate-addons-for-gutenberg' ) }
										data={ {
											value: overlayType.value,
											label: overlayType.label,
										} }
										className="uagb-multi-button-alignment-control"
										options={ overlayOptions }
										showIcons={ false }
									/>
								</div>
								{ 'color' === overlayType.value && (
									<>
										<div className="uag-background-image-overlay-color">
											<AdvancedPopColorControl
												label={ __( 'Image Overlay Color', 'ultimate-addons-for-gutenberg' ) }
												colorValue={ backgroundImageColor.value }
												data={ {
													value: backgroundImageColor.value,
													label: backgroundImageColor.label,
												} }
												setAttributes={ setAttributes }
											/>
										</div>
										{ renderOverlayControls() }
									</>
								) }
								{ 'gradient' === overlayType.value && (
									<>
										<div className="uag-background-image-overlay-gradient">
											<GradientSettings
												backgroundGradient={ props.backgroundGradient }
												setAttributes={ setAttributes }
												gradientType={ props.gradientType }
												backgroundGradientColor2={ props.backgroundGradientColor2 }
												backgroundGradientColor1={ props.backgroundGradientColor1 }
												backgroundGradientType={ props.backgroundGradientType }
												backgroundGradientLocation1={ props.backgroundGradientLocation1 }
												backgroundGradientLocation2={ props.backgroundGradientLocation2 }
												backgroundGradientAngle={ props.backgroundGradientAngle }
											/>
										</div>
										{ renderOverlayControls() }
									</>
								) }
							</>
						) }
				</div>
			) }
			{ gradientOverlay.value && 'gradient' === backgroundType.value && (
				<div className="uag-background-gradient">
					<GradientSettings
						backgroundGradient={ props.backgroundGradient }
						gradientType={ props.gradientType }
						setAttributes={ props.setAttributes }
						backgroundGradientColor2={ props.backgroundGradientColor2 }
						backgroundGradientColor1={ props.backgroundGradientColor1 }
						backgroundGradientType={ props.backgroundGradientType }
						backgroundGradientLocation1={ props.backgroundGradientLocation1 }
						backgroundGradientLocation2={ props.backgroundGradientLocation2 }
						backgroundGradientAngle={ props.backgroundGradientAngle }
					/>
				</div>
			) }
			{ 'video' === backgroundType.value && backgroundVideoType.value && (
				<div className="uag-background-video">
					<UAGMediaPicker
						onSelectImage={ onSelectVideo }
						backgroundImage={ backgroundVideo.value }
						onRemoveImage={ onRemoveVideo }
						slug={ 'video' }
						label={ __( 'Video', 'ultimate-addons-for-gutenberg' ) }
						allow={ [ 'video' ] }
					/>
				</div>
			) }
			<OverlayControls />
		</>
	);
	const controlName = 'background'; // there is no label props that's why keep hard coded label
	const controlBeforeDomElement = applyFilters(
		`spectra.${ blockNameForHook }.${ panelNameForHook }.${ controlName }.before`,
		'',
		blockNameForHook
	);
	const controlAfterDomElement = applyFilters(
		`spectra.${ blockNameForHook }.${ panelNameForHook }.${ controlName }`,
		'',
		blockNameForHook
	);

	return (
		<div ref={ panelRef } className="components-base-control">
			{ controlBeforeDomElement }
			<div className="uag-bg-select-control">
				{ advancedControls }
				<UAGHelpText text={ help } />
			</div>
			{ controlAfterDomElement }
		</div>
	);
};

export default Background;
