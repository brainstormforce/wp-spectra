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
		let label = __( "Hide Advanced Controls" )

		if( this.state !== null && this.state.showAdvancedControls === true ) {
			control = false;
			label = __( "Show Advanced Controls" )
		}

		this.setState(
			{
				showAdvancedControls: control,
				showAdvancedControlsLabel: label
			}
		);
	}

	onAdvancedControlReset() {

		const { setAttributes } = this.props

		// Reset Font family to default.
		setAttributes( { [ this.props.fontFamily.label ]: '' } )
		setAttributes( { [ this.props.fontWeight.label ]: '' } )
		setAttributes( { [ this.props.fontSubset.label ]: '' } )

		// Reset Font Size to default.
		setAttributes( { [ this.props.fontSize.label ]: '' } )
		setAttributes( { [ this.props.fontSizeType.label ]: '' } )
		setAttributes( { [ this.props.fontSizeMobile.label ]: '' } )
		setAttributes( { [ this.props.fontSizeTablet.label ]: '' } )

		// Reset Line Height to default.
		setAttributes( { [ this.props.lineHeight.label ]: '' } )
		setAttributes( { [ this.props.lineHeightType.label ]: '' } )
		setAttributes( { [ this.props.lineHeightMobile.label ]: '' } )
		setAttributes( { [ this.props.lineHeightTablet.label ]: '' } )

		// Reset Google Fonts to default.
		setAttributes( { [ this.props.loadGoogleFonts.label ]: false } )

	}

	render() {

		let fontFamily;

		const { disableFontfamily } = this.props;

		if( true !== disableFontfamily ) {
			fontFamily = (
				<FontFamilyControl
					{ ...this.props }
				/>
			)
		}

		let showAdvancedControls = false;

		const fontAdvancedControls =  (
			<Button
				className="uagb-size-btn"
				isSmall	
				aria-pressed={ ( this.state !== null ) }
				onClick={ this.onAdvancedControlClick }
			>
				{ (this.state === null) ? __( "Show Advanced Controls" ) : this.state.showAdvancedControlsLabel }
			</Button>
		)

		const resetFontAdvancedControls =  (
			<Button
				className="uagb-size-btn"
				isSmall	
				aria-pressed={ ( this.state !== null ) }
				onClick={ this.onAdvancedControlReset }
			> 
				{ __( "Reset" ) } 
			</Button>
		)

		let showAdvancedFontControls;

		if( this.state !== null && this.state.showAdvancedControls === true ) {
			
			showAdvancedFontControls = (
				<Fragment>
					{ fontFamily }
					<RangeTypographyControl
						type = { this.props.lineHeightType }
						typeLabel = { this.props.lineHeightType.label }
						sizeMobile = { this.props.lineHeightMobile }
						sizeMobileLabel = { this.props.lineHeightMobile.label }
						sizeTablet = { this.props.lineHeightTablet }
						sizeTabletLabel = { this.props.lineHeightTablet.label }
						size = { this.props.lineHeight }
						sizeLabel = { this.props.lineHeight.label }
						sizeMobileText = { __( "Line Height Mobile" ) }
						sizeTabletText = { __( "Line Height Tablet" ) }
						sizeText = { __( "Line Height" ) }
						{ ...this.props }
					/>
				</Fragment>
			)
		}

		return (
			<div className="uag-typography-options">
				<RangeTypographyControl
					type = { this.props.fontSizeType }
					typeLabel = { this.props.fontSizeType.label }
					sizeMobile = { this.props.fontSizeMobile }
					sizeMobileLabel = { this.props.fontSizeMobile.label }
					sizeTablet = { this.props.fontSizeTablet }
					sizeTabletLabel = { this.props.fontSizeTablet.label }
					size = { this.props.fontSize }
					sizeLabel = { this.props.fontSize.label }
					sizeMobileText = { __( "Font Size Mobile" ) }
					sizeTabletText = { __( "Font Size Tablet" ) }
					sizeText = { __( "Font Size" ) }
					{ ...this.props }
				/>
				{ fontAdvancedControls }
				{ resetFontAdvancedControls }
				{ showAdvancedFontControls }
			</div>
		)
	}
}

export default TypographyControl
