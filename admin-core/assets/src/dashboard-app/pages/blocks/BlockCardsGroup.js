import BlockCard from '@DashboardApp/pages/blocks/BlockCard';
import Extensions from '@DashboardApp/pages/blocks/Extensions';
import ProBlockInFree from './ProBlocksInFree';

const BlockCardsGroup = () => {

	const blocksInfo = uag_react.blocks_info;

	const blocksWithoutPro = blocksInfo.filter( block => ! block.pro_filler );

	const renderBlockCardsWithoutPro = blocksWithoutPro.map( ( block, index ) => {

		return <BlockCard key={index} blockInfo={block} />
	} );

	const renderBlockCards = blocksInfo.map( ( block, index ) => {

		return <BlockCard key={index} blockInfo={block} />
	} );

	return (
		<div className="lg:max-w-[80rem] mx-auto grid grid-flow-row auto-rows-min grid-cols-2 gap-6 sm:grid-cols-3 px-6 py-4">
			{ ( 'not-installed' === uag_react.pro_plugin_status || 'inactive' === uag_react.pro_plugin_status ) ? (
				<> 
					<ProBlockInFree /> 
					{ renderBlockCardsWithoutPro } 
				</>
				) : renderBlockCards }
			<Extensions/>
		</div>
	);
};

export default BlockCardsGroup;
