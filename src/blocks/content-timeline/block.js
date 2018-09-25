/**
 * BLOCK: Content Timeline.
 */

import get from 'lodash/get';
import isUndefined from 'lodash/isUndefined';
import pickBy from 'lodash/pickBy';
import moment from 'moment';
import classnames from 'classnames';
//import { stringify } from 'querystringify';

//  Import CSS.
import './style.scss'
import './editor.scss';

const { Component, Fragment } = wp.element;

const { __ } = wp.i18n;

const { decodeEntities } = wp.htmlEntities;

// Import registerBlockType() from wp.blocks
const {
	registerBlockType,
} = wp.blocks;

const {
	AlignmentToolbar,
	BlockControls,
	ColorPalette,
	InspectorControls,
	RichText,
    BlockAlignmentToolbar,
} = wp.editor

const {
    PanelBody,
    PanelColor,
    SelectControl,
    Placeholder,
    QueryControls,
    RangeControl,
    Spinner,
    TextControl,
    ToggleControl,
    Toolbar,
    Dashicon,
} = wp.components;


class UAGBcontentTimeline extends Component {
	render() {

		// Setup the attributes
		const {
			isSelected,
			className,
			setAttributes,
			attributes: { 
				headingTitle,
				headingDesc,
				headingAlign,
				separatorHeight,
				headSpace,
				separatorSpace,
				tm_content,
				headingColor,
				subHeadingColor,
				backgroundColor,
				separatorColor,
				separatorFillColor,
				separatorBg,
				separatorBorder,
				borderHover,
				headingTag,
				headFontSize,
				timelineItem,
				timelinAlignment,
				arrowlinAlignment,
				subHeadFontSize,
				verticalSpace,
				horizontalSpace,
				separatorwidth,
				borderwidth,
				connectorBgsize,
				subHeadSpace,
				dateBottomspace,
				align,
				order,
				orderBy,
				width,
				icon,
				iconColor,
				authorColor,
				dateColor,
				dateFontsize,
				authorFontsize,
				iconSize,
				tm_block_id,
				borderRadius,
				bgPadding,
				tm_client_id,
				iconHover,
				iconBgHover
			},
		} = this.props;

		const MyDashicon = [
            { value: 'admin-home', label: __( 'admin-home' ) },
            { value: 'products', label: __( 'products' ) },
            { value: 'calendar', label: __( 'calendar' ) },
            { value: 'admin-appearance', label: __( 'admin-appearance' ) },
            { value: 'admin-collapse', label: __( 'admin-collapse' ) },
            { value: 'admin-comments', label: __( 'admin-comments' ) },
            { value: 'admin-customizer', label: __( 'admin-customizer' ) },
            { value: 'admin-generic', label: __( 'admin-generic' ) },
            { value: 'admin-links', label: __( 'admin-links' ) },
            { value: 'admin-media', label: __( 'admin-media' ) },
            { value: 'admin-multisite', label: __( 'admin-multisite' ) },
            { value: 'admin-network', label: __( 'admin-network' ) },
            { value: 'admin-page', label: __( 'admin-page' ) },
            { value: 'admin-plugins', label: __( 'admin-plugins' ) },
            { value: 'admin-post', label: __( 'admin-post' ) },
            { value: 'admin-settings', label: __( 'admin-settings' ) },
            { value: 'admin-site-alt', label: __( 'admin-site-alt' ) },
            { value: 'admin-site-alt2', label: __( 'admin-site-alt2' ) },
            { value: 'admin-site', label: __( 'admin-site' ) },
            { value: 'admin-tools', label: __( 'admin-tools' ) },
            { value: 'admin-users', label: __( 'admin-users' ) },
            { value: 'album', label: __( 'album' ) },
            { value: 'analytics', label: __( 'analytics') },
            { value: 'archive', label: __( 'archive' ) },
            { value: 'arrow-down-alt', label: __( 'arrow-down-alt' ) },
            { value: 'arrow-down-alt2', label: __( 'arrow-down-alt2' ) },
            { value: 'arrow-down', label: __( 'arrow-down' ) },
            { value: 'arrow-left-alt', label: __( 'arrow-left-alt' ) },
            { value: 'arrow-left-alt2', label: __( 'arrow-left-alt2' ) },
            { value: 'arrow-left', label: __( 'arrow-left' ) },
            { value: 'arrow-right-alt', label: __( 'arrow-right-alt' ) },
            { value: 'arrow-right-alt2', label: __( 'arrow-right-alt2' ) },
            { value: 'arrow-right', label: __( 'arrow-right' ) },
            { value: 'arrow-up-alt', label: __( 'arrow-up-alt' ) }            
        ];

		return [			

			isSelected && (
				<InspectorControls>
				<PanelBody 
                    title={ __( 'Layout' ) }
                    initialOpen={ false }
                >          
                    <SelectControl
                        label={ __( 'Orientation' ) }
                        value={ timelinAlignment }
                        onChange={ ( value ) => setAttributes( { timelinAlignment: value } ) }
                        options={ [
                            { value: 'left', label: __( 'Left' ) },
                            { value: 'right', label: __( 'Right' ) },
                            { value: 'center', label: __( 'Center' ) },
                        ] }
                    />
                    <SelectControl
                        label={ __( 'Arrow Alignment' ) }
                        value={ arrowlinAlignment }
                        onChange={ ( value ) => setAttributes( { arrowlinAlignment: value } ) }
                        options={ [
                            { value: 'top', label: __( 'Top' ) },
                            { value: 'bottom', label: __( 'Bottom' ) },
                            { value: 'center', label: __( 'Center' ) },
                        ] }
                    />                    
                </PanelBody>
                <PanelBody 
                    title={ __( 'Spacing' ) }
                    initialOpen={ false }
                    >
                    <RangeControl
                        label={ __( 'Horizontal Space' ) }
                        value={ horizontalSpace }
                        onChange={ ( value ) => setAttributes( { horizontalSpace: value } ) }
                        min={ 1 }
                        max={ 50 }
                        beforeIcon="editor-textcolor"
                        allowReset
                    />
                    <RangeControl
                        label={ __( 'Vertical Space' ) }
                        value={ verticalSpace }
                        onChange={ ( value ) => setAttributes( { verticalSpace: value } ) }
                        min={ 1 }
                        max={ 100 }
                        beforeIcon="editor-textcolor"
                        allowReset
                    />                   
                    <RangeControl
                        label={ __( 'Heading Bottom Spacing' ) }
                        value={ headSpace }
                        onChange={ ( value ) => setAttributes( { headSpace: value } ) }
                        min={ 0 }
                        max={ 50 }
                        beforeIcon="editor-textcolor"
                        allowReset
                    />                    
                   <RangeControl
                        label={ __( 'Description Bottom Spacing' ) }
                        value={ subHeadSpace }
                        onChange={ ( value ) => setAttributes( { subHeadSpace: value } ) }
                        min={ 0 }
                        max={ 50 }
                        beforeIcon="editor-textcolor"
                        allowReset
                    />                    
                </PanelBody>
				<PanelBody 
                    title={ __( 'Timeline Item' ) }
                    initialOpen={ false }
                    >
                    <SelectControl
                        label={ __( 'Heading Tag' ) }
                        value={ headingTag }
                        onChange={ ( value ) => setAttributes( { headingTag: value } ) }
                        options={ [
                            { value: 'h1', label: __( 'H1' ) },
                            { value: 'h2', label: __( 'H2' ) },
                            { value: 'h3', label: __( 'H3' ) },
                            { value: 'h4', label: __( 'H4' ) },
                            { value: 'h5', label: __( 'H5' ) },
                            { value: 'h6', label: __( 'H6' ) },
                        ] }
                    />
                    <PanelColor
                        title={ __( 'Heading Color' ) }
                        colorValue={ headingColor }
                        initialOpen={ false }
                    >
                        <ColorPalette
                            value={ headingColor }
                            onChange={ ( colorValue ) => setAttributes( { headingColor: colorValue } ) }
                            allowReset
                        />
                    </PanelColor>

                    <PanelColor
                        title={ __( 'Description Color' ) }
                        colorValue={ subHeadingColor }
                        initialOpen={ false }
                    >
                        <ColorPalette
                            value={ subHeadingColor }
                            onChange={ ( colorValue ) => setAttributes( { subHeadingColor: colorValue } ) }
                            allowReset
                        />
                    </PanelColor>
                    

                    <PanelColor
                        title={ __( 'Background Color' ) }
                        colorValue={ backgroundColor }
                        initialOpen={ false }
                    >
                        <ColorPalette
                            value={ subHeadingColor }
                            onChange={ ( colorValue ) => setAttributes( { backgroundColor: colorValue } ) }
                            allowReset
                        />
                    </PanelColor>
                    <RangeControl
                        label={ __( 'Rounded Corners' ) }
                        value={ borderRadius }
                        onChange={ ( value ) => setAttributes( { borderRadius: value } ) }
                        min={ 0 }
                        max={ 50 }
                        beforeIcon="editor-textcolor"
                        allowReset
                    />
                    <RangeControl
                        label={ __( 'Padding' ) }
                        value={ bgPadding }
                        onChange={ ( value ) => setAttributes( { bgPadding: value } ) }
                        min={ 1 }
                        max={ 50 }
                        beforeIcon="editor-textcolor"
                        allowReset
                    />
                    <RangeControl
                        label={ __( 'Heading Font Size' ) }
                        value={ headFontSize }
                        onChange={ ( value ) => setAttributes( { headFontSize: value } ) }
                        min={ 10 }
                        max={ 200 }
                        beforeIcon="editor-textcolor"
                        allowReset
                    />                    
                    <RangeControl
                        label={ __( 'Description Font Size' ) }
                        value={ subHeadFontSize }
                        onChange={ ( value ) => setAttributes( { subHeadFontSize: value } ) }
                        min={ 10 }
                        max={ 200 }
                        beforeIcon="editor-textcolor"
                        allowReset
                    />                   
                </PanelBody> 
                <PanelBody 
                    title={ __( 'Connector' ) }
                    initialOpen={ false }
                    >
                    <SelectControl
                        label={ __( 'Featured Icon' ) }
                        value={ icon }
                        onChange={ ( value ) => setAttributes( { icon: value } ) }
                        options={ MyDashicon }
                    />
                    <RangeControl
                        label={ __( 'Icon Size' ) }
                        value={ iconSize }
                        onChange={ ( value ) => setAttributes( { iconSize: value } ) }
                        min={ 0 }
                        max={ 30 }
                        beforeIcon="editor-textcolor"
                        allowReset
                    />   
                    <PanelColor
                        title={ __( 'Icon Color' ) }
                        colorValue={ iconColor }
                        initialOpen={ false }
                    >
                        <ColorPalette
                            value={ iconColor }
                            onChange={ ( colorValue ) => setAttributes( { iconColor: colorValue } ) }
                            allowReset
                        />
                    </PanelColor>
                    <PanelColor
                        title={ __( 'Icon Hover Color' ) }
                        colorValue={ iconHover }
                        initialOpen={ false }
                    >
                        <ColorPalette
                            value={ iconHover }
                            onChange={ ( colorValue ) => setAttributes( { iconHover: colorValue } ) }
                            allowReset
                        />
                    </PanelColor>
                    
                    <PanelColor
                        title={ __( 'Line Color' ) }
                        colorValue={ separatorColor }
                        initialOpen={ false }
                    >
                        <ColorPalette
                            value={ separatorColor }
                            onChange={ ( colorValue ) => setAttributes( { separatorColor: colorValue } ) }
                            allowReset
                        />
                    </PanelColor>

                    <PanelColor
                        title={ __( 'Line Fill Color' ) }
                        colorValue={ separatorFillColor }
                        initialOpen={ false }
                    >
                        <ColorPalette
                            value={ separatorFillColor }
                            onChange={ ( colorValue ) => setAttributes( { separatorFillColor: colorValue } ) }
                            allowReset
                        />
                    </PanelColor>
                    
                    <PanelColor
                        title={ __( 'Icon Background Color' ) }
                        colorValue={ separatorBg }
                        initialOpen={ false }
                    >
                        <ColorPalette
                            value={ separatorBg }
                            onChange={ ( colorValue ) => setAttributes( { separatorBg: colorValue } ) }
                            allowReset
                        />
                    </PanelColor>
                    <PanelColor
                        title={ __( 'Icon Background Hover Color' ) }
                        colorValue={ iconBgHover }
                        initialOpen={ false }
                    >
                        <ColorPalette
                            value={ iconBgHover }
                            onChange={ ( colorValue ) => setAttributes( { iconBgHover: colorValue } ) }
                            allowReset
                        />
                    </PanelColor>
                    <PanelColor
                        title={ __( 'Border Color' ) }
                        colorValue={ separatorBorder }
                        initialOpen={ false }
                    >
                    <ColorPalette
                            value={ separatorBorder }
                            onChange={ ( colorValue ) => setAttributes( { separatorBorder: colorValue } ) }
                            allowReset
                        />
                    </PanelColor>
                    <PanelColor
                        title={ __( 'Border Hover Color' ) }
                        colorValue={ separatorBorder }
                        initialOpen={ false }
                    >
                    <ColorPalette
                            value={ borderHover }
                            onChange={ ( colorValue ) => setAttributes( { borderHover: colorValue } ) }
                            allowReset
                        />
                    </PanelColor>
                    <RangeControl
                        label={ __( 'Border Width' ) }
                        value={ borderwidth }
                        onChange={ ( value ) => setAttributes( { borderwidth: value } ) }
                        min={ 1 }
                        max={ 10 }
                        beforeIcon="editor-textcolor"
                        allowReset
                    />
                    <RangeControl
                        label={ __( 'Connector Width' ) }
                        value={ separatorwidth }
                        onChange={ ( value ) => setAttributes( { separatorwidth: value } ) }
                        min={ 1 }
                        max={ 10 }
                        beforeIcon="editor-textcolor"
                        allowReset
                    />
                    <RangeControl
                        label={ __( 'Connector Background Size' ) }
                        value={ connectorBgsize }
                        onChange={ ( value ) => setAttributes( { connectorBgsize: value } ) }
                        min={ 25 }
                        max={ 90 }
                        beforeIcon="editor-textcolor"
                        allowReset
                    />                    
                </PanelBody>
                </InspectorControls>
            ),

			<div className={ className }>
				<RichText
					tagName={ headingTag }
					placeholder={ __( 'Write a Heading' ) }
					value={ headingTitle }
					className='uagb-heading-text'
					onChange={ ( value ) => setAttributes( { headingTitle: value } ) }
					style={{ 
						textAlign: headingAlign,
						fontSize: headFontSize + 'px',
						color: headingColor,
						marginBottom: headSpace + 'px',
					}}
				/>
				<div
					className="uagb-separator-wrap"
					style={{ textAlign: headingAlign }}
				><div className="uagb-separator" style={{ borderTopWidth: separatorHeight + 'px', width: separatorwidth + '%', borderColor: separatorColor, marginBottom: separatorSpace + 'px', }}></div></div>
				<RichText
					tagName="p"
					placeholder={ __( 'Write a Description' ) }
					value={ headingDesc }
					className='uagb-desc-text'
					onChange={ ( value ) => setAttributes( { headingDesc: value } ) }
					style={{
						textAlign: headingAlign,
						fontSize: subHeadFontSize + 'px',
						color: subHeadingColor,
						marginBottom: subHeadSpace + 'px',
					}}
				/>
			</div>
		];
	}
}

