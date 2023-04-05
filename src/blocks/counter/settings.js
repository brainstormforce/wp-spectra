import { useEffect,useState } from '@wordpress/element';
import TypographyControl from '@Components/typography';
import InspectorTabs from '@Components/inspector-tabs/InspectorTabs.js';
import InspectorTab, {
	UAGTabs,
} from '@Components/inspector-tabs/InspectorTab.js';
import AdvancedPopColorControl from '@Components/color-control/advanced-pop-color-control.js';
import SpacingControl from '@Components/spacing-control';
import { __ } from '@wordpress/i18n';
import {AlignmentToolbar, BlockControls, InspectorControls} from '@wordpress/block-editor';
import { Icon, ToggleControl } from '@wordpress/components';
import renderSVG from '@Controls/renderIcon';
import Range from '@Components/range/Range.js';
import ResponsiveSlider from '@Components/responsive-slider';
import MultiButtonsControl from '@Components/multi-buttons-control';
import UAGAdvancedPanelBody from '@Components/advanced-panel-body';
import BoxShadowControl from '@Components/box-shadow';
import UAGTabsControl from '@Components/tabs';
import { boxShadowPresets, boxShadowHoverPresets } from './presets';
import ResponsiveBorder from '@Components/responsive-border';
import UAGSelectControl from '@Components/select-control';
import UAGIconPicker from '@Components/icon-picker';
import UAGMediaPicker from '@Components/image';
import UAGNumberControl from '@Components/number-control';
import UAGTextControl from '@Components/text-control';
import { getImageSize } from '@Utils/Helpers';
import UAGPresets from '@Components/presets';
import { getFallbackNumber } from '@Controls/getAttributeFallback';
import defaultAttributes from './attributes';

let imageSizeOptions = [
	{
		value: 'thumbnail',
		label: __( 'Thumbnail', 'ultimate-addons-for-gutenberg' ),
	},
	{ value: 'medium', label: __( 'Medium', 'ultimate-addons-for-gutenberg' ) },
	{ value: 'full', label: __( 'Large', 'ultimate-addons-for-gutenberg' ) },
];

