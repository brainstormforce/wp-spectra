// Import block dependencies and components.
import classnames from "classnames"

// Import icon.
import UAGBIcon from "../../../dist/blocks/uagb-controls/UAGBIcon"
import FontIconPicker from "@fonticonpicker/react-fonticonpicker"
import Title from "./components/Title"
import Description from "./components/Description"
import CtaPositionClasses from "./classes"
import CallToAction from "./components/CallToAction"
import CtaStyle from "./inline-styles"

const { __ } = wp.i18n

const {
	AlignmentToolbar,
	BlockControls,
	ColorPalette,
	InspectorControls,
	RichText,
	PanelColorSettings,
	MediaUpload
} = wp.editor

const {
	PanelBody,
	SelectControl,
	RangeControl,
	TabPanel,
	ToggleControl,
	TextControl,
	BaseControl,
	Button,
	withNotices,
} = wp.components

const {
	compose
} = wp.compose

const {
	withSelect
} = wp.data

const {
	withViewportMatch
} = wp.viewport

// Extend component
const { Component, Fragment } = wp.element

class UAGBcallToAction extends Component {

	constructor() {

		super( ...arguments )
		this.getIfbIcon  	  = this.getIfbIcon.bind(this)
		this.toggleTarget     = this.toggleTarget.bind( this )
		this.toggleResponsive = this.toggleResponsive.bind( this )
		this.onSelectImage    = this.onSelectImage.bind( this )
		this.onRemoveImage    = this.onRemoveImage.bind( this )
		this.getCtaicon  	  = this.getCtaicon.bind(this)
	}

	getIfbIcon(value) {
		this.props.setAttributes( { icon: value } )
	}

	getCtaicon(value) {
		this.props.setAttributes( { ctaIcon: value } )
	}

	/*
	 * Event to set Image as while adding.
	 */
	onSelectImage( media ) {
		const { iconImage } = this.props.attributes
		const { setAttributes } = this.props

		if ( ! media || ! media.url ) {
			setAttributes( { iconImage: null } )
			return
		}

		if ( ! media.type || "image" !== media.type ) {
			setAttributes( { iconImage: null } )
			return
		}

		setAttributes( { iconImage: media } )
	}

	/*
	 * Event to set Image as null while removing.
	 */
	onRemoveImage() {
		const { iconImage } = this.props.attributes
		const { setAttributes } = this.props

		setAttributes( { iconImage: null } )
	}

	/**
	 * Function Name: toggleTarget.
	 */
	toggleTarget() {
		const { ctaTarget } = this.props.attributes
		const { setAttributes } = this.props

		setAttributes( { ctaTarget: ! ctaTarget } )
	}

	/**
	 * Function Name: toggleResponsive.
	 */
	toggleResponsive() {
		const { responsiveDesign } = this.props.attributes
		const { setAttributes } = this.props

		setAttributes( { responsiveDesign: ! responsiveDesign } )
	}

