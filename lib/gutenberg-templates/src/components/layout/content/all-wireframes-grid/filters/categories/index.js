const { compose } = wp.compose;
const { memo } = wp.element;
const { withSelect, withDispatch } = wp.data;
import Categories from '.././../../../../reusable/block-filters/categories';

const CategoriesFilter = ( {
	filterBlocksByCategory,
	setFilterBlocksByCategory,
	filterBlocksByColor,
} ) => {
	const cats = [];
	let allCount = 0;

	for ( const blockId in ast_block_template_vars.allBlocks ) {
		const type = ast_block_template_vars.allBlocks[ blockId ].filter || '';
		const wireframe =
			ast_block_template_vars.allBlocks[ blockId ].wireframe || {};

		if ( Object.keys( wireframe ).length ) {
			const cat_id =
				'object' ===
				typeof ast_block_template_vars.allBlocks[ blockId ].category
					? 0
					: parseInt(
						ast_block_template_vars.allBlocks[ blockId ].category
					  );

			if ( ! cats[ cat_id ] ) {
				const item = ast_block_template_vars.allCategories.filter(
					( element ) => element.id === cat_id
				);
				const single = item.length ? item[ 0 ] : {};
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
	}

	cats.sort( ( prev, next ) => {
		const prev_text = prev.name ? prev.name.toUpperCase() : '';
		const next_text = next.name ? next.name.toUpperCase() : '';
		if ( prev_text < next_text ) {
			return -1;
		}
		if ( prev_text > next_text ) {
			return 1;
		}
		return 0;
	} );

	return (
		<Categories
			value={ filterBlocksByCategory }
			allCount={ allCount }
			options={ cats }
			onChange={ ( event, cat ) => {
				if ( cat ) {
					setFilterBlocksByCategory( cat.id );
				} else {
					setFilterBlocksByCategory( '' );
				}
			} }
		/>
	);
};

export default compose(
	withSelect( ( select ) => {
		const { getFilterBlocksByCategory, getFilterBlocksByColor } = select(
			'ast-block-templates'
		);
		return {
			filterBlocksByCategory: getFilterBlocksByCategory(),
			filterBlocksByColor: getFilterBlocksByColor(),
		};
	} ),
	withDispatch( ( dispatch ) => {
		const { setFilterBlocksByCategory } = dispatch( 'ast-block-templates' );
		return {
			setFilterBlocksByCategory,
		};
	} )
)( memo( CategoriesFilter ) );
