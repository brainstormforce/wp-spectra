import * as color from 'react-color/lib/helpers/color'
import { EditableInput } from 'react-color/lib/components/common';
import { Dashicon } from '@wordpress/components';
import { useState } from '@wordpress/element'

const UAGBPickerFields = props => {
	
	const [ value, setValue ] = useState( {
		view: 'rgb',
	});

	const toggleViews = () => {
		if ( value.view === 'hsl' ) {
			setValue( { view: 'rgb' } );
		} else if ( value.view === 'rgb' ) {
			setValue( { view: 'hsl' } );
		}
	};

	const handleChange = ( data, e ) => {
		if ( data.hex && color.isValidHex( data.hex ) ) {
			props.onChange( {
				hex: data.hex,
				source: 'hex',
			}, e );
		} else if ( data.r || data.g || data.b ) {
			props.onChange( {
				r: data.r || props.rgb.r,
				g: data.g || props.rgb.g,
				b: data.b || props.rgb.b,
				a: props.rgb.a,
				source: 'rgb',
			}, e );
		} else if ( data.a ) {
			if ( data.a < 0 ) {
				data.a = 0;
			} else if ( data.a > 1 ) {
				data.a = 1;
			}

			props.onChange( {
				h: props.hsl.h,
				s: props.hsl.s,
				l: props.hsl.l,
				a: Math.round( data.a * 100 ) / 100,
				source: 'rgb',
			}, e );
		} else if ( data.h || data.s || data.l ) {
			if ( typeof( data.s ) === 'string' ) { data.s = data.s.replace( '%', '' ); }
			if ( typeof( data.l ) === 'string' ) { data.l = data.l.replace( '%', '' ); }
			props.onChange( {
				h: data.h || props.hsl.h || 0,
				s: Number( ( data.s && data.s / 100 ) || props.hsl.s || 0.0 ),
				l: Number( ( data.l && data.l / 100 ) || props.hsl.l || 0.0 ),
				a: Math.round( data.a * 100 ) / 100 || props.rgb.a || 1,
				source: 'hsl',
			}, e );
		}
	};

	const styles = {
		fields: {
			display: 'flex',
			paddingTop: '4px',
		},
		single: {
			flex: '1',
			paddingLeft: '6px',
		},
		alpha: {
			flex: '1',
			paddingLeft: '6px',
		},
		double: {
			flex: '2',
		},
		input: {
			width: '100%',
			padding: '4px 10% 3px',
			border: 'none',
			borderRadius: '2px',
			boxShadow: 'rgb(218, 218, 218) 0px 0px 0px 1px inset',
			fontSize: '11px',
		},
		label: {
			display: 'block',
			textAlign: 'center',
			fontSize: '11px',
			color: '#222',
			paddingTop: '3px',
			paddingBottom: '4px',
			textTransform: 'capitalize',
		},
		toggle: {
			width: '32px',
			textAlign: 'right',
			position: 'relative',
		},
	};

	return (
	<div style={ styles.fields } className="flexbox-fix">
		<div style={ styles.double }>
			<EditableInput
				style={ { input: styles.input, label: styles.label } }
				label="hex"
				value={ props.hex.replace( '#', '' ) }
				onChange={ handleChange }
			/>
		</div>
		{ value.view === 'rgb' && (
			<>
				<div style={ styles.single }>
					<EditableInput
						style={{ input: styles.input, label: styles.label }}
						label="r"
						value={ props.rgb.r }
						onChange={ handleChange }
						dragLabel="true"
						dragMax="255"
					/>
				</div>
				<div style={ styles.single }>
					<EditableInput
						style={ { input: styles.input, label: styles.label } }
						label="g"
						value={ props.rgb.g }
						onChange={ handleChange }
						dragLabel="true"
						dragMax="255"
					/>
				</div>
				<div style={ styles.single }>
					<EditableInput
						style={ { input: styles.input, label: styles.label } }
						label="b"
						value={ props.rgb.b }
						onChange={ handleChange }
						dragLabel="true"
						dragMax="255"
					/>
				</div>
				<div style={ styles.alpha }>
					<EditableInput
						style={ { input: styles.input, label: styles.label } }
						label="a"
						value={ props.rgb.a }
						arrowOffset={ 0.01 }
						onChange={ handleChange }
					/>
				</div>
			</>
		) }
		{ value.view === 'hsl' && (
			<>
				<div style={ styles.single }>
					<EditableInput
						style={ { input: styles.input, label: styles.label } }
						label="h"
						value={ Math.round( props.hsl.h ) }
						onChange={ handleChange }
						dragLabel="true"
						dragMax="359"
					/>
				</div>
				<div style={ styles.single }>
					<EditableInput
						style={ { input: styles.input, label: styles.label } }
						label="s"
						value={ `${ Math.round( props.hsl.s * 100 ) }` }
						onChange={ handleChange }
					/>
				</div>
				<div style={ styles.single }>
					<EditableInput
						style={ { input: styles.input, label: styles.label } }
						label="l"
						value={ `${ Math.round( props.hsl.l * 100 ) }` }
						onChange={ handleChange }
					/>
				</div>
				<div style={ styles.alpha }>
					<EditableInput
						style={ { input: styles.input, label: styles.label } }
						label="a"
						value={ props.hsl.a }
						arrowOffset={ 0.01 }
						onChange={ handleChange }
					/>
				</div>
			</>
		) }
		<div style={ styles.toggle }>
			<div className="toggle-icons" style={ styles.icon } onClick={ toggleViews } ref={ (icon) => icon = icon }>
				<Dashicon icon="arrow-up-alt2" />
				<Dashicon icon="arrow-down-alt2" />
			</div>
		</div>
	</div>
	);
}
export default UAGBPickerFields;