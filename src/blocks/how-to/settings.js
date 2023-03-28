import TypographyControl from '@Components/typography';
import './style.scss';
import { __ } from '@wordpress/i18n';
import {
	InspectorControls,
} from '@wordpress/block-editor';
import AdvancedPopColorControl from '@Components/color-control/advanced-pop-color-control.js';
import InspectorTabs from '@Components/inspector-tabs/InspectorTabs.js';
import InspectorTab, {
	UAGTabs,
} from '@Components/inspector-tabs/InspectorTab.js';
import Range from '@Components/range/Range.js';
import UAGMediaPicker from '@Components/image';
import { getImageSize } from '@Utils/Helpers';
import renderSVG from '@Controls/renderIcon';
import {
	ToggleControl,
	ExternalLink,
	Icon
} from '@wordpress/components';
import MultiButtonsControl from '@Components/multi-buttons-control';
import ResponsiveSlider from '@Components/responsive-slider';
import UAGSelectControl from '@Components/select-control';
let imageSizeOptions = [
	{
		value: 'thumbnail',
		label: __( 'Thumbnail', 'ultimate-addons-for-gutenberg' ),
	},
	{ value: 'medium', label: __( 'Medium', 'ultimate-addons-for-gutenberg' ) },
	{ value: 'full', label: __( 'Large', 'ultimate-addons-for-gutenberg' ) },
];
import { memo } from '@wordpress/element';


import { getFallbackNumber } from '@Controls/getAttributeFallback';
import UAGAdvancedPanelBody from '@Components/advanced-panel-body';

