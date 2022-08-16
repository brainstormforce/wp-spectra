if ( googlefonts === undefined ) {
	var googlefonts = []; // eslint-disable-line no-var
}
import PropTypes from 'prop-types';
import WebFont from 'webfontloader';
import { useState, useEffect } from '@wordpress/element';
const statuses = {
	inactive: 'inactive',
	active: 'active',
	loading: 'loading',
};
const noop = () => {};

const WebfontLoader = ( props ) => {
	const [ value, setValue ] = useState( [] );

	const status = undefined;

	useEffect( () => {
		loadFonts();
	}, [] );

	useEffect( () => {
		const { onStatus, config } = props;

		if ( status !== value.status ) {
			onStatus( value.status );
		}
		if ( config !== value.config ) {
			loadFonts();
		}
	}, [ props ] );

	const handleLoading = () => {
		setValue( { status: statuses.loading } );
	};

	const addFont = ( font ) => {
		if ( ! googlefonts.includes( font ) ) {
			googlefonts.push( font );
		}
	};

	const handleActive = () => {
		setValue( { status: statuses.active } );
	};

	const handleInactive = () => {
		setValue( { status: statuses.inactive } );
	};

	const loadFonts = () => {
		if ( ! googlefonts.includes( props.config.google.families[ 0 ] ) ) {
			WebFont.load( {
				...props.config,
				loading: handleLoading,
				active: handleActive,
				inactive: handleInactive,
			} );
			addFont( props.config.google.families[ 0 ] );
		}

		const tabletPreview = document.getElementsByClassName( 'is-tablet-preview' );
		const mobilePreview = document.getElementsByClassName( 'is-mobile-preview' );

		if ( 0 !== tabletPreview.length || 0 !== mobilePreview.length ) {

			const preview = tabletPreview[0] || mobilePreview[0];

			const iframe = preview.getElementsByTagName( 'iframe' )[0];

			if ( iframe ) {

				WebFont.load( {
					...props.config,
					loading: handleLoading,
					active: handleActive,
					inactive: handleInactive,
					context: iframe?.contentWindow
				} );
				addFont( props.config.google.families[ 0 ] );
			}
		}
	};

	const { children } = props;
	return children || null;
};

WebfontLoader.propTypes = {
	config: PropTypes.object?.isRequired,
	children: PropTypes.element,
	onStatus: PropTypes.func?.isRequired,
};

WebfontLoader.defaultProps = {
	onStatus: noop,
};

export default WebfontLoader;
