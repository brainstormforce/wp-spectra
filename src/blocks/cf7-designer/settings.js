import React, { Suspense } from "react";

import { __ } from "@wordpress/i18n";
import UAGB_Block_Icons from "@Controls/block-icons";
import lazyLoader from "@Controls/lazy-loader";
import WebfontLoader from "@Components/typography/fontloader";
import TypographyControl from "@Components/typography";
import Border from "../../components/border";
import AdvancedPopColorControl from "../../components/color-control/advanced-pop-color-control.js";
import InspectorTabs from "../../components/inspector-tabs/InspectorTabs.js";
import InspectorTab, {
	UAGTabs,
} from "../../components/inspector-tabs/InspectorTab.js";
import SpacingControl from "../../components/spacing-control";
import Range from "../../components/range/Range.js";
import ResponsiveSlider from "../../components/responsive-slider";
import UAGImage from "../../components/image";
import MultiButtonsControl from "../../components/multi-buttons-control";
import {
	AlignmentToolbar,
	BlockControls,
	ColorPalette,
	InspectorControls,
} from "@wordpress/block-editor";

import {
	PanelBody,
	SelectControl,
	RangeControl,
	Button,
	ToggleControl,
	ButtonGroup,
	TabPanel,
} from "@wordpress/components";

const Settings = (props) => {
	props = props.parentProps;

	const { setAttributes, attributes } = props;

	const {
		formId,
		align,
		fieldStyle,
		fieldVrPadding,
		fieldHrPadding,
		fieldBgColor,
		fieldLabelColor,
		fieldInputColor,
		fieldBorderStyle,
		fieldBorderWidth,
		fieldBorderRadius,
		fieldBorderColor,
		fieldBorderFocusColor,
		buttonAlignment,
		buttonVrPadding,
		buttonHrPadding,
		buttonTextColor,
		buttonBgColor,
		buttonTextHoverColor,
		buttonBgHoverColor,
		buttonBorderStyle,
		buttonBorderWidth,
		buttonBorderRadius,
		buttonBorderColor,
		buttonBorderHoverColor,
		fieldSpacing,
		fieldLabelSpacing,
		labelFontSize,
		labelFontSizeType,
		labelFontSizeTablet,
		labelFontSizeMobile,
		labelFontFamily,
		labelFontWeight,
		labelFontSubset,
		labelLineHeightType,
		labelLineHeight,
		labelLineHeightTablet,
		labelLineHeightMobile,
		labelLoadGoogleFonts,
		inputFontSize,
		inputFontSizeType,
		inputFontSizeTablet,
		inputFontSizeMobile,
		inputFontFamily,
		inputFontWeight,
		inputFontSubset,
		inputLineHeightType,
		inputLineHeight,
		inputLineHeightTablet,
		inputLineHeightMobile,
		inputLoadGoogleFonts,
		buttonFontSize,
		buttonFontSizeType,
		buttonFontSizeTablet,
		buttonFontSizeMobile,
		buttonFontFamily,
		buttonFontWeight,
		buttonFontSubset,
		buttonLineHeightType,
		buttonLineHeight,
		buttonLineHeightTablet,
		buttonLineHeightMobile,
		buttonLoadGoogleFonts,
		enableOveride,
		radioCheckSize,
		radioCheckBgColor,
		radioCheckSelectColor,
		radioCheckLableColor,
		radioCheckBorderColor,
		radioCheckBorderWidth,
		radioCheckBorderRadius,
		radioCheckFontSize,
		radioCheckFontSizeType,
		radioCheckFontSizeTablet,
		radioCheckFontSizeMobile,
		radioCheckFontFamily,
		radioCheckFontWeight,
		radioCheckFontSubset,
		radioCheckLineHeightType,
		radioCheckLineHeight,
		radioCheckLineHeightTablet,
		radioCheckLineHeightMobile,
		radioCheckLoadGoogleFonts,
		validationMsgPosition,
		validationMsgColor,
		validationMsgBgColor,
		enableHighlightBorder,
		highlightBorderColor,
		validationMsgFontSize,
		validationMsgFontSizeType,
		validationMsgFontSizeTablet,
		validationMsgFontSizeMobile,
		validationMsgFontFamily,
		validationMsgFontWeight,
		validationMsgFontSubset,
		validationMsgLineHeightType,
		validationMsgLineHeight,
		validationMsgLineHeightTablet,
		validationMsgLineHeightMobile,
		validationMsgLoadGoogleFonts,
		successMsgColor,
		successMsgBgColor,
		successMsgBorderColor,
		errorMsgColor,
		errorMsgBgColor,
		errorMsgBorderColor,
		msgBorderSize,
		msgBorderRadius,
		msgVrPadding,
		msgHrPadding,
		msgFontSize,
		msgFontSizeType,
		msgFontSizeTablet,
		msgFontSizeMobile,
		msgFontFamily,
		msgFontWeight,
		msgFontSubset,
		msgLineHeightType,
		msgLineHeight,
		msgLineHeightTablet,
		msgLineHeightMobile,
		msgLoadGoogleFonts,
		radioCheckBorderRadiusType,
		msgBorderRadiusType,
		fieldBorderRadiusType,
		buttonBorderRadiusType,
	} = attributes;

	let loadInputGoogleFonts;
	let loadButtonGoogleFonts;
	let loadLabelGoogleFonts;
	let loadRadioGoogleFonts;
	let loadValidationGoogleFonts;
	let loadMsgGoogleFonts;

	if (labelLoadGoogleFonts == true) {
		const labelconfig = {
			google: {
				families: [
					labelFontFamily +
						(labelFontWeight ? ":" + labelFontWeight : ""),
				],
			},
		};

		loadLabelGoogleFonts = (
			<WebfontLoader config={labelconfig}></WebfontLoader>
		);
	}

	if (inputLoadGoogleFonts == true) {
		const inputconfig = {
			google: {
				families: [
					inputFontFamily +
						(inputFontWeight ? ":" + inputFontWeight : ""),
				],
			},
		};

		loadInputGoogleFonts = (
			<WebfontLoader config={inputconfig}></WebfontLoader>
		);
	}

	if (buttonLoadGoogleFonts == true) {
		const buttonconfig = {
			google: {
				families: [
					buttonFontFamily +
						(buttonFontWeight ? ":" + buttonFontWeight : ""),
				],
			},
		};

		loadButtonGoogleFonts = (
			<WebfontLoader config={buttonconfig}></WebfontLoader>
		);
	}

	if (radioCheckLoadGoogleFonts == true) {
		const radioCheckconfig = {
			google: {
				families: [
					radioCheckFontFamily +
						(radioCheckFontWeight
							? ":" + radioCheckFontWeight
							: ""),
				],
			},
		};

		loadRadioGoogleFonts = (
			<WebfontLoader config={radioCheckconfig}></WebfontLoader>
		);
	}

	if (validationMsgLoadGoogleFonts == true) {
		const validationMsgconfig = {
			google: {
				families: [
					validationMsgFontFamily +
						(validationMsgFontWeight
							? ":" + validationMsgFontWeight
							: ""),
				],
			},
		};

		loadValidationGoogleFonts = (
			<WebfontLoader config={validationMsgconfig}></WebfontLoader>
		);
	}

	if (msgLoadGoogleFonts == true) {
		const msgconfig = {
			google: {
				families: [
					msgFontFamily + (msgFontWeight ? ":" + msgFontWeight : ""),
				],
			},
		};

		loadMsgGoogleFonts = <WebfontLoader config={msgconfig}></WebfontLoader>;
	}

	const fieldSettings = (
		<PanelBody title={__("General", "ultimate-addons-for-gutenberg")}>
			<SelectControl
				label={__("Select Form", "ultimate-addons-for-gutenberg")}
				value={formId}
				onChange={onSelectForm}
				options={uagb_blocks_info.cf7_forms}
			/>
		</PanelBody>
	);

	const fieldBorderSetting = (
		<PanelBody
			title={__("Field Style & Border", "ultimate-addons-for-gutenberg")}
			initialOpen={false}
		>
			<MultiButtonsControl
				setAttributes={setAttributes}
				label={__("Field Style", "ultimate-addons-for-gutenberg")}
				data={{
					value: fieldStyle,
					label: "fieldStyle",
				}}
				options={[
					{
						value: "box",
						label: __("Box", "ultimate-addons-for-gutenberg"),
					},
					{
						value: "underline",
						label: __("Underline", "ultimate-addons-for-gutenberg"),
					},
				]}
			/>
			{fieldStyle == "box" && (
				<Border
					setAttributes={setAttributes}
					borderStyle={{
						value: fieldBorderStyle,
						label: "fieldBorderStyle",
						title: __(
							"Border Style",
							"ultimate-addons-for-gutenberg"
						),
					}}
					borderWidth={{
						value: fieldBorderWidth,
						label: "fieldBorderWidth",
						title: __("Width", "ultimate-addons-for-gutenberg"),
					}}
					borderRadius={{
						value: fieldBorderRadius,
						label: "fieldBorderRadius",
						title: __("Radius", "ultimate-addons-for-gutenberg"),
						displayUnit: true,
						unit: {
							value: fieldBorderRadiusType,
							label: "fieldBorderRadiusType",
						},
					}}
					borderColor={{
						value: fieldBorderColor,
						label: "fieldBorderColor",
						title: __("Color", "ultimate-addons-for-gutenberg"),
					}}
					borderHoverColor={{
						value: fieldBorderFocusColor,
						label: "fieldBorderFocusColor",
						title: __(
							"Focus Color",
							"ultimate-addons-for-gutenberg"
						),
					}}
				/>
			)}
		</PanelBody>
	);

	const typographySettings = (
		<PanelBody
			title={__("Content", "ultimate-addons-for-gutenberg")}
			initialOpen={false}
		>
			<TypographyControl
				label={__("Label Typography", "ultimate-addons-for-gutenberg")}
				attributes={attributes}
				setAttributes={setAttributes}
				loadGoogleFonts={{
					value: labelLoadGoogleFonts,
					label: "labelLoadGoogleFonts",
				}}
				fontFamily={{
					value: labelFontFamily,
					label: "labelFontFamily",
				}}
				fontWeight={{
					value: labelFontWeight,
					label: "labelFontWeight",
				}}
				fontSubset={{
					value: labelFontSubset,
					label: "labelFontSubset",
				}}
				fontSizeType={{
					value: labelFontSizeType,
					label: "labelFontSizeType",
				}}
				fontSize={{ value: labelFontSize, label: "labelFontSize" }}
				fontSizeMobile={{
					value: labelFontSizeMobile,
					label: "labelFontSizeMobile",
				}}
				fontSizeTablet={{
					value: labelFontSizeTablet,
					label: "labelFontSizeTablet",
				}}
				lineHeightType={{
					value: labelLineHeightType,
					label: "labelLineHeightType",
				}}
				lineHeight={{
					value: labelLineHeight,
					label: "labelLineHeight",
				}}
				lineHeightMobile={{
					value: labelLineHeightMobile,
					label: "labelLineHeightMobile",
				}}
				lineHeightTablet={{
					value: labelLineHeightTablet,
					label: "labelLineHeightTablet",
				}}
			/>
			<AdvancedPopColorControl
				label={__("Label Color", "ultimate-addons-for-gutenberg")}
				colorValue={fieldLabelColor}
				onColorChange={(value) =>
					setAttributes({ fieldLabelColor: value })
				}
			/>
			<TypographyControl
				label={__("Input Typography", "ultimate-addons-for-gutenberg")}
				attributes={attributes}
				setAttributes={setAttributes}
				loadGoogleFonts={{
					value: inputLoadGoogleFonts,
					label: "inputLoadGoogleFonts",
				}}
				fontFamily={{
					value: inputFontFamily,
					label: "inputFontFamily",
				}}
				fontWeight={{
					value: inputFontWeight,
					label: "inputFontWeight",
				}}
				fontSubset={{
					value: inputFontSubset,
					label: "inputFontSubset",
				}}
				fontSizeType={{
					value: inputFontSizeType,
					label: "inputFontSizeType",
				}}
				fontSize={{ value: inputFontSize, label: "inputFontSize" }}
				fontSizeMobile={{
					value: inputFontSizeMobile,
					label: "inputFontSizeMobile",
				}}
				fontSizeTablet={{
					value: inputFontSizeTablet,
					label: "inputFontSizeTablet",
				}}
				lineHeightType={{
					value: inputLineHeightType,
					label: "inputLineHeightType",
				}}
				lineHeight={{
					value: inputLineHeight,
					label: "inputLineHeight",
				}}
				lineHeightMobile={{
					value: inputLineHeightMobile,
					label: "inputLineHeightMobile",
				}}
				lineHeightTablet={{
					value: inputLineHeightTablet,
					label: "inputLineHeightTablet",
				}}
			/>
			<AdvancedPopColorControl
				label={__("Input Color", "ultimate-addons-for-gutenberg")}
				colorValue={fieldInputColor}
				onColorChange={(value) =>
					setAttributes({ fieldInputColor: value })
				}
			/>
			<AdvancedPopColorControl
				label={__("Background Color", "ultimate-addons-for-gutenberg")}
				colorValue={fieldBgColor}
				onColorChange={(value) =>
					setAttributes({ fieldBgColor: value })
				}
			/>
		</PanelBody>
	);

	const radioCheckSetting = (
		<PanelBody
			title={__("Radio & Checkbox", "ultimate-addons-for-gutenberg")}
			initialOpen={false}
		>
			<ToggleControl
				label={__(
					"Override Current Style",
					"ultimate-addons-for-gutenberg"
				)}
				checked={enableOveride}
				onChange={() =>
					setAttributes({ enableOveride: !enableOveride })
				}
			/>
			{enableOveride && (
				<>
					<Range
						label={__("Size", "ultimate-addons-for-gutenberg")}
						setAttributes={setAttributes}
						value={radioCheckSize}
						onChange={(value) =>
							setAttributes({ radioCheckSize: value })
						}
						min={0}
						max={50}
						displayUnit={false}
					/>
					<TypographyControl
						label={__(
							"Label Typography",
							"ultimate-addons-for-gutenberg"
						)}
						attributes={attributes}
						setAttributes={setAttributes}
						loadGoogleFonts={{
							value: radioCheckLoadGoogleFonts,
							label: "radioCheckLoadGoogleFonts",
						}}
						fontFamily={{
							value: radioCheckFontFamily,
							label: "radioCheckFontFamily",
						}}
						fontWeight={{
							value: radioCheckFontWeight,
							label: "radioCheckFontWeight",
						}}
						fontSubset={{
							value: radioCheckFontSubset,
							label: "radioCheckFontSubset",
						}}
						fontSizeType={{
							value: radioCheckFontSizeType,
							label: "radioCheckFontSizeType",
						}}
						fontSize={{
							value: radioCheckFontSize,
							label: "radioCheckFontSize",
						}}
						fontSizeMobile={{
							value: radioCheckFontSizeMobile,
							label: "radioCheckFontSizeMobile",
						}}
						fontSizeTablet={{
							value: radioCheckFontSizeTablet,
							label: "radioCheckFontSizeTablet",
						}}
						lineHeightType={{
							value: radioCheckLineHeightType,
							label: "radioCheckLineHeightType",
						}}
						lineHeight={{
							value: radioCheckLineHeight,
							label: "radioCheckLineHeight",
						}}
						lineHeightMobile={{
							value: radioCheckLineHeightMobile,
							label: "radioCheckLineHeightMobile",
						}}
						lineHeightTablet={{
							value: radioCheckLineHeightTablet,
							label: "radioCheckLineHeightTablet",
						}}
					/>
					<AdvancedPopColorControl
						label={__(
							"Label Color",
							"ultimate-addons-for-gutenberg"
						)}
						colorValue={radioCheckLableColor}
						onColorChange={(value) =>
							setAttributes({ radioCheckLableColor: value })
						}
					/>
					<AdvancedPopColorControl
						label={__(
							"Background Color",
							"ultimate-addons-for-gutenberg"
						)}
						colorValue={radioCheckBgColor}
						onColorChange={(value) =>
							setAttributes({ radioCheckBgColor: value })
						}
					/>
					<AdvancedPopColorControl
						label={__(
							"Selected Color",
							"ultimate-addons-for-gutenberg"
						)}
						colorValue={radioCheckSelectColor}
						onColorChange={(value) =>
							setAttributes({ radioCheckSelectColor: value })
						}
					/>
					{fieldBorderStyle !== "none" && (
						<>
							<Range
								label={__(
									"Border Width (px)",
									"ultimate-addons-for-gutenberg"
								)}
								setAttributes={setAttributes}
								value={radioCheckBorderWidth}
								onChange={(value) =>
									setAttributes({
										radioCheckBorderWidth: value,
									})
								}
								min={0}
								max={50}
								displayUnit={false}
							/>
							<Range
								label={__(
									"Border Radius",
									"ultimate-addons-for-gutenberg"
								)}
								setAttributes={setAttributes}
								value={radioCheckBorderRadius}
								onChange={(value) =>
									setAttributes({
										radioCheckBorderRadius: value,
									})
								}
								min={0}
								max={100}
								unit={{
									value: radioCheckBorderRadiusType,
									label: "radioCheckBorderRadiusType",
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
							<AdvancedPopColorControl
								label={__(
									"Color",
									"ultimate-addons-for-gutenberg"
								)}
								colorValue={radioCheckBorderColor}
								onColorChange={(value) =>
									setAttributes({
										radioCheckBorderColor: value,
									})
								}
							/>
						</>
					)}
				</>
			)}
		</PanelBody>
	);

	//Submit button settings.
	const btn_border_setting = (
		<>
			<Border
				setAttributes={setAttributes}
				borderStyle={{
					value: buttonBorderStyle,
					label: "buttonBorderStyle",
					title: __("Border Style", "ultimate-addons-for-gutenberg"),
				}}
				borderWidth={{
					value: buttonBorderWidth,
					label: "buttonBorderWidth",
					title: __("Width", "ultimate-addons-for-gutenberg"),
				}}
				borderRadius={{
					value: buttonBorderRadius,
					label: "buttonBorderRadius",
					title: __("Radius", "ultimate-addons-for-gutenberg"),
					displayUnit: true,
					unit: {
						value: buttonBorderRadiusType,
						label: "buttonBorderRadiusType",
					},
				}}
				borderColor={{
					value: buttonBorderColor,
					label: "buttonBorderColor",
					title: __("Color", "ultimate-addons-for-gutenberg"),
				}}
				borderHoverColor={{
					value: buttonBorderHoverColor,
					label: "buttonBorderHoverColor",
					title: __("Hover Color", "ultimate-addons-for-gutenberg"),
				}}
			/>
		</>
	);

	const msgSettings = (
		<PanelBody
			title={__(
				"Success / Error Message",
				"ultimate-addons-for-gutenberg"
			)}
			initialOpen={false}
		>
			<p className="uagb-settings-notice">
				{__(
					"Note: This styling can be only seen at frontend",
					"ultimate-addons-for-gutenberg"
				)}
			</p>
			<SelectControl
				label={__(
					"Validation Message Position",
					"ultimate-addons-for-gutenberg"
				)}
				value={validationMsgPosition}
				onChange={(value) =>
					setAttributes({ validationMsgPosition: value })
				}
				options={[
					{
						value: "default",
						label: __("Default", "ultimate-addons-for-gutenberg"),
					},
					{
						value: "bottom_right",
						label: __(
							"Bottom Right Side of Field",
							"ultimate-addons-for-gutenberg"
						),
					},
				]}
			/>
			<TypographyControl
				label={__(
					"Validation Typography",
					"ultimate-addons-for-gutenberg"
				)}
				attributes={attributes}
				setAttributes={setAttributes}
				loadGoogleFonts={{
					value: validationMsgLoadGoogleFonts,
					label: "validationMsgLoadGoogleFonts",
				}}
				fontFamily={{
					value: validationMsgFontFamily,
					label: "validationMsgFontFamily",
				}}
				fontWeight={{
					value: validationMsgFontWeight,
					label: "validationMsgFontWeight",
				}}
				fontSubset={{
					value: validationMsgFontSubset,
					label: "validationMsgFontSubset",
				}}
				fontSizeType={{
					value: validationMsgFontSizeType,
					label: "validationMsgFontSizeType",
				}}
				fontSize={{
					value: validationMsgFontSize,
					label: "validationMsgFontSize",
				}}
				fontSizeMobile={{
					value: validationMsgFontSizeMobile,
					label: "validationMsgFontSizeMobile",
				}}
				fontSizeTablet={{
					value: validationMsgFontSizeTablet,
					label: "validationMsgFontSizeTablet",
				}}
				lineHeightType={{
					value: validationMsgLineHeightType,
					label: "validationMsgLineHeightType",
				}}
				lineHeight={{
					value: validationMsgLineHeight,
					label: "validationMsgLineHeight",
				}}
				lineHeightMobile={{
					value: validationMsgLineHeightMobile,
					label: "validationMsgLineHeightMobile",
				}}
				lineHeightTablet={{
					value: validationMsgLineHeightTablet,
					label: "validationMsgLineHeightTablet",
				}}
			/>
			<AdvancedPopColorControl
				label={__(
					"Validation Message Color",
					"ultimate-addons-for-gutenberg"
				)}
				colorValue={validationMsgColor}
				onColorChange={(value) =>
					setAttributes({
						validationMsgColor: value,
					})
				}
			/>
			{validationMsgPosition === "bottom_right" && (
				<>
					<AdvancedPopColorControl
						label={__(
							"Message Background Color",
							"ultimate-addons-for-gutenberg"
						)}
						colorValue={validationMsgBgColor}
						onColorChange={(value) =>
							setAttributes({
								validationMsgBgColor: value,
							})
						}
					/>
				</>
			)}
			<hr className="uagb-editor__separator" />
			<ToggleControl
				label={__("Highlight Borders", "ultimate-addons-for-gutenberg")}
				checked={enableHighlightBorder}
				onChange={() =>
					setAttributes({
						enableHighlightBorder: !enableHighlightBorder,
					})
				}
			/>

			{enableHighlightBorder && (
				<>
					<AdvancedPopColorControl
						label={__(
							"Highlight Border Color",
							"ultimate-addons-for-gutenberg"
						)}
						colorValue={highlightBorderColor}
						onColorChange={(value) =>
							setAttributes({
								highlightBorderColor: value,
							})
						}
					/>
				</>
			)}

			<hr className="uagb-editor__separator" />
			<h2>
				{__(
					"Form Success / Error Validation",
					"ultimate-addons-for-gutenberg"
				)}
			</h2>
			<TypographyControl
				label={__("Typography", "ultimate-addons-for-gutenberg")}
				attributes={attributes}
				setAttributes={setAttributes}
				loadGoogleFonts={{
					value: msgLoadGoogleFonts,
					label: "msgLoadGoogleFonts",
				}}
				fontFamily={{ value: msgFontFamily, label: "msgFontFamily" }}
				fontWeight={{ value: msgFontWeight, label: "msgFontWeight" }}
				fontSubset={{ value: msgFontSubset, label: "msgFontSubset" }}
				fontSizeType={{
					value: msgFontSizeType,
					label: "msgFontSizeType",
				}}
				fontSize={{ value: msgFontSize, label: "msgFontSize" }}
				fontSizeMobile={{
					value: msgFontSizeMobile,
					label: "msgFontSizeMobile",
				}}
				fontSizeTablet={{
					value: msgFontSizeTablet,
					label: "msgFontSizeTablet",
				}}
				lineHeightType={{
					value: msgLineHeightType,
					label: "msgLineHeightType",
				}}
				lineHeight={{ value: msgLineHeight, label: "msgLineHeight" }}
				lineHeightMobile={{
					value: msgLineHeightMobile,
					label: "msgLineHeightMobile",
				}}
				lineHeightTablet={{
					value: msgLineHeightTablet,
					label: "msgLineHeightTablet",
				}}
			/>

			<hr className="uagb-editor__separator" />
			<h2>{__("Success Message", "ultimate-addons-for-gutenberg")}</h2>
			<AdvancedPopColorControl
				label={__("Message Color", "ultimate-addons-for-gutenberg")}
				colorValue={successMsgColor}
				onColorChange={(value) =>
					setAttributes({
						successMsgColor: value,
					})
				}
			/>
			<AdvancedPopColorControl
				label={__(
					"Message Background Color",
					"ultimate-addons-for-gutenberg"
				)}
				colorValue={successMsgBgColor}
				onColorChange={(value) =>
					setAttributes({
						successMsgBgColor: value,
					})
				}
			/>
			<AdvancedPopColorControl
				label={__(
					"Message Border Color",
					"ultimate-addons-for-gutenberg"
				)}
				colorValue={successMsgBorderColor}
				onColorChange={(value) =>
					setAttributes({
						successMsgBorderColor: value,
					})
				}
			/>

			<hr className="uagb-editor__separator" />
			<h2>{__("Error Message", "ultimate-addons-for-gutenberg")}</h2>
			<AdvancedPopColorControl
				label={__("Message Color", "ultimate-addons-for-gutenberg")}
				colorValue={errorMsgColor}
				onColorChange={(value) =>
					setAttributes({
						errorMsgColor: value,
					})
				}
			/>
			<AdvancedPopColorControl
				label={__(
					"Message Background Color",
					"ultimate-addons-for-gutenberg"
				)}
				colorValue={errorMsgBgColor}
				onColorChange={(value) =>
					setAttributes({
						errorMsgBgColor: value,
					})
				}
			/>
			<AdvancedPopColorControl
				label={__(
					"Message Border Color",
					"ultimate-addons-for-gutenberg"
				)}
				colorValue={errorMsgBorderColor}
				onColorChange={(value) =>
					setAttributes({
						errorMsgBorderColor: value,
					})
				}
			/>

			<hr className="uagb-editor__separator" />
			<Range
				label={__(
					"Message Border Width (px)",
					"ultimate-addons-for-gutenberg"
				)}
				setAttributes={setAttributes}
				value={msgBorderSize}
				onChange={(value) =>
					setAttributes({
						msgBorderSize: value,
					})
				}
				min={0}
				max={50}
			/>
			<Range
				label={__(
					"Message Border Radius",
					"ultimate-addons-for-gutenberg"
				)}
				setAttributes={setAttributes}
				value={msgBorderRadius}
				onChange={(value) =>
					setAttributes({
						msgBorderRadius: value,
					})
				}
				min={0}
				max={100}
				unit={{
					value: msgBorderRadiusType,
					label: "msgBorderRadiusType",
				}}
				units={[
					{
						name: __("Pixel", "ultimate-addons-for-gutenberg"),
						unitValue: "px",
					},
					{
						name: __("%", "ultimate-addons-for-gutenberg"),
						unitValue: "%",
					},
				]}
			/>
			<hr className="uagb-editor__separator" />
			<h2>
				{__("Message Padding (px)", "ultimate-addons-for-gutenberg")}
			</h2>
			<RangeControl
				label={UAGB_Block_Icons.vertical_spacing}
				className={"uagb-margin-control"}
				value={msgVrPadding}
				onChange={(value) => setAttributes({ msgVrPadding: value })}
				min={0}
				max={100}
				allowReset
			/>
			<RangeControl
				label={UAGB_Block_Icons.horizontal_spacing}
				className={"uagb-margin-control"}
				value={msgHrPadding}
				onChange={(value) => setAttributes({ msgHrPadding: value })}
				min={0}
				max={100}
				allowReset
			/>
		</PanelBody>
	);
	const btnSetting = (
		<PanelBody
			title={__("Submit Button", "ultimate-addons-for-gutenberg")}
			initialOpen={false}
		>
			<SelectControl
				label={__("Button Alignment", "ultimate-addons-for-gutenberg")}
				value={buttonAlignment}
				onChange={(value) => setAttributes({ buttonAlignment: value })}
				options={[
					{
						value: "center",
						label: __("Center", "ultimate-addons-for-gutenberg"),
					},
					{
						value: "left",
						label: __("Left", "ultimate-addons-for-gutenberg"),
					},
					{
						value: "right",
						label: __("Right", "ultimate-addons-for-gutenberg"),
					},
					{
						value: "justify",
						label: __("Justified", "ultimate-addons-for-gutenberg"),
					},
				]}
			/>
			<h2>{__("Button Font", "ultimate-addons-for-gutenberg")}</h2>
			<TypographyControl
				label={__("Typography", "ultimate-addons-for-gutenberg")}
				attributes={attributes}
				setAttributes={setAttributes}
				loadGoogleFonts={{
					value: buttonLoadGoogleFonts,
					label: "buttonLoadGoogleFonts",
				}}
				fontFamily={{
					value: buttonFontFamily,
					label: "buttonFontFamily",
				}}
				fontWeight={{
					value: buttonFontWeight,
					label: "buttonFontWeight",
				}}
				fontSubset={{
					value: buttonFontSubset,
					label: "buttonFontSubset",
				}}
				fontSizeType={{
					value: buttonFontSizeType,
					label: "buttonFontSizeType",
				}}
				fontSize={{ value: buttonFontSize, label: "buttonFontSize" }}
				fontSizeMobile={{
					value: buttonFontSizeMobile,
					label: "buttonFontSizeMobile",
				}}
				fontSizeTablet={{
					value: buttonFontSizeTablet,
					label: "buttonFontSizeTablet",
				}}
				lineHeightType={{
					value: buttonLineHeightType,
					label: "buttonLineHeightType",
				}}
				lineHeight={{
					value: buttonLineHeight,
					label: "buttonLineHeight",
				}}
				lineHeightMobile={{
					value: buttonLineHeightMobile,
					label: "buttonLineHeightMobile",
				}}
				lineHeightTablet={{
					value: buttonLineHeightTablet,
					label: "buttonLineHeightTablet",
				}}
			/>
			<hr className="uagb-editor__separator" />
			{btn_border_setting}
			<hr className="uagb-editor__separator" />
			<TabPanel
				className="uagb-inspect-tabs uagb-inspect-tabs-col-2"
				activeClass="active-tab"
				tabs={[
					{
						name: "normal",
						title: __("Normal", "ultimate-addons-for-gutenberg"),
						className: "uagb-normal-tab",
					},
					{
						name: "hover",
						title: __("Hover", "ultimate-addons-for-gutenberg"),
						className: "uagb-focus-tab",
					},
				]}
			>
				{(tabName) => {
					let tabout;
					if ("normal" === tabName.name) {
						tabout = buttonNormalSettings;
					} else {
						tabout = buttonHoverSettings;
					}
					return <div>{tabout}</div>;
				}}
			</TabPanel>
			<hr className="uagb-editor__separator" />
			<h2>
				{__("Button Padding (px)", "ultimate-addons-for-gutenberg")}
			</h2>
			<RangeControl
				label={UAGB_Block_Icons.vertical_spacing}
				className={"uagb-margin-control"}
				value={buttonVrPadding}
				onChange={(value) => setAttributes({ buttonVrPadding: value })}
				min={0}
				max={200}
				initialPosition={10}
			/>
			<RangeControl
				label={UAGB_Block_Icons.horizontal_spacing}
				className={"uagb-margin-control"}
				value={buttonHrPadding}
				onChange={(value) => setAttributes({ buttonHrPadding: value })}
				min={0}
				max={200}
				initialPosition={10}
			/>
		</PanelBody>
	);

	const spacing = (
		<PanelBody
			title={__("Spacing", "ultimate-addons-for-gutenberg")}
			initialOpen={false}
		>
			<RangeControl
				label={__(
					"Label & Input Space",
					"ultimate-addons-for-gutenberg"
				)}
				value={fieldLabelSpacing}
				onChange={(value) =>
					setAttributes({ fieldLabelSpacing: value })
				}
				min={0}
				max={50}
				allowReset
			/>

			<RangeControl
				label={__("Fields Space", "ultimate-addons-for-gutenberg")}
				value={fieldSpacing}
				onChange={(value) => setAttributes({ fieldSpacing: value })}
				min={0}
				max={50}
				allowReset
			/>

			<hr className="uagb-editor__separator" />
			<h2>{__("Field Padding (px)", "ultimate-addons-for-gutenberg")}</h2>
			<RangeControl
				label={UAGB_Block_Icons.vertical_spacing}
				className={"uagb-margin-control"}
				value={fieldVrPadding}
				onChange={(value) => setAttributes({ fieldVrPadding: value })}
				min={0}
				max={200}
				initialPosition={10}
			/>
			<RangeControl
				label={UAGB_Block_Icons.horizontal_spacing}
				className={"uagb-margin-control"}
				value={fieldHrPadding}
				onChange={(value) => setAttributes({ fieldHrPadding: value })}
				min={0}
				max={200}
				initialPosition={10}
			/>
		</PanelBody>
	);

	const buttonNormalSettings = (
		<>
			<p className="uagb-setting-label">
				{__("Text Color", "ultimate-addons-for-gutenberg")}
				<span className="components-base-control__label">
					<span
						className="component-color-indicator"
						style={{ backgroundColor: buttonTextColor }}
					></span>
				</span>
			</p>
			<ColorPalette
				value={buttonTextColor}
				onChange={(colorValue) =>
					setAttributes({ buttonTextColor: colorValue })
				}
				allowReset
			/>
			<p className="uagb-setting-label">
				{__("Background Color", "ultimate-addons-for-gutenberg")}
				<span className="components-base-control__label">
					<span
						className="component-color-indicator"
						style={{ backgroundColor: buttonBgColor }}
					></span>
				</span>
			</p>
			<ColorPalette
				value={buttonBgColor}
				onChange={(colorValue) =>
					setAttributes({ buttonBgColor: colorValue })
				}
				allowReset
			/>
		</>
	);

	const buttonHoverSettings = (
		<>
			<p className="uagb-setting-label">
				{__("Text Hover Color", "ultimate-addons-for-gutenberg")}
				<span className="components-base-control__label">
					<span
						className="component-color-indicator"
						style={{ backgroundColor: buttonTextHoverColor }}
					></span>
				</span>
			</p>
			<ColorPalette
				value={buttonTextHoverColor}
				onChange={(colorValue) =>
					setAttributes({ buttonTextHoverColor: colorValue })
				}
				allowReset
			/>
			<p className="uagb-setting-label">
				{__("Background Hover Color", "ultimate-addons-for-gutenberg")}
				<span className="components-base-control__label">
					<span
						className="component-color-indicator"
						style={{ backgroundColor: buttonBgHoverColor }}
					></span>
				</span>
			</p>
			<ColorPalette
				value={buttonBgHoverColor}
				onChange={(colorValue) =>
					setAttributes({ buttonBgHoverColor: colorValue })
				}
				allowReset
			/>
		</>
	);

	/*
	 * Event to set Image as while adding.
	 */
	const onSelectForm = (id) => {
		if (!id) {
			setAttributes({ isHtml: false });
			setAttributes({ formId: null });
			return;
		}

		setAttributes({ isHtml: false });
		setAttributes({ formId: id });
	};

	return (
		<Suspense fallback={lazyLoader()}>
			<BlockControls key="controls">
				<AlignmentToolbar
					value={align}
					onChange={(value) => setAttributes({ align: value })}
				/>
			</BlockControls>
			<InspectorControls>
				{fieldSettings}
				{fieldBorderSetting}
				{typographySettings}
				{radioCheckSetting}
				{btnSetting}
				{msgSettings}
				{spacing}
			</InspectorControls>
			{loadInputGoogleFonts}
			{loadButtonGoogleFonts}
			{loadLabelGoogleFonts}
			{loadRadioGoogleFonts}
			{loadValidationGoogleFonts}
			{loadMsgGoogleFonts}
		</Suspense>
	);
};

export default React.memo(Settings);
