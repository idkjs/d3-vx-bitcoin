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
          lineNumber: 78
        }
      }, _react2.default.createElement("svg", { ref: function ref(s) {
          return _this2.svg - s;
        }, width: width, height: parentHeight, __source: {
          fileName: _jsxFileName,
          lineNumber: 79
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
            lineNumber: 89
          }
        }),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        }
      }), _react2.default.createElement(_gradient.LinearGradient, {
        id: "area-fill",
        from: "#46a2b4",
        to: "#46a2b4",
        fromOpacity: 0.3,
        toOpacity: 0,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
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
          lineNumber: 98
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
          lineNumber: 107
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
          lineNumber: 116
        }
      }), _react2.default.createElement(_shape.LinePath, { data: data, yScale: yScale, xScale: xScale, x: x, y: y, __source: {
          fileName: _jsxFileName,
          lineNumber: 125
        }
      }), _react2.default.createElement(_shape.Bar, {
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
            // call showtoolTip and define what should shop up at each position
            showtoolTip({
              tooltipLeft: xScale(x(d)),
              tooltipRight: yScale(y(d)),
              tooltipData: d
            });
          };
        },
        onMouseLeave: function onMouseLeave(data) {
          return function (event) {
            return hidetoolTip();
          };
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 126
        }
      }), tooltipData && _react2.default.createElement("g", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 144
        }
      })));
    }
  }]);

  return Chart;
}(_react2.default.Component);

