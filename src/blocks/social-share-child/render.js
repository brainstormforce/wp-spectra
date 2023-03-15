/**
 * BLOCK: Social Share - Editor Render.
 */

// Import classes
import classnames from 'classnames';
import renderSVG from '@Controls/renderIcon';
import styles from './editor.lazy.scss';
import { useEffect, useLayoutEffect, memo } from '@wordpress/element';
import getImageHeightWidth from '@Controls/getImageHeightWidth';

const Render = ( props ) => {
	// Add and remove the CSS on the drop and remove of the component.
	useLayoutEffect( () => {
		styles.use();
		return () => {
			styles.unuse();
		};
	}, [] );

	props = props.parentProps;

	const { attributes, setAttributes } = props;

	const { className, image_icon, icon, image, parentSize, imgTagHeight  } = attributes;

	const defaultedAlt = ( image && image?.alt ) ? image?.alt : '';

	let imageIconHtml = '';

	useEffect( () => {
		if( image && image.url && image_icon !== 'none' ){
			getImageHeightWidth( image?.url, setAttributes, { type: 'width', value: parentSize } )
		}
	}, [ image, parentSize ] )

	if ( image_icon === 'icon' ) {
		if ( icon ) {
			imageIconHtml = (
				<span className="uagb-ss__source-icon">
					{ renderSVG( icon, setAttributes ) }
				</span>
			);
		}
	} else if ( image && image.url ) {
		imageIconHtml = (
			<img className="uagb-ss__source-image" src={ image.url } alt={ defaultedAlt }  width={ parentSize } height={ imgTagHeight } loading="lazy"/>
		);
	}

	return (
		<div
			className={ classnames(
				'uagb-ss-repeater',
				'uagb-ss__wrapper',
				className,
				`uagb-block-${ props.clientId.substr( 0, 8 ) }`
			) }
		>
			<a className="uagb-ss__link" href="/" rel="noopener noreferrer">
				<span className="uagb-ss__source-wrap">{ imageIconHtml }</span>
			</a>
		</div>
	);
};

export default memo( Render );
