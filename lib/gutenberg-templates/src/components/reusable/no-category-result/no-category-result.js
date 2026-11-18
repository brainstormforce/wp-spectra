import { __ } from '@wordpress/i18n';

const NoCategoryResult = () => {
	return (
		<div className="flex flex-col sm:flex-row items-start justify-center gap-6 p-5 bg-background-secondary w-full h-fit rounded-lg">
			<div className="space-y-1">
				<h6 className="text-heading-text text-xl font-semibold leading-7 m-0 p-0">
					{ __(
						'Your selected category did not match any pattern designs.',
						'gutenberg-templates'
					) }
				</h6>
				<p className="m-0 p-0 text-body-text text-base font-normal leading-6">
					{ __(
						'Try with different category or sync library if outdated',
						'gutenberg-templates'
					) }
				</p>
			</div>
		</div>
	);
};

export default NoCategoryResult;
