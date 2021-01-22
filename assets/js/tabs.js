
(function ($) {
    $ = jQuery;
    jQuery('.uagb-tabs__wrap').each(function () {
       
        var activeTab = jQuery(this).data('tab-active');
        var tabPanel = jQuery(this).find('.uagb-tabs-panel');

        var tab = jQuery(this).find('li.uagb-tab:not(".uagb-tabs__active")');
        if(jQuery(this).prop('id') !== '') {
            tab = jQuery(this).find('li.uagb-tab:not(".ui-state-active")');
        }
        var tabs = jQuery(this).find('.uagb-tab');
        var bodyHeaders = jQuery(this).find('.uagb-tabs__body-header');
        var bodyContainers = jQuery(this).find('.uagb-tabs__body-container');
        var bgColor = tab.css('background-color');
        var borderColor = tab.css('border-color');
        var borderWidth = tab.css('border-width');
        var borderStyle = tab.css('border-style');
        var borderRadius = tab.css('border-radius');
        var textColor = tab.find('a').css('color');

        if(jQuery(this).prop('id') !== '') {
            alert('dhsassd');
            jQuery( this ).find( ".uagb-tab a:not(.ui-tabs-anchor)" ).unbind( "click" );
            // Render tabs UI
            jQuery( this ).tabs( {
                active: parseInt( activeTab ),
                activate: function ( e, ui ) {
                    var newIdx = ui.newTab.index();
                    bodyHeaders.removeClass( 'header-active' );
                    bodyHeaders.eq( newIdx ).addClass( 'header-active' );
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
        bodyHeaders.css({
            backgroundColor: bgColor,
            color: textColor,
            borderColor: borderColor,
            borderWidth: borderWidth,
            borderStyle: borderStyle,
            borderRadius: borderRadius
        })
    });

    jQuery('.uagb-tabs__body-header').click(function () {
        var bodyContainer = jQuery(this).closest('.uagb-tabs__body-container');
        var bodyWrapper = jQuery(this).closest('.uagb-tabs__body-wrapper');
        var tabsWrapper = jQuery(this).closest('.uagb-tabs-wrapper');
        var tabsPanel = tabsWrapper.find('.uagb-tabs-panel');
        var idx = bodyContainer.index();

        bodyWrapper.find('.uagb-tabs__body-header').removeClass('header-active');
        jQuery(this).addClass('header-active');
        tabsPanel.find('.uagb-tab').eq(idx).find('a').trigger('click');
    })
})( jQuery )