import classnames from 'classnames';
import React from 'react';
import { __ } from '@wordpress/i18n';
import { useDeviceType } from '@Controls/getPreviewType';

export default function save( props ) {
	const { block_id, height,
		theight,
		mheight,
		zoom,
		tzoom,
		mzoom, address, language } = props.attributes;
	const encoded_address = encodeURI( address );
	const lang_par = language ? language : 'en';
	let deviceHeight, deviceZoom;

	if( deviceType == 'desktop' ){
		deviceHeight = height;
		deviceZoom = zoom;
	} else if( deviceType == 'tablet' ){
		deviceHeight = theight;
		deviceZoom = tzoom;
	} else {
		deviceHeight = mheight;
		deviceZoom = mzoom;
	}
	const url = `https://www.google.com/maps/embed/v1/place?key=${ wp.uagb_google_api_key }&q=${ encoded_address }&zoom=${ deviceZoom }&language=${ lang_par }`;
	const deviceType = useDeviceType();

	return (
		<div
			className={ classnames(
				props.className,
				'uagb-google-map__wrap',
				`uagb-block-${ block_id }`
			) }
		>
			<iframe
				className="uagb-google-map__iframe"
				title={
					__( 'Google Map for ', 'ultimate-addons-for-gutenberg' ) +
					address
				}
				src={ url }
				style={ { deviceHeight } }
			></iframe>
		</div>
	);
}
