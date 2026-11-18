import { SpectraLogo } from '../../ui/icons';
import OnePageSkeleton from '../../reusable/one-page-skeleton';
import { ArrowRightIcon, XMarkIcon } from '@heroicons/react/24/outline';
import Collapse from '../../reusable/collapsible';
import Button from '../../reusable/button/button';
import { useDispatch } from '@wordpress/data';
import { STORE_KEY } from '../../../store';

const BuildPage = () => {
	const { setTogglePopup, setPreviousOnboardingPagesAIStep } = useDispatch( STORE_KEY );

	const handleClosePopup = () => {
		setTogglePopup();
		document
			.getElementById( 'ast-block-templates-modal-wrap' )
			.classList.remove( 'open' );
		document.body.classList.remove( 'ast-block-templates-modal-open' );
	};

	return (
		<div className="flex items-stretch flex-1">
			<div className="xl:w-[72%] lg:w-[65%] w-[55%] flex flex-col items-start justify-start bg-background-secondary relative h-full">
				<div className="py-4 px-5">
					<SpectraLogo className="w-10 h-10" />
				</div>
				<div className="flex-1 px-[4.875rem] w-full">
					<OnePageSkeleton />
				</div>
			</div>
			<div className="xl:w-[28%] lg:w-[35%] w-[45%] pt-8 pb-5 px-8 bg-white relative flex flex-col">
				<div className="flex items-start justify-between">
					<h5 className="m-0">Build Your Page</h5>
					<button
						className="border-0 bg-transparent outline-none focus:outline-none active:outline-none text-nav-inactive hover:text-nav-active cursor-pointer flex items-center justify-center rounded-full p-2 hover:bg-background-tertiary active:bg-background-tertiary transition-colors ease-in-out duration-150"
						onClick={ handleClosePopup }
					>
						<XMarkIcon
							className="w-5 h-5"
						/>
					</button>
				</div>
				<p className="text-sm font-normal text-body-text mt-2 mb-8">
					Craft your page by selecting designs section by section.
					Personalize your design and have your page ready in no time.
				</p>
				<div className="flex flex-col gap-2 items-center justify-center px-2 pb-8 w-full">
					<div className="flex justify-around w-full flex-wrap">
						<div className="flex flex-col divide-y divide-border-primary divide-solid [&>div]:border-x-0">
							<Collapse trigger="1. Page Header">
								ZipWP is different from other AI website
								builders in so many ways. It's free so there's
								no monthly charge to use it, or the website you
								build with it.
							</Collapse>
							<Collapse trigger="2. Intro">
								ZipWP is different from other AI website
								builders in so many ways. It's free so there's
								no monthly charge to use it, or the website you
								build with it.
							</Collapse>
							<Collapse trigger="3. Team Member">
								ZipWP is different from other AI website
								builders in so many ways. It's free so there's
								no monthly charge to use it, or the website you
								build with it.
							</Collapse>
							<Collapse trigger="4. Join The Team">
								ZipWP is different from other AI website
								builders in so many ways. It's free so there's
								no monthly charge to use it, or the website you
								build with it.
							</Collapse>
							<Collapse trigger="5. Image Gallery">
								ZipWP is different from other AI website
								builders in so many ways. It's free so there's
								no monthly charge to use it, or the website you
								build with it.
							</Collapse>
						</div>
					</div>
				</div>
				<div className="w-full flex justify-between items-center gap-2 mt-auto">
					<Button
						variant="blank"
						className="text-secondary-text font-medium leading-4 bg-transparent border-0 text-base"
						onClick={ setPreviousOnboardingPagesAIStep }
					>
						Previous Step
					</Button>

					<Button
						variant="primary"
						hasPrefixIcon
						className="rounded-md"
						onClick={ () => {} }
					>
						<span>Build Page</span>
						<ArrowRightIcon className="w-4 h-4" />
					</Button>
				</div>
			</div>
		</div>
	);
};

export default BuildPage;
