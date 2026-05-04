# BSF Learn Library

A reusable React library for managing learning chapters and steps with progress tracking. Supports both direct data and API endpoints.

## Features

- ✅ State management for chapters and steps
- ✅ Progress tracking and completion status
- ✅ API endpoint support with loading states
- ✅ Separate GET and POST endpoints for fetching and saving progress
- ✅ Optimistic UI updates with automatic revert on error
- ✅ Toast notifications for error handling
- ✅ Calculate first incomplete chapter automatically
- ✅ Overall and per-chapter statistics
- ✅ Complete UI component included (BsfLearn)
- ✅ Individual components available (BsfLearnChapters, BsfLearnStep, BsfLearnSkeleton)
- ✅ Auto-close accordion (only one chapter open at a time)
- ✅ "Learn how" external link button in chapter headers
- ✅ **LearnHowDialog** - Modal for rich educational content (videos, images, links, lists)
- ✅ **Learn button in steps** - Support for both external links and modal dialogs
- ✅ Animated progress badges with visual feedback
- ✅ Fully customizable with your own data

## Installation

This library is part of the Spectra plugin. Simply import it in your components:

```javascript
// Simple usage (recommended)
import BsfLearn from '@DashboardApp/lib/bsf-learn';

// Advanced usage
import {
  useBsfLearn,
  BsfLearnChapters,
  BsfLearnStep,
  BsfLearnSkeleton,
  LearnHowDialog,
  RenderContent
} from '@DashboardApp/lib/bsf-learn';
```

## Usage

### Simple Usage with API (Recommended)

The easiest way to use the library is with the `BsfLearn` component and API endpoints:

```javascript
import { __ } from '@wordpress/i18n';
import BsfLearn from '@DashboardApp/lib/bsf-learn';

const MyLearnPage = () => {
  return (
    <div>
      <h1>Learn</h1>
      <BsfLearn
        endpoints={{
          get: '/uag/v1/admin/commonsettings/get-learn-chapters',
          set: '/uag/v1/admin/commonsettings/update-learn-progress'
        }}
      />
    </div>
  );
};

export default MyLearnPage;
```

### Simple Usage with Direct Data

You can also provide chapters data directly:

```javascript
import { __ } from '@wordpress/i18n';
import BsfLearn from '@DashboardApp/lib/bsf-learn';

const MyLearnPage = () => {
  const chaptersData = [
    {
      id: 'chapter-1',
      title: __( 'Getting Started', 'ultimate-addons-for-gutenberg' ),
      description: __( 'Learn the basics', 'ultimate-addons-for-gutenberg' ),
      url: 'https://docs.example.com',
      steps: [
        {
          id: 'step-1',
          title: __( 'First Step', 'ultimate-addons-for-gutenberg' ),
          description: __( 'Description of first step', 'ultimate-addons-for-gutenberg' ),
          action: {
            label: __( 'Set Up', 'ultimate-addons-for-gutenberg' ),
            url: '/wp-admin/customize.php',
            isExternal: false,
          },
          completed: false,
        },
      ],
    },
  ];

  return (
    <div>
      <h1>Learn</h1>
      <BsfLearn
        chapters={chaptersData}
      />
    </div>
  );
};

export default MyLearnPage;
```

### Advanced Usage (Custom Implementation)

```javascript
import { __ } from '@wordpress/i18n';
import useBsfLearn, { BsfLearnChapters } from '@DashboardApp/lib/bsf-learn';

const MyLearnPage = () => {
  const chaptersData = [
    {
      id: 'chapter-1',
      title: __( 'Getting Started', 'ultimate-addons-for-gutenberg' ),
      description: __( 'Learn the basics', 'ultimate-addons-for-gutenberg' ),
      url: 'https://docs.example.com',
      steps: [
        {
          id: 'step-1',
          title: __( 'First Step', 'ultimate-addons-for-gutenberg' ),
          description: __( 'Description of first step', 'ultimate-addons-for-gutenberg' ),
          action: {
            label: __( 'Set Up', 'ultimate-addons-for-gutenberg' ),
            url: '/wp-admin/customize.php',
            isExternal: false,
          },
          completed: false,
        },
      ],
    },
  ];

  const {
    chapters,
    updateStepCompletion,
    firstIncompleteChapterId,
    progressStats,
  } = useBsfLearn({
    initialChapters: chaptersData,
    saveEndpoint: '/uag/v1/admin/commonsettings/update-learn-progress',
  });

  return (
    <div>
      <h1>Learn</h1>
      <p>Progress: {progressStats.completionPercentage}%</p>

      <BsfLearnChapters
        chapters={chapters}
        defaultValue={firstIncompleteChapterId}
        onStepCompletionChange={updateStepCompletion}
      />
    </div>
  );
};

export default MyLearnPage;
```

