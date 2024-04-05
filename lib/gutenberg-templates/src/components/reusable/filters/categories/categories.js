import { classNames } from '../../../../utils/helpers';
import { STORE_KEY } from '../../../../store/index';
import LoaderDots from '../../loader-dots';
import { BoltIcon, SparklesIcon } from '@heroicons/react/24/outline';
import { compose } from '@wordpress/compose';
import { memo, useCallback, useState } from '@wordpress/element';
import { withSelect, useSelect, useDispatch } from '@wordpress/data';
import apiFetch from '@wordpress/api-fetch';
import { generateContentForAllCategories } from '../../../../utils/functions';
import RegenerateConfirmation from '../../credits/regenerate-confirmation';

function CategoryItem( { category, isActive, onClick, disableAi } ) {
	const [ isProcessing, setIsProcessing ] = useState( false );

	const {
		setDynamicContent,
		setNotice,
		dynamicContentFlagSet,
		dynamicContentSyncComplete,
		dynamicContentReSyncStatus,
		setCurrentCategory,
		setRegeneratingContentCategory,
		setCreditsDetails,
	} = useDispatch( STORE_KEY );
	const {
		dynamicContentSyncFlags,
		dynamicContentSyncStatus,
		currentScreen,
		allPatternsCategories,
		allPagesCategories,
		dynamicContent,
		reSyncStatus,
		regeneratingContentCategory,
		businessDetails,
	} = useSelect( ( select ) => {
		const {
			getDynamicContentSyncFlags,
			getDynamicContentSyncStatus,
			getCurrentScreen,
			getAllPatternsCategories,
			getAllPagesCategories,
			getDynamicContent,
			getDynamicContentReSyncStatus,
			getRegeneratingContentCategory,
			getAIStepData,
		} = select( STORE_KEY );
		return {
			dynamicContentSyncFlags: getDynamicContentSyncFlags(),
			dynamicContentSyncStatus: getDynamicContentSyncStatus(),
			currentScreen: getCurrentScreen(),
			allPatternsCategories: getAllPatternsCategories(),
			allPagesCategories: getAllPagesCategories(),
			dynamicContent: getDynamicContent(),
			reSyncStatus: getDynamicContentReSyncStatus(),
			regeneratingContentCategory: getRegeneratingContentCategory(),
			businessDetails: getAIStepData()?.businessDetails,
		};
	}, [] );
	const currentScreenValue = currentScreen === 'all-block-pages-grid' ? 'pages' : 'patterns';

	const isSyncing = () => {
		let syncFlags = {};
		switch ( currentScreen ) {
			case 'all-block-pages-grid':
				syncFlags = dynamicContentSyncFlags.pages;
				break;
			case 'all-blocks-grid':
				syncFlags = dynamicContentSyncFlags.patterns;
				break;
		}

		if ( reSyncStatus ) {
			return false;
		}

		if (
			( category.id === 'favorite' || category.id === '' ) && dynamicContentSyncStatus[ currentScreenValue ]
		) {
			return true;
		}

		if ( syncFlags[ category.id ] === false && dynamicContentSyncStatus[ currentScreenValue ] ) {
			return true;
		}

		return false;
	};

	const mergedCategories = Array.from( ( currentScreenValue === 'pages' ? allPagesCategories : allPatternsCategories ).reduce( ( acc, obj ) => {
		if ( ! acc.has( obj.id ) ) {
			acc.set( obj.id, obj );
		}
		return acc;
	}, new Map() ).values() );

	const handleRegenerateAI = async ( event ) => {
		event.preventDefault();
		event.stopPropagation();

		if ( isProcessing ) {
			return;
		}

		if ( reSyncStatus ) {
			return false;
		}

		if ( ! category ) {
			return;
		}

		let title;
		if ( category?.id && category.name ) {
			title = `Personalizing "${ category.name }"`;
		} else {
			title = 'Personalizing';
		}

		setNotice( {
			type: 'personalize',
			title,
			message: `Please wait a few moments. We are personalizing the selected category.`,
		} );

		setRegeneratingContentCategory( category?.id ?? '' );
		dynamicContentReSyncStatus();
		// dynamicContentSyncStart();
		setIsProcessing( true );

		let succeeded = false;
		if ( ! category?.id ) { // Regenerate all categories. Disabled for now.
			succeeded = await generateContentForAllCategories(
				mergedCategories,
				setDynamicContent,
				dynamicContentFlagSet,
				( catValue ) => setCurrentCategory( currentScreenValue, catValue ),
				setCreditsDetails,
				currentScreen === 'all-block-pages-grid' ? 'page' : 'block'
			);
		} else {
			try {
				succeeded = await regenrateAIContentForCategory( category?.id );
			} catch ( error ) {
				succeeded = error;
			}
		}

		const successTitle = 'Library Personalized',
			errorTitle = 'Library Personalization Failed';
		setIsProcessing( false );

		if (
			typeof succeeded === 'object' &&
			succeeded?.data?.code === 'api_throttle_error'
		) {
			setNotice( {
				type: 'error',
				title: 'Check Back Soon',
				message: (
					<>
						We are currently experiencing exceptionally high demand. Please try again in 5 minutes. If the error persists, kindly contact us through the website:
						<a
							href="https://zipwp.com/contact"
							target="_blank"
							rel="noreferrer"
						>
							{ ' ' }
							https://zipwp.com/contact
						</a>
						.
					</>
				),
			} );
		} else {
			setNotice( {
				type: succeeded ? 'success' : 'error',
				title: succeeded ? successTitle : errorTitle,
				message: succeeded
					? `Your library personalized successfully.`
					: 'Something went wrong, please try again',
			} );
		}
		dynamicContentSyncComplete();
		dynamicContentReSyncStatus();
		setRegeneratingContentCategory( null );
	};

	const regenrateAIContentForCategory = async ( catID ) => {
		try {
			const catFormData = new window.FormData();
			catFormData.append( 'action', 'ast-block-templates-regenerate' );
			catFormData.append(
				'security',
				ast_block_template_vars.ai_content_ajax_nonce
			);
			catFormData.append( 'category', catID );
			catFormData.append( 'regenerate', true );
			catFormData.append(
				'block_type',
				'all-blocks-grid' === currentScreen ? 'block' : 'page'
			);

			const response = await apiFetch( {
				url: ast_block_template_vars.ajax_url,
				method: 'POST',
				body: catFormData,
			} );
			if ( response.success ) {
				setDynamicContent( response.data.data );
				dynamicContentFlagSet( catID, true );
				setCreditsDetails( response.data.spec_credit_details );
				return true;
			}

			if ( response.data.code === 'api_throttle_error' ) {
				throw response;
			}
			return false;
		} catch ( error ) {
			if ( error.data.code === 'api_throttle_error' ) {
				throw error;
			}
			return false;
		}
	};

	const isDynamicSet = ( dynamicContent && Object.keys( dynamicContent ).length > 0 ) || ( !! businessDetails && dynamicContent && ! Object.keys( dynamicContent ).length );
	const showPagesSparkleIcon = currentScreenValue === 'pages' && !! dynamicContent && ! dynamicContent.hasOwnProperty( category.id ),
		isReGenerating = reSyncStatus && regeneratingContentCategory === category.id;

	return (
		<div
			className={ classNames(
				'group flex items-center justify-between px-3 py-2 rounded text-base cursor-pointer hover:bg-background-tertiary transition duration-150 ease-in-out',
				isActive && 'bg-background-tertiary'
			) }
			onClick={ onClick }
			aria-hidden="true"
		>
			<span
				className={ classNames(
					'leading-6 inline-flex items-start gap-2 text-[0.92rem]',
					isActive
						? 'text-nav-active font-medium'
						: 'text-nav-inactive font-normal'
				) }
			>
				{ category.name }
			</span>

			<span
				className={ classNames(
					'leading-6 font-normal',
					isActive ? 'text-body-text' : 'text-secondary-text'
				) }
			>
				{ ( isSyncing() || isReGenerating ) && <LoaderDots /> }
			</span>

			{ ( '' !== category.id && 'favorite' !== category.id ) && ( ( ! isSyncing() && ! isReGenerating && ! disableAi && isDynamicSet && ! dynamicContentSyncStatus[ currentScreenValue ] ) ) && (
				<RegenerateConfirmation
					categoryName={ category.name }
					onClick={ handleRegenerateAI }
					disabled={ isProcessing }
					boxText="Personalize"
				>
					<span
						className={ classNames(
							'leading-6 inline-flex text-accent-spectra',
							isProcessing && 'animate-none'
						) }
					>
						{
							( showPagesSparkleIcon && ! isProcessing ) ? (
								<SparklesIcon className="h-5 w-5" />
							) : (
								<BoltIcon className="h-5 w-5" />
							)
						}
					</span>
				</RegenerateConfirmation>
			) }
		</div>
	);
}

