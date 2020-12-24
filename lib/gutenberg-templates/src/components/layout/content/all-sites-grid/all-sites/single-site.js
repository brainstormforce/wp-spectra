import { sprintf, _n } from '@wordpress/i18n';
const { compose } = wp.compose;
const { withSelect, withDispatch } = wp.data;
const { memo, useState, useEffect } = wp.element;

import { block_api_request } from '../../../../../utils/rest-api';

const SingleSite = ({ setSitePreview, item }) => {
	let image_url = item['thumbnail-image-url'] || '';
	let pagesCount = item['pages'] ? item['pages'].length : 0;

	let pageString = ( pagesCount <= 1 ) ? 'Template' : 'Templates';

	let [imageURL, setImageURL] = useState(`${GutenbergTemplatesVars.uri}dist/placeholder_200_200.png`);
	
	useEffect(() => {
		let isMounted = true;

		let imgLarge = new Image();

		imgLarge.src = image_url;

		imgLarge.onload = () => {
			if ( isMounted ) {
				setImageURL(imgLarge.src);
			}
		};

		return () => { isMounted = false };

	}, [imageURL]);

	return (
		<div
			className="item single-site"
			onClick={(event) => {
				setSitePreview(item);
			}}
		>
			<div className="inner">
				<div
					className="screenshot"
					style={{ backgroundImage: `url('${imageURL}')` }}
				>
					<div className="preview">
						<span className="gutenberg-templates-icon gutenberg-templates-icon-search"></span>
					</div>
				</div>
				<div className="heading-wrap">
					<h3 className="title">{item.title}</h3>
					{pagesCount ? (
						 
						<div className="sub-title">
							{/* {sprintf(
								_n(
									`%s Template`,
									`%s Templates`,
									parseInt(pagesCount),
									`gutenberg-templates`
								)
							)} */}
							{`${pagesCount} ${pageString}`}
						</div>
					) : (
						''
					)}
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
		const { setSitePreview, setPagePreview, setCurrentScreen } = dispatch(
			'gutenberg-templates'
		);
		return {
			setSitePreview(item) {
				let firstPage = Object.values(item.pages).length
					? Object.values(item.pages)[0]
					: [];
				setPagePreview(firstPage);
				setSitePreview(item);
				setCurrentScreen('all-single-site-pages');
			},
		};
	})
)(memo(SingleSite));
