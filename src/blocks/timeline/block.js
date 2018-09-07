/**
 * External dependencies
 */

import get from 'lodash/get';
import isUndefined from 'lodash/isUndefined';
import pickBy from 'lodash/pickBy';
import moment from 'moment';
import classnames from 'classnames';
//import { stringify } from 'querystringify';

const { Component, Fragment } = wp.element;

const { __ } = wp.i18n;

const { decodeEntities } = wp.htmlEntities;

const { apiFetch } = wp;

const {
    registerStore,
    withSelect,
} = wp.data;

const {
    PanelBody,
    PanelColor,
    Placeholder,
    QueryControls,
    RangeControl,
    SelectControl,
    Spinner,
    TextControl,
    ToggleControl,
    Toolbar,
    withAPIData,
} = wp.components;

const {
    AlignmentToolbar,
    InspectorControls,
    ColorPalette,
    RichText,
    BlockAlignmentToolbar,
    BlockControls,
} = wp.editor;


const MAX_POSTS_COLUMNS = 4;

class UAGBTimeline extends Component {
    constructor() {
        super( ...arguments );

        // Get initial timeline content.
        this.getTimelinecontent = this.getTimelinecontent.bind(this);
        this.toggleDisplayPostDate = this.toggleDisplayPostDate.bind( this );
        this.toggleDisplayPostExcerpt = this.toggleDisplayPostExcerpt.bind( this );
        this.toggleDisplayPostAuthor = this.toggleDisplayPostAuthor.bind( this );
        this.toggleDisplayPostImage = this.toggleDisplayPostImage.bind( this );
        this.toggleDisplayPostLink = this.toggleDisplayPostLink.bind( this );
        
        // Get unique id
        this.uagbGetId = this.uagbGetId.bind(this);
   }

    uagbGetId(){
        const id = _.uniqueId("uagb-tl-block-no-");
        if( this.props.attributes.tm_block_id == '0' ){
            this.props.setAttributes( { tm_block_id: id } );
        }
    }

    toggleDisplayPostDate() {
        const { displayPostDate } = this.props.attributes;
        const { setAttributes } = this.props;

        setAttributes( { displayPostDate: ! displayPostDate } );
    }

    toggleDisplayPostExcerpt() {
        const { displayPostExcerpt } = this.props.attributes;
        const { setAttributes } = this.props;

        setAttributes( { displayPostExcerpt: ! displayPostExcerpt } );
    }

    toggleDisplayPostAuthor() {
        const { displayPostAuthor } = this.props.attributes;
        const { setAttributes } = this.props;

        setAttributes( { displayPostAuthor: ! displayPostAuthor } );
    }

    toggleDisplayPostImage() {
        const { displayPostImage } = this.props.attributes;
        const { setAttributes } = this.props;

        setAttributes( { displayPostImage: ! displayPostImage } );
    }

    toggleDisplayPostLink() {
        const { displayPostLink } = this.props.attributes;
        const { setAttributes } = this.props;

        setAttributes( { displayPostLink: ! displayPostLink } );
    }

    customizeReadMoreText() {
        const { readMoreText } = this.props.attributes;
        const { setAttributes } = this.props;

        setAttributes( { readMoreText: ! readMoreText } );
    }

    /**
    * Loading Timeline content.
    */
    getTimelinecontent() {   
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
        let data_length = data_copy.length;
        
        if( item_number < data_length ){
            let data_new = data_copy;
            data_new.pop();
            this.props.setAttributes({tm_content:data_new});
        }if( item_number > data_length ){            
            var diff = item_number - 1;
            var title_heading_val = 'Timeline Heading '+item_number;
            var title_desc_val    = 'This is Timeline description, you can change me anytime click here ';
            data_copy[diff] = { 'time_heading' : title_heading_val,'time_desc':title_desc_val };
            this.props.setAttributes({tm_content:data_copy});  
        }  

        return this.props.attributes.tm_content;
    }    

   
    /**
     * Get Post data in attribute.
     * @return {[type]} [description]
     */
    getpostcontent(){

        var post    = this.props.latestPosts
        var tm_post  = this.props.attributes.tm_post;

        if( post ){   

            if( tm_post.length == 0 ){
                this.props.attributes.tm_post =  this.props.latestPosts; 
            }else{
                if( JSON.stringify( tm_post ) !== JSON.stringify( post ) ){
                    this.props.attributes.tm_post =  this.props.latestPosts; 
                }
            }
        }
        return this.props.attributes.tm_post;
    }

