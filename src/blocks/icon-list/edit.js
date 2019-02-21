/**
 * BLOCK: Icon List - Edit Class
 */

// Import classes
import classnames from "classnames"
import times from "lodash/times"
import map from "lodash/map"
import UAGBIcon from "../../../dist/blocks/uagb-controls/UAGBIcon.json"
import FontIconPicker from "@fonticonpicker/react-fonticonpicker"
import styling from "./styling"
import renderSVG from "../../../dist/blocks/uagb-controls/renderIcon"

// Import all of our Text Options requirements.
import TypographyControl from "../../components/typography"

// Import Web font loader for google fonts.
import WebfontLoader from "../../components/typography/fontloader"

const { __ } = wp.i18n

const {
	Component,
	Fragment,
} = wp.element

const {
	BlockControls,
	BlockAlignmentToolbar,
	InspectorControls,
	MediaUpload,
	RichText,
	ColorPalette
} = wp.editor

const {
	PanelBody,
	SelectControl,
	RangeControl,
	Button,
	TextControl,
	ToggleControl,
	TabPanel,
	ButtonGroup,
	Dashicon
} = wp.components

let svg_icons = Object.keys( UAGBIcon )

class UAGBIconList extends Component {

	componentDidMount() {

		// Assigning block_id in the attribute.
		this.props.setAttributes( { block_id: this.props.clientId } )

		// Pushing Style tag for this block css.
		const $style = document.createElement( "style" )
		$style.setAttribute( "id", "uagb-style-icon-list-" + this.props.clientId )
		document.head.appendChild( $style )
	}

	saveIcons( value, index ) {
		const { attributes, setAttributes } = this.props
		const { icons } = attributes

		const newItems = icons.map( ( item, thisIndex ) => {
			if ( index === thisIndex ) {
				item = { ...item, ...value }
			}

			return item
		} )
		setAttributes( {
			icons: newItems,
		} )
	}

