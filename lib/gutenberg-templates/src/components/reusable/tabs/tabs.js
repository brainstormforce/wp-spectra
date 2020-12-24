import { __ } from '@wordpress/i18n';
const { compose } = wp.compose;
const { withSelect, withDispatch } = wp.data;
const { memo } = wp.element;

const Tabs = ({ currentScreen, updateCurrentScreen }) => {
	return (
		<div className="header-menu">
			<div
				className={`header-menu-item ${
					'all-sites-grid' === currentScreen ||
					'all-single-site-pages' === currentScreen ||
					'full-width-page-preview' === currentScreen ||
					'all-single-pages' === currentScreen
						? 'active'
						: ''
				}`}
				onClick={() => updateCurrentScreen('all-sites-grid')}
			>
				<span className="gutenberg-templates-icon gutenberg-templates-icon-file"></span>
				{__('Pages')}
			</div>
			<div
				className={`header-menu-item ${
					'all-blocks-grid' === currentScreen ||
					'full-width-block-preview' === currentScreen
						? 'active'
						: ''
				}`}
				onClick={() => updateCurrentScreen('all-blocks-grid')}
			>
				<span className="gutenberg-templates-icon gutenberg-templates-icon-layers"></span>
				{__('Patterns')}
			</div>
		</div>
	);
};

export default compose(
	withSelect((select) => {
		const { getSitePreview, getCurrentScreen } = select(
			'gutenberg-templates'
		);
		return {
			preview: getSitePreview(),
			currentScreen: getCurrentScreen(),
		};
	}),
	withDispatch((dispatch) => {
		const {
			setAllPages,
			setSitePreview,
			setTogglePopup,
			setCurrentScreen,
			setFilterPagesBySearchTerm,
			setFilterBlocksBySearchTerm,
		} = dispatch('gutenberg-templates');
		return {
			updateCurrentScreen(currentScreen) {
				setAllPages([]);
				setSitePreview({});
				setFilterPagesBySearchTerm('');
				setFilterBlocksBySearchTerm('');
				setCurrentScreen(currentScreen);
			},
			onSetSitePreview: setSitePreview,
			onSetTogglePopup: setTogglePopup,
		};
	})
)(memo(Tabs));
