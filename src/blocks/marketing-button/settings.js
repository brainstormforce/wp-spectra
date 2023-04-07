// Import all of our Text Options requirements.
import UAGIconPicker from '@Components/icon-picker';
import { __ } from '@wordpress/i18n';
import renderSVG from '@Controls/renderIcon';
import TypographyControl from '@Components/typography';
import AdvancedPopColorControl from '@Components/color-control/advanced-pop-color-control.js';
import InspectorTabs from '@Components/inspector-tabs/InspectorTabs.js';
import InspectorTab, { UAGTabs } from '@Components/inspector-tabs/InspectorTab.js';
import SpacingControl from '@Components/spacing-control';
import Range from '@Components/range/Range.js';
import ResponsiveSlider from '@Components/responsive-slider';
import ResponsiveBorder from '@Components/responsive-border';
import MultiButtonsControl from '@Components/multi-buttons-control';
import UAGTabsControl from '@Components/tabs';
import presets from './presets';
import UAGPresets from '@Components/presets';
import { InspectorControls } from '@wordpress/block-editor';

import { Icon, ToggleControl } from '@wordpress/components';

import UAGAdvancedPanelBody from '@Components/advanced-panel-body';
import UAGTextControl from '@Components/text-control';
import { memo } from '@wordpress/element';

