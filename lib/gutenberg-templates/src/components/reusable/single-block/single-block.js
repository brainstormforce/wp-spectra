const { compose } = wp.compose;
const { withDispatch } = wp.data;
const { memo,useEffect, useState } = wp.element;
const { post } = wp.ajax;

import ImportBlockButton from '../import-block-button/import-block-button';

import { block_api_request } from '../../../utils/rest-api';

const SignleBlock = ({
	setImportItemInfo,
	updateFullWidthBlockPreview,
	item,
	setImagesLoaded,
}) => {
	let thumbnail_image_url = item['thumbnail-image-url'] || '';
	let featured_image_url = item['featured-image-url'] || '';

	let set_block_preview = (item) => {
		block_api_request(item.ID, 'astra-blocks' )
			.then((data) => {
				setImportItemInfo(data);
				updateFullWidthBlockPreview(item);
			})
			.catch((err) => {
			});
	};

	let [imageThumbnailURL, setThumbnailImageURL] = useState(`${GutenbergTemplatesVars.uri}dist/placeholder_200_200.png`);
	let [imageFeaturedlURL, setFeaturedImageURL] = useState(`${GutenbergTemplatesVars.uri}dist/placeholder_200_200.png`);

	useEffect(() => {
		
		var isMounted = true;

		let imgThumbnail = new Image();

		imgThumbnail.src = thumbnail_image_url;

		let imgFeatured = new Image();

		imgFeatured.src = featured_image_url;

		imgThumbnail.onload = () => {

			if ( isMounted ) {
				setThumbnailImageURL(imgThumbnail.src);
				setImagesLoaded( true );
			}
		};

		imgFeatured.onload = () => {
			if ( isMounted ) {
				setFeaturedImageURL(imgFeatured.src);
				setImagesLoaded( true );
			}
		};

		return () => { isMounted = false };
	});

	return (
		<div className="item single-block">
			<div className="inner">
				<div
					className="thumbnail"
					onClick={() => {
						block_api_request( item.ID, 'astra-blocks' )
							.then((data) => {
								setImportItemInfo(data);
								updateFullWidthBlockPreview(item);
								set_block_preview(item);
							})
							.catch((err) => {
							});
					}}
				>
					<img
						srcSet={`${imageFeaturedlURL}, ${imageThumbnailURL}`}
						src={imageThumbnailURL} 
					/>
					<div className="preview">
						<span className="gutenberg-templates-icon gutenberg-templates-icon-search"></span>
					</div>
				</div>
				<div className="heading-wrap">
					<h3 className="title">{item.title}</h3>
					<div className="button-actions">
						<button
							className="button"
							onClick={() => {
								set_block_preview(item);
							}}
						>
							Preview
						</button>
						<ImportBlockButton
							withIcon={false}
							btnClass="button button-primary"
							title="Import"
							liveRequest={true}
							item={item}
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default compose(
	withDispatch((dispatch) => {
		const {
			setImportItemInfo,
			setFullWidthBlockPreview,
			setCurrentScreen,
			setImagesLoaded,
		} = dispatch('gutenberg-templates');
		return {
			setImportItemInfo: setImportItemInfo,
			setImagesLoaded:setImagesLoaded,
			updateFullWidthBlockPreview(item) {
				setFullWidthBlockPreview(item);
				setCurrentScreen('full-width-block-preview');
			},
		};
	})
)(memo(SignleBlock));
