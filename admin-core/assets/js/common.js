( function ( $ ) {
	var switch_to_old_ui = function () {
		$( 'a.switch-to-old-ui' ).on( 'click', function ( e ) {
			e.preventDefault();

			$( this ).text( 'Switching UI...' );
			var data = {
				action: 'uag_switch_to_old_ui',
				cartflows_ui: 'old',
				redirect_url: uag_react.admin_url,
				security: uag_react.switch_to_old_ui_nonce,
			};

			$.ajax( {
				type: 'POST',
				url: uag_react.ajax_url,
				data: data,

				success: function ( response ) {
					if ( response.success ) {
						window.location.href = response.data[ 'redirect_to' ];
					}
				},
			} );
		} );
	};

	var wcf_back_flow_button = function () {
		console.log( typenow );
		if ( 'uag_step' === typenow ) {
			var flow_back_button = $(
				'#wcf-gutenberg-back-flow-button'
			).html();
			if ( flow_back_button.length > 0 ) {
				console.log( flow_back_button );

				$( 'body #editor' )
					.find( '.edit-post-header-toolbar' )
					.append( flow_back_button );
			}
		}
	};

	$( document ).ready( function ( $ ) {
		switch_to_old_ui();

		setTimeout( function () {
			wcf_back_flow_button();
		}, 300 );
		//wcf_back_flow_button();
	} );
} )( jQuery );
