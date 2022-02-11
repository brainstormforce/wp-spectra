import { __ } from '@wordpress/i18n';
import { useSelector, useDispatch } from 'react-redux';
import { Switch } from '@headlessui/react'
import apiFetch from '@wordpress/api-fetch';
import UAGB_Block_Icons from '@Common/block-icons';
import { useEffect } from 'react';

function classNames( ...classes ) {
    return classes.filter( Boolean ).join( ' ' )
}

const MasonryGalleryExtension = () => {

    const enableMasonryExtension = useSelector( ( state ) => state.enableMasonryExtension );
    const dispatch = useDispatch();

    const masonryGallerysStatus = 'disabled' === enableMasonryExtension ? false : true;

    useEffect( () => {

        const formData = new window.FormData();

		formData.append( 'action', 'uag_enable_masonry_gallery' );
		formData.append( 'security', uag_react.enable_masonry_gallery_nonce );
		formData.append( 'value', enableMasonryExtension );

		apiFetch( {
			url: uag_react.ajax_url,
			method: 'POST',
			body: formData,
		} ).then( () => {
		} );

    }, [enableMasonryExtension] );

    const updateMasonryGallerysStatus = () => {

        let assetStatus;
		if ( enableMasonryExtension === 'disabled' ) {
            assetStatus = 'enabled';
		} else {
            assetStatus = 'disabled';
		}

        dispatch( {type: 'UPDATE_ENABLE_MASONRY_EXTENSION', payload: assetStatus } );
    };

    return (
        <div
        key={'masonry-gallery'}
        className="relative rounded-[0.2rem] border border-gray-300 bg-white px-6 py-5 shadow-sm flex items-center space-x-3"
        >
            <div className="flex-shrink-0">
                { UAGB_Block_Icons['masonry-gallery'] }
            </div>
            <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-900 mb-0">{__( 'Masonry Gallery', 'ultimate-addons-for-gutenberg' )}</p>
                <a className="text-sm text-wpcolor hover:text-wphovercolor truncate" href='https://ultimategutenberg.com/docs/masonry-image-gallery/' target="_blank"rel="noreferrer">{__( 'Live Demo', 'ultimate-addons-for-gutenberg' )}</a>
            </div>
            <Switch
                checked={masonryGallerysStatus}
                onChange={updateMasonryGallerysStatus}
                className={classNames(
                    masonryGallerysStatus ? 'bg-wpcolor' : 'bg-gray-200',
                    'relative inline-flex flex-shrink-0 h-5 w-[2.4rem] items-center border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none'
                )}
                >
                <span
                    aria-hidden="true"
                    className={classNames(
                    masonryGallerysStatus ? 'translate-x-5' : 'translate-x-0',
                    'pointer-events-none inline-block h-3.5 w-3.5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200'
                    )}
                />
            </Switch>
        </div>
    );
};

export default MasonryGalleryExtension;
