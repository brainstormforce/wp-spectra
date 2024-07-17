/**
 * BLOCK: Popup Builder - Settings.
 */

import { useState, useEffect, useCallback, memo } from '@wordpress/element';
import InspectorTabs from '@Components/inspector-tabs/InspectorTabs.js';
import InspectorTab, {
	UAGTabs,
} from '@Components/inspector-tabs/InspectorTab.js';
import ResponsiveSlider from '@Components/responsive-slider';
import { __ } from '@wordpress/i18n';
import {
	InspectorControls,
	BlockControls,
} from '@wordpress/block-editor';
import {
	Dashicon,
	ToggleControl,
	Icon,
	ToolbarGroup,
	ToolbarButton,
	Popover,
	MenuItem,
} from '@wordpress/components';
import renderCustomIcon from '@Controls/renderCustomIcon';
import BoxShadowControl from '@Components/box-shadow';
import SpacingControl from '@Components/spacing-control';
import Background from '@Components/background';
import ResponsiveBorder from '@Components/responsive-border';
import UAGAdvancedPanelBody from '@Components/advanced-panel-body';
import SpectraMatrixControl from '@Components/matrix-alignment-control';
import MultiButtonsControl from '@Components/multi-buttons-control';
import UAGIconPicker from '@Components/icon-picker';
import UAGSelectControl from '@Components/select-control';
import Separator from '@Components/separator';
import UAGTabsControl from '@Components/tabs';
import AdvancedPopColorControl from '@Components/color-control/advanced-pop-color-control';
import UAGPresets from '@Components/presets';
import { boxShadowPresets, boxShadowHoverPresets } from './presets';
import variantIcons from './variant-icons';
import { uagbClassNames } from '@Utils/Helpers';
import { applyFilters } from '@wordpress/hooks';

import RepetitionSettings from './meta-settings/repetition';

