import * as actionTypes from './action-types';
import { clearSessionStorage, setToSessionStorage } from '../utils/helpers';
import { SESSION_STORAGE_KEY } from '../utils/constants';

export const saveCurrentState = ( { getState } ) => {
	return ( next ) => ( action ) => {
		const returnValue = next( action );

		try {
			const { type: actionType } = action;
			const { dynamicContent, onboardingAI: { stepData: { selectedImages = [] } } } = getState();
			if (
				actionType === actionTypes.DYNAMIC_CONTENT_SYNC_COMPLETE ||
				actionType === actionTypes.SET_DYNAMIC_CONTENT
			) {
				clearSessionStorage( SESSION_STORAGE_KEY );
				setToSessionStorage( SESSION_STORAGE_KEY, { dynamicContent, selectedImages } );
			}
		} catch ( error ) {
			// Do nothing.
		}

		return returnValue;
	};
};
