import { withDispatch } from '@wordpress/data';
import { memo } from '@wordpress/element';
import { compose } from '@wordpress/compose';
import { AIStartupGetStarted } from '../layout/content/ai-startups';

const { images } = ast_block_template_vars;

const ConnectToZipAi = ( {
	updateCurrentScreen,
	toggleOnboardingAIStep,
} ) => {
	const handleDoItLater = ( event ) => {
		event.preventDefault();

		const formData = new window.FormData();
		formData.append( 'action', 'ast_skip_zip_ai_onboarding' );
		formData.append(
			'security',
			ast_block_template_vars.skip_zip_ai_onboarding_nonce
		);

		wp.apiFetch( {
			url: ast_block_template_vars.ajax_url,
			method: 'POST',
			body: formData,
		} ).then( ( response ) => {
			if ( response.success ) {
				updateCurrentScreen( 'all-blocks-grid' );
			} else {
				console.log( 'Onboarding Skip Failed!' );
			}
		} );
	};

	const handleGetStarted = ( event ) => {
		toggleOnboardingAIStep( true );
		handleDoItLater( event );
	};

	const render = () => {
		return (
			<AIStartupGetStarted
				onClickPrimary={ handleGetStarted }
				onClickSecondary={ handleDoItLater }
			/>
		);
	};

	return (
		<div
			className="relative h-full w-full"
			style={ {
				backgroundImage: `url('${ images }background.png')`,
			} }
		>
			{ render() }
		</div>
	);
};

export default compose(
	withDispatch( ( dispatch ) => {
		const {
			setAllPages,
			setSitePreview,
			setCurrentScreen,
			setFilterPagesBySearchTerm,
			setFilterBlocksBySearchTerm,
			toggleOnboardingAIStep,
		} = dispatch( 'ast-block-templates' );
		return {
			updateCurrentScreen( currentScreen ) {
				setAllPages( [] );
				setSitePreview( {} );
				setFilterPagesBySearchTerm( '' );
				setFilterBlocksBySearchTerm( '' );
				setCurrentScreen( currentScreen );
			},
			toggleOnboardingAIStep,
		};
	} )
)( memo( ConnectToZipAi ) );
