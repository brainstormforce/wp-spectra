import { ToggleControl, SelectControl, ExternalLink } from '@wordpress/components'
import { __ } from '@wordpress/i18n';
import { createHigherOrderComponent } from '@wordpress/compose';
import { addFilter } from '@wordpress/hooks';
const { enableConditionsForCoreBlocks } = uagb_blocks_info;
import { useEffect } from '@wordpress/element';
import classnames from 'classnames';

const UserConditionOptions = ( props ) => {

    const { attributes, setAttributes } = props;
    const {
        UAGLoggedIn,
        UAGLoggedOut,
        UAGDisplayConditions,
        UAGSystem,
        UAGBrowser,
        UAGUserRole,
		UAGDay
    } = attributes;

    const options =  [
		{ value: 'monday', label: __( 'Monday' ) },
		{ value: 'tuesday', label: __( 'Tuesday' ) },
		{ value: 'wednesday', label: __( 'Wednesday' ) },
		{ value: 'thursday', label: __( 'Thursday' ) },
		{ value: 'friday', label: __( 'Friday' ) },
		{ value: 'saturday', label: __( 'Saturday' ) },
		{ value: 'sunday', label: __( 'Sunday' ) },
	];

    const handleChange = ( e ) => {
		// Destructuring
		const { value, checked } = e.target;
		
		if ( checked ) {
			setAttributes( { UAGDay: [...UAGDay, value] } );
		}
		
		else {
			setAttributes( { UAGDay: UAGDay.filter( ( i ) => i !== value ) } );
		}
	};

    return(
        <>
            <SelectControl
				label={ __( 'Display Conditions' ) }
				value={ UAGDisplayConditions }
				onChange={ ( value ) => setAttributes( { UAGDisplayConditions: value } ) }
				options={ [
                    { value: 'none', label: __( 'None' ) },
                    { value: 'userstate', label: __( 'User State' ) },
                    { value: 'userRole', label: __( 'User Role' ) },
                    { value: 'browser', label: __( 'Browser' ) },
                    { value: 'os', label: __( 'Operating System' ) },
                    { value: 'day', label: __( 'Day' ) }
                ]}
			/>
            { UAGDisplayConditions === 'userstate' &&
                <>
                    <ToggleControl
                        label={ __( 'Hide From Logged In Users' )}
                        checked={UAGLoggedIn}
                        onChange={() => setAttributes( { UAGLoggedIn: !attributes.UAGLoggedIn } )}
                    />
                    <ToggleControl
                        label={ __( 'Hide From Logged Out Users' ) }
                        checked={UAGLoggedOut}
                        onChange={() => setAttributes( { UAGLoggedOut: !attributes.UAGLoggedOut } )}
                    />
                </>
            }
            { UAGDisplayConditions === 'os' &&
                <>
                    <SelectControl
                        label={ __( 'Hide on Operating System' ) }
                        value={ UAGSystem }
                        onChange={ ( value ) => setAttributes( { UAGSystem: value } ) }
                        options={ [
                            { value: '', label: __( 'None' ) },
                            { value: 'iphone', label: __( 'iOS' ) },
                            { value: 'android', label: __( 'Android' ) },
                            { value: 'windows', label: __( 'Windows' ) },
                            { value: 'open_bsd', label: __( 'OpenBSD' ) },
                            { value: 'sun_os', label: __( 'SunOS' ) },
                            { value: 'linux', label: __( 'Linux' ) },
                            { value: 'mac_os', label: __( 'Mac OS' ) },
                        ]}
			        />
                </>
            }
            { UAGDisplayConditions === 'browser' &&
                <>
                    <SelectControl
                        label={ __( 'Hide on Browser' ) }
                        value={ UAGBrowser }
                        onChange={ ( value ) => setAttributes( { UAGBrowser: value } ) }
                        options={ [
                            { value: '', label: __( 'None' ) },
                            { value: 'firefox', label: __( 'Mozilla Firefox' ) },
                            { value: 'chrome', label: __( 'Google Chrome' ) },
                            { value: 'opera_mini', label: __( 'Opera Mini' ) },
                            { value: 'opera', label: __( 'Opera' ) },
                            { value: 'safari', label: __( 'Safari' ) },
                            { value: 'edge', label: __( 'Microsoft Edge' ) },
                        ]}
			        />
                </>
            }
            { UAGDisplayConditions === 'userRole' &&
                <>
                    <SelectControl
                        label={ __( 'Hide for User Role' ) }
                        value={ UAGUserRole }
                        onChange={ ( value ) => setAttributes( { UAGUserRole: value } ) }
                        options={ uagb_blocks_info.user_role }
			        />
                </>
            }
            { UAGDisplayConditions === 'day' && (
				<>
				<p>Select days you want to disable.</p>
					{ options.map( ( o, index ) => {  // eslint-disable-next-line array-callback-return
						return (
								<label
									key = { index }
									className="form-check-label"
									htmlFor="flexCheckDefault"
								>
									<input
										type="checkbox"
										className="uagb-forms-checkbox"
										name={ o.value }
										value={ o.value } sunday
										onChange ={ handleChange }
										checked={ UAGDay.includes( o.value ) ? true : false}
									/>
									{ o.label }
								</label>
						);
					} )}
				</>
			) }
        </>
    );
}

