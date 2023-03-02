import { __ } from '@wordpress/i18n';

export default function MyAccount() {
	const licenseFormURL = `${uag_react.admin_base_url}options-general.php?page=spectra-pro-manage-license`

	return (
		<iframe width="100%" height="100%" src={licenseFormURL}></iframe>
	);
}
