/**
 * BLOCK: Forms - Email - Edit
 */

import classnames from "classnames"

const { __ } = wp.i18n

const {
	Component,
} = wp.element

class UAGBFormsEmailEdit extends Component {

	constructor() {
		super( ...arguments )
	}

	componentDidMount() {

		const { attributes, setAttributes } = this.props

		// Assigning block_id in the attribute.
		setAttributes( { block_id: this.props.clientId.substr( 0, 8 ) } )

		// Pushing Style tag for this block css.
		const $style = document.createElement( "style" )
		$style.setAttribute( "id", "uagb-style-forms-email-" + this.props.clientId.substr( 0, 8 ) )
		document.head.appendChild( $style )
		
	}

	componentDidUpdate(prevProps, prevState) {
    }
    
	render() {

		const { attributes } = this.props

        const {
            block_id
		} = attributes
		
		return (
			<div className={ classnames(
				"uagb-forms-email-wrap",
				`uagb-block-${ block_id }`,
			) }>
				<label className="uagb-forms-email-label"> { __( "Email" ) } </label>
				<input type="email" className="uagb-forms-email-input"/>
			</div>
		)
	}
}

export default UAGBFormsEmailEdit
