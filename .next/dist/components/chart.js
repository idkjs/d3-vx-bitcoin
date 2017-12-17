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

var _axis = require("@vx/axis");

var _formatPrice = require("../utils/formatPrice");

var _formatPrice2 = _interopRequireDefault(_formatPrice);

var _maxprice = require("./maxprice");

var _maxprice2 = _interopRequireDefault(_maxprice);

var _minprice = require("./minprice");

var _minprice2 = _interopRequireDefault(_minprice);

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
  var maxPriceData = [{ time: x(firstPoint), price: maxPrice }, { time: x(currentPoint), price: maxPrice }];

  var minPriceData = [{ time: x(firstPoint), price: minPrice }, { time: x(currentPoint), price: minPrice }];

  var xScale = (0, _scale.scaleTime)({
    range: [0, width],
    domain: [Math.min.apply(Math, (0, _toConsumableArray3.default)(data.map(x))), Math.max.apply(Math, (0, _toConsumableArray3.default)(data.map(x)))]
  });
  /** defines the scale of a y axis line */
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
      lineNumber: 60
    }
  }, _react2.default.createElement("svg", { width: width, height: parentHeight, __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    }
  }, _react2.default.createElement(_axis.AxisBottom, { top: yScale(minPrice), data: data, scale: xScale, x: x, __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    }
  }), _react2.default.createElement(_gradient.LinearGradient, {
    id: "area-fill",
    from: "#46a2b4",
    to: "#46a2b4",
    fromOpacity: 0.3,
    toOpacity: 0,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
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
      lineNumber: 71
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
      lineNumber: 80
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
      lineNumber: 89
    }
  }), _react2.default.createElement(_shape.LinePath, { data: data, yScale: yScale, xScale: xScale, x: x, y: y, __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    }
  })));
}

