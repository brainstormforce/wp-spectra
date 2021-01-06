/**
 * External dependencies
 */
import classnames from "classnames"
import styling from "./styling"
import BoxShadowControl from "../../components/box-shadow"
import TypographyControl from "../../components/typography"
import WebfontLoader from "../../components/typography/fontloader"


const { __ } = wp.i18n
const {
	PanelBody,
	RangeControl,
	SelectControl,
	TabPanel,
	Dashicon,
	TextControl,
	Button,
	ButtonGroup,
	ToggleControl
} = wp.components

const {
	InspectorControls,
	ColorPalette,	
} = wp.blockEditor
 
const { 
	Component,
	Fragment 
} = wp.element

const { withSelect } = wp.data

class UAGBTaxonomyList extends Component {

    constructor() {
		super( ...arguments )
        this.onSelectPostType = this.onSelectPostType.bind( this )
		this.onSelectTaxonomyType = this.onSelectTaxonomyType.bind( this )
	}
    onSelectPostType( value ) {
		const { setAttributes } = this.props

		setAttributes( { postType: value } )
		setAttributes( { categories: "" } )
		setAttributes( { taxonomyType: "" } )
	}
	
	onSelectTaxonomyType( value ) {
		const { setAttributes } = this.props

		setAttributes( { taxonomyType: value } )
		setAttributes( { categories: "" } )
	}
	componentDidMount() {

		// Assigning block_id in the attribute.
		this.props.setAttributes( { block_id: this.props.clientId.substr( 0, 8 ) } )
		// Pushing Style tag for this block css.
		const $style = document.createElement( "style" )
		$style.setAttribute( "id", "uagb-style-taxonomy-list-" + this.props.clientId.substr( 0, 8 ) )
		document.head.appendChild( $style )
	}

	componentDidUpdate(prevProps, prevState) {		
        
        var element = document.getElementById( "uagb-style-taxonomy-list-" + this.props.clientId.substr( 0, 8 ) )

		if( null != element && "undefined" != typeof element ) {
			element.innerHTML = styling( this.props )
        }
	}

