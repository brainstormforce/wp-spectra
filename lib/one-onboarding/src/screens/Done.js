import { useEffect } from 'react';
import { __, sprintf } from '@wordpress/i18n';
import { Button, Text } from '@bsf/force-ui';
import { Check, ChevronRight } from 'lucide-react';
import { Layout } from '@/components';
import { useStore } from '@/store';
import { submitOnboardingCompletion } from '@/utils/functions';

const { product, screens, doneImageUrl } = window.oneOnboardingData || {};
const screen = screens?.done || {};

const Done = () => {
	const { state } = useStore();

	useEffect( () => {
		const handleOnboardingCompletion = async () => {
			try {
				await submitOnboardingCompletion( {
					...state,
					starterTemplatesBuilder: '',
				} );
			} catch ( error ) {
				console.error(
					'Failed to submit onboarding completion:',
					error
				);
			}
		};

		handleOnboardingCompletion();
	}, [] );

	return (
		<Layout>
			<div className="flex flex-col-reverse md:flex-row gap-2 items-center">
				<div className="flex flex-col gap-4">
					<Layout.Header
						title={
							screen?.heading ||
							sprintf(
								// translators: %s is the product name
								__(
									'You’re Ready to Build with %s!',
									'one-onboarding'
								),
								product?.name
							)
						}
						description={
							screen?.description ||
							__(
								"You're all set to create a website that looks great, loads fast, and reflects your vision, without hassle.",
								'one-onboarding'
							)
						}
					/>

					<div>
						<Text className="text-text-primary font-semibold text-sm">
							{ screen?.itemsHeading ||
								__(
									'What You Can Do Next:',
									'one-onboarding'
								) }
						</Text>
						<ul className="divide-y divide-gray-200 list-none pl-0 space-y-2 my-2">
							{ screen?.items?.map( ( item, index ) => (
								<li
									key={ index }
									className="flex items-start space-x-2 text-field-label text-sm font-medium"
								>
									<Check className="mt-0.5 size-4 text-brand-primary-600" />
									<span>{ item }</span>
								</li>
							) ) }
						</ul>
					</div>
				</div>

				{ doneImageUrl && (
					<img
						className="mx-5 p-2 w-[8.625rem] h-[8.625rem]"
						src={ doneImageUrl }
						alt={ __( 'Done', 'one-onboarding' ) }
					/>
				) }
			</div>

			<hr className="my-6 w-full border-b-0 border-x-0 border-t border-solid border-t-border-subtle" />

			<div className="flex items-center justify-between gap-3 pt-2">
				<div className="flex gap-3">
					{ screen?.cta2 && (
						<Button
							variant="outline"
							onClick={ () => {
								window.location.href =
									screen?.cta2?.url ?? '#/done';
							} }
						>
							{ screen?.cta2?.label || 'CTA 2' }
						</Button>
					) }
					{ screen?.cta3 && (
						<Button
							className="text-text-tertiary"
							icon={ <ChevronRight /> }
							iconPosition="right"
							variant="ghost"
							onClick={ () => {
								window.open(
									screen?.cta3?.url ?? '#/done',
									'_blank'
								);
							} }
						>
							{ screen?.cta3?.label || 'CTA 3' }
						</Button>
					) }
				</div>

				{ screen?.cta1 && (
					<Button
						onClick={ () => {
							window.location.href =
								screen?.cta1?.url ?? '#/done';
						} }
					>
						{ screen?.cta1?.label || 'CTA 1' }
					</Button>
				) }
			</div>
		</Layout>
	);
};

export default Done;
