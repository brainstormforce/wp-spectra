import { useSelect, useDispatch } from '@wordpress/data';
import { STORE_KEY } from '../store';
import { getColorClass, formatNumber } from '../utils/helpers';

const useCredits = () => {
	const { setCreditsDetails } = useDispatch( STORE_KEY );
	const { percentage, total, used, status, flatRates: { patternsLibrary, pagesLibrary, patternsCategory, pagesCategory }, free_user: isFreeUser } = useSelect( ( select ) => {
		const { getCreditsDetails } = select( STORE_KEY );
		return getCreditsDetails();
	}, [] );
	const creditsColorClassName = getColorClass( percentage );
	const remaining = total - used;
	const remainingPercentage = ( remaining / total ) * 100;

	/**
	 * Determines the balance status based on the percentage value.
	 * @param {number} percentageValue - The percentage value to determine the balance status.
	 * @return {{normal: boolean, warning: boolean, danger: boolean}} - An object containing the balance status.
	 */
	const getBalanceStatus = ( percentageValue ) => {
		const result = {
			normal: false,
			warning: false,
			danger: false,
		};
		if ( percentageValue <= 10 ) {
			result.danger = true;
		} else if ( percentageValue <= 20 ) {
			result.warning = true;
		} else {
			result.normal = true;
		}

		return result;
	};

	return {
		percentage,
		remainingPercentage,
		total,
		used,
		remaining,
		status,
		patternsLibraryRate: patternsLibrary,
		pagesLibraryRate: pagesLibrary,
		patternsCategoryRate: patternsCategory,
		pagesCategoryRate: pagesCategory,
		creditsColorClassName,
		formatNumber,
		setCreditsDetails,
		currentBalanceStatus: getBalanceStatus( remainingPercentage ),
		getBalanceStatus,
		isFreeUser,
	};
};

export default useCredits;
