import { ToggleControl, SelectControl, ExternalLink } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { createHigherOrderComponent } from '@wordpress/compose';
import { addFilter } from '@wordpress/hooks';
const { enableConditionsForCoreBlocks, enableResponsiveConditionsForCoreBlocks } = uagb_blocks_info;
import { useEffect } from '@wordpress/element';
import classnames from 'classnames';

const UserConditionOptions = ( props ) => {
	const { attributes, setAttributes } = props;
	const { UAGLoggedIn, UAGLoggedOut, UAGDisplayConditions, UAGSystem, UAGBrowser, UAGUserRole, UAGDay } = attributes;

	const options = [
		{ value: 'monday', label: __( 'Monday', 'ultimate-addons-for-gutenberg' ) },
		{ value: 'tuesday', label: __( 'Tuesday', 'ultimate-addons-for-gutenberg' ) },
		{ value: 'wednesday', label: __( 'Wednesday', 'ultimate-addons-for-gutenberg' ) },
		{ value: 'thursday', label: __( 'Thursday', 'ultimate-addons-for-gutenberg' ) },
		{ value: 'friday', label: __( 'Friday', 'ultimate-addons-for-gutenberg' ) },
		{ value: 'saturday', label: __( 'Saturday', 'ultimate-addons-for-gutenberg' ) },
		{ value: 'sunday', label: __( 'Sunday', 'ultimate-addons-for-gutenberg' ) },
	];

	const handleChange = ( e ) => {
		// Destructuring
		const { value, checked } = e.target;

		if ( checked ) {
			setAttributes( { UAGDay: [ ...UAGDay, value ] } );
		} else {
			setAttributes( { UAGDay: UAGDay.filter( ( i ) => i !== value ) } );
		}
	};

	return (
		<>
			<SelectControl
				label={ __( 'Display Conditions', 'ultimate-addons-for-gutenberg' ) }
				value={ UAGDisplayConditions }
				onChange={ ( value ) => setAttributes( { UAGDisplayConditions: value } ) }
				options={ [
					{ value: 'none', label: __( 'None', 'ultimate-addons-for-gutenberg' ) },
					{ value: 'userstate', label: __( 'User State', 'ultimate-addons-for-gutenberg' ) },
					{ value: 'userRole', label: __( 'User Role', 'ultimate-addons-for-gutenberg' ) },
					{ value: 'browser', label: __( 'Browser', 'ultimate-addons-for-gutenberg' ) },
					{ value: 'os', label: __( 'Operating System', 'ultimate-addons-for-gutenberg' ) },
					{ value: 'day', label: __( 'Day', 'ultimate-addons-for-gutenberg' ) },
				] }
			/>
			{ UAGDisplayConditions === 'userstate' && (
				<>
					<ToggleControl
						label={ __( 'Hide From Logged In Users', 'ultimate-addons-for-gutenberg' ) }
						checked={ UAGLoggedIn }
						onChange={ () => setAttributes( { UAGLoggedIn: ! attributes.UAGLoggedIn } ) }
					/>
					<ToggleControl
						label={ __( 'Hide From Logged Out Users', 'ultimate-addons-for-gutenberg' ) }
						checked={ UAGLoggedOut }
						onChange={ () => setAttributes( { UAGLoggedOut: ! attributes.UAGLoggedOut } ) }
					/>
				</>
			) }
			{ UAGDisplayConditions === 'os' && (
				<>
					<SelectControl
						label={ __( 'Hide on Operating System', 'ultimate-addons-for-gutenberg' ) }
						value={ UAGSystem }
						onChange={ ( value ) => setAttributes( { UAGSystem: value } ) }
						options={ [
							{ value: '', label: __( 'None', 'ultimate-addons-for-gutenberg' ) },
							{ value: 'iphone', label: __( 'iOS', 'ultimate-addons-for-gutenberg' ) },
							{ value: 'android', label: __( 'Android', 'ultimate-addons-for-gutenberg' ) },
							{ value: 'windows', label: __( 'Windows', 'ultimate-addons-for-gutenberg' ) },
							{ value: 'open_bsd', label: __( 'OpenBSD', 'ultimate-addons-for-gutenberg' ) },
							{ value: 'sun_os', label: __( 'SunOS', 'ultimate-addons-for-gutenberg' ) },
							{ value: 'linux', label: __( 'Linux', 'ultimate-addons-for-gutenberg' ) },
							{ value: 'mac_os', label: __( 'Mac OS', 'ultimate-addons-for-gutenberg' ) },
						] }
					/>
				</>
			) }
			{ UAGDisplayConditions === 'browser' && (
				<>
					<SelectControl
						label={ __( 'Hide on Browser', 'ultimate-addons-for-gutenberg' ) }
						value={ UAGBrowser }
						onChange={ ( value ) => setAttributes( { UAGBrowser: value } ) }
						options={ [
							{ value: '', label: __( 'None', 'ultimate-addons-for-gutenberg' ) },
							{ value: 'firefox', label: __( 'Mozilla Firefox', 'ultimate-addons-for-gutenberg' ) },
							{ value: 'chrome', label: __( 'Google Chrome', 'ultimate-addons-for-gutenberg' ) },
							{ value: 'opera_mini', label: __( 'Opera Mini', 'ultimate-addons-for-gutenberg' ) },
							{ value: 'opera', label: __( 'Opera', 'ultimate-addons-for-gutenberg' ) },
							{ value: 'safari', label: __( 'Safari', 'ultimate-addons-for-gutenberg' ) },
							{ value: 'edge', label: __( 'Microsoft Edge', 'ultimate-addons-for-gutenberg' ) },
						] }
					/>
				</>
			) }
			{ UAGDisplayConditions === 'userRole' && (
				<>
					<SelectControl
						label={ __( 'Hide for User Role', 'ultimate-addons-for-gutenberg' ) }
						value={ UAGUserRole }
						onChange={ ( value ) => setAttributes( { UAGUserRole: value } ) }
						options={ uagb_blocks_info.user_role }
					/>
				</>
			) }
			{ UAGDisplayConditions === 'day' && (
				<>
					<p>Select days you want to disable.</p>
					{ options.map( ( o, index ) => {
						// eslint-disable-next-line array-callback-return
						return (
							<label key={ index } className="form-check-label" htmlFor="flexCheckDefault">
								<input
									type="checkbox"
									className="uagb-forms-checkbox"
									name={ o.value }
									value={ o.value }
									sunday
									onChange={ handleChange }
									checked={ UAGDay.includes( o.value ) ? true : false }
								/>
								{ o.label }
							</label>
						);
					} ) }
				</>
			) }
		</>
	);
};

