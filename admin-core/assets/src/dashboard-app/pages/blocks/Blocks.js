import FilterTabs from '@DashboardApp/pages/blocks/FilterTabs';
import BlockCardsGroup from '@DashboardApp/pages/blocks/BlockCardsGroup';
import BlocksSkeleton from '@DashboardApp/pages/blocks/BlocksSkeleton';
import { useSelector } from 'react-redux';

const Blocks = () => {

    const initialStateSetFlag = useSelector( ( state ) => state.initialStateSetFlag );

	if ( ! initialStateSetFlag ) {
		return <BlocksSkeleton/>;
	}

    return (
        <>
            <div className="mx-auto px-6 mt-10 mb-8 font-semibold text-2xl lg:max-w-[80rem]">Blocks &#47; Extensions</div>
            <FilterTabs/>
            <BlockCardsGroup/>
        </>
    );
};
export default Blocks;
