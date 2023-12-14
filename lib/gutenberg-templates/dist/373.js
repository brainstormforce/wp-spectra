'use strict'; ( self.webpackChunkast_block_templates = self.webpackChunkast_block_templates || [] ).push( [ [ 373 ], { 7( e, t, a ) {
	a.r( t ), a.d( t, { default() {
		return W;
	} } ); const s = a( 48 ),
		o = a( 868 ),
		r = a( 142 ),
		n = a( 148 ),
		l = a( 128 ),
		c = a( 569 ),
		i = a( 622 ),
		p = a( 363 ),
		m = p.forwardRef( ( function( { title: e, titleId: t, ...a }, s ) {
			return p.createElement( 'svg', Object.assign( { xmlns: 'http://www.w3.org/2000/svg', fill: 'none', viewBox: '0 0 24 24', strokeWidth: 1.5, stroke: 'currentColor', 'aria-hidden': 'true', ref: s, 'aria-labelledby': t }, a ), e ? p.createElement( 'title', { id: t }, e ) : null, p.createElement( 'path', { strokeLinecap: 'round', strokeLinejoin: 'round', d: 'M12 4.5v15m7.5-7.5h-15' } ) );
		} ) ); const { compose: u } = wp.compose,
		{ useSelect: d, withSelect: g, withDispatch: f } = wp.data,
		{ post: h } = wp.ajax,
		{ parse: b } = wp.blocks,
		{ useState: v, memo: w } = wp.element; const y = u( g( ( ( e ) => {
			const { getImportItemInfo: t, getCurrentScreen: a, getSitePreview: s, getActivePaletteSlug: o } = e( 'ast-block-templates' ); return { importItemInfo: t(), sitePreview: s(), currentScreen: a(), activePaletteSlug: o() };
		} ) ), f( ( ( e ) => {
			const { setImportItemInfo: t, setFullWidthBlockPreview: a, setCurrentScreen: s, setTogglePopup: o, setFullWidthPreview: r } = e( 'ast-block-templates' ),
				{ insertBlocks: n } = e( 'core/block-editor' ); return { setImportItemInfo: t, onSetTogglePopup: o, insertBlocks: n };
		} ) ) )( w( ( ( e ) => {
			let{ setImportItemInfo: t, liveRequest: a, requiredPlugins: s, importItemInfo: p, title: u, btnClass: g, currentScreen: f, insertBlocks: w, onSetTogglePopup: y, item: _, onClick: k, onBlockImport: I, activePaletteSlug: E } = e,
				[ x, R ] = v( p ),
				S = s || []; const [ P, j ] = v( u || 'Import' ),
				[ C, N ] = v( ! 1 ),
				{ insertIndex: $ } = d( ( ( e ) => {
					const { index: t } = e( 'core/block-editor' ).getBlockInsertionPoint(); return { insertIndex: t };
				} ), [] ),
				B = () => {
					( 0, n.j )( { slug: 'ultimate-addons-for-gutenberg', init: 'ultimate-addons-for-gutenberg/ultimate-addons-for-gutenberg.php', name: 'Spectra' } ).then( ( ( e ) => {} ) ).catch( ( ( e ) => {
						N( ! 1 ), j( 'Activation failed!' );
					} ) );
				},
				L = () => {
					( 0, n.j )( { slug: 'wpforms-lite', init: 'wpforms-lite/wpforms.php', name: 'WPForms Lite' } ).then( ( ( e ) => {
						F();
					} ) ).catch( ( ( e ) => {
						N( ! 1 ), j( 'Activation failed!' );
					} ) );
				},
				O = () => {
					const e = x.original_content,
						t = x[ 'blocks-category' ][ 0 ]; h( { action: 'ast_block_templates_import_block', content: e, category: t, _ajax_nonce: ast_block_template_vars._ajax_nonce, style: E } ).done( ( ( e ) => {
						N( ! 1 ), w( b( e ), $, '', ! 1 ), y(), document.getElementById( 'ast-block-templates-modal-wrap' ).classList.remove( 'open' ), document.body.classList.remove( 'ast-block-templates-modal-open' ), 'function' === typeof I && I( e, $ ), 'active' !== ast_block_template_vars.spectra_status && ( 0, i.iP )();
					} ) ).fail( ( ( e ) => {} ) );
				},
				F = () => {
					x?.[ 'post-meta' ]?.[ 'astra-site-wpforms-path' ] || '' ? h( { action: 'ast_block_templates_import_wpforms', id: x.id, _ajax_nonce: ast_block_template_vars._ajax_nonce } ).done( ( ( e ) => {
						O();
					} ) ).fail( ( ( e ) => {
						N( ! 1 ), j( 'WPForms import failed!' );
					} ) ) : O();
				}; return React.createElement( o.Z, { className: 'min-w-[7rem] hover:shadow-small', type: 'button', variant: 'primary', onClick: ( e ) => {
				'function' === typeof k && k( e ), N( ! 0 ), 'not-installed' === ast_block_template_vars.spectra_status ? ( 0, n.H )( { slug: 'ultimate-addons-for-gutenberg', init: 'ultimate-addons-for-gutenberg/ultimate-addons-for-gutenberg.php', name: 'Spectra' } ).then( ( ( e ) => {
					B();
				} ) ).catch( ( ( e ) => {
					N( ! 1 ), j( 'Installation failed!' );
				} ) ) : 'inactive' === ast_block_template_vars.spectra_status && B(), ( 0, c.I )( _.ID, 'astra-blocks' ).then( ( ( e ) => {
					t( e ), x = e, S = e?.[ 'post-meta' ]?.[ 'astra-blocks-required-plugins' ] ? l.t.parse( e[ 'post-meta' ][ 'astra-blocks-required-plugins' ] ) : [], S.length ? 'not-installed' === ast_block_template_vars.wpforms_status ? ( 0, n.H )( { slug: 'wpforms-lite', init: 'wpforms-lite/wpforms.php', name: 'WPForms Lite' } ).then( ( ( e ) => {
						L();
					} ) ).catch( ( ( e ) => {
						N( ! 1 ), j( 'Installation failed!' );
					} ) ) : 'inactive' === ast_block_template_vars.wpforms_status ? L() : F() : F();
				} ) ).catch( ( ( e ) => {} ) );
			}, isSmall: ! 0, hasPrefixIcon: ! C }, C ? React.createElement( r.Z, null ) : React.createElement( React.Fragment, null, React.createElement( m, { className: 'h-6 w-6' } ), P ) );
		} ) ) ),
		_ = p.forwardRef( ( function( { title: e, titleId: t, ...a }, s ) {
			return p.createElement( 'svg', Object.assign( { xmlns: 'http://www.w3.org/2000/svg', fill: 'none', viewBox: '0 0 24 24', strokeWidth: 1.5, stroke: 'currentColor', 'aria-hidden': 'true', ref: s, 'aria-labelledby': t }, a ), e ? p.createElement( 'title', { id: t }, e ) : null, p.createElement( 'path', { strokeLinecap: 'round', strokeLinejoin: 'round', d: 'M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z' } ) );
		} ) ),
		k = a( 10 ),
		I = a( 486 ); function E() {
		return E = Object.assign ? Object.assign.bind() : function( e ) {
			for ( let t = 1; t < arguments.length; t++ ) {
				const a = arguments[ t ]; for ( const s in a ) {
					Object.prototype.hasOwnProperty.call( a, s ) && ( e[ s ] = a[ s ] );
				}
			} return e;
		}, E.apply( this, arguments );
	} const { useEffect: x, useState: R } = wp.element,
		{ site_url: S } = ast_block_template_vars,
		{ compose: P } = wp.compose,
		{ withDispatch: j, useSelect: C } = wp.data; const N = P( j( ( ( e ) => {
		const { setFavorites: t } = e( 'ast-block-templates' ); return { setFavorites: t };
	} ) ) )( ( ( e ) => {
		const { item: t, className: a, setFavorites: o, ...r } = e; const [ n, l ] = R( ! 1 ),
			{ favorites: c } = C( ( ( e ) => {
				const { getFavorites: t } = e( 'ast-block-templates' ); return { favorites: t() };
			} ) ),
			i = n ? { color: 'red', fill: 'red' } : {}; return x( ( () => {
			const e = Object.values( c[ t.type ] ); c && e && e.includes( ( 0, I.parseInt )( t.ID ) ) && l( ! 0 );
		} ), [ n ] ), React.createElement( 'button', E( { className: ( 0, s.AK )( 'flex items-center justify-center rounded-full p-2 bg-white cursor-pointer text-icon-secondary border-0 focus:outline-none hover:shadow-small', a ), onClick: async ( e ) => {
			e?.preventDefault(), e?.stopPropagation(); try {
				await ( 0, k.Z )( { path: `${ S }/wp-json/gutenberg-templates/v1/favorite`, data: { type: t.type, block_id: t.ID, status: ! n }, method: 'POST', headers: { 'X-WP-Nonce': ast_block_template_vars.rest_api_nonce, 'content-type': 'application/json' } } );
			} catch ( e ) {
				console.error( e );
			}let a = {}; const s = t.type; if ( n ) {
				const e = Object.keys( c[ s ] ).find( ( ( e ) => c[ s ][ e ] === ( 0, I.parseInt )( t.ID ) ) ); e && delete c[ s ][ e ], a = { ...c, type: c[ s ] };
			} else {
				const e = Math.max( ...Object.keys( c[ s ] ).map( Number ) ) + 1; c[ s ][ e ] = ( 0, I.parseInt )( t.ID ); const o = c[ s ]; a = { ...c, type: o };
			}o( a ), l( ! n );
		} }, r ), React.createElement( _, { className: 'w-6 h-6', style: i } ) );
	} ) ); const $ = ( e ) => {
			const t = [ 'skip', 'logo', 'fav-icon' ]; for ( const a of t ) {
				if ( e.includes( a ) ) {
					return ! 0;
				}
			} return ! 1;
		},
		{ useEffect: B, useState: L, createRef: O } = wp.element,
		{ spectra_common_styles: F } = ast_block_template_vars; var W = ( e ) => {
		let{ item: t, InitMasonry: a, content: o, stylesheet: r, astraCustomizer: n, globalStylesheet: l, colorPalette: c, onMount: i, dynamicContent: p, selectedImages: m } = e; const u = O(),
			d = O(),
			g = t[ 'thumbnail-image-url' ] || '',
			f = t[ 'featured-image-url' ] || ''; let h = 0,
			b = 0; const [ v, w ] = L( { importing: ! 1 } ),
			[ _, k ] = L( `${ ast_block_template_vars.uri }dist/placeholder_200_200.png` ),
			[ I, E ] = L( `${ ast_block_template_vars.uri }dist/placeholder_200_200.png` ); function x() {
			const e = u?.current?.parentNode?.offsetWidth,
				t = e / 1200,
				a = t * d?.current?.offsetHeight,
				s = u?.current; s && ( s.style.transform = `scale(${ t })`, s.style.height = `${ a }px` );
		} return B( ( () => {
			let e = ! 0; const s = { landscape: [], portrait: [] }; m?.forEach( ( ( e ) => {
				'landscape' === e.orientation ? s.landscape.push( e ) : s.portrait.push( e );
			} ) ); const u = s,
				v = new Image; v.src = g; const w = new Image; w.src = f; const y = d.current; function _( t, a ) {
				e && ( t.onload = () => {
					a( t.src );
				} );
			}_( v, k ), _( w, E ); const I = document.getElementById( 'astra-wp-editor-styles-inline-css' )?.textContent.replace( /:root/g, '.block-container' ).replace( /body/g, '.block-container' ),
				R = document.getElementById( 'astra-block-editor-styles-inline-css' )?.textContent.replace( /:root/g, '.block-container' ).replace( /body/g, '.block-container' ); let S = ''; let P, j; if ( r && ( P = r, j = u?.landscape, r = j && 0 === j.length ? P : P.replace( /background-image\s*:\s*url\(['"]?([^'")]+)['"]?\)/g, ( function( e, t ) {
				if ( $( t ) ) {
					return e;
				} if ( ! j[ h ]?.url ) {
					return '';
				} const a = j[ h ]?.url; return h++, 'background-image: url("' + a + '")';
			} ) ) ), S += n ? `<style type="text/css" id="gt-astra-customizer">${ n }</style>` : '', S += `<style type="text/css" id="gt-spectra-common-stylesheet">${ F }</style>`, S = r ? `${ S } <style type="text/css" id="gt-common-stylesheet">${ r }</style>` : S, l && ( S += `<style type="text/css" id="gt-global-stylesheet"> ${ l } </style>` ), I && ( S += `<style type="text/css" id="gt-wpeditor-css" > ${ I } </style>` ), R && ( S += `<style type="text/css" id="gt-blockeditor-css"> ${ R } </style>` ), y && o ) {
				const e = y.attachShadow( { mode: 'open' } ); if ( null === e ) {
					return;
				} let a = o; const s = p ? p[ t.category ] : []; s && Object.keys( s )?.length > 0 && Object.keys( s ).forEach( ( ( e ) => {
					a = null !== s[ e ] ? a.replace( e, s[ e ] ) : a;
				} ) ), e.innerHTML = S + a, c.forEach( ( ( t, a ) => {
					e?.host.style.setProperty( `--ast-global-color-${ a }`, t );
				} ) ); const r = y.shadowRoot.querySelectorAll( 'div' )[ 0 ]; r?.classList.add( 'st-block-container' ); const n = y.shadowRoot.querySelectorAll( 'img' ); e && ( x(), ( ( e, t ) => {
					const a = t.landscape ? t.landscape : [],
						s = t.portrait ? t.portrait : []; 0 !== a.length && 0 !== s.length && e?.forEach( ( function( e ) {
						$( e.src ) || ( e.onload = () => {
							const t = ( ( e ) => {
								const t = new Image; return t.src = e, t.width > t.height ? 'landscape' : 'portrait';
							} )( e.src ); let o; if ( o = 'landscape' === t ? a[ h ] : s[ b ], void 0 === o ) {
								return;
							} if ( ! ( o.url.includes( 'unsplash' ) || o.url.includes( 'pexels' ) || o.url.includes( 'pixabay' ) ) ) {
								return;
							} 'landscape' === t ? h++ : b++; const r = document.createElement( 'img' ); r.src = o.optimized_url, e.parentNode.replaceChild( r, e );
						} );
					} ) );
				} )( n, u ) );
			} return e && ( i(), a() ), () => {
				e = ! 1;
			};
		} ), [] ), B( ( () => ( window.addEventListener( 'resize', x ), () => {
			window.removeEventListener( 'resize', x );
		} ) ), [] ), B( ( () => {
			const e = d?.current; if ( e ) {
				const t = e.shadowRoot; c.forEach( ( ( e, a ) => {
					null !== t && t.host.style.setProperty( `--ast-global-color-${ a }`, e );
				} ) );
			}
		} ), [ c ] ), React.createElement( 'div', { className: ( 0, s.AK )( 'w-full md:w-1/3 p-4 group', ! 0 === v.importing ? 'importing' : '' ) }, React.createElement( 'div', { className: 'relative border border-solid border-border-primary group-hover:border-accent-spectra transition duration-150 ease-in-out overflow-hidden' }, React.createElement( 'div', { className: 'thumbnail left-0 m-0 min-h-[auto] overflow-visible text-left top-0 origin-top-left relative pointer-events-none', ref: u }, React.createElement( 'div', { className: 'absolute w-[1200px] pointer-events-none max-h-[1600px] overflow-hidden', ref: d }, ! o && React.createElement( 'img', { srcSet: `${ I }, ${ _ }`, src: _ } ), React.createElement( 'div', { className: 'preview' }, React.createElement( 'span', { className: 'ast-block-templates-icon ast-block-templates-icon-search' } ) ) ) ), React.createElement( 'div', { className: 'absolute inset-0 grid grid-cols-1 grid-rows-1 place-items-end' }, React.createElement( 'div', { className: 'opacity-0 group-hover:opacity-100 w-full flex items-center justify-between p-4 backdrop-blur-sm bg-white/[0.85] shadow-action-buttons transition-all duration-150 ease-in-out' }, React.createElement( y, { title: 'Insert', liveRequest: ! 0, item: t, onClick: () => {
			w( { ...v, importing: ! 0 } );
		}, onBlockImport: () => {
			w( { ...v, importing: ! 1 } );
		} } ), React.createElement( N, { item: t } ) ) ) ) );
	};
} } ] );
