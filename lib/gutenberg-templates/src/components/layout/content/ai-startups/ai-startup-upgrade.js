import AIStartup from '../../../reusable/ai-startup/ai-startup';
import Button from '../../../reusable/button/button';
import { LockClosedIcon } from '@heroicons/react/24/outline';

const AIStartupUpgrade = ( { onClickUpgrade, onClickLater } ) => {
	const handleClickUpgrade = ( event ) => {
		if ( typeof onClickUpgrade === 'function' ) {
			onClickUpgrade( event );
		}
	};

	const handleClickLater = ( event ) => {
		if ( typeof onClickLater === 'function' ) {
			onClickLater( event );
		}
	};

	return (
		<AIStartup
			title="Unlock Zip AI with Spectra Pro! 🚀 "
			description="Experience stunning images and uniquely optimized content that will take your website to the next level. Upgrade now to unlock the full potential of Zip AI."
			primaryButton={
				<Button
					variant="primary"
					hasPrefixIcon
					className="w-full md:w-fit"
					onClick={ handleClickUpgrade }
				>
					<LockClosedIcon className="w-6 h-6" />
					<span>Upgrade to Spectra Pro</span>
				</Button>
			}
			secondaryButton={
				<Button
					variant="link"
					className="text-secondary-text w-full md:w-fit"
					onClick={ handleClickLater }
				>
					I’ll do it later
				</Button>
			}
		/>
	);
};

export default AIStartupUpgrade;
