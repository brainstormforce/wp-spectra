import { useEffect } from 'react';
import { withDispatch, useSelect, useDispatch } from '@wordpress/data';
import { compose } from '@wordpress/compose';
import { apiFetch } from '@Helpers';
import { STORE_KEY } from '../../../store';
import Divider from '../../../components/reusable/divider/divider';
import Heading from './heading';
import NavigationButtons from './navigation-buttons';
import LanguageSelection from './language-selection';
import BusinessTypes from './business-types';
import { useForm } from 'react-hook-form';
import Input from '../../../components/reusable/input/input';
import { __ } from '@wordpress/i18n';
import { logError } from '../../reusable/error-toast/handle-error';
import AILayoutContainer from '../../reusable/ai-layout-container';

const BusinessDetails = ( { onClickContinue } ) => {
	const { setSiteLanguageListAIStep, setWebsiteNameAIStep } =
		useDispatch( STORE_KEY );
	const { businessType, siteLanguageList, businessName } = useSelect(
		( select ) => {
			const { getAIStepData } = select( STORE_KEY );
			return getAIStepData();
		}
	);

	const handleClickContinue = () => {
		if ( ! businessType || '' === businessType ) {
			return;
		}

		setWebsiteNameAIStep( watchedBusinessName );
		onClickContinue();
	};

	const getLanguages = async () => {
		try {
			const response = await apiFetch( {
				path: 'zipwp/v1/site-languages',
				method: 'GET',
				headers: {
					'X-WP-Nonce': ast_block_template_vars.rest_api_nonce,
				},
			} );
			setSiteLanguageListAIStep(
				Array.isArray( response?.data ) ? response.data : []
			);
		} catch ( error ) {
			logError( error );
		}
	};

	useEffect( () => {
		if ( siteLanguageList?.length ) {
			return;
		}
		getLanguages();
	}, [ siteLanguageList ] );

	/* Business Name */
	const {
		register,
		formState: { errors },
		setFocus,
		watch,
	} = useForm( { defaultValues: { businessName } } );
	const watchedBusinessName = watch( 'businessName' );

	useEffect( () => {
		setFocus( 'businessName' );
	}, [ setFocus ] );

	return (
		<AILayoutContainer>
			<Heading
				heading="Let's build your website!"
				subHeading="Please share some basic details of the website to get started."
			/>
			<div className="w-full max-w-container flex flex-col gap-8">
				<div className="!space-y-2">
					<h5 className="text-zip-app-heading !text-sm flex !font-medium leading-6 items-center !mb-2">
						{ __( 'Name of the website:', 'ast-block-templates' ) }
					</h5>
					<Input
						className="w-full"
						name="businessName"
						placeholder={ __(
							'Enter name or title of the website',
							'ast-block-templates'
						) }
						register={ register }
						maxLength={ 100 }
						validations={ {
							required: 'Name is required',
							maxLength: 100,
						} }
						error={ errors.businessName }
						height="12"
					/>
				</div>
				<div className="w-full flex items-start justify-start flex-wrap max-[1024px]:flex-col lg:flex-nowrap gap-8">
					<div className="min-h-[48px] lg:w-full lg:flex-1 w-full !space-y-2">
						<h5 className="text-zip-app-heading !text-sm flex !font-medium leading-6 items-center">
							{ __(
								'This website is for:',
								'ast-block-templates'
							) }
						</h5>
						<BusinessTypes />
					</div>
					<div className="min-h-[48px] lg:w-full lg:flex-1 w-full !space-y-2"><LanguageSelection /></div>

				</div>
			</div>
			{ /* Types */ }
			<Divider />
			{ /* Footer */ }
			<NavigationButtons
				onClickContinue={ handleClickContinue }
				disableContinue={ ! businessType || ! watchedBusinessName }
			/>
		</AILayoutContainer>
	);
};

export default compose(
	withDispatch( ( dispatch ) => {
		const { setNextAIStep } = dispatch( STORE_KEY );
		return {
			onClickContinue: setNextAIStep,
		};
	} )
)( BusinessDetails );
