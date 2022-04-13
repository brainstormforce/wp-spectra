import SettingsIcons from './SettingsIcons';

import { __ } from '@wordpress/i18n';

import { useSelector, useDispatch } from 'react-redux';
import AssetsGeneration from '@DashboardApp/pages/settings/AssetsGeneration';
import RegenerateAssets from '@DashboardApp/pages/settings/RegenerateAssets';
import TemplatesButton from '@DashboardApp/pages/settings/TemplatesButton';
import RollBack from '@DashboardApp/pages/settings/RollBack';
import BetaUpdates from '@DashboardApp/pages/settings/BetaUpdates';
import SelectedFontFamilies from '@DashboardApp/pages/settings/SelectedFontFamilies';
import LoadFontsLocally from '@DashboardApp/pages/settings/LoadFontsLocally';
import PreloadLocalFonts from '@DashboardApp/pages/settings/PreloadLocalFonts';
import CollapsePanels from '@DashboardApp/pages/settings/CollapsePanels';
import CopyPasteStyles from '@DashboardApp/pages/settings/CopyPasteStyles';
import ContentWidth from '@DashboardApp/pages/settings/ContentWidth';
import SettingsSkeleton from '@DashboardApp/pages/settings/SettingsSkeleton';
import { Link, useLocation } from 'react-router-dom';
import{ useEffect } from 'react';

function classNames( ...classes ) {
    return classes.filter( Boolean ).join( ' ' )
}

const Settings = () => {

	const query = new URLSearchParams( useLocation()?.search );
	const dispatch = useDispatch();
	const activeSettingsNavigationTab = useSelector( ( state ) => state.activeSettingsNavigationTab );
    const initialStateSetFlag = useSelector( ( state ) => state.initialStateSetFlag );
	const navigation = [
		{ name: __( 'Editor Options', 'ultimate-addons-for-gutenberg' ), slug: 'global-settings', icon: SettingsIcons['global-settings'] },
        { name: __( 'Asset Generation', 'ultimate-addons-for-gutenberg' ), slug: 'asset-generation', icon: SettingsIcons['asset-generation'] },
        { name: __( 'Templates', 'ultimate-addons-for-gutenberg' ), slug: 'templates', icon: SettingsIcons.templates },
        { name: __( 'Version Control', 'ultimate-addons-for-gutenberg' ), slug: 'version-control', icon: SettingsIcons['version-control'] },
        { name: __( 'Performance', 'ultimate-addons-for-gutenberg' ), slug: 'fonts-performance', icon: SettingsIcons['fonts-performance'] },
    ];

	useEffect( () => {
		// Activate Setting Active Tab from "settingsTab" Hash in the URl is present.
		const activePath = query.get( 'path' );
		const activeHash = query.get( 'settings' );
		const activeSettingsTabFromHash = ( activeHash && 'settings' === activePath ) ? activeHash : 'global-settings';
		dispatch( {type:'UPDATE_SETTINGS_ACTIVE_NAVIGATION_TAB', payload: activeSettingsTabFromHash} )
	}, [initialStateSetFlag] );

	if ( ! initialStateSetFlag ) {
		return <SettingsSkeleton/>;
	}

    uag_react.spectra_pro_status && navigation.push( 
        { name: __( 'Block Settings', 'ultimate-addons-for-gutenberg' ), slug: 'block-settings', icon: SettingsIcons['global-settings'] }
    );

    return (
        <main className="max-w-[77rem] mx-auto my-[2.43rem] bg-white rounded-[0.2rem] shadow overflow-hidden h-[34rem]">
            <div className="lg:grid lg:grid-cols-12 lg:gap-x-8 h-full">
                <aside className="py-6 px-2 ml-8 sm:px-6 lg:py-6 lg:px-0 lg:col-span-3 border-r">
                    <nav className="space-y-1">
                        {navigation.map( ( item ) => (
                        <Link // eslint-disable-line
							to={ {
								pathname: 'options-general.php',
								search: `?page=spectra&path=settings&settings=${item.slug}`,
							} }
                            key={item.name}
                            className={classNames(
                            activeSettingsNavigationTab === item.slug
                            ? 'bg-gray-50 text-wpcolor hover:text-wphovercolor fill-wpcolor'
                            : 'text-gray-900 fill-gray-900 hover:text-gray-900 hover:bg-gray-50',
                            'group cursor-pointer rounded-[0.2rem] p-3 flex items-center text-sm font-medium'
                            )}
                            onClick={ () => {
								dispatch( {type:'UPDATE_SETTINGS_ACTIVE_NAVIGATION_TAB', payload: item.slug} )
							}}
                        >
                            { item.icon }
                            <span className="truncate">{item.name}</span>
                        </Link>
                    ) )}
                    </nav>
                </aside>
                <div className='space-y-8 mt-8 mb-0 mr-8 sm:px-6 lg:px-0 lg:col-span-9'>
					{ 'global-settings' === activeSettingsNavigationTab &&
						<>
							<ContentWidth/>
                            <CollapsePanels/>
                            <CopyPasteStyles/>
                        </>
                    }
                    { 'asset-generation' === activeSettingsNavigationTab &&
                        <>
                            <AssetsGeneration/>
                            <RegenerateAssets/>
                        </>
                    }
                    { 'templates' === activeSettingsNavigationTab &&
                        <TemplatesButton/>
                    }
                    { 'version-control' === activeSettingsNavigationTab &&
                        <>
                            <RollBack/>
                            <BetaUpdates/>
                        </>
                    }
                    { 'fonts-performance' === activeSettingsNavigationTab &&
                        <>
                            <SelectedFontFamilies/>
                            <LoadFontsLocally/>
                            <PreloadLocalFonts/>
                        </>
                    }
                </div>
            </div>
        </main>
    );
};

export default Settings;