const Settings = ( props ) => {
	const { attributes, setAttributes, deviceType } = props;

	const {
		// ------------------------- BLOCK SETTINGS.
		block_id,
		variationSelected,
		variantType,
		// ------------------------- POPUP SETTINGS.
		popupPositionV,
		popupPositionH,
		popupContentAlignmentV,
		popupWidth,
		popupWidthTablet,
		popupWidthMobile,
		popupWidthUnit,
		popupWidthUnitTablet,
		popupWidthUnitMobile,
		popupHeight,
		popupHeightTablet,
		popupHeightMobile,
		popupHeightUnit,
		popupHeightUnitTablet,
		popupHeightUnitMobile,
		hasFixedHeight,
		hasOverlay,
		isDismissable,
		haltBackgroundInteraction,
		willPushContent,
		// ------------------------- CLOSE SETTINGS.
		closeIcon,
		closeIconPosition,
		closeOverlayClick,
		closeEscapePress,
		// ------------------------- POPUP STYLING ( BACKGROUND ).
		selectGradient,
		gradientValue,
		gradientColor1,
		gradientColor2,
		gradientLocation1,
		gradientLocation2,
		gradientType,
		gradientAngle,
		backgroundImageColor,
		backgroundSizeDesktop,
		backgroundSizeTablet,
		backgroundSizeMobile,
		backgroundCustomSizeDesktop,
		backgroundCustomSizeTablet,
		backgroundCustomSizeMobile,
		backgroundCustomSizeType,
		backgroundRepeatDesktop,
		backgroundRepeatTablet,
		backgroundRepeatMobile,
		backgroundAttachmentDesktop,
		backgroundAttachmentTablet,
		backgroundAttachmentMobile,
		backgroundPositionDesktop,
		backgroundPositionTablet,
		backgroundPositionMobile,
		backgroundImageDesktop,
		backgroundImageTablet,
		backgroundImageMobile,
		backgroundColor,
		backgroundType,
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
		// ------------------------- POPUP STYLING.
		popupOverlayColor,
		// ------------------------- CLOSE STYLING.
		closeIconSize,
		closeIconSizeTablet,
		closeIconSizeMobile,
		closeIconColor,
		closeIconColorHover,
		// ------------------------- BOX SHADOW STYLING.
		useSeparateBoxShadows,
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
		// ------------------------- SPACE STYLING ( POPUP ).
		popupPaddingTop,
		popupPaddingRight,
		popupPaddingBottom,
		popupPaddingLeft,
		popupPaddingTopTablet,
		popupPaddingRightTablet,
		popupPaddingBottomTablet,
		popupPaddingLeftTablet,
		popupPaddingTopMobile,
		popupPaddingRightMobile,
		popupPaddingBottomMobile,
		popupPaddingLeftMobile,
		popupPaddingUnit,
		popupPaddingUnitTablet,
		popupPaddingUnitMobile,
		popupPaddingLink,
		popupMarginTop,
		popupMarginRight,
		popupMarginBottom,
		popupMarginLeft,
		popupMarginTopTablet,
		popupMarginRightTablet,
		popupMarginBottomTablet,
		popupMarginLeftTablet,
		popupMarginTopMobile,
		popupMarginRightMobile,
		popupMarginBottomMobile,
		popupMarginLeftMobile,
		popupMarginUnit,
		popupMarginUnitTablet,
		popupMarginUnitMobile,
		popupMarginLink,
		// ------------------------- SPACE STYLING ( CLOSE BUTTON ).
		closePaddingTop,
		closePaddingRight,
		closePaddingBottom,
		closePaddingLeft,
		closePaddingTopTablet,
		closePaddingRightTablet,
		closePaddingBottomTablet,
		closePaddingLeftTablet,
		closePaddingTopMobile,
		closePaddingRightMobile,
		closePaddingBottomMobile,
		closePaddingLeftMobile,
		closePaddingUnit,
		closePaddingUnitTablet,
		closePaddingUnitMobile,
		closePaddingLink,
	} = attributes;

	// Set the States and Constants Needed.
	const [ popupPositions, setPopupPositions ] = useState( '' );
	const [ showVariationPopup, setShowVariationPopup ] = useState( false );
	const [ isCopied, setIsCopied ] = useState( false );
	const canUseClipboard = navigator.clipboard ? true : false;


	// Update the close popup class ref when the close popup is changed.
	const closeClassRef = useCallback( ( node ) => {
		if ( canUseClipboard && node ) {
			node.addEventListener( 'click', () => {
				node.style.pointerEvents = 'none';
				const hiddenInput = document.createElement( 'input' );
		
				hiddenInput.style.display = 'none';
				hiddenInput.setAttribute( 'value', `spectra-popup-close-${ uagb_blocks_info.current_post_id }` );
				document.body.appendChild( hiddenInput );
		
				hiddenInput.select();
				hiddenInput.setSelectionRange( 0, 99999 );
				navigator.clipboard.writeText( hiddenInput.value );
		
				setIsCopied( true );
				setTimeout( () => {
					document.body.removeChild( hiddenInput );
					setIsCopied( false );
					node.style.pointerEvents = '';
				}, 750 );
			} );
		}
	}, [] );

	// Get the Initial Matrix Alignment.
	useEffect( () => {
		let currentPosition;
		switch ( popupPositionV ) {
			case 'flex-start':
				currentPosition = 'top';
				break;
			case 'flex-end':
				currentPosition = 'bottom';
				break;
			default:
				currentPosition = 'center';
		}
		switch ( popupPositionH ) {
			case 'flex-start':
				currentPosition += ' left';
				break;
			case 'flex-end':
				currentPosition += ' right';
				break;
			default:
				currentPosition += ' center';
		}
		setPopupPositions( currentPosition );
	}, [] );

	// Dynamic Labels.
	const paddingLabels = {
		popup: ( closeIcon ) ? __(
			'Popup Padding',
			'ultimate-addons-for-gutenberg'
		) : __(
			'Padding',
			'ultimate-addons-for-gutenberg'
		),
		banner: ( closeIcon ) ? __(
			'Info Bar Padding',
			'ultimate-addons-for-gutenberg'
		) : __(
			'Padding',
			'ultimate-addons-for-gutenberg'
		),
		close: __(
			'Close Button Padding',
			'ultimate-addons-for-gutenberg'
		),
	}
	const heightLabels = {
		popup: ( hasFixedHeight ) ? __(
			'Popup Height',
			'ultimate-addons-for-gutenberg'
		) : __(
			'Popup Max Height',
			'ultimate-addons-for-gutenberg'
		),
		banner: ( hasFixedHeight ) ? __(
			'Info Bar Height',
			'ultimate-addons-for-gutenberg'
		) : __(
			'Info Bar Min Height',
			'ultimate-addons-for-gutenberg'
		),
	}
	const getStylePanelTitle = () => {
		if ( 'banner' === variantType ) {
			return __( 'Info Bar', 'ultimate-addons-for-gutenberg' );
		}
		return __( 'Popup', 'ultimate-addons-for-gutenberg' );
	}
	const getOverlayLabel = () => {
		if ( 'image' === backgroundType ) {
			return __( 'Popup Overlay Color', 'ultimate-addons-for-gutenberg' );
		}
		return __( 'Overlay Color', 'ultimate-addons-for-gutenberg' );
	}

	// Update the Matrix Alignment when needed.
	const updateAlignmentAttributes = ( value ) => {
		const positions = value.split( ' ' );
		if ( 'top' === positions[ 0 ] ) {
			positions[ 0 ] = 'flex-start';
		} else if ( 'bottom' === positions[ 0 ] ) {
			positions[ 0 ] = 'flex-end';
		}
		if ( 'left' === positions[ 1 ] ) {
			positions[ 1 ] = 'flex-start';
		} else if ( 'right' === positions[ 1 ] ) {
			positions[ 1 ] = 'flex-end';
		}
		setPopupPositions( value );
		setAttributes( {
			popupPositionV: positions[ 0 ],
			popupPositionH: positions[ 1 ],
		} );
	}

	// Common Box Shadow Setting Renderer.
	const boxShadowSettings = ( isHover = false ) => (
		<>
			<UAGPresets
				setAttributes={ setAttributes }
				presets={ isHover ? boxShadowHoverPresets : boxShadowPresets }
				presetInputType='radioImage'
			/>
			<BoxShadowControl
				blockId={ block_id }
				setAttributes={ setAttributes }
				label={ __(
					'Box Shadow',
					'ultimate-addons-for-gutenberg'
				) }
				boxShadowColor={ {
					value: isHover ? boxShadowColorHover : boxShadowColor,
					label: isHover ? 'boxShadowColorHover' : 'boxShadowColor',
					title: __( 'Color', 'ultimate-addons-for-gutenberg' ),
				} }
				boxShadowHOffset={ {
					value: isHover ? boxShadowHOffsetHover : boxShadowHOffset,
					label: isHover ? 'boxShadowHOffsetHover' : 'boxShadowHOffset',
					title: __(
						'Horizontal',
						'ultimate-addons-for-gutenberg'
					),
				} }
				boxShadowVOffset={ {
					value: isHover ? boxShadowVOffsetHover : boxShadowVOffset,
					label: isHover ? 'boxShadowVOffsetHover' : 'boxShadowVOffset',
					title: __(
						'Vertical',
						'ultimate-addons-for-gutenberg'
					),
				} }
				boxShadowBlur={ {
					value: isHover ? boxShadowBlurHover : boxShadowBlur,
					label: isHover ? 'boxShadowBlurHover' : 'boxShadowBlur',
					title: __( 'Blur', 'ultimate-addons-for-gutenberg' ),
				} }
				boxShadowSpread={ {
					value: isHover ? boxShadowSpreadHover : boxShadowSpread,
					label: isHover ? 'boxShadowSpreadHover' : 'boxShadowSpread',
					title: __( 'Spread', 'ultimate-addons-for-gutenberg' ),
				} }
				boxShadowPosition={ {
					value: isHover ? boxShadowPositionHover : boxShadowPosition,
					label: isHover ? 'boxShadowPositionHover' : 'boxShadowPosition',
					title: __(
						'Position',
						'ultimate-addons-for-gutenberg'
					),
				} }
			/>
		</>
	);

	// Variation Popup for Block Controls.
	const switchVariant = ( newVariantType ) => {
		switch ( newVariantType ) {
			case 'banner':
				setAttributes( {
					variantType: 'banner',
					popupPositionV: 'flex-start',
					hasOverlay: false,
				} );
				if ( ! hasFixedHeight ) {
					setAttributes( {
						popupHeight: 50,
						popupHeightUnit: 'px',
					} );
				}
				break;
			case 'popup':
				setAttributes( {
					variantType: 'popup',
					hasOverlay: true,
				} );
				updateAlignmentAttributes( 'center center' );
				if ( ! hasFixedHeight ) {
					setAttributes( {
						popupHeight: 400,
						popupHeightUnit: 'px',
					} );
				}
				break;
		}
	};
	// Block Controls.
	const getBlockControls = () => (
		<BlockControls>
			<ToolbarGroup className='uagb-popup-builder__variant-control'>
				<ToolbarButton
					icon='update'
					label={ __( 'Change Variation', 'ultimate-addons-for-gutenberg' ) }
					onClick={ () => setShowVariationPopup( ! showVariationPopup ) }
				/>
			</ToolbarGroup>
			{ showVariationPopup && (
				<Popover
					position='bottom left'
					className='uagb-popup-builder__variant-control-popover'
					focusOnMount='container'
					onFocusOutside={ () => {
						setShowVariationPopup( false );
					} }
				>
					<MenuItem onClick={ () => switchVariant( 'banner' ) } disabled={ 'banner' === variantType }>
						{ variantIcons.banner }
						{ __( 'Info Bar', 'ultimate-addons-for-gutenberg' ) }
					</MenuItem>
					<MenuItem onClick={ () => switchVariant( 'popup' ) } disabled={ 'popup' === variantType }>
						{ variantIcons.popup }
						{ __( 'Popup', 'ultimate-addons-for-gutenberg' ) }
					</MenuItem>
				</Popover>
			) }
		</BlockControls>
	);

	// General Settings.
	const generalSettings = () => (
		<UAGAdvancedPanelBody
			title={ __( 'General', 'ultimate-addons-for-gutenberg' ) }
			initialOpen={ true }
		>
			{ ( 'popup' === variantType ) && (
				<ResponsiveSlider
					label={ __(
						'Popup Width',
						'ultimate-addons-for-gutenberg'
					) }
					data={ {
						desktop: {
							value: popupWidth,
							label: 'popupWidth',
							unit: {
								value: popupWidthUnit,
								label: 'popupWidthUnit',
							},
							max: ( 'vw' === popupWidthUnit ) ? 100 : 1500,
						},
						tablet: {
							value: popupWidthTablet,
							label: 'popupWidthTablet',
							unit: {
								value: popupWidthUnitTablet,
								label: 'popupWidthUnitTablet',
							},
							max: ( 'vw' === popupWidthUnitTablet ) ? 100 : 1500,
						},
						mobile: {
							value: popupWidthMobile,
							label: 'popupWidthMobile',
							unit: {
								value: popupWidthUnitMobile,
								label: 'popupWidthUnitMobile',
							},
							max: ( 'vw' === popupWidthUnitMobile ) ? 100 : 1500,
						},
					} }
					min={ 0 }
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
								'VW',
								'ultimate-addons-for-gutenberg'
							),
							unitValue: 'vw',
						},
					] }
					setAttributes={ setAttributes }
				/>
			) }
			<ResponsiveSlider
				label={ heightLabels[ variantType ] }
				data={ {
					desktop: {
						value: popupHeight,
						label: 'popupHeight',
						unit: {
							value: popupHeightUnit,
							label: 'popupHeightUnit',
						},
						max: ( 'vh' === popupHeightUnit ) ? 100 : 1500,
					},
					tablet: {
						value: popupHeightTablet,
						label: 'popupHeightTablet',
						unit: {
							value: popupHeightUnitTablet,
							label: 'popupHeightUnitTablet',
						},
						max: ( 'vh' === popupHeightUnitTablet ) ? 100 : 1500,
					},
					mobile: {
						value: popupHeightMobile,
						label: 'popupHeightMobile',
						unit: {
							value: popupHeightUnitMobile,
							label: 'popupHeightUnitMobile',
						},
						max: ( 'vh' === popupHeightUnitMobile ) ? 100 : 1500,
					},
				} }
				min={ 0 }
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
							'VH',
							'ultimate-addons-for-gutenberg'
						),
						unitValue: 'vh',
					},
				] }
				setAttributes={ setAttributes }
			/>
			<ToggleControl
				label={ __( 'Use Fixed Height', 'ultimate-addons-for-gutenberg' ) }
				checked={ hasFixedHeight }
				onChange={ () => setAttributes( { hasFixedHeight: ! hasFixedHeight } ) }
			/>
			{ hasFixedHeight && (
				<MultiButtonsControl
					label={ __(
						'Content Vertical Alignment',
						'ultimate-addons-for-gutenberg'
					) }
					data={ {
						value: popupContentAlignmentV,
						label: 'popupContentAlignmentV',
					} }
					options={ [
						{
							value: 'flex-start',
							tooltip: __( 'Flex Start', 'ultimate-addons-for-gutenberg' ),
							icon: <Icon icon={ renderCustomIcon( 'flex-column-start' ) } />,
						},
						{
							value: 'center',
							tooltip: __( 'Center', 'ultimate-addons-for-gutenberg' ),
							icon: <Icon icon={ renderCustomIcon( 'flex-column-center' ) } />,
						},
						{
							value: 'flex-end',
							tooltip: __( 'Flex End', 'ultimate-addons-for-gutenberg' ),
							icon: <Icon icon={ renderCustomIcon( 'flex-column-end' ) } />,
						},
					] }
					setAttributes={ setAttributes }
					showIcons={ true }
				/>
			) }
			{ ( 'popup' === variantType ) && (
				<>
					<SpectraMatrixControl
						label={ __( 'Popup Alignment', 'ultimate-addons-for-gutenberg' ) }
						data={ {
							label: 'popupPositions',
							value: popupPositions,
						} }
						onChange={ ( value ) => updateAlignmentAttributes( value ) }
					/>
					<ToggleControl
						label={ __( 'Use Overlay', 'ultimate-addons-for-gutenberg' ) }
						checked={ hasOverlay }
						onChange={ () => setAttributes( { hasOverlay: ! hasOverlay } ) }
					/>
					<ToggleControl
						label={ __( 'Prevent Background Interaction', 'ultimate-addons-for-gutenberg' ) }
						checked={ haltBackgroundInteraction }
						onChange={ () => setAttributes( { haltBackgroundInteraction: ! haltBackgroundInteraction } ) }
						help={ __( 'The background scroll and click events will be disabled once this popup is visible', 'ultimate-addons-for-gutenberg' ) }
					/>
				</>
			) }
			{ ( 'banner' === variantType ) && (
				<>
					<ToggleControl
						label={ __( 'Push Content', 'ultimate-addons-for-gutenberg' ) }
						checked={ willPushContent }
						onChange={ () => setAttributes( { willPushContent: ! willPushContent } ) }
					/>
					{ ! willPushContent && (
						<MultiButtonsControl
							label={ __(
								'Position',
								'ultimate-addons-for-gutenberg'
							) }
							data={ {
								value: popupPositionV,
								label: 'popupPositionV',
							} }
							options={ [
								{
									value: 'flex-start',
									label: __( 'Top', 'ultimate-addons-for-gutenberg' ),
								},
								{
									value: 'flex-end',
									label: __( 'Bottom', 'ultimate-addons-for-gutenberg' ),
								},
							] }
							setAttributes={ setAttributes }
							showIcons={ false }
						/>
					) }
				</>
			) }
		</UAGAdvancedPanelBody>
	);

	const closeSettings = () => (
		<UAGAdvancedPanelBody
			title={ __( 'Close', 'ultimate-addons-for-gutenberg' ) }
			initialOpen={ false }
		>
			<ToggleControl
				label={ __( 'Dismissible', 'ultimate-addons-for-gutenberg' ) }
				checked={ isDismissable }
				onChange={ () => setAttributes( { isDismissable: ! isDismissable } ) }
			/>
			{ isDismissable && (
				<>
					{ ( 'popup' === variantType && haltBackgroundInteraction ) && (
						<ToggleControl
							label={ __(
								'Close with Escape',
								'ultimate-addons-for-gutenberg'
							) }
							checked={ closeEscapePress }
							onChange={ () =>
								setAttributes( { closeEscapePress: ! closeEscapePress } )
							}
						/>
					) }
					{ hasOverlay && (
						<ToggleControl
							label={ __(
								'Close on Overlay Click',
								'ultimate-addons-for-gutenberg'
							) }
							checked={ closeOverlayClick }
							onChange={ () =>
								setAttributes( { closeOverlayClick: ! closeOverlayClick } )
							}
						/>
					) }
					<UAGIconPicker
						label={ __(
							'Icon',
							'ultimate-addons-for-gutenberg'
						) }
						value={ closeIcon }
						onChange={ ( value ) => setAttributes( { closeIcon: value } ) }
					/>
					{ closeIcon && (
						<UAGSelectControl
							label={ __(
								'Icon Position',
								'ultimate-addons-for-gutenberg'
							) }
							data={ {
								value: closeIconPosition,
								label: 'closeIconPosition',
							} }
							setAttributes={ setAttributes }
							options={ [
								{
									value: 'top-left',
									label: __(
										'Top Left',
										'ultimate-addons-for-gutenberg'
									),
								},
								{
									value: 'top-right',
									label: __(
										'Top Right',
										'ultimate-addons-for-gutenberg'
									),
								},
							] }
						/>
					) }
				</>
			) }
			<p
				className={ uagbClassNames( [
					'spectra-popup__notice',
					canUseClipboard && 'spectra-popup__notice--clickable',
				] ) }
				ref={ closeClassRef }
			>
				{ canUseClipboard && (
					<Dashicon
						icon='clipboard'
						style={ {
							color: isCopied ? '#007cba' : '',
						} }
					/>
				) }
				{ `spectra-popup-close-${ uagb_blocks_info.current_post_id }` }
			</p>
			<p className='spectra-popup__notice spectra-popup__notice--secondary'>
				{ __(
					'Copy and paste the class above into the Additional Classes field of any block in this popup to close it.',
					'ultimate-addons-for-gutenberg',
				) }
			</p>			
		</UAGAdvancedPanelBody>
	);

	const popupStyling = () => (
		<UAGAdvancedPanelBody
			title={ getStylePanelTitle() }
			initialOpen={ true }
		>
			<Background
				label={ __( 'Background', 'ultimate-addons-for-gutenberg' ) }
				setAttributes={ setAttributes }
				gradientType={ {
					value: selectGradient,
					label: 'selectGradient',
				} }
				backgroundGradient={ {
					value: gradientValue,
					label: 'gradientValue',
				} }
				backgroundGradientColor1={ {
					value: gradientColor1,
					label: 'gradientColor1',
				} }
				backgroundGradientColor2={ {
					value: gradientColor2,
					label: 'gradientColor2',
				} }
				backgroundGradientLocation1={ {
					value: gradientLocation1,
					label: 'gradientLocation1',
				} }
				backgroundGradientLocation2={ {
					value: gradientLocation2,
					label: 'gradientLocation2',
				} }
				backgroundGradientType={ {
					value: gradientType,
					label: 'gradientType',
				} }
				backgroundGradientAngle={ {
					value: gradientAngle,
					label: 'gradientAngle',
				} }
				backgroundImageColor={ {
					value: backgroundImageColor,
					label: 'backgroundImageColor',
				} }
				backgroundSize={ {
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
				} }
				backgroundCustomSize={ {
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
				} }
				backgroundCustomSizeType={ {
					value: backgroundCustomSizeType,
					label: 'backgroundCustomSizeType'
				} }
				backgroundRepeat={ {
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
				} }
				backgroundAttachment={ {
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
				} }
				backgroundPosition={ {
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
				} }
				backgroundImage={ {
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
				} }
				imageResponsive={ true }
				backgroundColor={ {
					value: backgroundColor,
					label: 'backgroundColor',
				} }
				backgroundType={ {
					value: backgroundType,
					label: 'backgroundType',
				} }
				overlayType={ {
					value: overlayType,
					label: 'overlayType'
				} }
				gradientOverlay={ {
					value: true,
				} }
				customPosition={ {
					value: customPosition,
					label: 'customPosition'
				} }
				xPositionDesktop={ {
					value: xPositionDesktop,
					label: 'xPositionDesktop'
				} }
				xPositionTablet={ {
					value: xPositionTablet,
					label: 'xPositionTablet'
				} }
				xPositionMobile={ {
					value: xPositionMobile,
					label: 'xPositionMobile'
				} }
				xPositionType={ {
					value: xPositionType,
					label: 'xPositionType'
				} }
				xPositionTypeTablet={ {
					value: xPositionTypeTablet,
					label: 'xPositionTypeTablet'
				} }
				xPositionTypeMobile={ {
					value: xPositionTypeMobile,
					label: 'xPositionTypeMobile'
				} }
				yPositionDesktop={ {
					value: yPositionDesktop,
					label: 'yPositionDesktop'
				} }
				yPositionTablet={ {
					value: yPositionTablet,
					label: 'yPositionTablet'
				} }
				yPositionMobile={ {
					value: yPositionMobile,
					label: 'yPositionMobile'
				} }
				yPositionType={ {
					value: yPositionType,
					label: 'yPositionType'
				} }
				yPositionTypeTablet={ {
					value: yPositionTypeTablet,
					label: 'yPositionTypeTablet'
				} }
				yPositionTypeMobile={ {
					value: yPositionTypeMobile,
					label: 'yPositionTypeMobile'
				} }
				backgroundVideoType={ {
					value: false,
				} }
				{ ...props }
			/>
			{ hasOverlay && (
				<>
					{ ( 'image' === backgroundType ) && <Separator/> }
					<AdvancedPopColorControl
						label={ getOverlayLabel() }
						colorValue={ popupOverlayColor ? popupOverlayColor : '' }
						data={ {
							value: popupOverlayColor,
							label: 'popupOverlayColor',
						} }
						setAttributes={ setAttributes }
					/>
				</>
			) }
			<Separator/>
			<ResponsiveBorder
				disabledBorderTitle={ false }
				setAttributes={ setAttributes }
				prefix={ 'content' }
				attributes={ attributes }
				deviceType={ deviceType }
				disableBottomSeparator={ true }
			/>
		</UAGAdvancedPanelBody>
	);

	const closeStyling = () => (
		<UAGAdvancedPanelBody
			title={ __( 'Close Button', 'ultimate-addons-for-gutenberg' ) }
			initialOpen={ false }
		>
			<ResponsiveSlider
				label={ __(
					'Icon Size',
					'ultimate-addons-for-gutenberg'
				) }
				data={ {
					desktop: {
						value: closeIconSize,
						label: 'closeIconSize',
					},
					tablet: {
						value: closeIconSizeTablet,
						label: 'closeIconSizeTablet',
					},
					mobile: {
						value: closeIconSizeMobile,
						label: 'closeIconSizeMobile',
					},
				} }
				min={ 0 }
				max={ 50 }
				displayUnit={ false }
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
				normal={ (
					<AdvancedPopColorControl
						label={ __(
							'Icon Color',
							'ultimate-addons-for-gutenberg'
						) }
						colorValue={ closeIconColor ? closeIconColor : '' }
						data={ {
							value: closeIconColor,
							label: 'closeIconColor',
						} }
						setAttributes={ setAttributes }
					/>
				) }
				hover={ (
					<AdvancedPopColorControl
						label={ __(
							'Icon Color',
							'ultimate-addons-for-gutenberg'
						) }
						colorValue={ closeIconColorHover ? closeIconColorHover : '' }
						data={ {
							value: closeIconColorHover,
							label: 'closeIconColorHover',
						} }
						setAttributes={ setAttributes }
					/>
				) }
				disableBottomSeparator={ true }
			/>
		</UAGAdvancedPanelBody>
	);

	const boxShadowStyling = () => (
		<UAGAdvancedPanelBody
			title={ __( 'Box Shadow', 'ultimate-addons-for-gutenberg' ) }
			initialOpen={ false }
		>
			<ToggleControl
				label={ __( 'Separate Hover Shadow', 'ultimate-addons-for-gutenberg' ) }
				checked={ useSeparateBoxShadows }
				onChange={ () => setAttributes( { useSeparateBoxShadows: ! useSeparateBoxShadows } ) }
			/>
			{ useSeparateBoxShadows ? (
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
					normal={ boxShadowSettings() }
					hover={ boxShadowSettings( true ) }
					disableBottomSeparator={ true }
				/>
			) : boxShadowSettings() }
		</UAGAdvancedPanelBody>
	);

	const spaceStyling = () => (
		<UAGAdvancedPanelBody
			title={ __( 'Spacing', 'ultimate-addons-for-gutenberg' ) }
			initialOpen={ false }
		>
			<SpacingControl
				{ ...props }
				label={ paddingLabels[ variantType ] }
				valueTop={ {
					value: popupPaddingTop,
					label: 'popupPaddingTop',
				} }
				valueRight={ {
					value: popupPaddingRight,
					label: 'popupPaddingRight',
				} }
				valueBottom={ {
					value: popupPaddingBottom,
					label: 'popupPaddingBottom',
				} }
				valueLeft={ {
					value: popupPaddingLeft,
					label: 'popupPaddingLeft',
				} }
				valueTopTablet={ {
					value: popupPaddingTopTablet,
					label: 'popupPaddingTopTablet',
				} }
				valueRightTablet={ {
					value: popupPaddingRightTablet,
					label: 'popupPaddingRightTablet',
				} }
				valueBottomTablet={ {
					value: popupPaddingBottomTablet,
					label: 'popupPaddingBottomTablet',
				} }
				valueLeftTablet={ {
					value: popupPaddingLeftTablet,
					label: 'popupPaddingLeftTablet',
				} }
				valueTopMobile={ {
					value: popupPaddingTopMobile,
					label: 'popupPaddingTopMobile',
				} }
				valueRightMobile={ {
					value: popupPaddingRightMobile,
					label: 'popupPaddingRightMobile',
				} }
				valueBottomMobile={ {
					value: popupPaddingBottomMobile,
					label: 'popupPaddingBottomMobile',
				} }
				valueLeftMobile={ {
					value: popupPaddingLeftMobile,
					label: 'popupPaddingLeftMobile',
				} }
				unit={ {
					value: popupPaddingUnit,
					label: 'popupPaddingUnit',
				} }
				mUnit={ {
					value: popupPaddingUnitTablet,
					label: 'popupPaddingUnitTablet',
				} }
				tUnit={ {
					value: popupPaddingUnitMobile,
					label: 'popupPaddingUnitMobile',
				} }
				deviceType={ deviceType }
				attributes={ attributes }
				setAttributes={ setAttributes }
				link={ {
					value: popupPaddingLink,
					label: 'popupPaddingLink',
				} }
				units={ [
					{
						name: __( 'Pixel', 'ultimate-addons-for-gutenberg' ),
						unitValue: 'px',
					},
					{
						name: __( 'EM', 'ultimate-addons-for-gutenberg' ),
						unitValue: 'em',
					},
					{
						name: __( '%', 'ultimate-addons-for-gutenberg' ),
						unitValue: '%',
					},
				] }
			/>
			{ ( 'popup' === variantType ) && (
				<SpacingControl
					{ ...props }
					label={ __( 'Popup Margin', 'ultimate-addons-for-gutenberg' ) }
					valueTop={ {
						value: popupMarginTop,
						label: 'popupMarginTop',
					} }
					valueRight={ {
						value: popupMarginRight,
						label: 'popupMarginRight',
					} }
					valueBottom={ {
						value: popupMarginBottom,
						label: 'popupMarginBottom',
					} }
					valueLeft={ {
						value: popupMarginLeft,
						label: 'popupMarginLeft',
					} }
					valueTopTablet={ {
						value: popupMarginTopTablet,
						label: 'popupMarginTopTablet',
					} }
					valueRightTablet={ {
						value: popupMarginRightTablet,
						label: 'popupMarginRightTablet',
					} }
					valueBottomTablet={ {
						value: popupMarginBottomTablet,
						label: 'popupMarginBottomTablet',
					} }
					valueLeftTablet={ {
						value: popupMarginLeftTablet,
						label: 'popupMarginLeftTablet',
					} }
					valueTopMobile={ {
						value: popupMarginTopMobile,
						label: 'popupMarginTopMobile',
					} }
					valueRightMobile={ {
						value: popupMarginRightMobile,
						label: 'popupMarginRightMobile',
					} }
					valueBottomMobile={ {
						value: popupMarginBottomMobile,
						label: 'popupMarginBottomMobile',
					} }
					valueLeftMobile={ {
						value: popupMarginLeftMobile,
						label: 'popupMarginLeftMobile',
					} }
					unit={ {
						value: popupMarginUnit,
						label: 'popupMarginUnit',
					} }
					mUnit={ {
						value: popupMarginUnitTablet,
						label: 'popupMarginUnitTablet',
					} }
					tUnit={ {
						value: popupMarginUnitMobile,
						label: 'popupMarginUnitMobile',
					} }
					deviceType={ deviceType }
					attributes={ attributes }
					setAttributes={ setAttributes }
					link={ {
						value: popupMarginLink,
						label: 'popupMarginLink',
					} }
					units={ [
						{
							name: __( 'Pixel', 'ultimate-addons-for-gutenberg' ),
							unitValue: 'px',
						},
						{
							name: __( 'EM', 'ultimate-addons-for-gutenberg' ),
							unitValue: 'em',
						},
						{
							name: __( '%', 'ultimate-addons-for-gutenberg' ),
							unitValue: '%',
						},
					] }
				/>
			) }
			{ ( isDismissable && closeIcon ) && (
				<SpacingControl
					{ ...props }
					label={ paddingLabels.close }
					valueTop={ {
						value: closePaddingTop,
						label: 'closePaddingTop',
					} }
					valueRight={ {
						value: closePaddingRight,
						label: 'closePaddingRight',
					} }
					valueBottom={ {
						value: closePaddingBottom,
						label: 'closePaddingBottom',
					} }
					valueLeft={ {
						value: closePaddingLeft,
						label: 'closePaddingLeft',
					} }
					valueTopTablet={ {
						value: closePaddingTopTablet,
						label: 'closePaddingTopTablet',
					} }
					valueRightTablet={ {
						value: closePaddingRightTablet,
						label: 'closePaddingRightTablet',
					} }
					valueBottomTablet={ {
						value: closePaddingBottomTablet,
						label: 'closePaddingBottomTablet',
					} }
					valueLeftTablet={ {
						value: closePaddingLeftTablet,
						label: 'closePaddingLeftTablet',
					} }
					valueTopMobile={ {
						value: closePaddingTopMobile,
						label: 'closePaddingTopMobile',
					} }
					valueRightMobile={ {
						value: closePaddingRightMobile,
						label: 'closePaddingRightMobile',
					} }
					valueBottomMobile={ {
						value: closePaddingBottomMobile,
						label: 'closePaddingBottomMobile',
					} }
					valueLeftMobile={ {
						value: closePaddingLeftMobile,
						label: 'closePaddingLeftMobile',
					} }
					unit={ {
						value: closePaddingUnit,
						label: 'closePaddingUnit',
					} }
					mUnit={ {
						value: closePaddingUnitTablet,
						label: 'closePaddingUnitTablet',
					} }
					tUnit={ {
						value: closePaddingUnitMobile,
						label: 'closePaddingUnitMobile',
					} }
					deviceType={ deviceType }
					attributes={ attributes }
					setAttributes={ setAttributes }
					link={ {
						value: closePaddingLink,
						label: 'closePaddingLink',
					} }
					units={ [
						{
							name: __( 'Pixel', 'ultimate-addons-for-gutenberg' ),
							unitValue: 'px',
						},
						{
							name: __( 'EM', 'ultimate-addons-for-gutenberg' ),
							unitValue: 'em',
						},
						{
							name: __( '%', 'ultimate-addons-for-gutenberg' ),
							unitValue: '%',
						},
					] }
				/>
			) }
		</UAGAdvancedPanelBody>
	);

	const popupGeneralMetaSettings = applyFilters( 'spectra.popup-builder.tab_general.repetition.before', <RepetitionSettings/> );

	return (
		<>
			{ getBlockControls() }
			<InspectorControls>
				<InspectorTabs>
					<InspectorTab { ...UAGTabs.general }>
						{ variationSelected && (
							<>
								{ generalSettings() }
								{ closeSettings() }
								{ popupGeneralMetaSettings }
							</>
						) }
					</InspectorTab>
					<InspectorTab { ...UAGTabs.style }>
						{ popupStyling() }
						{ ( isDismissable && closeIcon ) && closeStyling() }
						{ boxShadowStyling() }
						{ spaceStyling() }
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
