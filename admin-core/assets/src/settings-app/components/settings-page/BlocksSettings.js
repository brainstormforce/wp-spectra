import './BlocksSettings.scss';
import IndividualBlockSetting from './IndividualBlockSetting';

const blocksInfo = uag_react.blocks_info;

function BlocksSettings( prop ) {

	const renderBlocksMetaBoxes = blocksInfo.map( ( block ) => {
		
		return (
			<IndividualBlockSetting
				blockInfo = { block }
			/>
		);
	} );
	
	return (
		<div className="uag-blocks-settings">
			{ renderBlocksMetaBoxes }
		</div>
	);
}

export default BlocksSettings;