    render() {       
        //Get id
        this.uagbGetId();

        // Get Initial Timeline content
        this.getTimelinecontent();

        // Get post content
        //this.getpostcontent();

        //console.log(this.props);

        const { attributes, categoriesList, setAttributes, latestPosts } = this.props;
        const {
            className,
            tm_post,
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
            postNumber,
            timelinAlignment,
            arrowlinAlignment,
            subHeadFontSize,
            verticalSpace,
            horizontalSpace,
            headSpace,
            separatorwidth,
            subHeadSpace,
            postType,
            displayPostDate,
            displayPostExcerpt,
            displayPostAuthor,
            displayPostImage,
            displayPostLink,
            align,
            postLayout,
            order,
            orderBy,
            categories,
            postsToShow,
            width,
            imageCrop,
            readMoreText,
            tm_block_id,
        } = attributes;

        //console.log(this.props);

        // Thumbnail options
        const imageCropOptions = [
            { value: 'landscape', label: __( 'Landscape' ) },
            { value: 'square', label: __( 'Square' ) },
        ];

        const isLandscape = imageCrop === 'landscape';

        const timeline_control = (
            <InspectorControls>
                <PanelBody 
                    title={ __( 'General' ) }
                    initialOpen={ false }
                >
                    <SelectControl
                        label={ __( 'Select Source' ) }
                        value={ postType }
                        onChange={ ( value ) => {
                            setAttributes( { postType: value } );                            
                        } }
                        options={ [
                            { value: 'general', label: __( 'Custom' ) },
                            { value: 'post', label: __( 'Post Type' ) },                            
                        ] }
                    /> 
                    { postType === 'general' && <RangeControl
                        label={ __( 'Number of Items' ) }
                        value={ timelineItem }
                        onChange={ ( value ) => setAttributes( { timelineItem: value } ) }
                        min={ 1 }
                        max={ 200 }
                        beforeIcon="editor-textcolor"
                        allowReset
                    /> }                                      
                 </PanelBody>
                 { postType === 'post' && <PanelBody title={ __( 'Post Grid Settings' ) }>
                    <QueryControls
                        numberOfItems={ postsToShow }
                        { ...{ order, orderBy } }
                        categoriesList={ categoriesList }
                        selectedCategoryId={ categories }
                        onOrderChange={ ( value ) => { setAttributes( { order: value } ); } }
                        onOrderByChange={ ( value ) => { setAttributes( { orderBy: value } ); } }
                        onCategoryChange={ ( value ) => { setAttributes( { categories: '' !== value ? value : undefined } ) ; } }
                        onNumberOfItemsChange={ ( value ) => { setAttributes( { postsToShow: value } ); } }
                    />                   
                    <ToggleControl
                        label={ __( 'Display Featured Image' ) }
                        checked={ displayPostImage }
                        onChange={ this.toggleDisplayPostImage }
                    />
                    { displayPostImage &&
                        <SelectControl
                            label={ __( 'Featured Image Style' ) }
                            options={ imageCropOptions }
                            value={ imageCrop }
                            onChange={ ( value ) => this.props.setAttributes( { imageCrop: value } ) }
                        />
                    }
                    <ToggleControl
                        label={ __( 'Display Post Author' ) }
                        checked={ displayPostAuthor }
                        onChange={ this.toggleDisplayPostAuthor }
                    />
                    <ToggleControl
                        label={ __( 'Display Post Date' ) }
                        checked={ displayPostDate }
                        onChange={ this.toggleDisplayPostDate }
                    />
                    <ToggleControl
                        label={ __( 'Display Post Excerpt' ) }
                        checked={ displayPostExcerpt }
                        onChange={ this.toggleDisplayPostExcerpt }
                    />
                    <ToggleControl
                        label={ __( 'Display Continue Reading Link' ) }
                        checked={ displayPostLink }
                        onChange={ this.toggleDisplayPostLink }
                    />
                    { displayPostLink &&
                    <TextControl
                        label={ __( 'Customize Read More Link' ) }
                        type="text"
                        value={ readMoreText }
                        onChange={ ( value ) => this.props.setAttributes( { readMoreText: value } ) }
                    />                                      
                    }                    

                </PanelBody>} 
                 <PanelBody 
                    title={ __( 'Layout' ) }
                    initialOpen={ false }
                >                      
                    <SelectControl
                        label={ __( 'Alignment' ) }
                        value={ timelinAlignment }
                        onChange={ ( value ) => setAttributes( { timelinAlignment: value } ) }
                        options={ [
                            { value: 'left', label: __( 'Left' ) },
                            { value: 'right', label: __( 'Right' ) },
                            { value: 'center', label: __( 'Center' ) },
                        ] }
                    />
                    <SelectControl
                        label={ __( 'Arrow Alignment' ) }
                        value={ arrowlinAlignment }
                        onChange={ ( value ) => setAttributes( { arrowlinAlignment: value } ) }
                        options={ [
                            { value: 'top', label: __( 'Top' ) },
                            { value: 'bottom', label: __( 'Bottom' ) },
                            { value: 'center', label: __( 'Center' ) },
                        ] }
                    />
                    <BlockControls key='controls'>
                        <AlignmentToolbar
                            value={ headingAlign }
                            onChange={ ( value ) => setAttributes( { headingAlign: value } ) }
                        />
                    </BlockControls>
                </PanelBody>
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
                        label={ __( 'Description Font Size' ) }
                        value={ subHeadFontSize }
                        onChange={ ( value ) => setAttributes( { subHeadFontSize: value } ) }
                        min={ 10 }
                        max={ 200 }
                        beforeIcon="editor-textcolor"
                        allowReset
                    />
                </PanelBody>
                <PanelBody 
                    title={ __( 'Timeline Colors' ) }
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
                    <RangeControl
                        label={ __( 'Line Width' ) }
                        value={ separatorwidth }
                        onChange={ ( value ) => setAttributes( { separatorwidth: value } ) }
                        min={ 1 }
                        max={ 10 }
                        beforeIcon="editor-textcolor"
                        allowReset
                    />
                    <RangeControl
                        label={ __( 'Horizontal Space' ) }
                        value={ horizontalSpace }
                        onChange={ ( value ) => setAttributes( { horizontalSpace: value } ) }
                        min={ 10 }
                        max={ 80 }
                        beforeIcon="editor-textcolor"
                        allowReset
                    />
                    <RangeControl
                        label={ __( 'Vertical Space' ) }
                        value={ verticalSpace }
                        onChange={ ( value ) => setAttributes( { verticalSpace: value } ) }
                        min={ 0 }
                        max={ 80 }
                        beforeIcon="editor-textcolor"
                        allowReset
                    />
                </PanelBody>
                <PanelBody 
                    title={ __( 'Additional Options' ) }
                    initialOpen={ false }
                    >                   
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
        );

        const layoutControls = [
            {
                icon: 'grid-view',
                title: __( 'Grid View' ),
                onClick: () => setAttributes( { postLayout: 'grid' } ),
                isActive: postLayout === 'grid',
            },
            {
                icon: 'list-view',
                title: __( 'List View' ),
                onClick: () => setAttributes( { postLayout: 'list' } ),
                isActive: postLayout === 'list',
            },
        ];

        const time_class = 'uagb-timeline-main '+tm_block_id;
        return (
            <Fragment>
            { timeline_control }
                <div className={ className } > 
                    <div className = {time_class}>
                        { this.uagb_get_timeline_content() }
                    </div>
                </div>
            </Fragment>
        );
    }

