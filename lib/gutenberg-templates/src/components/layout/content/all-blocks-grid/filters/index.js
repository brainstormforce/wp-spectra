const { memo } = wp.element;
import CategoriesFilter from './categories/index';
import ColorPalettesWrapper from '../../../../reusable/filters/color-palettes/index';
// import ColorsFilter from '../../../../reusable/block-filters/colors';
import Divider from '../../../../reusable/divider/divider';
import SearchBox from '../../../../reusable/search-box/search-box';
import StatusToggle from '../../../../reusable/status-toggle';
import UpgradeButton from '../../../../reusable/upgrade/upgrade';
import { useSelect } from '@wordpress/data';
import { STORE_KEY } from '../../../../../store';
import { classNames } from '../../../../../utils/helpers';

const Filters = ( { className, ...rest } ) => {
	const { adaptiveMode, licenseStatus, currentVersionFilter } = useSelect( ( select ) => {
		const { getAdaptiveMode, getLicenseStatus, getFilterBySpectraBlocksVersion } = select( STORE_KEY );
		return {
			adaptiveMode: getAdaptiveMode(),
			licenseStatus: getLicenseStatus(),
			currentVersionFilter: getFilterBySpectraBlocksVersion(),
		};
	} );

	// Check if StatusToggle should be shown (same logic as in StatusToggle component)
	const shouldShowStatusToggle = () => {
		const {
			spectra_version,
		} = ast_block_template_vars || {};

		// Only show for Spectra 3.0.0-beta.1+ users
		if ( spectra_version !== 'v3' ) {
			return false;
		}

		// Hide when version toggle is set to v2
		if ( currentVersionFilter === 'v2' ) {
			return false;
		}

		// Show in all other cases (v3 toggle state or no version toggle)
		return true;
	};

	return (
		<div
			className={ classNames(
				'spectra-ai w-full lg:max-w-[280px] self-stretch bg-white border-0 border-r border-solid border-border-primary md:max-lg:max-w-[246px] xl:max-w-[280px] lg:max-xl:max-w-[260px] hidden sm:block max-w-60',
				className
			) }
			{ ...rest }
		>
			<div className="h-full w-full flex flex-col gap-5 py-5 px-4">
				<StatusToggle type="blocks" />
				{ shouldShowStatusToggle() && <Divider className="mx-2" /> }
				<SearchBox />
				<Divider className="mx-2" />
				<CategoriesFilter />
				{ licenseStatus && licenseStatus === 'inactive' && (
					<>
						<Divider className="mx-2" />
						<UpgradeButton />
					</>
				) }
				{ adaptiveMode && (
					<div className="mt-auto space-y-5 min-h-[3.125rem]">
						<Divider className="mx-2" />
						<ColorPalettesWrapper />
					</div>
				) }
			</div>
		</div>
	);
};

export default memo( Filters );
