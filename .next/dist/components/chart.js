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

var _gradient = require("@vx/gradient");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/Users/prisc_000/code/CACDEV/vx-test/components/chart.js";


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

  /** Define accessors and values to be passed to our shapes
   */

  var x = function x(d) {
    return new Date(d.time);
  };
  var y = function y(d) {
    return d.price;
  };

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

  // console.log(xScale.domain());
  // console.log(yScale.domain());

  /* end accessor values */
  //   call <LinePath, pass in the data, xScale, yScale domain mappers,
  //  and x and y accessors
  return _react2.default.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    }
  }, _react2.default.createElement("svg", { width: width, height: height, __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    }
  }, _react2.default.createElement(_gradient.LinearGradient, {
    id: "area-fill",
    from: "#46a2b4",
    to: "#46a2b4",
    fromOpacity: 0.3,
    toOpacity: 0,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
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
      lineNumber: 51
    }
  }), _react2.default.createElement(_shape.LinePath, { data: data, yScale: yScale, xScale: xScale, x: x, y: y, __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    }
  })));
}

exports.default = (0, _responsive.withParentSize)(Chart);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvY2hhcnQuanMiXSwibmFtZXMiOlsid2l0aFBhcmVudFNpemUiLCJzY2FsZVRpbWUiLCJzY2FsZUxpbmVhciIsIkxpbmVQYXRoIiwiQXJlYUNsb3NlZCIsIkxpbmVhckdyYWRpZW50IiwiQ2hhcnQiLCJkYXRhIiwicGFyZW50V2lkdGgiLCJwYXJlbnRIZWlnaHQiLCJtYXJnaW4iLCJ0b3AiLCJib3R0b20iLCJsZWZ0IiwicmlnaHQiLCJ3aWR0aCIsImhlaWdodCIsIngiLCJEYXRlIiwiZCIsInRpbWUiLCJ5IiwicHJpY2UiLCJtaW5QcmljZSIsIk1hdGgiLCJtaW4iLCJtYXAiLCJtYXhQcmljZSIsIm1heCIsInhTY2FsZSIsInJhbmdlIiwiZG9tYWluIiwieVNjYWxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBLEFBQVM7O0FBQ1QsQUFBUyxBQUFXOztBQUNwQixBQUFTLEFBQVU7O0FBQ25CLEFBQVM7Ozs7Ozs7QUFFVCxTQUFBLEFBQVMsWUFBMkM7TUFBbkMsQUFBbUMsWUFBbkMsQUFBbUM7TUFBN0IsQUFBNkIsbUJBQTdCLEFBQTZCO01BQWhCLEFBQWdCLG9CQUFoQixBQUFnQixBQUNsRDs7QUFDQTtNQUFNO1NBQVMsQUFDUixBQUNMO1lBRmEsQUFFTCxBQUNSO1VBSGEsQUFHUCxBQUNOO1dBSkYsQUFBZSxBQUlOLEFBRVQ7QUFOZSxBQUNiO01BS0ksUUFBUSxjQUFjLE9BQWQsQUFBcUIsT0FBTyxPQUExQyxBQUFpRCxBQUNqRDtNQUFNLFNBQVMsZUFBZSxPQUFmLEFBQXNCLE1BQU0sT0FBM0MsQUFBa0QsQUFFbEQ7O0FBR0E7OztNQUFNLElBQUksU0FBSixBQUFJLEtBQUE7V0FBSyxJQUFBLEFBQUksS0FBSyxFQUFkLEFBQUssQUFBVztBQUExQixBQUNBO01BQU0sSUFBSSxTQUFKLEFBQUksS0FBQTtXQUFLLEVBQUwsQUFBTztBQUFqQixBQUVBOztNQUFNLFdBQVcsS0FBQSxBQUFLLGlEQUFPLEtBQUEsQUFBSyxJQUFsQyxBQUFpQixBQUFZLEFBQVMsQUFDdEM7TUFBTSxXQUFXLEtBQUEsQUFBSyxpREFBTyxLQUFBLEFBQUssSUFBbEMsQUFBaUIsQUFBWSxBQUFTLEFBQ3RDO01BQU07V0FDRyxDQUFBLEFBQUMsR0FEZSxBQUNoQixBQUFJLEFBQ1g7WUFBUSxDQUFDLEtBQUEsQUFBSyxpREFBTyxLQUFBLEFBQUssSUFBbEIsQUFBQyxBQUFZLEFBQVMsTUFBSyxLQUFBLEFBQUssaURBQU8sS0FBQSxBQUFLLElBRnRELEFBQWUsQUFBVSxBQUVmLEFBQTJCLEFBQVksQUFBUyxBQUcxRDtBQUx5QixBQUN2QixHQURhOztNQUtUO1dBQ0csQ0FBQSxBQUFDLFFBRGlCLEFBQ2xCLEFBQVMsQUFDaEI7WUFBUSxDQUFBLEFBQUMsVUFGWCxBQUFlLEFBQVksQUFFakIsQUFBVyxBQUdyQjtBQUwyQixBQUN6QixHQURhOztBQU1mO0FBRUE7O0FBQ0E7QUFDQTtBQUNBO3lCQUNFLGNBQUE7O2dCQUFBO2tCQUFBLEFBQ0U7QUFERjtBQUFBLEdBQUEsa0JBQ0UsY0FBQSxTQUFLLE9BQUwsQUFBWSxPQUFPLFFBQW5CLEFBQTJCO2dCQUEzQjtrQkFBQSxBQUNFO0FBREY7cUJBQ0UsQUFBQztRQUFELEFBQ0ssQUFDSDtVQUZGLEFBRU8sQUFDTDtRQUhGLEFBR0ssQUFDSDtpQkFKRixBQUllLEFBQ2I7ZUFMRixBQUthOztnQkFMYjtrQkFERixBQUNFLEFBT0E7QUFQQTtBQUNFLHNCQU1GLEFBQUM7VUFBRCxBQUNRLEFBQ047WUFGRixBQUVVLEFBQ1I7WUFIRixBQUdVLEFBQ1I7T0FKRixBQUlLLEFBQ0g7T0FMRixBQUtLLEFBQ0g7VUFORixBQU1PLEFBQ0w7WUFQRixBQU9TOztnQkFQVDtrQkFSRixBQVFFLEFBU0E7QUFUQTtBQUNFLHNCQVFGLEFBQUMsaUNBQVMsTUFBVixBQUFnQixNQUFNLFFBQXRCLEFBQThCLFFBQVEsUUFBdEMsQUFBOEMsUUFBUSxHQUF0RCxBQUF5RCxHQUFHLEdBQTVELEFBQStEO2dCQUEvRDtrQkFuQk4sQUFDRSxBQUNFLEFBaUJFLEFBSVA7QUFKTzs7QUFNUjs7a0JBQWUsZ0NBQWYsQUFBZSxBQUFlIiwiZmlsZSI6ImNoYXJ0LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9wcmlzY18wMDAvY29kZS9DQUNERVYvdngtdGVzdCJ9