     /* Render output at backend */
    uagb_get_timeline_content(){
        var attr              = this.props.attributes,
            tm_post            = attr.tm_post,
            content            = attr.tm_content,
            headingTag         = attr.headingTag,
            headingAlign       = attr.headingAlign,
            headFontSize       = attr.headFontSize,
            headingColor       = attr.headingColor,
            headSpace          = attr.headSpace,
            time_type          = attr.postType,
            subHeadFontSize    = attr.subHeadFontSize,
            subHeadingColor    = attr.subHeadingColor,
            subHeadSpace       = attr.subHeadSpace,
            backgroundColor    = attr.backgroundColor,
            separatorColor     = attr.separatorColor,
            separatorBg        = attr.separatorBg,
            separatorBorder    = attr.separatorBorder,
            timelinAlignment   = attr.timelinAlignment,
            arrowlinAlignment  = attr.arrowlinAlignment,
            postNumber         = attr.postNumber,
            verticalSpace      = attr.verticalSpace,
            horizontalSpace    = attr.horizontalSpace,
            separatorwidth     = attr.separatorwidth,
            displayPostImage   = attr.displayPostImage,
            displayPostDate    = attr.displayPostDate,
            displayPostExcerpt = attr.displayPostExcerpt,
            displayPostAuthor  = attr.displayPostAuthor,
            displayPostImage   = attr.displayPostImage,
            displayPostLink    = attr.displayPostLink,
            order              = attr.order,
            orderBy            = attr.orderBy,
            categories         = attr.categories,
            postsToShow        = attr.postsToShow,
            width              = attr.width,
            imageCrop          = attr.imageCrop,
            readMoreText       = attr.readMoreText,
            tm_block_id        = attr.tm_block_id,
            align_class        = '',
            align_item_class   = '',
            arrow_align_class  = 'uagb-top-arrow',
            seperator_margin   = parseInt(separatorwidth/2),
            vert_per           = parseInt((parseInt(verticalSpace) * (75))/100);
        
        if( arrowlinAlignment == 'center' ){
            arrow_align_class = 'uagb-center-arrow';
            vert_per = parseInt((parseInt(verticalSpace) * parseInt(40))/100);            
        }else if( arrowlinAlignment == 'bottom' ){
            arrow_align_class = 'uagb-bottom-arrow';
            vert_per = parseInt((parseInt(verticalSpace) * parseInt(12))/100);
        } 

        if( timelinAlignment == 'left' ){
            align_class = 'uagb-timeline uagb-tl-left ' + arrow_align_class;
            align_item_class = 'uagb-timeline-container uagb-tl-item-left';
        }else if(timelinAlignment == 'right'){
            align_class = 'uagb-timeline uagb-tl-right '+ arrow_align_class;
            align_item_class = 'uagb-timeline-container uagb-tl-item-right';
        }else{
            align_class = 'uagb-timeline uagb-tl-center '+ arrow_align_class;
            align_item_class = '';
        }

        let data_copy     = [ ...this.props.attributes.tm_content ];
        //let post_copy     = [ ...displayPosts ];
        //console.log(post_copy);
        const isLandscape = imageCrop === 'landscape';

         /* Style for elements */
        var back_style = '.'+ tm_block_id +' .uagb-timeline-container.uagb-tl-item-left .uagb-timeline-content::before {'+
                        '  border-color: transparent transparent transparent '+backgroundColor+
                        '}'+
                        '.'+ tm_block_id +' .uagb-timeline::after{'+
                            'background-color:'+separatorColor+';'+
                            'width:'+separatorwidth+'px'+';'+
                            'margin-left:-'+seperator_margin+'px'+
                        '}'+
                        '.'+ tm_block_id +' .uagb-timeline-container::after{'+
                          'background-color:'+separatorBg+';'+
                          'border-color:'+separatorBorder+
                        '}'+
                        '.'+ tm_block_id +' .uagb-timeline-container.uagb-tl-item-right .uagb-timeline-content::before {'+
                        '  border-color: transparent '+backgroundColor+' transparent transparent'+
                        '}'+ 
                        '.'+ tm_block_id +' .uagb-timeline-container.uagb-tl-item-left {'+
                        ' padding-right:'+horizontalSpace+'px'+
                        '}'+ 
                        '.'+ tm_block_id +' .uagb-timeline-container.uagb-tl-item-right {'+
                        ' padding-left:'+horizontalSpace+'px'+
                        '}'+
                        '.'+ tm_block_id +' .uagb-timeline-container {'+
                        ' padding-top:'+verticalSpace+'px'+
                        '}'+
                        '.'+ tm_block_id +' .uagb-top-arrow .uagb-timeline-container:after{'+
                        ' top:calc(20% + '+vert_per+'px)!important'+
                        '}'+
                        '.'+ tm_block_id +' .uagb-bottom-arrow .uagb-timeline-container:after{'+
                        ' top:calc(80% + '+vert_per+'px)!important'+
                        '}'+ 
                        '.'+ tm_block_id +' .uagb-center-arrow .uagb-timeline-container:after{'+
                        ' top:calc(50% + '+vert_per+'px)!important'+
                        '}' ;

        if( time_type == 'general'){
            return ( <div className= {align_class} >
                <style dangerouslySetInnerHTML={{ __html: back_style }}></style>
                {content.map((time_content,index) => {  
                    var second_index = 'uagb-'+index;
                    if(timelinAlignment == 'center'){
                        if(index % 2 == '0'){
                            align_item_class = 'uagb-timeline-container uagb-tl-item-left';
                        }else{
                            align_item_class = 'uagb-timeline-container uagb-tl-item-right';
                        }  
                    }  
                    return (<div key={index} className = {align_item_class} >                                
                                <div  key={second_index} className="uagb-timeline-content"  style={{ backgroundColor: backgroundColor }}>
                                    <RichText
                                        tagName={ headingTag }
                                        placeholder={ __( 'Write a Heading' ) }
                                        value={ time_content.time_heading }
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
                                        value={ time_content.time_desc }
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
            const { setAttributes, latestPosts } = this.props;           
            //setAttributes( { 'tm_post': latestPosts } );
            const hasPosts = Array.isArray( latestPosts ) && latestPosts.length;
            if ( ! hasPosts ) {
                return (
                    <Fragment>                                            
                        <Placeholder
                            icon="admin-post"
                            label={ __( 'UAGB timeline' ) }
                        >
                            { ! Array.isArray( latestPosts ) ?
                                <Spinner /> :
                                __( 'No posts found.' )
                            }
                        </Placeholder>
                    </Fragment>
                );
            }else{
                // Removing posts from display should be instant.
            const displayPosts = latestPosts.length > postsToShow ?
                latestPosts.slice( 0, postsToShow ) :
                latestPosts;
           
            return (<div className = {align_class}>  
                    <style dangerouslySetInnerHTML={{ __html: back_style }}></style>
                    {displayPosts.map((post,index) => {
                        var second_index = 'uagb-'+index;
                        if(timelinAlignment == 'center'){
                            if(index % 2 == '0'){
                                align_item_class = 'uagb-timeline-container uagb-tl-item-left';
                            }else{
                                align_item_class = 'uagb-timeline-container uagb-tl-item-right';
                            }  
                        }       
                        return (
                            <div key={index} className = {align_item_class} >
                                <div key={second_index} className = "uagb-timeline-content" style={{ backgroundColor: backgroundColor }}>
                                    <article
                                        key={ index }
                                        className={ classnames(
                                            post.featured_image_src && displayPostImage ? 'has-thumb' : 'no-thumb'
                                        ) }
                                    >
                                    {
                                        displayPostImage && post.featured_image_src !== undefined && post.featured_image_src ? (
                                            <div className="uagb-block-post-grid-image">
                                                <a href={ post.link } target="_blank" rel="bookmark">
                                                    <img
                                                        src={ isLandscape ? post.featured_image_src : post.featured_image_src_square }
                                                        alt={ decodeEntities( post.title.rendered.trim() ) || __( '(Untitled)' ) }
                                                    />
                                                </a>
                                            </div>
                                        ) : (
                                            null
                                        )
                                    }
                                    <div className="uagb-timeline-text">
                                        <h2 className="entry-title">
                                            <a href={ post.link } target="_blank" rel="bookmark" style={{ 
                                                            textAlign: headingAlign,
                                                            fontSize: headFontSize + 'px',
                                                            color: headingColor,
                                                            marginBottom: headSpace + 'px',
                                                        }}>
                                                { decodeEntities( post.title.rendered.trim() ) || __( '(Untitled)' ) }
                                            </a>
                                        </h2>

                                        <div className="uagb-byline">
                                            { displayPostAuthor && post.author_info.display_name &&
                                                <div className="uagb-block-post-grid-author"><a className="uagb-text-link" target="_blank" href={ post.author_info.author_link }>{ post.author_info.display_name }</a></div>
                                            }

                                            { displayPostDate && post.date_gmt &&
                                                <time dateTime={ moment( post.date_gmt ).utc().format() } className={ 'uagb-block-post-grid-date' }>
                                                    { moment( post.date_gmt ).local().format( 'MMMM DD, Y' ) }
                                                </time>
                                            }
                                        </div>

                                        <div className="uagb-timeline-grid-excerpt">
                                            { displayPostExcerpt && post.excerpt &&
                                                <div dangerouslySetInnerHTML={ { __html: post.excerpt.rendered } } style={{ 
                                                textAlign: headingAlign,
                                                fontSize: subHeadFontSize + 'px',
                                                color: subHeadingColor,
                                                marginBottom: subHeadSpace + 'px',
                                            }}/>
                                            }

                                            { displayPostLink &&
                                                <p><a className="uagb-block-post-grid-link ab-text-link" href={ post.link } target="_blank" rel="bookmark">{ readMoreText }</a></p>
                                            }
                                        </div>
                                    </div>
                                    </article>
                                </div>
                            </div>
                        );
                    })}                    
            </div>);
            }
            
        }
    }

}

export default withSelect( ( select, props ) => {
    const { postsToShow, order, orderBy, categories, postType } = props.attributes;    
    if( postType == 'post'){ 
        const { getEntityRecords } = select( 'core' );
        const latestPostsQuery = pickBy( {
            categories,
            order,
            orderby: orderBy,
            per_page: postsToShow,
        }, ( value ) => ! isUndefined( value ) );
        const categoriesListQuery = {
            per_page: 100,
        };        
        return {
            latestPosts: getEntityRecords( 'postType', 'post', latestPostsQuery ),
            categoriesList: getEntityRecords( 'taxonomy', 'category', categoriesListQuery ),
        };
    }
} )( UAGBTimeline );