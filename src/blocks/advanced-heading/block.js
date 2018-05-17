//  Import CSS.
import './style.scss'
import './editor.scss';

const { __ } = wp.i18n; // Import __() from wp.i18n
const { registerBlockType } = wp.blocks; // Import registerBlockType() from wp.blocks
const uagb_el = wp.element.createElement;

// Visit https://wordpress.org/gutenberg/handbook/block-api/ to learn about Block API
registerBlockType( 'ultimate-gutenberg/advanced-heading', {
	title: __( 'UAGB Advanced heading' ),

	icon: 'format-status',

	category: 'formatting',

	// Remove to make block editable in HTML mode.
	supportHTML: true,

	edit: function( props ) {
		return uagb_el(
			'p',
			{ className: props.className },
			__( 'Ultimate Addons For Gutenberg!' )
		);
	},

	save: function( props ) {
		return uagb_el(
			'p',
			{},
			__( 'Ultimate Addons For Gutenberg!' )
		);
	}
} );
