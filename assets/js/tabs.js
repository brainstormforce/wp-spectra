
(function ($) {
    $ = jQuery;
    jQuery('.uagb-tabs__wrap').each(function () {
       
        var activeTab = jQuery(this).data('tab-active');

        var tab = jQuery(this).find('li.uagb-tab:not(".uagb-tabs__active")');
        if(jQuery(this).prop('id') !== '') {
            tab = jQuery(this).find('li.uagb-tab:not(".ui-state-active")');
        }
        var tabs = jQuery(this).find('.uagb-tab');
        var bodyHeaders = jQuery(this).find('.uagb-tabs__body-header');
        var bodyContainers = jQuery(this).find('.uagb-tabs__body-container');

        if(jQuery(this).prop('id') !== '') {
            jQuery( this ).find( ".uagb-tab a:not(.ui-tabs-anchor)" ).unbind( "click" );
            // Render tabs UI
            jQuery( this ).tabs( {
                active: parseInt( activeTab ),
                activate: function ( e, ui ) {
                    var newIdx = ui.newTab.index();
                    bodyHeaders.removeClass( 'uagb-tabs__active' );
                    bodyHeaders.eq( newIdx ).addClass( 'uagb-tabs__active' );
                }
            } );
        } else {

            jQuery( this ).find( ".uagb-tab a:not(.uagb-tabs-anchor)" ).unbind( "click" );

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
        }

        bodyHeaders.eq(activeTab).addClass('header-active');
    });

})( jQuery )