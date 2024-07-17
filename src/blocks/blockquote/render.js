import classnames from 'classnames';
import UAGB_Block_Icons from '@Controls/block-icons';
import { useLayoutEffect, memo } from '@wordpress/element';
import Description from './components/Description';
import AuthorImage from './components/AuthorImage';
import AuthorText from './components/AuthorText';
import TweetButtonCTA from './components/TweetButtonCTA';
import styles from './editor.lazy.scss';

const Render = ( props ) => {
	// Add and remove the CSS on the drop and remove of the component.
	useLayoutEffect( () => {
		styles.use();
		return () => {
			styles.unuse();
		};
	}, [] );

	const { className, setAttributes, attributes, deviceType } = props;

	const {
		block_id,
		skinStyle,
		align,
		stack,
		quoteStyle,
		enableTweet,
		iconView,
		iconSkin,
		authorImage,
		authorImgPosition,
	} = attributes;

	return (
		<div
			className={ classnames(
				className,
				`uagb-block-${ block_id }`,
				`uagb-editor-preview-mode-${ deviceType.toLowerCase() }`,
				`uagb-blockquote__skin-${ skinStyle }`,
				skinStyle !== 'border' ? `uagb-blockquote__align-${ align }` : '',
				skinStyle === 'quotation' ? `uagb-blockquote__style-${ quoteStyle }` : '',
				enableTweet
					? `uagb-blockquote__with-tweet uagb-blockquote__tweet-style-${ iconSkin } uagb-blockquote__tweet-${ iconView }`
					: '',
				`uagb-blockquote__stack-img-${ stack }`
			) }
		>
			<blockquote className="uagb-blockquote">
				{ skinStyle === 'quotation' && (
					<span className="uagb-blockquote__icon">{ UAGB_Block_Icons.quote_inline_icon }</span>
				) }
				<Description attributes={ attributes } setAttributes={ setAttributes } props={ props } />
				<footer>
					<div
						className={ classnames(
							'uagb-blockquote__author-wrap',
							authorImage !== '' ? `uagb-blockquote__author-at-${ authorImgPosition }` : ''
						) }
					>
						<AuthorImage attributes={ attributes } />

						<AuthorText attributes={ attributes } setAttributes={ setAttributes } props={ props } />
					</div>
					{ enableTweet && <TweetButtonCTA attributes={ attributes } /> }
				</footer>
			</blockquote>
		</div>
	);
};

export default memo( Render );
