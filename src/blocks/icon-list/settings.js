import TypographyControl from '@Components/typography';
import { __ } from '@wordpress/i18n';
import { select } from '@wordpress/data';
import {
	InspectorControls,
} from '@wordpress/block-editor';
import InspectorTabs from '@Components/inspector-tabs/InspectorTabs.js';
import InspectorTab, {
	UAGTabs,
} from '@Components/inspector-tabs/InspectorTab.js';
import ResponsiveSlider from '@Components/responsive-slider';
import MultiButtonsControl from '@Components/multi-buttons-control';
import SpacingControl from '@Components/spacing-control';
import presets from './presets';
import UAGPresets from '@Components/presets';
import renderSVG from '@Controls/renderIcon';
import { ToggleControl, Icon } from '@wordpress/components';
import UAGAdvancedPanelBody from '@Components/advanced-panel-body';
import UAGTabsControl from '@Components/tabs';
import AdvancedPopColorControl from '@Components/color-control/advanced-pop-color-control.js';
import UAGIconPicker from '@Components/icon-picker';
import { memo } from '@wordpress/element';


const Settings = ( props ) => {
	props = props.parentProps;
	const { attributes, deviceType, setAttributes, clientId } = props;

	const {
		align,
		alignTablet,
		alignMobile,
		gap,
		gapTablet,
		gapMobile,
		gapType,
		inner_gap,
		innerGapTablet,
		innerGapMobile,
		innerGapType,
		icon_layout,
		iconLayoutTablet,
		iconLayoutMobile,
		iconPosition,
		iconPositionTablet,
		iconPositionMobile,
		iconPlacement,
		size,
		sizeType,
		sizeMobile,
		sizeTablet,
		hideLabel,
		borderRadius,
		borderRadiusTablet,
		borderRadiusMobile,
		borderRadiusType,
		bgSize,
		bgSizeType,
		bgSizeTablet,
		bgSizeMobile,
		border,
		borderTablet,
		borderMobile,
		borderType,
		fontSize,
		fontSizeType,
		fontSizeMobile,
		fontSizeTablet,
		fontFamily,
		fontWeight,
		lineHeight,
		lineHeightType,
		lineHeightMobile,
		lineHeightTablet,
		loadGoogleFonts,
		fontStyle,
		fontTransform,
		fontDecoration,
		labelLetterSpacing,
		labelLetterSpacingTablet,
		labelLetterSpacingMobile,
		labelLetterSpacingType,
		iconColor,
		labelColor,
		iconHoverColor,
		labelHoverColor,
		iconBgColor,
		iconBgHoverColor,
		iconBorderColor,
		iconBorderHoverColor,
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
		parentIcon,
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
	} = attributes;

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
			<UAGAdvancedPanelBody title={ __( 'Content', 'ultimate-addons-for-gutenberg' ) } initialOpen={ false }>
				<MultiButtonsControl
					setAttributes={ setAttributes }
					label={ __( 'Layout', 'ultimate-addons-for-gutenberg' ) }
					data={ {
						desktop: {
							value: icon_layout,
							label: 'icon_layout',
						},
						tablet: {
							value: iconLayoutTablet,
							label: 'iconLayoutTablet',
						},
						mobile: {
							value: iconLayoutMobile,
							label: 'iconLayoutMobile',
						},
					} }
					options={ [
						{
							value: 'horizontal',
							label: __(
								'Horizontal',
								'ultimate-addons-for-gutenberg'
							),
						},
						{
							value: 'vertical',
							label: __(
								'Vertical',
								'ultimate-addons-for-gutenberg'
							),
						},
					] }
					showIcons={ false }
					responsive={true}
				/>
				<MultiButtonsControl
					setAttributes={ setAttributes }
					label={ __( 'Alignment', 'ultimate-addons-for-gutenberg' ) }
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
				{ ! hideLabel && (
					<>
						<MultiButtonsControl
							setAttributes={ setAttributes }
							label={ __(
								'Icon Alignment',
								'ultimate-addons-for-gutenberg'
							) }
							data={ {
								desktop: {
									value: iconPosition,
									label: 'iconPosition',
								},
								tablet: {
									value: iconPositionTablet,
									label: 'iconPositionTablet',
								},
								mobile: {
									value: iconPositionMobile,
									label: 'iconPositionMobile',
								},
							} }
							className="uagb-multi-button-alignment-control"
							options={ [
								{
									value: 'top',
									label: 'Top',
								},
								{
									value: 'middle',
									label: 'Middle',
								},
							] }
							showIcons={ false }
							help={ __(
								'Note: This manages the Icon Position with respect to the Label.',
								'ultimate-addons-for-gutenberg'
							) }
							responsive={true}
						/>
					</>
				) }
				<ToggleControl
					label={ __(
						'Hide Labels',
						'ultimate-addons-for-gutenberg'
					) }
					checked={ hideLabel }
					onChange={ ( value ) => changeChildAttr( value ) }
				/>
				{ ! hideLabel && (
					<>
						<MultiButtonsControl
							setAttributes={ setAttributes }
							label={ __(
								'Icon Position',
								'ultimate-addons-for-gutenberg'
							) }
							data={ {
								value: iconPlacement,
								label: 'iconPlacement',
							} }
							className="uagb-multi-button-alignment-control"
							options={ [
								{
									value: 'before',
									label: 'Before',
								},
								{
									value: 'after',
									label: 'After',
								},
							] }
							showIcons={ false }
						/>
					</>
				) }
			</UAGAdvancedPanelBody>
		);
	};

	const commonSetting = () => {
		return (
			<UAGAdvancedPanelBody
				title={ __( 'Spacing', 'ultimate-addons-for-gutenberg' ) }
				initialOpen={ false }
			>
				<ResponsiveSlider
					label={ __( 'Gap between Items', 'ultimate-addons-for-gutenberg' ) }
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
					max={ 100 }
					unit={ {
						value: gapType,
						label:
							'gapType',
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
					help={ __(
						'Note: For better editing experience, the gap between items might look larger than applied. Viewing in frontend will show the actual results.',
						'ultimate-addons-for-gutenberg'
					) }
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

			</UAGAdvancedPanelBody>
		);
	};

	const labelSetting = () => {
		return (
			<UAGAdvancedPanelBody
				title={ __( 'Label', 'ultimate-addons-for-gutenberg' ) }
				initialOpen={ false }
			>
				<ResponsiveSlider
					label={ __( 'Gap between Icon and Label', 'ultimate-addons-for-gutenberg' ) }
					data={ {
						desktop: {
							value: inner_gap,
							label: 'inner_gap',
						},
						tablet: {
							value: innerGapTablet,
							label: 'innerGapTablet',
						},
						mobile: {
							value: innerGapMobile,
							label: 'innerGapMobile',
						},
					} }
					min={ -100 }
					max={ 100 }
					unit={ {
						value: innerGapType,
						label:
							'innerGapType',
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
					letterSpacing={ {
						value: labelLetterSpacing,
						label: 'labelLetterSpacing',
					} }
					letterSpacingTablet={ {
						value: labelLetterSpacingTablet,
						label: 'labelLetterSpacingTablet',
					} }
					letterSpacingMobile={ {
						value: labelLetterSpacingMobile,
						label: 'labelLetterSpacingMobile',
					} }
					letterSpacingType={ {
						value: labelLetterSpacingType,
						label: 'labelLetterSpacingType',
					} }
				/>
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
							label={ __(
								'Color',
								'ultimate-addons-for-gutenberg'
							) }
							colorValue={ labelColor }
							data={ {
								value: labelColor,
								label: 'labelColor',
							} }
							setAttributes={ setAttributes }
						/>
					}
					hover={
						<AdvancedPopColorControl
							label={ __(
								'Color',
								'ultimate-addons-for-gutenberg'
							) }
							colorValue={
								labelHoverColor
							}
							data={ {
								value: labelHoverColor,
								label: 'labelHoverColor',
							} }
							setAttributes={ setAttributes }
						/>
					}
					disableBottomSeparator={ true }
				/>
			</UAGAdvancedPanelBody>
		);
	};

	const iconSetting = () => {
		return (
			<UAGAdvancedPanelBody
				title={ __( 'Icon/Image', 'ultimate-addons-for-gutenberg' ) }
				initialOpen={ true }
			>
				<ResponsiveSlider
					label={ __( 'Size', 'ultimate-addons-for-gutenberg' ) }
					data={ {
						desktop: {
							value: size,
							label: 'size',
						},
						tablet: {
							value: sizeTablet,
							label: 'sizeTablet',
						},
						mobile: {
							value: sizeMobile,
							label: 'sizeMobile',
						},
					} }
					min={ 0 }
					max={ 200 }
					unit={ {
						value: sizeType,
						label: 'sizeType',
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
							name: __( 'Em', 'ultimate-addons-for-gutenberg' ),
							unitValue: 'em',
						},
					] }
					setAttributes={ setAttributes }
				/>
				<ResponsiveSlider
					label={ __(
						'Background Size',
						'ultimate-addons-for-gutenberg'
					) }
					data={ {
						desktop: {
							value: bgSize,
							label: 'bgSize',
						},
						tablet: {
							value: bgSizeTablet,
							label: 'bgSizeTablet',
						},
						mobile: {
							value: bgSizeMobile,
							label: 'bgSizeMobile',
						},
					} }
					setAttributes={ setAttributes }
					min={ 0 }
					max={ 50 }
					unit={ {
						value: bgSizeType,
						label:
							'bgSizeType',
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
					help={ __(
						'Note: Background Size option is useful when one adds background color to the icons.',
						'ultimate-addons-for-gutenberg'
					) }
				/>
				<ResponsiveSlider
					label={ __( 'Border', 'ultimate-addons-for-gutenberg' ) }
					data={ {
						desktop: {
							value: border,
							label: 'border',
						},
						tablet: {
							value: borderTablet,
							label: 'borderTablet',
						},
						mobile: {
							value: borderMobile,
							label: 'borderMobile',
						},
					} }
					min={ 0 }
					max={ 10 }
					unit={ {
						value: borderType,
						label:
							'borderType',
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
				{ ( ( iconBgColor || iconBgHoverColor ) ||
					( border || borderTablet || borderMobile ) ) && (
					<>
						<ResponsiveSlider
							label={ __( 'Border Radius', 'ultimate-addons-for-gutenberg' ) }
							data={ {
								desktop: {
									value: borderRadius,
									label: 'borderRadius',
								},
								tablet: {
									value: borderRadiusTablet,
									label: 'borderRadiusTablet',
								},
								mobile: {
									value: borderRadiusMobile,
									label: 'borderRadiusMobile',
								},
							} }
							min={ 0 }
							max={ 100 }
							unit={ {
								value: borderRadiusType,
								label:
									'borderRadiusType',
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
							help={ __(
								'Note: Border Radius option is useful when one adds background color or border to the icons.',
								'ultimate-addons-for-gutenberg'
							) }
						/>
					</>
				) }
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
						<>
							<AdvancedPopColorControl
								label={ __(
									'Icon Color',
									'ultimate-addons-for-gutenberg'
								) }
								colorValue={ iconColor ? iconColor : '' }
								data={ {
									value: iconColor,
									label: 'iconColor',
								} }
								setAttributes={ setAttributes }
							/>
							<AdvancedPopColorControl
								label={ __(
									'Background Color',
									'ultimate-addons-for-gutenberg'
								) }
								colorValue={ iconBgColor ? iconBgColor : '' }
								data={ {
									value: iconBgColor,
									label: 'iconBgColor',
								} }
								setAttributes={ setAttributes }
							/>
							<AdvancedPopColorControl
								label={ __(
									'Border Color',
									'ultimate-addons-for-gutenberg'
								) }
								colorValue={
									iconBorderColor ? iconBorderColor : ''
								}
								data={ {
									value: iconBorderColor,
									label: 'iconBorderColor',
								} }
								setAttributes={ setAttributes }
							/>
						</>
					}
					hover={
						<>
							<AdvancedPopColorControl
								label={ __(
									'Icon Color',
									'ultimate-addons-for-gutenberg'
								) }
								colorValue={
									iconHoverColor ? iconHoverColor : ''
								}
								data={ {
									value: iconHoverColor,
									label: 'iconHoverColor',
								} }
								setAttributes={ setAttributes }
							/>
							<AdvancedPopColorControl
								label={ __(
									'Background Color',
									'ultimate-addons-for-gutenberg'
								) }
								colorValue={
									iconBgHoverColor ? iconBgHoverColor : ''
								}
								data={ {
									value: iconBgHoverColor,
									label: 'iconBgHoverColor',
								} }
								setAttributes={ setAttributes }
							/>
							<AdvancedPopColorControl
								label={ __(
									'Border Color',
									'ultimate-addons-for-gutenberg'
								) }
								colorValue={
									iconBorderHoverColor
										? iconBorderHoverColor
										: ''
								}
								data={ {
									value: iconBorderHoverColor,
									label: 'iconBorderHoverColor',
								} }
								setAttributes={ setAttributes }
							/>
						</>
					}
					disableBottomSeparator={ true }
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
	const iconSettings = () => {
		return <UAGAdvancedPanelBody
					title={ __( 'Icon', 'ultimate-addons-for-gutenberg' ) }
					initialOpen={ false }
				>
					<UAGIconPicker
						label={ __(
							'Icon',
							'ultimate-addons-for-gutenberg'
						) }
						value={ parentIcon }
						onChange={ ( value ) =>
							setAttributes( { parentIcon: value } )
						}
					/>
				</UAGAdvancedPanelBody>
	};

	return (
			<>
			<InspectorControls>
				<InspectorTabs>
					<InspectorTab { ...UAGTabs.general }>
						{ presetSettings() }
						{ iconSettings() }
						{ generalSetting() }
					</InspectorTab>
					<InspectorTab { ...UAGTabs.style }>
						{ iconSetting() }
						{ ! hideLabel && labelSetting() }
						{ commonSetting() }
					</InspectorTab>
					<InspectorTab
						{ ...UAGTabs.advance }
						parentProps={ props }
					></InspectorTab>
				</InspectorTabs>
			</InspectorControls>
			</>
	);
};

export default memo( Settings );
