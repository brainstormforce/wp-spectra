/**
 * BLOCK: Content Timeline.
 */

import get from 'lodash/get'
import isUndefined from 'lodash/isUndefined'
import moment from 'moment'
import classnames from 'classnames'
import times from 'lodash/times'

import UAGBIcon from "../../../dist/blocks/uagb-controls/UAGBIcon"
import FontIconPicker from '@fonticonpicker/react-fonticonpicker'
import contentTimelineStyle from './inline-styles'
import ContentTmClasses from './classes'

const { Component, Fragment } = wp.element

const { __ } = wp.i18n

const { decodeEntities } = wp.htmlEntities

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
    BlockAlignmentToolbar,
    PanelColorSettings,
} = wp.editor

const {
    PanelBody,
    PanelColor,
    SelectControl,
    Placeholder,
    RangeControl,
    Spinner,
    TextControl,
    ToggleControl,
    Toolbar,
    TabPanel,
} = wp.components;

class UAGBcontentTimeline extends Component {

    constructor() {
        super( ...arguments );

        // Get initial timeline content.
        this.getTimelinecontent = this.getTimelinecontent.bind(this);
        
        this.getDatecontent = this.getDatecontent.bind(this);

        this.getTimelineicon = this.getTimelineicon.bind(this);

        this.savedateArray = this.savedateArray.bind(this);

        this.toggleDisplayPostDate    = this.toggleDisplayPostDate.bind( this );
    }

    /**
     * Function Name: toggleDisplayPostDate.
     */
    toggleDisplayPostDate() {
        const { displayPostDate } = this.props.attributes;
        const { setAttributes } = this.props;

        setAttributes( { displayPostDate: ! displayPostDate } );
    }

    /**
     * [getTimelineicon description]
     * @param  {[type]} value [description]
     * @return {[type]}       [description]
     */
    getTimelineicon(value) { 
        this.props.setAttributes( { icon: value } );
    }

    /**
    * Loading Timeline content.
    */
    getTimelinecontent(value) {  
        const { tm_content, timelineItem } = this.props.attributes;
        const { setAttributes } = this.props;       
        var item_number = value; 
        let data_copy     = [ ...tm_content ];
        let data_length = data_copy.length;
        if( item_number < data_length ){
            var diff = data_length - item_number;
            let data_new = data_copy;
            for( var i= 0; i < diff; i++ ){             
                data_new.pop();
            }           
            setAttributes({tm_content:data_new});

        }if( item_number > data_length ){
            var diff = item_number - data_length;
           
            for( var i= 0; i < diff; i++ ){
                var array_length = data_length+i;
                var title_heading_val = 'My Heading '+item_number;
                var title_desc_val    = 'I am timeline card content. You can change me anytime. Click here to edit this text.';
                data_copy[array_length] = { 'time_heading' : title_heading_val,'time_desc':title_desc_val };
            }
            setAttributes({tm_content:data_copy});  
        } 
        return this.props.attributes.tm_content;
    }  

    getDatecontent(value) {  
             
        const { timelineItem, t_date } = this.props.attributes;
        const { setAttributes } = this.props;       
       
        var item_number = value; 
        let data_copy     = [ ...t_date ];
        let data_length = data_copy.length;

        if( item_number < data_length ){
            var diff = data_length - item_number;
            let data_new = data_copy;
            
            for( var i= 0; i < diff; i++ ){             
                data_new.pop();
            }           
            setAttributes({t_date:data_new});

        }

        if( item_number > data_length ){
            var diff = item_number - data_length;
            
            var today = new Date();
            var dd = today.getDate();
            var mm = today.getMonth()+1;
            
            if(dd<10) {
                dd = '0'+dd
            } 
            if(mm<10) {
                mm = '0'+mm
            } 
                         
            for( var i= 0; i < diff; i++ ){
                var array_length = data_length + i;               
                var yyyy = today.getFullYear() - array_length;
                today = mm + '/' + dd + '/' + yyyy; 
                
                data_copy[array_length] = { 'title' : today };
            }
            setAttributes({t_date:data_copy});    
        }

        return this.props.attributes.t_date;
    }    

