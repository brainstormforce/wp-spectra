/**
 * BLOCK: Tabs Child Block
 */

import classnames from "classnames"

const { __ } = wp.i18n

const {
	Component,
} = wp.element

const {
	InnerBlocks
} = wp.blockEditor

const { select } = wp.data;

class UAGBTabsChildEdit extends Component {
	constructor() {
		super( ...arguments );
	}
	
	componentWillMount() {
		const { attributes, clientId } = this.props;

		const { getBlockRootClientId, getBlockAttributes } = !wp.blockEditor ? select( 'core/editor' ) : select( 'core/block-editor' );
		const rootBlockId = getBlockRootClientId( clientId );
		const rootBlockAttrs = getBlockAttributes( rootBlockId );

		// Apply parent style if newly inserted
		if (rootBlockAttrs !== null && rootBlockAttrs.needUpdate !== false) {
			Object.keys(rootBlockAttrs).map((attribute) => {
				attributes[attribute] = rootBlockAttrs[attribute];
			});
		}
	}

	componentDidMount() {
		const { attributes, setAttributes } = this.props;
		const {id, tabHeaders} = attributes;
		setAttributes( { block_id: this.props.clientId.substr( 0, 8 ) } )
		setAttributes({
			header: tabHeaders[id]
		})
	}	
	render() {
		const { attributes , className} = this.props;
		const {tabActive, id, block_id} = attributes;

		return (
				<div className={ classnames(
					className,
					`uagb-tabs__${block_id}`,
					'uagb-tabs__body'
				) }
					 style={{
						 display: id === tabActive ? 'block' : 'none',
					 }}
				>
					<InnerBlocks
						template={[ [ 'core/paragraph' ] ]}
						templateLock={false}
					/>
				</div>
		);
	}
}

export default UAGBTabsChildEdit
