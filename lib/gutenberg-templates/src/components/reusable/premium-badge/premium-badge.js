import { classNames } from '../../../utils/helpers';

const PremiumBadge = ( { className } ) => {
	return (
		<span
			className={ classNames(
				'py-1 px-2 text-xs leading-3 text-heading-text font-semibold rounded bg-premium-badge uppercase',
				className
			) }
		>
			Premium
		</span>
	);
};

export default PremiumBadge;
