import React, { Suspense } from 'react';
import { __ } from '@wordpress/i18n';
import lazyLoader from '@Controls/lazy-loader';
import WebfontLoader from '@Components/typography/fontloader';
import TypographyControl from '@Components/typography';
import Border from '@Components/border';
import AdvancedPopColorControl from '@Components/color-control/advanced-pop-color-control.js';
import InspectorTabs from '@Components/inspector-tabs/InspectorTabs.js';
import InspectorTab, {
	UAGTabs,
} from '@Components/inspector-tabs/InspectorTab.js';
import SpacingControl from '@Components/spacing-control';
import Range from '@Components/range/Range.js';
import MultiButtonsControl from '@Components/multi-buttons-control';
import UAGTabsControl from '@Components/tabs';
import renderSVG from '@Controls/renderIcon';
import ResponsiveSlider from '@Components/responsive-slider';
import {
	AlignmentToolbar,
	BlockControls,
	InspectorControls,
} from '@wordpress/block-editor';

import {
	SelectControl,
	ToggleControl,
	Icon,
} from '@wordpress/components';



import UAGAdvancedPanelBody from '@Components/advanced-panel-body';

const Settings = ( props ) => {
	props = props.parentProps;

	const { setAttributes, attributes } = props;

	const {
		formId,
		align,
		fieldStyle,
		fieldBgColor,
		fieldLabelColor,
		fieldInputColor,
		fieldBorderStyle,
		fieldBorderWidth,
		fieldBorderRadius,
		fieldBorderColor,
		fieldBorderFocusColor,
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
		fieldSpacingTablet,
		fieldSpacingMobile,
		fieldLabelSpacing,
		fieldLabelSpacingTablet,
		fieldLabelSpacingMobile,
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
		radioCheckBorderWidthUnit,
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
		msgBorderSizeUnit,
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
		messageTopPaddingDesktop,
		messageRightPaddingDesktop,
		messageBottomPaddingDesktop,
		messageLeftPaddingDesktop,
		messageTopPaddingTablet,
		messageRightPaddingTablet,
		messageBottomPaddingTablet,
		messageLeftPaddingTablet,
		messageTopPaddingMobile,
		messageRightPaddingMobile,
		messageBottomPaddingMobile,
		messageLeftPaddingMobile,
		messagePaddingTypeDesktop,
		messagePaddingTypeTablet,
		messagePaddingTypeMobile,
		messageSpacingLink,
		buttonTopPaddingDesktop,
		buttonRightPaddingDesktop,
		buttonBottomPaddingDesktop,
		buttonLeftPaddingDesktop,
		buttonTopPaddingTablet,
		buttonRightPaddingTablet,
		buttonBottomPaddingTablet,
		buttonLeftPaddingTablet,
		buttonTopPaddingMobile,
		buttonRightPaddingMobile,
		buttonBottomPaddingMobile,
		buttonLeftPaddingMobile,
		buttonPaddingTypeDesktop,
		buttonPaddingTypeTablet,
		buttonPaddingTypeMobile,
		buttonSpacingLink,
		fieldTopPaddingDesktop,
		fieldRightPaddingDesktop,
		fieldBottomPaddingDesktop,
		fieldLeftPaddingDesktop,
		fieldTopPaddingTablet,
		fieldRightPaddingTablet,
		fieldBottomPaddingTablet,
		fieldLeftPaddingTablet,
		fieldTopPaddingMobile,
		fieldRightPaddingMobile,
		fieldBottomPaddingMobile,
		fieldLeftPaddingMobile,
		fieldPaddingTypeDesktop,
		fieldPaddingTypeMobile,
		fieldPaddingTypeTablet,
		fieldSpacingLink,
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
	const buttonNormalSettings = (
		<>
			<AdvancedPopColorControl
				label={ __( 'Text Color', 'ultimate-addons-for-gutenberg' ) }
				colorValue={ buttonTextColor }
				onColorChange={ ( value ) =>
					setAttributes( {
						buttonTextColor: value,
					} )
				}
			/>
			<AdvancedPopColorControl
				label={ __(
					'Background Color',
					'ultimate-addons-for-gutenberg'
				) }
				colorValue={ buttonBgColor }
				onColorChange={ ( value ) =>
					setAttributes( {
						buttonBgColor: value,
					} )
				}
			/>
		</>
	);

	const buttonHoverSettings = (
		<>
			<AdvancedPopColorControl
				label={ __( 'Text Color', 'ultimate-addons-for-gutenberg' ) }
				colorValue={ buttonTextHoverColor }
				onColorChange={ ( value ) =>
					setAttributes( {
						buttonTextHoverColor: value,
					} )
				}
			/>
			<AdvancedPopColorControl
				label={ __(
					'Background Color',
					'ultimate-addons-for-gutenberg'
				) }
				colorValue={ buttonBgHoverColor }
				onColorChange={ ( value ) =>
					setAttributes( {
						buttonBgHoverColor: value,
					} )
				}
			/>
		</>
	);

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

	const generalSettings = (
		<UAGAdvancedPanelBody title={ __( 'General', 'ultimate-addons-for-gutenberg' ) }>
			<SelectControl
				label={ __( 'Select Form', 'ultimate-addons-for-gutenberg' ) }
				value={ formId }
				onChange={ onSelectForm }
				options={ uagb_blocks_info.cf7_forms }
			/>
			<MultiButtonsControl
				setAttributes={ setAttributes }
				label={ __(
					'Text Alignment',
					'ultimate-addons-for-gutenberg'
				) }
				data={ {
					value: align,
					label: 'align',
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
		</UAGAdvancedPanelBody>
	);

	const fieldSetting = (
		<UAGAdvancedPanelBody
			title={ __( 'Field', 'ultimate-addons-for-gutenberg' ) }
			initialOpen={ false }
		>
			<MultiButtonsControl
				setAttributes={ setAttributes }
				label={ __( 'Style', 'ultimate-addons-for-gutenberg' ) }
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
		</UAGAdvancedPanelBody>
	);

	const radioCheckSetting = (
		<UAGAdvancedPanelBody
			title={ __( 'Radio & Checkbox', 'ultimate-addons-for-gutenberg' ) }
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
		</UAGAdvancedPanelBody>
	);

	const msgSettings = (
		<UAGAdvancedPanelBody
			title={ __(
				'Success/Error Message',
				'ultimate-addons-for-gutenberg'
			) }
			initialOpen={ false }
		>
			<p className="uagb-settings-notice">
				{ __(
					'Note: This styling can be only seen at frontend',
					'ultimate-addons-for-gutenberg'
				) }
			</p>
			<MultiButtonsControl
				setAttributes={ setAttributes }
				label={ __(
					'Validation Message Position',
					'ultimate-addons-for-gutenberg'
				) }
				data={ {
					value: validationMsgPosition,
					label: 'validationMsgPosition',
				} }
				options={ [
					{
						value: 'default',
						label: __( 'Default', 'ultimate-addons-for-gutenberg' ),
					},
					{
						value: 'bottom_right',
						label: __(
							'Bottom Right Side of Field',
							'ultimate-addons-for-gutenberg'
						),
					},
				] }
			/>
			<ToggleControl
				label={ __(
					'Highlight Borders',
					'ultimate-addons-for-gutenberg'
				) }
				checked={ enableHighlightBorder }
				onChange={ () =>
					setAttributes( {
						enableHighlightBorder: ! enableHighlightBorder,
					} )
				}
			/>
		</UAGAdvancedPanelBody>
	);
	const btnSetting = (
		<UAGAdvancedPanelBody
			title={ __( 'Submit', 'ultimate-addons-for-gutenberg' ) }
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
						icon: <Icon icon={ renderSVG( 'fa fa-align-left' ) } />,
						tooltip: __( 'Left', 'ultimate-addons-for-gutenberg' ),
					},
					{
						value: 'center',
						icon: (
							<Icon icon={ renderSVG( 'fa fa-align-center' ) } />
						),
						tooltip: __(
							'Center',
							'ultimate-addons-for-gutenberg'
						),
					},
					{
						value: 'right',
						icon: (
							<Icon icon={ renderSVG( 'fa fa-align-right' ) } />
						),
						tooltip: __( 'Right', 'ultimate-addons-for-gutenberg' ),
					},
					{
						value: 'justify',
						icon: (
							<Icon icon={ renderSVG( 'fa fa-align-justify' ) } />
						),
						tooltip: __(
							'Justified',
							'ultimate-addons-for-gutenberg'
						),
					},
				] }
				showIcons={ true }
			/>
		</UAGAdvancedPanelBody>
	);

	const labelInputStyling = (
		<UAGAdvancedPanelBody
			title={ __( 'Label & Input', 'ultimate-addons-for-gutenberg' ) }
			initialOpen={ false }
		>
			<AdvancedPopColorControl
				label={ __( 'Label Color', 'ultimate-addons-for-gutenberg' ) }
				colorValue={ fieldLabelColor }
				onColorChange={ ( value ) =>
					setAttributes( { fieldLabelColor: value } )
				}
			/>
			<TypographyControl
				label={ __(
					'Label Typography',
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
				fontSize={ { value: labelFontSize, label: 'labelFontSize' } }
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
			<AdvancedPopColorControl
				label={ __( 'Input Color', 'ultimate-addons-for-gutenberg' ) }
				colorValue={ fieldInputColor }
				onColorChange={ ( value ) =>
					setAttributes( { fieldInputColor: value } )
				}
			/>
			<TypographyControl
				label={ __(
					'Input Typography',
					'ultimate-addons-for-gutenberg'
				) }
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
				fontSize={ { value: inputFontSize, label: 'inputFontSize' } }
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
			<AdvancedPopColorControl
				label={ __(
					'Background Color',
					'ultimate-addons-for-gutenberg'
				) }
				colorValue={ fieldBgColor }
				onColorChange={ ( value ) =>
					setAttributes( { fieldBgColor: value } )
				}
			/>
			<ResponsiveSlider
				label={ __(
					'Spacing',
					'ultimate-addons-for-gutenberg'
				) }
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
		</UAGAdvancedPanelBody>
	);

	const fieldStyling = (
		<UAGAdvancedPanelBody
			title={ __( 'Field', 'ultimate-addons-for-gutenberg' ) }
			initialOpen={ true }
		>
			<Border
				disabledBorderTitle= {false}
				setAttributes={ setAttributes }
				borderStyle={ {
					value: fieldBorderStyle,
					label: 'fieldBorderStyle',
					title: __( 'Style', 'ultimate-addons-for-gutenberg' ),
				} }
				borderWidth={ {
					value: fieldBorderWidth,
					label: 'fieldBorderWidth',
					title: __( 'Width', 'ultimate-addons-for-gutenberg' ),
				} }
				borderRadius={ {
					value: fieldBorderRadius,
					label: 'fieldBorderRadius',
					title: __( 'Radius', 'ultimate-addons-for-gutenberg' ),
					displayUnit: true,
					unit: {
						value: fieldBorderRadiusType,
						label: 'fieldBorderRadiusType',
					},
				} }
				borderColor={ {
					value: fieldBorderColor,
					label: 'fieldBorderColor',
					title: __( 'Color', 'ultimate-addons-for-gutenberg' ),
				} }
				borderHoverColor={ {
					value: fieldBorderFocusColor,
					label: 'fieldBorderFocusColor',
					title: __( 'Focus Color', 'ultimate-addons-for-gutenberg' ),
				} }
				disableBottomSeparator={ true }
			/>
			<ResponsiveSlider
				label={ __(
					'Fields Space',
					'ultimate-addons-for-gutenberg'
				) }
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
			<SpacingControl
				{ ...props }
				label={ __( 'Padding', 'ultimate-addons-for-gutenberg' ) }
				valueTop={ {
					value: fieldTopPaddingDesktop,
					label: 'fieldTopPaddingDesktop',
				} }
				valueRight={ {
					value: fieldRightPaddingDesktop,
					label: 'fieldRightPaddingDesktop',
				} }
				valueBottom={ {
					value: fieldBottomPaddingDesktop,
					label: 'fieldBottomPaddingDesktop',
				} }
				valueLeft={ {
					value: fieldLeftPaddingDesktop,
					label: 'fieldLeftPaddingDesktop',
				} }
				valueTopTablet={ {
					value: fieldTopPaddingTablet,
					label: 'fieldTopPaddingTablet',
				} }
				valueRightTablet={ {
					value: fieldRightPaddingTablet,
					label: 'fieldRightPaddingTablet',
				} }
				valueBottomTablet={ {
					value: fieldBottomPaddingTablet,
					label: 'fieldBottomPaddingTablet',
				} }
				valueLeftTablet={ {
					value: fieldLeftPaddingTablet,
					label: 'fieldLeftPaddingTablet',
				} }
				valueTopMobile={ {
					value: fieldTopPaddingMobile,
					label: 'fieldTopPaddingMobile',
				} }
				valueRightMobile={ {
					value: fieldRightPaddingMobile,
					label: 'fieldRightPaddingMobile',
				} }
				valueBottomMobile={ {
					value: fieldBottomPaddingMobile,
					label: 'fieldBottomPaddingMobile',
				} }
				valueLeftMobile={ {
					value: fieldLeftPaddingMobile,
					label: 'fieldLeftPaddingMobile',
				} }
				unit={ {
					value: fieldPaddingTypeDesktop,
					label: 'fieldPaddingTypeDesktop',
				} }
				mUnit={ {
					value: fieldPaddingTypeMobile,
					label: 'fieldPaddingTypeMobile',
				} }
				tUnit={ {
					value: fieldPaddingTypeTablet,
					label: 'fieldPaddingTypeTablet',
				} }
				attributes={ attributes }
				setAttributes={ setAttributes }
				link={ {
					value: fieldSpacingLink,
					label: 'fieldSpacingLink',
				} }
			/>
		</UAGAdvancedPanelBody>
	);
	const radioCheckStyling = (
		<UAGAdvancedPanelBody
			title={ __( 'Radio & Checkbox', 'ultimate-addons-for-gutenberg' ) }
			initialOpen={ false }
		>
			<ResponsiveSlider
				label={ __(
					'Size',
					'ultimate-addons-for-gutenberg'
				) }
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
			<AdvancedPopColorControl
				label={ __( 'Label Color', 'ultimate-addons-for-gutenberg' ) }
				colorValue={ radioCheckLableColor }
				onColorChange={ ( value ) =>
					setAttributes( { radioCheckLableColor: value } )
				}
			/>
			<TypographyControl
				label={ __(
					'Label Typography',
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
					setAttributes( { radioCheckSelectColor: value } )
				}
			/>
			{ fieldBorderStyle !== 'none' && (
				<>
					<ResponsiveSlider
						label={ __(
							'Border Width',
							'ultimate-addons-for-gutenberg'
						) }
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
							value: radioCheckBorderWidthUnit,
							label:
								'radioCheckBorderWidthUnit',
						} }
						units={ [
							{
								name: __(
									'Pixel',
									'ultimate-addons-for-gutenberg'
								),
								unitValue: 'px',
							},
						] }
						setAttributes={ setAttributes }
					/>
					<AdvancedPopColorControl
						label={ __( 'Color', 'ultimate-addons-for-gutenberg' ) }
						colorValue={ radioCheckBorderColor }
						onColorChange={ ( value ) =>
							setAttributes( {
								radioCheckBorderColor: value,
							} )
						}
					/>
				</>
			) }
			<Range
				label={ __(
					'Border Radius',
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
		</UAGAdvancedPanelBody>
	);
	const buttonStyling = (
		<UAGAdvancedPanelBody
			title={ __( 'Submit', 'ultimate-addons-for-gutenberg' ) }
			initialOpen={ false }
		>
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
				normal={ buttonNormalSettings }
				hover={ buttonHoverSettings }
				disableBottomSeparator={ true }
			/>
			<Border
				disabledBorderTitle= {false}
				setAttributes={ setAttributes }
				borderStyle={ {
					value: buttonBorderStyle,
					label: 'buttonBorderStyle',
					title: __(
						'Style',
						'ultimate-addons-for-gutenberg'
					),
				} }
				borderWidth={ {
					value: buttonBorderWidth,
					label: 'buttonBorderWidth',
					title: __( 'Width', 'ultimate-addons-for-gutenberg' ),
				} }
				borderRadius={ {
					value: buttonBorderRadius,
					label: 'buttonBorderRadius',
					title: __( 'Radius', 'ultimate-addons-for-gutenberg' ),
					displayUnit: true,
					unit: {
						value: buttonBorderRadiusType,
						label: 'buttonBorderRadiusType',
					},
				} }
				borderColor={ {
					value: buttonBorderColor,
					label: 'buttonBorderColor',
					title: __(
						'Border Color',
						'ultimate-addons-for-gutenberg'
					),
				} }
				borderHoverColor={ {
					value: buttonBorderHoverColor,
					label: 'buttonBorderHoverColor',
					title: __(
						'Border Color',
						'ultimate-addons-for-gutenberg'
					),
				} }
			/>
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
				fontSize={ { value: buttonFontSize, label: 'buttonFontSize' } }
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
			<SpacingControl
				{ ...props }
				label={ __( 'Padding', 'ultimate-addons-for-gutenberg' ) }
				valueTop={ {
					value: buttonTopPaddingDesktop,
					label: 'buttonTopPaddingDesktop',
				} }
				valueRight={ {
					value: buttonRightPaddingDesktop,
					label: 'buttonRightPaddingDesktop',
				} }
				valueBottom={ {
					value: buttonBottomPaddingDesktop,
					label: 'buttonBottomPaddingDesktop',
				} }
				valueLeft={ {
					value: buttonLeftPaddingDesktop,
					label: 'buttonLeftPaddingDesktop',
				} }
				valueTopTablet={ {
					value: buttonTopPaddingTablet,
					label: 'buttonTopPaddingTablet',
				} }
				valueRightTablet={ {
					value: buttonRightPaddingTablet,
					label: 'buttonRightPaddingTablet',
				} }
				valueBottomTablet={ {
					value: buttonBottomPaddingTablet,
					label: 'buttonBottomPaddingTablet',
				} }
				valueLeftTablet={ {
					value: buttonLeftPaddingTablet,
					label: 'buttonLeftPaddingTablet',
				} }
				valueTopMobile={ {
					value: buttonTopPaddingMobile,
					label: 'buttonTopPaddingMobile',
				} }
				valueRightMobile={ {
					value: buttonRightPaddingMobile,
					label: 'buttonRightPaddingMobile',
				} }
				valueBottomMobile={ {
					value: buttonBottomPaddingMobile,
					label: 'buttonBottomPaddingMobile',
				} }
				valueLeftMobile={ {
					value: buttonLeftPaddingMobile,
					label: 'buttonLeftPaddingMobile',
				} }
				unit={ {
					value: buttonPaddingTypeDesktop,
					label: 'buttonPaddingTypeDesktop',
				} }
				mUnit={ {
					value: buttonPaddingTypeMobile,
					label: 'buttonPaddingTypeMobile',
				} }
				tUnit={ {
					value: buttonPaddingTypeTablet,
					label: 'buttonPaddingTypeTablet',
				} }
				attributes={ attributes }
				setAttributes={ setAttributes }
				link={ {
					value: buttonSpacingLink,
					label: 'buttonSpacingLink',
				} }
			/>
		</UAGAdvancedPanelBody>
	);

	const messageStyling = (
		<UAGAdvancedPanelBody
			title={ __(
				'Success/Error Message',
				'ultimate-addons-for-gutenberg'
			) }
			initialOpen={ false }
		>
			<p className="uagb-settings-notice">
				{ __(
					'Note: This styling can be only seen at frontend',
					'ultimate-addons-for-gutenberg'
				) }
			</p>
			<AdvancedPopColorControl
				label={ __(
					'Validation Message Color',
					'ultimate-addons-for-gutenberg'
				) }
				colorValue={ validationMsgColor }
				onColorChange={ ( value ) =>
					setAttributes( {
						validationMsgColor: value,
					} )
				}
			/>
			<TypographyControl
				label={ __(
					'Validation Typography',
					'ultimate-addons-for-gutenberg'
				) }
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
			/>
			{ validationMsgPosition === 'bottom_right' && (
				<>
					<AdvancedPopColorControl
						label={ __(
							'Message Background Color',
							'ultimate-addons-for-gutenberg'
						) }
						colorValue={ validationMsgBgColor }
						onColorChange={ ( value ) =>
							setAttributes( {
								validationMsgBgColor: value,
							} )
						}
					/>
				</>
			) }

			{ enableHighlightBorder && (
				<>
					<AdvancedPopColorControl
						label={ __(
							'Highlight Border Color',
							'ultimate-addons-for-gutenberg'
						) }
						colorValue={ highlightBorderColor }
						onColorChange={ ( value ) =>
							setAttributes( {
								highlightBorderColor: value,
							} )
						}
					/>
				</>
			) }
			<hr className="uagb-editor__separator" />
			<h2>
				{ __(
					'Success/Error Message',
					'ultimate-addons-for-gutenberg'
				) }
			</h2>
			<TypographyControl
				label={ __( 'Typography', 'ultimate-addons-for-gutenberg' ) }
				attributes={ attributes }
				setAttributes={ setAttributes }
				loadGoogleFonts={ {
					value: msgLoadGoogleFonts,
					label: 'msgLoadGoogleFonts',
				} }
				fontFamily={ { value: msgFontFamily, label: 'msgFontFamily' } }
				fontWeight={ { value: msgFontWeight, label: 'msgFontWeight' } }
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
				lineHeight={ { value: msgLineHeight, label: 'msgLineHeight' } }
				lineHeightMobile={ {
					value: msgLineHeightMobile,
					label: 'msgLineHeightMobile',
				} }
				lineHeightTablet={ {
					value: msgLineHeightTablet,
					label: 'msgLineHeightTablet',
				} }
			/>
			<hr className="uagb-editor__separator" />
			<h2>
				{ __( 'Success Message', 'ultimate-addons-for-gutenberg' ) }
			</h2>
			<AdvancedPopColorControl
				label={ __( 'Color', 'ultimate-addons-for-gutenberg' ) }
				colorValue={ successMsgColor }
				onColorChange={ ( value ) =>
					setAttributes( {
						successMsgColor: value,
					} )
				}
			/>
			<AdvancedPopColorControl
				label={ __(
					'Background Color',
					'ultimate-addons-for-gutenberg'
				) }
				colorValue={ successMsgBgColor }
				onColorChange={ ( value ) =>
					setAttributes( {
						successMsgBgColor: value,
					} )
				}
			/>
			<AdvancedPopColorControl
				label={ __( 'Border Color', 'ultimate-addons-for-gutenberg' ) }
				colorValue={ successMsgBorderColor }
				onColorChange={ ( value ) =>
					setAttributes( {
						successMsgBorderColor: value,
					} )
				}
			/>
			<hr className="uagb-editor__separator" />
			<h2>{ __( 'Error Message', 'ultimate-addons-for-gutenberg' ) }</h2>
			<AdvancedPopColorControl
				label={ __( 'Color', 'ultimate-addons-for-gutenberg' ) }
				colorValue={ errorMsgColor }
				onColorChange={ ( value ) =>
					setAttributes( {
						errorMsgColor: value,
					} )
				}
			/>
			<AdvancedPopColorControl
				label={ __(
					'Background Color',
					'ultimate-addons-for-gutenberg'
				) }
				colorValue={ errorMsgBgColor }
				onColorChange={ ( value ) =>
					setAttributes( {
						errorMsgBgColor: value,
					} )
				}
			/>
			<AdvancedPopColorControl
				label={ __( 'Border Color', 'ultimate-addons-for-gutenberg' ) }
				colorValue={ errorMsgBorderColor }
				onColorChange={ ( value ) =>
					setAttributes( {
						errorMsgBorderColor: value,
					} )
				}
			/>
			<Range
				label={ __(
					'Border Width',
					'ultimate-addons-for-gutenberg'
				) }
				setAttributes={ setAttributes }
				value={ msgBorderSize }
				onChange={ ( value ) =>
					setAttributes( {
						msgBorderSize: value,
					} )
				}
				min={ 0 }
				max={ 50 }
				unit={ {
					value: msgBorderSizeUnit,
					label:
						'msgBorderSizeUnit',
				} }
				units={ [
					{
						name: __(
							'Pixel',
							'ultimate-addons-for-gutenberg'
						),
						unitValue: 'px',
					},
				] }
			/>
			<Range
				label={ __( 'Border Radius', 'ultimate-addons-for-gutenberg' ) }
				setAttributes={ setAttributes }
				value={ msgBorderRadius }
				onChange={ ( value ) =>
					setAttributes( {
						msgBorderRadius: value,
					} )
				}
				min={ 0 }
				max={ 100 }
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
			<SpacingControl
				{ ...props }
				label={ __( 'Padding', 'ultimate-addons-for-gutenberg' ) }
				valueTop={ {
					value: messageTopPaddingDesktop,
					label: 'messageTopPaddingDesktop',
				} }
				valueRight={ {
					value: messageRightPaddingDesktop,
					label: 'messageRightPaddingDesktop',
				} }
				valueBottom={ {
					value: messageBottomPaddingDesktop,
					label: 'messageBottomPaddingDesktop',
				} }
				valueLeft={ {
					value: messageLeftPaddingDesktop,
					label: 'messageLeftPaddingDesktop',
				} }
				valueTopTablet={ {
					value: messageTopPaddingTablet,
					label: 'messageTopPaddingTablet',
				} }
				valueRightTablet={ {
					value: messageRightPaddingTablet,
					label: 'messageRightPaddingTablet',
				} }
				valueBottomTablet={ {
					value: messageBottomPaddingTablet,
					label: 'messageBottomPaddingTablet',
				} }
				valueLeftTablet={ {
					value: messageLeftPaddingTablet,
					label: 'messageLeftPaddingTablet',
				} }
				valueTopMobile={ {
					value: messageTopPaddingMobile,
					label: 'messageTopPaddingMobile',
				} }
				valueRightMobile={ {
					value: messageRightPaddingMobile,
					label: 'messageRightPaddingMobile',
				} }
				valueBottomMobile={ {
					value: messageBottomPaddingMobile,
					label: 'messageBottomPaddingMobile',
				} }
				valueLeftMobile={ {
					value: messageLeftPaddingMobile,
					label: 'messageLeftPaddingMobile',
				} }
				unit={ {
					value: messagePaddingTypeDesktop,
					label: 'messagePaddingTypeDesktop',
				} }
				mUnit={ {
					value: messagePaddingTypeMobile,
					label: 'messagePaddingTypeMobile',
				} }
				tUnit={ {
					value: messagePaddingTypeTablet,
					label: 'messagePaddingTypeTablet',
				} }
				attributes={ attributes }
				setAttributes={ setAttributes }
				link={ {
					value: messageSpacingLink,
					label: 'messageSpacingLink',
				} }
			/>
		</UAGAdvancedPanelBody>
	);
	return (
		<Suspense fallback={ lazyLoader() }>
			<BlockControls key="controls">
				<AlignmentToolbar
					value={ align }
					onChange={ ( value ) => setAttributes( { align: value } ) }
				/>
			</BlockControls>
			<InspectorControls>
				<InspectorTabs>
					<InspectorTab { ...UAGTabs.general }>
						{ generalSettings }
						{ fieldSetting }
						{ radioCheckSetting }
						{ btnSetting }
						{ msgSettings }
					</InspectorTab>
					<InspectorTab { ...UAGTabs.style }>
						{ fieldStyle === 'box' && fieldStyling }
						{ enableOveride && radioCheckStyling }
						{ buttonStyling }
						{ messageStyling }
						{ labelInputStyling }
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
