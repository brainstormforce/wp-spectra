import { classNames } from '../../../utils/helpers';

const Heading = ( { heading, subHeading, className } ) => {
	return (
		<div className={ classNames( 'space-y-3', className ) }>
			{ !! heading && <h4>{ heading }</h4> }
			{ !! subHeading && (
				<p className="text-body-text text-[15px] font-normal leading-6">
					{ subHeading }
				</p>
			) }
		</div>
	);
};

export default Heading;
