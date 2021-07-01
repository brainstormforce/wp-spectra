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

	return (
	<div className='uagb-flexbox-fix'>
		<div className='uagb-double-wrap'>
			<EditableInput
				label='hex'
				value={ props.hex.replace( '#', '' ) }
				onChange={ handleChange }
			/>
		</div>
		{ value.view === 'rgb' && (
			<>
				<div className='uagb-single-rgb-r-input'>
					<EditableInput
						label='r'
						value={ props.rgb.r }
						onChange={ handleChange }
						dragLabel='true'
						dragMax='255'
					/>
				</div>
				<div className='uagb-single-rgb-g-input'>
					<EditableInput
						label='g'
						value={ props.rgb.g }
						onChange={ handleChange }
						dragLabel='true'
						dragMax='255'
					/>
				</div>
				<div className='uagb-single-rgb-b-input'>
					<EditableInput
						label='b'
						value={ props.rgb.b }
						onChange={ handleChange }
						dragLabel='true'
						dragMax='255'
					/>
				</div>
				<div className='uagb-single-rgb-alpha-input'>
					<EditableInput
						label='a'
						value={ props.rgb.a }
						arrowOffset={ 0.01 }
						onChange={ handleChange }
					/>
				</div>
			</>
		) }
		{ value.view === 'hsl' && (
			<>
				<div className='uagb-single-hsl-h-input'>
					<EditableInput
						label='h'
						value={ Math.round( props.hsl.h ) }
						onChange={ handleChange }
						dragLabel='true'
						dragMax='359'
					/>
				</div>
				<div className='uagb-single-hsl-s-input'>
					<EditableInput
						label='s'
						value={ `${ Math.round( props.hsl.s * 100 ) }` }
						onChange={ handleChange }
					/>
				</div>
				<div className='uagb-single-hsl-l-input'>
					<EditableInput
						label='l'
						value={ `${ Math.round( props.hsl.l * 100 ) }` }
						onChange={ handleChange }
					/>
				</div>
				<div className='uagb-single-hsl-alpha-input'>
					<EditableInput
						label='a'
						value={ props.hsl.a }
						arrowOffset={ 0.01 }
						onChange={ handleChange }
					/>
				</div>
			</>
		) }
		<div className='uagb-single-toggle'>
			<div className='toggle-icons' onClick={ toggleViews } ref={ (icon) => icon = icon }>
				<Dashicon icon='arrow-up-alt2' />
				<Dashicon icon='arrow-down-alt2' />
			</div>
		</div>
	</div>
	);
}
export default UAGBPickerFields;