import { useForm } from 'react-hook-form';
import Input from '../input/input';
import { ArrowPathIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import useLicense from '../../../hooks/use-license';
import { renderToString, useEffect } from '@wordpress/element';
import { __, sprintf } from '@wordpress/i18n';
import { PremiumIcon } from '../../ui/icons';
import { getSpectraStatus } from '../../../utils/helpers';

const License = ( { onFormSubmit = () => {} } ) => {
	const {
			loadingStatus,
			licenseStatus,
			getAstraSitesProStatus,
			handleActivateLicense,
		} = useLicense(),
		premiumSTStatus = getAstraSitesProStatus(),
		spectraStatus = getSpectraStatus();

	const {
		register,
		handleSubmit,
		formState: { errors },
		setFocus,
	} = useForm( { defaultValues: { licenseKey: '' } } );

	const onSubmit = async ( { licenseKey } ) => {
		await handleActivateLicense( licenseKey );
		onFormSubmit();
	};

	const getComponentType = () => {
		if ( spectraStatus.active ) {
			return 'premium';
		}

		if ( premiumSTStatus.notInstalled || premiumSTStatus.inactive ) {
			return 'free';
		}

		return 'premium';
	};

	const getMessage = () => {
		if ( getComponentType() === 'free' ) {
			return __(
				'Access this pattern/kit and all others with Essentials & Business Toolkit package',
				'ast-block-templates'
			);
		}

		return sprintf(
			// Translators: %s: Product name
			__( '%s License Key:', 'ast-block-templates' ),
			renderToString(
				<span className="font-semibold text-heading-text">
					{ __( 'Premium Starter Templates', 'ast-block-templates' ) }
				</span>
			)
		);
	};

	useEffect( () => {
		setFocus( 'licenseKey' );
	}, [] );

	if ( licenseStatus === 'active' ) {
		return false;
	}

	return (
		<div className="spectra-ai p-4 space-y-4 rounded bg-background-tertiary">
			<div className="space-y-2">
				<div className="flex items-center justify-start gap-2">
					<PremiumIcon />
					<p className="m-0 text-base font-semibold text-heading-text">
						{ __( 'Premium Template', 'ast-block-templates' ) }
					</p>
				</div>
				<p
					className="m-0 text-sm font-normal text-body-text"
					dangerouslySetInnerHTML={ {
						__html: getMessage(),
					} }
				/>
			</div>
			{ getComponentType() === 'premium' && (
				<form className="m-0 p-0" onSubmit={ handleSubmit( onSubmit ) }>
					<Input
						className="w-full"
						inputClassName="!pr-11"
						type="text"
						id="licenseKey"
						name="licenseKey"
						placeholder={ __(
							'License key',
							'ast-block-templates'
						) }
						register={ register }
						error={ errors.licenseKey }
						validations={ {
							required: {
								value: true,
								message: 'License key is required',
							},
						} }
						suffixIcon={
							<button
								type="submit"
								className="border-0 bg-transparent focus:outline-none inline-flex items-center justify-center cursor-pointer p-3"
							>
								{ loadingStatus === 'loading' ? (
									<ArrowPathIcon className="w-5 h-5 text-icon-secondary animate-spin" />
								) : (
									<ChevronRightIcon className="w-5 h-5 text-icon-secondary" />
								) }
							</button>
						}
						suffixIconClassName="absolute flex items-center right-0"
					/>
					<span
						className="block mt-1 text-xs font-normal text-zip-body-text text-right"
						dangerouslySetInnerHTML={ {
							__html: sprintf(
								/* translators: %s: link */
								__(
									'Already have a license? Access %s.',
									'ast-block-templates'
								),
								renderToString(
									<a
										href="http://store.brainstormforce.com/account"
										target="_blank"
										className="text-accent-spectra"
										rel="noreferrer"
									>
										{ __( 'here', 'ast-block-templates' ) }
									</a>
								)
							),
						} }
					/>
				</form>
			) }

			{ getComponentType() === 'premium' && (
				<div className="m-0">
					<p className="m-0 text-sm font-normal text-body-text">
						<span className="font-semibold text-heading-text">
							{ __( 'Need help?', 'ast-block-templates' ) }
						</span>{ ' ' }
						{ __( 'Get in touch with our', 'ast-block-templates' ) }{ ' ' }
						<a
							href="https://wpastra.com/contact"
							target="_blank"
							className="text-accent-spectra"
							rel="noreferrer"
						>
							{ __( 'support team', 'ast-block-templates' ) }
						</a>
						.
					</p>
				</div>
			) }
		</div>
	);
};

export default License;
