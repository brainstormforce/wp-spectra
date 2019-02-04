/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;

const {
	TextControl,
	RangeControl,
	SelectControl,
	ButtonGroup,
	Button,
	PanelRow,
	TabPanel,
	Dashicon,
} = wp.components;

// Extend component
const { Component, Fragment } = wp.element

/**
 * Internal dependencies
 */
import TypographyOptionsInlineStyles from './inline-styles';
import map from "lodash/map"
import googleFonts from './fonts';
import './editor.scss';

// Export for ease of importing in individual blocks.
export {
	TypographyOptionsInlineStyles,
};

function TypographyOptions( props ) {

	const fonts = [
		{ value: '', label: __( 'Default' ), weight: [ '100', '200', '300', '400', '500', '600', '700', '800', '900' ] },
		{ value: 'Arial', label: 'Arial', weight: [ '100', '200', '300', '400', '500', '600', '700', '800', '900' ] },
		{ value: 'Helvetica', label: 'Helvetica', weight: [ '100', '200', '300', '400', '500', '600', '700', '800', '900' ] },
		{ value: 'Times New Roman', label: 'Times New Roman', weight: [ '100', '200', '300', '400', '500', '600', '700', '800', '900' ] },
		{ value: 'Georgia', label: 'Georgia', weight: [ '100', '200', '300', '400', '500', '600', '700', '800', '900' ] },
	];

	let font_weight = '';

	//Push Google Fonts into stytem fonts object
	Object.keys( googleFonts ).map( ( k, v ) => {
		fonts.push(
			{ value: k, label: k, weight: googleFonts[k] }
		);

		if( k === props.fontFamily ) {
			font_weight = googleFonts[k].weight;
		}
	})

	// check if the font is a stystem font and then apply the font weight accordingly.

	if ( font_weight === '' ) {
		font_weight = fonts[0].weight;
	}
	
	const font_weight_obj = [];

	font_weight.forEach(function(item) {
		font_weight_obj.push(
			{ value: item, label: item }
		);
	});

	const onFontFamilyChange = value => props.setAttributes( { [ props.fontFamily.label ]: value } );
	const onFontSizeChange 	 = value => props.setAttributes( { [ props.fontSize.label ]  : value } );
	const onFontWeightChange = value => props.setAttributes( { [ props.fontWeight.label ]: value } );
	const onLineheightChange = value => props.setAttributes( { [ props.LineHeight.label ]: value } );

	const sizeTypes = [
		{ key: "px", name: __( "px" ) },
		{ key: "em", name: __( "em" ) },
	]

	console.log( props );

	const headsizeTypesControls = (
		<ButtonGroup className="uagb-size-type-field" aria-label={ __( "Size Type" ) }>
			{ map( sizeTypes, ( { name, key } ) => (
				<Button
					key={ key }
					className="uagb-size-btn"
					isSmall
					isPrimary={ props.fontSizeType === key }
					aria-pressed={ props.fontSizeType === key }
					onClick={ () => setAttributes( { fontSizeType: key } ) }
				>
					{ name }
				</Button>
			) ) }
		</ButtonGroup>
	)
	
	return (
		<PanelRow>
			<div className="uag-typography-options">
				<div>
					<SelectControl
						label={ __( "Font Family" ) }
						value={ props.fontFamily.value }
						onChange={ onFontFamilyChange }
						options={
							fonts
						}
					/>
					<SelectControl
						label={ __( "Font Weight" ) }
						value={ props.fontWeight.value }
						onChange={ onFontWeightChange }
						options={
							font_weight_obj
						}
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
												value={ props.fontSizeMobile.value }
												onChange={ ( value ) => props.setAttributes( { [props.fontSizeMobile.label]: value } ) }
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
												value={ props.fontSizeTablet.value }
												onChange={ ( value ) => props.setAttributes( { [props.fontSizeTablet.label]: value } ) }
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
												value={ props.fontSize.value }
												onChange={ ( value ) => props.setAttributes( { [props.fontSize.label]: value } ) }
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
				</div>
			</div>
		</PanelRow>
	);
}

export default TypographyOptions;
