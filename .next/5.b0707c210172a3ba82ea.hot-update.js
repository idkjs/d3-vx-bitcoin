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

  return _react2.default.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    }
  }, _react2.default.createElement("svg", { width: width, height: height, __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    }
  }, _react2.default.createElement("rect", { width: width, height: height, fill: "steelblue", __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    }
  })));
}

exports.default = (0, _responsive.withParentSize)(Chart);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvY2hhcnQuanMiXSwibmFtZXMiOlsid2l0aFBhcmVudFNpemUiLCJzY2FsZVRpbWUiLCJzY2FsZUxpbmVhciIsIkNoYXJ0IiwiZGF0YSIsInBhcmVudFdpZHRoIiwicGFyZW50SGVpZ2h0IiwibWFyZ2luIiwidG9wIiwiYm90dG9tIiwibGVmdCIsInJpZ2h0Iiwid2lkdGgiLCJoZWlnaHQiLCJ4IiwiRGF0ZSIsImQiLCJ0aW1lIiwieSIsInByaWNlIiwibWluUHJpY2UiLCJNYXRoIiwibWluIiwibWFwIiwibWF4UHJpY2UiLCJtYXgiLCJ4U2NhbGUiLCJyYW5nZSIsImRvbWFpbiIsInlTY2FsZSIsImNvbnNvbGUiLCJsb2ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBUzs7QUFFVCxBQUFTLEFBQVc7Ozs7O0FBRHBCOzs7QUFHQSxTQUFBLEFBQVMsWUFBMkM7TUFBbkMsQUFBbUMsWUFBbkMsQUFBbUM7TUFBN0IsQUFBNkIsbUJBQTdCLEFBQTZCO01BQWhCLEFBQWdCLG9CQUFoQixBQUFnQixBQUNsRDs7QUFDQTtNQUFNO1NBQVMsQUFDUixBQUNMO1lBRmEsQUFFTCxBQUNSO1VBSGEsQUFHUCxBQUNOO1dBSkYsQUFBZSxBQUlOLEFBRVQ7QUFOZSxBQUNiO01BS0ksUUFBUSxjQUFjLE9BQWQsQUFBcUIsT0FBTyxPQUExQyxBQUFpRCxBQUNqRDtNQUFNLFNBQVMsZUFBZSxPQUFmLEFBQXNCLE1BQU0sT0FBM0MsQUFBa0QsQUFFbEQ7O0FBUUE7Ozs7Ozs7O01BQU0sSUFBSSxTQUFKLEFBQUksS0FBQTtXQUFLLElBQUEsQUFBSSxLQUFLLEVBQWQsQUFBSyxBQUFXO0FBQTFCLEFBQ0E7TUFBTSxJQUFJLFNBQUosQUFBSSxLQUFBO1dBQUssRUFBTCxBQUFPO0FBQWpCLEFBRUE7O0FBTUE7Ozs7OztBQUVBOztNQUFNLFdBQVcsS0FBQSxBQUFLLGlEQUFPLEtBQUEsQUFBSyxJQUFsQyxBQUFpQixBQUFZLEFBQVMsQUFDdEM7TUFBTSxXQUFXLEtBQUEsQUFBSyxpREFBTyxLQUFBLEFBQUssSUFBbEMsQUFBaUIsQUFBWSxBQUFTLEFBQ3RDO01BQU07V0FDRyxDQUFBLEFBQUMsR0FEZSxBQUNoQixBQUFJLEFBQ1g7WUFBUSxDQUFDLEtBQUEsQUFBSyxpREFBTyxLQUFBLEFBQUssSUFBbEIsQUFBQyxBQUFZLEFBQVMsTUFBSyxLQUFBLEFBQUssaURBQU8sS0FBQSxBQUFLLElBRnRELEFBQWUsQUFBVSxBQUVmLEFBQTJCLEFBQVksQUFBUyxBQUcxRDtBQUx5QixBQUN2QixHQURhOztNQUtUO1dBQ0csQ0FBQSxBQUFDLFFBRGlCLEFBQ2xCLEFBQVMsQUFDaEI7WUFBUSxDQUFBLEFBQUMsVUFGWCxBQUFlLEFBQVksQUFFakIsQUFBVyxBQUdyQjtBQUwyQixBQUN6QixHQURhOztVQUtmLEFBQVEsSUFBSSxPQUFaLEFBQVksQUFBTyxBQUNuQjtVQUFBLEFBQVEsSUFBSSxPQUFaLEFBQVksQUFBTyxBQUVuQjs7eUJBQ0UsY0FBQTs7Z0JBQUE7a0JBQUEsQUFDRTtBQURGO0FBQUEsR0FBQSxrQkFDRSxjQUFBLFNBQUssT0FBTCxBQUFZLE9BQU8sUUFBbkIsQUFBMkI7Z0JBQTNCO2tCQUFBLEFBQ0U7QUFERjs2Q0FDUSxPQUFOLEFBQWEsT0FBTyxRQUFwQixBQUE0QixRQUFRLE1BQXBDLEFBQXlDO2dCQUF6QztrQkFITixBQUNFLEFBQ0UsQUFDRSxBQUlQO0FBSk87O0FBTVI7O2tCQUFlLGdDQUFmLEFBQWUsQUFBZSIsImZpbGUiOiJjaGFydC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvcHJpc2NfMDAwL2NvZGUvQ0FDREVWL3Z4LXRlc3QifQ==

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/Users/prisc_000/code/CACDEV/vx-test/components/chart.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/prisc_000/code/CACDEV/vx-test/components/chart.js"); } } })();

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS5iMDcwN2MyMTAxNzJhM2JhODJlYS5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9jaGFydC5qcz8wMGE3YjI4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHdpdGhQYXJlbnRTaXplIH0gZnJvbSBcIkB2eC9yZXNwb25zaXZlXCI7XG4vLyBJbXBvcnQgZDMgbWV0aG9kcyB0byByZW5kZXIgeCBhbmQgeSBheGlzXG5pbXBvcnQgeyBzY2FsZVRpbWUsIHNjYWxlTGluZWFyIH0gZnJvbSBcIkB2eC9zY2FsZVwiO1xuXG5mdW5jdGlvbiBDaGFydCh7IGRhdGEsIHBhcmVudFdpZHRoLCBwYXJlbnRIZWlnaHQgfSkge1xuICAvKiogRGVmaW5lIG1hcmdpbiBmb3IgdGhpcyBkaXYgdG8gcGFzcyB0byBjYWxjdWxhdGlvbiBmb3Igc3ZnICovXG4gIGNvbnN0IG1hcmdpbiA9IHtcbiAgICB0b3A6IDE1LFxuICAgIGJvdHRvbTogNDAsXG4gICAgbGVmdDogMCxcbiAgICByaWdodDogMFxuICB9O1xuICBjb25zdCB3aWR0aCA9IHBhcmVudFdpZHRoIC0gbWFyZ2luLmxlZnQgLSBtYXJnaW4ucmlnaHQ7XG4gIGNvbnN0IGhlaWdodCA9IHBhcmVudEhlaWdodCAtIG1hcmdpbi50b3AgLSBtYXJnaW4uYm90dG9tO1xuXG4gIC8qKiBEZWZpbmUgYWNjZXNzb3JcbiAgICogc2VlOiBodHRwczovL2dpdGh1Yi5jb20vZDMvZDMtYXJyYXkjZDMtYXJyYXlcbiAgICogZGVmaW5lIHggYW5kIHdoYXQgZGF0YSBwb2ludCB3ZSB3YW50IGZvciBlYWNoIHggYXQgdGhhdCBkL2RhdGEgcG9pbnQsXG4gICAqICB0aGVuIGRvIHNhbWUgZm9yIHlcbiAgICogZm9yIHggd2Ugd2FudCB0aGUgZGF0ZSBvbiB0aGUgcmV0dXJuZWQgYml0Y29pbiB2YWx1ZSBqc29uXG4gICAqIGZvciB5IHdlIHdhbnQgdGhlIHByaWNlIG9uIHRoYXQgZCAvIGRhdGEgcG9pbnRcbiAgICovXG5cbiAgY29uc3QgeCA9IGQgPT4gbmV3IERhdGUoZC50aW1lKTtcbiAgY29uc3QgeSA9IGQgPT4gZC5wcmljZTtcblxuICAvKiogU2NhbGUgdmFsdWUgdG8gbWFwIHZhbHVlIGZyb20gYSBkb21haW4gdG8gcmFuZ2VcbiAgICogc2VlOiBodHRwczovL2dpdGh1Yi5jb20vZDMvZDMtc2NhbGVcbiAgICogcmFuZ2UgZGVmaW5lcyBzdGFydGluZyBwb2ludCBmb3IgZGF0YSB0byBzaG93IGFuZCBlbmRwb2ludFxuICAgKiBkb21haW4gaXMgd2hhdCBkYXRhIHRvIHNwcmVhZCBvdmVyIHRoYXQgcmFuZ2UuXG4gICAqL1xuXG4gIC8qKiBzdG9yZSBtaW4gbWF4IHkgdmFsdWVzIHRvIHJldXNlIGxhdGVyICovXG5cbiAgY29uc3QgbWluUHJpY2UgPSBNYXRoLm1pbiguLi5kYXRhLm1hcCh5KSk7XG4gIGNvbnN0IG1heFByaWNlID0gTWF0aC5tYXgoLi4uZGF0YS5tYXAoeSkpO1xuICBjb25zdCB4U2NhbGUgPSBzY2FsZVRpbWUoe1xuICAgIHJhbmdlOiBbMCwgd2lkdGhdLFxuICAgIGRvbWFpbjogW01hdGgubWluKC4uLmRhdGEubWFwKHgpKSwgTWF0aC5tYXgoLi4uZGF0YS5tYXAoeCkpXVxuICB9KTtcblxuICBjb25zdCB5U2NhbGUgPSBzY2FsZUxpbmVhcih7XG4gICAgcmFuZ2U6IFtoZWlnaHQsIDBdLFxuICAgIGRvbWFpbjogW21pblByaWNlLCBtYXhQcmljZV1cbiAgfSk7XG5cbiAgY29uc29sZS5sb2coeFNjYWxlLmRvbWFpbigpKTtcbiAgY29uc29sZS5sb2coeVNjYWxlLmRvbWFpbigpKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8c3ZnIHdpZHRoPXt3aWR0aH0gaGVpZ2h0PXtoZWlnaHR9PlxuICAgICAgICA8cmVjdCB3aWR0aD17d2lkdGh9IGhlaWdodD17aGVpZ2h0fSBmaWxsPVwic3RlZWxibHVlXCIgLz5cbiAgICAgIDwvc3ZnPlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoUGFyZW50U2l6ZShDaGFydCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL2NoYXJ0LmpzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBRkE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUxBO0FBS0E7QUFDQTtBQUNBO0FBU0E7Ozs7Ozs7O0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFLQTs7Ozs7O0FBRUE7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUVBOztBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUlBO0FBSkE7O0FBTUE7QUFDQTtBQURBOzs7Ozs7O0EiLCJzb3VyY2VSb290IjoiIn0=