	render() {

		const { attributes, setAttributes, isSelected } = this.props

		const {
			align,
			className,
			icon_count,
			icons,
			gap,
			inner_gap,
			stack,
			icon_layout,
			iconPosition,
			size,
			sizeType,
			sizeMobile,
			sizeTablet,
			hideLabel,
			borderRadius,
			bgSize,
			fontSize,
			fontSizeType,
			fontSizeMobile,
			fontSizeTablet,
			fontFamily,
			fontWeight,
			fontSubset,
			lineHeight,
			lineHeightType,
			lineHeightMobile,
			lineHeightTablet,
			loadGoogleFonts,
		} = attributes

		let googleFonts

		if( loadGoogleFonts == true ) {

			const hconfig = {
				google: {
					families: [ fontFamily + ( fontWeight ? ":" + fontWeight : "" ) ],
				},
			}

			googleFonts = (
				<WebfontLoader config={ hconfig }>
				</WebfontLoader>
			)
		}



		const iconControls = ( index ) => {

			let color_control = ""
			let color_control_hover = ""

			if ( "image" == icons[ index ].image_icon ) {

				color_control = (
					<Fragment>
						<p className="uagb-setting-label">{ __( "Text Color" ) }<span className="components-base-control__label"><span className="component-color-indicator" style={{ backgroundColor: icons[ index ].label_color }} ></span></span></p>
						<ColorPalette
							value={ icons[ index ].label_color }
							onChange={ ( value ) => this.saveIcons( { label_color: value }, index ) }
							allowReset
						/>
						<p className="uagb-setting-label">{ __( "Image Background Color" ) }<span className="components-base-control__label"><span className="component-color-indicator" style={{ backgroundColor: icons[ index ].icon_bg_color }} ></span></span></p>
						<ColorPalette
							value={ icons[ index ].icon_bg_color }
							onChange={ ( value ) => this.saveIcons( { icon_bg_color: value }, index ) }
							allowReset
						/>
					</Fragment>
				)
				color_control_hover = (
					<Fragment>
						<p className="uagb-setting-label">{ __( "Text Hover Color" ) }<span className="components-base-control__label"><span className="component-color-indicator" style={{ backgroundColor: icons[ index ].label_hover_color }} ></span></span></p>
						<ColorPalette
							value={ icons[ index ].label_hover_color }
							onChange={ ( value ) => this.saveIcons( { label_hover_color: value }, index ) }
							allowReset
						/>
						<p className="uagb-setting-label">{ __( "Image Background Hover Color" ) }<span className="components-base-control__label"><span className="component-color-indicator" style={{ backgroundColor: icons[ index ].icon_bg_hover_color }} ></span></span></p>
						<ColorPalette
							value={ icons[ index ].icon_bg_hover_color }
							onChange={ ( value ) => this.saveIcons( { icon_bg_hover_color: value }, index ) }
							allowReset
						/>
					</Fragment>
				)
			} else {

				color_control = (
					<Fragment>
						<p className="uagb-setting-label">{ __( "Text Color" ) }<span className="components-base-control__label"><span className="component-color-indicator" style={{ backgroundColor: icons[ index ].label_color }} ></span></span></p>
						<ColorPalette
							value={ icons[ index ].label_color }
							onChange={ ( value ) => this.saveIcons( { label_color: value }, index ) }
							allowReset
						/>
						<p className="uagb-setting-label">{ __( "Icon Color" ) }<span className="components-base-control__label"><span className="component-color-indicator" style={{ backgroundColor: icons[ index ].icon_color }} ></span></span></p>
						<ColorPalette
							value={ icons[ index ].icon_color }
							onChange={ ( value ) => this.saveIcons( { icon_color: value }, index ) }
							allowReset
						/>
						<p className="uagb-setting-label">{ __( "Icon Background Color" ) }<span className="components-base-control__label"><span className="component-color-indicator" style={{ backgroundColor: icons[ index ].icon_bg_color }} ></span></span></p>
						<ColorPalette
							value={ icons[ index ].icon_bg_color }
							onChange={ ( value ) => this.saveIcons( { icon_bg_color: value }, index ) }
							allowReset
						/>
					</Fragment>
				)
				color_control_hover = (
					<Fragment>
						<p className="uagb-setting-label">{ __( "Text Hover Color" ) }<span className="components-base-control__label"><span className="component-color-indicator" style={{ backgroundColor: icons[ index ].label_hover_color }} ></span></span></p>
						<ColorPalette
							value={ icons[ index ].label_hover_color }
							onChange={ ( value ) => this.saveIcons( { label_hover_color: value }, index ) }
							allowReset
						/>
						<p className="uagb-setting-label">{ __( "Icon Hover Color" ) }<span className="components-base-control__label"><span className="component-color-indicator" style={{ backgroundColor: icons[ index ].icon_hover_color }} ></span></span></p>
						<ColorPalette
							value={ icons[ index ].icon_hover_color }
							onChange={ ( value ) => this.saveIcons( { icon_hover_color: value }, index ) }
							allowReset
						/>
						<p className="uagb-setting-label">{ __( "Icon Background Hover Color" ) }<span className="components-base-control__label"><span className="component-color-indicator" style={{ backgroundColor: icons[ index ].icon_bg_hover_color }} ></span></span></p>
						<ColorPalette
							value={ icons[ index ].icon_bg_hover_color }
							onChange={ ( value ) => this.saveIcons( { icon_bg_hover_color: value }, index ) }
							allowReset
						/>
					</Fragment>
				)
			}

			return (
				<PanelBody key={index}
					title={ __( "Icon" ) + " " + ( index + 1 ) + " " + __( "Settings" ) }
					initialOpen={ false }
				>
					<SelectControl
						label={ __( "Image / Icon" ) }
						value={ icons[ index ].image_icon }
						options={ [
							{ value: "icon", label: __( "Icon" ) },
							{ value: "image", label: __( "Image" ) },
						] }
						onChange={ value => {
							this.saveIcons( { image_icon: value }, index )
						} }
					/>
					{ "icon" == icons[ index ].image_icon &&
						<Fragment>
							<p className="components-base-control__label">{__( "Icon" )}</p>
							<FontIconPicker
								icons={svg_icons}
								renderFunc= {renderSVG}
								theme="default"
								value={icons[ index ].icon}
								onChange={ value => {
									this.saveIcons( { icon: value }, index )
								} }
								isMulti={false}
								noSelectedPlaceholder= { __( "Select Icon" ) }
							/>
						</Fragment>
					}
					{ "image" == icons[ index ].image_icon &&
						<Fragment>
							<MediaUpload
								title={ __( "Select Image" ) }
								onSelect={ value => {
									this.saveIcons( { image: value }, index )
								} }
								allowedTypes={ [ "image" ] }
								value={ icons[ index ].image }
								render={ ( { open } ) => (
									<Button isDefault onClick={ open }>
										{ ! icons[ index ].image ? __( "Select Image" ) : __( "Replace image" ) }
									</Button>
								) }
							/>
							{ icons[ index ].image &&
								<Button
									className="uagb-rm-btn"
									onClick={ value => {
										this.saveIcons( { image: null }, index )
									} }
									isLink isDestructive>
									{ __( "Remove Image" ) }
								</Button>
							}
						</Fragment>
					}
					<hr className="uagb-editor__separator" />
					<h2>{ __( "List Item Link" ) }</h2>
					<ToggleControl
						label={ __( "Disable Link" ) }
						checked={ icons[ index ].disableLink }
						onChange={ value => {
							this.saveIcons( { disableLink: value }, index )
						} }
					/>
					{ ! icons[ index ].disableLink &&
						<Fragment>
							<p className="components-base-control__label">{__( "URL" )}</p>
							<TextControl
								value={ icons[ index ].link }
								onChange={ value => {
									this.saveIcons( { link: value }, index )
								} }
								placeholder={__( "Enter URL" )}
							/>
							<ToggleControl
								label={ __( "Open in New Tab" ) }
								checked={ icons[ index ].target }
								onChange={ value => {
									this.saveIcons( { target: value }, index )
								} }
							/>
						</Fragment>
					}
					<hr className="uagb-editor__separator" />
					<h2>{ __( "Icon #" ) + " " + ( index + 1 ) + " " + __( " Color Settings" ) }</h2>
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
			)
		}

		var element = document.getElementById( "uagb-style-icon-list-" + this.props.clientId )

		if( null != element && "undefined" != typeof element ) {
			element.innerHTML = styling( this.props )
		}

		const labelClass = ( hideLabel ) ? "uagb-icon-list__no-label" : ""

		const sizeTypes = [
			{ key: "px", name: __( "px" ) },
			{ key: "em", name: __( "em" ) },
		]

		const sizeTypeControls = (
			<ButtonGroup className="uagb-size-type-field" aria-label={ __( "Size Type" ) }>
				{ map( sizeTypes, ( { name, key } ) => (
					<Button
						key={ key }
						className="uagb-size-btn"
						isSmall
						isPrimary={ sizeType === key }
						aria-pressed={ sizeType === key }
						onClick={ () => setAttributes( { sizeType: key } ) }
					>
						{ name }
					</Button>
				) ) }
			</ButtonGroup>
		)

		const lableSizeTypeControls = (
			<ButtonGroup className="uagb-size-type-field" aria-label={ __( "Size Type" ) }>
				{ map( sizeTypes, ( { name, key } ) => (
					<Button
						key={ key }
						className="uagb-size-btn"
						isSmall
						isPrimary={ fontSizeType === key }
						aria-pressed={ fontSizeType === key }
						onClick={ () => setAttributes( { fontSizeType: key } ) }
					>
						{ name }
					</Button>
				) ) }
			</ButtonGroup>
		)

		return (
			<Fragment>
				<BlockControls>
					<BlockAlignmentToolbar
						value={ align }
						onChange={ ( value ) => {
							setAttributes( { align: value } )
						} }
						controls={ [ "left", "center", "right", "full" ] }
					/>
				</BlockControls>
				<InspectorControls>
					<PanelBody title={ __( "Icon Count" ) } initialOpen={ true }>
						<RangeControl
							label={ __( "Number of Icons" ) }
							value={ icon_count }
							onChange={ newCount => {

								let cloneIcons = [ ...icons ]

								if ( cloneIcons.length < newCount ) {

									const incAmount = Math.abs( newCount - cloneIcons.length )

									{ times( incAmount, n => {

										cloneIcons.push( {
											"label": "Label #" + ( cloneIcons.length + 1 ),
											"image_icon": cloneIcons[ 0 ].image_icon,
											"icon": cloneIcons[ 0 ].icon,
											"image": cloneIcons[ 0 ].image,
											"icon_color": cloneIcons[ 0 ].icon_color,
											"icon_hover_color": cloneIcons[ 0 ].icon_hover_color,
											"icon_bg_color": cloneIcons[ 0 ].icon_bg_color,
											"icon_bg_hover_color": cloneIcons[ 0 ].icon_bg_hover_color,
											"link": cloneIcons[ 0 ].link,
											"target": cloneIcons[ 0 ].target
										} )
									} ) }

									setAttributes( { icons: cloneIcons } )
								}
								setAttributes( { icon_count: newCount } )
							} }
							min={ 1 }
							max={ 12 }
						/>
					</PanelBody>
					{ times( icon_count, n => iconControls( n ) ) }
					<PanelBody title={ __( "General" ) } initialOpen={ false }>
						<SelectControl
							label={ __( "Layout" ) }
							value={ icon_layout }
							options={ [
								{ value: "horizontal", label: __( "Horizontal" ) },
								{ value: "vertical", label: __( "Vertical" ) },
							] }
							onChange={ ( value ) => setAttributes( { icon_layout: value } ) }
						/>
						{ "horizontal" == icon_layout &&
							<Fragment>
								<SelectControl
									label={ __( "Stack on" ) }
									value={ stack }
									options={ [
										{ value: "none", label: __( "None" ) },
										{ value: "tablet", label: __( "Tablet" ) },
										{ value: "mobile", label: __( "Mobile" ) },
									] }
									onChange={ ( value ) => setAttributes( { stack: value } ) }
									help={ __( "Note: Choose on what breakpoint the Icons will stack." ) }
								/>
							</Fragment>
						}
						<ToggleControl
							label={ __( "Hide Labels" ) }
							checked={ hideLabel }
							onChange={ ( value ) => setAttributes( { hideLabel: ! hideLabel } ) }
						/>
						<hr className="uagb-editor__separator" />
						<SelectControl
							label={ __( "Icon Position" ) }
							value={ iconPosition }
							options={ [
								{ value: "top", label: __( "Top" ) },
								{ value: "middle", label: __( "Middle" ) },
							] }
							onChange={ ( value ) => setAttributes( { iconPosition: value } ) }							
						/>
						<TabPanel className="uagb-size-type-field-tabs" activeClass="active-tab"
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
											<Fragment>
												{sizeTypeControls}
												<RangeControl
													label={ __( "Size" ) }
													value={ sizeMobile }
													onChange={ ( value ) => setAttributes( { sizeMobile: value } ) }
													min={ 0 }
													max={ 500 }
													allowReset
													initialPosition={40}
												/>
											</Fragment>
										)
									} else if ( "tablet" === tab.name ) {
										tabout = (
											<Fragment>
												{sizeTypeControls}
												<RangeControl
													label={ __( "Size" ) }
													value={ sizeTablet }
													onChange={ ( value ) => setAttributes( { sizeTablet: value } ) }
													min={ 0 }
													max={ 500 }
													allowReset
													initialPosition={40}
												/>
											</Fragment>
										)
									} else {
										tabout = (
											<Fragment>
												{sizeTypeControls}
												<RangeControl
													label={ __( "Icon Size" ) }
													value={ size }
													onChange={ ( value ) => setAttributes( { size: value } ) }
													min={ 0 }
													max={ 500 }
													allowReset
													initialPosition={40}
												/>
											</Fragment>
										)
									}

