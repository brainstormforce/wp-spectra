import { compose } from '@wordpress/compose';
import { withSelect } from '@wordpress/data';
import { memo } from '@wordpress/element';

import './footer.scss';

import PageFooter from './page-footer/page-footer';
import BlockFooter from './block-footer/block-footer';

const Footer = ( { currentScreen } ) => {
	if (
		'all-single-site-pages' !== currentScreen &&
		'full-width-block-preview' !== currentScreen
	) {
		return null;
	}

	return (
		<div className="footer">
			{ 'all-single-site-pages' === currentScreen ? (
				<PageFooter />
			) : (
				<BlockFooter />
			) }
		</div>
	);
};

export default compose(
	withSelect( ( select ) => {
		const { getCurrentScreen } = select( 'ast-block-templates' );
		return {
			currentScreen: getCurrentScreen(),
		};
	} )
)( memo( Footer ) );
