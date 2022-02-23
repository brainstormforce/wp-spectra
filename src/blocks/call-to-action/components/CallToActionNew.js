import classnames from 'classnames';

import renderSVG from '@Controls/renderIcon';

const CTA = ( props ) => {
	const { attributes, setAttributes } = props;

	let target = '_self';
	const rel = 'noopener noreferrer';
	if ( attributes.ctaTarget ) {
		target = '_blank';
	}

	let ctaIconOutput = '';
	if ( attributes.ctaIcon !== '' ) {
		ctaIconOutput = renderSVG( attributes.ctaIcon );
	}

	let link = '/';
	if ( setAttributes === 'not_set' ) {
		link = attributes.ctaLink;
	}
	return (
		<>
			{ ( attributes.ctaType === 'button' ||
				attributes.ctaType === 'text' ) && (
				<a
					href={ link }
					className={ classnames(
						'uagb-cta__button-link-wrapper',
						'button' === attributes.ctaType ? 'wp-block-button__link' : ''
					) }
					target={ target }
					rel={ rel }
				>
					{ attributes.ctaIconPosition === 'before' && ctaIconOutput }
					{ attributes.ctaText }
					{ attributes.ctaIconPosition === 'after' && ctaIconOutput }
				</a>
			) }
		</>
	);
};

export default CTA;