    render() {
        // Caching all Props.
		const {
			className,
			attributes,
			setAttributes,
			taxonomyList,
			categoriesList,
			termsList			
		} = this.props		

		// Caching all attributes.
		const {
            block_id,
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
			columnGap,
			contentPadding,
			contentPaddingMobile,
			contentPaddingTablet,
			titleBottomSpace,			
			alignment,
			listStyle,
			seperatorStyle,
			seperatorWidth,
			seperatorThickness,
			seperatorColor,
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
			titleFontSubset,
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
			countFontSubset,
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
			listFontSubset,
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
			listDisplayStyle,
			showhierarchy
        } = attributes
		
		const taxonomy_list_setting = (showEmptyTaxonomy) ? taxonomyList : termsList;
		
		if ( "" != taxonomy_list_setting && undefined != taxonomy_list_setting ) {
			var taxonomyListOptions = [
				{ value: "", label: __( "Select Taxonomy" ) }
			]
			Object.keys( taxonomy_list_setting ).map( ( item, thisIndex ) => {
				return taxonomyListOptions.push( { value : taxonomyList[item]["name"], label: taxonomyList[item]["label"] } )
			} )
		}

		let loadTitleGoogleFonts
		let loadCountGoogleFonts
		let loadListGoogleFonts


		if( titleLoadGoogleFonts == true ) {

			const titleconfig = {
				google: {
					families: [ titleFontFamily + ( titleFontWeight ? ":" + titleFontWeight : "" ) ],
				},
			}

			loadTitleGoogleFonts = (
				<WebfontLoader config={ titleconfig }>
				</WebfontLoader>
			)
		}

		if( countLoadGoogleFonts == true ) {

			const countconfig = {
				google: {
					families: [ countFontFamily + ( countFontWeight ? ":" + countFontWeight : "" ) ],
				},
			}

			loadCountGoogleFonts = (
				<WebfontLoader config={ countconfig }>
				</WebfontLoader>
			)
		}

		if( listLoadGoogleFonts == true ) {

			const listconfig = {
				google: {
					families: [ listFontFamily + ( listFontWeight ? ":" + listFontWeight : "" ) ],
				},
			}

			loadListGoogleFonts = (
				<WebfontLoader config={ listconfig }>
				</WebfontLoader>
			)
		}
		

		// All Controls.
		const color_control = (
			<Fragment>
				<h2 className="uagb-setting-label">{ __( "Text Color" ) }<span className="components-base-control__label"><span className="component-color-indicator" style={{ backgroundColor: listTextColor }} ></span></span></h2>
				<ColorPalette
				value={ listTextColor }
				onChange={ ( colorValue ) => setAttributes( { listTextColor: colorValue } ) }
				allowReset
				/><br/>
				{ "none" != listStyle && (
					<Fragment>
						<h2 className="uagb-setting-label">{ __( "Bullet/Numbers Color" ) }<span className="components-base-control__label"><span className="component-color-indicator" style={{ backgroundColor: listStyleColor }} ></span></span></h2>
						<ColorPalette
						value={ listStyleColor }
						onChange={ ( colorValue ) => setAttributes( { listStyleColor: colorValue } ) }
						allowReset
						/>
					</Fragment>
				)}
			</Fragment>

		)
		const color_control_hover = (
			<Fragment>
				<h2 className="uagb-setting-label">{ __( "Text Hover Color" ) }<span className="components-base-control__label"><span className="component-color-indicator" style={{ backgroundColor: hoverlistTextColor }} ></span></span></h2>
				<ColorPalette
				value={ hoverlistTextColor }
				onChange={ ( colorValue ) => setAttributes( { hoverlistTextColor: colorValue } ) }
				allowReset
				/><br/>
				{ "none" != listStyle && (
					<Fragment>
						<h2 className="uagb-setting-label">{ __( "Bullet/Numbers Hover Color" ) }<span className="components-base-control__label"><span className="component-color-indicator" style={{ backgroundColor: hoverlistStyleColor }} ></span></span></h2>
						<ColorPalette
						value={ hoverlistStyleColor }
						onChange={ ( colorValue ) => setAttributes( { hoverlistStyleColor: colorValue } ) }
						allowReset
						/>
					</Fragment>
				)}
			</Fragment>

		)
				
		const inspectorControlsSettings = (
			<InspectorControls>
				<PanelBody title={ __( "General" ) }>
					<SelectControl
						label={ __( "Layout" ) }
						value={ layout }
						onChange={ ( value ) => setAttributes( { layout: value } ) }
						options={ [
							{ value: "grid", label: __( "Grid" ) },
							{ value: "list", label: __( "List" ) },
						] }
					/>
					{ 'grid' === layout &&						
						<TabPanel className="uagb-size-type-field-tabs uagb-without-size-type" activeClass="active-tab"
							tabs={ [
								{
									name: "desktop",
									title: <Dashicon icon="desktop" />,
									className: "uagb-desktop-tab uagb-responsive-tabs",
								},
								{
									name: "tablet",
									title: <Dashicon icon="tablet" />,
									className: "uagb-tablet-tab uagb-responsive-tabs",
								},
								{
									name: "mobile",
									title: <Dashicon icon="smartphone" />,
									className: "uagb-mobile-tab uagb-responsive-tabs",
								},
							] }>
							{
								( tab ) => {
									let tabout

									if ( "mobile" === tab.name ) {
										tabout = (
											<RangeControl
												label={ __( "Mobile Columns" ) }
												value={ mcolumns }
												onChange={ ( value ) => setAttributes( { mcolumns: value } ) }
												min={ 1 }
												max={ 2 }
											/>
										)
									} else if ( "tablet" === tab.name ) {
										tabout = (
											<RangeControl
												label={ __( "Tab Columns" ) }
												value={ tcolumns }
												onChange={ ( value ) => setAttributes( { tcolumns: value } ) }
												min={ 1 }
												max={ 3 }
											/>
										)
									} else {
										tabout = (
											<RangeControl
												label={ __( "Desktop Columns" ) }
												value={ columns }
												onChange={ ( value ) => setAttributes( { columns: value } ) }
												min={ 1 }
												max={ 4 }
											/>
										)
									}

									return <label>{ tabout }</label>
								}
							}
						</TabPanel>
					}
					<hr className="uagb-editor__separator" />
					<SelectControl
						label={ __( "Post Type" ) }
						value={ postType }
						onChange={ ( value ) => this.onSelectPostType( value ) }
						options={ uagb_blocks_info.post_types }
						/>				
					{ "" != taxonomyList &&
						<SelectControl
						label={ __( "Taxonomy" ) }
						value={ taxonomyType }
						onChange={ ( value ) => this.onSelectTaxonomyType( value ) }
						options={ taxonomyListOptions }
						/>
					}
					{ "" == taxonomyList && (
							<TextControl
								autoComplete="off"
								label={ __( 'Display Message' ) }
								value={ noTaxDisplaytext }
								onChange={ ( value ) => setAttributes( { noTaxDisplaytext: value } ) }
								help={ __( "If Taxonomy Not Found" ) }
								/>
					)}
					{"list" == layout && (
						<Fragment>
							<p className="uagb-setting-label">{ __( "Display Style" ) }</p>
							<ButtonGroup className="uagb-list-display-style-group">
								<Button
									key={ "list" }								
									label="List"
									onClick={ () => setAttributes( { listDisplayStyle: "list" } ) }
									aria-pressed = { "list" === listDisplayStyle }
									isPrimary = { "list" === listDisplayStyle }
								>List</Button>
								<Button
									key={ "dropdown" }								
									label="Dropdown"
									onClick={ () => setAttributes( { listDisplayStyle: "dropdown" } ) }
									aria-pressed = { "dropdown" === listDisplayStyle }
									isPrimary = { "dropdown" === listDisplayStyle }
								>Dropdown</Button>
							</ButtonGroup>
						</Fragment>
					)}

					<ToggleControl
						label={ __( "Show Empty Taxonomy" ) }
						checked={ showEmptyTaxonomy }
						onChange={ ( value ) => setAttributes( { showEmptyTaxonomy: ! showEmptyTaxonomy } ) }
						help={__( "Show Empty Taxonomy in list " )}
					/>					
					<ToggleControl
						label={ __( "Show Posts Count" ) }
						checked={ showCount }
						onChange={ ( value ) => setAttributes( { showCount: ! showCount } ) }
						help={__( "Show Count of taxonomy " )}
					/>

					{ "list" == layout && "list" == listDisplayStyle && "post_tag" !== taxonomyType && (
						<ToggleControl
						label={ __( "Show Hierarchy" ) }
						checked={ showhierarchy }
						onChange={ ( value ) => setAttributes( { showhierarchy: ! showhierarchy } ) }
						help={__( "Show Hierarchy of taxonomy " )}
						/>
					)}

					{"grid" == layout && (
						<Fragment>
							<p className="uagb-setting-label">{ __( "Alignment" ) }</p>
							<Button
								key={ "left" }
								icon="editor-alignleft"
								label="Left"
								onClick={ () => setAttributes( { alignment: "left" } ) }
								aria-pressed = { "left" === alignment }
								isPrimary = { "left" === alignment }
							/>
							<Button
								key={ "center" }
								icon="editor-aligncenter"
								label="Center"
								onClick={ () => setAttributes( { alignment: "center" } ) }
								aria-pressed = { "center" === alignment }
								isPrimary = { "center" === alignment }
							/>
							<Button
								key={ "right" }
								icon="editor-alignright"
								label="Right"
								onClick={ () => setAttributes( { alignment: "right" } ) }
								aria-pressed = { "right" === alignment }
								isPrimary = { "right" === alignment }
							/>	
						</Fragment>
					)}

					{"list" == layout && "dropdown" !== listDisplayStyle && (
						<Fragment>							
							<p className="uagb-setting-label">{ __( "List Style" ) }</p>
								<Button
									key={ "bullet" }
									icon="editor-ul"
									label="Bullet"
									onClick={ () => setAttributes( { listStyle: "disc" } ) }
									aria-pressed = { "disc" === listStyle }
									isPrimary = { "disc" === listStyle }
								/>
								<Button
									key={ "numbers" }
									icon="editor-ol"
									label="Numbers"
									onClick={ () => setAttributes( { listStyle: "decimal" } ) }
									aria-pressed = { "decimal" === listStyle }
									isPrimary = { "decimal" === listStyle }
								/>
								<Button
									key={ "none" }
									icon="menu"
									label="None"
									onClick={ () => setAttributes( { listStyle: "none" } ) }
									aria-pressed = { "none" === listStyle }
									isPrimary = { "none" === listStyle }
								/>			
						</Fragment>
					)}
				

                </PanelBody>
			{"dropdown" !== listDisplayStyle &&(
			<Fragment>
				
				<PanelBody title={ __( "Color" ) } initialOpen={ false }>
					{ "grid" == layout && (
						<Fragment>					
							
							<p className="uagb-setting-label">{ __( "Background Color" ) }<span className="components-base-control__label"><span className="component-color-indicator" style={{ backgroundColor: bgColor }} ></span></span></p>
							<ColorPalette
							value={ bgColor }
							onChange={ ( colorValue ) => setAttributes( { bgColor: colorValue } ) }
							allowReset
							/>
							<p className="uagb-setting-label">{ __( "Title Color" ) }<span className="components-base-control__label"><span className="component-color-indicator" style={{ backgroundColor: titleColor }} ></span></span></p>
							<ColorPalette
							value={ titleColor }
							onChange={ ( colorValue ) => setAttributes( { titleColor: colorValue } ) }
							allowReset
							/>
							{ showCount && (
								<Fragment>
									<p className="uagb-setting-label">{ __( "Count Color" ) }<span className="components-base-control__label"><span className="component-color-indicator" style={{ backgroundColor: countColor }} ></span></span></p>
									<ColorPalette
									value={ countColor }
									onChange={ ( colorValue ) => setAttributes( { countColor: colorValue } ) }
									allowReset
									/>	
								</Fragment>						
							)}
							
						</Fragment>
					) }	

					{ "list" == layout && (
						<TabPanel className="uagb-inspect-tabs uagb-inspect-tabs-col-2"
							activeClass="active-tab"
							tabs={ [
								{
									name: "normal",
									title: __( "Normal" ),
									className: "uagb-normal-tab",
								},
								{
									name: "hover",
									title: __( "Hover" ),
									className: "uagb-hover-tab",
								},
							] }>
							{
								( tabName ) => {
									let color_tab
									if( "normal" === tabName.name ) {
										color_tab = color_control
									}else {
										color_tab = color_control_hover
									}
									return <div>{ color_tab }</div>
								}
							}
						</TabPanel>		
					) }	

				</PanelBody>

				<PanelBody title={ __( "Spacing" ) } initialOpen={ false }>

					{"grid" == layout && (
						<Fragment>
							<RangeControl
								label={ __( "Row Gap" ) }
								value={ rowGap }
								onChange={ ( value ) => setAttributes( { rowGap: value } ) }
								min={ 0 }
								max={ 50 }
								allowReset
							/>
							<RangeControl
								label={ __( "Column Gap" ) }
								value={ columnGap }
								onChange={ ( value ) => setAttributes( { columnGap: value } ) }
								min={ 0 }
								max={ 50 }
								allowReset
							/>
							<hr className="uagb-editor__separator" />

							<TabPanel className="uagb-size-type-field-tabs uagb-without-size-type" activeClass="active-tab"
							tabs={ [
								{
									name: "desktop",
									title: <Dashicon icon="desktop" />,
									className: "uagb-desktop-tab uagb-responsive-tabs",
								},
								{
									name: "tablet",
									title: <Dashicon icon="tablet" />,
									className: "uagb-tablet-tab uagb-responsive-tabs",
								},
								{
									name: "mobile",
									title: <Dashicon icon="smartphone" />,
									className: "uagb-mobile-tab uagb-responsive-tabs",
								},
							] }>
							{
								( tab ) => {
									let tabout
									
									if ( "mobile" === tab.name ) {
										tabout = (
											<RangeControl
											label={ __( "Mobile Content Padding" ) }
											value={ contentPaddingMobile }
											onChange={ ( value ) => setAttributes( { contentPaddingMobile: value } ) }
											min={ 0 }
											max={ 100 }
											/>
											)
										} else if ( "tablet" === tab.name ) {
											tabout = (
												<RangeControl
												label={ __( "Tab Content Padding" ) }
												value={ contentPaddingTablet }
												onChange={ ( value ) => setAttributes( { contentPaddingTablet: value } ) }
												min={ 0 }
												max={ 100 }
												/>
												)
											} else {
												tabout = (
													<RangeControl
													label={ __( "Content Padding" ) }
													value={ contentPadding }
													onChange={ ( value ) => setAttributes( { contentPadding: value } ) }
													min={ 10 }
													max={ 100 }
													/>
													)
												}
												
												return <label>{ tabout }</label>
											}
										}
							</TabPanel>
							{showCount && (
								<Fragment>
									<hr className="uagb-editor__separator" />
									<RangeControl
										label={ __( "Title Bottom Spacing" ) }
										value={ titleBottomSpace }
										onChange={ ( value ) => setAttributes( { titleBottomSpace: value } ) }
										min={ 0 }
										max={ 50 }
										allowReset
									/>	
								</Fragment>
							)}							
						</Fragment>
					)}

					{"list" == layout && (
						<RangeControl
							label={ __( "Bottom Margin" ) }
							value={ listBottomMargin }
							onChange={ ( value ) => setAttributes( { listBottomMargin: value } ) }
							min={ 0 }
							max={ 100 }
							allowReset
						/>
					)}				
				</PanelBody>

				<PanelBody title={ __( "Style" ) } initialOpen={ false }>					
							
					{"grid" == layout && (
						<Fragment>

							<p className="uagb-setting-label">{ __( "Title " ) }</p>
							<TypographyControl
								label={ __( "Typography" ) }
								attributes = { attributes }
								setAttributes = { setAttributes }
								loadGoogleFonts = { { value: titleLoadGoogleFonts, label: "titleLoadGoogleFonts" } }
								fontFamily = { { value: titleFontFamily, label: "titleFontFamily" } }
								fontWeight = { { value: titleFontWeight, label: "titleFontWeight" } }
								fontSubset = { { value: titleFontSubset, label: "titleFontSubset" } }
								fontSizeType = { { value: titleFontSizeType, label: "titleFontSizeType" } }
								fontSize = { { value: titleFontSize, label: "titleFontSize" } }
								fontSizeMobile = { { value: titleFontSizeMobile, label: "titleFontSizeMobile" } }
								fontSizeTablet= { { value: titleFontSizeTablet, label: "titleFontSizeTablet" } }
								lineHeightType = { { value: titleLineHeightType, label: "titleLineHeightType" } }
								lineHeight = { { value: titleLineHeight, label: "titleLineHeight" } }
								lineHeightMobile = { { value: titleLineHeightMobile, label: "titleLineHeightMobile" } }
								lineHeightTablet= { { value: titleLineHeightTablet, label: "titleLineHeightTablet" } }
								/>
							{ showCount && (
								<Fragment>
								<hr className="uagb-editor__separator" />
								<p className="uagb-setting-label">{ __( "Count " ) }</p>
								<TypographyControl
									label={ __( "Typography" ) }
									attributes = { attributes }
									setAttributes = { setAttributes }
									loadGoogleFonts = { { value: countLoadGoogleFonts, label: "countLoadGoogleFonts" } }
									fontFamily = { { value: countFontFamily, label: "countFontFamily" } }
									fontWeight = { { value: countFontWeight, label: "countFontWeight" } }
									fontSubset = { { value: countFontSubset, label: "countFontSubset" } }
									fontSizeType = { { value: countFontSizeType, label: "countFontSizeType" } }
									fontSize = { { value: countFontSize, label: "countFontSize" } }
									fontSizeMobile = { { value: countFontSizeMobile, label: "countFontSizeMobile" } }
									fontSizeTablet= { { value: countFontSizeTablet, label: "countFontSizeTablet" } }
									lineHeightType = { { value: countLineHeightType, label: "countLineHeightType" } }
									lineHeight = { { value: countLineHeight, label: "countLineHeight" } }
									lineHeightMobile = { { value: countLineHeightMobile, label: "countLineHeightMobile" } }
									lineHeightTablet= { { value: countLineHeightTablet, label: "countLineHeightTablet" } }
								/>	
							</Fragment>	
							)}							
							<hr className="uagb-editor__separator" />							
							<BoxShadowControl
							setAttributes = { setAttributes }
							label = { __( "Box Shadow" ) }
							boxShadowColor = { { value: boxShadowColor, label: __( "Color" ) } }
							boxShadowHOffset = { { value: boxShadowHOffset, label: __( "Horizontal" ) } }
							boxShadowVOffset = { { value: boxShadowVOffset, label: __( "Vertical" ) } }
							boxShadowBlur = { { value: boxShadowBlur, label: __( "Blur" ) } }
							boxShadowSpread = { { value: boxShadowSpread, label: __( "Spread" ) } }
							boxShadowPosition = { { value: boxShadowPosition, label: __( "Position" ) } }
							/>
							<hr className="uagb-editor__separator" />
							<SelectControl
									label={ __( "Border Style" ) }
									value={ borderStyle }
									onChange={ ( value ) => setAttributes( { borderStyle: value } ) }
									options={ [
										{ value: "none", label: __( "None" ) },
										{ value: "solid", label: __( "Solid" ) },
										{ value: "dotted", label: __( "Dotted" ) },
										{ value: "dashed", label: __( "Dashed" ) },
										{ value: "double", label: __( "Double" ) },
										{ value: "groove", label: __( "Groove" ) },
										{ value: "inset", label: __( "Inset" ) },
										{ value: "outset", label: __( "Outset" ) },
										{ value: "ridge", label: __( "Ridge" ) },
									] }
								/>
								{ "none" != borderStyle &&
									<Fragment>										
										<RangeControl
											label={ __( "Border Thickness" ) }
											value={ borderThickness }
											onChange={ ( value ) => setAttributes( { borderThickness: value } ) }
											min={ 0 }
											max={ 10 }
											allowReset
										/>
										<RangeControl
											label={ __( "Rounded Corners (px)" ) }
											value={ borderRadius }
											onChange={ value => {
												setAttributes( { borderRadius: value } )
											} }
											min={ 0 }
											max={ 50 }
											allowReset
										/>										
										<p className="uagb-setting-label">{ __( "Border Color" ) }<span className="components-base-control__label"><span className="component-color-indicator" style={{ backgroundColor: borderColor }} ></span></span></p>
										<ColorPalette
											value={ borderColor }
											onChange={ ( colorValue ) => setAttributes( { borderColor: colorValue } ) }
											allowReset
										/>
										
									</Fragment>
								}
						</Fragment>
					)}

					{"list" == layout && (
						
						<Fragment>
								<SelectControl
									label={ __( "Separator Style" ) }
									value={ seperatorStyle }
									onChange={ ( value ) => setAttributes( { seperatorStyle: value } ) }
									options={ [
										{ value: "none", label: __( "None" ) },
										{ value: "solid", label: __( "Solid" ) },
										{ value: "dotted", label: __( "Dotted" ) },
										{ value: "dashed", label: __( "Dashed" ) },
										{ value: "double", label: __( "Double" ) },
										{ value: "groove", label: __( "Groove" ) },
										{ value: "inset", label: __( "Inset" ) },
										{ value: "outset", label: __( "Outset" ) },
										{ value: "ridge", label: __( "Ridge" ) },
									] }
								/>
								{ "none" != seperatorStyle &&
									<Fragment>
										<RangeControl
											label={ __( "Separator Width (%)" ) }
											value={ seperatorWidth }
											onChange={ ( value ) => setAttributes( { seperatorWidth: value } ) }
											min={ 0 }
											max={ 100 }
											allowReset
										/>
										<RangeControl
											label={ __( "Separator Thickness" ) }
											value={ seperatorThickness }
											onChange={ ( value ) => setAttributes( { seperatorThickness: value } ) }
											min={ 0 }
											max={ 20 }
											allowReset
										/>
										<Fragment>
											<p className="uagb-setting-label">{ __( "Separator Color" ) }<span className="components-base-control__label"><span className="component-color-indicator" style={{ backgroundColor: seperatorColor }} ></span></span></p>
											<ColorPalette
												value={ seperatorColor }
												onChange={ ( colorValue ) => setAttributes( { seperatorColor: colorValue } ) }
												allowReset
											/>
										</Fragment>
									</Fragment>
								}

								<hr className="uagb-editor__separator" />
								
								<p className="uagb-setting-label">{ __( "List " ) }</p>
								<TypographyControl
								label={ __( "Typography" ) }
								attributes = { attributes }
								setAttributes = { setAttributes }
								loadGoogleFonts = { { value: listLoadGoogleFonts, label: "listLoadGoogleFonts" } }
								fontFamily = { { value: listFontFamily, label: "listFontFamily" } }
								fontWeight = { { value: listFontWeight, label: "listFontWeight" } }
								fontSubset = { { value: listFontSubset, label: "listFontSubset" } }
								fontSizeType = { { value: listFontSizeType, label: "listFontSizeType" } }
								fontSize = { { value: listFontSize, label: "listFontSize" } }
								fontSizeMobile = { { value: listFontSizeMobile, label: "listFontSizeMobile" } }
								fontSizeTablet= { { value: listFontSizeTablet, label: "listFontSizeTablet" } }
								lineHeightType = { { value: listLineHeightType, label: "listLineHeightType" } }
								lineHeight = { { value: listLineHeight, label: "listLineHeight" } }
								lineHeightMobile = { { value: listLineHeightMobile, label: "listLineHeightMobile" } }
								lineHeightTablet= { { value: listLineHeightTablet, label: "listLineHeightTablet" } }
								/>
								
							</Fragment>
						
					)}				
							
				</PanelBody>
				
			</Fragment>
			)}
			</InspectorControls>
		)
		
        return (
				<Fragment>							
					{ inspectorControlsSettings }
					<div className={ classnames(					
					"uagb-taxonomy__outer-wrap",
					`uagb-block-${this.props.clientId.substr( 0, 8 )}`
					) }>
						<div className={ classnames(						
						"uagb-taxonomy-wrap",
						`uagb-layout-${layout}`
						) }>

							{"grid" == layout && ( 
								categoriesList.map((p,index)=>
									<div className="uagb-taxomony-box" key={index}>
										<a className="uagb-tax-link" href={p.link}>
											<h4 className="uagb-tax-title">{p.name}</h4>
											{showCount && (
												<div className="uagb-tax-count">{p.count} {p.count > "1" ? `${p.singular_name}s` :p.singular_name}</div>
											)}
										</a>
									</div>						
								)
								
							)}

							{"list" == layout && "list" == listDisplayStyle && ( 
								<ul className="uagb-list-wrap">
									{categoriesList.map((p,index)=>										
										<li className="uagb-tax-list" key={index}>
											<div className="uagb-tax-link-wrap">
												<a className="uagb-tax-link" href={p.link}>{p.name}</a>
												{ showCount && (
												<span className="uagb-tax-list-count">{` (${p.count})`}</span>
												)}
												{showhierarchy && p.children != null && (														
													<ul className="uagb-taxonomy-list-children">
														{ Object.keys( p.children ).map( function( key, index ) {
															return 	<li className="uagb-tax-list" key={index}>
																<a className="uagb-tax-link" href={`${p.link}${p.children[key]["slug"]}`}>{p.children[key]["name"]}</a>
																{ showCount && (
																	<span>{` (${p.children[key]["count"]})`}</span>
																)}
																</li>														
														} ) }
													</ul>
												)}
											</div>

											{"none" != seperatorStyle && (
												<div className="uagb-tax-separator-wrap">
													<div className="uagb-tax-separator"></div>
												</div>
											)}

										</li>
									)}
								</ul>
							)}
							
							{"list" == layout && "dropdown" == listDisplayStyle && ( 
								<select className="uagb-list-dropdown-wrap">
									{ categoriesList.map((p,index)=>										
										<option value={p.link}>
											{ p.name } 
											{ showCount && ( ` (${p.count})` )}
										</option>
									) }
								</select>
							)}
						</div>
							
						{/* If no Taxonomy is available. */}
						{categoriesList == "" && (
							<div className="uagb-tax-not-available">{noTaxDisplaytext}</div>
						)}

					</div>	
					{ loadTitleGoogleFonts }
					{ loadCountGoogleFonts }
					{ loadListGoogleFonts }

				</Fragment>
        )
    }
}

