/**
 * BLOCK: UAGB - Section Edit Class
 */

// Import classes
import classnames from "classnames"
import times from "lodash/times"
import UAGBIcon from "../../../dist/blocks/uagb-controls/UAGBIcon"
import FontIconPicker from "@fonticonpicker/react-fonticonpicker"
//import styling from "./styling"

const { __ } = wp.i18n

const {
	Component,
	Fragment,
} = wp.element

const {
	AlignmentToolbar,
	BlockControls,
	BlockAlignmentToolbar,
	InspectorControls,
	RichText,
	PanelColorSettings,
	URLInput,
	MediaUpload
} = wp.editor

const {
	PanelBody,
	SelectControl,
	RangeControl,
	Button
} = wp.components


class UAGBSocialShare extends Component {

	constructor() {
		super( ...arguments )
		this.state = {
			isHovered: "false",
			isFocused: "false",
		}
	}


	componentDidMount() {

		// Assigning block_id in the attribute.
		this.props.setAttributes( { block_id: this.props.clientId } )

		// Pushing Style tag for this block css.
		const $style = document.createElement( "style" )
		$style.setAttribute( "id", "uagb-style-social-share-" + this.props.clientId )
		document.head.appendChild( $style )
	}

	componentDidUpdate( prevProps ) {
		if ( ! this.props.isSelected && prevProps.isSelected && this.state.isFocused ) {
			this.setState( {
				isFocused: "false",
			} )
		}
	}

	saveSocials( value, index ) {
		const { attributes, setAttributes } = this.props
		const { socials } = attributes

		const newItems = socials.map( ( item, thisIndex ) => {
			if ( index === thisIndex ) {
				item = { ...item, ...value }
			}

			return item
		} )
		setAttributes( {
			socials: newItems,
		} )
	}

