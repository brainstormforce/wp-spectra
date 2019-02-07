/**
 * BLOCK: Team
 */

import classnames from "classnames"
import map from "lodash/map"
import UAGBIcon from "../../../dist/blocks/uagb-controls/UAGBIcon.json"
import FontIconPicker from "@fonticonpicker/react-fonticonpicker"
import styling from "./styling"
import renderSVG from "../../../dist/blocks/uagb-controls/renderIcon"
import UAGB_Block_Icons from "../../../dist/blocks/uagb-controls/block-icons"


const { __ } = wp.i18n

const {
	AlignmentToolbar,
	BlockControls,
	InspectorControls,
	RichText,
	PanelColorSettings,
	MediaUpload,
} = wp.editor

const {
	PanelBody,
	SelectControl,
	RangeControl,
	Button,
	ButtonGroup,
	TabPanel,
	Dashicon,
	TextControl,
	BaseControl,
	ToggleControl
} = wp.components

const { Component, Fragment } = wp.element

let svg_icons = Object.keys( UAGBIcon )

let imageSizeOptions = [
	{ value: "thumbnail", label: __( "Thumbnail" ) },
	{ value: "medium", label: __( "Medium" ) },
	{ value: "full", label: __( "Large" ) }
]

class UAGBTeam extends Component {

	social_html( icon, link, target ) {

		let target_value =  ( target ) ? "_blank" : "_self"

		return (
			<li className="uagb-team__social-icon"><a href={link} target={target_value} title="" rel ="noopener noreferrer">{ renderSVG(icon) }</a></li>
		)
	}

	constructor() {
		super( ...arguments )
		this.onSelectImage    = this.onSelectImage.bind( this )
	}


	getImageSize(sizes) {
		var size_arr = []
		$.each(sizes, function (index, item) {
		  var name = index
		  	var p = { "value" : name, "label": name }
		  	size_arr.push(p)
		})
		return(size_arr)
	}

	onSelectImage( media ) {

		const { image } = this.props.attributes
		const { setAttributes } = this.props

		if ( ! media || ! media.url ) {
			setAttributes( { image: null } )
			return
		}
		if ( ! media.type || "image" != media.type ) {
			return
		}
		setAttributes( { image: media } )

		var new_img = this.getImageSize(media["sizes"])
		imageSizeOptions = new_img
	}

