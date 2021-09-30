import { useEffect } from 'react';
import { useStateValue } from '@Utils/StateProvider';

export default function InputEvents() {
	const [ { options }, dispatch ] = useStateValue();

	const baseInputChange = function ( e ) {
		let { name, value, id } = e.detail;
		if ( undefined !== options[ name ] ) {
			if ( 'blocks_activation_and_deactivation' === name ) {
				const optionsClone = { ...options[ name ] };
				optionsClone[ id ] = value;
				value = optionsClone;
			}
			dispatch( {
				type: 'SET_OPTION',
				name,
				value,
			} );
		}
	};

	const fieldTypes = [ { type: 'select' }, { type: 'toggle' } ];

	useEffect( () => {
		if ( options ) {
			fieldTypes.map( function ( field ) {
				return document.addEventListener(
							`uag:${ field.type }:change`,
							baseInputChange
						);
			} );
		}

		return () => {
			fieldTypes.map( function ( field ) {
				return document.removeEventListener(
					`uag:${ field.type }:change`,
					baseInputChange
				);
			} );
		};
	}, [ options ] );
}
