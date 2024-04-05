const { memo } = wp.element;
import CategoriesFilter from './categories/index';
import ColorPalettesWrapper from '../../../../reusable/filters/color-palettes/index';
// import ColorsFilter from '../../../../reusable/block-filters/colors';
import Divider from '../../../../reusable/divider/divider';
import SearchBox from '../../../../reusable/search-box/search-box';
import { useSelect } from '@wordpress/data';
import { STORE_KEY } from '../../../../../store';

const Filters = () => {
	const { adaptiveMode } = useSelect( ( select ) => {
		const { getAdaptiveMode } = select( STORE_KEY );
		return {
			adaptiveMode: getAdaptiveMode(),
		};
	} );
	return (
		<div className="spectra-ai w-full max-w-[280px] self-stretch bg-white border-0 border-r border-solid border-border-primary">
			<div className="h-full w-full flex flex-col gap-5 py-5 px-4">
				<SearchBox />
				<Divider className="mx-2" />
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
