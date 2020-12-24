const { compose } = wp.compose;
const { withSelect, withDispatch } = wp.data;
const { memo } = wp.element;

const SingleSitePage = ({
	updateFullWidthPagePreview,
	item,
	pagePreview,
	setPagePreview,
	setImportItemInfo,
}) => {
	let image_url = item['thumbnail-image-url'] || '';

	return (
		<div
			className={`item single-site ${
				pagePreview.ID === item.ID ? 'active' : ''
			}`}
		>
			<div className="inner">
				<div
					className="screenshot"
					onClick={(event) => {
						setImportItemInfo(item);
						setPagePreview(item);
					}}
					style={{ backgroundImage: `url('${image_url}')` }}
				>
					<div className="preview">
						<span className="gutenberg-templates-icon gutenberg-templates-icon-search"></span>
					</div>
				</div>
				<div className="heading-wrap">
					<h3 className="title">{item.title}</h3>
				</div>
			</div>
		</div>
	);
};

export default compose(
	withSelect((select) => {
		const { getPagePreview } = select('gutenberg-templates');
		return {
			pagePreview: getPagePreview(),
		};
	}),
	withDispatch((dispatch) => {
		const {
			setPagePreview,
			setFullWidthPagePreview,
			setCurrentScreen,
			setImportItemInfo
		} = dispatch('gutenberg-templates');
		return {
			setImportItemInfo:setImportItemInfo,
			setPagePreview: setPagePreview,
			updateFullWidthPagePreview(fullWidthPagePreview) {
				setFullWidthPagePreview(fullWidthPagePreview);
				setCurrentScreen('full-width-page-preview');
			},
		};
	})
)(memo(SingleSitePage));
