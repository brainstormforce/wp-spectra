import { unionBy } from 'lodash';
import {
	// getPatterns,
	getWireframes,
	// getBlocksPages,
} from '../../utils/functions';

export const filterPatterns = ( allPatterns, title, category, tag, color, favorites, status, version, categories ) =>
	filterBlocks( title, category, tag, color, allPatterns, favorites, 'block', status, version, categories );

export const filterBlocksPages = ( allPages, title, category, tag, color, favorites, status, version, categories ) =>
	filterBlocks(
		title,
		category,
		tag,
		color,
		allPages,
		favorites,
		'page',
		status,
		version,
		categories
	);

export const filterWireframes = ( title, category, tag, color, status, version, categories ) =>
	filterBlocks( title, category, tag, color, getWireframes(), null, null, status, version, categories );

export const filterBlocks = (
	title,
	category,
	tag,
	color,
	items,
	favorites,
	type,
	status = 'all',
	version = 'all',
	categories = []
) => {
	// All blocks.
	if ( ! items ) {
		items = ast_block_template_vars.allBlocks;
	}

	// Apply Design Library behavior rules before other filtering
	items = applyDesignLibraryRules( items );

	// Create a map of category IDs to category names for quick lookup during search
	const categoryMap = {};
	if ( categories && Array.isArray( categories ) && categories.length > 0 ) {
		categories.forEach( ( cat ) => {
			if ( cat.id && cat.name ) {
				categoryMap[ cat.id ] = cat.name;
			}
		} );
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

	// Filter by category name (when searching).
	let filterByCategory = [];
	if ( title && Object.keys( categoryMap ).length > 0 ) {
		filterByCategory = items.filter( ( item ) => {
			if ( item.category && categoryMap[ item.category ] ) {
				const categoryName = categoryMap[ item.category ].toLowerCase();
				return categoryName.includes( title.toLowerCase() );
			}
			return false;
		} );
	}

	// CASE: Combine title, tag, and category search results.
	if ( title || tag ) {
		items = unionBy( filterByTitle, filterByTag, filterByCategory, 'ID' );
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

	// Filter by status (Pro/Free) - syncs with category selection
	if ( status && status !== 'all' ) {
		if ( status === 'premium' ) {
			// Only show items that are explicitly marked as premium
			items = items.filter( ( item ) => {
				const itemType = item[ 'astra-sites-type' ];
				return itemType === 'premium';
			} );
		} else if ( status === 'free' ) {
			// Show items that are free, have empty array, or missing the field
			items = items.filter( ( item ) => {
				const itemType = item[ 'astra-sites-type' ];
				return ! itemType || itemType === 'free' || itemType === '' ||
					   ( Array.isArray( itemType ) && itemType.length === 0 );
			} );
		}
	}

	// Filter by version (v2/v3) - applies when version is specified
	// This ensures consistent filtering regardless of whether toggle UI is shown
	if ( version && version !== 'all' ) {
		items = filterByVersion( items, version );
	}

	return items;
};

/**
 * Apply Design Library behavior rules based on Spectra version and plugin status
 *
 * Rules:
 * - If version toggle is NOT shown: Only show content matching the detected Spectra version
 *   - v2 users (UAGB < 3.0.0-beta.1) see only v2 content
 *   - v3 users (UAGB >= 3.0.0-beta.1) see only v3 content
 * - If version toggle IS shown: Return all items (toggle will filter based on user selection)
 * - Items with empty/missing spectra-ver are treated as v2 (legacy content)
 * - This applies to ALL content types: blocks, pages, and kits/wireframes
 *
 * @param {Array} items - Array of items to filter
 * @return {Array} Filtered items
 */
export const applyDesignLibraryRules = ( items ) => {
	if ( ! items || ! Array.isArray( items ) || items.length === 0 ) {
		return [];
	}

	// Safely access global variables with defaults
	const show_version_toggle = ast_block_template_vars?.show_version_toggle || false;
	const spectra_version = ast_block_template_vars?.spectra_version || 'v2';

	// If toggle is not shown, only show content matching the detected Spectra version
	// This ensures v2 users see only v2 content, and v3 users see only v3 content
	// This filtering applies to ALL content types: blocks, pages, and kits
	if ( ! show_version_toggle ) {
		return items.filter( ( item ) => {
			let itemVersion = item[ 'spectra-ver' ];

			// Treat empty/missing as v2 (legacy content)
			if ( ! itemVersion || ( Array.isArray( itemVersion ) && itemVersion.length === 0 ) || itemVersion === '' ) {
				itemVersion = 'v2';
			}

			// Show only content matching the detected Spectra version
			return itemVersion === spectra_version;
		} );
	}

	// If legacy design library IS enabled (toggle shown), return all items
	// The version toggle will handle filtering based on user's v2/v3 selection
	return items;
};

/**
 * Filter items by version
 *
 * @param {Array}  items   - Array of items to filter
 * @param {string} version - Version to filter by (v2, v3)
 * @return {Array} Filtered items
 */
export const filterByVersion = ( items, version ) => {
	const filteredItems = items.filter( ( item ) => {
		// Get the item's version, treating empty/missing/empty array as v2 (legacy content)
		let itemVersion = item[ 'spectra-ver' ];

		// Handle empty arrays, empty strings, null, undefined
		if ( ! itemVersion || ( Array.isArray( itemVersion ) && itemVersion.length === 0 ) || itemVersion === '' ) {
			itemVersion = 'v2';
		}

		// Check if item version matches the filter
		if ( itemVersion === version ) {
			return true;
		}

		// Fallback to legacy tag-based filtering for backward compatibility
		const itemTag = item.tag || item.tags;
		if ( Array.isArray( itemTag ) ) {
			return itemTag.includes( version );
		} else if ( typeof itemTag === 'object' ) {
			return Object.values( itemTag ).includes( version );
		}
			return itemTag === version;
	} );

	return filteredItems;
};

/**
 * Check if version toggle functionality is enabled
 *
 * @return {boolean} True if version toggle should be shown, false otherwise.
 */
export const isVersionToggleEnabled = () => {
	const { show_version_toggle, user_migration_status } = ast_block_template_vars;
	// Only show toggle for 3.0.0-beta.1+ upgraded users
	return show_version_toggle && user_migration_status && user_migration_status.is_upgraded_user;
};

/**
 * Get user's version preference from settings/storage
 *
 * @return {string|null} User's preferred version or null if not set
 */
export const getUserVersionPreference = () => {
	try {
		return localStorage.getItem( 'ast_block_templates_version_preference' ) || null;
	} catch ( error ) {
		console.warn( '[FILTER-BLOCKS] Could not access localStorage:', error );
		return null;
	}
};

/**
 * Save user's version preference to localStorage
 *
 * @param {string} version - Version to save (v2 or v3)
 */
export const saveUserVersionPreference = ( version ) => {
	try {
		localStorage.setItem( 'ast_block_templates_version_preference', version );
	} catch ( error ) {
		console.warn( '[FILTER-BLOCKS] Could not save to localStorage:', error );
	}
};

/**
 * Get smart suggestions based on search term
 * When user searches for "FAQ" and gets no results, show FAQ-related patterns
 * Falls back to general patterns only if no related patterns are found
 *
 * @param {string} searchTerm - The search term used
 * @param {Array}  allItems   - All available items
 * @param {string} type       - Type of items (block/page)
 * @param {string} version    - Version filter (v2/v3/all)
 * @param {Array}  categories - Categories list with id and name properties
 * @return {Array} Smart suggestions filtered by version
 */
export const getSmartSuggestions = ( searchTerm, allItems, type, version, categories = [] ) => {
	if ( ! allItems || ! Array.isArray( allItems ) || allItems.length === 0 ) {
		return [];
	}

	// Apply Design Library rules first
	let items = applyDesignLibraryRules( allItems );

	// Apply version filter
	if ( version && version !== 'all' ) {
		items = filterByVersion( items, version );
	}

	// If no search term, return filtered items
	if ( ! searchTerm ) {
		return items;
	}

	const lowerSearchTerm = searchTerm.toLowerCase();

	// Create a map of category IDs to category names for quick lookup
	const categoryMap = {};
	if ( categories && Array.isArray( categories ) ) {
		categories.forEach( ( cat ) => {
			if ( cat.id && cat.name ) {
				categoryMap[ cat.id ] = cat.name;
			}
		} );
	}

	// Find related patterns by checking:
	// 1. Partial matches in title
	// 2. Matches in tags
	// 3. Matches in category names
	const relatedPatterns = items.filter( ( item ) => {
		// Check title for partial match
		if ( item.title && item.title.toLowerCase().includes( lowerSearchTerm ) ) {
			return true;
		}

		// Check tags for partial match
		if ( item.tag ) {
			const tags = Object.values( item.tag );
			for ( const tag of tags ) {
				if ( tag && tag.toLowerCase().includes( lowerSearchTerm ) ) {
					return true;
				}
			}
		}

		// Check category name for partial match
		if ( item.category && categoryMap[ item.category ] ) {
			const categoryName = categoryMap[ item.category ].toLowerCase();
			if ( categoryName.includes( lowerSearchTerm ) ) {
				return true;
			}
		}

		return false;
	} );

	// If we found related patterns, return them
	if ( relatedPatterns.length > 0 ) {
		return relatedPatterns;
	}

	// If no related patterns found, return all filtered items as fallback
	return items;
};
