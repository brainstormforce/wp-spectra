import { TextSkeleton, RectSkeleton } from '@Skeleton';

const SettingsSkeleton = () => {

    return (
        <main className="max-w-[77rem] mx-auto my-[2.43rem] bg-white rounded-[0.2rem] shadow overflow-hidden h-[34rem]">
            <div className="lg:grid lg:grid-cols-12 lg:gap-x-8 h-full">
                <aside className="py-6 px-2 ml-8 sm:px-6 lg:py-6 lg:px-0 lg:col-span-3 border-r">
                    <nav className="space-y-1">
					{ Array( 5 )
					.fill()
					.map( ( i, index ) => {
						return (
							<RectSkeleton key={index} width="200px" height="45px" />
						);
					} ) }
                    </nav>
                </aside>
                <div className='space-y-4 mt-8 mb-0 mr-8 sm:px-6 lg:px-0 lg:col-span-9'>
					<TextSkeleton fontSize="35px" width="225px" />
					<TextSkeleton width="80%" />

					<TextSkeleton fontSize="35px" width="300px" />
					<TextSkeleton width="60%" />

					<TextSkeleton fontSize="35px" width="210px" />
					<TextSkeleton width="65%" />
                </div>
            </div>
        </main>
    );
};

export default SettingsSkeleton;
