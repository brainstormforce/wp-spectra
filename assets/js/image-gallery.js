
let spectraImageGalleryLoadStatus  = true;

UAGBImageGalleryMasonry = {
	init( $attr, $selector ) {
		let count = 2;
		const windowHeight50 = window.innerHeight / 1.25;
		let $scope = document.querySelector( $selector );
		const loader = $scope.querySelector( '.uag-image-gallery__control-loader' );
		const loadButton = $scope.querySelector( '.uag-image-gallery__control-button' );
		if ( $attr.feedPagination && $attr.paginateUseLoader ) {
			window.addEventListener( 'scroll', function() {
				let mediaItem = $scope.querySelector( '.uag-image-gallery-media-wrapper' );
				if ( ! mediaItem ) {
					mediaItem = $scope
				}
				const boundingClientRect = mediaItem.lastElementChild.getBoundingClientRect();
				const offsetTop = boundingClientRect.top + window.scrollY;
				if ( window.pageYOffset + windowHeight50 >= offsetTop ) {
					const $args = {
						page_number: count,
					};
					const total = $attr.gridPages;
					if ( spectraImageGalleryLoadStatus ) {
						if ( count > total ) {
							loader.style.display = 'none';
						}
						if ( count <= total ) {
							UAGBImageGalleryMasonry.callAjax(
								$scope,
								$args,
								$attr,
								false,
								count
							);
							count++;
							spectraImageGalleryLoadStatus = false;
						}
					}
				}
			} );
		}
		else if ( $attr.feedPagination && ! $attr.paginateUseLoader ) {
			loadButton.onclick = function () {
				const total = $attr.gridPages;
				const $args = {
					total,
					page_number: count,
				};
				loadButton.classList.toggle( 'disabled' );
				if ( spectraImageGalleryLoadStatus ) {
					if ( count <= total ) {
						UAGBImageGalleryMasonry.callAjax(
							$scope,
							$args,
							$attr,
							true,
							count
						);
						count++;
						spectraImageGalleryLoadStatus = false;
					}
				}
			};
		}
	},

	createElementFromHTML( htmlString ) {
		const htmlElement = document.createElement( 'div' );
		const htmlCleanString = htmlString.replace( /\s+/gm, ' ' ).replace( /( )+/gm, ' ' ).trim();
		htmlElement.innerHTML = htmlCleanString;
		//console.log( `%c${ htmlElement.innerHTML }`, 'color: lime; font-weight: bold; font-family: Raleway;' );
		return htmlElement;
	},

	callAjax( $scope, $obj, $attr, append = false, count ) {
		const mediaData = new FormData(); // eslint-disable-line no-undef
		mediaData.append( 'action', 'uag_load_image_gallery_masonry' );
		mediaData.append( 'nonce', uagb_image_gallery.uagb_image_gallery_masonry_ajax_nonce );
		mediaData.append( 'page_number', $obj.page_number );
		mediaData.append( 'attr', JSON.stringify( $attr ) );
		fetch( uagb_image_gallery.ajax_url, { // eslint-disable-line no-undef
			method: 'POST',
			credentials: 'same-origin',
			body: mediaData,
		} )
		.then( ( resp ) => { 
			console.log( resp );
			return resp.json()
		} )
		.then( function( data ) {
			let element = $scope.querySelector( '.uag-image-gallery__layout--masonry' );
			if ( ! element ) {
				element = $scope;
			}
			// console.log( `%c${ element }`, 'color: orange; font-weight: bold; font-family: Raleway;' );
			const isotope = new Isotope( element, { // eslint-disable-line no-undef
				itemSelector: '.uag-image-gallery-media-wrapper',
				stagger: 10,
			} );
			isotope.insert( UAGBImageGalleryMasonry.createElementFromHTML( data.data ) );
			imagesLoaded( element ).on( 'progress', function() {
				isotope.layout();
			});
			spectraImageGalleryLoadStatus = true;
			if ( true === append ) {
				$scope.querySelector( '.uag-image-gallery__control-button' ).classList.toggle( 'disabled' );
			}
			if ( count === parseInt( $obj.total ) ) {
				$scope.querySelector( '.uag-image-gallery__control-button' ).style.opacity = 0;
				setTimeout( () => {
					$scope.querySelector( '.uag-image-gallery__control-button' ).parentElement.style.display = 'none';
				}, 2000);
			}
		} )
		.catch( function( error ) {
			console.error( `%c${ error }`, 'color: turquoise; font-weight: bold; font-family: Raleway;' ); // eslint-disable-line no-console
		} );
	}
};

