import React from 'react';
import { __ } from '@wordpress/i18n';
import { Button } from '@wordpress/components';
import { MediaUpload } from '@wordpress/block-editor';
import UAGB_Block_Icons from '@Controls/block-icons';

const InitialSelector = ( { attributes, setAttributes } ) => {

    const {
        mediaGallery,
        mediaIDs,
    } = attributes;

	const handleGalleryUpdate = ( media ) => {
        let goodToGo = true;
		let updatedIDs = [];
		let focusList = [];
        media.forEach( ( image ) => {
            if ( ! image || ! image.url || ! image.type || 'image' !== image.type ) {
                goodToGo = false;
            }    
            else {
                updatedIDs.push( image.id );
                focusList[ image.id ] = false;
            }            
        } );
        goodToGo && setAttributes( {
            mediaGallery: media,
            mediaIDs: updatedIDs,
            focusList,
            readyToRender: true,
        } );
	};

    return setAttributes !== 'inapplicable' && (
        <div className="uag-image-gallery-init-wrapper">
            { UAGB_Block_Icons.image_gallery }
            <h3>{ __( 'Spectra - Image Gallery', 'ultimate-addons-for-gutenberg' ) }</h3>
            <p>{ __( 'Select your images and you\'re all good to go!', 'ultimate-addons-for-gutenberg' ) }</p>
            <MediaUpload
                title={ __( 'Select Images', 'ultimate-addons-for-gutenberg') }
                onSelect={ handleGalleryUpdate }
                allowedTypes={ [ 'image' ] }
                multiple={ true }
                value={ mediaIDs }
                gallery={ true }
                render={ ( { open } ) => (
                    <Button isSecondary onClick={ open }>
                        { ! mediaGallery[ 0 ]?.url
                            ? __( 'Select Images', 'ultimate-addons-for-gutenberg')
                            : __( 'Replace Images', 'ultimate-addons-for-gutenberg') }
                    </Button>
                ) }
            />
        </div>
    );
};

export default InitialSelector;