const { select, subscribe } = wp.data;
import { Component } from 'react';
const { __ } = wp.i18n;
const striptags = require('striptags');

class TOC extends Component {
	constructor(props) {
		super(props);
		this.state = {
			headers: props.headers,
			deregister: null
		};
	}

	componentDidMount() {

		const getHeaderBlocks = () =>
			select('core/block-editor')
				.getBlocks()
				.filter(block => block.name === 'core/heading' );

		const getData = ( headerData, a ) => {

			headerData.map( ( header ) => {

				let innerBlock = header.innerBlocks;

				if( innerBlock.length > 0 ) {
					innerBlock.forEach(function(element) {
						if( element.innerBlocks.length > 0 ) {
							getData( element.innerBlocks, a );
						} else {
							a.push( element.attributes );
						}
					});
				} else {
					if( header.name === 'core/heading' ) {
						a.push( header.attributes );
					}

					if( header.name === 'uagb/advanced-heading' ) {
						a.push( header.attributes );
					}
				}

			});

			return a; 
		}

		const setHeaders = () => {
			let a = [];
			const all_headers = getData( select('core/block-editor').getBlocks(), a );
			let headers = [];

			if( typeof all_headers != 'undefined' ) {
				all_headers.forEach((heading, key) => {
					const contentAnchor = ( typeof heading.content === 'undefined' ||
						heading.content === '' ) ? 'headingId' : 'anchor'
					const contentLevel = ( typeof heading.content === 'undefined' ||
						heading.content === '' ) ? heading.headingTag : heading.level
					const headingAnchorEmpty =
						typeof heading[contentAnchor] === 'undefined' ||
						heading[contentAnchor] === '';
					const contentName = ( typeof heading.content === 'undefined' ||
						heading.content === '' ) ? 'headingTitle' : 'content'
					const headingContentEmpty = typeof heading[contentName] === 'undefined' || heading[contentName] === '';
					const headingDefaultAnchor =
						!headingAnchorEmpty &&
						heading[contentAnchor].indexOf(key + '-') === 0;

					if (
						!headingContentEmpty &&
						(headingAnchorEmpty || headingDefaultAnchor)
					) {

						headers.push(
							{
								tag: contentLevel,
								text: striptags( heading[contentName] ),
								link: striptags( heading[contentName] ).toString().toLowerCase().replace(/( |<.+?>|&nbsp;)/g, '-'),
								content: heading.contentName
							}
						);
					}
				});
			}

			if ( headers !== undefined ) {

				headers.forEach( function ( heading, index ) {
					heading.level = 0;

					for ( var i = index - 1; i >= 0; i-- ) {
						var currentOrderedItem = headers[i];

						if ( currentOrderedItem.tag <= heading.tag ) {
							heading.level = currentOrderedItem.level;

							if ( currentOrderedItem.tag < heading.tag ) {
								heading.level++;
							}

							break;
						}
					}
				});
			}

			this.setState( { headers } );
		};

		setHeaders();

		const deregister = subscribe(() => {
			setHeaders();
		});
		this.setState({ deregister });
	}

	componentWillUnmount() {
		this.state.deregister();
	}

	componentDidUpdate(prevProps, prevState) {
		if (
			JSON.stringify(this.state.headers) !==
			JSON.stringify(prevState.headers)
		) {
			this.props.blockProp.setAttributes({
				headerLinks: JSON.stringify(this.state.headers)
			});
		}
	}

	render() {
		const { mappingHeaders, blockProp, style } = this.props;

		const { headers } = this.state;

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
			return <ul className="uagb-toc__list" >{items}</ul>;
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
