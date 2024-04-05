import { classNames } from '../../../utils/helpers';
import Tooltip from '../tooltip';

const { forwardRef } = wp.element;

const ActionButton = forwardRef( ( { className, tooltip, children, ...props }, ref ) => {
	return (
		<Tooltip content={ tooltip }>
			<button
				ref={ ref }
				className={ classNames(
					'flex items-center justify-center w-10 h-10 rounded-full p-2 text-nav-inactive active:focus:text-nav-active disabled:cursor-not-allowed disabled:text-gray-300 hover:bg-background-tertiary active:bg-background-tertiary transition duration-150 ease-in-out bg-transparent border-0 [&_svg]:flex-shrink-0 cursor-pointer flex-col',
					className
				) }
				{ ...props }
			>
				{ children }
			</button>
		</Tooltip>
	);
} );

export default ActionButton;
