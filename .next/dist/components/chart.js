"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _toConsumableArray2 = require("babel-runtime/helpers/toConsumableArray");

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _getPrototypeOf = require("babel-runtime/core-js/object/get-prototype-of");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require("babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _responsive = require("@vx/responsive");

var _scale = require("@vx/scale");

var _shape = require("@vx/shape");

var _gradient = require("@vx/gradient");

var _axis = require("@vx/axis");

var _event = require("@vx/event");

var _tooltip = require("@vx/tooltip");

var _formatPrice = require("../utils/formatPrice");

var _formatPrice2 = _interopRequireDefault(_formatPrice);

var _maxprice = require("./maxprice");

var _maxprice2 = _interopRequireDefault(_maxprice);

var _minprice = require("./minprice");

var _minprice2 = _interopRequireDefault(_minprice);

var _d3Array = require("d3-array");

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
      }), _react2.default.createElement("circle", { r: "6", cx: tooltipLeft, cy: tooltipTop, fill: "#00f1a1", __source: {
          fileName: _jsxFileName,
          lineNumber: 155
        }
      }))));
    }
  }]);

  return Chart;
}(_react2.default.Component);

exports.default = (0, _responsive.withParentSize)((0, _tooltip.withTooltip)(Chart));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvY2hhcnQuanMiXSwibmFtZXMiOlsid2l0aFBhcmVudFNpemUiLCJzY2FsZVRpbWUiLCJzY2FsZUxpbmVhciIsIkxpbmVQYXRoIiwiQXJlYUNsb3NlZCIsIkJhciIsIkxpbmUiLCJMaW5lYXJHcmFkaWVudCIsIkF4aXNCb3R0b20iLCJsb2NhbFBvaW50Iiwid2l0aFRvb2x0aXAiLCJ0b29sVGlwIiwiZm9ybWF0UHJpY2UiLCJNYXhQcmljZSIsIk1pblByaWNlIiwiYmlzZWN0b3IiLCJDaGFydCIsInByb3BzIiwiZGF0YSIsInBhcmVudFdpZHRoIiwicGFyZW50SGVpZ2h0IiwidG9vbHRpcExlZnQiLCJ0b29sdGlwUmlnaHQiLCJ0b29sdGlwRGF0YSIsInNob3dUb29sdGlwIiwidG9vbHRpcFRvcCIsImhpZGVUb29sdGlwIiwibWFyZ2luIiwidG9wIiwiYm90dG9tIiwibGVmdCIsInJpZ2h0Iiwid2lkdGgiLCJoZWlnaHQiLCJiaXNlY3REYXRlIiwieCIsImQiLCJEYXRlIiwidGltZSIsInkiLCJwcmljZSIsImZpcnN0UG9pbnQiLCJjdXJyZW50UG9pbnQiLCJsZW5ndGgiLCJtaW5QcmljZSIsIk1hdGgiLCJtaW4iLCJtYXAiLCJtYXhQcmljZSIsIm1heCIsIm1heFByaWNlRGF0YSIsIm1pblByaWNlRGF0YSIsInhTY2FsZSIsInJhbmdlIiwiZG9tYWluIiwieVNjYWxlIiwic3ZnIiwicyIsImV2ZW50IiwieFBvaW50IiwieDAiLCJpbnZlcnQiLCJpbmRleCIsImQwIiwiZDEiLCJSZWFjdCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQVM7O0FBQ1QsQUFBUyxBQUFXOztBQUNwQixBQUFTLEFBQVUsQUFBWSxBQUFLOztBQUNwQyxBQUFTOztBQUNULEFBQVM7O0FBQ1QsQUFBUzs7QUFDVCxBQUFTLEFBQWE7O0FBQ3RCLEFBQU8sQUFBaUI7Ozs7QUFFeEIsQUFBTyxB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QTtpQkFBUSxpQkFBQTttQkFBQSxBQUFTO0FBQWpCO0FBTGhCLEFBTUU7cUJBQWEsMkJBQUE7aUJBQVEsaUJBQVM7OEJBQ04sdUJBQVcsT0FBWCxBQUFnQixLQURWLEFBQ04sQUFBcUI7Z0JBRGYsQUFDakIscUJBRGlCLEFBQ3BCLEFBQ1I7O2dCQUFNLEtBQUssT0FBQSxBQUFPLE9BQWxCLEFBQVcsQUFBYyxBQUN6QjtnQkFBTSxRQUFRLFdBQUEsQUFBVyxNQUFYLEFBQWlCLElBQS9CLEFBQWMsQUFBcUIsQUFDbkM7Z0JBQU0sS0FBSyxLQUFLLFFBQWhCLEFBQVcsQUFBYSxBQUN4QjtnQkFBTSxLQUFLLEtBQVgsQUFBVyxBQUFLLEFBQ2hCO2dCQUFNLElBQUksS0FBSyxPQUFPLEVBQVosQUFBSyxBQUFPLEFBQUUsT0FBTyxPQUFPLEVBQVAsQUFBTyxBQUFFLE9BQTlCLEFBQXFDLEtBQXJDLEFBQTBDLEtBQXBELEFBQXlELEFBQ3pEOzsyQkFBWSxBQUNHLEFBQ2I7MkJBQWEsT0FBTyxFQUZWLEFBRUcsQUFBTyxBQUFFLEFBQ3RCOzBCQUFZLE9BQU8sRUFIckIsQUFBWSxBQUdFLEFBQU8sQUFBRSxBQUV4QjtBQUxhLEFBQ1Y7QUFSUztBQU5mOztvQkFBQTtzQkEvQ0YsQUErQ0UsQUFvQkM7QUFwQkQ7QUFDRSx5Q0FvQkEsY0FBQTs7b0JBQUE7c0JBQUEsQUFDRTtBQURGO0FBQUEsT0FBQSxrQkFDRSxBQUFDO2NBQ08sRUFBRSxHQUFGLEFBQUssYUFBYSxHQUFHLE9BQU8sRUFBRSxhQUR0QyxBQUNRLEFBQXFCLEFBQU8sQUFBRSxBQUFhLEFBQ2pEO1lBQUksRUFBRSxHQUFGLEFBQUssYUFBYSxHQUFHLE9BQU8sRUFBRSxhQUZwQyxBQUVNLEFBQXFCLEFBQU8sQUFBRSxBQUFhLEFBQy9DO2dCQUhGLEFBR1M7O29CQUhUO3NCQURGLEFBQ0UsQUFLQTtBQUxBO0FBQ0Usb0RBSU0sR0FBUixBQUFVLEtBQUksSUFBZCxBQUFrQixhQUFhLElBQS9CLEFBQW1DLFlBQVksTUFBL0MsQUFBb0Q7b0JBQXBEO3NCQTVFVixBQUNFLEFBQ0UsQUFvRUksQUFNRSxBQU1YO0FBTlc7Ozs7OztFQTdJTSxnQkFBTSxBLEFBc0oxQjs7a0JBQWUsZ0NBQWUsMEJBQTlCLEFBQWUsQUFBZSxBQUFZIiwiZmlsZSI6ImNoYXJ0LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9wcmlzY18wMDAvY29kZS9DQUNERVYvdngtdGVzdCJ9