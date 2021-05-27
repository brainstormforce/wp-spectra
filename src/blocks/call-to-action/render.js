import classnames from 'classnames';
import React, { lazy, Suspense } from 'react';
import lazyLoader from '@Controls/lazy-loader';
import CtaPositionClasses from './classes';
const Title = lazy( () =>
	import(
		/* webpackChunkName: "chunks/call-to-action/Title" */ './components/Title'
	)
);
const Description = lazy( () =>
	import(
		/* webpackChunkName: "chunks/call-to-action/Description" */ './components/Description'
	)
);
const CTA = lazy( () =>
	import(
		/* webpackChunkName: "chunks/call-to-action/CTA" */ './components/CTA'
	)
);
const Render = ( props ) => {
	props = props.parentProps;
	const { className, setAttributes, attributes } = props;

	// Setup the attributes.
	const { block_id, ctaPosition, ctaType } = attributes;

	const isCta = (
		<CTA attributes={ attributes } setAttributes={ setAttributes } />
	);

	// Get description components.
	const descText = (
		<div className="uagb-cta-text-wrap">
			{
				<Description
					attributes={ attributes }
					setAttributes={ setAttributes }
					props={ props }
				/>
			}
		</div>
	);

	// Get Title components.
	const titleText = (
		<div className="uagb-cta__title-wrap">
			{
				<Title
					attributes={ attributes }
					setAttributes={ setAttributes }
					props={ props }
				/>
			}
		</div>
	);

	const output = () => {
		return (
			<div
				className={ classnames(
					'uagb-cta__content-wrap',
					...CtaPositionClasses( attributes )
				) }
			>
				<div className="uagb-cta__left-right-wrap">
					<div className="uagb-cta__content">
						{ ctaPosition == 'below-title' && (
							<>
								{ titleText }
								{ descText }
								{ isCta }
							</>
						) }
						{ ctaPosition == 'right' && (
							<>
								{ titleText }
								{ descText }
							</>
						) }
					</div>
					{ ctaPosition == 'right' && isCta }
				</div>
			</div>
		);
	};

	return (
		<Suspense fallback={ lazyLoader() }>
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
								href="javascript:void(0)"
								className="uagb-cta__block-link-wrap uagb-cta__link-to-all"
								rel="noopener noreferrer"
							>
								{ ' ' }
							</a>
							{ output() }
						</>
					) }
					{ ctaType !== 'all' && output() }
			</div>
		</Suspense>
	);
};

export default React.memo( Render );
