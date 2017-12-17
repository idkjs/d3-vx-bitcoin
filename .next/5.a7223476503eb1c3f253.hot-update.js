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

var _tooltip = __webpack_require__(666);

var _formatPrice = __webpack_require__(493);

var _formatPrice2 = _interopRequireDefault(_formatPrice);

var _maxprice = __webpack_require__(671);

var _maxprice2 = _interopRequireDefault(_maxprice);

var _minprice = __webpack_require__(672);

var _minprice2 = _interopRequireDefault(_minprice);

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
          hidetoolTip = _props.hidetoolTip;

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
          lineNumber: 76
        }
      }, _react2.default.createElement("svg", { ref: function ref(s) {
          return _this2.svg - s;
        }, width: width, height: parentHeight, __source: {
          fileName: _jsxFileName,
          lineNumber: 77
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
            lineNumber: 87
          }
        }),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        }
      }), _react2.default.createElement(_gradient.LinearGradient, {
        id: "area-fill",
        from: "#46a2b4",
        to: "#46a2b4",
        fromOpacity: 0.3,
        toOpacity: 0,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
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
          lineNumber: 96
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
          lineNumber: 105
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
          lineNumber: 114
        }
      }), _react2.default.createElement(_shape.LinePath, { data: data, yScale: yScale, xScale: xScale, x: x, y: y, __source: {
          fileName: _jsxFileName,
          lineNumber: 123
        }
      }), _react2.default.createElement(_shape.Bar, {
        width: width,
        height: height,
        fill: "transparent",
        onMouseMove: function onMouseMove(data) {
          return function (event) {
            var _localPoint = localPoint(_this2.svg, event),
                xPoint = _localPoint.x;

            var x0 = xScale.invert(xPoint);
          };
        },
        onMouseLeave: function onMouseLeave(data) {
          return function (event) {
            return hidetoolTip();
          };
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 124
        }
      })));
    }
  }]);

  return Chart;
}(_react2.default.Component);