const Settings = ( props ) => {
	props = props.parentProps;

	// Setup the attributes
	const {
		attributes,
		setAttributes,
		attributes: {
			overallAlignment,
			showEstcost,
			showTotaltime,
			showMaterials,
			showTools,
			showTotaltimecolor,
			tools_count,
			material_count,
			tools,
			materials,
			mainimage,
			imgSize,
			headingColor,
			subHeadingColor,
			headingTag,
			headFontFamily,
			headFontWeight,
			headFontSizeType,
			headFontSize,
			headFontSizeMobile,
			headFontSizeTablet,
			headLineHeightType,
			headLineHeight,
			headLineHeightMobile,
			headLineHeightTablet,
			subHeadFontFamily,
			subHeadFontWeight,
			subHeadFontSize,
			subHeadFontSizeType,
			subHeadFontSizeMobile,
			subHeadFontSizeTablet,
			subHeadLineHeight,
			subHeadLineHeightType,
			subHeadLineHeightMobile,
			subHeadLineHeightTablet,
			headLoadGoogleFonts,
			subHeadLoadGoogleFonts,
			//Total time.
			priceFontSizeType,
			priceFontSize,
			priceFontSizeTablet,
			priceFontSizeMobile,
			priceFontFamily,
			priceFontWeight,
			priceLineHeightType,
			priceLineHeight,
			priceLineHeightTablet,
			priceLineHeightMobile,
			priceLoadGoogleFonts,
			timeSpace,
			costSpace,
			row_gap,
			rowGapTablet,
			rowGapMobile,
			step_gap,
			timeInHours,
			timeInDays,
			timeInMonths,
			timeInYears,
			timeInMins,
			time,
			priceFontStyle,
			priceTransform,
			priceDecoration,
			headFontStyle,
			headTransform,
			headDecoration,
			subHeadFontStyle,
			subHeadTransform,
			subHeadDecoration,
			// letter spacing
			headLetterSpacing,
			headLetterSpacingTablet,
			headLetterSpacingMobile,
			headLetterSpacingType,
			priceLetterSpacing,
			priceLetterSpacingTablet,
			priceLetterSpacingMobile,
			priceLetterSpacingType,
			subHeadLetterSpacing,
			subHeadLetterSpacingTablet,
			subHeadLetterSpacingMobile,
			subHeadLetterSpacingType,
		},
	} = props;

	/*
	 * Event to set Image as while adding.
	 */
	const onSelectImage = ( media ) => {
		if ( ! media || ! media.url ) {
			setAttributes( { mainimage: null } );
			return;
		}

		if ( ! media.type || 'image' !== media.type ) {
			setAttributes( { mainimage: null } );
			return;
		}

		setAttributes( { mainimage: media } );
	};

	/*
	 * Event to set Image as null while removing.
	 */
	const onRemoveImage = () => {
		setAttributes( { mainimage: '' } );
	};

	if ( mainimage && mainimage.sizes ) {
		imageSizeOptions = getImageSize( mainimage.sizes );
	}

	const minsValue = timeInMins ? timeInMins : time;

	const titleSettings = () => {
		return (
			<UAGAdvancedPanelBody
				title={ __( 'Title', 'ultimate-addons-for-gutenberg' ) }
				initialOpen={ true }
			>
				<MultiButtonsControl
					setAttributes={ setAttributes }
					label={ __( 'Tag', 'ultimate-addons-for-gutenberg' ) }
					data={ {
						value: headingTag,
						label: 'headingTag',
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
					] }
				/>
				<MultiButtonsControl
					setAttributes={ setAttributes }
					label={ __(
						'Text Alignment',
						'ultimate-addons-for-gutenberg'
					) }
					data={ {
						value: overallAlignment,
						label: 'overallAlignment',
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
			</UAGAdvancedPanelBody>
		);
	};
	const imageSettings = () => {
		return (
			<UAGAdvancedPanelBody
				title={ __( 'Image', 'ultimate-addons-for-gutenberg' ) }
				initialOpen={ false }
			>
				<UAGMediaPicker
					onSelectImage={ onSelectImage }
					backgroundImage={ mainimage }
					onRemoveImage={ onRemoveImage }
					disableLabel={ true }
				/>
				{ mainimage &&
					mainimage.url !== 'null' &&
					mainimage.url !== '' && (
						<UAGSelectControl
							label={ __(
								'Image Size',
								'ultimate-addons-for-gutenberg'
							) }
							data={ {
								value: imgSize,
								label: 'imgSize',
							} }
							setAttributes={ setAttributes }
							options={ imageSizeOptions }
						/>
					) }
			</UAGAdvancedPanelBody>
		);
	};

	const timeSettings = () => {
		return (
			<UAGAdvancedPanelBody
				title={ __( 'Time', 'ultimate-addons-for-gutenberg' ) }
				initialOpen={ false }
			>
				<ToggleControl
					label={ __(
						'Show Total Time',
						'ultimate-addons-for-gutenberg'
					) }
					checked={ showTotaltime }
					onChange={ () =>
						setAttributes( { showTotaltime: ! showTotaltime } )
					}
					help={ __(
						'Note: Time is recommended field for schema. It should be ON',
						'ultimate-addons-for-gutenberg'
					) }
				/>
				{ showTotaltime && (
					<>
						<Range
							label={ __(
								'Years',
								'ultimate-addons-for-gutenberg'
							) }
							setAttributes={ setAttributes }
							value={ timeInYears }
							data={ {
								value: timeInYears,
								label: 'timeInYears',
							} }
							min={ 1 }
							max={ 10 }
							displayUnit={ false }
						/>
						<Range
							label={ __(
								'Months',
								'ultimate-addons-for-gutenberg'
							) }
							setAttributes={ setAttributes }
							value={ timeInMonths }
							data={ {
								value: timeInMonths,
								label: 'timeInMonths',
							} }
							min={ 1 }
							max={ 12 }
							displayUnit={ false }
						/>
						<Range
							label={ __(
								'Days',
								'ultimate-addons-for-gutenberg'
							) }
							setAttributes={ setAttributes }
							value={ timeInDays }
							data={ {
								value: timeInDays,
								label: 'timeInDays',
							} }
							min={ 1 }
							max={ 31 }
							displayUnit={ false }
						/>
						<Range
							label={ __(
								'Hours',
								'ultimate-addons-for-gutenberg'
							) }
							setAttributes={ setAttributes }
							value={ timeInHours }
							data={ {
								value: timeInHours,
								label: 'timeInHours',
							} }
							min={ 1 }
							max={ 24 }
							displayUnit={ false }
						/>
						<Range
							label={ __(
								'Minutes',
								'ultimate-addons-for-gutenberg'
							) }
							setAttributes={ setAttributes }
							value={ minsValue }
							data={ {
								value: timeInMins,
								label: 'timeInMins',
							} }
							min={ 1 }
							max={ 60 }
							displayUnit={ false }
						/>
					</>
				) }
			</UAGAdvancedPanelBody>
		);
	};
	const costSettings = () => {
		return (
			<UAGAdvancedPanelBody
				title={ __( 'Cost', 'ultimate-addons-for-gutenberg' ) }
				initialOpen={ false }
			>
				<ToggleControl
					label={ __(
						'Show Estimated Cost',
						'ultimate-addons-for-gutenberg'
					) }
					checked={ showEstcost }
					onChange={ () =>
						setAttributes( { showEstcost: ! showEstcost } )
					}
					help={ __(
						'Note: Cost is recommended field for schema.It should be ON',
						'ultimate-addons-for-gutenberg'
					) }
				/>
				<ExternalLink
					href={
						'https://en.wikipedia.org/wiki/List_of_circulating_currencies'
					}
				>
					{ __(
						'Click here to find your countrys ISO code.',
						'ultimate-addons-for-gutenberg'
					) }
				</ExternalLink>
			</UAGAdvancedPanelBody>
		);
	};
	const toolsSettings = () => {
		return (
			<UAGAdvancedPanelBody
				title={ __( 'Tools', 'ultimate-addons-for-gutenberg' ) }
				initialOpen={ false }
			>
				<ToggleControl
					label={ __(
						'Show Tools',
						'ultimate-addons-for-gutenberg'
					) }
					checked={ showTools }
					onChange={ () =>
						setAttributes( { showTools: ! showTools } )
					}
					help={ __(
						'Note: This is recommended field for schema.It should be ON',
						'ultimate-addons-for-gutenberg'
					) }
				/>
				{ showTools && (
					<Range
						label={ __(
							'Number of Tools',
							'ultimate-addons-for-gutenberg'
						) }
						setAttributes={ setAttributes }
						value={ tools_count }
						data={ {
							value: tools_count,
							label: 'tools_count',
						} }
						onChange={ ( newCount ) => {
							const cloneIcons = [ ...tools ];
							const newCountFallback = getFallbackNumber( newCount, 'tools_count', 'how-to' );

							if ( cloneIcons.length < newCountFallback ) {
								const incAmount = Math.abs(
									newCountFallback - cloneIcons.length
								);

								{
									for ( let i = 0; i < incAmount; i++ ) {
										cloneIcons.push( {
											add_required_tools:
												'- A Computer' +
												( cloneIcons.length + 1 ),
										} );
									}
								}

								setAttributes( { tools: cloneIcons } );
							} else {
								const incAmount = Math.abs(
									newCountFallback - cloneIcons.length
								);
								const data_new = cloneIcons;
								for ( let i = 0; i < incAmount; i++ ) {
									data_new.pop();
								}
								setAttributes( { tools: data_new } );
							}
							setAttributes( { tools_count: newCountFallback } );
						} }
						min={ 1 }
						max={ 50 }
						displayUnit={ false }
					/>
				) }
			</UAGAdvancedPanelBody>
		);
	};
	const materialsSettings = () => {
		return (
			<UAGAdvancedPanelBody
				title={ __( 'Materials', 'ultimate-addons-for-gutenberg' ) }
				initialOpen={ false }
			>
				<ToggleControl
					label={ __(
						'Show Materials',
						'ultimate-addons-for-gutenberg'
					) }
					checked={ showMaterials }
					onChange={ () =>
						setAttributes( { showMaterials: ! showMaterials } )
					}
					help={ __(
						'Note: This is recommended field for schema.It should be ON',
						'ultimate-addons-for-gutenberg'
					) }
				/>
				{ showMaterials && (
					<Range
						label={ __(
							'Number of Materials',
							'ultimate-addons-for-gutenberg'
						) }
						setAttributes={ setAttributes }
						value={ material_count }
						data={ {
							value: material_count,
							label: 'material_count',
						} }
						onChange={ ( newCount ) => {
							const cloneIcons = [ ...materials ];
							const newCountFallback = getFallbackNumber( newCount, 'material_count', 'how-to' );

							if ( cloneIcons.length < newCountFallback ) {
								const incAmount = Math.abs(
									newCountFallback - cloneIcons.length
								);

								{
									for ( let i = 0; i < incAmount; i++ ) {
										cloneIcons.push( {
											add_required_materials:
												'- A WordPress Website' +
												( cloneIcons.length + 1 ),
										} );
									}
								}

								setAttributes( { materials: cloneIcons } );
							} else {
								const incAmount = Math.abs(
									newCountFallback - cloneIcons.length
								);
								const data_new = cloneIcons;
								for ( let i = 0; i < incAmount; i++ ) {
									data_new.pop();
								}
								setAttributes( { materials: data_new } );
							}
							setAttributes( { material_count: newCountFallback } );
						} }
						min={ 1 }
						max={ 50 }
						displayUnit={ false }
					/>
				) }
			</UAGAdvancedPanelBody>
		);
	};

	const headingColorSettings = () => {
		return (
			<UAGAdvancedPanelBody
				title={ __( 'Heading', 'ultimate-addons-for-gutenberg' ) }
				initialOpen={ true }
			>
				<AdvancedPopColorControl
					label={ __( 'Color', 'ultimate-addons-for-gutenberg' ) }
					colorValue={ headingColor ? headingColor : '' }
					data={ {
						value: headingColor,
						label: 'headingColor',
					} }
					setAttributes={ setAttributes }
				/>
				<TypographyControl
					label={ __(
						'Typography',
						'ultimate-addons-for-gutenberg'
					) }
					attributes={ attributes }
					setAttributes={ setAttributes }
					loadGoogleFonts={ {
						value: headLoadGoogleFonts,
						label: 'headLoadGoogleFonts',
					} }
					fontFamily={ {
						value: headFontFamily,
						label: 'headFontFamily',
					} }
					fontWeight={ {
						value: headFontWeight,
						label: 'headFontWeight',
					} }
					fontStyle={ {
						value: headFontStyle,
						label: 'headFontStyle',
					} }
					transform={ {
						value: headTransform,
						label: 'headTransform',
					} }
					decoration={ {
						value: headDecoration,
						label: 'headDecoration',
					} }
					fontSizeType={ {
						value: headFontSizeType,
						label: 'headFontSizeType',
					} }
					fontSize={ { value: headFontSize, label: 'headFontSize' } }
					fontSizeMobile={ {
						value: headFontSizeMobile,
						label: 'headFontSizeMobile',
					} }
					fontSizeTablet={ {
						value: headFontSizeTablet,
						label: 'headFontSizeTablet',
					} }
					lineHeightType={ {
						value: headLineHeightType,
						label: 'headLineHeightType',
					} }
					lineHeight={ {
						value: headLineHeight,
						label: 'headLineHeight',
					} }
					lineHeightMobile={ {
						value: headLineHeightMobile,
						label: 'headLineHeightMobile',
					} }
					lineHeightTablet={ {
						value: headLineHeightTablet,
						label: 'headLineHeightTablet',
					} }
					letterSpacing={ {
						value: headLetterSpacing,
						label: 'headLetterSpacing',
					} }
					letterSpacingTablet={ {
						value: headLetterSpacingTablet,
						label: 'headLetterSpacingTablet',
					} }
					letterSpacingMobile={ {
						value: headLetterSpacingMobile,
						label: 'headLetterSpacingMobile',
					} }
					letterSpacingType={ {
						value: headLetterSpacingType,
						label: 'headLetterSpacingType',
					} }
				/>
			</UAGAdvancedPanelBody>
		);
	};
	const secheadingColorSettings = () => {
		return (
			<UAGAdvancedPanelBody
				title={ __(
					'Secondary Heading',
					'ultimate-addons-for-gutenberg'
				) }
				initialOpen={ false }
			>
				<AdvancedPopColorControl
					label={ __( 'Color', 'ultimate-addons-for-gutenberg' ) }
					colorValue={ showTotaltimecolor ? showTotaltimecolor : '' }
					data={ {
						value: showTotaltimecolor,
						label: 'showTotaltimecolor',
					} }
					setAttributes={ setAttributes }
				/>
				<TypographyControl
					label={ __(
						'Typography',
						'ultimate-addons-for-gutenberg'
					) }
					attributes={ attributes }
					setAttributes={ setAttributes }
					loadGoogleFonts={ {
						value: priceLoadGoogleFonts,
						label: 'priceLoadGoogleFonts',
					} }
					fontFamily={ {
						value: priceFontFamily,
						label: 'priceFontFamily',
					} }
					fontWeight={ {
						value: priceFontWeight,
						label: 'priceFontWeight',
					} }
					fontStyle={ {
						value: priceFontStyle,
						label: 'priceFontStyle',
					} }
					transform={ {
						value: priceTransform,
						label: 'priceTransform',
					} }
					decoration={ {
						value: priceDecoration,
						label: 'priceDecoration',
					} }
					fontSizeType={ {
						value: priceFontSizeType,
						label: 'priceFontSizeType',
					} }
					fontSize={ {
						value: priceFontSize,
						label: 'priceFontSize',
					} }
					fontSizeMobile={ {
						value: priceFontSizeMobile,
						label: 'priceFontSizeMobile',
					} }
					fontSizeTablet={ {
						value: priceFontSizeTablet,
						label: 'priceFontSizeTablet',
					} }
					lineHeightType={ {
						value: priceLineHeightType,
						label: 'priceLineHeightType',
					} }
					lineHeight={ {
						value: priceLineHeight,
						label: 'priceLineHeight',
					} }
					lineHeightMobile={ {
						value: priceLineHeightMobile,
						label: 'priceLineHeightMobile',
					} }
					lineHeightTablet={ {
						value: priceLineHeightTablet,
						label: 'priceLineHeightTablet',
					} }
					letterSpacing={ {
						value: priceLetterSpacing,
						label: 'priceLetterSpacing',
					} }
					letterSpacingTablet={ {
						value: priceLetterSpacingTablet,
						label: 'priceLetterSpacingTablet',
					} }
					letterSpacingMobile={ {
						value: priceLetterSpacingMobile,
						label: 'priceLetterSpacingMobile',
					} }
					letterSpacingType={ {
						value: priceLetterSpacingType,
						label: 'priceLetterSpacingType',
					} }
				/>
			</UAGAdvancedPanelBody>
		);
	};
	const descriptionColorSettings = () => {
		return (
			<UAGAdvancedPanelBody
				title={ __( 'Description', 'ultimate-addons-for-gutenberg' ) }
				initialOpen={ false }
			>
				<AdvancedPopColorControl
					label={ __( 'Color', 'ultimate-addons-for-gutenberg' ) }
					colorValue={ subHeadingColor ? subHeadingColor : '' }
					data={ {
						value: subHeadingColor,
						label: 'subHeadingColor',
					} }
					setAttributes={ setAttributes }
				/>
				<TypographyControl
					label={ __(
						'Typography',
						'ultimate-addons-for-gutenberg'
					) }
					attributes={ attributes }
					setAttributes={ setAttributes }
					loadGoogleFonts={ {
						value: subHeadLoadGoogleFonts,
						label: 'subHeadLoadGoogleFonts',
					} }
					fontFamily={ {
						value: subHeadFontFamily,
						label: 'subHeadFontFamily',
					} }
					fontWeight={ {
						value: subHeadFontWeight,
						label: 'subHeadFontWeight',
					} }
					fontStyle={ {
						value: subHeadFontStyle,
						label: 'subHeadFontStyle',
					} }
					transform={ {
						value: subHeadTransform,
						label: 'subHeadTransform',
					} }
					decoration={ {
						value: subHeadDecoration,
						label: 'subHeadDecoration',
					} }
					fontSizeType={ {
						value: subHeadFontSizeType,
						label: 'subHeadFontSizeType',
					} }
					fontSize={ {
						value: subHeadFontSize,
						label: 'subHeadFontSize',
					} }
					fontSizeMobile={ {
						value: subHeadFontSizeMobile,
						label: 'subHeadFontSizeMobile',
					} }
					fontSizeTablet={ {
						value: subHeadFontSizeTablet,
						label: 'subHeadFontSizeTablet',
					} }
					lineHeightType={ {
						value: subHeadLineHeightType,
						label: 'subHeadLineHeightType',
					} }
					lineHeight={ {
						value: subHeadLineHeight,
						label: 'subHeadLineHeight',
					} }
					lineHeightMobile={ {
						value: subHeadLineHeightMobile,
						label: 'subHeadLineHeightMobile',
					} }
					lineHeightTablet={ {
						value: subHeadLineHeightTablet,
						label: 'subHeadLineHeightTablet',
					} }
					letterSpacing={ {
						value: subHeadLetterSpacing,
						label: 'subHeadLetterSpacing',
					} }
					letterSpacingTablet={ {
						value: subHeadLetterSpacingTablet,
						label: 'subHeadLetterSpacingTablet',
					} }
					letterSpacingMobile={ {
						value: subHeadLetterSpacingMobile,
						label: 'subHeadLetterSpacingMobile',
					} }
					letterSpacingType={ {
						value: subHeadLetterSpacingType,
						label: 'subHeadLetterSpacingType',
					} }
				/>
			</UAGAdvancedPanelBody>
		);
	};
	const spacingSettings = () => {
		return (
			<UAGAdvancedPanelBody
				title={ __( 'Spacing', 'ultimate-addons-for-gutenberg' ) }
				initialOpen={ false }
			>
				{ showTotaltime && (
					<Range
						label={ __(
							'Time Margin',
							'ultimate-addons-for-gutenberg'
						) }
						setAttributes={ setAttributes }
						value={ timeSpace }
						data={ {
							value: timeSpace,
							label: 'timeSpace',
						} }
						min={ 0 }
						max={ 50 }
						displayUnit={ false }
					/>
				) }
				{ showEstcost && (
					<Range
						label={ __(
							'Cost Margin',
							'ultimate-addons-for-gutenberg'
						) }
						setAttributes={ setAttributes }
						value={ costSpace }
						data={ {
							value: costSpace,
							label: 'costSpace',
						} }
						min={ 0 }
						max={ 50 }
						displayUnit={ false }
					/>
				) }
				<ResponsiveSlider
					label={ __(
						'Row Gap',
						'ultimate-addons-for-gutenberg'
					) }
					data={ {
						desktop: {
							value: row_gap,
							label: 'row_gap',
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
					min={ 0 }
					max={ 200 }
					displayUnit={ false }
					setAttributes={ setAttributes }
				/>
				<Range
					label={ __(
						'Gap Between Steps',
						'ultimate-addons-for-gutenberg'
					) }
					setAttributes={ setAttributes }
					value={ step_gap }
					data={ {
						value: step_gap,
						label: 'step_gap',
					} }
					min={ 0 }
					max={ 200 }
					displayUnit={ false }
				/>
			</UAGAdvancedPanelBody>
		);
	};


	return (
			<>
			<InspectorControls>
				<InspectorTabs>
					<InspectorTab { ...UAGTabs.general }>
						{ titleSettings() }
						{ imageSettings() }
						{ timeSettings() }
						{ costSettings() }
						{ toolsSettings() }
						{ materialsSettings() }
					</InspectorTab>
					<InspectorTab { ...UAGTabs.style }>
						{ headingColorSettings() }
						{ secheadingColorSettings() }
						{ descriptionColorSettings() }
						{ spacingSettings() }
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