const Settings = ( props ) => {
	props = props.parentProps;

	const { attributes, setAttributes, deviceType } = props;

	const {
		align,
		textAlign,
		link,
		linkTarget,
		titleSpace,
		titleSpaceTablet,
		titleSpaceMobile,
		titleSpaceUnit,
		showDescription,
		//Icon
		icon,
		iconPosition,
		iconSpace,
		iconSpaceTablet,
		iconSpaceMobile,
		iconFontSize,
		iconFontSizeMobile,
		iconFontSizeTablet,
		//Colors
		titleColor,
		titleHoverColor,
		prefixColor,
		prefixHoverColor,
		iconColor,
		iconHoverColor,
		//Background
		backgroundType,
		backgroundColor,
		backgroundHoverColor,
		gradientColor1,
		gradientColor2,
		gradientLocation1,
		gradientLocation2,
		gradientType,
		gradientAngle,
		//Typography
		titleFontFamily,
		titleFontWeight,
		titleFontStyle,
		titleFontSize,
		titleFontSizeType,
		titleFontSizeTablet,
		titleFontSizeMobile,
		titleLineHeightType,
		titleLineHeight,
		titleLineHeightTablet,
		titleLineHeightMobile,
		titleTag,
		prefixFontFamily,
		prefixFontWeight,
		prefixFontStyle,
		prefixFontSize,
		prefixFontSizeType,
		prefixFontSizeTablet,
		prefixFontSizeMobile,
		prefixLineHeightType,
		prefixLineHeight,
		prefixLineHeightTablet,
		prefixLineHeightMobile,
		paddingBtnUnit,
		spacingLink,
		mobilePaddingBtnUnit,
		tabletPaddingBtnUnit,
		paddingBtnTop,
		paddingBtnBottom,
		paddingBtnLeft,
		paddingBtnRight,
		paddingBtnTopTablet,
		paddingBtnRightTablet,
		paddingBtnBottomTablet,
		paddingBtnLeftTablet,
		paddingBtnTopMobile,
		paddingBtnRightMobile,
		paddingBtnBottomMobile,
		paddingBtnLeftMobile,
		titleLoadGoogleFonts,
		prefixLoadGoogleFonts,
		titleTransform,
		titleDecoration,
		prefixTransform,
		prefixDecoration,

		// letter spacing
		titleLetterSpacing,
		titleLetterSpacingTablet,
		titleLetterSpacingMobile,
		titleLetterSpacingType,
		prefixLetterSpacing,
		prefixLetterSpacingTablet,
		prefixLetterSpacingMobile,
		prefixLetterSpacingType,
	} = attributes;

	const generalSettings = () => {
		return (
			<>
				<UAGAdvancedPanelBody title={ __( 'Content' ) } initialOpen={ false }>
					<MultiButtonsControl
						setAttributes={ setAttributes }
						label={ __( 'Button Alignment', 'ultimate-addons-for-gutenberg' ) }
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
							{
								value: 'full',
								icon: <Icon icon={ renderSVG( 'fa fa-align-justify' ) } />,
								tooltip: __( 'Full Width', 'ultimate-addons-for-gutenberg' ),
							},
						] }
						showIcons={ true }
					/>
					<MultiButtonsControl
						setAttributes={ setAttributes }
						label={ __( 'Text Alignment', 'ultimate-addons-for-gutenberg' ) }
						data={ {
							value: textAlign,
							label: 'textAlign',
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
					<ToggleControl
						label={ __( 'Show Description', 'ultimate-addons-for-gutenberg' ) }
						checked={ showDescription }
						onChange={ () => setAttributes( { showDescription: ! showDescription } ) }
					/>
					<UAGTextControl
						label={ __( 'Link', 'ultimate-addons-for-gutenberg' ) }
						value={ link }
						data={ {
							value: link,
							label: 'link',
						} }
						setAttributes={ setAttributes }
						onChange={ ( value ) => setAttributes( { link: value } ) }
					/>
					<ToggleControl
						label={ __( 'Open in new window', 'ultimate-addons-for-gutenberg' ) }
						checked={ linkTarget }
						onChange={ () => setAttributes( { linkTarget: ! linkTarget } ) }
					/>
				</UAGAdvancedPanelBody>
				<UAGAdvancedPanelBody title={ __( 'Heading' ) } initialOpen={ false }>
					<MultiButtonsControl
						setAttributes={ setAttributes }
						label={ __( 'Tag', 'ultimate-addons-for-gutenberg' ) }
						data={ {
							value: titleTag,
							label: 'titleTag',
						} }
						options={ [
							{
								value: 'h1',
								label: __( 'H1', 'ultimate-addons-for-gutenberg' ),
							},
							{
								value: 'h2',
								label: __( 'H2', 'ultimate-addons-for-gutenberg' ),
							},
							{
								value: 'h3',
								label: __( 'H3', 'ultimate-addons-for-gutenberg' ),
							},
							{
								value: 'h4',
								label: __( 'H4', 'ultimate-addons-for-gutenberg' ),
							},
							{
								value: 'h5',
								label: __( 'H5', 'ultimate-addons-for-gutenberg' ),
							},
							{
								value: 'h6',
								label: __( 'H6', 'ultimate-addons-for-gutenberg' ),
							},
							{
								value: 'span',
								label: __( 'Span', 'ultimate-addons-for-gutenberg' ),
							},
							{
								value: 'p',
								label: __( 'P', 'ultimate-addons-for-gutenberg' ),
							},
						] }
					/>
				</UAGAdvancedPanelBody>
			</>
		);
	};
	const buttonSettings = () => {
		return (
			<UAGAdvancedPanelBody title={ __( 'Icon', 'ultimate-addons-for-gutenberg' ) } initialOpen={ false }>
				<UAGIconPicker
					label={ __( 'Icon', 'ultimate-addons-for-gutenberg' ) }
					value={ icon }
					onChange={ ( value ) => setAttributes( { icon: value } ) }
				/>
				{ '' !== icon && (
					<>
						<MultiButtonsControl
							setAttributes={ setAttributes }
							label={ __( 'Position', 'ultimate-addons-for-gutenberg' ) }
							data={ {
								value: iconPosition,
								label: 'iconPosition',
							} }
							className="uagb-multi-button-alignment-control"
							options={ [
								{
									value: 'before',
									label: __( 'Before Text', 'ultimate-addons-for-gutenberg' ),
								},
								{
									value: 'after',
									label: __( 'After Text', 'ultimate-addons-for-gutenberg' ),
								},
							] }
						/>
						<ResponsiveSlider
							label={ __( 'Gap Between Icon And Text', 'ultimate-addons-for-gutenberg' ) }
							data={ {
								desktop: {
									value: iconSpace,
									label: 'iconSpace',
								},
								tablet: {
									value: iconSpaceTablet,
									label: 'iconSpaceTablet',
								},
								mobile: {
									value: iconSpaceMobile,
									label: 'iconSpaceMobile',
								},
							} }
							min={ -50 }
							max={ 50 }
							displayUnit={ false }
							setAttributes={ setAttributes }
						/>
						<ResponsiveSlider
							label={ __( 'Size', 'ultimate-addons-for-gutenberg' ) }
							data={ {
								desktop: {
									value: iconFontSize,
									label: 'iconFontSize',
								},
								tablet: {
									value: iconFontSizeTablet,
									label: 'iconFontSizeTablet',
								},
								mobile: {
									value: iconFontSizeMobile,
									label: 'iconFontSizeMobile',
								},
							} }
							min={ 0 }
							max={ 500 }
							displayUnit={ false }
							setAttributes={ setAttributes }
						/>
					</>
				) }
			</UAGAdvancedPanelBody>
		);
	};

	const titleSettings = () => {
		return (
			<UAGAdvancedPanelBody title={ __( 'Heading', 'ultimate-addons-for-gutenberg' ) } initialOpen={ true }>
				{ showDescription && (
					<ResponsiveSlider
						label={ __( 'Bottom Spacing', 'ultimate-addons-for-gutenberg' ) }
						data={ {
							desktop: {
								value: titleSpace,
								label: 'titleSpace',
							},
							tablet: {
								value: titleSpaceTablet,
								label: 'titleSpaceTablet',
							},
							mobile: {
								value: titleSpaceMobile,
								label: 'titleSpaceMobile',
							},
						} }
						min={ 0 }
						max={ 20 }
						units={ [
							{
								name: __( 'Pixel', 'ultimate-addons-for-gutenberg' ),
								unitValue: 'px',
							},
						] }
						setAttributes={ setAttributes }
						unit={ {
							value: titleSpaceUnit,
							label: 'titleSpaceUnit',
						} }
					/>
				) }
				<TypographyControl
					label={ __( 'Typography', 'ultimate-addons-for-gutenberg' ) }
					attributes={ attributes }
					setAttributes={ setAttributes }
					loadGoogleFonts={ {
						value: titleLoadGoogleFonts,
						label: 'titleLoadGoogleFonts',
					} }
					fontFamily={ {
						value: titleFontFamily,
						label: 'titleFontFamily',
					} }
					fontWeight={ {
						value: titleFontWeight,
						label: 'titleFontWeight',
					} }
					fontStyle={ {
						value: titleFontStyle,
						label: 'titleFontStyle',
					} }
					fontSizeType={ {
						value: titleFontSizeType,
						label: 'titleFontSizeType',
					} }
					fontSize={ {
						value: titleFontSize,
						label: 'titleFontSize',
					} }
					fontSizeMobile={ {
						value: titleFontSizeMobile,
						label: 'titleFontSizeMobile',
					} }
					fontSizeTablet={ {
						value: titleFontSizeTablet,
						label: 'titleFontSizeTablet',
					} }
					lineHeightType={ {
						value: titleLineHeightType,
						label: 'titleLineHeightType',
					} }
					lineHeight={ {
						value: titleLineHeight,
						label: 'titleLineHeight',
					} }
					lineHeightMobile={ {
						value: titleLineHeightMobile,
						label: 'titleLineHeightMobile',
					} }
					lineHeightTablet={ {
						value: titleLineHeightTablet,
						label: 'titleLineHeightTablet',
					} }
					transform={ {
						value: titleTransform,
						label: 'titleTransform',
					} }
					decoration={ {
						value: titleDecoration,
						label: 'titleDecoration',
					} }
					letterSpacing={ {
						value: titleLetterSpacing,
						label: 'titleLetterSpacing',
					} }
					letterSpacingTablet={ {
						value: titleLetterSpacingTablet,
						label: 'titleLetterSpacingTablet',
					} }
					letterSpacingMobile={ {
						value: titleLetterSpacingMobile,
						label: 'titleLetterSpacingMobile',
					} }
					letterSpacingType={ {
						value: titleLetterSpacingType,
						label: 'titleLetterSpacingType',
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
					normal={
						<AdvancedPopColorControl
							label={ __( 'Color', 'ultimate-addons-for-gutenberg' ) }
							colorValue={ titleColor ? titleColor : '' }
							data={ {
								value: titleColor,
								label: 'titleColor',
							} }
							setAttributes={ setAttributes }
						/>
					}
					hover={
						<AdvancedPopColorControl
							label={ __( 'Color', 'ultimate-addons-for-gutenberg' ) }
							colorValue={ titleHoverColor ? titleHoverColor : '' }
							data={ {
								value: titleHoverColor,
								label: 'titleHoverColor',
							} }
							setAttributes={ setAttributes }
						/>
					}
					disableBottomSeparator={ true }
				/>
			</UAGAdvancedPanelBody>
		);
	};

	const descriptionSettings = () => {
		return (
			<UAGAdvancedPanelBody title={ __( 'Description', 'ultimate-addons-for-gutenberg' ) } initialOpen={ false }>
				<TypographyControl
					label={ __( 'Typography', 'ultimate-addons-for-gutenberg' ) }
					attributes={ attributes }
					setAttributes={ setAttributes }
					loadGoogleFonts={ {
						value: prefixLoadGoogleFonts,
						label: 'prefixLoadGoogleFonts',
					} }
					fontFamily={ {
						value: prefixFontFamily,
						label: 'prefixFontFamily',
					} }
					fontWeight={ {
						value: prefixFontWeight,
						label: 'prefixFontWeight',
					} }
					fontStyle={ {
						value: prefixFontStyle,
						label: 'prefixFontStyle',
					} }
					fontSizeType={ {
						value: prefixFontSizeType,
						label: 'prefixFontSizeType',
					} }
					fontSize={ {
						value: prefixFontSize,
						label: 'prefixFontSize',
					} }
					fontSizeMobile={ {
						value: prefixFontSizeMobile,
						label: 'prefixFontSizeMobile',
					} }
					fontSizeTablet={ {
						value: prefixFontSizeTablet,
						label: 'prefixFontSizeTablet',
					} }
					lineHeightType={ {
						value: prefixLineHeightType,
						label: 'prefixLineHeightType',
					} }
					lineHeight={ {
						value: prefixLineHeight,
						label: 'prefixLineHeight',
					} }
					lineHeightMobile={ {
						value: prefixLineHeightMobile,
						label: 'prefixLineHeightMobile',
					} }
					lineHeightTablet={ {
						value: prefixLineHeightTablet,
						label: 'prefixLineHeightTablet',
					} }
					transform={ {
						value: prefixTransform,
						label: 'prefixTransform',
					} }
					decoration={ {
						value: prefixDecoration,
						label: 'prefixDecoration',
					} }
					letterSpacing={ {
						value: prefixLetterSpacing,
						label: 'prefixLetterSpacing',
					} }
					letterSpacingTablet={ {
						value: prefixLetterSpacingTablet,
						label: 'prefixLetterSpacingTablet',
					} }
					letterSpacingMobile={ {
						value: prefixLetterSpacingMobile,
						label: 'prefixLetterSpacingMobile',
					} }
					letterSpacingType={ {
						value: prefixLetterSpacingType,
						label: 'prefixLetterSpacingType',
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
					normal={
						<AdvancedPopColorControl
							label={ __( 'Color', 'ultimate-addons-for-gutenberg' ) }
							colorValue={ prefixColor ? prefixColor : '' }
							data={ {
								value: prefixColor,
								label: 'prefixColor',
							} }
							setAttributes={ setAttributes }
						/>
					}
					hover={
						<AdvancedPopColorControl
							label={ __( 'Color', 'ultimate-addons-for-gutenberg' ) }
							colorValue={ prefixHoverColor ? prefixHoverColor : '' }
							data={ {
								value: prefixHoverColor,
								label: 'prefixHoverColor',
							} }
							setAttributes={ setAttributes }
						/>
					}
					disableBottomSeparator={ true }
				/>
			</UAGAdvancedPanelBody>
		);
	};

	const iconSettings = () => {
		return (
			<UAGAdvancedPanelBody title={ __( 'Icon', 'ultimate-addons-for-gutenberg' ) } initialOpen={ false }>
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
					normal={
						<AdvancedPopColorControl
							label={ __( 'Color', 'ultimate-addons-for-gutenberg' ) }
							colorValue={ iconColor ? iconColor : '' }
							data={ {
								value: iconColor,
								label: 'iconColor',
							} }
							setAttributes={ setAttributes }
						/>
					}
					hover={
						<AdvancedPopColorControl
							label={ __( 'Color', 'ultimate-addons-for-gutenberg' ) }
							colorValue={ iconHoverColor ? iconHoverColor : '' }
							data={ {
								value: iconHoverColor,
								label: 'iconHoverColor',
							} }
							setAttributes={ setAttributes }
						/>
					}
					disableBottomSeparator={ true }
				/>
			</UAGAdvancedPanelBody>
		);
	};

	const btnPaddingSettings = () => {
		return (
			<UAGAdvancedPanelBody title={ __( 'Spacing' ) } initialOpen={ false }>
				<SpacingControl
					{ ...props }
					label={ __( 'Button Padding', 'ultimate-addons-for-gutenberg' ) }
					valueTop={ {
						value: paddingBtnTop,
						label: 'paddingBtnTop',
					} }
					valueRight={ {
						value: paddingBtnRight,
						label: 'paddingBtnRight',
					} }
					valueBottom={ {
						value: paddingBtnBottom,
						label: 'paddingBtnBottom',
					} }
					valueLeft={ {
						value: paddingBtnLeft,
						label: 'paddingBtnLeft',
					} }
					valueTopTablet={ {
						value: paddingBtnTopTablet,
						label: 'paddingBtnTopTablet',
					} }
					valueRightTablet={ {
						value: paddingBtnRightTablet,
						label: 'paddingBtnRightTablet',
					} }
					valueBottomTablet={ {
						value: paddingBtnBottomTablet,
						label: 'paddingBtnBottomTablet',
					} }
					valueLeftTablet={ {
						value: paddingBtnLeftTablet,
						label: 'paddingBtnLeftTablet',
					} }
					valueTopMobile={ {
						value: paddingBtnTopMobile,
						label: 'paddingBtnTopMobile',
					} }
					valueRightMobile={ {
						value: paddingBtnRightMobile,
						label: 'paddingBtnRightMobile',
					} }
					valueBottomMobile={ {
						value: paddingBtnBottomMobile,
						label: 'paddingBtnBottomMobile',
					} }
					valueLeftMobile={ {
						value: paddingBtnLeftMobile,
						label: 'paddingBtnLeftMobile',
					} }
					unit={ {
						value: paddingBtnUnit,
						label: 'paddingBtnUnit',
					} }
					mUnit={ {
						value: mobilePaddingBtnUnit,
						label: 'mobilePaddingBtnUnit',
					} }
					tUnit={ {
						value: tabletPaddingBtnUnit,
						label: 'tabletPaddingBtnUnit',
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
							name: __( '%', 'ultimate-addons-for-gutenberg' ),
							unitValue: '%',
						},
					] }
				/>
			</UAGAdvancedPanelBody>
		);
	};
	const backgroundSettings = () => {
		return (
			<UAGAdvancedPanelBody title={ __( 'Background' ) } initialOpen={ false }>
				<MultiButtonsControl
					setAttributes={ setAttributes }
					label={ __( 'Type', 'ultimate-addons-for-gutenberg' ) }
					data={ {
						value: backgroundType,
						label: 'backgroundType',
					} }
					className="uagb-multi-button-alignment-control"
					options={ [
						{
							value: 'transparent',
							label: __( 'Transparent', 'ultimate-addons-for-gutenberg' ),
						},
						{
							value: 'color',
							label: __( 'Color', 'ultimate-addons-for-gutenberg' ),
						},
						{
							value: 'gradient',
							label: __( 'Gradient', 'ultimate-addons-for-gutenberg' ),
						},
					] }
				/>
				{ 'color' === backgroundType && (
					<>
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
							normal={
								<>
									<AdvancedPopColorControl
										label={ __( 'Color', 'ultimate-addons-for-gutenberg' ) }
										colorValue={ backgroundColor ? backgroundColor : '' }
										data={ {
											value: backgroundColor,
											label: 'backgroundColor',
										} }
										setAttributes={ setAttributes }
									/>
								</>
							}
							hover={
								<>
									<AdvancedPopColorControl
										label={ __( 'Color', 'ultimate-addons-for-gutenberg' ) }
										colorValue={ backgroundHoverColor ? backgroundHoverColor : '' }
										data={ {
											value: backgroundHoverColor,
											label: 'backgroundHoverColor',
										} }
										setAttributes={ setAttributes }
									/>
								</>
							}
							disableBottomSeparator={ true }
						/>
					</>
				) }
				{ 'gradient' === backgroundType && (
					<>
						<AdvancedPopColorControl
							label={ __( 'Color 1', 'ultimate-addons-for-gutenberg' ) }
							colorValue={ gradientColor2 ? gradientColor2 : '' }
							data={ {
								value: gradientColor2,
								label: 'gradientColor2',
							} }
							setAttributes={ setAttributes }
						/>
						<AdvancedPopColorControl
							label={ __( 'Color 2', 'ultimate-addons-for-gutenberg' ) }
							colorValue={ gradientColor1 ? gradientColor1 : '' }
							data={ {
								value: gradientColor1,
								label: 'gradientColor1',
							} }
							setAttributes={ setAttributes }
						/>
						<MultiButtonsControl
							setAttributes={ setAttributes }
							label={ __( 'Type', 'ultimate-addons-for-gutenberg' ) }
							data={ {
								value: gradientType,
								label: 'gradientType',
							} }
							className="uagb-multi-button-alignment-control"
							options={ [
								{
									value: 'linear',
									label: __( 'Linear', 'ultimate-addons-for-gutenberg' ),
								},
								{
									value: 'radial',
									label: __( 'Radial', 'ultimate-addons-for-gutenberg' ),
								},
							] }
						/>
						<Range
							label={ __( 'Location 1', 'ultimate-addons-for-gutenberg' ) }
							setAttributes={ setAttributes }
							value={ gradientLocation1 }
							data={ {
								value: gradientLocation1,
								label: 'gradientLocation1',
							} }
							min={ 0 }
							max={ 100 }
							displayUnit={ false }
						/>
						<Range
							label={ __( 'Location 2', 'ultimate-addons-for-gutenberg' ) }
							setAttributes={ setAttributes }
							value={ gradientLocation2 }
							data={ {
								value: gradientLocation2,
								label: 'gradientLocation2',
							} }
							min={ 0 }
							max={ 100 }
							displayUnit={ false }
						/>
						{ 'linear' === gradientType && (
							<Range
								label={ __( 'Angle', 'ultimate-addons-for-gutenberg' ) }
								setAttributes={ setAttributes }
								value={ gradientAngle }
								data={ {
									value: gradientAngle,
									label: 'gradientAngle',
								} }
								min={ 0 }
								max={ 360 }
								displayUnit={ false }
							/>
						) }
					</>
				) }
			</UAGAdvancedPanelBody>
		);
	};

	const borderSettings = () => {
		return (
			<UAGAdvancedPanelBody title={ __( 'Border', 'ultimate-addons-for-gutenberg' ) } initialOpen={ false }>
				<ResponsiveBorder
					setAttributes={ setAttributes }
					prefix={ 'btn' }
					attributes={ attributes }
					deviceType={ deviceType }
					disableBottomSeparator={ true }
					disabledBorderTitle={ true }
				/>
			</UAGAdvancedPanelBody>
		);
	};
	const presetSettings = () => {
		return (
			<UAGAdvancedPanelBody title={ __( 'Presets', 'ultimate-addons-for-gutenberg' ) } initialOpen={ true }>
				<UAGPresets setAttributes={ setAttributes } presets={ presets } presetInputType="radioImage" />
			</UAGAdvancedPanelBody>
		);
	};
	return (
		<>
			<InspectorControls>
				<InspectorTabs>
					<InspectorTab { ...UAGTabs.general }>
						{ presetSettings() }
						{ generalSettings() }
						{ buttonSettings() }
					</InspectorTab>
					<InspectorTab { ...UAGTabs.style }>
						{ titleSettings() }
						{ showDescription && descriptionSettings() }
						{ '' !== icon && iconSettings() }
						{ backgroundSettings() }
						{ borderSettings() }
						{ btnPaddingSettings() }
					</InspectorTab>
					<InspectorTab { ...UAGTabs.advance } parentProps={ props }></InspectorTab>
				</InspectorTabs>
			</InspectorControls>
		</>
	);
};

export default memo( Settings );
