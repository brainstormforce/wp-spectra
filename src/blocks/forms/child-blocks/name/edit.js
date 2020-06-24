/**
 * BLOCK: Forms - Name - Edit
 */

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

		return (
			<div className="uagb-forms-name-wrap">
				<label className="uagb-forms-name-label"> Name </label>
				<input type="text" className="uagb-forms-name-input"/>
			</div>
		)
	}
}

export default UAGBFormsNameEdit
