import UAGIconPicker from "@Components/icon-picker";
import React from "react";
import TypographyControl from "@Components/typography";
import WebfontLoader from "@Components/typography/fontloader";
import { __ } from "@wordpress/i18n";
import InspectorTabs from "@Components/inspector-tabs/InspectorTabs.js";
import InspectorTab, {
	UAGTabs,
} from "@Components/inspector-tabs/InspectorTab.js";
import AdvancedPopColorControl from "@Components/color-control/advanced-pop-color-control.js";
import SpacingControl from "@Components/spacing-control";
import Range from "@Components/range/Range.js";
import MultiButtonsControl from "@Components/multi-buttons-control";
import {
	AlignmentToolbar,
	BlockControls,
	InspectorControls,
} from "@wordpress/block-editor";

import { select } from "@wordpress/data";

import { PanelBody, SelectControl, ToggleControl } from "@wordpress/components";

const Settings = (props) => {
	props = props.parentProps;
	const { attributes, setAttributes } = props;
	const {
		icon,
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
		titleTopPadding,
		titleRightPadding,
		titleBottomPadding,
		titleLeftPadding,
		titleTopPaddingTablet,
		titleRightPaddingTablet,
		titleBottomPaddingTablet,
		titleLeftPaddingTablet,
		titleTopPaddingMobile,
		titleRightPaddingMobile,
		titleBottomPaddingMobile,
		titleLeftPaddingMobile,
		titlePaddingUnit,
		mobileTitlePaddingUnit,
		tabletTitlePaddingUnit,
		titlePaddingLink,
		headingTag,
		layout,
		highlightWidth,
		contentTopPadding,
		contentRightPadding,
		contentBottomPadding,
		contentLeftPadding,
		contentTopPaddingTablet,
		contentRightPaddingTablet,
		contentBottomPaddingTablet,
		contentLeftPaddingTablet,
		contentTopPaddingMobile,
		contentRightPaddingMobile,
		contentBottomPaddingMobile,
		contentLeftPaddingMobile,
		contentPaddingUnit,
		mobileContentPaddingUnit,
		tabletContentPaddingUnit,
		contentPaddingLink,
	} = attributes;
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

		loadTitleGoogleFonts = <WebfontLoader config={hconfig}></WebfontLoader>;
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

	const updateCookieId = (value) => {
		const { getCurrentPostId } = select("core/editor");
		const post_id = getCurrentPostId().toString();
		const timestamp = new Date().getTime();

		setAttributes({ c_id: post_id + "-" + timestamp });
		setAttributes({ cookies: value });
	};

	const blockControls = () => {
		return (
			<BlockControls key="controls">
				<AlignmentToolbar
					value={noticeAlignment}
					onChange={(value) =>
						setAttributes({ noticeAlignment: value })
					}
				/>
			</BlockControls>
		);
	};

	// Notice dismiss options
	const noticeDismissOptions = [
		{
			value: "",
			label: __("Always Show", "ultimate-addons-for-gutenberg"),
		},
		{
			value: "uagb-dismissable",
			label: __("Dismissible", "ultimate-addons-for-gutenberg"),
		},
	];

	const inlineGeneralSettings = () => {
		return (
			<PanelBody initialOpen={true}>
				<MultiButtonsControl
					setAttributes={setAttributes}
					label={__("Layout", "ultimate-addons-for-gutenberg")}
					data={{
						value: layout,
						label: "layout",
					}}
					className="uagb-multi-button-alignment-control"
					options={[
						{
							value: "modern",
							label: "Modern",
							tooltip: __(
								"Modern",
								"ultimate-addons-for-gutenberg"
							),
						},
						{
							value: "simple",
							label: "Classic",
							tooltip: __(
								"Classic",
								"ultimate-addons-for-gutenberg"
							),
						},
					]}
					showIcons={false}
				/>

				{"simple" === layout && (
					<Range
						label={__(
							"Border Width",
							"ultimate-addons-for-gutenberg"
						)}
						value={highlightWidth}
						onChange={(value) =>
							setAttributes({ highlightWidth: value })
						}
						min={0}
						max={50}
						displayUnit={false}
					/>
				)}
				<MultiButtonsControl
					setAttributes={setAttributes}
					label={__(
						"Title Tag",
						"ultimate-addons-for-gutenberg"
					)}
					data={{
						value: headingTag,
						label: "headingTag",
					}}
					options={[
						{ value: "h1", label: __("H1", "ultimate-addons-for-gutenberg") },
						{ value: "h2", label: __("H2", "ultimate-addons-for-gutenberg") },
						{ value: "h3", label: __("H3", "ultimate-addons-for-gutenberg") },
						{ value: "h4", label: __("H4", "ultimate-addons-for-gutenberg") },
						{ value: "h5", label: __("H5", "ultimate-addons-for-gutenberg") },
						{ value: "h6", label: __("H6", "ultimate-addons-for-gutenberg") },
						{ value: "span", label: __("Span", "ultimate-addons-for-gutenberg")	},
						{ value: "p", label: __("P", "ultimate-addons-for-gutenberg") },
					]}
				/>
				<MultiButtonsControl
					setAttributes={setAttributes}
					label={__(
						"Notice Display",
						"ultimate-addons-for-gutenberg"
					)}
					data={{
						value: noticeDismiss,
						label: "noticeDismiss",
					}}
					options={noticeDismissOptions}
				/>
				{noticeDismiss && (
					<>
						<UAGIconPicker
							label={__("Button Icon", "ultimate-addons-for-gutenberg")}
							value={icon}
							onChange={(value) => setAttributes({ icon: value })}
						/>
					</>
				)}
				{noticeDismiss && (
					<ToggleControl
						label={__(
							"Enable Cookies",
							"ultimate-addons-for-gutenberg"
						)}
						checked={cookies}
						onChange={updateCookieId}
					/>
				)}
				{cookies && (
					<Range
						label={__(
							"Show Closed Notice After (Days)",
							"ultimate-addons-for-gutenberg"
						)}
						value={close_cookie_days}
						onChange={(value) =>
							setAttributes({ close_cookie_days: value })
						}
						min={0}
						max={50}
						displayUnit={false}
					/>
				)}
			</PanelBody>
		);
	};

	const inlineTitleSettings = () => {
		return (
			<PanelBody
				title={__("Title", "ultimate-addons-for-gutenberg")}
				initialOpen={true}
			>
				<AdvancedPopColorControl
					label={__("Color", "ultimate-addons-for-gutenberg")}
					colorValue={titleColor ? titleColor : ""}
					onColorChange={(value) =>
						setAttributes({ titleColor: value })
					}
				/>
				<AdvancedPopColorControl
					label={__(
						"Border Color",
						"ultimate-addons-for-gutenberg"
					)}
					colorValue={noticeColor ? noticeColor : ""}
					onColorChange={(value) =>
						setAttributes({ noticeColor: value })
					}
				/>
				{noticeDismiss && (
					<AdvancedPopColorControl
						label={__(
							"Dismiss Icon Color",
							"ultimate-addons-for-gutenberg"
						)}
						colorValue={
							noticeDismissColor ? noticeDismissColor : ""
						}
						onColorChange={(value) =>
							setAttributes({ noticeDismissColor: value })
						}
					/>
				)}
				<TypographyControl
					label={__("Typography", "ultimate-addons-for-gutenberg")}
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
				/>
				<SpacingControl
					{...props}
					label={__("Padding", "ultimate-addons-for-gutenberg")}
					valueTop={{
						value: titleTopPadding,
						label: "titleTopPadding",
					}}
					valueRight={{
						value: titleRightPadding,
						label: "titleRightPadding",
					}}
					valueBottom={{
						value: titleBottomPadding,
						label: "titleBottomPadding",
					}}
					valueLeft={{
						value: titleLeftPadding,
						label: "titleLeftPadding",
					}}
					valueTopTablet={{
						value: titleTopPaddingTablet,
						label: "titleTopPaddingTablet",
					}}
					valueRightTablet={{
						value: titleRightPaddingTablet,
						label: "titleRightPaddingTablet",
					}}
					valueBottomTablet={{
						value: titleBottomPaddingTablet,
						label: "titleBottomPaddingTablet",
					}}
					valueLeftTablet={{
						value: titleLeftPaddingTablet,
						label: "titleLeftPaddingTablet",
					}}
					valueTopMobile={{
						value: titleTopPaddingMobile,
						label: "titleTopPaddingMobile",
					}}
					valueRightMobile={{
						value: titleRightPaddingMobile,
						label: "titleRightPaddingMobile",
					}}
					valueBottomMobile={{
						value: titleBottomPaddingMobile,
						label: "titleBottomPaddingMobile",
					}}
					valueLeftMobile={{
						value: titleLeftPaddingMobile,
						label: "titleLeftPaddingMobile",
					}}
					unit={{
						value: titlePaddingUnit,
						label: "titlePaddingUnit",
					}}
					mUnit={{
						value: mobileTitlePaddingUnit,
						label: "mobiletitlePaddingUnit",
					}}
					tUnit={{
						value: tabletTitlePaddingUnit,
						label: "tablettitlePaddingUnit",
					}}
					attributes={attributes}
					setAttributes={setAttributes}
					link={{
						value: titlePaddingLink,
						label: "titlePaddingLink",
					}}
				/>
			</PanelBody>
		);
	};

	const inlineContentSettings = () => {
		return (
			<PanelBody
				title={__("Content", "ultimate-addons-for-gutenberg")}
				initialOpen={false}
			>
				<AdvancedPopColorControl
					label={__("Color", "ultimate-addons-for-gutenberg")}
					colorValue={textColor ? textColor : ""}
					onColorChange={(value) =>
						setAttributes({ textColor: value })
					}
				/>
				<AdvancedPopColorControl
					label={__(
						"Background Color",
						"ultimate-addons-for-gutenberg"
					)}
					colorValue={contentBgColor ? contentBgColor : ""}
					onColorChange={(value) =>
						setAttributes({ contentBgColor: value })
					}
				/>
				<TypographyControl
					label={__("Typography", "ultimate-addons-for-gutenberg")}
					attributes={attributes}
					setAttributes={setAttributes}
					loadGoogleFonts={{
						value: descLoadGoogleFonts,
						label: "descLoadGoogleFonts",
					}}
					fontFamily={{
						value: descFontFamily,
						label: "descFontFamily",
					}}
					fontWeight={{
						value: descFontWeight,
						label: "descFontWeight",
					}}
					fontSubset={{
						value: descFontSubset,
						label: "descFontSubset",
					}}
					fontSizeType={{
						value: descFontSizeType,
						label: "descFontSizeType",
					}}
					fontSize={{
						value: descFontSize,
						label: "descFontSize",
					}}
					fontSizeMobile={{
						value: descFontSizeMobile,
						label: "descFontSizeMobile",
					}}
					fontSizeTablet={{
						value: descFontSizeTablet,
						label: "descFontSizeTablet",
					}}
					lineHeightType={{
						value: descLineHeightType,
						label: "descLineHeightType",
					}}
					lineHeight={{
						value: descLineHeight,
						label: "descLineHeight",
					}}
					lineHeightMobile={{
						value: descLineHeightMobile,
						label: "descLineHeightMobile",
					}}
					lineHeightTablet={{
						value: descLineHeightTablet,
						label: "descLineHeightTablet",
					}}
				/>
				<SpacingControl
					{...props}
					label={__("Padding", "ultimate-addons-for-gutenberg")}
					valueTop={{
						value: contentTopPadding,
						label: "contentTopPadding",
					}}
					valueRight={{
						value: contentRightPadding,
						label: "contentRightPadding",
					}}
					valueBottom={{
						value: contentBottomPadding,
						label: "contentBottomPadding",
					}}
					valueLeft={{
						value: contentLeftPadding,
						label: "contentLeftPadding",
					}}
					valueTopTablet={{
						value: contentTopPaddingTablet,
						label: "contentTopPaddingTablet",
					}}
					valueRightTablet={{
						value: contentRightPaddingTablet,
						label: "contentRightPaddingTablet",
					}}
					valueBottomTablet={{
						value: contentBottomPaddingTablet,
						label: "contentBottomPaddingTablet",
					}}
					valueLeftTablet={{
						value: contentLeftPaddingTablet,
						label: "contentLeftPaddingTablet",
					}}
					valueTopMobile={{
						value: contentTopPaddingMobile,
						label: "contentTopPaddingMobile",
					}}
					valueRightMobile={{
						value: contentRightPaddingMobile,
						label: "contentRightPaddingMobile",
					}}
					valueBottomMobile={{
						value: contentBottomPaddingMobile,
						label: "contentBottomPaddingMobile",
					}}
					valueLeftMobile={{
						value: contentLeftPaddingMobile,
						label: "contentLeftPaddingMobile",
					}}
					unit={{
						value: contentPaddingUnit,
						label: "contentPaddingUnit",
					}}
					mUnit={{
						value: mobileContentPaddingUnit,
						label: "mobileContentPaddingUnit",
					}}
					tUnit={{
						value: tabletContentPaddingUnit,
						label: "tabletContentPaddingUnit",
					}}
					attributes={attributes}
					setAttributes={setAttributes}
					link={{
						value: contentPaddingLink,
						label: "contentPaddingLink",
					}}
				/>
			</PanelBody>
		);
	};

	return (
		<>
			{blockControls()}
			<InspectorControls>
				<InspectorTabs tabs={["general", "style", "advance"]}>
					<InspectorTab {...UAGTabs.general}>
						{inlineGeneralSettings()}
					</InspectorTab>
					<InspectorTab {...UAGTabs.style}>
						{inlineTitleSettings()}
						{inlineContentSettings()}
					</InspectorTab>
					<InspectorTab {...UAGTabs.advance}></InspectorTab>
				</InspectorTabs>
			</InspectorControls>
			{loadTitleGoogleFonts}
			{loadDescriptionGoogleFonts}
		</>
	);
};

export default React.memo(Settings);
