import { useState, useEffect } from '@wordpress/element';
import { __, sprintf } from '@wordpress/i18n';
import { useSelector, useDispatch } from 'react-redux';
import UAGB_Block_Icons from '@Common/block-icons';
import { AttachTooltip } from '@Common/components/Tooltip';
import { escapeHTML } from '@wordpress/escape-html';
import { isURL } from '@wordpress/url';
import { ExclamationIcon } from '@heroicons/react/outline';
import InstagramUnlinkPopup from './InstagramUnlinkPopup';
import getApiData from '@Controls/getApiData';
import { uagbClassNames } from '@Helpers/Helpers';
import ReactHtmlParser from 'react-html-parser';

const InstagramUsers = () => {

	// Refresh all Linked Accounts.
	useEffect( () => {
		const data = {
			security: uag_react.insta_refresh_all_tokens_nonce,
			value: true,
		};
		const getApiDataFetch = getApiData( {
			url: uag_react.ajax_url,
			action: 'uag_insta_refresh_all_tokens',
			data,
		} );
		getApiDataFetch.then( () => {} );
	}, [] )

	// Decleration of all the states needed
	const dispatch = useDispatch();
	const [ tempToken, setTempToken ] = useState( '' );
	const [ instaLinkUserLabel, setInstaLinkUserLabel ] = useState( __( 'Link Account', 'ultimate-addons-for-gutenberg' ) );
	const [ linkingUser, setLinkingUser ] = useState( false );
	const [ openPopup, setOpenPopup ] = useState( false );
	const [ poppedUser, setPoppedUser ] = useState( '' );
	const [ currentHoveredUser, setCurrentHoveredUser ] = useState( '' );
	const instaLinkedAccounts = useSelector( ( state ) => state.instaLinkedAccounts );

	// SVG For Right Hand Side Spinner.
	const svgSpinner = (
		<svg className="animate-spin -mr-1 ml-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
			<circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
			<path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
		</svg>
	);

	// Format the Expiry Date in API Supported Format.
	const setExpiryDate = ( expiryDate ) => {
		const dd = expiryDate.getDate();
		const mm = expiryDate.getMonth() + 1;
		const yyyy = expiryDate.getFullYear();
		return `${ yyyy }-${ mm }-${ dd }`;
	};

	// Update the Label of the Dev Mode Button. 
	const handleInstaLinkUserLable = ( type = null ) => {
		switch ( type ) {
			case 'saving':
				setInstaLinkUserLabel( __( 'Linking', 'ultimate-addons-for-gutenberg' ) );
				break;
			case 'invalid':
				setInstaLinkUserLabel( __( 'Inavalid Token' , 'ultimate-addons-for-gutenberg' ) );
				break;
			case 'exists':
				setInstaLinkUserLabel( __( 'Account Exists!', 'ultimate-addons-for-gutenberg' ) );
				break;
			case 'success':
				setInstaLinkUserLabel( __( 'Account Linked!', 'ultimate-addons-for-gutenberg' ) );
				break;
			case 'failed':
				setInstaLinkUserLabel( __( 'Failed to Add Account', 'ultimate-addons-for-gutenberg' ) );
				break;
			default:
				setInstaLinkUserLabel( __( 'Link Account', 'ultimate-addons-for-gutenberg' ) );
		}
	};

	// Highlight the User if they are already linked.
	const highlightLinkedUser = ( theID ) => {
		const heWhoExists = document.getElementById( `Spectra-IG-User-${ theID }` );
		if ( heWhoExists ) {
			heWhoExists.classList.toggle( 'border-spectra' );
			setTimeout( () => {
				heWhoExists.classList.toggle( 'border-spectra' );
			}, 1000 );
		}
	};

	// Open the Unlink Popup Prompt.
	const unlinkUser = ( theUser ) => {
		setPoppedUser( theUser );
		setOpenPopup( true );
	};

	// Handle Linking the account from the Token Button.
	const handleInstaLinkAccount = ( clickedButton ) => {
		setTempToken( escapeHTML( tempToken ) );
		const theButton = clickedButton.target;
		const checkUser = `https://graph.instagram.com/me?fields=id,username,account_type,profile_picture_url&access_token=${ escapeHTML( tempToken ) }`;
		setLinkingUser( true );
		theButton.disabled = true;
		handleInstaLinkUserLable( 'saving' );
		window.fetch( checkUser ).then( ( response ) => {
			if ( ! response.ok ) {
				throw Error();
			}
			return response.json();
		 } ).then( ( data ) => {
			handleNewUserCreation( data.id, data.username, theButton, data.account_type, data.profile_picture_url );
		} ).catch( () => {
			dispatch( { type: 'UPDATE_SETTINGS_SAVED_NOTIFICATION', payload: { message: __( 'Invalid Token', 'ultimate-addons-for-gutenberg' ), messageType: 'error' } } );
			setLinkingUser( false );
			handleInstaLinkUserLable( 'invalid' );
			setTimeout( () => {
				handleInstaLinkUserLable();
				setTempToken( '' );
				theButton.disabled = false;
			}, 1000 );
		} );
	};

	// Add the Token Button user to the list of linked accounts.
	const handleNewUserCreation = ( userID, userName, theButton, userType = 'personal', userProfile = null ) => {
		let tempID;
		let tempUserMatrix = [];
		let isFound = false;
		const expiryDate = new Date();
		const refreshLink = `https://graph.instagram.com/refresh_access_token
		?grant_type=ig_refresh_token
		&access_token=${ escapeHTML( tempToken ) }`;
		// Check if user has already been linked.
		if ( 0 !== instaLinkedAccounts.length ){
			tempUserMatrix = instaLinkedAccounts ;
			tempUserMatrix.forEach( ( user ) => {
				if ( user.userName === userName ){
					isFound = true;
					tempID = user.userID;
				}
			} );
			if ( isFound ){
				dispatch( { type: 'UPDATE_SETTINGS_SAVED_NOTIFICATION', payload: { message: __( 'Account Exists!', 'ultimate-addons-for-gutenberg' ), messageType: 'warning' } } );
				highlightLinkedUser( tempID );
				setLinkingUser( false );
				handleInstaLinkUserLable( 'exists' );
				setTimeout( () => {
					handleInstaLinkUserLable();
					setTempToken( '' );
					theButton.disabled = false;
				}, 1000 );
				return;
			}
		}
		window.fetch( refreshLink ).then( ( response ) => response.json() ).then( ( data ) => {
			expiryDate.setSeconds( data.expires_in );			
			tempUserMatrix.push( {
				userName,
				userID,
				userType: userType.toLowerCase(),
				token: tempToken,
				expiryDate: setExpiryDate( expiryDate ),
				isCurrentlyActive: 'new',
				profilePicture: userProfile,
			} );
			dispatch( { type: 'UPDATE_INSTA_LINKED_ACCOUNTS', payload: tempUserMatrix } );
			const formData = {
				security: uag_react.insta_linked_accounts_nonce,
				value: JSON.stringify( tempUserMatrix ) ,
			};
			
			const getApiDataFetch = getApiData( {
				url: uag_react.ajax_url,
				action: 'uag_insta_linked_accounts',
				data : formData,	
			} );
			getApiDataFetch.then( ( responseData ) => {
				if ( responseData.success ) {
					setLinkingUser( false );
					handleInstaLinkUserLable( 'success' );
					dispatch( { type: 'UPDATE_SETTINGS_SAVED_NOTIFICATION', payload: __( 'Account Linked!', 'ultimate-addons-for-gutenberg' ) } );
					highlightLinkedUser( userID );
					setTimeout( () => {
						handleInstaLinkUserLable();
						setTempToken( '' );
						theButton.disabled = false;
					}, 1000 );
				}
				else{
					setLinkingUser( false );
					handleInstaLinkUserLable( 'failed' );
					dispatch( { type: 'UPDATE_SETTINGS_SAVED_NOTIFICATION', payload: { message: __( 'Failed to Add Account', 'ultimate-addons-for-gutenberg' ), messageType: 'error' } } );
					setTimeout( () => {
						handleInstaLinkUserLable();
						setTempToken( '' );
						theButton.disabled = false;
					}, 1000 );
				}
			} );
		} ).catch( () => {
			dispatch( { type: 'UPDATE_SETTINGS_SAVED_NOTIFICATION', payload: { message: __( 'Failed to Add Account', 'ultimate-addons-for-gutenberg' ), messageType: 'error' } } );
		} );
	};

	// Generate a Display Picture based on the Account Type.
	const generateDP = ( user ) => {
		const profileUserName = ( user?.userName && 'string' === typeof user.userName ) ? user.userName[0].toUpperCase() : UAGB_Block_Icons['instagram-feed'];
		switch ( user.userType.toLowerCase() ) {
			case 'personal':
				// Will be the profile picture.
				return (
					<div className="h-12 w-12 aspect-square rounded-full bg-violet-100 text-spectra flex justify-center items-center text-xl">
						{ profileUserName }
					</div>
				);
			case 'business':
			default:
				// Will be the profile picture.
				return (
					<div className="h-12 w-12 aspect-square rounded-full bg-spectra text-violet-100 overflow-hidden">
						{ isURL( user?.profilePicture ) ? (
							<img
								src={ user.profilePicture }
								alt={ user.userName }
							/>
						) : profileUserName }
					</div>
				);
		}
	};

	// Get the Account Type Internationalized Label.
	const getAccountType = ( userType ) => {
		switch ( userType ) {
			case 'personal':
				return __( 'Personal Account', 'ultimate-addons-for-gutenberg' );
			case 'business':
				return __( 'Business Account', 'ultimate-addons-for-gutenberg' );
			default:
				return __( 'Instagram Account', 'ultimate-addons-for-gutenberg' ); // All the different Creator account types will show as Instagram account.
		}
	};

	// Render All the linked Users.
	const renderAllLinkedAccounts = () => {
		if ( 0 === Object.keys( instaLinkedAccounts ).length ){
			return (
				<>
					<p className="text-sm text-slate-400">
						{ __( 'No linked accounts.', 'ultimate-addons-for-gutenberg' ) }
					</p>
					<p className="text-sm text-slate-400">
						{ __( 'Please link an Instagram Account to start using it with Spectra!', 'ultimate-addons-for-gutenberg' ) }
					</p>
				</>
			);
		}

		const userMatrix = instaLinkedAccounts.map( ( user ) => {

			// Setting up a common condition to check if this user's account is personal.
			const isPersonalAccount = 'personal' === user.userType;

			// Render the Instagram user's box with details.
			const RenderUserDetails = () => (
				<div
					className={ uagbClassNames( [
						'relative h-16 p-2 pr-4 m-2.5 rounded-md flex border transition-colors',
						( user.isCurrentlyActive && ! isPersonalAccount ) ? 'border-slate-200 hover:border-slate-400' : 'border-red-600',
					] ) }
					id={ `Spectra-IG-User-${ user.userID }` }
					onMouseEnter={ () => setCurrentHoveredUser( isPersonalAccount ? user.userName : '' ) }
					onMouseLeave={ () => setCurrentHoveredUser( '' ) }
				>
					<button
						className={ uagbClassNames( [
							'absolute top-0 right-0 w-4 h-4 -mt-2 -mr-2 box-content flex items-center justify-center rounded-full border border-white  transition-colors',
							( user.isCurrentlyActive && ! isPersonalAccount ) ? 'bg-slate-500 hover:bg-red-600' : 'bg-red-600',
						] ) }
						aria-label={ __( 'Unlink', 'ultimate-addons-for-gutenberg' ) }
						onClick={ () => unlinkUser( user.userName ) }
					>
						<svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M2 6L6 2M2 2L6 6" stroke="#F9FAFB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
						</svg>
					</button>
					{ generateDP( user ) }
					<div className="ml-4 flex-1 flex flex-col justify-center">
						<div className="text-base text-slate-800">{ `@${ user.userName }` }</div>
						<div className={ uagbClassNames( [
							'text-xs',
							( user.isCurrentlyActive && ! isPersonalAccount ) ? 'text-slate-400' : 'text-red-600',
						] ) }>
							{/* Add the warning icon for personal accounts. Then just render either the account type or disabled based on whether it's active or not. */}
							{ isPersonalAccount && (
								<ExclamationIcon
									className="h-4 w-4 text-red-600 inline-flex mr-0.5 align-bottom"
									aria-hidden="true"
								/>
							) }
							{ user.isCurrentlyActive ? getAccountType( user.userType ) : __( 'Disabled', 'ultimate-addons-for-gutenberg' ) }
						</div>
					</div>
				</div>
			);

			// Return the user details, with the tooltip if required.
			return isPersonalAccount ? (
				<AttachTooltip
					key={ user.userID }
					showTooltip={ currentHoveredUser === user.userName }
					tooltipContent={ __( 'Meta no longer supports personal accounts. Please unlink, convert to a business account, and relink to restore your feed.', 'ultimate-addons-for-gutenberg' ) }
					tooltipAdditionalClasses="w-96"
				>
					<RenderUserDetails/>
				</AttachTooltip>
			) : <RenderUserDetails key={ user.userID }/>;
		} );

		const renderedUsers = (
			<>
				<h4 className="text-sm text-slate-800 font-medium">
					{ __( 'Linked Users', 'ultimate-addons-for-gutenberg' ) }
				</h4>
				<div className="-m-2.5 mt-2.5 w-full flex flex-wrap">
					{ userMatrix }
				</div>
			</>
		);

		return renderedUsers;
	};

	// Render the Disabled Account Helper
	const renderDeactivatedAccountMessage = () => {
		let atLeastOneDeactivated = false;
		for ( const user in instaLinkedAccounts ) {
			if ( instaLinkedAccounts[ user ].isCurrentlyActive ) {
				continue;
			}
			atLeastOneDeactivated = true;
			break;
		}
		return atLeastOneDeactivated ? (
			<>
				<br/>
				<p className="text-sm text-red-600">
					{ __( 'It looks like one or more accounts have been disabled due to security reasons. Here are some of them:', 'ultimate-addons-for-gutenberg' ) }
				</p>
				<p className="text-sm text-red-600 pl-2">{ __( '1. The Instagram Account password was changed.', 'ultimate-addons-for-gutenberg' ) }</p>
				<p className="text-sm text-red-600 pl-2">{ __( '2. The Instagram Account was made private.', 'ultimate-addons-for-gutenberg' ) }</p>
				<p className="text-sm text-red-600 pl-2">{ __( '3. The Instagram Account was unused on Spectra for 60 days.', 'ultimate-addons-for-gutenberg' ) }</p>
				<br/>
				<p className="text-sm text-red-600">
					{ __( 'Please unlink and relink the account(s) marked in red.', 'ultimate-addons-for-gutenberg' ) }
				</p>
			</>
		) : null;
	}

	// Render Developer Mode Settings.
	const renderDevSettings = () => (
		<>
			<div className="mt-4 grid grid-cols-[1fr_auto] w-full">
				<input
					className="mr-5 h-10 text-sm placeholder-slate-400 transition spectra-admin__input-field"
					type='text'
					aria-label='Token'
					placeholder={ __( 'Enter your Instagram access token', 'ultimate-addons-for-gutenberg' ) }
					value={ tempToken }
					onChange={ ( event ) => setTempToken( event.target.value ) }
				/>
				<button
					type='button'
					className={ uagbClassNames( [
						! tempToken ? 'cursor-not-allowed bg-slate-200 text-slate-400' : 'bg-spectra text-white hover:bg-spectra-hover focus:bg-spectra-hover',
						'flex items-center w-auto px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm focus:outline-none transition-all',
					] ) }
					disabled={ ( '' === tempToken ) ? true : false }
					onClick={ ( event ) => handleInstaLinkAccount( event ) }
				>
					{ instaLinkUserLabel }
					{ linkingUser && svgSpinner }
				</button>
			</div>
		</>
	);

	return (
		<>
			<section className="block border-b border-solid border-slate-200 px-12 py-8 justify-between">  
				<div className="mr-16 w-full flex items-center">
					<h3 className="p-0 flex-1 justify-right inline-flex text-lg leading-8 font-medium text-gray-900">
						{ __( 'Connect Instagram', 'ultimate-addons-for-gutenberg' ) }
					</h3>
				</div>
				<div className="mr-16 mt-2 w-full flex items-start">
					<div className="w-9/12">
						<p className="text-sm text-slate-500">
							{ ReactHtmlParser(
								sprintf(
									/* translators: %1$s: The opening anchor tag with instructions to generate a token. %2$s: The closing anchor tag. */
									__( 'To get started please add your Instagram Access Token. Follow the %1$ssteps%2$s to generate a token, then paste it below and save.', 'ultimate-addons-for-gutenberg' ),
									'<a class="text-spectra focus:text-spectra-hover active:text-spectra-hover hover:text-spectra-hover" href="#" target="_blank" rel="noreferrer">',
									'</a>'
								)
							) }
						</p>
						{ renderDeactivatedAccountMessage() }
						{ renderDevSettings() }
					</div>
				</div>
				<div className="mr-16 mt-9 pt-5 w-full border-t border-t-slate-200">
					{ renderAllLinkedAccounts() }
				</div>
			</section>
	 		<InstagramUnlinkPopup
	 			openPopup={ openPopup }
	 			poppedUser={ poppedUser }
	 			setOpenPopup={ setOpenPopup }
	 			setPoppedUser={ setPoppedUser }
	 		/>
		</>
	);
};

export default InstagramUsers;
