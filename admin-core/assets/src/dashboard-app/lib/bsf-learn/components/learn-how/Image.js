import { useState } from 'react';
import { Skeleton, Loader } from '@bsf/force-ui';

/**
 * Image component with loading skeleton
 *
 * @param {string} src - Image source URL
 * @param {string} alt - Image alt text
 */
const Image = ( { src, alt } ) => {
	const [ isLoaded, setIsLoaded ] = useState( false );

	return (
		<div className="relative w-full shadow-sm rounded-lg overflow-hidden">
			{ ! isLoaded && (
				<Skeleton className="w-full h-64 flex items-center justify-center">
					<Loader
						className=""
						icon={null}
						size="lg"
						variant="primary"
					/>
				</Skeleton>
			) }
			<img
				src={ src }
				alt={ alt || '' }
				className={ `w-full h-auto border-0.5 border-solid border-border-subtle ${ isLoaded ? 'block' : 'hidden' }` }
				onLoad={ () => setIsLoaded( true ) }
			/>
		</div>
	);
};

export default Image;
