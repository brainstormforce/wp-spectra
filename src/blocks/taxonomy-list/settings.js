import React, { Suspense } from 'react';
import { __ } from '@wordpress/i18n';
import lazyLoader from '@Controls/lazy-loader';
import WebfontLoader from '@Components/typography/fontloader';
import renderSVG from '@Controls/renderIcon';
import TypographyControl from '@Components/typography';
import BoxShadowControl from '@Components/box-shadow';
import Border from '@Components/border';
import AdvancedPopColorControl from '@Components/color-control/advanced-pop-color-control.js';
import InspectorTabs from '@Components/inspector-tabs/InspectorTabs.js';
import InspectorTab, {
	UAGTabs,
} from '@Components/inspector-tabs/InspectorTab.js';
import SpacingControl from '@Components/spacing-control';
import Range from '@Components/range/Range.js';
import ResponsiveSlider from '@Components/responsive-slider';
import MultiButtonsControl from '@Components/multi-buttons-control';
import UAGTabsControl from '@Components/tabs';
import {
	SelectControl,
	TextControl,
	Icon,
	ToggleControl,
} from '@wordpress/components';
import { InspectorControls, AlignmentToolbar, BlockControls } from '@wordpress/block-editor';

import UAGAdvancedPanelBody from '@Components/advanced-panel-body';

