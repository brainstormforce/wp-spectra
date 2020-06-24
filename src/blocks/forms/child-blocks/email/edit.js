/**
 * BLOCK: Forms - Email - Edit
 */

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

		return (
			<div className="uagb-forms-email-wrap">
				<label className="uagb-forms-email-label"> Email </label>
				<input type="email" className="uagb-forms-email-input"/>
			</div>
		)
	}
}

export default UAGBFormsEmailEdit
