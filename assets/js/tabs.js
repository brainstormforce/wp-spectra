window.addEventListener( 'load', function () { uagbTabInit(); anchorTabId(); });
window.addEventListener( 'hashchange', anchorTabId, false );
	
function uagbTabInit(){
	var tabWrap = document.getElementsByClassName( 'uagb-tabs__wrap' );
	for ( var item = 0; item < tabWrap.length; item++ ) {
		var tabList = tabWrap[item].querySelector( '.uagb-tabs__panel li:not(.uagb-tabs__active) a' );
        for ( var tab = 0; tab < tabList.length; tab++ ) {
			tabList[tab].setAttribute('aria-selected', 'false');
		}
		tabWrap[item].querySelector('.uagb-tabs__panel li.uagb-tabs__active a').setAttribute('aria-selected', 'true');
        
        var tabPanel = tabWrap[item].querySelectorAll('.uagb-tabs__panel li a');
        
        for ( var panel = 0; panel < tabPanel.length; panel++ ) {
			tabPanel[panel].addEventListener("click", function( e ) {
                tabClickEvent( e, this , this.parentElement , tabPanel.length);
            });
		}
         
    }
}
function tabClickEvent(e , tabName , list , count){

    e.preventDefault();

    var tabId = tabName.getAttribute( 'data-tab' );

    var listPanel = list.closest( '.uagb-tabs__panel' );

    var oldActiveTab = listPanel.querySelector( '.uagb-tabs__active' );
    oldActiveTab.classList.remove( 'uagb-tabs__active' );
    
    listPanel.querySelector( 'a.uagb-tabs-list' ).setAttribute( 
        'aria-selected', 'false'
    );

    list.classList.add( 'uagb-tabs__active' );

    tabName.setAttribute( 'aria-selected', 'true' );
    var mainWrap = list.closest( '.uagb-tabs__wrap' );
    for ( var idx = 0; idx < count; idx++ ) {
        mainWrap.classList.remove( 'uagb-active-tab-'+idx); 
    }
    mainWrap.classList.add('uagb-active-tab-'+ tabId)
    mainWrap.querySelector( '.uagb-tabs__body-wrap .uagb-tabs__body-container:not(.uagb-inner-tab-' + tabId + ')' ).setAttribute( 'aria-hidden', 'true' );
    mainWrap.querySelector( '.uagb-tabs__body-wrap .uagb-inner-tab-' + tabId ).setAttribute( 'aria-hidden', 'false' );

}
function anchorTabId() {
	if ( window.location.hash != '' ) {
		if ( /^#uagb-tabs__tab\d$/.test(window.location.hash)) {
			var tabId = escape(window.location.hash.substring(1));
            var tabPanel = document.querySelector('#' + tabId );
                var tabNum = tabPanel.querySelector('a.uagb-tabs-list').getAttribute( 'data-tab' );
                var listPanel = tabPanel.closest( '.uagb-tabs__panel' );

                var oldActiveTab = listPanel.querySelector( '.uagb-tabs__active' );
                oldActiveTab.classList.remove( 'uagb-tabs__active' );

                listPanel.querySelector( 'a.uagb-tabs-list' ).setAttribute( 
                    'aria-selected', 'false'
                );
                tabPanel.classList.add( 'uagb-tabs__active' );
                tabPanel.setAttribute( 'aria-selected', 'true' );

                var count = listPanel.getElementsByTagName("li").length;
                var mainWrap = tabPanel.closest( '.uagb-tabs__wrap' );
                for ( var idx = 0; idx < count; idx++ ) {
                    mainWrap.classList.remove( 'uagb-active-tab-'+idx); 
                }
                mainWrap.classList.add('uagb-active-tab-'+tabNum)
                mainWrap.querySelector( '.uagb-tabs__body-wrap .uagb-tabs__body-container:not(.uagb-inner-tab-' + tabNum + ')' ).setAttribute( 'aria-hidden', 'true' );
                mainWrap.querySelector( '.uagb-tabs__body-wrap .uagb-inner-tab-' + tabNum ).setAttribute( 'aria-hidden', 'false' );
        }
	}
}