import { ToggleControl, SelectControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { addFilter, applyFilters } from '@wordpress/hooks';
import ResponsiveSlider from '@Components/responsive-slider';
import UAGAdvancedPanelBody from '@Components/advanced-panel-body';
import classnames from 'classnames';
import { useEffect } from '@wordpress/element';

const { enableConditions, enableResponsiveConditions } = uagb_blocks_info;

const UserConditionOptions = ( props ) => {
	const { attributes, setAttributes } = props;
	const { UAGLoggedIn, UAGLoggedOut, UAGDisplayConditions, UAGSystem, UAGBrowser, UAGUserRole, UAGDay } = attributes;

	const handleChange = ( e ) => {
		// Destructuring
		const { value, checked } = e.target;

		if ( checked ) {
			setAttributes( { UAGDay: [ ...UAGDay, value ] } );
		} else {
			setAttributes( { UAGDay: UAGDay.filter( ( i ) => i !== value ) } );
		}
	};

	const options = [
		{ value: 'monday', label: __( 'Monday', 'ultimate-addons-for-gutenberg' ) },
		{ value: 'tuesday', label: __( 'Tuesday', 'ultimate-addons-for-gutenberg' ) },
		{ value: 'wednesday', label: __( 'Wednesday', 'ultimate-addons-for-gutenberg' ) },
		{ value: 'thursday', label: __( 'Thursday', 'ultimate-addons-for-gutenberg' ) },
		{ value: 'friday', label: __( 'Friday', 'ultimate-addons-for-gutenberg' ) },
		{ value: 'saturday', label: __( 'Saturday', 'ultimate-addons-for-gutenberg' ) },
		{ value: 'sunday', label: __( 'Sunday', 'ultimate-addons-for-gutenberg' ) },
	];
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
						onChange={ () =>
							setAttributes( {
								UAGLoggedIn: ! attributes.UAGLoggedIn,
							} )
						}
					/>
					<ToggleControl
						label={ __( 'Hide From Logged Out Users', 'ultimate-addons-for-gutenberg' ) }
						checked={ UAGLoggedOut }
						onChange={ () =>
							setAttributes( {
								UAGLoggedOut: ! attributes.UAGLoggedOut,
							} )
						}
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
							{
								value: 'firefox',
								label: __( 'Mozilla Firefox', 'ultimate-addons-for-gutenberg' ),
							},
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

const zIndexOptions = ( props ) => {
	const { attributes, setAttributes } = props;
	const { zIndex, zIndexTablet, zIndexMobile } = attributes;

	return (
		<>
			<ResponsiveSlider
				label={ __( 'Z-Index', 'ultimate-addons-for-gutenberg' ) }
				data={ {
					desktop: {
						value: zIndex,
						label: 'zIndex',
					},
					tablet: {
						value: zIndexTablet,
						label: 'zIndexTablet',
					},
					mobile: {
						value: zIndexMobile,
						label: 'zIndexMobile',
					},
				} }
				min={ -100 }
				max={ 1000 }
				displayUnit={ false }
				setAttributes={ setAttributes }
			/>
			<p className="components-base-control__help">
				{ __(
					"Above setting will only take effect once you are on the live page, and not while you're editing.",
					'ultimate-addons-for-gutenberg'
				) }
			</p>
		</>
	);
};

const ResponsiveConditionOptions = ( props ) => {
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

function ApplyExtraClass( extraProps, blockType, attributes ) {
	const {
		UAGHideDesktop,
		UAGHideTab,
		UAGHideMob,
		zIndex,
		zIndexTablet,
		zIndexMobile,
		UAGDisplayConditions,
		UAGResponsiveConditions,
	} = attributes;

	//Filter to add responsive condition compatibility for third party blocks.
	const blockTypes = applyFilters( 'uag_reponsive_conditions_compatible_blocks', [ 'uagb/' ] );

	let isResponsiveCompatibleBlock = false;
	for ( const type of blockTypes ) {
		if ( blockType.name.includes( type ) ) {
			isResponsiveCompatibleBlock = true;
			break;
		}
	}

	if (
		'responsiveVisibility' === UAGDisplayConditions ||
		( UAGResponsiveConditions && isResponsiveCompatibleBlock )
	) {
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

	if ( zIndex || zIndexTablet || zIndexMobile ) {
		//Adding a common selector for blocks where z-index is applied.
		extraProps.className = classnames( extraProps.className, 'uag-blocks-common-selector' );
		extraProps.style = {
			'--z-index-desktop': zIndex + ';',
			'--z-index-tablet': zIndexTablet + ';',
			'--z-index-mobile': zIndexMobile + ';',
		};
	}

	return extraProps;
}

//For UAG Blocks.
addFilter( 'uag_advance_tab_content', 'uagb/advanced-display-condition', function ( content, props ) {
	if ( ! props ) {
		return content;
	}

	const { isSelected, name } = props;

	const excludeBlocks = [
		'uagb/buttons-child',
		'uagb/faq-child',
		'uagb/icon-list-child',
		'uagb/social-share-child',
		'uagb/restaurant-menu-child',
		'uagb/slider-child',
	];

	const excludeDeprecatedBlocks = [
		'uagb/cf7-styler',
		'uagb/wp-search',
		'uagb/gf-styler',
		'uagb/columns',
		'uagb/section',
	];

	if ( isSelected && ! excludeBlocks.includes( name ) ) {
		return (
			<>
				{ 'enabled' === enableConditions && (
					<UAGAdvancedPanelBody
						title={ __( 'Display Conditions', 'ultimate-addons-for-gutenberg' ) }
						initialOpen={ true }
						className="block-editor-block-inspector__advanced uagb-extention-tab"
					>
						{ UserConditionOptions( props ) }
						<p className="components-base-control__help">
							{ __(
								"Above setting will only take effect once you are on the live page, and not while you're editing.",
								'ultimate-addons-for-gutenberg'
							) }
						</p>
					</UAGAdvancedPanelBody>
				) }
				{ 'enabled' === enableResponsiveConditions && (
					<UAGAdvancedPanelBody
						title={ __( 'Responsive Conditions', 'ultimate-addons-for-gutenberg' ) }
						initialOpen={ false }
						className="block-editor-block-inspector__advanced uagb-extention-tab"
					>
						{ ResponsiveConditionOptions( props ) }
						<p className="components-base-control__help">
							{ __(
								"Above setting will only take effect once you are on the live page, and not while you're editing.",
								'ultimate-addons-for-gutenberg'
							) }
						</p>
					</UAGAdvancedPanelBody>
				) }
				{ ! excludeDeprecatedBlocks.includes( name ) && (
					<UAGAdvancedPanelBody
						title={ __( 'Z-Index', 'ultimate-addons-for-gutenberg' ) }
						initialOpen={ false }
						className="block-editor-block-inspector__advanced uagb-extention-tab"
					>
						{ zIndexOptions( props ) }
					</UAGAdvancedPanelBody>
				) }
			</>
		);
	}
} );

addFilter( 'blocks.getSaveContent.extraProps', 'uagb/apply-extra-class', ApplyExtraClass );
