/**
 * BLOCK: Columns - Editor Render.
 */

 import classnames from "classnames"
 import shapes from "./shapes"
 import memoize from "memize"
 import times from "lodash/times"
 
 const ALLOWED_BLOCKS = [ "uagb/column" ]
 const {
     InnerBlocks
 } = wp.blockEditor
 
 const getColumnsTemplate = memoize( ( columns ) => {
     return times( columns, n => [ "uagb/column", { id: n + 1 } ] )
 } )
 export default function renderColumns( props ) {
 
     var { 
         attributes, 
         isSelected, 
         className, 
         deviceType,
     } = props
 
     var {
         stack,
         align,
         vAlign,
         tag,
         columnGap,
         backgroundType,
         backgroundVideo,
         columns,
         bottomType,
         topType,
         bottomFlip,
         topFlip,
         reverseTablet,
         reverseMobile,
         topContentAboveShape,
         bottomContentAboveShape,
     } = attributes
 
     const top_divider_html = (
         topType != "none" && (
             <div
                 className={ classnames(
                     "uagb-columns__shape",
                     "uagb-columns__shape-top",
                     { "uagb-columns__shape-flip": topFlip === true },
                     { "uagb-columns__shape-above-content": topContentAboveShape === true }
                 ) }>
                 {shapes[topType]}
             </div>
         )
     )
 
     const bottom_divider_html = (
         bottomType != "none" && (
             <div
                 className={ classnames(
                     "uagb-columns__shape",
                     "uagb-columns__shape-bottom",
                     { "uagb-columns__shape-flip": bottomFlip === true },
                     { "uagb-columns__shape-above-content": bottomContentAboveShape === true }
                 ) }
                 data-negative="false">
                 {shapes[bottomType]}
             </div>
         )
     )
 
     const reverse_tablet = ( reverseTablet ) ? "uagb-columns__reverse-tablet" : ""
 
     const reverse_mobile = ( reverseMobile ) ? "uagb-columns__reverse-mobile" : ""
     
     const CustomTag = `${tag}`
 
     let active = ( isSelected ) ? "active" : "not-active"
 
     return (
         <CustomTag
             className={ classnames(
                 className,
                 "uagb-columns__wrap",
                 `uagb-columns__background-${backgroundType}`,
                 `uagb-columns__edit-${ active }`,
                 `uagb-editor-preview-mode-${deviceType.toLowerCase()}`,
                 `uagb-columns__stack-${stack}`,
                 `uagb-columns__valign-${vAlign}`,
                 `uagb-columns__gap-${columnGap}`,
                 `align${ align }`,
                 reverse_tablet,
                 reverse_mobile,
                 `uagb-block-${props.clientId.substr( 0, 8 )}`,
                 `uagb-columns__columns-${columns}`
             ) }
         >
             <div className="uagb-columns__overlay"></div>
             { top_divider_html }
             { "video" == backgroundType &&
                 <div className="uagb-columns__video-wrap">
                     {  backgroundVideo &&
                         <video autoPlay loop muted playsinline>
                             <source src={ backgroundVideo.url } type='video/mp4' />
                         </video>
                     }
                 </div>
             }
                 <InnerBlocks
                     template={ getColumnsTemplate( columns ) }
                     templateLock="all"
                     allowedBlocks={ ALLOWED_BLOCKS }
                 />
             { bottom_divider_html }
         </CustomTag>
     )
 }