/**
 * BLOCK: Call To Action - Save Block
 */

// Import block dependencies and components.
import classnames from 'classnames';
import { InnerBlocks } from '@wordpress/block-editor';

// Import icon.
import Title from './components/Title';
import Description from './components/Description';
import CTA from './components/CallToActionNew';
import SecondCTAButton from './components/SecondCTAButton';

export default function save( props ) {
	const { 
		block_id,
		htmlTag,
		ctaType,
		ctaLink,
		ctaTarget,
		ctaTitle,
		description,
		enabledSecondCtaButton,
		enableMultilineParagraph,
	} = props.attributes;

	const isCta = <CTA attributes={ props.attributes } setAttributes="not_set" />;

	const secondCtaButton =
		'button' === ctaType && enabledSecondCtaButton ? (
			<SecondCTAButton attributes={ props.attributes } setAttributes="not_set" />
		) : (
			''
		);

	// Get description and seperator components.
	const desc = enableMultilineParagraph 
    ? <div className='uagb-cta__desc'> <InnerBlocks.Content /> </div> 
    : '' !== description && <Description attributes={ props.attributes } setAttributes="not_set" />;

	// Get Title components.
	const titleText = <>{ '' !== ctaTitle && <Title attributes={ props.attributes } setAttributes="not_set" /> }</>;

	const CustomTag = htmlTag || 'div';

	const output = (
		<>
			<div className="uagb-cta__wrap">
				{ titleText }
				{ desc }
			</div>
			<div className="uagb-cta__buttons">
				{ isCta }
				{ secondCtaButton }
			</div>
		</>
	);

	let target = '';
	if ( ctaTarget ) {
		target = '_blank';
	}

	return (
		<CustomTag className={ classnames( `uagb-block-${ block_id }`, 'button' === ctaType ? 'wp-block-button' : '' ) }>
			{ ctaType === 'all' && (
				<>
					{ /* eslint-disable-next-line */ }
					<a
						href={ ctaLink }
						className="uagb-cta__link-to-all"
						target={ target }
						rel="noopener noreferrer"
					></a>
					{ output }
				</>
			) }
			{ ctaType !== 'all' && output }
		</CustomTag>
	);
}