	render() {

		const { attributes, setAttributes, isSelected } = this.props

		const {
			align,
			className,
			social_count,
			socials,
			gap,
			stack
		} = attributes

		const onMouseOut = () => {
			if ( "false" !== this.state.isHovered ) {
				this.setState( {
					isHovered: "false",
				} )
			}
		}

		const updateFocusState = ( index ) => {
			this.setState( {
				isFocused: index,
			} )
		}

		const updateHoverState = ( index ) => {
			this.setState( {
				isHovered: index,
			} )
		}

		const socialControls = ( index ) => {
			return (
				<PanelBody key={index}
					title={ __( "Social Share" ) + " " + ( index + 1 ) + " " + __( "Settings" ) }
					initialOpen={ false }
				>
					<SelectControl
						label={ __( "Type" ) }
						value={ socials[ index ].type }
						options={ [
							{ value: "facebook", label: __( "Facebook" ) },
							{ value: "twitter", label: __( "Twitter" ) },
							{ value: "google", label: __( 'Google"Plu"' ) },
							{ value: "pinterest", label: __( "Pinterest" ) },
							{ value: "linkedin", label: __( "LinkedIn" ) },
							{ value: "digg", label: __( "Digg" ) },
							{ value: "blogger", label: __( "Blogger" ) },
							{ value: "reddit", label: __( "Reddit" ) },
							{ value: "stumbleupon", label: __( "StumbleUpon" ) },
							{ value: "tumblr", label: __( "Tumblr" ) },
							{ value: "myspace", label: __( "Myspace" ) },
							{ value: "email", label: __( "Email" ) },
						] }
						onChange={ value => {
							this.saveSocials( { type: value }, index )
						} }
					/>
					<SelectControl
						label={ __( "Image / Icon" ) }
						value={ socials[ index ].image_icon }
						options={ [
							{ value: "icon", label: __( "Icon" ) },
							{ value: "image", label: __( "Image" ) },
						] }
						onChange={ value => {
							this.saveSocials( { image_icon: value }, index )
						} }
					/>
					{ 'icon' == socials[ index ].image_icon &&
						<Fragment>
							<p className="components-base-control__label">{__( "Icon" )}</p>
							<FontIconPicker
								icons={UAGBIcon}
								renderUsing="class"
								theme="default"
								value={socials[ index ].icon}
								onChange={ value => {
									this.saveSocials( { icon: value }, index )
								} }
								isMulti={false}
							/>
						</Fragment>
					}
					{ 'image' == socials[ index ].image_icon &&
						<Fragment>
							<MediaUpload
								title={ __( "Select Image" ) }
								onSelect={ value => {
									this.saveSocials( { image: value }, index )
								} }
								type="image"
								value={ socials[ index ].image }
								render={ ( { open } ) => (
									<Button isDefault onClick={ open }>
										{ ! socials[ index ].image ? __( "Select Image" ) : __( "Replace image" ) }
									</Button>
								) }
							/>
							{ socials[ index ].image &&
								<Button
									className="uagb-rm-btn"
									onClick={ value => {
										this.saveSocials( { image: null }, index )
									} }
									isLink isDestructive>
									{ __( "Remove Image" ) }
								</Button>
							}
						</Fragment>
					}
					{ 'icon' == socials[ index ].image_icon &&
						<PanelColorSettings
							title={ __( "Color Settings" ) }
							colorSettings={ [
								{
									value: socials[ index ].icon_color,
									onChange:( value ) => this.saveSocials( { icon_color: value }, index ),
									label: __( "Color" ),
								},
								{
									value: socials[ index ].icon_hover_color,
									onChange:( value ) => this.saveSocials( { icon_hover_color: value }, index ),
									label: __( "Hover Color" ),
								}
							] }>
						</PanelColorSettings>
					}
				</PanelBody>
			)
		}

		var element = document.getElementById( "uagb-style-social-share-" + this.props.clientId )

		if( null != element && "undefined" != typeof element ) {
			//element.innerHTML = styling( this.props )
		}

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
						title={ __( "Button Count" ) }
						initialOpen={ true }
					>
						<RangeControl
							label={ __( "Number of Buttons" ) }
							value={ social_count }
							onChange={ newCount => {

								let cloneSocials = [ ...socials ]

								if ( cloneSocials.length < newCount ) {

									const incAmount = Math.abs( newCount - cloneSocials.length )

									{ times( incAmount, n => {

										cloneSocials.push( {
											"type": cloneSocials[ 0 ].type,
											"image_icon": cloneSocials[ 0 ].image_icon,
											"icon": cloneSocials[ 0 ].icon,
											"image": cloneSocials[ 0 ].image,
											"icon_color": cloneSocials[ 0 ].icon_color,
											"icon_hover_color": cloneSocials[ 0 ].icon_hover_color
										} )
									} ) }

									setAttributes( { socials: cloneSocials } )
								}
								setAttributes( { social_count: newCount } )
							} }
							min={ 1 }
							max={ 5 }
						/>
					</PanelBody>
					{ times( social_count, n => socialControls( n ) ) }
					<PanelBody
						title={ __( "Spacing" ) }
						initialOpen={ false }
					>
						<RangeControl
							label={ __( "Gap between Buttons" ) }
							value={ gap }
							onChange={ ( value ) => setAttributes( { gap: value } ) }
							min={ 0 }
							max={ 50 }
						/>
						<SelectControl
							label={ __( "Stack on" ) }
							value={ stack }
							options={ [
								{ value: "none", label: __( "None" ) },
								{ value: "desktop", label: __( "Desktop" ) },
								{ value: "tablet", label: __( "Tablet" ) },
								{ value: "mobile", label: __( "Mobile" ) },
							] }
							onChange={ ( value ) => setAttributes( { stack: value } ) }
						/>
						<p className="uagb-note">{ __( "Note: Choose on what breakpoint the buttons will stack." ) }</p>
					</PanelBody>
				</InspectorControls>
				<div className={ classnames(
					className,
					"uagb-buttons__outer-wrap"
				) }
				id={ `uagb-ss-${ this.props.clientId }` }
				>
					<div className="uagb-buttons__wrap">
						{
							socials.map( ( social, index ) => {

								if ( social_count <= index ) {
									return
								}

								return (
									<div
										className={ classnames(
											`uagb-ss-repeater-${index}`,
											"uagb-button__wrapper",
											( isSelected && ( ( false !== this.state.isFocused && index === this.state.isFocused ) ) ) ? "uagb-button__active" : ""
										) }
										key={ index }
									>
									<a className=""></a>
									{social.type}
									</div>
								)
							})
						}
					</div>
				</div>
			</Fragment>
		)
	}
}

export default UAGBSocialShare
