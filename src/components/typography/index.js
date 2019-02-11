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

// Export for ease of importing in individual blocks.
export {
	TypographyStyles,
}

function TypographyControl( props ) {

	const { disableFontfamily } = props;

	let fontFamily;

	if( true !== disableFontfamily ) {
		fontFamily = (
			<FontFamilyControl
				{ ...props }
			/>
		)
	}

	return (
		<div className="uag-typography-options">
			<RangeTypographyControl
				type = { props.fontSizeType }
				typeLabel = { props.fontSizeType.label }
				sizeMobile = { props.fontSizeMobile }
				sizeMobileLabel = { props.fontSizeMobile.label }
				sizeTablet = { props.fontSizeTablet }
				sizeTabletLabel = { props.fontSizeTablet.label }
				size = { props.fontSize }
				sizeLabel = { props.fontSize.label }
				sizeMobileText = { __( "Font Size Mobile" ) }
				sizeTabletText = { __( "Font Size Tablet" ) }
				sizeText = { __( "Font Size" ) }
				{ ...props }
			/>
			{ fontFamily }
			<RangeTypographyControl
				type = { props.lineHeightType }
				typeLabel = { props.lineHeightType.label }
				sizeMobile = { props.lineHeightMobile }
				sizeMobileLabel = { props.lineHeightMobile.label }
				sizeTablet = { props.lineHeightTablet }
				sizeTabletLabel = { props.lineHeightTablet.label }
				size = { props.lineHeight }
				sizeLabel = { props.lineHeight.label }
				sizeMobileText = { __( "Line Height Mobile" ) }
				sizeTabletText = { __( "Line Height Tablet" ) }
				sizeText = { __( "Line Height" ) }
				{ ...props }
			/>
		</div>
	)
}

export default TypographyControl
