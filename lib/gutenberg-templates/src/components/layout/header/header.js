const { memo } = wp.element;
const { compose } = wp.compose;
const { withSelect, withDispatch } = wp.data;

import Sync from '../../reusable/sync/sync';
import BackToLayout from '../../reusable/back-to-layout/back-to-layout';
import Logo from '../../reusable/logo/logo';
import Tabs from '../../reusable/tabs/tabs';
import CloseButton from '../../reusable/close-button/close-button';

import './header.scss';

import SearchInput from '../../reusable/search-input/search-input';

const Header = ({
	currentScreen,
	filterPagesBySearchTerm,
	filterBlocksBySearchTerm,
	setFilterBlocksBySearchTerm,
	setFilterPagesBySearchTerm,
}) => {
	return (
		<div className="header">
			<Logo />

			<BackToLayout />

			<Tabs />

			{'all-sites-grid' === currentScreen ||
			'all-single-site-pages' === currentScreen ||
			'full-width-page-preview' === currentScreen ||
			'all-single-pages' === currentScreen ? (
				<SearchInput
					placeholder="Search Templates.."
					value={filterPagesBySearchTerm}
					onSearch={(event) => {
						setFilterPagesBySearchTerm(event.target.value);
					}}
				/>
			) : (
				<SearchInput
					placeholder="Search Patterns.."
					value={filterBlocksBySearchTerm}
					onSearch={(event) => {
						setFilterBlocksBySearchTerm(event.target.value);
					}}
				/>
			)}

			<Sync />

			<CloseButton />
		</div>
	);
};

export default compose(
	withSelect((select) => {
		const {
			getCurrentScreen,
			getFilterPagesBySearchTerm,
			getFilterBlocksBySearchTerm,
		} = select('gutenberg-templates');
		return {
			currentScreen: getCurrentScreen(),
			filterPagesBySearchTerm: getFilterPagesBySearchTerm(),
			filterBlocksBySearchTerm: getFilterBlocksBySearchTerm(),
		};
	}),
	withDispatch((dispatch) => {
		const {
			setFilterBlocksBySearchTerm,
			setFilterPagesBySearchTerm,
			setCurrentScreen,
			setPagePreview,
			setSitePreview,
			setFullWidthBlockPreview,
		} = dispatch('gutenberg-templates');
		const { insertBlocks } = dispatch('core/block-editor');
		return {
			setFilterBlocksBySearchTerm(searchTerm) {
				setCurrentScreen('all-blocks-grid');
				setFullWidthBlockPreview({});
				setFilterBlocksBySearchTerm(searchTerm);
			},
			insertBlocks: insertBlocks,
			setFilterPagesBySearchTerm(searchTerm) {
				setCurrentScreen('all-sites-grid');
				setFilterPagesBySearchTerm(searchTerm);
				setPagePreview({});
				setSitePreview({});
			},
		};
	})
)(memo(Header));
