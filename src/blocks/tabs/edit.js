/**
 * BLOCK: Multi Buttons
 */

import memoize from "memize"
import times from "lodash/times"
import styling from "./styling"

const { __ } = wp.i18n

const {
	Component,
	Fragment,
} = wp.element

const {
	BlockAlignmentToolbar,
	InspectorControls,
	InnerBlocks,
	PanelColorSettings,
	RichText
} = wp.blockEditor

const {
	PanelBody,
	TabPanel,
	SelectControl,
	RangeControl,
	BaseControl,
	Tooltip,
	Button,
	Dashicon
} = wp.components

const {
	createBlock
} = wp.blocks

const {
	compose,
} = wp.compose

const { withDispatch, select, dispatch } = wp.data;

class UAGBTabsEdit extends Component {	
	constructor() {
		super( ...arguments );
		this.state = {
			viewport: 'desktop',
		};
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
		var element = document.getElementById( "uagb-style-toc-" + this.props.clientId.substr( 0, 8 ) )

		if( null !== element && undefined !== element ) {
			element.innerHTML = styling( this.props )
		}
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
		const tabItemBlock = createBlock('uagb/tabs-child');

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
	
	updateTabsAttr( attrs ) {
		const { setAttributes, clientId } = this.props;
		const { updateBlockAttributes } = !wp.blockEditor ? dispatch( 'core/editor' ) : dispatch( 'core/block-editor' );
		const { getBlockOrder } = !wp.blockEditor ? select( 'core/editor' ) : select( 'core/block-editor' );
		const childBlocks = getBlockOrder(clientId);

		setAttributes( attrs );
		childBlocks.forEach( childBlockId => updateBlockAttributes( childBlockId, attrs ) );
		this.props.resetOrder();
	}
	render() {
		const { viewport } = this.state;
		const { attributes , setAttributes } = this.props;
		const {
			tabsStyleD,
			tabsStyleM,
			tabsStyleT,
			tabActiveFrontend,
			tabHeaders,
			headerBgColor,
			borderStyle,
			borderWidth,
			borderColor,
			borderRadius,
			headerTextColor,
			activeTabBgColor,
			activeTabTextColor,
			bodyBgColor,
			bodyTextColor,
			tabActive
		} = attributes;
		const blockClass = [
			`uagb-tabs__wrap`,
			`uagb-tabs__${tabsStyleD}-desktop`,
			`uagb-tabs__${tabsStyleT}-tablet`,
			`uagb-tabs__${tabsStyleM}-mobile`,
		].filter( Boolean ).join( ' ' );
		return (
			<Fragment>     
				<InspectorControls>
                        <PanelBody title={ __( 'Tabs Style' ) }>
							<TabPanel className="uagb-inspect-tabs uagb-inspect-tabs-col-2"
							activeClass="active-tab"
							tabs={ [
								{
									name: "desktop",
									title: __( "Desktop" ),
									className: "uagb-desktop-tab",
								},
								{
									name: "tablet",
									title: __( "Tablet" ),
									className: "uagb-tablet-tab",
								},
								{
									name: "mobile",
									title: __( "Mobile" ),
									className: "uagb-mobile-tab",
								},
							] }>
							{
								( tabName ) => {
									if( "desktop" === tabName.name ) {
										return <SelectControl
													label={ __( 'Desktop Style' ) }
													value={ tabsStyleD }
													options={ [
														{value: 'horz', label: __('Horizontal')},
														{value: 'vert', label: __('Vertical')},
													] }
													onChange={ (value) => setAttributes( { tabsStyleD: value } ) }
												/>
									}else if( "tablet" === tabName.name ) {
										return <SelectControl
													label={ __( 'Tablet Style' ) }
													value={ tabsStyleT }
													options={ [
														{value: 'horz', label: __('Horizontal')},
														{value: 'vert', label: __('Vertical')},
													] }
													onChange={ (value) => setAttributes( { tabsStyleT: value } ) }
												/>
									}else{
										return <SelectControl
													label={ __( 'Mobile Style' ) }
													value={ tabsStyleM }
													options={ [
														{value: 'horz', label: __('Horizontal')},
														{value: 'vert', label: __('Vertical')},
													] }
													onChange={ (value) => setAttributes( { tabsStyleM: value } ) }
												/>
									}
								}
							}
							</TabPanel>
						</PanelBody>
                        <PanelBody title={ __( 'Tabs Settings' ) }>
                            <SelectControl
                                label={ __( 'Initial Open Tab' ) }
                                value={ tabActiveFrontend }
                                options={ tabHeaders.map((tab, index) => {
                                    return {value: index, label: tab};
                                } ) }
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
									bodyBgColor,
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
				
                <div className={blockClass} data-tab-active={tabActiveFrontend}>
                    <ul className="uagb-tabs__panel">
                        {tabHeaders.map( ( header, index ) => (
                            <li key={ index } className={`uagb-tab ${tabActive === index ? 'uagb-tabs__active' : ''}`}
                                style={ {
                                    backgroundColor: headerBgColor,
                                    borderStyle: borderStyle,
                                    borderWidth: borderWidth + 'px',
                                    borderColor: borderColor,
                                    borderRadius: borderRadius + 'px',
                                } }
                            >
                                <a style={ { color: headerTextColor } }
                                       onClick={ () => {
                                           this.props.updateTabActive( index );
                                       } }
                                    >
										<RichText
                                            tagName="p"
                                            value={ header }
                                            onChange={ ( value ) => this.updateTabsHeader(value, index) }
                                            unstableOnSplit={ () => null }
                                            placeholder={ __( 'Title…' ) }
                                        />
								</a>
								{tabHeaders.length > 1 && (
									<Tooltip text={ __( 'Remove tab' ) }>
										<span className="uagb-tabs__remove"
												onClick={ () => this.removeTab(index) }
										>
											<Dashicon icon="no"/>
										</span>
									</Tooltip>
                                )}
                            </li>
                        ) ) }
						 <li className="uagb-tab uagb-tabs__add-tab"
                                style={ {
                                    borderRadius: borderRadius + 'px',
                                    borderWidth: borderWidth + 'px',
                                } }
                            >
							<Tooltip text={ __( 'Add tab' ) }>
								<span onClick={ () => this.addTab() }>
								<Dashicon icon="plus"/>
								</span>
							</Tooltip>
                        </li>
						</ul>
						<div className="uagb-tabs__body-wrap"
                             style={ {
                                 backgroundColor: bodyBgColor,
                                 color: bodyTextColor,
                                 borderStyle: borderStyle,
                                 borderWidth: borderWidth + 'px',
                                 borderColor: borderColor,
                                 borderRadius: borderRadius + 'px',
                             } }
                        >
                            <InnerBlocks
                                template={ [ ['uagb/tabs-child'], ['uagb/tabs-child'], ['uagb/tabs-child']] }
                                templateLock={false}
                                allowedBlocks={ [ 'uagb/tabs-child' ] }
                            />
                        </div>
                </div>
			</Fragment>
		)
	}
}

export default compose(
	withDispatch( (dispatch, { clientId }, { select }) => {
		const {
			getBlock,
		} = select( 'core/block-editor' );
		const {
			updateBlockAttributes,
		} = dispatch( 'core/block-editor' );
		const block = getBlock( clientId );
		return {
			resetOrder() {
				times( block.innerBlocks.length, n => {
					updateBlockAttributes( block.innerBlocks[ n ].clientId, {
						id: n,
					} );
				} );
			},
			updateTabActive(tabActive) {
				updateBlockAttributes( block.clientId, {
					tabActive: tabActive,
				} );
				times( block.innerBlocks.length, n => {
					updateBlockAttributes( block.innerBlocks[ n ].clientId, {
						tabActive: tabActive,
					} );
				} );
				this.resetOrder();
			},
		};

	}),
)( UAGBTabsEdit )