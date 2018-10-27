// Import block dependencies and components.
import classnames from "classnames"

// Import icon.
import UAGBIcon from "../../../dist/blocks/uagb-controls/UAGBIcon"
import FontIconPicker from "@fonticonpicker/react-fonticonpicker"
import styling from "./styling"

const { __ } = wp.i18n

const {
	AlignmentToolbar,
	BlockControls,
	ColorPalette,
	InspectorControls,
	RichText,
	PanelColorSettings,
	MediaUpload,
	URLInput
} = wp.editor

const {
	PanelBody,
	PanelColor,
	SelectControl,
	RangeControl,
	Button,
	TextControl
} = wp.components

// Extend component
const { Component, Fragment } = wp.element

const set_icons = {}

set_icons.upload = <svg aria-hidden="true" role="img" focusable="false" className ="dashicon dashicons-upload" xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 20 20"><path d="M8 14V8H5l5-6 5 6h-3v6H8zm-2 2v-6H4v8h12.01v-8H14v6H6z"></path></svg>

class UAGBTeam extends Component {

	splitBlock( before, after, ...blocks ) {
		const {
			attributes,
			insertBlocksAfter,
			setAttributes,
			onReplace,
		} = this.props

		if ( after ) {
			// Append "After" content as a new paragraph block to the end of
			// any other blocks being inserted after the current paragraph.
			blocks.push( createBlock( "core/paragraph", { content: after } ) )
		}

		if ( blocks.length && insertBlocksAfter ) {
			insertBlocksAfter( blocks )
		}

		const { content } = attributes
		if ( ! before ) {
			// If before content is omitted, treat as intent to delete block.
			onReplace( [] )
		} else if ( content !== before ) {
			// Only update content if it has in-fact changed. In case that user
			// has created a new paragraph at end of an existing one, the value
			// of before will be strictly equal to the current content.
			setAttributes( { content: before } )
		}
	}

	social_html( icon, link ) {

		return (
			<li className="uagb-team__social-icon"><a href={link} target="_blank" title=""><span className={icon}></span></a></li>
		)
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
			prefixFontSize,
			descFontSize,
			socialFontSize,
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
			socialSpace
		} = attributes

		// Add CSS.
		var element = document.getElementById( "uagb-team-style-" + this.props.clientId )
		if( null != element && "undefined" != typeof element ) {
			element.innerHTML = styling( this.props )
		}

		// Set icon iamge.
		const onSelectImage = ( media ) => {
			if ( ! media || ! media.url ) {
				setAttributes( { image: null } )
				return
			}
			setAttributes( { image: media } )
		}

		let size = ""
		let img_url = ""

		if ( image ) {
			size = image.sizes
			img_url = size[imgSize].url
		}

		//Get image components.
		const team_image = (
			<MediaUpload
				buttonProps={ {
					className: "change-image"
				} }
				onSelect= { onSelectImage }
				type="image"
				value={ image }
				render={ ( { open } ) => (
					<Button onClick={ open }  >
						{ ! image
							? set_icons.upload :
							<div
								className={ classnames(
									"uagb-team__imag-wrap",
									`uagb-team__image-crop-${imgStyle}`,
								) }>
								<img
									className =""
									src = { img_url }
									alt = { image.alt }
								/>
							</div>
						}
					</Button>
				) }
			>
			</MediaUpload>
		)

