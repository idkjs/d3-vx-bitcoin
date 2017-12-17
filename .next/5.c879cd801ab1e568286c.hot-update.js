webpackHotUpdate(5,{

/***/ 509:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _toConsumableArray2 = __webpack_require__(82);

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _react = __webpack_require__(17);

var _react2 = _interopRequireDefault(_react);

var _responsive = __webpack_require__(437);

var _scale = __webpack_require__(510);

var _shape = __webpack_require__(601);

var _gradient = __webpack_require__(491);

var _axis = __webpack_require__(659);

var _formatPrice = __webpack_require__(654);

var _formatPrice2 = _interopRequireDefault(_formatPrice);

var _maxprice = __webpack_require__(655);

var _maxprice2 = _interopRequireDefault(_maxprice);

var _minprice = __webpack_require__(656);

var _minprice2 = _interopRequireDefault(_minprice);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/Users/prisc_000/code/CACDEV/vx-test/components/chart.js";


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

  /** Define accessors and values to be passed to our shapes
   */

  var x = function x(d) {
    return new Date(d.time);
  };
  var y = function y(d) {
    return d.price;
  };

  var firstPoint = data[0];
  var currentPoint = data[data.length - 1];

  var minPrice = Math.min.apply(Math, (0, _toConsumableArray3.default)(data.map(y)));
  var maxPrice = Math.max.apply(Math, (0, _toConsumableArray3.default)(data.map(y)));
  var maxPriceData = [{ time: x(firstPoint), price: maxPrice }, { time: x(currentPoint), price: maxPrice }];

  var minPriceData = [{ time: x(firstPoint), price: minPrice }, { time: x(currentPoint), price: minPrice }];

  var xScale = (0, _scale.scaleTime)({
    range: [0, width],
    domain: [Math.min.apply(Math, (0, _toConsumableArray3.default)(data.map(x))), Math.max.apply(Math, (0, _toConsumableArray3.default)(data.map(x)))]
  });
  /** defines the scale of a y axis line */
  var yScale = (0, _scale.scaleLinear)({
    range: [height, 0],
    domain: [minPrice, maxPrice]
  });

  // Console.log(xScale.domain());
  // console.log(yScale.domain());

  /* end accessor values */
  //   call <LinePath, pass in the data, xScale, yScale domain mappers,
  //  and x and y accessors
  return _react2.default.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    }
  }, _react2.default.createElement("svg", { width: width, height: parentHeight, __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    }
  }, _react2.default.createElement(_axis.AxisBottom, {
    top: yScale(minPrice),
    data: data,
    scale: xScale,
    x: x,
    numTicks: 4,
    hideAxisLine: true,
    hideTicks: true,
    tickLabelComponent: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    }
  }), _react2.default.createElement(_gradient.LinearGradient, {
    id: "area-fill",
    from: "#46a2b4",
    to: "#46a2b4",
    fromOpacity: 0.3,
    toOpacity: 0,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    }
  }), _react2.default.createElement(_maxprice2.default, {
    data: maxPriceData,
    yScale: yScale,
    xScale: xScale,
    x: x,
    y: y,
    label: (0, _formatPrice2.default)(maxPrice),
    yText: yScale(maxPrice),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    }
  }), _react2.default.createElement(_minprice2.default, {
    data: minPriceData,
    yScale: yScale,
    xScale: xScale,
    x: x,
    y: y,
    label: (0, _formatPrice2.default)(minPrice),
    yText: yScale(minPrice),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    }
  }), _react2.default.createElement(_shape.AreaClosed, {
    data: data,
    yScale: yScale,
    xScale: xScale,
    x: x,
    y: y,
    fill: "url(#area-fill)",
    stroke: "transparent",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    }
  }), _react2.default.createElement(_shape.LinePath, { data: data, yScale: yScale, xScale: xScale, x: x, y: y, __source: {
      fileName: _jsxFileName,
      lineNumber: 107
    }
  })));
}

