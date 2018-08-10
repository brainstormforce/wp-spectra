/**
 * BLOCK: advanced-heading
 */


// Extend component
const { Component } = wp.element;

const {
	registerBlockType,
} = wp.blocks;

const { decodeEntities } = wp.htmlEntities;

/*var el = wp.element.createElement,
	registerBlockType = wp.blocks.registerBlockType,
	withAPIData = wp.components.withAPIData;*/

const {
    PanelBody,
    PanelColor,
    SelectControl,
    RangeControl,
    QueryControls,
	Spinner,
	ToggleControl,
	Toolbar,
	withAPIData,
} = wp.components;

const {
	AlignmentToolbar,
	BlockControls,
	ColorPalette,
	InspectorControls,
	RichText,
	BlockAlignmentToolbar,
} = wp.editor;

class UAGBTimeline extends Component {
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
				separatorHeight,
				headSpace,
				separatorSpace,
				subHeadSpace,
				categories,
				postsToShow,
				displayPostDate,
				postLayout,
				columns,
				align,
				order,
				orderBy
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
                        label={ __( 'Separator Height' ) }
                        value={ separatorHeight }
                        onChange={ ( value ) => setAttributes( { separatorHeight: value } ) }
                        min={ 0 }
                        max={ 50 }
                        beforeIcon="editor-textcolor"
                        allowReset
                    />
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
                        min={ 0 }
                        max={ 50 }
                        beforeIcon="editor-textcolor"
                        allowReset
                    />
                    <RangeControl
                        label={ __( 'Separator Spacing' ) }
                        value={ separatorSpace }
                        onChange={ ( value ) => setAttributes( { separatorSpace: value } ) }
                        min={ 0 }
                        max={ 50 }
                        beforeIcon="editor-textcolor"
                        allowReset
                    />
                    <RangeControl
                        label={ __( 'Sub-Heading Spacing' ) }
                        value={ subHeadSpace }
                        onChange={ ( value ) => setAttributes( { subHeadSpace: value } ) }
                        min={ 0 }
                        max={ 50 }
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
				><div className="uagb-separator" style={{ borderTopWidth: separatorHeight + 'px', width: separatorWidth + '%', borderColor: separatorColor, marginBottom: separatorSpace + 'px', }}></div></div>
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

registerBlockType( 'uagb/timeline', {
	title: 'Timeline - UAGB',
	icon: 'megaphone',
	category: 'widgets',
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
        separatorHeight: {
        	type: 'number'
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
		categories: {
			type: 'string',
			default: 5,
		},
		postsToShow: {
			type: 'number',
		},
		displayPostDate: {
			type: 'boolean',
			default: false,
		},
		postLayout: {
            type: 'string',
            default: 'list',
        },
        columns: {
           type: 'number',
		   default: 3,
        },
        align: {
        	type: 'string',
        	default: 'center',
        },
        order: {
        	type: 'string',
        	default: 'desc'
        },
        orderBy: {
        	type: 'string',
        	default: 'desc'
        }, 
	},

	edit: withAPIData( function() {
		return {
			posts: '/wp/v2/posts?per_page=5'
		};
	} )( function( props ) {
		if ( ! props.posts.data ) {
			return "loading !";
		}
		if ( props.posts.data.length === 0 ) {
			return "No posts";
		}
		//console.log("praju");
		//console.log(props.posts);
		var className = props.className;
		var post = props.posts.data[ 0 ];		

		return (<ul>
                    {props.posts.data.map(post => {
                        return (
                            <li>
                                <a href={post.link}>
                                    {post.title.rendered}
                                </a>
                            </li>
                        );
                    })}
                </ul>);
	} ),

	save: function(props) {
		console.log( 'Save props' );
		console.log( props );
		return 'Hello';
	},
} );