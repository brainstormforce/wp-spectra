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
   
     // Method for setting the initial state
    static getInitialdataState( content ) {
        //if( content.length == 0 ){
            var data = [];
            var posts = [];
            return {                
                data: data,
                posts: posts       
            };  
       /* }else{
            //console.log(content);
            var data = [];
            var posts = [];
             return {                
                data: data,
                posts: posts       
            };  
        }       */        
    }

    constructor() {
        super( ...arguments );         

        /*this.state = {
            data : [],
            posts : []
        }*/
        console.log(this.props);

        this.state = this.constructor.getInitialdataState(this.props.attributes.content);
        //console.log(this.state);

        // Bind so we can use 'this' inside the method.
        this.getContent = this.getContent.bind(this);
        // Load data.
        this.getContent(); 

        // Bind so we can use 'this' inside the method.
        this.getOptions = this.getOptions.bind(this);
        // Load posts.
        this.getOptions(); 
    }

   /**
    * Loading Content
    */
    getContent() {  
        //console.log('getcontent');  
        if( Object.keys(this.state.data).length == 0 ){

            var item_number = this.props.attributes.timelineItem;
            
            var item =[];
            for (var i = 1; i <= item_number; i++) {
                var title_heading_val = 'Timeline Heading '+i;
                var title_desc_val    = 'This is Timeline description, you can change me anytime click here ';
                var temp = [];
                var p = { 'time_heading' : title_heading_val,'time_desc':title_desc_val };
                item.push(p);            
            }    
            //this.state = {"data": item}
            this.state.data = item;
        }
    }  

    /**
    * Loading Posts
    */
    getOptions() {   
        return ( new wp.api.collections.Posts() ).fetch().then( ( posts ) => {
            this.setState({
                'posts': posts
            });
        });           
    }    

    render() {
        // Setup the attribute
        //console.log('render');
        const {
            isSelected,
            className,
            setAttributes,
            attributes: { 
                content,
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
        
        this.props.setAttributes( {
            content: this.state.data,
        });

        //console.log(this);
        //console.log(this.state.posts);
        var tm_content = uagb_get_timeline_content( this );
        
        //function to change heading state.       

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

// Output render.
function uagb_get_timeline_content(current) {
    //..  this.props ,this.state
   
    var p_attr        = current.props.attributes;
    var time_content  = p_attr.postType;
    var timeline_item = p_attr.timelineItem;
    var post_data     = current.state.posts;
    var data          = current.state.data;
    let data_copy     = [ ...current.state.data ];
    //let posts_copy = [ ...current.state.posts ];

    if( time_content == 'general'){
         return (<div className={ p_attr.className }>
                 {data.map((post,index) => {                    
                        return (  <div>
                            <RichText
                                tagName={ p_attr.headingTag }
                                placeholder={ __( 'Write a Heading' ) }
                                value={ post.time_heading }
                                className='uagb-heading-text'
                                onChange={ ( value ) => { 
                                    data_copy[index] = {...data_copy[index], 'time_heading': value};
                                    current.setState({ data:data_copy }); 
                                    current.props.setAttributes( {
                                        content: data_copy,
                                    });                                    
                                } }
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
                                onChange={ ( value ) => { 
                                    data_copy[index] = { ...data_copy[index], 'time_desc': value};
                                    current.setState({ data:data_copy });
                                    current.props.setAttributes( {
                                            content: data_copy,
                                        });
                                 } }
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
          selector: 'pre',
        },
        title: {
          type: 'string',
          selector: 'h2'
        },
        link: {
          type: 'string',
          selector: 'a'
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
        console.log( 'Save props' );
        console.log(content);
        const {
            content,
            title,
            link,
            headingAlign,
            headingColor,
            subHeadingColor,
            separatorColor,
            headingTag,
            separatorHeight,
            separatorWidth,
            headFontSize,
            timelineItem,
            subHeadFontSize,
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
            orderBy,
        } = props.attributes;
        //console.log( props );
        return 'Hello';
    },
} );

