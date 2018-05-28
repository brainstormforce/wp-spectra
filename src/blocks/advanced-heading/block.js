/**
 * BLOCK: advanced-heading
 */

// Import block dependencies and components.
import classnames from 'classnames';

//  Import CSS.
import './style.scss'
import './editor.scss';

// Import __() from wp.i18n
const { __ } = wp.i18n;

// Import registerBlockType() from wp.blocks
const {
	registerBlockType,
} = wp.blocks;

const {
	AlignmentToolbar,
	BlockControls,
	ColorPalette,
	InspectorControls,
	RichText,
} = wp.editor

const {
    PanelBody,
    PanelColor,
    SelectControl,
    RangeControl,
} = wp.components;

// Extend component
const { Component } = wp.element;

class UAGBAdvancedHeading extends Component {
	render() {

		// Setup the attributes
		const {
			isSelected,
			className,
			setAttributes,
			attributes: { 
				headingTitle,
				headingDesc,
				headingAlign,
				headingColor,
				subHeadingColor,
				separatorColor,
				headingTag,
				headFontSize,
				subHeadFontSize,
				separatorWidth,
				headSpace,
				separatorSpace,
				subHeadSpace,
			},
		} = this.props;

		return [

			isSelected && (
				<BlockControls key='controls'>
					<AlignmentToolbar
						value={ headingAlign }
						onChange={ ( value ) => setAttributes( { headingAlign: value } ) }
					/>
				</BlockControls>
			),

			isSelected && (
				<InspectorControls>
				<PanelBody 
                	title={ __( 'Typography' ) }
                	initialOpen={ false }
                >
                	<SelectControl
                        label={ __( 'Tag' ) }
                        value={ headingTag }
                        onChange={ ( value ) => setAttributes( { headingTag: value } ) }
                        options={ [
                            { value: 'h1', label: __( 'H1' ) },
                            { value: 'h2', label: __( 'H2' ) },
                            { value: 'h3', label: __( 'H3' ) },
                            { value: 'h4', label: __( 'H4' ) },
                            { value: 'h5', label: __( 'H5' ) },
                            { value: 'h6', label: __( 'H6' ) },
                        ] }
                    />
					<RangeControl
                        label={ __( 'Heading Font Size' ) }
                        value={ headFontSize }
                        onChange={ ( value ) => setAttributes( { headFontSize: value } ) }
                        min={ 10 }
                        max={ 200 }
                        beforeIcon="editor-textcolor"
                        allowReset
                    />
                    <RangeControl
                        label={ __( 'Sub-Heading Font Size' ) }
                        value={ subHeadFontSize }
                        onChange={ ( value ) => setAttributes( { subHeadFontSize: value } ) }
                        min={ 10 }
                        max={ 200 }
                        beforeIcon="editor-textcolor"
                        allowReset
                    />
				</PanelBody>
                <PanelBody 
                	title={ __( 'Colors' ) }
                	initialOpen={ false }
                >
                    <PanelColor
                        title={ __( 'Heading Color' ) }
                        colorValue={ headingColor }
                        initialOpen={ false }
                    >
                        <ColorPalette
                            value={ headingColor }
                            onChange={ ( colorValue ) => setAttributes( { headingColor: colorValue } ) }
                            allowReset
                        />
                    </PanelColor>
                    <PanelColor
                        title={ __( 'Sub-Heading Color' ) }
                        colorValue={ subHeadingColor }
                        initialOpen={ false }
                    >
                        <ColorPalette
                            value={ subHeadingColor }
                            onChange={ ( colorValue ) => setAttributes( { subHeadingColor: colorValue } ) }
                            allowReset
                        />
                    </PanelColor>
                    <PanelColor
                        title={ __( 'Separator Color' ) }
                        colorValue={ separatorColor }
                        initialOpen={ false }
                    >
                        <ColorPalette
                            value={ separatorColor }
                            onChange={ ( colorValue ) => setAttributes( { separatorColor: colorValue } ) }
                            allowReset
                        />
                    </PanelColor>
				</PanelBody>
				<PanelBody 
                	title={ __( 'Additional Options' ) }
                	initialOpen={ false }
                >
                	<RangeControl
                        label={ __( 'Separator Width' ) }
                        value={ separatorWidth }
                        onChange={ ( value ) => setAttributes( { separatorWidth: value } ) }
                        min={ 0 }
                        max={ 100 }
                        beforeIcon="editor-textcolor"
                        allowReset
                    />
					<RangeControl
                        label={ __( 'Heading Spacing' ) }
                        value={ headSpace }
                        onChange={ ( value ) => setAttributes( { headSpace: value } ) }
                        min={ 10 }
                        max={ 200 }
                        beforeIcon="editor-textcolor"
                        allowReset
                    />
                    <RangeControl
                        label={ __( 'Separator Spacing' ) }
                        value={ separatorSpace }
                        onChange={ ( value ) => setAttributes( { separatorSpace: value } ) }
                        min={ 10 }
                        max={ 200 }
                        beforeIcon="editor-textcolor"
                        allowReset
                    />
                    <RangeControl
                        label={ __( 'Sub-Heading Spacing' ) }
                        value={ subHeadSpace }
                        onChange={ ( value ) => setAttributes( { subHeadSpace: value } ) }
                        min={ 10 }
                        max={ 200 }
                        beforeIcon="editor-textcolor"
                        allowReset
                    />
				</PanelBody>
                </InspectorControls>
            ),

			<div className={ className }>
				<RichText
					tagName={ headingTag }
					placeholder={ __( 'Write a Heading' ) }
					value={ headingTitle }
					className='uagb-heading-text'
					onChange={ ( value ) => setAttributes( { headingTitle: value } ) }
					style={{ 
						textAlign: headingAlign,
						fontSize: headFontSize + 'px',
						color: headingColor,
						marginBottom: headSpace + 'px',
					}}
				/>
				<div
					className="uagb-separator-wrap"
					style={{ textAlign: headingAlign }}
				><div className="uagb-separator" style={{ width: separatorWidth + '%', borderColor: separatorColor, marginBottom: separatorSpace + 'px', }}></div></div>
				<RichText
					tagName="p"
					placeholder={ __( 'Write a Description' ) }
					value={ headingDesc }
					className='uagb-desc-text'
					onChange={ ( value ) => setAttributes( { headingDesc: value } ) }
					style={{
						textAlign: headingAlign,
						fontSize: subHeadFontSize + 'px',
						color: subHeadingColor,
						marginBottom: subHeadSpace + 'px',
					}}
				/>
			</div>
		];
	}
}

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
registerBlockType( 'uagb/advanced-heading', {

	// Block name. Block names must be string that contains a namespace prefix. Example: my-plugin/my-custom-block.
	title: __( 'Advanced Heading - UAGB' ), // Block title.
	description: __( 'Add Advanced Heading block.' ), // Block description.
	icon: 'editor-textcolor', // Block icon from Dashicons → https://developer.wordpress.org/resource/dashicons/.
	category: 'common', // Block category — Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.
	keywords: [
		__( 'advanced heading' ),
		__( 'uagb' ),
	],
	category: 'formatting',

	attributes: {
		headingTitle: {
			type: 'string',
		},
		headingDesc: {
			type: 'string',
		},
		headingAlign: {
			type: 'string',
			default: 'center',
		},
		headingColor: {
            type: 'string',
        },
        subHeadingColor: {
            type: 'string',
        },
        separatorColor: {
        	type: 'string',
        },
        headingTag: {
        	type: 'string',
        	default: 'h1'
        },
        separatorWidth: {
        	type: 'number'
        },
        headFontSize: {
            type: 'number',
        },
        subHeadFontSize: {
            type: 'number',
        },
        headSpace: {
            type: 'number',
        },
		separatorSpace: {
            type: 'number',
        },
		subHeadSpace: {
            type: 'number',
        },
	},
	/**
	 * The edit function describes the structure of your block in the context of the editor.
	 * This represents what the editor will render when the block is used.
	 *
	 * The "edit" property must be a valid function.
	 *
	 * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/
	 */
	edit: UAGBAdvancedHeading,

	/*function( props ) {

		console.log( 'Edit props' );
		console.log( props );

		const { headingTitle } = props.attributes;

		return (
			<div className={ props.className }>
				<p>Ultimate Addons For Gutenberg!</p>
			</div>
		);
	},*/

	/**
	 * The save function defines the way in which the different attributes should be combined
	 * into the final markup, which is then serialized by Gutenberg into post_content.
	 *
	 * The "save" property must be specified and must be a valid function.
	 *
	 * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/
	 */
	save: function( props ) {
		
		console.log( 'Save props' );
		console.log( props );

		const {
			headingTitle,
			headingDesc,
			headingAlign,
			headingColor,
			subHeadingColor,
			separatorColor,
			headingTag,
			separatorWidth,
			headFontSize,
			subHeadFontSize,
			headSpace,
			separatorSpace,
			subHeadSpace,
		} = props.attributes;

		return (
			<div className={ props.className }>
				<RichText.Content
					tagName={ headingTag }
					value={ headingTitle }
					className='uagb-heading-text'
					style={{ 
						textAlign: headingAlign,
						fontSize: headFontSize + 'px',
						color: headingColor,
						marginBottom: headSpace + 'px',
					}}
				/>
				<div className="uagb-separator-wrap" style={{ textAlign: headingAlign }}><div className="uagb-separator" style={{ width: separatorWidth + '%', borderColor: separatorColor, marginBottom: separatorSpace + 'px', }}></div></div>
				<p className="uagb-desc-text" style={{ textAlign: headingAlign, fontSize: subHeadFontSize + 'px', color: subHeadingColor, marginBottom: subHeadSpace + 'px', }}>{ headingDesc }</p>
			</div>
		);
	}
} );
