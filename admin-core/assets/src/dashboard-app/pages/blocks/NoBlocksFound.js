import { Button } from '@bsf/force-ui';

const NoBlocksFound = ( { handleClearFilters } ) => (
	<div className="bg-background-primary flex justify-center items-center w-full h-[160px] rounded-lg">
		<div className="flex flex-col gap-2 items-center">
			<div className="font-medium text-text-primary text-lg">Oops! No blocks found</div>

			<div className="text-sm text-text-secondary">Try changing the filters or search term</div>

			<Button
				className="mt-4"
				size="sm"
				tag="button"
				type="button"
				variant="primary"
				onClick={ () => handleClearFilters() }
			>
				Show all blocks
			</Button>
		</div>
	</div>
);

export default NoBlocksFound;
