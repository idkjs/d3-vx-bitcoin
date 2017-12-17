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
          lineNumber: 79
        }
      }, _react2.default.createElement("svg", { ref: function ref(s) {
          return _this2.svg = s;
        }, width: width, height: parentHeight, __source: {
          fileName: _jsxFileName,
          lineNumber: 80
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
            lineNumber: 90
          }
        }),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        }
      }), _react2.default.createElement(_gradient.LinearGradient, {
        id: "area-fill",
        from: "#46a2b4",
        to: "#46a2b4",
        fromOpacity: 0.3,
        toOpacity: 0,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92
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
          lineNumber: 99
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
          lineNumber: 108
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
          lineNumber: 117
        }
      }), _react2.default.createElement(_shape.LinePath, { data: data, yScale: yScale, xScale: xScale, x: x, y: y, __source: {
          fileName: _jsxFileName,
          lineNumber: 126
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
          lineNumber: 127
        }
      }), tooltipData && _react2.default.createElement("g", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 148
        }
      }, _react2.default.createElement(_shape.Line, {
        from: { x: tooltipLeft, y: yScale(y(maxPriceData[0])) },
        to: { x: tooltipLeft, y: yScale(y(minPriceData[0])) },
        stroke: "#ffffff",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 149
        }
      }))));
    }
  }]);

  return Chart;
}(_react2.default.Component);

