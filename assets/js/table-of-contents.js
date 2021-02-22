( function( $ ) {

	var scroll = true
	var scroll_offset = 30
	var scroll_delay = 800
	var scroll_to_top = false
	var scroll_element = null

	var parseTocSlug = function( slug ) {

		// If not have the element then return false!
		if( ! slug ) {
			return slug;
		}

		var parsedSlug = slug.toString().toLowerCase()
			.replace(/\…+/g,'')                             // Remove multiple …
			.replace(/&(amp;)/g, '')					 	// Remove &
			.replace(/&(mdash;)/g, '')					 	// Remove long dash
			.replace(/\u2013|\u2014/g, '')				 	// Remove long dash
			.replace(/[&]nbsp[;]/gi, '-')                	// Replace inseccable spaces
			.replace(/\s+/g, '-')                        	// Replace spaces with -
			.replace(/[&\/\\#,^!+()$~%.\[\]'":*?<>{}@‘’”“|]/g, '')  // Remove special chars
			.replace(/\-\-+/g, '-')                      	// Replace multiple - with single -
			.replace(/^-+/, '')                          	// Trim - from start of text
			.replace(/-+$/, '');                         	// Trim - from end of text

		return decodeURI( encodeURIComponent( parsedSlug ) );
	};


	UAGBTableOfContents = {

		init: function() {

			$( document ).delegate( ".uagb-toc__list a", "click", UAGBTableOfContents._scroll )
			$( document ).delegate( ".uagb-toc__scroll-top", "click", UAGBTableOfContents._scrollTop )
			$( document ).delegate( '.uagb-toc__title-wrap', 'click', UAGBTableOfContents._toggleCollapse )
			$( document ).on( "scroll", UAGBTableOfContents._showHideScroll  )

		},

		_toggleCollapse: function( e ) {
			if ( $( this ).find( '.uag-toc__collapsible-wrap' ).length > 0 ) {
				let $root = $( this ).closest( '.wp-block-uagb-table-of-contents' )

				if ( $root.hasClass( 'uagb-toc__collapse' ) ) {
					$root.removeClass( 'uagb-toc__collapse' );
				} else {
					$root.addClass( 'uagb-toc__collapse' );
				}
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

					var offset = $( decodeURIComponent( hash ) ).offset()

					if ( "undefined" != typeof offset ) {

						$( "html, body" ).animate( {
							scrollTop: ( offset.top - scroll_offset )
						}, scroll_delay )
					}
				}

			}
		},

		/**
		 * Alter the_content.
		 */
		_run: function( attr, id ) {

			var $this_scope = $( id );

			if ( $this_scope.find( '.uag-toc__collapsible-wrap' ).length > 0 ) {
				$this_scope.find( '.uagb-toc__title-wrap' ).addClass( 'uagb-toc__is-collapsible' );
			}
			
			var allowed_h_tags = [];
			
			if ( undefined !== attr.mappingHeaders ) {

				attr.mappingHeaders.forEach(function(h_tag, index) { (h_tag === true ? allowed_h_tags.push('h' + (index+1)) : null);});
				var allowed_h_tags_str = ( null !== allowed_h_tags ) ? allowed_h_tags.join( ',' ) : '';
			}

			var all_header = ( undefined !== allowed_h_tags_str && '' !== allowed_h_tags_str ) ? $( 'body' ).find( allowed_h_tags_str ) : $( 'body' ).find('h1, h2, h3, h4, h5, h6' );
			var TOC = '';
			var level = 0;

			if ( 0 !== all_header.length ) {
	
				all_header.each( function (){
					let header = $( this );
					let header_text = parseTocSlug(header.text());
					$( this ).before('<span id="'+ header_text +'" class="uag-toc__heading-anchor"></span>');					
				});				
			}

			var header_array = $( 'div.entry-content' ).find( all_header )
			// console.log(header_array)
			if ( 0 !== header_array.length ) {
			header_array.each( function (index){
				let header = $( this );
				// .includes('uagb-advanced-heading')
				// let heading_className = ( typeof header[index].className !== 'undefined' ) ? header[index].className : header[index].parentNode.className;
				// let heading_className = ( header[0].parentNode.className.includes('uagb-advanced-heading') ) ? header[0].parentNode.className : header[0].className;
				// console.log(attr);
				// console.log(header[0].className);
				console.log(header.parents('.uagb-toc-hide-heading'));
				// console.log(heading_className)
				// let exclude_heading = '';
				// if( heading_className ){
				// 	if( typeof heading_className !== 'undefined' ){
				// 		exclude_heading = heading_className.includes('uagb-toc-hide-heading');
				// 		// console.log(exclude_heading);
				// 	}
				// }
				
				// console.log(header_array.parentNode.children[2]); //header[0].parentElement.className.includes('uagb-toc-hide-heading');
				let header_text = parseTocSlug(header.text());
				// $( this ).before('<span id="'+ header_text +'" class="uag-toc__heading-anchor"></span>');
				// let exclude_heading = header[0].className.includes('uagb-toc-hide-heading');
				// if ( !exclude_heading ) {

						var openLevel = header[0].nodeName.replace(/^H+/, '');
						var titleText = header.text();

						// console.log(header[0].nodeName.replace(/^H+/, ''))
					
					if (openLevel > level) {
						TOC += (new Array(openLevel - level + 1)).join("<ul class='uagb-toc__list'>");
					} else if (openLevel < level) {
						TOC += (new Array(level - openLevel + 1)).join("</ul>");
					}
					level = parseInt(openLevel);
					TOC +=  "<li><a href='#" + header_text + "'>" + titleText + "</a></li>";
					
				// }					
			});
		} else{
			TOC +=  "<p class='uagb_table-of-contents-placeholder'>" + 'Add a header to begin generating the table of contents' + "</p>";
		}

			$(".uagb-toc__list-wrap").prepend(TOC);

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
