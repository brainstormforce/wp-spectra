import UAGB_Block_Icons from '@Controls/block-icons';

function TweetButtonCTA( props ) {
	const { attributes } = props;

	return (
		<a
			onClick={ ( e ) => e.preventDefault() }
			href="/"
			className="uagb-blockquote__tweet-button"
			target="_blank"
			rel="noopener noreferrer"
		>
			{ attributes.iconView === 'icon_text' && (
				<>
					{ UAGB_Block_Icons.quote_tweet_icon }
					{ attributes.iconLabel }
				</>
			) }

			{ attributes.iconView === 'icon' && (
				<>{ UAGB_Block_Icons.quote_tweet_icon }</>
			) }

			{ attributes.iconView === 'text' && (
				<>
					{ attributes.iconLabel }
				</>
			) }
		</a>
	);
}

export default TweetButtonCTA;