	render() {

		const { isSelected, className, setAttributes, attributes, mergeBlocks, insertBlocksAfter, onReplace } = this.props

		// Setup the attributes.
		const {
			block_id,
			align,
			tag,
			title,
			prefix,
			description_text,
			titleColor,
			prefixColor,
			descColor,
			titleFontSize,
			titleFontSizeType,
			titleFontSizeMobile,
			titleFontSizeTablet,
			prefixFontSize,
			prefixFontSizeType,
			prefixFontSizeMobile,
			prefixFontSizeTablet,
			descFontSize,
			descFontSizeType,
			descFontSizeMobile,
			descFontSizeTablet,
			socialFontSize,
			socialFontSizeType,
			socialFontSizeMobile,
			socialFontSizeTablet,
			image,
			imgStyle,
			imgAlign,
			imgSize,
			imgWidth,
			imgPosition,
			titleSpace,
			descSpace,
			prefixSpace,
			imgLeftMargin,
			imgRightMargin,
			imgTopMargin,
			imgBottomMargin,
			twitterIcon,
			fbIcon,
			linkedinIcon,
			pinIcon,
			twitterLink,
			fbLink,
			linkedinLink,
			pinLink,
			socialColor,
			socialHoverColor,
			socialSpace,
			socialTarget,
			socialEnable,
			stack
		} = attributes

		// Add CSS.
		var element = document.getElementById( "uagb-team-style-" + this.props.clientId )
		if( null != element && "undefined" != typeof element ) {
			element.innerHTML = styling( this.props )
		}

		if( typeof attributes.image !== "undefined" && attributes.image !== null && attributes.image !=="" ){
			imageSizeOptions = this.getImageSize(image["sizes"])
		}

		// Remove image.
		const onRemoveImage = ( media ) => {
			setAttributes( { image: null } )
		}

		let size = ""
		let img_url = ""

		if ( image ) {
			size = image.sizes
			if ( image.sizes ) {
				img_url = ( size[imgSize] ) ? size[imgSize].url : image.url
			} else {
				img_url = image.url
			}
		}

		let image_html = ""

		if ( "" != img_url ) {
			image_html = (
				<div
					className={ classnames(
						"uagb-team__image-wrap",
						`uagb-team__image-crop-${imgStyle}`,
					) }>
					<img
						className =""
						src = { img_url }
						alt = { ( image.alt ) ? image.alt : "" }
					/>
				</div>
			)
		}

		const team_image = ""

		// Get description and seperator components.
		const desc_html = (
			<div className = "uagb-team__desc-wrap">
				<RichText
					tagName='p'
					value={ description_text }
					placeholder={ __( "Write a Description" ) }
					className='uagb-team__desc'
					onChange={ ( value ) => setAttributes( { description_text: value } ) }
					onMerge = { mergeBlocks }
					placeholder={ __( "Write a Description" ) }
					unstableOnSplit = {
						insertBlocksAfter ?
							( before, after, ...blocks ) => {
								setAttributes( { content: before } )
								insertBlocksAfter( [
									...blocks,
									createBlock( "core/paragraph", { content: after } ),
								] )
							} :
							undefined
					}
					onRemove={ () => onReplace( [] ) }
				/>
			</div>
		)

		const social_links = (
			<div className="uagb-team__social-icon-wrap">
				<ul className="uagb-team__social-list">
					{ "" != twitterIcon && this.social_html( twitterIcon, twitterLink, socialTarget ) }
					{ "" != fbIcon && this.social_html( fbIcon, fbLink, socialTarget ) }
					{ "" != linkedinIcon && this.social_html( linkedinIcon, linkedinLink, socialTarget ) }
					{ "" != pinIcon && this.social_html( pinIcon, pinLink, socialTarget ) }
				</ul>
			</div>
		)

		// Get Title and Prefix components.
		const title_html = (
			<div className = "uagb-team__title-wrap">
				<RichText
					tagName= { tag }
					value={ title }
					className = 'uagb-team__title'
					onChange = { ( value ) => setAttributes( { title: value } ) }
					multiline={ false }
					placeholder={ __( "Write a Title" ) }
					onMerge = { mergeBlocks }
					unstableOnSplit = {
						insertBlocksAfter ?
							( before, after, ...blocks ) => {
								setAttributes( { content: before } )
								insertBlocksAfter( [
									...blocks,
									createBlock( "core/paragraph", { content: after } ),
								] )
							} :
							undefined
					}
					onRemove={ () => onReplace( [] ) }
				/>
				<RichText
					tagName="div"
					value={ prefix }
					placeholder={ __( "Enter Prefix" ) }
					className='uagb-team__prefix'
					onChange={ ( value ) => setAttributes( { prefix: value } ) }
					onMerge = { mergeBlocks }
					placeholder={ __( "Write a Designation" ) }
					unstableOnSplit = {
						insertBlocksAfter ?
							( before, after, ...blocks ) => {
								setAttributes( { content: before } )
								insertBlocksAfter( [
									...blocks,
									createBlock( "core/paragraph", { content: after } ),
								] )
							} :
							undefined
					}
					onRemove={ () => onReplace( [] ) }
				/>
			</div>
		)

		const sizeTypes = [
			{ key: "px", name: __( "px" ) },
			{ key: "em", name: __( "em" ) },
		]

		const titleTypesControls = (
			<ButtonGroup className="uagb-size-type-field" aria-label={ __( "Size Type" ) }>
				{ map( sizeTypes, ( { name, key } ) => (
					<Button
						key={ key }
						className="uagb-size-btn"
						isSmall
						isPrimary={ titleFontSizeType === key }
						aria-pressed={ titleFontSizeType === key }
						onClick={ () => setAttributes( { titleFontSizeType: key } ) }
					>
						{ name }
					</Button>
				) ) }
			</ButtonGroup>
		)

		const descTypesControls = (
			<ButtonGroup className="uagb-size-type-field" aria-label={ __( "Size Type" ) }>
				{ map( sizeTypes, ( { name, key } ) => (
					<Button
						key={ key }
						className="uagb-size-btn"
						isSmall
						isPrimary={ descFontSizeType === key }
						aria-pressed={ descFontSizeType === key }
						onClick={ () => setAttributes( { descFontSizeType: key } ) }
					>
						{ name }
					</Button>
				) ) }
			</ButtonGroup>
		)

		const prefixTypesControls = (
			<ButtonGroup className="uagb-size-type-field" aria-label={ __( "Size Type" ) }>
				{ map( sizeTypes, ( { name, key } ) => (
					<Button
						key={ key }
						className="uagb-size-btn"
						isSmall
						isPrimary={ prefixFontSizeType === key }
						aria-pressed={ prefixFontSizeType === key }
						onClick={ () => setAttributes( { prefixFontSizeType: key } ) }
					>
						{ name }
					</Button>
				) ) }
			</ButtonGroup>
		)

		const socialTypesControls = (
			<ButtonGroup className="uagb-size-type-field" aria-label={ __( "Size Type" ) }>
				{ map( sizeTypes, ( { name, key } ) => (
					<Button
						key={ key }
						className="uagb-size-btn"
						isSmall
						isPrimary={ socialFontSizeType === key }
						aria-pressed={ socialFontSizeType === key }
						onClick={ () => setAttributes( { socialFontSizeType: key } ) }
					>
						{ name }
					</Button>
				) ) }
			</ButtonGroup>
		)

		return (
			<Fragment>
				{ ( imgPosition == "above" ) &&
					<BlockControls key='controls'>
						<AlignmentToolbar
							value={ align }
							onChange={ ( value ) => setAttributes( { align: value } ) }
						/>
					</BlockControls>
				}
				<InspectorControls>
					<PanelBody
						title={ __( "Image" ) }
					>
						<BaseControl
							className="editor-bg-image-control"
							label={ __( "Team Member Image" ) }>
							<MediaUpload
								title={ __( "Select Image" ) }
								onSelect={ this.onSelectImage }
								allowedTypes={ [ "image" ] }
								value={ image }
								render={ ( { open } ) => (
									<Button isDefault onClick={ open }>
										{ ! image ? __( "Select Image" ) : __( "Replace image" ) }
									</Button>
								) }
							/>
							{ image &&
								<Button className="uagb-rm-btn" onClick={ onRemoveImage } isLink isDestructive>
									{ __( "Remove Image" ) }
								</Button>
							}
						</BaseControl>
						{ image &&
							<SelectControl
								label={ __( "Position" ) }
								value={ imgPosition }
								onChange={ ( value ) => setAttributes( { imgPosition: value } ) }
								options={ [
									{ value: "above", label: __( "Above" ) },
									{ value: "left", label: __( "Left" ) },
									{ value: "right", label: __( "Right" ) },

								] }
							/>
						}
						{ imgPosition != "above" && image &&
							<SelectControl
								label={ __( "Stack on" ) }
								value={ stack }
								options={ [
									{ value: "none", label: __( "None" ) },
									{ value: "tablet", label: __( "Tablet" ) },
									{ value: "mobile", label: __( "Mobile" ) },
								] }
								help={ __( "Note: Choose on what breakpoint the Team will stack." ) }
								onChange={ ( value ) => setAttributes( { stack: value } ) }
							/>
						}
						{ image &&
							<SelectControl
								label={ __( "Image Style" ) }
								value={ imgStyle }
								onChange={ ( value ) => setAttributes( { imgStyle: value } ) }
								options={ [
									{ value: "normal", label: __( "Normal" ) },
									{ value: "circle", label: __( "Circle" ) },
									{ value: "square", label: __( "Square" ) },
								] }
							/>
						}

						{ ( imgPosition && ( imgPosition !== "above" )  ) && image && <SelectControl
							label={ __( "Vertical Alignment" ) }
							value={ imgAlign }
							onChange={ ( value ) => setAttributes( { imgAlign: value } ) }
							options={ [
								{ value: "top", label: __( "Top" ) },
								{ value: "middle", label: __( "Middle" ) },
							] }
						/>
						}
						{ image &&
							<Fragment>
								<SelectControl
									label={ __( "Size" ) }
									options={ imageSizeOptions }
									value={ imgSize }
									onChange={ ( value ) => setAttributes( { imgSize: value } ) }
								/>
								<RangeControl
									label={ __( "Width" ) }
									value={ imgWidth }
									onChange={ ( value ) => setAttributes( { imgWidth: value } ) }
									min={ 0 }
									max={ 500 }
									allowReset
								/>
							</Fragment>
						}
					</PanelBody>
					<PanelBody title={ __( "Social Links" ) }
						initialOpen={ false }>
						<ToggleControl
							label={ __( "Enable Social Links" ) }
							checked={ socialEnable }
							onChange={ ( value ) => setAttributes( { socialEnable: ! socialEnable } ) }
						/>
						{ socialEnable &&
							<Fragment>
								<ToggleControl
									label={ __( "Open Links in New Window" ) }
									checked={ socialTarget }
									onChange={ ( value ) => setAttributes( { socialTarget: ! socialTarget } ) }
								/>
								<PanelBody title={ __( "Twitter" ) } initialOpen={ false }>
									<p className="components-base-control__label">{__( "Icon" )}</p>
									<FontIconPicker
										icons={svg_icons}
										renderFunc={renderSVG}
										theme="default"
										value={twitterIcon}
										onChange={ ( value ) => setAttributes( { twitterIcon: value } ) }
										isMulti={false}
										noSelectedPlaceholder={__( "Select Icon" )}
									/>
									<p className="components-base-control__label">{__( "URL" )}</p>
									<TextControl
										value={ twitterLink }
										onChange={ ( value ) => setAttributes( { twitterLink: value } ) }
										placeholder={__( "Enter Twitter URL" )}
									/>
								</PanelBody>
								<PanelBody title={ __( "Facebook" ) } initialOpen={ false }>
									<p className="components-base-control__label">{__( "Icon" )}</p>
									<FontIconPicker
										icons={svg_icons}
										renderFunc={renderSVG}
										theme="default"
										value={fbIcon}
										onChange={ ( value ) => setAttributes( { fbIcon: value } ) }
										isMulti={false}
										noSelectedPlaceholder={__( "Select Icon" )}
									/>
									<p className="components-base-control__label">{__( "URL" )}</p>
									<TextControl
										value={ fbLink }
										onChange={ ( value ) => setAttributes( { fbLink: value } ) }
										placeholder={__( "Enter Facebook URL" )}
									/>
								</PanelBody>
								<PanelBody title={ __( "LinkedIn" ) } initialOpen={ false }>
									<p className="components-base-control__label">{__( "Icon" )}</p>
									<FontIconPicker
										icons={svg_icons}
										renderFunc={renderSVG}
										noSelectedPlaceholder={__( "Select Icon" )}
										theme="default"
										value={linkedinIcon}
										onChange={ ( value ) => setAttributes( { linkedinIcon: value } ) }
										isMulti={false}
									/>
									<p className="components-base-control__label">{__( "URL" )}</p>
									<TextControl
										value={ linkedinLink }
										onChange={ ( value ) => setAttributes( { linkedinLink: value } ) }
										placeholder={__( "Enter LinkedIn URL" )}
									/>
								</PanelBody>
								<PanelBody title={ __( "Pinterest" ) } initialOpen={ false }>
									<p className="components-base-control__label">{__( "Icon" )}</p>
									<FontIconPicker
										icons={svg_icons}
										renderFunc={renderSVG}
										noSelectedPlaceholder={__( "Select Icon" )}
										theme="default"
										value={pinIcon}
										onChange={ ( value ) => setAttributes( { pinIcon: value } ) }
										isMulti={false}
									/>
									<p className="components-base-control__label">{__( "URL" )}</p>
									<TextControl
										value={ pinLink }
										onChange={ ( value ) => setAttributes( { pinLink: value } ) }
										placeholder={__( "Enter Pinterest URL" )}
									/>
								</PanelBody>
							</Fragment>
						}
					</PanelBody>
					<PanelBody
						title={ __( "Typography" ) }
						initialOpen={ false }>
						<SelectControl
							label={ __( "Title Tag" ) }
							value={ tag }
							onChange={ ( value ) => setAttributes( { tag: value } ) }
							options={ [
								{ value: "h1", label: __( "H1" ) },
								{ value: "h2", label: __( "H2" ) },
								{ value: "h3", label: __( "H3" ) },
								{ value: "h4", label: __( "H4" ) },
								{ value: "h5", label: __( "H5" ) },
								{ value: "h6", label: __( "H6" ) },
							] }
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
												{titleTypesControls}
												<RangeControl
													label={ __( "Title Font Size" ) }
													value={ titleFontSizeMobile }
													onChange={ ( value ) => setAttributes( { titleFontSizeMobile: value } ) }
													min={ 1 }
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
												{titleTypesControls}
												<RangeControl
													label={ __( "Title Font Size" ) }
													value={ titleFontSizeTablet }
													onChange={ ( value ) => setAttributes( { titleFontSizeTablet: value } ) }
													min={ 1 }
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
												{titleTypesControls}
												<RangeControl
													label={ __( "Title Font Size" ) }
													value={ titleFontSize }
													onChange={ ( value ) => setAttributes( { titleFontSize: value } ) }
													min={ 1 }
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
									let tabout

									if ( "mobile" === tab.name ) {
										tabout = (
											<Fragment>
												{prefixTypesControls}
												<RangeControl
													label={ __( "Designation Font Size" ) }
													value={ prefixFontSizeMobile }
													onChange={ ( value ) => setAttributes( { prefixFontSizeMobile: value } ) }
													min={ 1 }
													max={ 100 }
													beforeIcon="editor-textcolor"
													allowReset
													initialPosition={16}
												/>
											</Fragment>
										)
									} else if ( "tablet" === tab.name ) {
										tabout = (
											<Fragment>
												{prefixTypesControls}
												<RangeControl
													label={ __( "Designation Font Size" ) }
													value={ prefixFontSizeTablet }
													onChange={ ( value ) => setAttributes( { prefixFontSizeTablet: value } ) }
													min={ 1 }
													max={ 100 }
													beforeIcon="editor-textcolor"
													allowReset
													initialPosition={16}
												/>
											</Fragment>
										)
									} else {
										tabout = (
											<Fragment>
												{prefixTypesControls}
												<RangeControl
													label={ __( "Designation Font Size" ) }
													value={ prefixFontSize }
													onChange={ ( value ) => setAttributes( { prefixFontSize: value } ) }
													min={ 1 }
													max={ 100 }
													beforeIcon="editor-textcolor"
													allowReset
													initialPosition={16}
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
												{descTypesControls}
												<RangeControl
													label={ __( "Description Font Size" ) }
													value={ descFontSizeMobile }
													onChange={ ( value ) => setAttributes( { descFontSizeMobile: value } ) }
													min={ 1 }
													max={ 100 }
													beforeIcon="editor-textcolor"
													allowReset
													initialPosition={16}
												/>
											</Fragment>
										)
									} else if ( "tablet" === tab.name ) {
										tabout = (
											<Fragment>
												{descTypesControls}
												<RangeControl
													label={ __( "Description Font Size" ) }
													value={ descFontSizeTablet }
													onChange={ ( value ) => setAttributes( { descFontSizeTablet: value } ) }
													min={ 1 }
													max={ 100 }
													beforeIcon="editor-textcolor"
													allowReset
													initialPosition={16}
												/>
											</Fragment>
										)
									} else {
										tabout = (
											<Fragment>
												{descTypesControls}
												<RangeControl
													label={ __( "Description Font Size" ) }
													value={ descFontSize }
													onChange={ ( value ) => setAttributes( { descFontSize: value } ) }
													min={ 1 }
													max={ 100 }
													beforeIcon="editor-textcolor"
													allowReset
													initialPosition={16}
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
												{socialTypesControls}
												<RangeControl
													label={ __( "Social Icon Font Size" ) }
													value={ socialFontSizeMobile }
													onChange={ ( value ) => setAttributes( { socialFontSizeMobile: value } ) }
													min={ 1 }
													max={ 100 }
													beforeIcon="editor-textcolor"
													allowReset
													initialPosition={16}
												/>
											</Fragment>
										)
									} else if ( "tablet" === tab.name ) {
										tabout = (
											<Fragment>
												{socialTypesControls}
												<RangeControl
													label={ __( "Social Icon Font Size" ) }
													value={ socialFontSizeTablet }
													onChange={ ( value ) => setAttributes( { socialFontSizeTablet: value } ) }
													min={ 1 }
													max={ 100 }
													beforeIcon="editor-textcolor"
													allowReset
													initialPosition={16}
												/>
											</Fragment>
										)
									} else {
										tabout = (
											<Fragment>
												{socialTypesControls}
												<RangeControl
													label={ __( "Social Icon Font Size" ) }
													value={ socialFontSize }
													onChange={ ( value ) => setAttributes( { socialFontSize: value } ) }
													min={ 1 }
													max={ 100 }
													beforeIcon="editor-textcolor"
													allowReset
													initialPosition={16}
												/>
											</Fragment>
										)
									}

									return <div>{ tabout }</div>
								}
							}
						</TabPanel>
					</PanelBody>
					<PanelColorSettings
						title={ __( "Color Settings" ) }
						initialOpen={ false }
						colorSettings={ [
							{
								value: titleColor,
								onChange: ( colorValue ) => setAttributes( { titleColor: colorValue } ),
								label: __( "Title Color" ),
							},
							{
								value: prefixColor,
								onChange: ( colorValue ) => setAttributes( { prefixColor: colorValue } ),
								label: __( "Designation Color" ),
							},
							{
								value: descColor,
								onChange: ( colorValue ) => setAttributes( { descColor: colorValue } ),
								label: __( "Description Color" ),
							},
							{
								value: socialColor,
								onChange: ( colorValue ) => setAttributes( { socialColor: colorValue } ),
								label: __( "Social Icon Color" ),
							},
							{
								value: socialHoverColor,
								onChange: ( colorValue ) => setAttributes( { socialHoverColor: colorValue } ),
								label: __( "Social Icon Hover Color" ),
							},
						] }
					>
					</PanelColorSettings>

