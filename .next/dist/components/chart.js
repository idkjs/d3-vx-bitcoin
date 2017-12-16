"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _toConsumableArray2 = require("babel-runtime/helpers/toConsumableArray");

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _responsive = require("@vx/responsive");

var _scale = require("@vx/scale");

var _shape = require("@vx/shape");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/Users/prisc_000/code/CACDEV/vx-test/components/chart.js";
// Import d3 methods to render x and y axis


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

  /** Define accessor
   * see: https://github.com/d3/d3-array#d3-array
   * define x and what data point we want for each x at that d/data point,
   *  then do same for y
   * for x we want the date on the returned bitcoin value json
   * for y we want the price on that d / data point
   */

  var x = function x(d) {
    return new Date(d.time);
  };
  var y = function y(d) {
    return d.price;
  };

  /** Scale value to map value from a domain to range
   * see: https://github.com/d3/d3-scale
   * range defines starting point for data to show and endpoint
   * domain is what data to spread over that range.
   */

  /** store min max y values to reuse later */

  var minPrice = Math.min.apply(Math, (0, _toConsumableArray3.default)(data.map(y)));
  var maxPrice = Math.max.apply(Math, (0, _toConsumableArray3.default)(data.map(y)));
  var xScale = (0, _scale.scaleTime)({
    range: [0, width],
    domain: [Math.min.apply(Math, (0, _toConsumableArray3.default)(data.map(x))), Math.max.apply(Math, (0, _toConsumableArray3.default)(data.map(x)))]
  });

  var yScale = (0, _scale.scaleLinear)({
    range: [height, 0],
    domain: [minPrice, maxPrice]
  });

  console.log(xScale.domain());
  console.log(yScale.domain());

  //   call <LinePath, pass in the data, xScale, yScale domain mappers,
  //  and x and y accessors
  return _react2.default.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    }
  }, _react2.default.createElement("svg", { width: width, height: height, __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    }
  }, _react2.default.createElement(_shape.LinePath, { data: data, yScale: yScale, xScale: xScale, x: x, y: y, __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    }
  })));
}

exports.default = (0, _responsive.withParentSize)(Chart);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvY2hhcnQuanMiXSwibmFtZXMiOlsid2l0aFBhcmVudFNpemUiLCJzY2FsZVRpbWUiLCJzY2FsZUxpbmVhciIsIkxpbmVQYXRoIiwiQ2hhcnQiLCJkYXRhIiwicGFyZW50V2lkdGgiLCJwYXJlbnRIZWlnaHQiLCJtYXJnaW4iLCJ0b3AiLCJib3R0b20iLCJsZWZ0IiwicmlnaHQiLCJ3aWR0aCIsImhlaWdodCIsIngiLCJEYXRlIiwiZCIsInRpbWUiLCJ5IiwicHJpY2UiLCJtaW5QcmljZSIsIk1hdGgiLCJtaW4iLCJtYXAiLCJtYXhQcmljZSIsIm1heCIsInhTY2FsZSIsInJhbmdlIiwiZG9tYWluIiwieVNjYWxlIiwiY29uc29sZSIsImxvZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFTOztBQUVULEFBQVMsQUFBVzs7QUFDcEIsQUFBUzs7Ozs7QUFGVDs7O0FBSUEsU0FBQSxBQUFTLFlBQTJDO01BQW5DLEFBQW1DLFlBQW5DLEFBQW1DO01BQTdCLEFBQTZCLG1CQUE3QixBQUE2QjtNQUFoQixBQUFnQixvQkFBaEIsQUFBZ0IsQUFDbEQ7O0FBQ0E7TUFBTTtTQUFTLEFBQ1IsQUFDTDtZQUZhLEFBRUwsQUFDUjtVQUhhLEFBR1AsQUFDTjtXQUpGLEFBQWUsQUFJTixBQUVUO0FBTmUsQUFDYjtNQUtJLFFBQVEsY0FBYyxPQUFkLEFBQXFCLE9BQU8sT0FBMUMsQUFBaUQsQUFDakQ7TUFBTSxTQUFTLGVBQWUsT0FBZixBQUFzQixNQUFNLE9BQTNDLEFBQWtELEFBRWxEOztBQVFBOzs7Ozs7OztNQUFNLElBQUksU0FBSixBQUFJLEtBQUE7V0FBSyxJQUFBLEFBQUksS0FBSyxFQUFkLEFBQUssQUFBVztBQUExQixBQUNBO01BQU0sSUFBSSxTQUFKLEFBQUksS0FBQTtXQUFLLEVBQUwsQUFBTztBQUFqQixBQUVBOztBQU1BOzs7Ozs7QUFFQTs7TUFBTSxXQUFXLEtBQUEsQUFBSyxpREFBTyxLQUFBLEFBQUssSUFBbEMsQUFBaUIsQUFBWSxBQUFTLEFBQ3RDO01BQU0sV0FBVyxLQUFBLEFBQUssaURBQU8sS0FBQSxBQUFLLElBQWxDLEFBQWlCLEFBQVksQUFBUyxBQUN0QztNQUFNO1dBQ0csQ0FBQSxBQUFDLEdBRGUsQUFDaEIsQUFBSSxBQUNYO1lBQVEsQ0FBQyxLQUFBLEFBQUssaURBQU8sS0FBQSxBQUFLLElBQWxCLEFBQUMsQUFBWSxBQUFTLE1BQUssS0FBQSxBQUFLLGlEQUFPLEtBQUEsQUFBSyxJQUZ0RCxBQUFlLEFBQVUsQUFFZixBQUEyQixBQUFZLEFBQVMsQUFHMUQ7QUFMeUIsQUFDdkIsR0FEYTs7TUFLVDtXQUNHLENBQUEsQUFBQyxRQURpQixBQUNsQixBQUFTLEFBQ2hCO1lBQVEsQ0FBQSxBQUFDLFVBRlgsQUFBZSxBQUFZLEFBRWpCLEFBQVcsQUFHckI7QUFMMkIsQUFDekIsR0FEYTs7VUFLZixBQUFRLElBQUksT0FBWixBQUFZLEFBQU8sQUFDbkI7VUFBQSxBQUFRLElBQUksT0FBWixBQUFZLEFBQU8sQUFFbkI7O0FBQ0E7QUFDQTt5QkFDRSxjQUFBOztnQkFBQTtrQkFBQSxBQUNFO0FBREY7QUFBQSxHQUFBLGtCQUNFLGNBQUEsU0FBSyxPQUFMLEFBQVksT0FBTyxRQUFuQixBQUEyQjtnQkFBM0I7a0JBQUEsQUFDRTtBQURGO3FCQUNFLEFBQUMsaUNBQVMsTUFBVixBQUFnQixNQUFNLFFBQXRCLEFBQThCLFFBQVEsUUFBdEMsQUFBOEMsUUFBUSxHQUF0RCxBQUF5RCxHQUFHLEdBQTVELEFBQStEO2dCQUEvRDtrQkFITixBQUNFLEFBQ0UsQUFDRSxBQUlQO0FBSk87O0FBTVI7O2tCQUFlLGdDQUFmLEFBQWUsQUFBZSIsImZpbGUiOiJjaGFydC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvcHJpc2NfMDAwL2NvZGUvQ0FDREVWL3Z4LXRlc3QifQ==