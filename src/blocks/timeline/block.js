/**
 * External dependencies
 */

import get from 'lodash/get';
import isUndefined from 'lodash/isUndefined';
import pickBy from 'lodash/pickBy';
import moment from 'moment';
import classnames from 'classnames';
//import { stringify } from 'querystringify';
import UAGBIcon from "../uagb-controlls/UAGBIcon";
import FontIconPicker from '@fonticonpicker/react-fonticonpicker';

// Import css for timeline.
import timelineInlineStyles from './inline-styles'

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
        this.toggleDisplayPostDate    = this.toggleDisplayPostDate.bind( this );
        this.toggleDisplayPostExcerpt = this.toggleDisplayPostExcerpt.bind( this );
        this.toggleDisplayPostAuthor  = this.toggleDisplayPostAuthor.bind( this );
        this.toggleDisplayPostImage   = this.toggleDisplayPostImage.bind( this );
        this.toggleDisplayPostLink    = this.toggleDisplayPostLink.bind( this );  
        this.getTimelineicon          = this.getTimelineicon.bind(this);    
   }    

    /**
     * [getTimelineicon description]
     * @param  {[type]} value [description]
     * @return {[type]}       [description]
     */
    getTimelineicon(value) { 
        this.props.setAttributes( { icon: value } );
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
        
        const { attributes, categoriesList, setAttributes, latestPosts, focus } = this.props;
       
        const {
            className,
            tm_content,
            post_content,
            headingColor,
            subHeadingColor,
            backgroundColor,
            separatorColor,
            separatorFillColor,
            separatorBg,
            separatorBorder,
            borderHover,
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
            borderwidth,
            connectorBgsize,
            subHeadSpace,
            authorSpace,
            dateBottomspace,
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
            imageSize,
            readMoreText,
            icon,
            iconColor,
            authorColor,
            dateColor,
            dateFontsize,
            authorFontsize,
            iconSize,
            tm_block_id,
            exerptLength,
            borderRadius,
            bgPadding,
            tm_client_id,
            iconHover,
            iconBgHover
        } = attributes;

        /* Image size options */
        const imageSizeOptions = [
            { value: 'thumbnail', label: __( 'Thumbnail' ) },
            { value: 'medium', label: __( 'Medium' ) },
            { value: 'medium_large', label: __( 'Medium Large' ) },
            { value: 'large', label: __( 'Large' ) }
        ];      

        // Parameters for FontIconPicker
        const icon_props = {
          icons: UAGBIcon,
          renderUsing: 'class',
          theme: 'default',
          value: icon,
          onChange: this.getTimelineicon,
          isMulti: false,
        };

        const timeline_control = (

            <InspectorControls>                
                <PanelBody title={ __( 'Query' ) }
                    initialOpen={ false }
                    >
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
                </PanelBody>
                 <PanelBody title={ __( 'Image' ) }
                    initialOpen={ false }
                 >
                    <ToggleControl
                        label={ __( 'Display Featured Image' ) }
                        checked={ displayPostImage }
                        onChange={ this.toggleDisplayPostImage }
                    />
                    { displayPostImage &&
                        <SelectControl
                            label={ __( 'Featured Image Style' ) }
                            options={ imageSizeOptions }
                            value={ imageSize }
                            onChange={ ( value ) => this.props.setAttributes( { imageSize: value } ) }
                        />
                    }   
                </PanelBody>
                <PanelBody title={ __( 'Content' ) }
                    initialOpen={ false }
                > 
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
                    { displayPostExcerpt &&
                       <RangeControl
                            label={ __( 'Excerpt Length' ) }
                            value={ exerptLength }
                            onChange={ ( value ) => setAttributes( { exerptLength: value } ) }
                            min={ 1 }
                            max={ 50 }
                            beforeIcon="editor-textcolor"
                            allowReset
                        />
                    }
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
                <PanelBody 
                    title={ __( 'Layout' ) }
                    initialOpen={ false }
                >          
                    <SelectControl
                        label={ __( 'Orientation' ) }
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
                </PanelBody>
                 <PanelBody 
                    title={ __( 'Spacing' ) }
                    initialOpen={ false }
                    >
                    <RangeControl
                        label={ __( 'Horizontal Space' ) }
                        value={ horizontalSpace }
                        onChange={ ( value ) => setAttributes( { horizontalSpace: value } ) }
                        min={ 1 }
                        max={ 50 }
                        beforeIcon="editor-textcolor"
                        allowReset
                    />
                    <RangeControl
                        label={ __( 'Vertical Space' ) }
                        value={ verticalSpace }
                        onChange={ ( value ) => setAttributes( { verticalSpace: value } ) }
                        min={ 1 }
                        max={ 100 }
                        beforeIcon="editor-textcolor"
                        allowReset
                    />                   
                    <RangeControl
                        label={ __( 'Heading Bottom Spacing' ) }
                        value={ headSpace }
                        onChange={ ( value ) => setAttributes( { headSpace: value } ) }
                        min={ 0 }
                        max={ 50 }
                        beforeIcon="editor-textcolor"
                        allowReset
                    />                    
                    { displayPostExcerpt && <RangeControl
                        label={ __( 'Description Bottom Spacing' ) }
                        value={ subHeadSpace }
                        onChange={ ( value ) => setAttributes( { subHeadSpace: value } ) }
                        min={ 0 }
                        max={ 50 }
                        beforeIcon="editor-textcolor"
                        allowReset
                    />
                    }

                    { displayPostAuthor &&
                    <RangeControl
                        label={ __( 'Author Bottom Spacing' ) }
                        value={ authorSpace }
                        onChange={ ( value ) => setAttributes( { authorSpace: value } ) }
                        min={ 0 }
                        max={ 50 }
                        beforeIcon="editor-textcolor"
                        allowReset
                    />
                    }

                    { displayPostDate && ( timelinAlignment !=='center' ) && <RangeControl
                        label={ __( 'Date Bottom Spacing' ) }
                        value={ dateBottomspace }
                        onChange={ ( value ) => setAttributes( { dateBottomspace: value } ) }
                        min={ 0 }
                        max={ 50 }
                        beforeIcon="editor-textcolor"
                        allowReset
                    /> }
                </PanelBody>
                <PanelBody 
                    title={ __( 'Timeline Item' ) }
                    initialOpen={ false }
                    >
                    <SelectControl
                        label={ __( 'Heading Tag' ) }
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

                    { displayPostExcerpt && <PanelColor
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
                    }

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
                    <RangeControl
                        label={ __( 'Rounded Corners' ) }
                        value={ borderRadius }
                        onChange={ ( value ) => setAttributes( { borderRadius: value } ) }
                        min={ 0 }
                        max={ 50 }
                        beforeIcon="editor-textcolor"
                        allowReset
                    />
                    <RangeControl
                        label={ __( 'Padding' ) }
                        value={ bgPadding }
                        onChange={ ( value ) => setAttributes( { bgPadding: value } ) }
                        min={ 1 }
                        max={ 50 }
                        beforeIcon="editor-textcolor"
                        allowReset
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

                    { displayPostExcerpt &&
                    <RangeControl
                        label={ __( 'Description Font Size' ) }
                        value={ subHeadFontSize }
                        onChange={ ( value ) => setAttributes( { subHeadFontSize: value } ) }
                        min={ 10 }
                        max={ 200 }
                        beforeIcon="editor-textcolor"
                        allowReset
                    />
                    }
                </PanelBody>                
                <PanelBody 
                    title={ __( 'Connector' ) }
                    initialOpen={ false }
                    >
                    <FontIconPicker {...icon_props} />
                    <RangeControl
                        label={ __( 'Icon Size' ) }
                        value={ iconSize }
                        onChange={ ( value ) => setAttributes( { iconSize: value } ) }
                        min={ 0 }
                        max={ 30 }
                        beforeIcon="editor-textcolor"
                        allowReset
                    />   
                    <PanelColor
                        title={ __( 'Icon Color' ) }
                        colorValue={ iconColor }
                        initialOpen={ false }
                    >
                        <ColorPalette
                            value={ iconColor }
                            onChange={ ( colorValue ) => setAttributes( { iconColor: colorValue } ) }
                            allowReset
                        />
                    </PanelColor>
                    <PanelColor
                        title={ __( 'Icon Hover Color' ) }
                        colorValue={ iconHover }
                        initialOpen={ false }
                    >
                        <ColorPalette
                            value={ iconHover }
                            onChange={ ( colorValue ) => setAttributes( { iconHover: colorValue } ) }
                            allowReset
                        />
                    </PanelColor>
                    <PanelColor
                        title={ __( 'Icon Background Color' ) }
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
                        title={ __( 'Icon Background Hover Color' ) }
                        colorValue={ iconBgHover }
                        initialOpen={ false }
                    >
                        <ColorPalette
                            value={ iconBgHover }
                            onChange={ ( colorValue ) => setAttributes( { iconBgHover: colorValue } ) }
                            allowReset
                        />
                    </PanelColor>
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
                        title={ __( 'Line Fill Color' ) }
                        colorValue={ separatorFillColor }
                        initialOpen={ false }
                    >
                        <ColorPalette
                            value={ separatorFillColor }
                            onChange={ ( colorValue ) => setAttributes( { separatorFillColor: colorValue } ) }
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
                    <PanelColor
                        title={ __( 'Border Hover Color' ) }
                        colorValue={ separatorBorder }
                        initialOpen={ false }
                    >
                    <ColorPalette
                            value={ borderHover }
                            onChange={ ( colorValue ) => setAttributes( { borderHover: colorValue } ) }
                            allowReset
                        />
                    </PanelColor>
                    <RangeControl
                        label={ __( 'Border Width' ) }
                        value={ borderwidth }
                        onChange={ ( value ) => setAttributes( { borderwidth: value } ) }
                        min={ 1 }
                        max={ 10 }
                        beforeIcon="editor-textcolor"
                        allowReset
                    />
                    <RangeControl
                        label={ __( 'Connector Width' ) }
                        value={ separatorwidth }
                        onChange={ ( value ) => setAttributes( { separatorwidth: value } ) }
                        min={ 1 }
                        max={ 10 }
                        beforeIcon="editor-textcolor"
                        allowReset
                    />
                    <RangeControl
                        label={ __( 'Connector Background Size' ) }
                        value={ connectorBgsize }
                        onChange={ ( value ) => setAttributes( { connectorBgsize: value } ) }
                        min={ 25 }
                        max={ 90 }
                        beforeIcon="editor-textcolor"
                        allowReset
                    />                    
                </PanelBody>        
                { displayPostAuthor && <PanelBody 
                    title={ __( 'Author' ) }
                    initialOpen={ false }
                    >
                    <PanelColor
                        title={ __( 'Author Color' ) }
                        colorValue={ authorColor }
                        initialOpen={ false }
                    >
                        <ColorPalette
                            value={ authorColor }
                            onChange={ ( colorValue ) => setAttributes( { authorColor: colorValue } ) }
                            allowReset
                        />
                    </PanelColor>
                    <RangeControl
                        label={ __( 'Author Font Size' ) }
                        value={ authorFontsize }
                        onChange={ ( value ) => setAttributes( { authorFontsize: value } ) }
                        min={ 1 }
                        max={ 10 }
                        beforeIcon="editor-textcolor"
                        allowReset
                    />
                    </PanelBody> 
                } 

                { displayPostDate && <PanelBody 
                    title={ __( 'Date' ) }
                    initialOpen={ false }
                    >
                    <PanelColor
                        title={ __( 'Date Color' ) }
                        colorValue={ dateColor }
                        initialOpen={ false }
                    >
                        <ColorPalette
                            value={ dateColor }
                            onChange={ ( colorValue ) => setAttributes( { dateColor: colorValue } ) }
                            allowReset
                        />
                    </PanelColor>
                    <RangeControl
                        label={ __( 'Date Font Size' ) }
                        value={ dateFontsize }
                        onChange={ ( value ) => setAttributes( { dateFontsize: value } ) }
                        min={ 1 }
                        max={ 10 }
                        beforeIcon="editor-textcolor"
                        allowReset
                    />
                    </PanelBody> 
                }      
            </InspectorControls>                
        );   
       
        /* Arrow position */
        var arrow_align_class  = 'uagb-timeline-arrow-top';
        if( arrowlinAlignment == 'center' ){
            arrow_align_class = 'uagb-timeline-arrow-center';
        }else if( arrowlinAlignment == 'bottom' ){
            arrow_align_class = 'uagb-timeline-arrow-bottom';
        } 

        /* Alignmnet */
        var align_class = 'uagb-timeline--center '+ arrow_align_class;
        if( timelinAlignment == 'left' ){
            align_class = 'uagb-timeline--left ' + arrow_align_class;
        }else if(timelinAlignment == 'right'){
            align_class = 'uagb-timeline--right '+ arrow_align_class;
        }     

        var responsive_class = 'uagb-timeline-responsive-tablet uagb-timeline';
        var tm_block_id_new = 'uagb-'+this.props.clientId;
        var tl_class = tm_block_id_new +' '+align_class+' '+responsive_class;
        return (
            <Fragment>            
            { timeline_control }           
            <BlockControls>
                <BlockAlignmentToolbar
                    value={ align }
                    onChange={ ( value ) => {
                        setAttributes( { align: value } );
                    } }
                    controls={ [ 'center', 'left','right' ] }
                />
                {/*<Toolbar controls={ layoutControls } />*/}
            </BlockControls>
                <div className={ className } >                     
                    <div className = { tl_class }>
                        <div className = "uagb-timeline-wrapper">
                            <div className = "uagb-timeline-main">                                
                                { this.uagb_get_timeline_content() }
                                <div className = "uagb-timeline__line" >
                                    <div className = "uagb-timeline__line__inner"></div>
                                </div> 
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }

    componentDidMount() {   
        //Store lient id. 
        this.props.setAttributes( { tm_client_id: this.props.clientId } );

        var id = this.props.clientId;
        window.addEventListener("load", this.uagbTimelineFunc_back(id));
        window.addEventListener("resize", this.uagbTimelineFunc_back(id));
        var time = this;
        $('.edit-post-layout__content').scroll( function(event) {            
            time.uagbTimelineFunc_back(id);            
        });
    }  

    componentDidUpdate(){
        var id = this.props.clientId;
        window.addEventListener("load", this.uagbTimelineFunc_back(id));
        window.addEventListener("resize", this.uagbTimelineFunc_back(id));
        var time = this;
        $('.edit-post-layout__content').scroll( function(event) {             
            time.uagbTimelineFunc_back(id);
        });
    }
   
    // Js for timeline line and inner line filler.
    uagbTimelineFunc_back(id){
        var timeline            = $('.uagb-timeline').parents('#block-'+id);
        var tm_item             = timeline.find('.uagb-timeline');
        var line_inner          = timeline.find(".uagb-timeline__line__inner");
        var line_outer          = timeline.find(".uagb-timeline__line");
        var $icon_class         = timeline.find(".uagb-timeline-marker");
        if( $icon_class.length > 0){    
            var $card_last          = timeline.find(".uagb-timeline-field:last-child");
            var timeline_start_icon = $icon_class.first().position();
            var timeline_end_icon   = $icon_class.last().position();
            line_outer.css('top', timeline_start_icon.top );

            var timeline_card_height = $card_last.height();
            var last_item_top = $card_last.offset().top - tm_item.offset().top;
            var $last_item, parent_top;
            //var $document           = $('.edit-post-layout__content');
            var $document = $(document);

            if( tm_item.hasClass('uagb-timeline-arrow-center')) {

                line_outer.css('bottom', timeline_end_icon.top );

                parent_top = last_item_top - timeline_start_icon.top;
                $last_item = parent_top + timeline_end_icon.top;

            } else if( tm_item.hasClass('uagb-timeline-arrow-top')) {

                var top_height = timeline_card_height - timeline_end_icon.top;
                line_outer.css('bottom', top_height );

                $last_item = last_item_top;

            } else if( tm_item.hasClass('uagb-timeline-arrow-bottom')) {

                var bottom_height = timeline_card_height - timeline_end_icon.top;
                line_outer.css('bottom', bottom_height );

                parent_top = last_item_top - timeline_start_icon.top;
                $last_item = parent_top + timeline_end_icon.top;
            }

            var num = 0;
            var elementEnd = $last_item + 20;
            //var viewportHeight = $document.height();

            var viewportHeight = document.documentElement.clientHeight;
            var viewportHeightHalf = viewportHeight/2;

            var elementPos = tm_item.offset().top;

            var new_elementPos = elementPos + timeline_start_icon.top;
            
            var photoViewportOffsetTop = new_elementPos - $document.scrollTop();

            if (photoViewportOffsetTop < 0) {
                photoViewportOffsetTop = Math.abs(photoViewportOffsetTop);
            } else {
                photoViewportOffsetTop = -Math.abs(photoViewportOffsetTop);
            }

            if ( elementPos < (viewportHeightHalf) ) {
                if ( (viewportHeightHalf) + Math.abs(photoViewportOffsetTop) < (elementEnd) ) {
                    line_inner.height((viewportHeightHalf) + photoViewportOffsetTop);
                }else{
                    if ( (photoViewportOffsetTop + viewportHeightHalf) >= elementEnd ) {
                        line_inner.height(elementEnd);
                    }
                }
            } else {
                if ( (photoViewportOffsetTop  + viewportHeightHalf) < elementEnd ) {
                    if (0 > photoViewportOffsetTop) {
                        line_inner.height((viewportHeightHalf) - Math.abs(photoViewportOffsetTop));
                        ++num;
                    } else {
                        line_inner.height((viewportHeightHalf) + photoViewportOffsetTop);
                    }
                }else{
                    if ( (photoViewportOffsetTop + viewportHeightHalf) >= elementEnd ) {
                        line_inner.height(elementEnd);
                    }
                }
            }

            //For changing icon background color and icon color.
            var timeline_icon_pos, timeline_card_pos;
            var elementPos, elementCardPos;
            var timeline_icon_top, timeline_card_top;
            var timeline_icon   = timeline.find(".uagb-timeline-marker"),
                animate_border  = timeline.find(".animate-border");

            for (var i = 0; i < timeline_icon.length; i++) {
                timeline_icon_pos = $(timeline_icon[i]).offset().top;
                timeline_card_pos = $(animate_border[i]).offset().top;
                elementPos = timeline.offset().top;
                elementCardPos = timeline.offset().top;

                timeline_icon_top = timeline_icon_pos - $document.scrollTop();
                timeline_card_top = timeline_card_pos - $document.scrollTop();

                if ( ( timeline_card_top ) < ( ( viewportHeightHalf ) ) ) {

                    animate_border[i].classList.remove("out-view");
                    animate_border[i].classList.add("in-view");

                } else {
                    // Remove classes if element is below than half of viewport.
                    animate_border[i].classList.add("out-view");
                    animate_border[i].classList.remove("in-view");
                }

                if ( ( timeline_icon_top ) < ( ( viewportHeightHalf ) ) ) {

                    // Add classes if element is above than half of viewport.
                    timeline_icon[i].classList.remove("out-view-timeline-icon");
                    timeline_icon[i].classList.add("in-view-timeline-icon");

                } else {

                    // Remove classes if element is below than half of viewport.
                    timeline_icon[i].classList.add("out-view-timeline-icon");
                    timeline_icon[i].classList.remove("in-view-timeline-icon");

                }
            }

        }
    }
    
     /* Render output at backend */
    uagb_get_timeline_content(){
        
        const { attributes, setAttributes, latestPosts } = this.props;  

        const {
            headingTag,
            headFontSize,
            headingColor,
            headSpace,
            subHeadFontSize,
            subHeadingColor,
            subHeadSpace,
            backgroundColor,
            timelinAlignment,
            arrowlinAlignment,
            displayPostImage,
            displayPostDate,
            displayPostExcerpt,
            displayPostAuthor,
            displayPostLink,
            exerptLength,
            postsToShow,
            imageSize,
            readMoreText,
            icon,
            iconSize,
            align
        } = attributes;

        var align_class        = '',
            align_item_class   = '';          
        
        /* Style for elements */
        var selector = timelineInlineStyles( this.props ); 

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
            
            var content_align_class = '';
            var day_align_class = '';

            if( timelinAlignment == 'left' ){
                content_align_class = 'uagb-timeline-widget uagb-timeline-left';
                day_align_class = 'uagb-day-new uagb-day-left';
            }else if(timelinAlignment == 'right'){
                content_align_class = 'uagb-timeline-widget uagb-timeline-right';
                day_align_class = 'uagb-day-new uagb-day-right';
            }     
            
            var display_inner_date = false;

            return (<div className = "uagb-days uagb-timeline-infinite-load">                       
                        <style className= "uagb-timeline-css" dangerouslySetInnerHTML={{ __html: selector }}></style>
                            {displayPosts.map((post,index) => {
                                var second_index = 'uagb-'+index;
                                if(timelinAlignment == 'center'){
                                    display_inner_date = true;
                                    if(index % 2 == '0'){
                                        content_align_class = 'uagb-timeline-widget uagb-timeline-right';
                                        day_align_class = 'uagb-day-new uagb-day-right';
                                    }else{
                                        content_align_class = 'uagb-timeline-widget uagb-timeline-left';
                                        day_align_class = 'uagb-day-new uagb-day-left';
                                    }  
                                }   
                                const Tag = this.props.attributes.headingTag;  

                                var icon_class = 'timeline-icon-new out-view-timeline-icon '+icon;  
                                
                                if( displayPostExcerpt && post.excerpt ){
                                    var trimmed_excerpt =  (post.excerpt).split(/\s+/).slice(0,exerptLength).join(" ");
                                }
                                return (
                                    <article className = "uagb-timeline-field animate-border"  key={index}>
                                        <div className = {content_align_class}> 
                                            <div className = "uagb-timeline-marker out-view-timeline-icon">
                                                <i className = {icon_class}></i>
                                            </div>
                                            <div className = {day_align_class}>
                                                <div className="uagb-events-new" style = {{textAlign:align}}>
                                                    <div className="uagb-events-inner-new" style={{ backgroundColor: backgroundColor }}>                                                                
                                                                
                                                                <div className="uagb-timeline-date-hide uagb-date-inner">                                                                
                                                                    { displayPostDate && post.date_gmt &&
                                                                        <div dateTime={ moment( post.date_gmt ).utc().format() } className={ 'inner-date-new' }>
                                                                            { moment( post.date_gmt ).local().format( 'MMMM DD, Y' ) }
                                                                        </div>
                                                                    }  
                                                                </div>                                                            
                                                               
                                                            <div className="uagb-content">
                                                                {
                                                                    displayPostImage && post.featured_image_src !== undefined && post.featured_image_src && imageSize && post.featured_image_src[imageSize] ? (
                                                                        <div className="uagb-block-post-grid-image">
                                                                            <a href={ post.link } target="_blank" rel="bookmark">
                                                                              <img
                                                                                    src={ post.featured_image_src[imageSize][0] }
                                                                                    alt={ decodeEntities( post.title.rendered.trim() ) || __( '(Untitled)' ) }
                                                                                />
                                                                            </a>
                                                                        </div>
                                                                    ) : (
                                                                        null
                                                                    )
                                                                }

                                                                <div className="uagb-timeline-heading-text" style={{                                                                            
                                                                            marginBottom: headSpace + 'px',
                                                                        }}>                                                                    
                                                                    <Tag                                                                        
                                                                        className='uagb-timeline-heading entry-title'                                                                        
                                                                    >
                                                                    <a href={ post.link } target="_blank" rel="bookmark" style={{ 
                                                                            fontSize: headFontSize + 'px',
                                                                            color: headingColor                                                                           
                                                                        }}>   
                                                                    { decodeEntities( post.title.rendered.trim() ) || __( '(Untitled)' ) }                                                                    
                                                                    </a>
                                                                    </Tag>
                                                                </div>

                                                                { displayPostAuthor && post.author_info.display_name &&
                                                                    <div className="uagb-block-post-grid-author"><a className="uagb-text-link" target="_blank" href={ post.author_info.author_link }>{ post.author_info.display_name }</a></div>
                                                                }

                                                                { displayPostExcerpt && post.excerpt &&
                                                                    <div className = "uagb-timeline-desc-content" dangerouslySetInnerHTML={ { __html: trimmed_excerpt } } style={{ 
                                                                    fontSize: subHeadFontSize + 'px',
                                                                    color: subHeadingColor,
                                                                    marginBottom: subHeadSpace + 'px',
                                                                }}/>
                                                                }

                                                                { displayPostLink &&
                                                                    <p><a className="uagb-block-post-link" href={ post.link } target="_blank" rel="bookmark">{ readMoreText }</a></p>
                                                                }                                                                
                                                            <div className="uagb-timeline-arrow"></div>
                                                            </div>
                                                        </div>                                                    
                                                </div>
                                            </div>
                                            { display_inner_date &&
                                                <div className = "uagb-timeline-date-new">                                                                                                   
                                                        { displayPostDate && post.date_gmt &&
                                                            <div dateTime={ moment( post.date_gmt ).utc().format() } className={ 'uagb-date-new' }>
                                                                { moment( post.date_gmt ).local().format( 'MMMM DD, Y' ) }
                                                            </div>
                                                        }                                            
                                                    
                                                </div>
                                            }
                                        </div>
                                    </article> 
                                );
                            })}        
                    </div>);
            }                   
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
            ignore_sticky_posts:1,
        }, ( value ) => ! isUndefined( value ) );
        const categoriesListQuery = {
            per_page: 100,
        };        
        return {
            latestPosts: getEntityRecords( 'postType', 'post', latestPostsQuery ),
            categoriesList: getEntityRecords( 'taxonomy', 'category', categoriesListQuery ),
        };
    
} )( UAGBTimeline );