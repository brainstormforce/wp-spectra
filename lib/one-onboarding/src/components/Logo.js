import { __, sprintf } from '@wordpress/i18n';

const { logoUrl, logoSvg, product } = window.oneOnboardingData || {};

const Logo = ( { className = 'h-6' } ) => {
	// translators: %s is the product name
	const altText = sprintf( __( '%s logo', 'one-onboarding' ), product?.name );

	return (
		<span className={ className }>
			{ logoUrl && (
				<img
					className="w-full h-full [&>svg]:w-full [&>svg]:h-full"
					src={ logoUrl }
					alt={ altText }
				/>
			) }
			{ ! logoUrl && logoSvg && (
				<div
					className="w-full h-full"
					role="img"
					aria-label={ altText }
					dangerouslySetInnerHTML={ {
						__html: logoSvg,
					} }
				/>
			) }
		</span>
	);
};

export default Logo;
