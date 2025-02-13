import React from 'react'
import { Container } from '@bsf/force-ui'

import ExtendYourWebsite from '@Common/components/ExtendYourWebsite';
import BuildWebsite from '@Common/components/BuildWebsite';
import QuickAccess from '@Common/components/QuickAccess';
import UnlockProFeatures from '@Common/components/UnlockProFeatures';

import BlocksSection from './BlocksSection';

const Blocks = () => {
	return (
		<div className="bg-background-secondary">
			<Container className="md:p-8 sm:p-6 p-[0.7rem]" cols={ 12 } containerType="grid" gap="2xl">
				<BlocksSection />

				<Container.Item className="flex flex-col gap-8" colSpan={ { lg: 4, md: 12, sm: 12 } }>
					{ uag_react.pro_plugin_status !== 'Activated' && (
						<UnlockProFeatures smallCol={ true } />
					) }
					<ExtendYourWebsite />

					<BuildWebsite />

					<QuickAccess />
				</Container.Item>
			</Container>
		</div>
	);
};

export default Blocks;
