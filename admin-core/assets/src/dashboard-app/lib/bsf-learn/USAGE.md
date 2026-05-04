# BSF Learn Library - Quick Start Guide

## 📦 What's Included

```
dashboard-app/lib/bsf-learn/
├── useBsfLearn.js              # Core hook for state management
├── index.js                    # Main exports
├── helpers.js                  # Utility functions
├── components/
│   ├── BsfLearn.js            # 🌟 Main component (use this!)
│   ├── BsfLearnChapter.js     # Individual chapter component
│   ├── BsfLearnStep.js        # Individual step component
│   ├── BsfLearnSkeleton.js    # Loading skeleton component
│   ├── LearnHowDialog.js      # Modal dialog for learn content
│   └── learn-how/             # Learn dialog sub-components
│       ├── RenderContent.js   # Content renderer
│       ├── Button.js          # Button component
│       ├── Checklist.js       # Checklist component
│       ├── Link.js            # Link component
│       ├── List.js            # List component
│       ├── Paragraph.js       # Paragraph component
│       └── Video.js           # Video component
├── README.md                   # Full documentation
└── USAGE.md                    # This file
```

## 🚀 Quick Start

### Option 1: With API Endpoints (Recommended)

```javascript
import BsfLearn from '@DashboardApp/lib/bsf-learn';

const MyPage = () => {
  return (
    <BsfLearn
      endpoints={{
        get: '/uag/v1/admin/commonsettings/get-learn-chapters',
        set: '/uag/v1/admin/commonsettings/update-learn-progress'
      }}
    />
  );
};
```

### Option 2: With Direct Data

```javascript
import BsfLearn from '@DashboardApp/lib/bsf-learn';

const MyPage = () => {
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
          description: __( 'Description', 'ultimate-addons-for-gutenberg' ),
          action: {
            label: __( 'Set Up', 'ultimate-addons-for-gutenberg' ),
            url: '/wp-admin/customize.php',
            isExternal: false,
          },
          completed: false,
          isPro: false, // Optional
        },
      ],
    },
  ];

  return (
    <BsfLearn
      chapters={chaptersData}
    />
  );
};
```

That's it! 🎉

## 🎯 Complete Example with API

```javascript
import { __ } from '@wordpress/i18n';
import BsfLearn from '@DashboardApp/lib/bsf-learn';

const LearnPage = () => {
  return (
    <div className="my-learn-page">
      <h1>{__( 'Learn', 'ultimate-addons-for-gutenberg' )}</h1>
      <p>{__( 'Follow these steps to set up your site', 'ultimate-addons-for-gutenberg' )}</p>

      <BsfLearn
        endpoints={{
          get: '/uag/v1/admin/commonsettings/get-learn-chapters',
          set: '/uag/v1/admin/commonsettings/update-learn-progress'
        }}
        className="my-custom-learn-wrapper"
        onProgressChange={(stats) => {
          console.log('Progress:', stats.completionPercentage + '%');
        }}
      />
    </div>
  );
};

export default LearnPage;
```

## 🎯 Complete Example with Direct Data

