/**
 * External dependencies
 */

import styling from '.././styling';
import { compose } from '@wordpress/compose';
import { __ } from '@wordpress/i18n';
import React, { useState, useEffect, Suspense, lazy } from 'react';
import lazyLoader from '@Controls/lazy-loader';
import TypographyControl from '@Components/typography';
import Border from "@Components/border";
import AdvancedPopColorControl from "@Components/color-control/advanced-pop-color-control.js";
import InspectorTabs from "@Components/inspector-tabs/InspectorTabs.js";
import InspectorTab from "@Components/inspector-tabs/InspectorTab.js";
import SpacingControl from "@Components/spacing-control";
import Range from "@Components/range/Range.js";
import ResponsiveSlider from "@Components/responsive-slider";
import UAGTabsControl from "@Components/tabs";
import MultiButtonsControl from "@Components/multi-buttons-control";
const MAX_POSTS_COLUMNS = 8;

const Settings = lazy( () =>
	import(
		/* webpackChunkName: "chunks/post-carousel/settings" */ './settings'
	)
);
const Render = lazy( () =>
	import( /* webpackChunkName: "chunks/post-carousel/render" */ './render' )
);

import {
	PanelBody,
	Placeholder,
	SelectControl,
	Spinner,
	ToggleControl,
	TextControl,
	RadioControl,
	QueryControls
} from '@wordpress/components';

import { InspectorControls, ColorPalette } from '@wordpress/block-editor';

import { withSelect, withDispatch } from '@wordpress/data';

