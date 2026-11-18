import { classNames } from '../../../utils/helpers';

const Tile = ( { className, onClick, children } ) => {
	const handleOnClick = ( event ) => {
		if ( typeof onClick === 'function' ) {
			onClick( event );
		}
	};

	return (
		<div
			onClick={ handleOnClick }
			className={ classNames( className ) }
			role="button"
			tabIndex="0"
			onKeyDown={ ( e ) => ( e.key === 'Enter' ? handleOnClick : null ) }
		>
			{ children }
		</div>
	);
};

export default Tile;
