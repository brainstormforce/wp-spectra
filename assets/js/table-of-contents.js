let scrollData = true;
let scrollOffset = 30;
let scrolltoTop = false;
let scrollElement = null;


UAGBTableOfContents = { // eslint-disable-line no-undef
	init( id ) {
		if( document.querySelector( '.uagb-toc__list' ) !== null ){
			document.querySelector( '.uagb-toc__list' ).addEventListener( 'click',
				UAGBTableOfContents._scroll // eslint-disable-line no-undef
			);
		}
		if( document.querySelector( '.uagb-toc__scroll-top' ) !== null ){
			document.querySelector( '.uagb-toc__scroll-top' ).addEventListener( 'click',
				UAGBTableOfContents._scrollTop// eslint-disable-line no-undef
			);
		}

		const elementToOpen = document.querySelector( id );

		/* We need the following fail-safe click listener cause an usual click-listener
		 * will fail in case the 'Make TOC Collapsible' is not enabled right from the start/page-load.
		*/ 
		document.addEventListener( 'click', collapseListener );

		function collapseListener( event ){
			
			const element = event.target;

			// These two conditions help us target the required element (collapsible icon beside TOC heading). 
			const condition1 = ( element?.tagName === 'path' || element?.tagName === 'svg' );  // Check if the clicked element type is either path or SVG.
			const condition2 = ( element?.parentNode?.className === 'uagb-toc__title' );  // Check if the clicked element's parent has the required class.
			
			if( condition1 && condition2 ){
				
				const $root = element?.closest( '.wp-block-uagb-table-of-contents' );

				if ( $root.classList.contains( 'uagb-toc__collapse' ) ) {
					$root.classList.remove( 'uagb-toc__collapse' );
					UAGBTableOfContents._slideDown(
						elementToOpen?.querySelector( '.wp-block-uagb-table-of-contents .uagb-toc__list-wrap' ),
						500
					);
				} else {
					$root.classList.add( 'uagb-toc__collapse' );
					UAGBTableOfContents._slideUp(
						elementToOpen?.querySelector( '.wp-block-uagb-table-of-contents.uagb-toc__collapse .uagb-toc__list-wrap' ),
						500
					);

				}

			}
		}

		document.addEventListener( 'scroll',
			UAGBTableOfContents._showHideScroll// eslint-disable-line no-undef
		);
	},

	_slideUp( target, duration ) {
		target.style.transitionProperty = 'height, margin, padding';
		target.style.transitionDuration = duration + 'ms';
		target.style.boxSizing = 'border-box';
		target.style.height = target.offsetHeight + 'px';
		target.offsetHeight; // eslint-disable-line no-unused-expressions
		target.style.overflow = 'hidden';
		target.style.height = 0;
		target.style.paddingTop = 0;
		target.style.paddingBottom = 0;
		target.style.marginTop = 0;
		target.style.marginBottom = 0;
		window.setTimeout( () => {
			target.style.display = 'none';
			target.style.removeProperty( 'height' );
			target.style.removeProperty( 'padding-top' );
			target.style.removeProperty( 'padding-bottom' );
			target.style.removeProperty( 'margin-top' );
			target.style.removeProperty( 'margin-bottom' );
			target.style.removeProperty( 'overflow' );
			target.style.removeProperty( 'transition-duration' );
			target.style.removeProperty( 'transition-property' );
		}, duration );
	},

	_slideDown( target, duration ) {

		target.style?.removeProperty( 'display' );
		let display = window?.getComputedStyle( target ).display;

		if ( display === 'none' ) display = 'block';

		target.style.display = display;
		const height = target.offsetHeight;
		target.style.overflow = 'hidden';
		target.style.height = 0;
		target.style.paddingTop = 0;
		target.style.paddingBottom = 0;
		target.style.marginTop = 0;
		target.style.marginBottom = 0;
		target.offsetHeight; // eslint-disable-line no-unused-expressions
		target.style.boxSizing = 'border-box';
		target.style.transitionProperty = 'height, margin, padding';
		target.style.transitionDuration = duration + 'ms';
		target.style.height = height + 'px';
		target.style.removeProperty( 'padding-top' );
		target.style.removeProperty( 'padding-bottom' );
		target.style.removeProperty( 'margin-top' );
		target.style.removeProperty( 'margin-bottom' );
		window.setTimeout( () => {
			target.style.removeProperty( 'height' );
			target.style.removeProperty( 'overflow' );
			target.style.removeProperty( 'transition-duration' );
			target.style.removeProperty( 'transition-property' );
		}, duration );
	},

	hyperLinks() {
		const hash = window.location.hash.substring( 0 );
		if ( '' === hash || /[^a-z0-9_-]$/.test( hash ) ) {
			return;
		}
		const hashId = encodeURI( hash.substring( 0 ) );
		const selectedAnchor = document.querySelector( hashId );
		if ( null === selectedAnchor ) {
			return;
		}
		const node =  document.querySelector( '.wp-block-uagb-table-of-contents' );

		scrollOffset = node.getAttribute( 'data-offset' );

		const offset = document.querySelector( hash ).offsetTop;

		if ( null !== offset ) {
			scroll( { // eslint-disable-line no-undef
				top: offset - scrollOffset,
				behavior: 'smooth'
			} );
		}
	},

	_showHideScroll() {
		scrollElement = document.querySelector( '.uagb-toc__scroll-top' );
		if ( null !== scrollElement ) {

			if ( window.scrollY > 300 ) {
				if ( scrolltoTop  ) {
					scrollElement.classList.add( 'uagb-toc__show-scroll' );
				} else {
					scrollElement.classList.remove( 'uagb-toc__show-scroll' );
				}
			} else {
				scrollElement.classList.remove( 'uagb-toc__show-scroll' );
			}
		}
	},

	_scrollTop() {
		window.scrollTo( {
			top: 0,
			behavior: 'smooth',
		} );
	},

	_scroll( e ) {

		e.preventDefault();

		let hash = e.target.getAttribute( 'href' );
		if ( hash ) {
			const node = document.querySelector( '.wp-block-uagb-table-of-contents' ); // eslint-disable-line no-undef

			scrollData = node.getAttribute( 'data-scroll' );
			scrollOffset = node.getAttribute( 'data-offset' );
			let offset = null;
			
			hash = hash.substring( 1 );

			if ( document?.querySelector( "[id='" + hash + "']" ) ) {

				offset = document.querySelector( "[id='" + hash + "']"  )?.getBoundingClientRect().top + window.scrollY;
			}
			if ( scrollData ) {
				if ( null !== offset ) {
					scroll( { // eslint-disable-line no-undef
						top: offset - scrollOffset,
						behavior: 'smooth'
					} );
				}
			} else {
				scroll( { // eslint-disable-line no-undef
					top: offset,
					behavior: 'auto'
				} );
			}
		}
	},

	/**
	 * Alter the_content.
	 *
	 * @param {Object} attr
	 * @param {string} id
	 */
	_run( attr, id ) {
		const parseTocSlug = function ( slug ) {
			// If not have the element then return false!
			if ( ! slug ) {
				return slug;
			}

			const parsedSlug = slug
				.toString()
				.toLowerCase()
				.replace( /\…+/g, '' ) // Remove multiple …
				.replace( /\u2013|\u2014/g, '' ) // Remove long dash
				.replace( /&(amp;)/g, '' ) // Remove &
				.replace( /[&]nbsp[;]/gi, '-' ) // Replace inseccable spaces
				.replace( /[^a-z0-9 -_]/gi, '' ) // Keep only alphnumeric, space, -, _
				.replace( /&(mdash;)/g, '' ) // Remove long dash
				.replace( /\s+/g, '-' ) // Replace spaces with -
				.replace( /[&\/\\#,^!+()$~%.\[\]'":*?;-_<>{}@‘’”“|]/g, '' ) // Remove special chars
				.replace( /\-\-+/g, '-' ) // Replace multiple - with single -
				.replace( /^-+/, '' ) // Trim - from start of text
				.replace( /-+$/, '' ); // Trim - from end of text

			return decodeURI( encodeURIComponent( parsedSlug ) );
		};
		const $thisScope = document.querySelector( id );
		if ( $thisScope.querySelector( '.uag-toc__collapsible-wrap' ) !== null ){
			if ( $thisScope.querySelector( '.uag-toc__collapsible-wrap' ).length > 0 ) {
				$thisScope.querySelector( '.uagb-toc__title-wrap' ).classList.add( 'uagb-toc__is-collapsible' );
			}
		}

		const allowedHTags = [];
		let allowedHTagStr;

		if ( undefined !== attr.mappingHeaders ) {
			attr.mappingHeaders.forEach( function ( h_tag, index ) {
				// eslint-disable-next-line no-unused-expressions
				h_tag === true ? allowedHTags.push( 'h' + ( index + 1 ) ) : null;
			} );
			allowedHTagStr = null !== allowedHTags ? allowedHTags.join( ',' ) : '';
		}

		const allHeader = undefined !== allowedHTagStr && '' !== allowedHTagStr ? document.body.querySelectorAll( allowedHTagStr ) : document.body.querySelectorAll( 'h1, h2, h3, h4, h5, h6' );

		if ( 0 !== allHeader.length ) {
			const tocListWrap = $thisScope.querySelector( '.uagb-toc__list-wrap' );

			const divsArr = Array.from( allHeader );

			for ( let i = 0; i < divsArr.length; i++ ) {

				let headerText = parseTocSlug( divsArr[i].innerText );

				if ( headerText.length < 1 ) {
					const aTags = tocListWrap.getElementsByTagName( 'a' );
					const searchText = divsArr[i].innerText;
					for ( let j = 0; j < aTags.length; j++ ) {
						if ( aTags[j].textContent === searchText ) {
							const randomID = '#toc_' + Math.random();
							aTags[j].setAttribute( 'href' , randomID );
							headerText =  randomID.substring( 1 );
						}
					}
				}
				const span = document.createElement( 'span' );
				span.id = headerText;
				span.className =  'uag-toc__heading-anchor';
				divsArr[i].prepend( span );
			}
		}

		scrolltoTop = attr.scrollToTop;

		const scrollToTopSvg = '<svg xmlns="https://www.w3.org/2000/svg" xmlns:xlink="https://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px" width="26px" height="16.043px" viewBox="57 35.171 26 16.043" enable-background="new 57 35.171 26 16.043" xml:space="preserve"><path d="M57.5,38.193l12.5,12.5l12.5-12.5l-2.5-2.5l-10,10l-10-10L57.5,38.193z"/></svg>';

		scrollElement = document.querySelector( '.uagb-toc__scroll-top' );

		if ( scrollElement === null ) {

			const scrollToTopDiv = document.createElement( 'div' );
			scrollToTopDiv.classList.add( 'uagb-toc__scroll-top' );
			scrollToTopDiv.innerHTML = scrollToTopSvg;
			document.body.appendChild( scrollToTopDiv );
		}

		if ( scrollElement !== null ) {
			scrollElement.classList.add( 'uagb-toc__show-scroll' );
		}
		UAGBTableOfContents._showHideScroll(); // eslint-disable-line no-undef
		UAGBTableOfContents.hyperLinks(); // eslint-disable-line no-undef
		UAGBTableOfContents.init( id ); // eslint-disable-line no-undef
	},
};

