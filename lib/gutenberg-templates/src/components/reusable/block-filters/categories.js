import { __ } from '@wordpress/i18n';
const { compose } = wp.compose;
const { memo } = wp.element;
const { withSelect } = wp.data;

const Categories = ( {
	value,
	options,
	allCount,
	onChange,
	filterBlocksBySearchTerm,
} ) => {
	return (
		<div className="st-block-categories-wrap">
			<h3>{ __( 'Categories', 'ast-block-templates' ) }</h3>
			<div className="st-block-categories-list">
				<div
					className={ `st-block-category ${
						! filterBlocksBySearchTerm && value === ''
							? 'active'
							: ''
					}` }
					onClick={ ( event ) => {
						if ( 'function' === typeof onChange ) {
							onChange( event, '' );
						}
					} }
					role="button"
					tabIndex={ 0 }
					onKeyDown={ ( event ) => {
						if ( 'function' === typeof onChange ) {
							onChange( event, '' );
						}
					} }
				>
					<span className="st-block-category-title">All</span>
					<span className="st-block-category-count">{ allCount }</span>
				</div>
				{ Object.values( options ).map( ( cat ) => {
					return (
						<div
							key={ cat.id }
							className={ `st-block-category ${
								value === cat.id ? 'active' : ''
							}` }
							onClick={ ( event ) => {
								if ( 'function' === typeof onChange ) {
									onChange( event, cat );
								}
							} }
							role="button"
							tabIndex={ 0 }
							onKeyDown={ ( event ) => {
								if ( 'function' === typeof onChange ) {
									onChange( event, cat );
								}
							} }
						>
							<span className="st-block-category-title">
								{ cat.name }
							</span>
							<span className="st-block-category-count">
								{ cat.count }
							</span>
						</div>
					);
				} ) }
			</div>
		</div>
	);
};

export default compose(
	withSelect( ( select ) => {
		const { getFilterBlocksBySearchTerm } = select( 'ast-block-templates' );
		return {
			filterBlocksBySearchTerm: getFilterBlocksBySearchTerm(),
		};
	} )
)( memo( Categories ) );