UAGBImageGalleryPagedGrid = {
	init( $attr, $selector ) {
		let count = 1;
		let $scope = document.querySelector( $selector );
		const arrows = $scope.querySelectorAll( '.uag-image-gallery__control-arrows--grid' );
		const dots = $scope.querySelectorAll( '.uag-image-gallery__control-dot' );
		for ( let i = 0; i < arrows.length; i++ ) {
			arrows[ i ].addEventListener( 'click', ( event ) => {
				const thisArrow = event.currentTarget;
				let page = count;
				switch ( thisArrow.getAttribute( 'data-direction' ) ) {
					case 'Prev':
						--page;
						break;
					case 'Next':
						++page;
						break;
				}
				let mediaItem = $scope.querySelector( '.uag-image-gallery-media-wrapper' );
				if ( ! mediaItem ) {
					mediaItem = $scope
				}
				const total = $attr.gridPages;
				const $args = {
					page_number: page,
					total,
				};
				if ( page === total || page === 1 ) {
					thisArrow.disabled = true;
				}
				else{
					arrows.forEach( ( ele ) => {
						ele.disabled = false;
					} );
				}
				if ( page <= total && page >= 1 ) {
					UAGBImageGalleryPagedGrid.callAjax(
						$scope,
						$args,
						$attr,
						arrows,
					);
					count = page;
				}
			} );
		}
		// console.log( `%c${ dots.length }`, 'color: blueviolet; font-weight: bold; font-family: Raleway;' );
		for ( let i = 0; i < dots.length; i++ ) {
			dots[ i ].addEventListener( 'click', ( event ) => {
				// console.log( `%cThis Works`, 'color: crimson; font-weight: bold; font-family: Raleway;' );
				const thisDot = event.currentTarget;
				let page = thisDot.getAttribute( 'data-go-to' );
				let mediaItem = $scope.querySelector( '.uag-image-gallery-media-wrapper' );
				if ( ! mediaItem ) {
					mediaItem = $scope
				}
				const $args = {
					page_number: page,
					total: $attr.gridPages,
				};
				UAGBImageGalleryPagedGrid.callAjax(
					$scope,
					$args,
					$attr,
					arrows,
				);
				count = page;
			} );
		}
	},

	createElementFromHTML( htmlString ) {
		const htmlElement = document.createElement( 'div' );
		const htmlCleanString = htmlString.replace( /\s+/gm, ' ' ).replace( /( )+/gm, ' ' ).trim();
		htmlElement.innerHTML = htmlCleanString;
		// console.log( `%c${ htmlElement.innerHTML }`, 'color: lime; font-weight: bold; font-family: Raleway;' );
		return htmlElement;
	},

	callAjax( $scope, $obj, $attr, arrows ) {
		const mediaData = new FormData(); // eslint-disable-line no-undef
		mediaData.append( 'action', 'uag_load_image_gallery_grid_pagination' );
		mediaData.append( 'nonce', uagb_image_gallery.uagb_image_gallery_grid_pagination_ajax_nonce );
		mediaData.append( 'page_number', $obj.page_number );
		mediaData.append( 'attr', JSON.stringify( $attr ) );
		fetch( uagb_image_gallery.ajax_url, { // eslint-disable-line no-undef
			method: 'POST',
			credentials: 'same-origin',
			body: mediaData,
		} )
		.then( ( resp ) => resp.json() )
		.then( function( data ) {
			let element = $scope.querySelector( '.uag-image-gallery__layout--isogrid' );
			if ( ! element ) {
				element = $scope;
			};
			// console.log( `%c${ data.data }`, 'color: orange; font-weight: bold; font-family: Raleway;' )
			const mediaElements = element.querySelectorAll( '.uag-image-gallery-media-wrapper' );
			const isotope = new Isotope( element, { // eslint-disable-line no-undef
				itemSelector: '.uag-image-gallery-media-wrapper',
				layoutMode: 'fitRows',
			} );
			mediaElements.forEach( ( mediaEle ) => {
				isotope.remove( mediaEle );
				isotope.layout();
			} );
			isotope.insert( UAGBImageGalleryPagedGrid.createElementFromHTML( data.data ) );
			imagesLoaded( element ).on( 'progress', function() {
				isotope.layout();
			});
			if ( parseInt( $obj.page_number ) === 1 ) {
				arrows.forEach( ( arrow ) => {
					arrow.disabled = ( arrow.getAttribute( 'data-direction' ) === 'Prev' );
				} );
			}
			else if ( parseInt( $obj.page_number ) === parseInt( $obj.total ) ) {
				arrows.forEach( ( arrow ) => {
					arrow.disabled = ( arrow.getAttribute( 'data-direction' ) === 'Next' );
				} );
			}
			else {
				arrows.forEach( ( arrow ) => {
					arrow.disabled = false;
				} );
			}
			$scope.querySelector( '.uag-image-gallery__control-dot--active' ).classList.toggle( 'uag-image-gallery__control-dot--active' );
			$activeDot = $scope.querySelectorAll( '.uag-image-gallery__control-dot' );
			// console.log( `%c${ $obj.page_number }`, 'color: salmon; font-weight: bold; font-family: Raleway;' )
			$activeDot[ parseInt( $obj.page_number ) - 1 ].classList.toggle( 'uag-image-gallery__control-dot--active' );
		} )
		.catch( function( error ) {
			console.error( `%c${ error }`, 'color: turquoise; font-weight: bold; font-family: Raleway;' ); // eslint-disable-line no-console
		} );
	}
};
