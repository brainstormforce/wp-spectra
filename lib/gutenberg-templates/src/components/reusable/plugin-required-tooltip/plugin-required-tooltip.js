import { __ } from '@wordpress/i18n';
import Tooltip from '../tooltip/tooltip';
import { getRequiredSpectraPlugin } from '../../../utils/plugin-requirements';

/**
 * Rich tooltip shown on the Insert button when the Spectra plugin required to
 * render a pattern's blocks is not installed / active on the site.
 *
 * Spectra requirement is derived client-side (no API call). Renders nothing
 * extra when the requirement is already satisfied or while the pattern is
 * locked behind a license (the locked "Get Access" tooltip takes priority).
 *
 * @since x.x.x
 * @param {Object}      props
 * @param {Object}      props.item     Pattern listing item (needs `spectra-ver`).
 * @param {boolean}     props.disabled Skip the tooltip (e.g. locked patterns).
 * @param {JSX.Element} props.children Insert button to wrap.
 * @return {JSX.Element} Wrapped children.
 */
const PluginRequiredTooltip = ( { item, disabled = false, children } ) => {
	const plugin = ! disabled ? getRequiredSpectraPlugin( item ) : null;

	if ( ! plugin ) {
		return children;
	}

	const content = (
		<div className="text-left p-3 space-y-3 gt-plugin-required-tooltip">
			<div className="space-y-2">
				<h3 className="m-0 text-base font-semibold text-white">
					{ plugin.name }
				</h3>
				<p className="m-0 text-sm leading-relaxed text-white/90">
					{ plugin.description }
				</p>
			</div>
			<div className="space-y-1.5 text-sm">
				<div className="flex gap-1.5">
					<span className="shrink-0 text-white/60">
						{ __( 'Author', 'ast-block-templates' ) } :
					</span>
					<span className="font-medium text-white">
						{ plugin.author }
					</span>
				</div>
				<div className="flex gap-1.5">
					<span className="shrink-0 text-white/60">
						{ __( 'Source', 'ast-block-templates' ) } :
					</span>
					<a
						href={ plugin.wporg }
						target="_blank"
						rel="noreferrer"
						className="font-medium text-accent-spectra underline"
					>
						{ __( 'View on WordPress.org', 'ast-block-templates' ) }
					</a>
				</div>
			</div>
		</div>
	);

	return (
		<Tooltip
			content={ content }
			placement="top-start"
			maxWidth={ 340 }
			appendTo={ () =>
				document.getElementById( 'ast-block-templates-modal-root' ) ||
				document.body
			}
		>
			{ children }
		</Tooltip>
	);
};

export default PluginRequiredTooltip;
