/**
 * External dependencies
 */
import classnames from "classnames"
import styling from "./styling"

import UAGB_Block_Icons from "../../../dist/blocks/uagb-controls/block-icons"



const { __ } = wp.i18n
const {
	PanelBody,
	RangeControl,
	SelectControl,
	TabPanel,
	Dashicon,
	TextControl,
	IconButton
} = wp.components

const {
	InspectorControls,
	ColorPalette,	
} = wp.blockEditor
 
const { Component,Fragment } = wp.element
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
			latestPosts
		} = this.props		

		// Caching all attributes.
		const {
            block_id,
            postType,
			postToShow,
			taxonomyType,
			categories,
			order,
			orderBy,
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
			titleBottomSpace,
			titleAlignment,
			countAlignment,
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
			noTaxDisplaytext

        } = attributes

		let taxonomyListOptions = [
			{ value: "", label: __( "Select Taxonomy" ) }
		]

		if ( "" != taxonomyList ) {
			Object.keys( taxonomyList ).map( ( item, thisIndex ) => {
				return taxonomyListOptions.push( { value : taxonomyList[item]["name"], label: taxonomyList[item]["label"] } )
			} )
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
				<h2 className="uagb-setting-label">{ __( "Bullet/Numbers Color" ) }<span className="components-base-control__label"><span className="component-color-indicator" style={{ backgroundColor: listStyleColor }} ></span></span></h2>
				<ColorPalette
				value={ listStyleColor }
				onChange={ ( colorValue ) => setAttributes( { listStyleColor: colorValue } ) }
				allowReset
				/>
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
				<h2 className="uagb-setting-label">{ __( "Bullet/Numbers Hover Color" ) }<span className="components-base-control__label"><span className="component-color-indicator" style={{ backgroundColor: hoverlistStyleColor }} ></span></span></h2>
				<ColorPalette
				value={ hoverlistStyleColor }
				onChange={ ( colorValue ) => setAttributes( { hoverlistStyleColor: colorValue } ) }
				allowReset
				/>
			</Fragment>

		)
		const setting_label = layout == "grid" ? "Grid Settings" : "List Settings" 
		
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
												max={ 4 }
											/>
										)
									} else {
										tabout = (
											<RangeControl
												label={ __( "Desktop Columns" ) }
												value={ columns }
												onChange={ ( value ) => setAttributes( { columns: value } ) }
												min={ 1 }
												max={ 6 }
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
                </PanelBody>
				
				<PanelBody title={ __( setting_label ) } initialOpen={ false }>

					{ layout == "grid" && (
						<Fragment>						
						<PanelBody title={ __( "Design" ) } initialOpen={ false }>
							<p className="uagb-setting-label">{ __( "Title Alignment" ) }</p>
							<IconButton
								key={ "left" }
								icon="editor-alignleft"
								label="Left"
								onClick={ () => setAttributes( { titleAlignment: "left" } ) }
								aria-pressed = { "left" === titleAlignment }
								isPrimary = { "left" === titleAlignment }
							/>
							<IconButton
								key={ "center" }
								icon="editor-aligncenter"
								label="Right"
								onClick={ () => setAttributes( { titleAlignment: "center" } ) }
								aria-pressed = { "center" === titleAlignment }
								isPrimary = { "center" === titleAlignment }
							/>
							<IconButton
								key={ "right" }
								icon="editor-alignright"
								label="Right"
								onClick={ () => setAttributes( { titleAlignment: "right" } ) }
								aria-pressed = { "right" === titleAlignment }
								isPrimary = { "right" === titleAlignment }
							/>
							<p className="uagb-setting-label">{ __( "Count Alignment" ) }</p>
							<IconButton
								key={ "left" }
								icon="editor-alignleft"
								label="Left"
								onClick={ () => setAttributes( { countAlignment: "left" } ) }
								aria-pressed = { "left" === countAlignment }
								isPrimary = { "left" === countAlignment }
							/>
							<IconButton
								key={ "center" }
								icon="editor-aligncenter"
								label="Right"
								onClick={ () => setAttributes( { countAlignment: "center" } ) }
								aria-pressed = { "center" === countAlignment }
								isPrimary = { "center" === countAlignment }
							/>
							<IconButton
								key={ "right" }
								icon="editor-alignright"
								label="Right"
								onClick={ () => setAttributes( { countAlignment: "right" } ) }
								aria-pressed = { "right" === countAlignment }
								isPrimary = { "right" === countAlignment }
							/>
						</PanelBody>				
						<PanelBody title={ __( "Spacing" ) } initialOpen={ false }>
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
							<RangeControl
								label={ __( "Content Padding" ) }
								value={ contentPadding }
								onChange={ ( value ) => setAttributes( { contentPadding: value } ) }
								min={ 10 }
								max={ 100 }
								allowReset
							/>
							<RangeControl
								label={ __( "Content Padding (Mobile)" ) }
								value={ contentPaddingMobile }
								onChange={ ( value ) => setAttributes( { contentPaddingMobile: value } ) }
								min={ 0 }
								max={ 100 }
								allowReset
							/>
							<hr className="uagb-editor__separator" />
							<RangeControl
								label={ __( "Title Bottom Spacing" ) }
								value={ titleBottomSpace }
								onChange={ ( value ) => setAttributes( { titleBottomSpace: value } ) }
								min={ 0 }
								max={ 50 }
								allowReset
							/>					
						</PanelBody>
						<PanelBody title={ __( "Colors" ) } initialOpen={ false }>					
							
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
							<p className="uagb-setting-label">{ __( "Count Color" ) }<span className="components-base-control__label"><span className="component-color-indicator" style={{ backgroundColor: countColor }} ></span></span></p>
							<ColorPalette
							value={ countColor }
							onChange={ ( colorValue ) => setAttributes( { countColor: colorValue } ) }
							allowReset
							/>							
							
						</PanelBody>
						</Fragment>
					)}

					{layout == "list" && (
						<Fragment>							
							<PanelBody title={ __( "Color" ) } initialOpen={ false }>					
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
							</PanelBody>

							<PanelBody title={ __( "Spacing" ) } initialOpen={ false }>					
								
								<RangeControl
									label={ __( "Bottom Margin" ) }
									value={ listBottomMargin }
									onChange={ ( value ) => setAttributes( { listBottomMargin: value } ) }
									min={ 0 }
									max={ 100 }
									allowReset
								/>					
							</PanelBody>

							<PanelBody title={ __( "Design" ) } initialOpen={ false }>					
								<p className="uagb-setting-label">{ __( "List Style" ) }</p>
								<IconButton
									key={ "bullet" }
									icon="editor-ul"
									label="Bullet"
									onClick={ () => setAttributes( { listStyle: "disc" } ) }
									aria-pressed = { "disc" === listStyle }
									isPrimary = { "disc" === listStyle }
								/>
								<IconButton
									key={ "numbers" }
									icon="editor-ol"
									label="Numbers"
									onClick={ () => setAttributes( { listStyle: "decimal" } ) }
									aria-pressed = { "decimal" === listStyle }
									isPrimary = { "decimal" === listStyle }
								/>							
							</PanelBody>
							
							<PanelBody title={ __( "Separator" ) } initialOpen={ false }>
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
							</PanelBody>
						</Fragment>						
					)}
						
				</PanelBody>
				
			</InspectorControls>
		)
		
        return (
				<Fragment>							
					{ inspectorControlsSettings }
					<div className={ classnames(
					className,
					"uagb-taxonomy__outer-wrap",
					`uagb-block-${this.props.clientId.substr( 0, 8 )}`
					) }>
						<div className={ classnames(
						className,
						"uagb-taxonomy-wrap",
						`uagb-layout-${layout}`
						) }>

							{"grid" == layout && ( 
								categoriesList.map((p,index)=>
									<div className="uagb-taxomony-box">
										<a class="uagb-tax-link" href={p.link}>
											<h4 class="uagb-tax-title">{p.name}</h4>
											<div class="uagb-tax-count">{p.count} Documents</div>
										</a>
									</div>						
								)
							)}

							{"list" == layout && ( 
								<ul className="uagb-list-wrap">
									{categoriesList.map((p,index)=>										
										<li className="uagb-tax-list">
											<div className="uagb-tax-link-wrap">
												<a class="uagb-tax-link" href={p.link}>
													{p.name} - {p.count} Documents
												</a>
											</div>

											{"none" != seperatorStyle && (
												<div class="uagb-tax-separator-wrap">
													<div class="uagb-tax-separator"></div>
												</div>
											)}

										</li>
									)}
								</ul>
							)}
						</div>
							{/* If no Taxonomy is available. */}
							{categoriesList == "" && (
								<div class="uagb-tax-not-available">{noTaxDisplaytext}</div>
							)}

					</div>	
				</Fragment>
        )
    }
}

export default withSelect( ( select, props ) => {

	const { categories, postsToShow, order, orderBy, postType, taxonomyType} = props.attributes
	const { getEntityRecords } = select( "core" )

	let allTaxonomy = uagb_blocks_info.all_taxonomy
	let currentTax = allTaxonomy[postType]
	let categoriesList = []
	let rest_base = ""


	if ( "undefined" != typeof currentTax ) {

		if ( "undefined" != typeof currentTax["taxonomy"][taxonomyType] ) {
			rest_base = ( currentTax["taxonomy"][taxonomyType]["rest_base"] == false || currentTax["taxonomy"][taxonomyType]["rest_base"] == null ) ? currentTax["taxonomy"][taxonomyType]["name"] : currentTax["taxonomy"][taxonomyType]["rest_base"]
		}

		if ( "" != taxonomyType ) {
			if ( "undefined" != typeof currentTax["terms"] && "undefined" != typeof currentTax["terms"][taxonomyType] ) {
				categoriesList = currentTax["terms"][taxonomyType]
			}
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
		taxonomyList: ( "undefined" != typeof currentTax ) ? currentTax["taxonomy"] : [] 
	}

} )( UAGBTaxonomyList )