```javascript
import { __ } from '@wordpress/i18n';
import BsfLearn from '@DashboardApp/lib/bsf-learn';

const LearnPage = () => {
  const chapters = [
    {
      id: 'branding',
      title: __( 'Brand Setup', 'ultimate-addons-for-gutenberg' ),
      description: __( 'Set up your brand identity', 'ultimate-addons-for-gutenberg' ),
      url: 'https://docs.example.com/branding',
      steps: [
        {
          id: 'logo',
          title: __( 'Add Logo', 'ultimate-addons-for-gutenberg' ),
          description: __( 'Upload your brand logo', 'ultimate-addons-for-gutenberg' ),
          action: {
            label: __( 'Customize', 'ultimate-addons-for-gutenberg' ),
            url: '/wp-admin/customize.php?autofocus[section]=title_tagline',
          },
          completed: false,
        },
        {
          id: 'colors',
          title: __( 'Brand Colors', 'ultimate-addons-for-gutenberg' ),
          description: __( 'Set your brand colors', 'ultimate-addons-for-gutenberg' ),
          action: {
            label: __( 'Colors', 'ultimate-addons-for-gutenberg' ),
            url: '/wp-admin/customize.php?autofocus[section]=colors',
          },
          completed: false,
        },
      ],
    },
    {
      id: 'content',
      title: __( 'Content Setup', 'ultimate-addons-for-gutenberg' ),
      description: __( 'Add your content', 'ultimate-addons-for-gutenberg' ),
      url: 'https://docs.example.com/content',
      steps: [
        {
          id: 'homepage',
          title: __( 'Edit Homepage', 'ultimate-addons-for-gutenberg' ),
          description: __( 'Customize your homepage content', 'ultimate-addons-for-gutenberg' ),
          action: {
            label: __( 'Edit', 'ultimate-addons-for-gutenberg' ),
            url: '/wp-admin/edit.php?post_type=page',
          },
          completed: false,
        },
      ],
    },
  ];

  return (
    <div className="my-learn-page">
      <h1>{__( 'Learn', 'ultimate-addons-for-gutenberg' )}</h1>
      <p>{__( 'Follow these steps to set up your site', 'ultimate-addons-for-gutenberg' )}</p>

      <BsfLearn
        chapters={chapters}
        className="my-custom-learn-wrapper"
        onProgressChange={(stats) => {
          console.log('Progress:', stats.completionPercentage + '%');
        }}
      />
    </div>
  );
};

export default LearnPage;
```

## 📋 Component Props

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `chapters` | Array | No* | `[]` | Array of chapter objects (*required if no endpoints) |
| `endpoints` | Object | No* | `null` | API endpoints object (*required if no chapters) |
| `endpoints.get` | String | No | - | API endpoint to fetch chapters |
| `endpoints.set` | String | No | - | API endpoint to save progress |
| `className` | String | No | `''` | Additional CSS classes |
| `onProgressChange` | Function | No | - | Callback when progress changes |

## 🔧 Data Structure

### Chapter Object

```javascript
{
  id: 'unique-id',              // Required: Unique identifier
  title: 'Chapter Title',       // Required: Display title
  description: 'Description',   // Optional: Chapter description
  url: 'https://docs.url',     // Optional: Documentation link
  steps: [...]                  // Required: Array of step objects
}
```

### Step Object

```javascript
{
  id: 'unique-id',              // Required: Unique identifier
  title: 'Step Title',          // Required: Display title
  description: 'Description',   // Optional: Step description
  learn: {                      // Optional: Learn how content
    type: 'link',               // 'link' opens URL, omit for dialog
    url: 'https://docs.url',    // For type: 'link'
    label: 'Learn how',         // Optional: Tooltip text
    title: 'Tutorial',          // For dialog: Title
    content: [...]              // For dialog: Content array
  },
  action: {
    label: 'Button Text',       // Required: Button label
    url: '/url',                // Required: Action URL
    isExternal: false,          // Optional: Open in new tab?
  },
  completed: false,             // Required: Initial completion status
  isPro: false,                 // Optional: Show Pro badge?
}
```

## 📚 Learn How Feature

Steps can include a "Learn how" button that either opens an external link or displays a modal dialog with rich content.

### External Link Example

```javascript
{
  id: 'colors',
  title: __( 'Brand Colors', 'ultimate-addons-for-gutenberg' ),
  description: __( 'Set your brand colors', 'ultimate-addons-for-gutenberg' ),
  learn: {
    type: 'link',
    url: 'https://docs.example.com/colors',
    label: __( 'Learn how', 'ultimate-addons-for-gutenberg' )
  },
  action: {
    label: __( 'Customize', 'ultimate-addons-for-gutenberg' ),
    url: '/wp-admin/customize.php?autofocus[section]=colors',
  },
  completed: false,
}
```

### Dialog with Rich Content Example

