import React, { useState } from 'react';
import './ImageSelector.scss';

const { __ } = wp.i18n;
function ImageSelector( props ) {
	const { name, id, desc, tooltip, value, label } = props;

	const [ style, setStyle ] = useState( value ? {} : { display: 'none' } );

	const [ imageval, setImageval ] = useState( value );
	const [ imageObj, setimageObj ] = useState( '' );

	const showMedia = ( event ) => {
		var file_frame;
		window.inputWrapper = '';

		event.preventDefault();

		var button = event.target;

		window.inputWrapper = button.closest( '.wcf-image-selector-field' );
		if ( file_frame ) {
			file_frame.open();
			return;
		}

		// Create the media frame.
		file_frame = wp.media( {
			multiple: false,
		} );

		// When an image is selected, run a callback.
		file_frame.on( 'select', function () {
			var attachment = file_frame
				.state()
				.get( 'selection' )
				.first()
				.toJSON();

			var preview = document.getElementById( 'wcf-image-preview' );
			// place first attachment in field
			preview.setAttribute( 'style', 'display:block' );

			var image = document.getElementsByClassName( 'wcf-image' );

			setImageval( attachment.url );
			setimageObj( attachment );

			//image obj.
			var size = Object.keys( attachment ).length;

			// if ( size > 0 ) {
			// 	window.inputWrapper
			// 		.find( '.wcf-image-obj' )
			// 		.val( JSON.stringify( attachment ) );
			// }
			preview.setAttribute( 'style', 'display:block' );
		} );

		// Finally, open the modal
		file_frame.open();
	};

	const removeImage = ( event ) => {
		event.preventDefault();

		var button = event.target;
		setImageval( '' );
		setimageObj( '' );
		setStyle( { display: 'none' } );
	};
	return (
		<div className="wcf-field wcf-image-selector-field">
			<div className="wcf-field__data">
				{ label && (
					<div class="wcf-field__data--label">
						<label>{ label }</label>
					</div>
				) }
				<div class="wcf-field__data--content">
					<div className="wcf-image-selector-field__input">
						<div id="wcf-image-preview" style={ style }>
							<img
								src={ imageval }
								className="saved-image"
								name={ name }
								width="150"
							/>
						</div>
						<input
							type="hidden"
							id={ name }
							class="wcf-image"
							name={ name }
							value={ imageval }
						></input>
						<input
							type="hidden"
							id={ name + '-obj' }
							class="wcf-image-obj"
							name={ name + '-obj' }
							value={ JSON.stringify( imageObj ) }
						/>
						<div className="wcf-image-selector-field-buttons">
							<div className="wcf-image-selector-field-button-select">
								<button
									type="button"
									className="wcf-select-image wcf-button wcf-button--secondary"
									onClick={ showMedia }
								>
									{ __( 'Select Image', 'ultimate-addons-for-gutenberg' ) }
								</button>
							</div>
							{ imageval && (
								<div className="wcf-image-selector-field-button-remove">
									<button
										type="button"
										className="wcf-remove-image wcf-button wcf-button--secondary"
										onClick={ removeImage }
									>
										{ __( 'Remove Image', 'ultimate-addons-for-gutenberg' ) }
									</button>
								</div>
							) }
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default ImageSelector;
