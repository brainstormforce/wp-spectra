/**
 * BLOCK: Multi Buttons
 */

import classnames from "classnames"
import times from "lodash/times"
import styling from "./styling"
import memoize from "memize"

// Import all of our Text Options requirements.
import TypographyControl from "../../components/typography"

// Import Web font loader for google fonts.
import WebfontLoader from "../../components/typography/fontloader"

const { __ } = wp.i18n

const {
	Component,
	Fragment,
} = wp.element

const {
	BlockAlignmentToolbar,
	InspectorControls,
	InnerBlocks,
	PanelColorSettings
} = wp.blockEditor

const {
	PanelBody,
	SelectControl,
	RangeControl,
	BaseControl,
	Tooltip,
	Button
} = wp.components

const { withDispatch, select, dispatch } = wp.data;

const ALLOWED_BLOCKS = [ "uagb/tabs-child" ]
const advgbTabsUniqueIDs = [];
class UAGBTabsEdit extends Component {	
	constructor() {
		super( ...arguments );
		this.state = {
			viewport: 'desktop',
		};
	}
	componentWillMount() {
		const { attributes, setAttributes } = this.props;
		const currentBlockConfig = advgbDefaultConfig['advgb-adv-tabs'];
		// No override attributes of blocks inserted before
		if (attributes.changed !== true) {
			if (typeof currentBlockConfig === 'object' && currentBlockConfig !== null) {
				Object.keys(currentBlockConfig).map((attribute) => {
					if (typeof attributes[attribute] === 'boolean') {
						attributes[attribute] = !!currentBlockConfig[attribute];
					} else {
						attributes[attribute] = currentBlockConfig[attribute];
					}
				});
			}

			// Finally set changed attribute to true, so we don't modify anything again
			setAttributes( { changed: true } );
		}
	}

	componentDidUpdate() {
		const { attributes, setAttributes } = this.props;
		const { isTransform } = attributes;

		if(isTransform) {
			setAttributes( {
				isTransform: false
			} );
			this.props.updateTabActive( 0 );
		}
	}

	componentDidMount() {
		if ( ! this.props.attributes.uniqueID ) {
			this.props.setAttributes( {
				uniqueID: '_' + this.props.clientId.substr( 2, 9 ),
			} );
			advgbTabsUniqueIDs.push( '_' + this.props.clientId.substr( 2, 9 ) );
		} else if ( advgbTabsUniqueIDs.includes( this.props.attributes.uniqueID ) ) {
			this.props.setAttributes( {
				uniqueID: '_' + this.props.clientId.substr( 2, 9 ),
			} );
			advgbTabsUniqueIDs.push( '_' + this.props.clientId.substr( 2, 9 ) );
		} else {
			advgbTabsUniqueIDs.push( this.props.attributes.uniqueID );
		}
		if (!this.props.attributes.pid) {
			this.props.setAttributes( {
				pid: `advgb-tabs-${this.props.clientId}`,
			} );
		}
		this.updateTabHeaders();
		this.props.resetOrder();
	}

	updateTabsAttr( attrs ) {
		const { setAttributes, clientId } = this.props;
		const { updateBlockAttributes } = !wp.blockEditor ? dispatch( 'core/editor' ) : dispatch( 'core/block-editor' );
		const { getBlockOrder } = !wp.blockEditor ? select( 'core/editor' ) : select( 'core/block-editor' );
		const childBlocks = getBlockOrder(clientId);

		setAttributes( attrs );
		childBlocks.forEach( childBlockId => updateBlockAttributes( childBlockId, attrs ) );
		this.props.resetOrder();
	}

	updateTabsHeader(header, index) {
		const { attributes, setAttributes, clientId } = this.props;
		const { tabHeaders } = attributes;
		const { updateBlockAttributes } = !wp.blockEditor ? dispatch( 'core/editor' ) : dispatch( 'core/block-editor' );
		const { getBlockOrder } = !wp.blockEditor ? select( 'core/editor' ) : select( 'core/block-editor' );
		const childBlocks = getBlockOrder(clientId);

		let newHeaders = tabHeaders.map( ( item, idx ) => {
			if ( index === idx ) {
				item = header;
			}
			return item;
		} );

		setAttributes( { tabHeaders: newHeaders} );
		updateBlockAttributes(childBlocks[index], {header: header});
		this.updateTabHeaders();
	}

	updateTabHeaders() {
		const { attributes, clientId } = this.props;
		const { tabHeaders } = attributes;
		const { updateBlockAttributes } = !wp.blockEditor ? dispatch( 'core/editor' ) : dispatch( 'core/block-editor' );
		const { getBlockOrder } = !wp.blockEditor ? select( 'core/editor' ) : select( 'core/block-editor' );
		const childBlocks = getBlockOrder(clientId);

		childBlocks.forEach( childBlockId => updateBlockAttributes( childBlockId, {tabHeaders: tabHeaders} ) );
	}

