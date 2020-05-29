/**
 * BLOCK: WP Search 
 */

import classnames from "classnames"

const {
	Component,
} = wp.element

class UAGBWpSearchEdit extends Component {

	constructor() {
		super( ...arguments )
	}

	componentDidMount() {

		// Assigning block_id in the attribute.
		this.props.setAttributes( { block_id: this.props.clientId } )
		// Pushing Style tag for this block css.
	}
	render() {
        const { attributes } = this.props
        const {
            block_id
        } = attributes

        const renderSearchForm = () => {

            return (
                <form className="hfe-search-button-wrapper" role="search" action="https://wordpress.test" method="get">
                    <div className="hfe-search-form__container" role="tablist">
                        <input placeholder="Type &amp; Hit Enter..." className="hfe-search-form__input" type="search" name="s" title="Search" value=""/>
                        <button id="clear-with-button" type="reset">
                        <i className="fas fa-times" aria-hidden="true"></i>
                        </button>
                        <button className="hfe-search-submit" type="submit">
                        <i className="fas fa-search" aria-hidden="true"></i>
                        </button>
                    </div>
                </form>
            )
        }
		return (
			<div className={ classnames(
                "uagb-wp-search__outer-wrap",
                `uagb-block-${ this.props.clientId }`,
            ) }
            >
            { renderSearchForm() }
            </div>
		)
	}
}

export default UAGBWpSearchEdit
