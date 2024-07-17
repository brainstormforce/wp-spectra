/**
 * ADVANCED SETTINGS: Position - Settings Panel.
 * 
 * This will render all positional settings for all blocks.
 * 
 * Current Support:
 * Positions --> Sticky
 * Blocks    --> Container
 */
import StickyPositionalSettings from './positional-settings/sticky-settings';
import { ToggleControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import UAGAdvancedPanelBody from '@Components/advanced-panel-body';

const RenderAdvancedPositionPanel = ( props ) => {

	const {
		attributes: { UAGPosition },
		setAttributes,
	} = props;
	return (
		<UAGAdvancedPanelBody
			title={ __( 'Sticky', 'ultimate-addons-for-gutenberg' ) }
			initialOpen={ false }
			className="block-editor-block-inspector__advanced uagb-extention-tab"
		>
			<ToggleControl
				label={ __( 'Sticky Container', 'ultimate-addons-for-gutenberg' ) }
				checked={ 'sticky' === UAGPosition }
				onChange={ () => setAttributes( { UAGPosition: 'sticky' === UAGPosition ? '' : 'sticky' } ) }
				help={ __( 'Changes affect the frontend only', 'ultimate-addons-for-gutenberg' ) }
			/>
			{ 'sticky' === UAGPosition && <StickyPositionalSettings { ...props } /> }
		</UAGAdvancedPanelBody>
	);
}

export default RenderAdvancedPositionPanel;