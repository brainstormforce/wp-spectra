import classnames from "classnames";
import React from "react";
import { __ } from '@wordpress/i18n';

const api_key = 'AIzaSyAsd_d46higiozY-zNqtr7zdA81Soswje4';

export default function save( props ) {

	const { block_id, height, zoom, address, language } = props.attributes;

	const encoded_address = encodeURI( address );

	const lang_par = language ? language : 'en';

	const url = `https://www.google.com/maps/embed/v1/place?key=${ api_key }&q=${ encoded_address }&zoom=${ zoom }&language=${ lang_par }`;

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
				title={ __( 'Google Map for ' + address ) }
				src={ url }
				style={ { height } }></iframe>
		</div>
	);

}