		// Get description and seperator components.
		const desc_html = (
			<div className = "uagb-team__desc-wrap">
				<RichText
					tagName='p'
					value={ description_text }
					className='uagb-team__desc'
					onChange={ ( value ) => setAttributes( { description_text: value } ) }
					onMerge = { mergeBlocks }
					onSplit = {
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
					{ "" != twitterIcon && this.social_html( twitterIcon, twitterLink ) }
					{ "" != fbIcon && this.social_html( fbIcon, fbLink ) }
					{ "" != linkedinIcon && this.social_html( linkedinIcon, linkedinLink ) }
					{ "" != pinIcon && this.social_html( pinIcon, pinLink ) }
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
					onSplit = {
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
					tagName="span"
					value={ prefix }
					className='uagb-team__prefix'
					onChange={ ( value ) => setAttributes( { prefix: value } ) }
					onMerge = { mergeBlocks }
					onSplit = {
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
						initialOpen={ false }
					>
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

						{ ( imgPosition && ( imgPosition !== "above" )  ) && <SelectControl
							label={ __( "Vertical Alignment" ) }
							value={ imgAlign }
							onChange={ ( value ) => setAttributes( { imgAlign: value } ) }
							options={ [
								{ value: "top", label: __( "Top" ) },
								{ value: "middle", label: __( "Middle" ) },
							] }
						/>
						}
						<SelectControl
							label={ __( "Size" ) }
							options={[
								{ value: "thumbnail", label: __( "Thumbnail" ) },
								{ value: "medium", label: __( "Medium" ) },
								{ value: "full", label: __( "Large" ) }
							] }
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
					</PanelBody>
					<PanelBody
						title={ __( "Typography" ) }
						initialOpen={ false }
					>
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
						<RangeControl
							label={ __( "Title Font Size" ) }
							value={ titleFontSize }
							onChange={ ( value ) => setAttributes( { titleFontSize: value } ) }
							min={ 1 }
							max={ 100 }
							beforeIcon="editor-textcolor"
							allowReset
						/>
						<RangeControl
							label={ __( "Prefix Font Size" ) }
							value={ prefixFontSize }
							onChange={ ( value ) => setAttributes( { prefixFontSize: value } ) }
							min={ 1 }
							max={ 100 }
							beforeIcon="editor-textcolor"
							allowReset
						/>
						<RangeControl
							label={ __( "Description Font Size" ) }
							value={ descFontSize }
							onChange={ ( value ) => setAttributes( { descFontSize: value } ) }
							min={ 1 }
							max={ 100 }
							beforeIcon="editor-textcolor"
							allowReset
						/>
						<RangeControl
							label={ __( "Social Icon Font Size" ) }
							value={ socialFontSize }
							onChange={ ( value ) => setAttributes( { socialFontSize: value } ) }
							min={ 1 }
							max={ 100 }
							beforeIcon="editor-textcolor"
							allowReset
						/>
					</PanelBody>
					<PanelBody title={ __( "Social Links" ) }
						initialOpen={ false }>
						<PanelBody title={ __( "Twitter" ) } initialOpen={ false }>
							<p className="components-base-control__label">{__( "Icon" )}</p>
							<FontIconPicker
								icons={UAGBIcon}
								renderUsing="class"
								theme="default"
								value={twitterIcon}
								onChange={ ( value ) => setAttributes( { twitterIcon: value } ) }
								isMulti={false}
							/>
							<p className="components-base-control__label">{__( "URL" )}</p>
							<TextControl
								value={ twitterLink }
								onChange={ ( value ) => setAttributes( { twitterLink: value } ) }
								placeholder={__( "Enter Twitter URL" )}
							/>
						</PanelBody>
						<PanelBody title={ __( "FaceBook" ) } initialOpen={ false }>
							<p className="components-base-control__label">{__( "Icon" )}</p>
							<FontIconPicker
								icons={UAGBIcon}
								renderUsing="class"
								theme="default"
								value={fbIcon}
								onChange={ ( value ) => setAttributes( { fbIcon: value } ) }
								isMulti={false}
							/>
							<p className="components-base-control__label">{__( "URL" )}</p>
							<TextControl
								value={ fbLink }
								onChange={ ( value ) => setAttributes( { fbLink: value } ) }
								placeholder={__( "Enter FaceBook URL" )}
							/>
						</PanelBody>
						<PanelBody title={ __( "LinkedIn" ) } initialOpen={ false }>
							<p className="components-base-control__label">{__( "Icon" )}</p>
							<FontIconPicker
								icons={UAGBIcon}
								renderUsing="class"
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
								icons={UAGBIcon}
								renderUsing="class"
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
								label: __( "Prefix" ),
							},
							{
								value: descColor,
								onChange: ( colorValue ) => setAttributes( { descColor: colorValue } ),
								label: __( "Description" ),
							},
							{
								value: socialColor,
								onChange: ( colorValue ) => setAttributes( { socialColor: colorValue } ),
								label: __( "Social Icon" ),
							},
							{
								value: socialHoverColor,
								onChange: ( colorValue ) => setAttributes( { socialHoverColor: colorValue } ),
								label: __( "Social Icon Hover" ),
							},
						] }
					>
					</PanelColorSettings>

					<PanelBody
						title={ __( "Spacing" ) }
						initialOpen={ false }
					>
						<RangeControl
							label={ __( "Title Bottom Spacing" ) }
							value={ titleSpace }
							onChange={ ( value ) => setAttributes( { titleSpace: value } ) }
							min={ 0 }
							max={ 50 }
							beforeIcon="editor-textcolor"
							allowReset
						/>
						<RangeControl
							label={ __( "Prefix Bottom Spacing" ) }
							value={ prefixSpace }
							onChange={ ( value ) => setAttributes( { prefixSpace: value } ) }
							min={ 0 }
							max={ 50 }
							allowReset
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
						<PanelBody
							title={ __( "Image Margins" ) }
							initialOpen={ true }
						>
							<RangeControl
								label={ __( "Left Margin" ) }
								value={ imgLeftMargin }
								onChange={ ( value ) => setAttributes( { imgLeftMargin: value } ) }
								min={ 0 }
								max={ 50 }
								beforeIcon="editor-textcolor"
								allowReset
							/>
							<RangeControl
								label={ __( "Right Margin" ) }
								value={ imgRightMargin }
								onChange={ ( value ) => setAttributes( { imgRightMargin: value } ) }
								min={ 0 }
								max={ 50 }
								beforeIcon="editor-textcolor"
								allowReset
							/>
							<RangeControl
								label={ __( "Top Margin" ) }
								value={ imgTopMargin }
								onChange={ ( value ) => setAttributes( { imgTopMargin: value } ) }
								min={ 0 }
								max={ 50 }
								beforeIcon="editor-textcolor"
								allowReset
							/>
							<RangeControl
								label={ __( "Bottom Margin" ) }
								value={ imgBottomMargin }
								onChange={ ( value ) => setAttributes( { imgBottomMargin: value } ) }
								min={ 0 }
								max={ 50 }
								beforeIcon="editor-textcolor"
								allowReset
							/>
						</PanelBody>
					</PanelBody>
				</InspectorControls>
				<div
					className = { classnames(
						className,
						"uagb-team",
						"uagb-team__outer-wrap",
						`uagb-team__image-position-${imgPosition}`,
						`uagb-team__align-${align}`
					) }
					id={ `uagb-team-${ this.props.clientId }` }>
					<div className = "uagb-team__wrap">

						{ ( imgPosition == "left") &&
							team_image
						}

						<div className = "uagb-team__content">

							{  imgPosition == "above" && team_image }

							{ title_html }

							{ desc_html }

							{ social_links }

						</div>

						{ ( imgPosition == "right") &&
							team_image
						}
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
