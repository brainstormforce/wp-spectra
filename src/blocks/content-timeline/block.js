/**
 * BLOCK: Content Timeline.
 */

import get from 'lodash/get';
import isUndefined from 'lodash/isUndefined';
import pickBy from 'lodash/pickBy';
import moment from 'moment';
import classnames from 'classnames';
//import { stringify } from 'querystringify';

//  Import CSS.
import '../timeline/style.scss';
import './editor.scss';

import UAGBIcon from "../uagb-controlls/UAGBIcon";
import FontIconPicker from '@fonticonpicker/react-fonticonpicker';

// Import css for timeline.
import contentTimelineStyle from './inline-styles'

const { Component, Fragment } = wp.element;

const { __ } = wp.i18n;

const { decodeEntities } = wp.htmlEntities;

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
} = wp.editor

const {
    PanelBody,
    PanelColor,
    SelectControl,
    Placeholder,
    QueryControls,
    RangeControl,
    Spinner,
    TextControl,
    ToggleControl,
    Toolbar,
} = wp.components;

const el = wp.element.createElement;

const item =[];
for (var i = 1; i <= 5; i++) {
	var title_heading_val = 'Timeline Heading '+i;
	var title_desc_val    = 'This is Timeline description, you can change me anytime click here ';
	var temp = [];
	var p = { 'time_heading' : title_heading_val,'time_desc':title_desc_val };
	item.push(p);            
}

//Icon
const iconEl = el('svg', { width: 20, height: 20 },
  el('path', { d: "M1.661 5.463v3.706h13.448l1.16-1.159c0.365-0.365 0.962-0.365 1.327 0l1.16 1.159h1.245v1.661h-1.246l-1.158 1.158c-0.365 0.365-0.962 0.365-1.327 0l-1.159-1.158h-13.449v3.706h1.18l1.16-1.16c0.365-0.365 0.962-0.365 1.327 0l1.16 1.16h13.512v1.661h-13.514l-1.159 1.158c-0.365 0.365-0.961 0.365-1.326 0l-1.159-1.158h-1.181v3.77h-1.661v-19.936h1.661v3.77h5.78l1.16-1.16c0.365-0.365 0.962-0.365 1.327 0l1.16 1.16h8.912v1.661h-8.913l-1.159 1.158c-0.365 0.365-0.961 0.365-1.326 0l-1.16-1.158h-5.781z" } )
);

class UAGBcontentTimeline extends Component {

