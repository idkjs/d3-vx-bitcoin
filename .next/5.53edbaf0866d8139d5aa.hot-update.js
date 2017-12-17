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
          showtoolTip = _props.showtoolTip,
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
          return _this2.svg - s;
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
        onMouseMove: function onMouseMove(data) {
          return function (event) {
            var _localPoint = (0, _event.localPoint)(_this2.svg, event),
                xPoint = _localPoint.x;

            var x0 = xScale.invert(xPoint);
            var index = bisectDate(data, x0, 1);
            var d = x0 - xScale(x(d0)) > xScale(x(d1)) - x0 ? d1 : d0;
            // Call showtoolTip and define what should shop up at each position
            showtoolTip({
              tooltipLeft: xScale(x(d)),
              tooltipRight: yScale(y(d)),
              tooltipData: d
            });
          };
        },
        onMouseLeave: function onMouseLeave(data) {
          return function (event) {
            return hideTooltip();
          };
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 127
        }
      }), tooltipData && _react2.default.createElement("g", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 147
        }
      }, _react2.default.createElement(_shape.Line, {
        from: { x: tooltipLeft, y: yScale(y(maxPriceData[0])) },
        to: { x: tooltipLeft, y: yScale(y(minPriceData[0])) },
        stroke: "#ffffff",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 148
        }
      }))));
    }
  }]);

  return Chart;
}(_react2.default.Component);

