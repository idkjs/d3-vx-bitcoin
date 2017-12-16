webpackHotUpdate(5,{

/***/ 415:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _toConsumableArray2 = __webpack_require__(82);

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _react = __webpack_require__(17);

var _react2 = _interopRequireDefault(_react);

var _responsive = __webpack_require__(392);

var _scale = __webpack_require__(484);

var _shape = __webpack_require__(601);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/Users/prisc_000/code/CACDEV/vx-test/components/chart.js";
// Import d3 methods to render x and y axis


function Chart(_ref) {
  var data = _ref.data,
      parentWidth = _ref.parentWidth,
      parentHeight = _ref.parentHeight;

  /** Define margin for this div to pass to calculation for svg */
  var margin = {
    top: 15,
    bottom: 40,
    left: 0,
    right: 0
  };
  var width = parentWidth - margin.left - margin.right;
  var height = parentHeight - margin.top - margin.bottom;

  /** Define accessor
   * see: https://github.com/d3/d3-array#d3-array
   * define x and what data point we want for each x at that d/data point,
   *  then do same for y
   * for x we want the date on the returned bitcoin value json
   * for y we want the price on that d / data point
   */

  var x = function x(d) {
    return new Date(d.time);
  };
  var y = function y(d) {
    return d.price;
  };

  /** Scale value to map value from a domain to range
   * see: https://github.com/d3/d3-scale
   * range defines starting point for data to show and endpoint
   * domain is what data to spread over that range.
   */

  /** store min max y values to reuse later */

  var minPrice = Math.min.apply(Math, (0, _toConsumableArray3.default)(data.map(y)));
  var maxPrice = Math.max.apply(Math, (0, _toConsumableArray3.default)(data.map(y)));
  var xScale = (0, _scale.scaleTime)({
    range: [0, width],
    domain: [Math.min.apply(Math, (0, _toConsumableArray3.default)(data.map(x))), Math.max.apply(Math, (0, _toConsumableArray3.default)(data.map(x)))]
  });

  var yScale = (0, _scale.scaleLinear)({
    range: [height, 0],
    domain: [minPrice, maxPrice]
  });

  console.log(xScale.domain());
  console.log(yScale.domain());

  //   call <LinePath, pass in the data, xScale, yScale domain mappers,
  //  and x and y accessors
  return _react2.default.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    }
  }, _react2.default.createElement("svg", { width: width, height: height, __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    }
  }, _react2.default.createElement(_shape.LinePath, { data: data, yScale: yScale, xScale: xScale, x: x, y: y, __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    }
  })));
}

exports.default = (0, _responsive.withParentSize)(Chart);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvY2hhcnQuanMiXSwibmFtZXMiOlsid2l0aFBhcmVudFNpemUiLCJzY2FsZVRpbWUiLCJzY2FsZUxpbmVhciIsIkxpbmVQYXRoIiwiQ2hhcnQiLCJkYXRhIiwicGFyZW50V2lkdGgiLCJwYXJlbnRIZWlnaHQiLCJtYXJnaW4iLCJ0b3AiLCJib3R0b20iLCJsZWZ0IiwicmlnaHQiLCJ3aWR0aCIsImhlaWdodCIsIngiLCJEYXRlIiwiZCIsInRpbWUiLCJ5IiwicHJpY2UiLCJtaW5QcmljZSIsIk1hdGgiLCJtaW4iLCJtYXAiLCJtYXhQcmljZSIsIm1heCIsInhTY2FsZSIsInJhbmdlIiwiZG9tYWluIiwieVNjYWxlIiwiY29uc29sZSIsImxvZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFTOztBQUVULEFBQVMsQUFBVzs7QUFDcEIsQUFBUzs7Ozs7QUFGVDs7O0FBSUEsU0FBQSxBQUFTLFlBQTJDO01BQW5DLEFBQW1DLFlBQW5DLEFBQW1DO01BQTdCLEFBQTZCLG1CQUE3QixBQUE2QjtNQUFoQixBQUFnQixvQkFBaEIsQUFBZ0IsQUFDbEQ7O0FBQ0E7TUFBTTtTQUFTLEFBQ1IsQUFDTDtZQUZhLEFBRUwsQUFDUjtVQUhhLEFBR1AsQUFDTjtXQUpGLEFBQWUsQUFJTixBQUVUO0FBTmUsQUFDYjtNQUtJLFFBQVEsY0FBYyxPQUFkLEFBQXFCLE9BQU8sT0FBMUMsQUFBaUQsQUFDakQ7TUFBTSxTQUFTLGVBQWUsT0FBZixBQUFzQixNQUFNLE9BQTNDLEFBQWtELEFBRWxEOztBQVFBOzs7Ozs7OztNQUFNLElBQUksU0FBSixBQUFJLEtBQUE7V0FBSyxJQUFBLEFBQUksS0FBSyxFQUFkLEFBQUssQUFBVztBQUExQixBQUNBO01BQU0sSUFBSSxTQUFKLEFBQUksS0FBQTtXQUFLLEVBQUwsQUFBTztBQUFqQixBQUVBOztBQU1BOzs7Ozs7QUFFQTs7TUFBTSxXQUFXLEtBQUEsQUFBSyxpREFBTyxLQUFBLEFBQUssSUFBbEMsQUFBaUIsQUFBWSxBQUFTLEFBQ3RDO01BQU0sV0FBVyxLQUFBLEFBQUssaURBQU8sS0FBQSxBQUFLLElBQWxDLEFBQWlCLEFBQVksQUFBUyxBQUN0QztNQUFNO1dBQ0csQ0FBQSxBQUFDLEdBRGUsQUFDaEIsQUFBSSxBQUNYO1lBQVEsQ0FBQyxLQUFBLEFBQUssaURBQU8sS0FBQSxBQUFLLElBQWxCLEFBQUMsQUFBWSxBQUFTLE1BQUssS0FBQSxBQUFLLGlEQUFPLEtBQUEsQUFBSyxJQUZ0RCxBQUFlLEFBQVUsQUFFZixBQUEyQixBQUFZLEFBQVMsQUFHMUQ7QUFMeUIsQUFDdkIsR0FEYTs7TUFLVDtXQUNHLENBQUEsQUFBQyxRQURpQixBQUNsQixBQUFTLEFBQ2hCO1lBQVEsQ0FBQSxBQUFDLFVBRlgsQUFBZSxBQUFZLEFBRWpCLEFBQVcsQUFHckI7QUFMMkIsQUFDekIsR0FEYTs7VUFLZixBQUFRLElBQUksT0FBWixBQUFZLEFBQU8sQUFDbkI7VUFBQSxBQUFRLElBQUksT0FBWixBQUFZLEFBQU8sQUFFbkI7O0FBQ0E7QUFDQTt5QkFDRSxjQUFBOztnQkFBQTtrQkFBQSxBQUNFO0FBREY7QUFBQSxHQUFBLGtCQUNFLGNBQUEsU0FBSyxPQUFMLEFBQVksT0FBTyxRQUFuQixBQUEyQjtnQkFBM0I7a0JBQUEsQUFDRTtBQURGO3FCQUNFLEFBQUMsaUNBQVMsTUFBVixBQUFnQixNQUFNLFFBQXRCLEFBQThCLFFBQVEsUUFBdEMsQUFBOEMsUUFBUSxHQUF0RCxBQUF5RCxHQUFHLEdBQTVELEFBQStEO2dCQUEvRDtrQkFITixBQUNFLEFBQ0UsQUFDRSxBQUlQO0FBSk87O0FBTVI7O2tCQUFlLGdDQUFmLEFBQWUsQUFBZSIsImZpbGUiOiJjaGFydC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvcHJpc2NfMDAwL2NvZGUvQ0FDREVWL3Z4LXRlc3QifQ==

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/Users/prisc_000/code/CACDEV/vx-test/components/chart.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/prisc_000/code/CACDEV/vx-test/components/chart.js"); } } })();

/***/ }),

/***/ 566:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2016 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames () {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg)) {
				classes.push(classNames.apply(null, arg));
			} else if (argType === 'object') {
				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(key);
					}
				}
			}
		}

		return classes.join(' ');
	}

	if (typeof module !== 'undefined' && module.exports) {
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
			return classNames;
		}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {
		window.classNames = classNames;
	}
}());


/***/ }),

/***/ 567:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = additionalProps;

var _callOrValue = __webpack_require__(598);

var _callOrValue2 = _interopRequireDefault(_callOrValue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function additionalProps(restProps, data) {
  return Object.keys(restProps).reduce(function (ret, cur) {
    ret[cur] = (0, _callOrValue2.default)(restProps[cur], data);
    return ret;
  }, {});
}

/***/ }),

/***/ 568:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_arc__ = __webpack_require__(603);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "arc", function() { return __WEBPACK_IMPORTED_MODULE_0__src_arc__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_area__ = __webpack_require__(584);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "area", function() { return __WEBPACK_IMPORTED_MODULE_1__src_area__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src_line__ = __webpack_require__(580);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "line", function() { return __WEBPACK_IMPORTED_MODULE_2__src_line__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__src_pie__ = __webpack_require__(605);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "pie", function() { return __WEBPACK_IMPORTED_MODULE_3__src_pie__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__src_areaRadial__ = __webpack_require__(608);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "areaRadial", function() { return __WEBPACK_IMPORTED_MODULE_4__src_areaRadial__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "radialArea", function() { return __WEBPACK_IMPORTED_MODULE_4__src_areaRadial__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__src_lineRadial__ = __webpack_require__(586);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "lineRadial", function() { return __WEBPACK_IMPORTED_MODULE_5__src_lineRadial__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "radialLine", function() { return __WEBPACK_IMPORTED_MODULE_5__src_lineRadial__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__src_pointRadial__ = __webpack_require__(587);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "pointRadial", function() { return __WEBPACK_IMPORTED_MODULE_6__src_pointRadial__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__src_link_index__ = __webpack_require__(609);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "linkHorizontal", function() { return __WEBPACK_IMPORTED_MODULE_7__src_link_index__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "linkVertical", function() { return __WEBPACK_IMPORTED_MODULE_7__src_link_index__["c"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "linkRadial", function() { return __WEBPACK_IMPORTED_MODULE_7__src_link_index__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__src_symbol__ = __webpack_require__(610);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "symbol", function() { return __WEBPACK_IMPORTED_MODULE_8__src_symbol__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "symbols", function() { return __WEBPACK_IMPORTED_MODULE_8__src_symbol__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__src_symbol_circle__ = __webpack_require__(589);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "symbolCircle", function() { return __WEBPACK_IMPORTED_MODULE_9__src_symbol_circle__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__src_symbol_cross__ = __webpack_require__(590);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "symbolCross", function() { return __WEBPACK_IMPORTED_MODULE_10__src_symbol_cross__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__src_symbol_diamond__ = __webpack_require__(591);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "symbolDiamond", function() { return __WEBPACK_IMPORTED_MODULE_11__src_symbol_diamond__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__src_symbol_square__ = __webpack_require__(593);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "symbolSquare", function() { return __WEBPACK_IMPORTED_MODULE_12__src_symbol_square__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__src_symbol_star__ = __webpack_require__(592);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "symbolStar", function() { return __WEBPACK_IMPORTED_MODULE_13__src_symbol_star__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__src_symbol_triangle__ = __webpack_require__(594);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "symbolTriangle", function() { return __WEBPACK_IMPORTED_MODULE_14__src_symbol_triangle__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__src_symbol_wye__ = __webpack_require__(595);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "symbolWye", function() { return __WEBPACK_IMPORTED_MODULE_15__src_symbol_wye__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__src_curve_basisClosed__ = __webpack_require__(611);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "curveBasisClosed", function() { return __WEBPACK_IMPORTED_MODULE_16__src_curve_basisClosed__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__src_curve_basisOpen__ = __webpack_require__(612);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "curveBasisOpen", function() { return __WEBPACK_IMPORTED_MODULE_17__src_curve_basisOpen__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__src_curve_basis__ = __webpack_require__(577);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "curveBasis", function() { return __WEBPACK_IMPORTED_MODULE_18__src_curve_basis__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__src_curve_bundle__ = __webpack_require__(613);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "curveBundle", function() { return __WEBPACK_IMPORTED_MODULE_19__src_curve_bundle__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__src_curve_cardinalClosed__ = __webpack_require__(596);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "curveCardinalClosed", function() { return __WEBPACK_IMPORTED_MODULE_20__src_curve_cardinalClosed__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__src_curve_cardinalOpen__ = __webpack_require__(597);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "curveCardinalOpen", function() { return __WEBPACK_IMPORTED_MODULE_21__src_curve_cardinalOpen__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__src_curve_cardinal__ = __webpack_require__(578);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "curveCardinal", function() { return __WEBPACK_IMPORTED_MODULE_22__src_curve_cardinal__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__src_curve_catmullRomClosed__ = __webpack_require__(614);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "curveCatmullRomClosed", function() { return __WEBPACK_IMPORTED_MODULE_23__src_curve_catmullRomClosed__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__src_curve_catmullRomOpen__ = __webpack_require__(615);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "curveCatmullRomOpen", function() { return __WEBPACK_IMPORTED_MODULE_24__src_curve_catmullRomOpen__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__src_curve_catmullRom__ = __webpack_require__(582);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "curveCatmullRom", function() { return __WEBPACK_IMPORTED_MODULE_25__src_curve_catmullRom__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__src_curve_linearClosed__ = __webpack_require__(616);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "curveLinearClosed", function() { return __WEBPACK_IMPORTED_MODULE_26__src_curve_linearClosed__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__src_curve_linear__ = __webpack_require__(575);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "curveLinear", function() { return __WEBPACK_IMPORTED_MODULE_27__src_curve_linear__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__src_curve_monotone__ = __webpack_require__(617);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "curveMonotoneX", function() { return __WEBPACK_IMPORTED_MODULE_28__src_curve_monotone__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "curveMonotoneY", function() { return __WEBPACK_IMPORTED_MODULE_28__src_curve_monotone__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__src_curve_natural__ = __webpack_require__(618);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "curveNatural", function() { return __WEBPACK_IMPORTED_MODULE_29__src_curve_natural__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__src_curve_step__ = __webpack_require__(619);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "curveStep", function() { return __WEBPACK_IMPORTED_MODULE_30__src_curve_step__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "curveStepAfter", function() { return __WEBPACK_IMPORTED_MODULE_30__src_curve_step__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "curveStepBefore", function() { return __WEBPACK_IMPORTED_MODULE_30__src_curve_step__["c"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__src_stack__ = __webpack_require__(620);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "stack", function() { return __WEBPACK_IMPORTED_MODULE_31__src_stack__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__src_offset_expand__ = __webpack_require__(621);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "stackOffsetExpand", function() { return __WEBPACK_IMPORTED_MODULE_32__src_offset_expand__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__src_offset_diverging__ = __webpack_require__(622);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "stackOffsetDiverging", function() { return __WEBPACK_IMPORTED_MODULE_33__src_offset_diverging__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__src_offset_none__ = __webpack_require__(572);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "stackOffsetNone", function() { return __WEBPACK_IMPORTED_MODULE_34__src_offset_none__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__src_offset_silhouette__ = __webpack_require__(623);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "stackOffsetSilhouette", function() { return __WEBPACK_IMPORTED_MODULE_35__src_offset_silhouette__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__src_offset_wiggle__ = __webpack_require__(624);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "stackOffsetWiggle", function() { return __WEBPACK_IMPORTED_MODULE_36__src_offset_wiggle__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__src_order_ascending__ = __webpack_require__(583);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "stackOrderAscending", function() { return __WEBPACK_IMPORTED_MODULE_37__src_order_ascending__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__src_order_descending__ = __webpack_require__(625);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "stackOrderDescending", function() { return __WEBPACK_IMPORTED_MODULE_38__src_order_descending__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__src_order_insideOut__ = __webpack_require__(626);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "stackOrderInsideOut", function() { return __WEBPACK_IMPORTED_MODULE_39__src_order_insideOut__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__src_order_none__ = __webpack_require__(573);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "stackOrderNone", function() { return __WEBPACK_IMPORTED_MODULE_40__src_order_none__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__src_order_reverse__ = __webpack_require__(627);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "stackOrderReverse", function() { return __WEBPACK_IMPORTED_MODULE_41__src_order_reverse__["a"]; });




 // Note: radialArea is deprecated!
 // Note: radialLine is deprecated!









































/***/ }),

/***/ 569:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(x) {
  return function constant() {
    return x;
  };
});


/***/ }),

/***/ 570:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_path__ = __webpack_require__(604);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__src_path__["a"]; });



/***/ }),

/***/ 571:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return abs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return atan2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return cos; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return max; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return min; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return sin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return sqrt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return epsilon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return pi; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return halfPi; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return tau; });
/* harmony export (immutable) */ __webpack_exports__["b"] = acos;
/* harmony export (immutable) */ __webpack_exports__["c"] = asin;
var abs = Math.abs;
var atan2 = Math.atan2;
var cos = Math.cos;
var max = Math.max;
var min = Math.min;
var sin = Math.sin;
var sqrt = Math.sqrt;

var epsilon = 1e-12;
var pi = Math.PI;
var halfPi = pi / 2;
var tau = 2 * pi;

function acos(x) {
  return x > 1 ? 0 : x < -1 ? pi : Math.acos(x);
}

function asin(x) {
  return x >= 1 ? halfPi : x <= -1 ? -halfPi : Math.asin(x);
}


/***/ }),

/***/ 572:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(series, order) {
  if (!((n = series.length) > 1)) return;
  for (var i = 1, j, s0, s1 = series[order[0]], n, m = s1.length; i < n; ++i) {
    s0 = s1, s1 = series[order[i]];
    for (j = 0; j < m; ++j) {
      s1[j][1] += s1[j][0] = isNaN(s0[j][1]) ? s0[j][0] : s0[j][1];
    }
  }
});


/***/ }),

/***/ 573:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(series) {
  var n = series.length, o = new Array(n);
  while (--n >= 0) o[n] = n;
  return o;
});


/***/ }),

/***/ 574:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Group = __webpack_require__(629);

Object.defineProperty(exports, 'Group', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Group).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ 575:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function Linear(context) {
  this._context = context;
}

Linear.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._point = 0;
  },
  lineEnd: function() {
    if (this._line || (this._line !== 0 && this._point === 1)) this._context.closePath();
    this._line = 1 - this._line;
  },
  point: function(x, y) {
    x = +x, y = +y;
    switch (this._point) {
      case 0: this._point = 1; this._line ? this._context.lineTo(x, y) : this._context.moveTo(x, y); break;
      case 1: this._point = 2; // proceed
      default: this._context.lineTo(x, y); break;
    }
  }
};

/* harmony default export */ __webpack_exports__["a"] = (function(context) {
  return new Linear(context);
});


/***/ }),

/***/ 576:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function() {});


/***/ }),

/***/ 577:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["c"] = point;
/* harmony export (immutable) */ __webpack_exports__["a"] = Basis;
function point(that, x, y) {
  that._context.bezierCurveTo(
    (2 * that._x0 + that._x1) / 3,
    (2 * that._y0 + that._y1) / 3,
    (that._x0 + 2 * that._x1) / 3,
    (that._y0 + 2 * that._y1) / 3,
    (that._x0 + 4 * that._x1 + x) / 6,
    (that._y0 + 4 * that._y1 + y) / 6
  );
}

function Basis(context) {
  this._context = context;
}

Basis.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 =
    this._y0 = this._y1 = NaN;
    this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 3: point(this, this._x1, this._y1); // proceed
      case 2: this._context.lineTo(this._x1, this._y1); break;
    }
    if (this._line || (this._line !== 0 && this._point === 1)) this._context.closePath();
    this._line = 1 - this._line;
  },
  point: function(x, y) {
    x = +x, y = +y;
    switch (this._point) {
      case 0: this._point = 1; this._line ? this._context.lineTo(x, y) : this._context.moveTo(x, y); break;
      case 1: this._point = 2; break;
      case 2: this._point = 3; this._context.lineTo((5 * this._x0 + this._x1) / 6, (5 * this._y0 + this._y1) / 6); // proceed
      default: point(this, x, y); break;
    }
    this._x0 = this._x1, this._x1 = x;
    this._y0 = this._y1, this._y1 = y;
  }
};

/* harmony default export */ __webpack_exports__["b"] = (function(context) {
  return new Basis(context);
});


/***/ }),

/***/ 578:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["c"] = point;
/* harmony export (immutable) */ __webpack_exports__["a"] = Cardinal;
function point(that, x, y) {
  that._context.bezierCurveTo(
    that._x1 + that._k * (that._x2 - that._x0),
    that._y1 + that._k * (that._y2 - that._y0),
    that._x2 + that._k * (that._x1 - x),
    that._y2 + that._k * (that._y1 - y),
    that._x2,
    that._y2
  );
}

function Cardinal(context, tension) {
  this._context = context;
  this._k = (1 - tension) / 6;
}

Cardinal.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._x2 =
    this._y0 = this._y1 = this._y2 = NaN;
    this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 2: this._context.lineTo(this._x2, this._y2); break;
      case 3: point(this, this._x1, this._y1); break;
    }
    if (this._line || (this._line !== 0 && this._point === 1)) this._context.closePath();
    this._line = 1 - this._line;
  },
  point: function(x, y) {
    x = +x, y = +y;
    switch (this._point) {
      case 0: this._point = 1; this._line ? this._context.lineTo(x, y) : this._context.moveTo(x, y); break;
      case 1: this._point = 2; this._x1 = x, this._y1 = y; break;
      case 2: this._point = 3; // proceed
      default: point(this, x, y); break;
    }
    this._x0 = this._x1, this._x1 = this._x2, this._x2 = x;
    this._y0 = this._y1, this._y1 = this._y2, this._y2 = y;
  }
};

/* harmony default export */ __webpack_exports__["b"] = ((function custom(tension) {

  function cardinal(context) {
    return new Cardinal(context, tension);
  }

  cardinal.tension = function(tension) {
    return custom(+tension);
  };

  return cardinal;
})(0));


/***/ }),

/***/ 579:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = Bar;

var _react = __webpack_require__(17);

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(566);

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = __webpack_require__(58);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _additionalProps = __webpack_require__(567);

var _additionalProps2 = _interopRequireDefault(_additionalProps);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

Bar.propTypes = {
  innerRef: _propTypes2.default.func
};

function Bar(_ref) {
  var className = _ref.className,
      innerRef = _ref.innerRef,
      data = _ref.data,
      _ref$x = _ref.x,
      x = _ref$x === undefined ? 0 : _ref$x,
      _ref$y = _ref.y,
      y = _ref$y === undefined ? 0 : _ref$y,
      width = _ref.width,
      height = _ref.height,
      rx = _ref.rx,
      ry = _ref.ry,
      _ref$fill = _ref.fill,
      fill = _ref$fill === undefined ? 'steelblue' : _ref$fill,
      fillOpacity = _ref.fillOpacity,
      stroke = _ref.stroke,
      strokeWidth = _ref.strokeWidth,
      strokeDasharray = _ref.strokeDasharray,
      strokeLinecap = _ref.strokeLinecap,
      strokeLinejoin = _ref.strokeLinejoin,
      strokeMiterlimit = _ref.strokeMiterlimit,
      strokeOpacity = _ref.strokeOpacity,
      restProps = _objectWithoutProperties(_ref, ['className', 'innerRef', 'data', 'x', 'y', 'width', 'height', 'rx', 'ry', 'fill', 'fillOpacity', 'stroke', 'strokeWidth', 'strokeDasharray', 'strokeLinecap', 'strokeLinejoin', 'strokeMiterlimit', 'strokeOpacity']);

  return _react2.default.createElement('rect', _extends({
    ref: innerRef,
    className: (0, _classnames2.default)('vx-bar', className),
    x: x,
    y: y,
    width: width,
    height: height,
    rx: rx,
    ry: ry,
    fill: fill,
    fillOpacity: fillOpacity,
    stroke: stroke,
    strokeWidth: strokeWidth,
    strokeDasharray: strokeDasharray,
    strokeLinecap: strokeLinecap,
    strokeLinejoin: strokeLinejoin,
    strokeMiterlimit: strokeMiterlimit,
    strokeOpacity: strokeOpacity
  }, (0, _additionalProps2.default)(restProps, data)));
}

/***/ }),

/***/ 580:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_path__ = __webpack_require__(570);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__constant__ = __webpack_require__(569);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__curve_linear__ = __webpack_require__(575);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__point__ = __webpack_require__(581);





/* harmony default export */ __webpack_exports__["a"] = (function() {
  var x = __WEBPACK_IMPORTED_MODULE_3__point__["a" /* x */],
      y = __WEBPACK_IMPORTED_MODULE_3__point__["b" /* y */],
      defined = Object(__WEBPACK_IMPORTED_MODULE_1__constant__["a" /* default */])(true),
      context = null,
      curve = __WEBPACK_IMPORTED_MODULE_2__curve_linear__["a" /* default */],
      output = null;

  function line(data) {
    var i,
        n = data.length,
        d,
        defined0 = false,
        buffer;

    if (context == null) output = curve(buffer = Object(__WEBPACK_IMPORTED_MODULE_0_d3_path__["a" /* path */])());

    for (i = 0; i <= n; ++i) {
      if (!(i < n && defined(d = data[i], i, data)) === defined0) {
        if (defined0 = !defined0) output.lineStart();
        else output.lineEnd();
      }
      if (defined0) output.point(+x(d, i, data), +y(d, i, data));
    }

    if (buffer) return output = null, buffer + "" || null;
  }

  line.x = function(_) {
    return arguments.length ? (x = typeof _ === "function" ? _ : Object(__WEBPACK_IMPORTED_MODULE_1__constant__["a" /* default */])(+_), line) : x;
  };

  line.y = function(_) {
    return arguments.length ? (y = typeof _ === "function" ? _ : Object(__WEBPACK_IMPORTED_MODULE_1__constant__["a" /* default */])(+_), line) : y;
  };

  line.defined = function(_) {
    return arguments.length ? (defined = typeof _ === "function" ? _ : Object(__WEBPACK_IMPORTED_MODULE_1__constant__["a" /* default */])(!!_), line) : defined;
  };

  line.curve = function(_) {
    return arguments.length ? (curve = _, context != null && (output = curve(context)), line) : curve;
  };

  line.context = function(_) {
    return arguments.length ? (_ == null ? context = output = null : output = curve(context = _), line) : context;
  };

  return line;
});


/***/ }),

/***/ 581:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = x;
/* harmony export (immutable) */ __webpack_exports__["b"] = y;
function x(p) {
  return p[0];
}

function y(p) {
  return p[1];
}


/***/ }),

/***/ 582:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = point;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__math__ = __webpack_require__(571);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__cardinal__ = __webpack_require__(578);



function point(that, x, y) {
  var x1 = that._x1,
      y1 = that._y1,
      x2 = that._x2,
      y2 = that._y2;

  if (that._l01_a > __WEBPACK_IMPORTED_MODULE_0__math__["f" /* epsilon */]) {
    var a = 2 * that._l01_2a + 3 * that._l01_a * that._l12_a + that._l12_2a,
        n = 3 * that._l01_a * (that._l01_a + that._l12_a);
    x1 = (x1 * a - that._x0 * that._l12_2a + that._x2 * that._l01_2a) / n;
    y1 = (y1 * a - that._y0 * that._l12_2a + that._y2 * that._l01_2a) / n;
  }

  if (that._l23_a > __WEBPACK_IMPORTED_MODULE_0__math__["f" /* epsilon */]) {
    var b = 2 * that._l23_2a + 3 * that._l23_a * that._l12_a + that._l12_2a,
        m = 3 * that._l23_a * (that._l23_a + that._l12_a);
    x2 = (x2 * b + that._x1 * that._l23_2a - x * that._l12_2a) / m;
    y2 = (y2 * b + that._y1 * that._l23_2a - y * that._l12_2a) / m;
  }

  that._context.bezierCurveTo(x1, y1, x2, y2, that._x2, that._y2);
}

function CatmullRom(context, alpha) {
  this._context = context;
  this._alpha = alpha;
}

CatmullRom.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._x2 =
    this._y0 = this._y1 = this._y2 = NaN;
    this._l01_a = this._l12_a = this._l23_a =
    this._l01_2a = this._l12_2a = this._l23_2a =
    this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 2: this._context.lineTo(this._x2, this._y2); break;
      case 3: this.point(this._x2, this._y2); break;
    }
    if (this._line || (this._line !== 0 && this._point === 1)) this._context.closePath();
    this._line = 1 - this._line;
  },
  point: function(x, y) {
    x = +x, y = +y;

    if (this._point) {
      var x23 = this._x2 - x,
          y23 = this._y2 - y;
      this._l23_a = Math.sqrt(this._l23_2a = Math.pow(x23 * x23 + y23 * y23, this._alpha));
    }

    switch (this._point) {
      case 0: this._point = 1; this._line ? this._context.lineTo(x, y) : this._context.moveTo(x, y); break;
      case 1: this._point = 2; break;
      case 2: this._point = 3; // proceed
      default: point(this, x, y); break;
    }

    this._l01_a = this._l12_a, this._l12_a = this._l23_a;
    this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a;
    this._x0 = this._x1, this._x1 = this._x2, this._x2 = x;
    this._y0 = this._y1, this._y1 = this._y2, this._y2 = y;
  }
};

/* harmony default export */ __webpack_exports__["a"] = ((function custom(alpha) {

  function catmullRom(context) {
    return alpha ? new CatmullRom(context, alpha) : new __WEBPACK_IMPORTED_MODULE_1__cardinal__["a" /* Cardinal */](context, 0);
  }

  catmullRom.alpha = function(alpha) {
    return custom(+alpha);
  };

  return catmullRom;
})(0.5));


/***/ }),

/***/ 583:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = sum;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__none__ = __webpack_require__(573);


/* harmony default export */ __webpack_exports__["a"] = (function(series) {
  var sums = series.map(sum);
  return Object(__WEBPACK_IMPORTED_MODULE_0__none__["a" /* default */])(series).sort(function(a, b) { return sums[a] - sums[b]; });
});

function sum(series) {
  var s = 0, i = -1, n = series.length, v;
  while (++i < n) if (v = +series[i][1]) s += v;
  return s;
}


/***/ }),

/***/ 584:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_path__ = __webpack_require__(570);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__constant__ = __webpack_require__(569);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__curve_linear__ = __webpack_require__(575);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__line__ = __webpack_require__(580);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__point__ = __webpack_require__(581);






/* harmony default export */ __webpack_exports__["a"] = (function() {
  var x0 = __WEBPACK_IMPORTED_MODULE_4__point__["a" /* x */],
      x1 = null,
      y0 = Object(__WEBPACK_IMPORTED_MODULE_1__constant__["a" /* default */])(0),
      y1 = __WEBPACK_IMPORTED_MODULE_4__point__["b" /* y */],
      defined = Object(__WEBPACK_IMPORTED_MODULE_1__constant__["a" /* default */])(true),
      context = null,
      curve = __WEBPACK_IMPORTED_MODULE_2__curve_linear__["a" /* default */],
      output = null;

  function area(data) {
    var i,
        j,
        k,
        n = data.length,
        d,
        defined0 = false,
        buffer,
        x0z = new Array(n),
        y0z = new Array(n);

    if (context == null) output = curve(buffer = Object(__WEBPACK_IMPORTED_MODULE_0_d3_path__["a" /* path */])());

    for (i = 0; i <= n; ++i) {
      if (!(i < n && defined(d = data[i], i, data)) === defined0) {
        if (defined0 = !defined0) {
          j = i;
          output.areaStart();
          output.lineStart();
        } else {
          output.lineEnd();
          output.lineStart();
          for (k = i - 1; k >= j; --k) {
            output.point(x0z[k], y0z[k]);
          }
          output.lineEnd();
          output.areaEnd();
        }
      }
      if (defined0) {
        x0z[i] = +x0(d, i, data), y0z[i] = +y0(d, i, data);
        output.point(x1 ? +x1(d, i, data) : x0z[i], y1 ? +y1(d, i, data) : y0z[i]);
      }
    }

    if (buffer) return output = null, buffer + "" || null;
  }

  function arealine() {
    return Object(__WEBPACK_IMPORTED_MODULE_3__line__["a" /* default */])().defined(defined).curve(curve).context(context);
  }

  area.x = function(_) {
    return arguments.length ? (x0 = typeof _ === "function" ? _ : Object(__WEBPACK_IMPORTED_MODULE_1__constant__["a" /* default */])(+_), x1 = null, area) : x0;
  };

  area.x0 = function(_) {
    return arguments.length ? (x0 = typeof _ === "function" ? _ : Object(__WEBPACK_IMPORTED_MODULE_1__constant__["a" /* default */])(+_), area) : x0;
  };

  area.x1 = function(_) {
    return arguments.length ? (x1 = _ == null ? null : typeof _ === "function" ? _ : Object(__WEBPACK_IMPORTED_MODULE_1__constant__["a" /* default */])(+_), area) : x1;
  };

  area.y = function(_) {
    return arguments.length ? (y0 = typeof _ === "function" ? _ : Object(__WEBPACK_IMPORTED_MODULE_1__constant__["a" /* default */])(+_), y1 = null, area) : y0;
  };

  area.y0 = function(_) {
    return arguments.length ? (y0 = typeof _ === "function" ? _ : Object(__WEBPACK_IMPORTED_MODULE_1__constant__["a" /* default */])(+_), area) : y0;
  };

  area.y1 = function(_) {
    return arguments.length ? (y1 = _ == null ? null : typeof _ === "function" ? _ : Object(__WEBPACK_IMPORTED_MODULE_1__constant__["a" /* default */])(+_), area) : y1;
  };

  area.lineX0 =
  area.lineY0 = function() {
    return arealine().x(x0).y(y0);
  };

  area.lineY1 = function() {
    return arealine().x(x0).y(y1);
  };

  area.lineX1 = function() {
    return arealine().x(x1).y(y0);
  };

  area.defined = function(_) {
    return arguments.length ? (defined = typeof _ === "function" ? _ : Object(__WEBPACK_IMPORTED_MODULE_1__constant__["a" /* default */])(!!_), area) : defined;
  };

  area.curve = function(_) {
    return arguments.length ? (curve = _, context != null && (output = curve(context)), area) : curve;
  };

  area.context = function(_) {
    return arguments.length ? (_ == null ? context = output = null : output = curve(context = _), area) : context;
  };

  return area;
});


/***/ }),

/***/ 585:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return curveRadialLinear; });
/* harmony export (immutable) */ __webpack_exports__["b"] = curveRadial;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__linear__ = __webpack_require__(575);


var curveRadialLinear = curveRadial(__WEBPACK_IMPORTED_MODULE_0__linear__["a" /* default */]);

function Radial(curve) {
  this._curve = curve;
}

Radial.prototype = {
  areaStart: function() {
    this._curve.areaStart();
  },
  areaEnd: function() {
    this._curve.areaEnd();
  },
  lineStart: function() {
    this._curve.lineStart();
  },
  lineEnd: function() {
    this._curve.lineEnd();
  },
  point: function(a, r) {
    this._curve.point(r * Math.sin(a), r * -Math.cos(a));
  }
};

function curveRadial(curve) {

  function radial(context) {
    return new Radial(curve(context));
  }

  radial._curve = curve;

  return radial;
}


/***/ }),

/***/ 586:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = lineRadial;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__curve_radial__ = __webpack_require__(585);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__line__ = __webpack_require__(580);



function lineRadial(l) {
  var c = l.curve;

  l.angle = l.x, delete l.x;
  l.radius = l.y, delete l.y;

  l.curve = function(_) {
    return arguments.length ? c(Object(__WEBPACK_IMPORTED_MODULE_0__curve_radial__["b" /* default */])(_)) : c()._curve;
  };

  return l;
}

/* harmony default export */ __webpack_exports__["a"] = (function() {
  return lineRadial(Object(__WEBPACK_IMPORTED_MODULE_1__line__["a" /* default */])().curve(__WEBPACK_IMPORTED_MODULE_0__curve_radial__["a" /* curveRadialLinear */]));
});


/***/ }),

/***/ 587:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(x, y) {
  return [(y = +y) * Math.cos(x -= Math.PI / 2), y * Math.sin(x)];
});


/***/ }),

/***/ 588:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return slice; });
var slice = Array.prototype.slice;


/***/ }),

/***/ 589:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__math__ = __webpack_require__(571);


/* harmony default export */ __webpack_exports__["a"] = ({
  draw: function(context, size) {
    var r = Math.sqrt(size / __WEBPACK_IMPORTED_MODULE_0__math__["j" /* pi */]);
    context.moveTo(r, 0);
    context.arc(0, 0, r, 0, __WEBPACK_IMPORTED_MODULE_0__math__["m" /* tau */]);
  }
});


/***/ }),

/***/ 590:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  draw: function(context, size) {
    var r = Math.sqrt(size / 5) / 2;
    context.moveTo(-3 * r, -r);
    context.lineTo(-r, -r);
    context.lineTo(-r, -3 * r);
    context.lineTo(r, -3 * r);
    context.lineTo(r, -r);
    context.lineTo(3 * r, -r);
    context.lineTo(3 * r, r);
    context.lineTo(r, r);
    context.lineTo(r, 3 * r);
    context.lineTo(-r, 3 * r);
    context.lineTo(-r, r);
    context.lineTo(-3 * r, r);
    context.closePath();
  }
});


/***/ }),

/***/ 591:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var tan30 = Math.sqrt(1 / 3),
    tan30_2 = tan30 * 2;

/* harmony default export */ __webpack_exports__["a"] = ({
  draw: function(context, size) {
    var y = Math.sqrt(size / tan30_2),
        x = y * tan30;
    context.moveTo(0, -y);
    context.lineTo(x, 0);
    context.lineTo(0, y);
    context.lineTo(-x, 0);
    context.closePath();
  }
});


/***/ }),

/***/ 592:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__math__ = __webpack_require__(571);


var ka = 0.89081309152928522810,
    kr = Math.sin(__WEBPACK_IMPORTED_MODULE_0__math__["j" /* pi */] / 10) / Math.sin(7 * __WEBPACK_IMPORTED_MODULE_0__math__["j" /* pi */] / 10),
    kx = Math.sin(__WEBPACK_IMPORTED_MODULE_0__math__["m" /* tau */] / 10) * kr,
    ky = -Math.cos(__WEBPACK_IMPORTED_MODULE_0__math__["m" /* tau */] / 10) * kr;

/* harmony default export */ __webpack_exports__["a"] = ({
  draw: function(context, size) {
    var r = Math.sqrt(size * ka),
        x = kx * r,
        y = ky * r;
    context.moveTo(0, -r);
    context.lineTo(x, y);
    for (var i = 1; i < 5; ++i) {
      var a = __WEBPACK_IMPORTED_MODULE_0__math__["m" /* tau */] * i / 5,
          c = Math.cos(a),
          s = Math.sin(a);
      context.lineTo(s * r, -c * r);
      context.lineTo(c * x - s * y, s * x + c * y);
    }
    context.closePath();
  }
});


/***/ }),

/***/ 593:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  draw: function(context, size) {
    var w = Math.sqrt(size),
        x = -w / 2;
    context.rect(x, x, w, w);
  }
});


/***/ }),

/***/ 594:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var sqrt3 = Math.sqrt(3);

/* harmony default export */ __webpack_exports__["a"] = ({
  draw: function(context, size) {
    var y = -Math.sqrt(size / (sqrt3 * 3));
    context.moveTo(0, y * 2);
    context.lineTo(-sqrt3 * y, -y);
    context.lineTo(sqrt3 * y, -y);
    context.closePath();
  }
});


/***/ }),

/***/ 595:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var c = -0.5,
    s = Math.sqrt(3) / 2,
    k = 1 / Math.sqrt(12),
    a = (k / 2 + 1) * 3;

/* harmony default export */ __webpack_exports__["a"] = ({
  draw: function(context, size) {
    var r = Math.sqrt(size / a),
        x0 = r / 2,
        y0 = r * k,
        x1 = x0,
        y1 = r * k + r,
        x2 = -x1,
        y2 = y1;
    context.moveTo(x0, y0);
    context.lineTo(x1, y1);
    context.lineTo(x2, y2);
    context.lineTo(c * x0 - s * y0, s * x0 + c * y0);
    context.lineTo(c * x1 - s * y1, s * x1 + c * y1);
    context.lineTo(c * x2 - s * y2, s * x2 + c * y2);
    context.lineTo(c * x0 + s * y0, c * y0 - s * x0);
    context.lineTo(c * x1 + s * y1, c * y1 - s * x1);
    context.lineTo(c * x2 + s * y2, c * y2 - s * x2);
    context.closePath();
  }
});


/***/ }),

/***/ 596:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = CardinalClosed;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__noop__ = __webpack_require__(576);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__cardinal__ = __webpack_require__(578);



function CardinalClosed(context, tension) {
  this._context = context;
  this._k = (1 - tension) / 6;
}

CardinalClosed.prototype = {
  areaStart: __WEBPACK_IMPORTED_MODULE_0__noop__["a" /* default */],
  areaEnd: __WEBPACK_IMPORTED_MODULE_0__noop__["a" /* default */],
  lineStart: function() {
    this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._x5 =
    this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = this._y5 = NaN;
    this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 1: {
        this._context.moveTo(this._x3, this._y3);
        this._context.closePath();
        break;
      }
      case 2: {
        this._context.lineTo(this._x3, this._y3);
        this._context.closePath();
        break;
      }
      case 3: {
        this.point(this._x3, this._y3);
        this.point(this._x4, this._y4);
        this.point(this._x5, this._y5);
        break;
      }
    }
  },
  point: function(x, y) {
    x = +x, y = +y;
    switch (this._point) {
      case 0: this._point = 1; this._x3 = x, this._y3 = y; break;
      case 1: this._point = 2; this._context.moveTo(this._x4 = x, this._y4 = y); break;
      case 2: this._point = 3; this._x5 = x, this._y5 = y; break;
      default: Object(__WEBPACK_IMPORTED_MODULE_1__cardinal__["c" /* point */])(this, x, y); break;
    }
    this._x0 = this._x1, this._x1 = this._x2, this._x2 = x;
    this._y0 = this._y1, this._y1 = this._y2, this._y2 = y;
  }
};

/* harmony default export */ __webpack_exports__["b"] = ((function custom(tension) {

  function cardinal(context) {
    return new CardinalClosed(context, tension);
  }

  cardinal.tension = function(tension) {
    return custom(+tension);
  };

  return cardinal;
})(0));


/***/ }),

/***/ 597:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = CardinalOpen;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__cardinal__ = __webpack_require__(578);


function CardinalOpen(context, tension) {
  this._context = context;
  this._k = (1 - tension) / 6;
}

CardinalOpen.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._x2 =
    this._y0 = this._y1 = this._y2 = NaN;
    this._point = 0;
  },
  lineEnd: function() {
    if (this._line || (this._line !== 0 && this._point === 3)) this._context.closePath();
    this._line = 1 - this._line;
  },
  point: function(x, y) {
    x = +x, y = +y;
    switch (this._point) {
      case 0: this._point = 1; break;
      case 1: this._point = 2; break;
      case 2: this._point = 3; this._line ? this._context.lineTo(this._x2, this._y2) : this._context.moveTo(this._x2, this._y2); break;
      case 3: this._point = 4; // proceed
      default: Object(__WEBPACK_IMPORTED_MODULE_0__cardinal__["c" /* point */])(this, x, y); break;
    }
    this._x0 = this._x1, this._x1 = this._x2, this._x2 = x;
    this._y0 = this._y1, this._y1 = this._y2, this._y2 = y;
  }
};

/* harmony default export */ __webpack_exports__["b"] = ((function custom(tension) {

  function cardinal(context) {
    return new CardinalOpen(context, tension);
  }

  cardinal.tension = function(tension) {
    return custom(+tension);
  };

  return cardinal;
})(0));


/***/ }),

/***/ 598:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = callOrValue;
function callOrValue(maybeFn, data) {
  if (typeof maybeFn === 'function') {
    return maybeFn(data);
  }
  return maybeFn;
}

/***/ }),

/***/ 599:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.STACK_ORDER_NAMES = exports.STACK_ORDERS = undefined;
exports.default = stackOrder;

var _d3Shape = __webpack_require__(568);

var STACK_ORDERS = exports.STACK_ORDERS = {
  ascending: _d3Shape.stackOrderAscending,
  descending: _d3Shape.stackOrderDescending,
  insideout: _d3Shape.stackOrderInsideOut,
  none: _d3Shape.stackOrderNone,
  reverse: _d3Shape.stackOrderReverse
};

var STACK_ORDER_NAMES = exports.STACK_ORDER_NAMES = Object.keys(STACK_ORDERS);

function stackOrder(order) {
  return STACK_ORDERS[order] || STACK_ORDERS.none;
}

/***/ }),

/***/ 600:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.STACK_OFFSET_NAMES = exports.STACK_OFFSETS = undefined;
exports.default = stackOffset;

var _d3Shape = __webpack_require__(568);

var STACK_OFFSETS = exports.STACK_OFFSETS = {
  expand: _d3Shape.stackOffsetExpand,
  diverging: _d3Shape.stackOffsetDiverging,
  none: _d3Shape.stackOffsetNone,
  silhouette: _d3Shape.stackOffsetSilhouette,
  wiggle: _d3Shape.stackOffsetWiggle
};

var STACK_OFFSET_NAMES = exports.STACK_OFFSET_NAMES = Object.keys(STACK_OFFSETS);

function stackOffset(offset) {
  return STACK_OFFSETS[offset] || STACK_OFFSETS.none;
}

/***/ }),

/***/ 601:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Arc = __webpack_require__(602);

Object.defineProperty(exports, 'Arc', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Arc).default;
  }
});

var _Pie = __webpack_require__(628);

Object.defineProperty(exports, 'Pie', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Pie).default;
  }
});

var _Line = __webpack_require__(630);

Object.defineProperty(exports, 'Line', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Line).default;
  }
});

var _LinePath = __webpack_require__(633);

Object.defineProperty(exports, 'LinePath', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_LinePath).default;
  }
});

var _LineRadial = __webpack_require__(635);

Object.defineProperty(exports, 'LineRadial', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_LineRadial).default;
  }
});

var _LinkHorizontal = __webpack_require__(636);

Object.defineProperty(exports, 'LinkHorizontal', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_LinkHorizontal).default;
  }
});

var _LinkVertical = __webpack_require__(637);

Object.defineProperty(exports, 'LinkVertical', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_LinkVertical).default;
  }
});

var _LinkRadial = __webpack_require__(638);

Object.defineProperty(exports, 'LinkRadial', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_LinkRadial).default;
  }
});

var _LinkHorizontalCurve = __webpack_require__(639);

Object.defineProperty(exports, 'LinkHorizontalCurve', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_LinkHorizontalCurve).default;
  }
});

var _LinkVerticalCurve = __webpack_require__(640);

Object.defineProperty(exports, 'LinkVerticalCurve', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_LinkVerticalCurve).default;
  }
});

var _LinkRadialCurve = __webpack_require__(641);

Object.defineProperty(exports, 'LinkRadialCurve', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_LinkRadialCurve).default;
  }
});

var _LinkHorizontalLine = __webpack_require__(642);

Object.defineProperty(exports, 'LinkHorizontalLine', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_LinkHorizontalLine).default;
  }
});

var _LinkVerticalLine = __webpack_require__(643);

Object.defineProperty(exports, 'LinkVerticalLine', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_LinkVerticalLine).default;
  }
});

var _LinkRadialLine = __webpack_require__(644);

Object.defineProperty(exports, 'LinkRadialLine', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_LinkRadialLine).default;
  }
});

var _LinkHorizontalStep = __webpack_require__(645);

Object.defineProperty(exports, 'LinkHorizontalStep', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_LinkHorizontalStep).default;
  }
});

var _LinkVerticalStep = __webpack_require__(646);

Object.defineProperty(exports, 'LinkVerticalStep', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_LinkVerticalStep).default;
  }
});

var _LinkRadialStep = __webpack_require__(647);

Object.defineProperty(exports, 'LinkRadialStep', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_LinkRadialStep).default;
  }
});

var _Area = __webpack_require__(648);

Object.defineProperty(exports, 'Area', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Area).default;
  }
});

var _AreaClosed = __webpack_require__(649);

Object.defineProperty(exports, 'AreaClosed', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_AreaClosed).default;
  }
});

var _AreaStack = __webpack_require__(650);

Object.defineProperty(exports, 'AreaStack', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_AreaStack).default;
  }
});

var _Bar = __webpack_require__(579);

Object.defineProperty(exports, 'Bar', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Bar).default;
  }
});

var _BarGroup = __webpack_require__(651);

Object.defineProperty(exports, 'BarGroup', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_BarGroup).default;
  }
});

var _BarStack = __webpack_require__(652);

Object.defineProperty(exports, 'BarStack', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_BarStack).default;
  }
});

var _BarStackHorizontal = __webpack_require__(653);

Object.defineProperty(exports, 'BarStackHorizontal', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_BarStackHorizontal).default;
  }
});

var _Stack = __webpack_require__(654);

Object.defineProperty(exports, 'Stack', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Stack).default;
  }
});

var _callOrValue = __webpack_require__(598);

Object.defineProperty(exports, 'callOrValue', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_callOrValue).default;
  }
});

var _stackOffset = __webpack_require__(600);

Object.defineProperty(exports, 'stackOffset', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_stackOffset).default;
  }
});
Object.defineProperty(exports, 'STACK_OFFSETS', {
  enumerable: true,
  get: function get() {
    return _stackOffset.STACK_OFFSETS;
  }
});
Object.defineProperty(exports, 'STACK_OFFSET_NAMES', {
  enumerable: true,
  get: function get() {
    return _stackOffset.STACK_OFFSET_NAMES;
  }
});

var _stackOrder = __webpack_require__(599);

Object.defineProperty(exports, 'stackOrder', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_stackOrder).default;
  }
});
Object.defineProperty(exports, 'STACK_ORDERS', {
  enumerable: true,
  get: function get() {
    return _stackOrder.STACK_ORDERS;
  }
});
Object.defineProperty(exports, 'STACK_ORDER_NAMES', {
  enumerable: true,
  get: function get() {
    return _stackOrder.STACK_ORDER_NAMES;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ 602:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = Arc;

var _react = __webpack_require__(17);

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(566);

var _classnames2 = _interopRequireDefault(_classnames);

var _d3Shape = __webpack_require__(568);

var _additionalProps = __webpack_require__(567);

var _additionalProps2 = _interopRequireDefault(_additionalProps);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function Arc(_ref) {
  var className = _ref.className,
      data = _ref.data,
      centroid = _ref.centroid,
      innerRadius = _ref.innerRadius,
      outerRadius = _ref.outerRadius,
      cornerRadius = _ref.cornerRadius,
      startAngle = _ref.startAngle,
      endAngle = _ref.endAngle,
      padAngle = _ref.padAngle,
      padRadius = _ref.padRadius,
      restProps = _objectWithoutProperties(_ref, ['className', 'data', 'centroid', 'innerRadius', 'outerRadius', 'cornerRadius', 'startAngle', 'endAngle', 'padAngle', 'padRadius']);

  var arc = (0, _d3Shape.arc)();
  if (centroid) arc.centroid(centroid);
  if (innerRadius) arc.innerRadius(innerRadius);
  if (outerRadius) arc.outerRadius(outerRadius);
  if (cornerRadius) arc.cornerRadius(cornerRadius);
  if (startAngle) arc.startAngle(startAngle);
  if (endAngle) arc.endAngle(endAngle);
  if (padAngle) arc.padAngle(padAngle);
  if (padRadius) arc.padRadius(padRadius);
  return _react2.default.createElement('path', _extends({
    className: (0, _classnames2.default)('vx-arc', className),
    d: arc(data)
  }, (0, _additionalProps2.default)(restProps, data)));
}

/***/ }),

/***/ 603:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_path__ = __webpack_require__(570);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__constant__ = __webpack_require__(569);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__math__ = __webpack_require__(571);




function arcInnerRadius(d) {
  return d.innerRadius;
}

function arcOuterRadius(d) {
  return d.outerRadius;
}

function arcStartAngle(d) {
  return d.startAngle;
}

function arcEndAngle(d) {
  return d.endAngle;
}

function arcPadAngle(d) {
  return d && d.padAngle; // Note: optional!
}

function intersect(x0, y0, x1, y1, x2, y2, x3, y3) {
  var x10 = x1 - x0, y10 = y1 - y0,
      x32 = x3 - x2, y32 = y3 - y2,
      t = (x32 * (y0 - y2) - y32 * (x0 - x2)) / (y32 * x10 - x32 * y10);
  return [x0 + t * x10, y0 + t * y10];
}

// Compute perpendicular offset line of length rc.
// http://mathworld.wolfram.com/Circle-LineIntersection.html
function cornerTangents(x0, y0, x1, y1, r1, rc, cw) {
  var x01 = x0 - x1,
      y01 = y0 - y1,
      lo = (cw ? rc : -rc) / Object(__WEBPACK_IMPORTED_MODULE_2__math__["l" /* sqrt */])(x01 * x01 + y01 * y01),
      ox = lo * y01,
      oy = -lo * x01,
      x11 = x0 + ox,
      y11 = y0 + oy,
      x10 = x1 + ox,
      y10 = y1 + oy,
      x00 = (x11 + x10) / 2,
      y00 = (y11 + y10) / 2,
      dx = x10 - x11,
      dy = y10 - y11,
      d2 = dx * dx + dy * dy,
      r = r1 - rc,
      D = x11 * y10 - x10 * y11,
      d = (dy < 0 ? -1 : 1) * Object(__WEBPACK_IMPORTED_MODULE_2__math__["l" /* sqrt */])(Object(__WEBPACK_IMPORTED_MODULE_2__math__["h" /* max */])(0, r * r * d2 - D * D)),
      cx0 = (D * dy - dx * d) / d2,
      cy0 = (-D * dx - dy * d) / d2,
      cx1 = (D * dy + dx * d) / d2,
      cy1 = (-D * dx + dy * d) / d2,
      dx0 = cx0 - x00,
      dy0 = cy0 - y00,
      dx1 = cx1 - x00,
      dy1 = cy1 - y00;

  // Pick the closer of the two intersection points.
  // TODO Is there a faster way to determine which intersection to use?
  if (dx0 * dx0 + dy0 * dy0 > dx1 * dx1 + dy1 * dy1) cx0 = cx1, cy0 = cy1;

  return {
    cx: cx0,
    cy: cy0,
    x01: -ox,
    y01: -oy,
    x11: cx0 * (r1 / r - 1),
    y11: cy0 * (r1 / r - 1)
  };
}

/* harmony default export */ __webpack_exports__["a"] = (function() {
  var innerRadius = arcInnerRadius,
      outerRadius = arcOuterRadius,
      cornerRadius = Object(__WEBPACK_IMPORTED_MODULE_1__constant__["a" /* default */])(0),
      padRadius = null,
      startAngle = arcStartAngle,
      endAngle = arcEndAngle,
      padAngle = arcPadAngle,
      context = null;

  function arc() {
    var buffer,
        r,
        r0 = +innerRadius.apply(this, arguments),
        r1 = +outerRadius.apply(this, arguments),
        a0 = startAngle.apply(this, arguments) - __WEBPACK_IMPORTED_MODULE_2__math__["g" /* halfPi */],
        a1 = endAngle.apply(this, arguments) - __WEBPACK_IMPORTED_MODULE_2__math__["g" /* halfPi */],
        da = Object(__WEBPACK_IMPORTED_MODULE_2__math__["a" /* abs */])(a1 - a0),
        cw = a1 > a0;

    if (!context) context = buffer = Object(__WEBPACK_IMPORTED_MODULE_0_d3_path__["a" /* path */])();

    // Ensure that the outer radius is always larger than the inner radius.
    if (r1 < r0) r = r1, r1 = r0, r0 = r;

    // Is it a point?
    if (!(r1 > __WEBPACK_IMPORTED_MODULE_2__math__["f" /* epsilon */])) context.moveTo(0, 0);

    // Or is it a circle or annulus?
    else if (da > __WEBPACK_IMPORTED_MODULE_2__math__["m" /* tau */] - __WEBPACK_IMPORTED_MODULE_2__math__["f" /* epsilon */]) {
      context.moveTo(r1 * Object(__WEBPACK_IMPORTED_MODULE_2__math__["e" /* cos */])(a0), r1 * Object(__WEBPACK_IMPORTED_MODULE_2__math__["k" /* sin */])(a0));
      context.arc(0, 0, r1, a0, a1, !cw);
      if (r0 > __WEBPACK_IMPORTED_MODULE_2__math__["f" /* epsilon */]) {
        context.moveTo(r0 * Object(__WEBPACK_IMPORTED_MODULE_2__math__["e" /* cos */])(a1), r0 * Object(__WEBPACK_IMPORTED_MODULE_2__math__["k" /* sin */])(a1));
        context.arc(0, 0, r0, a1, a0, cw);
      }
    }

    // Or is it a circular or annular sector?
    else {
      var a01 = a0,
          a11 = a1,
          a00 = a0,
          a10 = a1,
          da0 = da,
          da1 = da,
          ap = padAngle.apply(this, arguments) / 2,
          rp = (ap > __WEBPACK_IMPORTED_MODULE_2__math__["f" /* epsilon */]) && (padRadius ? +padRadius.apply(this, arguments) : Object(__WEBPACK_IMPORTED_MODULE_2__math__["l" /* sqrt */])(r0 * r0 + r1 * r1)),
          rc = Object(__WEBPACK_IMPORTED_MODULE_2__math__["i" /* min */])(Object(__WEBPACK_IMPORTED_MODULE_2__math__["a" /* abs */])(r1 - r0) / 2, +cornerRadius.apply(this, arguments)),
          rc0 = rc,
          rc1 = rc,
          t0,
          t1;

      // Apply padding? Note that since r1 ≥ r0, da1 ≥ da0.
      if (rp > __WEBPACK_IMPORTED_MODULE_2__math__["f" /* epsilon */]) {
        var p0 = Object(__WEBPACK_IMPORTED_MODULE_2__math__["c" /* asin */])(rp / r0 * Object(__WEBPACK_IMPORTED_MODULE_2__math__["k" /* sin */])(ap)),
            p1 = Object(__WEBPACK_IMPORTED_MODULE_2__math__["c" /* asin */])(rp / r1 * Object(__WEBPACK_IMPORTED_MODULE_2__math__["k" /* sin */])(ap));
        if ((da0 -= p0 * 2) > __WEBPACK_IMPORTED_MODULE_2__math__["f" /* epsilon */]) p0 *= (cw ? 1 : -1), a00 += p0, a10 -= p0;
        else da0 = 0, a00 = a10 = (a0 + a1) / 2;
        if ((da1 -= p1 * 2) > __WEBPACK_IMPORTED_MODULE_2__math__["f" /* epsilon */]) p1 *= (cw ? 1 : -1), a01 += p1, a11 -= p1;
        else da1 = 0, a01 = a11 = (a0 + a1) / 2;
      }

      var x01 = r1 * Object(__WEBPACK_IMPORTED_MODULE_2__math__["e" /* cos */])(a01),
          y01 = r1 * Object(__WEBPACK_IMPORTED_MODULE_2__math__["k" /* sin */])(a01),
          x10 = r0 * Object(__WEBPACK_IMPORTED_MODULE_2__math__["e" /* cos */])(a10),
          y10 = r0 * Object(__WEBPACK_IMPORTED_MODULE_2__math__["k" /* sin */])(a10);

      // Apply rounded corners?
      if (rc > __WEBPACK_IMPORTED_MODULE_2__math__["f" /* epsilon */]) {
        var x11 = r1 * Object(__WEBPACK_IMPORTED_MODULE_2__math__["e" /* cos */])(a11),
            y11 = r1 * Object(__WEBPACK_IMPORTED_MODULE_2__math__["k" /* sin */])(a11),
            x00 = r0 * Object(__WEBPACK_IMPORTED_MODULE_2__math__["e" /* cos */])(a00),
            y00 = r0 * Object(__WEBPACK_IMPORTED_MODULE_2__math__["k" /* sin */])(a00);

        // Restrict the corner radius according to the sector angle.
        if (da < __WEBPACK_IMPORTED_MODULE_2__math__["j" /* pi */]) {
          var oc = da0 > __WEBPACK_IMPORTED_MODULE_2__math__["f" /* epsilon */] ? intersect(x01, y01, x00, y00, x11, y11, x10, y10) : [x10, y10],
              ax = x01 - oc[0],
              ay = y01 - oc[1],
              bx = x11 - oc[0],
              by = y11 - oc[1],
              kc = 1 / Object(__WEBPACK_IMPORTED_MODULE_2__math__["k" /* sin */])(Object(__WEBPACK_IMPORTED_MODULE_2__math__["b" /* acos */])((ax * bx + ay * by) / (Object(__WEBPACK_IMPORTED_MODULE_2__math__["l" /* sqrt */])(ax * ax + ay * ay) * Object(__WEBPACK_IMPORTED_MODULE_2__math__["l" /* sqrt */])(bx * bx + by * by))) / 2),
              lc = Object(__WEBPACK_IMPORTED_MODULE_2__math__["l" /* sqrt */])(oc[0] * oc[0] + oc[1] * oc[1]);
          rc0 = Object(__WEBPACK_IMPORTED_MODULE_2__math__["i" /* min */])(rc, (r0 - lc) / (kc - 1));
          rc1 = Object(__WEBPACK_IMPORTED_MODULE_2__math__["i" /* min */])(rc, (r1 - lc) / (kc + 1));
        }
      }

      // Is the sector collapsed to a line?
      if (!(da1 > __WEBPACK_IMPORTED_MODULE_2__math__["f" /* epsilon */])) context.moveTo(x01, y01);

      // Does the sector’s outer ring have rounded corners?
      else if (rc1 > __WEBPACK_IMPORTED_MODULE_2__math__["f" /* epsilon */]) {
        t0 = cornerTangents(x00, y00, x01, y01, r1, rc1, cw);
        t1 = cornerTangents(x11, y11, x10, y10, r1, rc1, cw);

        context.moveTo(t0.cx + t0.x01, t0.cy + t0.y01);

        // Have the corners merged?
        if (rc1 < rc) context.arc(t0.cx, t0.cy, rc1, Object(__WEBPACK_IMPORTED_MODULE_2__math__["d" /* atan2 */])(t0.y01, t0.x01), Object(__WEBPACK_IMPORTED_MODULE_2__math__["d" /* atan2 */])(t1.y01, t1.x01), !cw);

        // Otherwise, draw the two corners and the ring.
        else {
          context.arc(t0.cx, t0.cy, rc1, Object(__WEBPACK_IMPORTED_MODULE_2__math__["d" /* atan2 */])(t0.y01, t0.x01), Object(__WEBPACK_IMPORTED_MODULE_2__math__["d" /* atan2 */])(t0.y11, t0.x11), !cw);
          context.arc(0, 0, r1, Object(__WEBPACK_IMPORTED_MODULE_2__math__["d" /* atan2 */])(t0.cy + t0.y11, t0.cx + t0.x11), Object(__WEBPACK_IMPORTED_MODULE_2__math__["d" /* atan2 */])(t1.cy + t1.y11, t1.cx + t1.x11), !cw);
          context.arc(t1.cx, t1.cy, rc1, Object(__WEBPACK_IMPORTED_MODULE_2__math__["d" /* atan2 */])(t1.y11, t1.x11), Object(__WEBPACK_IMPORTED_MODULE_2__math__["d" /* atan2 */])(t1.y01, t1.x01), !cw);
        }
      }

      // Or is the outer ring just a circular arc?
      else context.moveTo(x01, y01), context.arc(0, 0, r1, a01, a11, !cw);

      // Is there no inner ring, and it’s a circular sector?
      // Or perhaps it’s an annular sector collapsed due to padding?
      if (!(r0 > __WEBPACK_IMPORTED_MODULE_2__math__["f" /* epsilon */]) || !(da0 > __WEBPACK_IMPORTED_MODULE_2__math__["f" /* epsilon */])) context.lineTo(x10, y10);

      // Does the sector’s inner ring (or point) have rounded corners?
      else if (rc0 > __WEBPACK_IMPORTED_MODULE_2__math__["f" /* epsilon */]) {
        t0 = cornerTangents(x10, y10, x11, y11, r0, -rc0, cw);
        t1 = cornerTangents(x01, y01, x00, y00, r0, -rc0, cw);

        context.lineTo(t0.cx + t0.x01, t0.cy + t0.y01);

        // Have the corners merged?
        if (rc0 < rc) context.arc(t0.cx, t0.cy, rc0, Object(__WEBPACK_IMPORTED_MODULE_2__math__["d" /* atan2 */])(t0.y01, t0.x01), Object(__WEBPACK_IMPORTED_MODULE_2__math__["d" /* atan2 */])(t1.y01, t1.x01), !cw);

        // Otherwise, draw the two corners and the ring.
        else {
          context.arc(t0.cx, t0.cy, rc0, Object(__WEBPACK_IMPORTED_MODULE_2__math__["d" /* atan2 */])(t0.y01, t0.x01), Object(__WEBPACK_IMPORTED_MODULE_2__math__["d" /* atan2 */])(t0.y11, t0.x11), !cw);
          context.arc(0, 0, r0, Object(__WEBPACK_IMPORTED_MODULE_2__math__["d" /* atan2 */])(t0.cy + t0.y11, t0.cx + t0.x11), Object(__WEBPACK_IMPORTED_MODULE_2__math__["d" /* atan2 */])(t1.cy + t1.y11, t1.cx + t1.x11), cw);
          context.arc(t1.cx, t1.cy, rc0, Object(__WEBPACK_IMPORTED_MODULE_2__math__["d" /* atan2 */])(t1.y11, t1.x11), Object(__WEBPACK_IMPORTED_MODULE_2__math__["d" /* atan2 */])(t1.y01, t1.x01), !cw);
        }
      }

      // Or is the inner ring just a circular arc?
      else context.arc(0, 0, r0, a10, a00, cw);
    }

    context.closePath();

    if (buffer) return context = null, buffer + "" || null;
  }

  arc.centroid = function() {
    var r = (+innerRadius.apply(this, arguments) + +outerRadius.apply(this, arguments)) / 2,
        a = (+startAngle.apply(this, arguments) + +endAngle.apply(this, arguments)) / 2 - __WEBPACK_IMPORTED_MODULE_2__math__["j" /* pi */] / 2;
    return [Object(__WEBPACK_IMPORTED_MODULE_2__math__["e" /* cos */])(a) * r, Object(__WEBPACK_IMPORTED_MODULE_2__math__["k" /* sin */])(a) * r];
  };

  arc.innerRadius = function(_) {
    return arguments.length ? (innerRadius = typeof _ === "function" ? _ : Object(__WEBPACK_IMPORTED_MODULE_1__constant__["a" /* default */])(+_), arc) : innerRadius;
  };

  arc.outerRadius = function(_) {
    return arguments.length ? (outerRadius = typeof _ === "function" ? _ : Object(__WEBPACK_IMPORTED_MODULE_1__constant__["a" /* default */])(+_), arc) : outerRadius;
  };

  arc.cornerRadius = function(_) {
    return arguments.length ? (cornerRadius = typeof _ === "function" ? _ : Object(__WEBPACK_IMPORTED_MODULE_1__constant__["a" /* default */])(+_), arc) : cornerRadius;
  };

  arc.padRadius = function(_) {
    return arguments.length ? (padRadius = _ == null ? null : typeof _ === "function" ? _ : Object(__WEBPACK_IMPORTED_MODULE_1__constant__["a" /* default */])(+_), arc) : padRadius;
  };

  arc.startAngle = function(_) {
    return arguments.length ? (startAngle = typeof _ === "function" ? _ : Object(__WEBPACK_IMPORTED_MODULE_1__constant__["a" /* default */])(+_), arc) : startAngle;
  };

  arc.endAngle = function(_) {
    return arguments.length ? (endAngle = typeof _ === "function" ? _ : Object(__WEBPACK_IMPORTED_MODULE_1__constant__["a" /* default */])(+_), arc) : endAngle;
  };

  arc.padAngle = function(_) {
    return arguments.length ? (padAngle = typeof _ === "function" ? _ : Object(__WEBPACK_IMPORTED_MODULE_1__constant__["a" /* default */])(+_), arc) : padAngle;
  };

  arc.context = function(_) {
    return arguments.length ? ((context = _ == null ? null : _), arc) : context;
  };

  return arc;
});


/***/ }),

/***/ 604:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var pi = Math.PI,
    tau = 2 * pi,
    epsilon = 1e-6,
    tauEpsilon = tau - epsilon;

function Path() {
  this._x0 = this._y0 = // start of current subpath
  this._x1 = this._y1 = null; // end of current subpath
  this._ = "";
}

function path() {
  return new Path;
}

Path.prototype = path.prototype = {
  constructor: Path,
  moveTo: function(x, y) {
    this._ += "M" + (this._x0 = this._x1 = +x) + "," + (this._y0 = this._y1 = +y);
  },
  closePath: function() {
    if (this._x1 !== null) {
      this._x1 = this._x0, this._y1 = this._y0;
      this._ += "Z";
    }
  },
  lineTo: function(x, y) {
    this._ += "L" + (this._x1 = +x) + "," + (this._y1 = +y);
  },
  quadraticCurveTo: function(x1, y1, x, y) {
    this._ += "Q" + (+x1) + "," + (+y1) + "," + (this._x1 = +x) + "," + (this._y1 = +y);
  },
  bezierCurveTo: function(x1, y1, x2, y2, x, y) {
    this._ += "C" + (+x1) + "," + (+y1) + "," + (+x2) + "," + (+y2) + "," + (this._x1 = +x) + "," + (this._y1 = +y);
  },
  arcTo: function(x1, y1, x2, y2, r) {
    x1 = +x1, y1 = +y1, x2 = +x2, y2 = +y2, r = +r;
    var x0 = this._x1,
        y0 = this._y1,
        x21 = x2 - x1,
        y21 = y2 - y1,
        x01 = x0 - x1,
        y01 = y0 - y1,
        l01_2 = x01 * x01 + y01 * y01;

    // Is the radius negative? Error.
    if (r < 0) throw new Error("negative radius: " + r);

    // Is this path empty? Move to (x1,y1).
    if (this._x1 === null) {
      this._ += "M" + (this._x1 = x1) + "," + (this._y1 = y1);
    }

    // Or, is (x1,y1) coincident with (x0,y0)? Do nothing.
    else if (!(l01_2 > epsilon)) {}

    // Or, are (x0,y0), (x1,y1) and (x2,y2) collinear?
    // Equivalently, is (x1,y1) coincident with (x2,y2)?
    // Or, is the radius zero? Line to (x1,y1).
    else if (!(Math.abs(y01 * x21 - y21 * x01) > epsilon) || !r) {
      this._ += "L" + (this._x1 = x1) + "," + (this._y1 = y1);
    }

    // Otherwise, draw an arc!
    else {
      var x20 = x2 - x0,
          y20 = y2 - y0,
          l21_2 = x21 * x21 + y21 * y21,
          l20_2 = x20 * x20 + y20 * y20,
          l21 = Math.sqrt(l21_2),
          l01 = Math.sqrt(l01_2),
          l = r * Math.tan((pi - Math.acos((l21_2 + l01_2 - l20_2) / (2 * l21 * l01))) / 2),
          t01 = l / l01,
          t21 = l / l21;

      // If the start tangent is not coincident with (x0,y0), line to.
      if (Math.abs(t01 - 1) > epsilon) {
        this._ += "L" + (x1 + t01 * x01) + "," + (y1 + t01 * y01);
      }

      this._ += "A" + r + "," + r + ",0,0," + (+(y01 * x20 > x01 * y20)) + "," + (this._x1 = x1 + t21 * x21) + "," + (this._y1 = y1 + t21 * y21);
    }
  },
  arc: function(x, y, r, a0, a1, ccw) {
    x = +x, y = +y, r = +r;
    var dx = r * Math.cos(a0),
        dy = r * Math.sin(a0),
        x0 = x + dx,
        y0 = y + dy,
        cw = 1 ^ ccw,
        da = ccw ? a0 - a1 : a1 - a0;

    // Is the radius negative? Error.
    if (r < 0) throw new Error("negative radius: " + r);

    // Is this path empty? Move to (x0,y0).
    if (this._x1 === null) {
      this._ += "M" + x0 + "," + y0;
    }

    // Or, is (x0,y0) not coincident with the previous point? Line to (x0,y0).
    else if (Math.abs(this._x1 - x0) > epsilon || Math.abs(this._y1 - y0) > epsilon) {
      this._ += "L" + x0 + "," + y0;
    }

    // Is this arc empty? We’re done.
    if (!r) return;

    // Does the angle go the wrong way? Flip the direction.
    if (da < 0) da = da % tau + tau;

    // Is this a complete circle? Draw two arcs to complete the circle.
    if (da > tauEpsilon) {
      this._ += "A" + r + "," + r + ",0,1," + cw + "," + (x - dx) + "," + (y - dy) + "A" + r + "," + r + ",0,1," + cw + "," + (this._x1 = x0) + "," + (this._y1 = y0);
    }

    // Is this arc non-empty? Draw an arc!
    else if (da > epsilon) {
      this._ += "A" + r + "," + r + ",0," + (+(da >= pi)) + "," + cw + "," + (this._x1 = x + r * Math.cos(a1)) + "," + (this._y1 = y + r * Math.sin(a1));
    }
  },
  rect: function(x, y, w, h) {
    this._ += "M" + (this._x0 = this._x1 = +x) + "," + (this._y0 = this._y1 = +y) + "h" + (+w) + "v" + (+h) + "h" + (-w) + "Z";
  },
  toString: function() {
    return this._;
  }
};

/* harmony default export */ __webpack_exports__["a"] = (path);


/***/ }),

/***/ 605:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constant__ = __webpack_require__(569);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__descending__ = __webpack_require__(606);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__identity__ = __webpack_require__(607);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__math__ = __webpack_require__(571);





/* harmony default export */ __webpack_exports__["a"] = (function() {
  var value = __WEBPACK_IMPORTED_MODULE_2__identity__["a" /* default */],
      sortValues = __WEBPACK_IMPORTED_MODULE_1__descending__["a" /* default */],
      sort = null,
      startAngle = Object(__WEBPACK_IMPORTED_MODULE_0__constant__["a" /* default */])(0),
      endAngle = Object(__WEBPACK_IMPORTED_MODULE_0__constant__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_3__math__["m" /* tau */]),
      padAngle = Object(__WEBPACK_IMPORTED_MODULE_0__constant__["a" /* default */])(0);

  function pie(data) {
    var i,
        n = data.length,
        j,
        k,
        sum = 0,
        index = new Array(n),
        arcs = new Array(n),
        a0 = +startAngle.apply(this, arguments),
        da = Math.min(__WEBPACK_IMPORTED_MODULE_3__math__["m" /* tau */], Math.max(-__WEBPACK_IMPORTED_MODULE_3__math__["m" /* tau */], endAngle.apply(this, arguments) - a0)),
        a1,
        p = Math.min(Math.abs(da) / n, padAngle.apply(this, arguments)),
        pa = p * (da < 0 ? -1 : 1),
        v;

    for (i = 0; i < n; ++i) {
      if ((v = arcs[index[i] = i] = +value(data[i], i, data)) > 0) {
        sum += v;
      }
    }

    // Optionally sort the arcs by previously-computed values or by data.
    if (sortValues != null) index.sort(function(i, j) { return sortValues(arcs[i], arcs[j]); });
    else if (sort != null) index.sort(function(i, j) { return sort(data[i], data[j]); });

    // Compute the arcs! They are stored in the original data's order.
    for (i = 0, k = sum ? (da - n * pa) / sum : 0; i < n; ++i, a0 = a1) {
      j = index[i], v = arcs[j], a1 = a0 + (v > 0 ? v * k : 0) + pa, arcs[j] = {
        data: data[j],
        index: i,
        value: v,
        startAngle: a0,
        endAngle: a1,
        padAngle: p
      };
    }

    return arcs;
  }

  pie.value = function(_) {
    return arguments.length ? (value = typeof _ === "function" ? _ : Object(__WEBPACK_IMPORTED_MODULE_0__constant__["a" /* default */])(+_), pie) : value;
  };

  pie.sortValues = function(_) {
    return arguments.length ? (sortValues = _, sort = null, pie) : sortValues;
  };

  pie.sort = function(_) {
    return arguments.length ? (sort = _, sortValues = null, pie) : sort;
  };

  pie.startAngle = function(_) {
    return arguments.length ? (startAngle = typeof _ === "function" ? _ : Object(__WEBPACK_IMPORTED_MODULE_0__constant__["a" /* default */])(+_), pie) : startAngle;
  };

  pie.endAngle = function(_) {
    return arguments.length ? (endAngle = typeof _ === "function" ? _ : Object(__WEBPACK_IMPORTED_MODULE_0__constant__["a" /* default */])(+_), pie) : endAngle;
  };

  pie.padAngle = function(_) {
    return arguments.length ? (padAngle = typeof _ === "function" ? _ : Object(__WEBPACK_IMPORTED_MODULE_0__constant__["a" /* default */])(+_), pie) : padAngle;
  };

  return pie;
});


/***/ }),

/***/ 606:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(a, b) {
  return b < a ? -1 : b > a ? 1 : b >= a ? 0 : NaN;
});


/***/ }),

/***/ 607:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(d) {
  return d;
});


/***/ }),

/***/ 608:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__curve_radial__ = __webpack_require__(585);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__area__ = __webpack_require__(584);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lineRadial__ = __webpack_require__(586);




/* harmony default export */ __webpack_exports__["a"] = (function() {
  var a = Object(__WEBPACK_IMPORTED_MODULE_1__area__["a" /* default */])().curve(__WEBPACK_IMPORTED_MODULE_0__curve_radial__["a" /* curveRadialLinear */]),
      c = a.curve,
      x0 = a.lineX0,
      x1 = a.lineX1,
      y0 = a.lineY0,
      y1 = a.lineY1;

  a.angle = a.x, delete a.x;
  a.startAngle = a.x0, delete a.x0;
  a.endAngle = a.x1, delete a.x1;
  a.radius = a.y, delete a.y;
  a.innerRadius = a.y0, delete a.y0;
  a.outerRadius = a.y1, delete a.y1;
  a.lineStartAngle = function() { return Object(__WEBPACK_IMPORTED_MODULE_2__lineRadial__["b" /* lineRadial */])(x0()); }, delete a.lineX0;
  a.lineEndAngle = function() { return Object(__WEBPACK_IMPORTED_MODULE_2__lineRadial__["b" /* lineRadial */])(x1()); }, delete a.lineX1;
  a.lineInnerRadius = function() { return Object(__WEBPACK_IMPORTED_MODULE_2__lineRadial__["b" /* lineRadial */])(y0()); }, delete a.lineY0;
  a.lineOuterRadius = function() { return Object(__WEBPACK_IMPORTED_MODULE_2__lineRadial__["b" /* lineRadial */])(y1()); }, delete a.lineY1;

  a.curve = function(_) {
    return arguments.length ? c(Object(__WEBPACK_IMPORTED_MODULE_0__curve_radial__["b" /* default */])(_)) : c()._curve;
  };

  return a;
});


/***/ }),

/***/ 609:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = linkHorizontal;
/* harmony export (immutable) */ __webpack_exports__["c"] = linkVertical;
/* harmony export (immutable) */ __webpack_exports__["b"] = linkRadial;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_path__ = __webpack_require__(570);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__array__ = __webpack_require__(588);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__constant__ = __webpack_require__(569);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__point__ = __webpack_require__(581);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pointRadial__ = __webpack_require__(587);






function linkSource(d) {
  return d.source;
}

function linkTarget(d) {
  return d.target;
}

function link(curve) {
  var source = linkSource,
      target = linkTarget,
      x = __WEBPACK_IMPORTED_MODULE_3__point__["a" /* x */],
      y = __WEBPACK_IMPORTED_MODULE_3__point__["b" /* y */],
      context = null;

  function link() {
    var buffer, argv = __WEBPACK_IMPORTED_MODULE_1__array__["a" /* slice */].call(arguments), s = source.apply(this, argv), t = target.apply(this, argv);
    if (!context) context = buffer = Object(__WEBPACK_IMPORTED_MODULE_0_d3_path__["a" /* path */])();
    curve(context, +x.apply(this, (argv[0] = s, argv)), +y.apply(this, argv), +x.apply(this, (argv[0] = t, argv)), +y.apply(this, argv));
    if (buffer) return context = null, buffer + "" || null;
  }

  link.source = function(_) {
    return arguments.length ? (source = _, link) : source;
  };

  link.target = function(_) {
    return arguments.length ? (target = _, link) : target;
  };

  link.x = function(_) {
    return arguments.length ? (x = typeof _ === "function" ? _ : Object(__WEBPACK_IMPORTED_MODULE_2__constant__["a" /* default */])(+_), link) : x;
  };

  link.y = function(_) {
    return arguments.length ? (y = typeof _ === "function" ? _ : Object(__WEBPACK_IMPORTED_MODULE_2__constant__["a" /* default */])(+_), link) : y;
  };

  link.context = function(_) {
    return arguments.length ? ((context = _ == null ? null : _), link) : context;
  };

  return link;
}

function curveHorizontal(context, x0, y0, x1, y1) {
  context.moveTo(x0, y0);
  context.bezierCurveTo(x0 = (x0 + x1) / 2, y0, x0, y1, x1, y1);
}

function curveVertical(context, x0, y0, x1, y1) {
  context.moveTo(x0, y0);
  context.bezierCurveTo(x0, y0 = (y0 + y1) / 2, x1, y0, x1, y1);
}

function curveRadial(context, x0, y0, x1, y1) {
  var p0 = Object(__WEBPACK_IMPORTED_MODULE_4__pointRadial__["a" /* default */])(x0, y0),
      p1 = Object(__WEBPACK_IMPORTED_MODULE_4__pointRadial__["a" /* default */])(x0, y0 = (y0 + y1) / 2),
      p2 = Object(__WEBPACK_IMPORTED_MODULE_4__pointRadial__["a" /* default */])(x1, y0),
      p3 = Object(__WEBPACK_IMPORTED_MODULE_4__pointRadial__["a" /* default */])(x1, y1);
  context.moveTo(p0[0], p0[1]);
  context.bezierCurveTo(p1[0], p1[1], p2[0], p2[1], p3[0], p3[1]);
}

function linkHorizontal() {
  return link(curveHorizontal);
}

function linkVertical() {
  return link(curveVertical);
}

function linkRadial() {
  var l = link(curveRadial);
  l.angle = l.x, delete l.x;
  l.radius = l.y, delete l.y;
  return l;
}


/***/ }),

/***/ 610:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return symbols; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_path__ = __webpack_require__(570);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__symbol_circle__ = __webpack_require__(589);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__symbol_cross__ = __webpack_require__(590);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__symbol_diamond__ = __webpack_require__(591);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__symbol_star__ = __webpack_require__(592);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__symbol_square__ = __webpack_require__(593);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__symbol_triangle__ = __webpack_require__(594);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__symbol_wye__ = __webpack_require__(595);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__constant__ = __webpack_require__(569);










var symbols = [
  __WEBPACK_IMPORTED_MODULE_1__symbol_circle__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_2__symbol_cross__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_3__symbol_diamond__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_5__symbol_square__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_4__symbol_star__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_6__symbol_triangle__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_7__symbol_wye__["a" /* default */]
];

/* harmony default export */ __webpack_exports__["a"] = (function() {
  var type = Object(__WEBPACK_IMPORTED_MODULE_8__constant__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_1__symbol_circle__["a" /* default */]),
      size = Object(__WEBPACK_IMPORTED_MODULE_8__constant__["a" /* default */])(64),
      context = null;

  function symbol() {
    var buffer;
    if (!context) context = buffer = Object(__WEBPACK_IMPORTED_MODULE_0_d3_path__["a" /* path */])();
    type.apply(this, arguments).draw(context, +size.apply(this, arguments));
    if (buffer) return context = null, buffer + "" || null;
  }

  symbol.type = function(_) {
    return arguments.length ? (type = typeof _ === "function" ? _ : Object(__WEBPACK_IMPORTED_MODULE_8__constant__["a" /* default */])(_), symbol) : type;
  };

  symbol.size = function(_) {
    return arguments.length ? (size = typeof _ === "function" ? _ : Object(__WEBPACK_IMPORTED_MODULE_8__constant__["a" /* default */])(+_), symbol) : size;
  };

  symbol.context = function(_) {
    return arguments.length ? (context = _ == null ? null : _, symbol) : context;
  };

  return symbol;
});


/***/ }),

/***/ 611:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__noop__ = __webpack_require__(576);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__basis__ = __webpack_require__(577);



function BasisClosed(context) {
  this._context = context;
}

BasisClosed.prototype = {
  areaStart: __WEBPACK_IMPORTED_MODULE_0__noop__["a" /* default */],
  areaEnd: __WEBPACK_IMPORTED_MODULE_0__noop__["a" /* default */],
  lineStart: function() {
    this._x0 = this._x1 = this._x2 = this._x3 = this._x4 =
    this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = NaN;
    this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 1: {
        this._context.moveTo(this._x2, this._y2);
        this._context.closePath();
        break;
      }
      case 2: {
        this._context.moveTo((this._x2 + 2 * this._x3) / 3, (this._y2 + 2 * this._y3) / 3);
        this._context.lineTo((this._x3 + 2 * this._x2) / 3, (this._y3 + 2 * this._y2) / 3);
        this._context.closePath();
        break;
      }
      case 3: {
        this.point(this._x2, this._y2);
        this.point(this._x3, this._y3);
        this.point(this._x4, this._y4);
        break;
      }
    }
  },
  point: function(x, y) {
    x = +x, y = +y;
    switch (this._point) {
      case 0: this._point = 1; this._x2 = x, this._y2 = y; break;
      case 1: this._point = 2; this._x3 = x, this._y3 = y; break;
      case 2: this._point = 3; this._x4 = x, this._y4 = y; this._context.moveTo((this._x0 + 4 * this._x1 + x) / 6, (this._y0 + 4 * this._y1 + y) / 6); break;
      default: Object(__WEBPACK_IMPORTED_MODULE_1__basis__["c" /* point */])(this, x, y); break;
    }
    this._x0 = this._x1, this._x1 = x;
    this._y0 = this._y1, this._y1 = y;
  }
};

/* harmony default export */ __webpack_exports__["a"] = (function(context) {
  return new BasisClosed(context);
});


/***/ }),

/***/ 612:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__basis__ = __webpack_require__(577);


function BasisOpen(context) {
  this._context = context;
}

BasisOpen.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 =
    this._y0 = this._y1 = NaN;
    this._point = 0;
  },
  lineEnd: function() {
    if (this._line || (this._line !== 0 && this._point === 3)) this._context.closePath();
    this._line = 1 - this._line;
  },
  point: function(x, y) {
    x = +x, y = +y;
    switch (this._point) {
      case 0: this._point = 1; break;
      case 1: this._point = 2; break;
      case 2: this._point = 3; var x0 = (this._x0 + 4 * this._x1 + x) / 6, y0 = (this._y0 + 4 * this._y1 + y) / 6; this._line ? this._context.lineTo(x0, y0) : this._context.moveTo(x0, y0); break;
      case 3: this._point = 4; // proceed
      default: Object(__WEBPACK_IMPORTED_MODULE_0__basis__["c" /* point */])(this, x, y); break;
    }
    this._x0 = this._x1, this._x1 = x;
    this._y0 = this._y1, this._y1 = y;
  }
};

/* harmony default export */ __webpack_exports__["a"] = (function(context) {
  return new BasisOpen(context);
});


/***/ }),

/***/ 613:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__basis__ = __webpack_require__(577);


function Bundle(context, beta) {
  this._basis = new __WEBPACK_IMPORTED_MODULE_0__basis__["a" /* Basis */](context);
  this._beta = beta;
}

Bundle.prototype = {
  lineStart: function() {
    this._x = [];
    this._y = [];
    this._basis.lineStart();
  },
  lineEnd: function() {
    var x = this._x,
        y = this._y,
        j = x.length - 1;

    if (j > 0) {
      var x0 = x[0],
          y0 = y[0],
          dx = x[j] - x0,
          dy = y[j] - y0,
          i = -1,
          t;

      while (++i <= j) {
        t = i / j;
        this._basis.point(
          this._beta * x[i] + (1 - this._beta) * (x0 + t * dx),
          this._beta * y[i] + (1 - this._beta) * (y0 + t * dy)
        );
      }
    }

    this._x = this._y = null;
    this._basis.lineEnd();
  },
  point: function(x, y) {
    this._x.push(+x);
    this._y.push(+y);
  }
};

/* harmony default export */ __webpack_exports__["a"] = ((function custom(beta) {

  function bundle(context) {
    return beta === 1 ? new __WEBPACK_IMPORTED_MODULE_0__basis__["a" /* Basis */](context) : new Bundle(context, beta);
  }

  bundle.beta = function(beta) {
    return custom(+beta);
  };

  return bundle;
})(0.85));


/***/ }),

/***/ 614:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__cardinalClosed__ = __webpack_require__(596);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__noop__ = __webpack_require__(576);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__catmullRom__ = __webpack_require__(582);




function CatmullRomClosed(context, alpha) {
  this._context = context;
  this._alpha = alpha;
}

CatmullRomClosed.prototype = {
  areaStart: __WEBPACK_IMPORTED_MODULE_1__noop__["a" /* default */],
  areaEnd: __WEBPACK_IMPORTED_MODULE_1__noop__["a" /* default */],
  lineStart: function() {
    this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._x5 =
    this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = this._y5 = NaN;
    this._l01_a = this._l12_a = this._l23_a =
    this._l01_2a = this._l12_2a = this._l23_2a =
    this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 1: {
        this._context.moveTo(this._x3, this._y3);
        this._context.closePath();
        break;
      }
      case 2: {
        this._context.lineTo(this._x3, this._y3);
        this._context.closePath();
        break;
      }
      case 3: {
        this.point(this._x3, this._y3);
        this.point(this._x4, this._y4);
        this.point(this._x5, this._y5);
        break;
      }
    }
  },
  point: function(x, y) {
    x = +x, y = +y;

    if (this._point) {
      var x23 = this._x2 - x,
          y23 = this._y2 - y;
      this._l23_a = Math.sqrt(this._l23_2a = Math.pow(x23 * x23 + y23 * y23, this._alpha));
    }

    switch (this._point) {
      case 0: this._point = 1; this._x3 = x, this._y3 = y; break;
      case 1: this._point = 2; this._context.moveTo(this._x4 = x, this._y4 = y); break;
      case 2: this._point = 3; this._x5 = x, this._y5 = y; break;
      default: Object(__WEBPACK_IMPORTED_MODULE_2__catmullRom__["b" /* point */])(this, x, y); break;
    }

    this._l01_a = this._l12_a, this._l12_a = this._l23_a;
    this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a;
    this._x0 = this._x1, this._x1 = this._x2, this._x2 = x;
    this._y0 = this._y1, this._y1 = this._y2, this._y2 = y;
  }
};

/* harmony default export */ __webpack_exports__["a"] = ((function custom(alpha) {

  function catmullRom(context) {
    return alpha ? new CatmullRomClosed(context, alpha) : new __WEBPACK_IMPORTED_MODULE_0__cardinalClosed__["a" /* CardinalClosed */](context, 0);
  }

  catmullRom.alpha = function(alpha) {
    return custom(+alpha);
  };

  return catmullRom;
})(0.5));


/***/ }),

/***/ 615:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__cardinalOpen__ = __webpack_require__(597);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__catmullRom__ = __webpack_require__(582);



function CatmullRomOpen(context, alpha) {
  this._context = context;
  this._alpha = alpha;
}

CatmullRomOpen.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._x2 =
    this._y0 = this._y1 = this._y2 = NaN;
    this._l01_a = this._l12_a = this._l23_a =
    this._l01_2a = this._l12_2a = this._l23_2a =
    this._point = 0;
  },
  lineEnd: function() {
    if (this._line || (this._line !== 0 && this._point === 3)) this._context.closePath();
    this._line = 1 - this._line;
  },
  point: function(x, y) {
    x = +x, y = +y;

    if (this._point) {
      var x23 = this._x2 - x,
          y23 = this._y2 - y;
      this._l23_a = Math.sqrt(this._l23_2a = Math.pow(x23 * x23 + y23 * y23, this._alpha));
    }

    switch (this._point) {
      case 0: this._point = 1; break;
      case 1: this._point = 2; break;
      case 2: this._point = 3; this._line ? this._context.lineTo(this._x2, this._y2) : this._context.moveTo(this._x2, this._y2); break;
      case 3: this._point = 4; // proceed
      default: Object(__WEBPACK_IMPORTED_MODULE_1__catmullRom__["b" /* point */])(this, x, y); break;
    }

    this._l01_a = this._l12_a, this._l12_a = this._l23_a;
    this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a;
    this._x0 = this._x1, this._x1 = this._x2, this._x2 = x;
    this._y0 = this._y1, this._y1 = this._y2, this._y2 = y;
  }
};

/* harmony default export */ __webpack_exports__["a"] = ((function custom(alpha) {

  function catmullRom(context) {
    return alpha ? new CatmullRomOpen(context, alpha) : new __WEBPACK_IMPORTED_MODULE_0__cardinalOpen__["a" /* CardinalOpen */](context, 0);
  }

  catmullRom.alpha = function(alpha) {
    return custom(+alpha);
  };

  return catmullRom;
})(0.5));


/***/ }),

/***/ 616:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__noop__ = __webpack_require__(576);


function LinearClosed(context) {
  this._context = context;
}

LinearClosed.prototype = {
  areaStart: __WEBPACK_IMPORTED_MODULE_0__noop__["a" /* default */],
  areaEnd: __WEBPACK_IMPORTED_MODULE_0__noop__["a" /* default */],
  lineStart: function() {
    this._point = 0;
  },
  lineEnd: function() {
    if (this._point) this._context.closePath();
  },
  point: function(x, y) {
    x = +x, y = +y;
    if (this._point) this._context.lineTo(x, y);
    else this._point = 1, this._context.moveTo(x, y);
  }
};

/* harmony default export */ __webpack_exports__["a"] = (function(context) {
  return new LinearClosed(context);
});


/***/ }),

/***/ 617:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = monotoneX;
/* harmony export (immutable) */ __webpack_exports__["b"] = monotoneY;
function sign(x) {
  return x < 0 ? -1 : 1;
}

// Calculate the slopes of the tangents (Hermite-type interpolation) based on
// the following paper: Steffen, M. 1990. A Simple Method for Monotonic
// Interpolation in One Dimension. Astronomy and Astrophysics, Vol. 239, NO.
// NOV(II), P. 443, 1990.
function slope3(that, x2, y2) {
  var h0 = that._x1 - that._x0,
      h1 = x2 - that._x1,
      s0 = (that._y1 - that._y0) / (h0 || h1 < 0 && -0),
      s1 = (y2 - that._y1) / (h1 || h0 < 0 && -0),
      p = (s0 * h1 + s1 * h0) / (h0 + h1);
  return (sign(s0) + sign(s1)) * Math.min(Math.abs(s0), Math.abs(s1), 0.5 * Math.abs(p)) || 0;
}

// Calculate a one-sided slope.
function slope2(that, t) {
  var h = that._x1 - that._x0;
  return h ? (3 * (that._y1 - that._y0) / h - t) / 2 : t;
}

// According to https://en.wikipedia.org/wiki/Cubic_Hermite_spline#Representations
// "you can express cubic Hermite interpolation in terms of cubic Bézier curves
// with respect to the four values p0, p0 + m0 / 3, p1 - m1 / 3, p1".
function point(that, t0, t1) {
  var x0 = that._x0,
      y0 = that._y0,
      x1 = that._x1,
      y1 = that._y1,
      dx = (x1 - x0) / 3;
  that._context.bezierCurveTo(x0 + dx, y0 + dx * t0, x1 - dx, y1 - dx * t1, x1, y1);
}

function MonotoneX(context) {
  this._context = context;
}

MonotoneX.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 =
    this._y0 = this._y1 =
    this._t0 = NaN;
    this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 2: this._context.lineTo(this._x1, this._y1); break;
      case 3: point(this, this._t0, slope2(this, this._t0)); break;
    }
    if (this._line || (this._line !== 0 && this._point === 1)) this._context.closePath();
    this._line = 1 - this._line;
  },
  point: function(x, y) {
    var t1 = NaN;

    x = +x, y = +y;
    if (x === this._x1 && y === this._y1) return; // Ignore coincident points.
    switch (this._point) {
      case 0: this._point = 1; this._line ? this._context.lineTo(x, y) : this._context.moveTo(x, y); break;
      case 1: this._point = 2; break;
      case 2: this._point = 3; point(this, slope2(this, t1 = slope3(this, x, y)), t1); break;
      default: point(this, this._t0, t1 = slope3(this, x, y)); break;
    }

    this._x0 = this._x1, this._x1 = x;
    this._y0 = this._y1, this._y1 = y;
    this._t0 = t1;
  }
}

function MonotoneY(context) {
  this._context = new ReflectContext(context);
}

(MonotoneY.prototype = Object.create(MonotoneX.prototype)).point = function(x, y) {
  MonotoneX.prototype.point.call(this, y, x);
};

function ReflectContext(context) {
  this._context = context;
}

ReflectContext.prototype = {
  moveTo: function(x, y) { this._context.moveTo(y, x); },
  closePath: function() { this._context.closePath(); },
  lineTo: function(x, y) { this._context.lineTo(y, x); },
  bezierCurveTo: function(x1, y1, x2, y2, x, y) { this._context.bezierCurveTo(y1, x1, y2, x2, y, x); }
};

function monotoneX(context) {
  return new MonotoneX(context);
}

function monotoneY(context) {
  return new MonotoneY(context);
}


/***/ }),

/***/ 618:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function Natural(context) {
  this._context = context;
}

Natural.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x = [];
    this._y = [];
  },
  lineEnd: function() {
    var x = this._x,
        y = this._y,
        n = x.length;

    if (n) {
      this._line ? this._context.lineTo(x[0], y[0]) : this._context.moveTo(x[0], y[0]);
      if (n === 2) {
        this._context.lineTo(x[1], y[1]);
      } else {
        var px = controlPoints(x),
            py = controlPoints(y);
        for (var i0 = 0, i1 = 1; i1 < n; ++i0, ++i1) {
          this._context.bezierCurveTo(px[0][i0], py[0][i0], px[1][i0], py[1][i0], x[i1], y[i1]);
        }
      }
    }

    if (this._line || (this._line !== 0 && n === 1)) this._context.closePath();
    this._line = 1 - this._line;
    this._x = this._y = null;
  },
  point: function(x, y) {
    this._x.push(+x);
    this._y.push(+y);
  }
};

// See https://www.particleincell.com/2012/bezier-splines/ for derivation.
function controlPoints(x) {
  var i,
      n = x.length - 1,
      m,
      a = new Array(n),
      b = new Array(n),
      r = new Array(n);
  a[0] = 0, b[0] = 2, r[0] = x[0] + 2 * x[1];
  for (i = 1; i < n - 1; ++i) a[i] = 1, b[i] = 4, r[i] = 4 * x[i] + 2 * x[i + 1];
  a[n - 1] = 2, b[n - 1] = 7, r[n - 1] = 8 * x[n - 1] + x[n];
  for (i = 1; i < n; ++i) m = a[i] / b[i - 1], b[i] -= m, r[i] -= m * r[i - 1];
  a[n - 1] = r[n - 1] / b[n - 1];
  for (i = n - 2; i >= 0; --i) a[i] = (r[i] - a[i + 1]) / b[i];
  b[n - 1] = (x[n] + a[n - 1]) / 2;
  for (i = 0; i < n - 1; ++i) b[i] = 2 * x[i + 1] - a[i + 1];
  return [a, b];
}

/* harmony default export */ __webpack_exports__["a"] = (function(context) {
  return new Natural(context);
});


/***/ }),

/***/ 619:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["c"] = stepBefore;
/* harmony export (immutable) */ __webpack_exports__["b"] = stepAfter;
function Step(context, t) {
  this._context = context;
  this._t = t;
}

Step.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x = this._y = NaN;
    this._point = 0;
  },
  lineEnd: function() {
    if (0 < this._t && this._t < 1 && this._point === 2) this._context.lineTo(this._x, this._y);
    if (this._line || (this._line !== 0 && this._point === 1)) this._context.closePath();
    if (this._line >= 0) this._t = 1 - this._t, this._line = 1 - this._line;
  },
  point: function(x, y) {
    x = +x, y = +y;
    switch (this._point) {
      case 0: this._point = 1; this._line ? this._context.lineTo(x, y) : this._context.moveTo(x, y); break;
      case 1: this._point = 2; // proceed
      default: {
        if (this._t <= 0) {
          this._context.lineTo(this._x, y);
          this._context.lineTo(x, y);
        } else {
          var x1 = this._x * (1 - this._t) + x * this._t;
          this._context.lineTo(x1, this._y);
          this._context.lineTo(x1, y);
        }
        break;
      }
    }
    this._x = x, this._y = y;
  }
};

/* harmony default export */ __webpack_exports__["a"] = (function(context) {
  return new Step(context, 0.5);
});

function stepBefore(context) {
  return new Step(context, 0);
}

function stepAfter(context) {
  return new Step(context, 1);
}


/***/ }),

/***/ 620:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__array__ = __webpack_require__(588);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__constant__ = __webpack_require__(569);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__offset_none__ = __webpack_require__(572);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__order_none__ = __webpack_require__(573);





function stackValue(d, key) {
  return d[key];
}

/* harmony default export */ __webpack_exports__["a"] = (function() {
  var keys = Object(__WEBPACK_IMPORTED_MODULE_1__constant__["a" /* default */])([]),
      order = __WEBPACK_IMPORTED_MODULE_3__order_none__["a" /* default */],
      offset = __WEBPACK_IMPORTED_MODULE_2__offset_none__["a" /* default */],
      value = stackValue;

  function stack(data) {
    var kz = keys.apply(this, arguments),
        i,
        m = data.length,
        n = kz.length,
        sz = new Array(n),
        oz;

    for (i = 0; i < n; ++i) {
      for (var ki = kz[i], si = sz[i] = new Array(m), j = 0, sij; j < m; ++j) {
        si[j] = sij = [0, +value(data[j], ki, j, data)];
        sij.data = data[j];
      }
      si.key = ki;
    }

    for (i = 0, oz = order(sz); i < n; ++i) {
      sz[oz[i]].index = i;
    }

    offset(sz, oz);
    return sz;
  }

  stack.keys = function(_) {
    return arguments.length ? (keys = typeof _ === "function" ? _ : Object(__WEBPACK_IMPORTED_MODULE_1__constant__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_0__array__["a" /* slice */].call(_)), stack) : keys;
  };

  stack.value = function(_) {
    return arguments.length ? (value = typeof _ === "function" ? _ : Object(__WEBPACK_IMPORTED_MODULE_1__constant__["a" /* default */])(+_), stack) : value;
  };

  stack.order = function(_) {
    return arguments.length ? (order = _ == null ? __WEBPACK_IMPORTED_MODULE_3__order_none__["a" /* default */] : typeof _ === "function" ? _ : Object(__WEBPACK_IMPORTED_MODULE_1__constant__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_0__array__["a" /* slice */].call(_)), stack) : order;
  };

  stack.offset = function(_) {
    return arguments.length ? (offset = _ == null ? __WEBPACK_IMPORTED_MODULE_2__offset_none__["a" /* default */] : _, stack) : offset;
  };

  return stack;
});


/***/ }),

/***/ 621:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__none__ = __webpack_require__(572);


/* harmony default export */ __webpack_exports__["a"] = (function(series, order) {
  if (!((n = series.length) > 0)) return;
  for (var i, n, j = 0, m = series[0].length, y; j < m; ++j) {
    for (y = i = 0; i < n; ++i) y += series[i][j][1] || 0;
    if (y) for (i = 0; i < n; ++i) series[i][j][1] /= y;
  }
  Object(__WEBPACK_IMPORTED_MODULE_0__none__["a" /* default */])(series, order);
});


/***/ }),

/***/ 622:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(series, order) {
  if (!((n = series.length) > 1)) return;
  for (var i, j = 0, d, dy, yp, yn, n, m = series[order[0]].length; j < m; ++j) {
    for (yp = yn = 0, i = 0; i < n; ++i) {
      if ((dy = (d = series[order[i]][j])[1] - d[0]) >= 0) {
        d[0] = yp, d[1] = yp += dy;
      } else if (dy < 0) {
        d[1] = yn, d[0] = yn += dy;
      } else {
        d[0] = yp;
      }
    }
  }
});


/***/ }),

/***/ 623:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__none__ = __webpack_require__(572);


/* harmony default export */ __webpack_exports__["a"] = (function(series, order) {
  if (!((n = series.length) > 0)) return;
  for (var j = 0, s0 = series[order[0]], n, m = s0.length; j < m; ++j) {
    for (var i = 0, y = 0; i < n; ++i) y += series[i][j][1] || 0;
    s0[j][1] += s0[j][0] = -y / 2;
  }
  Object(__WEBPACK_IMPORTED_MODULE_0__none__["a" /* default */])(series, order);
});


/***/ }),

/***/ 624:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__none__ = __webpack_require__(572);


/* harmony default export */ __webpack_exports__["a"] = (function(series, order) {
  if (!((n = series.length) > 0) || !((m = (s0 = series[order[0]]).length) > 0)) return;
  for (var y = 0, j = 1, s0, m, n; j < m; ++j) {
    for (var i = 0, s1 = 0, s2 = 0; i < n; ++i) {
      var si = series[order[i]],
          sij0 = si[j][1] || 0,
          sij1 = si[j - 1][1] || 0,
          s3 = (sij0 - sij1) / 2;
      for (var k = 0; k < i; ++k) {
        var sk = series[order[k]],
            skj0 = sk[j][1] || 0,
            skj1 = sk[j - 1][1] || 0;
        s3 += skj0 - skj1;
      }
      s1 += sij0, s2 += s3 * sij0;
    }
    s0[j - 1][1] += s0[j - 1][0] = y;
    if (s1) y -= s2 / s1;
  }
  s0[j - 1][1] += s0[j - 1][0] = y;
  Object(__WEBPACK_IMPORTED_MODULE_0__none__["a" /* default */])(series, order);
});


/***/ }),

/***/ 625:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ascending__ = __webpack_require__(583);


/* harmony default export */ __webpack_exports__["a"] = (function(series) {
  return Object(__WEBPACK_IMPORTED_MODULE_0__ascending__["a" /* default */])(series).reverse();
});


/***/ }),

/***/ 626:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__none__ = __webpack_require__(573);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ascending__ = __webpack_require__(583);



/* harmony default export */ __webpack_exports__["a"] = (function(series) {
  var n = series.length,
      i,
      j,
      sums = series.map(__WEBPACK_IMPORTED_MODULE_1__ascending__["b" /* sum */]),
      order = Object(__WEBPACK_IMPORTED_MODULE_0__none__["a" /* default */])(series).sort(function(a, b) { return sums[b] - sums[a]; }),
      top = 0,
      bottom = 0,
      tops = [],
      bottoms = [];

  for (i = 0; i < n; ++i) {
    j = order[i];
    if (top < bottom) {
      top += sums[j];
      tops.push(j);
    } else {
      bottom += sums[j];
      bottoms.push(j);
    }
  }

  return bottoms.reverse().concat(tops);
});


/***/ }),

/***/ 627:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__none__ = __webpack_require__(573);


/* harmony default export */ __webpack_exports__["a"] = (function(series) {
  return Object(__WEBPACK_IMPORTED_MODULE_0__none__["a" /* default */])(series).reverse();
});


/***/ }),

/***/ 628:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = Pie;

var _react = __webpack_require__(17);

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(566);

var _classnames2 = _interopRequireDefault(_classnames);

var _group = __webpack_require__(574);

var _d3Shape = __webpack_require__(568);

var _additionalProps = __webpack_require__(567);

var _additionalProps2 = _interopRequireDefault(_additionalProps);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function Pie(_ref) {
  var _ref$className = _ref.className,
      className = _ref$className === undefined ? '' : _ref$className,
      _ref$top = _ref.top,
      top = _ref$top === undefined ? 0 : _ref$top,
      _ref$left = _ref.left,
      left = _ref$left === undefined ? 0 : _ref$left,
      data = _ref.data,
      centroid = _ref.centroid,
      _ref$innerRadius = _ref.innerRadius,
      innerRadius = _ref$innerRadius === undefined ? 0 : _ref$innerRadius,
      outerRadius = _ref.outerRadius,
      cornerRadius = _ref.cornerRadius,
      _ref$startAngle = _ref.startAngle,
      startAngle = _ref$startAngle === undefined ? 0 : _ref$startAngle,
      endAngle = _ref.endAngle,
      padAngle = _ref.padAngle,
      padRadius = _ref.padRadius,
      pieSort = _ref.pieSort,
      pieValue = _ref.pieValue,
      restProps = _objectWithoutProperties(_ref, ['className', 'top', 'left', 'data', 'centroid', 'innerRadius', 'outerRadius', 'cornerRadius', 'startAngle', 'endAngle', 'padAngle', 'padRadius', 'pieSort', 'pieValue']);

  var path = (0, _d3Shape.arc)();
  path.innerRadius(innerRadius);
  if (outerRadius) path.outerRadius(outerRadius);
  if (cornerRadius) path.cornerRadius(cornerRadius);
  if (padRadius) path.padRadius(padRadius);
  var pie = (0, _d3Shape.pie)();
  if (pieSort) pie.sort(pieSort);
  if (pieValue) pie.value(pieValue);
  if (padAngle) pie.padAngle(padAngle);
  var arcs = pie(data);
  return _react2.default.createElement(
    _group.Group,
    { className: 'vx-pie-arcs-group', top: top, left: left },
    arcs.map(function (arc, i) {
      var c = void 0;
      if (centroid) c = path.centroid(arc);
      return _react2.default.createElement(
        'g',
        { key: 'pie-arc-' + i },
        _react2.default.createElement('path', _extends({
          className: (0, _classnames2.default)('vx-pie-arc', className),
          d: path(arc)
        }, (0, _additionalProps2.default)(restProps, _extends({}, arc, {
          index: i,
          centroid: c
        })))),
        centroid && centroid(c, arc)
      );
    })
  );
}

/***/ }),

/***/ 629:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = Group;

var _react = __webpack_require__(17);

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(566);

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function Group(_ref) {
  var _ref$top = _ref.top,
      top = _ref$top === undefined ? 0 : _ref$top,
      _ref$left = _ref.left,
      left = _ref$left === undefined ? 0 : _ref$left,
      transform = _ref.transform,
      className = _ref.className,
      children = _ref.children,
      restProps = _objectWithoutProperties(_ref, ['top', 'left', 'transform', 'className', 'children']);

  return _react2.default.createElement(
    'g',
    _extends({
      className: (0, _classnames2.default)('cx-group', className),
      transform: transform || 'translate(' + left + ', ' + top + ')'
    }, restProps),
    children
  );
}

/***/ }),

/***/ 630:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = Line;

var _react = __webpack_require__(17);

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(566);

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = __webpack_require__(58);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _point = __webpack_require__(631);

var _additionalProps = __webpack_require__(567);

var _additionalProps2 = _interopRequireDefault(_additionalProps);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

Line.propTypes = {
  innerRef: _propTypes2.default.func
};

function Line(_ref) {
  var _ref$from = _ref.from,
      from = _ref$from === undefined ? new _point.Point({ x: 0, y: 0 }) : _ref$from,
      _ref$to = _ref.to,
      to = _ref$to === undefined ? new _point.Point({ x: 1, y: 1 }) : _ref$to,
      _ref$stroke = _ref.stroke,
      stroke = _ref$stroke === undefined ? 'black' : _ref$stroke,
      _ref$strokeWidth = _ref.strokeWidth,
      strokeWidth = _ref$strokeWidth === undefined ? 1 : _ref$strokeWidth,
      _ref$strokeDasharray = _ref.strokeDasharray,
      strokeDasharray = _ref$strokeDasharray === undefined ? '' : _ref$strokeDasharray,
      _ref$transform = _ref.transform,
      transform = _ref$transform === undefined ? '' : _ref$transform,
      _ref$className = _ref.className,
      className = _ref$className === undefined ? '' : _ref$className,
      data = _ref.data,
      innerRef = _ref.innerRef,
      restProps = _objectWithoutProperties(_ref, ['from', 'to', 'stroke', 'strokeWidth', 'strokeDasharray', 'transform', 'className', 'data', 'innerRef']);

  return _react2.default.createElement('line', _extends({
    ref: innerRef,
    className: (0, _classnames2.default)('vx-line', className),
    x1: from.x,
    y1: from.y,
    x2: to.x,
    y2: to.y,
    stroke: stroke,
    strokeWidth: strokeWidth,
    strokeDasharray: strokeDasharray,
    transform: transform
  }, (0, _additionalProps2.default)(restProps, data)));
}

/***/ }),

/***/ 631:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Point = __webpack_require__(632);

Object.defineProperty(exports, 'Point', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Point).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ 632:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Point = function () {
  function Point(_ref) {
    var _ref$x = _ref.x,
        x = _ref$x === undefined ? 0 : _ref$x,
        _ref$y = _ref.y,
        y = _ref$y === undefined ? 0 : _ref$y;

    _classCallCheck(this, Point);

    this.x = x;
    this.y = y;
  }

  _createClass(Point, [{
    key: "value",
    value: function value() {
      return {
        x: this.x,
        y: this.y
      };
    }
  }, {
    key: "toArray",
    value: function toArray() {
      return [this.x, this.y];
    }
  }]);

  return Point;
}();

exports.default = Point;

/***/ }),

/***/ 633:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = LinePath;

var _react = __webpack_require__(17);

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(566);

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = __webpack_require__(58);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _d3Shape = __webpack_require__(568);

var _curve = __webpack_require__(634);

var _additionalProps = __webpack_require__(567);

var _additionalProps2 = _interopRequireDefault(_additionalProps);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

LinePath.propTypes = {
  innerRef: _propTypes2.default.func
};

function LinePath(_ref) {
  var data = _ref.data,
      xScale = _ref.xScale,
      yScale = _ref.yScale,
      x = _ref.x,
      y = _ref.y,
      _ref$defined = _ref.defined,
      defined = _ref$defined === undefined ? function () {
    return true;
  } : _ref$defined,
      className = _ref.className,
      _ref$stroke = _ref.stroke,
      stroke = _ref$stroke === undefined ? 'steelblue' : _ref$stroke,
      _ref$strokeWidth = _ref.strokeWidth,
      strokeWidth = _ref$strokeWidth === undefined ? 2 : _ref$strokeWidth,
      _ref$strokeDasharray = _ref.strokeDasharray,
      strokeDasharray = _ref$strokeDasharray === undefined ? '' : _ref$strokeDasharray,
      _ref$strokeDashoffset = _ref.strokeDashoffset,
      strokeDashoffset = _ref$strokeDashoffset === undefined ? 0 : _ref$strokeDashoffset,
      _ref$fill = _ref.fill,
      fill = _ref$fill === undefined ? 'none' : _ref$fill,
      _ref$curve = _ref.curve,
      curve = _ref$curve === undefined ? _curve.curveLinear : _ref$curve,
      glyph = _ref.glyph,
      innerRef = _ref.innerRef,
      restProps = _objectWithoutProperties(_ref, ['data', 'xScale', 'yScale', 'x', 'y', 'defined', 'className', 'stroke', 'strokeWidth', 'strokeDasharray', 'strokeDashoffset', 'fill', 'curve', 'glyph', 'innerRef']);

  var path = (0, _d3Shape.line)().x(function (d) {
    return xScale(x(d));
  }).y(function (d) {
    return yScale(y(d));
  }).defined(defined).curve(curve);
  return _react2.default.createElement(
    'g',
    null,
    _react2.default.createElement('path', _extends({
      ref: innerRef,
      className: (0, _classnames2.default)('vx-linepath', className),
      d: path(data),
      stroke: stroke,
      strokeWidth: strokeWidth,
      strokeDasharray: strokeDasharray,
      strokeDashoffset: strokeDashoffset,
      fill: fill
    }, (0, _additionalProps2.default)(restProps, data))),
    glyph && _react2.default.createElement(
      'g',
      { className: 'vx-linepath-glyphs' },
      data.map(glyph)
    )
  );
}

/***/ }),

/***/ 634:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _d3Shape = __webpack_require__(568);

Object.defineProperty(exports, 'curveBasis', {
  enumerable: true,
  get: function get() {
    return _d3Shape.curveBasis;
  }
});
Object.defineProperty(exports, 'curveBasisClosed', {
  enumerable: true,
  get: function get() {
    return _d3Shape.curveBasisClosed;
  }
});
Object.defineProperty(exports, 'curveBasisOpen', {
  enumerable: true,
  get: function get() {
    return _d3Shape.curveBasisOpen;
  }
});
Object.defineProperty(exports, 'curveStep', {
  enumerable: true,
  get: function get() {
    return _d3Shape.curveStep;
  }
});
Object.defineProperty(exports, 'curveStepAfter', {
  enumerable: true,
  get: function get() {
    return _d3Shape.curveStepAfter;
  }
});
Object.defineProperty(exports, 'curveStepBefore', {
  enumerable: true,
  get: function get() {
    return _d3Shape.curveStepBefore;
  }
});
Object.defineProperty(exports, 'curveBundle', {
  enumerable: true,
  get: function get() {
    return _d3Shape.curveBundle;
  }
});
Object.defineProperty(exports, 'curveLinear', {
  enumerable: true,
  get: function get() {
    return _d3Shape.curveLinear;
  }
});
Object.defineProperty(exports, 'curveLinearClosed', {
  enumerable: true,
  get: function get() {
    return _d3Shape.curveLinearClosed;
  }
});
Object.defineProperty(exports, 'curveCardinal', {
  enumerable: true,
  get: function get() {
    return _d3Shape.curveCardinal;
  }
});
Object.defineProperty(exports, 'curveCardinalClosed', {
  enumerable: true,
  get: function get() {
    return _d3Shape.curveCardinalClosed;
  }
});
Object.defineProperty(exports, 'curveCardinalOpen', {
  enumerable: true,
  get: function get() {
    return _d3Shape.curveCardinalOpen;
  }
});
Object.defineProperty(exports, 'curveCatmullRom', {
  enumerable: true,
  get: function get() {
    return _d3Shape.curveCatmullRom;
  }
});
Object.defineProperty(exports, 'curveCatmullRomClosed', {
  enumerable: true,
  get: function get() {
    return _d3Shape.curveCatmullRomClosed;
  }
});
Object.defineProperty(exports, 'curveCatmullRomOpen', {
  enumerable: true,
  get: function get() {
    return _d3Shape.curveCatmullRomOpen;
  }
});
Object.defineProperty(exports, 'curveMonotoneX', {
  enumerable: true,
  get: function get() {
    return _d3Shape.curveMonotoneX;
  }
});
Object.defineProperty(exports, 'curveMonotoneY', {
  enumerable: true,
  get: function get() {
    return _d3Shape.curveMonotoneY;
  }
});
Object.defineProperty(exports, 'curveNatural', {
  enumerable: true,
  get: function get() {
    return _d3Shape.curveNatural;
  }
});

/***/ }),

/***/ 635:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = LineRadial;

var _react = __webpack_require__(17);

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(566);

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = __webpack_require__(58);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _d3Shape = __webpack_require__(568);

var _additionalProps = __webpack_require__(567);

var _additionalProps2 = _interopRequireDefault(_additionalProps);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

LineRadial.propTypes = {
  innerRef: _propTypes2.default.func
};

function LineRadial(_ref) {
  var _ref$className = _ref.className,
      className = _ref$className === undefined ? '' : _ref$className,
      angle = _ref.angle,
      radius = _ref.radius,
      defined = _ref.defined,
      curve = _ref.curve,
      data = _ref.data,
      innerRef = _ref.innerRef,
      restProps = _objectWithoutProperties(_ref, ['className', 'angle', 'radius', 'defined', 'curve', 'data', 'innerRef']);

  var path = (0, _d3Shape.radialLine)();
  if (angle) path.angle(angle);
  if (radius) path.radius(radius);
  if (defined) path.defined(defined);
  if (curve) path.curve(curve);
  return _react2.default.createElement(
    'g',
    null,
    _react2.default.createElement('path', _extends({
      ref: innerRef,
      className: (0, _classnames2.default)('vx-line-radial', className),
      d: path(data)
    }, (0, _additionalProps2.default)(restProps, data)))
  );
}

/***/ }),

/***/ 636:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = LinkHorizontal;

var _react = __webpack_require__(17);

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(566);

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = __webpack_require__(58);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _d3Shape = __webpack_require__(568);

var _additionalProps = __webpack_require__(567);

var _additionalProps2 = _interopRequireDefault(_additionalProps);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

LinkHorizontal.propTypes = {
  innerRef: _propTypes2.default.func
};

function LinkHorizontal(_ref) {
  var className = _ref.className,
      innerRef = _ref.innerRef,
      data = _ref.data,
      _ref$x = _ref.x,
      x = _ref$x === undefined ? function (d) {
    return d.y;
  } : _ref$x,
      _ref$y = _ref.y,
      y = _ref$y === undefined ? function (d) {
    return d.x;
  } : _ref$y,
      restProps = _objectWithoutProperties(_ref, ['className', 'innerRef', 'data', 'x', 'y']);

  var link = (0, _d3Shape.linkHorizontal)();
  link.x(x);
  link.y(y);
  return _react2.default.createElement('path', _extends({
    ref: innerRef,
    className: (0, _classnames2.default)('vx-link-horizontal', className),
    d: link(data)
  }, (0, _additionalProps2.default)(restProps, data)));
}

/***/ }),

/***/ 637:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = LinkVertical;

var _react = __webpack_require__(17);

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(566);

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = __webpack_require__(58);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _d3Shape = __webpack_require__(568);

var _additionalProps = __webpack_require__(567);

var _additionalProps2 = _interopRequireDefault(_additionalProps);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

LinkVertical.propTypes = {
  innerRef: _propTypes2.default.func
};

function LinkVertical(_ref) {
  var className = _ref.className,
      innerRef = _ref.innerRef,
      data = _ref.data,
      _ref$x = _ref.x,
      x = _ref$x === undefined ? function (d) {
    return d.x;
  } : _ref$x,
      _ref$y = _ref.y,
      y = _ref$y === undefined ? function (d) {
    return d.y;
  } : _ref$y,
      restProps = _objectWithoutProperties(_ref, ['className', 'innerRef', 'data', 'x', 'y']);

  var link = (0, _d3Shape.linkVertical)();
  link.x(x);
  link.y(y);
  return _react2.default.createElement('path', _extends({
    ref: innerRef,
    className: (0, _classnames2.default)('vx-link-vertical', className),
    d: link(data)
  }, (0, _additionalProps2.default)(restProps, data)));
}

/***/ }),

/***/ 638:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = LinkRadial;

var _react = __webpack_require__(17);

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(566);

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = __webpack_require__(58);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _d3Shape = __webpack_require__(568);

var _additionalProps = __webpack_require__(567);

var _additionalProps2 = _interopRequireDefault(_additionalProps);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

LinkRadial.propTypes = {
  innerRef: _propTypes2.default.func
};

function LinkRadial(_ref) {
  var className = _ref.className,
      innerRef = _ref.innerRef,
      data = _ref.data,
      _ref$angle = _ref.angle,
      angle = _ref$angle === undefined ? function (d) {
    return d.x;
  } : _ref$angle,
      _ref$radius = _ref.radius,
      radius = _ref$radius === undefined ? function (d) {
    return d.y;
  } : _ref$radius,
      restProps = _objectWithoutProperties(_ref, ['className', 'innerRef', 'data', 'angle', 'radius']);

  var link = (0, _d3Shape.linkRadial)();
  link.angle(angle);
  link.radius(radius);
  return _react2.default.createElement('path', _extends({
    ref: innerRef,
    className: (0, _classnames2.default)('vx-link-radius', className),
    d: link(data)
  }, (0, _additionalProps2.default)(restProps, data)));
}

/***/ }),

/***/ 639:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = LinkHorizontalCurve;

var _react = __webpack_require__(17);

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(566);

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = __webpack_require__(58);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _d3Shape = __webpack_require__(568);

var _additionalProps = __webpack_require__(567);

var _additionalProps2 = _interopRequireDefault(_additionalProps);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

LinkHorizontalCurve.propTypes = {
  innerRef: _propTypes2.default.func
};

function LinkHorizontalCurve(_ref) {
  var className = _ref.className,
      innerRef = _ref.innerRef,
      data = _ref.data,
      _ref$x = _ref.x,
      x = _ref$x === undefined ? function (d) {
    return d.y;
  } : _ref$x,
      _ref$y = _ref.y,
      y = _ref$y === undefined ? function (d) {
    return d.x;
  } : _ref$y,
      restProps = _objectWithoutProperties(_ref, ['className', 'innerRef', 'data', 'x', 'y']);

  var curve = function curve(source, target) {
    var sx = x(source);
    var sy = y(source);
    var tx = x(target);
    var ty = y(target);

    var dx = tx - sx;
    var dy = ty - sy;
    var ix = 0.2 * (dx + dy);
    var iy = 0.2 * (dy - dx);

    return 'M' + sx + ',' + sy + '\n      C' + (sx + ix) + ',' + (sy + iy) + '\n      ' + (tx + iy) + ',' + (ty - ix) + '\n      ' + tx + ',' + ty + '\n    ';
  };

  return _react2.default.createElement('path', _extends({
    ref: innerRef,
    className: (0, _classnames2.default)('vx-link', className),
    d: curve(data.source, data.target)
  }, restProps));
}

/***/ }),

/***/ 640:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = LinkVerticalCurve;

var _react = __webpack_require__(17);

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(566);

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = __webpack_require__(58);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _d3Shape = __webpack_require__(568);

var _additionalProps = __webpack_require__(567);

var _additionalProps2 = _interopRequireDefault(_additionalProps);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

LinkVerticalCurve.propTypes = {
  innerRef: _propTypes2.default.func
};

function LinkVerticalCurve(_ref) {
  var className = _ref.className,
      innerRef = _ref.innerRef,
      data = _ref.data,
      _ref$x = _ref.x,
      x = _ref$x === undefined ? function (d) {
    return d.x;
  } : _ref$x,
      _ref$y = _ref.y,
      y = _ref$y === undefined ? function (d) {
    return d.y;
  } : _ref$y,
      restProps = _objectWithoutProperties(_ref, ['className', 'innerRef', 'data', 'x', 'y']);

  var curve = function curve(source, target) {
    var sx = x(source);
    var sy = y(source);
    var tx = x(target);
    var ty = y(target);

    var dx = tx - sx;
    var dy = ty - sy;
    var ix = 0.2 * (dx + dy);
    var iy = 0.2 * (dy - dx);

    return 'M' + sx + ',' + sy + '\n      C' + (sx + ix) + ',' + (sy + iy) + '\n      ' + (tx + iy) + ',' + (ty - ix) + '\n      ' + tx + ',' + ty + '\n    ';
  };

  return _react2.default.createElement('path', _extends({
    ref: innerRef,
    className: (0, _classnames2.default)('vx-link', className),
    d: curve(data.source, data.target)
  }, restProps));
}

/***/ }),

/***/ 641:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = LinkRadialCurve;

var _react = __webpack_require__(17);

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(566);

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = __webpack_require__(58);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _d3Shape = __webpack_require__(568);

var _additionalProps = __webpack_require__(567);

var _additionalProps2 = _interopRequireDefault(_additionalProps);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

LinkRadialCurve.propTypes = {
  innerRef: _propTypes2.default.func
};

function LinkRadialCurve(_ref) {
  var className = _ref.className,
      innerRef = _ref.innerRef,
      data = _ref.data,
      _ref$x = _ref.x,
      x = _ref$x === undefined ? function (d) {
    return d.x;
  } : _ref$x,
      _ref$y = _ref.y,
      y = _ref$y === undefined ? function (d) {
    return d.y;
  } : _ref$y,
      restProps = _objectWithoutProperties(_ref, ['className', 'innerRef', 'data', 'x', 'y']);

  var curve = function curve(source, target) {
    var sa = x(source) - Math.PI / 2;
    var sr = y(source);
    var ta = x(target) - Math.PI / 2;
    var tr = y(target);

    var sc = Math.cos(sa);
    var ss = Math.sin(sa);
    var tc = Math.cos(ta);
    var ts = Math.sin(ta);

    var sx = sr * sc;
    var sy = sr * ss;
    var tx = tr * tc;
    var ty = tr * ts;

    var dx = tx - sx;
    var dy = ty - sy;
    var ix = 0.2 * (dx + dy);
    var iy = 0.2 * (dy - dx);

    return 'M' + sx + ',' + sy + '\n      C' + (sx + ix) + ',' + (sy + iy) + '\n      ' + (tx + iy) + ',' + (ty - ix) + '\n      ' + tx + ',' + ty + '\n    ';
  };

  return _react2.default.createElement('path', _extends({
    ref: innerRef,
    className: (0, _classnames2.default)('vx-link', className),
    d: curve(data.source, data.target)
  }, restProps));
}

/***/ }),

/***/ 642:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = LinkHorizontalLine;

var _react = __webpack_require__(17);

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(566);

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = __webpack_require__(58);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _additionalProps = __webpack_require__(567);

var _additionalProps2 = _interopRequireDefault(_additionalProps);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

LinkHorizontalLine.propTypes = {
  innerRef: _propTypes2.default.func
};

function LinkHorizontalLine(_ref) {
  var className = _ref.className,
      innerRef = _ref.innerRef,
      data = _ref.data,
      _ref$x = _ref.x,
      x = _ref$x === undefined ? function (d) {
    return d.y;
  } : _ref$x,
      _ref$y = _ref.y,
      y = _ref$y === undefined ? function (d) {
    return d.x;
  } : _ref$y,
      restProps = _objectWithoutProperties(_ref, ['className', 'innerRef', 'data', 'x', 'y']);

  var line = function line(source, target) {
    return '\n    M' + x(source) + ',' + y(source) + '\n    L' + x(target) + ',' + y(target) + '\n  ';
  };

  return _react2.default.createElement('path', _extends({
    ref: innerRef,
    className: (0, _classnames2.default)('vx-link', className),
    d: line(data.source, data.target)
  }, restProps));
}

/***/ }),

/***/ 643:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = LinkVerticalLine;

var _react = __webpack_require__(17);

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(566);

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = __webpack_require__(58);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _additionalProps = __webpack_require__(567);

var _additionalProps2 = _interopRequireDefault(_additionalProps);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

LinkVerticalLine.propTypes = {
  innerRef: _propTypes2.default.func
};

function LinkVerticalLine(_ref) {
  var className = _ref.className,
      innerRef = _ref.innerRef,
      data = _ref.data,
      _ref$x = _ref.x,
      x = _ref$x === undefined ? function (d) {
    return d.x;
  } : _ref$x,
      _ref$y = _ref.y,
      y = _ref$y === undefined ? function (d) {
    return d.y;
  } : _ref$y,
      restProps = _objectWithoutProperties(_ref, ['className', 'innerRef', 'data', 'x', 'y']);

  var line = function line(source, target) {
    return '\n    M' + x(source) + ',' + y(source) + '\n    L' + x(target) + ',' + y(target) + '\n  ';
  };

  return _react2.default.createElement('path', _extends({
    ref: innerRef,
    className: (0, _classnames2.default)('vx-link', className),
    d: line(data.source, data.target)
  }, restProps));
}

/***/ }),

/***/ 644:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = LinkRadialStep;

var _react = __webpack_require__(17);

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(566);

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = __webpack_require__(58);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _d3Shape = __webpack_require__(568);

var _additionalProps = __webpack_require__(567);

var _additionalProps2 = _interopRequireDefault(_additionalProps);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

LinkRadialStep.propTypes = {
  innerRef: _propTypes2.default.func
};

function LinkRadialStep(_ref) {
  var className = _ref.className,
      innerRef = _ref.innerRef,
      data = _ref.data,
      _ref$x = _ref.x,
      x = _ref$x === undefined ? function (d) {
    return d.x;
  } : _ref$x,
      _ref$y = _ref.y,
      y = _ref$y === undefined ? function (d) {
    return d.y;
  } : _ref$y,
      restProps = _objectWithoutProperties(_ref, ['className', 'innerRef', 'data', 'x', 'y']);

  var line = function line(source, target) {
    var sa = x(source) - Math.PI / 2;
    var sr = y(source);
    var ta = x(target) - Math.PI / 2;
    var tr = y(target);

    var sc = Math.cos(sa);
    var ss = Math.sin(sa);
    var tc = Math.cos(ta);
    var ts = Math.sin(ta);

    return '\n      M' + sr * sc + ',' + sr * ss + '\n      L' + tr * tc + ',' + tr * ts + '\n    ';
  };

  return _react2.default.createElement('path', _extends({
    ref: innerRef,
    className: (0, _classnames2.default)('vx-link', className),
    d: line(data.source, data.target)
  }, restProps));
}

/***/ }),

/***/ 645:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = LinkHorizontalStep;

var _react = __webpack_require__(17);

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(566);

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = __webpack_require__(58);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _additionalProps = __webpack_require__(567);

var _additionalProps2 = _interopRequireDefault(_additionalProps);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

LinkHorizontalStep.propTypes = {
  innerRef: _propTypes2.default.func,
  percent: _propTypes2.default.number
};

function LinkHorizontalStep(_ref) {
  var className = _ref.className,
      innerRef = _ref.innerRef,
      data = _ref.data,
      _ref$percent = _ref.percent,
      percent = _ref$percent === undefined ? 0.5 : _ref$percent,
      _ref$x = _ref.x,
      x = _ref$x === undefined ? function (d) {
    return d.y;
  } : _ref$x,
      _ref$y = _ref.y,
      y = _ref$y === undefined ? function (d) {
    return d.x;
  } : _ref$y,
      restProps = _objectWithoutProperties(_ref, ['className', 'innerRef', 'data', 'percent', 'x', 'y']);

  var line = function line(source, target) {
    return '\n    M' + x(source) + ',' + y(source) + '\n    H' + (x(source) + (x(target) - x(source)) * percent) + '\n    V' + y(target) + '\n    H' + x(target) + '\n  ';
  };

  return _react2.default.createElement('path', _extends({
    ref: innerRef,
    className: (0, _classnames2.default)('vx-link', className),
    d: line(data.source, data.target)
  }, restProps));
}

/***/ }),

/***/ 646:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = LinkVerticalStep;

var _react = __webpack_require__(17);

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(566);

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = __webpack_require__(58);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _additionalProps = __webpack_require__(567);

var _additionalProps2 = _interopRequireDefault(_additionalProps);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

LinkVerticalStep.propTypes = {
  innerRef: _propTypes2.default.func,
  percent: _propTypes2.default.number
};

function LinkVerticalStep(_ref) {
  var className = _ref.className,
      innerRef = _ref.innerRef,
      data = _ref.data,
      _ref$percent = _ref.percent,
      percent = _ref$percent === undefined ? 0.5 : _ref$percent,
      _ref$x = _ref.x,
      x = _ref$x === undefined ? function (d) {
    return d.x;
  } : _ref$x,
      _ref$y = _ref.y,
      y = _ref$y === undefined ? function (d) {
    return d.y;
  } : _ref$y,
      restProps = _objectWithoutProperties(_ref, ['className', 'innerRef', 'data', 'percent', 'x', 'y']);

  var line = function line(source, target) {
    return '\n    M' + x(source) + ',' + y(source) + '\n    V' + (y(source) + (y(target) - y(source)) * percent) + '\n    H' + x(target) + '\n    V' + y(target) + '\n  ';
  };

  return _react2.default.createElement('path', _extends({
    ref: innerRef,
    className: (0, _classnames2.default)('vx-link', className),
    d: line(data.source, data.target)
  }, restProps));
}

/***/ }),

/***/ 647:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = LinkRadialStep;

var _react = __webpack_require__(17);

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(566);

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = __webpack_require__(58);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _d3Shape = __webpack_require__(568);

var _additionalProps = __webpack_require__(567);

var _additionalProps2 = _interopRequireDefault(_additionalProps);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

LinkRadialStep.propTypes = {
  innerRef: _propTypes2.default.func
};

function LinkRadialStep(_ref) {
  var className = _ref.className,
      innerRef = _ref.innerRef,
      data = _ref.data,
      _ref$x = _ref.x,
      x = _ref$x === undefined ? function (d) {
    return d.x;
  } : _ref$x,
      _ref$y = _ref.y,
      y = _ref$y === undefined ? function (d) {
    return d.y;
  } : _ref$y,
      restProps = _objectWithoutProperties(_ref, ['className', 'innerRef', 'data', 'x', 'y']);

  var step = function step(source, target) {
    var sa = x(source) - Math.PI / 2;
    var sr = y(source);
    var ta = x(target) - Math.PI / 2;
    var tr = y(target);

    var sc = Math.cos(sa);
    var ss = Math.sin(sa);
    var tc = Math.cos(ta);
    var ts = Math.sin(ta);
    var sf = Math.abs(ta - sa) > Math.PI ? ta <= sa : ta > sa;

    return '\n      M' + sr * sc + ',' + sr * ss + '\n      A' + sr + ',' + sr + ' 0 0,' + (sf ? 1 : 0) + '\n      ' + sr * tc + ',' + sr * ts + '\n      L' + tr * tc + ',' + tr * ts + '\n    ';
  };

  var line = step;

  return _react2.default.createElement('path', _extends({
    ref: innerRef,
    className: (0, _classnames2.default)('vx-link', className),
    d: line(data.source, data.target)
  }, restProps));
}

/***/ }),

/***/ 648:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = Area;

var _react = __webpack_require__(17);

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(566);

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = __webpack_require__(58);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _d3Shape = __webpack_require__(568);

var _additionalProps = __webpack_require__(567);

var _additionalProps2 = _interopRequireDefault(_additionalProps);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

Area.propTypes = {
  x: _propTypes2.default.func,
  x0: _propTypes2.default.func,
  x1: _propTypes2.default.func,
  y: _propTypes2.default.func,
  y0: _propTypes2.default.func,
  y1: _propTypes2.default.func,
  xScale: _propTypes2.default.func,
  yScale: _propTypes2.default.func,
  data: _propTypes2.default.array,
  defined: _propTypes2.default.func,
  className: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.bool, _propTypes2.default.object, _propTypes2.default.array]),
  innerRef: _propTypes2.default.func,
  strokeDasharray: _propTypes2.default.string,
  strokeWidth: _propTypes2.default.number,
  stroke: _propTypes2.default.string,
  fill: _propTypes2.default.string,
  curve: _propTypes2.default.func
};

function Area(_ref) {
  var x = _ref.x,
      x0 = _ref.x0,
      x1 = _ref.x1,
      y = _ref.y,
      y0 = _ref.y0,
      y1 = _ref.y1,
      xScale = _ref.xScale,
      yScale = _ref.yScale,
      _ref$data = _ref.data,
      data = _ref$data === undefined ? [] : _ref$data,
      _ref$defined = _ref.defined,
      defined = _ref$defined === undefined ? function () {
    return true;
  } : _ref$defined,
      className = _ref.className,
      strokeDasharray = _ref.strokeDasharray,
      _ref$strokeWidth = _ref.strokeWidth,
      strokeWidth = _ref$strokeWidth === undefined ? 2 : _ref$strokeWidth,
      _ref$stroke = _ref.stroke,
      stroke = _ref$stroke === undefined ? 'black' : _ref$stroke,
      _ref$fill = _ref.fill,
      fill = _ref$fill === undefined ? 'rgba(0,0,0,0.3)' : _ref$fill,
      curve = _ref.curve,
      innerRef = _ref.innerRef,
      restProps = _objectWithoutProperties(_ref, ['x', 'x0', 'x1', 'y', 'y0', 'y1', 'xScale', 'yScale', 'data', 'defined', 'className', 'strokeDasharray', 'strokeWidth', 'stroke', 'fill', 'curve', 'innerRef']);

  var path = (0, _d3Shape.area)();
  if (x) path.x(function (d) {
    return xScale(x(d));
  });
  if (x0) path.x0(function (d) {
    return xScale(x0(d));
  });
  if (x1) path.x1(function (d) {
    return xScale(x1(d));
  });
  if (y) path.y(function (d) {
    return yScale(y(d));
  });
  if (y0) path.y0(function (d) {
    return yScale(y0(d));
  });
  if (y1) path.y1(function (d) {
    return yScale(y1(d));
  });
  if (defined) path.defined(defined);
  if (curve) path.curve(curve);
  return _react2.default.createElement(
    'g',
    null,
    _react2.default.createElement('path', _extends({
      ref: innerRef,
      className: (0, _classnames2.default)('vx-area', className),
      d: path(data),
      stroke: stroke,
      strokeWidth: strokeWidth,
      strokeDasharray: strokeDasharray,
      fill: fill
    }, (0, _additionalProps2.default)(restProps, data)))
  );
}

/***/ }),

/***/ 649:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = AreaClosed;

var _react = __webpack_require__(17);

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(566);

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = __webpack_require__(58);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _d3Shape = __webpack_require__(568);

var _additionalProps = __webpack_require__(567);

var _additionalProps2 = _interopRequireDefault(_additionalProps);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

AreaClosed.propTypes = {
  innerRef: _propTypes2.default.func
};

function AreaClosed(_ref) {
  var x = _ref.x,
      y = _ref.y,
      xScale = _ref.xScale,
      yScale = _ref.yScale,
      data = _ref.data,
      _ref$defined = _ref.defined,
      defined = _ref$defined === undefined ? function () {
    return true;
  } : _ref$defined,
      className = _ref.className,
      strokeDasharray = _ref.strokeDasharray,
      _ref$strokeWidth = _ref.strokeWidth,
      strokeWidth = _ref$strokeWidth === undefined ? 2 : _ref$strokeWidth,
      _ref$stroke = _ref.stroke,
      stroke = _ref$stroke === undefined ? 'black' : _ref$stroke,
      _ref$fill = _ref.fill,
      fill = _ref$fill === undefined ? 'rgba(0,0,0,0.3)' : _ref$fill,
      curve = _ref.curve,
      innerRef = _ref.innerRef,
      restProps = _objectWithoutProperties(_ref, ['x', 'y', 'xScale', 'yScale', 'data', 'defined', 'className', 'strokeDasharray', 'strokeWidth', 'stroke', 'fill', 'curve', 'innerRef']);

  var path = (0, _d3Shape.area)().x(function (d) {
    return xScale(x(d));
  }).y0(yScale.range()[0]).y1(function (d) {
    return yScale(y(d));
  }).defined(defined);
  if (curve) path.curve(curve);
  return _react2.default.createElement(
    'g',
    null,
    _react2.default.createElement('path', _extends({
      ref: innerRef,
      className: (0, _classnames2.default)('vx-area-closed', className),
      d: path(data),
      stroke: stroke,
      strokeWidth: strokeWidth,
      strokeDasharray: strokeDasharray,
      fill: fill
    }, (0, _additionalProps2.default)(restProps, data)))
  );
}

/***/ }),

/***/ 650:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = AreaStack;

var _react = __webpack_require__(17);

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(566);

var _classnames2 = _interopRequireDefault(_classnames);

var _additionalProps = __webpack_require__(567);

var _additionalProps2 = _interopRequireDefault(_additionalProps);

var _d3Shape = __webpack_require__(568);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function AreaStack(_ref) {
  var className = _ref.className,
      _ref$top = _ref.top,
      top = _ref$top === undefined ? 0 : _ref$top,
      _ref$left = _ref.left,
      left = _ref$left === undefined ? 0 : _ref$left,
      keys = _ref.keys,
      data = _ref.data,
      curve = _ref.curve,
      defined = _ref.defined,
      x = _ref.x,
      x0 = _ref.x0,
      x1 = _ref.x1,
      y0 = _ref.y0,
      y1 = _ref.y1,
      glyph = _ref.glyph,
      _ref$reverse = _ref.reverse,
      reverse = _ref$reverse === undefined ? false : _ref$reverse,
      restProps = _objectWithoutProperties(_ref, ['className', 'top', 'left', 'keys', 'data', 'curve', 'defined', 'x', 'x0', 'x1', 'y0', 'y1', 'glyph', 'reverse']);

  var stack = (0, _d3Shape.stack)();
  if (keys) stack.keys(keys);

  var path = (0, _d3Shape.area)();
  if (x) path.x(x);
  if (x0) path.x0(x0);
  if (x1) path.x1(x1);
  if (y0) path.y0(y0);
  if (y1) path.y1(y1);
  if (curve) path.curve(curve);
  if (defined) path.defined(defined);

  var seriesData = stack(data);
  if (reverse) seriesData.reverse();

  return _react2.default.createElement(
    'g',
    null,
    seriesData.map(function (series, i) {
      return _react2.default.createElement('path', _extends({
        className: (0, _classnames2.default)('vx-area-stack', className),
        key: 'area-stack-' + i + '-' + (series.key || ''),
        d: path(series)
      }, (0, _additionalProps2.default)(restProps, {
        datum: series[i],
        index: i,
        series: series
      })));
    }),
    !!glyph && _react2.default.createElement(
      'g',
      { className: 'vx-area-stack-glyphs' },
      data.map(glyph)
    )
  );
}

/***/ }),

/***/ 651:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = BarGroup;

var _react = __webpack_require__(17);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(58);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__(566);

var _classnames2 = _interopRequireDefault(_classnames);

var _group = __webpack_require__(574);

var _Bar = __webpack_require__(579);

var _Bar2 = _interopRequireDefault(_Bar);

var _additionalProps = __webpack_require__(567);

var _additionalProps2 = _interopRequireDefault(_additionalProps);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function BarGroup(_ref) {
  var data = _ref.data,
      className = _ref.className,
      top = _ref.top,
      left = _ref.left,
      x0 = _ref.x0,
      x0Scale = _ref.x0Scale,
      x1Scale = _ref.x1Scale,
      yScale = _ref.yScale,
      zScale = _ref.zScale,
      keys = _ref.keys,
      height = _ref.height,
      restProps = _objectWithoutProperties(_ref, ['data', 'className', 'top', 'left', 'x0', 'x0Scale', 'x1Scale', 'yScale', 'zScale', 'keys', 'height']);

  var format = x0Scale.tickFormat ? x0Scale.tickFormat() : function (d) {
    return d;
  };
  return _react2.default.createElement(
    _group.Group,
    {
      className: (0, _classnames2.default)('vx-bar-group', className),
      top: top,
      left: left
    },
    data && data.map(function (d, i) {
      return _react2.default.createElement(
        _group.Group,
        {
          key: 'bar-group-' + i + '-' + x0(d),
          left: x0Scale(x0(d))
        },
        keys && keys.map(function (key, i) {
          var value = d[key];
          return _react2.default.createElement(_Bar2.default, _extends({
            key: 'bar-group-bar-' + i + '-' + value + '-' + key,
            x: x1Scale(key),
            y: yScale(value),
            width: x1Scale.bandwidth(),
            height: height - yScale(value),
            fill: zScale(key),
            data: {
              key: key,
              value: value,
              x: format(x0(d)),
              data: d
            }
          }, restProps));
        })
      );
    })
  );
}

BarGroup.propTypes = {
  data: _propTypes2.default.array.isRequired,
  x0: _propTypes2.default.func.isRequired,
  x0Scale: _propTypes2.default.func.isRequired,
  x1Scale: _propTypes2.default.func.isRequired,
  yScale: _propTypes2.default.func.isRequired,
  zScale: _propTypes2.default.func.isRequired,
  keys: _propTypes2.default.array.isRequired,
  height: _propTypes2.default.number.isRequired,
  className: _propTypes2.default.string,
  top: _propTypes2.default.number,
  left: _propTypes2.default.number
};

/***/ }),

/***/ 652:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = BarStack;

var _react = __webpack_require__(17);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(58);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__(566);

var _classnames2 = _interopRequireDefault(_classnames);

var _group = __webpack_require__(574);

var _Bar = __webpack_require__(579);

var _Bar2 = _interopRequireDefault(_Bar);

var _d3Shape = __webpack_require__(568);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function BarStack(_ref) {
  var data = _ref.data,
      className = _ref.className,
      top = _ref.top,
      left = _ref.left,
      x = _ref.x,
      xScale = _ref.xScale,
      yScale = _ref.yScale,
      zScale = _ref.zScale,
      keys = _ref.keys,
      height = _ref.height,
      restProps = _objectWithoutProperties(_ref, ['data', 'className', 'top', 'left', 'x', 'xScale', 'yScale', 'zScale', 'keys', 'height']);

  var series = (0, _d3Shape.stack)().keys(keys)(data);
  var format = xScale.tickFormat ? xScale.tickFormat() : function (d) {
    return d;
  };
  var bandwidth = xScale.bandwidth();
  var step = xScale.step();
  var paddingInner = xScale.paddingInner();
  var paddingOuter = xScale.paddingOuter();
  return _react2.default.createElement(
    _group.Group,
    { className: (0, _classnames2.default)('vx-bar-stack', className), top: top, left: left },
    series && series.map(function (s, i) {
      return _react2.default.createElement(
        _group.Group,
        { key: 'vx-bar-stack-' + i },
        s.map(function (d, ii) {
          var barHeight = yScale(d[0]) - yScale(d[1]);
          return _react2.default.createElement(_Bar2.default, _extends({
            key: 'bar-group-bar-' + i + '-' + ii + '-' + s.key,
            x: xScale(x(d.data)),
            y: yScale(d[1]),
            width: bandwidth,
            height: barHeight,
            fill: zScale(s.key),
            data: {
              bandwidth: bandwidth,
              paddingInner: paddingInner,
              paddingOuter: paddingOuter,
              step: step,
              key: s.key,
              value: d[1],
              height: barHeight,
              width: bandwidth,
              x: x(d.data),
              xFormatted: format(x(d.data)),
              data: d.data
            }
          }, restProps));
        })
      );
    })
  );
}

BarStack.propTypes = {
  data: _propTypes2.default.array.isRequired,
  x: _propTypes2.default.func.isRequired,
  xScale: _propTypes2.default.func.isRequired,
  yScale: _propTypes2.default.func.isRequired,
  zScale: _propTypes2.default.func.isRequired,
  keys: _propTypes2.default.array.isRequired,
  className: _propTypes2.default.string,
  top: _propTypes2.default.number,
  left: _propTypes2.default.number
};

/***/ }),

/***/ 653:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = BarStackHorizontal;

var _react = __webpack_require__(17);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(58);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__(566);

var _classnames2 = _interopRequireDefault(_classnames);

var _group = __webpack_require__(574);

var _Bar = __webpack_require__(579);

var _Bar2 = _interopRequireDefault(_Bar);

var _d3Shape = __webpack_require__(568);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function BarStackHorizontal(_ref) {
  var data = _ref.data,
      className = _ref.className,
      top = _ref.top,
      left = _ref.left,
      y = _ref.y,
      xScale = _ref.xScale,
      yScale = _ref.yScale,
      zScale = _ref.zScale,
      keys = _ref.keys,
      height = _ref.height,
      restProps = _objectWithoutProperties(_ref, ['data', 'className', 'top', 'left', 'y', 'xScale', 'yScale', 'zScale', 'keys', 'height']);

  var series = (0, _d3Shape.stack)().keys(keys)(data);
  var format = yScale.tickFormat ? yScale.tickFormat() : function (d) {
    return d;
  };
  var bandwidth = yScale.bandwidth();
  var step = yScale.step();
  var paddingInner = yScale.paddingInner();
  var paddingOuter = yScale.paddingOuter();
  return _react2.default.createElement(
    _group.Group,
    { className: (0, _classnames2.default)('vx-bar-stack-horizontal', className), top: top, left: left },
    series && series.map(function (s, i) {
      return _react2.default.createElement(
        _group.Group,
        { key: 'vx-bar-stack-horizontal-' + i },
        s.map(function (d, ii) {
          var barWidth = xScale(d[1]) - xScale(d[0]);
          return _react2.default.createElement(_Bar2.default, _extends({
            key: 'bar-group-bar-' + i + '-' + ii + '-' + s.key,
            x: xScale(d[0]),
            y: yScale(y(d.data)),
            width: barWidth,
            height: bandwidth,
            fill: zScale(s.key),
            data: {
              bandwidth: bandwidth,
              paddingInner: paddingInner,
              paddingOuter: paddingOuter,
              step: step,
              key: s.key,
              value: d[0],
              height: bandwidth,
              width: barWidth,
              y: y(d.data),
              yFormatted: format(y(d.data)),
              data: d.data
            }
          }, restProps));
        })
      );
    })
  );
}

BarStackHorizontal.propTypes = {
  data: _propTypes2.default.array.isRequired,
  y: _propTypes2.default.func.isRequired,
  xScale: _propTypes2.default.func.isRequired,
  yScale: _propTypes2.default.func.isRequired,
  zScale: _propTypes2.default.func.isRequired,
  keys: _propTypes2.default.array.isRequired,
  className: _propTypes2.default.string,
  top: _propTypes2.default.number,
  left: _propTypes2.default.number
};

/***/ }),

/***/ 654:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = Stack;

var _react = __webpack_require__(17);

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(566);

var _classnames2 = _interopRequireDefault(_classnames);

var _group = __webpack_require__(574);

var _additionalProps = __webpack_require__(567);

var _additionalProps2 = _interopRequireDefault(_additionalProps);

var _stackOrder = __webpack_require__(599);

var _stackOrder2 = _interopRequireDefault(_stackOrder);

var _stackOffset = __webpack_require__(600);

var _stackOffset2 = _interopRequireDefault(_stackOffset);

var _d3Shape = __webpack_require__(568);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function Stack(_ref) {
  var className = _ref.className,
      _ref$top = _ref.top,
      top = _ref$top === undefined ? 0 : _ref$top,
      _ref$left = _ref.left,
      left = _ref$left === undefined ? 0 : _ref$left,
      keys = _ref.keys,
      data = _ref.data,
      curve = _ref.curve,
      defined = _ref.defined,
      x = _ref.x,
      x0 = _ref.x0,
      x1 = _ref.x1,
      y0 = _ref.y0,
      y1 = _ref.y1,
      value = _ref.value,
      order = _ref.order,
      offset = _ref.offset,
      render = _ref.render,
      _ref$reverse = _ref.reverse,
      reverse = _ref$reverse === undefined ? false : _ref$reverse,
      restProps = _objectWithoutProperties(_ref, ['className', 'top', 'left', 'keys', 'data', 'curve', 'defined', 'x', 'x0', 'x1', 'y0', 'y1', 'value', 'order', 'offset', 'render', 'reverse']);

  var stack = (0, _d3Shape.stack)();
  if (keys) stack.keys(keys);
  if (value) stack.value(value);
  if (order) stack.order((0, _stackOrder2.default)(order));
  if (offset) stack.offset((0, _stackOffset2.default)(offset));

  var path = (0, _d3Shape.area)();
  if (x) path.x(x);
  if (x0) path.x0(x0);
  if (x1) path.x1(x1);
  if (y0) path.y0(y0);
  if (y1) path.y1(y1);
  if (curve) path.curve(curve);
  if (defined) path.defined(defined);

  var seriesData = stack(data);
  if (reverse) seriesData.reverse();

  if (render) return _react2.default.createElement(
    _group.Group,
    { top: top, left: left },
    render({ seriesData: seriesData, path: path })
  );

  return _react2.default.createElement(
    _group.Group,
    { top: top, left: left },
    seriesData.map(function (series, i) {
      return _react2.default.createElement('path', _extends({
        className: (0, _classnames2.default)('vx-stack', className),
        key: 'stack-' + i + '-' + (series.key || ''),
        d: path(series)
      }, (0, _additionalProps2.default)(restProps, {
        datum: series[i],
        index: i,
        series: series
      })));
    })
  );
}

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS5jZGNkZjAzNzEyNjQ3NWJjNTQyZC5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9jaGFydC5qcz81MTU0MDNmIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jbGFzc25hbWVzL2luZGV4LmpzPzA5ZWU4NzUiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0B2eC9zaGFwZS9idWlsZC91dGlsL2FkZGl0aW9uYWxQcm9wcy5qcz8wOWVlODc1Iiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kMy1zaGFwZS9pbmRleC5qcz8wOWVlODc1Iiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kMy1zaGFwZS9zcmMvY29uc3RhbnQuanM/MDllZTg3NSIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZDMtcGF0aC9pbmRleC5qcz9mMDRjMGE5Iiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kMy1zaGFwZS9zcmMvbWF0aC5qcz9mMDRjMGE5Iiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kMy1zaGFwZS9zcmMvb2Zmc2V0L25vbmUuanM/ZjA0YzBhOSIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZDMtc2hhcGUvc3JjL29yZGVyL25vbmUuanM/ZjA0YzBhOSIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHZ4L2dyb3VwL2J1aWxkL2luZGV4LmpzP2YwNGMwYTkiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2QzLXNoYXBlL3NyYy9jdXJ2ZS9saW5lYXIuanM/ZjA0YzBhOSIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZDMtc2hhcGUvc3JjL25vb3AuanM/ZjA0YzBhOSIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZDMtc2hhcGUvc3JjL2N1cnZlL2Jhc2lzLmpzP2YwNGMwYTkiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2QzLXNoYXBlL3NyYy9jdXJ2ZS9jYXJkaW5hbC5qcz9mMDRjMGE5Iiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9Adngvc2hhcGUvYnVpbGQvc2hhcGVzL0Jhci5qcz9mMDRjMGE5Iiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kMy1zaGFwZS9zcmMvbGluZS5qcz9mMDRjMGE5Iiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kMy1zaGFwZS9zcmMvcG9pbnQuanM/ZjA0YzBhOSIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZDMtc2hhcGUvc3JjL2N1cnZlL2NhdG11bGxSb20uanM/ZjA0YzBhOSIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZDMtc2hhcGUvc3JjL29yZGVyL2FzY2VuZGluZy5qcz9mMDRjMGE5Iiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kMy1zaGFwZS9zcmMvYXJlYS5qcz9mMDRjMGE5Iiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kMy1zaGFwZS9zcmMvY3VydmUvcmFkaWFsLmpzP2YwNGMwYTkiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2QzLXNoYXBlL3NyYy9saW5lUmFkaWFsLmpzP2YwNGMwYTkiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2QzLXNoYXBlL3NyYy9wb2ludFJhZGlhbC5qcz9mMDRjMGE5Iiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kMy1zaGFwZS9zcmMvYXJyYXkuanM/ZjA0YzBhOSIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZDMtc2hhcGUvc3JjL3N5bWJvbC9jaXJjbGUuanM/ZjA0YzBhOSIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZDMtc2hhcGUvc3JjL3N5bWJvbC9jcm9zcy5qcz9mMDRjMGE5Iiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kMy1zaGFwZS9zcmMvc3ltYm9sL2RpYW1vbmQuanM/ZjA0YzBhOSIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZDMtc2hhcGUvc3JjL3N5bWJvbC9zdGFyLmpzP2YwNGMwYTkiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2QzLXNoYXBlL3NyYy9zeW1ib2wvc3F1YXJlLmpzP2YwNGMwYTkiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2QzLXNoYXBlL3NyYy9zeW1ib2wvdHJpYW5nbGUuanM/ZjA0YzBhOSIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZDMtc2hhcGUvc3JjL3N5bWJvbC93eWUuanM/ZjA0YzBhOSIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZDMtc2hhcGUvc3JjL2N1cnZlL2NhcmRpbmFsQ2xvc2VkLmpzP2YwNGMwYTkiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2QzLXNoYXBlL3NyYy9jdXJ2ZS9jYXJkaW5hbE9wZW4uanM/ZjA0YzBhOSIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHZ4L3NoYXBlL2J1aWxkL3V0aWwvY2FsbE9yVmFsdWUuanM/ZjA0YzBhOSIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHZ4L3NoYXBlL2J1aWxkL3V0aWwvc3RhY2tPcmRlci5qcz9mNzgyYTBmIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9Adngvc2hhcGUvYnVpbGQvdXRpbC9zdGFja09mZnNldC5qcz9mNzgyYTBmIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9Adngvc2hhcGUvYnVpbGQvaW5kZXguanM/Zjc4MmEwZiIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHZ4L3NoYXBlL2J1aWxkL3NoYXBlcy9BcmMuanM/Zjc4MmEwZiIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZDMtc2hhcGUvc3JjL2FyYy5qcz9mNzgyYTBmIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kMy1wYXRoL3NyYy9wYXRoLmpzP2Y3ODJhMGYiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2QzLXNoYXBlL3NyYy9waWUuanM/Zjc4MmEwZiIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZDMtc2hhcGUvc3JjL2Rlc2NlbmRpbmcuanM/Zjc4MmEwZiIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZDMtc2hhcGUvc3JjL2lkZW50aXR5LmpzP2Y3ODJhMGYiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2QzLXNoYXBlL3NyYy9hcmVhUmFkaWFsLmpzP2Y3ODJhMGYiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2QzLXNoYXBlL3NyYy9saW5rL2luZGV4LmpzP2Y3ODJhMGYiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2QzLXNoYXBlL3NyYy9zeW1ib2wuanM/Zjc4MmEwZiIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZDMtc2hhcGUvc3JjL2N1cnZlL2Jhc2lzQ2xvc2VkLmpzP2Y3ODJhMGYiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2QzLXNoYXBlL3NyYy9jdXJ2ZS9iYXNpc09wZW4uanM/Zjc4MmEwZiIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZDMtc2hhcGUvc3JjL2N1cnZlL2J1bmRsZS5qcz9mNzgyYTBmIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kMy1zaGFwZS9zcmMvY3VydmUvY2F0bXVsbFJvbUNsb3NlZC5qcz9mNzgyYTBmIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kMy1zaGFwZS9zcmMvY3VydmUvY2F0bXVsbFJvbU9wZW4uanM/Zjc4MmEwZiIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZDMtc2hhcGUvc3JjL2N1cnZlL2xpbmVhckNsb3NlZC5qcz9mNzgyYTBmIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kMy1zaGFwZS9zcmMvY3VydmUvbW9ub3RvbmUuanM/Zjc4MmEwZiIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZDMtc2hhcGUvc3JjL2N1cnZlL25hdHVyYWwuanM/Zjc4MmEwZiIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZDMtc2hhcGUvc3JjL2N1cnZlL3N0ZXAuanM/Zjc4MmEwZiIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZDMtc2hhcGUvc3JjL3N0YWNrLmpzP2Y3ODJhMGYiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2QzLXNoYXBlL3NyYy9vZmZzZXQvZXhwYW5kLmpzP2Y3ODJhMGYiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2QzLXNoYXBlL3NyYy9vZmZzZXQvZGl2ZXJnaW5nLmpzP2Y3ODJhMGYiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2QzLXNoYXBlL3NyYy9vZmZzZXQvc2lsaG91ZXR0ZS5qcz9mNzgyYTBmIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kMy1zaGFwZS9zcmMvb2Zmc2V0L3dpZ2dsZS5qcz9mNzgyYTBmIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kMy1zaGFwZS9zcmMvb3JkZXIvZGVzY2VuZGluZy5qcz9mNzgyYTBmIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kMy1zaGFwZS9zcmMvb3JkZXIvaW5zaWRlT3V0LmpzP2Y3ODJhMGYiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2QzLXNoYXBlL3NyYy9vcmRlci9yZXZlcnNlLmpzP2ViN2I2M2EiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0B2eC9zaGFwZS9idWlsZC9zaGFwZXMvUGllLmpzP2ViN2I2M2EiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0B2eC9ncm91cC9idWlsZC9Hcm91cC5qcz9lYjdiNjNhIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9Adngvc2hhcGUvYnVpbGQvc2hhcGVzL0xpbmUuanM/ZWI3YjYzYSIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHZ4L3BvaW50L2J1aWxkL2luZGV4LmpzP2ViN2I2M2EiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0B2eC9wb2ludC9idWlsZC9Qb2ludC5qcz9lYjdiNjNhIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9Adngvc2hhcGUvYnVpbGQvc2hhcGVzL0xpbmVQYXRoLmpzP2ViN2I2M2EiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0B2eC9jdXJ2ZS9idWlsZC9pbmRleC5qcz9lYjdiNjNhIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9Adngvc2hhcGUvYnVpbGQvc2hhcGVzL0xpbmVSYWRpYWwuanM/ZWI3YjYzYSIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHZ4L3NoYXBlL2J1aWxkL3NoYXBlcy9saW5rL2RpYWdvbmFsL0xpbmtIb3Jpem9udGFsLmpzP2ViN2I2M2EiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0B2eC9zaGFwZS9idWlsZC9zaGFwZXMvbGluay9kaWFnb25hbC9MaW5rVmVydGljYWwuanM/ZWI3YjYzYSIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHZ4L3NoYXBlL2J1aWxkL3NoYXBlcy9saW5rL2RpYWdvbmFsL0xpbmtSYWRpYWwuanM/ZWI3YjYzYSIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHZ4L3NoYXBlL2J1aWxkL3NoYXBlcy9saW5rL2N1cnZlL0xpbmtIb3Jpem9udGFsQ3VydmUuanM/ZWI3YjYzYSIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHZ4L3NoYXBlL2J1aWxkL3NoYXBlcy9saW5rL2N1cnZlL0xpbmtWZXJ0aWNhbEN1cnZlLmpzP2ViN2I2M2EiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0B2eC9zaGFwZS9idWlsZC9zaGFwZXMvbGluay9jdXJ2ZS9MaW5rUmFkaWFsQ3VydmUuanM/ZWI3YjYzYSIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHZ4L3NoYXBlL2J1aWxkL3NoYXBlcy9saW5rL2xpbmUvTGlua0hvcml6b250YWxMaW5lLmpzP2ViN2I2M2EiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0B2eC9zaGFwZS9idWlsZC9zaGFwZXMvbGluay9saW5lL0xpbmtWZXJ0aWNhbExpbmUuanM/ZWI3YjYzYSIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHZ4L3NoYXBlL2J1aWxkL3NoYXBlcy9saW5rL2xpbmUvTGlua1JhZGlhbExpbmUuanM/ZWI3YjYzYSIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHZ4L3NoYXBlL2J1aWxkL3NoYXBlcy9saW5rL3N0ZXAvTGlua0hvcml6b250YWxTdGVwLmpzP2ViN2I2M2EiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0B2eC9zaGFwZS9idWlsZC9zaGFwZXMvbGluay9zdGVwL0xpbmtWZXJ0aWNhbFN0ZXAuanM/ZWI3YjYzYSIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHZ4L3NoYXBlL2J1aWxkL3NoYXBlcy9saW5rL3N0ZXAvTGlua1JhZGlhbFN0ZXAuanM/ZWI3YjYzYSIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHZ4L3NoYXBlL2J1aWxkL3NoYXBlcy9BcmVhLmpzP2ViN2I2M2EiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0B2eC9zaGFwZS9idWlsZC9zaGFwZXMvQXJlYUNsb3NlZC5qcz9lYjdiNjNhIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9Adngvc2hhcGUvYnVpbGQvc2hhcGVzL0FyZWFTdGFjay5qcz9lYjdiNjNhIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9Adngvc2hhcGUvYnVpbGQvc2hhcGVzL0Jhckdyb3VwLmpzP2ViN2I2M2EiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0B2eC9zaGFwZS9idWlsZC9zaGFwZXMvQmFyU3RhY2suanM/ZWI3YjYzYSIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHZ4L3NoYXBlL2J1aWxkL3NoYXBlcy9CYXJTdGFja0hvcml6b250YWwuanM/ZWI3YjYzYSIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHZ4L3NoYXBlL2J1aWxkL3NoYXBlcy9TdGFjay5qcz9lYjdiNjNhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHdpdGhQYXJlbnRTaXplIH0gZnJvbSBcIkB2eC9yZXNwb25zaXZlXCI7XG4vLyBJbXBvcnQgZDMgbWV0aG9kcyB0byByZW5kZXIgeCBhbmQgeSBheGlzXG5pbXBvcnQgeyBzY2FsZVRpbWUsIHNjYWxlTGluZWFyIH0gZnJvbSBcIkB2eC9zY2FsZVwiO1xuaW1wb3J0IHsgTGluZVBhdGggfSBmcm9tIFwiQHZ4L3NoYXBlXCI7XG5cbmZ1bmN0aW9uIENoYXJ0KHsgZGF0YSwgcGFyZW50V2lkdGgsIHBhcmVudEhlaWdodCB9KSB7XG4gIC8qKiBEZWZpbmUgbWFyZ2luIGZvciB0aGlzIGRpdiB0byBwYXNzIHRvIGNhbGN1bGF0aW9uIGZvciBzdmcgKi9cbiAgY29uc3QgbWFyZ2luID0ge1xuICAgIHRvcDogMTUsXG4gICAgYm90dG9tOiA0MCxcbiAgICBsZWZ0OiAwLFxuICAgIHJpZ2h0OiAwXG4gIH07XG4gIGNvbnN0IHdpZHRoID0gcGFyZW50V2lkdGggLSBtYXJnaW4ubGVmdCAtIG1hcmdpbi5yaWdodDtcbiAgY29uc3QgaGVpZ2h0ID0gcGFyZW50SGVpZ2h0IC0gbWFyZ2luLnRvcCAtIG1hcmdpbi5ib3R0b207XG5cbiAgLyoqIERlZmluZSBhY2Nlc3NvclxuICAgKiBzZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kMy9kMy1hcnJheSNkMy1hcnJheVxuICAgKiBkZWZpbmUgeCBhbmQgd2hhdCBkYXRhIHBvaW50IHdlIHdhbnQgZm9yIGVhY2ggeCBhdCB0aGF0IGQvZGF0YSBwb2ludCxcbiAgICogIHRoZW4gZG8gc2FtZSBmb3IgeVxuICAgKiBmb3IgeCB3ZSB3YW50IHRoZSBkYXRlIG9uIHRoZSByZXR1cm5lZCBiaXRjb2luIHZhbHVlIGpzb25cbiAgICogZm9yIHkgd2Ugd2FudCB0aGUgcHJpY2Ugb24gdGhhdCBkIC8gZGF0YSBwb2ludFxuICAgKi9cblxuICBjb25zdCB4ID0gZCA9PiBuZXcgRGF0ZShkLnRpbWUpO1xuICBjb25zdCB5ID0gZCA9PiBkLnByaWNlO1xuXG4gIC8qKiBTY2FsZSB2YWx1ZSB0byBtYXAgdmFsdWUgZnJvbSBhIGRvbWFpbiB0byByYW5nZVxuICAgKiBzZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kMy9kMy1zY2FsZVxuICAgKiByYW5nZSBkZWZpbmVzIHN0YXJ0aW5nIHBvaW50IGZvciBkYXRhIHRvIHNob3cgYW5kIGVuZHBvaW50XG4gICAqIGRvbWFpbiBpcyB3aGF0IGRhdGEgdG8gc3ByZWFkIG92ZXIgdGhhdCByYW5nZS5cbiAgICovXG5cbiAgLyoqIHN0b3JlIG1pbiBtYXggeSB2YWx1ZXMgdG8gcmV1c2UgbGF0ZXIgKi9cblxuICBjb25zdCBtaW5QcmljZSA9IE1hdGgubWluKC4uLmRhdGEubWFwKHkpKTtcbiAgY29uc3QgbWF4UHJpY2UgPSBNYXRoLm1heCguLi5kYXRhLm1hcCh5KSk7XG4gIGNvbnN0IHhTY2FsZSA9IHNjYWxlVGltZSh7XG4gICAgcmFuZ2U6IFswLCB3aWR0aF0sXG4gICAgZG9tYWluOiBbTWF0aC5taW4oLi4uZGF0YS5tYXAoeCkpLCBNYXRoLm1heCguLi5kYXRhLm1hcCh4KSldXG4gIH0pO1xuXG4gIGNvbnN0IHlTY2FsZSA9IHNjYWxlTGluZWFyKHtcbiAgICByYW5nZTogW2hlaWdodCwgMF0sXG4gICAgZG9tYWluOiBbbWluUHJpY2UsIG1heFByaWNlXVxuICB9KTtcblxuICBjb25zb2xlLmxvZyh4U2NhbGUuZG9tYWluKCkpO1xuICBjb25zb2xlLmxvZyh5U2NhbGUuZG9tYWluKCkpO1xuXG4gIC8vICAgY2FsbCA8TGluZVBhdGgsIHBhc3MgaW4gdGhlIGRhdGEsIHhTY2FsZSwgeVNjYWxlIGRvbWFpbiBtYXBwZXJzLFxuICAvLyAgYW5kIHggYW5kIHkgYWNjZXNzb3JzXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxzdmcgd2lkdGg9e3dpZHRofSBoZWlnaHQ9e2hlaWdodH0+XG4gICAgICAgIDxMaW5lUGF0aCBkYXRhPXtkYXRhfSB5U2NhbGU9e3lTY2FsZX0geFNjYWxlPXt4U2NhbGV9IHg9e3h9IHk9e3l9IC8+XG4gICAgICA8L3N2Zz5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFBhcmVudFNpemUoQ2hhcnQpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9jaGFydC5qcyIsIi8qIVxuICBDb3B5cmlnaHQgKGMpIDIwMTYgSmVkIFdhdHNvbi5cbiAgTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlIChNSVQpLCBzZWVcbiAgaHR0cDovL2plZHdhdHNvbi5naXRodWIuaW8vY2xhc3NuYW1lc1xuKi9cbi8qIGdsb2JhbCBkZWZpbmUgKi9cblxuKGZ1bmN0aW9uICgpIHtcblx0J3VzZSBzdHJpY3QnO1xuXG5cdHZhciBoYXNPd24gPSB7fS5oYXNPd25Qcm9wZXJ0eTtcblxuXHRmdW5jdGlvbiBjbGFzc05hbWVzICgpIHtcblx0XHR2YXIgY2xhc3NlcyA9IFtdO1xuXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBhcmcgPSBhcmd1bWVudHNbaV07XG5cdFx0XHRpZiAoIWFyZykgY29udGludWU7XG5cblx0XHRcdHZhciBhcmdUeXBlID0gdHlwZW9mIGFyZztcblxuXHRcdFx0aWYgKGFyZ1R5cGUgPT09ICdzdHJpbmcnIHx8IGFyZ1R5cGUgPT09ICdudW1iZXInKSB7XG5cdFx0XHRcdGNsYXNzZXMucHVzaChhcmcpO1xuXHRcdFx0fSBlbHNlIGlmIChBcnJheS5pc0FycmF5KGFyZykpIHtcblx0XHRcdFx0Y2xhc3Nlcy5wdXNoKGNsYXNzTmFtZXMuYXBwbHkobnVsbCwgYXJnKSk7XG5cdFx0XHR9IGVsc2UgaWYgKGFyZ1R5cGUgPT09ICdvYmplY3QnKSB7XG5cdFx0XHRcdGZvciAodmFyIGtleSBpbiBhcmcpIHtcblx0XHRcdFx0XHRpZiAoaGFzT3duLmNhbGwoYXJnLCBrZXkpICYmIGFyZ1trZXldKSB7XG5cdFx0XHRcdFx0XHRjbGFzc2VzLnB1c2goa2V5KTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4gY2xhc3Nlcy5qb2luKCcgJyk7XG5cdH1cblxuXHRpZiAodHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcgJiYgbW9kdWxlLmV4cG9ydHMpIHtcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGNsYXNzTmFtZXM7XG5cdH0gZWxzZSBpZiAodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiB0eXBlb2YgZGVmaW5lLmFtZCA9PT0gJ29iamVjdCcgJiYgZGVmaW5lLmFtZCkge1xuXHRcdC8vIHJlZ2lzdGVyIGFzICdjbGFzc25hbWVzJywgY29uc2lzdGVudCB3aXRoIG5wbSBwYWNrYWdlIG5hbWVcblx0XHRkZWZpbmUoJ2NsYXNzbmFtZXMnLCBbXSwgZnVuY3Rpb24gKCkge1xuXHRcdFx0cmV0dXJuIGNsYXNzTmFtZXM7XG5cdFx0fSk7XG5cdH0gZWxzZSB7XG5cdFx0d2luZG93LmNsYXNzTmFtZXMgPSBjbGFzc05hbWVzO1xuXHR9XG59KCkpO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY2xhc3NuYW1lcy9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gNTY2XG4vLyBtb2R1bGUgY2h1bmtzID0gNSIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IGFkZGl0aW9uYWxQcm9wcztcblxudmFyIF9jYWxsT3JWYWx1ZSA9IHJlcXVpcmUoJy4vY2FsbE9yVmFsdWUnKTtcblxudmFyIF9jYWxsT3JWYWx1ZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jYWxsT3JWYWx1ZSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIGFkZGl0aW9uYWxQcm9wcyhyZXN0UHJvcHMsIGRhdGEpIHtcbiAgcmV0dXJuIE9iamVjdC5rZXlzKHJlc3RQcm9wcykucmVkdWNlKGZ1bmN0aW9uIChyZXQsIGN1cikge1xuICAgIHJldFtjdXJdID0gKDAsIF9jYWxsT3JWYWx1ZTIuZGVmYXVsdCkocmVzdFByb3BzW2N1cl0sIGRhdGEpO1xuICAgIHJldHVybiByZXQ7XG4gIH0sIHt9KTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9Adngvc2hhcGUvYnVpbGQvdXRpbC9hZGRpdGlvbmFsUHJvcHMuanNcbi8vIG1vZHVsZSBpZCA9IDU2N1xuLy8gbW9kdWxlIGNodW5rcyA9IDUiLCJleHBvcnQge2RlZmF1bHQgYXMgYXJjfSBmcm9tIFwiLi9zcmMvYXJjXCI7XG5leHBvcnQge2RlZmF1bHQgYXMgYXJlYX0gZnJvbSBcIi4vc3JjL2FyZWFcIjtcbmV4cG9ydCB7ZGVmYXVsdCBhcyBsaW5lfSBmcm9tIFwiLi9zcmMvbGluZVwiO1xuZXhwb3J0IHtkZWZhdWx0IGFzIHBpZX0gZnJvbSBcIi4vc3JjL3BpZVwiO1xuZXhwb3J0IHtkZWZhdWx0IGFzIGFyZWFSYWRpYWwsIGRlZmF1bHQgYXMgcmFkaWFsQXJlYX0gZnJvbSBcIi4vc3JjL2FyZWFSYWRpYWxcIjsgLy8gTm90ZTogcmFkaWFsQXJlYSBpcyBkZXByZWNhdGVkIVxuZXhwb3J0IHtkZWZhdWx0IGFzIGxpbmVSYWRpYWwsIGRlZmF1bHQgYXMgcmFkaWFsTGluZX0gZnJvbSBcIi4vc3JjL2xpbmVSYWRpYWxcIjsgLy8gTm90ZTogcmFkaWFsTGluZSBpcyBkZXByZWNhdGVkIVxuZXhwb3J0IHtkZWZhdWx0IGFzIHBvaW50UmFkaWFsfSBmcm9tIFwiLi9zcmMvcG9pbnRSYWRpYWxcIjtcbmV4cG9ydCB7bGlua0hvcml6b250YWwsIGxpbmtWZXJ0aWNhbCwgbGlua1JhZGlhbH0gZnJvbSBcIi4vc3JjL2xpbmsvaW5kZXhcIjtcblxuZXhwb3J0IHtkZWZhdWx0IGFzIHN5bWJvbCwgc3ltYm9sc30gZnJvbSBcIi4vc3JjL3N5bWJvbFwiO1xuZXhwb3J0IHtkZWZhdWx0IGFzIHN5bWJvbENpcmNsZX0gZnJvbSBcIi4vc3JjL3N5bWJvbC9jaXJjbGVcIjtcbmV4cG9ydCB7ZGVmYXVsdCBhcyBzeW1ib2xDcm9zc30gZnJvbSBcIi4vc3JjL3N5bWJvbC9jcm9zc1wiO1xuZXhwb3J0IHtkZWZhdWx0IGFzIHN5bWJvbERpYW1vbmR9IGZyb20gXCIuL3NyYy9zeW1ib2wvZGlhbW9uZFwiO1xuZXhwb3J0IHtkZWZhdWx0IGFzIHN5bWJvbFNxdWFyZX0gZnJvbSBcIi4vc3JjL3N5bWJvbC9zcXVhcmVcIjtcbmV4cG9ydCB7ZGVmYXVsdCBhcyBzeW1ib2xTdGFyfSBmcm9tIFwiLi9zcmMvc3ltYm9sL3N0YXJcIjtcbmV4cG9ydCB7ZGVmYXVsdCBhcyBzeW1ib2xUcmlhbmdsZX0gZnJvbSBcIi4vc3JjL3N5bWJvbC90cmlhbmdsZVwiO1xuZXhwb3J0IHtkZWZhdWx0IGFzIHN5bWJvbFd5ZX0gZnJvbSBcIi4vc3JjL3N5bWJvbC93eWVcIjtcblxuZXhwb3J0IHtkZWZhdWx0IGFzIGN1cnZlQmFzaXNDbG9zZWR9IGZyb20gXCIuL3NyYy9jdXJ2ZS9iYXNpc0Nsb3NlZFwiO1xuZXhwb3J0IHtkZWZhdWx0IGFzIGN1cnZlQmFzaXNPcGVufSBmcm9tIFwiLi9zcmMvY3VydmUvYmFzaXNPcGVuXCI7XG5leHBvcnQge2RlZmF1bHQgYXMgY3VydmVCYXNpc30gZnJvbSBcIi4vc3JjL2N1cnZlL2Jhc2lzXCI7XG5leHBvcnQge2RlZmF1bHQgYXMgY3VydmVCdW5kbGV9IGZyb20gXCIuL3NyYy9jdXJ2ZS9idW5kbGVcIjtcbmV4cG9ydCB7ZGVmYXVsdCBhcyBjdXJ2ZUNhcmRpbmFsQ2xvc2VkfSBmcm9tIFwiLi9zcmMvY3VydmUvY2FyZGluYWxDbG9zZWRcIjtcbmV4cG9ydCB7ZGVmYXVsdCBhcyBjdXJ2ZUNhcmRpbmFsT3Blbn0gZnJvbSBcIi4vc3JjL2N1cnZlL2NhcmRpbmFsT3BlblwiO1xuZXhwb3J0IHtkZWZhdWx0IGFzIGN1cnZlQ2FyZGluYWx9IGZyb20gXCIuL3NyYy9jdXJ2ZS9jYXJkaW5hbFwiO1xuZXhwb3J0IHtkZWZhdWx0IGFzIGN1cnZlQ2F0bXVsbFJvbUNsb3NlZH0gZnJvbSBcIi4vc3JjL2N1cnZlL2NhdG11bGxSb21DbG9zZWRcIjtcbmV4cG9ydCB7ZGVmYXVsdCBhcyBjdXJ2ZUNhdG11bGxSb21PcGVufSBmcm9tIFwiLi9zcmMvY3VydmUvY2F0bXVsbFJvbU9wZW5cIjtcbmV4cG9ydCB7ZGVmYXVsdCBhcyBjdXJ2ZUNhdG11bGxSb219IGZyb20gXCIuL3NyYy9jdXJ2ZS9jYXRtdWxsUm9tXCI7XG5leHBvcnQge2RlZmF1bHQgYXMgY3VydmVMaW5lYXJDbG9zZWR9IGZyb20gXCIuL3NyYy9jdXJ2ZS9saW5lYXJDbG9zZWRcIjtcbmV4cG9ydCB7ZGVmYXVsdCBhcyBjdXJ2ZUxpbmVhcn0gZnJvbSBcIi4vc3JjL2N1cnZlL2xpbmVhclwiO1xuZXhwb3J0IHttb25vdG9uZVggYXMgY3VydmVNb25vdG9uZVgsIG1vbm90b25lWSBhcyBjdXJ2ZU1vbm90b25lWX0gZnJvbSBcIi4vc3JjL2N1cnZlL21vbm90b25lXCI7XG5leHBvcnQge2RlZmF1bHQgYXMgY3VydmVOYXR1cmFsfSBmcm9tIFwiLi9zcmMvY3VydmUvbmF0dXJhbFwiO1xuZXhwb3J0IHtkZWZhdWx0IGFzIGN1cnZlU3RlcCwgc3RlcEFmdGVyIGFzIGN1cnZlU3RlcEFmdGVyLCBzdGVwQmVmb3JlIGFzIGN1cnZlU3RlcEJlZm9yZX0gZnJvbSBcIi4vc3JjL2N1cnZlL3N0ZXBcIjtcblxuZXhwb3J0IHtkZWZhdWx0IGFzIHN0YWNrfSBmcm9tIFwiLi9zcmMvc3RhY2tcIjtcbmV4cG9ydCB7ZGVmYXVsdCBhcyBzdGFja09mZnNldEV4cGFuZH0gZnJvbSBcIi4vc3JjL29mZnNldC9leHBhbmRcIjtcbmV4cG9ydCB7ZGVmYXVsdCBhcyBzdGFja09mZnNldERpdmVyZ2luZ30gZnJvbSBcIi4vc3JjL29mZnNldC9kaXZlcmdpbmdcIjtcbmV4cG9ydCB7ZGVmYXVsdCBhcyBzdGFja09mZnNldE5vbmV9IGZyb20gXCIuL3NyYy9vZmZzZXQvbm9uZVwiO1xuZXhwb3J0IHtkZWZhdWx0IGFzIHN0YWNrT2Zmc2V0U2lsaG91ZXR0ZX0gZnJvbSBcIi4vc3JjL29mZnNldC9zaWxob3VldHRlXCI7XG5leHBvcnQge2RlZmF1bHQgYXMgc3RhY2tPZmZzZXRXaWdnbGV9IGZyb20gXCIuL3NyYy9vZmZzZXQvd2lnZ2xlXCI7XG5leHBvcnQge2RlZmF1bHQgYXMgc3RhY2tPcmRlckFzY2VuZGluZ30gZnJvbSBcIi4vc3JjL29yZGVyL2FzY2VuZGluZ1wiO1xuZXhwb3J0IHtkZWZhdWx0IGFzIHN0YWNrT3JkZXJEZXNjZW5kaW5nfSBmcm9tIFwiLi9zcmMvb3JkZXIvZGVzY2VuZGluZ1wiO1xuZXhwb3J0IHtkZWZhdWx0IGFzIHN0YWNrT3JkZXJJbnNpZGVPdXR9IGZyb20gXCIuL3NyYy9vcmRlci9pbnNpZGVPdXRcIjtcbmV4cG9ydCB7ZGVmYXVsdCBhcyBzdGFja09yZGVyTm9uZX0gZnJvbSBcIi4vc3JjL29yZGVyL25vbmVcIjtcbmV4cG9ydCB7ZGVmYXVsdCBhcyBzdGFja09yZGVyUmV2ZXJzZX0gZnJvbSBcIi4vc3JjL29yZGVyL3JldmVyc2VcIjtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2QzLXNoYXBlL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSA1Njhcbi8vIG1vZHVsZSBjaHVua3MgPSA1IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oeCkge1xuICByZXR1cm4gZnVuY3Rpb24gY29uc3RhbnQoKSB7XG4gICAgcmV0dXJuIHg7XG4gIH07XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9kMy1zaGFwZS9zcmMvY29uc3RhbnQuanNcbi8vIG1vZHVsZSBpZCA9IDU2OVxuLy8gbW9kdWxlIGNodW5rcyA9IDUiLCJleHBvcnQge2RlZmF1bHQgYXMgcGF0aH0gZnJvbSBcIi4vc3JjL3BhdGhcIjtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2QzLXBhdGgvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDU3MFxuLy8gbW9kdWxlIGNodW5rcyA9IDUiLCJleHBvcnQgdmFyIGFicyA9IE1hdGguYWJzO1xuZXhwb3J0IHZhciBhdGFuMiA9IE1hdGguYXRhbjI7XG5leHBvcnQgdmFyIGNvcyA9IE1hdGguY29zO1xuZXhwb3J0IHZhciBtYXggPSBNYXRoLm1heDtcbmV4cG9ydCB2YXIgbWluID0gTWF0aC5taW47XG5leHBvcnQgdmFyIHNpbiA9IE1hdGguc2luO1xuZXhwb3J0IHZhciBzcXJ0ID0gTWF0aC5zcXJ0O1xuXG5leHBvcnQgdmFyIGVwc2lsb24gPSAxZS0xMjtcbmV4cG9ydCB2YXIgcGkgPSBNYXRoLlBJO1xuZXhwb3J0IHZhciBoYWxmUGkgPSBwaSAvIDI7XG5leHBvcnQgdmFyIHRhdSA9IDIgKiBwaTtcblxuZXhwb3J0IGZ1bmN0aW9uIGFjb3MoeCkge1xuICByZXR1cm4geCA+IDEgPyAwIDogeCA8IC0xID8gcGkgOiBNYXRoLmFjb3MoeCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhc2luKHgpIHtcbiAgcmV0dXJuIHggPj0gMSA/IGhhbGZQaSA6IHggPD0gLTEgPyAtaGFsZlBpIDogTWF0aC5hc2luKHgpO1xufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvZDMtc2hhcGUvc3JjL21hdGguanNcbi8vIG1vZHVsZSBpZCA9IDU3MVxuLy8gbW9kdWxlIGNodW5rcyA9IDUiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbihzZXJpZXMsIG9yZGVyKSB7XG4gIGlmICghKChuID0gc2VyaWVzLmxlbmd0aCkgPiAxKSkgcmV0dXJuO1xuICBmb3IgKHZhciBpID0gMSwgaiwgczAsIHMxID0gc2VyaWVzW29yZGVyWzBdXSwgbiwgbSA9IHMxLmxlbmd0aDsgaSA8IG47ICsraSkge1xuICAgIHMwID0gczEsIHMxID0gc2VyaWVzW29yZGVyW2ldXTtcbiAgICBmb3IgKGogPSAwOyBqIDwgbTsgKytqKSB7XG4gICAgICBzMVtqXVsxXSArPSBzMVtqXVswXSA9IGlzTmFOKHMwW2pdWzFdKSA/IHMwW2pdWzBdIDogczBbal1bMV07XG4gICAgfVxuICB9XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9kMy1zaGFwZS9zcmMvb2Zmc2V0L25vbmUuanNcbi8vIG1vZHVsZSBpZCA9IDU3MlxuLy8gbW9kdWxlIGNodW5rcyA9IDUiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbihzZXJpZXMpIHtcbiAgdmFyIG4gPSBzZXJpZXMubGVuZ3RoLCBvID0gbmV3IEFycmF5KG4pO1xuICB3aGlsZSAoLS1uID49IDApIG9bbl0gPSBuO1xuICByZXR1cm4gbztcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2QzLXNoYXBlL3NyYy9vcmRlci9ub25lLmpzXG4vLyBtb2R1bGUgaWQgPSA1NzNcbi8vIG1vZHVsZSBjaHVua3MgPSA1IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX0dyb3VwID0gcmVxdWlyZSgnLi9Hcm91cCcpO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ0dyb3VwJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICByZXR1cm4gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfR3JvdXApLmRlZmF1bHQ7XG4gIH1cbn0pO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL0B2eC9ncm91cC9idWlsZC9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gNTc0XG4vLyBtb2R1bGUgY2h1bmtzID0gNSIsImZ1bmN0aW9uIExpbmVhcihjb250ZXh0KSB7XG4gIHRoaXMuX2NvbnRleHQgPSBjb250ZXh0O1xufVxuXG5MaW5lYXIucHJvdG90eXBlID0ge1xuICBhcmVhU3RhcnQ6IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuX2xpbmUgPSAwO1xuICB9LFxuICBhcmVhRW5kOiBmdW5jdGlvbigpIHtcbiAgICB0aGlzLl9saW5lID0gTmFOO1xuICB9LFxuICBsaW5lU3RhcnQ6IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuX3BvaW50ID0gMDtcbiAgfSxcbiAgbGluZUVuZDogZnVuY3Rpb24oKSB7XG4gICAgaWYgKHRoaXMuX2xpbmUgfHwgKHRoaXMuX2xpbmUgIT09IDAgJiYgdGhpcy5fcG9pbnQgPT09IDEpKSB0aGlzLl9jb250ZXh0LmNsb3NlUGF0aCgpO1xuICAgIHRoaXMuX2xpbmUgPSAxIC0gdGhpcy5fbGluZTtcbiAgfSxcbiAgcG9pbnQ6IGZ1bmN0aW9uKHgsIHkpIHtcbiAgICB4ID0gK3gsIHkgPSAreTtcbiAgICBzd2l0Y2ggKHRoaXMuX3BvaW50KSB7XG4gICAgICBjYXNlIDA6IHRoaXMuX3BvaW50ID0gMTsgdGhpcy5fbGluZSA/IHRoaXMuX2NvbnRleHQubGluZVRvKHgsIHkpIDogdGhpcy5fY29udGV4dC5tb3ZlVG8oeCwgeSk7IGJyZWFrO1xuICAgICAgY2FzZSAxOiB0aGlzLl9wb2ludCA9IDI7IC8vIHByb2NlZWRcbiAgICAgIGRlZmF1bHQ6IHRoaXMuX2NvbnRleHQubGluZVRvKHgsIHkpOyBicmVhaztcbiAgICB9XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKGNvbnRleHQpIHtcbiAgcmV0dXJuIG5ldyBMaW5lYXIoY29udGV4dCk7XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9kMy1zaGFwZS9zcmMvY3VydmUvbGluZWFyLmpzXG4vLyBtb2R1bGUgaWQgPSA1NzVcbi8vIG1vZHVsZSBjaHVua3MgPSA1IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oKSB7fVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvZDMtc2hhcGUvc3JjL25vb3AuanNcbi8vIG1vZHVsZSBpZCA9IDU3NlxuLy8gbW9kdWxlIGNodW5rcyA9IDUiLCJleHBvcnQgZnVuY3Rpb24gcG9pbnQodGhhdCwgeCwgeSkge1xuICB0aGF0Ll9jb250ZXh0LmJlemllckN1cnZlVG8oXG4gICAgKDIgKiB0aGF0Ll94MCArIHRoYXQuX3gxKSAvIDMsXG4gICAgKDIgKiB0aGF0Ll95MCArIHRoYXQuX3kxKSAvIDMsXG4gICAgKHRoYXQuX3gwICsgMiAqIHRoYXQuX3gxKSAvIDMsXG4gICAgKHRoYXQuX3kwICsgMiAqIHRoYXQuX3kxKSAvIDMsXG4gICAgKHRoYXQuX3gwICsgNCAqIHRoYXQuX3gxICsgeCkgLyA2LFxuICAgICh0aGF0Ll95MCArIDQgKiB0aGF0Ll95MSArIHkpIC8gNlxuICApO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gQmFzaXMoY29udGV4dCkge1xuICB0aGlzLl9jb250ZXh0ID0gY29udGV4dDtcbn1cblxuQmFzaXMucHJvdG90eXBlID0ge1xuICBhcmVhU3RhcnQ6IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuX2xpbmUgPSAwO1xuICB9LFxuICBhcmVhRW5kOiBmdW5jdGlvbigpIHtcbiAgICB0aGlzLl9saW5lID0gTmFOO1xuICB9LFxuICBsaW5lU3RhcnQ6IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuX3gwID0gdGhpcy5feDEgPVxuICAgIHRoaXMuX3kwID0gdGhpcy5feTEgPSBOYU47XG4gICAgdGhpcy5fcG9pbnQgPSAwO1xuICB9LFxuICBsaW5lRW5kOiBmdW5jdGlvbigpIHtcbiAgICBzd2l0Y2ggKHRoaXMuX3BvaW50KSB7XG4gICAgICBjYXNlIDM6IHBvaW50KHRoaXMsIHRoaXMuX3gxLCB0aGlzLl95MSk7IC8vIHByb2NlZWRcbiAgICAgIGNhc2UgMjogdGhpcy5fY29udGV4dC5saW5lVG8odGhpcy5feDEsIHRoaXMuX3kxKTsgYnJlYWs7XG4gICAgfVxuICAgIGlmICh0aGlzLl9saW5lIHx8ICh0aGlzLl9saW5lICE9PSAwICYmIHRoaXMuX3BvaW50ID09PSAxKSkgdGhpcy5fY29udGV4dC5jbG9zZVBhdGgoKTtcbiAgICB0aGlzLl9saW5lID0gMSAtIHRoaXMuX2xpbmU7XG4gIH0sXG4gIHBvaW50OiBmdW5jdGlvbih4LCB5KSB7XG4gICAgeCA9ICt4LCB5ID0gK3k7XG4gICAgc3dpdGNoICh0aGlzLl9wb2ludCkge1xuICAgICAgY2FzZSAwOiB0aGlzLl9wb2ludCA9IDE7IHRoaXMuX2xpbmUgPyB0aGlzLl9jb250ZXh0LmxpbmVUbyh4LCB5KSA6IHRoaXMuX2NvbnRleHQubW92ZVRvKHgsIHkpOyBicmVhaztcbiAgICAgIGNhc2UgMTogdGhpcy5fcG9pbnQgPSAyOyBicmVhaztcbiAgICAgIGNhc2UgMjogdGhpcy5fcG9pbnQgPSAzOyB0aGlzLl9jb250ZXh0LmxpbmVUbygoNSAqIHRoaXMuX3gwICsgdGhpcy5feDEpIC8gNiwgKDUgKiB0aGlzLl95MCArIHRoaXMuX3kxKSAvIDYpOyAvLyBwcm9jZWVkXG4gICAgICBkZWZhdWx0OiBwb2ludCh0aGlzLCB4LCB5KTsgYnJlYWs7XG4gICAgfVxuICAgIHRoaXMuX3gwID0gdGhpcy5feDEsIHRoaXMuX3gxID0geDtcbiAgICB0aGlzLl95MCA9IHRoaXMuX3kxLCB0aGlzLl95MSA9IHk7XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKGNvbnRleHQpIHtcbiAgcmV0dXJuIG5ldyBCYXNpcyhjb250ZXh0KTtcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2QzLXNoYXBlL3NyYy9jdXJ2ZS9iYXNpcy5qc1xuLy8gbW9kdWxlIGlkID0gNTc3XG4vLyBtb2R1bGUgY2h1bmtzID0gNSIsImV4cG9ydCBmdW5jdGlvbiBwb2ludCh0aGF0LCB4LCB5KSB7XG4gIHRoYXQuX2NvbnRleHQuYmV6aWVyQ3VydmVUbyhcbiAgICB0aGF0Ll94MSArIHRoYXQuX2sgKiAodGhhdC5feDIgLSB0aGF0Ll94MCksXG4gICAgdGhhdC5feTEgKyB0aGF0Ll9rICogKHRoYXQuX3kyIC0gdGhhdC5feTApLFxuICAgIHRoYXQuX3gyICsgdGhhdC5fayAqICh0aGF0Ll94MSAtIHgpLFxuICAgIHRoYXQuX3kyICsgdGhhdC5fayAqICh0aGF0Ll95MSAtIHkpLFxuICAgIHRoYXQuX3gyLFxuICAgIHRoYXQuX3kyXG4gICk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBDYXJkaW5hbChjb250ZXh0LCB0ZW5zaW9uKSB7XG4gIHRoaXMuX2NvbnRleHQgPSBjb250ZXh0O1xuICB0aGlzLl9rID0gKDEgLSB0ZW5zaW9uKSAvIDY7XG59XG5cbkNhcmRpbmFsLnByb3RvdHlwZSA9IHtcbiAgYXJlYVN0YXJ0OiBmdW5jdGlvbigpIHtcbiAgICB0aGlzLl9saW5lID0gMDtcbiAgfSxcbiAgYXJlYUVuZDogZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5fbGluZSA9IE5hTjtcbiAgfSxcbiAgbGluZVN0YXJ0OiBmdW5jdGlvbigpIHtcbiAgICB0aGlzLl94MCA9IHRoaXMuX3gxID0gdGhpcy5feDIgPVxuICAgIHRoaXMuX3kwID0gdGhpcy5feTEgPSB0aGlzLl95MiA9IE5hTjtcbiAgICB0aGlzLl9wb2ludCA9IDA7XG4gIH0sXG4gIGxpbmVFbmQ6IGZ1bmN0aW9uKCkge1xuICAgIHN3aXRjaCAodGhpcy5fcG9pbnQpIHtcbiAgICAgIGNhc2UgMjogdGhpcy5fY29udGV4dC5saW5lVG8odGhpcy5feDIsIHRoaXMuX3kyKTsgYnJlYWs7XG4gICAgICBjYXNlIDM6IHBvaW50KHRoaXMsIHRoaXMuX3gxLCB0aGlzLl95MSk7IGJyZWFrO1xuICAgIH1cbiAgICBpZiAodGhpcy5fbGluZSB8fCAodGhpcy5fbGluZSAhPT0gMCAmJiB0aGlzLl9wb2ludCA9PT0gMSkpIHRoaXMuX2NvbnRleHQuY2xvc2VQYXRoKCk7XG4gICAgdGhpcy5fbGluZSA9IDEgLSB0aGlzLl9saW5lO1xuICB9LFxuICBwb2ludDogZnVuY3Rpb24oeCwgeSkge1xuICAgIHggPSAreCwgeSA9ICt5O1xuICAgIHN3aXRjaCAodGhpcy5fcG9pbnQpIHtcbiAgICAgIGNhc2UgMDogdGhpcy5fcG9pbnQgPSAxOyB0aGlzLl9saW5lID8gdGhpcy5fY29udGV4dC5saW5lVG8oeCwgeSkgOiB0aGlzLl9jb250ZXh0Lm1vdmVUbyh4LCB5KTsgYnJlYWs7XG4gICAgICBjYXNlIDE6IHRoaXMuX3BvaW50ID0gMjsgdGhpcy5feDEgPSB4LCB0aGlzLl95MSA9IHk7IGJyZWFrO1xuICAgICAgY2FzZSAyOiB0aGlzLl9wb2ludCA9IDM7IC8vIHByb2NlZWRcbiAgICAgIGRlZmF1bHQ6IHBvaW50KHRoaXMsIHgsIHkpOyBicmVhaztcbiAgICB9XG4gICAgdGhpcy5feDAgPSB0aGlzLl94MSwgdGhpcy5feDEgPSB0aGlzLl94MiwgdGhpcy5feDIgPSB4O1xuICAgIHRoaXMuX3kwID0gdGhpcy5feTEsIHRoaXMuX3kxID0gdGhpcy5feTIsIHRoaXMuX3kyID0geTtcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgKGZ1bmN0aW9uIGN1c3RvbSh0ZW5zaW9uKSB7XG5cbiAgZnVuY3Rpb24gY2FyZGluYWwoY29udGV4dCkge1xuICAgIHJldHVybiBuZXcgQ2FyZGluYWwoY29udGV4dCwgdGVuc2lvbik7XG4gIH1cblxuICBjYXJkaW5hbC50ZW5zaW9uID0gZnVuY3Rpb24odGVuc2lvbikge1xuICAgIHJldHVybiBjdXN0b20oK3RlbnNpb24pO1xuICB9O1xuXG4gIHJldHVybiBjYXJkaW5hbDtcbn0pKDApO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvZDMtc2hhcGUvc3JjL2N1cnZlL2NhcmRpbmFsLmpzXG4vLyBtb2R1bGUgaWQgPSA1Nzhcbi8vIG1vZHVsZSBjaHVua3MgPSA1IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG5leHBvcnRzLmRlZmF1bHQgPSBCYXI7XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIF9jbGFzc25hbWVzID0gcmVxdWlyZSgnY2xhc3NuYW1lcycpO1xuXG52YXIgX2NsYXNzbmFtZXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY2xhc3NuYW1lcyk7XG5cbnZhciBfcHJvcFR5cGVzID0gcmVxdWlyZSgncHJvcC10eXBlcycpO1xuXG52YXIgX3Byb3BUeXBlczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wcm9wVHlwZXMpO1xuXG52YXIgX2FkZGl0aW9uYWxQcm9wcyA9IHJlcXVpcmUoJy4uL3V0aWwvYWRkaXRpb25hbFByb3BzJyk7XG5cbnZhciBfYWRkaXRpb25hbFByb3BzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2FkZGl0aW9uYWxQcm9wcyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhvYmosIGtleXMpIHsgdmFyIHRhcmdldCA9IHt9OyBmb3IgKHZhciBpIGluIG9iaikgeyBpZiAoa2V5cy5pbmRleE9mKGkpID49IDApIGNvbnRpbnVlOyBpZiAoIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGkpKSBjb250aW51ZTsgdGFyZ2V0W2ldID0gb2JqW2ldOyB9IHJldHVybiB0YXJnZXQ7IH1cblxuQmFyLnByb3BUeXBlcyA9IHtcbiAgaW5uZXJSZWY6IF9wcm9wVHlwZXMyLmRlZmF1bHQuZnVuY1xufTtcblxuZnVuY3Rpb24gQmFyKF9yZWYpIHtcbiAgdmFyIGNsYXNzTmFtZSA9IF9yZWYuY2xhc3NOYW1lLFxuICAgICAgaW5uZXJSZWYgPSBfcmVmLmlubmVyUmVmLFxuICAgICAgZGF0YSA9IF9yZWYuZGF0YSxcbiAgICAgIF9yZWYkeCA9IF9yZWYueCxcbiAgICAgIHggPSBfcmVmJHggPT09IHVuZGVmaW5lZCA/IDAgOiBfcmVmJHgsXG4gICAgICBfcmVmJHkgPSBfcmVmLnksXG4gICAgICB5ID0gX3JlZiR5ID09PSB1bmRlZmluZWQgPyAwIDogX3JlZiR5LFxuICAgICAgd2lkdGggPSBfcmVmLndpZHRoLFxuICAgICAgaGVpZ2h0ID0gX3JlZi5oZWlnaHQsXG4gICAgICByeCA9IF9yZWYucngsXG4gICAgICByeSA9IF9yZWYucnksXG4gICAgICBfcmVmJGZpbGwgPSBfcmVmLmZpbGwsXG4gICAgICBmaWxsID0gX3JlZiRmaWxsID09PSB1bmRlZmluZWQgPyAnc3RlZWxibHVlJyA6IF9yZWYkZmlsbCxcbiAgICAgIGZpbGxPcGFjaXR5ID0gX3JlZi5maWxsT3BhY2l0eSxcbiAgICAgIHN0cm9rZSA9IF9yZWYuc3Ryb2tlLFxuICAgICAgc3Ryb2tlV2lkdGggPSBfcmVmLnN0cm9rZVdpZHRoLFxuICAgICAgc3Ryb2tlRGFzaGFycmF5ID0gX3JlZi5zdHJva2VEYXNoYXJyYXksXG4gICAgICBzdHJva2VMaW5lY2FwID0gX3JlZi5zdHJva2VMaW5lY2FwLFxuICAgICAgc3Ryb2tlTGluZWpvaW4gPSBfcmVmLnN0cm9rZUxpbmVqb2luLFxuICAgICAgc3Ryb2tlTWl0ZXJsaW1pdCA9IF9yZWYuc3Ryb2tlTWl0ZXJsaW1pdCxcbiAgICAgIHN0cm9rZU9wYWNpdHkgPSBfcmVmLnN0cm9rZU9wYWNpdHksXG4gICAgICByZXN0UHJvcHMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMoX3JlZiwgWydjbGFzc05hbWUnLCAnaW5uZXJSZWYnLCAnZGF0YScsICd4JywgJ3knLCAnd2lkdGgnLCAnaGVpZ2h0JywgJ3J4JywgJ3J5JywgJ2ZpbGwnLCAnZmlsbE9wYWNpdHknLCAnc3Ryb2tlJywgJ3N0cm9rZVdpZHRoJywgJ3N0cm9rZURhc2hhcnJheScsICdzdHJva2VMaW5lY2FwJywgJ3N0cm9rZUxpbmVqb2luJywgJ3N0cm9rZU1pdGVybGltaXQnLCAnc3Ryb2tlT3BhY2l0eSddKTtcblxuICByZXR1cm4gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoJ3JlY3QnLCBfZXh0ZW5kcyh7XG4gICAgcmVmOiBpbm5lclJlZixcbiAgICBjbGFzc05hbWU6ICgwLCBfY2xhc3NuYW1lczIuZGVmYXVsdCkoJ3Z4LWJhcicsIGNsYXNzTmFtZSksXG4gICAgeDogeCxcbiAgICB5OiB5LFxuICAgIHdpZHRoOiB3aWR0aCxcbiAgICBoZWlnaHQ6IGhlaWdodCxcbiAgICByeDogcngsXG4gICAgcnk6IHJ5LFxuICAgIGZpbGw6IGZpbGwsXG4gICAgZmlsbE9wYWNpdHk6IGZpbGxPcGFjaXR5LFxuICAgIHN0cm9rZTogc3Ryb2tlLFxuICAgIHN0cm9rZVdpZHRoOiBzdHJva2VXaWR0aCxcbiAgICBzdHJva2VEYXNoYXJyYXk6IHN0cm9rZURhc2hhcnJheSxcbiAgICBzdHJva2VMaW5lY2FwOiBzdHJva2VMaW5lY2FwLFxuICAgIHN0cm9rZUxpbmVqb2luOiBzdHJva2VMaW5lam9pbixcbiAgICBzdHJva2VNaXRlcmxpbWl0OiBzdHJva2VNaXRlcmxpbWl0LFxuICAgIHN0cm9rZU9wYWNpdHk6IHN0cm9rZU9wYWNpdHlcbiAgfSwgKDAsIF9hZGRpdGlvbmFsUHJvcHMyLmRlZmF1bHQpKHJlc3RQcm9wcywgZGF0YSkpKTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9Adngvc2hhcGUvYnVpbGQvc2hhcGVzL0Jhci5qc1xuLy8gbW9kdWxlIGlkID0gNTc5XG4vLyBtb2R1bGUgY2h1bmtzID0gNSIsImltcG9ydCB7cGF0aH0gZnJvbSBcImQzLXBhdGhcIjtcbmltcG9ydCBjb25zdGFudCBmcm9tIFwiLi9jb25zdGFudFwiO1xuaW1wb3J0IGN1cnZlTGluZWFyIGZyb20gXCIuL2N1cnZlL2xpbmVhclwiO1xuaW1wb3J0IHt4IGFzIHBvaW50WCwgeSBhcyBwb2ludFl9IGZyb20gXCIuL3BvaW50XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCkge1xuICB2YXIgeCA9IHBvaW50WCxcbiAgICAgIHkgPSBwb2ludFksXG4gICAgICBkZWZpbmVkID0gY29uc3RhbnQodHJ1ZSksXG4gICAgICBjb250ZXh0ID0gbnVsbCxcbiAgICAgIGN1cnZlID0gY3VydmVMaW5lYXIsXG4gICAgICBvdXRwdXQgPSBudWxsO1xuXG4gIGZ1bmN0aW9uIGxpbmUoZGF0YSkge1xuICAgIHZhciBpLFxuICAgICAgICBuID0gZGF0YS5sZW5ndGgsXG4gICAgICAgIGQsXG4gICAgICAgIGRlZmluZWQwID0gZmFsc2UsXG4gICAgICAgIGJ1ZmZlcjtcblxuICAgIGlmIChjb250ZXh0ID09IG51bGwpIG91dHB1dCA9IGN1cnZlKGJ1ZmZlciA9IHBhdGgoKSk7XG5cbiAgICBmb3IgKGkgPSAwOyBpIDw9IG47ICsraSkge1xuICAgICAgaWYgKCEoaSA8IG4gJiYgZGVmaW5lZChkID0gZGF0YVtpXSwgaSwgZGF0YSkpID09PSBkZWZpbmVkMCkge1xuICAgICAgICBpZiAoZGVmaW5lZDAgPSAhZGVmaW5lZDApIG91dHB1dC5saW5lU3RhcnQoKTtcbiAgICAgICAgZWxzZSBvdXRwdXQubGluZUVuZCgpO1xuICAgICAgfVxuICAgICAgaWYgKGRlZmluZWQwKSBvdXRwdXQucG9pbnQoK3goZCwgaSwgZGF0YSksICt5KGQsIGksIGRhdGEpKTtcbiAgICB9XG5cbiAgICBpZiAoYnVmZmVyKSByZXR1cm4gb3V0cHV0ID0gbnVsbCwgYnVmZmVyICsgXCJcIiB8fCBudWxsO1xuICB9XG5cbiAgbGluZS54ID0gZnVuY3Rpb24oXykge1xuICAgIHJldHVybiBhcmd1bWVudHMubGVuZ3RoID8gKHggPSB0eXBlb2YgXyA9PT0gXCJmdW5jdGlvblwiID8gXyA6IGNvbnN0YW50KCtfKSwgbGluZSkgOiB4O1xuICB9O1xuXG4gIGxpbmUueSA9IGZ1bmN0aW9uKF8pIHtcbiAgICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA/ICh5ID0gdHlwZW9mIF8gPT09IFwiZnVuY3Rpb25cIiA/IF8gOiBjb25zdGFudCgrXyksIGxpbmUpIDogeTtcbiAgfTtcblxuICBsaW5lLmRlZmluZWQgPSBmdW5jdGlvbihfKSB7XG4gICAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPyAoZGVmaW5lZCA9IHR5cGVvZiBfID09PSBcImZ1bmN0aW9uXCIgPyBfIDogY29uc3RhbnQoISFfKSwgbGluZSkgOiBkZWZpbmVkO1xuICB9O1xuXG4gIGxpbmUuY3VydmUgPSBmdW5jdGlvbihfKSB7XG4gICAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPyAoY3VydmUgPSBfLCBjb250ZXh0ICE9IG51bGwgJiYgKG91dHB1dCA9IGN1cnZlKGNvbnRleHQpKSwgbGluZSkgOiBjdXJ2ZTtcbiAgfTtcblxuICBsaW5lLmNvbnRleHQgPSBmdW5jdGlvbihfKSB7XG4gICAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPyAoXyA9PSBudWxsID8gY29udGV4dCA9IG91dHB1dCA9IG51bGwgOiBvdXRwdXQgPSBjdXJ2ZShjb250ZXh0ID0gXyksIGxpbmUpIDogY29udGV4dDtcbiAgfTtcblxuICByZXR1cm4gbGluZTtcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2QzLXNoYXBlL3NyYy9saW5lLmpzXG4vLyBtb2R1bGUgaWQgPSA1ODBcbi8vIG1vZHVsZSBjaHVua3MgPSA1IiwiZXhwb3J0IGZ1bmN0aW9uIHgocCkge1xuICByZXR1cm4gcFswXTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHkocCkge1xuICByZXR1cm4gcFsxXTtcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2QzLXNoYXBlL3NyYy9wb2ludC5qc1xuLy8gbW9kdWxlIGlkID0gNTgxXG4vLyBtb2R1bGUgY2h1bmtzID0gNSIsImltcG9ydCB7ZXBzaWxvbn0gZnJvbSBcIi4uL21hdGhcIjtcbmltcG9ydCB7Q2FyZGluYWx9IGZyb20gXCIuL2NhcmRpbmFsXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBwb2ludCh0aGF0LCB4LCB5KSB7XG4gIHZhciB4MSA9IHRoYXQuX3gxLFxuICAgICAgeTEgPSB0aGF0Ll95MSxcbiAgICAgIHgyID0gdGhhdC5feDIsXG4gICAgICB5MiA9IHRoYXQuX3kyO1xuXG4gIGlmICh0aGF0Ll9sMDFfYSA+IGVwc2lsb24pIHtcbiAgICB2YXIgYSA9IDIgKiB0aGF0Ll9sMDFfMmEgKyAzICogdGhhdC5fbDAxX2EgKiB0aGF0Ll9sMTJfYSArIHRoYXQuX2wxMl8yYSxcbiAgICAgICAgbiA9IDMgKiB0aGF0Ll9sMDFfYSAqICh0aGF0Ll9sMDFfYSArIHRoYXQuX2wxMl9hKTtcbiAgICB4MSA9ICh4MSAqIGEgLSB0aGF0Ll94MCAqIHRoYXQuX2wxMl8yYSArIHRoYXQuX3gyICogdGhhdC5fbDAxXzJhKSAvIG47XG4gICAgeTEgPSAoeTEgKiBhIC0gdGhhdC5feTAgKiB0aGF0Ll9sMTJfMmEgKyB0aGF0Ll95MiAqIHRoYXQuX2wwMV8yYSkgLyBuO1xuICB9XG5cbiAgaWYgKHRoYXQuX2wyM19hID4gZXBzaWxvbikge1xuICAgIHZhciBiID0gMiAqIHRoYXQuX2wyM18yYSArIDMgKiB0aGF0Ll9sMjNfYSAqIHRoYXQuX2wxMl9hICsgdGhhdC5fbDEyXzJhLFxuICAgICAgICBtID0gMyAqIHRoYXQuX2wyM19hICogKHRoYXQuX2wyM19hICsgdGhhdC5fbDEyX2EpO1xuICAgIHgyID0gKHgyICogYiArIHRoYXQuX3gxICogdGhhdC5fbDIzXzJhIC0geCAqIHRoYXQuX2wxMl8yYSkgLyBtO1xuICAgIHkyID0gKHkyICogYiArIHRoYXQuX3kxICogdGhhdC5fbDIzXzJhIC0geSAqIHRoYXQuX2wxMl8yYSkgLyBtO1xuICB9XG5cbiAgdGhhdC5fY29udGV4dC5iZXppZXJDdXJ2ZVRvKHgxLCB5MSwgeDIsIHkyLCB0aGF0Ll94MiwgdGhhdC5feTIpO1xufVxuXG5mdW5jdGlvbiBDYXRtdWxsUm9tKGNvbnRleHQsIGFscGhhKSB7XG4gIHRoaXMuX2NvbnRleHQgPSBjb250ZXh0O1xuICB0aGlzLl9hbHBoYSA9IGFscGhhO1xufVxuXG5DYXRtdWxsUm9tLnByb3RvdHlwZSA9IHtcbiAgYXJlYVN0YXJ0OiBmdW5jdGlvbigpIHtcbiAgICB0aGlzLl9saW5lID0gMDtcbiAgfSxcbiAgYXJlYUVuZDogZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5fbGluZSA9IE5hTjtcbiAgfSxcbiAgbGluZVN0YXJ0OiBmdW5jdGlvbigpIHtcbiAgICB0aGlzLl94MCA9IHRoaXMuX3gxID0gdGhpcy5feDIgPVxuICAgIHRoaXMuX3kwID0gdGhpcy5feTEgPSB0aGlzLl95MiA9IE5hTjtcbiAgICB0aGlzLl9sMDFfYSA9IHRoaXMuX2wxMl9hID0gdGhpcy5fbDIzX2EgPVxuICAgIHRoaXMuX2wwMV8yYSA9IHRoaXMuX2wxMl8yYSA9IHRoaXMuX2wyM18yYSA9XG4gICAgdGhpcy5fcG9pbnQgPSAwO1xuICB9LFxuICBsaW5lRW5kOiBmdW5jdGlvbigpIHtcbiAgICBzd2l0Y2ggKHRoaXMuX3BvaW50KSB7XG4gICAgICBjYXNlIDI6IHRoaXMuX2NvbnRleHQubGluZVRvKHRoaXMuX3gyLCB0aGlzLl95Mik7IGJyZWFrO1xuICAgICAgY2FzZSAzOiB0aGlzLnBvaW50KHRoaXMuX3gyLCB0aGlzLl95Mik7IGJyZWFrO1xuICAgIH1cbiAgICBpZiAodGhpcy5fbGluZSB8fCAodGhpcy5fbGluZSAhPT0gMCAmJiB0aGlzLl9wb2ludCA9PT0gMSkpIHRoaXMuX2NvbnRleHQuY2xvc2VQYXRoKCk7XG4gICAgdGhpcy5fbGluZSA9IDEgLSB0aGlzLl9saW5lO1xuICB9LFxuICBwb2ludDogZnVuY3Rpb24oeCwgeSkge1xuICAgIHggPSAreCwgeSA9ICt5O1xuXG4gICAgaWYgKHRoaXMuX3BvaW50KSB7XG4gICAgICB2YXIgeDIzID0gdGhpcy5feDIgLSB4LFxuICAgICAgICAgIHkyMyA9IHRoaXMuX3kyIC0geTtcbiAgICAgIHRoaXMuX2wyM19hID0gTWF0aC5zcXJ0KHRoaXMuX2wyM18yYSA9IE1hdGgucG93KHgyMyAqIHgyMyArIHkyMyAqIHkyMywgdGhpcy5fYWxwaGEpKTtcbiAgICB9XG5cbiAgICBzd2l0Y2ggKHRoaXMuX3BvaW50KSB7XG4gICAgICBjYXNlIDA6IHRoaXMuX3BvaW50ID0gMTsgdGhpcy5fbGluZSA/IHRoaXMuX2NvbnRleHQubGluZVRvKHgsIHkpIDogdGhpcy5fY29udGV4dC5tb3ZlVG8oeCwgeSk7IGJyZWFrO1xuICAgICAgY2FzZSAxOiB0aGlzLl9wb2ludCA9IDI7IGJyZWFrO1xuICAgICAgY2FzZSAyOiB0aGlzLl9wb2ludCA9IDM7IC8vIHByb2NlZWRcbiAgICAgIGRlZmF1bHQ6IHBvaW50KHRoaXMsIHgsIHkpOyBicmVhaztcbiAgICB9XG5cbiAgICB0aGlzLl9sMDFfYSA9IHRoaXMuX2wxMl9hLCB0aGlzLl9sMTJfYSA9IHRoaXMuX2wyM19hO1xuICAgIHRoaXMuX2wwMV8yYSA9IHRoaXMuX2wxMl8yYSwgdGhpcy5fbDEyXzJhID0gdGhpcy5fbDIzXzJhO1xuICAgIHRoaXMuX3gwID0gdGhpcy5feDEsIHRoaXMuX3gxID0gdGhpcy5feDIsIHRoaXMuX3gyID0geDtcbiAgICB0aGlzLl95MCA9IHRoaXMuX3kxLCB0aGlzLl95MSA9IHRoaXMuX3kyLCB0aGlzLl95MiA9IHk7XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IChmdW5jdGlvbiBjdXN0b20oYWxwaGEpIHtcblxuICBmdW5jdGlvbiBjYXRtdWxsUm9tKGNvbnRleHQpIHtcbiAgICByZXR1cm4gYWxwaGEgPyBuZXcgQ2F0bXVsbFJvbShjb250ZXh0LCBhbHBoYSkgOiBuZXcgQ2FyZGluYWwoY29udGV4dCwgMCk7XG4gIH1cblxuICBjYXRtdWxsUm9tLmFscGhhID0gZnVuY3Rpb24oYWxwaGEpIHtcbiAgICByZXR1cm4gY3VzdG9tKCthbHBoYSk7XG4gIH07XG5cbiAgcmV0dXJuIGNhdG11bGxSb207XG59KSgwLjUpO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvZDMtc2hhcGUvc3JjL2N1cnZlL2NhdG11bGxSb20uanNcbi8vIG1vZHVsZSBpZCA9IDU4MlxuLy8gbW9kdWxlIGNodW5rcyA9IDUiLCJpbXBvcnQgbm9uZSBmcm9tIFwiLi9ub25lXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKHNlcmllcykge1xuICB2YXIgc3VtcyA9IHNlcmllcy5tYXAoc3VtKTtcbiAgcmV0dXJuIG5vbmUoc2VyaWVzKS5zb3J0KGZ1bmN0aW9uKGEsIGIpIHsgcmV0dXJuIHN1bXNbYV0gLSBzdW1zW2JdOyB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN1bShzZXJpZXMpIHtcbiAgdmFyIHMgPSAwLCBpID0gLTEsIG4gPSBzZXJpZXMubGVuZ3RoLCB2O1xuICB3aGlsZSAoKytpIDwgbikgaWYgKHYgPSArc2VyaWVzW2ldWzFdKSBzICs9IHY7XG4gIHJldHVybiBzO1xufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvZDMtc2hhcGUvc3JjL29yZGVyL2FzY2VuZGluZy5qc1xuLy8gbW9kdWxlIGlkID0gNTgzXG4vLyBtb2R1bGUgY2h1bmtzID0gNSIsImltcG9ydCB7cGF0aH0gZnJvbSBcImQzLXBhdGhcIjtcbmltcG9ydCBjb25zdGFudCBmcm9tIFwiLi9jb25zdGFudFwiO1xuaW1wb3J0IGN1cnZlTGluZWFyIGZyb20gXCIuL2N1cnZlL2xpbmVhclwiO1xuaW1wb3J0IGxpbmUgZnJvbSBcIi4vbGluZVwiO1xuaW1wb3J0IHt4IGFzIHBvaW50WCwgeSBhcyBwb2ludFl9IGZyb20gXCIuL3BvaW50XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCkge1xuICB2YXIgeDAgPSBwb2ludFgsXG4gICAgICB4MSA9IG51bGwsXG4gICAgICB5MCA9IGNvbnN0YW50KDApLFxuICAgICAgeTEgPSBwb2ludFksXG4gICAgICBkZWZpbmVkID0gY29uc3RhbnQodHJ1ZSksXG4gICAgICBjb250ZXh0ID0gbnVsbCxcbiAgICAgIGN1cnZlID0gY3VydmVMaW5lYXIsXG4gICAgICBvdXRwdXQgPSBudWxsO1xuXG4gIGZ1bmN0aW9uIGFyZWEoZGF0YSkge1xuICAgIHZhciBpLFxuICAgICAgICBqLFxuICAgICAgICBrLFxuICAgICAgICBuID0gZGF0YS5sZW5ndGgsXG4gICAgICAgIGQsXG4gICAgICAgIGRlZmluZWQwID0gZmFsc2UsXG4gICAgICAgIGJ1ZmZlcixcbiAgICAgICAgeDB6ID0gbmV3IEFycmF5KG4pLFxuICAgICAgICB5MHogPSBuZXcgQXJyYXkobik7XG5cbiAgICBpZiAoY29udGV4dCA9PSBudWxsKSBvdXRwdXQgPSBjdXJ2ZShidWZmZXIgPSBwYXRoKCkpO1xuXG4gICAgZm9yIChpID0gMDsgaSA8PSBuOyArK2kpIHtcbiAgICAgIGlmICghKGkgPCBuICYmIGRlZmluZWQoZCA9IGRhdGFbaV0sIGksIGRhdGEpKSA9PT0gZGVmaW5lZDApIHtcbiAgICAgICAgaWYgKGRlZmluZWQwID0gIWRlZmluZWQwKSB7XG4gICAgICAgICAgaiA9IGk7XG4gICAgICAgICAgb3V0cHV0LmFyZWFTdGFydCgpO1xuICAgICAgICAgIG91dHB1dC5saW5lU3RhcnQoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBvdXRwdXQubGluZUVuZCgpO1xuICAgICAgICAgIG91dHB1dC5saW5lU3RhcnQoKTtcbiAgICAgICAgICBmb3IgKGsgPSBpIC0gMTsgayA+PSBqOyAtLWspIHtcbiAgICAgICAgICAgIG91dHB1dC5wb2ludCh4MHpba10sIHkweltrXSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIG91dHB1dC5saW5lRW5kKCk7XG4gICAgICAgICAgb3V0cHV0LmFyZWFFbmQoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKGRlZmluZWQwKSB7XG4gICAgICAgIHgweltpXSA9ICt4MChkLCBpLCBkYXRhKSwgeTB6W2ldID0gK3kwKGQsIGksIGRhdGEpO1xuICAgICAgICBvdXRwdXQucG9pbnQoeDEgPyAreDEoZCwgaSwgZGF0YSkgOiB4MHpbaV0sIHkxID8gK3kxKGQsIGksIGRhdGEpIDogeTB6W2ldKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoYnVmZmVyKSByZXR1cm4gb3V0cHV0ID0gbnVsbCwgYnVmZmVyICsgXCJcIiB8fCBudWxsO1xuICB9XG5cbiAgZnVuY3Rpb24gYXJlYWxpbmUoKSB7XG4gICAgcmV0dXJuIGxpbmUoKS5kZWZpbmVkKGRlZmluZWQpLmN1cnZlKGN1cnZlKS5jb250ZXh0KGNvbnRleHQpO1xuICB9XG5cbiAgYXJlYS54ID0gZnVuY3Rpb24oXykge1xuICAgIHJldHVybiBhcmd1bWVudHMubGVuZ3RoID8gKHgwID0gdHlwZW9mIF8gPT09IFwiZnVuY3Rpb25cIiA/IF8gOiBjb25zdGFudCgrXyksIHgxID0gbnVsbCwgYXJlYSkgOiB4MDtcbiAgfTtcblxuICBhcmVhLngwID0gZnVuY3Rpb24oXykge1xuICAgIHJldHVybiBhcmd1bWVudHMubGVuZ3RoID8gKHgwID0gdHlwZW9mIF8gPT09IFwiZnVuY3Rpb25cIiA/IF8gOiBjb25zdGFudCgrXyksIGFyZWEpIDogeDA7XG4gIH07XG5cbiAgYXJlYS54MSA9IGZ1bmN0aW9uKF8pIHtcbiAgICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA/ICh4MSA9IF8gPT0gbnVsbCA/IG51bGwgOiB0eXBlb2YgXyA9PT0gXCJmdW5jdGlvblwiID8gXyA6IGNvbnN0YW50KCtfKSwgYXJlYSkgOiB4MTtcbiAgfTtcblxuICBhcmVhLnkgPSBmdW5jdGlvbihfKSB7XG4gICAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPyAoeTAgPSB0eXBlb2YgXyA9PT0gXCJmdW5jdGlvblwiID8gXyA6IGNvbnN0YW50KCtfKSwgeTEgPSBudWxsLCBhcmVhKSA6IHkwO1xuICB9O1xuXG4gIGFyZWEueTAgPSBmdW5jdGlvbihfKSB7XG4gICAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPyAoeTAgPSB0eXBlb2YgXyA9PT0gXCJmdW5jdGlvblwiID8gXyA6IGNvbnN0YW50KCtfKSwgYXJlYSkgOiB5MDtcbiAgfTtcblxuICBhcmVhLnkxID0gZnVuY3Rpb24oXykge1xuICAgIHJldHVybiBhcmd1bWVudHMubGVuZ3RoID8gKHkxID0gXyA9PSBudWxsID8gbnVsbCA6IHR5cGVvZiBfID09PSBcImZ1bmN0aW9uXCIgPyBfIDogY29uc3RhbnQoK18pLCBhcmVhKSA6IHkxO1xuICB9O1xuXG4gIGFyZWEubGluZVgwID1cbiAgYXJlYS5saW5lWTAgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gYXJlYWxpbmUoKS54KHgwKS55KHkwKTtcbiAgfTtcblxuICBhcmVhLmxpbmVZMSA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBhcmVhbGluZSgpLngoeDApLnkoeTEpO1xuICB9O1xuXG4gIGFyZWEubGluZVgxID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIGFyZWFsaW5lKCkueCh4MSkueSh5MCk7XG4gIH07XG5cbiAgYXJlYS5kZWZpbmVkID0gZnVuY3Rpb24oXykge1xuICAgIHJldHVybiBhcmd1bWVudHMubGVuZ3RoID8gKGRlZmluZWQgPSB0eXBlb2YgXyA9PT0gXCJmdW5jdGlvblwiID8gXyA6IGNvbnN0YW50KCEhXyksIGFyZWEpIDogZGVmaW5lZDtcbiAgfTtcblxuICBhcmVhLmN1cnZlID0gZnVuY3Rpb24oXykge1xuICAgIHJldHVybiBhcmd1bWVudHMubGVuZ3RoID8gKGN1cnZlID0gXywgY29udGV4dCAhPSBudWxsICYmIChvdXRwdXQgPSBjdXJ2ZShjb250ZXh0KSksIGFyZWEpIDogY3VydmU7XG4gIH07XG5cbiAgYXJlYS5jb250ZXh0ID0gZnVuY3Rpb24oXykge1xuICAgIHJldHVybiBhcmd1bWVudHMubGVuZ3RoID8gKF8gPT0gbnVsbCA/IGNvbnRleHQgPSBvdXRwdXQgPSBudWxsIDogb3V0cHV0ID0gY3VydmUoY29udGV4dCA9IF8pLCBhcmVhKSA6IGNvbnRleHQ7XG4gIH07XG5cbiAgcmV0dXJuIGFyZWE7XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9kMy1zaGFwZS9zcmMvYXJlYS5qc1xuLy8gbW9kdWxlIGlkID0gNTg0XG4vLyBtb2R1bGUgY2h1bmtzID0gNSIsImltcG9ydCBjdXJ2ZUxpbmVhciBmcm9tIFwiLi9saW5lYXJcIjtcblxuZXhwb3J0IHZhciBjdXJ2ZVJhZGlhbExpbmVhciA9IGN1cnZlUmFkaWFsKGN1cnZlTGluZWFyKTtcblxuZnVuY3Rpb24gUmFkaWFsKGN1cnZlKSB7XG4gIHRoaXMuX2N1cnZlID0gY3VydmU7XG59XG5cblJhZGlhbC5wcm90b3R5cGUgPSB7XG4gIGFyZWFTdGFydDogZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5fY3VydmUuYXJlYVN0YXJ0KCk7XG4gIH0sXG4gIGFyZWFFbmQ6IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuX2N1cnZlLmFyZWFFbmQoKTtcbiAgfSxcbiAgbGluZVN0YXJ0OiBmdW5jdGlvbigpIHtcbiAgICB0aGlzLl9jdXJ2ZS5saW5lU3RhcnQoKTtcbiAgfSxcbiAgbGluZUVuZDogZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5fY3VydmUubGluZUVuZCgpO1xuICB9LFxuICBwb2ludDogZnVuY3Rpb24oYSwgcikge1xuICAgIHRoaXMuX2N1cnZlLnBvaW50KHIgKiBNYXRoLnNpbihhKSwgciAqIC1NYXRoLmNvcyhhKSk7XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGN1cnZlUmFkaWFsKGN1cnZlKSB7XG5cbiAgZnVuY3Rpb24gcmFkaWFsKGNvbnRleHQpIHtcbiAgICByZXR1cm4gbmV3IFJhZGlhbChjdXJ2ZShjb250ZXh0KSk7XG4gIH1cblxuICByYWRpYWwuX2N1cnZlID0gY3VydmU7XG5cbiAgcmV0dXJuIHJhZGlhbDtcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2QzLXNoYXBlL3NyYy9jdXJ2ZS9yYWRpYWwuanNcbi8vIG1vZHVsZSBpZCA9IDU4NVxuLy8gbW9kdWxlIGNodW5rcyA9IDUiLCJpbXBvcnQgY3VydmVSYWRpYWwsIHtjdXJ2ZVJhZGlhbExpbmVhcn0gZnJvbSBcIi4vY3VydmUvcmFkaWFsXCI7XG5pbXBvcnQgbGluZSBmcm9tIFwiLi9saW5lXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBsaW5lUmFkaWFsKGwpIHtcbiAgdmFyIGMgPSBsLmN1cnZlO1xuXG4gIGwuYW5nbGUgPSBsLngsIGRlbGV0ZSBsLng7XG4gIGwucmFkaXVzID0gbC55LCBkZWxldGUgbC55O1xuXG4gIGwuY3VydmUgPSBmdW5jdGlvbihfKSB7XG4gICAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPyBjKGN1cnZlUmFkaWFsKF8pKSA6IGMoKS5fY3VydmU7XG4gIH07XG5cbiAgcmV0dXJuIGw7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gbGluZVJhZGlhbChsaW5lKCkuY3VydmUoY3VydmVSYWRpYWxMaW5lYXIpKTtcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2QzLXNoYXBlL3NyYy9saW5lUmFkaWFsLmpzXG4vLyBtb2R1bGUgaWQgPSA1ODZcbi8vIG1vZHVsZSBjaHVua3MgPSA1IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oeCwgeSkge1xuICByZXR1cm4gWyh5ID0gK3kpICogTWF0aC5jb3MoeCAtPSBNYXRoLlBJIC8gMiksIHkgKiBNYXRoLnNpbih4KV07XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9kMy1zaGFwZS9zcmMvcG9pbnRSYWRpYWwuanNcbi8vIG1vZHVsZSBpZCA9IDU4N1xuLy8gbW9kdWxlIGNodW5rcyA9IDUiLCJleHBvcnQgdmFyIHNsaWNlID0gQXJyYXkucHJvdG90eXBlLnNsaWNlO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvZDMtc2hhcGUvc3JjL2FycmF5LmpzXG4vLyBtb2R1bGUgaWQgPSA1ODhcbi8vIG1vZHVsZSBjaHVua3MgPSA1IiwiaW1wb3J0IHtwaSwgdGF1fSBmcm9tIFwiLi4vbWF0aFwiO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGRyYXc6IGZ1bmN0aW9uKGNvbnRleHQsIHNpemUpIHtcbiAgICB2YXIgciA9IE1hdGguc3FydChzaXplIC8gcGkpO1xuICAgIGNvbnRleHQubW92ZVRvKHIsIDApO1xuICAgIGNvbnRleHQuYXJjKDAsIDAsIHIsIDAsIHRhdSk7XG4gIH1cbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9kMy1zaGFwZS9zcmMvc3ltYm9sL2NpcmNsZS5qc1xuLy8gbW9kdWxlIGlkID0gNTg5XG4vLyBtb2R1bGUgY2h1bmtzID0gNSIsImV4cG9ydCBkZWZhdWx0IHtcbiAgZHJhdzogZnVuY3Rpb24oY29udGV4dCwgc2l6ZSkge1xuICAgIHZhciByID0gTWF0aC5zcXJ0KHNpemUgLyA1KSAvIDI7XG4gICAgY29udGV4dC5tb3ZlVG8oLTMgKiByLCAtcik7XG4gICAgY29udGV4dC5saW5lVG8oLXIsIC1yKTtcbiAgICBjb250ZXh0LmxpbmVUbygtciwgLTMgKiByKTtcbiAgICBjb250ZXh0LmxpbmVUbyhyLCAtMyAqIHIpO1xuICAgIGNvbnRleHQubGluZVRvKHIsIC1yKTtcbiAgICBjb250ZXh0LmxpbmVUbygzICogciwgLXIpO1xuICAgIGNvbnRleHQubGluZVRvKDMgKiByLCByKTtcbiAgICBjb250ZXh0LmxpbmVUbyhyLCByKTtcbiAgICBjb250ZXh0LmxpbmVUbyhyLCAzICogcik7XG4gICAgY29udGV4dC5saW5lVG8oLXIsIDMgKiByKTtcbiAgICBjb250ZXh0LmxpbmVUbygtciwgcik7XG4gICAgY29udGV4dC5saW5lVG8oLTMgKiByLCByKTtcbiAgICBjb250ZXh0LmNsb3NlUGF0aCgpO1xuICB9XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvZDMtc2hhcGUvc3JjL3N5bWJvbC9jcm9zcy5qc1xuLy8gbW9kdWxlIGlkID0gNTkwXG4vLyBtb2R1bGUgY2h1bmtzID0gNSIsInZhciB0YW4zMCA9IE1hdGguc3FydCgxIC8gMyksXG4gICAgdGFuMzBfMiA9IHRhbjMwICogMjtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBkcmF3OiBmdW5jdGlvbihjb250ZXh0LCBzaXplKSB7XG4gICAgdmFyIHkgPSBNYXRoLnNxcnQoc2l6ZSAvIHRhbjMwXzIpLFxuICAgICAgICB4ID0geSAqIHRhbjMwO1xuICAgIGNvbnRleHQubW92ZVRvKDAsIC15KTtcbiAgICBjb250ZXh0LmxpbmVUbyh4LCAwKTtcbiAgICBjb250ZXh0LmxpbmVUbygwLCB5KTtcbiAgICBjb250ZXh0LmxpbmVUbygteCwgMCk7XG4gICAgY29udGV4dC5jbG9zZVBhdGgoKTtcbiAgfVxufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2QzLXNoYXBlL3NyYy9zeW1ib2wvZGlhbW9uZC5qc1xuLy8gbW9kdWxlIGlkID0gNTkxXG4vLyBtb2R1bGUgY2h1bmtzID0gNSIsImltcG9ydCB7cGksIHRhdX0gZnJvbSBcIi4uL21hdGhcIjtcblxudmFyIGthID0gMC44OTA4MTMwOTE1MjkyODUyMjgxMCxcbiAgICBrciA9IE1hdGguc2luKHBpIC8gMTApIC8gTWF0aC5zaW4oNyAqIHBpIC8gMTApLFxuICAgIGt4ID0gTWF0aC5zaW4odGF1IC8gMTApICoga3IsXG4gICAga3kgPSAtTWF0aC5jb3ModGF1IC8gMTApICoga3I7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgZHJhdzogZnVuY3Rpb24oY29udGV4dCwgc2l6ZSkge1xuICAgIHZhciByID0gTWF0aC5zcXJ0KHNpemUgKiBrYSksXG4gICAgICAgIHggPSBreCAqIHIsXG4gICAgICAgIHkgPSBreSAqIHI7XG4gICAgY29udGV4dC5tb3ZlVG8oMCwgLXIpO1xuICAgIGNvbnRleHQubGluZVRvKHgsIHkpO1xuICAgIGZvciAodmFyIGkgPSAxOyBpIDwgNTsgKytpKSB7XG4gICAgICB2YXIgYSA9IHRhdSAqIGkgLyA1LFxuICAgICAgICAgIGMgPSBNYXRoLmNvcyhhKSxcbiAgICAgICAgICBzID0gTWF0aC5zaW4oYSk7XG4gICAgICBjb250ZXh0LmxpbmVUbyhzICogciwgLWMgKiByKTtcbiAgICAgIGNvbnRleHQubGluZVRvKGMgKiB4IC0gcyAqIHksIHMgKiB4ICsgYyAqIHkpO1xuICAgIH1cbiAgICBjb250ZXh0LmNsb3NlUGF0aCgpO1xuICB9XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvZDMtc2hhcGUvc3JjL3N5bWJvbC9zdGFyLmpzXG4vLyBtb2R1bGUgaWQgPSA1OTJcbi8vIG1vZHVsZSBjaHVua3MgPSA1IiwiZXhwb3J0IGRlZmF1bHQge1xuICBkcmF3OiBmdW5jdGlvbihjb250ZXh0LCBzaXplKSB7XG4gICAgdmFyIHcgPSBNYXRoLnNxcnQoc2l6ZSksXG4gICAgICAgIHggPSAtdyAvIDI7XG4gICAgY29udGV4dC5yZWN0KHgsIHgsIHcsIHcpO1xuICB9XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvZDMtc2hhcGUvc3JjL3N5bWJvbC9zcXVhcmUuanNcbi8vIG1vZHVsZSBpZCA9IDU5M1xuLy8gbW9kdWxlIGNodW5rcyA9IDUiLCJ2YXIgc3FydDMgPSBNYXRoLnNxcnQoMyk7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgZHJhdzogZnVuY3Rpb24oY29udGV4dCwgc2l6ZSkge1xuICAgIHZhciB5ID0gLU1hdGguc3FydChzaXplIC8gKHNxcnQzICogMykpO1xuICAgIGNvbnRleHQubW92ZVRvKDAsIHkgKiAyKTtcbiAgICBjb250ZXh0LmxpbmVUbygtc3FydDMgKiB5LCAteSk7XG4gICAgY29udGV4dC5saW5lVG8oc3FydDMgKiB5LCAteSk7XG4gICAgY29udGV4dC5jbG9zZVBhdGgoKTtcbiAgfVxufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2QzLXNoYXBlL3NyYy9zeW1ib2wvdHJpYW5nbGUuanNcbi8vIG1vZHVsZSBpZCA9IDU5NFxuLy8gbW9kdWxlIGNodW5rcyA9IDUiLCJ2YXIgYyA9IC0wLjUsXG4gICAgcyA9IE1hdGguc3FydCgzKSAvIDIsXG4gICAgayA9IDEgLyBNYXRoLnNxcnQoMTIpLFxuICAgIGEgPSAoayAvIDIgKyAxKSAqIDM7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgZHJhdzogZnVuY3Rpb24oY29udGV4dCwgc2l6ZSkge1xuICAgIHZhciByID0gTWF0aC5zcXJ0KHNpemUgLyBhKSxcbiAgICAgICAgeDAgPSByIC8gMixcbiAgICAgICAgeTAgPSByICogayxcbiAgICAgICAgeDEgPSB4MCxcbiAgICAgICAgeTEgPSByICogayArIHIsXG4gICAgICAgIHgyID0gLXgxLFxuICAgICAgICB5MiA9IHkxO1xuICAgIGNvbnRleHQubW92ZVRvKHgwLCB5MCk7XG4gICAgY29udGV4dC5saW5lVG8oeDEsIHkxKTtcbiAgICBjb250ZXh0LmxpbmVUbyh4MiwgeTIpO1xuICAgIGNvbnRleHQubGluZVRvKGMgKiB4MCAtIHMgKiB5MCwgcyAqIHgwICsgYyAqIHkwKTtcbiAgICBjb250ZXh0LmxpbmVUbyhjICogeDEgLSBzICogeTEsIHMgKiB4MSArIGMgKiB5MSk7XG4gICAgY29udGV4dC5saW5lVG8oYyAqIHgyIC0gcyAqIHkyLCBzICogeDIgKyBjICogeTIpO1xuICAgIGNvbnRleHQubGluZVRvKGMgKiB4MCArIHMgKiB5MCwgYyAqIHkwIC0gcyAqIHgwKTtcbiAgICBjb250ZXh0LmxpbmVUbyhjICogeDEgKyBzICogeTEsIGMgKiB5MSAtIHMgKiB4MSk7XG4gICAgY29udGV4dC5saW5lVG8oYyAqIHgyICsgcyAqIHkyLCBjICogeTIgLSBzICogeDIpO1xuICAgIGNvbnRleHQuY2xvc2VQYXRoKCk7XG4gIH1cbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9kMy1zaGFwZS9zcmMvc3ltYm9sL3d5ZS5qc1xuLy8gbW9kdWxlIGlkID0gNTk1XG4vLyBtb2R1bGUgY2h1bmtzID0gNSIsImltcG9ydCBub29wIGZyb20gXCIuLi9ub29wXCI7XG5pbXBvcnQge3BvaW50fSBmcm9tIFwiLi9jYXJkaW5hbFwiO1xuXG5leHBvcnQgZnVuY3Rpb24gQ2FyZGluYWxDbG9zZWQoY29udGV4dCwgdGVuc2lvbikge1xuICB0aGlzLl9jb250ZXh0ID0gY29udGV4dDtcbiAgdGhpcy5fayA9ICgxIC0gdGVuc2lvbikgLyA2O1xufVxuXG5DYXJkaW5hbENsb3NlZC5wcm90b3R5cGUgPSB7XG4gIGFyZWFTdGFydDogbm9vcCxcbiAgYXJlYUVuZDogbm9vcCxcbiAgbGluZVN0YXJ0OiBmdW5jdGlvbigpIHtcbiAgICB0aGlzLl94MCA9IHRoaXMuX3gxID0gdGhpcy5feDIgPSB0aGlzLl94MyA9IHRoaXMuX3g0ID0gdGhpcy5feDUgPVxuICAgIHRoaXMuX3kwID0gdGhpcy5feTEgPSB0aGlzLl95MiA9IHRoaXMuX3kzID0gdGhpcy5feTQgPSB0aGlzLl95NSA9IE5hTjtcbiAgICB0aGlzLl9wb2ludCA9IDA7XG4gIH0sXG4gIGxpbmVFbmQ6IGZ1bmN0aW9uKCkge1xuICAgIHN3aXRjaCAodGhpcy5fcG9pbnQpIHtcbiAgICAgIGNhc2UgMToge1xuICAgICAgICB0aGlzLl9jb250ZXh0Lm1vdmVUbyh0aGlzLl94MywgdGhpcy5feTMpO1xuICAgICAgICB0aGlzLl9jb250ZXh0LmNsb3NlUGF0aCgpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNhc2UgMjoge1xuICAgICAgICB0aGlzLl9jb250ZXh0LmxpbmVUbyh0aGlzLl94MywgdGhpcy5feTMpO1xuICAgICAgICB0aGlzLl9jb250ZXh0LmNsb3NlUGF0aCgpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNhc2UgMzoge1xuICAgICAgICB0aGlzLnBvaW50KHRoaXMuX3gzLCB0aGlzLl95Myk7XG4gICAgICAgIHRoaXMucG9pbnQodGhpcy5feDQsIHRoaXMuX3k0KTtcbiAgICAgICAgdGhpcy5wb2ludCh0aGlzLl94NSwgdGhpcy5feTUpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gIH0sXG4gIHBvaW50OiBmdW5jdGlvbih4LCB5KSB7XG4gICAgeCA9ICt4LCB5ID0gK3k7XG4gICAgc3dpdGNoICh0aGlzLl9wb2ludCkge1xuICAgICAgY2FzZSAwOiB0aGlzLl9wb2ludCA9IDE7IHRoaXMuX3gzID0geCwgdGhpcy5feTMgPSB5OyBicmVhaztcbiAgICAgIGNhc2UgMTogdGhpcy5fcG9pbnQgPSAyOyB0aGlzLl9jb250ZXh0Lm1vdmVUbyh0aGlzLl94NCA9IHgsIHRoaXMuX3k0ID0geSk7IGJyZWFrO1xuICAgICAgY2FzZSAyOiB0aGlzLl9wb2ludCA9IDM7IHRoaXMuX3g1ID0geCwgdGhpcy5feTUgPSB5OyBicmVhaztcbiAgICAgIGRlZmF1bHQ6IHBvaW50KHRoaXMsIHgsIHkpOyBicmVhaztcbiAgICB9XG4gICAgdGhpcy5feDAgPSB0aGlzLl94MSwgdGhpcy5feDEgPSB0aGlzLl94MiwgdGhpcy5feDIgPSB4O1xuICAgIHRoaXMuX3kwID0gdGhpcy5feTEsIHRoaXMuX3kxID0gdGhpcy5feTIsIHRoaXMuX3kyID0geTtcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgKGZ1bmN0aW9uIGN1c3RvbSh0ZW5zaW9uKSB7XG5cbiAgZnVuY3Rpb24gY2FyZGluYWwoY29udGV4dCkge1xuICAgIHJldHVybiBuZXcgQ2FyZGluYWxDbG9zZWQoY29udGV4dCwgdGVuc2lvbik7XG4gIH1cblxuICBjYXJkaW5hbC50ZW5zaW9uID0gZnVuY3Rpb24odGVuc2lvbikge1xuICAgIHJldHVybiBjdXN0b20oK3RlbnNpb24pO1xuICB9O1xuXG4gIHJldHVybiBjYXJkaW5hbDtcbn0pKDApO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvZDMtc2hhcGUvc3JjL2N1cnZlL2NhcmRpbmFsQ2xvc2VkLmpzXG4vLyBtb2R1bGUgaWQgPSA1OTZcbi8vIG1vZHVsZSBjaHVua3MgPSA1IiwiaW1wb3J0IHtwb2ludH0gZnJvbSBcIi4vY2FyZGluYWxcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIENhcmRpbmFsT3Blbihjb250ZXh0LCB0ZW5zaW9uKSB7XG4gIHRoaXMuX2NvbnRleHQgPSBjb250ZXh0O1xuICB0aGlzLl9rID0gKDEgLSB0ZW5zaW9uKSAvIDY7XG59XG5cbkNhcmRpbmFsT3Blbi5wcm90b3R5cGUgPSB7XG4gIGFyZWFTdGFydDogZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5fbGluZSA9IDA7XG4gIH0sXG4gIGFyZWFFbmQ6IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuX2xpbmUgPSBOYU47XG4gIH0sXG4gIGxpbmVTdGFydDogZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5feDAgPSB0aGlzLl94MSA9IHRoaXMuX3gyID1cbiAgICB0aGlzLl95MCA9IHRoaXMuX3kxID0gdGhpcy5feTIgPSBOYU47XG4gICAgdGhpcy5fcG9pbnQgPSAwO1xuICB9LFxuICBsaW5lRW5kOiBmdW5jdGlvbigpIHtcbiAgICBpZiAodGhpcy5fbGluZSB8fCAodGhpcy5fbGluZSAhPT0gMCAmJiB0aGlzLl9wb2ludCA9PT0gMykpIHRoaXMuX2NvbnRleHQuY2xvc2VQYXRoKCk7XG4gICAgdGhpcy5fbGluZSA9IDEgLSB0aGlzLl9saW5lO1xuICB9LFxuICBwb2ludDogZnVuY3Rpb24oeCwgeSkge1xuICAgIHggPSAreCwgeSA9ICt5O1xuICAgIHN3aXRjaCAodGhpcy5fcG9pbnQpIHtcbiAgICAgIGNhc2UgMDogdGhpcy5fcG9pbnQgPSAxOyBicmVhaztcbiAgICAgIGNhc2UgMTogdGhpcy5fcG9pbnQgPSAyOyBicmVhaztcbiAgICAgIGNhc2UgMjogdGhpcy5fcG9pbnQgPSAzOyB0aGlzLl9saW5lID8gdGhpcy5fY29udGV4dC5saW5lVG8odGhpcy5feDIsIHRoaXMuX3kyKSA6IHRoaXMuX2NvbnRleHQubW92ZVRvKHRoaXMuX3gyLCB0aGlzLl95Mik7IGJyZWFrO1xuICAgICAgY2FzZSAzOiB0aGlzLl9wb2ludCA9IDQ7IC8vIHByb2NlZWRcbiAgICAgIGRlZmF1bHQ6IHBvaW50KHRoaXMsIHgsIHkpOyBicmVhaztcbiAgICB9XG4gICAgdGhpcy5feDAgPSB0aGlzLl94MSwgdGhpcy5feDEgPSB0aGlzLl94MiwgdGhpcy5feDIgPSB4O1xuICAgIHRoaXMuX3kwID0gdGhpcy5feTEsIHRoaXMuX3kxID0gdGhpcy5feTIsIHRoaXMuX3kyID0geTtcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgKGZ1bmN0aW9uIGN1c3RvbSh0ZW5zaW9uKSB7XG5cbiAgZnVuY3Rpb24gY2FyZGluYWwoY29udGV4dCkge1xuICAgIHJldHVybiBuZXcgQ2FyZGluYWxPcGVuKGNvbnRleHQsIHRlbnNpb24pO1xuICB9XG5cbiAgY2FyZGluYWwudGVuc2lvbiA9IGZ1bmN0aW9uKHRlbnNpb24pIHtcbiAgICByZXR1cm4gY3VzdG9tKCt0ZW5zaW9uKTtcbiAgfTtcblxuICByZXR1cm4gY2FyZGluYWw7XG59KSgwKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2QzLXNoYXBlL3NyYy9jdXJ2ZS9jYXJkaW5hbE9wZW4uanNcbi8vIG1vZHVsZSBpZCA9IDU5N1xuLy8gbW9kdWxlIGNodW5rcyA9IDUiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSBjYWxsT3JWYWx1ZTtcbmZ1bmN0aW9uIGNhbGxPclZhbHVlKG1heWJlRm4sIGRhdGEpIHtcbiAgaWYgKHR5cGVvZiBtYXliZUZuID09PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuIG1heWJlRm4oZGF0YSk7XG4gIH1cbiAgcmV0dXJuIG1heWJlRm47XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvQHZ4L3NoYXBlL2J1aWxkL3V0aWwvY2FsbE9yVmFsdWUuanNcbi8vIG1vZHVsZSBpZCA9IDU5OFxuLy8gbW9kdWxlIGNodW5rcyA9IDUiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLlNUQUNLX09SREVSX05BTUVTID0gZXhwb3J0cy5TVEFDS19PUkRFUlMgPSB1bmRlZmluZWQ7XG5leHBvcnRzLmRlZmF1bHQgPSBzdGFja09yZGVyO1xuXG52YXIgX2QzU2hhcGUgPSByZXF1aXJlKCdkMy1zaGFwZScpO1xuXG52YXIgU1RBQ0tfT1JERVJTID0gZXhwb3J0cy5TVEFDS19PUkRFUlMgPSB7XG4gIGFzY2VuZGluZzogX2QzU2hhcGUuc3RhY2tPcmRlckFzY2VuZGluZyxcbiAgZGVzY2VuZGluZzogX2QzU2hhcGUuc3RhY2tPcmRlckRlc2NlbmRpbmcsXG4gIGluc2lkZW91dDogX2QzU2hhcGUuc3RhY2tPcmRlckluc2lkZU91dCxcbiAgbm9uZTogX2QzU2hhcGUuc3RhY2tPcmRlck5vbmUsXG4gIHJldmVyc2U6IF9kM1NoYXBlLnN0YWNrT3JkZXJSZXZlcnNlXG59O1xuXG52YXIgU1RBQ0tfT1JERVJfTkFNRVMgPSBleHBvcnRzLlNUQUNLX09SREVSX05BTUVTID0gT2JqZWN0LmtleXMoU1RBQ0tfT1JERVJTKTtcblxuZnVuY3Rpb24gc3RhY2tPcmRlcihvcmRlcikge1xuICByZXR1cm4gU1RBQ0tfT1JERVJTW29yZGVyXSB8fCBTVEFDS19PUkRFUlMubm9uZTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9Adngvc2hhcGUvYnVpbGQvdXRpbC9zdGFja09yZGVyLmpzXG4vLyBtb2R1bGUgaWQgPSA1OTlcbi8vIG1vZHVsZSBjaHVua3MgPSA1IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5TVEFDS19PRkZTRVRfTkFNRVMgPSBleHBvcnRzLlNUQUNLX09GRlNFVFMgPSB1bmRlZmluZWQ7XG5leHBvcnRzLmRlZmF1bHQgPSBzdGFja09mZnNldDtcblxudmFyIF9kM1NoYXBlID0gcmVxdWlyZSgnZDMtc2hhcGUnKTtcblxudmFyIFNUQUNLX09GRlNFVFMgPSBleHBvcnRzLlNUQUNLX09GRlNFVFMgPSB7XG4gIGV4cGFuZDogX2QzU2hhcGUuc3RhY2tPZmZzZXRFeHBhbmQsXG4gIGRpdmVyZ2luZzogX2QzU2hhcGUuc3RhY2tPZmZzZXREaXZlcmdpbmcsXG4gIG5vbmU6IF9kM1NoYXBlLnN0YWNrT2Zmc2V0Tm9uZSxcbiAgc2lsaG91ZXR0ZTogX2QzU2hhcGUuc3RhY2tPZmZzZXRTaWxob3VldHRlLFxuICB3aWdnbGU6IF9kM1NoYXBlLnN0YWNrT2Zmc2V0V2lnZ2xlXG59O1xuXG52YXIgU1RBQ0tfT0ZGU0VUX05BTUVTID0gZXhwb3J0cy5TVEFDS19PRkZTRVRfTkFNRVMgPSBPYmplY3Qua2V5cyhTVEFDS19PRkZTRVRTKTtcblxuZnVuY3Rpb24gc3RhY2tPZmZzZXQob2Zmc2V0KSB7XG4gIHJldHVybiBTVEFDS19PRkZTRVRTW29mZnNldF0gfHwgU1RBQ0tfT0ZGU0VUUy5ub25lO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL0B2eC9zaGFwZS9idWlsZC91dGlsL3N0YWNrT2Zmc2V0LmpzXG4vLyBtb2R1bGUgaWQgPSA2MDBcbi8vIG1vZHVsZSBjaHVua3MgPSA1IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX0FyYyA9IHJlcXVpcmUoJy4vc2hhcGVzL0FyYycpO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ0FyYycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgcmV0dXJuIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0FyYykuZGVmYXVsdDtcbiAgfVxufSk7XG5cbnZhciBfUGllID0gcmVxdWlyZSgnLi9zaGFwZXMvUGllJyk7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnUGllJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICByZXR1cm4gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfUGllKS5kZWZhdWx0O1xuICB9XG59KTtcblxudmFyIF9MaW5lID0gcmVxdWlyZSgnLi9zaGFwZXMvTGluZScpO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ0xpbmUnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgIHJldHVybiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9MaW5lKS5kZWZhdWx0O1xuICB9XG59KTtcblxudmFyIF9MaW5lUGF0aCA9IHJlcXVpcmUoJy4vc2hhcGVzL0xpbmVQYXRoJyk7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTGluZVBhdGgnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgIHJldHVybiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9MaW5lUGF0aCkuZGVmYXVsdDtcbiAgfVxufSk7XG5cbnZhciBfTGluZVJhZGlhbCA9IHJlcXVpcmUoJy4vc2hhcGVzL0xpbmVSYWRpYWwnKTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdMaW5lUmFkaWFsJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICByZXR1cm4gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfTGluZVJhZGlhbCkuZGVmYXVsdDtcbiAgfVxufSk7XG5cbnZhciBfTGlua0hvcml6b250YWwgPSByZXF1aXJlKCcuL3NoYXBlcy9saW5rL2RpYWdvbmFsL0xpbmtIb3Jpem9udGFsJyk7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTGlua0hvcml6b250YWwnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgIHJldHVybiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9MaW5rSG9yaXpvbnRhbCkuZGVmYXVsdDtcbiAgfVxufSk7XG5cbnZhciBfTGlua1ZlcnRpY2FsID0gcmVxdWlyZSgnLi9zaGFwZXMvbGluay9kaWFnb25hbC9MaW5rVmVydGljYWwnKTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdMaW5rVmVydGljYWwnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgIHJldHVybiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9MaW5rVmVydGljYWwpLmRlZmF1bHQ7XG4gIH1cbn0pO1xuXG52YXIgX0xpbmtSYWRpYWwgPSByZXF1aXJlKCcuL3NoYXBlcy9saW5rL2RpYWdvbmFsL0xpbmtSYWRpYWwnKTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdMaW5rUmFkaWFsJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICByZXR1cm4gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfTGlua1JhZGlhbCkuZGVmYXVsdDtcbiAgfVxufSk7XG5cbnZhciBfTGlua0hvcml6b250YWxDdXJ2ZSA9IHJlcXVpcmUoJy4vc2hhcGVzL2xpbmsvY3VydmUvTGlua0hvcml6b250YWxDdXJ2ZScpO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ0xpbmtIb3Jpem9udGFsQ3VydmUnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgIHJldHVybiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9MaW5rSG9yaXpvbnRhbEN1cnZlKS5kZWZhdWx0O1xuICB9XG59KTtcblxudmFyIF9MaW5rVmVydGljYWxDdXJ2ZSA9IHJlcXVpcmUoJy4vc2hhcGVzL2xpbmsvY3VydmUvTGlua1ZlcnRpY2FsQ3VydmUnKTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdMaW5rVmVydGljYWxDdXJ2ZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgcmV0dXJuIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0xpbmtWZXJ0aWNhbEN1cnZlKS5kZWZhdWx0O1xuICB9XG59KTtcblxudmFyIF9MaW5rUmFkaWFsQ3VydmUgPSByZXF1aXJlKCcuL3NoYXBlcy9saW5rL2N1cnZlL0xpbmtSYWRpYWxDdXJ2ZScpO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ0xpbmtSYWRpYWxDdXJ2ZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgcmV0dXJuIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0xpbmtSYWRpYWxDdXJ2ZSkuZGVmYXVsdDtcbiAgfVxufSk7XG5cbnZhciBfTGlua0hvcml6b250YWxMaW5lID0gcmVxdWlyZSgnLi9zaGFwZXMvbGluay9saW5lL0xpbmtIb3Jpem9udGFsTGluZScpO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ0xpbmtIb3Jpem9udGFsTGluZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgcmV0dXJuIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0xpbmtIb3Jpem9udGFsTGluZSkuZGVmYXVsdDtcbiAgfVxufSk7XG5cbnZhciBfTGlua1ZlcnRpY2FsTGluZSA9IHJlcXVpcmUoJy4vc2hhcGVzL2xpbmsvbGluZS9MaW5rVmVydGljYWxMaW5lJyk7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTGlua1ZlcnRpY2FsTGluZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgcmV0dXJuIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0xpbmtWZXJ0aWNhbExpbmUpLmRlZmF1bHQ7XG4gIH1cbn0pO1xuXG52YXIgX0xpbmtSYWRpYWxMaW5lID0gcmVxdWlyZSgnLi9zaGFwZXMvbGluay9saW5lL0xpbmtSYWRpYWxMaW5lJyk7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTGlua1JhZGlhbExpbmUnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgIHJldHVybiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9MaW5rUmFkaWFsTGluZSkuZGVmYXVsdDtcbiAgfVxufSk7XG5cbnZhciBfTGlua0hvcml6b250YWxTdGVwID0gcmVxdWlyZSgnLi9zaGFwZXMvbGluay9zdGVwL0xpbmtIb3Jpem9udGFsU3RlcCcpO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ0xpbmtIb3Jpem9udGFsU3RlcCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgcmV0dXJuIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0xpbmtIb3Jpem9udGFsU3RlcCkuZGVmYXVsdDtcbiAgfVxufSk7XG5cbnZhciBfTGlua1ZlcnRpY2FsU3RlcCA9IHJlcXVpcmUoJy4vc2hhcGVzL2xpbmsvc3RlcC9MaW5rVmVydGljYWxTdGVwJyk7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTGlua1ZlcnRpY2FsU3RlcCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgcmV0dXJuIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0xpbmtWZXJ0aWNhbFN0ZXApLmRlZmF1bHQ7XG4gIH1cbn0pO1xuXG52YXIgX0xpbmtSYWRpYWxTdGVwID0gcmVxdWlyZSgnLi9zaGFwZXMvbGluay9zdGVwL0xpbmtSYWRpYWxTdGVwJyk7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTGlua1JhZGlhbFN0ZXAnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgIHJldHVybiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9MaW5rUmFkaWFsU3RlcCkuZGVmYXVsdDtcbiAgfVxufSk7XG5cbnZhciBfQXJlYSA9IHJlcXVpcmUoJy4vc2hhcGVzL0FyZWEnKTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdBcmVhJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICByZXR1cm4gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfQXJlYSkuZGVmYXVsdDtcbiAgfVxufSk7XG5cbnZhciBfQXJlYUNsb3NlZCA9IHJlcXVpcmUoJy4vc2hhcGVzL0FyZWFDbG9zZWQnKTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdBcmVhQ2xvc2VkJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICByZXR1cm4gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfQXJlYUNsb3NlZCkuZGVmYXVsdDtcbiAgfVxufSk7XG5cbnZhciBfQXJlYVN0YWNrID0gcmVxdWlyZSgnLi9zaGFwZXMvQXJlYVN0YWNrJyk7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnQXJlYVN0YWNrJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICByZXR1cm4gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfQXJlYVN0YWNrKS5kZWZhdWx0O1xuICB9XG59KTtcblxudmFyIF9CYXIgPSByZXF1aXJlKCcuL3NoYXBlcy9CYXInKTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdCYXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgIHJldHVybiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9CYXIpLmRlZmF1bHQ7XG4gIH1cbn0pO1xuXG52YXIgX0Jhckdyb3VwID0gcmVxdWlyZSgnLi9zaGFwZXMvQmFyR3JvdXAnKTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdCYXJHcm91cCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgcmV0dXJuIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0Jhckdyb3VwKS5kZWZhdWx0O1xuICB9XG59KTtcblxudmFyIF9CYXJTdGFjayA9IHJlcXVpcmUoJy4vc2hhcGVzL0JhclN0YWNrJyk7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnQmFyU3RhY2snLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgIHJldHVybiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9CYXJTdGFjaykuZGVmYXVsdDtcbiAgfVxufSk7XG5cbnZhciBfQmFyU3RhY2tIb3Jpem9udGFsID0gcmVxdWlyZSgnLi9zaGFwZXMvQmFyU3RhY2tIb3Jpem9udGFsJyk7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnQmFyU3RhY2tIb3Jpem9udGFsJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICByZXR1cm4gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfQmFyU3RhY2tIb3Jpem9udGFsKS5kZWZhdWx0O1xuICB9XG59KTtcblxudmFyIF9TdGFjayA9IHJlcXVpcmUoJy4vc2hhcGVzL1N0YWNrJyk7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnU3RhY2snLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgIHJldHVybiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9TdGFjaykuZGVmYXVsdDtcbiAgfVxufSk7XG5cbnZhciBfY2FsbE9yVmFsdWUgPSByZXF1aXJlKCcuL3V0aWwvY2FsbE9yVmFsdWUnKTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjYWxsT3JWYWx1ZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgcmV0dXJuIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NhbGxPclZhbHVlKS5kZWZhdWx0O1xuICB9XG59KTtcblxudmFyIF9zdGFja09mZnNldCA9IHJlcXVpcmUoJy4vdXRpbC9zdGFja09mZnNldCcpO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3N0YWNrT2Zmc2V0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICByZXR1cm4gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc3RhY2tPZmZzZXQpLmRlZmF1bHQ7XG4gIH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdTVEFDS19PRkZTRVRTJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICByZXR1cm4gX3N0YWNrT2Zmc2V0LlNUQUNLX09GRlNFVFM7XG4gIH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdTVEFDS19PRkZTRVRfTkFNRVMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgIHJldHVybiBfc3RhY2tPZmZzZXQuU1RBQ0tfT0ZGU0VUX05BTUVTO1xuICB9XG59KTtcblxudmFyIF9zdGFja09yZGVyID0gcmVxdWlyZSgnLi91dGlsL3N0YWNrT3JkZXInKTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdzdGFja09yZGVyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICByZXR1cm4gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc3RhY2tPcmRlcikuZGVmYXVsdDtcbiAgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1NUQUNLX09SREVSUycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgcmV0dXJuIF9zdGFja09yZGVyLlNUQUNLX09SREVSUztcbiAgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1NUQUNLX09SREVSX05BTUVTJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICByZXR1cm4gX3N0YWNrT3JkZXIuU1RBQ0tfT1JERVJfTkFNRVM7XG4gIH1cbn0pO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL0B2eC9zaGFwZS9idWlsZC9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gNjAxXG4vLyBtb2R1bGUgY2h1bmtzID0gNSIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gQXJjO1xuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfY2xhc3NuYW1lcyA9IHJlcXVpcmUoJ2NsYXNzbmFtZXMnKTtcblxudmFyIF9jbGFzc25hbWVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NsYXNzbmFtZXMpO1xuXG52YXIgX2QzU2hhcGUgPSByZXF1aXJlKCdkMy1zaGFwZScpO1xuXG52YXIgX2FkZGl0aW9uYWxQcm9wcyA9IHJlcXVpcmUoJy4uL3V0aWwvYWRkaXRpb25hbFByb3BzJyk7XG5cbnZhciBfYWRkaXRpb25hbFByb3BzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2FkZGl0aW9uYWxQcm9wcyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhvYmosIGtleXMpIHsgdmFyIHRhcmdldCA9IHt9OyBmb3IgKHZhciBpIGluIG9iaikgeyBpZiAoa2V5cy5pbmRleE9mKGkpID49IDApIGNvbnRpbnVlOyBpZiAoIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGkpKSBjb250aW51ZTsgdGFyZ2V0W2ldID0gb2JqW2ldOyB9IHJldHVybiB0YXJnZXQ7IH1cblxuZnVuY3Rpb24gQXJjKF9yZWYpIHtcbiAgdmFyIGNsYXNzTmFtZSA9IF9yZWYuY2xhc3NOYW1lLFxuICAgICAgZGF0YSA9IF9yZWYuZGF0YSxcbiAgICAgIGNlbnRyb2lkID0gX3JlZi5jZW50cm9pZCxcbiAgICAgIGlubmVyUmFkaXVzID0gX3JlZi5pbm5lclJhZGl1cyxcbiAgICAgIG91dGVyUmFkaXVzID0gX3JlZi5vdXRlclJhZGl1cyxcbiAgICAgIGNvcm5lclJhZGl1cyA9IF9yZWYuY29ybmVyUmFkaXVzLFxuICAgICAgc3RhcnRBbmdsZSA9IF9yZWYuc3RhcnRBbmdsZSxcbiAgICAgIGVuZEFuZ2xlID0gX3JlZi5lbmRBbmdsZSxcbiAgICAgIHBhZEFuZ2xlID0gX3JlZi5wYWRBbmdsZSxcbiAgICAgIHBhZFJhZGl1cyA9IF9yZWYucGFkUmFkaXVzLFxuICAgICAgcmVzdFByb3BzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKF9yZWYsIFsnY2xhc3NOYW1lJywgJ2RhdGEnLCAnY2VudHJvaWQnLCAnaW5uZXJSYWRpdXMnLCAnb3V0ZXJSYWRpdXMnLCAnY29ybmVyUmFkaXVzJywgJ3N0YXJ0QW5nbGUnLCAnZW5kQW5nbGUnLCAncGFkQW5nbGUnLCAncGFkUmFkaXVzJ10pO1xuXG4gIHZhciBhcmMgPSAoMCwgX2QzU2hhcGUuYXJjKSgpO1xuICBpZiAoY2VudHJvaWQpIGFyYy5jZW50cm9pZChjZW50cm9pZCk7XG4gIGlmIChpbm5lclJhZGl1cykgYXJjLmlubmVyUmFkaXVzKGlubmVyUmFkaXVzKTtcbiAgaWYgKG91dGVyUmFkaXVzKSBhcmMub3V0ZXJSYWRpdXMob3V0ZXJSYWRpdXMpO1xuICBpZiAoY29ybmVyUmFkaXVzKSBhcmMuY29ybmVyUmFkaXVzKGNvcm5lclJhZGl1cyk7XG4gIGlmIChzdGFydEFuZ2xlKSBhcmMuc3RhcnRBbmdsZShzdGFydEFuZ2xlKTtcbiAgaWYgKGVuZEFuZ2xlKSBhcmMuZW5kQW5nbGUoZW5kQW5nbGUpO1xuICBpZiAocGFkQW5nbGUpIGFyYy5wYWRBbmdsZShwYWRBbmdsZSk7XG4gIGlmIChwYWRSYWRpdXMpIGFyYy5wYWRSYWRpdXMocGFkUmFkaXVzKTtcbiAgcmV0dXJuIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KCdwYXRoJywgX2V4dGVuZHMoe1xuICAgIGNsYXNzTmFtZTogKDAsIF9jbGFzc25hbWVzMi5kZWZhdWx0KSgndngtYXJjJywgY2xhc3NOYW1lKSxcbiAgICBkOiBhcmMoZGF0YSlcbiAgfSwgKDAsIF9hZGRpdGlvbmFsUHJvcHMyLmRlZmF1bHQpKHJlc3RQcm9wcywgZGF0YSkpKTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9Adngvc2hhcGUvYnVpbGQvc2hhcGVzL0FyYy5qc1xuLy8gbW9kdWxlIGlkID0gNjAyXG4vLyBtb2R1bGUgY2h1bmtzID0gNSIsImltcG9ydCB7cGF0aH0gZnJvbSBcImQzLXBhdGhcIjtcbmltcG9ydCBjb25zdGFudCBmcm9tIFwiLi9jb25zdGFudFwiO1xuaW1wb3J0IHthYnMsIGFjb3MsIGFzaW4sIGF0YW4yLCBjb3MsIGVwc2lsb24sIGhhbGZQaSwgbWF4LCBtaW4sIHBpLCBzaW4sIHNxcnQsIHRhdX0gZnJvbSBcIi4vbWF0aFwiO1xuXG5mdW5jdGlvbiBhcmNJbm5lclJhZGl1cyhkKSB7XG4gIHJldHVybiBkLmlubmVyUmFkaXVzO1xufVxuXG5mdW5jdGlvbiBhcmNPdXRlclJhZGl1cyhkKSB7XG4gIHJldHVybiBkLm91dGVyUmFkaXVzO1xufVxuXG5mdW5jdGlvbiBhcmNTdGFydEFuZ2xlKGQpIHtcbiAgcmV0dXJuIGQuc3RhcnRBbmdsZTtcbn1cblxuZnVuY3Rpb24gYXJjRW5kQW5nbGUoZCkge1xuICByZXR1cm4gZC5lbmRBbmdsZTtcbn1cblxuZnVuY3Rpb24gYXJjUGFkQW5nbGUoZCkge1xuICByZXR1cm4gZCAmJiBkLnBhZEFuZ2xlOyAvLyBOb3RlOiBvcHRpb25hbCFcbn1cblxuZnVuY3Rpb24gaW50ZXJzZWN0KHgwLCB5MCwgeDEsIHkxLCB4MiwgeTIsIHgzLCB5Mykge1xuICB2YXIgeDEwID0geDEgLSB4MCwgeTEwID0geTEgLSB5MCxcbiAgICAgIHgzMiA9IHgzIC0geDIsIHkzMiA9IHkzIC0geTIsXG4gICAgICB0ID0gKHgzMiAqICh5MCAtIHkyKSAtIHkzMiAqICh4MCAtIHgyKSkgLyAoeTMyICogeDEwIC0geDMyICogeTEwKTtcbiAgcmV0dXJuIFt4MCArIHQgKiB4MTAsIHkwICsgdCAqIHkxMF07XG59XG5cbi8vIENvbXB1dGUgcGVycGVuZGljdWxhciBvZmZzZXQgbGluZSBvZiBsZW5ndGggcmMuXG4vLyBodHRwOi8vbWF0aHdvcmxkLndvbGZyYW0uY29tL0NpcmNsZS1MaW5lSW50ZXJzZWN0aW9uLmh0bWxcbmZ1bmN0aW9uIGNvcm5lclRhbmdlbnRzKHgwLCB5MCwgeDEsIHkxLCByMSwgcmMsIGN3KSB7XG4gIHZhciB4MDEgPSB4MCAtIHgxLFxuICAgICAgeTAxID0geTAgLSB5MSxcbiAgICAgIGxvID0gKGN3ID8gcmMgOiAtcmMpIC8gc3FydCh4MDEgKiB4MDEgKyB5MDEgKiB5MDEpLFxuICAgICAgb3ggPSBsbyAqIHkwMSxcbiAgICAgIG95ID0gLWxvICogeDAxLFxuICAgICAgeDExID0geDAgKyBveCxcbiAgICAgIHkxMSA9IHkwICsgb3ksXG4gICAgICB4MTAgPSB4MSArIG94LFxuICAgICAgeTEwID0geTEgKyBveSxcbiAgICAgIHgwMCA9ICh4MTEgKyB4MTApIC8gMixcbiAgICAgIHkwMCA9ICh5MTEgKyB5MTApIC8gMixcbiAgICAgIGR4ID0geDEwIC0geDExLFxuICAgICAgZHkgPSB5MTAgLSB5MTEsXG4gICAgICBkMiA9IGR4ICogZHggKyBkeSAqIGR5LFxuICAgICAgciA9IHIxIC0gcmMsXG4gICAgICBEID0geDExICogeTEwIC0geDEwICogeTExLFxuICAgICAgZCA9IChkeSA8IDAgPyAtMSA6IDEpICogc3FydChtYXgoMCwgciAqIHIgKiBkMiAtIEQgKiBEKSksXG4gICAgICBjeDAgPSAoRCAqIGR5IC0gZHggKiBkKSAvIGQyLFxuICAgICAgY3kwID0gKC1EICogZHggLSBkeSAqIGQpIC8gZDIsXG4gICAgICBjeDEgPSAoRCAqIGR5ICsgZHggKiBkKSAvIGQyLFxuICAgICAgY3kxID0gKC1EICogZHggKyBkeSAqIGQpIC8gZDIsXG4gICAgICBkeDAgPSBjeDAgLSB4MDAsXG4gICAgICBkeTAgPSBjeTAgLSB5MDAsXG4gICAgICBkeDEgPSBjeDEgLSB4MDAsXG4gICAgICBkeTEgPSBjeTEgLSB5MDA7XG5cbiAgLy8gUGljayB0aGUgY2xvc2VyIG9mIHRoZSB0d28gaW50ZXJzZWN0aW9uIHBvaW50cy5cbiAgLy8gVE9ETyBJcyB0aGVyZSBhIGZhc3RlciB3YXkgdG8gZGV0ZXJtaW5lIHdoaWNoIGludGVyc2VjdGlvbiB0byB1c2U/XG4gIGlmIChkeDAgKiBkeDAgKyBkeTAgKiBkeTAgPiBkeDEgKiBkeDEgKyBkeTEgKiBkeTEpIGN4MCA9IGN4MSwgY3kwID0gY3kxO1xuXG4gIHJldHVybiB7XG4gICAgY3g6IGN4MCxcbiAgICBjeTogY3kwLFxuICAgIHgwMTogLW94LFxuICAgIHkwMTogLW95LFxuICAgIHgxMTogY3gwICogKHIxIC8gciAtIDEpLFxuICAgIHkxMTogY3kwICogKHIxIC8gciAtIDEpXG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCkge1xuICB2YXIgaW5uZXJSYWRpdXMgPSBhcmNJbm5lclJhZGl1cyxcbiAgICAgIG91dGVyUmFkaXVzID0gYXJjT3V0ZXJSYWRpdXMsXG4gICAgICBjb3JuZXJSYWRpdXMgPSBjb25zdGFudCgwKSxcbiAgICAgIHBhZFJhZGl1cyA9IG51bGwsXG4gICAgICBzdGFydEFuZ2xlID0gYXJjU3RhcnRBbmdsZSxcbiAgICAgIGVuZEFuZ2xlID0gYXJjRW5kQW5nbGUsXG4gICAgICBwYWRBbmdsZSA9IGFyY1BhZEFuZ2xlLFxuICAgICAgY29udGV4dCA9IG51bGw7XG5cbiAgZnVuY3Rpb24gYXJjKCkge1xuICAgIHZhciBidWZmZXIsXG4gICAgICAgIHIsXG4gICAgICAgIHIwID0gK2lubmVyUmFkaXVzLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyksXG4gICAgICAgIHIxID0gK291dGVyUmFkaXVzLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyksXG4gICAgICAgIGEwID0gc3RhcnRBbmdsZS5hcHBseSh0aGlzLCBhcmd1bWVudHMpIC0gaGFsZlBpLFxuICAgICAgICBhMSA9IGVuZEFuZ2xlLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgLSBoYWxmUGksXG4gICAgICAgIGRhID0gYWJzKGExIC0gYTApLFxuICAgICAgICBjdyA9IGExID4gYTA7XG5cbiAgICBpZiAoIWNvbnRleHQpIGNvbnRleHQgPSBidWZmZXIgPSBwYXRoKCk7XG5cbiAgICAvLyBFbnN1cmUgdGhhdCB0aGUgb3V0ZXIgcmFkaXVzIGlzIGFsd2F5cyBsYXJnZXIgdGhhbiB0aGUgaW5uZXIgcmFkaXVzLlxuICAgIGlmIChyMSA8IHIwKSByID0gcjEsIHIxID0gcjAsIHIwID0gcjtcblxuICAgIC8vIElzIGl0IGEgcG9pbnQ/XG4gICAgaWYgKCEocjEgPiBlcHNpbG9uKSkgY29udGV4dC5tb3ZlVG8oMCwgMCk7XG5cbiAgICAvLyBPciBpcyBpdCBhIGNpcmNsZSBvciBhbm51bHVzP1xuICAgIGVsc2UgaWYgKGRhID4gdGF1IC0gZXBzaWxvbikge1xuICAgICAgY29udGV4dC5tb3ZlVG8ocjEgKiBjb3MoYTApLCByMSAqIHNpbihhMCkpO1xuICAgICAgY29udGV4dC5hcmMoMCwgMCwgcjEsIGEwLCBhMSwgIWN3KTtcbiAgICAgIGlmIChyMCA+IGVwc2lsb24pIHtcbiAgICAgICAgY29udGV4dC5tb3ZlVG8ocjAgKiBjb3MoYTEpLCByMCAqIHNpbihhMSkpO1xuICAgICAgICBjb250ZXh0LmFyYygwLCAwLCByMCwgYTEsIGEwLCBjdyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gT3IgaXMgaXQgYSBjaXJjdWxhciBvciBhbm51bGFyIHNlY3Rvcj9cbiAgICBlbHNlIHtcbiAgICAgIHZhciBhMDEgPSBhMCxcbiAgICAgICAgICBhMTEgPSBhMSxcbiAgICAgICAgICBhMDAgPSBhMCxcbiAgICAgICAgICBhMTAgPSBhMSxcbiAgICAgICAgICBkYTAgPSBkYSxcbiAgICAgICAgICBkYTEgPSBkYSxcbiAgICAgICAgICBhcCA9IHBhZEFuZ2xlLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgLyAyLFxuICAgICAgICAgIHJwID0gKGFwID4gZXBzaWxvbikgJiYgKHBhZFJhZGl1cyA/ICtwYWRSYWRpdXMuYXBwbHkodGhpcywgYXJndW1lbnRzKSA6IHNxcnQocjAgKiByMCArIHIxICogcjEpKSxcbiAgICAgICAgICByYyA9IG1pbihhYnMocjEgLSByMCkgLyAyLCArY29ybmVyUmFkaXVzLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykpLFxuICAgICAgICAgIHJjMCA9IHJjLFxuICAgICAgICAgIHJjMSA9IHJjLFxuICAgICAgICAgIHQwLFxuICAgICAgICAgIHQxO1xuXG4gICAgICAvLyBBcHBseSBwYWRkaW5nPyBOb3RlIHRoYXQgc2luY2UgcjEg4omlIHIwLCBkYTEg4omlIGRhMC5cbiAgICAgIGlmIChycCA+IGVwc2lsb24pIHtcbiAgICAgICAgdmFyIHAwID0gYXNpbihycCAvIHIwICogc2luKGFwKSksXG4gICAgICAgICAgICBwMSA9IGFzaW4ocnAgLyByMSAqIHNpbihhcCkpO1xuICAgICAgICBpZiAoKGRhMCAtPSBwMCAqIDIpID4gZXBzaWxvbikgcDAgKj0gKGN3ID8gMSA6IC0xKSwgYTAwICs9IHAwLCBhMTAgLT0gcDA7XG4gICAgICAgIGVsc2UgZGEwID0gMCwgYTAwID0gYTEwID0gKGEwICsgYTEpIC8gMjtcbiAgICAgICAgaWYgKChkYTEgLT0gcDEgKiAyKSA+IGVwc2lsb24pIHAxICo9IChjdyA/IDEgOiAtMSksIGEwMSArPSBwMSwgYTExIC09IHAxO1xuICAgICAgICBlbHNlIGRhMSA9IDAsIGEwMSA9IGExMSA9IChhMCArIGExKSAvIDI7XG4gICAgICB9XG5cbiAgICAgIHZhciB4MDEgPSByMSAqIGNvcyhhMDEpLFxuICAgICAgICAgIHkwMSA9IHIxICogc2luKGEwMSksXG4gICAgICAgICAgeDEwID0gcjAgKiBjb3MoYTEwKSxcbiAgICAgICAgICB5MTAgPSByMCAqIHNpbihhMTApO1xuXG4gICAgICAvLyBBcHBseSByb3VuZGVkIGNvcm5lcnM/XG4gICAgICBpZiAocmMgPiBlcHNpbG9uKSB7XG4gICAgICAgIHZhciB4MTEgPSByMSAqIGNvcyhhMTEpLFxuICAgICAgICAgICAgeTExID0gcjEgKiBzaW4oYTExKSxcbiAgICAgICAgICAgIHgwMCA9IHIwICogY29zKGEwMCksXG4gICAgICAgICAgICB5MDAgPSByMCAqIHNpbihhMDApO1xuXG4gICAgICAgIC8vIFJlc3RyaWN0IHRoZSBjb3JuZXIgcmFkaXVzIGFjY29yZGluZyB0byB0aGUgc2VjdG9yIGFuZ2xlLlxuICAgICAgICBpZiAoZGEgPCBwaSkge1xuICAgICAgICAgIHZhciBvYyA9IGRhMCA+IGVwc2lsb24gPyBpbnRlcnNlY3QoeDAxLCB5MDEsIHgwMCwgeTAwLCB4MTEsIHkxMSwgeDEwLCB5MTApIDogW3gxMCwgeTEwXSxcbiAgICAgICAgICAgICAgYXggPSB4MDEgLSBvY1swXSxcbiAgICAgICAgICAgICAgYXkgPSB5MDEgLSBvY1sxXSxcbiAgICAgICAgICAgICAgYnggPSB4MTEgLSBvY1swXSxcbiAgICAgICAgICAgICAgYnkgPSB5MTEgLSBvY1sxXSxcbiAgICAgICAgICAgICAga2MgPSAxIC8gc2luKGFjb3MoKGF4ICogYnggKyBheSAqIGJ5KSAvIChzcXJ0KGF4ICogYXggKyBheSAqIGF5KSAqIHNxcnQoYnggKiBieCArIGJ5ICogYnkpKSkgLyAyKSxcbiAgICAgICAgICAgICAgbGMgPSBzcXJ0KG9jWzBdICogb2NbMF0gKyBvY1sxXSAqIG9jWzFdKTtcbiAgICAgICAgICByYzAgPSBtaW4ocmMsIChyMCAtIGxjKSAvIChrYyAtIDEpKTtcbiAgICAgICAgICByYzEgPSBtaW4ocmMsIChyMSAtIGxjKSAvIChrYyArIDEpKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBJcyB0aGUgc2VjdG9yIGNvbGxhcHNlZCB0byBhIGxpbmU/XG4gICAgICBpZiAoIShkYTEgPiBlcHNpbG9uKSkgY29udGV4dC5tb3ZlVG8oeDAxLCB5MDEpO1xuXG4gICAgICAvLyBEb2VzIHRoZSBzZWN0b3LigJlzIG91dGVyIHJpbmcgaGF2ZSByb3VuZGVkIGNvcm5lcnM/XG4gICAgICBlbHNlIGlmIChyYzEgPiBlcHNpbG9uKSB7XG4gICAgICAgIHQwID0gY29ybmVyVGFuZ2VudHMoeDAwLCB5MDAsIHgwMSwgeTAxLCByMSwgcmMxLCBjdyk7XG4gICAgICAgIHQxID0gY29ybmVyVGFuZ2VudHMoeDExLCB5MTEsIHgxMCwgeTEwLCByMSwgcmMxLCBjdyk7XG5cbiAgICAgICAgY29udGV4dC5tb3ZlVG8odDAuY3ggKyB0MC54MDEsIHQwLmN5ICsgdDAueTAxKTtcblxuICAgICAgICAvLyBIYXZlIHRoZSBjb3JuZXJzIG1lcmdlZD9cbiAgICAgICAgaWYgKHJjMSA8IHJjKSBjb250ZXh0LmFyYyh0MC5jeCwgdDAuY3ksIHJjMSwgYXRhbjIodDAueTAxLCB0MC54MDEpLCBhdGFuMih0MS55MDEsIHQxLngwMSksICFjdyk7XG5cbiAgICAgICAgLy8gT3RoZXJ3aXNlLCBkcmF3IHRoZSB0d28gY29ybmVycyBhbmQgdGhlIHJpbmcuXG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIGNvbnRleHQuYXJjKHQwLmN4LCB0MC5jeSwgcmMxLCBhdGFuMih0MC55MDEsIHQwLngwMSksIGF0YW4yKHQwLnkxMSwgdDAueDExKSwgIWN3KTtcbiAgICAgICAgICBjb250ZXh0LmFyYygwLCAwLCByMSwgYXRhbjIodDAuY3kgKyB0MC55MTEsIHQwLmN4ICsgdDAueDExKSwgYXRhbjIodDEuY3kgKyB0MS55MTEsIHQxLmN4ICsgdDEueDExKSwgIWN3KTtcbiAgICAgICAgICBjb250ZXh0LmFyYyh0MS5jeCwgdDEuY3ksIHJjMSwgYXRhbjIodDEueTExLCB0MS54MTEpLCBhdGFuMih0MS55MDEsIHQxLngwMSksICFjdyk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gT3IgaXMgdGhlIG91dGVyIHJpbmcganVzdCBhIGNpcmN1bGFyIGFyYz9cbiAgICAgIGVsc2UgY29udGV4dC5tb3ZlVG8oeDAxLCB5MDEpLCBjb250ZXh0LmFyYygwLCAwLCByMSwgYTAxLCBhMTEsICFjdyk7XG5cbiAgICAgIC8vIElzIHRoZXJlIG5vIGlubmVyIHJpbmcsIGFuZCBpdOKAmXMgYSBjaXJjdWxhciBzZWN0b3I/XG4gICAgICAvLyBPciBwZXJoYXBzIGl04oCZcyBhbiBhbm51bGFyIHNlY3RvciBjb2xsYXBzZWQgZHVlIHRvIHBhZGRpbmc/XG4gICAgICBpZiAoIShyMCA+IGVwc2lsb24pIHx8ICEoZGEwID4gZXBzaWxvbikpIGNvbnRleHQubGluZVRvKHgxMCwgeTEwKTtcblxuICAgICAgLy8gRG9lcyB0aGUgc2VjdG9y4oCZcyBpbm5lciByaW5nIChvciBwb2ludCkgaGF2ZSByb3VuZGVkIGNvcm5lcnM/XG4gICAgICBlbHNlIGlmIChyYzAgPiBlcHNpbG9uKSB7XG4gICAgICAgIHQwID0gY29ybmVyVGFuZ2VudHMoeDEwLCB5MTAsIHgxMSwgeTExLCByMCwgLXJjMCwgY3cpO1xuICAgICAgICB0MSA9IGNvcm5lclRhbmdlbnRzKHgwMSwgeTAxLCB4MDAsIHkwMCwgcjAsIC1yYzAsIGN3KTtcblxuICAgICAgICBjb250ZXh0LmxpbmVUbyh0MC5jeCArIHQwLngwMSwgdDAuY3kgKyB0MC55MDEpO1xuXG4gICAgICAgIC8vIEhhdmUgdGhlIGNvcm5lcnMgbWVyZ2VkP1xuICAgICAgICBpZiAocmMwIDwgcmMpIGNvbnRleHQuYXJjKHQwLmN4LCB0MC5jeSwgcmMwLCBhdGFuMih0MC55MDEsIHQwLngwMSksIGF0YW4yKHQxLnkwMSwgdDEueDAxKSwgIWN3KTtcblxuICAgICAgICAvLyBPdGhlcndpc2UsIGRyYXcgdGhlIHR3byBjb3JuZXJzIGFuZCB0aGUgcmluZy5cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgY29udGV4dC5hcmModDAuY3gsIHQwLmN5LCByYzAsIGF0YW4yKHQwLnkwMSwgdDAueDAxKSwgYXRhbjIodDAueTExLCB0MC54MTEpLCAhY3cpO1xuICAgICAgICAgIGNvbnRleHQuYXJjKDAsIDAsIHIwLCBhdGFuMih0MC5jeSArIHQwLnkxMSwgdDAuY3ggKyB0MC54MTEpLCBhdGFuMih0MS5jeSArIHQxLnkxMSwgdDEuY3ggKyB0MS54MTEpLCBjdyk7XG4gICAgICAgICAgY29udGV4dC5hcmModDEuY3gsIHQxLmN5LCByYzAsIGF0YW4yKHQxLnkxMSwgdDEueDExKSwgYXRhbjIodDEueTAxLCB0MS54MDEpLCAhY3cpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIE9yIGlzIHRoZSBpbm5lciByaW5nIGp1c3QgYSBjaXJjdWxhciBhcmM/XG4gICAgICBlbHNlIGNvbnRleHQuYXJjKDAsIDAsIHIwLCBhMTAsIGEwMCwgY3cpO1xuICAgIH1cblxuICAgIGNvbnRleHQuY2xvc2VQYXRoKCk7XG5cbiAgICBpZiAoYnVmZmVyKSByZXR1cm4gY29udGV4dCA9IG51bGwsIGJ1ZmZlciArIFwiXCIgfHwgbnVsbDtcbiAgfVxuXG4gIGFyYy5jZW50cm9pZCA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciByID0gKCtpbm5lclJhZGl1cy5hcHBseSh0aGlzLCBhcmd1bWVudHMpICsgK291dGVyUmFkaXVzLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykpIC8gMixcbiAgICAgICAgYSA9ICgrc3RhcnRBbmdsZS5hcHBseSh0aGlzLCBhcmd1bWVudHMpICsgK2VuZEFuZ2xlLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykpIC8gMiAtIHBpIC8gMjtcbiAgICByZXR1cm4gW2NvcyhhKSAqIHIsIHNpbihhKSAqIHJdO1xuICB9O1xuXG4gIGFyYy5pbm5lclJhZGl1cyA9IGZ1bmN0aW9uKF8pIHtcbiAgICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA/IChpbm5lclJhZGl1cyA9IHR5cGVvZiBfID09PSBcImZ1bmN0aW9uXCIgPyBfIDogY29uc3RhbnQoK18pLCBhcmMpIDogaW5uZXJSYWRpdXM7XG4gIH07XG5cbiAgYXJjLm91dGVyUmFkaXVzID0gZnVuY3Rpb24oXykge1xuICAgIHJldHVybiBhcmd1bWVudHMubGVuZ3RoID8gKG91dGVyUmFkaXVzID0gdHlwZW9mIF8gPT09IFwiZnVuY3Rpb25cIiA/IF8gOiBjb25zdGFudCgrXyksIGFyYykgOiBvdXRlclJhZGl1cztcbiAgfTtcblxuICBhcmMuY29ybmVyUmFkaXVzID0gZnVuY3Rpb24oXykge1xuICAgIHJldHVybiBhcmd1bWVudHMubGVuZ3RoID8gKGNvcm5lclJhZGl1cyA9IHR5cGVvZiBfID09PSBcImZ1bmN0aW9uXCIgPyBfIDogY29uc3RhbnQoK18pLCBhcmMpIDogY29ybmVyUmFkaXVzO1xuICB9O1xuXG4gIGFyYy5wYWRSYWRpdXMgPSBmdW5jdGlvbihfKSB7XG4gICAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPyAocGFkUmFkaXVzID0gXyA9PSBudWxsID8gbnVsbCA6IHR5cGVvZiBfID09PSBcImZ1bmN0aW9uXCIgPyBfIDogY29uc3RhbnQoK18pLCBhcmMpIDogcGFkUmFkaXVzO1xuICB9O1xuXG4gIGFyYy5zdGFydEFuZ2xlID0gZnVuY3Rpb24oXykge1xuICAgIHJldHVybiBhcmd1bWVudHMubGVuZ3RoID8gKHN0YXJ0QW5nbGUgPSB0eXBlb2YgXyA9PT0gXCJmdW5jdGlvblwiID8gXyA6IGNvbnN0YW50KCtfKSwgYXJjKSA6IHN0YXJ0QW5nbGU7XG4gIH07XG5cbiAgYXJjLmVuZEFuZ2xlID0gZnVuY3Rpb24oXykge1xuICAgIHJldHVybiBhcmd1bWVudHMubGVuZ3RoID8gKGVuZEFuZ2xlID0gdHlwZW9mIF8gPT09IFwiZnVuY3Rpb25cIiA/IF8gOiBjb25zdGFudCgrXyksIGFyYykgOiBlbmRBbmdsZTtcbiAgfTtcblxuICBhcmMucGFkQW5nbGUgPSBmdW5jdGlvbihfKSB7XG4gICAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPyAocGFkQW5nbGUgPSB0eXBlb2YgXyA9PT0gXCJmdW5jdGlvblwiID8gXyA6IGNvbnN0YW50KCtfKSwgYXJjKSA6IHBhZEFuZ2xlO1xuICB9O1xuXG4gIGFyYy5jb250ZXh0ID0gZnVuY3Rpb24oXykge1xuICAgIHJldHVybiBhcmd1bWVudHMubGVuZ3RoID8gKChjb250ZXh0ID0gXyA9PSBudWxsID8gbnVsbCA6IF8pLCBhcmMpIDogY29udGV4dDtcbiAgfTtcblxuICByZXR1cm4gYXJjO1xufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvZDMtc2hhcGUvc3JjL2FyYy5qc1xuLy8gbW9kdWxlIGlkID0gNjAzXG4vLyBtb2R1bGUgY2h1bmtzID0gNSIsInZhciBwaSA9IE1hdGguUEksXG4gICAgdGF1ID0gMiAqIHBpLFxuICAgIGVwc2lsb24gPSAxZS02LFxuICAgIHRhdUVwc2lsb24gPSB0YXUgLSBlcHNpbG9uO1xuXG5mdW5jdGlvbiBQYXRoKCkge1xuICB0aGlzLl94MCA9IHRoaXMuX3kwID0gLy8gc3RhcnQgb2YgY3VycmVudCBzdWJwYXRoXG4gIHRoaXMuX3gxID0gdGhpcy5feTEgPSBudWxsOyAvLyBlbmQgb2YgY3VycmVudCBzdWJwYXRoXG4gIHRoaXMuXyA9IFwiXCI7XG59XG5cbmZ1bmN0aW9uIHBhdGgoKSB7XG4gIHJldHVybiBuZXcgUGF0aDtcbn1cblxuUGF0aC5wcm90b3R5cGUgPSBwYXRoLnByb3RvdHlwZSA9IHtcbiAgY29uc3RydWN0b3I6IFBhdGgsXG4gIG1vdmVUbzogZnVuY3Rpb24oeCwgeSkge1xuICAgIHRoaXMuXyArPSBcIk1cIiArICh0aGlzLl94MCA9IHRoaXMuX3gxID0gK3gpICsgXCIsXCIgKyAodGhpcy5feTAgPSB0aGlzLl95MSA9ICt5KTtcbiAgfSxcbiAgY2xvc2VQYXRoOiBmdW5jdGlvbigpIHtcbiAgICBpZiAodGhpcy5feDEgIT09IG51bGwpIHtcbiAgICAgIHRoaXMuX3gxID0gdGhpcy5feDAsIHRoaXMuX3kxID0gdGhpcy5feTA7XG4gICAgICB0aGlzLl8gKz0gXCJaXCI7XG4gICAgfVxuICB9LFxuICBsaW5lVG86IGZ1bmN0aW9uKHgsIHkpIHtcbiAgICB0aGlzLl8gKz0gXCJMXCIgKyAodGhpcy5feDEgPSAreCkgKyBcIixcIiArICh0aGlzLl95MSA9ICt5KTtcbiAgfSxcbiAgcXVhZHJhdGljQ3VydmVUbzogZnVuY3Rpb24oeDEsIHkxLCB4LCB5KSB7XG4gICAgdGhpcy5fICs9IFwiUVwiICsgKCt4MSkgKyBcIixcIiArICgreTEpICsgXCIsXCIgKyAodGhpcy5feDEgPSAreCkgKyBcIixcIiArICh0aGlzLl95MSA9ICt5KTtcbiAgfSxcbiAgYmV6aWVyQ3VydmVUbzogZnVuY3Rpb24oeDEsIHkxLCB4MiwgeTIsIHgsIHkpIHtcbiAgICB0aGlzLl8gKz0gXCJDXCIgKyAoK3gxKSArIFwiLFwiICsgKCt5MSkgKyBcIixcIiArICgreDIpICsgXCIsXCIgKyAoK3kyKSArIFwiLFwiICsgKHRoaXMuX3gxID0gK3gpICsgXCIsXCIgKyAodGhpcy5feTEgPSAreSk7XG4gIH0sXG4gIGFyY1RvOiBmdW5jdGlvbih4MSwgeTEsIHgyLCB5Miwgcikge1xuICAgIHgxID0gK3gxLCB5MSA9ICt5MSwgeDIgPSAreDIsIHkyID0gK3kyLCByID0gK3I7XG4gICAgdmFyIHgwID0gdGhpcy5feDEsXG4gICAgICAgIHkwID0gdGhpcy5feTEsXG4gICAgICAgIHgyMSA9IHgyIC0geDEsXG4gICAgICAgIHkyMSA9IHkyIC0geTEsXG4gICAgICAgIHgwMSA9IHgwIC0geDEsXG4gICAgICAgIHkwMSA9IHkwIC0geTEsXG4gICAgICAgIGwwMV8yID0geDAxICogeDAxICsgeTAxICogeTAxO1xuXG4gICAgLy8gSXMgdGhlIHJhZGl1cyBuZWdhdGl2ZT8gRXJyb3IuXG4gICAgaWYgKHIgPCAwKSB0aHJvdyBuZXcgRXJyb3IoXCJuZWdhdGl2ZSByYWRpdXM6IFwiICsgcik7XG5cbiAgICAvLyBJcyB0aGlzIHBhdGggZW1wdHk/IE1vdmUgdG8gKHgxLHkxKS5cbiAgICBpZiAodGhpcy5feDEgPT09IG51bGwpIHtcbiAgICAgIHRoaXMuXyArPSBcIk1cIiArICh0aGlzLl94MSA9IHgxKSArIFwiLFwiICsgKHRoaXMuX3kxID0geTEpO1xuICAgIH1cblxuICAgIC8vIE9yLCBpcyAoeDEseTEpIGNvaW5jaWRlbnQgd2l0aCAoeDAseTApPyBEbyBub3RoaW5nLlxuICAgIGVsc2UgaWYgKCEobDAxXzIgPiBlcHNpbG9uKSkge31cblxuICAgIC8vIE9yLCBhcmUgKHgwLHkwKSwgKHgxLHkxKSBhbmQgKHgyLHkyKSBjb2xsaW5lYXI/XG4gICAgLy8gRXF1aXZhbGVudGx5LCBpcyAoeDEseTEpIGNvaW5jaWRlbnQgd2l0aCAoeDIseTIpP1xuICAgIC8vIE9yLCBpcyB0aGUgcmFkaXVzIHplcm8/IExpbmUgdG8gKHgxLHkxKS5cbiAgICBlbHNlIGlmICghKE1hdGguYWJzKHkwMSAqIHgyMSAtIHkyMSAqIHgwMSkgPiBlcHNpbG9uKSB8fCAhcikge1xuICAgICAgdGhpcy5fICs9IFwiTFwiICsgKHRoaXMuX3gxID0geDEpICsgXCIsXCIgKyAodGhpcy5feTEgPSB5MSk7XG4gICAgfVxuXG4gICAgLy8gT3RoZXJ3aXNlLCBkcmF3IGFuIGFyYyFcbiAgICBlbHNlIHtcbiAgICAgIHZhciB4MjAgPSB4MiAtIHgwLFxuICAgICAgICAgIHkyMCA9IHkyIC0geTAsXG4gICAgICAgICAgbDIxXzIgPSB4MjEgKiB4MjEgKyB5MjEgKiB5MjEsXG4gICAgICAgICAgbDIwXzIgPSB4MjAgKiB4MjAgKyB5MjAgKiB5MjAsXG4gICAgICAgICAgbDIxID0gTWF0aC5zcXJ0KGwyMV8yKSxcbiAgICAgICAgICBsMDEgPSBNYXRoLnNxcnQobDAxXzIpLFxuICAgICAgICAgIGwgPSByICogTWF0aC50YW4oKHBpIC0gTWF0aC5hY29zKChsMjFfMiArIGwwMV8yIC0gbDIwXzIpIC8gKDIgKiBsMjEgKiBsMDEpKSkgLyAyKSxcbiAgICAgICAgICB0MDEgPSBsIC8gbDAxLFxuICAgICAgICAgIHQyMSA9IGwgLyBsMjE7XG5cbiAgICAgIC8vIElmIHRoZSBzdGFydCB0YW5nZW50IGlzIG5vdCBjb2luY2lkZW50IHdpdGggKHgwLHkwKSwgbGluZSB0by5cbiAgICAgIGlmIChNYXRoLmFicyh0MDEgLSAxKSA+IGVwc2lsb24pIHtcbiAgICAgICAgdGhpcy5fICs9IFwiTFwiICsgKHgxICsgdDAxICogeDAxKSArIFwiLFwiICsgKHkxICsgdDAxICogeTAxKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5fICs9IFwiQVwiICsgciArIFwiLFwiICsgciArIFwiLDAsMCxcIiArICgrKHkwMSAqIHgyMCA+IHgwMSAqIHkyMCkpICsgXCIsXCIgKyAodGhpcy5feDEgPSB4MSArIHQyMSAqIHgyMSkgKyBcIixcIiArICh0aGlzLl95MSA9IHkxICsgdDIxICogeTIxKTtcbiAgICB9XG4gIH0sXG4gIGFyYzogZnVuY3Rpb24oeCwgeSwgciwgYTAsIGExLCBjY3cpIHtcbiAgICB4ID0gK3gsIHkgPSAreSwgciA9ICtyO1xuICAgIHZhciBkeCA9IHIgKiBNYXRoLmNvcyhhMCksXG4gICAgICAgIGR5ID0gciAqIE1hdGguc2luKGEwKSxcbiAgICAgICAgeDAgPSB4ICsgZHgsXG4gICAgICAgIHkwID0geSArIGR5LFxuICAgICAgICBjdyA9IDEgXiBjY3csXG4gICAgICAgIGRhID0gY2N3ID8gYTAgLSBhMSA6IGExIC0gYTA7XG5cbiAgICAvLyBJcyB0aGUgcmFkaXVzIG5lZ2F0aXZlPyBFcnJvci5cbiAgICBpZiAociA8IDApIHRocm93IG5ldyBFcnJvcihcIm5lZ2F0aXZlIHJhZGl1czogXCIgKyByKTtcblxuICAgIC8vIElzIHRoaXMgcGF0aCBlbXB0eT8gTW92ZSB0byAoeDAseTApLlxuICAgIGlmICh0aGlzLl94MSA9PT0gbnVsbCkge1xuICAgICAgdGhpcy5fICs9IFwiTVwiICsgeDAgKyBcIixcIiArIHkwO1xuICAgIH1cblxuICAgIC8vIE9yLCBpcyAoeDAseTApIG5vdCBjb2luY2lkZW50IHdpdGggdGhlIHByZXZpb3VzIHBvaW50PyBMaW5lIHRvICh4MCx5MCkuXG4gICAgZWxzZSBpZiAoTWF0aC5hYnModGhpcy5feDEgLSB4MCkgPiBlcHNpbG9uIHx8IE1hdGguYWJzKHRoaXMuX3kxIC0geTApID4gZXBzaWxvbikge1xuICAgICAgdGhpcy5fICs9IFwiTFwiICsgeDAgKyBcIixcIiArIHkwO1xuICAgIH1cblxuICAgIC8vIElzIHRoaXMgYXJjIGVtcHR5PyBXZeKAmXJlIGRvbmUuXG4gICAgaWYgKCFyKSByZXR1cm47XG5cbiAgICAvLyBEb2VzIHRoZSBhbmdsZSBnbyB0aGUgd3Jvbmcgd2F5PyBGbGlwIHRoZSBkaXJlY3Rpb24uXG4gICAgaWYgKGRhIDwgMCkgZGEgPSBkYSAlIHRhdSArIHRhdTtcblxuICAgIC8vIElzIHRoaXMgYSBjb21wbGV0ZSBjaXJjbGU/IERyYXcgdHdvIGFyY3MgdG8gY29tcGxldGUgdGhlIGNpcmNsZS5cbiAgICBpZiAoZGEgPiB0YXVFcHNpbG9uKSB7XG4gICAgICB0aGlzLl8gKz0gXCJBXCIgKyByICsgXCIsXCIgKyByICsgXCIsMCwxLFwiICsgY3cgKyBcIixcIiArICh4IC0gZHgpICsgXCIsXCIgKyAoeSAtIGR5KSArIFwiQVwiICsgciArIFwiLFwiICsgciArIFwiLDAsMSxcIiArIGN3ICsgXCIsXCIgKyAodGhpcy5feDEgPSB4MCkgKyBcIixcIiArICh0aGlzLl95MSA9IHkwKTtcbiAgICB9XG5cbiAgICAvLyBJcyB0aGlzIGFyYyBub24tZW1wdHk/IERyYXcgYW4gYXJjIVxuICAgIGVsc2UgaWYgKGRhID4gZXBzaWxvbikge1xuICAgICAgdGhpcy5fICs9IFwiQVwiICsgciArIFwiLFwiICsgciArIFwiLDAsXCIgKyAoKyhkYSA+PSBwaSkpICsgXCIsXCIgKyBjdyArIFwiLFwiICsgKHRoaXMuX3gxID0geCArIHIgKiBNYXRoLmNvcyhhMSkpICsgXCIsXCIgKyAodGhpcy5feTEgPSB5ICsgciAqIE1hdGguc2luKGExKSk7XG4gICAgfVxuICB9LFxuICByZWN0OiBmdW5jdGlvbih4LCB5LCB3LCBoKSB7XG4gICAgdGhpcy5fICs9IFwiTVwiICsgKHRoaXMuX3gwID0gdGhpcy5feDEgPSAreCkgKyBcIixcIiArICh0aGlzLl95MCA9IHRoaXMuX3kxID0gK3kpICsgXCJoXCIgKyAoK3cpICsgXCJ2XCIgKyAoK2gpICsgXCJoXCIgKyAoLXcpICsgXCJaXCI7XG4gIH0sXG4gIHRvU3RyaW5nOiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5fO1xuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBwYXRoO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvZDMtcGF0aC9zcmMvcGF0aC5qc1xuLy8gbW9kdWxlIGlkID0gNjA0XG4vLyBtb2R1bGUgY2h1bmtzID0gNSIsImltcG9ydCBjb25zdGFudCBmcm9tIFwiLi9jb25zdGFudFwiO1xuaW1wb3J0IGRlc2NlbmRpbmcgZnJvbSBcIi4vZGVzY2VuZGluZ1wiO1xuaW1wb3J0IGlkZW50aXR5IGZyb20gXCIuL2lkZW50aXR5XCI7XG5pbXBvcnQge3RhdX0gZnJvbSBcIi4vbWF0aFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbigpIHtcbiAgdmFyIHZhbHVlID0gaWRlbnRpdHksXG4gICAgICBzb3J0VmFsdWVzID0gZGVzY2VuZGluZyxcbiAgICAgIHNvcnQgPSBudWxsLFxuICAgICAgc3RhcnRBbmdsZSA9IGNvbnN0YW50KDApLFxuICAgICAgZW5kQW5nbGUgPSBjb25zdGFudCh0YXUpLFxuICAgICAgcGFkQW5nbGUgPSBjb25zdGFudCgwKTtcblxuICBmdW5jdGlvbiBwaWUoZGF0YSkge1xuICAgIHZhciBpLFxuICAgICAgICBuID0gZGF0YS5sZW5ndGgsXG4gICAgICAgIGosXG4gICAgICAgIGssXG4gICAgICAgIHN1bSA9IDAsXG4gICAgICAgIGluZGV4ID0gbmV3IEFycmF5KG4pLFxuICAgICAgICBhcmNzID0gbmV3IEFycmF5KG4pLFxuICAgICAgICBhMCA9ICtzdGFydEFuZ2xlLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyksXG4gICAgICAgIGRhID0gTWF0aC5taW4odGF1LCBNYXRoLm1heCgtdGF1LCBlbmRBbmdsZS5hcHBseSh0aGlzLCBhcmd1bWVudHMpIC0gYTApKSxcbiAgICAgICAgYTEsXG4gICAgICAgIHAgPSBNYXRoLm1pbihNYXRoLmFicyhkYSkgLyBuLCBwYWRBbmdsZS5hcHBseSh0aGlzLCBhcmd1bWVudHMpKSxcbiAgICAgICAgcGEgPSBwICogKGRhIDwgMCA/IC0xIDogMSksXG4gICAgICAgIHY7XG5cbiAgICBmb3IgKGkgPSAwOyBpIDwgbjsgKytpKSB7XG4gICAgICBpZiAoKHYgPSBhcmNzW2luZGV4W2ldID0gaV0gPSArdmFsdWUoZGF0YVtpXSwgaSwgZGF0YSkpID4gMCkge1xuICAgICAgICBzdW0gKz0gdjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBPcHRpb25hbGx5IHNvcnQgdGhlIGFyY3MgYnkgcHJldmlvdXNseS1jb21wdXRlZCB2YWx1ZXMgb3IgYnkgZGF0YS5cbiAgICBpZiAoc29ydFZhbHVlcyAhPSBudWxsKSBpbmRleC5zb3J0KGZ1bmN0aW9uKGksIGopIHsgcmV0dXJuIHNvcnRWYWx1ZXMoYXJjc1tpXSwgYXJjc1tqXSk7IH0pO1xuICAgIGVsc2UgaWYgKHNvcnQgIT0gbnVsbCkgaW5kZXguc29ydChmdW5jdGlvbihpLCBqKSB7IHJldHVybiBzb3J0KGRhdGFbaV0sIGRhdGFbal0pOyB9KTtcblxuICAgIC8vIENvbXB1dGUgdGhlIGFyY3MhIFRoZXkgYXJlIHN0b3JlZCBpbiB0aGUgb3JpZ2luYWwgZGF0YSdzIG9yZGVyLlxuICAgIGZvciAoaSA9IDAsIGsgPSBzdW0gPyAoZGEgLSBuICogcGEpIC8gc3VtIDogMDsgaSA8IG47ICsraSwgYTAgPSBhMSkge1xuICAgICAgaiA9IGluZGV4W2ldLCB2ID0gYXJjc1tqXSwgYTEgPSBhMCArICh2ID4gMCA/IHYgKiBrIDogMCkgKyBwYSwgYXJjc1tqXSA9IHtcbiAgICAgICAgZGF0YTogZGF0YVtqXSxcbiAgICAgICAgaW5kZXg6IGksXG4gICAgICAgIHZhbHVlOiB2LFxuICAgICAgICBzdGFydEFuZ2xlOiBhMCxcbiAgICAgICAgZW5kQW5nbGU6IGExLFxuICAgICAgICBwYWRBbmdsZTogcFxuICAgICAgfTtcbiAgICB9XG5cbiAgICByZXR1cm4gYXJjcztcbiAgfVxuXG4gIHBpZS52YWx1ZSA9IGZ1bmN0aW9uKF8pIHtcbiAgICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA/ICh2YWx1ZSA9IHR5cGVvZiBfID09PSBcImZ1bmN0aW9uXCIgPyBfIDogY29uc3RhbnQoK18pLCBwaWUpIDogdmFsdWU7XG4gIH07XG5cbiAgcGllLnNvcnRWYWx1ZXMgPSBmdW5jdGlvbihfKSB7XG4gICAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPyAoc29ydFZhbHVlcyA9IF8sIHNvcnQgPSBudWxsLCBwaWUpIDogc29ydFZhbHVlcztcbiAgfTtcblxuICBwaWUuc29ydCA9IGZ1bmN0aW9uKF8pIHtcbiAgICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA/IChzb3J0ID0gXywgc29ydFZhbHVlcyA9IG51bGwsIHBpZSkgOiBzb3J0O1xuICB9O1xuXG4gIHBpZS5zdGFydEFuZ2xlID0gZnVuY3Rpb24oXykge1xuICAgIHJldHVybiBhcmd1bWVudHMubGVuZ3RoID8gKHN0YXJ0QW5nbGUgPSB0eXBlb2YgXyA9PT0gXCJmdW5jdGlvblwiID8gXyA6IGNvbnN0YW50KCtfKSwgcGllKSA6IHN0YXJ0QW5nbGU7XG4gIH07XG5cbiAgcGllLmVuZEFuZ2xlID0gZnVuY3Rpb24oXykge1xuICAgIHJldHVybiBhcmd1bWVudHMubGVuZ3RoID8gKGVuZEFuZ2xlID0gdHlwZW9mIF8gPT09IFwiZnVuY3Rpb25cIiA/IF8gOiBjb25zdGFudCgrXyksIHBpZSkgOiBlbmRBbmdsZTtcbiAgfTtcblxuICBwaWUucGFkQW5nbGUgPSBmdW5jdGlvbihfKSB7XG4gICAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPyAocGFkQW5nbGUgPSB0eXBlb2YgXyA9PT0gXCJmdW5jdGlvblwiID8gXyA6IGNvbnN0YW50KCtfKSwgcGllKSA6IHBhZEFuZ2xlO1xuICB9O1xuXG4gIHJldHVybiBwaWU7XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9kMy1zaGFwZS9zcmMvcGllLmpzXG4vLyBtb2R1bGUgaWQgPSA2MDVcbi8vIG1vZHVsZSBjaHVua3MgPSA1IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oYSwgYikge1xuICByZXR1cm4gYiA8IGEgPyAtMSA6IGIgPiBhID8gMSA6IGIgPj0gYSA/IDAgOiBOYU47XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9kMy1zaGFwZS9zcmMvZGVzY2VuZGluZy5qc1xuLy8gbW9kdWxlIGlkID0gNjA2XG4vLyBtb2R1bGUgY2h1bmtzID0gNSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKGQpIHtcbiAgcmV0dXJuIGQ7XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9kMy1zaGFwZS9zcmMvaWRlbnRpdHkuanNcbi8vIG1vZHVsZSBpZCA9IDYwN1xuLy8gbW9kdWxlIGNodW5rcyA9IDUiLCJpbXBvcnQgY3VydmVSYWRpYWwsIHtjdXJ2ZVJhZGlhbExpbmVhcn0gZnJvbSBcIi4vY3VydmUvcmFkaWFsXCI7XG5pbXBvcnQgYXJlYSBmcm9tIFwiLi9hcmVhXCI7XG5pbXBvcnQge2xpbmVSYWRpYWx9IGZyb20gXCIuL2xpbmVSYWRpYWxcIlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbigpIHtcbiAgdmFyIGEgPSBhcmVhKCkuY3VydmUoY3VydmVSYWRpYWxMaW5lYXIpLFxuICAgICAgYyA9IGEuY3VydmUsXG4gICAgICB4MCA9IGEubGluZVgwLFxuICAgICAgeDEgPSBhLmxpbmVYMSxcbiAgICAgIHkwID0gYS5saW5lWTAsXG4gICAgICB5MSA9IGEubGluZVkxO1xuXG4gIGEuYW5nbGUgPSBhLngsIGRlbGV0ZSBhLng7XG4gIGEuc3RhcnRBbmdsZSA9IGEueDAsIGRlbGV0ZSBhLngwO1xuICBhLmVuZEFuZ2xlID0gYS54MSwgZGVsZXRlIGEueDE7XG4gIGEucmFkaXVzID0gYS55LCBkZWxldGUgYS55O1xuICBhLmlubmVyUmFkaXVzID0gYS55MCwgZGVsZXRlIGEueTA7XG4gIGEub3V0ZXJSYWRpdXMgPSBhLnkxLCBkZWxldGUgYS55MTtcbiAgYS5saW5lU3RhcnRBbmdsZSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gbGluZVJhZGlhbCh4MCgpKTsgfSwgZGVsZXRlIGEubGluZVgwO1xuICBhLmxpbmVFbmRBbmdsZSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gbGluZVJhZGlhbCh4MSgpKTsgfSwgZGVsZXRlIGEubGluZVgxO1xuICBhLmxpbmVJbm5lclJhZGl1cyA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gbGluZVJhZGlhbCh5MCgpKTsgfSwgZGVsZXRlIGEubGluZVkwO1xuICBhLmxpbmVPdXRlclJhZGl1cyA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gbGluZVJhZGlhbCh5MSgpKTsgfSwgZGVsZXRlIGEubGluZVkxO1xuXG4gIGEuY3VydmUgPSBmdW5jdGlvbihfKSB7XG4gICAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPyBjKGN1cnZlUmFkaWFsKF8pKSA6IGMoKS5fY3VydmU7XG4gIH07XG5cbiAgcmV0dXJuIGE7XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9kMy1zaGFwZS9zcmMvYXJlYVJhZGlhbC5qc1xuLy8gbW9kdWxlIGlkID0gNjA4XG4vLyBtb2R1bGUgY2h1bmtzID0gNSIsImltcG9ydCB7cGF0aH0gZnJvbSBcImQzLXBhdGhcIjtcbmltcG9ydCB7c2xpY2V9IGZyb20gXCIuLi9hcnJheVwiO1xuaW1wb3J0IGNvbnN0YW50IGZyb20gXCIuLi9jb25zdGFudFwiO1xuaW1wb3J0IHt4IGFzIHBvaW50WCwgeSBhcyBwb2ludFl9IGZyb20gXCIuLi9wb2ludFwiO1xuaW1wb3J0IHBvaW50UmFkaWFsIGZyb20gXCIuLi9wb2ludFJhZGlhbFwiO1xuXG5mdW5jdGlvbiBsaW5rU291cmNlKGQpIHtcbiAgcmV0dXJuIGQuc291cmNlO1xufVxuXG5mdW5jdGlvbiBsaW5rVGFyZ2V0KGQpIHtcbiAgcmV0dXJuIGQudGFyZ2V0O1xufVxuXG5mdW5jdGlvbiBsaW5rKGN1cnZlKSB7XG4gIHZhciBzb3VyY2UgPSBsaW5rU291cmNlLFxuICAgICAgdGFyZ2V0ID0gbGlua1RhcmdldCxcbiAgICAgIHggPSBwb2ludFgsXG4gICAgICB5ID0gcG9pbnRZLFxuICAgICAgY29udGV4dCA9IG51bGw7XG5cbiAgZnVuY3Rpb24gbGluaygpIHtcbiAgICB2YXIgYnVmZmVyLCBhcmd2ID0gc2xpY2UuY2FsbChhcmd1bWVudHMpLCBzID0gc291cmNlLmFwcGx5KHRoaXMsIGFyZ3YpLCB0ID0gdGFyZ2V0LmFwcGx5KHRoaXMsIGFyZ3YpO1xuICAgIGlmICghY29udGV4dCkgY29udGV4dCA9IGJ1ZmZlciA9IHBhdGgoKTtcbiAgICBjdXJ2ZShjb250ZXh0LCAreC5hcHBseSh0aGlzLCAoYXJndlswXSA9IHMsIGFyZ3YpKSwgK3kuYXBwbHkodGhpcywgYXJndiksICt4LmFwcGx5KHRoaXMsIChhcmd2WzBdID0gdCwgYXJndikpLCAreS5hcHBseSh0aGlzLCBhcmd2KSk7XG4gICAgaWYgKGJ1ZmZlcikgcmV0dXJuIGNvbnRleHQgPSBudWxsLCBidWZmZXIgKyBcIlwiIHx8IG51bGw7XG4gIH1cblxuICBsaW5rLnNvdXJjZSA9IGZ1bmN0aW9uKF8pIHtcbiAgICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA/IChzb3VyY2UgPSBfLCBsaW5rKSA6IHNvdXJjZTtcbiAgfTtcblxuICBsaW5rLnRhcmdldCA9IGZ1bmN0aW9uKF8pIHtcbiAgICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA/ICh0YXJnZXQgPSBfLCBsaW5rKSA6IHRhcmdldDtcbiAgfTtcblxuICBsaW5rLnggPSBmdW5jdGlvbihfKSB7XG4gICAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPyAoeCA9IHR5cGVvZiBfID09PSBcImZ1bmN0aW9uXCIgPyBfIDogY29uc3RhbnQoK18pLCBsaW5rKSA6IHg7XG4gIH07XG5cbiAgbGluay55ID0gZnVuY3Rpb24oXykge1xuICAgIHJldHVybiBhcmd1bWVudHMubGVuZ3RoID8gKHkgPSB0eXBlb2YgXyA9PT0gXCJmdW5jdGlvblwiID8gXyA6IGNvbnN0YW50KCtfKSwgbGluaykgOiB5O1xuICB9O1xuXG4gIGxpbmsuY29udGV4dCA9IGZ1bmN0aW9uKF8pIHtcbiAgICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA/ICgoY29udGV4dCA9IF8gPT0gbnVsbCA/IG51bGwgOiBfKSwgbGluaykgOiBjb250ZXh0O1xuICB9O1xuXG4gIHJldHVybiBsaW5rO1xufVxuXG5mdW5jdGlvbiBjdXJ2ZUhvcml6b250YWwoY29udGV4dCwgeDAsIHkwLCB4MSwgeTEpIHtcbiAgY29udGV4dC5tb3ZlVG8oeDAsIHkwKTtcbiAgY29udGV4dC5iZXppZXJDdXJ2ZVRvKHgwID0gKHgwICsgeDEpIC8gMiwgeTAsIHgwLCB5MSwgeDEsIHkxKTtcbn1cblxuZnVuY3Rpb24gY3VydmVWZXJ0aWNhbChjb250ZXh0LCB4MCwgeTAsIHgxLCB5MSkge1xuICBjb250ZXh0Lm1vdmVUbyh4MCwgeTApO1xuICBjb250ZXh0LmJlemllckN1cnZlVG8oeDAsIHkwID0gKHkwICsgeTEpIC8gMiwgeDEsIHkwLCB4MSwgeTEpO1xufVxuXG5mdW5jdGlvbiBjdXJ2ZVJhZGlhbChjb250ZXh0LCB4MCwgeTAsIHgxLCB5MSkge1xuICB2YXIgcDAgPSBwb2ludFJhZGlhbCh4MCwgeTApLFxuICAgICAgcDEgPSBwb2ludFJhZGlhbCh4MCwgeTAgPSAoeTAgKyB5MSkgLyAyKSxcbiAgICAgIHAyID0gcG9pbnRSYWRpYWwoeDEsIHkwKSxcbiAgICAgIHAzID0gcG9pbnRSYWRpYWwoeDEsIHkxKTtcbiAgY29udGV4dC5tb3ZlVG8ocDBbMF0sIHAwWzFdKTtcbiAgY29udGV4dC5iZXppZXJDdXJ2ZVRvKHAxWzBdLCBwMVsxXSwgcDJbMF0sIHAyWzFdLCBwM1swXSwgcDNbMV0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbGlua0hvcml6b250YWwoKSB7XG4gIHJldHVybiBsaW5rKGN1cnZlSG9yaXpvbnRhbCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsaW5rVmVydGljYWwoKSB7XG4gIHJldHVybiBsaW5rKGN1cnZlVmVydGljYWwpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbGlua1JhZGlhbCgpIHtcbiAgdmFyIGwgPSBsaW5rKGN1cnZlUmFkaWFsKTtcbiAgbC5hbmdsZSA9IGwueCwgZGVsZXRlIGwueDtcbiAgbC5yYWRpdXMgPSBsLnksIGRlbGV0ZSBsLnk7XG4gIHJldHVybiBsO1xufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvZDMtc2hhcGUvc3JjL2xpbmsvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDYwOVxuLy8gbW9kdWxlIGNodW5rcyA9IDUiLCJpbXBvcnQge3BhdGh9IGZyb20gXCJkMy1wYXRoXCI7XG5pbXBvcnQgY2lyY2xlIGZyb20gXCIuL3N5bWJvbC9jaXJjbGVcIjtcbmltcG9ydCBjcm9zcyBmcm9tIFwiLi9zeW1ib2wvY3Jvc3NcIjtcbmltcG9ydCBkaWFtb25kIGZyb20gXCIuL3N5bWJvbC9kaWFtb25kXCI7XG5pbXBvcnQgc3RhciBmcm9tIFwiLi9zeW1ib2wvc3RhclwiO1xuaW1wb3J0IHNxdWFyZSBmcm9tIFwiLi9zeW1ib2wvc3F1YXJlXCI7XG5pbXBvcnQgdHJpYW5nbGUgZnJvbSBcIi4vc3ltYm9sL3RyaWFuZ2xlXCI7XG5pbXBvcnQgd3llIGZyb20gXCIuL3N5bWJvbC93eWVcIjtcbmltcG9ydCBjb25zdGFudCBmcm9tIFwiLi9jb25zdGFudFwiO1xuXG5leHBvcnQgdmFyIHN5bWJvbHMgPSBbXG4gIGNpcmNsZSxcbiAgY3Jvc3MsXG4gIGRpYW1vbmQsXG4gIHNxdWFyZSxcbiAgc3RhcixcbiAgdHJpYW5nbGUsXG4gIHd5ZVxuXTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oKSB7XG4gIHZhciB0eXBlID0gY29uc3RhbnQoY2lyY2xlKSxcbiAgICAgIHNpemUgPSBjb25zdGFudCg2NCksXG4gICAgICBjb250ZXh0ID0gbnVsbDtcblxuICBmdW5jdGlvbiBzeW1ib2woKSB7XG4gICAgdmFyIGJ1ZmZlcjtcbiAgICBpZiAoIWNvbnRleHQpIGNvbnRleHQgPSBidWZmZXIgPSBwYXRoKCk7XG4gICAgdHlwZS5hcHBseSh0aGlzLCBhcmd1bWVudHMpLmRyYXcoY29udGV4dCwgK3NpemUuYXBwbHkodGhpcywgYXJndW1lbnRzKSk7XG4gICAgaWYgKGJ1ZmZlcikgcmV0dXJuIGNvbnRleHQgPSBudWxsLCBidWZmZXIgKyBcIlwiIHx8IG51bGw7XG4gIH1cblxuICBzeW1ib2wudHlwZSA9IGZ1bmN0aW9uKF8pIHtcbiAgICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA/ICh0eXBlID0gdHlwZW9mIF8gPT09IFwiZnVuY3Rpb25cIiA/IF8gOiBjb25zdGFudChfKSwgc3ltYm9sKSA6IHR5cGU7XG4gIH07XG5cbiAgc3ltYm9sLnNpemUgPSBmdW5jdGlvbihfKSB7XG4gICAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPyAoc2l6ZSA9IHR5cGVvZiBfID09PSBcImZ1bmN0aW9uXCIgPyBfIDogY29uc3RhbnQoK18pLCBzeW1ib2wpIDogc2l6ZTtcbiAgfTtcblxuICBzeW1ib2wuY29udGV4dCA9IGZ1bmN0aW9uKF8pIHtcbiAgICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA/IChjb250ZXh0ID0gXyA9PSBudWxsID8gbnVsbCA6IF8sIHN5bWJvbCkgOiBjb250ZXh0O1xuICB9O1xuXG4gIHJldHVybiBzeW1ib2w7XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9kMy1zaGFwZS9zcmMvc3ltYm9sLmpzXG4vLyBtb2R1bGUgaWQgPSA2MTBcbi8vIG1vZHVsZSBjaHVua3MgPSA1IiwiaW1wb3J0IG5vb3AgZnJvbSBcIi4uL25vb3BcIjtcbmltcG9ydCB7cG9pbnR9IGZyb20gXCIuL2Jhc2lzXCI7XG5cbmZ1bmN0aW9uIEJhc2lzQ2xvc2VkKGNvbnRleHQpIHtcbiAgdGhpcy5fY29udGV4dCA9IGNvbnRleHQ7XG59XG5cbkJhc2lzQ2xvc2VkLnByb3RvdHlwZSA9IHtcbiAgYXJlYVN0YXJ0OiBub29wLFxuICBhcmVhRW5kOiBub29wLFxuICBsaW5lU3RhcnQ6IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuX3gwID0gdGhpcy5feDEgPSB0aGlzLl94MiA9IHRoaXMuX3gzID0gdGhpcy5feDQgPVxuICAgIHRoaXMuX3kwID0gdGhpcy5feTEgPSB0aGlzLl95MiA9IHRoaXMuX3kzID0gdGhpcy5feTQgPSBOYU47XG4gICAgdGhpcy5fcG9pbnQgPSAwO1xuICB9LFxuICBsaW5lRW5kOiBmdW5jdGlvbigpIHtcbiAgICBzd2l0Y2ggKHRoaXMuX3BvaW50KSB7XG4gICAgICBjYXNlIDE6IHtcbiAgICAgICAgdGhpcy5fY29udGV4dC5tb3ZlVG8odGhpcy5feDIsIHRoaXMuX3kyKTtcbiAgICAgICAgdGhpcy5fY29udGV4dC5jbG9zZVBhdGgoKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBjYXNlIDI6IHtcbiAgICAgICAgdGhpcy5fY29udGV4dC5tb3ZlVG8oKHRoaXMuX3gyICsgMiAqIHRoaXMuX3gzKSAvIDMsICh0aGlzLl95MiArIDIgKiB0aGlzLl95MykgLyAzKTtcbiAgICAgICAgdGhpcy5fY29udGV4dC5saW5lVG8oKHRoaXMuX3gzICsgMiAqIHRoaXMuX3gyKSAvIDMsICh0aGlzLl95MyArIDIgKiB0aGlzLl95MikgLyAzKTtcbiAgICAgICAgdGhpcy5fY29udGV4dC5jbG9zZVBhdGgoKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBjYXNlIDM6IHtcbiAgICAgICAgdGhpcy5wb2ludCh0aGlzLl94MiwgdGhpcy5feTIpO1xuICAgICAgICB0aGlzLnBvaW50KHRoaXMuX3gzLCB0aGlzLl95Myk7XG4gICAgICAgIHRoaXMucG9pbnQodGhpcy5feDQsIHRoaXMuX3k0KTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICB9LFxuICBwb2ludDogZnVuY3Rpb24oeCwgeSkge1xuICAgIHggPSAreCwgeSA9ICt5O1xuICAgIHN3aXRjaCAodGhpcy5fcG9pbnQpIHtcbiAgICAgIGNhc2UgMDogdGhpcy5fcG9pbnQgPSAxOyB0aGlzLl94MiA9IHgsIHRoaXMuX3kyID0geTsgYnJlYWs7XG4gICAgICBjYXNlIDE6IHRoaXMuX3BvaW50ID0gMjsgdGhpcy5feDMgPSB4LCB0aGlzLl95MyA9IHk7IGJyZWFrO1xuICAgICAgY2FzZSAyOiB0aGlzLl9wb2ludCA9IDM7IHRoaXMuX3g0ID0geCwgdGhpcy5feTQgPSB5OyB0aGlzLl9jb250ZXh0Lm1vdmVUbygodGhpcy5feDAgKyA0ICogdGhpcy5feDEgKyB4KSAvIDYsICh0aGlzLl95MCArIDQgKiB0aGlzLl95MSArIHkpIC8gNik7IGJyZWFrO1xuICAgICAgZGVmYXVsdDogcG9pbnQodGhpcywgeCwgeSk7IGJyZWFrO1xuICAgIH1cbiAgICB0aGlzLl94MCA9IHRoaXMuX3gxLCB0aGlzLl94MSA9IHg7XG4gICAgdGhpcy5feTAgPSB0aGlzLl95MSwgdGhpcy5feTEgPSB5O1xuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihjb250ZXh0KSB7XG4gIHJldHVybiBuZXcgQmFzaXNDbG9zZWQoY29udGV4dCk7XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9kMy1zaGFwZS9zcmMvY3VydmUvYmFzaXNDbG9zZWQuanNcbi8vIG1vZHVsZSBpZCA9IDYxMVxuLy8gbW9kdWxlIGNodW5rcyA9IDUiLCJpbXBvcnQge3BvaW50fSBmcm9tIFwiLi9iYXNpc1wiO1xuXG5mdW5jdGlvbiBCYXNpc09wZW4oY29udGV4dCkge1xuICB0aGlzLl9jb250ZXh0ID0gY29udGV4dDtcbn1cblxuQmFzaXNPcGVuLnByb3RvdHlwZSA9IHtcbiAgYXJlYVN0YXJ0OiBmdW5jdGlvbigpIHtcbiAgICB0aGlzLl9saW5lID0gMDtcbiAgfSxcbiAgYXJlYUVuZDogZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5fbGluZSA9IE5hTjtcbiAgfSxcbiAgbGluZVN0YXJ0OiBmdW5jdGlvbigpIHtcbiAgICB0aGlzLl94MCA9IHRoaXMuX3gxID1cbiAgICB0aGlzLl95MCA9IHRoaXMuX3kxID0gTmFOO1xuICAgIHRoaXMuX3BvaW50ID0gMDtcbiAgfSxcbiAgbGluZUVuZDogZnVuY3Rpb24oKSB7XG4gICAgaWYgKHRoaXMuX2xpbmUgfHwgKHRoaXMuX2xpbmUgIT09IDAgJiYgdGhpcy5fcG9pbnQgPT09IDMpKSB0aGlzLl9jb250ZXh0LmNsb3NlUGF0aCgpO1xuICAgIHRoaXMuX2xpbmUgPSAxIC0gdGhpcy5fbGluZTtcbiAgfSxcbiAgcG9pbnQ6IGZ1bmN0aW9uKHgsIHkpIHtcbiAgICB4ID0gK3gsIHkgPSAreTtcbiAgICBzd2l0Y2ggKHRoaXMuX3BvaW50KSB7XG4gICAgICBjYXNlIDA6IHRoaXMuX3BvaW50ID0gMTsgYnJlYWs7XG4gICAgICBjYXNlIDE6IHRoaXMuX3BvaW50ID0gMjsgYnJlYWs7XG4gICAgICBjYXNlIDI6IHRoaXMuX3BvaW50ID0gMzsgdmFyIHgwID0gKHRoaXMuX3gwICsgNCAqIHRoaXMuX3gxICsgeCkgLyA2LCB5MCA9ICh0aGlzLl95MCArIDQgKiB0aGlzLl95MSArIHkpIC8gNjsgdGhpcy5fbGluZSA/IHRoaXMuX2NvbnRleHQubGluZVRvKHgwLCB5MCkgOiB0aGlzLl9jb250ZXh0Lm1vdmVUbyh4MCwgeTApOyBicmVhaztcbiAgICAgIGNhc2UgMzogdGhpcy5fcG9pbnQgPSA0OyAvLyBwcm9jZWVkXG4gICAgICBkZWZhdWx0OiBwb2ludCh0aGlzLCB4LCB5KTsgYnJlYWs7XG4gICAgfVxuICAgIHRoaXMuX3gwID0gdGhpcy5feDEsIHRoaXMuX3gxID0geDtcbiAgICB0aGlzLl95MCA9IHRoaXMuX3kxLCB0aGlzLl95MSA9IHk7XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKGNvbnRleHQpIHtcbiAgcmV0dXJuIG5ldyBCYXNpc09wZW4oY29udGV4dCk7XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9kMy1zaGFwZS9zcmMvY3VydmUvYmFzaXNPcGVuLmpzXG4vLyBtb2R1bGUgaWQgPSA2MTJcbi8vIG1vZHVsZSBjaHVua3MgPSA1IiwiaW1wb3J0IHtCYXNpc30gZnJvbSBcIi4vYmFzaXNcIjtcblxuZnVuY3Rpb24gQnVuZGxlKGNvbnRleHQsIGJldGEpIHtcbiAgdGhpcy5fYmFzaXMgPSBuZXcgQmFzaXMoY29udGV4dCk7XG4gIHRoaXMuX2JldGEgPSBiZXRhO1xufVxuXG5CdW5kbGUucHJvdG90eXBlID0ge1xuICBsaW5lU3RhcnQ6IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuX3ggPSBbXTtcbiAgICB0aGlzLl95ID0gW107XG4gICAgdGhpcy5fYmFzaXMubGluZVN0YXJ0KCk7XG4gIH0sXG4gIGxpbmVFbmQ6IGZ1bmN0aW9uKCkge1xuICAgIHZhciB4ID0gdGhpcy5feCxcbiAgICAgICAgeSA9IHRoaXMuX3ksXG4gICAgICAgIGogPSB4Lmxlbmd0aCAtIDE7XG5cbiAgICBpZiAoaiA+IDApIHtcbiAgICAgIHZhciB4MCA9IHhbMF0sXG4gICAgICAgICAgeTAgPSB5WzBdLFxuICAgICAgICAgIGR4ID0geFtqXSAtIHgwLFxuICAgICAgICAgIGR5ID0geVtqXSAtIHkwLFxuICAgICAgICAgIGkgPSAtMSxcbiAgICAgICAgICB0O1xuXG4gICAgICB3aGlsZSAoKytpIDw9IGopIHtcbiAgICAgICAgdCA9IGkgLyBqO1xuICAgICAgICB0aGlzLl9iYXNpcy5wb2ludChcbiAgICAgICAgICB0aGlzLl9iZXRhICogeFtpXSArICgxIC0gdGhpcy5fYmV0YSkgKiAoeDAgKyB0ICogZHgpLFxuICAgICAgICAgIHRoaXMuX2JldGEgKiB5W2ldICsgKDEgLSB0aGlzLl9iZXRhKSAqICh5MCArIHQgKiBkeSlcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLl94ID0gdGhpcy5feSA9IG51bGw7XG4gICAgdGhpcy5fYmFzaXMubGluZUVuZCgpO1xuICB9LFxuICBwb2ludDogZnVuY3Rpb24oeCwgeSkge1xuICAgIHRoaXMuX3gucHVzaCgreCk7XG4gICAgdGhpcy5feS5wdXNoKCt5KTtcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgKGZ1bmN0aW9uIGN1c3RvbShiZXRhKSB7XG5cbiAgZnVuY3Rpb24gYnVuZGxlKGNvbnRleHQpIHtcbiAgICByZXR1cm4gYmV0YSA9PT0gMSA/IG5ldyBCYXNpcyhjb250ZXh0KSA6IG5ldyBCdW5kbGUoY29udGV4dCwgYmV0YSk7XG4gIH1cblxuICBidW5kbGUuYmV0YSA9IGZ1bmN0aW9uKGJldGEpIHtcbiAgICByZXR1cm4gY3VzdG9tKCtiZXRhKTtcbiAgfTtcblxuICByZXR1cm4gYnVuZGxlO1xufSkoMC44NSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9kMy1zaGFwZS9zcmMvY3VydmUvYnVuZGxlLmpzXG4vLyBtb2R1bGUgaWQgPSA2MTNcbi8vIG1vZHVsZSBjaHVua3MgPSA1IiwiaW1wb3J0IHtDYXJkaW5hbENsb3NlZH0gZnJvbSBcIi4vY2FyZGluYWxDbG9zZWRcIjtcbmltcG9ydCBub29wIGZyb20gXCIuLi9ub29wXCI7XG5pbXBvcnQge3BvaW50fSBmcm9tIFwiLi9jYXRtdWxsUm9tXCI7XG5cbmZ1bmN0aW9uIENhdG11bGxSb21DbG9zZWQoY29udGV4dCwgYWxwaGEpIHtcbiAgdGhpcy5fY29udGV4dCA9IGNvbnRleHQ7XG4gIHRoaXMuX2FscGhhID0gYWxwaGE7XG59XG5cbkNhdG11bGxSb21DbG9zZWQucHJvdG90eXBlID0ge1xuICBhcmVhU3RhcnQ6IG5vb3AsXG4gIGFyZWFFbmQ6IG5vb3AsXG4gIGxpbmVTdGFydDogZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5feDAgPSB0aGlzLl94MSA9IHRoaXMuX3gyID0gdGhpcy5feDMgPSB0aGlzLl94NCA9IHRoaXMuX3g1ID1cbiAgICB0aGlzLl95MCA9IHRoaXMuX3kxID0gdGhpcy5feTIgPSB0aGlzLl95MyA9IHRoaXMuX3k0ID0gdGhpcy5feTUgPSBOYU47XG4gICAgdGhpcy5fbDAxX2EgPSB0aGlzLl9sMTJfYSA9IHRoaXMuX2wyM19hID1cbiAgICB0aGlzLl9sMDFfMmEgPSB0aGlzLl9sMTJfMmEgPSB0aGlzLl9sMjNfMmEgPVxuICAgIHRoaXMuX3BvaW50ID0gMDtcbiAgfSxcbiAgbGluZUVuZDogZnVuY3Rpb24oKSB7XG4gICAgc3dpdGNoICh0aGlzLl9wb2ludCkge1xuICAgICAgY2FzZSAxOiB7XG4gICAgICAgIHRoaXMuX2NvbnRleHQubW92ZVRvKHRoaXMuX3gzLCB0aGlzLl95Myk7XG4gICAgICAgIHRoaXMuX2NvbnRleHQuY2xvc2VQYXRoKCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY2FzZSAyOiB7XG4gICAgICAgIHRoaXMuX2NvbnRleHQubGluZVRvKHRoaXMuX3gzLCB0aGlzLl95Myk7XG4gICAgICAgIHRoaXMuX2NvbnRleHQuY2xvc2VQYXRoKCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY2FzZSAzOiB7XG4gICAgICAgIHRoaXMucG9pbnQodGhpcy5feDMsIHRoaXMuX3kzKTtcbiAgICAgICAgdGhpcy5wb2ludCh0aGlzLl94NCwgdGhpcy5feTQpO1xuICAgICAgICB0aGlzLnBvaW50KHRoaXMuX3g1LCB0aGlzLl95NSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgfSxcbiAgcG9pbnQ6IGZ1bmN0aW9uKHgsIHkpIHtcbiAgICB4ID0gK3gsIHkgPSAreTtcblxuICAgIGlmICh0aGlzLl9wb2ludCkge1xuICAgICAgdmFyIHgyMyA9IHRoaXMuX3gyIC0geCxcbiAgICAgICAgICB5MjMgPSB0aGlzLl95MiAtIHk7XG4gICAgICB0aGlzLl9sMjNfYSA9IE1hdGguc3FydCh0aGlzLl9sMjNfMmEgPSBNYXRoLnBvdyh4MjMgKiB4MjMgKyB5MjMgKiB5MjMsIHRoaXMuX2FscGhhKSk7XG4gICAgfVxuXG4gICAgc3dpdGNoICh0aGlzLl9wb2ludCkge1xuICAgICAgY2FzZSAwOiB0aGlzLl9wb2ludCA9IDE7IHRoaXMuX3gzID0geCwgdGhpcy5feTMgPSB5OyBicmVhaztcbiAgICAgIGNhc2UgMTogdGhpcy5fcG9pbnQgPSAyOyB0aGlzLl9jb250ZXh0Lm1vdmVUbyh0aGlzLl94NCA9IHgsIHRoaXMuX3k0ID0geSk7IGJyZWFrO1xuICAgICAgY2FzZSAyOiB0aGlzLl9wb2ludCA9IDM7IHRoaXMuX3g1ID0geCwgdGhpcy5feTUgPSB5OyBicmVhaztcbiAgICAgIGRlZmF1bHQ6IHBvaW50KHRoaXMsIHgsIHkpOyBicmVhaztcbiAgICB9XG5cbiAgICB0aGlzLl9sMDFfYSA9IHRoaXMuX2wxMl9hLCB0aGlzLl9sMTJfYSA9IHRoaXMuX2wyM19hO1xuICAgIHRoaXMuX2wwMV8yYSA9IHRoaXMuX2wxMl8yYSwgdGhpcy5fbDEyXzJhID0gdGhpcy5fbDIzXzJhO1xuICAgIHRoaXMuX3gwID0gdGhpcy5feDEsIHRoaXMuX3gxID0gdGhpcy5feDIsIHRoaXMuX3gyID0geDtcbiAgICB0aGlzLl95MCA9IHRoaXMuX3kxLCB0aGlzLl95MSA9IHRoaXMuX3kyLCB0aGlzLl95MiA9IHk7XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IChmdW5jdGlvbiBjdXN0b20oYWxwaGEpIHtcblxuICBmdW5jdGlvbiBjYXRtdWxsUm9tKGNvbnRleHQpIHtcbiAgICByZXR1cm4gYWxwaGEgPyBuZXcgQ2F0bXVsbFJvbUNsb3NlZChjb250ZXh0LCBhbHBoYSkgOiBuZXcgQ2FyZGluYWxDbG9zZWQoY29udGV4dCwgMCk7XG4gIH1cblxuICBjYXRtdWxsUm9tLmFscGhhID0gZnVuY3Rpb24oYWxwaGEpIHtcbiAgICByZXR1cm4gY3VzdG9tKCthbHBoYSk7XG4gIH07XG5cbiAgcmV0dXJuIGNhdG11bGxSb207XG59KSgwLjUpO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvZDMtc2hhcGUvc3JjL2N1cnZlL2NhdG11bGxSb21DbG9zZWQuanNcbi8vIG1vZHVsZSBpZCA9IDYxNFxuLy8gbW9kdWxlIGNodW5rcyA9IDUiLCJpbXBvcnQge0NhcmRpbmFsT3Blbn0gZnJvbSBcIi4vY2FyZGluYWxPcGVuXCI7XG5pbXBvcnQge3BvaW50fSBmcm9tIFwiLi9jYXRtdWxsUm9tXCI7XG5cbmZ1bmN0aW9uIENhdG11bGxSb21PcGVuKGNvbnRleHQsIGFscGhhKSB7XG4gIHRoaXMuX2NvbnRleHQgPSBjb250ZXh0O1xuICB0aGlzLl9hbHBoYSA9IGFscGhhO1xufVxuXG5DYXRtdWxsUm9tT3Blbi5wcm90b3R5cGUgPSB7XG4gIGFyZWFTdGFydDogZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5fbGluZSA9IDA7XG4gIH0sXG4gIGFyZWFFbmQ6IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuX2xpbmUgPSBOYU47XG4gIH0sXG4gIGxpbmVTdGFydDogZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5feDAgPSB0aGlzLl94MSA9IHRoaXMuX3gyID1cbiAgICB0aGlzLl95MCA9IHRoaXMuX3kxID0gdGhpcy5feTIgPSBOYU47XG4gICAgdGhpcy5fbDAxX2EgPSB0aGlzLl9sMTJfYSA9IHRoaXMuX2wyM19hID1cbiAgICB0aGlzLl9sMDFfMmEgPSB0aGlzLl9sMTJfMmEgPSB0aGlzLl9sMjNfMmEgPVxuICAgIHRoaXMuX3BvaW50ID0gMDtcbiAgfSxcbiAgbGluZUVuZDogZnVuY3Rpb24oKSB7XG4gICAgaWYgKHRoaXMuX2xpbmUgfHwgKHRoaXMuX2xpbmUgIT09IDAgJiYgdGhpcy5fcG9pbnQgPT09IDMpKSB0aGlzLl9jb250ZXh0LmNsb3NlUGF0aCgpO1xuICAgIHRoaXMuX2xpbmUgPSAxIC0gdGhpcy5fbGluZTtcbiAgfSxcbiAgcG9pbnQ6IGZ1bmN0aW9uKHgsIHkpIHtcbiAgICB4ID0gK3gsIHkgPSAreTtcblxuICAgIGlmICh0aGlzLl9wb2ludCkge1xuICAgICAgdmFyIHgyMyA9IHRoaXMuX3gyIC0geCxcbiAgICAgICAgICB5MjMgPSB0aGlzLl95MiAtIHk7XG4gICAgICB0aGlzLl9sMjNfYSA9IE1hdGguc3FydCh0aGlzLl9sMjNfMmEgPSBNYXRoLnBvdyh4MjMgKiB4MjMgKyB5MjMgKiB5MjMsIHRoaXMuX2FscGhhKSk7XG4gICAgfVxuXG4gICAgc3dpdGNoICh0aGlzLl9wb2ludCkge1xuICAgICAgY2FzZSAwOiB0aGlzLl9wb2ludCA9IDE7IGJyZWFrO1xuICAgICAgY2FzZSAxOiB0aGlzLl9wb2ludCA9IDI7IGJyZWFrO1xuICAgICAgY2FzZSAyOiB0aGlzLl9wb2ludCA9IDM7IHRoaXMuX2xpbmUgPyB0aGlzLl9jb250ZXh0LmxpbmVUbyh0aGlzLl94MiwgdGhpcy5feTIpIDogdGhpcy5fY29udGV4dC5tb3ZlVG8odGhpcy5feDIsIHRoaXMuX3kyKTsgYnJlYWs7XG4gICAgICBjYXNlIDM6IHRoaXMuX3BvaW50ID0gNDsgLy8gcHJvY2VlZFxuICAgICAgZGVmYXVsdDogcG9pbnQodGhpcywgeCwgeSk7IGJyZWFrO1xuICAgIH1cblxuICAgIHRoaXMuX2wwMV9hID0gdGhpcy5fbDEyX2EsIHRoaXMuX2wxMl9hID0gdGhpcy5fbDIzX2E7XG4gICAgdGhpcy5fbDAxXzJhID0gdGhpcy5fbDEyXzJhLCB0aGlzLl9sMTJfMmEgPSB0aGlzLl9sMjNfMmE7XG4gICAgdGhpcy5feDAgPSB0aGlzLl94MSwgdGhpcy5feDEgPSB0aGlzLl94MiwgdGhpcy5feDIgPSB4O1xuICAgIHRoaXMuX3kwID0gdGhpcy5feTEsIHRoaXMuX3kxID0gdGhpcy5feTIsIHRoaXMuX3kyID0geTtcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgKGZ1bmN0aW9uIGN1c3RvbShhbHBoYSkge1xuXG4gIGZ1bmN0aW9uIGNhdG11bGxSb20oY29udGV4dCkge1xuICAgIHJldHVybiBhbHBoYSA/IG5ldyBDYXRtdWxsUm9tT3Blbihjb250ZXh0LCBhbHBoYSkgOiBuZXcgQ2FyZGluYWxPcGVuKGNvbnRleHQsIDApO1xuICB9XG5cbiAgY2F0bXVsbFJvbS5hbHBoYSA9IGZ1bmN0aW9uKGFscGhhKSB7XG4gICAgcmV0dXJuIGN1c3RvbSgrYWxwaGEpO1xuICB9O1xuXG4gIHJldHVybiBjYXRtdWxsUm9tO1xufSkoMC41KTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2QzLXNoYXBlL3NyYy9jdXJ2ZS9jYXRtdWxsUm9tT3Blbi5qc1xuLy8gbW9kdWxlIGlkID0gNjE1XG4vLyBtb2R1bGUgY2h1bmtzID0gNSIsImltcG9ydCBub29wIGZyb20gXCIuLi9ub29wXCI7XG5cbmZ1bmN0aW9uIExpbmVhckNsb3NlZChjb250ZXh0KSB7XG4gIHRoaXMuX2NvbnRleHQgPSBjb250ZXh0O1xufVxuXG5MaW5lYXJDbG9zZWQucHJvdG90eXBlID0ge1xuICBhcmVhU3RhcnQ6IG5vb3AsXG4gIGFyZWFFbmQ6IG5vb3AsXG4gIGxpbmVTdGFydDogZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5fcG9pbnQgPSAwO1xuICB9LFxuICBsaW5lRW5kOiBmdW5jdGlvbigpIHtcbiAgICBpZiAodGhpcy5fcG9pbnQpIHRoaXMuX2NvbnRleHQuY2xvc2VQYXRoKCk7XG4gIH0sXG4gIHBvaW50OiBmdW5jdGlvbih4LCB5KSB7XG4gICAgeCA9ICt4LCB5ID0gK3k7XG4gICAgaWYgKHRoaXMuX3BvaW50KSB0aGlzLl9jb250ZXh0LmxpbmVUbyh4LCB5KTtcbiAgICBlbHNlIHRoaXMuX3BvaW50ID0gMSwgdGhpcy5fY29udGV4dC5tb3ZlVG8oeCwgeSk7XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKGNvbnRleHQpIHtcbiAgcmV0dXJuIG5ldyBMaW5lYXJDbG9zZWQoY29udGV4dCk7XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9kMy1zaGFwZS9zcmMvY3VydmUvbGluZWFyQ2xvc2VkLmpzXG4vLyBtb2R1bGUgaWQgPSA2MTZcbi8vIG1vZHVsZSBjaHVua3MgPSA1IiwiZnVuY3Rpb24gc2lnbih4KSB7XG4gIHJldHVybiB4IDwgMCA/IC0xIDogMTtcbn1cblxuLy8gQ2FsY3VsYXRlIHRoZSBzbG9wZXMgb2YgdGhlIHRhbmdlbnRzIChIZXJtaXRlLXR5cGUgaW50ZXJwb2xhdGlvbikgYmFzZWQgb25cbi8vIHRoZSBmb2xsb3dpbmcgcGFwZXI6IFN0ZWZmZW4sIE0uIDE5OTAuIEEgU2ltcGxlIE1ldGhvZCBmb3IgTW9ub3RvbmljXG4vLyBJbnRlcnBvbGF0aW9uIGluIE9uZSBEaW1lbnNpb24uIEFzdHJvbm9teSBhbmQgQXN0cm9waHlzaWNzLCBWb2wuIDIzOSwgTk8uXG4vLyBOT1YoSUkpLCBQLiA0NDMsIDE5OTAuXG5mdW5jdGlvbiBzbG9wZTModGhhdCwgeDIsIHkyKSB7XG4gIHZhciBoMCA9IHRoYXQuX3gxIC0gdGhhdC5feDAsXG4gICAgICBoMSA9IHgyIC0gdGhhdC5feDEsXG4gICAgICBzMCA9ICh0aGF0Ll95MSAtIHRoYXQuX3kwKSAvIChoMCB8fCBoMSA8IDAgJiYgLTApLFxuICAgICAgczEgPSAoeTIgLSB0aGF0Ll95MSkgLyAoaDEgfHwgaDAgPCAwICYmIC0wKSxcbiAgICAgIHAgPSAoczAgKiBoMSArIHMxICogaDApIC8gKGgwICsgaDEpO1xuICByZXR1cm4gKHNpZ24oczApICsgc2lnbihzMSkpICogTWF0aC5taW4oTWF0aC5hYnMoczApLCBNYXRoLmFicyhzMSksIDAuNSAqIE1hdGguYWJzKHApKSB8fCAwO1xufVxuXG4vLyBDYWxjdWxhdGUgYSBvbmUtc2lkZWQgc2xvcGUuXG5mdW5jdGlvbiBzbG9wZTIodGhhdCwgdCkge1xuICB2YXIgaCA9IHRoYXQuX3gxIC0gdGhhdC5feDA7XG4gIHJldHVybiBoID8gKDMgKiAodGhhdC5feTEgLSB0aGF0Ll95MCkgLyBoIC0gdCkgLyAyIDogdDtcbn1cblxuLy8gQWNjb3JkaW5nIHRvIGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0N1YmljX0hlcm1pdGVfc3BsaW5lI1JlcHJlc2VudGF0aW9uc1xuLy8gXCJ5b3UgY2FuIGV4cHJlc3MgY3ViaWMgSGVybWl0ZSBpbnRlcnBvbGF0aW9uIGluIHRlcm1zIG9mIGN1YmljIELDqXppZXIgY3VydmVzXG4vLyB3aXRoIHJlc3BlY3QgdG8gdGhlIGZvdXIgdmFsdWVzIHAwLCBwMCArIG0wIC8gMywgcDEgLSBtMSAvIDMsIHAxXCIuXG5mdW5jdGlvbiBwb2ludCh0aGF0LCB0MCwgdDEpIHtcbiAgdmFyIHgwID0gdGhhdC5feDAsXG4gICAgICB5MCA9IHRoYXQuX3kwLFxuICAgICAgeDEgPSB0aGF0Ll94MSxcbiAgICAgIHkxID0gdGhhdC5feTEsXG4gICAgICBkeCA9ICh4MSAtIHgwKSAvIDM7XG4gIHRoYXQuX2NvbnRleHQuYmV6aWVyQ3VydmVUbyh4MCArIGR4LCB5MCArIGR4ICogdDAsIHgxIC0gZHgsIHkxIC0gZHggKiB0MSwgeDEsIHkxKTtcbn1cblxuZnVuY3Rpb24gTW9ub3RvbmVYKGNvbnRleHQpIHtcbiAgdGhpcy5fY29udGV4dCA9IGNvbnRleHQ7XG59XG5cbk1vbm90b25lWC5wcm90b3R5cGUgPSB7XG4gIGFyZWFTdGFydDogZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5fbGluZSA9IDA7XG4gIH0sXG4gIGFyZWFFbmQ6IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuX2xpbmUgPSBOYU47XG4gIH0sXG4gIGxpbmVTdGFydDogZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5feDAgPSB0aGlzLl94MSA9XG4gICAgdGhpcy5feTAgPSB0aGlzLl95MSA9XG4gICAgdGhpcy5fdDAgPSBOYU47XG4gICAgdGhpcy5fcG9pbnQgPSAwO1xuICB9LFxuICBsaW5lRW5kOiBmdW5jdGlvbigpIHtcbiAgICBzd2l0Y2ggKHRoaXMuX3BvaW50KSB7XG4gICAgICBjYXNlIDI6IHRoaXMuX2NvbnRleHQubGluZVRvKHRoaXMuX3gxLCB0aGlzLl95MSk7IGJyZWFrO1xuICAgICAgY2FzZSAzOiBwb2ludCh0aGlzLCB0aGlzLl90MCwgc2xvcGUyKHRoaXMsIHRoaXMuX3QwKSk7IGJyZWFrO1xuICAgIH1cbiAgICBpZiAodGhpcy5fbGluZSB8fCAodGhpcy5fbGluZSAhPT0gMCAmJiB0aGlzLl9wb2ludCA9PT0gMSkpIHRoaXMuX2NvbnRleHQuY2xvc2VQYXRoKCk7XG4gICAgdGhpcy5fbGluZSA9IDEgLSB0aGlzLl9saW5lO1xuICB9LFxuICBwb2ludDogZnVuY3Rpb24oeCwgeSkge1xuICAgIHZhciB0MSA9IE5hTjtcblxuICAgIHggPSAreCwgeSA9ICt5O1xuICAgIGlmICh4ID09PSB0aGlzLl94MSAmJiB5ID09PSB0aGlzLl95MSkgcmV0dXJuOyAvLyBJZ25vcmUgY29pbmNpZGVudCBwb2ludHMuXG4gICAgc3dpdGNoICh0aGlzLl9wb2ludCkge1xuICAgICAgY2FzZSAwOiB0aGlzLl9wb2ludCA9IDE7IHRoaXMuX2xpbmUgPyB0aGlzLl9jb250ZXh0LmxpbmVUbyh4LCB5KSA6IHRoaXMuX2NvbnRleHQubW92ZVRvKHgsIHkpOyBicmVhaztcbiAgICAgIGNhc2UgMTogdGhpcy5fcG9pbnQgPSAyOyBicmVhaztcbiAgICAgIGNhc2UgMjogdGhpcy5fcG9pbnQgPSAzOyBwb2ludCh0aGlzLCBzbG9wZTIodGhpcywgdDEgPSBzbG9wZTModGhpcywgeCwgeSkpLCB0MSk7IGJyZWFrO1xuICAgICAgZGVmYXVsdDogcG9pbnQodGhpcywgdGhpcy5fdDAsIHQxID0gc2xvcGUzKHRoaXMsIHgsIHkpKTsgYnJlYWs7XG4gICAgfVxuXG4gICAgdGhpcy5feDAgPSB0aGlzLl94MSwgdGhpcy5feDEgPSB4O1xuICAgIHRoaXMuX3kwID0gdGhpcy5feTEsIHRoaXMuX3kxID0geTtcbiAgICB0aGlzLl90MCA9IHQxO1xuICB9XG59XG5cbmZ1bmN0aW9uIE1vbm90b25lWShjb250ZXh0KSB7XG4gIHRoaXMuX2NvbnRleHQgPSBuZXcgUmVmbGVjdENvbnRleHQoY29udGV4dCk7XG59XG5cbihNb25vdG9uZVkucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShNb25vdG9uZVgucHJvdG90eXBlKSkucG9pbnQgPSBmdW5jdGlvbih4LCB5KSB7XG4gIE1vbm90b25lWC5wcm90b3R5cGUucG9pbnQuY2FsbCh0aGlzLCB5LCB4KTtcbn07XG5cbmZ1bmN0aW9uIFJlZmxlY3RDb250ZXh0KGNvbnRleHQpIHtcbiAgdGhpcy5fY29udGV4dCA9IGNvbnRleHQ7XG59XG5cblJlZmxlY3RDb250ZXh0LnByb3RvdHlwZSA9IHtcbiAgbW92ZVRvOiBmdW5jdGlvbih4LCB5KSB7IHRoaXMuX2NvbnRleHQubW92ZVRvKHksIHgpOyB9LFxuICBjbG9zZVBhdGg6IGZ1bmN0aW9uKCkgeyB0aGlzLl9jb250ZXh0LmNsb3NlUGF0aCgpOyB9LFxuICBsaW5lVG86IGZ1bmN0aW9uKHgsIHkpIHsgdGhpcy5fY29udGV4dC5saW5lVG8oeSwgeCk7IH0sXG4gIGJlemllckN1cnZlVG86IGZ1bmN0aW9uKHgxLCB5MSwgeDIsIHkyLCB4LCB5KSB7IHRoaXMuX2NvbnRleHQuYmV6aWVyQ3VydmVUbyh5MSwgeDEsIHkyLCB4MiwgeSwgeCk7IH1cbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBtb25vdG9uZVgoY29udGV4dCkge1xuICByZXR1cm4gbmV3IE1vbm90b25lWChjb250ZXh0KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1vbm90b25lWShjb250ZXh0KSB7XG4gIHJldHVybiBuZXcgTW9ub3RvbmVZKGNvbnRleHQpO1xufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvZDMtc2hhcGUvc3JjL2N1cnZlL21vbm90b25lLmpzXG4vLyBtb2R1bGUgaWQgPSA2MTdcbi8vIG1vZHVsZSBjaHVua3MgPSA1IiwiZnVuY3Rpb24gTmF0dXJhbChjb250ZXh0KSB7XG4gIHRoaXMuX2NvbnRleHQgPSBjb250ZXh0O1xufVxuXG5OYXR1cmFsLnByb3RvdHlwZSA9IHtcbiAgYXJlYVN0YXJ0OiBmdW5jdGlvbigpIHtcbiAgICB0aGlzLl9saW5lID0gMDtcbiAgfSxcbiAgYXJlYUVuZDogZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5fbGluZSA9IE5hTjtcbiAgfSxcbiAgbGluZVN0YXJ0OiBmdW5jdGlvbigpIHtcbiAgICB0aGlzLl94ID0gW107XG4gICAgdGhpcy5feSA9IFtdO1xuICB9LFxuICBsaW5lRW5kOiBmdW5jdGlvbigpIHtcbiAgICB2YXIgeCA9IHRoaXMuX3gsXG4gICAgICAgIHkgPSB0aGlzLl95LFxuICAgICAgICBuID0geC5sZW5ndGg7XG5cbiAgICBpZiAobikge1xuICAgICAgdGhpcy5fbGluZSA/IHRoaXMuX2NvbnRleHQubGluZVRvKHhbMF0sIHlbMF0pIDogdGhpcy5fY29udGV4dC5tb3ZlVG8oeFswXSwgeVswXSk7XG4gICAgICBpZiAobiA9PT0gMikge1xuICAgICAgICB0aGlzLl9jb250ZXh0LmxpbmVUbyh4WzFdLCB5WzFdKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciBweCA9IGNvbnRyb2xQb2ludHMoeCksXG4gICAgICAgICAgICBweSA9IGNvbnRyb2xQb2ludHMoeSk7XG4gICAgICAgIGZvciAodmFyIGkwID0gMCwgaTEgPSAxOyBpMSA8IG47ICsraTAsICsraTEpIHtcbiAgICAgICAgICB0aGlzLl9jb250ZXh0LmJlemllckN1cnZlVG8ocHhbMF1baTBdLCBweVswXVtpMF0sIHB4WzFdW2kwXSwgcHlbMV1baTBdLCB4W2kxXSwgeVtpMV0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX2xpbmUgfHwgKHRoaXMuX2xpbmUgIT09IDAgJiYgbiA9PT0gMSkpIHRoaXMuX2NvbnRleHQuY2xvc2VQYXRoKCk7XG4gICAgdGhpcy5fbGluZSA9IDEgLSB0aGlzLl9saW5lO1xuICAgIHRoaXMuX3ggPSB0aGlzLl95ID0gbnVsbDtcbiAgfSxcbiAgcG9pbnQ6IGZ1bmN0aW9uKHgsIHkpIHtcbiAgICB0aGlzLl94LnB1c2goK3gpO1xuICAgIHRoaXMuX3kucHVzaCgreSk7XG4gIH1cbn07XG5cbi8vIFNlZSBodHRwczovL3d3dy5wYXJ0aWNsZWluY2VsbC5jb20vMjAxMi9iZXppZXItc3BsaW5lcy8gZm9yIGRlcml2YXRpb24uXG5mdW5jdGlvbiBjb250cm9sUG9pbnRzKHgpIHtcbiAgdmFyIGksXG4gICAgICBuID0geC5sZW5ndGggLSAxLFxuICAgICAgbSxcbiAgICAgIGEgPSBuZXcgQXJyYXkobiksXG4gICAgICBiID0gbmV3IEFycmF5KG4pLFxuICAgICAgciA9IG5ldyBBcnJheShuKTtcbiAgYVswXSA9IDAsIGJbMF0gPSAyLCByWzBdID0geFswXSArIDIgKiB4WzFdO1xuICBmb3IgKGkgPSAxOyBpIDwgbiAtIDE7ICsraSkgYVtpXSA9IDEsIGJbaV0gPSA0LCByW2ldID0gNCAqIHhbaV0gKyAyICogeFtpICsgMV07XG4gIGFbbiAtIDFdID0gMiwgYltuIC0gMV0gPSA3LCByW24gLSAxXSA9IDggKiB4W24gLSAxXSArIHhbbl07XG4gIGZvciAoaSA9IDE7IGkgPCBuOyArK2kpIG0gPSBhW2ldIC8gYltpIC0gMV0sIGJbaV0gLT0gbSwgcltpXSAtPSBtICogcltpIC0gMV07XG4gIGFbbiAtIDFdID0gcltuIC0gMV0gLyBiW24gLSAxXTtcbiAgZm9yIChpID0gbiAtIDI7IGkgPj0gMDsgLS1pKSBhW2ldID0gKHJbaV0gLSBhW2kgKyAxXSkgLyBiW2ldO1xuICBiW24gLSAxXSA9ICh4W25dICsgYVtuIC0gMV0pIC8gMjtcbiAgZm9yIChpID0gMDsgaSA8IG4gLSAxOyArK2kpIGJbaV0gPSAyICogeFtpICsgMV0gLSBhW2kgKyAxXTtcbiAgcmV0dXJuIFthLCBiXTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oY29udGV4dCkge1xuICByZXR1cm4gbmV3IE5hdHVyYWwoY29udGV4dCk7XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9kMy1zaGFwZS9zcmMvY3VydmUvbmF0dXJhbC5qc1xuLy8gbW9kdWxlIGlkID0gNjE4XG4vLyBtb2R1bGUgY2h1bmtzID0gNSIsImZ1bmN0aW9uIFN0ZXAoY29udGV4dCwgdCkge1xuICB0aGlzLl9jb250ZXh0ID0gY29udGV4dDtcbiAgdGhpcy5fdCA9IHQ7XG59XG5cblN0ZXAucHJvdG90eXBlID0ge1xuICBhcmVhU3RhcnQ6IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuX2xpbmUgPSAwO1xuICB9LFxuICBhcmVhRW5kOiBmdW5jdGlvbigpIHtcbiAgICB0aGlzLl9saW5lID0gTmFOO1xuICB9LFxuICBsaW5lU3RhcnQ6IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuX3ggPSB0aGlzLl95ID0gTmFOO1xuICAgIHRoaXMuX3BvaW50ID0gMDtcbiAgfSxcbiAgbGluZUVuZDogZnVuY3Rpb24oKSB7XG4gICAgaWYgKDAgPCB0aGlzLl90ICYmIHRoaXMuX3QgPCAxICYmIHRoaXMuX3BvaW50ID09PSAyKSB0aGlzLl9jb250ZXh0LmxpbmVUbyh0aGlzLl94LCB0aGlzLl95KTtcbiAgICBpZiAodGhpcy5fbGluZSB8fCAodGhpcy5fbGluZSAhPT0gMCAmJiB0aGlzLl9wb2ludCA9PT0gMSkpIHRoaXMuX2NvbnRleHQuY2xvc2VQYXRoKCk7XG4gICAgaWYgKHRoaXMuX2xpbmUgPj0gMCkgdGhpcy5fdCA9IDEgLSB0aGlzLl90LCB0aGlzLl9saW5lID0gMSAtIHRoaXMuX2xpbmU7XG4gIH0sXG4gIHBvaW50OiBmdW5jdGlvbih4LCB5KSB7XG4gICAgeCA9ICt4LCB5ID0gK3k7XG4gICAgc3dpdGNoICh0aGlzLl9wb2ludCkge1xuICAgICAgY2FzZSAwOiB0aGlzLl9wb2ludCA9IDE7IHRoaXMuX2xpbmUgPyB0aGlzLl9jb250ZXh0LmxpbmVUbyh4LCB5KSA6IHRoaXMuX2NvbnRleHQubW92ZVRvKHgsIHkpOyBicmVhaztcbiAgICAgIGNhc2UgMTogdGhpcy5fcG9pbnQgPSAyOyAvLyBwcm9jZWVkXG4gICAgICBkZWZhdWx0OiB7XG4gICAgICAgIGlmICh0aGlzLl90IDw9IDApIHtcbiAgICAgICAgICB0aGlzLl9jb250ZXh0LmxpbmVUbyh0aGlzLl94LCB5KTtcbiAgICAgICAgICB0aGlzLl9jb250ZXh0LmxpbmVUbyh4LCB5KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB2YXIgeDEgPSB0aGlzLl94ICogKDEgLSB0aGlzLl90KSArIHggKiB0aGlzLl90O1xuICAgICAgICAgIHRoaXMuX2NvbnRleHQubGluZVRvKHgxLCB0aGlzLl95KTtcbiAgICAgICAgICB0aGlzLl9jb250ZXh0LmxpbmVUbyh4MSwgeSk7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuX3ggPSB4LCB0aGlzLl95ID0geTtcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oY29udGV4dCkge1xuICByZXR1cm4gbmV3IFN0ZXAoY29udGV4dCwgMC41KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN0ZXBCZWZvcmUoY29udGV4dCkge1xuICByZXR1cm4gbmV3IFN0ZXAoY29udGV4dCwgMCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdGVwQWZ0ZXIoY29udGV4dCkge1xuICByZXR1cm4gbmV3IFN0ZXAoY29udGV4dCwgMSk7XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9kMy1zaGFwZS9zcmMvY3VydmUvc3RlcC5qc1xuLy8gbW9kdWxlIGlkID0gNjE5XG4vLyBtb2R1bGUgY2h1bmtzID0gNSIsImltcG9ydCB7c2xpY2V9IGZyb20gXCIuL2FycmF5XCI7XG5pbXBvcnQgY29uc3RhbnQgZnJvbSBcIi4vY29uc3RhbnRcIjtcbmltcG9ydCBvZmZzZXROb25lIGZyb20gXCIuL29mZnNldC9ub25lXCI7XG5pbXBvcnQgb3JkZXJOb25lIGZyb20gXCIuL29yZGVyL25vbmVcIjtcblxuZnVuY3Rpb24gc3RhY2tWYWx1ZShkLCBrZXkpIHtcbiAgcmV0dXJuIGRba2V5XTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oKSB7XG4gIHZhciBrZXlzID0gY29uc3RhbnQoW10pLFxuICAgICAgb3JkZXIgPSBvcmRlck5vbmUsXG4gICAgICBvZmZzZXQgPSBvZmZzZXROb25lLFxuICAgICAgdmFsdWUgPSBzdGFja1ZhbHVlO1xuXG4gIGZ1bmN0aW9uIHN0YWNrKGRhdGEpIHtcbiAgICB2YXIga3ogPSBrZXlzLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyksXG4gICAgICAgIGksXG4gICAgICAgIG0gPSBkYXRhLmxlbmd0aCxcbiAgICAgICAgbiA9IGt6Lmxlbmd0aCxcbiAgICAgICAgc3ogPSBuZXcgQXJyYXkobiksXG4gICAgICAgIG96O1xuXG4gICAgZm9yIChpID0gMDsgaSA8IG47ICsraSkge1xuICAgICAgZm9yICh2YXIga2kgPSBreltpXSwgc2kgPSBzeltpXSA9IG5ldyBBcnJheShtKSwgaiA9IDAsIHNpajsgaiA8IG07ICsraikge1xuICAgICAgICBzaVtqXSA9IHNpaiA9IFswLCArdmFsdWUoZGF0YVtqXSwga2ksIGosIGRhdGEpXTtcbiAgICAgICAgc2lqLmRhdGEgPSBkYXRhW2pdO1xuICAgICAgfVxuICAgICAgc2kua2V5ID0ga2k7XG4gICAgfVxuXG4gICAgZm9yIChpID0gMCwgb3ogPSBvcmRlcihzeik7IGkgPCBuOyArK2kpIHtcbiAgICAgIHN6W296W2ldXS5pbmRleCA9IGk7XG4gICAgfVxuXG4gICAgb2Zmc2V0KHN6LCBveik7XG4gICAgcmV0dXJuIHN6O1xuICB9XG5cbiAgc3RhY2sua2V5cyA9IGZ1bmN0aW9uKF8pIHtcbiAgICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA/IChrZXlzID0gdHlwZW9mIF8gPT09IFwiZnVuY3Rpb25cIiA/IF8gOiBjb25zdGFudChzbGljZS5jYWxsKF8pKSwgc3RhY2spIDoga2V5cztcbiAgfTtcblxuICBzdGFjay52YWx1ZSA9IGZ1bmN0aW9uKF8pIHtcbiAgICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA/ICh2YWx1ZSA9IHR5cGVvZiBfID09PSBcImZ1bmN0aW9uXCIgPyBfIDogY29uc3RhbnQoK18pLCBzdGFjaykgOiB2YWx1ZTtcbiAgfTtcblxuICBzdGFjay5vcmRlciA9IGZ1bmN0aW9uKF8pIHtcbiAgICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA/IChvcmRlciA9IF8gPT0gbnVsbCA/IG9yZGVyTm9uZSA6IHR5cGVvZiBfID09PSBcImZ1bmN0aW9uXCIgPyBfIDogY29uc3RhbnQoc2xpY2UuY2FsbChfKSksIHN0YWNrKSA6IG9yZGVyO1xuICB9O1xuXG4gIHN0YWNrLm9mZnNldCA9IGZ1bmN0aW9uKF8pIHtcbiAgICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA/IChvZmZzZXQgPSBfID09IG51bGwgPyBvZmZzZXROb25lIDogXywgc3RhY2spIDogb2Zmc2V0O1xuICB9O1xuXG4gIHJldHVybiBzdGFjaztcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2QzLXNoYXBlL3NyYy9zdGFjay5qc1xuLy8gbW9kdWxlIGlkID0gNjIwXG4vLyBtb2R1bGUgY2h1bmtzID0gNSIsImltcG9ydCBub25lIGZyb20gXCIuL25vbmVcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oc2VyaWVzLCBvcmRlcikge1xuICBpZiAoISgobiA9IHNlcmllcy5sZW5ndGgpID4gMCkpIHJldHVybjtcbiAgZm9yICh2YXIgaSwgbiwgaiA9IDAsIG0gPSBzZXJpZXNbMF0ubGVuZ3RoLCB5OyBqIDwgbTsgKytqKSB7XG4gICAgZm9yICh5ID0gaSA9IDA7IGkgPCBuOyArK2kpIHkgKz0gc2VyaWVzW2ldW2pdWzFdIHx8IDA7XG4gICAgaWYgKHkpIGZvciAoaSA9IDA7IGkgPCBuOyArK2kpIHNlcmllc1tpXVtqXVsxXSAvPSB5O1xuICB9XG4gIG5vbmUoc2VyaWVzLCBvcmRlcik7XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9kMy1zaGFwZS9zcmMvb2Zmc2V0L2V4cGFuZC5qc1xuLy8gbW9kdWxlIGlkID0gNjIxXG4vLyBtb2R1bGUgY2h1bmtzID0gNSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKHNlcmllcywgb3JkZXIpIHtcbiAgaWYgKCEoKG4gPSBzZXJpZXMubGVuZ3RoKSA+IDEpKSByZXR1cm47XG4gIGZvciAodmFyIGksIGogPSAwLCBkLCBkeSwgeXAsIHluLCBuLCBtID0gc2VyaWVzW29yZGVyWzBdXS5sZW5ndGg7IGogPCBtOyArK2opIHtcbiAgICBmb3IgKHlwID0geW4gPSAwLCBpID0gMDsgaSA8IG47ICsraSkge1xuICAgICAgaWYgKChkeSA9IChkID0gc2VyaWVzW29yZGVyW2ldXVtqXSlbMV0gLSBkWzBdKSA+PSAwKSB7XG4gICAgICAgIGRbMF0gPSB5cCwgZFsxXSA9IHlwICs9IGR5O1xuICAgICAgfSBlbHNlIGlmIChkeSA8IDApIHtcbiAgICAgICAgZFsxXSA9IHluLCBkWzBdID0geW4gKz0gZHk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBkWzBdID0geXA7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9kMy1zaGFwZS9zcmMvb2Zmc2V0L2RpdmVyZ2luZy5qc1xuLy8gbW9kdWxlIGlkID0gNjIyXG4vLyBtb2R1bGUgY2h1bmtzID0gNSIsImltcG9ydCBub25lIGZyb20gXCIuL25vbmVcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oc2VyaWVzLCBvcmRlcikge1xuICBpZiAoISgobiA9IHNlcmllcy5sZW5ndGgpID4gMCkpIHJldHVybjtcbiAgZm9yICh2YXIgaiA9IDAsIHMwID0gc2VyaWVzW29yZGVyWzBdXSwgbiwgbSA9IHMwLmxlbmd0aDsgaiA8IG07ICsraikge1xuICAgIGZvciAodmFyIGkgPSAwLCB5ID0gMDsgaSA8IG47ICsraSkgeSArPSBzZXJpZXNbaV1bal1bMV0gfHwgMDtcbiAgICBzMFtqXVsxXSArPSBzMFtqXVswXSA9IC15IC8gMjtcbiAgfVxuICBub25lKHNlcmllcywgb3JkZXIpO1xufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvZDMtc2hhcGUvc3JjL29mZnNldC9zaWxob3VldHRlLmpzXG4vLyBtb2R1bGUgaWQgPSA2MjNcbi8vIG1vZHVsZSBjaHVua3MgPSA1IiwiaW1wb3J0IG5vbmUgZnJvbSBcIi4vbm9uZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihzZXJpZXMsIG9yZGVyKSB7XG4gIGlmICghKChuID0gc2VyaWVzLmxlbmd0aCkgPiAwKSB8fCAhKChtID0gKHMwID0gc2VyaWVzW29yZGVyWzBdXSkubGVuZ3RoKSA+IDApKSByZXR1cm47XG4gIGZvciAodmFyIHkgPSAwLCBqID0gMSwgczAsIG0sIG47IGogPCBtOyArK2opIHtcbiAgICBmb3IgKHZhciBpID0gMCwgczEgPSAwLCBzMiA9IDA7IGkgPCBuOyArK2kpIHtcbiAgICAgIHZhciBzaSA9IHNlcmllc1tvcmRlcltpXV0sXG4gICAgICAgICAgc2lqMCA9IHNpW2pdWzFdIHx8IDAsXG4gICAgICAgICAgc2lqMSA9IHNpW2ogLSAxXVsxXSB8fCAwLFxuICAgICAgICAgIHMzID0gKHNpajAgLSBzaWoxKSAvIDI7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IGk7ICsraykge1xuICAgICAgICB2YXIgc2sgPSBzZXJpZXNbb3JkZXJba11dLFxuICAgICAgICAgICAgc2tqMCA9IHNrW2pdWzFdIHx8IDAsXG4gICAgICAgICAgICBza2oxID0gc2tbaiAtIDFdWzFdIHx8IDA7XG4gICAgICAgIHMzICs9IHNrajAgLSBza2oxO1xuICAgICAgfVxuICAgICAgczEgKz0gc2lqMCwgczIgKz0gczMgKiBzaWowO1xuICAgIH1cbiAgICBzMFtqIC0gMV1bMV0gKz0gczBbaiAtIDFdWzBdID0geTtcbiAgICBpZiAoczEpIHkgLT0gczIgLyBzMTtcbiAgfVxuICBzMFtqIC0gMV1bMV0gKz0gczBbaiAtIDFdWzBdID0geTtcbiAgbm9uZShzZXJpZXMsIG9yZGVyKTtcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2QzLXNoYXBlL3NyYy9vZmZzZXQvd2lnZ2xlLmpzXG4vLyBtb2R1bGUgaWQgPSA2MjRcbi8vIG1vZHVsZSBjaHVua3MgPSA1IiwiaW1wb3J0IGFzY2VuZGluZyBmcm9tIFwiLi9hc2NlbmRpbmdcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oc2VyaWVzKSB7XG4gIHJldHVybiBhc2NlbmRpbmcoc2VyaWVzKS5yZXZlcnNlKCk7XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9kMy1zaGFwZS9zcmMvb3JkZXIvZGVzY2VuZGluZy5qc1xuLy8gbW9kdWxlIGlkID0gNjI1XG4vLyBtb2R1bGUgY2h1bmtzID0gNSIsImltcG9ydCBub25lIGZyb20gXCIuL25vbmVcIjtcbmltcG9ydCB7c3VtfSBmcm9tIFwiLi9hc2NlbmRpbmdcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oc2VyaWVzKSB7XG4gIHZhciBuID0gc2VyaWVzLmxlbmd0aCxcbiAgICAgIGksXG4gICAgICBqLFxuICAgICAgc3VtcyA9IHNlcmllcy5tYXAoc3VtKSxcbiAgICAgIG9yZGVyID0gbm9uZShzZXJpZXMpLnNvcnQoZnVuY3Rpb24oYSwgYikgeyByZXR1cm4gc3Vtc1tiXSAtIHN1bXNbYV07IH0pLFxuICAgICAgdG9wID0gMCxcbiAgICAgIGJvdHRvbSA9IDAsXG4gICAgICB0b3BzID0gW10sXG4gICAgICBib3R0b21zID0gW107XG5cbiAgZm9yIChpID0gMDsgaSA8IG47ICsraSkge1xuICAgIGogPSBvcmRlcltpXTtcbiAgICBpZiAodG9wIDwgYm90dG9tKSB7XG4gICAgICB0b3AgKz0gc3Vtc1tqXTtcbiAgICAgIHRvcHMucHVzaChqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYm90dG9tICs9IHN1bXNbal07XG4gICAgICBib3R0b21zLnB1c2goaik7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGJvdHRvbXMucmV2ZXJzZSgpLmNvbmNhdCh0b3BzKTtcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2QzLXNoYXBlL3NyYy9vcmRlci9pbnNpZGVPdXQuanNcbi8vIG1vZHVsZSBpZCA9IDYyNlxuLy8gbW9kdWxlIGNodW5rcyA9IDUiLCJpbXBvcnQgbm9uZSBmcm9tIFwiLi9ub25lXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKHNlcmllcykge1xuICByZXR1cm4gbm9uZShzZXJpZXMpLnJldmVyc2UoKTtcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2QzLXNoYXBlL3NyYy9vcmRlci9yZXZlcnNlLmpzXG4vLyBtb2R1bGUgaWQgPSA2Mjdcbi8vIG1vZHVsZSBjaHVua3MgPSA1IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG5leHBvcnRzLmRlZmF1bHQgPSBQaWU7XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIF9jbGFzc25hbWVzID0gcmVxdWlyZSgnY2xhc3NuYW1lcycpO1xuXG52YXIgX2NsYXNzbmFtZXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY2xhc3NuYW1lcyk7XG5cbnZhciBfZ3JvdXAgPSByZXF1aXJlKCdAdngvZ3JvdXAnKTtcblxudmFyIF9kM1NoYXBlID0gcmVxdWlyZSgnZDMtc2hhcGUnKTtcblxudmFyIF9hZGRpdGlvbmFsUHJvcHMgPSByZXF1aXJlKCcuLi91dGlsL2FkZGl0aW9uYWxQcm9wcycpO1xuXG52YXIgX2FkZGl0aW9uYWxQcm9wczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9hZGRpdGlvbmFsUHJvcHMpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMob2JqLCBrZXlzKSB7IHZhciB0YXJnZXQgPSB7fTsgZm9yICh2YXIgaSBpbiBvYmopIHsgaWYgKGtleXMuaW5kZXhPZihpKSA+PSAwKSBjb250aW51ZTsgaWYgKCFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBpKSkgY29udGludWU7IHRhcmdldFtpXSA9IG9ialtpXTsgfSByZXR1cm4gdGFyZ2V0OyB9XG5cbmZ1bmN0aW9uIFBpZShfcmVmKSB7XG4gIHZhciBfcmVmJGNsYXNzTmFtZSA9IF9yZWYuY2xhc3NOYW1lLFxuICAgICAgY2xhc3NOYW1lID0gX3JlZiRjbGFzc05hbWUgPT09IHVuZGVmaW5lZCA/ICcnIDogX3JlZiRjbGFzc05hbWUsXG4gICAgICBfcmVmJHRvcCA9IF9yZWYudG9wLFxuICAgICAgdG9wID0gX3JlZiR0b3AgPT09IHVuZGVmaW5lZCA/IDAgOiBfcmVmJHRvcCxcbiAgICAgIF9yZWYkbGVmdCA9IF9yZWYubGVmdCxcbiAgICAgIGxlZnQgPSBfcmVmJGxlZnQgPT09IHVuZGVmaW5lZCA/IDAgOiBfcmVmJGxlZnQsXG4gICAgICBkYXRhID0gX3JlZi5kYXRhLFxuICAgICAgY2VudHJvaWQgPSBfcmVmLmNlbnRyb2lkLFxuICAgICAgX3JlZiRpbm5lclJhZGl1cyA9IF9yZWYuaW5uZXJSYWRpdXMsXG4gICAgICBpbm5lclJhZGl1cyA9IF9yZWYkaW5uZXJSYWRpdXMgPT09IHVuZGVmaW5lZCA/IDAgOiBfcmVmJGlubmVyUmFkaXVzLFxuICAgICAgb3V0ZXJSYWRpdXMgPSBfcmVmLm91dGVyUmFkaXVzLFxuICAgICAgY29ybmVyUmFkaXVzID0gX3JlZi5jb3JuZXJSYWRpdXMsXG4gICAgICBfcmVmJHN0YXJ0QW5nbGUgPSBfcmVmLnN0YXJ0QW5nbGUsXG4gICAgICBzdGFydEFuZ2xlID0gX3JlZiRzdGFydEFuZ2xlID09PSB1bmRlZmluZWQgPyAwIDogX3JlZiRzdGFydEFuZ2xlLFxuICAgICAgZW5kQW5nbGUgPSBfcmVmLmVuZEFuZ2xlLFxuICAgICAgcGFkQW5nbGUgPSBfcmVmLnBhZEFuZ2xlLFxuICAgICAgcGFkUmFkaXVzID0gX3JlZi5wYWRSYWRpdXMsXG4gICAgICBwaWVTb3J0ID0gX3JlZi5waWVTb3J0LFxuICAgICAgcGllVmFsdWUgPSBfcmVmLnBpZVZhbHVlLFxuICAgICAgcmVzdFByb3BzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKF9yZWYsIFsnY2xhc3NOYW1lJywgJ3RvcCcsICdsZWZ0JywgJ2RhdGEnLCAnY2VudHJvaWQnLCAnaW5uZXJSYWRpdXMnLCAnb3V0ZXJSYWRpdXMnLCAnY29ybmVyUmFkaXVzJywgJ3N0YXJ0QW5nbGUnLCAnZW5kQW5nbGUnLCAncGFkQW5nbGUnLCAncGFkUmFkaXVzJywgJ3BpZVNvcnQnLCAncGllVmFsdWUnXSk7XG5cbiAgdmFyIHBhdGggPSAoMCwgX2QzU2hhcGUuYXJjKSgpO1xuICBwYXRoLmlubmVyUmFkaXVzKGlubmVyUmFkaXVzKTtcbiAgaWYgKG91dGVyUmFkaXVzKSBwYXRoLm91dGVyUmFkaXVzKG91dGVyUmFkaXVzKTtcbiAgaWYgKGNvcm5lclJhZGl1cykgcGF0aC5jb3JuZXJSYWRpdXMoY29ybmVyUmFkaXVzKTtcbiAgaWYgKHBhZFJhZGl1cykgcGF0aC5wYWRSYWRpdXMocGFkUmFkaXVzKTtcbiAgdmFyIHBpZSA9ICgwLCBfZDNTaGFwZS5waWUpKCk7XG4gIGlmIChwaWVTb3J0KSBwaWUuc29ydChwaWVTb3J0KTtcbiAgaWYgKHBpZVZhbHVlKSBwaWUudmFsdWUocGllVmFsdWUpO1xuICBpZiAocGFkQW5nbGUpIHBpZS5wYWRBbmdsZShwYWRBbmdsZSk7XG4gIHZhciBhcmNzID0gcGllKGRhdGEpO1xuICByZXR1cm4gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgX2dyb3VwLkdyb3VwLFxuICAgIHsgY2xhc3NOYW1lOiAndngtcGllLWFyY3MtZ3JvdXAnLCB0b3A6IHRvcCwgbGVmdDogbGVmdCB9LFxuICAgIGFyY3MubWFwKGZ1bmN0aW9uIChhcmMsIGkpIHtcbiAgICAgIHZhciBjID0gdm9pZCAwO1xuICAgICAgaWYgKGNlbnRyb2lkKSBjID0gcGF0aC5jZW50cm9pZChhcmMpO1xuICAgICAgcmV0dXJuIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAnZycsXG4gICAgICAgIHsga2V5OiAncGllLWFyYy0nICsgaSB9LFxuICAgICAgICBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudCgncGF0aCcsIF9leHRlbmRzKHtcbiAgICAgICAgICBjbGFzc05hbWU6ICgwLCBfY2xhc3NuYW1lczIuZGVmYXVsdCkoJ3Z4LXBpZS1hcmMnLCBjbGFzc05hbWUpLFxuICAgICAgICAgIGQ6IHBhdGgoYXJjKVxuICAgICAgICB9LCAoMCwgX2FkZGl0aW9uYWxQcm9wczIuZGVmYXVsdCkocmVzdFByb3BzLCBfZXh0ZW5kcyh7fSwgYXJjLCB7XG4gICAgICAgICAgaW5kZXg6IGksXG4gICAgICAgICAgY2VudHJvaWQ6IGNcbiAgICAgICAgfSkpKSksXG4gICAgICAgIGNlbnRyb2lkICYmIGNlbnRyb2lkKGMsIGFyYylcbiAgICAgICk7XG4gICAgfSlcbiAgKTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9Adngvc2hhcGUvYnVpbGQvc2hhcGVzL1BpZS5qc1xuLy8gbW9kdWxlIGlkID0gNjI4XG4vLyBtb2R1bGUgY2h1bmtzID0gNSIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gR3JvdXA7XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIF9jbGFzc25hbWVzID0gcmVxdWlyZSgnY2xhc3NuYW1lcycpO1xuXG52YXIgX2NsYXNzbmFtZXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY2xhc3NuYW1lcyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhvYmosIGtleXMpIHsgdmFyIHRhcmdldCA9IHt9OyBmb3IgKHZhciBpIGluIG9iaikgeyBpZiAoa2V5cy5pbmRleE9mKGkpID49IDApIGNvbnRpbnVlOyBpZiAoIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGkpKSBjb250aW51ZTsgdGFyZ2V0W2ldID0gb2JqW2ldOyB9IHJldHVybiB0YXJnZXQ7IH1cblxuZnVuY3Rpb24gR3JvdXAoX3JlZikge1xuICB2YXIgX3JlZiR0b3AgPSBfcmVmLnRvcCxcbiAgICAgIHRvcCA9IF9yZWYkdG9wID09PSB1bmRlZmluZWQgPyAwIDogX3JlZiR0b3AsXG4gICAgICBfcmVmJGxlZnQgPSBfcmVmLmxlZnQsXG4gICAgICBsZWZ0ID0gX3JlZiRsZWZ0ID09PSB1bmRlZmluZWQgPyAwIDogX3JlZiRsZWZ0LFxuICAgICAgdHJhbnNmb3JtID0gX3JlZi50cmFuc2Zvcm0sXG4gICAgICBjbGFzc05hbWUgPSBfcmVmLmNsYXNzTmFtZSxcbiAgICAgIGNoaWxkcmVuID0gX3JlZi5jaGlsZHJlbixcbiAgICAgIHJlc3RQcm9wcyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhfcmVmLCBbJ3RvcCcsICdsZWZ0JywgJ3RyYW5zZm9ybScsICdjbGFzc05hbWUnLCAnY2hpbGRyZW4nXSk7XG5cbiAgcmV0dXJuIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICdnJyxcbiAgICBfZXh0ZW5kcyh7XG4gICAgICBjbGFzc05hbWU6ICgwLCBfY2xhc3NuYW1lczIuZGVmYXVsdCkoJ2N4LWdyb3VwJywgY2xhc3NOYW1lKSxcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNmb3JtIHx8ICd0cmFuc2xhdGUoJyArIGxlZnQgKyAnLCAnICsgdG9wICsgJyknXG4gICAgfSwgcmVzdFByb3BzKSxcbiAgICBjaGlsZHJlblxuICApO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL0B2eC9ncm91cC9idWlsZC9Hcm91cC5qc1xuLy8gbW9kdWxlIGlkID0gNjI5XG4vLyBtb2R1bGUgY2h1bmtzID0gNSIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gTGluZTtcblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX2NsYXNzbmFtZXMgPSByZXF1aXJlKCdjbGFzc25hbWVzJyk7XG5cbnZhciBfY2xhc3NuYW1lczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jbGFzc25hbWVzKTtcblxudmFyIF9wcm9wVHlwZXMgPSByZXF1aXJlKCdwcm9wLXR5cGVzJyk7XG5cbnZhciBfcHJvcFR5cGVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3Byb3BUeXBlcyk7XG5cbnZhciBfcG9pbnQgPSByZXF1aXJlKCdAdngvcG9pbnQnKTtcblxudmFyIF9hZGRpdGlvbmFsUHJvcHMgPSByZXF1aXJlKCcuLi91dGlsL2FkZGl0aW9uYWxQcm9wcycpO1xuXG52YXIgX2FkZGl0aW9uYWxQcm9wczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9hZGRpdGlvbmFsUHJvcHMpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMob2JqLCBrZXlzKSB7IHZhciB0YXJnZXQgPSB7fTsgZm9yICh2YXIgaSBpbiBvYmopIHsgaWYgKGtleXMuaW5kZXhPZihpKSA+PSAwKSBjb250aW51ZTsgaWYgKCFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBpKSkgY29udGludWU7IHRhcmdldFtpXSA9IG9ialtpXTsgfSByZXR1cm4gdGFyZ2V0OyB9XG5cbkxpbmUucHJvcFR5cGVzID0ge1xuICBpbm5lclJlZjogX3Byb3BUeXBlczIuZGVmYXVsdC5mdW5jXG59O1xuXG5mdW5jdGlvbiBMaW5lKF9yZWYpIHtcbiAgdmFyIF9yZWYkZnJvbSA9IF9yZWYuZnJvbSxcbiAgICAgIGZyb20gPSBfcmVmJGZyb20gPT09IHVuZGVmaW5lZCA/IG5ldyBfcG9pbnQuUG9pbnQoeyB4OiAwLCB5OiAwIH0pIDogX3JlZiRmcm9tLFxuICAgICAgX3JlZiR0byA9IF9yZWYudG8sXG4gICAgICB0byA9IF9yZWYkdG8gPT09IHVuZGVmaW5lZCA/IG5ldyBfcG9pbnQuUG9pbnQoeyB4OiAxLCB5OiAxIH0pIDogX3JlZiR0byxcbiAgICAgIF9yZWYkc3Ryb2tlID0gX3JlZi5zdHJva2UsXG4gICAgICBzdHJva2UgPSBfcmVmJHN0cm9rZSA9PT0gdW5kZWZpbmVkID8gJ2JsYWNrJyA6IF9yZWYkc3Ryb2tlLFxuICAgICAgX3JlZiRzdHJva2VXaWR0aCA9IF9yZWYuc3Ryb2tlV2lkdGgsXG4gICAgICBzdHJva2VXaWR0aCA9IF9yZWYkc3Ryb2tlV2lkdGggPT09IHVuZGVmaW5lZCA/IDEgOiBfcmVmJHN0cm9rZVdpZHRoLFxuICAgICAgX3JlZiRzdHJva2VEYXNoYXJyYXkgPSBfcmVmLnN0cm9rZURhc2hhcnJheSxcbiAgICAgIHN0cm9rZURhc2hhcnJheSA9IF9yZWYkc3Ryb2tlRGFzaGFycmF5ID09PSB1bmRlZmluZWQgPyAnJyA6IF9yZWYkc3Ryb2tlRGFzaGFycmF5LFxuICAgICAgX3JlZiR0cmFuc2Zvcm0gPSBfcmVmLnRyYW5zZm9ybSxcbiAgICAgIHRyYW5zZm9ybSA9IF9yZWYkdHJhbnNmb3JtID09PSB1bmRlZmluZWQgPyAnJyA6IF9yZWYkdHJhbnNmb3JtLFxuICAgICAgX3JlZiRjbGFzc05hbWUgPSBfcmVmLmNsYXNzTmFtZSxcbiAgICAgIGNsYXNzTmFtZSA9IF9yZWYkY2xhc3NOYW1lID09PSB1bmRlZmluZWQgPyAnJyA6IF9yZWYkY2xhc3NOYW1lLFxuICAgICAgZGF0YSA9IF9yZWYuZGF0YSxcbiAgICAgIGlubmVyUmVmID0gX3JlZi5pbm5lclJlZixcbiAgICAgIHJlc3RQcm9wcyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhfcmVmLCBbJ2Zyb20nLCAndG8nLCAnc3Ryb2tlJywgJ3N0cm9rZVdpZHRoJywgJ3N0cm9rZURhc2hhcnJheScsICd0cmFuc2Zvcm0nLCAnY2xhc3NOYW1lJywgJ2RhdGEnLCAnaW5uZXJSZWYnXSk7XG5cbiAgcmV0dXJuIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KCdsaW5lJywgX2V4dGVuZHMoe1xuICAgIHJlZjogaW5uZXJSZWYsXG4gICAgY2xhc3NOYW1lOiAoMCwgX2NsYXNzbmFtZXMyLmRlZmF1bHQpKCd2eC1saW5lJywgY2xhc3NOYW1lKSxcbiAgICB4MTogZnJvbS54LFxuICAgIHkxOiBmcm9tLnksXG4gICAgeDI6IHRvLngsXG4gICAgeTI6IHRvLnksXG4gICAgc3Ryb2tlOiBzdHJva2UsXG4gICAgc3Ryb2tlV2lkdGg6IHN0cm9rZVdpZHRoLFxuICAgIHN0cm9rZURhc2hhcnJheTogc3Ryb2tlRGFzaGFycmF5LFxuICAgIHRyYW5zZm9ybTogdHJhbnNmb3JtXG4gIH0sICgwLCBfYWRkaXRpb25hbFByb3BzMi5kZWZhdWx0KShyZXN0UHJvcHMsIGRhdGEpKSk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvQHZ4L3NoYXBlL2J1aWxkL3NoYXBlcy9MaW5lLmpzXG4vLyBtb2R1bGUgaWQgPSA2MzBcbi8vIG1vZHVsZSBjaHVua3MgPSA1IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX1BvaW50ID0gcmVxdWlyZSgnLi9Qb2ludCcpO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1BvaW50Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICByZXR1cm4gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfUG9pbnQpLmRlZmF1bHQ7XG4gIH1cbn0pO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL0B2eC9wb2ludC9idWlsZC9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gNjMxXG4vLyBtb2R1bGUgY2h1bmtzID0gNSIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSgpO1xuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG52YXIgUG9pbnQgPSBmdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIFBvaW50KF9yZWYpIHtcbiAgICB2YXIgX3JlZiR4ID0gX3JlZi54LFxuICAgICAgICB4ID0gX3JlZiR4ID09PSB1bmRlZmluZWQgPyAwIDogX3JlZiR4LFxuICAgICAgICBfcmVmJHkgPSBfcmVmLnksXG4gICAgICAgIHkgPSBfcmVmJHkgPT09IHVuZGVmaW5lZCA/IDAgOiBfcmVmJHk7XG5cbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgUG9pbnQpO1xuXG4gICAgdGhpcy54ID0geDtcbiAgICB0aGlzLnkgPSB5O1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKFBvaW50LCBbe1xuICAgIGtleTogXCJ2YWx1ZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiB2YWx1ZSgpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHg6IHRoaXMueCxcbiAgICAgICAgeTogdGhpcy55XG4gICAgICB9O1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJ0b0FycmF5XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHRvQXJyYXkoKSB7XG4gICAgICByZXR1cm4gW3RoaXMueCwgdGhpcy55XTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gUG9pbnQ7XG59KCk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IFBvaW50O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL0B2eC9wb2ludC9idWlsZC9Qb2ludC5qc1xuLy8gbW9kdWxlIGlkID0gNjMyXG4vLyBtb2R1bGUgY2h1bmtzID0gNSIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gTGluZVBhdGg7XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIF9jbGFzc25hbWVzID0gcmVxdWlyZSgnY2xhc3NuYW1lcycpO1xuXG52YXIgX2NsYXNzbmFtZXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY2xhc3NuYW1lcyk7XG5cbnZhciBfcHJvcFR5cGVzID0gcmVxdWlyZSgncHJvcC10eXBlcycpO1xuXG52YXIgX3Byb3BUeXBlczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wcm9wVHlwZXMpO1xuXG52YXIgX2QzU2hhcGUgPSByZXF1aXJlKCdkMy1zaGFwZScpO1xuXG52YXIgX2N1cnZlID0gcmVxdWlyZSgnQHZ4L2N1cnZlJyk7XG5cbnZhciBfYWRkaXRpb25hbFByb3BzID0gcmVxdWlyZSgnLi4vdXRpbC9hZGRpdGlvbmFsUHJvcHMnKTtcblxudmFyIF9hZGRpdGlvbmFsUHJvcHMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfYWRkaXRpb25hbFByb3BzKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKG9iaiwga2V5cykgeyB2YXIgdGFyZ2V0ID0ge307IGZvciAodmFyIGkgaW4gb2JqKSB7IGlmIChrZXlzLmluZGV4T2YoaSkgPj0gMCkgY29udGludWU7IGlmICghT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgaSkpIGNvbnRpbnVlOyB0YXJnZXRbaV0gPSBvYmpbaV07IH0gcmV0dXJuIHRhcmdldDsgfVxuXG5MaW5lUGF0aC5wcm9wVHlwZXMgPSB7XG4gIGlubmVyUmVmOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmZ1bmNcbn07XG5cbmZ1bmN0aW9uIExpbmVQYXRoKF9yZWYpIHtcbiAgdmFyIGRhdGEgPSBfcmVmLmRhdGEsXG4gICAgICB4U2NhbGUgPSBfcmVmLnhTY2FsZSxcbiAgICAgIHlTY2FsZSA9IF9yZWYueVNjYWxlLFxuICAgICAgeCA9IF9yZWYueCxcbiAgICAgIHkgPSBfcmVmLnksXG4gICAgICBfcmVmJGRlZmluZWQgPSBfcmVmLmRlZmluZWQsXG4gICAgICBkZWZpbmVkID0gX3JlZiRkZWZpbmVkID09PSB1bmRlZmluZWQgPyBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH0gOiBfcmVmJGRlZmluZWQsXG4gICAgICBjbGFzc05hbWUgPSBfcmVmLmNsYXNzTmFtZSxcbiAgICAgIF9yZWYkc3Ryb2tlID0gX3JlZi5zdHJva2UsXG4gICAgICBzdHJva2UgPSBfcmVmJHN0cm9rZSA9PT0gdW5kZWZpbmVkID8gJ3N0ZWVsYmx1ZScgOiBfcmVmJHN0cm9rZSxcbiAgICAgIF9yZWYkc3Ryb2tlV2lkdGggPSBfcmVmLnN0cm9rZVdpZHRoLFxuICAgICAgc3Ryb2tlV2lkdGggPSBfcmVmJHN0cm9rZVdpZHRoID09PSB1bmRlZmluZWQgPyAyIDogX3JlZiRzdHJva2VXaWR0aCxcbiAgICAgIF9yZWYkc3Ryb2tlRGFzaGFycmF5ID0gX3JlZi5zdHJva2VEYXNoYXJyYXksXG4gICAgICBzdHJva2VEYXNoYXJyYXkgPSBfcmVmJHN0cm9rZURhc2hhcnJheSA9PT0gdW5kZWZpbmVkID8gJycgOiBfcmVmJHN0cm9rZURhc2hhcnJheSxcbiAgICAgIF9yZWYkc3Ryb2tlRGFzaG9mZnNldCA9IF9yZWYuc3Ryb2tlRGFzaG9mZnNldCxcbiAgICAgIHN0cm9rZURhc2hvZmZzZXQgPSBfcmVmJHN0cm9rZURhc2hvZmZzZXQgPT09IHVuZGVmaW5lZCA/IDAgOiBfcmVmJHN0cm9rZURhc2hvZmZzZXQsXG4gICAgICBfcmVmJGZpbGwgPSBfcmVmLmZpbGwsXG4gICAgICBmaWxsID0gX3JlZiRmaWxsID09PSB1bmRlZmluZWQgPyAnbm9uZScgOiBfcmVmJGZpbGwsXG4gICAgICBfcmVmJGN1cnZlID0gX3JlZi5jdXJ2ZSxcbiAgICAgIGN1cnZlID0gX3JlZiRjdXJ2ZSA9PT0gdW5kZWZpbmVkID8gX2N1cnZlLmN1cnZlTGluZWFyIDogX3JlZiRjdXJ2ZSxcbiAgICAgIGdseXBoID0gX3JlZi5nbHlwaCxcbiAgICAgIGlubmVyUmVmID0gX3JlZi5pbm5lclJlZixcbiAgICAgIHJlc3RQcm9wcyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhfcmVmLCBbJ2RhdGEnLCAneFNjYWxlJywgJ3lTY2FsZScsICd4JywgJ3knLCAnZGVmaW5lZCcsICdjbGFzc05hbWUnLCAnc3Ryb2tlJywgJ3N0cm9rZVdpZHRoJywgJ3N0cm9rZURhc2hhcnJheScsICdzdHJva2VEYXNob2Zmc2V0JywgJ2ZpbGwnLCAnY3VydmUnLCAnZ2x5cGgnLCAnaW5uZXJSZWYnXSk7XG5cbiAgdmFyIHBhdGggPSAoMCwgX2QzU2hhcGUubGluZSkoKS54KGZ1bmN0aW9uIChkKSB7XG4gICAgcmV0dXJuIHhTY2FsZSh4KGQpKTtcbiAgfSkueShmdW5jdGlvbiAoZCkge1xuICAgIHJldHVybiB5U2NhbGUoeShkKSk7XG4gIH0pLmRlZmluZWQoZGVmaW5lZCkuY3VydmUoY3VydmUpO1xuICByZXR1cm4gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgJ2cnLFxuICAgIG51bGwsXG4gICAgX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoJ3BhdGgnLCBfZXh0ZW5kcyh7XG4gICAgICByZWY6IGlubmVyUmVmLFxuICAgICAgY2xhc3NOYW1lOiAoMCwgX2NsYXNzbmFtZXMyLmRlZmF1bHQpKCd2eC1saW5lcGF0aCcsIGNsYXNzTmFtZSksXG4gICAgICBkOiBwYXRoKGRhdGEpLFxuICAgICAgc3Ryb2tlOiBzdHJva2UsXG4gICAgICBzdHJva2VXaWR0aDogc3Ryb2tlV2lkdGgsXG4gICAgICBzdHJva2VEYXNoYXJyYXk6IHN0cm9rZURhc2hhcnJheSxcbiAgICAgIHN0cm9rZURhc2hvZmZzZXQ6IHN0cm9rZURhc2hvZmZzZXQsXG4gICAgICBmaWxsOiBmaWxsXG4gICAgfSwgKDAsIF9hZGRpdGlvbmFsUHJvcHMyLmRlZmF1bHQpKHJlc3RQcm9wcywgZGF0YSkpKSxcbiAgICBnbHlwaCAmJiBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICdnJyxcbiAgICAgIHsgY2xhc3NOYW1lOiAndngtbGluZXBhdGgtZ2x5cGhzJyB9LFxuICAgICAgZGF0YS5tYXAoZ2x5cGgpXG4gICAgKVxuICApO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL0B2eC9zaGFwZS9idWlsZC9zaGFwZXMvTGluZVBhdGguanNcbi8vIG1vZHVsZSBpZCA9IDYzM1xuLy8gbW9kdWxlIGNodW5rcyA9IDUiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfZDNTaGFwZSA9IHJlcXVpcmUoJ2QzLXNoYXBlJyk7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3VydmVCYXNpcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgcmV0dXJuIF9kM1NoYXBlLmN1cnZlQmFzaXM7XG4gIH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjdXJ2ZUJhc2lzQ2xvc2VkJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICByZXR1cm4gX2QzU2hhcGUuY3VydmVCYXNpc0Nsb3NlZDtcbiAgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2N1cnZlQmFzaXNPcGVuJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICByZXR1cm4gX2QzU2hhcGUuY3VydmVCYXNpc09wZW47XG4gIH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjdXJ2ZVN0ZXAnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgIHJldHVybiBfZDNTaGFwZS5jdXJ2ZVN0ZXA7XG4gIH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjdXJ2ZVN0ZXBBZnRlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgcmV0dXJuIF9kM1NoYXBlLmN1cnZlU3RlcEFmdGVyO1xuICB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3VydmVTdGVwQmVmb3JlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICByZXR1cm4gX2QzU2hhcGUuY3VydmVTdGVwQmVmb3JlO1xuICB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3VydmVCdW5kbGUnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgIHJldHVybiBfZDNTaGFwZS5jdXJ2ZUJ1bmRsZTtcbiAgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2N1cnZlTGluZWFyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICByZXR1cm4gX2QzU2hhcGUuY3VydmVMaW5lYXI7XG4gIH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjdXJ2ZUxpbmVhckNsb3NlZCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgcmV0dXJuIF9kM1NoYXBlLmN1cnZlTGluZWFyQ2xvc2VkO1xuICB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3VydmVDYXJkaW5hbCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgcmV0dXJuIF9kM1NoYXBlLmN1cnZlQ2FyZGluYWw7XG4gIH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjdXJ2ZUNhcmRpbmFsQ2xvc2VkJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICByZXR1cm4gX2QzU2hhcGUuY3VydmVDYXJkaW5hbENsb3NlZDtcbiAgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2N1cnZlQ2FyZGluYWxPcGVuJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICByZXR1cm4gX2QzU2hhcGUuY3VydmVDYXJkaW5hbE9wZW47XG4gIH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjdXJ2ZUNhdG11bGxSb20nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgIHJldHVybiBfZDNTaGFwZS5jdXJ2ZUNhdG11bGxSb207XG4gIH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjdXJ2ZUNhdG11bGxSb21DbG9zZWQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgIHJldHVybiBfZDNTaGFwZS5jdXJ2ZUNhdG11bGxSb21DbG9zZWQ7XG4gIH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjdXJ2ZUNhdG11bGxSb21PcGVuJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICByZXR1cm4gX2QzU2hhcGUuY3VydmVDYXRtdWxsUm9tT3BlbjtcbiAgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2N1cnZlTW9ub3RvbmVYJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICByZXR1cm4gX2QzU2hhcGUuY3VydmVNb25vdG9uZVg7XG4gIH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjdXJ2ZU1vbm90b25lWScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgcmV0dXJuIF9kM1NoYXBlLmN1cnZlTW9ub3RvbmVZO1xuICB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3VydmVOYXR1cmFsJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICByZXR1cm4gX2QzU2hhcGUuY3VydmVOYXR1cmFsO1xuICB9XG59KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9AdngvY3VydmUvYnVpbGQvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDYzNFxuLy8gbW9kdWxlIGNodW5rcyA9IDUiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IExpbmVSYWRpYWw7XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIF9jbGFzc25hbWVzID0gcmVxdWlyZSgnY2xhc3NuYW1lcycpO1xuXG52YXIgX2NsYXNzbmFtZXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY2xhc3NuYW1lcyk7XG5cbnZhciBfcHJvcFR5cGVzID0gcmVxdWlyZSgncHJvcC10eXBlcycpO1xuXG52YXIgX3Byb3BUeXBlczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wcm9wVHlwZXMpO1xuXG52YXIgX2QzU2hhcGUgPSByZXF1aXJlKCdkMy1zaGFwZScpO1xuXG52YXIgX2FkZGl0aW9uYWxQcm9wcyA9IHJlcXVpcmUoJy4uL3V0aWwvYWRkaXRpb25hbFByb3BzJyk7XG5cbnZhciBfYWRkaXRpb25hbFByb3BzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2FkZGl0aW9uYWxQcm9wcyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhvYmosIGtleXMpIHsgdmFyIHRhcmdldCA9IHt9OyBmb3IgKHZhciBpIGluIG9iaikgeyBpZiAoa2V5cy5pbmRleE9mKGkpID49IDApIGNvbnRpbnVlOyBpZiAoIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGkpKSBjb250aW51ZTsgdGFyZ2V0W2ldID0gb2JqW2ldOyB9IHJldHVybiB0YXJnZXQ7IH1cblxuTGluZVJhZGlhbC5wcm9wVHlwZXMgPSB7XG4gIGlubmVyUmVmOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmZ1bmNcbn07XG5cbmZ1bmN0aW9uIExpbmVSYWRpYWwoX3JlZikge1xuICB2YXIgX3JlZiRjbGFzc05hbWUgPSBfcmVmLmNsYXNzTmFtZSxcbiAgICAgIGNsYXNzTmFtZSA9IF9yZWYkY2xhc3NOYW1lID09PSB1bmRlZmluZWQgPyAnJyA6IF9yZWYkY2xhc3NOYW1lLFxuICAgICAgYW5nbGUgPSBfcmVmLmFuZ2xlLFxuICAgICAgcmFkaXVzID0gX3JlZi5yYWRpdXMsXG4gICAgICBkZWZpbmVkID0gX3JlZi5kZWZpbmVkLFxuICAgICAgY3VydmUgPSBfcmVmLmN1cnZlLFxuICAgICAgZGF0YSA9IF9yZWYuZGF0YSxcbiAgICAgIGlubmVyUmVmID0gX3JlZi5pbm5lclJlZixcbiAgICAgIHJlc3RQcm9wcyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhfcmVmLCBbJ2NsYXNzTmFtZScsICdhbmdsZScsICdyYWRpdXMnLCAnZGVmaW5lZCcsICdjdXJ2ZScsICdkYXRhJywgJ2lubmVyUmVmJ10pO1xuXG4gIHZhciBwYXRoID0gKDAsIF9kM1NoYXBlLnJhZGlhbExpbmUpKCk7XG4gIGlmIChhbmdsZSkgcGF0aC5hbmdsZShhbmdsZSk7XG4gIGlmIChyYWRpdXMpIHBhdGgucmFkaXVzKHJhZGl1cyk7XG4gIGlmIChkZWZpbmVkKSBwYXRoLmRlZmluZWQoZGVmaW5lZCk7XG4gIGlmIChjdXJ2ZSkgcGF0aC5jdXJ2ZShjdXJ2ZSk7XG4gIHJldHVybiBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAnZycsXG4gICAgbnVsbCxcbiAgICBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudCgncGF0aCcsIF9leHRlbmRzKHtcbiAgICAgIHJlZjogaW5uZXJSZWYsXG4gICAgICBjbGFzc05hbWU6ICgwLCBfY2xhc3NuYW1lczIuZGVmYXVsdCkoJ3Z4LWxpbmUtcmFkaWFsJywgY2xhc3NOYW1lKSxcbiAgICAgIGQ6IHBhdGgoZGF0YSlcbiAgICB9LCAoMCwgX2FkZGl0aW9uYWxQcm9wczIuZGVmYXVsdCkocmVzdFByb3BzLCBkYXRhKSkpXG4gICk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvQHZ4L3NoYXBlL2J1aWxkL3NoYXBlcy9MaW5lUmFkaWFsLmpzXG4vLyBtb2R1bGUgaWQgPSA2MzVcbi8vIG1vZHVsZSBjaHVua3MgPSA1IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG5leHBvcnRzLmRlZmF1bHQgPSBMaW5rSG9yaXpvbnRhbDtcblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX2NsYXNzbmFtZXMgPSByZXF1aXJlKCdjbGFzc25hbWVzJyk7XG5cbnZhciBfY2xhc3NuYW1lczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jbGFzc25hbWVzKTtcblxudmFyIF9wcm9wVHlwZXMgPSByZXF1aXJlKCdwcm9wLXR5cGVzJyk7XG5cbnZhciBfcHJvcFR5cGVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3Byb3BUeXBlcyk7XG5cbnZhciBfZDNTaGFwZSA9IHJlcXVpcmUoJ2QzLXNoYXBlJyk7XG5cbnZhciBfYWRkaXRpb25hbFByb3BzID0gcmVxdWlyZSgnLi4vLi4vLi4vdXRpbC9hZGRpdGlvbmFsUHJvcHMnKTtcblxudmFyIF9hZGRpdGlvbmFsUHJvcHMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfYWRkaXRpb25hbFByb3BzKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKG9iaiwga2V5cykgeyB2YXIgdGFyZ2V0ID0ge307IGZvciAodmFyIGkgaW4gb2JqKSB7IGlmIChrZXlzLmluZGV4T2YoaSkgPj0gMCkgY29udGludWU7IGlmICghT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgaSkpIGNvbnRpbnVlOyB0YXJnZXRbaV0gPSBvYmpbaV07IH0gcmV0dXJuIHRhcmdldDsgfVxuXG5MaW5rSG9yaXpvbnRhbC5wcm9wVHlwZXMgPSB7XG4gIGlubmVyUmVmOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmZ1bmNcbn07XG5cbmZ1bmN0aW9uIExpbmtIb3Jpem9udGFsKF9yZWYpIHtcbiAgdmFyIGNsYXNzTmFtZSA9IF9yZWYuY2xhc3NOYW1lLFxuICAgICAgaW5uZXJSZWYgPSBfcmVmLmlubmVyUmVmLFxuICAgICAgZGF0YSA9IF9yZWYuZGF0YSxcbiAgICAgIF9yZWYkeCA9IF9yZWYueCxcbiAgICAgIHggPSBfcmVmJHggPT09IHVuZGVmaW5lZCA/IGZ1bmN0aW9uIChkKSB7XG4gICAgcmV0dXJuIGQueTtcbiAgfSA6IF9yZWYkeCxcbiAgICAgIF9yZWYkeSA9IF9yZWYueSxcbiAgICAgIHkgPSBfcmVmJHkgPT09IHVuZGVmaW5lZCA/IGZ1bmN0aW9uIChkKSB7XG4gICAgcmV0dXJuIGQueDtcbiAgfSA6IF9yZWYkeSxcbiAgICAgIHJlc3RQcm9wcyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhfcmVmLCBbJ2NsYXNzTmFtZScsICdpbm5lclJlZicsICdkYXRhJywgJ3gnLCAneSddKTtcblxuICB2YXIgbGluayA9ICgwLCBfZDNTaGFwZS5saW5rSG9yaXpvbnRhbCkoKTtcbiAgbGluay54KHgpO1xuICBsaW5rLnkoeSk7XG4gIHJldHVybiBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudCgncGF0aCcsIF9leHRlbmRzKHtcbiAgICByZWY6IGlubmVyUmVmLFxuICAgIGNsYXNzTmFtZTogKDAsIF9jbGFzc25hbWVzMi5kZWZhdWx0KSgndngtbGluay1ob3Jpem9udGFsJywgY2xhc3NOYW1lKSxcbiAgICBkOiBsaW5rKGRhdGEpXG4gIH0sICgwLCBfYWRkaXRpb25hbFByb3BzMi5kZWZhdWx0KShyZXN0UHJvcHMsIGRhdGEpKSk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvQHZ4L3NoYXBlL2J1aWxkL3NoYXBlcy9saW5rL2RpYWdvbmFsL0xpbmtIb3Jpem9udGFsLmpzXG4vLyBtb2R1bGUgaWQgPSA2MzZcbi8vIG1vZHVsZSBjaHVua3MgPSA1IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG5leHBvcnRzLmRlZmF1bHQgPSBMaW5rVmVydGljYWw7XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIF9jbGFzc25hbWVzID0gcmVxdWlyZSgnY2xhc3NuYW1lcycpO1xuXG52YXIgX2NsYXNzbmFtZXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY2xhc3NuYW1lcyk7XG5cbnZhciBfcHJvcFR5cGVzID0gcmVxdWlyZSgncHJvcC10eXBlcycpO1xuXG52YXIgX3Byb3BUeXBlczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wcm9wVHlwZXMpO1xuXG52YXIgX2QzU2hhcGUgPSByZXF1aXJlKCdkMy1zaGFwZScpO1xuXG52YXIgX2FkZGl0aW9uYWxQcm9wcyA9IHJlcXVpcmUoJy4uLy4uLy4uL3V0aWwvYWRkaXRpb25hbFByb3BzJyk7XG5cbnZhciBfYWRkaXRpb25hbFByb3BzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2FkZGl0aW9uYWxQcm9wcyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhvYmosIGtleXMpIHsgdmFyIHRhcmdldCA9IHt9OyBmb3IgKHZhciBpIGluIG9iaikgeyBpZiAoa2V5cy5pbmRleE9mKGkpID49IDApIGNvbnRpbnVlOyBpZiAoIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGkpKSBjb250aW51ZTsgdGFyZ2V0W2ldID0gb2JqW2ldOyB9IHJldHVybiB0YXJnZXQ7IH1cblxuTGlua1ZlcnRpY2FsLnByb3BUeXBlcyA9IHtcbiAgaW5uZXJSZWY6IF9wcm9wVHlwZXMyLmRlZmF1bHQuZnVuY1xufTtcblxuZnVuY3Rpb24gTGlua1ZlcnRpY2FsKF9yZWYpIHtcbiAgdmFyIGNsYXNzTmFtZSA9IF9yZWYuY2xhc3NOYW1lLFxuICAgICAgaW5uZXJSZWYgPSBfcmVmLmlubmVyUmVmLFxuICAgICAgZGF0YSA9IF9yZWYuZGF0YSxcbiAgICAgIF9yZWYkeCA9IF9yZWYueCxcbiAgICAgIHggPSBfcmVmJHggPT09IHVuZGVmaW5lZCA/IGZ1bmN0aW9uIChkKSB7XG4gICAgcmV0dXJuIGQueDtcbiAgfSA6IF9yZWYkeCxcbiAgICAgIF9yZWYkeSA9IF9yZWYueSxcbiAgICAgIHkgPSBfcmVmJHkgPT09IHVuZGVmaW5lZCA/IGZ1bmN0aW9uIChkKSB7XG4gICAgcmV0dXJuIGQueTtcbiAgfSA6IF9yZWYkeSxcbiAgICAgIHJlc3RQcm9wcyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhfcmVmLCBbJ2NsYXNzTmFtZScsICdpbm5lclJlZicsICdkYXRhJywgJ3gnLCAneSddKTtcblxuICB2YXIgbGluayA9ICgwLCBfZDNTaGFwZS5saW5rVmVydGljYWwpKCk7XG4gIGxpbmsueCh4KTtcbiAgbGluay55KHkpO1xuICByZXR1cm4gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoJ3BhdGgnLCBfZXh0ZW5kcyh7XG4gICAgcmVmOiBpbm5lclJlZixcbiAgICBjbGFzc05hbWU6ICgwLCBfY2xhc3NuYW1lczIuZGVmYXVsdCkoJ3Z4LWxpbmstdmVydGljYWwnLCBjbGFzc05hbWUpLFxuICAgIGQ6IGxpbmsoZGF0YSlcbiAgfSwgKDAsIF9hZGRpdGlvbmFsUHJvcHMyLmRlZmF1bHQpKHJlc3RQcm9wcywgZGF0YSkpKTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9Adngvc2hhcGUvYnVpbGQvc2hhcGVzL2xpbmsvZGlhZ29uYWwvTGlua1ZlcnRpY2FsLmpzXG4vLyBtb2R1bGUgaWQgPSA2Mzdcbi8vIG1vZHVsZSBjaHVua3MgPSA1IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG5leHBvcnRzLmRlZmF1bHQgPSBMaW5rUmFkaWFsO1xuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfY2xhc3NuYW1lcyA9IHJlcXVpcmUoJ2NsYXNzbmFtZXMnKTtcblxudmFyIF9jbGFzc25hbWVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NsYXNzbmFtZXMpO1xuXG52YXIgX3Byb3BUeXBlcyA9IHJlcXVpcmUoJ3Byb3AtdHlwZXMnKTtcblxudmFyIF9wcm9wVHlwZXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcHJvcFR5cGVzKTtcblxudmFyIF9kM1NoYXBlID0gcmVxdWlyZSgnZDMtc2hhcGUnKTtcblxudmFyIF9hZGRpdGlvbmFsUHJvcHMgPSByZXF1aXJlKCcuLi8uLi8uLi91dGlsL2FkZGl0aW9uYWxQcm9wcycpO1xuXG52YXIgX2FkZGl0aW9uYWxQcm9wczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9hZGRpdGlvbmFsUHJvcHMpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMob2JqLCBrZXlzKSB7IHZhciB0YXJnZXQgPSB7fTsgZm9yICh2YXIgaSBpbiBvYmopIHsgaWYgKGtleXMuaW5kZXhPZihpKSA+PSAwKSBjb250aW51ZTsgaWYgKCFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBpKSkgY29udGludWU7IHRhcmdldFtpXSA9IG9ialtpXTsgfSByZXR1cm4gdGFyZ2V0OyB9XG5cbkxpbmtSYWRpYWwucHJvcFR5cGVzID0ge1xuICBpbm5lclJlZjogX3Byb3BUeXBlczIuZGVmYXVsdC5mdW5jXG59O1xuXG5mdW5jdGlvbiBMaW5rUmFkaWFsKF9yZWYpIHtcbiAgdmFyIGNsYXNzTmFtZSA9IF9yZWYuY2xhc3NOYW1lLFxuICAgICAgaW5uZXJSZWYgPSBfcmVmLmlubmVyUmVmLFxuICAgICAgZGF0YSA9IF9yZWYuZGF0YSxcbiAgICAgIF9yZWYkYW5nbGUgPSBfcmVmLmFuZ2xlLFxuICAgICAgYW5nbGUgPSBfcmVmJGFuZ2xlID09PSB1bmRlZmluZWQgPyBmdW5jdGlvbiAoZCkge1xuICAgIHJldHVybiBkLng7XG4gIH0gOiBfcmVmJGFuZ2xlLFxuICAgICAgX3JlZiRyYWRpdXMgPSBfcmVmLnJhZGl1cyxcbiAgICAgIHJhZGl1cyA9IF9yZWYkcmFkaXVzID09PSB1bmRlZmluZWQgPyBmdW5jdGlvbiAoZCkge1xuICAgIHJldHVybiBkLnk7XG4gIH0gOiBfcmVmJHJhZGl1cyxcbiAgICAgIHJlc3RQcm9wcyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhfcmVmLCBbJ2NsYXNzTmFtZScsICdpbm5lclJlZicsICdkYXRhJywgJ2FuZ2xlJywgJ3JhZGl1cyddKTtcblxuICB2YXIgbGluayA9ICgwLCBfZDNTaGFwZS5saW5rUmFkaWFsKSgpO1xuICBsaW5rLmFuZ2xlKGFuZ2xlKTtcbiAgbGluay5yYWRpdXMocmFkaXVzKTtcbiAgcmV0dXJuIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KCdwYXRoJywgX2V4dGVuZHMoe1xuICAgIHJlZjogaW5uZXJSZWYsXG4gICAgY2xhc3NOYW1lOiAoMCwgX2NsYXNzbmFtZXMyLmRlZmF1bHQpKCd2eC1saW5rLXJhZGl1cycsIGNsYXNzTmFtZSksXG4gICAgZDogbGluayhkYXRhKVxuICB9LCAoMCwgX2FkZGl0aW9uYWxQcm9wczIuZGVmYXVsdCkocmVzdFByb3BzLCBkYXRhKSkpO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL0B2eC9zaGFwZS9idWlsZC9zaGFwZXMvbGluay9kaWFnb25hbC9MaW5rUmFkaWFsLmpzXG4vLyBtb2R1bGUgaWQgPSA2Mzhcbi8vIG1vZHVsZSBjaHVua3MgPSA1IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG5leHBvcnRzLmRlZmF1bHQgPSBMaW5rSG9yaXpvbnRhbEN1cnZlO1xuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfY2xhc3NuYW1lcyA9IHJlcXVpcmUoJ2NsYXNzbmFtZXMnKTtcblxudmFyIF9jbGFzc25hbWVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NsYXNzbmFtZXMpO1xuXG52YXIgX3Byb3BUeXBlcyA9IHJlcXVpcmUoJ3Byb3AtdHlwZXMnKTtcblxudmFyIF9wcm9wVHlwZXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcHJvcFR5cGVzKTtcblxudmFyIF9kM1NoYXBlID0gcmVxdWlyZSgnZDMtc2hhcGUnKTtcblxudmFyIF9hZGRpdGlvbmFsUHJvcHMgPSByZXF1aXJlKCcuLi8uLi8uLi91dGlsL2FkZGl0aW9uYWxQcm9wcycpO1xuXG52YXIgX2FkZGl0aW9uYWxQcm9wczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9hZGRpdGlvbmFsUHJvcHMpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMob2JqLCBrZXlzKSB7IHZhciB0YXJnZXQgPSB7fTsgZm9yICh2YXIgaSBpbiBvYmopIHsgaWYgKGtleXMuaW5kZXhPZihpKSA+PSAwKSBjb250aW51ZTsgaWYgKCFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBpKSkgY29udGludWU7IHRhcmdldFtpXSA9IG9ialtpXTsgfSByZXR1cm4gdGFyZ2V0OyB9XG5cbkxpbmtIb3Jpem9udGFsQ3VydmUucHJvcFR5cGVzID0ge1xuICBpbm5lclJlZjogX3Byb3BUeXBlczIuZGVmYXVsdC5mdW5jXG59O1xuXG5mdW5jdGlvbiBMaW5rSG9yaXpvbnRhbEN1cnZlKF9yZWYpIHtcbiAgdmFyIGNsYXNzTmFtZSA9IF9yZWYuY2xhc3NOYW1lLFxuICAgICAgaW5uZXJSZWYgPSBfcmVmLmlubmVyUmVmLFxuICAgICAgZGF0YSA9IF9yZWYuZGF0YSxcbiAgICAgIF9yZWYkeCA9IF9yZWYueCxcbiAgICAgIHggPSBfcmVmJHggPT09IHVuZGVmaW5lZCA/IGZ1bmN0aW9uIChkKSB7XG4gICAgcmV0dXJuIGQueTtcbiAgfSA6IF9yZWYkeCxcbiAgICAgIF9yZWYkeSA9IF9yZWYueSxcbiAgICAgIHkgPSBfcmVmJHkgPT09IHVuZGVmaW5lZCA/IGZ1bmN0aW9uIChkKSB7XG4gICAgcmV0dXJuIGQueDtcbiAgfSA6IF9yZWYkeSxcbiAgICAgIHJlc3RQcm9wcyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhfcmVmLCBbJ2NsYXNzTmFtZScsICdpbm5lclJlZicsICdkYXRhJywgJ3gnLCAneSddKTtcblxuICB2YXIgY3VydmUgPSBmdW5jdGlvbiBjdXJ2ZShzb3VyY2UsIHRhcmdldCkge1xuICAgIHZhciBzeCA9IHgoc291cmNlKTtcbiAgICB2YXIgc3kgPSB5KHNvdXJjZSk7XG4gICAgdmFyIHR4ID0geCh0YXJnZXQpO1xuICAgIHZhciB0eSA9IHkodGFyZ2V0KTtcblxuICAgIHZhciBkeCA9IHR4IC0gc3g7XG4gICAgdmFyIGR5ID0gdHkgLSBzeTtcbiAgICB2YXIgaXggPSAwLjIgKiAoZHggKyBkeSk7XG4gICAgdmFyIGl5ID0gMC4yICogKGR5IC0gZHgpO1xuXG4gICAgcmV0dXJuICdNJyArIHN4ICsgJywnICsgc3kgKyAnXFxuICAgICAgQycgKyAoc3ggKyBpeCkgKyAnLCcgKyAoc3kgKyBpeSkgKyAnXFxuICAgICAgJyArICh0eCArIGl5KSArICcsJyArICh0eSAtIGl4KSArICdcXG4gICAgICAnICsgdHggKyAnLCcgKyB0eSArICdcXG4gICAgJztcbiAgfTtcblxuICByZXR1cm4gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoJ3BhdGgnLCBfZXh0ZW5kcyh7XG4gICAgcmVmOiBpbm5lclJlZixcbiAgICBjbGFzc05hbWU6ICgwLCBfY2xhc3NuYW1lczIuZGVmYXVsdCkoJ3Z4LWxpbmsnLCBjbGFzc05hbWUpLFxuICAgIGQ6IGN1cnZlKGRhdGEuc291cmNlLCBkYXRhLnRhcmdldClcbiAgfSwgcmVzdFByb3BzKSk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvQHZ4L3NoYXBlL2J1aWxkL3NoYXBlcy9saW5rL2N1cnZlL0xpbmtIb3Jpem9udGFsQ3VydmUuanNcbi8vIG1vZHVsZSBpZCA9IDYzOVxuLy8gbW9kdWxlIGNodW5rcyA9IDUiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IExpbmtWZXJ0aWNhbEN1cnZlO1xuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfY2xhc3NuYW1lcyA9IHJlcXVpcmUoJ2NsYXNzbmFtZXMnKTtcblxudmFyIF9jbGFzc25hbWVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NsYXNzbmFtZXMpO1xuXG52YXIgX3Byb3BUeXBlcyA9IHJlcXVpcmUoJ3Byb3AtdHlwZXMnKTtcblxudmFyIF9wcm9wVHlwZXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcHJvcFR5cGVzKTtcblxudmFyIF9kM1NoYXBlID0gcmVxdWlyZSgnZDMtc2hhcGUnKTtcblxudmFyIF9hZGRpdGlvbmFsUHJvcHMgPSByZXF1aXJlKCcuLi8uLi8uLi91dGlsL2FkZGl0aW9uYWxQcm9wcycpO1xuXG52YXIgX2FkZGl0aW9uYWxQcm9wczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9hZGRpdGlvbmFsUHJvcHMpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMob2JqLCBrZXlzKSB7IHZhciB0YXJnZXQgPSB7fTsgZm9yICh2YXIgaSBpbiBvYmopIHsgaWYgKGtleXMuaW5kZXhPZihpKSA+PSAwKSBjb250aW51ZTsgaWYgKCFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBpKSkgY29udGludWU7IHRhcmdldFtpXSA9IG9ialtpXTsgfSByZXR1cm4gdGFyZ2V0OyB9XG5cbkxpbmtWZXJ0aWNhbEN1cnZlLnByb3BUeXBlcyA9IHtcbiAgaW5uZXJSZWY6IF9wcm9wVHlwZXMyLmRlZmF1bHQuZnVuY1xufTtcblxuZnVuY3Rpb24gTGlua1ZlcnRpY2FsQ3VydmUoX3JlZikge1xuICB2YXIgY2xhc3NOYW1lID0gX3JlZi5jbGFzc05hbWUsXG4gICAgICBpbm5lclJlZiA9IF9yZWYuaW5uZXJSZWYsXG4gICAgICBkYXRhID0gX3JlZi5kYXRhLFxuICAgICAgX3JlZiR4ID0gX3JlZi54LFxuICAgICAgeCA9IF9yZWYkeCA9PT0gdW5kZWZpbmVkID8gZnVuY3Rpb24gKGQpIHtcbiAgICByZXR1cm4gZC54O1xuICB9IDogX3JlZiR4LFxuICAgICAgX3JlZiR5ID0gX3JlZi55LFxuICAgICAgeSA9IF9yZWYkeSA9PT0gdW5kZWZpbmVkID8gZnVuY3Rpb24gKGQpIHtcbiAgICByZXR1cm4gZC55O1xuICB9IDogX3JlZiR5LFxuICAgICAgcmVzdFByb3BzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKF9yZWYsIFsnY2xhc3NOYW1lJywgJ2lubmVyUmVmJywgJ2RhdGEnLCAneCcsICd5J10pO1xuXG4gIHZhciBjdXJ2ZSA9IGZ1bmN0aW9uIGN1cnZlKHNvdXJjZSwgdGFyZ2V0KSB7XG4gICAgdmFyIHN4ID0geChzb3VyY2UpO1xuICAgIHZhciBzeSA9IHkoc291cmNlKTtcbiAgICB2YXIgdHggPSB4KHRhcmdldCk7XG4gICAgdmFyIHR5ID0geSh0YXJnZXQpO1xuXG4gICAgdmFyIGR4ID0gdHggLSBzeDtcbiAgICB2YXIgZHkgPSB0eSAtIHN5O1xuICAgIHZhciBpeCA9IDAuMiAqIChkeCArIGR5KTtcbiAgICB2YXIgaXkgPSAwLjIgKiAoZHkgLSBkeCk7XG5cbiAgICByZXR1cm4gJ00nICsgc3ggKyAnLCcgKyBzeSArICdcXG4gICAgICBDJyArIChzeCArIGl4KSArICcsJyArIChzeSArIGl5KSArICdcXG4gICAgICAnICsgKHR4ICsgaXkpICsgJywnICsgKHR5IC0gaXgpICsgJ1xcbiAgICAgICcgKyB0eCArICcsJyArIHR5ICsgJ1xcbiAgICAnO1xuICB9O1xuXG4gIHJldHVybiBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudCgncGF0aCcsIF9leHRlbmRzKHtcbiAgICByZWY6IGlubmVyUmVmLFxuICAgIGNsYXNzTmFtZTogKDAsIF9jbGFzc25hbWVzMi5kZWZhdWx0KSgndngtbGluaycsIGNsYXNzTmFtZSksXG4gICAgZDogY3VydmUoZGF0YS5zb3VyY2UsIGRhdGEudGFyZ2V0KVxuICB9LCByZXN0UHJvcHMpKTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9Adngvc2hhcGUvYnVpbGQvc2hhcGVzL2xpbmsvY3VydmUvTGlua1ZlcnRpY2FsQ3VydmUuanNcbi8vIG1vZHVsZSBpZCA9IDY0MFxuLy8gbW9kdWxlIGNodW5rcyA9IDUiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IExpbmtSYWRpYWxDdXJ2ZTtcblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX2NsYXNzbmFtZXMgPSByZXF1aXJlKCdjbGFzc25hbWVzJyk7XG5cbnZhciBfY2xhc3NuYW1lczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jbGFzc25hbWVzKTtcblxudmFyIF9wcm9wVHlwZXMgPSByZXF1aXJlKCdwcm9wLXR5cGVzJyk7XG5cbnZhciBfcHJvcFR5cGVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3Byb3BUeXBlcyk7XG5cbnZhciBfZDNTaGFwZSA9IHJlcXVpcmUoJ2QzLXNoYXBlJyk7XG5cbnZhciBfYWRkaXRpb25hbFByb3BzID0gcmVxdWlyZSgnLi4vLi4vLi4vdXRpbC9hZGRpdGlvbmFsUHJvcHMnKTtcblxudmFyIF9hZGRpdGlvbmFsUHJvcHMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfYWRkaXRpb25hbFByb3BzKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKG9iaiwga2V5cykgeyB2YXIgdGFyZ2V0ID0ge307IGZvciAodmFyIGkgaW4gb2JqKSB7IGlmIChrZXlzLmluZGV4T2YoaSkgPj0gMCkgY29udGludWU7IGlmICghT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgaSkpIGNvbnRpbnVlOyB0YXJnZXRbaV0gPSBvYmpbaV07IH0gcmV0dXJuIHRhcmdldDsgfVxuXG5MaW5rUmFkaWFsQ3VydmUucHJvcFR5cGVzID0ge1xuICBpbm5lclJlZjogX3Byb3BUeXBlczIuZGVmYXVsdC5mdW5jXG59O1xuXG5mdW5jdGlvbiBMaW5rUmFkaWFsQ3VydmUoX3JlZikge1xuICB2YXIgY2xhc3NOYW1lID0gX3JlZi5jbGFzc05hbWUsXG4gICAgICBpbm5lclJlZiA9IF9yZWYuaW5uZXJSZWYsXG4gICAgICBkYXRhID0gX3JlZi5kYXRhLFxuICAgICAgX3JlZiR4ID0gX3JlZi54LFxuICAgICAgeCA9IF9yZWYkeCA9PT0gdW5kZWZpbmVkID8gZnVuY3Rpb24gKGQpIHtcbiAgICByZXR1cm4gZC54O1xuICB9IDogX3JlZiR4LFxuICAgICAgX3JlZiR5ID0gX3JlZi55LFxuICAgICAgeSA9IF9yZWYkeSA9PT0gdW5kZWZpbmVkID8gZnVuY3Rpb24gKGQpIHtcbiAgICByZXR1cm4gZC55O1xuICB9IDogX3JlZiR5LFxuICAgICAgcmVzdFByb3BzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKF9yZWYsIFsnY2xhc3NOYW1lJywgJ2lubmVyUmVmJywgJ2RhdGEnLCAneCcsICd5J10pO1xuXG4gIHZhciBjdXJ2ZSA9IGZ1bmN0aW9uIGN1cnZlKHNvdXJjZSwgdGFyZ2V0KSB7XG4gICAgdmFyIHNhID0geChzb3VyY2UpIC0gTWF0aC5QSSAvIDI7XG4gICAgdmFyIHNyID0geShzb3VyY2UpO1xuICAgIHZhciB0YSA9IHgodGFyZ2V0KSAtIE1hdGguUEkgLyAyO1xuICAgIHZhciB0ciA9IHkodGFyZ2V0KTtcblxuICAgIHZhciBzYyA9IE1hdGguY29zKHNhKTtcbiAgICB2YXIgc3MgPSBNYXRoLnNpbihzYSk7XG4gICAgdmFyIHRjID0gTWF0aC5jb3ModGEpO1xuICAgIHZhciB0cyA9IE1hdGguc2luKHRhKTtcblxuICAgIHZhciBzeCA9IHNyICogc2M7XG4gICAgdmFyIHN5ID0gc3IgKiBzcztcbiAgICB2YXIgdHggPSB0ciAqIHRjO1xuICAgIHZhciB0eSA9IHRyICogdHM7XG5cbiAgICB2YXIgZHggPSB0eCAtIHN4O1xuICAgIHZhciBkeSA9IHR5IC0gc3k7XG4gICAgdmFyIGl4ID0gMC4yICogKGR4ICsgZHkpO1xuICAgIHZhciBpeSA9IDAuMiAqIChkeSAtIGR4KTtcblxuICAgIHJldHVybiAnTScgKyBzeCArICcsJyArIHN5ICsgJ1xcbiAgICAgIEMnICsgKHN4ICsgaXgpICsgJywnICsgKHN5ICsgaXkpICsgJ1xcbiAgICAgICcgKyAodHggKyBpeSkgKyAnLCcgKyAodHkgLSBpeCkgKyAnXFxuICAgICAgJyArIHR4ICsgJywnICsgdHkgKyAnXFxuICAgICc7XG4gIH07XG5cbiAgcmV0dXJuIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KCdwYXRoJywgX2V4dGVuZHMoe1xuICAgIHJlZjogaW5uZXJSZWYsXG4gICAgY2xhc3NOYW1lOiAoMCwgX2NsYXNzbmFtZXMyLmRlZmF1bHQpKCd2eC1saW5rJywgY2xhc3NOYW1lKSxcbiAgICBkOiBjdXJ2ZShkYXRhLnNvdXJjZSwgZGF0YS50YXJnZXQpXG4gIH0sIHJlc3RQcm9wcykpO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL0B2eC9zaGFwZS9idWlsZC9zaGFwZXMvbGluay9jdXJ2ZS9MaW5rUmFkaWFsQ3VydmUuanNcbi8vIG1vZHVsZSBpZCA9IDY0MVxuLy8gbW9kdWxlIGNodW5rcyA9IDUiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IExpbmtIb3Jpem9udGFsTGluZTtcblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX2NsYXNzbmFtZXMgPSByZXF1aXJlKCdjbGFzc25hbWVzJyk7XG5cbnZhciBfY2xhc3NuYW1lczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jbGFzc25hbWVzKTtcblxudmFyIF9wcm9wVHlwZXMgPSByZXF1aXJlKCdwcm9wLXR5cGVzJyk7XG5cbnZhciBfcHJvcFR5cGVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3Byb3BUeXBlcyk7XG5cbnZhciBfYWRkaXRpb25hbFByb3BzID0gcmVxdWlyZSgnLi4vLi4vLi4vdXRpbC9hZGRpdGlvbmFsUHJvcHMnKTtcblxudmFyIF9hZGRpdGlvbmFsUHJvcHMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfYWRkaXRpb25hbFByb3BzKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKG9iaiwga2V5cykgeyB2YXIgdGFyZ2V0ID0ge307IGZvciAodmFyIGkgaW4gb2JqKSB7IGlmIChrZXlzLmluZGV4T2YoaSkgPj0gMCkgY29udGludWU7IGlmICghT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgaSkpIGNvbnRpbnVlOyB0YXJnZXRbaV0gPSBvYmpbaV07IH0gcmV0dXJuIHRhcmdldDsgfVxuXG5MaW5rSG9yaXpvbnRhbExpbmUucHJvcFR5cGVzID0ge1xuICBpbm5lclJlZjogX3Byb3BUeXBlczIuZGVmYXVsdC5mdW5jXG59O1xuXG5mdW5jdGlvbiBMaW5rSG9yaXpvbnRhbExpbmUoX3JlZikge1xuICB2YXIgY2xhc3NOYW1lID0gX3JlZi5jbGFzc05hbWUsXG4gICAgICBpbm5lclJlZiA9IF9yZWYuaW5uZXJSZWYsXG4gICAgICBkYXRhID0gX3JlZi5kYXRhLFxuICAgICAgX3JlZiR4ID0gX3JlZi54LFxuICAgICAgeCA9IF9yZWYkeCA9PT0gdW5kZWZpbmVkID8gZnVuY3Rpb24gKGQpIHtcbiAgICByZXR1cm4gZC55O1xuICB9IDogX3JlZiR4LFxuICAgICAgX3JlZiR5ID0gX3JlZi55LFxuICAgICAgeSA9IF9yZWYkeSA9PT0gdW5kZWZpbmVkID8gZnVuY3Rpb24gKGQpIHtcbiAgICByZXR1cm4gZC54O1xuICB9IDogX3JlZiR5LFxuICAgICAgcmVzdFByb3BzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKF9yZWYsIFsnY2xhc3NOYW1lJywgJ2lubmVyUmVmJywgJ2RhdGEnLCAneCcsICd5J10pO1xuXG4gIHZhciBsaW5lID0gZnVuY3Rpb24gbGluZShzb3VyY2UsIHRhcmdldCkge1xuICAgIHJldHVybiAnXFxuICAgIE0nICsgeChzb3VyY2UpICsgJywnICsgeShzb3VyY2UpICsgJ1xcbiAgICBMJyArIHgodGFyZ2V0KSArICcsJyArIHkodGFyZ2V0KSArICdcXG4gICc7XG4gIH07XG5cbiAgcmV0dXJuIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KCdwYXRoJywgX2V4dGVuZHMoe1xuICAgIHJlZjogaW5uZXJSZWYsXG4gICAgY2xhc3NOYW1lOiAoMCwgX2NsYXNzbmFtZXMyLmRlZmF1bHQpKCd2eC1saW5rJywgY2xhc3NOYW1lKSxcbiAgICBkOiBsaW5lKGRhdGEuc291cmNlLCBkYXRhLnRhcmdldClcbiAgfSwgcmVzdFByb3BzKSk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvQHZ4L3NoYXBlL2J1aWxkL3NoYXBlcy9saW5rL2xpbmUvTGlua0hvcml6b250YWxMaW5lLmpzXG4vLyBtb2R1bGUgaWQgPSA2NDJcbi8vIG1vZHVsZSBjaHVua3MgPSA1IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG5leHBvcnRzLmRlZmF1bHQgPSBMaW5rVmVydGljYWxMaW5lO1xuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfY2xhc3NuYW1lcyA9IHJlcXVpcmUoJ2NsYXNzbmFtZXMnKTtcblxudmFyIF9jbGFzc25hbWVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NsYXNzbmFtZXMpO1xuXG52YXIgX3Byb3BUeXBlcyA9IHJlcXVpcmUoJ3Byb3AtdHlwZXMnKTtcblxudmFyIF9wcm9wVHlwZXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcHJvcFR5cGVzKTtcblxudmFyIF9hZGRpdGlvbmFsUHJvcHMgPSByZXF1aXJlKCcuLi8uLi8uLi91dGlsL2FkZGl0aW9uYWxQcm9wcycpO1xuXG52YXIgX2FkZGl0aW9uYWxQcm9wczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9hZGRpdGlvbmFsUHJvcHMpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMob2JqLCBrZXlzKSB7IHZhciB0YXJnZXQgPSB7fTsgZm9yICh2YXIgaSBpbiBvYmopIHsgaWYgKGtleXMuaW5kZXhPZihpKSA+PSAwKSBjb250aW51ZTsgaWYgKCFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBpKSkgY29udGludWU7IHRhcmdldFtpXSA9IG9ialtpXTsgfSByZXR1cm4gdGFyZ2V0OyB9XG5cbkxpbmtWZXJ0aWNhbExpbmUucHJvcFR5cGVzID0ge1xuICBpbm5lclJlZjogX3Byb3BUeXBlczIuZGVmYXVsdC5mdW5jXG59O1xuXG5mdW5jdGlvbiBMaW5rVmVydGljYWxMaW5lKF9yZWYpIHtcbiAgdmFyIGNsYXNzTmFtZSA9IF9yZWYuY2xhc3NOYW1lLFxuICAgICAgaW5uZXJSZWYgPSBfcmVmLmlubmVyUmVmLFxuICAgICAgZGF0YSA9IF9yZWYuZGF0YSxcbiAgICAgIF9yZWYkeCA9IF9yZWYueCxcbiAgICAgIHggPSBfcmVmJHggPT09IHVuZGVmaW5lZCA/IGZ1bmN0aW9uIChkKSB7XG4gICAgcmV0dXJuIGQueDtcbiAgfSA6IF9yZWYkeCxcbiAgICAgIF9yZWYkeSA9IF9yZWYueSxcbiAgICAgIHkgPSBfcmVmJHkgPT09IHVuZGVmaW5lZCA/IGZ1bmN0aW9uIChkKSB7XG4gICAgcmV0dXJuIGQueTtcbiAgfSA6IF9yZWYkeSxcbiAgICAgIHJlc3RQcm9wcyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhfcmVmLCBbJ2NsYXNzTmFtZScsICdpbm5lclJlZicsICdkYXRhJywgJ3gnLCAneSddKTtcblxuICB2YXIgbGluZSA9IGZ1bmN0aW9uIGxpbmUoc291cmNlLCB0YXJnZXQpIHtcbiAgICByZXR1cm4gJ1xcbiAgICBNJyArIHgoc291cmNlKSArICcsJyArIHkoc291cmNlKSArICdcXG4gICAgTCcgKyB4KHRhcmdldCkgKyAnLCcgKyB5KHRhcmdldCkgKyAnXFxuICAnO1xuICB9O1xuXG4gIHJldHVybiBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudCgncGF0aCcsIF9leHRlbmRzKHtcbiAgICByZWY6IGlubmVyUmVmLFxuICAgIGNsYXNzTmFtZTogKDAsIF9jbGFzc25hbWVzMi5kZWZhdWx0KSgndngtbGluaycsIGNsYXNzTmFtZSksXG4gICAgZDogbGluZShkYXRhLnNvdXJjZSwgZGF0YS50YXJnZXQpXG4gIH0sIHJlc3RQcm9wcykpO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL0B2eC9zaGFwZS9idWlsZC9zaGFwZXMvbGluay9saW5lL0xpbmtWZXJ0aWNhbExpbmUuanNcbi8vIG1vZHVsZSBpZCA9IDY0M1xuLy8gbW9kdWxlIGNodW5rcyA9IDUiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IExpbmtSYWRpYWxTdGVwO1xuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfY2xhc3NuYW1lcyA9IHJlcXVpcmUoJ2NsYXNzbmFtZXMnKTtcblxudmFyIF9jbGFzc25hbWVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NsYXNzbmFtZXMpO1xuXG52YXIgX3Byb3BUeXBlcyA9IHJlcXVpcmUoJ3Byb3AtdHlwZXMnKTtcblxudmFyIF9wcm9wVHlwZXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcHJvcFR5cGVzKTtcblxudmFyIF9kM1NoYXBlID0gcmVxdWlyZSgnZDMtc2hhcGUnKTtcblxudmFyIF9hZGRpdGlvbmFsUHJvcHMgPSByZXF1aXJlKCcuLi8uLi8uLi91dGlsL2FkZGl0aW9uYWxQcm9wcycpO1xuXG52YXIgX2FkZGl0aW9uYWxQcm9wczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9hZGRpdGlvbmFsUHJvcHMpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMob2JqLCBrZXlzKSB7IHZhciB0YXJnZXQgPSB7fTsgZm9yICh2YXIgaSBpbiBvYmopIHsgaWYgKGtleXMuaW5kZXhPZihpKSA+PSAwKSBjb250aW51ZTsgaWYgKCFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBpKSkgY29udGludWU7IHRhcmdldFtpXSA9IG9ialtpXTsgfSByZXR1cm4gdGFyZ2V0OyB9XG5cbkxpbmtSYWRpYWxTdGVwLnByb3BUeXBlcyA9IHtcbiAgaW5uZXJSZWY6IF9wcm9wVHlwZXMyLmRlZmF1bHQuZnVuY1xufTtcblxuZnVuY3Rpb24gTGlua1JhZGlhbFN0ZXAoX3JlZikge1xuICB2YXIgY2xhc3NOYW1lID0gX3JlZi5jbGFzc05hbWUsXG4gICAgICBpbm5lclJlZiA9IF9yZWYuaW5uZXJSZWYsXG4gICAgICBkYXRhID0gX3JlZi5kYXRhLFxuICAgICAgX3JlZiR4ID0gX3JlZi54LFxuICAgICAgeCA9IF9yZWYkeCA9PT0gdW5kZWZpbmVkID8gZnVuY3Rpb24gKGQpIHtcbiAgICByZXR1cm4gZC54O1xuICB9IDogX3JlZiR4LFxuICAgICAgX3JlZiR5ID0gX3JlZi55LFxuICAgICAgeSA9IF9yZWYkeSA9PT0gdW5kZWZpbmVkID8gZnVuY3Rpb24gKGQpIHtcbiAgICByZXR1cm4gZC55O1xuICB9IDogX3JlZiR5LFxuICAgICAgcmVzdFByb3BzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKF9yZWYsIFsnY2xhc3NOYW1lJywgJ2lubmVyUmVmJywgJ2RhdGEnLCAneCcsICd5J10pO1xuXG4gIHZhciBsaW5lID0gZnVuY3Rpb24gbGluZShzb3VyY2UsIHRhcmdldCkge1xuICAgIHZhciBzYSA9IHgoc291cmNlKSAtIE1hdGguUEkgLyAyO1xuICAgIHZhciBzciA9IHkoc291cmNlKTtcbiAgICB2YXIgdGEgPSB4KHRhcmdldCkgLSBNYXRoLlBJIC8gMjtcbiAgICB2YXIgdHIgPSB5KHRhcmdldCk7XG5cbiAgICB2YXIgc2MgPSBNYXRoLmNvcyhzYSk7XG4gICAgdmFyIHNzID0gTWF0aC5zaW4oc2EpO1xuICAgIHZhciB0YyA9IE1hdGguY29zKHRhKTtcbiAgICB2YXIgdHMgPSBNYXRoLnNpbih0YSk7XG5cbiAgICByZXR1cm4gJ1xcbiAgICAgIE0nICsgc3IgKiBzYyArICcsJyArIHNyICogc3MgKyAnXFxuICAgICAgTCcgKyB0ciAqIHRjICsgJywnICsgdHIgKiB0cyArICdcXG4gICAgJztcbiAgfTtcblxuICByZXR1cm4gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoJ3BhdGgnLCBfZXh0ZW5kcyh7XG4gICAgcmVmOiBpbm5lclJlZixcbiAgICBjbGFzc05hbWU6ICgwLCBfY2xhc3NuYW1lczIuZGVmYXVsdCkoJ3Z4LWxpbmsnLCBjbGFzc05hbWUpLFxuICAgIGQ6IGxpbmUoZGF0YS5zb3VyY2UsIGRhdGEudGFyZ2V0KVxuICB9LCByZXN0UHJvcHMpKTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9Adngvc2hhcGUvYnVpbGQvc2hhcGVzL2xpbmsvbGluZS9MaW5rUmFkaWFsTGluZS5qc1xuLy8gbW9kdWxlIGlkID0gNjQ0XG4vLyBtb2R1bGUgY2h1bmtzID0gNSIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gTGlua0hvcml6b250YWxTdGVwO1xuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfY2xhc3NuYW1lcyA9IHJlcXVpcmUoJ2NsYXNzbmFtZXMnKTtcblxudmFyIF9jbGFzc25hbWVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NsYXNzbmFtZXMpO1xuXG52YXIgX3Byb3BUeXBlcyA9IHJlcXVpcmUoJ3Byb3AtdHlwZXMnKTtcblxudmFyIF9wcm9wVHlwZXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcHJvcFR5cGVzKTtcblxudmFyIF9hZGRpdGlvbmFsUHJvcHMgPSByZXF1aXJlKCcuLi8uLi8uLi91dGlsL2FkZGl0aW9uYWxQcm9wcycpO1xuXG52YXIgX2FkZGl0aW9uYWxQcm9wczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9hZGRpdGlvbmFsUHJvcHMpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMob2JqLCBrZXlzKSB7IHZhciB0YXJnZXQgPSB7fTsgZm9yICh2YXIgaSBpbiBvYmopIHsgaWYgKGtleXMuaW5kZXhPZihpKSA+PSAwKSBjb250aW51ZTsgaWYgKCFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBpKSkgY29udGludWU7IHRhcmdldFtpXSA9IG9ialtpXTsgfSByZXR1cm4gdGFyZ2V0OyB9XG5cbkxpbmtIb3Jpem9udGFsU3RlcC5wcm9wVHlwZXMgPSB7XG4gIGlubmVyUmVmOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmZ1bmMsXG4gIHBlcmNlbnQ6IF9wcm9wVHlwZXMyLmRlZmF1bHQubnVtYmVyXG59O1xuXG5mdW5jdGlvbiBMaW5rSG9yaXpvbnRhbFN0ZXAoX3JlZikge1xuICB2YXIgY2xhc3NOYW1lID0gX3JlZi5jbGFzc05hbWUsXG4gICAgICBpbm5lclJlZiA9IF9yZWYuaW5uZXJSZWYsXG4gICAgICBkYXRhID0gX3JlZi5kYXRhLFxuICAgICAgX3JlZiRwZXJjZW50ID0gX3JlZi5wZXJjZW50LFxuICAgICAgcGVyY2VudCA9IF9yZWYkcGVyY2VudCA9PT0gdW5kZWZpbmVkID8gMC41IDogX3JlZiRwZXJjZW50LFxuICAgICAgX3JlZiR4ID0gX3JlZi54LFxuICAgICAgeCA9IF9yZWYkeCA9PT0gdW5kZWZpbmVkID8gZnVuY3Rpb24gKGQpIHtcbiAgICByZXR1cm4gZC55O1xuICB9IDogX3JlZiR4LFxuICAgICAgX3JlZiR5ID0gX3JlZi55LFxuICAgICAgeSA9IF9yZWYkeSA9PT0gdW5kZWZpbmVkID8gZnVuY3Rpb24gKGQpIHtcbiAgICByZXR1cm4gZC54O1xuICB9IDogX3JlZiR5LFxuICAgICAgcmVzdFByb3BzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKF9yZWYsIFsnY2xhc3NOYW1lJywgJ2lubmVyUmVmJywgJ2RhdGEnLCAncGVyY2VudCcsICd4JywgJ3knXSk7XG5cbiAgdmFyIGxpbmUgPSBmdW5jdGlvbiBsaW5lKHNvdXJjZSwgdGFyZ2V0KSB7XG4gICAgcmV0dXJuICdcXG4gICAgTScgKyB4KHNvdXJjZSkgKyAnLCcgKyB5KHNvdXJjZSkgKyAnXFxuICAgIEgnICsgKHgoc291cmNlKSArICh4KHRhcmdldCkgLSB4KHNvdXJjZSkpICogcGVyY2VudCkgKyAnXFxuICAgIFYnICsgeSh0YXJnZXQpICsgJ1xcbiAgICBIJyArIHgodGFyZ2V0KSArICdcXG4gICc7XG4gIH07XG5cbiAgcmV0dXJuIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KCdwYXRoJywgX2V4dGVuZHMoe1xuICAgIHJlZjogaW5uZXJSZWYsXG4gICAgY2xhc3NOYW1lOiAoMCwgX2NsYXNzbmFtZXMyLmRlZmF1bHQpKCd2eC1saW5rJywgY2xhc3NOYW1lKSxcbiAgICBkOiBsaW5lKGRhdGEuc291cmNlLCBkYXRhLnRhcmdldClcbiAgfSwgcmVzdFByb3BzKSk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvQHZ4L3NoYXBlL2J1aWxkL3NoYXBlcy9saW5rL3N0ZXAvTGlua0hvcml6b250YWxTdGVwLmpzXG4vLyBtb2R1bGUgaWQgPSA2NDVcbi8vIG1vZHVsZSBjaHVua3MgPSA1IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG5leHBvcnRzLmRlZmF1bHQgPSBMaW5rVmVydGljYWxTdGVwO1xuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfY2xhc3NuYW1lcyA9IHJlcXVpcmUoJ2NsYXNzbmFtZXMnKTtcblxudmFyIF9jbGFzc25hbWVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NsYXNzbmFtZXMpO1xuXG52YXIgX3Byb3BUeXBlcyA9IHJlcXVpcmUoJ3Byb3AtdHlwZXMnKTtcblxudmFyIF9wcm9wVHlwZXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcHJvcFR5cGVzKTtcblxudmFyIF9hZGRpdGlvbmFsUHJvcHMgPSByZXF1aXJlKCcuLi8uLi8uLi91dGlsL2FkZGl0aW9uYWxQcm9wcycpO1xuXG52YXIgX2FkZGl0aW9uYWxQcm9wczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9hZGRpdGlvbmFsUHJvcHMpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMob2JqLCBrZXlzKSB7IHZhciB0YXJnZXQgPSB7fTsgZm9yICh2YXIgaSBpbiBvYmopIHsgaWYgKGtleXMuaW5kZXhPZihpKSA+PSAwKSBjb250aW51ZTsgaWYgKCFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBpKSkgY29udGludWU7IHRhcmdldFtpXSA9IG9ialtpXTsgfSByZXR1cm4gdGFyZ2V0OyB9XG5cbkxpbmtWZXJ0aWNhbFN0ZXAucHJvcFR5cGVzID0ge1xuICBpbm5lclJlZjogX3Byb3BUeXBlczIuZGVmYXVsdC5mdW5jLFxuICBwZXJjZW50OiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm51bWJlclxufTtcblxuZnVuY3Rpb24gTGlua1ZlcnRpY2FsU3RlcChfcmVmKSB7XG4gIHZhciBjbGFzc05hbWUgPSBfcmVmLmNsYXNzTmFtZSxcbiAgICAgIGlubmVyUmVmID0gX3JlZi5pbm5lclJlZixcbiAgICAgIGRhdGEgPSBfcmVmLmRhdGEsXG4gICAgICBfcmVmJHBlcmNlbnQgPSBfcmVmLnBlcmNlbnQsXG4gICAgICBwZXJjZW50ID0gX3JlZiRwZXJjZW50ID09PSB1bmRlZmluZWQgPyAwLjUgOiBfcmVmJHBlcmNlbnQsXG4gICAgICBfcmVmJHggPSBfcmVmLngsXG4gICAgICB4ID0gX3JlZiR4ID09PSB1bmRlZmluZWQgPyBmdW5jdGlvbiAoZCkge1xuICAgIHJldHVybiBkLng7XG4gIH0gOiBfcmVmJHgsXG4gICAgICBfcmVmJHkgPSBfcmVmLnksXG4gICAgICB5ID0gX3JlZiR5ID09PSB1bmRlZmluZWQgPyBmdW5jdGlvbiAoZCkge1xuICAgIHJldHVybiBkLnk7XG4gIH0gOiBfcmVmJHksXG4gICAgICByZXN0UHJvcHMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMoX3JlZiwgWydjbGFzc05hbWUnLCAnaW5uZXJSZWYnLCAnZGF0YScsICdwZXJjZW50JywgJ3gnLCAneSddKTtcblxuICB2YXIgbGluZSA9IGZ1bmN0aW9uIGxpbmUoc291cmNlLCB0YXJnZXQpIHtcbiAgICByZXR1cm4gJ1xcbiAgICBNJyArIHgoc291cmNlKSArICcsJyArIHkoc291cmNlKSArICdcXG4gICAgVicgKyAoeShzb3VyY2UpICsgKHkodGFyZ2V0KSAtIHkoc291cmNlKSkgKiBwZXJjZW50KSArICdcXG4gICAgSCcgKyB4KHRhcmdldCkgKyAnXFxuICAgIFYnICsgeSh0YXJnZXQpICsgJ1xcbiAgJztcbiAgfTtcblxuICByZXR1cm4gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoJ3BhdGgnLCBfZXh0ZW5kcyh7XG4gICAgcmVmOiBpbm5lclJlZixcbiAgICBjbGFzc05hbWU6ICgwLCBfY2xhc3NuYW1lczIuZGVmYXVsdCkoJ3Z4LWxpbmsnLCBjbGFzc05hbWUpLFxuICAgIGQ6IGxpbmUoZGF0YS5zb3VyY2UsIGRhdGEudGFyZ2V0KVxuICB9LCByZXN0UHJvcHMpKTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9Adngvc2hhcGUvYnVpbGQvc2hhcGVzL2xpbmsvc3RlcC9MaW5rVmVydGljYWxTdGVwLmpzXG4vLyBtb2R1bGUgaWQgPSA2NDZcbi8vIG1vZHVsZSBjaHVua3MgPSA1IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG5leHBvcnRzLmRlZmF1bHQgPSBMaW5rUmFkaWFsU3RlcDtcblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX2NsYXNzbmFtZXMgPSByZXF1aXJlKCdjbGFzc25hbWVzJyk7XG5cbnZhciBfY2xhc3NuYW1lczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jbGFzc25hbWVzKTtcblxudmFyIF9wcm9wVHlwZXMgPSByZXF1aXJlKCdwcm9wLXR5cGVzJyk7XG5cbnZhciBfcHJvcFR5cGVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3Byb3BUeXBlcyk7XG5cbnZhciBfZDNTaGFwZSA9IHJlcXVpcmUoJ2QzLXNoYXBlJyk7XG5cbnZhciBfYWRkaXRpb25hbFByb3BzID0gcmVxdWlyZSgnLi4vLi4vLi4vdXRpbC9hZGRpdGlvbmFsUHJvcHMnKTtcblxudmFyIF9hZGRpdGlvbmFsUHJvcHMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfYWRkaXRpb25hbFByb3BzKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKG9iaiwga2V5cykgeyB2YXIgdGFyZ2V0ID0ge307IGZvciAodmFyIGkgaW4gb2JqKSB7IGlmIChrZXlzLmluZGV4T2YoaSkgPj0gMCkgY29udGludWU7IGlmICghT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgaSkpIGNvbnRpbnVlOyB0YXJnZXRbaV0gPSBvYmpbaV07IH0gcmV0dXJuIHRhcmdldDsgfVxuXG5MaW5rUmFkaWFsU3RlcC5wcm9wVHlwZXMgPSB7XG4gIGlubmVyUmVmOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmZ1bmNcbn07XG5cbmZ1bmN0aW9uIExpbmtSYWRpYWxTdGVwKF9yZWYpIHtcbiAgdmFyIGNsYXNzTmFtZSA9IF9yZWYuY2xhc3NOYW1lLFxuICAgICAgaW5uZXJSZWYgPSBfcmVmLmlubmVyUmVmLFxuICAgICAgZGF0YSA9IF9yZWYuZGF0YSxcbiAgICAgIF9yZWYkeCA9IF9yZWYueCxcbiAgICAgIHggPSBfcmVmJHggPT09IHVuZGVmaW5lZCA/IGZ1bmN0aW9uIChkKSB7XG4gICAgcmV0dXJuIGQueDtcbiAgfSA6IF9yZWYkeCxcbiAgICAgIF9yZWYkeSA9IF9yZWYueSxcbiAgICAgIHkgPSBfcmVmJHkgPT09IHVuZGVmaW5lZCA/IGZ1bmN0aW9uIChkKSB7XG4gICAgcmV0dXJuIGQueTtcbiAgfSA6IF9yZWYkeSxcbiAgICAgIHJlc3RQcm9wcyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhfcmVmLCBbJ2NsYXNzTmFtZScsICdpbm5lclJlZicsICdkYXRhJywgJ3gnLCAneSddKTtcblxuICB2YXIgc3RlcCA9IGZ1bmN0aW9uIHN0ZXAoc291cmNlLCB0YXJnZXQpIHtcbiAgICB2YXIgc2EgPSB4KHNvdXJjZSkgLSBNYXRoLlBJIC8gMjtcbiAgICB2YXIgc3IgPSB5KHNvdXJjZSk7XG4gICAgdmFyIHRhID0geCh0YXJnZXQpIC0gTWF0aC5QSSAvIDI7XG4gICAgdmFyIHRyID0geSh0YXJnZXQpO1xuXG4gICAgdmFyIHNjID0gTWF0aC5jb3Moc2EpO1xuICAgIHZhciBzcyA9IE1hdGguc2luKHNhKTtcbiAgICB2YXIgdGMgPSBNYXRoLmNvcyh0YSk7XG4gICAgdmFyIHRzID0gTWF0aC5zaW4odGEpO1xuICAgIHZhciBzZiA9IE1hdGguYWJzKHRhIC0gc2EpID4gTWF0aC5QSSA/IHRhIDw9IHNhIDogdGEgPiBzYTtcblxuICAgIHJldHVybiAnXFxuICAgICAgTScgKyBzciAqIHNjICsgJywnICsgc3IgKiBzcyArICdcXG4gICAgICBBJyArIHNyICsgJywnICsgc3IgKyAnIDAgMCwnICsgKHNmID8gMSA6IDApICsgJ1xcbiAgICAgICcgKyBzciAqIHRjICsgJywnICsgc3IgKiB0cyArICdcXG4gICAgICBMJyArIHRyICogdGMgKyAnLCcgKyB0ciAqIHRzICsgJ1xcbiAgICAnO1xuICB9O1xuXG4gIHZhciBsaW5lID0gc3RlcDtcblxuICByZXR1cm4gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoJ3BhdGgnLCBfZXh0ZW5kcyh7XG4gICAgcmVmOiBpbm5lclJlZixcbiAgICBjbGFzc05hbWU6ICgwLCBfY2xhc3NuYW1lczIuZGVmYXVsdCkoJ3Z4LWxpbmsnLCBjbGFzc05hbWUpLFxuICAgIGQ6IGxpbmUoZGF0YS5zb3VyY2UsIGRhdGEudGFyZ2V0KVxuICB9LCByZXN0UHJvcHMpKTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9Adngvc2hhcGUvYnVpbGQvc2hhcGVzL2xpbmsvc3RlcC9MaW5rUmFkaWFsU3RlcC5qc1xuLy8gbW9kdWxlIGlkID0gNjQ3XG4vLyBtb2R1bGUgY2h1bmtzID0gNSIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gQXJlYTtcblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX2NsYXNzbmFtZXMgPSByZXF1aXJlKCdjbGFzc25hbWVzJyk7XG5cbnZhciBfY2xhc3NuYW1lczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jbGFzc25hbWVzKTtcblxudmFyIF9wcm9wVHlwZXMgPSByZXF1aXJlKCdwcm9wLXR5cGVzJyk7XG5cbnZhciBfcHJvcFR5cGVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3Byb3BUeXBlcyk7XG5cbnZhciBfZDNTaGFwZSA9IHJlcXVpcmUoJ2QzLXNoYXBlJyk7XG5cbnZhciBfYWRkaXRpb25hbFByb3BzID0gcmVxdWlyZSgnLi4vdXRpbC9hZGRpdGlvbmFsUHJvcHMnKTtcblxudmFyIF9hZGRpdGlvbmFsUHJvcHMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfYWRkaXRpb25hbFByb3BzKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKG9iaiwga2V5cykgeyB2YXIgdGFyZ2V0ID0ge307IGZvciAodmFyIGkgaW4gb2JqKSB7IGlmIChrZXlzLmluZGV4T2YoaSkgPj0gMCkgY29udGludWU7IGlmICghT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgaSkpIGNvbnRpbnVlOyB0YXJnZXRbaV0gPSBvYmpbaV07IH0gcmV0dXJuIHRhcmdldDsgfVxuXG5BcmVhLnByb3BUeXBlcyA9IHtcbiAgeDogX3Byb3BUeXBlczIuZGVmYXVsdC5mdW5jLFxuICB4MDogX3Byb3BUeXBlczIuZGVmYXVsdC5mdW5jLFxuICB4MTogX3Byb3BUeXBlczIuZGVmYXVsdC5mdW5jLFxuICB5OiBfcHJvcFR5cGVzMi5kZWZhdWx0LmZ1bmMsXG4gIHkwOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmZ1bmMsXG4gIHkxOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmZ1bmMsXG4gIHhTY2FsZTogX3Byb3BUeXBlczIuZGVmYXVsdC5mdW5jLFxuICB5U2NhbGU6IF9wcm9wVHlwZXMyLmRlZmF1bHQuZnVuYyxcbiAgZGF0YTogX3Byb3BUeXBlczIuZGVmYXVsdC5hcnJheSxcbiAgZGVmaW5lZDogX3Byb3BUeXBlczIuZGVmYXVsdC5mdW5jLFxuICBjbGFzc05hbWU6IF9wcm9wVHlwZXMyLmRlZmF1bHQub25lT2ZUeXBlKFtfcHJvcFR5cGVzMi5kZWZhdWx0LnN0cmluZywgX3Byb3BUeXBlczIuZGVmYXVsdC5ib29sLCBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9iamVjdCwgX3Byb3BUeXBlczIuZGVmYXVsdC5hcnJheV0pLFxuICBpbm5lclJlZjogX3Byb3BUeXBlczIuZGVmYXVsdC5mdW5jLFxuICBzdHJva2VEYXNoYXJyYXk6IF9wcm9wVHlwZXMyLmRlZmF1bHQuc3RyaW5nLFxuICBzdHJva2VXaWR0aDogX3Byb3BUeXBlczIuZGVmYXVsdC5udW1iZXIsXG4gIHN0cm9rZTogX3Byb3BUeXBlczIuZGVmYXVsdC5zdHJpbmcsXG4gIGZpbGw6IF9wcm9wVHlwZXMyLmRlZmF1bHQuc3RyaW5nLFxuICBjdXJ2ZTogX3Byb3BUeXBlczIuZGVmYXVsdC5mdW5jXG59O1xuXG5mdW5jdGlvbiBBcmVhKF9yZWYpIHtcbiAgdmFyIHggPSBfcmVmLngsXG4gICAgICB4MCA9IF9yZWYueDAsXG4gICAgICB4MSA9IF9yZWYueDEsXG4gICAgICB5ID0gX3JlZi55LFxuICAgICAgeTAgPSBfcmVmLnkwLFxuICAgICAgeTEgPSBfcmVmLnkxLFxuICAgICAgeFNjYWxlID0gX3JlZi54U2NhbGUsXG4gICAgICB5U2NhbGUgPSBfcmVmLnlTY2FsZSxcbiAgICAgIF9yZWYkZGF0YSA9IF9yZWYuZGF0YSxcbiAgICAgIGRhdGEgPSBfcmVmJGRhdGEgPT09IHVuZGVmaW5lZCA/IFtdIDogX3JlZiRkYXRhLFxuICAgICAgX3JlZiRkZWZpbmVkID0gX3JlZi5kZWZpbmVkLFxuICAgICAgZGVmaW5lZCA9IF9yZWYkZGVmaW5lZCA9PT0gdW5kZWZpbmVkID8gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0cnVlO1xuICB9IDogX3JlZiRkZWZpbmVkLFxuICAgICAgY2xhc3NOYW1lID0gX3JlZi5jbGFzc05hbWUsXG4gICAgICBzdHJva2VEYXNoYXJyYXkgPSBfcmVmLnN0cm9rZURhc2hhcnJheSxcbiAgICAgIF9yZWYkc3Ryb2tlV2lkdGggPSBfcmVmLnN0cm9rZVdpZHRoLFxuICAgICAgc3Ryb2tlV2lkdGggPSBfcmVmJHN0cm9rZVdpZHRoID09PSB1bmRlZmluZWQgPyAyIDogX3JlZiRzdHJva2VXaWR0aCxcbiAgICAgIF9yZWYkc3Ryb2tlID0gX3JlZi5zdHJva2UsXG4gICAgICBzdHJva2UgPSBfcmVmJHN0cm9rZSA9PT0gdW5kZWZpbmVkID8gJ2JsYWNrJyA6IF9yZWYkc3Ryb2tlLFxuICAgICAgX3JlZiRmaWxsID0gX3JlZi5maWxsLFxuICAgICAgZmlsbCA9IF9yZWYkZmlsbCA9PT0gdW5kZWZpbmVkID8gJ3JnYmEoMCwwLDAsMC4zKScgOiBfcmVmJGZpbGwsXG4gICAgICBjdXJ2ZSA9IF9yZWYuY3VydmUsXG4gICAgICBpbm5lclJlZiA9IF9yZWYuaW5uZXJSZWYsXG4gICAgICByZXN0UHJvcHMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMoX3JlZiwgWyd4JywgJ3gwJywgJ3gxJywgJ3knLCAneTAnLCAneTEnLCAneFNjYWxlJywgJ3lTY2FsZScsICdkYXRhJywgJ2RlZmluZWQnLCAnY2xhc3NOYW1lJywgJ3N0cm9rZURhc2hhcnJheScsICdzdHJva2VXaWR0aCcsICdzdHJva2UnLCAnZmlsbCcsICdjdXJ2ZScsICdpbm5lclJlZiddKTtcblxuICB2YXIgcGF0aCA9ICgwLCBfZDNTaGFwZS5hcmVhKSgpO1xuICBpZiAoeCkgcGF0aC54KGZ1bmN0aW9uIChkKSB7XG4gICAgcmV0dXJuIHhTY2FsZSh4KGQpKTtcbiAgfSk7XG4gIGlmICh4MCkgcGF0aC54MChmdW5jdGlvbiAoZCkge1xuICAgIHJldHVybiB4U2NhbGUoeDAoZCkpO1xuICB9KTtcbiAgaWYgKHgxKSBwYXRoLngxKGZ1bmN0aW9uIChkKSB7XG4gICAgcmV0dXJuIHhTY2FsZSh4MShkKSk7XG4gIH0pO1xuICBpZiAoeSkgcGF0aC55KGZ1bmN0aW9uIChkKSB7XG4gICAgcmV0dXJuIHlTY2FsZSh5KGQpKTtcbiAgfSk7XG4gIGlmICh5MCkgcGF0aC55MChmdW5jdGlvbiAoZCkge1xuICAgIHJldHVybiB5U2NhbGUoeTAoZCkpO1xuICB9KTtcbiAgaWYgKHkxKSBwYXRoLnkxKGZ1bmN0aW9uIChkKSB7XG4gICAgcmV0dXJuIHlTY2FsZSh5MShkKSk7XG4gIH0pO1xuICBpZiAoZGVmaW5lZCkgcGF0aC5kZWZpbmVkKGRlZmluZWQpO1xuICBpZiAoY3VydmUpIHBhdGguY3VydmUoY3VydmUpO1xuICByZXR1cm4gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgJ2cnLFxuICAgIG51bGwsXG4gICAgX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoJ3BhdGgnLCBfZXh0ZW5kcyh7XG4gICAgICByZWY6IGlubmVyUmVmLFxuICAgICAgY2xhc3NOYW1lOiAoMCwgX2NsYXNzbmFtZXMyLmRlZmF1bHQpKCd2eC1hcmVhJywgY2xhc3NOYW1lKSxcbiAgICAgIGQ6IHBhdGgoZGF0YSksXG4gICAgICBzdHJva2U6IHN0cm9rZSxcbiAgICAgIHN0cm9rZVdpZHRoOiBzdHJva2VXaWR0aCxcbiAgICAgIHN0cm9rZURhc2hhcnJheTogc3Ryb2tlRGFzaGFycmF5LFxuICAgICAgZmlsbDogZmlsbFxuICAgIH0sICgwLCBfYWRkaXRpb25hbFByb3BzMi5kZWZhdWx0KShyZXN0UHJvcHMsIGRhdGEpKSlcbiAgKTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9Adngvc2hhcGUvYnVpbGQvc2hhcGVzL0FyZWEuanNcbi8vIG1vZHVsZSBpZCA9IDY0OFxuLy8gbW9kdWxlIGNodW5rcyA9IDUiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IEFyZWFDbG9zZWQ7XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIF9jbGFzc25hbWVzID0gcmVxdWlyZSgnY2xhc3NuYW1lcycpO1xuXG52YXIgX2NsYXNzbmFtZXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY2xhc3NuYW1lcyk7XG5cbnZhciBfcHJvcFR5cGVzID0gcmVxdWlyZSgncHJvcC10eXBlcycpO1xuXG52YXIgX3Byb3BUeXBlczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wcm9wVHlwZXMpO1xuXG52YXIgX2QzU2hhcGUgPSByZXF1aXJlKCdkMy1zaGFwZScpO1xuXG52YXIgX2FkZGl0aW9uYWxQcm9wcyA9IHJlcXVpcmUoJy4uL3V0aWwvYWRkaXRpb25hbFByb3BzJyk7XG5cbnZhciBfYWRkaXRpb25hbFByb3BzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2FkZGl0aW9uYWxQcm9wcyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhvYmosIGtleXMpIHsgdmFyIHRhcmdldCA9IHt9OyBmb3IgKHZhciBpIGluIG9iaikgeyBpZiAoa2V5cy5pbmRleE9mKGkpID49IDApIGNvbnRpbnVlOyBpZiAoIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGkpKSBjb250aW51ZTsgdGFyZ2V0W2ldID0gb2JqW2ldOyB9IHJldHVybiB0YXJnZXQ7IH1cblxuQXJlYUNsb3NlZC5wcm9wVHlwZXMgPSB7XG4gIGlubmVyUmVmOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmZ1bmNcbn07XG5cbmZ1bmN0aW9uIEFyZWFDbG9zZWQoX3JlZikge1xuICB2YXIgeCA9IF9yZWYueCxcbiAgICAgIHkgPSBfcmVmLnksXG4gICAgICB4U2NhbGUgPSBfcmVmLnhTY2FsZSxcbiAgICAgIHlTY2FsZSA9IF9yZWYueVNjYWxlLFxuICAgICAgZGF0YSA9IF9yZWYuZGF0YSxcbiAgICAgIF9yZWYkZGVmaW5lZCA9IF9yZWYuZGVmaW5lZCxcbiAgICAgIGRlZmluZWQgPSBfcmVmJGRlZmluZWQgPT09IHVuZGVmaW5lZCA/IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSA6IF9yZWYkZGVmaW5lZCxcbiAgICAgIGNsYXNzTmFtZSA9IF9yZWYuY2xhc3NOYW1lLFxuICAgICAgc3Ryb2tlRGFzaGFycmF5ID0gX3JlZi5zdHJva2VEYXNoYXJyYXksXG4gICAgICBfcmVmJHN0cm9rZVdpZHRoID0gX3JlZi5zdHJva2VXaWR0aCxcbiAgICAgIHN0cm9rZVdpZHRoID0gX3JlZiRzdHJva2VXaWR0aCA9PT0gdW5kZWZpbmVkID8gMiA6IF9yZWYkc3Ryb2tlV2lkdGgsXG4gICAgICBfcmVmJHN0cm9rZSA9IF9yZWYuc3Ryb2tlLFxuICAgICAgc3Ryb2tlID0gX3JlZiRzdHJva2UgPT09IHVuZGVmaW5lZCA/ICdibGFjaycgOiBfcmVmJHN0cm9rZSxcbiAgICAgIF9yZWYkZmlsbCA9IF9yZWYuZmlsbCxcbiAgICAgIGZpbGwgPSBfcmVmJGZpbGwgPT09IHVuZGVmaW5lZCA/ICdyZ2JhKDAsMCwwLDAuMyknIDogX3JlZiRmaWxsLFxuICAgICAgY3VydmUgPSBfcmVmLmN1cnZlLFxuICAgICAgaW5uZXJSZWYgPSBfcmVmLmlubmVyUmVmLFxuICAgICAgcmVzdFByb3BzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKF9yZWYsIFsneCcsICd5JywgJ3hTY2FsZScsICd5U2NhbGUnLCAnZGF0YScsICdkZWZpbmVkJywgJ2NsYXNzTmFtZScsICdzdHJva2VEYXNoYXJyYXknLCAnc3Ryb2tlV2lkdGgnLCAnc3Ryb2tlJywgJ2ZpbGwnLCAnY3VydmUnLCAnaW5uZXJSZWYnXSk7XG5cbiAgdmFyIHBhdGggPSAoMCwgX2QzU2hhcGUuYXJlYSkoKS54KGZ1bmN0aW9uIChkKSB7XG4gICAgcmV0dXJuIHhTY2FsZSh4KGQpKTtcbiAgfSkueTAoeVNjYWxlLnJhbmdlKClbMF0pLnkxKGZ1bmN0aW9uIChkKSB7XG4gICAgcmV0dXJuIHlTY2FsZSh5KGQpKTtcbiAgfSkuZGVmaW5lZChkZWZpbmVkKTtcbiAgaWYgKGN1cnZlKSBwYXRoLmN1cnZlKGN1cnZlKTtcbiAgcmV0dXJuIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICdnJyxcbiAgICBudWxsLFxuICAgIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KCdwYXRoJywgX2V4dGVuZHMoe1xuICAgICAgcmVmOiBpbm5lclJlZixcbiAgICAgIGNsYXNzTmFtZTogKDAsIF9jbGFzc25hbWVzMi5kZWZhdWx0KSgndngtYXJlYS1jbG9zZWQnLCBjbGFzc05hbWUpLFxuICAgICAgZDogcGF0aChkYXRhKSxcbiAgICAgIHN0cm9rZTogc3Ryb2tlLFxuICAgICAgc3Ryb2tlV2lkdGg6IHN0cm9rZVdpZHRoLFxuICAgICAgc3Ryb2tlRGFzaGFycmF5OiBzdHJva2VEYXNoYXJyYXksXG4gICAgICBmaWxsOiBmaWxsXG4gICAgfSwgKDAsIF9hZGRpdGlvbmFsUHJvcHMyLmRlZmF1bHQpKHJlc3RQcm9wcywgZGF0YSkpKVxuICApO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL0B2eC9zaGFwZS9idWlsZC9zaGFwZXMvQXJlYUNsb3NlZC5qc1xuLy8gbW9kdWxlIGlkID0gNjQ5XG4vLyBtb2R1bGUgY2h1bmtzID0gNSIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gQXJlYVN0YWNrO1xuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfY2xhc3NuYW1lcyA9IHJlcXVpcmUoJ2NsYXNzbmFtZXMnKTtcblxudmFyIF9jbGFzc25hbWVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NsYXNzbmFtZXMpO1xuXG52YXIgX2FkZGl0aW9uYWxQcm9wcyA9IHJlcXVpcmUoJy4uL3V0aWwvYWRkaXRpb25hbFByb3BzJyk7XG5cbnZhciBfYWRkaXRpb25hbFByb3BzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2FkZGl0aW9uYWxQcm9wcyk7XG5cbnZhciBfZDNTaGFwZSA9IHJlcXVpcmUoJ2QzLXNoYXBlJyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhvYmosIGtleXMpIHsgdmFyIHRhcmdldCA9IHt9OyBmb3IgKHZhciBpIGluIG9iaikgeyBpZiAoa2V5cy5pbmRleE9mKGkpID49IDApIGNvbnRpbnVlOyBpZiAoIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGkpKSBjb250aW51ZTsgdGFyZ2V0W2ldID0gb2JqW2ldOyB9IHJldHVybiB0YXJnZXQ7IH1cblxuZnVuY3Rpb24gQXJlYVN0YWNrKF9yZWYpIHtcbiAgdmFyIGNsYXNzTmFtZSA9IF9yZWYuY2xhc3NOYW1lLFxuICAgICAgX3JlZiR0b3AgPSBfcmVmLnRvcCxcbiAgICAgIHRvcCA9IF9yZWYkdG9wID09PSB1bmRlZmluZWQgPyAwIDogX3JlZiR0b3AsXG4gICAgICBfcmVmJGxlZnQgPSBfcmVmLmxlZnQsXG4gICAgICBsZWZ0ID0gX3JlZiRsZWZ0ID09PSB1bmRlZmluZWQgPyAwIDogX3JlZiRsZWZ0LFxuICAgICAga2V5cyA9IF9yZWYua2V5cyxcbiAgICAgIGRhdGEgPSBfcmVmLmRhdGEsXG4gICAgICBjdXJ2ZSA9IF9yZWYuY3VydmUsXG4gICAgICBkZWZpbmVkID0gX3JlZi5kZWZpbmVkLFxuICAgICAgeCA9IF9yZWYueCxcbiAgICAgIHgwID0gX3JlZi54MCxcbiAgICAgIHgxID0gX3JlZi54MSxcbiAgICAgIHkwID0gX3JlZi55MCxcbiAgICAgIHkxID0gX3JlZi55MSxcbiAgICAgIGdseXBoID0gX3JlZi5nbHlwaCxcbiAgICAgIF9yZWYkcmV2ZXJzZSA9IF9yZWYucmV2ZXJzZSxcbiAgICAgIHJldmVyc2UgPSBfcmVmJHJldmVyc2UgPT09IHVuZGVmaW5lZCA/IGZhbHNlIDogX3JlZiRyZXZlcnNlLFxuICAgICAgcmVzdFByb3BzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKF9yZWYsIFsnY2xhc3NOYW1lJywgJ3RvcCcsICdsZWZ0JywgJ2tleXMnLCAnZGF0YScsICdjdXJ2ZScsICdkZWZpbmVkJywgJ3gnLCAneDAnLCAneDEnLCAneTAnLCAneTEnLCAnZ2x5cGgnLCAncmV2ZXJzZSddKTtcblxuICB2YXIgc3RhY2sgPSAoMCwgX2QzU2hhcGUuc3RhY2spKCk7XG4gIGlmIChrZXlzKSBzdGFjay5rZXlzKGtleXMpO1xuXG4gIHZhciBwYXRoID0gKDAsIF9kM1NoYXBlLmFyZWEpKCk7XG4gIGlmICh4KSBwYXRoLngoeCk7XG4gIGlmICh4MCkgcGF0aC54MCh4MCk7XG4gIGlmICh4MSkgcGF0aC54MSh4MSk7XG4gIGlmICh5MCkgcGF0aC55MCh5MCk7XG4gIGlmICh5MSkgcGF0aC55MSh5MSk7XG4gIGlmIChjdXJ2ZSkgcGF0aC5jdXJ2ZShjdXJ2ZSk7XG4gIGlmIChkZWZpbmVkKSBwYXRoLmRlZmluZWQoZGVmaW5lZCk7XG5cbiAgdmFyIHNlcmllc0RhdGEgPSBzdGFjayhkYXRhKTtcbiAgaWYgKHJldmVyc2UpIHNlcmllc0RhdGEucmV2ZXJzZSgpO1xuXG4gIHJldHVybiBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAnZycsXG4gICAgbnVsbCxcbiAgICBzZXJpZXNEYXRhLm1hcChmdW5jdGlvbiAoc2VyaWVzLCBpKSB7XG4gICAgICByZXR1cm4gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoJ3BhdGgnLCBfZXh0ZW5kcyh7XG4gICAgICAgIGNsYXNzTmFtZTogKDAsIF9jbGFzc25hbWVzMi5kZWZhdWx0KSgndngtYXJlYS1zdGFjaycsIGNsYXNzTmFtZSksXG4gICAgICAgIGtleTogJ2FyZWEtc3RhY2stJyArIGkgKyAnLScgKyAoc2VyaWVzLmtleSB8fCAnJyksXG4gICAgICAgIGQ6IHBhdGgoc2VyaWVzKVxuICAgICAgfSwgKDAsIF9hZGRpdGlvbmFsUHJvcHMyLmRlZmF1bHQpKHJlc3RQcm9wcywge1xuICAgICAgICBkYXR1bTogc2VyaWVzW2ldLFxuICAgICAgICBpbmRleDogaSxcbiAgICAgICAgc2VyaWVzOiBzZXJpZXNcbiAgICAgIH0pKSk7XG4gICAgfSksXG4gICAgISFnbHlwaCAmJiBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICdnJyxcbiAgICAgIHsgY2xhc3NOYW1lOiAndngtYXJlYS1zdGFjay1nbHlwaHMnIH0sXG4gICAgICBkYXRhLm1hcChnbHlwaClcbiAgICApXG4gICk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvQHZ4L3NoYXBlL2J1aWxkL3NoYXBlcy9BcmVhU3RhY2suanNcbi8vIG1vZHVsZSBpZCA9IDY1MFxuLy8gbW9kdWxlIGNodW5rcyA9IDUiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IEJhckdyb3VwO1xuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfcHJvcFR5cGVzID0gcmVxdWlyZSgncHJvcC10eXBlcycpO1xuXG52YXIgX3Byb3BUeXBlczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wcm9wVHlwZXMpO1xuXG52YXIgX2NsYXNzbmFtZXMgPSByZXF1aXJlKCdjbGFzc25hbWVzJyk7XG5cbnZhciBfY2xhc3NuYW1lczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jbGFzc25hbWVzKTtcblxudmFyIF9ncm91cCA9IHJlcXVpcmUoJ0B2eC9ncm91cCcpO1xuXG52YXIgX0JhciA9IHJlcXVpcmUoJy4vQmFyJyk7XG5cbnZhciBfQmFyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0Jhcik7XG5cbnZhciBfYWRkaXRpb25hbFByb3BzID0gcmVxdWlyZSgnLi4vdXRpbC9hZGRpdGlvbmFsUHJvcHMnKTtcblxudmFyIF9hZGRpdGlvbmFsUHJvcHMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfYWRkaXRpb25hbFByb3BzKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKG9iaiwga2V5cykgeyB2YXIgdGFyZ2V0ID0ge307IGZvciAodmFyIGkgaW4gb2JqKSB7IGlmIChrZXlzLmluZGV4T2YoaSkgPj0gMCkgY29udGludWU7IGlmICghT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgaSkpIGNvbnRpbnVlOyB0YXJnZXRbaV0gPSBvYmpbaV07IH0gcmV0dXJuIHRhcmdldDsgfVxuXG5mdW5jdGlvbiBCYXJHcm91cChfcmVmKSB7XG4gIHZhciBkYXRhID0gX3JlZi5kYXRhLFxuICAgICAgY2xhc3NOYW1lID0gX3JlZi5jbGFzc05hbWUsXG4gICAgICB0b3AgPSBfcmVmLnRvcCxcbiAgICAgIGxlZnQgPSBfcmVmLmxlZnQsXG4gICAgICB4MCA9IF9yZWYueDAsXG4gICAgICB4MFNjYWxlID0gX3JlZi54MFNjYWxlLFxuICAgICAgeDFTY2FsZSA9IF9yZWYueDFTY2FsZSxcbiAgICAgIHlTY2FsZSA9IF9yZWYueVNjYWxlLFxuICAgICAgelNjYWxlID0gX3JlZi56U2NhbGUsXG4gICAgICBrZXlzID0gX3JlZi5rZXlzLFxuICAgICAgaGVpZ2h0ID0gX3JlZi5oZWlnaHQsXG4gICAgICByZXN0UHJvcHMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMoX3JlZiwgWydkYXRhJywgJ2NsYXNzTmFtZScsICd0b3AnLCAnbGVmdCcsICd4MCcsICd4MFNjYWxlJywgJ3gxU2NhbGUnLCAneVNjYWxlJywgJ3pTY2FsZScsICdrZXlzJywgJ2hlaWdodCddKTtcblxuICB2YXIgZm9ybWF0ID0geDBTY2FsZS50aWNrRm9ybWF0ID8geDBTY2FsZS50aWNrRm9ybWF0KCkgOiBmdW5jdGlvbiAoZCkge1xuICAgIHJldHVybiBkO1xuICB9O1xuICByZXR1cm4gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgX2dyb3VwLkdyb3VwLFxuICAgIHtcbiAgICAgIGNsYXNzTmFtZTogKDAsIF9jbGFzc25hbWVzMi5kZWZhdWx0KSgndngtYmFyLWdyb3VwJywgY2xhc3NOYW1lKSxcbiAgICAgIHRvcDogdG9wLFxuICAgICAgbGVmdDogbGVmdFxuICAgIH0sXG4gICAgZGF0YSAmJiBkYXRhLm1hcChmdW5jdGlvbiAoZCwgaSkge1xuICAgICAgcmV0dXJuIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICBfZ3JvdXAuR3JvdXAsXG4gICAgICAgIHtcbiAgICAgICAgICBrZXk6ICdiYXItZ3JvdXAtJyArIGkgKyAnLScgKyB4MChkKSxcbiAgICAgICAgICBsZWZ0OiB4MFNjYWxlKHgwKGQpKVxuICAgICAgICB9LFxuICAgICAgICBrZXlzICYmIGtleXMubWFwKGZ1bmN0aW9uIChrZXksIGkpIHtcbiAgICAgICAgICB2YXIgdmFsdWUgPSBkW2tleV07XG4gICAgICAgICAgcmV0dXJuIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KF9CYXIyLmRlZmF1bHQsIF9leHRlbmRzKHtcbiAgICAgICAgICAgIGtleTogJ2Jhci1ncm91cC1iYXItJyArIGkgKyAnLScgKyB2YWx1ZSArICctJyArIGtleSxcbiAgICAgICAgICAgIHg6IHgxU2NhbGUoa2V5KSxcbiAgICAgICAgICAgIHk6IHlTY2FsZSh2YWx1ZSksXG4gICAgICAgICAgICB3aWR0aDogeDFTY2FsZS5iYW5kd2lkdGgoKSxcbiAgICAgICAgICAgIGhlaWdodDogaGVpZ2h0IC0geVNjYWxlKHZhbHVlKSxcbiAgICAgICAgICAgIGZpbGw6IHpTY2FsZShrZXkpLFxuICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICBrZXk6IGtleSxcbiAgICAgICAgICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgICAgICAgICB4OiBmb3JtYXQoeDAoZCkpLFxuICAgICAgICAgICAgICBkYXRhOiBkXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSwgcmVzdFByb3BzKSk7XG4gICAgICAgIH0pXG4gICAgICApO1xuICAgIH0pXG4gICk7XG59XG5cbkJhckdyb3VwLnByb3BUeXBlcyA9IHtcbiAgZGF0YTogX3Byb3BUeXBlczIuZGVmYXVsdC5hcnJheS5pc1JlcXVpcmVkLFxuICB4MDogX3Byb3BUeXBlczIuZGVmYXVsdC5mdW5jLmlzUmVxdWlyZWQsXG4gIHgwU2NhbGU6IF9wcm9wVHlwZXMyLmRlZmF1bHQuZnVuYy5pc1JlcXVpcmVkLFxuICB4MVNjYWxlOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmZ1bmMuaXNSZXF1aXJlZCxcbiAgeVNjYWxlOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmZ1bmMuaXNSZXF1aXJlZCxcbiAgelNjYWxlOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmZ1bmMuaXNSZXF1aXJlZCxcbiAga2V5czogX3Byb3BUeXBlczIuZGVmYXVsdC5hcnJheS5pc1JlcXVpcmVkLFxuICBoZWlnaHQ6IF9wcm9wVHlwZXMyLmRlZmF1bHQubnVtYmVyLmlzUmVxdWlyZWQsXG4gIGNsYXNzTmFtZTogX3Byb3BUeXBlczIuZGVmYXVsdC5zdHJpbmcsXG4gIHRvcDogX3Byb3BUeXBlczIuZGVmYXVsdC5udW1iZXIsXG4gIGxlZnQ6IF9wcm9wVHlwZXMyLmRlZmF1bHQubnVtYmVyXG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL0B2eC9zaGFwZS9idWlsZC9zaGFwZXMvQmFyR3JvdXAuanNcbi8vIG1vZHVsZSBpZCA9IDY1MVxuLy8gbW9kdWxlIGNodW5rcyA9IDUiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IEJhclN0YWNrO1xuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfcHJvcFR5cGVzID0gcmVxdWlyZSgncHJvcC10eXBlcycpO1xuXG52YXIgX3Byb3BUeXBlczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wcm9wVHlwZXMpO1xuXG52YXIgX2NsYXNzbmFtZXMgPSByZXF1aXJlKCdjbGFzc25hbWVzJyk7XG5cbnZhciBfY2xhc3NuYW1lczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jbGFzc25hbWVzKTtcblxudmFyIF9ncm91cCA9IHJlcXVpcmUoJ0B2eC9ncm91cCcpO1xuXG52YXIgX0JhciA9IHJlcXVpcmUoJy4vQmFyJyk7XG5cbnZhciBfQmFyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0Jhcik7XG5cbnZhciBfZDNTaGFwZSA9IHJlcXVpcmUoJ2QzLXNoYXBlJyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhvYmosIGtleXMpIHsgdmFyIHRhcmdldCA9IHt9OyBmb3IgKHZhciBpIGluIG9iaikgeyBpZiAoa2V5cy5pbmRleE9mKGkpID49IDApIGNvbnRpbnVlOyBpZiAoIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGkpKSBjb250aW51ZTsgdGFyZ2V0W2ldID0gb2JqW2ldOyB9IHJldHVybiB0YXJnZXQ7IH1cblxuZnVuY3Rpb24gQmFyU3RhY2soX3JlZikge1xuICB2YXIgZGF0YSA9IF9yZWYuZGF0YSxcbiAgICAgIGNsYXNzTmFtZSA9IF9yZWYuY2xhc3NOYW1lLFxuICAgICAgdG9wID0gX3JlZi50b3AsXG4gICAgICBsZWZ0ID0gX3JlZi5sZWZ0LFxuICAgICAgeCA9IF9yZWYueCxcbiAgICAgIHhTY2FsZSA9IF9yZWYueFNjYWxlLFxuICAgICAgeVNjYWxlID0gX3JlZi55U2NhbGUsXG4gICAgICB6U2NhbGUgPSBfcmVmLnpTY2FsZSxcbiAgICAgIGtleXMgPSBfcmVmLmtleXMsXG4gICAgICBoZWlnaHQgPSBfcmVmLmhlaWdodCxcbiAgICAgIHJlc3RQcm9wcyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhfcmVmLCBbJ2RhdGEnLCAnY2xhc3NOYW1lJywgJ3RvcCcsICdsZWZ0JywgJ3gnLCAneFNjYWxlJywgJ3lTY2FsZScsICd6U2NhbGUnLCAna2V5cycsICdoZWlnaHQnXSk7XG5cbiAgdmFyIHNlcmllcyA9ICgwLCBfZDNTaGFwZS5zdGFjaykoKS5rZXlzKGtleXMpKGRhdGEpO1xuICB2YXIgZm9ybWF0ID0geFNjYWxlLnRpY2tGb3JtYXQgPyB4U2NhbGUudGlja0Zvcm1hdCgpIDogZnVuY3Rpb24gKGQpIHtcbiAgICByZXR1cm4gZDtcbiAgfTtcbiAgdmFyIGJhbmR3aWR0aCA9IHhTY2FsZS5iYW5kd2lkdGgoKTtcbiAgdmFyIHN0ZXAgPSB4U2NhbGUuc3RlcCgpO1xuICB2YXIgcGFkZGluZ0lubmVyID0geFNjYWxlLnBhZGRpbmdJbm5lcigpO1xuICB2YXIgcGFkZGluZ091dGVyID0geFNjYWxlLnBhZGRpbmdPdXRlcigpO1xuICByZXR1cm4gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgX2dyb3VwLkdyb3VwLFxuICAgIHsgY2xhc3NOYW1lOiAoMCwgX2NsYXNzbmFtZXMyLmRlZmF1bHQpKCd2eC1iYXItc3RhY2snLCBjbGFzc05hbWUpLCB0b3A6IHRvcCwgbGVmdDogbGVmdCB9LFxuICAgIHNlcmllcyAmJiBzZXJpZXMubWFwKGZ1bmN0aW9uIChzLCBpKSB7XG4gICAgICByZXR1cm4gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgIF9ncm91cC5Hcm91cCxcbiAgICAgICAgeyBrZXk6ICd2eC1iYXItc3RhY2stJyArIGkgfSxcbiAgICAgICAgcy5tYXAoZnVuY3Rpb24gKGQsIGlpKSB7XG4gICAgICAgICAgdmFyIGJhckhlaWdodCA9IHlTY2FsZShkWzBdKSAtIHlTY2FsZShkWzFdKTtcbiAgICAgICAgICByZXR1cm4gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoX0JhcjIuZGVmYXVsdCwgX2V4dGVuZHMoe1xuICAgICAgICAgICAga2V5OiAnYmFyLWdyb3VwLWJhci0nICsgaSArICctJyArIGlpICsgJy0nICsgcy5rZXksXG4gICAgICAgICAgICB4OiB4U2NhbGUoeChkLmRhdGEpKSxcbiAgICAgICAgICAgIHk6IHlTY2FsZShkWzFdKSxcbiAgICAgICAgICAgIHdpZHRoOiBiYW5kd2lkdGgsXG4gICAgICAgICAgICBoZWlnaHQ6IGJhckhlaWdodCxcbiAgICAgICAgICAgIGZpbGw6IHpTY2FsZShzLmtleSksXG4gICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgIGJhbmR3aWR0aDogYmFuZHdpZHRoLFxuICAgICAgICAgICAgICBwYWRkaW5nSW5uZXI6IHBhZGRpbmdJbm5lcixcbiAgICAgICAgICAgICAgcGFkZGluZ091dGVyOiBwYWRkaW5nT3V0ZXIsXG4gICAgICAgICAgICAgIHN0ZXA6IHN0ZXAsXG4gICAgICAgICAgICAgIGtleTogcy5rZXksXG4gICAgICAgICAgICAgIHZhbHVlOiBkWzFdLFxuICAgICAgICAgICAgICBoZWlnaHQ6IGJhckhlaWdodCxcbiAgICAgICAgICAgICAgd2lkdGg6IGJhbmR3aWR0aCxcbiAgICAgICAgICAgICAgeDogeChkLmRhdGEpLFxuICAgICAgICAgICAgICB4Rm9ybWF0dGVkOiBmb3JtYXQoeChkLmRhdGEpKSxcbiAgICAgICAgICAgICAgZGF0YTogZC5kYXRhXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSwgcmVzdFByb3BzKSk7XG4gICAgICAgIH0pXG4gICAgICApO1xuICAgIH0pXG4gICk7XG59XG5cbkJhclN0YWNrLnByb3BUeXBlcyA9IHtcbiAgZGF0YTogX3Byb3BUeXBlczIuZGVmYXVsdC5hcnJheS5pc1JlcXVpcmVkLFxuICB4OiBfcHJvcFR5cGVzMi5kZWZhdWx0LmZ1bmMuaXNSZXF1aXJlZCxcbiAgeFNjYWxlOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmZ1bmMuaXNSZXF1aXJlZCxcbiAgeVNjYWxlOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmZ1bmMuaXNSZXF1aXJlZCxcbiAgelNjYWxlOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmZ1bmMuaXNSZXF1aXJlZCxcbiAga2V5czogX3Byb3BUeXBlczIuZGVmYXVsdC5hcnJheS5pc1JlcXVpcmVkLFxuICBjbGFzc05hbWU6IF9wcm9wVHlwZXMyLmRlZmF1bHQuc3RyaW5nLFxuICB0b3A6IF9wcm9wVHlwZXMyLmRlZmF1bHQubnVtYmVyLFxuICBsZWZ0OiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm51bWJlclxufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9Adngvc2hhcGUvYnVpbGQvc2hhcGVzL0JhclN0YWNrLmpzXG4vLyBtb2R1bGUgaWQgPSA2NTJcbi8vIG1vZHVsZSBjaHVua3MgPSA1IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG5leHBvcnRzLmRlZmF1bHQgPSBCYXJTdGFja0hvcml6b250YWw7XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIF9wcm9wVHlwZXMgPSByZXF1aXJlKCdwcm9wLXR5cGVzJyk7XG5cbnZhciBfcHJvcFR5cGVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3Byb3BUeXBlcyk7XG5cbnZhciBfY2xhc3NuYW1lcyA9IHJlcXVpcmUoJ2NsYXNzbmFtZXMnKTtcblxudmFyIF9jbGFzc25hbWVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NsYXNzbmFtZXMpO1xuXG52YXIgX2dyb3VwID0gcmVxdWlyZSgnQHZ4L2dyb3VwJyk7XG5cbnZhciBfQmFyID0gcmVxdWlyZSgnLi9CYXInKTtcblxudmFyIF9CYXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfQmFyKTtcblxudmFyIF9kM1NoYXBlID0gcmVxdWlyZSgnZDMtc2hhcGUnKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKG9iaiwga2V5cykgeyB2YXIgdGFyZ2V0ID0ge307IGZvciAodmFyIGkgaW4gb2JqKSB7IGlmIChrZXlzLmluZGV4T2YoaSkgPj0gMCkgY29udGludWU7IGlmICghT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgaSkpIGNvbnRpbnVlOyB0YXJnZXRbaV0gPSBvYmpbaV07IH0gcmV0dXJuIHRhcmdldDsgfVxuXG5mdW5jdGlvbiBCYXJTdGFja0hvcml6b250YWwoX3JlZikge1xuICB2YXIgZGF0YSA9IF9yZWYuZGF0YSxcbiAgICAgIGNsYXNzTmFtZSA9IF9yZWYuY2xhc3NOYW1lLFxuICAgICAgdG9wID0gX3JlZi50b3AsXG4gICAgICBsZWZ0ID0gX3JlZi5sZWZ0LFxuICAgICAgeSA9IF9yZWYueSxcbiAgICAgIHhTY2FsZSA9IF9yZWYueFNjYWxlLFxuICAgICAgeVNjYWxlID0gX3JlZi55U2NhbGUsXG4gICAgICB6U2NhbGUgPSBfcmVmLnpTY2FsZSxcbiAgICAgIGtleXMgPSBfcmVmLmtleXMsXG4gICAgICBoZWlnaHQgPSBfcmVmLmhlaWdodCxcbiAgICAgIHJlc3RQcm9wcyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhfcmVmLCBbJ2RhdGEnLCAnY2xhc3NOYW1lJywgJ3RvcCcsICdsZWZ0JywgJ3knLCAneFNjYWxlJywgJ3lTY2FsZScsICd6U2NhbGUnLCAna2V5cycsICdoZWlnaHQnXSk7XG5cbiAgdmFyIHNlcmllcyA9ICgwLCBfZDNTaGFwZS5zdGFjaykoKS5rZXlzKGtleXMpKGRhdGEpO1xuICB2YXIgZm9ybWF0ID0geVNjYWxlLnRpY2tGb3JtYXQgPyB5U2NhbGUudGlja0Zvcm1hdCgpIDogZnVuY3Rpb24gKGQpIHtcbiAgICByZXR1cm4gZDtcbiAgfTtcbiAgdmFyIGJhbmR3aWR0aCA9IHlTY2FsZS5iYW5kd2lkdGgoKTtcbiAgdmFyIHN0ZXAgPSB5U2NhbGUuc3RlcCgpO1xuICB2YXIgcGFkZGluZ0lubmVyID0geVNjYWxlLnBhZGRpbmdJbm5lcigpO1xuICB2YXIgcGFkZGluZ091dGVyID0geVNjYWxlLnBhZGRpbmdPdXRlcigpO1xuICByZXR1cm4gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgX2dyb3VwLkdyb3VwLFxuICAgIHsgY2xhc3NOYW1lOiAoMCwgX2NsYXNzbmFtZXMyLmRlZmF1bHQpKCd2eC1iYXItc3RhY2staG9yaXpvbnRhbCcsIGNsYXNzTmFtZSksIHRvcDogdG9wLCBsZWZ0OiBsZWZ0IH0sXG4gICAgc2VyaWVzICYmIHNlcmllcy5tYXAoZnVuY3Rpb24gKHMsIGkpIHtcbiAgICAgIHJldHVybiBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgX2dyb3VwLkdyb3VwLFxuICAgICAgICB7IGtleTogJ3Z4LWJhci1zdGFjay1ob3Jpem9udGFsLScgKyBpIH0sXG4gICAgICAgIHMubWFwKGZ1bmN0aW9uIChkLCBpaSkge1xuICAgICAgICAgIHZhciBiYXJXaWR0aCA9IHhTY2FsZShkWzFdKSAtIHhTY2FsZShkWzBdKTtcbiAgICAgICAgICByZXR1cm4gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoX0JhcjIuZGVmYXVsdCwgX2V4dGVuZHMoe1xuICAgICAgICAgICAga2V5OiAnYmFyLWdyb3VwLWJhci0nICsgaSArICctJyArIGlpICsgJy0nICsgcy5rZXksXG4gICAgICAgICAgICB4OiB4U2NhbGUoZFswXSksXG4gICAgICAgICAgICB5OiB5U2NhbGUoeShkLmRhdGEpKSxcbiAgICAgICAgICAgIHdpZHRoOiBiYXJXaWR0aCxcbiAgICAgICAgICAgIGhlaWdodDogYmFuZHdpZHRoLFxuICAgICAgICAgICAgZmlsbDogelNjYWxlKHMua2V5KSxcbiAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgYmFuZHdpZHRoOiBiYW5kd2lkdGgsXG4gICAgICAgICAgICAgIHBhZGRpbmdJbm5lcjogcGFkZGluZ0lubmVyLFxuICAgICAgICAgICAgICBwYWRkaW5nT3V0ZXI6IHBhZGRpbmdPdXRlcixcbiAgICAgICAgICAgICAgc3RlcDogc3RlcCxcbiAgICAgICAgICAgICAga2V5OiBzLmtleSxcbiAgICAgICAgICAgICAgdmFsdWU6IGRbMF0sXG4gICAgICAgICAgICAgIGhlaWdodDogYmFuZHdpZHRoLFxuICAgICAgICAgICAgICB3aWR0aDogYmFyV2lkdGgsXG4gICAgICAgICAgICAgIHk6IHkoZC5kYXRhKSxcbiAgICAgICAgICAgICAgeUZvcm1hdHRlZDogZm9ybWF0KHkoZC5kYXRhKSksXG4gICAgICAgICAgICAgIGRhdGE6IGQuZGF0YVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sIHJlc3RQcm9wcykpO1xuICAgICAgICB9KVxuICAgICAgKTtcbiAgICB9KVxuICApO1xufVxuXG5CYXJTdGFja0hvcml6b250YWwucHJvcFR5cGVzID0ge1xuICBkYXRhOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmFycmF5LmlzUmVxdWlyZWQsXG4gIHk6IF9wcm9wVHlwZXMyLmRlZmF1bHQuZnVuYy5pc1JlcXVpcmVkLFxuICB4U2NhbGU6IF9wcm9wVHlwZXMyLmRlZmF1bHQuZnVuYy5pc1JlcXVpcmVkLFxuICB5U2NhbGU6IF9wcm9wVHlwZXMyLmRlZmF1bHQuZnVuYy5pc1JlcXVpcmVkLFxuICB6U2NhbGU6IF9wcm9wVHlwZXMyLmRlZmF1bHQuZnVuYy5pc1JlcXVpcmVkLFxuICBrZXlzOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmFycmF5LmlzUmVxdWlyZWQsXG4gIGNsYXNzTmFtZTogX3Byb3BUeXBlczIuZGVmYXVsdC5zdHJpbmcsXG4gIHRvcDogX3Byb3BUeXBlczIuZGVmYXVsdC5udW1iZXIsXG4gIGxlZnQ6IF9wcm9wVHlwZXMyLmRlZmF1bHQubnVtYmVyXG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL0B2eC9zaGFwZS9idWlsZC9zaGFwZXMvQmFyU3RhY2tIb3Jpem9udGFsLmpzXG4vLyBtb2R1bGUgaWQgPSA2NTNcbi8vIG1vZHVsZSBjaHVua3MgPSA1IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG5leHBvcnRzLmRlZmF1bHQgPSBTdGFjaztcblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX2NsYXNzbmFtZXMgPSByZXF1aXJlKCdjbGFzc25hbWVzJyk7XG5cbnZhciBfY2xhc3NuYW1lczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jbGFzc25hbWVzKTtcblxudmFyIF9ncm91cCA9IHJlcXVpcmUoJ0B2eC9ncm91cCcpO1xuXG52YXIgX2FkZGl0aW9uYWxQcm9wcyA9IHJlcXVpcmUoJy4uL3V0aWwvYWRkaXRpb25hbFByb3BzJyk7XG5cbnZhciBfYWRkaXRpb25hbFByb3BzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2FkZGl0aW9uYWxQcm9wcyk7XG5cbnZhciBfc3RhY2tPcmRlciA9IHJlcXVpcmUoJy4uL3V0aWwvc3RhY2tPcmRlcicpO1xuXG52YXIgX3N0YWNrT3JkZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc3RhY2tPcmRlcik7XG5cbnZhciBfc3RhY2tPZmZzZXQgPSByZXF1aXJlKCcuLi91dGlsL3N0YWNrT2Zmc2V0Jyk7XG5cbnZhciBfc3RhY2tPZmZzZXQyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc3RhY2tPZmZzZXQpO1xuXG52YXIgX2QzU2hhcGUgPSByZXF1aXJlKCdkMy1zaGFwZScpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMob2JqLCBrZXlzKSB7IHZhciB0YXJnZXQgPSB7fTsgZm9yICh2YXIgaSBpbiBvYmopIHsgaWYgKGtleXMuaW5kZXhPZihpKSA+PSAwKSBjb250aW51ZTsgaWYgKCFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBpKSkgY29udGludWU7IHRhcmdldFtpXSA9IG9ialtpXTsgfSByZXR1cm4gdGFyZ2V0OyB9XG5cbmZ1bmN0aW9uIFN0YWNrKF9yZWYpIHtcbiAgdmFyIGNsYXNzTmFtZSA9IF9yZWYuY2xhc3NOYW1lLFxuICAgICAgX3JlZiR0b3AgPSBfcmVmLnRvcCxcbiAgICAgIHRvcCA9IF9yZWYkdG9wID09PSB1bmRlZmluZWQgPyAwIDogX3JlZiR0b3AsXG4gICAgICBfcmVmJGxlZnQgPSBfcmVmLmxlZnQsXG4gICAgICBsZWZ0ID0gX3JlZiRsZWZ0ID09PSB1bmRlZmluZWQgPyAwIDogX3JlZiRsZWZ0LFxuICAgICAga2V5cyA9IF9yZWYua2V5cyxcbiAgICAgIGRhdGEgPSBfcmVmLmRhdGEsXG4gICAgICBjdXJ2ZSA9IF9yZWYuY3VydmUsXG4gICAgICBkZWZpbmVkID0gX3JlZi5kZWZpbmVkLFxuICAgICAgeCA9IF9yZWYueCxcbiAgICAgIHgwID0gX3JlZi54MCxcbiAgICAgIHgxID0gX3JlZi54MSxcbiAgICAgIHkwID0gX3JlZi55MCxcbiAgICAgIHkxID0gX3JlZi55MSxcbiAgICAgIHZhbHVlID0gX3JlZi52YWx1ZSxcbiAgICAgIG9yZGVyID0gX3JlZi5vcmRlcixcbiAgICAgIG9mZnNldCA9IF9yZWYub2Zmc2V0LFxuICAgICAgcmVuZGVyID0gX3JlZi5yZW5kZXIsXG4gICAgICBfcmVmJHJldmVyc2UgPSBfcmVmLnJldmVyc2UsXG4gICAgICByZXZlcnNlID0gX3JlZiRyZXZlcnNlID09PSB1bmRlZmluZWQgPyBmYWxzZSA6IF9yZWYkcmV2ZXJzZSxcbiAgICAgIHJlc3RQcm9wcyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhfcmVmLCBbJ2NsYXNzTmFtZScsICd0b3AnLCAnbGVmdCcsICdrZXlzJywgJ2RhdGEnLCAnY3VydmUnLCAnZGVmaW5lZCcsICd4JywgJ3gwJywgJ3gxJywgJ3kwJywgJ3kxJywgJ3ZhbHVlJywgJ29yZGVyJywgJ29mZnNldCcsICdyZW5kZXInLCAncmV2ZXJzZSddKTtcblxuICB2YXIgc3RhY2sgPSAoMCwgX2QzU2hhcGUuc3RhY2spKCk7XG4gIGlmIChrZXlzKSBzdGFjay5rZXlzKGtleXMpO1xuICBpZiAodmFsdWUpIHN0YWNrLnZhbHVlKHZhbHVlKTtcbiAgaWYgKG9yZGVyKSBzdGFjay5vcmRlcigoMCwgX3N0YWNrT3JkZXIyLmRlZmF1bHQpKG9yZGVyKSk7XG4gIGlmIChvZmZzZXQpIHN0YWNrLm9mZnNldCgoMCwgX3N0YWNrT2Zmc2V0Mi5kZWZhdWx0KShvZmZzZXQpKTtcblxuICB2YXIgcGF0aCA9ICgwLCBfZDNTaGFwZS5hcmVhKSgpO1xuICBpZiAoeCkgcGF0aC54KHgpO1xuICBpZiAoeDApIHBhdGgueDAoeDApO1xuICBpZiAoeDEpIHBhdGgueDEoeDEpO1xuICBpZiAoeTApIHBhdGgueTAoeTApO1xuICBpZiAoeTEpIHBhdGgueTEoeTEpO1xuICBpZiAoY3VydmUpIHBhdGguY3VydmUoY3VydmUpO1xuICBpZiAoZGVmaW5lZCkgcGF0aC5kZWZpbmVkKGRlZmluZWQpO1xuXG4gIHZhciBzZXJpZXNEYXRhID0gc3RhY2soZGF0YSk7XG4gIGlmIChyZXZlcnNlKSBzZXJpZXNEYXRhLnJldmVyc2UoKTtcblxuICBpZiAocmVuZGVyKSByZXR1cm4gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgX2dyb3VwLkdyb3VwLFxuICAgIHsgdG9wOiB0b3AsIGxlZnQ6IGxlZnQgfSxcbiAgICByZW5kZXIoeyBzZXJpZXNEYXRhOiBzZXJpZXNEYXRhLCBwYXRoOiBwYXRoIH0pXG4gICk7XG5cbiAgcmV0dXJuIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgIF9ncm91cC5Hcm91cCxcbiAgICB7IHRvcDogdG9wLCBsZWZ0OiBsZWZ0IH0sXG4gICAgc2VyaWVzRGF0YS5tYXAoZnVuY3Rpb24gKHNlcmllcywgaSkge1xuICAgICAgcmV0dXJuIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KCdwYXRoJywgX2V4dGVuZHMoe1xuICAgICAgICBjbGFzc05hbWU6ICgwLCBfY2xhc3NuYW1lczIuZGVmYXVsdCkoJ3Z4LXN0YWNrJywgY2xhc3NOYW1lKSxcbiAgICAgICAga2V5OiAnc3RhY2stJyArIGkgKyAnLScgKyAoc2VyaWVzLmtleSB8fCAnJyksXG4gICAgICAgIGQ6IHBhdGgoc2VyaWVzKVxuICAgICAgfSwgKDAsIF9hZGRpdGlvbmFsUHJvcHMyLmRlZmF1bHQpKHJlc3RQcm9wcywge1xuICAgICAgICBkYXR1bTogc2VyaWVzW2ldLFxuICAgICAgICBpbmRleDogaSxcbiAgICAgICAgc2VyaWVzOiBzZXJpZXNcbiAgICAgIH0pKSk7XG4gICAgfSlcbiAgKTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9Adngvc2hhcGUvYnVpbGQvc2hhcGVzL1N0YWNrLmpzXG4vLyBtb2R1bGUgaWQgPSA2NTRcbi8vIG1vZHVsZSBjaHVua3MgPSA1Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTs7OztBQUhBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFMQTtBQUtBO0FBQ0E7QUFDQTtBQVNBOzs7Ozs7OztBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBS0E7Ozs7OztBQUVBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7O0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBSUE7QUFKQTs7QUFNQTtBQUNBO0FBREE7Ozs7Ozs7Ozs7QUM3REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7OztBQy9DQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUNsQkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7QUM1Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7O0FDSkE7QUFBQTtBQUFBOzs7Ozs7Ozs7QUNBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7OztBQ25CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7OztBQ1JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7OztBQ0pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQ2ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7QUM5QkE7Ozs7Ozs7OztBQ0FBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7OztBQ2xEQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7OztBQzVEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDN0VBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7OztBQ3REQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7OztBQ05BO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7QUN2RkE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7O0FDWEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7QUM1R0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7QUNuQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7OztBQ2xCQTtBQUNBO0FBQ0E7Ozs7Ozs7OztBQ0ZBO0FBQUE7Ozs7Ozs7OztBQ0FBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7QUNSQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7OztBQ2pCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7QUNiQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7O0FDdkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7QUNOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7QUNWQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7QUN6QkE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7OztBQzVEQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7OztBQ2hEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDWEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUN0QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUN0QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDMVJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQ3REQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7O0FDbFFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7QUNqSUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7O0FDOUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7O0FDRkE7QUFDQTtBQUNBOzs7Ozs7Ozs7QUNGQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7QUM1QkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7O0FDbkZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7OztBQzdDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7OztBQ25EQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7O0FDdENBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7O0FDdkRBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7OztBQ3pFQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7O0FDN0RBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7OztBQ3hCQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7O0FDdkdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7OztBQ2hFQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7O0FDcERBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7QUN4REE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7O0FDVEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7O0FDYkE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7O0FDVEE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7OztBQ3ZCQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7OztBQ0pBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7OztBQzFCQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7OztBQ0pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDbEZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDeENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDbkVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQ2ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUN6Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQ3pGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQ25IQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQzdEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQzFEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQzFEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQzFEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUNyRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDckVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDL0VBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQ3pEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUN6REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDckVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQzVEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUM1REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDeEVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUNqSEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQzdFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDbkZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUNyR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQ3JHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDckdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==