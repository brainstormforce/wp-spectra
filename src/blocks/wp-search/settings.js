import { __ } from '@wordpress/i18n';
import TypographyControl from '@Components/typography';
import BoxShadowControl from '@Components/box-shadow';
import MultiButtonsControl from "../../components/multi-buttons-control";
import WebfontLoader from '@Components/typography/fontloader';
import React from 'react';
import Border from "../../components/border";
import SpacingControl from "../../components/spacing-control";
import Range from "../../components/range/Range.js";
import UAGTabsControl from "../../components/tabs";
import InspectorTabs from "../../components/inspector-tabs/InspectorTabs.js";
import InspectorTab, {
	UAGTabs,
} from "../../components/inspector-tabs/InspectorTab.js";
import AdvancedPopColorControl from "../../components/color-control/advanced-pop-color-control.js";
import {
	PanelBody,
	SelectControl,
	TextControl,
} from '@wordpress/components';

import { InspectorControls } from '@wordpress/block-editor';

const Settings = ( props ) => {
	props = props.parentProps;

	const { attributes, setAttributes, deviceType } = props;

	const {
		layout,
		placeholder,
		inputSize,
		textColor,
		inputBgColor,
		boxShadowColor,
		boxShadowHOffset,
		boxShadowVOffset,
		boxShadowBlur,
		boxShadowSpread,
		boxShadowPosition,
		borderStyle,
		borderWidth,
		borderRadius,
		borderHColor,
		borderColor,
		buttonBgColor,
		buttonBgHoverColor,
		buttonIconColor,
		buttonIconHoverColor,
		buttonWidth,
		buttonWidthType,
		buttonIconSize,
		buttonIconSizeType,
		iconColor,
		iconSize,
		inputloadGoogleFonts,
		inputFontFamily,
		inputFontWeight,
		inputFontSubset,
		inputFontSize,
		inputFontSizeType,
		inputFontSizeTablet,
		inputFontSizeMobile,
		inputLineHeight,
		inputLineHeightType,
		inputLineHeightTablet,
		inputLineHeightMobile,
		inputPaddingTypeDesktop,
		vinputPaddingMobile,
		vinputPaddingTablet,
		vinputPaddingDesktop,
		hinputPaddingMobile,
		hinputPaddingTablet,
		hinputPaddingDesktop,
		buttonType,
		buttonText,
		buttonloadGoogleFonts,
		buttonFontFamily,
		buttonFontWeight,
		buttonFontSubset,
		buttonFontSize,
		buttonFontSizeType,
		buttonFontSizeTablet,
		buttonFontSizeMobile,
		buttonLineHeight,
		buttonLineHeightType,
		buttonLineHeightTablet,
		buttonTransform,
		buttonDecoration,
		buttonLineHeightMobile,
		buttonTextColor,
		buttonTextHoverColor,
		inputSizeType,
		paddingInputTop,
		paddingInputRight,
		paddingInputBottom,
		paddingInputLeft,
		paddingInputTopTablet,
		paddingInputRightTablet,
		paddingInputBottomTablet,
		paddingInputLeftTablet,
		paddingInputTopMobile,
		paddingInputRightMobile,
		paddingInputBottomMobile,
		paddingInputLeftMobile,
		paddingInputUnit,
		mobilePaddingInputUnit,
		tabletPaddingInputUnit,
		spacingLink,
		iconSizeType,
		inputTransform,
		inputDecoration,
	} = attributes;

	const generalSettings = () => {
		return (
			<PanelBody
				initialOpen={ true }
			>
				<MultiButtonsControl
					setAttributes={setAttributes}
					label={__(
						"Layout",
						"ultimate-addons-for-gutenberg"
					)}
					data={{
						value: layout,
						label: "layout",
					}}
					className="uagb-multi-button-alignment-control"
					options={[
						{
							value: "input-button",
							label: 'Classic',

						},
						{
							value: "input",
							label: 'Minimal',
						},

					]}
					showIcons={false}
				/>
					<TextControl
						label={ __(
							'Placeholder',
							'ultimate-addons-for-gutenberg'
						) }
						value={ placeholder }
						onChange={ ( value ) =>
							setAttributes( {
								placeholder: value,
							} )
						}
					/>
					<Range
						label={__(
							'Input Width',
							"ultimate-addons-for-gutenberg"
						)}
						setAttributes={setAttributes}
						value={inputSize}
						onChange={(value) =>
							setAttributes({ inputSize: value })
						}
						min={0}
						max={300}
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
									"Em",
									"ultimate-addons-for-gutenberg"
								),
								unitValue: "em",
							},
							{
								name: __(
									"%",
									"ultimate-addons-for-gutenberg"
								),
								unitValue: "%",
							},
						]}
						unit={{
							value: inputSizeType,
							label: "inputSizeType",
						}}
					/>
					
					<MultiButtonsControl
						setAttributes={setAttributes}
						label={__(
							"Button Type",
							"ultimate-addons-for-gutenberg"
						)}
						data={{
							value: buttonType,
							label: "buttonType",
						}}
						className="uagb-multi-button-alignment-control"
						options={[
						{
							value: "icon",
							label: 'Icon',

						},
						{
							value: "text",
							label: 'Text',
						},

						]}
						showIcons={false}
					/>
					{ 'text' === buttonType && (
						<>
							<TextControl
								label="Text"
								value={ buttonText }
								onChange={ ( value ) => {
									setAttributes( {
										buttonText: value,
									} );
								} }
							/>
						</>
					) }
				
			</PanelBody>
		);
	};

	const inputSettings = () => {
		return (
			<PanelBody
				title={ __( 'Input Box', 'ultimate-addons-for-gutenberg' ) }
				initialOpen={ false }
				className="uagb__url-panel-body"
			>
				<AdvancedPopColorControl
					label={__(
						"Text Color",
						"ultimate-addons-for-gutenberg"
					)}
					colorValue={textColor ? textColor : ""}
					onColorChange={(value) =>
						setAttributes({ textColor: value })
					}
				/>
				<AdvancedPopColorControl
					label={__(
						'Background Color',
						"ultimate-addons-for-gutenberg"
					)}
					colorValue={inputBgColor ? inputBgColor : ""}
					onColorChange={(value) =>
						setAttributes({ inputBgColor: value })
					}
				/>				
				<Border
					setAttributes={setAttributes}
					borderStyle={{
						value: borderStyle,
						label: "borderStyle",
						title: __(
							"Border Style",
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
						value: borderHColor,
						label: "borderHColor",
						title: __(
							"Hover Color",
							"ultimate-addons-for-gutenberg"
						),
					}}
				/>			
				<SpacingControl
					{...props}
					label={__(
						"Padding",
						"ultimate-addons-for-gutenberg"
					)}
					valueTop={{
						value: paddingInputTop,
						label: "paddingInputTop",
					}}
					valueRight={{
						value: paddingInputRight,
						label: "paddingInputRight",
					}}
					valueBottom={{
						value: paddingInputBottom,
						label: "paddingInputBottom",
					}}
					valueLeft={{
						value: paddingInputLeft,
						label: "paddingInputLeft",
					}}
					valueTopTablet={{
						value: paddingInputTopTablet,
						label: "paddingInputTopTablet",
					}}
					valueRightTablet={{
						value: paddingInputRightTablet,
						label: "paddingInputRightTablet",
					}}
					valueBottomTablet={{
						value: paddingInputBottomTablet,
						label: "paddingInputBottomTablet",
					}}
					valueLeftTablet={{
						value: paddingInputLeftTablet,
						label: "paddingInputLeftTablet",
					}}
					valueTopMobile={{
						value: paddingInputTopMobile,
						label: "paddingInputTopMobile",
					}}
					valueRightMobile={{
						value: paddingInputRightMobile,
						label: "paddingInputRightMobile",
					}}
					valueBottomMobile={{
						value: paddingInputBottomMobile,
						label: "paddingInputBottomMobile",
					}}
					valueLeftMobile={{
						value: paddingInputLeftMobile,
						label: "paddingInputLeftMobile",
					}}
					unit={{
						value: inputPaddingTypeDesktop,
						label: "inputPaddingTypeDesktop",
					}}
					mUnit={{
						value: mobilePaddingInputUnit,
						label: "mobilePaddingInputUnit",
					}}
					tUnit={{
						value: tabletPaddingInputUnit,
						label: "tabletPaddingInputUnit",
					}}
					deviceType={deviceType}
					attributes={attributes}
					setAttributes={setAttributes}
					link={{
						value: spacingLink,
						label: "spacingLink",
					}}
				/>
				<TypographyControl
					label={ __(
						'Typography',
						'ultimate-addons-for-gutenberg'
					) }
					attributes={ attributes }
					setAttributes={ setAttributes }
					loadGoogleFonts={ {
						value: inputloadGoogleFonts,
						label: 'inputloadGoogleFonts',
					} }
					fontFamily={ {
						value: inputFontFamily,
						label: 'inputFontFamily',
					} }
					fontWeight={ {
						value: inputFontWeight,
						label: 'inputFontWeight',
					} }
					fontSubset={ {
						value: inputFontSubset,
						label: 'inputFontSubset',
					} }
					fontSizeType={ {
						value: inputFontSizeType,
						label: 'inputFontSizeType',
					} }
					fontSize={ {
						value: inputFontSize,
						label: 'inputFontSize',
					} }
					fontSizeMobile={ {
						value: inputFontSizeMobile,
						label: 'inputFontSizeMobile',
					} }
					fontSizeTablet={ {
						value: inputFontSizeTablet,
						label: 'inputFontSizeTablet',
					} }
					lineHeightType={ {
						value: inputLineHeightType,
						label: 'inputLineHeightType',
					} }
					lineHeight={ {
						value: inputLineHeight,
						label: 'inputLineHeight',
					} }
					lineHeightMobile={ {
						value: inputLineHeightMobile,
						label: 'inputLineHeightMobile',
					} }
					lineHeightTablet={ {
						value: inputLineHeightTablet,
						label: 'inputLineHeightTablet',
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
				<BoxShadowControl
					setAttributes={ setAttributes }
					label={ __(
						'Box Shadow',
						'ultimate-addons-for-gutenberg'
					) }
					boxShadowColor={ {
						value: boxShadowColor,
						label:  'boxShadowColor',
						title: __( 'Color', 'ultimate-addons-for-gutenberg' ),
					} }
					boxShadowHOffset={ {
						value: boxShadowHOffset,
						label:  'boxShadowHOffset',
						title: __(
							'Horizontal',
							'ultimate-addons-for-gutenberg'
						),
					} }
					boxShadowVOffset={ {
						value: boxShadowVOffset,
						label:  'boxShadowVOffset',
						title: __(
							'Vertical',
							'ultimate-addons-for-gutenberg'
						),
					} }
					boxShadowBlur={ {
						value: boxShadowBlur,
						label:  'boxShadowBlur',
						title: __( 'Blur', 'ultimate-addons-for-gutenberg' ),
					} }
					boxShadowSpread={ {
						value: boxShadowSpread,
						label:  'boxShadowSpread',
						title: __( 'Spread', 'ultimate-addons-for-gutenberg' ),
					} }
					boxShadowPosition={ {
						value: boxShadowPosition,
						label:  'boxShadowPosition',
						title: __(
							'Position',
							'ultimate-addons-for-gutenberg'
						),
					} }
				/>
			</PanelBody>
		);
	};

	const buttonSettings = () => {
		let tabOutputNormal = (
			<>
				<AdvancedPopColorControl
					label={__(
						'Background Color',
						"ultimate-addons-for-gutenberg"
					)}
					colorValue={buttonBgColor ? buttonBgColor : ""}
					onColorChange={(value) =>
						setAttributes({ buttonBgColor: value })
					}
				/>
				{ 'text' === buttonType && (
					<AdvancedPopColorControl
						label={__(
							'Text Color',
							"ultimate-addons-for-gutenberg"
						)}
						colorValue={buttonTextColor ? buttonTextColor : ""}
						onColorChange={(value) =>
							setAttributes({ buttonTextColor: value })
						}
					/>
				)}
				{ 'icon' === buttonType && (
					<AdvancedPopColorControl
						label={__(
							'Icon Color',
							"ultimate-addons-for-gutenberg"
						)}
						colorValue={buttonIconColor ? buttonIconColor : ""}
						onColorChange={(value) =>
							setAttributes({ buttonIconColor: value })
						}
					/>
				)}
			</>
		);
		let tabOutputHover = (
			<>
				<AdvancedPopColorControl
					label={__(
						'Background Hover Color',
						"ultimate-addons-for-gutenberg"
					)}
					colorValue={buttonBgHoverColor ? buttonBgHoverColor : ""}
					onColorChange={(value) =>
						setAttributes({ buttonBgHoverColor: value })
					}
				/>
				{ 'text' === buttonType && (		
					<AdvancedPopColorControl
						label={__(
							'Text Hover Color',
							"ultimate-addons-for-gutenberg"
						)}
						colorValue={buttonTextHoverColor ? buttonTextHoverColor : ""}
						onColorChange={(value) =>
							setAttributes({ buttonTextHoverColor: value })
						}
					/>
				) }
				{ 'icon' === buttonType && (
					<AdvancedPopColorControl
						label={__(
							'Icon Hover Color',
							"ultimate-addons-for-gutenberg"
						)}
						colorValue={buttonIconHoverColor ? buttonIconHoverColor : ""}
						onColorChange={(value) =>
							setAttributes({ buttonIconHoverColor: value })
						}
					/>
				)}
			</>
		);
		if ( 'input-button' === layout ) {
			return (
				<PanelBody
					title={ __( 'Button', 'ultimate-addons-for-gutenberg' ) }
					initialOpen={ false }
					className="uagb__url-panel-body"
				>
					<Range
						label={ __(
							'Width',
							'ultimate-addons-for-gutenberg'
						) }
						setAttributes={setAttributes}
						value={ buttonWidth }
						onChange={ ( value ) => {
							setAttributes( {
								buttonWidth: value,
							} );
						} }
						min={ 0 }
						max={ 500 }
						unit={{
							value: buttonWidthType,
							label: "buttonWidthType",
						}}
					/>
					<TypographyControl
						label={ __(
							'Typography',
							'ultimate-addons-for-gutenberg'
						) }
						attributes={ attributes }
						setAttributes={ setAttributes }
						loadGoogleFonts={ {
							value: buttonloadGoogleFonts,
							label: 'buttonloadGoogleFonts',
						} }
						fontFamily={ {
							value: buttonFontFamily,
							label: 'buttonFontFamily',
						} }
						fontWeight={ {
							value: buttonFontWeight,
							label: 'buttonFontWeight',
						} }
						fontSubset={ {
							value: buttonFontSubset,
							label: 'buttonFontSubset',
						} }
						fontSizeType={ {
							value: buttonFontSizeType,
							label: 'buttonFontSizeType',
						} }
						fontSize={ {
							value: buttonFontSize,
							label: 'buttonFontSize',
						} }
						fontSizeMobile={ {
							value: buttonFontSizeMobile,
							label: 'buttonFontSizeMobile',
						} }
						fontSizeTablet={ {
							value: buttonFontSizeTablet,
							label: 'buttonFontSizeTablet',
						} }
						lineHeightType={ {
							value: buttonLineHeightType,
							label: 'buttonLineHeightType',
						} }
						lineHeight={ {
							value: buttonLineHeight,
							label: 'buttonLineHeight',
						} }
						lineHeightMobile={ {
							value: buttonLineHeightMobile,
							label: 'buttonLineHeightMobile',
						} }
						lineHeightTablet={ {
							value: buttonLineHeightTablet,
							label: 'buttonLineHeightTablet',
						} }
						transform={{
							value: buttonTransform,
							label: "buttonTransform",
						}}
						decoration={{
							value: buttonDecoration,
							label: "buttonDecoration",
						}}
					/>
					{ 'icon' === buttonType && (
						<>
							<Range
								label={ __(
									'Icon Size',
									'ultimate-addons-for-gutenberg'
								) }
								setAttributes={setAttributes}
									
								value={ buttonIconSize }
								onChange={ ( value ) => {
									setAttributes( {
										buttonIconSize: value,
									} );
								} }
								min={ 0 }
								max={ 500 }
								unit={{
									value: buttonIconSizeType,
									label: "buttonIconSizeType",
								}}
							/>
						</>
					) }
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
						normal={tabOutputNormal}
						hover={tabOutputHover}
						disableBottomSeparator = {false}
					/>
				</PanelBody>
			);
		}

		return '';
	};

	const iconSettings = () => {
		if ( 'input' === layout ) {
			return (
				<PanelBody
					title={ __( 'Icon', 'ultimate-addons-for-gutenberg' ) }
					initialOpen={ false }
					className="uagb__url-panel-body"
				>
					<>
						<Range
							label={ __(
								'Size',
								'ultimate-addons-for-gutenberg'
							) }
							setAttributes={setAttributes}
							value={ iconSize }
							onChange={ ( value ) => {
								setAttributes( {
									iconSize: value,
								} );
							} }
							min={ 0 }
							max={ 500 }
							unit={{
								value: iconSizeType,
								label: "iconSizeType",
							}}
						/>
						<AdvancedPopColorControl
							label={__(
								"Color",
								"ultimate-addons-for-gutenberg"
							)}
							colorValue={iconColor ? iconColor : ""}
							onColorChange={(value) =>
								setAttributes({ iconColor: value })
							}
						/>
					</>
				</PanelBody>
			);
		}

		return '';
	};

	let loadInputGoogleFonts;

	if ( inputloadGoogleFonts == true ) {
		const qconfig = {
			google: {
				families: [
					inputFontFamily +
						( inputFontWeight ? ':' + inputFontWeight : '' ),
				],
			},
		};
		loadInputGoogleFonts = (
			<WebfontLoader config={ qconfig }></WebfontLoader>
		);
	}

	let loadButtonGoogleFonts;

	if ( buttonloadGoogleFonts == true ) {
		const qconfig = {
			google: {
				families: [
					buttonFontFamily +
						( buttonFontWeight ? ':' + buttonFontWeight : '' ),
				],
			},
		};
		loadButtonGoogleFonts = (
			<WebfontLoader config={ qconfig }></WebfontLoader>
		);
	}

	return (
		<>
			<InspectorControls>
				<InspectorTabs>
					<InspectorTab {...UAGTabs.general}>
						{generalSettings()}
					</InspectorTab>
					<InspectorTab {...UAGTabs.style}>
						{ inputSettings() }
						{ iconSettings() }
						{ buttonSettings() }
					</InspectorTab>
					<InspectorTab {...UAGTabs.advance}></InspectorTab>
				</InspectorTabs>
			</InspectorControls>
			{ loadInputGoogleFonts }
			{ loadButtonGoogleFonts }
		</>
	);
};

export default React.memo( Settings );