/**
 * Register: as Gutenberg Block.
 *
 * Registers a new block provided a unique name and an object defining its
 * behavior.
 *
 * @link https://wordpress.org/gutenberg/handbook/block-api/
 * @param  {string}   name     Block name.
 * @param  {Object}   settings Block settings.
 * @return {?WPBlock}          The block, if it has been successfully
 *                             registered; otherwise `undefined`.
 */
registerBlockType( 'uagb/content-timeline', {

	// Block name. Block names must be string that contains a namespace prefix. Example: my-plugin/my-custom-block.
	title: __( 'Content Timeline - UAGB' ), // Block title.
	description: __( 'Add Content Timeline block.' ), // Block description.
	icon: 'grid-view', // Block icon from Dashicons → https://developer.wordpress.org/resource/dashicons/.
	keywords: [
		__( 'timeline' ),
		__( 'uagb' ),
	],
	category: 'formatting',

	attributes: {
		headingTitle: {
			type: 'string',
		},
		headingDesc: {
			type: 'string',
		},
		align : {
			type : 'string',
			default : 'center',
		},			
		headingColor : {
			type : 'string',
			default : '#333',
		},
		subHeadingColor : {
			type : 'string',
			default : '#333',
		},
		separatorBg : {
			type : 'string',
			default : '#eee',
		},
		backgroundColor : {
			type : 'string',
			default : '#eee',
		},
		separatorColor : {
			type : 'string',
			default : '#eee',
		},
        separatorFillColor : {
            type : 'string',
            default : '#5cb85c',
        },
		separatorBorder : {
			type : 'string',
			default : '#eee',
		},
		borderHover : {
			type : 'string',
			default : '#5cb85c',
		},
		headingTag : {
			type : 'string',
			default : 'h3',
		},
		horizontalSpace : {
			type : 'number',
			default : 10,
		},
		verticalSpace : {
			type : 'number',
			default : 15,
		},
		headFontSize : {
			type : 'number',
			default : 15,
		},			
		timelinAlignment : {
			type : 'string',
			default : 'center',
		},
		arrowlinAlignment : {
			type : 'string',
			default : 'center',
		},
		subHeadFontSize : {
			type : 'number',
			default : 12,
		},
		headSpace : {
			type : 'number',
			default : 5,
		},
		separatorwidth : {
			type : 'number',
			default : 3,
		},
		borderwidth : {
			type : 'number',
			default : 1,
		},
		iconColor : {
			type : 'string',
			default : '#333',
		},
		iconHover : {
			type : 'string',
			default : '#fff',
		},
		iconBgHover : {
			type : 'string',
			default : '#5cb85c',
		},
		authorColor : {
			type : 'string',
			default : '#333',
		},
		authorFontsize : {
			type : 'number',
			default : 12,
		},
		dateColor : {
			type : 'string',
			default : '#333',
		},
		dateFontsize : {
			type : 'number',
			default : 12,
		},
		connectorBgsize : {
			type : 'number',
			default : 35,
		},
		subHeadSpace : {
			type : 'number',
			default : 5,
		},
		authorSpace : {
			type : 'number',
			default : 5,
		},
		dateBottomspace : {
			type : 'number',
			default : 5,
		},
		headFontSize : {
			type : 'number',
			default : 15,
		},	
		tm_block_id  : {
			type : 'string',
			default : '0',
		},
        tm_client_id  : {
            type : 'string',
            default : 'not_set',
        },
		icon : {
			type : 'string',
			default : 'calendar'
		},
		borderRadius : {
			type : 'number',
			default : 4,
		},
		bgPadding : {
			type : 'number',
			default : 20,
		},
		iconSize : {
			type : 'number',
			default : 15,
		},
	},
	/**
	 * The edit function describes the structure of your block in the context of the editor.
	 * This represents what the editor will render when the block is used.
	 *
	 * The "edit" property must be a valid function.
	 *
	 * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/
	 */
	edit: UAGBcontentTimeline,

	/*function( props ) {

		console.log( 'Edit props' );
		console.log( props );

		const { headingTitle } = props.attributes;

		return (
			<div className={ props.className }>
				<p>Ultimate Addons For Gutenberg!</p>
			</div>
		);
	},*/

	/**
	 * The save function defines the way in which the different attributes should be combined
	 * into the final markup, which is then serialized by Gutenberg into post_content.
	 *
	 * The "save" property must be specified and must be a valid function.
	 *
	 * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/
	 */
	save: function( props ) {
		
		console.log( 'Save props' );
		console.log( props );

		const {
			headingTitle,
			headingDesc,
			tm_content,
			headingColor,
			subHeadingColor,
			backgroundColor,
			separatorColor,
			separatorFillColor,
			separatorBg,
			separatorBorder,
			borderHover,
			headingTag,
			headFontSize,
			timelineItem,
			timelinAlignment,
			arrowlinAlignment,
			subHeadFontSize,
			verticalSpace,
			horizontalSpace,
			headSpace,
			separatorwidth,
			borderwidth,
			connectorBgsize,
			subHeadSpace,
			dateBottomspace,
			align,
			order,
			orderBy,
			width,
			icon,
			iconColor,
			authorColor,
			dateColor,
			dateFontsize,
			authorFontsize,
			iconSize,
			tm_block_id,
			borderRadius,
			bgPadding,
			tm_client_id,
			iconHover,
			iconBgHover
		} = props.attributes;

		return null; 
	}
} );
