import { memo } from '@wordpress/element';
import { __ } from '@wordpress/i18n';
import TypographyControl from '@Components/typography';
import MultiButtonsControl from '@Components/multi-buttons-control';
import renderSVG from '@Controls/renderIcon';
import ResponsiveSlider from '@Components/responsive-slider';
import SpacingControl from '@Components/spacing-control';
import ResponsiveSelectControl from '@Components/responsive-select';
import { InspectorControls, BlockControls, AlignmentToolbar, BlockVerticalAlignmentControl } from '@wordpress/block-editor';
import { select } from '@wordpress/data';

import { Icon, ToggleControl } from '@wordpress/components';
import InspectorTabs from '@Components/inspector-tabs/InspectorTabs.js';
import InspectorTab, { UAGTabs } from '@Components/inspector-tabs/InspectorTab.js';

import UAGAdvancedPanelBody from '@Components/advanced-panel-body';
import renderGBSSettings from '@Controls/renderGBSSettings';
import styling from './styling';

const Settings = ( props ) => {

	const { attributes, setAttributes } = props;

	const {
		align,
		gap,
		gapTablet,
		gapMobile,
		inheritGap,
		stack,
		loadGoogleFonts,
		fontFamily,
		fontWeight,
		fontStyle,
		fontTransform,
		fontDecoration,

		alignTablet,
		alignMobile,
		fontSizeType,
		fontSizeTypeMobile,
		fontSizeTypeTablet,
		fontSize,
		fontSizeMobile,
		fontSizeTablet,
		lineHeightType,
		lineHeight,
		lineHeightMobile,
		lineHeightTablet,
		buttonSize,
		buttonSizeTablet,
		buttonSizeMobile,

		paddingUnit,
		mobilePaddingUnit,
		tabletPaddingUnit,
		paddingLink,

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

		topMargin,
		rightMargin,
		bottomMargin,
		leftMargin,
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

		// letter spacing
		fontLetterSpacing,
		fontLetterSpacingTablet,
		fontLetterSpacingMobile,
		fontLetterSpacingType,
		verticalAlignment,
	} = attributes;

	const parentBlock = select( 'core/block-editor' ).getSelectedBlock();
	const buttonsCount = parentBlock.innerBlocks.length;

	const buttonSizeOptions = [
		{
			value: 'default',
			label: __( 'Default', 'ultimate-addons-for-gutenberg' ),
		},
		{
			value: 'small',
			label: __( 'Small', 'ultimate-addons-for-gutenberg' ),
		},
		{
			value: 'medium',
			label: __( 'Medium', 'ultimate-addons-for-gutenberg' ),
		},
		{
			value: 'large',
			label: __( 'Large', 'ultimate-addons-for-gutenberg' ),
		},
		{
			value: 'extralarge',
			label: __( 'Extra Large', 'ultimate-addons-for-gutenberg' ),
		},
	];

	const alignmentControls = [
		{
			align: 'left',
			icon: <Icon icon={ renderSVG( 'fa fa-align-left' ) } />,
			title: __( 'Left', 'ultimate-addons-for-gutenberg' ),
		},
		{
			align: 'center',
			icon: <Icon icon={ renderSVG( 'fa fa-align-center' ) } />,
			title: __( 'Center', 'ultimate-addons-for-gutenberg' ),
		},
		{
			align: 'right',
			icon: <Icon icon={ renderSVG( 'fa fa-align-right' ) } />,
			title: __( 'Right', 'ultimate-addons-for-gutenberg' ),
		},
		{
			align: 'full',
			icon: <Icon icon={ renderSVG( 'fa fa-align-justify' ) } />,
			title: __( 'Full', 'ultimate-addons-for-gutenberg' ),
		},
	];

	const getBlockControls = () => (
		<BlockControls>
			<BlockVerticalAlignmentControl
				onChange={ ( alignment ) =>
					setAttributes( { verticalAlignment: alignment } )
				}
				value={ verticalAlignment }
			/>
			<AlignmentToolbar
				value={ align }
				onChange={ ( value ) => {
					setAttributes( { align: value } );
				} }
				alignmentControls={ alignmentControls }
			/>
		</BlockControls>
	);

	const generalSettings = () => {
		return (
			<UAGAdvancedPanelBody initialOpen={ true }>
				<MultiButtonsControl
					setAttributes={ setAttributes }
					label={ __( 'Overall Alignment', 'ultimate-addons-for-gutenberg' ) }
					data={ {
						desktop: {
							value: align,
							label: 'align',
						},
						tablet: {
							value: alignTablet,
							label: 'alignTablet',
						},
						mobile: {
							value: alignMobile,
							label: 'alignMobile',
						},
					} }
					options={ [
						{
							value: 'left',
							icon: <Icon icon={ renderSVG( 'fa fa-align-left' ) } />,
							tooltip: __( 'Left', 'ultimate-addons-for-gutenberg' ),
						},
						{
							value: 'center',
							icon: <Icon icon={ renderSVG( 'fa fa-align-center' ) } />,
							tooltip: __( 'Center', 'ultimate-addons-for-gutenberg' ),
						},
						{
							value: 'right',
							icon: <Icon icon={ renderSVG( 'fa fa-align-right' ) } />,
							tooltip: __( 'Right', 'ultimate-addons-for-gutenberg' ),
						},
						{
							value: 'full',
							icon: <Icon icon={ renderSVG( 'fa fa-align-justify' ) } />,
							tooltip: __( 'Full Width', 'ultimate-addons-for-gutenberg' ),
						},
					] }
					showIcons={ true }
					responsive={ true }
				/>
				<MultiButtonsControl
					setAttributes={ setAttributes }
					label={ __( 'Vertical Alignment', 'ultimate-addons-for-gutenberg' ) }
					data={ {
						value: verticalAlignment,
						label: 'verticalAlignment',
					} }
					options={ [
						{
							value: 'top',
							label: 'Top',
						},
						{
							value: 'center',
							label: 'Middle',
						},
						{
							value: 'bottom',
							label: 'Bottom',
						},
					] }
					showIcons={false}
					responsive={false}
				/>
				{ buttonsCount > 1 && (
					<MultiButtonsControl
						setAttributes={ setAttributes }
						label={ __( 'Stack Orientation', 'ultimate-addons-for-gutenberg' ) }
						data={ {
							value: stack,
							label: 'stack',
						} }
						options={ [
							{
								value: 'none',
								label: __( 'None', 'ultimate-addons-for-gutenberg' ),
							},
							{
								value: 'desktop',
								label: __( 'Desktop', 'ultimate-addons-for-gutenberg' ),
							},
							{
								value: 'tablet',
								label: __( 'Tablet', 'ultimate-addons-for-gutenberg' ),
							},
							{
								value: 'mobile',
								label: __( 'Mobile', 'ultimate-addons-for-gutenberg' ),
							},
						] }
						help={ __(
							'Note: Choose on what breakpoint the buttons will stack.',
							'ultimate-addons-for-gutenberg'
						) }
					/>
				) }
				{ buttonsCount > 1 && (
					<>
					<ToggleControl
						label={ __( 'Inherit gap from theme', 'ultimate-addons-for-gutenberg' ) }
						checked={ inheritGap }
						onChange={ () => setAttributes( { inheritGap: ! inheritGap } ) }
					/>
					{ ! inheritGap && ( 
					<ResponsiveSlider
						label={ __( 'Gap Between Buttons', 'ultimate-addons-for-gutenberg' ) }
						data={ {
							desktop: {
								value: gap,
								label: 'gap',
							},
							tablet: {
								value: gapTablet,
								label: 'gapTablet',
							},
							mobile: {
								value: gapMobile,
								label: 'gapMobile',
							},
						} }
						min={ 0 }
						max={ 200 }
						displayUnit={ false }
						setAttributes={ setAttributes }
					/> ) }
					</>
				) }
				<ResponsiveSelectControl
					label={ __( 'Button Size', 'ultimate-addons-for-gutenberg' ) }
					data={ {
						desktop: {
							value: buttonSize,
							label: 'buttonSize',
						},
						tablet: {
							value: buttonSizeTablet,
							label: 'buttonSizeTablet',
						},
						mobile: {
							value: buttonSizeMobile,
							label: 'buttonSizeMobile',
						},
					} }
					options={ {
						desktop: buttonSizeOptions,
						tablet: buttonSizeOptions,
						mobile: buttonSizeOptions,
					} }
					setAttributes={ setAttributes }
				/>
			</UAGAdvancedPanelBody>
		);
	};

	const styleSettings = () => {
		return (
			<UAGAdvancedPanelBody title={ __( 'Text', 'ultimate-addons-for-gutenberg' ) } initialOpen={ true }>
				<TypographyControl
					label={ __( 'Typography', 'ultimate-addons-for-gutenberg' ) }
					attributes={ attributes }
					setAttributes={ setAttributes }
					loadGoogleFonts={ {
						value: loadGoogleFonts,
						label: 'loadGoogleFonts',
					} }
					fontFamily={ { value: fontFamily, label: 'fontFamily' } }
					fontWeight={ { value: fontWeight, label: 'fontWeight' } }
					fontStyle={ {
						value: fontStyle,
						label: 'fontStyle',
					} }
					transform={ {
						value: fontTransform,
						label: 'fontTransform',
					} }
					decoration={ {
						value: fontDecoration,
						label: 'fontDecoration',
					} }
					fontSizeType={ {
						value: fontSizeType,
						label: 'fontSizeType',
					} }
					fontSizeTypeTablet={ {
						value: fontSizeTypeTablet,
						label: 'fontSizeTypeTablet',
					} }
					fontSizeTypeMobile={ {
						value: fontSizeTypeMobile,
						label: 'fontSizeTypeMobile',
					} }
					fontSize={ {
						value: fontSize,
						label: 'fontSize',
					} }
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
					letterSpacing={ {
						value: fontLetterSpacing,
						label: 'fontLetterSpacing',
					} }
					letterSpacingTablet={ {
						value: fontLetterSpacingTablet,
						label: 'fontLetterSpacingTablet',
					} }
					letterSpacingMobile={ {
						value: fontLetterSpacingMobile,
						label: 'fontLetterSpacingMobile',
					} }
					letterSpacingType={ {
						value: fontLetterSpacingType,
						label: 'fontLetterSpacingType',
					} }
				/>
			</UAGAdvancedPanelBody>
		);
	};
	const spacingSettings = () => {
		return (
			<UAGAdvancedPanelBody title={ __( 'Spacing', 'ultimate-addons-for-gutenberg' ) } initialOpen={ false }>
				{ 'default' === buttonSize && (
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
				) }
				<SpacingControl
					{ ...props }
					label={ __( 'Margin', 'ultimate-addons-for-gutenberg' ) }
					valueTop={ {
						value: topMargin,
						label: 'topMargin',
					} }
					valueRight={ {
						value: rightMargin,
						label: 'rightMargin',
					} }
					valueBottom={ {
						value: bottomMargin,
						label: 'bottomMargin',
					} }
					valueLeft={ {
						value: leftMargin,
						label: 'leftMargin',
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
			</UAGAdvancedPanelBody>
		);
	};

	return (
		<>
			{ getBlockControls() }
			<InspectorControls>
				<InspectorTabs>
					<InspectorTab { ...UAGTabs.general } parentProps={ props }>{ generalSettings() }</InspectorTab>
					<InspectorTab { ...UAGTabs.style } parentProps={ props }>
						{ styleSettings() }
						{ spacingSettings() }
					</InspectorTab>
					<InspectorTab { ...UAGTabs.advance } parentProps={ props }>
						{ renderGBSSettings( styling, setAttributes, attributes ) }
					</InspectorTab>
				</InspectorTabs>
			</InspectorControls>
		</>
	);
};

export default memo( Settings );
