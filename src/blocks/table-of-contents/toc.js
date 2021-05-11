import { __ } from '@wordpress/i18n';;

class TableOfContents extends React.Component {

	render() {
		const { mappingHeaders, headers } = this.props;

		const filterArray = origHeaders => {
			let arrays = [];
			headers.forEach( ( heading, key ) => {
				if ( mappingHeaders[ heading.tag - 1 ] ) {
					arrays.push( heading );
				}
			});
			return arrays;
		};

		const renderList = headers => {

			let lastLevel   = '';
			let parentLevel = '';
			let firstLevel  = '';
			let toc = '';
			let str = "</li></ul>";

			headers.forEach( ( item,index ) => {
				
				let level = item.tag;
				let title = item.content;
			
				if ( 0 === index ) {
					firstLevel = level;
				}

				if ( level < firstLevel ) {
					return;
				}

				if ( '' === parentLevel || level < parentLevel ) {
					parentLevel = level;
				}

				if ( '' !== lastLevel ) {

					if ( level > lastLevel ) {

						toc += '<ul class="uagb-toc__list">';

					} else if ( level === lastLevel && level !== parentLevel ) {

						toc += '<li class="uagb-toc__list">';
					} else {
						if ( level > parentLevel ) {

							toc += '</li>';

						} else if ( level < parentLevel ) {

							toc += '</ul></li>';

						} else if ( level === parentLevel ) {

							toc += str.repeat( lastLevel );
							toc += '</li>';
						}
					}
				}

				toc += '<li class="uagb-toc__list"><a href="#">' + title + '</a>';

				lastLevel = level;

			});

			toc += str.repeat( lastLevel );

			return <ol class="uagb-toc__list" dangerouslySetInnerHTML={{__html: toc}} ></ol>;
		}

		if ( mappingHeaders != 'undefined' && headers && headers.length > 0 && headers.filter(header => mappingHeaders[header.tag - 1]).length > 0 ) {
			
			return (
				<div className="uagb-toc__list-wrap">
					{ renderList( filterArray( headers ) ) }
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

	}
}

export default TableOfContents;
