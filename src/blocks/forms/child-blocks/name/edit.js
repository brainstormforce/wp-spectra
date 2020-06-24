/**
 * BLOCK: Forms - Name - Edit
 */

import classnames from "classnames"

const { __ } = wp.i18n

const {
	Component,
} = wp.element

class UAGBFormsNameEdit extends Component {

	constructor() {
		super( ...arguments )
	}

	componentDidMount() {

		const { attributes, setAttributes } = this.props

		// Assigning block_id in the attribute.
		setAttributes( { block_id: this.props.clientId.substr( 0, 8 ) } )

		// Pushing Style tag for this block css.
		const $style = document.createElement( "style" )
		$style.setAttribute( "id", "uagb-style-forms-name-" + this.props.clientId.substr( 0, 8 ) )
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
				"uagb-forms-name-wrap",
				`uagb-block-${ block_id }`,
			) }>
				<label className="uagb-forms-name-label"> { __( "Name" ) } </label>
				<input type="text" className="uagb-forms-name-input"/>
			</div>
		)
	}
}

export default UAGBFormsNameEdit
