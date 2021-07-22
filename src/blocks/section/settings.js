import UAGB_Block_Icons from '@Controls/block-icons';
import React, { Suspense } from 'react';
import { __ } from '@wordpress/i18n';
import lazyLoader from '@Controls/lazy-loader';
import BoxShadowControl from '@Components/box-shadow';
import InspectorTabs from "../../components/inspector-tabs/InspectorTabs.js";
import InspectorTab from "../../components/inspector-tabs/InspectorTab.js";
import SpacingControl from "../../components/spacing-control";
import Range from "../../components/range/Range.js";
import Background from "../../components/background";
import Border from "../../components/border";
import AdvancedPopColorControl from "../../components/color-control/advanced-pop-color-control.js";
import GradientSettings from "../../components/gradient-settings";
import {
	BlockControls,
	BlockAlignmentToolbar,
	ColorPalette,
	InspectorControls,
	MediaUpload,
} from '@wordpress/block-editor';
import {
	PanelBody,
	SelectControl,
	RangeControl,
	Button,
	ButtonGroup,
	BaseControl,
	ToggleControl,
} from '@wordpress/components';

const Settings = ( props ) => {
	props = props.parentProps;

	const { attributes, setAttributes, deviceType } = props;

	const {
		align,
		contentWidth,
		width,
		innerWidth,
		innerWidthType,
		tag,
		themeWidth,
		leftPadding,
		rightPadding,
		topPadding,
		bottomPadding,
		leftMargin,
		rightMargin,
		topMargin,
		bottomMargin,
		topPaddingTablet,
		bottomPaddingTablet,
		leftPaddingTablet,
		rightPaddingTablet,
		topMarginTablet,
		bottomMarginTablet,
		leftMarginTablet,
		rightMarginTablet,
		topPaddingMobile,
		bottomPaddingMobile,
		leftPaddingMobile,
		rightPaddingMobile,
		topMarginMobile,
		bottomMarginMobile,
		leftMarginMobile,
		rightMarginMobile,
		backgroundType,
		backgroundImage,
		backgroundVideo,
		backgroundColor,
		backgroundPosition,
		backgroundAttachment,
		backgroundRepeat,
		backgroundSize,
		backgroundOpacity,
		backgroundVideoColor,
		backgroundVideoOpacity,
		backgroundImageColor,
		overlayType,
		gradientOverlayColor1,
		gradientOverlayColor2,
		gradientOverlayType,
		gradientOverlayLocation1,
		gradientOverlayLocation2,
		gradientOverlayAngle,
		gradientOverlayPosition,
		borderStyle,
		borderWidth,
		borderRadius,
		borderColor,
		mobileMarginType,
		tabletMarginType,
		desktopMarginType,
		mobilePaddingType,
		tabletPaddingType,
		desktopPaddingType,
		boxShadowColor,
		boxShadowHOffset,
		boxShadowVOffset,
		boxShadowBlur,
		boxShadowSpread,
		boxShadowPosition,
		spacingLink
	} = attributes;

	let blockControls = [ 'left', 'center', 'right' ];
	if ( 'full_width' == contentWidth ) {
		blockControls = [ 'wide', 'full' ];
	}

	/*
	 * Event to set Image as null while removing.
	 */
	const onRemoveImage = () => {
		setAttributes( { backgroundImage: null } );
	};

	/*
	 * Event to set Image as while adding.
	 */
	const onSelectImage = ( media ) => {
		if ( ! media || ! media.url ) {
			setAttributes( { backgroundImage: null } );
			return;
		}

		if ( ! media.type || 'image' != media.type ) {
			return;
		}

		setAttributes( { backgroundImage: media } );
	};

	/*
	 * Event to set Video as null while removing.
	 */
	const onRemoveVideo = () => {
		setAttributes( { backgroundVideo: null } );
	};

	/*
	 * Event to set Video while adding.
	 */
	const onSelectVideo = ( media ) => {
		if ( ! media || ! media.url ) {
			setAttributes( { backgroundVideo: null } );
			return;
		}
		if ( ! media.type || 'video' != media.type ) {
			return;
		}
		setAttributes( { backgroundVideo: media } );
	};

	const getLayoutPanelBody = () => {
		return (
			<PanelBody
				title={ __( 'Layout', 'ultimate-addons-for-gutenberg' ) }
				initialOpen={false}
			>
				<SelectControl
					label={ __(
						'Content Width',
						'ultimate-addons-for-gutenberg'
					) }
					value={ contentWidth }
					onChange={ ( value ) =>
						setAttributes( { contentWidth: value } )
					}
					options={ [
						{
							value: 'boxed',
							label: __(
								'Boxed',
								'ultimate-addons-for-gutenberg'
							),
						},
						{
							value: 'full_width',
							label: __(
								'Full Width',
								'ultimate-addons-for-gutenberg'
							),
						},
					] }
				/>
				{ contentWidth == 'boxed' && (
					<RangeControl
						label={ __( 'Width', 'ultimate-addons-for-gutenberg' ) }
						value={ width }
						min={ 0 }
						max={ 2000 }
						onChange={ ( value ) =>
							setAttributes( { width: value } )
						}
						allowReset
					/>
				) }
				{ contentWidth !== 'boxed' && (
					<ToggleControl
						label={ __(
							'Inherit Inner Width from Theme',
							'ultimate-addons-for-gutenberg'
						) }
						checked={ themeWidth }
						onChange={ () =>
							setAttributes( { themeWidth: ! themeWidth } )
						}
					/>
				) }
				{ contentWidth !== 'boxed' && ! themeWidth && (
					<Range
						label={__(
							"Inner Width",
							"ultimate-addons-for-gutenberg"
						)}
						setAttributes={setAttributes}
						value={innerWidth}
						onChange={(value) =>
							setAttributes({ innerWidth: value })
						}
						initialPosition={15}
						min={0}
						max={2000}
						unit={{
							value: innerWidthType,
							label: "innerWidthType",
						}}
					/>
				) }
				<SelectControl
					label={ __( 'HTML Tag', 'ultimate-addons-for-gutenberg' ) }
					value={ tag }
					onChange={ ( value ) => setAttributes( { tag: value } ) }
					options={ [
						{
							value: 'div',
							label: __( 'div', 'ultimate-addons-for-gutenberg' ),
						},
						{
							value: 'header',
							label: __(
								'header',
								'ultimate-addons-for-gutenberg'
							),
						},
						{
							value: 'footer',
							label: __(
								'footer',
								'ultimate-addons-for-gutenberg'
							),
						},
						{
							value: 'main',
							label: __(
								'main',
								'ultimate-addons-for-gutenberg'
							),
						},
						{
							value: 'article',
							label: __(
								'article',
								'ultimate-addons-for-gutenberg'
							),
						},
						{
							value: 'section',
							label: __(
								'section',
								'ultimate-addons-for-gutenberg'
							),
						},
						{
							value: 'aside',
							label: __(
								'aside',
								'ultimate-addons-for-gutenberg'
							),
						},
						{
							value: 'nav',
							label: __( 'nav', 'ultimate-addons-for-gutenberg' ),
						},
					] }
				/>
			</PanelBody>
		);
	};

	const getSpacingPanelBody = () => {
		return (
			<PanelBody title="Spacing" initialOpen={false}>
				<SpacingControl
					{...props}
					label={__(
						"Padding",
						"ultimate-addons-for-gutenberg"
					)}
					valueTop={{
						value: topPadding,
						label: "topPadding",
					}}
					valueRight={{
						value: rightPadding,
						label: "rightPadding",
					}}
					valueBottom={{
						value: bottomPadding,
						label: "bottomPadding",
					}}
					valueLeft={{
						value: leftPadding,
						label: "leftPadding",
					}}
					valueTopTablet={{
						value: topPaddingTablet,
						label: "topPaddingTablet",
					}}
					valueRightTablet={{
						value: rightPaddingTablet,
						label: "rightPaddingTablet",
					}}
					valueBottomTablet={{
						value: bottomPaddingTablet,
						label: "bottomPaddingTablet",
					}}
					valueLeftTablet={{
						value: leftPaddingTablet,
						label: "leftPaddingTablet",
					}}
					valueTopMobile={{
						value: topPaddingMobile,
						label: "topPaddingMobile",
					}}
					valueRightMobile={{
						value: rightPaddingMobile,
						label: "rightPaddingMobile",
					}}
					valueBottomMobile={{
						value: bottomPaddingMobile,
						label: "bottomPaddingMobile",
					}}
					valueLeftMobile={{
						value: leftPaddingMobile,
						label: "leftPaddingMobile",
					}}
					unit={{
						value: desktopPaddingType,
						label: "desktopPaddingType",
					}}
					mUnit={{
						value: mobilePaddingType,
						label: "mobilePaddingType",
					}}
					tUnit={{
						value: tabletPaddingType,
						label: "tabletPaddingType",
					}}
					deviceType={deviceType}
					attributes={attributes}
					setAttributes={setAttributes}
					link={{
						value: spacingLink,
						label: "spacingLink",
					}}
				/>
				<SpacingControl
					{...props}
					label={__(
						"Margin",
						"ultimate-addons-for-gutenberg"
					)}
					valueTop={{
						value: topMargin,
						label: "topMargin",
					}}
					valueRight={{
						value: rightMargin,
						label: "rightMargin",
					}}
					valueBottom={{
						value: bottomMargin,
						label: "bottomMargin",
					}}
					valueLeft={{
						value: leftMargin,
						label: "leftMargin",
					}}
					valueTopTablet={{
						value: topMarginTablet,
						label: "topMarginTablet",
					}}
					valueRightTablet={{
						value: rightMarginTablet,
						label: "rightMarginTablet",
					}}
					valueBottomTablet={{
						value: bottomMarginTablet,
						label: "bottomMarginTablet",
					}}
					valueLeftTablet={{
						value: leftMarginTablet,
						label: "leftMarginTablet",
					}}
					valueTopMobile={{
						value: topMarginMobile,
						label: "topMarginMobile",
					}}
					valueRightMobile={{
						value: rightMarginMobile,
						label: "rightMarginMobile",
					}}
					valueBottomMobile={{
						value: bottomMarginMobile,
						label: "bottomMarginMobile",
					}}
					valueLeftMobile={{
						value: leftMarginMobile,
						label: "leftMarginMobile",
					}}
					unit={{
						value: desktopMarginType,
						label: "desktopMarginType",
					}}
					mUnit={{
						value: mobileMarginType,
						label: "mobileMarginType",
					}}
					tUnit={{
						value: tabletMarginType,
						label: "tabletMarginType",
					}}
					deviceType={deviceType}
					attributes={attributes}
					setAttributes={setAttributes}
					link={{
						value: spacingLink,
						label: "spacingLink",
					}}
				/>
			</PanelBody>
		);
	};

	const getBackgroundPanelBody = () => {
		return (
			<PanelBody
				title={__(
					"Background",
					"ultimate-addons-for-gutenberg"
				)}
				initialOpen={false}
			>
				<Background
					setAttributes={setAttributes}
					backgroundImageColor={{
						value: backgroundImageColor,
						label: __(
							"Background Image Color",
							"ultimate-addons-for-gutenberg"
						),
					}}
					overlayType={{
						value: overlayType,
						label: __(
							"Overlay Type",
							"ultimate-addons-for-gutenberg"
						),
					}}
					backgroundSize={{
						value: backgroundSize,
						label: __(
							"Background Size",
							"ultimate-addons-for-gutenberg"
						),
					}}
					backgroundRepeat={{
						value: backgroundRepeat,
						label: __(
							"Background Repeat",
							"ultimate-addons-for-gutenberg"
						),
					}}
					backgroundAttachment={{
						value: backgroundAttachment,
						label: __(
							"Background Attachement",
							"ultimate-addons-for-gutenberg"
						),
					}}
					backgroundPosition={{
						value: backgroundPosition,
						label: __(
							"Background Image",
							"ultimate-addons-for-gutenberg"
						),
					}}
					backgroundImage={{
						value: backgroundImage,
						label: __(
							"Background Image",
							"ultimate-addons-for-gutenberg"
						),
					}}
					backgroundColor={{
						value: backgroundColor,
						label: __(
							"Background Color",
							"ultimate-addons-for-gutenberg"
						),
					}}
					backgroundType={{
						value: backgroundType,
						label: __(
							"Background Type",
							"ultimate-addons-for-gutenberg"
						),
					}}
					backgroundOpacity={{
						value: backgroundOpacity,
						label: __(
							"Opacity",
							"ultimate-addons-for-gutenberg"
						),
					}}
					{...props}
				/>	
				{ 'video' == backgroundType && backgroundVideo && (
					<>
						<p className="uagb-setting-label">
							{ __( 'Video Overlay Color' ) }
							<span className="components-base-control__label">
								<span
									className="component-color-indicator"
									style={ {
										backgroundColor: backgroundVideoColor,
									} }
								></span>
							</span>
						</p>
						<ColorPalette
							value={ backgroundVideoColor }
							onChange={ ( colorValue ) =>
								setAttributes( {
									backgroundVideoColor: colorValue,
								} )
							}
							allowReset
						/>
					</>
				) }
				{ 'video' == backgroundType && backgroundVideo && (
					<RangeControl
						label={ __(
							'Opacity',
							'ultimate-addons-for-gutenberg'
						) }
						value={ backgroundVideoOpacity }
						onChange={ ( value ) =>
							setAttributes( {
								backgroundVideoOpacity: value,
							} )
						}
						min={ 0 }
						max={ 100 }
						allowReset
						initialPosition={ 50 }
					/>
				) }	
				{ 'gradient' == overlayType && (
					<>
						<p className="uagb-setting-label">
							{ __(
								'Color 1',
								'ultimate-addons-for-gutenberg'
							) }
							<span className="components-base-control__label">
								<span
									className="component-color-indicator"
									style={ {
										backgroundColor: backgroundVideoColor,
									} }
								></span>
							</span>
						</p>
						<ColorPalette
							value={ gradientOverlayColor1 }
							onChange={ ( colorValue ) =>
								setAttributes( {
									gradientOverlayColor1: colorValue,
								} )
							}
							allowReset
						/>
						<RangeControl
							label={ __(
								'Location 1',
								'ultimate-addons-for-gutenberg'
							) }
							value={ gradientOverlayLocation1 }
							onChange={ ( value ) =>
								setAttributes( {
									gradientOverlayLocation1: value,
								} )
							}
							min={ 0 }
							max={ 100 }
							allowReset
						/>
						<p className="uagb-setting-label">
							{ __(
								'Color 2',
								'ultimate-addons-for-gutenberg'
							) }
							<span className="components-base-control__label">
								<span
									className="component-color-indicator"
									style={ {
										backgroundColor: backgroundVideoColor,
									} }
								></span>
							</span>
						</p>
						<ColorPalette
							value={ gradientOverlayColor2 }
							onChange={ ( colorValue ) =>
								setAttributes( {
									gradientOverlayColor2: colorValue,
								} )
							}
							allowReset
						/>
						<RangeControl
							label={ __(
								'Location 2',
								'ultimate-addons-for-gutenberg'
							) }
							value={ gradientOverlayLocation2 }
							onChange={ ( value ) =>
								setAttributes( {
									gradientOverlayLocation2: value,
								} )
							}
							min={ 0 }
							max={ 100 }
							allowReset
						/>
						<SelectControl
							label={ __(
								'Type',
								'ultimate-addons-for-gutenberg'
							) }
							value={ gradientOverlayType }
							onChange={ ( value ) =>
								setAttributes( {
									gradientOverlayType: value,
								} )
							}
							options={ [
								{
									value: 'linear',
									label: __(
										'Linear',
										'ultimate-addons-for-gutenberg'
									),
								},
								{
									value: 'radial',
									label: __(
										'Radial',
										'ultimate-addons-for-gutenberg'
									),
								},
							] }
						/>
						{ 'linear' == gradientOverlayType && (
							<RangeControl
								label={ __(
									'Angle',
									'ultimate-addons-for-gutenberg'
								) }
								value={ gradientOverlayAngle }
								onChange={ ( value ) =>
									setAttributes( {
										gradientOverlayAngle: value,
									} )
								}
								min={ 0 }
								max={ 360 }
								allowReset
							/>
						) }
						{ 'radial' == gradientOverlayType && (
							<SelectControl
								label={ __(
									'Type',
									'ultimate-addons-for-gutenberg'
								) }
								value={
									gradientOverlayPosition
								}
								onChange={ ( value ) =>
									setAttributes( {
										gradientOverlayPosition: value,
									} )
								}
								options={ [
									{
										value: 'center center',
										label: __(
											'Center Center',
											'ultimate-addons-for-gutenberg'
										),
									},
									{
										value: 'center left',
										label: __(
											'Center Left',
											'ultimate-addons-for-gutenberg'
										),
									},
									{
										value: 'center right',
										label: __(
											'Center Right',
											'ultimate-addons-for-gutenberg'
										),
									},
									{
										value: 'top center',
										label: __(
											'Top Center',
											'ultimate-addons-for-gutenberg'
										),
									},
									{
										value: 'top left',
										label: __(
											'Top Left',
											'ultimate-addons-for-gutenberg'
										),
									},
									{
										value: 'top right',
										label: __(
											'Top Right',
											'ultimate-addons-for-gutenberg'
										),
									},
									{
										value: 'bottom center',
										label: __(
											'Bottom Center',
											'ultimate-addons-for-gutenberg'
										),
									},
									{
										value: 'bottom left',
										label: __(
											'Bottom Left',
											'ultimate-addons-for-gutenberg'
										),
									},
									{
										value: 'bottom right',
										label: __(
											'Bottom Right',
											'ultimate-addons-for-gutenberg'
										),
									},
								] }
							/>
						) }
					</>
				) }
			</PanelBody>
		);
	};

	const getBorderPanelBody = () => {
		return (
			<>
				<PanelBody
					title={__(
						"Border",
						"ultimate-addons-for-gutenberg"
					)}
					initialOpen={false}
				>
					<Border
						setAttributes={setAttributes}
						borderStyle={{
							value: borderStyle,
							label: __(
								"Style",
								"ultimate-addons-for-gutenberg"
							),
						}}
						borderWidth={{
							value: borderWidth,
							label: __(
								"Width",
								"ultimate-addons-for-gutenberg"
							),
						}}
						borderRadius={{
							value: borderRadius,
							label: __(
								"Radius",
								"ultimate-addons-for-gutenberg"
							),
						}}
						borderColor={{
							value: borderColor,
							label: __(
								"Color",
								"ultimate-addons-for-gutenberg"
							),
						}}
					/>
				</PanelBody>
				<PanelBody title="Box Shadow" initialOpen={false}>
				<BoxShadowControl
					setAttributes={setAttributes}
					label={__(
						"Box Shadow",
						"ultimate-addons-for-gutenberg"
					)}
					boxShadowColor={{
						value: boxShadowColor,
						label: __(
							"Color",
							"ultimate-addons-for-gutenberg"
						),
					}}
					boxShadowHOffset={{
						value: boxShadowHOffset,
						label: __(
							"Horizontal",
							"ultimate-addons-for-gutenberg"
						),
					}}
					boxShadowVOffset={{
						value: boxShadowVOffset,
						label: __(
							"Vertical",
							"ultimate-addons-for-gutenberg"
						),
					}}
					boxShadowBlur={{
						value: boxShadowBlur,
						label: __(
							"Blur",
							"ultimate-addons-for-gutenberg"
						),
					}}
					boxShadowSpread={{
						value: boxShadowSpread,
						label: __(
							"Spread",
							"ultimate-addons-for-gutenberg"
						),
					}}
					boxShadowPosition={{
						value: boxShadowPosition,
						label: __(
							"Position",
							"ultimate-addons-for-gutenberg"
						),
					}}
				/>
			</PanelBody>
			</>
		);
	};

	const generalSetting = () => {
		return  <InspectorTabs>
					<InspectorTab key={"general"}>
						{ getLayoutPanelBody() }
						{ getSpacingPanelBody() }
						{ getBorderPanelBody() }
						{ getBackgroundPanelBody() }
					</InspectorTab>
					<InspectorTab key={"advance"}></InspectorTab>
				</InspectorTabs>
	}
	return (
		<Suspense fallback={ lazyLoader() }>
			<BlockControls>
				<BlockAlignmentToolbar
					value={ align }
					onChange={ ( value ) => {
						setAttributes( { align: value } );
					} }
					controls={ blockControls }
				/>
			</BlockControls>
			<InspectorControls>
				{ generalSetting() }
			</InspectorControls>
		</Suspense>
	);
};

export default React.memo( Settings );