exports.default = (0, _responsive.withParentSize)((0, _tooltip.withTooltip)(Chart));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvY2hhcnQuanMiXSwibmFtZXMiOlsid2l0aFBhcmVudFNpemUiLCJzY2FsZVRpbWUiLCJzY2FsZUxpbmVhciIsIkxpbmVQYXRoIiwiQXJlYUNsb3NlZCIsIkJhciIsIkxpbmVhckdyYWRpZW50IiwiQXhpc0JvdHRvbSIsImxvY2FsUG9pbnQiLCJ3aXRoVG9vbHRpcCIsInRvb2xUaXAiLCJmb3JtYXRQcmljZSIsIk1heFByaWNlIiwiTWluUHJpY2UiLCJiaXNlY3RvciIsIkNoYXJ0IiwicHJvcHMiLCJkYXRhIiwicGFyZW50V2lkdGgiLCJwYXJlbnRIZWlnaHQiLCJ0b29sdGlwTGVmdCIsInRvb2x0aXBSaWdodCIsInRvb2x0aXBEYXRhIiwic2hvd3Rvb2xUaXAiLCJoaWRldG9vbFRpcCIsIm1hcmdpbiIsInRvcCIsImJvdHRvbSIsImxlZnQiLCJyaWdodCIsIndpZHRoIiwiaGVpZ2h0IiwiYmlzZWN0RGF0ZSIsIngiLCJkIiwiRGF0ZSIsInRpbWUiLCJ5IiwicHJpY2UiLCJmaXJzdFBvaW50IiwiY3VycmVudFBvaW50IiwibGVuZ3RoIiwibWluUHJpY2UiLCJNYXRoIiwibWluIiwibWFwIiwibWF4UHJpY2UiLCJtYXgiLCJtYXhQcmljZURhdGEiLCJtaW5QcmljZURhdGEiLCJ4U2NhbGUiLCJyYW5nZSIsImRvbWFpbiIsInlTY2FsZSIsInN2ZyIsInMiLCJldmVudCIsInhQb2ludCIsIngwIiwiaW52ZXJ0IiwiaW5kZXgiLCJkMCIsImQxIiwiUmVhY3QiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFTOztBQUNULEFBQVMsQUFBVzs7QUFDcEIsQUFBUyxBQUFVLEFBQVk7O0FBQy9CLEFBQVM7O0FBQ1QsQUFBUzs7QUFDVCxBQUFTOztBQUNULEFBQVMsQUFBYTs7QUFDdEIsQUFBTyxBQUFpQjs7OztBQUV4QixBQUFPLEFBQWM7Ozs7QUFDckIsQUFBTyxBQUFjOzs7O0FBQ3JCLEFBQVM7Ozs7Ozs7SSxBQUNIO2lDQUNKOztpQkFBQSxBQUFZLE9BQU87d0NBQUE7OytIQUFBLEFBQ1gsQUFDUDs7Ozs7NkJBQ1E7bUJBQUE7O21CQVVILEtBVkcsQUFVRTtVQVZGLEFBRUwsY0FGSyxBQUVMO1VBRkssQUFHTCxxQkFISyxBQUdMO1VBSEssQUFJTCxzQkFKSyxBQUlMO1VBSkssQUFLTCxxQkFMSyxBQUtMO1VBTEssQUFNTCxzQkFOSyxBQU1MO1VBTkssQUFPTCxxQkFQSyxBQU9MO1VBUEssQUFRTCxxQkFSSyxBQVFMO1VBUkssQUFTTCxxQkFUSyxBQVNMLEFBR0Y7O0FBQ0E7O1VBQU07YUFBUyxBQUNSLEFBQ0w7Z0JBRmEsQUFFTCxBQUNSO2NBSGEsQUFHUCxBQUNOO2VBSkYsQUFBZSxBQUlOLEFBRVQ7QUFOZSxBQUNiO1VBS0ksUUFBUSxjQUFjLE9BQWQsQUFBcUIsT0FBTyxPQUExQyxBQUFpRCxBQUNqRDtVQUFNLFNBQVMsZUFBZSxPQUFmLEFBQXNCLE1BQU0sT0FBM0MsQUFBa0QsQUFFbEQ7O1VBQU0sb0NBQXNCLGFBQUE7ZUFBSyxFQUFMLEFBQUssQUFBRTtBQUFoQixPQUFBLEVBQW5CLEFBQXVDLEFBQ3ZDO0FBR0E7OztVQUFNLElBQUksU0FBSixBQUFJLEtBQUE7ZUFBSyxJQUFBLEFBQUksS0FBSyxFQUFkLEFBQUssQUFBVztBQUExQixBQUNBO1VBQU0sSUFBSSxTQUFKLEFBQUksS0FBQTtlQUFLLEVBQUwsQUFBTztBQUFqQixBQUVBOztVQUFNLGFBQWEsS0FBbkIsQUFBbUIsQUFBSyxBQUN4QjtVQUFNLGVBQWUsS0FBSyxLQUFBLEFBQUssU0FBL0IsQUFBcUIsQUFBbUIsQUFFeEM7O1VBQU0sV0FBVyxLQUFBLEFBQUssaURBQU8sS0FBQSxBQUFLLElBQWxDLEFBQWlCLEFBQVksQUFBUyxBQUN0QztVQUFNLFdBQVcsS0FBQSxBQUFLLGlEQUFPLEtBQUEsQUFBSyxJQUFsQyxBQUFpQixBQUFZLEFBQVMsQUFDdEM7VUFBTSxlQUFlLENBQ25CLEVBQUUsTUFBTSxFQUFSLEFBQVEsQUFBRSxhQUFhLE9BREosQUFDbkIsQUFBOEIsWUFDOUIsRUFBRSxNQUFNLEVBQVIsQUFBUSxBQUFFLGVBQWUsT0FGM0IsQUFBcUIsQUFFbkIsQUFBZ0MsQUFHbEM7O1VBQU0sZUFBZSxDQUNuQixFQUFFLE1BQU0sRUFBUixBQUFRLEFBQUUsYUFBYSxPQURKLEFBQ25CLEFBQThCLFlBQzlCLEVBQUUsTUFBTSxFQUFSLEFBQVEsQUFBRSxlQUFlLE9BRjNCLEFBQXFCLEFBRW5CLEFBQWdDLEFBR2xDOztVQUFNO2VBQ0csQ0FBQSxBQUFDLEdBRGUsQUFDaEIsQUFBSSxBQUNYO2dCQUFRLENBQUMsS0FBQSxBQUFLLGlEQUFPLEtBQUEsQUFBSyxJQUFsQixBQUFDLEFBQVksQUFBUyxNQUFLLEtBQUEsQUFBSyxpREFBTyxLQUFBLEFBQUssSUFGdEQsQUFBZSxBQUFVLEFBRWYsQUFBMkIsQUFBWSxBQUFTLEFBRTFEO0FBSnlCLEFBQ3ZCLE9BRGE7QUFLZjtVQUFNO2VBQ0csQ0FBQSxBQUFDLFFBRGlCLEFBQ2xCLEFBQVMsQUFDaEI7Z0JBQVEsQ0FBQSxBQUFDLFVBRlgsQUFBZSxBQUFZLEFBRWpCLEFBQVcsQUFHckI7QUFMMkIsQUFDekIsT0FEYTs7QUFNZjtBQUVBOztBQUNBO0FBQ0E7QUFDQTs2QkFDRSxjQUFBOztvQkFBQTtzQkFBQSxBQUNFO0FBREY7QUFBQSxPQUFBLGtCQUNFLGNBQUEsU0FBSyxLQUFLLGdCQUFBO2lCQUFLLE9BQUEsQUFBSyxNQUFWLEFBQWdCO0FBQTFCLFdBQTZCLE9BQTdCLEFBQW9DLE9BQU8sUUFBM0MsQUFBbUQ7b0JBQW5EO3NCQUFBLEFBRUU7QUFGRjt5QkFFRSxBQUFDO2FBQ00sT0FEUCxBQUNPLEFBQU8sQUFDWjtjQUZGLEFBRVEsQUFDTjtlQUhGLEFBR1MsQUFDUDtXQUpGLEFBSUssQUFDSDtrQkFMRixBQUtZLEFBQ1Y7c0JBTkYsQUFPRTttQkFQRixBQVFFO29FQUEwQixNQUFOLEFBQVcsV0FBVSxVQUFyQixBQUErQjtzQkFBL0I7d0JBUnRCLEFBUXNCO0FBQUE7U0FBQTs7b0JBUnRCO3NCQUZGLEFBRUUsQUFVQTtBQVZBO0FBQ0UsMEJBU0YsQUFBQztZQUFELEFBQ0ssQUFDSDtjQUZGLEFBRU8sQUFDTDtZQUhGLEFBR0ssQUFDSDtxQkFKRixBQUllLEFBQ2I7bUJBTEYsQUFLYTs7b0JBTGI7c0JBWkYsQUFZRSxBQU9BO0FBUEE7QUFDRSwwQkFNRixBQUFDO2NBQUQsQUFDUSxBQUNOO2dCQUZGLEFBRVUsQUFDUjtnQkFIRixBQUdVLEFBQ1I7V0FKRixBQUlLLEFBQ0g7V0FMRixBQUtLLEFBQ0g7ZUFBTywyQkFOVCxBQU1TLEFBQVksQUFDbkI7ZUFBTyxPQVBULEFBT1MsQUFBTzs7b0JBUGhCO3NCQW5CRixBQW1CRSxBQVNBO0FBVEE7QUFDRSwwQkFRRixBQUFDO2NBQUQsQUFDUSxBQUNOO2dCQUZGLEFBRVUsQUFDUjtnQkFIRixBQUdVLEFBQ1I7V0FKRixBQUlLLEFBQ0g7V0FMRixBQUtLLEFBQ0g7ZUFBTywyQkFOVCxBQU1TLEFBQVksQUFDbkI7ZUFBTyxPQVBULEFBT1MsQUFBTzs7b0JBUGhCO3NCQTVCRixBQTRCRSxBQVNBO0FBVEE7QUFDRSwwQkFRRixBQUFDO2NBQUQsQUFDUSxBQUNOO2dCQUZGLEFBRVUsQUFDUjtnQkFIRixBQUdVLEFBQ1I7V0FKRixBQUlLLEFBQ0g7V0FMRixBQUtLLEFBQ0g7Y0FORixBQU1PLEFBQ0w7Z0JBUEYsQUFPUzs7b0JBUFQ7c0JBckNGLEFBcUNFLEFBU0E7QUFUQTtBQUNFLDBCQVFGLEFBQUMsaUNBQVMsTUFBVixBQUFnQixNQUFNLFFBQXRCLEFBQThCLFFBQVEsUUFBdEMsQUFBOEMsUUFBUSxHQUF0RCxBQUF5RCxHQUFHLEdBQTVELEFBQStEO29CQUEvRDtzQkE5Q0YsQUE4Q0UsQUFDQTtBQURBOzBCQUNBLEFBQUM7ZUFBRCxBQUNTLEFBQ1A7Z0JBRkYsQUFFVSxBQUNSO2NBSEYsQUFHTyxBQUNMO3FCQUFhLDJCQUFBO2lCQUFRLGlCQUFTOzhCQUNOLHVCQUFXLE9BQVgsQUFBZ0IsS0FEVixBQUNOLEFBQXFCO2dCQURmLEFBQ2pCLHFCQURpQixBQUNwQixBQUNSOztnQkFBTSxLQUFLLE9BQUEsQUFBTyxPQUFsQixBQUFXLEFBQWMsQUFDekI7Z0JBQU0sUUFBUSxXQUFBLEFBQVcsTUFBWCxBQUFpQixJQUEvQixBQUFjLEFBQXFCLEFBQ25DO2dCQUFNLElBQUksS0FBSyxPQUFPLEVBQVosQUFBSyxBQUFPLEFBQUUsT0FBTyxPQUFPLEVBQVAsQUFBTyxBQUFFLE9BQTlCLEFBQXFDLEtBQXJDLEFBQTBDLEtBQXBELEFBQXlELEFBQ3pEO0FBQ0E7OzJCQUNlLE9BQU8sRUFEVixBQUNHLEFBQU8sQUFBRSxBQUN0Qjs0QkFBYyxPQUFPLEVBRlgsQUFFSSxBQUFPLEFBQUUsQUFDdkI7MkJBSEYsQUFBWSxBQUdHLEFBRWhCO0FBTGEsQUFDVjtBQVBTO0FBSmYsQUFnQkU7c0JBQWMsNEJBQUE7aUJBQVEsaUJBQUE7bUJBQUEsQUFBUztBQUFqQjtBQWhCaEI7O29CQUFBO3NCQS9DRixBQStDRSxBQWtCQztBQWxCRDtBQUNFOztvQkFpQmM7c0JBbkV0QixBQUNFLEFBQ0UsQUFpRWtCLEFBSXZCO0FBSnVCO0FBQUEsT0FBQTs7Ozs7RUFuSU4sZ0JBQU0sQSxBQTBJMUI7O2tCQUFlLGdDQUFlLDBCQUE5QixBQUFlLEFBQWUsQUFBWSIsImZpbGUiOiJjaGFydC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvcHJpc2NfMDAwL2NvZGUvQ0FDREVWL3Z4LXRlc3QifQ==

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/Users/prisc_000/code/CACDEV/vx-test/components/chart.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/prisc_000/code/CACDEV/vx-test/components/chart.js"); } } })();