## API Reference

### BsfLearn Component

The main component that handles everything automatically.

#### Props

```javascript
<BsfLearn
  chapters={[]}              // Array of chapter objects (optional if endpoints provided)
  endpoints={{}}             // API endpoints object (optional if chapters provided)
  className=""               // Custom className for wrapper (optional)
  onProgressChange={fn}      // Callback when progress changes (optional)
/>
```

**Props Details:**

- `chapters` (Array, optional): Array of chapter objects with steps. Not needed if using `endpoints`.
- `endpoints` (Object, optional): API endpoints configuration:
  - `get` (string): REST API endpoint to fetch chapters from. Example: `/uag/v1/admin/commonsettings/`
  - `set` (string): REST API endpoint to save progress to. Example: `/uag/v1/admin/commonsettings/update-learn-progress`
- `className` (string, optional): Additional CSS classes for the wrapper div
- `onProgressChange` (function, optional): Callback function that receives `progressStats` when progress changes

#### Example

```javascript
<BsfLearn
  endpoints={{
    get: '/uag/v1/admin/commonsettings/get-learn-chapters',
    set: '/uag/v1/admin/commonsettings/update-learn-progress'
  }}
  className="my-custom-class"
  onProgressChange={(stats) => console.log('Progress:', stats)}
/>
```

---

### useBsfLearn Hook

For advanced use cases where you need more control.

#### Parameters

```javascript
useBsfLearn({
  initialChapters: [],        // Array of chapter objects (required)
})
```

#### Returns

```javascript
{
  chapters,                  // Array of chapter objects with current state
  updateStepCompletion,      // Function to update step completion
  markStepCompleted,         // Function to mark step as completed
  markStepIncomplete,        // Function to mark step as incomplete
  resetProgress,             // Function to reset all progress
  firstIncompleteChapterId,  // ID of first incomplete chapter
  progressStats,             // Overall progress statistics
  getChapterStats,           // Function to get chapter-specific stats
  learnHowDialogOpen,        // Boolean state for dialog visibility
  currentLearnHowItem,       // Current item displayed in dialog
  openLearnHowDialog,        // Function to open dialog with item
  closeLearnHowDialog,       // Function to close dialog
  setLearnHowDialogOpen,     // Function to set dialog open state
}
```

### Data Structure

#### Chapter Object

```javascript
{
  id: 'chapter-id',                    // Unique identifier (required)
  title: 'Chapter Title',              // Display title (required)
  description: 'Chapter description',  // Description text (optional)
  url: 'https://docs.url',            // Documentation URL (optional)
  steps: [...]                         // Array of step objects (required)
}
```

#### Step Object

```javascript
{
  id: 'step-id',                       // Unique identifier (required)
  title: 'Step Title',                 // Display title (required)
  description: 'Step description',     // Description text (optional)
  learn: {                             // Learn how content (optional)
    type: 'link',                      // 'link' for external URL, or omit for dialog
    url: 'https://docs.url',           // External URL (for type: 'link')
    label: 'Learn how',                // Tooltip label (optional)
    title: 'Tutorial Title',           // Dialog title (for dialog type)
    content: [                         // Dialog content array (for dialog type)
      {
        type: 'video',
        data: {
          url: 'https://youtube.com/embed/...',
          title: 'Video Title'
        }
      },
      {
        type: 'paragraph',
        text: 'Descriptive text...'
      },
      {
        type: 'link',
        data: {
          text: 'Read documentation',
          url: 'https://docs.url',
          target: '_blank'
        }
      }
    ]
  },
  action: {
    label: 'Set Up',                   // Button label (required)
    url: '/wp-admin/...',              // Action URL (required)
    isExternal: false,                 // Open in new tab? (optional)
  },
  completed: false,                    // Completion status (required)
  isPro: false,                        // Show Pro badge? (optional)
}
```

### Functions

#### updateStepCompletion(chapterId, stepId, completed)

Update the completion status of a specific step.

```javascript
updateStepCompletion('chapter-1', 'step-1', true);
```

#### markStepCompleted(chapterId, stepId)

Mark a step as completed.

```javascript
markStepCompleted('chapter-1', 'step-1');
```

#### markStepIncomplete(chapterId, stepId)

Mark a step as incomplete.

```javascript
markStepIncomplete('chapter-1', 'step-1');
```

#### resetProgress()

Reset all progress to incomplete.

```javascript
resetProgress();
```

#### getChapterStats(chapterId)

Get statistics for a specific chapter.

