import { XMarkIcon } from '@heroicons/react/24/outline';
import { classNames } from '../../../utils/helpers';

const Snackbar = ( { type, icon, message, ctaLink, ctaText, rounded = 0, onClose, className, isClose = true } ) => {
	const typeClassName = {
		success: {
			text: 'text-heading-text',
			icon: 'text-[#0BC16A]',
			background: 'bg-[#0BC16A]/[0.08]',
		},
		warning: {
			text: 'text-heading-text',
			icon: 'text-credit-warning',
			background: 'bg-credit-warning/5',
		},
		error: {
			text: 'text-heading-text',
			icon: 'text-credit-danger',
			background: 'bg-credit-danger/5',
		},
		info: {
			text: 'text-heading-text',
			icon: 'text-accent-spectra',
			background: 'bg-background-tertiary',
		},
		notice: {
			text: 'text-heading-text',
			icon: 'text-credit-notice',
			background: 'bg-[#E6FFFA]',
		},
	};

	const borderRadiusClassName = {
		0: 'rounded-none',
		4: 'rounded',
		6: 'rounded-md',
		8: 'rounded-lg',
	};

	const handleClickClose = ( event ) => {
		if ( typeof onClose !== 'function' ) {
			return;
		}
		onClose( event );
	};
	return (
		<div className={ classNames( 'px-10 py-5', typeClassName[ type ]?.background, borderRadiusClassName[ rounded ], className ) }>
			<div className="flex items-center gap-2">
				<div className={ classNames( 'flex items-center', typeClassName[ type ]?.icon ) }>{ !! icon && icon }</div>
				<div className="flex-1 flex justify-start items-center gap-3">
					<div className={ classNames( 'text-sm m-0', typeClassName[ type ]?.text ) }>
						{ !! message && message }
					</div>
					<div className="text-sm m-0">
						{ !! ctaLink && (
							<a
								href={ ctaLink }
								target="_blank"
								className="whitespace-nowrap font-normal !text-accent-spectra"
								rel="noreferrer"
							>
								{ !! ctaText && ctaText }
							</a>
						) }
					</div>
					{ isClose && (
						<button onClick={ handleClickClose } className="ml-auto bg-transparent border-0 focus:outline-none cursor-pointer p-2">
							<XMarkIcon className="w-5 h-5 text-heading-text" />
						</button>
					) }
				</div>
			</div>
		</div>
	);
};

export default Snackbar;
