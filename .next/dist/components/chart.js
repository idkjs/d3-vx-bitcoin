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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvY2hhcnQuanMiXSwibmFtZXMiOlsid2l0aFBhcmVudFNpemUiLCJzY2FsZVRpbWUiLCJzY2FsZUxpbmVhciIsIkxpbmVQYXRoIiwiQXJlYUNsb3NlZCIsIkJhciIsIkxpbmVhckdyYWRpZW50IiwiQXhpc0JvdHRvbSIsImxvY2FsUG9pbnQiLCJ3aXRoVG9vbHRpcCIsInRvb2xUaXAiLCJmb3JtYXRQcmljZSIsIk1heFByaWNlIiwiTWluUHJpY2UiLCJiaXNlY3RvciIsIkNoYXJ0IiwicHJvcHMiLCJkYXRhIiwicGFyZW50V2lkdGgiLCJwYXJlbnRIZWlnaHQiLCJ0b29sdGlwTGVmdCIsInRvb2x0aXBSaWdodCIsInRvb2x0aXBEYXRhIiwic2hvd3Rvb2xUaXAiLCJoaWRldG9vbFRpcCIsIm1hcmdpbiIsInRvcCIsImJvdHRvbSIsImxlZnQiLCJyaWdodCIsIndpZHRoIiwiaGVpZ2h0IiwiYmlzZWN0RGF0ZSIsIngiLCJkIiwiRGF0ZSIsInRpbWUiLCJ5IiwicHJpY2UiLCJmaXJzdFBvaW50IiwiY3VycmVudFBvaW50IiwibGVuZ3RoIiwibWluUHJpY2UiLCJNYXRoIiwibWluIiwibWFwIiwibWF4UHJpY2UiLCJtYXgiLCJtYXhQcmljZURhdGEiLCJtaW5QcmljZURhdGEiLCJ4U2NhbGUiLCJyYW5nZSIsImRvbWFpbiIsInlTY2FsZSIsInN2ZyIsInMiLCJldmVudCIsInhQb2ludCIsIngwIiwiaW52ZXJ0IiwiaW5kZXgiLCJkMCIsImQxIiwiUmVhY3QiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFTOztBQUNULEFBQVMsQUFBVzs7QUFDcEIsQUFBUyxBQUFVLEFBQVk7O0FBQy9CLEFBQVM7O0FBQ1QsQUFBUzs7QUFDVCxBQUFTOztBQUNULEFBQVMsQUFBYTs7QUFDdEIsQUFBTyxBQUFpQjs7OztBQUV4QixBQUFPLEFBQWM7Ozs7QUFDckIsQUFBTyxBQUFjOzs7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Q2pCLHFCQURpQixBQUNwQixBQUNSOztnQkFBTSxLQUFLLE9BQUEsQUFBTyxPQUFsQixBQUFXLEFBQWMsQUFDekI7Z0JBQU0sUUFBUSxXQUFBLEFBQVcsTUFBWCxBQUFpQixJQUEvQixBQUFjLEFBQXFCLEFBQ25DO2dCQUFNLElBQUksS0FBSyxPQUFPLEVBQVosQUFBSyxBQUFPLEFBQUUsT0FBTyxPQUFPLEVBQVAsQUFBTyxBQUFFLE9BQTlCLEFBQXFDLEtBQXJDLEFBQTBDLEtBQXBELEFBQXlELEFBQ3pEO0FBQ0E7OzJCQUNlLE9BQU8sRUFEVixBQUNHLEFBQU8sQUFBRSxBQUN0Qjs0QkFBYyxPQUFPLEVBRlgsQUFFSSxBQUFPLEFBQUUsQUFDdkI7MkJBSEYsQUFBWSxBQUdHLEFBRWhCO0FBTGEsQUFDVjtBQVBTO0FBSmYsQUFnQkU7c0JBQWMsNEJBQUE7aUJBQVEsaUJBQUE7bUJBQUEsQUFBUztBQUFqQjtBQWhCaEI7O29CQUFBO3NCQS9DRixBQStDRSxBQWtCQztBQWxCRDtBQUNFOztvQkFpQmM7c0JBbkV0QixBQUNFLEFBQ0UsQUFpRWtCLEFBSXZCO0FBSnVCO0FBQUEsT0FBQTs7Ozs7RUFuSU4sZ0JBQU0sQSxBQTBJMUI7O2tCQUFlLGdDQUFlLDBCQUE5QixBQUFlLEFBQWUsQUFBWSIsImZpbGUiOiJjaGFydC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvcHJpc2NfMDAwL2NvZGUvQ0FDREVWL3Z4LXRlc3QifQ==