```javascript
const stats = getChapterStats('chapter-1');
// Returns: { totalSteps, completedSteps, isCompleted, completionPercentage }
```

### Progress Stats

The `progressStats` object contains:

```javascript
{
  totalChapters: 5,           // Total number of chapters
  totalSteps: 20,             // Total number of steps
  completedSteps: 10,         // Number of completed steps
  completionPercentage: 50,   // Percentage completed (0-100)
  isFullyCompleted: false,    // Whether all steps are completed
}
```

## Components

### BsfLearnChapters

Renders chapters with expandable accordion containing steps. Uses auto-close accordion behavior (only one chapter can be open at a time). Displays a "Learn how" button when a chapter has a `url` property.

**Props:**
- `chapters` (Array): Array of chapter objects
- `defaultValue` (string): ID of the chapter to open by default
- `onStepCompletionChange` (Function): Callback when step completion changes
- `onLearnHowClick` (Function): Callback to open learn how dialog (passed to steps)

```javascript
<BsfLearnChapters
  chapters={chaptersArray}
  defaultValue={firstIncompleteChapterId}
  onStepCompletionChange={updateStepCompletion}
  onLearnHowClick={openLearnHowDialog}
/>
```

### BsfLearnStep

Renders a single step with completion checkbox and action button. Shows a tooltip on hover over the checkbox. Supports Pro badge for premium features. Includes optional "Learn how" button that can open external links or the LearnHowDialog.

**Props:**
- `step` (Object): Step data object
- `chapterId` (string): ID of the parent chapter
- `isLast` (boolean): Whether this is the last step in the chapter
- `onCompletionChange` (Function): Callback when completion status changes
- `onLearnHowClick` (Function): Callback to open learn how dialog

```javascript
<BsfLearnStep
  step={stepObject}
  chapterId="chapter-1"
  isLast={false}
  onCompletionChange={updateStepCompletion}
  onLearnHowClick={openLearnHowDialog}
/>
```

### BsfLearnSkeleton

Renders a loading skeleton while data is being fetched. Shows one expanded chapter with 4 steps and 4 collapsed chapters.

```javascript
<BsfLearnSkeleton />
```

### LearnHowDialog

A modal dialog component for displaying rich educational content including videos, images, links, paragraphs, lists, checklists, and buttons.

**Props:**
- `open` (boolean): Controls dialog visibility
- `setOpen` (Function): Callback to update dialog open state
- `item` (Object): Content item with title, description, and learn content

**Content Types Supported:**
- `video` - Embedded video iframe
- `image` - Image with optional alt text
- `link` - Hyperlink with optional prefix
- `heading` - Heading text
- `paragraph` / `text` - Text content
- `list` - Bulleted list
- `checklist` - Numbered checklist with steps
- `button` - Action button

```javascript
import { LearnHowDialog } from '@DashboardApp/lib/bsf-learn';

const [isOpen, setIsOpen] = useState(false);
const contentItem = {
  title: 'How to Customize Colors',
  description: 'Learn how to set up your brand colors',
  learn: {
    content: [
      {
        type: 'video',
        data: {
          url: 'https://www.youtube.com/embed/VIDEO_ID',
          title: 'Color Customization Tutorial'
        }
      },
      {
        type: 'paragraph',
        text: 'Follow these steps to customize your site colors...'
      },
      {
        type: 'checklist',
        data: {
          items: [
            { text: 'Open the customizer' },
            { text: 'Navigate to Colors section' },
            { text: 'Choose your brand colors' }
          ]
        }
      },
      {
        type: 'link',
        data: {
          text: 'Read full documentation',
          url: 'https://docs.example.com/colors',
          target: '_blank'
        }
      }
    ]
  }
};

<LearnHowDialog
  open={isOpen}
  setOpen={setIsOpen}
  item={contentItem}
/>
```

### RenderContent

Internal component that renders different content types dynamically. Used by LearnHowDialog but can be used standalone.

```javascript
import { RenderContent } from '@DashboardApp/lib/bsf-learn';

<RenderContent items={[
  { type: 'paragraph', text: 'Some text...' },
  { type: 'link', data: { text: 'Click here', url: 'https://...' } }
]} />
```

## Creating REST API Endpoints

To use the API functionality, create two REST API endpoints:

### GET Endpoint - Fetch Chapters

Returns chapters data with progress state from user meta:

