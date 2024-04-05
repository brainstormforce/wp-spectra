import { compose } from '@wordpress/compose';
import { memo } from '@wordpress/element';
import { withSelect, withDispatch, useSelect } from '@wordpress/data';
import Categories from '../../../../../reusable/filters/categories/categories';

const CategoriesFilter = ( {
	filterBlocksByCategory,
	setFilterBlocksPagesByCategory,
	allPages,
	allCategories,
} ) => {
	const cats = {};
	let allCount = 0;

	for ( const catId in allCategories ) {
		let blockCount = 0;
		for ( const blockId in allPages ) {
			if ( allCategories[ catId ].id === allPages[ blockId ].category ) {
				blockCount++;
			}
		}
		if ( blockCount === 0 ) {
			continue;
		}
		cats[ catId ] = allCategories[ catId ];
		cats[ catId ].count = blockCount;
		allCount = allCount + blockCount;
	}

	const sortedCats = Object.keys( cats ).map( ( key ) => cats[ key ] );

	const { favorites } = useSelect( ( select ) => {
		const { getFavorites } = select( 'ast-block-templates' );
		return {
			favorites: getFavorites(),
		};
	} );

	return (
		<Categories
			value={ filterBlocksByCategory }
			allCount={ allCount }
			favoriteCount={
				favorites?.page ? Object.keys( favorites.page )?.length : 0
			}
			list={ sortedCats }
			onChange={ ( event, cat ) => {
				if ( cat.id !== '' ) {
					setFilterBlocksPagesByCategory( cat.id );
				} else {
					setFilterBlocksPagesByCategory( '' );
				}
			} }
		/>
	);
};

export default compose(
	withSelect( ( select ) => {
		const {
			getFilterBlocksPagesByCategory,
			getFilterBlocksPagesByColor,
			getAllPatternsAndPages,
			getAllCategories,
		} = select( 'ast-block-templates' );
		return {
			filterBlocksByCategory: getFilterBlocksPagesByCategory(),
			filterBlocksByColor: getFilterBlocksPagesByColor(),
			allPages: getAllPatternsAndPages()?.pages,
			allCategories: getAllCategories(),
		};
	} ),
	withDispatch( ( dispatch ) => {
		const { setFilterBlocksPagesByCategory } = dispatch(
			'ast-block-templates'
		);
		return {
			setFilterBlocksPagesByCategory,
		};
	} )
)( memo( CategoriesFilter ) );