	render() {

		const { isSelected, className, setAttributes, attributes, mergeBlocks, insertBlocksAfter, onReplace } = this.props

		// Setup the attributes.
		const {
			ctaTitle,
			headingDesc,
			headingAlign,
			headingColor,
			subHeadingColor,
			headingTag,
			headFontSize,
			subHeadFontSize,
			separatorWidth,
			separatorHeight,
			headSpace,
			separatorSpace,
			subHeadSpace,			
			ctaPosition,
			block_id,
			sourceAlign,
			ctaType,
			ctaText,
			ctaLink,
			ctaTarget,
			ctaIcon,
			ctaIconPosition,
			ctaIconSpace,
			ctaLinkColor,
			ctaFontSize,
			ctaBtnLinkColor,
			ctaLinkHoverColor,
			ctaBgHoverColor,
			ctaBgColor,
			ctaBtnVertPadding,
			ctaBtnHrPadding,
			ctaBorderStyle,
			ctaBorderColor,
			ctaBorderhoverColor,
			ctaBorderWidth,
			ctaBorderRadius,
			stack,
			showTitle,
			showDesc,
			ctaTopSpace,
			ctaBottomSpace,
			ctaLeftSpace,
			ctaRightSpace,
			blockPadding
		} = attributes

		// Add CSS.
		var element = document.getElementById( "uagb-cta-style-" + this.props.clientId )
		if( null != element && "undefined" != typeof element ) {
			element.innerHTML = CtaStyle( this.props )
		}
		
		// Icon properties.
		const cta_icon_props = {
		  icons: UAGBIcon,
		  renderUsing: "class",
		  theme: "default",
		  value: ctaIcon,
		  onChange: this.getCtaicon,
		  isMulti: false,
		}

		const my_block_id = "uagb-cta-block-"+this.props.clientId

	
		// CTA settings.
		const ctaSettings = (
			<Fragment>	
				<PanelBody
					title={ __( "CTA Settings" ) }
					initialOpen={ true }
				>				
					<SelectControl
						label={ __( "Type" ) }
						value={ ctaType }
						onChange={ ( value ) => setAttributes( { ctaType: value } ) }
						options={ [
							{ value: "none", label: __( "None" ) },
							{ value: "text", label: __( "Text" ) },
							{ value: "button", label: __( "Button" ) },
							{ value: "all", label: __( "Complete Box" ) },
						] }
					/>
					{ ( ctaType === "text" || ctaType === "button" ) &&
					<TextControl
						label= { __( "Text" ) }
						value= { ctaText }
						onChange={ value => setAttributes( { ctaText: value } ) }
					/>
					}
					{ ( ctaType !== "none" ) &&
						<Fragment>
							<TextControl
								label= { __( "Link" ) }
								value= { ctaLink }
								onChange={ value => setAttributes( { ctaLink: value } ) }
							/>
							<ToggleControl
								label={ __( "Open in new Window" ) }
								checked={ ctaTarget }
								onChange={ this.toggleTarget }
							/>
						</Fragment>
					}

					{ ( ctaType !== "all" ) && ( ctaType !== "none" ) &&
						<Fragment>
							<FontIconPicker {...cta_icon_props} />
							<SelectControl
								label={ __( "Icon Position" ) }
								value={ ctaIconPosition }
								onChange={ ( value ) => setAttributes( { ctaIconPosition: value } ) }
								options={ [
									{ value: "before", label: __( "Before Text" ) },
									{ value: "after", label: __( "After Text" ) },
								] }
							/>
							<RangeControl
								label={ __( "Icon Spacing" ) }
								value={ ctaIconSpace }
								onChange={ ( value ) => setAttributes( { ctaIconSpace: value } ) }
								min={ 0 }
								max={ 50 }
								beforeIcon=""
								allowReset
							/>
						</Fragment>
					}

					{ ( ctaType == "button" ) && (
						<Fragment>

							<RangeControl
								label={ __( "Vertical Padding" ) }
								value={ ctaBtnVertPadding }
								onChange={ ( value ) => setAttributes( { ctaBtnVertPadding: value } ) }
								min={ 0 }
								max={ 50 }
								beforeIcon=""
								allowReset
							/>
							<RangeControl
								label={ __( "HorizontalPadding" ) }
								value={ ctaBtnHrPadding }
								onChange={ ( value ) => setAttributes( { ctaBtnHrPadding: value } ) }
								min={ 0 }
								max={ 50 }
								beforeIcon=""
								allowReset
							/>
							<SelectControl
								label={ __( "Border Style" ) }
								value={ ctaBorderStyle }
								onChange={ ( value ) => setAttributes( { ctaBorderStyle: value } ) }
								options={ [
									{ value: "none", label: __( "None" ) },
									{ value: "solid", label: __( "Solid" ) },
									{ value: "double", label: __( "Double" ) },
									{ value: "dashed", label: __( "Dashed" ) },
									{ value: "dotted", label: __( "Dotted" ) },
								] }
							/>

							{ ( ctaBorderStyle !== "none" ) && (
								<Fragment>
									<RangeControl
										label={ __( "Border Width" ) }
										value={ ctaBorderWidth }
										onChange={ ( value ) => setAttributes( { ctaBorderWidth: value } ) }
										min={ 0 }
										max={ 10 }
										beforeIcon=""
										allowReset
									/>
									<p className="uagb-setting-label">{ __( "Border Color" ) }<span className="components-base-control__label"><span className="component-color-indicator" style={{ backgroundColor: ctaBorderColor }} ></span></span></p>
								    <ColorPalette
								        value={ ctaBorderColor }
								        onChange={ ( colorValue ) => setAttributes( { ctaBorderColor: colorValue } ) }
								        allowReset
								    />
								    <p className="uagb-setting-label">{ __( "Border Hover Color" ) }<span className="components-base-control__label"><span className="component-color-indicator" style={{ backgroundColor: ctaBorderhoverColor }} ></span></span></p>
								    <ColorPalette
								        value={ ctaBorderhoverColor }
								        onChange={ ( colorValue ) => setAttributes( { ctaBorderhoverColor: colorValue } ) }
								        allowReset
								    />
								</Fragment>
							)
							}
							<RangeControl
								label={ __( "Rounded Corner" ) }
								value={ ctaBorderRadius }
								onChange={ ( value ) => setAttributes( { ctaBorderRadius: value } ) }
								min={ 0 }
								max={ 100 }
								beforeIcon=""
								allowReset
							/>						
						</Fragment>
					)
					}	
				</PanelBody>			
			</Fragment>
		)

		const ctaNormalSettings = (
			<Fragment>
				<PanelColorSettings
					title={ __( "CTA Color Settings" ) }
					initialOpen={ true }
					colorSettings={ [
						{
							value: ctaBtnLinkColor,
							onChange: ( colorValue ) => setAttributes( { ctaBtnLinkColor: colorValue } ),
							label: __( "Color" ),
						},
						{
							value: ctaBgColor,
							onChange: ( colorValue ) => setAttributes( { ctaBgColor: colorValue } ),
							label: __( "Background Color" ),
						},
					] }
				>
				</PanelColorSettings>
			</Fragment>
		)

		const ctaHoverSettings = (
			<Fragment>
				<PanelColorSettings
					title={ __( "CTA Hover Color Settings" ) }
					initialOpen={ true }
					colorSettings={ [
						{
							value: ctaLinkHoverColor,
							onChange: ( colorValue ) => setAttributes( { ctaLinkHoverColor: colorValue } ),
							label: __( "Hover Color" ),
						},
						{
							value: ctaBgHoverColor,
							onChange: ( colorValue ) => setAttributes( { ctaBgHoverColor: colorValue } ),
							label: __( "Background Hover Color" ),
						},
					] }
				>
				</PanelColorSettings>
			</Fragment>
		)

		// Typography settings.
		const TypographySettings = (
			<Fragment>
				<PanelBody
					title={ __( "Typography" ) }
					initialOpen={ false }
				>	
					
					<ToggleControl
						label={ __( "Enable Heading" ) }
						checked={ showTitle }
						onChange={ ( value ) => setAttributes( { showTitle: ! showTitle } ) }
					/>
					{ showTitle && <Fragment>
							<SelectControl
								label={ __( "Title Tag" ) }
								value={ headingTag }
								onChange={ ( value ) => setAttributes( { headingTag: value } ) }
								options={ [
									{ value: "h1", label: __( "H1" ) },
									{ value: "h2", label: __( "H2" ) },
									{ value: "h3", label: __( "H3" ) },
									{ value: "h4", label: __( "H4" ) },
									{ value: "h5", label: __( "H5" ) },
									{ value: "h6", label: __( "H6" ) },
								] }
							/>
							<RangeControl
								label={ __( "Heading Font Size" ) }
								value={ headFontSize }
								onChange={ ( value ) => setAttributes( { headFontSize: value } ) }
								min={ 10 }
								max={ 200 }
								initialPosition={30}
								beforeIcon="editor-textcolor"
								allowReset
							/>
						</Fragment>
					}
					<ToggleControl
						label={ __( "Enable Description" ) }
						checked={ showDesc }
						onChange={ ( value ) => setAttributes( { showDesc: ! showDesc } ) }
					/>
					{ showDesc &&
						<RangeControl
							label={ __( "Description Font Size" ) }
							value={ subHeadFontSize }
							onChange={ ( value ) => setAttributes( { subHeadFontSize: value } ) }
							min={ 10 }
							max={ 200 }
							initialPosition={16}
							beforeIcon="editor-textcolor"
							allowReset
						/>
					}

					{ ( ctaType === "text" || ctaType === "button" ) &&	(

						<RangeControl
							label={ __( "CTA Font Size" ) }
							value={ ctaFontSize }
							onChange={ ( value ) => setAttributes( { ctaFontSize: value } ) }
							min={ 0 }
							max={ 50 }
							initialPosition={16}
							beforeIcon="editor-textcolor"
							allowReset
						/>
					)
					}

				</PanelBody>
				<PanelBody
					title={ __( "Color Settings" ) }
					initialOpen={ false }
					>					
						
						{ showTitle && <Fragment>
						    <p className="uagb-setting-label">{ __( "Heading Color" ) }<span className="components-base-control__label"><span className="component-color-indicator" style={{ backgroundColor: headingColor }} ></span></span></p>
						    <ColorPalette
						        value={ headingColor }
						        onChange={ ( colorValue ) => setAttributes( { headingColor: colorValue } ) }
						        allowReset
						    /> </Fragment>	
						}
						{ showDesc && <Fragment>
						    <p className="uagb-setting-label">{ __( "Description Color" ) }<span className="components-base-control__label"><span className="component-color-indicator" style={{ backgroundColor: subHeadingColor }} ></span></span></p>
						    <ColorPalette
						        value={ subHeadingColor }
						        onChange={ ( colorValue ) => setAttributes( { subHeadingColor: colorValue } ) }
						        allowReset
						    /> </Fragment>	
						}									
			
					{ ( ctaType === "text") &&
							<Fragment>
							    <p className="uagb-setting-label">{ __( "CTA Color" ) }<span className="components-base-control__label"><span className="component-color-indicator" style={{ backgroundColor: ctaLinkColor }} ></span></span></p>
							    <ColorPalette
							        value={ ctaLinkColor }
							        onChange={ ( colorValue ) => setAttributes( { ctaLinkColor: colorValue } ) }
							        allowReset
							    />
							    <p className="uagb-setting-label">{ __( "CTA Hover Color" ) }<span className="components-base-control__label"><span className="component-color-indicator" style={{ backgroundColor: ctaLinkHoverColor }} ></span></span></p>
							    <ColorPalette
							        value={ ctaLinkHoverColor }
							        onChange={ ( colorValue ) => setAttributes( { ctaLinkHoverColor: colorValue } ) }
							        allowReset
							    />
							</Fragment>
					}
					{ ( ctaType === "button") &&
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
										className: "uagb-focus-tab",
									},
								] }>
								{
									( tabName ) => {
										let tabout
										if( "normal" === tabName.name ) {
											tabout = ctaNormalSettings
										}else {
											tabout = ctaHoverSettings
										}
										return <div>{ tabout }</div>
									}
								}
							</TabPanel>
					}
				</PanelBody>


			</Fragment>
		)

		// Margin Settings.
		const marginSettings = (
			<Fragment>
				<PanelBody
					title={ __( "Spacing" ) }
					initialOpen={ false }
				>
					
					<RangeControl
							label={ __( "Content Padding" ) }
							value={ blockPadding }
							onChange={ ( value ) => setAttributes( { blockPadding: value } ) }
							min={ 0 }
							max={ 50 }
							beforeIcon=""
							allowReset
						/>

					{ showTitle && 
						<RangeControl
							label={ __( "Heading Bottom Margin" ) }
							value={ headSpace }
							onChange={ ( value ) => setAttributes( { headSpace: value } ) }
							min={ 0 }
							max={ 50 }
							beforeIcon=""
							allowReset
						/>
					}				
					
					{ showDesc && 
						<RangeControl
							label={ __( "Description Bottom Margin" ) }
							value={ subHeadSpace }
							onChange={ ( value ) => setAttributes( { subHeadSpace: value } ) }
							min={ 0 }
							max={ 50 }
							beforeIcon=""
							allowReset
						/>
					}		
					{ ( ctaPosition && (ctaPosition == "above-title" || ctaPosition == "below-title" )  ) && <Fragment>
						<RangeControl
								label={ __( "CTA Top Margin" ) }
								value={ ctaTopSpace }
								onChange={ ( value ) => setAttributes( { ctaTopSpace: value } ) }
								min={ 0 }
								max={ 50 }
								beforeIcon=""
								allowReset
							/>

						<RangeControl
								label={ __( "CTA Bottom Margin" ) }
								value={ ctaBottomSpace }
								onChange={ ( value ) => setAttributes( { ctaBottomSpace: value } ) }
								min={ 0 }
								max={ 50 }
								beforeIcon=""
								allowReset
							/>
						</Fragment>
					}
					{ ( ctaPosition === "left" || ctaPosition === "right" ) && <Fragment>
						<RangeControl
								label={ __( "CTA Left Margin" ) }
								value={ ctaLeftSpace }
								onChange={ ( value ) => setAttributes( { ctaLeftSpace: value } ) }
								min={ 0 }
								max={ 50 }
								beforeIcon=""
								allowReset
							/>

						<RangeControl
								label={ __( "CTA Right Margin" ) }
								value={ ctaRightSpace }
								onChange={ ( value ) => setAttributes( { ctaRightSpace: value } ) }
								min={ 0 }
								max={ 50 }
								beforeIcon=""
								allowReset
							/>		
						</Fragment>
					}	
				</PanelBody>
			</Fragment>
		)
	

	
		// Global Controls.
		const inspect_control = (
			<Fragment>
				 <InspectorControls>
				 	{ ctaSettings }
					<PanelBody
						title={ __( "Position & Responsive" ) }
						initialOpen={ false }
					>
						<SelectControl
							label={ __( "Select CTA Position" ) }
							value={ ctaPosition }
							onChange={ ( value ) => setAttributes( { ctaPosition: value } ) }
							options={ [
								{ value: "above-title", label: __( "Top" ) },
								{ value: "below-title", label: __( "Bottom" ) },
								{ value: "left", label: __( "Left of Text and Heading" ) },
								{ value: "right", label: __( "Right of Text and Heading" ) },

							] }
						/>
						{ ( ctaPosition == "left" || ctaPosition == "right" ) &&
							<SelectControl
								label={ __( "Stack on" ) }
								value={ stack }
								options={ [
									{ value: "none", label: __( "None" ) },
									{ value: "tablet", label: __( "Tablet" ) },
									{ value: "mobile", label: __( "Mobile" ) },
								] }
								help={ __( "Note: Choose on what breakpoint the CTA button will stack." ) }
								onChange={ ( value ) => setAttributes( { stack: value } ) }
							/>
						}						

						{ ( ctaPosition && (ctaPosition !== "above-title" && ctaPosition !== "below-title" )  ) && <SelectControl
							label={ __( "Vertical ALignment" ) }
							value={ sourceAlign }
							onChange={ ( value ) => setAttributes( { sourceAlign: value } ) }
							options={ [
								{ value: "top", label: __( "Top" ) },
								{ value: "middle", label: __( "Middle" ) },
							] }
						/>
						}						
					</PanelBody>
					
					{ TypographySettings }
						
					{ marginSettings }

				</InspectorControls>
			</Fragment>
		)

		// Get icon/Image components.
		let is_cta = ""
		
		is_cta =  <CallToAction attributes={attributes} />
		

		// Get description components.
		const desc = (
			<Fragment>
				<div className = "uagb-cta-text-wrap">
					{ showDesc && <Description attributes={attributes} setAttributes = { setAttributes } props = { this.props } />}
				</div>
			</Fragment>
		)

		// Get Title components.
		const title_text = (
			<Fragment>
				<div className = "uagb-cta-title-wrap">
					{ showTitle && <Title attributes={attributes} setAttributes = { setAttributes } props = { this.props } /> }
				</div>
			</Fragment>
		)


		const output = (
			<Fragment>
				<div className = { classnames(
					"uagb-cta-block__content-wrap",
					...CtaPositionClasses( attributes ),
				) }>
					<div className = "uagb-cta-left-right-wrap">

						{ ( ctaPosition == "left") &&
								is_cta
						}
						<div className = "uagb-cta-content">

							{  ctaPosition == "above-title" && 
								<Fragment>
							     { is_cta }
							     { title_text }
							     { desc }
							    </Fragment>
							}
							
							{ ctaPosition == "below-title"  && 
								<Fragment>
							     { title_text }
							     { desc }
							     { is_cta }
							    </Fragment>
							}
							
							{ ( ctaPosition == "left" || ctaPosition == "right") &&
								<Fragment>
									{ title_text }
									{ desc }
								</Fragment>
							}

						</div>

						{ ( ctaPosition == "right") &&
								is_cta
						}
					</div>
				</div>
			</Fragment>
		)

		return (
			<Fragment>
				{ ( ctaPosition == "above-title" || ctaPosition == "below-title") &&
					<BlockControls key='controls'>
						<AlignmentToolbar
							value={ headingAlign }
							onChange={ ( value ) => setAttributes( { headingAlign: value } ) }
						/>
					</BlockControls>
				}
				{inspect_control}
				<div className={ classnames(
					className,
					"uagb-cta-block__outer-wrap"
				) }
				id = { my_block_id }
				>
					{ ( ctaType == "all") &&
						<Fragment>
							<a href= {ctaLink} className = "uagb-cta-block-link-wrap" rel ="noopener noreferrer" > {output}</a>
						</Fragment>
					}
					{ ( ctaType !== "all") && output }
				</div>
			</Fragment>
		)
	}

	componentDidMount() {

		// Assigning block_id in the attribute.
		this.props.setAttributes( { block_id: this.props.clientId } )

		// Pushing Style tag for this block css.
		const $style = document.createElement( "style" )
		$style.setAttribute( "id", "uagb-cta-style-" + this.props.clientId )
		document.head.appendChild( $style )
	}
}

export default UAGBcallToAction
