import { __ } from '@wordpress/i18n';
import { Container, Label, Badge } from '@bsf/force-ui';
import { Headset, CircleHelp, MessageSquare, Star } from 'lucide-react';

const QuickAccess = () => {
	return (
		<Container
			className="bg-white border border-solid border-border-subtle rounded-lg p-3"
			containerType="flex"
			direction="column"
			gap="xs"
		>
			<Container.Item className="md:w-full lg:w-full p-1">
				<Label className="font-semibold text-text-primary">
					{ __( 'Quick Access', 'ultimate-addons-for-gutenberg' ) }
				</Label>
			</Container.Item>
			<Container.Item className="flex flex-col md:w-full lg:w-full bg-field-primary-background gap-1 p-1 rounded-lg">
				<div className="p-2 gap-1 items-center flex bg-background-primary rounded-md shadow-soft-shadow-inner">
					<a
						className="no-underline hover:underline hover:text-field-label"
						href={uag_admin_react.spectra_website?.vipPrioritySupportUrl}
						target="_blank"
						rel="noreferrer"
					>
						<Container align="center" className="gap-1 p-1" containerType="flex" direction="row">
							<Container.Item className="flex">
								<Headset size={ 14 } className="m-1 no-underline text-text-primary" />
							</Container.Item>
							<Container.Item className="flex">
								<Label className="py-0 px-1 font-normal cursor-pointer">{ __( 'VIP Support', 'ultimate-addons-for-gutenberg' ) }</Label>
							</Container.Item>
							{ uag_react.pro_plugin_status !== 'Activated' && (
								<Container.Item>
									<Badge icon={ null } label="PRO" size="xxs" variant="inverse" />
								</Container.Item>
							) }
						</Container>
					</a>
				</div>
				<div className="p-2 gap-1 flex items-center bg-background-primary rounded-md shadow-soft-shadow-inner">
					<a
						className="no-underline hover:underline hover:text-field-label"
						href={uag_admin_react.spectra_website?.docsUrl}
						target="_blank"
						rel="noreferrer"
					>
						<Container align="center" className="gap-1 p-1" containerType="flex" direction="row">
							<Container.Item className="flex">
								<CircleHelp size={ 14 } className="m-1 no-underline text-text-primary" />
							</Container.Item>
							<Container.Item className="flex">
								<Label className="py-0 px-1 font-normal cursor-pointer">{ __( 'Help Center', 'ultimate-addons-for-gutenberg' ) }</Label>
							</Container.Item>
						</Container>
					</a>
				</div>
				<div className="p-2 gap-1 flex items-center bg-background-primary rounded-md shadow-soft-shadow-inner">
					<a
						className="no-underline hover:underline hover:text-field-label"
						href="https://www.facebook.com/groups/wpastra"
						target="_blank"
						rel="noreferrer"
					>
						<Container align="center" className="gap-1 p-1" containerType="flex" direction="row">
							<Container.Item className="flex">
								<MessageSquare size={ 14 } className="m-1 no-underline text-text-primary" />
							</Container.Item>
							<Container.Item className="flex">
								<Label className="py-0 px-1 font-normal cursor-pointer">{ __( 'Join The Community', 'ultimate-addons-for-gutenberg' ) }</Label>
							</Container.Item>
						</Container>
					</a>
				</div>
				<div className="p-2 gap-1 flex items-center bg-background-primary rounded-md shadow-soft-shadow-inner">
					<a
						className="no-underline hover:underline hover:text-field-label"
						href="https://wordpress.org/support/plugin/ultimate-addons-for-gutenberg/reviews/?rate=5#new-post"
						target="_blank"
						rel="noreferrer"
					>
						<Container align="center" className="gap-1 p-1" containerType="flex" direction="row">
							<Container.Item className="flex">
								<Star size={ 14 } className="m-1 no-underline text-text-primary" />
							</Container.Item>
							<Container.Item className="flex">
								<Label className="py-0 px-1 font-normal cursor-pointer">{ __( 'Rate Us', 'ultimate-addons-for-gutenberg' ) }</Label>
							</Container.Item>
						</Container>
					</a>
				</div>
			</Container.Item>
		</Container>
	);
};

export default QuickAccess;
