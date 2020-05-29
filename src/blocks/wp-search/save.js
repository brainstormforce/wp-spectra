/**
 * BLOCK: WP Search - Save Block
 */

import classnames from "classnames"

export default function save( props ) {
	
	return (
		<div className={ classnames(
            "uagb-wp-search__outer-wrap",
            `uagb-block-${ props.clientId }`,
        ) }
        >
        WP Search
        </div>
	)
}