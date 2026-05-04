import { Skeleton } from '@bsf/force-ui';

/**
 * Skeleton loading component for BsfLearn
 * Shows loading state while fetching chapters data from API
 *
 * @since 1.0.0
 */
const BsfLearnSkeleton = () => {
	return (
		<>
			{/* First chapter skeleton (expanded view) */}
			<div className="border-0.5 border-solid border-border-subtle rounded-lg">
				<Skeleton
					variant="rectangular"
					className="w-full h-14 rounded-b-none rounded-t-lg bg-background-secondary"
				/>

				<div className="px-4">
					{ Array( 4 )
						.fill( 0 )
						.map( ( _, index ) => (
							<div
								key={ `step-skeleton-${ index }` }
								className="py-5 flex items-center gap-3"
							>
								<Skeleton
									variant="circular"
									className="w-6 h-6 bg-background-secondary"
								/>
								<div className="flex-1">
									<Skeleton
										variant="rectangular"
										className="w-2/3 h-5 bg-background-secondary"
									/>
								</div>
								<Skeleton
									variant="rectangular"
									className="w-[104px] h-8 bg-background-secondary"
								/>
							</div>
						) ) }
				</div>
			</div>

			{/* Remaining collapsed chapters */}
			{ Array( 4 )
				.fill( 0 )
				.map( ( _, index ) => (
					<Skeleton
						key={ `skeleton-${ index }` }
						variant="rectangular"
						className="w-full h-14 rounded-lg bg-background-secondary"
					/>
				) ) }
		</>
	);
};

export default BsfLearnSkeleton;
