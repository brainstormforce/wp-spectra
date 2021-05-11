/**
 * BLOCK: Blockquote - Save Block
 */

import classnames from 'classnames';
import UAGB_Block_Icons from '@Controls/block-icons';

import React, { lazy, Suspense } from 'react';

import lazyLoader from '@Controls/lazy-loader';

const Description = lazy( () =>
	import(
		/* webpackChunkName: "chunks/blockquote/description" */ './components/Description'
	)
);
const AuthorImage = lazy( () =>
	import(
		/* webpackChunkName: "chunks/blockquote/author-image" */ './components/AuthorImage'
	)
);
const AuthorText = lazy( () =>
	import(
		/* webpackChunkName: "chunks/blockquote/author-text" */ './components/AuthorText'
	)
);
const TweetButtonCTA = lazy( () =>
	import(
		/* webpackChunkName: "chunks/blockquote/tweet-button-cta" */ './components/TweetButtonCTA'
	)
);

export default function save( props ) {
	const {
		block_id,
		skinStyle,
		align,
		quoteStyle,
		iconSkin,
		authorImage,
		enableTweet,
		iconView,
		author,
		descriptionText,
		authorImgPosition,
		stack,
	} = props.attributes;

	return (
		<div
			className={ classnames(
				props.className,
				'uagb-blockquote__outer-wrap',
				`uagb-block-${ block_id }`
			) }
		>
			<div
				className={ classnames(
					'uagb-blockquote__wrap',
					`uagb-blockquote__skin-${ skinStyle }`,
					skinStyle !== 'border'
						? `uagb-blockquote__align-${ align }`
						: '',
					skinStyle === 'quotation'
						? `uagb-blockquote__style-${ quoteStyle }`
						: '',
					enableTweet
						? `uagb-blockquote__with-tweet uagb-blockquote__tweet-style-${ iconSkin } uagb-blockquote__tweet-${ iconView }`
						: '',
					`uagb-blockquote__stack-img-${ stack }`
				) }
			>
				<blockquote className="uagb-blockquote">
					{ skinStyle === 'quotation' && (
						<div className="uagb-blockquote__icon-wrap">
							<span className="uagb-blockquote__icon">
								{ UAGB_Block_Icons.quote_inline_icon }
							</span>
						</div>
					) }
					<Suspense fallback={ lazyLoader() }>
						<div className="uagb-blockquote__content-wrap">
							{ descriptionText !== '' && (
								<Description
									attributes={ props.attributes }
									setAttributes="not_set"
									props={ props }
								/>
							) }
							<footer>
								<div
									className={ classnames(
										'uagb-blockquote__author-wrap',
										authorImage !== ''
											? `uagb-blockquote__author-at-${ authorImgPosition }`
											: ''
									) }
								>
									{
										<AuthorImage
											attributes={ props.attributes }
										/>
									}
									{ author !== '' && (
										<AuthorText
											attributes={ props.attributes }
											setAttributes="not_set"
											props={ props }
										/>
									) }
								</div>
								{ enableTweet && (
									<TweetButtonCTA
										attributes={ props.attributes }
									/>
								) }
							</footer>
						</div>
					</Suspense>
				</blockquote>
			</div>
		</div>
	);
}
