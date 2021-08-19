import React, { Suspense } from 'react';
import lazyLoader from '@Controls/lazy-loader';
import WebfontLoader from '@Components/typography/fontloader';
import TypographyControl from '@Components/typography';
$ = jQuery;
import './style.scss';
import { __ } from '@wordpress/i18n';
import {
	AlignmentToolbar,
	BlockControls,
	MediaUpload,
	InspectorControls,
} from '@wordpress/block-editor';
import AdvancedPopColorControl from "../../components/color-control/advanced-pop-color-control.js";
import InspectorTabs from "../../components/inspector-tabs/InspectorTabs.js";
import InspectorTab, {
	UAGTabs,
} from "../../components/inspector-tabs/InspectorTab.js";
import Range from "../../components/range/Range.js";

import {
	PanelBody,
	SelectControl,
	Button,
	ToggleControl,
	ExternalLink,
	BaseControl
} from '@wordpress/components';

let imageSizeOptions = [
	{
		value: 'thumbnail',
		label: __( 'Thumbnail', 'ultimate-addons-for-gutenberg' ),
	},
	{ value: 'medium', label: __( 'Medium', 'ultimate-addons-for-gutenberg' ) },
	{ value: 'full', label: __( 'Large', 'ultimate-addons-for-gutenberg' ) },
];

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
			headFontSubset,
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
			subHeadFontSubset,
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
			priceFontSubset,
			priceLineHeightType,
			priceLineHeight,
			priceLineHeightTablet,
			priceLineHeightMobile,
			priceLoadGoogleFonts,
			timeSpace,
			costSpace,
			row_gap,
			step_gap,
			timeInHours,
			timeInDays,
			timeInMonths,
			timeInYears,
			timeInMins,
			time,
		},
	} = props;

	const getImageSize = ( sizes ) => {
		const sizeArr = [];
		$.each( sizes, function ( index ) {
			const name = index;
			const p = { value: name, label: name };
			sizeArr.push( p );
		} );
		return sizeArr;
	};

	if ( mainimage && mainimage.sizes ) {
		imageSizeOptions = getImageSize( mainimage.sizes );
	}

	const minsValue = timeInMins ? timeInMins : time;

	let loadHeadingGoogleFonts;
	let loadSubHeadingGoogleFonts;
	let loadPriceGoogleFonts;

	if ( true === headLoadGoogleFonts ) {
		const hconfig = {
			google: {
				families: [
					headFontFamily +
						( headFontWeight ? ':' + headFontWeight : '' ),
				],
			},
		};

		loadHeadingGoogleFonts = (
			<WebfontLoader config={ hconfig }></WebfontLoader>
		);
	}

	if ( true === subHeadLoadGoogleFonts ) {
		const sconfig = {
			google: {
				families: [
					subHeadFontFamily +
						( subHeadFontWeight ? ':' + subHeadFontWeight : '' ),
				],
			},
		};

		loadSubHeadingGoogleFonts = (
			<WebfontLoader config={ sconfig }></WebfontLoader>
		);
	}

	if ( true === priceLoadGoogleFonts ) {
		const pconfig = {
			google: {
				families: [
					priceFontFamily +
						( priceFontWeight ? ':' + priceFontWeight : '' ),
				],
			},
		};

		loadPriceGoogleFonts = (
			<WebfontLoader config={ pconfig }></WebfontLoader>
		);
	}

	const generalSettings = () => {
		return (
			<PanelBody
				initialOpen={ true }
			>
				<SelectControl
					label={ __( 'Tag' ) }
					value={ headingTag }
					onChange={ ( value ) =>
						setAttributes( { headingTag: value } )
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
					] }
				/>
				<BaseControl
					className="editor-bg-image-control"
					label={__("Image", "ultimate-addons-for-gutenberg")}
					id={__("Image", "ultimate-addons-for-gutenberg")}
				>
					<div className="uagb-bg-image">
					<MediaUpload
						title={__(
							"Select Background Image",
							"ultimate-addons-for-gutenberg"
						)}
						onSelect={ ( value ) =>
							setAttributes( { mainimage: value } )
						}
						allowedTypes={["image"]}
						value={mainimage}
						render={ ( { open } ) => (
							<Button isSecondary onClick={ open }>
								{ ( mainimage && mainimage !== "null" && mainimage.url !== "null" && mainimage.url !== "" )
									? 
									__(
										'Replace image',
										'ultimate-addons-for-gutenberg'
									)
									:   
									__(
										'Select Image',
										'ultimate-addons-for-gutenberg'
									)
								}
							</Button>
						) }
					/>
					</div>
					{ ( mainimage && mainimage !== "null" && mainimage.url !== "null" && mainimage.url !== "" ) && (
						<Button
							className="uagb-rm-btn"
							onClick={ () =>
								setAttributes( { mainimage: null } )
							}
							isLink
							isDestructive
						>
							{ __(
								'Remove Image',
								'ultimate-addons-for-gutenberg'
							) }
						</Button>
					) }
					{ ( mainimage && mainimage !== "null" && mainimage.url !== "null" && mainimage.url !== "" ) && (
						<h2>
							{ __( 'Size', 'ultimate-addons-for-gutenberg' ) }
						</h2>
					) }
					{ ( mainimage && mainimage !== "null" && mainimage.url !== "null" && mainimage.url !== "" ) && (
						<SelectControl
							label={ '' }
							options={ imageSizeOptions }
							value={ imgSize }
							onChange={ ( value ) =>
								setAttributes( { imgSize: value } )
							}
						/>
					) }
				</BaseControl>
				{mainimage &&
				mainimage.url !== "null" &&
				mainimage.url !== "" && (
					<SelectControl
						label={__(
							"Image Size",
							"ultimate-addons-for-gutenberg"
						)}
						options={imageSizeOptions}
						value={imgSize}
						onChange={(value) =>
							setAttributes({
								imgSize: value,
							})
						}
					/>
				)}
				</PanelBody>
		);
	};

	const timeSettings = () => {
		return (
			<PanelBody
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
								label={__(
									"Years",
									"ultimate-addons-for-gutenberg"
								)}
								setAttributes={setAttributes}
								value={timeInYears}
								onChange={(value) =>
									setAttributes({ timeInYears: value })
								}
								min={1}
								max={10}
								displayUnit={false}
							/>
							<Range
								label={__(
									"Months",
									"ultimate-addons-for-gutenberg"
								)}
								setAttributes={setAttributes}
								value={timeInMonths}
								onChange={(value) =>
									setAttributes({ timeInMonths: value })
								}
								min={1}
								max={12}
								displayUnit={false}
							/>
							<Range
								label={__(
									"Days",
									"ultimate-addons-for-gutenberg"
								)}
								setAttributes={setAttributes}
								value={timeInDays}
								onChange={(value) =>
									setAttributes({ timeInDays: value })
								}
								min={1}
								max={31}
								displayUnit={false}
							/>
							<Range
								label={__(
									"Hours",
									"ultimate-addons-for-gutenberg"
								)}
								setAttributes={setAttributes}
								value={timeInHours}
								onChange={(value) =>
									setAttributes({ timeInHours: value })
								}
								min={1}
								max={24}
								displayUnit={false}
							/>
							<Range
								label={__(
									"Minutes",
									"ultimate-addons-for-gutenberg"
								)}
								setAttributes={setAttributes}
								value={minsValue}
								onChange={(value) =>
									setAttributes({ timeInMins: value })
								}
								min={1}
								max={60}
								displayUnit={false}
							/>
						</>
				) }
				</PanelBody>
		);
	};
	const costSettings = () => {
		return (
			<PanelBody
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
				</PanelBody>
		);
	};
	const toolsSettings = () => {
		return (
			<PanelBody
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
						label={__(
							"Number of Tools",
							"ultimate-addons-for-gutenberg"
						)}
						setAttributes={setAttributes}
						value={tools_count}
						onChange={ ( newCount ) => {
							const cloneIcons = [ ...tools ];

							if ( cloneIcons.length < newCount ) {
								const incAmount = Math.abs(
									newCount - cloneIcons.length
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
									newCount - cloneIcons.length
								);
								const data_new = cloneIcons;
								for ( let i = 0; i < incAmount; i++ ) {
									data_new.pop();
								}
								setAttributes( { tools: data_new } );
							}
							setAttributes( { tools_count: newCount } );
						} }
						min={ 1 }
						max={ 50 }
						displayUnit={false}
					/>
				) }
	</PanelBody>
		);
	};
	const materialsSettings = () => {
		return (
			<PanelBody
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
						setAttributes={setAttributes}
						value={ material_count }
						onChange={ ( newCount ) => {
							const cloneIcons = [ ...materials ];

							if ( cloneIcons.length < newCount ) {
								const incAmount = Math.abs(
									newCount - cloneIcons.length
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
									newCount - cloneIcons.length
								);
								const data_new = cloneIcons;
								for ( let i = 0; i < incAmount; i++ ) {
									data_new.pop();
								}
								setAttributes( { materials: data_new } );
							}
							setAttributes( { material_count: newCount } );
						} }
						min={ 1 }
						max={ 50 }
						displayUnit={false}
					/>
				) }
			</PanelBody>
		);
	};

	const headingColorSettings = () => {
		return (
			<PanelBody
				title={ __( 'Heading', 'ultimate-addons-for-gutenberg' ) }
				initialOpen={ true }
			>
				<AdvancedPopColorControl
					label={__(
						"Color",
						"ultimate-addons-for-gutenberg"
					)}
					colorValue={headingColor ? headingColor : ""}
					onColorChange={(value) =>
						setAttributes({ headingColor: value })
					}
				/>
				<TypographyControl
					label={ __( 'Typography', 'ultimate-addons-for-gutenberg' ) }
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
					fontSubset={ {
						value: headFontSubset,
						label: 'headFontSubset',
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
				/>
	</PanelBody>
		);
	};
	const secheadingColorSettings = () => {
		return (
			<PanelBody
				title={ __( 'Secondary Heading', 'ultimate-addons-for-gutenberg' ) }
				initialOpen={ false }
			>
				<AdvancedPopColorControl
					label={__(
						"Color",
						"ultimate-addons-for-gutenberg"
					)}
					colorValue={showTotaltimecolor ? showTotaltimecolor : ""}
					onColorChange={(value) =>
						setAttributes({ showTotaltimecolor: value })
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
					fontSubset={ {
						value: priceFontSubset,
						label: 'priceFontSubset',
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
				/>
				</PanelBody>
		);
	};
	const descriptionColorSettings = () => {
		return (
			<PanelBody
				title={ __( 'Description', 'ultimate-addons-for-gutenberg' ) }
				initialOpen={ false }
			>
				<AdvancedPopColorControl
					label={__(
						"Color",
						"ultimate-addons-for-gutenberg"
					)}
					colorValue={subHeadingColor ? subHeadingColor : ""}
					onColorChange={(value) =>
						setAttributes({ subHeadingColor: value })
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
					fontSubset={ {
						value: subHeadFontSubset,
						label: 'subHeadFontSubset',
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
				/>
			</PanelBody>
		);
	};
	const spacingSettings = () => {
		return (
			<PanelBody
				title={ __( 'Spacing', 'ultimate-addons-for-gutenberg' ) }
				initialOpen={ false }
			>
				{ showTotaltime && (
					<Range
						label={__(
							"Time Margin",
							"ultimate-addons-for-gutenberg"
						)}
						setAttributes={setAttributes}
						value={timeSpace}
						onChange={(value) =>
							setAttributes({ timeSpace: value })
						}
						min={0}
						max={50}
						displayUnit={false}
					/>
				) }
				{ showEstcost && (
					<Range
						label={__(
							"Cost Margin",
							"ultimate-addons-for-gutenberg"
						)}
						setAttributes={setAttributes}
						value={costSpace}
						onChange={(value) =>
							setAttributes({ costSpace: value })
						}
						min={0}
						max={50}
						displayUnit={false}
					/>
				) }
				<Range
					label={__(
						"Row Gap",
						"ultimate-addons-for-gutenberg"
					)}
					setAttributes={setAttributes}
					value={row_gap}
					onChange={(value) =>
						setAttributes({ row_gap: value })
					}
					min={0}
					max={500}
					displayUnit={false}
				/>
				<Range
					label={__(
						"Gap Between Steps",
						"ultimate-addons-for-gutenberg"
					)}
					setAttributes={setAttributes}
					value={step_gap}
					onChange={(value) =>
						setAttributes({ step_gap: value })
					}
					min={0}
					max={500}
					displayUnit={false}
				/>
			</PanelBody>
		);
	};

	const blockControls = () => {
		return (
			<BlockControls key="index">
				<AlignmentToolbar
					value={ overallAlignment }
					onChange={ ( value ) =>
						setAttributes( { overallAlignment: value } )
					}
				/>
			</BlockControls>
		);
	};

	return (
		<Suspense fallback={ lazyLoader() }>
			{ blockControls() }
			<InspectorControls>
				<InspectorTabs>
					<InspectorTab {...UAGTabs.general}>
					{ generalSettings() }
					{ timeSettings() }
					{ costSettings() }
					{ toolsSettings() }
					{ materialsSettings() }
					</InspectorTab>
					<InspectorTab {...UAGTabs.style}>
					{ headingColorSettings() }
					{ secheadingColorSettings() }
					{ descriptionColorSettings() }
					{ spacingSettings() }
					</InspectorTab>
					<InspectorTab {...UAGTabs.advance}></InspectorTab>
				</InspectorTabs>
			</InspectorControls>
			{ loadHeadingGoogleFonts }
			{ loadSubHeadingGoogleFonts }
			{ loadPriceGoogleFonts }
		</Suspense>
	);
};

export default React.memo( Settings );
