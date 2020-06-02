/**
 * BLOCK: WP Search - Save Block
 */

import classnames from "classnames"

export default function save( props ) {
	
    const renderSearchForm = () => {

        return (
            <form className="uagb-search-button-wrapper" role="search" action="https://wordpress.test" method="get">
                <div className="uagb-search-form__container" role="tablist">
                    <input placeholder="Type &amp; Hit Enter..." className="uagb-search-form__input" type="search" name="s" title="Search" value=""/>
                    <button id="clear-with-button" type="reset">
                    <i className="fas fa-times" aria-hidden="true"></i>
                    </button>
                    <button className="uagb-search-submit" type="submit">
                    <i className="fas fa-search" aria-hidden="true"></i>
                    </button>
                </div>
            </form>
        )
    }

    return (
		<div className={ classnames(
            "uagb-wp-search__outer-wrap",
            `uagb-block-${ props.clientId }`,
        ) }
        >
            { renderSearchForm() }
        </div>
	)
}