import React, { useEffect, useState } from 'react';
import { Sidebar, Menu } from '@bsf/force-ui';
import { Link, useLocation, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

const UagbSidebar = ( { navigation } ) => {
	const query = new URLSearchParams( useLocation()?.search );
	const dispatch = useDispatch();
	const history = useHistory();

	const [ isMobile, setIsMobile ] = useState( window.innerWidth < 1024 );

	const activeSettingsNavigationTab = useSelector( ( state ) => state.activeSettingsNavigationTab );
	const initialStateSetFlag = useSelector( ( state ) => state.initialStateSetFlag );

	useEffect( () => {
		const handleResize = () => {
			setIsMobile( window.innerWidth < 1024 );
		};

		window.addEventListener( 'resize', handleResize );

		return () => {
			window.removeEventListener( 'resize', handleResize );
		};
	}, [] );

	useEffect( () => {
		// Activate Setting Active Tab from "settingsTab" Hash in the URl is present.
		const activePath = query.get( 'path' );
		const activeHash = query.get( 'settings' );
		let activeSettingsTabFromHash = activeHash && 'settings' === activePath ? activeHash : 'global-settings';
		if ( uag_react.spectra_pro_status && uag_react.spectra_pro_licensing && ! uag_react.license_status ) {
			activeSettingsTabFromHash = activeHash && 'settings' === activePath ? activeHash : 'license';
			history.push( {
				pathname: 'admin.php',
				search: `?page=spectra&path=settings&settings=${ activeSettingsTabFromHash }`,
			} );
		}
		dispatch( { type: 'UPDATE_SETTINGS_ACTIVE_NAVIGATION_TAB', payload: activeSettingsTabFromHash } );
	}, [ initialStateSetFlag ] );

	return (
		<div className="h-full">
			<Sidebar borderOn className="lg:w-64 uagb-settings-sidebar">
				<Sidebar.Body>
					<Sidebar.Item>
						<Menu className="w-full p-0 gap-4" size="md">
							{ navigation.map( ( menuList ) => (
								<Menu.List key={ menuList.name } heading={ isMobile ? '' : menuList.name } open>
									{ menuList.children.map( ( item ) => (
										<Link
											to={ {
												pathname: 'admin.php',
												search: `?page=spectra&path=settings&settings=${ item.slug }`,
											} }
											key={ item.name }
											onClick={ () => {
												dispatch( {
													type: 'UPDATE_SETTINGS_ACTIVE_NAVIGATION_TAB',
													payload: item.slug,
												} );
											} }
											className="no-underline"
										>
											<Menu.Item active={ activeSettingsNavigationTab === item.slug }>
												{ item.icon }
												<div className="lg:block hidden">{ item.name }</div>
											</Menu.Item>
										</Link>
									) ) }
								</Menu.List>
							) ) }
						</Menu>
					</Sidebar.Item>
				</Sidebar.Body>
			</Sidebar>
		</div>
	);
};

export default UagbSidebar;
