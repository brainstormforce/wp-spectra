import { unionBy } from 'lodash';
import { applyDesignLibraryRules } from './filter-blocks';

export const filterPages = ( title /* , color, category, tag */ ) => {
	// All Pages.
	let items = [];
	for ( const index in ast_block_template_vars.allSites ) {
		const singleSite = ast_block_template_vars.allSites[ index ];
		const pages = singleSite.pages || {};
		if ( Object.values( pages ).length ) {
			for ( const pageID in pages ) {
				// pages[pageID].ID = pageID;
				pages[ pageID ][ 'site-ID' ] = singleSite.ID;
				pages[ pageID ][ 'site-title' ] = singleSite.title;
				items.push( pages[ pageID ] );
			}
		}
	}

	// Apply Design Library behavior rules for pages
	items = applyDesignLibraryRules( items );

	// Filter by title.
	let filterByTitle = [];
	if ( title ) {
		filterByTitle = items.filter( ( item ) => item.title.toLowerCase().includes( title.toLowerCase() ) );
	}

	// Filter by site title.
	let filterBySiteTitle = [];
	if ( title ) {
		filterBySiteTitle = items.filter( ( item ) => item[ 'site-title' ].toLowerCase().includes( title.toLowerCase() ) );
	}

	// Filter by tags.
	let filterByTag = [];
	if ( title ) {
		filterByTag = items.filter( ( item ) => {
			if ( 'tag' in item ) {
				const tags = Object.values( item.tag ) || [];
				// Have any tags?
				if ( tags.length ) {
					for ( const tagIndex in tags ) {
						// Found any tag then return true.
						if (
							tags[ tagIndex ]
								.toLowerCase()
								.includes( title.toLowerCase() )
						) {
							return true;
						}
					}
				}

				// Not have found any matching tag,
				// So return false.
				return false;
			}

			return true;
		} );
	}

	// CASE: Combine title and tag search results.
	if ( title ) {
		items = unionBy( filterByTitle, filterByTag, filterBySiteTitle, 'ID' );
	}

	return items;
};

/**
 * Filter sites/templates with Design Library rules
 * Applies version filtering to ensure v2 users only see v2 sites
 * and v3 users only see v3 sites (unless toggle is enabled)
 *
 * @param {Array} sites - Array of sites to filter
 * @return {Array} Filtered sites
 */
export const filterSites = ( sites ) => {
	return applyDesignLibraryRules( sites );
};
