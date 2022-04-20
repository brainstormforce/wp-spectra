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
import presets from './presets';
import UAGPresets from '@Components/presets';
import {
	AlignmentToolbar,
	BlockControls,
	InspectorControls,
} from '@wordpress/block-editor';
import renderSVG from '@Controls/renderIcon';
import { SelectControl, Icon } from '@wordpress/components';
import SpacingControl from '@Components/spacing-control';


// Extend component
import UAGAdvancedPanelBody from '@Components/advanced-panel-body';

const Settings = ( props ) => {
	props = props.parentProps;
	const { attributes, deviceType, setAttributes } = props;
	const {
		headingAlign,
		headingColor,
		subHeadingColor,
		separatorColor,
		headingTag,
		headFontFamily,
		headFontWeight,
		headFontStyle,
		headFontSizeType,
		headFontSize,
		headFontSizeMobile,
		headFontSizeTablet,
		headLineHeightType,
		headLineHeight,
		headLineHeightMobile,
		headLineHeightTablet,
		headLetterSpacing,
		headLetterSpacingTablet,
		headLetterSpacingMobile,
		headLetterSpacingType,
		// sub head
		subHeadFontFamily,
		subHeadFontWeight,
		subHeadFontStyle,
		subHeadFontSize,
		subHeadFontSizeType,
		subHeadFontSizeMobile,
		subHeadFontSizeTablet,
		subHeadLineHeight,
		subHeadLineHeightType,
		subHeadLineHeightMobile,
		subHeadLineHeightTablet,
		headTransform,
		headDecoration,
		subHeadTransform,
		subHeadDecoration,
		separatorWidth,
		separatorWidthType,
		seperatorStyle,
		separatorHeight,
		headSpace,
		separatorSpace,
		headLoadGoogleFonts,
		subHeadLoadGoogleFonts,
		subHeadLetterSpacing,
		subHeadLetterSpacingTablet,
		subHeadLetterSpacingMobile,
		subHeadLetterSpacingType,
		// padding
		headingBlockTopPadding,
		headingBlockRightPadding,
		headingBlockLeftPadding,
		headingBlockBottomPadding,
		headingBlockTopPaddingTablet,
		headingBlockRightPaddingTablet,
		headingBlockLeftPaddingTablet,
		headingBlockBottomPaddingTablet,
		headingBlockTopPaddingMobile,
		headingBlockRightPaddingMobile,
		headingBlockLeftPaddingMobile,
		headingBlockBottomPaddingMobile,
		headingBlockPaddingUnit,
		headingBlockPaddingUnitTablet,
		headingBlockPaddingUnitMobile,
		headingBlockPaddingLink,
		// margin
		headingBlockTopMargin,
		headingBlockRightMargin,
		headingBlockLeftMargin,
		headingBlockBottomMargin,
		headingBlockTopMarginTablet,
		headingBlockRightMarginTablet,
		headingBlockLeftMarginTablet,
		headingBlockBottomMarginTablet,
		headingBlockTopMarginMobile,
		headingBlockRightMarginMobile,
		headingBlockLeftMarginMobile,
		headingBlockBottomMarginMobile,
		headingBlockMarginUnit,
		headingBlockMarginUnitTablet,
		headingBlockMarginUnitMobile,
		headingBlockMarginLink,
		// link
		linkColor,
		linkHColor,
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
			<UAGAdvancedPanelBody
				title={ __( 'Content', 'ultimate-addons-for-gutenberg' ) }
				initialOpen={ false }
			>
				<MultiButtonsControl
					setAttributes={ setAttributes }
					label={ __( 'Alignment', 'ultimate-addons-for-gutenberg' ) }
					data={ {
						value: headingAlign,
						label: 'headingAlign',
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
						{
							value: 'p',
							label: __( 'P', 'ultimate-addons-for-gutenberg' ),
						},
						{
							value: 'div',
							label: __( 'Div', 'ultimate-addons-for-gutenberg' ),
						},
					] }
				/>
				<SelectControl
					label={ __( 'Separator Style', 'ultimate-addons-for-gutenberg' ) }
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
			</UAGAdvancedPanelBody>
		);
	};

	const headingPanel = () => {
		return (
			<UAGAdvancedPanelBody
				title={ __( 'Heading', 'ultimate-addons-for-gutenberg' ) }
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
						fontStyle={ {
							value: headFontStyle,
							label: 'headFontStyle',
						} }
						transform={ {
							value: headTransform,
							label: 'headTransform',
						} }
						decoration={ {
							value: headDecoration,
							label: 'headDecoration',
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
						letterSpacing={ {
							value: headLetterSpacing,
							label: 'headLetterSpacing',
						} }
						letterSpacingTablet={ {
							value: headLetterSpacingTablet,
							label: 'headLetterSpacingTablet',
						} }
						letterSpacingMobile={ {
							value: headLetterSpacingMobile,
							label: 'headLetterSpacingMobile',
						} }
						letterSpacingType={ {
							value: headLetterSpacingType,
							label: 'headLetterSpacingType',
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
					max={ 200 }
					displayUnit={ false }
				/>
			</UAGAdvancedPanelBody>
		);
	};

	const subheadingPanel = () => {
		return (
			<UAGAdvancedPanelBody
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
						fontStyle={ {
							value: subHeadFontStyle,
							label: 'subHeadFontStyle',
						} }
						transform={ {
							value: subHeadTransform,
							label: 'subHeadTransform',
						} }
						decoration={ {
							value: subHeadDecoration,
							label: 'subHeadDecoration',
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
						letterSpacing={ {
							value: subHeadLetterSpacing,
							label: 'subHeadLetterSpacing',
						} }
						letterSpacingTablet={ {
							value: subHeadLetterSpacingTablet,
							label: 'subHeadLetterSpacingTablet',
						} }
						letterSpacingMobile={ {
							value: subHeadLetterSpacingMobile,
							label: 'subHeadLetterSpacingMobile',
						} }
						letterSpacingType={ {
							value: subHeadLetterSpacingType,
							label: 'subHeadLetterSpacingType',
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
			</UAGAdvancedPanelBody>
		);
	};

	const seperatorSettings = () => {
		return (
			<UAGAdvancedPanelBody
				title={ __( 'Separator', 'ultimate-addons-for-gutenberg' ) }
				initialOpen={ false }
			>

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
					max={ 200 }
					displayUnit={ false }
				/>
			</UAGAdvancedPanelBody>
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

	const spacingStylePanel = () => {
		return (
			<UAGAdvancedPanelBody
				title={ __( 'Spacing', 'ultimate-addons-for-gutenberg' ) }
				initialOpen={ false }
			>
				<SpacingControl
					label={ __(
						'Padding',
						'ultimate-addons-for-gutenberg'
					) }
					valueTop={ {
						value: headingBlockTopPadding,
						label: 'headingBlockTopPadding',
					} }
					valueRight={ {
						value: headingBlockRightPadding,
						label: 'headingBlockRightPadding',
					} }
					valueBottom={ {
						value: headingBlockBottomPadding,
						label: 'headingBlockBottomPadding',
					} }
					valueLeft={ {
						value: headingBlockLeftPadding,
						label: 'headingBlockLeftPadding',
					} }
					valueTopTablet={ {
						value: headingBlockTopPaddingTablet,
						label: 'headingBlockTopPaddingTablet',
					} }
					valueRightTablet={ {
						value: headingBlockRightPaddingTablet,
						label: 'headingBlockRightPaddingTablet',
					} }
					valueBottomTablet={ {
						value: headingBlockBottomPaddingTablet,
						label: 'headingBlockBottomPaddingTablet',
					} }
					valueLeftTablet={ {
						value: headingBlockLeftPaddingTablet,
						label: 'headingBlockLeftPaddingTablet',
					} }
					valueTopMobile={ {
						value: headingBlockTopPaddingMobile,
						label: 'headingBlockTopPaddingMobile',
					} }
					valueRightMobile={ {
						value: headingBlockRightPaddingMobile,
						label: 'headingBlockRightPaddingMobile',
					} }
					valueBottomMobile={ {
						value: headingBlockBottomPaddingMobile,
						label: 'headingBlockBottomPaddingMobile',
					} }
					valueLeftMobile={ {
						value: headingBlockLeftPaddingMobile,
						label: 'headingBlockLeftPaddingMobile',
					} }
					unit={ {
						value: headingBlockPaddingUnit,
						label: 'headingBlockPaddingUnit',
					} }
					mUnit={ {
						value: headingBlockPaddingUnitMobile,
						label: 'headingBlockPaddingUnitMobile',
					} }
					tUnit={ {
						value: headingBlockPaddingUnitTablet,
						label: 'headingBlockPaddingUnitTablet',
					} }
					deviceType={ deviceType }
					attributes={ attributes }
					setAttributes={ setAttributes }
					link={ {
						value: headingBlockPaddingLink,
						label: 'headingBlockPaddingLink',
					} }
				/>
				<SpacingControl
					label={ __(
						'Margin',
						'ultimate-addons-for-gutenberg'
					) }
					valueTop={ {
						value: headingBlockTopMargin,
						label: 'headingBlockTopMargin',
					} }
					valueRight={ {
						value: headingBlockRightMargin,
						label: 'headingBlockRightMargin',
					} }
					valueBottom={ {
						value: headingBlockBottomMargin,
						label: 'headingBlockBottomMargin',
					} }
					valueLeft={ {
						value: headingBlockLeftMargin,
						label: 'headingBlockLeftMargin',
					} }
					valueTopTablet={ {
						value: headingBlockTopMarginTablet,
						label: 'headingBlockTopMarginTablet',
					} }
					valueRightTablet={ {
						value: headingBlockRightMarginTablet,
						label: 'headingBlockRightMarginTablet',
					} }
					valueBottomTablet={ {
						value: headingBlockBottomMarginTablet,
						label: 'headingBlockBottomMarginTablet',
					} }
					valueLeftTablet={ {
						value: headingBlockLeftMarginTablet,
						label: 'headingBlockLeftMarginTablet',
					} }
					valueTopMobile={ {
						value: headingBlockTopMarginMobile,
						label: 'headingBlockTopMarginMobile',
					} }
					valueRightMobile={ {
						value: headingBlockRightMarginMobile,
						label: 'headingBlockRightMarginMobile',
					} }
					valueBottomMobile={ {
						value: headingBlockBottomMarginMobile,
						label: 'headingBlockBottomMarginMobile',
					} }
					valueLeftMobile={ {
						value: headingBlockLeftMarginMobile,
						label: 'headingBlockLeftMarginMobile',
					} }
					unit={ {
						value: headingBlockMarginUnit,
						label: 'headingBlockMarginUnit',
					} }
					mUnit={ {
						value: headingBlockMarginUnitMobile,
						label: 'headingBlockMarginUnitMobile',
					} }
					tUnit={ {
						value: headingBlockMarginUnitTablet,
						label: 'headingBlockMarginUnitTablet',
					} }
					deviceType={ deviceType }
					attributes={ attributes }
					setAttributes={ setAttributes }
					link={ {
						value: headingBlockMarginLink,
						label: 'headingBlockMarginLink',
					} }
				/>
			</UAGAdvancedPanelBody>
		);
	};

	const linkStylePanel = () => {
		return (
			<UAGAdvancedPanelBody
				title={ __( 'Link', 'ultimate-addons-for-gutenberg' ) }
				initialOpen={ false }
			>
				<AdvancedPopColorControl
					label={ __( 'Color', 'ultimate-addons-for-gutenberg' ) }
					colorValue={ linkColor }
					onColorChange={ ( value ) =>
						setAttributes( { linkColor: value } )
					}
				/>
				<AdvancedPopColorControl
					label={ __( 'Hover Color', 'ultimate-addons-for-gutenberg' ) }
					colorValue={ linkHColor }
					onColorChange={ ( value ) =>
						setAttributes( { linkHColor: value } )
					}
				/>
			</UAGAdvancedPanelBody>
		);
	}

	return (
		<div>
			{ blockControlSettings() }
			<InspectorControls>
				<InspectorTabs>
					<InspectorTab { ...UAGTabs.general }>
						{ presetSettings() }
						{ generalPanel() }
					</InspectorTab>
					<InspectorTab { ...UAGTabs.style }>
						{ headingPanel() }
						{ 'none' !== seperatorStyle && seperatorSettings() }
						{ subheadingPanel() }
						{spacingStylePanel()}
						{linkStylePanel()}
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
