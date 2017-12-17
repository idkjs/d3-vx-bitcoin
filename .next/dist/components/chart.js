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
          lineNumber: 77
        }
      }, _react2.default.createElement("svg", { ref: function ref(s) {
          return _this2.svg - s;
        }, width: width, height: parentHeight, __source: {
          fileName: _jsxFileName,
          lineNumber: 78
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
            lineNumber: 88
          }
        }),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        }
      }), _react2.default.createElement(_gradient.LinearGradient, {
        id: "area-fill",
        from: "#46a2b4",
        to: "#46a2b4",
        fromOpacity: 0.3,
        toOpacity: 0,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
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
          lineNumber: 97
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
          lineNumber: 106
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
          lineNumber: 115
        }
      }), _react2.default.createElement(_shape.LinePath, { data: data, yScale: yScale, xScale: xScale, x: x, y: y, __source: {
          fileName: _jsxFileName,
          lineNumber: 124
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
            var index = bisectDate(data, x0, 1);
            var d = x0 - xScale(x(d0)) > xScale(x(d1)) - x0 ? d1 : d0;
          };
        },
        onMouseLeave: function onMouseLeave(data) {
          return function (event) {
            return hidetoolTip();
          };
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 125
        }
      })));
    }
  }]);

  return Chart;
}(_react2.default.Component);

exports.default = (0, _responsive.withParentSize)((0, _tooltip.withTooltip)(Chart));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvY2hhcnQuanMiXSwibmFtZXMiOlsid2l0aFBhcmVudFNpemUiLCJzY2FsZVRpbWUiLCJzY2FsZUxpbmVhciIsIkxpbmVQYXRoIiwiQXJlYUNsb3NlZCIsIkJhciIsIkxpbmVhckdyYWRpZW50IiwiQXhpc0JvdHRvbSIsIndpdGhUb29sdGlwIiwidG9vbFRpcCIsImZvcm1hdFByaWNlIiwiTWF4UHJpY2UiLCJNaW5QcmljZSIsImJpc2VjdG9yIiwiQ2hhcnQiLCJwcm9wcyIsImRhdGEiLCJwYXJlbnRXaWR0aCIsInBhcmVudEhlaWdodCIsInRvb2x0aXBMZWZ0IiwidG9vbHRpcFJpZ2h0IiwidG9vbHRpcERhdGEiLCJzaG93dG9vbFRpcCIsImhpZGV0b29sVGlwIiwibWFyZ2luIiwidG9wIiwiYm90dG9tIiwibGVmdCIsInJpZ2h0Iiwid2lkdGgiLCJoZWlnaHQiLCJiaXNlY3REYXRlIiwieCIsImQiLCJEYXRlIiwidGltZSIsInkiLCJwcmljZSIsImZpcnN0UG9pbnQiLCJjdXJyZW50UG9pbnQiLCJsZW5ndGgiLCJtaW5QcmljZSIsIk1hdGgiLCJtaW4iLCJtYXAiLCJtYXhQcmljZSIsIm1heCIsIm1heFByaWNlRGF0YSIsIm1pblByaWNlRGF0YSIsInhTY2FsZSIsInJhbmdlIiwiZG9tYWluIiwieVNjYWxlIiwic3ZnIiwicyIsImxvY2FsUG9pbnQiLCJldmVudCIsInhQb2ludCIsIngwIiwiaW52ZXJ0IiwiaW5kZXgiLCJkMCIsImQxIiwiUmVhY3QiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFTOztBQUNULEFBQVMsQUFBVzs7QUFDcEIsQUFBUyxBQUFVLEFBQVk7O0FBQy9CLEFBQVM7O0FBQ1QsQUFBUzs7QUFDVCxBQUFTLEFBQWE7O0FBQ3RCLEFBQU8sQUFBaUI7Ozs7QUFFeEIsQUFBTyxBQUFjOzs7O0FBQ3JCLEFBQU8sQUFBYzs7OztBQUNyQixBQUFT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QUNwQixBQUNSOztnQkFBTSxLQUFLLE9BQUEsQUFBTyxPQUFsQixBQUFXLEFBQWMsQUFDekI7Z0JBQU0sUUFBUSxXQUFBLEFBQVcsTUFBWCxBQUFpQixJQUEvQixBQUFjLEFBQXFCLEFBQ25DO2dCQUFNLElBQUksS0FBSyxPQUFPLEVBQVosQUFBSyxBQUFPLEFBQUUsT0FBTyxPQUFPLEVBQVAsQUFBTyxBQUFFLE9BQTlCLEFBQXFDLEtBQXJDLEFBQTBDLEtBQXBELEFBQXlELEFBQzFEO0FBTFk7QUFKZixBQVVFO3NCQUFjLDRCQUFBO2lCQUFRLGlCQUFBO21CQUFBLEFBQVM7QUFBakI7QUFWaEI7O29CQUFBO3NCQWpETixBQUNFLEFBQ0UsQUErQ0UsQUFlUDtBQWZPO0FBQ0U7Ozs7O0VBbEhRLGdCQUFNLEEsQUFtSTFCOztrQkFBZSxnQ0FBZSwwQkFBOUIsQUFBZSxBQUFlLEFBQVkiLCJmaWxlIjoiY2hhcnQuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL3ByaXNjXzAwMC9jb2RlL0NBQ0RFVi92eC10ZXN0In0=