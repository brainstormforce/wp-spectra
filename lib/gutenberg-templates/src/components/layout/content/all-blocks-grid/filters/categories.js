import { compose } from '@wordpress/compose';
import { memo } from '@wordpress/element';
import { withSelect, withDispatch } from '@wordpress/data';

const CategoriesFilter = ( {
	filterBlocksByCategory,
	setFilterBlocksByCategory,
	filterBlocksByColor,
	filterBlocksBySearchTerm,
	allPatterns,
	allCategories,
} ) => {
	const cats = [];
	let allCount = 0;

	for ( const blockId in allPatterns ) {
		const cat_id = parseInt( allPatterns[ blockId ].category );
		const type = allPatterns[ blockId ].filter || '';

		if ( ! cats[ cat_id ] ) {
			const item = allCategories.filter(
				( cItem ) => cItem.id === cat_id
			);
			const single = item[ 0 ];
			single.id = cat_id;
			single.count = 0;
			cats[ cat_id ] = single;
		}

		if (
			// Add count if there is no filter set.
			! filterBlocksByColor ||
			// Or,
			// Only add count from the selected filter.
			( filterBlocksByColor && type === filterBlocksByColor )
		) {
			// Update the category count.
			cats[ cat_id ].count = parseInt( cats[ cat_id ].count ) + 1;

			// Increase the all count.
			allCount = allCount + 1;
		}
	}

	cats.sort( ( prev, next ) => {
		const prev_text = prev.name?.toUpperCase() || '';
		const next_text = next.name?.toUpperCase() || '';

		if ( prev_text < next_text ) {
			return -1;
		} else if ( prev_text > next_text ) {
			return 1;
		}
		return 0;
	} );

	return (
		<div className="st-block-categories-wrap">
			<h3>Categories</h3>
			<div className="st-block-categories-list">
				<div
					className={ `st-block-category ${
						! filterBlocksBySearchTerm &&
						filterBlocksByCategory === ''
							? 'active'
							: ''
					}` }
					onClick={ () => {
						setFilterBlocksByCategory( '' );
					} }
					role="button"
					tabIndex="0"
					onKeyDown={ () => {
						setFilterBlocksByCategory( '' );
					} }
					aria-hidden="true"
				>
					<span className="st-block-category-title">All</span>
					<span className="st-block-category-count">{ allCount }</span>
				</div>
				{ Object.values( cats ).map( ( cat ) => {
					return (
						<div
							key={ cat.id }
							className={ `st-block-category ${
								filterBlocksByCategory === cat.id
									? 'active'
									: ''
							}` }
							onClick={ () => {
								setFilterBlocksByCategory( cat.id );
							} }
							role="button"
							tabIndex="0"
							onKeyDown={ () => {
								setFilterBlocksByCategory( cat.id );
							} }
							aria-hidden="true"
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
		const {
			getFilterBlocksByCategory,
			getFilterBlocksByColor,
			getFilterBlocksBySearchTerm,
			getAllPatterns,
			getAllCategories,
		} = select( 'ast-block-templates' );
		return {
			filterBlocksByCategory: getFilterBlocksByCategory(),
			filterBlocksByColor: getFilterBlocksByColor(),
			filterBlocksBySearchTerm: getFilterBlocksBySearchTerm(),
			allPatterns: getAllPatterns(),
			allCategories: getAllCategories(),
		};
	} ),
	withDispatch( ( dispatch ) => {
		const { setFilterBlocksByCategory } = dispatch( 'ast-block-templates' );
		return {
			setFilterBlocksByCategory,
		};
	} )
)( memo( CategoriesFilter ) );
