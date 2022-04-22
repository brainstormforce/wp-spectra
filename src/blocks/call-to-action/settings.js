import UAGIconPicker from '@Components/icon-picker';
import { __ } from '@wordpress/i18n';
import React, { Suspense } from 'react';
import lazyLoader from '@Controls/lazy-loader';
import TypographyControl from '@Components/typography';
import WebfontLoader from '@Components/typography/fontloader';
import {
	AlignmentToolbar,
	BlockControls,
	InspectorControls,
} from '@wordpress/block-editor';
import AdvancedPopColorControl from '@Components/color-control/advanced-pop-color-control.js';
import InspectorTabs from '@Components/inspector-tabs/InspectorTabs.js';
import InspectorTab, {
	UAGTabs,
} from '@Components/inspector-tabs/InspectorTab.js';
import Range from '@Components/range/Range.js';
import MultiButtonsControl from '@Components/multi-buttons-control';
import Border from '@Components/border';
import SpacingControl from '@Components/spacing-control';
import UAGTabsControl from '@Components/tabs';
import presets from './presets';
import UAGPresets from '@Components/presets';
import renderSVG from '@Controls/renderIcon';
import { ToggleControl, TextControl, Icon } from '@wordpress/components';
import UAGAdvancedPanelBody from '@Components/advanced-panel-body';
import ResponsiveSlider from '@Components/responsive-slider';

