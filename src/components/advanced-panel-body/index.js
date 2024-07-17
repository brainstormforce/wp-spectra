import { PanelBody } from '@wordpress/components';
import { useRef, memo, useState, useEffect } from '@wordpress/element';
import getUAGEditorStateLocalStorage from '@Controls/getUAGEditorStateLocalStorage';
import { select } from '@wordpress/data';
import { applyFilters } from '@wordpress/hooks';

const UAGAdvancedPanelBody = ( props ) => {
	const { children, className = '' } = props;

	const panelRef = useRef( null );
	// Below code is to set the setting state of Tab for each block.
	const { getSelectedBlock } = select( 'core/block-editor' );
	const blockName = getSelectedBlock()?.name;
	const uagSettingState = getUAGEditorStateLocalStorage( 'uagSettingState' );
	const [ panelNameForHook, setPanelNameForHook ] = useState( 'style' );

	const getInspectorTabName = () => {
		let inspectorTabName = 'style';
		if ( panelRef?.current?.parentElement?.classList.contains( 'uagb-tab-content-general' ) ) {
			inspectorTabName = 'general';
		}
		if ( panelRef?.current?.parentElement?.classList.contains( 'uagb-tab-content-advance' ) ) {
			inspectorTabName = 'advance';
		}

		return inspectorTabName;
	};

	useEffect( () => {
		setPanelNameForHook( getInspectorTabName() );
	}, [ panelRef ] );

	const onPanelToggle = () => {
		if ( 'enabled' === uagb_blocks_info.collapse_panels ) {
			const siblings = getSiblings( panelRef.current );

			siblings.forEach( ( element ) => {
				element.querySelector( '.components-button' ).click();
			} );
		}

		let match = false;
		panelRef?.current?.classList.forEach( function ( value ) {
			if ( value.includes( 'uag-advance-panel-body' ) ) {
				match = value;
			}
		} );
		let inspectorTabName = 'style';
		if ( panelRef?.current?.parentElement?.classList.contains( 'uagb-tab-content-general' ) ) {
			inspectorTabName = 'general';
		}
		if ( panelRef?.current?.parentElement?.classList.contains( 'uagb-tab-content-advance' ) ) {
			inspectorTabName = 'advance';
		}

		const data = {
			...uagSettingState,
			[ blockName ]: {
				...uagSettingState?.[ blockName ],
				selectedPanel: match,
				selectedTab: inspectorTabName,
			},
		};

		const uagLocalStorage = getUAGEditorStateLocalStorage();
		if ( uagLocalStorage ) {
			uagLocalStorage.setItem( 'uagSettingState', JSON.stringify( data ) );
		}
	};

	const getSiblings = function ( elem ) {
		const siblings = [];
		let sibling = elem.parentNode.firstChild;

		while ( sibling ) {
			if ( sibling.nodeType === 1 && sibling !== elem && sibling.classList.contains( 'is-opened' ) ) {
				siblings.push( sibling );
			}
			sibling = sibling.nextSibling;
		}

		return siblings;
	};

	const panelTitle = props?.title
		? props?.title
				.toLowerCase()
				.replace( /[^a-zA-Z ]/g, '' )
				.replace( /\s+/g, '-' )
		: '';

	const blockNameForHook = blockName.split( '/' ).pop();
	const tabBodyBefore = applyFilters(
		`spectra.${ blockNameForHook }.${ panelNameForHook }.${ panelTitle }.before`,
		'',
		blockName
	);
	const tabBodyAfter = applyFilters(
		`spectra.${ blockNameForHook }.${ panelNameForHook }.${ panelTitle }`,
		'',
		blockName
	);

	return (
		<PanelBody
			{ ...props }
			onToggle={ onPanelToggle }
			ref={ panelRef }
			className={ `uag-advance-panel-body-${ panelTitle } ${ className }` }
		>
			{ tabBodyBefore }
			{ children }
			{ tabBodyAfter }
		</PanelBody>
	);
};
export default memo( UAGAdvancedPanelBody );
