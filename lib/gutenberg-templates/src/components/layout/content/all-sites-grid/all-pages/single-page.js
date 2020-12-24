const { compose } = wp.compose;
const { withSelect, withDispatch } = wp.data;
const { memo } = wp.element;

const SinglePage = ({ setSearchPagePreview, item }) => {
	let image_url = item['thumbnail-image-url'] || '';

	return (
		<div className="item single-site">
			<div className="inner">
				<div
					className="screenshot"
					onClick={(event) => {
						setSearchPagePreview(item);
						// setSitePreview(item);
					}}
					style={{ backgroundImage: `url('${image_url}')` }}
				>
					<div className="preview">
						<span className="gutenberg-templates-icon gutenberg-templates-icon-search"></span>
					</div>
				</div>
				<div className="heading-wrap">
					<h3 className="title">
						<b>{item['site-title']}</b> - {item.title}
					</h3>
				</div>
			</div>
		</div>
	);
};

export default compose(
	withSelect((select) => {
		const { getSitePreview } = select('gutenberg-templates');
		return {
			preview: getSitePreview,
		};
	}),
	withDispatch((dispatch) => {
		const { setSearchPagePreview, setCurrentScreen } = dispatch(
			'gutenberg-templates'
		);
		return {
			setSearchPagePreview(item) {
				setSearchPagePreview(item);
				setCurrentScreen('all-single-site-pages');
			},
		};
	})
)(memo(SinglePage));
