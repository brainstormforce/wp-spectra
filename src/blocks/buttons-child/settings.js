/**
 * BLOCK: Buttons Child - Edit Class
 */

// Import classes
import UAGIconPicker from '@Components/icon-picker';
import { __ } from '@wordpress/i18n';
import lazyLoader from '@Controls/lazy-loader';
import React, { Suspense } from 'react';
import AdvancedPopColorControl from '@Components/color-control/advanced-pop-color-control.js';
import Border from '@Components/border';
import SpacingControl from '@Components/spacing-control';
import InspectorTabs from '@Components/inspector-tabs/InspectorTabs.js';
import InspectorTab, {
	UAGTabs,
} from '@Components/inspector-tabs/InspectorTab.js';
import TypographyControl from '@Components/typography';
import Range from '@Components/range/Range.js';
import UAGTabsControl from '@Components/tabs';
import MultiButtonsControl from '@Components/multi-buttons-control';
import BoxShadowControl from '@Components/box-shadow';
import WebfontLoader from '@Components/typography/fontloader';

import GradientSettings from '@Components/gradient-settings';

import {
	InspectorControls
} from '@wordpress/block-editor';

import {
	ToggleControl,
	TextControl
} from '@wordpress/components';

import UAGAdvancedPanelBody from '@Components/advanced-panel-body';

