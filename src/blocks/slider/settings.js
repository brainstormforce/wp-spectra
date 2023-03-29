import { useEffect,memo } from '@wordpress/element';
import InspectorTabs from '@Components/inspector-tabs/InspectorTabs.js';
import InspectorTab, {
	UAGTabs,
} from '@Components/inspector-tabs/InspectorTab.js';
import Range from '@Components/range/Range.js';
import ResponsiveSlider from '@Components/responsive-slider';
import UAGSelectControl from '@Components/select-control';
import { __ } from '@wordpress/i18n';

import {
	InspectorControls,
	BlockControls,
} from '@wordpress/block-editor';
import BoxShadowControl from '@Components/box-shadow';
import SpacingControl from '@Components/spacing-control';
import Background from '@Components/background';
import ResponsiveBorder from '@Components/responsive-border';
import UAGAdvancedPanelBody from '@Components/advanced-panel-body';
import MultiButtonsControl from '@Components/multi-buttons-control';
import {
	Icon,
	ToggleControl,
	ToolbarGroup,
	ToolbarButton,
} from '@wordpress/components';
import renderCustomIcon from '@Controls/renderCustomIcon';
import UAGTabsControl from '@Components/tabs';
import AdvancedPopColorControl from '@Components/color-control/advanced-pop-color-control';
import { boxShadowPresets, boxShadowHoverPresets } from './presets';
import UAGPresets from '@Components/presets';
import { createBlock } from '@wordpress/blocks';
import { applyFilters } from '@wordpress/hooks';

