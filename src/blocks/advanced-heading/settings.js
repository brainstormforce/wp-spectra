import React, { Suspense } from 'react';
import lazyLoader from '@Controls/lazy-loader';
import TypographyControl from '@Components/typography';
import WebfontLoader from '@Components/typography/fontloader';
import InspectorTabs from "../../components/inspector-tabs/InspectorTabs.js";
import InspectorTab, {
	UAGTabs,
} from "../../components/inspector-tabs/InspectorTab.js";
import Border from "../../components/border";
import AdvancedPopColorControl from "../../components/color-control/advanced-pop-color-control.js";
import Range from "../../components/range/Range.js";

import { __ } from '@wordpress/i18n';

import {
	AlignmentToolbar,
	BlockControls,
	InspectorControls,
	ColorPalette,
} from '@wordpress/block-editor';

import {
	PanelBody,
	SelectControl,
	RangeControl,
	ButtonGroup,
	Button,
} from '@wordpress/components';

// Extend component
const Settings = ( props ) => {
	props = props.parentProps;
	const { attributes, setAttributes } = props;
	const {
		headingAlign,
		headingColor,
		subHeadingColor,
		separatorColor,
		headingTag,
		headFontFamily,
		headFontWeight,
		headFontSubset,
		headFontSizeType,
		headFontSize,
		headFontSizeMobile,
		headFontSizeTablet,
		headLineHeightType,
		headLineHeight,
		headLineHeightMobile,
		headLineHeightTablet,
		subHeadFontFamily,
		subHeadFontWeight,
		subHeadFontSubset,
		subHeadFontSize,
		subHeadFontSizeType,
		subHeadFontSizeMobile,
		subHeadFontSizeTablet,
		subHeadLineHeight,
		subHeadLineHeightType,
		subHeadLineHeightMobile,
		subHeadLineHeightTablet,
		separatorWidth,
		separatorWidthType,
		seperatorStyle,
		separatorHeight,
		headSpace,
		separatorSpace,
		headLoadGoogleFonts,
		subHeadLoadGoogleFonts,
		separatorHoverColor
	} = attributes;

	let loadHeadingGoogleFonts;
	let loadSubHeadingGoogleFonts;

	if ( headLoadGoogleFonts === true ) {
		const hconfig = {
			google: {
				families: [
					headFontFamily +
						( headFontWeight ? ':' + headFontWeight : '' ),
				],
			},
		};

		loadHeadingGoogleFonts = (
			<WebfontLoader config={ hconfig }></WebfontLoader>
		);
	}

	if ( subHeadLoadGoogleFonts === true ) {
		const sconfig = {
			google: {
				families: [
					subHeadFontFamily +
						( subHeadFontWeight ? ':' + subHeadFontWeight : '' ),
				],
			},
		};

		loadSubHeadingGoogleFonts = (
			<WebfontLoader config={ sconfig }></WebfontLoader>
		);
	}

	const blockControlSettings = () => {
		return (
			<BlockControls key="controls">
				<AlignmentToolbar
					value={ headingAlign }
					onChange={ ( value ) =>
						setAttributes( { headingAlign: value } )
					}
				/>
			</BlockControls>
		);
	};

	const generalPanel = () => {
		return (
			<PanelBody>
				<SelectControl
					label={ __(
						'Heading Tag',
						'ultimate-addons-for-gutenberg'
					) }
					value={ headingTag }
					onChange={ ( value ) => {
						setAttributes( { headingTag: value } );
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
			</PanelBody>
		);
	};

	const headingPanel = () => {
		return (
			<PanelBody
				title={ __(
					'Heading',
					'ultimate-addons-for-gutenberg'
				) }
			>
				<Suspense fallback={ lazyLoader() }>
				<TypographyControl
					label={ __(
						'Typography',
						'ultimate-addons-for-gutenberg'
					) }
					attributes={ attributes }
					setAttributes={ setAttributes }
					loadGoogleFonts={ {
						value: headLoadGoogleFonts,
						label: 'headLoadGoogleFonts',
					} }
					fontFamily={ {
						value: headFontFamily,
						label: 'headFontFamily',
					} }
					fontWeight={ {
						value: headFontWeight,
						label: 'headFontWeight',
					} }
					fontSubset={ {
						value: headFontSubset,
						label: 'headFontSubset',
					} }
					fontSizeType={ {
						value: headFontSizeType,
						label: 'headFontSizeType',
					} }
					fontSize={ { value: headFontSize, label: 'headFontSize' } }
					fontSizeMobile={ {
						value: headFontSizeMobile,
						label: 'headFontSizeMobile',
					} }
					fontSizeTablet={ {
						value: headFontSizeTablet,
						label: 'headFontSizeTablet',
					} }
					lineHeightType={ {
						value: headLineHeightType,
						label: 'headLineHeightType',
					} }
					lineHeight={ {
						value: headLineHeight,
						label: 'headLineHeight',
					} }
					lineHeightMobile={ {
						value: headLineHeightMobile,
						label: 'headLineHeightMobile',
					} }
					lineHeightTablet={ {
						value: headLineHeightTablet,
						label: 'headLineHeightTablet',
					} }
				/>
				</Suspense>
				<AdvancedPopColorControl
					label={__(
						"Color",
						"ultimate-addons-for-gutenberg"
					)}
					colorValue={headingColor ? headingColor : ""}
					onColorChange={(value) =>
						setAttributes({ headingColor: value })
					}
				/>
				<Range
					label={__(
						"Heading Bottom Spacing (px)",
						"ultimate-addons-for-gutenberg"
					)}
					setAttributes={setAttributes}
					value={headSpace}
					onChange={(value) =>
						setAttributes({ headSpace: value })
					}
					min={0}
					max={500}
					displayUnit={false}
				/>
			</PanelBody>
		);
	};

	const subheadingPanel = () => {
		return (
			<PanelBody
				title={ __(
					'Description',
					'ultimate-addons-for-gutenberg'
				) }
				initialOpen={ false }
			>
				<Suspense fallback={ lazyLoader() }>
					<TypographyControl
						label={ __(
							'Typography',
							'ultimate-addons-for-gutenberg'
						) }
						attributes={ attributes }
						setAttributes={ setAttributes }
						loadGoogleFonts={ {
							value: subHeadLoadGoogleFonts,
							label: 'subHeadLoadGoogleFonts',
						} }
						fontFamily={ {
							value: subHeadFontFamily,
							label: 'subHeadFontFamily',
						} }
						fontWeight={ {
							value: subHeadFontWeight,
							label: 'subHeadFontWeight',
						} }
						fontSubset={ {
							value: subHeadFontSubset,
							label: 'subHeadFontSubset',
						} }
						fontSizeType={ {
							value: subHeadFontSizeType,
							label: 'subHeadFontSizeType',
						} }
						fontSize={ {
							value: subHeadFontSize,
							label: 'subHeadFontSize',
						} }
						fontSizeMobile={ {
							value: subHeadFontSizeMobile,
							label: 'subHeadFontSizeMobile',
						} }
						fontSizeTablet={ {
							value: subHeadFontSizeTablet,
							label: 'subHeadFontSizeTablet',
						} }
						lineHeightType={ {
							value: subHeadLineHeightType,
							label: 'subHeadLineHeightType',
						} }
						lineHeight={ {
							value: subHeadLineHeight,
							label: 'subHeadLineHeight',
						} }
						lineHeightMobile={ {
							value: subHeadLineHeightMobile,
							label: 'subHeadLineHeightMobile',
						} }
						lineHeightTablet={ {
							value: subHeadLineHeightTablet,
							label: 'subHeadLineHeightTablet',
						} }
					/>
				</Suspense>
				<AdvancedPopColorControl
					label={__(
						"Color",
						"ultimate-addons-for-gutenberg"
					)}
					colorValue={subHeadingColor ? subHeadingColor : ""}
					onColorChange={(value) =>
						setAttributes({ subHeadingColor: value })
					}
				/>
			</PanelBody>
		);
	};

	const seperatorSettings = () => {
		return (
			<PanelBody
				title={ __( 'Separator', 'ultimate-addons-for-gutenberg' ) }
				initialOpen={ false }
			>
				<Border
					setAttributes={setAttributes}
					borderStyle={{
						value: seperatorStyle,
						label: "seperatorStyle",
						title: __(
							"Border Style",
							"ultimate-addons-for-gutenberg"
						),
					}}
					borderWidth={{
						value: separatorWidth,
						label: "separatorWidth",
						title: __(
							"Width",
							"ultimate-addons-for-gutenberg"
						),
					}}
					borderRadius={{
						value: separatorHeight,
						label: "separatorHeight",
						title: __(
							"Radius",
							"ultimate-addons-for-gutenberg"
						),
					}}
					borderColor={{
						value: separatorColor,
						label: "separatorColor",
						title: __(
							"Color",
							"ultimate-addons-for-gutenberg"
						),
					}}
					borderHoverColor={{
						value: separatorHoverColor,
						label: "separatorHoverColor",
						title: __(
							"Hover Color",
							"ultimate-addons-for-gutenberg"
						),
					}}
				/>
				{ seperatorStyle !== 'none' && (
					<Range
						label={__(
							"Separator Bottom Spacing (px)",
							"ultimate-addons-for-gutenberg"
						)}
						setAttributes={setAttributes}
						value={separatorSpace}
						onChange={(value) =>
							setAttributes({ separatorSpace: value })
						}
						min={0}
						max={500}
						displayUnit={false}
					/>
				) }
			</PanelBody>
		);
	};
	

	return (
		<div>
			{ blockControlSettings() }
			<InspectorControls>
				<InspectorTabs>
					<InspectorTab {...UAGTabs.general}>
					{ generalPanel() }
					</InspectorTab>
					<InspectorTab {...UAGTabs.style}>
					{ headingPanel()}
					{ subheadingPanel()}
					{ seperatorSettings() }
					</InspectorTab>
					<InspectorTab {...UAGTabs.advance}></InspectorTab>
				</InspectorTabs>
			</InspectorControls>
			<Suspense fallback={ lazyLoader() }>
				{ loadHeadingGoogleFonts }
				{ loadSubHeadingGoogleFonts }
			</Suspense>
		</div>
	);
};
export default React.memo( Settings );
