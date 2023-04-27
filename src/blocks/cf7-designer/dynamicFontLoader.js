import WebfontLoader from '@Components/typography/fontloader';
import { memo } from '@wordpress/element';

const DynamicFontLoader = ( { attributes } ) => {
	const {
		labelFontFamily,
		labelFontWeight,
		labelLoadGoogleFonts,
		inputFontFamily,
		inputFontWeight,
		inputLoadGoogleFonts,
		buttonFontFamily,
		buttonFontWeight,
		buttonLoadGoogleFonts,
		radioCheckFontFamily,
		radioCheckFontWeight,
		radioCheckLoadGoogleFonts,
		validationMsgFontFamily,
		validationMsgFontWeight,
		validationMsgLoadGoogleFonts,
		msgFontFamily,
		msgFontWeight,
		msgLoadGoogleFonts,
	} = attributes;

	let loadInputGoogleFonts;
	let loadButtonGoogleFonts;
	let loadLabelGoogleFonts;
	let loadRadioGoogleFonts;
	let loadValidationGoogleFonts;
	let loadMsgGoogleFonts;
	if ( labelLoadGoogleFonts === true ) {
		const labelconfig = {
			google: {
				families: [ labelFontFamily + ( labelFontWeight ? ':' + labelFontWeight : '' ) ],
			},
		};

		loadLabelGoogleFonts = <WebfontLoader config={ labelconfig }></WebfontLoader>;
	}

	if ( inputLoadGoogleFonts === true ) {
		const inputconfig = {
			google: {
				families: [ inputFontFamily + ( inputFontWeight ? ':' + inputFontWeight : '' ) ],
			},
		};

		loadInputGoogleFonts = <WebfontLoader config={ inputconfig }></WebfontLoader>;
	}

	if ( buttonLoadGoogleFonts === true ) {
		const buttonconfig = {
			google: {
				families: [ buttonFontFamily + ( buttonFontWeight ? ':' + buttonFontWeight : '' ) ],
			},
		};

		loadButtonGoogleFonts = <WebfontLoader config={ buttonconfig }></WebfontLoader>;
	}

	if ( radioCheckLoadGoogleFonts === true ) {
		const radioCheckconfig = {
			google: {
				families: [ radioCheckFontFamily + ( radioCheckFontWeight ? ':' + radioCheckFontWeight : '' ) ],
			},
		};

		loadRadioGoogleFonts = <WebfontLoader config={ radioCheckconfig }></WebfontLoader>;
	}

	if ( validationMsgLoadGoogleFonts === true ) {
		const validationMsgconfig = {
			google: {
				families: [
					validationMsgFontFamily + ( validationMsgFontWeight ? ':' + validationMsgFontWeight : '' ),
				],
			},
		};

		loadValidationGoogleFonts = <WebfontLoader config={ validationMsgconfig }></WebfontLoader>;
	}

	if ( msgLoadGoogleFonts === true ) {
		const msgconfig = {
			google: {
				families: [ msgFontFamily + ( msgFontWeight ? ':' + msgFontWeight : '' ) ],
			},
		};

		loadMsgGoogleFonts = <WebfontLoader config={ msgconfig }></WebfontLoader>;
	}

	return (
		<>
			{ loadInputGoogleFonts }
			{ loadButtonGoogleFonts }
			{ loadLabelGoogleFonts }
			{ loadRadioGoogleFonts }
			{ loadValidationGoogleFonts }
			{ loadMsgGoogleFonts }
		</>
	);
};

export default memo( DynamicFontLoader );