const Settings = ( props ) => {
	props = props.parentProps;
	const { setAttributes, attributes } = props;

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
		descSpace,
		ctaPosition,
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
		ctaBtnLinkColor,
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
		ctaBorderStyle,
		ctaBorderColor,
		ctaBorderhoverColor,
		ctaBorderWidth,
		ctaBorderRadius,
		stack,
		ctaLeftSpace,
		ctaRightSpace,
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
		secondCtaLabel,
		secondCtaLink,
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
		secondCtaBorderWidth,
		secondCtaBorderRadius,
		secondCtaBorderStyle,
		secondCtaBorderColor,
		secondCtaBorderHColor,
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
		gap,
	} = attributes;

	let loadCtaGoogleFonts;
	let loadTitleGoogleFonts;
	let loadDescGoogleFonts;
	let loadSecCtaGoogleFonts;

	if ( secondCtaLoadGoogleFonts === true ) {
		const secondCtaBtnconfig = {
			google: {
				families: [
					secondCtaFontFamily + ( secondCtaFontWeight ? ':' + secondCtaFontWeight : '' ),
				],
			},
		};

		loadSecCtaGoogleFonts = (
			<WebfontLoader config={ secondCtaBtnconfig }></WebfontLoader>
		);
	}

	if ( ctaLoadGoogleFonts === true ) {
		const ctaconfig = {
			google: {
				families: [
					ctaFontFamily +
						( ctaFontWeight ? ':' + ctaFontWeight : '' ),
				],
			},
		};

		loadCtaGoogleFonts = (
			<WebfontLoader config={ ctaconfig }></WebfontLoader>
		);
	}

	if ( titleLoadGoogleFonts === true ) {
		const titleconfig = {
			google: {
				families: [
					titleFontFamily +
						( titleFontWeight ? ':' + titleFontWeight : '' ),
				],
			},
		};

		loadTitleGoogleFonts = (
			<WebfontLoader config={ titleconfig }></WebfontLoader>
		);
	}

	if ( descLoadGoogleFonts === true ) {
		const descconfig = {
			google: {
				families: [
					descFontFamily +
						( descFontWeight ? ':' + descFontWeight : '' ),
				],
			},
		};

		loadDescGoogleFonts = (
			<WebfontLoader config={ descconfig }></WebfontLoader>
		);
	}

	const secBtnSettings = () => {
		return (
			<UAGAdvancedPanelBody
				title={ __( 'Additional Button', 'ultimate-addons-for-gutenberg' ) }
				initialOpen={ false }
			>
				<ToggleControl
					label={ __(
						'Enable Additional Button',
						'ultimate-addons-for-gutenberg'
					) }
					checked={ enabledSecondCtaButton }
					onChange={ () =>
						setAttributes( { enabledSecondCtaButton: ! enabledSecondCtaButton } )
					}
				/>
				{ enabledSecondCtaButton && (
				<>
				<TextControl
					label={ __(
						'Text',
						'ultimate-addons-for-gutenberg'
					) }
					value={ secondCtaLabel }
					onChange={ ( value ) =>
						setAttributes( { secondCtaLabel: value } )
					}
				/>
				<TextControl
					label={ __(
						'Link',
						'ultimate-addons-for-gutenberg'
					) }
					value={ secondCtaLink }
					onChange={ ( value ) =>
						setAttributes( { secondCtaLink: value } )
					}
				/>
				<ToggleControl
					label={ __(
						'Open in new window',
						'ultimate-addons-for-gutenberg'
					) }
					checked={ secondCtaTarget }
					onChange={ () =>
						setAttributes( { secondCtaTarget: ! secondCtaTarget } )
					}
				/>
				<UAGIconPicker
					label={ __(
						'Icon',
						'ultimate-addons-for-gutenberg'
					) }
					value={ secondCtaIcon }
					onChange={ ( value ) =>
						setAttributes( { secondCtaIcon: value } )
					}
				/>
				{ secondCtaIcon !== '' && (
				<>
				<MultiButtonsControl
					setAttributes={ setAttributes }
					label={ __(
						'Icon Position',
						'ultimate-addons-for-gutenberg'
					) }
					data={ {
						value: secondCtaIconPosition,
						label: 'secondCtaIconPosition',
					} }
					className="uagb-multi-button-alignment-control"
					options={ [
						{
							value: 'before',
							label: __(
								'Before Text',
								'ultimate-addons-for-gutenberg'
							),
							tooltip: __(
								'Before Text',
								'ultimate-addons-for-gutenberg'
							),
						},
						{
							value: 'after',
							label: __(
								'After Text',
								'ultimate-addons-for-gutenberg'
							),
							tooltip: __(
								'After Text',
								'ultimate-addons-for-gutenberg'
							),
						},
					] }
					showIcons={ false }
				/>
				<Range
					label={ __(
						'Icon Spacing',
						'ultimate-addons-for-gutenberg'
					) }
					setAttributes={ setAttributes }
					value={ secondCtaIconSpace }
					onChange={ ( value ) =>
						setAttributes( {
							secondCtaIconSpace: value,
						} )
					}
					min={ 0 }
					max={ 50 }
					displayUnit={ false }
				/>
				</>
				)}
				</>
				)}
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
					label={ __(
						'Typography',
						'ultimate-addons-for-gutenberg'
					) }
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
					disableLineHeight={ true }
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
							name: 'hover',
							title: __(
								'Hover',
								'ultimate-addons-for-gutenberg'
							),
						},
					] }
					normal={
						<>
							<AdvancedPopColorControl
								label={ __(
									'Text Color',
									'ultimate-addons-for-gutenberg'
								) }
								colorValue={ secondCtaColor ? secondCtaColor : '' }
								onColorChange={ ( value ) =>
									setAttributes( { secondCtaColor: value } )
								}
							/>
							<AdvancedPopColorControl
								label={ __(
									'Background Color',
									'ultimate-addons-for-gutenberg'
								) }
								colorValue={ secondCtaBackground ? secondCtaBackground : '' }
								onColorChange={ ( value ) =>
									setAttributes( { secondCtaBackground: value } )
								}
							/>
						</>
					 }
					hover={
						<>
							<AdvancedPopColorControl
								label={ __(
									'Text Color',
									'ultimate-addons-for-gutenberg'
								) }
								colorValue={ secondCtaHoverColor ? secondCtaHoverColor : '' }
								onColorChange={ ( value ) =>
									setAttributes( { secondCtaHoverColor: value } )
								}
							/>
							<AdvancedPopColorControl
								label={ __(
									'Background Color',
									'ultimate-addons-for-gutenberg'
								) }
								colorValue={ secondCtaHoverBackground ? secondCtaHoverBackground : '' }
								onColorChange={ ( value ) =>
									setAttributes( { secondCtaHoverBackground: value } )
								}
							/>
						</>
					}
					disableBottomSeparator={ false }
				/>
				<Border
					disabledBorderTitle= {false}
					setAttributes={ setAttributes }
					borderStyle={ {
						value: secondCtaBorderStyle,
						label: 'secondCtaBorderStyle',
						title: __( 'Style', 'ultimate-addons-for-gutenberg' ),
					} }
					borderWidth={ {
						value: secondCtaBorderWidth,
						label: 'secondCtaBorderWidth',
						title: __( 'Width', 'ultimate-addons-for-gutenberg' ),
					} }
					borderRadius={ {
						value: secondCtaBorderRadius,
						label: 'secondCtaBorderRadius',
						title: __( 'Radius', 'ultimate-addons-for-gutenberg' ),
					} }
					borderColor={ {
						value: secondCtaBorderColor,
						label: 'secondCtaBorderColor',
						title: __( 'Color', 'ultimate-addons-for-gutenberg' ),
					} }
					borderHoverColor={ {
						value: secondCtaBorderHColor,
						label: 'secondCtaBorderHColor',
						title: __(
							'Hover Color',
							'ultimate-addons-for-gutenberg'
						),
					} }
					disableBottomSeparator={ true }
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
			<UAGAdvancedPanelBody
				title={ __( 'Button', 'ultimate-addons-for-gutenberg' ) }
				initialOpen={ false }
			>
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
							label: __(
								'None',
								'ultimate-addons-for-gutenberg'
							),
							tooltip: __(
								'None',
								'ultimate-addons-for-gutenberg'
							),
						},
						{
							value: 'text',
							label: __(
								'Text',
								'ultimate-addons-for-gutenberg'
							),
							tooltip: __(
								'Text',
								'ultimate-addons-for-gutenberg'
							),
						},
						{
							value: 'button',
							label: __(
								'Button',
								'ultimate-addons-for-gutenberg'
							),
							tooltip: __(
								'Button',
								'ultimate-addons-for-gutenberg'
							),
						},
						{
							value: 'all',
							label: __(
								'Complete Box',
								'ultimate-addons-for-gutenberg'
							),
							tooltip: __(
								'Complete Box',
								'ultimate-addons-for-gutenberg'
							),
						},
					] }
					showIcons={ false }
				/>
				{ ( ctaType === 'text' || ctaType === 'button' ) && (
					<>
						<TextControl
							label={ __(
								'Text',
								'ultimate-addons-for-gutenberg'
							) }
							value={ ctaText }
							onChange={ ( value ) =>
								setAttributes( { ctaText: value } )
							}
						/>
					</>
				) }
				{ ctaType !== 'none' && (
					<>
						<TextControl
							label={ __(
								'Link',
								'ultimate-addons-for-gutenberg'
							) }
							value={ ctaLink }
							onChange={ ( value ) =>
								setAttributes( { ctaLink: value } )
							}
						/>
						<ToggleControl
							label={ __(
								'Open in new window',
								'ultimate-addons-for-gutenberg'
							) }
							checked={ ctaTarget }
							onChange={ () =>
								setAttributes( { ctaTarget: ! ctaTarget } )
							}
						/>
					</>
				) }
				{ ctaType !== 'all' && ctaType !== 'none' && (
					<>
						<UAGIconPicker
							label={ __(
								'Icon',
								'ultimate-addons-for-gutenberg'
							) }
							value={ ctaIcon }
							onChange={ ( value ) =>
								setAttributes( { ctaIcon: value } )
							}
						/>
						{ ctaIcon !== '' && (
							<>
								<MultiButtonsControl
									setAttributes={ setAttributes }
									label={ __(
										'Icon Position',
										'ultimate-addons-for-gutenberg'
									) }
									data={ {
										value: ctaIconPosition,
										label: 'ctaIconPosition',
									} }
									className="uagb-multi-button-alignment-control"
									options={ [
										{
											value: 'before',
											label: __(
												'Before Text',
												'ultimate-addons-for-gutenberg'
											),
											tooltip: __(
												'Before Text',
												'ultimate-addons-for-gutenberg'
											),
										},
										{
											value: 'after',
											label: __(
												'After Text',
												'ultimate-addons-for-gutenberg'
											),
											tooltip: __(
												'After Text',
												'ultimate-addons-for-gutenberg'
											),
										},
									] }
									showIcons={ false }
								/>
								{
									<ResponsiveSlider
										label={ __(
											'Icon Spacing',
											'ultimate-addons-for-gutenberg'
										) }
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
										min={ 0 }
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
			<UAGAdvancedPanelBody
				title={ __( 'Button', 'ultimate-addons-for-gutenberg' ) }
				initialOpen={ false }
			>
				{ ( ctaType === 'text' || ctaType === 'button' ) && (
					<TypographyControl
						label={ __(
							'Typography',
							'ultimate-addons-for-gutenberg'
						) }
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
						disableLineHeight={ true }
					/>
				) }
				{ ctaType === 'text' && (
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
							normal={ ctaNormalSettings() }
							hover={ ctaHoverSettings() }
							disableBottomSeparator={ false }
						/>
						<Border
							disabledBorderTitle= { false }
							setAttributes={ setAttributes }
							borderStyle={ {
								value: ctaBorderStyle,
								label: 'ctaBorderStyle',
								title: __( 'Style', 'ultimate-addons-for-gutenberg' ),
							} }
							borderWidth={ {
								value: ctaBorderWidth,
								label: 'ctaBorderWidth',
								title: __( 'Width', 'ultimate-addons-for-gutenberg' ),
							} }
							borderRadius={ {
								value: ctaBorderRadius,
								label: 'ctaBorderRadius',
								title: __( 'Radius', 'ultimate-addons-for-gutenberg' ),
							} }
							borderColor={ {
								value: ctaBorderColor,
								label: 'ctaBorderColor',
								title: __( 'Color', 'ultimate-addons-for-gutenberg' ),
							} }
							borderHoverColor={ {
								value: ctaBorderhoverColor,
								label: 'ctaBorderhoverColor',
								title: __(
									'Hover Color',
									'ultimate-addons-for-gutenberg'
								),
							} }
							disableBottomSeparator={ true }
						/>
						<SpacingControl
							{ ...props }
							label={ __(
								'Button Padding',
								'ultimate-addons-for-gutenberg'
							) }
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
					label={ __(
						'Text Color',
						'ultimate-addons-for-gutenberg'
					) }
					colorValue={ ctaBtnLinkColor ? ctaBtnLinkColor : '' }
					onColorChange={ ( value ) =>
						setAttributes( { ctaBtnLinkColor: value } )
					}
				/>
				<AdvancedPopColorControl
					label={ __(
						'Background Color',
						'ultimate-addons-for-gutenberg'
					) }
					colorValue={ ctaBgColor ? ctaBgColor : '' }
					onColorChange={ ( value ) =>
						setAttributes( { ctaBgColor: value } )
					}
				/>
			</>
		);
	};
	const ctaHoverSettings = () => {
		return (
			<>
				<AdvancedPopColorControl
					label={ __(
						'Text Color',
						'ultimate-addons-for-gutenberg'
					) }
					colorValue={ ctaLinkHoverColor ? ctaLinkHoverColor : '' }
					onColorChange={ ( value ) =>
						setAttributes( { ctaLinkHoverColor: value } )
					}
				/>
				<AdvancedPopColorControl
					label={ __(
						'Background Color',
						'ultimate-addons-for-gutenberg'
					) }
					colorValue={ ctaBgHoverColor ? ctaBgHoverColor : '' }
					onColorChange={ ( value ) =>
						setAttributes( { ctaBgHoverColor: value } )
					}
				/>
			</>
		);
	};

	const ctaTextColor = () => {
		return (
			<>
				<AdvancedPopColorControl
					label={ __(
						'Text Color',
						'ultimate-addons-for-gutenberg'
					) }
					colorValue={ ctaBtnLinkColor ? ctaBtnLinkColor : '' }
					onColorChange={ ( value ) =>
						setAttributes( { ctaBtnLinkColor: value } )
					}
				/>
			</>
		);
	};
	const ctaTxtHoverColor = () => {
		return (
			<>
				<AdvancedPopColorControl
					label={ __(
						'Text Color',
						'ultimate-addons-for-gutenberg'
					) }
					colorValue={ ctaLinkHoverColor ? ctaLinkHoverColor : '' }
					onColorChange={ ( value ) =>
						setAttributes( { ctaLinkHoverColor: value } )
					}
				/>
			</>
		);
	};

	const headingSettings = () => {
		return (
			<UAGAdvancedPanelBody
				title={ __( 'Heading', 'ultimate-addons-for-gutenberg' ) }
				initialOpen={ false }
			>
				<TypographyControl
					label={ __(
						'Typography',
						'ultimate-addons-for-gutenberg'
					) }
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
				/>
				<AdvancedPopColorControl
					label={ __( 'Color', 'ultimate-addons-for-gutenberg' ) }
					colorValue={ titleColor ? titleColor : '' }
					onColorChange={ ( value ) =>
						setAttributes( { titleColor: value } )
					}
				/>
			</UAGAdvancedPanelBody>
		);
	};
	const descriptionSettings = () => {
		return (
			<UAGAdvancedPanelBody
				title={ __( 'Description', 'ultimate-addons-for-gutenberg' ) }
				initialOpen={ false }
			>
				<TypographyControl
					label={ __(
						'Typography',
						'ultimate-addons-for-gutenberg'
					) }
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
				/>
				<AdvancedPopColorControl
					label={ __( 'Color', 'ultimate-addons-for-gutenberg' ) }
					colorValue={ descColor ? descColor : '' }
					onColorChange={ ( value ) =>
						setAttributes( { descColor: value } )
					}
				/>
			</UAGAdvancedPanelBody>
		);
	};
	// Margin Settings.
	const marginSettings = () => {
		return (
			<UAGAdvancedPanelBody
				title={ __( 'Spacing', 'ultimate-addons-for-gutenberg' ) }
				initialOpen={ false }
			>
				<Range
					label={ __(
						'Heading Bottom Margin (px)',
						'ultimate-addons-for-gutenberg'
					) }
					setAttributes={ setAttributes }
					value={ titleSpace }
					onChange={ ( value ) =>
						setAttributes( { titleSpace: value } )
					}
					min={ 0 }
					max={ 200 }
					displayUnit={ false }
				/>
				{ ctaPosition !== 'right' &&
					<Range
						label={ __(
							'Description Bottom Margin (px)',
							'ultimate-addons-for-gutenberg'
						) }
						setAttributes={ setAttributes }
						value={ descSpace }
						onChange={ ( value ) =>
							setAttributes( { descSpace: value } )
						}
						min={ 0 }
						max={ 200 }
						displayUnit={ false }
					/>
				}
				{ textAlign === 'left' && ctaPosition === 'right' && (
					<Range
						label={ __(
							'Content Left Margin (px)',
							'ultimate-addons-for-gutenberg'
						) }
						setAttributes={ setAttributes }
						value={ ctaLeftSpace }
						onChange={ ( value ) =>
							setAttributes( { ctaLeftSpace: value } )
						}
						min={ 0 }
						max={ 200 }
						displayUnit={ false }
					/>
				) }
				{ textAlign === 'right' && ctaPosition === 'right' && (
					<Range
						label={ __(
							'Content Right Margin (px)',
							'ultimate-addons-for-gutenberg'
						) }
						setAttributes={ setAttributes }
						value={ ctaRightSpace }
						onChange={ ( value ) =>
							setAttributes( { ctaRightSpace: value } )
						}
						min={ 0 }
						max={ 200 }
						displayUnit={ false }
					/>
				) }
				{ enabledSecondCtaButton && (
				<Range
					label={ __(
						'Gap between buttons (px)',
						'ultimate-addons-for-gutenberg'
					) }
					setAttributes={ setAttributes }
					value={ gap }
					onChange={ ( value ) =>
						setAttributes( { gap: value } )
					}
					min={ 0 }
					max={ 200 }
					displayUnit={ false }
				/>
				)}
			</UAGAdvancedPanelBody>
		);
	};
	const layouts = () => {
		return (
			<UAGAdvancedPanelBody
				title={ __( 'Layout', 'ultimate-addons-for-gutenberg' ) }
				initialOpen={ false }
			>
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
					] }
					showIcons={ true }
				/>
				<MultiButtonsControl
					setAttributes={ setAttributes }
					label={ __(
						'Heading Tag',
						'ultimate-addons-for-gutenberg'
					) }
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
						<MultiButtonsControl
							setAttributes={ setAttributes }
							label={ __(
								'Layout',
								'ultimate-addons-for-gutenberg'
							) }
							data={ {
								value: ctaPosition,
								label: 'ctaPosition',
							} }
							className="uagb-multi-button-alignment-control"
							options={ [
								{
									value: 'right',
									label: __(
										'Inline',
										'ultimate-addons-for-gutenberg'
									),
									tooltip: __(
										'Inline',
										'ultimate-addons-for-gutenberg'
									),
								},
								{
									value: 'below-title',
									label: __(
										'Stack',
										'ultimate-addons-for-gutenberg'
									),
									tooltip: __(
										'Stack',
										'ultimate-addons-for-gutenberg'
									),
								},
							] }
							showIcons={ false }
						/>
						{ ( ctaType === 'text' || ctaType === 'button' ) && (
							<>
								{ ctaPosition === 'right' && (
									<ResponsiveSlider
										label={ __(
											'Content Width (%)',
											'ultimate-addons-for-gutenberg'
										) }
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
										displayUnit={ false }
										setAttributes={ setAttributes }
									/>
								) }
							</>
						) }
						{ ctaPosition && ctaPosition === 'right' && (
							<>
								<MultiButtonsControl
									setAttributes={ setAttributes }
									label={ __(
										'Vertical Alignment',
										'ultimate-addons-for-gutenberg'
									) }
									data={ {
										value: buttonAlign,
										label: 'buttonAlign',
									} }
									className="uagb-multi-button-alignment-control"
									options={ [
										{
											value: 'top',
											label: __(
												'Top',
												'ultimate-addons-for-gutenberg'
											),
											tooltip: __(
												'Top',
												'ultimate-addons-for-gutenberg'
											),
										},
										{
											value: 'middle',
											label: __(
												'Middle',
												'ultimate-addons-for-gutenberg'
											),
											tooltip: __(
												'Middle',
												'ultimate-addons-for-gutenberg'
											),
										},
									] }
									showIcons={ false }
								/>
								<MultiButtonsControl
									setAttributes={ setAttributes }
									label={ __(
										'Stack On',
										'ultimate-addons-for-gutenberg'
									) }
									data={ {
										value: stack,
										label: 'stack',
									} }
									className="uagb-multi-button-alignment-control"
									options={ [
										{
											value: 'none',
											label: __(
												'None',
												'ultimate-addons-for-gutenberg'
											),
											tooltip: __(
												'None',
												'ultimate-addons-for-gutenberg'
											),
										},
										{
											value: 'tablet',
											label: __(
												'Tablet',
												'ultimate-addons-for-gutenberg'
											),
											tooltip: __(
												'Tablet',
												'ultimate-addons-for-gutenberg'
											),
										},
										{
											value: 'mobile',
											label: __(
												'Mobile',
												'ultimate-addons-for-gutenberg'
											),
											tooltip: __(
												'Mobile',
												'ultimate-addons-for-gutenberg'
											),
										},
									] }
									showIcons={ false }
									help={ __(
										'Note: Choose on what breakpoint the CTA button will stack.',
										'ultimate-addons-for-gutenberg'
									) }
								/>
							</>
						) }
					</>
				) }
			</UAGAdvancedPanelBody>
		);
	};

	const blockControls = () => {
		return (
			<BlockControls key="controls">
				<AlignmentToolbar
					value={ textAlign }
					onChange={ ( value ) =>
						setAttributes( { textAlign: value } )
					}
				/>
			</BlockControls>
		);
	};

	const presetSettings = () => {
		return <UAGAdvancedPanelBody
					title={ __( 'Presets', 'ultimate-addons-for-gutenberg' ) }
					initialOpen={ true }
				>
					<UAGPresets
						setAttributes = { setAttributes }
						presets = { presets }
						presetInputType = 'radioImage'
					/>
				</UAGAdvancedPanelBody>
	};

	return (
		<Suspense fallback={ lazyLoader() }>
			{ blockControls() }
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
						{ ctaType !== 'all' &&
						  ctaType !== 'none' &&
						  ctaStyleSettings() }
						{ ( 'button' === ctaType && enabledSecondCtaButton ) && secButtonStyleSettings() }
						{ marginSettings() }
					</InspectorTab>
					<InspectorTab
						{ ...UAGTabs.advance }
						parentProps={ props }
					></InspectorTab>
				</InspectorTabs>
			</InspectorControls>
			{ loadCtaGoogleFonts }
			{ loadSecCtaGoogleFonts }
			{ loadTitleGoogleFonts }
			{ loadDescGoogleFonts }
		</Suspense>
	);
};

export default React.memo( Settings );
