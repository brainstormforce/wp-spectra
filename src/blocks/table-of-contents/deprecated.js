/**
 * BLOCK: Table of Contents - Deprecated Block
 */

import classnames from "classnames"
import TableOfContents from './components';
import attributes from "./attributes"

const {
	RichText
} = wp.blockEditor

const deprecated = [
	{
		attributes,			
		save: function( props ) {

			const { className } = props

			const {
				align,
				block_id,
				tColumns,
				heading,
				headerLinks,
				mappingHeaders,
				scrollToTop,
			} = props.attributes

			return (

				<div className={ classnames(
					className,
					`uagb-toc__align-${align}`,
					`uagb-toc__columns-${tColumns}`
				) }
				id={ `uagb-toc-${ block_id }` }>
					<div className="uagb-toc__wrap">

						<RichText.Content
							value={ heading }
							tagName='div'
							className='uagb-toc__title'
						/>
						<TableOfContents
							align={align}
							numcolumns={tColumns}
							scrollToTop={scrollToTop}
							mappingHeaders={mappingHeaders}
							headers={headerLinks && JSON.parse(headerLinks)}
							blockProp={props}
						/>
					</div>
				</div>
			)
		},
	}
]

export default deprecated;