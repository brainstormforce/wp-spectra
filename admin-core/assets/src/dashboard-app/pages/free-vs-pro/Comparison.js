import ExtendYourWebsite from '@Common/components/ExtendYourWebsite';
import BuildWebsite from '@Common/components/BuildWebsite';
import QuickAccess from '@Common/components/QuickAccess';
import UnlockProFeatures from '@Common/components/UnlockProFeatures';

import { Container } from '@bsf/force-ui';
import Compare from './Compare';

const FreeVPro = () => {
	return (
		<div className="bg-background-secondary w-full">
			<Container className="md:p-8 sm:p-6 p-[0.7rem] w-full" cols={ 12 } containerType="grid" gap="2xl">
				<Container.Item colSpan={ { lg: 8, md: 12, sm: 12 } } className="w-full rounded-xl">
					<Compare />

					{ uag_react.pro_plugin_status !== 'Activated' && <UnlockProFeatures freeVPro={ true } /> }
				</Container.Item>

				<Container.Item className="flex flex-col gap-8" colSpan={ { lg: 4, md: 12, sm: 12 } }>
					<ExtendYourWebsite />

					<BuildWebsite />

					<QuickAccess />
				</Container.Item>
			</Container>
		</div>
	);
};

export default FreeVPro;
