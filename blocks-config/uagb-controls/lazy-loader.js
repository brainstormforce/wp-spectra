import React from "react";
import { __ } from '@wordpress/i18n';

const lazyLoader = () => <p> { __( 'Loading..', 'ultimate-addons-for-gutenberg' ) } </p>;
export default lazyLoader;
