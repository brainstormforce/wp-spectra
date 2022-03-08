import { __ } from '@wordpress/i18n';
import { Fragment, useState  } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Switch } from '@headlessui/react'
import apiFetch from '@wordpress/api-fetch';
import { escapeHTML } from '@wordpress/escape-html';
import InstagramUnlinkPopup from './InstagramUnlinkPopup';

const classNames = ( ...classes ) => classes.filter( Boolean ).join( ' ' );

const InstagramUsers = () => {

	const UAG_IG_TOKEN_GENERATOR = 'https://nimble-soda.localsite.io/auth/instagram/';
	const UAG_IG_BASIC_APP_ID = 1005147296698965;
	const UAG_IG_BASIC_REDIRECT = 'https://nimble-soda.localsite.io/auth/instagram/basic/';
    
    window.addEventListener( 'message', ( event ) => {
		if ( ! event.origin.startsWith( 'https://nimble-soda.localsite.io' ) ){
			return;
		}
        switch ( event.data.type ) {
			case 'instagramPersonal':
				setAuthLinkingUser( true );
				checkAuthUser( event.data );
				event.source.close();
				break;
			default:
				return;
		}
      }, false);

    const dispatch = useDispatch();
    const [ instagramDevMode, setInstagramDevMode ] = useState( false );
	const [ tempToken, setTempToken] = useState( '' );
	const [ instaLinkUserLabel, setInstaLinkUserLabel] = useState( 'Link User' );
    const [ authLinkingUser, setAuthLinkingUser ] = useState( false );
    const [ linkingUser, setLinkingUser ] = useState( false );
    const [ openPopup, setOpenPopup ] = useState( false );
	const [ poppedUser, setPoppedUser ] = useState( '' );
    const instaLinkedAccounts = useSelector( ( state ) => state.instaLinkedAccounts );
    
	const svgDelete = (
		<div className='flex w-4 justify-center content-center'>
			<svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 512 512" className='fill-white'>
				<path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM64 256c0-41.4 13.3-79.68 35.68-111.1l267.4 267.4C335.7 434.7 297.4 448 256 448C150.1 448 64 361.9 64 256zM412.3 367.1L144.9 99.68C176.3 77.3 214.6 64 256 64c105.9 0 192 86.13 192 192C448 297.4 434.7 335.7 412.3 367.1z"/>
			</svg>
		</div>
	);

	const svgRefresh = (
		<div className='flex w-4 justify-center content-center'>
			<svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 512 512" className='fill-white'>
				<path d="M464 16c-17.67 0-32 14.31-32 32v74.09C392.1 66.52 327.4 32 256 32C161.5 32 78.59 92.34 49.58 182.2c-5.438 16.81 3.797 34.88 20.61 40.28c16.89 5.5 34.88-3.812 40.3-20.59C130.9 138.5 189.4 96 256 96c50.5 0 96.26 24.55 124.4 64H336c-17.67 0-32 14.31-32 32s14.33 32 32 32h128c17.67 0 32-14.31 32-32V48C496 30.31 481.7 16 464 16zM441.8 289.6c-16.92-5.438-34.88 3.812-40.3 20.59C381.1 373.5 322.6 416 256 416c-50.5 0-96.25-24.55-124.4-64H176c17.67 0 32-14.31 32-32s-14.33-32-32-32h-128c-17.67 0-32 14.31-32 32v144c0 17.69 14.33 32 32 32s32-14.31 32-32v-74.09C119.9 445.5 184.6 480 255.1 480c94.45 0 177.4-60.34 206.4-150.2C467.9 313 458.6 294.1 441.8 289.6z"/>
			</svg>
		</div>
	);

	const svgSpinner = (
		<svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
			<circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
			<path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
		</svg>
	);

    // const instagramDevMode = useSelector( ( state ) => state.instagramDevMode );

    // const updateDevMode = ( newStatus ) => {
    //     dispatch( {type: 'UPDATE_ENABLE_INSTAGRAM_DEV_MODE', payload: newStatus } );
    // };
    // const fileGenerationStatus = 'disabled' === enableFileGeneration ? false : true;
    

    // const updateFileGenerationStatus = () => {

    //     let assetStatus;
	// 	if ( enableFileGeneration === 'disabled' ) {
    //         assetStatus = 'enabled';
	// 	} else {
    //         assetStatus = 'disabled';
	// 	}

    //     dispatch( {type: 'UPDATE_FILE_GENERATION', payload: assetStatus } );

	// 	const action = 'uag_enable_file_generation',
	// 		nonce = uag_react.enable_file_generation_nonce;

	// 	const formData = new window.FormData();

	// 	formData.append( 'action', action );
	// 	formData.append( 'security', nonce );
	// 	formData.append( 'value', assetStatus );

	// 	apiFetch( {
	// 		url: uag_react.ajax_url,
	// 		method: 'POST',
	// 		body: formData,
	// 	} ).then( () => {
	// 	} );
    // };
    
	const setExpiryDate = ( expiryDate ) => {
		// console.log( expiryDate );
		const dd = expiryDate.getDate();
		const mm = expiryDate.getMonth() + 1;
		const yyyy = expiryDate.getFullYear();
		// console.warn( `${ yyyy }-${ mm }-${ dd }` );
		return `${ yyyy }-${ mm }-${ dd }`;
	};

	const handleInstaLinkUserLable = ( newButtonLabel ) => {
		newButtonLabel = escapeHTML( newButtonLabel );
		( "" === newButtonLabel )
		? setInstaLinkUserLabel( 'Link User' )
		: setInstaLinkUserLabel( newButtonLabel );
	};

	const highlightLinkedUser = ( theID ) => {
		const heWhoExists = document.getElementById( `Spectra-IG-User-${ theID }` );
		heWhoExists.classList.toggle( 'bg-slate-200' );
		setTimeout( () => {
			heWhoExists.classList.toggle( 'bg-slate-200' );
		}, 500 );
	};

	const checkAuthUser = ( authData ) => {
		if( authData.token !== '...' ){
			const checkUser = `https://graph.instagram.com/me?fields=id,username&access_token=${ authData.token }`;
			fetch( checkUser ).then( ( response ) => response.json() ).then( ( data ) => {
				linkAuthUser( data.id, data.username, authData );
			} ).catch( ( err ) => {
				console.warn ( err );
				setAuthLinkingUser( false );
			} );
		}
	};
	
	const linkAuthUser = ( userID, userName, authData ) => {
		let tempID;
		let tempUserMatrix = [];
		let isFound = false;
		let expiryDate = new Date();
		const refreshLink = `https://graph.instagram.com/refresh_access_token?grant_type=ig_refresh_token&access_token=${ escapeHTML( authData.token ) }`;
		//Check if user has already been linked
		if ( 0 !== instaLinkedAccounts.length ){
			tempUserMatrix =  instaLinkedAccounts ;	
			tempUserMatrix.forEach( ( user ) => {
				if ( user.userName === userName ){
					isFound = true;
					tempID = user.userID;
				}
			} );
			if ( isFound ){
				highlightLinkedUser( tempID );
				setAuthLinkingUser( false );
				return;
			}
		}
		fetch( refreshLink ).then( ( response ) => response.json() ).then( ( data ) => {
			expiryDate.setSeconds( data.expires_in );			
			tempUserMatrix.push( {
				userName: userName,
				userID: userID,
				userType: authData.type.replace( 'instagram', '' ).toLowerCase(),
				token: authData.token,
				postRefreshRate: 'H-1',
				expiryDate:  setExpiryDate( expiryDate ),
				isCurrentlyActive: true,
			} );
            dispatch( { type: 'UPDATE_INSTA_LINKED_ACCOUNTS', payload: tempUserMatrix } );
			const action = 'uag_insta_linked_accounts';
			const nonce = uag_react.insta_linked_accounts_nonce;
			const formData = new window.FormData();
			formData.append( 'action', action );
			formData.append( 'security', nonce );
			formData.append( 'value', JSON.stringify( tempUserMatrix ) );
			apiFetch( {
				url: uag_react.ajax_url,
				method: 'POST',
				body: formData,
			} ).then( () => {
				setAuthLinkingUser( false );
			} );
		} ).catch( ( err ) => {
			console.error( `Well, this wasn't supposed to happen...\n${ err }` );
			setAuthLinkingUser( false );
		} );
	};
	
	const unlinkUser = ( theUser ) => {
		setPoppedUser( theUser );
        setOpenPopup( true );
		// let updatedUserMatrix = [] ;	
		// instaLinkedAccounts.forEach( ( user ) => {
		// 	if ( user.userName !== theUser ){
		// 		updatedUserMatrix.push( user );
		// 	}
		// } );
		// dispatch( { type: 'UPDATE_INSTA_LINKED_ACCOUNTS', payload: updatedUserMatrix } );
		// const action = 'uag_insta_linked_accounts';
		// const nonce = uag_react.insta_linked_accounts_nonce;
		// const formData = new window.FormData();
		// formData.append( 'action', action );
		// formData.append( 'security', nonce );
		// formData.append( 'value', JSON.stringify( updatedUserMatrix ) );
		// apiFetch( {
		// 	url: uag_react.ajax_url,
		// 	method: 'POST',
		// 	body: formData,
		// } ).then( () => {
		// } );
	};
	
	const handleInstaLinkAccount = ( clickedButton ) => {
		setTempToken( escapeHTML( tempToken ) );
		const theButton = clickedButton.target;
		const checkUser = `https://graph.instagram.com/me?fields=id,username&access_token=${ escapeHTML( tempToken ) }`;
		setLinkingUser( true );
		theButton.disabled = true;
		handleInstaLinkUserLable( 'Saving' );
		fetch( checkUser ).then( ( response ) => response.json() ).then( ( data ) => {
			// console.log( `SZSZSZSZSZSZSZSZS\n${ data.id }\n${ data.username }\nSZSZSZSZSZSZSZSZS` );
			handleNewUserCreation( data.id, data.username, theButton );
		} ).catch( () => {
			// console.warn ( err );
			setLinkingUser( false );
			theButton.classList.toggle( 'bg-rose-600' );
			handleInstaLinkUserLable( 'Invalid Token' );
			setTimeout( () => {
				theButton.classList.toggle( 'bg-rose-600' );
				handleInstaLinkUserLable( '' );
				theButton.disabled = false;
			}, 1000 );
		} );
	};
	
	const handleNewUserCreation = ( userID, userName, theButton ) => {
		let tempUserMatrix = [];
		let isFound = false;
		let expiryDate = new Date();
		const refreshLink = `https://graph.instagram.com/refresh_access_token
		?grant_type=ig_refresh_token
		&access_token=${ escapeHTML( tempToken ) }`;
		//Check if user has already been linked
		if ( 0 !== instaLinkedAccounts.length ){
			tempUserMatrix =  instaLinkedAccounts ;	
			tempUserMatrix.forEach( ( user ) => {
				if ( user.userName === userName ){
					isFound = true;
				}
			} );
			if ( isFound ){
				setLinkingUser( false );
				theButton.classList.toggle( 'bg-rose-600' );
				handleInstaLinkUserLable( 'Account Exists!' );
				setTimeout( () => {
					theButton.classList.toggle( 'bg-rose-600' );
					handleInstaLinkUserLable( '' );
					theButton.disabled = false;
				}, 1000 );
				return;
			}
		}
		fetch( refreshLink ).then( ( response ) => response.json() ).then( ( data ) => {
			expiryDate.setSeconds( data.expires_in );			
			tempUserMatrix.push( {
				userName: userName,
				userID: userID,
				userType: 'personal',
				token: tempToken,
				postRefreshRate: 'H-1',
				expiryDate: setExpiryDate( expiryDate ),
				isCurrentlyActive: true,
			} );
            dispatch( { type: 'UPDATE_INSTA_LINKED_ACCOUNTS', payload: tempUserMatrix } );
			const action = 'uag_insta_linked_accounts';
			const nonce = uag_react.insta_linked_accounts_nonce;
			const formData = new window.FormData();
			formData.append( 'action', action );
			formData.append( 'security', nonce );
			formData.append( 'value', JSON.stringify( tempUserMatrix ) );
			apiFetch( {
				url: uag_react.ajax_url,
				method: 'POST',
				body: formData,
			} ).then( ( data ) => {
				if ( data.success ) {
					setLinkingUser( false );
					theButton.classList.toggle( 'bg-lime-500' );
					handleInstaLinkUserLable( 'Account Linked!' );
					setTimeout( () => {
						theButton.classList.toggle( 'bg-lime-500' );
						handleInstaLinkUserLable( '' );
						theButton.disabled = false;
					}, 1000 );
				}
				else{
					setLinkingUser( false );
					theButton.classList.toggle( 'bg-rose-600' );
					handleInstaLinkUserLable( 'Failed to add account' );
					setTimeout( () => {
						theButton.classList.toggle( 'bg-rose-600' );
						handleInstaLinkUserLable( '' );
						theButton.disabled = false;
					}, 1000 );
				}
			} );
		} ).catch( ( err ) => {
			console.error( `Well, this wasn't supposed to happen...\n${ err }`);
		} );
	};
    
	const displayAuthWindow = ( theUserType ) => {
		let popupAuth;
		const positioning = {
			left: ( screen.width - 480 ) / 2,
			top: ( screen.height - 720 ) / 2,
		};
		switch ( theUserType ) {
			case 'personal':
				popupAuth = window.open(
					`https://api.instagram.com/oauth/authorize?client_id=${
						UAG_IG_BASIC_APP_ID
					}&redirect_uri=${
						UAG_IG_BASIC_REDIRECT
					}&scope=user_profile,user_media&response_type=code`,
					'InstagramAuth',
					`width=480,height=720,top=${ positioning.top },left=${ positioning.left },scrollbars=0`
				);
				break;
			case 'business':
				popupAuth = window.open(
					`https://api.instagram.com/oauth/authorize?client_id=${
						UAG_IG_BASIC_APP_ID
					}&redirect_uri=${
						UAG_IG_BASIC_REDIRECT
					}&scope=user_profile,user_media&response_type=code`,
					'InstagramAuth',
					`width=480,height=720,top=${ positioning.top },left=${ positioning.left },scrollbars=0`
				);
				break;
			default:
				popupAuth = 'nope.';
				break;
		}
		popupAuth !== 'nope.' && popupAuth.postMessage( { message: "fetchInstagramAccount" }, "*" );
	};

    
	const renderAllLinkedAccounts = () => {
        // console.log( `%c${ instaLinkedAccounts }`, 'color:  lime; font-weight: bold; font-family: Raleway;' );
		if ( 0 === Object.keys( instaLinkedAccounts ).length ){
			return (
                <p className='mt-[0.6rem] text-sm'>
                    { __( 'No new users... Link a new Instagram User to start using them in your UAG Instagram Feed Block!', 'ultimate-addons-for-gutenberg' ) }
                </p>
            );
		}
		const userMatrix = instaLinkedAccounts.map( ( user ) => (
			<tr className={ ! user.isCurrentlyActive ? 'opacity-50 transition duration-500' : 'transition duration-500' } key={ user.userID } id={ `Spectra-IG-User-${ user.userID }` }>
				<td className='text-center p-2'>{ `@${ user.userName }` }</td>
				<td className='text-center p-2'>
					{ user.userType ? user.userType.toUpperCase() : 'UNLINKED' }
				</td>
				<td className='flex justify-center p-2'>
                    {/* <button
                        type='button'
                        className={ classNames(
                            ! user.isCurrentlyActive ? 'cursor-not-allowed opacity-10' : '',
                            'flex items-center mb-2 mr-1 px-4 py-2 border border-transparent text-sm font-medium rounded-[0.2rem] shadow-sm bg-wpcolor hover:bg-wphovercolor focus:outline-none transition'
                        ) }
                        aria-label={ __( 'Reconnect', 'ultimate-addons-for-gutenberg' ) }
						onClick={ ( event ) => refreshToken( event, user ) }
						disabled={ ! user.isCurrentlyActive }
                    >
                        { svgRefresh }
                    </button> */}
                    <button
                        type='button'
                        className= 'flex items-center mb-2 ml-1 px-4 py-2 border border-transparent text-sm font-medium rounded-[0.2rem] shadow-sm bg-rose-600 hover:bg-rose-800 focus:outline-none transition'
                        aria-label={ __( 'Unlink', 'ultimate-addons-for-gutenberg' ) }
						onClick={ () => unlinkUser( user.userName ) }
                    >
                        { svgDelete }
                    </button>
				</td>
			</tr>
		) );
		const renderedUsers = (
			<table className='border-collapse table-fixed w-full mt-4'>
				<thead>
					<tr>
						<th className='w-1/3 text-center font-normal text-white bg-slate-700 p-2 rounded-l-[0.2rem]'>
							{ __( 'Username', 'ultimate-addons-for-gutenberg' ) }
						</th>
						<th className='w-1/3 text-center font-normal text-white bg-slate-700 p-2'>
							{ __( 'Account Type', 'ultimate-addons-for-gutenberg' ) }
						</th>
						<th className='w-1/3 text-center font-normal text-white bg-slate-700  p-2 rounded-r-[0.2rem]'>
							{ __( 'Unlink', 'ultimate-addons-for-gutenberg' ) }
						</th>
					</tr>
				</thead>
				<tbody>
					{ userMatrix }
				</tbody>
			</table>
		);
		return renderedUsers;
	};

	const renderDevSettings = () => (
		<Fragment>
			<p className='mt-[0.6rem] text-sm'>
				{ __( 'No need to share passwords. Share your client our ', 'ultimate-addons-for-gutenberg' ) }
				<a className='text-wpcolor hover:text-wphovercolor' href={ UAG_IG_TOKEN_GENERATOR } target="_blank">{ __( 'Access Token Generator', 'ultimate-addons-for-gutenberg' ) }</a>
				{ __( ' and ask them to share their token with you.', 'ultimate-addons-for-gutenberg' ) }
			</p>
			<div className='mt-4 grid grid-cols-[1fr_auto] w-full'>
				<input
					type='text'
					aria-label='Token'
					placeholder='Token'
					value={ tempToken }
					onChange={ ( event ) => setTempToken( event.target.value ) }
					className='mb-2 mr-2 px-4 py-2 border !border-slate-300 placeholder-slate-300 !text-gray-600 text-sm font-medium rounded-[0.2rem] shadow-sm focus:!border-transparent focus:!ring-2 focus:!ring-wpcolor focus:!text-wpcolor transition'
				/>
                <button
                    type='button'
                    className={ classNames(
						! tempToken ? 'cursor-not-allowed opacity-10' : '',
						'flex items-center w-auto mb-2 px-4 py-2 border border-transparent text-sm font-medium rounded-[0.2rem] shadow-sm text-white bg-wpcolor hover:bg-wphovercolor focus:outline-none transition-all'
					) }
					disabled={ ( '' === tempToken ) ? true : false }
					onClick={ ( event ) => handleInstaLinkAccount( event ) }
				>
                    { linkingUser && svgSpinner }
					{ __( instaLinkUserLabel, 'ultimate-addons-for-gutenberg' ) }
				</button>
			</div>
		</Fragment>
	);

    return (
		<Fragment>
			<section className='flex border-b border-solid border-slate-200'>
				<div className='pr-16 pb-8 w-[78%]'>
					<h3 className='text-lg leading-6 font-medium text-gray-900'>
						{ __( 'Instagram Accounts', 'ultimate-addons-for-gutenberg' ) }
					</h3>
					<p className='mt-[0.6rem] text-sm'>
						{ __( 'Link your Instagram Account(s), or enable Developer Mode to link your client\'s account(s) ', 'ultimate-addons-for-gutenberg' ) }
					</p>
					{ instagramDevMode && renderDevSettings() }
					{ renderAllLinkedAccounts() }
				</div>
				<div>
					<button
						type='button'
						className='flex items-center mb-2 px-4 py-2 border border-transparent text-sm font-medium rounded-[0.2rem] shadow-sm text-white bg-wpcolor hover:bg-wphovercolor focus:outline-none transition'
						onClick={ () => displayAuthWindow( 'personal' ) }
					>
						{ authLinkingUser && svgSpinner }
						{ __( 'Personal Account', 'ultimate-addons-for-gutenberg' ) }
					</button>
					<button
						type='button'
						className='flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-[0.2rem] shadow-sm text-white bg-wpcolor hover:bg-wphovercolor focus:outline-none transition cursor-not-allowed opacity-10'
						onClick={ () => displayAuthWindow( 'business' ) }
						disabled={ true }
					>
						{ __( 'Business Account', 'ultimate-addons-for-gutenberg' ) }
					</button>
					<p className='mt-[0.6rem] text-sm'>                    
						<Switch
							checked={ instagramDevMode }
							onChange={ () => setInstagramDevMode( ! instagramDevMode ) }
							className={ classNames(
								instagramDevMode ? 'bg-wpcolor' : 'bg-gray-200',
								'relative inline-flex flex-shrink-0 h-5 w-[2.4rem] items-center border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none align-middle'
							) }
							>
							<span
								aria-hidden='true'
								className={ classNames(
									instagramDevMode ? 'translate-x-5' : 'translate-x-0',
									'pointer-events-none inline-block h-3.5 w-3.5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200'
								) }
							/>
						</Switch>
						&ensp;
						{ __( 'Developer Mode ', 'ultimate-addons-for-gutenberg' ) }                    
					</p>
				</div>
			</section>
			<InstagramUnlinkPopup
				openPopup={ openPopup }
				poppedUser={ poppedUser }
				setOpenPopup={ setOpenPopup }
				setPoppedUser={ setPoppedUser }
			/>
		</Fragment>
    );
};

export default InstagramUsers;
