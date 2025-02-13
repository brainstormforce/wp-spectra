import { Skeleton } from '@bsf/force-ui';

const FSEFontFamiliesSkeleton = () => {

    return (
		<>
			<div className="lg:w-full max-w-[696px] mx-auto h-full pt-8 pr-4">
				<div className="flex justify-between items-center">
					<Skeleton variant="rectangular" className="w-[200px] h-[32px]" />
				</div>

				<div className="lg:w-full rounded-xl space-y-6 mt-6">
					<Skeleton variant="rectangular" className="w-full h-[120px] rounded-xl shadow" />
					<Skeleton variant="rectangular" className="w-full h-[120px] rounded-xl shadow" />
					<Skeleton variant="rectangular" className="w-full h-[120px] rounded-xl shadow" />
				</div>
			</div>
		</>
    );
};

export default FSEFontFamiliesSkeleton;
