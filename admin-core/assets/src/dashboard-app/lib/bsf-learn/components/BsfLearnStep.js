import { __ } from '@wordpress/i18n';
import { Button, Text, Tooltip, Badge } from '@bsf/force-ui';
import { useState, useEffect } from 'react';
import { ArrowUpRight, Check, Info, Video } from 'lucide-react';

/**
 * Component for rendering a single learn step within a chapter
 *
 * @param {Object} props - Component props
 * @param {Object} props.step - Step data object
 * @param {string} props.chapterId - ID of the parent chapter
 * @param {boolean} props.isLast - Whether this is the last step in the chapter
 * @param {Function} props.onCompletionChange - Callback when step completion status changes
 * @param {Function} props.onLearnHowClick - Callback to open learn how dialog
 * @returns {JSX.Element|null} - Rendered step component
 */
const BsfLearnStep = ( { step, chapterId, isLast = false, onCompletionChange, onLearnHowClick } ) => {
	const {
		id,
		title,
		description,
		learn,
		action,
		completed = false,
		isPro = false,
	} = step;

	const [ isCompleted, setIsCompleted ] = useState( completed );

	// Update local state when completed prop changes
	useEffect( () => {
		setIsCompleted( completed );
	}, [ completed ] );

	if ( ! id || ! title ) {
		return null;
	}

	const handleCompletion = () => {
		const newStatus = ! isCompleted;
		setIsCompleted( newStatus );

		// Call parent callback to update state
		if ( onCompletionChange ) {
			onCompletionChange( chapterId, id, newStatus );
		}
	};

	const LearnIcon = () => {
		switch ( learn?.type ) {
			case 'video':
				return <Video size={ 14 } />;
			case 'link':
			default:
				return <Info size={ 14 } />;
		}
	}

	const handleLearnClick = () => {
		if ( learn?.type === 'link' ) {
			window.open( learn?.url, '_blank', 'noopener,noreferrer' );
			return;
		}

		// Open learn how dialog for other types (video, content, etc.)
		if ( onLearnHowClick && learn ) {
			onLearnHowClick( step );
		}
	};

	const handleActionClick = () => {
		if ( action?.url ) {
			if ( action?.isExternal ) {
				window.open( action?.url, '_blank', 'noopener,noreferrer' );
			} else {
				// Internal navigation
				window.location.href = action?.url;
			}
			return;
		}

		console.info( 'Empty or missing URL!!!' );
	};

	const statusText = isCompleted
		? __( 'Mark as incomplete', 'ultimate-addons-for-gutenberg' )
		: __( 'Mark as complete', 'ultimate-addons-for-gutenberg' );

	return (
		<div className={`py-4 sm:py-5 flex items-center gap-2 sm:gap-3 border-solid border-0 border-border-subtle ${ isLast ? '' : 'border-b-0.5' }`}>
			<Tooltip arrow content={ statusText } placement="top" variant="dark">
				<span
					className={ `self-start mt-[1px] flex justify-center items-center w-5 h-5 rounded-full cursor-pointer border-[1.25px] border-solid ${
						isCompleted
							? 'bg-support-success p-[3px] sm:p-[4px] border-support-success-inverse'
							: 'border-border-strong [&:hover>svg]:text-border-strong'
					}` }
					tabIndex={ 0 }
					aria-label={ statusText }
					onClick={ handleCompletion }
					onKeyDown={ ( e ) => {
						if ( e.key === 'Enter' || e.key === ' ' ) {
							e.preventDefault();
							handleCompletion();
						}
					} }
				>
					<Check
						className="text-icon-on-color sm:w-3.5 sm:h-3.5 transition-all duration-200"
						size={ 12 }
						strokeWidth={ 1.5 }
					/>
				</span>
			</Tooltip>

			<div className="flex-1 flex flex-col gap-1.5">
				<Text
					className="flex-1"
					size={ 14 }
					weight={ 500 }
					color="primary"
				>
					{ title }
				</Text>
				<Text
					className="flex-1 hidden sm:block"
					size={ 14 }
					color="secondary"
				>
					{ description }
				</Text>
			</div>

			{ isPro && (
				<Badge
					label={ __( 'Pro', 'ultimate-addons-for-gutenberg' ) }
					size="xs"
					type="pill"
					variant="inverse"
					className="uppercase"
				/>
			) }

			{ learn && (
				<Tooltip arrow content={ learn?.label || __( 'Learn how', 'ultimate-addons-for-gutenberg' ) } placement="top" variant="dark">
					<Button
						size="xs"
						variant="ghost"
						icon={ <LearnIcon /> }
						onClick={ handleLearnClick }
						className="text-button-primary hover:bg-transparent outline-none"
					/>
				</Tooltip>
			) }

			<Button
				className="px-3 gap-0.5 min-w-40 text-text-on-color hover:bg-background-button-hover hover:outline-button-secondary"
				size="sm"
				variant="primary"
				icon={ <ArrowUpRight size={ 14 } /> }
				iconPosition="right"
				onClick={ handleActionClick }
			>
				{ action?.label || __( 'Set Up', 'ultimate-addons-for-gutenberg' ) }
			</Button>
		</div>
	);
};

export default BsfLearnStep;
