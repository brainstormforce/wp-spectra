import { useForm } from 'react-hook-form';
import { DiamondIcon } from '../../ui/icons';
import Input from '../input/input';
import { ArrowPathIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import useLicense from '../../../hooks/use-license';
import { useEffect } from '@wordpress/element';

const License = () => {
	const {
			loadingStatus,
			licenseStatus,
			getAstraSitesProStatus,
			handleActivateLicense,
		} = useLicense(),
		pluginStatus = getAstraSitesProStatus();

	const {
		register,
		handleSubmit,
		formState: { errors },
		setFocus,
	} = useForm( { defaultValues: { licenseKey: '' } } );

	const onSubmit = async ( { licenseKey } ) => {
		await handleActivateLicense( licenseKey );
	};

	const getComponentType = () => {
		if (
			pluginStatus.notInstalled ||
			pluginStatus.inactive
		) {
			return 'free';
		}

		return 'premium';
	};

	const getMessage = () => {
		if ( getComponentType() === 'free' ) {
			return 'Get access to this template, and all other templates starting at just $79';
		}

		return 'Already have purchased Premium Starter Templates? Enter your license key below to import this template.';
	};

	useEffect( () => {
		setFocus( 'licenseKey' );
	}, [] );

	if ( licenseStatus === 'active' ) {
		return false;
	}

	return (
		<div className="spectra-ai p-4 space-y-4 border border-solid border-border-primary rounded">
			<div className="space-y-2">
				<div className="flex items-center justify-start gap-2">
					<DiamondIcon className="w-5 h-5 text-accent-spectra" />
					<p className="m-0 text-base font-semibold text-heading-text">Premium Template</p>
				</div>
				<p className="m-0 text-sm font-normal text-body-text">{ getMessage() }</p>
			</div>
			{
				getComponentType() === 'premium' && (
					<form className="m-0 p-0" onSubmit={ handleSubmit( onSubmit ) }>
						<Input
							className="w-full"
							inputClassName="!pr-11"
							type="text"
							id="licenseKey"
							name="licenseKey"
							placeholder="Enter your license key"
							register={ register }
							error={ errors.licenseKey }
							validations={ {
								required: {
									value: true,
									message: 'License key is required',
								},
							} }
							suffixIcon={ (
								<button type="submit" className="border-0 bg-transparent focus:outline-none inline-flex items-center justify-center cursor-pointer p-3">
									{
										loadingStatus === 'loading' ? (
											<ArrowPathIcon className="w-5 h-5 text-icon-secondary animate-spin" />
										) : (
											<ChevronRightIcon className="w-5 h-5 text-icon-secondary" />
										)
									}
								</button>
							) }
							suffixIconClassName="right-0"
						/>
					</form>
				)
			}

			{
				getComponentType() === 'premium' && (
					<div className="m-0">
						<p className="m-0 text-sm font-normal text-body-text"><span className="font-semibold text-heading-text">Need help?</span> Get in touch with our <a href="https://wpastra.com/contact" target="_blank" className="text-accent-spectra" rel="noreferrer">support team</a>.</p>
					</div>
				)
			}
		</div>
	);
};

export default License;
