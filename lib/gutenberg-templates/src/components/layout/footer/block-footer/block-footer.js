const { compose } = wp.compose;
const { withSelect, withDispatch } = wp.data;
const { memo, Fragment } = wp.element;

import './block-footer.scss';

import { PHP } from '../../../../utils/serialize';

import ImportBlockButton from '../../../reusable/import-block-button/import-block-button';
import ImportItemInfo from '../../../reusable/import-item-info/import-item-info';

const BlockFooter = ({ importItemInfo, fullWidthBlockPreview }) => {
	let previewURL = fullWidthBlockPreview.url ? fullWidthBlockPreview.url : '';

	let requiredPlugins = [];
	if (!importItemInfo.length) {
		requiredPlugins = importItemInfo['post-meta'][
			'astra-blocks-required-plugins'
		]
			? PHP.parse(
					importItemInfo['post-meta']['astra-blocks-required-plugins']
			  )
			: [];
		console.log('requiredPlugins footer', requiredPlugins);
	}

	return (
		<Fragment>
			<div className="left">
				<a className="button" href={previewURL} target="_blank">
					Preview Pattern
					<i className="dashicons dashicons-external"></i>
				</a>
			</div>
			<div className="right">
				<ImportItemInfo requiredPlugins={requiredPlugins} />
				<ImportBlockButton
					btnClass="button button-primary"
					title="Import Pattern"
					item={fullWidthBlockPreview}
					requiredPlugins={requiredPlugins}
				/>
			</div>
		</Fragment>
	);
};

export default compose(
	withSelect((select) => {
		const { getImportItemInfo, getFullWidthBlockPreview } = select(
			'gutenberg-templates'
		);
		return {
			importItemInfo: getImportItemInfo(),
			fullWidthBlockPreview: getFullWidthBlockPreview(),
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
)(memo(BlockFooter));
