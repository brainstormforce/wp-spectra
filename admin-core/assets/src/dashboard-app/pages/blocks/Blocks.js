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
            <FilterTabs/>
            <BlockCardsGroup/>
        </>
    );
};
export default Blocks;
