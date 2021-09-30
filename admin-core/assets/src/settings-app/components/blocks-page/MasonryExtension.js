import { useStateValue } from '@Utils/StateProvider';
import React, { useEffect } from 'react';
import SettingTable from '../common/SettingTable';
import apiFetch from '@wordpress/api-fetch';
import { __ } from '@wordpress/i18n';

let enableMasonryConditionCachedValue;

function MasonryExtension ( props ) {

	const [ { globaldata, options }, dispatch ] = useStateValue();

	useEffect( () => {
		window.onbeforeunload = null;
		enableMasonryConditionCachedValue = options.enable_masonry_gallery;
	}, [] );

	useEffect( () => {
		if (
			enableMasonryConditionCachedValue !== options.enable_masonry_gallery
		) {
			const formData = new window.FormData();

			formData.append( 'action', 'uag_enable_masonry_gallery' );
			formData.append(
				'security',
				uag_react.enable_masonry_gallery_nonce
			);
			formData.append( 'value', options.enable_masonry_gallery );
			dispatch( {
				type: 'SET_OPTION',
				name: 'enable_masonry_gallery',
				value: options.enable_masonry_gallery,
			} );
			apiFetch( {
				url: uag_react.ajax_url,
				method: 'POST',
				body: formData,
			} ).then( () => {
			} );

			enableMasonryConditionCachedValue = options.enable_masonry_gallery;
		}
	}, [ options.enable_masonry_gallery ] );

	const enableMasonryExtensionSettings = globaldata.settings.enable_masonry_gallery;
    
	if( props.cat === 'extensions' || props.cat === 'all' ){
		return (
				<div className={`uag-individual-block-settings-metabox uag-extension__metabox`}>
					<SettingTable settings={ enableMasonryExtensionSettings } />
					<a // eslint-disable-line jsx-a11y/anchor-is-valid
						href=""
						target="_blank"
						rel="noreferrer"
					>
						{ __( 'Documentation', 'ultimate-addons-for-gutenberg' ) }
					</a>
			</div>
		);
	}

	return null;
}

export default MasonryExtension