exports.default = (0, _responsive.withParentSize)(Chart);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvY2hhcnQuanMiXSwibmFtZXMiOlsid2l0aFBhcmVudFNpemUiLCJzY2FsZVRpbWUiLCJzY2FsZUxpbmVhciIsIkxpbmVQYXRoIiwiQXJlYUNsb3NlZCIsIkxpbmVhckdyYWRpZW50IiwiQXhpc0JvdHRvbSIsImZvcm1hdFByaWNlIiwiTWF4UHJpY2UiLCJNaW5QcmljZSIsIkNoYXJ0IiwiZGF0YSIsInBhcmVudFdpZHRoIiwicGFyZW50SGVpZ2h0IiwibWFyZ2luIiwidG9wIiwiYm90dG9tIiwibGVmdCIsInJpZ2h0Iiwid2lkdGgiLCJoZWlnaHQiLCJ4IiwiRGF0ZSIsImQiLCJ0aW1lIiwieSIsInByaWNlIiwiZmlyc3RQb2ludCIsImN1cnJlbnRQb2ludCIsImxlbmd0aCIsIm1pblByaWNlIiwiTWF0aCIsIm1pbiIsIm1hcCIsIm1heFByaWNlIiwibWF4IiwibWF4UHJpY2VEYXRhIiwibWluUHJpY2VEYXRhIiwieFNjYWxlIiwicmFuZ2UiLCJkb21haW4iLCJ5U2NhbGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBUzs7QUFDVCxBQUFTLEFBQVc7O0FBQ3BCLEFBQVMsQUFBVTs7QUFDbkIsQUFBUzs7QUFDVCxBQUFTOztBQUNULEFBQU8sQUFBaUI7Ozs7QUFFeEIsQUFBTyxBQUFjOzs7O0FBQ3JCLEFBQU8sQUFBYzs7Ozs7Ozs7O0FBRXJCLFNBQUEsQUFBUyxZQUEyQztNQUFuQyxBQUFtQyxZQUFuQyxBQUFtQztNQUE3QixBQUE2QixtQkFBN0IsQUFBNkI7TUFBaEIsQUFBZ0Isb0JBQWhCLEFBQWdCLEFBQ2xEOztBQUNBO01BQU07U0FBUyxBQUNSLEFBQ0w7WUFGYSxBQUVMLEFBQ1I7VUFIYSxBQUdQLEFBQ047V0FKRixBQUFlLEFBSU4sQUFFVDtBQU5lLEFBQ2I7TUFLSSxRQUFRLGNBQWMsT0FBZCxBQUFxQixPQUFPLE9BQTFDLEFBQWlELEFBQ2pEO01BQU0sU0FBUyxlQUFlLE9BQWYsQUFBc0IsTUFBTSxPQUEzQyxBQUFrRCxBQUVsRDs7QUFHQTs7O01BQU0sSUFBSSxTQUFKLEFBQUksS0FBQTtXQUFLLElBQUEsQUFBSSxLQUFLLEVBQWQsQUFBSyxBQUFXO0FBQTFCLEFBQ0E7TUFBTSxJQUFJLFNBQUosQUFBSSxLQUFBO1dBQUssRUFBTCxBQUFPO0FBQWpCLEFBRUE7O01BQU0sYUFBYSxLQUFuQixBQUFtQixBQUFLLEFBQ3hCO01BQU0sZUFBZSxLQUFLLEtBQUEsQUFBSyxTQUEvQixBQUFxQixBQUFtQixBQUV4Qzs7TUFBTSxXQUFXLEtBQUEsQUFBSyxpREFBTyxLQUFBLEFBQUssSUFBbEMsQUFBaUIsQUFBWSxBQUFTLEFBQ3RDO01BQU0sV0FBVyxLQUFBLEFBQUssaURBQU8sS0FBQSxBQUFLLElBQWxDLEFBQWlCLEFBQVksQUFBUyxBQUN0QztNQUFNLGVBQWUsQ0FDbkIsRUFBRSxNQUFNLEVBQVIsQUFBUSxBQUFFLGFBQWEsT0FESixBQUNuQixBQUE4QixZQUM5QixFQUFFLE1BQU0sRUFBUixBQUFRLEFBQUUsZUFBZSxPQUYzQixBQUFxQixBQUVuQixBQUFnQyxBQUdsQzs7TUFBTSxlQUFlLENBQ25CLEVBQUUsTUFBTSxFQUFSLEFBQVEsQUFBRSxhQUFhLE9BREosQUFDbkIsQUFBOEIsWUFDOUIsRUFBRSxNQUFNLEVBQVIsQUFBUSxBQUFFLGVBQWUsT0FGM0IsQUFBcUIsQUFFbkIsQUFBZ0MsQUFHbEM7O01BQU07V0FDRyxDQUFBLEFBQUMsR0FEZSxBQUNoQixBQUFJLEFBQ1g7WUFBUSxDQUFDLEtBQUEsQUFBSyxpREFBTyxLQUFBLEFBQUssSUFBbEIsQUFBQyxBQUFZLEFBQVMsTUFBSyxLQUFBLEFBQUssaURBQU8sS0FBQSxBQUFLLElBRnRELEFBQWUsQUFBVSxBQUVmLEFBQTJCLEFBQVksQUFBUyxBQUUxRDtBQUp5QixBQUN2QixHQURhO0FBS2Y7TUFBTTtXQUNHLENBQUEsQUFBQyxRQURpQixBQUNsQixBQUFTLEFBQ2hCO1lBQVEsQ0FBQSxBQUFDLFVBRlgsQUFBZSxBQUFZLEFBRWpCLEFBQVcsQUFHckI7QUFMMkIsQUFDekIsR0FEYTs7QUFNZjtBQUVBOztBQUNBO0FBQ0E7QUFDQTt5QkFDRSxjQUFBOztnQkFBQTtrQkFBQSxBQUNFO0FBREY7QUFBQSxHQUFBLGtCQUNFLGNBQUEsU0FBSyxPQUFMLEFBQVksT0FBTyxRQUFuQixBQUEyQjtnQkFBM0I7a0JBQUEsQUFFRTtBQUZGO3FCQUVFLEFBQUMsa0NBQVcsS0FBSyxPQUFqQixBQUFpQixBQUFPLFdBQVcsTUFBbkMsQUFBeUMsTUFBTSxPQUEvQyxBQUFzRCxRQUFRLEdBQTlELEFBQWlFO2dCQUFqRTtrQkFGRixBQUVFLEFBQ0E7QUFEQTtzQkFDQSxBQUFDO1FBQUQsQUFDSyxBQUNIO1VBRkYsQUFFTyxBQUNMO1FBSEYsQUFHSyxBQUNIO2lCQUpGLEFBSWUsQUFDYjtlQUxGLEFBS2E7O2dCQUxiO2tCQUhGLEFBR0UsQUFPQTtBQVBBO0FBQ0Usc0JBTUYsQUFBQztVQUFELEFBQ1EsQUFDTjtZQUZGLEFBRVUsQUFDUjtZQUhGLEFBR1UsQUFDUjtPQUpGLEFBSUssQUFDSDtPQUxGLEFBS0ssQUFDSDtXQUFPLDJCQU5ULEFBTVMsQUFBWSxBQUNuQjtXQUFPLE9BUFQsQUFPUyxBQUFPOztnQkFQaEI7a0JBVkYsQUFVRSxBQVNBO0FBVEE7QUFDRSxzQkFRRixBQUFDO1VBQUQsQUFDUSxBQUNOO1lBRkYsQUFFVSxBQUNSO1lBSEYsQUFHVSxBQUNSO09BSkYsQUFJSyxBQUNIO09BTEYsQUFLSyxBQUNIO1dBQU8sMkJBTlQsQUFNUyxBQUFZLEFBQ25CO1dBQU8sT0FQVCxBQU9TLEFBQU87O2dCQVBoQjtrQkFuQkYsQUFtQkUsQUFTQTtBQVRBO0FBQ0Usc0JBUUYsQUFBQztVQUFELEFBQ1EsQUFDTjtZQUZGLEFBRVUsQUFDUjtZQUhGLEFBR1UsQUFDUjtPQUpGLEFBSUssQUFDSDtPQUxGLEFBS0ssQUFDSDtVQU5GLEFBTU8sQUFDTDtZQVBGLEFBT1M7O2dCQVBUO2tCQTVCRixBQTRCRSxBQVNBO0FBVEE7QUFDRSxzQkFRRixBQUFDLGlDQUFTLE1BQVYsQUFBZ0IsTUFBTSxRQUF0QixBQUE4QixRQUFRLFFBQXRDLEFBQThDLFFBQVEsR0FBdEQsQUFBeUQsR0FBRyxHQUE1RCxBQUErRDtnQkFBL0Q7a0JBdkNOLEFBQ0UsQUFDRSxBQXFDRSxBQUlQO0FBSk87O0FBTVI7O2tCQUFlLGdDQUFmLEFBQWUsQUFBZSIsImZpbGUiOiJjaGFydC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvcHJpc2NfMDAwL2NvZGUvQ0FDREVWL3Z4LXRlc3QifQ==