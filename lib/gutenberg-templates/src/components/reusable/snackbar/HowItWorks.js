import { VideoCameraIcon } from '@heroicons/react/24/outline';
import { classNames } from '../../../utils/helpers';

const HowItWorks = ( { videoIntroURL, className } ) => {
	return (
		<a
			className={ classNames(
				'no-underline text-[#111827] hover:text-[#111827] items-center gap-2 focus:shadow-none',
				'2xl:mr-5',
				className
			) }
			href={ videoIntroURL }
			target="_blank"
			rel="noreferrer"
		>
			<VideoCameraIcon className="w-4 h-4" />
			<span className="underline text-inherit hover:text-inherit">
				How it works?
			</span>
		</a>
	);
};

export default HowItWorks;
