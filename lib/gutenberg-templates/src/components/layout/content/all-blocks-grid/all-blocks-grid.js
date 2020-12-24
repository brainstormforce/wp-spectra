const { compose } = wp.compose;
const { withSelect, withDispatch } = wp.data;
const { memo, useEffect,useState } = wp.element;
import SingleBlock from '../../../reusable/single-block/single-block';
import SingleBlockSkeleton from '../../../reusable/single-block/single-block-skeleton';
import Filters from './filters/filters';

import NoSearchResult from '../../../reusable/no-search-result/no-search-result';
import BackToTemplates from '../../../reusable/back-to-templates/back-to-templates';

let BlocksGrid = ({ setFilterBlocksBySearchTerm, allBlocks, imagesLoad, setImagesLoaded }) => {
	
	let items = Object.values(allBlocks);
	
	const onClickBackToTemplates = (event) => {
		setFilterBlocksBySearchTerm('');
	};

	useEffect(() => {

		var container = document.getElementById(
			'gutenberg-templates-grid-blocks'
		);

		if (container ) {

			imagesLoaded(container, function () {
				new Masonry(container);
			});

			if ( imagesLoad ) {
				new Masonry(container);
				setImagesLoaded( false );
			}			
		}
	},[imagesLoad]);

	return (
		<div className="gutenberg-templates-grid-blocks active">
			<Filters />
			<div
				className="gutenberg-templates-grid"
				id="gutenberg-templates-grid-blocks"
			>
				{items.length ? (
					items.map((item) => (
					 <SingleBlock key={item.ID} item={item} /> 
					))
				) : (
					<NoSearchResult>
						<BackToTemplates afterClick={onClickBackToTemplates} />
					</NoSearchResult>
				)}
			</div>
		</div>
	);
};

export default compose(
	withDispatch((dispatch) => {
		const { setFilterBlocksBySearchTerm,setImagesLoaded } = dispatch('gutenberg-templates');
		return {
			setFilterBlocksBySearchTerm: setFilterBlocksBySearchTerm,
			setImagesLoaded:setImagesLoaded,
		};
	}),
	withSelect((select) => {
		const { getAllBlocks, setImagesLoaded } = select('gutenberg-templates');
		return {
			allBlocks: getAllBlocks(),
			imagesLoad:setImagesLoaded()
		};
	})
)(memo(BlocksGrid));