export default function Settings( props ) {

	props = props.parentProps;
	const { setAttributes, attributes, deviceType } = props;

	const {
		block_id,
		startNumber,
		endNumber,
		decimalPlaces,
		align,
		alignTablet,
		alignMobile,
		totalNumber,
		numberPrefix,
		numberSuffix,
		animationDuration,
		thousandSeparator,
		layout,
		// heading
		headingLoadGoogleFonts,
		headingFontFamily,
		headingFontWeight,
		headingFontStyle,
		headingFontSize,
		headingColor,
		headingTransform,
		headingDecoration,
		headingFontSizeType,
		headingFontSizeMobile,
		headingFontSizeTablet,
		headingLineHeight,
		headingLineHeightType,
		headingLineHeightMobile,
		headingLineHeightTablet,
		headingTopMargin,
		headingRightMargin,
		headingLeftMargin,
		headingBottomMargin,
		headingTopMarginTablet,
		headingRightMarginTablet,
		headingLeftMarginTablet,
		headingBottomMarginTablet,
		headingTopMarginMobile,
		headingRightMarginMobile,
		headingLeftMarginMobile,
		headingBottomMarginMobile,
		headingMarginUnit,
		headingMarginUnitTablet,
		headingMarginUnitMobile,
		headingMarginLink,
		headingLetterSpacingType,
		headingLetterSpacing,
		headingLetterSpacingTablet,
		headingLetterSpacingMobile,
		// Block Margin
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
		// Block Padding
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
		// Number
		numberLoadGoogleFonts,
		numberFontFamily,
		numberFontWeight,
		numberFontStyle,
		numberFontSize,
		numberColor,
		numberTransform,
		numberDecoration,
		numberFontSizeType,
		numberFontSizeMobile,
		numberFontSizeTablet,
		numberLineHeight,
		numberLineHeightType,
		numberLineHeightMobile,
		numberLineHeightTablet,
		numberTopMargin,
		numberRightMargin,
		numberLeftMargin,
		numberBottomMargin,
		numberTopMarginTablet,
		numberRightMarginTablet,
		numberLeftMarginTablet,
		numberBottomMarginTablet,
		numberTopMarginMobile,
		numberRightMarginMobile,
		numberLeftMarginMobile,
		numberBottomMarginMobile,
		numberMarginUnit,
		numberMarginUnitTablet,
		numberMarginUnitMobile,
		numberMarginLink,
		numberLetterSpacingType,
		numberLetterSpacing,
		numberLetterSpacingTablet,
		numberLetterSpacingMobile,
		// prefix
		prefixRightDistance,
		prefixRightDistanceTablet,
		prefixRightDistanceMobile,
		// suffix
		suffixLeftDistance,
		suffixLeftDistanceTablet,
		suffixLeftDistanceMobile,
		// circle
		circleSize,
		circleStokeSize,
		circleForeground,
		circleBackground,
		// bar
		barSize,
		barForeground,
		barBackground,
		barFlip,
		// box shadow
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
		// Icon/Image
		showIcon,
		icon,
		iconColor,
		iconBackgroundColor,
		iconHoverColor,
		iconBackgroundHoverColor,
		iconSize,
		iconSizeTablet,
		iconSizeMobile,
		iconSizeType,
		iconSizeTypeTablet,
		iconSizeTypeMobile,
		iconImgPosition,
		iconImage,
		imageSize,
		sourceType,
		imageWidthType,
		imageWidth,
		imageWidthTablet,
		imageWidthMobile,
		imageWidthUnit,
		imageWidthUnitTablet,
		imageWidthUnitMobile,
		// Icon Padding
		iconTopPadding,
		iconRightPadding,
		iconLeftPadding,
		iconBottomPadding,
		iconTopPaddingTablet,
		iconRightPaddingTablet,
		iconLeftPaddingTablet,
		iconBottomPaddingTablet,
		iconTopPaddingMobile,
		iconRightPaddingMobile,
		iconLeftPaddingMobile,
		iconBottomPaddingMobile,
		iconPaddingUnit,
		iconPaddingUnitTablet,
		iconPaddingUnitMobile,
		iconPaddingLink,
		// Icon Margin
		iconTopMargin,
		iconRightMargin,
		iconLeftMargin,
		iconBottomMargin,
		iconTopMarginTablet,
		iconRightMarginTablet,
		iconLeftMarginTablet,
		iconBottomMarginTablet,
		iconTopMarginMobile,
		iconRightMarginMobile,
		iconLeftMarginMobile,
		iconBottomMarginMobile,
		iconMarginUnit,
		iconMarginUnitTablet,
		iconMarginUnitMobile,
		iconMarginLink,
	} = attributes;

	useEffect( () => {
		// Since circle layout doesn't support other image positions.
		if ( layout === 'circle' && ( iconImgPosition !== 'top' || iconImgPosition !== 'bottom' ) ) {
			setAttributes( { iconImgPosition: 'top' } );
		}
	}, [layout] );

	const [minTotal, setMinTotal] = useState( defaultAttributes.endNumber.default ); // Default for endNumber.

	const startFallback = getFallbackNumber( startNumber, 'startNumber', 'counter' );
	const endFallback = getFallbackNumber( endNumber, 'endNumber', 'counter' );

	useEffect( () => {
		if( startFallback < endFallback ) {
			setMinTotal( endFallback );
		} else if ( startFallback > endFallback ) {
			setMinTotal( startFallback );
		} else {
			setMinTotal( endFallback );
		}
	}, [ startNumber, endNumber ] );

	// If total number is more than minTotal, set it to minTotal.
	useEffect( () => {
		if( totalNumber < minTotal ) {
			setAttributes( { totalNumber: minTotal } );
		}
	}, [ minTotal ] );

	const numberIconPositionOptions = [
		{
			value: 'top',
			label: __(
				'Top',
				'ultimate-addons-for-gutenberg'
			),
		},
		{
			value: 'bottom',
			label: __(
				'Bottom',
				'ultimate-addons-for-gutenberg'
			),
		},
		{
			value: 'left-number',
			label: __(
				'Left of Number',
				'ultimate-addons-for-gutenberg'
			),
		},
		{
			value: 'right-number',
			label: __(
				'Right of Number',
				'ultimate-addons-for-gutenberg'
			),
		},
	];

	const circleIconPositionOptions = [
		{
			value: 'top',
			label: __(
				'Top',
				'ultimate-addons-for-gutenberg'
			),
		},
		{
			value: 'bottom',
			label: __(
				'Bottom',
				'ultimate-addons-for-gutenberg'
			),
		},
	]

	/*
	 * Event to set Image as while adding.
	 */
	const onSelectImage = ( media ) => {
		if ( ! media || ! media.url ) {
			setAttributes( { iconImage: null } );
			return;
		}

		if ( ! media.type || 'image' !== media.type ) {
			setAttributes( { iconImage: null } );
			return;
		}
		if ( media.sizes ) {
			const new_img = getImageSize( media.sizes );
			imageSizeOptions = new_img;
		}
		setAttributes( { iconImage: media } );
	};

	/*
	 * Event to set Image as null while removing.
	 */
	const onRemoveImage = () => {
		setAttributes( { iconImage: '' } );
	};

	if ( iconImage && iconImage.sizes ) {
		imageSizeOptions = getImageSize( iconImage.sizes );
	}

	const generalPanel = (
		<UAGAdvancedPanelBody
			title={ __( 'General', 'ultimate-addons-for-gutenberg' ) }
			initialOpen={ true }
		>
			<MultiButtonsControl
				setAttributes={ setAttributes }
				label={ __( 'Layout', 'ultimate-addons-for-gutenberg' ) }
				data={ {
					value: layout,
					label: 'layout',
				} }
				options={ [
					{
						value: 'number',
						label: __(
							'Number',
							'ultimate-addons-for-gutenberg'
						),
					},
					{
						value: 'circle',
						label: __(
							'Circle',
							'ultimate-addons-for-gutenberg'
						),
					},
					{
						value: 'bars',
						label: __(
							'Bar',
							'ultimate-addons-for-gutenberg'
						),
					},
				] }
				showIcons={ false }
			/>
			<MultiButtonsControl
				setAttributes={ setAttributes }
				label={ __(
					'Alignment',
					'ultimate-addons-for-gutenberg'
				) }
				responsive={ true }
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
			{ ( layout === 'bars' ) &&
				<>
					<ToggleControl
						checked={ barFlip }
						onChange={ () =>
							setAttributes( { barFlip: ! barFlip } )
						}
						label={ __(
							'Flip Title and Bar Positions',
							'ultimate-addons-for-gutenberg'
						) }
					/>
				</>
			}
			<UAGNumberControl
				label={ __( 'Starting Number', 'ultimate-addons-for-gutenberg' ) }
				value={ startNumber }
				data={ {
					value: startNumber,
					label: 'startNumber',
				} }
				displayUnit={ false }
				setAttributes={ setAttributes }
				min={ ( layout !== 'number' ) ? 0 : false }
				required={ ( layout !== 'number' ) ? true : false }
				help={ ( layout !== 'number' ) ? __( 'Note: Please use positive values for Circle and Bar layouts.', 'ultimate-addons-for-gutenberg' ) : false }
				showControlHeader={ false }
			/>
			<UAGNumberControl
				label={ __( 'Ending Number', 'ultimate-addons-for-gutenberg' ) }
				value={ endNumber }
				data={ {
					value: endNumber,
					label: 'endNumber',
				} }
				displayUnit={ false }
				setAttributes={ setAttributes }
				min={ ( layout !== 'number' ) ? 0 : false }
				required={ ( layout !== 'number' ) ? true : false }
				help={ ( layout !== 'number' ) ? __( 'Note: Please use positive values for Circle and Bar layouts.', 'ultimate-addons-for-gutenberg' ) : false }
				showControlHeader={ false }
			/>
			{
				layout !== 'number' && (
					<UAGNumberControl
						label={ __( 'Total Number', 'ultimate-addons-for-gutenberg' ) }
						value={ totalNumber }
						data={ {
							value: totalNumber,
							label: 'totalNumber',
						} }
						displayUnit={ false }
						setAttributes={ setAttributes }
						min={ minTotal }
						required={ true }
						help={ __( 'Note: Total Number should be more than or equal to the Ending Number (or the Starting number in case you want to animate the Counter in reverse direction).', 'ultimate-addons-for-gutenberg' ) }
						showControlHeader={ false }
					/>
				)
			}
			<Range
				label={ __(
					'Decimal Places',
					'ultimate-addons-for-gutenberg'
				) }
				setAttributes={ setAttributes }
				value={ decimalPlaces }
				data={ {
					value: decimalPlaces,
					label: 'decimalPlaces',
				} }
				min={ 0 }
				step={ 1 }
				max={ 10 }
				displayUnit={ false }
			/>
			<UAGTextControl
				variant='inline'
				label={ __( 'Number Prefix', 'ultimate-addons-for-gutenberg' ) }
				value={ numberPrefix }
				data={ {
					value: numberPrefix,
					label: 'numberPrefix',
				} }
				setAttributes={ setAttributes }
				onChange={ ( value ) => setAttributes( {numberPrefix: value} )}
			/>
			<UAGTextControl
				variant='inline'
				label={ __( 'Number Suffix', 'ultimate-addons-for-gutenberg' ) }
				value={ numberSuffix }
				data={ {
					value: numberSuffix,
					label: 'numberSuffix',
				} }
				setAttributes={ setAttributes }
				onChange={ ( value ) => setAttributes( {numberSuffix: value} )}
			/>
			<UAGNumberControl
				label={ __( 'Animation Duration', 'ultimate-addons-for-gutenberg' ) }
				value={ animationDuration }
				data={ {
					value: animationDuration,
					label: 'animationDuration',
				} }
				displayUnit={ false }
				setAttributes={ setAttributes }
				min={ 1 }
				step={ 100 }
				required={ true }
				showControlHeader={ false }
			/>
			<UAGSelectControl
				label={ __( 'Thousand(s)', 'ultimate-addons-for-gutenberg' ) }
				data={ {
					value: thousandSeparator,
					label: 'thousandSeparator',
				} }
				setAttributes={ setAttributes }
				options={ [
					{ value: '', label: __( 'None', 'ultimate-addons-for-gutenberg' ) },
					{ value: ',', label: __( 'Comma', 'ultimate-addons-for-gutenberg' ) },
					{ value: '.', label: __( 'Dot', 'ultimate-addons-for-gutenberg' ) },
					{ value: ' ', label: __( 'Whitespace', 'ultimate-addons-for-gutenberg' ) },
					{ value: "'", label: __( 'Apostrophe', 'ultimate-addons-for-gutenberg' ) },
				] }
			/>
		</UAGAdvancedPanelBody>
	)

	const iconImagePanel = (
		<UAGAdvancedPanelBody
			title={ __( 'Image/Icon', 'ultimate-addons-for-gutenberg' ) }
			initialOpen={ false }
		>
			<ToggleControl
				checked={ showIcon }
				onChange={ () =>
					setAttributes( { showIcon: ! showIcon } )
				}
				label={ __(
					'Enable Icon/Image',
					'ultimate-addons-for-gutenberg'
				) }
			/>
			{ showIcon && ( layout === 'circle' || layout === 'number' ) && (
				<UAGSelectControl
					label={ __(
						'Select Position',
						'ultimate-addons-for-gutenberg'
					) }
					data={ {
						value: iconImgPosition,
						label: 'iconImgPosition',
					} }
					setAttributes={ setAttributes }
					options={ ( layout === 'circle' ) ? circleIconPositionOptions : numberIconPositionOptions }
				/>
			)}
			{ showIcon &&
				<MultiButtonsControl
					setAttributes={ setAttributes }
					label={ __(
						'Select Source',
						'ultimate-addons-for-gutenberg'
					) }
					data={ {
						value: sourceType,
						label: 'sourceType',
					} }
					options={ [
						{
							value: 'icon',
							label: __(
								'Icon',
								'ultimate-addons-for-gutenberg'
							),
						},
						{
							value: 'image',
							label: __(
								'Image',
								'ultimate-addons-for-gutenberg'
							),
						},
					] }
				/>
			}
			{ false !== showIcon && sourceType === 'icon' && (
				<>
					<UAGIconPicker
						label={ __(
							'Icon',
							'ultimate-addons-for-gutenberg'
						) }
						value={ icon }
						onChange={ ( value ) =>
							setAttributes( { icon: value } )
						}
					/>
				</>
			) }
			{ false !== showIcon && sourceType === 'image' && (
				<>
					<UAGMediaPicker
						onSelectImage={ onSelectImage }
						backgroundImage={ iconImage }
						onRemoveImage={ onRemoveImage }
					/>
					{ iconImage &&
						iconImage.url !== 'null' &&
						iconImage.url !== '' && (
						<UAGSelectControl
							label={ __(
								'Image Size',
								'ultimate-addons-for-gutenberg'
							) }
							data={ {
								value: imageSize,
								label: 'imageSize',
							} }
							setAttributes={ setAttributes }
							options={ imageSizeOptions }
						/>
					) }
				</>
			) }
		</UAGAdvancedPanelBody>
	)

	const iconImageStylePanel = (
		<UAGAdvancedPanelBody
			title={ __( 'Image/Icon', 'ultimate-addons-for-gutenberg' ) }
			initialOpen={ false }
		>
			{ sourceType === 'image' &&
				<ToggleControl
					checked={ imageWidthType }
					onChange={ () =>
						setAttributes( {
							imageWidthType: ! imageWidthType,
						} )
					}
					label={ __(
						'Custom Width',
						'ultimate-addons-for-gutenberg'
					) }
					help={ __(
						'Turn this off to inherit the natural width of Image.',
						'ultimate-addons-for-gutenberg'
					) }
				/>
			}
			{ ( sourceType === 'image' && imageWidthType ) && (
				<ResponsiveSlider
					label={ __(
						'Image Width',
						'ultimate-addons-for-gutenberg'
					) }
					setAttributes={ setAttributes }
					data={ {
						desktop: {
							value: imageWidth,
							label: 'imageWidth',
							unit: {
								value: imageWidthUnit,
								label: 'imageWidthUnit',
							},
						},
						tablet: {
							value: imageWidthTablet,
							label: 'imageWidthTablet',
							unit: {
								value: imageWidthUnitTablet,
								label: 'imageWidthUnitTablet',
							},
						},
						mobile: {
							value: imageWidthMobile,
							label: 'imageWidthMobile',
							unit: {
								value: imageWidthUnitMobile,
								label: 'imageWidthUnitMobile',
							},
						},
					} }
					limitMin={ { 'px': 0, '%': 0, 'em': 0 } } // eslint-disable-line quote-props
					limitMax={ { 'px': 500, '%': 100, 'em': 100 } } // eslint-disable-line quote-props
					unit={ {
						value: imageWidthUnit,
						label: 'imageWidthUnit',
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
						{
							name: __(
								'EM',
								'ultimate-addons-for-gutenberg'
							),
							unitValue: 'em',
						},
					] }
				/>
			) }
			{ ( sourceType === 'icon' ) && (
				<>
				<ResponsiveSlider
					label={ __(
						'Width',
						'ultimate-addons-for-gutenberg'
					) }
					setAttributes={ setAttributes }
					data={ {
						desktop: {
							value: iconSize,
							label: 'iconSize',
							unit: {
								value: iconSizeType,
								label: 'iconSizeType',
							},
						},
						tablet: {
							value: iconSizeTablet,
							label: 'iconSizeTablet',
							unit: {
								value: iconSizeTypeTablet,
								label: 'iconSizeTypeTablet',
							},
						},
						mobile: {
							value: iconSizeMobile,
							label: 'iconSizeMobile',
							unit: {
								value: iconSizeTypeMobile,
								label: 'iconSizeTypeMobile',
							},
						},
					} }
					limitMin={ { 'px': 0, '%': 0, 'em': 0 } } // eslint-disable-line quote-props
					limitMax={ { 'px': 500, '%': 100, 'em': 100 } } // eslint-disable-line quote-props
					unit={ {
						value: iconSizeType,
						label: 'iconSizeType',
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
						{
							name: __(
								'EM',
								'ultimate-addons-for-gutenberg'
							),
							unitValue: 'em',
						},
					] }
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
						<>
							<AdvancedPopColorControl
								label={ __(
									'Color',
									'ultimate-addons-for-gutenberg'
								) }
								colorValue={
									iconColor ? iconColor : ''
								}
								data={ {
									value: iconColor,
									label: 'iconColor',
								} }
								setAttributes={ setAttributes }
							/>
							<AdvancedPopColorControl
								label={ __(
									'Icon Background Color',
									'ultimate-addons-for-gutenberg'
								) }
								colorValue={
									iconBackgroundColor ? iconBackgroundColor : ''
								}
								data={ {
									value: iconBackgroundColor,
									label: 'iconBackgroundColor',
								} }
								setAttributes={ setAttributes }
							/>
						</>

					}
					hover={
						<>
							<AdvancedPopColorControl
								label={ __(
									'Color',
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
									'Icon Background Color',
									'ultimate-addons-for-gutenberg'
								) }
								colorValue={
									iconBackgroundHoverColor ? iconBackgroundHoverColor : ''
								}
								data={ {
									value: iconBackgroundHoverColor,
									label: 'iconBackgroundHoverColor',
								} }
								setAttributes={ setAttributes }
							/>

						</>
						}
					disableBottomSeparator={ false }
				/>
				</>
			) }
			<ResponsiveBorder
				disabledBorderTitle= {false}
				setAttributes={ setAttributes }
				prefix={'iconWrap'}
				attributes={ attributes }
				deviceType={deviceType}
				disableBottomSeparator={ false }
			/>
			<SpacingControl
				label={ __(
					'Padding',
					'ultimate-addons-for-gutenberg'
				) }
				valueTop={ {
					value: iconTopPadding,
					label: 'iconTopPadding',
				} }
				valueRight={ {
					value: iconRightPadding,
					label: 'iconRightPadding',
				} }
				valueBottom={ {
					value: iconBottomPadding,
					label: 'iconBottomPadding',
				} }
				valueLeft={ {
					value: iconLeftPadding,
					label: 'iconLeftPadding',
				} }
				valueTopTablet={ {
					value: iconTopPaddingTablet,
					label: 'iconTopPaddingTablet',
				} }
				valueRightTablet={ {
					value: iconRightPaddingTablet,
					label: 'iconRightPaddingTablet',
				} }
				valueBottomTablet={ {
					value: iconBottomPaddingTablet,
					label: 'iconBottomPaddingTablet',
				} }
				valueLeftTablet={ {
					value: iconLeftPaddingTablet,
					label: 'iconLeftPaddingTablet',
				} }
				valueTopMobile={ {
					value: iconTopPaddingMobile,
					label: 'iconTopPaddingMobile',
				} }
				valueRightMobile={ {
					value: iconRightPaddingMobile,
					label: 'iconRightPaddingMobile',
				} }
				valueBottomMobile={ {
					value: iconBottomPaddingMobile,
					label: 'iconBottomPaddingMobile',
				} }
				valueLeftMobile={ {
					value: iconLeftPaddingMobile,
					label: 'iconLeftPaddingMobile',
				} }
				unit={ {
					value: iconPaddingUnit,
					label: 'iconPaddingUnit',
				} }
				mUnit={ {
					value: iconPaddingUnitMobile,
					label: 'iconPaddingUnitMobile',
				} }
				tUnit={ {
					value: iconPaddingUnitTablet,
					label: 'iconPaddingUnitTablet',
				} }
				deviceType={ deviceType }
				attributes={ attributes }
				setAttributes={ setAttributes }
				link={ {
					value: iconPaddingLink,
					label: 'iconPaddingLink',
				} }
			/>
			<SpacingControl
				label={ __(
					'Margin',
					'ultimate-addons-for-gutenberg'
				) }
				valueTop={ {
					value: iconTopMargin,
					label: 'iconTopMargin',
				} }
				valueRight={ {
					value: iconRightMargin,
					label: 'iconRightMargin',
				} }
				valueBottom={ {
					value: iconBottomMargin,
					label: 'iconBottomMargin',
				} }
				valueLeft={ {
					value: iconLeftMargin,
					label: 'iconLeftMargin',
				} }
				valueTopTablet={ {
					value: iconTopMarginTablet,
					label: 'iconTopMarginTablet',
				} }
				valueRightTablet={ {
					value: iconRightMarginTablet,
					label: 'iconRightMarginTablet',
				} }
				valueBottomTablet={ {
					value: iconBottomMarginTablet,
					label: 'iconBottomMarginTablet',
				} }
				valueLeftTablet={ {
					value: iconLeftMarginTablet,
					label: 'iconLeftMarginTablet',
				} }
				valueTopMobile={ {
					value: iconTopMarginMobile,
					label: 'iconTopMarginMobile',
				} }
				valueRightMobile={ {
					value: iconRightMarginMobile,
					label: 'iconRightMarginMobile',
				} }
				valueBottomMobile={ {
					value: iconBottomMarginMobile,
					label: 'iconBottomMarginMobile',
				} }
				valueLeftMobile={ {
					value: iconLeftMarginMobile,
					label: 'iconLeftMarginMobile',
				} }
				unit={ {
					value: iconMarginUnit,
					label: 'iconMarginUnit',
				} }
				mUnit={ {
					value: iconMarginUnitMobile,
					label: 'iconMarginUnitMobile',
				} }
				tUnit={ {
					value: iconMarginUnitTablet,
					label: 'iconMarginUnitTablet',
				} }
				deviceType={ deviceType }
				attributes={ attributes }
				setAttributes={ setAttributes }
				link={ {
					value: iconMarginLink,
					label: 'iconMarginLink',
				} }
			/>
		</UAGAdvancedPanelBody>
	)

	const headlineStylePanel =  (
		<UAGAdvancedPanelBody
			title={ __( 'Headline', 'ultimate-addons-for-gutenberg' ) }
			initialOpen={ false }
		>
			<TypographyControl
				label={ __(
					'Typography',
					'ultimate-addons-for-gutenberg'
				) }
				setAttributes={ setAttributes }
				loadGoogleFonts={ {
					value: headingLoadGoogleFonts,
					label: 'headingLoadGoogleFonts',
				} }
				fontFamily={ {
					value: headingFontFamily,
					label: 'headingFontFamily',
				} }
				fontWeight={ {
					value: headingFontWeight,
					label: 'headingFontWeight',
				} }
				fontStyle={ {
					value: headingFontStyle,
					label: 'headingFontStyle',
				} }
				transform={ {
					value: headingTransform,
					label: 'headingTransform',
				} }
				decoration={ {
					value: headingDecoration,
					label: 'headingDecoration',
				} }
				fontSizeType={ {
					value: headingFontSizeType,
					label: 'headingFontSizeType',
				} }
				fontSize={ {
					value: headingFontSize,
					label: 'headingFontSize',
				} }
				fontSizeMobile={ {
					value: headingFontSizeMobile,
					label: 'headingFontSizeMobile',
				} }
				fontSizeTablet={ {
					value: headingFontSizeTablet,
					label: 'headingFontSizeTablet',
				} }
				lineHeightType={ {
					value: headingLineHeightType,
					label: 'headingLineHeightType',
				} }
				lineHeight={ {
					value: headingLineHeight,
					label: 'headingLineHeight',
				} }
				lineHeightMobile={ {
					value: headingLineHeightMobile,
					label: 'headingLineHeightMobile',
				} }
				lineHeightTablet={ {
					value: headingLineHeightTablet,
					label: 'headingLineHeightTablet',
				} }
				letterSpacingType={ {
					value: headingLetterSpacingType,
					label: 'headingLetterSpacingType',
				} }
				letterSpacing={ {
					value: headingLetterSpacing,
					label: 'headingLetterSpacing',
				} }
				letterSpacingTablet={ {
					value: headingLetterSpacingTablet,
					label: 'headingLetterSpacingTablet',
				} }
				letterSpacingMobile={ {
					value: headingLetterSpacingMobile,
					label: 'headingLetterSpacingMobile',
				} }
			/>
			<AdvancedPopColorControl
				label={ __( 'Color', 'ultimate-addons-for-gutenberg' ) }
				colorValue={ headingColor ? headingColor : '' }
				data={ {
					value: headingColor,
					label: 'headingColor',
				} }
				setAttributes={ setAttributes }
			/>
			<SpacingControl
				label={ __(
					'Margin',
					'ultimate-addons-for-gutenberg'
				) }
				valueTop={ {
					value: headingTopMargin,
					label: 'headingTopMargin',
				} }
				valueRight={ {
					value: headingRightMargin,
					label: 'headingRightMargin',
				} }
				valueBottom={ {
					value: headingBottomMargin,
					label: 'headingBottomMargin',
				} }
				valueLeft={ {
					value: headingLeftMargin,
					label: 'headingLeftMargin',
				} }
				valueTopTablet={ {
					value: headingTopMarginTablet,
					label: 'headingTopMarginTablet',
				} }
				valueRightTablet={ {
					value: headingRightMarginTablet,
					label: 'headingRightMarginTablet',
				} }
				valueBottomTablet={ {
					value: headingBottomMarginTablet,
					label: 'headingBottomMarginTablet',
				} }
				valueLeftTablet={ {
					value: headingLeftMarginTablet,
					label: 'headingLeftMarginTablet',
				} }
				valueTopMobile={ {
					value: headingTopMarginMobile,
					label: 'headingTopMarginMobile',
				} }
				valueRightMobile={ {
					value: headingRightMarginMobile,
					label: 'headingRightMarginMobile',
				} }
				valueBottomMobile={ {
					value: headingBottomMarginMobile,
					label: 'headingBottomMarginMobile',
				} }
				valueLeftMobile={ {
					value: headingLeftMarginMobile,
					label: 'headingLeftMarginMobile',
				} }
				unit={ {
					value: headingMarginUnit,
					label: 'headingMarginUnit',
				} }
				mUnit={ {
					value: headingMarginUnitMobile,
					label: 'headingMarginUnitMobile',
				} }
				tUnit={ {
					value: headingMarginUnitTablet,
					label: 'headingMarginUnitTablet',
				} }
				deviceType={ deviceType }
				attributes={ attributes }
				setAttributes={ setAttributes }
				link={ {
					value: headingMarginLink,
					label: 'headingMarginLink',
				} }
			/>
		</UAGAdvancedPanelBody>
	)

	const numberStylePanel =  (
		<UAGAdvancedPanelBody
			title={ __( 'Number', 'ultimate-addons-for-gutenberg' ) }
			initialOpen={ false }
		>
			<TypographyControl
				label={ __(
					'Typography',
					'ultimate-addons-for-gutenberg'
				) }
				setAttributes={ setAttributes }
				loadGoogleFonts={ {
					value: numberLoadGoogleFonts,
					label: 'numberLoadGoogleFonts',
				} }
				fontFamily={ {
					value: numberFontFamily,
					label: 'numberFontFamily',
				} }
				fontWeight={ {
					value: numberFontWeight,
					label: 'numberFontWeight',
				} }
				fontStyle={ {
					value: numberFontStyle,
					label: 'numberFontStyle',
				} }
				transform={ {
					value: numberTransform,
					label: 'numberTransform',
				} }
				decoration={ {
					value: numberDecoration,
					label: 'numberDecoration',
				} }
				fontSizeType={ {
					value: numberFontSizeType,
					label: 'numberFontSizeType',
				} }
				fontSize={ {
					value: numberFontSize,
					label: 'numberFontSize',
				} }
				fontSizeMobile={ {
					value: numberFontSizeMobile,
					label: 'numberFontSizeMobile',
				} }
				fontSizeTablet={ {
					value: numberFontSizeTablet,
					label: 'numberFontSizeTablet',
				} }
				lineHeightType={ {
					value: numberLineHeightType,
					label: 'numberLineHeightType',
				} }
				lineHeight={ {
					value: numberLineHeight,
					label: 'numberLineHeight',
				} }
				lineHeightMobile={ {
					value: numberLineHeightMobile,
					label: 'numberLineHeightMobile',
				} }
				lineHeightTablet={ {
					value: numberLineHeightTablet,
					label: 'numberLineHeightTablet',
				} }
				letterSpacingType={ {
					value: numberLetterSpacingType,
					label: 'numberLetterSpacingType',
				} }
				letterSpacing={ {
					value: numberLetterSpacing,
					label: 'numberLetterSpacing',
				} }
				letterSpacingTablet={ {
					value: numberLetterSpacingTablet,
					label: 'numberLetterSpacingTablet',
				} }
				letterSpacingMobile={ {
					value: numberLetterSpacingMobile,
					label: 'numberLetterSpacingMobile',
				} }
			/>
			<AdvancedPopColorControl
				label={ __( 'Color', 'ultimate-addons-for-gutenberg' ) }
				colorValue={ numberColor ? numberColor : '' }
				data={ {
					value: numberColor,
					label: 'numberColor',
				} }
				setAttributes={ setAttributes }
			/>
			<SpacingControl
				label= {
					( layout !== 'bars' ) ?
						__( 'Margin', 'ultimate-addons-for-gutenberg' ) :
						__( 'Padding', 'ultimate-addons-for-gutenberg' )
				}
				valueTop={ {
					value: numberTopMargin,
					label: 'numberTopMargin',
				} }
				valueRight={ {
					value: numberRightMargin,
					label: 'numberRightMargin',
				} }
				valueBottom={ {
					value: numberBottomMargin,
					label: 'numberBottomMargin',
				} }
				valueLeft={ {
					value: numberLeftMargin,
					label: 'numberLeftMargin',
				} }
				valueTopTablet={ {
					value: numberTopMarginTablet,
					label: 'numberTopMarginTablet',
				} }
				valueRightTablet={ {
					value: numberRightMarginTablet,
					label: 'numberRightMarginTablet',
				} }
				valueBottomTablet={ {
					value: numberBottomMarginTablet,
					label: 'numberBottomMarginTablet',
				} }
				valueLeftTablet={ {
					value: numberLeftMarginTablet,
					label: 'numberLeftMarginTablet',
				} }
				valueTopMobile={ {
					value: numberTopMarginMobile,
					label: 'numberTopMarginMobile',
				} }
				valueRightMobile={ {
					value: numberRightMarginMobile,
					label: 'numberRightMarginMobile',
				} }
				valueBottomMobile={ {
					value: numberBottomMarginMobile,
					label: 'numberBottomMarginMobile',
				} }
				valueLeftMobile={ {
					value: numberLeftMarginMobile,
					label: 'numberLeftMarginMobile',
				} }
				unit={ {
					value: numberMarginUnit,
					label: 'numberMarginUnit',
				} }
				mUnit={ {
					value: numberMarginUnitMobile,
					label: 'numberMarginUnitMobile',
				} }
				tUnit={ {
					value: numberMarginUnitTablet,
					label: 'numberMarginUnitTablet',
				} }
				deviceType={ deviceType }
				attributes={ attributes }
				setAttributes={ setAttributes }
				link={ {
					value: numberMarginLink,
					label: 'numberMarginLink',
				} }
			/>
			<ResponsiveSlider
				label={ __(
					'Prefix Right Margin',
					'ultimate-addons-for-gutenberg'
				) }
				setAttributes={ setAttributes }
				data={ {
					desktop: {
						value: prefixRightDistance,
						label: 'prefixRightDistance',
					},
					tablet: {
						value: prefixRightDistanceTablet,
						label: 'prefixRightDistanceTablet',
					},
					mobile: {
						value: prefixRightDistanceMobile,
						label: 'prefixRightDistanceMobile',
					},
				} }
				min={ 0 }
				step={ 1 }
				max={ 100 }
				displayUnit={ false }
			/>
			<ResponsiveSlider
				label={ __(
					'Suffix Left Margin',
					'ultimate-addons-for-gutenberg'
				) }
				setAttributes={ setAttributes }
				data={ {
					desktop: {
						value: suffixLeftDistance,
						label: 'suffixLeftDistance',
					},
					tablet: {
						value: suffixLeftDistanceTablet,
						label: 'suffixLeftDistanceTablet',
					},
					mobile: {
						value: suffixLeftDistanceMobile,
						label: 'suffixLeftDistanceMobile',
					},
				} }
				min={ 0 }
				step={ 1 }
				max={ 100 }
				displayUnit={ false }
			/>
		</UAGAdvancedPanelBody>
	)

	const circleStylePanel = (
		<UAGAdvancedPanelBody
			title={__( 'Circle', 'ultimate-addons-for-gutenberg' )}
			initialOpen={ false }
		>
			<Range
				label={ __(
					'Circle Size',
					'ultimate-addons-for-gutenberg'
				) }
				setAttributes={ setAttributes }
				value={ circleSize }
				data={ {
					value: circleSize,
					label: 'circleSize',
				} }
				min={ 10 }
				step={ 10 }
				max={ 500 }
				displayUnit={ false }
			/>
			<Range
				label={ __(
					'Stroke Size',
					'ultimate-addons-for-gutenberg'
				) }
				setAttributes={ setAttributes }
				value={ circleStokeSize }
				data={ {
					value: circleStokeSize,
					label: 'circleStokeSize',
				} }
				min={ 0 }
				step={ 1 }
				max={ 100 }
				displayUnit={ false }
			/>
			<AdvancedPopColorControl
				label={ __( 'Progress Color', 'ultimate-addons-for-gutenberg' ) }
				colorValue={ circleForeground ? circleForeground : '' }
				data={ {
					value: circleForeground,
					label: 'circleForeground',
				} }
				setAttributes={ setAttributes }
			/>
			<AdvancedPopColorControl
				label={ __( 'Color', 'ultimate-addons-for-gutenberg' ) }
				colorValue={ circleBackground ? circleBackground : '' }
				data={ {
					value: circleBackground,
					label: 'circleBackground',
				} }
				setAttributes={ setAttributes }
			/>
		</UAGAdvancedPanelBody>
	)

	const barStylePanel = (
		<UAGAdvancedPanelBody
			title={__( 'Bar', 'ultimate-addons-for-gutenberg' )}
			initialOpen={ false }
		>
			<Range
				label={ __(
					'Bar Size',
					'ultimate-addons-for-gutenberg'
				) }
				setAttributes={ setAttributes }
				value={ barSize }
				data={ {
					value: barSize,
					label: 'barSize',
				} }
				min={ 0 }
				step={ 1 }
				max={ 100 }
				displayUnit={ false }
			/>
			<AdvancedPopColorControl
				label={ __( 'Progress Color', 'ultimate-addons-for-gutenberg' ) }
				colorValue={ barForeground ? barForeground : '' }
				data={ {
					value: barForeground,
					label: 'barForeground',
				} }
				setAttributes={ setAttributes }
			/>
			<AdvancedPopColorControl
				label={ __( 'Color', 'ultimate-addons-for-gutenberg' ) }
				colorValue={ barBackground ? barBackground : '' }
				data={ {
					value: barBackground,
					label: 'barBackground',
				} }
				setAttributes={ setAttributes }
			/>
		</UAGAdvancedPanelBody>
	)

	const spacingPanel = (
		<UAGAdvancedPanelBody
			title={__( 'Spacing', 'ultimate-addons-for-gutenberg' )}
			initialOpen={ false }
		>
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

	// We shall release the box-shadow feature later due to some technical challenges with the circle layout.
	// eslint-disable-next-line no-unused-vars
	const boxShadowSettings = (
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


	return (
		<>
			<BlockControls key="controls">
				<AlignmentToolbar
					value={ align }
					onChange={ ( value ) =>
						setAttributes( { align: value } )
					}
				/>
			</BlockControls>
			<InspectorControls>
				<InspectorTabs>
					<InspectorTab { ...UAGTabs.general }>
						{generalPanel}
						{/* No icons necessary for bar layout */}
						{layout !== 'bars' && iconImagePanel}
					</InspectorTab>
					<InspectorTab { ...UAGTabs.style }>
						{numberStylePanel}
						{headlineStylePanel}
						{layout === 'circle' && circleStylePanel}
						{layout === 'bars' && barStylePanel}
						{layout !== 'bars' && showIcon && iconImageStylePanel}
						{spacingPanel}
						{/* We will be releasing the box-shadow feature later due to some technical challenges with circle layout*/}
						{/* {layout !== 'number' && boxShadowSettings} */}
					</InspectorTab>
					<InspectorTab
						{ ...UAGTabs.advance }
						parentProps={ props }
					>
					</InspectorTab>
				</InspectorTabs>
			</InspectorControls>
		</>
	);
}
