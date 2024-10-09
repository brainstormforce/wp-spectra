import { RectSkeleton } from '@Skeleton';

const BlocksSkeleton = () => {
	return (
		<>
			<div className="max-w-3xl mx-auto lg:max-w-[77rem] mb-[2.43rem]">
				<div className="hidden justify-between sm:flex">
					<div className="mr-96 mt-10 mb-8 font-semibold text-2xl lg:max-w-[80rem]"><RectSkeleton width="75px" height="32px" /></div>
					<span className="z-0 flex shadow-sm rounded-[0.2rem] items-center">
						<RectSkeleton width="100px" height="40px" style={{marginRight:'10px'}} />
						<RectSkeleton width="100px" height="40px" />
					</span>
				</div>
			</div>
			<div className="lg:max-w-[80rem] mx-auto grid grid-cols-2 gap-6 sm:grid-cols-3 p-6 pt-0">
			{ Array( 36 )
			.fill()
			.map( ( i ) => {
				return (
					<RectSkeleton key={i} width="400px" height="80px" />
				);
			} ) }
			</div>
		</>
	);
};

export default BlocksSkeleton;
