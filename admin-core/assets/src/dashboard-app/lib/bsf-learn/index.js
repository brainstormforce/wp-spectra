/**
 * BSF Learn Library
 *
 * A reusable library for managing learning chapters and steps
 * with progress tracking. Supports both direct data and API endpoints.
 * Includes LearnHowDialog for rich educational content (videos, guides, etc).
 *
 * Version: 3.1.0
 * Created: December 2025
 *
 * Usage (Simple - With API):
 * import BsfLearn from '@DashboardApp/lib/bsf-learn';
 *
 * const MyComponent = () => {
 *   return (
 *     <BsfLearn
 *       endpoints={{
 *         get: '/uag/v1/admin/commonsettings/get-learn-chapters',
 *         set: '/uag/v1/admin/commonsettings/update-learn-progress'
 *       }}
 *     />
 *   );
 * };
 *
 * Usage (With Direct Data):
 * import BsfLearn from '@DashboardApp/lib/bsf-learn';
 *
 * const MyComponent = () => {
 *   return (
 *     <BsfLearn
 *       chapters={myChaptersData}
 *     />
 *   );
 * };
 *
 * Usage (Advanced - Custom Implementation):
 * import { useBsfLearn, BsfLearnChapters, BsfLearnStep } from '@DashboardApp/lib/bsf-learn';
 *
 * const MyComponent = () => {
 *   const {
 *     chapters,
 *     updateStepCompletion,
 *     firstIncompleteChapterId,
 *     progressStats
 *   } = useBsfLearn({
 *     initialChapters: myChaptersData,
 *     saveEndpoint: '/uag/v1/admin/commonsettings/update-learn-progress'
 *   });
 *
 *   return (
 *     <div>
 *       <BsfLearnChapters
 *         chapters={chapters}
 *         defaultValue={firstIncompleteChapterId}
 *         onStepCompletionChange={updateStepCompletion}
 *       />
 *     </div>
 *   );
 * };
 */

// Main component (recommended for most use cases)
export { default } from './components/BsfLearn';
export { default as BsfLearn } from './components/BsfLearn';

// Hook and individual components (for advanced use cases)
export { default as useBsfLearn } from './useBsfLearn';
export { default as BsfLearnChapters } from './components/BsfLearnChapters';
export { default as BsfLearnStep } from './components/BsfLearnStep';
export { default as BsfLearnSkeleton } from './components/BsfLearnSkeleton';

// LearnHow Dialog components
export { default as LearnHowDialog } from './components/LearnHowDialog';
export { default as RenderContent } from './components/learn-how/RenderContent';
