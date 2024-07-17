import { TextSkeleton } from '@Skeleton';

const FSEFontFamiliesSkeleton = () => {

    return (
		<>
			<main className="max-w-[77rem] mx-auto my-[2.43rem] bg-white rounded-md overflow-hidden h-[36rem]">
				<div className="lg:grid lg:grid-cols-12 h-full">
					<div className='lg:col-span-9 p-8'>
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

export default FSEFontFamiliesSkeleton;