									return <div>{ tabout }</div>
								}
							}
						</TabPanel>
						<hr className="uagb-editor__separator" />
						<h2>{ __( "Lable Size" ) }</h2>
						<TypographyControl
							label={ __( "Lable Tag" ) }
							attributes = { attributes }
							setAttributes = { setAttributes }
							loadGoogleFonts = { { value: loadGoogleFonts, label: __( "loadGoogleFonts" ) } }
							fontFamily = { { value: fontFamily, label: __( "fontFamily" ) } }
							fontWeight = { { value: fontWeight, label: __( "fontWeight" ) } }
							fontSubset = { { value: fontSubset, label: __( "fontSubset" ) } }
							fontSizeType = { { value: fontSizeType, label: __( "fontSizeType" ) } }
							fontSize = { { value: fontSize, label: __( "fontSize" ) } }
							fontSizeMobile = { { value: fontSizeMobile, label: __( "fontSizeMobile" ) } }
							fontSizeTablet= { { value: fontSizeTablet, label: __( "fontSizeTablet" ) } }
							lineHeightType = { { value: lineHeightType, label: __( "lineHeightType" ) } }
							lineHeight = { { value: lineHeight, label: __( "lineHeight" ) } }
							lineHeightMobile = { { value: lineHeightMobile, label: __( "lineHeightMobile" ) } }
							lineHeightTablet= { { value: lineHeightTablet, label: __( "lineHeightTablet" ) } }
						/>
						<hr className="uagb-editor__separator" />
						<RangeControl
							label={ __( "Background Size" ) }
							value={ bgSize }
							onChange={ ( value ) => setAttributes( { bgSize: value } ) }
							help={ __( "Note: Background Size option is useful when one adds background color to the icons." ) }
							min={ 0 }
							max={ 500 }
						/>
						<RangeControl
							label={ __( "Circular Size" ) }
							value={ borderRadius }
							onChange={ ( value ) => setAttributes( { borderRadius: value } ) }
							help={ __( "Note: Circular Size option is useful when one adds background color to the icons." ) }
							min={ 0 }
							max={ 500 }
						/>
						<hr className="uagb-editor__separator" />
						<RangeControl
							label={ __( "Gap between Items" ) }
							value={ gap }
							onChange={ ( value ) => setAttributes( { gap: value } ) }
							min={ 0 }
							max={ 100 }
						/>
						{ ! hideLabel &&
							<RangeControl
								label={ __( "Gap between Icon and Label" ) }
								value={ inner_gap }
								onChange={ ( value ) => setAttributes( { inner_gap: value } ) }
								min={ 0 }
								max={ 100 }
							/>
						}
					</PanelBody>
				</InspectorControls>
				<div className={ classnames(
					className,
					"uagb-icon-list__outer-wrap",
					`uagb-icon-list__layout-${icon_layout}`,
					( iconPosition == 'top' ? 'uagb-icon-list__icon-at-top' : '' ),
					labelClass
				) }
				id={ `uagb-icon-list-${ this.props.clientId }` }>
					<div className="uagb-icon-list__wrap">
						{
							icons.map( ( icon, index ) => {

								if ( icon_count <= index ) {
									return
								}

								let url = ""

								let image_icon_html = ""

								if ( icon.image_icon == "icon" ) {
									if ( icon.icon ) {
										image_icon_html = <span className="uagb-icon-list__source-icon">{ renderSVG(icon.icon) }</span>
									}
								} else {
									if ( icon.image ) {
										image_icon_html = <img className="uagb-icon-list__source-image" src={icon.image.url} />
									}
								}

								let target = ( icon.target ) ? "_blank" : "_self"

								return (
									<a
										className={ classnames(
											`uagb-icon-list-repeater-${index}`,
											"uagb-icon-list__wrapper"
										) }
										key={ index }
										target={ target }
										rel="noopener noreferrer"
									>
										<div className="uagb-icon-list__content-wrap">
											<span className="uagb-icon-list__source-wrap">{image_icon_html}</span>
											{ ! hideLabel &&
												<div className="uagb-icon-list__label-wrap">
													<RichText
														tagName="div"
														placeholder={ __( "Label Name" ) }
														value={ icons[ index ].label }
														className='uagb-icon-list__label'
														onChange={ value => {
															this.saveIcons( { label: value }, index )
														} }
														placeholder={ __( "Description" ) }
														multiline={false}
													/>
												</div>
											}
										</div>
									</a>
								)
							})
						}
					</div>
				</div>
				{googleFonts}
			</Fragment>
		)
	}
}

export default UAGBIconList
