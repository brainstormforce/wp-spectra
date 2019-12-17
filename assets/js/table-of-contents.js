( function( $ ) {

	var scroll = true
	var scroll_offset = 30
	var scroll_delay = 800
	var scroll_to_top = false
	var scroll_element = null

	UAGBTableOfContents = {

		headingsData: [],
		listItemPointer: 0,

		init: function() {

			$( document ).delegate( ".uagb-toc__list a", "click", UAGBTableOfContents._scroll )
			$( document ).delegate( ".uagb-toc__scroll-top", "click", UAGBTableOfContents._scrollTop )
			$( document ).delegate( '.uag-toc__collapsible-wrap', 'click', UAGBTableOfContents._toggleCollapse )
			$( document ).on( "scroll", UAGBTableOfContents._showHideScroll  )

		},

		_toggleCollapse: function( e ) {
			let $root = $( this ).closest( '.wp-block-uagb-table-of-contents' )

			if ( $root.hasClass( 'uagb-toc__collapse' ) ) {
				$root.removeClass( 'uagb-toc__collapse' );
			} else {
				$root.addClass( 'uagb-toc__collapse' );
			}
		},

		_showHideScroll: function( e ) {

			if ( null != scroll_element ) {

				if ( jQuery( window ).scrollTop() > 300 ) {
					if ( scroll_to_top ) {
						scroll_element.addClass( "uagb-toc__show-scroll" )
					} else {
						scroll_element.removeClass( "uagb-toc__show-scroll" )
					}
				} else {
					scroll_element.removeClass( "uagb-toc__show-scroll" )
				}
			}
		},

		/**
		 * Smooth To Top.
		 */
		_scrollTop: function( e ) {

			$( "html, body" ).animate( {
				scrollTop: 0
			}, scroll_delay )
		},

		/**
		 * Smooth Scroll.
		 */
		_scroll: function( e ) {

			if ( this.hash !== "" ) {

				var hash = this.hash
				var node = $( this ). closest( '.wp-block-uagb-table-of-contents' )

				scroll = node.data( 'scroll' )
				scroll_offset = node.data( 'offset' )
				scroll_delay = node.data( 'delay' )

				if ( scroll ) {

					var offset = $( hash ).offset()

					if ( "undefined" != typeof offset ) {

						$( "html, body" ).animate( {
							scrollTop: ( offset.top - scroll_offset )
						}, scroll_delay )
					}
				}

			}
		},

		_parseEntity: function( text ) {

			let charEntity = [ "&amp;", "&gt;", "&lt;", "&quot;", "&#39;" ]

			for ( var k = 0 ; k < charEntity.length; k++ ) {
				text = text.split(charEntity[k]).join("")
			}

			text = text.replace(/[&\/\\#,+()$~%.'":*?<>{}]/g, "")

			return text
		},

		_parse: function( match ) {


			let text = match[0]

			text = text.replace( "<h" + match[2] + ">", "" )
			text = text.replace( "</h" + match[2] + ">", "" )

			let text_without_chars = UAGBTableOfContents._parseEntity( text )

			let link_text = text_without_chars.replace(/  */g,"_")

			return link_text
		},

		_generateHTML: function( level ) {

			// var settings = this.getSettings(),
			//     elementSettings = this.getElementSettings(),
			//     icon = this.getElementSettings('icon');

			// Open new list/nested list
			var html = '<ul class="uagb-toc__list">';

			console.log(UAGBTableOfContents.listItemPointer);

			// for each list item, build its markup.
			while (UAGBTableOfContents.listItemPointer < UAGBTableOfContents.headingsData.length) {
				var currentItem = UAGBTableOfContents.headingsData[UAGBTableOfContents.listItemPointer];

				console.log(currentItem);

				var listItemTextClasses = '';

				if (0 === currentItem.level) {
					// If the current list item is a top level item, give it the first level class
					listItemTextClasses += ' ' + 'uag-level-1';
				}

				if (level > currentItem.level) {
					break;
				}

				if (level === currentItem.level) {
					html += '<li>';

					html += '<div>';

					var liContent = '<a href="#uagb-toc__heading-anchor-' + UAGBTableOfContents.listItemPointer + '">' + currentItem.text + '</a>';

					// If list type is bullets, add the bullet icon as an <i> tag
					// if ('bullets' === elementSettings.marker_view && icon) {
					// 	liContent = '<i class="' + icon.value + '"></i>' + liContent;
					// }

					html += liContent;

					html += '</div>';

					UAGBTableOfContents.listItemPointer++;

					var nextItem = UAGBTableOfContents.headingsData[UAGBTableOfContents.listItemPointer];

					if (nextItem && level < nextItem.level) {
						// If a new nested list has to be created under the current item,
						// this entire method is called recursively (outside the while loop, a list wrapper is created)
						html += UAGBTableOfContents._generateHTML(nextItem.level);
					}

					html += '</li>';
				}
			}

			html += '</ul>';

			return html;
		},

		/**
		 * Alter the_content.
		 */
		_run: function( attr, id ) {

			// var excludedSelectors = [];

			// $elements = jQuery( 'body' ).find( 'h3,h4,h5' ).not( 'h2' ).filter(function (index, heading) {
			// 	return !jQuery(heading).closest(excludedSelectors).length; // Handle excluded selectors if there are any
			// });

			// var headingsData = [];

			// // Create an array for simplifying TOC list creation
			// $elements.each(function (index, element) {
			// 	headingsData.push({ tag: +element.nodeName.slice(1), text: element.innerText });
			// });

			// UAGBTableOfContents.headingsData = headingsData;

			// UAGBTableOfContents.headingsData.forEach(function (heading, index) {
			// 	heading.level = 0;

			// 	for (var i = index - 1; i >= 0; i--) {
			// 		var currentOrderedItem = UAGBTableOfContents.headingsData[i];

			// 		if (currentOrderedItem.tag <= heading.tag) {
			// 			heading.level = currentOrderedItem.level;

			// 			if (currentOrderedItem.tag < heading.tag) {
			// 				heading.level++;
			// 			}

			// 			break;
			// 		}
			// 	}
			// });

			// console.log( UAGBTableOfContents._generateHTML(0) )

			// jQuery( '.uagb-toc__list-wrap' ).html( UAGBTableOfContents._generateHTML(0) );

			// $elements.before(function (index) {


			// 	var anchor = jQuery( $elements[index] ).text()
			// 					.toString()
			// 					.toLowerCase()
			// 					.replace(/( |<.+?>|&nbsp;)/g, '-');
			// 	return '<span id="' + anchor + '-' + index + '" class="uag-some-class"></span>';
			// });

			scroll_to_top = attr.scrollToTop

			scroll_element = $( ".uagb-toc__scroll-top" )
			if ( 0 == scroll_element.length ) {
				$( "body" ).append( "<div class=\"uagb-toc__scroll-top dashicons dashicons-arrow-up-alt2\"></div>" )
				scroll_element = $( ".uagb-toc__scroll-top" )
			}

			if ( scroll_to_top ) {
				scroll_element.addClass( "uagb-toc__show-scroll" )
			} else {
				scroll_element.removeClass( "uagb-toc__show-scroll" )
			}

			UAGBTableOfContents._showHideScroll()
		},
	}

	$( document ).ready(function() {
		UAGBTableOfContents.init()
	})


} )( jQuery )