	constructor() {
        super( ...arguments );

        // Get initial timeline content.
        this.getTimelinecontent = this.getTimelinecontent.bind(this);

        this.getTimelineicon = this.getTimelineicon.bind(this);
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

	render() {

		// Setup the attributes
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
				borderHover,
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
				iconHover,
				iconBgHover
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
                        	}
                        }
                        min={ 1 }
                        max={ 200 }
                        beforeIcon="editor-textcolor"
                        allowReset
                    />                                  
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
                   <RangeControl
                        label={ __( 'Description Bottom Spacing' ) }
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
			 <div className={ className } >                     
                    <div className = { tl_class }>
                        <div className = "uagb-timeline-wrapper">
                            <div className = "uagb-timeline-main">                                
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
        window.addEventListener("load", this.uagbTimelineContent_back(id));
        window.addEventListener("resize", this.uagbTimelineContent_back(id));
        var time = this;
        $('.edit-post-layout__content').scroll( function(event) {            
            time.uagbTimelineContent_back(id);            
        });
    }  

    componentDidUpdate(){
        var id = this.props.clientId;
        window.addEventListener("load", this.uagbTimelineContent_back(id));
        window.addEventListener("resize", this.uagbTimelineContent_back(id));
        var time = this;
        $('.edit-post-layout__content').scroll( function(event) {             
            time.uagbTimelineContent_back(id);
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
            icon,
            align,
            tm_content
        } = attributes;

        var align_class        = '',
            align_item_class   = '';

        /* Style for elements */
        var back_style = contentTimelineStyle( this.props );         
         
        const hasItems = Array.isArray( tm_content ) && tm_content.length;

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
                content_align_class = 'uagb-timeline-widget uagb-timeline-left';
                day_align_class = 'uagb-day-new uagb-day-left';
            }else if(timelinAlignment == 'right'){
                content_align_class = 'uagb-timeline-widget uagb-timeline-right';
                day_align_class = 'uagb-day-new uagb-day-right';
            }     
            let data_copy     = [ ...tm_content ];
            var display_inner_date = false;
            return (
            	<div className = "uagb-days uagb-timeline-infinite-load">
            		<style dangerouslySetInnerHTML={{ __html: back_style }}></style>
            		{ 
            			tm_content.map((post,index) => {
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
                                                        { post.date_gmt &&
                                                            <div dateTime={ moment( post.date_gmt ).utc().format() } className={ 'inner-date-new' }>
                                                                { moment( post.date_gmt ).local().format( 'MMMM DD, Y' ) }
                                                            </div>
                                                        }  
                                                    </div>

                                                    <div className="uagb-content">
                                                    	
                                                    	<div className="uagb-timeline-heading-text" style={{                                                                            
                                                                    marginBottom: headSpace + 'px',
                                                                }}> 
                                                            <RichText
						                                        tagName={ headingTag }
						                                        value={ post.time_heading }
						                                        className='uagb-timeline-heading entry-title'
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

						                                <div className="uagb-timeline-arrow"></div>	

                                                    </div>

                                                </div>
                                        	</div>
                                        </div>

                                        <div className = "uagb-timeline-date-new">                                                                                                   
	                                        { post.date_gmt &&
	                                            <div dateTime={ moment( post.date_gmt ).utc().format() } className={ 'uagb-date-new' }>
	                                                { moment( post.date_gmt ).local().format( 'MMMM DD, Y' ) }
	                                            </div>
	                                        } 
		                                </div>
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
    uagbTimelineContent_back(id){
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
registerBlockType( 'uagb/content-timeline', {

	// Block name. Block names must be string that contains a namespace prefix. Example: my-plugin/my-custom-block.
	title: __( 'Content Timeline - UAGB' ), // Block title.
	description: __( 'Add Content Timeline block.' ), // Block description.
	icon: iconEl, // Block icon from Dashicons → https://developer.wordpress.org/resource/dashicons/.
	keywords: [
		__( 'timeline' ),
		__( 'uagb' ),
	],
	category: 'formatting',

	attributes: {
		tm_content: {
			type: 'array',
			default : item,
		},
		headingTitle: {
			type: 'string',
		},
		headingDesc: {
			type: 'string',
		},
		align : {
			type : 'string',
			default : 'center',
		},			
		headingColor : {
			type : 'string',
			default : '#0693E3',
		},
		subHeadingColor : {
			type : 'string',
			default : '#333',
		},
		separatorBg : {
			type : 'string',
			default : '#eee',
		},
		backgroundColor : {
			type : 'string',
			default : '#eee',
		},
		separatorColor : {
			type : 'string',
			default : '#eee',
		},
        separatorFillColor : {
            type : 'string',
            default : '#61ce70',
        },
		separatorBorder : {
			type : 'string',
			default : '#eee',
		},
		borderHover : {
			type : 'string',
			default : '#5cb85c',
		},
		headingTag : {
			type : 'string',
			default : 'h3',
		},
		horizontalSpace : {
			type : 'number',
			default : 10,
		},
		verticalSpace : {
			type : 'number',
			default : 15,
		},
		headFontSize : {
			type : 'number',
			default : 15,
		},			
		timelinAlignment : {
			type : 'string',
			default : 'center',
		},
		arrowlinAlignment : {
			type : 'string',
			default : 'center',
		},
		subHeadFontSize : {
			type : 'number',
			default : 12,
		},
		headSpace : {
			type : 'number',
			default : 5,
		},
		separatorwidth : {
			type : 'number',
			default : 3,
		},
		borderwidth : {
			type : 'number',
			default : 0,
		},
		iconColor : {
			type : 'string',
			default : '#333',
		},
		iconHover : {
			type : 'string',
			default : '#fff',
		},
		iconBgHover : {
			type : 'string',
			default : '#61ce70',
		},
		authorColor : {
			type : 'string',
			default : '#333',
		},
		authorFontsize : {
			type : 'number',
			default : 12,
		},
		dateColor : {
			type : 'string',
			default : '#333',
		},
		dateFontsize : {
			type : 'number',
			default : 12,
		},
		connectorBgsize : {
			type : 'number',
			default : 35,
		},
		subHeadSpace : {
			type : 'number',
			default : 5,
		},
		authorSpace : {
			type : 'number',
			default : 5,
		},
		dateBottomspace : {
			type : 'number',
			default : 5,
		},
		headFontSize : {
			type : 'number',
			default : 15,
		},	
		tm_block_id  : {
			type : 'string',
			default : '0',
		},
		timelineItem :{
			type : 'number',
			default : 5,
		},
        tm_client_id  : {
            type : 'string',
            default : 'not_set',
        },
		icon : {
			type : 'string',
			default : 'fab fa fa-calendar-alt'
		},
		borderRadius : {
			type : 'number',
			default : 2,
		},
		bgPadding : {
			type : 'number',
			default : 20,
		},
		iconSize : {
			type : 'number',
			default : 12,
		},
	},
	
	edit: UAGBcontentTimeline,
	
	save: function( props ) {
		
		//console.log( 'Save props' );
		console.log( props );

		const {
			headingTitle,
			headingDesc,
			tm_content,
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
			iconHover,
			iconBgHover,
			className
		} = props.attributes;

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
        var tm_block_id_new = 'uagb-'+tm_client_id;
        var tl_class = tm_block_id_new +' '+align_class+' '+responsive_class;
        var block_id = 'uagb-'+tm_client_id;

        var front_style = contentTimelineStyle( props );
        /* Style for elements */
        /*var front_style = '.'+ block_id +'.uagb-timeline--center .uagb-day-right .uagb-timeline-arrow:after,'+                       
                        '.'+ block_id +'.uagb-timeline--right .uagb-day-right .uagb-timeline-arrow:after{'+
                        '  border-left-color:'+backgroundColor+
                        '}'+
                        '.'+ block_id +'.uagb-timeline--center .uagb-day-left .uagb-timeline-arrow:after,'+
                        '.'+ block_id +'.uagb-timeline--left .uagb-day-left .uagb-timeline-arrow:after{'+
                        '  border-right-color:'+backgroundColor+
                        '}'+
                        '.'+ block_id +' .uagb-timeline__line__inner{'+
                            'background-color:'+separatorFillColor+';'+
                        '}'+
                        '.'+ block_id +' .uagb-timeline__line{'+
                            'background-color:'+separatorColor+';'+
                            'width:'+separatorwidth+'px'+';'+                            
                        '}'+
                        '.'+ block_id +'.uagb-timeline--right .uagb-timeline__line{'+
                            'right: calc( '+connectorBgsize+'px / 2 );'+
                        '}'+
                        '.'+ block_id +'.uagb-timeline--left .uagb-timeline__line{'+
                            'left: calc( '+connectorBgsize+'px / 2 );'+
                        '}'+
                        '.'+ block_id +'.uagb-timeline--center .uagb-timeline__line{'+
                            'right: calc( '+connectorBgsize+'px / 2 );'+
                        '}'+
                        '.'+ block_id +' .uagb-timeline-marker{'+
                          'background-color:'+separatorBg+';'+
                          'min-height:'+connectorBgsize+'px;'+
                          'min-width:'+connectorBgsize+'px;'+
                          'line-height:'+connectorBgsize+'px;'+
                          'border:'+borderwidth+'px solid'+separatorBorder+';'+
                        '}'+
                        '.'+ block_id +'.uagb-timeline--left .uagb-timeline-left .uagb-timeline-arrow,'+
                        '.'+ block_id +'.uagb-timeline--right .uagb-timeline-right .uagb-timeline-arrow,'+
                        '.'+ block_id +'.uagb-timeline--center .uagb-timeline-left .uagb-timeline-arrow,'+
                        '.'+ block_id +'.uagb-timeline--center .uagb-timeline-right .uagb-timeline-arrow{'+
                            'height:'+connectorBgsize+'px'+
                        '}'+ 
                        '.'+ block_id +'.uagb-timeline--center .uagb-timeline-marker {'+
                        ' margin-left:'+horizontalSpace+'px;'+
                        ' margin-right:'+horizontalSpace+'px'+
                        '}'+ 
                        '.'+ block_id +' .uagb-timeline-field:not(:last-child){'+
                        ' margin-bottom:'+verticalSpace+'px'+
                        '}'+
                        '.'+ block_id +' .uagb-timeline-date-hide.uagb-date-inner{'+
                        ' margin-bottom:'+dateBottomspace+'px;'+
                        'color:'+dateColor+';'+
                        'font-size:'+dateFontsize+'px;'+
                        '}'+
                        '.'+ block_id +'.uagb-timeline--left .uagb-day-new.uagb-day-left{'+
                        ' margin-left:'+horizontalSpace+'px;'+
                        'color:'+dateColor+';'+
                        'font-size:'+dateFontsize+'px;'+
                        '}'+ 
                        '.'+ block_id +'.uagb-timeline--right .uagb-day-new.uagb-day-right{'+
                        ' margin-right:'+horizontalSpace+'px;'+
                        'color:'+dateColor+';'+
                        'font-size:'+dateFontsize+'px;'+
                        '}'                        
                        +'.'+ block_id +' .uagb-date-new{'+
                        ' font-size:'+dateFontsize+'px;'+
                        'color:'+dateColor+';'+
                        '}'+
                        '.'+ block_id +' .uagb-events-inner-new{'+
                        ' border-radius:'+borderRadius+'px;'+
                        'padding:'+bgPadding+'px;'+
                        '}'
                        +'.'+ block_id +' .uagb-timeline-main .timeline-icon-new{'+
                        ' font-size:'+iconSize+'px;'+
                        'color:'+iconColor+';'+
                        '}'+                         
                        '.'+ block_id +' .uagb-timeline-field.animate-border:hover .uagb-timeline-marker{'+
                        'background:'+iconBgHover+';'+
                        'border-color:'+borderHover+';'+                        
                        '}'+
                        '.'+ block_id +' .uagb-timeline-field.animate-border:hover .timeline-icon-new{'+
                        'color:'+iconHover+';'+
                        '}'+                        
                        '.'+ block_id +' .uagb-timeline-main .uagb-timeline-marker.in-view-timeline-icon{'+
                        'background:'+iconBgHover+';'+
                        'border-color:'+borderHover+';'+
                        '}'+
                        '.'+ block_id +' .uagb-timeline-main .uagb-timeline-marker.in-view-timeline-icon .timeline-icon-new{'+
                        'color:'+iconHover+';'+
                        '}'+
                        '@media(max-width:768px){'+
                        '.'+ block_id +'.uagb-timeline--center .uagb-timeline-marker {'+
                        ' margin-left:0px;'+
                        ' margin-right:0px'+
                        '}'+
                        '.'+ block_id +'.uagb-timeline--center .uagb-day-new.uagb-day-left,'+
                        '.'+ block_id +'.uagb-timeline--center .uagb-day-new.uagb-day-right{'+
                        ' margin-left:'+horizontalSpace+'px;'+
                        '}'+
                        '}';*/
         
        const hasItems = Array.isArray( tm_content ) && tm_content.length;

        var content_align_class = '';
        var day_align_class = '';

        if( timelinAlignment == 'left' ){
            content_align_class = 'uagb-timeline-widget uagb-timeline-left';
            day_align_class = 'uagb-day-new uagb-day-left';
        }else if(timelinAlignment == 'right'){
            content_align_class = 'uagb-timeline-widget uagb-timeline-right';
            day_align_class = 'uagb-day-new uagb-day-right';
        }     
        let data_copy     = [ ...tm_content ];
        var display_inner_date = false;

		return (            
                <div className={ className } >                     
                    <div className = { tl_class }>
                        <div className = "uagb-timeline-wrapper">
                            <div className = "uagb-timeline-main">   
                                <div className = "uagb-days uagb-timeline-infinite-load">
                                	<style dangerouslySetInnerHTML={{ __html: front_style }}></style>
                                	{ 
                        				tm_content.map((post,index) => { 
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
			                                const Tag = headingTag;  
			                                var icon_class = 'timeline-icon-new out-view-timeline-icon '+icon;  
                            					
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
				                                                        { post.date_gmt &&
				                                                            <div dateTime={ moment( post.date_gmt ).utc().format() } className={ 'inner-date-new' }>
				                                                                { moment( post.date_gmt ).local().format( 'MMMM DD, Y' ) }
				                                                            </div>
				                                                        }  
				                                                    </div>

				                                                    <div className="uagb-content">
				                                                        
				                                                        <div className="uagb-timeline-heading-text" style={{                                                                            
				                                                                    marginBottom: headSpace + 'px',
				                                                                }}> 
				                                                            <RichText.Content
				                                                                tagName={ headingTag }
				                                                                value={ post.time_heading }
				                                                                className='uagb-timeline-heading entry-title'				                                                               
				                                                                style={{                                                                   
				                                                                    fontSize: headFontSize + 'px',
				                                                                    color: headingColor,
				                                                                    textAlign:align                                                                    
				                                                                }}
				                                                            />
				                                                        </div>

				                                                        <RichText.Content
				                                                            tagName= "p"
				                                                            value={ post.time_desc }
				                                                            className='uagb-timeline-desc-content'				                                                            
				                                                            style={{                                                                   
				                                                                fontSize: subHeadFontSize + 'px',
				                                                                color: subHeadingColor, 
				                                                                marginBottom: subHeadSpace + 'px', 
				                                                                textAlign:align                                                             
				                                                            }}
				                                                        />

				                                                        <div className="uagb-timeline-arrow"></div> 

				                                                    </div>

				                                                </div>
				                                            </div>
				                                        </div>

				                                        <div className = "uagb-timeline-date-new">                                                                                                   
				                                            { post.date_gmt &&
				                                                <div dateTime={ moment( post.date_gmt ).utc().format() } className={ 'uagb-date-new' }>
				                                                    { moment( post.date_gmt ).local().format( 'MMMM DD, Y' ) }
				                                                </div>
				                                            } 
				                                        </div>
				                                    </div>
				                                </article>
				                            );

                        				})
                        			}
                                </div>
                                <div className = "uagb-timeline__line" >
                                    <div className = "uagb-timeline__line__inner"></div>
                                </div> 
                            </div>
                        </div>
                    </div>
                </div>
        );
	}
} );