( function( wp ) {
	var el = wp.element.createElement;
	var __ = wp.i18n.__;

	// Visit https://wordpress.org/gutenberg/handbook/block-api/ to learn about Block API
	wp.blocks.registerBlockType( 'ultimate-gutenberg/advanced-heading', {
		title: __( 'UAGB Advanced heading' ),

		icon: 'format-status',

		category: 'formatting',

		// Remove to make block editable in HTML mode.
		supportHTML: true,

		edit: function( props ) {
			return el(
				'p',
				{ className: props.className },
				__( 'Ultimate Addons For Gutenberg!' )
			);
		},

		save: function() {
			return el(
				'p',
				{},
				__( 'Ultimate Addons For Gutenberg!' )
			);
		}
	} );
} )( window.wp );
