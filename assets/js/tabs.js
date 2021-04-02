
jQuery( document ).ready( function( $ ) {
    
	$( '.uagb-tabs__wrap' ).each( function( a ) {
		var StartTab = $( this ).find( '> .uagb-tabs__panel .uagb-tabs__active' ).attr( 'data-tab' );
		var TabsList = $( this ).find( '> .uagb-tabs__panel' ).attr( {
			role: 'tablist',
		} );
		$( this ).find( '> .uagb-tabs__body-wrap > .uagb-tabs__body-container' ).attr( {
			role: 'tabpanel',
			'aria-hidden': 'true',
		} );
		$( this ).find( '> .uagb-tabs__panel a' ).each( function( b ) {
			var tabId = $( this ).attr( 'data-tab' );
			var tabName = $( this ).parent().attr( 'id' );
			$( this ).closest( '.uagb-tabs__wrap' ).find( '.uagb-tabs__body-wrap > .uagb-inner-tab-' + tabId ).attr( 'aria-labelledby', tabName );
		} );
		$( this ).find( '.uagb-tabs__body-wrap > .uagb-inner-tab-' + StartTab ).attr( 'aria-hidden', 'false' );
		$( this ).find( '> .uagb-tabs__panel li:not(.uagb-tabs__active) a' ).each( function() {
			$( this ).attr( {
				role: 'tab',
				'aria-selected': 'false',
				tabindex: '-1',
			} ).parent().attr( 'role', 'presentation' );
		} );
		$( this ).find( '> .uagb-tabs__panel li.uagb-tabs__active a' ).attr( {
			role: 'tab',
			'aria-selected': 'true',
			tabindex: '0',
		} ).parent().attr( 'role', 'presentation' );
		$( TabsList ).delegate( 'a', 'keydown', function( e ) {
			switch ( e.which ) {
				case 37: case 38:
					if ( $( this ).parent().prev().length != 0 ) {
						$( this ).parent().prev().find( '> a' ).click();
					} else {
						$( TabsList ).find( 'li:last > a' ).click();
					}
					break;
				case 39: case 40:
					if ( $( this ).parent().next().length != 0 ) {
						$( this ).parent().next().find( '> a' ).click();
					} else {
						$( TabsList ).find( 'li:first > a' ).click();
					}
					break;
			}
		} );
	} );
	$( '.uagb-tabs__panel li a' ).on( 'click', function( e ) {
		e.preventDefault();
		var tabId = $( this ).attr( 'data-tab' );

		$( this ).closest( '.uagb-tabs__panel' ).find( '.uagb-tabs__active' )
            .removeClass( 'uagb-tabs__active' )
			.find( 'a.uagb-tabs-list' ).attr( {
				tabindex: '-1',
				'aria-selected': 'false',
			} );
		$( this ).closest( '.uagb-tabs__wrap' ).removeClass( function( index, className ) {
			return ( className.match( /\buagb-active-tab-\S+/g ) || [] ).join( ' ' );
		} ).addClass( 'uagb-active-tab-' + tabId );
		$( this ).parent( 'li' ).addClass( 'uagb-tabs__active' );
		$( this ).attr( {
			tabindex: '0',
			'aria-selected': 'true',
		} ).focus();
		$( this ).closest( '.uagb-tabs__wrap' ).find( '.uagb-tabs__body-wrap > .uagb-tabs__body-container:not(.uagb-inner-tab-' + tabId + ')' ).attr( 'aria-hidden', 'true' );
		$( this ).closest( '.uagb-tabs__wrap' ).find( '.uagb-tabs__body-wrap > .uagb-inner-tab-' + tabId ).attr( 'aria-hidden', 'false' );

		var tabEvent = window.document.createEvent( 'UIEvents' );
		tabEvent.initUIEvent( 'uag-tabs-open', true, false, window, 0 );
		window.dispatchEvent( tabEvent );
	} );
	function anchor_tabs() {
		if ( window.location.hash != '' ) {
			if ( $( window.location.hash + '.uagb-tab' ).length ) {
				var tabid = window.location.hash.substring(1);
				var tabnumber = $( '#' + tabid + ' a' ).attr( 'data-tab' );
				// remove active.
				$( '#' + tabid ).closest( '.uagb-tabs__panel' ).find( '.uagb-tabs__active' )
				
					.removeClass( 'uagb-tabs__active' )
					.find( 'a.uagb-tabs-list' ).attr( {
						tabindex: '-1',
						'aria-selected': 'false',
					} );
				// Set active
				$( '#' + tabid ).closest( '.uagb-tabs__wrap' ).removeClass( function( index, className ) {
					return ( className.match( /\buagb-active-tab-\S+/g ) || [] ).join( ' ' );
				} ).addClass( 'uagb-active-tab-' + tabnumber );

				$( '#' + tabid ).addClass( 'uagb-tabs__active' );
				$( '#' + tabid ).find( 'a.uagb-tabs-list' ).attr( {
					tabindex: '0',
					'aria-selected': 'true',
				} ).focus();
				$( '#' + tabid ).closest( '.uagb-tabs__wrap' ).find( '.uagb-tabs__body-wrap > .uagb-tabs__body-container:not(.uagb-inner-tab-' + tabnumber + ')' ).attr( 'aria-hidden', 'true' );
				$( '#' + tabid ).closest( '.uagb-tabs__wrap' ).find( '.uagb-tabs__body-wrap > .uagb-inner-tab-' + tabnumber ).attr( 'aria-hidden', 'false' );
			}
		}
	}
	window.addEventListener( 'hashchange', anchor_tabs, false );
	anchor_tabs();
} );