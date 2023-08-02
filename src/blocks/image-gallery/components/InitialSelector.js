import { __ } from '@wordpress/i18n';
import { Button } from '@wordpress/components';
import { MediaUpload } from '@wordpress/block-editor';
import UAGB_Block_Icons from '@Controls/block-icons';

const InitialSelector = ( { attributes, setAttributes } ) => {
	const { mediaGallery, mediaIDs } = attributes;

	const handleGalleryUpdate = ( media ) => {
		let goodToGo = true;
		const updatedIDs = [];
		media.forEach( ( image ) => {
			if ( ! image || ! image.url || ! image.type || 'image' !== image.type ) {
				goodToGo = false;
			} else {
				updatedIDs.push( image.id );
			}
		} );
		if ( goodToGo ) {
			setAttributes( {
				mediaGallery: media,
				mediaIDs: updatedIDs,
				readyToRender: true,
			} );
		}
	};

	return (
		setAttributes !== 'inapplicable' && (
			<div className="spectra-image-gallery-init-wrapper">
				<div className='spectra-image-gallery-init-wrapper__title'>
					{ UAGB_Block_Icons.image_gallery }
					{ __( 'Image Gallery', 'ultimate-addons-for-gutenberg' ) }
				</div>
				<p className='spectra-image-gallery-init-wrapper__help-text'>
					{ __( 'Select your images to get started', 'ultimate-addons-for-gutenberg' ) }
				</p>
				<MediaUpload
					title={ __( 'Select Images', 'ultimate-addons-for-gutenberg' ) }
					onSelect={ handleGalleryUpdate }
					allowedTypes={ [ 'image' ] }
					multiple={ true }
					value={ mediaIDs }
					gallery={ true }
					render={ ( { open } ) => (
						<Button isSecondary onClick={ open }>
							{ ! mediaGallery[ 0 ]?.url
								? __( 'Select Images', 'ultimate-addons-for-gutenberg' )
								: __( 'Replace Images', 'ultimate-addons-for-gutenberg' ) }
						</Button>
					) }
				/>
			</div>
		)
	);
};

export default InitialSelector;
