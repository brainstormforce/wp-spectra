import {
	Menu,
	MenuButton,
	MenuItem,
	MenuItems,
	Transition,
} from '@headlessui/react';
import { Fragment } from '@wordpress/element';
import usePopper from '../../../hooks/use-popper';
import { classNames } from '../../../utils/helpers';

const Dropdown = ( {
	placement = 'right',
	width = 'w-48',
	contentClassName = 'py-1 bg-white',
	trigger,
	offset = [ 0, 0 ],
	children,
	disabled = false,
	mainClassName = '',
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
		case '72.5':
			width = 'w-[18.25rem]';
			break;
		case '80':
			width = 'w-80';
			break;
		default:
			width = !! width ? width : 'w-48';
	}

	return (
		<Menu as="div" className={ classNames( 'relative', mainClassName ) }>
			{ ( { open } ) => (
				<>
					<MenuButton
						ref={ triggerPopper }
						as={ Fragment }
						disabled={ disabled }
					>
						{ trigger }
					</MenuButton>

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
								className={ classNames(
									'mb-2 mt-4 !-mr-2 rounded-md shadow-lg',
									width
								) }
							>
								<MenuItems
									className={ classNames(
										'rounded-md focus:outline-none ring-1 ring-black ring-opacity-5',
										contentClassName
									) }
								>
									{ children }
								</MenuItems>
							</div>
						</Transition>
					</div>
				</>
			) }
		</Menu>
	);
};

Dropdown.Item = MenuItem;

export default Dropdown;
