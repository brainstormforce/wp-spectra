import { __ } from '@wordpress/i18n';
import renderSVG from '@Controls/renderIcon';
import React, { Suspense } from 'react';
import lazyLoader from '@Controls/lazy-loader';
import TypographyControl from '@Components/typography';
import FontIconPicker from '@fonticonpicker/react-fonticonpicker';
import WebfontLoader from '@Components/typography/fontloader';
import AdvancedPopColorControl from "../../components/color-control/advanced-pop-color-control.js";
import ResponsiveSlider from "../../components/responsive-slider";
import Border from "../../components/border";
import SpacingControl from "../../components/spacing-control";
import Range from "../../components/range/Range.js";
import InspectorTabs from "../../components/inspector-tabs/InspectorTabs.js";
import InspectorTab from "../../components/inspector-tabs/InspectorTab.js";

import {
	BlockControls,
	BlockAlignmentToolbar,
	InspectorControls,
} from '@wordpress/block-editor';

import {
	PanelBody,
	PanelRow,
	SelectControl,
	ToggleControl,
} from '@wordpress/components';

const Settings = ( props ) => {
	props = props.parentProps;

	const { attributes, setAttributes, deviceType } = props;

	const {
		align,
		disableBullets,
		makeCollapsible,
		initialCollapse,
		icon,
		iconColor,
		bulletColor,
		iconSize,
		smoothScroll,
		smoothScrollOffset,
		smoothScrollDelay,
		scrollToTop,
		scrollToTopColor,
		scrollToTopBgColor,
		customWidth,
		widthDesktop,
		widthTablet,
		widthMobile,
		widthTypeMobile,
		widthTypeTablet,
		widthTypeDesktop,
		tColumnsDesktop,
		tColumnsTablet,
		tColumnsMobile,
		backgroundColor,
		linkColor,
		linkHoverColor,
		headingColor,
		paddingTypeMobile,
		paddingTypeTablet,
		paddingTypeDesktop,
		topPadding,
		rightPadding,
		bottomPadding,
		leftPadding,
		topPaddingTablet,
		rightPaddingTablet,
		bottomPaddingTablet,
		leftPaddingTablet,
		topPaddingMobile,
		rightPaddingMobile,
		bottomPaddingMobile,
		leftPaddingMobile,
		marginLink,
		paddingLink,
		headingBottom,
		contentPaddingDesktop,
		contentPaddingTablet,
		contentPaddingMobile,
		contentPaddingTypeMobile,
		contentPaddingTypeTablet,
		contentPaddingTypeDesktop,
		topMargin,
		rightMargin,
		bottomMargin,
		leftMargin,
		topMarginTablet,
		rightMarginTablet,
		bottomMarginTablet,
		leftMarginTablet,
		topMarginMobile,
		rightMarginMobile,
		bottomMarginMobile,
		leftMarginMobile,
		marginTypeMobile,
		marginTypeTablet,
		marginTypeDesktop,
		borderStyle,
		borderWidth,
		borderRadius,
		borderColor,
		borderHoverColor,
		loadGoogleFonts,
		fontFamily,
		fontWeight,
		fontSubset,
		fontSize,
		fontSizeType,
		fontSizeTablet,
		fontSizeMobile,
		lineHeightType,
		lineHeight,
		lineHeightTablet,
		lineHeightMobile,
		headingLoadGoogleFonts,
		headingFontFamily,
		headingFontWeight,
		headingFontSubset,
		headingFontSize,
		headingFontSizeType,
		headingFontSizeTablet,
		headingFontSizeMobile,
		headingLineHeightType,
		headingLineHeight,
		headingLineHeightTablet,
		headingLineHeightMobile,
		mappingHeaders,
		headingAlignment,
	} = attributes;

	const getIcon = ( value ) => {
		props.setAttributes( { icon: value } );
	};

	const iconProps = {
		icons: wp.UAGBSvgIcons,
		value: icon,
		onChange: getIcon,
		isMulti: false,
		renderFunc: renderSVG,
		noSelectedPlaceholder: __(
			'Select Icon',
			'ultimate-addons-for-gutenberg'
		),
	};

	let loadGFonts;
	let headingloadGFonts;

	if ( loadGoogleFonts == true ) {
		const config = {
			google: {
				families: [
					fontFamily + ( fontWeight ? ':' + fontWeight : '' ),
				],
			},
		};

		loadGFonts = <WebfontLoader config={ config }></WebfontLoader>;
	}

	if ( headingLoadGoogleFonts == true ) {
		const headingconfig = {
			google: {
				families: [
					headingFontFamily +
						( headingFontWeight ? ':' + headingFontWeight : '' ),
				],
			},
		};

		headingloadGFonts = (
			<WebfontLoader config={ headingconfig }></WebfontLoader>
		);
	}

	const getGeneralPanelBody = () => {
		return (
			<PanelBody
				title={ __( 'General', 'ultimate-addons-for-gutenberg' ) }
				initialOpen={ true }
			>
				<h2>
					{ __(
						'Select the heading to consider when generating the table',
						'ultimate-addons-for-gutenberg'
					) }
				</h2>
				{ mappingHeaders.map( ( a, i ) => (
					<PanelRow key={ i }>
						<label htmlFor={ `ub_toggle_h${ i + 1 }` }>{ `H${
							i + 1
						}` }</label>
						<ToggleControl
							id={ `ub_toggle_h${ i + 1 }` }
							checked={ a }
							onChange={ () =>
								setAttributes( {
									mappingHeaders: [
										...mappingHeaders.slice( 0, i ),
										! mappingHeaders[ i ],
										...mappingHeaders.slice( i + 1 ),
									],
								} )
							}
						/>
					</PanelRow>
				) ) }
			</PanelBody>
		);
	};

	const getScrollPanelBody = () => {
		return (
			<PanelBody
				title={ __( 'Scroll', 'ultimate-addons-for-gutenberg' ) }
				initialOpen={ false }
			>
				<ToggleControl
					label={ __(
						'Smooth Scroll',
						'ultimate-addons-for-gutenberg'
					) }
					checked={ smoothScroll }
					help={ __(
						'This will be in Action only in Front End.',
						'ultimate-addons-for-gutenberg'
					) }
					onChange={ () =>
						setAttributes( { smoothScroll: ! smoothScroll } )
					}
				/>
				{ smoothScroll && (
					<>
						<Range
							label={__(
								'Smooth Scroll Offset (px)',
								"ultimate-addons-for-gutenberg"
							)}
							setAttributes={setAttributes}
							value={smoothScrollOffset}
							onChange={(value) =>
								setAttributes({ smoothScrollOffset: value })
							}
							min={0}
							max={1000}
							displayUnit={false}
						/>
						<Range
							label={__(
								'Smooth Scroll Offset (px)',
								"ultimate-addons-for-gutenberg"
							)}
							setAttributes={setAttributes}
							value={smoothScrollDelay}
							onChange={(value) =>
								setAttributes({ smoothScrollDelay: value })
							}
							min={100}
							max={5000}
							displayUnit={false}
						/>
					</>
				) }
				<hr className="uagb-editor__separator" />
				<ToggleControl
					label={ __(
						'Show Scroll To Top',
						'ultimate-addons-for-gutenberg'
					) }
					checked={ scrollToTop }
					help={ __(
						'This will add a Scroll to Top arrow at the bottom of page.',
						'ultimate-addons-for-gutenberg'
					) }
					onChange={ () =>
						setAttributes( { scrollToTop: ! scrollToTop } )
					}
				/>
				{ scrollToTop && (
					<>
						<AdvancedPopColorControl
							label={__("Icon Color", "ultimate-addons-for-gutenberg")}
							colorValue={scrollToTopColor ? scrollToTopColor : ""}
							colorDefault={""}
							onColorChange={(value) =>
								setAttributes({ scrollToTopColor: value })
							}
							onColorClassChange={(value) =>
								setAttributes({ colorClass: value })
							}
						/>
						<AdvancedPopColorControl
							label={__("Background Color", "ultimate-addons-for-gutenberg")}
							colorValue={scrollToTopBgColor ? scrollToTopBgColor : ""}
							colorDefault={""}
							onColorChange={(value) =>
								setAttributes({ scrollToTopBgColor: value })
							}
							onColorClassChange={(value) =>
								setAttributes({ colorClass: value })
							}
						/>
					</>
				) }
			</PanelBody>
		);
	};

	const getContentPanelBody = () => {
		return (
			<PanelBody
				title={ __( 'Content', 'ultimate-addons-for-gutenberg' ) }
				initialOpen={ false }
			>
				<h2>{ __( 'Heading', 'ultimate-addons-for-gutenberg' ) }</h2>
				<SelectControl
					label={ __( 'Alignment', 'ultimate-addons-for-gutenberg' ) }
					value={ headingAlignment }
					onChange={ ( value ) =>
						setAttributes( { headingAlignment: value } )
					}
					options={ [
						{
							value: 'left',
							label: __(
								'Left',
								'ultimate-addons-for-gutenberg'
							),
						},
						{
							value: 'center',
							label: __(
								'Center',
								'ultimate-addons-for-gutenberg'
							),
						},
						{
							value: 'right',
							label: __(
								'Right',
								'ultimate-addons-for-gutenberg'
							),
						},
					] }
				/>
				<Range
					label={__(
						'Bottom Space',
						"ultimate-addons-for-gutenberg"
					)}
					setAttributes={setAttributes}
					value={headingBottom}
					onChange={(value) =>
						setAttributes({ headingBottom: value })
					}
					min={0}
					max={50}
					displayUnit={false}
				/>
				<TypographyControl
					label={ __(
						'Typography',
						'ultimate-addons-for-gutenberg'
					) }
					attributes={ attributes }
					setAttributes={ setAttributes }
					loadGoogleFonts={ {
						value: headingLoadGoogleFonts,
						label: 'headingLoadGoogleFonts',
					} }
					fontFamily={ {
						value: headingFontFamily,
						label: 'headingFontFamily',
					} }
					fontWeight={ {
						value: headingFontWeight,
						label: 'headingFontWeight',
					} }
					fontSubset={ {
						value: headingFontSubset,
						label: 'headingFontSubset',
					} }
					fontSizeType={ {
						value: headingFontSizeType,
						label: 'headingFontSizeType',
					} }
					fontSize={ {
						value: headingFontSize,
						label: 'headingFontSize',
					} }
					fontSizeMobile={ {
						value: headingFontSizeMobile,
						label: 'headingFontSizeMobile',
					} }
					fontSizeTablet={ {
						value: headingFontSizeTablet,
						label: 'headingFontSizeTablet',
					} }
					lineHeightType={ {
						value: headingLineHeightType,
						label: 'headingLineHeightType',
					} }
					lineHeight={ {
						value: headingLineHeight,
						label: 'headingLineHeight',
					} }
					lineHeightMobile={ {
						value: headingLineHeightMobile,
						label: 'headingLineHeightMobile',
					} }
					lineHeightTablet={ {
						value: headingLineHeightTablet,
						label: 'headingLineHeightTablet',
					} }
				/>
				<AdvancedPopColorControl
					label={__("Heading Color", "ultimate-addons-for-gutenberg")}
					colorValue={headingColor ? headingColor : ""}
					colorDefault={""}
					onColorChange={(value) =>
						setAttributes({ headingColor: value })
					}
					onColorClassChange={(value) =>
						setAttributes({ colorClass: value })
					}
				/>
				<hr className="uagb-editor__separator" />
				<h2>
					{ __( 'Collapsible', 'ultimate-addons-for-gutenberg' ) }
				</h2>
				<ToggleControl
					label={ __(
						'Make Content Collapsible',
						'ultimate-addons-for-gutenberg'
					) }
					checked={ makeCollapsible }
					onChange={ () =>
						setAttributes( {
							makeCollapsible: ! makeCollapsible,
						} )
					}
				/>
				{ makeCollapsible && (
					<>
						<ToggleControl
							label={ __(
								'Keep Collapsed Initially',
								'ultimate-addons-for-gutenberg'
							) }
							checked={ initialCollapse }
							onChange={ () =>
								setAttributes( {
									initialCollapse: ! initialCollapse,
								} )
							}
						/>
						<FontIconPicker { ...iconProps } />
						<Range
							label={__(
								'Icon Size',
								"ultimate-addons-for-gutenberg"
							)}
							setAttributes={setAttributes}
							value={iconSize}
							onChange={(value) =>
								setAttributes({ iconSize: value })
							}
							min={0}
							max={300}
							displayUnit={false}
						/>
						<AdvancedPopColorControl
							label={__("Icon Color", "ultimate-addons-for-gutenberg")}
							colorValue={iconColor ? iconColor : ""}
							colorDefault={""}
							onColorChange={(value) =>
								setAttributes({ iconColor: value })
							}
							onColorClassChange={(value) =>
								setAttributes({ colorClass: value })
							}
						/>
					</>
				) }
				<hr className="uagb-editor__separator" />
				<h2>{ __( 'Content', 'ultimate-addons-for-gutenberg' ) }</h2>
				<ToggleControl
					label={ __(
						'Disable Bullet Points',
						'ultimate-addons-for-gutenberg'
					) }
					checked={ disableBullets }
					onChange={ () =>
						setAttributes( {
							disableBullets: ! disableBullets,
						} )
					}
				/>
				{ ! disableBullets && (
					<>
						<AdvancedPopColorControl
							label={__("Bullet Points Color", "ultimate-addons-for-gutenberg")}
							colorValue={bulletColor ? bulletColor : ""}
							colorDefault={""}
							onColorChange={(value) =>
								setAttributes({ bulletColor: value })
							}
							onColorClassChange={(value) =>
								setAttributes({ colorClass: value })
							}
						/>
					</>
				) }
				<ResponsiveSlider
					label={__(
						"Gap Between Lists",
						"ultimate-addons-for-gutenberg"
					)}
					data={{
						desktop: {
							value: contentPaddingDesktop,
							label: "contentPaddingDesktop",
							unit: {
								value: contentPaddingTypeDesktop,
								label: "contentPaddingTypeDesktop",
							}
						},
						tablet: {
							value: contentPaddingTablet,
							label: "contentPaddingTablet",
							unit:{
								value: contentPaddingTypeTablet,
								label: "contentPaddingTypeTablet",
							}
						},
						mobile: {
							value: contentPaddingMobile,
							label: "contentPaddingMobile",
							unit:{
								value: contentPaddingTypeMobile,
								label: "contentPaddingTypeMobile",
							}
						},
					}}
					min={0}
					max={100}
					units={[
						{
							name: __(
								"Pixel",
								"ultimate-addons-for-gutenberg"
							),
							unitValue: "px",
						},
						{
							name: __("%", "ultimate-addons-for-gutenberg"),
							unitValue: "%",
						},
					]}
					setAttributes={setAttributes}
				/>

				<TypographyControl
					label={ __(
						'Typography',
						'ultimate-addons-for-gutenberg'
					) }
					attributes={ attributes }
					setAttributes={ setAttributes }
					loadGoogleFonts={ {
						value: loadGoogleFonts,
						label: 'loadGoogleFonts',
					} }
					fontFamily={ {
						value: fontFamily,
						label: 'fontFamily',
					} }
					fontWeight={ {
						value: fontWeight,
						label: 'fontWeight',
					} }
					fontSubset={ {
						value: fontSubset,
						label: 'fontSubset',
					} }
					fontSizeType={ {
						value: fontSizeType,
						label: 'fontSizeType',
					} }
					fontSize={ { value: fontSize, label: 'fontSize' } }
					fontSizeMobile={ {
						value: fontSizeMobile,
						label: 'fontSizeMobile',
					} }
					fontSizeTablet={ {
						value: fontSizeTablet,
						label: 'fontSizeTablet',
					} }
					lineHeightType={ {
						value: lineHeightType,
						label: 'lineHeightType',
					} }
					lineHeight={ {
						value: lineHeight,
						label: 'lineHeight',
					} }
					lineHeightMobile={ {
						value: lineHeightMobile,
						label: 'lineHeightMobile',
					} }
					lineHeightTablet={ {
						value: lineHeightTablet,
						label: 'lineHeightTablet',
					} }
				/>
				<AdvancedPopColorControl
					label={__("Content Color", "ultimate-addons-for-gutenberg")}
					colorValue={linkColor ? linkColor : ""}
					colorDefault={""}
					onColorChange={(value) =>
						setAttributes({ linkColor: value })
					}
					onColorClassChange={(value) =>
						setAttributes({ colorClass: value })
					}
				/>
				<AdvancedPopColorControl
					label={__("Content Hover Color", "ultimate-addons-for-gutenberg")}
					colorValue={linkHoverColor ? linkHoverColor : ""}
					colorDefault={""}
					onColorChange={(value) =>
						setAttributes({ linkHoverColor: value })
					}
					onColorClassChange={(value) =>
						setAttributes({ colorClass: value })
					}
				/>
			</PanelBody>
		);
	};
	
	let maxDesk = ( ( '%' == widthTypeDesktop ) ? 100 : 1000 );
	let maxTab = ( ( '%' == widthTypeTablet ) ? 100 : 1000 );
	let maxMob = ( ( '%' == widthTypeMobile ) ? 100 : 1000 );

	const getStylePanelBody = () => {
		return (
			<PanelBody
				title={ __( 'Style', 'ultimate-addons-for-gutenberg' ) }
				initialOpen={ false }
			>
				<h2>{ __( 'Background', 'ultimate-addons-for-gutenberg' ) }</h2>
				<AdvancedPopColorControl
					label={__("Background Color", "ultimate-addons-for-gutenberg")}
					colorValue={backgroundColor ? backgroundColor : ""}
					colorDefault={""}
					onColorChange={(value) =>
						setAttributes({ backgroundColor: value })
					}
					onColorClassChange={(value) =>
						setAttributes({ colorClass: value })
					}
				/>
				<hr className="uagb-editor__separator" />
				<ToggleControl
					label={ __(
						'Custom Width',
						'ultimate-addons-for-gutenberg'
					) }
					checked={ customWidth }
					onChange={ () =>
						setAttributes( { customWidth: ! customWidth } )
					}
					help={ __(
						"Table's width will be auto if this is kept off.",
						'ultimate-addons-for-gutenberg'
					) }
				/>
				{ customWidth &&
					<ResponsiveSlider
						label={__(
							"Width",
							"ultimate-addons-for-gutenberg"
						)}
						data={{
							desktop: {
								value: widthDesktop,
								label: "widthDesktop",
								unit: {
									value: widthTypeDesktop,
									label: "widthTypeDesktop",
								},
								min: 0,
								max: maxDesk,
							},
							tablet: {
								value: widthTablet,
								label: "widthTablet",
								unit: {
									value: widthTypeTablet,
									label: "widthTypeTablet",
								},
								min: 0,
								max: maxTab,						
							},
							mobile: {
								value: widthMobile,
								label: "widthMobile",
								unit: {
									value: widthTypeMobile,
									label: "widthTypeMobile",
								},
								min: 0,
								max: maxMob,
							},
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
								name: __("%", "ultimate-addons-for-gutenberg"),
								unitValue: "%",
							},
						]}
						setAttributes={setAttributes}
					/>
				}
				<ResponsiveSlider
					label={__(
						"Columns",
						"ultimate-addons-for-gutenberg"
					)}
					data={{
						desktop: {
							value: tColumnsDesktop,
							label: "tColumnsDesktop",
						},
						tablet: {
							value: tColumnsTablet,
							label: "tColumnsTablet",
						},
						mobile: {
							value: tColumnsMobile,
							label: "tColumnsMobile",
						},
					}}
					min={1}
					max={10}
					displayUnit={false}
					setAttributes={setAttributes}
				/>
				<hr className="uagb-editor__separator" />
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
						value: paddingTypeDesktop,
						label: "paddingTypeDesktop",
					}}
					mUnit={{
						value: paddingTypeMobile,
						label: "paddingTypeMobile",
					}}
					tUnit={{
						value: paddingTypeTablet,
						label: "paddingTypeTablet",
					}}
					deviceType={deviceType}
					attributes={attributes}
					setAttributes={setAttributes}
					link={{
						value: paddingLink,
						label: "paddingLink",
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
						value: marginTypeDesktop,
						label: "marginTypeDesktop",
					}}
					mUnit={{
						value: marginTypeMobile,
						label: "marginTypeMobile",
					}}
					tUnit={{
						value: marginTypeTablet,
						label: "marginTypeTablet",
					}}
					deviceType={deviceType}
					attributes={attributes}
					setAttributes={setAttributes}
					link={{
						value: marginLink,
						label: "marginLink",
					}}
				/>
				<hr className="uagb-editor__separator" />
				<h2>{ __( 'Border', 'ultimate-addons-for-gutenberg' ) }</h2>
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
			</PanelBody>
		);
	};

	return (
		<Suspense fallback={ lazyLoader() }>
			<BlockControls>
				<BlockAlignmentToolbar
					value={ align }
					onChange={ ( value ) => {
						setAttributes( { align: value } );
					} }
					controls={ [ 'left', 'center', 'right' ] }
				/>
			</BlockControls>
			<InspectorControls>
			<InspectorTabs tabs={["general", "advance"]}>
				<InspectorTab key={"general"}>
				{ getGeneralPanelBody() }
				{ getScrollPanelBody() }
				{ getContentPanelBody() }
				{ getStylePanelBody() }
				</InspectorTab>
				<InspectorTab key={"advance"}></InspectorTab>
			</InspectorTabs>
			</InspectorControls>
			{ loadGFonts }
			{ headingloadGFonts }
		</Suspense>
	);
};

export default React.memo( Settings );
