
(function ($) {
    $ = jQuery;
    jQuery('.uagb-tabs__wrap').each(function () {
       
        var activeTab = jQuery(this).data('tab-active');
        var tabs = jQuery(this).find('.uagb-tab');
        var bodyContainers = jQuery(this).find('.uagb-tabs__body-container');

        tabs.on( 'click', function ( event ) {
            event.preventDefault();
            var currentTabActive = jQuery( event.target ).closest( '.uagb-tab' );
            var href = currentTabActive.find( 'a' ).attr( 'href' );

            tabs.removeClass( 'uagb-tabs__active' );
            currentTabActive.addClass( 'uagb-tabs__active' );
            bodyContainers.find( '.uagb-tabs__body' ).hide();
            bodyContainers.find( '.uagb-tabs__body[aria-labelledby="' + href.replace( /^#/, "" ) + '"]' ).show();
        } );

        tabs.eq( activeTab ).trigger( 'click' ); // Default
        
    });

})( jQuery )