exports.default = (0, _responsive.withParentSize)(Chart);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvY2hhcnQuanMiXSwibmFtZXMiOlsid2l0aFBhcmVudFNpemUiLCJzY2FsZVRpbWUiLCJzY2FsZUxpbmVhciIsIkxpbmVQYXRoIiwiQXJlYUNsb3NlZCIsIkxpbmVhckdyYWRpZW50IiwiQXhpc0JvdHRvbSIsImZvcm1hdFByaWNlIiwiTWF4UHJpY2UiLCJNaW5QcmljZSIsIkNoYXJ0IiwiZGF0YSIsInBhcmVudFdpZHRoIiwicGFyZW50SGVpZ2h0IiwibWFyZ2luIiwidG9wIiwiYm90dG9tIiwibGVmdCIsInJpZ2h0Iiwid2lkdGgiLCJoZWlnaHQiLCJ4IiwiRGF0ZSIsImQiLCJ0aW1lIiwieSIsInByaWNlIiwiZmlyc3RQb2ludCIsImN1cnJlbnRQb2ludCIsImxlbmd0aCIsIm1pblByaWNlIiwiTWF0aCIsIm1pbiIsIm1hcCIsIm1heFByaWNlIiwibWF4IiwibWF4UHJpY2VEYXRhIiwibWluUHJpY2VEYXRhIiwieFNjYWxlIiwicmFuZ2UiLCJkb21haW4iLCJ5U2NhbGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBUzs7QUFDVCxBQUFTLEFBQVc7O0FBQ3BCLEFBQVMsQUFBVTs7QUFDbkIsQUFBUzs7QUFDVCxBQUFTOztBQUNULEFBQU8sQUFBaUI7Ozs7QUFFeEIsQUFBTyxBQUFjOzs7O0FBQ3JCLEFBQU8sQUFBYzs7Ozs7Ozs7O0FBRXJCLFNBQUEsQUFBUyxZQUEyQztNQUFuQyxBQUFtQyxZQUFuQyxBQUFtQztNQUE3QixBQUE2QixtQkFBN0IsQUFBNkI7TUFBaEIsQUFBZ0Isb0JBQWhCLEFBQWdCLEFBQ2xEOztBQUNBO01BQU07U0FBUyxBQUNSLEFBQ0w7WUFGYSxBQUVMLEFBQ1I7VUFIYSxBQUdQLEFBQ047V0FKRixBQUFlLEFBSU4sQUFFVDtBQU5lLEFBQ2I7TUFLSSxRQUFRLGNBQWMsT0FBZCxBQUFxQixPQUFPLE9BQTFDLEFBQWlELEFBQ2pEO01BQU0sU0FBUyxlQUFlLE9BQWYsQUFBc0IsTUFBTSxPQUEzQyxBQUFrRCxBQUVsRDs7QUFHQTs7O01BQU0sSUFBSSxTQUFKLEFBQUksS0FBQTtXQUFLLElBQUEsQUFBSSxLQUFLLEVBQWQsQUFBSyxBQUFXO0FBQTFCLEFBQ0E7TUFBTSxJQUFJLFNBQUosQUFBSSxLQUFBO1dBQUssRUFBTCxBQUFPO0FBQWpCLEFBRUE7O01BQU0sYUFBYSxLQUFuQixBQUFtQixBQUFLLEFBQ3hCO01BQU0sZUFBZSxLQUFLLEtBQUEsQUFBSyxTQUEvQixBQUFxQixBQUFtQixBQUV4Qzs7TUFBTSxXQUFXLEtBQUEsQUFBSyxpREFBTyxLQUFBLEFBQUssSUFBbEMsQUFBaUIsQUFBWSxBQUFTLEFBQ3RDO01BQU0sV0FBVyxLQUFBLEFBQUssaURBQU8sS0FBQSxBQUFLLElBQWxDLEFBQWlCLEFBQVksQUFBUyxBQUN0QztNQUFNLGVBQWUsQ0FDbkIsRUFBRSxNQUFNLEVBQVIsQUFBUSxBQUFFLGFBQWEsT0FESixBQUNuQixBQUE4QixZQUM5QixFQUFFLE1BQU0sRUFBUixBQUFRLEFBQUUsZUFBZSxPQUYzQixBQUFxQixBQUVuQixBQUFnQyxBQUdsQzs7TUFBTSxlQUFlLENBQ25CLEVBQUUsTUFBTSxFQUFSLEFBQVEsQUFBRSxhQUFhLE9BREosQUFDbkIsQUFBOEIsWUFDOUIsRUFBRSxNQUFNLEVBQVIsQUFBUSxBQUFFLGVBQWUsT0FGM0IsQUFBcUIsQUFFbkIsQUFBZ0MsQUFHbEM7O01BQU07V0FDRyxDQUFBLEFBQUMsR0FEZSxBQUNoQixBQUFJLEFBQ1g7WUFBUSxDQUFDLEtBQUEsQUFBSyxpREFBTyxLQUFBLEFBQUssSUFBbEIsQUFBQyxBQUFZLEFBQVMsTUFBSyxLQUFBLEFBQUssaURBQU8sS0FBQSxBQUFLLElBRnRELEFBQWUsQUFBVSxBQUVmLEFBQTJCLEFBQVksQUFBUyxBQUUxRDtBQUp5QixBQUN2QixHQURhO0FBS2Y7TUFBTTtXQUNHLENBQUEsQUFBQyxRQURpQixBQUNsQixBQUFTLEFBQ2hCO1lBQVEsQ0FBQSxBQUFDLFVBRlgsQUFBZSxBQUFZLEFBRWpCLEFBQVcsQUFHckI7QUFMMkIsQUFDekIsR0FEYTs7QUFNZjtBQUVBOztBQUNBO0FBQ0E7QUFDQTt5QkFDRSxjQUFBOztnQkFBQTtrQkFBQSxBQUNFO0FBREY7QUFBQSxHQUFBLGtCQUNFLGNBQUEsU0FBSyxPQUFMLEFBQVksT0FBTyxRQUFuQixBQUEyQjtnQkFBM0I7a0JBQUEsQUFFRTtBQUZGO3FCQUVFLEFBQUM7U0FDTSxPQURQLEFBQ08sQUFBTyxBQUNaO1VBRkYsQUFFUSxBQUNOO1dBSEYsQUFHUyxBQUNQO09BSkYsQUFJSyxBQUNIO2NBTEYsQUFLWSxBQUNWO2tCQU5GLEFBT0U7ZUFQRixBQVFFO3dCQVJGOztnQkFBQTtrQkFGRixBQUVFLEFBVUE7QUFWQTtBQUNFLHNCQVNGLEFBQUM7UUFBRCxBQUNLLEFBQ0g7VUFGRixBQUVPLEFBQ0w7UUFIRixBQUdLLEFBQ0g7aUJBSkYsQUFJZSxBQUNiO2VBTEYsQUFLYTs7Z0JBTGI7a0JBWkYsQUFZRSxBQU9BO0FBUEE7QUFDRSxzQkFNRixBQUFDO1VBQUQsQUFDUSxBQUNOO1lBRkYsQUFFVSxBQUNSO1lBSEYsQUFHVSxBQUNSO09BSkYsQUFJSyxBQUNIO09BTEYsQUFLSyxBQUNIO1dBQU8sMkJBTlQsQUFNUyxBQUFZLEFBQ25CO1dBQU8sT0FQVCxBQU9TLEFBQU87O2dCQVBoQjtrQkFuQkYsQUFtQkUsQUFTQTtBQVRBO0FBQ0Usc0JBUUYsQUFBQztVQUFELEFBQ1EsQUFDTjtZQUZGLEFBRVUsQUFDUjtZQUhGLEFBR1UsQUFDUjtPQUpGLEFBSUssQUFDSDtPQUxGLEFBS0ssQUFDSDtXQUFPLDJCQU5ULEFBTVMsQUFBWSxBQUNuQjtXQUFPLE9BUFQsQUFPUyxBQUFPOztnQkFQaEI7a0JBNUJGLEFBNEJFLEFBU0E7QUFUQTtBQUNFLHNCQVFGLEFBQUM7VUFBRCxBQUNRLEFBQ047WUFGRixBQUVVLEFBQ1I7WUFIRixBQUdVLEFBQ1I7T0FKRixBQUlLLEFBQ0g7T0FMRixBQUtLLEFBQ0g7VUFORixBQU1PLEFBQ0w7WUFQRixBQU9TOztnQkFQVDtrQkFyQ0YsQUFxQ0UsQUFTQTtBQVRBO0FBQ0Usc0JBUUYsQUFBQyxpQ0FBUyxNQUFWLEFBQWdCLE1BQU0sUUFBdEIsQUFBOEIsUUFBUSxRQUF0QyxBQUE4QyxRQUFRLEdBQXRELEFBQXlELEdBQUcsR0FBNUQsQUFBK0Q7Z0JBQS9EO2tCQWhETixBQUNFLEFBQ0UsQUE4Q0UsQUFJUDtBQUpPOztBQU1SOztrQkFBZSxnQ0FBZixBQUFlLEFBQWUiLCJmaWxlIjoiY2hhcnQuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL3ByaXNjXzAwMC9jb2RlL0NBQ0RFVi92eC10ZXN0In0=

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/Users/prisc_000/code/CACDEV/vx-test/components/chart.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/prisc_000/code/CACDEV/vx-test/components/chart.js"); } } })();

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS5jODc5Y2Q4MDFhYjFlNTY4Mjg2Yy5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9jaGFydC5qcz9lNzU2YmY1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHdpdGhQYXJlbnRTaXplIH0gZnJvbSBcIkB2eC9yZXNwb25zaXZlXCI7XG5pbXBvcnQgeyBzY2FsZVRpbWUsIHNjYWxlTGluZWFyIH0gZnJvbSBcIkB2eC9zY2FsZVwiO1xuaW1wb3J0IHsgTGluZVBhdGgsIEFyZWFDbG9zZWQgfSBmcm9tIFwiQHZ4L3NoYXBlXCI7XG5pbXBvcnQgeyBMaW5lYXJHcmFkaWVudCB9IGZyb20gXCJAdngvZ3JhZGllbnRcIjtcbmltcG9ydCB7IEF4aXNCb3R0b20gfSBmcm9tIFwiQHZ4L2F4aXNcIjtcbmltcG9ydCBmb3JtYXRQcmljZSBmcm9tIFwiLi4vdXRpbHMvZm9ybWF0UHJpY2VcIjtcblxuaW1wb3J0IE1heFByaWNlIGZyb20gXCIuL21heHByaWNlXCI7XG5pbXBvcnQgTWluUHJpY2UgZnJvbSBcIi4vbWlucHJpY2VcIjtcblxuZnVuY3Rpb24gQ2hhcnQoeyBkYXRhLCBwYXJlbnRXaWR0aCwgcGFyZW50SGVpZ2h0IH0pIHtcbiAgLyoqIERlZmluZSBtYXJnaW4gZm9yIHRoaXMgZGl2IHRvIHBhc3MgdG8gY2FsY3VsYXRpb24gZm9yIHN2ZyAqL1xuICBjb25zdCBtYXJnaW4gPSB7XG4gICAgdG9wOiAxNSxcbiAgICBib3R0b206IDQwLFxuICAgIGxlZnQ6IDAsXG4gICAgcmlnaHQ6IDBcbiAgfTtcbiAgY29uc3Qgd2lkdGggPSBwYXJlbnRXaWR0aCAtIG1hcmdpbi5sZWZ0IC0gbWFyZ2luLnJpZ2h0O1xuICBjb25zdCBoZWlnaHQgPSBwYXJlbnRIZWlnaHQgLSBtYXJnaW4udG9wIC0gbWFyZ2luLmJvdHRvbTtcblxuICAvKiogRGVmaW5lIGFjY2Vzc29ycyBhbmQgdmFsdWVzIHRvIGJlIHBhc3NlZCB0byBvdXIgc2hhcGVzXG4gICAqL1xuXG4gIGNvbnN0IHggPSBkID0+IG5ldyBEYXRlKGQudGltZSk7XG4gIGNvbnN0IHkgPSBkID0+IGQucHJpY2U7XG5cbiAgY29uc3QgZmlyc3RQb2ludCA9IGRhdGFbMF07XG4gIGNvbnN0IGN1cnJlbnRQb2ludCA9IGRhdGFbZGF0YS5sZW5ndGggLSAxXTtcblxuICBjb25zdCBtaW5QcmljZSA9IE1hdGgubWluKC4uLmRhdGEubWFwKHkpKTtcbiAgY29uc3QgbWF4UHJpY2UgPSBNYXRoLm1heCguLi5kYXRhLm1hcCh5KSk7XG4gIGNvbnN0IG1heFByaWNlRGF0YSA9IFtcbiAgICB7IHRpbWU6IHgoZmlyc3RQb2ludCksIHByaWNlOiBtYXhQcmljZSB9LFxuICAgIHsgdGltZTogeChjdXJyZW50UG9pbnQpLCBwcmljZTogbWF4UHJpY2UgfVxuICBdO1xuXG4gIGNvbnN0IG1pblByaWNlRGF0YSA9IFtcbiAgICB7IHRpbWU6IHgoZmlyc3RQb2ludCksIHByaWNlOiBtaW5QcmljZSB9LFxuICAgIHsgdGltZTogeChjdXJyZW50UG9pbnQpLCBwcmljZTogbWluUHJpY2UgfVxuICBdO1xuXG4gIGNvbnN0IHhTY2FsZSA9IHNjYWxlVGltZSh7XG4gICAgcmFuZ2U6IFswLCB3aWR0aF0sXG4gICAgZG9tYWluOiBbTWF0aC5taW4oLi4uZGF0YS5tYXAoeCkpLCBNYXRoLm1heCguLi5kYXRhLm1hcCh4KSldXG4gIH0pO1xuICAvKiogZGVmaW5lcyB0aGUgc2NhbGUgb2YgYSB5IGF4aXMgbGluZSAqL1xuICBjb25zdCB5U2NhbGUgPSBzY2FsZUxpbmVhcih7XG4gICAgcmFuZ2U6IFtoZWlnaHQsIDBdLFxuICAgIGRvbWFpbjogW21pblByaWNlLCBtYXhQcmljZV1cbiAgfSk7XG5cbiAgLy8gQ29uc29sZS5sb2coeFNjYWxlLmRvbWFpbigpKTtcbiAgLy8gY29uc29sZS5sb2coeVNjYWxlLmRvbWFpbigpKTtcblxuICAvKiBlbmQgYWNjZXNzb3IgdmFsdWVzICovXG4gIC8vICAgY2FsbCA8TGluZVBhdGgsIHBhc3MgaW4gdGhlIGRhdGEsIHhTY2FsZSwgeVNjYWxlIGRvbWFpbiBtYXBwZXJzLFxuICAvLyAgYW5kIHggYW5kIHkgYWNjZXNzb3JzXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxzdmcgd2lkdGg9e3dpZHRofSBoZWlnaHQ9e3BhcmVudEhlaWdodH0+XG4gICAgICAgIHsvKiB0b3A6IHNob3J0Y3V0IGZvciB0cmFuc2xhdGUgeSB2YWx1ZSAqL31cbiAgICAgICAgPEF4aXNCb3R0b21cbiAgICAgICAgICB0b3A9e3lTY2FsZShtaW5QcmljZSl9XG4gICAgICAgICAgZGF0YT17ZGF0YX1cbiAgICAgICAgICBzY2FsZT17eFNjYWxlfVxuICAgICAgICAgIHg9e3h9XG4gICAgICAgICAgbnVtVGlja3M9ezR9XG4gICAgICAgICAgaGlkZUF4aXNMaW5lXG4gICAgICAgICAgaGlkZVRpY2tzXG4gICAgICAgICAgdGlja0xhYmVsQ29tcG9uZW50XG4gICAgICAgIC8+XG4gICAgICAgIDxMaW5lYXJHcmFkaWVudFxuICAgICAgICAgIGlkPVwiYXJlYS1maWxsXCJcbiAgICAgICAgICBmcm9tPVwiIzQ2YTJiNFwiXG4gICAgICAgICAgdG89XCIjNDZhMmI0XCJcbiAgICAgICAgICBmcm9tT3BhY2l0eT17MC4zfVxuICAgICAgICAgIHRvT3BhY2l0eT17MH1cbiAgICAgICAgLz5cbiAgICAgICAgPE1heFByaWNlXG4gICAgICAgICAgZGF0YT17bWF4UHJpY2VEYXRhfVxuICAgICAgICAgIHlTY2FsZT17eVNjYWxlfVxuICAgICAgICAgIHhTY2FsZT17eFNjYWxlfVxuICAgICAgICAgIHg9e3h9XG4gICAgICAgICAgeT17eX1cbiAgICAgICAgICBsYWJlbD17Zm9ybWF0UHJpY2UobWF4UHJpY2UpfVxuICAgICAgICAgIHlUZXh0PXt5U2NhbGUobWF4UHJpY2UpfVxuICAgICAgICAvPlxuICAgICAgICA8TWluUHJpY2VcbiAgICAgICAgICBkYXRhPXttaW5QcmljZURhdGF9XG4gICAgICAgICAgeVNjYWxlPXt5U2NhbGV9XG4gICAgICAgICAgeFNjYWxlPXt4U2NhbGV9XG4gICAgICAgICAgeD17eH1cbiAgICAgICAgICB5PXt5fVxuICAgICAgICAgIGxhYmVsPXtmb3JtYXRQcmljZShtaW5QcmljZSl9XG4gICAgICAgICAgeVRleHQ9e3lTY2FsZShtaW5QcmljZSl9XG4gICAgICAgIC8+XG4gICAgICAgIDxBcmVhQ2xvc2VkXG4gICAgICAgICAgZGF0YT17ZGF0YX1cbiAgICAgICAgICB5U2NhbGU9e3lTY2FsZX1cbiAgICAgICAgICB4U2NhbGU9e3hTY2FsZX1cbiAgICAgICAgICB4PXt4fVxuICAgICAgICAgIHk9e3l9XG4gICAgICAgICAgZmlsbD1cInVybCgjYXJlYS1maWxsKVwiXG4gICAgICAgICAgc3Ryb2tlPVwidHJhbnNwYXJlbnRcIlxuICAgICAgICAvPlxuICAgICAgICA8TGluZVBhdGggZGF0YT17ZGF0YX0geVNjYWxlPXt5U2NhbGV9IHhTY2FsZT17eFNjYWxlfSB4PXt4fSB5PXt5fSAvPlxuICAgICAgPC9zdmc+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhQYXJlbnRTaXplKENoYXJ0KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvY2hhcnQuanMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBOzs7QUFDQTtBQUNBOzs7QUFBQTtBQUNBOzs7Ozs7OztBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFMQTtBQUtBO0FBQ0E7QUFDQTtBQUlBOzs7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQURBO0FBSUE7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBSUE7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUVBO0FBRkE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUkE7O0FBQUE7QUFVQTtBQVZBO0FBQ0E7QUFXQTtBQUNBO0FBQ0E7QUFDQTtBQUFBOztBQUxBO0FBT0E7QUFQQTtBQUNBO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7O0FBUEE7QUFTQTtBQVRBO0FBQ0E7QUFVQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTs7QUFQQTtBQVNBO0FBVEE7QUFDQTtBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBOztBQVBBO0FBU0E7QUFUQTtBQUNBO0FBUUE7QUFJQTtBQUpBOztBQU1BO0FBQ0E7QUFEQTs7Ozs7OztBIiwic291cmNlUm9vdCI6IiJ9