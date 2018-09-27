/**
 * BLOCK: Section
 */

import classnames from "classnames"

//  Import CSS.
import "./style.scss"
import "./editor.scss"

// Import all of our Background Options requirements.
import BackgroundOptions,
	{
		BackgroundOptionsAttributes,
		BackgroundOptionsClasses,
		BackgroundOptionsInlineStyles,
		BackgroundOptionsVideoOutput
	} from '../../components/background-options';

// Components
const { __ } = wp.i18n

// Register block controls
const { registerBlockType } = wp.blocks

const {
	AlignmentToolbar,
	BlockControls,
	ColorPalette,
	InspectorControls,
	RichText,
	InnerBlocks
} = wp.editor

const {
	PanelBody,
	PanelColor,
	SelectControl,
	RangeControl,
	FormFileUpload
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
		...BackgroundOptionsAttributes
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
			bgColor,
			bgType
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
							value={ bgType }
							onChange={ ( value ) => setAttributes( { bgType: value } ) }
							options={ [
								{ value: "color", label: __( "Color" ) },
								{ value: "image", label: __( "Image" ) },
								{ value: "video", label: __( "Video" ) },
							] }
						/>
						<PanelRow>
							{ imageBackgroundSelect() }
							{ videoBackgroundSelect() }
							{ colorPanelSelect() }
						</PanelRow>
						{ "color" == bgType &&

							<PanelColor
								title={ __( "Background Color" ) }
								colorValue={ bgColor }
								initialOpen={ false }
							>
								<ColorPalette
									value={ bgColor }
									onChange={ ( colorValue ) => setAttributes( { bgColor: colorValue } ) }
									allowReset
								/>
							</PanelColor>
						}
						{ "image" == bgType &&
							<FormFileUpload
								accept="image/*"
								onChange={ () => console.log('new image') }
								>
								{ __( "Upload" ) }
							</FormFileUpload>
						}
					</PanelBody>
				</InspectorControls>
				<CustomTag
					className={ classnames(
						className,
						"uagb-section__wrap"
					) }
					style={{
						paddingTop: topPadding + 'px',
						paddingBottom: bottomPadding + 'px',
						paddingLeft: leftPadding + 'px',
						paddingRight: rightPadding + 'px',
						marginTop: topMargin + 'px',
						marginBottom: bottomMargin + 'px',
						marginLeft: leftMargin + 'px',
						marginRight: rightMargin + 'px',
						background : bgColor,
						width: section_width
					}}>
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
			bgColor,
			bgType
		} = attributes;

		const CustomTag = `${tag}`;

		var section_width = width;

		if ( "boxed" == content_width ) {
			if ( "" != width ) {
				section_width = width;
			}
		} else {
			section_width = "100%";
		}

		console.log(attributes);

		return (
			<CustomTag
				className={ classnames(
					className,
					"uagb-section__wrap"
				) }
				style={{
					paddingTop: topPadding + 'px',
					paddingBottom: bottomPadding + 'px',
					paddingLeft: leftPadding + 'px',
					paddingRight: rightPadding + 'px',
					marginTop: topMargin + 'px',
					marginBottom: bottomMargin + 'px',
					marginLeft: leftMargin + 'px',
					marginRight: rightMargin + 'px',
					background : bgColor,
					width: section_width
				}}>
				<div className="uagb-section__inner-wrap">
					<InnerBlocks.Content />
				</div>
			</CustomTag>
		);
	}
} )
