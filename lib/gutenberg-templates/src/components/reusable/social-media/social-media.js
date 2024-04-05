import { PlusIcon } from '@heroicons/react/24/outline';
import Dropdown from '../dropdown/dropdown';
import { useState } from '@wordpress/element';
import {
	FacebookIcon,
	InstagramIcon,
	LinkedInIcon,
	TwitterIcon,
	YouTubeIcon,
	GoogleIcon,
	YelpIcon,
} from '../../ui/icons';
import Input from '../input/input';

const { images } = ast_block_template_vars;

const SocialMediaItem = ( { socialMedia, onRemove, onEdit } ) => {
	const [ isEditing, setIsEditing ] = useState( false );
	const url = new URL( socialMedia.url );
	const [ editedUrl, setEditedUrl ] = useState( socialMedia.url );

	const handleDoubleClick = () => {
		setEditedUrl( socialMedia.url );
		setIsEditing( true );
	};

	const handleUpdateURL = ( value = '' ) => {
		setIsEditing( false );
		if ( ! value.trim() ) {
			setEditedUrl( url.pathname.substring( 1 ) );
			return;
		}
		onEdit( value );
	};

	const handleBlur = () => {
		handleUpdateURL( editedUrl );
	};

	const handleKeyDown = ( event ) => {
		if ( event.key === 'Enter' ) {
			event.preventDefault();
			handleUpdateURL( editedUrl );
		} else if ( event.key === 'Escape' ) {
			handleUpdateURL();
		}
	};

	return (
		<div
			key={ socialMedia.id }
			className="relative h-[50px] pl-[23px] pr-[25px] rounded-[25px] bg-background-tertiary flex items-center gap-3 shadow-sm"
			onDoubleClick={ handleDoubleClick }
		>
			{ ! isEditing && (
				<div
					role="button"
					className="absolute top-0 right-0 w-4 h-4 rounded-full flex items-center justify-center cursor-pointer bg-nav-active"
					onClick={ onRemove }
					tabIndex={ 0 }
					onKeyDown={ onRemove }
				>
					<img
						src={ `${ images }plus_sm.svg` }
						className="w-4 h-4 text-nav-active rotate-45"
						alt="close"
					/>
				</div>
			) }
			<socialMedia.icon className="shrink-0 text-nav-active inline-block" />
			{ isEditing ? (
				<Input
					ref={ ( node ) => {
						if ( node ) {
							node.focus();
						}
					} }
					name="socialMediaURL"
					inputClassName="!border-0 !px-0 !bg-transparent !shadow-none focus:!ring-0"
					value={ editedUrl }
					onChange={ ( e ) => {
						setEditedUrl( e.target.value );
					} }
					className="w-full"
					placeholder={ `Enter your ${ socialMedia.name } URL` }
					noBorder
					onBlur={ handleBlur }
					onKeyDown={ handleKeyDown }
					enableAutoGrow
				/>
			) : (
				<p className="text-base font-medium text-body-text">
					{ socialMedia.url }
				</p>
			) }
		</div>
	);
};

