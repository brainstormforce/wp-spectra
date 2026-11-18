import { useEffect } from '@wordpress/element';
import { useSelect } from '@wordpress/data';
import { STORE_KEY } from '../../../store';
import Type from './type';
import Description from './description';
import BuildPage from './build-page';

const steps = [
	<Type key="type-selection" />,
	<Description key="description" />,
	<BuildPage key="build-page" />,
];

const OnboardingPagesAI = () => {
	const { togglePopup, currentStep } = useSelect( ( select ) => {
		const { getTogglePopup, getOnboardingPageAI } = select( STORE_KEY );
		return {
			togglePopup: getTogglePopup(),
			...getOnboardingPageAI(),
		};
	}, [] );

	useEffect( () => {
		if ( true === togglePopup ) {
			document.body.classList.add( 'ast-block-templates-modal-open' );
			const modalWrap = document
				.getElementById( 'ast-block-templates-modal-wrap' );
			if ( ! modalWrap ) {
				return;
			}
			modalWrap.classList.add( 'open' );
		}
	}, [ togglePopup ] );

	return (
		<div className="spectra-ai flex-1 overflow-x-hidden h-[calc(100vh_-_5rem)] bg-white">
			<div className="w-full h-full flex flex-col mx-auto">
				{
					steps[ currentStep - 1 ]
				}
			</div>
		</div>
	);
};
export default OnboardingPagesAI;
