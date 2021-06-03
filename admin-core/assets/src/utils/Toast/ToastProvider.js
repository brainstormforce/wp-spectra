import React, { createContext, useContext, useState } from 'react';

import ToastContainer from './ToastContainer';
import ToastElement from './ToastElement';

import { generateUEID } from './utils';

// Create context `createContext`
const ToastContext = createContext();
const { Consumer, Provider } = ToastContext;

// Provider
export function ToastProvider( { data = {}, children } ) {
	const {
		autoDismiss = true,
		autoDismissTimeout = 5000,
		transitionDuration = 220,
	} = data;

	const [ toasts, setToastsValue ] = useState( [] );

	// Internal Helpers
	// ------------------------------

	const has_toast = ( id ) => {
		if ( ! toasts.length ) {
			return false;
		}

		return Boolean( toasts.filter( ( t ) => t.id === id ).length );
	};

	const dismiss_toast = ( id ) => () => {
		remove( id );
	};

	/* ------- Public API ------- */
	const add = ( content, options = {} ) => {
		const id = options.id || generateUEID();
		/*const callback = () => cb( id );*/

		// bail if a toast exists with this ID
		if ( has_toast( id ) ) {
			return;
		}

		// update the toast stack
		setToastsValue( ( oldToasts ) => {
			let newToast = { content, id, ...options };
			let newToasts = [ ...oldToasts, newToast ];

			return newToasts;
		} );

		// consumer may want to do something with the generated ID (and not use the callback)
		return id;
	};

	const remove = ( id ) => {
		// bail if NO toasts exists with this ID
		if ( ! has_toast( id ) ) {
			return;
		}

		setToastsValue( ( oldToasts ) => {
			return oldToasts.filter( ( t ) => t.id !== id );
		} );
	};

	const removeAll = () => {
		if ( ! toasts.length ) {
			return;
		}

		toasts.forEach( ( t ) => remove( t.id ) );
	};

	/*const update = ( id, options = {} ) => {
		const callback = () => cb( id );

		// bail if NO toasts exists with this ID
		if ( ! this.has( id ) ) {
			return;
		}

		// update the toast stack
		this.setState( ( state ) => {
			const old = state.toasts;
			const i = old.findIndex( ( t ) => t.id === id );
			const updatedToast = { ...old[ i ], ...options };
			const toasts = [
				...old.slice( 0, i ),
				updatedToast,
				...old.slice( i + 1 ),
			];

			return { toasts };
		}, callback );
	};*/

	const hasToasts = Boolean( toasts.length );

	return (
		<Provider value={ { add } }>
			{ children }

			<ToastContainer hasToasts={ hasToasts }>
				{ hasToasts &&
					toasts.map( ( { appearance, content, id } ) => (
						<ToastElement
							id={ id }
							autoDismiss={ autoDismiss }
							autoDismissTimeout={ autoDismissTimeout }
							appearance={ appearance }
							content={ content }
							dismiss_toast={ dismiss_toast( id ) }
						/>
					) ) }
			</ToastContainer>
		</Provider>
	);
}

/*export const ToastConsumer = ( {
	children,
}: {
	children: ( Context ) => Node,
} ) => <Consumer>{ ( context ) => children( context ) }</Consumer>;*/

// Get information from the data layer
export const useToasts = () => {
	const ctx = useContext( ToastContext );

	if ( ! ctx ) {
		throw Error(
			'The `useToasts` hook must be called from a descendent of the `ToastProvider`.'
		);
	}

	return {
		addToast: ctx.add,
		removeToast: ctx.remove,
		removeAllToasts: ctx.removeAll,
		// updateToast: ctx.update,
		// toastStack: ctx.toasts,
	};
};

/*export const withToastManager = ( Comp: ComponentType< * > ) =>
	// $FlowFixMe `forwardRef`
	React.forwardRef( ( props: *, ref: Ref< * > ) => (
		<ToastConsumer>
			{ ( context ) => (
				<Comp toastManager={ context } { ...props } ref={ ref } />
			) }
		</ToastConsumer>
	) );*/