export default withSelect( ( select, props ) => {

	const { categories, postsToShow, order, orderBy, postType, taxonomyType,showEmptyTaxonomy} = props.attributes
	const { getEntityRecords } = select( "core" )

	
	let allTaxonomy = uagb_blocks_info.taxonomy_list
	let currentTax = allTaxonomy[postType]
	
	var listToShowTaxonomy = (showEmptyTaxonomy) ? "with_empty_taxonomy" : "without_empty_taxonomy";
	
	let categoriesList = []
	if ( "undefined" != typeof currentTax ) {
		if ("undefined" != typeof  currentTax[listToShowTaxonomy] && "undefined" != typeof currentTax[listToShowTaxonomy][taxonomyType] ) {
			categoriesList = currentTax[listToShowTaxonomy][taxonomyType]
		}
	}
	let latestPostsQuery = {
		order: order,
		orderby: orderBy,
		per_page: postsToShow,
	}

	return {
		latestPosts: getEntityRecords( 'postType' ,postType, latestPostsQuery ),
		categoriesList: categoriesList,
		taxonomyList: ( "undefined" != typeof currentTax ) ? currentTax["taxonomy"] : [] ,
		termsList: ( "undefined" != typeof currentTax ) ? currentTax["terms"] : [] 

	}

} )( UAGBTaxonomyList )
