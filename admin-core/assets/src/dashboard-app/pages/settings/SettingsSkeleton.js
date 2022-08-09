import { TextSkeleton, RectSkeleton } from '@Skeleton';

const SettingsSkeleton = () => {

    return (
		<>
			<div className="max-w-3xl mx-auto lg:max-w-[77rem] mt-10 mb-8 font-semibold text-2xl">
				<RectSkeleton width="100px" height="32px" />
			</div>
			<main className="max-w-[77rem] mx-auto my-[2.43rem] bg-white rounded-md shadow overflow-hidden h-[36rem]">
				<div className="lg:grid lg:grid-cols-12 h-full">
					<aside className="py-6 sm:px-6 lg:py-6 lg:px-5 lg:col-span-3">
						<nav className="space-y-1">
						{ Array( 7 )
						.fill()
						.map( ( i, index ) => {
							return (
								<div key={ `setting${ index }` } className='flex justify-left items-center py-3 space-x-3'>
									<RectSkeleton key={ `icon${ index }` } width="24px" height="24px" />
									<TextSkeleton key={ index } width="120px" fontSize="16px" />
								</div>
							);
						} ) }
						</nav>
					</aside>
					<div className='border-l lg:col-span-9 p-8'>
						<TextSkeleton fontSize="35px" width="225px" />
						<TextSkeleton width="80%" />
						<div className='h-8' />
						<TextSkeleton fontSize="35px" width="300px" />
						<TextSkeleton width="60%" />
						<div className='h-8' />
						<TextSkeleton fontSize="35px" width="210px" />
						<TextSkeleton width="65%" />
					</div>
				</div>
			</main>
		</>
    );
};

export default SettingsSkeleton;
