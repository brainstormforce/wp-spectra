import { __ } from '@wordpress/i18n';
import TypographyControl from '@Components/typography';
import BoxShadowControl from '@Components/box-shadow';
import MultiButtonsControl from '@Components/multi-buttons-control';
import SpacingControl from '@Components/spacing-control';
import Range from '@Components/range/Range.js';
import UAGTabsControl from '@Components/tabs';
import InspectorTabs from '@Components/inspector-tabs/InspectorTabs.js';
import InspectorTab, { UAGTabs } from '@Components/inspector-tabs/InspectorTab.js';
import AdvancedPopColorControl from '@Components/color-control/advanced-pop-color-control.js';
import ResponsiveBorder from '@Components/responsive-border';
import { InspectorControls } from '@wordpress/block-editor';

import UAGAdvancedPanelBody from '@Components/advanced-panel-body';
import UAGTextControl from '@Components/text-control';
import { memo } from '@wordpress/element';

const Settings = ( props ) => {
	props = props.parentProps;

	const { attributes, setAttributes, deviceType } = props;

	const {
		block_id,
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
		// borderWidth,
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
		inputFontSize,
		inputFontSizeType,
		inputFontSizeTablet,
		inputFontSizeMobile,
		inputLineHeight,
		inputLineHeightType,
		inputLineHeightTablet,
		inputLineHeightMobile,
		inputPaddingTypeDesktop,
		buttonType,
		buttonText,
		buttonloadGoogleFonts,
		buttonFontFamily,
		buttonFontWeight,
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
		mobilePaddingInputUnit,
		tabletPaddingInputUnit,
		spacingLink,
		iconSizeType,
		inputTransform,
		inputDecoration,
		inputFontStyle,
		buttonFontStyle,
	} = attributes;

	const generalSettings = () => {
		return (
			<UAGAdvancedPanelBody initialOpen={ true }>
				<MultiButtonsControl
					setAttributes={ setAttributes }
					label={ __( 'Layout', 'ultimate-addons-for-gutenberg' ) }
					data={ {
						value: layout,
						label: 'layout',
					} }
					className="uagb-multi-button-alignment-control"
					options={ [
						{
							value: 'input-button',
							label: 'Classic',
						},
						{
							value: 'input',
							label: 'Minimal',
						},
					] }
					showIcons={ false }
				/>
				<UAGTextControl
					label={ __( 'Placeholder', 'ultimate-addons-for-gutenberg' ) }
					value={ placeholder }
					data={ {
						value: placeholder,
						label: 'placeholder',
					} }
					setAttributes={ setAttributes }
					onChange={ ( value ) =>
						setAttributes( {
							placeholder: value,
						} )
					}
				/>
				<Range
					label={ __( 'Input Width', 'ultimate-addons-for-gutenberg' ) }
					setAttributes={ setAttributes }
					value={ inputSize }
					data={ {
						value: inputSize,
						label: 'inputSize',
					} }
					min={ 0 }
					max={ 200 }
					units={ [
						{
							name: __( 'Pixel', 'ultimate-addons-for-gutenberg' ),
							unitValue: 'px',
						},
						{
							name: __( 'Em', 'ultimate-addons-for-gutenberg' ),
							unitValue: 'em',
						},
						{
							name: __( '%', 'ultimate-addons-for-gutenberg' ),
							unitValue: '%',
						},
					] }
					unit={ {
						value: inputSizeType,
						label: 'inputSizeType',
					} }
				/>
				{ layout === 'input-button' && (
					<MultiButtonsControl
						setAttributes={ setAttributes }
						label={ __( 'Button Type', 'ultimate-addons-for-gutenberg' ) }
						data={ {
							value: buttonType,
							label: 'buttonType',
						} }
						className="uagb-multi-button-alignment-control"
						options={ [
							{
								value: 'icon',
								label: 'Icon',
							},
							{
								value: 'text',
								label: 'Text',
							},
						] }
						showIcons={ false }
					/>
				) }
				{ layout === 'input-button' && 'text' === buttonType && (
					<>
						<UAGTextControl
							label={ __( 'Text', 'ultimate-addons-for-gutenberg' ) }
							value={ buttonText }
							data={ {
								value: buttonText,
								label: 'buttonText',
							} }
							setAttributes={ setAttributes }
							onChange={ ( value ) => {
								setAttributes( {
									buttonText: value,
								} );
							} }
						/>
					</>
				) }
			</UAGAdvancedPanelBody>
		);
	};

	const inputSettings = () => {
		return (
			<UAGAdvancedPanelBody
				title={ __( 'Input Box', 'ultimate-addons-for-gutenberg' ) }
				initialOpen={ true }
				className="uagb__url-panel-body"
			>
				<AdvancedPopColorControl
					label={ __( 'Text Color', 'ultimate-addons-for-gutenberg' ) }
					colorValue={ textColor ? textColor : '' }
					data={ {
						value: textColor,
						label: 'textColor',
					} }
					setAttributes={ setAttributes }
				/>
				<AdvancedPopColorControl
					label={ __( 'Background Color', 'ultimate-addons-for-gutenberg' ) }
					colorValue={ inputBgColor ? inputBgColor : '' }
					data={ {
						value: inputBgColor,
						label: 'inputBgColor',
					} }
					setAttributes={ setAttributes }
				/>
				<ResponsiveBorder
					setAttributes={ setAttributes }
					borderStyleLabel={ __( 'Style', 'ultimate-addons-for-gutenberg' ) }
					borderWidthLabel={ __( 'Width', 'ultimate-addons-for-gutenberg' ) }
					borderRadiusLabel={ __( 'Radius', 'ultimate-addons-for-gutenberg' ) }
					borderColorLabel={ __( 'Color', 'ultimate-addons-for-gutenberg' ) }
					borderHoverColorLabel={ __( 'Hover Color', 'ultimate-addons-for-gutenberg' ) }
					prefix={ 'input' }
					attributes={ attributes }
					deviceType={ deviceType }
				/>
				<SpacingControl
					{ ...props }
					label={ __( 'Padding', 'ultimate-addons-for-gutenberg' ) }
					valueTop={ {
						value: paddingInputTop,
						label: 'paddingInputTop',
					} }
					valueRight={ {
						value: paddingInputRight,
						label: 'paddingInputRight',
					} }
					valueBottom={ {
						value: paddingInputBottom,
						label: 'paddingInputBottom',
					} }
					valueLeft={ {
						value: paddingInputLeft,
						label: 'paddingInputLeft',
					} }
					valueTopTablet={ {
						value: paddingInputTopTablet,
						label: 'paddingInputTopTablet',
					} }
					valueRightTablet={ {
						value: paddingInputRightTablet,
						label: 'paddingInputRightTablet',
					} }
					valueBottomTablet={ {
						value: paddingInputBottomTablet,
						label: 'paddingInputBottomTablet',
					} }
					valueLeftTablet={ {
						value: paddingInputLeftTablet,
						label: 'paddingInputLeftTablet',
					} }
					valueTopMobile={ {
						value: paddingInputTopMobile,
						label: 'paddingInputTopMobile',
					} }
					valueRightMobile={ {
						value: paddingInputRightMobile,
						label: 'paddingInputRightMobile',
					} }
					valueBottomMobile={ {
						value: paddingInputBottomMobile,
						label: 'paddingInputBottomMobile',
					} }
					valueLeftMobile={ {
						value: paddingInputLeftMobile,
						label: 'paddingInputLeftMobile',
					} }
					unit={ {
						value: inputPaddingTypeDesktop,
						label: 'inputPaddingTypeDesktop',
					} }
					mUnit={ {
						value: mobilePaddingInputUnit,
						label: 'mobilePaddingInputUnit',
					} }
					tUnit={ {
						value: tabletPaddingInputUnit,
						label: 'tabletPaddingInputUnit',
					} }
					deviceType={ deviceType }
					attributes={ attributes }
					setAttributes={ setAttributes }
					link={ {
						value: spacingLink,
						label: 'spacingLink',
					} }
					units={ [
						{
							name: __( 'Pixel', 'ultimate-addons-for-gutenberg' ),
							unitValue: 'px',
						},
						{
							name: __( 'Em', 'ultimate-addons-for-gutenberg' ),
							unitValue: 'em',
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
					fontStyle={ {
						value: inputFontStyle,
						label: 'inputFontStyle',
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
					transform={ {
						value: inputTransform,
						label: 'inputTransform',
					} }
					decoration={ {
						value: inputDecoration,
						label: 'inputDecoration',
					} }
				/>
				<BoxShadowControl
					blockId={ block_id }
					setAttributes={ setAttributes }
					label={ __( 'Box Shadow', 'ultimate-addons-for-gutenberg' ) }
					boxShadowColor={ {
						value: boxShadowColor,
						label: 'boxShadowColor',
						title: __( 'Color', 'ultimate-addons-for-gutenberg' ),
					} }
					boxShadowHOffset={ {
						value: boxShadowHOffset,
						label: 'boxShadowHOffset',
						title: __( 'Horizontal', 'ultimate-addons-for-gutenberg' ),
					} }
					boxShadowVOffset={ {
						value: boxShadowVOffset,
						label: 'boxShadowVOffset',
						title: __( 'Vertical', 'ultimate-addons-for-gutenberg' ),
					} }
					boxShadowBlur={ {
						value: boxShadowBlur,
						label: 'boxShadowBlur',
						title: __( 'Blur', 'ultimate-addons-for-gutenberg' ),
					} }
					boxShadowSpread={ {
						value: boxShadowSpread,
						label: 'boxShadowSpread',
						title: __( 'Spread', 'ultimate-addons-for-gutenberg' ),
					} }
					boxShadowPosition={ {
						value: boxShadowPosition,
						label: 'boxShadowPosition',
						title: __( 'Position', 'ultimate-addons-for-gutenberg' ),
					} }
					popup={ true }
				/>
			</UAGAdvancedPanelBody>
		);
	};

	const buttonSettings = () => {
		const tabOutputNormal = (
			<>
				<AdvancedPopColorControl
					label={ __( 'Background Color', 'ultimate-addons-for-gutenberg' ) }
					colorValue={ buttonBgColor ? buttonBgColor : '' }
					data={ {
						value: buttonBgColor,
						label: 'buttonBgColor',
					} }
					setAttributes={ setAttributes }
				/>
				{ 'text' === buttonType && (
					<AdvancedPopColorControl
						label={ __( 'Text Color', 'ultimate-addons-for-gutenberg' ) }
						colorValue={ buttonTextColor ? buttonTextColor : '' }
						data={ {
							value: buttonTextColor,
							label: 'buttonTextColor',
						} }
						setAttributes={ setAttributes }
					/>
				) }
				{ 'icon' === buttonType && (
					<AdvancedPopColorControl
						label={ __( 'Icon Color', 'ultimate-addons-for-gutenberg' ) }
						colorValue={ buttonIconColor ? buttonIconColor : '' }
						data={ {
							value: buttonIconColor,
							label: 'buttonIconColor',
						} }
						setAttributes={ setAttributes }
					/>
				) }
			</>
		);
		const tabOutputHover = (
			<>
				<AdvancedPopColorControl
					label={ __( 'Background Color', 'ultimate-addons-for-gutenberg' ) }
					colorValue={ buttonBgHoverColor ? buttonBgHoverColor : '' }
					data={ {
						value: buttonBgHoverColor,
						label: 'buttonBgHoverColor',
					} }
					setAttributes={ setAttributes }
				/>
				{ 'text' === buttonType && (
					<AdvancedPopColorControl
						label={ __( 'Text Color', 'ultimate-addons-for-gutenberg' ) }
						colorValue={ buttonTextHoverColor ? buttonTextHoverColor : '' }
						data={ {
							value: buttonTextHoverColor,
							label: 'buttonTextHoverColor',
						} }
						setAttributes={ setAttributes }
					/>
				) }
				{ 'icon' === buttonType && (
					<AdvancedPopColorControl
						label={ __( 'Icon Color', 'ultimate-addons-for-gutenberg' ) }
						colorValue={ buttonIconHoverColor ? buttonIconHoverColor : '' }
						data={ {
							value: buttonIconHoverColor,
							label: 'buttonIconHoverColor',
						} }
						setAttributes={ setAttributes }
					/>
				) }
			</>
		);
		if ( 'input-button' === layout ) {
			return (
				<UAGAdvancedPanelBody
					title={ __( 'Button', 'ultimate-addons-for-gutenberg' ) }
					initialOpen={ false }
					className="uagb__url-panel-body"
				>
					<Range
						label={ __( 'Width', 'ultimate-addons-for-gutenberg' ) }
						setAttributes={ setAttributes }
						value={ buttonWidth }
						data={ {
							value: buttonWidth,
							label: 'buttonWidth',
						} }
						min={ 0 }
						max={ 500 }
						unit={ {
							value: buttonWidthType,
							label: 'buttonWidthType',
						} }
					/>
					{ 'text' === buttonType && (
						<>
							<TypographyControl
								label={ __( 'Typography', 'ultimate-addons-for-gutenberg' ) }
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
								fontStyle={ {
									value: buttonFontStyle,
									label: 'buttonFontStyle',
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
								transform={ {
									value: buttonTransform,
									label: 'buttonTransform',
								} }
								decoration={ {
									value: buttonDecoration,
									label: 'buttonDecoration',
								} }
							/>
						</>
					) }
					{ 'icon' === buttonType && (
						<>
							<Range
								label={ __( 'Icon Size', 'ultimate-addons-for-gutenberg' ) }
								setAttributes={ setAttributes }
								value={ buttonIconSize }
								data={ {
									value: buttonIconSize,
									label: 'buttonIconSize',
								} }
								min={ 0 }
								max={ 100 }
								unit={ {
									value: buttonIconSizeType,
									label: 'buttonIconSizeType',
								} }
							/>
						</>
					) }
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
						normal={ tabOutputNormal }
						hover={ tabOutputHover }
						disableBottomSeparator={ true }
					/>
				</UAGAdvancedPanelBody>
			);
		}

		return '';
	};

	const iconSettings = () => {
		if ( 'input' === layout ) {
			return (
				<UAGAdvancedPanelBody
					title={ __( 'Icon', 'ultimate-addons-for-gutenberg' ) }
					initialOpen={ false }
					className="uagb__url-panel-body"
				>
					<>
						<Range
							label={ __( 'Size', 'ultimate-addons-for-gutenberg' ) }
							setAttributes={ setAttributes }
							value={ iconSize }
							data={ {
								value: iconSize,
								label: 'iconSize',
							} }
							min={ 0 }
							max={ 100 }
							unit={ {
								value: iconSizeType,
								label: 'iconSizeType',
							} }
						/>
						<AdvancedPopColorControl
							label={ __( 'Color', 'ultimate-addons-for-gutenberg' ) }
							colorValue={ iconColor ? iconColor : '' }
							data={ {
								value: iconColor,
								label: 'iconColor',
							} }
							setAttributes={ setAttributes }
						/>
					</>
				</UAGAdvancedPanelBody>
			);
		}

		return '';
	};

	return (
		<>
			<InspectorControls>
				<InspectorTabs>
					<InspectorTab { ...UAGTabs.general }>{ generalSettings() }</InspectorTab>
					<InspectorTab { ...UAGTabs.style }>
						{ inputSettings() }
						{ iconSettings() }
						{ buttonSettings() }
					</InspectorTab>
					<InspectorTab { ...UAGTabs.advance } parentProps={ props }></InspectorTab>
				</InspectorTabs>
			</InspectorControls>
		</>
	);
};

export default memo( Settings );
