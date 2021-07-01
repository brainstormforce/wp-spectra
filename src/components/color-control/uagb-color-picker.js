import { CustomPicker } from 'react-color';
import { Hue, Saturation, Alpha, Checkboard } from 'react-color/lib/components/common';
import { ChromePointerCircle } from 'react-color/lib/components/chrome/ChromePointerCircle';
import { ChromePointer } from 'react-color/lib/components/chrome/ChromePointer';
import UAGBPickerFields from './uagb-color-picker-fields';
import './editor.scss';

export const UAGBColorPicker = ( { rgb, hex, hsv, hsl, onChange, renderers } ) => {
	const styles = {
		Hue: {
			radius: '2px',
		},
		Alpha: {
			radius: '2px',
		},
		input: {
			height: 34,
			border: `1px solid ${ hex }`,
			paddingLeft: 10,
		},
		activeColor: {
			background: `rgba(${ rgb.r },${ rgb.g },${ rgb.b },${ rgb.a })`,
		},
		swatch: {
			width: 54,
			height: 38,
			background: hex,
		},
		saturation: {
			width: '100%',
			paddingBottom: '50%',
			position: 'relative',
			overflow: 'hidden',
		},
		Saturation: {
			radius: '2px 2px 0 0',
			shadow: 'inset 0 0 0 1px rgba(0,0,0,.15), inset 0 0 4px rgba(0,0,0,.25)',
		},
	};
	return (
		<div className='uagb-picker'>
		<div className='uagb-picker-saturation'>
			<Saturation
				style={ styles.Saturation }
				hsl={ hsl }
				hsv={ hsv }
				pointer={ ChromePointerCircle }
				onChange={ onChange }
			/>
		</div>
		<div className='uagb-flexbox-fix-wrap'>
			<div className="uagb-flexbox-fix">
				<div className='uagb-flexbox-fix-slider-wrap'>
					<div className='uagb-hue-wrap'>
						<Hue
							style={ styles.Hue }
							hsl={ hsl }
							onChange={ onChange }
							pointer={ ChromePointer }
						/>
					</div>
					<div className='uagb-alpha-wrap'>
						<Alpha
							style={ styles.Alpha }
							rgb={ rgb }
							hsl={ hsl }
							renderers={ renderers }
							pointer={ ChromePointer }
							onChange={ onChange }
						/>
					</div>
				</div>
				<div className='uagb-flexbox-fix-color-wrap'>
					<Checkboard />
					<div style={ styles.activeColor } className='uagb-flexbox-fix-active-color-wrap'/>
				</div>
			</div>
		</div>
		<UAGBPickerFields
			rgb={ rgb }
			hsl={ hsl }
			hex={ hex }
			onChange={ onChange }
		/>
	</div>
	);
};
export default CustomPicker( UAGBColorPicker );