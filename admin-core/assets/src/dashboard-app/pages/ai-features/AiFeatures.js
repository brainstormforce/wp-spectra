/**
 * The Dashboard App for Zip AI Admin.
 */

import Authorization from '@DashboardApp/pages/ai-features/screens/Authorization';
import Settings from '@DashboardApp/pages/ai-features/screens/Settings';

// Render either the AI Authorization screen, or the Settings Page.
const AiFeatures = () => ( uag_react?.zip_ai_is_authorized ) ? <Settings /> : <Authorization />;

export default AiFeatures;
