import classnames from 'classnames';
import { __ } from '@wordpress/i18n';
import { getFallbackNumber } from '@Controls/getAttributeFallback';

const attributes = {
	block_id: {
		type: 'string',
	},
	address: {
		type: 'string',
		default: 'Brainstorm Force',
	},
	height: {
		type: 'number',
		default: 300,
	},
	zoom: {
		type: 'number',
		default: 12,
	},
	language: {
		type: 'string',
		default: 'en',
	},
};
const deprecated = [
	{
		attributes,
		save( props ) {
			const { block_id, height, zoom, address } = props.attributes;

			const encoded_address = encodeURI( address );

			const url = `https://www.google.com/maps/embed/v1/place?key=${ wp.uagb_google_api_key }&q=${ encoded_address }&zoom=${ zoom }`;

			return (
				<div className={ classnames( props.className, 'uagb-google-map__wrap', `uagb-block-${ block_id }` ) }>
					<iframe
						className="uagb-google-map__iframe"
						title={ __( 'Google Map for ' + address ) }
						src={ url }
						style={ { height } }
					></iframe>
				</div>
			);
		},
	},
	{
		attributes,
		save( props ) {
			const { block_id, height, zoom, address } = props.attributes;

			const encoded_address = encodeURI( address );

			const url = `https://www.google.com/maps/embed/v1/place?key=${ wp.uagb_google_api_key }&q=${ encoded_address }&zoom=${ zoom }`;

			return (
				<div
					className={ classnames( props.className, 'uagb-google-map__wrap' ) }
					id={ `uagb-google-map-${ block_id }` }
				>
					<iframe className="uagb-google-map__iframe" src={ url } style={ { height } }></iframe>
				</div>
			);
		},
	},
	{
		attributes,
		save( props ) {
			const { block_id, height, zoom, address } = props.attributes;

			const encoded_address = encodeURI( address );

			const url = `https://www.google.com/maps/embed/v1/place?key=${ wp.uagb_google_api_key }&q=${ encoded_address }&zoom=${ zoom }`;

			return (
				<div className={ classnames( props.className, 'uagb-google-map__wrap', `uagb-block-${ block_id }` ) }>
					<iframe className="uagb-google-map__iframe" src={ url } style={ { height } }></iframe>
				</div>
			);
		},
	},
	{
		attributes,
		save( props ) {
			const { block_id, height, zoom, address, language } = props.attributes;

			let encoded_address = encodeURI( address );

			var lang_par = language ? language : 'en';

			let url = `https://www.google.com/maps/embed/v1/place?key=${ wp.uagb_google_api_key }&q=${ encoded_address }&zoom=${ zoom }&language=${ lang_par }`;

			return (
				<div className={ classnames( props.className, 'uagb-google-map__wrap', `uagb-block-${ block_id }` ) }>
					<iframe
						className="uagb-google-map__iframe"
						title={ __( 'Google Map for ' + address ) }
						src={ url }
						style={ { height: height } }
					></iframe>
				</div>
			);
		},
	},
	{
		attributes,
		save( props ) {
			const blockName = 'google-map';

			const { block_id, zoom, address, language } = props.attributes;
			const encoded_address = encodeURI( address );
			const lang_par = language ? language : 'en';
			const url = `https://www.google.com/maps/embed/v1/place?key=${
				wp.uagb_google_api_key
			}&q=${ encoded_address }&zoom=${ getFallbackNumber( zoom, 'zoom', blockName ) }&language=${ lang_par }`;

			return (
				<div className={ classnames( props.className, 'uagb-google-map__wrap', `uagb-block-${ block_id }` ) }>
					<iframe
						className="uagb-google-map__iframe"
						title={ __( 'Google Map for ', 'ultimate-addons-for-gutenberg' ) + address }
						src={ url }
					></iframe>
				</div>
			);
		},
	},
];

export default deprecated;