const Settings = ( props ) => {

	props = props.parentProps;

	const { attributes, setAttributes } = props;

	const {
		link,
		size,
		topPadding,
		rightPadding,
		bottomPadding,
		leftPadding,
		//Mobile
		topMobilePadding,
		rightMobilePadding,
		bottomMobilePadding,
		leftMobilePadding,
		//Tablet
		topTabletPadding,
		rightTabletPadding,
		bottomTabletPadding,
		leftTabletPadding,
		paddingUnit,
		mobilePaddingUnit,
		tabletPaddingUnit,
		paddingLink,
		borderWidth,
		borderRadius,
		borderStyle,
		borderColor,
		borderHColor,
		color,
		background,
		hColor,
		hBackground,
		sizeType,
		sizeMobile,
		sizeTablet,
		lineHeight,
		lineHeightType,
		lineHeightMobile,
		lineHeightTablet,
		icon,
		iconPosition,
		iconSpace,
		opensInNewTab,

		loadGoogleFonts,
		fontFamily,
		fontWeight,
		fontStyle,
		transform,
		decoration,
		backgroundType,
		gradientValue,
		topMargin,
		rightMargin,
		bottomMargin,
		leftMargin,
		topMarginTablet,
		rightMarginTablet,
		bottomMarginTablet,
		leftMarginTablet,
		topMarginMobile,
		rightMarginMobile,
		bottomMarginMobile,
		leftMarginMobile,
		marginType,
		marginLink,
		boxShadowColor,
		boxShadowHOffset,
		boxShadowVOffset,
		boxShadowBlur,
		boxShadowSpread,
		boxShadowPosition,
		iconColor,
		iconHColor,
		iconSize,
		removeText,
		noFollow

	} = attributes;

	const buttonSettings = () => {
		return (
			<UAGAdvancedPanelBody>
				<UAGIconPicker
					label={ __( 'Icon', 'ultimate-addons-for-gutenberg' ) }
					value={ icon }
					onChange={ ( value ) => setAttributes( { icon: value } ) }
				/>
				{ '' !== icon && (
					<>
						<MultiButtonsControl
							setAttributes={ setAttributes }
							label={ __(
								'Icon Position',
								'ultimate-addons-for-gutenberg'
							) }
							data={ {
								value: iconPosition,
								label: 'iconPosition',
							} }
							className="uagb-multi-button-alignment-control"
							options={ [
								{
									value: 'before',
									label: 'Before Text',
									tooltip: __(
										'Before Text',
										'ultimate-addons-for-gutenberg'
									),
								},
								{
									value: 'after',
									label: 'After Text',
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
							value={ iconSpace }
							onChange={ ( value ) =>
								setAttributes( { iconSpace: value } )
							}
							min={ 0 }
							max={ 50 }
							displayUnit={ false }
						/>
					</>
				) }
				<TextControl
					label={ __(
						'Link',
						'ultimate-addons-for-gutenberg'
					) }
					value={ link }
					onChange={ ( value ) =>
						setAttributes( { link: value } )
					}
				/>
				<ToggleControl
					label={ __(
						'Open in new window',
						'ultimate-addons-for-gutenberg'
					) }
					checked={ opensInNewTab }
					onChange={ () =>
						setAttributes( { opensInNewTab : ! opensInNewTab } )
					}
				/>
				<ToggleControl
					label={ __(
						'Add "nofollow" to link',
						'ultimate-addons-for-gutenberg'
					) }
					checked={ noFollow }
					onChange={ () =>
						setAttributes( { noFollow : ! noFollow } )
					}
				/>
				<ToggleControl
					label={ __(
						'Remove Text',
						'ultimate-addons-for-gutenberg'
					) }
					checked={ removeText }
					onChange={ () =>
						setAttributes( { removeText: ! removeText } )
					}
				/>
			</UAGAdvancedPanelBody>
		);
	};

	let loadBtnGoogleFonts;

	if ( loadGoogleFonts === true ) {
		const btnconfig = {
			google: {
				families: [
					fontFamily + ( fontWeight ? ':' + fontWeight : '' ),
				],
			},
		};

		loadBtnGoogleFonts = (
			<WebfontLoader config={ btnconfig }></WebfontLoader>
		);
	}

	const textSettings = () => {
		return (
			<UAGAdvancedPanelBody
				title={ __( 'Text', 'ultimate-addons-for-gutenberg' ) }
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
						value: loadGoogleFonts,
						label: 'loadGoogleFonts',
					} }
					fontFamily={ {
						value: fontFamily,
						label: 'fontFamily',
					} }
					fontWeight={ {
						value: fontWeight,
						label: 'fontWeight',
					} }
					fontStyle={ {
						value: fontStyle,
						label: 'fontStyle',
					} }
					transform={ {
						value: transform,
						label: 'transform',
					} }
					decoration={ {
						value: decoration,
						label: 'decoration',
					} }
					fontSizeType={ {
						value: sizeType,
						label: 'sizeType',
					} }
					fontSize={ {
						value: size,
						label: 'size',
					} }
					fontSizeMobile={ {
						value: sizeMobile,
						label: 'sizeMobile',
					} }
					fontSizeTablet={ {
						value: sizeTablet,
						label: 'sizeTablet',
					} }
					lineHeightType={ {
						value: lineHeightType,
						label: 'lineHeightType',
					} }
					lineHeight={ {
						value: lineHeight,
						label: 'lineHeight',
					} }
					lineHeightMobile={ {
						value: lineHeightMobile,
						label: 'lineHeightMobile',
					} }
					lineHeightTablet={ {
						value: lineHeightTablet,
						label: 'lineHeightTablet',
					} }
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
									'Color',
									'ultimate-addons-for-gutenberg'
								) }
								colorValue={ color ? color : '' }
								onColorChange={ ( value ) =>
									setAttributes( { color: value } )
								}
							/>
						</>
					}
					hover={
						<>
							<AdvancedPopColorControl
								label={ __(
									'Color',
									'ultimate-addons-for-gutenberg'
								) }
								colorValue={ hColor ? hColor : '' }
								onColorChange={ ( value ) =>
									setAttributes( { hColor: value } )
								}
							/>
						</>
					}

					disableBottomSeparator={ true }
				/>
			</UAGAdvancedPanelBody>
		);
	};

	const backgroundSettings = () => {
		return <UAGAdvancedPanelBody
					title={__( 'Background','ultimate-addons-for-gutenberg' )}
					initialOpen={false}
				>
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
							label: __(
								'Transparent',
								'ultimate-addons-for-gutenberg'
							),
							tooltip: __(
								'Transparent',
								'ultimate-addons-for-gutenberg'
							),
						},
						{
							value: 'color',
							label: __(
								'Color',
								'ultimate-addons-for-gutenberg'
							),
							tooltip: __(
								'Color',
								'ultimate-addons-for-gutenberg'
							),
						},
						{
							value: 'gradient',
							label: __(
								'Gradient',
								'ultimate-addons-for-gutenberg'
							),
							tooltip: __(
								'Gradient',
								'ultimate-addons-for-gutenberg'
							),
						},
					] }
				/>
				{ 'color' === backgroundType && (
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
							normal={
								<>
									<AdvancedPopColorControl
										label={ __(
											'Color',
											'ultimate-addons-for-gutenberg'
										) }
										colorValue={
											background
												? background
												: ''
										}
										onColorChange={ ( value ) =>
											setAttributes( {
												background: value,
											} )
										}
									/>
								</>
							}
							hover={
								<>
									<AdvancedPopColorControl
										label={ __(
											'Color',
											'ultimate-addons-for-gutenberg'
										) }
										colorValue={
											hBackground
												? hBackground
												: ''
										}
										onColorChange={ ( value ) =>
											setAttributes( {
												hBackground: value,
											} )
										}
									/>
								</>
							}
							disableBottomSeparator={ true }
						/>
					</>
				) }
				{ 'gradient' === backgroundType && (
					<GradientSettings
						backgroundGradient={ {
							value: gradientValue,
							label: 'gradientValue',
						}}
						setAttributes={ setAttributes }
					/>
				) }
				</UAGAdvancedPanelBody>
	};

	const boxShadowSettings = () => {
		return <UAGAdvancedPanelBody
					title={__( 'Box Shadow','ultimate-addons-for-gutenberg' )}
					initialOpen={false}
				>
					<BoxShadowControl
						setAttributes={ setAttributes }
						boxShadowColor={ {
							value: boxShadowColor,
							label: 'boxShadowColor',
							title: __( 'Color', 'ultimate-addons-for-gutenberg' ),
						} }
						boxShadowHOffset={ {
							value: boxShadowHOffset,
							label: 'boxShadowHOffset',
							title: __(
								'Horizontal',
								'ultimate-addons-for-gutenberg'
							),
						} }
						boxShadowVOffset={ {
							value: boxShadowVOffset,
							label: 'boxShadowVOffset',
							title: __(
								'Vertical',
								'ultimate-addons-for-gutenberg'
							),
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
							title: __(
								'Position',
								'ultimate-addons-for-gutenberg'
							),
						} }
					/>
				</UAGAdvancedPanelBody>
	};

	const IconSettings = () => {
		return (
			<UAGAdvancedPanelBody
				title={ __( 'Icon', 'ultimate-addons-for-gutenberg' ) }
				initialOpen={ true }
			>
				<Range
					label={ __( 'Size', 'ultimate-addons-for-gutenberg' ) }
					setAttributes={ setAttributes }
					value={ iconSize }
					onChange={ ( value ) => setAttributes( { iconSize: value } ) }
					min={ 0 }
					max={ 50 }
					displayUnit={ false }
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
							<AdvancedPopColorControl
								label={ __(
									'Color',
									'ultimate-addons-for-gutenberg'
								) }
								colorValue={ iconColor ? iconColor : '' }
								onColorChange={ ( value ) =>
									setAttributes( { iconColor: value } )
								}
							/>
					}
					hover={
						<>
							<AdvancedPopColorControl
								label={ __(
									'Color',
									'ultimate-addons-for-gutenberg'
								) }
								colorValue={ iconHColor ? iconHColor : '' }
								onColorChange={ ( value ) =>
									setAttributes( { iconHColor: value } )
								}
							/>
						</>
					}

					disableBottomSeparator={ true }
				/>
			</UAGAdvancedPanelBody>
		);
	};

	const borderSettings = () => {
		return (
			<UAGAdvancedPanelBody
				title={ __( 'Border', 'ultimate-addons-for-gutenberg' ) }
				initialOpen={ false }
			>
				<Border
					disabledBorderTitle= {true}
					setAttributes={ setAttributes }
					borderStyle={ {
						value: borderStyle,
						label: 'borderStyle',
						title: __( 'Style', 'ultimate-addons-for-gutenberg' ),
					} }
					borderWidth={ {
						value: borderWidth,
						label: 'borderWidth',
						title: __( 'Width', 'ultimate-addons-for-gutenberg' ),
					} }
					borderRadius={ {
						value: borderRadius,
						label: 'borderRadius',
						title: __( 'Radius', 'ultimate-addons-for-gutenberg' ),
					} }
					borderColor={ {
						value: borderColor,
						label: 'borderColor',
						title: __( 'Color', 'ultimate-addons-for-gutenberg' ),
					} }
					borderHoverColor={ {
						value: borderHColor,
						label: 'borderHColor',
						title: __(
							'Color',
							'ultimate-addons-for-gutenberg'
						),
					} }
					disableBottomSeparator={ true }
				/>
			</UAGAdvancedPanelBody>
		);
	};

	const spacingSettings = () => {
		return (
			<UAGAdvancedPanelBody
				title={ __( 'Spacing', 'ultimate-addons-for-gutenberg' ) }
				initialOpen={ false }
			>
				<SpacingControl
					{ ...props }
					label={ __( 'Padding', 'ultimate-addons-for-gutenberg' ) }
					valueTop={ {
						value: topPadding,
						label: 'topPadding',
					} }
					valueRight={ {
						value: rightPadding,
						label: 'rightPadding',
					} }
					valueBottom={ {
						value: bottomPadding,
						label: 'bottomPadding',
					} }
					valueLeft={ {
						value: leftPadding,
						label: 'leftPadding',
					} }
					valueTopTablet={ {
						value: topTabletPadding,
						label: 'topTabletPadding',
					} }
					valueRightTablet={ {
						value: rightTabletPadding,
						label: 'rightTabletPadding',
					} }
					valueBottomTablet={ {
						value: bottomTabletPadding,
						label: 'bottomTabletPadding',
					} }
					valueLeftTablet={ {
						value: leftTabletPadding,
						label: 'leftTabletPadding',
					} }
					valueTopMobile={ {
						value: topMobilePadding,
						label: 'topMobilePadding',
					} }
					valueRightMobile={ {
						value: rightMobilePadding,
						label: 'rightMobilePadding',
					} }
					valueBottomMobile={ {
						value: bottomMobilePadding,
						label: 'bottomMobilePadding',
					} }
					valueLeftMobile={ {
						value: leftMobilePadding,
						label: 'leftMobilePadding',
					} }
					unit={ {
						value: paddingUnit,
						label: 'paddingUnit',
					} }
					mUnit={ {
						value: mobilePaddingUnit,
						label: 'mobilePaddingUnit',
					} }
					tUnit={ {
						value: tabletPaddingUnit,
						label: 'tabletPaddingUnit',
					} }
					attributes={ attributes }
					setAttributes={ setAttributes }
					link={ {
						value: paddingLink,
						label: 'paddingLink',
					} }
				/>
				<SpacingControl
					{ ...props }
					label={ __( 'Margin', 'ultimate-addons-for-gutenberg' ) }
					valueTop={ {
						value: topMargin,
						label: 'topMargin',
					} }
					valueRight={ {
						value: rightMargin,
						label: 'rightMargin',
					} }
					valueBottom={ {
						value: bottomMargin,
						label: 'bottomMargin',
					} }
					valueLeft={ {
						value: leftMargin,
						label: 'leftMargin',
					} }
					valueTopTablet={ {
						value: topMarginTablet,
						label: 'topMarginTablet',
					} }
					valueRightTablet={ {
						value: rightMarginTablet,
						label: 'rightMarginTablet',
					} }
					valueBottomTablet={ {
						value: bottomMarginTablet,
						label: 'bottomMarginTablet',
					} }
					valueLeftTablet={ {
						value: leftMarginTablet,
						label: 'leftMarginTablet',
					} }
					valueTopMobile={ {
						value: topMarginMobile,
						label: 'topMarginMobile',
					} }
					valueRightMobile={ {
						value: rightMarginMobile,
						label: 'rightMarginMobile',
					} }
					valueBottomMobile={ {
						value: bottomMarginMobile,
						label: 'bottomMarginMobile',
					} }
					valueLeftMobile={ {
						value: leftMarginMobile,
						label: 'leftMarginMobile',
					} }
					unit={ {
						value: marginType,
						label: 'marginType',
					} }
					mUnit={ {
						value: marginType,
						label: 'marginType',
					} }
					tUnit={ {
						value: marginType,
						label: 'marginType',
					} }
					attributes={ attributes }
					setAttributes={ setAttributes }
					link={ {
						value: marginLink,
						label: 'marginLink',
					} }
				/>
			</UAGAdvancedPanelBody>
		);
	};

	return (
		<Suspense fallback={ lazyLoader() }>
			<InspectorControls>
				<InspectorTabs>
					<InspectorTab { ...UAGTabs.general }>
						{ buttonSettings() }
					</InspectorTab>
					<InspectorTab { ...UAGTabs.style }>
						{ !removeText && textSettings() }
						{ '' !== icon && IconSettings() }
						{ borderSettings() }
						{ backgroundSettings() }
						{ boxShadowSettings() }
						{ spacingSettings() }
					</InspectorTab>
					<InspectorTab
						{ ...UAGTabs.advance }
						parentProps={ props }
					></InspectorTab>
				</InspectorTabs>
			</InspectorControls>
			{loadBtnGoogleFonts}
		</Suspense>
	);
};

export default React.memo( Settings );
