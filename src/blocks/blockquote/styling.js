/**
 * Set inline styles.
 * @param  {object} props - The block object.
 * @return {object} The inline background type CSS.
 */

function styling( props ) {

	const {
		block_id,
		skinStyle,
		quoteStyle,
		align,	
		authorColor,
		descColor,
		descFontSize,
		authorFontSize,
		descSpace,
		authorSpace,	
		stack,
		borderColor,
		borderStyle,
		borderWidth,
		borderGap,
		verticalPadding,
		quoteColor,
		quoteSize,
		quoteGap,
		quoteBgSize,
		quoteBgColor,
		seperatorWidth,
		seperatorThickness,
		seperatorColor,
		seperatorStyle,
		seperatorSpace,
		enableTweet,
		tweetBtnFontSize,
		tweetLinkColor,
		tweetBtnColor,
		tweetBtnBgColor,
		tweetBtnHoverColor,
		tweetBtnBgHoverColor,
		tweetBtnHrPadding,
		tweetBtnVrPadding,
		tweetIconSpacing,		
		authorImage,
		authorImageWidth,
		authorImageSize,
		authorImgBorderRadius	
	} = props.attributes

	var content_align ="center"

	if( align == 'left' ){
		content_align =" flex-start"
	}
	if( align == 'right' ){
		content_align =" flex-end"
	}

	var author_space = authorSpace;

	if( align !== 'center' ){
		author_space = 0
	}
	//Set align to left for border style
	var text_align = align

	if( skinStyle == 'border' ){
		text_align = 'left'
	}

	var selectors = {
		" .editor-rich-text p.uagb-blockquote__content.editor-rich-text__tinymce": {
			"font-size": descFontSize + "px",
			"color": descColor,
			"margin-bottom": descSpace + "px",
			"text-align": text_align,
		},
		" .editor-rich-text cite.uagb-blockquote__author.editor-rich-text__tinymce": {
			"font-size": authorFontSize + "px",
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
		" .uagb-blockquote__skin-quotation .uagb-quote__icon":{
			"color": quoteColor,
			"font-size": quoteSize+"px",
		},
		" .uagb-quote__style-style_1.uagb-blockquote__skin-quotation .uagb-blockquote__content":{
			"margin-top": quoteGap + "px",
		},		
		" .uagb-quote__style-style_3.uagb-blockquote__skin-quotation .uagb-blockquote__content":{
			"margin-top": quoteGap + "px",
		},
		" .uagb-quote__style-style_1 .uagb-blockquote":{
			"text-align": align,
		},
		" .uagb-quote__style-style_2.uagb-blockquote__skin-quotation .uagb-quote__icon":{
			"margin-right": quoteGap + "px",
			"height":quoteSize+"px",
			"line-height": quoteSize+"px",
		},
		" .uagb-quote__style-style_3.uagb-blockquote__skin-quotation .uagb-quote__icon":{
			"width":quoteSize+"px",
			"height":quoteSize+"px",
			"line-height": quoteSize+"px",
			"background": quoteBgColor,
			"padding": quoteBgSize+"px",
		},		
		" .uagb-quote__style-style_3.uagb-blockquote__skin-quotation .uagb-blockquote__content-wrap":{
			"margin-top": "-"+(quoteSize/2)+"px",
		},
		" .uagb-quote__separator":{
			"width" : seperatorWidth+"%",
			"border-top-width" : seperatorThickness+"px",
			"border-top-color": seperatorColor,
			"border-top-style": seperatorStyle,
		},				
		" .uagb-quote__separator-parent":{
			"justify-content":content_align,
			"margin-bottom":seperatorSpace+"px"
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
		selectors[" .uagb-quote__tweet-style-link a.uagb-blockquote__tweet-button"] = {
			"font-size": tweetBtnFontSize + "px",
			"color": tweetLinkColor,		
		}

		selectors[" .uagb-quote__tweet-style-classic a.uagb-blockquote__tweet-button"] = {
			"font-size": tweetBtnFontSize + "px",
			"color": tweetBtnColor,		
			"background-color": tweetBtnBgColor,	
			"padding-left": tweetBtnHrPadding + "px",
			"padding-right": tweetBtnHrPadding + "px",
			"padding-top": tweetBtnVrPadding + "px",
			"padding-bottom": tweetBtnVrPadding + "px",	
		}

		selectors[" .uagb-quote__tweet-style-bubble a.uagb-blockquote__tweet-button"] = {
			"font-size": tweetBtnFontSize + "px",
			"color": tweetBtnColor,		
			"background-color": tweetBtnBgColor,	
			"padding-left": tweetBtnHrPadding + "px",
			"padding-right": tweetBtnHrPadding + "px",
			"padding-top": tweetBtnVrPadding + "px",
			"padding-bottom": tweetBtnVrPadding + "px",	
		}	

		selectors[" .uagb-quote__tweet-style-bubble a.uagb-blockquote__tweet-button:before"] = {
			"border-right-color": tweetBtnBgColor,		
		}	

		selectors[" .uagb-quote__tweet-icon_text a.uagb-blockquote__tweet-button i"] = {
			"margin-right": tweetIconSpacing + "px",
		}	

		// Hover CSS
		selectors[" .uagb-quote__tweet-style-link a.uagb-blockquote__tweet-button:hover"] = {
			"color": tweetBtnHoverColor,		
		}

		selectors[" .uagb-quote__tweet-style-classic a.uagb-blockquote__tweet-button:hover"] = {
			"color": tweetBtnHoverColor,		
			"background-color": tweetBtnBgHoverColor,	
		}

		selectors[" .uagb-quote__tweet-style-bubble a.uagb-blockquote__tweet-button:hover"] = {
			"color": tweetBtnHoverColor,		
			"background-color": tweetBtnBgHoverColor,	
		}

		selectors[" .uagb-quote__tweet-style-bubble a.uagb-blockquote__tweet-button:hover a.uagb-blockquote__tweet-button:before"] = {
			"border-right-color": tweetBtnBgHoverColor,	
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

	return styling_css
}

export default styling
