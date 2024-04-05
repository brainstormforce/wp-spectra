import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';

const NoSearchResult = ( { keyword } ) => {
	return (
		<div className="flex items-start justify-start gap-6 p-5 bg-background-secondary w-full h-fit rounded-lg">
			<MagnifyingGlassIcon className="w-10 h-10 text-accent-spectra" />
			<div className="space-y-1">
				<h6 className="text-heading-text text-xl font-semibold leading-7 m-0 p-0">Your search - { keyword } - did not match any pattern designs.</h6>
				<p className="m-0 p-0 text-body-text text-base font-normal leading-6">Try searching with different keywords</p>
			</div>
		</div>
	);
};

export default NoSearchResult;
