const {
    ToggleControl,
    SelectControl
} = wp.components


const { __ } = wp.i18n

const UserConditionOptions = ( props ) => {
    
    const { attributes, setAttributes } = props;
    const { Fragment } = wp.element;
    const { 
        UAGloggedIn,
        UAGloggedOut,
        DisplayConditions,
        UAGHideDesktop,
        UAGHideMob,
        UAGHideTab,
        UAGSystem,
        UAGBrowser
    } = attributes;

    return(
        <Fragment>
            <SelectControl
				label={ __( "Display Conditions" ) }
				value={ DisplayConditions }
				onChange={ ( value ) => setAttributes( { DisplayConditions: value } ) }
				options={ [
                    { value: "none", label: __( "None" ) },
                    { value: "userstate", label: __( "User State" ) },
                    { value: "responsiveVisibility", label: __( "Responsive Visibility" ) },
                    { value: "userRole", label: __( "User Role" ) },
                    { value: "browser", label: __( "Browser" ) },
                    { value: "os", label: __( "Operting System" ) },
                ]}
			/> 
            { DisplayConditions == "userstate" && 
                <Fragment>
                    <ToggleControl
                        label={ __('Hide From Logged In Users')}
                        checked={UAGloggedIn}
                        help={ __( "This settings will only take effect once you are on the live page, and not while you're editing in Gutenberg." ) }
                        onChange={(value) => setAttributes({ UAGloggedIn: !attributes.UAGloggedIn })}
                    />
                    <ToggleControl
                        label={ __('Hide From Logged Out Users' ) }
                        checked={UAGloggedOut}
                        help={ __( "This settings will only take effect once you are on the live page, and not while you're editing in Gutenberg." ) }
                        onChange={(value) => setAttributes({ UAGloggedOut: !attributes.UAGloggedOut })}
                    />
                </Fragment>
            }
            { DisplayConditions == "responsiveVisibility" && 
                <Fragment>
                    <ToggleControl
                        label={ __('Hide on Desktop')}
                        checked={UAGHideDesktop}
                        help={ __( "This settings will only take effect once you are on the live page, and not while you're editing in Gutenberg." ) }
                        onChange={(value) => setAttributes({ UAGHideDesktop: !attributes.UAGHideDesktop })}
                    />
                    <ToggleControl
                        label={ __('Hide on Tablet' ) }
                        checked={UAGHideTab}
                        help={ __( "This settings will only take effect once you are on the live page, and not while you're editing in Gutenberg." ) }
                        onChange={(value) => setAttributes({ UAGHideTab: !attributes.UAGHideTab })}
                    />
                    <ToggleControl
                        label={ __('Hide on Mobile' ) }
                        checked={UAGHideMob}
                        help={ __( "This settings will only take effect once you are on the live page, and not while you're editing in Gutenberg." ) }
                        onChange={(value) => setAttributes({ UAGHideMob: !attributes.UAGHideMob })}
                    />
                </Fragment>
            }
            { DisplayConditions == "os" && 
                <Fragment>
                    <SelectControl
                        label={ __( "Operting System" ) }
                        value={ UAGSystem }
                        onChange={ ( value ) => setAttributes( { UAGSystem: value } ) }
                        options={ [
                            { value: 'iphone', label: __( "iPhone" ) },
                            { value: "android", label: __( "Android" ) },
                            { value: "windows", label: __( "Windows" ) },
                            { value: "open_bsd", label: __( "OpenBSD" ) },
                            { value: "sun_os", label: __( "SunOS" ) },
                            { value: "linux", label: __( "Linux" ) },
                            { value: "mac_os", label: __( "Mac OS" ) },
                        ]}
			        />
                </Fragment>
            }
            { DisplayConditions == "browser" && 
                <Fragment>
                    <SelectControl
                        label={ __( "Browser" ) }
                        value={ UAGBrowser }
                        onChange={ ( value ) => setAttributes( { UAGBrowser: value } ) }
                        options={ [
                            { value: 'ie', label: __( "Internet Explorer" ) },
                            { value: "firefox", label: __( "Mozilla Firefox" ) },
                            { value: "chrome", label: __( "Google Chrome" ) },
                            { value: "opera_mini", label: __( "Opera Mini" ) },
                            { value: "opera", label: __( "Opera" ) },
                            { value: "safari", label: __( "Safari" ) },
                            { value: "edge", label: __( "Microsoft Edge" ) },
                        ]}
			        />
                </Fragment>
            }
        </Fragment>
    );
}

export default UserConditionOptions;