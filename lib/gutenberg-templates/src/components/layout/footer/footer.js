const { compose } = wp.compose;
const { withSelect } = wp.data;
const { memo } = wp.element;

import './footer.scss';

import PageFooter from './page-footer/page-footer';
import BlockFooter from './block-footer/block-footer';

const Footer = ({ currentScreen }) => {
	if (
		'all-single-site-pages' !== currentScreen &&
		'full-width-block-preview' !== currentScreen
	) {
		return;
	}

	return (
		<div className="footer">
			{'all-single-site-pages' === currentScreen ? (
				<PageFooter />
			) : (
				<BlockFooter />
			)}
		</div>
	);
};

export default compose(
	withSelect((select) => {
		const { getCurrentScreen } = select('gutenberg-templates');
		return {
			currentScreen: getCurrentScreen(),
		};
	})
)(memo(Footer));
