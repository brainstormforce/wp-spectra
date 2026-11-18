import { forwardRef } from '@wordpress/element';
import { classNames } from '../../../utils/helpers';

const SingleBlockLoadingSkeleton = forwardRef( ( { type = 1, className, ...props }, ref ) => {
	const getSkeleton = () => {
		switch ( type.toString() ) {
			case '1':
				return (
					<div className="w-full h-full grid grid-cols-12 grid-rows-1 items-stretch space-x-5 2xl:space-x-9 bg-white pt-8 2xl:pt-[3.375rem] px-4 2xl:px-8 border border-solid border-border-primary overflow-hidden">
						<div className="col-span-5 space-y-2.5">
							<div
								className="h-3 2xl:h-6 w-full overflow-hidden relative bg-gray-200"
								data-placeholder
							/>
							<div
								className="h-3 2xl:h-6 w-10/12 overflow-hidden relative bg-gray-200"
								data-placeholder
							/>
							<div
								className="h-2 2xl:h-3 w-10/12 overflow-hidden relative bg-gray-200"
								data-placeholder
							/>
							<div
								className="h-2 2xl:h-3 w-10/12 overflow-hidden relative bg-gray-200"
								data-placeholder
							/>
							<div className="w-2/5 flex items-center gap-2">
								<div
									className="h-2.5 2xl:h-4 w-1/3 overflow-hidden relative bg-gray-200"
									data-placeholder
								/>
								<div
									className="h-2.5 2xl:h-4 w-1/3 overflow-hidden relative bg-gray-200"
									data-placeholder
								/>
							</div>
							<div className="w-2/5 last:!mt-5 flex justify-between items-center">
								<div
									className="h-3 2xl:h-5 w-1/3 overflow-hidden relative bg-gray-200"
									data-placeholder
								/>
								<div
									className="h-3 2xl:h-5 w-1/3 overflow-hidden relative bg-gray-200"
									data-placeholder
								/>
							</div>
						</div>
						<div
							className="col-span-7 h-full overflow-hidden relative bg-gray-200"
							data-placeholder
						/>
					</div>
				);
			case '2':
				return (
					<div className="w-full h-full grid grid-cols-1 grid-rows-6 gap-y-2 items-stretch bg-white pt-8 2xl:pt-[3.375rem] px-4 2xl:px-8 border border-solid border-border-primary overflow-hidden">
						<div className="row-span-2 flex items-start justify-between gap-8">
							<div className="w-1/2 space-y-2">
								<div
									className="h-3 2xl:h-6 w-full overflow-hidden relative bg-gray-200"
									data-placeholder
								/>
								<div
									className="h-3 2xl:h-6 w-4/5 overflow-hidden relative bg-gray-200"
									data-placeholder
								/>
							</div>
							<div className="w-1/2 space-y-2">
								<div
									className="h-2 2xl:h-3 w-full overflow-hidden relative bg-gray-200"
									data-placeholder
								/>
								<div
									className="h-2 2xl:h-3 w-3/4 overflow-hidden relative bg-gray-200"
									data-placeholder
								/>
								<div
									className="h-3 2xl:h-6 w-1/4 last:!mt-2.5 overflow-hidden relative bg-gray-200"
									data-placeholder
								/>
							</div>
						</div>
						<div
							className="row-span-4 h-full overflow-hidden relative bg-gray-200"
							data-placeholder
						/>
					</div>
				);
			case '3':
				return (
					<div className="w-full h-full grid grid-cols-1 grid-rows-6 items-stretch bg-white pt-8 2xl:pt-[3.375rem] px-4 2xl:px-8 border border-solid border-border-primary overflow-hidden">
						<div className="row-span-4 flex items-start space-x-4 2xl:space-x-8 justify-between">
							<div className="w-1/2 space-y-2.5">
								<div
									className="h-3 2xl:h-6 w-3/4 overflow-hidden relative bg-gray-200"
									data-placeholder
								/>
								<div
									className="h-3 2xl:h-6 w-2/4 overflow-hidden relative bg-gray-200"
									data-placeholder
								/>
								<div
									className="h-2 2xl:h-3 w-3/5 overflow-hidden relative bg-gray-200"
									data-placeholder
								/>
								<div
									className="h-2 2xl:h-3 w-1/3 overflow-hidden relative bg-gray-200"
									data-placeholder
								/>
							</div>
							<div className="w-1/2 h-full flex items-center gap-2">
								<div
									className="h-full w-full overflow-hidden relative bg-gray-200"
									data-placeholder
								/>
							</div>
						</div>
						<div className="row-span-2 w-full flex items-center justify-between gap-2">
							<div className="w-1/3 space-y-2.5">
								<div
									className="h-2 2xl:h-4 w-2/4 overflow-hidden relative bg-gray-200"
									data-placeholder
								/>
								<div
									className="h-2 2xl:h-4 w-1/3 overflow-hidden relative bg-gray-200"
									data-placeholder
								/>
							</div>
							<div className="w-1/3 space-y-2.5">
								<div
									className="h-2 2xl:h-4 w-2/4 overflow-hidden relative bg-gray-200"
									data-placeholder
								/>
								<div
									className="h-2 2xl:h-4 w-1/3 overflow-hidden relative bg-gray-200"
									data-placeholder
								/>
							</div>
							<div className="w-1/3 space-y-2.5">
								<div
									className="h-2 2xl:h-4 w-2/4 overflow-hidden relative bg-gray-200"
									data-placeholder
								/>
								<div
									className="h-2 2xl:h-4 w-1/3 overflow-hidden relative bg-gray-200"
									data-placeholder
								/>
							</div>
						</div>
					</div>
				);
			default:
				return (
					<div className="w-full h-full grid grid-cols-12 grid-rows-1 items-stretch space-x-3 2xl:space-x-9 bg-white pt-8 2xl:pt-[3.375rem] px-4 2xl:px-8 border border-solid border-border-primary overflow-hidden">
						<div className="col-span-5 space-y-2.5">
							<div
								className="h-3 2xl:h-6 w-full overflow-hidden relative bg-gray-200"
								data-placeholder
							/>
							<div
								className="h-3 2xl:h-6 w-10/12 overflow-hidden relative bg-gray-200"
								data-placeholder
							/>
							<div
								className="h-1.5 2xl:h-3 w-10/12 overflow-hidden relative bg-gray-200"
								data-placeholder
							/>
							<div
								className="h-1.5 2xl:h-3 w-10/12 overflow-hidden relative bg-gray-200"
								data-placeholder
							/>
							<div className="w-2/5 flex items-center gap-2">
								<div
									className="h-2 2xl:h-4 w-1/3 overflow-hidden relative bg-gray-200"
									data-placeholder
								/>
								<div
									className="h-2 2xl:h-4 w-1/3 overflow-hidden relative bg-gray-200"
									data-placeholder
								/>
							</div>
							<div className="w-2/5 last:!mt-5 flex justify-between items-center">
								<div
									className="h-2.5 2xl:h-5 w-1/3 overflow-hidden relative bg-gray-200"
									data-placeholder
								/>
								<div
									className="h-2.5 2xl:h-5 w-1/3 overflow-hidden relative bg-gray-200"
									data-placeholder
								/>
							</div>
						</div>
						<div
							className="col-span-7 h-full overflow-hidden relative bg-gray-200"
							data-placeholder
						/>
					</div>
				);
		}
	};

	return (
		<div
			ref={ ref }
			className={ classNames( 'p-4 w-full h-[calc(100vh_/_3)]', className ) }
			{ ...props }
		>
			{ getSkeleton() }
		</div>
	);
} );

export default SingleBlockLoadingSkeleton;
