/**
 * BLOCK: UAGB - Social Share Edit Class
 */

// Import classes
import classnames from "classnames"
import times from "lodash/times"
import UAGBIcon from "../../../dist/blocks/uagb-controls/UAGBIcon"
import FontIconPicker from "@fonticonpicker/react-fonticonpicker"
import styling from "./styling"

const { __ } = wp.i18n

const {
	Component,
	Fragment,
} = wp.element

const {
	BlockControls,
	BlockAlignmentToolbar,
	InspectorControls,
	PanelColorSettings,
	MediaUpload,
	RichText
} = wp.editor

const {
	PanelBody,
	SelectControl,
	RangeControl,
	Button,
	TextControl,
	ToggleControl
} = wp.components


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
			size,
			hideLabel,
			fontSize,
			borderRadius,
			bgSize
		} = attributes

		const iconControls = ( index ) => {

			let color_control = ""

			if ( "image" == icons[ index ].image_icon ) {

				color_control = [
					{
						value: icons[ index ].label_color,
						onChange:( value ) => this.saveIcons( { label_color: value }, index ),
						label: __( "Text Color" ),
					},
					{
						value: icons[ index ].icon_bg_color,
						onChange:( value ) => this.saveIcons( { icon_bg_color: value }, index ),
						label: __( "Image Background Color" ),
					},
					{
						value: icons[ index ].label_hover_color,
						onChange:( value ) => this.saveIcons( { label_hover_color: value }, index ),
						label: __( "Text Hover Color" ),
					},
					{
						value: icons[ index ].icon_bg_hover_color,
						onChange:( value ) => this.saveIcons( { icon_bg_hover_color: value }, index ),
						label: __( "Image Background Hover Color" ),
					},
				]
			} else {

				color_control = [
					{
						value: icons[ index ].icon_color,
						onChange:( value ) => this.saveIcons( { icon_color: value }, index ),
						label: __( "Icon Color" ),
					},
					{
						value: icons[ index ].icon_bg_color,
						onChange:( value ) => this.saveIcons( { icon_bg_color: value }, index ),
						label: __( "Background Color" ),
					},
					{
						value: icons[ index ].label_color,
						onChange:( value ) => this.saveIcons( { label_color: value }, index ),
						label: __( "Text Color" ),
					},
					{
						value: icons[ index ].icon_hover_color,
						onChange:( value ) => this.saveIcons( { icon_hover_color: value }, index ),
						label: __( "Icon Hover Color" ),
					},
					{
						value: icons[ index ].icon_bg_hover_color,
						onChange:( value ) => this.saveIcons( { icon_bg_hover_color: value }, index ),
						label: __( "Background Hover Color" ),
					},
					{
						value: icons[ index ].label_hover_color,
						onChange:( value ) => this.saveIcons( { label_hover_color: value }, index ),
						label: __( "Text Hover Color" ),
					},
				]
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
								icons={UAGBIcon}
								renderUsing="class"
								theme="default"
								value={icons[ index ].icon}
								onChange={ value => {
									this.saveIcons( { icon: value }, index )
								} }
								isMulti={false}
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
					<PanelColorSettings
						title={ __( "Color Settings" ) }
						colorSettings={ color_control }>
					</PanelColorSettings>
				</PanelBody>
			)
		}

		var element = document.getElementById( "uagb-style-icon-list-" + this.props.clientId )

		if( null != element && "undefined" != typeof element ) {
			element.innerHTML = styling( this.props )
		}

		const labelClass = ( hideLabel ) ? "uagb-icon-list__no-label" : ""

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
					<PanelBody
						title={ __( "Icon Count" ) }
						initialOpen={ true }
					>
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
					<PanelBody
						title={ __( "General" ) }
						initialOpen={ false }
					>
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
								/>
								<p className="uagb-note">{ __( "Note: Choose on what breakpoint the Icons will stack." ) }</p>
							</Fragment>
						}
						<ToggleControl
							label={ __( "Hide Labels" ) }
							checked={ hideLabel }
							onChange={ ( value ) => setAttributes( { hideLabel: ! hideLabel } ) }
						/>
						<RangeControl
							label={ __( "Size" ) }
							value={ size }
							onChange={ ( value ) => setAttributes( { size: value } ) }
							min={ 0 }
							max={ 500 }
							initialPosition={40}
						/>
						<RangeControl
							label={ __( "Lable Font Size" ) }
							value={ fontSize }
							onChange={ ( value ) => setAttributes( { fontSize: value } ) }
							min={ 1 }
							max={ 100 }
							beforeIcon="editor-textcolor"
							allowReset
							initialPosition={15}
						/>
						<RangeControl
							label={ __( "Background Size" ) }
							value={ bgSize }
							onChange={ ( value ) => setAttributes( { bgSize: value } ) }
							min={ 0 }
							max={ 500 }
						/>
						<p className="uagb-note">{ __( "Note: Background Size option is useful when one adds background color to the icons." ) }</p>
						<RangeControl
							label={ __( "Circular Size" ) }
							value={ borderRadius }
							onChange={ ( value ) => setAttributes( { borderRadius: value } ) }
							min={ 0 }
							max={ 500 }
						/>
						<p className="uagb-note">{ __( "Note: Circular Size option is useful when one adds background color to the icons." ) }</p>
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
										image_icon_html = <span className={ classnames( icon.icon , "uagb-icon-list__source-icon" ) }></span>
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
										href="javascript:void(0)"
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
			</Fragment>
		)
	}
}

export default UAGBIconList
