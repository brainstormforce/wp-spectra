import { Skeleton } from '@bsf/force-ui';

const SettingsSkeleton = () => {
	return (
		<div className="h-full flex">
			<div className="lg:w-64 uagb-settings-sidebar p-4">
				<div className="space-y-4">
					<div className="flex items-center space-x-3">
						<Skeleton variant="circular" className="lg:w-[150px] w-[24px] h-[24px]" />
					</div>
					{ Array( 7 )
						.fill()
						.map( ( _, index ) => (
							<div key={ `skeleton-item-${ index }` } className="flex items-center space-x-3">
								<Skeleton variant="circular" className="w-[24px] h-[24px]" />
								<Skeleton variant="rectangular" className="lg:w-[120px] w-[20px] h-[20px]" />
							</div>
						) ) }
				</div>
			</div>

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
		</div>
	);
};

export default SettingsSkeleton;
