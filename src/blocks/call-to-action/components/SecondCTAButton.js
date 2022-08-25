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
	let preventDefaultFunc = ( e ) => {  // Disables click events for link in editor.
		e.preventDefault();
	}
	if ( setAttributes === 'not_set' ) {
		link = attributes.secondCtaLink;
		preventDefaultFunc = false;  // Ensures click events for links aren't disabled for frontend.
	}

	return (
		<>
			<a
				href={ link }
				className={ classnames(
					'uagb-cta-second__button',
					'wp-block-button__link',
				) }
				target={ target }
				rel={ rel }
				onClick={ preventDefaultFunc }
			>
				{ attributes.secondCtaIconPosition === 'before' && secondCtaIconOutput }
				{ attributes.secondCtaLabel }
				{ attributes.secondCtaIconPosition === 'after' && secondCtaIconOutput }
			</a>
		</>
	);
};

export default SecondCTAButton;