const SocialMediaAdd = ( { list, onChange } ) => {
	const socialMediaList = [
		{
			name: 'Facebook',
			id: 'facebook',
			icon: FacebookIcon,
		},
		{
			name: 'Twitter',
			id: 'twitter',
			icon: TwitterIcon,
		},
		{
			name: 'Instagram',
			id: 'instagram',
			icon: InstagramIcon,
		},
		{
			name: 'LinkedIn',
			id: 'linkedin',
			icon: LinkedInIcon,
		},
		{
			name: 'YouTube',
			id: 'youtube',
			icon: YouTubeIcon,
		},
		{
			name: 'Google My Business',
			id: 'google',
			icon: GoogleIcon,
		},
		{
			name: 'Yelp',
			id: 'yelp',
			icon: YelpIcon,
		},
	];

	const [ selectedSocialMedia, setSelectedSocialMedia ] = useState( null );
	const [ socialMediaURL, setSocialMediaURL ] = useState( '' );

	const socialMediaHandles = {
		twitter: 'twitter.com/',
		facebook: 'facebook.com/',
		instagram: 'instagram.com/',
		linkedin: 'linkedin.com/in/',
		youtube: 'youtube.com/@',
		yelp: 'yelp.com/biz/',
		google: 'google.com/maps/place',
	};

	function getSocialMediaURL( LINK, SOCIAL_MEDIA_TYPE ) {
		const socialMediaDomain =
			socialMediaHandles[ SOCIAL_MEDIA_TYPE.toLowerCase() ];

		if ( SOCIAL_MEDIA_TYPE === 'google' ) {
			// Check if the input URL is already in the correct format
			if ( LINK.startsWith( `https://www.${ socialMediaDomain }/` ) ) {
				return LINK;
			}

			// Replace spaces with '+' and handle special characters
			const searchQuery = LINK?.replace( / /g, '+' )?.replace( /%2B/g, '+' );
			return `https://www.${ socialMediaDomain }/${ searchQuery }`;
		}

		const extractHandle = ( input ) => {
			const urlParts = input
				.split( '/' )
				.filter( ( part ) => part && ! part.includes( '.' ) );
			return (
				urlParts
					?.pop()
					?.replace( 'http:' )
					?.replace( 'https:' )
					?.replace( '@', '' ) || ''
			);
		};

		let handle;
		let url;
		let urlParts;
		switch ( SOCIAL_MEDIA_TYPE.toLowerCase() ) {
			case 'twitter':
			case 'facebook':
			case 'instagram':
				urlParts = LINK.split( '/' ).filter(
					( part, index ) =>
						part &&
						( index === LINK.split( '/' ).length - 1 ||
							! part.includes( '.' ) )
				);
				handle =
					urlParts?.pop()?.replace( 'http:' )?.replace( 'https:' ) || '';
				if ( handle === 'undefined' ) {
					url = `https://${ socialMediaHandles[ SOCIAL_MEDIA_TYPE ] }`;
				}
				url = `https://${ socialMediaHandles[ SOCIAL_MEDIA_TYPE ] }${ handle }`;
				try {
					new URL( url );
				} catch ( e ) {
					url = `https://${ socialMediaHandles[ SOCIAL_MEDIA_TYPE ] }`;
				}
				break;
			case 'linkedin':
			case 'youtube':
			case 'google':
			case 'yelp':
				handle = extractHandle( LINK ) ?? '';
				if ( handle === 'undefined' ) {
					url = `https://${ socialMediaHandles[ SOCIAL_MEDIA_TYPE ] }`;
				}
				url = `https://${ socialMediaHandles[ SOCIAL_MEDIA_TYPE ] }${ handle }`;
				try {
					new URL( url );
				} catch ( e ) {
					url = `https://${ socialMediaHandles[ SOCIAL_MEDIA_TYPE ] }`;
				}
				break;
			default:
				url = LINK;
				break;
		}
		return url;
	}

	const filterList = ( socialMediaItemList ) => {
		if ( list.length === 0 ) {
			return socialMediaItemList;
		}
		const addedSocialMediaIds = list.map( ( sm ) => sm.id );
		return socialMediaItemList.filter(
			( sm ) => ! addedSocialMediaIds.includes( sm.id )
		);
	};

	const handleEnterLink = ( type ) => {
		if ( ! ( typeof socialMediaURL === 'string' && !! socialMediaURL?.trim() ) ) {
			return;
		}
		const link = getSocialMediaURL( socialMediaURL.trim(), type );
		const newList = [
			...list,
			{
				...selectedSocialMedia,
				url: link,
			},
		];
		onChange( newList );
		setSelectedSocialMedia( null );
		setSocialMediaURL( '' );
	};

	const handleEditLink = ( id, value ) => {
		const newList = list.map( ( sm ) => {
			if ( sm.id === id ) {
				return {
					...sm,
					url: getSocialMediaURL( value, id ),
				};
			}
			return sm;
		} );
		onChange( newList );
	};

	const updatedList = list.map( ( sm ) => {
		return {
			...sm,
			url: getSocialMediaURL( sm.url, sm.id ),
			icon: socialMediaList.find( ( item ) => item.id === sm.id )?.icon,
		};
	} );

	const socialMediaRender = () => {
		if ( selectedSocialMedia ) {
			return (
				<div className="h-[50px] w-[520px] rounded-[25px] bg-background-secondary flex items-center">
					<Input
						ref={ ( node ) => {
							if ( node ) {
								node.focus();
							}
						} }
						name="socialMediaURL"
						value={ socialMediaURL }
						onChange={ ( e ) => {
							setSocialMediaURL( e.target.value );
						} }
						inputClassName="!pr-10 !pl-11 !border-0 !bg-transparent !shadow-none focus:!ring-0"
						className="w-full"
						placeholder={ `Enter your ${ selectedSocialMedia.name } URL` }
						noBorder
						prefixIcon={
							<selectedSocialMedia.icon className="text-nav-active inline-block" />
						}
						onBlur={ ( event ) => {
							event.preventDefault();
							handleEnterLink( selectedSocialMedia.id );
						} }
						onKeyDown={ ( event ) => {
							if ( event.key === 'Enter' ) {
								event.preventDefault();
								handleEnterLink( selectedSocialMedia.id );
							} else if ( event.key === 'Escape' ) {
								setSelectedSocialMedia( null );
								setSocialMediaURL( '' );
							}
						} }
						suffixIcon={
							<div className="relative">
								<div
									className="absolute -top-7 -right-3"
									onClick={ () => {
										setSelectedSocialMedia( null );
										setSocialMediaURL( '' );
									} }
									role="button"
									tabIndex={ 0 }
									onKeyDown={ () => {
										setSelectedSocialMedia( null );
										setSocialMediaURL( '' );
									} }
								>
									<div className="w-4 h-4 rounded-full flex items-center justify-center bg-app-inactive-icon cursor-pointer bg-nav-active">
										<img
											src={ `${ images }plus_sm.svg` }
											className="w-4 h-4 text-nav-active rotate-45"
											alt="close"
										/>
									</div>
								</div>
							</div>
						}
					/>
				</div>
			);
		}
		if ( filterList( socialMediaList ).length ) {
			return (
				<Dropdown
					width="60"
					contentClassName="p-4 bg-white [&>:first-child]:pb-2.5 [&>:last-child]:pt-2.5 [&>:not(:first-child,:last-child)]:py-2.5 !divide-y !divide-border-primary divide-solid divide-x-0"
					trigger={
						<div className="p-3 rounded-full flex items-center justify-center bg-white cursor-pointer border border-border-primary border-solid shadow-sm">
							<PlusIcon className="w-6 h-6 text-accent-spectra" />
						</div>
					}
					placement="top-start"
				>
					{ filterList( socialMediaList ).map( ( item, index ) => (
						<Dropdown.Item
							as="div"
							role="none"
							key={ index }
							className="only:!py-0"
							onClick={ () => setSelectedSocialMedia( item ) }
						>
							<button
								onClick={ () => null }
								type="button"
								className="w-full flex items-center text-sm font-normal text-left py-2 px-2 leading-5 hover:bg-background-secondary focus:outline-none transition duration-150 ease-in-out space-x-2 rounded bg-transparent border-0 cursor-pointer"
							>
								<item.icon className="text-nav-inactive inline-block" />
								<span className="text-body-text">
									{ item.name }
								</span>
							</button>
						</Dropdown.Item>
					) ) }
				</Dropdown>
			);
		}
		return '';
	};

	return (
		<div>
			<p className="text-sm font-semibold leading-[21px] mb-5 text-heading-text">
				Social Media
			</p>

			<div className="flex items-center gap-4 flex-wrap">
				{ updatedList?.length > 0 && (
					<div className="flex items-center gap-4 flex-wrap">
						{ updatedList.map( ( sm ) => (
							<SocialMediaItem
								key={ sm.id }
								socialMedia={ sm }
								onRemove={ () => {
									onChange(
										updatedList.filter(
											( item ) => item.id !== sm.id
										)
									);
								} }
								onEdit={ ( url ) => handleEditLink( sm.id, url ) }
							/>
						) ) }
					</div>
				) }

				{ socialMediaRender() }
			</div>
		</div>
	);
};

export default SocialMediaAdd;
