import { ToggleControl, SelectControl, PanelBody } from "@wordpress/components"
import { __ } from '@wordpress/i18n';
import { createHigherOrderComponent } from "@wordpress/compose";
import { addFilter } from "@wordpress/hooks";

const { enableConditions } = uagb_blocks_info;

const UserConditionOptions = ( props ) => {
	const { attributes, setAttributes } = props;
	const {
		UAGLoggedIn,
		UAGLoggedOut,
		UAGDisplayConditions,
		UAGHideDesktop,
		UAGHideMob,
		UAGHideTab,
		UAGSystem,
		UAGBrowser,
		UAGUserRole,
	} = attributes;

	return (
		<>
			<SelectControl
				label={ __( 'Display Conditions' ) }
				value={ UAGDisplayConditions }
				onChange={ ( value ) =>
					setAttributes( { UAGDisplayConditions: value } )
				}
				options={ [
					{ value: 'none', label: __( 'None' ) },
					{ value: 'userstate', label: __( 'User State' ) },
					{
						value: 'responsiveVisibility',
						label: __( 'Responsive Visibility' ),
					},
					{ value: 'userRole', label: __( 'User Role' ) },
					{ value: 'browser', label: __( 'Browser' ) },
					{ value: 'os', label: __( 'Operating System' ) },
				] }
			/>
			{ UAGDisplayConditions == 'userstate' && (
				<>
					<ToggleControl
						label={ __( 'Hide From Logged In Users' ) }
						checked={ UAGLoggedIn }
						onChange={ () =>
							setAttributes( {
								UAGLoggedIn: ! attributes.UAGLoggedIn,
							} )
						}
					/>
					<ToggleControl
						label={ __( 'Hide From Logged Out Users' ) }
						checked={ UAGLoggedOut }
						onChange={ () =>
							setAttributes( {
								UAGLoggedOut: ! attributes.UAGLoggedOut,
							} )
						}
					/>
				</>
			) }
			{ UAGDisplayConditions == 'responsiveVisibility' && (
				<>
					<ToggleControl
						label={ __( 'Hide on Desktop' ) }
						checked={ UAGHideDesktop }
						onChange={ () =>
							setAttributes( {
								UAGHideDesktop: ! attributes.UAGHideDesktop,
							} )
						}
					/>
					<ToggleControl
						label={ __( 'Hide on Tablet' ) }
						checked={ UAGHideTab }
						onChange={ () =>
							setAttributes( {
								UAGHideTab: ! attributes.UAGHideTab,
							} )
						}
					/>
					<ToggleControl
						label={ __( 'Hide on Mobile' ) }
						checked={ UAGHideMob }
						onChange={ () =>
							setAttributes( {
								UAGHideMob: ! attributes.UAGHideMob,
							} )
						}
					/>
				</>
			) }
			{ UAGDisplayConditions == 'os' && (
				<>
					<SelectControl
						label={ __( 'Hide on Operating System' ) }
						value={ UAGSystem }
						onChange={ ( value ) =>
							setAttributes( { UAGSystem: value } )
						}
						options={ [
							{ value: '', label: __( 'None' ) },
							{ value: 'iphone', label: __( 'IOS' ) },
							{ value: 'android', label: __( 'Android' ) },
							{ value: 'windows', label: __( 'Windows' ) },
							{ value: 'open_bsd', label: __( 'OpenBSD' ) },
							{ value: 'sun_os', label: __( 'SunOS' ) },
							{ value: 'linux', label: __( 'Linux' ) },
							{ value: 'mac_os', label: __( 'Mac OS' ) },
						] }
					/>
				</>
			) }
			{ UAGDisplayConditions == 'browser' && (
				<>
					<SelectControl
						label={ __( 'Hide on Browser' ) }
						value={ UAGBrowser }
						onChange={ ( value ) =>
							setAttributes( { UAGBrowser: value } )
						}
						options={ [
							{ value: '', label: __( 'None' ) },
							{ value: 'ie', label: __( 'Internet Explorer' ) },
							{
								value: 'firefox',
								label: __( 'Mozilla Firefox' ),
							},
							{ value: 'chrome', label: __( 'Google Chrome' ) },
							{ value: 'opera_mini', label: __( 'Opera Mini' ) },
							{ value: 'opera', label: __( 'Opera' ) },
							{ value: 'safari', label: __( 'Safari' ) },
							{ value: 'edge', label: __( 'Microsoft Edge' ) },
						] }
					/>
				</>
			) }
			{ UAGDisplayConditions == 'userRole' && (
				<>
					<SelectControl
						label={ __( 'Hide for User Role' ) }
						value={ UAGUserRole }
						onChange={ ( value ) =>
							setAttributes( { UAGUserRole: value } )
						}
						options={ uagb_blocks_info.user_role }
					/>
				</>
			) }
		</>
	);
};

const AdvancedControlsBlock = createHigherOrderComponent((BlockEdit) => {

	return (props) => {

		const { Fragment } = wp.element;

		const { InspectorControls } = wp.blockEditor;

		const { isSelected } = props;

		const { PanelBody } = wp.components;

		const blockName = props.name;

		const blockType = ['wpforms/form-selector','formidable/simple-form','formidable/calculator','llms/lesson-navigation','llms/pricing-table','llms/course-syllabus','llms/instructors','core/archives','core/calendar','core/latest-comments','core/tag-cloud','core/rss','real-media-library/gallery'];
		return (
			<Fragment>
				<BlockEdit {...props} />
				{isSelected && ! blockType.includes(blockName) &&  ! blockName.includes('uagb/') &&
				<InspectorControls>
					<PanelBody
						title={ __( 'UAG - Extentions', 'ultimate-addons-for-gutenberg' ) }
						initialOpen={ false }
						className="block-editor-block-inspector__advanced uagb-extention-tab"
					>
						<p className="components-base-control__help">{ __( "Below setting will only take effect once you are on the live page, and not while you're editing.", 'ultimate-addons-for-gutenberg' ) }</p>
						{ UserConditionOptions( props ) }
					</PanelBody>
				</InspectorControls>
				}

			</Fragment>
		);
	};
}, 'AdvancedControlsBlock');

function ApplyExtraClass(extraProps, blockType, attributes) {

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

if( '1' === enableConditions ){
	//For UAG Blocks.
	addFilter(
		'uag_advance_tab_content',
		'uagb/advanced-control-block',
		function( content, props ) {

			if ( !props ) {
				return content;
			}

			const { isSelected, name } = props;

			const blockType = ['uagb/buttons-child','uagb/faq-child', 'uagb/icon-list-child', 'uagb/social-share-child', 'uagb/restaurant-menu-child'];

			if( isSelected && ! blockType.includes(name) ) {
				return (
					<PanelBody
						title={ __( 'UAG - Extentions', 'ultimate-addons-for-gutenberg' ) }
						initialOpen={ false }
						className="block-editor-block-inspector__advanced uagb-extention-tab"
					>
						<p className="components-base-control__help">{ __( "Below setting will only take effect once you are on the live page, and not while you're editing.", 'ultimate-addons-for-gutenberg' ) }</p>
						{ UserConditionOptions( props ) }
					</PanelBody>
				);
			}
		}
	);
	//For Non-UAG Blocks.
	addFilter(
		'editor.BlockEdit',
		'uagb/advanced-control-block',
		AdvancedControlsBlock,
	);

    addFilter(
        'blocks.getSaveContent.extraProps',
        'uagb/apply-extra-class',
        ApplyExtraClass,
    );
}

