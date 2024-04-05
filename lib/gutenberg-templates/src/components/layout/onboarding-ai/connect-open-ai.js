import Button from '../../reusable/button/button';
import { ArrowRightIcon, PlusIcon } from '@heroicons/react/24/outline';
import Heading from './heading';
import { useForm } from 'react-hook-form';
import { STORE_KEY } from '../../../store';
import { useEffect, useMemo } from '@wordpress/element';
import { useSelect } from '@wordpress/data';
// import apiFetch from '@wordpress/api-fetch';
import { SpectraLogo, StLogo, ZipWPLogo } from '../../ui/icons';
import Divider from '../../reusable/divider/divider';

const {
	/* site_url: siteUrl, */
	spec_ai_auth_url: specAiUrl,
	// spec_ai_signup_url: specAiSignUpUrl,
} = ast_block_template_vars;

const ConnectOpenAI = () => {
	const { token } = useSelect( ( select ) => {
		const { getAIStepData } = select( STORE_KEY );
		return getAIStepData();
	} );
	const {
		handleSubmit,
		setFocus,
	} = useForm( { defaultValues: { token } } );

	const handleSubmitForm = () => {
		window.location.href = specAiUrl;
	};

	const handleClickGetStarted = () => {
		// window.location.href = specAiSignUpUrl;
		window.location.href = specAiUrl;
	};

	useEffect( () => {
		setFocus( 'apiKey' );
	}, [ setFocus ] );

	/* 	const doItLater = async () => {
		try {
			await apiFetch( {
				path: `${ siteUrl }/wp-json/gutenberg-templates/v1/do-it-later`,
				method: 'GET',
				headers: {
					'X-WP-Nonce': ast_block_template_vars.rest_api_nonce,
				},
			} );
			onLater();
		} catch ( error ) {
			// Do nothing
			console.error( error );
		}

		return 0;
	}; */

	const features = [
		{
			icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
				<g clipPath="url(#clip0_2919_32447)">
					<path d="M13.2617 1.47461C13.2617 0.787597 12.6875 0.203125 12.0005 0.203125C11.3135 0.203125 10.729 0.787597 10.729 1.47461V4.60205C10.729 5.28906 11.3135 5.86328 12.0005 5.86328C12.6875 5.86328 13.2617 5.28906 13.2617 4.60205V1.47461ZM16.4199 5.86328C15.9482 6.34521 15.9482 7.16553 16.4405 7.65771C16.9121 8.1294 17.7426 8.1294 18.2246 7.63721L20.3676 5.49414C20.8496 5.02247 20.8394 4.1919 20.3472 3.69971C19.8755 3.21777 19.0449 3.23828 18.563 3.72021L16.4199 5.86328ZM5.76611 7.63721C6.24805 8.1294 7.07861 8.1294 7.55029 7.65771C8.04248 7.16553 8.04248 6.34521 7.57081 5.86328L5.43799 3.72021C4.95605 3.23828 4.12549 3.21777 3.65381 3.69971C3.16162 4.18164 3.16162 5.01221 3.63331 5.48388L5.76611 7.63721ZM19.9575 22.3925C20.5727 23.018 21.6186 23.0078 22.2236 22.3925C22.8287 21.767 22.8287 20.752 22.2236 20.1265L12.4927 10.3237C11.8774 9.7085 10.8315 9.7085 10.2266 10.3237C9.61133 10.9492 9.62158 11.9644 10.2266 12.5796L19.9575 22.3925ZM1.39795 10.7954C0.710938 10.7954 0.136719 11.3696 0.136719 12.0566C0.136719 12.7437 0.710938 13.3179 1.39795 13.3179H4.52539C5.2124 13.3179 5.79688 12.7437 5.79688 12.0566C5.79688 11.3696 5.2124 10.7954 4.52539 10.7954H1.39795ZM22.5927 13.3179C23.2797 13.3179 23.8643 12.7437 23.8643 12.0566C23.8643 11.3696 23.2797 10.7954 22.5927 10.7954H19.4756C18.7886 10.7954 18.204 11.3696 18.204 12.0566C18.204 12.7437 18.7886 13.3179 19.4756 13.3179H22.5927ZM14.4409 15.2045L11.2417 11.9951C10.9853 11.749 10.8931 11.4312 11.1494 11.1851C11.375 10.9595 11.7031 11.0415 11.9595 11.2979L15.1382 14.4868L14.4409 15.2045ZM3.63331 18.5986C3.15137 19.0805 3.14111 19.9111 3.61279 20.3828C4.09472 20.875 4.92529 20.8853 5.40722 20.4136L7.55029 18.2705C8.03222 17.7886 8.04248 16.9682 7.57081 16.4863C7.08887 16.0043 6.25831 15.9941 5.77637 16.4659L3.63331 18.5986ZM13.2617 19.5215C13.2617 18.8345 12.6875 18.25 12.0005 18.25C11.3135 18.25 10.729 18.8345 10.729 19.5215V22.6387C10.729 23.3257 11.3135 23.9102 12.0005 23.9102C12.6875 23.9102 13.2617 23.3257 13.2617 22.6387V19.5215Z" fill="#2563EB" />
				</g>
				<defs>
					<clipPath id="clip0_2919_32447">
						<rect width="24" height="24" fill="white" />
					</clipPath>
				</defs>
			</svg>,
			title: 'Craft Compelling Content',
			description: 'With our AI, you can effortlessly create persuasive and engaging copy that resonates with your audience.',
		},
		{
			icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d="M19.4666 2.3999C20.6448 2.3999 21.5999 3.34194 21.5999 4.50401L21.5999 8.09583C21.5999 9.2579 20.6448 10.1999 19.4666 10.1999H16.2666C15.0884 10.1999 14.1332 9.2579 14.1332 8.09583L14.1332 4.50401C14.1332 3.34194 15.0884 2.3999 16.2666 2.3999L19.4666 2.3999Z" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
				<path d="M4.53323 2.3999C3.35503 2.3999 2.3999 3.34194 2.3999 4.50401L2.39991 8.09583C2.39991 9.2579 3.35504 10.1999 4.53324 10.1999H7.73324C8.91145 10.1999 9.86658 9.2579 9.86658 8.09583L9.86657 4.50401C9.86657 3.34194 8.91144 2.3999 7.73323 2.3999L4.53323 2.3999Z" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
				<path d="M19.4666 13.7999C20.6448 13.7999 21.5999 14.742 21.5999 15.9041V19.4958C21.5999 20.6579 20.6448 21.5999 19.4666 21.5999H16.2666C15.0884 21.5999 14.1332 20.6579 14.1332 19.4958L14.1332 15.9041C14.1332 14.742 15.0884 13.7999 16.2666 13.7999H19.4666Z" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
				<path d="M4.53324 13.7999C3.35504 13.7999 2.39991 14.742 2.39991 15.9041L2.39991 19.4958C2.39991 20.6579 3.35504 21.5999 4.53325 21.5999H7.73325C8.91145 21.5999 9.86658 20.6579 9.86658 19.4958L9.86657 15.9041C9.86657 14.742 8.91145 13.7999 7.73324 13.7999H4.53324Z" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
			</svg>,
			title: 'AI-Powered Block Patterns',
			description: 'Our AI can personalize and customize the block patterns and section templates to tailor them to your website\'s unique needs.',
		},
		{
			icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
				<g clipPath="url(#clip0_2919_32460)">
					<path d="M24 12C24 5.376 18.624 0 12 0C5.376 0 0 5.376 0 12C0 18.624 5.376 24 12 24C18.624 24 24 18.624 24 12ZM12 1.212C17.964 1.212 22.788 6.036 22.788 12C22.788 17.964 17.964 22.788 12 22.788C6.036 22.788 1.212 17.964 1.212 12C1.212 6.036 6.036 1.212 12 1.212ZM9.612 17.784L5.952 7.932C6.54 7.896 7.212 7.836 7.212 7.836C7.728 7.776 7.668 6.624 7.14 6.648C7.14 6.648 5.592 6.768 4.584 6.768C4.404 6.768 4.188 6.768 3.96 6.756C5.688 4.152 8.64 2.436 12 2.436C14.508 2.436 16.788 3.384 18.492 4.944C17.772 4.848 16.752 5.364 16.752 6.648C16.752 7.44 17.208 8.112 17.7 8.904C18.072 9.552 18.3 10.368 18.3 11.556C18.3 13.164 16.776 16.932 16.776 16.932L13.524 7.932C14.1 7.896 14.424 7.74 14.424 7.74C14.94 7.68 14.88 6.42 14.364 6.444C14.364 6.444 12.804 6.576 11.796 6.576C10.86 6.576 9.264 6.444 9.264 6.444C8.748 6.42 8.688 7.716 9.204 7.74L10.212 7.836L11.556 11.484L9.612 17.784ZM16.836 20.364L19.968 12C19.968 12 20.772 9.972 20.436 7.428C21.192 8.796 21.564 10.332 21.564 12C21.564 15.552 19.692 18.696 16.836 20.364ZM3.216 8.124L7.8 20.7C4.596 19.14 2.436 15.804 2.436 12C2.436 10.608 2.676 9.324 3.216 8.124ZM12.156 13.56L14.904 21.06C14.004 21.384 13.02 21.564 12 21.564C11.136 21.564 10.308 21.432 9.528 21.204L12.156 13.56Z" fill="#2563EB" />
				</g>
				<defs>
					<clipPath id="clip0_2919_32460">
						<rect width="24" height="24" fill="white" />
					</clipPath>
				</defs>
			</svg>,
			title: 'WordPress Wizardry',
			description: 'Got questions? Our AI has the answers. Whether it\'s troubleshooting or customizing your site, we got your back.',
		},
		{
			icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d="M2 3.97434C2 2.88394 2.89543 2 4 2H20C21.1046 2 22 2.88394 22 3.97434V20.0257C22 21.1161 21.1046 22 20 22H4C2.89543 22 2 21.1161 2 20.0257V3.97434Z" stroke="#2563EB" strokeWidth="1.7" />
				<path d="M4.35748 5.44157C4.35748 4.89637 4.8052 4.4544 5.35748 4.4544H18.6426C19.1949 4.4544 19.6426 4.89637 19.6426 5.44157V7.94377C19.6426 8.48897 19.1949 8.93094 18.6426 8.93094H5.35748C4.8052 8.93094 4.35748 8.48897 4.35748 7.94377V5.44157Z" stroke="#2563EB" strokeWidth="1.7" />
				<path d="M8.29303 11.1402C8.84531 11.1402 9.29303 11.5822 9.29303 12.1274L9.29303 18.7411C9.29303 19.2863 8.84531 19.7283 8.29303 19.7283H5.35742C4.80514 19.7283 4.35742 19.2863 4.35742 18.7411L4.35742 12.1274C4.35742 11.5822 4.80514 11.1402 5.35742 11.1402H8.29303Z" stroke="#2563EB" strokeWidth="1.7" />
				<path d="M18.6426 11.1402C19.1949 11.1402 19.6426 11.5822 19.6426 12.1274V18.7411C19.6426 19.2863 19.1949 19.7283 18.6426 19.7283H12.3755C11.8233 19.7283 11.3755 19.2863 11.3755 18.7411V12.1274C11.3755 11.5822 11.8233 11.1402 12.3755 11.1402H18.6426Z" stroke="#2563EB" strokeWidth="1.7" />
			</svg>,
			title: 'Personalized Templates',
			description: 'Say goodbye to generic designs and say hello to our AI-personalized page templates, tailored just for you.',
		},
		{
			icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d="M9.5999 14.9999L6.5999 11.9999L9.5999 8.9999M14.3999 8.9999L17.3999 11.9999L14.3999 14.9999M4.7999 21.5999C3.47442 21.5999 2.3999 20.5254 2.3999 19.1999V4.7999C2.3999 3.47442 3.47442 2.3999 4.7999 2.3999H19.1999C20.5254 2.3999 21.5999 3.47442 21.5999 4.7999V19.1999C21.5999 20.5254 20.5254 21.5999 19.1999 21.5999H4.7999Z" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
			</svg>,
			title: 'Generate Custom Code',
			description: 'No more struggling with complex coding issues. Our AI can generate custom code, functions, and CSS tailored to your needs.',
		},
		{
			icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d="M2.9999 7.7999H20.9999M17.9999 11.9999H5.9999M13.1999 16.7999H5.9999M5.9999 21.5999H17.9999C19.9881 21.5999 21.5999 19.9881 21.5999 17.9999V5.9999C21.5999 4.01168 19.9881 2.3999 17.9999 2.3999H5.9999C4.01168 2.3999 2.3999 4.01168 2.3999 5.9999V17.9999C2.3999 19.9881 4.01168 21.5999 5.9999 21.5999Z" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
			</svg>,
			title: 'Custom Pages with AI',
			description: 'With our AI by your side, you can create beautiful, 100% custom web pages without the need for any design or coding skills.',
		},
	];

	const getFeatures = ( { icon, title, description } ) => {
		return (
			<div className="flex w-[48%]">
				<div className="mr-3">
					{ icon }
				</div>
				<div className="space-y-2">
					<p className="m-0 text-base font-semibold text-heading-text">{ title }</p>
					<p className="m-0 text-sm font-normal text-body-text">{ description }</p>
				</div>
			</div>
		);
	};

	const renderFeatures = useMemo( () => {
		// In each row there will be 2 features.
		const rows = [];
		let row = [];
		for ( let i = 0; i < features.length; i++ ) {
			row.push( features[ i ] );
			if ( row.length === 2 ) {
				rows.push( row );
				row = [];
			}
		}

		// If there are any remaining features, add them to the last row.
		if ( row.length > 0 ) {
			rows.push( row );
		}

		return rows.map( ( rowItem, indx ) => (
			<>
				<div className="flex justify-between items-center gap-12">
					{ rowItem.map( ( feature ) => getFeatures( feature ) ) }
				</div>
				{ ( indx < rows.length - 1 ) && ( <Divider className="w-full" /> ) }
			</>
		) );
	}, [] );

	const getLogo = () => {
		if (
			'active' === ast_block_template_vars.astra_sites_status ||
			'active' === ast_block_template_vars.astra_sites_pro_status
		) {
			return <StLogo className="w-10 h-10" />;
		}
		return <SpectraLogo className="w-10 h-10" />;
	};

	return (
		<form
			className="max-w-container mx-auto flex flex-col gap-10 pb-5 md:pb-10 xl:pb-20"
			onSubmit={ handleSubmit( handleSubmitForm ) }
		>
			{ /* Brand Logos */ }
			<div className="flex items-center justify-center gap-3">
				{ getLogo() }
				<PlusIcon
					className="w-4 h-4 text-icon-secondary"
					strokeWidth="2"
				/>
				<ZipWPLogo className="w-10 h-10" />
			</div>
			{ /* Heading */ }
			<div className="flex flex-col items-center justify-center gap-6">
				<Heading
					className="text-center"
					heading={
						<>
							Build 10x Faster with <br />
							Starter Templates & ZipWP
						</>
					}
				/>
				<Button type="button" variant="ai-primary" onClick={ handleClickGetStarted } hasSuffixIcon>
					<span>Get Started with Free 1000 Credits</span>
					<ArrowRightIcon className="w-5 h-5" />
				</Button>
				<p className="m-0 text-base font-normal">
					Already have one?{ ' ' }
					<Button
						type="submit"
						variant="blank"
						className="font-normal underline text-accent-ai p-0 inline-flex"
					>
						Connect an Account
					</Button>
				</p>
			</div>
			{ /* Features */ }
			<div className="border border-solid border-border-primary rounded-lg gap-8 flex flex-wrap py-11 px-10 shadow-medium">
				{ renderFeatures }
			</div>
		</form>
	);
};

export default ConnectOpenAI;
