( function( $ ) {

	$ = jQuery;

	UAGBPostCarousel = {

		_setHeight: function( scope ) {
			var post_wrapper = scope.find(".slick-slide"),
				post_active = scope.find(".slick-slide.slick-active"),
				max_height = -1,
				wrapper_height = -1,
				post_active_height = -1,
				is_background_enabled = scope.parents(".uagb-post-grid").hasClass("uagb-post__image-position-background")

			post_active.each( function( i ) {
				var this_height = $( this ).outerHeight(),
					blog_post = $( this ).find( ".uagb-post__inner-wrap" ),
					blog_post_height = blog_post.outerHeight(),
					post_img_ht = $( this ).find( ".uagb-post__image" ).outerHeight(),
					post_text_ht = $( this ).find( ".uagb-post__text" ).outerHeight()

				if( is_background_enabled ){
					blog_post_height =  post_text_ht
				}else{
					blog_post_height = post_img_ht+ post_text_ht
				}

				if( max_height < blog_post_height ) {
					max_height = blog_post_height
					post_active_height = max_height + 15
				}

				if ( wrapper_height < this_height ) {
					wrapper_height = this_height
				}
			})

			post_active.each( function( i ) {
				var selector = $( this ).find( ".uagb-post__inner-wrap" )
				selector.animate({ height: max_height }, { duration: 200, easing: "linear" })
			})

			scope.find(".slick-list").animate({ height: post_active_height }, { duration: 200, easing: "linear" })

			max_height = -1
			wrapper_height = -1

			post_wrapper.each(function() {

				var $this = jQuery( this ),
					selector = $this.find( ".uagb-post__inner-wrap" ),
					blog_post_height = selector.outerHeight()

				if ( $this.hasClass("slick-active") ) {
					return true
				}

				selector.css( "height", blog_post_height )
			})

		},
		_unSetHeight:function( scope ) {
			var post_wrapper = scope.find(".slick-slide"),
				post_active = scope.find(".slick-active")

			post_active.each( function( i ) {
				var selector = $( this ).find( ".uagb-post__inner-wrap" )
				selector.css( "height", "auto" )
			})

			post_wrapper.each(function() {
				var $this = jQuery( this ),
					selector = $this.find( ".uagb-post__inner-wrap" )
				if ( $this.hasClass("slick-active") ) {
					return true
				}
				selector.css( "height", "auto" )
			})

		},
	}

} )( jQuery )

// Set Carousel Height for Customiser.
function uagb_carousel_height(  id ) {
	var wrap            = jQuery("#block-"+id)
	var scope = wrap.find(".wp-block-uagb-post-carousel").find( ".is-carousel" )
	UAGBPostCarousel._setHeight( scope )
}

// Unset Carousel Height for Customiser.
function uagb_carousel_unset_height(  id ) {
	var wrap            = jQuery("#block-"+id)
	var scope = wrap.find(".wp-block-uagb-post-carousel").find( ".is-carousel" )
	UAGBPostCarousel._unSetHeight( scope )
}