/**
 * BLOCK: Buttons Child - Edit Class
 */

// Import classes
import UAGIconPicker from "../../components/icon-picker";
import { __ } from '@wordpress/i18n';
import lazyLoader from '@Controls/lazy-loader';
import React, { Suspense } from 'react';
import AdvancedPopColorControl from "@Components/color-control/advanced-pop-color-control.js";
import Border from "@Components/border";
import SpacingControl from "@Components/spacing-control";
import InspectorTabs from "../../components/inspector-tabs/InspectorTabs.js";
import InspectorTab, {
	UAGTabs,
} from "../../components/inspector-tabs/InspectorTab.js";
import TypographyControl from '@Components/typography';
import Range from "@Components/range/Range.js";
import UAGTabsControl from "../../components/tabs";
import MultiButtonsControl from "../../components/multi-buttons-control";

import {
	BlockControls,
	InspectorControls,
	__experimentalLinkControl,
} from '@wordpress/block-editor';

import {
	PanelBody,
	Popover,
	ToolbarButton,
	ToolbarGroup,
	ToggleControl,
} from '@wordpress/components';

const Settings = ( props ) => {
	const state = props.state;
	const setStateValue = props.setStateValue;
	props = props.parentProps;

	const { attributes, setAttributes, deviceType } = props;

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
		inheritFromTheme,
		icon,
		iconPosition,
		iconSpace,
		target,
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
			<PanelBody
				title={ __(
					'Button',
					'ultimate-addons-for-gutenberg'
				) }
				initialOpen={ true }
			>
				<ToggleControl
					label={ __(
						'Inherit from Theme',
						'ultimate-addons-for-gutenberg'
					) }
					checked={ inheritFromTheme }
					onChange={ () =>
						setAttributes( {
							inheritFromTheme: ! inheritFromTheme,
						} )
					}
				/>
				<UAGIconPicker
					label={__("Icon", "ultimate-addons-for-gutenberg")}
					value={icon}
					onChange={(value) => setAttributes({ icon: value })}
				/>
				{ '' !== icon && (
					<>
						<MultiButtonsControl
							setAttributes={setAttributes}
							label={__("Icon Position", "ultimate-addons-for-gutenberg")}
							data={{
								value: iconPosition,
								label: "iconPosition",
							}}
							className="uagb-multi-button-alignment-control"
							options={[
								{
									value: "before",
									label: ("Before Text"),
									tooltip: __(
										"Before Text",
										"ultimate-addons-for-gutenberg"
									),
								},
								{
									value: "after",
									label: ("After Text"),
									tooltip: __(
										"After Text",
										"ultimate-addons-for-gutenberg"
									),
								},
							]}
							showIcons={false}
						/>
						<Range
							label={__(
								"Icon Spacing",
								"ultimate-addons-for-gutenberg"
							)}
							setAttributes={setAttributes}
							value={iconSpace}
							onChange={(value) =>
								setAttributes({ iconSpace: value })
							}
							min={0}
							max={50}
							displayUnit={false}
						/>
					</>
				) }
			</PanelBody>
		);
	};

	const textSettings = () => {
	
		return (
			<PanelBody
				title={ __(
					'Text',
					'ultimate-addons-for-gutenberg'
				) }
				initialOpen={ true }
			>
				{ ! inheritFromTheme && (
					<>
						<UAGTabsControl
							tabs={[
								{
									name: "normal",
									title: __(
										"Normal",
										"ultimate-addons-for-gutenberg"
									),
								},
								{
									name: "hover",
									title: __(
										"Hover",
										"ultimate-addons-for-gutenberg"
									),
								},
							]}
							normal={
								<>
								<AdvancedPopColorControl
									label={__(
										"Text Color",
										"ultimate-addons-for-gutenberg"
									)}
									colorValue={color ? color : ""}
									onColorChange={(value) =>
										setAttributes({ color: value })
									}
								/>
								<AdvancedPopColorControl
									label={__(
										"Background Color",
										"ultimate-addons-for-gutenberg"
									)}
									colorValue={background ? background : ""}
									onColorChange={(value) =>
										setAttributes({ background: value })
									}
								/>
								</>
							}
							hover={
								<>
								<AdvancedPopColorControl
									label={__(
										"Text Color",
										"ultimate-addons-for-gutenberg"
									)}
									colorValue={hColor ? hColor : ""}
									onColorChange={(value) =>
										setAttributes({ hColor: value })
									}
								/>
								<AdvancedPopColorControl
									label={__(
										"Background Color",
										"ultimate-addons-for-gutenberg"
									)}
									colorValue={hBackground ? hBackground : ""}
									onColorChange={(value) =>
										setAttributes({ hBackground: value })
									}
								/>
								</>
							}
						/>
						<TypographyControl
							label={__("Typography", "ultimate-addons-for-gutenberg")}
							attributes={attributes}
							setAttributes={setAttributes}
							disableFontFamily={true}
							disableFontWeight={true}
							disableFontSubset={true}
							fontSizeType={{
								value: sizeType,
								label: "sizeType",
							}}
							fontSize={{
								value: size,
								label: "size",
							}}
							fontSizeMobile={{
								value: sizeMobile,
								label: "sizeMobile",
							}}
							fontSizeTablet={{
								value: sizeTablet,
								label: "sizeTablet",
							}}
							lineHeightType={{
								value: lineHeightType,
								label: "lineHeightType",
							}}
							lineHeight={{
								value: lineHeight,
								label: "lineHeight",
							}}
							lineHeightMobile={{
								value: lineHeightMobile,
								label: "lineHeightMobile",
							}}
							lineHeightTablet={{
								value: lineHeightTablet,
								label: "lineHeightTablet",
							}}
						/>
					</>
				)}
			</PanelBody>
		)
	}

	const IconSettings = () => {
	
		return (
			<PanelBody
				title={ __(
					'Icon',
					'ultimate-addons-for-gutenberg'
				) }
				initialOpen={ true }
			>
				<Range
					label={__(
						"Size",
						"ultimate-addons-for-gutenberg"
					)}
					setAttributes={setAttributes}
					value={size}
					onChange={(value) =>
						setAttributes({ size: value })
					}
					min={0}
					max={50}
					unit={{
						value: sizeType,
						label: "sizeType",
					}}
				/>
			</PanelBody>
		)

	}

	const borderSettings = () => {
	
		return (
			<PanelBody
				title={ __(
					'Border',
					'ultimate-addons-for-gutenberg'
				) }
				initialOpen={ false }
			>
				<Border
					setAttributes={setAttributes}
					borderStyle={{
						value: borderStyle,
						label: "borderStyle",
						title: __("Style", "ultimate-addons-for-gutenberg"),
					}}
					borderWidth={{
						value: borderWidth,
						label: "borderWidth",
						title: __("Width", "ultimate-addons-for-gutenberg"),
					}}
					borderRadius={{
						value: borderRadius,
						label: "borderRadius",
						title: __("Radius", "ultimate-addons-for-gutenberg"),
					}}
					borderColor={{
						value: borderColor,
						label: "borderColor",
						title: __("Color", "ultimate-addons-for-gutenberg"),
					}}
					borderHoverColor={{
						value: borderHColor,
						label: "borderHColor",
						title: __(
							"Hover Color",
							"ultimate-addons-for-gutenberg"
						),
					}}
					disableBottomSeparator={true}
				/>
			</PanelBody>
		)};

	const spacingSettings = () => {

		return (
			<PanelBody
				title={ __(
					'Spacing',
					'ultimate-addons-for-gutenberg'
				) }
				initialOpen={ false }
			>				
			<SpacingControl
				{...props}
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
					value: topTabletPadding,
					label: "topTabletPadding",
				}}
				valueRightTablet={{
					value: rightTabletPadding,
					label: "rightTabletPadding",
				}}
				valueBottomTablet={{
					value: bottomTabletPadding,
					label: "bottomTabletPadding",
				}}
				valueLeftTablet={{
					value: leftTabletPadding,
					label: "leftTabletPadding",
				}}
				valueTopMobile={{
					value: topMobilePadding,
					label: "topMobilePadding",
				}}
				valueRightMobile={{
					value: rightMobilePadding,
					label: "rightMobilePadding",
				}}
				valueBottomMobile={{
					value: bottomMobilePadding,
					label: "bottomMobilePadding",
				}}
				valueLeftMobile={{
					value: leftMobilePadding,
					label: "leftMobilePadding",
				}}
				unit={{
					value: paddingUnit,
					label: "paddingUnit",
				}}
				mUnit={{
					value: mobilePaddingUnit,
					label: "mobilePaddingUnit",
				}}
				tUnit={{
					value: tabletPaddingUnit,
					label: "tabletPaddingUnit",
				}}
				attributes={attributes}
				setAttributes={setAttributes}
				link={{
					value: paddingLink,
					label: "paddingLink",
				}}
			/>
			</PanelBody>
		)};

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
				<InspectorTab {...UAGTabs.general}>
				{ buttonSettings() }
				</InspectorTab>
				<InspectorTab {...UAGTabs.style}>
				{ ! inheritFromTheme && ( textSettings() ) }
				{ ( '' !== icon && inheritFromTheme ) && ( IconSettings() ) }
				{ ! inheritFromTheme && ( borderSettings() ) }
				{ ! inheritFromTheme && ( spacingSettings() ) }
				{ ( '' == icon && inheritFromTheme ) && ( 
					<p className="uagb-settings-notice">
						{__(
							"There is no style available for the inheritFromTheme option.",
							"ultimate-addons-for-gutenberg"
						)}
					</p>
				) }
				</InspectorTab>
				<InspectorTab {...UAGTabs.advance} parentProps = {props}></InspectorTab>
			</InspectorTabs>
			</InspectorControls>
		</Suspense>
	);
};

export default React.memo( Settings );
