import React from 'react';
import { useSelect, useDispatch } from '@wordpress/data';
import LanguageOptions from './language-options';
import { STORE_KEY } from '../../../store';

const LanguageSelection = () => {
	const { setWebsiteLanguageAIStep } = useDispatch( STORE_KEY );

	const { siteLanguage, siteLanguageList } = useSelect( ( select ) => {
		const { getAIStepData } = select( STORE_KEY );
		return getAIStepData();
	} );

	const handleSelectLanguage = ( lang ) => {
		setWebsiteLanguageAIStep( lang.code );
	};

	return (
		<div className="flex flex-col items-start gap-x-2">
			<h5 className="text-zip-app-heading !text-sm flex !font-medium leading-6 items-center !mb-2">
				The website will be in:
				<div className="ml-1 pt-1" />
			</h5>
			{ ! Array.isArray( siteLanguageList ) ||
			siteLanguageList.length === 0 ? (
				<div className="h-12 w-full inline-flex justify-start items-center gap-2 border border-solid border-border-tertiary py-2 pl-3 pr-8 rounded-md shadow-sm">
					<div className="w-8 h-full bg-gray-300 animate-pulse" />
					<span className="!shrink-0 w-px h-[14px] bg-border-tertiary" />
					<div className="w-full h-full bg-gray-300 animate-pulse" />
				</div>
			) : (
				<LanguageOptions
					onSelect={ handleSelectLanguage }
					value={ siteLanguageList.find(
						( lang ) => lang.code === siteLanguage
					) }
					showLabel={ false }
					classNameParent="w-full"
					classNameChild="py-2 pl-3 pr-8"
				/>
			) }
		</div>
	);
};

export default LanguageSelection;
