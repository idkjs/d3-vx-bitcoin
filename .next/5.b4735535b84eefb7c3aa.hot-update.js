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
// import d3 methods to render x and y axis


function Chart(_ref) {
  var parentWidth = _ref.parentWidth,
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

  /** define accessor
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

  /** scale value to map value from a domain to range
   * see: https://github.com/d3/d3-scale
   * range defines starting point for data to show and endpoint
   * domain is what data to spread over that range.
   */

  var xScale = (0, _scale.scaleTime)({
    range: [0, width],
    domain: [Math.min.apply(Math, (0, _toConsumableArray3.default)(data.map(x))), Math.max.apply(Math, (0, _toConsumableArray3.default)(data.map(x)))]
  });
  console.log(xScale);
  return _react2.default.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    }
  }, _react2.default.createElement("svg", { width: width, height: height, __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    }
  }, _react2.default.createElement("rect", { width: width, height: height, fill: "steelblue", __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    }
  })));
}

exports.default = (0, _responsive.withParentSize)(Chart);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvY2hhcnQuanMiXSwibmFtZXMiOlsid2l0aFBhcmVudFNpemUiLCJzY2FsZVRpbWUiLCJzY2FsZUxpbmVhciIsIkNoYXJ0IiwicGFyZW50V2lkdGgiLCJwYXJlbnRIZWlnaHQiLCJtYXJnaW4iLCJ0b3AiLCJib3R0b20iLCJsZWZ0IiwicmlnaHQiLCJ3aWR0aCIsImhlaWdodCIsIngiLCJEYXRlIiwiZCIsInRpbWUiLCJ5IiwicHJpY2UiLCJ4U2NhbGUiLCJyYW5nZSIsImRvbWFpbiIsIk1hdGgiLCJtaW4iLCJkYXRhIiwibWFwIiwibWF4IiwiY29uc29sZSIsImxvZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFTOztBQUVULEFBQVMsQUFBVzs7Ozs7QUFEcEI7OztBQUdBLFNBQUEsQUFBUyxZQUFxQztNQUE3QixBQUE2QixtQkFBN0IsQUFBNkI7TUFBaEIsQUFBZ0Isb0JBQWhCLEFBQWdCLEFBQzVDOztBQUNBO01BQU07U0FBUyxBQUNSLEFBQ0w7WUFGYSxBQUVMLEFBQ1I7VUFIYSxBQUdQLEFBQ047V0FKRixBQUFlLEFBSU4sQUFFVDtBQU5lLEFBQ2I7TUFLSSxRQUFRLGNBQWMsT0FBZCxBQUFxQixPQUFPLE9BQTFDLEFBQWlELEFBQ2pEO01BQU0sU0FBUyxlQUFlLE9BQWYsQUFBc0IsTUFBTSxPQUEzQyxBQUFrRCxBQUVsRDs7QUFRQTs7Ozs7Ozs7TUFBTSxJQUFJLFNBQUosQUFBSSxLQUFBO1dBQUssSUFBQSxBQUFJLEtBQUssRUFBZCxBQUFLLEFBQVc7QUFBMUIsQUFDQTtNQUFNLElBQUksU0FBSixBQUFJLEtBQUE7V0FBSyxFQUFMLEFBQU87QUFBakIsQUFFQTs7QUFNQTs7Ozs7O01BQU07V0FDRyxDQUFBLEFBQUMsR0FEZSxBQUNoQixBQUFJLEFBQ1g7WUFBUSxDQUFDLEtBQUEsQUFBSyxpREFBTyxLQUFBLEFBQUssSUFBbEIsQUFBQyxBQUFZLEFBQVMsTUFBSyxLQUFBLEFBQUssaURBQU8sS0FBQSxBQUFLLElBRnRELEFBQWUsQUFBVSxBQUVmLEFBQTJCLEFBQVksQUFBUyxBQUUxRDtBQUp5QixBQUN2QixHQURhO1VBSWYsQUFBUSxJQUFSLEFBQVksQUFDWjt5QkFDRSxjQUFBOztnQkFBQTtrQkFBQSxBQUNFO0FBREY7QUFBQSxHQUFBLGtCQUNFLGNBQUEsU0FBSyxPQUFMLEFBQVksT0FBTyxRQUFuQixBQUEyQjtnQkFBM0I7a0JBQUEsQUFDRTtBQURGOzZDQUNRLE9BQU4sQUFBYSxPQUFPLFFBQXBCLEFBQTRCLFFBQVEsTUFBcEMsQUFBeUM7Z0JBQXpDO2tCQUhOLEFBQ0UsQUFDRSxBQUNFLEFBSVA7QUFKTzs7QUFNUjs7a0JBQWUsZ0NBQWYsQUFBZSxBQUFlIiwiZmlsZSI6ImNoYXJ0LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9wcmlzY18wMDAvY29kZS9DQUNERVYvdngtdGVzdCJ9

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/Users/prisc_000/code/CACDEV/vx-test/components/chart.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/prisc_000/code/CACDEV/vx-test/components/chart.js"); } } })();

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS5iNDczNTUzNWI4NGVlZmI3YzNhYS5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9jaGFydC5qcz81N2RmOTIzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHdpdGhQYXJlbnRTaXplIH0gZnJvbSBcIkB2eC9yZXNwb25zaXZlXCI7XG4vLyBpbXBvcnQgZDMgbWV0aG9kcyB0byByZW5kZXIgeCBhbmQgeSBheGlzXG5pbXBvcnQgeyBzY2FsZVRpbWUsIHNjYWxlTGluZWFyIH0gZnJvbSBcIkB2eC9zY2FsZVwiO1xuXG5mdW5jdGlvbiBDaGFydCh7IHBhcmVudFdpZHRoLCBwYXJlbnRIZWlnaHQgfSkge1xuICAvKiogRGVmaW5lIG1hcmdpbiBmb3IgdGhpcyBkaXYgdG8gcGFzcyB0byBjYWxjdWxhdGlvbiBmb3Igc3ZnICovXG4gIGNvbnN0IG1hcmdpbiA9IHtcbiAgICB0b3A6IDE1LFxuICAgIGJvdHRvbTogNDAsXG4gICAgbGVmdDogMCxcbiAgICByaWdodDogMFxuICB9O1xuICBjb25zdCB3aWR0aCA9IHBhcmVudFdpZHRoIC0gbWFyZ2luLmxlZnQgLSBtYXJnaW4ucmlnaHQ7XG4gIGNvbnN0IGhlaWdodCA9IHBhcmVudEhlaWdodCAtIG1hcmdpbi50b3AgLSBtYXJnaW4uYm90dG9tO1xuXG4gIC8qKiBkZWZpbmUgYWNjZXNzb3JcbiAgICogc2VlOiBodHRwczovL2dpdGh1Yi5jb20vZDMvZDMtYXJyYXkjZDMtYXJyYXlcbiAgICogZGVmaW5lIHggYW5kIHdoYXQgZGF0YSBwb2ludCB3ZSB3YW50IGZvciBlYWNoIHggYXQgdGhhdCBkL2RhdGEgcG9pbnQsXG4gICAqICB0aGVuIGRvIHNhbWUgZm9yIHlcbiAgICogZm9yIHggd2Ugd2FudCB0aGUgZGF0ZSBvbiB0aGUgcmV0dXJuZWQgYml0Y29pbiB2YWx1ZSBqc29uXG4gICAqIGZvciB5IHdlIHdhbnQgdGhlIHByaWNlIG9uIHRoYXQgZCAvIGRhdGEgcG9pbnRcbiAgICovXG5cbiAgY29uc3QgeCA9IGQgPT4gbmV3IERhdGUoZC50aW1lKTtcbiAgY29uc3QgeSA9IGQgPT4gZC5wcmljZTtcblxuICAvKiogc2NhbGUgdmFsdWUgdG8gbWFwIHZhbHVlIGZyb20gYSBkb21haW4gdG8gcmFuZ2VcbiAgICogc2VlOiBodHRwczovL2dpdGh1Yi5jb20vZDMvZDMtc2NhbGVcbiAgICogcmFuZ2UgZGVmaW5lcyBzdGFydGluZyBwb2ludCBmb3IgZGF0YSB0byBzaG93IGFuZCBlbmRwb2ludFxuICAgKiBkb21haW4gaXMgd2hhdCBkYXRhIHRvIHNwcmVhZCBvdmVyIHRoYXQgcmFuZ2UuXG4gICAqL1xuXG4gIGNvbnN0IHhTY2FsZSA9IHNjYWxlVGltZSh7XG4gICAgcmFuZ2U6IFswLCB3aWR0aF0sXG4gICAgZG9tYWluOiBbTWF0aC5taW4oLi4uZGF0YS5tYXAoeCkpLCBNYXRoLm1heCguLi5kYXRhLm1hcCh4KSldXG4gIH0pO1xuICBjb25zb2xlLmxvZyh4U2NhbGUpO1xuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8c3ZnIHdpZHRoPXt3aWR0aH0gaGVpZ2h0PXtoZWlnaHR9PlxuICAgICAgICA8cmVjdCB3aWR0aD17d2lkdGh9IGhlaWdodD17aGVpZ2h0fSBmaWxsPVwic3RlZWxibHVlXCIgLz5cbiAgICAgIDwvc3ZnPlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoUGFyZW50U2l6ZShDaGFydCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL2NoYXJ0LmpzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBRkE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFMQTtBQUtBO0FBQ0E7QUFDQTtBQVNBOzs7Ozs7OztBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBS0E7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFFQTs7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFJQTtBQUpBOztBQU1BO0FBQ0E7QUFEQTs7Ozs7OztBIiwic291cmNlUm9vdCI6IiJ9