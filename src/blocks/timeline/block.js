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

    render() {

         // Get Initial Timeline content
        this.getTimelinecontent();

        const { attributes, categoriesList, setAttributes, latestPosts } = this.props;
        const { tm_content, post_content,headingAlign,headingColor,subHeadingColor,backgroundColor,separatorColor,separatorBg,separatorBorder,headingTag,headFontSize,timelineItem,postNumber,timelinAlignment,arrowlinAlignment,subHeadFontSize,verticalSpace,horizontalSpace,headSpace,separatorwidth,subHeadSpace,postType
,displayPostDate, displayPostExcerpt, displayPostAuthor, displayPostImage,displayPostLink, align, postLayout, order, orderBy, categories, postsToShow, width, imageCrop, readMoreText } = attributes;
        
        console.log(this);
        // Thumbnail options
        const imageCropOptions = [
            { value: 'landscape', label: __( 'Landscape' ) },
            { value: 'square', label: __( 'Square' ) },
        ];

        const isLandscape = imageCrop === 'landscape';

      /*  const inspectorControls = (
            <InspectorControls>
                <PanelBody title={ __( 'Post Grid Settings' ) }>
                    <QueryControls
                        { ...{ order, orderBy } }
                        numberOfItems={ postsToShow }
                        categoriesList={ categoriesList }
                        selectedCategoryId={ categories }
                        onOrderChange={ ( value ) => setAttributes( { order: value } ) }
                        onOrderByChange={ ( value ) => setAttributes( { orderBy: value } ) }
                        onCategoryChange={ ( value ) => setAttributes( { categories: '' !== value ? value : undefined } ) }
                        onNumberOfItemsChange={ ( value ) => setAttributes( { postsToShow: value } ) }
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

                </PanelBody>
            </InspectorControls>
        );*/

        const timeline_control = (
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
                    { postType === 'general' && <RangeControl
                        label={ __( 'Number of Items' ) }
                        value={ timelineItem }
                        onChange={ ( value ) => setAttributes( { timelineItem: value } ) }
                        min={ 1 }
                        max={ 200 }
                        beforeIcon="editor-textcolor"
                        allowReset
                    /> }
                    { postType === 'post' && <PanelBody title={ __( 'Post Grid Settings' ) }>
                    <QueryControls
                        { ...{ order, orderBy } }
                        numberOfItems={ postsToShow }
                        categoriesList={ categoriesList }
                        selectedCategoryId={ categories }
                        onOrderChange={ ( value ) => setAttributes( { order: value } ) }
                        onOrderByChange={ ( value ) => setAttributes( { orderBy: value } ) }
                        onCategoryChange={ ( value ) => setAttributes( { categories: '' !== value ? value : undefined } ) }
                        onNumberOfItemsChange={ ( value ) => setAttributes( { postsToShow: value } ) }
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
                 </PanelBody>
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

        const hasPosts = Array.isArray( latestPosts ) && latestPosts.length;
        if ( ! hasPosts ) {
            return (
                <Fragment>
                    { timeline_control }                    
                    <Placeholder
                        icon="admin-post"
                        label={ __( 'Atomic Blocks Post Grid' ) }
                    >
                        { ! Array.isArray( latestPosts ) ?
                            <Spinner /> :
                            __( 'No posts found.' )
                        }
                    </Placeholder>
                </Fragment>
            );
        }

        // Removing posts from display should be instant.
        const displayPosts = latestPosts.length > postsToShow ?
            latestPosts.slice( 0, postsToShow ) :
            latestPosts;

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

        return (
            <Fragment>
                { timeline_control }
                
                <div
                    className={ classnames(
                        this.props.className,
                        'ab-block-post-grid',
                    ) }
                >
                    <div
                        className={ classnames( {
                            'is-grid': postLayout === 'grid',
                            'is-list': postLayout === 'list',
                            'ab-post-grid-items' : 'ab-post-grid-items'
                        } ) }
                    >
                        { displayPosts.map( ( post, i ) =>
                            <article
                                key={ i }
                                className={ classnames(
                                    post.featured_image_src && displayPostImage ? 'has-thumb' : 'no-thumb'
                                ) }
                            >
                                {
                                    displayPostImage && post.featured_image_src !== undefined && post.featured_image_src ? (
                                        <div class="ab-block-post-grid-image">
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

                                <div class="ab-block-post-grid-text">
                                    <h2 class="entry-title"><a href={ post.link } target="_blank" rel="bookmark">{ decodeEntities( post.title.rendered.trim() ) || __( '(Untitled)' ) }</a></h2>

                                    <div class="ab-block-post-grid-byline">
                                        { displayPostAuthor && post.author_info.display_name &&
                                            <div class="ab-block-post-grid-author"><a class="ab-text-link" target="_blank" href={ post.author_info.author_link }>{ post.author_info.display_name }</a></div>
                                        }

                                        { displayPostDate && post.date_gmt &&
                                            <time dateTime={ moment( post.date_gmt ).utc().format() } className={ 'ab-block-post-grid-date' }>
                                                { moment( post.date_gmt ).local().format( 'MMMM DD, Y' ) }
                                            </time>
                                        }
                                    </div>

                                    <div class="ab-block-post-grid-excerpt">
                                        { displayPostExcerpt && post.excerpt &&
                                            <div dangerouslySetInnerHTML={ { __html: post.excerpt.rendered } } />
                                        }

                                        { displayPostLink &&
                                            <p><a class="ab-block-post-grid-link ab-text-link" href={ post.link } target="_blank" rel="bookmark">{ readMoreText }</a></p>
                                        }
                                    </div>
                                </div>
                            </article>
                        ) }
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default withSelect( ( select, props ) => {
    const { postsToShow, order, orderBy, categories } = props.attributes;
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
} )( UAGBTimeline );