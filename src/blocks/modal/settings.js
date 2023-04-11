import InspectorTabs from '@Components/inspector-tabs/InspectorTabs.js';
import InspectorTab, { UAGTabs } from '@Components/inspector-tabs/InspectorTab.js';
import { __ } from '@wordpress/i18n';
import { InspectorControls } from '@wordpress/block-editor';
import { Icon, ToggleControl } from '@wordpress/components';
import UAGMediaPicker from '@Components/image';
import UAGIconPicker from '@Components/icon-picker';
import UAGAdvancedPanelBody from '@Components/advanced-panel-body';
import { getImageSize } from '@Utils/Helpers';
import UAGSelectControl from '@Components/select-control';
import ResponsiveSlider from '@Components/responsive-slider';
import MultiButtonsControl from '@Components/multi-buttons-control';
import renderSVG from '@Controls/renderIcon';
import Range from '@Components/range/Range.js';
import AdvancedPopColorControl from '@Components/color-control/advanced-pop-color-control.js';
import SpacingControl from '@Components/spacing-control';
import TypographyControl from '@Components/typography';
import UAGTabsControl from '@Components/tabs';
import ResponsiveBorder from '@Components/responsive-border';
import Background from '@Components/background';
import { buttonsPresets } from './presets';
import UAGPresets from '@Components/presets';

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
	const { attributes, setAttributes, deviceType } = props;
	const {
		modalTrigger,
		iconImage,
		icon,
		imageSize,
		// Button.
		buttonIcon,
		buttonIconPosition,
		buttonIconSpace,
		buttonIconSpaceTablet,
		buttonIconSpaceMobile,
		buttonIconSpaceType,
		modalAlign,
		modalAlignTablet,
		modalAlignMobile,
		modalWidth,
		modalWidthTablet,
		modalWidthMobile,
		modalWidthType,
		modalHeight,
		modalHeightTablet,
		modalHeightMobile,
		modalHeightType,
		closeIconSize,
		closeIconPosition,
		overlayColor,
		closeIconColor,
		escPress,
		overlayClick,
		paddingModalTop,
		paddingModalBottom,
		paddingModalLeft,
		paddingModalRight,
		paddingModalTopTablet,
		paddingModalRightTablet,
		paddingModalBottomTablet,
		paddingModalLeftTablet,
		paddingModalTopMobile,
		paddingModalRightMobile,
		paddingModalBottomMobile,
		paddingModalLeftMobile,
		paddingModalUnit,
		modalSpacingLink,
		mobilePaddingModalUnit,
		tabletPaddingModalUnit,
		// Trigger style controls.
		// Icon.
		iconColor,
		iconSize,
		// Text.
		textColor,
		textFontFamily,
		textFontWeight,
		textFontStyle,
		textFontSizeType,
		textFontSize,
		textFontSizeMobile,
		textFontSizeTablet,
		textLineHeightType,
		textLineHeight,
		textLineHeightMobile,
		textLineHeightTablet,
		textLetterSpacing,
		textLetterSpacingTablet,
		textLetterSpacingMobile,
		textLetterSpacingType,
		textTransform,
		textDecoration,
		textLoadGoogleFonts,
		// Image.
		imageWidth,
		imageWidthMobile,
		imageWidthTablet,
		imageWidthType,
		imageWidthUnit,
		imageWidthUnitTablet,
		imageWidthUnitMobile,
		iconimgBorderRadius,
		iconimgBorderRadiusUnit,
		// Button.
		paddingBtnTop,
		paddingBtnBottom,
		paddingBtnLeft,
		paddingBtnRight,
		paddingBtnTopTablet,
		paddingBtnRightTablet,
		paddingBtnBottomTablet,
		paddingBtnLeftTablet,
		paddingBtnTopMobile,
		paddingBtnRightMobile,
		paddingBtnBottomMobile,
		paddingBtnLeftMobile,
		paddingBtnUnit,
		btnSpacingLink,
		mobilePaddingBtnUnit,
		tabletPaddingBtnUnit,

		btnFontFamily,
		btnFontWeight,
		btnFontStyle,
		btnFontSizeType,
		btnFontSize,
		btnFontSizeMobile,
		btnFontSizeTablet,
		btnLineHeightType,
		btnLineHeight,
		btnLineHeightMobile,
		btnLineHeightTablet,
		btnLetterSpacing,
		btnLetterSpacingTablet,
		btnLetterSpacingMobile,
		btnLetterSpacingType,
		btnTransform,
		btnDecoration,
		btnLoadGoogleFonts,
		btnLinkColor,
		btnLinkHoverColor,
		btnBgHoverColor,
		btnBgColor,
		closeIcon,
		showBtnIcon,
		modalBoxHeight,
		maxHeight,
		maxHeightTablet,
		maxHeightMobile,
		maxHeightType,
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
		gradientColor1,
		gradientColor2,
		gradientLocation1,
		gradientLocation2,
		gradientType,
		gradientAngle,
		selectGradient,
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
		modalTriggerBgType,
		modalTriggerBgHoverType,
		openModalAs
	} = attributes;

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

	let alignmentOptions = [
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
	];

	if ( modalTrigger !== 'button' ) {
		alignmentOptions = [
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
		];
		if ( 'full' === modalAlign ) {
			setAttributes( {
				modalAlign: 'left',
			} );
		}
	}

	const modalTriggerPanel = (
		<UAGAdvancedPanelBody title={ __( 'Trigger', 'ultimate-addons-for-gutenberg' ) } initialOpen={ true }>
			<UAGSelectControl
				setAttributes={ setAttributes }
				label={ __( 'Modal Trigger', 'ultimate-addons-for-gutenberg' ) }
				data={ {
					value: modalTrigger,
					label: 'modalTrigger',
				} }
				options={ [
					{
						value: 'button',
						label: __( 'Button', 'ultimate-addons-for-gutenberg' ),
					},
					{
						value: 'icon',
						label: __( 'Icon', 'ultimate-addons-for-gutenberg' ),
					},
					{
						value: 'image',
						label: __( 'Image', 'ultimate-addons-for-gutenberg' ),
					},
					{
						value: 'text',
						label: __( 'Text', 'ultimate-addons-for-gutenberg' ),
					},
				] }
			/>
			{ modalTrigger === 'icon' && (
				<>
					<UAGIconPicker
						label={ __( 'Icon', 'ultimate-addons-for-gutenberg' ) }
						value={ icon }
						onChange={ ( value ) => setAttributes( { icon: value } ) }
					/>
				</>
			) }
			{ modalTrigger === 'image' && (
				<>
					<UAGMediaPicker
						onSelectImage={ onSelectImage }
						backgroundImage={ iconImage }
						onRemoveImage={ onRemoveImage }
					/>
					{ iconImage && iconImage.url !== 'null' && iconImage.url !== '' && (
						<UAGSelectControl
							label={ __( 'Image Size', 'ultimate-addons-for-gutenberg' ) }
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
			{ modalTrigger === 'button' && (
				<>
					<UAGPresets
						setAttributes={ setAttributes }
						presets={ buttonsPresets }
						presetInputType="radioImage"
					/>
					<ToggleControl
						label={ __( 'Enable Icon', 'ultimate-addons-for-gutenberg' ) }
						checked={ showBtnIcon }
						onChange={ () => setAttributes( { showBtnIcon: ! showBtnIcon } ) }
					/>
					{ showBtnIcon && (
						<UAGIconPicker
							label={ __( 'Button Icon', 'ultimate-addons-for-gutenberg' ) }
							value={ buttonIcon }
							onChange={ ( value ) => setAttributes( { buttonIcon: value } ) }
						/>
					) }
					{ showBtnIcon && '' !== buttonIcon && (
						<>
							<MultiButtonsControl
								setAttributes={ setAttributes }
								label={ __( 'Position', 'ultimate-addons-for-gutenberg' ) }
								data={ {
									value: buttonIconPosition,
									label: 'buttonIconPosition',
								} }
								className="uagb-multi-button-alignment-control"
								options={ [
									{
										value: 'before',
										label: __( 'Before Text', 'ultimate-addons-for-gutenberg' ),
									},
									{
										value: 'after',
										label: __( 'After Text', 'ultimate-addons-for-gutenberg' ),
									},
								] }
							/>
						</>
					) }
				</>
			) }
			{ [ 'button', 'icon', 'text', 'image' ].includes( modalTrigger ) && (
				<MultiButtonsControl
					setAttributes={ setAttributes }
					label={ __( 'Alignment', 'ultimate-addons-for-gutenberg' ) }
					data={ {
						desktop: {
							value: modalAlign,
							label: 'modalAlign',
						},
						tablet: {
							value: modalAlignTablet,
							label: 'modalAlignTablet',
						},
						mobile: {
							value: modalAlignMobile,
							label: 'modalAlignMobile',
						},
					} }
					options={ alignmentOptions }
					showIcons={ true }
					responsive={ true }
				/>
			) }
		</UAGAdvancedPanelBody>
	);

	const isTypePopup = ( 'left-off-canvas' !== openModalAs && 'right-off-canvas' !== openModalAs );

	const modalContentPanel = (
		<UAGAdvancedPanelBody title={ __( 'Container', 'ultimate-addons-for-gutenberg' ) } initialOpen={ false }>
			<ResponsiveSlider
				label={ __( 'Modal Popup Width', 'ultimate-addons-for-gutenberg' ) }
				data={ {
					desktop: {
						value: modalWidth,
						label: 'modalWidth',
					},
					tablet: {
						value: modalWidthTablet,
						label: 'modalWidthTablet',
					},
					mobile: {
						value: modalWidthMobile,
						label: 'modalWidthMobile',
					},
				} }
				min={ '%' === modalWidthType ? 10 : 0 }
				max={ '%' === modalWidthType ? 100 : 1500 }
				unit={ {
					value: modalWidthType,
					label: 'modalWidthType',
				} }
				units={ [
					{
						name: __( 'Pixel', 'ultimate-addons-for-gutenberg' ),
						unitValue: 'px',
					},
					{
						name: __( '%', 'ultimate-addons-for-gutenberg' ),
						unitValue: '%',
					},
				] }
				setAttributes={ setAttributes }
			/>
			{ ( isTypePopup ) &&
				<MultiButtonsControl
					setAttributes={ setAttributes }
					label={ __( 'Modal Popup Height', 'ultimate-addons-for-gutenberg' ) }
					data={ {
						value: modalBoxHeight,
						label: 'modalBoxHeight',
					} }
					options={ [
						{
							value: 'auto',
							label: __( 'Auto', 'ultimate-addons-for-gutenberg' ),
						},
						{
							value: 'custom',
							label: __( 'Custom', 'ultimate-addons-for-gutenberg' ),
						},
					] }
					showIcons={ false }
					responsive={ false }
				/>
			}
			{ isTypePopup && modalBoxHeight !== 'custom' && (
				<ResponsiveSlider
					label={ __( 'Max Height', 'ultimate-addons-for-gutenberg' ) }
					data={ {
						desktop: {
							value: maxHeight,
							label: 'maxHeight',
						},
						tablet: {
							value: maxHeightTablet,
							label: 'maxHeightTablet',
						},
						mobile: {
							value: maxHeightMobile,
							label: 'maxHeightMobile',
						},
					} }
					min={ 0 }
					max={ 200 }
					unit={ {
						value: maxHeightType,
						label: 'maxHeightType',
					} }
					units={ [
						{
							name: __( 'VH', 'ultimate-addons-for-gutenberg' ),
							unitValue: 'vh',
						},
					] }
					setAttributes={ setAttributes }
				/>
			) }
			{ isTypePopup && modalBoxHeight !== 'auto' && (
				<ResponsiveSlider
					label={ __( 'Modal Popup Height', 'ultimate-addons-for-gutenberg' ) }
					data={ {
						desktop: {
							value: modalHeight,
							label: 'modalHeight',
						},
						tablet: {
							value: modalHeightTablet,
							label: 'modalHeightTablet',
						},
						mobile: {
							value: modalHeightMobile,
							label: 'modalHeightMobile',
						},
					} }
					min={ '%' === modalHeightType ? 10 : 130 }
					max={ '%' === modalHeightType ? 100 : 1500 }
					unit={ {
						value: modalHeightType,
						label: 'modalHeightType',
					} }
					units={ [
						{
							name: __( 'Pixel', 'ultimate-addons-for-gutenberg' ),
							unitValue: 'px',
						},
						{
							name: __( '%', 'ultimate-addons-for-gutenberg' ),
							unitValue: '%',
						},
					] }
					setAttributes={ setAttributes }
				/>
			) }
		</UAGAdvancedPanelBody>
	);

	const modalClosePanel = (
		<UAGAdvancedPanelBody title={ __( 'Close Button', 'ultimate-addons-for-gutenberg' ) } initialOpen={ false }>
			<UAGIconPicker
				label={ __( 'Icon', 'ultimate-addons-for-gutenberg' ) }
				value={ closeIcon }
				onChange={ ( value ) => setAttributes( { closeIcon: value } ) }
			/>
			{ closeIcon !== '' && (
				<UAGSelectControl
					label={ __( 'Icon Position', 'ultimate-addons-for-gutenberg' ) }
					data={ {
						value: closeIconPosition,
						label: 'closeIconPosition',
					} }
					setAttributes={ setAttributes }
					options={ [
						{
							value: 'popup-top-left',
							label: __( 'Top Left', 'ultimate-addons-for-gutenberg' ),
						},
						{
							value: 'popup-top-right',
							label: __( 'Top Right', 'ultimate-addons-for-gutenberg' ),
						},
					] }
				/>
			) }
			<ToggleControl
				label={ __( 'Close on ESC Keypress', 'ultimate-addons-for-gutenberg' ) }
				checked={ escPress }
				onChange={ () => setAttributes( { escPress: ! escPress } ) }
			/>
			<ToggleControl
				label={ __( 'Close on Overlay Click', 'ultimate-addons-for-gutenberg' ) }
				checked={ overlayClick }
				onChange={ () => setAttributes( { overlayClick: ! overlayClick } ) }
			/>
		</UAGAdvancedPanelBody>
	);

	const triggerStylePanel = (
		<UAGAdvancedPanelBody title={ __( 'Trigger', 'ultimate-addons-for-gutenberg' ) } initialOpen={ true }>
			{ 'icon' === modalTrigger && icon !== '' && (
				<>
					<Range
						label={ __( 'Icon Size', 'ultimate-addons-for-gutenberg' ) }
						setAttributes={ setAttributes }
						value={ iconSize }
						data={ {
							value: iconSize,
							label: 'iconSize',
						} }
						min={ 0 }
						max={ 150 }
						displayUnit={ false }
					/>
					<AdvancedPopColorControl
						label={ __( 'Icon Color', 'ultimate-addons-for-gutenberg' ) }
						colorValue={ iconColor ? iconColor : '' }
						data={ {
							value: iconColor,
							label: 'iconColor',
						} }
						setAttributes={ setAttributes }
					/>
				</>
			) }

			{ modalTrigger === 'icon' && icon === '' && (
				<p className="uagb-settings-notice">{ __( 'For the styling options please select the Icon.' ) }</p>
			) }

			{ modalTrigger === 'text' && (
				<>
					<AdvancedPopColorControl
						label={ __( 'Text Color', 'ultimate-addons-for-gutenberg' ) }
						colorValue={ textColor ? textColor : '' }
						data={ {
							value: textColor,
							label: 'textColor',
						} }
						setAttributes={ setAttributes }
					/>

					<TypographyControl
						label={ __( 'Typography', 'ultimate-addons-for-gutenberg' ) }
						attributes={ attributes }
						setAttributes={ setAttributes }
						loadGoogleFonts={ {
							value: textLoadGoogleFonts,
							label: 'textLoadGoogleFonts',
						} }
						fontFamily={ {
							value: textFontFamily,
							label: 'textFontFamily',
						} }
						fontWeight={ {
							value: textFontWeight,
							label: 'textFontWeight',
						} }
						fontStyle={ {
							value: textFontStyle,
							label: 'textFontStyle',
						} }
						transform={ {
							value: textTransform,
							label: 'textTransform',
						} }
						decoration={ {
							value: textDecoration,
							label: 'textDecoration',
						} }
						fontSizeType={ {
							value: textFontSizeType,
							label: 'textFontSizeType',
						} }
						fontSize={ {
							value: textFontSize,
							label: 'textFontSize',
						} }
						fontSizeMobile={ {
							value: textFontSizeMobile,
							label: 'textFontSizeMobile',
						} }
						fontSizeTablet={ {
							value: textFontSizeTablet,
							label: 'textFontSizeTablet',
						} }
						lineHeightType={ {
							value: textLineHeightType,
							label: 'textLineHeightType',
						} }
						lineHeight={ {
							value: textLineHeight,
							label: 'textLineHeight',
						} }
						lineHeightMobile={ {
							value: textLineHeightMobile,
							label: 'textLineHeightMobile',
						} }
						lineHeightTablet={ {
							value: textLineHeightTablet,
							label: 'textLineHeightTablet',
						} }
						letterSpacing={ {
							value: textLetterSpacing,
							label: 'textLetterSpacing',
						} }
						letterSpacingTablet={ {
							value: textLetterSpacingTablet,
							label: 'textLetterSpacingTablet',
						} }
						letterSpacingMobile={ {
							value: textLetterSpacingMobile,
							label: 'textLetterSpacingMobile',
						} }
						letterSpacingType={ {
							value: textLetterSpacingType,
							label: 'textLetterSpacingType',
						} }
					/>
				</>
			) }

			{ modalTrigger === 'image' && iconImage && iconImage.url !== 'null' && iconImage.url !== '' && (
				<>
					<ToggleControl
						checked={ imageWidthType }
						onChange={ () =>
							setAttributes( {
								imageWidthType: ! imageWidthType,
							} )
						}
						label={ __( 'Custom Width', 'ultimate-addons-for-gutenberg' ) }
						help={ __(
							'Turn this off to inherit the natural width of Image.',
							'ultimate-addons-for-gutenberg'
						) }
					/>

					{ imageWidthType && (
						<ResponsiveSlider
							label={ __( 'Width', 'ultimate-addons-for-gutenberg' ) }
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
							min={ 0 }
							limitMax={ { px: 500, '%': 100, em: 100 } } // eslint-disable-line quote-props
							units={ [
								{
									name: __( 'Pixel', 'ultimate-addons-for-gutenberg' ),
									unitValue: 'px',
								},
								{
									name: __( '%', 'ultimate-addons-for-gutenberg' ),
									unitValue: '%',
								},
								{
									name: __( 'EM', 'ultimate-addons-for-gutenberg' ),
									unitValue: 'em',
								},
							] }
							setAttributes={ setAttributes }
						/>
					) }
					<Range
						label={ __( 'Border Radius', 'ultimate-addons-for-gutenberg' ) }
						setAttributes={ setAttributes }
						value={ iconimgBorderRadius }
						data={ {
							value: iconimgBorderRadius,
							label: 'iconimgBorderRadius',
						} }
						min={ 0 }
						max={ 100 }
						unit={ {
							value: iconimgBorderRadiusUnit,
							label: 'iconimgBorderRadiusUnit',
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
						] }
					/>
				</>
			) }

			{ modalTrigger === 'image' && iconImage === undefined && (
				<p className="uagb-settings-notice">{ __( 'For the styling options please select the Image.' ) }</p>
			) }

			{ modalTrigger === 'button' && (
				<>
					{ showBtnIcon && '' !== buttonIcon && (
						<ResponsiveSlider
							label={ __( 'Icon Spacing', 'ultimate-addons-for-gutenberg' ) }
							data={ {
								desktop: {
									value: buttonIconSpace,
									label: 'buttonIconSpace',
								},
								tablet: {
									value: buttonIconSpaceTablet,
									label: 'buttonIconSpaceTablet',
								},
								mobile: {
									value: buttonIconSpaceMobile,
									label: 'buttonIconSpaceMobile',
								},
							} }
							min={ 0 }
							max={ 50 }
							unit={ {
								value: buttonIconSpaceType,
								label: 'buttonIconSpaceType',
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
							] }
							setAttributes={ setAttributes }
						/>
					) }
					<TypographyControl
						label={ __( 'Typography', 'ultimate-addons-for-gutenberg' ) }
						attributes={ attributes }
						setAttributes={ setAttributes }
						loadGoogleFonts={ {
							value: btnLoadGoogleFonts,
							label: 'btnLoadGoogleFonts',
						} }
						fontFamily={ {
							value: btnFontFamily,
							label: 'btnFontFamily',
						} }
						fontWeight={ {
							value: btnFontWeight,
							label: 'btnFontWeight',
						} }
						fontStyle={ {
							value: btnFontStyle,
							label: 'btnFontStyle',
						} }
						transform={ {
							value: btnTransform,
							label: 'btnTransform',
						} }
						decoration={ {
							value: btnDecoration,
							label: 'btnDecoration',
						} }
						fontSizeType={ {
							value: btnFontSizeType,
							label: 'btnFontSizeType',
						} }
						fontSize={ {
							value: btnFontSize,
							label: 'btnFontSize',
						} }
						fontSizeMobile={ {
							value: btnFontSizeMobile,
							label: 'btnFontSizeMobile',
						} }
						fontSizeTablet={ {
							value: btnFontSizeTablet,
							label: 'btnFontSizeTablet',
						} }
						lineHeightType={ {
							value: btnLineHeightType,
							label: 'btnLineHeightType',
						} }
						lineHeight={ {
							value: btnLineHeight,
							label: 'btnLineHeight',
						} }
						lineHeightMobile={ {
							value: btnLineHeightMobile,
							label: 'btnLineHeightMobile',
						} }
						lineHeightTablet={ {
							value: btnLineHeightTablet,
							label: 'btnLineHeightTablet',
						} }
						letterSpacing={ {
							value: btnLetterSpacing,
							label: 'btnLetterSpacing',
						} }
						letterSpacingTablet={ {
							value: btnLetterSpacingTablet,
							label: 'btnLetterSpacingTablet',
						} }
						letterSpacingMobile={ {
							value: btnLetterSpacingMobile,
							label: 'btnLetterSpacingMobile',
						} }
						letterSpacingType={ {
							value: btnLetterSpacingType,
							label: 'btnLetterSpacingType',
						} }
					/>
					<UAGTabsControl
						tabs={ [
							{
								name: 'normal',
								title: __( 'Normal', 'ultimate-addons-for-gutenberg' ),
							},
							{
								name: 'hover',
								title: __( 'Hover', 'ultimate-addons-for-gutenberg' ),
							},
						] }
						normal={
							<>
								<AdvancedPopColorControl
									label={ __( 'Text Color', 'ultimate-addons-for-gutenberg' ) }
									colorValue={ btnLinkColor ? btnLinkColor : '' }
									data={ {
										value: btnLinkColor,
										label: 'btnLinkColor',
									} }
									setAttributes={ setAttributes }
								/>
								<MultiButtonsControl
									setAttributes={ setAttributes }
									label={ __( 'Background Type', 'ultimate-addons-for-gutenberg' ) }
									data={ {
										value: modalTriggerBgType,
										label: 'modalTriggerBgType',
									} }
									className="uagb-multi-button-alignment-control"
									options={ [
										{
											value: 'transparent',
											label: __( 'Transparent', 'ultimate-addons-for-gutenberg' ),
										},
										{
											value: 'color',
											label: __( 'Color', 'ultimate-addons-for-gutenberg' ),
										},
									] }
								/>
								{ 'color' === modalTriggerBgType && (
									<>
										<AdvancedPopColorControl
											label={ __( 'Background Color', 'ultimate-addons-for-gutenberg' ) }
											colorValue={ btnBgColor ? btnBgColor : '' }
											data={ {
												value: btnBgColor,
												label: 'btnBgColor',
											} }
											setAttributes={ setAttributes }
										/>
									</>
								) }
							</>
						}
						hover={
							<>
								<AdvancedPopColorControl
									label={ __( 'Text Color', 'ultimate-addons-for-gutenberg' ) }
									colorValue={ btnLinkHoverColor ? btnLinkHoverColor : '' }
									data={ {
										value: btnLinkHoverColor,
										label: 'btnLinkHoverColor',
									} }
									setAttributes={ setAttributes }
								/>
								<MultiButtonsControl
									setAttributes={ setAttributes }
									label={ __( 'Background Type', 'ultimate-addons-for-gutenberg' ) }
									data={ {
										value: modalTriggerBgHoverType,
										label: 'modalTriggerBgHoverType',
									} }
									className="uagb-multi-button-alignment-control"
									options={ [
										{
											value: 'transparent',
											label: __( 'Transparent', 'ultimate-addons-for-gutenberg' ),
										},
										{
											value: 'color',
											label: __( 'Color', 'ultimate-addons-for-gutenberg' ),
										},
									] }
								/>
								{ 'color' === modalTriggerBgHoverType && (
									<>
										<AdvancedPopColorControl
											label={ __( 'Background Color', 'ultimate-addons-for-gutenberg' ) }
											colorValue={ btnBgHoverColor ? btnBgHoverColor : '' }
											data={ {
												value: btnBgHoverColor,
												label: 'btnBgHoverColor',
											} }
											setAttributes={ setAttributes }
										/>
									</>
								) }
							</>
						}
					/>
					<SpacingControl
						{ ...props }
						label={ __( 'Padding', 'ultimate-addons-for-gutenberg' ) }
						valueTop={ {
							value: paddingBtnTop,
							label: 'paddingBtnTop',
						} }
						valueRight={ {
							value: paddingBtnRight,
							label: 'paddingBtnRight',
						} }
						valueBottom={ {
							value: paddingBtnBottom,
							label: 'paddingBtnBottom',
						} }
						valueLeft={ {
							value: paddingBtnLeft,
							label: 'paddingBtnLeft',
						} }
						valueTopTablet={ {
							value: paddingBtnTopTablet,
							label: 'paddingBtnTopTablet',
						} }
						valueRightTablet={ {
							value: paddingBtnRightTablet,
							label: 'paddingBtnRightTablet',
						} }
						valueBottomTablet={ {
							value: paddingBtnBottomTablet,
							label: 'paddingBtnBottomTablet',
						} }
						valueLeftTablet={ {
							value: paddingBtnLeftTablet,
							label: 'paddingBtnLeftTablet',
						} }
						valueTopMobile={ {
							value: paddingBtnTopMobile,
							label: 'paddingBtnTopMobile',
						} }
						valueRightMobile={ {
							value: paddingBtnRightMobile,
							label: 'paddingBtnRightMobile',
						} }
						valueBottomMobile={ {
							value: paddingBtnBottomMobile,
							label: 'paddingBtnBottomMobile',
						} }
						valueLeftMobile={ {
							value: paddingBtnLeftMobile,
							label: 'paddingBtnLeftMobile',
						} }
						unit={ {
							value: paddingBtnUnit,
							label: 'paddingBtnUnit',
						} }
						mUnit={ {
							value: mobilePaddingBtnUnit,
							label: 'mobilePaddingBtnUnit',
						} }
						tUnit={ {
							value: tabletPaddingBtnUnit,
							label: 'tabletPaddingBtnUnit',
						} }
						deviceType={ deviceType }
						attributes={ attributes }
						setAttributes={ setAttributes }
						link={ {
							value: btnSpacingLink,
							label: 'btnSpacingLink',
						} }
						units={ [
							{
								name: __( 'Pixel', 'ultimate-addons-for-gutenberg' ),
								unitValue: 'px',
							},
							{
								name: __( '%', 'ultimate-addons-for-gutenberg' ),
								unitValue: '%',
							},
						] }
					/>
					<hr className="uagb-editor__separator" />
					<ResponsiveBorder
						disabledBorderTitle={ false }
						setAttributes={ setAttributes }
						prefix={ 'btn' }
						attributes={ attributes }
						deviceType={ deviceType }
						disableBottomSeparator={ true }
					/>
				</>
			) }
		</UAGAdvancedPanelBody>
	);

	const contentStylePanel = (
		<UAGAdvancedPanelBody title={ __( 'Container', 'ultimate-addons-for-gutenberg' ) } initialOpen={ false }>
			<AdvancedPopColorControl
				label={ __( 'Overlay Color', 'ultimate-addons-for-gutenberg' ) }
				colorValue={ overlayColor ? overlayColor : '' }
				data={ {
					value: overlayColor,
					label: 'overlayColor',
				} }
				setAttributes={ setAttributes }
			/>

			<SpacingControl
				{ ...props }
				label={ __( 'Padding', 'ultimate-addons-for-gutenberg' ) }
				valueTop={ {
					value: paddingModalTop,
					label: 'paddingModalTop',
				} }
				valueRight={ {
					value: paddingModalRight,
					label: 'paddingModalRight',
				} }
				valueBottom={ {
					value: paddingModalBottom,
					label: 'paddingModalBottom',
				} }
				valueLeft={ {
					value: paddingModalLeft,
					label: 'paddingModalLeft',
				} }
				valueTopTablet={ {
					value: paddingModalTopTablet,
					label: 'paddingModalTopTablet',
				} }
				valueRightTablet={ {
					value: paddingModalRightTablet,
					label: 'paddingModalRightTablet',
				} }
				valueBottomTablet={ {
					value: paddingModalBottomTablet,
					label: 'paddingModalBottomTablet',
				} }
				valueLeftTablet={ {
					value: paddingModalLeftTablet,
					label: 'paddingModalLeftTablet',
				} }
				valueTopMobile={ {
					value: paddingModalTopMobile,
					label: 'paddingModalTopMobile',
				} }
				valueRightMobile={ {
					value: paddingModalRightMobile,
					label: 'paddingModalRightMobile',
				} }
				valueBottomMobile={ {
					value: paddingModalBottomMobile,
					label: 'paddingModalBottomMobile',
				} }
				valueLeftMobile={ {
					value: paddingModalLeftMobile,
					label: 'paddingModalLeftMobile',
				} }
				unit={ {
					value: paddingModalUnit,
					label: 'paddingModalUnit',
				} }
				mUnit={ {
					value: mobilePaddingModalUnit,
					label: 'mobilePaddingModalUnit',
				} }
				tUnit={ {
					value: tabletPaddingModalUnit,
					label: 'tabletPaddingModalUnit',
				} }
				deviceType={ deviceType }
				attributes={ attributes }
				setAttributes={ setAttributes }
				link={ {
					value: modalSpacingLink,
					label: 'modalSpacingLink',
				} }
				units={ [
					{
						name: __( 'Pixel', 'ultimate-addons-for-gutenberg' ),
						unitValue: 'px',
					},
					{
						name: __( '%', 'ultimate-addons-for-gutenberg' ),
						unitValue: '%',
					},
				] }
			/>
			<hr className="uagb-editor__separator" />
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

	const closeStylePanel = (
		<UAGAdvancedPanelBody title={ __( 'Close Button', 'ultimate-addons-for-gutenberg' ) } initialOpen={ false }>
			<Range
				label={ __( 'Icon Size', 'ultimate-addons-for-gutenberg' ) }
				setAttributes={ setAttributes }
				value={ closeIconSize }
				data={ {
					value: closeIconSize,
					label: 'closeIconSize',
				} }
				min={ 0 }
				max={ 50 }
				displayUnit={ false }
			/>
			<AdvancedPopColorControl
				label={ __( 'Icon Color', 'ultimate-addons-for-gutenberg' ) }
				colorValue={ closeIconColor ? closeIconColor : '' }
				data={ {
					value: closeIconColor,
					label: 'closeIconColor',
				} }
				setAttributes={ setAttributes }
			/>
		</UAGAdvancedPanelBody>
	);

	const backgroundSettings = (
		<UAGAdvancedPanelBody title={ __( 'Background', 'ultimate-addons-for-gutenberg' ) } initialOpen={ false }>
			<Background
				setAttributes={ setAttributes }
				backgroundGradient={ {
					value: gradientValue,
					label: 'gradientValue',
				} }
				backgroundGradientColor1={ {
					value: gradientColor1,
					label: 'gradientColor1',
				} }
				gradientType={ {
					value: selectGradient,
					label: 'selectGradient',
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
					label: 'backgroundCustomSizeType',
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
					label: 'overlayType',
				} }
				gradientOverlay={ {
					value: true,
				} }
				customPosition={ {
					value: customPosition,
					label: 'customPosition',
				} }
				xPositionDesktop={ {
					value: xPositionDesktop,
					label: 'xPositionDesktop',
				} }
				xPositionTablet={ {
					value: xPositionTablet,
					label: 'xPositionTablet',
				} }
				xPositionMobile={ {
					value: xPositionMobile,
					label: 'xPositionMobile',
				} }
				xPositionType={ {
					value: xPositionType,
					label: 'xPositionType',
				} }
				xPositionTypeTablet={ {
					value: xPositionTypeTablet,
					label: 'xPositionTypeTablet',
				} }
				xPositionTypeMobile={ {
					value: xPositionTypeMobile,
					label: 'xPositionTypeMobile',
				} }
				yPositionDesktop={ {
					value: yPositionDesktop,
					label: 'yPositionDesktop',
				} }
				yPositionTablet={ {
					value: yPositionTablet,
					label: 'yPositionTablet',
				} }
				yPositionMobile={ {
					value: yPositionMobile,
					label: 'yPositionMobile',
				} }
				yPositionType={ {
					value: yPositionType,
					label: 'yPositionType',
				} }
				yPositionTypeTablet={ {
					value: yPositionTypeTablet,
					label: 'yPositionTypeTablet',
				} }
				yPositionTypeMobile={ {
					value: yPositionTypeMobile,
					label: 'yPositionTypeMobile',
				} }
				backgroundVideoType={ {
					value: false,
				} }
				{ ...props }
			/>
		</UAGAdvancedPanelBody>
	);

	return (
		<>
			<InspectorControls>
				<InspectorTabs>
					<InspectorTab { ...UAGTabs.general }>
						{ modalTriggerPanel }
						{ modalContentPanel }
						{ modalClosePanel }
					</InspectorTab>

					<InspectorTab { ...UAGTabs.style }>
						{ triggerStylePanel }
						{ contentStylePanel }
						{ '' !== closeIcon && closeStylePanel }
						{ backgroundSettings }
					</InspectorTab>
					<InspectorTab { ...UAGTabs.advance } parentProps={ props }></InspectorTab>
				</InspectorTabs>
			</InspectorControls>
		</>
	);
}
