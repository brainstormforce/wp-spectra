import { classNames } from '../../../../utils/helpers';

const ColorPalettes = ( { selected, options, onChange, tabIndex } ) => {
	const handleKeyPress = ( e, palette ) => {
		e = e || window.event;

		if ( e.keyCode === 38 ) {
			//Up Arrow
			if ( e.target.previousSibling ) {
				e.target.previousSibling.focus();
			}
		} else if ( e.keyCode === 40 ) {
			//Down Arrow
			if ( e.target.nextSibling ) {
				e.target.nextSibling.focus();
			}
		} else if ( e.keyCode === 13 ) {
			//Enter
			onChange( e, palette );
		}
	};

	return (
		<div className="flex items-center gap-4">
			{ Object.values( options ).map( ( palette, paletteIndex ) => {
				const title = palette.title || '';
				const displayColor = palette.default_color || '';

				return (
					<div
						key={ paletteIndex }
						className={ classNames(
							'w-6 h-6 rounded-full cursor-pointer',
							palette.slug === selected ? 'ring-2 ring-offset-4 ring-accent-spectra/50' : '',
						) }
						onClick={ ( event ) => {
							onChange( event, palette );
						} }
						onKeyDown={ ( event ) => {
							handleKeyPress( event, palette );
						} }
						tabIndex={ tabIndex }
						role="button"
					>
						<span className="sr-only">{ title }</span>
						<div
							className="w-full h-full rounded-full border border-solid border-black/[0.12]"
							style={ { backgroundColor: displayColor } }
						/>
					</div>
				);
			} ) }
		</div>
	);
};

export default ColorPalettes;
