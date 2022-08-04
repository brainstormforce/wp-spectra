/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import UAGSelectControl from '@Components/select-control';
import RangeTypographyControl from './range-typography';
import googleFonts from '@Controls/fonts';
import Select from 'react-select';

const { uag_select_font_globally , uag_load_select_font_globally } = uagb_blocks_info;

function FontFamilyControl( props ) {

	const fonts = [];

	let fontWeight = '';

	const customFonts = uagb_blocks_info.spectra_custom_fonts;

	//Push Google Fonts into stytem fonts object
	Object.keys( googleFonts ).map( ( k ) => {  // eslint-disable-line array-callback-return
		fonts.push( { value: k, label: k, weight: googleFonts[ k ].weight } );

		if ( k === props.fontFamily.value ) {
			fontWeight = googleFonts[ k ].weight;
		}
	} );

	//Push custom Fonts into stytem fonts object.
	Object.keys( customFonts ).map( ( k ) => {  // eslint-disable-line array-callback-return
		fonts.push( { value: k, label: k, weight: customFonts[ k ].weight } );
		if ( k === props.fontFamily.value ) {
			fontWeight = customFonts[ k ].weight;
		}
	} );

	// check if the font is a system font and then apply the font weight accordingly.
	if ( fontWeight === '' ) {
		fontWeight = fonts[ 0 ].weight;
	}

	const fontWeightObj = [];
	fontWeight.forEach( function ( item ) {
		fontWeightObj.push( {
			value: ( 'Default' === item ) ? '' : item,
			label: item,
		} );
	} );


	const onFontfamilyChange = ( value ) => {
		const font = value.value;
		const { loadGoogleFonts, fontFamily } = props; // eslint-disable-line no-shadow
		props.setAttributes( { [ fontFamily.label ]: font } );
		onLoadGoogleFonts( loadGoogleFonts, font );
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

	const gFonts = uag_load_select_font_globally === 'enabled' && uag_select_font_globally !== 0 ? uag_select_font_globally : fonts;

	const customSelectStyles = {
		container: ( provided ) => ( {
			...provided,
			width: '100%',
		} ),
		control: ( provided ) => ( {
			...provided,
			border: '1px solid #E6E7E9',
			boxShadow: 'none',
			height: '30px',
			minHeight: '30px',
			borderRadius: '3px',
		} ),
		placeholder: ( provided ) => ( {
			...provided,
			color: '#50575E',
		} ),
		menu: ( provided ) => ( {
			...provided,
			color: '#50575E',
		} ),
		singleValue: ( provided ) => ( {
			...provided,
			color: '#50575E',
			top: '50%',
			transform: 'translateY(-50%);',
		} ),
		indicatorSeparator: ( provided ) => ( {
			...provided,
			display: 'none',
		} ),
		dropdownIndicator: ( provided ) => ( {
			...provided,
			color: '#50575E',
		} ),
		valueContainer: ( provided ) => ( {
			...provided,
			height: '30px',
			padding: '0px 8px',
		} ),
	}

	let fontFamilyValue;
	//Push Google Fonts into stytem fonts object
	if ( gFonts ) {
		gFonts.map( ( font ) => {  // eslint-disable-line array-callback-return

			if ( ! props.fontFamily.weight && font.value === props.fontFamily.value ) {
				fontFamilyValue = { ...props.fontFamily, weight: font.weight, label: font.value };
			}
		} );
	}

	let fontSize;
	const fontSizeStepsVal = ( 'em' === props.fontSizeType.value ? 0.1 : 1 ); // fractional value when unit is em.
	if ( true !== props.disableFontSize ) {
		fontSize = (
			<RangeTypographyControl
				type={ props.fontSizeType }
				typeLabel={ props.fontSizeType.label }
				sizeMobile={ props.fontSizeMobile }
				sizeMobileLabel={ props.fontSizeMobile.label }
				sizeTablet={ props.fontSizeTablet }
				sizeTabletLabel={ props.fontSizeTablet.label }
				size={ props.fontSize }
				sizeLabel={ props.fontSize.label }
				sizeMobileText={
					! props.fontSizeLabel
						? __( 'Font Size', 'ultimate-addons-for-gutenberg' )
						: props.fontSizeLabel
				}
				sizeTabletText={
					! props.fontSizeLabel
						? __( 'Font Size', 'ultimate-addons-for-gutenberg' )
						: props.fontSizeLabel
				}
				sizeText={
					! props.fontSizeLabel
						? __( 'Font Size', 'ultimate-addons-for-gutenberg' )
						: props.fontSizeLabel
				}
				step={ fontSizeStepsVal }
				{ ...props }
			/>
		);
	}

	return (
		<>
			{ /* Font Family */ }
			<div className="components-base-control uag-font-family-searchable-select__wrapper">
				<label className="components-input-control__label" htmlFor="font-family">{ __( 'Font Family' ) }</label>
				<Select
					styles={ customSelectStyles }
					placeholder={ __( 'Default', 'ultimate-addons-for-gutenberg' ) }
					onChange={ onFontfamilyChange }
					options={ gFonts }
					value={ fontFamilyValue }
					defaultValue = { fontFamilyValue }
					isSearchable={true}
					className="uag-font-family-searchable-select"
					classNamePrefix="uag-font-family-select"
				/>
			</div>
			{ /* Font Size*/ }
			{ fontSize }
			{ /* Font Weitght */ }
			<UAGSelectControl
				label={ __(
					'Weight',
					'ultimate-addons-for-gutenberg'
				) }
				data={ {
					value: props.fontWeight.value,
					label: props.fontWeight.label,
				} }
				setAttributes={ props.setAttributes }
				options={ fontWeightObj }
			/>
			{ /* Font Style */ }
			{ props.fontStyle &&
				<UAGSelectControl
					label={ __(
						'Style',
						'ultimate-addons-for-gutenberg'
					) }
					data={ {
						value: props.fontStyle.value,
						label: props.fontStyle.label,
					} }
					setAttributes={ props.setAttributes }
					options={ [
						{
							value: 'normal',
							label: __(
								'Default',
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
			}
		</>
	);
}

export default FontFamilyControl;
