import React, { Suspense } from 'react';
import { __ } from '@wordpress/i18n';
import lazyLoader from '@Controls/lazy-loader';
import TypographyControl from '@Components/typography';
import WebfontLoader from '@Components/typography/fontloader';
import Border from "../../components/border";
import MultiButtonsControl from "../../components/multi-buttons-control";
import InspectorTabs from "../../components/inspector-tabs/InspectorTabs.js";
import InspectorTab, { UAGTabs } from "../../components/inspector-tabs/InspectorTab.js";
import AdvancedPopColorControl from "../../components/color-control/advanced-pop-color-control.js";
import SpacingControl from "../../components/spacing-control";
import Range from "../../components/range/Range.js";
import { InspectorControls } from '@wordpress/block-editor';
import renderSVG from "@Controls/renderIcon";
import UAGTabsControl from "../../components/tabs";
import {
	PanelBody,
	SelectControl,
	TextControl,
	ToggleControl,
	TabPanel,
	TextareaControl,
	CheckboxControl,
	ExternalLink,
	Icon,
} from '@wordpress/components';

const Settings = ( props ) => {
	props = props.parentProps;

	const { attributes, setAttributes , deviceType} = props;
	const {
		formLabel,
		buttonAlign,
		buttonSize,
		confirmationType,
		confirmationMessage,
		failedMessage,
		confirmationUrl,
		sendAfterSubmitEmail,
		afterSubmitToEmail,
		afterSubmitCcEmail,
		afterSubmitBccEmail,
		afterSubmitEmailSubject,
		submitColor,
		submitColorHover,
		submitBgColor,
		submitBgColorHover,
		submitborderStyle,
		submitborderWidth,
		submitborderRadius,
		submitborderColor,
		submitborderHoverColor,
		vPaddingSubmit,
		hPaddingSubmit,
		submitTextloadGoogleFonts,
		submitTextFontFamily,
		submitTextFontWeight,
		submitTextFontSubset,
		submitTextFontSize,
		submitTextFontSizeType,
		submitTextFontSizeTablet,
		submitTextFontSizeMobile,
		submitTextLineHeightType,
		submitTextLineHeight,
		submitTextLineHeightTablet,
		submitTextLineHeightMobile,
		labelloadGoogleFonts,
		labelFontFamily,
		labelFontWeight,
		labelFontSubset,
		labelFontSize,
		labelFontSizeType,
		labelFontSizeTablet,
		labelFontSizeMobile,
		labelLineHeightType,
		labelLineHeight,
		labelLineHeightTablet,
		labelLineHeightMobile,
		inputloadGoogleFonts,
		inputFontFamily,
		inputFontWeight,
		inputFontSubset,
		inputFontSize,
		inputFontSizeType,
		inputFontSizeTablet,
		inputFontSizeMobile,
		inputLineHeightType,
		inputLineHeight,
		inputLineHeightTablet,
		inputLineHeightMobile,
		toggleSize,
		toggleWidthSize,
		toggleHeightSize,
		toggleActiveColor,
		labelColor,
		inputColor,
		bgColor,
		inputplaceholderColor,
		inputactiveColor,
		inputborderStyle,
		inputborderWidth,
		inputborderRadius,
		inputborderColor,
		inputborderHoverColor,
		vPaddingField,
		hPaddingField,
		fieldGap,
		formStyle,
		overallAlignment,
		reCaptchaEnable,
		reCaptchaType,
		reCaptchaSecretKeyV2,
		reCaptchaSiteKeyV2,
		reCaptchaSecretKeyV3,
		reCaptchaSiteKeyV3,
		hidereCaptchaBatch,
		successMessageTextColor,
		successMessageBGColor,
		successMessageBorderColor,
		successMessageBorderStyle,
		successMessageBorderWidth,
		failedMessageTextColor,
		failedMessageBorderColor,
		failedMessageBorderStyle,
		failedMessageBorderWidth,
		failedMessageBGColor,

		successMessageBorderRadius,
		successMessageHoverBorderColor,
		failedMessageBorderRadius,
		failedMessageHoverBorderColor,
		paddingBtnTop,
		paddingBtnRight,
		paddingBtnBottom,
		paddingBtnLeft,
		paddingBtnTopTablet,
		paddingBtnRightTablet,
		paddingBtnBottomTablet,
		paddingBtnLeftTablet,
		paddingBtnTopMobile,
		paddingBtnRightMobile,
		paddingBtnBottomMobile,
		paddingBtnLeftMobile,
		paddingBtnUnit,
		mobilePaddingBtnUnit,
		tabletPaddingBtnUnit,
		paddingspacingLink,
		submitTextTransform,
		submitTextDecoration,
		labelTextTransform,
		labelTextDecoration,
		inputTransform,
		inputDecoration,
		fieldGapType,
		paddingFieldTop,
		paddingFieldRight,
		paddingFieldBottom,
		paddingFieldLeft,
		paddingFieldTopTablet,
		paddingFieldRightTablet,
		paddingFieldBottomTablet,
		paddingFieldLeftTablet,
		paddingFieldTopMobile,
		paddingFieldRightMobile,
		paddingFieldBottomMobile,
		paddingFieldLeftMobile,
		paddingFieldUnit,
		paddingFieldUnitmobile,
		paddingFieldUnitTablet,
		paddingFieldLink,
		toggleSizeType

	} = attributes;

	const generalSettings = () => {
		return (
			<PanelBody
				title={ __( 'General', 'ultimate-addons-for-gutenberg' ) }
				initialOpen={ true }
				className="uagb__url-panel-body"
			>
				<TextControl
					label={ __(
						'Hidden Field Label',
						'ultimate-addons-for-gutenberg'
					) }
					value={ formLabel }
					onChange={ ( value ) =>
						setAttributes( {
							formLabel: value,
						} )
					}
				/>
				<MultiButtonsControl
					setAttributes={setAttributes}
					label={__(
						'Style',
						"ultimate-addons-for-gutenberg"
					)}
					data={{
						value: formStyle,
						label: "formStyle",
					}}
					className="uagb-multi-button-alignment-control"
					options={[
						{
							value: "boxed",
							label: 'Boxed'

						},
						{
							value: "underlined",
							label: 'Underlined',
						},

					]}
					showIcons={false}
				/>
				<MultiButtonsControl
					setAttributes={setAttributes}
					label={__(
						"Overall Alignment",
						"ultimate-addons-for-gutenberg"
					)}
					data={{
						value: overallAlignment,
						label: "overallAlignment",
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
						}
					]}
					showIcons={true}
				/>
				<MultiButtonsControl
					setAttributes={setAttributes}
					label={__('Confirmation Type', "ultimate-addons-for-gutenberg")}
					data={{
						value: confirmationType,
						label: "confirmationType",
					}}
					className="uagb-multi-button-alignment-control"
					options={[
						{
							value: "message",
							label: ("Message"),
							tooltip: __(
								"Message",
								"ultimate-addons-for-gutenberg"
							),
						},
						{
							value: "url",
							label: ("URL Text"),
							tooltip: __(
								"Url Text",
								"ultimate-addons-for-gutenberg"
							),
						},
					]}
					showIcons={false}
				/>
				{ 'message' === confirmationType && (
				    <>
						<TextareaControl
							label="Success Message Text"
							help={ __(
								'Enter a message you want to display after successfull form submission',
								'ultimate-addons-for-gutenberg'
							) }
							value={ confirmationMessage }
							onChange={ ( value ) =>
								setAttributes( {
									confirmationMessage: value,
								} )
							}
						/>
						<TextareaControl
							label="Error Message Text"
							help={ __(
								'Enter a message you want to display after unsuccessfull form submission',
								'ultimate-addons-for-gutenberg'
							) }
							value={ failedMessage }
							onChange={ ( value ) =>
								setAttributes( {
									failedMessage: value,
								} )
							}
						/>
					</>
				)}
				{ 'url' === confirmationType && (
					<TextControl
						label={ __(
							'Success Redirect URL',
							'ultimate-addons-for-gutenberg'
						) }
						help={ __(
							'Enter a URL you want to redirect your page to after form Submission',
							'ultimate-addons-for-gutenberg'
						) }
						value={ confirmationUrl }
						onChange={ ( value ) =>
							setAttributes( {
								confirmationUrl: value,
							} )
						}
					/>
				) }
			</PanelBody>
		);
	};
	const successMessageStyle = () => {
		return (
			<PanelBody
				title={ __( 'Success Message', 'ultimate-addons-for-gutenberg' ) }
				initialOpen={ false }
				className="uagb__url-panel-body"
			>
				{ 'message' === confirmationType && (
				    <>
						<AdvancedPopColorControl
							label={__(
								'Text Color',
								"ultimate-addons-for-gutenberg"
							)}
							colorValue={successMessageTextColor ? successMessageTextColor : ""}
							onColorChange={(value) =>
								setAttributes({ successMessageTextColor: value })
							}
						/>
						<AdvancedPopColorControl
							label={__(
								'Background Color',
								"ultimate-addons-for-gutenberg"
							)}
							colorValue={successMessageBGColor ? successMessageBGColor : ""}
							onColorChange={(value) =>
								setAttributes({ successMessageBGColor: value })
							}
						/>
						<Border
							setAttributes={setAttributes}
							borderStyle={{
								value: successMessageBorderStyle,
								label: "successMessageBorderStyle",
								title: __(
									"Border Style",
									"ultimate-addons-for-gutenberg"
								),
							}}
							borderWidth={{
								value: successMessageBorderWidth,
								label: "successMessageBorderWidth",
								title: __(
									"Width",
									"ultimate-addons-for-gutenberg"
								),
							}}
							borderRadius={{
								value: successMessageBorderRadius,
								label: "successMessageBorderRadius",
								title: __(
									"Radius",
									"ultimate-addons-for-gutenberg"
								),
							}}
							borderColor={{
								value: successMessageBorderColor,
								label: "successMessageBorderColor",
								title: __(
									"Color",
									"ultimate-addons-for-gutenberg"
								),
							}}
							borderHoverColor={{
								value: successMessageHoverBorderColor,
								label: "successMessageHoverBorderColor",
								title: __(
									"Hover Color",
									"ultimate-addons-for-gutenberg"
								),
							}}
							disableBottomSeparator={true}
						/>
					</>
				) }
			</PanelBody>
			)
	}
	const failedMessageStyle = () => {
		return (
			<PanelBody
				title={ __( 'Error Message', 'ultimate-addons-for-gutenberg' ) }
				initialOpen={ false }
				className="uagb__url-panel-body"
			>
				{ 'message' === confirmationType && (
				    <>
							<AdvancedPopColorControl
								label={__(
									'Text Color',
									"ultimate-addons-for-gutenberg"
								)}
								colorValue={failedMessageTextColor ? failedMessageTextColor : ""}
								onColorChange={(value) =>
									setAttributes({ failedMessageTextColor: value })
								}
							/>
							<AdvancedPopColorControl
								label={__(
									"Background Color",
									"ultimate-addons-for-gutenberg"
								)}
								colorValue={failedMessageBGColor ? failedMessageBGColor : ""}
								onColorChange={(value) =>
									setAttributes({ failedMessageBGColor: value })
								}
							/>
							<Border
								setAttributes={setAttributes}
								borderStyle={{
									value: failedMessageBorderStyle,
									label: "failedMessageBorderStyle",
									title: __(
										"Border Style",
										"ultimate-addons-for-gutenberg"
									),
								}}
								borderWidth={{
									value: failedMessageBorderWidth,
									label: "failedMessageBorderWidth",
									title: __(
										"Width",
										"ultimate-addons-for-gutenberg"
									),
								}}
								borderRadius={{
									value: failedMessageBorderRadius,
									label: "failedMessageBorderRadius",
									title: __(
										"Radius",
										"ultimate-addons-for-gutenberg"
									),
								}}
								borderColor={{
									value: failedMessageBorderColor,
									label: "failedMessageBorderColor",
									title: __(
										"Color",
										"ultimate-addons-for-gutenberg"
									),
								}}
								borderHoverColor={{
									value: failedMessageHoverBorderColor,
									label: "failedMessageHoverBorderColor",
									title: __(
										"Hover Color",
										"ultimate-addons-for-gutenberg"
									),
								}}
								disableBottomSeparator={true}
							/>
					</>
				) }
			</PanelBody>
			)
	}
	const submitButtonStyle = () => {
		return (
			<PanelBody
				title={ __( 'Submit Button', 'ultimate-addons-for-gutenberg' ) }
				initialOpen={ false }
				className="uagb__url-panel-body"
			>
				<SelectControl
					label={ __(
						'Button Size',
						'ultimate-addons-for-gutenberg'
					) }
					value={ buttonSize }
					onChange={ ( value ) =>
						setAttributes( {
							buttonSize: value,
						} )
					}
					options={ [
						{
							value: 'small',
							label: __(
								'Small',
								'ultimate-addons-for-gutenberg'
							),
						},
						{
							value: 'medium',
							label: __(
								'Medium',
								'ultimate-addons-for-gutenberg'
							),
						},
						{
							value: 'large',
							label: __(
								'Large',
								'ultimate-addons-for-gutenberg'
							),
						},
						{
							value: 'extralarge',
							label: __(
								'Extra Large',
								'ultimate-addons-for-gutenberg'
							),
						},
						{
							value: 'full',
							label: __(
								'Full',
								'ultimate-addons-for-gutenberg'
							),
						},
					] }
				/>
				<MultiButtonsControl
					setAttributes={setAttributes}
					label={__(
						"Button Alignment",
						"ultimate-addons-for-gutenberg"
					)}
					data={{
						value: buttonAlign,
						label: "buttonAlign",
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
						}
					]}
					showIcons={true}
				/>
				<TypographyControl
					label={ __(
						'Typography',
						'ultimate-addons-for-gutenberg'
					) }
					attributes={ attributes }
					setAttributes={ setAttributes }
					loadGoogleFonts={ {
						value: submitTextloadGoogleFonts,
						label: __(
							'submitTextloadGoogleFonts',
							'ultimate-addons-for-gutenberg'
						),
					} }
					fontFamily={ {
						value: submitTextFontFamily,
						label: __(
							'submitTextFontFamily',
							'ultimate-addons-for-gutenberg'
						),
					} }
					fontWeight={ {
						value: submitTextFontWeight,
						label: __(
							'submitTextFontWeight',
							'ultimate-addons-for-gutenberg'
						),
					} }
					fontSubset={ {
						value: submitTextFontSubset,
						label: __(
							'submitTextFontSubset',
							'ultimate-addons-for-gutenberg'
						),
					} }
					fontSizeType={ {
						value: submitTextFontSizeType,
						label: __(
							'submitTextFontSizeType',
							'ultimate-addons-for-gutenberg'
						),
					} }
					fontSize={ {
						value: submitTextFontSize,
						label: __(
							'submitTextFontSize',
							'ultimate-addons-for-gutenberg'
						),
					} }
					fontSizeMobile={ {
						value: submitTextFontSizeMobile,
						label: __(
							'submitTextFontSizeMobile',
							'ultimate-addons-for-gutenberg'
						),
					} }
					fontSizeTablet={ {
						value: submitTextFontSizeTablet,
						label: __(
							'submitTextFontSizeTablet',
							'ultimate-addons-for-gutenberg'
						),
					} }
					lineHeightType={ {
						value: submitTextLineHeightType,
						label: __(
							'submitTextLineHeightType',
							'ultimate-addons-for-gutenberg'
						),
					} }
					lineHeight={ {
						value: submitTextLineHeight,
						label: __(
							'submitTextLineHeight',
							'ultimate-addons-for-gutenberg'
						),
					} }
					lineHeightMobile={ {
						value: submitTextLineHeightMobile,
						label: __(
							'submitTextLineHeightMobile',
							'ultimate-addons-for-gutenberg'
						),
					} }
					lineHeightTablet={ {
						value: submitTextLineHeightTablet,
						label: __(
							'submitTextLineHeightTablet',
							'ultimate-addons-for-gutenberg'
						),
					} }
					transform={{
						value: submitTextTransform,
						label: "submitTextTransform",
					}}
					decoration={{
						value: submitTextDecoration,
						label: "submitTextDecoration",
					}}
				/>
				<SpacingControl
					{...props}
					label={__(
						"Button Padding",
						"ultimate-addons-for-gutenberg"
					)}
					valueTop={{
						value: paddingBtnTop,
						label: "paddingBtnTop",
					}}
					valueRight={{
						value: paddingBtnRight,
						label: "paddingBtnRight",
					}}
					valueBottom={{
						value: paddingBtnBottom,
						label: "paddingBtnBottom",
					}}
					valueLeft={{
						value: paddingBtnLeft,
						label: "paddingBtnLeft",
					}}
					valueTopTablet={{
						value: paddingBtnTopTablet,
						label: "paddingBtnTopTablet",
					}}
					valueRightTablet={{
						value: paddingBtnRightTablet,
						label: "paddingBtnRightTablet",
					}}
					valueBottomTablet={{
						value: paddingBtnBottomTablet,
						label: "paddingBtnBottomTablet",
					}}
					valueLeftTablet={{
						value: paddingBtnLeftTablet,
						label: "paddingBtnLeftTablet",
					}}
					valueTopMobile={{
						value: paddingBtnTopMobile,
						label: "paddingBtnTopMobile",
					}}
					valueRightMobile={{
						value: paddingBtnRightMobile,
						label: "paddingBtnRightMobile",
					}}
					valueBottomMobile={{
						value: paddingBtnBottomMobile,
						label: "paddingBtnBottomMobile",
					}}
					valueLeftMobile={{
						value: paddingBtnLeftMobile,
						label: "paddingBtnLeftMobile",
					}}
					unit={{
						value: paddingBtnUnit,
						label: "paddingBtnUnit",
					}}
					mUnit={{
						value: mobilePaddingBtnUnit,
						label: "mobilePaddingBtnUnit",
					}}
					tUnit={{
						value: tabletPaddingBtnUnit,
						label: "tabletPaddingBtnUnit",
					}}
					deviceType={deviceType}
					attributes={attributes}
					setAttributes={setAttributes}
					link={{
						value: paddingspacingLink,
						label: "paddingspacingLink",
					}}
				/>
				<UAGTabsControl
					tabs={[
						{
							name: "normal",
							title: __(
								"Normal",
								"ultimate-addons-for-gutenberg"
							),
						},
						{
							name: "hover",
							title: __(
								"Hover",
								"ultimate-addons-for-gutenberg"
							),
						},
					]}
					normal={
						<>
						<AdvancedPopColorControl
							label={__( "Color", "ultimate-addons-for-gutenberg" )}
							colorValue={ submitColor ? submitColor : "" }
							onColorChange={(value) =>
								setAttributes({ submitColor: value })
							}
						/>
						<AdvancedPopColorControl
							label={__( "Background Color", "ultimate-addons-for-gutenberg" )}
							colorValue={ submitBgColor ? submitBgColor : "" }
							onColorChange={(value) =>
								setAttributes({ submitBgColor: value })
							}
						/>
						</>
					}
					hover={
						<>
						<AdvancedPopColorControl
							label={__( "Color", "ultimate-addons-for-gutenberg" )}
							colorValue={ submitColorHover ? submitColorHover : "" }
							onColorChange={(value) =>
								setAttributes({ submitColorHover: value })
							}
						/>
						<AdvancedPopColorControl
							label={__( "Background Color", "ultimate-addons-for-gutenberg" )}
							colorValue={ submitBgColorHover ? submitBgColorHover : "" }
							onColorChange={(value) =>
								setAttributes({ submitBgColorHover: value })
							}
						/>
						</>
					}
				/>
				<Border
					setAttributes={setAttributes}
					borderStyle={{
						value: submitborderStyle,
						label: "submitborderStyle",
						title: __(
							"Border Style",
							"ultimate-addons-for-gutenberg"
						),
					}}
					borderWidth={{
						value: submitborderWidth,
						label: "submitborderWidth",
						title: __(
							"Width",
							"ultimate-addons-for-gutenberg"
						),
					}}
					borderRadius={{
						value: submitborderRadius,
						label: "submitborderRadius",
						title: __(
							"Radius",
							"ultimate-addons-for-gutenberg"
						),
					}}
					borderColor={{
						value: submitborderColor,
						label: "submitborderColor",
						title: __(
							"Color",
							"ultimate-addons-for-gutenberg"
						),
					}}
					borderHoverColor={{
						value: submitborderHoverColor,
						label: "submitborderHoverColor",
						title: __(
							"Hover Color",
							"ultimate-addons-for-gutenberg"
						),
					}}
					disableBottomSeparator={true}
				/>
				
			</PanelBody>
		);
	};

	const afterSubmitActions = () => {
		return (
			<PanelBody
				title={ __( 'After Submit Actions' ) }
				initialOpen={ false }
				className="uagb__url-panel-body"
			>
				<ToggleControl
					label={ __(
						'Email',
						'ultimate-addons-for-gutenberg'
					) }
					checked={ sendAfterSubmitEmail }
					onChange={ () =>
						setAttributes( {
							sendAfterSubmitEmail: ! sendAfterSubmitEmail,
						} )
					}
				/>
				{ true === sendAfterSubmitEmail && (
					<>
						<UAGTabsControl
							tabs={[
								{
									name: "to",
									title: __(
										"To",
										"ultimate-addons-for-gutenberg"
									),
								},
								{
									name: "cc",
									title: __(
										"CC",
										"ultimate-addons-for-gutenberg"
									),
								},
								{
									name: "bcc",
									title: __(
										"BCC",
										"ultimate-addons-for-gutenberg"
									),
								},
							]}
							to={
								<TextControl
												placeholder={ __(
													'Email',
													'ultimate-addons-for-gutenberg'
												) }
												value={ afterSubmitToEmail }
												onChange={ ( value ) =>
													setAttributes( {
														afterSubmitToEmail: value,
													} )
												}
											/>
								
							}
							cc={
								<TextControl
												placeholder={ __(
													'Email',
													'ultimate-addons-for-gutenberg'
												) }
												value={ afterSubmitCcEmail }
												onChange={ ( value ) =>
													setAttributes( {
														afterSubmitCcEmail: value,
													} )
												}
											/>
							}
							bcc={
								<TextControl
								placeholder={ __(
									'Email',
									'ultimate-addons-for-gutenberg'
								) }
								value={ afterSubmitBccEmail }
								onChange={ ( value ) =>
									setAttributes( {
										afterSubmitBccEmail: value,
									} )
								}
							/>
							}
							disableBottomSeparator = {false}
						/>
						<TextControl
							label={ __(
								'Subject',
								'ultimate-addons-for-gutenberg'
							) }
							placeholder={ __(
								'Subject',
								'ultimate-addons-for-gutenberg'
							) }
							value={ afterSubmitEmailSubject }
							onChange={ ( value ) =>
								setAttributes( {
									afterSubmitEmailSubject: value,
								} )
							}
						/>
					</>
				) }
			</PanelBody>
		);
	};
	
	const labelSettings = () => {
		return (
			<PanelBody
				title={ __( 'Label', 'ultimate-addons-for-gutenberg' ) }
				initialOpen={ false }
				className="uagb__url-panel-body"
			>
				<TypographyControl
					label={ __(
						'Typography',
						'ultimate-addons-for-gutenberg'
					) }
					attributes={ attributes }
					setAttributes={ setAttributes }
					loadGoogleFonts={ {
						value: labelloadGoogleFonts,
						label: __(
							'labelloadGoogleFonts',
							'ultimate-addons-for-gutenberg'
						),
					} }
					fontFamily={ {
						value: labelFontFamily,
						label: __(
							'labelFontFamily',
							'ultimate-addons-for-gutenberg'
						),
					} }
					fontWeight={ {
						value: labelFontWeight,
						label: __(
							'labelFontWeight',
							'ultimate-addons-for-gutenberg'
						),
					} }
					fontSubset={ {
						value: labelFontSubset,
						label: __(
							'labelFontSubset',
							'ultimate-addons-for-gutenberg'
						),
					} }
					fontSizeType={ {
						value: labelFontSizeType,
						label: __(
							'labelFontSizeType',
							'ultimate-addons-for-gutenberg'
						),
					} }
					fontSize={ {
						value: labelFontSize,
						label: __(
							'labelFontSize',
							'ultimate-addons-for-gutenberg'
						),
					} }
					fontSizeMobile={ {
						value: labelFontSizeMobile,
						label: __(
							'labelFontSizeMobile',
							'ultimate-addons-for-gutenberg'
						),
					} }
					fontSizeTablet={ {
						value: labelFontSizeTablet,
						label: __(
							'labelFontSizeTablet',
							'ultimate-addons-for-gutenberg'
						),
					} }
					lineHeightType={ {
						value: labelLineHeightType,
						label: __(
							'labelLineHeightType',
							'ultimate-addons-for-gutenberg'
						),
					} }
					lineHeight={ {
						value: labelLineHeight,
						label: __(
							'labelLineHeight',
							'ultimate-addons-for-gutenberg'
						),
					} }
					lineHeightMobile={ {
						value: labelLineHeightMobile,
						label: __(
							'labelLineHeightMobile',
							'ultimate-addons-for-gutenberg'
						),
					} }
					lineHeightTablet={ {
						value: labelLineHeightTablet,
						label: __(
							'labelLineHeightTablet',
							'ultimate-addons-for-gutenberg'
						),
					} }
					transform={{
						value: labelTextTransform,
						label: "labelTextTransform",
					}}
					decoration={{
						value: labelTextDecoration,
						label: "labelTextDecoration",
					}}
				/>
				<AdvancedPopColorControl
					label={__(
						'Color',
						"ultimate-addons-for-gutenberg"
					)}
					colorValue={labelColor ? labelColor : ""}
					onColorChange={(value) =>
						setAttributes({ labelColor: value })
					}
				/>
			</PanelBody>
		);
	};
	const inputSettings = () => {
		return (
			<PanelBody
				title={ __( 'Input', 'ultimate-addons-for-gutenberg' ) }
				initialOpen={ false }
				className="uagb__url-panel-body"
			>
				<TypographyControl
					label={ __(
						'Typography',
						'ultimate-addons-for-gutenberg'
					) }
					attributes={ attributes }
					setAttributes={ setAttributes }
					loadGoogleFonts={ {
						value: inputloadGoogleFonts,
						label: __(
							'inputloadGoogleFonts',
							'ultimate-addons-for-gutenberg'
						),
					} }
					fontFamily={ {
						value: inputFontFamily,
						label: __(
							'inputFontFamily',
							'ultimate-addons-for-gutenberg'
						),
					} }
					fontWeight={ {
						value: inputFontWeight,
						label: __(
							'inputFontWeight',
							'ultimate-addons-for-gutenberg'
						),
					} }
					fontSubset={ {
						value: inputFontSubset,
						label: __(
							'inputFontSubset',
							'ultimate-addons-for-gutenberg'
						),
					} }
					fontSizeType={ {
						value: inputFontSizeType,
						label: __(
							'inputFontSizeType',
							'ultimate-addons-for-gutenberg'
						),
					} }
					fontSize={ {
						value: inputFontSize,
						label: __(
							'inputFontSize',
							'ultimate-addons-for-gutenberg'
						),
					} }
					fontSizeMobile={ {
						value: inputFontSizeMobile,
						label: __(
							'inputFontSizeMobile',
							'ultimate-addons-for-gutenberg'
						),
					} }
					fontSizeTablet={ {
						value: inputFontSizeTablet,
						label: __(
							'inputFontSizeTablet',
							'ultimate-addons-for-gutenberg'
						),
					} }
					lineHeightType={ {
						value: inputLineHeightType,
						label: __(
							'inputLineHeightType',
							'ultimate-addons-for-gutenberg'
						),
					} }
					lineHeight={ {
						value: inputLineHeight,
						label: __(
							'inputLineHeight',
							'ultimate-addons-for-gutenberg'
						),
					} }
					lineHeightMobile={ {
						value: inputLineHeightMobile,
						label: __(
							'inputLineHeightMobile',
							'ultimate-addons-for-gutenberg'
						),
					} }
					lineHeightTablet={ {
						value: inputLineHeightTablet,
						label: __(
							'inputLineHeightTablet',
							'ultimate-addons-for-gutenberg'
						),
					} }
					transform={{
						value: inputTransform,
						label: "inputTransform",
					}}
					decoration={{
						value: inputDecoration,
						label: "inputDecoration",
					}}
				/>
				<AdvancedPopColorControl
					label={__(
						'Color',
						"ultimate-addons-for-gutenberg"
					)}
					colorValue={inputColor ? inputColor : ""}
					onColorChange={(value) =>
						setAttributes({ inputColor: value })
					}
				/>
				<AdvancedPopColorControl
					label={__(
						'Placeholder Color',
						"ultimate-addons-for-gutenberg"
					)}
					colorValue={inputplaceholderColor ? inputplaceholderColor : ""}
					onColorChange={(value) =>
						setAttributes({ inputplaceholderColor: value })
					}
				/>
				<AdvancedPopColorControl
					label={__(
						'Active Color',
						"ultimate-addons-for-gutenberg"
					)}
					colorValue={inputactiveColor ? inputactiveColor : ""}
					onColorChange={(value) =>
						setAttributes({ inputactiveColor: value })
					}
				/>
				<AdvancedPopColorControl
					label={__(
						'Background Color',
						"ultimate-addons-for-gutenberg"
					)}
					colorValue={bgColor ? bgColor : ""}
					onColorChange={(value) =>
						setAttributes({ bgColor: value })
					}
				/>
				<Border
					setAttributes={setAttributes}
					borderStyle={{
						value: inputborderStyle,
						label: "inputborderStyle",
						title: __(
							"Border Style",
							"ultimate-addons-for-gutenberg"
						),
					}}
					borderWidth={{
						value: inputborderWidth,
						label: "inputborderWidth",
						title: __(
							"Width",
							"ultimate-addons-for-gutenberg"
						),
					}}
					borderRadius={{
						value: inputborderRadius,
						label: "inputborderRadius",
						title: __(
							"Radius",
							"ultimate-addons-for-gutenberg"
						),
					}}
					borderColor={{
						value: inputborderColor,
						label: "inputborderColor",
						title: __(
							"Color",
							"ultimate-addons-for-gutenberg"
						),
					}}
					borderHoverColor={{
						value: inputborderHoverColor,
						label: "inputborderHoverColor",
						title: __(
							"Hover Color",
							"ultimate-addons-for-gutenberg"
						),
					}}
					disableBottomSeparator={true}
				/>
			</PanelBody>
		);
	};
	const fieldSettings = () => {
		return (
			<PanelBody
				title={ __( 'Field', 'ultimate-addons-for-gutenberg' ) }
				initialOpen={ false }
				className="uagb__url-panel-body"
			>
				<Range
					label={ __(
						'Spacing between fields',
						'ultimate-addons-for-gutenberg'
					) }
					setAttributes={setAttributes}
					className={ 'uagb-padding-control' }
					value={ fieldGap }
					onChange={ ( value ) =>
						setAttributes( {
							fieldGap: value,
						} )
					}
					min={ 0 }
					max={ 100 }
					unit={{
						value: fieldGapType,
						label: "fieldGapType",
					}}
				/>
				<SpacingControl
					{...props}
					label={__(
						"Padding",
						"ultimate-addons-for-gutenberg"
					)}
					valueTop={{
						value: paddingFieldTop,
						label: "paddingFieldTop",
					}}
					valueRight={{
						value: paddingFieldRight,
						label: "paddingFieldRight",
					}}
					valueBottom={{
						value: paddingFieldBottom,
						label: "paddingFieldBottom",
					}}
					valueLeft={{
						value: paddingFieldLeft,
						label: "paddingFieldLeft",
					}}
					valueTopTablet={{
						value: paddingFieldTopTablet,
						label: "paddingFieldTopTablet",
					}}
					valueRightTablet={{
						value: paddingFieldRightTablet,
						label: "paddingFieldRightTablet",
					}}
					valueBottomTablet={{
						value: paddingFieldBottomTablet,
						label: "paddingFieldBottomTablet",
					}}
					valueLeftTablet={{
						value: paddingFieldLeftTablet,
						label: "paddingFieldLeftTablet",
					}}
					valueTopMobile={{
						value: paddingFieldTopMobile,
						label: "paddingFieldTopMobile",
					}}
					valueRightMobile={{
						value: paddingFieldRightMobile,
						label: "paddingFieldRightMobile",
					}}
					valueBottomMobile={{
						value: paddingFieldBottomMobile,
						label: "paddingFieldBottomMobile",
					}}
					valueLeftMobile={{
						value: paddingFieldLeftMobile,
						label: "paddingFieldLeftMobile",
					}}
					unit={{
						value: paddingFieldUnit,
						label: "paddingFieldUnit",
					}}
					mUnit={{
						value: paddingFieldUnitmobile,
						label: "paddingFieldUnitmobile",
					}}
					tUnit={{
						value: paddingFieldUnitTablet,
						label: "paddingFieldUnitTablet",
					}}
					deviceType={deviceType}
					attributes={attributes}
					setAttributes={setAttributes}
					link={{
						value: paddingFieldLink,
						label: "paddingFieldLink",
					}}
				/>
			</PanelBody>
		);
	};
	const checkboxSettings = () => {
		return (
			<PanelBody
				title={ __( 'Checkbox / Toggle', 'ultimate-addons-for-gutenberg' ) }
				initialOpen={ false }
				className="uagb__url-panel-body"
			>
				<Range
					label={ __(
						'Checkbox/Radio Size',
						'ultimate-addons-for-gutenberg'
					) }
					setAttributes={setAttributes}
					value={ toggleSize }
					onChange={ ( value ) =>
						setAttributes( {
							toggleSize: value,
						} )
					}
					min={ 0 }
					max={ 50 }
					unit={{
						value: toggleSizeType,
						label: "toggleSizeType",
					}}
				/>
				<Range
					label={ __(
						'Toggle Width',
						'ultimate-addons-for-gutenberg'
					) }
					value={ toggleWidthSize }
					setAttributes={setAttributes}
					onChange={ ( value ) =>
						setAttributes( {
							toggleWidthSize: value,
						} )
					}
					min={ 0 }
					max={ 50 }
					displayUnit = {false}
				/>
				<Range
					label={ __(
						'Toggle Height',
						'ultimate-addons-for-gutenberg'
					) }
					setAttributes={setAttributes}
					value={ toggleHeightSize }
					onChange={ ( value ) =>
						setAttributes( {
							toggleHeightSize: value,
						} )
					}
					min={ 0 }
					max={ 50 }
					displayUnit = {false}
				/>
				<AdvancedPopColorControl
					label={__(
						'Toggle Active Color',
						"ultimate-addons-for-gutenberg"
					)}
					colorValue={toggleActiveColor ? toggleActiveColor : ""}
					onColorChange={(value) =>
						setAttributes({ toggleActiveColor: value })
					}
				/>
			</PanelBody>
		);
	};

	const googleReCaptcha = () => {
		return (
			<PanelBody
				title={ __(
					'Google reCAPTCHA',
					'ultimate-addons-for-gutenberg'
				) }
				initialOpen={ false }
			>
				<p className="uagb-form-notice">
					{ __(
						'P.S. Note that If you are using two forms on the same page with the different reCAPTCHA versions (V2 checkbox and V3), it will create conflicts between the versions. Kindly avoid using different versions on same page. ',
						'ultimate-addons-for-gutenberg'
					) }
				</p>

				<ToggleControl
					label={ __(
						'Enable reCAPTCHA ',
						'ultimate-addons-for-gutenberg'
					) }
					checked={ reCaptchaEnable }
					onChange={ () =>
						setAttributes( {
							reCaptchaEnable: ! reCaptchaEnable,
						} )
					}
				/>
				{ reCaptchaEnable && (
					<MultiButtonsControl
						setAttributes={setAttributes}
						label={__('Select Version', "ultimate-addons-for-gutenberg")}
						data={{
							value: reCaptchaType,
							label: "reCaptchaType",
						}}
						className="uagb-multi-button-alignment-control"
						options={[
							{
								value: "v2",
								label: ("V2"),
								tooltip: __(
									"V2",
									"ultimate-addons-for-gutenberg"
								),
							},
							{
								value: "v3",
								label: ("V3"),
								tooltip: __(
									"V3",
									"ultimate-addons-for-gutenberg"
								),
							},
						]}
						showIcons={false}
					/>
				) }
				{ reCaptchaEnable && 'v2' === reCaptchaType && (
					<>
						<TextControl
							label={ __(
								'Site Key',
								'ultimate-addons-for-gutenberg'
							) }
							value={ reCaptchaSiteKeyV2 }
							onChange={ ( value ) =>
								setAttributes( {
									reCaptchaSiteKeyV2: value,
								} )
							}
							placeholder={ __(
								'Enter v2 Keys',
								'ultimate-addons-for-gutenberg'
							) }
						/>
						<TextControl
							label={ __(
								'Secret Key',
								'ultimate-addons-for-gutenberg'
							) }
							value={ reCaptchaSecretKeyV2 }
							onChange={ ( value ) =>
								setAttributes( {
									reCaptchaSecretKeyV2: value,
								} )
							}
							placeholder={ __(
								'Enter v2 Keys',
								'ultimate-addons-for-gutenberg'
							) }
						/>
					</>
				) }
				{ reCaptchaEnable && 'v3' === reCaptchaType && (
					<>
						<TextControl
							label={ __(
								'Site Key',
								'ultimate-addons-for-gutenberg'
							) }
							value={ reCaptchaSiteKeyV3 }
							onChange={ ( value ) =>
								setAttributes( {
									reCaptchaSiteKeyV3: value,
								} )
							}
							placeholder={ __(
								'Enter v3 Keys',
								'ultimate-addons-for-gutenberg'
							) }
						/>
						<TextControl
							label={ __(
								'Secret Key',
								'ultimate-addons-for-gutenberg'
							) }
							value={ reCaptchaSecretKeyV3 }
							onChange={ ( value ) =>
								setAttributes( {
									reCaptchaSecretKeyV3: value,
								} )
							}
							placeholder={ __(
								'Enter v3 Keys',
								'ultimate-addons-for-gutenberg'
							) }
						/>
						<ToggleControl
							label={ __(
								'Hide reCAPTCHA Badge',
								'ultimate-addons-for-gutenberg'
							) }
							checked={ hidereCaptchaBatch }
							onChange={ () =>
								setAttributes( {
									hidereCaptchaBatch: ! hidereCaptchaBatch,
								} )
							}
						/>
					</>
				) }
				<h2> { __( 'Know More', 'ultimate-addons-for-gutenberg' ) }</h2>
				<ExternalLink href="https://www.google.com/recaptcha/admin/create">
					{ __( 'Get Keys', 'ultimate-addons-for-gutenberg' ) }
				</ExternalLink>
				<ExternalLink href="https://developers.google.com/recaptcha/intro">
					{ __(
						' | Documentation',
						'ultimate-addons-for-gutenberg'
					) }
				</ExternalLink>
			</PanelBody>
		);
	};

	let loadsubmittextGoogleFonts;

	if ( submitTextloadGoogleFonts == true ) {
		const qconfig = {
			google: {
				families: [
					submitTextFontFamily +
						( submitTextFontWeight
							? ':' + submitTextFontWeight
							: '' ),
				],
			},
		};
		loadsubmittextGoogleFonts = (
			<WebfontLoader config={ qconfig }></WebfontLoader>
		);
	}

	let loadlabelGoogleFonts;

	if ( labelloadGoogleFonts == true ) {
		const qconfig = {
			google: {
				families: [
					labelFontFamily +
						( labelFontWeight ? ':' + labelFontWeight : '' ),
				],
			},
		};
		loadlabelGoogleFonts = (
			<WebfontLoader config={ qconfig }></WebfontLoader>
		);
	}

	let loadinputGoogleFonts;

	if ( inputloadGoogleFonts == true ) {
		const qconfig = {
			google: {
				families: [
					inputFontFamily +
						( inputFontWeight ? ':' + inputFontWeight : '' ),
				],
			},
		};
		loadinputGoogleFonts = (
			<WebfontLoader config={ qconfig }></WebfontLoader>
		);
	}

	return (
		<>
			<InspectorControls>
				<InspectorTabs>
					<InspectorTab {...UAGTabs.general}>
						{ generalSettings() }
						{ afterSubmitActions() }
						{ googleReCaptcha() }
					</InspectorTab>
					<InspectorTab {...UAGTabs.style}>
						{labelSettings()}
						{inputSettings()}
						{fieldSettings()}
						{checkboxSettings()}
						{successMessageStyle()}
						{failedMessageStyle()}
						{submitButtonStyle()}
					</InspectorTab>
					<InspectorTab {...UAGTabs.advance}>
					</InspectorTab>
				</InspectorTabs>
			</InspectorControls>
			<Suspense fallback={ lazyLoader() }>
				{ loadsubmittextGoogleFonts }
				{ loadlabelGoogleFonts }
				{ loadinputGoogleFonts }
			</Suspense>
		</>
	);
};

export default React.memo( Settings );
