/**
 * BLOCK: UAGB - Section Edit Class
 */

// Import classes
import classnames from "classnames"
import times from "lodash/times"
import styling from "./styling"
import UAGB_Block_Icons from "../../../dist/blocks/uagb-controls/block-icons"

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
	ColorPalette
} = wp.editor

const {
	PanelBody,
	SelectControl,
	RangeControl,
	TabPanel
} = wp.components


class UAGBMultiButtonEdit extends Component {

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
		$style.setAttribute( "id", "uagb-style-buttons-" + this.props.clientId )
		document.head.appendChild( $style )
	}

	componentDidUpdate( prevProps ) {
		if ( ! this.props.isSelected && prevProps.isSelected && this.state.isFocused ) {
			this.setState( {
				isFocused: "false",
			} )
		}
	}

	saveButton( value, index ) {
		const { attributes, setAttributes } = this.props
		const { buttons } = attributes

		const newItems = buttons.map( ( item, thisIndex ) => {
			if ( index === thisIndex ) {
				item = { ...item, ...value }
			}

			return item
		} )
		setAttributes( {
			buttons: newItems,
		} )
	}

	render() {

		const { attributes, setAttributes, isSelected } = this.props

		const {
			align,
			className,
			btn_count,
			buttons,
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

		const buttonControls = ( index ) => {
			return (
				<PanelBody key={index}
					title={ __( "Button" ) + " " + ( index + 1 ) + " " + __( "Settings" ) }
					initialOpen={ false }
				>
					<p className="components-base-control__label">{ __( "Link" ) }</p>
					<URLInput
						value={ buttons[ index ].link }
						onChange={ value => {
							this.saveButton( { link: value }, index )
						} }
					/>
					<SelectControl
						label={ __( "Link Target" ) }
						value={ buttons[ index ].target }
						options={ [
							{ value: "_self", label: __( "Same Window" ) },
							{ value: "_blank", label: __( "New Window" ) },
						] }
						onChange={ value => {
							this.saveButton( { target: value }, index )
						} }
					/>
					<RangeControl
						beforeIcon="editor-textcolor"
						afterIcon="editor-textcolor"
						label={ __( "Button Text Size" ) }
						value={ buttons[ index ].size }
						onChange={ value => {
							this.saveButton( { size: value }, index )
						} }
						min={ 10 }
						max={ 100 }
						initialPosition={16}
					/>
					<hr className="uagb-editor__separator" />
					<h2>{ __( "Button Padding (px)" ) }</h2>
					<RangeControl
						label={ UAGB_Block_Icons.vertical_spacing }
						className={ "uagb-margin-control" }
						value={ buttons[ index ].vPadding }
						onChange={ value => {
							this.saveButton( { vPadding: value }, index )
						} }
						min={ 0 }
						max={ 100 }
					/>
					<RangeControl
						label={ UAGB_Block_Icons.horizontal_spacing }
						className={ "uagb-margin-control" }
						value={ buttons[ index ].hPadding }
						onChange={ value => {
							this.saveButton( { hPadding: value }, index )
						} }
						min={ 0 }
						max={ 100 }
					/>
					<hr className="uagb-editor__separator" />
					<h2>{ __( "Button Border" ) }</h2>
					<SelectControl
						label={ __( "Style" ) }
						value={ buttons[ index ].borderStyle }
						options={ [
							{ value: "none", label: __( "None" ) },
							{ value: "solid", label: __( "Solid" ) },
							{ value: "dotted", label: __( "Dotted" ) },
							{ value: "dashed", label: __( "Dashed" ) },
							{ value: "double", label: __( "Double" ) },
						] }
						onChange={ value => {
							this.saveButton( { borderStyle: value }, index )
						} }
					/>
					{ buttons[ index ].borderStyle != "none" &&
						<RangeControl
							label={ __( "Thickness" ) }
							value={ buttons[ index ].borderWidth }
							onChange={ value => {
								this.saveButton( { borderWidth: value }, index )
							} }
							min={ 0 }
							max={ 20 }
						/>
					}
					<RangeControl
						label={ __( "Rounded Corners" ) }
						value={ buttons[ index ].borderRadius }
						onChange={ value => {
							this.saveButton( { borderRadius: value }, index )
						} }
						min={ 0 }
						max={ 50 }
					/>
					<hr className="uagb-editor__separator" />
					<h2>{ __( "Button #" ) + " " + ( index + 1 ) + " " + __( " Color Settings" ) }</h2>
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
								let btn_color_tab
								if( "normal" === tabName.name ) {
									btn_color_tab = <Fragment>
										<p className="uagb-setting-label">{ __( "Text Color" ) }<span className="components-base-control__label"><span className="component-color-indicator" style={{ backgroundColor: buttons[ index ].color }} ></span></span></p>
										<ColorPalette
											value={ buttons[ index ].color }
											onChange={ ( value ) => this.saveButton( { color: value }, index ) }
											allowReset
										/>
										<p className="uagb-setting-label">{ __( "Background Color" ) }<span className="components-base-control__label"><span className="component-color-indicator" style={{ backgroundColor: buttons[ index ].background }} ></span></span></p>
										<ColorPalette
											value={ buttons[ index ].background }
											onChange={ ( value ) => this.saveButton( { background: value }, index ) }
											allowReset
										/>
										<p className="uagb-setting-label">{ __( "Border Color" ) }<span className="components-base-control__label"><span className="component-color-indicator" style={{ backgroundColor: buttons[ index ].borderColor }} ></span></span></p>
										<ColorPalette
											value={ buttons[ index ].borderColor }
											onChange={ ( value ) => this.saveButton( { borderColor: value }, index ) }
											allowReset
										/>
									</Fragment>
								}else {
									btn_color_tab = <Fragment>
										<p className="uagb-setting-label">{ __( "Text Hover Color" ) }<span className="components-base-control__label"><span className="component-color-indicator" style={{ backgroundColor: buttons[ index ].hColor }} ></span></span></p>
										<ColorPalette
											value={ buttons[ index ].hColor }
											onChange={ ( value ) => this.saveButton( { hColor: value }, index ) }
											allowReset
										/>
										<p className="uagb-setting-label">{ __( "Background Hover Color" ) }<span className="components-base-control__label"><span className="component-color-indicator" style={{ backgroundColor: buttons[ index ].hBackground }} ></span></span></p>
										<ColorPalette
											value={ buttons[ index ].hBackground }
											onChange={ ( value ) => this.saveButton( { hBackground: value }, index ) }
											allowReset
										/>
										<p className="uagb-setting-label">{ __( "Border Hover Color" ) }<span className="components-base-control__label"><span className="component-color-indicator" style={{ backgroundColor: buttons[ index ].borderHColor }} ></span></span></p>
										<ColorPalette
											value={ buttons[ index ].borderHColor }
											onChange={ ( value ) => this.saveButton( { borderHColor: value }, index ) }
											allowReset
										/>
									</Fragment>
								}
								return <div>{ btn_color_tab }</div>
							}
						}
					</TabPanel>
				</PanelBody>
			)
		}

		var element = document.getElementById( "uagb-style-buttons-" + this.props.clientId )

		if( null != element && "undefined" != typeof element ) {
			element.innerHTML = styling( this.props )
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
							value={ btn_count }
							onChange={ newCount => {

								let cloneButtons = [ ...buttons ]

								if ( cloneButtons.length < newCount ) {

									const incAmount = Math.abs( newCount - cloneButtons.length )

									{ times( incAmount, n => {

										cloneButtons.push( {
											label: "Click Here " + "#" + ( cloneButtons.length + 1 ),
											link: cloneButtons[ 0 ].link,
											target: cloneButtons[ 0 ].target,
											size: cloneButtons[ 0 ].size,
											vPadding: cloneButtons[ 0 ].vPadding,
											hPadding: cloneButtons[ 0 ].hPadding,
											borderRadius: cloneButtons[ 0 ].borderRadius,
											borderWidth: cloneButtons[ 0 ].borderWidth,
											borderColor: cloneButtons[ 0 ].borderColor,
											borderHColor: cloneButtons[ 0 ].borderHColor,
											borderStyle: cloneButtons[ 0 ].borderStyle,
											color: cloneButtons[ 0 ].color,
											background: cloneButtons[ 0 ].background,
											hColor: cloneButtons[ 0 ].hColor,
											hBackground: cloneButtons[ 0 ].hBackground										} )
									} ) }

									setAttributes( { buttons: cloneButtons } )
								}
								setAttributes( { btn_count: newCount } )
							} }
							min={ 1 }
							max={ 5 }
						/>
					</PanelBody>
					{ times( btn_count, n => buttonControls( n ) ) }
					<PanelBody
						title={ __( "Spacing" ) }
						initialOpen={ false }
					>
						<RangeControl
							label={ __( "Gap Between Buttons" ) }
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
							help={ __( "Note: Choose on what breakpoint the buttons will stack." ) }
						/>
					</PanelBody>
				</InspectorControls>
				<div className={ classnames(
					className,
					"uagb-buttons__outer-wrap"
				) }
				id={ `uagb-buttons-${ this.props.clientId }` }
				>
					<div className="uagb-buttons__wrap">
						{
							buttons.map( ( button, index ) => {

								if ( btn_count <= index ) {
									return
								}

								return (
									<div
										className={ classnames(
											`uagb-buttons-repeater-${index}`,
											"uagb-button__wrapper",
											( isSelected && ( ( false !== this.state.isFocused && index === this.state.isFocused ) ) ) ? "uagb-button__active" : ""
										) }
										key={ index }
									>
										<RichText
											placeholder={ __( "Add text…" ) }
											value={ button.label }
											tagName='div'
											onChange={ value => {
												this.saveButton( { label: value }, index )
											} }
											formattingControls={ [ "bold", "italic", "strikethrough" ] }
											className='uagb-button__link'
											rel ="noopener noreferrer"
											keepPlaceholderOnFocus
										/>
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

export default UAGBMultiButtonEdit
