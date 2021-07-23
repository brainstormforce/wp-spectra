/**
 * Demo Control Block.
 */

// Import block dependencies and components
import classnames from "classnames";
import styling from "./styling";
import renderSVG from "@Controls/renderIcon";
import FontIconPicker from "@fonticonpicker/react-fonticonpicker";
import UAGBIcon from "@Controls/UAGBIcon.json";
import UAGB_Block_Icons from "@Controls/block-icons";
import AdvancedPopColorControl from "../../components/color-control/advanced-pop-color-control.js";
import InspectorTabs from "../../components/inspector-tabs/InspectorTabs.js";
import InspectorTab from "../../components/inspector-tabs/InspectorTab.js";
import SpacingControl from "../../components/spacing-control";
import Range from "../../components/range/Range.js";
import GradientSettings from "../../components/gradient-settings";
import MultiButtonsControl from "../../components/multi-buttons-control";
import BoxShadowControl from "../../components/box-shadow";
import Background from "../../components/background";
import Border from "../../components/border";

// Import all of our Text Options requirements.
import TypographyControl from "../../components/typography";

// Import Web font loader for google fonts.
import WebfontLoader from "../../components/typography/fontloader";

// Setup the block

import { __ } from "@wordpress/i18n";

const {
	AlignmentToolbar,
	BlockControls,
	InspectorControls,
	RichText,
	ColorPalette,
	MediaUpload,
	PanelColorSettings,
} = wp.blockEditor;

const {
	PanelBody,
	RangeControl,
	SelectControl,
	ToggleControl,
	BaseControl,
	Button,
	Dashicon,
	ButtonGroup,
	Icon,
} = wp.components;

const { Component, Fragment } = wp.element;

let svg_icons = Object.keys(UAGBIcon);
const { withSelect } = wp.data;
class UAGBInlineNoticeEdit extends Component {
	constructor() {
		super(...arguments);
		this.update_cookie_id = this.update_cookie_id.bind(this);
		this.onRemoveImage = this.onRemoveImage.bind(this);
		this.onSelectImage = this.onSelectImage.bind(this);
	}

	/*
	 * Event to set Image as null while removing.
	 */
	onRemoveImage() {
		const { setAttributes } = this.props;

		setAttributes({ backgroundImage: null });
	}

	/*
	 * Event to set Image as while adding.
	 */
	onSelectImage(media) {
		const { setAttributes } = this.props;

		if (!media || !media.url) {
			setAttributes({ backgroundImage: null });
			return;
		}

		if (!media.type || "image" != media.type) {
			return;
		}

		setAttributes({ backgroundImage: media });
	}

	update_cookie_id(value) {
		const { getCurrentPostId } = wp.data.select("core/editor");
		const post_id = getCurrentPostId().toString();
		const timestamp = new Date().getTime();

		this.props.setAttributes({ c_id: post_id + "-" + timestamp });
		this.props.setAttributes({ cookies: value });
	}

	componentDidMount() {
		// Assigning block_id in the attribute.
		this.props.setAttributes({
			block_id: this.props.clientId.substr(0, 8),
		});

		//Pushing Style tag for this block css.
		const $style = document.createElement("style");
		$style.setAttribute(
			"id",
			"uagb-demo-control-style-" + this.props.clientId.substr(0, 8)
		);
		document.head.appendChild($style);
	}

	componentDidUpdate(prevProps) {
		var element = document.getElementById(
			"uagb-demo-control-style-" + this.props.clientId.substr(0, 8)
		);

		if (null !== element && undefined !== element) {
			element.innerHTML = styling(this.props);
		}
	}

