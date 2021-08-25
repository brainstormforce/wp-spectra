/**
 * BLOCK: Columns - Settings.
 */
import { __ } from '@wordpress/i18n';
import React, { Suspense } from 'react';
import lazyLoader from '@Controls/lazy-loader';
import BoxShadowControl from '@Components/box-shadow';
import MultiButtonsControl from "../../components/multi-buttons-control";
import SpacingControl from "../../components/spacing-control";
import Background from "../../components/background";
import Border from "../../components/border";
import AdvancedPopColorControl from "../../components/color-control/advanced-pop-color-control.js";
import Range from "../../components/range/Range.js";
import InspectorTabs from "../../components/inspector-tabs/InspectorTabs.js";
import InspectorTab, {
	UAGTabs,
} from "../../components/inspector-tabs/InspectorTab.js";
import ResponsiveSlider from "../../components/responsive-slider";
import UAGTabsControl from "../../components/tabs";

import {
	BlockControls,
	BlockAlignmentToolbar,
	BlockVerticalAlignmentToolbar,
	InspectorControls,
} from '@wordpress/block-editor';
import {
	PanelBody,
	SelectControl,
	RangeControl,
	ToggleControl,
} from '@wordpress/components';

const Settings = ( props ) => {
	const { attributes, setAttributes, deviceType } = props.parentProps;

	const {
		stack,
		align,
		vAlign,
		contentWidth,
		width,
		widthType,
		tag,
		columnGap,
		topMarginDesktop,
		rightMarginDesktop,
		leftMarginDesktop,
		bottomMarginDesktop,
		topMarginMobile,
		rightMarginMobile,
		leftMarginMobile,
		bottomMarginMobile,
		topMarginTablet,
		rightMarginTablet,
		leftMarginTablet,
		bottomMarginTablet,
		topPadding,
		bottomPadding,
		leftPadding,
		rightPadding,
		topPaddingTablet,
		bottomPaddingTablet,
		leftPaddingTablet,
		rightPaddingTablet,
		topPaddingMobile,
		bottomPaddingMobile,
		leftPaddingMobile,
		rightPaddingMobile,
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
		gradientValue,
		overlayType,
		borderStyle,
		borderWidth,
		borderRadius,
		borderColor,
		borderHoverColor,
		columns,
		bottomType,
		bottomColor,
		bottomHeight,
		bottomHeightTablet,
		bottomHeightMobile,
		bottomWidth,
		topType,
		topColor,
		topHeight,
		topHeightTablet,
		topHeightMobile,
		topWidth,
		bottomFlip,
		topFlip,
		reverseTablet,
		reverseMobile,
		topDividerOpacity,
		bottomDividerOpacity,
		topContentAboveShape,
		bottomContentAboveShape,
		mobileMarginType,
		tabletMarginType,
		desktopMarginType,
		mobilePaddingType,
		tabletPaddingType,
		desktopPaddingType,
		paddingLink,
		marginLink,
		boxShadowColor,
		boxShadowHOffset,
		boxShadowVOffset,
		boxShadowBlur,
		boxShadowSpread,
		boxShadowPosition,
	} = attributes;
	
	const blockControlSettings = () => {
		return (
			<BlockControls>
				<BlockAlignmentToolbar
					value={ align }
					onChange={ ( value ) => {
						setAttributes( { align: value } );
					} }
					controls={ [ 'wide', 'full' ] }
				/>
				<BlockVerticalAlignmentToolbar
					value={ vAlign }
					onChange={ ( value ) => {
						setAttributes( { vAlign: value } );
					} }
				/>
			</BlockControls>
		);
	};
	const layoutSettings = () => {
		return (
			<PanelBody
				title={ __( 'Layout', 'ultimate-addons-for-gutenberg' ) }
			>
				<RangeControl
					label={ __( 'Columns', 'ultimate-addons-for-gutenberg' ) }
					value={ columns }
					min={ 0 }
					max={ 6 }
					onChange={ ( value ) =>
						setAttributes( { columns: value } )
					}
				/>
				<MultiButtonsControl
					setAttributes={setAttributes}
					label={__(
						"Stack On",
						"ultimate-addons-for-gutenberg"
					)}
					data={{
						value: stack,
						label: "stack",
					}}
					className="uagb-multi-button-alignment-control"
					options={[
						{
							value: 'none',
							label: __(
								'None',
								'ultimate-addons-for-gutenberg'
							),
							tooltip: __(
								"None",
								"ultimate-addons-for-gutenberg"
							),
						},
						{
							value: 'tablet',
							label: __(
								'Tablet & Mobile',
								'ultimate-addons-for-gutenberg'
							),
							tooltip: __(
								"Tablet & Mobile",
								"ultimate-addons-for-gutenberg"
							),
						},
						{
							value: 'mobile',
							label: __(
								'Mobile',
								'ultimate-addons-for-gutenberg'
							),
							tooltip: __(
								"Mobile",
								"ultimate-addons-for-gutenberg"
							),
						}
					]}
					showIcons={false}
					help={ __(
						'Note: Choose on what breakpoint the columns will stack.',
						'ultimate-addons-for-gutenberg'
					) }
				/>
				<MultiButtonsControl
					setAttributes={setAttributes}
					label={__(
						"Container Width",
						"ultimate-addons-for-gutenberg"
					)}
					data={{
						value: contentWidth,
						label: "contentWidth",
					}}
					className="uagb-multi-button-alignment-control"
					options={[
						{
							value: 'theme',
							label: __(
								'Theme Container Width',
								'ultimate-addons-for-gutenberg'
							),
							tooltip: __(
								"Theme Container Width",
								"ultimate-addons-for-gutenberg"
							),
						},
						{
							value: 'custom',
							label: __(
								'Custom',
								'ultimate-addons-for-gutenberg'
							),
							tooltip: __(
								"Custom",
								"ultimate-addons-for-gutenberg"
							),
						}
					]}
					showIcons={false}
				/>
				{ contentWidth == 'custom' && (
					<>
						<Range
							label={__('Inner Width', "ultimate-addons-for-gutenberg")}
							setAttributes={setAttributes}
							value={width}
							onChange={(value) =>
								setAttributes({ width: value })
							}
							min={0}
							max={"%" == widthType ? 100 : 2000}
							unit={{
								value: widthType,
								label: "widthType",
							}}
							units={[
								{
									name: __(
										"Pixel",
										"ultimate-addons-for-gutenberg"
									),
									unitValue: "px",
								},
								{
									name: __(
										"%",
										"ultimate-addons-for-gutenberg"
									),
									unitValue: "%",
								},
							]}
						/>
					</>
				) }
				<MultiButtonsControl
					setAttributes={setAttributes}
					label={__(
						"Gap",
						"ultimate-addons-for-gutenberg"
					)}
					data={{
						value: columnGap,
						label: "columnGap",
					}}
					className="uagb-multi-button-alignment-control"
					options={[
						{
							value: "10",
							label: __(
								"Default",
								"ultimate-addons-for-gutenberg"
							),
							tooltip: __(
								"Default (10px)",
								"ultimate-addons-for-gutenberg"
							),
						},
						{
							value: "0",
							label: __(
								"None",
								"ultimate-addons-for-gutenberg"
							),
							tooltip: __(
								"No Gap (0px)",
								"ultimate-addons-for-gutenberg"
							),
						},
						{
							value: "5",
							label: __(
								"S",
								"ultimate-addons-for-gutenberg"
							),
							tooltip: __(
								"Narrow (5px)",
								"ultimate-addons-for-gutenberg"
							),
						},
						{
							value: "15",
							label: __(
								"M",
								"ultimate-addons-for-gutenberg"
							),
							tooltip: __(
								"Extended (15px)",
								"ultimate-addons-for-gutenberg"
							),
						},
						{
							value: "20",
							label: __(
								"L",
								"ultimate-addons-for-gutenberg"
							),
							tooltip: __(
								"Wide (20px)",
								"ultimate-addons-for-gutenberg"
							),
						},
						{
							value: "30",
							label: __(
								"XL",
								"ultimate-addons-for-gutenberg"
							),
							tooltip: __(
								"Wider (30px)",
								"ultimate-addons-for-gutenberg"
							),
						},
					]}
					showIcons={false}
					help={__(
						"Note: The individual Column Gap can be managed from Column Settings.",
						"ultimate-addons-for-gutenberg"
					)}
				/>
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
				<ToggleControl
					label={ __(
						'Reverse Columns (Tablet & Mobile)',
						'ultimate-addons-for-gutenberg'
					) }
					checked={ reverseTablet }
					onChange={ () =>
						setAttributes( { reverseTablet: ! reverseTablet } )
					}
				/>
				<ToggleControl
					label={ __(
						'Reverse Columns (Mobile)',
						'ultimate-addons-for-gutenberg'
					) }
					checked={ reverseMobile }
					onChange={ () =>
						setAttributes( { reverseMobile: ! reverseMobile } )
					}
				/>
			</PanelBody>
		);
	};
	const spacingSettings = () => {
		return (
			<PanelBody title={ __( 'Spacing' ) } initialOpen={ false }>
				<SpacingControl
					{...props.parentProps}
					label={__("Padding", "ultimate-addons-for-gutenberg")}
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
					attributes={attributes}
					setAttributes={setAttributes}
					link={{
						value: paddingLink,
						label: "paddingLink",
					}}
				/>
				<SpacingControl
					{...props.parentProps}
					label={__("Margin", "ultimate-addons-for-gutenberg")}
					valueTop={{
						value: topMarginDesktop,
						label: "topMarginDesktop",
					}}
					valueRight={{
						value: rightMarginDesktop,
						label: "rightMarginDesktop",
					}}
					valueBottom={{
						value: bottomMarginDesktop,
						label: "bottomMarginDesktop",
					}}
					valueLeft={{
						value: leftMarginDesktop,
						label: "leftMarginDesktop",
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
					attributes={attributes}
					setAttributes={setAttributes}
					link={{
						value: marginLink,
						label: "marginLink",
					}}
				/>
			</PanelBody>
		);
	};
	const backgroundSettings = () => {
		return (
			<PanelBody
				title={ __( 'Background', 'ultimate-addons-for-gutenberg' ) }
				initialOpen={ false }
			>
				<Background
					setAttributes={setAttributes}
					backgroundGradient={{
						value: gradientValue,
						label: "gradientValue",
					}}
					backgroundImageColor={{
						value: backgroundImageColor,
						label: "backgroundImageColor",
					}}
					overlayType={{
						value: overlayType,
						label: "overlayType",
					}}
					backgroundSize={{
						value: backgroundSize,
						label:"backgroundSize",
					}}
					backgroundRepeat={{
						value: backgroundRepeat,
						label: "backgroundRepeat",
					}}
					backgroundAttachment={{
						value: backgroundAttachment,
						label: "backgroundAttachment",
					}}
					backgroundPosition={{
						value: backgroundPosition,
						label: "backgroundPosition",
					}}
					backgroundImage={{
						value: backgroundImage,
						label: "backgroundImage",
					}}
					backgroundColor={{
						value: backgroundColor,
						label: "backgroundColor",
					}}
					backgroundType={{
						value: backgroundType,
						label: "backgroundType",
					}}
					backgroundOpacity={{
						value: backgroundOpacity,
						label: "backgroundOpacity",
					}}
					backgroundVideoType={{
						value: true,
					}}
					backgroundVideo={{
						value: backgroundVideo,
						label: "backgroundVideo",
					}}
					backgroundVideoColor={{
						value: backgroundVideoColor,
						label: "backgroundVideoColor",
					}}
					backgroundVideoOpacity={{
						value: backgroundVideoOpacity,
						label: "backgroundVideoOpacity",
					}}
					{...props.parentProps}
				/>
			</PanelBody>
		);
	};
	const shapeDividersSettings = () => {
		const dividers = [
			{
				value: 'none',
				label: __( 'None', 'ultimate-addons-for-gutenberg' ),
			},
			{
				value: 'tilt',
				label: __( 'Tilt', 'ultimate-addons-for-gutenberg' ),
			},
			{
				value: 'mountains',
				label: __( 'Mountains', 'ultimate-addons-for-gutenberg' ),
			},
			{
				value: 'wave_brush',
				label: __( 'Wave Brush', 'ultimate-addons-for-gutenberg' ),
			},
			{
				value: 'waves',
				label: __( 'Waves', 'ultimate-addons-for-gutenberg' ),
			},
			{
				value: 'wave_pattern',
				label: __( 'Waves Pattern', 'ultimate-addons-for-gutenberg' ),
			},
			{
				value: 'triangle',
				label: __( 'Triangle', 'ultimate-addons-for-gutenberg' ),
			},
			{
				value: 'drops',
				label: __( 'Drops', 'ultimate-addons-for-gutenberg' ),
			},
			{
				value: 'clouds',
				label: __( 'Clouds', 'ultimate-addons-for-gutenberg' ),
			},
			{
				value: 'zigzag',
				label: __( 'ZigZag', 'ultimate-addons-for-gutenberg' ),
			},
			{
				value: 'pyramids',
				label: __( 'Pyramids', 'ultimate-addons-for-gutenberg' ),
			},
			{
				value: 'triangle_asymmetrical',
				label: __(
					'Triangle Asymmetrical',
					'ultimate-addons-for-gutenberg'
				),
			},
			{
				value: 'tilt_opacity',
				label: __( 'Tilt Opacity', 'ultimate-addons-for-gutenberg' ),
			},
			{
				value: 'fan_opacity',
				label: __( 'Fan Opacity', 'ultimate-addons-for-gutenberg' ),
			},
			{
				value: 'curve',
				label: __( 'Curve', 'ultimate-addons-for-gutenberg' ),
			},
			{
				value: 'curve_asymmetrical',
				label: __(
					'Curve Asymmetrical',
					'ultimate-addons-for-gutenberg'
				),
			},
			{
				value: 'curve_reverse',
				label: __( 'Curve Reverse', 'ultimate-addons-for-gutenberg' ),
			},
			{
				value: 'curve_asym_reverse',
				label: __(
					'Curve Asymmetrical Reverse',
					'ultimate-addons-for-gutenberg'
				),
			},
			{
				value: 'arrow',
				label: __( 'Arrow', 'ultimate-addons-for-gutenberg' ),
			},
			{
				value: 'arrow_split',
				label: __( 'Arrow Split', 'ultimate-addons-for-gutenberg' ),
			},
			{
				value: 'book',
				label: __( 'Book', 'ultimate-addons-for-gutenberg' ),
			},
		];

		const topSettings = (
			<>
				<SelectControl
					label={ __( 'Type', 'ultimate-addons-for-gutenberg' ) }
					value={ topType }
					onChange={ ( value ) =>
						setAttributes( { topType: value } )
					}
					options={ dividers }
				/>
				{ topType != 'none' && (
					<>
						 <AdvancedPopColorControl
							label={__(
								"Color",
								"ultimate-addons-for-gutenberg"
							)}
							colorValue={topColor}
							onColorChange={(value) =>
								setAttributes({ topColor: value })
							}
						/>
						<Range
							label={__(
								'Opacity',
								"ultimate-addons-for-gutenberg"
							)}
							setAttributes={setAttributes}
							value={topDividerOpacity}
							onChange={(value) =>
								setAttributes({ topDividerOpacity: value })
							}
							min={ 0 }
							max={ 100 }
							displayUnit={false}
						/>
						<Range
							label={__(
								'Width',
								"ultimate-addons-for-gutenberg"
							)}
							setAttributes={setAttributes}
							value={topWidth}
							onChange={(value) =>
								setAttributes({ topWidth: value })
							}
							min={ 100 }
							max={ 2000 }
							displayUnit={false}
						/>
						<ResponsiveSlider
							label={__(
								"Height",
								"ultimate-addons-for-gutenberg"
							)}
							data={{
								desktop: {
									value: topHeight,
									label: "topHeight",
								},
								tablet: {
									value: topHeightTablet,
									label: "topHeightTablet",
								},
								mobile: {
									value: topHeightMobile,
									label: "topHeightMobile",
								},
							}}
							min={ 0 }
							max={ 500 }
							displayUnit={false}
							setAttributes={setAttributes}
						/>
						<ToggleControl
							label={ __(
								'Flip',
								'ultimate-addons-for-gutenberg'
							) }
							checked={ topFlip }
							onChange={ () =>
								setAttributes( { topFlip: ! topFlip } )
							}
						/>
						<ToggleControl
							label={ __(
								'Bring To Front',
								'ultimate-addons-for-gutenberg'
							) }
							checked={ topContentAboveShape }
							onChange={ () =>
								setAttributes( {
									topContentAboveShape: ! topContentAboveShape,
								} )
							}
						/>
					</>
				) }
			</>
		);

		const bottomSettings = (
			<>
				<SelectControl
					label={ __( 'Type', 'ultimate-addons-for-gutenberg' ) }
					value={ bottomType }
					onChange={ ( value ) =>
						setAttributes( { bottomType: value } )
					}
					options={ dividers }
				/>
				{ bottomType != 'none' && (
					<>
						<AdvancedPopColorControl
							label={__(
								"Color",
								"ultimate-addons-for-gutenberg"
							)}
							colorValue={bottomColor}
							onColorChange={(value) =>
								setAttributes({ bottomColor: value })
							}
						/>
						<Range
							label={__(
								"Opacity",
								"ultimate-addons-for-gutenberg"
							)}
							setAttributes={setAttributes}
							value={bottomDividerOpacity}
							onChange={(value) =>
								setAttributes({ bottomDividerOpacity: value })
							}
							min={0}
							max={100}
							displayUnit={false}
						/>
						<Range
							label={__(
								"Width",
								"ultimate-addons-for-gutenberg"
							)}
							setAttributes={setAttributes}
							value={bottomWidth}
							onChange={(value) =>
								setAttributes({ bottomWidth: value })
							}
							min={100}
							max={2000}
							displayUnit={false}
						/>
						<ResponsiveSlider
							label={__(
								"Height",
								"ultimate-addons-for-gutenberg"
							)}
							data={{
								desktop: {
									value: bottomHeight,
									label: "bottomHeight",
								},
								tablet: {
									value: bottomHeightTablet,
									label: "bottomHeightTablet",
								},
								mobile: {
									value: bottomHeightMobile,
									label: "bottomHeightMobile",
								},
							}}
							min={ 0 }
							max={ 500 }
							displayUnit={false}
							setAttributes={setAttributes}
						/>
						<ToggleControl
							label={ __(
								'Flip',
								'ultimate-addons-for-gutenberg'
							) }
							checked={ bottomFlip }
							onChange={ () =>
								setAttributes( { bottomFlip: ! bottomFlip } )
							}
						/>
						<ToggleControl
							label={ __(
								'Bring To Front',
								'ultimate-addons-for-gutenberg'
							) }
							checked={ bottomContentAboveShape }
							onChange={ () =>
								setAttributes( {
									bottomContentAboveShape: ! bottomContentAboveShape,
								} )
							}
						/>
					</>
				) }
			</>
		);

		return (
			<PanelBody
				title={ __(
					'Shape Dividers',
					'ultimate-addons-for-gutenberg'
				) }
				initialOpen={ false }
			>
				<UAGTabsControl
					tabs={[
						{
							name: "top",
							title: __(
								"Top",
								"ultimate-addons-for-gutenberg"
							),
						},
						{
							name: "bottom",
							title: __(
								"Bottom",
								"ultimate-addons-for-gutenberg"
							),
						},
					]}
					top={topSettings}
					bottom={bottomSettings}
					disableBottomSeparator={true}
				/>
			</PanelBody>
		);
	};
	const borderSettings = () => {
		return (
			<PanelBody
				title={ __( 'Border', 'ultimate-addons-for-gutenberg' ) }
				initialOpen={ false }
			>
				<Border
					setAttributes={setAttributes}
					borderStyle={{
						value: borderStyle,
						label: "borderStyle",
						title: __(
							"Style",
							"ultimate-addons-for-gutenberg"
						),
					}}
					borderWidth={{
						value: borderWidth,
						label: "borderWidth",
						title: __(
							"Width",
							"ultimate-addons-for-gutenberg"
						),
					}}
					borderRadius={{
						value: borderRadius,
						label: "borderRadius",
						title: __(
							"Radius",
							"ultimate-addons-for-gutenberg"
						),
					}}
					borderColor={{
						value: borderColor,
						label: "borderColor",
						title: __(
							"Color",
							"ultimate-addons-for-gutenberg"
						),
					}}
					borderHoverColor={{
						value: borderHoverColor,
						label: "borderHoverColor",
						title: __(
							"Hover Color",
							"ultimate-addons-for-gutenberg"
						),
					}}
				/>
				<BoxShadowControl
					setAttributes={setAttributes}
					label={__(
						"Box Shadow",
						"ultimate-addons-for-gutenberg"
					)}
					boxShadowColor={{
						value: boxShadowColor,
						label: "boxShadowColor",
						title: __(
							"Color",
							"ultimate-addons-for-gutenberg"
						),
					}}
					boxShadowHOffset={{
						value: boxShadowHOffset,
						label:  "boxShadowHOffset",
						title: __(
							"Horizontal",
							"ultimate-addons-for-gutenberg"
						),
					}}
					boxShadowVOffset={{
						value: boxShadowVOffset,
						label:   "boxShadowVOffset",
						title: __(
							"Vertical",
							"ultimate-addons-for-gutenberg"
						),
					}}
					boxShadowBlur={{
						value: boxShadowBlur,
						label:  "boxShadowBlur",
						title: __(
							"Blur",
							"ultimate-addons-for-gutenberg"
						),
					}}
					boxShadowSpread={{
						value: boxShadowSpread,
						label:   "boxShadowSpread",
						title: __(
							"Spread",
							"ultimate-addons-for-gutenberg"
						),
					}}
					boxShadowPosition={{
						value: boxShadowPosition,
						label:   "boxShadowPosition",
						title: __(
							"Position",
							"ultimate-addons-for-gutenberg"
						),
					}}
				/>
			</PanelBody>
		);
	};

	return (
		<Suspense fallback={ lazyLoader() }>
			{ blockControlSettings() }
			<InspectorControls>
			<InspectorTabs>
				<InspectorTab {...UAGTabs.general}>
				{ layoutSettings() }
				</InspectorTab>
				<InspectorTab {...UAGTabs.style}>
				{ shapeDividersSettings() }
				{ backgroundSettings() }
				{ borderSettings() }
				{ spacingSettings() }
				</InspectorTab>
				<InspectorTab {...UAGTabs.advance}></InspectorTab>
			</InspectorTabs>
		</InspectorControls>
		</Suspense>
	);
};

export default React.memo( Settings );
