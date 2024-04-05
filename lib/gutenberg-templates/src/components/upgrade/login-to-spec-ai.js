import { __ } from '@wordpress/i18n';
import { useCallback, useState } from '@wordpress/element';
import { ArrowSmallRightIcon } from '@heroicons/react/24/outline';
import Button from './../reusable/button/button';
import { SpectraLogo, StLogo } from '../ui/icons';
import apiFetch from '@wordpress/api-fetch';
import { useDispatch } from '@wordpress/data';
import { STORE_KEY } from '../../store';
import { clearSessionStorage } from '../../utils/helpers';
import LoadingSpinner from '../reusable/loading-spinner/loading-spinner';

const { images, spec_ai_auth_url: specAiUrl } = ast_block_template_vars;

const LoginToSpecAi = () => {
	const { toggleSkipZipAIOnboarding, toggleConnectZipAI } = useDispatch( STORE_KEY );
	const [ isLoading, setIsLoading ] = useState( false );

	const saveSkipZipAIOnboarding = useCallback( async () => {
		if ( isLoading ) {
			return;
		}
		setIsLoading( true );

		const formData = new window.FormData();
		formData.append( 'action', 'ast_skip_zip_ai_onboarding' );
		formData.append(
			'security',
			ast_block_template_vars.skip_zip_ai_onboarding_nonce
		);

		try {
			const response = await apiFetch( {
				url: ast_block_template_vars.ajax_url,
				method: 'POST',
				body: formData,
			} );
			if ( response.success ) {
				toggleSkipZipAIOnboarding();
			} else {
				console.group( 'Onboarding Skip Failed!' );
				console.log( response );
				console.groupEnd();
			}
		} catch ( error ) {
			console.group( 'Onboarding Skip Failed!' );
			console.error( error );
			console.groupEnd();
		} finally {
			setIsLoading( false );
		}
	}, [] );

	const handleGetStarted = async () => {
		await saveSkipZipAIOnboarding();
		window.location.href = specAiUrl;
	};

	const handleClickLater = async () => {
		toggleConnectZipAI();
		clearSessionStorage( 'ast-import' );
		await saveSkipZipAIOnboarding();
	};

	const getLogo = useCallback( () => {
		if (
			'active' === ast_block_template_vars.astra_sites_status ||
			'active' === ast_block_template_vars.astra_sites_pro_status
		) {
			return <StLogo className="w-10 h-10" />;
		}
		return <SpectraLogo className="w-10 h-10" />;
	}, [] );

	return (
		<div
			className="relative h-full w-full"
			style={ {
				backgroundImage: `url('${ images }background.png')`,
			} }
		>
			<div className="spectra-ai absolute inset-0 grid grid-cols-1 grid-rows-1 place-items-center bg-background-tertiary/[0.85] backdrop-blur-[6px] z-[1]">
				<div className="p-10 flex flex-col gap-8 max-w-[560px] border border-solid border-border-primary rounded-lg shadow-small bg-white">
					<div className="space-y-5">
						<div className="space-y-2">
							{ getLogo() }
							<h4 className="text-[2rem] font-semibold leading-[2.625rem]">
								{ __(
									'Access Template Kits Library',
									'ast-block-templates'
								) }
							</h4>
							<p className="text-base font-normal leading-6 text-body-text">
								{ __(
									'Get access to our library of hundreds of pixel-perfect, designer-made templates by creating a free account.',
									'ast-block-templates'
								) }
							</p>
						</div>
					</div>
					<div className="flex flex-col md:flex-row flex-nowrap md:flex-wrap justify-start items-center gap-2">
						<Button
							variant="primary"
							hasSuffixIcon
							className="w-full md:w-fit min-w-[10.25rem]"
							onClick={ handleGetStarted }
						>
							{
								isLoading ? (
									<LoadingSpinner />
								) : (
									<>
										<span>Get Started</span>
										<ArrowSmallRightIcon className="w-6 h-6" />
									</>
								)
							}
						</Button>
						<Button
							variant="link"
							className="text-secondary-text w-full md:w-fit min-w-[5rem]"
							onClick={ handleClickLater }
						>
							I’ll do it later
						</Button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default LoginToSpecAi;
