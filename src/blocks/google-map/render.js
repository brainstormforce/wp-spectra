import React, { useLayoutEffect } from 'react';
import classnames from 'classnames';
import { __ } from '@wordpress/i18n';
import styles from './editor.lazy.scss';
import { getFallbackNumber } from '@Controls/getAttributeFallback';

import { useDeviceType } from '@Controls/getPreviewType';

const Render = ( props ) => {

	const deviceType = useDeviceType();

	// Add and remove the CSS on the drop and remove of the component.
	useLayoutEffect( () => {
		styles.use();
		return () => {
			styles.unuse();
		};
	}, [] );

	props = props.parentProps;

	const blockName = props.name.replace( 'uagb/', '' );

	const {
		className,
		attributes: { isPreview, zoom, address, language },
	} = props;

	const encoded_address = encodeURI( address );
	const lang_par = language ? language : 'en';

	const url = `https://www.google.com/maps/embed/v1/place?key=${ wp.uagb_google_api_key }&q=${ encoded_address }&zoom=${ getFallbackNumber( zoom, 'zoom', blockName ) }&language=${ lang_par }`;
	const previewImageData = `${ uagb_blocks_info.uagb_url }/admin/assets/preview-images/gmap.png`;
	return (
		isPreview  ? <img width='100%' src={previewImageData} alt=''/> :
		<div
			className={ classnames(
				className,
				'uagb-google-map__wrap',
				`uagb-block-${ props.clientId.substr( 0, 8 ) }`,
				`uagb-editor-preview-mode-${ deviceType.toLowerCase() }`,
			) }
		>
			<iframe
				className="uagb-google-map__iframe"
				title={
					__( 'Google Map for ', 'ultimate-addons-for-gutenberg' ) +
					address
				}
				src={ url }
			></iframe>
		</div>
	);
};

export default React.memo( Render );
