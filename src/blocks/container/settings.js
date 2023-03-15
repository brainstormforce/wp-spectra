import { useEffect,memo } from '@wordpress/element';

import InspectorTabs from '@Components/inspector-tabs/InspectorTabs.js';
import InspectorTab, {
	UAGTabs,
} from '@Components/inspector-tabs/InspectorTab.js';
import ResponsiveSlider from '@Components/responsive-slider';
import { __ } from '@wordpress/i18n';

import {
	InspectorControls,
	__experimentalLinkControl as LinkControl
} from '@wordpress/block-editor';
import BoxShadowControl from '@Components/box-shadow';
import SpacingControl from '@Components/spacing-control';
import Background from '@Components/background';
import ResponsiveBorder from '@Components/responsive-border';
import UAGAdvancedPanelBody from '@Components/advanced-panel-body';
import MultiButtonsControl from '@Components/multi-buttons-control';
import UAGSelectControl from '@Components/select-control';
import { Icon, ToggleControl } from '@wordpress/components';
import renderCustomIcon from '@Controls/renderCustomIcon';
import UAGTabsControl from '@Components/tabs';
import AdvancedPopColorControl from '@Components/color-control/advanced-pop-color-control';
import Range from '@Components/range/Range';
import innerContainerPresets, { boxShadowPresets, boxShadowHoverPresets } from './presets';
import UAGPresets from '@Components/presets';

