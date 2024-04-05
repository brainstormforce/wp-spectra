import { classNames } from '../../../utils/helpers';
import { Dialog } from '@headlessui/react';

const ModalTitle = ( { children, className, as = 'h5' } ) => {
	return (
		<Dialog.Title
			as={ as }
			className={ classNames(
				'flex items-center text-2xl font-semibold leading-8 text-heading-text space-x-3',
				className,
			) }
		>
			{ children }
		</Dialog.Title>
	);
};

export default ModalTitle;
