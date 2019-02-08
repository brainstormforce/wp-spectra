/**
 * WordPress dependencies
 */
const { __ } = wp.i18n

const {
	TextControl,
	RangeControl,
	SelectControl,
	ButtonGroup,
	Button,
	PanelRow,
	TabPanel,
	Dashicon,
} = wp.components

const {
	withSelect
} = wp.data

// Extend component
const { Component, Fragment } = wp.element

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
				sizeMobileText = 'Font Size Mobile'
				sizeTabletText = 'Font Size Tablet'
				sizeText = 'Font Size'
				{ ...props }
			/>
			<FontFamilyControl
				{ ...props }
			/>
			<RangeTypographyControl
				type = { props.lineHeightType }
				typeLabel = { props.lineHeightType.label }
				sizeMobile = { props.lineHeightMobile }
				sizeMobileLabel = { props.lineHeightMobile.label }
				sizeTablet = { props.lineHeightTablet }
				sizeTabletLabel = { props.lineHeightTablet.label }
				size = { props.lineHeight }
				sizeLabel = { props.lineHeight.label }
				sizeMobileText = 'Line Height Mobile'
				sizeTabletText = 'Line Height Tablet'
				sizeText = 'Line Height'
				{ ...props }
			/>
		</div>
	)
}

export default TypographyControl
