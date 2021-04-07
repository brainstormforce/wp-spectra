window.addEventListener( 'load', function () { Check(); anchorTabs(); });
window.addEventListener( 'hashchange', anchorTabs, false );
	
function Check(){
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
                Click( e, this , this.parentElement , tabPanel.length);
            });
		}
         
    }
}
function Click(e , tabName , list , count){

    e.preventDefault();

    var tabId = tabName.getAttribute( 'data-tab' );

    var panel = list.closest( '.uagb-tabs__panel' );

    var old_active = panel.querySelector( '.uagb-tabs__active' );
    old_active.classList.remove( 'uagb-tabs__active' );
    
    panel.querySelector( 'a.uagb-tabs-list' ).setAttribute( 
        'aria-selected', 'false'
    );

    list.classList.add( 'uagb-tabs__active' );

    tabName.setAttribute( 'aria-selected', 'true' );
    var main = list.closest( '.uagb-tabs__wrap' );
    for ( var idx = 0; idx < count; idx++ ) {
        main.classList.remove( 'uagb-active-tab-'+idx); 
    }
    main.classList.add('uagb-active-tab-'+ tabId)
    main.querySelector( '.uagb-tabs__body-wrap > .uagb-tabs__body-container:not(.uagb-inner-tab-' + tabId + ')' ).setAttribute( 'aria-hidden', 'true' );
    main.querySelector( '.uagb-tabs__body-wrap > .uagb-inner-tab-' + tabId ).setAttribute( 'aria-hidden', 'false' );

}
function anchorTabs() {
	if ( window.location.hash != '' ) {
		if ( ( window.location.hash + '.uagb-tab' ).length ) {
			var tabid = window.location.hash.substring(1);
            var tabPanel = document.querySelector('#' + tabid );
            var tabnumber = tabPanel.querySelector('a.uagb-tabs-list').getAttribute( 'data-tab' );
            var parent = tabPanel.closest( '.uagb-tabs__panel' );

            var old_active = parent.querySelector( '.uagb-tabs__active' );
            old_active.classList.remove( 'uagb-tabs__active' );

            parent.querySelector( 'a.uagb-tabs-list' ).setAttribute( 
                'aria-selected', 'false'
            );
            tabPanel.classList.add( 'uagb-tabs__active' );
            tabPanel.setAttribute( 'aria-selected', 'true' );

            var count = parent.getElementsByTagName("li").length;
            var main = tabPanel.closest( '.uagb-tabs__wrap' );
            for ( var idx = 0; idx < count; idx++ ) {
                main.classList.remove( 'uagb-active-tab-'+idx); 
            }
            main.classList.add('uagb-active-tab-'+tabnumber)
            main.querySelector( '.uagb-tabs__body-wrap > .uagb-tabs__body-container:not(.uagb-inner-tab-' + tabnumber + ')' ).setAttribute( 'aria-hidden', 'true' );
            // main.querySelector( '.uagb-tabs__body-wrap > .uagb-inner-tab-' + tabnumber ).setAttribute( 'aria-hidden', 'false' );

		}
	}
}