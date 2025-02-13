import { __, sprintf } from '@wordpress/i18n';
import { Link } from 'react-router-dom';
import { Container, Badge } from '@bsf/force-ui';

const ProFeatures = () => {
	const premiumBlocks = (
		<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path
				d="M10 3H3V10H10V3Z"
				stroke="#6005FF"
				strokeWidth="1.25"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M21 3H14V10H21V3Z"
				stroke="#6005FF"
				strokeWidth="1.25"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M21 14H14V21H21V14Z"
				stroke="#6005FF"
				strokeWidth="1.25"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M10 14H3V21H10V14Z"
				stroke="#6005FF"
				strokeWidth="1.25"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);

	const ai = (
		<svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path
				d="M8.93694 14.5C8.84766 14.1539 8.66728 13.8381 8.41456 13.5854C8.16184 13.3327 7.84601 13.1523 7.49994 13.063L1.36494 11.481C1.26027 11.4513 1.16815 11.3883 1.10255 11.3014C1.03696 11.2146 1.00146 11.1088 1.00146 11C1.00146 10.8912 1.03696 10.7854 1.10255 10.6986C1.16815 10.6118 1.26027 10.5487 1.36494 10.519L7.49994 8.93601C7.84589 8.84681 8.16163 8.66658 8.41434 8.41404C8.66705 8.16151 8.84751 7.84589 8.93694 7.50001L10.5189 1.36501C10.5483 1.25992 10.6113 1.16735 10.6983 1.1014C10.7852 1.03545 10.8913 0.999756 11.0004 0.999756C11.1096 0.999756 11.2157 1.03545 11.3026 1.1014C11.3896 1.16735 11.4525 1.25992 11.4819 1.36501L13.0629 7.50001C13.1522 7.84608 13.3326 8.1619 13.5853 8.41462C13.838 8.66734 14.1539 8.84773 14.4999 8.93701L20.6349 10.518C20.7404 10.5471 20.8335 10.61 20.8998 10.6971C20.9661 10.7841 21.002 10.8906 21.002 11C21.002 11.1094 20.9661 11.2159 20.8998 11.3029C20.8335 11.39 20.7404 11.4529 20.6349 11.482L14.4999 13.063C14.1539 13.1523 13.838 13.3327 13.5853 13.5854C13.3326 13.8381 13.1522 14.1539 13.0629 14.5L11.4809 20.635C11.4515 20.7401 11.3886 20.8327 11.3016 20.8986C11.2147 20.9646 11.1086 21.0003 10.9994 21.0003C10.8903 21.0003 10.7842 20.9646 10.6973 20.8986C10.6103 20.8327 10.5473 20.7401 10.5179 20.635L8.93694 14.5Z"
				stroke="#6005FF"
				strokeWidth="1.25"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);

	const needHelp = (
		<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path
				d="M3 11H6C6.53043 11 7.03914 11.2107 7.41421 11.5858C7.78929 11.9609 8 12.4696 8 13V16C8 16.5304 7.78929 17.0391 7.41421 17.4142C7.03914 17.7893 6.53043 18 6 18H5C4.46957 18 3.96086 17.7893 3.58579 17.4142C3.21071 17.0391 3 16.5304 3 16V11ZM3 11C3 9.8181 3.23279 8.64778 3.68508 7.55585C4.13738 6.46392 4.80031 5.47177 5.63604 4.63604C6.47177 3.80031 7.46392 3.13738 8.55585 2.68508C9.64778 2.23279 10.8181 2 12 2C13.1819 2 14.3522 2.23279 15.4442 2.68508C16.5361 3.13738 17.5282 3.80031 18.364 4.63604C19.1997 5.47177 19.8626 6.46392 20.3149 7.55585C20.7672 8.64778 21 9.8181 21 11M21 11V16C21 16.5304 20.7893 17.0391 20.4142 17.4142C20.0391 17.7893 19.5304 18 19 18H18C17.4696 18 16.9609 17.7893 16.5858 17.4142C16.2107 17.0391 16 16.5304 16 16V13C16 12.4696 16.2107 11.9609 16.5858 11.5858C16.9609 11.2107 17.4696 11 18 11H21Z"
				stroke="#6005FF"
				strokeWidth="1.25"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M21 16V18C21 19.0609 20.5786 20.0783 19.8284 20.8284C19.0783 21.5786 18.0609 22 17 22H12"
				stroke="#6005FF"
				strokeWidth="1.25"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);

	const blocksInfo = uag_react.blocks_info;

	const activaProBlocksCount = blocksInfo.reduce( ( count, block ) => {
		// Define the eligible block slugs in an array for easy checking
		const eligibleBlocks = [ 'instagram-feed', 'loop-builder', 'login', 'register' ];
		// Increment the count if the block's slug is in the eligible list
		return block.slug && eligibleBlocks.includes( block.slug ) ? count + 1 : count;
	}, 0 );

	return (
		<Container.Item className="gap-4 grid grid-cols-2 lg:grid-cols-3 bg-field-primary-background rounded-lg">
			<Container
				align="center"
				className="bg-white rounded-lg p-3 border border-solid border-border-subtle"
				containerType="flex"
				direction="column"
				justify="between"
				gap=""
			>
				<div className="flex items-center justify-between w-full mb-1 p-1">
					<div style={ { fontSize: '22px' } }>{ premiumBlocks }</div>

					<div className="flex items-center gap-x-2">
						<Badge
							label={ sprintf(
								/* translators: %s: Number of active blocks. */
								__( '%s/4 Blocks', 'ultimate-addons-for-gutenberg' ),
								activaProBlocksCount
							) }
							size="xs"
							type="pill"
							variant="blue"
						/>
					</div>
				</div>

				<div className="flex flex-col w-full p-1">
					<p className="text-sm font-medium text-text-primary m-0">Premium Blocks</p>
					<div className="flex items-center justify-between w-full">
						<Link
							to={ {
								pathname: 'admin.php',
								search: '?page=spectra&path=blocks',
							} }
							className="text-text-tertiary no-underline"
						>
							{ __( 'Configure', 'ultimate-addons-for-gutenberg' ) }
						</Link>
					</div>
				</div>
			</Container>

			<Container
				align="center"
				className="bg-white rounded-lg p-3 border border-solid border-border-subtle"
				containerType="flex"
				direction="column"
				justify="between"
				gap=""
			>
				<div className="flex items-center justify-between w-full mb-1 p-1">
					<div style={ { fontSize: '22px' } }>{ ai }</div>

					<div className="flex items-center gap-x-2">
						<Badge
							label={
								uag_react.zip_ai_admin_nonce
									? __( 'Connected', 'ultimate-addons-for-gutenberg' )
									: __( 'Connect', 'ultimate-addons-for-gutenberg' )
							}
							size="xs"
							type="pill"
							variant={ uag_react.zip_ai_admin_nonce ? 'green' : 'blue' }
						/>
					</div>
				</div>

				<div className="flex flex-col w-full p-1">
					<p className="text-sm font-medium text-text-primary m-0">AI Assistant</p>
					<div className="flex items-center justify-between w-full">
						<Link
							to={ {
								pathname: 'admin.php',
								search: '?page=spectra&path=ai-features',
							} }
							className="text-text-tertiary no-underline"
						>
							{ __( 'Launch', 'ultimate-addons-for-gutenberg' ) }
						</Link>
					</div>
				</div>
			</Container>

			<Container
				align="center"
				className="bg-white rounded-lg p-3 border border-solid border-border-subtle"
				containerType="flex"
				direction="column"
				justify="between"
				gap=""
			>
				<div className="flex items-center justify-between w-full mb-1 p-1">
					<div style={ { fontSize: '22px' } }>{ needHelp }</div>
				</div>

				<div className="flex flex-col w-full p-1">
					<p className="text-sm font-medium text-text-primary m-0">Need Help</p>
					<div className="flex items-center justify-between w-full">
						<a
							href="https://wpspectra.com/contact/"
							target="_blank"
							className="mt-1 text-text-tertiary no-underline" rel="noreferrer"
						>
							{ __( 'Open a ticket', 'ultimate-addons-for-gutenberg' ) }
						</a>
					</div>
				</div>
			</Container>
		</Container.Item>
	);
};

export default ProFeatures;
