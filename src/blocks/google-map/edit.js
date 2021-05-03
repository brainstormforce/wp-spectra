import React, {useEffect} from "react";
import Settings from "./settings";

const api_key = 'AIzaSyAsd_d46higiozY-zNqtr7zdA81Soswje4';

const UAGBGoogleMap = ( props ) => {
	useEffect( () => {
		// Assigning block_id in the attribute.
		props.setAttributes( {
			block_id: props.clientId.substr( 0, 8 ),
		} );
	}, [] );
	// Setup the attributes
	const {
		attributes: { height, zoom, address, language },
	} = props;
	const encoded_address = encodeURI( address );
	const lang_par = language ? language : 'en';
	const url = `https://www.google.com/maps/embed/v1/place?key=${ api_key }&q=${ encoded_address }&zoom=${ zoom }&language=${ lang_par }`;
	return (
		<>
			<Settings parentProps={props} />
			<Render parentProps={props} />
		</>
	);
};

export default UAGBGoogleMap;
