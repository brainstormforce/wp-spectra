/**
 * BLOCK: Social Share - Editor Render.
 */

// Import classes
import classnames from 'classnames';
import renderSVG from '@Controls/renderIcon';
import styles from './editor.lazy.scss';
import React, { useLayoutEffect } from 'react';
import { __ } from '@wordpress/i18n';

const Render = ( props ) => {
	// Add and remove the CSS on the drop and remove of the component.
	useLayoutEffect( () => {
		styles.use();
		return () => {
			styles.unuse();
		};
	}, [] );

	props = props.parentProps;

	const { attributes } = props;

	const { className, image_icon, icon, image } = attributes;

	let defaultedAlt;

	if ( image && image.alt ) {
		defaultedAlt = image.alt;
	} else {
		defaultedAlt = __( 'This social icon has an empty alt attribute' );
	}

	let imageIconHtml = '';

	if ( image_icon === 'icon' ) {
		if ( icon ) {
			imageIconHtml = (
				<span className="uagb-ss__source-icon">
					{ renderSVG( icon ) }
				</span>
			);
		}
	} else if ( image && image.url ) {
		imageIconHtml = (
			<img className="uagb-ss__source-image" src={ image.url } alt={ defaultedAlt } />
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

export default React.memo( Render );
