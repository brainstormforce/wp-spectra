import { RectSkeleton } from '@Skeleton';

const BlocksSkeleton = () => {
	return (
		<>
			<div className="max-w-3xl mx-auto lg:max-w-[77rem] mt-10 mb-8 font-semibold text-2xl">
				<RectSkeleton width="75px" height="32px" />
			</div>
			<div className="max-w-3xl mx-auto lg:max-w-[77rem] mb-[2.43rem]">
				<div className="hidden justify-between sm:flex">
					<nav className="flex space-x-4" aria-label="Tabs">
						<RectSkeleton width="25px" height="35px" />
						<RectSkeleton width="50px" height="35px" />
						<RectSkeleton width="50px" height="35px" />
						<RectSkeleton width="33px" height="35px" />
						<RectSkeleton width="37px" height="35px" />
						<RectSkeleton width="33px" height="35px" />
						<RectSkeleton width="27px" height="35px" />
						<RectSkeleton width="71px" height="35px" />
					</nav>
					<span className="z-0 flex shadow-sm rounded-[0.2rem] justify-center">
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