```javascript
{
  id: 'logo',
  title: __( 'Add Logo', 'ultimate-addons-for-gutenberg' ),
  description: __( 'Upload your brand logo', 'ultimate-addons-for-gutenberg' ),
  learn: {
    title: __( 'How to Add Your Logo', 'ultimate-addons-for-gutenberg' ),
    content: [
      {
        type: 'video',
        data: {
          url: 'https://www.youtube.com/embed/VIDEO_ID',
          title: __( 'Logo Upload Tutorial', 'ultimate-addons-for-gutenberg' )
        }
      },
      {
        type: 'paragraph',
        text: __( 'Your logo appears in the header of your website. Follow these steps to upload it:', 'ultimate-addons-for-gutenberg' )
      },
      {
        type: 'checklist',
        data: {
          items: [
            { text: __( 'Click the "Customize" button', 'ultimate-addons-for-gutenberg' ) },
            { text: __( 'Navigate to Site Identity', 'ultimate-addons-for-gutenberg' ) },
            { text: __( 'Click "Select Logo"', 'ultimate-addons-for-gutenberg' ) },
            { text: __( 'Upload your logo image', 'ultimate-addons-for-gutenberg' ) }
          ]
        }
      },
      {
        type: 'heading',
        text: __( 'Best Practices', 'ultimate-addons-for-gutenberg' )
      },
      {
        type: 'list',
        data: {
          items: [
            __( 'Use PNG format with transparent background', 'ultimate-addons-for-gutenberg' ),
            __( 'Recommended size: 200x60 pixels', 'ultimate-addons-for-gutenberg' ),
            __( 'Keep file size under 100KB', 'ultimate-addons-for-gutenberg' )
          ]
        }
      },
      {
        type: 'link',
        data: {
          text: __( 'Read full documentation', 'ultimate-addons-for-gutenberg' ),
          url: 'https://docs.example.com/logo',
          target: '_blank'
        }
      }
    ]
  },
  action: {
    label: __( 'Add Logo', 'ultimate-addons-for-gutenberg' ),
    url: '/wp-admin/customize.php?autofocus[control]=custom_logo',
  },
  completed: false,
}
```

### Available Content Types

- **video** - Embedded video iframe
  ```javascript
  { type: 'video', data: { url: 'https://...', title: 'Video Title' } }
  ```

- **image** - Image with alt text
  ```javascript
  { type: 'image', data: { src: 'https://...', alt: 'Description' } }
  ```

- **paragraph** / **text** - Text content
  ```javascript
  { type: 'paragraph', text: 'Your text here...' }
  ```

- **heading** - Heading text
  ```javascript
  { type: 'heading', text: 'Section Heading' }
  ```

- **link** - Hyperlink
  ```javascript
  { type: 'link', prefix: 'More info:', data: { text: 'Link Text', url: 'https://...', target: '_blank' } }
  ```

- **list** - Bulleted list
  ```javascript
  { type: 'list', data: { items: ['Item 1', 'Item 2', 'Item 3'] } }
  ```

- **checklist** - Numbered step checklist
  ```javascript
  { type: 'checklist', data: { items: [{ text: 'Step 1' }, { text: 'Step 2' }] } }
  ```

- **button** - Action button
  ```javascript
  { type: 'button', data: { text: 'Click Me', url: 'https://...', target: '_blank', variant: 'primary' } }
  ```

## 🎨 Styling

The component uses Tailwind CSS classes. You can customize by:

1. **Adding className prop:**
   ```javascript
   <BsfLearn className="custom-wrapper" ... />
   ```

2. **Wrapping in your own styled div:**
   ```javascript
   <div className="my-learn-section">
     <BsfLearn ... />
   </div>
   ```

## 📊 Progress Tracking

Use the `onProgressChange` callback to track progress:

