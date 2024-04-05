import { __ } from '@wordpress/i18n';
import { SpectraLogo, StLogo } from '../../ui/icons';

const Logo = () => {
	const conditionalLogo = () => {
		if ( 'active' === ast_block_template_vars.astra_sites_status || 'active' === ast_block_template_vars.astra_sites_pro_status ) {
			return <StLogo className="w-[1.8rem] h-[1.8rem]" />;
		}
		return <SpectraLogo className="w-[1.8rem] h-[1.8rem]" />;
	};

	return (
		<div className="flex items-center gap-2">
			{ ! ast_block_template_vars.is_white_label && conditionalLogo() }
			<span className="text-[1.15rem] font-semibold text-heading-text leading-[1.875rem]">
				{ __( 'Design Library', 'ast-block-templates' ) }
			</span>
		</div>
	);
};

export default Logo;
