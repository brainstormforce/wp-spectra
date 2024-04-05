import { STORE_KEY } from '../../../store';
import Divider from '../../reusable/divider/divider';
import Heading from './heading';
import NavigationButtons from './navigation-buttons';
import { withDispatch, useSelect } from '@wordpress/data';
import { useEffect } from '@wordpress/element';

import { compose } from '@wordpress/compose';
import { BoltIcon } from '@heroicons/react/24/outline';
import useCredits from '../../../hooks/use-credits';
// import CategoryLoader from './skeletons/category-loader';
import BusinessTypes from './business-types';

const Type = ( { onClickContinue } ) => {
	const { currentBalanceStatus, remaining } = useCredits();

	// const { setSiteLanguageListAIStep } = useDispatch( STORE_KEY );
	const { businessType } = useSelect( ( select ) => {
		const { getAIStepData } = select( STORE_KEY );
		return getAIStepData();
	} );

	const handleClickContinue = () => {
		if ( ! businessType ) {
			return;
		}

		onClickContinue();
	};

	useEffect( () => {
	}, [] );

	return (
		<div className="w-full max-w-container flex flex-col gap-8">
			{ currentBalanceStatus.danger && 0 !== remaining && (
				<div className="rounded-md bg-orange-50 p-1">
					<div className="flex">
						<div className="flex items-center ml-2">
							<BoltIcon
								className="h-5 w-5 text-orange-400"
								aria-hidden="true"
							/>
						</div>
						<div className="ml-2 flex-1 md:flex md:justify-between">
							<p className="text-sm text-orange-400">
								Your remaining credits are low. It might not be
								enough to generate the full content.
							</p>
							<p className="text-sm mr-2">
								<a
									href={
										ast_block_template_vars.get_more_credits_url
									}
									target="_blank"
									className="whitespace-nowrap font-normal !text-nav-active"
									rel="noreferrer"
								>
									Get More Credits
								</a>
							</p>
						</div>
					</div>
				</div>
			) }
			{ currentBalanceStatus.danger && 0 === remaining && (
				<div className="rounded-md bg-credit-danger/5">
					<div className="flex">
						<div className="flex items-center ml-2">
							<BoltIcon
								className="h-5 w-5 text-credit-danger"
								aria-hidden="true"
							/>
						</div>
						<div className="ml-2 flex-1 md:flex md:justify-between">
							<p className="text-sm text-credit-danger">
								You have no credits left. Please purchase more
								credits to continue generating content.
							</p>
							<p className="text-sm mr-2">
								<a
									href={
										ast_block_template_vars.get_more_credits_url
									}
									target="_blank"
									className="whitespace-nowrap font-normal !text-nav-active"
									rel="noreferrer"
								>
									Get More Credits
								</a>
							</p>
						</div>
					</div>
				</div>
			) }

			{ /* Heading */ }
			<Heading
				heading="I am building a website for"
				subHeading="Let’s get started by choosing the type of website you’re building."
			/>
			{ /* Types */ }
			<div className="min-h-[48px]">
				<BusinessTypes />
			</div>
			<Divider />
			{ /* Footer */ }
			<NavigationButtons
				onClickContinue={ handleClickContinue }
				disableContinue={ ! businessType || '' === businessType }
			/>
		</div>
	);
};

export default compose(
	withDispatch( ( dispatch ) => {
		const { setNextAIStep, setPreviousAIStep } = dispatch( STORE_KEY );
		return {
			onClickContinue: setNextAIStep,
			onClickPrevious: setPreviousAIStep,
		};
	} )
)( Type );
