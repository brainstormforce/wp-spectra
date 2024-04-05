import { unionBy } from 'lodash';
import {
	// getPatterns,
	getWireframes,
	// getBlocksPages,
} from '../../utils/functions';

export const filterPatterns = ( allPatterns, title, category, tag, color, favorites ) =>
	filterBlocks( title, category, tag, color, allPatterns, favorites, 'block' );

export const filterBlocksPages = ( allPages, title, category, tag, color, favorites ) =>
	filterBlocks(
		title,
		category,
		tag,
		color,
		allPages,
		favorites,
		'page'
	);

export const filterWireframes = ( title, category, tag, color ) =>
	filterBlocks( title, category, tag, color, getWireframes() );

export const filterBlocks = (
	title,
	category,
	tag,
	color,
	items,
	favorites,
	type
) => {
	// All blocks.
	if ( ! items ) {
		items = ast_block_template_vars.allBlocks;
	}

	// Filter by title.
	let filterByTitle = [];
	if ( title ) {
		filterByTitle = items.filter( ( item ) =>
			item.title.toLowerCase().includes( title.toLowerCase() )
		);
	}

	// Filter by tags.
	let filterByTag = [];
	if ( tag ) {
		filterByTag = items.filter( ( item ) => {
			const tags = Object.values( item.tag );
			// Have any tags?
			if ( tags.length ) {
				for ( const tagIndex in tags ) {
					// Found any tag then return true.
					if (
						tags[ tagIndex ].toLowerCase().includes( tag.toLowerCase() )
					) {
						return true;
					}
				}

				// Not have found any matching tag,
				// So return false.
				return false;
			}

			// Not found any block with search tag.
			return false;
		} );
	}

	// CASE: Combine title and tag search results.
	if ( title || tag ) {
		items = unionBy( filterByTitle, filterByTag, 'ID' );
	}
	// Filter by category.
	if ( !! category ) {
		if ( 'favorite' === category ) {
			const favoritesBlocks = favorites[ type ];
			items = items.filter( ( item ) =>
				favoritesBlocks.includes( parseInt( +item.ID ) )
			);
		} else {
			items = items.filter(
				( item ) => parseInt( category ) === parseInt( item.category )
			);
		}
	}

	// Filter by color.
	if ( color ) {
		items = items.filter( ( item ) => color === item.filter );
	}

	return items;
};
