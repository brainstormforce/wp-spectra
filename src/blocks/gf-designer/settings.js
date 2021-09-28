import React, { Suspense } from 'react';
import lazyLoader from '@Controls/lazy-loader';
import TypographyControl from '@Components/typography';
import WebfontLoader from '@Components/typography/fontloader';
import { __ } from '@wordpress/i18n';
import AdvancedPopColorControl from '@Components/color-control/advanced-pop-color-control.js';
import InspectorTabs from '@Components/inspector-tabs/InspectorTabs.js';
import InspectorTab, {
	UAGTabs,
} from '@Components/inspector-tabs/InspectorTab.js';
import MultiButtonsControl from '@Components/multi-buttons-control';
import renderSVG from '@Controls/renderIcon';
import Range from '@Components/range/Range.js';
import UAGTabsControl from '@Components/tabs';
import SpacingControl from '@Components/spacing-control';

import {
	AlignmentToolbar,
	BlockControls,
	InspectorControls,
} from '@wordpress/block-editor';

import {
	PanelBody,
	SelectControl,
	ToggleControl,
	Icon,
} from '@wordpress/components';

const Settings = ( props ) => {
	props = props.parentProps;
	const { setAttributes, attributes } = props;

	// Setup the attributes.
	const {
		formId,
		align,
		enableAjax,
		enableTabSupport,
		formTabIndex,
		titleDescStyle,
		titleDescAlignment,
		fieldStyle,
		fieldBgColor,
		fieldLabelColor,
		fieldInputColor,
		fieldBorderStyle,
		fieldBorderWidth,
		fieldBorderRadius,
		fieldBorderColor,
		fieldBorderFocusColor,
		textAreaHeight,
		buttonAlignment,
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
		enableLabel,
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
		validationMsgColor,
		validationMsgBgColor,
		advancedValidationSettings,
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
		errorMsgColor,
		errorMsgBgColor,
		errorMsgBorderColor,
		msgBorderSize,
		msgBorderRadius,
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
		successMsgLoadGoogleFonts,
		successMsgFontFamily,
		successMsgFontWeight,
		successMsgFontSubset,
		successMsgFontSizeType,
		successMsgFontSize,
		successMsgFontSizeMobile,
		successMsgFontSizeTablet,
		successMsgLineHeightType,
		successMsgLineHeight,
		successMsgLineHeightMobile,
		successMsgLineHeightTablet,
		fieldtopPadding,
		fieldrightPadding,
		fieldbottomPadding,
		fieldleftPadding,
		fieldtopMobilePadding,
		fieldrightMobilePadding,
		fieldbottomMobilePadding,
		fieldleftMobilePadding,
		fieldtopTabletPadding,
		fieldrightTabletPadding,
		fieldbottomTabletPadding,
		fieldleftTabletPadding,
		fieldpaddingUnit,
		fieldmobilePaddingUnit,
		fieldtabletPaddingUnit,
		fieldpaddingLink,
		buttontopPadding,
		buttonrightPadding,
		buttonbottomPadding,
		buttonleftPadding,
		buttontopMobilePadding,
		buttonrightMobilePadding,
		buttonbottomMobilePadding,
		buttonleftMobilePadding,
		buttontopTabletPadding,
		buttonrightTabletPadding,
		buttonbottomTabletPadding,
		buttonleftTabletPadding,
		buttonpaddingUnit,
		buttonmobilePaddingUnit,
		buttontabletPaddingUnit,
		buttonpaddingLink,
		msgtopPadding,
		msgrightPadding,
		msgbottomPadding,
		msgleftPadding,
		msgtopMobilePadding,
		msgrightMobilePadding,
		msgbottomMobilePadding,
		msgleftMobilePadding,
		msgtopTabletPadding,
		msgrightTabletPadding,
		msgbottomTabletPadding,
		msgleftTabletPadding,
		msgpaddingUnit,
		msgmobilePaddingUnit,
		msgtabletPaddingUnit,
		msgpaddingLink,
	} = attributes;

	let loadInputGoogleFonts;
	let loadButtonGoogleFonts;
	let loadLabelGoogleFonts;
	let loadRadioGoogleFonts;
	let loadValidationGoogleFonts;
	let loadMsgGoogleFonts;

	if ( labelLoadGoogleFonts === true ) {
		const labelconfig = {
			google: {
				families: [
					labelFontFamily +
						( labelFontWeight ? ':' + labelFontWeight : '' ),
				],
			},
		};

		loadLabelGoogleFonts = (
			<WebfontLoader config={ labelconfig }></WebfontLoader>
		);
	}

	if ( inputLoadGoogleFonts === true ) {
		const inputconfig = {
			google: {
				families: [
					inputFontFamily +
						( inputFontWeight ? ':' + inputFontWeight : '' ),
				],
			},
		};

		loadInputGoogleFonts = (
			<WebfontLoader config={ inputconfig }></WebfontLoader>
		);
	}

	if ( buttonLoadGoogleFonts === true ) {
		const buttonconfig = {
			google: {
				families: [
					buttonFontFamily +
						( buttonFontWeight ? ':' + buttonFontWeight : '' ),
				],
			},
		};

		loadButtonGoogleFonts = (
			<WebfontLoader config={ buttonconfig }></WebfontLoader>
		);
	}

	if ( radioCheckLoadGoogleFonts === true ) {
		const radioCheckconfig = {
			google: {
				families: [
					radioCheckFontFamily +
						( radioCheckFontWeight
							? ':' + radioCheckFontWeight
							: '' ),
				],
			},
		};

		loadRadioGoogleFonts = (
			<WebfontLoader config={ radioCheckconfig }></WebfontLoader>
		);
	}

	if ( validationMsgLoadGoogleFonts === true ) {
		const validationMsgconfig = {
			google: {
				families: [
					validationMsgFontFamily +
						( validationMsgFontWeight
							? ':' + validationMsgFontWeight
							: '' ),
				],
			},
		};

		loadValidationGoogleFonts = (
			<WebfontLoader config={ validationMsgconfig }></WebfontLoader>
		);
	}

	if ( msgLoadGoogleFonts === true ) {
		const msgconfig = {
			google: {
				families: [
					msgFontFamily +
						( msgFontWeight ? ':' + msgFontWeight : '' ),
				],
			},
		};

		loadMsgGoogleFonts = (
			<WebfontLoader config={ msgconfig }></WebfontLoader>
		);
	}

	const fieldBorderSetting = () => {
		return (
			<PanelBody
				title={ __(
					'Field Style & Border',
					'ultimate-addons-for-gutenberg'
				) }
				initialOpen={ false }
			>
				<MultiButtonsControl
					setAttributes={ setAttributes }
					label={ __(
						'Field Style',
						'ultimate-addons-for-gutenberg'
					) }
					data={ {
						value: fieldStyle,
						label: 'fieldStyle',
					} }
					options={ [
						{
							value: 'box',
							label: __( 'Box', 'ultimate-addons-for-gutenberg' ),
						},
						{
							value: 'underline',
							label: __(
								'Underline',
								'ultimate-addons-for-gutenberg'
							),
						},
					] }
				/>
				{ fieldStyle === 'box' && (
					<SelectControl
						label={ __(
							'Border Style',
							'ultimate-addons-for-gutenberg'
						) }
						value={ fieldBorderStyle }
						onChange={ ( value ) =>
							setAttributes( { fieldBorderStyle: value } )
						}
						options={ [
							{
								value: 'none',
								label: __(
									'None',
									'ultimate-addons-for-gutenberg'
								),
							},
							{
								value: 'solid',
								label: __(
									'Solid',
									'ultimate-addons-for-gutenberg'
								),
							},
							{
								value: 'dotted',
								label: __(
									'Dotted',
									'ultimate-addons-for-gutenberg'
								),
							},
							{
								value: 'dashed',
								label: __(
									'Dashed',
									'ultimate-addons-for-gutenberg'
								),
							},
							{
								value: 'double',
								label: __(
									'Double',
									'ultimate-addons-for-gutenberg'
								),
							},
							{
								value: 'groove',
								label: __(
									'Groove',
									'ultimate-addons-for-gutenberg'
								),
							},
							{
								value: 'inset',
								label: __(
									'Inset',
									'ultimate-addons-for-gutenberg'
								),
							},
							{
								value: 'outset',
								label: __(
									'Outset',
									'ultimate-addons-for-gutenberg'
								),
							},
							{
								value: 'ridge',
								label: __(
									'Ridge',
									'ultimate-addons-for-gutenberg'
								),
							},
						] }
					/>
				) }
				{ ( 'none' !== fieldBorderStyle ||
					fieldStyle === 'underline' ) && (
					<Range
						label={ __(
							'Width (px)',
							'ultimate-addons-for-gutenberg'
						) }
						setAttributes={ setAttributes }
						value={ fieldBorderWidth }
						onChange={ ( value ) =>
							setAttributes( { fieldBorderWidth: value } )
						}
						min={ 0 }
						max={ 50 }
						displayUnit={ false }
					/>
				) }
				<Range
					label={ __( 'Radius', 'ultimate-addons-for-gutenberg' ) }
					setAttributes={ setAttributes }
					value={ fieldBorderRadius }
					onChange={ ( value ) =>
						setAttributes( { fieldBorderRadius: value } )
					}
					min={ 0 }
					max={ 100 }
					unit={ {
						value: fieldBorderRadiusType,
						label: 'fieldBorderRadiusType',
					} }
					units={ [
						{
							name: __(
								'Pixel',
								'ultimate-addons-for-gutenberg'
							),
							unitValue: 'px',
						},
						{
							name: __( '%', 'ultimate-addons-for-gutenberg' ),
							unitValue: '%',
						},
					] }
				/>
				<UAGTabsControl
					tabs={ [
						{
							name: 'normal',
							title: __(
								'Normal',
								'ultimate-addons-for-gutenberg'
							),
						},
						{
							name: 'active',
							title: __(
								'Active',
								'ultimate-addons-for-gutenberg'
							),
						},
					] }
					normal={
						( 'none' !== fieldBorderStyle ||
							fieldStyle === 'underline' ) && (
							<>
								<AdvancedPopColorControl
									label={ __(
										'Color',
										'ultimate-addons-for-gutenberg'
									) }
									colorValue={
										fieldBorderColor ? fieldBorderColor : ''
									}
									onColorChange={ ( value ) =>
										setAttributes( {
											fieldBorderColor: value,
										} )
									}
								/>
							</>
						)
					}
					active={
						( 'none' !== fieldBorderStyle ||
							fieldStyle === 'underline' ) && (
							<>
								<AdvancedPopColorControl
									label={ __(
										'Color',
										'ultimate-addons-for-gutenberg'
									) }
									colorValue={
										fieldBorderFocusColor
											? fieldBorderFocusColor
											: ''
									}
									onColorChange={ ( value ) =>
										setAttributes( {
											fieldBorderFocusColor: value,
										} )
									}
								/>
							</>
						)
					}
					disableBottomSeparator={ true }
				/>
			</PanelBody>
		);
	};

	const inputSettings = () => {
		return (
			<PanelBody
				title={ __( 'Input', 'ultimate-addons-for-gutenberg' ) }
				initialOpen={ false }
			>
				<AdvancedPopColorControl
					label={ __( 'Color', 'ultimate-addons-for-gutenberg' ) }
					colorValue={ fieldInputColor ? fieldInputColor : '' }
					onColorChange={ ( value ) =>
						setAttributes( { fieldInputColor: value } )
					}
				/>
				<AdvancedPopColorControl
					label={ __(
						'Background Color',
						'ultimate-addons-for-gutenberg'
					) }
					colorValue={ fieldBgColor ? fieldBgColor : '' }
					onColorChange={ ( value ) =>
						setAttributes( { fieldBgColor: value } )
					}
				/>
				<TypographyControl
					label={ __( 'Typography' ) }
					attributes={ attributes }
					setAttributes={ setAttributes }
					loadGoogleFonts={ {
						value: inputLoadGoogleFonts,
						label: 'inputLoadGoogleFonts',
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
				/>
				<Range
					label={ __(
						'Text Area Height',
						'ultimate-addons-for-gutenberg'
					) }
					setAttributes={ setAttributes }
					value={ textAreaHeight }
					onChange={ ( value ) =>
						setAttributes( { textAreaHeight: value } )
					}
					min={ 0 }
					max={ 1000 }
					displayUnit={ false }
				/>
			</PanelBody>
		);
	};

	const labelSettings = () => {
		return (
			<PanelBody
				title={ __( 'Label', 'ultimate-addons-for-gutenberg' ) }
				initialOpen={ false }
			>
				<ToggleControl
					label="Hide Label"
					checked={ enableLabel }
					onChange={ () =>
						setAttributes( { enableLabel: ! enableLabel } )
					}
				/>
				{ ! enableLabel && (
					<>
						<AdvancedPopColorControl
							label={ __(
								'Color',
								'ultimate-addons-for-gutenberg'
							) }
							colorValue={
								fieldLabelColor ? fieldLabelColor : ''
							}
							onColorChange={ ( value ) =>
								setAttributes( { fieldLabelColor: value } )
							}
						/>
						<TypographyControl
							label={ __(
								'Typography',
								'ultimate-addons-for-gutenberg'
							) }
							attributes={ attributes }
							setAttributes={ setAttributes }
							loadGoogleFonts={ {
								value: labelLoadGoogleFonts,
								label: 'labelLoadGoogleFonts',
							} }
							fontFamily={ {
								value: labelFontFamily,
								label: 'labelFontFamily',
							} }
							fontWeight={ {
								value: labelFontWeight,
								label: 'labelFontWeight',
							} }
							fontSubset={ {
								value: labelFontSubset,
								label: 'labelFontSubset',
							} }
							fontSizeType={ {
								value: labelFontSizeType,
								label: 'labelFontSizeType',
							} }
							fontSize={ {
								value: labelFontSize,
								label: 'labelFontSize',
							} }
							fontSizeMobile={ {
								value: labelFontSizeMobile,
								label: 'labelFontSizeMobile',
							} }
							fontSizeTablet={ {
								value: labelFontSizeTablet,
								label: 'labelFontSizeTablet',
							} }
							lineHeightType={ {
								value: labelLineHeightType,
								label: 'labelLineHeightType',
							} }
							lineHeight={ {
								value: labelLineHeight,
								label: 'labelLineHeight',
							} }
							lineHeightMobile={ {
								value: labelLineHeightMobile,
								label: 'labelLineHeightMobile',
							} }
							lineHeightTablet={ {
								value: labelLineHeightTablet,
								label: 'labelLineHeightTablet',
							} }
						/>
					</>
				) }
			</PanelBody>
		);
	};

	const fieldSettings = () => {
		return (
			<PanelBody
				title={ __( 'General', 'ultimate-addons-for-gutenberg' ) }
			>
				<SelectControl
					label={ __(
						'Select Form',
						'ultimate-addons-for-gutenberg'
					) }
					value={ formId }
					onChange={ onSelectForm }
					options={ uagb_blocks_info.gf_forms }
				/>
				<ToggleControl
					label="Enable AJAX Form Submission"
					checked={ enableAjax }
					onChange={ () =>
						setAttributes( { enableAjax: ! enableAjax } )
					}
				/>
				<ToggleControl
					label="Using Multiple Gravity Forms"
					checked={ enableTabSupport }
					onChange={ () =>
						setAttributes( {
							enableTabSupport: ! enableTabSupport,
						} )
					}
				/>
				{ enableTabSupport && (
					<Range
						label={ __(
							'Tab Index',
							'ultimate-addons-for-gutenberg'
						) }
						setAttributes={ setAttributes }
						value={ formTabIndex }
						onChange={ ( value ) =>
							setAttributes( { formTabIndex: value } )
						}
						min={ 0 }
						max={ 500 }
						displayUnit={ false }
					/>
				) }
				<MultiButtonsControl
					setAttributes={ setAttributes }
					label={ __(
						'Form Title & Description',
						'ultimate-addons-for-gutenberg'
					) }
					data={ {
						value: titleDescStyle,
						label: 'titleDescStyle',
					} }
					options={ [
						{
							value: 'yes',
							label: __(
								'Show',
								'ultimate-addons-for-gutenberg'
							),
						},
						{
							value: 'none',
							label: __(
								'Hide',
								'ultimate-addons-for-gutenberg'
							),
						},
					] }
				/>

				{ titleDescStyle !== 'none' && (
					<MultiButtonsControl
						setAttributes={ setAttributes }
						label={ __(
							'Title & Description Alignment',
							'ultimate-addons-for-gutenberg'
						) }
						data={ {
							value: titleDescAlignment,
							label: 'titleDescAlignment',
						} }
						className="uagb-multi-button-alignment-control"
						options={ [
							{
								value: 'left',
								icon: (
									<Icon
										icon={ renderSVG( 'fa fa-align-left' ) }
									/>
								),
								tooltip: __(
									'Left',
									'ultimate-addons-for-gutenberg'
								),
							},
							{
								value: 'center',
								icon: (
									<Icon
										icon={ renderSVG(
											'fa fa-align-center'
										) }
									/>
								),
								tooltip: __(
									'Center',
									'ultimate-addons-for-gutenberg'
								),
							},
							{
								value: 'right',
								icon: (
									<Icon
										icon={ renderSVG(
											'fa fa-align-right'
										) }
									/>
								),
								tooltip: __(
									'Right',
									'ultimate-addons-for-gutenberg'
								),
							},
						] }
						showIcons={ true }
					/>
				) }
			</PanelBody>
		);
	};

	//Submit button settings.
	const btnBorderSetting = () => {
		return (
			<>
				<SelectControl
					label={ __( 'Style', 'ultimate-addons-for-gutenberg' ) }
					value={ buttonBorderStyle }
					onChange={ ( value ) =>
						setAttributes( { buttonBorderStyle: value } )
					}
					options={ [
						{
							value: 'none',
							label: __(
								'None',
								'ultimate-addons-for-gutenberg'
							),
						},
						{
							value: 'solid',
							label: __(
								'Solid',
								'ultimate-addons-for-gutenberg'
							),
						},
						{
							value: 'dotted',
							label: __(
								'Dotted',
								'ultimate-addons-for-gutenberg'
							),
						},
						{
							value: 'dashed',
							label: __(
								'Dashed',
								'ultimate-addons-for-gutenberg'
							),
						},
						{
							value: 'double',
							label: __(
								'Double',
								'ultimate-addons-for-gutenberg'
							),
						},
						{
							value: 'groove',
							label: __(
								'Groove',
								'ultimate-addons-for-gutenberg'
							),
						},
						{
							value: 'inset',
							label: __(
								'Inset',
								'ultimate-addons-for-gutenberg'
							),
						},
						{
							value: 'outset',
							label: __(
								'Outset',
								'ultimate-addons-for-gutenberg'
							),
						},
						{
							value: 'ridge',
							label: __(
								'Ridge',
								'ultimate-addons-for-gutenberg'
							),
						},
					] }
				/>
				{ 'none' !== buttonBorderStyle && (
					<Range
						label={ __(
							'Width (px)',
							'ultimate-addons-for-gutenberg'
						) }
						setAttributes={ setAttributes }
						value={ buttonBorderWidth }
						onChange={ ( value ) =>
							setAttributes( { buttonBorderWidth: value } )
						}
						min={ 0 }
						max={ 50 }
						displayUnit={ false }
					/>
				) }
				<Range
					label={ __( 'Radius', 'ultimate-addons-for-gutenberg' ) }
					setAttributes={ setAttributes }
					value={ buttonBorderRadius }
					onChange={ ( value ) =>
						setAttributes( { buttonBorderRadius: value } )
					}
					min={ 0 }
					max={ 100 }
					unit={ {
						value: buttonBorderRadiusType,
						label: 'buttonBorderRadiusType',
					} }
					units={ [
						{
							name: __(
								'Pixel',
								'ultimate-addons-for-gutenberg'
							),
							unitValue: 'px',
						},
						{
							name: __( '%', 'ultimate-addons-for-gutenberg' ),
							unitValue: '%',
						},
					] }
				/>
			</>
		);
	};

	const buttonNormalSettings = () => {
		return (
			<>
				<AdvancedPopColorControl
					label={ __(
						'Text Color',
						'ultimate-addons-for-gutenberg'
					) }
					colorValue={ buttonTextColor ? buttonTextColor : '' }
					onColorChange={ ( value ) =>
						setAttributes( { buttonTextColor: value } )
					}
				/>
				<AdvancedPopColorControl
					label={ __(
						'Background Color',
						'ultimate-addons-for-gutenberg'
					) }
					colorValue={ buttonBgColor }
					onColorChange={ ( value ) =>
						setAttributes( { buttonBgColor: value } )
					}
				/>
				{ 'none' !== buttonBorderStyle && (
					<>
						<AdvancedPopColorControl
							label={ __(
								'Border Color',
								'ultimate-addons-for-gutenberg'
							) }
							colorValue={
								buttonBorderColor ? buttonBorderColor : ''
							}
							onColorChange={ ( value ) =>
								setAttributes( { buttonBorderColor: value } )
							}
						/>
					</>
				) }
			</>
		);
	};

	const buttonHoverSettings = () => {
		return (
			<>
				<AdvancedPopColorControl
					label={ __(
						'Text Color',
						'ultimate-addons-for-gutenberg'
					) }
					colorValue={
						buttonTextHoverColor ? buttonTextHoverColor : ''
					}
					onColorChange={ ( value ) =>
						setAttributes( { buttonTextHoverColor: value } )
					}
				/>
				<AdvancedPopColorControl
					label={ __(
						'Background Color',
						'ultimate-addons-for-gutenberg'
					) }
					colorValue={ buttonBgHoverColor }
					onColorChange={ ( value ) =>
						setAttributes( { buttonBgHoverColor: value } )
					}
				/>
				{ 'none' !== buttonBorderStyle && (
					<>
						<AdvancedPopColorControl
							label={ __(
								'Border Color',
								'ultimate-addons-for-gutenberg'
							) }
							colorValue={
								buttonBorderHoverColor
									? buttonBorderHoverColor
									: ''
							}
							onColorChange={ ( value ) =>
								setAttributes( {
									buttonBorderHoverColor: value,
								} )
							}
						/>
					</>
				) }
			</>
		);
	};

	const btnSetting = () => {
		return (
			<PanelBody
				title={ __( 'Submit Button', 'ultimate-addons-for-gutenberg' ) }
				initialOpen={ false }
			>
				<MultiButtonsControl
					setAttributes={ setAttributes }
					label={ __( 'Alignment', 'ultimate-addons-for-gutenberg' ) }
					data={ {
						value: buttonAlignment,
						label: 'buttonAlignment',
					} }
					className="uagb-multi-button-alignment-control"
					options={ [
						{
							value: 'left',
							icon: (
								<Icon
									icon={ renderSVG( 'fa fa-align-left' ) }
								/>
							),
							tooltip: __(
								'Left',
								'ultimate-addons-for-gutenberg'
							),
						},
						{
							value: 'center',
							icon: (
								<Icon
									icon={ renderSVG( 'fa fa-align-center' ) }
								/>
							),
							tooltip: __(
								'Center',
								'ultimate-addons-for-gutenberg'
							),
						},
						{
							value: 'right',
							icon: (
								<Icon
									icon={ renderSVG( 'fa fa-align-right' ) }
								/>
							),
							tooltip: __(
								'Right',
								'ultimate-addons-for-gutenberg'
							),
						},
						{
							value: 'justify',
							icon: (
								<Icon
									icon={ renderSVG( 'fa fa-align-justify' ) }
								/>
							),
							tooltip: __(
								'Justified',
								'ultimate-addons-for-gutenberg'
							),
						},
					] }
					showIcons={ true }
				/>
				{ btnBorderSetting() }
				<UAGTabsControl
					tabs={ [
						{
							name: 'normal',
							title: __(
								'Normal',
								'ultimate-addons-for-gutenberg'
							),
						},
						{
							name: 'hover',
							title: __(
								'Hover',
								'ultimate-addons-for-gutenberg'
							),
						},
					] }
					normal={ buttonNormalSettings() }
					hover={ buttonHoverSettings() }
					disableBottomSeparator={ true }
				/>
				<TypographyControl
					label={ __(
						'Typography',
						'ultimate-addons-for-gutenberg'
					) }
					attributes={ attributes }
					setAttributes={ setAttributes }
					loadGoogleFonts={ {
						value: buttonLoadGoogleFonts,
						label: 'buttonLoadGoogleFonts',
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
				/>
			</PanelBody>
		);
	};

	const spacingSetting = () => {
		return (
			<PanelBody
				title={ __( 'Spacing', 'ultimate-addons-for-gutenberg' ) }
				initialOpen={ false }
			>
				<Range
					label={ __(
						'Label & Input Space',
						'ultimate-addons-for-gutenberg'
					) }
					setAttributes={ setAttributes }
					value={ fieldLabelSpacing }
					onChange={ ( value ) =>
						setAttributes( { fieldLabelSpacing: value } )
					}
					min={ 0 }
					max={ 200 }
					displayUnit={ false }
				/>
				<Range
					label={ __(
						'Fields Space',
						'ultimate-addons-for-gutenberg'
					) }
					setAttributes={ setAttributes }
					value={ fieldSpacing }
					onChange={ ( value ) =>
						setAttributes( { fieldSpacing: value } )
					}
					min={ 0 }
					max={ 200 }
					displayUnit={ false }
				/>
				<SpacingControl
					{ ...props }
					label={ __(
						'Field Padding',
						'ultimate-addons-for-gutenberg'
					) }
					valueTop={ {
						value: fieldtopPadding,
						label: 'fieldtopPadding',
					} }
					valueRight={ {
						value: fieldrightPadding,
						label: 'fieldrightPadding',
					} }
					valueBottom={ {
						value: fieldbottomPadding,
						label: 'fieldbottomPadding',
					} }
					valueLeft={ {
						value: fieldleftPadding,
						label: 'fieldleftPadding',
					} }
					valueTopTablet={ {
						value: fieldtopTabletPadding,
						label: 'fieldtopTabletPadding',
					} }
					valueRightTablet={ {
						value: fieldrightTabletPadding,
						label: 'fieldrightTabletPadding',
					} }
					valueBottomTablet={ {
						value: fieldbottomTabletPadding,
						label: 'fieldbottomTabletPadding',
					} }
					valueLeftTablet={ {
						value: fieldleftTabletPadding,
						label: 'fieldleftTabletPadding',
					} }
					valueTopMobile={ {
						value: fieldtopMobilePadding,
						label: 'fieldtopMobilePadding',
					} }
					valueRightMobile={ {
						value: fieldrightMobilePadding,
						label: 'fieldrightMobilePadding',
					} }
					valueBottomMobile={ {
						value: fieldbottomMobilePadding,
						label: 'fieldbottomMobilePadding',
					} }
					valueLeftMobile={ {
						value: fieldleftMobilePadding,
						label: 'fieldleftMobilePadding',
					} }
					unit={ {
						value: fieldpaddingUnit,
						label: 'fieldpaddingUnit',
					} }
					mUnit={ {
						value: fieldmobilePaddingUnit,
						label: 'fieldmobilePaddingUnit',
					} }
					tUnit={ {
						value: fieldtabletPaddingUnit,
						label: 'fieldtabletPaddingUnit',
					} }
					attributes={ attributes }
					setAttributes={ setAttributes }
					link={ {
						value: fieldpaddingLink,
						label: 'fieldpaddingLink',
					} }
				/>
				<SpacingControl
					{ ...props }
					label={ __(
						'Button Padding',
						'ultimate-addons-for-gutenberg'
					) }
					valueTop={ {
						value: buttontopPadding,
						label: 'buttontopPadding',
					} }
					valueRight={ {
						value: buttonrightPadding,
						label: 'buttonrightPadding',
					} }
					valueBottom={ {
						value: buttonbottomPadding,
						label: 'buttonbottomPadding',
					} }
					valueLeft={ {
						value: buttonleftPadding,
						label: 'buttonleftPadding',
					} }
					valueTopTablet={ {
						value: buttontopTabletPadding,
						label: 'buttontopTabletPadding',
					} }
					valueRightTablet={ {
						value: buttonrightTabletPadding,
						label: 'buttonrightTabletPadding',
					} }
					valueBottomTablet={ {
						value: buttonbottomTabletPadding,
						label: 'buttonbottomTabletPadding',
					} }
					valueLeftTablet={ {
						value: buttonleftTabletPadding,
						label: 'buttonleftTabletPadding',
					} }
					valueTopMobile={ {
						value: buttontopMobilePadding,
						label: 'buttontopMobilePadding',
					} }
					valueRightMobile={ {
						value: buttonrightMobilePadding,
						label: 'buttonrightMobilePadding',
					} }
					valueBottomMobile={ {
						value: buttonbottomMobilePadding,
						label: 'buttonbottomMobilePadding',
					} }
					valueLeftMobile={ {
						value: buttonleftMobilePadding,
						label: 'buttonleftMobilePadding',
					} }
					unit={ {
						value: buttonpaddingUnit,
						label: 'buttonpaddingUnit',
					} }
					mUnit={ {
						value: buttonmobilePaddingUnit,
						label: 'buttonmobilePaddingUnit',
					} }
					tUnit={ {
						value: buttontabletPaddingUnit,
						label: 'buttontabletPaddingUnit',
					} }
					attributes={ attributes }
					setAttributes={ setAttributes }
					link={ {
						value: buttonpaddingLink,
						label: 'buttonpaddingLink',
					} }
				/>
				<SpacingControl
					{ ...props }
					label={ __(
						'Message Padding',
						'ultimate-addons-for-gutenberg'
					) }
					valueTop={ {
						value: msgtopPadding,
						label: 'msgtopPadding',
					} }
					valueRight={ {
						value: msgrightPadding,
						label: 'msgrightPadding',
					} }
					valueBottom={ {
						value: msgbottomPadding,
						label: 'msgbottomPadding',
					} }
					valueLeft={ {
						value: msgleftPadding,
						label: 'msgleftPadding',
					} }
					valueTopTablet={ {
						value: msgtopTabletPadding,
						label: 'msgtopTabletPadding',
					} }
					valueRightTablet={ {
						value: msgrightTabletPadding,
						label: 'msgrightTabletPadding',
					} }
					valueBottomTablet={ {
						value: msgbottomTabletPadding,
						label: 'msgbottomTabletPadding',
					} }
					valueLeftTablet={ {
						value: msgleftTabletPadding,
						label: 'msgleftTabletPadding',
					} }
					valueTopMobile={ {
						value: msgtopMobilePadding,
						label: 'msgtopMobilePadding',
					} }
					valueRightMobile={ {
						value: msgrightMobilePadding,
						label: 'msgrightMobilePadding',
					} }
					valueBottomMobile={ {
						value: msgbottomMobilePadding,
						label: 'msgbottomMobilePadding',
					} }
					valueLeftMobile={ {
						value: msgleftMobilePadding,
						label: 'msgleftMobilePadding',
					} }
					unit={ {
						value: msgpaddingUnit,
						label: 'msgpaddingUnit',
					} }
					mUnit={ {
						value: msgmobilePaddingUnit,
						label: 'msgmobilePaddingUnit',
					} }
					tUnit={ {
						value: msgtabletPaddingUnit,
						label: 'msgtabletPaddingUnit',
					} }
					attributes={ attributes }
					setAttributes={ setAttributes }
					link={ {
						value: msgpaddingLink,
						label: 'msgpaddingLink',
					} }
				/>
			</PanelBody>
		);
	};

	const radioCheckSetting = () => {
		return (
			<PanelBody
				title={ __(
					'Radio & Checkbox',
					'ultimate-addons-for-gutenberg'
				) }
				initialOpen={ false }
			>
				<ToggleControl
					label={ __(
						'Override Current Style',
						'ultimate-addons-for-gutenberg'
					) }
					checked={ enableOveride }
					onChange={ () =>
						setAttributes( { enableOveride: ! enableOveride } )
					}
				/>
				{ enableOveride && (
					<>
						<Range
							label={ __(
								'Size',
								'ultimate-addons-for-gutenberg'
							) }
							setAttributes={ setAttributes }
							value={ radioCheckSize }
							onChange={ ( value ) =>
								setAttributes( { radioCheckSize: value } )
							}
							min={ 0 }
							max={ 200 }
							displayUnit={ false }
						/>
						<h2>
							{ __(
								'Radio & Checkbox Label',
								'ultimate-addons-for-gutenberg'
							) }
						</h2>
						<AdvancedPopColorControl
							label={ __(
								'Label Color',
								'ultimate-addons-for-gutenberg'
							) }
							colorValue={ radioCheckLableColor }
							onColorChange={ ( value ) =>
								setAttributes( { radioCheckLableColor: value } )
							}
						/>
						<AdvancedPopColorControl
							label={ __(
								'Background Color',
								'ultimate-addons-for-gutenberg'
							) }
							colorValue={ radioCheckBgColor }
							onColorChange={ ( value ) =>
								setAttributes( { radioCheckBgColor: value } )
							}
						/>
						<AdvancedPopColorControl
							label={ __(
								'Selected Color',
								'ultimate-addons-for-gutenberg'
							) }
							colorValue={ radioCheckSelectColor }
							onColorChange={ ( value ) =>
								setAttributes( {
									radioCheckSelectColor: value,
								} )
							}
						/>
						<TypographyControl
							label={ __(
								'Typography',
								'ultimate-addons-for-gutenberg'
							) }
							attributes={ attributes }
							setAttributes={ setAttributes }
							loadGoogleFonts={ {
								value: radioCheckLoadGoogleFonts,
								label: 'radioCheckLoadGoogleFonts',
							} }
							fontFamily={ {
								value: radioCheckFontFamily,
								label: 'radioCheckFontFamily',
							} }
							fontWeight={ {
								value: radioCheckFontWeight,
								label: 'radioCheckFontWeight',
							} }
							fontSubset={ {
								value: radioCheckFontSubset,
								label: 'radioCheckFontSubset',
							} }
							fontSizeType={ {
								value: radioCheckFontSizeType,
								label: 'radioCheckFontSizeType',
							} }
							fontSize={ {
								value: radioCheckFontSize,
								label: 'radioCheckFontSize',
							} }
							fontSizeMobile={ {
								value: radioCheckFontSizeMobile,
								label: 'radioCheckFontSizeMobile',
							} }
							fontSizeTablet={ {
								value: radioCheckFontSizeTablet,
								label: 'radioCheckFontSizeTablet',
							} }
							lineHeightType={ {
								value: radioCheckLineHeightType,
								label: 'radioCheckLineHeightType',
							} }
							lineHeight={ {
								value: radioCheckLineHeight,
								label: 'radioCheckLineHeight',
							} }
							lineHeightMobile={ {
								value: radioCheckLineHeightMobile,
								label: 'radioCheckLineHeightMobile',
							} }
							lineHeightTablet={ {
								value: radioCheckLineHeightTablet,
								label: 'radioCheckLineHeightTablet',
							} }
						/>
						{ fieldBorderStyle !== 'none' && (
							<>
								<h2>{ __( 'Radio & Checkbox Border' ) }</h2>
								<Range
									label={ __(
										'Width (px)',
										'ultimate-addons-for-gutenberg'
									) }
									setAttributes={ setAttributes }
									value={ radioCheckBorderWidth }
									onChange={ ( value ) =>
										setAttributes( {
											radioCheckBorderWidth: value,
										} )
									}
									min={ 0 }
									max={ 50 }
									displayUnit={ false }
								/>
								<Range
									label={ __(
										'Radius',
										'ultimate-addons-for-gutenberg'
									) }
									setAttributes={ setAttributes }
									value={ radioCheckBorderRadius }
									onChange={ ( value ) =>
										setAttributes( {
											radioCheckBorderRadius: value,
										} )
									}
									min={ 0 }
									max={ 100 }
									unit={ {
										value: radioCheckBorderRadiusType,
										label: 'radioCheckBorderRadiusType',
									} }
									units={ [
										{
											name: __(
												'Pixel',
												'ultimate-addons-for-gutenberg'
											),
											unitValue: 'px',
										},
										{
											name: __(
												'%',
												'ultimate-addons-for-gutenberg'
											),
											unitValue: '%',
										},
									] }
								/>
								<AdvancedPopColorControl
									label={ __(
										'Color',
										'ultimate-addons-for-gutenberg'
									) }
									colorValue={
										radioCheckBorderColor
											? radioCheckBorderColor
											: ''
									}
									onColorChange={ ( value ) =>
										setAttributes( {
											radioCheckBorderColor: value,
										} )
									}
								/>
							</>
						) }
					</>
				) }
			</PanelBody>
		);
	};

	const msgSettings = () => {
		return (
			<PanelBody
				title={ __(
					'Success / Error Message',
					'ultimate-addons-for-gutenberg'
				) }
				initialOpen={ false }
			>
				<p className="uagb-settings-notice">
					{ __(
						'Note: This styling can be only seen on frontend',
						'ultimate-addons-for-gutenberg'
					) }
				</p>
				<h2>
					{ __(
						'Field Validation',
						'ultimate-addons-for-gutenberg'
					) }
				</h2>
				<AdvancedPopColorControl
					label={ __(
						'Message Color',
						'ultimate-addons-for-gutenberg'
					) }
					colorValue={ validationMsgColor ? validationMsgColor : '' }
					onColorChange={ ( value ) =>
						setAttributes( { validationMsgColor: value } )
					}
				/>
				<TypographyControl
					label={ __( 'Typography' ) }
					attributes={ attributes }
					setAttributes={ setAttributes }
					loadGoogleFonts={ {
						value: validationMsgLoadGoogleFonts,
						label: 'validationMsgLoadGoogleFonts',
					} }
					fontFamily={ {
						value: validationMsgFontFamily,
						label: 'validationMsgFontFamily',
					} }
					fontWeight={ {
						value: validationMsgFontWeight,
						label: 'validationMsgFontWeight',
					} }
					fontSubset={ {
						value: validationMsgFontSubset,
						label: 'validationMsgFontSubset',
					} }
					fontSizeType={ {
						value: validationMsgFontSizeType,
						label: 'validationMsgFontSizeType',
					} }
					fontSize={ {
						value: validationMsgFontSize,
						label: 'validationMsgFontSize',
					} }
					fontSizeMobile={ {
						value: validationMsgFontSizeMobile,
						label: 'validationMsgFontSizeMobile',
					} }
					fontSizeTablet={ {
						value: validationMsgFontSizeTablet,
						label: 'validationMsgFontSizeTablet',
					} }
					lineHeightType={ {
						value: validationMsgLineHeightType,
						label: 'validationMsgLineHeightType',
					} }
					lineHeight={ {
						value: validationMsgLineHeight,
						label: 'validationMsgLineHeight',
					} }
					lineHeightMobile={ {
						value: validationMsgLineHeightMobile,
						label: 'validationMsgLineHeightMobile',
					} }
					lineHeightTablet={ {
						value: validationMsgLineHeightTablet,
						label: 'validationMsgLineHeightTablet',
					} }
				/>
				<ToggleControl
					label={ __(
						'Advanced Settings',
						'ultimate-addons-for-gutenberg'
					) }
					checked={ advancedValidationSettings }
					onChange={ () =>
						setAttributes( {
							advancedValidationSettings: ! advancedValidationSettings,
						} )
					}
				/>

				{ advancedValidationSettings && (
					<>
						<AdvancedPopColorControl
							label={ __(
								'Field Background Color',
								'ultimate-addons-for-gutenberg'
							) }
							colorValue={
								validationMsgBgColor ? validationMsgBgColor : ''
							}
							onColorChange={ ( value ) =>
								setAttributes( { validationMsgBgColor: value } )
							}
						/>
					</>
				) }

				{ advancedValidationSettings && (
					<>
						<AdvancedPopColorControl
							label={ __(
								'Highlight Border Color',
								'ultimate-addons-for-gutenberg'
							) }
							colorValue={
								highlightBorderColor ? highlightBorderColor : ''
							}
							onColorChange={ ( value ) =>
								setAttributes( { highlightBorderColor: value } )
							}
						/>
					</>
				) }
				<h2>
					{ __(
						'Error Message Validation',
						'ultimate-addons-for-gutenberg'
					) }
				</h2>
				<AdvancedPopColorControl
					label={ __( 'Color', 'ultimate-addons-for-gutenberg' ) }
					colorValue={ errorMsgColor ? errorMsgColor : '' }
					onColorChange={ ( value ) =>
						setAttributes( { errorMsgColor: value } )
					}
				/>
				<AdvancedPopColorControl
					label={ __(
						'Background Color',
						'ultimate-addons-for-gutenberg'
					) }
					colorValue={ errorMsgBgColor ? errorMsgBgColor : '' }
					onColorChange={ ( value ) =>
						setAttributes( { errorMsgBgColor: value } )
					}
				/>
				<AdvancedPopColorControl
					label={ __(
						'Border Color',
						'ultimate-addons-for-gutenberg'
					) }
					colorValue={
						errorMsgBorderColor ? errorMsgBorderColor : ''
					}
					onColorChange={ ( value ) =>
						setAttributes( { errorMsgBorderColor: value } )
					}
				/>
				<Range
					label={ __(
						'Border Width (px)',
						'ultimate-addons-for-gutenberg'
					) }
					setAttributes={ setAttributes }
					value={ msgBorderSize }
					onChange={ ( value ) =>
						setAttributes( { msgBorderSize: value } )
					}
					min={ 0 }
					max={ 50 }
					displayUnit={ false }
				/>
				<Range
					label={ __(
						'Border Radius',
						'ultimate-addons-for-gutenberg'
					) }
					setAttributes={ setAttributes }
					value={ msgBorderRadius }
					onChange={ ( value ) =>
						setAttributes( { msgBorderRadius: value } )
					}
					min={ 0 }
					max={ 100 }
					unit={ {
						value: msgBorderRadiusType,
						label: 'msgBorderRadiusType',
					} }
					units={ [
						{
							name: __(
								'Pixel',
								'ultimate-addons-for-gutenberg'
							),
							unitValue: 'px',
						},
						{
							name: __( '%', 'ultimate-addons-for-gutenberg' ),
							unitValue: '%',
						},
					] }
				/>
				<TypographyControl
					label={ __(
						'Typography',
						'ultimate-addons-for-gutenberg'
					) }
					attributes={ attributes }
					setAttributes={ setAttributes }
					loadGoogleFonts={ {
						value: msgLoadGoogleFonts,
						label: 'msgLoadGoogleFonts',
					} }
					fontFamily={ {
						value: msgFontFamily,
						label: 'msgFontFamily',
					} }
					fontWeight={ {
						value: msgFontWeight,
						label: 'msgFontWeight',
					} }
					fontSubset={ {
						value: msgFontSubset,
						label: 'msgFontSubset',
					} }
					fontSizeType={ {
						value: msgFontSizeType,
						label: 'msgFontSizeType',
					} }
					fontSize={ { value: msgFontSize, label: 'msgFontSize' } }
					fontSizeMobile={ {
						value: msgFontSizeMobile,
						label: 'msgFontSizeMobile',
					} }
					fontSizeTablet={ {
						value: msgFontSizeTablet,
						label: 'msgFontSizeTablet',
					} }
					lineHeightType={ {
						value: msgLineHeightType,
						label: 'msgLineHeightType',
					} }
					lineHeight={ {
						value: msgLineHeight,
						label: 'msgLineHeight',
					} }
					lineHeightMobile={ {
						value: msgLineHeightMobile,
						label: 'msgLineHeightMobile',
					} }
					lineHeightTablet={ {
						value: msgLineHeightTablet,
						label: 'msgLineHeightTablet',
					} }
				/>
				<h2>
					{ __(
						'Success Message Validation',
						'ultimate-addons-for-gutenberg'
					) }
				</h2>
				<AdvancedPopColorControl
					label={ __( 'Color', 'ultimate-addons-for-gutenberg' ) }
					colorValue={ successMsgColor ? successMsgColor : '' }
					onColorChange={ ( value ) =>
						setAttributes( { successMsgColor: value } )
					}
				/>
				<TypographyControl
					label={ __(
						'Typography',
						'ultimate-addons-for-gutenberg'
					) }
					attributes={ attributes }
					setAttributes={ setAttributes }
					loadGoogleFonts={ {
						value: successMsgLoadGoogleFonts,
						label: 'successMsgLoadGoogleFonts',
					} }
					fontFamily={ {
						value: successMsgFontFamily,
						label: 'successMsgFontFamily',
					} }
					fontWeight={ {
						value: successMsgFontWeight,
						label: 'successMsgFontWeight',
					} }
					fontSubset={ {
						value: successMsgFontSubset,
						label: 'successMsgFontSubset',
					} }
					fontSizeType={ {
						value: successMsgFontSizeType,
						label: 'successMsgFontSizeType',
					} }
					fontSize={ {
						value: successMsgFontSize,
						label: 'successMsgFontSize',
					} }
					fontSizeMobile={ {
						value: successMsgFontSizeMobile,
						label: 'successMsgFontSizeMobile',
					} }
					fontSizeTablet={ {
						value: successMsgFontSizeTablet,
						label: 'successMsgFontSizeTablet',
					} }
					lineHeightType={ {
						value: successMsgLineHeightType,
						label: 'successMsgLineHeightType',
					} }
					lineHeight={ {
						value: successMsgLineHeight,
						label: 'successMsgLineHeight',
					} }
					lineHeightMobile={ {
						value: successMsgLineHeightMobile,
						label: 'successMsgLineHeightMobile',
					} }
					lineHeightTablet={ {
						value: successMsgLineHeightTablet,
						label: 'successMsgLineHeightTablet',
					} }
				/>
			</PanelBody>
		);
	};

	const blockControls = () => {
		return (
			<BlockControls key="controls">
				<AlignmentToolbar
					value={ align }
					onChange={ ( value ) => setAttributes( { align: value } ) }
				/>
			</BlockControls>
		);
	};
	/*
	 * Event to set Image as while adding.
	 */
	const onSelectForm = ( id ) => {
		if ( ! id ) {
			setAttributes( { isHtml: false } );
			setAttributes( { formId: null } );
			return;
		}
		setAttributes( { isHtml: false } );
		setAttributes( { formId: id } );
	};

	return (
		<Suspense fallback={ lazyLoader() }>
			{ blockControls() }
			<InspectorControls>
				<InspectorTabs>
					<InspectorTab { ...UAGTabs.general }>
						{ fieldSettings() }
					</InspectorTab>
					<InspectorTab { ...UAGTabs.style }>
						{ fieldBorderSetting() }
						{ labelSettings() }
						{ inputSettings() }
						{ radioCheckSetting() }
						{ btnSetting() }
						{ msgSettings() }
						{ spacingSetting() }
					</InspectorTab>
					<InspectorTab
						{ ...UAGTabs.advance }
						parentProps={ props }
					></InspectorTab>
				</InspectorTabs>
			</InspectorControls>
			{ loadInputGoogleFonts }
			{ loadButtonGoogleFonts }
			{ loadLabelGoogleFonts }
			{ loadRadioGoogleFonts }
			{ loadValidationGoogleFonts }
			{ loadMsgGoogleFonts }
		</Suspense>
	);
};
export default React.memo( Settings );
