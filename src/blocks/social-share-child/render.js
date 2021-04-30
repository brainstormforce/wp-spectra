/**
 * BLOCK: Social Share - Editor Render.
 */

// Import classes
import classnames from 'classnames';
import renderSVG from '@Controls/renderIcon';

export default function rendersocialShareChild( props ) {
	const { attributes } = props;

	const { className, image_icon, icon, image } = attributes;

	let image_icon_html = '';

	if ( image_icon == 'icon' ) {
		if ( icon ) {
			image_icon_html = (
				<span className="uagb-ss__source-icon">
					{ renderSVG( icon ) }
				</span>
			);
		}
	} else if ( image && image.url ) {
		image_icon_html = (
			<img className="uagb-ss__source-image" src={ image.url } />
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
			<a className="uagb-ss__link" href="#" rel="noopener noreferrer">
				<span className="uagb-ss__source-wrap">
					{ image_icon_html }
				</span>
			</a>
		</div>
	);
}
