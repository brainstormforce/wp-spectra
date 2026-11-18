import AIStartup from '../../../reusable/ai-startup/ai-startup';
import Button from '../../../reusable/button/button';
import { SparklesIcon } from '@heroicons/react/24/outline';

const AIStartupGetStarted = ( {
	title = 'Design Website 10X Faster with Zip AI',
	description = 'Our design library includes hundreds of Page Templates and Block Patterns. Zip AI takes it to the next level by inserting beautiful images and unique content that are specifically optimized for your website.',
	primaryBtnText = 'Get Started',
	primaryBtnIcon,
	secondaryBtnText = 'I’ll do it later',
	onClickPrimary,
	onClickSecondary,
} ) => {
	const handleClickPrimary = ( event ) => {
		if ( typeof onClickPrimary === 'function' ) {
			onClickPrimary( event );
		}
	};

	const handleClickSecondary = ( event ) => {
		if ( typeof onClickSecondary === 'function' ) {
			onClickSecondary( event );
		}
	};
	return (
		<AIStartup
			title={ title }
			description={ description }
			primaryButton={
				<Button
					variant="primary"
					hasPrefixIcon
					className="w-full md:w-fit"
					onClick={ handleClickPrimary }
				>
					{ !! primaryBtnIcon ? (
						primaryBtnIcon
					) : (
						<SparklesIcon className="w-6 h-6" />
					) }
					<span>{ primaryBtnText }</span>
				</Button>
			}
			secondaryButton={
				<Button
					variant="link"
					className="text-secondary-text w-full md:w-fit"
					onClick={ handleClickSecondary }
				>
					{ secondaryBtnText }
				</Button>
			}
		/>
	);
};

export default AIStartupGetStarted;
