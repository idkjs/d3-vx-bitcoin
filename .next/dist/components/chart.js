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

var _maxprice = require("./maxprice");

var _maxprice2 = _interopRequireDefault(_maxprice);

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

  var firstPoint = data[0];
  var currentPoint = data[data.length - 1];

  var minPrice = Math.min.apply(Math, (0, _toConsumableArray3.default)(data.map(y)));
  var maxPrice = Math.max.apply(Math, (0, _toConsumableArray3.default)(data.map(y)));
  var maxPriceData = [{
    time: x(firstPoint),
    price: maxPrice
  }, {
    time: x(currentPoint),
    price: maxPrice
  }];

  var xScale = (0, _scale.scaleTime)({
    range: [0, width],
    domain: [Math.min.apply(Math, (0, _toConsumableArray3.default)(data.map(x))), Math.max.apply(Math, (0, _toConsumableArray3.default)(data.map(x)))]
  });

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
      lineNumber: 58
    }
  }, _react2.default.createElement("svg", { width: width, height: height, __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    }
  }, _react2.default.createElement(_gradient.LinearGradient, {
    id: "area-fill",
    from: "#46a2b4",
    to: "#46a2b4",
    fromOpacity: 0.3,
    toOpacity: 0,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    }
  }), _react2.default.createElement(_maxprice2.default, {
    data: maxPriceData,
    yScale: yScale,
    xScale: xScale,
    x: x,
    y: y,
    label: maxPrice,
    yText: 0,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
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
      lineNumber: 76
    }
  }), _react2.default.createElement(_shape.LinePath, { data: data, yScale: yScale, xScale: xScale, x: x, y: y, __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    }
  })));
}

