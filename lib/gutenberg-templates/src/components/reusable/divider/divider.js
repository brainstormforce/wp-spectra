import { classNames } from '../../../utils/helpers';

const Divider = ( { className } ) => {
	return (
		<hr className={ classNames(
			'border-t-0 border-l-0 border-r-0 border-b border-border-primary',
			className
		) } />
	);
};

export default Divider;
