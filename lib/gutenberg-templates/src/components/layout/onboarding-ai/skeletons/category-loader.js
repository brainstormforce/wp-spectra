import React from 'react';
import { classNames } from '../../../../utils/helpers';

const CategoryLoader = ( { layout, className } ) => {
	return (
		<div className={ className }>
			{ layout.map( ( clsses, index ) => (
				<div
					className={ classNames(
						`w-full h-10 bg-gray-300 rounded animate-pulse`,
						clsses
					) }
					key={ index }
				/>
			) ) }
		</div>
	);
};

export default CategoryLoader;
