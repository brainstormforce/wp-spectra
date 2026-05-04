import { useState, useEffect, useMemo, useCallback } from 'react';
import apiFetch from '@wordpress/api-fetch';
import { toast } from '@bsf/force-ui';
import { __ } from '@wordpress/i18n';

/**
 * Custom hook for managing Learn chapters and steps
 *
 * @param {Object} config - Configuration object
 * @param {Array} config.initialChapters - Array of chapter objects with steps
 * @param {string} config.saveEndpoint - API endpoint to save progress (optional)
 * @returns {Object} - Object containing chapters state and utility functions
 */
const useBsfLearn = ( {
	initialChapters = [],
	saveEndpoint = null,
} = {} ) => {
	const [ chapters, setChapters ] = useState( initialChapters );
	const [ learnHowDialogOpen, setLearnHowDialogOpen ] = useState( false );
	const [ currentLearnHowItem, setCurrentLearnHowItem ] = useState( null );

	// Update chapters when initialChapters changes (e.g., when API data loads)
	useEffect( () => {
		if ( initialChapters.length > 0 ) {
			setChapters( initialChapters );
		}
	}, [ initialChapters ] );

	/**
	 * Update completion status of a specific step
	 *
	 * @param {string} chapterId - ID of the chapter containing the step
	 * @param {string} stepId - ID of the step to update
	 * @param {boolean} completed - New completion status
	 */
	const updateStepCompletion = useCallback(
		( chapterId, stepId, completed ) => {
			// Optimistically update UI
			setChapters( ( prevChapters ) =>
				prevChapters.map( ( chapter ) =>
					chapter.id === chapterId
						? {
								...chapter,
								steps: chapter.steps.map( ( step ) =>
									step.id === stepId ? { ...step, completed } : step
								),
						  }
						: chapter
				)
			);

			// Save to API if endpoint is provided
			if ( saveEndpoint ) {
				apiFetch( {
					path: saveEndpoint,
					method: 'POST',
					data: {
						chapterId,
						stepId,
						completed,
					},
				} ).catch( ( error ) => {
					// Revert UI state on error
					setChapters( ( prevChapters ) =>
						prevChapters.map( ( chapter ) =>
							chapter.id === chapterId
								? {
										...chapter,
										steps: chapter.steps.map( ( step ) =>
											step.id === stepId ? { ...step, completed: ! completed } : step
										),
								  }
								: chapter
						)
					);

					// Show error toast
					toast.error( __( 'Failed to save progress. Please try again.', 'ultimate-addons-for-gutenberg' ) );

					// eslint-disable-next-line no-console
					console.error( 'Failed to save progress:', error );
				} );
			}
		},
		[ saveEndpoint ]
	);

	/**
	 * Mark a step as completed
	 *
	 * @param {string} chapterId - ID of the chapter containing the step
	 * @param {string} stepId - ID of the step to mark as completed
	 */
	const markStepCompleted = useCallback(
		( chapterId, stepId ) => {
			updateStepCompletion( chapterId, stepId, true );
		},
		[ updateStepCompletion ]
	);

	/**
	 * Mark a step as incomplete
	 *
	 * @param {string} chapterId - ID of the chapter containing the step
	 * @param {string} stepId - ID of the step to mark as incomplete
	 */
	const markStepIncomplete = useCallback(
		( chapterId, stepId ) => {
			updateStepCompletion( chapterId, stepId, false );
		},
		[ updateStepCompletion ]
	);

	/**
	 * Reset all progress
	 */
	const resetProgress = useCallback( () => {
		setChapters( ( prevChapters ) =>
			prevChapters.map( ( chapter ) => ( {
				...chapter,
				steps: chapter.steps.map( ( step ) => ( { ...step, completed: false } ) ),
			} ) )
		);
	}, [] );

	/**
	 * Get the first incomplete chapter ID
	 * Used for default accordion open state
	 */
	const firstIncompleteChapterId = useMemo( () => {
		const incompleteChapter = chapters.find(
			( chapter ) =>
				chapter.steps.length !==
				chapter.steps.filter( ( step ) => step.completed ).length
		);
		return incompleteChapter?.id;
	}, [ chapters ] );

	/**
	 * Get overall progress statistics
	 */
	const progressStats = useMemo( () => {
		const totalSteps = chapters.reduce( ( sum, chapter ) => sum + chapter.steps.length, 0 );
		const completedSteps = chapters.reduce(
			( sum, chapter ) =>
				sum + chapter.steps.filter( ( step ) => step.completed ).length,
			0
		);
		const completionPercentage =
			totalSteps > 0 ? Math.round( ( completedSteps / totalSteps ) * 100 ) : 0;

		return {
			totalChapters: chapters.length,
			totalSteps,
			completedSteps,
			completionPercentage,
			isFullyCompleted: totalSteps > 0 && completedSteps === totalSteps,
		};
	}, [ chapters ] );

	/**
	 * Get chapter-specific statistics
	 *
	 * @param {string} chapterId - ID of the chapter
	 * @returns {Object} - Chapter statistics
	 */
	const getChapterStats = useCallback(
		( chapterId ) => {
			const chapter = chapters.find( ( c ) => c.id === chapterId );
			if ( ! chapter ) {
				return null;
			}

			const totalSteps = chapter.steps.length;
			const completedSteps = chapter.steps.filter( ( step ) => step.completed ).length;

			return {
				totalSteps,
				completedSteps,
				isCompleted: totalSteps > 0 && completedSteps === totalSteps,
				completionPercentage:
					totalSteps > 0 ? Math.round( ( completedSteps / totalSteps ) * 100 ) : 0,
			};
		},
		[ chapters ]
	);

	/**
	 * Open the learn how dialog with specific content
	 *
	 * @param {Object} item - Learn content item to display
	 */
	const openLearnHowDialog = useCallback( ( item ) => {
		setCurrentLearnHowItem( item );
		setLearnHowDialogOpen( true );
	}, [] );

	/**
	 * Close the learn how dialog
	 */
	const closeLearnHowDialog = useCallback( () => {
		setLearnHowDialogOpen( false );
		setCurrentLearnHowItem( null );
	}, [] );

	return {
		chapters,
		updateStepCompletion,
		markStepCompleted,
		markStepIncomplete,
		resetProgress,
		firstIncompleteChapterId,
		progressStats,
		getChapterStats,
		learnHowDialogOpen,
		currentLearnHowItem,
		openLearnHowDialog,
		closeLearnHowDialog,
		setLearnHowDialogOpen,
	};
};

export default useBsfLearn;
