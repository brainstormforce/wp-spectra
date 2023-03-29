import { memo } from '@wordpress/element';

import TypographyControl from '@Components/typography';
import InspectorTabs from '@Components/inspector-tabs/InspectorTabs.js';
import InspectorTab, {
	UAGTabs,
} from '@Components/inspector-tabs/InspectorTab.js';
import AdvancedPopColorControl from '@Components/color-control/advanced-pop-color-control.js';
import Range from '@Components/range/Range.js';
import MultiButtonsControl from '@Components/multi-buttons-control';
import { __ } from '@wordpress/i18n';
import {
	InspectorControls,
} from '@wordpress/block-editor';
import renderSVG from '@Controls/renderIcon';
import { Icon, ToggleControl } from '@wordpress/components';
import SpacingControl from '@Components/spacing-control';
import ColorSwitchControl from '@Components/color-switch-control';
import TextShadowControl from '@Components/text-shadow';
import UAGTabsControl from '@Components/tabs';
import ResponsiveBorder from '@Components/responsive-border'
import ResponsiveSlider from '@Components/responsive-slider';
import UAGSelectControl from '@Components/select-control';
// Extend component
import UAGAdvancedPanelBody from '@Components/advanced-panel-body';

const Settings = ( props ) => {
	props = props.parentProps;
	const { attributes, deviceType, setAttributes } = props;
	const {
		block_id,
		headingTitleToggle,
		headingAlign,
		headingAlignTablet,
		headingAlignMobile,
		headingColorType,
		headingColor,
		headingGradientColor,
		blockBackgroundType,
		blockBackground,
		blockGradientBackground,
		subHeadingColor,
		subHeadSpace,
		subHeadSpaceTablet,
		subHeadSpaceMobile,
		subHeadSpaceType,
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
		headShadowColor,
		headShadowHOffset,
		headShadowVOffset,
		headShadowBlur,
		// sub head
		headingDescToggle,
		headingDescPosition,
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
		separatorWidthTablet,
		separatorWidthMobile,
		separatorWidthType,
		seperatorStyle,
		seperatorPosition,
		separatorHeight,
		separatorHeightType,
		headSpace,
		headSpaceTablet,
		headSpaceMobile,
		headSpaceType,
		separatorSpace,
		separatorSpaceTablet,
		separatorSpaceMobile,
		separatorSpaceType,
		headLoadGoogleFonts,
		subHeadLoadGoogleFonts,
		subHeadLetterSpacing,
		subHeadLetterSpacingTablet,
		subHeadLetterSpacingMobile,
		subHeadLetterSpacingType,
		// padding
		blockTopPadding,
		blockRightPadding,
		blockLeftPadding,
		blockBottomPadding,
		blockTopPaddingTablet,
		blockRightPaddingTablet,
		blockLeftPaddingTablet,
		blockBottomPaddingTablet,
		blockTopPaddingMobile,
		blockRightPaddingMobile,
		blockLeftPaddingMobile,
		blockBottomPaddingMobile,
		blockPaddingUnit,
		blockPaddingUnitTablet,
		blockPaddingUnitMobile,
		blockPaddingLink,
		// margin
		blockTopMargin,
		blockRightMargin,
		blockLeftMargin,
		blockBottomMargin,
		blockTopMarginTablet,
		blockRightMarginTablet,
		blockLeftMarginTablet,
		blockBottomMarginTablet,
		blockTopMarginMobile,
		blockRightMarginMobile,
		blockLeftMarginMobile,
		blockBottomMarginMobile,
		blockMarginUnit,
		blockMarginUnitTablet,
		blockMarginUnitMobile,
		blockMarginLink,
		// link
		linkColor,
		linkHColor,
		// Highlight
		highLightColor,
		highLightBackground,
		highLightLoadGoogleFonts,
		highLightFontFamily,
		highLightFontWeight,
		highLightFontStyle,
		highLightTransform,
		highLightDecoration,
		highLightFontSizeType,
		highLightLineHeightType,
		highLightFontSize,
		highLightFontSizeTablet,
		highLightFontSizeMobile,
		highLightLineHeight,
		highLightLineHeightTablet,
		highLightLineHeightMobile,
		highLightLetterSpacing,
		highLightLetterSpacingTablet,
		highLightLetterSpacingMobile,
		highLightLetterSpacingType,
		highLightTopPadding,
		highLightRightPadding,
		highLightLeftPadding,
		highLightBottomPadding,
		highLightTopPaddingTablet,
		highLightRightPaddingTablet,
		highLightLeftPaddingTablet,
		highLightBottomPaddingTablet,
		highLightTopPaddingMobile,
		highLightRightPaddingMobile,
		highLightLeftPaddingMobile,
		highLightBottomPaddingMobile,
		highLightPaddingUnit,
		highLightPaddingUnitTablet,
		highLightPaddingUnitMobile,
		highLightPaddingLink,
	} = attributes;

	let separatorPositionOptions = [
		{
			value: 'above-heading',
			label: __(
				'Above Heading',
				'ultimate-addons-for-gutenberg'
			),
		},
		{
			value: 'below-heading',
			label: __(
				'Below Heading',
				'ultimate-addons-for-gutenberg'
			),
		},
		{
			value: 'above-sub-heading',
			label: __(
				'Above Sub-heading',
				'ultimate-addons-for-gutenberg'
			),
		},
		{
			value: 'below-sub-heading',
			label: __(
				'Below Sub-heading',
				'ultimate-addons-for-gutenberg'
			),
		},
	];
 	if( ! headingTitleToggle ) {
		separatorPositionOptions = [
			{
				value: 'above-sub-heading',
				label: __(
					'Above Sub-heading',
					'ultimate-addons-for-gutenberg'
				),
			},
			{
				value: 'below-sub-heading',
				label: __(
					'Below Sub-heading',
					'ultimate-addons-for-gutenberg'
				),
			},
		];
	}
	if( ! headingDescToggle ) {
		separatorPositionOptions = [
			{
				value: 'above-heading',
				label: __(
					'Above Heading',
					'ultimate-addons-for-gutenberg'
				),
			},
			{
				value: 'below-heading',
				label: __(
					'Below Heading',
					'ultimate-addons-for-gutenberg'
				),
			},
		];
	}
	if( headingDescToggle && 'above-heading' === headingDescPosition ) {
		separatorPositionOptions = [
			{
				value: 'above-heading',
				label: __(
					'Above Heading',
					'ultimate-addons-for-gutenberg'
				),
			},
			{
				value: 'below-heading',
				label: __(
					'Below Heading',
					'ultimate-addons-for-gutenberg'
				),
			},
			{
				value: 'above-sub-heading',
				label: __(
					'Above Sub-heading',
					'ultimate-addons-for-gutenberg'
				),
			},
		];
	}
	if( headingDescToggle && 'below-heading' === headingDescPosition ) {
		separatorPositionOptions = [
			{
				value: 'above-heading',
				label: __(
					'Above Heading',
					'ultimate-addons-for-gutenberg'
				),
			},
			{
				value: 'below-heading',
				label: __(
					'Below Heading',
					'ultimate-addons-for-gutenberg'
				),
			},
			{
				value: 'below-sub-heading',
				label: __(
					'Below Sub-heading',
					'ultimate-addons-for-gutenberg'
				),
			},
		];
	}
	const generalPanel = () => {

		return (
			<UAGAdvancedPanelBody
				title={ __( 'Content', 'ultimate-addons-for-gutenberg' ) }
				initialOpen={ true }
			>
				<MultiButtonsControl
					setAttributes={ setAttributes }
					label={ __( 'Alignment', 'ultimate-addons-for-gutenberg' ) }
					data={ {
						desktop: {
							value: headingAlign,
							label: 'headingAlign',
						},
						tablet: {
							value: headingAlignTablet,
							label: 'headingAlignTablet',
						},
						mobile: {
							value: headingAlignMobile,
							label: 'headingAlignMobile',
						},
					} }
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
					responsive={true}
				/>
				<ToggleControl
					label={ __(
						'Heading',
						'ultimate-addons-for-gutenberg'
					) }
					checked={ headingTitleToggle }
					onChange={ () =>
						setAttributes( { headingTitleToggle : ! headingTitleToggle } )
					}
				/>
				{
					headingTitleToggle && (
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
					)
				}
			</UAGAdvancedPanelBody>
		);
	};
	const subHeadingPanel = () => {
		return (
			<UAGAdvancedPanelBody
				title={ __( 'Sub Heading', 'ultimate-addons-for-gutenberg' ) }
				initialOpen={ false }
			>
				<ToggleControl
					label={ __(
						'Enable Sub Heading',
						'ultimate-addons-for-gutenberg'
					) }
					checked={ headingDescToggle }
					onChange={ () =>
						setAttributes( { headingDescToggle : ! headingDescToggle } )
					}
				/>
				{ headingDescToggle &&
					<UAGSelectControl
						label={ __(
							'Position',
							'ultimate-addons-for-gutenberg'
						) }
						data={ {
							value: headingDescPosition,
							label: 'headingDescPosition',
						} }
						setAttributes={ setAttributes }
						options={ [
							{
								value: 'above-heading',
								label: __(
									'Above Heading',
									'ultimate-addons-for-gutenberg'
								),
							},
							{
								value: 'below-heading',
								label: __(
									'Below Heading',
									'ultimate-addons-for-gutenberg'
								),
							},
						] }
					/>
				}
			</UAGAdvancedPanelBody>
		);
	};
	const separatorPanel = () => {
		return (
			<UAGAdvancedPanelBody
				title={ __( 'Separator', 'ultimate-addons-for-gutenberg' ) }
				initialOpen={ false }
			>
				<UAGSelectControl
					label={ __(
						'Style',
						'ultimate-addons-for-gutenberg'
					) }
					data={ {
						value: seperatorStyle,
						label: 'seperatorStyle',
					} }
					setAttributes={ setAttributes }
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
				{ 'none' !== seperatorStyle &&
					<UAGSelectControl
						label={ __(
							'Position',
							'ultimate-addons-for-gutenberg'
						) }
						data={ {
							value: seperatorPosition,
							label: 'seperatorPosition',
						} }
						setAttributes={ setAttributes }
						options={ separatorPositionOptions }
					/>
				}
			</UAGAdvancedPanelBody>
		);
	}
	const headingStylePanel = () => {
		return (
			<UAGAdvancedPanelBody
				title={ __( 'Heading', 'ultimate-addons-for-gutenberg' ) }
				initialOpen={ true }
			>

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

				<ColorSwitchControl
					label={__( 'Text Color', 'ultimate-addons-for-gutenberg' )}
					type={{
						value: headingColorType,
						label: 'headingColorType'
					}}
					classic={{
						value: headingColor,
						label: 'headingColor'
					}}
					gradient={{
						value: headingGradientColor,
						label: 'headingGradientColor'
					}}
					setAttributes={ setAttributes }
				/>
				<TextShadowControl
					blockId={ block_id }
					setAttributes={ setAttributes }
					label={ __(
						'Text Shadow',
						'ultimate-addons-for-gutenberg'
					) }
					textShadowColor={ {
						value: headShadowColor,
						label: 'headShadowColor',
						title: __( 'Color', 'ultimate-addons-for-gutenberg' ),
					} }
					textShadowHOffset={ {
						value: headShadowHOffset,
						label: 'headShadowHOffset',
						title: __(
							'Horizontal',
							'ultimate-addons-for-gutenberg'
						),
					} }
					textShadowVOffset={ {
						value: headShadowVOffset,
						label: 'headShadowVOffset',
						title: __(
							'Vertical',
							'ultimate-addons-for-gutenberg'
						),
					} }
					textShadowBlur={ {
						value: headShadowBlur,
						label: 'headShadowBlur',
						title: __( 'Blur', 'ultimate-addons-for-gutenberg' ),
					} }
					popup={ true }
				/>
				<ResponsiveSlider
					label={ __(
						'Bottom Spacing',
						'ultimate-addons-for-gutenberg'
					) }
					data={ {
						desktop: {
							value: headSpace,
							label: 'headSpace',
						},
						tablet: {
							value: headSpaceTablet,
							label: 'headSpaceTablet',
						},
						mobile: {
							value: headSpaceMobile,
							label: 'headSpaceMobile',
						},
					} }
					min={ 0 }
					max={ 200 }
					unit={ {
						value: headSpaceType,
						label: 'headSpaceType',
					} }
					units={ [
						{
							name: __(
								'Pixel',
								'ultimate-addons-for-gutenberg'
							),
							unitValue: 'px',
						},
					] }
					setAttributes={ setAttributes }
				/>
			</UAGAdvancedPanelBody>
		);
	};

	const subHeadingStylePanel = () => {
		return (
			<UAGAdvancedPanelBody
				title={ __( 'Sub Heading', 'ultimate-addons-for-gutenberg' ) }
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

				<AdvancedPopColorControl
					label={ __( 'Color', 'ultimate-addons-for-gutenberg' ) }
					colorValue={ subHeadingColor ? subHeadingColor : '' }
					data={ {
						value: subHeadingColor,
						label: 'subHeadingColor',
					} }
					setAttributes={ setAttributes }
				/>
				<ResponsiveSlider
					label={ __(
						'Bottom Spacing',
						'ultimate-addons-for-gutenberg'
					) }
					data={ {
						desktop: {
							value: subHeadSpace,
							label: 'subHeadSpace',
						},
						tablet: {
							value: subHeadSpaceTablet,
							label: 'subHeadSpaceTablet',
						},
						mobile: {
							value: subHeadSpaceMobile,
							label: 'subHeadSpaceMobile',
						},
					} }
					min={ 0 }
					max={ 200 }
					unit={ {
						value: subHeadSpaceType,
						label: 'subHeadSpaceType',
					} }
					units={ [
						{
							name: __(
								'Pixel',
								'ultimate-addons-for-gutenberg'
							),
							unitValue: 'px',
						},
					] }
					setAttributes={ setAttributes }
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
				<ResponsiveSlider
					label={ __(
						'Width',
						'ultimate-addons-for-gutenberg'
					) }
					data={ {
						desktop: {
							value: separatorWidth,
							label: 'separatorWidth',
						},
						tablet: {
							value: separatorWidthTablet,
							label: 'separatorWidthTablet',
						},
						mobile: {
							value: separatorWidthMobile,
							label: 'separatorWidthMobile',
						},
					} }
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
					setAttributes={ setAttributes }
				/>
				<Range
					label={ __(
						'Thickness',
						'ultimate-addons-for-gutenberg'
					) }
					setAttributes={ setAttributes }
					value={ separatorHeight }
					data={ {
						value: separatorHeight,
						label: 'separatorHeight',
					} }
					min={ 0 }
					max={ 20 }
					unit={ {
						value: separatorHeightType,
						label: 'separatorHeightType',
					} }
					units={ [
						{
							name: __(
								'Pixel',
								'ultimate-addons-for-gutenberg'
							),
							unitValue: 'px',
						},
					] }
				/>
				<AdvancedPopColorControl
					label={ __(
						'Color',
						'ultimate-addons-for-gutenberg'
					) }
					colorValue={
						separatorColor ? separatorColor : ''
					}
					data={ {
						value: separatorColor,
						label: 'separatorColor',
					} }
					setAttributes={ setAttributes }
				/>
				<ResponsiveSlider
					label={ __(
						'Bottom Spacing',
						'ultimate-addons-for-gutenberg'
					) }
					data={ {
						desktop: {
							value: separatorSpace,
							label: 'separatorSpace',
						},
						tablet: {
							value: separatorSpaceTablet,
							label: 'separatorSpaceTablet',
						},
						mobile: {
							value: separatorSpaceMobile,
							label: 'separatorSpaceMobile',
						},
					} }
					min={ 0 }
					max={ 200 }
					unit={ {
						value: separatorSpaceType,
						label: 'separatorSpaceType',
					} }
					units={ [
						{
							name: __(
								'Pixel',
								'ultimate-addons-for-gutenberg'
							),
							unitValue: 'px',
						},
					] }
					setAttributes={ setAttributes }
				/>
			</UAGAdvancedPanelBody>
		);
	};

	const backgroundStylePanel = () => {
		return (
			<UAGAdvancedPanelBody
				title={ __( 'Background', 'ultimate-addons-for-gutenberg' ) }
				initialOpen={ false }
			>
				<ColorSwitchControl
					label={__( 'Background Color', 'ultimate-addons-for-gutenberg' )}
					type={{
						value: blockBackgroundType,
						label: 'blockBackgroundType'
					}}
					classic={{
						value: blockBackground,
						label: 'blockBackground'
					}}
					gradient={{
						value: blockGradientBackground,
						label: 'blockGradientBackground'
					}}
					setAttributes={ setAttributes }
				/>
			</UAGAdvancedPanelBody>
		)
	}

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
						value: blockTopPadding,
						label: 'blockTopPadding',
					} }
					valueRight={ {
						value: blockRightPadding,
						label: 'blockRightPadding',
					} }
					valueBottom={ {
						value: blockBottomPadding,
						label: 'blockBottomPadding',
					} }
					valueLeft={ {
						value: blockLeftPadding,
						label: 'blockLeftPadding',
					} }
					valueTopTablet={ {
						value: blockTopPaddingTablet,
						label: 'blockTopPaddingTablet',
					} }
					valueRightTablet={ {
						value: blockRightPaddingTablet,
						label: 'blockRightPaddingTablet',
					} }
					valueBottomTablet={ {
						value: blockBottomPaddingTablet,
						label: 'blockBottomPaddingTablet',
					} }
					valueLeftTablet={ {
						value: blockLeftPaddingTablet,
						label: 'blockLeftPaddingTablet',
					} }
					valueTopMobile={ {
						value: blockTopPaddingMobile,
						label: 'blockTopPaddingMobile',
					} }
					valueRightMobile={ {
						value: blockRightPaddingMobile,
						label: 'blockRightPaddingMobile',
					} }
					valueBottomMobile={ {
						value: blockBottomPaddingMobile,
						label: 'blockBottomPaddingMobile',
					} }
					valueLeftMobile={ {
						value: blockLeftPaddingMobile,
						label: 'blockLeftPaddingMobile',
					} }
					unit={ {
						value: blockPaddingUnit,
						label: 'blockPaddingUnit',
					} }
					mUnit={ {
						value: blockPaddingUnitMobile,
						label: 'blockPaddingUnitMobile',
					} }
					tUnit={ {
						value: blockPaddingUnitTablet,
						label: 'blockPaddingUnitTablet',
					} }
					deviceType={ deviceType }
					attributes={ attributes }
					setAttributes={ setAttributes }
					link={ {
						value: blockPaddingLink,
						label: 'blockPaddingLink',
					} }
				/>
				<SpacingControl
					label={ __(
						'Margin',
						'ultimate-addons-for-gutenberg'
					) }
					valueTop={ {
						value: blockTopMargin,
						label: 'blockTopMargin',
					} }
					valueRight={ {
						value: blockRightMargin,
						label: 'blockRightMargin',
					} }
					valueBottom={ {
						value: blockBottomMargin,
						label: 'blockBottomMargin',
					} }
					valueLeft={ {
						value: blockLeftMargin,
						label: 'blockLeftMargin',
					} }
					valueTopTablet={ {
						value: blockTopMarginTablet,
						label: 'blockTopMarginTablet',
					} }
					valueRightTablet={ {
						value: blockRightMarginTablet,
						label: 'blockRightMarginTablet',
					} }
					valueBottomTablet={ {
						value: blockBottomMarginTablet,
						label: 'blockBottomMarginTablet',
					} }
					valueLeftTablet={ {
						value: blockLeftMarginTablet,
						label: 'blockLeftMarginTablet',
					} }
					valueTopMobile={ {
						value: blockTopMarginMobile,
						label: 'blockTopMarginMobile',
					} }
					valueRightMobile={ {
						value: blockRightMarginMobile,
						label: 'blockRightMarginMobile',
					} }
					valueBottomMobile={ {
						value: blockBottomMarginMobile,
						label: 'blockBottomMarginMobile',
					} }
					valueLeftMobile={ {
						value: blockLeftMarginMobile,
						label: 'blockLeftMarginMobile',
					} }
					unit={ {
						value: blockMarginUnit,
						label: 'blockMarginUnit',
					} }
					mUnit={ {
						value: blockMarginUnitMobile,
						label: 'blockMarginUnitMobile',
					} }
					tUnit={ {
						value: blockMarginUnitTablet,
						label: 'blockMarginUnitTablet',
					} }
					deviceType={ deviceType }
					attributes={ attributes }
					setAttributes={ setAttributes }
					link={ {
						value: blockMarginLink,
						label: 'blockMarginLink',
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
				<p className="components-base-control__help">
					{ __(
						'Below settings will apply to the heading text to which a link is applied.',
						'ultimate-addons-for-gutenberg'
					) }
				</p>
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
							label={ __( 'Color', 'ultimate-addons-for-gutenberg' ) }
							colorValue={ linkColor }
							data={ {
								value: linkColor,
								label: 'linkColor',
							} }
							setAttributes={ setAttributes }
						/>
					}
					hover={
						<AdvancedPopColorControl
							label={ __( 'Hover Color', 'ultimate-addons-for-gutenberg' ) }
							colorValue={ linkHColor }
							data={ {
								value: linkHColor,
								label: 'linkHColor',
							} }
							setAttributes={ setAttributes }
						/>
					}
					disableBottomSeparator={ true }
				/>
			</UAGAdvancedPanelBody>
		);
	}

	const highLightStylePanel = () => {
		return (
			<UAGAdvancedPanelBody
				title={ __( 'Highlight', 'ultimate-addons-for-gutenberg' ) }
				initialOpen={ false }
			>
				<p className="components-base-control__help">
					{ __(
						'Highlight heading text from toolbar to see the below controls working.',
						'ultimate-addons-for-gutenberg'
					) }
				</p>

					<TypographyControl
						label={ __(
							'Typography',
							'ultimate-addons-for-gutenberg'
						) }
						attributes={ attributes }
						setAttributes={ setAttributes }
						loadGoogleFonts={ {
							value: highLightLoadGoogleFonts,
							label: 'highLightLoadGoogleFonts',
						} }
						fontFamily={ {
							value: highLightFontFamily,
							label: 'highLightFontFamily',
						} }
						fontWeight={ {
							value: highLightFontWeight,
							label: 'highLightFontWeight',
						} }
						fontStyle={ {
							value: highLightFontStyle,
							label: 'highLightFontStyle',
						} }
						transform={ {
							value: highLightTransform,
							label: 'highLightTransform',
						} }
						decoration={ {
							value: highLightDecoration,
							label: 'highLightDecoration',
						} }
						fontSizeType={ {
							value: highLightFontSizeType,
							label: 'highLightFontSizeType',
						} }
						fontSize={ {
							value: highLightFontSize,
							label: 'highLightFontSize',
						} }
						fontSizeMobile={ {
							value: highLightFontSizeMobile,
							label: 'highLightFontSizeMobile',
						} }
						fontSizeTablet={ {
							value: highLightFontSizeTablet,
							label: 'highLightFontSizeTablet',
						} }
						lineHeightType={ {
							value: highLightLineHeightType,
							label: 'highLightLineHeightType',
						} }
						lineHeight={ {
							value: highLightLineHeight,
							label: 'highLightLineHeight',
						} }
						lineHeightMobile={ {
							value: highLightLineHeightMobile,
							label: 'highLightLineHeightMobile',
						} }
						lineHeightTablet={ {
							value: highLightLineHeightTablet,
							label: 'highLightLineHeightTablet',
						} }
						letterSpacing={ {
							value: highLightLetterSpacing,
							label: 'highLightLetterSpacing',
						} }
						letterSpacingTablet={ {
							value: highLightLetterSpacingTablet,
							label: 'highLightLetterSpacingTablet',
						} }
						letterSpacingMobile={ {
							value: highLightLetterSpacingMobile,
							label: 'highLightLetterSpacingMobile',
						} }
						letterSpacingType={ {
							value: highLightLetterSpacingType,
							label: 'highLightLetterSpacingType',
						} }
					/>

				<AdvancedPopColorControl
					label={ __( 'Background', 'ultimate-addons-for-gutenberg' ) }
					colorValue={ highLightBackground }
					data={ {
						value: highLightBackground,
						label: 'highLightBackground',
					} }
					setAttributes={ setAttributes }
				/>
				<AdvancedPopColorControl
					label={ __( 'Color', 'ultimate-addons-for-gutenberg' ) }
					colorValue={ highLightColor }
					data={ {
						value: highLightColor,
						label: 'highLightColor',
					} }
					setAttributes={ setAttributes }
				/>
				<SpacingControl
					label={ __(
						'Padding',
						'ultimate-addons-for-gutenberg'
					) }
					valueTop={ {
						value: highLightTopPadding,
						label: 'highLightTopPadding',
					} }
					valueRight={ {
						value: highLightRightPadding,
						label: 'highLightRightPadding',
					} }
					valueBottom={ {
						value: highLightBottomPadding,
						label: 'highLightBottomPadding',
					} }
					valueLeft={ {
						value: highLightLeftPadding,
						label: 'highLightLeftPadding',
					} }
					valueTopTablet={ {
						value: highLightTopPaddingTablet,
						label: 'highLightTopPaddingTablet',
					} }
					valueRightTablet={ {
						value: highLightRightPaddingTablet,
						label: 'highLightRightPaddingTablet',
					} }
					valueBottomTablet={ {
						value: highLightBottomPaddingTablet,
						label: 'highLightBottomPaddingTablet',
					} }
					valueLeftTablet={ {
						value: highLightLeftPaddingTablet,
						label: 'highLightLeftPaddingTablet',
					} }
					valueTopMobile={ {
						value: highLightTopPaddingMobile,
						label: 'highLightTopPaddingMobile',
					} }
					valueRightMobile={ {
						value: highLightRightPaddingMobile,
						label: 'highLightRightPaddingMobile',
					} }
					valueBottomMobile={ {
						value: highLightBottomPaddingMobile,
						label: 'highLightBottomPaddingMobile',
					} }
					valueLeftMobile={ {
						value: highLightLeftPaddingMobile,
						label: 'highLightLeftPaddingMobile',
					} }
					unit={ {
						value: highLightPaddingUnit,
						label: 'highLightPaddingUnit',
					} }
					mUnit={ {
						value: highLightPaddingUnitMobile,
						label: 'highLightPaddingUnitMobile',
					} }
					tUnit={ {
						value: highLightPaddingUnitTablet,
						label: 'highLightPaddingUnitTablet',
					} }
					deviceType={ deviceType }
					attributes={ attributes }
					setAttributes={ setAttributes }
					link={ {
						value: highLightPaddingLink,
						label: 'highLightPaddingLink',
					} }
				/>
				<ResponsiveBorder
					setAttributes={ setAttributes }
					prefix={'highLight'}
					attributes={ attributes }
					deviceType={deviceType}
					disableBottomSeparator={ true }
				/>
			</UAGAdvancedPanelBody>
		)
	}

	return (
		<div>
			<InspectorControls>
				<InspectorTabs>
					<InspectorTab { ...UAGTabs.general }>
						{ generalPanel() }
						{ subHeadingPanel() }
						{ separatorPanel() }
					</InspectorTab>
					<InspectorTab { ...UAGTabs.style }>
						{ headingTitleToggle && headingStylePanel() }
						{ 'none' !== seperatorStyle && seperatorSettings() }
						{ headingDescToggle && subHeadingStylePanel() }
						{linkStylePanel()}
						{highLightStylePanel()}
						{backgroundStylePanel()}
						{spacingStylePanel()}
					</InspectorTab>
					<InspectorTab
						{ ...UAGTabs.advance }
						parentProps={ props }
					></InspectorTab>
				</InspectorTabs>
			</InspectorControls>

		</div>
	);
};
export default memo( Settings );