exports.default = (0, _responsive.withParentSize)((0, _tooltip.withTooltip)(Chart));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvY2hhcnQuanMiXSwibmFtZXMiOlsid2l0aFBhcmVudFNpemUiLCJzY2FsZVRpbWUiLCJzY2FsZUxpbmVhciIsIkxpbmVQYXRoIiwiQXJlYUNsb3NlZCIsIkJhciIsIkxpbmVhckdyYWRpZW50IiwiQXhpc0JvdHRvbSIsIndpdGhUb29sdGlwIiwidG9vbFRpcCIsImZvcm1hdFByaWNlIiwiTWF4UHJpY2UiLCJNaW5QcmljZSIsIkNoYXJ0IiwicHJvcHMiLCJkYXRhIiwicGFyZW50V2lkdGgiLCJwYXJlbnRIZWlnaHQiLCJ0b29sdGlwTGVmdCIsInRvb2x0aXBSaWdodCIsInRvb2x0aXBEYXRhIiwic2hvd3Rvb2xUaXAiLCJoaWRldG9vbFRpcCIsIm1hcmdpbiIsInRvcCIsImJvdHRvbSIsImxlZnQiLCJyaWdodCIsIndpZHRoIiwiaGVpZ2h0IiwieCIsIkRhdGUiLCJkIiwidGltZSIsInkiLCJwcmljZSIsImZpcnN0UG9pbnQiLCJjdXJyZW50UG9pbnQiLCJsZW5ndGgiLCJtaW5QcmljZSIsIk1hdGgiLCJtaW4iLCJtYXAiLCJtYXhQcmljZSIsIm1heCIsIm1heFByaWNlRGF0YSIsIm1pblByaWNlRGF0YSIsInhTY2FsZSIsInJhbmdlIiwiZG9tYWluIiwieVNjYWxlIiwic3ZnIiwicyIsImxvY2FsUG9pbnQiLCJldmVudCIsInhQb2ludCIsIngwIiwiaW52ZXJ0IiwiUmVhY3QiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFTOztBQUNULEFBQVMsQUFBVzs7QUFDcEIsQUFBUyxBQUFVLEFBQVk7O0FBQy9CLEFBQVM7O0FBQ1QsQUFBUzs7QUFDVCxBQUFTLEFBQWE7O0FBQ3RCLEFBQU8sQUFBaUI7Ozs7QUFFeEIsQUFBTyxBQUFjOzs7O0FBQ3JCLEFBQU8sQUFBYzs7Ozs7Ozs7O0ksQUFFZjtpQ0FDSjs7aUJBQUEsQUFBWSxPQUFPO3dDQUFBOzsrSEFBQSxBQUNY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QVpGLEFBWUUsQUFPQTtBQVBBO0FBQ0UsMEJBTUYsQUFBQztjQUFELEFBQ1EsQUFDTjtnQkFGRixBQUVVLEFBQ1I7Z0JBSEYsQUFHVSxBQUNSO1dBSkYsQUFJSyxBQUNIO1dBTEYsQUFLSyxBQUNIO2VBQU8sMkJBTlQsQUFNUyxBQUFZLEFBQ25CO2VBQU8sT0FQVCxBQU9TLEFBQU87O29CQVBoQjtzQkFuQkYsQUFtQkUsQUFTQTtBQVRBO0FBQ0UsMEJBUUYsQUFBQztjQUFELEFBQ1EsQUFDTjtnQkFGRixBQUVVLEFBQ1I7Z0JBSEYsQUFHVSxBQUNSO1dBSkYsQUFJSyxBQUNIO1dBTEYsQUFLSyxBQUNIO2VBQU8sMkJBTlQsQUFNUyxBQUFZLEFBQ25CO2VBQU8sT0FQVCxBQU9TLEFBQU87O29CQVBoQjtzQkE1QkYsQUE0QkUsQUFTQTtBQVRBO0FBQ0UsMEJBUUYsQUFBQztjQUFELEFBQ1EsQUFDTjtnQkFGRixBQUVVLEFBQ1I7Z0JBSEYsQUFHVSxBQUNSO1dBSkYsQUFJSyxBQUNIO1dBTEYsQUFLSyxBQUNIO2NBTkYsQUFNTyxBQUNMO2dCQVBGLEFBT1M7O29CQVBUO3NCQXJDRixBQXFDRSxBQVNBO0FBVEE7QUFDRSwwQkFRRixBQUFDLGlDQUFTLE1BQVYsQUFBZ0IsTUFBTSxRQUF0QixBQUE4QixRQUFRLFFBQXRDLEFBQThDLFFBQVEsR0FBdEQsQUFBeUQsR0FBRyxHQUE1RCxBQUErRDtvQkFBL0Q7c0JBOUNGLEFBOENFLEFBQ0E7QUFEQTswQkFDQSxBQUFDO2VBQUQsQUFDUyxBQUNQO2dCQUZGLEFBRVUsQUFDUjtjQUhGLEFBR08sQUFDTDtxQkFBYSwyQkFBQTtpQkFBUSxpQkFBUzs4QkFDTixXQUFXLE9BQVgsQUFBZ0IsS0FEVixBQUNOLEFBQXFCO2dCQURmLEFBQ2pCLHFCQURpQixBQUNwQixBQUNSOztnQkFBTSxLQUFLLE9BQUEsQUFBTyxPQUFsQixBQUFXLEFBQWMsQUFDMUI7QUFIWTtBQUpmLEFBUUU7c0JBQWMsNEJBQUE7aUJBQVEsaUJBQUE7bUJBQUEsQUFBUztBQUFqQjtBQVJoQjs7b0JBQUE7c0JBakROLEFBQ0UsQUFDRSxBQStDRSxBQWFQO0FBYk87QUFDRTs7Ozs7RUFqSFEsZ0JBQU0sQSxBQWdJMUI7O2tCQUFlLGdDQUFlLDBCQUE5QixBQUFlLEFBQWUsQUFBWSIsImZpbGUiOiJjaGFydC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvcHJpc2NfMDAwL2NvZGUvQ0FDREVWL3Z4LXRlc3QifQ==

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/Users/prisc_000/code/CACDEV/vx-test/components/chart.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/prisc_000/code/CACDEV/vx-test/components/chart.js"); } } })();

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS5hNzIyMzQ3NjUwM2ViMWMzZjI1My5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9jaGFydC5qcz9lNTFhOGIxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHdpdGhQYXJlbnRTaXplIH0gZnJvbSBcIkB2eC9yZXNwb25zaXZlXCI7XG5pbXBvcnQgeyBzY2FsZVRpbWUsIHNjYWxlTGluZWFyIH0gZnJvbSBcIkB2eC9zY2FsZVwiO1xuaW1wb3J0IHsgTGluZVBhdGgsIEFyZWFDbG9zZWQsIEJhciB9IGZyb20gXCJAdngvc2hhcGVcIjtcbmltcG9ydCB7IExpbmVhckdyYWRpZW50IH0gZnJvbSBcIkB2eC9ncmFkaWVudFwiO1xuaW1wb3J0IHsgQXhpc0JvdHRvbSB9IGZyb20gXCJAdngvYXhpc1wiO1xuaW1wb3J0IHsgd2l0aFRvb2x0aXAsIHRvb2xUaXAgfSBmcm9tIFwiQHZ4L3Rvb2x0aXBcIjtcbmltcG9ydCBmb3JtYXRQcmljZSBmcm9tIFwiLi4vdXRpbHMvZm9ybWF0UHJpY2VcIjtcblxuaW1wb3J0IE1heFByaWNlIGZyb20gXCIuL21heHByaWNlXCI7XG5pbXBvcnQgTWluUHJpY2UgZnJvbSBcIi4vbWlucHJpY2VcIjtcblxuY2xhc3MgQ2hhcnQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgfVxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgZGF0YSxcbiAgICAgIHBhcmVudFdpZHRoLFxuICAgICAgcGFyZW50SGVpZ2h0LFxuICAgICAgdG9vbHRpcExlZnQsXG4gICAgICB0b29sdGlwUmlnaHQsXG4gICAgICB0b29sdGlwRGF0YSxcbiAgICAgIHNob3d0b29sVGlwLFxuICAgICAgaGlkZXRvb2xUaXBcbiAgICB9ID0gdGhpcy5wcm9wcztcblxuICAgIC8qKiBEZWZpbmUgbWFyZ2luIGZvciB0aGlzIGRpdiB0byBwYXNzIHRvIGNhbGN1bGF0aW9uIGZvciBzdmcgKi9cbiAgICBjb25zdCBtYXJnaW4gPSB7XG4gICAgICB0b3A6IDE1LFxuICAgICAgYm90dG9tOiA0MCxcbiAgICAgIGxlZnQ6IDAsXG4gICAgICByaWdodDogMFxuICAgIH07XG4gICAgY29uc3Qgd2lkdGggPSBwYXJlbnRXaWR0aCAtIG1hcmdpbi5sZWZ0IC0gbWFyZ2luLnJpZ2h0O1xuICAgIGNvbnN0IGhlaWdodCA9IHBhcmVudEhlaWdodCAtIG1hcmdpbi50b3AgLSBtYXJnaW4uYm90dG9tO1xuXG4gICAgLyoqIERlZmluZSBhY2Nlc3NvcnMgYW5kIHZhbHVlcyB0byBiZSBwYXNzZWQgdG8gb3VyIHNoYXBlc1xuICAgICAqL1xuXG4gICAgY29uc3QgeCA9IGQgPT4gbmV3IERhdGUoZC50aW1lKTtcbiAgICBjb25zdCB5ID0gZCA9PiBkLnByaWNlO1xuXG4gICAgY29uc3QgZmlyc3RQb2ludCA9IGRhdGFbMF07XG4gICAgY29uc3QgY3VycmVudFBvaW50ID0gZGF0YVtkYXRhLmxlbmd0aCAtIDFdO1xuXG4gICAgY29uc3QgbWluUHJpY2UgPSBNYXRoLm1pbiguLi5kYXRhLm1hcCh5KSk7XG4gICAgY29uc3QgbWF4UHJpY2UgPSBNYXRoLm1heCguLi5kYXRhLm1hcCh5KSk7XG4gICAgY29uc3QgbWF4UHJpY2VEYXRhID0gW1xuICAgICAgeyB0aW1lOiB4KGZpcnN0UG9pbnQpLCBwcmljZTogbWF4UHJpY2UgfSxcbiAgICAgIHsgdGltZTogeChjdXJyZW50UG9pbnQpLCBwcmljZTogbWF4UHJpY2UgfVxuICAgIF07XG5cbiAgICBjb25zdCBtaW5QcmljZURhdGEgPSBbXG4gICAgICB7IHRpbWU6IHgoZmlyc3RQb2ludCksIHByaWNlOiBtaW5QcmljZSB9LFxuICAgICAgeyB0aW1lOiB4KGN1cnJlbnRQb2ludCksIHByaWNlOiBtaW5QcmljZSB9XG4gICAgXTtcblxuICAgIGNvbnN0IHhTY2FsZSA9IHNjYWxlVGltZSh7XG4gICAgICByYW5nZTogWzAsIHdpZHRoXSxcbiAgICAgIGRvbWFpbjogW01hdGgubWluKC4uLmRhdGEubWFwKHgpKSwgTWF0aC5tYXgoLi4uZGF0YS5tYXAoeCkpXVxuICAgIH0pO1xuICAgIC8qKiBEZWZpbmVzIHRoZSBzY2FsZSBvZiBhIHkgYXhpcyBsaW5lICovXG4gICAgY29uc3QgeVNjYWxlID0gc2NhbGVMaW5lYXIoe1xuICAgICAgcmFuZ2U6IFtoZWlnaHQsIDBdLFxuICAgICAgZG9tYWluOiBbbWluUHJpY2UsIG1heFByaWNlXVxuICAgIH0pO1xuXG4gICAgLy8gQ29uc29sZS5sb2coeFNjYWxlLmRvbWFpbigpKTtcbiAgICAvLyBjb25zb2xlLmxvZyh5U2NhbGUuZG9tYWluKCkpO1xuXG4gICAgLyogZW5kIGFjY2Vzc29yIHZhbHVlcyAqL1xuICAgIC8vICAgY2FsbCA8TGluZVBhdGgsIHBhc3MgaW4gdGhlIGRhdGEsIHhTY2FsZSwgeVNjYWxlIGRvbWFpbiBtYXBwZXJzLFxuICAgIC8vICBhbmQgeCBhbmQgeSBhY2Nlc3NvcnNcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPHN2ZyByZWY9e3MgPT4gdGhpcy5zdmcgLSBzfSB3aWR0aD17d2lkdGh9IGhlaWdodD17cGFyZW50SGVpZ2h0fT5cbiAgICAgICAgICB7LyogdG9wOiBzaG9ydGN1dCBmb3IgdHJhbnNsYXRlIHkgdmFsdWUgKi99XG4gICAgICAgICAgPEF4aXNCb3R0b21cbiAgICAgICAgICAgIHRvcD17eVNjYWxlKG1pblByaWNlKX1cbiAgICAgICAgICAgIGRhdGE9e2RhdGF9XG4gICAgICAgICAgICBzY2FsZT17eFNjYWxlfVxuICAgICAgICAgICAgeD17eH1cbiAgICAgICAgICAgIG51bVRpY2tzPXs0fVxuICAgICAgICAgICAgaGlkZUF4aXNMaW5lXG4gICAgICAgICAgICBoaWRlVGlja3NcbiAgICAgICAgICAgIHRpY2tMYWJlbENvbXBvbmVudD17PHRleHQgZmlsbD1cIiNmZmZmZmZcIiBmb250U2l6ZT17MTF9IC8+fVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPExpbmVhckdyYWRpZW50XG4gICAgICAgICAgICBpZD1cImFyZWEtZmlsbFwiXG4gICAgICAgICAgICBmcm9tPVwiIzQ2YTJiNFwiXG4gICAgICAgICAgICB0bz1cIiM0NmEyYjRcIlxuICAgICAgICAgICAgZnJvbU9wYWNpdHk9ezAuM31cbiAgICAgICAgICAgIHRvT3BhY2l0eT17MH1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxNYXhQcmljZVxuICAgICAgICAgICAgZGF0YT17bWF4UHJpY2VEYXRhfVxuICAgICAgICAgICAgeVNjYWxlPXt5U2NhbGV9XG4gICAgICAgICAgICB4U2NhbGU9e3hTY2FsZX1cbiAgICAgICAgICAgIHg9e3h9XG4gICAgICAgICAgICB5PXt5fVxuICAgICAgICAgICAgbGFiZWw9e2Zvcm1hdFByaWNlKG1heFByaWNlKX1cbiAgICAgICAgICAgIHlUZXh0PXt5U2NhbGUobWF4UHJpY2UpfVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPE1pblByaWNlXG4gICAgICAgICAgICBkYXRhPXttaW5QcmljZURhdGF9XG4gICAgICAgICAgICB5U2NhbGU9e3lTY2FsZX1cbiAgICAgICAgICAgIHhTY2FsZT17eFNjYWxlfVxuICAgICAgICAgICAgeD17eH1cbiAgICAgICAgICAgIHk9e3l9XG4gICAgICAgICAgICBsYWJlbD17Zm9ybWF0UHJpY2UobWluUHJpY2UpfVxuICAgICAgICAgICAgeVRleHQ9e3lTY2FsZShtaW5QcmljZSl9XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8QXJlYUNsb3NlZFxuICAgICAgICAgICAgZGF0YT17ZGF0YX1cbiAgICAgICAgICAgIHlTY2FsZT17eVNjYWxlfVxuICAgICAgICAgICAgeFNjYWxlPXt4U2NhbGV9XG4gICAgICAgICAgICB4PXt4fVxuICAgICAgICAgICAgeT17eX1cbiAgICAgICAgICAgIGZpbGw9XCJ1cmwoI2FyZWEtZmlsbClcIlxuICAgICAgICAgICAgc3Ryb2tlPVwidHJhbnNwYXJlbnRcIlxuICAgICAgICAgIC8+XG4gICAgICAgICAgPExpbmVQYXRoIGRhdGE9e2RhdGF9IHlTY2FsZT17eVNjYWxlfSB4U2NhbGU9e3hTY2FsZX0geD17eH0geT17eX0gLz5cbiAgICAgICAgICA8QmFyXG4gICAgICAgICAgICB3aWR0aD17d2lkdGh9XG4gICAgICAgICAgICBoZWlnaHQ9e2hlaWdodH1cbiAgICAgICAgICAgIGZpbGw9XCJ0cmFuc3BhcmVudFwiXG4gICAgICAgICAgICBvbk1vdXNlTW92ZT17ZGF0YSA9PiBldmVudCA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IHsgeDogeFBvaW50IH0gPSBsb2NhbFBvaW50KHRoaXMuc3ZnLCBldmVudCk7XG4gICAgICAgICAgICAgIGNvbnN0IHgwID0geFNjYWxlLmludmVydCh4UG9pbnQpO1xuICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIG9uTW91c2VMZWF2ZT17ZGF0YSA9PiBldmVudCA9PiBoaWRldG9vbFRpcCgpfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvc3ZnPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoUGFyZW50U2l6ZSh3aXRoVG9vbHRpcChDaGFydCkpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9jaGFydC5qcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7OztBQUNBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7Ozs7OztBQUVBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFDQTs7Ozs7QUFDQTtBQUFBO0FBQ0E7QUFTQTtBQVJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFEQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBTEE7QUFLQTtBQUNBO0FBQ0E7QUFJQTs7O0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFEQTtBQUlBO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUlBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBRUE7QUFGQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQVJBO0FBVUE7QUFWQTtBQUNBO0FBV0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTs7QUFMQTtBQU9BO0FBUEE7QUFDQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBOztBQVBBO0FBU0E7QUFUQTtBQUNBO0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7O0FBUEE7QUFTQTtBQVRBO0FBQ0E7QUFVQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTs7QUFQQTtBQVNBO0FBVEE7QUFDQTtBQVFBO0FBQ0E7QUFEQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBRkE7QUFJQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBUkE7O0FBQUE7QUFhQTtBQWJBO0FBQ0E7Ozs7O0FBakhBO0FBQ0E7QUErSEE7Ozs7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==