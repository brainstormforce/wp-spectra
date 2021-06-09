import React, { useEffect } from 'react';
import { useStateValue } from '@Utils/StateProvider';
import { useSettingsValue } from '@Utils/SettingsProvider';

export default function InputEvents() {
	const [ { options }, dispatch ] = useStateValue();
	const [ { unsavedChanges }, setSettingsStatus ] = useSettingsValue();

	const baseInputChange = function ( e ) {
		const { name, value } = e.detail;

		if ( undefined !== options[ name ] ) {
			window.uagUnsavedChanges = true;
			dispatch( {
				type: 'SET_OPTION',
				name: name,
				value: value,
			} );

			// setSettingsStatus( {
			// 	status: 'UNSAVED_CHANGES',
			// 	trigger: 'change',
			// } );
		}
	};

	const fieldTypes = [
		{ type: 'select' },
		{ type: 'select2' },
		{ type: 'checkbox' },
		{ type: 'text' },
		{ type: 'textarea' },
		{ type: 'number' },
		{ type: 'radio' },
		{ type: 'color' },
		{ type: 'font' },
		{ type: 'product' },
		{ type: 'coupon' },
	];

	useEffect( () => {
		if ( options ) {
			fieldTypes.map( function ( field ) {
				document.addEventListener(
					`uag:${ field.type }:change`,
					baseInputChange
				);
			} );
		}

		return () => {
			fieldTypes.map( function ( field ) {
				document.removeEventListener(
					`uag:${ field.type }:change`,
					baseInputChange
				);
			} );
		};
	}, [ options ] );

	return;
}
