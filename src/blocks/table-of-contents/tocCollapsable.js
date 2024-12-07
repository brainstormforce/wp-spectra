import { __ } from '@wordpress/i18n';

function TableOfContents( props ) {
    const { mappingHeaders, headers, collapsibleListDepth } = props;

	const filterArray = () => {
		const arrays = [];
		headers.forEach( ( heading ) => {
			if ( mappingHeaders[ heading.tag - 1 ] ) {
				arrays.push( heading );
			}
		} );
		return arrays;
	};

	// Calculate depth and children mapping based on the stack logic.
	const calculateDepthAndChildren = ( header ) => {
		const hasChildren = new Array( header.length ).fill( false );
		const depthMapping = new Array( header.length ).fill( 0 );
		const stack = [];

		header.forEach( ( item, index ) => {
			const level = item.tag;

			// Calculate depth using a stack.
			while ( stack.length && stack[stack.length - 1].level >= level ) {
				stack.pop();
			}

			depthMapping[index] = stack.length + 1;
			stack.push( {
				level,
				index,
			} );

			// Check for children.
			for ( let i = index + 1; i < header.length; i++ ) {
				if ( header[i].tag > level ) {
					hasChildren[index] = true;
					break;
				} else if ( header[i].tag <= level ) {
					break;
				}
			}
		} );

		return { hasChildren, depthMapping };
	};

	const renderList = ( header ) => {
		let lastLevel = '';
		let parentLevel = '';
		let firstLevel = '';
		let toc = '';
		const closingStr = '</li></ul>';
		let currentDepth = 0;
		const depthArray = {
			1: 0,
			2: 0,
			3: 0,
			4: 0,
			5: 0,
			6: 0,
		};

		// Call the depth and children calculation function.
		const { hasChildren, depthMapping } = calculateDepthAndChildren( header );

		header.forEach( ( item, index ) => {
			const level = item.tag;
			const title = item.content;

			// Set the first level of the list.
			if ( 0 === index ) {
				firstLevel = level;
			}

			// Ignore headings before the first level.
			if ( level < firstLevel ) {
				return;
			}

			// Set the parent level if it's empty or lower than the current one.
			if ( '' === parentLevel || level < parentLevel ) {
				parentLevel = level;
			}

			// Handle nesting and depth using lastLevel and depthArray.
			if ( '' !== lastLevel ) {
				if ( level > lastLevel ) {
					toc += '<ul class="uagb-toc__list">';
					currentDepth++;
					depthArray[ level ] = currentDepth;
				} else if ( level === lastLevel && level !== parentLevel ) {
					toc += '<li class="uagb-toc__list">';
					depthArray[ level ] = currentDepth;
				} else if ( level < lastLevel ) {
					const closing = Math.abs( currentDepth - depthArray[ level ] );
					if ( level > parentLevel ) {
						toc += closingStr.repeat( closing );
						currentDepth = Math.abs( currentDepth - closing );
					} else if ( level === parentLevel ) {
						toc += closingStr.repeat( closing );
						toc += '</li>';
					}
				}
			}

			// Add collapsibility span based on the calculated depth and children.
			const iframeEl = document.querySelector( `iframe[name='editor-canvas']` );
			const collapsibleClass = ( hasChildren[index] && depthMapping[index] <= collapsibleListDepth )
                ? 'uagb-toc__list--expandable'
                : '';

            const collapsibleSpan = ( hasChildren[index] && depthMapping[index] <= collapsibleListDepth )
                ? '<span class="list-open" role="button" tabindex="0" aria-expanded="true"></span>'
                : '';

            // Replace # with JavaScript:void(0) to avoid page refresh in FSE on click.
            if ( iframeEl ) {
                toc += `<li class="uagb-toc__list ${collapsibleClass}">${collapsibleSpan}<a href="JavaScript:void(0);">${title.trim()}</a></li>`;
            } else {
                toc += `<li class="uagb-toc__list ${collapsibleClass}">${collapsibleSpan}<a href="#">${title.trim()}</a></li>`;
            }

			// Update the lastLevel to the current level.
			lastLevel = level;
		} );

		// Close any remaining open tags based on the depth.
		toc += closingStr.repeat( currentDepth );

		return <ol className="uagb-toc__list" dangerouslySetInnerHTML={ { __html: toc } }></ol>;
	};

	if (
		mappingHeaders !== 'undefined' &&
		headers &&
		headers.length > 0 &&
		headers.filter( ( header ) => mappingHeaders[ header.tag - 1 ] ).length > 0
	) {
		return <div className="uagb-toc__list-wrap">{ renderList( filterArray( headers ) ) }</div>;
	}

	return (
		<p className="uagb_table-of-contents-placeholder">
			{ __( 'Add a header to begin generating the table of contents', 'ultimate-addons-for-gutenberg' ) }
		</p>
	);
}

export default TableOfContents;
