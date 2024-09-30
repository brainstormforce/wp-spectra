/**
 * BLOCK: Buttons Child - Edit Class
 */

// Import classes
import styling from './styling';
import { useEffect, useState, useMemo } from '@wordpress/element';
import scrollBlockToView from '@Controls/scrollBlockToView';
import { migrateBorderAttributes } from '@Controls/generateAttributes';
import DynamicFontLoader from './dynamicFontLoader';
import DynamicCSSLoader from '@Components/dynamic-css-loader';
import Settings from './settings';
import Render from './render';
import { compose } from '@wordpress/compose';
import AddStaticStyles from '@Controls/AddStaticStyles';
import AddGBSStyles from '@Controls/AddGBSStyles';
import addInitialAttr from '@Controls/addInitialAttr';

const ButtonsChildComponent = ( props ) => {
	const {
		isSelected,
		clientId,
		attributes,
		attributes: { borderStyle, borderWidth, borderRadius, borderHColor, borderColor, label, globalBlockStyleId, relAttribute, noFollow },
		setAttributes,
		name,
		deviceType,
		context,
	} = props;

	const initialState = {
		isURLPickerOpen: false,
	};

	const [ state, setStateValue ] = useState( initialState );

	// Check label has dynamic content.
	const labelHasDynamicContent = label && -1 !== label.indexOf( '<span data-spectra-dc-field="' );
	
	// Including condition in props for child component.
	props = { ...props, labelHasDynamicContent };

	useEffect( () => {
		if ( noFollow && !relAttribute ) {
            setAttributes( { relString: 'nofollow noopener' } );
		} else if ( relAttribute && Array.isArray( relAttribute ) ) {
		    setAttributes( { relString: relAttribute.join( ' ' ) } );
		}
	}, [ relAttribute, noFollow ] );

	useEffect( () => {

		if( globalBlockStyleId ) {
			return;
		}
		
		// border migration
		if ( borderWidth || borderRadius || borderColor || borderHColor || borderStyle ) {
			migrateBorderAttributes(
				'btn',
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
					label: 'borderHColor',
					value: borderHColor,
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
		if ( labelHasDynamicContent && ! attributes?.context?.postId ){
			setAttributes( ( prevAttributes ) => ( {
				...prevAttributes,
				context,
			} ) );
		}
	}, [ labelHasDynamicContent, context?.postId ] )

	useEffect( () => {
		scrollBlockToView();
	}, [ deviceType ] );

	const blockStyling = useMemo( () => styling( attributes, clientId, name, deviceType ), [ attributes, deviceType ] );

	return (
		<>
			<DynamicCSSLoader { ...{ blockStyling } } />
			<DynamicFontLoader { ...{ attributes } } />
			{ isSelected && (
				<Settings
					{ ...props }
					state={ state }
					setStateValue={ setStateValue }
				/>
			) }
			<Render { ...props } />
		</>
	);
};

export default compose(
	addInitialAttr,
	AddStaticStyles,
	AddGBSStyles
)( ButtonsChildComponent );