    savedateArray( value, index ) {
        const { attributes, setAttributes } = this.props;
        const { t_date } = attributes;

        const newItems = t_date.map( ( item, thisIndex ) => {
            if ( index === thisIndex ) {
                item = { ...item, ...value };
            }

            return item;
        } );

        setAttributes( {
            t_date: newItems,
        } );
    }

    render() {

        // Setup the attributes.
        const {
            isSelected,
            className,
            setAttributes,
            attributes: { 
                tm_content,
                headingTitle,
                headingDesc,
                headingAlign,
                separatorHeight,
                headSpace,
                separatorSpace,
                headingColor,
                subHeadingColor,
                backgroundColor,
                separatorColor,
                separatorFillColor,
                separatorBg,
                separatorBorder,
                borderFocus,
                headingTag,
                headFontSize,
                timelineItem,
                timelinAlignment,
                arrowlinAlignment,
                subHeadFontSize,
                verticalSpace,
                horizontalSpace,
                separatorwidth,
                borderwidth,
                connectorBgsize,
                subHeadSpace,
                dateBottomspace,
                align,
                order,
                orderBy,
                width,
                icon,
                iconColor,
                authorColor,
                dateColor,
                dateFontsize,
                authorFontsize,
                iconSize,
                tm_block_id,
                borderRadius,
                bgPadding,
                tm_client_id,
                iconFocus,
                iconBgFocus,
                iconHover,
                iconBgHover,
                borderHover,
                t_date,
                displayPostDate
            },
        } = this.props;     

        // Parameters for FontIconPicker
        const icon_props = {
          icons: UAGBIcon,
          renderUsing: 'class',
          theme: 'default',
          value: icon,
          onChange: this.getTimelineicon,
          isMulti: false,
        };

        const iconColorSettings = (
            <Fragment>
                <PanelColorSettings
                    title={ __( "Color Settings" ) }
                    initialOpen={ false }
                    colorSettings={ [
                        {
                            value: separatorColor,
                            onChange: ( colorValue ) => setAttributes( { separatorColor: colorValue } ),
                            label: __( "Line Color" ),
                        },
                        {
                            value: iconColor,
                            onChange: ( colorValue ) => setAttributes( { iconColor: colorValue } ),
                            label: __( "Icon Color" ),
                        },
                        {
                            value: separatorBg,
                            onChange: ( colorValue ) => setAttributes( { separatorBg: colorValue } ),
                            label: __( "Background Color" ),
                        },
                        {
                            value: separatorBorder,
                            onChange: ( colorValue ) => setAttributes( { separatorBorder: colorValue } ),
                            label: __( "Border Color" ),
                        },
                    ] }
                    >
                </PanelColorSettings>         
            </Fragment>
        );    

        const iconFocusSettings = (
            <Fragment>
                <PanelColorSettings
                    title={ __( "Color Settings" ) }
                    initialOpen={ false }
                    colorSettings={ [
                        {
                            value: separatorFillColor,
                            onChange: ( colorValue ) => setAttributes( { separatorFillColor: colorValue } ),
                            label: __( "Line Color" ),
                        },
                        {
                            value: iconFocus,
                            onChange: ( colorValue ) => setAttributes( { iconFocus: colorValue } ),
                            label: __( "Icon Color" ),
                        },
                        {
                            value: iconBgFocus,
                            onChange: ( colorValue ) => setAttributes( { iconBgFocus: colorValue } ),
                            label: __( "Background Color" ),
                        },
                        {
                            value: borderFocus,
                            onChange: ( colorValue ) => setAttributes( { borderFocus: colorValue } ),
                            label: __( "Border Color" ),
                        },
                    ] }
                    >
                </PanelColorSettings> 
            </Fragment>
        );   

        const iconHoverSettings = (
            <Fragment>                  
                <PanelColorSettings
                    title={ __( "Color Settings" ) }
                    initialOpen={ false }
                    colorSettings={ [       
                        {
                            value: iconHover,
                            onChange: ( colorValue ) => setAttributes( { iconHover: colorValue } ),
                            label: __( "Icon Color" ),
                        },
                        {
                            value: iconBgHover,
                            onChange: ( colorValue ) => setAttributes( { iconBgHover: colorValue } ),
                            label: __( "Background Color" ),
                        },
                        {
                            value: borderHover,
                            onChange: ( colorValue ) => setAttributes( { borderHover: colorValue } ),
                            label: __( "Border Color" ),
                        },
                    ] }
                    >
                </PanelColorSettings>      
            </Fragment>
        );          

        const iconControls = (
                <Fragment>
                <PanelBody 
                    title={ __( 'Connector Color Settings' ) }
                    initialOpen={ true }
                    >               
                    <TabPanel className="uagb-inspect-tabs uagb-inspect-tabs-col-3"
                        activeClass="active-tab"
                        tabs={ [
                            {
                                name: 'normal',
                                title: __( 'Normal' ),
                                className: 'uagb-normal-tab',
                            },
                            {
                                name: 'focus',
                                title: __( 'Focus' ),
                                className: 'uagb-focus-tab',
                            }, 
                            {
                                name: 'hover',
                                title: __( 'Hover' ),
                                className: 'uagb-hover-tab',
                            },                                  
                        ] }>
                        {
                            ( tabName ) => {
                                let tabout;
                                if( 'focus' === tabName.name ) {
                                    tabout = iconFocusSettings;
                                }else if( 'hover' === tabName.name ){
                                    tabout = iconHoverSettings;
                                }else {
                                    tabout = iconColorSettings;
                                }
                                return <div>{ tabout }</div>;
                            }
                        }
                    </TabPanel> 
                </PanelBody>               
                </Fragment>
            );

        const renderDateSettings = ( index ) => {
            return (
                <Fragment key = {index} >                            
                <TextControl
                    label= { __( 'Date' ) + ' ' + ( index + 1 ) + ' ' + __( 'Settings' ) }
                    value= { t_date[ index ].title }
                    onChange={ value => {
                        this.savedateArray( { title: value }, index );
                    } }
                />
                </Fragment>
            );
        };

        const renderSettings = (
            <Fragment>
                <PanelBody 
                    title={ __( 'Date Settings' ) }
                    initialOpen={ false }
                    >
                <ToggleControl
                        label={ __( 'Display Post Date' ) }
                        checked={ displayPostDate }
                        onChange={ this.toggleDisplayPostDate }
                    />
                
                { displayPostDate && times( timelineItem, n => renderDateSettings( n ) ) }

                { displayPostDate && ( timelinAlignment !=='center' ) && <RangeControl
                        label={ __( 'Date Bottom Spacing' ) }
                        value={ dateBottomspace }
                        onChange={ ( value ) => setAttributes( { dateBottomspace: value } ) }
                        min={ 0 }
                        max={ 50 }
                        beforeIcon="editor-textcolor"
                        allowReset
                    />
                }

                { displayPostDate &&  <Fragment><PanelColor
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
                        max={ 50 }
                        initialPosition={16}
                        beforeIcon="editor-textcolor"
                        allowReset
                    />  
                    </Fragment>                 
                }                
                </PanelBody>     
            </Fragment>
        );

        const content_control = (
            <InspectorControls>               
                <PanelBody 
                    title={ __( 'General' ) }
                    initialOpen={ false }
                    >
                     <RangeControl
                        label={ __( 'Number of Items' ) }
                        value={ timelineItem }
                        onChange={ ( value ) => {
                            setAttributes( { timelineItem: value } );
                            this.getTimelinecontent(value);
                            this.getDatecontent(value);
                            }
                        }
                        min={ 1 }
                        max={ 20 }
                        beforeIcon="editor-textcolor"
                        allowReset
                    />                                                     
                </PanelBody>

                { renderSettings } 

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
                   <RangeControl
                        label={ __( 'Content Bottom Spacing' ) }
                        value={ subHeadSpace }
                        onChange={ ( value ) => setAttributes( { subHeadSpace: value } ) }
                        min={ 0 }
                        max={ 50 }
                        beforeIcon="editor-textcolor"
                        allowReset
                    />                    
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
                    <PanelColorSettings
                        title={ __( "Color Settings" ) }
                        initialOpen={ true }
                        colorSettings={ [       
                            {
                                value: headingColor,
                                onChange: ( colorValue ) => setAttributes( { headingColor: colorValue } ),
                                label: __( "Heading Color" ),
                            },
                            {
                                value: subHeadingColor,
                                onChange: ( colorValue ) => setAttributes( { subHeadingColor: colorValue } ),
                                label: __( "Content Color" ),
                            },
                            {
                                value: backgroundColor,
                                onChange: ( colorValue ) => setAttributes( { backgroundColor: colorValue } ),
                                label: __( "Background Color" ),
                            },
                        ] }
                        >
                    </PanelColorSettings>
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
                        max={ 50 }
                        initialPosition={30}                        
                        beforeIcon="editor-textcolor"
                        allowReset
                    />                    
                    <RangeControl
                        label={ __( 'Content Font Size' ) }
                        value={ subHeadFontSize }
                        onChange={ ( value ) => setAttributes( { subHeadFontSize: value } ) }
                        min={ 10 }
                        max={ 50 }
                        initialPosition={16}   
                        beforeIcon="editor-textcolor"
                        allowReset
                    />                   
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
                    { iconControls }
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
                        label={ __( 'Icon Background Size' ) }
                        value={ connectorBgsize }
                        onChange={ ( value ) => setAttributes( { connectorBgsize: value } ) }
                        min={ 25 }
                        max={ 90 }
                        beforeIcon="editor-textcolor"
                        allowReset
                    />                    
                </PanelBody>
                </InspectorControls>
            );        

        
        /* Arrow position */
        /*var arrow_align_class  = 'uagb-timeline__arrow-top';
        if( arrowlinAlignment == 'center' ){
            arrow_align_class = 'uagb-timeline__arrow-center';
        }else if( arrowlinAlignment == 'bottom' ){
            arrow_align_class = 'uagb-timeline__arrow-bottom';
        } 

        /* Alignmnet */
       /* var align_class = 'uagb-timeline__center '+ arrow_align_class;
        if( timelinAlignment == 'left' ){
            align_class = 'uagb-timeline__left ' + arrow_align_class;
        }else if(timelinAlignment == 'right'){
            align_class = 'uagb-timeline__right '+ arrow_align_class;
        }     

        var responsive_class = 'uagb-timeline__responsive-tablet uagb-timeline';
        var tm_block_id_new = 'uagb-'+this.props.clientId;*/
        var my_block_id = 'uagb-ctm-'+this.props.clientId
        //var tl_class = 'uagb-ctm-'+this.props.clientId

        return (        
            <Fragment>   
            { content_control }            
             <BlockControls>
                <BlockAlignmentToolbar
                    value={ align }
                    onChange={ ( value ) => {
                        setAttributes( { align: value } );
                    } }
                    controls={ [ 'center', 'left','right' ] }
                />               
            </BlockControls>
                <div  className={ classnames(
                    className,
                    "uagb-timeline__outer-wrap"
                ) }
                id = { my_block_id } >                     
                    <div  className = { classnames(
                        "uagb-timeline__content-wrap",
                        ...ContentTmClasses( this.props.attributes ),
                    ) }>
                        <div className = "uagb-timeline-wrapper">
                            <div className = "uagb-timeline__main">                                
                                { this.uagb_get_content_timeline_content() }
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
        //Store client id. 
        this.props.setAttributes( { tm_client_id: this.props.clientId } );

        var id = this.props.clientId;
        window.addEventListener("load", this.timelineContent_back(id));
        window.addEventListener("resize", this.timelineContent_back(id));
        var time = this;
        $('.edit-post-layout__content').scroll( function(event) {            
            time.timelineContent_back(id);            
        });
    }  

    componentDidUpdate(){
        var id = this.props.clientId;
        window.addEventListener("load", this.timelineContent_back(id));
        window.addEventListener("resize", this.timelineContent_back(id));
        var time = this;
        $('.edit-post-layout__content').scroll( function(event) {             
            time.timelineContent_back(id);
        });
    }

    /* Render output at backend */
    uagb_get_content_timeline_content(){
        const { attributes, setAttributes } = this.props;

        const{
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
            displayPostDate,
            icon,
            align,
            tm_content,
            t_date
        } = attributes;

        var align_class        = '',
            align_item_class   = '';

        /* Style for elements */
        var back_style = contentTimelineStyle( this.props );         
         
        const hasItems = Array.isArray( tm_content ) && tm_content.length;
        const hasDate = Array.isArray( t_date ) && t_date.length;

        if ( ! hasItems ) {
            
            return (
                <Fragment>                                            
                    <Placeholder
                        icon="admin-post"
                        label={ __( 'UAGB Content Timeline' ) }
                    >
                        { ! Array.isArray( tm_content ) ?
                            <Spinner /> :
                            __( 'No content found.' )
                        }
                    </Placeholder>
                </Fragment>
            );

        }else{

            var content_align_class = '';
            var day_align_class = '';

            if( timelinAlignment == 'left' ){
                content_align_class = 'uagb-timeline__widget uagb-timeline__left';
                day_align_class = 'uagb-timeline__day-new uagb-timeline__day-left';
            }else if(timelinAlignment == 'right'){
                content_align_class = 'uagb-timeline__widget uagb-timeline__right';
                day_align_class = 'uagb-timeline__day-new uagb-tmimeline__day-right';
            }     
            let data_copy     = [ ...tm_content ];
            var display_inner_date = false;
            return (
                <div className = "uagb-timeline__days uagb-timeline-infinite-load">
                    <style dangerouslySetInnerHTML={{ __html: back_style }}></style>
                    { 
                        tm_content.map((post,index) => {
                            var second_index = 'uagb-'+index;
                                if(timelinAlignment == 'center'){
                                    display_inner_date = true;
                                    if(index % 2 == '0'){
                                        content_align_class = 'uagb-timeline__widget uagb-timeline__right';
                                        day_align_class = 'uagb-timeline__day-new uagb-tmimeline__day-right';
                                    }else{
                                        content_align_class = 'uagb-timeline__widget uagb-timeline__left';
                                        day_align_class = 'uagb-timeline__day-new uagb-timeline__day-left';
                                    }  
                                }   
                                const Tag = this.props.attributes.headingTag;  
                                var icon_class = 'uagb-timeline__icon-new out-view-uagb-timeline__icon '+icon;  

                            return (
                                <article className = "uagb-timeline__field animate-border"  key={index}>
                                    <div className = {content_align_class}> 
                                        
                                        <div className = "uagb-timeline__marker out-view-uagb-timeline__icon">
                                            <span className = {icon_class}></span>
                                        </div>
                                        
                                        <div className = {day_align_class} >
                                            <div className="uagb-events-new" style = {{textAlign:align}}>
                                                <div className="uagb-timeline__events-inner-new" style={{ backgroundColor: backgroundColor }}>                                                                
                                                    <div className="uagb-timeline__date-hide uagb-timeline__date-inner" style = {{textAlign:align}}>                                                                
                                                        { displayPostDate && t_date[index].title &&
                                                            <div dateTime={ moment( t_date[index].title ).utc().format() } className={ 'uagb-timeline__inner-date-new' }>
                                                                { moment( t_date[index].title ).local().format( 'MMMM DD, Y' ) }
                                                            </div>
                                                        }  
                                                    </div>

                                                    <div className="uagb-content">
                                                        
                                                        <div className="uagb-timeline__heading-text" style={{                                                                            
                                                                    marginBottom: headSpace + 'px',
                                                                }}> 
                                                            <RichText
                                                                tagName={ headingTag }
                                                                value={ post.time_heading }
                                                                className='uagb-timeline__heading entry-title'
                                                                onChange={ ( value ) => { 
                                                                    var p = { 'time_heading' : value,'time_desc':data_copy[index]['time_desc'] };
                                                                    data_copy[index] = p;                                       
                                                                    setAttributes( { 'tm_content': data_copy } );                                       
                                                                } }
                                                                style={{                                                                   
                                                                    fontSize: headFontSize + 'px',
                                                                    color: headingColor,
                                                                    textAlign:align                                                                 
                                                                }}
                                                            />
                                                        </div>

                                                        <RichText
                                                            tagName= "p"
                                                            value={ post.time_desc }
                                                            className='uagb-timeline-desc-content'
                                                            onChange={ ( value ) => { 
                                                                    var p = { 'time_heading' : data_copy[index]['time_heading'],'time_desc':value };                                                                    
                                                                    data_copy[index] = p;                                       
                                                                setAttributes( { 'tm_content': data_copy } );                                       
                                                            } }
                                                            style={{                                                                   
                                                                fontSize: subHeadFontSize + 'px',
                                                                color: subHeadingColor, 
                                                                marginBottom: subHeadSpace + 'px',
                                                                textAlign:align                                                             
                                                            }}
                                                        />

                                                        <div className="uagb-timeline__arrow"></div> 

                                                    </div>

                                                </div>
                                            </div>
                                        </div>

                                        { display_inner_date && <div className = "uagb-timeline__date-new">                                                                                                   
                                            { displayPostDate && t_date[index].title &&
                                                <div dateTime={ moment( t_date[index].title ).utc().format() } className={ 'uagb-timeline__date-new' }>
                                                    { moment( t_date[index].title ).local().format( 'MMMM DD, Y' ) }
                                                </div>
                                            } 
                                        </div>
                                        }
                                    </div>
                                </article>
                            );

                        })
                    }
                </div>
            ); 
        }
    }

    /*  Js for timeline line and inner line filler*/
    timelineContent_back(id){
        var timeline            = $('.uagb-timeline').parents('#block-'+id);
        var tm_item             = timeline.find('.uagb-timeline');
        var line_inner          = timeline.find(".uagb-timeline__line__inner");
        var line_outer          = timeline.find(".uagb-timeline__line");
        var $icon_class         = timeline.find(".uagb-timeline__marker");
        if( $icon_class.length > 0){    
            var $card_last          = timeline.find(".uagb-timeline__field:last-child");
            var timeline_start_icon = $icon_class.first().position();
            var timeline_end_icon   = $icon_class.last().position();
            line_outer.css('top', timeline_start_icon.top );

            var timeline_card_height = $card_last.height();
            var last_item_top = $card_last.offset().top - tm_item.offset().top;
            var $last_item, parent_top;
            //var $document           = $('.edit-post-layout__content');
            var $document = $(document);

            if( tm_item.hasClass('uagb-timeline__arrow-center')) {

                line_outer.css('bottom', timeline_end_icon.top );

                parent_top = last_item_top - timeline_start_icon.top;
                $last_item = parent_top + timeline_end_icon.top;

            } else if( tm_item.hasClass('uagb-timeline__arrow-top')) {

                var top_height = timeline_card_height - timeline_end_icon.top;
                line_outer.css('bottom', top_height );

                $last_item = last_item_top;

            } else if( tm_item.hasClass('uagb-timeline__arrow-bottom')) {

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
            var timeline_icon   = timeline.find(".uagb-timeline__marker"),
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
                    timeline_icon[i].classList.remove("out-view-uagb-timeline__icon");
                    timeline_icon[i].classList.add("uagb-timeline__in-view_icon");

                } else {

                    // Remove classes if element is below than half of viewport.
                    timeline_icon[i].classList.add("out-view-uagb-timeline__icon");
                    timeline_icon[i].classList.remove("uagb-timeline__in-view_icon");

                }
            }

        }
    }
}
export default UAGBcontentTimeline