exports.default = (0, _responsive.withParentSize)((0, _tooltip.withTooltip)(Chart));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvY2hhcnQuanMiXSwibmFtZXMiOlsid2l0aFBhcmVudFNpemUiLCJzY2FsZVRpbWUiLCJzY2FsZUxpbmVhciIsIkxpbmVQYXRoIiwiQXJlYUNsb3NlZCIsIkJhciIsIkxpbmUiLCJMaW5lYXJHcmFkaWVudCIsIkF4aXNCb3R0b20iLCJsb2NhbFBvaW50Iiwid2l0aFRvb2x0aXAiLCJ0b29sVGlwIiwiZm9ybWF0UHJpY2UiLCJNYXhQcmljZSIsIk1pblByaWNlIiwiYmlzZWN0b3IiLCJDaGFydCIsInByb3BzIiwiZGF0YSIsInBhcmVudFdpZHRoIiwicGFyZW50SGVpZ2h0IiwidG9vbHRpcExlZnQiLCJ0b29sdGlwUmlnaHQiLCJ0b29sdGlwRGF0YSIsInNob3dUb29sdGlwIiwiaGlkZVRvb2x0aXAiLCJtYXJnaW4iLCJ0b3AiLCJib3R0b20iLCJsZWZ0IiwicmlnaHQiLCJ3aWR0aCIsImhlaWdodCIsImJpc2VjdERhdGUiLCJ4IiwiZCIsIkRhdGUiLCJ0aW1lIiwieSIsInByaWNlIiwiZmlyc3RQb2ludCIsImN1cnJlbnRQb2ludCIsImxlbmd0aCIsIm1pblByaWNlIiwiTWF0aCIsIm1pbiIsIm1hcCIsIm1heFByaWNlIiwibWF4IiwibWF4UHJpY2VEYXRhIiwibWluUHJpY2VEYXRhIiwieFNjYWxlIiwicmFuZ2UiLCJkb21haW4iLCJ5U2NhbGUiLCJzdmciLCJzIiwiZXZlbnQiLCJ4UG9pbnQiLCJ4MCIsImludmVydCIsImluZGV4IiwiZDAiLCJkMSIsInRvb2x0aXBUb3AiLCJSZWFjdCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQVM7O0FBQ1QsQUFBUyxBQUFXOztBQUNwQixBQUFTLEFBQVUsQUFBWSxBQUFLOztBQUNwQyxBQUFTOztBQUNULEFBQVM7O0FBQ1QsQUFBUzs7QUFDVCxBQUFTLEFBQWE7O0FBQ3RCLEFBQU8sQUFBaUI7Ozs7QUFFeEIsQUFBTyxB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

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/Users/prisc_000/code/CACDEV/vx-test/components/chart.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/prisc_000/code/CACDEV/vx-test/components/chart.js"); } } })();

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS4zYjIyNDIzZDU0NWI1ZmUxNGM4OC5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9jaGFydC5qcz80Y2M2NTY5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHdpdGhQYXJlbnRTaXplIH0gZnJvbSBcIkB2eC9yZXNwb25zaXZlXCI7XG5pbXBvcnQgeyBzY2FsZVRpbWUsIHNjYWxlTGluZWFyIH0gZnJvbSBcIkB2eC9zY2FsZVwiO1xuaW1wb3J0IHsgTGluZVBhdGgsIEFyZWFDbG9zZWQsIEJhciwgTGluZSB9IGZyb20gXCJAdngvc2hhcGVcIjtcbmltcG9ydCB7IExpbmVhckdyYWRpZW50IH0gZnJvbSBcIkB2eC9ncmFkaWVudFwiO1xuaW1wb3J0IHsgQXhpc0JvdHRvbSB9IGZyb20gXCJAdngvYXhpc1wiO1xuaW1wb3J0IHsgbG9jYWxQb2ludCB9IGZyb20gXCJAdngvZXZlbnRcIjtcbmltcG9ydCB7IHdpdGhUb29sdGlwLCB0b29sVGlwIH0gZnJvbSBcIkB2eC90b29sdGlwXCI7XG5pbXBvcnQgZm9ybWF0UHJpY2UgZnJvbSBcIi4uL3V0aWxzL2Zvcm1hdFByaWNlXCI7XG5cbmltcG9ydCBNYXhQcmljZSBmcm9tIFwiLi9tYXhwcmljZVwiO1xuaW1wb3J0IE1pblByaWNlIGZyb20gXCIuL21pbnByaWNlXCI7XG5pbXBvcnQgeyBiaXNlY3RvciB9IGZyb20gXCJkMy1hcnJheVwiO1xuXG5jbGFzcyBDaGFydCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICB9XG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7XG4gICAgICBkYXRhLFxuICAgICAgcGFyZW50V2lkdGgsXG4gICAgICBwYXJlbnRIZWlnaHQsXG4gICAgICB0b29sdGlwTGVmdCxcbiAgICAgIHRvb2x0aXBSaWdodCxcbiAgICAgIHRvb2x0aXBEYXRhLFxuICAgICAgc2hvd1Rvb2x0aXAsXG4gICAgICBoaWRlVG9vbHRpcFxuICAgIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgLyoqIERlZmluZSBtYXJnaW4gZm9yIHRoaXMgZGl2IHRvIHBhc3MgdG8gY2FsY3VsYXRpb24gZm9yIHN2ZyAqL1xuICAgIGNvbnN0IG1hcmdpbiA9IHtcbiAgICAgIHRvcDogMTUsXG4gICAgICBib3R0b206IDQwLFxuICAgICAgbGVmdDogMCxcbiAgICAgIHJpZ2h0OiAwXG4gICAgfTtcbiAgICBjb25zdCB3aWR0aCA9IHBhcmVudFdpZHRoIC0gbWFyZ2luLmxlZnQgLSBtYXJnaW4ucmlnaHQ7XG4gICAgY29uc3QgaGVpZ2h0ID0gcGFyZW50SGVpZ2h0IC0gbWFyZ2luLnRvcCAtIG1hcmdpbi5ib3R0b207XG5cbiAgICBjb25zdCBiaXNlY3REYXRlID0gYmlzZWN0b3IoZCA9PiB4KGQpKS5sZWZ0O1xuICAgIC8qKiBEZWZpbmUgYWNjZXNzb3JzIGFuZCB2YWx1ZXMgdG8gYmUgcGFzc2VkIHRvIG91ciBzaGFwZXNcbiAgICAgKi9cblxuICAgIGNvbnN0IHggPSBkID0+IG5ldyBEYXRlKGQudGltZSk7XG4gICAgY29uc3QgeSA9IGQgPT4gZC5wcmljZTtcblxuICAgIGNvbnN0IGZpcnN0UG9pbnQgPSBkYXRhWzBdO1xuICAgIGNvbnN0IGN1cnJlbnRQb2ludCA9IGRhdGFbZGF0YS5sZW5ndGggLSAxXTtcblxuICAgIGNvbnN0IG1pblByaWNlID0gTWF0aC5taW4oLi4uZGF0YS5tYXAoeSkpO1xuICAgIGNvbnN0IG1heFByaWNlID0gTWF0aC5tYXgoLi4uZGF0YS5tYXAoeSkpO1xuICAgIGNvbnN0IG1heFByaWNlRGF0YSA9IFtcbiAgICAgIHsgdGltZTogeChmaXJzdFBvaW50KSwgcHJpY2U6IG1heFByaWNlIH0sXG4gICAgICB7IHRpbWU6IHgoY3VycmVudFBvaW50KSwgcHJpY2U6IG1heFByaWNlIH1cbiAgICBdO1xuXG4gICAgY29uc3QgbWluUHJpY2VEYXRhID0gW1xuICAgICAgeyB0aW1lOiB4KGZpcnN0UG9pbnQpLCBwcmljZTogbWluUHJpY2UgfSxcbiAgICAgIHsgdGltZTogeChjdXJyZW50UG9pbnQpLCBwcmljZTogbWluUHJpY2UgfVxuICAgIF07XG5cbiAgICBjb25zdCB4U2NhbGUgPSBzY2FsZVRpbWUoe1xuICAgICAgcmFuZ2U6IFswLCB3aWR0aF0sXG4gICAgICBkb21haW46IFtNYXRoLm1pbiguLi5kYXRhLm1hcCh4KSksIE1hdGgubWF4KC4uLmRhdGEubWFwKHgpKV1cbiAgICB9KTtcbiAgICAvKiogRGVmaW5lcyB0aGUgc2NhbGUgb2YgYSB5IGF4aXMgbGluZSAqL1xuICAgIGNvbnN0IHlTY2FsZSA9IHNjYWxlTGluZWFyKHtcbiAgICAgIHJhbmdlOiBbaGVpZ2h0LCAwXSxcbiAgICAgIGRvbWFpbjogW21pblByaWNlLCBtYXhQcmljZV1cbiAgICB9KTtcblxuICAgIC8vIENvbnNvbGUubG9nKHhTY2FsZS5kb21haW4oKSk7XG4gICAgLy8gY29uc29sZS5sb2coeVNjYWxlLmRvbWFpbigpKTtcblxuICAgIC8qIGVuZCBhY2Nlc3NvciB2YWx1ZXMgKi9cbiAgICAvLyAgIGNhbGwgPExpbmVQYXRoLCBwYXNzIGluIHRoZSBkYXRhLCB4U2NhbGUsIHlTY2FsZSBkb21haW4gbWFwcGVycyxcbiAgICAvLyAgYW5kIHggYW5kIHkgYWNjZXNzb3JzXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxzdmcgcmVmPXtzID0+ICh0aGlzLnN2ZyA9IHMpfSB3aWR0aD17d2lkdGh9IGhlaWdodD17cGFyZW50SGVpZ2h0fT5cbiAgICAgICAgICB7LyogdG9wOiBzaG9ydGN1dCBmb3IgdHJhbnNsYXRlIHkgdmFsdWUgKi99XG4gICAgICAgICAgPEF4aXNCb3R0b21cbiAgICAgICAgICAgIHRvcD17eVNjYWxlKG1pblByaWNlKX1cbiAgICAgICAgICAgIGRhdGE9e2RhdGF9XG4gICAgICAgICAgICBzY2FsZT17eFNjYWxlfVxuICAgICAgICAgICAgeD17eH1cbiAgICAgICAgICAgIG51bVRpY2tzPXs0fVxuICAgICAgICAgICAgaGlkZUF4aXNMaW5lXG4gICAgICAgICAgICBoaWRlVGlja3NcbiAgICAgICAgICAgIHRpY2tMYWJlbENvbXBvbmVudD17PHRleHQgZmlsbD1cIiNmZmZmZmZcIiBmb250U2l6ZT17MTF9IC8+fVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPExpbmVhckdyYWRpZW50XG4gICAgICAgICAgICBpZD1cImFyZWEtZmlsbFwiXG4gICAgICAgICAgICBmcm9tPVwiIzQ2YTJiNFwiXG4gICAgICAgICAgICB0bz1cIiM0NmEyYjRcIlxuICAgICAgICAgICAgZnJvbU9wYWNpdHk9ezAuM31cbiAgICAgICAgICAgIHRvT3BhY2l0eT17MH1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxNYXhQcmljZVxuICAgICAgICAgICAgZGF0YT17bWF4UHJpY2VEYXRhfVxuICAgICAgICAgICAgeVNjYWxlPXt5U2NhbGV9XG4gICAgICAgICAgICB4U2NhbGU9e3hTY2FsZX1cbiAgICAgICAgICAgIHg9e3h9XG4gICAgICAgICAgICB5PXt5fVxuICAgICAgICAgICAgbGFiZWw9e2Zvcm1hdFByaWNlKG1heFByaWNlKX1cbiAgICAgICAgICAgIHlUZXh0PXt5U2NhbGUobWF4UHJpY2UpfVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPE1pblByaWNlXG4gICAgICAgICAgICBkYXRhPXttaW5QcmljZURhdGF9XG4gICAgICAgICAgICB5U2NhbGU9e3lTY2FsZX1cbiAgICAgICAgICAgIHhTY2FsZT17eFNjYWxlfVxuICAgICAgICAgICAgeD17eH1cbiAgICAgICAgICAgIHk9e3l9XG4gICAgICAgICAgICBsYWJlbD17Zm9ybWF0UHJpY2UobWluUHJpY2UpfVxuICAgICAgICAgICAgeVRleHQ9e3lTY2FsZShtaW5QcmljZSl9XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8QXJlYUNsb3NlZFxuICAgICAgICAgICAgZGF0YT17ZGF0YX1cbiAgICAgICAgICAgIHlTY2FsZT17eVNjYWxlfVxuICAgICAgICAgICAgeFNjYWxlPXt4U2NhbGV9XG4gICAgICAgICAgICB4PXt4fVxuICAgICAgICAgICAgeT17eX1cbiAgICAgICAgICAgIGZpbGw9XCJ1cmwoI2FyZWEtZmlsbClcIlxuICAgICAgICAgICAgc3Ryb2tlPVwidHJhbnNwYXJlbnRcIlxuICAgICAgICAgIC8+XG4gICAgICAgICAgPExpbmVQYXRoIGRhdGE9e2RhdGF9IHlTY2FsZT17eVNjYWxlfSB4U2NhbGU9e3hTY2FsZX0geD17eH0geT17eX0gLz5cbiAgICAgICAgICA8QmFyXG4gICAgICAgICAgICBkYXRhPXtkYXRhfVxuICAgICAgICAgICAgd2lkdGg9e3dpZHRofVxuICAgICAgICAgICAgaGVpZ2h0PXtoZWlnaHR9XG4gICAgICAgICAgICBmaWxsPVwidHJhbnNwYXJlbnRcIlxuICAgICAgICAgICAgb25Nb3VzZUxlYXZlPXtkYXRhID0+IGV2ZW50ID0+IGhpZGVUb29sdGlwKCl9XG4gICAgICAgICAgICBvbk1vdXNlTW92ZT17ZGF0YSA9PiBldmVudCA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IHsgeDogeFBvaW50IH0gPSBsb2NhbFBvaW50KHRoaXMuc3ZnLCBldmVudCk7XG4gICAgICAgICAgICAgIGNvbnN0IHgwID0geFNjYWxlLmludmVydCh4UG9pbnQpO1xuICAgICAgICAgICAgICBjb25zdCBpbmRleCA9IGJpc2VjdERhdGUoZGF0YSwgeDAsIDEpO1xuICAgICAgICAgICAgICBjb25zdCBkMCA9IGRhdGFbaW5kZXggLSAxXTtcbiAgICAgICAgICAgICAgY29uc3QgZDEgPSBkYXRhW2luZGV4XTtcbiAgICAgICAgICAgICAgY29uc3QgZCA9IHgwIC0geFNjYWxlKHgoZDApKSA+IHhTY2FsZSh4KGQxKSkgLSB4MCA/IGQxIDogZDA7XG4gICAgICAgICAgICAgIHNob3dUb29sdGlwKHtcbiAgICAgICAgICAgICAgICB0b29sdGlwRGF0YTogZCxcbiAgICAgICAgICAgICAgICB0b29sdGlwTGVmdDogeFNjYWxlKHgoZCkpLFxuICAgICAgICAgICAgICAgIHRvb2x0aXBUb3A6IHlTY2FsZSh5KGQpKVxuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgLz5cbiAgICAgICAgICB7dG9vbHRpcERhdGEgJiYgKFxuICAgICAgICAgICAgPGc+XG4gICAgICAgICAgICAgIDxMaW5lXG4gICAgICAgICAgICAgICAgZnJvbT17eyB4OiB0b29sdGlwTGVmdCwgeTogeVNjYWxlKHkobWF4UHJpY2VEYXRhWzBdKSkgfX1cbiAgICAgICAgICAgICAgICB0bz17eyB4OiB0b29sdGlwTGVmdCwgeTogeVNjYWxlKHkobWluUHJpY2VEYXRhWzBdKSkgfX1cbiAgICAgICAgICAgICAgICBzdHJva2U9XCIjZmZmZmZmXCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZz5cbiAgICAgICAgICApfVxuICAgICAgICA8L3N2Zz5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFBhcmVudFNpemUod2l0aFRvb2x0aXAoQ2hhcnQpKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvY2hhcnQuanMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTs7O0FBQ0E7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7OztBQUVBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFDQTs7Ozs7QUFDQTtBQUFBO0FBQ0E7QUFTQTtBQVJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFEQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBTEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFJQTs7O0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFEQTtBQUlBO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUlBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBRUE7QUFGQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQVJBO0FBVUE7QUFWQTtBQUNBO0FBV0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTs7QUFMQTtBQU9BO0FBUEE7QUFDQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBOztBQVBBO0FBU0E7QUFUQTtBQUNBO0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7O0FBUEE7QUFTQTtBQVRBO0FBQ0E7QUFVQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTs7QUFQQTtBQVNBO0FBVEE7QUFDQTtBQVFBO0FBQ0E7QUFEQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBR0E7QUFBQTtBQUNBO0FBRkE7QUFSQTtBQU5BOztBQUFBO0FBb0JBO0FBcEJBO0FBQ0E7O0FBb0JBO0FBQ0E7QUFEQTtBQUFBO0FBRUE7QUFDQTtBQUNBOztBQUhBO0FBVUE7QUFWQTtBQUNBOzs7OztBQXhJQTtBQUNBO0FBbUpBOzs7Ozs7O0EiLCJzb3VyY2VSb290IjoiIn0=