import { __, sprintf } from '@wordpress/i18n';
import { Accordion, Badge, Button, Text } from '@bsf/force-ui';
import { Check, ChevronRight, ExternalLink } from 'lucide-react';
import BsfLearnStep from './BsfLearnStep';

/**
 * Component for rendering a learn chapter with steps
 *
 * @param {Object} props - Component props
 * @param {Object} props.chapters - Chapters data object
 * @param {string} props.defaultValue - Default chapter ID to open
 * @param {Function} props.onStepCompletionChange - Callback when step completion status changes
 * @param {Function} props.onLearnHowClick - Callback to open learn how dialog
 * @returns {JSX.Element} - Rendered chapter component
 */
const BsfLearnChapter = ( { chapters, defaultValue, onStepCompletionChange, onLearnHowClick } ) => {

	const handleLearnHowClick = ( event, url ) => {
		event.stopPropagation();
		if ( url ) {
			window.open( url, '_blank', 'noopener,noreferrer' );
			return;
		}

		console.info( 'Empty or missing URL!!!' );
	};

	return (
		<Accordion
			type="boxed"
			autoClose={ true }
			defaultValue={ defaultValue }
		>
			{ chapters.map( ( chapter ) => {
				const {
					id,
					title,
					description,
					url,
					steps,
				} = chapter;

				const totalStepsCount = steps.length;
				const completedStepsCount = steps.filter( ( step ) => step.completed ).length;
				const isCompleted = totalStepsCount === completedStepsCount;

				const getBadgeColor = () => {
					if ( isCompleted ) {
						return 'green';
					}
					if ( completedStepsCount > 0 ) {
						return 'blue';
					}
					return 'gray';
				};

				return (
					<Accordion.Item
						key={ id }
						className="bg-background-primary border-0.5 [&:hover>h3]:bg-transparent rounded-lg overflow-hidden [&:has([aria-expanded='true'])]:shadow-xs transition-all duration-200 ease-in-out"
						value={ id }
					>
						<Accordion.Trigger className="group p-3 sm:p-4 hover:bg-transparent [&>svg]:hidden [&>div]:flex-grow [&[aria-expanded='true']_.learn-chevron-right]:rotate-90 [&[aria-expanded='true']_.learn-more-btn]:flex">
							<div className="flex items-center gap-2 sm:gap-3 flex-1">
								<ChevronRight
									className="learn-chevron-right transition-transform duration-200 ease-in-out"
									size={ 20 }
								/>

								<div className="flex-1 text-left">
									<Text size={ 14 } className="sm:text-base" weight={ 600 }>
										{ title }
									</Text>
								</div>

								{ url && (
									<span
										className="hover:underline underline-offset-2 learn-more-btn hidden transition-all cursor-pointer text-link-primary outline-link-primary items-center gap-1 text-xs px-2 py-1"
										onClick={ ( event ) => handleLearnHowClick( event, url ) }
										role="link"
										tabIndex={ 0 }
										onKeyDown={ ( e ) => {
											if ( e.key === 'Enter' || e.key === ' ' ) {
												handleLearnHowClick( e, url );
											}
										} }
									>
										<span className="hidden sm:inline">
											{ __( 'Learn how', 'ultimate-addons-for-gutenberg' ) }
										</span>
										<ExternalLink size={ 16 } strokeWidth={ 1.25 } />
									</span>
								) }

								<Badge
									className="relative overflow-hidden w-14 sm:w-[62px] text-xs"
									label={
										<>
											<span className="sr-only">
												{ sprintf(
													// translators: %1$d is the number of completed steps, %2$d is the total number of steps.
													__( '%1$d of %2$d steps completed', 'ultimate-addons-for-gutenberg' ),
													completedStepsCount,
													totalStepsCount
												) }
											</span>

											<span className="flex items-center">
												{ isCompleted && <Check size={ 12 } /> }
												<span className="px-1 relative z-10">
													{ completedStepsCount }/{ totalStepsCount }
												</span>
											</span>

											<span
												className="absolute h-full top-0 left-0 bg-[#BAE6FD]/40 transition-[width] duration-300 ease-in-out"
												style={ {
													width: `${ ( completedStepsCount / totalStepsCount ) * 100 }%`,
												} }
											/>
										</>
									}
									variant={ getBadgeColor() }
								/>
							</div>
						</Accordion.Trigger>

						<Accordion.Content className="overflow-visible [&>div]:p-0">
							{ description && (
								<Text
									className="px-3 sm:px-4 ml-7 mr-0 sm:mx-8 -mt-2 pb-4 max-w-full sm:max-w-[72%]"
									size={ 14 }
									color="secondary"
									weight={ 400 }
								>
									{ description }
								</Text>
							) }

							<span className="block w-full h-[0.5px] bg-border-subtle" />

							<div className="px-3 sm:px-4 flex flex-col bg-[#FCFCFD]">
								{ steps.map( ( step, index ) => (
									<BsfLearnStep
										key={ step.id }
										step={ step }
										chapterId={ id }
										isLast={ index === steps.length - 1 }
										onCompletionChange={ onStepCompletionChange }
										onLearnHowClick={ onLearnHowClick }
									/>
								) ) }
							</div>
						</Accordion.Content>
					</Accordion.Item>
				)
			} ) }
		</Accordion>
	);
};

export default BsfLearnChapter;
