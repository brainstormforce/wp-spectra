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
		enableTweet,
		tweetBtnColor,
		tweetBtnHoverColor,
		descFontSize,
		authorFontSize,
		tweetBtnFontSize,	
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
	} = props.attributes

	var selectors = {
		" .editor-rich-text p.uagb-blockquote__content.editor-rich-text__tinymce": {
			"font-size": descFontSize + "px",
			"color": descColor,
			"margin-bottom": descSpace + "px",
			"text-align": align,
		},
		" .editor-rich-text cite.uagb-blockquote__author.editor-rich-text__tinymce": {
			"font-size": authorFontSize + "px",
			"color": authorColor,
			"margin-bottom": authorSpace + "px",
			"text-align": align,			
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
			"margin-bottom":seperatorSpace+"px"
		},	
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
