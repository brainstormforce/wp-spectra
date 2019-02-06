( function( $ ) {

	Tour = {

		init: function() {

			$( document ).delegate( ".uagb-activate-widget", "click", Tour._activate_widget )
			$( document ).delegate( ".uagb-deactivate-widget", "click", Tour._deactivate_widget )

			$( document ).delegate( ".uagb-activate-all", "click", Tour._bulk_activate_widgets )
			$( document ).delegate( ".uagb-deactivate-all", "click", Tour._bulk_deactivate_widgets )

			$( document ).delegate( ".uag-install-theme", "click", Tour._installNow );
			$( document ).delegate( ".uag-activate-theme", "click", Tour._activateTheme);

		},

		/**
		 * Activate All Widgets.
		 */
		_bulk_activate_widgets: function( e ) {
			var button = $( this )

			var data = {
				action: "uagb_bulk_activate_widgets",
				nonce: uagb.ajax_nonce,
			}

			if ( button.hasClass( "updating-message" ) ) {
				return
			}

			$( button ).addClass("updating-message")

			e.preventDefault()
		},

		/**
		 * Deactivate All Widgets.
		 */
		_bulk_deactivate_widgets: function( e ) {
			var button = $( this )

			var data = {
				action: "uagb_bulk_deactivate_widgets",
				nonce: uagb.ajax_nonce,
			}

			if ( button.hasClass( "updating-message" ) ) {
				return
			}
			$( button ).addClass("updating-message")

			e.preventDefault()
		},

		/**
		 * Activate Module.
		 */
		_activate_widget: function( e ) {
			var button = $( this ),
				id     = button.parents("li").attr("id")

			var data = {
				block_id : id,
				action: "uagb_activate_widget",
				nonce: uagb.ajax_nonce,
			}

			if ( button.hasClass( "updating-message" ) ) {
				return
			}

			$( button ).addClass("updating-message")

			e.preventDefault()
		},

		/**
		 * Deactivate Module.
		 */
		_deactivate_widget: function( e ) {
			var button = $( this ),
				id     = button.parents("li").attr("id")
			var data = {
				block_id: id,
				action: "uagb_deactivate_widget",
				nonce: uagb.ajax_nonce,
			}

			if ( button.hasClass( "updating-message" ) ) {
				return
			}

			$( button ).addClass("updating-message")

			e.preventDefault()
		},


		/**
		 * Activate Success
		 */
		_activateTheme: function( event, response ) {

			event.preventDefault();

			var $button = jQuery(event.target);

			var $slug = $button.data('slug');

			$button.text( 'Activating Astra...' );

			// WordPress adds "Activate" button after waiting for 1000ms. So we will run our activation after that.
			setTimeout( function() {

				$.ajax({
					url: uagb.ajax_url,
					type: 'POST',
					data: {
						'action' : 'uag-theme-activate',
						'slug'   : $slug,
					},
				})
				.done(function (result) {

					if( result.success ) {
						$button.text( 'Astra Activated' );

						setTimeout( function() {
							$button.parents( '.uagb-sidebar' ).find( '.uagb-astra-sidebar' ).hide();
						}, 1000 );
					}

				});

			}, 1200 );

		},

		/**
		 * Install Now
		 */
		_installNow: function(event)
		{
			event.preventDefault();

			var $button 	= jQuery( event.target ),
				$document   = jQuery(document);

			$button.text( 'Installing Astra...' );

			if ( wp.updates.shouldRequestFilesystemCredentials && ! wp.updates.ajaxLocked ) {
				wp.updates.requestFilesystemCredentials( event );

				$document.on( 'credential-modal-cancel', function() {
					$button.text( wp.updates.l10n.installNow );
					wp.a11y.speak( wp.updates.l10n.updateCancel, 'polite' );
				} );
			}

			wp.updates.installTheme( {
				slug:    $button.data( 'slug' )
			}).then(function(e){
				$button.removeClass( 'uag-install-theme' ).addClass( 'uag-activate-theme' ).text( 'Activate Theme' );
			});
		},

	}

	$( document ).ready(function() {
		Tour.init()
	})


} )( jQuery )
