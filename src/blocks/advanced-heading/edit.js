/**
 * BLOCK: Advanced Heading
 */

// Import block dependencies and components.
import classnames from "classnames"
import map from "lodash/map"
import UAGB_Block_Icons from "../../../dist/blocks/uagb-controls/block-icons"
import styling from "./styling"

const { __ } = wp.i18n

const {
	registerBlockType,
	createBlock
} = wp.blocks

const {
	AlignmentToolbar,
	BlockControls,
	InspectorControls,
	RichText,
	ColorPalette
} = wp.editor

const {
	PanelBody,
	SelectControl,
	RangeControl,
	ButtonGroup,
	Button,
	TabPanel,
	Dashicon
} = wp.components

const { Component, Fragment } = wp.element

export default class UAGBAdvancedHeading extends Component {

	constructor() {
		super( ...arguments )

		this.splitBlock = this.splitBlock.bind( this )
	}

	componentDidMount() {

		// Assigning block_id in the attribute.
		this.props.setAttributes( { block_id: this.props.clientId } )

		// Pushing Style tag for this block css.
		const $style = document.createElement( "style" )
		$style.setAttribute( "id", "uagb-adv-heading-style-" + this.props.clientId )
		document.head.appendChild( $style )
	}

	splitBlock( before, after, ...blocks ) {
		const {
			attributes,
			insertBlocksAfter,
			setAttributes,
			onReplace,
		} = this.props

		if ( after ) {
			// Append "After" content as a new paragraph block to the end of
			// any other blocks being inserted after the current paragraph.
			blocks.push( createBlock( "core/paragraph", { content: after } ) )
		}

		if ( blocks.length && insertBlocksAfter ) {
			insertBlocksAfter( blocks )
		}

		const { content } = attributes
		if ( ! before ) {
			// If before content is omitted, treat as intent to delete block.
			onReplace( [] )
		} else if ( content !== before ) {
			// Only update content if it has in-fact changed. In case that user
			// has created a new paragraph at end of an existing one, the value
			// of before will be strictly equal to the current content.
			setAttributes( { content: before } )
		}
	}

	render() {

		// Setup the attributes
		const {
			isSelected,
			className,
			setAttributes,
			insertBlocksAfter,
			mergeBlocks,
			onReplace,
			attributes: {
				headingTitle,
				headingDesc,
				headingAlign,
				headingColor,
				subHeadingColor,
				separatorColor,
				headingTag,
				headFontSize,
				headFontSizeType,
				headFontSizeMobile,
				headFontSizeTablet,
				subHeadFontSize,
				subHeadFontSizeType,
				subHeadFontSizeMobile,
				subHeadFontSizeTablet,
				separatorWidth,
				separatorWidthType,
				seperatorStyle,
				separatorHeight,
				headSpace,
				separatorSpace
			},
		} = this.props

		var element = document.getElementById( "uagb-adv-heading-style-" + this.props.clientId )

		if( null != element && "undefined" != typeof element ) {
			element.innerHTML = styling( this.props )
		}

		const sizeTypes = [
			{ key: "px", name: __( "px" ) },
			{ key: "em", name: __( "em" ) },
		]

		const headsizeTypesControls = (
			<ButtonGroup className="uagb-size-type-field" aria-label={ __( "Size Type" ) }>
				{ map( sizeTypes, ( { name, key } ) => (
					<Button
						key={ key }
						className="uagb-size-btn"
						isSmall
						isPrimary={ headFontSizeType === key }
						aria-pressed={ headFontSizeType === key }
						onClick={ () => setAttributes( { headFontSizeType: key } ) }
					>
						{ name }
					</Button>
				) ) }
			</ButtonGroup>
		)

		const subheadsizeTypesControls = (
			<ButtonGroup className="uagb-size-type-field" aria-label={ __( "Size Type" ) }>
				{ map( sizeTypes, ( { name, key } ) => (
					<Button
						key={ key }
						className="uagb-size-btn"
						isSmall
						isPrimary={ subHeadFontSizeType === key }
						aria-pressed={ subHeadFontSizeType === key }
						onClick={ () => setAttributes( { subHeadFontSizeType: key } ) }
					>
						{ name }
					</Button>
				) ) }
			</ButtonGroup>
		)

		return (
			<Fragment>
				<BlockControls key='controls'>
					<AlignmentToolbar
						value={ headingAlign }
						onChange={ ( value ) => setAttributes( { headingAlign: value } ) }
					/>
				</BlockControls>
				<InspectorControls>
					<PanelBody title={ __( "Advanced Heading" ) }>
						<h2>{ __( "Heading" ) }</h2>
						<SelectControl
							label={ __( "Heading Tag" ) }
							value={ headingTag }
							onChange={ ( value ) => setAttributes( { headingTag: value } ) }
							options={ [
								{ value: "h1", label: __( "H1" ) },
								{ value: "h2", label: __( "H2" ) },
								{ value: "h3", label: __( "H3" ) },
								{ value: "h4", label: __( "H4" ) },
								{ value: "h5", label: __( "H5" ) },
								{ value: "h6", label: __( "H6" ) },
							] }
						/>
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
												{headsizeTypesControls}
												<RangeControl
													label={ __( "Font Size" ) }
													value={ headFontSizeMobile }
													onChange={ ( value ) => setAttributes( { headFontSizeMobile: value } ) }
													min={ 10 }
													max={ 100 }
													beforeIcon="editor-textcolor"
													allowReset
													initialPosition={30}
												/>
											</Fragment>
										)
									} else if ( "tablet" === tab.name ) {
										tabout = (
											<Fragment>
												{headsizeTypesControls}
												<RangeControl
													label={ __( "Font Size" ) }
													value={ headFontSizeTablet }
													onChange={ ( value ) => setAttributes( { headFontSizeTablet: value } ) }
													min={ 10 }
													max={ 100 }
													beforeIcon="editor-textcolor"
													allowReset
													initialPosition={30}
												/>
											</Fragment>
										)
									} else {
										tabout = (
											<Fragment>
												{headsizeTypesControls}
												<RangeControl
													label={ __( "Font Size" ) }
													value={ headFontSize }
													onChange={ ( value ) => setAttributes( { headFontSize: value } ) }
													min={ 10 }
													max={ 100 }
													beforeIcon="editor-textcolor"
													allowReset
													initialPosition={30}
												/>
											</Fragment>
										)
									}

