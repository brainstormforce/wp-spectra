/**
 * BLOCK: Forms - Edit
 */

import classnames from "classnames"

const {
	Component,
} = wp.element

const {
	InnerBlocks
} = wp.blockEditor

const ALLOWED_BLOCKS = [ "uagb/forms-name", "uagb/forms-email" ]

class UAGBFormsEdit extends Component {

	constructor() {
		super( ...arguments )
	}

	componentDidMount() {

		const { attributes, setAttributes } = this.props

		// Assigning block_id in the attribute.
		setAttributes( { block_id: this.props.clientId.substr( 0, 8 ) } )

		// Pushing Style tag for this block css.
		const $style = document.createElement( "style" )
		$style.setAttribute( "id", "uagb-style-forms-" + attributes.block_id )
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
					"uagb-forms__outer-wrap",
					`uagb-block-${ block_id }`,
				) }
				>
                    <InnerBlocks
                        allowedBlocks={ ALLOWED_BLOCKS }
                    />
				</div>
		)
	}
}

export default UAGBFormsEdit