```php
// Register GET endpoint
register_rest_route(
    'your-namespace/v1',
    'get-learn-chapters',
    array(
        array(
            'methods'             => WP_REST_Server::READABLE,
            'callback'            => array( $this, 'get_learn_chapters' ),
            'permission_callback' => array( $this, 'get_permissions_check' ),
        ),
    )
);

// Get chapters with saved progress
public function get_learn_chapters( $request ) {
    // Get saved progress from user meta
    $user_id        = get_current_user_id();
    $saved_progress = get_user_meta( $user_id, 'your_theme_learn_progress', true );
    if ( ! is_array( $saved_progress ) ) {
        $saved_progress = array();
    }

    $chapters = array(
        array(
            'id'          => 'chapter-1',
            'title'       => __( 'Getting Started', 'your-theme' ),
            'description' => __( 'Learn the basics', 'your-theme' ),
            'url'         => 'https://docs.example.com',
            'steps'       => array(
                array(
                    'id'          => 'step-1',
                    'title'       => __( 'First Step', 'your-theme' ),
                    'description' => __( 'Description', 'your-theme' ),
                    'action'      => array(
                        'label' => __( 'Set Up', 'your-theme' ),
                        'url'   => '/wp-admin/customize.php',
                    ),
                    'completed'   => false,
                ),
            ),
        ),
    );

    // Merge saved progress with chapters
    foreach ( $chapters as &$chapter ) {
        if ( isset( $chapter['steps'] ) && is_array( $chapter['steps'] ) ) {
            foreach ( $chapter['steps'] as &$step ) {
                if ( isset( $saved_progress[ $chapter['id'] ][ $step['id'] ] ) ) {
                    $step['completed'] = $saved_progress[ $chapter['id'] ][ $step['id'] ];
                }
            }
        }
    }

    return apply_filters( 'your_theme_learn_chapters', $chapters );
}
```

### POST Endpoint - Save Progress

Saves progress to user meta in nested format:

```php
// Register POST endpoint
register_rest_route(
    'your-namespace/v1',
    'update-learn-progress',
    array(
        array(
            'methods'             => WP_REST_Server::CREATABLE,
            'callback'            => array( $this, 'save_learn_progress' ),
            'permission_callback' => array( $this, 'get_permissions_check' ),
            'args'                => array(
                'chapterId' => array(
                    'required'          => true,
                    'type'              => 'string',
                    'sanitize_callback' => 'sanitize_text_field',
                ),
                'stepId'    => array(
                    'required'          => true,
                    'type'              => 'string',
                    'sanitize_callback' => 'sanitize_text_field',
                ),
                'completed' => array(
                    'required' => true,
                    'type'     => 'boolean',
                ),
            ),
        ),
    )
);

// Save progress
public function save_learn_progress( $request ) {
    $chapter_id = $request->get_param( 'chapterId' );
    $step_id    = $request->get_param( 'stepId' );
    $completed  = $request->get_param( 'completed' );

    // Get current progress
    $user_id        = get_current_user_id();
    $saved_progress = get_user_meta( $user_id, 'your_theme_learn_progress', true );
    if ( ! is_array( $saved_progress ) ) {
        $saved_progress = array();
    }

    // Initialize chapter array if it doesn't exist
    if ( ! isset( $saved_progress[ $chapter_id ] ) || ! is_array( $saved_progress[ $chapter_id ] ) ) {
        $saved_progress[ $chapter_id ] = array();
    }

    // Update progress for this step
    $saved_progress[ $chapter_id ][ $step_id ] = (bool) $completed;

    // Save to user meta
    update_user_meta( $user_id, 'your_theme_learn_progress', $saved_progress );

    return new WP_REST_Response(
        array(
            'success' => true,
            'message' => __( 'Progress saved successfully.', 'your-theme' ),
        ),
        200
    );
}

// Permission check
public function get_permissions_check( $request ) {
    if ( ! current_user_can( 'edit_theme_options' ) ) {
        return new WP_Error(
            'rest_cannot_view',
            __( 'Sorry, you cannot list resources.', 'your-theme' ),
            array( 'status' => rest_authorization_required_code() )
        );
    }
    return true;
}
```

**Progress Data Structure:**

The progress is stored in user meta in a nested format:
```php
array(
    'chapter-id' => array(
        'step-id-1' => true,
        'step-id-2' => false,
    ),
    'chapter-id-2' => array(
        'step-id-1' => true,
    ),
)
```

## Version History

- **3.1.0** - Added LearnHowDialog component, learn button in steps with support for both external links and modal dialogs, RenderContent component for rich content display (videos, images, links, lists, checklists, buttons)
- **3.0.0** - Changed to endpoints object (get/set), added optimistic UI updates, error handling with toast notifications, nested progress storage format
- **2.0.0** - Removed localStorage persistence, added API support with loading states
- **1.0.0** - Initial release with full feature set

## Support

For issues or questions, please contact the Spectra development team.