									return <div>{ tabout }</div>
								}
							}
						</TabPanel>
						<p className="uagb-setting-label">{ __( "Heading Color" ) }<span className="components-base-control__label"><span className="component-color-indicator" style={{ backgroundColor: headingColor }} ></span></span></p>
						<ColorPalette
							value={ headingColor }
							onChange={ ( value ) => setAttributes( { headingColor: value } ) }
							allowReset
						/>
						<hr className="uagb-editor__separator" />
						<h2>{ __( "Sub-Heading" ) }</h2>
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
												{subheadsizeTypesControls}
												<RangeControl
													label={ __( "Font Size" ) }
													value={ subHeadFontSizeMobile }
													onChange={ ( value ) => setAttributes( { subHeadFontSizeMobile: value } ) }
													min={ 10 }
													max={ 100 }
													beforeIcon="editor-textcolor"
													allowReset
													initialPosition={30}
												/>
											</Fragment>
										)
									} else if ( "tablet" === tab.name ) {
										tabout = (
											<Fragment>
												{subheadsizeTypesControls}
												<RangeControl
													label={ __( "Font Size" ) }
													value={ subHeadFontSizeTablet }
													onChange={ ( value ) => setAttributes( { subHeadFontSizeTablet: value } ) }
													min={ 10 }
													max={ 100 }
													beforeIcon="editor-textcolor"
													allowReset
													initialPosition={30}
												/>
											</Fragment>
										)
									} else {
										tabout = (
											<Fragment>
												{subheadsizeTypesControls}
												<RangeControl
													label={ __( "Font Size" ) }
													value={ subHeadFontSize }
													onChange={ ( value ) => setAttributes( { subHeadFontSize: value } ) }
													min={ 10 }
													max={ 100 }
													beforeIcon="editor-textcolor"
													allowReset
													initialPosition={30}
												/>
											</Fragment>
										)
									}

									return <div>{ tabout }</div>
								}
							}
						</TabPanel>
						<p className="uagb-setting-label">{ __( "Sub Heading Color" ) }<span className="components-base-control__label"><span className="component-color-indicator" style={{ backgroundColor: subHeadingColor }} ></span></span></p>
						<ColorPalette
							value={ subHeadingColor }
							onChange={ ( value ) => setAttributes( { subHeadingColor: value } ) }
							allowReset
						/>
					</PanelBody>
					<PanelBody title={ __( "Separator" ) } initialOpen={ false }>
						<SelectControl
							label={ __( "Style" ) }
							value={ seperatorStyle }
							onChange={ ( value ) => setAttributes( { seperatorStyle: value } ) }
							options={ [
								{ value: "none", label: __( "None" ) },
								{ value: "solid", label: __( "Solid" ) },
								{ value: "double", label: __( "Double" ) },
								{ value: "dashed", label: __( "Dashed" ) },
								{ value: "dotted", label: __( "Dotted" ) },
							] }
						/>
						{ seperatorStyle !== "none" && <Fragment>
							<RangeControl
								label={ __( "Thickness (px)" ) }
								value={ separatorHeight }
								onChange={ ( value ) => setAttributes( { separatorHeight: value } ) }
								min={ 0 }
								max={ 20 }
								beforeIcon=""
								allowReset
								initialPosition={3}
							/>
							<ButtonGroup className="uagb-size-type-field" aria-label={ __( "Size Type" ) }>
								<Button key={ "px" } className="uagb-size-btn" isSmall isPrimary={ separatorWidthType === "px" } aria-pressed={ separatorWidthType === "px" } onClick={ () => setAttributes( { separatorWidthType: "px" } ) }>{ "px" }</Button>
								<Button key={ "%" } className="uagb-size-btn" isSmall isPrimary={ separatorWidthType === "%" } aria-pressed={ separatorWidthType === "%" } onClick={ () => setAttributes( { separatorWidthType: "%" } ) }>{ "%" }</Button>
							</ButtonGroup>
							<RangeControl
								label={ __( "Width" ) }
								value={ separatorWidth }
								onChange={ ( value ) => setAttributes( { separatorWidth: value } ) }
								min={ 0 }
								max={ ( "%" == separatorWidthType ) ? 100 : 500 }
								beforeIcon=""
								allowReset
								initialPosition={20}
							/>
							{ seperatorStyle !== "none" && <Fragment>
								<p className="uagb-setting-label">{ __( "Separator Color" ) }<span className="components-base-control__label"><span className="component-color-indicator" style={{ backgroundColor: separatorColor }} ></span></span></p>
								<ColorPalette
									value={ separatorColor }
									onChange={ ( colorValue ) => setAttributes( { separatorColor: colorValue } ) }
									allowReset
								/>
							</Fragment>
							}
						</Fragment>
						}
					</PanelBody>
					<PanelBody title={ __( "Spacing" ) } initialOpen={ false }>
						<RangeControl
							label={ __( "Heading Bottom Spacing (px)" ) }
							value={ headSpace }
							onChange={ ( value ) => setAttributes( { headSpace: value } ) }
							min={ 0 }
							max={ 50 }
							beforeIcon=""
							allowReset
							initialPosition={0}
						/>
						{ seperatorStyle !== "none" && <RangeControl
							label={ __( "Separator Bottom Spacing (px)" ) }
							value={ separatorSpace }
							onChange={ ( value ) => setAttributes( { separatorSpace: value } ) }
							min={ 0 }
							max={ 50 }
							beforeIcon=""
							allowReset
							initialPosition={0}
						/>
						}
					</PanelBody>
				</InspectorControls>
				<div className={ className } id={ `uagb-adv-heading-${this.props.clientId}` }>
					<RichText
						tagName={ headingTag }
						placeholder={ __( "Write a Heading" ) }
						value={ headingTitle }
						className='uagb-heading-text'
						multiline={ false }
						onChange={ ( value ) => {
							setAttributes( { headingTitle: value } ) }
						}
						onMerge={ mergeBlocks }
						unstableOnSplit={
							insertBlocksAfter ?
								( before, after, ...blocks ) => {
									setAttributes( { content: before } )
									insertBlocksAfter( [
										...blocks,
										createBlock( "core/paragraph", { content: after } ),
									] )
								} :
								undefined
						}
						onRemove={ () => onReplace( [] ) }
					/>
					{ seperatorStyle !== "none" && <div className="uagb-separator-wrap" ><div className="uagb-separator"></div></div> }
					<RichText
						tagName="p"
						placeholder={ __( "Write a Description" ) }
						value={ headingDesc }
						className='uagb-desc-text'
						onChange={ ( value ) => setAttributes( { headingDesc: value } ) }
						onMerge={ mergeBlocks }
						unstableOnSplit={ this.splitBlock }
						onRemove={ () => onReplace( [] ) }
					/>
				</div>
			</Fragment>
		)
	}
}