exports.default = (0, _responsive.withParentSize)(Chart);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvY2hhcnQuanMiXSwibmFtZXMiOlsid2l0aFBhcmVudFNpemUiLCJzY2FsZVRpbWUiLCJzY2FsZUxpbmVhciIsIkxpbmVQYXRoIiwiQXJlYUNsb3NlZCIsIkxpbmVhckdyYWRpZW50IiwiTWF4UHJpY2UiLCJDaGFydCIsImRhdGEiLCJwYXJlbnRXaWR0aCIsInBhcmVudEhlaWdodCIsIm1hcmdpbiIsInRvcCIsImJvdHRvbSIsImxlZnQiLCJyaWdodCIsIndpZHRoIiwiaGVpZ2h0IiwieCIsIkRhdGUiLCJkIiwidGltZSIsInkiLCJwcmljZSIsImZpcnN0UG9pbnQiLCJjdXJyZW50UG9pbnQiLCJsZW5ndGgiLCJtaW5QcmljZSIsIk1hdGgiLCJtaW4iLCJtYXAiLCJtYXhQcmljZSIsIm1heCIsIm1heFByaWNlRGF0YSIsInhTY2FsZSIsInJhbmdlIiwiZG9tYWluIiwieVNjYWxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBLEFBQVM7O0FBQ1QsQUFBUyxBQUFXOztBQUNwQixBQUFTLEFBQVU7O0FBQ25CLEFBQVM7O0FBRVQsQUFBTyxBQUFjOzs7Ozs7Ozs7QUFFckIsU0FBQSxBQUFTLFlBQTJDO01BQW5DLEFBQW1DLFlBQW5DLEFBQW1DO01BQTdCLEFBQTZCLG1CQUE3QixBQUE2QjtNQUFoQixBQUFnQixvQkFBaEIsQUFBZ0IsQUFDbEQ7O0FBQ0E7TUFBTTtTQUFTLEFBQ1IsQUFDTDtZQUZhLEFBRUwsQUFDUjtVQUhhLEFBR1AsQUFDTjtXQUpGLEFBQWUsQUFJTixBQUVUO0FBTmUsQUFDYjtNQUtJLFFBQVEsY0FBYyxPQUFkLEFBQXFCLE9BQU8sT0FBMUMsQUFBaUQsQUFDakQ7TUFBTSxTQUFTLGVBQWUsT0FBZixBQUFzQixNQUFNLE9BQTNDLEFBQWtELEFBRWxEOztBQUdBOzs7TUFBTSxJQUFJLFNBQUosQUFBSSxLQUFBO1dBQUssSUFBQSxBQUFJLEtBQUssRUFBZCxBQUFLLEFBQVc7QUFBMUIsQUFDQTtNQUFNLElBQUksU0FBSixBQUFJLEtBQUE7V0FBSyxFQUFMLEFBQU87QUFBakIsQUFFQTs7TUFBTSxhQUFhLEtBQW5CLEFBQW1CLEFBQUssQUFDeEI7TUFBTSxlQUFlLEtBQUssS0FBQSxBQUFLLFNBQS9CLEFBQXFCLEFBQW1CLEFBRXhDOztNQUFNLFdBQVcsS0FBQSxBQUFLLGlEQUFPLEtBQUEsQUFBSyxJQUFsQyxBQUFpQixBQUFZLEFBQVMsQUFDdEM7TUFBTSxXQUFXLEtBQUEsQUFBSyxpREFBTyxLQUFBLEFBQUssSUFBbEMsQUFBaUIsQUFBWSxBQUFTLEFBQ3RDO01BQU07VUFFSSxFQURSLEFBQ1EsQUFBRSxBQUNSO1dBSGlCLEFBQ25CLEFBRVM7QUFGVCxBQUNFLEdBRmlCO1VBTVgsRUFEUixBQUNRLEFBQUUsQUFDUjtXQVBKLEFBQXFCLEFBS25CLEFBRVMsQUFJWDtBQU5FLEFBQ0U7O01BS0U7V0FDRyxDQUFBLEFBQUMsR0FEZSxBQUNoQixBQUFJLEFBQ1g7WUFBUSxDQUFDLEtBQUEsQUFBSyxpREFBTyxLQUFBLEFBQUssSUFBbEIsQUFBQyxBQUFZLEFBQVMsTUFBSyxLQUFBLEFBQUssaURBQU8sS0FBQSxBQUFLLElBRnRELEFBQWUsQUFBVSxBQUVmLEFBQTJCLEFBQVksQUFBUyxBQUcxRDtBQUx5QixBQUN2QixHQURhOztNQUtUO1dBQ0csQ0FBQSxBQUFDLFFBRGlCLEFBQ2xCLEFBQVMsQUFDaEI7WUFBUSxDQUFBLEFBQUMsVUFGWCxBQUFlLEFBQVksQUFFakIsQUFBVyxBQUdyQjtBQUwyQixBQUN6QixHQURhOztBQU1mO0FBRUE7O0FBQ0E7QUFDQTtBQUNBO3lCQUNFLGNBQUE7O2dCQUFBO2tCQUFBLEFBQ0U7QUFERjtBQUFBLEdBQUEsa0JBQ0UsY0FBQSxTQUFLLE9BQUwsQUFBWSxPQUFPLFFBQW5CLEFBQTJCO2dCQUEzQjtrQkFBQSxBQUNFO0FBREY7cUJBQ0UsQUFBQztRQUFELEFBQ0ssQUFDSDtVQUZGLEFBRU8sQUFDTDtRQUhGLEFBR0ssQUFDSDtpQkFKRixBQUllLEFBQ2I7ZUFMRixBQUthOztnQkFMYjtrQkFERixBQUNFLEFBT0E7QUFQQTtBQUNFLHNCQU1GLEFBQUM7VUFBRCxBQUNRLEFBQ047WUFGRixBQUVVLEFBQ1I7WUFIRixBQUdVLEFBQ1I7T0FKRixBQUlLLEFBQ0g7T0FMRixBQUtLLEFBQ0g7V0FORixBQU1TLEFBQ1A7V0FQRixBQU9TOztnQkFQVDtrQkFSRixBQVFFLEFBU0E7QUFUQTtBQUNFLHNCQVFGLEFBQUM7VUFBRCxBQUNRLEFBQ047WUFGRixBQUVVLEFBQ1I7WUFIRixBQUdVLEFBQ1I7T0FKRixBQUlLLEFBQ0g7T0FMRixBQUtLLEFBQ0g7VUFORixBQU1PLEFBQ0w7WUFQRixBQU9TOztnQkFQVDtrQkFqQkYsQUFpQkUsQUFTQTtBQVRBO0FBQ0Usc0JBUUYsQUFBQyxpQ0FBUyxNQUFWLEFBQWdCLE1BQU0sUUFBdEIsQUFBOEIsUUFBUSxRQUF0QyxBQUE4QyxRQUFRLEdBQXRELEFBQXlELEdBQUcsR0FBNUQsQUFBK0Q7Z0JBQS9EO2tCQTVCTixBQUNFLEFBQ0UsQUEwQkUsQUFJUDtBQUpPOztBQU1SOztrQkFBZSxnQ0FBZixBQUFlLEFBQWUiLCJmaWxlIjoiY2hhcnQuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL3ByaXNjXzAwMC9jb2RlL0NBQ0RFVi92eC10ZXN0In0=