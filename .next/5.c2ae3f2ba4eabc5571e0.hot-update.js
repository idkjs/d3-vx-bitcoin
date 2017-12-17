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
      lineNumber: 58
    }
  }, _react2.default.createElement("svg", { width: width, height: height, __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    }
  }, _react2.default.createElement(_gradient.LinearGradient, {
    id: "area-fill",
    from: "#46a2b4",
    to: "#46a2b4",
    fromOpacity: 0.3,
    toOpacity: 0,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    }
  }), _react2.default.createElement(_maxprice2.default, {
    data: maxPriceData,
    yScale: yScale,
    xScale: xScale,
    x: x,
    y: y,
    label: maxPrice,
    yText: yScale(maxPrice),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
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
      lineNumber: 76
    }
  }), _react2.default.createElement(_shape.LinePath, { data: data, yScale: yScale, xScale: xScale, x: x, y: y, __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    }
  })));
}

exports.default = (0, _responsive.withParentSize)(Chart);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvY2hhcnQuanMiXSwibmFtZXMiOlsid2l0aFBhcmVudFNpemUiLCJzY2FsZVRpbWUiLCJzY2FsZUxpbmVhciIsIkxpbmVQYXRoIiwiQXJlYUNsb3NlZCIsIkxpbmVhckdyYWRpZW50IiwiTWF4UHJpY2UiLCJDaGFydCIsImRhdGEiLCJwYXJlbnRXaWR0aCIsInBhcmVudEhlaWdodCIsIm1hcmdpbiIsInRvcCIsImJvdHRvbSIsImxlZnQiLCJyaWdodCIsIndpZHRoIiwiaGVpZ2h0IiwieCIsIkRhdGUiLCJkIiwidGltZSIsInkiLCJwcmljZSIsImZpcnN0UG9pbnQiLCJjdXJyZW50UG9pbnQiLCJsZW5ndGgiLCJtaW5QcmljZSIsIk1hdGgiLCJtaW4iLCJtYXAiLCJtYXhQcmljZSIsIm1heCIsIm1heFByaWNlRGF0YSIsInhTY2FsZSIsInJhbmdlIiwiZG9tYWluIiwieVNjYWxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBLEFBQVM7O0FBQ1QsQUFBUyxBQUFXOztBQUNwQixBQUFTLEFBQVU7O0FBQ25CLEFBQVM7O0FBRVQsQUFBTyxBQUFjOzs7Ozs7Ozs7QUFFckIsU0FBQSxBQUFTLFlBQTJDO01BQW5DLEFBQW1DLFlBQW5DLEFBQW1DO01BQTdCLEFBQTZCLG1CQUE3QixBQUE2QjtNQUFoQixBQUFnQixvQkFBaEIsQUFBZ0IsQUFDbEQ7O0FBQ0E7TUFBTTtTQUFTLEFBQ1IsQUFDTDtZQUZhLEFBRUwsQUFDUjtVQUhhLEFBR1AsQUFDTjtXQUpGLEFBQWUsQUFJTixBQUVUO0FBTmUsQUFDYjtNQUtJLFFBQVEsY0FBYyxPQUFkLEFBQXFCLE9BQU8sT0FBMUMsQUFBaUQsQUFDakQ7TUFBTSxTQUFTLGVBQWUsT0FBZixBQUFzQixNQUFNLE9BQTNDLEFBQWtELEFBRWxEOztBQUdBOzs7TUFBTSxJQUFJLFNBQUosQUFBSSxLQUFBO1dBQUssSUFBQSxBQUFJLEtBQUssRUFBZCxBQUFLLEFBQVc7QUFBMUIsQUFDQTtNQUFNLElBQUksU0FBSixBQUFJLEtBQUE7V0FBSyxFQUFMLEFBQU87QUFBakIsQUFFQTs7TUFBTSxhQUFhLEtBQW5CLEFBQW1CLEFBQUssQUFDeEI7TUFBTSxlQUFlLEtBQUssS0FBQSxBQUFLLFNBQS9CLEFBQXFCLEFBQW1CLEFBRXhDOztNQUFNLFdBQVcsS0FBQSxBQUFLLGlEQUFPLEtBQUEsQUFBSyxJQUFsQyxBQUFpQixBQUFZLEFBQVMsQUFDdEM7TUFBTSxXQUFXLEtBQUEsQUFBSyxpREFBTyxLQUFBLEFBQUssSUFBbEMsQUFBaUIsQUFBWSxBQUFTLEFBQ3RDO01BQU07VUFFSSxFQURSLEFBQ1EsQUFBRSxBQUNSO1dBSGlCLEFBQ25CLEFBRVM7QUFGVCxBQUNFLEdBRmlCO1VBTVgsRUFEUixBQUNRLEFBQUUsQUFDUjtXQVBKLEFBQXFCLEFBS25CLEFBRVMsQUFJWDtBQU5FLEFBQ0U7O01BS0U7V0FDRyxDQUFBLEFBQUMsR0FEZSxBQUNoQixBQUFJLEFBQ1g7WUFBUSxDQUFDLEtBQUEsQUFBSyxpREFBTyxLQUFBLEFBQUssSUFBbEIsQUFBQyxBQUFZLEFBQVMsTUFBSyxLQUFBLEFBQUssaURBQU8sS0FBQSxBQUFLLElBRnRELEFBQWUsQUFBVSxBQUVmLEFBQTJCLEFBQVksQUFBUyxBQUUxRDtBQUp5QixBQUN2QixHQURhO0FBS2Y7TUFBTTtXQUNHLENBQUEsQUFBQyxRQURpQixBQUNsQixBQUFTLEFBQ2hCO1lBQVEsQ0FBQSxBQUFDLFVBRlgsQUFBZSxBQUFZLEFBRWpCLEFBQVcsQUFHckI7QUFMMkIsQUFDekIsR0FEYTs7QUFNZjtBQUVBOztBQUNBO0FBQ0E7QUFDQTt5QkFDRSxjQUFBOztnQkFBQTtrQkFBQSxBQUNFO0FBREY7QUFBQSxHQUFBLGtCQUNFLGNBQUEsU0FBSyxPQUFMLEFBQVksT0FBTyxRQUFuQixBQUEyQjtnQkFBM0I7a0JBQUEsQUFDRTtBQURGO3FCQUNFLEFBQUM7UUFBRCxBQUNLLEFBQ0g7VUFGRixBQUVPLEFBQ0w7UUFIRixBQUdLLEFBQ0g7aUJBSkYsQUFJZSxBQUNiO2VBTEYsQUFLYTs7Z0JBTGI7a0JBREYsQUFDRSxBQU9BO0FBUEE7QUFDRSxzQkFNRixBQUFDO1VBQUQsQUFDUSxBQUNOO1lBRkYsQUFFVSxBQUNSO1lBSEYsQUFHVSxBQUNSO09BSkYsQUFJSyxBQUNIO09BTEYsQUFLSyxBQUNIO1dBTkYsQUFNUyxBQUNQO1dBQU8sT0FQVCxBQU9TLEFBQU87O2dCQVBoQjtrQkFSRixBQVFFLEFBU0E7QUFUQTtBQUNFLHNCQVFGLEFBQUM7VUFBRCxBQUNRLEFBQ047WUFGRixBQUVVLEFBQ1I7WUFIRixBQUdVLEFBQ1I7T0FKRixBQUlLLEFBQ0g7T0FMRixBQUtLLEFBQ0g7VUFORixBQU1PLEFBQ0w7WUFQRixBQU9TOztnQkFQVDtrQkFqQkYsQUFpQkUsQUFTQTtBQVRBO0FBQ0Usc0JBUUYsQUFBQyxpQ0FBUyxNQUFWLEFBQWdCLE1BQU0sUUFBdEIsQUFBOEIsUUFBUSxRQUF0QyxBQUE4QyxRQUFRLEdBQXRELEFBQXlELEdBQUcsR0FBNUQsQUFBK0Q7Z0JBQS9EO2tCQTVCTixBQUNFLEFBQ0UsQUEwQkUsQUFJUDtBQUpPOztBQU1SOztrQkFBZSxnQ0FBZixBQUFlLEFBQWUiLCJmaWxlIjoiY2hhcnQuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL3ByaXNjXzAwMC9jb2RlL0NBQ0RFVi92eC10ZXN0In0=

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/Users/prisc_000/code/CACDEV/vx-test/components/chart.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/prisc_000/code/CACDEV/vx-test/components/chart.js"); } } })();

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS5jMmFlM2YyYmE0ZWFiYzU1NzFlMC5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9jaGFydC5qcz80YmJmZjA0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHdpdGhQYXJlbnRTaXplIH0gZnJvbSBcIkB2eC9yZXNwb25zaXZlXCI7XG5pbXBvcnQgeyBzY2FsZVRpbWUsIHNjYWxlTGluZWFyIH0gZnJvbSBcIkB2eC9zY2FsZVwiO1xuaW1wb3J0IHsgTGluZVBhdGgsIEFyZWFDbG9zZWQgfSBmcm9tIFwiQHZ4L3NoYXBlXCI7XG5pbXBvcnQgeyBMaW5lYXJHcmFkaWVudCB9IGZyb20gXCJAdngvZ3JhZGllbnRcIjtcblxuaW1wb3J0IE1heFByaWNlIGZyb20gXCIuL21heHByaWNlXCI7XG5cbmZ1bmN0aW9uIENoYXJ0KHsgZGF0YSwgcGFyZW50V2lkdGgsIHBhcmVudEhlaWdodCB9KSB7XG4gIC8qKiBEZWZpbmUgbWFyZ2luIGZvciB0aGlzIGRpdiB0byBwYXNzIHRvIGNhbGN1bGF0aW9uIGZvciBzdmcgKi9cbiAgY29uc3QgbWFyZ2luID0ge1xuICAgIHRvcDogMTUsXG4gICAgYm90dG9tOiA0MCxcbiAgICBsZWZ0OiAwLFxuICAgIHJpZ2h0OiAwXG4gIH07XG4gIGNvbnN0IHdpZHRoID0gcGFyZW50V2lkdGggLSBtYXJnaW4ubGVmdCAtIG1hcmdpbi5yaWdodDtcbiAgY29uc3QgaGVpZ2h0ID0gcGFyZW50SGVpZ2h0IC0gbWFyZ2luLnRvcCAtIG1hcmdpbi5ib3R0b207XG5cbiAgLyoqIERlZmluZSBhY2Nlc3NvcnMgYW5kIHZhbHVlcyB0byBiZSBwYXNzZWQgdG8gb3VyIHNoYXBlc1xuICAgKi9cblxuICBjb25zdCB4ID0gZCA9PiBuZXcgRGF0ZShkLnRpbWUpO1xuICBjb25zdCB5ID0gZCA9PiBkLnByaWNlO1xuXG4gIGNvbnN0IGZpcnN0UG9pbnQgPSBkYXRhWzBdO1xuICBjb25zdCBjdXJyZW50UG9pbnQgPSBkYXRhW2RhdGEubGVuZ3RoIC0gMV07XG5cbiAgY29uc3QgbWluUHJpY2UgPSBNYXRoLm1pbiguLi5kYXRhLm1hcCh5KSk7XG4gIGNvbnN0IG1heFByaWNlID0gTWF0aC5tYXgoLi4uZGF0YS5tYXAoeSkpO1xuICBjb25zdCBtYXhQcmljZURhdGEgPSBbXG4gICAge1xuICAgICAgdGltZTogeChmaXJzdFBvaW50KSxcbiAgICAgIHByaWNlOiBtYXhQcmljZVxuICAgIH0sXG4gICAge1xuICAgICAgdGltZTogeChjdXJyZW50UG9pbnQpLFxuICAgICAgcHJpY2U6IG1heFByaWNlXG4gICAgfVxuICBdO1xuXG4gIGNvbnN0IHhTY2FsZSA9IHNjYWxlVGltZSh7XG4gICAgcmFuZ2U6IFswLCB3aWR0aF0sXG4gICAgZG9tYWluOiBbTWF0aC5taW4oLi4uZGF0YS5tYXAoeCkpLCBNYXRoLm1heCguLi5kYXRhLm1hcCh4KSldXG4gIH0pO1xuICAvKiogZGVmaW5lcyB0aGUgc2NhbGUgb2YgYSB5IGF4aXMgbGluZSAqL1xuICBjb25zdCB5U2NhbGUgPSBzY2FsZUxpbmVhcih7XG4gICAgcmFuZ2U6IFtoZWlnaHQsIDBdLFxuICAgIGRvbWFpbjogW21pblByaWNlLCBtYXhQcmljZV1cbiAgfSk7XG5cbiAgLy8gQ29uc29sZS5sb2coeFNjYWxlLmRvbWFpbigpKTtcbiAgLy8gY29uc29sZS5sb2coeVNjYWxlLmRvbWFpbigpKTtcblxuICAvKiBlbmQgYWNjZXNzb3IgdmFsdWVzICovXG4gIC8vICAgY2FsbCA8TGluZVBhdGgsIHBhc3MgaW4gdGhlIGRhdGEsIHhTY2FsZSwgeVNjYWxlIGRvbWFpbiBtYXBwZXJzLFxuICAvLyAgYW5kIHggYW5kIHkgYWNjZXNzb3JzXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxzdmcgd2lkdGg9e3dpZHRofSBoZWlnaHQ9e2hlaWdodH0+XG4gICAgICAgIDxMaW5lYXJHcmFkaWVudFxuICAgICAgICAgIGlkPVwiYXJlYS1maWxsXCJcbiAgICAgICAgICBmcm9tPVwiIzQ2YTJiNFwiXG4gICAgICAgICAgdG89XCIjNDZhMmI0XCJcbiAgICAgICAgICBmcm9tT3BhY2l0eT17MC4zfVxuICAgICAgICAgIHRvT3BhY2l0eT17MH1cbiAgICAgICAgLz5cbiAgICAgICAgPE1heFByaWNlXG4gICAgICAgICAgZGF0YT17bWF4UHJpY2VEYXRhfVxuICAgICAgICAgIHlTY2FsZT17eVNjYWxlfVxuICAgICAgICAgIHhTY2FsZT17eFNjYWxlfVxuICAgICAgICAgIHg9e3h9XG4gICAgICAgICAgeT17eX1cbiAgICAgICAgICBsYWJlbD17bWF4UHJpY2V9XG4gICAgICAgICAgeVRleHQ9e3lTY2FsZShtYXhQcmljZSl9XG4gICAgICAgIC8+XG4gICAgICAgIDxBcmVhQ2xvc2VkXG4gICAgICAgICAgZGF0YT17ZGF0YX1cbiAgICAgICAgICB5U2NhbGU9e3lTY2FsZX1cbiAgICAgICAgICB4U2NhbGU9e3hTY2FsZX1cbiAgICAgICAgICB4PXt4fVxuICAgICAgICAgIHk9e3l9XG4gICAgICAgICAgZmlsbD1cInVybCgjYXJlYS1maWxsKVwiXG4gICAgICAgICAgc3Ryb2tlPVwidHJhbnNwYXJlbnRcIlxuICAgICAgICAvPlxuICAgICAgICA8TGluZVBhdGggZGF0YT17ZGF0YX0geVNjYWxlPXt5U2NhbGV9IHhTY2FsZT17eFNjYWxlfSB4PXt4fSB5PXt5fSAvPlxuICAgICAgPC9zdmc+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhQYXJlbnRTaXplKENoYXJ0KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvY2hhcnQuanMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUxBO0FBS0E7QUFDQTtBQUNBO0FBSUE7OztBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQURBO0FBSUE7QUFLQTtBQUxBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFEQTtBQUlBO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUlBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBOztBQUxBO0FBT0E7QUFQQTtBQUNBO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7O0FBUEE7QUFTQTtBQVRBO0FBQ0E7QUFVQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTs7QUFQQTtBQVNBO0FBVEE7QUFDQTtBQVFBO0FBSUE7QUFKQTs7QUFNQTtBQUNBO0FBREE7Ozs7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==