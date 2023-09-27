/**
 * BLOCK: Container
 */
import styling from './styling';
import { useEffect, useLayoutEffect, useMemo } from '@wordpress/element';
import scrollBlockToView from '@Controls/scrollBlockToView';
import { migrateBorderAttributes } from '@Controls/generateAttributes';
import responsiveConditionPreview from '@Controls/responsiveConditionPreview';
import Settings from './settings';
import Render from './render';
//  Import CSS.
import './style.scss';
import { useSelect } from '@wordpress/data';
import styles from './editor.lazy.scss';
import DynamicCSSLoader from '@Components/dynamic-css-loader';
import { compose } from '@wordpress/compose';
import AddStaticStyles from '@Controls/AddStaticStyles';
import addInitialAttr from '@Controls/addInitialAttr';
import { containerWrapper } from './containerWrapper';
import { VariationPicker } from './variationPicker';

const UAGBContainer = ( props ) => {
	const {
		isSelected,
		attributes,
		attributes: {
			borderStyle,
			borderWidth,
			borderColor,
			borderHoverColor,
			borderRadius,
			variationSelected,
			UAGHideDesktop,
			UAGHideTab,
			UAGHideMob,
			backgroundType,
			backgroundVideoOpacity,
		},
		clientId,
		setAttributes,
		name,
		deviceType,
		context,
		hasDynamicContent
	} = props;
	
	const {
		isParentOfSelectedBlock,
		variations,
		defaultVariation,
		getBlockParents,
		parentBlocks,
	} = useSelect( ( select ) => {
		const coreBlocks = select( 'core/blocks' );
		const coreBlockEditor = select( 'core/block-editor' );
		const getBlockParentStore = coreBlockEditor?.getBlockParents( clientId );

		return {
			defaultVariation: coreBlocks?.getDefaultBlockVariation( name ),
			variations: coreBlocks?.getBlockVariations( name ),
			isParentOfSelectedBlock: coreBlockEditor?.hasSelectedInnerBlock( clientId, true ),
			getBlockParents : getBlockParentStore,
			parentBlocks : coreBlockEditor?.getBlocksByClientId( getBlockParentStore ),
		};
	} );

	// Check if a parent of this container is one of these special blocks with useMemo.
	const checkSpecialBlockAvailability = useMemo( ()=> {
		const attributesToUpdate = {
			hasSliderParent: false,
			hasPopupParent: false,
		};

		// Add the lists of special block cases.
		const specialBlocks = {
			sliderBlocks: [ 'uagb/slider', 'uagb/slider-child' ],
			popupBlocks: [ 'uagb/modal', 'uagb/popup-builder' ],
		};

		if ( parentBlocks?.length ) {
			for ( const parent in parentBlocks ) {
				const parentName = parentBlocks[parent]?.name;
				// For Slider.
				if ( specialBlocks.sliderBlocks.includes( parentName ) ) {
					attributesToUpdate.hasSliderParent = true;
				}

				// For Modal and Popup Builder.
				if ( specialBlocks.popupBlocks.includes( parentName ) ) {
					attributesToUpdate.hasPopupParent = true;
				}
			}
		}

		return attributesToUpdate;
	}, [] );

	props = { ...props, ...checkSpecialBlockAvailability };

	// Add and remove the CSS on the drop and remove of the component.
	useLayoutEffect( () => {
		styles.use();
		return () => {
			styles.unuse();
		};
	}, [] );

	if ( isParentOfSelectedBlock ) {
		const emptyBlockInserter = document.querySelector( '.block-editor-block-list__empty-block-inserter' );
		if ( emptyBlockInserter ) {
			emptyBlockInserter.style.display = 'none';
		}
	}

	useEffect( () => {
		// Check if a parent of this container is one of these special blocks.
		const attributesToUpdate = {};

		// Conditionally set the isBlockRootParent attribute
		if ( ! parentBlocks || parentBlocks.length === 0 || ! parentBlocks.some( parent => parent.name === 'uagb/container' ) ) {
			attributesToUpdate.isBlockRootParent = true;
		}

		// If the legacy video overlay opacity for video background was set, migrate it.
		if ( 'video' === backgroundType && backgroundVideoOpacity ) {
			attributesToUpdate.overlayOpacity = backgroundVideoOpacity;
			attributesToUpdate.backgroundVideoOpacity = 0;
		}

		// Compare with attribute and attributeToUpdate and update only if there is a change.
		if( attributesToUpdate.isBlockRootParent !== attributes.isBlockRootParent || attributesToUpdate.hasPopupParent !== attributes.hasPopupParent || attributesToUpdate.hasSliderParent !== attributes.hasSliderParent ) {
			setAttributes( attributesToUpdate );
		}

		// border
		if ( borderWidth || borderRadius || borderColor || borderHoverColor || borderStyle ) {
			migrateBorderAttributes(
				'container',
				{
					label: 'borderWidth',
					value: borderWidth,
				},
				{
					label: 'borderRadius',
					value: borderRadius,
				},
				{
					label: 'borderColor',
					value: borderColor,
				},
				{
					label: 'borderHoverColor',
					value: borderHoverColor,
				},
				{
					label: 'borderStyle',
					value: borderStyle,
				},
				setAttributes,
				attributes
			);
		}
	}, [] );

	useEffect( () => {
		if ( hasDynamicContent && ! attributes?.context ) {
			setAttributes( { context } );
		}
	}, [ context ] )

	const blockStyling = useMemo( () => styling( attributes, clientId, name, deviceType ), [ attributes, deviceType ] );

	useEffect( () => {
		scrollBlockToView();
	}, [ deviceType ] );

	useEffect( () => {
		responsiveConditionPreview( props );
	}, [ UAGHideDesktop, UAGHideTab, UAGHideMob, deviceType ] );

	if ( ! variationSelected && 0 === getBlockParents?.length ) {
		return <VariationPicker { ...{ ...props, variations, defaultVariation } } />
	}

	return (
		<>
			<DynamicCSSLoader { ...{ blockStyling } } />
			{ isSelected && <Settings { ...props } /> }
			<Render { ...props } />
		</>
	);
};

export default compose(
	containerWrapper,
	addInitialAttr,
	AddStaticStyles,
)( UAGBContainer );