/***/ }),

/***/ 673:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _localPoint = __webpack_require__(674);

Object.defineProperty(exports, 'localPoint', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_localPoint).default;
  }
});

var _touchPoint = __webpack_require__(675);

Object.defineProperty(exports, 'touchPoint', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_touchPoint).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ 674:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = localPoint;

var _point = __webpack_require__(489);

function localPoint(node, event) {
  // called with no args
  if (!node) return;

  // called with localPoint(event)
  if (node.target) {
    event = node;

    // set node to targets owner svg
    node = event.target.ownerSVGElement;

    // find the outermost svg
    while (node.ownerSVGElement) {
      node = node.ownerSVGElement;
    }
  }

  // default to mouse event
  var _event = event,
      clientX = _event.clientX,
      clientY = _event.clientY;

  // support touch event

  if (event.changedTouches) {
    clientX = event.changedTouches[0].clientX;
    clientY = event.changedTouches[0].clientY;
  }

  // calculate coordinates from svg
  if (node.createSVGPoint) {
    var point = node.createSVGPoint();
    point.x = clientX;
    point.y = clientY;
    point = point.matrixTransform(node.getScreenCTM().inverse());
    return new _point.Point({
      x: point.x,
      y: point.y
    });
  }

  // fallback to calculating position from non-svg dom node
  var rect = node.getBoundingClientRect();
  return new _point.Point({
    x: clientX - rect.left - node.clientLeft,
    y: clientY - rect.top - node.clientTop
  });
}