```javascript
<BsfLearn
  endpoints={{
    get: '/uag/v1/admin/commonsettings/get-learn-chapters',
    set: '/uag/v1/admin/commonsettings/update-learn-progress'
  }}
  onProgressChange={(stats) => {
    console.log('Total steps:', stats.totalSteps);
    console.log('Completed:', stats.completedSteps);
    console.log('Progress:', stats.completionPercentage + '%');
    console.log('Fully complete:', stats.isFullyCompleted);
  }}
/>
```

## 🔌 Creating REST API Endpoints

To use the API functionality, create two WordPress REST API endpoints:

### GET Endpoint - Fetch Chapters

```php
public function register_routes() {
    // GET endpoint - fetch chapters with progress
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

    // POST endpoint - save progress
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
}

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

public function save_learn_progress( $request ) {
    $chapter_id = $request->get_param( 'chapterId' );
    $step_id    = $request->get_param( 'stepId' );
    $completed  = $request->get_param( 'completed' );

    $user_id        = get_current_user_id();
    $saved_progress = get_user_meta( $user_id, 'your_theme_learn_progress', true );
    if ( ! is_array( $saved_progress ) ) {
        $saved_progress = array();
    }

    if ( ! isset( $saved_progress[ $chapter_id ] ) ) {
        $saved_progress[ $chapter_id ] = array();
    }

    $saved_progress[ $chapter_id ][ $step_id ] = (bool) $completed;
    update_user_meta( $user_id, 'your_theme_learn_progress', $saved_progress );

    return new WP_REST_Response( array( 'success' => true ), 200 );
}

public function get_permissions_check( $request ) {
    if ( ! current_user_can( 'edit_theme_options' ) ) {
        return new WP_Error( 'rest_cannot_view', __( 'Sorry, you cannot list resources.', 'your-theme' ), array( 'status' => rest_authorization_required_code() ) );
    }
    return true;
}
```

Then use it in your component:

```javascript
<BsfLearn
  endpoints={{
    get: '/your-namespace/v1/get-learn-chapters',
    set: '/your-namespace/v1/update-learn-progress'
  }}
/>
```

## 🔄 Copy to Other Projects

To use this library in other projects:

1. **Copy the entire folder:**
   ```bash
   cp -r dashboard-app/lib/bsf-learn /path/to/other/project/lib/
   ```

2. **Update import paths** based on your project structure

3. **Ensure dependencies are installed:**
   - `react`
   - `@bsf/force-ui`
   - `@wordpress/i18n`
   - `@wordpress/api-fetch`
   - `lucide-react`

4. **Use it the same way:**
   ```javascript
   import BsfLearn from '@/lib/bsf-learn';
   // Or with your custom alias:
   import BsfLearn from '@DashboardApp/lib/bsf-learn';
   ```

## 🆘 Need Help?

- See [README.md](./README.md) for full API documentation
- Check the advanced usage examples in README.md
- Review the source code in `components/BsfLearn.js`

## ✨ Tips

1. **Keep chapter IDs unique** across your entire chapters array
2. **Keep step IDs unique** within each chapter
3. **Use translation functions** (`__()`) for all user-facing text
4. **Set `completed: false`** initially for all steps
5. **Use `isExternal: true`** for external documentation links
6. **Use API endpoints** for better separation of concerns and easier updates
7. **Error handling** - The component automatically shows toast notifications if progress save fails and reverts the UI state
8. **Optimistic updates** - UI updates instantly while saving to the server in the background
9. **Learn feature** - Use `type: 'link'` for quick external docs, or omit type to show a rich dialog with videos and step-by-step guides
10. **Video embeds** - Use YouTube/Vimeo embed URLs (not regular video URLs) for the video content type

---

**Version:** 3.1.0
**Last Updated:** December 2025

## 📝 Changelog

- **3.1.0** - Added LearnHowDialog modal component, learn button in steps with support for both external links and dialog content, RenderContent component for rich content (videos, images, links, lists, checklists, buttons)
- **3.0.0** - Changed to endpoints object (get/set), added optimistic UI updates, error handling with toast notifications, nested progress storage format
- **2.0.0** - Removed localStorage persistence, added API support with loading states
- **1.0.0** - Initial release with full feature set
