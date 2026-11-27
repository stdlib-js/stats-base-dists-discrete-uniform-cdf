/** @license Apache-2.0 */

'use strict';

/**
* Discrete uniform distribution cumulative distribution function (CDF).
*
* @module @stdlib/stats-base-dists-discrete-uniform-cdf
*
* @example
* var cdf = require( '@stdlib/stats-base-dists-discrete-uniform-cdf' );
*
* var y = cdf( 3.0, 0, 4 );
* // returns ~0.8
*
* var mycdf = cdf.factory( 0, 10 );
* y = mycdf( 0.5 );
* // returns ~0.091
*
* y = mycdf( 8.0 );
* // returns ~0.818
*/

// MODULES //

var setReadOnly = require( '@stdlib/utils-define-nonenumerable-read-only-property/dist' );
var main = require( './main.js' );
var factory = require( './factory.js' );


// MAIN //

setReadOnly( main, 'factory', factory );


// EXPORTS //

module.exports = main;
