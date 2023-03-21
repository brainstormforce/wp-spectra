import SettingsIcons from './SettingsIcons';

import { __ } from '@wordpress/i18n';

import { useSelector, useDispatch } from 'react-redux';
import AssetsGeneration from '@DashboardApp/pages/settings/AssetsGeneration';
import RegenerateAssets from '@DashboardApp/pages/settings/RegenerateAssets';
import TemplatesButton from '@DashboardApp/pages/settings/TemplatesButton';
import OnPageCSS from '@DashboardApp/pages/settings/OnPageCSS';
import RollBack from '@DashboardApp/pages/settings/RollBack';
import BetaUpdates from '@DashboardApp/pages/settings/BetaUpdates';
import LegacyBlocks from '@DashboardApp/pages/settings/LegacyBlocks';
import SelectedFontFamilies from '@DashboardApp/pages/settings/SelectedFontFamilies';
import LoadFontsLocally from '@DashboardApp/pages/settings/LoadFontsLocally';
import PreloadLocalFonts from '@DashboardApp/pages/settings/PreloadLocalFonts';
import CollapsePanels from '@DashboardApp/pages/settings/CollapsePanels';
import CopyPasteStyles from '@DashboardApp/pages/settings/CopyPasteStyles';
import DynamicContent from './dynamic-content';
import ContentWidth from '@DashboardApp/pages/settings/ContentWidth';
import BlocksEditorSpacing from '@DashboardApp/pages/settings/BlocksEditorSpacing';
import ComingSoon from '@DashboardApp/pages/settings/ComingSoon';
import SettingsSkeleton from '@DashboardApp/pages/settings/SettingsSkeleton';
import BlockSettings from '@DashboardApp/pages/settings/BlockSettings';
import LoadFontAwesome5 from '@DashboardApp/pages/settings/LoadFontAwesome5';
import AutoBlockRecovery from '@DashboardApp/pages/settings/AutoBlockRecovery';
import ContainerGlobalPadding from '@DashboardApp/pages/settings/ContainerGlobalPadding';
import ContainerGlobalElementsGap from '@DashboardApp/pages/settings/ContainerGlobalElementsGap';
import MyAccount from '@DashboardApp/pages/settings/MyAccount';
import InstagramUsers from '@DashboardApp/pages/settings/block-settings/InstagramUsers';
import { Link, useLocation, useHistory } from 'react-router-dom';
import{ useEffect } from 'react';


function classNames( ...classes ) {
    return classes.filter( Boolean ).join( ' ' )
}

