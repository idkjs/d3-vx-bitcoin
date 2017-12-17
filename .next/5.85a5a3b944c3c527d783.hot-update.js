webpackHotUpdate(5,{

/***/ 514:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _toConsumableArray2 = __webpack_require__(82);

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _getPrototypeOf = __webpack_require__(44);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(15);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(16);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(45);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(49);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(17);

var _react2 = _interopRequireDefault(_react);

var _responsive = __webpack_require__(441);

var _scale = __webpack_require__(515);

var _shape = __webpack_require__(419);

var _gradient = __webpack_require__(440);

var _axis = __webpack_require__(658);

var _event = __webpack_require__(673);

var _tooltip = __webpack_require__(666);

var _formatPrice = __webpack_require__(493);

var _formatPrice2 = _interopRequireDefault(_formatPrice);

var _maxprice = __webpack_require__(671);

var _maxprice2 = _interopRequireDefault(_maxprice);

var _minprice = __webpack_require__(672);

var _minprice2 = _interopRequireDefault(_minprice);

var _d3Array = __webpack_require__(397);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/Users/prisc_000/code/CACDEV/vx-test/components/chart.js";


var Chart = function (_React$Component) {
  (0, _inherits3.default)(Chart, _React$Component);

  function Chart(props) {
    (0, _classCallCheck3.default)(this, Chart);

    return (0, _possibleConstructorReturn3.default)(this, (Chart.__proto__ || (0, _getPrototypeOf2.default)(Chart)).call(this, props));
  }

  (0, _createClass3.default)(Chart, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          data = _props.data,
          parentWidth = _props.parentWidth,
          parentHeight = _props.parentHeight,
          tooltipLeft = _props.tooltipLeft,
          tooltipRight = _props.tooltipRight,
          tooltipData = _props.tooltipData,
          showTooltip = _props.showTooltip,
          tooltipTop = _props.tooltipTop,
          hideTooltip = _props.hideTooltip;

      /** Define margin for this div to pass to calculation for svg */

      var margin = {
        top: 15,
        bottom: 40,
        left: 0,
        right: 0
      };
      var width = parentWidth - margin.left - margin.right;
      var height = parentHeight - margin.top - margin.bottom;

      var bisectDate = (0, _d3Array.bisector)(function (d) {
        return x(d);
      }).left;
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
      /** Defines the scale of a y axis line */
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
          lineNumber: 80
        }
      }, _react2.default.createElement("svg", { ref: function ref(s) {
          return _this2.svg = s;
        }, width: width, height: parentHeight, __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        }
      }, _react2.default.createElement(_axis.AxisBottom, {
        top: yScale(minPrice),
        data: data,
        scale: xScale,
        x: x,
        numTicks: 4,
        hideAxisLine: true,
        hideTicks: true,
        tickLabelComponent: _react2.default.createElement("text", { fill: "#ffffff", fontSize: 11, __source: {
            fileName: _jsxFileName,
            lineNumber: 91
          }
        }),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        }
      }), _react2.default.createElement(_gradient.LinearGradient, {
        id: "area-fill",
        from: "#46a2b4",
        to: "#46a2b4",
        fromOpacity: 0.3,
        toOpacity: 0,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
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
          lineNumber: 100
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
          lineNumber: 109
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
          lineNumber: 118
        }
      }), _react2.default.createElement(_shape.LinePath, { data: data, yScale: yScale, xScale: xScale, x: x, y: y, __source: {
          fileName: _jsxFileName,
          lineNumber: 127
        }
      }), _react2.default.createElement(_shape.Bar, {
        data: data,
        width: width,
        height: height,
        fill: "transparent",
        onMouseLeave: function onMouseLeave(data) {
          return function (event) {
            return hideTooltip();
          };
        },
        onMouseMove: function onMouseMove(data) {
          return function (event) {
            var _localPoint = (0, _event.localPoint)(_this2.svg, event),
                xPoint = _localPoint.x;

            var x0 = xScale.invert(xPoint);
            var index = bisectDate(data, x0, 1);
            var d0 = data[index - 1];
            var d1 = data[index];
            var d = x0 - xScale(x(d0)) > xScale(x(d1)) - x0 ? d1 : d0;
            showTooltip({
              tooltipData: d,
              tooltipLeft: xScale(x(d)),
              tooltipTop: yScale(y(d))
            });
          };
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 128
        }
      }), tooltipData && _react2.default.createElement("g", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 149
        }
      }, _react2.default.createElement(_shape.Line, {
        from: { x: tooltipLeft, y: yScale(y(maxPriceData[0])) },
        to: { x: tooltipLeft, y: yScale(y(minPriceData[0])) },
        stroke: "#ffffff",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 150
        }
      }), _react2.default.createElement("circle", { r: "4", cx: tooltipLeft, cy: tooltipTop, __source: {
          fileName: _jsxFileName,
          lineNumber: 155
        }
      }))));
    }
  }]);

  return Chart;
}(_react2.default.Component);

