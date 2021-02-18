/**
 * BLOCK: Tabs Block
 */

import memoize from "memize"
import times from "lodash/times"
import styling from "./styling"

import BoxShadowControl from "../../components/box-shadow"

// Import all of our Text Options requirements.
import TypographyControl from "../../components/typography"

import FontIconPicker from "@fonticonpicker/react-fonticonpicker"

import UAGBIcon from "../../../dist/blocks/uagb-controls/UAGBIcon.json"

import renderSVG from "../../../dist/blocks/uagb-controls/renderIcon"

import UAGB_Block_Icons from "../../../dist/blocks/uagb-controls/block-icons"

const { __ } = wp.i18n

const {
	Component,
	Fragment,
} = wp.element

let svg_icons = Object.keys( UAGBIcon )

const {
	BlockAlignmentToolbar,
	InspectorControls,
	InnerBlocks,
	PanelColorSettings,
	RichText,
	ColorPalette
} = wp.blockEditor

const {
	PanelBody,
	TabPanel,
	SelectControl,
	RangeControl,
	ToggleControl,
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
	}
	componentDidMount() {
		this.props.setAttributes( { block_id: this.props.clientId.substr( 0, 8 ) } )
		const $style = document.createElement( "style" )
		$style.setAttribute( "id", "uagb-style-tab-" + this.props.clientId.substr( 0, 8 ) )
		document.head.appendChild( $style );
		if (!this.props.attributes.pid) {
			this.props.setAttributes( {
				pid: `uagb-tabs-${this.props.clientId}`,
			} );
		}
		this.updateTabTitle();
		this.props.resetTabOrder();
	}
	componentDidUpdate() {
		const { attributes, setAttributes } = this.props;
		const { isTransform } = attributes;

		if(isTransform) {
			setAttributes( {
				isTransform: false
			} );
			this.props.updateActiveTab( 0 );
		}
		var element = document.getElementById( "uagb-style-tab-" + this.props.clientId.substr( 0, 8 ) )

		if( null !== element && undefined !== element ) {
			element.innerHTML = styling( this.props )
		}
	}
	updateTabsTitle(header, index) {
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
		this.updateTabTitle();
	}
	updateTabTitle() {
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
				'New Tab'
			]
		} );
		this.props.resetTabOrder();
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
		this.props.resetTabOrder();
	}
	
	updateTabsAttr( attrs ) {
		const { setAttributes, clientId } = this.props;
		const { updateBlockAttributes } = !wp.blockEditor ? dispatch( 'core/editor' ) : dispatch( 'core/block-editor' );
		const { getBlockOrder } = !wp.blockEditor ? select( 'core/editor' ) : select( 'core/block-editor' );
		const childBlocks = getBlockOrder(clientId);

		setAttributes( attrs );
		childBlocks.forEach( childBlockId => updateBlockAttributes( childBlockId, attrs ) );
		this.props.resetTabOrder();
	}
	render() {
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
			tabActive,
			boxShadowColor,
			boxShadowHOffset,
			boxShadowVOffset,
			boxShadowBlur,
			boxShadowSpread,
			boxShadowPosition,
			tabTitleLeftMargin,
			tabTitleRightMargin,
			tabTitleTopMargin,
			tabTitleBottomMargin,
			tabBodyLeftMargin,
			tabBodyRightMargin,
			tabBodyTopMargin,
			tabBodyBottomMargin,
			tabBodyVertPadding,
			tabBodyHrPadding,
			tabTitleVertPadding,
			tabTitleHrPadding,
			titleLoadGoogleFonts,
			titleFontFamily,
			titleFontWeight,
			titleFontSubset,
			titleFontSizeType,
			titleFontSize,
			titleFontSizeMobile,
			titleFontSizeTablet,
			titleLineHeightType,
			titleLineHeight,
			titleLineHeightMobile,
			titleLineHeightTablet,
			titleAlign,
			showIcon,
			Icon,
			iconColor,
			iconPosition,
			iconSpacing,
			iconSize
		} = attributes;
		
		const blockClass = [
			`uagb-block-${ this.props.clientId.substr( 0, 8 ) }`,
			`uagb-tabs__wrap`,
			`uagb-tabs__${tabsStyleD}-desktop`,
			`uagb-tabs__${tabsStyleT}-tablet`,
			`uagb-tabs__${tabsStyleM}-mobile`,
		].filter( Boolean ).join( ' ' );

		return (
			<Fragment>     
				<InspectorControls>
					
					<PanelBody title={ __( 'Tabs Style' ) }>
					<TabPanel className="uagb-size-type-field-tabs" activeClass="active-tab"
					tabs={ [
						{
							name: "desktop",
							title: <Dashicon icon="desktop" />,
							className: "uagb-desktop-tab uagb-responsive-tabs",
						},
						{
							name: "tablet",
							title: <Dashicon icon="tablet" />,
							className: "uagb-tablet-tab uagb-responsive-tabs",
						},
						{
							name: "mobile",
							title: <Dashicon icon="smartphone" />,
							className: "uagb-mobile-tab uagb-responsive-tabs",
						},
					] }>
					{
						( tab ) => {
							let tabout

							if ( "mobile" === tab.name ) {
								tabout = (
									<Fragment>
										
										<SelectControl
											label={ __( "Tabs Style" ) }
											value={ tabsStyleM }
											onChange={ ( value ) => setAttributes( { tabsStyleM: value } ) }
											beforeIcon="editor-textcolor"
											initialPosition={30}
											options={ [
												{value: 'hstyle1', label: __('Horizontal Style 1')},
												{value: 'hstyle2', label: __('Horizontal Style 2')},
												{value: 'hstyle3', label: __('Horizontal Style 3')},
												{value: 'hstyle4', label: __('Horizontal Style 4')},
												{value: 'hstyle5', label: __('Horizontal Style 5')},
												{value: 'vstyle6', label: __('Vertical Style 6')},
												{value: 'vstyle7', label: __('Vertical Style 7')},
												{value: 'vstyle8', label: __('Vertical Style 8')},
												{value: 'vstyle9', label: __('Vertical Style 9')},
												{value: 'vstyle10', label: __('Vertical Style 10')},
												{value: 'stack1', label: __('Stack Style 11')},
												{value: 'stack2', label: __('Stack Style 12')},
												{value: 'stack3', label: __('Stack Style 13')},
												{value: 'stack4', label: __('Stack Style 14')},
											] }
										/>
									</Fragment>
								)
							} else if ( "tablet" === tab.name ) {
								tabout = (
									<Fragment>
										
										<SelectControl
											label={ __( "Tabs Style" ) }
											value={ tabsStyleT }
											onChange={ ( value ) => setAttributes( { tabsStyleT: value } ) }
											beforeIcon="editor-textcolor"
											initialPosition={30}
											options={ [
												{value: 'hstyle1', label: __('Horizontal Style 1')},
												{value: 'hstyle2', label: __('Horizontal Style 2')},
												{value: 'hstyle3', label: __('Horizontal Style 3')},
												{value: 'hstyle4', label: __('Horizontal Style 4')},
												{value: 'hstyle5', label: __('Horizontal Style 5')},
												{value: 'vstyle6', label: __('Vertical Style 6')},
												{value: 'vstyle7', label: __('Vertical Style 7')},
												{value: 'vstyle8', label: __('Vertical Style 8')},
												{value: 'vstyle9', label: __('Vertical Style 9')},
												{value: 'vstyle10', label: __('Vertical Style 10')},
											] }
										/>
									</Fragment>
								)
							} else {
								tabout = (
									<Fragment>
										
										<RangeControl
											label={ __( "Tabs Style" ) }
											value={ tabsStyleD }
											onChange={ ( value ) => setAttributes( { tabsStyleD: value } ) }
											beforeIcon="editor-textcolor"
											initialPosition={30}
											options={ [
												{value: 'hstyle1', label: __('Horizontal Style 1')},
												{value: 'hstyle2', label: __('Horizontal Style 2')},
												{value: 'hstyle3', label: __('Horizontal Style 3')},
												{value: 'hstyle4', label: __('Horizontal Style 4')},
												{value: 'hstyle5', label: __('Horizontal Style 5')},
												{value: 'vstyle6', label: __('Vertical Style 6')},
												{value: 'vstyle7', label: __('Vertical Style 7')},
												{value: 'vstyle8', label: __('Vertical Style 8')},
												{value: 'vstyle9', label: __('Vertical Style 9')},
												{value: 'vstyle10', label: __('Vertical Style 10')},
											] }
										/>
									</Fragment>
								)
							}

							return <div>{ tabout }</div>
						}
					}
				</TabPanel>	
			
						</PanelBody>
                        <PanelBody title={ __( 'Tabs Title Settings' ) }>
                            <SelectControl
                                label={ __( 'Initial Open Tab' ) }
                                value={ tabActiveFrontend }
                                options={ tabHeaders.map((tab, index) => {
                                    return {value: index, label: tab};
                                } ) }
                                onChange={ (value) => setAttributes( { tabActiveFrontend: parseInt(value) } ) }
                            />
							<h2>{ __( "Alignment" ) }</h2>
							<BlockAlignmentToolbar
								value={ titleAlign }
								onChange={ ( value ) =>
									setAttributes( {
										titleAlign: value,
									} )
								}
								controls={ [ 'left', 'center', 'right' ] }
								isCollapsed={ false }
						/>		
						<ToggleControl
							label={ __( "Enable Icon" ) }
							checked={ showIcon }
							onChange={ ( value ) => setAttributes( { showIcon: ! showIcon } ) }
						/>
						{ showIcon && 
							<Fragment>
								<h2 className="components-base-control__label">{__( "Icon" )}</h2>
								<FontIconPicker
											icons={svg_icons}
											renderFunc= {renderSVG}
											theme="default"
											value={Icon}
											onChange={ ( value ) => setAttributes( { Icon: value } ) }
											isMulti={false}
											noSelectedPlaceholder= { __( "Select Icon" ) }
								/>
								<SelectControl
									label={ __( 'Icon Position' ) }
									value={ iconPosition }
									options={ [
										{value: 'left', label: __('Left')},
										{value: 'right', label: __('Right')},
										{value: 'top', label: __('Top')},
										{value: 'bottom', label: __('Bottom')},
									] }
									onChange={ (value) => setAttributes( { iconPosition: value } ) }
								/>
								<h2>{ __( 'Icon Spacing' ) }</h2>
								<RangeControl
									className={ "uagb-tabs__icon" }
									value={ iconSpacing }
									onChange={ ( value ) => setAttributes( { iconSpacing: value } ) }
									min={ 0 }
									max={ 50 }
									allowReset
								/>
								<h2>{ __( 'Icon Color' ) }</h2>
								<ColorPalette 
										value={ iconColor}
										onChange={ ( value ) => setAttributes( { iconColor: value } )}
										allowReset
								/>
								<h2>{ __( 'Icon Size' ) }</h2>
								<RangeControl
								className={ "uagb-tabs__icon" }
								value={ iconSize }
								onChange={ ( value ) => setAttributes( { iconSize: value } ) }
								min={ 0 }
								max={ 50 }
								allowReset
						/>
							</Fragment>
						}
						<h2>{ __( "Tab Title Margin (px)" ) }</h2>
						<RangeControl
								label={ UAGB_Block_Icons.left_margin }
								className={ "uagb-margin-control" }
								value={ tabTitleLeftMargin }
								onChange={ ( value ) => setAttributes( { tabTitleLeftMargin: value } ) }
								min={ 0 }
								max={ 50 }
								allowReset
						/>
						<RangeControl
								label={ UAGB_Block_Icons.right_margin }
								className={ "uagb-margin-control" }
								value={ tabTitleRightMargin }
								onChange={ ( value ) => setAttributes( { tabTitleRightMargin: value } ) }
								min={ 0 }
								max={ 50 }
								allowReset
						/>
						<RangeControl
								label={ UAGB_Block_Icons.top_margin }
								value={ tabTitleTopMargin }
								onChange={ ( value ) => setAttributes( { tabTitleTopMargin: value } ) }
								min={ 0 }
								max={ 50 }
								allowReset
						/>
						<RangeControl
								label={ UAGB_Block_Icons.bottom_margin }
								className={ "uagb-margin-control" }
								value={ tabTitleBottomMargin }
								onChange={ ( value ) => setAttributes( { tabTitleBottomMargin: value } ) }
								min={ 0 }
								max={ 50 }
								allowReset
						/>
						<h2>{ __( "Title Padding" ) }</h2>
						<RangeControl
								label={ UAGB_Block_Icons.vertical_spacing }
								value={ tabTitleVertPadding }
								onChange={ ( value ) => setAttributes( { tabTitleVertPadding: value } ) }
								min={ 0 }
								max={ 50 }
								className={ "uagb-margin-control" }
								allowReset
						/>
						<RangeControl
								label={ UAGB_Block_Icons.horizontal_spacing }
								value={ tabTitleHrPadding }
								onChange={ ( value ) => setAttributes( { tabTitleHrPadding: value } ) }
								min={ 0 }
								max={ 50 }
								className={ "uagb-margin-control" }
								allowReset
						/>
						<h2>{ __( 'Title Background Color' ) }</h2>
						<ColorPalette
								value={ headerBgColor}
								onChange={ ( value ) => setAttributes( { headerBgColor: value } )}
								allowReset
						/>
						<h2>{ __( 'Title Text Color' ) }</h2>
						<ColorPalette 
								value={ headerTextColor}
								onChange={ ( value ) => setAttributes( { headerTextColor: value } )}
								allowReset
						/>
						<h2>{ __( 'Active Tab Background Color' ) }</h2>
						<ColorPalette 
								value={ activeTabBgColor}
								onChange={ ( value ) => setAttributes( { activeTabBgColor: value } )}
								allowReset
						/>
						<h2>{ __( 'Active Tab Text Color' ) }</h2>
						<ColorPalette 
								value={ activeTabTextColor}
								onChange={ ( value ) => setAttributes( { activeTabTextColor: value } )}
								allowReset
						/>
						<TypographyControl
							label={ __( "Typography" ) }
							attributes = { attributes }
							setAttributes = { setAttributes }
							loadGoogleFonts = { { value: titleLoadGoogleFonts, label: 'titleLoadGoogleFonts' } }
							fontFamily = { { value: titleFontFamily, label: 'titleFontFamily' } }
							fontWeight = { { value: titleFontWeight, label: 'titleFontWeight' } }
							fontSubset = { { value: titleFontSubset, label: 'titleFontSubset' } }
							fontSizeType = { { value: titleFontSizeType, label: 'titleFontSizeType' } }
							fontSize = { { value: titleFontSize, label: 'titleFontSize' } }
							fontSizeMobile = { { value: titleFontSizeMobile, label: 'titleFontSizeMobile' } }
							fontSizeTablet= { { value: titleFontSizeTablet, label: 'titleFontSizeTablet' } }
							lineHeightType = { { value: titleLineHeightType, label: 'titleLineHeightType' } }
							lineHeight = { { value: titleLineHeight, label: 'titleLineHeight' } }
							lineHeightMobile = { { value: titleLineHeightMobile, label: 'titleLineHeightMobile' } }
							lineHeightTablet= { { value: titleLineHeightTablet, label: 'titleLineHeightTablet' } }
						/>
						</PanelBody>
						<PanelBody title={ __( 'Tabs Body Settings' ) }>
						<h2>{ __( 'Body Background Color' ) }</h2>
						<ColorPalette
							value={ bodyBgColor}
							onChange={ ( value ) => setAttributes( { bodyBgColor: value } )}
							allowReset
                        />  
						<h2>{ __( 'Body Text Color' ) }</h2>
						<ColorPalette
							value= {bodyTextColor}
							onChange={ ( value ) => setAttributes( { bodyTextColor: value } )}
							allowReset
                        />
						<h2>{ __( "Tab Body Margin (px)" ) }</h2>
							<RangeControl
								label={ UAGB_Block_Icons.left_margin }
								className={ "uagb-margin-control" }
								value={ tabBodyLeftMargin }
								onChange={ ( value ) => setAttributes( { tabBodyLeftMargin: value } ) }
								min={ 0 }
								max={ 50 }
								allowReset
							/>
							<RangeControl
								label={ UAGB_Block_Icons.right_margin }
								className={ "uagb-margin-control" }
								value={ tabBodyRightMargin }
								onChange={ ( value ) => setAttributes( { tabBodyRightMargin: value } ) }
								min={ 0 }
								max={ 50 }
								allowReset
							/>
							<RangeControl
								label={ UAGB_Block_Icons.top_margin }
								className={ "uagb-margin-control" }
								value={ tabBodyTopMargin }
								onChange={ ( value ) => setAttributes( { tabBodyTopMargin: value } ) }
								min={ 0 }
								max={ 50 }
								allowReset
							/>
							<RangeControl
								label={ UAGB_Block_Icons.bottom_margin }
								className={ "uagb-margin-control" }
								value={ tabBodyBottomMargin }
								onChange={ ( value ) => setAttributes( { tabBodyBottomMargin: value } ) }
								min={ 0 }
								max={ 50 }
								allowReset
							/>
							<h2>{ __( "Body Padding" ) }</h2>
							<RangeControl
								label={ UAGB_Block_Icons.vertical_spacing }
								value={ 
									tabBodyVertPadding }
								onChange={ ( value ) => setAttributes( { 
									tabBodyVertPadding: value } ) }
								min={ 0 }
								max={ 50 }
								className={ "uagb-margin-control" }
								allowReset
							/>
							<RangeControl
								label={ UAGB_Block_Icons.horizontal_spacing }
								value={ tabBodyHrPadding }
								onChange={ ( value ) => setAttributes( { tabBodyHrPadding: value } ) }
								min={ 0 }
								max={ 50 }
								className={ "uagb-margin-control" }
								allowReset
							/>
						</PanelBody>
                        <PanelBody title={ __( 'Border Settings' ) } initialOpen={ false }>
                            <SelectControl
                                label={ __( 'Border Style' ) }
                                value={ borderStyle }
                                options={ [
									{ value: "none", label: __( "None" ) },
									{ value: "solid", label: __( "Solid" ) },
									{ value: "dotted", label: __( "Dotted" ) },
									{ value: "dashed", label: __( "Dashed" ) },
									{ value: "double", label: __( "Double" ) },
									{ value: "groove", label: __( "Groove" ) },
									{ value: "inset", label: __( "Inset" ) },
									{ value: "outset", label: __( "Outset" ) },
									{ value: "ridge", label: __( "Ridge" ) },
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
						<PanelBody title={ __( 'Box Shadow Settings' ) } initialOpen={ false }>
							<BoxShadowControl
								setAttributes = { setAttributes }
								label = { __( "Box Shadow" ) }
								boxShadowColor = { { value: boxShadowColor, label: __( "Color" ) } }
								boxShadowHOffset = { { value: boxShadowHOffset, label: __( "Horizontal" ) } }
								boxShadowVOffset = { { value: boxShadowVOffset, label: __( "Vertical" ) } }
								boxShadowBlur = { { value: boxShadowBlur, label: __( "Blur" ) } }
								boxShadowSpread = { { value: boxShadowSpread, label: __( "Spread" ) } }
								boxShadowPosition = { { value: boxShadowPosition, label: __( "Position" ) } }
							/>
						</PanelBody>
                </InspectorControls>
                <div className={blockClass} data-tab-active={tabActiveFrontend}>
                    <ul className="uagb-tabs__panel">
                        {tabHeaders.map( ( header, index ) => (
                            <li key={ index } className={`uagb-tab ${tabActive === index ? 'uagb-tabs__active' : ''} `}
                            >
                                <a className={`uagb-tabs__icon-position-${iconPosition}`}
                                       onClick={ () => {
                                           this.props.updateActiveTab( index );
                                       } }
                                    >
										{(showIcon && Icon && (iconPosition === 'left' || iconPosition === 'top') &&
										<span className="uagb-tabs__icon">{ renderSVG(Icon) }</span>
										)}
										<RichText
                                            tagName="p"
                                            value={ header }
                                            onChange={ ( value ) => this.updateTabsTitle(value, index) }
                                            unstableOnSplit={ () => null }
                                            placeholder={ __( 'Title…' ) }
                                        />
										{(showIcon && Icon && ( iconPosition === 'right' || iconPosition === 'bottom' )&&
											<span className="uagb-tabs__icon">{ renderSVG(Icon) }</span>
										)}
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
						 <li className="uagb-tab uagb-tabs__add-tab">
							<Tooltip text={ __( 'Add tab' ) }>
								<span onClick={ () => this.addTab() }>
								<Dashicon icon="plus"/>
								</span>
							</Tooltip>
                        </li>
						</ul>
						<div className="uagb-tabs__body-wrap">
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
			resetTabOrder() {
				times( block.innerBlocks.length, n => {
					updateBlockAttributes( block.innerBlocks[ n ].clientId, {
						id: n,
					} );
				} );
			},
			updateActiveTab(tabActive) {
				updateBlockAttributes( block.clientId, {
					tabActive: tabActive,
				} );
				times( block.innerBlocks.length, n => {
					updateBlockAttributes( block.innerBlocks[ n ].clientId, {
						tabActive: tabActive,
					} );
				} );
				this.resetTabOrder();
			},
		};

	}),
)( UAGBTabsEdit )