const UserResponsiveConditionOptions = ( props ) => {
	const { attributes, setAttributes } = props;
	const { UAGHideDesktop, UAGHideMob, UAGHideTab, UAGResponsiveConditions, UAGDisplayConditions } = attributes;

	useEffect( () => {
		if ( 'responsiveVisibility' !== UAGDisplayConditions && ! UAGResponsiveConditions ) {
			setAttributes( {
				UAGHideDesktop: false,
				UAGHideTab: false,
				UAGHideMob: false,
			} );
		}
	}, [] );

	return (
		<>
			<hr className="uagb-editor__separator" />
			<p className="components-base-control__label">
				{ __( 'Responsive Conditions', 'ultimate-addons-for-gutenberg' ) }
			</p>
			<>
				<ToggleControl
					label={ __( 'Hide on Desktop', 'ultimate-addons-for-gutenberg' ) }
					checked={ UAGHideDesktop }
					onChange={ () =>
						setAttributes( {
							UAGHideDesktop: ! attributes.UAGHideDesktop,
							UAGResponsiveConditions: true,
						} )
					}
				/>
				<ToggleControl
					label={ __( 'Hide on Tablet', 'ultimate-addons-for-gutenberg' ) }
					checked={ UAGHideTab }
					onChange={ () =>
						setAttributes( {
							UAGHideTab: ! attributes.UAGHideTab,
							UAGResponsiveConditions: true,
						} )
					}
				/>
				<ToggleControl
					label={ __( 'Hide on Mobile', 'ultimate-addons-for-gutenberg' ) }
					checked={ UAGHideMob }
					onChange={ () =>
						setAttributes( {
							UAGHideMob: ! attributes.UAGHideMob,
							UAGResponsiveConditions: true,
						} )
					}
				/>
			</>
		</>
	);
};

const AdvancedControlsBlock = createHigherOrderComponent( ( BlockEdit ) => {
	return ( props ) => {
		const { InspectorAdvancedControls } = wp.blockEditor;

		const blockName = props.name;
		const isCore = blockName.includes( 'core/' );

		const blockType = [
			'uagb/*',
			'wpforms/form-selector',
			'formidable/simple-form',
			'formidable/calculator',
			'llms/lesson-navigation',
			'llms/pricing-table',
			'llms/course-syllabus',
			'llms/instructors',
			'core/archives',
			'core/calendar',
			'core/latest-comments',
			'core/tag-cloud',
			'core/rss',
			'real-media-library/gallery',
			'core/legacy-widget',
		];

		return (
			<>
				<BlockEdit { ...props } />
				{ isCore && ! blockType.includes( blockName ) && (
					<InspectorAdvancedControls>
						<p className="components-base-control__help">
							{ __(
								"Below setting will only take effect once you are on the live page, and not while you're editing.",
								'ultimate-addons-for-gutenberg'
							) }
						</p>
						<ExternalLink href={ 'https://wpspectra.com/docs/display-conditions-blocks/' }>
							{ __( 'Filter to disable responsive/display condition. ', 'ultimate-addons-for-gutenberg' ) }
						</ExternalLink>
						{ '1' === enableResponsiveConditionsForCoreBlocks && UserResponsiveConditionOptions( props ) }
						<hr className="uagb-editor__separator" />
						{ UserConditionOptions( props ) }
					</InspectorAdvancedControls>
				) }
			</>
		);
	};
}, 'AdvancedControlsBlock' );

function ApplyExtraClassCore( extraProps, blockType, attributes ) {
	const { UAGHideDesktop, UAGHideTab, UAGHideMob, UAGDisplayConditions, UAGResponsiveConditions } = attributes;

	const isCore = blockType.name.includes( 'core/' );

	if ( 'responsiveVisibility' === UAGDisplayConditions || ( UAGResponsiveConditions && isCore ) ) {
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

if ( '1' === enableConditionsForCoreBlocks ) {
	addFilter( 'editor.BlockEdit', 'uagb/advanced-control-block', AdvancedControlsBlock );

	addFilter( 'blocks.getSaveContent.extraProps', 'uagb/apply-extra-class-core', ApplyExtraClassCore );
}