exports.default = (0, _responsive.withParentSize)((0, _tooltip.withTooltip)(Chart));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvY2hhcnQuanMiXSwibmFtZXMiOlsid2l0aFBhcmVudFNpemUiLCJzY2FsZVRpbWUiLCJzY2FsZUxpbmVhciIsIkxpbmVQYXRoIiwiQXJlYUNsb3NlZCIsIkJhciIsIkxpbmUiLCJMaW5lYXJHcmFkaWVudCIsIkF4aXNCb3R0b20iLCJsb2NhbFBvaW50Iiwid2l0aFRvb2x0aXAiLCJ0b29sVGlwIiwiZm9ybWF0UHJpY2UiLCJNYXhQcmljZSIsIk1pblByaWNlIiwiYmlzZWN0b3IiLCJDaGFydCIsInByb3BzIiwiZGF0YSIsInBhcmVudFdpZHRoIiwicGFyZW50SGVpZ2h0IiwidG9vbHRpcExlZnQiLCJ0b29sdGlwUmlnaHQiLCJ0b29sdGlwRGF0YSIsInNob3d0b29sVGlwIiwiaGlkZVRvb2x0aXAiLCJtYXJnaW4iLCJ0b3AiLCJib3R0b20iLCJsZWZ0IiwicmlnaHQiLCJ3aWR0aCIsImhlaWdodCIsImJpc2VjdERhdGUiLCJ4IiwiZCIsIkRhdGUiLCJ0aW1lIiwieSIsInByaWNlIiwiZmlyc3RQb2ludCIsImN1cnJlbnRQb2ludCIsImxlbmd0aCIsIm1pblByaWNlIiwiTWF0aCIsIm1pbiIsIm1hcCIsIm1heFByaWNlIiwibWF4IiwibWF4UHJpY2VEYXRhIiwibWluUHJpY2VEYXRhIiwieFNjYWxlIiwicmFuZ2UiLCJkb21haW4iLCJ5U2NhbGUiLCJzdmciLCJzIiwiZXZlbnQiLCJ4UG9pbnQiLCJ4MCIsImludmVydCIsImluZGV4IiwiZDAiLCJkMSIsIlJlYWN0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBUzs7QUFDVCxBQUFTLEFBQVc7O0FBQ3BCLEFBQVMsQUFBVSxBQUFZLEFBQUs7O0FBQ3BDLEFBQVM7O0FBQ1QsQUFBUzs7QUFDVCxBQUFTOztBQUNULEFBQVMsQUFBYTs7QUFDdEIsQUFBTyxBQUFpQjs7OztBQUV4QixBQUFPLEFBQWM7Ozs7QUFDckIs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Z0IsS0FEVixBQUNOLEFBQXFCO2dCQURmLEFBQ2pCLHFCQURpQixBQUNwQixBQUNSOztnQkFBTSxLQUFLLE9BQUEsQUFBTyxPQUFsQixBQUFXLEFBQWMsQUFDekI7Z0JBQU0sUUFBUSxXQUFBLEFBQVcsTUFBWCxBQUFpQixJQUEvQixBQUFjLEFBQXFCLEFBQ25DO2dCQUFNLElBQUksS0FBSyxPQUFPLEVBQVosQUFBSyxBQUFPLEFBQUUsT0FBTyxPQUFPLEVBQVAsQUFBTyxBQUFFLE9BQTlCLEFBQXFDLEtBQXJDLEFBQTBDLEtBQXBELEFBQXlELEFBQ3pEO0FBQ0E7OzJCQUNlLE9BQU8sRUFEVixBQUNHLEFBQU8sQUFBRSxBQUN0Qjs0QkFBYyxPQUFPLEVBRlgsQUFFSSxBQUFPLEFBQUUsQUFDdkI7MkJBSEYsQUFBWSxBQUdHLEFBRWhCO0FBTGEsQUFDVjtBQVBTO0FBTGYsQUFpQkU7c0JBQWMsNEJBQUE7aUJBQVEsaUJBQUE7bUJBQUEsQUFBUztBQUFqQjtBQWpCaEI7O29CQUFBO3NCQS9DRixBQStDRSxBQW1CQztBQW5CRDtBQUNFLHlDQW1CQSxjQUFBOztvQkFBQTtzQkFBQSxBQUNFO0FBREY7QUFBQSxPQUFBLGtCQUNFLEFBQUM7Y0FDTyxFQUFFLEdBQUYsQUFBSyxhQUFhLEdBQUcsT0FBTyxFQUFFLGFBRHRDLEFBQ1EsQUFBcUIsQUFBTyxBQUFFLEFBQWEsQUFDakQ7WUFBSSxFQUFFLEdBQUYsQUFBSyxhQUFhLEdBQUcsT0FBTyxFQUFFLGFBRnBDLEFBRU0sQUFBcUIsQUFBTyxBQUFFLEFBQWEsQUFDL0M7Z0JBSEYsQUFHUzs7b0JBSFQ7c0JBdEVWLEFBQ0UsQUFDRSxBQW1FSSxBQUNFLEFBVVg7QUFWVztBQUNFOzs7OztFQXZJSSxnQkFBTSxBLEFBbUoxQjs7a0JBQWUsZ0NBQWUsMEJBQTlCLEFBQWUsQUFBZSxBQUFZIiwiZmlsZSI6ImNoYXJ0LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9wcmlzY18wMDAvY29kZS9DQUNERVYvdngtdGVzdCJ9

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/Users/prisc_000/code/CACDEV/vx-test/components/chart.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/prisc_000/code/CACDEV/vx-test/components/chart.js"); } } })();

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS41M2VkYmFmMDg2NmQ4MTM5ZDVhYS5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9jaGFydC5qcz9hMjY2MzY2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHdpdGhQYXJlbnRTaXplIH0gZnJvbSBcIkB2eC9yZXNwb25zaXZlXCI7XG5pbXBvcnQgeyBzY2FsZVRpbWUsIHNjYWxlTGluZWFyIH0gZnJvbSBcIkB2eC9zY2FsZVwiO1xuaW1wb3J0IHsgTGluZVBhdGgsIEFyZWFDbG9zZWQsIEJhciwgTGluZSB9IGZyb20gXCJAdngvc2hhcGVcIjtcbmltcG9ydCB7IExpbmVhckdyYWRpZW50IH0gZnJvbSBcIkB2eC9ncmFkaWVudFwiO1xuaW1wb3J0IHsgQXhpc0JvdHRvbSB9IGZyb20gXCJAdngvYXhpc1wiO1xuaW1wb3J0IHsgbG9jYWxQb2ludCB9IGZyb20gXCJAdngvZXZlbnRcIjtcbmltcG9ydCB7IHdpdGhUb29sdGlwLCB0b29sVGlwIH0gZnJvbSBcIkB2eC90b29sdGlwXCI7XG5pbXBvcnQgZm9ybWF0UHJpY2UgZnJvbSBcIi4uL3V0aWxzL2Zvcm1hdFByaWNlXCI7XG5cbmltcG9ydCBNYXhQcmljZSBmcm9tIFwiLi9tYXhwcmljZVwiO1xuaW1wb3J0IE1pblByaWNlIGZyb20gXCIuL21pbnByaWNlXCI7XG5pbXBvcnQgeyBiaXNlY3RvciB9IGZyb20gXCJkMy1hcnJheVwiO1xuXG5jbGFzcyBDaGFydCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICB9XG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7XG4gICAgICBkYXRhLFxuICAgICAgcGFyZW50V2lkdGgsXG4gICAgICBwYXJlbnRIZWlnaHQsXG4gICAgICB0b29sdGlwTGVmdCxcbiAgICAgIHRvb2x0aXBSaWdodCxcbiAgICAgIHRvb2x0aXBEYXRhLFxuICAgICAgc2hvd3Rvb2xUaXAsXG4gICAgICBoaWRlVG9vbHRpcFxuICAgIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgLyoqIERlZmluZSBtYXJnaW4gZm9yIHRoaXMgZGl2IHRvIHBhc3MgdG8gY2FsY3VsYXRpb24gZm9yIHN2ZyAqL1xuICAgIGNvbnN0IG1hcmdpbiA9IHtcbiAgICAgIHRvcDogMTUsXG4gICAgICBib3R0b206IDQwLFxuICAgICAgbGVmdDogMCxcbiAgICAgIHJpZ2h0OiAwXG4gICAgfTtcbiAgICBjb25zdCB3aWR0aCA9IHBhcmVudFdpZHRoIC0gbWFyZ2luLmxlZnQgLSBtYXJnaW4ucmlnaHQ7XG4gICAgY29uc3QgaGVpZ2h0ID0gcGFyZW50SGVpZ2h0IC0gbWFyZ2luLnRvcCAtIG1hcmdpbi5ib3R0b207XG5cbiAgICBjb25zdCBiaXNlY3REYXRlID0gYmlzZWN0b3IoZCA9PiB4KGQpKS5sZWZ0O1xuICAgIC8qKiBEZWZpbmUgYWNjZXNzb3JzIGFuZCB2YWx1ZXMgdG8gYmUgcGFzc2VkIHRvIG91ciBzaGFwZXNcbiAgICAgKi9cblxuICAgIGNvbnN0IHggPSBkID0+IG5ldyBEYXRlKGQudGltZSk7XG4gICAgY29uc3QgeSA9IGQgPT4gZC5wcmljZTtcblxuICAgIGNvbnN0IGZpcnN0UG9pbnQgPSBkYXRhWzBdO1xuICAgIGNvbnN0IGN1cnJlbnRQb2ludCA9IGRhdGFbZGF0YS5sZW5ndGggLSAxXTtcblxuICAgIGNvbnN0IG1pblByaWNlID0gTWF0aC5taW4oLi4uZGF0YS5tYXAoeSkpO1xuICAgIGNvbnN0IG1heFByaWNlID0gTWF0aC5tYXgoLi4uZGF0YS5tYXAoeSkpO1xuICAgIGNvbnN0IG1heFByaWNlRGF0YSA9IFtcbiAgICAgIHsgdGltZTogeChmaXJzdFBvaW50KSwgcHJpY2U6IG1heFByaWNlIH0sXG4gICAgICB7IHRpbWU6IHgoY3VycmVudFBvaW50KSwgcHJpY2U6IG1heFByaWNlIH1cbiAgICBdO1xuXG4gICAgY29uc3QgbWluUHJpY2VEYXRhID0gW1xuICAgICAgeyB0aW1lOiB4KGZpcnN0UG9pbnQpLCBwcmljZTogbWluUHJpY2UgfSxcbiAgICAgIHsgdGltZTogeChjdXJyZW50UG9pbnQpLCBwcmljZTogbWluUHJpY2UgfVxuICAgIF07XG5cbiAgICBjb25zdCB4U2NhbGUgPSBzY2FsZVRpbWUoe1xuICAgICAgcmFuZ2U6IFswLCB3aWR0aF0sXG4gICAgICBkb21haW46IFtNYXRoLm1pbiguLi5kYXRhLm1hcCh4KSksIE1hdGgubWF4KC4uLmRhdGEubWFwKHgpKV1cbiAgICB9KTtcbiAgICAvKiogRGVmaW5lcyB0aGUgc2NhbGUgb2YgYSB5IGF4aXMgbGluZSAqL1xuICAgIGNvbnN0IHlTY2FsZSA9IHNjYWxlTGluZWFyKHtcbiAgICAgIHJhbmdlOiBbaGVpZ2h0LCAwXSxcbiAgICAgIGRvbWFpbjogW21pblByaWNlLCBtYXhQcmljZV1cbiAgICB9KTtcblxuICAgIC8vIENvbnNvbGUubG9nKHhTY2FsZS5kb21haW4oKSk7XG4gICAgLy8gY29uc29sZS5sb2coeVNjYWxlLmRvbWFpbigpKTtcblxuICAgIC8qIGVuZCBhY2Nlc3NvciB2YWx1ZXMgKi9cbiAgICAvLyAgIGNhbGwgPExpbmVQYXRoLCBwYXNzIGluIHRoZSBkYXRhLCB4U2NhbGUsIHlTY2FsZSBkb21haW4gbWFwcGVycyxcbiAgICAvLyAgYW5kIHggYW5kIHkgYWNjZXNzb3JzXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxzdmcgcmVmPXtzID0+IHRoaXMuc3ZnIC0gc30gd2lkdGg9e3dpZHRofSBoZWlnaHQ9e3BhcmVudEhlaWdodH0+XG4gICAgICAgICAgey8qIHRvcDogc2hvcnRjdXQgZm9yIHRyYW5zbGF0ZSB5IHZhbHVlICovfVxuICAgICAgICAgIDxBeGlzQm90dG9tXG4gICAgICAgICAgICB0b3A9e3lTY2FsZShtaW5QcmljZSl9XG4gICAgICAgICAgICBkYXRhPXtkYXRhfVxuICAgICAgICAgICAgc2NhbGU9e3hTY2FsZX1cbiAgICAgICAgICAgIHg9e3h9XG4gICAgICAgICAgICBudW1UaWNrcz17NH1cbiAgICAgICAgICAgIGhpZGVBeGlzTGluZVxuICAgICAgICAgICAgaGlkZVRpY2tzXG4gICAgICAgICAgICB0aWNrTGFiZWxDb21wb25lbnQ9ezx0ZXh0IGZpbGw9XCIjZmZmZmZmXCIgZm9udFNpemU9ezExfSAvPn1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxMaW5lYXJHcmFkaWVudFxuICAgICAgICAgICAgaWQ9XCJhcmVhLWZpbGxcIlxuICAgICAgICAgICAgZnJvbT1cIiM0NmEyYjRcIlxuICAgICAgICAgICAgdG89XCIjNDZhMmI0XCJcbiAgICAgICAgICAgIGZyb21PcGFjaXR5PXswLjN9XG4gICAgICAgICAgICB0b09wYWNpdHk9ezB9XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8TWF4UHJpY2VcbiAgICAgICAgICAgIGRhdGE9e21heFByaWNlRGF0YX1cbiAgICAgICAgICAgIHlTY2FsZT17eVNjYWxlfVxuICAgICAgICAgICAgeFNjYWxlPXt4U2NhbGV9XG4gICAgICAgICAgICB4PXt4fVxuICAgICAgICAgICAgeT17eX1cbiAgICAgICAgICAgIGxhYmVsPXtmb3JtYXRQcmljZShtYXhQcmljZSl9XG4gICAgICAgICAgICB5VGV4dD17eVNjYWxlKG1heFByaWNlKX1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxNaW5QcmljZVxuICAgICAgICAgICAgZGF0YT17bWluUHJpY2VEYXRhfVxuICAgICAgICAgICAgeVNjYWxlPXt5U2NhbGV9XG4gICAgICAgICAgICB4U2NhbGU9e3hTY2FsZX1cbiAgICAgICAgICAgIHg9e3h9XG4gICAgICAgICAgICB5PXt5fVxuICAgICAgICAgICAgbGFiZWw9e2Zvcm1hdFByaWNlKG1pblByaWNlKX1cbiAgICAgICAgICAgIHlUZXh0PXt5U2NhbGUobWluUHJpY2UpfVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPEFyZWFDbG9zZWRcbiAgICAgICAgICAgIGRhdGE9e2RhdGF9XG4gICAgICAgICAgICB5U2NhbGU9e3lTY2FsZX1cbiAgICAgICAgICAgIHhTY2FsZT17eFNjYWxlfVxuICAgICAgICAgICAgeD17eH1cbiAgICAgICAgICAgIHk9e3l9XG4gICAgICAgICAgICBmaWxsPVwidXJsKCNhcmVhLWZpbGwpXCJcbiAgICAgICAgICAgIHN0cm9rZT1cInRyYW5zcGFyZW50XCJcbiAgICAgICAgICAvPlxuICAgICAgICAgIDxMaW5lUGF0aCBkYXRhPXtkYXRhfSB5U2NhbGU9e3lTY2FsZX0geFNjYWxlPXt4U2NhbGV9IHg9e3h9IHk9e3l9IC8+XG4gICAgICAgICAgPEJhclxuICAgICAgICAgICAgZGF0YT17ZGF0YX1cbiAgICAgICAgICAgIHdpZHRoPXt3aWR0aH1cbiAgICAgICAgICAgIGhlaWdodD17aGVpZ2h0fVxuICAgICAgICAgICAgZmlsbD1cInRyYW5zcGFyZW50XCJcbiAgICAgICAgICAgIG9uTW91c2VNb3ZlPXtkYXRhID0+IGV2ZW50ID0+IHtcbiAgICAgICAgICAgICAgY29uc3QgeyB4OiB4UG9pbnQgfSA9IGxvY2FsUG9pbnQodGhpcy5zdmcsIGV2ZW50KTtcbiAgICAgICAgICAgICAgY29uc3QgeDAgPSB4U2NhbGUuaW52ZXJ0KHhQb2ludCk7XG4gICAgICAgICAgICAgIGNvbnN0IGluZGV4ID0gYmlzZWN0RGF0ZShkYXRhLCB4MCwgMSk7XG4gICAgICAgICAgICAgIGNvbnN0IGQgPSB4MCAtIHhTY2FsZSh4KGQwKSkgPiB4U2NhbGUoeChkMSkpIC0geDAgPyBkMSA6IGQwO1xuICAgICAgICAgICAgICAvLyBDYWxsIHNob3d0b29sVGlwIGFuZCBkZWZpbmUgd2hhdCBzaG91bGQgc2hvcCB1cCBhdCBlYWNoIHBvc2l0aW9uXG4gICAgICAgICAgICAgIHNob3d0b29sVGlwKHtcbiAgICAgICAgICAgICAgICB0b29sdGlwTGVmdDogeFNjYWxlKHgoZCkpLFxuICAgICAgICAgICAgICAgIHRvb2x0aXBSaWdodDogeVNjYWxlKHkoZCkpLFxuICAgICAgICAgICAgICAgIHRvb2x0aXBEYXRhOiBkXG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIG9uTW91c2VMZWF2ZT17ZGF0YSA9PiBldmVudCA9PiBoaWRlVG9vbHRpcCgpfVxuICAgICAgICAgIC8+XG4gICAgICAgICAge3Rvb2x0aXBEYXRhICYmIChcbiAgICAgICAgICAgIDxnPlxuICAgICAgICAgICAgICA8TGluZVxuICAgICAgICAgICAgICAgIGZyb209e3sgeDogdG9vbHRpcExlZnQsIHk6IHlTY2FsZSh5KG1heFByaWNlRGF0YVswXSkpIH19XG4gICAgICAgICAgICAgICAgdG89e3sgeDogdG9vbHRpcExlZnQsIHk6IHlTY2FsZSh5KG1pblByaWNlRGF0YVswXSkpIH19XG4gICAgICAgICAgICAgICAgc3Ryb2tlPVwiI2ZmZmZmZlwiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2c+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9zdmc+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhQYXJlbnRTaXplKHdpdGhUb29sdGlwKENoYXJ0KSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL2NoYXJ0LmpzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7OztBQUNBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7Ozs7QUFFQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQ0E7Ozs7O0FBQ0E7QUFBQTtBQUNBO0FBU0E7QUFSQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBREE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUxBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBSUE7OztBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBREE7QUFJQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFJQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUVBO0FBRkE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFSQTtBQVVBO0FBVkE7QUFDQTtBQVdBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7O0FBTEE7QUFPQTtBQVBBO0FBQ0E7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTs7QUFQQTtBQVNBO0FBVEE7QUFDQTtBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBOztBQVBBO0FBU0E7QUFUQTtBQUNBO0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7O0FBUEE7QUFTQTtBQVRBO0FBQ0E7QUFRQTtBQUNBO0FBREE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUVBOztBQUNBO0FBQ0E7QUFHQTtBQUpBO0FBUEE7QUFZQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBakJBOztBQUFBO0FBbUJBO0FBbkJBO0FBQ0E7O0FBbUJBO0FBQ0E7QUFEQTtBQUFBO0FBRUE7QUFDQTtBQUNBOztBQUhBO0FBVUE7QUFWQTtBQUNBOzs7OztBQXZJQTtBQUNBO0FBa0pBOzs7Ozs7O0EiLCJzb3VyY2VSb290IjoiIn0=