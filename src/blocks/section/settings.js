import { __ } from '@wordpress/i18n';
import BoxShadowControl from '@Components/box-shadow';
import InspectorTabs from '@Components/inspector-tabs/InspectorTabs.js';
import InspectorTab, {
	UAGTabs,
} from '@Components/inspector-tabs/InspectorTab.js';
import SpacingControl from '@Components/spacing-control';
import Range from '@Components/range/Range.js';
import Background from '@Components/background';
import ResponsiveBorder from '@Components/responsive-border';
import MultiButtonsControl from '@Components/multi-buttons-control';
import UAGSelectControl from '@Components/select-control';
import renderSVG from '@Controls/renderIcon';
import {
	BlockControls,
	AlignmentToolbar,
	InspectorControls,
} from '@wordpress/block-editor';
import { ToggleControl, Icon } from '@wordpress/components';
import { memo } from '@wordpress/element';
import UAGAdvancedPanelBody from '@Components/advanced-panel-body';

const Settings = ( props ) => {
	props = props.parentProps;

	const { attributes, setAttributes, deviceType } = props;

	const {
		block_id,
		align,
		contentWidth,
		width,
		innerWidth,
		innerWidthType,
		tag,
		themeWidth,
		leftPadding,
		rightPadding,
		topPadding,
		bottomPadding,
		leftMargin,
		rightMargin,
		topMargin,
		bottomMargin,
		topPaddingTablet,
		bottomPaddingTablet,
		leftPaddingTablet,
		rightPaddingTablet,
		topMarginTablet,
		bottomMarginTablet,
		leftMarginTablet,
		rightMarginTablet,
		topPaddingMobile,
		bottomPaddingMobile,
		leftPaddingMobile,
		rightPaddingMobile,
		topMarginMobile,
		bottomMarginMobile,
		leftMarginMobile,
		rightMarginMobile,
		backgroundType,
		backgroundImage,
		backgroundVideo,
		backgroundColor,
		backgroundPosition,
		backgroundAttachment,
		backgroundRepeat,
		backgroundSize,
		backgroundVideoColor,
		backgroundVideoOpacity,
		backgroundImageColor,
		overlayType,
		mobileMarginType,
		tabletMarginType,
		desktopMarginType,
		mobilePaddingType,
		tabletPaddingType,
		desktopPaddingType,
		boxShadowColor,
		boxShadowHOffset,
		boxShadowVOffset,
		boxShadowBlur,
		boxShadowSpread,
		boxShadowPosition,
		spacingLink,
		marginspacingLink,
		gradientValue,
		gradientColor1,
		gradientColor2,
		gradientLocation1,
		gradientLocation2,
		gradientType,
		gradientAngle,
		selectGradient,
	} = attributes;

	let blockControls = [ 'left', 'center', 'right' ];
	if ( 'full_width' === contentWidth ) {
		blockControls = [ 'wide', 'full' ];
	}

	const getLayoutPanelBody = () => {
		return (
			<UAGAdvancedPanelBody initialOpen={ true }>
				<MultiButtonsControl
					setAttributes={ setAttributes }
					label={ __(
						'Content Width',
						'ultimate-addons-for-gutenberg'
					) }
					data={ {
						value: contentWidth,
						label: 'contentWidth',
					} }
					className="uagb-multi-button-alignment-control"
					options={ [
						{
							value: 'boxed',
							label: 'Boxed',
						},
						{
							value: 'full_width',
							label: 'Full Width',
						},
					] }
					showIcons={ false }
				/>
				{ 'boxed' === contentWidth && (
					<>
					<MultiButtonsControl
						setAttributes={ setAttributes }
						label={ __(
							'Alignment',
							'ultimate-addons-for-gutenberg'
						) }
						data={ {
							value: align,
							label: 'align',
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
										icon={ renderSVG(
											'fa fa-align-center'
										) }
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
										icon={ renderSVG(
											'fa fa-align-right'
										) }
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
					<Range
						label={ __( 'Width', 'ultimate-addons-for-gutenberg' ) }
						setAttributes={ setAttributes }
						value={ width }
						data={ {
							value: width,
							label: 'width',
						} }
						min={ 0 }
						max={ 2000 }
						displayUnit={ false }
					/>
				</>
				) }
				{ contentWidth !== 'boxed' && (
					<ToggleControl
						label={ __(
							'Inherit Inner Width from Theme',
							'ultimate-addons-for-gutenberg'
						) }
						checked={ themeWidth }
						onChange={ () =>
							setAttributes( { themeWidth: ! themeWidth } )
						}
					/>
				) }
				{ contentWidth !== 'boxed' && ! themeWidth && (
					<Range
						label={ __(
							'Inner Width',
							'ultimate-addons-for-gutenberg'
						) }
						setAttributes={ setAttributes }
						value={ innerWidth }
						data={ {
							value: innerWidth,
							label: 'innerWidth',
						} }
						min={ 0 }
						max={ 2000 }
						unit={ {
							value: innerWidthType,
							label: 'innerWidthType',
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
									'Em',
									'ultimate-addons-for-gutenberg'
								),
								unitValue: 'em',
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
				) }
				<UAGSelectControl
					label={ __(
						'HTML Tag',
						'ultimate-addons-for-gutenberg'
					) }
					data={ {
						value: tag,
						label: 'tag',
					} }
					setAttributes={ setAttributes }
					options={ [
						{
							value: 'div',
							label: __( 'div', 'ultimate-addons-for-gutenberg' ),
						},
						{
							value: 'header',
							label: __(
								'header',
								'ultimate-addons-for-gutenberg'
							),
						},
						{
							value: 'footer',
							label: __(
								'footer',
								'ultimate-addons-for-gutenberg'
							),
						},
						{
							value: 'main',
							label: __(
								'main',
								'ultimate-addons-for-gutenberg'
							),
						},
						{
							value: 'article',
							label: __(
								'article',
								'ultimate-addons-for-gutenberg'
							),
						},
						{
							value: 'section',
							label: __(
								'section',
								'ultimate-addons-for-gutenberg'
							),
						},
						{
							value: 'aside',
							label: __(
								'aside',
								'ultimate-addons-for-gutenberg'
							),
						},
						{
							value: 'nav',
							label: __( 'nav', 'ultimate-addons-for-gutenberg' ),
						},
					] }
				/>
			</UAGAdvancedPanelBody>
		);
	};

	const getSpacingPanelBody = () => {
		return (
			<UAGAdvancedPanelBody title="Spacing" initialOpen={ false }>
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
						value: desktopMarginType,
						label: 'desktopMarginType',
					} }
					mUnit={ {
						value: mobileMarginType,
						label: 'mobileMarginType',
					} }
					tUnit={ {
						value: tabletMarginType,
						label: 'tabletMarginType',
					} }
					deviceType={ deviceType }
					attributes={ attributes }
					setAttributes={ setAttributes }
					link={ {
						value: marginspacingLink,
						label: 'marginspacingLink',
					} }
				/>
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
						value: topPaddingTablet,
						label: 'topPaddingTablet',
					} }
					valueRightTablet={ {
						value: rightPaddingTablet,
						label: 'rightPaddingTablet',
					} }
					valueBottomTablet={ {
						value: bottomPaddingTablet,
						label: 'bottomPaddingTablet',
					} }
					valueLeftTablet={ {
						value: leftPaddingTablet,
						label: 'leftPaddingTablet',
					} }
					valueTopMobile={ {
						value: topPaddingMobile,
						label: 'topPaddingMobile',
					} }
					valueRightMobile={ {
						value: rightPaddingMobile,
						label: 'rightPaddingMobile',
					} }
					valueBottomMobile={ {
						value: bottomPaddingMobile,
						label: 'bottomPaddingMobile',
					} }
					valueLeftMobile={ {
						value: leftPaddingMobile,
						label: 'leftPaddingMobile',
					} }
					unit={ {
						value: desktopPaddingType,
						label: 'desktopPaddingType',
					} }
					mUnit={ {
						value: mobilePaddingType,
						label: 'mobilePaddingType',
					} }
					tUnit={ {
						value: tabletPaddingType,
						label: 'tabletPaddingType',
					} }
					deviceType={ deviceType }
					attributes={ attributes }
					setAttributes={ setAttributes }
					link={ {
						value: spacingLink,
						label: 'spacingLink',
					} }
				/>
			</UAGAdvancedPanelBody>
		);
	};

	const getBackgroundPanelBody = () => {
		return (
			<UAGAdvancedPanelBody
				title={ __( 'Background', 'ultimate-addons-for-gutenberg' ) }
				initialOpen={ true }
			>
				<Background
					setAttributes={ setAttributes }
					backgroundGradient={ {
						value: gradientValue,
						label: 'gradientValue',
					} }
					backgroundGradientColor1={{
						value: gradientColor1,
						label: 'gradientColor1'
					}}
					gradientType={{
						value: selectGradient,
						label: 'selectGradient',
					}}
					backgroundGradientColor2={{
						value: 	gradientColor2,
						label: 'gradientColor2'
					}}
					backgroundGradientLocation1={{
						value: 	gradientLocation1,
						label: 'gradientLocation1'
					}}
					backgroundGradientLocation2={{
						value: 	gradientLocation2,
						label: 'gradientLocation2'
					}}
					backgroundGradientType={{
						value: 	gradientType,
						label: 'gradientType'
					}}
					backgroundGradientAngle={{
						value: 	gradientAngle,
						label: 'gradientAngle'
					}}
					backgroundImageColor={ {
						value: backgroundImageColor,
						label: 'backgroundImageColor',
					} }
					overlayType={ {
						value: overlayType,
						label: 'overlayType',
					} }
					gradientOverlay={{
						value: true,
					}}
					backgroundSize={ {
						value: backgroundSize,
						label: 'backgroundSize',
					} }
					backgroundRepeat={ {
						value: backgroundRepeat,
						label: 'backgroundRepeat',
					} }
					backgroundAttachment={ {
						value: backgroundAttachment,
						label: 'backgroundAttachment',
					} }
					backgroundPosition={ {
						value: backgroundPosition,
						label: 'backgroundPosition',
					} }
					backgroundImage={ {
						value: backgroundImage,
						label: 'backgroundImage',
					} }
					backgroundColor={ {
						value: backgroundColor,
						label: 'backgroundColor',
					} }
					backgroundType={ {
						value: backgroundType,
						label: 'backgroundType',
					} }
					backgroundVideoType={ {
						value: true,
					} }
					backgroundVideo={ {
						value: backgroundVideo,
						label: 'backgroundVideo',
					} }
					backgroundVideoColor={ {
						value: backgroundVideoColor,
						label: 'backgroundVideoColor',
					} }
					backgroundVideoOpacity={ {
						value: backgroundVideoOpacity,
						label: 'backgroundVideoOpacity',
					} }
					onOpacityChange = { ( opacity ) => setAttributes( { backgroundVideoOpacity: opacity } ) }
					{ ...props }
				/>
			</UAGAdvancedPanelBody>
		);
	};

	const getBorderPanelBody = () => {
		return (
			<>
				<UAGAdvancedPanelBody
					title={ __( 'Border', 'ultimate-addons-for-gutenberg' ) }
					initialOpen={ false }
				>
					<ResponsiveBorder
						setAttributes={ setAttributes }
						prefix={'overall'}
						attributes={ attributes }
						deviceType={ deviceType}
						disableBottomSeparator={ true }
						disabledBorderTitle= { true }
					/>
				</UAGAdvancedPanelBody>
				<UAGAdvancedPanelBody title="Box Shadow" initialOpen={ false }>
					<BoxShadowControl
						blockId={ block_id }
						setAttributes={ setAttributes }
						label={ __(
							'Box Shadow',
							'ultimate-addons-for-gutenberg'
						) }
						boxShadowColor={ {
							value: boxShadowColor,
							label: 'boxShadowColor',
							title: __(
								'Color',
								'ultimate-addons-for-gutenberg'
							),
						} }
						boxShadowHOffset={ {
							value: boxShadowHOffset,
							label: 'boxShadowHOffset',
							title: __(
								'Horizontal',
								'ultimate-addons-for-gutenberg'
							),
						} }
						boxShadowVOffset={ {
							value: boxShadowVOffset,
							label: 'boxShadowVOffset',
							title: __(
								'Vertical',
								'ultimate-addons-for-gutenberg'
							),
						} }
						boxShadowBlur={ {
							value: boxShadowBlur,
							label: 'boxShadowBlur',
							title: __(
								'Blur',
								'ultimate-addons-for-gutenberg'
							),
						} }
						boxShadowSpread={ {
							value: boxShadowSpread,
							label: 'boxShadowSpread',
							title: __(
								'Spread',
								'ultimate-addons-for-gutenberg'
							),
						} }
						boxShadowPosition={ {
							value: boxShadowPosition,
							label: 'boxShadowPosition',
							title: __(
								'Position',
								'ultimate-addons-for-gutenberg'
							),
						} }
					/>
				</UAGAdvancedPanelBody>
			</>
		);
	};

	const generalSetting = () => {
		return (
			<InspectorTabs>
				<InspectorTab { ...UAGTabs.general }>
					{ getLayoutPanelBody() }
				</InspectorTab>
				<InspectorTab { ...UAGTabs.style }>
					{ getBackgroundPanelBody() }
					{ getBorderPanelBody() }
					{ getSpacingPanelBody() }
				</InspectorTab>
				<InspectorTab
					{ ...UAGTabs.advance }
					parentProps={ props }
				></InspectorTab>
			</InspectorTabs>
		);
	};
	return (
			<>
			<BlockControls>
				<AlignmentToolbar
					value={ align }
					onChange={ ( value ) => {
						setAttributes( { align: value } );
					} }
					controls={ blockControls }
				/>
			</BlockControls>
			<InspectorControls>{ generalSetting() }</InspectorControls>
			</>

	);
};

export default memo( Settings );
