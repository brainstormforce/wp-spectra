/**
 * BLOCK: Section
 */

import classnames from "classnames"

//  Import CSS.
import "./style.scss"
import "./editor.scss"
import backgroundOptionsClasses from './classes'
import BackgroundOptionsVideoOutput from './video'
import inlineStyles from './inline-styles'


// Components
const { __ } = wp.i18n

// Register block controls
const {
	registerBlockType
} = wp.blocks

const {
	AlignmentToolbar,
	BlockControls,
	ColorPalette,
	InspectorControls,
	InnerBlocks,
	MediaUpload
} = wp.editor

const {
	PanelBody,
	PanelColor,
	PanelRow,
	SelectControl,
	RangeControl,
	Button,
	Dashicon,
	IconButton,
	BaseControl
} = wp.components



console.log(wp.components);

// Extend component
const { Component, Fragment } = wp.element

const templateLock = false

/**
 * Register: as Gutenberg Block.
 *
 * Registers a new block provided a unique name and an object defining its
 * behavior.
 *
 * @link https://wordpress.org/gutenberg/handbook/block-api/
 * @param  {string}   name     Block name.
 * @param  {Object}   settings Block settings.
 * @return {?WPBlock}          The block, if it has been successfully
 *                             registered; otherwise `undefined`.
 */
