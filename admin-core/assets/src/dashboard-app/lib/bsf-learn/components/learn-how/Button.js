import { Button as FUIButton } from '@bsf/force-ui';
import { forwardRef } from '@wordpress/element';

/**
 * Button Component
 *
 * A wrapper around Force UI Button with customizable variant and onClick handler.
 *
 * @param {string} text - Button text
 * @param {string} variant - Button variant (primary|secondary|tertiary)
 * @param {Function} onClick - Click handler function
 * @param {Object} ref - Forwarded ref
 */
const Button = forwardRef( ( { text, variant, onClick }, ref ) => {
	const handleOnClick = ( event ) => {
		if ( !! onClick && typeof onClick === 'function' ) {
			onClick( event );
		}
	};

	return (
		<FUIButton
			ref={ ref }
			variant={ variant || 'primary' }
			size="sm"
			onClick={ handleOnClick }
		>
			{ text }
		</FUIButton>
	);
} );

export default Button;
