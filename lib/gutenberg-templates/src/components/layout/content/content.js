// External.
const { useEffect, memo } = wp.element;
const { compose } = wp.compose;
const { withSelect } = wp.data;

import AllBlocksGrid from './all-blocks-grid/all-blocks-grid';
import AllSingleSitePages from './all-single-site-pages/all-single-site-pages';
import AllSitesGrid from './all-sites-grid/all-sites-grid';
import FullWidthBlockPreview from './full-width-block-preview/full-width-block-preview';
import FullWidthBagePreview from './full-width-page-preview/full-width-page-preview';
import AllSinglePages from './all-single-pages/all-single-pages';

import Notice from '../../reusable/notice/notice';

import './content.scss';

const ContentItem = ({ filterPagesBySearchTerm, currentScreen }) => {
	if ('all-single-pages' === currentScreen) {
		return <AllSinglePages />;
	}

	if ('all-blocks-grid' === currentScreen) {
		return <AllBlocksGrid />;
	}

	if (!filterPagesBySearchTerm && 'all-single-site-pages' === currentScreen) {
		return <AllSingleSitePages />;
	}

	if ('all-sites-grid' === currentScreen) {
		return <AllSitesGrid />;
	}

	if ('full-width-block-preview' === currentScreen) {
		return <FullWidthBlockPreview />;
	}

	if ('full-width-page-preview' === currentScreen) {
		return <FullWidthBagePreview />;
	}
};

const Content = ({ sitePreview, currentScreen, togglePopup }) => {
	useEffect(() => {
		if (true === togglePopup) {
			document.body.classList.add('gutenberg-templates-modal-open');
			document
				.getElementById('gutenberg-templates-modal-wrap')
				.classList.add('open');
		}
	}, [togglePopup, currentScreen, sitePreview]);

	return (
		<div className="gutenberg-templates-content">
			<Notice />
			<ContentItem currentScreen={currentScreen} />
		</div>
	);
};

export default compose(
	withSelect((select) => {
		const {
			getFilterPagesBySearchTerm,
			getSitePreview,
			getCurrentScreen,
			getTogglePopup,
		} = select('gutenberg-templates');
		return {
			filterPagesBySearchTerm: getFilterPagesBySearchTerm(),
			sitePreview: getSitePreview(),
			currentScreen: getCurrentScreen(),
			togglePopup: getTogglePopup(),
		};
	})
)(memo(Content));
