import { XMarkIcon } from '@heroicons/react/24/outline';
import { classNames } from '../../../utils/helpers';
import Button from '../button/button';

const Drawer = ( props ) => {
	const { className, wrapperClass, open, children, onClose, ...rest } = props;

	return (
		<div
			className={ classNames(
				'absolute w-full h-full z-[99999] transition-transform bg-gray-500/50',
				open ? '' : '-translate-x-full',
				className
			) }
			{ ...rest }
		>
			<Button
				onClick={ () => onClose() }
				className="absolute right-4 top-4 bg-white rounded-full p-4 px-3"
				variant="blank"
			>
				<XMarkIcon className="size-6" />
			</Button>
			<div
				className={ classNames(
					'bg-white h-full shadow-xl w-3/4',
					wrapperClass
				) }
			>
				{ children }
			</div>
		</div>
	);
};

export default Drawer;
