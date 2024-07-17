import BlockCard from '@DashboardApp/pages/blocks/BlockCard';
import Extensions from '@DashboardApp/pages/blocks/Extensions';
import { useSelector } from 'react-redux';

const BlockCardsGroup = () => {

	const activeBlocksFilterTab = useSelector( ( state ) => state.activeBlocksFilterTab );

	const blocksInfo = uag_react.blocks_info;

	const renderBlockCards = blocksInfo.map( ( block, index ) => {

		const blockCategories = block.admin_categories;
		const showBlockCard = blockCategories?.includes( activeBlocksFilterTab ) || 'all' === activeBlocksFilterTab;

		// Ignore this block card if it's not part of the current filter, or if it's a Pro filler block card.
		if ( ! showBlockCard || ( uag_react.spectra_pro_status && block.pro_filler ) ) {
			return '';
		}

		return <BlockCard key={ index } blockInfo={ block } />
	} );

	return (
		<div className="lg:max-w-[80rem] mx-auto grid grid-flow-row auto-rows-min grid-cols-2 gap-6 sm:grid-cols-3 px-6 py-4">
			{ renderBlockCards }
			<Extensions currentTab={ activeBlocksFilterTab }/>
		</div>
	);
};

export default BlockCardsGroup;
