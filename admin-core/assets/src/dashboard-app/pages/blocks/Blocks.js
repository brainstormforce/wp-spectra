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
            <div className="max-w-3xl mx-auto lg:max-w-[77rem] mt-10 mb-8 font-semibold text-2xl">Blocks &#47; Extensions</div>
            <FilterTabs/>
            <BlockCardsGroup/>
        </>
    );
};
export default Blocks;
