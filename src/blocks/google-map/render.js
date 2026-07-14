import { useLayoutEffect, memo } from '@wordpress/element';
import classnames from 'classnames';
import { __ } from '@wordpress/i18n';
import styles from './editor.lazy.scss';
import { getFallbackNumber } from '@Controls/getAttributeFallback';
import { useBlockProps } from '@wordpress/block-editor';

const Render = ( props ) => {
	// Add and remove the CSS on the drop and remove of the component.
	useLayoutEffect( () => {
		styles.use();
		return () => {
			styles.unuse();
		};
	}, [] );

	const {
		attributes: { zoom, address, language, height, block_id, enableSatelliteView, },
		deviceType,
		name,
	} = props;

	const blockName = name.replace( 'uagb/', '' );

	const encoded_address = encodeURI( address );
	const lang_par = language ? language : 'en';
	const mapType = enableSatelliteView ? 'k' : 'm';

	const url = `https://maps.google.com/maps?q=${ encoded_address }&z=${ getFallbackNumber( zoom, 'zoom', blockName ) }&hl=${ lang_par }&t=${ mapType }&output=embed&iwloc=near`;

	const blockProps = useBlockProps( {
		className: classnames(
			'uagb-google-map__wrap',
			`uagb-block-${ block_id }`,
			`uagb-editor-preview-mode-${ deviceType.toLowerCase() }`
		),
	} );

	return (
		<div
			{ ...blockProps }
		>
			<embed
				className="uagb-google-map__iframe"
				title={ __( 'Google Map for ', 'ultimate-addons-for-gutenberg' ) + address }
				src={ url }
				width="640"
				height={ height }
				loading="lazy"
			></embed>
		</div>
	);
};

export default memo( Render );
