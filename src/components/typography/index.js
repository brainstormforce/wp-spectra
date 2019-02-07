/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;

const {
	TextControl,
	RangeControl,
	SelectControl,
	ButtonGroup,
	Button,
	PanelRow,
	TabPanel,
	Dashicon,
} = wp.components;

const {
	withSelect
} = wp.data

// Extend component
const { Component, Fragment } = wp.element

/**
 * Internal dependencies
 */
import FontFamilyControl from './font-typography';
import TypographyOptionsInlineStyles from './inline-styles';
import map from "lodash/map"
import googleFonts from './fonts';
import Select from 'react-select';
import './editor.scss';

// Export for ease of importing in individual blocks.
export {
	TypographyOptionsInlineStyles,
};

function TypographyOptions( props ) {

	const sizeTypes = [
		{ key: "px", name: __( "px" ) },
		{ key: "em", name: __( "em" ) },
	]

	const headsizeTypesControls = (
		<ButtonGroup className="uagb-size-type-field" aria-label={ __( "Size Type" ) }>
			{ map( sizeTypes, ( { name, key } ) => (
				<Button
					key={ key }
					className="uagb-size-btn"
					isSmall
					isPrimary={ props.fontSizeType === key }
					aria-pressed={ props.fontSizeType === key }
					onClick={ () => props.setAttributes( { [props.fontSizeType.label]: key } ) }
				>
					{ name }
				</Button>
			) ) }
		</ButtonGroup>
	)

	const headLineHeightTypesControls = (
		<ButtonGroup className="uagb-size-type-field" aria-label={ __( "Size Type" ) }>
			{ map( sizeTypes, ( { name, key } ) => (
				<Button
					key={ key }
					className="uagb-size-btn"
					isSmall
					isPrimary={ props.lineheightType === key }
					aria-pressed={ props.lineheightType === key }
					onClick={ () => props.setAttributes( { [props.lineheightType.label]: key } ) }
				>
					{ name }
				</Button>
			) ) }
		</ButtonGroup>
	)

	return (
		<div className="uag-typography-options">
			<FontFamilyControl
				{ ...props }
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
									{headsizeTypesControls}
									<RangeControl
										label={ __( "Font Size Mobile" ) }
										value={ props.fontSizeMobile.value }
										onChange={ ( value ) => props.setAttributes( { [props.fontSizeMobile.label]: value } ) }
										min={ 10 }
										max={ 100 }
										beforeIcon="editor-textcolor"
										allowReset
										initialPosition={30}
									/>											
								</Fragment>
							)
						} else if ( "tablet" === tab.name ) {
							tabout = (
								<Fragment>
									{headsizeTypesControls}
									<RangeControl
										label={ __( "Font Size Tablet" ) }
										value={ props.fontSizeTablet.value }
										onChange={ ( value ) => props.setAttributes( { [props.fontSizeTablet.label]: value } ) }
										min={ 10 }
										max={ 100 }
										beforeIcon="editor-textcolor"
										allowReset
										initialPosition={30}
									/>
								</Fragment>
							)
						} else {
							tabout = (
								<Fragment>
									{headsizeTypesControls}
									<RangeControl
										label={ __( "Font Size" ) }
										value={ props.fontSize.value }
										onChange={ ( value ) => props.setAttributes( { [props.fontSize.label]: value } ) }
										min={ 10 }
										max={ 100 }
										beforeIcon="editor-textcolor"
										allowReset
										initialPosition={30}
									/>
								</Fragment>
							)
						}

						return <div>{ tabout }</div>
					}
				}
			</TabPanel>

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
						let lineheighttab

						if ( "mobile" === tab.name ) {
							lineheighttab = (
								<Fragment>
									{headLineHeightTypesControls}
									<RangeControl
										label={ __( "Line Height Mobile" ) }
										value={ props.lineHeightMobile.value }
										onChange={ ( value ) => props.setAttributes( { [props.lineHeightMobile.label]: value } ) }
										min={ 10 }
										max={ 100 }
										beforeIcon="editor-textcolor"
										allowReset
										initialPosition={30}
									/>
								</Fragment>
							)
						} else if ( "tablet" === tab.name ) {
							lineheighttab = (
								<Fragment>
									{headLineHeightTypesControls}
									<RangeControl
										label={ __( "Line Height tablet" ) }
										value={ props.lineHeightTablet.value }
										onChange={ ( value ) => props.setAttributes( { [props.lineHeightTablet.label]: value } ) }
										min={ 10 }
										max={ 100 }
										beforeIcon="editor-textcolor"
										allowReset
										initialPosition={30}
									/>
								</Fragment>
							)
						} else {
							lineheighttab = (
								<Fragment>
									{headLineHeightTypesControls}
									<RangeControl
										label={ __( "Line Height" ) }
										value={ props.lineHeight.value }
										onChange={ ( value ) => props.setAttributes( { [props.lineHeight.label]: value } ) }
										min={ 10 }
										max={ 100 }
										beforeIcon="editor-textcolor"
										allowReset
										initialPosition={30}
									/>
								</Fragment>
							)
						}

						return <div>{ lineheighttab }</div>
					}
				}
			</TabPanel>
		</div>
	);
}

export default TypographyOptions
