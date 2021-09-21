import React, { Suspense } from 'react';
import lazyLoader from '@Controls/lazy-loader';
import TypographyControl from '@Components/typography';
import WebfontLoader from '@Components/typography/fontloader';
import InspectorTabs from '@Components/inspector-tabs/InspectorTabs.js';
import InspectorTab, {
	UAGTabs,
} from '@Components/inspector-tabs/InspectorTab.js';
import AdvancedPopColorControl from '@Components/color-control/advanced-pop-color-control.js';
import Range from '@Components/range/Range.js';
import MultiButtonsControl from '@Components/multi-buttons-control';

import { __ } from '@wordpress/i18n';

import {
	AlignmentToolbar,
	BlockControls,
	InspectorControls,
} from '@wordpress/block-editor';

import { PanelBody, SelectControl } from '@wordpress/components';

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
				<MultiButtonsControl
					setAttributes={ setAttributes }
					label={ __(
						'Heading Tag',
						'ultimate-addons-for-gutenberg'
					) }
					data={ {
						value: headingTag,
						label: 'headingTag',
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
				title={ __( 'Heading', 'ultimate-addons-for-gutenberg' ) }
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
						fontSize={ {
							value: headFontSize,
							label: 'headFontSize',
						} }
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
					label={ __( 'Color', 'ultimate-addons-for-gutenberg' ) }
					colorValue={ headingColor ? headingColor : '' }
					onColorChange={ ( value ) =>
						setAttributes( { headingColor: value } )
					}
				/>
				<Range
					label={ __(
						'Bottom Spacing (px)',
						'ultimate-addons-for-gutenberg'
					) }
					setAttributes={ setAttributes }
					value={ headSpace }
					onChange={ ( value ) =>
						setAttributes( { headSpace: value } )
					}
					min={ 0 }
					max={ 500 }
					displayUnit={ false }
				/>
			</PanelBody>
		);
	};

	const subheadingPanel = () => {
		return (
			<PanelBody
				title={ __( 'Description', 'ultimate-addons-for-gutenberg' ) }
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
					label={ __( 'Color', 'ultimate-addons-for-gutenberg' ) }
					colorValue={ subHeadingColor ? subHeadingColor : '' }
					onColorChange={ ( value ) =>
						setAttributes( { subHeadingColor: value } )
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
				<SelectControl
					label={ __( 'Style', 'ultimate-addons-for-gutenberg' ) }
					value={ seperatorStyle }
					onChange={ ( value ) =>
						setAttributes( { seperatorStyle: value } )
					}
					options={ [
						{
							value: 'none',
							label: __(
								'None',
								'ultimate-addons-for-gutenberg'
							),
						},
						{
							value: 'solid',
							label: __(
								'Solid',
								'ultimate-addons-for-gutenberg'
							),
						},
						{
							value: 'double',
							label: __(
								'Double',
								'ultimate-addons-for-gutenberg'
							),
						},
						{
							value: 'dashed',
							label: __(
								'Dashed',
								'ultimate-addons-for-gutenberg'
							),
						},
						{
							value: 'dotted',
							label: __(
								'Dotted',
								'ultimate-addons-for-gutenberg'
							),
						},
					] }
				/>
				{ 'none' !== seperatorStyle && (
					<>
						<Range
							label={ __(
								'Width',
								'ultimate-addons-for-gutenberg'
							) }
							setAttributes={ setAttributes }
							value={ separatorWidth }
							onChange={ ( value ) =>
								setAttributes( {
									separatorWidth: value,
								} )
							}
							min={ 0 }
							max={ '%' === separatorWidthType ? 100 : 500 }
							unit={ {
								value: separatorWidthType,
								label: 'separatorWidthType',
							} }
							units={ [
								{
									name: __(
										'Pixel',
										'ultimate-addons-for-gutenberg'
									),
									unitValue: 'px',
								},
								{
									name: __(
										'%',
										'ultimate-addons-for-gutenberg'
									),
									unitValue: '%',
								},
							] }
						/>
						<Range
							label={ __(
								'Thickness(px)',
								'ultimate-addons-for-gutenberg'
							) }
							setAttributes={ setAttributes }
							value={ separatorHeight }
							onChange={ ( value ) =>
								setAttributes( {
									separatorHeight: value,
								} )
							}
							min={ 0 }
							max={ 20 }
							displayUnit={ false }
						/>
						<AdvancedPopColorControl
							label={ __(
								'Color',
								'ultimate-addons-for-gutenberg'
							) }
							colorValue={
								separatorColor ? separatorColor : ''
							}
							onColorChange={ ( value ) =>
								setAttributes( {
									separatorColor: value,
								} )
							}
						/>
					</>
				) }
				{ seperatorStyle !== 'none' && (
					<Range
						label={ __(
							'Bottom Spacing (px)',
							'ultimate-addons-for-gutenberg'
						) }
						setAttributes={ setAttributes }
						value={ separatorSpace }
						onChange={ ( value ) =>
							setAttributes( { separatorSpace: value } )
						}
						min={ 0 }
						max={ 500 }
						displayUnit={ false }
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
					<InspectorTab { ...UAGTabs.general }>
						{ generalPanel() }
					</InspectorTab>
					<InspectorTab { ...UAGTabs.style }>
						{ headingPanel() }
						{ seperatorSettings() }
						{ subheadingPanel() }
					</InspectorTab>
					<InspectorTab
						{ ...UAGTabs.advance }
						parentProps={ props }
					></InspectorTab>
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