import apiFetch from '@wordpress/api-fetch';
const Settings = ( props ) => {
	props = props.parentProps;

	// Caching all Props.
	const {
		attributes,
		setAttributes,
		taxonomyList,
		termsList,
		deviceType,
	} = props;

	// Caching all attributes.
	const {
		postType,
		taxonomyType,
		layout,
		columns,
		tcolumns,
		mcolumns,
		bgColor,
		titleColor,
		countColor,
		rowGap,
		rowGapTablet,
		rowGapMobile,
		columnGap,
		columnGapTablet,
		columnGapMobile,
		contentTopPadding,
		contentRightPadding,
		contentBottomPadding,
		contentLeftPadding,
		contentTopPaddingTablet,
		contentRightPaddingTablet,
		contentBottomPaddingTablet,
		contentLeftPaddingTablet,
		contentTopPaddingMobile,
		contentRightPaddingMobile,
		contentBottomPaddingMobile,
		contentLeftPaddingMobile,
		contentPaddingUnit,
		mobileContentPaddingUnit,
		tabletContentPaddingUnit,
		contentPaddingLink,
		titleBottomSpace,
		titleBottomSpaceTablet,
		titleBottomSpaceMobile,
		alignment,
		listStyle,
		seperatorStyle,
		seperatorWidth,
		seperatorThickness,
		seperatorColor,
		seperatorHoverColor,
		listTextColor,
		hoverlistTextColor,
		listBottomMargin,
		listStyleColor,
		hoverlistStyleColor,
		noTaxDisplaytext,
		boxShadowColor,
		boxShadowHOffset,
		boxShadowVOffset,
		boxShadowBlur,
		boxShadowSpread,
		boxShadowPosition,
		showCount,
		titleFontSize,
		titleFontSizeType,
		titleFontSizeMobile,
		titleFontSizeTablet,
		titleFontFamily,
		titleFontWeight,
		titleFontStyle,
		titleLineHeightType,
		titleLineHeight,
		titleLineHeightTablet,
		titleLineHeightMobile,
		titleLoadGoogleFonts,
		countFontSize,
		countFontSizeType,
		countFontSizeMobile,
		countFontSizeTablet,
		countFontFamily,
		countFontWeight,
		countFontStyle,
		countLineHeightType,
		countLineHeight,
		countLineHeightTablet,
		countLineHeightMobile,
		countLoadGoogleFonts,
		listFontSize,
		listFontSizeType,
		listFontSizeMobile,
		listFontSizeTablet,
		listFontFamily,
		listFontWeight,
		listFontStyle,
		listLineHeightType,
		listLineHeight,
		listLineHeightTablet,
		listLineHeightMobile,
		listLoadGoogleFonts,
		showEmptyTaxonomy,
		borderStyle,
		borderThickness,
		borderColor,
		borderRadius,
		borderHoverColor,
		listDisplayStyle,
		showhierarchy,
		titleTag,
		titleTransform,
		countTransform,
		listTransform,
		titleDecoration,
		countDecoration,
		listDecoration,
	} = attributes;

	const taxonomy_list_setting = showEmptyTaxonomy ? taxonomyList : termsList;
	const taxonomyListOptions = [
		{
			value: '',
			label: __( 'Select Taxonomy', 'ultimate-addons-for-gutenberg' ),
		},
	];

	if ( '' !== taxonomy_list_setting && undefined !== taxonomy_list_setting ) {
		Object.keys( taxonomy_list_setting ).map( ( item ) => {
			return taxonomyListOptions.push( {
				value: taxonomyList[ item ].name,
				label: taxonomyList[ item ].label,
			} );
		} );
	}

	let loadTitleGoogleFonts;
	let loadCountGoogleFonts;
	let loadListGoogleFonts;

	if ( titleLoadGoogleFonts === true ) {
		const titleconfig = {
			google: {
				families: [
					titleFontFamily +
						( titleFontWeight ? ':' + titleFontWeight : '' ),
				],
			},
		};

		loadTitleGoogleFonts = (
			<WebfontLoader config={ titleconfig }></WebfontLoader>
		);
	}

	if ( countLoadGoogleFonts === true ) {
		const countconfig = {
			google: {
				families: [
					countFontFamily +
						( countFontWeight ? ':' + countFontWeight : '' ),
				],
			},
		};

		loadCountGoogleFonts = (
			<WebfontLoader config={ countconfig }></WebfontLoader>
		);
	}

	if ( listLoadGoogleFonts === true ) {
		const listconfig = {
			google: {
				families: [
					listFontFamily +
						( listFontWeight ? ':' + listFontWeight : '' ),
				],
			},
		};

		loadListGoogleFonts = (
			<WebfontLoader config={ listconfig }></WebfontLoader>
		);
	}

	// All Controls.
	const colorControl = (
		<>
			<AdvancedPopColorControl
				label={ __( 'Text Color', 'ultimate-addons-for-gutenberg' ) }
				colorValue={ listTextColor ? listTextColor : '' }
				onColorChange={ ( value ) =>
					setAttributes( { listTextColor: value } )
				}
			/>
			<br />

			{ 'none' !== listStyle && (
				<>
					<AdvancedPopColorControl
						label={ __(
							'Bullet/Numbers Color',
							'ultimate-addons-for-gutenberg'
						) }
						colorValue={ listStyleColor ? listStyleColor : '' }
						onColorChange={ ( value ) =>
							setAttributes( { listStyleColor: value } )
						}
					/>
				</>
			) }
		</>
	);
	const colorControlHover = (
		<>
			<AdvancedPopColorControl
				label={ __( 'Text Color', 'ultimate-addons-for-gutenberg' ) }
				colorValue={ hoverlistTextColor ? hoverlistTextColor : '' }
				onColorChange={ ( value ) =>
					setAttributes( { hoverlistTextColor: value } )
				}
			/>
			<br />
			{ 'none' !== listStyle && (
				<>
					<AdvancedPopColorControl
						label={ __(
							'Bullet/Numbers Color',
							'ultimate-addons-for-gutenberg'
						) }
						colorValue={
							hoverlistStyleColor ? hoverlistStyleColor : ''
						}
						onColorChange={ ( value ) =>
							setAttributes( { hoverlistStyleColor: value } )
						}
					/>
				</>
			) }
		</>
	);

	const onSelectPostType = ( value ) => {
		const formData = new window.FormData();

		formData.append( 'action', 'uagb_get_taxonomy' );
		formData.append(
			'nonce',
			uagb_blocks_info.uagb_ajax_nonce
		);
		apiFetch( {
			url: uagb_blocks_info.ajax_url,
			method: 'POST',
			body: formData,
		} ).then( ( data ) => {
			setAttributes( { listInJson: data } );
			setAttributes( { postType: value } );
			setAttributes( { categories: '' } );
			setAttributes( { taxonomyType: '' } );
		} );
	};

	const onSelectTaxonomyType = ( value ) => {
		setAttributes( { taxonomyType: value } );
		setAttributes( { categories: '' } );
	};

	const generalPanel = () => {
		let tempTitleTag = titleTag;
		if ( '' === titleTag ) {
			tempTitleTag = 'h4';

			if ( 'list' === layout ) {
				tempTitleTag = 'div';
			}
		}
		return (
			<UAGAdvancedPanelBody
				title={ __( 'Layout', 'ultimate-addons-for-gutenberg' ) }
				initialOpen={ false }
			>
				<MultiButtonsControl
					setAttributes={ setAttributes }
					label={ __(
						'Heading Tag',
						'ultimate-addons-for-gutenberg'
					) }
					data={ {
						value: tempTitleTag,
						label: 'titleTag',
					} }
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
							value: 'div',
							label: __( 'Div', 'ultimate-addons-for-gutenberg' ),
						},
					] }
				/>
				<MultiButtonsControl
					setAttributes={ setAttributes }
					label={ __( 'Layout', 'ultimate-addons-for-gutenberg' ) }
					data={ {
						value: layout,
						label: 'layout',
					} }
					className="uagb-multi-button-alignment-control"
					options={ [
						{
							value: 'grid',
							label: 'Grid',
						},
						{
							value: 'list',
							label: 'List',
						},
					] }
					showIcons={ false }
				/>
				{ 'grid' === layout && (
					<ResponsiveSlider
						label={ __(
							'Columns',
							'ultimate-addons-for-gutenberg'
						) }
						data={ {
							desktop: {
								value: columns,
								label: 'columns',
								min: 1,
								max: 4,
							},
							tablet: {
								value: tcolumns,
								label: 'tcolumns',
								min: 1,
								max: 3,
							},
							mobile: {
								value: mcolumns,
								label: 'mcolumns',
								min: 1,
								max: 2,
							},
						} }
						min={ 1 }
						max={ 4 }
						displayUnit={ false }
						setAttributes={ setAttributes }
					/>
				) }
				{ 'list' === layout && (
					<>
						<MultiButtonsControl
							setAttributes={ setAttributes }
							label={ __(
								'Display Style',
								'ultimate-addons-for-gutenberg'
							) }
							data={ {
								value: listDisplayStyle,
								label: 'listDisplayStyle',
							} }
							className="uagb-multi-button-alignment-control"
							options={ [
								{
									value: 'list',
									label: 'List',
								},
								{
									value: 'dropdown',
									label: 'Dropdown',
								},
							] }
							showIcons={ false }
						/>
					</>
				) }
				{ 'grid' === layout && (
					<>
						<MultiButtonsControl
							setAttributes={ setAttributes }
							label={ __(
								'Alignment',
								'ultimate-addons-for-gutenberg'
							) }
							data={ {
								value: alignment,
								label: 'alignment',
							} }
							className="uagb-multi-button-alignment-control"
							options={ [
								{
									value: 'left',
									icon: (
										<Icon
											icon={ renderSVG(
												'fa fa-align-left'
											) }
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
					</>
				) }
				{ 'list' === layout && 'dropdown' !== listDisplayStyle && (
					<>
						<MultiButtonsControl
							setAttributes={ setAttributes }
							label={ __(
								'List Style',
								'ultimate-addons-for-gutenberg'
							) }
							data={ {
								value: listStyle,
								label: 'listStyle',
							} }
							className="uagb-multi-button-alignment-control"
							options={ [
								{
									value: 'disc',
									icon: (
										<Icon
											icon={ renderSVG(
												'fa fa-list-ul'
											) }
										/>
									),
									tooltip: __(
										'Bullet',
										'ultimate-addons-for-gutenberg'
									),
								},
								{
									value: 'decimal',
									icon: (
										<Icon
											icon={ renderSVG(
												'fa fa-list-ol'
											) }
										/>
									),
									tooltip: __(
										'Numbers',
										'ultimate-addons-for-gutenberg'
									),
								},
								{
									value: 'none',
									icon: (
										<Icon
											icon={ renderSVG( 'fa fa-bars' ) }
										/>
									),
									tooltip: __(
										'None',
										'ultimate-addons-for-gutenberg'
									),
								},
							] }
							showIcons={ true }
						/>
					</>
				) }
			</UAGAdvancedPanelBody>
		);
	};
	const postQueryPanel = () => {
		return (
			<UAGAdvancedPanelBody
				title={ __( 'Query', 'ultimate-addons-for-gutenberg' ) }
				initialOpen={ true }
			>
				<SelectControl
					label={ __( 'Post Type', 'ultimate-addons-for-gutenberg' ) }
					value={ postType }
					onChange={ ( value ) => onSelectPostType( value ) }
					options={ uagb_blocks_info.post_types }
				/>
				{ '' !== taxonomyList && (
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
				{ '' === taxonomyList && (
					<TextControl
						autoComplete="off"
						label={ __(
							'Display Message',
							'ultimate-addons-for-gutenberg'
						) }
						value={ noTaxDisplaytext }
						onChange={ ( value ) =>
							setAttributes( { noTaxDisplaytext: value } )
						}
						help={ __(
							'If taxonomy Not Found',
							'ultimate-addons-for-gutenberg'
						) }
					/>
				) }

				<ToggleControl
					label={ __(
						'Show Empty Taxonomy',
						'ultimate-addons-for-gutenberg'
					) }
					checked={ showEmptyTaxonomy }
					onChange={ () =>
						setAttributes( {
							showEmptyTaxonomy: ! showEmptyTaxonomy,
						} )
					}
					help={ __( 'Show empty taxonomy in list ' ) }
				/>
				<ToggleControl
					label={ __(
						'Show Posts Count',
						'ultimate-addons-for-gutenberg'
					) }
					checked={ showCount }
					onChange={ () =>
						setAttributes( { showCount: ! showCount } )
					}
					help={ __(
						'Show count of taxonomy ',
						'ultimate-addons-for-gutenberg'
					) }
				/>
				{ 'list' === layout &&
					'list' === listDisplayStyle &&
					'post_tag' !== taxonomyType && (
						<ToggleControl
							label={ __(
								'Show Hierarchy',
								'ultimate-addons-for-gutenberg'
							) }
							checked={ showhierarchy }
							onChange={ () =>
								setAttributes( {
									showhierarchy: ! showhierarchy,
								} )
							}
							help={ __(
								'Show hierarchy of taxonomy ',
								'ultimate-addons-for-gutenberg'
							) }
						/>
					) }
			</UAGAdvancedPanelBody>
		);
	};
	const titleColorPanel = () => {
		return (
			<UAGAdvancedPanelBody
				title={ __( 'Title', 'ultimate-addons-for-gutenberg' ) }
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
					transform={ {
						value: titleTransform,
						label: 'titleTransform',
					} }
					decoration={ {
						value: titleDecoration,
						label: 'titleDecoration',
					} }
				/>
				<AdvancedPopColorControl
					label={ __( 'Color', 'ultimate-addons-for-gutenberg' ) }
					colorValue={ titleColor ? titleColor : '' }
					onColorChange={ ( value ) =>
						setAttributes( { titleColor: value } )
					}
				/>
				{ showCount && (
					<ResponsiveSlider
							label={ __(
								'Bottom Spacing',
								'ultimate-addons-for-gutenberg'
							) }
							data={ {
								desktop: {
									value: titleBottomSpace,
									label: 'titleBottomSpace',
								},
								tablet: {
									value: titleBottomSpaceTablet,
									label: 'titleBottomSpaceTablet',
								},
								mobile: {
									value: titleBottomSpaceMobile,
									label: 'titleBottomSpaceMobile',
								},
							} }
							min={ 0 }
							max={ 50 }
							displayUnit={ false }
							setAttributes={ setAttributes }
						/>
				) }
			</UAGAdvancedPanelBody>
		);
	};
	const countColorPanel = () => {
		return (
			<UAGAdvancedPanelBody
				title={ __( 'Count', 'ultimate-addons-for-gutenberg' ) }
				initialOpen={ false }
			>
				<AdvancedPopColorControl
					label={ __( 'Color', 'ultimate-addons-for-gutenberg' ) }
					colorValue={ countColor ? countColor : '' }
					onColorChange={ ( value ) =>
						setAttributes( { countColor: value } )
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
						value: countLoadGoogleFonts,
						label: 'countLoadGoogleFonts',
					} }
					fontFamily={ {
						value: countFontFamily,
						label: 'countFontFamily',
					} }
					fontWeight={ {
						value: countFontWeight,
						label: 'countFontWeight',
					} }
					fontStyle={ {
						value: countFontStyle,
						label: 'countFontStyle',
					} }
					fontSizeType={ {
						value: countFontSizeType,
						label: 'countFontSizeType',
					} }
					fontSize={ {
						value: countFontSize,
						label: 'countFontSize',
					} }
					fontSizeMobile={ {
						value: countFontSizeMobile,
						label: 'countFontSizeMobile',
					} }
					fontSizeTablet={ {
						value: countFontSizeTablet,
						label: 'countFontSizeTablet',
					} }
					lineHeightType={ {
						value: countLineHeightType,
						label: 'countLineHeightType',
					} }
					lineHeight={ {
						value: countLineHeight,
						label: 'countLineHeight',
					} }
					lineHeightMobile={ {
						value: countLineHeightMobile,
						label: 'countLineHeightMobile',
					} }
					lineHeightTablet={ {
						value: countLineHeightTablet,
						label: 'countLineHeightTablet',
					} }
					transform={ {
						value: countTransform,
						label: 'countTransform',
					} }
					decoration={ {
						value: countDecoration,
						label: 'countDecoration',
					} }
				/>
			</UAGAdvancedPanelBody>
		);
	};
	const bgColorPanel = () => {
		return (
			<UAGAdvancedPanelBody
				title={ __( 'Background', 'ultimate-addons-for-gutenberg' ) }
				initialOpen={ false }
			>
				<AdvancedPopColorControl
					label={ __( 'Color', 'ultimate-addons-for-gutenberg' ) }
					colorValue={ bgColor ? bgColor : '' }
					onColorChange={ ( value ) =>
						setAttributes( { bgColor: value } )
					}
				/>
			</UAGAdvancedPanelBody>
		);
	};
	const spacingPanel = () => {
		return (
			<UAGAdvancedPanelBody
				title={ __( 'Spacing', 'ultimate-addons-for-gutenberg' ) }
				initialOpen={ false }
			>
				{ 'grid' === layout && (
					<>
						<ResponsiveSlider
							label={ __(
								'Row Gap',
								'ultimate-addons-for-gutenberg'
							) }
							data={ {
								desktop: {
									value: rowGap,
									label: 'rowGap',
								},
								tablet: {
									value: rowGapTablet,
									label: 'rowGapTablet',
								},
								mobile: {
									value: rowGapMobile,
									label: 'rowGapMobile',
								},
							} }
							min={ 1 }
							max={ 50 }
							displayUnit={ false }
							setAttributes={ setAttributes }
						/>
						<ResponsiveSlider
							label={ __(
								'Column Gap',
								'ultimate-addons-for-gutenberg'
							) }
							data={ {
								desktop: {
									value: columnGap,
									label: 'columnGap',
								},
								tablet: {
									value: columnGapTablet,
									label: 'columnGapTablet',
								},
								mobile: {
									value: columnGapMobile,
									label: 'columnGapMobile',
								},
							} }
							min={ 1 }
							max={ 50 }
							displayUnit={ false }
							setAttributes={ setAttributes }
						/>
						<SpacingControl
							{ ...props }
							label={ __(
								'Padding',
								'ultimate-addons-for-gutenberg'
							) }
							valueTop={ {
								value: contentTopPadding,
								label: 'contentTopPadding',
							} }
							valueRight={ {
								value: contentRightPadding,
								label: 'contentRightPadding',
							} }
							valueBottom={ {
								value: contentBottomPadding,
								label: 'contentBottomPadding',
							} }
							valueLeft={ {
								value: contentLeftPadding,
								label: 'contentLeftPadding',
							} }
							valueTopTablet={ {
								value: contentTopPaddingTablet,
								label: 'contentTopPaddingTablet',
							} }
							valueRightTablet={ {
								value: contentRightPaddingTablet,
								label: 'contentRightPaddingTablet',
							} }
							valueBottomTablet={ {
								value: contentBottomPaddingTablet,
								label: 'contentBottomPaddingTablet',
							} }
							valueLeftTablet={ {
								value: contentLeftPaddingTablet,
								label: 'contentLeftPaddingTablet',
							} }
							valueTopMobile={ {
								value: contentTopPaddingMobile,
								label: 'contentTopPaddingMobile',
							} }
							valueRightMobile={ {
								value: contentRightPaddingMobile,
								label: 'contentRightPaddingMobile',
							} }
							valueBottomMobile={ {
								value: contentBottomPaddingMobile,
								label: 'contentBottomPaddingMobile',
							} }
							valueLeftMobile={ {
								value: contentLeftPaddingMobile,
								label: 'contentLeftPaddingMobile',
							} }
							unit={ {
								value: contentPaddingUnit,
								label: 'contentPaddingUnit',
							} }
							mUnit={ {
								value: mobileContentPaddingUnit,
								label: 'mobileContentPaddingUnit',
							} }
							tUnit={ {
								value: tabletContentPaddingUnit,
								label: 'tabletContentPaddingUnit',
							} }
							deviceType={ deviceType }
							attributes={ attributes }
							setAttributes={ setAttributes }
							link={ {
								value: contentPaddingLink,
								label: 'contentPaddingLink',
							} }
						/>
					</>
				) }
				{ 'list' === layout && (
					<Range
						label={ __(
							'Bottom Margin',
							'ultimate-addons-for-gutenberg'
						) }
						setAttributes={ setAttributes }
						value={ listBottomMargin }
						onChange={ ( value ) =>
							setAttributes( { listBottomMargin: value } )
						}
						min={ 0 }
						max={ 100 }
						displayUnit={ false }
					/>
				) }
			</UAGAdvancedPanelBody>
		);
	};
	const borderPanel = () => {
		return (
			<UAGAdvancedPanelBody
				title={ __( 'Border', 'ultimate-addons-for-gutenberg' ) }
				initialOpen={ false }
			>
				<Border
					disabledBorderTitle= {true}
					setAttributes={ setAttributes }
					borderStyle={ {
						value: borderStyle,
						label: 'borderStyle',
						title: __( 'Style', 'ultimate-addons-for-gutenberg' ),
					} }
					borderWidth={ {
						value: borderThickness,
						label: 'borderThickness',
						title: __( 'Width', 'ultimate-addons-for-gutenberg' ),
					} }
					borderRadius={ {
						value: borderRadius,
						label: 'borderRadius',
						title: __( 'Radius', 'ultimate-addons-for-gutenberg' ),
					} }
					borderColor={ {
						value: borderColor,
						label: 'borderColor',
						title: __( 'Color', 'ultimate-addons-for-gutenberg' ),
					} }
					borderHoverColor={ {
						value: borderHoverColor,
						label: 'borderHoverColor',
						title: __(
							'Hover Color',
							'ultimate-addons-for-gutenberg'
						),
					} }
					disableBottomSeparator={ true }
				/>
			</UAGAdvancedPanelBody>
		);
	};
	const listPanel = () => {
		return (
			<UAGAdvancedPanelBody
				title={ __( 'List', 'ultimate-addons-for-gutenberg' ) }
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
						value: listLoadGoogleFonts,
						label: 'listLoadGoogleFonts',
					} }
					fontFamily={ {
						value: listFontFamily,
						label: 'listFontFamily',
					} }
					fontWeight={ {
						value: listFontWeight,
						label: 'listFontWeight',
					} }
					fontStyle={ {
						value: listFontStyle,
						label: 'listFontStyle',
					} }
					fontSizeType={ {
						value: listFontSizeType,
						label: 'listFontSizeType',
					} }
					fontSize={ {
						value: listFontSize,
						label: 'listFontSize',
					} }
					fontSizeMobile={ {
						value: listFontSizeMobile,
						label: 'listFontSizeMobile',
					} }
					fontSizeTablet={ {
						value: listFontSizeTablet,
						label: 'listFontSizeTablet',
					} }
					lineHeightType={ {
						value: listLineHeightType,
						label: 'listLineHeightType',
					} }
					lineHeight={ {
						value: listLineHeight,
						label: 'listLineHeight',
					} }
					lineHeightMobile={ {
						value: listLineHeightMobile,
						label: 'listLineHeightMobile',
					} }
					lineHeightTablet={ {
						value: listLineHeightTablet,
						label: 'listLineHeightTablet',
					} }
					transform={ {
						value: listTransform,
						label: 'listTransform',
					} }
					decoration={ {
						value: listDecoration,
						label: 'listDecoration',
					} }
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
					normal={ colorControl }
					hover={ colorControlHover }
					disableBottomSeparator={ true }
				/>
			</UAGAdvancedPanelBody>
		);
	};
	const separatorPanel = () => {
		return (
			<UAGAdvancedPanelBody
				title={ __( 'Separator', 'ultimate-addons-for-gutenberg' ) }
				initialOpen={ false }
			>
				<Border
					disabledBorderTitle= {false}
					setAttributes={ setAttributes }
					borderStyle={ {
						value: seperatorStyle,
						label: 'seperatorStyle',
						title: __( 'Style', 'ultimate-addons-for-gutenberg' ),
					} }
					borderWidth={ {
						value: seperatorWidth,
						label: 'seperatorWidth',
						title: __( 'Width', 'ultimate-addons-for-gutenberg' ),
					} }
					borderRadius={ {
						value: seperatorThickness,
						label: 'seperatorThickness',
						title: __(
							'Thickness',
							'ultimate-addons-for-gutenberg'
						),
					} }
					borderColor={ {
						value: seperatorColor,
						label: 'seperatorColor',
						title: __( 'Color', 'ultimate-addons-for-gutenberg' ),
					} }
					borderHoverColor={ {
						value: seperatorHoverColor,
						label: 'seperatorHoverColor',
						title: __(
							'Hover Color',
							'ultimate-addons-for-gutenberg'
						),
					} }
					disableBottomSeparator={ true }
				/>
			</UAGAdvancedPanelBody>
		);
	};
	const boxShadowPanel = () => {
		return (
			<UAGAdvancedPanelBody
				title={ __( 'Box Shadow', 'ultimate-addons-for-gutenberg' ) }
				initialOpen={ false }
			>
				<BoxShadowControl
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
			</UAGAdvancedPanelBody>
		);
	};

	const inspectorControlsSettings = (
		<InspectorControls>
			<InspectorTabs>
				<InspectorTab { ...UAGTabs.general }>
					{ postQueryPanel() }
					{ generalPanel() }
				</InspectorTab>
				<InspectorTab { ...UAGTabs.style }>
					{ 'grid' === layout &&
						'dropdown' !== listDisplayStyle &&
						titleColorPanel() }
					{ 'grid' === layout &&
						'dropdown' !== listDisplayStyle &&
						showCount &&
						countColorPanel() }
					{ 'grid' === layout &&
						'dropdown' !== listDisplayStyle &&
						bgColorPanel() }
					{ 'grid' === layout &&
						'dropdown' !== listDisplayStyle &&
						boxShadowPanel() }
					{ 'grid' === layout &&
						'dropdown' !== listDisplayStyle &&
						borderPanel() }
					{ 'list' === layout &&
						'dropdown' !== listDisplayStyle &&
						listPanel() }
					{ 'list' === layout &&
						'dropdown' !== listDisplayStyle &&
						separatorPanel() }
					{ 'dropdown' !== listDisplayStyle && spacingPanel() }
					{ 'list' === layout && 'dropdown' === listDisplayStyle && (
						<p className="uagb-settings-notice">
							{ __(
								'There is no style available for the currently selected layout.',
								'ultimate-addons-for-gutenberg'
							) }
						</p>
					) }
				</InspectorTab>
				<InspectorTab
					{ ...UAGTabs.advance }
					parentProps={ props }
				></InspectorTab>
			</InspectorTabs>
		</InspectorControls>
	);

	return (
		<>
			<Suspense fallback={ lazyLoader() }>
				<BlockControls key="controls">
					<AlignmentToolbar
						value={ alignment }
						onChange={ ( value ) =>
							setAttributes( { alignment: value } )
						}
					/>
				</BlockControls>
				{ inspectorControlsSettings }
				{ loadTitleGoogleFonts }
				{ loadCountGoogleFonts }
				{ loadListGoogleFonts }
			</Suspense>
		</>
	);
};

export default React.memo( Settings );
