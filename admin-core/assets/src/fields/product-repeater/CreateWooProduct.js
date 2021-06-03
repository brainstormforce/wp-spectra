import { __ } from '@wordpress/i18n';

function CreateWooProduct( props ) {
	const createNewProduct = function ( event ) {
		var button = event.target;

		// Function to create an HTML elements
		function _create_html_element( args, appent_to ) {
			window.htmlElement = document.createElement( args[ 'element' ] );
			window.htmlElement.id = args[ 'id' ];
			window.htmlElement.className = args[ 'class' ];

			if ( 'body' === appent_to ) {
				document
					.getElementsByTagName( 'body' )[ 0 ]
					.appendChild( window.htmlElement );
			} else {
				document
					.getElementById( appent_to )
					.appendChild( window.htmlElement );
			}
		}

		// Function to create Iframe
		function _create_iframe_element( args, appent_to ) {
			window.iFrameElement = document.createElement( args[ 'element' ] );
			window.iFrameElement.id = args[ 'id' ];
			window.iFrameElement.className = args[ 'class' ];
			window.iFrameElement.frameborder = args[ 'border' ];
			window.iFrameElement.allowtransparency = args[ 'transparency' ];
			window.iFrameElement.src = args[ 'src' ];

			window.iFrameElement.setAttribute(
				'style',
				'opacity: 0; visibility:hidden;'
			);

			var created = document
				.getElementById( appent_to )
				.appendChild( window.iFrameElement );

			var ifrm = document.getElementById(
				'wcf-create-woo-product-iframe'
			);

			var doc = ifrm.contentDocument
				? ifrm.contentDocument
				: ifrm.contentWindow.document;

			doc.body.classList.add( 'wcf-in-iframe' );

			/* Create Close Button */
			var args = {
				element: 'a',
				id: 'wcf-close-create-woo-product',
				class: 'wcf-close-create-woo-product close-icon',
			};
			_create_html_element( args, 'wcf-create-woo-product-wrap' );

			// Display Iframe
			window.iFrameElement.setAttribute(
				'style',
				'opacity: 1; visibility:visible;'
			);

			var product_wrap = document.getElementById(
				'wcf-create-woo-product-wrap'
			);

			product_wrap.classList.add( 'product-loaded' );
		}

		// Function to destroy the Iframe & close the popup.
		function wcf_open_create_woo_product_popup( button ) {
			event.preventDefault();

			var create_btn = button;

			/* Display Loading */
			create_btn.classList.add( 'updating-message' );

			// Create wrapper div.
			var args = {
				element: 'div',
				id: 'wcf-create-woo-product-overlay',
				class: 'wcf-create-woo-product-overlay',
			};

			_create_html_element( args, 'body' );

			/* Create frame wrap */
			var args = {
				element: 'div',
				id: 'wcf-create-woo-product-wrap',
				class: 'wcf-create-woo-product-wrap',
			};

			_create_html_element( args, 'wcf-create-woo-product-overlay' );

			var overlay = document.getElementById(
				'wcf-create-woo-product-overlay'
			);

			overlay.classList.add( 'open' );

			/* Create Iframe */
			var args = {
				element: 'iframe',
				id: 'wcf-create-woo-product-iframe',
				class: 'wcf-woo-product-iframe',
				border: 0,
				transparency: 'true',
				src: uag_react.create_product_src,
			};

			_create_iframe_element( args, 'wcf-create-woo-product-wrap' );

			document.body.classList.add( 'wcf-create-woo-iframe-opened' );
		}

		function _destroy_create_woo_product_iframe( overlay_class ) {
			var product_wrap = document.getElementById(
				'wcf-create-woo-product-wrap'
			);

			window.iFrameElement.setAttribute(
				'style',
				'opacity: 0; visibility:hidden;'
			);

			document.body.classList.remove( 'wcf-create-woo-iframe-opened' );
			overlay_class.classList.remove( 'open' );
			button.classList.remove( 'updating-message' );
			product_wrap.classList.remove( 'product-loaded' );
			overlay_class.remove();
		}
		function wcf_close_create_woo_product_popup() {
			var close_icon = document.getElementById(
				'wcf-close-create-woo-product'
			);

			var overlay_class = document.getElementById(
				'wcf-create-woo-product-overlay'
			);

			close_icon.addEventListener( 'click', function () {
				if (
					close_icon.classList.contains( 'close-icon' ) &&
					overlay_class.classList.contains( 'open' )
				) {
					_destroy_create_woo_product_iframe( overlay_class );
				}
			} );

			overlay_class.addEventListener( 'click', function () {
				if ( overlay_class.classList.contains( 'open' ) ) {
					_destroy_create_woo_product_iframe( overlay_class );
				}
			} );
		}

		wcf_open_create_woo_product_popup( button );

		wcf_close_create_woo_product_popup();
	};

	return (
		<a
			className="wcf-creat-new-product wcf-button wcf-button--secondary"
			onClick={ createNewProduct }
		>
			{ __( 'Create Product', 'ultimate-addons-for-gutenberg' ) }
		</a>
	);
}

export default CreateWooProduct;
