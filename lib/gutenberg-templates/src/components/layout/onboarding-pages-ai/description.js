import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Button from '../../reusable/button/button';
import Textarea from '../../reusable/textarea/textarea';
import { WandIcon } from '../../ui/icons';
import { Fragment } from '@wordpress/element';
import Header from './header';
import { useDispatch } from '@wordpress/data';
import { STORE_KEY } from '../../../store';

const Description = () => {
	const { setPreviousOnboardingPagesAIStep, setNextOnboardingPagesAIStep } = useDispatch( STORE_KEY );

	return (
		<Fragment>
			<Header />
			<div className="w-full max-w-container px-10 lg:px-16 xl:px-20 py-12 mx-auto pt-10 space-y-8">
				<div className="space-y-3">
					<h4 className="m-0">
						Please describe this page in few words
					</h4>
					<p className="m-0 leading-6 text-base text-body-text">
						Be as descriptive as you can. Share your vision for this page.
					</p>
				</div>

				<div className="space-y-3">
					<Textarea
						// ref={textArea}
						name="description"
						// error={errors.description}
						className="mt-8 w-full placeholder-[#9CA3secondary-text"
						placeholder="On this page, I want to write about the founder of this business. Her name is Amber Kardile. She started this company 6 years ago. Her background is in service industry and education in psychology."
						validations={ {
							required: 'Description is required',
						} }
						rows="5"
					/>
					<div className="flex items-center gap-2 mt-2 text-accent-spectra cursor-pointer">
						<WandIcon className="w-5 h-5 transition duration-150 ease-in-out" />
						<span className="font-semibold text-sm transition duration-150 ease-in-out">
							Write Using AI
						</span>
					</div>
				</div>

				<div>
					<div className="flex flex-row gap-4">
						<Button
							variant="primary"
							hasSuffixIcon
							className="w-3/4 rounded-md"
							onClick={ setNextOnboardingPagesAIStep }
						>
							<span>Start Building (84 Credits)</span>
							<ArrowRightIcon className="w-4 h-4" />
						</Button>
						<Button
							variant="white"
							className="w-1/4 rounded-md"
							onClick={ setPreviousOnboardingPagesAIStep }
						>
							<span>Previous Step</span>
						</Button>
					</div>

					<div className="flex items-center justify-center mt-3 w-3/4">
						<span className="">968 Credits remaining</span>
					</div>
				</div>
			</div>
		</Fragment>
	);
};

export default Description;
