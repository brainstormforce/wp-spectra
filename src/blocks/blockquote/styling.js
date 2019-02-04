/**
 * Set inline styles.
 * @param  {object} props - The block object.
 * @return {object} The inline background type CSS.
 */

function styling( props ) {

	const {
		block_id,
		skinStyle,
		align,	
		authorColor,
		descColor,
		descFontSize,
		descFontSizeType,
		descFontSizeTablet,
		descFontSizeMobile,
		authorFontSize,
		authorFontSizeType,
		authorFontSizeTablet,
		authorFontSizeMobile,
		descSpace,
		authorSpace,	
		borderColor,
		borderStyle,
		borderWidth,
		borderGap,
		verticalPadding,
		quoteColor,
		quoteSize,
		quoteBgColor,
		enableTweet,
		tweetBtnFontSize,
		tweetBtnFontSizeType,
		tweetBtnFontSizeTablet,
		tweetBtnFontSizeMobile,
		tweetLinkColor,
		tweetBtnColor,
		tweetBtnBgColor,
		tweetBtnHoverColor,
		tweetBtnBgHoverColor,
		tweetBtnHrPadding,
		tweetBtnVrPadding,
		tweetIconSpacing,		
		authorImageWidth,
		authorImageSize,
		authorImgBorderRadius,
		quoteBorderRadius,
		quoteTopMargin,
		quoteBottomMargin,
		quoteLeftMargin,
		quoteRightMargin,
		quoteHoverColor,
		quoteBgHoverColor,
		borderHoverColor,	
		quotePadding,
	} = props.attributes

	var content_align ="center"

	if( align == "left" ){
		content_align =" flex-start"
	}
	if( align == "right" ){
		content_align =" flex-end"
	}

	var author_space = authorSpace

	if( align !== "center" || skinStyle == "border" ){
		author_space = 0
	}
	//Set align to left for border style
	var text_align = align

	if( skinStyle == "border" ){
		text_align = "left"
	}

	var selectors = {
		" .editor-rich-text .uagb-blockquote__content.editor-rich-text__tinymce": {
			"font-size": descFontSize + descFontSizeType,
			"color": descColor,
			"margin-bottom": descSpace + "px",
			"text-align": text_align,
		},
		" .editor-rich-text cite.uagb-blockquote__author.editor-rich-text__tinymce": {
			"font-size": authorFontSize + authorFontSizeType,
			"color": authorColor,			
			"text-align": text_align,			
		},
		" .uagb-blockquote__skin-border blockquote.uagb-blockquote":{
			"border-color": borderColor,
			"border-left-style": borderStyle,
			"border-left-width": borderWidth + "px",
			"padding-left": borderGap + "px",
			"padding-top": verticalPadding + "px",
			"padding-bottom": verticalPadding + "px",
		},
		" .uagb-blockquote__skin-border blockquote.uagb-blockquote:hover":{
			"border-left-color": borderHoverColor,
		},
		" .uagb-blockquote__skin-quotation .uagb-quote__icon-wrap":{
			"background"    : quoteBgColor,
			"border-radius" : quoteBorderRadius+"%",
			"margin-top"    : quoteTopMargin + "px",
			"margin-bottom" : quoteBottomMargin + "px",
			"margin-left"   : quoteLeftMargin + "px",
			"margin-right"  : quoteRightMargin + "px",
			"padding"       : quotePadding+"px",
		},
		" .uagb-blockquote__skin-quotation .uagb-quote__icon":{
			"width"         : quoteSize+"px",
			"height"        : quoteSize+"px",
		},	
		" .uagb-blockquote__skin-quotation .uagb-quote__icon svg":{
			"fill"         : quoteColor,
		},
		" .uagb-blockquote__skin-quotation .uagb-quote__icon-wrap:hover":{
			"background"    : quoteBgHoverColor,
		},
		" .uagb-blockquote__skin-quotation .uagb-quote__icon-wrap:hover .uagb-quote__icon svg":{
			"fill"         : quoteHoverColor,
		},		
		" .uagb-quote__style-style_1 .uagb-blockquote":{
			"text-align": align,
		},			
		" .uagb-quote__author-wrap":{
			"margin-bottom": author_space + "px",
		},
		" .uagb-quote__author-image img":{
			"width": authorImageWidth+"px",
			"height": authorImageWidth+"px",
			"border-radius": authorImgBorderRadius+"%"
		}
	}
	
	if( enableTweet ){
		selectors[" a.uagb-blockquote__tweet-button"] = {
			"font-size": tweetBtnFontSize + tweetBtnFontSizeType,				
		}
		selectors[" .uagb-quote__tweet-style-link a.uagb-blockquote__tweet-button"] = {
			"color": tweetLinkColor,		
		}

		selectors[" .uagb-quote__tweet-style-link a.uagb-blockquote__tweet-button svg"] = {
			"fill": tweetLinkColor,		
		}

		selectors[" .uagb-quote__tweet-style-classic a.uagb-blockquote__tweet-button"] = {
			"color": tweetBtnColor,		
			"background-color": tweetBtnBgColor,	
			"padding-left": tweetBtnHrPadding + "px",
			"padding-right": tweetBtnHrPadding + "px",
			"padding-top": tweetBtnVrPadding + "px",
			"padding-bottom": tweetBtnVrPadding + "px",	
		}

		selectors[" .uagb-quote__tweet-style-classic a.uagb-blockquote__tweet-button svg"] = {
			"fill": tweetBtnColor,		
		}

		selectors[" .uagb-quote__tweet-style-bubble a.uagb-blockquote__tweet-button"] = {
			"color": tweetBtnColor,		
			"background-color": tweetBtnBgColor,	
			"padding-left": tweetBtnHrPadding + "px",
			"padding-right": tweetBtnHrPadding + "px",
			"padding-top": tweetBtnVrPadding + "px",
			"padding-bottom": tweetBtnVrPadding + "px",	
		}	
		selectors[" .uagb-quote__tweet-style-bubble a.uagb-blockquote__tweet-button svg"] = {
			"fill": tweetBtnColor,		
		}	

		selectors[" .uagb-quote__tweet-style-bubble a.uagb-blockquote__tweet-button:before"] = {
			"border-right-color": tweetBtnBgColor,		
		}	

		selectors[" .uagb-quote__tweet-icon_text a.uagb-blockquote__tweet-button svg"] = {
			"margin-right": tweetIconSpacing + "px",
			"width": tweetBtnFontSize + tweetBtnFontSizeType,
			"height": tweetBtnFontSize + tweetBtnFontSizeType,
		}	

		// Hover CSS
		selectors[" .uagb-quote__tweet-style-link a.uagb-blockquote__tweet-button:hover"] = {
			"color": tweetBtnHoverColor,		
		}

		selectors[" .uagb-quote__tweet-style-link a.uagb-blockquote__tweet-button:hover svg"] = {
			"fill": tweetBtnHoverColor,		
		}

		selectors[" .uagb-quote__tweet-style-classic a.uagb-blockquote__tweet-button:hover"] = {
			"color": tweetBtnHoverColor,		
			"background-color": tweetBtnBgHoverColor,	
		}

		selectors[" .uagb-quote__tweet-style-classic a.uagb-blockquote__tweet-button:hover svg"] = {
			"fill": tweetBtnHoverColor,		
			"background-color": tweetBtnBgHoverColor,	
		}

		selectors[" .uagb-quote__tweet-style-bubble a.uagb-blockquote__tweet-button:hover "] = {
			"color": tweetBtnHoverColor,		
			"background-color": tweetBtnBgHoverColor,	
		}

		selectors[" .uagb-quote__tweet-style-bubble a.uagb-blockquote__tweet-button:hover svg"] = {
			"fill": tweetBtnHoverColor,		
			"background-color": tweetBtnBgHoverColor,	
		}

		selectors[" .uagb-quote__tweet-style-bubble a.uagb-blockquote__tweet-button:hover:before"] = {
			"border-right-color": tweetBtnBgHoverColor,	
		}
	}

	var t_selectors = {
		" .editor-rich-text .uagb-blockquote__content.editor-rich-text__tinymce": {
			"font-size": descFontSizeTablet + descFontSizeType,
		},
		" .editor-rich-text cite.uagb-blockquote__author.editor-rich-text__tinymce": {
			"font-size": authorFontSizeTablet + authorFontSizeType,
		},
		" a.uagb-blockquote__tweet-button" : {
			"font-size": tweetBtnFontSizeTablet + descFontSizeType,				
		},
		" .uagb-quote__tweet-icon_text a.uagb-blockquote__tweet-button svg" : {
			"width": tweetBtnFontSizeTablet + tweetBtnFontSizeType,
			"height": tweetBtnFontSizeTablet +tweetBtnFontSizeType,
		}	
	}

	var m_selectors = {
		" .editor-rich-text .uagb-blockquote__content.editor-rich-text__tinymce": {
			"font-size": descFontSizeMobile + descFontSizeType,
		},
		" .editor-rich-text cite.uagb-blockquote__author.editor-rich-text__tinymce": {
			"font-size": authorFontSizeMobile + authorFontSizeType,
		},
		" a.uagb-blockquote__tweet-button" : {
			"font-size": tweetBtnFontSizeMobile + descFontSizeType,				
		},
		" .uagb-quote__tweet-icon_text a.uagb-blockquote__tweet-button svg" :{
			"width": tweetBtnFontSizeMobile + tweetBtnFontSizeType,
			"height": tweetBtnFontSizeMobile +tweetBtnFontSizeType,
		}	
	}

	var styling_css = ""

	for( var i in selectors ) {

		styling_css += `#wpwrap .edit-post-visual-editor #uagb-quote-${ props.clientId }`

		styling_css += i + " { "

		var sel = selectors[i]
		var css = ""

		for( var j in sel ) {

			css += j + ": " + sel[j] + ";"
		}

		styling_css += css + " } "
	}

	styling_css += "@media only screen and (max-width: 976px) {"

	for( var i in t_selectors ) {

		styling_css += `.block-editor-page #wpwrap #uagb-quote-${ props.clientId }`

		styling_css += i + " { "

		var sel = t_selectors[i]
		var css = ""

		for( var j in sel ) {

			css += j + ": " + sel[j] + ";"
		}

		styling_css += css + " } "
	}

	styling_css += " }"

	styling_css += "@media only screen and (max-width: 767px) {"

	for( var i in m_selectors ) {

		styling_css += `.block-editor-page #wpwrap #uagb-quote-${ props.clientId }`

		styling_css += i + " { "

		var sel = m_selectors[i]
		var css = ""

		for( var j in sel ) {

			css += j + ": " + sel[j] + ";"
		}

		styling_css += css + " } "
	}

	styling_css += " }"

	return styling_css
}

export default styling
