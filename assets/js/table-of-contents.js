let scrollData = true;
let scrollOffset = 30;
let scrolltoTop = false;
let scrollElement = null;
let uagbTOCCollapseListener = true;


UAGBTableOfContents = {
	_getDocumentElement() {
		let document_element = document;
		const getEditorIframe = document.querySelectorAll( 'iframe[name="editor-canvas"]' );
		if( getEditorIframe?.length ){
			const iframeDocument = getEditorIframe?.[0]?.contentWindow?.document || getEditorIframe?.[0]?.contentDocument;
			if ( iframeDocument ) {
				document_element = iframeDocument;
			}
		}
		return document_element;
	},

	_setCollapseIconMargin ( id, attr ) {
		const document_collapsable = UAGBTableOfContents._getDocumentElement();
		const block_element = document_collapsable.querySelector( id );
		const uagbLoader = block_element.querySelector( '.uagb-toc__loader' );

		// Get the first list item to compute the ::marker styles.
		const firstListItem = block_element.querySelector( 'li.uagb-toc__list:not(.uagb-toc__list--expandable)' );
		if( firstListItem ) {
			const listFontSize = window.getComputedStyle( firstListItem ).fontSize;
			const listWrap = block_element.querySelector( '.uagb-toc__list-wrap' );

			// Calculate the width for ::before pseudo-elements
			const widthValue = `calc(${listFontSize} / 3)`;

			// Check if a previous style element exists and remove it.
			// Escape periods in the id for use in querySelector or CSS.
			const escapedId = id?.replace( /\./g, '' );

			// Ensure no existing stylesheets target the ID
			const existingStyleSheet = document_collapsable.querySelector( `#${escapedId}-toc-style` );
			if ( existingStyleSheet ) {
				existingStyleSheet.remove();  // Remove the existing stylesheet if it exists.
			}
	
			// Create or append to the <style> element.
			const styleSheet = document_collapsable.createElement( 'style' );
			styleSheet.id = `${escapedId}-toc-style`; // Assign an ID to the style element for future reference.
			
			// check if the browser is Safari or Firefox.
			const userAgent = navigator.userAgent.toLowerCase();
			const isSafari = /^((?!chrome|android|crios|fxios).)*safari/i.test( userAgent ) && !userAgent.includes( 'edge' );
			const isFirefox = userAgent.includes( 'firefox' );
			const isFirefoxOrSafari = isSafari || isFirefox;


			// Function to calculate margin-right based on font size.
			const calculateMarginRightDisc = ( fontSize ) => {
				const baseFontSize = 8; // Base font size for margin calculation.
				const baseMargin = 5; // Base margin for font size 8px.
				const increment = 5; // Increment for each additional 8px font size.
				
				// Parse font size to number.
				const fontSizeNumeric = parseFloat( fontSize );
				
				// Calculate number of 8px increments.
				const increments = ( ( fontSizeNumeric - baseFontSize ) / 8 );
				const marginRight = baseMargin + ( increments * increment );
	
				return `${marginRight}px`;
			};

			const calculateMarginRightDecimal = ( ListFontSize ) => {
				const fontSize = parseFloat( ListFontSize );
			
				// Base margin calculated as one-fourth of the font size.
				const baseMargin = ( 1 / 4 ) * fontSize;
				// Additional margin added for font sizes greater than 16px.
				const additionalMargin = Math.max( 0, ( fontSize - 16 ) / 8 ) * 2;
				return ( baseMargin + additionalMargin );
			};

			let marginRight;
			let marginLeft = '-0.5px';
			
			// Check if markerView is 'disc'
			if ( 'disc' === attr?.markerView ) {
				if ( isFirefoxOrSafari ) {
					marginRight = calculateMarginRightDisc( listFontSize );
					marginLeft = isFirefox ? '1px' : '-0.5px';
				} else {
					marginRight = listFontSize;
				}
			} 
			if ( 'decimal' === attr?.markerView ) {
				// For non-'disc' marker view
				const marginRightDeducting = calculateMarginRightDecimal( listFontSize )
				marginRight = `${parseFloat( listFontSize ) - marginRightDeducting}px`;
				marginLeft = '1px'
			}
			
			// First apply the width to the marker pseudo elements.
			// Them update the margins of the markers.
			// Them update the RTL based margins of the markers. Basically inverted version of the LTR margins.
			styleSheet.innerHTML += `
				${ id } .list-open::before,
				${ id } .list-collapsed::before {
					width: ${ widthValue };
				}
				${ id } .list-open,
				${ id } .list-collapsed {
					margin-right: ${ marginRight };
					margin-left: ${ marginLeft };
				}
				[dir="rtl"] ${ id } .list-open,
				[dir="rtl"] ${ id } .list-collapsed {
					margin-right: ${ marginLeft };
					margin-left: ${ marginRight };
				}
			`;

			// Append the <style> element to the document's head.
			document_collapsable.head.appendChild( styleSheet );
			setTimeout( () => {
				block_element.style.opacity = '';
				uagbLoader?.remove();
				listWrap?.classList.remove( 'uagb-toc__list-hidden' );
			}, 300 ); // Duration to match the transition duration.
		}
	},

	_initCollapsableList( id, attr ) {
		const document_collapsable = UAGBTableOfContents._getDocumentElement();
		const block_element = document_collapsable.querySelector( id );
	
		// Run only if toc-content-collapsable class is present and script hasn't run before
		if ( attr?.isFrontend && attr?.enableCollapsableList && ! block_element.classList.contains( 'init-collapsed-script' ) ) {
			block_element.classList.add( 'init-collapsed-script' ); // Mark script as executed.
	
			const ulElements = block_element.querySelectorAll( 'ul.uagb-toc__list' );
	
			// Set margins for collapsible icon in editor and frontend
			if ( 'function' === typeof UAGBTableOfContents._setCollapseIconMargin ) {
				UAGBTableOfContents._setCollapseIconMargin( id, attr );
			}
	
			ulElements.forEach( ( ul ) => {
				const spanElement = ul.parentElement.querySelector( '.list-open' );
	
				// Apply initial transition and max height settings
				ul.classList.add( 'transition' );
				ul.dataset.originalMaxHeight = ul.scrollHeight + 'px';
	
				if ( spanElement ) {
					const isExpanded = spanElement.getAttribute( 'aria-expanded' ) === 'true';
					ul.style.maxHeight = isExpanded ? ul.dataset.originalMaxHeight : '0px';
					ul.style.overflow = isExpanded ? 'visible' : 'hidden';
	
					ul.addEventListener( 'transitionend', () => {
						if ( ul.style.maxHeight !== '0px' ) {
							ul.style.overflow = 'visible';
						}
					} );
				} else {
					ul.style.maxHeight = ul.dataset.originalMaxHeight;
					ul.style.overflow = 'visible';
				}
			} );
	
			// Initialize event listeners for each span with class .list-open.
			const spanList = Array.from( block_element.getElementsByClassName( 'list-open' ) );
	
			spanList.forEach( ( ele ) => {
				const handleToggle = () => {
					const ulElement = ele.parentElement.querySelector( 'ul' );
					if ( ! ulElement ) {
						return;
					}
					const isExpanded = ele.getAttribute( 'aria-expanded' ) === 'true';
					ele.setAttribute( 'aria-expanded', ! isExpanded );


					// If the list was not expanded, remove the display-none class before animating.
					if ( ! isExpanded ) {
						ulElement.classList.remove( 'uagb-toc__list--hidden-child' );
					}

					// All the rest should happen after the display is updated.
					setTimeout( () => {
						if ( isExpanded ) {
							ulElement.style.maxHeight = '0px';
							ulElement.style.overflow = 'hidden';
						} else {
							ulElement.style.maxHeight = ulElement.dataset.originalMaxHeight;
						}
		
						ele.classList.toggle( 'list-open', ! isExpanded );
						ele.classList.toggle( 'list-collapsed', isExpanded );
	
						// If this was expanded, add a class to remove the padding inside the UL of the collapsible list after it has collapsed. Else just remove that class.
						ulElement.classList.toggle( 'uagb-toc__list--child-of-closed-list' );
					}, 0 );

					// If the list was expanded, add the display-none class after animating.
					if ( isExpanded ) {
						setTimeout( () => {
							ulElement.classList.add( 'uagb-toc__list--hidden-child' );
						}, 300 );
					}	
				};
	
				// Add click and keydown event listeners
				ele.addEventListener( 'click', handleToggle );
				ele.addEventListener( 'keydown', ( event ) => {
					if ( event.key === 'Enter' || event.key === ' ' ) {
						event.preventDefault();
						handleToggle( event );
					}
				} );
	
				ele.setAttribute( 'aria-expanded', ele.classList.contains( 'list-open' ) );
			} );
	
			// Initial collapse state handling
			if ( attr?.initiallyCollapseList ) {
				ulElements.forEach( ( ul ) => {
					 // Check if there's a span sibling at the same level
					 const hasSiblingSpan = ul.parentElement.querySelector( 'span' );

					 if ( hasSiblingSpan ) {
						ul.style.maxHeight = '0px';
						ul.style.overflow = 'hidden';
						// If this is initially collapsed, then add the closed padding class.
						ul.classList.add( 'uagb-toc__list--child-of-closed-list' );

						// After the animation has ended, set display to none so that screenreaders avoide the hidden content.
						setTimeout( () => {
							ul.classList.add( 'uagb-toc__list--hidden-child' );
						}, 300 );
			
						const spanElement = ul.parentElement.querySelector( '.list-open' );
						if ( spanElement ) {
							spanElement.setAttribute( 'aria-expanded', 'false' );
							spanElement.classList.remove( 'list-open' );
							spanElement.classList.add( 'list-collapsed' );
						}
					}
				} );
			}
		}
	},		

	init( id, attr ) {
		if ( ( attr?.makeCollapsible && ! attr?.initialCollapse ) || ! attr?.makeCollapsible ) {
			UAGBTableOfContents._initCollapsableList( id, attr );
		}
		const document_element = UAGBTableOfContents._getDocumentElement();
		if ( document.querySelector( '.uagb-toc__list' ) !== null ) {
			document.querySelector( '.uagb-toc__list' ).addEventListener(
				'click',
				UAGBTableOfContents._scroll
			);
		}
		if ( document.querySelector( '.uagb-toc__scroll-top' ) !== null ) {
			document.querySelector( '.uagb-toc__scroll-top' ).addEventListener(
				'click',
				UAGBTableOfContents._scrollTop
			);
		}

		if( attr?.makeCollapsible ){
		const elementToOpen = document_element.querySelector( id );

		/* We need the following fail-safe click listener cause an usual click-listener
		 * will fail in case the 'Make TOC Collapsible' is not enabled right from the start/page-load.
		 */
		if ( uagbTOCCollapseListener ) {
			document_element.addEventListener( 'click', collapseListener );
			uagbTOCCollapseListener = false;
		}

		function collapseListener( event ) {
			const element = event.target;
			// These two conditions help us target the required element (collapsible icon beside TOC heading).
			const condition1 = element?.tagName === 'path' || element?.tagName === 'svg' || element?.tagName === 'DIV'; // Check if the clicked element type is either path or SVG or Title DIV.
			const condition2 = element?.className === 'uagb-toc__title' || element?.parentNode?.className === 'uagb-toc__title' || element?.parentNode?.tagName === 'svg'; // Check if the clicked element's parent has the required class.

			if ( condition1 && condition2 ) {
				const $root = element?.closest( `.wp-block-uagb-table-of-contents${id}` );
				const tocListWrapEl = elementToOpen?.querySelector( '.wp-block-uagb-table-of-contents .uagb-toc__list-wrap' );
				// If not have the tocListWrapEl then return false!
				if ( ! tocListWrapEl ) {
					return;
				}
				if ( $root?.classList?.contains( 'uagb-toc__collapse' ) ) {
					$root?.classList?.remove( 'uagb-toc__collapse' );
					UAGBTableOfContents._slideDown(
						tocListWrapEl,
						500, 
						id,
						attr
					);
				} else {
					$root?.classList?.add( 'uagb-toc__collapse' );
					UAGBTableOfContents._slideUp(
						tocListWrapEl,
						500
					);
				}
			}
		}
	}

		document.addEventListener(
			'scroll',
			UAGBTableOfContents._showHideScroll
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

	_slideDown( target, duration, id, attr ) {
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
			UAGBTableOfContents._initCollapsableList( id, attr );
		}, duration );
	},

	hyperLinks() {
		const hash = window.location.hash.substring( 0 );
		if ( '' === hash || /[^a-z0-9_-]$/.test( hash ) ) {
			return;
		}
		function escapeSelector( selector ) {
			return selector.replace( /([.#$+\^*[\](){}|\\])/g, '\\$1' );
		}
		
		let hashId = encodeURI( hash.substring( 0 ) );
		hashId = escapeSelector( hash );
		const selectedAnchor = document?.querySelector( hashId );
		if ( null === selectedAnchor ) {
			return;
		}
		const node = document.querySelector( '.wp-block-uagb-table-of-contents' );

		scrollOffset = node.getAttribute( 'data-offset' );

		const offset = document.querySelector( hash ).offsetTop;

		if ( null !== offset ) {
			scroll( {
				top: offset - scrollOffset,
				behavior: 'smooth',
			} );
		}
	},

	_showHideScroll() {
		scrollElement = document.querySelector( '.uagb-toc__scroll-top' );
		if ( null !== scrollElement ) {
			if ( window.scrollY > 300 ) {
				if ( scrolltoTop ) {
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

		/*
		* There may be instances where we don't receive the hash value from the href attribute.
		* This can occur when the click event's target is not an anchor tag.
		* However, the target element might be nested within an anchor tag.
		* In these cases, we need to check if the parent element has an available hash value.
		*/
		if ( ! hash && e.target.tagName && e.target.tagName !== 'A' ) {
			const getHash = e.target.closest( 'a' );
			// Add a null check for getHash to prevent errors
			if ( getHash ) {
				hash = getHash.getAttribute( 'href' );
			}
		}

		if ( hash ) {
			const node = document.querySelector( '.wp-block-uagb-table-of-contents' );

			scrollData = node.getAttribute( 'data-scroll' );
			scrollOffset = node.getAttribute( 'data-offset' );
			let offset = null;

			hash = hash.substring( 1 );

			if ( document?.querySelector( "[id='" + hash + "']" ) ) {
				offset = document.querySelector( "[id='" + hash + "']" )?.getBoundingClientRect().top + window.scrollY;
			}
			if ( scrollData ) {
				if ( null !== offset ) {
					scroll( {
						top: offset - scrollOffset,
						behavior: 'smooth',
					} );
				}
			} else {
				scroll( {
					top: offset,
					behavior: 'auto',
				} );
			}
		}
	},
	selectDomElement( id ){
		// Select id class but not with script init class.
		const thisScope = document.querySelector( `${ id }:not(.script-init)` );
		if ( ! thisScope ) {
			return null;
		}
		// Add script init class to avoid reinit.
		thisScope.classList.add( 'script-init' );
		return thisScope;
	},
	parseTocSlug( slug ) {
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
			.replace( /[^a-zA-Z0-9\u00C0-\u017F _-]/g, '' ) // Keep only alphnumeric, space, -, _ and latin characters.
			.replace( /&(mdash;)/g, '' ) // Remove long dash
			.replace( /\s+/g, '-' ) // Replace spaces with -
			.replace( /[&\/\\#,^!+()$~%.\[\]'":*?;-_<>{}@‘’”“|]/g, '' ) // Remove special chars
			.replace( /\-\-+/g, '-' ) // Replace multiple - with single -
			.replace( /^-+/, '' ) // Trim - from start of text
			.replace( /-+$/, '' ); // Trim - from end of text

		return decodeURI( encodeURIComponent( parsedSlug ) );
	},
	mapTocAnchorsForHref( anchors ) {
		for ( const anchor of anchors ) {
			// Update the href attribute with text content and text content should be parsed.
			const href = anchor.textContent;
			const parsedHref = UAGBTableOfContents.parseTocSlug( href );
			anchor.setAttribute( 'href', `#${parsedHref}` );
		}
	},

	/**
	 * Alter the_content.
	 *
	 * @param {Object} attr
	 * @param {string} id
	 */
	_run( attr, id ) {
		// Add setTime
		setTimeout( function () {
			UAGBTableOfContents._runWithTimeOut( attr, id );
		}, 500 );
	},
	_runWithTimeOut( attr, id ) {
		const $thisScope = UAGBTableOfContents.selectDomElement( id );

		if ( ! $thisScope ) {
			return;
		}
		
		if ( $thisScope.querySelector( '.uag-toc__collapsible-wrap' ) !== null ) {
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

		const allHeader =
			undefined !== allowedHTagStr && '' !== allowedHTagStr
				? document.body.querySelectorAll( allowedHTagStr )
				: document.body.querySelectorAll( 'h1, h2, h3, h4, h5, h6' );
		if ( 0 !== allHeader.length ) {
			const tocListWrap = $thisScope.querySelector( '.uagb-toc__list-wrap' );
			if ( ! tocListWrap ) {
				return;
			}
			const divsArr = Array.from( allHeader );

			const aTags = tocListWrap.getElementsByTagName( 'a' );

			// Map the anchors to their hrefs to ensure that the hrefs are is correct.
			UAGBTableOfContents.mapTocAnchorsForHref( aTags );

			/* Logic for Remove duplicate heading with same HTML tag and create an new array with duplicate entries start here. */
			const ArrayOfDuplicateElements = function ( headingArray = [] ) {
				const arrayWithDuplicateEntries = [];
				headingArray.reduce( ( temporaryArray, currentVal ) => {
					if ( ! temporaryArray.some( ( item ) => item.innerText === currentVal.innerText ) ) {
						temporaryArray.push( currentVal );
					} else {
						arrayWithDuplicateEntries.push( currentVal );
					}
					return temporaryArray;
				}, [] );
				return arrayWithDuplicateEntries;
			};
			const duplicateHeadings = ArrayOfDuplicateElements( divsArr );

			/* Logic for Remove duplicate heading with same HTML tag and create an new array with duplicate entries ends here. */
			for ( let i = 0; i < divsArr.length; i++ ) {
				let headerText = UAGBTableOfContents.parseTocSlug( divsArr[ i ].innerText );
				if ( '' !== divsArr[ i ].innerText ) {
					if ( headerText.length < 1 ) {
						const searchText = divsArr[ i ].innerText;
						for ( let j = 0; j < aTags.length; j++ ) {
							if ( aTags[ j ].textContent === searchText ) {
								const randomID = '#toc_' + Math.random();
								aTags[ j ].setAttribute( 'href', randomID );
								headerText = randomID.substring( 1 );
							}
						}
					}
				}
				const span = document.createElement( 'span' );
				span.id = headerText;
				span.className = 'uag-toc__heading-anchor';
				divsArr[ i ].prepend( span );
				/* Logic for Create an unique Id for duplicate heading start here. */
				for ( let k = 0; k < duplicateHeadings.length; k++ ) {
					const randomID = '#toc_' + Math.random();
					duplicateHeadings[ k ]
						?.querySelector( '.uag-toc__heading-anchor' )
						?.setAttribute( 'id', randomID.substring( 1 ) );
					const anchorElements = Array.from( tocListWrap.getElementsByTagName( 'a' ) );
					const duplicateHeadingsInTOC = ArrayOfDuplicateElements( anchorElements );
					for ( let l = 0; l < duplicateHeadingsInTOC.length; l++ ) {
						duplicateHeadingsInTOC[ k ]?.setAttribute( 'href', randomID );
					}
				}
				/* Logic for Create an unique Id for duplicate heading ends here. */
			}
		}

		scrolltoTop = attr.scrollToTop;

		const scrollToTopSvg =
			'<svg xmlns="https://www.w3.org/2000/svg" xmlns:xlink="https://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px" width="26px" height="16.043px" viewBox="57 35.171 26 16.043" enable-background="new 57 35.171 26 16.043" xml:space="preserve"><path d="M57.5,38.193l12.5,12.5l12.5-12.5l-2.5-2.5l-10,10l-10-10L57.5,38.193z"/></svg>';

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
		UAGBTableOfContents._showHideScroll();
		UAGBTableOfContents.hyperLinks();
		UAGBTableOfContents.init( id, attr );
	},
};
