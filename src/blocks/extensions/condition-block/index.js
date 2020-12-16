const {
    ToggleControl
} = wp.components


const { __ } = wp.i18n

const UserConditionOptions = ( props ) => {
    
    const { attributes, setAttributes } = props;
    const { Fragment } = wp.element;
    const { 
        UAGloggedIn,
        UAGloggedOut
    } = attributes;

    return(
        <Fragment>
            <ToggleControl
				label={ __('Hide on loggedIn Users')}
				checked={UAGloggedIn}
                help={ __( "This settings will only take effect once you are on the live page, and not while you're editing in Gutenberg." ) }
                onChange={(value) => setAttributes({ UAGloggedIn: !attributes.UAGloggedIn })}
			/>
            <ToggleControl
                label={ __('Hide on loggedOut Users' ) }
                checked={UAGloggedOut}
                help={ __( "This settings will only take effect once you are on the live page, and not while you're editing in Gutenberg." ) }
                onChange={(value) => setAttributes({ UAGloggedOut: !attributes.UAGloggedOut })}
            />
        </Fragment>
    );
}

export default UserConditionOptions;