const UserResponsiveConditionOptions = ( props ) => {

    const { attributes, setAttributes } = props;
    const {
        UAGHideDesktop,
        UAGHideMob,
        UAGHideTab,
        UAGResponsiveConditions,
		UAGDisplayConditions
    } = attributes;

    useEffect( () => {

		if ( 'responsiveVisibility' !== UAGDisplayConditions && ! UAGResponsiveConditions ) {
			setAttributes( {
				UAGHideDesktop: false,
				UAGHideTab: false,
				UAGHideMob: false
			} )
		}
	}, [] );

    return(
        <>
			<p className="components-base-control__label">{ __( 'Responsive Conditions', 'ultimate-addons-for-gutenberg' ) }</p>
			<>
				<ToggleControl
					label={ __( 'Hide on Desktop' )}
					checked={UAGHideDesktop}
					onChange={() => setAttributes( {
						UAGHideDesktop: ! attributes.UAGHideDesktop,
						UAGResponsiveConditions: true,
					} )}
				/>
				<ToggleControl
					label={ __( 'Hide on Tablet' ) }
					checked={UAGHideTab}
                    onChange={() => setAttributes( {
						UAGHideTab: ! attributes.UAGHideTab,
						UAGResponsiveConditions: true,
					} )}
				/>
				<ToggleControl
					label={ __( 'Hide on Mobile' ) }
					checked={UAGHideMob}
                    onChange={() => setAttributes( {
						UAGHideMob: ! attributes.UAGHideMob,
						UAGResponsiveConditions: true,
					} )}
				/>
			</>
        </>
    );
}

const AdvancedControlsBlock = createHigherOrderComponent( ( BlockEdit ) => {

	return ( props ) => {

		const { InspectorAdvancedControls } = wp.blockEditor;

		const blockName = props.name;
		const isCore = blockName.includes( 'core/' );

		const blockType = [ 'uagb/*','wpforms/form-selector','formidable/simple-form','formidable/calculator','llms/lesson-navigation','llms/pricing-table','llms/course-syllabus','llms/instructors','core/archives','core/calendar','core/latest-comments','core/tag-cloud','core/rss','real-media-library/gallery','core/legacy-widget' ];

		return (
			<>
				<BlockEdit {...props} />
				{ isCore && ! blockType.includes( blockName ) &&
					<InspectorAdvancedControls>
						<p className="components-base-control__help">{ __( "Below setting will only take effect once you are on the live page, and not while you're editing.", 'ultimate-addons-for-gutenberg' ) }</p>
						<ExternalLink
							href={ 'https://wpspectra.com/docs/display-conditions-blocks/' }
						>
							{ __( 'Filter to disable responsive/display condition. ' ) }
						</ExternalLink>
						<hr className="uagb-editor__separator" />
						{ UserResponsiveConditionOptions( props ) }
						<hr className="uagb-editor__separator" />
						{ UserConditionOptions( props ) }
					</InspectorAdvancedControls>
				}
			</>
		);

	};
}, 'AdvancedControlsBlock' );

function ApplyExtraClassCore( extraProps, blockType, attributes ) {

	const {
		UAGHideDesktop,
		UAGHideTab,
		UAGHideMob,
		UAGDisplayConditions,
        UAGResponsiveConditions
	} = attributes;

    const isCore = blockType.name.includes( 'core/' );

	if ( 'responsiveVisibility' === UAGDisplayConditions || UAGResponsiveConditions && isCore ) {

		if ( UAGHideDesktop ) {
			extraProps.className = classnames( extraProps.className, 'uag-hide-desktop' );
		}

		if ( UAGHideTab ) {
			extraProps.className = classnames( extraProps.className, 'uag-hide-tab' );
		}

		if ( UAGHideMob ) {
			extraProps.className = classnames( extraProps.className, 'uag-hide-mob' );
		}

	}

	return extraProps;
}

if( '1' === enableConditionsForCoreBlocks ){
	addFilter(
		'editor.BlockEdit',
		'uagb/advanced-control-block',
		AdvancedControlsBlock,
	);

    addFilter(
        'blocks.getSaveContent.extraProps',
        'uagb/apply-extra-class-core',
        ApplyExtraClassCore,
    );
}
