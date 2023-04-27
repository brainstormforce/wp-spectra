import UAGIconPicker from '@Components/icon-picker';
import { __ } from '@wordpress/i18n';
import { memo } from '@wordpress/element';

import TypographyControl from '@Components/typography';
import { InspectorControls } from '@wordpress/block-editor';
import AdvancedPopColorControl from '@Components/color-control/advanced-pop-color-control.js';
import InspectorTabs from '@Components/inspector-tabs/InspectorTabs.js';
import InspectorTab, { UAGTabs } from '@Components/inspector-tabs/InspectorTab.js';
import MultiButtonsControl from '@Components/multi-buttons-control';
import ResponsiveBorder from '@Components/responsive-border';
import SpacingControl from '@Components/spacing-control';
import UAGTabsControl from '@Components/tabs';
import ctaPresets, { buttonsPresetsCTA, buttonsPresetsAdditionalButton } from './presets';
import UAGPresets from '@Components/presets';
import renderSVG from '@Controls/renderIcon';
import UAGTextControl from '@Components/text-control';
import { ToggleControl, Icon } from '@wordpress/components';
import UAGAdvancedPanelBody from '@Components/advanced-panel-body';
import ResponsiveSlider from '@Components/responsive-slider';
import { useDeviceType } from '@Controls/getPreviewType';

