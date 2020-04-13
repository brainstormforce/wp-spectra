/**
 * BLOCK: UAGB - Social Share Edit Class
 */

import classnames from "classnames"
import times from "lodash/times"
import map from "lodash/map"
import memoize from "memize"
import UAGBIcon from "../../../dist/blocks/uagb-controls/UAGBIcon.json"
import renderSVG from "../../../dist/blocks/uagb-controls/renderIcon"
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
	InnerBlocks,
	PanelColorSettings,
	MediaUpload,
	ColorPalette
} = wp.blockEditor

const {
	PanelBody,
	SelectControl,
	RangeControl,
	Button,
	ButtonGroup,
	TabPanel,
	Dashicon
} = wp.components

const ALLOWED_BLOCKS = [ "uagb/social-share-child" ]

let svg_icons = Object.keys( UAGBIcon )

class UAGBSocialShare extends Component {

	componentDidMount() {

		// Assigning block_id in the attribute.
		this.props.setAttributes( { block_id: this.props.clientId } )
		this.props.setAttributes( { classMigrate: true } )
		this.props.setAttributes( { current_url: wp.data.select("core/editor").getPermalink() } )

		// Pushing Style tag for this block css.
		const $style = document.createElement( "style" )
		$style.setAttribute( "id", "uagb-style-social-share-" + this.props.clientId )
		document.head.appendChild( $style )
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
			stack,
			current_url,
			social_layout,
			borderRadius,
			size,
			sizeType,
			sizeMobile,
			sizeTablet,
			bgSize,
			bgSizeType,
			bgSizeMobile,
			bgSizeTablet,
		} = attributes

		

		var element = document.getElementById( "uagb-style-social-share-" + this.props.clientId )

		if( null != element && "undefined" != typeof element ) {
			element.innerHTML = styling( this.props )
		}

		const sizeTypes = [
			{ key: "px", name: __( "px" ) },
			{ key: "em", name: __( "em" ) },
		]

		const sizeTypesControls = (
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

		const bgSizeTypesControls = (
			<ButtonGroup className="uagb-size-type-field" aria-label={ __( "Size Type" ) }>
				{ map( sizeTypes, ( { name, key } ) => (
					<Button
						key={ key }
						className="uagb-size-btn"
						isSmall
						isPrimary={ bgSizeType === key }
						aria-pressed={ bgSizeType === key }
						onClick={ () => setAttributes( { bgSizeType: key } ) }
					>
						{ name }
					</Button>
				) ) }
			</ButtonGroup>
		)

		const getSocialShareTemplate = memoize( ( icon_block, socials ) => {
			return times( icon_block, n => [ "uagb/social-share-child", socials[n] ] )
		} )

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
					<PanelBody title={ __( "Social Icon Count" ) } initialOpen={ true }>
						<RangeControl
							label={ __( "Number of Social Icons" ) }
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
											"icon_hover_color": cloneSocials[ 0 ].icon_hover_color,
											"icon_bg_color": cloneSocials[ 0 ].icon_bg_color,
											"icon_bg_hover_color": cloneSocials[ 0 ].icon_bg_hover_color
										} )
									} ) }

									setAttributes( { socials: cloneSocials } )
								}
								setAttributes( { social_count: newCount } )
							} }
							min={ 1 }
							max={ 12 }
						/>
					</PanelBody>
					{ times( social_count, n => socialControls( n ) ) }
					<PanelBody title={ __( "General" ) } initialOpen={ false }>
						<SelectControl
							label={ __( "Layout" ) }
							value={ social_layout }
							options={ [
								{ value: "horizontal", label: __( "Horizontal" ) },
								{ value: "vertical", label: __( "Vertical" ) },
							] }
							onChange={ ( value ) => setAttributes( { social_layout: value } ) }
						/>
						{ "horizontal" == social_layout &&
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
								help={ __( "Note: Choose on what breakpoint the Icons will stack." ) }
							/>
						}
						<hr className="uagb-editor__separator" />
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
													label={ __( "Size" ) }
													value={ sizeMobile }
													onChange={ ( value ) => setAttributes( { sizeMobile: value } ) }
													allowReset
													min={ 0 }
													max={ 500 }
													initialPosition={40}
												/>
											</Fragment>
										)
									} else if ( "tablet" === tab.name ) {
										tabout = (
											<Fragment>
												{sizeTypesControls}
												<RangeControl
													label={ __( "Size" ) }
													value={ sizeTablet }
													onChange={ ( value ) => setAttributes( { sizeTablet: value } ) }
													allowReset
													min={ 0 }
													max={ 500 }
													initialPosition={40}
												/>
											</Fragment>
										)
									} else {
										tabout = (
											<Fragment>
												{sizeTypesControls}
												<RangeControl
													label={ __( "Size" ) }
													value={ size }
													onChange={ ( value ) => setAttributes( { size: value } ) }
													allowReset
													min={ 0 }
													max={ 500 }
													initialPosition={40}
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
									let tabout

									if ( "mobile" === tab.name ) {
										tabout = (
											<Fragment>
												{bgSizeTypesControls}
												<RangeControl
													label={ __( "Background Size" ) }
													value={ bgSizeMobile }
													onChange={ ( value ) => setAttributes( { bgSizeMobile: value } ) }
													allowReset
													min={ 0 }
													max={ 500 }
													help={ __( "Note: Background Size option is useful when one adds background color to the icons." ) }
													initialPosition={40}
												/>
											</Fragment>
										)
									} else if ( "tablet" === tab.name ) {
										tabout = (
											<Fragment>
												{bgSizeTypesControls}
												<RangeControl
													label={ __( "Background Size" ) }
													value={ bgSizeTablet }
													onChange={ ( value ) => setAttributes( { bgSizeTablet: value } ) }
													allowReset
													min={ 0 }
													max={ 500 }
													help={ __( "Note: Background Size option is useful when one adds background color to the icons." ) }
													initialPosition={40}
												/>
											</Fragment>
										)
									} else {
										tabout = (
											<Fragment>
												{bgSizeTypesControls}
												<RangeControl
													label={ __( "Background Size" ) }
													value={ bgSize }
													onChange={ ( value ) => setAttributes( { bgSize: value } ) }
													allowReset
													min={ 0 }
													max={ 500 }
													help={ __( "Note: Background Size option is useful when one adds background color to the icons." ) }
													initialPosition={40}
												/>
											</Fragment>
										)
									}

									return <div>{ tabout }</div>
								}
							}
						</TabPanel>
						<RangeControl
							label={ __( "Circular Size" ) }
							value={ borderRadius }
							onChange={ ( value ) => setAttributes( { borderRadius: value } ) }
							help={ __( "Note: Circular Size option is useful when one adds background color to the icons." ) }
							min={ 0 }
							max={ 500 }
						/>
						<RangeControl
							label={ __( "Gap between Icon / Image" ) }
							value={ gap }
							onChange={ ( value ) => setAttributes( { gap: value } ) }
							min={ 0 }
							max={ 100 }
						/>
					</PanelBody>
				</InspectorControls>
				<div className={ classnames(
					className,
					"uagb-social-share__outer-wrap",
					`uagb-social-share__layout-${social_layout}`,
					`uagb-block-${ this.props.clientId }`
				) }
				>
					<div className="uagb-social-share__wrap">
						<InnerBlocks
							template={ getSocialShareTemplate( social_count, socials ) }
							templateLock="all"
							allowedBlocks={ ALLOWED_BLOCKS } />
					</div>
				</div>
			</Fragment>
		)
	}
}

export default UAGBSocialShare