const Settings = ( props ) => {

	props = props.parentProps;
	const { attributes, setAttributes, deviceType, insertBlock, block } = props;
	const {
		block_id,
		swiperInstance,

		pauseOn,
		infiniteLoop,
		transitionSpeed,
		displayArrows,
		displayDots,
		autoplay,
		autoplaySpeed,
		transitionEffect,

		backgroundType,
		backgroundImageDesktop,
		backgroundImageTablet,
		backgroundImageMobile,
		backgroundColor,
		backgroundPositionDesktop,
		backgroundPositionTablet,
		backgroundPositionMobile,
		backgroundAttachmentDesktop,
		backgroundAttachmentTablet,
		backgroundAttachmentMobile,
		backgroundRepeatDesktop,
		backgroundRepeatTablet,
		backgroundRepeatMobile,
		backgroundSizeDesktop,
		backgroundSizeTablet,
		backgroundSizeMobile,
		backgroundImageColor,
		gradientValue,
		boxShadowColor,
		boxShadowHOffset,
		boxShadowVOffset,
		boxShadowBlur,
		boxShadowSpread,
		boxShadowPosition,
		boxShadowColorHover,
		boxShadowHOffsetHover,
		boxShadowVOffsetHover,
		boxShadowBlurHover,
		boxShadowSpreadHover,
		boxShadowPositionHover,

		topPaddingDesktop,
		bottomPaddingDesktop,
		leftPaddingDesktop,
		rightPaddingDesktop,
		topPaddingTablet,
		bottomPaddingTablet,
		leftPaddingTablet,
		rightPaddingTablet,
		topPaddingMobile,
		bottomPaddingMobile,
		leftPaddingMobile,
		rightPaddingMobile,
		paddingType,
		paddingTypeTablet,
		paddingTypeMobile,
		paddingLink,
		topMarginDesktop,
		bottomMarginDesktop,
		leftMarginDesktop,
		rightMarginDesktop,
		topMarginTablet,
		bottomMarginTablet,
		leftMarginTablet,
		rightMarginTablet,
		topMarginMobile,
		bottomMarginMobile,
		leftMarginMobile,
		rightMarginMobile,
		marginType,
		marginTypeTablet,
		marginTypeMobile,
		marginLink,

		backgroundCustomSizeDesktop,
		backgroundCustomSizeTablet,
		backgroundCustomSizeMobile,
		backgroundCustomSizeType,
		overlayType,
		customPosition,
		xPositionDesktop,
		xPositionTablet,
		xPositionMobile,
		xPositionType,
		xPositionTypeTablet,
		xPositionTypeMobile,
		yPositionDesktop,
		yPositionTablet,
		yPositionMobile,
		yPositionType,
		yPositionTypeTablet,
		yPositionTypeMobile,
		arrowSize,
		arrowSizeTablet,
		arrowSizeMobile,
		arrowPadding,
		arrowPaddingTablet,
		arrowPaddingMobile,
		arrowColor,
		arrowBgColor,
		arrowDistance,
		arrowDistanceTablet,
		arrowDistanceMobile,
		verticalAlign,
		dotsMarginTop,
		dotsMarginTopTablet,
		dotsMarginTopMobile,
		minHeight,
		minHeightTablet,
		minHeightMobile
	} = attributes;

	// This useEffect ensures that background size is set to cover, so as to ensure color takes up entire width and height,
	// in case bg type was set to Image before and given a custom width and height.
	useEffect( () => {
		if ( backgroundType === 'color' ) {
			setAttributes( {
				backgroundSizeDesktop: 'cover',
				backgroundSizeTablet: 'cover',
				backgroundSizeMobile: 'cover',
			} );
		}
	}, [backgroundType] );

	const getBlockControls = () => {
		return (
			<BlockControls>
				<ToolbarGroup>
					<ToolbarButton
						icon='insert'
						label={__( 'Add Slide' )}
						onClick={ () => {

							insertBlock(
								createBlock( 'uagb/slider-child' ),
								block.innerBlocks.length,
								block.clientId
							);

							setAttributes( { slideItem: attributes.slideItem + 1 } );
							swiperInstance.activeIndex = attributes.slideItem + 1;
						} }
					/>
				</ToolbarGroup>
			</BlockControls>
		);
	};

	const verticalAlignOptions = [
		{
			value: 'start',
			tooltip: __( 'Top', 'ultimate-addons-for-gutenberg' ),
			icon: (
				<Icon
					icon={ renderCustomIcon( `flex-column-start` ) }
				/>
			),
		},
		{
			value: 'center',
			tooltip: __( 'Center', 'ultimate-addons-for-gutenberg' ),
			icon: (
				<Icon
					icon={ renderCustomIcon( `flex-column-center` ) }
				/>
			),
		},
		{
			value: 'end',
			tooltip: __( 'Bottom', 'ultimate-addons-for-gutenberg' ),
			icon: (
				<Icon
					icon={ renderCustomIcon( `flex-column-end` ) }
				/>
			),
		},
	];

	const generalSettings = () => {

		const toggleInfiniteLoop = () => {
			setAttributes( { infiniteLoop: ! infiniteLoop } );
		};

		const toggleAutoplay = () => {
			setAttributes( { autoplay: ! autoplay } );
		};

		const toggleDisplayArrows = () => {
			setAttributes( { displayArrows: ! displayArrows } );
		};

		const toggleDisplayDots = () => {
			setAttributes( { displayDots: ! displayDots } );
		};

		const afterNavigationOptions = applyFilters( 'spectra.slider.tab_general.displayDots.after', '', props );
		const afterAutoPlayOptions = applyFilters( 'spectra.slider.tab_general.autoplay.after', '', props );
		const afterTransitionOptions = applyFilters( 'spectra.slider.tab_general.transitionSpeed.after', '', props );

		const sliderSettings = () => {
			return (
				<>
				<UAGAdvancedPanelBody
					title={ __( 'Slider', 'ultimate-addons-for-gutenberg' ) }
					initialOpen={ false }
				>
					<ToggleControl
						label={ __( 'Autoplay' ) }
						checked={ autoplay }
						onChange={ toggleAutoplay }
						help={ __( "Above setting will only take effect once you are on the live page, and not while you're editing.", 'ultimate-addons-for-gutenberg' ) }
					/>
					{ autoplay === true && (
						<>
						<Range
							label={ __(
								'Autoplay Speed (ms)',
								'ultimate-addons-for-gutenberg'
							) }
							setAttributes={ setAttributes }
							value={ autoplaySpeed }
							data={ {
								value: autoplaySpeed,
								label: 'autoplaySpeed',
							} }
							min={ 100 }
							max={ 15000 }
							displayUnit={ false }
						/>
						<MultiButtonsControl
							setAttributes={ setAttributes }
							label={ __(
								'Pause On',
								'ultimate-addons-for-gutenberg'
							) }
							data={ {
								value: pauseOn,
								label: 'pauseOn',
							} }
							options={ [
								{
									value: 'hover',
									label: __(
										'Hover',
										'ultimate-addons-for-gutenberg'
									),
								},
								{
									value: 'click',
									label: __(
										'Interaction',
										'ultimate-addons-for-gutenberg'
									),
								},
								{
									value: 'none',
									label: __(
										'None',
										'ultimate-addons-for-gutenberg'
									),
								},
							] }
							help={ __( "Above setting will only take effect once you are on the live page, and not while you're editing.", 'ultimate-addons-for-gutenberg' ) }
						/>
						</>
					) }
					{ afterAutoPlayOptions }
					<ToggleControl
						label={ __(
							'Infinite Loop',
							'ultimate-addons-for-gutenberg'
						) }
						checked={ infiniteLoop }
						onChange={ toggleInfiniteLoop }
						help={ __( "Above setting will only take effect once you are on the live page, and not while you're editing.", 'ultimate-addons-for-gutenberg' ) }
					/>
					<ResponsiveSlider
						label={ __(
							'Minimum Height',
							'ultimate-addons-for-gutenberg'
						) }
						data={ {
							desktop: {
								value: minHeight,
								label: 'minHeight',
							},
							tablet: {
								value: minHeightTablet,
								label: 'minHeightTablet',
							},
							mobile: {
								value: minHeightMobile,
								label: 'minHeightMobile',
							},
						} }
						min={ 100 }
						max={ 1000 }
						displayUnit={ false }
						setAttributes={ setAttributes }
					/>
					<UAGSelectControl
						label={ __(
							'Transition Effect',
							'ultimate-addons-for-gutenberg'
						) }
						data={ {
							value: transitionEffect,
							label: 'transitionEffect',
						} }
						onChange={ ( value ) =>
							setAttributes( { transitionEffect: value } )
						}
						setAttributes={ setAttributes }
						options={ [
							{
								value: 'slide',
								label: __(
									'Slide',
									'ultimate-addons-for-gutenberg'
								),
							},
							{
								value: 'fade',
								label: __(
									'Fade',
									'ultimate-addons-for-gutenberg'
								),
							},
							{
								value: 'flip',
								label: __(
									'Flip',
									'ultimate-addons-for-gutenberg'
								),
							}
						] }
						help={ __( "Above setting will only take effect once you are on the live page, and not while you're editing.", 'ultimate-addons-for-gutenberg' ) }
					/>
					<Range
						label={ __(
							'Transition Speed (ms)',
							'ultimate-addons-for-gutenberg'
						) }
						setAttributes={ setAttributes }
						value={ transitionSpeed }
						data={ {
							value: transitionSpeed,
							label: 'transitionSpeed',
						} }
						onChange={ ( value ) =>
							setAttributes( { transitionSpeed: value } )
						}
						min={ 100 }
						max={ 5000 }
						displayUnit={ false }
					/>
					{ afterTransitionOptions }
				</UAGAdvancedPanelBody>
				<UAGAdvancedPanelBody
					title={ __( 'Navigation', 'ultimate-addons-for-gutenberg' ) }
					initialOpen={ false }
				>
					<ToggleControl
						label={ __(
							'Arrows',
							'ultimate-addons-for-gutenberg'
						) }
						checked={ displayArrows }
						onChange={ toggleDisplayArrows }
					/>
					<ToggleControl
						label={ __(
							'Dots',
							'ultimate-addons-for-gutenberg'
						) }
						checked={ displayDots }
						onChange={ toggleDisplayDots }
					/>
					{ afterNavigationOptions }
				</UAGAdvancedPanelBody>
				<UAGAdvancedPanelBody
					title={ __( 'Content', 'ultimate-addons-for-gutenberg' ) }
					initialOpen={ false }
				>
					<MultiButtonsControl
						setAttributes={ setAttributes }
						label={ __( 'Vertical Alignment', 'ultimate-addons-for-gutenberg' ) }
						data={ {
							value: verticalAlign,
							label: 'verticalAlign',
						} }
						options={ verticalAlignOptions }
						showIcons={ true }
						responsive={ false }
					/>
				</UAGAdvancedPanelBody>
				</>
			);
		};

		return (
			<>
				{ sliderSettings() }
			</>
		);
	};

	const backgroundSettings = () => {
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
					backgroundImageColor={ {
						value: backgroundImageColor,
						label: 'backgroundImageColor',
					} }
					backgroundSize={{
						desktop: {
							value: backgroundSizeDesktop,
							label: 'backgroundSizeDesktop',
						},
						tablet: {
							value: backgroundSizeTablet,
							label: 'backgroundSizeTablet',
						},
						mobile: {
							value: backgroundSizeMobile,
							label: 'backgroundSizeMobile',
						},
					}}
					backgroundCustomSize={{
						desktop: {
							value: backgroundCustomSizeDesktop,
							label: 'backgroundCustomSizeDesktop',
						},
						tablet: {
							value: backgroundCustomSizeTablet,
							label: 'backgroundCustomSizeTablet',
						},
						mobile: {
							value: backgroundCustomSizeMobile,
							label: 'backgroundCustomSizeMobile',
						},
					}}
					backgroundCustomSizeType={{
						value: backgroundCustomSizeType,
						label: 'backgroundCustomSizeType'
					}}
					backgroundRepeat={{
						desktop: {
							value: backgroundRepeatDesktop,
							label: 'backgroundRepeatDesktop',
						},
						tablet: {
							value: backgroundRepeatTablet,
							label: 'backgroundRepeatTablet',
						},
						mobile: {
							value: backgroundRepeatMobile,
							label: 'backgroundRepeatMobile',
						},
					}}
					backgroundAttachment={{
						desktop: {
							value: backgroundAttachmentDesktop,
							label: 'backgroundAttachmentDesktop',
						},
						tablet: {
							value: backgroundAttachmentTablet,
							label: 'backgroundAttachmentTablet',
						},
						mobile: {
							value: backgroundAttachmentMobile,
							label: 'backgroundAttachmentMobile',
						},
					}}
					backgroundPosition={{
						desktop: {
							value: backgroundPositionDesktop,
							label: 'backgroundPositionDesktop',
						},
						tablet: {
							value: backgroundPositionTablet,
							label: 'backgroundPositionTablet',
						},
						mobile: {
							value: backgroundPositionMobile,
							label: 'backgroundPositionMobile',
						},
					}}
					backgroundImage={{
						desktop: {
							value: backgroundImageDesktop,
							label: 'backgroundImageDesktop',
						},
						tablet: {
							value: backgroundImageTablet,
							label: 'backgroundImageTablet',
						},
						mobile: {
							value: backgroundImageMobile,
							label: 'backgroundImageMobile',
						},
					}}
					imageResponsive={true}
					backgroundColor={ {
						value: backgroundColor,
						label: 'backgroundColor',
					} }
					backgroundType={ {
						value: backgroundType,
						label: 'backgroundType',
					} }
					overlayType={{
						value: overlayType,
						label: 'overlayType'
					}}
					gradientOverlay={{
						value: true,
					}}
					customPosition={{
						value: customPosition,
						label: 'customPosition'
					}}
					xPositionDesktop={{
						value: xPositionDesktop,
						label: 'xPositionDesktop'
					}}
					xPositionTablet={{
						value: xPositionTablet,
						label: 'xPositionTablet'
					}}
					xPositionMobile={{
						value: xPositionMobile,
						label: 'xPositionMobile'
					}}
					xPositionType={{
						value: xPositionType,
						label: 'xPositionType'
					}}
					xPositionTypeTablet={{
						value: xPositionTypeTablet,
						label: 'xPositionTypeTablet'
					}}
					xPositionTypeMobile={{
						value: xPositionTypeMobile,
						label: 'xPositionTypeMobile'
					}}
					yPositionDesktop={{
						value: yPositionDesktop,
						label: 'yPositionDesktop'
					}}
					yPositionTablet={{
						value: yPositionTablet,
						label: 'yPositionTablet'
					}}
					yPositionMobile={{
						value: yPositionMobile,
						label: 'yPositionMobile'
					}}
					yPositionType={{
						value: yPositionType,
						label: 'yPositionType'
					}}
					yPositionTypeTablet={{
						value: yPositionTypeTablet,
						label: 'yPositionTypeTablet'
					}}
					yPositionTypeMobile={{
						value: yPositionTypeMobile,
						label: 'yPositionTypeMobile'
					}}
					backgroundVideoType={ {
						value: false,
					} }
					{ ...props }
				/>
			</UAGAdvancedPanelBody>
		);
	};

	const borderSettings = () => {
		return(
			<UAGAdvancedPanelBody
				title={ __( 'Border', 'ultimate-addons-for-gutenberg' ) }
				initialOpen={ false }
			>
				<ResponsiveBorder
					setAttributes={ setAttributes }
					prefix={ 'slider' }
					attributes={ attributes }
					deviceType={ deviceType }
					disableBottomSeparator={ true }
					disabledBorderTitle= { true }
				/>
			</UAGAdvancedPanelBody>
		);
	}

	const boxShadowSettings = () => {
		return(
			<UAGAdvancedPanelBody
				title={ __( 'Box Shadow', 'ultimate-addons-for-gutenberg' ) }
				initialOpen={ false }
			>

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
							<UAGPresets
								setAttributes = { setAttributes }
								presets = { boxShadowPresets }
								presetInputType = 'radioImage'
							/>
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
									title: __( 'Color', 'ultimate-addons-for-gutenberg' ),
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
									title: __( 'Blur', 'ultimate-addons-for-gutenberg' ),
								} }
								boxShadowSpread={ {
									value: boxShadowSpread,
									label: 'boxShadowSpread',
									title: __( 'Spread', 'ultimate-addons-for-gutenberg' ),
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
						</>
					}
					hover={
						<>
							<UAGPresets
								setAttributes = { setAttributes }
								presets = { boxShadowHoverPresets }
								presetInputType = 'radioImage'
							/>
							<BoxShadowControl
								blockId={ block_id }
								setAttributes={ setAttributes }
								label={ __(
									'Box Shadow',
									'ultimate-addons-for-gutenberg'
								) }
								boxShadowColor={ {
									value: boxShadowColorHover,
									label: 'boxShadowColorHover',
									title: __( 'Color', 'ultimate-addons-for-gutenberg' ),
								} }
								boxShadowHOffset={ {
									value: boxShadowHOffsetHover,
									label: 'boxShadowHOffsetHover',
									title: __(
										'Horizontal',
										'ultimate-addons-for-gutenberg'
									),
								} }
								boxShadowVOffset={ {
									value: boxShadowVOffsetHover,
									label: 'boxShadowVOffsetHover',
									title: __(
										'Vertical',
										'ultimate-addons-for-gutenberg'
									),
								} }
								boxShadowBlur={ {
									value: boxShadowBlurHover,
									label: 'boxShadowBlurHover',
									title: __( 'Blur', 'ultimate-addons-for-gutenberg' ),
								} }
								boxShadowSpread={ {
									value: boxShadowSpreadHover,
									label: 'boxShadowSpreadHover',
									title: __( 'Spread', 'ultimate-addons-for-gutenberg' ),
								} }
								boxShadowPosition={ {
									value: boxShadowPositionHover,
									label: 'boxShadowPositionHover',
									title: __(
										'Position',
										'ultimate-addons-for-gutenberg'
									),
								} }
							/>
						</>
					}
					disableBottomSeparator={ true }
				/>
			</UAGAdvancedPanelBody>
		);
	}

	const spacingSettings = () => {
		return(
			<UAGAdvancedPanelBody
				title={ __( 'Spacing', 'ultimate-addons-for-gutenberg' ) }
				initialOpen={ false }
			>
				<SpacingControl
					{ ...props }
					label={ __( 'Padding', 'ultimate-addons-for-gutenberg' ) }
					valueTop={ {
						value: topPaddingDesktop,
						label: 'topPaddingDesktop',
					} }
					valueRight={ {
						value: rightPaddingDesktop,
						label: 'rightPaddingDesktop',
					} }
					valueBottom={ {
						value: bottomPaddingDesktop,
						label: 'bottomPaddingDesktop',
					} }
					valueLeft={ {
						value: leftPaddingDesktop,
						label: 'leftPaddingDesktop',
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
						value: paddingType,
						label: 'paddingType',
					} }
					mUnit={ {
						value: paddingTypeMobile,
						label: 'paddingTypeMobile',
					} }
					tUnit={ {
						value: paddingTypeTablet,
						label: 'paddingTypeTablet',
					} }
					attributes={ attributes }
					setAttributes={ setAttributes }
					link={ {
						value: paddingLink,
						label: 'paddingLink',
					} }
				/>
				<SpacingControl
					{ ...props }
					label={ __( 'Margin', 'ultimate-addons-for-gutenberg' ) }
					valueTop={ {
						value: topMarginDesktop,
						label: 'topMarginDesktop',
					} }
					valueRight={ {
						value: rightMarginDesktop,
						label: 'rightMarginDesktop',
					} }
					valueBottom={ {
						value: bottomMarginDesktop,
						label: 'bottomMarginDesktop',
					} }
					valueLeft={ {
						value: leftMarginDesktop,
						label: 'leftMarginDesktop',
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
						value: marginTypeMobile,
						label: 'marginTypeMobile',
					} }
					tUnit={ {
						value: marginTypeTablet,
						label: 'marginTypeTablet',
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
	}

	const navigationSettings = () => {

		return (
			<>
			<UAGAdvancedPanelBody
				title={ __( 'Arrows and Dots', 'ultimate-addons-for-gutenberg' ) }
				initialOpen={ false }
			>
				<AdvancedPopColorControl
					label={ __(
						'Color',
						'ultimate-addons-for-gutenberg'
					) }
					colorValue={ arrowColor }
					data={ {
						value: arrowColor,
						label: 'arrowColor',
					} }
					setAttributes={ setAttributes }
				/>
				<AdvancedPopColorControl
					label={ __(
						'Background Color',
						'ultimate-addons-for-gutenberg'
					) }
					colorValue={ arrowBgColor }
					data={ {
						value: arrowBgColor,
						label: 'arrowBgColor',
					} }
					setAttributes={ setAttributes }
				/>
				{ displayArrows &&
					<>
						<ResponsiveSlider
							label={ __(
								'Size',
								'ultimate-addons-for-gutenberg'
							) }
							data={ {
								desktop: {
									value: arrowSize,
									label: 'arrowSize',
								},
								tablet: {
									value: arrowSizeTablet,
									label: 'arrowSizeTablet',
								},
								mobile: {
									value: arrowSizeMobile,
									label: 'arrowSizeMobile',
								},
							} }
							min={ 0 }
							max={ 100 }
							displayUnit={ false }
							setAttributes={ setAttributes }
						/>
						<ResponsiveSlider
							label={ __(
								'Padding',
								'ultimate-addons-for-gutenberg'
							) }
							data={ {
								desktop: {
									value: arrowPadding,
									label: 'arrowPadding',
								},
								tablet: {
									value: arrowPaddingTablet,
									label: 'arrowPaddingTablet',
								},
								mobile: {
									value: arrowPaddingMobile,
									label: 'arrowPaddingMobile',
								},
							} }
							min={ 0 }
							max={ 80 }
							displayUnit={ false }
							setAttributes={ setAttributes }
						/>
						<ResponsiveSlider
							label={ __( 'Arrow Distance from Edges', 'ultimate-addons-for-gutenberg' ) }
							data={ {
								desktop: {
									value: arrowDistance,
									label: 'arrowDistance',
								},
								tablet: {
									value: arrowDistanceTablet,
									label: 'arrowDistanceTablet',
								},
								mobile: {
									value: arrowDistanceMobile,
									label: 'arrowDistanceMobile',
								},
							} }
							min={ -50 }
							max={ 50 }
							displayUnit={ false }
							setAttributes={ setAttributes }
						/>
					</>
				}
				{ displayDots &&
					<ResponsiveSlider
						label={ __( 'Top Margin for Dots', 'ultimate-addons-for-gutenberg' ) }
						data={ {
							desktop: {
								value: dotsMarginTop,
								label: 'dotsMarginTop',
							},
							tablet: {
								value: dotsMarginTopTablet,
								label: 'dotsMarginTopTablet',
							},
							mobile: {
								value: dotsMarginTopMobile,
								label: 'dotsMarginTopMobile',
							},
						} }
						min={ -100 }
						max={ 100 }
						displayUnit={ false }
						setAttributes={ setAttributes }
					/>
				}
				{ displayArrows &&
					<ResponsiveBorder
						setAttributes={ setAttributes }
						prefix={ 'slider-arrow' }
						attributes={ attributes }
						deviceType={ deviceType }
						disableBottomSeparator={ true }
					/>
				}
			</UAGAdvancedPanelBody>
			</>
		)
	}

	const afterNavigationStyleOptions =  applyFilters( 'spectra.slider.tab_style.NavigationStyle.after', '', props );

	return (
		<>
		{ getBlockControls() }
			<InspectorControls>
				<InspectorTabs>
					<InspectorTab { ...UAGTabs.general }>
						{ generalSettings() }
					</InspectorTab>
					<InspectorTab { ...UAGTabs.style }>
						{ backgroundSettings() }
						{ borderSettings() }
						{ boxShadowSettings() }
						{ spacingSettings() }
						{ ( displayArrows || displayDots ) && navigationSettings() }
						{ afterNavigationStyleOptions }
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
