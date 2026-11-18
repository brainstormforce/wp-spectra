/**
 * Helpers to determine which third-party plugins a pattern needs before it can
 * be inserted, so the consent / installation popup can be shown to the user.
 *
 * Spectra requirement is derived purely client-side from the pattern version
 * (`spectra-ver`) and the plugin statuses already localized in
 * `ast_block_template_vars` — no extra API call.
 *
 * Form plugins (SureForms / WPForms) are pattern-specific and only available in
 * the per-pattern detail response (`post-meta.astra-blocks-required-plugins`).
 *
 * @since x.x.x
 */
import { __ } from '@wordpress/i18n';
import { PHP } from './serialize';

/**
 * Spectra plugin definition for v2 patterns (legacy UAG blocks).
 */
export const SPECTRA_V2 = {
	slug: 'ultimate-addons-for-gutenberg',
	init: 'ultimate-addons-for-gutenberg/ultimate-addons-for-gutenberg.php',
	name: __( 'Spectra', 'ast-block-templates' ),
	author: __( 'Brainstorm Force', 'ast-block-templates' ),
	wporg: 'https://wordpress.org/plugins/ultimate-addons-for-gutenberg/',
	description: __(
		'Spectra is required to render the blocks used in this pattern. Clicking the button installs it from WordPress.org and activates it on your site.',
		'ast-block-templates'
	),
};

/**
 * Spectra Blocks plugin definition for v3 patterns.
 */
export const SPECTRA_V3 = {
	slug: 'spectra-blocks',
	init: 'spectra-blocks/spectra-blocks.php',
	name: __( 'Spectra Blocks', 'ast-block-templates' ),
	author: __( 'Brainstorm Force', 'ast-block-templates' ),
	wporg: 'https://wordpress.org/plugins/spectra-blocks/',
	description: __(
		'Spectra Blocks is required to render the blocks used in this pattern. Clicking the button installs it from WordPress.org and activates it on your site.',
		'ast-block-templates'
	),
};

/**
 * Pattern-specific form plugin definitions keyed by slug.
 */
const FORM_PLUGINS = {
	'wpforms-lite': {
		slug: 'wpforms-lite',
		init: 'wpforms-lite/wpforms.php',
		name: __( 'WPForms Lite', 'ast-block-templates' ),
		author: __( 'WPForms', 'ast-block-templates' ),
		statusVar: 'wpforms_status',
		wporg: 'https://wordpress.org/plugins/wpforms-lite/',
		description: __(
			'WPForms is required to render the form used in this pattern. Clicking the button installs it from WordPress.org and activates it on your site.',
			'ast-block-templates'
		),
	},
	sureforms: {
		slug: 'sureforms',
		init: 'sureforms/sureforms.php',
		name: __( 'SureForms', 'ast-block-templates' ),
		author: __( 'Brainstorm Force', 'ast-block-templates' ),
		statusVar: 'sureforms_status',
		wporg: 'https://wordpress.org/plugins/sureforms/',
		description: __(
			'SureForms is required to render the form used in this pattern. Clicking the button installs it from WordPress.org and activates it on your site.',
			'ast-block-templates'
		),
	},
};

/**
 * Resolve a pattern's Spectra version, treating empty/missing as v2 (legacy).
 *
 * @param {Object} item Pattern listing item (or a minimal object with `spectra-ver`).
 * @return {string} 'v2' | 'v3'
 */
export const getPatternVersion = ( item ) => {
	let version = item?.[ 'spectra-ver' ];
	if (
		! version ||
		( Array.isArray( version ) && version.length === 0 ) ||
		version === ''
	) {
		version = 'v2';
	}
	return version;
};

/**
 * Read a localized plugin status, defaulting to 'not-installed'.
 *
 * @param {string} statusVar Key in `ast_block_template_vars`.
 * @return {string} 'active' | 'inactive' | 'not-installed'
 */