const Settings = ( props ) => {
	props = props.parentProps;
	const { setAttributes, attributes } = props;
	const deviceType = useDeviceType();
	// Setup the attributes.
	const {
		textAlign,
		titleColor,
		descColor,
		titleTag,
		titleFontSize,
		titleFontSizeType,
		titleFontSizeMobile,
		titleFontSizeTablet,
		titleFontFamily,
		titleFontWeight,
		titleLineHeightType,
		titleLineHeight,
		titleLineHeightTablet,
		titleLineHeightMobile,
		titleLoadGoogleFonts,
		descFontSize,
		descFontSizeType,
		descFontSizeMobile,
		descFontSizeTablet,
		descFontFamily,
		descFontWeight,
		descLineHeightType,
		descLineHeight,
		descLineHeightTablet,
		descLineHeightMobile,
		descLoadGoogleFonts,
		titleSpace,
		titleSpaceTablet,
		titleSpaceMobile,
		titleSpaceType,
		descSpace,
		descSpaceTablet,
		descSpaceMobile,
		descSpaceType,
		buttonAlign,
		ctaType,
		ctaText,
		ctaLink,
		ctaTarget,
		ctaIcon,
		ctaIconPosition,
		ctaIconSpace,
		ctaIconSpaceTablet,
		ctaIconSpaceMobile,
		ctaFontSize,
		ctaFontSizeType,
		ctaFontSizeMobile,
		ctaFontSizeTablet,
		ctaFontFamily,
		ctaFontWeight,
		ctaLoadGoogleFonts,
		contentWidth,
		contentWidthTablet,
		contentWidthMobile,
		contentWidthType,
		ctaBtnLinkColor,
		ctaBgType,
		ctaBgHoverType,
		secondCtaBgType,
		secondCtaBgHoverType,
		ctaBgHoverColor,
		ctaBgColor,
		ctaTopPadding,
		ctaRightPadding,
		ctaBottomPadding,
		ctaLeftPadding,
		ctaTopPaddingTablet,
		ctaRightPaddingTablet,
		ctaBottomPaddingTablet,
		ctaLeftPaddingTablet,
		ctaTopPaddingMobile,
		ctaRightPaddingMobile,
		ctaBottomPaddingMobile,
		ctaLeftPaddingMobile,
		ctaPaddingUnit,
		mobileCTAPaddingUnit,
		tabletCTAPaddingUnit,
		ctaPaddingLink,
		stack,
		ctaLinkHoverColor,
		titleTransform,
		titleDecoration,
		descTransform,
		descDecoration,
		ctaTransform,
		ctaDecoration,
		titleFontStyle,
		descFontStyle,
		ctaFontStyle,
		enabledSecondCtaButton,
		secondCtaLink,
		secondCtaLabel,
		secondCtaTarget,
		secondCtaLoadGoogleFonts,
		secondCtaFontFamily,
		secondCtaFontWeight,
		secondCtaFontStyle,
		secondCtaFontTransform,
		secondCtaFontDecoration,
		secondCtaTopPadding,
		secondCtaRightPadding,
		secondCtaBottomPadding,
		secondCtaLeftPadding,
		secondCtaTopMobilePadding,
		secondCtaRightMobilePadding,
		secondCtaBottomMobilePadding,
		secondCtaLeftMobilePadding,
		secondCtaTopTabletPadding,
		secondCtaRightTabletPadding,
		secondCtaBottomTabletPadding,
		secondCtaLeftTabletPadding,
		secondCtaPaddingUnit,
		secondCtaMobilePaddingUnit,
		secondCtaTabletPaddingUnit,
		secondCtaPaddingLink,
		secondCtaColor,
		secondCtaBackground,
		secondCtaHoverColor,
		secondCtaHoverBackground,
		secondCtaFontSize,
		secondCtaFontSizeType,
		secondCtaFontSizeMobile,
		secondCtaFontSizeTablet,
		secondCtaIcon,
		secondCtaIconPosition,
		secondCtaIconSpace,
		stackBtn,
		gapBtn,
		gapBtnTablet,
		gapBtnMobile,
		textAlignTablet,
		textAlignMobile,
		overallBlockTopMargin,
		overallBlockRightMargin,
		overallBlockBottomMargin,
		overallBlockLeftMargin,
		overallBlockTopMobileMargin,
		overallBlockRightMobileMargin,
		overallBlockBottomMobileMargin,
		overallBlockLeftMobileMargin,
		overallBlockTopTabletMargin,
		overallBlockRightTabletMargin,
		overallBlockBottomTabletMargin,
		overallBlockLeftTabletMargin,
		overallBlockMarginUnit,
		overallBlockMobileMarginUnit,
		overallBlockTabletMarginUnit,
		overallBlockMarginLink,
		overallBlockTopPadding,
		overallBlockRightPadding,
		overallBlockBottomPadding,
		overallBlockLeftPadding,
		overallBlockTopMobilePadding,
		overallBlockRightMobilePadding,
		overallBlockBottomMobilePadding,
		overallBlockLeftMobilePadding,
		overallBlockTopTabletPadding,
		overallBlockRightTabletPadding,
		overallBlockBottomTabletPadding,
		overallBlockLeftTabletPadding,
		overallBlockPaddingUnit,
		overallBlockMobilePaddingUnit,
		overallBlockTabletPaddingUnit,
		overallBlockPaddingLink,
		buttonRightSpace,
		buttonRightSpaceTablet,
		buttonRightSpaceMobile,
		buttonRightSpaceType,
		secondCtaIconSpaceTablet,
		secondCtaIconSpaceMobile,
		titleLetterSpacing,
		titleLetterSpacingTablet,
		titleLetterSpacingMobile,
		titleLetterSpacingType,
		descLetterSpacing,
		descLetterSpacingTablet,
		descLetterSpacingMobile,
		descLetterSpacingType,
		ctaLetterSpacing,
		ctaLetterSpacingTablet,
		ctaLetterSpacingMobile,
		ctaLetterSpacingType,
		secondCtaLetterSpacing,
		secondCtaLetterSpacingTablet,
		secondCtaLetterSpacingMobile,
		secondCtaLetterSpacingType,
		showIcon,
		showSecondIcon,
		btncontentWidth,
		btncontentWidthTablet,
		btncontentWidthMobile,
		btncontentWidthType,
	} = attributes;

	const secBtnSettings = () => {
		return (
			<UAGAdvancedPanelBody
				title={ __( 'Additional Button', 'ultimate-addons-for-gutenberg' ) }
				initialOpen={ false }
			>
				<ToggleControl
					label={ __( 'Enable Additional Button', 'ultimate-addons-for-gutenberg' ) }
					checked={ enabledSecondCtaButton }
					onChange={ () => setAttributes( { enabledSecondCtaButton: ! enabledSecondCtaButton } ) }
				/>
				{ enabledSecondCtaButton && (
					<>
						<UAGPresets
							setAttributes={ setAttributes }
							presets={ buttonsPresetsAdditionalButton }
							presetInputType="radioImage"
						/>

						<MultiButtonsControl
							setAttributes={ setAttributes }
							label={ __( 'Stack Orientation', 'ultimate-addons-for-gutenberg' ) }
							data={ {
								value: stackBtn,
								label: 'stackBtn',
							} }
							options={ [
								{
									value: 'none',
									label: __( 'None', 'ultimate-addons-for-gutenberg' ),
								},
								{
									value: 'desktop',
									label: __( 'Desktop', 'ultimate-addons-for-gutenberg' ),
								},
								{
									value: 'tablet',
									label: __( 'Tablet', 'ultimate-addons-for-gutenberg' ),
								},
								{
									value: 'mobile',
									label: __( 'Mobile', 'ultimate-addons-for-gutenberg' ),
								},
							] }
							help={ __(
								'Note: Choose on what breakpoint the buttons will stack.',
								'ultimate-addons-for-gutenberg'
							) }
						/>
						<ResponsiveSlider
							label={ __( 'Gap Between Buttons', 'ultimate-addons-for-gutenberg' ) }
							data={ {
								desktop: {
									value: gapBtn,
									label: 'gapBtn',
								},
								tablet: {
									value: gapBtnTablet,
									label: 'gapBtnTablet',
								},
								mobile: {
									value: gapBtnMobile,
									label: 'gapBtnMobile',
								},
							} }
							min={ 0 }
							max={ 200 }
							displayUnit={ false }
							setAttributes={ setAttributes }
						/>
						<UAGTextControl
							label={ __( 'Text', 'ultimate-addons-for-gutenberg' ) }
							value={ secondCtaLabel }
							data={ {
								value: secondCtaLabel,
								label: 'secondCtaLabel',
							} }
							setAttributes={ setAttributes }
							onChange={ ( value ) => setAttributes( { secondCtaLabel: value } ) }
						/>
						<UAGTextControl
							label={ __( 'Link', 'ultimate-addons-for-gutenberg' ) }
							enableDynamicContent={ true }
							name="secondCtaLink"
							value={ secondCtaLink }
							setAttributes={ setAttributes }
							data={ {
								value: secondCtaLink,
								label: 'secondCtaLink',
							} }
						/>
						<ToggleControl
							label={ __( 'Open in New Window', 'ultimate-addons-for-gutenberg' ) }
							checked={ secondCtaTarget }
							onChange={ () => setAttributes( { secondCtaTarget: ! secondCtaTarget } ) }
						/>
						<ToggleControl
							label={ __( 'Show Icon', 'ultimate-addons-for-gutenberg' ) }
							checked={ showSecondIcon }
							onChange={ () => setAttributes( { showSecondIcon: ! showSecondIcon } ) }
						/>
						{ showSecondIcon && (
							<UAGIconPicker
								label={ __( 'Icon', 'ultimate-addons-for-gutenberg' ) }
								value={ secondCtaIcon }
								onChange={ ( value ) => setAttributes( { secondCtaIcon: value } ) }
							/>
						) }
						{ showSecondIcon && secondCtaIcon !== '' && (
							<>
								<MultiButtonsControl
									setAttributes={ setAttributes }
									label={ __( 'Icon Position', 'ultimate-addons-for-gutenberg' ) }
									data={ {
										value: secondCtaIconPosition,
										label: 'secondCtaIconPosition',
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
									showIcons={ false }
								/>
								<ResponsiveSlider
									label={ __( 'Icon Spacing', 'ultimate-addons-for-gutenberg' ) }
									data={ {
										desktop: {
											value: secondCtaIconSpace,
											label: 'secondCtaIconSpace',
										},
										tablet: {
											value: secondCtaIconSpaceTablet,
											label: 'secondCtaIconSpaceTablet',
										},
										mobile: {
											value: secondCtaIconSpaceMobile,
											label: 'secondCtaIconSpaceMobile',
										},
									} }
									min={ -50 }
									max={ 50 }
									displayUnit={ false }
									setAttributes={ setAttributes }
								/>
							</>
						) }
					</>
				) }
			</UAGAdvancedPanelBody>
		);
	};

	const secButtonStyleSettings = () => {
		return (
			<UAGAdvancedPanelBody
				title={ __( 'Additional Button', 'ultimate-addons-for-gutenberg' ) }
				initialOpen={ false }
			>
				<TypographyControl
					label={ __( 'Typography', 'ultimate-addons-for-gutenberg' ) }
					attributes={ attributes }
					setAttributes={ setAttributes }
					loadGoogleFonts={ {
						value: secondCtaLoadGoogleFonts,
						label: 'secondCtaLoadGoogleFonts',
					} }
					fontFamily={ {
						value: secondCtaFontFamily,
						label: 'secondCtaFontFamily',
					} }
					fontWeight={ {
						value: secondCtaFontWeight,
						label: 'secondCtaFontWeight',
					} }
					fontStyle={ {
						value: secondCtaFontStyle,
						label: 'secondCtaFontStyle',
					} }
					transform={ {
						value: secondCtaFontTransform,
						label: 'secondCtaFontTransform',
					} }
					decoration={ {
						value: secondCtaFontDecoration,
						label: 'secondCtaFontDecoration',
					} }
					fontSizeType={ {
						value: secondCtaFontSizeType,
						label: 'secondCtaFontSizeType',
					} }
					fontSize={ {
						value: secondCtaFontSize,
						label: 'secondCtaFontSize',
					} }
					fontSizeMobile={ {
						value: secondCtaFontSizeMobile,
						label: 'secondCtaFontSizeMobile',
					} }
					fontSizeTablet={ {
						value: secondCtaFontSizeTablet,
						label: 'secondCtaFontSizeTablet',
					} }
					letterSpacing={ {
						value: secondCtaLetterSpacing,
						label: 'secondCtaLetterSpacing',
					} }
					letterSpacingTablet={ {
						value: secondCtaLetterSpacingTablet,
						label: 'secondCtaLetterSpacingTablet',
					} }
					letterSpacingMobile={ {
						value: secondCtaLetterSpacingMobile,
						label: 'secondCtaLetterSpacingMobile',
					} }
					letterSpacingType={ {
						value: secondCtaLetterSpacingType,
						label: 'secondCtaLetterSpacingType',
					} }
					disableLineHeight={ true }
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
						<>
							<AdvancedPopColorControl
								label={ __( 'Text Color', 'ultimate-addons-for-gutenberg' ) }
								colorValue={ secondCtaColor ? secondCtaColor : '' }
								data={ {
									value: secondCtaColor,
									label: 'secondCtaColor',
								} }
								setAttributes={ setAttributes }
							/>
							<MultiButtonsControl
								setAttributes={ setAttributes }
								label={ __( 'Background Type', 'ultimate-addons-for-gutenberg' ) }
								data={ {
									value: secondCtaBgType,
									label: 'secondCtaBgType',
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
								] }
							/>
							{ secondCtaBgType === 'color' && (
								<AdvancedPopColorControl
									label={ __( 'Background Color', 'ultimate-addons-for-gutenberg' ) }
									colorValue={ secondCtaBackground ? secondCtaBackground : '' }
									data={ {
										value: secondCtaBackground,
										label: 'secondCtaBackground',
									} }
									setAttributes={ setAttributes }
								/>
							) }
						</>
					}
					hover={
						<>
							<AdvancedPopColorControl
								label={ __( 'Text Color', 'ultimate-addons-for-gutenberg' ) }
								colorValue={ secondCtaHoverColor ? secondCtaHoverColor : '' }
								data={ {
									value: secondCtaHoverColor,
									label: 'secondCtaHoverColor',
								} }
								setAttributes={ setAttributes }
							/>
							<MultiButtonsControl
								setAttributes={ setAttributes }
								label={ __( 'Background Type', 'ultimate-addons-for-gutenberg' ) }
								data={ {
									value: secondCtaBgHoverType,
									label: 'secondCtaBgHoverType',
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
								] }
							/>
							{ secondCtaBgHoverType === 'color' && (
								<AdvancedPopColorControl
									label={ __( 'Background Color', 'ultimate-addons-for-gutenberg' ) }
									colorValue={ secondCtaHoverBackground ? secondCtaHoverBackground : '' }
									data={ {
										value: secondCtaHoverBackground,
										label: 'secondCtaHoverBackground',
									} }
									setAttributes={ setAttributes }
								/>
							) }
						</>
					}
					disableBottomSeparator={ false }
				/>
				<ResponsiveBorder
					setAttributes={ setAttributes }
					prefix={ 'secondCta' }
					attributes={ attributes }
					deviceType={ deviceType }
					disabledBorderTitle={ false }
				/>
				<SpacingControl
					{ ...props }
					label={ __( 'Padding', 'ultimate-addons-for-gutenberg' ) }
					valueTop={ {
						value: secondCtaTopPadding,
						label: 'secondCtaTopPadding',
					} }
					valueRight={ {
						value: secondCtaRightPadding,
						label: 'secondCtaRightPadding',
					} }
					valueBottom={ {
						value: secondCtaBottomPadding,
						label: 'secondCtaBottomPadding',
					} }
					valueLeft={ {
						value: secondCtaLeftPadding,
						label: 'secondCtaLeftPadding',
					} }
					valueTopTablet={ {
						value: secondCtaTopTabletPadding,
						label: 'secondCtaTopTabletPadding',
					} }
					valueRightTablet={ {
						value: secondCtaRightTabletPadding,
						label: 'secondCtaRightTabletPadding',
					} }
					valueBottomTablet={ {
						value: secondCtaBottomTabletPadding,
						label: 'secondCtaBottomTabletPadding',
					} }
					valueLeftTablet={ {
						value: secondCtaLeftTabletPadding,
						label: 'secondCtaLeftTabletPadding',
					} }
					valueTopMobile={ {
						value: secondCtaTopMobilePadding,
						label: 'secondCtaTopMobilePadding',
					} }
					valueRightMobile={ {
						value: secondCtaRightMobilePadding,
						label: 'secondCtaRightMobilePadding',
					} }
					valueBottomMobile={ {
						value: secondCtaBottomMobilePadding,
						label: 'secondCtaBottomMobilePadding',
					} }
					valueLeftMobile={ {
						value: secondCtaLeftMobilePadding,
						label: 'secondCtaLeftMobilePadding',
					} }
					unit={ {
						value: secondCtaPaddingUnit,
						label: 'secondCtaPaddingUnit',
					} }
					mUnit={ {
						value: secondCtaMobilePaddingUnit,
						label: 'secondCtaMobilePaddingUnit',
					} }
					tUnit={ {
						value: secondCtaTabletPaddingUnit,
						label: 'secondCtaTabletPaddingUnit',
					} }
					attributes={ attributes }
					setAttributes={ setAttributes }
					link={ {
						value: secondCtaPaddingLink,
						label: 'secondCtaPaddingLink',
					} }
				/>
			</UAGAdvancedPanelBody>
		);
	};

	// CTA settings.
	const ctaSettings = () => {
		return (
			<UAGAdvancedPanelBody title={ __( 'Button', 'ultimate-addons-for-gutenberg' ) } initialOpen={ false }>
				<MultiButtonsControl
					setAttributes={ setAttributes }
					label={ __( 'Type', 'ultimate-addons-for-gutenberg' ) }
					data={ {
						value: ctaType,
						label: 'ctaType',
					} }
					className="uagb-multi-button-alignment-control"
					options={ [
						{
							value: 'none',
							label: __( 'None', 'ultimate-addons-for-gutenberg' ),
						},
						{
							value: 'text',
							label: __( 'Text', 'ultimate-addons-for-gutenberg' ),
						},
						{
							value: 'button',
							label: __( 'Button', 'ultimate-addons-for-gutenberg' ),
						},
						{
							value: 'all',
							label: __( 'Complete Box', 'ultimate-addons-for-gutenberg' ),
						},
					] }
					showIcons={ false }
				/>
				{ 'button' === ctaType && (
					<UAGPresets
						setAttributes={ setAttributes }
						presets={ buttonsPresetsCTA }
						presetInputType="radioImage"
					/>
				) }
				{ stack !== 'desktop' && ctaType !== 'all' && ctaType !== 'none' && (
					<MultiButtonsControl
						setAttributes={ setAttributes }
						label={ __( 'Vertical Alignment', 'ultimate-addons-for-gutenberg' ) }
						data={ {
							value: buttonAlign,
							label: 'buttonAlign',
						} }
						className="uagb-multi-button-alignment-control"
						options={ [
							{
								value: 'top',
								label: __( 'Top', 'ultimate-addons-for-gutenberg' ),
							},
							{
								value: 'middle',
								label: __( 'Middle', 'ultimate-addons-for-gutenberg' ),
							},
						] }
						showIcons={ false }
					/>
				) }
				{ ctaType === 'text' && (
					<>
						<UAGTextControl
							label={ __( 'Text', 'ultimate-addons-for-gutenberg' ) }
							value={ ctaText }
							data={ {
								value: ctaText,
								label: 'ctaText',
							} }
							setAttributes={ setAttributes }
							onChange={ ( value ) => setAttributes( { ctaText: value } ) }
						/>
					</>
				) }
				{ ctaType !== 'none' && (
					<>
						<UAGTextControl
							label={ __( 'Link', 'ultimate-addons-for-gutenberg' ) }
							name="ctaLink"
							enableDynamicContent={ true }
							value={ ctaLink }
							setAttributes={ setAttributes }
							data={ {
								value: ctaLink,
								label: 'ctaLink',
							} }
						/>
						<ToggleControl
							label={ __( 'Open in New Window', 'ultimate-addons-for-gutenberg' ) }
							checked={ ctaTarget }
							onChange={ () => setAttributes( { ctaTarget: ! ctaTarget } ) }
						/>
						<ToggleControl
							label={ __( 'Show Icon', 'ultimate-addons-for-gutenberg' ) }
							checked={ showIcon }
							onChange={ () => setAttributes( { showIcon: ! showIcon } ) }
						/>
					</>
				) }
				{ showIcon && ctaType !== 'all' && ctaType !== 'none' && (
					<>
						<UAGIconPicker
							label={ __( 'Icon', 'ultimate-addons-for-gutenberg' ) }
							value={ ctaIcon }
							onChange={ ( value ) => setAttributes( { ctaIcon: value } ) }
						/>
						{ ctaIcon !== '' && (
							<>
								<MultiButtonsControl
									setAttributes={ setAttributes }
									label={ __( 'Icon Position', 'ultimate-addons-for-gutenberg' ) }
									data={ {
										value: ctaIconPosition,
										label: 'ctaIconPosition',
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
									showIcons={ false }
								/>
								{
									<ResponsiveSlider
										label={ __( 'Icon Spacing', 'ultimate-addons-for-gutenberg' ) }
										data={ {
											desktop: {
												value: ctaIconSpace,
												label: 'ctaIconSpace',
											},
											tablet: {
												value: ctaIconSpaceTablet,
												label: 'ctaIconSpaceTablet',
											},
											mobile: {
												value: ctaIconSpaceMobile,
												label: 'ctaIconSpaceMobile',
											},
										} }
										min={ -50 }
										max={ 50 }
										displayUnit={ false }
										setAttributes={ setAttributes }
									/>
								}
							</>
						) }
					</>
				) }
			</UAGAdvancedPanelBody>
		);
	};

	const ctaStyleSettings = () => {
		return (
			<UAGAdvancedPanelBody title={ __( 'Button', 'ultimate-addons-for-gutenberg' ) } initialOpen={ false }>
				{ ( ctaType === 'text' || ctaType === 'button' ) && (
					<TypographyControl
						label={ __( 'Typography', 'ultimate-addons-for-gutenberg' ) }
						attributes={ attributes }
						setAttributes={ setAttributes }
						loadGoogleFonts={ {
							value: ctaLoadGoogleFonts,
							label: 'ctaLoadGoogleFonts',
						} }
						fontFamily={ {
							value: ctaFontFamily,
							label: 'ctaFontFamily',
						} }
						fontWeight={ {
							value: ctaFontWeight,
							label: 'ctaFontWeight',
						} }
						fontStyle={ {
							value: ctaFontStyle,
							label: 'ctaFontStyle',
						} }
						transform={ {
							value: ctaTransform,
							label: 'ctaTransform',
						} }
						decoration={ {
							value: ctaDecoration,
							label: 'ctaDecoration',
						} }
						fontSizeType={ {
							value: ctaFontSizeType,
							label: 'ctaFontSizeType',
						} }
						fontSize={ {
							value: ctaFontSize,
							label: 'ctaFontSize',
						} }
						fontSizeMobile={ {
							value: ctaFontSizeMobile,
							label: 'ctaFontSizeMobile',
						} }
						fontSizeTablet={ {
							value: ctaFontSizeTablet,
							label: 'ctaFontSizeTablet',
						} }
						letterSpacing={ {
							value: ctaLetterSpacing,
							label: 'ctaLetterSpacing',
						} }
						letterSpacingTablet={ {
							value: ctaLetterSpacingTablet,
							label: 'ctaLetterSpacingTablet',
						} }
						letterSpacingMobile={ {
							value: ctaLetterSpacingMobile,
							label: 'ctaLetterSpacingMobile',
						} }
						letterSpacingType={ {
							value: ctaLetterSpacingType,
							label: 'ctaLetterSpacingType',
						} }
						disableLineHeight={ true }
					/>
				) }
				{ ctaType === 'text' && (
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
						normal={ ctaTextColor() }
						hover={ ctaTxtHoverColor() }
						disableBottomSeparator={ true }
					/>
				) }
				{ ctaType === 'button' && (
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
							normal={ ctaNormalSettings() }
							hover={ ctaHoverSettings() }
							disableBottomSeparator={ false }
						/>
						<ResponsiveBorder
							setAttributes={ setAttributes }
							prefix={ 'btn' }
							attributes={ attributes }
							deviceType={ deviceType }
							disabledBorderTitle={ false }
						/>
						<SpacingControl
							{ ...props }
							label={ __( 'Button Padding', 'ultimate-addons-for-gutenberg' ) }
							valueTop={ {
								value: ctaTopPadding,
								label: 'ctaTopPadding',
							} }
							valueRight={ {
								value: ctaRightPadding,
								label: 'ctaRightPadding',
							} }
							valueBottom={ {
								value: ctaBottomPadding,
								label: 'ctaBottomPadding',
							} }
							valueLeft={ {
								value: ctaLeftPadding,
								label: 'ctaLeftPadding',
							} }
							valueTopTablet={ {
								value: ctaTopPaddingTablet,
								label: 'ctaTopPaddingTablet',
							} }
							valueRightTablet={ {
								value: ctaRightPaddingTablet,
								label: 'ctaRightPaddingTablet',
							} }
							valueBottomTablet={ {
								value: ctaBottomPaddingTablet,
								label: 'ctaBottomPaddingTablet',
							} }
							valueLeftTablet={ {
								value: ctaLeftPaddingTablet,
								label: 'ctaLeftPaddingTablet',
							} }
							valueTopMobile={ {
								value: ctaTopPaddingMobile,
								label: 'ctaTopPaddingMobile',
							} }
							valueRightMobile={ {
								value: ctaRightPaddingMobile,
								label: 'ctaRightPaddingMobile',
							} }
							valueBottomMobile={ {
								value: ctaBottomPaddingMobile,
								label: 'ctaBottomPaddingMobile',
							} }
							valueLeftMobile={ {
								value: ctaLeftPaddingMobile,
								label: 'ctaLeftPaddingMobile',
							} }
							unit={ {
								value: ctaPaddingUnit,
								label: 'ctaPaddingUnit',
							} }
							mUnit={ {
								value: mobileCTAPaddingUnit,
								label: 'mobileCTAPaddingUnit',
							} }
							tUnit={ {
								value: tabletCTAPaddingUnit,
								label: 'tabletCTAPaddingUnit',
							} }
							attributes={ attributes }
							setAttributes={ setAttributes }
							link={ {
								value: ctaPaddingLink,
								label: 'ctaPaddingLink',
							} }
						/>
					</>
				) }
			</UAGAdvancedPanelBody>
		);
	};

	const ctaNormalSettings = () => {
		return (
			<>
				<AdvancedPopColorControl
					label={ __( 'Text Color', 'ultimate-addons-for-gutenberg' ) }
					colorValue={ ctaBtnLinkColor ? ctaBtnLinkColor : '' }
					data={ {
						value: ctaBtnLinkColor,
						label: 'ctaBtnLinkColor',
					} }
					setAttributes={ setAttributes }
				/>
				<MultiButtonsControl
					setAttributes={ setAttributes }
					label={ __( 'Background Type', 'ultimate-addons-for-gutenberg' ) }
					data={ {
						value: ctaBgType,
						label: 'ctaBgType',
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
					] }
				/>
				{ ctaBgType === 'color' && (
					<AdvancedPopColorControl
						label={ __( 'Background Color', 'ultimate-addons-for-gutenberg' ) }
						colorValue={ ctaBgColor ? ctaBgColor : '' }
						data={ {
							value: ctaBgColor,
							label: 'ctaBgColor',
						} }
						setAttributes={ setAttributes }
					/>
				) }
			</>
		);
	};
	const ctaHoverSettings = () => {
		return (
			<>
				<AdvancedPopColorControl
					label={ __( 'Text Color', 'ultimate-addons-for-gutenberg' ) }
					colorValue={ ctaLinkHoverColor ? ctaLinkHoverColor : '' }
					data={ {
						value: ctaLinkHoverColor,
						label: 'ctaLinkHoverColor',
					} }
					setAttributes={ setAttributes }
				/>
				<MultiButtonsControl
					setAttributes={ setAttributes }
					label={ __( 'Background Type', 'ultimate-addons-for-gutenberg' ) }
					data={ {
						value: ctaBgHoverType,
						label: 'ctaBgHoverType',
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
					] }
				/>
				{ ctaBgHoverType === 'color' && (
					<AdvancedPopColorControl
						label={ __( 'Background Color', 'ultimate-addons-for-gutenberg' ) }
						colorValue={ ctaBgHoverColor ? ctaBgHoverColor : '' }
						data={ {
							value: ctaBgHoverColor,
							label: 'ctaBgHoverColor',
						} }
						setAttributes={ setAttributes }
					/>
				) }
			</>
		);
	};

	const ctaTextColor = () => {
		return (
			<>
				<AdvancedPopColorControl
					label={ __( 'Text Color', 'ultimate-addons-for-gutenberg' ) }
					colorValue={ ctaBtnLinkColor ? ctaBtnLinkColor : '' }
					data={ {
						value: ctaBtnLinkColor,
						label: 'ctaBtnLinkColor',
					} }
					setAttributes={ setAttributes }
				/>
			</>
		);
	};
	const ctaTxtHoverColor = () => {
		return (
			<>
				<AdvancedPopColorControl
					label={ __( 'Text Color', 'ultimate-addons-for-gutenberg' ) }
					colorValue={ ctaLinkHoverColor ? ctaLinkHoverColor : '' }
					data={ {
						value: ctaLinkHoverColor,
						label: 'ctaLinkHoverColor',
					} }
					setAttributes={ setAttributes }
				/>
			</>
		);
	};

	const headingSettings = () => {
		return (
			<UAGAdvancedPanelBody title={ __( 'Heading', 'ultimate-addons-for-gutenberg' ) } initialOpen={ true }>
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
					transform={ {
						value: titleTransform,
						label: 'titleTransform',
					} }
					decoration={ {
						value: titleDecoration,
						label: 'titleDecoration',
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
				<AdvancedPopColorControl
					label={ __( 'Color', 'ultimate-addons-for-gutenberg' ) }
					colorValue={ titleColor ? titleColor : '' }
					data={ {
						value: titleColor,
						label: 'titleColor',
					} }
					setAttributes={ setAttributes }
				/>
				<ResponsiveSlider
					label={ __( 'Bottom Margin', 'ultimate-addons-for-gutenberg' ) }
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
					max={ 200 }
					unit={ {
						value: titleSpaceType,
						label: 'titleSpaceType',
					} }
					units={ [
						{
							name: __( 'Pixel', 'ultimate-addons-for-gutenberg' ),
							unitValue: 'px',
						},
					] }
					setAttributes={ setAttributes }
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
						value: descLoadGoogleFonts,
						label: 'descLoadGoogleFonts',
					} }
					fontFamily={ {
						value: descFontFamily,
						label: 'descFontFamily',
					} }
					fontWeight={ {
						value: descFontWeight,
						label: 'descFontWeight',
					} }
					fontStyle={ {
						value: descFontStyle,
						label: 'descFontStyle',
					} }
					transform={ {
						value: descTransform,
						label: 'descTransform',
					} }
					decoration={ {
						value: descDecoration,
						label: 'descDecoration',
					} }
					fontSizeType={ {
						value: descFontSizeType,
						label: 'descFontSizeType',
					} }
					fontSize={ {
						value: descFontSize,
						label: 'descFontSize',
					} }
					fontSizeMobile={ {
						value: descFontSizeMobile,
						label: 'descFontSizeMobile',
					} }
					fontSizeTablet={ {
						value: descFontSizeTablet,
						label: 'descFontSizeTablet',
					} }
					lineHeightType={ {
						value: descLineHeightType,
						label: 'descLineHeightType',
					} }
					lineHeight={ {
						value: descLineHeight,
						label: 'descLineHeight',
					} }
					lineHeightMobile={ {
						value: descLineHeightMobile,
						label: 'descLineHeightMobile',
					} }
					lineHeightTablet={ {
						value: descLineHeightTablet,
						label: 'descLineHeightTablet',
					} }
					letterSpacing={ {
						value: descLetterSpacing,
						label: 'descLetterSpacing',
					} }
					letterSpacingTablet={ {
						value: descLetterSpacingTablet,
						label: 'descLetterSpacingTablet',
					} }
					letterSpacingMobile={ {
						value: descLetterSpacingMobile,
						label: 'descLetterSpacingMobile',
					} }
					letterSpacingType={ {
						value: descLetterSpacingType,
						label: 'descLetterSpacingType',
					} }
				/>
				<AdvancedPopColorControl
					label={ __( 'Color', 'ultimate-addons-for-gutenberg' ) }
					colorValue={ descColor ? descColor : '' }
					data={ {
						value: descColor,
						label: 'descColor',
					} }
					setAttributes={ setAttributes }
				/>
				<ResponsiveSlider
					label={ __( 'Bottom Margin', 'ultimate-addons-for-gutenberg' ) }
					data={ {
						desktop: {
							value: descSpace,
							label: 'descSpace',
						},
						tablet: {
							value: descSpaceTablet,
							label: 'descSpaceTablet',
						},
						mobile: {
							value: descSpaceMobile,
							label: 'descSpaceMobile',
						},
					} }
					min={ 0 }
					max={ 200 }
					unit={ {
						value: descSpaceType,
						label: 'descSpaceType',
					} }
					units={ [
						{
							name: __( 'Pixel', 'ultimate-addons-for-gutenberg' ),
							unitValue: 'px',
						},
					] }
					setAttributes={ setAttributes }
				/>
			</UAGAdvancedPanelBody>
		);
	};
	// Margin Settings.
	const marginSettings = () => {
		return (
			<UAGAdvancedPanelBody title={ __( 'Spacing', 'ultimate-addons-for-gutenberg' ) } initialOpen={ false }>
				{ ( ( 'right' !== textAlign && 'none' === stack && 'Desktop' === deviceType ) ||
					( 'right' !== textAlignTablet && 'Tablet' === deviceType && 'none' === stack ) ||
					( 'right' !== textAlignMobile && 'Mobile' === deviceType && 'none' === stack ) ) && (
					<ResponsiveSlider
						label={ __( 'Content And Buttons Gap', 'ultimate-addons-for-gutenberg' ) }
						data={ {
							desktop: {
								value: buttonRightSpace,
								label: 'buttonRightSpace',
							},
							tablet: {
								value: buttonRightSpaceTablet,
								label: 'buttonRightSpaceTablet',
							},
							mobile: {
								value: buttonRightSpaceMobile,
								label: 'buttonRightSpaceMobile',
							},
						} }
						min={ 0 }
						max={ 200 }
						unit={ {
							value: buttonRightSpaceType,
							label: 'buttonRightSpaceType',
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
				<SpacingControl
					{ ...props }
					label={ __( 'Padding', 'ultimate-addons-for-gutenberg' ) }
					valueTop={ {
						value: overallBlockTopPadding,
						label: 'overallBlockTopPadding',
					} }
					valueRight={ {
						value: overallBlockRightPadding,
						label: 'overallBlockRightPadding',
					} }
					valueBottom={ {
						value: overallBlockBottomPadding,
						label: 'overallBlockBottomPadding',
					} }
					valueLeft={ {
						value: overallBlockLeftPadding,
						label: 'overallBlockLeftPadding',
					} }
					valueTopTablet={ {
						value: overallBlockTopTabletPadding,
						label: 'overallBlockTopTabletPadding',
					} }
					valueRightTablet={ {
						value: overallBlockRightTabletPadding,
						label: 'overallBlockRightTabletPadding',
					} }
					valueBottomTablet={ {
						value: overallBlockBottomTabletPadding,
						label: 'overallBlockBottomTabletPadding',
					} }
					valueLeftTablet={ {
						value: overallBlockLeftTabletPadding,
						label: 'overallBlockLeftTabletPadding',
					} }
					valueTopMobile={ {
						value: overallBlockTopMobilePadding,
						label: 'overallBlockTopMobilePadding',
					} }
					valueRightMobile={ {
						value: overallBlockRightMobilePadding,
						label: 'overallBlockRightMobilePadding',
					} }
					valueBottomMobile={ {
						value: overallBlockBottomMobilePadding,
						label: 'overallBlockBottomMobilePadding',
					} }
					valueLeftMobile={ {
						value: overallBlockLeftMobilePadding,
						label: 'overallBlockLeftMobilePadding',
					} }
					unit={ {
						value: overallBlockPaddingUnit,
						label: 'overallBlockPaddingUnit',
					} }
					mUnit={ {
						value: overallBlockMobilePaddingUnit,
						label: 'overallBlockMobilePaddingUnit',
					} }
					tUnit={ {
						value: overallBlockTabletPaddingUnit,
						label: 'overallBlockTabletPaddingUnit',
					} }
					attributes={ attributes }
					setAttributes={ setAttributes }
					link={ {
						value: overallBlockPaddingLink,
						label: 'overallBlockPaddingLink',
					} }
				/>
				<SpacingControl
					{ ...props }
					label={ __( 'Margin', 'ultimate-addons-for-gutenberg' ) }
					valueTop={ {
						value: overallBlockTopMargin,
						label: 'overallBlockTopMargin',
					} }
					valueRight={ {
						value: overallBlockRightMargin,
						label: 'overallBlockRightMargin',
					} }
					valueBottom={ {
						value: overallBlockBottomMargin,
						label: 'overallBlockBottomMargin',
					} }
					valueLeft={ {
						value: overallBlockLeftMargin,
						label: 'overallBlockLeftMargin',
					} }
					valueTopTablet={ {
						value: overallBlockTopTabletMargin,
						label: 'overallBlockTopTabletMargin',
					} }
					valueRightTablet={ {
						value: overallBlockRightTabletMargin,
						label: 'overallBlockRightTabletMargin',
					} }
					valueBottomTablet={ {
						value: overallBlockBottomTabletMargin,
						label: 'overallBlockBottomTabletMargin',
					} }
					valueLeftTablet={ {
						value: overallBlockLeftTabletMargin,
						label: 'overallBlockLeftTabletMargin',
					} }
					valueTopMobile={ {
						value: overallBlockTopMobileMargin,
						label: 'overallBlockTopMobileMargin',
					} }
					valueRightMobile={ {
						value: overallBlockRightMobileMargin,
						label: 'overallBlockRightMobileMargin',
					} }
					valueBottomMobile={ {
						value: overallBlockBottomMobileMargin,
						label: 'overallBlockBottomMobileMargin',
					} }
					valueLeftMobile={ {
						value: overallBlockLeftMobileMargin,
						label: 'overallBlockLeftMobileMargin',
					} }
					unit={ {
						value: overallBlockMarginUnit,
						label: 'overallBlockMarginUnit',
					} }
					mUnit={ {
						value: overallBlockMobileMarginUnit,
						label: 'overallBlockMobileMarginUnit',
					} }
					tUnit={ {
						value: overallBlockTabletMarginUnit,
						label: 'overallBlockTabletMarginUnit',
					} }
					attributes={ attributes }
					setAttributes={ setAttributes }
					link={ {
						value: overallBlockMarginLink,
						label: 'overallBlockMarginLink',
					} }
				/>
			</UAGAdvancedPanelBody>
		);
	};
	const layouts = () => {
		return (
			<UAGAdvancedPanelBody title={ __( 'Layout', 'ultimate-addons-for-gutenberg' ) } initialOpen={ false }>
				<MultiButtonsControl
					setAttributes={ setAttributes }
					label={ __( 'Overall Alignment', 'ultimate-addons-for-gutenberg' ) }
					data={ {
						desktop: {
							value: textAlign,
							label: 'textAlign',
						},
						tablet: {
							value: textAlignTablet,
							label: 'textAlignTablet',
						},
						mobile: {
							value: textAlignMobile,
							label: 'textAlignMobile',
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
					] }
					showIcons={ true }
					responsive={ true }
				/>
				<MultiButtonsControl
					setAttributes={ setAttributes }
					label={ __( 'Stack On', 'ultimate-addons-for-gutenberg' ) }
					data={ {
						value: stack,
						label: 'stack',
					} }
					className="uagb-multi-button-alignment-control"
					options={ [
						{
							value: 'none',
							label: __( 'None', 'ultimate-addons-for-gutenberg' ),
						},
						{
							value: 'desktop',
							label: __( 'Desktop', 'ultimate-addons-for-gutenberg' ),
						},
						{
							value: 'tablet',
							label: __( 'Tablet', 'ultimate-addons-for-gutenberg' ),
						},
						{
							value: 'mobile',
							label: __( 'Mobile', 'ultimate-addons-for-gutenberg' ),
						},
					] }
					showIcons={ false }
					help={ __(
						'Note: Choose on what breakpoint the CTA button will stack.',
						'ultimate-addons-for-gutenberg'
					) }
				/>
				<MultiButtonsControl
					setAttributes={ setAttributes }
					label={ __( 'Heading Tag', 'ultimate-addons-for-gutenberg' ) }
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
					] }
				/>
				{ ctaType !== 'all' && ctaType !== 'none' && (
					<>
						{ ( ctaType === 'text' || ctaType === 'button' ) && (
							<>
								<ResponsiveSlider
									label={ __( 'Content Width', 'ultimate-addons-for-gutenberg' ) }
									data={ {
										desktop: {
											value: contentWidth,
											label: 'contentWidth',
										},
										tablet: {
											value: contentWidthTablet,
											label: 'contentWidthTablet',
										},
										mobile: {
											value: contentWidthMobile,
											label: 'contentWidthMobile',
										},
									} }
									min={ 0 }
									max={ 100 }
									unit={ {
										value: contentWidthType,
										label: 'contentWidthType',
									} }
									units={ [
										{
											name: __( '%', 'ultimate-addons-for-gutenberg' ),
											unitValue: '%',
										},
									] }
									setAttributes={ setAttributes }
								/>
							</>
						) }
					</>
				) }
				{ ctaType !== 'all' && ctaType !== 'none' && ctaType !== 'text' && (
					<>
						{ enabledSecondCtaButton && (
							<>
								<ResponsiveSlider
									label={ __( 'Buttons Width', 'ultimate-addons-for-gutenberg' ) }
									data={ {
										desktop: {
											value: btncontentWidth,
											label: 'btncontentWidth',
										},
										tablet: {
											value: btncontentWidthTablet,
											label: 'btncontentWidthTablet',
										},
										mobile: {
											value: btncontentWidthMobile,
											label: 'btncontentWidthMobile',
										},
									} }
									min={ 20 }
									max={ 100 }
									unit={ {
										value: btncontentWidthType,
										label: 'btncontentWidthType',
									} }
									units={ [
										{
											name: __( '%', 'ultimate-addons-for-gutenberg' ),
											unitValue: '%',
										},
									] }
									setAttributes={ setAttributes }
								/>
							</>
						) }
					</>
				) }
			</UAGAdvancedPanelBody>
		);
	};

	const presetSettings = () => {
		return (
			<UAGAdvancedPanelBody title={ __( 'Presets', 'ultimate-addons-for-gutenberg' ) } initialOpen={ true }>
				<UAGPresets setAttributes={ setAttributes } presets={ ctaPresets } presetInputType="radioImage" />
			</UAGAdvancedPanelBody>
		);
	};

	return (
		<>
			<InspectorControls>
				<InspectorTabs>
					<InspectorTab { ...UAGTabs.general }>
						{ presetSettings() }
						{ layouts() }
						{ ctaSettings() }
						{ 'button' === ctaType && secBtnSettings() }
					</InspectorTab>
					<InspectorTab { ...UAGTabs.style }>
						{ headingSettings() }
						{ descriptionSettings() }
						{ ctaType !== 'all' && ctaType !== 'none' && ctaStyleSettings() }
						{ 'button' === ctaType && enabledSecondCtaButton && secButtonStyleSettings() }
						{ marginSettings() }
					</InspectorTab>
					<InspectorTab { ...UAGTabs.advance } parentProps={ props }></InspectorTab>
				</InspectorTabs>
			</InspectorControls>
		</>
	);
};

export default memo( Settings );
