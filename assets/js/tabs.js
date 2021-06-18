UAGBTabs = {

    init: function ( $selector ) {
       
        var tabsWrap = document.querySelector( $selector );
        var tabActive = tabsWrap.getAttribute( 'data-tab-active' );
        var tabLi = tabsWrap.querySelectorAll( '.uagb-tabs__panel > li.uagb-tab' );
        var tabBody = tabsWrap.querySelectorAll( '.uagb-tabs__inner-tab' );

        // Set initial active class to Tabs body.
        tabBody[ tabActive ].classList.add( 'uagb-tabs-body__active' );

        // Set initial active class to Tabs li.
        tabLi[ tabActive ].classList.add( 'uagb-tabs__active' );
        
        for ( var i = 0; i < tabLi.length; i++ ) { 

            var tabsAnchor = tabLi[i].getElementsByTagName( 'a' )[0];

            // Set initial li ids.
            tabLi[i].setAttribute( 'id', 'uagb-tabs__tab' + i );

            // Set initial aria attributes true for anchor tags.
            tabsAnchor.setAttribute('aria-selected', true );

            if ( ! tabLi[i].classList.contains( 'uagb-tabs__active' ) ) {
                
                // Set aria attributes for anchor tags as false where needed.
               tabsAnchor.setAttribute('aria-selected', false );
            }

            // Set initial data attribute for anchor tags.
            tabsAnchor.setAttribute( 'data-tab', i );
            
            tabsAnchor.mainWrapClass = $selector;
            // Add Click event listener
            tabsAnchor.addEventListener( "click", function( e ) {
                UAGBTabs.tabClickEvent( e, this , this.parentElement );
            });
        }
    },
    tabClickEvent: function( e , tabName , selectedLi  ) {

        e.preventDefault();

        var mainWrapClass = e.currentTarget.mainWrapClass;
        var tabId = tabName.getAttribute( 'data-tab' );
        var mainWrap = document.querySelector( mainWrapClass );
        var tabPanel = selectedLi.closest( '.uagb-tabs__panel' );
        var tabSelectedBody = document.querySelector( mainWrapClass + ' > .uagb-tabs__body-wrap > .uagb-inner-tab-' + tabId );
        var tabUnselectedBody = document.querySelectorAll( mainWrapClass + ' > .uagb-tabs__body-wrap > .uagb-tabs__body-container:not(.uagb-inner-tab-' + tabId + ')' );
        var allLi = tabPanel.querySelectorAll( 'a.uagb-tabs-list' );
        
        // Remove old li active class.
        tabPanel.querySelector( '.uagb-tabs__active' ).classList.remove( 'uagb-tabs__active' );

        //Remove old tab body active class.
        document.querySelector( mainWrapClass + ' > .uagb-tabs__body-wrap > .uagb-tabs-body__active' ).classList.remove( 'uagb-tabs-body__active' );

        // Set aria-selected attribute as flase for old active tab.
        for( var i = 0; i < allLi.length; i++ ) {
            allLi[i].setAttribute( 'aria-selected', false );
        }
         
        // Set selected li active class.
        selectedLi.classList.add( 'uagb-tabs__active' );

        // Set aria-selected attribute as true for new active tab.
        tabName.setAttribute( 'aria-selected', true );
        
        // Set selected tab body active class.
        tabSelectedBody.classList.add( 'uagb-tabs-body__active' );

        // Set aria-hidden attribute false for selected tab body.
        tabSelectedBody.setAttribute( 'aria-hidden', false );

        // Set aria-hidden attribute true for all unselected tab body.
        for( var i = 0; i < tabUnselectedBody.length; i++ ) {
            tabUnselectedBody[i].setAttribute( 'aria-hidden', true );
        }


    },
    anchorTabId: function( $selector ) {

        var tabsHash = window.location.hash;

        if ( '' !== tabsHash && /^#uagb-tabs__tab\d$/.test( tabsHash ) ) {

            var mainWrapClass = $selector;
            var tabId = escape( tabsHash.substring( 1 ) );
            var selectedLi = document.querySelector( '#' + tabId );
            const topPos = selectedLi.getBoundingClientRect().top + window.pageYOffset
            window.scrollTo( {
                top: topPos, 
                behavior: 'smooth' 
            } );
            var tabNum = selectedLi.querySelector( 'a.uagb-tabs-list' ).getAttribute( 'data-tab' );
            var listPanel = selectedLi.closest( '.uagb-tabs__panel' );
            var tabSelectedBody = document.querySelector( mainWrapClass + ' > .uagb-tabs__body-wrap > .uagb-inner-tab-' + tabNum );
            var tabUnselectedBody = document.querySelectorAll( mainWrapClass + ' > .uagb-tabs__body-wrap > .uagb-tabs__body-container:not(.uagb-inner-tab-' + tabNum + ')' );
            var allLi = selectedLi.querySelectorAll( 'a.uagb-tabs-list' );
            var selectedAnchor = selectedLi.querySelector( 'a.uagb-tabs-list' );

            // Remove old li active class.
            listPanel.querySelector( '.uagb-tabs__active' ).classList.remove( 'uagb-tabs__active' );

            // Remove old tab body active class.
            document.querySelector( mainWrapClass + ' > .uagb-tabs__body-wrap > .uagb-tabs-body__active' ).classList.remove( 'uagb-tabs-body__active' );

             // Set aria-selected attribute as flase for old active tab.
            for( var i = 0; i < allLi.length; i++ ) {
                allLi[i].setAttribute( 'aria-selected', false );
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
            for( var i = 0; i < tabUnselectedBody.length; i++ ) {
                tabUnselectedBody[i].setAttribute( 'aria-hidden', true );
            }
        }
    }
}