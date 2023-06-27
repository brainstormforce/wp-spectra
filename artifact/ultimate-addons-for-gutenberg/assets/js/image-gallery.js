let spectraImageGalleryLoadStatus = true;

const UAGBImageGalleryMasonry = {
	init( $attr, $selector ) {
		let count = 2;
		const windowHeight50 = window.innerHeight / 1.25;
		const $scope = document.querySelector( $selector );
		const loader = $scope?.querySelector( '.spectra-image-gallery__control-loader' );
		const loadButton = $scope?.querySelector( '.spectra-image-gallery__control-button' );
		if ( $attr.feedPagination && $attr.paginateUseLoader ) {
			window.addEventListener( 'scroll', function () {
				let mediaItem = $scope?.querySelector( '.spectra-image-gallery__media-wrapper' );
				if ( ! mediaItem ) {
					mediaItem = $scope;
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
							UAGBImageGalleryMasonry.callAjax( $scope, $args, $attr, false, count );
							count++;
							spectraImageGalleryLoadStatus = false;
						}
					}
				}
			} );
		} else if ( $attr.feedPagination && ! $attr.paginateUseLoader ) {
			loadButton.onclick = function () {
				const total = $attr.gridPages;
				const $args = {
					total,
					page_number: count,
				};
				loadButton.classList.toggle( 'disabled' );
				if ( spectraImageGalleryLoadStatus ) {
					if ( count <= total ) {
						UAGBImageGalleryMasonry.callAjax( $scope, $args, $attr, true, count );
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
		return htmlElement;
	},

	getCustomURL( image, $attr ) {
		const urlValidRegex = new RegExp(
			'^((http|https)://)(www.)?[a-zA-Z0-9@:%._\\+~#?&//=]{2,256}\\.[a-z]{2,6}\\b([-a-zA-Z0-9@:%._\\+~#?&//=]*)$'
		);
		const imageID = parseInt( image.getAttribute( 'data-spectra-gallery-image-id' ) );
		return urlValidRegex.test( $attr?.customLinks[ imageID ] ) ? $attr.customLinks[ imageID ] : undefined;
	},

	openCustomURL( customURL ) {
		window.open( customURL, '_blank' );
	},

	addClickEvents( element, $attr ) {
		const imageElements = element?.querySelectorAll( '.spectra-image-gallery__media-wrapper' );
		imageElements.forEach( ( image ) => {
			const imageURL = UAGBImageGalleryMasonry.getCustomURL( image, $attr );
			if ( imageURL ) {
				image.style.cursor = 'pointer';
				image.addEventListener( 'click', () => UAGBImageGalleryMasonry.openCustomURL( imageURL ) );
			}
		} );
	},

	callAjax( $scope, $obj, $attr, append = false, count ) {
		const mediaData = new FormData(); // eslint-disable-line no-undef
		mediaData.append( 'action', 'uag_load_image_gallery_masonry' );
		mediaData.append( 'nonce', uagb_image_gallery.uagb_image_gallery_masonry_ajax_nonce ); // eslint-disable-line no-undef
		mediaData.append( 'page_number', $obj.page_number );
		mediaData.append( 'attr', JSON.stringify( $attr ) );
		// eslint-disable-next-line no-undef
		fetch( uagb_image_gallery.ajax_url, {
			method: 'POST',
			credentials: 'same-origin',
			body: mediaData,
		} )
			.then( ( resp ) => resp.json() )
			.then( function ( data ) {
				let element = $scope?.querySelector( '.spectra-image-gallery__layout--masonry' );
				if ( ! element ) {
					element = $scope;
				}
				// eslint-disable-next-line no-undef
				const isotope = new Isotope( element, {
					itemSelector: '.spectra-image-gallery__media-wrapper--isotope',
					stagger: 10,
				} );
				isotope.insert( UAGBImageGalleryMasonry.createElementFromHTML( data.data ) );
				// eslint-disable-next-line no-undef
				imagesLoaded( element ).on( 'progress', function () {
					isotope.layout();
				} );
				if ( $attr.customLinks ) {
					UAGBImageGalleryMasonry.addClickEvents( element, $attr );
				}
				spectraImageGalleryLoadStatus = true;
				if ( true === append ) {
					$scope?.querySelector( '.spectra-image-gallery__control-button' ).classList.toggle( 'disabled' );
				}
				if ( count === parseInt( $obj.total ) ) {
					$scope.querySelector( '.spectra-image-gallery__control-button' ).style.opacity = 0;
					setTimeout( () => {
						$scope.querySelector( '.spectra-image-gallery__control-button' ).parentElement.style.display =
							'none';
					}, 2000 );
				}
			} );
	},
};

const UAGBImageGalleryPagedGrid = {
	init( $attr, $selector ) {
		let count = 1;
		const $scope = document.querySelector( $selector );
		const arrows = $scope?.querySelectorAll( '.spectra-image-gallery__control-arrows--grid' );
		const dots = $scope?.querySelectorAll( '.spectra-image-gallery__control-dot' );
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
				let mediaItem = $scope?.querySelector( '.spectra-image-gallery__media-wrapper' );
				if ( ! mediaItem ) {
					mediaItem = $scope;
				}
				const total = $attr.gridPages;
				const $args = {
					page_number: page,
					total,
				};
				if ( page === total || page === 1 ) {
					thisArrow.disabled = true;
				} else {
					arrows.forEach( ( ele ) => {
						ele.disabled = false;
					} );
				}
				if ( page <= total && page >= 1 ) {
					UAGBImageGalleryPagedGrid.callAjax( $scope, $args, $attr, arrows );
					count = page;
				}
			} );
		}
		for ( let i = 0; i < dots.length; i++ ) {
			dots[ i ].addEventListener( 'click', ( event ) => {
				const thisDot = event.currentTarget;
				const page = thisDot.getAttribute( 'data-go-to' );
				let mediaItem = $scope?.querySelector( '.spectra-image-gallery__media-wrapper' );
				if ( ! mediaItem ) {
					mediaItem = $scope;
				}
				const $args = {
					page_number: page,
					total: $attr.gridPages,
				};
				UAGBImageGalleryPagedGrid.callAjax( $scope, $args, $attr, arrows );
				count = page;
			} );
		}
	},

	createElementFromHTML( htmlString ) {
		const htmlElement = document.createElement( 'div' );
		const htmlCleanString = htmlString.replace( /\s+/gm, ' ' ).replace( /( )+/gm, ' ' ).trim();
		htmlElement.innerHTML = htmlCleanString;
		return htmlElement;
	},

	getCustomURL( image, $attr ) {
		const urlValidRegex = new RegExp(
			'^((http|https)://)(www.)?[a-zA-Z0-9@:%._\\+~#?&//=]{2,256}\\.[a-z]{2,6}\\b([-a-zA-Z0-9@:%._\\+~#?&//=]*)$'
		);
		const imageID = parseInt( image.getAttribute( 'data-spectra-gallery-image-id' ) );
		return urlValidRegex.test( $attr?.customLinks[ imageID ] ) ? $attr.customLinks[ imageID ] : undefined;
	},

	openCustomURL( customURL ) {
		window.open( customURL, '_blank' );
	},

	addClickEvents( element, $attr ) {
		const imageElements = element?.querySelectorAll( '.spectra-image-gallery__media-wrapper' );
		imageElements.forEach( ( image ) => {
			const imageURL = UAGBImageGalleryPagedGrid.getCustomURL( image, $attr );
			if ( imageURL ) {
				image.style.cursor = 'pointer';
				image.addEventListener( 'click', () => UAGBImageGalleryPagedGrid.openCustomURL( imageURL ) );
			}
		} );
	},

	callAjax( $scope, $obj, $attr, arrows ) {
		const mediaData = new FormData(); // eslint-disable-line no-undef
		mediaData.append( 'action', 'uag_load_image_gallery_grid_pagination' );
		mediaData.append( 'nonce', uagb_image_gallery.uagb_image_gallery_grid_pagination_ajax_nonce ); // eslint-disable-line no-undef
		mediaData.append( 'page_number', $obj.page_number );
		mediaData.append( 'attr', JSON.stringify( $attr ) );
		// eslint-disable-next-line no-undef
		fetch( uagb_image_gallery.ajax_url, {
			method: 'POST',
			credentials: 'same-origin',
			body: mediaData,
		} )
			.then( ( resp ) => resp.json() )
			.then( function ( data ) {
				if ( data.success === false ) {
					return;
				}
				let element = $scope?.querySelector( '.spectra-image-gallery__layout--isogrid' );
				if ( ! element ) {
					element = $scope;
				}
				const mediaElements = element.querySelectorAll( '.spectra-image-gallery__media-wrapper--isotope' );
				// eslint-disable-next-line no-undef
				const isotope = new Isotope( element, {
					itemSelector: '.spectra-image-gallery__media-wrapper--isotope',
					layoutMode: 'fitRows',
				} );
				mediaElements.forEach( ( mediaEle ) => {
					isotope.remove( mediaEle );
					isotope.layout();
				} );
				isotope.insert( UAGBImageGalleryPagedGrid.createElementFromHTML( data.data ) );
				// eslint-disable-next-line no-undef
				imagesLoaded( element ).on( 'progress', function () {
					isotope.layout();
				} );
				if ( $attr.customLinks ) {
					UAGBImageGalleryPagedGrid.addClickEvents( element, $attr );
				}
				if ( parseInt( $obj.page_number ) === 1 ) {
					arrows.forEach( ( arrow ) => {
						arrow.disabled = arrow.getAttribute( 'data-direction' ) === 'Prev';
					} );
				} else if ( parseInt( $obj.page_number ) === parseInt( $obj.total ) ) {
					arrows.forEach( ( arrow ) => {
						arrow.disabled = arrow.getAttribute( 'data-direction' ) === 'Next';
					} );
				} else {
					arrows.forEach( ( arrow ) => {
						arrow.disabled = false;
					} );
				}
				$scope
					?.querySelector( '.spectra-image-gallery__control-dot--active' )
					.classList.toggle( 'spectra-image-gallery__control-dot--active' );
				const $activeDot = $scope?.querySelectorAll( '.spectra-image-gallery__control-dot' );
				$activeDot[ parseInt( $obj.page_number ) - 1 ].classList.toggle(
					'spectra-image-gallery__control-dot--active'
				);
			} );
	},
};
