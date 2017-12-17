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
      var _props = this.props,
          data = _props.data,
          parentWidth = _props.parentWidth,
          parentHeight = _props.parentHeight;

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
          lineNumber: 67
        }
      }, _react2.default.createElement("svg", { width: width, height: parentHeight, __source: {
          fileName: _jsxFileName,
          lineNumber: 68
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
            lineNumber: 78
          }
        }),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        }
      }), _react2.default.createElement(_gradient.LinearGradient, {
        id: "area-fill",
        from: "#46a2b4",
        to: "#46a2b4",
        fromOpacity: 0.3,
        toOpacity: 0,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
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
          lineNumber: 87
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
          lineNumber: 96
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
          lineNumber: 105
        }
      }), _react2.default.createElement(_shape.LinePath, { data: data, yScale: yScale, xScale: xScale, x: x, y: y, __source: {
          fileName: _jsxFileName,
          lineNumber: 114
        }
      }), _react2.default.createElement(_shape.Bar, { width: width, height: height, fill: "transparent", __source: {
          fileName: _jsxFileName,
          lineNumber: 115
        }
      })));
    }
  }]);

  return Chart;
}(_react2.default.Component);

exports.default = (0, _responsive.withParentSize)(Chart);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvY2hhcnQuanMiXSwibmFtZXMiOlsid2l0aFBhcmVudFNpemUiLCJzY2FsZVRpbWUiLCJzY2FsZUxpbmVhciIsIkxpbmVQYXRoIiwiQXJlYUNsb3NlZCIsIkJhciIsIkxpbmVhckdyYWRpZW50IiwiQXhpc0JvdHRvbSIsIndpdGhUb29sVGlwIiwidG9vbFRpcCIsImZvcm1hdFByaWNlIiwiTWF4UHJpY2UiLCJNaW5QcmljZSIsIkNoYXJ0IiwicHJvcHMiLCJkYXRhIiwicGFyZW50V2lkdGgiLCJwYXJlbnRIZWlnaHQiLCJtYXJnaW4iLCJ0b3AiLCJib3R0b20iLCJsZWZ0IiwicmlnaHQiLCJ3aWR0aCIsImhlaWdodCIsIngiLCJEYXRlIiwiZCIsInRpbWUiLCJ5IiwicHJpY2UiLCJmaXJzdFBvaW50IiwiY3VycmVudFBvaW50IiwibGVuZ3RoIiwibWluUHJpY2UiLCJNYXRoIiwibWluIiwibWFwIiwibWF4UHJpY2UiLCJtYXgiLCJtYXhQcmljZURhdGEiLCJtaW5QcmljZURhdGEiLCJ4U2NhbGUiLCJyYW5nZSIsImRvbWFpbiIsInlTY2FsZSIsIlJlYWN0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBUzs7QUFDVCxBQUFTLEFBQVc7O0FBQ3BCLEFBQVMsQUFBVSxBQUFZOztBQUMvQixBQUFTOztBQUNULEFBQVM7O0FBQ1QsQUFBUyxBQUFhOztBQUN0QixBQUFPLEFBQWlCOzs7O0FBRXhCLEFBQU8sQUFBYzs7OztBQUNyQixBQUFPLEFBQWM7Ozs7Ozs7OztJQUVmLEE7aUNBQ0o7O2lCQUFBLEFBQVksT0FBTzt3Q0FBQTs7K0hBQUEsQUFDWCxBQUNQOzs7Ozs2QkFDUTttQkFDcUMsS0FEckMsQUFDMEM7VUFEMUMsQUFDQyxjQURELEFBQ0M7VUFERCxBQUNPLHFCQURQLEFBQ087VUFEUCxBQUNvQixzQkFEcEIsQUFDb0IsQUFFM0I7O0FBQ0E7O1VBQU07YUFBUyxB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SDtlQUFPLDJCQU5ULEFBTVMsQUFBWSxBQUNuQjtlQUFPLE9BUFQsQUFPUyxBQUFPOztvQkFQaEI7c0JBNUJGLEFBNEJFLEFBU0E7QUFUQTtBQUNFLDBCQVFGLEFBQUM7Y0FBRCxBQUNRLEFBQ047Z0JBRkYsQUFFVSxBQUNSO2dCQUhGLEFBR1UsQUFDUjtXQUpGLEFBSUssQUFDSDtXQUxGLEFBS0ssQUFDSDtjQU5GLEFBTU8sQUFDTDtnQkFQRixBQU9TOztvQkFQVDtzQkFyQ0YsQUFxQ0UsQUFTQTtBQVRBO0FBQ0UsMEJBUUYsQUFBQyxpQ0FBUyxNQUFWLEFBQWdCLE1BQU0sUUFBdEIsQUFBOEIsUUFBUSxRQUF0QyxBQUE4QyxRQUFRLEdBQXRELEFBQXlELEdBQUcsR0FBNUQsQUFBK0Q7b0JBQS9EO3NCQTlDRixBQThDRSxBQUNBO0FBREE7MEJBQ0EsQUFBQyw0QkFBSSxPQUFMLEFBQVksT0FBTyxRQUFuQixBQUEyQixRQUFRLE1BQW5DLEFBQXdDO29CQUF4QztzQkFqRE4sQUFDRSxBQUNFLEFBK0NFLEFBSVA7QUFKTzs7Ozs7O0VBdkdVLGdCQUFNLEEsQUE4RzFCOztrQkFBZSxnQ0FBZixBQUFlLEFBQWUiLCJmaWxlIjoiY2hhcnQuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL3ByaXNjXzAwMC9jb2RlL0NBQ0RFVi92eC10ZXN0In0=