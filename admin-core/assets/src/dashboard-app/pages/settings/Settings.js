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
import BlocksEditorSpacing from '@DashboardApp/pages/settings/BlocksEditorSpacing';
import ComingSoon from '@DashboardApp/pages/settings/ComingSoon';
import SettingsSkeleton from '@DashboardApp/pages/settings/SettingsSkeleton';
import BlockSettings from '@DashboardApp/pages/settings/BlockSettings';
import LoadFontAwesome5 from '@DashboardApp/pages/settings/LoadFontAwesome5';
import AutoBlockRecovery from '@DashboardApp/pages/settings/AutoBlockRecovery';
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
		{ name: __( 'Block Settings', 'ultimate-addons-for-gutenberg' ), slug: 'block-settings', icon: SettingsIcons['block-settings'] },
		{ name: __( 'Coming Soon', 'ultimate-addons-for-gutenberg' ), slug: 'coming-soon', icon: SettingsIcons['coming-soon'] },
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

    return (
        <>
            <div className="max-w-3xl mx-auto lg:max-w-[77rem] mt-10 mb-8 font-semibold text-2xl">Settings</div>
            <main className="max-w-[77rem] mx-auto my-[2.43rem] bg-white rounded-md shadow overflow-hidden h-[36rem]">
                <div className="lg:grid lg:grid-cols-12 h-full">
                    <aside className="py-6 sm:px-6 lg:py-6 lg:px-0 lg:col-span-3">
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
                                ? 'border-spectra text-spectra focus:text-spectra-hover active:text-spectra hover:text-spectra-hover fill-spectra focus:fill-spectra hover:fill-spectra'
                                : 'border-white text-slate-500 fill-slate-500 focus:text-slate-700 focus:border-slate-200 focus:fill-slate-700 hover:text-slate-700 hover:border-slate-200 hover:fill-slate-700',
                                'border-l-4 group cursor-pointer py-3 pl-5 flex items-center text-sm font-medium'
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
                    <div className='lg:col-span-9 border-l spectra__scrollable-settings spectra__scrollable--settings'>
                        { 'global-settings' === activeSettingsNavigationTab &&
                            <>
                                <LoadFontAwesome5/>
                                <AutoBlockRecovery/>
                                <ContentWidth/>
                                <BlocksEditorSpacing/>
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
                        { 'block-settings' === activeSettingsNavigationTab &&
                            <>
                                <BlockSettings/>
                            </>
                        }
                        {
                            'coming-soon' === activeSettingsNavigationTab &&
                            <>
                                <ComingSoon/>
                            </>
                        }
                    </div>
                </div>
            </main>
        </>
    );
};

export default Settings;
