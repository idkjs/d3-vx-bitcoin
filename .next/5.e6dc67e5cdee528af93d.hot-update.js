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

var _formatPrice = __webpack_require__(654);

var _formatPrice2 = _interopRequireDefault(_formatPrice);

var _maxprice = __webpack_require__(655);

var _maxprice2 = _interopRequireDefault(_maxprice);

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
  var maxPriceData = [{
    time: x(firstPoint),
    price: maxPrice
  }, {
    time: x(currentPoint),
    price: maxPrice
  }];

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
      lineNumber: 59
    }
  }, _react2.default.createElement("svg", { width: width, height: height, __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    }
  }, _react2.default.createElement(_gradient.LinearGradient, {
    id: "area-fill",
    from: "#46a2b4",
    to: "#46a2b4",
    fromOpacity: 0.3,
    toOpacity: 0,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
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
      lineNumber: 68
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
      lineNumber: 77
    }
  }), _react2.default.createElement(_shape.LinePath, { data: data, yScale: yScale, xScale: xScale, x: x, y: y, __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    }
  })));
}

exports.default = (0, _responsive.withParentSize)(Chart);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvY2hhcnQuanMiXSwibmFtZXMiOlsid2l0aFBhcmVudFNpemUiLCJzY2FsZVRpbWUiLCJzY2FsZUxpbmVhciIsIkxpbmVQYXRoIiwiQXJlYUNsb3NlZCIsIkxpbmVhckdyYWRpZW50IiwiZm9ybWF0UHJpY2UiLCJNYXhQcmljZSIsIkNoYXJ0IiwiZGF0YSIsInBhcmVudFdpZHRoIiwicGFyZW50SGVpZ2h0IiwibWFyZ2luIiwidG9wIiwiYm90dG9tIiwibGVmdCIsInJpZ2h0Iiwid2lkdGgiLCJoZWlnaHQiLCJ4IiwiRGF0ZSIsImQiLCJ0aW1lIiwieSIsInByaWNlIiwiZmlyc3RQb2ludCIsImN1cnJlbnRQb2ludCIsImxlbmd0aCIsIm1pblByaWNlIiwiTWF0aCIsIm1pbiIsIm1hcCIsIm1heFByaWNlIiwibWF4IiwibWF4UHJpY2VEYXRhIiwieFNjYWxlIiwicmFuZ2UiLCJkb21haW4iLCJ5U2NhbGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBUzs7QUFDVCxBQUFTLEFBQVc7O0FBQ3BCLEFBQVMsQUFBVTs7QUFDbkIsQUFBUzs7QUFDVCxBQUFPLEFBQWlCOzs7O0FBRXhCLEFBQU8sQUFBYzs7Ozs7Ozs7O0FBRXJCLFNBQUEsQUFBUyxZQUEyQztNQUFuQyxBQUFtQyxZQUFuQyxBQUFtQztNQUE3QixBQUE2QixtQkFBN0IsQUFBNkI7TUFBaEIsQUFBZ0Isb0JBQWhCLEFBQWdCLEFBQ2xEOztBQUNBO01BQU07U0FBUyxBQUNSLEFBQ0w7WUFGYSxBQUVMLEFBQ1I7VUFIYSxBQUdQLEFBQ047V0FKRixBQUFlLEFBSU4sQUFFVDtBQU5lLEFBQ2I7TUFLSSxRQUFRLGNBQWMsT0FBZCxBQUFxQixPQUFPLE9BQTFDLEFBQWlELEFBQ2pEO01BQU0sU0FBUyxlQUFlLE9BQWYsQUFBc0IsTUFBTSxPQUEzQyxBQUFrRCxBQUVsRDs7QUFHQTs7O01BQU0sSUFBSSxTQUFKLEFBQUksS0FBQTtXQUFLLElBQUEsQUFBSSxLQUFLLEVBQWQsQUFBSyxBQUFXO0FBQTFCLEFBQ0E7TUFBTSxJQUFJLFNBQUosQUFBSSxLQUFBO1dBQUssRUFBTCxBQUFPO0FBQWpCLEFBRUE7O01BQU0sYUFBYSxLQUFuQixBQUFtQixBQUFLLEFBQ3hCO01BQU0sZUFBZSxLQUFLLEtBQUEsQUFBSyxTQUEvQixBQUFxQixBQUFtQixBQUV4Qzs7TUFBTSxXQUFXLEtBQUEsQUFBSyxpREFBTyxLQUFBLEFBQUssSUFBbEMsQUFBaUIsQUFBWSxBQUFTLEFBQ3RDO01BQU0sV0FBVyxLQUFBLEFBQUssaURBQU8sS0FBQSxBQUFLLElBQWxDLEFBQWlCLEFBQVksQUFBUyxBQUN0QztNQUFNO1VBRUksRUFEUixBQUNRLEFBQUUsQUFDUjtXQUhpQixBQUNuQixBQUVTO0FBRlQsQUFDRSxHQUZpQjtVQU1YLEVBRFIsQUFDUSxBQUFFLEFBQ1I7V0FQSixBQUFxQixBQUtuQixBQUVTLEFBSVg7QUFORSxBQUNFOztNQUtFO1dBQ0csQ0FBQSxBQUFDLEdBRGUsQUFDaEIsQUFBSSxBQUNYO1lBQVEsQ0FBQyxLQUFBLEFBQUssaURBQU8sS0FBQSxBQUFLLElBQWxCLEFBQUMsQUFBWSxBQUFTLE1BQUssS0FBQSxBQUFLLGlEQUFPLEtBQUEsQUFBSyxJQUZ0RCxBQUFlLEFBQVUsQUFFZixBQUEyQixBQUFZLEFBQVMsQUFFMUQ7QUFKeUIsQUFDdkIsR0FEYTtBQUtmO01BQU07V0FDRyxDQUFBLEFBQUMsUUFEaUIsQUFDbEIsQUFBUyxBQUNoQjtZQUFRLENBQUEsQUFBQyxVQUZYLEFBQWUsQUFBWSxBQUVqQixBQUFXLEFBR3JCO0FBTDJCLEFBQ3pCLEdBRGE7O0FBTWY7QUFFQTs7QUFDQTtBQUNBO0FBQ0E7eUJBQ0UsY0FBQTs7Z0JBQUE7a0JBQUEsQUFDRTtBQURGO0FBQUEsR0FBQSxrQkFDRSxjQUFBLFNBQUssT0FBTCxBQUFZLE9BQU8sUUFBbkIsQUFBMkI7Z0JBQTNCO2tCQUFBLEFBQ0U7QUFERjtxQkFDRSxBQUFDO1FBQUQsQUFDSyxBQUNIO1VBRkYsQUFFTyxBQUNMO1FBSEYsQUFHSyxBQUNIO2lCQUpGLEFBSWUsQUFDYjtlQUxGLEFBS2E7O2dCQUxiO2tCQURGLEFBQ0UsQUFPQTtBQVBBO0FBQ0Usc0JBTUYsQUFBQztVQUFELEFBQ1EsQUFDTjtZQUZGLEFBRVUsQUFDUjtZQUhGLEFBR1UsQUFDUjtPQUpGLEFBSUssQUFDSDtPQUxGLEFBS0ssQUFDSDtXQUFPLDJCQU5ULEFBTVMsQUFBWSxBQUNuQjtXQUFPLE9BUFQsQUFPUyxBQUFPOztnQkFQaEI7a0JBUkYsQUFRRSxBQVNBO0FBVEE7QUFDRSxzQkFRRixBQUFDO1VBQUQsQUFDUSxBQUNOO1lBRkYsQUFFVSxBQUNSO1lBSEYsQUFHVSxBQUNSO09BSkYsQUFJSyxBQUNIO09BTEYsQUFLSyxBQUNIO1VBTkYsQUFNTyxBQUNMO1lBUEYsQUFPUzs7Z0JBUFQ7a0JBakJGLEFBaUJFLEFBU0E7QUFUQTtBQUNFLHNCQVFGLEFBQUMsaUNBQVMsTUFBVixBQUFnQixNQUFNLFFBQXRCLEFBQThCLFFBQVEsUUFBdEMsQUFBOEMsUUFBUSxHQUF0RCxBQUF5RCxHQUFHLEdBQTVELEFBQStEO2dCQUEvRDtrQkE1Qk4sQUFDRSxBQUNFLEFBMEJFLEFBSVA7QUFKTzs7QUFNUjs7a0JBQWUsZ0NBQWYsQUFBZSxBQUFlIiwiZmlsZSI6ImNoYXJ0LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9wcmlzY18wMDAvY29kZS9DQUNERVYvdngtdGVzdCJ9

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/Users/prisc_000/code/CACDEV/vx-test/components/chart.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/prisc_000/code/CACDEV/vx-test/components/chart.js"); } } })();

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS5lNmRjNjdlNWNkZWU1MjhhZjkzZC5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9jaGFydC5qcz81ZjBjOWU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHdpdGhQYXJlbnRTaXplIH0gZnJvbSBcIkB2eC9yZXNwb25zaXZlXCI7XG5pbXBvcnQgeyBzY2FsZVRpbWUsIHNjYWxlTGluZWFyIH0gZnJvbSBcIkB2eC9zY2FsZVwiO1xuaW1wb3J0IHsgTGluZVBhdGgsIEFyZWFDbG9zZWQgfSBmcm9tIFwiQHZ4L3NoYXBlXCI7XG5pbXBvcnQgeyBMaW5lYXJHcmFkaWVudCB9IGZyb20gXCJAdngvZ3JhZGllbnRcIjtcbmltcG9ydCBmb3JtYXRQcmljZSBmcm9tIFwiLi4vdXRpbHMvZm9ybWF0UHJpY2VcIjtcblxuaW1wb3J0IE1heFByaWNlIGZyb20gXCIuL21heHByaWNlXCI7XG5cbmZ1bmN0aW9uIENoYXJ0KHsgZGF0YSwgcGFyZW50V2lkdGgsIHBhcmVudEhlaWdodCB9KSB7XG4gIC8qKiBEZWZpbmUgbWFyZ2luIGZvciB0aGlzIGRpdiB0byBwYXNzIHRvIGNhbGN1bGF0aW9uIGZvciBzdmcgKi9cbiAgY29uc3QgbWFyZ2luID0ge1xuICAgIHRvcDogMTUsXG4gICAgYm90dG9tOiA0MCxcbiAgICBsZWZ0OiAwLFxuICAgIHJpZ2h0OiAwXG4gIH07XG4gIGNvbnN0IHdpZHRoID0gcGFyZW50V2lkdGggLSBtYXJnaW4ubGVmdCAtIG1hcmdpbi5yaWdodDtcbiAgY29uc3QgaGVpZ2h0ID0gcGFyZW50SGVpZ2h0IC0gbWFyZ2luLnRvcCAtIG1hcmdpbi5ib3R0b207XG5cbiAgLyoqIERlZmluZSBhY2Nlc3NvcnMgYW5kIHZhbHVlcyB0byBiZSBwYXNzZWQgdG8gb3VyIHNoYXBlc1xuICAgKi9cblxuICBjb25zdCB4ID0gZCA9PiBuZXcgRGF0ZShkLnRpbWUpO1xuICBjb25zdCB5ID0gZCA9PiBkLnByaWNlO1xuXG4gIGNvbnN0IGZpcnN0UG9pbnQgPSBkYXRhWzBdO1xuICBjb25zdCBjdXJyZW50UG9pbnQgPSBkYXRhW2RhdGEubGVuZ3RoIC0gMV07XG5cbiAgY29uc3QgbWluUHJpY2UgPSBNYXRoLm1pbiguLi5kYXRhLm1hcCh5KSk7XG4gIGNvbnN0IG1heFByaWNlID0gTWF0aC5tYXgoLi4uZGF0YS5tYXAoeSkpO1xuICBjb25zdCBtYXhQcmljZURhdGEgPSBbXG4gICAge1xuICAgICAgdGltZTogeChmaXJzdFBvaW50KSxcbiAgICAgIHByaWNlOiBtYXhQcmljZVxuICAgIH0sXG4gICAge1xuICAgICAgdGltZTogeChjdXJyZW50UG9pbnQpLFxuICAgICAgcHJpY2U6IG1heFByaWNlXG4gICAgfVxuICBdO1xuXG4gIGNvbnN0IHhTY2FsZSA9IHNjYWxlVGltZSh7XG4gICAgcmFuZ2U6IFswLCB3aWR0aF0sXG4gICAgZG9tYWluOiBbTWF0aC5taW4oLi4uZGF0YS5tYXAoeCkpLCBNYXRoLm1heCguLi5kYXRhLm1hcCh4KSldXG4gIH0pO1xuICAvKiogZGVmaW5lcyB0aGUgc2NhbGUgb2YgYSB5IGF4aXMgbGluZSAqL1xuICBjb25zdCB5U2NhbGUgPSBzY2FsZUxpbmVhcih7XG4gICAgcmFuZ2U6IFtoZWlnaHQsIDBdLFxuICAgIGRvbWFpbjogW21pblByaWNlLCBtYXhQcmljZV1cbiAgfSk7XG5cbiAgLy8gQ29uc29sZS5sb2coeFNjYWxlLmRvbWFpbigpKTtcbiAgLy8gY29uc29sZS5sb2coeVNjYWxlLmRvbWFpbigpKTtcblxuICAvKiBlbmQgYWNjZXNzb3IgdmFsdWVzICovXG4gIC8vICAgY2FsbCA8TGluZVBhdGgsIHBhc3MgaW4gdGhlIGRhdGEsIHhTY2FsZSwgeVNjYWxlIGRvbWFpbiBtYXBwZXJzLFxuICAvLyAgYW5kIHggYW5kIHkgYWNjZXNzb3JzXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxzdmcgd2lkdGg9e3dpZHRofSBoZWlnaHQ9e2hlaWdodH0+XG4gICAgICAgIDxMaW5lYXJHcmFkaWVudFxuICAgICAgICAgIGlkPVwiYXJlYS1maWxsXCJcbiAgICAgICAgICBmcm9tPVwiIzQ2YTJiNFwiXG4gICAgICAgICAgdG89XCIjNDZhMmI0XCJcbiAgICAgICAgICBmcm9tT3BhY2l0eT17MC4zfVxuICAgICAgICAgIHRvT3BhY2l0eT17MH1cbiAgICAgICAgLz5cbiAgICAgICAgPE1heFByaWNlXG4gICAgICAgICAgZGF0YT17bWF4UHJpY2VEYXRhfVxuICAgICAgICAgIHlTY2FsZT17eVNjYWxlfVxuICAgICAgICAgIHhTY2FsZT17eFNjYWxlfVxuICAgICAgICAgIHg9e3h9XG4gICAgICAgICAgeT17eX1cbiAgICAgICAgICBsYWJlbD17Zm9ybWF0UHJpY2UobWF4UHJpY2UpfVxuICAgICAgICAgIHlUZXh0PXt5U2NhbGUobWF4UHJpY2UpfVxuICAgICAgICAvPlxuICAgICAgICA8QXJlYUNsb3NlZFxuICAgICAgICAgIGRhdGE9e2RhdGF9XG4gICAgICAgICAgeVNjYWxlPXt5U2NhbGV9XG4gICAgICAgICAgeFNjYWxlPXt4U2NhbGV9XG4gICAgICAgICAgeD17eH1cbiAgICAgICAgICB5PXt5fVxuICAgICAgICAgIGZpbGw9XCJ1cmwoI2FyZWEtZmlsbClcIlxuICAgICAgICAgIHN0cm9rZT1cInRyYW5zcGFyZW50XCJcbiAgICAgICAgLz5cbiAgICAgICAgPExpbmVQYXRoIGRhdGE9e2RhdGF9IHlTY2FsZT17eVNjYWxlfSB4U2NhbGU9e3hTY2FsZX0geD17eH0geT17eX0gLz5cbiAgICAgIDwvc3ZnPlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoUGFyZW50U2l6ZShDaGFydCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL2NoYXJ0LmpzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBOzs7QUFDQTtBQUNBOzs7Ozs7OztBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFMQTtBQUtBO0FBQ0E7QUFDQTtBQUlBOzs7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFEQTtBQUlBO0FBS0E7QUFMQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBREE7QUFJQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFJQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTs7QUFMQTtBQU9BO0FBUEE7QUFDQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBOztBQVBBO0FBU0E7QUFUQTtBQUNBO0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7O0FBUEE7QUFTQTtBQVRBO0FBQ0E7QUFRQTtBQUlBO0FBSkE7O0FBTUE7QUFDQTtBQURBOzs7Ozs7O0EiLCJzb3VyY2VSb290IjoiIn0=