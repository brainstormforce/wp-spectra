import React, { Suspense } from 'react';
import lazyLoader from '@Controls/lazy-loader';
import WebfontLoader from '@Components/typography/fontloader';
import TypographyControl from '@Components/typography';
import { __ } from '@wordpress/i18n';
import { select } from '@wordpress/data';
import {
	BlockControls,
	BlockAlignmentToolbar,
	InspectorControls,
} from '@wordpress/block-editor';
import InspectorTabs from "@Components/inspector-tabs/InspectorTabs.js";
import InspectorTab, { UAGTabs } from "@Components/inspector-tabs/InspectorTab.js";
import Range from "@Components/range/Range.js";
import ResponsiveSlider from "@Components/responsive-slider";
import MultiButtonsControl from "@Components/multi-buttons-control";

import {
	PanelBody,
	ToggleControl,
} from '@wordpress/components';

const Settings = ( props ) => {
	props = props.parentProps;
	const { attributes, setAttributes, deviceType, clientId } = props;

	const {
		align,
		gap,
		inner_gap,
		stack,
		icon_layout,
		iconPosition,
		size,
		sizeType,
		sizeMobile,
		sizeTablet,
		hideLabel,
		borderRadius,
		bgSize,
		border,
		fontSize,
		fontSizeType,
		fontSizeMobile,
		fontSizeTablet,
		fontFamily,
		fontWeight,
		fontSubset,
		lineHeight,
		lineHeightType,
		lineHeightMobile,
		lineHeightTablet,
		loadGoogleFonts,
	} = attributes;

	let googleFonts;

	if ( loadGoogleFonts == true ) {
		const hconfig = {
			google: {
				families: [
					fontFamily + ( fontWeight ? ':' + fontWeight : '' ),
				],
			},
		};

		googleFonts = <WebfontLoader config={ hconfig }></WebfontLoader>;
	}

	const blockControls = () => {
		return (
			<BlockControls>
				<BlockAlignmentToolbar
					value={ align }
					onChange={ ( value ) => {
						setAttributes( { align: value } );
					} }
					controls={ [ 'left', 'center', 'right' ] }
				/>
			</BlockControls>
		);
	};
	const changeChildAttr = ( value ) => {
		const getChildBlocks = select( 'core/block-editor' ).getBlocks(
			clientId
		);

		getChildBlocks.forEach( ( iconChild ) => {
			iconChild.attributes.hideLabel = value;
		} );
		setAttributes( { hideLabel: value } );
	};

	const generalSetting = () => {
		return (

				<PanelBody
					initialOpen={ true }
				>
					<MultiButtonsControl
						setAttributes={setAttributes}
						label={__(
							"Layout",
							"ultimate-addons-for-gutenberg"
						)}
						data={{
							value: icon_layout,
							label: "icon_layout",
						}}
						className="uagb-multi-button-alignment-control"
						options={[
							{
								value: 'horizontal',
								label: __(
									'Horizontal',
									'ultimate-addons-for-gutenberg'
								),
								tooltip: __(
									"Horizontal",
									"ultimate-addons-for-gutenberg"
								),
							},
							{
								value: 'vertical',
								label: __(
									'Vertical',
									'ultimate-addons-for-gutenberg'
								),
								tooltip: __(
									"Vertical",
									"ultimate-addons-for-gutenberg"
								),
							},
						]}
						showIcons={false}
					/>
					{ 'horizontal' == icon_layout && (
						<>
							<MultiButtonsControl
								setAttributes={setAttributes}
								label={__(
									"Stack On",
									"ultimate-addons-for-gutenberg"
								)}
								data={{
									value: stack,
									label: "stack",
								}}
								className="uagb-multi-button-alignment-control"
								options={[
									{
										value: 'none',
										label: __(
											'None',
											'ultimate-addons-for-gutenberg'
										),
										tooltip: __(
											"None",
											"ultimate-addons-for-gutenberg"
										),
									},
									{
										value: 'tablet',
										label: __(
											'Tablet',
											'ultimate-addons-for-gutenberg'
										),
										tooltip: __(
											"Tablet",
											"ultimate-addons-for-gutenberg"
										),
									},
									{
										value: 'mobile',
										label: __(
											'Mobile',
											'ultimate-addons-for-gutenberg'
										),
										tooltip: __(
											"Mobile",
											"ultimate-addons-for-gutenberg"
										),
									},
								]}
								showIcons={false}
								help={ __(
									'Note: Choose on what breakpoint the Icons will stack.',
									'ultimate-addons-for-gutenberg'
								) }
							/>
						</>
					) }
					{ ! hideLabel && (
					<>
						<MultiButtonsControl
							setAttributes={setAttributes}
							label={__("Icon Alignment", "ultimate-addons-for-gutenberg")}
							data={{
								value: iconPosition,
								label: "iconPosition",
							}}
							className="uagb-multi-button-alignment-control"
							options={[
								{
									value: "top",
									label: ("Top"),
									tooltip: __(
										"Top",
										"ultimate-addons-for-gutenberg"
									),
								},
								{
									value: "middle",
									label: ("Middle"),
									tooltip: __(
										"Middle",
										"ultimate-addons-for-gutenberg"
									),
								},
							]}
							showIcons={false}
							help={ __( "Note: This manages the Icon Position with respect to the Label.", 'ultimate-addons-for-gutenberg' ) }
						/>
					</>
					)}
					<ToggleControl
						label={ __(
							'Hide Labels',
							'ultimate-addons-for-gutenberg'
						) }
						checked={ hideLabel }
						onChange={ ( value ) => changeChildAttr( value ) }
					/>
				</PanelBody>
		);
	};

	const commonSetting = () => {
		return (
				<PanelBody
					title={ __( 'Spacing', 'ultimate-addons-for-gutenberg' ) }
					initialOpen={ false }
				>
					<Range
						label={__(
							"Gap between Items (px)",
							"ultimate-addons-for-gutenberg"
						)}
						setAttributes={setAttributes}
						value={gap}
						onChange={(value) =>
							setAttributes({ gap: value })
						}
						min={0}
						max={100}
						displayUnit={false}
						help={ __( "Note: For better editing experience, the gap between items might look larger than applied.  Viewing in frontend will show the actual results.", 'ultimate-addons-for-gutenberg' ) }
					/>
				</PanelBody>
		)
	}

	const labelSetting = () => {
		return (
				<PanelBody
					title={ __( 'Label', 'ultimate-addons-for-gutenberg' ) }
					initialOpen={ false }
				>
					<Range
						label={__(
							"Gap between Icon and Label (px)",
							"ultimate-addons-for-gutenberg"
						)}
						setAttributes={setAttributes}
						value={inner_gap}
						onChange={(value) =>
							setAttributes({ inner_gap: value })
						}
						min={0}
						max={100}
						displayUnit={false}
					/>
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
						fontSubset={ {
							value: fontSubset,
							label: 'fontSubset',
						} }
						fontSizeType={ {
							value: fontSizeType,
							label: 'fontSizeType',
						} }
						fontSize={ { value: fontSize, label: 'fontSize' } }
						fontSizeMobile={ {
							value: fontSizeMobile,
							label: 'fontSizeMobile',
						} }
						fontSizeTablet={ {
							value: fontSizeTablet,
							label: 'fontSizeTablet',
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
				</PanelBody>
		)
	}

	const iconSetting = () => {
		return (
				<PanelBody
					title={ __( 'Icon', 'ultimate-addons-for-gutenberg' ) }
					initialOpen={ true }
				>
					<ResponsiveSlider
						label={__(
							"Size",
							"ultimate-addons-for-gutenberg"
						)}
						data={{
							desktop: {
								value: size,
								label: "size",
							},
							tablet: {
								value: sizeTablet,
								label: "sizeTablet",
							},
							mobile: {
								value: sizeMobile,
								label: "sizeMobile",
							},
						}}
						min={0}
						max={500}
						unit={{
							value: sizeType,
							label: "sizeType",
						}}
						units={[
							{
								name: __(
									"Pixel",
									"ultimate-addons-for-gutenberg"
								),
								unitValue: "px",
							},
							{
								name: __(
									"Em",
									"ultimate-addons-for-gutenberg"
								),
								unitValue: "em",
							},
						]}
						setAttributes={setAttributes}
					/>
					<Range
						label={__(
							"Background Size (px)",
							"ultimate-addons-for-gutenberg"
						)}
						setAttributes={setAttributes}
						value={bgSize}
						onChange={(value) =>
							setAttributes({ bgSize: value })
						}
						min={0}
						max={500}
						displayUnit={false}
						help={ __( "Note: Background Size option is useful when one adds background color to the icons.", 'ultimate-addons-for-gutenberg' ) }
					/>
					<Range
						label={__(
							"Border (px)",
							"ultimate-addons-for-gutenberg"
						)}
						setAttributes={setAttributes}
						value={border}
						onChange={(value) =>
							setAttributes({ border: value })
						}
						min={0}
						max={10}
						displayUnit={false}
						help={ __( "Note: Border option is useful when one adds border color to the icons.", 'ultimate-addons-for-gutenberg' ) }
					/>
					<Range
						label={__(
							"Border Radius (px)",
							"ultimate-addons-for-gutenberg"
						)}
						setAttributes={setAttributes}
						value={borderRadius}
						onChange={(value) =>
							setAttributes({ borderRadius: value })
						}
						min={0}
						max={500}
						displayUnit={false}
						help={ __( "Note: Border Radius option is useful when one adds background color to the icons.", 'ultimate-addons-for-gutenberg' ) }
					/>
				</PanelBody>
		)
	}

	return (
		<Suspense fallback={ lazyLoader() }>
			{ blockControls() }
			<InspectorControls>
			<InspectorTabs>
				<InspectorTab {...UAGTabs.general}>
				{ generalSetting() }
				</InspectorTab>
				<InspectorTab {...UAGTabs.style}>
					{iconSetting()}
					{ ! hideLabel && ( labelSetting() ) }
					{commonSetting()}
				</InspectorTab>
				<InspectorTab {...UAGTabs.advance}  parentProps = {props}></InspectorTab>
			</InspectorTabs>
			</InspectorControls>
			{ googleFonts }
		</Suspense>
	);
};

export default React.memo( Settings );
