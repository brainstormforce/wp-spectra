import { Component } from 'react';
const { __ } = wp.i18n;

class TOC extends Component {

	render() {
		const { mappingHeaders, blockProp, style, headers } = this.props;

		console.log(this.props)

		console.log(headers)

		const filterArray = origHeaders => {
			let arrays = [];
			headers.forEach((heading, key) => {
				if ( mappingHeaders[heading.tag - 1] ) {
					arrays.push( heading );
				}
			});
			return arrays;
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

		if (
			typeof mappingHeaders != undefined && headers.length > 0 && headers.filter(header => mappingHeaders[header.tag - 1]).length > 0
		) {
			return (
				<div style={style} className="uagb-toc__list-wrap">
					{parseList(filterArray(headers))}
				</div>
			);
		} else {
			return (
				blockProp && (
					<p className="uagb_table-of-contents-placeholder">
						{__(
							'Add a header to begin generating the table of contents'
						)}
					</p>
				)
			);
		}
	}
}

export default TOC;
