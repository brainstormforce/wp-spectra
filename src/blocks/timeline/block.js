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
		console.log('render');
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
				postType,
				postsToShow,
				displayPostDate,
				postLayout,
				columns,
				align,
				order,
				orderBy
			},
		} = this.props;
		
		var tm_content = uagb_get_timeline_content( this.props );
		console.log(this.props);
		
		return [			
			isSelected && (
				<InspectorControls>
				<PanelBody 
                	title={ __( 'Select Type' ) }
                	initialOpen={ false }
                >
                	<SelectControl
                        label={ __( 'Type' ) }
                        value={ postType }
                        onChange={ ( value ) => setAttributes( { postType: value } ) }
                        options={ [
                            { value: 'general', label: __( 'Custom' ) },
                            { value: 'post', label: __( 'Post Type' ) },                            
                        ] }
                    />
            </PanelBody>
                </InspectorControls> 
            ),
       
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
            <div classnames = "cp-timeline-main">   
            	{tm_content}
			</div>
		];
	}
}

function uagb_get_timeline_content(val) {
		
	//var props = props;
	var p_attr = val.attributes;
	var time_content = p_attr.postType;

	if( time_content == 'general'){
	  return <div className={ p_attr.className }>
	  			<RichText
					tagName={ p_attr.headingTag }
					placeholder={ __( 'Write a Heading' ) }
					value={ p_attr.headingTitle }
					className='uagb-heading-text'
					onChange={ ( value ) => p_attr.setAttributes( { headingTitle: value } ) }
					style={{ 
						textAlign: p_attr.headingAlign,
						fontSize: p_attr.headFontSize + 'px',
						color: p_attr.headingColor,
						marginBottom: p_attr.headSpace + 'px',
					}}
				/>
				<div
					className="uagb-separator-wrap"
					style={{ textAlign: p_attr.headingAlign }}
				>
				<div className="uagb-separator" style={{ borderTopWidth: p_attr.separatorHeight + 'px', width: p_attr.separatorWidth + '%', borderColor: p_attr.separatorColor, marginBottom: p_attr.separatorSpace + 'px', }}></div></div>
	  			<RichText
							tagName="p"
							placeholder={ __( 'Write a Description' ) }
							value={ p_attr.headingDesc }
							className='uagb-desc-text'
							onChange={ ( value ) => p_attr.setAttributes( { headingDesc: value } ) }
							style={{
								textAlign: p_attr.headingAlign,
								fontSize: p_attr.subHeadFontSize + 'px',
								color: p_attr.subHeadingColor,
								marginBottom: p_attr.subHeadSpace + 'px',
							}}
						/>
	  		</div>;
	  	}else{	
	  	  	var t = withAPIData( function() {
	  	  		console.log('pg');
				return {
					posts: '/wp/v2/posts?per_page=5'
				};
			} );	
			console.log(t);
		}
}

registerBlockType( 'uagb/timeline', {
	title: 'Timeline - UAGB',
	icon: 'megaphone',
	category: 'widgets',
	attributes: {
		headingTitle: {
			type: 'string',
			default: 'Timeline heading',

		},
		headingDesc: {
			type: 'string',
			default: 'This is Timeline description, you can change me anytime click here',
		},
		headingAlign: {
			type: 'string',
			default: 'center',
		},
		headingColor: {
            type: 'string',
            default: '#000',
        },
        subHeadingColor: {
            type: 'string',
            default: '#000',
        },
        separatorColor: {
        	type: 'string',
        	default: '#000',
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
		postType: {
			type: 'string',
			default: 'general',
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

	edit: UAGBTimeline,
	function( props ) {

		console.log( 'Edit props' );
		console.log( props );

		const { headingTitle } = props.attributes;

		return (
			<div className={ props.className }>
				<p>Ultimate Addons For Gutenberg!</p>
			</div>
		);
	},

	save: function(props) {
		console.log( 'Save props' );
		console.log( props );
		return 'Hello';
	},
} );