	render() {
		// Setup the attributes
		const {
			attributes: {
				block_id,
				icon,
				noticeTitle,
				noticeContent,
				noticeDismiss,
				cookies,
				close_cookie_days,
				textColor,
				titleColor,
				noticeColor,
				contentBgColor,
				noticeDismissColor,
				noticeAlignment,
				titleFontFamily,
				titleFontWeight,
				titleFontSubset,
				titleFontSizeType,
				titleLineHeightType,
				titleTransform,
				titleDecoration,
				titleFontSize,
				titleFontSizeTablet,
				titleFontSizeMobile,
				titleLineHeight,
				titleLineHeightTablet,
				titleLineHeightMobile,
				descFontFamily,
				descFontWeight,
				descFontSubset,
				descFontSize,
				descFontSizeType,
				descFontSizeTablet,
				descFontSizeMobile,
				descLineHeight,
				descLineHeightType,
				descLineHeightTablet,
				descLineHeightMobile,
				titleLoadGoogleFonts,
				descLoadGoogleFonts,
				contentVrPadding,
				contentHrPadding,
				titleVrPadding,
				titleHrPadding,
				tabletPadding,
				mobilePadding,
				padding,
				headingTag,
				layout,
				highlightWidth,
				color,
				colorClass,
				paddingUnit,
				mobilePaddingUnit,
				tabletPaddingUnit,
				paddingTop,
				paddingBottom,
				paddingLeft,
				paddingRight,
				paddingTopTablet,
				paddingRightTablet,
				paddingBottomTablet,
				paddingLeftTablet,
				paddingTopMobile,
				paddingRightMobile,
				paddingBottomMobile,
				paddingLeftMobile,
				borderStyle,
				borderWidth,
				borderRadius,
				borderColor,
				borderHoverColor,
				backgroundType,
				backgroundImage,
				backgroundColor,
				backgroundPosition,
				backgroundAttachment,
				backgroundRepeat,
				backgroundSize,
				gradientColor1,
				gradientColor2,
				gradientLocation1,
				gradientLocation2,
				gradientType,
				gradientAngle,
				gradientValue,
				backgroundOpacity,
				backgroundImageColor,
				overlayType,
				gradientOverlayColor1,
				gradientOverlayColor2,
				gradientOverlayType,
				gradientOverlayLocation1,
				gradientOverlayLocation2,
				gradientOverlayAngle,
				columnGap,
				boxShadowColor,
				boxShadowHOffset,
				boxShadowVOffset,
				boxShadowBlur,
				boxShadowSpread,
				boxShadowPosition,
				widthType,
				spacingLink,
			},
			setAttributes,
			className,
			attributes,
			deviceType,
		} = this.props;

		// Notice dismiss options
		const noticeDismissOptions = [
			{
				value: "",
				label: __("Allow Always", "ultimate-addons-for-gutenberg"),
			},
			{
				value: "uagb-dismissable",
				label: __("Allow to Dismiss", "ultimate-addons-for-gutenberg"),
			},
		];

		let loadTitleGoogleFonts;
		let loadDescriptionGoogleFonts;

		if (true === titleLoadGoogleFonts) {
			const hconfig = {
				google: {
					families: [
						titleFontFamily +
							(titleFontWeight ? ":" + titleFontWeight : ""),
					],
				},
			};

			loadTitleGoogleFonts = (
				<WebfontLoader config={hconfig}></WebfontLoader>
			);
		}

		if (true === descLoadGoogleFonts) {
			const sconfig = {
				google: {
					families: [
						descFontFamily +
							(descFontWeight ? ":" + descFontWeight : ""),
					],
				},
			};

			loadDescriptionGoogleFonts = (
				<WebfontLoader config={sconfig}></WebfontLoader>
			);
		}

		let image_icon_html = "";

		if (noticeDismiss) {
			image_icon_html = (
				<span className="uagb-notice-dismiss">{renderSVG(icon)}</span>
			);
		}

		const inlineGeneralSettings = () => {
			return (
				<InspectorTabs>
					<InspectorTab key={"general"}>
						<PanelBody title="Alignment" initialOpen={false}>
							<MultiButtonsControl
								setAttributes={setAttributes}
								label={__(
									"Alignment",
									"ultimate-addons-for-gutenberg"
								)}
								data={{
									value: noticeAlignment,
									label: "noticeAlignment",
								}}
								className="uagb-multi-button-alignment-control"
								options={[
									{
										value: "left",
										icon: (
											<Icon
												icon={renderSVG(
													"fa fa-align-left"
												)}
											/>
										),
										tooltip: __(
											"Left",
											"ultimate-addons-for-gutenberg"
										),
									},
									{
										value: "center",
										icon: (
											<Icon
												icon={renderSVG(
													"fa fa-align-center"
												)}
											/>
										),
										tooltip: __(
											"Center",
											"ultimate-addons-for-gutenberg"
										),
									},
									{
										value: "right",
										icon: (
											<Icon
												icon={renderSVG(
													"fa fa-align-right"
												)}
											/>
										),
										tooltip: __(
											"Right",
											"ultimate-addons-for-gutenberg"
										),
									},
								]}
								showIcons={true}
							/>
						</PanelBody>
						<PanelBody title="Toggle" initialOpen={false}>
							<div className="uag-toggle-wrap">
								<ToggleControl
									checked={cookies}
									onChange={this.update_cookie_id}
									label={__(
										"Toggle off",
										"ultimate-addons-for-gutenberg"
									)}
								/>
							</div>
						</PanelBody>
						<PanelBody title="Slider" initialOpen={false}>
							<Range
								label={__(
									"Padding",
									"ultimate-addons-for-gutenberg"
								)}
								setAttributes={setAttributes}
								value={contentVrPadding}
								onChange={(value) =>
									setAttributes({ contentVrPadding: value })
								}
								min={0}
								max={100}
								unit={{
									value: paddingUnit,
									label: "paddingUnit",
								}}
							/>
						</PanelBody>
						<PanelBody title="Typography" initialOpen={false}>
							<TypographyControl
								label={__(
									"Title",
									"ultimate-addons-for-gutenberg"
								)}
								attributes={attributes}
								setAttributes={setAttributes}
								loadGoogleFonts={{
									value: titleLoadGoogleFonts,
									label: "titleLoadGoogleFonts",
								}}
								fontFamily={{
									value: titleFontFamily,
									label: "titleFontFamily",
								}}
								fontWeight={{
									value: titleFontWeight,
									label: "titleFontWeight",
								}}
								fontSubset={{
									value: titleFontSubset,
									label: "titleFontSubset",
								}}
								fontSizeType={{
									value: titleFontSizeType,
									label: "titleFontSizeType",
								}}
								fontSize={{
									value: titleFontSize,
									label: "titleFontSize",
								}}
								fontSizeMobile={{
									value: titleFontSizeMobile,
									label: "titleFontSizeMobile",
								}}
								fontSizeTablet={{
									value: titleFontSizeTablet,
									label: "titleFontSizeTablet",
								}}
								lineHeightType={{
									value: titleLineHeightType,
									label: "titleLineHeightType",
								}}
								lineHeight={{
									value: titleLineHeight,
									label: "titleLineHeight",
								}}
								lineHeightMobile={{
									value: titleLineHeightMobile,
									label: "titleLineHeightMobile",
								}}
								lineHeightTablet={{
									value: titleLineHeightTablet,
									label: "titleLineHeightTablet",
								}}
								transform={{
									value: titleTransform,
									label: "titleTransform",
								}}
								decoration={{
									value: titleDecoration,
									label: "titleDecoration",
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
						<PanelBody title="Multi Buttons" initialOpen={false}>
							<MultiButtonsControl
								setAttributes={setAttributes}
								responsive={true}
								label={__(
									"Gap",
									"ultimate-addons-for-gutenberg"
								)}
								data={{
									desktop: {
										value: columnGap,
										label: "columnGap",
									},
									tablet: {
										value: columnGap,
										label: "columnGap",
									},
									mobile: {
										value: columnGap,
										label: "columnGap",
									},
								}}
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
						</PanelBody>
						<PanelBody title="Layout" initialOpen={false}>
							<SelectControl
								label={__(
									"Types",
									"ultimate-addons-for-gutenberg"
								)}
								value={layout}
								onChange={(value) =>
									setAttributes({ layout: value })
								}
								options={[
									{
										value: "modern",
										label: __(
											"Modern",
											"ultimate-addons-for-gutenberg"
										),
									},
									{
										value: "simple",
										label: __(
											"Default",
											"ultimate-addons-for-gutenberg"
										),
									},
								]}
							/>
							{"simple" == layout && (
								<RangeControl
									label={__(
										"Highlight width",
										"ultimate-addons-for-gutenberg"
									)}
									value={highlightWidth}
									onChange={(value) =>
										setAttributes({ highlightWidth: value })
									}
									min={0}
									max={50}
									allowReset
								/>
							)}
							<h2>
								{__(
									"Primary Heading",
									"ultimate-addons-for-gutenberg"
								)}
							</h2>
							<SelectControl
								label={__("Tag")}
								value={headingTag}
								onChange={(value) =>
									setAttributes({ headingTag: value })
								}
								options={[
									{
										value: "h1",
										label: __(
											"H1",
											"ultimate-addons-for-gutenberg"
										),
									},
									{
										value: "h2",
										label: __(
											"H2",
											"ultimate-addons-for-gutenberg"
										),
									},
									{
										value: "h3",
										label: __(
											"H3",
											"ultimate-addons-for-gutenberg"
										),
									},
									{
										value: "h4",
										label: __(
											"H4",
											"ultimate-addons-for-gutenberg"
										),
									},
									{
										value: "h5",
										label: __(
											"H5",
											"ultimate-addons-for-gutenberg"
										),
									},
									{
										value: "h6",
										label: __(
											"H6",
											"ultimate-addons-for-gutenberg"
										),
									},
									{
										value: "span",
										label: __(
											"span",
											"ultimate-addons-for-gutenberg"
										),
									},
									{
										value: "p",
										label: __(
											"p",
											"ultimate-addons-for-gutenberg"
										),
									},
								]}
							/>
							<SelectControl
								label={__(
									"Notice Display",
									"ultimate-addons-for-gutenberg"
								)}
								options={noticeDismissOptions}
								value={noticeDismiss}
								onChange={(value) =>
									this.props.setAttributes({
										noticeDismiss: value,
									})
								}
							/>
							{noticeDismiss && (
								<Fragment>
									<p className="components-base-control__label">
										{__(
											"Icon",
											"ultimate-addons-for-gutenberg"
										)}
									</p>
									<FontIconPicker
										icons={svg_icons}
										renderFunc={renderSVG}
										theme="default"
										value={icon}
										onChange={(value) =>
											setAttributes({ icon: value })
										}
										isMulti={false}
										noSelectedPlaceholder={__(
											"Select Icon",
											"ultimate-addons-for-gutenberg"
										)}
									/>
								</Fragment>
							)}
							{noticeDismiss && (
								<hr className="uagb-editor__separator" />
							)}
							{noticeDismiss && (
								<ToggleControl
									label={__(
										"Enable Cookies",
										"ultimate-addons-for-gutenberg"
									)}
									checked={cookies}
									onChange={this.update_cookie_id}
								/>
							)}
							{cookies && (
								<RangeControl
									label={__(
										"Show Closed Notice After (Days)",
										"ultimate-addons-for-gutenberg"
									)}
									value={close_cookie_days}
									onChange={(value) =>
										setAttributes({
											close_cookie_days: value,
										})
									}
									min={0}
									max={50}
									allowReset
								/>
							)}
						</PanelBody>
						<PanelBody title="Spacing" initialOpen={false}>
							<SpacingControl
								{...this.props}
								label={__(
									"Padding",
									"ultimate-addons-for-gutenberg"
								)}
								valueTop={{
									value: paddingTop,
									label: "paddingTop",
								}}
								valueRight={{
									value: paddingRight,
									label: "paddingRight",
								}}
								valueBottom={{
									value: paddingBottom,
									label: "paddingBottom",
								}}
								valueLeft={{
									value: paddingLeft,
									label: "paddingLeft",
								}}
								valueTopTablet={{
									value: paddingTopTablet,
									label: "paddingTopTablet",
								}}
								valueRightTablet={{
									value: paddingRightTablet,
									label: "paddingRightTablet",
								}}
								valueBottomTablet={{
									value: paddingBottomTablet,
									label: "paddingBottomTablet",
								}}
								valueLeftTablet={{
									value: paddingLeftTablet,
									label: "paddingLeftTablet",
								}}
								valueTopMobile={{
									value: paddingTopMobile,
									label: "paddingTopMobile",
								}}
								valueRightMobile={{
									value: paddingRightMobile,
									label: "paddingRightMobile",
								}}
								valueBottomMobile={{
									value: paddingBottomMobile,
									label: "paddingBottomMobile",
								}}
								valueLeftMobile={{
									value: paddingLeftMobile,
									label: "paddingLeftMobile",
								}}
								unit={{
									value: paddingUnit,
									label: "paddingUnit",
								}}
								mUnit={{
									value: mobilePaddingUnit,
									label: "mobilePaddingUnit",
								}}
								tUnit={{
									value: tabletPaddingUnit,
									label: "tabletPaddingUnit",
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
								borderHoverColor={{
									value: borderHoverColor,
									label: __(
										"Hover Color",
										"ultimate-addons-for-gutenberg"
									),
								}}
							/>
						</PanelBody>
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
								{...this.props}
							/>
						</PanelBody>
					</InspectorTab>
					<InspectorTab key={"style"}>
						<PanelBody title="Colors" initialOpen={true}>
							<AdvancedPopColorControl
								label={__(
									"Title Color",
									"ultimate-addons-for-gutenberg"
								)}
								colorValue={titleColor ? titleColor : ""}
								colorDefault={""}
								onColorChange={(value) =>
									setAttributes({ titleColor: value })
								}
								onColorClassChange={(value) =>
									setAttributes({ colorClass: value })
								}
							/>
							<AdvancedPopColorControl
								label={__(
									"Highlight Color",
									"ultimate-addons-for-gutenberg"
								)}
								colorValue={noticeColor ? noticeColor : ""}
								colorDefault={""}
								onColorChange={(value) =>
									setAttributes({ noticeColor: value })
								}
								onColorClassChange={(value) =>
									setAttributes({ colorClass: value })
								}
							/>
							<AdvancedPopColorControl
								label={__(
									"Content Color",
									"ultimate-addons-for-gutenberg"
								)}
								colorValue={textColor ? textColor : ""}
								colorDefault={""}
								onColorChange={(value) =>
									setAttributes({ textColor: value })
								}
								onColorClassChange={(value) =>
									setAttributes({ colorClass: value })
								}
							/>
							<AdvancedPopColorControl
								label={__(
									"Content Background Color",
									"ultimate-addons-for-gutenberg"
								)}
								colorValue={
									contentBgColor ? contentBgColor : ""
								}
								colorDefault={""}
								onColorChange={(value) =>
									setAttributes({ contentBgColor: value })
								}
								onColorClassChange={(value) =>
									setAttributes({ colorClass: value })
								}
							/>
							{noticeDismiss && (
								<AdvancedPopColorControl
									label={__(
										"Dismiss Icon Color",
										"ultimate-addons-for-gutenberg"
									)}
									colorValue={
										noticeDismissColor
											? noticeDismissColor
											: ""
									}
									colorDefault={""}
									onColorChange={(value) =>
										setAttributes({
											noticeDismissColor: value,
										})
									}
									onColorClassChange={(value) =>
										setAttributes({ colorClass: value })
									}
								/>
							)}
						</PanelBody>
					</InspectorTab>
					<InspectorTab key={"advance"}></InspectorTab>
				</InspectorTabs>
			);
		};
		return (
			<Fragment>
				<BlockControls key="controls">
					<AlignmentToolbar
						value={noticeAlignment}
						onChange={(value) =>
							setAttributes({ noticeAlignment: value })
						}
					/>
				</BlockControls>
				<InspectorControls>{inlineGeneralSettings()}</InspectorControls>
				<div
					className={classnames(
						className,
						"uagb-inline_notice__outer-wrap",
						`${noticeDismiss}`,
						`uagb-inline_notice__align-${noticeAlignment}`,
						`uagb-block-${block_id}`
					)}
				>
					{image_icon_html}
					<RichText
						tagName={headingTag}
						placeholder={__(
							"Notice Title",
							"ultimate-addons-for-gutenberg"
						)}
						keepPlaceholderOnFocus
						value={noticeTitle}
						className="uagb-notice-title"
						onChange={(value) =>
							setAttributes({ noticeTitle: value })
						}
					/>
					<RichText
						tagName="div"
						multiline="p"
						placeholder={__(
							"Add notice text...",
							"ultimate-addons-for-gutenberg"
						)}
						value={noticeContent}
						className="uagb-notice-text"
						onChange={(value) =>
							setAttributes({ noticeContent: value })
						}
					/>
				</div>
				{loadTitleGoogleFonts}
				{loadDescriptionGoogleFonts}
			</Fragment>
		);
	}
}

export default withSelect((select, props) => {
	const { __experimentalGetPreviewDeviceType = null } = select(
		"core/edit-post"
	);
	let deviceType = __experimentalGetPreviewDeviceType
		? __experimentalGetPreviewDeviceType()
		: null;

	return {
		deviceType: deviceType,
	};
})(UAGBInlineNoticeEdit);
