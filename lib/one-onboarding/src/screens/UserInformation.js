import { useRef, useEffect, useState, useCallback } from 'react';
import { __, sprintf } from '@wordpress/i18n';
import { Button, Checkbox, Input, Select, TextArea } from '@bsf/force-ui';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { ACTIONS, useRouterSync, useStore } from '@/store';
import { Layout } from '@/components';

const { product, screens } = window.oneOnboardingData || {};
const screen = screens?.[ 'user-info' ] || {};

const sourceOptions = screen?.sourceOptions || {
	wordpress: __( 'WordPress Plugins Directory', 'one-onboarding' ),
	google: __( 'Google Search', 'one-onboarding' ),
	social: __( 'Social Media', 'one-onboarding' ),
	youtube: __( 'YouTube', 'one-onboarding' ),
	friend: __( 'A friend or colleague', 'one-onboarding' ),
	other: __( 'Other', 'one-onboarding' ),
};

// Get benefit options from screen object or use defaults
const benefitOptions = screen?.benefitOptions || {
	'option-1': 'Option 1',
	'option-2': 'Option 2',
	other: 'Other (please specify)',
};

// Get fresh user options from screen object or use defaults
const freshUserOptions = screen?.freshUserOptions || {
	yes: __( "I'm just getting started", 'one-onboarding' ),
	no: __( 'I build websites regularly', 'one-onboarding' ),
};

// Opt-in configuration from screen object.
const optInConfig = screen?.optIn ?? {};

// Input fields configuration
const inputFields = [
	{
		name: 'firstName',
		label: __( 'First Name', 'one-onboarding' ),
	},
	{
		name: 'lastName',
		label: __( 'Last Name', 'one-onboarding' ),
	},
	{
		name: 'email',
		label: __( 'Email', 'one-onboarding' ),
		type: 'email',
		colSpan: 'col-span-2',
	},
];

