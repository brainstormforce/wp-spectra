
const OnePageSkeleton = () => {
	return (
		<div className="w-full h-full bg-white shadow-xlarge">
			<div className="w-full h-full overflow-hidden">
				<div className="px-5 pt-5">
					<div className="flex items-center justify-between mb-12 2xl:mb-20 overflow-hidden">
						<div data-placeholder className="relative bg-gray-200 h-8 2xl:h-10 w-3/12" />
						<div className="flex gap-4 2xl:gap-5 w-full justify-center items-center overflow-hidden">
							<div data-placeholder className="relative bg-gray-200 h-3 2xl:h-4 w-2/12" />
							<div data-placeholder className="relative bg-gray-200 h-3 2xl:h-4 w-2/12" />
							<div data-placeholder className="relative bg-gray-200 h-3 2xl:h-4 w-2/12" />
							<div data-placeholder className="relative bg-gray-200 h-3 2xl:h-4 w-2/12" />
						</div>
						<div data-placeholder className="relative bg-gray-200 h-8 2xl:h-10 w-3/12" />
					</div>
					<div className="flex flex-col gap-4 2xl:gap-5 items-center mb-8 2xl:mb-10 overflow-hidden">
						<div data-placeholder className="relative bg-gray-200 h-8 2xl:h-10 w-4/6" />
						<div data-placeholder className="relative bg-gray-200 h-8 2xl:h-10 w-1/2" />
						<div data-placeholder className="relative bg-gray-200 h-4 2xl:h-5 w-3/4" />
						<div data-placeholder className="relative bg-gray-200 h-4 2xl:h-5 w-4/6" />
					</div>
					<div className="flex gap-4 2xl:gap-6 justify-center overflow-hidden">
						<div data-placeholder className="relative bg-gray-200 h-12 2xl:h-14 w-1/5" />
						<div data-placeholder className="relative bg-gray-200 h-12 2xl:h-14 w-1/5" />
					</div>
				</div>
				<div data-placeholder className="relative mt-12 2xl:mt-24 bg-gray-200 h-full w-full" />
			</div>
		</div>
	);
};

export default OnePageSkeleton;
