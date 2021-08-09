/**
 * BLOCK: Column - Settings.
 */

import React, { Suspense } from 'react';
import lazyLoader from '@Controls/lazy-loader';
import Background from "../../components/background";
import Border from "../../components/border";
import SpacingControl from "../../components/spacing-control";
import { __ } from '@wordpress/i18n';
import InspectorTabs from "../../components/inspector-tabs/InspectorTabs.js";
import InspectorTab from "../../components/inspector-tabs/InspectorTab.js";
import ResponsiveSlider from "../../components/responsive-slider";

import {
	InspectorControls,
} from '@wordpress/block-editor';

import {
	PanelBody,
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
			gradientValue,
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
			<ResponsiveSlider
				label={__(
					"Content Width (%)",
					"ultimate-addons-for-gutenberg"
				)}
				data={{
					desktop: {
						value: colWidth,
						label: "colWidth",
					},
					tablet: {
						value: colWidthTablet,
						label: "colWidthTablet",
					},
					mobile: {
						value: colWidthMobile,
						label: "colWidthMobile",
					},
				}}
				min={0}
				max={100}
				displayUnit={false}
				setAttributes={setAttributes}
			/>
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
				backgroundGradient={{
					value: gradientValue,
					label: "gradientValue",
				}}
				backgroundImageColor={{
					value: backgroundImageColor,
					label: "backgroundImageColor",
				}}
				overlayType={{
					value: overlayType,
					label: "overlayType",
				}}
				backgroundSize={{
					value: backgroundSize,
					label: "backgroundSize",
				}}
				backgroundRepeat={{
					value: backgroundRepeat,
					label: "backgroundRepeat",
				}}
				backgroundAttachment={{
					value: backgroundAttachment,
					label: "backgroundAttachment",
				}}
				backgroundPosition={{
					value: backgroundPosition,
					label: "backgroundPosition",
				}}
				backgroundImage={{
					value: backgroundImage,
					label: "backgroundImage",
				}}
				backgroundColor={{
					value: backgroundColor,
					label: "backgroundColor",
				}}
				backgroundType={{
					value: backgroundType,
					label: "backgroundType",
				}}
				backgroundOpacity={{
					value: backgroundOpacity,
					label: "backgroundOpacity",
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
			<InspectorTabs tabs={["general", "style", "advance"]}>
				<InspectorTab key={"general"}>
				{ layoutSettings() }
				</InspectorTab>
				<InspectorTab key={"style"}>
				{ backgroundSettings() }
				{ borderSettings() }
				{ spacingSettings() }
				</InspectorTab>
				<InspectorTab key={"advance"}></InspectorTab>
			</InspectorTabs>
			</InspectorControls>
		</Suspense>
	);
};

export default React.memo( Settings );