exports.default = (0, _responsive.withParentSize)((0, _tooltip.withTooltip)(Chart));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvY2hhcnQuanMiXSwibmFtZXMiOlsid2l0aFBhcmVudFNpemUiLCJzY2FsZVRpbWUiLCJzY2FsZUxpbmVhciIsIkxpbmVQYXRoIiwiQXJlYUNsb3NlZCIsIkJhciIsIkxpbmUiLCJMaW5lYXJHcmFkaWVudCIsIkF4aXNCb3R0b20iLCJsb2NhbFBvaW50Iiwid2l0aFRvb2x0aXAiLCJ0b29sVGlwIiwiZm9ybWF0UHJpY2UiLCJNYXhQcmljZSIsIk1pblByaWNlIiwiYmlzZWN0b3IiLCJDaGFydCIsInByb3BzIiwiZGF0YSIsInBhcmVudFdpZHRoIiwicGFyZW50SGVpZ2h0IiwidG9vbHRpcExlZnQiLCJ0b29sdGlwUmlnaHQiLCJ0b29sdGlwRGF0YSIsInNob3dUb29sdGlwIiwidG9vbHRpcFRvcCIsImhpZGVUb29sdGlwIiwibWFyZ2luIiwidG9wIiwiYm90dG9tIiwibGVmdCIsInJpZ2h0Iiwid2lkdGgiLCJoZWlnaHQiLCJiaXNlY3REYXRlIiwieCIsImQiLCJEYXRlIiwidGltZSIsInkiLCJwcmljZSIsImZpcnN0UG9pbnQiLCJjdXJyZW50UG9pbnQiLCJsZW5ndGgiLCJtaW5QcmljZSIsIk1hdGgiLCJtaW4iLCJtYXAiLCJtYXhQcmljZSIsIm1heCIsIm1heFByaWNlRGF0YSIsIm1pblByaWNlRGF0YSIsInhTY2FsZSIsInJhbmdlIiwiZG9tYWluIiwieVNjYWxlIiwic3ZnIiwicyIsImV2ZW50IiwieFBvaW50IiwieDAiLCJpbnZlcnQiLCJpbmRleCIsImQwIiwiZDEiLCJSZWFjdCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQVM7O0FBQ1QsQUFBUyxBQUFXOztBQUNwQixBQUFTLEFBQVUsQUFBWSxBQUFLOztBQUNwQyxBQUFTOztBQUNULEFBQVM7O0FBQ1QsQUFBUzs7QUFDVCxBQUFTLEFBQWE7O0FBQ3RCLEFBQU8sQUFBaUI7Ozs7QUFFeEIsQUFBTyxB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

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/Users/prisc_000/code/CACDEV/vx-test/components/chart.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/prisc_000/code/CACDEV/vx-test/components/chart.js"); } } })();

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS44NWE1YTNiOTQ0YzNjNTI3ZDc4My5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9jaGFydC5qcz9hZWFiYWFiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHdpdGhQYXJlbnRTaXplIH0gZnJvbSBcIkB2eC9yZXNwb25zaXZlXCI7XG5pbXBvcnQgeyBzY2FsZVRpbWUsIHNjYWxlTGluZWFyIH0gZnJvbSBcIkB2eC9zY2FsZVwiO1xuaW1wb3J0IHsgTGluZVBhdGgsIEFyZWFDbG9zZWQsIEJhciwgTGluZSB9IGZyb20gXCJAdngvc2hhcGVcIjtcbmltcG9ydCB7IExpbmVhckdyYWRpZW50IH0gZnJvbSBcIkB2eC9ncmFkaWVudFwiO1xuaW1wb3J0IHsgQXhpc0JvdHRvbSB9IGZyb20gXCJAdngvYXhpc1wiO1xuaW1wb3J0IHsgbG9jYWxQb2ludCB9IGZyb20gXCJAdngvZXZlbnRcIjtcbmltcG9ydCB7IHdpdGhUb29sdGlwLCB0b29sVGlwIH0gZnJvbSBcIkB2eC90b29sdGlwXCI7XG5pbXBvcnQgZm9ybWF0UHJpY2UgZnJvbSBcIi4uL3V0aWxzL2Zvcm1hdFByaWNlXCI7XG5cbmltcG9ydCBNYXhQcmljZSBmcm9tIFwiLi9tYXhwcmljZVwiO1xuaW1wb3J0IE1pblByaWNlIGZyb20gXCIuL21pbnByaWNlXCI7XG5pbXBvcnQgeyBiaXNlY3RvciB9IGZyb20gXCJkMy1hcnJheVwiO1xuXG5jbGFzcyBDaGFydCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICB9XG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7XG4gICAgICBkYXRhLFxuICAgICAgcGFyZW50V2lkdGgsXG4gICAgICBwYXJlbnRIZWlnaHQsXG4gICAgICB0b29sdGlwTGVmdCxcbiAgICAgIHRvb2x0aXBSaWdodCxcbiAgICAgIHRvb2x0aXBEYXRhLFxuICAgICAgc2hvd1Rvb2x0aXAsXG4gICAgICB0b29sdGlwVG9wLFxuICAgICAgaGlkZVRvb2x0aXBcbiAgICB9ID0gdGhpcy5wcm9wcztcblxuICAgIC8qKiBEZWZpbmUgbWFyZ2luIGZvciB0aGlzIGRpdiB0byBwYXNzIHRvIGNhbGN1bGF0aW9uIGZvciBzdmcgKi9cbiAgICBjb25zdCBtYXJnaW4gPSB7XG4gICAgICB0b3A6IDE1LFxuICAgICAgYm90dG9tOiA0MCxcbiAgICAgIGxlZnQ6IDAsXG4gICAgICByaWdodDogMFxuICAgIH07XG4gICAgY29uc3Qgd2lkdGggPSBwYXJlbnRXaWR0aCAtIG1hcmdpbi5sZWZ0IC0gbWFyZ2luLnJpZ2h0O1xuICAgIGNvbnN0IGhlaWdodCA9IHBhcmVudEhlaWdodCAtIG1hcmdpbi50b3AgLSBtYXJnaW4uYm90dG9tO1xuXG4gICAgY29uc3QgYmlzZWN0RGF0ZSA9IGJpc2VjdG9yKGQgPT4geChkKSkubGVmdDtcbiAgICAvKiogRGVmaW5lIGFjY2Vzc29ycyBhbmQgdmFsdWVzIHRvIGJlIHBhc3NlZCB0byBvdXIgc2hhcGVzXG4gICAgICovXG5cbiAgICBjb25zdCB4ID0gZCA9PiBuZXcgRGF0ZShkLnRpbWUpO1xuICAgIGNvbnN0IHkgPSBkID0+IGQucHJpY2U7XG5cbiAgICBjb25zdCBmaXJzdFBvaW50ID0gZGF0YVswXTtcbiAgICBjb25zdCBjdXJyZW50UG9pbnQgPSBkYXRhW2RhdGEubGVuZ3RoIC0gMV07XG5cbiAgICBjb25zdCBtaW5QcmljZSA9IE1hdGgubWluKC4uLmRhdGEubWFwKHkpKTtcbiAgICBjb25zdCBtYXhQcmljZSA9IE1hdGgubWF4KC4uLmRhdGEubWFwKHkpKTtcbiAgICBjb25zdCBtYXhQcmljZURhdGEgPSBbXG4gICAgICB7IHRpbWU6IHgoZmlyc3RQb2ludCksIHByaWNlOiBtYXhQcmljZSB9LFxuICAgICAgeyB0aW1lOiB4KGN1cnJlbnRQb2ludCksIHByaWNlOiBtYXhQcmljZSB9XG4gICAgXTtcblxuICAgIGNvbnN0IG1pblByaWNlRGF0YSA9IFtcbiAgICAgIHsgdGltZTogeChmaXJzdFBvaW50KSwgcHJpY2U6IG1pblByaWNlIH0sXG4gICAgICB7IHRpbWU6IHgoY3VycmVudFBvaW50KSwgcHJpY2U6IG1pblByaWNlIH1cbiAgICBdO1xuXG4gICAgY29uc3QgeFNjYWxlID0gc2NhbGVUaW1lKHtcbiAgICAgIHJhbmdlOiBbMCwgd2lkdGhdLFxuICAgICAgZG9tYWluOiBbTWF0aC5taW4oLi4uZGF0YS5tYXAoeCkpLCBNYXRoLm1heCguLi5kYXRhLm1hcCh4KSldXG4gICAgfSk7XG4gICAgLyoqIERlZmluZXMgdGhlIHNjYWxlIG9mIGEgeSBheGlzIGxpbmUgKi9cbiAgICBjb25zdCB5U2NhbGUgPSBzY2FsZUxpbmVhcih7XG4gICAgICByYW5nZTogW2hlaWdodCwgMF0sXG4gICAgICBkb21haW46IFttaW5QcmljZSwgbWF4UHJpY2VdXG4gICAgfSk7XG5cbiAgICAvLyBDb25zb2xlLmxvZyh4U2NhbGUuZG9tYWluKCkpO1xuICAgIC8vIGNvbnNvbGUubG9nKHlTY2FsZS5kb21haW4oKSk7XG5cbiAgICAvKiBlbmQgYWNjZXNzb3IgdmFsdWVzICovXG4gICAgLy8gICBjYWxsIDxMaW5lUGF0aCwgcGFzcyBpbiB0aGUgZGF0YSwgeFNjYWxlLCB5U2NhbGUgZG9tYWluIG1hcHBlcnMsXG4gICAgLy8gIGFuZCB4IGFuZCB5IGFjY2Vzc29yc1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8c3ZnIHJlZj17cyA9PiAodGhpcy5zdmcgPSBzKX0gd2lkdGg9e3dpZHRofSBoZWlnaHQ9e3BhcmVudEhlaWdodH0+XG4gICAgICAgICAgey8qIHRvcDogc2hvcnRjdXQgZm9yIHRyYW5zbGF0ZSB5IHZhbHVlICovfVxuICAgICAgICAgIDxBeGlzQm90dG9tXG4gICAgICAgICAgICB0b3A9e3lTY2FsZShtaW5QcmljZSl9XG4gICAgICAgICAgICBkYXRhPXtkYXRhfVxuICAgICAgICAgICAgc2NhbGU9e3hTY2FsZX1cbiAgICAgICAgICAgIHg9e3h9XG4gICAgICAgICAgICBudW1UaWNrcz17NH1cbiAgICAgICAgICAgIGhpZGVBeGlzTGluZVxuICAgICAgICAgICAgaGlkZVRpY2tzXG4gICAgICAgICAgICB0aWNrTGFiZWxDb21wb25lbnQ9ezx0ZXh0IGZpbGw9XCIjZmZmZmZmXCIgZm9udFNpemU9ezExfSAvPn1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxMaW5lYXJHcmFkaWVudFxuICAgICAgICAgICAgaWQ9XCJhcmVhLWZpbGxcIlxuICAgICAgICAgICAgZnJvbT1cIiM0NmEyYjRcIlxuICAgICAgICAgICAgdG89XCIjNDZhMmI0XCJcbiAgICAgICAgICAgIGZyb21PcGFjaXR5PXswLjN9XG4gICAgICAgICAgICB0b09wYWNpdHk9ezB9XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8TWF4UHJpY2VcbiAgICAgICAgICAgIGRhdGE9e21heFByaWNlRGF0YX1cbiAgICAgICAgICAgIHlTY2FsZT17eVNjYWxlfVxuICAgICAgICAgICAgeFNjYWxlPXt4U2NhbGV9XG4gICAgICAgICAgICB4PXt4fVxuICAgICAgICAgICAgeT17eX1cbiAgICAgICAgICAgIGxhYmVsPXtmb3JtYXRQcmljZShtYXhQcmljZSl9XG4gICAgICAgICAgICB5VGV4dD17eVNjYWxlKG1heFByaWNlKX1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxNaW5QcmljZVxuICAgICAgICAgICAgZGF0YT17bWluUHJpY2VEYXRhfVxuICAgICAgICAgICAgeVNjYWxlPXt5U2NhbGV9XG4gICAgICAgICAgICB4U2NhbGU9e3hTY2FsZX1cbiAgICAgICAgICAgIHg9e3h9XG4gICAgICAgICAgICB5PXt5fVxuICAgICAgICAgICAgbGFiZWw9e2Zvcm1hdFByaWNlKG1pblByaWNlKX1cbiAgICAgICAgICAgIHlUZXh0PXt5U2NhbGUobWluUHJpY2UpfVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPEFyZWFDbG9zZWRcbiAgICAgICAgICAgIGRhdGE9e2RhdGF9XG4gICAgICAgICAgICB5U2NhbGU9e3lTY2FsZX1cbiAgICAgICAgICAgIHhTY2FsZT17eFNjYWxlfVxuICAgICAgICAgICAgeD17eH1cbiAgICAgICAgICAgIHk9e3l9XG4gICAgICAgICAgICBmaWxsPVwidXJsKCNhcmVhLWZpbGwpXCJcbiAgICAgICAgICAgIHN0cm9rZT1cInRyYW5zcGFyZW50XCJcbiAgICAgICAgICAvPlxuICAgICAgICAgIDxMaW5lUGF0aCBkYXRhPXtkYXRhfSB5U2NhbGU9e3lTY2FsZX0geFNjYWxlPXt4U2NhbGV9IHg9e3h9IHk9e3l9IC8+XG4gICAgICAgICAgPEJhclxuICAgICAgICAgICAgZGF0YT17ZGF0YX1cbiAgICAgICAgICAgIHdpZHRoPXt3aWR0aH1cbiAgICAgICAgICAgIGhlaWdodD17aGVpZ2h0fVxuICAgICAgICAgICAgZmlsbD1cInRyYW5zcGFyZW50XCJcbiAgICAgICAgICAgIG9uTW91c2VMZWF2ZT17ZGF0YSA9PiBldmVudCA9PiBoaWRlVG9vbHRpcCgpfVxuICAgICAgICAgICAgb25Nb3VzZU1vdmU9e2RhdGEgPT4gZXZlbnQgPT4ge1xuICAgICAgICAgICAgICBjb25zdCB7IHg6IHhQb2ludCB9ID0gbG9jYWxQb2ludCh0aGlzLnN2ZywgZXZlbnQpO1xuICAgICAgICAgICAgICBjb25zdCB4MCA9IHhTY2FsZS5pbnZlcnQoeFBvaW50KTtcbiAgICAgICAgICAgICAgY29uc3QgaW5kZXggPSBiaXNlY3REYXRlKGRhdGEsIHgwLCAxKTtcbiAgICAgICAgICAgICAgY29uc3QgZDAgPSBkYXRhW2luZGV4IC0gMV07XG4gICAgICAgICAgICAgIGNvbnN0IGQxID0gZGF0YVtpbmRleF07XG4gICAgICAgICAgICAgIGNvbnN0IGQgPSB4MCAtIHhTY2FsZSh4KGQwKSkgPiB4U2NhbGUoeChkMSkpIC0geDAgPyBkMSA6IGQwO1xuICAgICAgICAgICAgICBzaG93VG9vbHRpcCh7XG4gICAgICAgICAgICAgICAgdG9vbHRpcERhdGE6IGQsXG4gICAgICAgICAgICAgICAgdG9vbHRpcExlZnQ6IHhTY2FsZSh4KGQpKSxcbiAgICAgICAgICAgICAgICB0b29sdGlwVG9wOiB5U2NhbGUoeShkKSlcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9fVxuICAgICAgICAgIC8+XG4gICAgICAgICAge3Rvb2x0aXBEYXRhICYmIChcbiAgICAgICAgICAgIDxnPlxuICAgICAgICAgICAgICA8TGluZVxuICAgICAgICAgICAgICAgIGZyb209e3sgeDogdG9vbHRpcExlZnQsIHk6IHlTY2FsZSh5KG1heFByaWNlRGF0YVswXSkpIH19XG4gICAgICAgICAgICAgICAgdG89e3sgeDogdG9vbHRpcExlZnQsIHk6IHlTY2FsZSh5KG1pblByaWNlRGF0YVswXSkpIH19XG4gICAgICAgICAgICAgICAgc3Ryb2tlPVwiI2ZmZmZmZlwiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDxjaXJjbGUgcj1cIjRcIiBjeD17dG9vbHRpcExlZnR9IGN5PXt0b29sdGlwVG9wfSAvPlxuICAgICAgICAgICAgPC9nPlxuICAgICAgICAgICl9XG4gICAgICAgIDwvc3ZnPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoUGFyZW50U2l6ZSh3aXRoVG9vbHRpcChDaGFydCkpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9jaGFydC5qcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBOzs7QUFDQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7Ozs7O0FBRUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUNBOzs7OztBQUNBO0FBQUE7QUFDQTtBQVVBO0FBVEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBREE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUxBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBSUE7OztBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBREE7QUFJQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFJQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUVBO0FBRkE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFSQTtBQVVBO0FBVkE7QUFDQTtBQVdBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7O0FBTEE7QUFPQTtBQVBBO0FBQ0E7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTs7QUFQQTtBQVNBO0FBVEE7QUFDQTtBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBOztBQVBBO0FBU0E7QUFUQTtBQUNBO0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7O0FBUEE7QUFTQTtBQVRBO0FBQ0E7QUFRQTtBQUNBO0FBREE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUdBO0FBQUE7QUFDQTtBQUZBO0FBUkE7QUFOQTs7QUFBQTtBQW9CQTtBQXBCQTtBQUNBOztBQW9CQTtBQUNBO0FBREE7QUFBQTtBQUVBO0FBQ0E7QUFDQTs7QUFIQTtBQUtBO0FBTEE7QUFDQTtBQUlBO0FBTUE7QUFOQTs7Ozs7O0FBN0lBO0FBQ0E7QUFxSkE7Ozs7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==