/***/ }),

/***/ 675:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = touchPoint;

var _point = __webpack_require__(489);

function touchPoint(node, event) {
  if (!node) return;
  var svg = node.ownerSVGElement || node;
  if (svg.createSVGPoint) {
    var point = svg.createSVGPoint();
    point.x = event.changedTouches[0].clientX;
    point.y = event.changedTouches[0].clientY;
    point = point.matrixTransform(node.getScreenCTM().inverse());
    return new _point.Point({
      x: point.x,
      y: point.y
    });
  }
  var rect = node.getBoundingClientRect();
  return new _point.Point({
    x: event.changedTouches[0].clientX - rect.left - node.clientLeft,
    y: event.changedTouches[0].clientY - rect.top - node.clientTop
  });
}

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS40YzY1ZDVlMWQ3NDlmNjRjZDFkNi5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9jaGFydC5qcz85MjAzYzY0Iiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AdngvZXZlbnQvYnVpbGQvaW5kZXguanM/ODJkMGE2NiIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHZ4L2V2ZW50L2J1aWxkL2xvY2FsUG9pbnQuanM/ODJkMGE2NiIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHZ4L2V2ZW50L2J1aWxkL3RvdWNoUG9pbnQuanM/ODJkMGE2NiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB3aXRoUGFyZW50U2l6ZSB9IGZyb20gXCJAdngvcmVzcG9uc2l2ZVwiO1xuaW1wb3J0IHsgc2NhbGVUaW1lLCBzY2FsZUxpbmVhciB9IGZyb20gXCJAdngvc2NhbGVcIjtcbmltcG9ydCB7IExpbmVQYXRoLCBBcmVhQ2xvc2VkLCBCYXIgfSBmcm9tIFwiQHZ4L3NoYXBlXCI7XG5pbXBvcnQgeyBMaW5lYXJHcmFkaWVudCB9IGZyb20gXCJAdngvZ3JhZGllbnRcIjtcbmltcG9ydCB7IEF4aXNCb3R0b20gfSBmcm9tIFwiQHZ4L2F4aXNcIjtcbmltcG9ydCB7IGxvY2FsUG9pbnQgfSBmcm9tIFwiQHZ4L2V2ZW50XCI7XG5pbXBvcnQgeyB3aXRoVG9vbHRpcCwgdG9vbFRpcCB9IGZyb20gXCJAdngvdG9vbHRpcFwiO1xuaW1wb3J0IGZvcm1hdFByaWNlIGZyb20gXCIuLi91dGlscy9mb3JtYXRQcmljZVwiO1xuXG5pbXBvcnQgTWF4UHJpY2UgZnJvbSBcIi4vbWF4cHJpY2VcIjtcbmltcG9ydCBNaW5QcmljZSBmcm9tIFwiLi9taW5wcmljZVwiO1xuaW1wb3J0IHsgYmlzZWN0b3IgfSBmcm9tIFwiZDMtYXJyYXlcIjtcbmNsYXNzIENoYXJ0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIGRhdGEsXG4gICAgICBwYXJlbnRXaWR0aCxcbiAgICAgIHBhcmVudEhlaWdodCxcbiAgICAgIHRvb2x0aXBMZWZ0LFxuICAgICAgdG9vbHRpcFJpZ2h0LFxuICAgICAgdG9vbHRpcERhdGEsXG4gICAgICBzaG93dG9vbFRpcCxcbiAgICAgIGhpZGV0b29sVGlwXG4gICAgfSA9IHRoaXMucHJvcHM7XG5cbiAgICAvKiogRGVmaW5lIG1hcmdpbiBmb3IgdGhpcyBkaXYgdG8gcGFzcyB0byBjYWxjdWxhdGlvbiBmb3Igc3ZnICovXG4gICAgY29uc3QgbWFyZ2luID0ge1xuICAgICAgdG9wOiAxNSxcbiAgICAgIGJvdHRvbTogNDAsXG4gICAgICBsZWZ0OiAwLFxuICAgICAgcmlnaHQ6IDBcbiAgICB9O1xuICAgIGNvbnN0IHdpZHRoID0gcGFyZW50V2lkdGggLSBtYXJnaW4ubGVmdCAtIG1hcmdpbi5yaWdodDtcbiAgICBjb25zdCBoZWlnaHQgPSBwYXJlbnRIZWlnaHQgLSBtYXJnaW4udG9wIC0gbWFyZ2luLmJvdHRvbTtcblxuICAgIGNvbnN0IGJpc2VjdERhdGUgPSBiaXNlY3RvcihkID0+IHgoZCkpLmxlZnQ7XG4gICAgLyoqIERlZmluZSBhY2Nlc3NvcnMgYW5kIHZhbHVlcyB0byBiZSBwYXNzZWQgdG8gb3VyIHNoYXBlc1xuICAgICAqL1xuXG4gICAgY29uc3QgeCA9IGQgPT4gbmV3IERhdGUoZC50aW1lKTtcbiAgICBjb25zdCB5ID0gZCA9PiBkLnByaWNlO1xuXG4gICAgY29uc3QgZmlyc3RQb2ludCA9IGRhdGFbMF07XG4gICAgY29uc3QgY3VycmVudFBvaW50ID0gZGF0YVtkYXRhLmxlbmd0aCAtIDFdO1xuXG4gICAgY29uc3QgbWluUHJpY2UgPSBNYXRoLm1pbiguLi5kYXRhLm1hcCh5KSk7XG4gICAgY29uc3QgbWF4UHJpY2UgPSBNYXRoLm1heCguLi5kYXRhLm1hcCh5KSk7XG4gICAgY29uc3QgbWF4UHJpY2VEYXRhID0gW1xuICAgICAgeyB0aW1lOiB4KGZpcnN0UG9pbnQpLCBwcmljZTogbWF4UHJpY2UgfSxcbiAgICAgIHsgdGltZTogeChjdXJyZW50UG9pbnQpLCBwcmljZTogbWF4UHJpY2UgfVxuICAgIF07XG5cbiAgICBjb25zdCBtaW5QcmljZURhdGEgPSBbXG4gICAgICB7IHRpbWU6IHgoZmlyc3RQb2ludCksIHByaWNlOiBtaW5QcmljZSB9LFxuICAgICAgeyB0aW1lOiB4KGN1cnJlbnRQb2ludCksIHByaWNlOiBtaW5QcmljZSB9XG4gICAgXTtcblxuICAgIGNvbnN0IHhTY2FsZSA9IHNjYWxlVGltZSh7XG4gICAgICByYW5nZTogWzAsIHdpZHRoXSxcbiAgICAgIGRvbWFpbjogW01hdGgubWluKC4uLmRhdGEubWFwKHgpKSwgTWF0aC5tYXgoLi4uZGF0YS5tYXAoeCkpXVxuICAgIH0pO1xuICAgIC8qKiBEZWZpbmVzIHRoZSBzY2FsZSBvZiBhIHkgYXhpcyBsaW5lICovXG4gICAgY29uc3QgeVNjYWxlID0gc2NhbGVMaW5lYXIoe1xuICAgICAgcmFuZ2U6IFtoZWlnaHQsIDBdLFxuICAgICAgZG9tYWluOiBbbWluUHJpY2UsIG1heFByaWNlXVxuICAgIH0pO1xuXG4gICAgLy8gQ29uc29sZS5sb2coeFNjYWxlLmRvbWFpbigpKTtcbiAgICAvLyBjb25zb2xlLmxvZyh5U2NhbGUuZG9tYWluKCkpO1xuXG4gICAgLyogZW5kIGFjY2Vzc29yIHZhbHVlcyAqL1xuICAgIC8vICAgY2FsbCA8TGluZVBhdGgsIHBhc3MgaW4gdGhlIGRhdGEsIHhTY2FsZSwgeVNjYWxlIGRvbWFpbiBtYXBwZXJzLFxuICAgIC8vICBhbmQgeCBhbmQgeSBhY2Nlc3NvcnNcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPHN2ZyByZWY9e3MgPT4gdGhpcy5zdmcgLSBzfSB3aWR0aD17d2lkdGh9IGhlaWdodD17cGFyZW50SGVpZ2h0fT5cbiAgICAgICAgICB7LyogdG9wOiBzaG9ydGN1dCBmb3IgdHJhbnNsYXRlIHkgdmFsdWUgKi99XG4gICAgICAgICAgPEF4aXNCb3R0b21cbiAgICAgICAgICAgIHRvcD17eVNjYWxlKG1pblByaWNlKX1cbiAgICAgICAgICAgIGRhdGE9e2RhdGF9XG4gICAgICAgICAgICBzY2FsZT17eFNjYWxlfVxuICAgICAgICAgICAgeD17eH1cbiAgICAgICAgICAgIG51bVRpY2tzPXs0fVxuICAgICAgICAgICAgaGlkZUF4aXNMaW5lXG4gICAgICAgICAgICBoaWRlVGlja3NcbiAgICAgICAgICAgIHRpY2tMYWJlbENvbXBvbmVudD17PHRleHQgZmlsbD1cIiNmZmZmZmZcIiBmb250U2l6ZT17MTF9IC8+fVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPExpbmVhckdyYWRpZW50XG4gICAgICAgICAgICBpZD1cImFyZWEtZmlsbFwiXG4gICAgICAgICAgICBmcm9tPVwiIzQ2YTJiNFwiXG4gICAgICAgICAgICB0bz1cIiM0NmEyYjRcIlxuICAgICAgICAgICAgZnJvbU9wYWNpdHk9ezAuM31cbiAgICAgICAgICAgIHRvT3BhY2l0eT17MH1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxNYXhQcmljZVxuICAgICAgICAgICAgZGF0YT17bWF4UHJpY2VEYXRhfVxuICAgICAgICAgICAgeVNjYWxlPXt5U2NhbGV9XG4gICAgICAgICAgICB4U2NhbGU9e3hTY2FsZX1cbiAgICAgICAgICAgIHg9e3h9XG4gICAgICAgICAgICB5PXt5fVxuICAgICAgICAgICAgbGFiZWw9e2Zvcm1hdFByaWNlKG1heFByaWNlKX1cbiAgICAgICAgICAgIHlUZXh0PXt5U2NhbGUobWF4UHJpY2UpfVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPE1pblByaWNlXG4gICAgICAgICAgICBkYXRhPXttaW5QcmljZURhdGF9XG4gICAgICAgICAgICB5U2NhbGU9e3lTY2FsZX1cbiAgICAgICAgICAgIHhTY2FsZT17eFNjYWxlfVxuICAgICAgICAgICAgeD17eH1cbiAgICAgICAgICAgIHk9e3l9XG4gICAgICAgICAgICBsYWJlbD17Zm9ybWF0UHJpY2UobWluUHJpY2UpfVxuICAgICAgICAgICAgeVRleHQ9e3lTY2FsZShtaW5QcmljZSl9XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8QXJlYUNsb3NlZFxuICAgICAgICAgICAgZGF0YT17ZGF0YX1cbiAgICAgICAgICAgIHlTY2FsZT17eVNjYWxlfVxuICAgICAgICAgICAgeFNjYWxlPXt4U2NhbGV9XG4gICAgICAgICAgICB4PXt4fVxuICAgICAgICAgICAgeT17eX1cbiAgICAgICAgICAgIGZpbGw9XCJ1cmwoI2FyZWEtZmlsbClcIlxuICAgICAgICAgICAgc3Ryb2tlPVwidHJhbnNwYXJlbnRcIlxuICAgICAgICAgIC8+XG4gICAgICAgICAgPExpbmVQYXRoIGRhdGE9e2RhdGF9IHlTY2FsZT17eVNjYWxlfSB4U2NhbGU9e3hTY2FsZX0geD17eH0geT17eX0gLz5cbiAgICAgICAgICA8QmFyXG4gICAgICAgICAgICB3aWR0aD17d2lkdGh9XG4gICAgICAgICAgICBoZWlnaHQ9e2hlaWdodH1cbiAgICAgICAgICAgIGZpbGw9XCJ0cmFuc3BhcmVudFwiXG4gICAgICAgICAgICBvbk1vdXNlTW92ZT17ZGF0YSA9PiBldmVudCA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IHsgeDogeFBvaW50IH0gPSBsb2NhbFBvaW50KHRoaXMuc3ZnLCBldmVudCk7XG4gICAgICAgICAgICAgIGNvbnN0IHgwID0geFNjYWxlLmludmVydCh4UG9pbnQpO1xuICAgICAgICAgICAgICBjb25zdCBpbmRleCA9IGJpc2VjdERhdGUoZGF0YSwgeDAsIDEpO1xuICAgICAgICAgICAgICBjb25zdCBkID0geDAgLSB4U2NhbGUoeChkMCkpID4geFNjYWxlKHgoZDEpKSAtIHgwID8gZDEgOiBkMDtcbiAgICAgICAgICAgICAgLy8gY2FsbCBzaG93dG9vbFRpcCBhbmQgZGVmaW5lIHdoYXQgc2hvdWxkIHNob3AgdXAgYXQgZWFjaCBwb3NpdGlvblxuICAgICAgICAgICAgICBzaG93dG9vbFRpcCh7XG4gICAgICAgICAgICAgICAgdG9vbHRpcExlZnQ6IHhTY2FsZSh4KGQpKSxcbiAgICAgICAgICAgICAgICB0b29sdGlwUmlnaHQ6IHlTY2FsZSh5KGQpKSxcbiAgICAgICAgICAgICAgICB0b29sdGlwRGF0YTogZFxuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgICBvbk1vdXNlTGVhdmU9e2RhdGEgPT4gZXZlbnQgPT4gaGlkZXRvb2xUaXAoKX1cbiAgICAgICAgICAvPlxuICAgICAgICAgIHt0b29sdGlwRGF0YSAmJiA8ZyAvPn1cbiAgICAgICAgPC9zdmc+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhQYXJlbnRTaXplKHdpdGhUb29sdGlwKENoYXJ0KSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL2NoYXJ0LmpzIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2xvY2FsUG9pbnQgPSByZXF1aXJlKCcuL2xvY2FsUG9pbnQnKTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdsb2NhbFBvaW50Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICByZXR1cm4gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfbG9jYWxQb2ludCkuZGVmYXVsdDtcbiAgfVxufSk7XG5cbnZhciBfdG91Y2hQb2ludCA9IHJlcXVpcmUoJy4vdG91Y2hQb2ludCcpO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3RvdWNoUG9pbnQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgIHJldHVybiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF90b3VjaFBvaW50KS5kZWZhdWx0O1xuICB9XG59KTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9AdngvZXZlbnQvYnVpbGQvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDY3M1xuLy8gbW9kdWxlIGNodW5rcyA9IDUiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSBsb2NhbFBvaW50O1xuXG52YXIgX3BvaW50ID0gcmVxdWlyZSgnQHZ4L3BvaW50Jyk7XG5cbmZ1bmN0aW9uIGxvY2FsUG9pbnQobm9kZSwgZXZlbnQpIHtcbiAgLy8gY2FsbGVkIHdpdGggbm8gYXJnc1xuICBpZiAoIW5vZGUpIHJldHVybjtcblxuICAvLyBjYWxsZWQgd2l0aCBsb2NhbFBvaW50KGV2ZW50KVxuICBpZiAobm9kZS50YXJnZXQpIHtcbiAgICBldmVudCA9IG5vZGU7XG5cbiAgICAvLyBzZXQgbm9kZSB0byB0YXJnZXRzIG93bmVyIHN2Z1xuICAgIG5vZGUgPSBldmVudC50YXJnZXQub3duZXJTVkdFbGVtZW50O1xuXG4gICAgLy8gZmluZCB0aGUgb3V0ZXJtb3N0IHN2Z1xuICAgIHdoaWxlIChub2RlLm93bmVyU1ZHRWxlbWVudCkge1xuICAgICAgbm9kZSA9IG5vZGUub3duZXJTVkdFbGVtZW50O1xuICAgIH1cbiAgfVxuXG4gIC8vIGRlZmF1bHQgdG8gbW91c2UgZXZlbnRcbiAgdmFyIF9ldmVudCA9IGV2ZW50LFxuICAgICAgY2xpZW50WCA9IF9ldmVudC5jbGllbnRYLFxuICAgICAgY2xpZW50WSA9IF9ldmVudC5jbGllbnRZO1xuXG4gIC8vIHN1cHBvcnQgdG91Y2ggZXZlbnRcblxuICBpZiAoZXZlbnQuY2hhbmdlZFRvdWNoZXMpIHtcbiAgICBjbGllbnRYID0gZXZlbnQuY2hhbmdlZFRvdWNoZXNbMF0uY2xpZW50WDtcbiAgICBjbGllbnRZID0gZXZlbnQuY2hhbmdlZFRvdWNoZXNbMF0uY2xpZW50WTtcbiAgfVxuXG4gIC8vIGNhbGN1bGF0ZSBjb29yZGluYXRlcyBmcm9tIHN2Z1xuICBpZiAobm9kZS5jcmVhdGVTVkdQb2ludCkge1xuICAgIHZhciBwb2ludCA9IG5vZGUuY3JlYXRlU1ZHUG9pbnQoKTtcbiAgICBwb2ludC54ID0gY2xpZW50WDtcbiAgICBwb2ludC55ID0gY2xpZW50WTtcbiAgICBwb2ludCA9IHBvaW50Lm1hdHJpeFRyYW5zZm9ybShub2RlLmdldFNjcmVlbkNUTSgpLmludmVyc2UoKSk7XG4gICAgcmV0dXJuIG5ldyBfcG9pbnQuUG9pbnQoe1xuICAgICAgeDogcG9pbnQueCxcbiAgICAgIHk6IHBvaW50LnlcbiAgICB9KTtcbiAgfVxuXG4gIC8vIGZhbGxiYWNrIHRvIGNhbGN1bGF0aW5nIHBvc2l0aW9uIGZyb20gbm9uLXN2ZyBkb20gbm9kZVxuICB2YXIgcmVjdCA9IG5vZGUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gIHJldHVybiBuZXcgX3BvaW50LlBvaW50KHtcbiAgICB4OiBjbGllbnRYIC0gcmVjdC5sZWZ0IC0gbm9kZS5jbGllbnRMZWZ0LFxuICAgIHk6IGNsaWVudFkgLSByZWN0LnRvcCAtIG5vZGUuY2xpZW50VG9wXG4gIH0pO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL0B2eC9ldmVudC9idWlsZC9sb2NhbFBvaW50LmpzXG4vLyBtb2R1bGUgaWQgPSA2NzRcbi8vIG1vZHVsZSBjaHVua3MgPSA1IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gdG91Y2hQb2ludDtcblxudmFyIF9wb2ludCA9IHJlcXVpcmUoJ0B2eC9wb2ludCcpO1xuXG5mdW5jdGlvbiB0b3VjaFBvaW50KG5vZGUsIGV2ZW50KSB7XG4gIGlmICghbm9kZSkgcmV0dXJuO1xuICB2YXIgc3ZnID0gbm9kZS5vd25lclNWR0VsZW1lbnQgfHwgbm9kZTtcbiAgaWYgKHN2Zy5jcmVhdGVTVkdQb2ludCkge1xuICAgIHZhciBwb2ludCA9IHN2Zy5jcmVhdGVTVkdQb2ludCgpO1xuICAgIHBvaW50LnggPSBldmVudC5jaGFuZ2VkVG91Y2hlc1swXS5jbGllbnRYO1xuICAgIHBvaW50LnkgPSBldmVudC5jaGFuZ2VkVG91Y2hlc1swXS5jbGllbnRZO1xuICAgIHBvaW50ID0gcG9pbnQubWF0cml4VHJhbnNmb3JtKG5vZGUuZ2V0U2NyZWVuQ1RNKCkuaW52ZXJzZSgpKTtcbiAgICByZXR1cm4gbmV3IF9wb2ludC5Qb2ludCh7XG4gICAgICB4OiBwb2ludC54LFxuICAgICAgeTogcG9pbnQueVxuICAgIH0pO1xuICB9XG4gIHZhciByZWN0ID0gbm9kZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgcmV0dXJuIG5ldyBfcG9pbnQuUG9pbnQoe1xuICAgIHg6IGV2ZW50LmNoYW5nZWRUb3VjaGVzWzBdLmNsaWVudFggLSByZWN0LmxlZnQgLSBub2RlLmNsaWVudExlZnQsXG4gICAgeTogZXZlbnQuY2hhbmdlZFRvdWNoZXNbMF0uY2xpZW50WSAtIHJlY3QudG9wIC0gbm9kZS5jbGllbnRUb3BcbiAgfSk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvQHZ4L2V2ZW50L2J1aWxkL3RvdWNoUG9pbnQuanNcbi8vIG1vZHVsZSBpZCA9IDY3NVxuLy8gbW9kdWxlIGNodW5rcyA9IDUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTs7O0FBQ0E7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7OztBQUNBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFDQTs7Ozs7QUFDQTtBQUFBO0FBQ0E7QUFTQTtBQVJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFEQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBTEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFJQTs7O0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFEQTtBQUlBO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUlBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBRUE7QUFGQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQVJBO0FBVUE7QUFWQTtBQUNBO0FBV0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTs7QUFMQTtBQU9BO0FBUEE7QUFDQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBOztBQVBBO0FBU0E7QUFUQTtBQUNBO0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7O0FBUEE7QUFTQTtBQVRBO0FBQ0E7QUFVQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTs7QUFQQTtBQVNBO0FBVEE7QUFDQTtBQVFBO0FBQ0E7QUFEQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUVBOztBQUNBO0FBQ0E7QUFHQTtBQUpBO0FBUEE7QUFZQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBaEJBOztBQUFBO0FBa0JBO0FBbEJBO0FBQ0E7O0FBaUJBO0FBSUE7QUFKQTtBQUFBOzs7OztBQW5JQTtBQUNBO0FBeUlBOzs7Ozs7Ozs7OztBQ3RKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUN4QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQ3hEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBIiwic291cmNlUm9vdCI6IiJ9