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

  // console.log(xScale.domain());
  // console.log(yScale.domain());

  /* end accessor values */
  //   call <LinePath, pass in the data, xScale, yScale domain mappers,
  //  and x and y accessors
  return _react2.default.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    }
  }, _react2.default.createElement("svg", { width: width, height: height, __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    }
  }, _react2.default.createElement(_gradient.LinearGradient, {
    id: "area-fill",
    from: "#46a2b4",
    to: "#46a2b4",
    fromOpacity: 0.3,
    toOpacity: 0,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
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
      lineNumber: 51
    }
  }), _react2.default.createElement(_shape.LinePath, { data: data, yScale: yScale, xScale: xScale, x: x, y: y, __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    }
  })));
}

exports.default = (0, _responsive.withParentSize)(Chart);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvY2hhcnQuanMiXSwibmFtZXMiOlsid2l0aFBhcmVudFNpemUiLCJzY2FsZVRpbWUiLCJzY2FsZUxpbmVhciIsIkxpbmVQYXRoIiwiQXJlYUNsb3NlZCIsIkxpbmVhckdyYWRpZW50IiwiQ2hhcnQiLCJkYXRhIiwicGFyZW50V2lkdGgiLCJwYXJlbnRIZWlnaHQiLCJtYXJnaW4iLCJ0b3AiLCJib3R0b20iLCJsZWZ0IiwicmlnaHQiLCJ3aWR0aCIsImhlaWdodCIsIngiLCJEYXRlIiwiZCIsInRpbWUiLCJ5IiwicHJpY2UiLCJtaW5QcmljZSIsIk1hdGgiLCJtaW4iLCJtYXAiLCJtYXhQcmljZSIsIm1heCIsInhTY2FsZSIsInJhbmdlIiwiZG9tYWluIiwieVNjYWxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBLEFBQVM7O0FBQ1QsQUFBUyxBQUFXOztBQUNwQixBQUFTLEFBQVU7O0FBQ25CLEFBQVM7Ozs7Ozs7QUFFVCxTQUFBLEFBQVMsWUFBMkM7TUFBbkMsQUFBbUMsWUFBbkMsQUFBbUM7TUFBN0IsQUFBNkIsbUJBQTdCLEFBQTZCO01BQWhCLEFBQWdCLG9CQUFoQixBQUFnQixBQUNsRDs7QUFDQTtNQUFNO1NBQVMsQUFDUixBQUNMO1lBRmEsQUFFTCxBQUNSO1VBSGEsQUFHUCxBQUNOO1dBSkYsQUFBZSxBQUlOLEFBRVQ7QUFOZSxBQUNiO01BS0ksUUFBUSxjQUFjLE9BQWQsQUFBcUIsT0FBTyxPQUExQyxBQUFpRCxBQUNqRDtNQUFNLFNBQVMsZUFBZSxPQUFmLEFBQXNCLE1BQU0sT0FBM0MsQUFBa0QsQUFFbEQ7O0FBR0E7OztNQUFNLElBQUksU0FBSixBQUFJLEtBQUE7V0FBSyxJQUFBLEFBQUksS0FBSyxFQUFkLEFBQUssQUFBVztBQUExQixBQUNBO01BQU0sSUFBSSxTQUFKLEFBQUksS0FBQTtXQUFLLEVBQUwsQUFBTztBQUFqQixBQUVBOztNQUFNLFdBQVcsS0FBQSxBQUFLLGlEQUFPLEtBQUEsQUFBSyxJQUFsQyxBQUFpQixBQUFZLEFBQVMsQUFDdEM7TUFBTSxXQUFXLEtBQUEsQUFBSyxpREFBTyxLQUFBLEFBQUssSUFBbEMsQUFBaUIsQUFBWSxBQUFTLEFBQ3RDO01BQU07V0FDRyxDQUFBLEFBQUMsR0FEZSxBQUNoQixBQUFJLEFBQ1g7WUFBUSxDQUFDLEtBQUEsQUFBSyxpREFBTyxLQUFBLEFBQUssSUFBbEIsQUFBQyxBQUFZLEFBQVMsTUFBSyxLQUFBLEFBQUssaURBQU8sS0FBQSxBQUFLLElBRnRELEFBQWUsQUFBVSxBQUVmLEFBQTJCLEFBQVksQUFBUyxBQUcxRDtBQUx5QixBQUN2QixHQURhOztNQUtUO1dBQ0csQ0FBQSxBQUFDLFFBRGlCLEFBQ2xCLEFBQVMsQUFDaEI7WUFBUSxDQUFBLEFBQUMsVUFGWCxBQUFlLEFBQVksQUFFakIsQUFBVyxBQUdyQjtBQUwyQixBQUN6QixHQURhOztBQU1mO0FBRUE7O0FBQ0E7QUFDQTtBQUNBO3lCQUNFLGNBQUE7O2dCQUFBO2tCQUFBLEFBQ0U7QUFERjtBQUFBLEdBQUEsa0JBQ0UsY0FBQSxTQUFLLE9BQUwsQUFBWSxPQUFPLFFBQW5CLEFBQTJCO2dCQUEzQjtrQkFBQSxBQUNFO0FBREY7cUJBQ0UsQUFBQztRQUFELEFBQ0ssQUFDSDtVQUZGLEFBRU8sQUFDTDtRQUhGLEFBR0ssQUFDSDtpQkFKRixBQUllLEFBQ2I7ZUFMRixBQUthOztnQkFMYjtrQkFERixBQUNFLEFBT0E7QUFQQTtBQUNFLHNCQU1GLEFBQUM7VUFBRCxBQUNRLEFBQ047WUFGRixBQUVVLEFBQ1I7WUFIRixBQUdVLEFBQ1I7T0FKRixBQUlLLEFBQ0g7T0FMRixBQUtLLEFBQ0g7VUFORixBQU1PLEFBQ0w7WUFQRixBQU9TOztnQkFQVDtrQkFSRixBQVFFLEFBU0E7QUFUQTtBQUNFLHNCQVFGLEFBQUMsaUNBQVMsTUFBVixBQUFnQixNQUFNLFFBQXRCLEFBQThCLFFBQVEsUUFBdEMsQUFBOEMsUUFBUSxHQUF0RCxBQUF5RCxHQUFHLEdBQTVELEFBQStEO2dCQUEvRDtrQkFuQk4sQUFDRSxBQUNFLEFBaUJFLEFBSVA7QUFKTzs7QUFNUjs7a0JBQWUsZ0NBQWYsQUFBZSxBQUFlIiwiZmlsZSI6ImNoYXJ0LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9wcmlzY18wMDAvY29kZS9DQUNERVYvdngtdGVzdCJ9

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/Users/prisc_000/code/CACDEV/vx-test/components/chart.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/prisc_000/code/CACDEV/vx-test/components/chart.js"); } } })();

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS42OTZmZDU0YzQ2OTdjOTQ4ZWQyZi5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9jaGFydC5qcz9lMjk3Y2I2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHdpdGhQYXJlbnRTaXplIH0gZnJvbSBcIkB2eC9yZXNwb25zaXZlXCI7XG5pbXBvcnQgeyBzY2FsZVRpbWUsIHNjYWxlTGluZWFyIH0gZnJvbSBcIkB2eC9zY2FsZVwiO1xuaW1wb3J0IHsgTGluZVBhdGgsIEFyZWFDbG9zZWQgfSBmcm9tIFwiQHZ4L3NoYXBlXCI7XG5pbXBvcnQgeyBMaW5lYXJHcmFkaWVudCB9IGZyb20gXCJAdngvZ3JhZGllbnRcIjtcblxuZnVuY3Rpb24gQ2hhcnQoeyBkYXRhLCBwYXJlbnRXaWR0aCwgcGFyZW50SGVpZ2h0IH0pIHtcbiAgLyoqIERlZmluZSBtYXJnaW4gZm9yIHRoaXMgZGl2IHRvIHBhc3MgdG8gY2FsY3VsYXRpb24gZm9yIHN2ZyAqL1xuICBjb25zdCBtYXJnaW4gPSB7XG4gICAgdG9wOiAxNSxcbiAgICBib3R0b206IDQwLFxuICAgIGxlZnQ6IDAsXG4gICAgcmlnaHQ6IDBcbiAgfTtcbiAgY29uc3Qgd2lkdGggPSBwYXJlbnRXaWR0aCAtIG1hcmdpbi5sZWZ0IC0gbWFyZ2luLnJpZ2h0O1xuICBjb25zdCBoZWlnaHQgPSBwYXJlbnRIZWlnaHQgLSBtYXJnaW4udG9wIC0gbWFyZ2luLmJvdHRvbTtcblxuICAvKiogRGVmaW5lIGFjY2Vzc29ycyBhbmQgdmFsdWVzIHRvIGJlIHBhc3NlZCB0byBvdXIgc2hhcGVzXG4gICAqL1xuXG4gIGNvbnN0IHggPSBkID0+IG5ldyBEYXRlKGQudGltZSk7XG4gIGNvbnN0IHkgPSBkID0+IGQucHJpY2U7XG5cbiAgY29uc3QgbWluUHJpY2UgPSBNYXRoLm1pbiguLi5kYXRhLm1hcCh5KSk7XG4gIGNvbnN0IG1heFByaWNlID0gTWF0aC5tYXgoLi4uZGF0YS5tYXAoeSkpO1xuICBjb25zdCB4U2NhbGUgPSBzY2FsZVRpbWUoe1xuICAgIHJhbmdlOiBbMCwgd2lkdGhdLFxuICAgIGRvbWFpbjogW01hdGgubWluKC4uLmRhdGEubWFwKHgpKSwgTWF0aC5tYXgoLi4uZGF0YS5tYXAoeCkpXVxuICB9KTtcblxuICBjb25zdCB5U2NhbGUgPSBzY2FsZUxpbmVhcih7XG4gICAgcmFuZ2U6IFtoZWlnaHQsIDBdLFxuICAgIGRvbWFpbjogW21pblByaWNlLCBtYXhQcmljZV1cbiAgfSk7XG5cbiAgLy8gY29uc29sZS5sb2coeFNjYWxlLmRvbWFpbigpKTtcbiAgLy8gY29uc29sZS5sb2coeVNjYWxlLmRvbWFpbigpKTtcblxuICAvKiBlbmQgYWNjZXNzb3IgdmFsdWVzICovXG4gIC8vICAgY2FsbCA8TGluZVBhdGgsIHBhc3MgaW4gdGhlIGRhdGEsIHhTY2FsZSwgeVNjYWxlIGRvbWFpbiBtYXBwZXJzLFxuICAvLyAgYW5kIHggYW5kIHkgYWNjZXNzb3JzXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxzdmcgd2lkdGg9e3dpZHRofSBoZWlnaHQ9e2hlaWdodH0+XG4gICAgICAgIDxMaW5lYXJHcmFkaWVudFxuICAgICAgICAgIGlkPVwiYXJlYS1maWxsXCJcbiAgICAgICAgICBmcm9tPVwiIzQ2YTJiNFwiXG4gICAgICAgICAgdG89XCIjNDZhMmI0XCJcbiAgICAgICAgICBmcm9tT3BhY2l0eT17MC4zfVxuICAgICAgICAgIHRvT3BhY2l0eT17MH1cbiAgICAgICAgLz5cbiAgICAgICAgPEFyZWFDbG9zZWRcbiAgICAgICAgICBkYXRhPXtkYXRhfVxuICAgICAgICAgIHlTY2FsZT17eVNjYWxlfVxuICAgICAgICAgIHhTY2FsZT17eFNjYWxlfVxuICAgICAgICAgIHg9e3h9XG4gICAgICAgICAgeT17eX1cbiAgICAgICAgICBmaWxsPVwidXJsKCNhcmVhLWZpbGwpXCJcbiAgICAgICAgICBzdHJva2U9XCJ0cmFuc3BhcmVudFwiXG4gICAgICAgIC8+XG4gICAgICAgIDxMaW5lUGF0aCBkYXRhPXtkYXRhfSB5U2NhbGU9e3lTY2FsZX0geFNjYWxlPXt4U2NhbGV9IHg9e3h9IHk9e3l9IC8+XG4gICAgICA8L3N2Zz5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFBhcmVudFNpemUoQ2hhcnQpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9jaGFydC5qcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBOzs7Ozs7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBTEE7QUFLQTtBQUNBO0FBQ0E7QUFJQTs7O0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFJQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTs7QUFMQTtBQU9BO0FBUEE7QUFDQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBOztBQVBBO0FBU0E7QUFUQTtBQUNBO0FBUUE7QUFJQTtBQUpBOztBQU1BO0FBQ0E7QUFEQTs7Ozs7OztBIiwic291cmNlUm9vdCI6IiJ9