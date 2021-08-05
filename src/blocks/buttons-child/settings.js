/**
 * BLOCK: Buttons Child - Edit Class
 */

// Import classes
import FontIconPicker from '@fonticonpicker/react-fonticonpicker';
import renderSVG from '@Controls/renderIcon';
import { __ } from '@wordpress/i18n';
import lazyLoader from '@Controls/lazy-loader';
import React, { Suspense } from 'react';
import AdvancedPopColorControl from "@Components/color-control/advanced-pop-color-control.js";
import Border from "@Components/border";
import SpacingControl from "@Components/spacing-control";
import InspectorTabs from "@Components/inspector-tabs/InspectorTabs.js";
import InspectorTab from "@Components/inspector-tabs/InspectorTab.js";
import TypographyControl from '@Components/typography';

import {
	BlockControls,
	InspectorControls,
	__experimentalLinkControl,
} from '@wordpress/block-editor';

import {
	PanelBody,
	SelectControl,
	RangeControl,
	TabPanel,
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
					'Button Settings',
					'ultimate-addons-for-gutenberg'
				) }
				initialOpen={ true }
				className="uagb__url-panel-body"
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
				<h2>
					{ __( 'Button Icon', 'ultimate-addons-for-gutenberg' ) }
				</h2>
				<FontIconPicker 
					icons={ wp.UAGBSvgIcons }
					renderFunc={ renderSVG }
					theme="default"
					value={ icon }
					onChange={ ( value ) => ( setAttributes( { icon: value } ) )}
					isMulti={ false }
					noSelectedPlaceholder={ __(
						'Select Icon',
						'ultimate-addons-for-gutenberg'
					) } 
				/>
				{ '' !== icon && (
					<>
						<SelectControl
							label={ __(
								'Icon Position',
								'ultimate-addons-for-gutenberg'
							) }
							value={ iconPosition }
							onChange={ ( value ) =>
								setAttributes( { iconPosition: value } )
							}
							options={ [
								{
									value: 'before',
									label: __(
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
								},
							] }
						/>
						<RangeControl
							label={ __(
								'Icon Spacing',
								'ultimate-addons-for-gutenberg'
							) }
							value={ iconSpace }
							onChange={ ( value ) =>
								setAttributes( { iconSpace: value } )
							}
							min={ 0 }
							max={ 50 }
							beforeIcon=""
							allowReset
						/>
					</>
				) }
				{ ! inheritFromTheme && (
					<>
						<h2>
							{ __(
								' Color Settings',
								'ultimate-addons-for-gutenberg'
							) }
						</h2>
						<TabPanel
							className="uagb-inspect-tabs uagb-inspect-tabs-col-2"
							activeClass="active-tab"
							tabs={ [
								{
									name: 'normal',
									title: __(
										'Normal',
										'ultimate-addons-for-gutenberg'
									),
									className: 'uagb-normal-tab',
								},
								{
									name: 'hover',
									title: __(
										'Hover',
										'ultimate-addons-for-gutenberg'
									),
									className: 'uagb-hover-tab',
								},
							] }
						>
							{ ( tabName ) => {
								let btn_color_tab;
								if ( 'normal' === tabName.name ) {
									btn_color_tab = (
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
									);
								} else {
									btn_color_tab = (
										<>
											<AdvancedPopColorControl
												label={__(
													"Text Hover Color",
													"ultimate-addons-for-gutenberg"
												)}
												colorValue={hColor ? hColor : ""}
												onColorChange={(value) =>
													setAttributes({ hColor: value })
												}
											/>
											<AdvancedPopColorControl
												label={__(
													"Background Hover Color",
													"ultimate-addons-for-gutenberg"
												)}
												colorValue={hBackground ? hBackground : ""}
												onColorChange={(value) =>
													setAttributes({ hBackground: value })
												}
											/>
										</>
									);
								}
								return <div>{ btn_color_tab }</div>;
							} }
						</TabPanel>
						<hr className="uagb-editor__separator" />
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
						/>
						<hr className="uagb-editor__separator" />
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
						<hr className="uagb-editor__separator" />
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
					</>
				) }
			</PanelBody>
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
			<InspectorTabs tabs={["general", "advance"]}>
				<InspectorTab key={"general"}>
				{ buttonSettings() }
				</InspectorTab>
				<InspectorTab key={"advance"}></InspectorTab>
			</InspectorTabs>
			</InspectorControls>
		</Suspense>
	);
};

export default React.memo( Settings );
