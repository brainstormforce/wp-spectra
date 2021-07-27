/**
 * BLOCK: Column - Settings.
 */

import React, { Suspense } from 'react';
import lazyLoader from '@Controls/lazy-loader';
import Background from "../../components/background";
import Border from "../../components/border";
import SpacingControl from "../../components/spacing-control";
import { __ } from '@wordpress/i18n';

import {
	InspectorControls,
} from '@wordpress/block-editor';

import {
	PanelBody,
	RangeControl,
	TabPanel,
	Dashicon,
} from '@wordpress/components';

const Settings = ( props ) => {
	const {
		attributes: {
			topPadding,
			bottomPadding,
			leftPadding,
			rightPadding,
			topPaddingTablet,
			bottomPaddingTablet,
			leftPaddingTablet,
			rightPaddingTablet,
			topPaddingMobile,
			bottomPaddingMobile,
			leftPaddingMobile,
			rightPaddingMobile,
			topMargin,
			bottomMargin,
			leftMargin,
			rightMargin,
			topMarginTablet,
			bottomMarginTablet,
			leftMarginTablet,
			rightMarginTablet,
			topMarginMobile,
			bottomMarginMobile,
			leftMarginMobile,
			rightMarginMobile,
			backgroundType,
			backgroundImage,
			backgroundColor,
			backgroundPosition,
			backgroundAttachment,
			backgroundRepeat,
			backgroundSize,
			backgroundOpacity,
			backgroundImageColor,
			borderStyle,
			borderWidth,
			borderRadius,
			borderColor,
			borderHoverColor,
			overlayType,
			mobilePaddingType,
			tabletPaddingType,
			desktopPaddingType,
			colWidthMobile,
			colWidthTablet,
			colWidth,
			paddingLink,
			marginLink,
			mobileMarginType,
			tabletMarginType,
			desktopMarginType,
		},
		setAttributes,
		deviceType,
	} = props.parentProps;

	const layoutSettings = () => {
		return (
			<PanelBody
				title={ __( 'Layout', 'ultimate-addons-for-gutenberg' ) }
			>
				<TabPanel
					className="uagb-size-type-field-tabs uagb-without-size-type"
					activeClass="active-tab"
					tabs={ [
						{
							name: 'desktop',
							title: <Dashicon icon="desktop" />,
							className: 'uagb-desktop-tab uagb-responsive-tabs',
						},
						{
							name: 'tablet',
							title: <Dashicon icon="tablet" />,
							className: 'uagb-tablet-tab uagb-responsive-tabs',
						},
						{
							name: 'mobile',
							title: <Dashicon icon="smartphone" />,
							className: 'uagb-mobile-tab uagb-responsive-tabs',
						},
					] }
				>
					{ ( tab ) => {
						let tabout;

						if ( 'mobile' === tab.name ) {
							tabout = (
								<RangeControl
									label={ __(
										'Content Width (%)',
										'ultimate-addons-for-gutenberg'
									) }
									value={ colWidthMobile }
									onChange={ ( value ) => {
										setAttributes( {
											colWidthMobile: value,
										} );
									} }
									min={ 0 }
									max={ 100 }
								/>
							);
						} else if ( 'tablet' === tab.name ) {
							tabout = (
								<RangeControl
									label={ __(
										'Content Width (%)',
										'ultimate-addons-for-gutenberg'
									) }
									value={ colWidthTablet }
									onChange={ ( value ) => {
										setAttributes( {
											colWidthTablet: value,
										} );
									} }
									min={ 0 }
									max={ 100 }
								/>
							);
						} else {
							tabout = (
								<RangeControl
									label={ __(
										'Content Width (%)',
										'ultimate-addons-for-gutenberg'
									) }
									value={ colWidth }
									onChange={ ( value ) => {
										setAttributes( {
											colWidth: value,
										} );
									} }
									min={ 0 }
									max={ 100 }
								/>
							);
						}

						return <div>{ tabout }</div>;
					} }
				</TabPanel>
			</PanelBody>
		);
	};

	const spacingSettings = () => {
		return (
			<PanelBody
				title={ __( 'Spacing', 'ultimate-addons-for-gutenberg' ) }
				initialOpen={ false }
			>
				<SpacingControl
					{...props.parentProps}
					label={__("Padding", "ultimate-addons-for-gutenberg")}
					valueTop={{
						value: topPadding,
						label: "topPadding",
					}}
					valueRight={{
						value: rightPadding,
						label: "rightPadding",
					}}
					valueBottom={{
						value: bottomPadding,
						label: "bottomPadding",
					}}
					valueLeft={{
						value: leftPadding,
						label: "leftPadding",
					}}
					valueTopTablet={{
						value: topPaddingTablet,
						label: "topPaddingTablet",
					}}
					valueRightTablet={{
						value: rightPaddingTablet,
						label: "rightPaddingTablet",
					}}
					valueBottomTablet={{
						value: bottomPaddingTablet,
						label: "bottomPaddingTablet",
					}}
					valueLeftTablet={{
						value: leftPaddingTablet,
						label: "leftPaddingTablet",
					}}
					valueTopMobile={{
						value: topPaddingMobile,
						label: "topPaddingMobile",
					}}
					valueRightMobile={{
						value: rightPaddingMobile,
						label: "rightPaddingMobile",
					}}
					valueBottomMobile={{
						value: bottomPaddingMobile,
						label: "bottomPaddingMobile",
					}}
					valueLeftMobile={{
						value: leftPaddingMobile,
						label: "leftPaddingMobile",
					}}
					unit={{
						value: desktopPaddingType,
						label: "desktopPaddingType",
					}}
					mUnit={{
						value: mobilePaddingType,
						label: "mobilePaddingType",
					}}
					tUnit={{
						value: tabletPaddingType,
						label: "tabletPaddingType",
					}}
					attributes={props.attributes}
					setAttributes={setAttributes}
					link={{
						value: paddingLink,
						label: "paddingLink",
					}}
				/>
				<hr className="uagb-editor__separator" />
				<SpacingControl
					{...props.parentProps}
					label={__("Margin", "ultimate-addons-for-gutenberg")}
					valueTop={{
						value: topMargin,
						label: "topMargin",
					}}
					valueRight={{
						value: rightMargin,
						label: "rightMargin",
					}}
					valueBottom={{
						value: bottomMargin,
						label: "bottomMargin",
					}}
					valueLeft={{
						value: leftMargin,
						label: "leftMargin",
					}}
					valueTopTablet={{
						value: topMarginTablet,
						label: "topMarginTablet",
					}}
					valueRightTablet={{
						value: rightMarginTablet,
						label: "rightMarginTablet",
					}}
					valueBottomTablet={{
						value: bottomMarginTablet,
						label: "bottomMarginTablet",
					}}
					valueLeftTablet={{
						value: leftMarginTablet,
						label: "leftMarginTablet",
					}}
					valueTopMobile={{
						value: topMarginMobile,
						label: "topMarginMobile",
					}}
					valueRightMobile={{
						value: rightMarginMobile,
						label: "rightMarginMobile",
					}}
					valueBottomMobile={{
						value: bottomMarginMobile,
						label: "bottomMarginMobile",
					}}
					valueLeftMobile={{
						value: leftMarginMobile,
						label: "leftMarginMobile",
					}}
					unit={{
						value: desktopMarginType,
						label: "desktopMarginType",
					}}
					mUnit={{
						value: mobileMarginType,
						label: "mobileMarginType",
					}}
					tUnit={{
						value: tabletMarginType,
						label: "tabletMarginType",
					}}
					attributes={props.attributes}
					setAttributes={setAttributes}
					link={{
						value: marginLink,
						label: "marginLink",
					}}
				/>
			</PanelBody>
		);
	};

	const backgroundSettings = () => {
		return (
			<PanelBody
				title={ __( 'Background', 'ultimate-addons-for-gutenberg' ) }
				initialOpen={ false }
			>
			<Background
				setAttributes={setAttributes}
				backgroundImageColor={{
					value: backgroundImageColor,
					label: __(
						"Background Image Color",
						"ultimate-addons-for-gutenberg"
					),
				}}
				overlayType={{
					value: overlayType,
					label: __(
						"Overlay Type",
						"ultimate-addons-for-gutenberg"
					),
				}}
				backgroundSize={{
					value: backgroundSize,
					label: __(
						"Background Size",
						"ultimate-addons-for-gutenberg"
					),
				}}
				backgroundRepeat={{
					value: backgroundRepeat,
					label: __(
						"Background Repeat",
						"ultimate-addons-for-gutenberg"
					),
				}}
				backgroundAttachment={{
					value: backgroundAttachment,
					label: __(
						"Background Attachement",
						"ultimate-addons-for-gutenberg"
					),
				}}
				backgroundPosition={{
					value: backgroundPosition,
					label: __(
						"Background Image",
						"ultimate-addons-for-gutenberg"
					),
				}}
				backgroundImage={{
					value: backgroundImage,
					label: __(
						"Background Image",
						"ultimate-addons-for-gutenberg"
					),
				}}
				backgroundColor={{
					value: backgroundColor,
					label: __(
						"Background Color",
						"ultimate-addons-for-gutenberg"
					),
				}}
				backgroundType={{
					value: backgroundType,
					label: __(
						"Background Type",
						"ultimate-addons-for-gutenberg"
					),
				}}
				backgroundOpacity={{
					value: backgroundOpacity,
					label: __(
						"Opacity",
						"ultimate-addons-for-gutenberg"
					),
				}}
				backgroundVideoType={{
					value: false,
				}}
				{...props.parentProps}
			/>
			</PanelBody>
		);
	};

	const borderSettings = () => {
		return (
			<PanelBody
				title={ __( 'Border', 'ultimate-addons-for-gutenberg' ) }
				initialOpen={ false }
			>
			<Border
				setAttributes={setAttributes}
				borderStyle={{
					value: borderStyle,
					label: "borderStyle",
					title: __(
						"Style",
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
					value: borderHoverColor,
					label: "borderHoverColor",
					title: __(
						"Hover Color",
						"ultimate-addons-for-gutenberg"
					),
				}}
			/>
			</PanelBody>
		);
	};

	return (
		<Suspense fallback={ lazyLoader() }>
			<InspectorControls>
				{ layoutSettings() }
				{ spacingSettings() }
				{ backgroundSettings() }
				{ borderSettings() }
			</InspectorControls>
		</Suspense>
	);
};

export default React.memo( Settings );
