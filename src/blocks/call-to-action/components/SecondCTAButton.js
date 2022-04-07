import classnames from 'classnames';

import renderSVG from '@Controls/renderIcon';

const SecondCTAButton = ( props ) => {
	const { attributes, setAttributes } = props;

	let target = '_self';
	const rel = 'noopener noreferrer';
	if ( attributes.secondCtaTarget ) {
		target = '_blank';
	}

	let secondCtaIconOutput = '';
	if ( attributes.secondCtaIcon !== '' ) {
		secondCtaIconOutput = renderSVG( attributes.secondCtaIcon );
	}

	let link = '/';
	if ( setAttributes === 'not_set' ) {
		link = attributes.secondCtaLink;
	}
	return (
		<>
			<a
				href={ link }
				className={ classnames(
					'uagb-cta__button-link-wrapper',
					'uagb-cta-second__button',
					'button' === attributes.ctaType ? 'wp-block-button__link' : ''
				) }
				target={ target }
				rel={ rel }
			>
				{ attributes.secondCtaIconPosition === 'before' && secondCtaIconOutput }
				{ attributes.secondCtaLabel }
				{ attributes.secondCtaIconPosition === 'after' && secondCtaIconOutput }
			</a>
		</>
	);
};

export default SecondCTAButton;
