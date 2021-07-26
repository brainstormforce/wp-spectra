/**
 * BLOCK: Columns - Settings.
 */
import UAGB_Block_Icons from '@Controls/block-icons';
import { __ } from '@wordpress/i18n';
import React, { Suspense } from 'react';
import lazyLoader from '@Controls/lazy-loader';
import GradientSettings from '@Components/gradient-settings';
import ColumnResponsive from '@Components/typography/column-responsive';
import BoxShadowControl from '@Components/box-shadow';
import MultiButtonsControl from "../../components/multi-buttons-control";
import SpacingControl from "../../components/spacing-control";
import Background from "../../components/background";
import Border from "../../components/border";
import AdvancedPopColorControl from "../../components/color-control/advanced-pop-color-control.js";
import Range from "../../components/range/Range.js";

import {
	BlockControls,
	BlockAlignmentToolbar,
	BlockVerticalAlignmentToolbar,
	ColorPalette,
	InspectorControls,
	MediaUpload,
} from '@wordpress/block-editor';
import {
	PanelBody,
	SelectControl,
	RangeControl,
	Button,
	ButtonGroup,
	BaseControl,
	ToggleControl,
	TabPanel,
	Dashicon,
} from '@wordpress/components';

const Settings = ( props ) => {
	const { attributes, setAttributes, deviceType } = props.parentProps;

	const {
		stack,
		align,
		vAlign,
		contentWidth,
		width,
		widthType,
		tag,
		columnGap,
		topMargin,
		bottomMargin,
		topMarginMobile,
		bottomMarginMobile,
		topMarginTablet,
		bottomMarginTablet,
		topPadding,
		bottomPadding,
		leftPadding,
		rightPadding,
		topPaddingTablet,
		bottomPaddingTablet,
		leftPaddingTablet,
		rightPaddingTablet,
		topPaddingMobile,
		bottomPaddingMobile,
		leftPaddingMobile,
		rightPaddingMobile,
		backgroundType,
		backgroundImage,
		backgroundVideo,
		backgroundColor,
		backgroundPosition,
		backgroundAttachment,
		backgroundRepeat,
		backgroundSize,
		backgroundOpacity,
		backgroundVideoColor,
		backgroundVideoOpacity,
		backgroundImageColor,
		overlayType,
		borderStyle,
		borderWidth,
		borderRadius,
		borderColor,
		borderHoverColor,
		columns,
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
		reverseTablet,
		reverseMobile,
		topDividerOpacity,
		bottomDividerOpacity,
		topContentAboveShape,
		bottomContentAboveShape,
		mobileMarginType,
		tabletMarginType,
		desktopMarginType,
		mobilePaddingType,
		tabletPaddingType,
		desktopPaddingType,
		paddingLink,
		marginLink,
		boxShadowColor,
		boxShadowHOffset,
		boxShadowVOffset,
		boxShadowBlur,
		boxShadowSpread,
		boxShadowPosition,
	} = attributes;

	/*
	 * Event to set Image as null while removing.
	 */
	const onRemoveImage = () => {
		setAttributes( { backgroundImage: null } );
	};

	/*
	 * Event to set Image as while adding.
	 */
	const onSelectImage = ( media ) => {
		if ( ! media || ! media.url ) {
			setAttributes( { backgroundImage: null } );
			return;
		}

		if ( ! media.type || 'image' != media.type ) {
			return;
		}

		setAttributes( { backgroundImage: media } );
	};

	/*
	 * Event to set Video as null while removing.
	 */
	const onRemoveVideo = () => {
		setAttributes( { backgroundVideo: null } );
	};

	/*
	 * Event to set Video while adding.
	 */
	const onSelectVideo = ( media ) => {
		if ( ! media || ! media.url ) {
			setAttributes( { backgroundVideo: null } );
			return;
		}
		if ( ! media.type || 'video' != media.type ) {
			return;
		}
		setAttributes( { backgroundVideo: media } );
	};

	const blockControlSettings = () => {
		return (
			<BlockControls>
				<BlockAlignmentToolbar
					value={ align }
					onChange={ ( value ) => {
						setAttributes( { align: value } );
					} }
					controls={ [ 'wide', 'full' ] }
				/>
				<BlockVerticalAlignmentToolbar
					value={ vAlign }
					onChange={ ( value ) => {
						setAttributes( { vAlign: value } );
					} }
				/>
			</BlockControls>
		);
	};
	const layoutSettings = () => {
		return (
			<PanelBody
				title={ __( 'Layout', 'ultimate-addons-for-gutenberg' ) }
			>
				<RangeControl
					label={ __( 'Columns', 'ultimate-addons-for-gutenberg' ) }
					value={ columns }
					min={ 0 }
					max={ 6 }
					onChange={ ( value ) =>
						setAttributes( { columns: value } )
					}
				/>
				{/* <Range
					label={__(
						"Columns",
						"ultimate-addons-for-gutenberg"
					)}
					setAttributes={setAttributes}
					value={columns}
					onChange={(value) =>
						setAttributes({ columns: value })
					}
					min={ 0 }
					max={ 6 }
					displayUnit={false}
				/> */}
				<SelectControl
					label={ __( 'Stack on', 'ultimate-addons-for-gutenberg' ) }
					value={ stack }
					options={ [
						{
							value: 'none',
							label: __(
								'None',
								'ultimate-addons-for-gutenberg'
							),
						},
						{
							value: 'tablet',
							label: __(
								'Tablet & Mobile',
								'ultimate-addons-for-gutenberg'
							),
						},
						{
							value: 'mobile',
							label: __(
								'Mobile',
								'ultimate-addons-for-gutenberg'
							),
						},
					] }
					onChange={ ( value ) => setAttributes( { stack: value } ) }
					help={ __(
						'Note: Choose on what breakpoint the columns will stack.',
						'ultimate-addons-for-gutenberg'
					) }
				/>
				<SelectControl
					label={ __(
						'Container Width',
						'ultimate-addons-for-gutenberg'
					) }
					value={ contentWidth }
					onChange={ ( value ) =>
						setAttributes( { contentWidth: value } )
					}
					options={ [
						{
							value: 'theme',
							label: __(
								'Theme Container Width',
								'ultimate-addons-for-gutenberg'
							),
						},
						{
							value: 'custom',
							label: __(
								'Custom',
								'ultimate-addons-for-gutenberg'
							),
						},
					] }
				/>
				{ contentWidth == 'custom' && (
					<>
						<ButtonGroup
							className="uagb-size-type-field"
							aria-label={ __(
								'Size Type',
								'ultimate-addons-for-gutenberg'
							) }
						>
							<Button
								key={ 'px' }
								className="uagb-size-btn"
								isSmall
								isPrimary={ widthType === 'px' }
								aria-pressed={ widthType === 'px' }
								min={ 0 }
								max={ 2000 }
								onClick={ () =>
									setAttributes( { widthType: 'px' } )
								}
							>
								{ 'px' }
							</Button>
							<Button
								key={ '%' }
								className="uagb-size-btn"
								isSmall
								isPrimary={ widthType === '%' }
								aria-pressed={ widthType === '%' }
								min={ 0 }
								max={ 100 }
								onClick={ () =>
									setAttributes( { widthType: '%' } )
								}
							>
								{ '%' }
							</Button>
						</ButtonGroup>
						<RangeControl
							label={ __(
								'Inner Width',
								'ultimate-addons-for-gutenberg'
							) }
							value={ width }
							min={ 0 }
							max={ '%' == widthType ? 100 : 2000 }
							onChange={ ( value ) =>
								setAttributes( { width: value } )
							}
						/>
						{/* <Range
							label={__(
								'Inner Width',
								"ultimate-addons-for-gutenberg"
							)}
							setAttributes={setAttributes}
							value={width}
							onChange={(value) =>
								setAttributes({ width: value })
							}
							min={ 0 }
							max={ '%' == widthType ? 100 : 2000 }
							displayUnit={true}
						/> */}
					</>
				) }
				<MultiButtonsControl
					setAttributes={setAttributes}
					label={__(
						"Gap",
						"ultimate-addons-for-gutenberg"
					)}
					data={{
						value: columnGap,
						label: "columnGap",
					}}
					className="uagb-multi-button-alignment-control"
					options={[
						{
							value: "10",
							label: __(
								"Default",
								"ultimate-addons-for-gutenberg"
							),
							tooltip: __(
								"Default (10px)",
								"ultimate-addons-for-gutenberg"
							),
						},
						{
							value: "0",
							label: __(
								"None",
								"ultimate-addons-for-gutenberg"
							),
							tooltip: __(
								"No Gap (0px)",
								"ultimate-addons-for-gutenberg"
							),
						},
						{
							value: "5",
							label: __(
								"S",
								"ultimate-addons-for-gutenberg"
							),
							tooltip: __(
								"Narrow (5px)",
								"ultimate-addons-for-gutenberg"
							),
						},
						{
							value: "15",
							label: __(
								"M",
								"ultimate-addons-for-gutenberg"
							),
							tooltip: __(
								"Extended (15px)",
								"ultimate-addons-for-gutenberg"
							),
						},
						{
							value: "20",
							label: __(
								"L",
								"ultimate-addons-for-gutenberg"
							),
							tooltip: __(
								"Wide (20px)",
								"ultimate-addons-for-gutenberg"
							),
						},
						{
							value: "30",
							label: __(
								"XL",
								"ultimate-addons-for-gutenberg"
							),
							tooltip: __(
								"Wider (30px)",
								"ultimate-addons-for-gutenberg"
							),
						},
					]}
					showIcons={false}
					help={__(
						"Note: The individual Column Gap can be managed from Column Settings.",
						"ultimate-addons-for-gutenberg"
					)}
				/>
				<SelectControl
					label={ __( 'HTML Tag', 'ultimate-addons-for-gutenberg' ) }
					value={ tag }
					onChange={ ( value ) => setAttributes( { tag: value } ) }
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
				<ToggleControl
					label={ __(
						'Reverse Columns (Tablet & Mobile)',
						'ultimate-addons-for-gutenberg'
					) }
					checked={ reverseTablet }
					onChange={ () =>
						setAttributes( { reverseTablet: ! reverseTablet } )
					}
				/>
				<ToggleControl
					label={ __(
						'Reverse Columns (Mobile)',
						'ultimate-addons-for-gutenberg'
					) }
					checked={ reverseMobile }
					onChange={ () =>
						setAttributes( { reverseMobile: ! reverseMobile } )
					}
				/>
			</PanelBody>
		);
	};
	const spacingSettings = () => {
		return (
			<PanelBody title={ __( 'Spacing' ) } initialOpen={ false }>
				<SpacingControl
					{...props.parentProps}
					label={__("Padding", "ultimate-addons-for-gutenberg")}
					valueTop={{
						value: topPadding,
						label: "topPadding",
					}}
					valueRight={{
						value: rightPadding,
						label: "rightPadding",
					}}
					valueBottom={{
						value: bottomPadding,
						label: "bottomPadding",
					}}
					valueLeft={{
						value: leftPadding,
						label: "leftPadding",
					}}
					valueTopTablet={{
						value: topPaddingTablet,
						label: "topPaddingTablet",
					}}
					valueRightTablet={{
						value: rightPaddingTablet,
						label: "rightPaddingTablet",
					}}
					valueBottomTablet={{
						value: bottomPaddingTablet,
						label: "bottomPaddingTablet",
					}}
					valueLeftTablet={{
						value: leftPaddingTablet,
						label: "leftPaddingTablet",
					}}
					valueTopMobile={{
						value: topPaddingMobile,
						label: "topPaddingMobile",
					}}
					valueRightMobile={{
						value: rightPaddingMobile,
						label: "rightPaddingMobile",
					}}
					valueBottomMobile={{
						value: bottomPaddingMobile,
						label: "bottomPaddingMobile",
					}}
					valueLeftMobile={{
						value: leftPaddingMobile,
						label: "leftPaddingMobile",
					}}
					unit={{
						value: desktopPaddingType,
						label: "desktopPaddingType",
					}}
					mUnit={{
						value: mobilePaddingType,
						label: "mobilePaddingType",
					}}
					tUnit={{
						value: tabletPaddingType,
						label: "tabletPaddingType",
					}}
					attributes={attributes}
					setAttributes={setAttributes}
					link={{
						value: paddingLink,
						label: "paddingLink",
					}}
				/>
				<hr className="uagb-editor__separator" />
				<SpacingControl
					{...props.parentProps}
					label={__("Margin", "ultimate-addons-for-gutenberg")}
					valueTop={{
						value: topMargin,
						label: "topMargin",
					}}
					valueRight={{
						value: topMargin,
						label: "topMargin",
					}}
					valueBottom={{
						value: bottomMargin,
						label: "bottomMargin",
					}}
					valueLeft={{
						value: bottomMargin,
						label: "bottomMargin",
					}}
					valueTopTablet={{
						value: topMarginTablet,
						label: "topMarginTablet",
					}}
					valueRightTablet={{
						value: topMarginTablet,
						label: "topMarginTablet",
					}}
					valueBottomTablet={{
						value: bottomMarginTablet,
						label: "bottomMarginTablet",
					}}
					valueLeftTablet={{
						value: bottomMarginTablet,
						label: "bottomMarginTablet",
					}}
					valueTopMobile={{
						value: topMarginMobile,
						label: "topMarginMobile",
					}}
					valueRightMobile={{
						value: topMarginMobile,
						label: "topMarginMobile",
					}}
					valueBottomMobile={{
						value: bottomMarginMobile,
						label: "bottomMarginMobile",
					}}
					valueLeftMobile={{
						value: bottomMarginMobile,
						label: "bottomMarginMobile",
					}}
					unit={{
						value: desktopMarginType,
						label: "desktopMarginType",
					}}
					mUnit={{
						value: mobileMarginType,
						label: "mobileMarginType",
					}}
					tUnit={{
						value: tabletMarginType,
						label: "tabletMarginType",
					}}
					attributes={attributes}
					setAttributes={setAttributes}
					link={{
						value: marginLink,
						label: "marginLink",
					}}
				/>
			</PanelBody>
		);
	};
	const backgroundSettings = () => {
		return (
			<PanelBody
				title={ __( 'Background', 'ultimate-addons-for-gutenberg' ) }
				initialOpen={ false }
			>
				<Background
					setAttributes={setAttributes}
					backgroundImageColor={{
						value: backgroundImageColor,
						label: __(
							"Background Image Color",
							"ultimate-addons-for-gutenberg"
						),
					}}
					overlayType={{
						value: overlayType,
						label: __(
							"Overlay Type",
							"ultimate-addons-for-gutenberg"
						),
					}}
					backgroundSize={{
						value: backgroundSize,
						label: __(
							"Background Size",
							"ultimate-addons-for-gutenberg"
						),
					}}
					backgroundRepeat={{
						value: backgroundRepeat,
						label: __(
							"Background Repeat",
							"ultimate-addons-for-gutenberg"
						),
					}}
					backgroundAttachment={{
						value: backgroundAttachment,
						label: __(
							"Background Attachement",
							"ultimate-addons-for-gutenberg"
						),
					}}
					backgroundPosition={{
						value: backgroundPosition,
						label: __(
							"Background Image",
							"ultimate-addons-for-gutenberg"
						),
					}}
					backgroundImage={{
						value: backgroundImage,
						label: __(
							"Background Image",
							"ultimate-addons-for-gutenberg"
						),
					}}
					backgroundColor={{
						value: backgroundColor,
						label: __(
							"Background Color",
							"ultimate-addons-for-gutenberg"
						),
					}}
					backgroundType={{
						value: backgroundType,
						label: __(
							"Background Type",
							"ultimate-addons-for-gutenberg"
						),
					}}
					backgroundOpacity={{
						value: backgroundOpacity,
						label: __(
							"Opacity",
							"ultimate-addons-for-gutenberg"
						),
					}}
					{...props}
				/>
			</PanelBody>
		);
	};
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
				<SelectControl
					label={ __( 'Type', 'ultimate-addons-for-gutenberg' ) }
					value={ topType }
					onChange={ ( value ) =>
						setAttributes( { topType: value } )
					}
					options={ dividers }
				/>
				{ topType != 'none' && (
					<>
						 <AdvancedPopColorControl
							label={__(
								"Color",
								"ultimate-addons-for-gutenberg"
							)}
							colorValue={topColor}
							onColorChange={(value) =>
								setAttributes({ topColor: value })
							}
						/>
						<Range
							label={__(
								'Opacity',
								"ultimate-addons-for-gutenberg"
							)}
							setAttributes={setAttributes}
							value={topDividerOpacity}
							onChange={(value) =>
								setAttributes({ topDividerOpacity: value })
							}
							min={ 0 }
							max={ 100 }
							displayUnit={false}
						/>
						<Range
							label={__(
								'Width',
								"ultimate-addons-for-gutenberg"
							)}
							setAttributes={setAttributes}
							value={topWidth}
							onChange={(value) =>
								setAttributes({ topWidth: value })
							}
							min={ 100 }
							max={ 2000 }
							displayUnit={false}
						/>
						<TabPanel
							className="uagb-size-type-field-tabs uagb-without-size-type"
							activeClass="active-tab"
							tabs={ [
								{
									name: 'desktop',
									title: <Dashicon icon="desktop" />,
									className:
										'uagb-desktop-tab uagb-responsive-tabs',
								},
								{
									name: 'tablet',
									title: <Dashicon icon="tablet" />,
									className:
										'uagb-tablet-tab uagb-responsive-tabs',
								},
								{
									name: 'mobile',
									title: <Dashicon icon="smartphone" />,
									className:
										'uagb-mobile-tab uagb-responsive-tabs',
								},
							] }
						>
							{ ( tab ) => {
								let tabout;

								if ( 'mobile' === tab.name ) {
									tabout = (
										<Range
											label={__(
												'Height',
												"ultimate-addons-for-gutenberg"
											)}
											setAttributes={setAttributes}
											value={topHeightMobile}
											onChange={(value) =>
												setAttributes({ topHeightMobile: value })
											}
											min={ 0 }
											max={ 500 }
											displayUnit={false}
										/>
									);
								} else if ( 'tablet' === tab.name ) {
									tabout = (
										<Range
											label={__(
												'Height',
												"ultimate-addons-for-gutenberg"
											)}
											setAttributes={setAttributes}
											value={topHeightTablet}
											onChange={(value) =>
												setAttributes({ topHeightTablet: value })
											}
											min={ 0 }
											max={ 500 }
											displayUnit={false}
										/>
									);
								} else {
									tabout = (
										<Range
											label={__(
												'Height',
												"ultimate-addons-for-gutenberg"
											)}
											setAttributes={setAttributes}
											value={topHeight}
											onChange={(value) =>
												setAttributes({ topHeight: value })
											}
											min={ 0 }
											max={ 500 }
											displayUnit={false}
										/>
									);
								}

								return <div>{ tabout }</div>;
							} }
						</TabPanel>
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
				<SelectControl
					label={ __( 'Type', 'ultimate-addons-for-gutenberg' ) }
					value={ bottomType }
					onChange={ ( value ) =>
						setAttributes( { bottomType: value } )
					}
					options={ dividers }
				/>
				{ bottomType != 'none' && (
					<>
						<AdvancedPopColorControl
							label={__(
								"Color",
								"ultimate-addons-for-gutenberg"
							)}
							colorValue={bottomColor}
							onColorChange={(value) =>
								setAttributes({ bottomColor: value })
							}
						/>
						<Range
							label={__(
								"Opacity",
								"ultimate-addons-for-gutenberg"
							)}
							setAttributes={setAttributes}
							value={bottomDividerOpacity}
							onChange={(value) =>
								setAttributes({ bottomDividerOpacity: value })
							}
							min={0}
							max={100}
							displayUnit={false}
						/>
						<Range
							label={__(
								"Width",
								"ultimate-addons-for-gutenberg"
							)}
							setAttributes={setAttributes}
							value={bottomWidth}
							onChange={(value) =>
								setAttributes({ bottomWidth: value })
							}
							min={100}
							max={2000}
							displayUnit={false}
						/>
						<TabPanel
							className="uagb-size-type-field-tabs uagb-without-size-type"
							activeClass="active-tab"
							tabs={ [
								{
									name: 'desktop',
									title: <Dashicon icon="desktop" />,
									className:
										'uagb-desktop-tab uagb-responsive-tabs',
								},
								{
									name: 'tablet',
									title: <Dashicon icon="tablet" />,
									className:
										'uagb-tablet-tab uagb-responsive-tabs',
								},
								{
									name: 'mobile',
									title: <Dashicon icon="smartphone" />,
									className:
										'uagb-mobile-tab uagb-responsive-tabs',
								},
							] }
						>
							{ ( tab ) => {
								let tabout;

								if ( 'mobile' === tab.name ) {
									tabout = (
										<Range
											label={__(
												"Height",
												"ultimate-addons-for-gutenberg"
											)}
											setAttributes={setAttributes}
											value={bottomHeightMobile}
											onChange={(value) =>
												setAttributes({ bottomHeightMobile: value })
											}
											min={0}
											max={500}
											displayUnit={false}
										/>
									);
								} else if ( 'tablet' === tab.name ) {
									tabout = (
										<Range
											label={__(
												"Height",
												"ultimate-addons-for-gutenberg"
											)}
											setAttributes={setAttributes}
											value={bottomHeightTablet}
											onChange={(value) =>
												setAttributes({ bottomHeightTablet: value })
											}
											min={0}
											max={500}
											displayUnit={false}
										/>
									);
								} else {
									tabout = (
										<Range
											label={__(
												"Height",
												"ultimate-addons-for-gutenberg"
											)}
											setAttributes={setAttributes}
											value={bottomHeight}
											onChange={(value) =>
												setAttributes({ bottomHeight: value })
											}
											min={0}
											max={500}
											displayUnit={false}
										/>
									);
								}

								return <div>{ tabout }</div>;
							} }
						</TabPanel>
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
			<PanelBody
				title={ __(
					'Shape Dividers',
					'ultimate-addons-for-gutenberg'
				) }
				initialOpen={ false }
			>
				<TabPanel
					className="uagb-inspect-tabs uagb-inspect-tabs-col-2"
					activeClass="active-tab"
					tabs={ [
						{
							name: 'top',
							title: __( 'Top', 'ultimate-addons-for-gutenberg' ),
							className: 'uagb-top-tab',
						},
						{
							name: 'bottom',
							title: __(
								'Bottom',
								'ultimate-addons-for-gutenberg'
							),
							className: 'uagb-bottom-tab',
						},
					] }
				>
					{ ( tabName ) => {
						let tabout;
						if ( 'bottom' === tabName.name ) {
							tabout = bottomSettings;
						} else {
							tabout = topSettings;
						}
						return <div>{ tabout }</div>;
					} }
				</TabPanel>
			</PanelBody>
		);
	};
	const borderSettings = () => {
		return (
			<PanelBody
				title={ __( 'Border', 'ultimate-addons-for-gutenberg' ) }
				initialOpen={ false }
			>
				<Border
					setAttributes={setAttributes}
					borderStyle={{
						value: borderStyle,
						label: __(
							"Style",
							"ultimate-addons-for-gutenberg"
						),
					}}
					borderWidth={{
						value: borderWidth,
						label: __(
							"Width",
							"ultimate-addons-for-gutenberg"
						),
					}}
					borderRadius={{
						value: borderRadius,
						label: __(
							"Radius",
							"ultimate-addons-for-gutenberg"
						),
					}}
					borderColor={{
						value: borderColor,
						label: __(
							"Color",
							"ultimate-addons-for-gutenberg"
						),
					}}
					borderHoverColor={{
						value: borderHoverColor,
						label: __(
							"Hover Color",
							"ultimate-addons-for-gutenberg"
						),
					}}
				/>
				<BoxShadowControl
					setAttributes={setAttributes}
					label={__(
						"Box Shadow",
						"ultimate-addons-for-gutenberg"
					)}
					boxShadowColor={{
						value: boxShadowColor,
						label: __(
							"Color",
							"ultimate-addons-for-gutenberg"
						),
					}}
					boxShadowHOffset={{
						value: boxShadowHOffset,
						label: __(
							"Horizontal",
							"ultimate-addons-for-gutenberg"
						),
					}}
					boxShadowVOffset={{
						value: boxShadowVOffset,
						label: __(
							"Vertical",
							"ultimate-addons-for-gutenberg"
						),
					}}
					boxShadowBlur={{
						value: boxShadowBlur,
						label: __(
							"Blur",
							"ultimate-addons-for-gutenberg"
						),
					}}
					boxShadowSpread={{
						value: boxShadowSpread,
						label: __(
							"Spread",
							"ultimate-addons-for-gutenberg"
						),
					}}
					boxShadowPosition={{
						value: boxShadowPosition,
						label: __(
							"Position",
							"ultimate-addons-for-gutenberg"
						),
					}}
				/>
			</PanelBody>
		);
	};

	return (
		<Suspense fallback={ lazyLoader() }>
			{ blockControlSettings() }
			<InspectorControls>
				{ layoutSettings() }
				{ spacingSettings() }
				{ backgroundSettings() }
				{ shapeDividersSettings() }
				{ borderSettings() }
			</InspectorControls>
		</Suspense>
	);
};

export default React.memo( Settings );
