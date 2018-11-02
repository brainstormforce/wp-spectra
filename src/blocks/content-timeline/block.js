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
import classnames from "classnames"
import times from "lodash/times"
import UAGB_Block_Icons from "../../../dist/blocks/uagb-controls/block-icons"
//  Import CSS.
import "./style.scss"
import "./editor.scss"
import attributes from "./attributes"
import edit from "./edit"
import contentTimelineStyle from './inline-styles'
// Components
const { __ } = wp.i18n

// Register block controls
const {
    registerBlockType
} = wp.blocks

const {
    RichText
} = wp.editor

registerBlockType( 'uagb/content-timeline', {

    // Block name. Block names must be string that contains a namespace prefix. Example: my-plugin/my-custom-block.
    title: __( 'Content Timeline - UAGB' ), // Block title.
    description: __( 'Add Content Timeline block.' ), // Block description.
    icon: UAGB_Block_Icons.content_timeline, // Block icon from Dashicons → https://developer.wordpress.org/resource/dashicons/.
    category: "uagb",
    keywords: [
        __( "Content Timeline" ),
        __( "Timeline" ),
        __( "uagb" ),
    ],
    attributes,    
    edit,    
    save: function( props ) {
        
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
            borderFocus,
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
            authorColor,
            dateColor,
            dateFontsize,
            authorFontsize,
            tm_block_id,
            borderRadius,
            bgPadding,
            tm_client_id,
            iconSize,
            icon,
            iconColor,          
            iconFocus,
            borderHover,
            iconBgHover,
            iconHover,
            iconBgFocus,
            className,
            t_date, 
            displayPostDate           
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

        /* Style for elements */
        var front_style = contentTimelineStyle( props );        
        
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
                                                                    <div className="uagb-timeline-date-hide uagb-date-inner" style = {{textAlign:align}}>                                                                
                                                                        { displayPostDate && t_date[index].title &&
                                                                            <div dateTime={ moment( t_date[index].title ).utc().format() } className={ 'inner-date-new' }>
                                                                                { moment( t_date[index].title ).local().format( 'MMMM DD, Y' ) }
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

                                                        { display_inner_date && <div className = "uagb-timeline-date-new">                                                                                                   
                                                            { displayPostDate && t_date[index].title &&
                                                                <div dateTime={ moment( t_date[index].title ).utc().format() } className={ 'uagb-date-new' }>
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