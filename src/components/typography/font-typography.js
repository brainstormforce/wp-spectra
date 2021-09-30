/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { SelectControl } from '@wordpress/components';
import googleFonts from './fonts';

function FontFamilyControl( props ) {
	const fonts = [
		{
			value: '',
			label: __( 'Default', 'ultimate-addons-for-gutenberg' ),
			weight: [
				'100',
				'200',
				'300',
				'400',
				'500',
				'600',
				'700',
				'800',
				'900',
			],
			google: false,
		},
		{
			value: 'Arial',
			label: 'Arial',
			weight: [
				'100',
				'200',
				'300',
				'400',
				'500',
				'600',
				'700',
				'800',
				'900',
			],
			google: false,
		},
		{
			value: 'Helvetica',
			label: 'Helvetica',
			weight: [
				'100',
				'200',
				'300',
				'400',
				'500',
				'600',
				'700',
				'800',
				'900',
			],
			google: false,
		},
		{
			value: 'Times New Roman',
			label: 'Times New Roman',
			weight: [
				'100',
				'200',
				'300',
				'400',
				'500',
				'600',
				'700',
				'800',
				'900',
			],
			google: false,
		},
		{
			value: 'Georgia',
			label: 'Georgia',
			weight: [
				'100',
				'200',
				'300',
				'400',
				'500',
				'600',
				'700',
				'800',
				'900',
			],
			google: false,
		},
	];

	let fontWeight = '';
	
	//Push Google Fonts into stytem fonts object
	Object.keys( googleFonts ).map( ( k ) => {  // eslint-disable-line array-callback-return
		fonts.push( { value: k, label: k, weight: googleFonts[ k ].weight } );

		if ( k === props.fontFamily.value ) {
			fontWeight = googleFonts[ k ].weight;
		}
	} );

	// check if the font is a system font and then apply the font weight accordingly.
	if ( fontWeight === '' ) {
		fontWeight = fonts[ 0 ].weight;
	}

	const fontWeightObj = [];

	fontWeight.forEach( function ( item ) {
		fontWeightObj.push( { value: item, label: item } );
	} );

	
	const onFontfamilyChange = ( value ) => {
		const { loadGoogleFonts, fontFamily, fontWeight } = props; // eslint-disable-line no-shadow
		props.setAttributes( { [ fontFamily.label ]: value } );
		onLoadGoogleFonts( loadGoogleFonts, value );
		onFontChange( fontWeight, value );
	};

	const onFontChange = ( fontWeight, fontFamily ) => { // eslint-disable-line no-shadow
		let font_flag;  // eslint-disable-line no-unused-vars
		let new_value;

		if ( typeof googleFonts[ fontFamily ] === 'object' ) {
			const gfontsObj = googleFonts[ fontFamily ].weight;
			
			if ( typeof gfontsObj === 'object' ) {
				gfontsObj.forEach( function ( item ) {
					if ( fontWeight.value === item ) {
						font_flag = false;
					} else {
						new_value = item;
						font_flag = true;
						props.setAttributes( {
							[ props.fontWeight.label ]: new_value,
						} );
					}
				} );
			}
		}
	};

	const onLoadGoogleFonts = ( loadGoogleFonts, fontFamily ) => {
		let value;

		if (
			fontFamily !== '' &&
			typeof googleFonts[ fontFamily ] !== 'object'
		) {
			value = false;
		} else {
			value = true;
		}

		props.setAttributes( { [ loadGoogleFonts.label ]: value } );
	};
	
	return (
		<div className="uag-typography-font-family-options">
			<div className="uag-typography-font-family">
				<SelectControl
					label={ __( 'Family', 'ultimate-addons-for-gutenberg' ) }
					options={ fonts }
					value={ props.fontFamily.value }
					onChange={ onFontfamilyChange }
					className="react-select-container"
				/>
			</div>
			<div className="uag-typography-weight-style-wrap">
				<div className="uag-typography-font-family-weight">
					<SelectControl
						label={ __(
							'Weight',
							'ultimate-addons-for-gutenberg'
						) }
						value={ props.fontWeight.value }
						onChange={ ( value ) =>
							props.setAttributes( {
								[ props.fontWeight.label ]: value,
							} )
						}
						options={ fontWeightObj }
						className="react-select-container"
					/>
				</div>
				{ props.fontStyle && 
					<div className="uag-typography-style">
						<SelectControl
							label={ __( 'Style', 'ultimate-addons-for-gutenberg' ) }
							value={ props.fontStyle.value }
							onChange={ ( value ) =>
								props.setAttributes( {
									[ props.fontStyle.label ]: value,
								} )
							}
							options={ [
								{
									value: 'normal',
									label: __(
										'Normal',
										'ultimate-addons-for-gutenberg'
									),
								},
								{
									value: 'italic',
									label: __(
										'Italic',
										'ultimate-addons-for-gutenberg'
									),
								},
								{
									value: 'oblique',
									label: __(
										'Oblique',
										'ultimate-addons-for-gutenberg'
									),
								},
							] }
						/>
					</div>
				}
			</div>
		</div>
	);
}

export default FontFamilyControl;
