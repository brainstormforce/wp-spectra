import { useState } from '@wordpress/element';
import Tippy from '@tippyjs/react/headless';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { useSpring, motion } from 'framer-motion';
import Button from '../button/button';
import { __ } from '@wordpress/i18n';

const ExitConfirmationPopover = ( { onExit, placement = 'auto' } ) => {
	const [ show, setShow ] = useState( false );
	const springConfig = { damping: 30, stiffness: 300 };
	const initialOpacity = 0;
	const opacity = useSpring( initialOpacity, springConfig );

	const toggleShow = () => {
		setShow( ( prev ) => ! prev );
	};

	const onMount = () => {
		opacity.set( 1 );
	};

	const onHide = () => {
		opacity.set( 0 );
	};

	return (
		<Tippy
			visible={ show }
			onClickOutside={ toggleShow }
			onMount={ onMount }
			onHide={ onHide }
			render={ ( attrs ) => (
				<motion.div
					className="flex flex-col items-start gap-5 w-[300px] h-auto bg-white rounded-lg shadow-xl p-4 border border-solid border-border-primary"
					style={ { opacity } }
					{ ...attrs }
				>
					<div className="w-full space-y-2">
						<p className="m-0 !text-zip-app-heading !text-base !font-semibold">
							{ __( 'Are you sure?', 'ast-block-templates' ) }
						</p>
						<p className="m-0 !text-zip-body-text !text-sm !font-normal">
							{ __(
								'If you prefer to continue, press “Cancel”.',
								'ast-block-templates'
							) }
						</p>
					</div>
					<div className="flex justify-end gap-3 w-full">
						<Button
							className="h-auto text-zip-app-heading !text-xs font-semibold !py-1.5 !px-3 rounded border border-solid border-border-primary shadow-sm"
							type="button"
							variant="blank"
							onClick={ toggleShow }
						>
							<span>
								{ __( 'Cancel', 'ast-block-templates' ) }
							</span>
						</Button>
						<Button
							className="h-auto text-white !text-xs font-semibold !py-1.5 !px-3 rounded border border-solid border-alert-error-text bg-alert-error-text shadow-sm"
							type="button"
							variant="blank"
							onClick={ onExit }
						>
							<span>{ __( 'Exit', 'ast-block-templates' ) }</span>
						</Button>
					</div>
					{ /* Arrow */ }
					<div
						data-popper-arrow
						className="-top-1.5 !border-border-primary absolute size-3 bg-white !rotate-45 !border !right-5 !left-auto border-solid !border-b-0 !border-r-0"
					/>
				</motion.div>
			) }
			interactive={ true }
			interactiveBorder={ 20 }
			placement={ placement }
		>
			<button
				onClick={ toggleShow }
				className="p-0 border-0 w-auto h-auto bg-transparent cursor-pointer focus:outline-none"
			>
				<XMarkIcon className="w-6 h-6 text-icon-secondary" />
			</button>
		</Tippy>
	);
};

export default ExitConfirmationPopover;
