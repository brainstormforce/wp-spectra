/**
 * BLOCK: Table of Contents - Save Block
 */

import classnames from "classnames"
import UAGB_Block_Icons from "../../../dist/blocks/uagb-controls/block-icons"
import renderSVG from "../../../dist/blocks/uagb-controls/renderIcon"
import TOC from './table-of-contents';

const { __ } = wp.i18n;

const {
	RichText
} = wp.blockEditor

export default function save( props ) {
	
	const { className } = props

	const {
		align,
		block_id,
		tColumns,
		heading,
		headerLinks,
		mappingHeaders,
		scrollToTop,
		smoothScroll,
		makeCollapsible,
		icon,
		initialCollapse,
		smoothScrollOffset,
		smoothScrollDelay,
	} = props.attributes

	let icon_html = ''

	if ( makeCollapsible && icon ) {
		icon_html = (
			<span className="uag-toc__collapsible-wrap">{renderSVG(icon)}</span>
		)	
	}

	const headers = headerLinks && JSON.parse(headerLinks);

	const makeHeaderArray = origHeaders => {
		let arrays = [];

		origHeaders
			.filter(header => mappingHeaders[header.tag - 1])
			.forEach(header => {
				let last = arrays.length - 1;
				if (
					arrays.length === 0 ||
					arrays[last][0].tag < header.tag
				) {
					arrays.push([header]);
				} else if (arrays[last][0].tag === header.tag) {
					arrays[last].push(header);
				} else {
					while (arrays[last][0].tag > header.tag) {
						if (arrays.length > 1) {
							arrays[arrays.length - 2].push(arrays.pop());
							last = arrays.length - 1;
						} else break;
					}
					if (arrays[last][0].tag === header.tag) {
						arrays[last].push(header);
					}
				}
			});

		while (
			arrays.length > 1 &&
			arrays[arrays.length - 1][0].tag >
				arrays[arrays.length - 2][0].tag
		) {
			arrays[arrays.length - 2].push(arrays.pop());
		}

		return arrays[0];
	};

	const filterArray = origHeaders => {
		let arrays = [];
		headers.forEach((heading, key) => {
			if ( mappingHeaders[heading.tag - 1] ) {
				arrays.push( heading );
			}
		});
		return makeHeaderArray( arrays );
	};

	const parseList = list => {
		let items = [];
		list.forEach(item => {
			
			if (Array.isArray(item)) {
				items.push(parseList(item));
			} else {

				items.push(
					<li key={list.indexOf(item)}>
						<a
							href={`#${item.link}-${list.indexOf(item)}`}
							dangerouslySetInnerHTML={{
								__html: item.text
							}}
						/>
					</li>
				);
			}
		});
		return <ul className="uagb-toc__list">{items}</ul>;
	};

	const getWrap = () => {

		if (
			typeof mappingHeaders != undefined && headers.length > 0 && headers.filter(header => mappingHeaders[header.tag - 1]).length > 0
		) {
			return (
				<div className="uagb-toc__list-wrap">
					{parseList(filterArray(headers))}
				</div>
			);
		} else {
			return (
				<p className="uagb_table-of-contents-placeholder">
					{__(
						'Add a header to begin generating the table of contents'
					)}
				</p>
			);
		}
	};


	return (

		<div className={ classnames(
			className,
			`uagb-toc__align-${align}`,
			`uagb-toc__columns-${tColumns}`,
			( initialCollapse ) ? `uagb-toc__collapse` : '',
			`uagb-block-${ block_id }`
		) }
		data-scroll={smoothScroll}
		data-offset={smoothScrollOffset}
		data-delay={smoothScrollDelay}
		>
			<div className="uagb-toc__wrap">
				<div className="uagb-toc__title-wrap">
					<RichText.Content
						value={ heading }
						tagName='div'
						className='uagb-toc__title'
					/>
					{icon_html}
				</div>
				{getWrap()}
			</div>
		</div>
	)
}
