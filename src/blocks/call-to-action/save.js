/**
 * BLOCK: Call To Action - Save Block
 */

// Import block dependencies and components.
import classnames from 'classnames';
import CtaPositionClasses from './classes';

const Title = lazy( () =>
	import(
		/* webpackChunkName: "chunks/call-to-action/Title" */ './components/Title'
	)
);
const Description = lazy( () =>
	import(
		/* webpackChunkName: "chunks/call-to-action/description" */ './components/Description'
	)
);
const CTA = lazy( () =>
	import(
		/* webpackChunkName: "chunks/call-to-action/CTA" */ './components/CTA'
	)
);

export default function save( props ) {
	const {
		ctaPosition,
		block_id,
		ctaType,
		ctaLink,
		ctaTarget,
		className,
		ctaTitle,
		description,
	} = props.attributes;

	const is_cta = (
		<CTA attributes={ props.attributes } setAttributes="not_set" />
	);

	// Get description and seperator components.
	const desc = (
		<>
			{ '' !== description && (
				<div className="uagb-cta-text-wrap">
					<Description
						attributes={ props.attributes }
						setAttributes="not_set"
					/>
				</div>
			) }
		</>
	);

	// Get Title components.
	const title_text = (
		<>
			{ '' !== ctaTitle && (
				<div className="uagb-cta__title-wrap">
					<Title
						attributes={ props.attributes }
						setAttributes="not_set"
					/>
				</div>
			) }
		</>
	);

	const output = (
		<>
			<div
				className={ classnames(
					'uagb-cta__content-wrap',
					...CtaPositionClasses( props.attributes )
				) }
			>
				<div className="uagb-cta__left-right-wrap">
					{ ctaPosition == 'left' && is_cta }
					<div className="uagb-cta__content">
						{ ctaPosition == 'above-title' && (
							<>
								{ is_cta }
								{ title_text }
								{ desc }
							</>
						) }

						{ ctaPosition == 'below-title' && (
							<>
								{ title_text }
								{ desc }
								{ is_cta }
							</>
						) }

						{ ( ctaPosition == 'left' ||
							ctaPosition == 'right' ) && (
							<>
								{ title_text }
								{ desc }
							</>
						) }
					</div>

					{ ctaPosition == 'right' && is_cta }
				</div>
			</div>
		</>
	);

	let target = '';
	if ( ctaTarget ) {
		target = '_blank';
	}

	return (
		<div
			className={ classnames(
				className,
				'uagb-cta__outer-wrap',
				`uagb-block-${ block_id }`
			) }
		>
			{ ctaType == 'all' && (
				<>
					<a
						href={ ctaLink }
						className="uagb-cta__block-link-wrap uagb-cta__link-to-all"
						target={ target }
						rel="noopener noreferrer"
					></a>
					{ output }
				</>
			) }
			{ ctaType !== 'all' && output }
		</div>
	);
}
