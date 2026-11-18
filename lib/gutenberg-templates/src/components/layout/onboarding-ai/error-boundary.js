import { __, sprintf } from '@wordpress/i18n';
import Button from '../../reusable/button/button';
import { useDispatch } from '@wordpress/data';
import { ExclamationTriangleColorfulIcon } from '../../ui/icons';
import { Component } from 'react';
import { STORE_KEY } from '../../../store';
class ErrorBoundary extends Component {
	constructor( props ) {
		super( props );
		this.state = { hasError: false };
	}

	static getDerivedStateFromError() {
		// Update state so the next render will show the fallback UI.
		return { hasError: true };
	}

	componentDidCatch( error, errorInfo ) {
		console.error( 'ErrorBoundary caught an error', error, errorInfo );
	}

	retryStep = () => {};
	handleClosePopUop = ( event ) => {
		event?.preventDefault();
		event?.stopPropagation();
		this.props.toggleOnboardingAIStep();
	};
	render() {
		if ( this.state.hasError ) {
			return (
				<div className="h-screen w-full bg-st-background-secondary grid grid-cols-1 grid-rows-[80px_1fr]">
					<div className="grid grid-cols-1 auto-rows-min gap-4 w-full max-w-[590px] my-32 mx-auto text-center px-5 lg:px-0">
						<div className="space-y-3">
							<ExclamationTriangleColorfulIcon className="text-center space-y-3 w-6 h-6 mx-auto " />
							<h5>
								{ __(
									'Oops , Something went wrong!',
									'ast-block-template'
								) }
							</h5>
							<p
								className="text-zip-body-text"
								dangerouslySetInnerHTML={ {
									__html: sprintf(
										/* translators: %1$s: Contact us link */
										__(
											'There was a problem processing the request. Please try again. If this error continues please contact our <a href="%1$s">support team</a>.',
											'ast-block-templates'
										),
										'https://wpastra.com/contact'
									),
								} }
							></p>
						</div>
						<div className="flex justify-center space-x-4">
							<Button
								type="button"
								variant="primary"
								className="mt-4 w-fit mx-auto"
								isSmall
								onClick={ this.handleClosePopUop }
							>
								{ __(
									'Back to Main Screen',
									'ast-block-template'
								) }
							</Button>
						</div>
					</div>
				</div>
			);
		}
		return this.props.children;
	}
}

// Functional wrapper component to use the dispatch hook
const ErrorBoundaryWrapper = ( props ) => {
	const { toggleOnboardingAIStep } = useDispatch( STORE_KEY );

	return (
		<ErrorBoundary
			{ ...props }
			toggleOnboardingAIStep={ toggleOnboardingAIStep }
		/>
	);
};

export default ErrorBoundaryWrapper;
