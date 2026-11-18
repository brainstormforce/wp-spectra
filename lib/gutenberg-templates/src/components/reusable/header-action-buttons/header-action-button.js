import { useSelect } from '@wordpress/data';
import { classNames } from '../../../utils/helpers';
import Tooltip from '../tooltip';
import { STORE_KEY } from '../../../store/index';

const { forwardRef } = wp.element;

const ActionButton = forwardRef( ( { className, tooltip, children, ...props }, ref ) => {
	const { importInProgress } = useSelect( ( select ) => {
		const { getImportInProgress } = select( STORE_KEY );
		return {
			importInProgress: getImportInProgress(),
		};
	}, [] );
	return (
		<Tooltip content={ tooltip }>
			<button
				ref={ ref }
				className={ classNames(
					'flex items-center justify-center w-10 h-10 rounded-full p-2 text-nav-inactive active:focus:text-nav-active disabled:cursor-not-allowed disabled:text-gray-300 hover:bg-background-tertiary active:bg-background-tertiary transition duration-150 ease-in-out bg-transparent border-0 [&_svg]:flex-shrink-0 cursor-pointer flex-col',
					( importInProgress ) &&
							'disable-click-action',
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
