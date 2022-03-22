import classnames from 'classnames';
import UAGB_Block_Icons from '@Controls/block-icons';
import React, { useLayoutEffect } from 'react';
import Description from './components/Description';
import AuthorImage from './components/AuthorImage';
import AuthorText from './components/AuthorText';
import TweetButtonCTA from './components/TweetButtonCTA';
import styles from './editor.lazy.scss';
import { useDeviceType } from '@Controls/getPreviewType';

const Render = ( props ) => {
	// Add and remove the CSS on the drop and remove of the component.
	useLayoutEffect( () => {
		styles.use();
		return () => {
			styles.unuse();
		};
	}, [] );

	props = props.parentProps;

	const { className, setAttributes, attributes } = props;

	const {
		isPreview,
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

	const deviceType = useDeviceType();
	const previewImageData = 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxNi4wLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+DQo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB3aWR0aD0iMzUwcHgiIGhlaWdodD0iMzUwcHgiIHZpZXdCb3g9IjAgMCAzNTAgMzUwIiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCAzNTAgMzUwIiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxnPg0KCTxnPg0KCQk8cGF0aCBmaWxsPSIjREJEQ0RFIiBkPSJNMzI4LjQ1NCwxNDcuNDY4YzAsMi4xOTEtMS43NzQsMy45NjYtMy45NjQsMy45NjZIMzcuNTA1Yy0yLjE4NywwLTMuOTYzLTEuNzc1LTMuOTYzLTMuOTY2di0wLjQ5NA0KCQkJYzAtMi4xOSwxLjc3Ni0zLjk2MywzLjk2My0zLjk2M0gzMjQuNDljMi4xODksMCwzLjk2NCwxLjc3MywzLjk2NCwzLjk2M1YxNDcuNDY4eiIvPg0KCQk8cGF0aCBmaWxsPSIjREJEQ0RFIiBkPSJNMjg4Ljc4OCwxNjcuNzgzYzAsMi4xODctMS43NzQsMy45NjItMy45NjQsMy45NjJIMzcuNTA2Yy0yLjE4OSwwLTMuOTY0LTEuNzc1LTMuOTY0LTMuOTYydi0wLjQ5Nw0KCQkJYzAtMi4xODgsMS43NzUtMy45NjMsMy45NjQtMy45NjNoMjQ3LjMxOGMyLjE4OSwwLDMuOTY0LDEuNzc1LDMuOTY0LDMuOTYzVjE2Ny43ODN6Ii8+DQoJCTxwYXRoIGZpbGw9IiNEQkRDREUiIGQ9Ik0xMTMuMjgxLDIwMi4zNjZjMCwyLjU1My0yLjA3LDQuNjIyLTQuNjIzLDQuNjIySDM4LjE2NGMtMi41NTMsMC00LjYyMi0yLjA2OS00LjYyMi00LjYyMnYtMS41NDINCgkJCWMwLTIuNTUzLDIuMDY5LTQuNjIyLDQuNjIyLTQuNjIyaDcwLjQ5NGMyLjU1MywwLDQuNjIzLDIuMDY5LDQuNjIzLDQuNjIyVjIwMi4zNjZ6Ii8+DQoJPC9nPg0KCTxsaW5lIGZpbGw9Im5vbmUiIHN0cm9rZT0iI0RCRENERSIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHgxPSIyMS41NDYiIHkxPSIxNDEuODcyIiB4Mj0iMjEuNTQ2IiB5Mj0iMjA4LjEyOSIvPg0KPC9nPg0KPC9zdmc+DQo=';

	return (
		isPreview ? <img width='100%' src={previewImageData}/> :
			<div
				className={ classnames(
					className,
					`uagb-block-${ props.clientId.substr( 0, 8 ) }`,
					`uagb-editor-preview-mode-${ deviceType.toLowerCase() }`,
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
						<span className="uagb-blockquote__icon">
								{ UAGB_Block_Icons.quote_inline_icon }
						</span>
					) }
						<Description
							attributes={ attributes }
							setAttributes={ setAttributes }
							props={ props }
						/>
						<footer>
							<div
								className={ classnames(
									'uagb-blockquote__author-wrap',
									authorImage !== ''
										? `uagb-blockquote__author-at-${ authorImgPosition }`
										: ''
								) }
							>
								<AuthorImage attributes={ attributes } />

								<AuthorText
										attributes={ attributes }
										setAttributes={ setAttributes }
										props={ props }
									/>
							</div>
							{ enableTweet && (
								<TweetButtonCTA attributes={ attributes } />
							) }
						</footer>
				</blockquote>
			</div>
	);
};

export default React.memo( Render );
