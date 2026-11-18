const { memo } = wp.element;
import CategoriesFilter from './categories/index';
import ColorPalettesWrapper from '../../../../reusable/filters/color-palettes/index';
// import ColorsFilter from '../../../../reusable/block-filters/colors';
import Divider from '../../../../reusable/divider/divider';
import SearchBox from '../../../../reusable/search-box/search-box';
import StatusToggle from '../../../../reusable/status-toggle';
import { useSelect } from '@wordpress/data';
import { STORE_KEY } from '../../../../../store';
import { classNames } from '../../../../../utils/helpers';

const Filters = ( { className, ...rest } ) => {
	const { adaptiveMode } = useSelect( ( select ) => {
		const { getAdaptiveMode } = select( STORE_KEY );
		return {
			adaptiveMode: getAdaptiveMode(),
		};
	} );
	return (
		<div
			className={ classNames(
				'spectra-ai w-full lg:max-w-[280px] self-stretch bg-white border-0 border-r border-solid border-border-primary md:max-lg:max-w-[246px] xl:max-w-[280px] lg:max-xl:max-w-[260px] hidden sm:block max-w-60',
				className
			) }
			{ ...rest }
		>
			<div className="h-full w-full flex flex-col gap-5 py-5 px-4">
				<SearchBox />
				<Divider className="mx-2" />
				<StatusToggle type="pages" />
				<CategoriesFilter />
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
