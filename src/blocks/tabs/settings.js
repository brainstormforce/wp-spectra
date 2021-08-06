import FontIconPicker from "@fonticonpicker/react-fonticonpicker";
import renderSVG from "@Controls/renderIcon";
import TypographyControl from "@Components/typography";
import ResponsiveSelectControl from "@Components/responsive-select";
import MultiButtonsControl from "../../components/multi-buttons-control";
import AdvancedPopColorControl from "../../components/color-control/advanced-pop-color-control.js";
import SpacingControl from "../../components/spacing-control";
import Range from "../../components/range/Range.js";
import Border from "../../components/border";
import InspectorTabs from "../../components/inspector-tabs/InspectorTabs.js";
import InspectorTab from "../../components/inspector-tabs/InspectorTab.js";
import React from "react";
import { __ } from "@wordpress/i18n";

import { InspectorControls } from "@wordpress/block-editor";

import {
	PanelBody,
	SelectControl,
	ToggleControl,
	Icon,
} from "@wordpress/components";

const Settings = (props) => {
	props = props.parentProps;
	const { attributes, setAttributes, deviceType } = props;

	const {
		tabsStyleD,
		tabsStyleM,
		tabsStyleT,
		tabActiveFrontend,
		tabHeaders,
		headerBgColor,
		borderStyle,
		borderWidth,
		borderRadius,
		borderColor,
		borderHoverColor,
		headerTextColor,
		activeTabBgColor,
		activeTabTextColor,
		bodyBgColor,
		bodyTextColor,
		tabTitleLeftMargin,
		tabTitleRightMargin,
		tabTitleTopMargin,
		tabTitleBottomMargin,
		tabTitleLeftMarginTablet,
		tabTitleRightMarginTablet,
		tabTitleTopMarginTablet,
		tabTitleBottomMarginTablet,
		tabTitleLeftMarginMobile,
		tabTitleRightMarginMobile,
		tabTitleTopMarginMobile,
		tabTitleBottomMarginMobile,
		tabTitleMarginUnit,
		mobiletabTitleMarginUnit,
		tablettabTitleMarginUnit,
		tabTitleMarginLink,
		tabTitleTopPadding,
		tabTitleRightPadding,
		tabTitleBottomPadding,
		tabTitleLeftPadding,
		tabTitleTopPaddingTablet,
		tabTitleRightPaddingTablet,
		tabTitleBottomPaddingTablet,
		tabTitleLeftPaddingTablet,
		tabTitleTopPaddingMobile,
		tabTitleRightPaddingMobile,
		tabTitleBottomPaddingMobile,
		tabTitleLeftPaddingMobile,
		tabTitlePaddingUnit,
		mobiletabTitlePaddingUnit,
		tablettabTitlePaddingUnit,
		tabTitlePaddingLink,
		tabBodyLeftMargin,
		tabBodyRightMargin,
		tabBodyTopMargin,
		tabBodyBottomMargin,
		tabBodyLeftMarginTablet,
		tabBodyRightMarginTablet,
		tabBodyTopMarginTablet,
		tabBodyBottomMarginTablet,
		tabBodyLeftMarginMobile,
		tabBodyRightMarginMobile,
		tabBodyTopMarginMobile,
		tabBodyBottomMarginMobile,
		tabBodyMarginUnit,
		mobiletabBodyMarginUnit,
		tablettabBodyMarginUnit,
		tabBodyMarginLink,
		tabBodyTopPadding,
		tabBodyRightPadding,
		tabBodyBottomPadding,
		tabBodyLeftPadding,
		tabBodyTopPaddingTablet,
		tabBodyRightPaddingTablet,
		tabBodyBottomPaddingTablet,
		tabBodyLeftPaddingTablet,
		tabBodyTopPaddingMobile,
		tabBodyRightPaddingMobile,
		tabBodyBottomPaddingMobile,
		tabBodyLeftPaddingMobile,
		tabBodyPaddingUnit,
		mobiletabBodyPaddingUnit,
		tablettabBodyPaddingUnit,
		tabBodyPaddingLink,
		titleLoadGoogleFonts,
		titleFontFamily,
		titleFontWeight,
		titleFontSubset,
		titleFontSizeType,
		titleFontSize,
		titleFontSizeMobile,
		titleFontSizeTablet,
		titleLineHeightType,
		titleLineHeight,
		titleLineHeightMobile,
		titleLineHeightTablet,
		titleTransform,
		titleDecoration,
		titleAlign,
		tabAlign,
		showIcon,
		icon,
		iconColor,
		iconPosition,
		iconSpacing,
		iconSize,
		activeiconColor,
	} = attributes;

	const tabStyleSettings = () => {
		let tabsStyleOptions = {
			desktop: [
				{
					value: "hstyle1",
					label: __(
						"Horizontal Style 1",
						"ultimate-addons-for-gutenberg"
					),
				},
				{
					value: "hstyle2",
					label: __(
						"Horizontal Style 2",
						"ultimate-addons-for-gutenberg"
					),
				},
				{
					value: "hstyle3",
					label: __(
						"Horizontal Style 3",
						"ultimate-addons-for-gutenberg"
					),
				},
				{
					value: "hstyle4",
					label: __(
						"Horizontal Style 4",
						"ultimate-addons-for-gutenberg"
					),
				},
				{
					value: "hstyle5",
					label: __(
						"Horizontal Style 5",
						"ultimate-addons-for-gutenberg"
					),
				},
				{
					value: "vstyle6",
					label: __(
						"Vertical Style 6",
						"ultimate-addons-for-gutenberg"
					),
				},
				{
					value: "vstyle7",
					label: __(
						"Vertical Style 7",
						"ultimate-addons-for-gutenberg"
					),
				},
				{
					value: "vstyle8",
					label: __(
						"Vertical Style 8",
						"ultimate-addons-for-gutenberg"
					),
				},
				{
					value: "vstyle9",
					label: __(
						"Vertical Style 9",
						"ultimate-addons-for-gutenberg"
					),
				},
				{
					value: "vstyle10",
					label: __(
						"Vertical Style 10",
						"ultimate-addons-for-gutenberg"
					),
				},
			],
			tablet: [
				{
					value: "hstyle1",
					label: __(
						"Horizontal Style 1",
						"ultimate-addons-for-gutenberg"
					),
				},
				{
					value: "hstyle2",
					label: __(
						"Horizontal Style 2",
						"ultimate-addons-for-gutenberg"
					),
				},
				{
					value: "hstyle3",
					label: __(
						"Horizontal Style 3",
						"ultimate-addons-for-gutenberg"
					),
				},
				{
					value: "hstyle4",
					label: __(
						"Horizontal Style 4",
						"ultimate-addons-for-gutenberg"
					),
				},
				{
					value: "hstyle5",
					label: __(
						"Horizontal Style 5",
						"ultimate-addons-for-gutenberg"
					),
				},
				{
					value: "vstyle6",
					label: __(
						"Vertical Style 6",
						"ultimate-addons-for-gutenberg"
					),
				},
				{
					value: "vstyle7",
					label: __(
						"Vertical Style 7",
						"ultimate-addons-for-gutenberg"
					),
				},
				{
					value: "vstyle8",
					label: __(
						"Vertical Style 8",
						"ultimate-addons-for-gutenberg"
					),
				},
				{
					value: "vstyle9",
					label: __(
						"Vertical Style 9",
						"ultimate-addons-for-gutenberg"
					),
				},
				{
					value: "vstyle10",
					label: __(
						"Vertical Style 10",
						"ultimate-addons-for-gutenberg"
					),
				},
			],
			mobile: [
				{
					value: "hstyle1",
					label: __(
						"Horizontal Style 1",
						"ultimate-addons-for-gutenberg"
					),
				},
				{
					value: "hstyle2",
					label: __(
						"Horizontal Style 2",
						"ultimate-addons-for-gutenberg"
					),
				},
				{
					value: "hstyle3",
					label: __(
						"Horizontal Style 3",
						"ultimate-addons-for-gutenberg"
					),
				},
				{
					value: "hstyle4",
					label: __(
						"Horizontal Style 4",
						"ultimate-addons-for-gutenberg"
					),
				},
				{
					value: "hstyle5",
					label: __(
						"Horizontal Style 5",
						"ultimate-addons-for-gutenberg"
					),
				},
				{
					value: "vstyle6",
					label: __(
						"Vertical Style 6",
						"ultimate-addons-for-gutenberg"
					),
				},
				{
					value: "vstyle7",
					label: __(
						"Vertical Style 7",
						"ultimate-addons-for-gutenberg"
					),
				},
				{
					value: "vstyle8",
					label: __(
						"Vertical Style 8",
						"ultimate-addons-for-gutenberg"
					),
				},
				{
					value: "vstyle9",
					label: __(
						"Vertical Style 9",
						"ultimate-addons-for-gutenberg"
					),
				},
				{
					value: "vstyle10",
					label: __(
						"Vertical Style 10",
						"ultimate-addons-for-gutenberg"
					),
				},
				{
					value: "stack1",
					label: __(
						"Stack Style 11",
						"ultimate-addons-for-gutenberg"
					),
				},
				{
					value: "stack2",
					label: __(
						"Stack Style 12",
						"ultimate-addons-for-gutenberg"
					),
				},
				{
					value: "stack3",
					label: __(
						"Stack Style 13",
						"ultimate-addons-for-gutenberg"
					),
				},
				{
					value: "stack4",
					label: __(
						"Stack Style 14",
						"ultimate-addons-for-gutenberg"
					),
				},
			],
		};
		return (
			<PanelBody
				title={__("Tabs Style", "ultimate-addons-for-gutenberg")}
				initialOpen={true}
			>
				<ResponsiveSelectControl
					label={__("Style", "ultimate-addons-for-gutenberg")}
					data={{
						desktop: {
							value: tabsStyleD,
							label: "tabsStyleD",
						},
						tablet: {
							value: tabsStyleT,
							label: "tabsStyleT",
						},
						mobile: {
							value: tabsStyleM,
							label: "tabsStyleM",
						},
					}}
					options={tabsStyleOptions}
					setAttributes={setAttributes}
				/>
			</PanelBody>
		);
	};
	const tabTitleSettings = () => {
		return (
			<PanelBody
				title={__(
					"Tabs Title Settings",
					"ultimate-addons-for-gutenberg"
				)}
				initialOpen={false}
			>
				<SelectControl
					label={__(
						"Initial Open Tab",
						"ultimate-addons-for-gutenberg"
					)}
					value={tabActiveFrontend}
					options={tabHeaders.map((tab, index) => {
						return { value: index, label: tab };
					})}
					onChange={(value) =>
						setAttributes({
							tabActiveFrontend: parseInt(value),
						})
					}
				/>
				<MultiButtonsControl
					setAttributes={setAttributes}
					label={__("Tab Alignment", "ultimate-addons-for-gutenberg")}
					data={{
						value: tabAlign,
						label: "tabAlign",
					}}
					className="uagb-multi-button-alignment-control"
					options={[
						{
							value: "left",
							icon: <Icon icon={renderSVG("fa fa-align-left")} />,
							tooltip: __(
								"Left",
								"ultimate-addons-for-gutenberg"
							),
						},
						{
							value: "center",
							icon: (
								<Icon icon={renderSVG("fa fa-align-center")} />
							),
							tooltip: __(
								"Center",
								"ultimate-addons-for-gutenberg"
							),
						},
						{
							value: "right",
							icon: (
								<Icon icon={renderSVG("fa fa-align-right")} />
							),
							tooltip: __(
								"Right",
								"ultimate-addons-for-gutenberg"
							),
						},
					]}
					showIcons={true}
				/>
				<MultiButtonsControl
					setAttributes={setAttributes}
					label={__(
						"Tab Text Alignment",
						"ultimate-addons-for-gutenberg"
					)}
					data={{
						value: titleAlign,
						label: "titleAlign",
					}}
					className="uagb-multi-button-alignment-control"
					options={[
						{
							value: "left",
							icon: <Icon icon={renderSVG("fa fa-align-left")} />,
							tooltip: __(
								"Left",
								"ultimate-addons-for-gutenberg"
							),
						},
						{
							value: "center",
							icon: (
								<Icon icon={renderSVG("fa fa-align-center")} />
							),
							tooltip: __(
								"Center",
								"ultimate-addons-for-gutenberg"
							),
						},
						{
							value: "right",
							icon: (
								<Icon icon={renderSVG("fa fa-align-right")} />
							),
							tooltip: __(
								"Right",
								"ultimate-addons-for-gutenberg"
							),
						},
					]}
					showIcons={true}
				/>
				<ToggleControl
					label={__("Enable Icon", "ultimate-addons-for-gutenberg")}
					checked={showIcon}
					onChange={() => setAttributes({ showIcon: !showIcon })}
				/>
				{showIcon && (
					<>
						<h2 className="components-base-control__label">
							{__("Icon", "ultimate-addons-for-gutenberg")}
						</h2>
						<FontIconPicker
							icons={wp.UAGBSvgIcons}
							renderFunc={renderSVG}
							theme="default"
							value={icon}
							onChange={(value) => setAttributes({ icon: value })}
							isMulti={false}
							noSelectedPlaceholder={__(
								"Select Icon",
								"ultimate-addons-for-gutenberg"
							)}
						/>
						<SelectControl
							label={__(
								"Icon Position",
								"ultimate-addons-for-gutenberg"
							)}
							value={iconPosition}
							options={[
								{
									value: "left",
									label: __(
										"Left",
										"ultimate-addons-for-gutenberg"
									),
								},
								{
									value: "right",
									label: __(
										"Right",
										"ultimate-addons-for-gutenberg"
									),
								},
								{
									value: "top",
									label: __(
										"Top",
										"ultimate-addons-for-gutenberg"
									),
								},
								{
									value: "bottom",
									label: __(
										"Bottom",
										"ultimate-addons-for-gutenberg"
									),
								},
							]}
							onChange={(value) =>
								setAttributes({ iconPosition: value })
							}
						/>
					</>
				)}
			</PanelBody>
		);
	};
	const tabBorderSettings = () => {
		return (
			<PanelBody
				title={__("Border", "ultimate-addons-for-gutenberg")}
				initialOpen={false}
			>
				<Border
					setAttributes={setAttributes}
					borderStyle={{
						value: borderStyle,
						label: "borderStyle",
						title: __("Style", "ultimate-addons-for-gutenberg"),
					}}
					borderWidth={{
						value: borderWidth,
						label: "borderWidth",
						title: __("Width", "ultimate-addons-for-gutenberg"),
					}}
					borderRadius={{
						value: borderRadius,
						label: "borderRadius",
						title: __("Radius", "ultimate-addons-for-gutenberg"),
					}}
					borderColor={{
						value: borderColor,
						label: "borderColor",
						title: __("Color", "ultimate-addons-for-gutenberg"),
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
	const tabBodySettings = () => {
		return (
			<PanelBody
				title={__("Tabs Body", "ultimate-addons-for-gutenberg")}
				initialOpen={false}
			>
				<AdvancedPopColorControl
					label={__(
						"Background Color",
						"ultimate-addons-for-gutenberg"
					)}
					colorValue={bodyBgColor}
					onColorChange={(value) =>
						setAttributes({ bodyBgColor: value })
					}
				/>
				<AdvancedPopColorControl
					label={__("Text Color", "ultimate-addons-for-gutenberg")}
					colorValue={bodyTextColor}
					onColorChange={(value) =>
						setAttributes({ bodyTextColor: value })
					}
				/>
				<SpacingControl
					{...props}
					label={__("Margin", "ultimate-addons-for-gutenberg")}
					valueTop={{
						value: tabBodyTopMargin,
						label: "tabBodyTopMargin",
					}}
					valueRight={{
						value: tabBodyRightMargin,
						label: "tabBodyRightMargin",
					}}
					valueBottom={{
						value: tabBodyBottomMargin,
						label: "tabBodyBottomMargin",
					}}
					valueLeft={{
						value: tabBodyLeftMargin,
						label: "tabBodyLeftMargin",
					}}
					valueTopTablet={{
						value: tabBodyTopMarginTablet,
						label: "tabBodyTopMarginTablet",
					}}
					valueRightTablet={{
						value: tabBodyRightMarginTablet,
						label: "tabBodyRightMarginTablet",
					}}
					valueBottomTablet={{
						value: tabBodyBottomMarginTablet,
						label: "tabBodyBottomMarginTablet",
					}}
					valueLeftTablet={{
						value: tabBodyLeftMarginTablet,
						label: "tabBodyLeftMarginTablet",
					}}
					valueTopMobile={{
						value: tabBodyTopMarginMobile,
						label: "tabBodyTopMarginMobile",
					}}
					valueRightMobile={{
						value: tabBodyRightMarginMobile,
						label: "tabBodyRightMarginMobile",
					}}
					valueBottomMobile={{
						value: tabBodyBottomMarginMobile,
						label: "tabBodyBottomMarginMobile",
					}}
					valueLeftMobile={{
						value: tabBodyLeftMarginMobile,
						label: "tabBodyLeftMarginMobile",
					}}
					unit={{
						value: tabBodyMarginUnit,
						label: "tabBodyMarginUnit",
					}}
					mUnit={{
						value: mobiletabBodyMarginUnit,
						label: "mobiletabBodyMarginUnit",
					}}
					tUnit={{
						value: tablettabBodyMarginUnit,
						label: "tablettabBodyMarginUnit",
					}}
					attributes={attributes}
					setAttributes={setAttributes}
					link={{
						value: tabBodyMarginLink,
						label: "tabBodyMarginLink",
					}}
				/>
				<SpacingControl
					{...props}
					label={__("Padding", "ultimate-addons-for-gutenberg")}
					valueTop={{
						value: tabBodyTopPadding,
						label: "tabBodyTopPadding",
					}}
					valueRight={{
						value: tabBodyRightPadding,
						label: "tabBodyRightPadding",
					}}
					valueBottom={{
						value: tabBodyBottomPadding,
						label: "tabBodyBottomPadding",
					}}
					valueLeft={{
						value: tabBodyLeftPadding,
						label: "tabBodyLeftPadding",
					}}
					valueTopTablet={{
						value: tabBodyTopPaddingTablet,
						label: "tabBodyTopPaddingTablet",
					}}
					valueRightTablet={{
						value: tabBodyRightPaddingTablet,
						label: "tabBodyRightPaddingTablet",
					}}
					valueBottomTablet={{
						value: tabBodyBottomPaddingTablet,
						label: "tabBodyBottomPaddingTablet",
					}}
					valueLeftTablet={{
						value: tabBodyLeftPaddingTablet,
						label: "tabBodyLeftPaddingTablet",
					}}
					valueTopMobile={{
						value: tabBodyTopPaddingMobile,
						label: "tabBodyTopPaddingMobile",
					}}
					valueRightMobile={{
						value: tabBodyRightPaddingMobile,
						label: "tabBodyRightPaddingMobile",
					}}
					valueBottomMobile={{
						value: tabBodyBottomPaddingMobile,
						label: "tabBodyBottomPaddingMobile",
					}}
					valueLeftMobile={{
						value: tabBodyLeftPaddingMobile,
						label: "tabBodyLeftPaddingMobile",
					}}
					unit={{
						value: tabBodyPaddingUnit,
						label: "tabBodyPaddingUnit",
					}}
					mUnit={{
						value: mobiletabBodyPaddingUnit,
						label: "mobiletabBodyPaddingUnit",
					}}
					tUnit={{
						value: tablettabBodyPaddingUnit,
						label: "tablettabBodyPaddingUnit",
					}}
					attributes={attributes}
					setAttributes={setAttributes}
					link={{
						value: tabBodyPaddingLink,
						label: "tabBodyPaddingLink",
					}}
				/>
			</PanelBody>
		);
	};

	const tabTitleStyle = () => {
		return (
			<PanelBody
				title={__("Tabs Title", "ultimate-addons-for-gutenberg")}
				initialOpen={false}
			>
				<SpacingControl
					{...props}
					label={__("Margin", "ultimate-addons-for-gutenberg")}
					valueTop={{
						value: tabTitleTopMargin,
						label: "tabTitleTopMargin",
					}}
					valueRight={{
						value: tabTitleRightMargin,
						label: "tabTitleRightMargin",
					}}
					valueBottom={{
						value: tabTitleBottomMargin,
						label: "tabTitleBottomMargin",
					}}
					valueLeft={{
						value: tabTitleLeftMargin,
						label: "tabTitleLeftMargin",
					}}
					valueTopTablet={{
						value: tabTitleTopMarginTablet,
						label: "tabTitleTopMarginTablet",
					}}
					valueRightTablet={{
						value: tabTitleRightMarginTablet,
						label: "tabTitleRightMarginTablet",
					}}
					valueBottomTablet={{
						value: tabTitleBottomMarginTablet,
						label: "tabTitleBottomMarginTablet",
					}}
					valueLeftTablet={{
						value: tabTitleLeftMarginTablet,
						label: "tabTitleLeftMarginTablet",
					}}
					valueTopMobile={{
						value: tabTitleTopMarginMobile,
						label: "tabTitleTopMarginMobile",
					}}
					valueRightMobile={{
						value: tabTitleRightMarginMobile,
						label: "tabTitleRightMarginMobile",
					}}
					valueBottomMobile={{
						value: tabTitleBottomMarginMobile,
						label: "tabTitleBottomMarginMobile",
					}}
					valueLeftMobile={{
						value: tabTitleLeftMarginMobile,
						label: "tabTitleLeftMarginMobile",
					}}
					unit={{
						value: tabTitleMarginUnit,
						label: "tabTitleMarginUnit",
					}}
					mUnit={{
						value: mobiletabTitleMarginUnit,
						label: "mobiletabTitleMarginUnit",
					}}
					tUnit={{
						value: tablettabTitleMarginUnit,
						label: "tablettabTitleMarginUnit",
					}}
					attributes={attributes}
					setAttributes={setAttributes}
					link={{
						value: tabTitleMarginLink,
						label: "tabTitleMarginLink",
					}}
				/>
				<SpacingControl
					{...props}
					label={__("Padding", "ultimate-addons-for-gutenberg")}
					valueTop={{
						value: tabTitleTopPadding,
						label: "tabTitleTopPadding",
					}}
					valueRight={{
						value: tabTitleRightPadding,
						label: "tabTitleRightPadding",
					}}
					valueBottom={{
						value: tabTitleBottomPadding,
						label: "tabTitleBottomPadding",
					}}
					valueLeft={{
						value: tabTitleLeftPadding,
						label: "tabTitleLeftPadding",
					}}
					valueTopTablet={{
						value: tabTitleTopPaddingTablet,
						label: "tabTitleTopPaddingTablet",
					}}
					valueRightTablet={{
						value: tabTitleRightPaddingTablet,
						label: "tabTitleRightPaddingTablet",
					}}
					valueBottomTablet={{
						value: tabTitleBottomPaddingTablet,
						label: "tabTitleBottomPaddingTablet",
					}}
					valueLeftTablet={{
						value: tabTitleLeftPaddingTablet,
						label: "tabTitleLeftPaddingTablet",
					}}
					valueTopMobile={{
						value: tabTitleTopPaddingMobile,
						label: "tabTitleTopPaddingMobile",
					}}
					valueRightMobile={{
						value: tabTitleRightPaddingMobile,
						label: "tabTitleRightPaddingMobile",
					}}
					valueBottomMobile={{
						value: tabTitleBottomPaddingMobile,
						label: "tabTitleBottomPaddingMobile",
					}}
					valueLeftMobile={{
						value: tabTitleLeftPaddingMobile,
						label: "tabTitleLeftPaddingMobile",
					}}
					unit={{
						value: tabTitlePaddingUnit,
						label: "tabTitlePaddingUnit",
					}}
					mUnit={{
						value: mobiletabTitlePaddingUnit,
						label: "mobiletabTitlePaddingUnit",
					}}
					tUnit={{
						value: tablettabTitlePaddingUnit,
						label: "tablettabTitlePaddingUnit",
					}}
					attributes={attributes}
					setAttributes={setAttributes}
					link={{
						value: tabTitlePaddingLink,
						label: "tabTitlePaddingLink",
					}}
				/>
				<AdvancedPopColorControl
					label={__(
						"Background Color",
						"ultimate-addons-for-gutenberg"
					)}
					colorValue={headerBgColor}
					onColorChange={(value) =>
						setAttributes({ headerBgColor: value })
					}
				/>
				<AdvancedPopColorControl
					label={__("Text Color", "ultimate-addons-for-gutenberg")}
					colorValue={headerTextColor}
					onColorChange={(value) =>
						setAttributes({ headerTextColor: value })
					}
				/>
				<AdvancedPopColorControl
					label={__(
						"Active Tab Background Color",
						"ultimate-addons-for-gutenberg"
					)}
					colorValue={activeTabBgColor}
					onColorChange={(value) =>
						setAttributes({ activeTabBgColor: value })
					}
				/>
				<AdvancedPopColorControl
					label={__(
						"Active Tab Text Color",
						"ultimate-addons-for-gutenberg"
					)}
					colorValue={activeTabTextColor}
					onColorChange={(value) =>
						setAttributes({ activeTabTextColor: value })
					}
				/>

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
		);
	};

	const tabIconStyle = () => {
		if (!showIcon) {
			return "";
		}

		return (
			<PanelBody
				title={__("Tabs Title Icon", "ultimate-addons-for-gutenberg")}
				initialOpen={false}
			>
				<Range
					label={__("Spacing", "ultimate-addons-for-gutenberg")}
					setAttributes={setAttributes}
					value={iconSpacing}
					onChange={(value) => setAttributes({ iconSpacing: value })}
					min={0}
					max={500}
					displayUnit={false}
				/>
				<AdvancedPopColorControl
					label={__("Color", "ultimate-addons-for-gutenberg")}
					colorValue={iconColor}
					onColorChange={(value) =>
						setAttributes({ iconColor: value })
					}
				/>
				<AdvancedPopColorControl
					label={__("Active Color", "ultimate-addons-for-gutenberg")}
					colorValue={activeiconColor}
					onColorChange={(value) =>
						setAttributes({ activeiconColor: value })
					}
				/>
				<Range
					label={__("Size", "ultimate-addons-for-gutenberg")}
					setAttributes={setAttributes}
					value={iconSize}
					onChange={(value) => setAttributes({ iconSize: value })}
					min={0}
					max={500}
					displayUnit={false}
				/>
			</PanelBody>
		);
	};
	return (
		<InspectorControls>
			<InspectorTabs>
				<InspectorTab key={"general"}>
					{tabStyleSettings()}
					{tabTitleSettings()}
				</InspectorTab>
				<InspectorTab key={"style"}>
					{tabTitleStyle()}
					{tabIconStyle()}
					{tabBodySettings()}
					{tabBorderSettings()}
				</InspectorTab>
				<InspectorTab key={"advance"}></InspectorTab>
			</InspectorTabs>
		</InspectorControls>
	);
};
export default React.memo(Settings);
