import { __ } from '@wordpress/i18n';
import { Button, ProgressSteps, Topbar } from '@bsf/force-ui';
import { X } from 'lucide-react';
import { useRouterSync, useStore } from '../store';
import { saveOnboardingState } from '../utils/functions';
import Logo from './Logo';

const { exit } = window.oneOnboardingData || {};

const Header = ( { screens = [] } ) => {
	const { currentScreen, navigateToScreen } = useRouterSync();
	const { state } = useStore();

	const handleExitClick = async () => {
		// Set flag to prevent duplicate call on beforeunload
		if ( window.oneOnboardingData ) {
			window.oneOnboardingData.isExiting = true;
		}

		try {
			await saveOnboardingState( {
				...state,
				exitedEarly: currentScreen !== 'done',
			} );
		} catch ( error ) {
			console.error( 'Failed to save state on exit:', error );
		}

		// Navigate to exit URL
		setTimeout( () => {
			window.location.href = exit?.url || '';
		}, 250 );
	};

	const getScreenLabel = ( screen ) => {
		return screen?.id?.replace( /-/g, ' ' );
	};

	return (
		<Topbar className="bg-background-primary grid grid-cols-2 md:grid-cols-[1fr_4fr_1fr]">
			<Topbar.Left>
				<Topbar.Item>
					<Logo />
				</Topbar.Item>
			</Topbar.Left>

			<Topbar.Middle align="center" className="hidden md:flex">
				<Topbar.Item>
					<ProgressSteps
						currentStep={
							screens.findIndex(
								( screen ) => screen.id === currentScreen
							) + 1
						}
						size="md"
						type="inline"
						variant="number"
						completedVariant="number"
					>
						{ screens
							.filter( ( screen ) => screen.id !== 'done' )
							.map( ( screen ) => (
								<ProgressSteps.Step
									key={ screen.id }
									onClick={ () =>
										navigateToScreen( screen.id )
									}
									onKeyDown={ ( event ) => {
										if ( event.key === 'Enter' ) {
											event.preventDefault();
											navigateToScreen( screen.id );
										}
									} }
									aria-label={ getScreenLabel( screen ) }
									aria-current={
										currentScreen === screen.id
											? 'step'
											: undefined
									}
									className="cursor-pointer hover:bg-background-secondary transition-colors duration-200 rounded-full focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-brand-primary-600"
									tabIndex={ 0 }
								/>
							) ) }
					</ProgressSteps>
				</Topbar.Item>
			</Topbar.Middle>

			<Topbar.Right className="justify-end">
				<Topbar.Item>
					<Button
						icon={ <X className="size-4" /> }
						iconPosition="right"
						size="xs"
						variant="ghost"
						onClick={ handleExitClick }
					>
						{ exit?.label ||
							__( 'Exit Guided Setup', 'one-onboarding' ) }
					</Button>
				</Topbar.Item>
			</Topbar.Right>
		</Topbar>
	);
};

export default Header;
