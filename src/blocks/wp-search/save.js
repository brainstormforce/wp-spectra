/**
 * BLOCK: WP Search - Save Block
 */

import classnames from "classnames"
import renderSVG from "../../../dist/blocks/uagb-controls/renderIcon"

export default function save( props ) {
	

    const {
        block_id,
        layout,
        placeholder
    } = props.attributes

    const renderButton = () => {
            
        if ( 'input-button' === layout ) {
            
            return (
                    <button className="uagb-search-submit" type="submit">
                        <span className="uagb-wp-search-button-icon-wrap">
                            { renderSVG( 'fas fa-search' ) }
                        </span>
                    </button>
            )
        }

        return '';
    }
    const renderSearchForm = () => {
            
        if ( 'input-button' === layout || 'input' === layout ) {
            
            return (
                <form className="uagb-search-wrapper" role="search" action="https://wordpress.test" method="get">
                    <div className="uagb-search-form__container" role="tablist">
                        <input placeholder={ placeholder } 
                        className="uagb-search-form__input" type="search" name="s" title="Search"/>
                        
                        { renderButton() }

                    </div>
                </form>
            )
        }

        return '';
    }
    const renderIcon = () => {
            
        if ( 'icon' === layout ) {
         
            return (
                <form className="uagb-search-wrapper" role="search" action="https://wordpress.test" method="get">
                    <div className="uagb-search-form__container uagb-icon-input-toggle" role="tablist">
                        <input placeholder={ placeholder } className="uagb-search-form__input"
                        type="search" name="s" title="Search"/>
                        <span className="uagb-wp-search-icon-wrap">
                            { renderSVG( 'fas fa-search' ) }
                        </span>
                    </div>
                </form>
            )
        }
        
        return '';
    }

    return (
		<div className={ classnames(
            "uagb-wp-search__outer-wrap",
            `uagb-block-${ block_id }`,
            `uagb-layout-${ layout }`
        ) }
        >
            { renderSearchForm() }
            { renderIcon() }
        </div>
	)
}