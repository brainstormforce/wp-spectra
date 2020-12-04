const {
    ToggleControl
} = wp.components


const { __ } = wp.i18n

const UserConditionOptions = ( props ) => {
    
    const { attributes, setAttributes } = props;
    const { Fragment } = wp.element;
    const { 
        loggedIn,
        loggedOut
    } = attributes;

    return(
        <Fragment>
            <ToggleControl
				label={ __('Hide on Loggedin Users')}
				checked={loggedIn}
                help={ __( "This settings will only take effect once you are on the live page, and not while you're editing in Gutenberg." ) }
                onChange={(value) => setAttributes({ loggedIn: !attributes.loggedIn })}
			/>
            <ToggleControl
                label={ __('Hide on Loggedout Users' ) }
                checked={loggedOut}
                help={ __( "This settings will only take effect once you are on the live page, and not while you're editing in Gutenberg." ) }
                onChange={(value) => setAttributes({ loggedOut: !attributes.loggedOut })}
            />
        </Fragment>
    );
}

export default UserConditionOptions;