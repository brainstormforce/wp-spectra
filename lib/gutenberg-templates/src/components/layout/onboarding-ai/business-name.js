import { STORE_KEY } from '../../../store';
import Divider from '../../reusable/divider/divider';
import Input from '../../reusable/input/input';
import Heading from './heading';
import NavigationButtons from './navigation-buttons';
import { useForm } from 'react-hook-form';
import { withDispatch, useSelect, useDispatch } from '@wordpress/data';
import { compose } from '@wordpress/compose';
import { useEffect } from '@wordpress/element';

const BusinessName = ( { onClickContinue, onClickPrevious } ) => {
	const { businessName, businessType } = useSelect( ( select ) => {
		const { getAIStepData } = select( STORE_KEY );
		return getAIStepData();
	} );
	const { setWebsiteNameAIStep } = useDispatch( STORE_KEY );
	const websiteType = businessType;
	const websiteTypeName = businessType.toLowerCase();

	const {
		register,
		handleSubmit,
		formState: { errors },
		setFocus,
	} = useForm( { defaultValues: { businessName } } );

	const handleSubmitForm = ( data ) => {
		setWebsiteNameAIStep( data.businessName );
		onClickContinue();
	};

	const getTitle = () => {
		const prefix = 'What is the name of ';
		let title = websiteTypeName;
		let pronoun = 'your ';
		const suffix = '?';

		switch ( websiteType?.toLowerCase() ) {
			case 'person':
				title = 'website';
				break;
			case 'organisation':
				pronoun = 'this ';
				break;
			case 'landing-page':
				pronoun = 'this ';
				break;
			case 'medical':
				pronoun = 'your ';
				title += ' firm';
				break;
			default:
				break;
		}

		return (
			`${ prefix }${ pronoun }${ title }${ suffix }`
		);
	};

	const getSubHeading = () => {
		const prefix = 'Kindly provide details about';
		let pronoun = 'this';
		let suffix = websiteTypeName;

		switch ( websiteType?.toLowerCase() ) {
			case 'business':
				pronoun = 'your';
				break;
			case 'medical':
				pronoun = 'your';
				suffix = 'firm';
				break;
			case 'person':
				pronoun = 'yourself';
				suffix = '';
				break;
			default:
				break;
		}

		return `${ !! prefix ? prefix : '' } ${ !! pronoun ? pronoun : '' }${ ! suffix ? '.' : '' } ${ !! suffix ? `${ suffix }.` : '' }`.trimEnd();
	};

	useEffect( () => {
		setFocus( 'businessName' );
	}, [ setFocus ] );

	return (
		<form className="w-full max-w-container flex flex-col gap-8 pb-10" action="#" onSubmit={ handleSubmit( handleSubmitForm ) }>
			<Heading
				heading={ getTitle() }
				subHeading={ getSubHeading() }
			/>
			<Input
				className="w-full"
				name="businessName"
				placeholder="Enter name"
				register={ register }
				validations={ {
					required: 'Name is required',
				} }
				error={ errors.businessName }
			/>
			<Divider />
			<NavigationButtons
				onClickPrevious={ onClickPrevious }
			/>
		</form>
	);
};

export default compose(
	withDispatch( ( dispatch ) => {
		const { setNextAIStep, setPreviousAIStep } = dispatch( 'ast-block-templates' );
		return {
			onClickContinue: setNextAIStep,
			onClickPrevious: setPreviousAIStep,
		};
	} ),
)( BusinessName );
