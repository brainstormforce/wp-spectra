import { Menu, Transition } from '@headlessui/react';
import usePopper from '../../../hooks/use-popper';
import { Fragment } from '@wordpress/element';
import { classNames } from '../../../utils/helpers';

const Dropdown = ( {
	placement = 'right',
	width = 'w-48',
	wrapperClassName = '',
	contentClassName = 'py-1 bg-white',
	trigger,
	offset = [ 0, 0 ],
	children,
} ) => {
	let placementValue = 'bottom-end';
	switch ( placement ) {
		case 'left':
			placementValue = 'bottom-start';
			break;
		case 'right':
			placementValue = 'bottom-end';
			break;
		case 'top-start':
			placementValue = 'top-start';
			break;
		default:
			placementValue = 'bottom-end';
	}
	const [ triggerPopper, container ] = usePopper( {
		placement: placementValue,
		strategy: 'fixed',
		modifiers: [ { name: 'offset', options: { offset } } ],
	} );

	switch ( width?.toString() ) {
		case '48':
			width = 'w-48';
			break;
		case '60':
			width = 'w-60';
			break;
		case '80':
			width = 'w-80';
			break;
		default:
			width = !! width ? width : 'w-48';
	}

	return (
		<Menu as="div" className="relative">
			{ ( { open } ) => (
				<>
					<Menu.Button ref={ triggerPopper } as={ Fragment }>
						{ trigger }
					</Menu.Button>

					<div ref={ container } className="z-50">
						<Transition
							show={ open }
							as={ Fragment }
							enter="transition ease-out duration-200"
							enterFrom="transform opacity-0 scale-95"
							enterTo="transform opacity-100 scale-100"
							leave="transition ease-in duration-75"
							leaveFrom="transform opacity-100 scale-100"
							leaveTo="transform opacity-0 scale-95"
						>
							<div
								className={ classNames( 'my-2 rounded-md shadow-lg', width, wrapperClassName ) }
							>
								<Menu.Items
									className={ classNames( 'rounded-md focus:outline-none ring-1 ring-black ring-opacity-5', contentClassName ) }
								>
									{ children }
								</Menu.Items>
							</div>
						</Transition>
					</div>
				</>
			) }
		</Menu>
	);
};

Dropdown.Item = Menu.Item;

export default Dropdown;
