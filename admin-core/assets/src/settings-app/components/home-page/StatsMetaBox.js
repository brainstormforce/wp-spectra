import React, { useEffect, useState } from 'react';

import apiFetch from '@wordpress/api-fetch';

import { TextSkeleton, RectSkeleton } from '@Skeleton';

import { useStateValue } from '@Utils/StateProvider';
import { XmlEntities, AllHtmlEntities } from '@Utils/Helpers';

import './StatsMetaBox.scss';
import { __ } from '@wordpress/i18n';

function StatsMetaBox( props ) {
	const [ { analyticsData }, dispatch ] = useStateValue();

	const [ total_flow_revenue, setFlowRevenue ] = useState();
	const [ total_ord_bump_revenue, setOrdBumpRevenue ] = useState();
	const [ total_offer_revenue, setOfferRevenue ] = useState();
	const [ total_orders, setTotalOrders ] = useState();
	const [ total_visits, setTotalVisits ] = useState();
	const [ activeTab, setActiveTab ] = useState( 'today' );

	const woo_currency = uag_react.woo_currency;

	let statsmenus = [
		{
			name: __( 'Today', 'ultimate-addons-for-gutenberg' ),
			value: 1,
			type: 'button',
			tab_slug: 'today',
		},
		{
			name: __( 'Yesterday', 'ultimate-addons-for-gutenberg' ),
			value: -1,
			type: 'button',
			tab_slug: 'yesterday',
		},
		{
			name: __( 'Last Week', 'ultimate-addons-for-gutenberg' ),
			value: 7,
			type: 'button',
			tab_slug: 'last_week',
		},
		{
			name: __( 'Last Month', 'ultimate-addons-for-gutenberg' ),
			value: 30,
			type: 'button',
			tab_slug: 'last_month',
		},
	];

	const setEmptyData = function () {
		setFlowRevenue();
		setOrdBumpRevenue();
		setOfferRevenue();
		setTotalOrders();
		setTotalVisits();
	};

	const setAnalyticsData = function ( flow_stats ) {
		// setWooCurrency(
		// 	AllHtmlEntities.decode( flow_stats[ 'order_currency' ] )
		// );
		setFlowRevenue( flow_stats[ 'total_revenue' ] );
		setOrdBumpRevenue( flow_stats[ 'total_bump_revenue' ] );
		setOfferRevenue( flow_stats[ 'total_offers_revenue' ] );
		setTotalOrders( flow_stats[ 'total_orders' ] );
		setTotalVisits( flow_stats[ 'total_visits' ] );
	};

	const filterStatsOnClick = ( event ) => {
		setEmptyData();

		var diff = event.target.value,
			clicked_tab = event.target.id;

		let formData = new window.FormData();

		var date_to = new Date();
		var date_from = new Date();
		var report_date = diff;

		report_date = typeof report_date === 'undefined' ? 7 : report_date;

		switch ( report_date ) {
			case '7':
				date_from.setDate( date_from.getDate() - 7 );
				setActiveTab( clicked_tab );
				break;
			case '30':
				date_from.setDate( date_from.getDate() - 30 );
				setActiveTab( clicked_tab );
				break;
			case '1':
				date_from.setDate( date_from.getDate() );
				setActiveTab( clicked_tab );
				break;
			case '-1':
				date_to = new Date();
				date_from.setDate( date_from.getDate() - 1 );
				setActiveTab( clicked_tab );
				break;
		}

		date_from = date_from.toISOString().slice( 0, 10 );
		date_to = date_to.toISOString().slice( 0, 10 );

		formData.append( 'date_to', date_to );
		formData.append( 'date_from', date_from );
		formData.append( 'action', 'uag_get_all_flows_stats' );

		const getallflowanalytics = async () => {
			apiFetch( {
				url: uag_react.ajax_url,
				method: 'POST',
				body: formData,
			} ).then( ( response ) => {
				setAnalyticsData( response?.data.flow_stats );
			} );
		};

		getallflowanalytics();
	};

	useEffect( () => {
		let isActive = true;

		setActiveTab( 'today' );

		if ( ! analyticsData ) {
			var ajaxData = new window.FormData();

			var date_to = new Date();
			var date_from = new Date();

			date_from = date_from.toISOString().slice( 0, 10 );
			date_to = date_to.toISOString().slice( 0, 10 );

			ajaxData.append( 'date_to', date_to );
			ajaxData.append( 'date_from', date_from );
			ajaxData.append( 'action', 'uag_get_all_flows_stats' );

			const getallflowanalytics = async () => {
				apiFetch( {
					url: uag_react.ajax_url,
					method: 'POST',
					body: ajaxData,
				} ).then( ( response ) => {
					if ( isActive ) {
						dispatch( {
							type: 'SET_ANALYTICS_DATA',
							analyticsData: response.data.flow_stats,
						} );

						setAnalyticsData( response?.data.flow_stats );
					}
				} );
			};

			getallflowanalytics();
		} else {
			setAnalyticsData( analyticsData );
		}

		return () => {
			isActive = false;
		};
	}, [] );

	return (
		<div class="wcf-metabox wcf-stats">
			<div class="wcf-metabox__header">
				<h2> { __( 'Stats Overview', 'ultimate-addons-for-gutenberg' ) }</h2>
				<div class="wcf-stats--action-buttons">
					{ statsmenus.map( ( statsmenu, i ) => (
						<button
							type={ statsmenu.type }
							value={ statsmenu.value }
							onClick={ filterStatsOnClick }
							title={ statsmenu.name }
							id={ statsmenu.tab_slug }
							className={ `button wcf-button--action-button wcf-stats--action-buttons ${
								activeTab === statsmenu.tab_slug
									? ' is_active'
									: ''
							}` }
						>
							{ statsmenu.name }
						</button>
					) ) }
				</div>
			</div>
			<div class="wcf-metabox__body">
				<form className="wcf-stats__form">
					<div class="wcf-stats--row wcf-col--flex wcf-col--row">
						<div class="wcf-stats-box wcf-col--20">
							<div class="wcf-sb-title">
								<h3>{ __( 'Total Revenue', 'ultimate-addons-for-gutenberg' ) }</h3>
							</div>
							<div class="wcf-sb-content">
								<span className="wcf-stats-number">
									{ total_flow_revenue ? (
										`${ woo_currency } ${ total_flow_revenue }`
									) : (
										<RectSkeleton height="35px" />
									) }
								</span>
								{ /* <small> { __( '0%', 'ultimate-addons-for-gutenberg' ) } </small> */ }
							</div>
						</div>

						<div class="wcf-stats-box wcf-col--20">
							<div class="wcf-sb-title">
								<h3>
									{ __( 'Order Bump Revenue', 'ultimate-addons-for-gutenberg' ) }
								</h3>
							</div>
							<div class="wcf-sb-content">
								{ 'active' === uag_react.cf_pro_status ? 
									<span className="wcf-stats-number">
										{ total_ord_bump_revenue ? (
											`${ woo_currency } ${ total_ord_bump_revenue }`
										) : (
											<RectSkeleton height="35px" />
										) }
									</span>
								:
									<span className="wcf-stats--notice">
										<a href="http://cartflows.com/" className="wcf-upgrade-pro" target="_blank">{ __('Upgrade to Pro', 'ultimate-addons-for-gutenberg') }</a>
									</span>
								}
								{ /* <small> { __( '0%', 'ultimate-addons-for-gutenberg' ) } </small> */ }
							</div>
						</div>

						<div class="wcf-stats-box wcf-col--20">
							<div class="wcf-sb-title">
								<h3>{ __( 'Offers Revenue', 'ultimate-addons-for-gutenberg' ) }</h3>
							</div>
							<div class="wcf-sb-content">
							
								{ 'active' === uag_react.cf_pro_status ? 
									<span className="wcf-stats-number">
										{ total_offer_revenue ? (
											`${ woo_currency } ${ total_offer_revenue }`
										) : (
											<RectSkeleton height="35px" />
										) }
									</span>
								:
									<span className="wcf-stats--notice">
										<a href="http://cartflows.com/" className="wcf-upgrade-pro" target="_blank">{ __('Upgrade to Pro', 'ultimate-addons-for-gutenberg') }</a>
									</span>
								}
								{ /* <small> { __( '0%', 'ultimate-addons-for-gutenberg' ) } </small> */ }
							</div>
						</div>

						<div class="wcf-stats-box wcf-col--20">
							<div class="wcf-sb-title">
								<h3> { __( 'Total Orders', 'ultimate-addons-for-gutenberg' ) } </h3>
							</div>
							<div class="wcf-sb-content">
								<span className="wcf-stats-number">
									{ undefined !== total_orders ? (
										`${ total_orders }`
									) : (
										<RectSkeleton height="35px" />
									) }
								</span>
								{ /* <small> { __( '0%', 'ultimate-addons-for-gutenberg' ) } </small> */ }
							</div>
						</div>
						<div class="wcf-stats-box wcf-col--20">
							<div class="wcf-sb-title">
								<h3> { __( 'Total Visits', 'ultimate-addons-for-gutenberg' ) } </h3>
							</div>
							<div class="wcf-sb-content">
								{ 'active' === uag_react.cf_pro_status ? 
									<span className="wcf-stats-number">
										{ undefined !== total_visits ? (
											`${ total_visits }`
										) : (
											<RectSkeleton height="35px" />
										) }
									</span>
								:
									<span className="wcf-stats--notice">
										<a href="http://cartflows.com/" className="wcf-upgrade-pro" target="_blank">{ __('Upgrade to Pro', 'ultimate-addons-for-gutenberg') }</a>
									</span>
								}
								{ /* <small> { __( '0%', 'ultimate-addons-for-gutenberg' ) } </small> */ }
							</div>
						</div>
					</div>
				</form>
			</div>
		</div>
	);
}

export default StatsMetaBox;