const UserInformation = () => {
	const formRef = useRef();
	const [ errors, setErrors ] = useState( {} );

	const { navigateToNextScreen, navigateToPreviousScreen, skipScreen } =
		useRouterSync();
	const {
		state: { userInfo },
		dispatch,
	} = useStore();

	const saveUserInfo = useCallback( () => {
		if ( ! formRef.current ) {
			return;
		}

		const formData = new FormData( formRef.current );
		const fromEntries = Object.fromEntries( formData.entries() );

		dispatch( {
			type: ACTIONS.SET_USER_INFO,
			payload: {
				firstName: fromEntries?.firstName ?? userInfo.firstName,
				lastName: fromEntries?.lastName ?? userInfo.lastName,
				email: fromEntries?.email ?? userInfo.email,
			},
		} );
	}, [ dispatch, userInfo.firstName, userInfo.lastName, userInfo.email ] );

	const getFieldError = ( fieldName, value ) => {
		switch ( fieldName ) {
			case 'firstName':
				if ( ! value?.trim() ) {
					return __( 'First name is required', 'one-onboarding' );
				}
				break;
			case 'lastName':
				// Last Name is optional
				break;
			case 'email':
				if ( ! value?.trim() ) {
					return __( 'Email is required', 'one-onboarding' );
				} else if ( ! /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test( value ) ) {
					return __(
						'Please enter a valid email address',
						'one-onboarding'
					);
				}
				break;
		}
		return '';
	};

	const validateField = ( fieldName, value ) => {
		const error = getFieldError( fieldName, value );
		setErrors( ( prev ) => ( { ...prev, [ fieldName ]: error } ) );
		return ! error;
	};

	const handleBlur = ( fieldName ) => ( e ) => {
		validateField( fieldName, e.target.value );
	};

	const validateForm = () => {
		const formData = new FormData( formRef.current );
		const fromEntries = Object.fromEntries( formData.entries() );
		const newErrors = {};

		// Validate all fields using the same logic
		[ 'firstName', 'lastName', 'email' ].forEach( ( fieldName ) => {
			newErrors[ fieldName ] = getFieldError(
				fieldName,
				fromEntries[ fieldName ]
			);
		} );

		setErrors( newErrors );

		// Find first field with error and focus it
		const firstErrorField = [ 'firstName', 'lastName', 'email' ].find(
			( fieldName ) => newErrors[ fieldName ]
		);

		if ( firstErrorField && formRef.current ) {
			const fieldElement = formRef.current.querySelector(
				`#${ firstErrorField }`
			);
			if ( fieldElement ) {
				fieldElement.focus();
			}
		}

		return ! Object.values( newErrors ).some( ( error ) => error );
	};

	// Auto-save user info on component unmount and page reload
	useEffect( () => {
		// Cleanup function - saves on component unmount
		return saveUserInfo;
	}, [ saveUserInfo ] );

	const handleSubmit = async ( e ) => {
		e.preventDefault();

		if ( ! validateForm() ) {
			return;
		}

		saveUserInfo();
		navigateToNextScreen();
	};

	return (
		<Layout>
			<form onSubmit={ handleSubmit } ref={ formRef }>
				<Layout.Header
					title={
						screen?.heading ||
						sprintf(
							// translators: %s is the product name
							__(
								'Get the Best Start with %s',
								'one-onboarding'
							),
							product?.name
						)
					}
					description={
						<>
							{ screen?.description ||
								sprintf(
									// translators: %s is the product name
									__(
										'Get helpful updates, new features, and tips to make your website better, while helping us improve %s.',
										'one-onboarding'
									),
									product?.name
								) }{ ' ' }
							{ screen.privacyPolicy?.url && (
								<a
									className="text-text-secondary shadow-none focus:ring-2 focus:ring-offset-1 focus:ring-brand-primary-600"
									href={ screen.privacyPolicy?.url }
									target="_blank"
									rel="noreferrer"
								>
									{ screen.privacyPolicy?.label ||
										__(
											'Privacy Policy',
											'one-onboarding'
										) }
								</a>
							) }
						</>
					}
				/>

				<div className="grid grid-cols-2 gap-6 mt-6">
					{ inputFields.map( ( field ) => (
						<div
							key={ field.name }
							className={ field.colSpan || '' }
						>
							<Input
								id={ field.name }
								type={ field.type || 'text' }
								label={ field.label }
								name={ field.name }
								size="md"
								defaultValue={ userInfo[ field.name ] }
								error={ errors[ field.name ] }
								onBlur={ handleBlur( field.name ) }
							/>
							{ errors?.[ field.name ] && (
								<p className="text-text-error text-sm mt-1.5 mb-0">
									{ errors?.[ field.name ] }
								</p>
							) }
						</div>
					) ) }

					<div className="col-span-2">
						<Select
							by="id"
							onChange={ ( value ) =>
								dispatch( {
									type: ACTIONS.SET_USER_INFO,
									payload: { source: value },
								} )
							}
							placeholder={ __(
								'Select an option',
								'one-onboarding'
							) }
							size="md"
							defaultValue={ userInfo.source }
						>
							<Select.Button
								type="button"
								label={ __(
									'How did you hear about us?',
									'one-onboarding'
								) }
								render={ ( value ) => value?.name }
							/>
							<Select.Portal>
								<Select.Options dropdownPortalId="source">
									{ Object.entries( sourceOptions )?.map(
										( [ id, name ] ) => (
											<Select.Option
												key={ id }
												value={ { id, name } }
											>
												{ name }
											</Select.Option>
										)
									) }
								</Select.Options>
							</Select.Portal>
						</Select>
					</div>

					<div className="col-span-2">
						<Select
							by="id"
							onChange={ ( value ) =>
								dispatch( {
									type: ACTIONS.SET_USER_INFO,
									payload: { newUser: value },
								} )
							}
							placeholder={ __(
								'Select an option',
								'one-onboarding'
							) }
							size="md"
							defaultValue={ userInfo.newUser }
						>
							<Select.Button
								type="button"
								label={ __(
									'Is this your first WordPress website?',
									'one-onboarding'
								) }
								render={ ( value ) => value?.name }
							/>
							<Select.Portal>
								<Select.Options dropdownPortalId="new-user">
									{ Object.entries( freshUserOptions )?.map(
										( [ id, name ] ) => (
											<Select.Option
												key={ id }
												value={ { id, name } }
											>
												{ name }
											</Select.Option>
										)
									) }
								</Select.Options>
							</Select.Portal>
						</Select>
					</div>

					<div className="col-span-2">
						<Select
							by="id"
							onChange={ ( value ) =>
								dispatch( {
									type: ACTIONS.SET_USER_INFO,
									payload: { benefit: value },
								} )
							}
							placeholder={ __(
								'Select an option',
								'one-onboarding'
							) }
							size="md"
							defaultValue={ userInfo.benefit }
						>
							<Select.Button
								type="button"
								label={ sprintf(
									// translators: %s is the product name
									__(
										'What benefit matters to you most while choosing %s?',
										'one-onboarding'
									),
									product?.name
								) }
								render={ ( value ) => value?.name }
							/>
							<Select.Portal>
								<Select.Options dropdownPortalId="benefits">
									{ Object.entries( benefitOptions )?.map(
										( [ id, name ] ) => (
											<Select.Option
												key={ id }
												value={ { id, name } }
											>
												{ name }
											</Select.Option>
										)
									) }
								</Select.Options>
							</Select.Portal>
						</Select>

						{ userInfo.benefit?.id === 'other' && (
							<TextArea
								className="w-full mt-4 text-sm"
								onChange={ ( value ) =>
									dispatch( {
										type: ACTIONS.SET_USER_INFO,
										payload: {
											benefit: {
												...( userInfo.benefit || {} ),
												other: value,
											},
										},
									} )
								}
								aria-label={ __(
									'Please specify other benefits',
									'one-onboarding'
								) }
								placeholder={ __(
									'Please specify other benefits',
									'one-onboarding'
								) }
								defaultValue={ userInfo.benefit?.other || '' }
							/>
						) }
					</div>
					<div className="col-span-2">
						<div className="flex items-start gap-2 [&>div]:mt-[1px]">
							<Checkbox
								id="optIn"
								checked={ userInfo.optIn || false }
								onChange={ ( checked ) =>
									dispatch( {
										type: ACTIONS.SET_USER_INFO,
										payload: {
											optIn: checked,
										},
									} )
								}
								size="sm"
							/>
							<label
								htmlFor="optIn"
								className="cursor-pointer text-sm text-text-secondary leading-5"
							>
								{ optInConfig?.description ||
									__(
										'Get notified about updates, tips and new features. Plus help us improve by sharing how you use the plugin.',
										'one-onboarding'
									) }
								{ optInConfig?.learnMoreUrl && (
									<>
										{ ' ' }
										<a
											className="text-text-secondary underline shadow-none focus:ring-2 focus:ring-offset-1 focus:ring-brand-primary-600"
											href={ optInConfig.learnMoreUrl }
											target="_blank"
											rel="noreferrer"
										>
											{ __(
												'Learn more.',
												'one-onboarding'
											) }
										</a>
									</>
								) }
							</label>
						</div>
					</div>
				</div>

				<div className="flex justify-between items-center gap-6 mt-6">
					<Button
						icon={ <ChevronLeft /> }
						variant="outline"
						onClick={ navigateToPreviousScreen }
					>
						{ __( 'Back', 'one-onboarding' ) }
					</Button>

					<div className="flex justify-end items-center gap-3">
						<Button
							className="text-text-tertiary"
							variant="ghost"
							onClick={ skipScreen }
						>
							{ __( 'Skip', 'one-onboarding' ) }
						</Button>
						<Button
							type="submit"
							icon={ <ChevronRight /> }
							iconPosition="right"
						>
							{ __( 'Continue', 'one-onboarding' ) }
						</Button>
					</div>
				</div>
			</form>
		</Layout>
	);
};

export default UserInformation;
