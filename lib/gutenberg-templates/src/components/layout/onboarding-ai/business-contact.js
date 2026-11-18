import { useForm } from 'react-hook-form';
import { STORE_KEY } from '../../../store';
import Divider from '../../reusable/divider/divider';
import Input from '../../reusable/input/input';
import Textarea from '../../reusable/textarea/textarea';
import NavigationButtons from './navigation-buttons';
import SocialMediaAdd from '../../reusable/social-media';
import { useEffect, useState, useRef } from '@wordpress/element';
import { withDispatch, useDispatch, useSelect } from '@wordpress/data';
import { compose } from '@wordpress/compose';
import { z as zod } from 'zod';
import { __ } from '@wordpress/i18n';
import StyledText from '../../reusable/styled-text/StyledText';
import AiLayoutContainer from '../../reusable/ai-layout-container';

const EMAIL_VALIDATION_REGEX =
	/^[a-z0-9!'#$%&*+\/=?^_`{|}~-]+(?:\.[a-z0-9!'#$%&*+\/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-zA-Z]{2,}$/i;

const mapSocialUrl = ( list ) => {
	return list.map( ( item ) => {
		const itemType = item?.type ? item?.type : item?.id;
		return {
			type: itemType,
			id: itemType,
			url: item?.url,
		};
	} );
};

const getFilteredSocialMediaList = ( list ) => {
	return list.filter( ( item ) => item.valid );
};

const getValidationSchema = () =>
	zod.object( {
		email: zod
			.string()
			.refine(
				( value ) =>
					value === '' || EMAIL_VALIDATION_REGEX.test( value ),
				{
					message: __(
						'(Please enter a valid email',
						'ast-block-templates'
					),
				}
			),
		address: zod.string().optional(),
	} );

const getValidFormValues = ( formValue ) => {
	const schema = getValidationSchema();

	const validationResult = schema.safeParse( formValue );

	return validationResult?.success
		? validationResult.data
		: {
				...formValue,
				...validationResult.error.issues.reduce( ( acc, error ) => {
					acc[ error.path[ 0 ] ] = '';
					return acc;
				}, {} ),
		  };
};

const BusinessContact = ( {
	onClickContinue,
	onClickPrevious,
	onClickSkip,
} ) => {
	const { businessContact } = useSelect( ( select ) => {
		const { getAIStepData } = select( STORE_KEY );
		return getAIStepData();
	} );

	const { setWebsiteContactAIStep } = useDispatch( STORE_KEY );
	const [ socialMediaList, setSocialMediaList ] = useState(
		mapSocialUrl( businessContact.socialMedia ?? [] )?.map( ( item ) => ( {
			...item,
			valid: true,
		} ) )
	);
	const previousValues = useRef( {
		...businessContact,
		socialMedia: mapSocialUrl( businessContact?.socialMedia ?? [] )?.map(
			( item ) => ( { ...item, valid: true } )
		),
	} );

	const handleOnChangeSocialMedia = ( list ) => {
		setSocialMediaList( list );
	};

	const handleClickSkip = async () => {
		const { socialMedia = [], ...formValue } = previousValues.current;
		const validValues = getValidFormValues( formValue );

		setWebsiteContactAIStep( {
			...validValues,
			socialMedia: mapSocialUrl(
				getFilteredSocialMediaList( socialMedia )
			),
		} );
		onClickSkip();
	};

	const {
		register,
		handleSubmit,
		formState: { errors },
		setFocus,
		watch,
	} = useForm( { defaultValues: { ...businessContact } } );

	const handleSubmitForm = ( data ) => {
		setWebsiteContactAIStep( {
			...data,
			socialMedia: mapSocialUrl( socialMediaList ),
		} );
		onClickContinue();
	};

	// Save inputs before moving to the previous step.
	const handleClickPrevious = async () => {
		const formValue = watch();
		const validValues = getValidFormValues( formValue );

		setWebsiteContactAIStep( {
			...validValues,
			socialMedia: mapSocialUrl(
				getFilteredSocialMediaList( socialMediaList )
			),
		} );
		onClickPrevious();
	};

	useEffect( () => {
		setFocus( 'email' );
	}, [ setFocus ] );

	const { businessName } = useSelect( ( select ) => {
		const { getAIStepData } = select( STORE_KEY );
		return getAIStepData();
	} );

	const hasInvalidSocialMediaUrl = socialMediaList.some(
		( item ) => ! item.valid
	);

	return (
		<AiLayoutContainer
			as="form"
			className="w-full max-w-container flex flex-col gap-4 pb-10"
			action="#"
			onSubmit={ handleSubmit( handleSubmitForm ) }
		>
			{ /* Heading */ }
			<div className="text-zip-app-heading text-[1.75rem] font-semibold leading-9">
				{ __(
					'How can people get in touch with ',
					'ast-block-templates'
				) }
				<StyledText text={ businessName } />?
			</div>
			{ /* Subheading */ }
			<p className="text-zip-body-text text-base font-normal">
				{ __(
					'Please provide the contact information details below. These will be used on the website.',
					'ast-block-templates'
				) }
			</p>
			<div className="space-y-5">
				<div className="flex justify-between gap-x-8 items-start w-full">
					<Input
						className="w-full"
						type="text"
						name="email"
						id="email"
						label="Email"
						placeholder="Your email"
						register={ register }
						error={ errors.email }
						validations={ {
							pattern: {
								value: EMAIL_VALIDATION_REGEX,
								message: __(
									'Please enter a valid email',
									'ast-block-templates'
								),
							},
						} }
						prefixIconClassName="absolute left-4 flex items-center"
					/>
					<Input
						className="w-full"
						type="text"
						name="phone"
						id="phone"
						label="Phone Number"
						placeholder="Your phone number"
						register={ register }
						error={ errors.phone }
						prefixIconClassName="absolute left-4 flex items-center"
					/>
				</div>
				<Textarea
					rows={ 4 }
					name="address"
					id="address"
					label="Address"
					placeholder=""
					register={ register }
					error={ errors.address }
				/>

				<SocialMediaAdd
					list={ socialMediaList }
					onChange={ handleOnChangeSocialMedia }
				/>
			</div>
			<Divider />
			<NavigationButtons
				onClickPrevious={ handleClickPrevious }
				onClickSkip={ handleClickSkip }
				disableContinue={ hasInvalidSocialMediaUrl }
			/>
		</AiLayoutContainer>
	);
};

export default compose(
	withDispatch( ( dispatch ) => {
		const { setNextAIStep, setPreviousAIStep } = dispatch(
			'ast-block-templates'
		);
		return {
			onClickContinue: setNextAIStep,
			onClickPrevious: setPreviousAIStep,
			onClickSkip: setNextAIStep,
		};
	} )
)( BusinessContact );
