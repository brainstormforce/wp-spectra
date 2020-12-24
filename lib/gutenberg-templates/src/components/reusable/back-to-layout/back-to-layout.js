import { __ } from '@wordpress/i18n';
const { compose } = wp.compose;
const { withSelect, withDispatch } = wp.data;
const { memo } = wp.element;

import Tooltip from '../tooltip/tooltip';

import './back-to-layout.scss';

const BackToLayout = ({ currentScreen, previousScreen, setCurrentScreen }) => {
	let displayClass =
		'full-width-block-preview' === currentScreen ||
		'full-width-page-preview' === currentScreen ||
		'all-single-site-pages' === currentScreen
			? 'show'
			: '';
	let tooltipMessage =
		'full-width-block-preview' === currentScreen
			? 'Back to Patterns'
			: 'Back to Pages';
	return (
		<div
			className={`back-to-layout ${displayClass}`}
			onClick={() => {
				if (
					'full-width-page-preview' === currentScreen ||
					'full-width-block-preview' === currentScreen
				) {
					
					if ('all-single-site-pages' === previousScreen) {
						setCurrentScreen('all-single-site-pages');
					} else {
						setCurrentScreen('all-blocks-grid');
					}
				} else {
					setCurrentScreen('all-sites-grid');
				}
				// setCurrentScreen('full-width-page-preview');
				// setCurrentScreen('all-single-site-pages');
				// setCurrentScreen('all-sites-grid');
			}}
		>
			<Tooltip message={tooltipMessage} />
			<span className="gutenberg-templates-icon gutenberg-templates-icon-chevron-left"></span>
		</div>
	);
};

export default compose(
	withSelect((select) => {
		const { getCurrentScreen, getPreviousScreen } = select(
			'gutenberg-templates'
		);
		return {
			currentScreen: getCurrentScreen(),
			previousScreen: getPreviousScreen(),
		};
	}),
	withDispatch((dispatch) => {
		const { setCurrentScreen } = dispatch('gutenberg-templates');
		return {
			setCurrentScreen: setCurrentScreen,
		};
	})
)(memo(BackToLayout));
