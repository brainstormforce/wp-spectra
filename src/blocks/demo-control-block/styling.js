/**
 * Returns Dynamic Generated CSS
 */

 import generateCSS from "@Controls/generateCSS"
 import generateCSSUnit from "@Controls/generateCSSUnit"
 
 function styling( props ) {
 
     const {
         block_id,
         textColor,
         titleColor,
         noticeColor,
         contentBgColor,
         noticeDismissColor,
         titleFontFamily,
         titleFontWeight,
         titleFontSizeType,
         titleLineHeightType,
         titleFontSize,
         titleFontSizeTablet,
         titleFontSizeMobile,
         titleLineHeight,
         titleLineHeightTablet,
         titleLineHeightMobile,
         descFontFamily,
         descFontWeight,
         descFontSize,
         descFontSizeType,
         descFontSizeTablet,
         descFontSizeMobile,
         descLineHeight,
         descLineHeightType,
         descLineHeightTablet,
         descLineHeightMobile,
         contentVrPadding,
         contentHrPadding,
         titleVrPadding,
         titleHrPadding,
         tabletPadding,
        mobilePadding,
        padding,
        paddingSize,
				paddingUnit,
				paddingTop,
				paddingBottom,
				paddingLeft,
				paddingRight,
                paddingTopTablet,
				paddingRightTablet,
				paddingBottomTablet,
				paddingLeftTablet,
				paddingTopMobile,
				paddingRightMobile,
				paddingBottomMobile,
				paddingLeftMobile,
         noticeDismiss,
         noticeAlignment,
         layout,
         highlightWidth,
         widthType
     } = props.attributes
 
 
    //  let titleLeftPadding;
    //  let rPadding;
 
    //  if ( noticeDismiss ) {
    //      if( 'left' === noticeAlignment || 'center' === noticeAlignment ){
    //          rPadding = ( titleHrPadding + 13 ) ;
    //          titleLeftPadding = titleHrPadding;
    //      }else{
    //          lPadding = ( titleHrPadding + 13 ) ;
    //          rPadding = titleHrPadding;
    //      }
    //  } else {
    //      lPadding = titleHrPadding;
    //      rPadding = titleHrPadding;
    //  }

    let rPadding = ( undefined !== padding ? padding[ 1 ] : '' )
 
     var tablet_selectors = {}
     var mobile_selectors = {}
 
     var selectors = {
 
         " .rich-text.block-editor-rich-text__editable.uagb-notice-title.keep-placeholder-on-focus" : {
             "font-size": generateCSSUnit( titleFontSize, titleFontSizeType ),
             "font-weight": titleFontWeight,
             "font-family": titleFontFamily,
             "line-height": generateCSSUnit( titleLineHeight, titleLineHeightType ),
             "color": titleColor,
            //  "padding": generateCSSUnit( rPadding, "px" ),
             "padding-left" : generateCSSUnit( paddingLeft, paddingUnit ),
             "padding-right" : generateCSSUnit( paddingRight, paddingUnit ),
             "padding-top" : generateCSSUnit( paddingTop, paddingUnit ),
             "padding-bottom" : generateCSSUnit( paddingBottom, paddingUnit ),
             
         },
 
         " .rich-text.block-editor-rich-text__editable.uagb-notice-text" : {
             "padding-left" : generateCSSUnit( contentHrPadding, paddingUnit ),
             "padding-right" : generateCSSUnit( contentHrPadding, paddingUnit ),
             "padding-top" : generateCSSUnit( contentVrPadding, paddingUnit ),
             "padding-bottom" : generateCSSUnit( contentVrPadding, paddingUnit ),             
         },
         
         " .rich-text.block-editor-rich-text__editable.uagb-notice-text p" : {
             "font-size": generateCSSUnit( descFontSize, descFontSizeType ),
             "font-weight": descFontWeight,
             "font-family": descFontFamily,
             "line-height": generateCSSUnit( descLineHeight, descLineHeightType ),
             "color": textColor,
         },
         
         " span.uagb-notice-dismiss" : {
             "fill": noticeDismissColor,
         },
     }
     
     if("modern" == layout){	
 
         selectors[" .rich-text.block-editor-rich-text__editable.uagb-notice-title.keep-placeholder-on-focus"]["background-color"] = noticeColor
         selectors[" .rich-text.block-editor-rich-text__editable.uagb-notice-title.keep-placeholder-on-focus"]["border-top-right-radius"] = "3px"
         selectors[" .rich-text.block-editor-rich-text__editable.uagb-notice-title.keep-placeholder-on-focus"]["border-top-left-radius"] = "3px"
 
         selectors[" .rich-text.block-editor-rich-text__editable.uagb-notice-text"]["background-color"] = contentBgColor
         selectors[" .rich-text.block-editor-rich-text__editable.uagb-notice-text"]["border"] = "2px solid" + noticeColor
         selectors[" .rich-text.block-editor-rich-text__editable.uagb-notice-text"]["border-bottom-left-radius"] = "3px"
         selectors[" .rich-text.block-editor-rich-text__editable.uagb-notice-text"]["border-bottom-right-radius"] = "3px"
 
 
     }else if("simple" == layout){	
         
         selectors[" .rich-text.block-editor-rich-text__editable.uagb-notice-title.keep-placeholder-on-focus"]["background-color"] = contentBgColor
         selectors[" .rich-text.block-editor-rich-text__editable.uagb-notice-title.keep-placeholder-on-focus"]["border-left"] =  generateCSSUnit( highlightWidth, "px" ) +" solid " + noticeColor
 
         selectors[" .rich-text.block-editor-rich-text__editable.uagb-notice-text"]["background-color"] = contentBgColor
         selectors[" .rich-text.block-editor-rich-text__editable.uagb-notice-text"]["border-left"] =  generateCSSUnit( highlightWidth, "px" ) +" solid " + noticeColor
         
     }
     mobile_selectors = {
         " .rich-text.block-editor-rich-text__editable.uagb-notice-title.keep-placeholder-on-focus" : {
             "font-size": generateCSSUnit( titleFontSizeMobile, titleFontSizeType ),
             "line-height": generateCSSUnit( titleLineHeightMobile, titleLineHeightType ),
             "padding-left" : generateCSSUnit( paddingLeftMobile, paddingUnit ),
             "padding-right" : generateCSSUnit( paddingRightMobile, paddingUnit ),
             "padding-top" : generateCSSUnit( paddingTopMobile, paddingUnit ),
             "padding-bottom" : generateCSSUnit( paddingBottomMobile, paddingUnit ),
         },
         
         " .rich-text.block-editor-rich-text__editable.uagb-notice-text p" : {
             "font-size": generateCSSUnit( descFontSizeMobile, descFontSizeType ),
             "line-height": generateCSSUnit( descLineHeightMobile, descLineHeightType ),
         },
     }
 
     tablet_selectors = { 
             " .rich-text.block-editor-rich-text__editable.uagb-notice-title.keep-placeholder-on-focus" : {
                 "font-size": generateCSSUnit( titleFontSizeTablet, titleFontSizeType ),
                 "line-height": generateCSSUnit( titleLineHeightTablet, titleLineHeightType ),
                 "padding-left" : generateCSSUnit( paddingLeftTablet, paddingUnit ),
                "padding-right" : generateCSSUnit( paddingRightTablet, paddingUnit ),
                "padding-top" : generateCSSUnit( paddingTopTablet, paddingUnit ),
                "padding-bottom" : generateCSSUnit( paddingBottomTablet, paddingUnit ),
             },
 
             " .rich-text.block-editor-rich-text__editable.uagb-notice-text p" : {
                 "font-size": generateCSSUnit( descFontSizeTablet, descFontSizeType ),
                 "line-height": generateCSSUnit( descLineHeightTablet, descLineHeightType ),
             },
     }
 
     var base_selector = `.block-editor-page #wpwrap .uagb-block-${ block_id }`
 
     var styling_css = generateCSS( selectors, base_selector )
 
     styling_css += generateCSS( tablet_selectors, `${base_selector}.uagb-editor-preview-mode-tablet`, true, "tablet" )
 
     styling_css += generateCSS( mobile_selectors, `${base_selector}.uagb-editor-preview-mode-mobile`, true, "mobile" )
 
     return styling_css
 }
 
 export default styling