	addTab() {
		const { attributes, setAttributes, clientId } = this.props;
		const { insertBlock } = !wp.blockEditor ? dispatch( 'core/editor' ) : dispatch( 'core/block-editor' );
		const tabItemBlock = createBlock('advgb/tab');

		insertBlock(tabItemBlock, attributes.tabHeaders.length, clientId);
		setAttributes( {
			tabHeaders: [
				...attributes.tabHeaders,
				'Tab header'
			]
		} );
		this.props.resetOrder();
	}

	removeTab(index) {
		const { attributes, setAttributes, clientId } = this.props;
		const { removeBlock } = !wp.blockEditor ? dispatch( 'core/editor' ) : dispatch( 'core/block-editor' );
		const { getBlockOrder } = !wp.blockEditor ? select( 'core/editor' ) : select( 'core/block-editor' );
		const childBlocks = getBlockOrder(clientId);

		removeBlock(childBlocks[index], false);
		setAttributes( {
			tabHeaders: attributes.tabHeaders.filter( (vl, idx) => idx !== index )
		} );
		this.updateTabsAttr({tabActive: 0});
		this.props.resetOrder();
	}
	render() {
		const { viewport } = this.state;
		const TABS_STYLES = [
			{name: 'horz', label: __('Horizontal')},
			{name: 'vert', label: __('Vertical')},
		];
		const { attributes, setAttributes, clientId } = this.props;
            const {
                tabHeaders,
                tabActive,
                tabActiveFrontend,
                tabsStyleD,
                tabsStyleT,
                tabsStyleM,
                headerBgColor,
                headerTextColor,
                bodyBgColor,
                bodyTextColor,
                borderStyle,
                borderWidth,
                borderColor,
                borderRadius,
                pid,
                activeTabBgColor,
                activeTabTextColor,
                isPreview,
			} = attributes;

			let deviceLetter = 'D';
            if (viewport === 'tablet') deviceLetter = 'T';
			if (viewport === 'mobile') deviceLetter = 'M';
			
			const tabBlockAttrs = {
				tabHeaders: {
					type: 'array',
					default: [
						__( 'Tab 1', 'advanced-gutenberg' ),
						__( 'Tab 2', 'advanced-gutenberg' ),
						__( 'Tab 3', 'advanced-gutenberg' ),
					]
				},
				tabActive: {
					type: 'number',
					default: 0,
				},
				tabActiveFrontend: {
					type: 'number',
					default: 0,
				},
				tabsStyleD: {
					type: 'string',
					default: 'horz'
				},
				tabsStyleT: {
					type: 'string',
					default: 'vert'
				},
				tabsStyleM: {
					type: 'string',
					default: 'stack'
				},
				headerBgColor: {
					type: 'string',
					default: '#e0e0e0',
				},
				headerTextColor: {
					type: 'string',
					default: '#fff',
				},
				bodyBgColor: {
					type: 'string',
				},
				bodyTextColor: {
					type: 'string',
				},
				borderStyle: {
					type: 'string',
					default: 'solid',
				},
				borderWidth: {
					type: 'number',
					default: 1,
				},
				borderColor: {
					type: 'string',
				},
				borderRadius: {
					type: 'number',
					default: 10,
				},
				pid: {
					type: 'string',
				},
				activeTabBgColor: {
					type: 'string',
				},
				activeTabTextColor: {
					type: 'string',
				},
				changed: {
					type: 'boolean',
					default: false,
				},
				isPreview: {
					type: 'boolean',
					default: false,
				},
				uniqueID: {
					type: 'string',
					default: ''
				},
				isTransform: {
					type: 'boolean',
					default: false
				}
			};
			
		return (
			<Fragment>
				  <InspectorControls>
                        <PanelBody title={ __( 'Tabs Style' ) }>
                            <div className="advgb-columns-responsive-items">
                                {['desktop', 'tablet', 'mobile'].map( (device, index) => {
                                    const itemClasses = [
                                        "advgb-columns-responsive-item",
                                        viewport === device && 'is-selected',
                                    ].filter( Boolean ).join( ' ' );

                                    return (
                                        <div className={ itemClasses }
                                             key={ index }
                                             onClick={ () => this.setState( { viewport: device } ) }
                                        >
                                            {device}
                                        </div>
                                    )
                                } ) }
                            </div>
                            <div className="advgb-tabs-styles">
                                {TABS_STYLES.map((style, index) => (
                                    <Tooltip key={index} text={style.label}>
                                        <Button className="advgb-tabs-style"
                                                isToggled={ style.name === attributes[`tabsStyle${deviceLetter}`] }
                                                onClick={ () => setAttributes( { [`tabsStyle${deviceLetter}`]: style.name } ) }
                                        >
                                            {style.icon}
                                        </Button>
                                    </Tooltip>
                                ))}
                                {viewport === 'mobile' && (
                                    <Tooltip text={ __( 'Stacked' ) }>
                                        <Button className="advgb-tabs-style"
                                                isToggled={ tabsStyleM === 'stack' }
                                                onClick={ () => setAttributes( { tabsStyleM: 'stack' } ) }
                                        >
                                            <svg color="#5954d6" width="50px" height="50px" viewBox="0 0 26 26" xmlns="http://www.w3.org/2000/svg" style={{backgroundColor: "#fff"}}>
                                                <path fill="currentColor" d="M24.2480469,18.5H1.75C1.3359375,18.5,1,18.8359375,1,19.25v5C1,24.6640625,1.3359375,25,1.75,25   h22.4980469c0.4140625,0,0.75-0.3359375,0.75-0.75v-5C24.9980469,18.8359375,24.6621094,18.5,24.2480469,18.5z M23.4980469,23.5   H2.5V20h20.9980469V23.5z"/>
                                                <path fill="currentColor" d="M24.25,9.75H1.75C1.3359375,9.75,1,10.0859375,1,10.5v5c0,0.4140625,0.3359375,0.75,0.75,0.75h22.5   c0.4140625,0,0.75-0.3359375,0.75-0.75v-5C25,10.0859375,24.6640625,9.75,24.25,9.75z M23.5,14.75h-21v-3.5h21V14.75z"/>
                                                <path fill="currentColor" d="M1.75,7.5h22.4980469c0.4140625,0,0.75-0.3359375,0.75-0.75v-5c0-0.4140625-0.3359375-0.75-0.75-0.75H1.75   C1.3359375,1,1,1.3359375,1,1.75v5C1,7.1640625,1.3359375,7.5,1.75,7.5z M2.5,2.5h20.9980469V6H2.5V2.5z"/>
                                            </svg>
                                        </Button>
                                    </Tooltip>
                                )}
                            </div>
                        </PanelBody>
                        <PanelBody title={ __( 'Tabs Settings' ) }>
                            <SelectControl
                                label={ __( 'Initial Open Tab' ) }
                                value={ tabActiveFrontend }
                                // options={ tabHeaders.map((tab, index) => {
                                //     return {value: index, label: tab};
                                // } ) }
                                onChange={ (value) => setAttributes( { tabActiveFrontend: parseInt(value) } ) }
                            />
                        </PanelBody>
                        <PanelColorSettings
                            title={ __( 'Tab Colors' ) }
                            initialOpen={ false }
                            colorSettings={ [
                                {
                                    label: __( 'Background Color' ),
                                    value: headerBgColor,
                                    onChange: ( value ) => setAttributes( { headerBgColor: value === undefined ? '#e0e0e0' : value } ),
                                },
                                {
                                    label: __( 'Text Color' ),
                                    value: headerTextColor,
                                    onChange: ( value ) => setAttributes( { headerTextColor: value === undefined ? '#fff' : value } ),
                                },
                                {
                                    label: __( 'Active Tab Background Color' ),
                                    value: activeTabBgColor,
                                    onChange: ( value ) => setAttributes( { activeTabBgColor: value } ),
                                },
                                {
                                    label: __( 'Active Tab Text Color' ),
                                    value: activeTabTextColor,
                                    onChange: ( value ) => setAttributes( { activeTabTextColor: value } ),
                                },
                            ] }
                        />
                        <PanelColorSettings
                            title={ __( 'Body Colors' ) }
                            initialOpen={ false }
                            colorSettings={ [
                                {
                                    label: __( 'Background Color' ),
                                    value: bodyBgColor,
                                    onChange: ( value ) => setAttributes( { bodyBgColor: value } ),
                                },
                                {
                                    label: __( 'Text Color' ),
                                    value: bodyTextColor,
                                    onChange: ( value ) => setAttributes( { bodyTextColor: value } ),
                                },
                            ] }
                        />
                        <PanelBody title={ __( 'Border Settings' ) } initialOpen={ false }>
                            <SelectControl
                                label={ __( 'Border Style' ) }
                                value={ borderStyle }
                                options={ [
                                    { label: __( 'None' ), value: 'none' },
                                    { label: __( 'Solid' ), value: 'solid' },
                                    { label: __( 'Dashed' ), value: 'dashed' },
                                    { label: __( 'Dotted' ), value: 'dotted' },
                                ] }
                                onChange={ ( value ) => setAttributes( { borderStyle: value } ) }
                            />
                            <PanelColorSettings
                                title={ __( 'Border Color' ) }
                                initialOpen={ false }
                                colorSettings={ [
                                    {
                                        label: __( 'Border Color' ),
                                        value: borderColor,
                                        onChange: ( value ) => setAttributes( { borderColor: value } ),
                                    },
                                ] }
                            />
                            <RangeControl
                                label={ __( 'Border width' ) }
                                value={ borderWidth }
                                min={ 1 }
                                max={ 10 }
                                onChange={ ( value ) => setAttributes( { borderWidth: value } ) }
                            />
                            <RangeControl
                                label={ __( 'Border radius' ) }
                                value={ borderRadius }
                                min={ 0 }
                                max={ 100 }
                                onChange={ ( value ) => setAttributes( { borderRadius: value } ) }
                            />
                        </PanelBody>
                    </InspectorControls>
                 
				hjgjhgjhg
			</Fragment>
		)
	}
}

export default UAGBTabsEdit
