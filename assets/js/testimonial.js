
window.UAGBTestimonialCarousel = {
	_setHeight( scope ) {

		if( scope.length > 0 ){
			const postWrapper = scope[0].querySelectorAll( '.slick-slide' ),
			postActive = scope[0].querySelectorAll( '.slick-slide.slick-active' );
			let	maxHeight = -1,
				wrapperHeight = -1,
				postActiveHeight = -1;

			Object.keys( postActive ).forEach( ( key ) => {
				const thisHeight = postActive[key].offsetHeight,
				blogPost = postActive[key].querySelector( '.uagb-tm__content' ),

				blogPostHeight = blogPost.offsetHeight;

				if ( maxHeight < blogPostHeight ) {
					maxHeight = blogPostHeight;
					postActiveHeight = maxHeight + 15;
				}

				if ( wrapperHeight < thisHeight ) {
					wrapperHeight = thisHeight;
				}
			} );

			Object.keys( postActive ).forEach( ( key ) => {
				const selector =  postActive[key].querySelector( '.uagb-tm__content' );
				selector.style.height = maxHeight + 'px';
			} );

			let selector = scope[0].querySelector( '.slick-list' );
			selector.style.height = postActiveHeight + 'px';
			maxHeight = -1;
			wrapperHeight = -1;
			Object.keys( postWrapper ).forEach( ( key ) => {
				const $this = postWrapper[key];
				if ( $this.classList.contains( 'slick-active' ) ) {
					return true;
				}

				selector = $this.querySelector( '.uagb-tm__content' );
				const blogPostHeight = selector.offsetHeight;
				selector.style.height = blogPostHeight + 'px';

			} );
		}

	},
	_unSetHeight( scope ) {
		if( scope.length > 0 ){
		const postWrapper = scope[0].querySelectorAll( '.slick-slide' ),
			postActive = scope[0].querySelectorAll( '.slick-slide.slick-active' );

			Object.keys( postActive ).forEach( ( key ) => {
				const selector = postActive[key].querySelector( '.uagb-tm__content' );
				selector.style.height = 'auto';
			} );

			Object.keys( postActive ).forEach( ( key ) => {
				const $this = postWrapper[key];
				if ( $this.classList.contains( 'slick-active' ) ) {
					return true;
				}
				const  selector = $this.querySelector( '.uagb-tm__content' );
				selector.style.height = 'auto';
			} );
		}
	},
}

// Set Carousel Height for Customiser.
function uagb_carousel_height( id ) { // eslint-disable-line no-unused-vars
	const wrap = document.querySelector( '#wpwrap .uagb-slick-carousel.uagb-block-' + id );
	if( wrap ){
		window.UAGBTestimonialCarousel._setHeight( wrap );
	}
}

// Unset Carousel Height for Customiser.
function uagb_carousel_unset_height( id ) { // eslint-disable-line no-unused-vars
	const wrap = document.querySelector( '#wpwrap .uagb-slick-carousel.uagb-block-' + id );
	if( wrap ){
		window.UAGBTestimonialCarousel._unSetHeight( wrap );
	}
}



