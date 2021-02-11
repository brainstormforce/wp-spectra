/**
 * BLOCK: Multi Buttons
 */

const { __ } = wp.i18n

const {
	Component,
	Fragment,
} = wp.element

const {
	InnerBlocks
} = wp.blockEditor

const { select } = wp.data;

var uagbTabsUniqueIDs = [];

class UAGBTabsChildEdit extends Component {
	constructor() {
		super( ...arguments );
	}
	
	componentWillMount() {
		const { attributes, setAttributes, clientId } = this.props;

		const { getBlockRootClientId, getBlockAttributes } = !wp.blockEditor ? select( 'core/editor' ) : select( 'core/block-editor' );
		const rootBlockId = getBlockRootClientId( clientId );
		const rootBlockAttrs = getBlockAttributes( rootBlockId );

		// Apply parent style if newly inserted
		if (attributes.changed !== true) {
			if (rootBlockAttrs !== null && rootBlockAttrs.needUpdate !== false) {
				Object.keys(rootBlockAttrs).map((attribute) => {
					attributes[attribute] = rootBlockAttrs[attribute];
				});

				// Done applied, we will not do this again
				setAttributes( { changed: true } );
			}
		}
	}

	componentDidMount() {
		const { attributes, setAttributes } = this.props;
		const {id, tabHeaders} = attributes;

		if ( ! this.props.attributes.uniqueID ) {
			this.props.setAttributes( {
				uniqueID: '_' + this.props.clientId.substr( 2, 9 ),
			} );
			uagbTabsUniqueIDs.push( '_' + this.props.clientId.substr( 2, 9 ) );
		} else if ( uagbTabsUniqueIDs.includes( this.props.attributes.uniqueID ) ) {
			this.props.setAttributes( {
				uniqueID: '_' + this.props.clientId.substr( 2, 9 ),
			} );
			uagbTabsUniqueIDs.push( '_' + this.props.clientId.substr( 2, 9 ) );
		} else {
			uagbTabsUniqueIDs.push( this.props.attributes.uniqueID );
		}

		setAttributes({
			header: tabHeaders[id]
		})
	}	
	render() {
		const { attributes } = this.props;
		const {tabActive, id, uniqueID} = attributes;

		const tabClassName = [
			`uagb-tabs__${uniqueID}`,
			'uagb-tabs__body'
		].filter(Boolean).join(' ');
		return (
			<Fragment>
				<div className={tabClassName}
					 style={{
						 display: id === tabActive ? 'block' : 'none',
					 }}
				>
					<InnerBlocks
						template={[ [ 'core/paragraph' ] ]}
						templateLock={false}
					/>
				</div>
			</Fragment>
		);
	}
}

export default UAGBTabsChildEdit