					<PanelBody
						title={ __( "Spacing" ) }
						initialOpen={ false }>
						<RangeControl
							label={ __( "Title Bottom Spacing" ) }
							value={ titleSpace }
							onChange={ ( value ) => setAttributes( { titleSpace: value } ) }
							min={ 0 }
							max={ 50 }
							allowReset
							initialPosition={0}
						/>
						<RangeControl
							label={ __( "Designation Bottom Spacing" ) }
							value={ prefixSpace }
							onChange={ ( value ) => setAttributes( { prefixSpace: value } ) }
							min={ 0 }
							max={ 50 }
							allowReset
							initialPosition={0}
						/>
						<RangeControl
							label={ __( "Description Bottom Spacing" ) }
							value={ descSpace }
							onChange={ ( value ) => setAttributes( { descSpace: value } ) }
							min={ 0 }
							max={ 50 }
							allowReset
						/>
						<RangeControl
							label={ __( "Inter Social Icon Spacing" ) }
							value={ socialSpace }
							onChange={ ( value ) => setAttributes( { socialSpace: value } ) }
							min={ 0 }
							max={ 50 }
							allowReset
						/>
						{ image &&
							<Fragment>
								<hr className="uagb-editor__separator" />
								<h2>{ __( "Image Margin (px)" ) }</h2>
								{  imgPosition != "above" &&
								<RangeControl
									label={ UAGB_Block_Icons.left_margin }
									className={ "uagb-margin-control" }
									value={ imgLeftMargin }
									onChange={ ( value ) => setAttributes( { imgLeftMargin: value } ) }
									min={ 0 }
									max={ 50 }
									allowReset
								/>
								}
								{  imgPosition != "above" &&
								<RangeControl
									label={ UAGB_Block_Icons.right_margin }
									className={ "uagb-margin-control" }
									value={ imgRightMargin }
									onChange={ ( value ) => setAttributes( { imgRightMargin: value } ) }
									min={ 0 }
									max={ 50 }
									allowReset
								/>
								}
								<RangeControl
									label={ UAGB_Block_Icons.top_margin }
									className={ "uagb-margin-control" }
									value={ imgTopMargin }
									onChange={ ( value ) => setAttributes( { imgTopMargin: value } ) }
									min={ 0 }
									max={ 50 }
									allowReset
								/>
								<RangeControl
									label={ UAGB_Block_Icons.bottom_margin }
									className={ "uagb-margin-control" }
									value={ imgBottomMargin }
									onChange={ ( value ) => setAttributes( { imgBottomMargin: value } ) }
									min={ 0 }
									max={ 50 }
									allowReset
								/>
							</Fragment>
						}
					</PanelBody>
				</InspectorControls>
				<div
					className = { classnames(
						className,
						"uagb-team",
						"uagb-team__outer-wrap",
						`uagb-team__image-position-${imgPosition}`,
						`uagb-team__align-${align}`,
						`uagb-team__stack-${stack}`
					) }
					id={ `uagb-team-${ this.props.clientId }` }>
					<div className = "uagb-team__wrap">

						{ ( imgPosition == "left") && image_html }

						<div className = "uagb-team__content">

							{  imgPosition == "above" && image_html }

							{ title_html }

							{ desc_html }

							{ socialEnable && social_links }

						</div>

						{ ( imgPosition == "right") && image_html }
					</div>
				</div>
			</Fragment>
		)
	}

	componentDidMount() {

		// Assigning block_id in the attribute.
		this.props.setAttributes( { block_id: this.props.clientId } )

		// Pushing Style tag for this block css.
		const $style = document.createElement( "style" )
		$style.setAttribute( "id", "uagb-team-style-" + this.props.clientId )
		document.head.appendChild( $style )
	}
}

export default UAGBTeam