registerBlockType( "uagb/section", {
	title: __( "UAGB - Section" ),
	description: __( "Add a outer wrap section" ),
	icon: "screenoptions",
	category: "formatting",
	keywords: [
		__( "section" ),
		__( "uagb" ),
	],
	attributes: {
		topPadding: {
			type: "string",
			default: "20"
		},
		bottomPadding: {
			type: "string",
			default: "20"
		},
		leftPadding: {
			type: "string",
			default: "20"
		},
		rightPadding: {
			type: "string",
			default: "20"
		},
		topMargin: {
			type: "string",
		},
		bottomMargin: {
			type: "string",
		},
		leftMargin: {
			type: "string",
		},
		rightMargin: {
			type: "string",
		},
		content_width: {
			type: "string",
			default: "boxed"
		},
		width: {
			type: "number"
		},
		tag: {
			type: "string",
			default: "section"
		},
		backgroundType: {
			type: 'string',
		},
		backgroundImage: {
			type: 'object',
		},
		backgroundPosition: {
			type: 'string',
			default: 'center-center'
		},
		backgroundSize: {
			type: 'string',
			default: 'cover'
		},
		backgroundRepeat: {
			type: 'string',
			default: 'no-repeat'
		},
		backgroundAttachment: {
			type: 'string',
			default: 'scroll'
		},
		backgroundVideo: {
			type: 'object',
		},
		backgroundColor: {
			type: 'string',
		},
		gradientColor1: {
			type: 'string',
		},
		gradientColor2: {
			type: 'string',
		},
		gradientType: {
			type: 'string',
			default: 'linear'
		},
		gradientLocation1: {
			type: 'number',
			default: '0'
		},
		gradientLocation2: {
			type: 'number',
			default: '100'
		},
		gradientAngle: {
			type: 'number',
			default: '0'
		},
		backgroundOpacity: {
			type: 'number',
			default: '100'
		}
	},
	edit: function( props ) {

		const { attributes, setAttributes } = props;
		const {
			className,
			padding,
			content_width,
			width,
			tag,
			leftPadding,
			rightPadding,
			topPadding,
			bottomPadding,
			leftMargin,
			rightMargin,
			topMargin,
			bottomMargin,
			backgroundType,
			backgroundImage,
			backgroundVideo,
			backgroundColor,
			backgroundPosition,
			backgroundAttachment,
			backgroundRepeat,
			backgroundSize,
			gradientColor1,
			gradientColor2,
			gradientLocation1,
			gradientLocation2,
			gradientType,
			gradientAngle,
			backgroundOpacity
		} = attributes;

		var section_width = width;

		if ( "boxed" == content_width ) {
			if ( "" != width ) {
				section_width = width;
			}
		} else {
			section_width = "100%";
		}

		const CustomTag = `${tag}`;

		const onSelectImage = ( media ) => {
			if ( ! media || ! media.url ) {
				setAttributes( { backgroundImage: null } );
				return;
			}
			setAttributes( { backgroundImage: media } );
		};

		const onRemoveImage = ( media ) => {
			setAttributes( { backgroundImage: null } );
		};

		return (
			<Fragment>
				<InspectorControls>
					<PanelBody title={ __( 'Layout' ) }>
						<SelectControl
							label={ __( "Content Width" ) }
							value={ content_width }
							onChange={ ( value ) => setAttributes( { content_width: value } ) }
							options={ [
								{ value: "boxed", label: __( "Boxed" ) },
								{ value: "full_width", label: __( "Full Width" ) },
							] }
						/>
						{
							content_width == 'boxed' &&
							<RangeControl
								label={ __( "Width" ) }
								value={ width }
								onChange={ ( value ) => setAttributes( { width: value } ) }
							/>
						}
						<SelectControl
							label={ __( "HTML Tag" ) }
							value={ tag }
							onChange={ ( value ) => setAttributes( { tag: value } ) }
							options={ [
								{ value: "div", label: __( "div" ) },
								{ value: "header", label: __( "header" ) },
								{ value: "footer", label: __( "footer" ) },
								{ value: "main", label: __( "main" ) },
								{ value: "article", label: __( "article" ) },
								{ value: "section", label: __( "section" ) },
								{ value: "aside", label: __( "aside" ) },
								{ value: "nav", label: __( "nav" ) },
							] }
						/>
					</PanelBody>
					<PanelBody title={ __( 'Spacing' ) }>
						<RangeControl
							label={ __( "Left Padding" ) }
							value={ leftPadding }
							onChange={ ( value ) => setAttributes( { leftPadding: value } ) }
							min={ 10 }
							max={ 200 }
							allowReset
						/>
						<RangeControl
							label={ __( "Right Padding" ) }
							value={ rightPadding }
							onChange={ ( value ) => setAttributes( { rightPadding: value } ) }
							min={ 10 }
							max={ 200 }
							allowReset
						/>
						<RangeControl
							label={ __( "Top Padding" ) }
							value={ topPadding }
							onChange={ ( value ) => setAttributes( { topPadding: value } ) }
							min={ 10 }
							max={ 200 }
							allowReset
						/>
						<RangeControl
							label={ __( "Bottom Padding" ) }
							value={ bottomPadding }
							onChange={ ( value ) => setAttributes( { bottomPadding: value } ) }
							min={ 10 }
							max={ 200 }
							allowReset
						/>
						<RangeControl
							label={ __( "Left Margin" ) }
							value={ leftMargin }
							onChange={ ( value ) => setAttributes( { leftMargin: value } ) }
							min={ 10 }
							max={ 200 }
							allowReset
						/>
						<RangeControl
							label={ __( "Right Margin" ) }
							value={ rightMargin }
							onChange={ ( value ) => setAttributes( { rightMargin: value } ) }
							min={ 10 }
							max={ 200 }
							allowReset
						/>
						<RangeControl
							label={ __( "Top Margin" ) }
							value={ topMargin }
							onChange={ ( value ) => setAttributes( { topMargin: value } ) }
							min={ 10 }
							max={ 200 }
							allowReset
						/>
						<RangeControl
							label={ __( "Bottom Margin" ) }
							value={ bottomMargin }
							onChange={ ( value ) => setAttributes( { bottomMargin: value } ) }
							min={ 10 }
							max={ 200 }
							allowReset
						/>
					</PanelBody>
					<PanelBody title={ __( 'Background' ) }>
						<SelectControl
							label={ __( "Background Type" ) }
							value={ backgroundType }
							onChange={ ( value ) => setAttributes( { backgroundType: value } ) }
							options={ [
								{ value: "", label: __( "None" ) },
								{ value: "image", label: __( "Image" ) },
								{ value: "gradient", label: __( "Gradient" ) },
								{ value: "color", label: __( "Color" ) },
							] }
						/>
						{ "color" == backgroundType &&
							<PanelColor
									title={ __( "Background Color" ) }
									colorValue={ backgroundColor }
									initialOpen={ false }
								>
									<ColorPalette
										value={ backgroundColor }
										onChange={ ( colorValue ) => setAttributes( { backgroundColor: colorValue } ) }
										allowReset
									/>
							</PanelColor>
						}
						{ "image" == backgroundType &&
							<BaseControl
								className="editor-video-poster-control"
								label={ __( 'Background Image' ) }
							>
								<MediaUpload
									title={ __( 'Select Background Image' ) }
									onSelect={ onSelectImage }
									type="image"
									value={ backgroundImage }
									render={ ( { open } ) => (
										<Button isDefault onClick={ open }>
											{ ! backgroundImage ? __( 'Select Background Image' ) : __( 'Replace image' ) }
										</Button>
									) }
								/>
								{ !! backgroundImage &&
									<Button onClick={ onRemoveImage } isLink isDestructive>
										{ __( 'Remove Poster Image' ) }
									</Button>
								}
							</BaseControl>
						}
						{ "image" == backgroundType &&
							<SelectControl
								label={ __( "Image Position" ) }
								value={ backgroundPosition }
								onChange={ ( value ) => setAttributes( { backgroundPosition: value } ) }
								options={ [
									{ value: "top-left", label: __( "Top Left" ) },
									{ value: "top-center", label: __( "Top Center" ) },
									{ value: "top-right", label: __( "Top Right" ) },
									{ value: "center-left", label: __( "Center Left" ) },
									{ value: "center-center", label: __( "Center Center" ) },
									{ value: "center-right", label: __( "Center Right" ) },
									{ value: "bottom-left", label: __( "Bottom Left" ) },
									{ value: "bottom-center", label: __( "Bottom Center" ) },
									{ value: "bottom-right", label: __( "Bottom Right" ) },
								] }
							/>
						}
						{ "image" == backgroundType &&
							<SelectControl
								label={ __( "Attachment" ) }
								value={ backgroundAttachment }
								onChange={ ( value ) => setAttributes( { backgroundAttachment: value } ) }
								options={ [
									{ value: "fixed", label: __( "Fixed" ) },
									{ value: "scroll", label: __( "Scroll" ) }
								] }
							/>
						}
						{ "image" == backgroundType &&
							<SelectControl
								label={ __( "Repeat" ) }
								value={ backgroundRepeat }
								onChange={ ( value ) => setAttributes( { backgroundRepeat: value } ) }
								options={ [
									{ value: "no-repeat", label: __( "No Repeat" ) },
									{ value: "repeat", label: __( "Repeat" ) },
									{ value: "repeat-x", label: __( "Repeat-x" ) },
									{ value: "repeat-y", label: __( "Repeat-y" ) }
								] }
							/>
						}
						{ "image" == backgroundType &&
							<SelectControl
								label={ __( "Size" ) }
								value={ backgroundSize }
								onChange={ ( value ) => setAttributes( { backgroundSize: value } ) }
								options={ [
									{ value: "auto", label: __( "Auto" ) },
									{ value: "cover", label: __( "Cover" ) },
									{ value: "contain", label: __( "Contain" ) }
								] }
							/>
						}
						{ "gradient" == backgroundType &&
							<PanelColor
									title={ __( "Color 1" ) }
									colorValue={ gradientColor1 }
									initialOpen={ false }
								>
									<ColorPalette
										value={ gradientColor1 }
										onChange={ ( colorValue ) => setAttributes( { gradientColor1: colorValue } ) }
										allowReset
									/>
							</PanelColor>
						}
						{ "gradient" == backgroundType &&
							<PanelColor
									title={ __( "Color 2" ) }
									colorValue={ gradientColor2 }
									initialOpen={ false }
								>
									<ColorPalette
										value={ gradientColor2 }
										onChange={ ( colorValue ) => setAttributes( { gradientColor2: colorValue } ) }
										allowReset
									/>
							</PanelColor>
						}
						{ "gradient" == backgroundType &&
							<SelectControl
								label={ __( "Type" ) }
								value={ gradientType }
								onChange={ ( value ) => setAttributes( { gradientType: value } ) }
								options={ [
									{ value: "linear", label: __( "Linear" ) },
									{ value: "radial", label: __( "Radial" ) },
								] }
							/>
						}
						{ "gradient" == backgroundType &&
							<RangeControl
								label={ __( "Location 1" ) }
								value={ gradientLocation1 }
								onChange={ ( value ) => setAttributes( { gradientLocation1: value } ) }
								min={ 0 }
								max={ 100 }
								allowReset
							/>
						}
						{ "gradient" == backgroundType &&
							<RangeControl
								label={ __( "Location 2" ) }
								value={ gradientLocation2 }
								onChange={ ( value ) => setAttributes( { gradientLocation2: value } ) }
								min={ 0 }
								max={ 100 }
								allowReset
							/>
						}
						{ "gradient" == backgroundType &&
							<RangeControl
								label={ __( "Angle" ) }
								value={ gradientAngle }
								onChange={ ( value ) => setAttributes( { gradientAngle: value } ) }
								min={ 0 }
								max={ 360 }
								allowReset
							/>
						}
						<RangeControl
							label={ __( "Opacity" ) }
							value={ backgroundOpacity }
							onChange={ ( value ) => setAttributes( { backgroundOpacity: value } ) }
							min={ 0 }
							max={ 100 }
							allowReset
						/>
					</PanelBody>
				</InspectorControls>
				<CustomTag
					className={ classnames(
						className,
						"uagb-section__wrap",
						...backgroundOptionsClasses( props ),
					) }
					style={{ ...inlineStyles( props ) }}>
					<div className="uagb-section__inner-wrap">
						<InnerBlocks />
					</div>

				</CustomTag>
			</Fragment>
		);
	},
	/**
	* The save function defines the way in which the different attributes should be combined
	* into the final markup, which is then serialized by Gutenberg into post_content.
	*
	* The "save" property must be specified and must be a valid function.
	*
	* @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/
	*/
	save: function( props ) {

		const { attributes } = props;

		const CustomTag = `${attributes.tag}`;

		return (
			<CustomTag
				className={ classnames(
					attributes.className,
					"uagb-section__wrap",
					...backgroundOptionsClasses( props ),
				) }
				style={{ ...inlineStyles( props ) }}>
				{ BackgroundOptionsVideoOutput( props ) }
				<div className="uagb-section__inner-wrap">
					<InnerBlocks.Content />
				</div>
			</CustomTag>
		);
	}
} )
