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
import SpacingControl from '@Components/spacing-control';

import {
	BlockControls,
	InspectorControls,
	__experimentalLinkControl,
} from '@wordpress/block-editor';

import {
	Popover,
	ToolbarButton,
	ToolbarGroup,
	ToggleControl,
	TextControl
} from '@wordpress/components';

import UAGAdvancedPanelBody from '@Components/advanced-panel-body';

const Settings = ( props ) => {
	const state = props.state;
	const setStateValue = props.setStateValue;
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
		opensInNewTab,
		icon,
		iconPosition,
		iconSpace,
		target,

		LoadGoogleFonts,
		fontFamily,
		fontWeight,
		fontStyle,
		transform,
		decoration,
		gradientValue,
		backgroundImageColor,
		backgroundSize,
		backgroundRepeat,
		backgroundAttachment,
		backgroundPosition,
		backgroundImage,
		backgroundType,
		topMarginDesktop,
		rightMarginDesktop,
		bottomMarginDesktop,
		leftMarginDesktop,
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

	} = attributes;

	const onClickLinkSettings = () => {
		if ( '_self' === target ) {
			setAttributes( { opensInNewTab: false } );
		} else if ( '_blank' === target ) {
			setAttributes( { opensInNewTab: true } );
		}

		setStateValue( {
			isURLPickerOpen: true,
		} );
	};

	const onChangeOpensInNewTab = ( value ) => {
		if ( true === value ) {
			props.setAttributes( { target: '_blank' } );
		} else {
			props.setAttributes( { target: '_self' } );
		}
	};

	const buttonSettings = () => {
		return (
			<UAGAdvancedPanelBody
				title={ __( 'Button', 'ultimate-addons-for-gutenberg' ) }
				initialOpen={ true }
			>
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
						setAttributes( { opensInNewTab: ! opensInNewTab } )
					}
				/>
			</UAGAdvancedPanelBody>
		);
	};

	const textSettings = () => {
		return (
			<UAGAdvancedPanelBody
				title={ __( 'Text', 'ultimate-addons-for-gutenberg' ) }
				initialOpen={ true }
			>
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
									'Text Color',
									'ultimate-addons-for-gutenberg'
								) }
								colorValue={ hColor ? hColor : '' }
								onColorChange={ ( value ) =>
									setAttributes( { hColor: value } )
								}
							/>
						</>
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
						value: LoadGoogleFonts,
						label: 'LoadGoogleFonts',
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
				<Background
					setAttributes={ setAttributes }
					backgroundGradient={ {
						value: gradientValue,
						label: 'gradientValue',
					} }
					backgroundImageColor={ {
						value: backgroundImageColor,
						label: 'backgroundImageColor',
					} }
					backgroundSize={ {
						value: backgroundSize,
						label: 'backgroundSize',
					} }
					backgroundRepeat={ {
						value: backgroundRepeat,
						label: 'backgroundRepeat',
					} }
					backgroundAttachment={ {
						value: backgroundAttachment,
						label: 'backgroundAttachment',
					} }
					backgroundPosition={ {
						value: backgroundPosition,
						label: 'backgroundPosition',
					} }
					backgroundImage={ {
						value: backgroundImage,
						label: 'backgroundImage',
					} }
					backgroundColor={ {
						value: background,
						label: 'background',
					} }
					backgroundType={ {
						value: backgroundType,
						label: 'backgroundType',
					} }
					backgroundVideoType={ {
						value: false,
					} }
					{ ...props }
				/>
				<SpacingControl
					{ ...props }
					label={ __( 'Margin', 'ultimate-addons-for-gutenberg' ) }
					valueTop={ {
						value: topMarginDesktop,
						label: 'topMarginDesktop',
					} }
					valueRight={ {
						value: rightMarginDesktop,
						label: 'rightMarginDesktop',
					} }
					valueBottom={ {
						value: bottomMarginDesktop,
						label: 'bottomMarginDesktop',
					} }
					valueLeft={ {
						value: leftMarginDesktop,
						label: 'leftMarginDesktop',
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
				<BoxShadowControl
					setAttributes={ setAttributes }
					label={ __(
						'Box Shadow',
						'ultimate-addons-for-gutenberg'
					) }
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
		);
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
					value={ size }
					onChange={ ( value ) => setAttributes( { size: value } ) }
					min={ 0 }
					max={ 50 }
					unit={ {
						value: sizeType,
						label: 'sizeType',
					} }
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
							'Hover Color',
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
			</UAGAdvancedPanelBody>
		);
	};

	const blockControls = () => {
		return (
			<BlockControls>
				<ToolbarGroup>
					<ToolbarButton
						icon="admin-links"
						name="link"
						title={ __( 'Link' ) }
						onClick={ onClickLinkSettings }
					/>
				</ToolbarGroup>
			</BlockControls>
		);
	};

	const linkControls = () => {
		if ( ! state.isURLPickerOpen ) {
			return '';
		}

		return (
			<Popover
				position="bottom center"
				onClose={ () =>
					setStateValue( {
						isURLPickerOpen: false,
					} )
				}
			>
				<__experimentalLinkControl
					value={ { url: link, opensInNewTab } }
					onChange={ ( {
						url: newURL = '',
						opensInNewTab: newOpensInNewTab,
					} ) => {
						setAttributes( { link: newURL } );
						setAttributes( { opensInNewTab: newOpensInNewTab } );
						onChangeOpensInNewTab( newOpensInNewTab );
					} }
				/>
			</Popover>
		);
	};
	return (
		<Suspense fallback={ lazyLoader() }>
			{ blockControls() }
			{ linkControls() }
			<InspectorControls>
				<InspectorTabs>
					<InspectorTab { ...UAGTabs.general }>
						{ buttonSettings() }
					</InspectorTab>
					<InspectorTab { ...UAGTabs.style }>
						{ textSettings() }
						{ '' !== icon && IconSettings() }
						{ borderSettings() }
						{ spacingSettings() }
						{ '' === icon && (
							<p className="uagb-settings-notice">
								{ __(
									'There is no style available for the inheritFromTheme option.',
									'ultimate-addons-for-gutenberg'
								) }
							</p>
						) }
					</InspectorTab>
					<InspectorTab
						{ ...UAGTabs.advance }
						parentProps={ props }
					></InspectorTab>
				</InspectorTabs>
			</InspectorControls>
		</Suspense>
	);
};

export default React.memo( Settings );