const UAGBPostCarousel = ( props ) => {
	const [ state, setState ] = useState( {
		isEditing: false,
		innerBlocks: [],
	} );

	useEffect( () => {
		const { block } = props;
		setState( { innerBlocks: block } );
		props.setAttributes( { block_id: props.clientId.substr( 0, 8 ) } );
		const {
			btnVPadding,
			btnHPadding,
			paddingBtnTop,
			paddingBtnBottom,
			paddingBtnRight,
			paddingBtnLeft,
			contentPadding,
			contentPaddingMobile,
			contentPaddingTablet,
			paddingTop,
			paddingBottom,
			paddingLeft,
			paddingRight,
			paddingTopTablet,
			paddingRightTablet,
			paddingBottomTablet,
			paddingLeftTablet,
			paddingTopMobile,
			paddingRightMobile,
			paddingBottomMobile,
			paddingLeftMobile,
		} = props.attributes;

		if (btnVPadding) {
			if (!paddingBtnTop) {
				props.setAttributes({ paddingBtnTop: btnVPadding });
			}
			if (!paddingBtnBottom) {
				props.setAttributes({ paddingBtnBottom: btnVPadding });
			}
		}
		if (btnHPadding) {
			if (!paddingBtnRight) {
				props.setAttributes({ paddingBtnRight: btnHPadding });
			}
			if (!paddingBtnLeft) {
				props.setAttributes({ paddingBtnLeft: btnHPadding });
			}
		}
		if (contentPadding) {
			if (!paddingTop) {
				props.setAttributes({ paddingTop: contentPadding });
			}
			if (!paddingBottom) {
				props.setAttributes({ paddingBottom: contentPadding });
			}
			if (!paddingRight) {
				props.setAttributes({ paddingRight: contentPadding });
			}
			if (!paddingLeft) {
				props.setAttributes({ paddingLeft: contentPadding });
			}
		}
		if (contentPaddingTablet) {
			if (!paddingTopTablet) {
				props.setAttributes({ paddingTopTablet: contentPaddingTablet });
			}
			if (!paddingBottomTablet) {
				props.setAttributes({ paddingBottomTablet: contentPaddingTablet });
			}
			if (!paddingRightTablet) {
				props.setAttributes({ paddingRightTablet: contentPaddingTablet });
			}
			if (!paddingLeftTablet) {
				props.setAttributes({ paddingLeftTablet: contentPaddingTablet });
			}
		}
		if (contentPaddingMobile) {
			if (!paddingTopMobile) {
				props.setAttributes({ paddingTopMobile: contentPaddingMobile });
			}
			if (!paddingBottomMobile) {
				props.setAttributes({ paddingBottomMobile: contentPaddingMobile });
			}
			if (!paddingRightMobile) {
				props.setAttributes({ paddingRightMobile: contentPaddingMobile });
			}
			if (!paddingLeftMobile) {
				props.setAttributes({ paddingLeftMobile: contentPaddingMobile });
			}
		}
		const $style = document.createElement( 'style' );
		$style.setAttribute(
			'id',
			'uagb-post-carousel-style-' + props.clientId.substr( 0, 8 )
		);
		document.head.appendChild( $style );
	}, [] );

	useEffect( () => {
		const equalHeight = props.attributes.equalHeight;
		if ( equalHeight ) {
			uagb_carousel_height( props.clientId.substr( 0, 8 ) );
		} else {
			uagb_carousel_unset_height( props.clientId.substr( 0, 8 ) );
		}

		const element = document.getElementById(
			'uagb-post-carousel-style-' + props.clientId.substr( 0, 8 )
		);
		let css = '';

		if ( null !== element && undefined !== element ) {
			css = styling( props );
			css +=
				'.uagb-block-' +
				props.clientId.substr( 0, 8 ) +
				'.uagb-post-grid ul.slick-dots li.slick-active button:before, .uagb-block-' +
				props.clientId.substr( 0, 8 ) +
				'.uagb-slick-carousel ul.slick-dots li button:before { color: ' +
				props.attributes.arrowColor +
				'; }';
			element.innerHTML = css;
		}
	}, [ props ] );

	const onSelectPostType = ( value ) => {
		const { setAttributes } = props;

		setAttributes( { postType: value } );
		setAttributes( { categories: '' } );
	};

	const onSelectTaxonomyType = ( value ) => {
		const { setAttributes } = props;

		setAttributes( { taxonomyType: value } );
		setAttributes( { categories: '' } );
	};

	const {
		attributes,
		categoriesList,
		setAttributes,
		latestPosts,
		deviceType,
		taxonomyList,
	} = props;
	const {
		displayPostTitle,
		displayPostDate,
		displayPostComment,
		displayPostExcerpt,
		displayPostAuthor,
		displayPostImage,
		displayPostTaxonomy,
		imgSize,
		imgPosition,
		displayPostLink,
		newTab,
		ctaText,
		borderWidth,
		borderStyle,
		borderColor,
		borderHColor,
		borderRadius,
		btnVPadding,
		btnHPadding,
		columns,
		tcolumns,
		mcolumns,
		order,
		orderBy,
		categories,
		postsToShow,
		rowGap,
		columnGap,
		bgColor,
		contentPadding,
		contentPaddingMobile,
		titleColor,
		titleTag,
		titleFontSize,
		titleFontSizeType,
		titleFontSizeMobile,
		titleFontSizeTablet,
		titleFontFamily,
		titleFontWeight,
		titleFontSubset,
		titleLineHeightType,
		titleLineHeight,
		titleLineHeightTablet,
		titleLineHeightMobile,
		titleLoadGoogleFonts,
		metaFontSize,
		metaFontSizeType,
		metaFontSizeMobile,
		metaFontSizeTablet,
		metaFontFamily,
		metaFontWeight,
		metaFontSubset,
		metaLineHeightType,
		metaLineHeight,
		metaLineHeightTablet,
		metaLineHeightMobile,
		metaLoadGoogleFonts,
		excerptFontSize,
		excerptFontSizeType,
		excerptFontSizeTablet,
		excerptFontSizeMobile,
		excerptFontFamily,
		excerptFontWeight,
		excerptFontSubset,
		excerptLineHeightType,
		excerptLineHeight,
		excerptLineHeightTablet,
		excerptLineHeightMobile,
		excerptLoadGoogleFonts,
		ctaFontSize,
		ctaFontSizeType,
		ctaFontSizeTablet,
		ctaFontSizeMobile,
		ctaFontFamily,
		ctaFontWeight,
		ctaFontSubset,
		ctaLineHeightType,
		ctaLineHeight,
		ctaLineHeightTablet,
		ctaLineHeightMobile,
		ctaLoadGoogleFonts,
		metaColor,
		excerptColor,
		ctaColor,
		ctaBgColor,
		ctaHColor,
		ctaBgHColor,
		arrowColor,
		titleBottomSpace,
		imageBottomSpace,
		ctaBottomSpace,
		metaBottomSpace,
		excerptBottomSpace,
		autoplay,
		autoplaySpeed,
		pauseOnHover,
		infiniteLoop,
		transitionSpeed,
		arrowDots,
		arrowSize,
		arrowSizeUnit,
		arrowBorderSize,
		arrowBorderRadius,
		excerptLength,
		overlayOpacity,
		bgOverlayColor,
		linkBox,
		postType,
		taxonomyType,
		equalHeight,
		inheritFromTheme,
		postDisplaytext,
		displayPostContentRadio,
		excludeCurrentPost,
		titleTransform,
		metaLinkTransform,
		excerptTransform,
		ctaTransform,
		titleDecoration,
		metaLinkDecoration,
		excerptDecoration,
		ctaDecoration,
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
		mobilePaddingBtnUnit,
		tabletPaddingBtnUnit,
		spacingLink,
		spacingLinkPadding,
		paddingTop,
		paddingBottom,
		paddingLeft,
		paddingRight,
		paddingTopTablet,
		paddingRightTablet,
		paddingBottomTablet,
		paddingLeftTablet,
		paddingTopMobile,
		paddingRightMobile,
		paddingBottomMobile,
		paddingLeftMobile,
		contentPaddingUnit,
		mobilePaddingUnit,
		tabletPaddingUnit,
		imageBottomSpaceUnit,
		titleBottomSpaceUnit,
		metaBottomSpaceUnit,
		ctaBottomSpaceUnit,
		excerptBottomSpaceUnit,
		rowGapUnit,
		columnGapUnit,
	} = attributes;
	const taxonomyListOptions = [];

	const categoryListOptions = [
		{ value: '', label: __( 'All', 'ultimate-addons-for-gutenberg' ) },
	];

	if ( '' != taxonomyList ) {
		Object.keys( taxonomyList ).map( ( item ) => {
			return taxonomyListOptions.push( {
				value: taxonomyList[ item ].name,
				label: taxonomyList[ item ].label,
			} );
		} );
	}

	if ( '' != categoriesList ) {
		Object.keys( categoriesList ).map( ( item ) => {
			return categoryListOptions.push( {
				value: categoriesList[ item ].id,
				label: categoriesList[ item ].name,
			} );
		} );
	}

	const togglePreview = () => {
		setState( { isEditing: ! state.isEditing } );
		if ( ! state.isEditing ) {
			__( 'Showing All Post Grid Layout.' );
		}
	};

	const hoverSettings = (
		<>
			<p className="uagb-setting-label">
				{ __( 'Hover Color', 'ultimate-addons-for-gutenberg' ) }
				<span className="components-base-control__label">
					<span
						className="component-color-indicator"
						style={ { backgroundColor: ctaHColor } }
					></span>
				</span>
			</p>
			<ColorPalette
				value={ ctaHColor }
				onChange={ ( colorValue ) =>
					setAttributes( { ctaHColor: colorValue } )
				}
				allowReset
			/>
			<p className="uagb-setting-label">
				{ __(
					'Background Hover Color',
					'ultimate-addons-for-gutenberg'
				) }
				<span className="components-base-control__label">
					<span
						className="component-color-indicator"
						style={ { backgroundColor: ctaBgHColor } }
					></span>
				</span>
			</p>
			<ColorPalette
				value={ ctaBgHColor }
				onChange={ ( colorValue ) =>
					setAttributes( { ctaBgHColor: colorValue } )
				}
				allowReset
			/>
			<p className="uagb-setting-label">
				{ __( 'Border Hover Color', 'ultimate-addons-for-gutenberg' ) }
				<span className="components-base-control__label">
					<span
						className="component-color-indicator"
						style={ { backgroundColor: borderHColor } }
					></span>
				</span>
			</p>
			<ColorPalette
				value={ borderHColor }
				onChange={ ( colorValue ) =>
					setAttributes( { borderHColor: colorValue } )
				}
				allowReset
			/>
		</>
	);

	const normalSettings = (
		<>
			<p className="uagb-setting-label">
				{ __( 'Color', 'ultimate-addons-for-gutenberg' ) }
				<span className="components-base-control__label">
					<span
						className="component-color-indicator"
						style={ { backgroundColor: ctaColor } }
					></span>
				</span>
			</p>
			<ColorPalette
				value={ ctaColor }
				onChange={ ( colorValue ) =>
					setAttributes( { ctaColor: colorValue } )
				}
				allowReset
			/>
			<p className="uagb-setting-label">
				{ __( 'Background Color', 'ultimate-addons-for-gutenberg' ) }
				<span className="components-base-control__label">
					<span
						className="component-color-indicator"
						style={ { backgroundColor: ctaBgColor } }
					></span>
				</span>
			</p>
			<ColorPalette
				value={ ctaBgColor }
				onChange={ ( colorValue ) =>
					setAttributes( { ctaBgColor: colorValue } )
				}
				allowReset
			/>
			<p className="uagb-setting-label">
				{ __( 'Border Color', 'ultimate-addons-for-gutenberg' ) }
				<span className="components-base-control__label">
					<span
						className="component-color-indicator"
						style={ { backgroundColor: borderColor } }
					></span>
				</span>
			</p>
			<ColorPalette
				value={ borderColor }
				onChange={ ( colorValue ) =>
					setAttributes( { borderColor: colorValue } )
				}
				allowReset
			/>
		</>
	);

	const getGeneralPanelBody = () => {
			return (
				<PanelBody
					title={ __( 'General', 'ultimate-addons-for-gutenberg' ) }
					initialOpen={ true }
				>
					<SelectControl
						label={ __( 'Post Type', 'ultimate-addons-for-gutenberg' ) }
						value={ postType }
						onChange={ ( value ) => onSelectPostType( value ) }
						options={ uagb_blocks_info.post_types }
					/>
					{ '' != taxonomyList && (
						<SelectControl
							label={ __(
								'Taxonomy',
								'ultimate-addons-for-gutenberg'
							) }
							value={ taxonomyType }
							onChange={ ( value ) => onSelectTaxonomyType( value ) }
							options={ taxonomyListOptions }
						/>
					) }
					{ '' != categoriesList && (
						<>
							<SelectControl
								label={ taxonomyList[ taxonomyType ].label }
								value={ categories }
								onChange={ ( value ) =>
									setAttributes( { categories: value } )
								}
								options={ categoryListOptions }
							/>
						</>
					) }
					<ToggleControl
						label={ __(
							'Exclude Current Post',
							'ultimate-addons-for-gutenberg'
						) }
						checked={ excludeCurrentPost }
						onChange={ () =>
							setAttributes( {
								excludeCurrentPost: ! excludeCurrentPost,
							} )
						}
					/>
					<Range
						label={ __(
							'Number of items',
							'ultimate-addons-for-gutenberg'
						) }
						value={ postsToShow }
						onChange={ ( value ) =>
							setAttributes( { postsToShow: value } )
						}
						setAttributes={setAttributes}
					    displayUnit={false}
						min={ 1 }
						max={ 100 }
					/>
					<MultiButtonsControl
						setAttributes={setAttributes}
						label={__(
							'Order By',
							"ultimate-addons-for-gutenberg"
						)}
						data={{
							value: orderBy,
							label: "orderBy",
						}}
						options={ [
							{
								value: 'date',
								label: __(
									'Date',
									'ultimate-addons-for-gutenberg'
								),
							},
							{
								value: 'title',
								label: __(
									'Title',
									'ultimate-addons-for-gutenberg'
								),
							},
							{
								value: 'rand',
								label: __(
									'Random',
									'ultimate-addons-for-gutenberg'
								),
							},
							{
								value: 'menu_order',
								label: __(
									'Menu Order',
									'ultimate-addons-for-gutenberg'
								),
							},
						] }
					/>
					<MultiButtonsControl
						setAttributes={setAttributes}
						label={__(
							'Order',
							"ultimate-addons-for-gutenberg"
						)}
						data={{
							value: order,
							label: "order",
						}}
						options={ [
							{
								value: 'desc',
								label: __(
									'Descending',
									'ultimate-addons-for-gutenberg'
								),
							},
							{
								value: 'asc',
								label: __(
									'Ascending',
									'ultimate-addons-for-gutenberg'
								),
							},
						] }
					/>
					<ResponsiveSlider
						label={__(
							'Columns',
							"ultimate-addons-for-gutenberg"
						)}
						data={{
							desktop: {
								value: columns,
								label: "columns",
							},
							tablet: {
								value: tcolumns,
								label: "tcolumns",
							},
							mobile: {
								value: mcolumns,
								label: "mcolumns",
							},
						}}
						min={0}
						max={! hasPosts
							? MAX_POSTS_COLUMNS
							: Math.min(
								MAX_POSTS_COLUMNS,
								latestPosts.length
							)}
						displayUnit={false}
						setAttributes={setAttributes}
					/>
					<ToggleControl
						label={ __(
							'Equal Height',
							'ultimate-addons-for-gutenberg'
						) }
						checked={ equalHeight }
						onChange={ () =>
							setAttributes( { equalHeight: ! equalHeight } )
						}
					/>
					<h2>
						{ __(
							'If Posts Not Found',
							'ultimate-addons-for-gutenberg'
						) }
					</h2>
					<TextControl
						autoComplete="off"
						label={ __(
							'Display Message',
							'ultimate-addons-for-gutenberg'
						) }
						value={ postDisplaytext }
						onChange={ ( value ) =>
							setAttributes( { postDisplaytext: value } )
						}
					/>
					<ToggleControl
						label={ __(
							'Inherit Styling from Theme',
							'ultimate-addons-for-gutenberg'
						) }
						checked={ inheritFromTheme }
						onChange={ () =>
							setAttributes( {
								inheritFromTheme: ! inheritFromTheme,
							} )
						}
						help={ __(
							'This will inherit all the Typography and colors for Title, Meta, Excerpt and Read More button from the theme.',
							'ultimate-addons-for-gutenberg'
						) }
					/>
				</PanelBody>
			);
	};

	const getCarouselPanelBody = () => {
		return (
			<PanelBody
				title={ __( 'Carousel', 'ultimate-addons-for-gutenberg' ) }
				initialOpen={ false }
			>
				<ToggleControl
					label={ __(
						'Pause On Hover',
						'ultimate-addons-for-gutenberg'
					) }
					checked={ pauseOnHover }
					onChange={ () =>
						setAttributes( { pauseOnHover: ! pauseOnHover } )
					}
				/>
				<ToggleControl
					label={ __( 'Autoplay', 'ultimate-addons-for-gutenberg' ) }
					checked={ autoplay }
					onChange={ () => setAttributes( { autoplay: ! autoplay } ) }
				/>
				{ autoplay == true && (
					<Range
						label={ __(
							'Autoplay Speed (ms)',
							'ultimate-addons-for-gutenberg'
						) }
						value={ autoplaySpeed }
						onChange={ ( value ) =>
							setAttributes( { autoplaySpeed: value } )
						}
						setAttributes={setAttributes}
					    displayUnit={false}
						min={ 100 }
						max={ 10000 }
					/>
				) }
				<ToggleControl
					label={ __(
						'Infinite Loop',
						'ultimate-addons-for-gutenberg'
					) }
					checked={ infiniteLoop }
					onChange={ () =>
						setAttributes( { infiniteLoop: ! infiniteLoop } )
					}
				/>
				<Range
					label={ __(
						'Transition Speed (ms)',
						'ultimate-addons-for-gutenberg'
					) }
					setAttributes={setAttributes}
					displayUnit={false}
					value={ transitionSpeed }
					onChange={ ( value ) =>
						setAttributes( { transitionSpeed: value } )
					}
					min={ 100 }
					max={ 5000 }
				/>
				<MultiButtonsControl
					setAttributes={setAttributes}
					label={__(
						'Arrows & Dots Type',
						"ultimate-addons-for-gutenberg"
					)}
					data={{
						value: arrowDots,
						label: "arrowDots",
					}}
					options={ [
						{
							value: 'arrows',
							label: __(
								'Arrows',
								'ultimate-addons-for-gutenberg'
							),
						},
						{
							value: 'dots',
							label: __(
								'Dots',
								'ultimate-addons-for-gutenberg'
							),
						},
						{
							value: 'arrows_dots',
							label: __(
								'Both',
								'ultimate-addons-for-gutenberg'
							),
						},
					] }
				/>
			</PanelBody>
		);
	};

	const getImagePanelBody = () => {
		return (
			<PanelBody
				title={ __( 'Image', 'ultimate-addons-for-gutenberg' ) }
				initialOpen={ false }
			>
				<ToggleControl
					label={ __(
						'Show Featured Image',
						'ultimate-addons-for-gutenberg'
					) }
					checked={ displayPostImage }
					onChange={ () =>
						setAttributes( {
							displayPostImage: ! displayPostImage,
						} )
					}
				/>
				{ displayPostImage == true && (
					<SelectControl
						label={ __(
							'Sizes',
							'ultimate-addons-for-gutenberg'
						) }
						value={ imgSize }
						onChange={ ( value ) =>
							setAttributes( { imgSize: value } )
						}
						options={ uagb_blocks_info.image_sizes }
					/>
				) }
				{ displayPostImage == true && (
					<MultiButtonsControl
						setAttributes={setAttributes}
						label={__(
							'Position',
							"ultimate-addons-for-gutenberg"
						)}
						data={{
							value: imgPosition,
							label: "imgPosition",
						}}
						options={ [
							{
								value: 'top',
								label: __(
									'Top',
									'ultimate-addons-for-gutenberg'
								),
							},
							{
								value: 'background',
								label: __(
									'Background',
									'ultimate-addons-for-gutenberg'
								),
							},
						] }
					/>
				) }
				{ displayPostImage == true && imgPosition == 'background' && (
					<ToggleControl
						label={ __(
							'Link Complete Box',
							'ultimate-addons-for-gutenberg'
						) }
						checked={ linkBox }
						onChange={ () =>
							setAttributes( { linkBox: ! linkBox } )
						}
					/>
				) }
			</PanelBody>
		);
	};

	const getContentPanelBody = () => {
		return (
			<PanelBody
				title={ __( 'Content', 'ultimate-addons-for-gutenberg' ) }
				initialOpen={ false }
			>
				<ToggleControl
					label={ __(
						'Show Title',
						'ultimate-addons-for-gutenberg'
					) }
					checked={ displayPostTitle }
					onChange={ () =>
						setAttributes( {
							displayPostTitle: ! displayPostTitle,
						} )
					}
				/>
				<ToggleControl
					label={ __(
						'Show Author',
						'ultimate-addons-for-gutenberg'
					) }
					checked={ displayPostAuthor }
					onChange={ () =>
						setAttributes( {
							displayPostAuthor: ! displayPostAuthor,
						} )
					}
				/>
				<ToggleControl
					label={ __( 'Show Date', 'ultimate-addons-for-gutenberg' ) }
					checked={ displayPostDate }
					onChange={ () =>
						setAttributes( { displayPostDate: ! displayPostDate } )
					}
				/>
				<ToggleControl
					label={ __(
						'Show Comment',
						'ultimate-addons-for-gutenberg'
					) }
					checked={ displayPostComment }
					onChange={ () =>
						setAttributes( {
							displayPostComment: ! displayPostComment,
						} )
					}
				/>
				<ToggleControl
					label={ __(
						'Show Taxonomy',
						'ultimate-addons-for-gutenberg'
					) }
					checked={ displayPostTaxonomy }
					onChange={ () =>
						setAttributes( {
							displayPostTaxonomy: ! displayPostTaxonomy,
						} )
					}
				/>
				<ToggleControl
					label={ __(
						'Show Excerpt',
						'ultimate-addons-for-gutenberg'
					) }
					checked={ displayPostExcerpt }
					onChange={ () =>
						setAttributes( {
							displayPostExcerpt: ! displayPostExcerpt,
						} )
					}
				/>
				{ displayPostExcerpt && (
					<RadioControl
						label={ __( 'Show:', 'ultimate-addons-for-gutenberg' ) }
						selected={ displayPostContentRadio }
						options={ [
							{
								label: __(
									'Excerpt',
									'ultimate-addons-for-gutenberg'
								),
								value: 'excerpt',
							},
							{
								label: __(
									'Full post',
									'ultimate-addons-for-gutenberg'
								),
								value: 'full_post',
							},
						] }
						onChange={ ( value ) =>
							setAttributes( {
								displayPostContentRadio: value,
							} )
						}
					/>
				) }
				{ displayPostExcerpt &&
					displayPostContentRadio === 'excerpt' && (
						<Range
							label={__(
								'Max number of words in excerpt',
								"ultimate-addons-for-gutenberg"
							)}
							setAttributes={setAttributes}
							value={excerptLength}
							onChange={(value) =>
								setAttributes({ excerptLength: value })
							}
							min={1}
							max={100}
							displayUnit = {false}
						/>
					) }
			</PanelBody>
		);
	};

	const getReadMoreLinkPanelBody = () => {
		return (
			<PanelBody
				title={ __(
					'Read More Link',
					'ultimate-addons-for-gutenberg'
				) }
				initialOpen={ false }
			>
				<ToggleControl
					label={ __(
						'Show Read More Link',
						'ultimate-addons-for-gutenberg'
					) }
					checked={ displayPostLink }
					onChange={ () =>
						setAttributes( { displayPostLink: ! displayPostLink } )
					}
				/>
				{ displayPostLink && (
					<>
						<ToggleControl
							label={ __(
								'Open links in New Tab',
								'ultimate-addons-for-gutenberg'
							) }
							checked={ newTab }
							onChange={ () =>
								setAttributes( { newTab: ! newTab } )
							}
						/>
						<TextControl
							label={ __(
								'Text',
								'ultimate-addons-for-gutenberg'
							) }
							value={ ctaText }
							onChange={ ( value ) =>
								setAttributes( { ctaText: value } )
							}
						/>
					</>
				) }
			</PanelBody>
		);;
	};

	const spacingSettings = () => {
		return (
			<PanelBody
				title={ __( 'Blog Settings', 'ultimate-addons-for-gutenberg' ) }
				initialOpen={ false }
			>
				<AdvancedPopColorControl
					label={__(
						'Background Color',
						"ultimate-addons-for-gutenberg"
					)}
					colorValue={bgColor}
					onColorChange={(value) =>
						setAttributes({ bgColor: value })
					}
				/>
				<Range
					label={__(
						'Row Gap',
						"ultimate-addons-for-gutenberg"
					)}
					setAttributes={setAttributes}
					value={rowGap}
					onChange={(value) =>
						setAttributes({ rowGap: value })
					}
					min={0}
					max={50}
					unit={{
						value: rowGapUnit,
						label: "rowGapUnit",
					}}
				/>
				<Range
					label={__(
						'Column Gap',
						"ultimate-addons-for-gutenberg"
					)}
					setAttributes={setAttributes}
					value={columnGap}
					onChange={(value) =>
						setAttributes({ columnGap: value })
					}
					min={0}
					max={50}
					unit={{
						value: columnGapUnit,
						label: "columnGapUnit",
					}}
				/>
				<SpacingControl
					{...props}
					label={__(
						"Content Padding",
						"ultimate-addons-for-gutenberg"
					)}
					valueTop={{
						value: paddingTop,
						label: "paddingTop",
					}}
					valueRight={{
						value: paddingRight,
						label: "paddingRight",
					}}
					valueBottom={{
						value: paddingBottom,
						label: "paddingBottom",
					}}
					valueLeft={{
						value: paddingLeft,
						label: "paddingLeft",
					}}
					valueTopTablet={{
						value: paddingTopTablet,
						label: "paddingTopTablet",
					}}
					valueRightTablet={{
						value: paddingRightTablet,
						label: "paddingRightTablet",
					}}
					valueBottomTablet={{
						value: paddingBottomTablet,
						label: "paddingBottomTablet",
					}}
					valueLeftTablet={{
						value: paddingLeftTablet,
						label: "paddingLeftTablet",
					}}
					valueTopMobile={{
						value: paddingTopMobile,
						label: "paddingTopMobile",
					}}
					valueRightMobile={{
						value: paddingRightMobile,
						label: "paddingRightMobile",
					}}
					valueBottomMobile={{
						value: paddingBottomMobile,
						label: "paddingBottomMobile",
					}}
					valueLeftMobile={{
						value: paddingLeftMobile,
						label: "paddingLeftMobile",
					}}
					unit={{
						value: contentPaddingUnit,
						label: "contentPaddingUnit",
					}}
					mUnit={{
						value: mobilePaddingUnit,
						label: "mobilePaddingUnit",
					}}
					tUnit={{
						value: tabletPaddingUnit,
						label: "tabletPaddingUnit",
					}}
					deviceType={deviceType}
					attributes={attributes}
					setAttributes={setAttributes}
					link={{
						value: spacingLinkPadding,
						label: "spacingLinkPadding",
					}}
				/>
			</PanelBody>
		);
	};

	const imageStyle = () => {
	return displayPostImage == true && imgPosition == 'background' && (
		<>
			<AdvancedPopColorControl
				label={__(
					'Background Overlay Color',
					"ultimate-addons-for-gutenberg"
				)}
				colorValue={bgOverlayColor}
				onColorChange={(value) =>
					setAttributes({ bgOverlayColor: value })
				}
			/>
			<Range
				label={__(
					'Overlay Opacity',
					"ultimate-addons-for-gutenberg"
				)}
				setAttributes={setAttributes}
				value={overlayOpacity}
				onChange={(value) =>
					setAttributes({ overlayOpacity: value })
				}
				min={0}
				max={100}
			/>
			<Range
				label={__(
					'Image Bottom Spacing',
					"ultimate-addons-for-gutenberg"
				)}
				setAttributes={setAttributes}
				value={imageBottomSpace}
				onChange={(value) =>
					setAttributes({ imageBottomSpace: value })
				}
				min={0}
				max={50}
				unit={{
					value: imageBottomSpaceUnit,
					label: "imageBottomSpaceUnit",
				}}
			/>
		</>
	)
	};
	const titleStyle = () => {
	return  <PanelBody
				title={ __( 'Title', 'ultimate-addons-for-gutenberg' ) }
				initialOpen={ false }
			>
				<MultiButtonsControl
					setAttributes={setAttributes}
					label={__(
						"HTML Tag",
						"ultimate-addons-for-gutenberg"
					)}
					data={{
						value: titleTag,
						label: "titleTag",
					}}
					options={[
						{ value: "h1", label: __("H1", "ultimate-addons-for-gutenberg") },
						{ value: "h2", label: __("H2", "ultimate-addons-for-gutenberg") },
						{ value: "h3", label: __("H3", "ultimate-addons-for-gutenberg") },
						{ value: "h4", label: __("H4", "ultimate-addons-for-gutenberg") },
						{ value: "h5", label: __("H5", "ultimate-addons-for-gutenberg") },
						{ value: "h6", label: __("H6", "ultimate-addons-for-gutenberg") },
						{ value: "span", label: __("Span", "ultimate-addons-for-gutenberg") },
						{ value: "p", label: __("P", "ultimate-addons-for-gutenberg") },
					]}
				/>
				{ ! inheritFromTheme && (
					<>
						<AdvancedPopColorControl
							label={__(
								'Color',
								"ultimate-addons-for-gutenberg"
							)}
							colorValue={titleColor}
							onColorChange={(value) =>
								setAttributes({ titleColor: value })
							}
						/>
						<TypographyControl
							label={ __(
							'Typography',
							'ultimate-addons-for-gutenberg'
							) }
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
							fontSubset={ {
								value: titleFontSubset,
								label: 'titleFontSubset',
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
							transform={{
								value: titleTransform,
								label: "titleTransform",
							}}
							decoration={{
								value: titleDecoration,
								label: "titleDecoration",
							}}
						/>
						<Range
							label={__(
								'Bottom Spacing',
								"ultimate-addons-for-gutenberg"
							)}
							setAttributes={setAttributes}
							value={titleBottomSpace}
							onChange={(value) =>
								setAttributes({ titleBottomSpace: value })
							}
							min={0}
							max={50}
							unit={{
								value: titleBottomSpaceUnit,
								label: "titleBottomSpaceUnit",
							}}
						/>
					</>
				)}
			</PanelBody>
	}
	const metaStyle = () => {
	return  <PanelBody
					title={ __( 'Meta', 'ultimate-addons-for-gutenberg' ) }
					initialOpen={ false }
				>
				<AdvancedPopColorControl
					label={__(
						'Color',
						"ultimate-addons-for-gutenberg"
					)}
					colorValue={metaColor}
					onColorChange={(value) =>
						setAttributes({ metaColor: value })
					}
				/>

				<TypographyControl
					label={ __(
						'Typography',
						'ultimate-addons-for-gutenberg'
					) }
					attributes={ attributes }
					setAttributes={ setAttributes }
					loadGoogleFonts={ {
						value: metaLoadGoogleFonts,
						label: 'metaLoadGoogleFonts',
					} }
					fontFamily={ {
						value: metaFontFamily,
						label: 'metaFontFamily',
					} }
					fontWeight={ {
						value: metaFontWeight,
						label: 'metaFontWeight',
					} }
					fontSubset={ {
						value: metaFontSubset,
						label: 'metaFontSubset',
					} }
					fontSizeType={ {
						value: metaFontSizeType,
						label: 'metaFontSizeType',
					} }
					fontSize={ {
						value: metaFontSize,
						label: 'metaFontSize',
					} }
					fontSizeMobile={ {
						value: metaFontSizeMobile,
						label: 'metaFontSizeMobile',
					} }
					fontSizeTablet={ {
						value: metaFontSizeTablet,
						label: 'metaFontSizeTablet',
					} }
					lineHeightType={ {
						value: metaLineHeightType,
						label: 'metaLineHeightType',
					} }
					lineHeight={ {
						value: metaLineHeight,
						label: 'metaLineHeight',
					} }
					lineHeightMobile={ {
						value: metaLineHeightMobile,
						label: 'metaLineHeightMobile',
					} }
					lineHeightTablet={ {
						value: metaLineHeightTablet,
						label: 'metaLineHeightTablet',
					} }
					transform={{
						value: metaLinkTransform,
						label: "metaLinkTransform",
					}}
					decoration={{
						value: metaLinkDecoration,
						label: "metaLinkDecoration",
					}}
				/>

				<Range
					label={__(
					'Bottom Spacing',
					"ultimate-addons-for-gutenberg"
				)}
				setAttributes={setAttributes}
				value={metaBottomSpace}
				onChange={(value) =>
					setAttributes({ metaBottomSpace: value })
				}
				min={0}
				max={50}
				unit={{
					value: metaBottomSpaceUnit,
					label: "metaBottomSpaceUnit",
				}}
				/>
			</PanelBody>
	}
	const excerptStyle = () => {
	return <PanelBody
				title={ __( 'Excerpt', 'ultimate-addons-for-gutenberg' ) }
				initialOpen={ false }
			>
				<AdvancedPopColorControl
					label={__(
						'Color',
						"ultimate-addons-for-gutenberg"
					)}
					colorValue={excerptColor}
					onColorChange={(value) =>
						setAttributes({ excerptColor: value })
					}
				/>
					<TypographyControl
					label={ __(
						'Typography',
						'ultimate-addons-for-gutenberg'
					) }
					attributes={ attributes }
					setAttributes={ setAttributes }
					loadGoogleFonts={ {
						value: excerptLoadGoogleFonts,
						label: 'excerptLoadGoogleFonts',
					} }
					fontFamily={ {
						value: excerptFontFamily,
						label: 'excerptFontFamily',
					} }
					fontWeight={ {
						value: excerptFontWeight,
						label: 'excerptFontWeight',
					} }
					fontSubset={ {
						value: excerptFontSubset,
						label: 'excerptFontSubset',
					} }
					fontSizeType={ {
						value: excerptFontSizeType,
						label: 'excerptFontSizeType',
					} }
					fontSize={ {
						value: excerptFontSize,
						label: 'excerptFontSize',
					} }
					fontSizeMobile={ {
						value: excerptFontSizeMobile,
						label: 'excerptFontSizeMobile',
					} }
					fontSizeTablet={ {
						value: excerptFontSizeTablet,
						label: 'excerptFontSizeTablet',
					} }
					lineHeightType={ {
						value: excerptLineHeightType,
						label: 'excerptLineHeightType',
					} }
					lineHeight={ {
						value: excerptLineHeight,
						label: 'excerptLineHeight',
					} }
					lineHeightMobile={ {
						value: excerptLineHeightMobile,
						label: 'excerptLineHeightMobile',
					} }
					lineHeightTablet={ {
						value: excerptLineHeightTablet,
						label: 'excerptLineHeightTablet',
					} }
					transform={{
						value: excerptTransform,
						label: "excerptTransform",
					}}
					decoration={{
						value: excerptDecoration,
						label: "excerptDecoration",
					}}
				/>
				<Range
					label={__(
						'Bottom Spacing',
						"ultimate-addons-for-gutenberg"
					)}
					setAttributes={setAttributes}
					value={excerptBottomSpace}
					onChange={(value) =>
						setAttributes({ excerptBottomSpace: value })
					}
					min={0}
					max={50}
					unit={{
						value: excerptBottomSpaceUnit,
						label: "excerptBottomSpaceUnit",
					}}
				/>

			</PanelBody>
	}
	const readMoreLinkStyleSettings = () => {

	return (
		<PanelBody
			title={ __(
				'Read More Link',
				'ultimate-addons-for-gutenberg'
			) }
			initialOpen={ false }
		>
			<UAGTabsControl
				tabs={[
				{
					name: "normal",
					title: __(
						"Normal",
						"ultimate-addons-for-gutenberg"
					),
				},
				{
					name: "hover",
					title: __(
						"Hover",
						"ultimate-addons-for-gutenberg"
					),
				},
				]}
				normal={<>
				<AdvancedPopColorControl
					label={__(
						'Color',
						"ultimate-addons-for-gutenberg"
					)}
					colorValue={ctaColor}
					onColorChange={(value) =>
						setAttributes({ ctaColor: value })
					}
				/>
				<AdvancedPopColorControl
					label={__(
						'Background Color',
						"ultimate-addons-for-gutenberg"
					)}
					colorValue={ctaBgColor}
					onColorChange={(value) =>
						setAttributes({ ctaBgColor: value })
					}
				/></>}
				hover={<>
				<AdvancedPopColorControl
				label={__(
					'Color',
					"ultimate-addons-for-gutenberg"
				)}
				colorValue={ctaHColor}
				onColorChange={(value) =>
					setAttributes({ ctaHColor: value })
				}
				/>
				<AdvancedPopColorControl
				label={__(
					'Background Color',
					"ultimate-addons-for-gutenberg"
				)}
				colorValue={ctaBgHColor}
				onColorChange={(value) =>
					setAttributes({ ctaBgHColor: value })
				}
				/></>}
				disableBottomSeparator={false}
			/>
			<TypographyControl
				label={ __(
					'Typography',
					'ultimate-addons-for-gutenberg'
				) }
				attributes={ attributes }
				setAttributes={ setAttributes }
				loadGoogleFonts={ {
					value: ctaLoadGoogleFonts,
					label: 'ctaLoadGoogleFonts',
				} }
				fontFamily={ {
					value: ctaFontFamily,
					label: 'ctaFontFamily',
				} }
				fontWeight={ {
					value: ctaFontWeight,
					label: 'ctaFontWeight',
				} }
				fontSubset={ {
					value: ctaFontSubset,
					label: 'ctaFontSubset',
				} }
				fontSizeType={ {
					value: ctaFontSizeType,
					label: 'ctaFontSizeType',
				} }
				fontSize={ {
					value: ctaFontSize,
					label: 'ctaFontSize',
				} }
				fontSizeMobile={ {
					value: ctaFontSizeMobile,
					label: 'ctaFontSizeMobile',
				} }
				fontSizeTablet={ {
					value: ctaFontSizeTablet,
					label: 'ctaFontSizeTablet',
				} }
				lineHeightType={ {
					value: ctaLineHeightType,
					label: 'ctaLineHeightType',
				} }
				lineHeight={ {
					value: ctaLineHeight,
					label: 'ctaLineHeight',
				} }
				lineHeightMobile={ {
					value: ctaLineHeightMobile,
					label: 'ctaLineHeightMobile',
				} }
				lineHeightTablet={ {
					value: ctaLineHeightTablet,
					label: 'ctaLineHeightTablet',
				} }
				transform={{
					value: ctaTransform,
					label: "ctaTransform",
				}}
				decoration={{
					value: ctaDecoration,
					label: "ctaDecoration",
				}}
			/>
			<Range
				label={__(
					'Bottom Spacing',
					"ultimate-addons-for-gutenberg"
				)}
				setAttributes={setAttributes}
				value={ctaBottomSpace}
				onChange={(value) =>
					setAttributes({ ctaBottomSpace: value })
				}
				min={0}
				max={500}
				unit={{
					value: ctaBottomSpaceUnit,
					label: "ctaBottomSpaceUnit",
				}}
			/>
			<Border
				disableBottomSeparator={true}
					setAttributes={setAttributes}
					borderStyle={{
						value: borderStyle,
						label: 'borderStyle',
						title: __(
							"Border Style",
							"ultimate-addons-for-gutenberg"
						),
					}}
					borderWidth={{
						value: borderWidth,
						label: 'borderWidth',
						title: __(
							"Border Width",
							"ultimate-addons-for-gutenberg"
						),
					}}
					borderRadius={{
						value: borderRadius,
						label: 'borderRadius',
						title: __(
							"Border Radius",
							"ultimate-addons-for-gutenberg"
						),
					}}
					borderColor={{
						value: borderColor,
						label: 'borderColor',
						title: __(
							"Border Color",
							"ultimate-addons-for-gutenberg"
						),
					}}
					borderHoverColor={{
						value: borderHColor,
						label: 'borderHColor',
						title: __(
							"Border Hover Color",
							"ultimate-addons-for-gutenberg"
						),
					}}
				/>
			<SpacingControl
				{...props}
				label={__(
					"Padding",
					"ultimate-addons-for-gutenberg"
				)}
				valueTop={{
					value: paddingBtnTop,
					label: "paddingBtnTop",
				}}
				valueRight={{
					value: paddingBtnRight,
					label: "paddingBtnRight",
				}}
				valueBottom={{
					value: paddingBtnBottom,
					label: "paddingBtnBottom",
				}}
				valueLeft={{
					value: paddingBtnLeft,
					label: "paddingBtnLeft",
				}}
				valueTopTablet={{
					value: paddingBtnTopTablet,
					label: "paddingBtnTopTablet",
				}}
				valueRightTablet={{
					value: paddingBtnRightTablet,
					label: "paddingBtnRightTablet",
				}}
				valueBottomTablet={{
					value: paddingBtnBottomTablet,
					label: "paddingBtnBottomTablet",
				}}
				valueLeftTablet={{
					value: paddingBtnLeftTablet,
					label: "paddingBtnLeftTablet",
				}}
				valueTopMobile={{
					value: paddingBtnTopMobile,
					label: "paddingBtnTopMobile",
				}}
				valueRightMobile={{
					value: paddingBtnRightMobile,
					label: "paddingBtnRightMobile",
				}}
				valueBottomMobile={{
					value: paddingBtnBottomMobile,
					label: "paddingBtnBottomMobile",
				}}
				valueLeftMobile={{
					value: paddingBtnLeftMobile,
					label: "paddingBtnLeftMobile",
				}}
				unit={{
					value: paddingBtnUnit,
					label: "paddingBtnUnit",
				}}
				mUnit={{
					value: mobilePaddingBtnUnit,
					label: "mobilePaddingBtnUnit",
				}}
				tUnit={{
					value: tabletPaddingBtnUnit,
					label: "tabletPaddingBtnUnit",
				}}
				deviceType={deviceType}
				attributes={attributes}
				setAttributes={setAttributes}
				link={{
					value: spacingLink,
					label: "spacingLink",
				}}
			/>
		</PanelBody>
	);
	};
	const carouselStyle = () => {
		return <PanelBody
					title={ __( 'Arrow', 'ultimate-addons-for-gutenberg' ) }
					initialOpen={ false }
				>
					<Range
						label={ __(
							'Size',
							'ultimate-addons-for-gutenberg'
						) }
						value={ arrowSize }
						onChange={ ( value ) =>
							setAttributes( { arrowSize: value } )
						}
						min={ 0 }
						max={ 50 }
						setAttributes={setAttributes}
						displayUnit={false}
						unit={{
							value: arrowSizeUnit,
							label: "arrowSizeUnit",
						}}
					/>
					<Range
						label={ __(
							'Border Size',
							'ultimate-addons-for-gutenberg'
						) }
						value={ arrowBorderSize }
						onChange={ ( value ) =>
							setAttributes( { arrowBorderSize: value } )
						}
						min={ 0 }
						max={ 50 }
						setAttributes={setAttributes}
						displayUnit={false}
					/>
					<Range
						label={ __(
							'Border Radius',
							'ultimate-addons-for-gutenberg'
						) }
						setAttributes={setAttributes}
						displayUnit={false}
						value={ arrowBorderRadius }
						onChange={ ( value ) =>
							setAttributes( {
								arrowBorderRadius: value,
							} )
						}
						min={ 0 }
						max={ 50 }
					/>
				</PanelBody>
	}
	const inspectorControls = (
		<InspectorControls>
			<InspectorTabs>
				<InspectorTab key={"general"}>
					{ getGeneralPanelBody() }
					{ getCarouselPanelBody() }
					{ getImagePanelBody() }
					{ getContentPanelBody() }
					{ getReadMoreLinkPanelBody() }
				</InspectorTab>
				<InspectorTab key={"style"}>
				{ ! inheritFromTheme && (
					<>
						{ displayPostTitle && (
							titleStyle()
						)}
						{ ( displayPostAuthor ||
						displayPostDate ||
						displayPostComment ||
						displayPostTaxonomy ) && (
							metaStyle()
						)}
						{ displayPostExcerpt && (
							excerptStyle()
						)}
						{ displayPostLink && (
							readMoreLinkStyleSettings()
						)}
						</>
					)}
					{displayPostImage && (
						imageStyle()
					)}
					{ spacingSettings() }
					{ 'dots' != arrowDots &&  carouselStyle()}
				</InspectorTab>
				<InspectorTab key={"advance"}></InspectorTab>
			</InspectorTabs>
		</InspectorControls>

	);

	const hasPosts = Array.isArray( latestPosts ) && latestPosts.length;

	if ( ! hasPosts ) {
		return (
			<>
				{ inspectorControls }
				<Placeholder
					icon="admin-post"
					label={
						uagb_blocks_info.blocks[ 'uagb/post-carousel' ].title
					}
				>
					{ ! Array.isArray( latestPosts ) ? (
						<Spinner />
					) : (
						postDisplaytext
					) }
				</Placeholder>
			</>
		);
	}

	return (
		<Suspense fallback={ lazyLoader() }>
			<Settings
				state={ state }
				togglePreview={ togglePreview }
				inspectorControls={ inspectorControls }
				parentProps={ props }
			/>
			<Render
				parentProps={ props }
				state={ state }
				setState={ setState }
				togglePreview={ togglePreview }
			/>
		</Suspense>
	);
};

export default compose(
	withSelect( ( select, props ) => {
		const {
			categories,
			postsToShow,
			order,
			orderBy,
			postType,
			taxonomyType,
			excludeCurrentPost,
		} = props.attributes;
		const { getEntityRecords } = select( 'core' );
		const { __experimentalGetPreviewDeviceType = null } = select(
			'core/edit-post'
		);

		const deviceType = __experimentalGetPreviewDeviceType
			? __experimentalGetPreviewDeviceType()
			: null;
		const allTaxonomy = uagb_blocks_info.all_taxonomy;
		const currentTax = allTaxonomy[ postType ];

		let categoriesList = [];
		let rest_base = '';

		if ( 'undefined' !== typeof currentTax ) {
			if ( 'undefined' !== typeof currentTax.taxonomy[ taxonomyType ] ) {
				rest_base =
					currentTax.taxonomy[ taxonomyType ].rest_base == false ||
					currentTax.taxonomy[ taxonomyType ].rest_base == null
						? currentTax.taxonomy[ taxonomyType ].name
						: currentTax.taxonomy[ taxonomyType ].rest_base;
			}

			if ( '' != taxonomyType ) {
				if (
					'undefined' !== typeof currentTax.terms &&
					'undefined' !== typeof currentTax.terms[ taxonomyType ]
				) {
					categoriesList = currentTax.terms[ taxonomyType ];
				}
			}
		}

		const latestPostsQuery = {
			order,
			orderby: orderBy,
			per_page: postsToShow,
		};

		if ( excludeCurrentPost ) {
			latestPostsQuery.exclude = select(
				'core/editor'
			).getCurrentPostId();
		}
		const category = [];
		const temp = parseInt( categories );
		category.push( temp );
		const catlenght = categoriesList.length;
		for ( let i = 0; i < catlenght; i++ ) {
			if ( categoriesList[ i ].id == temp ) {
				if ( categoriesList[ i ].child.length !== 0 ) {
					categoriesList[ i ].child.forEach( ( element ) => {
						category.push( element );
					} );
				}
			}
		}
		const { getBlocks } = select( 'core/block-editor' );
		if ( undefined !== categories && '' !== categories ) {
			latestPostsQuery[ rest_base ] =
				undefined === categories || '' === categories
					? categories
					: category;
		}
		return {
			latestPosts: getEntityRecords(
				'postType',
				postType,
				latestPostsQuery
			),
			categoriesList,
			deviceType,
			taxonomyList:
				'undefined' !== typeof currentTax ? currentTax.taxonomy : [],
			block: getBlocks( props.clientId ),
		};
	} ),
	withDispatch( ( dispatch ) => {
		const { replaceInnerBlocks } = dispatch( 'core/block-editor' );
		return {
			replaceInnerBlocks,
		};
	} )
)( UAGBPostCarousel );
