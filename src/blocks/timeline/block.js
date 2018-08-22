/**
 * BLOCK: Timeline
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
   

    constructor() {
        super( ...arguments );
              
        // Bind so we can use 'this' inside the method.
        this.getOptions = this.getOptions.bind(this);

        // Load posts.
        this.getOptions(); 

        this.state = {
            data : []
        }

        // Load data.
        this.getContent(); 
        //this.state = this.constructor.getInitialState( this.props.attributes.selectedPost );

    }

   /**
    * Loading Content
    */
    getContent() {  
        console.log('getcontent');       
        var item_number = this.props.attributes.timelineItem;
       
        var item =[];
        for (var i = 1; i <= item_number; i++) {
            var time_heading      = 'headingTitle_'+i;
            var time_desc         = 'headingDesc_' +i;
            var title_heading_val = 'Timeline Heading '+i;
            var title_desc_val    = 'This is Timeline description, you can change me anytime click here ';
            var temp = [];
            var p = { time_heading : title_heading_val,time_desc:title_desc_val };
            item.push(p);
        }    
        this.state = {"data": item}
    }  

    /**
    * Loading Posts
    */
    getOptions() {   
        return ( new wp.api.collections.Posts() ).fetch().then( ( posts ) => {
            this.setState({ posts });
        });           
    }    

    render() {
        // Setup the attributes
        const {
            isSelected,
            className,
            setAttributes,
            attributes: { 
                headingTitle1,
                headingDesc1,
                headingAlign,
                headingColor,
                subHeadingColor,
                separatorColor,
                headingTag,
                headFontSize,
                timelineItem,
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
        //console.log(this.state.data);
        //console.log(this.state.posts);
        var tm_content = uagb_get_timeline_content( this.props ,this.state );
        //console.log(this.props.attributes.timelineItem);
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
                    <RangeControl
                        label={ __( 'Timeline Item Number' ) }
                        value={ timelineItem }
                        onChange={ ( value ) => setAttributes( { timelineItem: value } ) }
                        min={ 1 }
                        max={ 200 }
                        beforeIcon="editor-textcolor"
                        allowReset
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

function uagb_get_timeline_content(val, state_data) {
    //..    
    var p_attr = val.attributes;
    var time_content = p_attr.postType;    
    var timeline_item = p_attr.timelineItem;
    var post_data = state_data.posts;
    var data = state_data.data;
    //console.log(post_data);

    if( time_content == 'general'){
         return (<div className={ p_attr.className }>
                 {data.map(post => {
                        return (  <div>
                            <RichText
                                tagName={ p_attr.headingTag }
                                placeholder={ __( 'Write a Heading' ) }
                                value={ post.time_heading }
                                className='uagb-heading-text'
                                //onChange={ ( value ) => val.setAttributes( { headingTitle1: value } ) }
                                style={{ 
                                    textAlign: p_attr.headingAlign,
                                    fontSize: p_attr.headFontSize + 'px',
                                    color: p_attr.headingColor,
                                    marginBottom: p_attr.headSpace + 'px',
                                }}
                            />
                            <RichText
                                tagName="p"
                                placeholder={ __( 'Write a Description' ) }
                                value={ post.time_desc }
                                className='uagb-desc-text'
                                //onChange={ ( value ) => val.setAttributes( { headingDesc1: value } ) }
                                style={{
                                    textAlign: p_attr.headingAlign,
                                    fontSize: p_attr.subHeadFontSize + 'px',
                                    color: p_attr.subHeadingColor,
                                    marginBottom: p_attr.subHeadSpace + 'px',
                                }}
                            />
                            </div>                      
                        );
                    })}
            </div>);         
        }else{  
            //custom query data
            if ( post_data.length === 0 ) {
                return "No posts";
            } 
            return (<ul className="uagb-desc-text">
                    {post_data.map(post => {
                        return (
                            <li>
                                <a href={post.link} style={{ 
                                    textAlign: p_attr.headingAlign,
                                    fontSize: p_attr.headFontSize + 'px',
                                    color: p_attr.headingColor,
                                    marginBottom: p_attr.headSpace + 'px',
                                }} >
                                    {post.title.rendered}
                                </a>
                                <div className="uagb-post-content" dangerouslySetInnerHTML={ { __html: post.excerpt.rendered } } style={{
                                    textAlign: p_attr.headingAlign,
                                    fontSize: p_attr.subHeadFontSize + 'px',
                                    color: p_attr.subHeadingColor,
                                    marginBottom: p_attr.subHeadSpace + 'px',
                                }}>
                                 </div>
                            </li>
                        );
                    })}
                </ul>);       
        }
}

registerBlockType( 'uagb/timeline', {
    title: 'Timeline - UAGB',
    icon: 'megaphone',
    category: 'widgets',
    attributes: {
        content: {
          type: 'array',
          source: 'children',
          selector: 'p',
        },
        title: {
          type: 'string',
          selector: 'h2'
        },
        link: {
          type: 'string',
          selector: 'a'
        },       
        headingTitle1: {
            type: 'string',
            default: 'Timeline heading',
        },
        headingDesc1: {
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
            default: 'h3'
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
        timelineItem:{
            type: 'number',
            default: 5,
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
  
    save: function(props) {
        //console.log( 'Save props' );
        //console.log( props );
        return 'Hello';
    },
} );

