/**
 * BLOCK: Call To Action - Save Block
 */

// Import block dependencies and components.
import classnames from 'classnames';

// Import icon.
import Title from './components/Title';
import Description from './components/Description';
import CTA from './components/CallToActionNew';
import SecondCTAButton from './components/SecondCTAButton';

export default function save( props ) {
	const {
		ctaPosition,
		block_id,
		ctaType,
		ctaLink,
		ctaTarget,
		ctaTitle,
		description,
		stack,
		enabledSecondCtaButton
	} = props.attributes;
	const isCta = (
		<CTA attributes={ props.attributes } setAttributes="not_set" />
	);

	const secondCtaButton = ( 'button' === ctaType && enabledSecondCtaButton ) ? <SecondCTAButton attributes={ props.attributes } setAttributes="not_set" /> : '';


	// Get description and seperator components.
	const desc = (
		<>
			{ '' !== description && (
				<Description
					attributes={ props.attributes }
					setAttributes="not_set"
				/>
			) }
		</>
	);

	// Get Title components.
	const titleText = (
		<>
			{ '' !== ctaTitle && (
				<Title
					attributes={ props.attributes }
					setAttributes="not_set"
				/>
			) }
		</>
	);

	const output = (
		<>
			{ ctaPosition === 'below-title' && (
				<>
					{ titleText }
					{ desc }
					{ isCta }
					{ secondCtaButton }
				</>
			) }

			{ ( ctaPosition === 'right' ) && (
				<>
					<div className="uagb-cta__wrap">
						{ titleText }
						{ desc }
					</div>
					<div className='uagb-cta__buttons'>
						{isCta}
						{secondCtaButton}
					</div>
				</>
			) }
		</>
	);

	let target = '';
	if ( ctaTarget ) {
		target = '_blank';
	}

	let stackContent;
	if ( ctaPosition === 'right' && stack !== 'none' ) {
		stackContent = 'uagb-cta__content-stacked-' + stack + ' ';
	}

	return (
		<div
			className={ classnames(
				`uagb-block-${ block_id }`,
				'button' === ctaType ? 'wp-block-button' : '',
				stackContent
			) }
		>
			{ ctaType === 'all' && (
				<>
				<a
					href={ ctaLink }
					className="uagb-cta__link-to-all"
					target={ target }
					rel="noopener noreferrer"
				>
				</a>
				{ output }
				</>
			) }
			{ ctaType !== 'all' && output }
		</div>
	);
}
