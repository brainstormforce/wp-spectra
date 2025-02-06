import { ToggleControl, SelectControl, Button } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { addFilter, applyFilters } from '@wordpress/hooks';
import ResponsiveSlider from '@Components/responsive-slider';
import UAGAdvancedPanelBody from '@Components/advanced-panel-body';
import classnames from 'classnames';
import { useEffect } from '@wordpress/element';
import { AnimationList, AnimationSelectControlObject } from '@Blocks/extensions/animations-extension/animation-list';
import { createHigherOrderComponent } from '@wordpress/compose';
import { select } from '@wordpress/data'
import Select from 'react-select';
import { updateUAGDay } from '@Utils/Helpers';
import RenderAdvancedPositionPanel from '@Blocks/extensions/advanced-positioning';
import UpgradeComponent from '@Components/upgrade-to-pro-cta';

const { enableConditions, enableResponsiveConditions, enableAnimationsExtension, enableMotionEffectsExtension } = uagb_blocks_info;

const UserConditionOptions = ( props ) => {
	const { attributes, setAttributes } = props;
	const { UAGLoggedIn, UAGLoggedOut, UAGDisplayConditions, UAGSystem, UAGBrowser, UAGUserRole, UAGDay } = attributes;

	const handleChange = ( e ) => {
		const { value, checked } = e.target;
		setAttributes( {
			UAGDay: checked ? [...UAGDay, value] : updateUAGDay( UAGDay, value )
		} );
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
					<p>{ __( 'Select days you want to disable.', 'ultimate-addons-for-gutenberg' ) }</p>
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
									checked={ UAGDay?.includes( o.value ) ? true : false }
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

const animationOptions = ( props ) => {
	const {
		clientId,
		name,
		attributes: { UAGAnimationType, UAGAnimationTime, UAGAnimationDelay, UAGAnimationEasing },
		setAttributes,
	} = props;

	// Get the easing functions from Pro.
	const AnimationEasingFunctions = applyFilters( 'spectra.animations-extension.easing-pro-options', '', name );

	// Function to trigger animation in editor (when changing animation type or clicking on play button).
	// animationType - holds UAGAnimationType attribute by default but sometimes the attribute is not updated instantaneously, so we pass in the value from the Animation Type select component.
	const playAnimation = ( animationType = UAGAnimationType ) => {
		// For responsive preview.
		const editorIframe = document.querySelector( 'iframe[name="editor-canvas"]' );
		const innerDoc = editorIframe?.contentDocument || editorIframe?.contentWindow.document;

		// Get block and the setTimeout code to clear from previous usage. Also check responsive preview.
		const animatedBlock = editorIframe
			? innerDoc.getElementById( 'block-' + clientId )
			: document.getElementById( 'block-' + clientId );

		const aosWaitPreviousCode = parseInt( localStorage.getItem( `aosWaitTimeoutCode-${ clientId }` ) );
		const aosRemoveClassesTimeoutPreviousCode = parseInt(
			localStorage.getItem( `aosRemoveClassesTimeoutCode-${ clientId }` )
		);

		// If the animation is played previously, remove the AOS class and attribute first.
		// We ensure that the AOS class and attribute is removed in case the user repeated taps the play button.
		if ( aosWaitPreviousCode ) {
			animatedBlock.removeAttribute( 'data-aos' );
			animatedBlock.classList.remove( 'aos-animate' );
		}

		// transition duration is set to 0s, cause the block first goes to the last frame (animated in reverse) when the AOS attribute is added and this should be instantaneous.
		animatedBlock.style.transitionDuration = '0s';
		// Add back the AOS attribute.
		animatedBlock.setAttribute( 'data-aos', animationType );

		// Due to CSS conflicts across themes in the editor, we set the easing using JS.
		// Also we only provide default 'ease' in the free version, so if the easing function list is empty then use the default 'ease' function.
		animatedBlock.style.transitionTimingFunction = AnimationEasingFunctions
			? AnimationEasingFunctions[ UAGAnimationEasing ]
			: 'cubic-bezier(.250, .100, .250, 1)';

		// Clear previous timeouts.
		clearTimeout( aosWaitPreviousCode );
		clearTimeout( aosRemoveClassesTimeoutPreviousCode );

		// Add the aos-animate class to play the animation with the given duration.
		const aosWait = setTimeout( () => {
			// Astra theme overrides (or even other themes may) the transition duration to a fixed value.
			// Hence we do the calculation on the next line.
			animatedBlock.style.transitionDuration = UAGAnimationTime / 1000 + 's';
			animatedBlock.classList.add( 'aos-animate' );
		}, 0 );

		// Remove the classes and attributes after the animation has played.
		// Keeping the classes and attributes after the animation has played can lead to buggy behavior in the editor.
		const aosRemoveClasses = setTimeout( () => {
			animatedBlock.removeAttribute( 'data-aos' );
			animatedBlock.classList.remove( 'aos-animate' );
			animatedBlock.style.transitionDuration = '';
			animatedBlock.style.transitionTimingFunction = '';
		}, UAGAnimationDelay + UAGAnimationTime );

		// Set local storage so we can fetch the value during later usage to clear the intervals.
		localStorage.setItem( `aosWaitTimeoutCode-${ clientId }`, aosWait );
		localStorage.setItem( `aosRemoveClassesTimeoutCode-${ clientId }`, aosRemoveClasses );
	};

	// Adding playAnimation function to props for using in the pro plugin.
	props = {
		...props,
		playAnimation,
	};

	const proAnimationOptions = applyFilters( 'spectra.animations-extension.pro-options', props );

	// Check proAnimationOptions is valid react element or not.
	const proValidOptions = proAnimationOptions.$$typeof === Symbol.for( 'react.element' ) && proAnimationOptions?.props?.children ? true : null;

	return (
		<>
			<Select
				placeholder={ __( 'Animation Type', 'ultimate-addons-for-gutenberg' ) }
				onChange={ ( selection ) => {
					setAttributes( { UAGAnimationType: selection.value } );
					// Play animation when the animation type is changed.
					// We pass in 'value' since the UAGAnimationType may still hold the old animation type value.
					playAnimation( selection.value );
				} }
				options={ AnimationList }
				value={
					UAGAnimationType !== ''
						? AnimationSelectControlObject[ UAGAnimationType ]
						: AnimationSelectControlObject.none
				}
				defaultValue={
					UAGAnimationType !== ''
						? AnimationSelectControlObject[ UAGAnimationType ]
						: AnimationSelectControlObject.none
				}
				isSearchable={ true }
				className="uagb-animation-type-searchable-select"
				// Library specific prop.
				classNamePrefix="uagb-animation-type-select"
			/>
			{ proValidOptions && proAnimationOptions }

			{ ! uagb_blocks_info.spectra_pro_status &&
				<br />
			}

			{ UAGAnimationType && ! proValidOptions && (
				<Button
					className="uagb-animation__play-button"
					onClick={ () => playAnimation() }
					variant="tertiary"
				>
					{ __( 'Preview', 'ultimate-addons-for-gutenberg' ) }
				</Button>
			) }
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
		layout,
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
	
	// For adding layout class to the block, block should be a container block and layout should be either grid or flex.
	if ( 'uagb/container' === blockType?.name && ( 'grid' === layout || 'flex' === layout ) ) {
		extraProps.className = classnames( extraProps.className, 'uagb-layout-' + layout );
	}

	return extraProps;
}

// This adds AOS related data attributes to Gutenberg wrapper in editor.
const withAOSWrapperProps = createHigherOrderComponent( ( BlockListBlock ) => {
	return ( props ) => {
		const { attributes } = props;
		const {
			UAGAnimationType,
			UAGAnimationTime,
			UAGAnimationDelay,
			UAGAnimationEasing,
			UAGAnimationRepeat,
			layout,
		} = attributes;

		const wrapperProps = {
			...props.wrapperProps,
		};

		if ( UAGAnimationType !== '' ) {
			wrapperProps[ 'data-aos-duration' ] = UAGAnimationTime;
			wrapperProps[ 'data-aos-delay' ] = UAGAnimationDelay;
			wrapperProps[ 'data-aos-easing' ] = UAGAnimationEasing;
			if ( ! UAGAnimationRepeat ) {
				wrapperProps[ 'data-aos-once' ] = 'true';
			}
		}

		if( [ 'grid', 'flex' ].includes( layout ) ) {
			wrapperProps.className = classnames( wrapperProps.className, 'uagb-layout-' + layout );
		}

		return <BlockListBlock { ...props } wrapperProps={ wrapperProps } />;
	};
}, 'withAOSWrapperProps' );

//For UAG Blocks.
addFilter( 'uag_advance_tab_content', 'uagb/advanced-display-condition', function ( content, props ) {
	if ( ! props ) {
		return content;
	}

	const { isSelected, name } = props;

	// InnerBlocks and other blocks to be excluded from most extensions.
	const excludeBlocks = [
		'uagb/buttons-child',
		'uagb/faq-child',
		'uagb/icon-list-child',
		'uagb/social-share-child',
		'uagb/restaurant-menu-child',
		'uagb/slider-child',
		'uagb/sure-forms', 
		'uagb/sure-cart-product', 
		'uagb/sure-cart-checkout'
	];

	// Legacy blocks to be excluded from some extensions.
	const excludeLegacyBlocks = [
		// Legacy Blocks.
		'uagb/cf7-styler',
		'uagb/wp-search',
		'uagb/gf-styler',
		'uagb/columns',
		'uagb/section',
	];

	// Blocks to be excluded from the display conditions.
	const excludeDisplayConditionBlocks = [
		'uagb/popup-builder',
	];

	// Blocks to be excluded from the Z-index conditions.
	const excludeZIndexBlocks = [
		'uagb/popup-builder',
		...excludeLegacyBlocks,
	];

	// Blocks to be excluded from animations.
	const excludeBlocksAnimations = [
		'uagb/content-timeline-child',
		'uagb/slider-child',
		'uagb/content-timeline-child',
		'uagb/popup-builder',
		'uagb/sure-forms',
		'uagb/sure-cart-product',
		'uagb/sure-cart-checkout',
		...excludeLegacyBlocks,
	];

	// To disable animations WITHIN some blocks.
	const excludeAnimationsWithin = [
		'uagb/tabs',
		'uagb/tabs-child',
		'uagb/countdown',
		'uagb/modal',
		'uagb/popup-builder',
	];

	// Blocks to be excluded from motion effects.
	const excludeMotionFXBlocks = [
		'uagb/content-timeline-child',
		...excludeLegacyBlocks,
	];

	const getParentBlocks = select( 'core/block-editor' ).getBlockParents( props.clientId );

	let notHasDisallowedParentForAnimations = true;

	// Currently we are disallowing animations feature in Tabs & Countdown blocks.
	if ( getParentBlocks.length ) {
		for ( let i = 0; i < getParentBlocks.length; i++ ) {
			const currentParent = select( 'core/block-editor' ).getBlock( getParentBlocks[ i ] );

			if ( excludeAnimationsWithin.includes( currentParent.name ) ) {
				notHasDisallowedParentForAnimations = false;
				break;
			}
		}
	}

	return (
		<>
			{/* Show the advanced position settings */}
			{ ( isSelected && 'uagb/container' === name ) && <RenderAdvancedPositionPanel { ...props } /> }
			{/* Show the animation settings */}
			{ isSelected &&
				'enabled' === enableAnimationsExtension &&
				! excludeBlocksAnimations.includes( name ) &&
				notHasDisallowedParentForAnimations && (
					<UAGAdvancedPanelBody
						title={ __( 'Animations', 'ultimate-addons-for-gutenberg' ) }
						initialOpen={ ! 'uagb/container' === name }
						className="block-editor-block-inspector__advanced uagb-extention-tab"
					>
						{ animationOptions( props ) }
						{'not-installed' === uagb_blocks_info.spectra_pro_status && (
							<UpgradeComponent
								control={
									{
										title: __( 'Take Animations to the next level with powerful design features', 'ultimate-addons-for-gutenberg' ),
										choices: [
											{
												title: __( 'Set delays and durations', 'ultimate-addons-for-gutenberg' ),
												description: '',
											},
											{
												title: __( 'Change animation pacing', 'ultimate-addons-for-gutenberg' ),
												description: '',
											},
											{
												title: __( 'Repeat on scroll', 'ultimate-addons-for-gutenberg' ),
												description: '',
											},
											{
												title: __( 'Animate all nested blocks inside containers with delays', 'ultimate-addons-for-gutenberg' ),
												description: '',
											},
										],
										renderAs: 'list',
										campaign: 'advanced-animations',
									}
								}
							/>
						)}
					</UAGAdvancedPanelBody>
				)
			}
			{/* Show the following extension for all non-excluded blocks. */}
			{ isSelected && ! excludeBlocks.includes( name ) && (
				<>
					{/* Show the display conditions settings */}
					{ ( 'enabled' === enableConditions && ! excludeDisplayConditionBlocks.includes( name ) ) && (
						<UAGAdvancedPanelBody
							title={ __( 'Display Conditions', 'ultimate-addons-for-gutenberg' ) }
							initialOpen={ false }
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
					{/* Show the responsive conditions settings */}
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
					{/* Show the Z-index settings */}
					{ ! excludeZIndexBlocks.includes( name ) && (
						<UAGAdvancedPanelBody
							title={ __( 'Z-Index', 'ultimate-addons-for-gutenberg' ) }
							initialOpen={ false }
							className="block-editor-block-inspector__advanced uagb-extention-tab"
						>
							{ zIndexOptions( props ) }
						</UAGAdvancedPanelBody>
					) }
					{/* Show the Motion Effects Settings */}
					{ 'enabled' === enableMotionEffectsExtension && ! excludeMotionFXBlocks.includes( name ) &&
						applyFilters( 'spectra.motion-effects-extension.panel', '', name )
					}
				</>
			) }
		</>
	);
} );

addFilter( 'editor.BlockListBlock', 'uagb/with-aos-wrapper-props', withAOSWrapperProps );
addFilter( 'blocks.getSaveContent.extraProps', 'uagb/apply-extra-class', ApplyExtraClass );
