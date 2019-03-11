( function( $ ) {

	var scroll = true
	var scroll_offset = 30
	var scroll_delay = 800

	UAGBTableOfContents = {

		init: function() {

			$( document ).delegate( ".uagb-toc__list a", "click", UAGBTableOfContents._scroll )

		},

		/**
		 * Smooth Scroll.
		 */
		_scroll: function( e ) {

			if ( this.hash !== "" ) {
				var hash = this.hash

				if ( scroll ) {

					$( "html, body" ).animate( {
						scrollTop: ( $( hash ).offset().top - scroll_offset )
					}, scroll_delay )
				}

			}
		},

		/**
		 * Alter the_content.
		 */
		_run: function( attr, id ) {

			console.log(attr)

			let mapping = attr.mapping

			if ( undefined != mapping ) {
				for ( var i = 0; i < mapping.length; i++ ) {

					let text = mapping[i][0]
					text = text.replace( "<h" + mapping[i][2] + ">", "" )
					text = text.replace( "</h" + mapping[i][2] + ">", "" )

					let text_without_chars = text.replace(/[^\w\s]/gi, "")
					let href_link = text_without_chars.split(" ").join("_")
					let heading_selector = $( "h" + mapping[i][2] + ":contains(\"" + text + "\")" )

					heading_selector.html( "<span class='uagb-toc__heading-link' id='" + href_link + "'>" + text + "</span>" )
				}

				scroll = attr.smoothScroll
				scroll_offset = attr.smoothScrollOffset
				scroll_delay = attr.smoothScrollDelay
			}
		},
	}

	$( document ).ready(function() {
		UAGBTableOfContents.init()
	})


} )( jQuery )
