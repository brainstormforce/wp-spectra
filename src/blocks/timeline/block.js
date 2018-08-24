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
    }   

    /**
    * Loading Posts
    */
    getOptions() {   
        //console.log('getoption');
        if( (this.props.attributes.post_content).length == '0' ){
            return ( new wp.api.collections.Posts() ).fetch().then( ( posts ) => {           
                this.props.attributes.post_content = posts;
            });    
        }       
    }   


    render() {
        //console.log(this);
        // Get Initial Timeline content
        var item_number = this.props.attributes.timelineItem;
            
        var item =[];
        for (var i = 1; i <= item_number; i++) {
            var title_heading_val = 'Timeline Heading '+i;
            var title_desc_val    = 'This is Timeline description, you can change me anytime click here ';
            var temp = [];
            var p = { 'time_heading' : title_heading_val,'time_desc':title_desc_val };
            item.push(p);            
        }
        // Setup the attribute
        if( (this.props.attributes.tm_content).length == '0' ){
           this.props.attributes.tm_content = item;
        }
        let data_copy     = [ ...this.props.attributes.tm_content ];
        
        // Get inital post content.
        this.getOptions();

        //console.log(this);

        const {
            isSelected,
            className,
            setAttributes,
            attributes: { 
                tm_content,
                post_content,
                headingAlign,
                headingColor,
                subHeadingColor,
                backgroundColor,
                separatorColor,
                separatorBg,
                separatorBorder,
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

        //function to change heading state. 
        return [            
            isSelected && (
                <InspectorControls>
                <PanelBody 
                    title={ __( 'General' ) }
                    initialOpen={ false }
                >
                    <SelectControl
                        label={ __( 'Select Source' ) }
                        value={ postType }
                        onChange={ ( value ) => setAttributes( { postType: value } ) }
                        options={ [
                            { value: 'general', label: __( 'Custom' ) },
                            { value: 'post', label: __( 'Post Type' ) },                            
                        ] }
                    />
                    <RangeControl
                        label={ __( 'Timeline Item' ) }
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
                    title={ __( 'Timeline Items' ) }
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
                        title={ __( 'Description Color' ) }
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
                        title={ __( 'Background Color' ) }
                        colorValue={ backgroundColor }
                        initialOpen={ false }
                    >
                        <ColorPalette
                            value={ subHeadingColor }
                            onChange={ ( colorValue ) => setAttributes( { backgroundColor: colorValue } ) }
                            allowReset
                        />
                    </PanelColor>
                </PanelBody>
                <PanelBody 
                    title={ __( 'Connector' ) }
                    initialOpen={ false }
                >
                    <PanelColor
                        title={ __( 'Line Color' ) }
                        colorValue={ separatorColor }
                        initialOpen={ false }
                    >
                        <ColorPalette
                            value={ separatorColor }
                            onChange={ ( colorValue ) => setAttributes( { separatorColor: colorValue } ) }
                            allowReset
                        />
                    </PanelColor>
                    <PanelColor
                        title={ __( 'Background Color' ) }
                        colorValue={ separatorBg }
                        initialOpen={ false }
                    >
                        <ColorPalette
                            value={ separatorBg }
                            onChange={ ( colorValue ) => setAttributes( { separatorBg: colorValue } ) }
                            allowReset
                        />
                    </PanelColor>
                    <PanelColor
                        title={ __( 'Border Color' ) }
                        colorValue={ separatorBorder }
                        initialOpen={ false }
                    >
                        <ColorPalette
                            value={ separatorBorder }
                            onChange={ ( colorValue ) => setAttributes( { separatorBorder: colorValue } ) }
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
            <div className={ className } > 
                <div className = "uagb-timeline-main">
                    { this.uagb_get_timeline_content() }
                </div>
            </div>
        ];
    }  

    //Render output here.
    uagb_get_timeline_content(){

        var attr            = this.props.attributes;
        var content         = attr.tm_content;
        var post_content    = attr.post_content;
        var headingTag      = attr.headingTag;
        var headingAlign    = attr.headingAlign;
        var headFontSize    = attr.headFontSize;
        var headingColor    = attr.headingColor;
        var headSpace       = attr.headSpace;
        var time_type       = attr.postType;
        var subHeadFontSize = attr.subHeadFontSize;
        var subHeadingColor = attr.subHeadingColor;
        var subHeadSpace    = attr.subHeadSpace;
        var backgroundColor = attr.backgroundColor;
        var separatorColor  = attr.separatorColor;
        var separatorBg     = attr.separatorBg;
        var separatorBorder = attr.separatorBorder;

        let data_copy     = [ ...this.props.attributes.tm_content ];
        if( time_type == 'general'){
            return ( <div className='uagb-timeline'>
                    <style dangerouslySetInnerHTML={{
                                  __html: [
                                    '.uagb-timeline-container.uagb-tl-item-left::before {',
                                    '  border-color: transparent transparent transparent ',backgroundColor,
                                    '}',
                                    '.uagb-timeline::after{',
                                        'background-color:',separatorColor,
                                    '}',
                                    '.uagb-timeline-container::after{',
                                      'background-color:',separatorBg,';',
                                      'border-color:',separatorBorder,
                                    '}',                                   
                                    ].join('\n')
                                  }}>
                                </style>
                 {content.map((post,index) => {                    
                    return (<div class='uagb-timeline-container uagb-tl-item-left' >                                
                                <div class="uagb-timeline-content"  style={{ backgroundColor: backgroundColor }}>
                                    <RichText
                                        tagName={ headingTag }
                                        placeholder={ __( 'Write a Heading' ) }
                                        value={ post.time_heading }
                                        className='uagb-heading-text'
                                        onChange={ ( value ) => { 
                                            var p = { 'time_heading' : value,'time_desc':data_copy[index]['time_desc'] };
                                            data_copy[index] = p;                                       
                                            this.props.setAttributes( { 'tm_content': data_copy } );                                       
                                        } }
                                        style={{ 
                                            textAlign: headingAlign,
                                            fontSize: headFontSize + 'px',
                                            color: headingColor,
                                            marginBottom: headSpace + 'px',
                                        }}
                                    />
                                    <RichText
                                        tagName="p"
                                        placeholder={ __( 'Write a Description' ) }
                                        value={ post.time_desc }
                                        className='uagb-desc-text'
                                        onChange={ ( value ) => { 
                                            var p = { 'time_heading' : data_copy[index]['time_heading'],'time_desc':value };
                                            data_copy[index] = p;                                       
                                            this.props.setAttributes( { 'tm_content': data_copy } );                                       
                                         } }
                                        style={{
                                            textAlign: headingAlign,
                                            fontSize: subHeadFontSize + 'px',
                                            color: subHeadingColor,
                                            marginBottom: subHeadSpace + 'px',
                                        }}
                                    />
                                </div> 
                            </div>                      
                        );
                    })}
                </div>
            );
        }else{
            if ( post_content.length === 0 ) {
                return "No posts";
            } 
            return (<div className='uagb-timeline'>                    
                        {post_content.map(post => {
                            return (
                                <div class='uagb-timeline-container uagb-tl-item-left'>
                                    <div class="uagb-timeline-content">
                                        <a href={post.link} style={{ 
                                            textAlign: headingAlign,
                                            fontSize: headFontSize + 'px',
                                            color: headingColor,
                                            marginBottom: headSpace + 'px',
                                        }} >
                                            {post.title.rendered}
                                        </a>
                                        <div className="uagb-post-content" dangerouslySetInnerHTML={ { __html: post.excerpt.rendered } } style={{
                                            textAlign: headingAlign,
                                            fontSize: subHeadFontSize + 'px',
                                            color: subHeadingColor,
                                            marginBottom: subHeadSpace + 'px',
                                        }}>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}                    
                </div>);   
        }
        //console.log(attr.tm_content);
        
    } 
}


registerBlockType( 'uagb/timeline', {
    title: 'Timeline - UAGB',
    icon: 'megaphone',
    category: 'widgets',
    attributes: {
        tm_content: {
          type: 'array',
          default: [],
        },
        post_content: {
          type: 'array',
          default: [],
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
        backgroundColor: {
            type: 'string',
            default: '#eee',
        },
        separatorColor: {
            type: 'string',
            default: '#eee',
        },
        separatorBg: {
            type: 'string',
            default: '#eee',
        },
        separatorBorder: {
            type: 'string',
            default: '#eee',
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
        var attributes = props.attributes;
        console.log( attributes );
        return 'Hello';
    },
} );