const Categories = ( {
	value,
	list,
	allCount,
	favoriteCount,
	onChange,
	hasSearchTerm,
	dynamicContentSyncFlags,
	disableAi,
	loadingBlocksAndSites,
} ) => {
	let categoriesList = [
		{
			id: 'favorite',
			name: 'Favorites',
			count: favoriteCount,
		},
		{
			id: '',
			name: 'All',
			count: allCount,
		},
		...list,
	];

	if ( favoriteCount === 0 ) {
		categoriesList = [
			{
				id: '',
				name: 'All',
				count: allCount,
			},
			...list,
		];
	}

	const isActive = useCallback( ( category ) => {
		if ( ! hasSearchTerm && value === '' && category.id === '' ) {
			return true;
		}

		return value === category.id;
	}, [ value, hasSearchTerm ] );

	const handleOnClick = ( category ) => ( event ) => {
		if ( 'function' === typeof onChange ) {
			onChange( event, category );
		}
	};

	if ( loadingBlocksAndSites ) {
		return Array.from( { length: 5 } ).map( ( _, indx ) => ( <div key={ indx } data-placeholder className="relative w-full h-10 rounded bg-gray-200" /> ) );
	}

	return (
		<div className="spectra-ai flex flex-col flex-1 gap-1 overflow-auto -mx-1 p-0.5 scrollbar-hover">
			{ categoriesList.map( ( category ) => (
				<CategoryItem
					key={ category?.id }
					category={ category }
					isActive={ isActive( category ) }
					onClick={ handleOnClick( category ) }
					dynamicContentSyncFlags={ dynamicContentSyncFlags }
					disableAi={ disableAi }
				/>
			) ) }
		</div>
	);
};

export default compose(
	withSelect( ( select ) => {
		const { getDisableAi, getLoadingBlocksAndSites } = select( STORE_KEY );
		return {
			disableAi: getDisableAi(),
			loadingBlocksAndSites: getLoadingBlocksAndSites(),
		};
	} )
)( memo( Categories ) );
