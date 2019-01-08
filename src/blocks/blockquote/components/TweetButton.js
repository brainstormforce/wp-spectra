const { Fragment } = wp.element
class TweetButton extends React.Component {

	render() {

		const { attributes } = this.props
		var tweet_html = ''

		return (			
			<a href="javascript:void(0)" className="uagb-blockquote__tweet-button" target="_blank">
	      		{ ( attributes.iconView === 'icon_text' ) && <Fragment>
	      			<i className="fab fa-twitter"></i>
		      			<span className="uagb-blockquote__tweet-label">{attributes.iconLabel}</span>
		      		</Fragment>
		      	}

		      	{ ( attributes.iconView ==='icon' ) && <Fragment>
	      			<i className="fab fa-twitter"></i>		      			
		      		</Fragment>
		      	}

		      	{ ( attributes.iconView === 'text' ) && <Fragment>	      			
		      			<span className="uagb-blockquote__tweet-label">{attributes.iconLabel}</span>
		      		</Fragment>
		      	}
	      	</a>    	
		)
	}
}

export default TweetButton
