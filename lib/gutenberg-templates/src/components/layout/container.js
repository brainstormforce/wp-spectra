// External.
import { __ } from '@wordpress/i18n';
const { Fragment, useEffect, memo } = wp.element;
const { compose } = wp.compose;
const { withSelect, withDispatch } = wp.data;

// Internal
import StarterTemplatesButton from '../reusable/starter-templates-button/starter-templates-button';
import Header from './header/header';
import Content from './content/content';
import Footer from './footer/footer';

const Container = ({
	sitePreview,
	setCurrentScreen,
	currentScreen,
	togglePopup,
}) => {
	return (
		<Fragment>
			<StarterTemplatesButton />

			<div className="inner">
				<Header />

				<Content />

				<Footer />
			</div>
		</Fragment>
	);
};

export default compose(
	withSelect((select) => {
		const {
			getSitePreview,
			getCurrentScreen,
			getAllSites,
			getAllBlocks,
			getTogglePopup,
		} = select('gutenberg-templates');
		return {
			sitePreview: getSitePreview(),
			currentScreen: getCurrentScreen(),
			allBlocks: getAllBlocks(),
			allSites: getAllSites(),
			togglePopup: getTogglePopup(),
		};
	}),
	withDispatch((dispatch) => {
		const { insertBlocks, setCurrentScreen } = dispatch(
			'core/block-editor'
		);
		return {
			setCurrentScreen: setCurrentScreen,
			insertBlocks: insertBlocks,
		};
	})
)(memo(Container));
