import { ToggleControl, SelectControl } from '@wordpress/components'
import { __ } from '@wordpress/i18n';
import { createHigherOrderComponent } from '@wordpress/compose';
import { addFilter } from '@wordpress/hooks';
const { enableConditionsForCoreBlocks } = uagb_blocks_info;

const UserConditionOptions = ( props ) => {

    const { attributes, setAttributes } = props;
    const {
        UAGLoggedIn,
        UAGLoggedOut,
        UAGDisplayConditions,
        UAGSystem,
        UAGBrowser,
        UAGUserRole
    } = attributes;

    return(
        <>
            <SelectControl
				label={ __( 'Display Conditions ( Core )' ) }
				value={ UAGDisplayConditions }
				onChange={ ( value ) => setAttributes( { UAGDisplayConditions: value } ) }
				options={ [
                    { value: 'none', label: __( 'None' ) },
                    { value: 'userstate', label: __( 'User State' ) },
                    { value: 'userRole', label: __( 'User Role' ) },
                    { value: 'browser', label: __( 'Browser' ) },
                    { value: 'os', label: __( 'Operating System' ) },
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
        </>
    );
}

const UserResponsiveConditionOptions = ( props ) => {

    const { attributes, setAttributes } = props;
    const {
        UAGHideDesktop,
        UAGHideMob,
        UAGHideTab,
    } = attributes;

    return(
        <>
			<p className="components-base-control__label">{ __( 'Responsive Conditions ( Core )', 'ultimate-addons-for-gutenberg' ) }</p>
			<>
				<ToggleControl
					label={ __( 'Hide on Desktop' )}
					checked={UAGHideDesktop}
					onChange={() => setAttributes( { UAGHideDesktop: !attributes.UAGHideDesktop } )}
				/>
				<ToggleControl
					label={ __( 'Hide on Tablet' ) }
					checked={UAGHideTab}
					onChange={() => setAttributes( { UAGHideTab: !attributes.UAGHideTab } )}
				/>
				<ToggleControl
					label={ __( 'Hide on Mobile' ) }
					checked={UAGHideMob}
					onChange={() => setAttributes( { UAGHideMob: !attributes.UAGHideMob } )}
				/>
			</>
        </>
    );
}

const AdvancedControlsBlock = createHigherOrderComponent( ( BlockEdit ) => {

	return ( props ) => {

		const { InspectorAdvancedControls } = wp.blockEditor;

		const blockName = props.name;
		const isCore = blockName.match( /core/gi );

		const blockType = [ 'uagb/*','wpforms/form-selector','formidable/simple-form','formidable/calculator','llms/lesson-navigation','llms/pricing-table','llms/course-syllabus','llms/instructors','core/archives','core/calendar','core/latest-comments','core/tag-cloud','core/rss','real-media-library/gallery' ];

		return (
			<>
				<BlockEdit {...props} />
				{ isCore && ! blockType.includes( blockName ) &&
					<InspectorAdvancedControls>
						<p className="components-base-control__help">{ __( "Below setting will only take effect once you are on the live page, and not while you're editing.", 'ultimate-addons-for-gutenberg' ) }</p>
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
	} = attributes;

	if ( 'responsiveVisibility' === UAGDisplayConditions ) {
		if ( UAGHideDesktop ) {
			extraProps.className = extraProps.className + ' uag-hide-desktop';
		}

		if ( UAGHideTab ) {
			extraProps.className = extraProps.className + ' uag-hide-tab';
		}

		if ( UAGHideMob ) {
			extraProps.className = extraProps.className + ' uag-hide-mob';
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
