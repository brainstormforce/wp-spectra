import { compose } from '@wordpress/compose';
import { withSelect, withDispatch } from '@wordpress/data';
import { memo, Fragment } from '@wordpress/element';
import ImportBlockButton from '../../../reusable/import-block-button/import-block-button';
import ImportItemInfo from '../../../reusable/import-item-info/import-item-info';

const BlockFooter = ( { importItemInfo, fullWidthBlockPreview } ) => {
	const previewURL = fullWidthBlockPreview.url ? fullWidthBlockPreview.url : '';

	let requiredPlugins = [];

	requiredPlugins = importItemInfo[ 'required-plugins' ]
		? importItemInfo[ 'required-plugins' ]
		: [];

	return (
		<Fragment>
			<div className="left">
				<a className="button" href={ previewURL } target="_blank" rel="noreferrer">
					Preview Pattern
					<i className="dashicons dashicons-external"></i>
				</a>
			</div>
			<div className="right">
				<ImportItemInfo requiredPlugins={ requiredPlugins } />
				<ImportBlockButton
					btnClass="button button-primary"
					title="Import Pattern"
					item={ fullWidthBlockPreview }
					requiredPlugins={ requiredPlugins }
				/>
			</div>
		</Fragment>
	);
};

export default compose(
	withSelect( ( select ) => {
		const { getImportItemInfo, getFullWidthBlockPreview } = select(
			'ast-block-templates'
		);
		return {
			importItemInfo: getImportItemInfo(),
			fullWidthBlockPreview: getFullWidthBlockPreview(),
		};
	} ),
	withDispatch( ( dispatch ) => {
		const {
			setPagePreview,
			setFullWidthPagePreview,
			setCurrentScreen,
		} = dispatch( 'ast-block-templates' );
		return {
			setPagePreview,
			updateFullWidthPagePreview( fullWidthPagePreview ) {
				setFullWidthPagePreview( fullWidthPagePreview );
				setCurrentScreen( 'full-width-page-preview' );
			},
		};
	} )
)( memo( BlockFooter ) );
