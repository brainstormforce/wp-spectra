/**
 * WordPress dependencies
 */
const { __ } = wp.i18n

/**
 * Internal dependencies
 */
import FontFamilyControl from "./font-typography"
import RangeTypographyControl from "./range-typography"
import TypographyStyles from "./inline-styles"
import "./editor.scss"

const {
	Button,
	Dashicon
} = wp.components


// Extend component
const { Component, Fragment } = wp.element

// Export for ease of importing in individual blocks.
export {
	TypographyStyles,
}

class TypographyControl extends Component {

	constructor() {
		super( ...arguments )
		this.onAdvancedControlClick  = this.onAdvancedControlClick.bind( this )
		this.onAdvancedControlReset  = this.onAdvancedControlReset.bind( this )
	}

	onAdvancedControlClick() {

		let control = true
		let label = __( "Hide Advanced" )

		if( this.state !== null && this.state.showAdvancedControls === true ) {
			control = false
			label = __( "Advanced" )
		}

		this.setState(
			{
				showAdvancedControls: control,
				showAdvancedControlsLabel: label
			}
		)
	}

	onAdvancedControlReset() {

		const { setAttributes } = this.props

		// Reset Font family to default.
		setAttributes( { [ this.props.fontFamily.label ]: "" } )
		setAttributes( { [ this.props.fontWeight.label ]: "" } )
		setAttributes( { [ this.props.fontSubset.label ]: "" } )

		// Reset Font Size to default.
		setAttributes( { [ this.props.fontSize.label ]: "" } )
		setAttributes( { [ this.props.fontSizeType.label ]: "px" } )
		setAttributes( { [ this.props.fontSizeMobile.label ]: "" } )
		setAttributes( { [ this.props.fontSizeTablet.label ]: "" } )

		// Reset Line Height to default.
		setAttributes( { [ this.props.lineHeight.label ]: "" } )
		setAttributes( { [ this.props.lineHeightType.label ]: "em" } )
		setAttributes( { [ this.props.lineHeightMobile.label ]: "" } )
		setAttributes( { [ this.props.lineHeightTablet.label ]: "" } )

		// Reset Google Fonts to default.
		setAttributes( { [ this.props.loadGoogleFonts.label ]: false } )

	}

	render() {

		let fontSize
		let fontWeight
		let fontFamily
		let fontAdvancedControls
		let showAdvancedFontControls
		let resetFontAdvancedControls

		const { disableFontFamily, disableFontSize, disableLineHeight } = this.props

		if( true !== disableFontFamily ) {
			fontFamily = (
				<FontFamilyControl
					{ ...this.props }
				/>
			)
		}

		if( true !== disableLineHeight ) {
			fontWeight = (
				<RangeTypographyControl
					type = { this.props.lineHeightType }
					typeLabel = { this.props.lineHeightType.label }
					sizeMobile = { this.props.lineHeightMobile }
					sizeMobileLabel = { this.props.lineHeightMobile.label }
					sizeTablet = { this.props.lineHeightTablet }
					sizeTabletLabel = { this.props.lineHeightTablet.label }
					size = { this.props.lineHeight }
					sizeLabel = { this.props.lineHeight.label }
					sizeMobileText = { __( "Line Height" ) }
					sizeTabletText = { __( "Line Height" ) }
					sizeText = { __( "Line Height" ) }
					{ ...this.props }
				/>
			)
		}

		if( true !== disableFontSize ) {
			fontSize = (
				<RangeTypographyControl
					type = { this.props.fontSizeType }
					typeLabel = { this.props.fontSizeType.label }
					sizeMobile = { this.props.fontSizeMobile }
					sizeMobileLabel = { this.props.fontSizeMobile.label }
					sizeTablet = { this.props.fontSizeTablet }
					sizeTabletLabel = { this.props.fontSizeTablet.label }
					size = { this.props.fontSize }
					sizeLabel = { this.props.fontSize.label }
					sizeMobileText = { __( "Font Size" ) }
					sizeTabletText = { __( "Font Size" ) }
					sizeText = { __( "Font Size" ) }
					{ ...this.props }
				/>
			)
		}

		if( true !== disableFontFamily && true !== disableFontSize ) {
			fontAdvancedControls =  (
				<Button
					className="uagb-size-btn uagb-typography-control-btn"
					isSmall
					aria-pressed={ ( this.state !== null ) }
					onClick={ this.onAdvancedControlClick }
				><Dashicon icon="admin-tools" /></Button>
			)

			resetFontAdvancedControls =  (
				<Button
					className="uagb-size-btn uagb-typography-reset-btn"
					isSmall
					aria-pressed={ ( this.state !== null ) }
					onClick={ this.onAdvancedControlReset }
				><Dashicon icon="image-rotate" /></Button>
			)
		} else {
			showAdvancedFontControls = (
				<Fragment>
					{ fontFamily }
					{ fontWeight }
				</Fragment>
			)
		}


		if( this.state !== null && this.state.showAdvancedControls === true ) {

			showAdvancedFontControls = (
				<div className="uagb-typography-advanced">
					{ fontFamily }
					{ fontWeight }
				</div>
			)
		}

		return (
			<div className="uag-typography-options">
				{ fontSize }
				<div className="uag-typography-option-actions">
					<strong>{ __( "Advanced Typography" ) }</strong>
					{ fontAdvancedControls }
					{ resetFontAdvancedControls }
				</div>
				{ showAdvancedFontControls }
			</div>
		)
	}
}

export default TypographyControl
