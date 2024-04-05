import { compose } from '@wordpress/compose';
import { withSelect, withDispatch, useSelect } from '@wordpress/data';
import Categories from '../../../../../reusable/filters/categories/categories';
import { useRef, memo } from '@wordpress/element';
import EventBus from '../../../../../../utils/event-emitter';

const CategoriesFilter = ( {
	filterBlocksByCategory,
	setFilterBlocksByCategory,
	allPatterns,
	allCategories,
} ) => {
	const prevCategoryID = useRef( null );
	const cats = {};
	let allCount = 0;

	const { favorites } = useSelect( ( select ) => {
		const { getFavorites } = select( 'ast-block-templates' );
		return {
			favorites: getFavorites(),
		};
	}, [] );

	if ( ! allPatterns ) {
		return null;
	}

	for ( const catId in allCategories ) {
		let blockCount = 0;

		for ( const blockId in allPatterns ) {
			if ( allCategories[ catId ].id === allPatterns[ blockId ].category ) {
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

	return (
		<Categories
			value={ filterBlocksByCategory }
			allCount={ allCount }
			favoriteCount={
				favorites?.block ? Object.keys( favorites.block )?.length : 0
			}
			list={ sortedCats }
			onChange={ ( event, cat ) => {
				if ( cat.id !== '' ) {
					setFilterBlocksByCategory( cat.id );
				} else {
					setFilterBlocksByCategory( '' );
				}

				if ( prevCategoryID.current !== cat.id ) {
					prevCategoryID.current = cat.id;
					EventBus.emit( 'reset-list-count' );
				}
			} }
		/>
	);
};

export default compose(
	withSelect( ( select ) => {
		const {
			getFilterBlocksByCategory,
			getFilterBlocksByColor,
			getAllPatternsAndPages,
			getAllCategories,
		} = select( 'ast-block-templates' );
		return {
			filterBlocksByCategory: getFilterBlocksByCategory(),
			filterBlocksByColor: getFilterBlocksByColor(),
			allPatterns: getAllPatternsAndPages()?.patterns,
			allCategories: getAllCategories(),
		};
	} ),
	withDispatch( ( dispatch ) => {
		const { setFilterBlocksByCategory, setAllPatterns, setAllBlocksData } =
			dispatch( 'ast-block-templates' );
		return {
			setFilterBlocksByCategory,
			setAllPatterns,
			setAllBlocksData,
		};
	} )
)( memo( CategoriesFilter ) );
