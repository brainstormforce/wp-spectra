import { __ } from '@wordpress/i18n';
import './GlobalSettings.scss';
import CollapsePanels from './CollapsePanels';
import CopyPaste from './CopyPaste';

const GlobalSettings = () => {

    return (
        <>
            <h2>
                { __( 'Global Settings', 'ultimate-addons-for-gutenberg' ) }
            </h2>
            <div className="uag-global__elements">
                <CollapsePanels/>
                <CopyPaste/>
            </div>
        </>	
	);
}

export default GlobalSettings;