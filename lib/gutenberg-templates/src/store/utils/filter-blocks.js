import { unionBy } from 'lodash';

import { info } from '../../utils/logger';

export const filterBlocks = (title, color, category, tag) => {
	// All blocks.
	let items = GutenbergTemplatesVars.allBlocks;
	info('BEFORE', items);
	info(
		`FILTER BY: title: ${title}, color: ${color}, category: ${category}, tag: ${tag}`
	);

	// Filter by title.
	let filterByTitle = [];
	if (title) {
		filterByTitle = items.filter((item) =>
			item.title.toLowerCase().includes(title.toLowerCase())
		);
		info(`Filter by TITLE: ${title.toLowerCase()}`, items);
	}

	// Filter by tags.
	let filterByTag = [];
	if (tag) {
		filterByTag = items.filter((item) => {
			let tags = Object.values(item.tag);
			// Have any tags?
			if (tags.length) {
				for (let tagIndex in tags) {
					// Found any tag then return true.
					if (
						tags[tagIndex].toLowerCase().includes(tag.toLowerCase())
					) {
						return true;
					}
				}

				// Not have found any matching tag,
				// So return false.
				return false;
			}
			return true;
		});

		info(`Filter by TAG: ${tag}`, items);
	}

	// CASE: Combine title and tag search results.
	if (title || tag) {
		items = unionBy(filterByTitle, filterByTag, 'ID');
	}

	// Filter by color.
	if (color) {
		items = items.filter((item) => color === item.filter);
		info(`Filter by COLOR: ${color}`, items);
	} else {
		items = items.filter((item) => color != item.filter);
		info(`Filter by all COLOR`, items);
	}

	// Filter by category.
	if (category) {
		items = items.filter(
			(item) => parseInt(category) === parseInt(item.category)
		);
		info(`Filter by CATEGORY: ${category}`, items);
	}

	return items;
};
