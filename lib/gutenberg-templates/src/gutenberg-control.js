import { registerPlugin } from '@wordpress/plugins';
import {
	render,
} from '@wordpress/element';
import { useDispatch, subscribe } from '@wordpress/data';
import { STORE_KEY } from './store';

function LibraryToolbarButton() {
	const {
		setTogglePopup,
	} = useDispatch( STORE_KEY );
	const LibraryButton = () => (
		<button
			onClick={ setTogglePopup }
			id="ast-block-templates-button"
			className="button components-button is-primary"
		>
			{ ast_block_template_vars.display_button_logo && '' === ast_block_template_vars.white_label_name ? (
				<img
					src={ 'active' === ast_block_template_vars.astra_sites_status || 'active' === ast_block_template_vars.astra_sites_pro_status ? ast_block_template_vars.st_button_logo : ast_block_template_vars.button_logo }
					className={ `logo ${ ast_block_template_vars.button_class }` }
					alt="Button Logo"
				/>
			) : (
				''
			) }
			{ ast_block_template_vars.white_label_name ? ast_block_template_vars.white_label_name : ast_block_template_vars.button_text }
		</button>
	);

	const renderKitButton = ( selector ) => {
		const patternButton = document.createElement( 'div' );
		patternButton.id = '#ast-block-templates-button-wrap';
		selector.appendChild( patternButton );
		render( <LibraryButton />, patternButton );
	};

	subscribe( () => {
		setTimeout( () => {
			const editToolbar = document.querySelector( '.edit-post-header-toolbar' );
			if ( ! editToolbar ) {
				return;
			}
			if ( ! editToolbar.querySelector( '#ast-block-templates-button' ) ) {
				renderKitButton( editToolbar );
			}
		}, 100 );
	} );

	return null;
}
registerPlugin( 'gutenberg-templates-library', {
	render: LibraryToolbarButton,
} );
