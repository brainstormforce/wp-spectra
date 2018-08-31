const { decodeEntities } = wp.htmlEntities;

class Title extends React.Component {

	render() {

		const Tag = this.props.attributes.titleTag;

		return (

			<Tag
				className={ 'uagb-post__title entry-title' }
				style={{ 
					color: this.props.attributes.titleColor,
					fontSize: this.props.attributes.titleFontSize
				}}
			>
				<a href={ this.props.post.link } target="_blank" rel="bookmark">{ decodeEntities( this.props.post.title.rendered.trim() ) || __( '(Untitled)' ) }</a>
			</Tag>
		);
	}
}

export default Title;
