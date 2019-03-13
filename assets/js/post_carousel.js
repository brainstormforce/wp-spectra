( function( $ ) {

	UAGBPostCarousel = {	

		_setHeight: function( scope ) {
			
			var post_wrapper = scope.find('.slick-slide'),
            post_active = scope.find('.slick-active'),
            max_height = -1,
            wrapper_height = -1,
            post_active_height = -1;


        post_active.each( function( i ) {

            var this_height = $( this ).outerHeight(),
                blog_post = $( this ).find( '.uagb-post__inner-wrap' ),
                blog_post_height = blog_post.outerHeight();

            if( max_height < blog_post_height ) {
                max_height = blog_post_height;
                post_active_height = max_height + 15;
            }

            if ( wrapper_height < this_height ) {
                wrapper_height = this_height
            }
        });

        post_active.each( function( i ) {
            var selector = $( this ).find( '.uagb-post__inner-wrap' );
            selector.animate({ height: max_height }, { duration: 200, easing: 'linear' });
        });

        scope.find('.slick-list.draggable').animate({ height: post_active_height }, { duration: 200, easing: 'linear' });

        max_height = -1;
        wrapper_height = -1;

        post_wrapper.each(function() {

            var $this = jQuery( this ),
                selector = $this.find( '.uagb-post__inner-wrap' ),
                blog_post_height = selector.outerHeight();

            if ( $this.hasClass('slick-active') ) {
                return true;
            }

            selector.css( 'height', blog_post_height );
        });


		},
		
	}


} )( jQuery )
