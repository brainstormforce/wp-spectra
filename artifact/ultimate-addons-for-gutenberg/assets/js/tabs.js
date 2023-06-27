// eslint-disable-next-line no-undef
UAGBTabs = {
	init( $selector ) {
		const tabsWrap = document.querySelector( $selector );
		if ( ! tabsWrap ) {
			return;
		}
		const tabActive = tabsWrap.getAttribute( 'data-tab-active' );
		const tabLi = tabsWrap.querySelectorAll( '.uagb-tabs__panel > li.uagb-tab' );
		const tabBody = tabsWrap.querySelectorAll( '.uagb-tabs__body-container' );

		// Set initial active class to Tabs body.
		tabBody[ tabActive ].classList.add( 'uagb-tabs-body__active' );

		// Set initial active class to Tabs li.
		tabLi[ tabActive ].classList.add( 'uagb-tabs__active' );

		for ( let i = 0; i < tabLi.length; i++ ) {
			const tabsAnchor = tabLi[ i ].getElementsByTagName( 'a' )[ 0 ];

			// Set initial li ids.
			tabLi[ i ].setAttribute( 'id', 'uagb-tabs__tab' + i );

			// Set initial aria attributes true for anchor tags.
			tabsAnchor.setAttribute( 'aria-selected', true );

			if ( ! tabLi[ i ].classList.contains( 'uagb-tabs__active' ) ) {
				// Set aria attributes for anchor tags as false where needed.
				tabsAnchor.setAttribute( 'aria-selected', false );
			}

			// Set initial data attribute for anchor tags.
			tabsAnchor.setAttribute( 'data-tab', i );

			tabsAnchor.mainWrapClass = $selector;
			// Add Click event listener
			tabsAnchor.addEventListener( 'click', function ( e ) {
				UAGBTabs.tabClickEvent( e, this, this.parentElement ); // eslint-disable-line no-undef
			} );
		}
	},
	tabClickEvent( e, tabName, selectedLi ) {
		e.preventDefault();

		const mainWrapClass = e.currentTarget.mainWrapClass;
		const tabId = tabName.getAttribute( 'data-tab' );
		const tabPanel = selectedLi.closest( '.uagb-tabs__panel' );
		const tabSelectedBody = document.querySelector(
			mainWrapClass + ' > .uagb-tabs__body-wrap > .uagb-inner-tab-' + tabId
		);
		const tabUnselectedBody = document.querySelectorAll(
			mainWrapClass + ' > .uagb-tabs__body-wrap > .uagb-tabs__body-container:not(.uagb-inner-tab-' + tabId + ')'
		);
		const allLi = tabPanel.querySelectorAll( 'a.uagb-tabs-list' );

		// Remove old li active class.
		tabPanel.querySelector( '.uagb-tabs__active' )?.classList.remove( 'uagb-tabs__active' );

		//Remove old tab body active class.
		document
			.querySelector( mainWrapClass + ' > .uagb-tabs__body-wrap > .uagb-tabs-body__active' )
			?.classList.remove( 'uagb-tabs-body__active' );

		// Set aria-selected attribute as flase for old active tab.
		for ( let i = 0; i < allLi.length; i++ ) {
			allLi[ i ].setAttribute( 'aria-selected', false );
		}

		// Set selected li active class.
		selectedLi.classList.add( 'uagb-tabs__active' );

		// Set aria-selected attribute as true for new active tab.
		tabName.setAttribute( 'aria-selected', true );

		// Set selected tab body active class.
		tabSelectedBody?.classList.add( 'uagb-tabs-body__active' );

		// Set aria-hidden attribute false for selected tab body.
		tabSelectedBody?.setAttribute( 'aria-hidden', false );

		// Set aria-hidden attribute true for all unselected tab body.
		for ( let i = 0; i < tabUnselectedBody.length; i++ ) {
			tabUnselectedBody[ i ].setAttribute( 'aria-hidden', true );
		}
	},
	anchorTabId( $selector ) {
		const tabsHash = window.location.hash;

		if ( '' !== tabsHash && /^#uagb-tabs__tab\d$/.test( tabsHash ) ) {
			const mainWrapClass = $selector;
			const tabId = escape( tabsHash.substring( 1 ) );
			const selectedLi = document.querySelector( '#' + tabId );
			const topPos = selectedLi.getBoundingClientRect().top + window.pageYOffset;
			window.scrollTo( {
				top: topPos,
				behavior: 'smooth',
			} );
			const tabNum = selectedLi.querySelector( 'a.uagb-tabs-list' ).getAttribute( 'data-tab' );
			const listPanel = selectedLi.closest( '.uagb-tabs__panel' );
			const tabSelectedBody = document.querySelector(
				mainWrapClass + ' > .uagb-tabs__body-wrap > .uagb-inner-tab-' + tabNum
			);
			const tabUnselectedBody = document.querySelectorAll(
				mainWrapClass +
					' > .uagb-tabs__body-wrap > .uagb-tabs__body-container:not(.uagb-inner-tab-' +
					tabNum +
					')'
			);
			const allLi = selectedLi.querySelectorAll( 'a.uagb-tabs-list' );
			const selectedAnchor = selectedLi.querySelector( 'a.uagb-tabs-list' );

			// Remove old li active class.
			listPanel.querySelector( '.uagb-tabs__active' ).classList.remove( 'uagb-tabs__active' );

			// Remove old tab body active class.
			document
				.querySelector( mainWrapClass + ' > .uagb-tabs__body-wrap > .uagb-tabs-body__active' )
				.classList.remove( 'uagb-tabs-body__active' );

			// Set aria-selected attribute as flase for old active tab.
			for ( let i = 0; i < allLi.length; i++ ) {
				allLi[ i ].setAttribute( 'aria-selected', false );
			}

			// Set selected li active class.
			selectedLi.classList.add( 'uagb-tabs__active' );

			// Set aria-selected attribute as true for new active tab.
			selectedAnchor.setAttribute( 'aria-selected', true );

			// Set selected tab body active class.
			tabSelectedBody.classList.add( 'uagb-tabs-body__active' );

			// Set aria-hidden attribute false for selected tab body.
			tabSelectedBody.setAttribute( 'aria-hidden', false );

			// Set aria-hidden attribute true for all unselected tab body.
			for ( let i = 0; i < tabUnselectedBody.length; i++ ) {
				tabUnselectedBody[ i ].setAttribute( 'aria-hidden', true );
			}
		}
	},
};
