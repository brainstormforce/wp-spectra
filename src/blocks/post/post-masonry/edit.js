/**
 * External dependencies
 */
 import UAGB_Block_Icons from '@Controls/block-icons';
 import React, { useState, useEffect, lazy, Suspense } from 'react';
 import { __ } from '@wordpress/i18n';
 import lazyLoader from '@Controls/lazy-loader';
 import styling from '.././styling';
 import { compose } from '@wordpress/compose';
 import TypographyControl from '@Components/typography';
 import ColumnResponsive from '@Components/typography/column-responsive';
 import Border from "../../../components/border";
 import AdvancedPopColorControl from "../../../components/color-control/advanced-pop-color-control.js";
 import InspectorTabs from "../../../components/inspector-tabs/InspectorTabs.js";
 import InspectorTab from "../../../components/inspector-tabs/InspectorTab.js";
 import SpacingControl from "../../../components/spacing-control";
 import Range from "../../../components/range/Range.js";
 import ResponsiveSlider from "../../../components/responsive-slider";
 
 const Settings = lazy( () =>
	 import(
		 /* webpackChunkName: "chunks/post-masonry/settings" */ './settings'
	 )
 );
 
 const Render = lazy( () =>
	 import( /* webpackChunkName: "chunks/post-masonry/render" */ './render' )
 );
 
 const MAX_POSTS_COLUMNS = 8;
 
 import {
	 PanelBody,
	 Placeholder,
	 QueryControls,
	 RangeControl,
	 SelectControl,
	 Spinner,
	 ToggleControl,
	 TabPanel,
	 ButtonGroup,
	 Button,
	 Dashicon,
	 TextControl,
	 RadioControl,
 } from '@wordpress/components';
 
 import { InspectorControls, ColorPalette } from '@wordpress/block-editor';
 
 import { withSelect, withDispatch } from '@wordpress/data';
 
 const UAGBPostMasonry = ( props ) => {
	 const [ state, setState ] = useState( {
		 isEditing: false,
		 innerBlocks: [],
	 } );
 
	 useEffect( () => {
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
			 'uagb-post-masonry-style-' + props.clientId.substr( 0, 8 )
		 );
		 document.head.appendChild( $style );
	 }, [] );
 
	 useEffect( () => {
		 const element = document.getElementById(
			 'uagb-post-masonry-style-' + props.clientId.substr( 0, 8 )
		 );
 
		 if ( null !== element && undefined !== element ) {
			 element.innerHTML = styling( props );
		 }
	 }, [ props ] );
 
	 const togglePreview = () => {
		 setState( { isEditing: ! state.isEditing } );
		 if ( ! state.isEditing ) {
			 __( 'Showing All Post Masonry Layout.' );
		 }
	 };
 
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
		 imageBottomSpace,
		 ctaBottomSpace,
		 titleBottomSpace,
		 metaBottomSpace,
		 excerptBottomSpace,
		 excerptLength,
		 overlayOpacity,
		 bgOverlayColor,
		 linkBox,
		 postType,
		 taxonomyType,
		 inheritFromTheme,
		 postDisplaytext,
		 paginationType,
		 paginationEventType,
		 buttonText,
		 paginationAlign,
		 paginationTextColor,
		 paginationTextHoverColor,
		 paginationMasonryBgColor,
		 paginationBgHoverColor,
		 paginationMasonryBorderStyle,
		 paginationMasonryBorderWidth,
		 paginationMasonryBorderRadius,
		 paginationMasonryBorderColor,
		 paginationFontSize,
		 loaderColor,
		 loaderSize,
		 paginationButtonPaddingType,
		 vpaginationButtonPaddingMobile,
		 vpaginationButtonPaddingTablet,
		 vpaginationButtonPaddingDesktop,
		 hpaginationButtonPaddingMobile,
		 hpaginationButtonPaddingTablet,
		 hpaginationButtonPaddingDesktop,
		 displayPostContentRadio,
		 excludeCurrentPost,
		 rowGapUnit,
		 columnGapUnit,
		 imageBottomSpaceUnit,
		 titleBottomSpaceUnit,
		 metaBottomSpaceUnit,
		 ctaBottomSpaceUnit,
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
		paddingUnit,
		mobilePaddingUnit,
		tabletPaddingUnit,
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
	const generalSettings = () => {
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
				<QueryControls
						{ ...{ order, orderBy } }
						numberOfItems={ postsToShow }
						onNumberOfItemsChange={ ( value ) =>
							setAttributes( { postsToShow: value } )
						}
					/>
				<SelectControl
					label={ __( 'Order By' ) }
					value={ orderBy }
					onChange={ ( value ) =>
						setAttributes( { orderBy: value } )
					}
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
				<SelectControl
					label={ __( 'Order' ) }
					value={ order }
					onChange={ ( value ) => setAttributes( { order: value } ) }
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
				{ 'infinite' === paginationType &&
						'button' === paginationEventType && (
							<TextControl
								autoComplete="off"
								label={ __(
									'Button Text',
									'ultimate-addons-for-gutenberg'
								) }
								value={ buttonText }
								onChange={ ( value ) =>
									setAttributes( { buttonText: value } )
								}
							/>
						) }
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
	const paginationSettings = () => {
		if ( 'infinite' === paginationType ) {
			return (
				<PanelBody
					title={ __(
						'Pagination',
						'ultimate-addons-for-gutenberg'
					) }
					initialOpen={ false }
					className="uagb__url-panel-body"
				>
					{ 'button' === paginationEventType && (
						<>
							<h2>
								{ ' ' }
								{ __(
									'Alignment',
									'ultimate-addons-for-gutenberg'
								) }
							</h2>
							<Button
								key={ 'left' }
								icon="editor-alignleft"
								label="Left"
								onClick={ () =>
									setAttributes( { paginationAlign: 'left' } )
								}
								aria-pressed={ 'left' === paginationAlign }
								isPrimary={ 'left' === paginationAlign }
							/>
							<Button
								key={ 'center' }
								icon="editor-aligncenter"
								label="Right"
								onClick={ () =>
									setAttributes( {
										paginationAlign: 'center',
									} )
								}
								aria-pressed={ 'center' === paginationAlign }
								isPrimary={ 'center' === paginationAlign }
							/>
							<Button
								key={ 'right' }
								icon="editor-alignright"
								label="Right"
								onClick={ () =>
									setAttributes( {
										paginationAlign: 'right',
									} )
								}
								aria-pressed={ 'right' === paginationAlign }
								isPrimary={ 'right' === paginationAlign }
							/>
							<h2>
								{ ' ' }
								{ __(
									'Font Size (px) ',
									'ultimate-addons-for-gutenberg'
								) }{ ' ' }
							</h2>
							<RangeControl
								value={ paginationFontSize }
								onChange={ ( value ) =>
									setAttributes( {
										paginationFontSize: value,
									} )
								}
								min={ 0 }
								max={ 100 }
								allowReset
							/>
							<TabPanel
								className="uagb-size-type-field-tabs uagb-size-type-field__common-tabs uagb-inline-margin"
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
														isPrimary={
															paginationButtonPaddingType ===
															'px'
														}
														aria-pressed={
															paginationButtonPaddingType ===
															'px'
														}
														onClick={ () =>
															setAttributes( {
																paginationButtonPaddingType:
																	'px',
															} )
														}
													>
														{ 'px' }
													</Button>
													<Button
														key={ '%' }
														className="uagb-size-btn"
														isSmall
														isPrimary={
															paginationButtonPaddingType ===
															'%'
														}
														aria-pressed={
															paginationButtonPaddingType ===
															'%'
														}
														onClick={ () =>
															setAttributes( {
																paginationButtonPaddingType:
																	'%',
															} )
														}
													>
														{ '%' }
													</Button>
												</ButtonGroup>
												<h2>
													{ __(
														'Padding',
														'ultimate-addons-for-gutenberg'
													) }
												</h2>
												<RangeControl
													label={
														UAGB_Block_Icons.vertical_spacing
													}
													className={
														'uagb-margin-control'
													}
													value={
														vpaginationButtonPaddingMobile
													}
													onChange={ ( value ) =>
														setAttributes( {
															vpaginationButtonPaddingMobile: value,
														} )
													}
													min={ 0 }
													max={ 100 }
													allowReset
												/>
												<RangeControl
													label={
														UAGB_Block_Icons.horizontal_spacing
													}
													className={
														'uagb-margin-control'
													}
													value={
														hpaginationButtonPaddingMobile
													}
													onChange={ ( value ) =>
														setAttributes( {
															hpaginationButtonPaddingMobile: value,
														} )
													}
													min={ 0 }
													max={ 100 }
													allowReset
												/>
											</>
										);
									} else if ( 'tablet' === tab.name ) {
										tabout = (
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
														isPrimary={
															paginationButtonPaddingType ===
															'px'
														}
														aria-pressed={
															paginationButtonPaddingType ===
															'px'
														}
														onClick={ () =>
															setAttributes( {
																paginationButtonPaddingType:
																	'px',
															} )
														}
													>
														{ 'px' }
													</Button>
													<Button
														key={ '%' }
														className="uagb-size-btn"
														isSmall
														isPrimary={
															paginationButtonPaddingType ===
															'%'
														}
														aria-pressed={
															paginationButtonPaddingType ===
															'%'
														}
														onClick={ () =>
															setAttributes( {
																paginationButtonPaddingType:
																	'%',
															} )
														}
													>
														{ '%' }
													</Button>
												</ButtonGroup>
												<h2>
													{ __(
														'Padding',
														'ultimate-addons-for-gutenberg'
													) }
												</h2>
												<RangeControl
													label={
														UAGB_Block_Icons.vertical_spacing
													}
													className={
														'uagb-margin-control'
													}
													value={
														vpaginationButtonPaddingTablet
													}
													onChange={ ( value ) =>
														setAttributes( {
															vpaginationButtonPaddingTablet: value,
														} )
													}
													min={ 0 }
													max={ 100 }
													allowReset
												/>
												<RangeControl
													label={
														UAGB_Block_Icons.horizontal_spacing
													}
													className={
														'uagb-margin-control'
													}
													value={
														hpaginationButtonPaddingTablet
													}
													onChange={ ( value ) =>
														setAttributes( {
															hpaginationButtonPaddingTablet: value,
														} )
													}
													min={ 0 }
													max={ 100 }
													allowReset
												/>
											</>
										);
									} else {
										tabout = (
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
														isPrimary={
															paginationButtonPaddingType ===
															'px'
														}
														aria-pressed={
															paginationButtonPaddingType ===
															'px'
														}
														onClick={ () =>
															setAttributes( {
																paginationButtonPaddingType:
																	'px',
															} )
														}
													>
														{ 'px' }
													</Button>
													<Button
														key={ '%' }
														className="uagb-size-btn"
														isSmall
														isPrimary={
															paginationButtonPaddingType ===
															'%'
														}
														aria-pressed={
															paginationButtonPaddingType ===
															'%'
														}
														onClick={ () =>
															setAttributes( {
																paginationButtonPaddingType:
																	'%',
															} )
														}
													>
														{ '%' }
													</Button>
												</ButtonGroup>
												<h2>
													{ __(
														'Padding',
														'ultimate-addons-for-gutenberg'
													) }
												</h2>
												<RangeControl
													label={
														UAGB_Block_Icons.vertical_spacing
													}
													className={
														'uagb-margin-control'
													}
													value={
														vpaginationButtonPaddingDesktop
													}
													onChange={ ( value ) =>
														setAttributes( {
															vpaginationButtonPaddingDesktop: value,
														} )
													}
													min={ 0 }
													max={ 100 }
													allowReset
												/>
												<RangeControl
													label={
														UAGB_Block_Icons.horizontal_spacing
													}
													className={
														'uagb-margin-control'
													}
													value={
														hpaginationButtonPaddingDesktop
													}
													onChange={ ( value ) =>
														setAttributes( {
															hpaginationButtonPaddingDesktop: value,
														} )
													}
													min={ 0 }
													max={ 100 }
													allowReset
												/>
											</>
										);
									}

									return <div>{ tabout }</div>;
								} }
							</TabPanel>
							<TabPanel
								className="uagb-margin-control uagb-inspect-tabs uagb-inspect-tabs-col-2"
								activeClass="active-tab"
								tabs={ [
									{
										name: 'normal',
										title: __(
											'Normal',
											'ultimate-addons-for-gutenberg'
										),
										className: 'uagb-normal-tab',
									},
									{
										name: 'hover',
										title: __(
											'Hover',
											'ultimate-addons-for-gutenberg'
										),
										className: 'uagb-hover-tab',
									},
								] }
							>
								{ ( tabName ) => {
									if ( 'normal' === tabName.name ) {
										return (
											<>
												<p className="uagb-setting-label">
													{ __(
														'Text Color',
														'ultimate-addons-for-gutenberg'
													) }
													<span className="components-base-control__label">
														<span
															className="component-color-indicator"
															style={ {
																backgroundColor: paginationTextColor,
															} }
														></span>
													</span>
												</p>
												<ColorPalette
													value={
														paginationTextColor
													}
													onChange={ ( colorValue ) =>
														setAttributes( {
															paginationTextColor: colorValue,
														} )
													}
													allowReset
												/>
												<p className="uagb-setting-label">
													{ __(
														'Background Color',
														'ultimate-addons-for-gutenberg'
													) }
													<span className="components-base-control__label">
														<span
															className="component-color-indicator"
															style={ {
																backgroundColor: paginationMasonryBgColor,
															} }
														></span>
													</span>
												</p>
												<ColorPalette
													value={
														paginationMasonryBgColor
													}
													onChange={ ( colorValue ) =>
														setAttributes( {
															paginationMasonryBgColor: colorValue,
														} )
													}
													allowReset
												/>
											</>
										);
									}
									return (
										<>
											<p className="uagb-setting-label">
												{ __(
													'Text Color',
													'ultimate-addons-for-gutenberg'
												) }
												<span className="components-base-control__label">
													<span
														className="component-color-indicator"
														style={ {
															backgroundColor: paginationTextHoverColor,
														} }
													></span>
												</span>
											</p>
											<ColorPalette
												value={
													paginationTextHoverColor
												}
												onChange={ ( colorValue ) =>
													setAttributes( {
														paginationTextHoverColor: colorValue,
													} )
												}
												allowReset
											/>

											<p className="uagb-setting-label">
												{ __(
													'Background Color',
													'ultimate-addons-for-gutenberg'
												) }
												<span className="components-base-control__label">
													<span
														className="component-color-indicator"
														style={ {
															backgroundColor: paginationBgHoverColor,
														} }
													></span>
												</span>
											</p>
											<ColorPalette
												value={ paginationBgHoverColor }
												onChange={ ( colorValue ) =>
													setAttributes( {
														paginationBgHoverColor: colorValue,
													} )
												}
												allowReset
											/>
										</>
									);
								} }
							</TabPanel>
							<hr className="uagb-editor__separator" />
							<h2>
								{ ' ' }
								{ __(
									'Border',
									'ultimate-addons-for-gutenberg'
								) }{ ' ' }
							</h2>
							<SelectControl
								label={ __(
									'Style',
									'ultimate-addons-for-gutenberg'
								) }
								value={ paginationMasonryBorderStyle }
								options={ [
									{
										value: 'none',
										label: __(
											'None',
											'ultimate-addons-for-gutenberg'
										),
									},
									{
										value: 'solid',
										label: __(
											'Solid',
											'ultimate-addons-for-gutenberg'
										),
									},
									{
										value: 'dotted',
										label: __(
											'Dotted',
											'ultimate-addons-for-gutenberg'
										),
									},
									{
										value: 'dashed',
										label: __(
											'Dashed',
											'ultimate-addons-for-gutenberg'
										),
									},
									{
										value: 'double',
										label: __(
											'Double',
											'ultimate-addons-for-gutenberg'
										),
									},
								] }
								onChange={ ( value ) => {
									setAttributes( {
										paginationMasonryBorderStyle: value,
									} );
								} }
							/>
							{ 'none' !== paginationMasonryBorderStyle && (
								<>
									<RangeControl
										label={ __(
											'Thickness (px)',
											'ultimate-addons-for-gutenberg'
										) }
										value={ paginationMasonryBorderWidth }
										onChange={ ( value ) => {
											setAttributes( {
												paginationMasonryBorderWidth: value,
											} );
										} }
										min={ 0 }
										max={ 20 }
									/>
									<RangeControl
										label={ __(
											'Rounded Corners (px)',
											'ultimate-addons-for-gutenberg'
										) }
										value={ paginationMasonryBorderRadius }
										onChange={ ( value ) => {
											setAttributes( {
												paginationMasonryBorderRadius: value,
											} );
										} }
										min={ 0 }
										max={ 50 }
									/>
									<p className="uagb-setting-label">
										{ __(
											'Color',
											'ultimate-addons-for-gutenberg'
										) }
										<span className="components-base-control__label">
											<span
												className="component-color-indicator"
												style={ {
													backgroundColor: paginationMasonryBorderColor,
												} }
											></span>
										</span>
									</p>
									<ColorPalette
										value={ paginationMasonryBorderColor }
										onChange={ ( value ) =>
											setAttributes( {
												paginationMasonryBorderColor: value,
											} )
										}
										allowReset
									/>
								</>
							) }
						</>
					) }
					{ 'scroll' === paginationEventType && (
						<>
							<p className="uagb-setting-label">
								{ __(
									' Loader Color',
									'ultimate-addons-for-gutenberg'
								) }
								<span className="components-base-control__label">
									<span
										className="component-color-indicator"
										style={ {
											backgroundColor: loaderColor,
										} }
									></span>
								</span>
							</p>
							<ColorPalette
								value={ loaderColor }
								onChange={ ( value ) =>
									setAttributes( { loaderColor: value } )
								}
								allowReset
							/>
							<RangeControl
								label={ __(
									'Loader Size',
									'ultimate-addons-for-gutenberg'
								) }
								value={ loaderSize }
								onChange={ ( value ) =>
									setAttributes( { loaderSize: value } )
								}
								min={ 1 }
								max={ 50 }
							/>
						</>
					) }
				</PanelBody>
			);
		}

		return '';
	};
	const imageSettings = () => {
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
							'Image Sizes',
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
					<SelectControl
						label={ __(
							'Image Position',
							'ultimate-addons-for-gutenberg'
						) }
						value={ imgPosition }
						onChange={ ( value ) =>
							setAttributes( { imgPosition: value } )
						}
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
	const contentSettings = () => {
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
						/>
					) }
			</PanelBody>
		);
	};
	const readMoreLinkSettings = () => {
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
		);
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
					'Vertical Spacing',
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
					'Horizontal Spacing',
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
				<SelectControl
					label={ __( 'Html Tag', 'ultimate-addons-for-gutenberg' ) }
					value={ titleTag }
					onChange={ ( value ) =>
						setAttributes( { titleTag: value } )
					}
					options={ [
						{
							value: 'h1',
							label: __( 'H1', 'ultimate-addons-for-gutenberg' ),
						},
						{
							value: 'h2',
							label: __( 'H2', 'ultimate-addons-for-gutenberg' ),
						},
						{
							value: 'h3',
							label: __( 'H3', 'ultimate-addons-for-gutenberg' ),
						},
						{
							value: 'h4',
							label: __( 'H4', 'ultimate-addons-for-gutenberg' ),
						},
						{
							value: 'h5',
							label: __( 'H5', 'ultimate-addons-for-gutenberg' ),
						},
						{
							value: 'h6',
							label: __( 'H6', 'ultimate-addons-for-gutenberg' ),
						},
						{
							value: 'span',
							label: __(
								'span',
								'ultimate-addons-for-gutenberg'
							),
						},
						{
							value: 'p',
							label: __( 'p', 'ultimate-addons-for-gutenberg' ),
						},
					] }
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
					"Button Padding",
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
					'Hover Color',
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
				colorValue={ctaBgColor}
				onColorChange={(value) =>
					setAttributes({ ctaBgColor: value })
				}
			/>	
			<AdvancedPopColorControl
				label={__(
					'Background Hover Color',
					"ultimate-addons-for-gutenberg"
				)}
				colorValue={ctaBgHColor}
				onColorChange={(value) =>
					setAttributes({ ctaBgHColor: value })
				}
			/>								
		</PanelBody>
	);
	};

	 const inspectorControls = (
			<InspectorControls>
				<InspectorTabs>
					<InspectorTab key={"general"}>
						{ generalSettings() }
						{ paginationSettings() }
						{ imageSettings() }
						{ contentSettings() }
						{ readMoreLinkSettings() }
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
						 uagb_blocks_info.blocks[ 'uagb/post-masonry' ].title
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
				 parentProps={ props }
				 state={ state }
				 inspectorControls={ inspectorControls }
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
 )( UAGBPostMasonry );
 