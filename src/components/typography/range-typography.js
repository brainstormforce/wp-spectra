/**
 * WordPress dependencies
 */
const { __ } = wp.i18n

const {
	RangeControl,
	ButtonGroup,
	Button,
	TabPanel,
	Dashicon,
} = wp.components

// Extend component
const { Component, Fragment } = wp.element

/**
 * Internal dependencies
 */
import map from "lodash/map"


function RangeTypographyControl( props ) {

	let sizeTypes

	if( "sizeTypes" in props ) {
		sizeTypes = props.sizeTypes
	} else {
		sizeTypes = [
			{ key: "px", name: __( "px",'ultimate-addons-for-gutenberg' ) },
			{ key: "em", name: __( "em",'ultimate-addons-for-gutenberg' ) },
		]
	}

	const sizeTypesControls = (
		<ButtonGroup className="uagb-size-type-field" aria-label={ __( "Size Type",'ultimate-addons-for-gutenberg' ) }>
			{ map( sizeTypes, ( { name, key } ) => (
				<Button
					key={ key }
					className="uagb-size-btn"
					isSmall
					isPrimary={ props.type.value === key }
					aria-pressed={ props.type.value === key }
					onClick={ () => props.setAttributes( { [props.typeLabel]: key } ) }
				>
					{ name }
				</Button>
			) ) }
		</ButtonGroup>
	)

	return (
		<div className="uag-typography-range-options">

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
									{sizeTypesControls}
									<RangeControl
										label={ __( props.sizeMobileText ) }
										value={ props.sizeMobile.value }
										onChange={ ( value ) => props.setAttributes( { [props.sizeMobileLabel]: value } ) }
										min={ 0 }
										max={ 100 }
										step={ props.steps }
										beforeIcon="editor-textcolor"
										allowReset={true}
										initialPosition={30}
									/>
								</Fragment>
							)
						} else if ( "tablet" === tab.name ) {
							tabout = (
								<Fragment>
									{sizeTypesControls}
									<RangeControl
										label={ __( props.sizeTabletText ) }
										value={ props.sizeTablet.value }
										onChange={ ( value ) => props.setAttributes( { [props.sizeTabletLabel]: value } ) }
										min={ 0 }
										max={ 100 }
										step={ props.steps }
										beforeIcon="editor-textcolor"
										allowReset={true}
										initialPosition={30}
									/>
								</Fragment>
							)
						} else {
							tabout = (
								<Fragment>
									{sizeTypesControls}
									<RangeControl
										label={ __( props.sizeText ) }
										value={ props.size.value || "" }
										onChange={ ( value ) => props.setAttributes( { [props.sizeLabel]: value } ) }
										min={ 0 }
										max={ 100 }
										step={ props.steps }
										beforeIcon="editor-textcolor"
										allowReset={true}
										initialPosition={30}
									/>
								</Fragment>
							)
						}

						return <div>{ tabout }</div>
					}
				}
			</TabPanel>
		</div>
	)
}

export default RangeTypographyControl
