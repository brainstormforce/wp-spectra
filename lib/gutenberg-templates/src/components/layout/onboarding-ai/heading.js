import { classNames } from '../../../utils/helpers';

const Heading = ( { heading, subHeading, className } ) => {
	return (
		<div className={ classNames( 'space-y-3', className ) }>
			{ !! heading && (
				<div className="text-zip-app-label text-[1.75rem] font-semibold leading-9">
					{ heading }
				</div>
			) }
			{ !! subHeading && (
				<p className="text-body-text text-base font-normal">
					{ subHeading }
				</p>
			) }
		</div>
	);
};

export default Heading;
