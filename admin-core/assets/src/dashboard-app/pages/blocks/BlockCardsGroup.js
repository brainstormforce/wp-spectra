import BlockCard from '@DashboardApp/pages/blocks/BlockCard';
import Extensions from '@DashboardApp/pages/blocks/Extensions';
import { useSelector } from 'react-redux';

const BlockCardsGroup = () => {

    const activeBlocksFilterTab = useSelector( ( state ) => state.activeBlocksFilterTab );

    const blocksInfo = uag_react.blocks_info;

    const renderBlockCards = blocksInfo.map( ( block, index ) => {

        const blockCategories = block.admin_categories;
        const showBlockCard = blockCategories?.includes( activeBlocksFilterTab ) || 'all' === activeBlocksFilterTab;

        if ( ! showBlockCard ) {
            return '';
        }

		return <BlockCard key={ index } blockInfo={ block } />
    } );

    return (
        <div className="lg:max-w-[80rem] mx-auto grid grid-cols-2 gap-4 sm:grid-cols-3 p-6 pt-0">
            { renderBlockCards }
            {
                ( 'extensions' === activeBlocksFilterTab || 'all' === activeBlocksFilterTab ) && <Extensions/>
            }
        </div>
    );
};

export default BlockCardsGroup;
