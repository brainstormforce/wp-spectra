/**
 * The Tooltip Component.
 */

import { Fragment } from '@wordpress/element';
import { Transition } from '@headlessui/react';
import { uagbClassNames } from '@Helpers/Helpers';

// The tooltip componenet.
const Tooltip = ( props ) => {
	// Destructure the required props.
	const {
		showTooltip,
		position = {
			horizontal: 'center',
			vertical: 'top',
		},
		content,
		additionalClasses = '',
		additionalProps = {},
	} = props;

	// Set a default object for the required Tailwind positioning classes.
	const positionClasses = { vClass: '', hClass: '' };

	// Set the horizontal positioning class based on the position passed.
	switch ( position?.horizontal ) {
		case 'left':
			// If center is set, move the tooltip half-way to the left.
			positionClasses.hClass = 'left-0 -translate-x-full';
			break;
		case 'center':
			// If center is set, move the tooltip half-way to the left.
			positionClasses.hClass = 'left-1/2 -translate-x-1/2';
			break;
		case 'right':
			// If center is set, move the tooltip half-way to the left.
			positionClasses.hClass = 'right-0 translate-x-full';
			break;
		default:
			// By default, just set the classes added if any.
			positionClasses.hClass = position?.horizontal || '';
	}

	// Set the vertical positioning class based on the position passed.
	switch ( position?.vertical ) {
		case 'top':
			// If top is set, move the tooltip 100% of its height to the top.
			positionClasses.vClass = 'top-0 -translate-y-full';
			break;
		case 'center':
			// If top is set, move the tooltip 100% of its height to the top.
			positionClasses.vClass = 'top-1/2 -translate-y-1/2';
			break;
		case 'bottom':
			// If top is set, move the tooltip 100% of its height to the top.
			positionClasses.vClass = 'bottom-0 translate-y-full';
			break;
		default:
			// By default, just set the classes added if any.
			positionClasses.vClass = position?.vertical || '';
	}

	return (
		<Transition.Root
			show={ showTooltip }
			as={ Fragment }
		>
			<Transition.Child
				as={ Fragment }
				enter="ease-out duration-200"
				enterFrom="opacity-0"
				enterTo="opacity-100"
				leave="ease-in duration-100"
				leaveFrom="opacity-100"
				leaveTo="opacity-0"
			>
				<div
					className={ uagbClassNames( [
						'absolute box-border flex text-center items-center justify-center p-2 text-xs rounded-md transition-all bg-slate-800 text-white z-50',
						positionClasses.hClass,
						positionClasses.vClass,
						additionalClasses,
					] ) }
					{ ...additionalProps }
				>
					{ content }
				</div>
			</Transition.Child>
		</Transition.Root>
	);
};

// Component used to attach a tooltip as a sibling.
export const AttachTooltip = ( props ) => {
	// Destructure the required props.
	const {
		showTooltip,
		wrapperProps = {},
		tooltipPosition,
		tooltipContent,
		tooltipAdditionalClasses = '',
		tooltipAdditionalProps = {},
		children,
	} = props;

	return (
		<div
			className="relative"
			{ ...wrapperProps }
		>
			{ children }
			<Tooltip
				showTooltip={ showTooltip }
				position={ tooltipPosition }
				content={ tooltipContent }
				additionalClasses={ tooltipAdditionalClasses }
				additionalProps={ tooltipAdditionalProps }
			/>
		</div>
	);
};

export default Tooltip;