const Settings = () => {

	const query = new URLSearchParams( useLocation()?.search );
	const dispatch = useDispatch();
	const history = useHistory();

	const activeSettingsNavigationTab = useSelector( ( state ) => state.activeSettingsNavigationTab );
    const initialStateSetFlag = useSelector( ( state ) => state.initialStateSetFlag );

	const navigation = [
		{ name: __( 'Editor Options', 'ultimate-addons-for-gutenberg' ), slug: 'global-settings', icon: SettingsIcons['global-settings'] },
        { name: __( 'Asset Generation', 'ultimate-addons-for-gutenberg' ), slug: 'asset-generation', icon: SettingsIcons['asset-generation'] },
        { name: __( 'Templates', 'ultimate-addons-for-gutenberg' ), slug: 'templates', icon: SettingsIcons.templates },
        { name: __( 'Version Control', 'ultimate-addons-for-gutenberg' ), slug: 'version-control', icon: SettingsIcons['version-control'] },
        { name: __( 'Performance', 'ultimate-addons-for-gutenberg' ), slug: 'fonts-performance', icon: SettingsIcons['fonts-performance'] },
		{ name: __( 'Integrations', 'ultimate-addons-for-gutenberg' ), slug: 'block-settings', icon: SettingsIcons['block-settings'] },
		{ name: __( 'Coming Soon', 'ultimate-addons-for-gutenberg' ), slug: 'coming-soon', icon: SettingsIcons['coming-soon'] },
    ];

	if( uag_react.spectra_pro_status ){
		navigation.push( { name: __( 'License', 'ultimate-addons-for-gutenberg' ), slug: 'license', icon: SettingsIcons.account } );
	}

	useEffect( () => {
		// Activate Setting Active Tab from "settingsTab" Hash in the URl is present.
		const activePath = query.get( 'path' );
		const activeHash = query.get( 'settings' );
		let activeSettingsTabFromHash = ( activeHash && 'settings' === activePath ) ? activeHash : 'global-settings';
		if( uag_react.spectra_pro_status && !uag_react.license_status ){
			activeSettingsTabFromHash = ( activeHash && 'settings' === activePath ) ? activeHash : 'license';
			history.push( {
				pathname: 'admin.php',
				search: `?page=spectra&path=settings&settings=${activeSettingsTabFromHash}`,
			} )
		}
		dispatch( {type:'UPDATE_SETTINGS_ACTIVE_NAVIGATION_TAB', payload: activeSettingsTabFromHash} )
	}, [initialStateSetFlag] );

	if ( ! initialStateSetFlag ) {
		return <SettingsSkeleton/>;
	}

    // Parent Div is Required to add Padding to the Entire Structure for Smaller Windows.
    return (
        <div className="px-6 mx-auto lg:max-w-[80rem]">
            <div className="mt-10 mb-8 font-semibold text-2xl">Settings</div>
            <main className="my-[2.43rem] bg-white rounded-md shadow min-h-[36rem]">
                <div className="lg:grid lg:grid-cols-12 min-h-[36rem] h-full">
                    <aside className="py-6 sm:px-6 lg:py-6 lg:px-0 lg:col-span-3">
                        <nav className="space-y-1">
                            {navigation.map( ( item ) => (
                            <Link // eslint-disable-line
                                to={ {
                                    pathname: 'admin.php',
                                    search: `?page=spectra&path=settings&settings=${item.slug}`,
                                } }
                                key={item.name}
                                className={ classNames(
                                    activeSettingsNavigationTab === item.slug
                                        ? 'border-spectra text-spectra focus:text-spectra-hover active:text-spectra hover:text-spectra-hover stroke-spectra fill-spectra focus:stroke-spectra focus:fill-spectra hover:stroke-spectra hover:fill-spectra'
                                        : 'border-white text-slate-800 stroke-slate-800 fill-slate-800 focus:text-slate-900 focus:border-slate-200 focus:stroke-slate-900 focus:fill-slate-900 hover:text-slate-900 hover:border-slate-200 hover:stroke-slate-900 hover:fill-slate-900',
                                    'border-l-4 group cursor-pointer py-3 pl-5 flex items-center text-base font-medium'
                                ) }
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
                    <div className='lg:col-span-9 border-l spectra__settings'>
                        { 'global-settings' === activeSettingsNavigationTab &&
                            <>
                                <ContentWidth/>
								<ContainerGlobalPadding/>
								<ContainerGlobalElementsGap/>
								{
									uag_react.spectra_pro_status && (
										<DynamicContent />
									)
								}
                                <BlocksEditorSpacing/>
								<OnPageCSS/>
                                <CollapsePanels/>
                                <CopyPasteStyles/>
                                <AutoBlockRecovery/>
                                {  'yes' === uag_react.global_data.uagb_old_user_less_than_2 &&
                                    <LoadFontAwesome5/>
                                }
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
								{  'yes' !== uag_react.global_data.uagb_old_user_less_than_2 &&
                                    <LegacyBlocks/>
                                }
                            </>
                        }
                        { 'fonts-performance' === activeSettingsNavigationTab &&
                            <>
                                <LoadFontsLocally/>
                                <PreloadLocalFonts/>
                                <SelectedFontFamilies/>
                            </>
                        }
                        { 'block-settings' === activeSettingsNavigationTab &&
							<>
								{
									uag_react.spectra_pro_status && (
										<>
											<InstagramUsers/>
											{/* SOCIAL MARKER */}
										</>
									)
								}
								<BlockSettings/>
							</>
                        }
                        {
                            'coming-soon' === activeSettingsNavigationTab &&
                            <>
                                <ComingSoon/>
                            </>
                        }
                        {
                        	uag_react.spectra_pro_status &&  'license' === activeSettingsNavigationTab &&
                            <>
                                <MyAccount />
                            </>
                        }
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Settings;
