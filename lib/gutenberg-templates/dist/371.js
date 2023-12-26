'use strict'; ( self.webpackChunkast_block_templates = self.webpackChunkast_block_templates || [] ).push( [ [ 371 ], { 602( e, t, s ) {
	s.r( t ), s.d( t, { default() {
		return i;
	} } ); const c = s( 1392 ); const n = ( e ) => {
			const t = [ 'quote', 'testimonial', 'client-logo', 'team', 'skip', 'logo', 'fav-icon' ]; for ( const s of t ) {
				if ( e.includes( s ) ) {
					return ! 0;
				}
			} return ! 1;
		},
		{ useEffect: o, useState: a, createRef: l } = wp.element,
		{ spectra_common_styles: r } = ast_block_template_vars; var i = ( e ) => {
		let{ item: t, InitMasonry: s, content: i, stylesheet: m, astraCustomizer: p, globalStylesheet: u, colorPalette: d, onMount: g } = e; const y = l(),
			h = l(),
			b = t[ 'thumbnail-image-url' ] || '',
			f = t[ 'featured-image-url' ] || ''; let k = 0,
			_ = 0; const [ v, E ] = a( { importing: ! 1 } ),
			[ w, R ] = a( `${ ast_block_template_vars.uri }dist/placeholder_200_200.png` ),
			[ $, x ] = a( `${ ast_block_template_vars.uri }dist/placeholder_200_200.png` ); function N() {
			const e = ( y?.current?.parentNode?.offsetWidth - 10 ) / 1200,
				t = e * h?.current?.offsetHeight,
				s = y?.current; s && ( s.style.transform = `scale(${ e })`, s.style.height = `${ t }px` );
		} return o( ( () => {
			let e = ! 0; const c = { landscape: [], portrait: [] },
				o = new Image; o.src = b; const a = new Image; a.src = f; const l = h.current; function y( t, s ) {
				e && ( t.onload = () => {
					s( t.src );
				} );
			}y( o, R ), y( a, x ); const v = document.getElementById( 'astra-wp-editor-styles-inline-css' )?.textContent.replace( /:root/g, '.block-container' ).replace( /body/g, '.block-container' ),
				E = document.getElementById( 'astra-block-editor-styles-inline-css' )?.textContent.replace( /:root/g, '.block-container' ).replace( /body/g, '.block-container' ); let w = ''; let $, C; m && ( $ = m, m = 0 === ( C = c.landscape ).length ? $ : $.replace( /background-image\s*:\s*url\(['"]?([^'")]+)['"]?\)/g, ( function( e, t ) {
				if ( n( t ) ) {
					return e;
				} const s = C[ k ].url; return k++, 'background-image: url("' + s + '")';
			} ) ) ), w += p ? `<style type="text/css" id="gt-astra-customizer">${ p }</style>` : '', w += `<style type="text/css" id="gt-spectra-common-stylesheet">${ r }</style>`, w = m ? `${ w } <style type="text/css" id="gt-common-stylesheet">${ m }</style>` : w, u && ( w += `<style type="text/css" id="gt-global-stylesheet"> ${ u } </style>` ), v && ( w += `<style type="text/css" id="gt-wpeditor-css" > ${ v } </style>` ), E && ( w += `<style type="text/css" id="gt-blockeditor-css"> ${ E } </style>` ); const I = ast_block_template_vars.dynamic_content[ t.category ]; if ( console.log( Object.keys( I ) ), I && Object.keys( I )?.length > 0 && Object.keys( I ).forEach( ( ( e ) => {
				console.log( e ), console.log( I[ e ] ), w = w.replace( e, I[ e ] );
			} ) ), l && i ) {
				const e = l.attachShadow( { mode: 'open' } ); if ( null === e ) {
					return;
				} e.innerHTML = w + i, d.forEach( ( ( t, s ) => {
					e.host.style.setProperty( `--ast-global-color-${ s }`, t );
				} ) ); const t = l.shadowRoot.querySelectorAll( 'div' )[ 0 ]; t?.classList.add( 'st-block-container' ); const s = l.shadowRoot.querySelectorAll( 'img' ); e && ( N(), ( ( e, t ) => {
					const s = t.landscape ? t.landscape : [],
						c = t.portrait ? t.portrait : []; 0 !== s.length && 0 !== c.length && e.forEach( ( function( e ) {
						if ( n( e.src ) ) {
							return;
						} const t = ( ( e ) => {
							const t = new Image; return t.src = e, t.width > t.height ? 'landscape' : 'portrait';
						} )( e.src ); let o; if ( 'landscape' === t ? ( o = s[ k ], k++ ) : ( o = c[ _ ], _++ ), void 0 === o ) {
							return;
						} if ( ! ( o.url.includes( 'unsplash' ) || o.url.includes( 'pexels' ) || o.url.includes( 'pixabay' ) ) ) {
							return;
						} const a = document.createElement( 'img' ); a.src = o.optimized_url, e.parentNode.replaceChild( a, e );
					} ) );
				} )( s, c ) );
			} return e && ( g(), s() ), () => {
				e = ! 1;
			};
		} ), [] ), o( ( () => ( window.addEventListener( 'resize', N ), () => {
			window.removeEventListener( 'resize', N );
		} ) ), [] ), o( ( () => {
			const e = h?.current; if ( e ) {
				const t = e.shadowRoot; d.forEach( ( ( e, s ) => {
					t.host.style.setProperty( `--ast-global-color-${ s }`, e );
				} ) );
			}
		} ), [ d ] ), React.createElement( 'div', { className: 'item single-block ' + ( ! 0 === v.importing ? 'importing' : '' ) }, React.createElement( 'div', { className: 'inner' }, React.createElement( 'div', { className: 'thumbnail', ref: y }, React.createElement( 'div', { className: 'thumbnail-container', ref: h }, ! i && React.createElement( 'img', { srcSet: `${ $ }, ${ w }`, src: w } ), React.createElement( 'div', { className: 'preview' }, React.createElement( 'span', { className: 'ast-block-templates-icon ast-block-templates-icon-search' } ) ) ) ), React.createElement( 'div', { className: 'heading-wrap' }, React.createElement( 'div', { className: 'button-actions' }, React.createElement( c.Z, { btnClass: 'button button-primary gt-btn-import', title: 'Import', liveRequest: ! 0, item: t, onClick: () => {
			E( { ...v, importing: ! 0 } );
		}, onBlockImport: () => {
			E( { ...v, importing: ! 1 } );
		} } ) ) ) ) );
	};
} } ] );
