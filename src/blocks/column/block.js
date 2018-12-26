/**
 * BLOCK: UAGB Column
 *
 * Registering a basic block with Gutenberg.
 */
/**
 * Internal block libraries
 */

import UAGB_Block_Icons from "../../../dist/blocks/uagb-controls/block-icons"
const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const {
	InnerBlocks,
	ColorPalette,
	InspectorControls,
} = wp.editor;
const {
	TabPanel,
	Dashicon,
	PanelBody,
	RangeControl,
} = wp.components;

/**
 * Register: a Gutenberg Block.
 *
 * @link https://wordpress.org/gutenberg/handbook/block-api/
 * @param  {string}   name     Block name.
 * @param  {Object}   settings Block settings.
 * @return {?WPBlock}          The block, if it has been successfully
 *                             registered; otherwise `undefined`.
 */
registerBlockType( 'uagb/column', {
	title: __( 'Column' ),
	icon: UAGB_Block_Icons.section,
	category: uagb_blocks_info.category,
	parent: [ 'uagb/section' ],
	attributes: {
		id: {
			type: 'number',
			default: 1,
		},
		topPadding: {
			type: 'number',
			default: '',
		},
		bottomPadding: {
			type: 'number',
			default: '',
		},
		leftPadding: {
			type: 'number',
			default: '',
		},
		rightPadding: {
			type: 'number',
			default: '',
		},
		topMargin: {
			type: 'number',
			default: '',
		},
		bottomMargin: {
			type: 'number',
			default: '',
		},
	},
	edit: props => {
		const { attributes: { id, topPadding, bottomPadding, leftPadding, rightPadding, topMargin, bottomMargin }, setAttributes } = props;

		const deskControls = (
			<PanelBody
				title={ __( 'Padding/Margin' ) }
				initialOpen={ true }
			>
				<h2>{ __( 'Padding (px)' ) }</h2>
				<RangeControl
					value={ topPadding }
					onChange={ ( value ) => {
						setAttributes( {
							topPadding: value,
						} );
					} }
					min={ 0 }
					max={ 500 }
				/>
				<RangeControl
					value={ rightPadding }
					onChange={ ( value ) => {
						setAttributes( {
							rightPadding: value,
						} );
					} }
					min={ 0 }
					max={ 500 }
				/>
				<RangeControl
					value={ bottomPadding }
					onChange={ ( value ) => {
						setAttributes( {
							bottomPadding: value,
						} );
					} }
					min={ 0 }
					max={ 500 }
				/>
				<RangeControl
					value={ leftPadding }
					onChange={ ( value ) => {
						setAttributes( {
							leftPadding: value,
						} );
					} }
					min={ 0 }
					max={ 500 }
				/>
				<h2>{ __( 'Margin (px)' ) }</h2>
				<RangeControl
					value={ topMargin }
					onChange={ ( value ) => {
						setAttributes( {
							topMargin: value,
						} );
					} }
					min={ -200 }
					max={ 200 }
				/>
				<RangeControl
					value={ bottomMargin }
					onChange={ ( value ) => {
						setAttributes( {
							bottomMargin: value,
						} );
					} }
					min={ -200 }
					max={ 200 }
				/>
			</PanelBody>
		);
		return (
			<div className={ `uagb-column inner-column-${ id }` } >
				<InspectorControls>
					{ deskControls }
				</InspectorControls>
				<div className="kadence-inner-column-inner" style={ {
					paddingLeft: leftPadding + 'px',
					paddingRight: rightPadding + 'px',
					paddingTop: topPadding + 'px',
					paddingBottom: bottomPadding + 'px'
				} } >
					<InnerBlocks templateLock={ false } />
				</div>
			</div>
		);
	},

	save( { attributes } ) {
		const { id } = attributes;
		return (
			<div className={ `inner-column-${ id }` }>
				<div className={ 'kt-inside-inner-col' }>
					<InnerBlocks.Content />
				</div>
			</div>
		);
	},
} );