const getStatus = ( statusVar ) => {
	const vars = window.ast_block_template_vars || {};
	return vars[ statusVar ] || 'not-installed';
};

/**
 * Spectra logo URL from the localized assets, used in the install popup rows.
 *
 * @return {string} Logo URL, or an empty string when unavailable.
 */
const getSpectraLogo = () => {
	const vars = window.ast_block_template_vars || {};
	if ( vars.popup_logo_uri ) {
		return vars.popup_logo_uri;
	}
	return vars.uri ? `${ vars.uri }dist/spectra-logo.svg` : '';
};

/**
 * Determine the Spectra plugin a pattern needs, or null when already satisfied.
 *
 * v2 patterns are satisfied by Spectra (UAG) or Spectra Pro.
 * v3 patterns are satisfied by Spectra Blocks, Spectra Blocks Pro, or
 * UAG >= 3.0.0-beta.1 (where the effective `spectra_version` is already v3).
 *
 * @param {Object} item Pattern item (needs `spectra-ver`).
 * @return {Object|null} Spectra plugin definition or null.
 */
export const getRequiredSpectraPlugin = ( item ) => {
	const vars = window.ast_block_template_vars || {};
	const version = getPatternVersion( item );

	if ( version === 'v3' ) {
		const satisfied =
			vars.spectra_blocks_status === 'active' ||
			vars.spectra_blocks_pro_status === 'active' ||
			( vars.spectra_version === 'v3' &&
				vars.spectra_status === 'active' );
		return satisfied
			? null
			: {
					...SPECTRA_V3,
					status: getStatus( 'spectra_blocks_status' ),
					logo: getSpectraLogo(),
			  };
	}

	const satisfied =
		vars.spectra_status === 'active' ||
		vars.spectra_pro_status === 'active';
	return satisfied
		? null
		: {
				...SPECTRA_V2,
				status: getStatus( 'spectra_status' ),
				logo: getSpectraLogo(),
		  };
};

/**
 * Whether the active site plugins can already render the given pattern's blocks.
 *
 * @param {Object} item Pattern item (needs `spectra-ver`).
 * @return {boolean} True when no Spectra plugin needs to be installed.
 */
export const isSpectraSatisfied = ( item ) =>
	getRequiredSpectraPlugin( item ) === null;

/**
 * Collect the pattern-specific form plugins that are not active yet.
 *
 * @param {Object} detail Per-pattern detail response (`block_api_request`).
 * @return {Array} Array of plugin definitions with a `status` field.
 */
export const getRequiredFormPlugins = ( detail ) => {
	const raw = detail?.[ 'post-meta' ]?.[ 'astra-blocks-required-plugins' ];
	const required = raw ? PHP.parse( raw ) : [];

	if ( ! Array.isArray( required ) || ! required.length ) {
		return [];
	}

	return required.reduce( ( acc, plugin ) => {
		const def = FORM_PLUGINS[ plugin?.slug ];
		if ( def ) {
			const status = getStatus( def.statusVar );
			if ( status !== 'active' ) {
				acc.push( { ...def, status } );
			}
		}
		return acc;
	}, [] );
};

/**
 * Collect every plugin (Spectra + forms) that must be installed/activated
 * before the pattern can be inserted.
 *
 * @param {Object} item   Pattern item (needs `spectra-ver`).
 * @param {Object} detail Per-pattern detail response (optional, for forms).
 * @return {Array} De-duplicated list of plugin definitions with `status`.
 */
export const collectRequiredPlugins = ( item, detail = null ) => {
	const plugins = [];

	const spectra = getRequiredSpectraPlugin( item );
	if ( spectra ) {
		plugins.push( spectra );
	}

	if ( detail ) {
		getRequiredFormPlugins( detail ).forEach( ( plugin ) => {
			if ( ! plugins.some( ( p ) => p.slug === plugin.slug ) ) {
				plugins.push( plugin );
			}
		} );
	}

	return plugins;
};