const Settings = ( props ) => {

	props = props.parentProps;
	const { attributes, setAttributes, deviceType } = props;
	const {
		block_id,
		htmlTag,
		htmlTagLink,
		widthDesktop,
		widthTablet,
		widthMobile,
		widthType,
		minHeightDesktop,
		minHeightTablet,
		minHeightMobile,
		minHeightType,
		directionDesktop,
		directionTablet,
		directionMobile,
		alignItemsDesktop,
		alignItemsTablet,
		alignItemsMobile,
		justifyContentDesktop,
		justifyContentTablet,
		justifyContentMobile,
		wrapDesktop,
		wrapTablet,
		wrapMobile,
		alignContentDesktop,
		alignContentTablet,
		alignContentMobile,

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
		backgroundVideoOpacity,
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
		rowGapDesktop,
		rowGapTablet,
		rowGapMobile,
		rowGapType,
		rowGapTypeTablet,
		rowGapTypeMobile,
		columnGapDesktop,
		columnGapTablet,
		columnGapMobile,
		columnGapType,
		columnGapTypeTablet,
		columnGapTypeMobile,
		contentWidth,
		isBlockRootParent,
		innerContentWidth,
		innerContentCustomWidthDesktop,
		innerContentCustomWidthTablet,
		innerContentCustomWidthMobile,
		innerContentCustomWidthType,
		bottomType,
		bottomColor,
		bottomHeight,
		bottomHeightTablet,
		bottomHeightMobile,
		bottomWidth,
		topType,
		topColor,
		topHeight,
		topHeightTablet,
		topHeightMobile,
		topWidth,
		bottomFlip,
		topFlip,
		topContentAboveShape,
		bottomContentAboveShape,
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
		backgroundVideoColor,
		backgroundVideo,
		topInvert,
		bottomInvert,

		textColor,
		linkColor,
		linkHoverColor,

		// responsive
		innerContentCustomWidthTypeTablet,
		innerContentCustomWidthTypeMobile,
		widthTypeTablet,
		widthTypeMobile,
		minHeightTypeTablet,
		minHeightTypeMobile,
		topHeightType,
		topHeightTypeTablet,
		topHeightTypeMobile,
		bottomHeightType,
		bottomHeightTypeTablet,
		bottomHeightTypeMobile,

		overflow,
		topDividerWidthType,
		bottomDividerWidthType,
		topDividerHeightType,
		bottomDividerHeightType,
		equalHeight
	} = attributes;

	let currentDirection = directionDesktop?.split( '-' )?.[0];

	if ( attributes[ 'direction' + deviceType ] && attributes[ 'direction' + deviceType ].split( '-' )[0] ) {

		currentDirection = attributes[ 'direction' + deviceType ].split( '-' )[0];
	}

	const currentOppAxisDirection = 'row' === currentDirection ? 'column' : 'row';

	const verticalAlignmentHint = __( 'Define the vertical alignment inside this container.', 'ultimate-addons-for-gutenberg' );
	const horizontalAlignmentHint = __( 'Define the horizontal alignment inside this container.', 'ultimate-addons-for-gutenberg' );
	const alignContentHint = ( 'row' === currentDirection )
	? __( 'Define the vertical alignment of every line of blocks inside this flex container.', 'ultimate-addons-for-gutenberg' )
	: __( 'Define the horizontal alignment of every line of blocks inside this flex container.', 'ultimate-addons-for-gutenberg' );

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

	const onChangeHeight = ( value ) => {
		setAttributes( { equalHeight: value } );
		if( value ) {
			setAttributes( { alignItemsDesktop: 'stretch' } );
			setAttributes( { alignItemsTablet: 'stretch' } );
			setAttributes( { alignItemsMobile: 'stretch' } );
		} else {
			setAttributes( { alignItemsDesktop: 'center' } );
			setAttributes( { alignItemsTablet: 'center' } );
			setAttributes( { alignItemsMobile: 'center' } );
		}
	};
	const onChangeAlign = ( value ) => {
		if( 'stretch' !== value ) {
			props.setAttributes( { equalHeight: false } );
		}else {
			props.setAttributes( { equalHeight: true } );
		}
	};
	const generalSettings = () => {

		const directionOptions = [
			{
				value: 'row',
				tooltip: __( 'Row', 'ultimate-addons-for-gutenberg' ),
				icon: (
					<Icon
						icon={ renderCustomIcon( 'flex-direction-row' ) }
					/>
				),
			},
			{
				value: 'column',
				tooltip: __( 'Column', 'ultimate-addons-for-gutenberg' ),
				icon: (
					<Icon
						icon={ renderCustomIcon( 'flex-direction-column' ) }
					/>
				),
			},
			{
				value: 'row-reverse',
				tooltip: __( 'Row Reverse', 'ultimate-addons-for-gutenberg' ),
				icon: (
					<Icon
						icon={ renderCustomIcon( 'flex-direction-row-reverse' ) }
					/>
				),
			},
			{
				value: 'column-reverse',
				tooltip: __( 'Column Reverse', 'ultimate-addons-for-gutenberg' ),
				icon: (
					<Icon
						icon={ renderCustomIcon( 'flex-direction-column-reverse' ) }
					/>
				),
			},
		];

		const alignItemsOptions = [
			{
				value: 'flex-start',
				tooltip: __( 'Flex Start', 'ultimate-addons-for-gutenberg' ),
				icon: (
					<Icon
						icon={ renderCustomIcon( `flex-${currentOppAxisDirection}-start` ) }
					/>
				),
			},
			{
				value: 'center',
				tooltip: __( 'Center', 'ultimate-addons-for-gutenberg' ),
				icon: (
					<Icon
						icon={ renderCustomIcon( `flex-${currentOppAxisDirection}-center` ) }
					/>
				),
			},
			{
				value: 'flex-end',
				tooltip: __( 'Flex End', 'ultimate-addons-for-gutenberg' ),
				icon: (
					<Icon
						icon={ renderCustomIcon( `flex-${currentOppAxisDirection}-end` ) }
					/>
				),
			},
			{
				value: 'stretch',
				tooltip: __( 'Stretch', 'ultimate-addons-for-gutenberg' ),
				icon: (
					<Icon
						icon={ renderCustomIcon( `flex-${currentOppAxisDirection}-strech` ) }
					/>
				),
			},
		];

		const justifyContentOptions = [
			{
				value: 'flex-start',
				tooltip: __( 'Flex Start', 'ultimate-addons-for-gutenberg' ),
				icon: (
					<Icon
						icon={ renderCustomIcon( `flex-${currentDirection}-start` ) }
					/>
				),
			},
			{
				value: 'center',
				tooltip: __( 'Center', 'ultimate-addons-for-gutenberg' ),
				icon: (
					<Icon
						icon={ renderCustomIcon( `flex-${currentDirection}-center` ) }
					/>
				),
			},
			{
				value: 'flex-end',
				tooltip: __( 'Flex End', 'ultimate-addons-for-gutenberg' ),
				icon: (
					<Icon
						icon={ renderCustomIcon( `flex-${currentDirection}-end` ) }
					/>
				),
			},
			{
				value: 'space-between',
				tooltip: __( 'Space Between', 'ultimate-addons-for-gutenberg' ),
				icon: (
					<Icon
						icon={ renderCustomIcon( `flex-${currentDirection}-space-between` ) }
					/>
				),
			},
			{
				value: 'space-around',
				tooltip: __( 'Space Around', 'ultimate-addons-for-gutenberg' ),
				icon: (
					<Icon
						icon={ renderCustomIcon( `flex-${currentDirection}-space-around` ) }
					/>
				),
			},
			{
				value: 'space-evenly',
				tooltip: __( 'Space Evenly', 'ultimate-addons-for-gutenberg' ),
				icon: (
					<Icon
						icon={ renderCustomIcon( `flex-${currentDirection}-space-evenly` ) }
					/>
				),
			},
		];

		const alignContentOptions = [
			{
				value: 'flex-start',
				tooltip: __( 'Flex Start', 'ultimate-addons-for-gutenberg' ),
				icon: (
					<Icon
						icon={ renderCustomIcon( `flex-${currentOppAxisDirection}-start` ) }
					/>
				),
			},
			{
				value: 'center',
				tooltip: __( 'Center', 'ultimate-addons-for-gutenberg' ),
				icon: (
					<Icon
						icon={ renderCustomIcon( `flex-${currentOppAxisDirection}-center` ) }
					/>
				),
			},
			{
				value: 'flex-end',
				tooltip: __( 'Flex End', 'ultimate-addons-for-gutenberg' ),
				icon: (
					<Icon
						icon={ renderCustomIcon( `flex-${currentOppAxisDirection}-end` ) }
					/>
				),
			},
			{
				value: 'space-between',
				tooltip: __( 'Space Between', 'ultimate-addons-for-gutenberg' ),
				icon: (
					<Icon
						icon={ renderCustomIcon( `flex-${currentOppAxisDirection}-space-between` ) }
					/>
				),
			},
			{
				value: 'space-around',
				tooltip: __( 'Space Around', 'ultimate-addons-for-gutenberg' ),
				icon: (
					<Icon
						icon={ renderCustomIcon( `flex-${currentOppAxisDirection}-space-around` ) }
					/>
				),
			},
			{
				value: 'space-evenly',
				tooltip: __( 'Space Evenly', 'ultimate-addons-for-gutenberg' ),
				icon: (
					<Icon
						icon={ renderCustomIcon( `flex-${currentOppAxisDirection}-space-evenly` ) }
					/>
				),
			},
		];

		const wrapOptions = [
			{
				value: 'wrap',
				tooltip: __( 'Wrap', 'ultimate-addons-for-gutenberg' ),
				icon: (
					<Icon
						icon={ renderCustomIcon( 'flex-wrap' ) }
					/>
				),
			},
			{
				value: 'nowrap',
				tooltip: __( 'No Wrap', 'ultimate-addons-for-gutenberg' ),
				icon: (
					<Icon
						icon={ renderCustomIcon( 'flex-no-wrap' ) }
					/>
				),
			},
			{
				value: 'wrap-reverse',
				tooltip: __( 'Wrap Reverse', 'ultimate-addons-for-gutenberg' ),
				icon: (
					<Icon
						icon={ renderCustomIcon( 'flex-wrap-reverse' ) }
					/>
				),
			},
		];

		const contentWidthOptions = [
			{
				value: 'alignfull',
				label: __( 'Full Width', 'ultimate-addons-for-gutenberg' ),
			},
			{
				value: 'alignwide',
				label: __( 'Boxed', 'ultimate-addons-for-gutenberg' ),
			},
			{
				value: 'default',
				label: __( 'Custom', 'ultimate-addons-for-gutenberg' ),
			},
		];

		const overflowOptions = [
			{
				value: 'visible',
				label: __( 'Visible', 'ultimate-addons-for-gutenberg' ),
			},
			{
				value: 'hidden',
				label: __( 'Hidden', 'ultimate-addons-for-gutenberg' ),
			},
			{
				value: 'auto',
				label: __( 'Auto', 'ultimate-addons-for-gutenberg' ),
			},
		];

		const innerContentWidthOptions = [
			{
				value: 'alignwide',
				label: __( 'Boxed', 'ultimate-addons-for-gutenberg' ),
			},
			{
				value: 'alignfull',
				label: __( 'Full Width', 'ultimate-addons-for-gutenberg' ),
			},
		];

		const onWidthChange = () => {
			setAttributes( { widthSetByUser: true } );
		};

		return (
			<>
				<UAGAdvancedPanelBody
					title={ __( 'Container', 'ultimate-addons-for-gutenberg' ) }
					initialOpen={ false }
				>
					{ isBlockRootParent &&
						<>
							<MultiButtonsControl
								setAttributes={ setAttributes }
								label={ __( 'Container Width', 'ultimate-addons-for-gutenberg' ) }
								data={ {
									value: contentWidth,
									label: 'contentWidth',
								} }
								options={ contentWidthOptions }
								showIcons={ false }
								responsive={false}
							/>
							{ 'alignfull' === contentWidth &&
								<>
									<MultiButtonsControl
										setAttributes={ setAttributes }
										label={ __( 'Content Width', 'ultimate-addons-for-gutenberg' ) }
										data={ {
											value: innerContentWidth,
											label: 'innerContentWidth',
										} }
										options={ innerContentWidthOptions }
										showIcons={ false }
										responsive={false}
									/>
									{ 'alignwide' === innerContentWidth &&
										<ResponsiveSlider
											label={ __( 'Content Box Width', 'ultimate-addons-for-gutenberg' ) }
											data={ {
												desktop: {
													value: innerContentCustomWidthDesktop,
													label: 'innerContentCustomWidthDesktop',
													unit: {
														value: innerContentCustomWidthType,
														label: 'innerContentCustomWidthType',
													},
												},
												tablet: {
													value: innerContentCustomWidthTablet,
													label: 'innerContentCustomWidthTablet',
													unit: {
														value: innerContentCustomWidthTypeTablet,
														label: 'innerContentCustomWidthTypeTablet',
													},
												},
												mobile: {
													value: innerContentCustomWidthMobile,
													label: 'innerContentCustomWidthMobile',
													unit: {
														value: innerContentCustomWidthTypeMobile,
														label: 'innerContentCustomWidthTypeMobile',
													},
												},
											} }
											min={ 0 }
											limitMax={ { 'px': 1600, '%': 100, 'vw': 100 } }
											units={ [
												{
													name: __(
														'PX',
														'ultimate-addons-for-gutenberg'
													),
													unitValue: 'px',
												},
												{
													name: __( '%', 'ultimate-addons-for-gutenberg' ),
													unitValue: '%',
												},
												{
													name: __( 'VW', 'ultimate-addons-for-gutenberg' ),
													unitValue: 'vw',
												},
											] }
											unit={ {
												value: innerContentCustomWidthType,
												label: 'innerContentCustomWidthType',
											} }
											setAttributes={ setAttributes }
										/>
									}
								</>
							}
						</>
					}
					{ ( ( isBlockRootParent && 'default' === contentWidth ) || ( ! isBlockRootParent ) ) &&
						<>
							<ResponsiveSlider
								label={ __( 'Custom Width', 'ultimate-addons-for-gutenberg' ) }
								data={ {
									desktop: {
										value: widthDesktop,
										label: 'widthDesktop',
										unit: {
											value: widthType,
											label: 'widthType',
										},
									},
									tablet: {
										value: widthTablet,
										label: 'widthTablet',
										unit: {
											value: widthTypeTablet,
											label: 'widthTypeTablet',
										},
									},
									mobile: {
										value: widthMobile,
										label: 'widthMobile',
										unit: {
											value: widthTypeMobile,
											label: 'widthTypeMobile',
										},
									},
								} }
								min={ 0 }
								unit={ {
									value: widthType,
									label: 'widthType',
								} }
								limitMax={ { 'px': 1600, '%': 100, 'vw': 100 } }
								units={ [
									{
										name: __(
											'PX',
											'ultimate-addons-for-gutenberg'
										),
										unitValue: 'px',
									},
									{
										name: __( '%', 'ultimate-addons-for-gutenberg' ),
										unitValue: '%',
									},
									{
										name: __( 'VW', 'ultimate-addons-for-gutenberg' ),
										unitValue: 'vw',
									},
								] }
								setAttributes={ setAttributes }
								onChange={onWidthChange}
							/>
						</>
					}
					<ResponsiveSlider
						label={ __( 'Minimum Height', 'ultimate-addons-for-gutenberg' ) }
						data={ {
							desktop: {
								value: minHeightDesktop,
								label: 'minHeightDesktop',
								unit: {
									value: minHeightType,
									label: 'minHeightType',
								},
							},
							tablet: {
								value: minHeightTablet,
								label: 'minHeightTablet',
								unit: {
									value: minHeightTypeTablet,
									label: 'minHeightTypeTablet',
								},
							},
							mobile: {
								value: minHeightMobile,
								label: 'minHeightMobile',
								unit: {
									value: minHeightTypeMobile,
									label: 'minHeightTypeMobile',
								},
							},
						} }
						min={ 0 }
						limitMax={ { px: 1000, vh: 100 } }
						unit={ {
							value: minHeightType,
							label: 'minHeightType',
						} }
						units={ [
							{
								name: __(
									'PX',
									'ultimate-addons-for-gutenberg'
								),
								unitValue: 'px',
							},
							{
								name: __( 'VH', 'ultimate-addons-for-gutenberg' ),
								unitValue: 'vh',
							},
						] }
						setAttributes={ setAttributes }
					/>
					<ToggleControl
						label={ __(
							'Equal Height',
							'ultimate-addons-for-gutenberg'
						) }
						checked={ equalHeight }
						onChange={ ( value ) => onChangeHeight( value )	}
						help={ __( 'Enabling this will change the Align Items value to Stretch.', 'ultimate-addons-for-gutenberg' ) }
					/>
					<UAGSelectControl
						label={ __(
							'HTML Tag',
							'ultimate-addons-for-gutenberg'
						) }
						data={ {
							value: htmlTag,
							label: 'htmlTag',
						} }
						setAttributes={ setAttributes }
						options={ [
							{
								value: 'div',
								label: __(
									'div',
									'ultimate-addons-for-gutenberg'
								),
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
								value: 'figure',
								label: __(
									'figure',
									'ultimate-addons-for-gutenberg'
								),
							},
							{
								value: 'figcaption',
								label: __(
									'figcaption',
									'ultimate-addons-for-gutenberg'
								),
							},
							{
								value: 'summary',
								label: __(
									'summary',
									'ultimate-addons-for-gutenberg'
								),
							},
							{
								value: 'nav',
								label: __(
									'nav',
									'ultimate-addons-for-gutenberg'
								),
							},
							{
								value: 'a',
								label: __(
									'link',
									'ultimate-addons-for-gutenberg'
								),
							},
						] }
					/>
					{
						htmlTag === 'a' && (
							<LinkControl
								searchInputPlaceholder="Search here..."
								value={ htmlTagLink }
								settings={[
									{
										id: 'opensInNewTab',
										title: __( 'Open in new window', 'ultimate-addons-for-gutenberg' ),
									},
									{
										id: 'noFollow',
										title: __( 'Add nofollow', 'ultimate-addons-for-gutenberg' )
									}
								]}
								onChange={ ( link ) => {
									setAttributes( { htmlTagLink: link } )
								} }
								withCreateSuggestion={true}
								createSuggestion={ ( inputValue ) => setAttributes( { post: {
									...attributes.post,
									title: inputValue,
									type: 'custom-url',
									id: Date.now(),
									url: inputValue
								} } ) }
								createSuggestionButtonText={ ( newValue ) => `${__( 'New:', 'ultimate-addons-for-gutenberg' )} ${newValue}` }
							/>
						)
					}
					<MultiButtonsControl
						setAttributes={ setAttributes }
						label={ __( 'Overflow', 'ultimate-addons-for-gutenberg' ) }
						data={ {
							value: overflow,
							label: 'overflow',
						} }
						options={ overflowOptions }
						showIcons={ false }
						responsive={false}
					/>
				</UAGAdvancedPanelBody>
				<UAGAdvancedPanelBody
					title={ __( 'Flex Properties', 'ultimate-addons-for-gutenberg' ) }
					initialOpen={ false }
				>
					<MultiButtonsControl
						setAttributes={ setAttributes }
						label={ __( 'Direction', 'ultimate-addons-for-gutenberg' ) }
						data={ {
							desktop: {
								value: directionDesktop,
								label: 'directionDesktop',
							},
							tablet: {
								value: directionTablet,
								label: 'directionTablet',
							},
							mobile: {
								value: directionMobile,
								label: 'directionMobile',
							},
						} }
						options={ directionOptions }
						showIcons={ true }
						responsive={ true }
						help={ __( 'Define the direction in which blocks inside this container will be placed one after the other.', 'ultimate-addons-for-gutenberg' ) }
					/>

					<MultiButtonsControl
						setAttributes={ setAttributes }
						label={ __( 'Align Items', 'ultimate-addons-for-gutenberg' ) }
						data={ {
							desktop: {
								value: alignItemsDesktop,
								label: 'alignItemsDesktop',
							},
							tablet: {
								value: alignItemsTablet,
								label: 'alignItemsTablet',
							},
							mobile: {
								value: alignItemsMobile,
								label: 'alignItemsMobile',
							},
						} }
						options={ alignItemsOptions }
						showIcons={ true }
						onChange = { onChangeAlign( alignItemsDesktop ) }
						responsive={ true }
						help={ ( 'row' === currentOppAxisDirection ) ? horizontalAlignmentHint : verticalAlignmentHint }
					/>
					<MultiButtonsControl
						setAttributes={ setAttributes }
						label={ __( 'Justify Content', 'ultimate-addons-for-gutenberg' ) }
						data={ {
							desktop: {
								value: justifyContentDesktop,
								label: 'justifyContentDesktop',
							},
							tablet: {
								value: justifyContentTablet,
								label: 'justifyContentTablet',
							},
							mobile: {
								value: justifyContentMobile,
								label: 'justifyContentMobile',
							},
						} }
						options={ justifyContentOptions }
						showIcons={ true }
						responsive={ true }
						help={ ( 'row' === currentDirection ) ? horizontalAlignmentHint : verticalAlignmentHint }
					/>
					<MultiButtonsControl
						setAttributes={ setAttributes }
						label={ __( 'Wrap', 'ultimate-addons-for-gutenberg' ) }
						data={ {
							desktop: {
								value: wrapDesktop,
								label: 'wrapDesktop',
							},
							tablet: {
								value: wrapTablet,
								label: 'wrapTablet',
							},
							mobile: {
								value: wrapMobile,
								label: 'wrapMobile',
							},
						} }
						options={ wrapOptions }
						showIcons={ true }
						responsive={ true }
						help={ __( 'Define whether the items are forced in a single line (No Wrap) or can be flowed into multiple lines (Wrap).', 'ultimate-addons-for-gutenberg' ) }
					/>
					{ ( 'wrap' === attributes[ 'wrap' + deviceType ] || 'wrap-reverse' === attributes[ 'wrap' + deviceType ] ) &&
						<MultiButtonsControl
							setAttributes={ setAttributes }
							label={ __( 'Align Content', 'ultimate-addons-for-gutenberg' ) }
							data={ {
								desktop: {
									value: alignContentDesktop,
									label: 'alignContentDesktop',
								},
								tablet: {
									value: alignContentTablet,
									label: 'alignContentTablet',
								},
								mobile: {
									value: alignContentMobile,
									label: 'alignContentMobile',
								},
							} }
							options={ alignContentOptions }
							showIcons={ true }
							responsive={ true }
							help={ alignContentHint }
						/>
					}
				</UAGAdvancedPanelBody>
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

	const linkColorMarkup = (
		<AdvancedPopColorControl
			label={ __(
				'Link Color',
				'ultimate-addons-for-gutenberg'
			) }
			colorValue={ linkColor }
			data={ {
				value: linkColor,
				label: 'linkColor',
			} }
			setAttributes={ setAttributes }
		/>
	);

	const linkHoverColorMarkup = (
		<AdvancedPopColorControl
			label={ __(
				'Link Hover Color',
				'ultimate-addons-for-gutenberg'
			) }
			colorValue={ linkHoverColor }
			data={ {
				value: linkHoverColor,
				label: 'linkHoverColor',
			} }
			setAttributes={ setAttributes }
		/>
	);

	const colorSettings = () => {
		return (
			<UAGAdvancedPanelBody
				title={ __( 'Color', 'ultimate-addons-for-gutenberg' ) }
				initialOpen={ false }
			>
				<AdvancedPopColorControl
					label={ __(
						'Text Color',
						'ultimate-addons-for-gutenberg'
					) }
					colorValue={ textColor }
					data={ {
						value: textColor,
						label: 'textColor',
					} }
					setAttributes={ setAttributes }
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
						normal={ linkColorMarkup }
						hover={ linkHoverColorMarkup }
						disableBottomSeparator={ true }
					/>
			</UAGAdvancedPanelBody>
		);
	}

	const borderSettings = () => {
		return(
			<UAGAdvancedPanelBody
				title={ __( 'Border', 'ultimate-addons-for-gutenberg' ) }
				initialOpen={ false }
			>
				<ResponsiveBorder
					setAttributes={ setAttributes }
					prefix={ 'container' }
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
				<ResponsiveSlider
					label={ __( 'Row Gap', 'ultimate-addons-for-gutenberg' ) }
					data={ {
						desktop: {
							value: rowGapDesktop,
							label: 'rowGapDesktop',
							unit:  {
								value: rowGapType,
								label: 'rowGapType',
							}
						},
						tablet: {
							value: rowGapTablet,
							label: 'rowGapTablet',
							unit:  {
								value: rowGapTypeTablet,
								label: 'rowGapTypeTablet',
							}
						},
						mobile: {
							value: rowGapMobile,
							label: 'rowGapMobile',
							unit: {
								value: rowGapTypeMobile,
								label: 'rowGapTypeMobile',
							},
						},
					} }
					min={ 0 }
					max={ 200 }
					units={ [
						{
							name: __(
								'PX',
								'ultimate-addons-for-gutenberg'
							),
							unitValue: 'px',
						},
						{
							name: __( '%', 'ultimate-addons-for-gutenberg' ),
							unitValue: '%',
						},
						{
							name: __( 'VW', 'ultimate-addons-for-gutenberg' ),
							unitValue: 'vw',
						},
					] }
					setAttributes={ setAttributes }
				/>
				<ResponsiveSlider
					label={ __( 'Column Gap', 'ultimate	-addons-for-gutenberg' ) }
					data={ {
						desktop: {
							value: columnGapDesktop,
							label: 'columnGapDesktop',
							unit:  {
								value: columnGapType,
								label: 'columnGapType',
							}
						},
						tablet: {
							value: columnGapTablet,
							label: 'columnGapTablet',
							unit:  {
								value: columnGapTypeTablet,
								label: 'columnGapTypeTablet',
							}
						},
						mobile: {
							value: columnGapMobile,
							label: 'columnGapMobile',
							unit:  {
								value: columnGapTypeMobile,
								label: 'columnGapTypeMobile',
							}
						},
					} }
					min={ 0 }
					max={ 200 }
					units={ [
						{
							name: __(
								'PX',
								'ultimate-addons-for-gutenberg'
							),
							unitValue: 'px',
						},
						{
							name: __( '%', 'ultimate-addons-for-gutenberg' ),
							unitValue: '%',
						},
						{
							name: __( 'VW', 'ultimate-addons-for-gutenberg' ),
							unitValue: 'vw',
						},
					] }
					setAttributes={ setAttributes }
				/>
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

	const shapeDividersSettings = () => {
		const dividers = [
			{
				value: 'none',
				label: __( 'None', 'ultimate-addons-for-gutenberg' ),
			},
			{
				value: 'tilt',
				label: __( 'Tilt', 'ultimate-addons-for-gutenberg' ),
			},
			{
				value: 'mountains',
				label: __( 'Mountains', 'ultimate-addons-for-gutenberg' ),
			},
			{
				value: 'wave_brush',
				label: __( 'Wave Brush', 'ultimate-addons-for-gutenberg' ),
			},
			{
				value: 'waves',
				label: __( 'Waves', 'ultimate-addons-for-gutenberg' ),
			},
			{
				value: 'wave_pattern',
				label: __( 'Waves Pattern', 'ultimate-addons-for-gutenberg' ),
			},
			{
				value: 'triangle',
				label: __( 'Triangle', 'ultimate-addons-for-gutenberg' ),
			},
			{
				value: 'drops',
				label: __( 'Drops', 'ultimate-addons-for-gutenberg' ),
			},
			{
				value: 'clouds',
				label: __( 'Clouds', 'ultimate-addons-for-gutenberg' ),
			},
			{
				value: 'zigzag',
				label: __( 'ZigZag', 'ultimate-addons-for-gutenberg' ),
			},
			{
				value: 'pyramids',
				label: __( 'Pyramids', 'ultimate-addons-for-gutenberg' ),
			},
			{
				value: 'triangle_asymmetrical',
				label: __(
					'Triangle Asymmetrical',
					'ultimate-addons-for-gutenberg'
				),
			},
			{
				value: 'tilt_opacity',
				label: __( 'Tilt Opacity', 'ultimate-addons-for-gutenberg' ),
			},
			{
				value: 'fan_opacity',
				label: __( 'Fan Opacity', 'ultimate-addons-for-gutenberg' ),
			},
			{
				value: 'curve',
				label: __( 'Curve', 'ultimate-addons-for-gutenberg' ),
			},
			{
				value: 'curve_asymmetrical',
				label: __(
					'Curve Asymmetrical',
					'ultimate-addons-for-gutenberg'
				),
			},
			{
				value: 'curve_reverse',
				label: __( 'Curve Reverse', 'ultimate-addons-for-gutenberg' ),
			},
			{
				value: 'curve_asym_reverse',
				label: __(
					'Curve Asymmetrical Reverse',
					'ultimate-addons-for-gutenberg'
				),
			},
			{
				value: 'arrow',
				label: __( 'Arrow', 'ultimate-addons-for-gutenberg' ),
			},
			{
				value: 'arrow_split',
				label: __( 'Arrow Split', 'ultimate-addons-for-gutenberg' ),
			},
			{
				value: 'book',
				label: __( 'Book', 'ultimate-addons-for-gutenberg' ),
			},
		];

		const topSettings = (
			<>
				<UAGSelectControl
					label={ __(
						'Type',
						'ultimate-addons-for-gutenberg'
					) }
					data={ {
						value: topType,
						label: 'topType',
					} }
					setAttributes={ setAttributes }
					options={ dividers }
				/>
				{ topType !== 'none' && (
					<>
						<AdvancedPopColorControl
							label={ __(
								'Color',
								'ultimate-addons-for-gutenberg'
							) }
							colorValue={ topColor }
							data={ {
								value: topColor,
								label: 'topColor',
							} }
							setAttributes={ setAttributes }
						/>
						<Range
							label={ __(
								'Width',
								'ultimate-addons-for-gutenberg'
							) }
							setAttributes={ setAttributes }
							value={ topWidth }
							data={ {
								value: topWidth,
								label: 'topWidth',
							} }
							min={ 0 }
							max={ 100 }
							unit={ {
								value: topDividerWidthType,
								label: 'topDividerWidthType',
							} }
							units={ [
								{
									name: __(
										'%',
										'ultimate-addons-for-gutenberg'
									),
									unitValue: '%',
								},
							] }
						/>
						<ResponsiveSlider
							label={ __(
								'Height',
								'ultimate-addons-for-gutenberg'
							) }
							data={ {
								desktop: {
									value: topHeight,
									label: 'topHeight',
									unit:  {
										value: topHeightType,
										label: 'topHeightType',
									}
								},
								tablet: {
									value: topHeightTablet,
									label: 'topHeightTablet',
									unit:  {
										value: topHeightTypeTablet,
										label: 'topHeightTypeTablet',
									}
								},
								mobile: {
									value: topHeightMobile,
									label: 'topHeightMobile',
									unit:  {
										value: topHeightTypeMobile,
										label: 'topHeightTypeMobile',
									}
								},
							} }
							min={ 0 }
							max={ 500 }
							unit={ {
								value: topDividerHeightType,
								label: 'topDividerHeightType',
							} }
							units={ [
								{
									name: __(
										'PX',
										'ultimate-addons-for-gutenberg'
									),
									unitValue: 'px',
								},
							] }
							setAttributes={ setAttributes }
						/>
						<ToggleControl
							label={ __(
								'Flip',
								'ultimate-addons-for-gutenberg'
							) }
							checked={ topFlip }
							onChange={ () =>
								setAttributes( { topFlip: ! topFlip } )
							}
						/>
						<ToggleControl
							label={ __(
								'Invert',
								'ultimate-addons-for-gutenberg'
							) }
							checked={ topInvert }
							onChange={ () =>
								setAttributes( {
									topInvert: ! topInvert,
								} )
							}
						/>
						<ToggleControl
							label={ __(
								'Bring To Front',
								'ultimate-addons-for-gutenberg'
							) }
							checked={ topContentAboveShape }
							onChange={ () =>
								setAttributes( {
									topContentAboveShape: ! topContentAboveShape,
								} )
							}
						/>
					</>
				) }
			</>
		);

		const bottomSettings = (
			<>
				<UAGSelectControl
					label={ __(
						'Type',
						'ultimate-addons-for-gutenberg'
					) }
					data={ {
						value: bottomType,
						label: 'bottomType',
					} }
					setAttributes={ setAttributes }
					options={ dividers }
				/>
				{ bottomType !== 'none' && (
					<>
						<AdvancedPopColorControl
							label={ __(
								'Color',
								'ultimate-addons-for-gutenberg'
							) }
							colorValue={ bottomColor }
							data={ {
								value: bottomColor,
								label: 'bottomColor',
							} }
							setAttributes={ setAttributes }
						/>
						<Range
							label={ __(
								'Width',
								'ultimate-addons-for-gutenberg'
							) }
							setAttributes={ setAttributes }
							value={ bottomWidth }
							data={ {
								value: bottomWidth,
								label: 'bottomWidth',
							} }
							min={ 0 }
							max={ 100 }
							unit={ {
								value: bottomDividerWidthType,
								label: 'bottomDividerWidthType',
							} }
							units={ [
								{
									name: __(
										'%',
										'ultimate-addons-for-gutenberg'
									),
									unitValue: '%',
								},
							] }
						/>
						<ResponsiveSlider
							label={ __(
								'Height',
								'ultimate-addons-for-gutenberg'
							) }
							data={ {
								desktop: {
									value: bottomHeight,
									label: 'bottomHeight',
									unit:  {
										value: bottomHeightType,
										label: 'bottomHeightType',
									}
								},
								tablet: {
									value: bottomHeightTablet,
									label: 'bottomHeightTablet',
									unit:  {
										value: bottomHeightTypeTablet,
										label: 'bottomHeightTypeTablet',
									}
								},
								mobile: {
									value: bottomHeightMobile,
									label: 'bottomHeightMobile',
									unit:  {
										value: bottomHeightTypeMobile,
										label: 'bottomHeightTypeMobile',
									}
								},
							} }
							min={ 0 }
							max={ 500 }
							unit={ {
								value: bottomDividerHeightType,
								label: 'bottomDividerHeightType',
							} }
							units={ [
								{
									name: __(
										'PX',
										'ultimate-addons-for-gutenberg'
									),
									unitValue: 'px',
								},
							] }
							setAttributes={ setAttributes }
						/>
						<ToggleControl
							label={ __(
								'Flip',
								'ultimate-addons-for-gutenberg'
							) }
							checked={ bottomFlip }
							onChange={ () =>
								setAttributes( { bottomFlip: ! bottomFlip } )
							}
						/>
						<ToggleControl
							label={ __(
								'Invert',
								'ultimate-addons-for-gutenberg'
							) }
							checked={ bottomInvert }
							onChange={ () =>
								setAttributes( {
									bottomInvert: ! bottomInvert,
								} )
							}
						/>
						<ToggleControl
							label={ __(
								'Bring To Front',
								'ultimate-addons-for-gutenberg'
							) }
							checked={ bottomContentAboveShape }
							onChange={ () =>
								setAttributes( {
									bottomContentAboveShape: ! bottomContentAboveShape,
								} )
							}
						/>
					</>
				) }
			</>
		);

		return (
			<UAGAdvancedPanelBody
				title={ __(
					'Shape Dividers',
					'ultimate-addons-for-gutenberg'
				) }
				initialOpen={ false }
			>
				<UAGTabsControl
					tabs={ [
						{
							name: 'top',
							title: __( 'Top', 'ultimate-addons-for-gutenberg' ),
						},
						{
							name: 'bottom',
							title: __( 'Bottom', 'ultimate-addons-for-gutenberg' ),
						},
					] }
					top={ topSettings }
					bottom={ bottomSettings }
					disableBottomSeparator={ true }
				/>
			</UAGAdvancedPanelBody>
		);
	};

	const presetSettings = () => {
		return <UAGAdvancedPanelBody
					title={ __( 'Inner Container Presets', 'ultimate-addons-for-gutenberg' ) }
					initialOpen={ true }
				>
					<UAGPresets
						setAttributes = { setAttributes }
						presets = { innerContainerPresets }
						presetInputType = 'radioImage'
					/>
				</UAGAdvancedPanelBody>
	};

	return (

			<InspectorControls>
				<InspectorTabs>
					<InspectorTab { ...UAGTabs.general }>
						{ isBlockRootParent && presetSettings() }
						{ generalSettings() }
					</InspectorTab>
					<InspectorTab { ...UAGTabs.style }>
						{ backgroundSettings() }
						{ colorSettings() }
						{ borderSettings() }
						{ boxShadowSettings() }
						{ shapeDividersSettings() }
						{ spacingSettings() }
					</InspectorTab>
					<InspectorTab
						{ ...UAGTabs.advance }
						parentProps={ props }
					></InspectorTab>
				</InspectorTabs>
			</InspectorControls>

	);
};
export default memo( Settings );
