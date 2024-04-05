import { compose } from '@wordpress/compose';
import { withSelect, withDispatch } from '@wordpress/data';
import { memo } from '@wordpress/element';

import { _unescape } from '../../../../../utils/functions';

const SinglePage = ( { setSearchPagePreview, item, setImportItemInfo } ) => {
	const image_url = item[ 'thumbnail-image-url' ] || '';
	const siteType = item[ 'site-pages-type' ];

	return (
		<div className="item single-site">
			<div className="inner">
				{ 'free' !== siteType && (
					<span className="grid-item-badge">Premium</span>
				)
				}
				<div
					className="screenshot"
					onClick={ ( ) => {
						setSearchPagePreview( item );
						setImportItemInfo( item );
					} }
					style={ { backgroundImage: `url('${ image_url }')` } }
					aria-hidden="true"
				>
					<div className="preview">
						<span className="ast-block-templates-icon ast-block-templates-icon-search"></span>
					</div>
				</div>
				<div className="heading-wrap">
					<h3 className="title">{ _unescape( item[ 'site-title' ] ) }</h3>
					<div className="sub-title">{ _unescape( item.title ) }</div>
				</div>
			</div>
		</div>
	);
};

export default compose(
	withSelect( ( select ) => {
		const { getSitePreview } = select( 'ast-block-templates' );
		return {
			preview: getSitePreview,
		};
	} ),
	withDispatch( ( dispatch ) => {
		const {
			setSearchPagePreview,
			setCurrentScreen,
			setImportItemInfo,
		} = dispatch( 'ast-block-templates' );
		return {
			setSearchPagePreview( item ) {
				setSearchPagePreview( item );
				setCurrentScreen( 'all-single-site-pages' );
			},
			setImportItemInfo,
		};
	} )
)( memo( SinglePage ) );
