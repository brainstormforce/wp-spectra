/**
 * nps-visibility.js
 *
 * Handles the visibility of NPS (Net Promoter Score) surveys for Starter Templates, Astra, and Spectra. 
 * Ensures that only one survey is displayed at a time when Spectra NPS is visible.
 */

document.addEventListener(
	'DOMContentLoaded',
	function () {
		// Retrieve NPS popup elements from the DOM.
		let spectraNPS = document.querySelector( '[data-id="nps-survey-ultimate-addons-for-gutenberg"]' );
		const astraNPS = document.querySelector( '[data-id="nps-survey-astra"]' );
		const astraSitesNPS = document.querySelector( '[data-id="nps-survey-astra-sites"]' );

		/* 
			If the `display_after` property is set to 0 and custom rendering logic is used,
			the NPS element might be an empty wrapper, as per the default behaviour from the library. 
			Remove the empty wrapper from the DOM.
		*/
		if ( spectraNPS ) {
			const wrapper = spectraNPS.querySelector( '.nps-survey-wrapper' );

			if ( wrapper && wrapper.innerHTML.trim() === '' ) {
				spectraNPS.parentNode.removeChild( spectraNPS );
				spectraNPS = null;
			}
		}

		// Hide Astra NPS if it is present in the DOM.
		if ( astraNPS ) {
			astraNPS.remove();

			// Checking if spectraNPS is not null.
			if ( ! spectraNPS ) {
				spectraNPS = document.querySelector( '[data-id="nps-survey-ultimate-addons-for-gutenberg"]' );
			}

			// Checking if we have the Spectra popup in the DOM.
			if ( spectraNPS ) {
				spectraNPS.style.display = 'block';
			}
		}

		// Hide Starter Templates NPS if it is present in the DOM.
		if ( astraSitesNPS ) {
			astraSitesNPS.remove();

			// Checking if spectraNPS is not null.
			if ( ! spectraNPS ) {
				spectraNPS = document.querySelector( '[data-id="nps-survey-ultimate-addons-for-gutenberg"]' );
			}

			// Checking if spectraNPS is not null.
			if ( spectraNPS ) {
				spectraNPS.style.display = 'block';
			}
		}
	}
);
