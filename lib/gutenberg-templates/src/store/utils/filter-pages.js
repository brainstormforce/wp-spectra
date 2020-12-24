import { unionBy } from 'lodash';

import { success, info } from '../../utils/logger';

export const filterPages = (title /*, color, category, tag */) => {
	// All Pages.
	let items = [];
	for (let index in GutenbergTemplatesVars.allSites) {
		let singleSite = GutenbergTemplatesVars.allSites[index];
		let pages = singleSite['pages'] || {};
		if (Object.values(pages).length) {
			for (let pageID in pages) {
				// pages[pageID].ID = pageID;
				pages[pageID]['site-ID'] = singleSite.ID;
				pages[pageID]['site-title'] = singleSite.title;
				items.push(pages[pageID]);
			}
		}
	}
	info('BEFORE', items);

	info(
		`FILTER BY: title: ${title}` // , color: ${color}, category: ${category}, tag: ${tag}
	);

	// Filter by title.
	let filterByTitle = [];
	if (title) {
		filterByTitle = items.filter((item) =>
			item.title.toLowerCase().includes(title.toLowerCase())
		);
		info(`Filter by Page Title: ${title.toLowerCase()}`, items);
	}

	// Filter by site title.
	let filterBySiteTitle = [];
	if (title) {
		filterBySiteTitle = items.filter((item) =>
			item['site-title'].toLowerCase().includes(title.toLowerCase())
		);
		info(`Filter by Site Title: ${title.toLowerCase()}`, items);
	}

	// Filter by tags.
	let filterByTag = [];
	if (title) {
		filterByTag = items.filter((item) => {
			if ('tag' in item) {
				let tags = Object.values(item['tag']) || [];
				// Have any tags?
				if (tags.length) {
					for (let tagIndex in tags) {
						// Found any tag then return true.
						if (
							tags[tagIndex]
								.toLowerCase()
								.includes(title.toLowerCase())
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
		});

		info(`Filter by TAG: ${title}`, items);
	}

	// CASE: Combine title and tag search results.
	if (title) {
		items = unionBy(filterByTitle, filterByTag, filterBySiteTitle, 'ID');
	}

	success('AFTER', items);

	return items;
};
