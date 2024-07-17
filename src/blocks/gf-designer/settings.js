import TypographyControl from '@Components/typography';
import { __ } from '@wordpress/i18n';
import AdvancedPopColorControl from '@Components/color-control/advanced-pop-color-control.js';
import InspectorTabs from '@Components/inspector-tabs/InspectorTabs.js';
import InspectorTab, { UAGTabs } from '@Components/inspector-tabs/InspectorTab.js';
import MultiButtonsControl from '@Components/multi-buttons-control';
import renderSVG from '@Controls/renderIcon';
import Range from '@Components/range/Range.js';
import UAGTabsControl from '@Components/tabs';
import SpacingControl from '@Components/spacing-control';
import ResponsiveSlider from '@Components/responsive-slider';
import UAGSelectControl from '@Components/select-control';
import { AlignmentToolbar, BlockControls, InspectorControls } from '@wordpress/block-editor';

import { ToggleControl, Icon } from '@wordpress/components';
import { memo } from '@wordpress/element';

import UAGAdvancedPanelBody from '@Components/advanced-panel-body';

const Settings = ( props ) => {

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
		fieldBorderWidthTablet,
		fieldBorderWidthMobile,
		fieldBorderWidthType,
		fieldBorderRadius,
		fieldBorderColor,
		fieldBorderFocusColor,
		textAreaHeight,
		textAreaHeightTablet,
		textAreaHeightMobile,
		buttonAlignment,
		buttonAlignmentTablet,
		buttonAlignmentMobile,
		buttonTextColor,
		buttonBgColor,
		buttonTextHoverColor,
		buttonBgHoverColor,
		buttonBorderStyle,
		buttonBorderWidth,
		buttonBorderWidthTablet,
		buttonBorderWidthMobile,
		buttonBorderWidthType,
		buttonBorderRadius,
		buttonBorderColor,
		buttonBorderHoverColor,
		fieldSpacing,
		fieldSpacingTablet,
		fieldSpacingMobile,
		fieldLabelSpacing,
		fieldLabelSpacingTablet,
		fieldLabelSpacingMobile,
		enableLabel,
		labelFontSize,
		labelFontSizeType,
		labelFontSizeTablet,
		labelFontSizeMobile,
		labelFontFamily,
		labelFontWeight,
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
		buttonLineHeightType,
		buttonLineHeight,
		buttonLineHeightTablet,
		buttonLineHeightMobile,
		buttonLoadGoogleFonts,
		enableOveride,
		radioCheckSize,
		radioCheckSizeTablet,
		radioCheckSizeMobile,
		radioCheckBgColor,
		radioCheckSelectColor,
		radioCheckLableColor,
		radioCheckBorderColor,
		radioCheckBorderWidth,
		radioCheckBorderWidthTablet,
		radioCheckBorderWidthMobile,
		radioCheckBorderWidthType,
		radioCheckBorderRadius,
		radioCheckFontSize,
		radioCheckFontSizeType,
		radioCheckFontSizeTablet,
		radioCheckFontSizeMobile,
		radioCheckFontFamily,
		radioCheckFontWeight,
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
		msgBorderSizeType,
		msgBorderRadius,
		msgFontSize,
		msgFontSizeType,
		msgFontSizeTablet,
		msgFontSizeMobile,
		msgFontFamily,
		msgFontWeight,
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
		labelFontStyle,
		labelTransform,
		labelDecoration,
		inputFontStyle,
		inputTransform,
		inputDecoration,
		buttonFontStyle,
		buttonTransform,
		buttonDecoration,
		radioCheckFontStyle,
		radioCheckTransform,
		radioCheckDecoration,
		validationMsgFontStyle,
		validationMsgTransform,
		validationMsgDecoration,
		msgFontStyle,
		msgTransform,
		msgDecoration,
		successMsgDecoration,
		successMsgFontStyle,
		successMsgTransform,
		labelLetterSpacing,
		labelLetterSpacingTablet,
		labelLetterSpacingMobile,
		labelLetterSpacingType,
		inputLetterSpacing,
		inputLetterSpacingTablet,
		inputLetterSpacingMobile,
		inputLetterSpacingType,
		radioCheckLetterSpacing,
		radioCheckLetterSpacingTablet,
		radioCheckLetterSpacingMobile,
		radioCheckLetterSpacingType,
		buttonLetterSpacing,
		buttonLetterSpacingTablet,
		buttonLetterSpacingMobile,
		buttonLetterSpacingType,
		validationMsgLetterSpacing,
		validationMsgLetterSpacingTablet,
		validationMsgLetterSpacingMobile,
		validationMsgLetterSpacingType,
		msgLetterSpacing,
		msgLetterSpacingTablet,
		msgLetterSpacingMobile,
		msgLetterSpacingType,
		successMsgLetterSpacing,
		successMsgLetterSpacingTablet,
		successMsgLetterSpacingMobile,
		successMsgLetterSpacingType,
	} = attributes;

	const fieldBorderSetting = () => {
		return (
			<UAGAdvancedPanelBody
				title={ __( 'Field Style & Border', 'ultimate-addons-for-gutenberg' ) }
				initialOpen={ true }
			>
				<MultiButtonsControl
					setAttributes={ setAttributes }
					label={ __( 'Field Style', 'ultimate-addons-for-gutenberg' ) }
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
							label: __( 'Underline', 'ultimate-addons-for-gutenberg' ),
						},
					] }
				/>
				<SpacingControl
					{ ...props }
					label={ __( 'Padding', 'ultimate-addons-for-gutenberg' ) }
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
				{ fieldStyle === 'box' && (
					<UAGSelectControl
						label={ __( 'Border Style', 'ultimate-addons-for-gutenberg' ) }
						data={ {
							value: fieldBorderStyle,
							label: 'fieldBorderStyle',
						} }
						setAttributes={ setAttributes }
						options={ [
							{
								value: 'none',
								label: __( 'None', 'ultimate-addons-for-gutenberg' ),
							},
							{
								value: 'solid',
								label: __( 'Solid', 'ultimate-addons-for-gutenberg' ),
							},
							{
								value: 'dotted',
								label: __( 'Dotted', 'ultimate-addons-for-gutenberg' ),
							},
							{
								value: 'dashed',
								label: __( 'Dashed', 'ultimate-addons-for-gutenberg' ),
							},
							{
								value: 'double',
								label: __( 'Double', 'ultimate-addons-for-gutenberg' ),
							},
							{
								value: 'groove',
								label: __( 'Groove', 'ultimate-addons-for-gutenberg' ),
							},
							{
								value: 'inset',
								label: __( 'Inset', 'ultimate-addons-for-gutenberg' ),
							},
							{
								value: 'outset',
								label: __( 'Outset', 'ultimate-addons-for-gutenberg' ),
							},
							{
								value: 'ridge',
								label: __( 'Ridge', 'ultimate-addons-for-gutenberg' ),
							},
						] }
					/>
				) }
				{ ( 'none' !== fieldBorderStyle || fieldStyle === 'underline' ) && (
					<ResponsiveSlider
						label={ __( 'Width', 'ultimate-addons-for-gutenberg' ) }
						data={ {
							desktop: {
								value: fieldBorderWidth,
								label: 'fieldBorderWidth',
							},
							tablet: {
								value: fieldBorderWidthTablet,
								label: 'fieldBorderWidthTablet',
							},
							mobile: {
								value: fieldBorderWidthMobile,
								label: 'fieldBorderWidthMobile',
							},
						} }
						min={ 0 }
						max={ 50 }
						unit={ {
							value: fieldBorderWidthType,
							label: 'fieldBorderWidthType',
						} }
						units={ [
							{
								name: __( 'Pixel', 'ultimate-addons-for-gutenberg' ),
								unitValue: 'px',
							},
						] }
						setAttributes={ setAttributes }
					/>
				) }
				<Range
					label={ __( 'Radius', 'ultimate-addons-for-gutenberg' ) }
					setAttributes={ setAttributes }
					value={ fieldBorderRadius }
					data={ {
						value: fieldBorderRadius,
						label: 'fieldBorderRadius',
					} }
					min={ 0 }
					max={ 50 }
					unit={ {
						value: fieldBorderRadiusType,
						label: 'fieldBorderRadiusType',
					} }
					units={ [
						{
							name: __( 'Pixel', 'ultimate-addons-for-gutenberg' ),
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
							title: __( 'Normal', 'ultimate-addons-for-gutenberg' ),
						},
						{
							name: 'active',
							title: __( 'Active', 'ultimate-addons-for-gutenberg' ),
						},
					] }
					normal={
						( 'none' !== fieldBorderStyle || fieldStyle === 'underline' ) && (
							<>
								<AdvancedPopColorControl
									label={ __( 'Color', 'ultimate-addons-for-gutenberg' ) }
									colorValue={ fieldBorderColor ? fieldBorderColor : '' }
									data={ {
										value: fieldBorderColor,
										label: 'fieldBorderColor',
									} }
									setAttributes={ setAttributes }
								/>
							</>
						)
					}
					active={
						( 'none' !== fieldBorderStyle || fieldStyle === 'underline' ) && (
							<>
								<AdvancedPopColorControl
									label={ __( 'Color', 'ultimate-addons-for-gutenberg' ) }
									colorValue={ fieldBorderFocusColor ? fieldBorderFocusColor : '' }
									data={ {
										value: fieldBorderFocusColor,
										label: 'fieldBorderFocusColor',
									} }
									setAttributes={ setAttributes }
								/>
							</>
						)
					}
					disableBottomSeparator={ true }
				/>
			</UAGAdvancedPanelBody>
		);
	};

	const inputSettings = () => {
		return (
			<UAGAdvancedPanelBody title={ __( 'Input', 'ultimate-addons-for-gutenberg' ) } initialOpen={ false }>
				<AdvancedPopColorControl
					label={ __( 'Color', 'ultimate-addons-for-gutenberg' ) }
					colorValue={ fieldInputColor ? fieldInputColor : '' }
					data={ {
						value: fieldInputColor,
						label: 'fieldInputColor',
					} }
					setAttributes={ setAttributes }
				/>
				<AdvancedPopColorControl
					label={ __( 'Background Color', 'ultimate-addons-for-gutenberg' ) }
					colorValue={ fieldBgColor ? fieldBgColor : '' }
					data={ {
						value: fieldBgColor,
						label: 'fieldBgColor',
					} }
					setAttributes={ setAttributes }
				/>
				<TypographyControl
					label={ __( 'Typography', 'ultimate-addons-for-gutenberg' ) }
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
					fontStyle={ {
						value: inputFontStyle,
						label: 'inputFontStyle',
					} }
					transform={ {
						value: inputTransform,
						label: 'inputTransform',
					} }
					decoration={ {
						value: inputDecoration,
						label: 'inputDecoration',
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
					letterSpacing={ {
						value: inputLetterSpacing,
						label: 'inputLetterSpacing',
					} }
					letterSpacingTablet={ {
						value: inputLetterSpacingTablet,
						label: 'inputLetterSpacingTablet',
					} }
					letterSpacingMobile={ {
						value: inputLetterSpacingMobile,
						label: 'inputLetterSpacingMobile',
					} }
					letterSpacingType={ {
						value: inputLetterSpacingType,
						label: 'inputLetterSpacingType',
					} }
				/>
				<ResponsiveSlider
					label={ __( 'Text Area Height', 'ultimate-addons-for-gutenberg' ) }
					data={ {
						desktop: {
							value: textAreaHeight,
							label: 'textAreaHeight',
						},
						tablet: {
							value: textAreaHeightTablet,
							label: 'textAreaHeightTablet',
						},
						mobile: {
							value: textAreaHeightMobile,
							label: 'textAreaHeightMobile',
						},
					} }
					min={ 0 }
					max={ 200 }
					displayUnit={ false }
					setAttributes={ setAttributes }
				/>
			</UAGAdvancedPanelBody>
		);
	};

	const labelSettings = () => {
		return (
			<UAGAdvancedPanelBody title={ __( 'Label', 'ultimate-addons-for-gutenberg' ) } initialOpen={ false }>
				<ToggleControl
					label="Hide Label"
					checked={ enableLabel }
					onChange={ () => setAttributes( { enableLabel: ! enableLabel } ) }
				/>
				{ ! enableLabel && (
					<>
						<AdvancedPopColorControl
							label={ __( 'Color', 'ultimate-addons-for-gutenberg' ) }
							colorValue={ fieldLabelColor ? fieldLabelColor : '' }
							data={ {
								value: fieldLabelColor,
								label: 'fieldLabelColor',
							} }
							setAttributes={ setAttributes }
						/>
						<TypographyControl
							label={ __( 'Typography', 'ultimate-addons-for-gutenberg' ) }
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
							fontStyle={ {
								value: labelFontStyle,
								label: 'labelFontStyle',
							} }
							transform={ {
								value: labelTransform,
								label: 'labelTransform',
							} }
							decoration={ {
								value: labelDecoration,
								label: 'labelDecoration',
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
							letterSpacing={ {
								value: labelLetterSpacing,
								label: 'labelLetterSpacing',
							} }
							letterSpacingTablet={ {
								value: labelLetterSpacingTablet,
								label: 'labelLetterSpacingTablet',
							} }
							letterSpacingMobile={ {
								value: labelLetterSpacingMobile,
								label: 'labelLetterSpacingMobile',
							} }
							letterSpacingType={ {
								value: labelLetterSpacingType,
								label: 'labelLetterSpacingType',
							} }
						/>
					</>
				) }
			</UAGAdvancedPanelBody>
		);
	};

	const fieldSettings = () => {
		return (
			<UAGAdvancedPanelBody title={ __( 'General', 'ultimate-addons-for-gutenberg' ) }>
				<UAGSelectControl
					label={ __( 'Select Form', 'ultimate-addons-for-gutenberg' ) }
					data={ {
						value: formId,
					} }
					onChange={ onSelectForm }
					options={ uagb_blocks_info.gf_forms }
				/>
				<ToggleControl
					label="Enable AJAX Form Submission"
					checked={ enableAjax }
					onChange={ () => setAttributes( { enableAjax: ! enableAjax } ) }
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
						label={ __( 'Tab Index', 'ultimate-addons-for-gutenberg' ) }
						setAttributes={ setAttributes }
						value={ formTabIndex }
						data={ {
							value: formTabIndex,
							label: 'formTabIndex',
						} }
						min={ 0 }
						max={ 500 }
						displayUnit={ false }
					/>
				) }
				<MultiButtonsControl
					setAttributes={ setAttributes }
					label={ __( 'Form Title & Description', 'ultimate-addons-for-gutenberg' ) }
					data={ {
						value: titleDescStyle,
						label: 'titleDescStyle',
					} }
					options={ [
						{
							value: 'yes',
							label: __( 'Show', 'ultimate-addons-for-gutenberg' ),
						},
						{
							value: 'none',
							label: __( 'Hide', 'ultimate-addons-for-gutenberg' ),
						},
					] }
				/>
				<MultiButtonsControl
					setAttributes={ setAttributes }
					label={ __( 'Field & Input Label Alignment', 'ultimate-addons-for-gutenberg' ) }
					data={ {
						value: align,
						label: 'align',
					} }
					className="uagb-multi-button-alignment-control"
					options={ [
						{
							value: 'left',
							icon: <Icon icon={ renderSVG( 'fa fa-align-left' ) } />,
							tooltip: __( 'Left', 'ultimate-addons-for-gutenberg' ),
						},
						{
							value: 'center',
							icon: <Icon icon={ renderSVG( 'fa fa-align-center' ) } />,
							tooltip: __( 'Center', 'ultimate-addons-for-gutenberg' ),
						},
						{
							value: 'right',
							icon: <Icon icon={ renderSVG( 'fa fa-align-right' ) } />,
							tooltip: __( 'Right', 'ultimate-addons-for-gutenberg' ),
						},
					] }
					showIcons={ true }
				/>
				{ titleDescStyle !== 'none' && (
					<MultiButtonsControl
						setAttributes={ setAttributes }
						label={ __( 'Title & Description Alignment', 'ultimate-addons-for-gutenberg' ) }
						data={ {
							value: titleDescAlignment,
							label: 'titleDescAlignment',
						} }
						className="uagb-multi-button-alignment-control"
						options={ [
							{
								value: 'left',
								icon: <Icon icon={ renderSVG( 'fa fa-align-left' ) } />,
								tooltip: __( 'Left', 'ultimate-addons-for-gutenberg' ),
							},
							{
								value: 'center',
								icon: <Icon icon={ renderSVG( 'fa fa-align-center' ) } />,
								tooltip: __( 'Center', 'ultimate-addons-for-gutenberg' ),
							},
							{
								value: 'right',
								icon: <Icon icon={ renderSVG( 'fa fa-align-right' ) } />,
								tooltip: __( 'Right', 'ultimate-addons-for-gutenberg' ),
							},
						] }
						showIcons={ true }
					/>
				) }
				<MultiButtonsControl
					setAttributes={ setAttributes }
					label={ __( 'Submit Button Alignment', 'ultimate-addons-for-gutenberg' ) }
					data={ {
						desktop: {
							value: buttonAlignment,
							label: 'buttonAlignment',
						},
						tablet: {
							value: buttonAlignmentTablet,
							label: 'buttonAlignmentTablet',
						},
						mobile: {
							value: buttonAlignmentMobile,
							label: 'buttonAlignmentMobile',
						},
					} }
					options={ [
						{
							value: 'left',
							icon: <Icon icon={ renderSVG( 'fa fa-align-left' ) } />,
							tooltip: __( 'Left', 'ultimate-addons-for-gutenberg' ),
						},
						{
							value: 'center',
							icon: <Icon icon={ renderSVG( 'fa fa-align-center' ) } />,
							tooltip: __( 'Center', 'ultimate-addons-for-gutenberg' ),
						},
						{
							value: 'right',
							icon: <Icon icon={ renderSVG( 'fa fa-align-right' ) } />,
							tooltip: __( 'Right', 'ultimate-addons-for-gutenberg' ),
						},
						{
							value: 'justify',
							icon: <Icon icon={ renderSVG( 'fa fa-align-justify' ) } />,
							tooltip: __( 'Justified', 'ultimate-addons-for-gutenberg' ),
						},
					] }
					showIcons={ true }
					responsive={ true }
				/>
			</UAGAdvancedPanelBody>
		);
	};

	//Submit button settings.
	const btnBorderSetting = () => {
		return (
			<>
				<UAGSelectControl
					label={ __( 'Style', 'ultimate-addons-for-gutenberg' ) }
					data={ {
						value: buttonBorderStyle,
						label: 'buttonBorderStyle',
					} }
					setAttributes={ setAttributes }
					options={ [
						{
							value: 'none',
							label: __( 'None', 'ultimate-addons-for-gutenberg' ),
						},
						{
							value: 'solid',
							label: __( 'Solid', 'ultimate-addons-for-gutenberg' ),
						},
						{
							value: 'dotted',
							label: __( 'Dotted', 'ultimate-addons-for-gutenberg' ),
						},
						{
							value: 'dashed',
							label: __( 'Dashed', 'ultimate-addons-for-gutenberg' ),
						},
						{
							value: 'double',
							label: __( 'Double', 'ultimate-addons-for-gutenberg' ),
						},
						{
							value: 'groove',
							label: __( 'Groove', 'ultimate-addons-for-gutenberg' ),
						},
						{
							value: 'inset',
							label: __( 'Inset', 'ultimate-addons-for-gutenberg' ),
						},
						{
							value: 'outset',
							label: __( 'Outset', 'ultimate-addons-for-gutenberg' ),
						},
						{
							value: 'ridge',
							label: __( 'Ridge', 'ultimate-addons-for-gutenberg' ),
						},
					] }
				/>
				{ 'none' !== buttonBorderStyle && (
					<ResponsiveSlider
						label={ __( 'Width', 'ultimate-addons-for-gutenberg' ) }
						data={ {
							desktop: {
								value: buttonBorderWidth,
								label: 'buttonBorderWidth',
							},
							tablet: {
								value: buttonBorderWidthTablet,
								label: 'buttonBorderWidthTablet',
							},
							mobile: {
								value: buttonBorderWidthMobile,
								label: 'buttonBorderWidthMobile',
							},
						} }
						min={ 0 }
						max={ 50 }
						unit={ {
							value: buttonBorderWidthType,
							label: 'buttonBorderWidthType',
						} }
						units={ [
							{
								name: __( 'Pixel', 'ultimate-addons-for-gutenberg' ),
								unitValue: 'px',
							},
						] }
						setAttributes={ setAttributes }
					/>
				) }
				<Range
					label={ __( 'Radius', 'ultimate-addons-for-gutenberg' ) }
					setAttributes={ setAttributes }
					value={ buttonBorderRadius }
					data={ {
						value: buttonBorderRadius,
						label: 'buttonBorderRadius',
					} }
					min={ 0 }
					max={ 50 }
					unit={ {
						value: buttonBorderRadiusType,
						label: 'buttonBorderRadiusType',
					} }
					units={ [
						{
							name: __( 'Pixel', 'ultimate-addons-for-gutenberg' ),
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
					label={ __( 'Text Color', 'ultimate-addons-for-gutenberg' ) }
					colorValue={ buttonTextColor ? buttonTextColor : '' }
					data={ {
						value: buttonTextColor,
						label: 'buttonTextColor',
					} }
					setAttributes={ setAttributes }
				/>
				<AdvancedPopColorControl
					label={ __( 'Background Color', 'ultimate-addons-for-gutenberg' ) }
					colorValue={ buttonBgColor }
					data={ {
						value: buttonBgColor,
						label: 'buttonBgColor',
					} }
					setAttributes={ setAttributes }
				/>
				{ 'none' !== buttonBorderStyle && (
					<>
						<AdvancedPopColorControl
							label={ __( 'Border Color', 'ultimate-addons-for-gutenberg' ) }
							colorValue={ buttonBorderColor ? buttonBorderColor : '' }
							data={ {
								value: buttonBorderColor,
								label: 'buttonBorderColor',
							} }
							setAttributes={ setAttributes }
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
					label={ __( 'Text Color', 'ultimate-addons-for-gutenberg' ) }
					colorValue={ buttonTextHoverColor ? buttonTextHoverColor : '' }
					data={ {
						value: buttonTextHoverColor,
						label: 'buttonTextHoverColor',
					} }
					setAttributes={ setAttributes }
				/>
				<AdvancedPopColorControl
					label={ __( 'Background Color', 'ultimate-addons-for-gutenberg' ) }
					colorValue={ buttonBgHoverColor }
					data={ {
						value: buttonBgHoverColor,
						label: 'buttonBgHoverColor',
					} }
					setAttributes={ setAttributes }
				/>
				{ 'none' !== buttonBorderStyle && (
					<>
						<AdvancedPopColorControl
							label={ __( 'Border Color', 'ultimate-addons-for-gutenberg' ) }
							colorValue={ buttonBorderHoverColor ? buttonBorderHoverColor : '' }
							data={ {
								value: buttonBorderHoverColor,
								label: 'buttonBorderHoverColor',
							} }
							setAttributes={ setAttributes }
						/>
					</>
				) }
			</>
		);
	};

	const btnSetting = () => {
		return (
			<UAGAdvancedPanelBody
				title={ __( 'Submit Button', 'ultimate-addons-for-gutenberg' ) }
				initialOpen={ false }
			>
				{ btnBorderSetting() }
				<TypographyControl
					label={ __( 'Typography', 'ultimate-addons-for-gutenberg' ) }
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
					fontStyle={ {
						value: buttonFontStyle,
						label: 'buttonFontStyle',
					} }
					transform={ {
						value: buttonTransform,
						label: 'buttonTransform',
					} }
					decoration={ {
						value: buttonDecoration,
						label: 'buttonDecoration',
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
					letterSpacing={ {
						value: buttonLetterSpacing,
						label: 'buttonLetterSpacing',
					} }
					letterSpacingTablet={ {
						value: buttonLetterSpacingTablet,
						label: 'buttonLetterSpacingTablet',
					} }
					letterSpacingMobile={ {
						value: buttonLetterSpacingMobile,
						label: 'buttonLetterSpacingMobile',
					} }
					letterSpacingType={ {
						value: buttonLetterSpacingType,
						label: 'buttonLetterSpacingType',
					} }
				/>
				<SpacingControl
					{ ...props }
					label={ __( 'Button Padding', 'ultimate-addons-for-gutenberg' ) }
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
				<UAGTabsControl
					tabs={ [
						{
							name: 'normal',
							title: __( 'Normal', 'ultimate-addons-for-gutenberg' ),
						},
						{
							name: 'hover',
							title: __( 'Hover', 'ultimate-addons-for-gutenberg' ),
						},
					] }
					normal={ buttonNormalSettings() }
					hover={ buttonHoverSettings() }
					disableBottomSeparator={ true }
				/>
			</UAGAdvancedPanelBody>
		);
	};

	const spacingSetting = () => {
		return (
			<UAGAdvancedPanelBody title={ __( 'Spacing', 'ultimate-addons-for-gutenberg' ) } initialOpen={ false }>
				<ResponsiveSlider
					label={ __( 'Label & Input Space', 'ultimate-addons-for-gutenberg' ) }
					data={ {
						desktop: {
							value: fieldLabelSpacing,
							label: 'fieldLabelSpacing',
						},
						tablet: {
							value: fieldLabelSpacingTablet,
							label: 'fieldLabelSpacingTablet',
						},
						mobile: {
							value: fieldLabelSpacingMobile,
							label: 'fieldLabelSpacingMobile',
						},
					} }
					min={ 0 }
					max={ 30 }
					displayUnit={ false }
					setAttributes={ setAttributes }
				/>
				<ResponsiveSlider
					label={ __( 'Fields Space', 'ultimate-addons-for-gutenberg' ) }
					data={ {
						desktop: {
							value: fieldSpacing,
							label: 'fieldSpacing',
						},
						tablet: {
							value: fieldSpacingTablet,
							label: 'fieldSpacingTablet',
						},
						mobile: {
							value: fieldSpacingMobile,
							label: 'fieldSpacingMobile',
						},
					} }
					min={ 0 }
					max={ 50 }
					displayUnit={ false }
					setAttributes={ setAttributes }
				/>
			</UAGAdvancedPanelBody>
		);
	};

	const radioCheckSetting = () => {
		return (
			<UAGAdvancedPanelBody
				title={ __( 'Radio & Checkbox', 'ultimate-addons-for-gutenberg' ) }
				initialOpen={ false }
			>
				<ToggleControl
					label={ __( 'Override Current Style', 'ultimate-addons-for-gutenberg' ) }
					checked={ enableOveride }
					onChange={ () => setAttributes( { enableOveride: ! enableOveride } ) }
				/>
				{ enableOveride && (
					<>
						<ResponsiveSlider
							label={ __( 'Size', 'ultimate-addons-for-gutenberg' ) }
							data={ {
								desktop: {
									value: radioCheckSize,
									label: 'radioCheckSize',
								},
								tablet: {
									value: radioCheckSizeTablet,
									label: 'radioCheckSizeTablet',
								},
								mobile: {
									value: radioCheckSizeMobile,
									label: 'radioCheckSizeMobile',
								},
							} }
							min={ 0 }
							max={ 50 }
							displayUnit={ false }
							setAttributes={ setAttributes }
						/>
						<h2>{ __( 'Radio & Checkbox Label', 'ultimate-addons-for-gutenberg' ) }</h2>
						<AdvancedPopColorControl
							label={ __( 'Label Color', 'ultimate-addons-for-gutenberg' ) }
							colorValue={ radioCheckLableColor }
							data={ {
								value: radioCheckLableColor,
								label: 'radioCheckLableColor',
							} }
							setAttributes={ setAttributes }
						/>
						<AdvancedPopColorControl
							label={ __( 'Background Color', 'ultimate-addons-for-gutenberg' ) }
							colorValue={ radioCheckBgColor }
							data={ {
								value: radioCheckBgColor,
								label: 'radioCheckBgColor',
							} }
							setAttributes={ setAttributes }
						/>
						<AdvancedPopColorControl
							label={ __( 'Selected Color', 'ultimate-addons-for-gutenberg' ) }
							colorValue={ radioCheckSelectColor }
							data={ {
								value: radioCheckSelectColor,
								label: 'radioCheckSelectColor',
							} }
							setAttributes={ setAttributes }
						/>
						<TypographyControl
							label={ __( 'Typography', 'ultimate-addons-for-gutenberg' ) }
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
							fontStyle={ {
								value: radioCheckFontStyle,
								label: 'radioCheckFontStyle',
							} }
							transform={ {
								value: radioCheckTransform,
								label: 'radioCheckTransform',
							} }
							decoration={ {
								value: radioCheckDecoration,
								label: 'radioCheckDecoration',
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
							letterSpacing={ {
								value: radioCheckLetterSpacing,
								label: 'radioCheckLetterSpacing',
							} }
							letterSpacingTablet={ {
								value: radioCheckLetterSpacingTablet,
								label: 'radioCheckLetterSpacingTablet',
							} }
							letterSpacingMobile={ {
								value: radioCheckLetterSpacingMobile,
								label: 'radioCheckLetterSpacingMobile',
							} }
							letterSpacingType={ {
								value: radioCheckLetterSpacingType,
								label: 'radioCheckLetterSpacingType',
							} }
						/>
						{ fieldBorderStyle !== 'none' && (
							<>
								<h2>{ __( 'Radio & Checkbox Border', 'ultimate-addons-for-gutenberg' ) }</h2>
								<ResponsiveSlider
									label={ __( 'Width', 'ultimate-addons-for-gutenberg' ) }
									data={ {
										desktop: {
											value: radioCheckBorderWidth,
											label: 'radioCheckBorderWidth',
										},
										tablet: {
											value: radioCheckBorderWidthTablet,
											label: 'radioCheckBorderWidthTablet',
										},
										mobile: {
											value: radioCheckBorderWidthMobile,
											label: 'radioCheckBorderWidthMobile',
										},
									} }
									min={ 0 }
									max={ 50 }
									unit={ {
										value: radioCheckBorderWidthType,
										label: 'radioCheckBorderWidthType',
									} }
									units={ [
										{
											name: __( 'Pixel', 'ultimate-addons-for-gutenberg' ),
											unitValue: 'px',
										},
									] }
									setAttributes={ setAttributes }
								/>
								<AdvancedPopColorControl
									label={ __( 'Color', 'ultimate-addons-for-gutenberg' ) }
									colorValue={ radioCheckBorderColor ? radioCheckBorderColor : '' }
									data={ {
										value: radioCheckBorderColor,
										label: 'radioCheckBorderColor',
									} }
									setAttributes={ setAttributes }
								/>
							</>
						) }
						<Range
							label={ __( 'Checkbox Rounded Corners', 'ultimate-addons-for-gutenberg' ) }
							setAttributes={ setAttributes }
							value={ radioCheckBorderRadius }
							data={ {
								value: radioCheckBorderRadius,
								label: 'radioCheckBorderRadius',
							} }
							min={ 0 }
							max={ 50 }
							unit={ {
								value: radioCheckBorderRadiusType,
								label: 'radioCheckBorderRadiusType',
							} }
							units={ [
								{
									name: __( 'Pixel', 'ultimate-addons-for-gutenberg' ),
									unitValue: 'px',
								},
								{
									name: __( '%', 'ultimate-addons-for-gutenberg' ),
									unitValue: '%',
								},
							] }
						/>
					</>
				) }
			</UAGAdvancedPanelBody>
		);
	};

	const msgSettings = () => {
		return (
			<UAGAdvancedPanelBody
				title={ __( 'Success/Error Message', 'ultimate-addons-for-gutenberg' ) }
				initialOpen={ false }
			>
				<p className="uagb-settings-notice">
					{ __( 'Note: This styling can be only seen on frontend', 'ultimate-addons-for-gutenberg' ) }
				</p>
				<h2>{ __( 'Field Validation', 'ultimate-addons-for-gutenberg' ) }</h2>
				<AdvancedPopColorControl
					label={ __( 'Message Color', 'ultimate-addons-for-gutenberg' ) }
					colorValue={ validationMsgColor ? validationMsgColor : '' }
					data={ {
						value: validationMsgColor,
						label: 'validationMsgColor',
					} }
					setAttributes={ setAttributes }
				/>
				<TypographyControl
					label={ __( 'Typography', 'ultimate-addons-for-gutenberg' ) }
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
					fontStyle={ {
						value: validationMsgFontStyle,
						label: 'validationMsgFontStyle',
					} }
					transform={ {
						value: validationMsgTransform,
						label: 'validationMsgTransform',
					} }
					decoration={ {
						value: validationMsgDecoration,
						label: 'validationMsgDecoration',
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
					letterSpacing={ {
						value: validationMsgLetterSpacing,
						label: 'validationMsgLetterSpacing',
					} }
					letterSpacingTablet={ {
						value: validationMsgLetterSpacingTablet,
						label: 'validationMsgLetterSpacingTablet',
					} }
					letterSpacingMobile={ {
						value: validationMsgLetterSpacingMobile,
						label: 'validationMsgLetterSpacingMobile',
					} }
					letterSpacingType={ {
						value: validationMsgLetterSpacingType,
						label: 'validationMsgLetterSpacingType',
					} }
				/>
				<SpacingControl
					{ ...props }
					label={ __( 'Padding', 'ultimate-addons-for-gutenberg' ) }
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
				<ToggleControl
					label={ __( 'Advanced Settings', 'ultimate-addons-for-gutenberg' ) }
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
							label={ __( 'Field Background Color', 'ultimate-addons-for-gutenberg' ) }
							colorValue={ validationMsgBgColor ? validationMsgBgColor : '' }
							data={ {
								value: validationMsgBgColor,
								label: 'validationMsgBgColor',
							} }
							setAttributes={ setAttributes }
						/>
					</>
				) }

				{ advancedValidationSettings && (
					<>
						<AdvancedPopColorControl
							label={ __( 'Highlight Border Color', 'ultimate-addons-for-gutenberg' ) }
							colorValue={ highlightBorderColor ? highlightBorderColor : '' }
							data={ {
								value: highlightBorderColor,
								label: 'highlightBorderColor',
							} }
							setAttributes={ setAttributes }
						/>
					</>
				) }
				<h2>{ __( 'Error Message Validation', 'ultimate-addons-for-gutenberg' ) }</h2>
				<AdvancedPopColorControl
					label={ __( 'Color', 'ultimate-addons-for-gutenberg' ) }
					colorValue={ errorMsgColor ? errorMsgColor : '' }
					data={ {
						value: errorMsgColor,
						label: 'errorMsgColor',
					} }
					setAttributes={ setAttributes }
				/>
				<AdvancedPopColorControl
					label={ __( 'Background Color', 'ultimate-addons-for-gutenberg' ) }
					colorValue={ errorMsgBgColor ? errorMsgBgColor : '' }
					data={ {
						value: errorMsgBgColor,
						label: 'errorMsgBgColor',
					} }
					setAttributes={ setAttributes }
				/>
				<AdvancedPopColorControl
					label={ __( 'Border Color', 'ultimate-addons-for-gutenberg' ) }
					colorValue={ errorMsgBorderColor ? errorMsgBorderColor : '' }
					data={ {
						value: errorMsgBorderColor,
						label: 'errorMsgBorderColor',
					} }
					setAttributes={ setAttributes }
				/>
				<Range
					label={ __( 'Border Width', 'ultimate-addons-for-gutenberg' ) }
					setAttributes={ setAttributes }
					value={ msgBorderSize }
					data={ {
						value: msgBorderSize,
						label: 'msgBorderSize',
					} }
					min={ 0 }
					max={ 50 }
					unit={ {
						value: msgBorderSizeType,
						label: 'msgBorderSizeType',
					} }
					units={ [
						{
							name: __( 'Pixel', 'ultimate-addons-for-gutenberg' ),
							unitValue: 'px',
						},
					] }
				/>
				<Range
					label={ __( 'Border Radius', 'ultimate-addons-for-gutenberg' ) }
					setAttributes={ setAttributes }
					value={ msgBorderRadius }
					data={ {
						value: msgBorderRadius,
						label: 'msgBorderRadius',
					} }
					min={ 0 }
					max={ 50 }
					unit={ {
						value: msgBorderRadiusType,
						label: 'msgBorderRadiusType',
					} }
					units={ [
						{
							name: __( 'Pixel', 'ultimate-addons-for-gutenberg' ),
							unitValue: 'px',
						},
						{
							name: __( '%', 'ultimate-addons-for-gutenberg' ),
							unitValue: '%',
						},
					] }
				/>
				<TypographyControl
					label={ __( 'Typography', 'ultimate-addons-for-gutenberg' ) }
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
					fontStyle={ {
						value: msgFontStyle,
						label: 'msgFontStyle',
					} }
					transform={ {
						value: msgTransform,
						label: 'msgTransform',
					} }
					decoration={ {
						value: msgDecoration,
						label: 'msgDecoration',
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
					letterSpacing={ {
						value: msgLetterSpacing,
						label: 'msgLetterSpacing',
					} }
					letterSpacingTablet={ {
						value: msgLetterSpacingTablet,
						label: 'msgLetterSpacingTablet',
					} }
					letterSpacingMobile={ {
						value: msgLetterSpacingMobile,
						label: 'msgLetterSpacingMobile',
					} }
					letterSpacingType={ {
						value: msgLetterSpacingType,
						label: 'msgLetterSpacingType',
					} }
				/>
				<h2>{ __( 'Success Message Validation', 'ultimate-addons-for-gutenberg' ) }</h2>
				<AdvancedPopColorControl
					label={ __( 'Color', 'ultimate-addons-for-gutenberg' ) }
					colorValue={ successMsgColor ? successMsgColor : '' }
					data={ {
						value: successMsgColor,
						label: 'successMsgColor',
					} }
					setAttributes={ setAttributes }
				/>
				<TypographyControl
					label={ __( 'Typography', 'ultimate-addons-for-gutenberg' ) }
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
					fontStyle={ {
						value: successMsgFontStyle,
						label: 'successMsgFontStyle',
					} }
					transform={ {
						value: successMsgTransform,
						label: 'successMsgTransform',
					} }
					decoration={ {
						value: successMsgDecoration,
						label: 'successMsgDecoration',
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
					letterSpacing={ {
						value: successMsgLetterSpacing,
						label: 'successMsgLetterSpacing',
					} }
					letterSpacingTablet={ {
						value: successMsgLetterSpacingTablet,
						label: 'successMsgLetterSpacingTablet',
					} }
					letterSpacingMobile={ {
						value: successMsgLetterSpacingMobile,
						label: 'successMsgLetterSpacingMobile',
					} }
					letterSpacingType={ {
						value: successMsgLetterSpacingType,
						label: 'successMsgLetterSpacingType',
					} }
				/>
			</UAGAdvancedPanelBody>
		);
	};

	const blockControls = () => {
		return (
			<BlockControls key="controls">
				<AlignmentToolbar value={ align } onChange={ ( value ) => setAttributes( { align: value } ) } />
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
		<>
			{ blockControls() }
			<InspectorControls>
				<InspectorTabs>
					<InspectorTab { ...UAGTabs.general }>{ fieldSettings() }</InspectorTab>
					<InspectorTab { ...UAGTabs.style }>
						{ fieldBorderSetting() }
						{ labelSettings() }
						{ inputSettings() }
						{ radioCheckSetting() }
						{ btnSetting() }
						{ msgSettings() }
						{ spacingSetting() }
					</InspectorTab>
					<InspectorTab { ...UAGTabs.advance } parentProps={ props }></InspectorTab>
				</InspectorTabs>
			</InspectorControls>
		</>
	);
};
export default memo( Settings );
