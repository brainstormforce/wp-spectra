const { compose } = wp.compose;
const { withSelect, withDispatch } = wp.data;
const { memo, Fragment } = wp.element;

import './page-footer.scss';

import ImportPageButton from '../../../reusable/import-page-button/import-page-button';
import ImportItemInfo from '../../../reusable/import-item-info/import-item-info';
import { PHP } from '../../../../utils/serialize';

const PageFooter = ({ importItemInfo ,pagePreview }) => {
	let pageURL = pagePreview['astra-page-url']
		? pagePreview['astra-page-url']
		: '';

	return (
		<Fragment>
			<a className="button" href={pageURL} target="_blank">
				Preview "{pagePreview.title}" page{' '}
				<i className="dashicons dashicons-external"></i>
			</a>
			<ImportPageButton
				title={`Import "${pagePreview.title}" page`}
				item={pagePreview}
			/>
		</Fragment>
	);
};

export default compose(
	withSelect((select) => {
		const { getImportItemInfo, getCurrentScreen, getPagePreview } = select(
			'gutenberg-templates'
		);

		return {
			importItemInfo: getImportItemInfo(),
			pagePreview: getPagePreview(),
			currentScreen: getCurrentScreen(),
		};
	}),
	withDispatch((dispatch) => {
		const {
			setPagePreview,
			setFullWidthPagePreview,
			setCurrentScreen,
		} = dispatch('gutenberg-templates');
		return {
			setPagePreview: setPagePreview,
			updateFullWidthPagePreview(fullWidthPagePreview) {
				setFullWidthPagePreview(fullWidthPagePreview);
				setCurrentScreen('full-width-page-preview');
			},
		};
	})
)(memo(PageFooter));
