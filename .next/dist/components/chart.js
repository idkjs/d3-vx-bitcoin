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

  var xScale = (0, _scale.scaleTime)({
    range: [0, width],
    domain: [Math.min.apply(Math, (0, _toConsumableArray3.default)(data.map(x))), Math.max.apply(Math, (0, _toConsumableArray3.default)(data.map(x)))]
  });
  console.log(xScale.domain());
  return _react2.default.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    }
  }, _react2.default.createElement("svg", { width: width, height: height, __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    }
  }, _react2.default.createElement("rect", { width: width, height: height, fill: "steelblue", __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    }
  })));
}

exports.default = (0, _responsive.withParentSize)(Chart);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvY2hhcnQuanMiXSwibmFtZXMiOlsid2l0aFBhcmVudFNpemUiLCJzY2FsZVRpbWUiLCJzY2FsZUxpbmVhciIsIkNoYXJ0IiwiZGF0YSIsInBhcmVudFdpZHRoIiwicGFyZW50SGVpZ2h0IiwibWFyZ2luIiwidG9wIiwiYm90dG9tIiwibGVmdCIsInJpZ2h0Iiwid2lkdGgiLCJoZWlnaHQiLCJ4IiwiRGF0ZSIsImQiLCJ0aW1lIiwieSIsInByaWNlIiwieFNjYWxlIiwicmFuZ2UiLCJkb21haW4iLCJNYXRoIiwibWluIiwibWFwIiwibWF4IiwiY29uc29sZSIsImxvZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFTOztBQUVULEFBQVMsQUFBVzs7Ozs7QUFEcEI7OztBQUdBLFNBQUEsQUFBUyxZQUEyQztNQUFuQyxBQUFtQyxZQUFuQyxBQUFtQztNQUE3QixBQUE2QixtQkFBN0IsQUFBNkI7TUFBaEIsQUFBZ0Isb0JBQWhCLEFBQWdCLEFBQ2xEOztBQUNBO01BQU07U0FBUyxBQUNSLEFBQ0w7WUFGYSxBQUVMLEFBQ1I7VUFIYSxBQUdQLEFBQ047V0FKRixBQUFlLEFBSU4sQUFFVDtBQU5lLEFBQ2I7TUFLSSxRQUFRLGNBQWMsT0FBZCxBQUFxQixPQUFPLE9BQTFDLEFBQWlELEFBQ2pEO01BQU0sU0FBUyxlQUFlLE9BQWYsQUFBc0IsTUFBTSxPQUEzQyxBQUFrRCxBQUVsRDs7QUFRQTs7Ozs7Ozs7TUFBTSxJQUFJLFNBQUosQUFBSSxLQUFBO1dBQUssSUFBQSxBQUFJLEtBQUssRUFBZCxBQUFLLEFBQVc7QUFBMUIsQUFDQTtNQUFNLElBQUksU0FBSixBQUFJLEtBQUE7V0FBSyxFQUFMLEFBQU87QUFBakIsQUFFQTs7QUFNQTs7Ozs7O01BQU07V0FDRyxDQUFBLEFBQUMsR0FEZSxBQUNoQixBQUFJLEFBQ1g7WUFBUSxDQUFDLEtBQUEsQUFBSyxpREFBTyxLQUFBLEFBQUssSUFBbEIsQUFBQyxBQUFZLEFBQVMsTUFBSyxLQUFBLEFBQUssaURBQU8sS0FBQSxBQUFLLElBRnRELEFBQWUsQUFBVSxBQUVmLEFBQTJCLEFBQVksQUFBUyxBQUUxRDtBQUp5QixBQUN2QixHQURhO1VBSWYsQUFBUSxJQUFJLE9BQVosQUFBWSxBQUFPLEFBQ25CO3lCQUNFLGNBQUE7O2dCQUFBO2tCQUFBLEFBQ0U7QUFERjtBQUFBLEdBQUEsa0JBQ0UsY0FBQSxTQUFLLE9BQUwsQUFBWSxPQUFPLFFBQW5CLEFBQTJCO2dCQUEzQjtrQkFBQSxBQUNFO0FBREY7NkNBQ1EsT0FBTixBQUFhLE9BQU8sUUFBcEIsQUFBNEIsUUFBUSxNQUFwQyxBQUF5QztnQkFBekM7a0JBSE4sQUFDRSxBQUNFLEFBQ0UsQUFJUDtBQUpPOztBQU1SOztrQkFBZSxnQ0FBZixBQUFlLEFBQWUiLCJmaWxlIjoiY2hhcnQuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL3ByaXNjXzAwMC9jb2RlL0NBQ0RFVi92eC10ZXN0In0=