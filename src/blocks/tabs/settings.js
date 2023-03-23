import UAGIconPicker from '@Components/icon-picker';
import renderSVG from '@Controls/renderIcon';
import TypographyControl from '@Components/typography';
import ResponsiveSelectControl from '@Components/responsive-select';
import MultiButtonsControl from '@Components/multi-buttons-control';
import AdvancedPopColorControl from '@Components/color-control/advanced-pop-color-control.js';
import SpacingControl from '@Components/spacing-control';
import ResponsiveBorder from '@Components/responsive-border';
import UAGSelectControl from '@Components/select-control';
import InspectorTabs from '@Components/inspector-tabs/InspectorTabs.js';
import InspectorTab, { UAGTabs } from '@Components/inspector-tabs/InspectorTab.js';
import UAGTabsControl from '@Components/tabs';
import ResponsiveSlider from '@Components/responsive-slider';
import { __ } from '@wordpress/i18n';
import { InspectorControls } from '@wordpress/block-editor';

import { ToggleControl, Icon } from '@wordpress/components';

import presets from './presets';
import UAGPresets from '@Components/presets';
import UAGAdvancedPanelBody from '@Components/advanced-panel-body';
import { memo } from '@wordpress/element';

const Settings = ( props ) => {
	props = props.parentProps;
	const { attributes, setAttributes, deviceType } = props;

	const {
		tabsStyleD,
		tabsStyleM,
		tabsStyleT,
		tabActiveFrontend,
		tabHeaders,
		headerBgColor,
		headerTextColor,
		activeTabBgColor,
		activeTabTextColor,
		bodyBgColor,
		bodyTextColor,
		tabTitleLeftMargin,
		tabTitleRightMargin,
		tabTitleTopMargin,
		tabTitleBottomMargin,
		tabTitleLeftMarginTablet,
		tabTitleRightMarginTablet,
		tabTitleTopMarginTablet,
		tabTitleBottomMarginTablet,
		tabTitleLeftMarginMobile,
		tabTitleRightMarginMobile,
		tabTitleTopMarginMobile,
		tabTitleBottomMarginMobile,
		tabTitleMarginUnit,
		mobiletabTitleMarginUnit,
		tablettabTitleMarginUnit,
		tabTitleMarginLink,
		tabTitleTopPadding,
		tabTitleRightPadding,
		tabTitleBottomPadding,
		tabTitleLeftPadding,
		tabTitleTopPaddingTablet,
		tabTitleRightPaddingTablet,
		tabTitleBottomPaddingTablet,
		tabTitleLeftPaddingTablet,
		tabTitleTopPaddingMobile,
		tabTitleRightPaddingMobile,
		tabTitleBottomPaddingMobile,
		tabTitleLeftPaddingMobile,
		tabTitlePaddingUnit,
		mobiletabTitlePaddingUnit,
		tablettabTitlePaddingUnit,
		tabTitlePaddingLink,
		tabBodyLeftMargin,
		tabBodyRightMargin,
		tabBodyTopMargin,
		tabBodyBottomMargin,
		tabBodyLeftMarginTablet,
		tabBodyRightMarginTablet,
		tabBodyTopMarginTablet,
		tabBodyBottomMarginTablet,
		tabBodyLeftMarginMobile,
		tabBodyRightMarginMobile,
		tabBodyTopMarginMobile,
		tabBodyBottomMarginMobile,
		tabBodyMarginUnit,
		mobiletabBodyMarginUnit,
		tablettabBodyMarginUnit,
		tabBodyMarginLink,
		tabBodyTopPadding,
		tabBodyRightPadding,
		tabBodyBottomPadding,
		tabBodyLeftPadding,
		tabBodyTopPaddingTablet,
		tabBodyRightPaddingTablet,
		tabBodyBottomPaddingTablet,
		tabBodyLeftPaddingTablet,
		tabBodyTopPaddingMobile,
		tabBodyRightPaddingMobile,
		tabBodyBottomPaddingMobile,
		tabBodyLeftPaddingMobile,
		tabBodyPaddingUnit,
		mobiletabBodyPaddingUnit,
		tablettabBodyPaddingUnit,
		tabBodyPaddingLink,
		titleLoadGoogleFonts,
		titleFontFamily,
		titleFontWeight,
		titleFontSizeType,
		titleFontSize,
		titleFontSizeMobile,
		titleFontSizeTablet,
		titleLineHeightType,
		titleLineHeight,
		titleLineHeightMobile,
		titleLineHeightTablet,
		titleLetterSpacing,
		titleLetterSpacingTablet,
		titleLetterSpacingMobile,
		titleLetterSpacingType,
		titleTransform,
		titleDecoration,
		titleAlign,
		tabAlign,
		showIcon,
		icon,
		iconColor,
		iconPosition,
		iconSpacing,
		iconSpacingTablet,
		iconSpacingMobile,
		iconSize,
		iconSizeTablet,
		iconSizeMobile,
		activeiconColor,
		titleFontStyle,
	} = attributes;

	const onInitialTabChange = ( value ) => {
		setAttributes( {
			tabActiveFrontend: parseInt( value ),
		} );
	};

	const tabStyleSettings = () => {
		const tabsStyleOptions = {
			desktop: [
				{
					value: 'hstyle1',
					label: __( 'Horizontal Style 1', 'ultimate-addons-for-gutenberg' ),
				},
				{
					value: 'hstyle2',
					label: __( 'Horizontal Style 2', 'ultimate-addons-for-gutenberg' ),
				},
				{
					value: 'hstyle3',
					label: __( 'Horizontal Style 3', 'ultimate-addons-for-gutenberg' ),
				},
				{
					value: 'hstyle4',
					label: __( 'Horizontal Style 4', 'ultimate-addons-for-gutenberg' ),
				},
				{
					value: 'hstyle5',
					label: __( 'Horizontal Style 5', 'ultimate-addons-for-gutenberg' ),
				},
				{
					value: 'vstyle6',
					label: __( 'Vertical Style 6', 'ultimate-addons-for-gutenberg' ),
				},
				{
					value: 'vstyle7',
					label: __( 'Vertical Style 7', 'ultimate-addons-for-gutenberg' ),
				},
				{
					value: 'vstyle8',
					label: __( 'Vertical Style 8', 'ultimate-addons-for-gutenberg' ),
				},
				{
					value: 'vstyle9',
					label: __( 'Vertical Style 9', 'ultimate-addons-for-gutenberg' ),
				},
				{
					value: 'vstyle10',
					label: __( 'Vertical Style 10', 'ultimate-addons-for-gutenberg' ),
				},
			],
			tablet: [
				{
					value: 'hstyle1',
					label: __( 'Horizontal Style 1', 'ultimate-addons-for-gutenberg' ),
				},
				{
					value: 'hstyle2',
					label: __( 'Horizontal Style 2', 'ultimate-addons-for-gutenberg' ),
				},
				{
					value: 'hstyle3',
					label: __( 'Horizontal Style 3', 'ultimate-addons-for-gutenberg' ),
				},
				{
					value: 'hstyle4',
					label: __( 'Horizontal Style 4', 'ultimate-addons-for-gutenberg' ),
				},
				{
					value: 'hstyle5',
					label: __( 'Horizontal Style 5', 'ultimate-addons-for-gutenberg' ),
				},
				{
					value: 'vstyle6',
					label: __( 'Vertical Style 6', 'ultimate-addons-for-gutenberg' ),
				},
				{
					value: 'vstyle7',
					label: __( 'Vertical Style 7', 'ultimate-addons-for-gutenberg' ),
				},
				{
					value: 'vstyle8',
					label: __( 'Vertical Style 8', 'ultimate-addons-for-gutenberg' ),
				},
				{
					value: 'vstyle9',
					label: __( 'Vertical Style 9', 'ultimate-addons-for-gutenberg' ),
				},
				{
					value: 'vstyle10',
					label: __( 'Vertical Style 10', 'ultimate-addons-for-gutenberg' ),
				},
			],
			mobile: [
				{
					value: 'stack1',
					label: __( 'Stack Style 1', 'ultimate-addons-for-gutenberg' ),
				},
				{
					value: 'stack2',
					label: __( 'Stack Style 2', 'ultimate-addons-for-gutenberg' ),
				},
				{
					value: 'stack3',
					label: __( 'Stack Style 3', 'ultimate-addons-for-gutenberg' ),
				},
				{
					value: 'stack4',
					label: __( 'Stack Style 4', 'ultimate-addons-for-gutenberg' ),
				},
			],
		};
		return (
			<UAGAdvancedPanelBody title={ __( 'Layout', 'ultimate-addons-for-gutenberg' ) } initialOpen={ false }>
				<ResponsiveSelectControl
					label={ __( 'Style', 'ultimate-addons-for-gutenberg' ) }
					data={ {
						desktop: {
							value: tabsStyleD,
							label: 'tabsStyleD',
						},
						tablet: {
							value: tabsStyleT,
							label: 'tabsStyleT',
						},
						mobile: {
							value: tabsStyleM,
							label: 'tabsStyleM',
						},
					} }
					options={ tabsStyleOptions }
					setAttributes={ setAttributes }
				/>
			</UAGAdvancedPanelBody>
		);
	};
	const tabTitleSettings = () => {
		return (
			<UAGAdvancedPanelBody title={ __( 'Tabs Title', 'ultimate-addons-for-gutenberg' ) } initialOpen={ false }>
				<UAGSelectControl
					label={ __( 'Initial Open Tab', 'ultimate-addons-for-gutenberg' ) }
					data={ {
						value: tabActiveFrontend,
					} }
					onChange={ onInitialTabChange }
					options={ tabHeaders.map( ( tab, index ) => {
						return { value: index, label: tab };
					} ) }
				/>
				<MultiButtonsControl
					setAttributes={ setAttributes }
					label={ __( 'Tab Alignment', 'ultimate-addons-for-gutenberg' ) }
					data={ {
						value: tabAlign,
						label: 'tabAlign',
					} }
					className="uagb-multi-button-alignment-control"
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
					] }
					showIcons={ true }
				/>
				<MultiButtonsControl
					setAttributes={ setAttributes }
					label={ __( 'Text Alignment', 'ultimate-addons-for-gutenberg' ) }
					data={ {
						value: titleAlign,
						label: 'titleAlign',
					} }
					className="uagb-multi-button-alignment-control"
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
					] }
					showIcons={ true }
				/>
				<ToggleControl
					label={ __( 'Enable Icon', 'ultimate-addons-for-gutenberg' ) }
					checked={ showIcon }
					onChange={ () => setAttributes( { showIcon: ! showIcon } ) }
				/>
				{ showIcon && (
					<>
						<UAGIconPicker
							label={ __( 'Tab Icon', 'ultimate-addons-for-gutenberg' ) }
							value={ icon }
							onChange={ ( value ) => setAttributes( { icon: value } ) }
						/>
						<MultiButtonsControl
							setAttributes={ setAttributes }
							label={ __( 'Icon Position', 'ultimate-addons-for-gutenberg' ) }
							data={ {
								value: iconPosition,
								label: 'iconPosition',
							} }
							className="uagb-multi-button-alignment-control"
							options={ [
								{
									value: 'left',
									label: __( 'Left', 'ultimate-addons-for-gutenberg' ),
								},
								{
									value: 'right',
									label: __( 'Right', 'ultimate-addons-for-gutenberg' ),
								},
								{
									value: 'top',
									label: __( 'Top', 'ultimate-addons-for-gutenberg' ),
								},
								{
									value: 'bottom',
									label: __( 'Bottom', 'ultimate-addons-for-gutenberg' ),
								},
							] }
						/>
					</>
				) }
			</UAGAdvancedPanelBody>
		);
	};
	const tabBorderSettings = () => {
		return (
			<UAGAdvancedPanelBody title={ __( 'Border', 'ultimate-addons-for-gutenberg' ) } initialOpen={ false }>
				<ResponsiveBorder
					setAttributes={ setAttributes }
					prefix={ 'tab' }
					attributes={ attributes }
					deviceType={ deviceType }
					disableBottomSeparator={ true }
					disabledBorderTitle={ true }
				/>
			</UAGAdvancedPanelBody>
		);
	};
	const tabBodySettings = () => {
		return (
			<UAGAdvancedPanelBody title={ __( 'Body', 'ultimate-addons-for-gutenberg' ) } initialOpen={ false }>
				<AdvancedPopColorControl
					label={ __( 'Text Color', 'ultimate-addons-for-gutenberg' ) }
					colorValue={ bodyTextColor }
					data={ {
						value: bodyTextColor,
						label: 'bodyTextColor',
					} }
					setAttributes={ setAttributes }
				/>
				<AdvancedPopColorControl
					label={ __( 'Background Color', 'ultimate-addons-for-gutenberg' ) }
					colorValue={ bodyBgColor }
					data={ {
						value: bodyBgColor,
						label: 'bodyBgColor',
					} }
					setAttributes={ setAttributes }
				/>
				<SpacingControl
					{ ...props }
					label={ __( 'Margin', 'ultimate-addons-for-gutenberg' ) }
					valueTop={ {
						value: tabBodyTopMargin,
						label: 'tabBodyTopMargin',
					} }
					valueRight={ {
						value: tabBodyRightMargin,
						label: 'tabBodyRightMargin',
					} }
					valueBottom={ {
						value: tabBodyBottomMargin,
						label: 'tabBodyBottomMargin',
					} }
					valueLeft={ {
						value: tabBodyLeftMargin,
						label: 'tabBodyLeftMargin',
					} }
					valueTopTablet={ {
						value: tabBodyTopMarginTablet,
						label: 'tabBodyTopMarginTablet',
					} }
					valueRightTablet={ {
						value: tabBodyRightMarginTablet,
						label: 'tabBodyRightMarginTablet',
					} }
					valueBottomTablet={ {
						value: tabBodyBottomMarginTablet,
						label: 'tabBodyBottomMarginTablet',
					} }
					valueLeftTablet={ {
						value: tabBodyLeftMarginTablet,
						label: 'tabBodyLeftMarginTablet',
					} }
					valueTopMobile={ {
						value: tabBodyTopMarginMobile,
						label: 'tabBodyTopMarginMobile',
					} }
					valueRightMobile={ {
						value: tabBodyRightMarginMobile,
						label: 'tabBodyRightMarginMobile',
					} }
					valueBottomMobile={ {
						value: tabBodyBottomMarginMobile,
						label: 'tabBodyBottomMarginMobile',
					} }
					valueLeftMobile={ {
						value: tabBodyLeftMarginMobile,
						label: 'tabBodyLeftMarginMobile',
					} }
					unit={ {
						value: tabBodyMarginUnit,
						label: 'tabBodyMarginUnit',
					} }
					mUnit={ {
						value: mobiletabBodyMarginUnit,
						label: 'mobiletabBodyMarginUnit',
					} }
					tUnit={ {
						value: tablettabBodyMarginUnit,
						label: 'tablettabBodyMarginUnit',
					} }
					attributes={ attributes }
					setAttributes={ setAttributes }
					link={ {
						value: tabBodyMarginLink,
						label: 'tabBodyMarginLink',
					} }
				/>
				<SpacingControl
					{ ...props }
					label={ __( 'Padding', 'ultimate-addons-for-gutenberg' ) }
					valueTop={ {
						value: tabBodyTopPadding,
						label: 'tabBodyTopPadding',
					} }
					valueRight={ {
						value: tabBodyRightPadding,
						label: 'tabBodyRightPadding',
					} }
					valueBottom={ {
						value: tabBodyBottomPadding,
						label: 'tabBodyBottomPadding',
					} }
					valueLeft={ {
						value: tabBodyLeftPadding,
						label: 'tabBodyLeftPadding',
					} }
					valueTopTablet={ {
						value: tabBodyTopPaddingTablet,
						label: 'tabBodyTopPaddingTablet',
					} }
					valueRightTablet={ {
						value: tabBodyRightPaddingTablet,
						label: 'tabBodyRightPaddingTablet',
					} }
					valueBottomTablet={ {
						value: tabBodyBottomPaddingTablet,
						label: 'tabBodyBottomPaddingTablet',
					} }
					valueLeftTablet={ {
						value: tabBodyLeftPaddingTablet,
						label: 'tabBodyLeftPaddingTablet',
					} }
					valueTopMobile={ {
						value: tabBodyTopPaddingMobile,
						label: 'tabBodyTopPaddingMobile',
					} }
					valueRightMobile={ {
						value: tabBodyRightPaddingMobile,
						label: 'tabBodyRightPaddingMobile',
					} }
					valueBottomMobile={ {
						value: tabBodyBottomPaddingMobile,
						label: 'tabBodyBottomPaddingMobile',
					} }
					valueLeftMobile={ {
						value: tabBodyLeftPaddingMobile,
						label: 'tabBodyLeftPaddingMobile',
					} }
					unit={ {
						value: tabBodyPaddingUnit,
						label: 'tabBodyPaddingUnit',
					} }
					mUnit={ {
						value: mobiletabBodyPaddingUnit,
						label: 'mobiletabBodyPaddingUnit',
					} }
					tUnit={ {
						value: tablettabBodyPaddingUnit,
						label: 'tablettabBodyPaddingUnit',
					} }
					attributes={ attributes }
					setAttributes={ setAttributes }
					link={ {
						value: tabBodyPaddingLink,
						label: 'tabBodyPaddingLink',
					} }
				/>
			</UAGAdvancedPanelBody>
		);
	};
	const presetSettings = () => {
		return (
			<UAGAdvancedPanelBody title={ __( 'Presets', 'ultimate-addons-for-gutenberg' ) } initialOpen={ true }>
				<UAGPresets setAttributes={ setAttributes } presets={ presets } presetInputType="radioImage" />
			</UAGAdvancedPanelBody>
		);
	};
	const tabTitleStyle = () => {
		const tabOutputNormal = (
			<>
				<AdvancedPopColorControl
					label={ __( 'Text Color', 'ultimate-addons-for-gutenberg' ) }
					colorValue={ headerTextColor }
					data={ {
						value: headerTextColor,
						label: 'headerTextColor',
					} }
					setAttributes={ setAttributes }
				/>
				<AdvancedPopColorControl
					label={ __( 'Background Color', 'ultimate-addons-for-gutenberg' ) }
					colorValue={ headerBgColor }
					data={ {
						value: headerBgColor,
						label: 'headerBgColor',
					} }
					setAttributes={ setAttributes }
				/>
			</>
		);
		const tabOutputActive = (
			<>
				<AdvancedPopColorControl
					label={ __( 'Text Color', 'ultimate-addons-for-gutenberg' ) }
					colorValue={ activeTabTextColor }
					data={ {
						value: activeTabTextColor,
						label: 'activeTabTextColor',
					} }
					setAttributes={ setAttributes }
				/>
				<AdvancedPopColorControl
					label={ __( 'Background Color', 'ultimate-addons-for-gutenberg' ) }
					colorValue={ activeTabBgColor }
					data={ {
						value: activeTabBgColor,
						label: 'activeTabBgColor',
					} }
					setAttributes={ setAttributes }
				/>
			</>
		);
		return (
			<UAGAdvancedPanelBody title={ __( 'Title', 'ultimate-addons-for-gutenberg' ) } initialOpen={ true }>
				<UAGTabsControl
					tabs={ [
						{
							name: 'normal',
							title: __( 'Normal', 'ultimate-addons-for-gutenberg' ),
						},
						{
							name: 'active',
							title: __( 'Active', 'ultimate-addons-for-gutenberg' ),
						},
					] }
					normal={ tabOutputNormal }
					active={ tabOutputActive }
				/>
				<TypographyControl
					label={ __( 'Typography', 'ultimate-addons-for-gutenberg' ) }
					attributes={ attributes }
					setAttributes={ setAttributes }
					loadGoogleFonts={ {
						value: titleLoadGoogleFonts,
						label: 'titleLoadGoogleFonts',
					} }
					fontFamily={ {
						value: titleFontFamily,
						label: 'titleFontFamily',
					} }
					fontWeight={ {
						value: titleFontWeight,
						label: 'titleFontWeight',
					} }
					fontStyle={ {
						value: titleFontStyle,
						label: 'titleFontStyle',
					} }
					fontSizeType={ {
						value: titleFontSizeType,
						label: 'titleFontSizeType',
					} }
					fontSize={ {
						value: titleFontSize,
						label: 'titleFontSize',
					} }
					fontSizeMobile={ {
						value: titleFontSizeMobile,
						label: 'titleFontSizeMobile',
					} }
					fontSizeTablet={ {
						value: titleFontSizeTablet,
						label: 'titleFontSizeTablet',
					} }
					lineHeightType={ {
						value: titleLineHeightType,
						label: 'titleLineHeightType',
					} }
					lineHeight={ {
						value: titleLineHeight,
						label: 'titleLineHeight',
					} }
					lineHeightMobile={ {
						value: titleLineHeightMobile,
						label: 'titleLineHeightMobile',
					} }
					lineHeightTablet={ {
						value: titleLineHeightTablet,
						label: 'titleLineHeightTablet',
					} }
					letterSpacing={ {
						value: titleLetterSpacing,
						label: 'titleLetterSpacing',
					} }
					letterSpacingTablet={ {
						value: titleLetterSpacingTablet,
						label: 'titleLetterSpacingTablet',
					} }
					letterSpacingMobile={ {
						value: titleLetterSpacingMobile,
						label: 'titleLetterSpacingMobile',
					} }
					letterSpacingType={ {
						value: titleLetterSpacingType,
						label: 'titleLetterSpacingType',
					} }
					transform={ {
						value: titleTransform,
						label: 'titleTransform',
					} }
					decoration={ {
						value: titleDecoration,
						label: 'titleDecoration',
					} }
				/>
				<SpacingControl
					{ ...props }
					label={ __( 'Margin', 'ultimate-addons-for-gutenberg' ) }
					valueTop={ {
						value: tabTitleTopMargin,
						label: 'tabTitleTopMargin',
					} }
					valueRight={ {
						value: tabTitleRightMargin,
						label: 'tabTitleRightMargin',
					} }
					valueBottom={ {
						value: tabTitleBottomMargin,
						label: 'tabTitleBottomMargin',
					} }
					valueLeft={ {
						value: tabTitleLeftMargin,
						label: 'tabTitleLeftMargin',
					} }
					valueTopTablet={ {
						value: tabTitleTopMarginTablet,
						label: 'tabTitleTopMarginTablet',
					} }
					valueRightTablet={ {
						value: tabTitleRightMarginTablet,
						label: 'tabTitleRightMarginTablet',
					} }
					valueBottomTablet={ {
						value: tabTitleBottomMarginTablet,
						label: 'tabTitleBottomMarginTablet',
					} }
					valueLeftTablet={ {
						value: tabTitleLeftMarginTablet,
						label: 'tabTitleLeftMarginTablet',
					} }
					valueTopMobile={ {
						value: tabTitleTopMarginMobile,
						label: 'tabTitleTopMarginMobile',
					} }
					valueRightMobile={ {
						value: tabTitleRightMarginMobile,
						label: 'tabTitleRightMarginMobile',
					} }
					valueBottomMobile={ {
						value: tabTitleBottomMarginMobile,
						label: 'tabTitleBottomMarginMobile',
					} }
					valueLeftMobile={ {
						value: tabTitleLeftMarginMobile,
						label: 'tabTitleLeftMarginMobile',
					} }
					unit={ {
						value: tabTitleMarginUnit,
						label: 'tabTitleMarginUnit',
					} }
					mUnit={ {
						value: mobiletabTitleMarginUnit,
						label: 'mobiletabTitleMarginUnit',
					} }
					tUnit={ {
						value: tablettabTitleMarginUnit,
						label: 'tablettabTitleMarginUnit',
					} }
					attributes={ attributes }
					setAttributes={ setAttributes }
					link={ {
						value: tabTitleMarginLink,
						label: 'tabTitleMarginLink',
					} }
				/>
				<SpacingControl
					{ ...props }
					label={ __( 'Padding', 'ultimate-addons-for-gutenberg' ) }
					valueTop={ {
						value: tabTitleTopPadding,
						label: 'tabTitleTopPadding',
					} }
					valueRight={ {
						value: tabTitleRightPadding,
						label: 'tabTitleRightPadding',
					} }
					valueBottom={ {
						value: tabTitleBottomPadding,
						label: 'tabTitleBottomPadding',
					} }
					valueLeft={ {
						value: tabTitleLeftPadding,
						label: 'tabTitleLeftPadding',
					} }
					valueTopTablet={ {
						value: tabTitleTopPaddingTablet,
						label: 'tabTitleTopPaddingTablet',
					} }
					valueRightTablet={ {
						value: tabTitleRightPaddingTablet,
						label: 'tabTitleRightPaddingTablet',
					} }
					valueBottomTablet={ {
						value: tabTitleBottomPaddingTablet,
						label: 'tabTitleBottomPaddingTablet',
					} }
					valueLeftTablet={ {
						value: tabTitleLeftPaddingTablet,
						label: 'tabTitleLeftPaddingTablet',
					} }
					valueTopMobile={ {
						value: tabTitleTopPaddingMobile,
						label: 'tabTitleTopPaddingMobile',
					} }
					valueRightMobile={ {
						value: tabTitleRightPaddingMobile,
						label: 'tabTitleRightPaddingMobile',
					} }
					valueBottomMobile={ {
						value: tabTitleBottomPaddingMobile,
						label: 'tabTitleBottomPaddingMobile',
					} }
					valueLeftMobile={ {
						value: tabTitleLeftPaddingMobile,
						label: 'tabTitleLeftPaddingMobile',
					} }
					unit={ {
						value: tabTitlePaddingUnit,
						label: 'tabTitlePaddingUnit',
					} }
					mUnit={ {
						value: mobiletabTitlePaddingUnit,
						label: 'mobiletabTitlePaddingUnit',
					} }
					tUnit={ {
						value: tablettabTitlePaddingUnit,
						label: 'tablettabTitlePaddingUnit',
					} }
					attributes={ attributes }
					setAttributes={ setAttributes }
					link={ {
						value: tabTitlePaddingLink,
						label: 'tabTitlePaddingLink',
					} }
				/>
			</UAGAdvancedPanelBody>
		);
	};

	const tabIconStyle = () => {
		if ( ! showIcon ) {
			return '';
		}
		const tabOutputNormal = (
			<AdvancedPopColorControl
				label={ __( 'Color', 'ultimate-addons-for-gutenberg' ) }
				colorValue={ iconColor }
				data={ {
					value: iconColor,
					label: 'iconColor',
				} }
				setAttributes={ setAttributes }
			/>
		);
		const tabOutputActive = (
			<AdvancedPopColorControl
				label={ __( 'Color', 'ultimate-addons-for-gutenberg' ) }
				colorValue={ activeiconColor }
				data={ {
					value: activeiconColor,
					label: 'activeiconColor',
				} }
				setAttributes={ setAttributes }
			/>
		);
		return (
			<UAGAdvancedPanelBody title={ __( 'Icon', 'ultimate-addons-for-gutenberg' ) } initialOpen={ false }>
				<ResponsiveSlider
					label={ __( 'Size', 'ultimate-addons-for-gutenberg' ) }
					data={ {
						desktop: {
							value: iconSize,
							label: 'iconSize',
						},
						tablet: {
							value: iconSizeTablet,
							label: 'iconSizeTablet',
						},
						mobile: {
							value: iconSizeMobile,
							label: 'iconSizeMobile',
						},
					} }
					min={ 0 }
					max={ 100 }
					displayUnit={ false }
					setAttributes={ setAttributes }
				/>
				<UAGTabsControl
					tabs={ [
						{
							name: 'normal',
							title: __( 'Normal', 'ultimate-addons-for-gutenberg' ),
						},
						{
							name: 'active',
							title: __( 'Active', 'ultimate-addons-for-gutenberg' ),
						},
					] }
					normal={ tabOutputNormal }
					active={ tabOutputActive }
				/>
				<ResponsiveSlider
					label={ __( 'Spacing', 'ultimate-addons-for-gutenberg' ) }
					data={ {
						desktop: {
							value: iconSpacing,
							label: 'iconSpacing',
						},
						tablet: {
							value: iconSpacingTablet,
							label: 'iconSpacingTablet',
						},
						mobile: {
							value: iconSpacingMobile,
							label: 'iconSpacingMobile',
						},
					} }
					min={ 0 }
					max={ 100 }
					displayUnit={ false }
					setAttributes={ setAttributes }
				/>
			</UAGAdvancedPanelBody>
		);
	};
	return (
		<InspectorControls>
			<InspectorTabs>
				<InspectorTab { ...UAGTabs.general }>
					{ presetSettings() }
					{ tabStyleSettings() }
					{ tabTitleSettings() }
				</InspectorTab>
				<InspectorTab { ...UAGTabs.style }>
					{ tabTitleStyle() }
					{ tabIconStyle() }
					{ tabBodySettings() }
					{ tabBorderSettings() }
				</InspectorTab>
				<InspectorTab { ...UAGTabs.advance } parentProps={ props }></InspectorTab>
			</InspectorTabs>
		</InspectorControls>
	);
};
export default memo( Settings );
