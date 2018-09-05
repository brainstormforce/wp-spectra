/**
 * BLOCK: Atomic Blocks Page Grid
 */

// Import block dependencies and components
import classnames from 'classnames';
import edit from './block';

// Import CSS
import './style.scss';
import './editor.scss';

// Components
const { __ } = wp.i18n; 

// Extend component
const { Component } = wp.element;

const {
    AlignmentToolbar,
    InspectorControls,
    ColorPalette,
    RichText,
    BlockAlignmentToolbar,
    BlockControls,
} = wp.editor;

const { decodeEntities } = wp.htmlEntities;

// Register block controls
const { 
    registerBlockType,
} = wp.blocks;

export const name = 'core/latest-posts';

// Register the block
registerBlockType( 'uagb/timeline', {
    title: __( 'Timeline' ),
    description: __( 'Add a timeline to your page.' ),
    icon: 'grid-view',
    category: 'common',
    keywords: [
        __( 'post' ),
        __( 'grid' ),
        __( 'atomic' ),
    ],

    edit,

    // Render via PHP
    save(props) {
        const {
            tm_post,
            className,
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
        } = props.attributes;

        var align_class        = '',
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

        const isLandscape = imageCrop === 'landscape';

         /* Style for elements */
        var front_style = '.uagb-timeline-container.uagb-tl-item-left .uagb-timeline-content::before {'+
                        '  border-color: transparent transparent transparent '+backgroundColor+
                        '}'+
                        '.uagb-timeline::after{'+
                            'background-color:'+separatorColor+';'+
                            'width:'+separatorwidth+'px'+';'+
                            'margin-left:-'+seperator_margin+'px'+
                        '}'+
                        '.uagb-timeline-container::after{'+
                          'background-color:'+separatorBg+';'+
                          'border-color:'+separatorBorder+
                        '}'+
                        '.uagb-timeline-container.uagb-tl-item-right .uagb-timeline-content::before {'+
                        '  border-color: transparent '+backgroundColor+' transparent transparent'+
                        '}'+ 
                        '.uagb-timeline-container.uagb-tl-item-left {'+
                        ' padding-right:'+horizontalSpace+'px'+
                        '}'+ 
                        '.uagb-timeline-container.uagb-tl-item-right {'+
                        ' padding-left:'+horizontalSpace+'px'+
                        '}'+
                        '.uagb-timeline-container {'+
                        ' padding-top:'+verticalSpace+'px'+
                        '}'+
                        '.uagb-top-arrow .uagb-timeline-container:after{'+
                        ' top:calc(20% + '+vert_per+'px)!important'+
                        '}'+
                        '.uagb-bottom-arrow .uagb-timeline-container:after{'+
                        ' top:calc(80% + '+vert_per+'px)!important'+
                        '}'+ 
                        '.uagb-center-arrow .uagb-timeline-container:after{'+
                        ' top:calc(50% + '+vert_per+'px)!important'+
                        '}' ;

        //console.log(tm_content);
        if( postType == 'general' ){
            return (
                 <div className={ props.className } > 
                    <div className = "uagb-timeline-main">
                       <div className= {align_class} >
                        <style dangerouslySetInnerHTML={{ __html: front_style }}></style>
                        { tm_content.map((post,index) => {  
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
                                    <div key={second_index} className="uagb-timeline-content"  style={{ backgroundColor: backgroundColor }}>
                                        <RichText.Content
                                            tagName={ headingTag }
                                            value={ post.time_heading  }
                                            className='uagb-content-title'
                                            style={{ 
                                            textAlign: headingAlign,
                                            fontSize: headFontSize + 'px',
                                            color: headingColor,
                                            marginBottom: headSpace + 'px',
                                        }}
                                        />
                                        <RichText.Content
                                            tagName="p"
                                            value={ post.time_desc  }
                                            className='uagb-content-description'
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
                        })
                        }
                       </div>
                    </div>
                </div>
            );
        }else{
            if ( tm_post.length === 0 ) {
                return "Hello";
            }else{
                return (
                    <div className={ props.className } > 
                        <div className = "uagb-timeline-main">
                           <div className= {align_class} >
                                <style dangerouslySetInnerHTML={{ __html: front_style }}></style>
                                {  
                                    tm_post.map((post,index) => { 
                                        if(timelinAlignment == 'center'){
                                            if(index % 2 == '0'){
                                                align_item_class = 'uagb-timeline-container uagb-tl-item-left';
                                            }else{
                                                align_item_class = 'uagb-timeline-container uagb-tl-item-right';
                                            }  
                                        } 
                                        return ( 
                                            <div key={index} className = {align_item_class} >
                                                <div key={index} className="uagb-timeline-content" style={{ backgroundColor: backgroundColor }}>
                                                    <article
                                                        key={ index }
                                                        className={ classnames(
                                                            post.featured_image_src && displayPostImage ? 'has-thumb' : 'no-thumb'
                                                        ) }
                                                    >
                                                    {
                                                        displayPostImage && post.featured_image_src !== undefined && post.featured_image_src ? (
                                                            <div className="ab-block-post-grid-image">
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
                                                        <h2 className="entry-title"><a href={ post.link } target="_blank" rel="bookmark">{ decodeEntities( post.title.rendered.trim() ) || __( '(Untitled)' ) }</a></h2>

                                                        <div className="uagb-byline">
                                                            { displayPostAuthor && post.author_info.display_name &&
                                                                <div className="ab-block-post-grid-author"><a className="uagb-text-link" target="_blank" href={ post.author_info.author_link }>{ post.author_info.display_name }</a></div>
                                                            }

                                                            { displayPostDate && post.date_gmt &&
                                                                <time dateTime={ moment( post.date_gmt ).utc().format() } className={ 'ab-block-post-grid-date' }>
                                                                    { moment( post.date_gmt ).local().format( 'MMMM DD, Y' ) }
                                                                </time>
                                                            }
                                                        </div>

                                                        <div className="uagb-timeline-grid-excerpt">
                                                            { displayPostExcerpt && post.excerpt &&
                                                                <div dangerouslySetInnerHTML={ { __html: post.excerpt.rendered } } />
                                                            }

                                                            { displayPostLink &&
                                                                <p><a className="ab-block-post-grid-link ab-text-link" href={ post.link } target="_blank" rel="bookmark">{ readMoreText }</a></p>
                                                            }
                                                        </div>
                                                    </div>
                                                    </article>
                                                </div>
                                            </div> 
                                        );  
                                    })
                                }
                           </div>
                        </div>
                    </div>
                );
            }  
        }        
    },
} );