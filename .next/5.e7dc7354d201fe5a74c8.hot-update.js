webpackHotUpdate(5,{

/***/ 509:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _toConsumableArray2 = __webpack_require__(82);

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _react = __webpack_require__(17);

var _react2 = _interopRequireDefault(_react);

var _responsive = __webpack_require__(437);

var _scale = __webpack_require__(510);

var _shape = __webpack_require__(601);

var _gradient = __webpack_require__(491);

var _axis = __webpack_require__(659);

var _formatPrice = __webpack_require__(654);

var _formatPrice2 = _interopRequireDefault(_formatPrice);

var _maxprice = __webpack_require__(655);

var _maxprice2 = _interopRequireDefault(_maxprice);

var _minprice = __webpack_require__(656);

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
  }, _react2.default.createElement("svg", { width: width, height: height, __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    }
  }, _react2.default.createElement(_axis.AxisBottom, { data: data, scale: xScale, x: x, __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    }
  }), _react2.default.createElement(_gradient.LinearGradient, {
    id: "area-fill",
    from: "#46a2b4",
    to: "#46a2b4",
    fromOpacity: 0.3,
    toOpacity: 0,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
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
      lineNumber: 70
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
      lineNumber: 79
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
      lineNumber: 88
    }
  }), _react2.default.createElement(_shape.LinePath, { data: data, yScale: yScale, xScale: xScale, x: x, y: y, __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    }
  })));
}

exports.default = (0, _responsive.withParentSize)(Chart);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvY2hhcnQuanMiXSwibmFtZXMiOlsid2l0aFBhcmVudFNpemUiLCJzY2FsZVRpbWUiLCJzY2FsZUxpbmVhciIsIkxpbmVQYXRoIiwiQXJlYUNsb3NlZCIsIkxpbmVhckdyYWRpZW50IiwiQXhpc0JvdHRvbSIsImZvcm1hdFByaWNlIiwiTWF4UHJpY2UiLCJNaW5QcmljZSIsIkNoYXJ0IiwiZGF0YSIsInBhcmVudFdpZHRoIiwicGFyZW50SGVpZ2h0IiwibWFyZ2luIiwidG9wIiwiYm90dG9tIiwibGVmdCIsInJpZ2h0Iiwid2lkdGgiLCJoZWlnaHQiLCJ4IiwiRGF0ZSIsImQiLCJ0aW1lIiwieSIsInByaWNlIiwiZmlyc3RQb2ludCIsImN1cnJlbnRQb2ludCIsImxlbmd0aCIsIm1pblByaWNlIiwiTWF0aCIsIm1pbiIsIm1hcCIsIm1heFByaWNlIiwibWF4IiwibWF4UHJpY2VEYXRhIiwibWluUHJpY2VEYXRhIiwieFNjYWxlIiwicmFuZ2UiLCJkb21haW4iLCJ5U2NhbGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBUzs7QUFDVCxBQUFTLEFBQVc7O0FBQ3BCLEFBQVMsQUFBVTs7QUFDbkIsQUFBUzs7QUFDVCxBQUFTOztBQUNULEFBQU8sQUFBaUI7Ozs7QUFFeEIsQUFBTyxBQUFjOzs7O0FBQ3JCLEFBQU8sQUFBYzs7Ozs7Ozs7O0FBRXJCLFNBQUEsQUFBUyxZQUEyQztNQUFuQyxBQUFtQyxZQUFuQyxBQUFtQztNQUE3QixBQUE2QixtQkFBN0IsQUFBNkI7TUFBaEIsQUFBZ0Isb0JBQWhCLEFBQWdCLEFBQ2xEOztBQUNBO01BQU07U0FBUyxBQUNSLEFBQ0w7WUFGYSxBQUVMLEFBQ1I7VUFIYSxBQUdQLEFBQ047V0FKRixBQUFlLEFBSU4sQUFFVDtBQU5lLEFBQ2I7TUFLSSxRQUFRLGNBQWMsT0FBZCxBQUFxQixPQUFPLE9BQTFDLEFBQWlELEFBQ2pEO01BQU0sU0FBUyxlQUFlLE9BQWYsQUFBc0IsTUFBTSxPQUEzQyxBQUFrRCxBQUVsRDs7QUFHQTs7O01BQU0sSUFBSSxTQUFKLEFBQUksS0FBQTtXQUFLLElBQUEsQUFBSSxLQUFLLEVBQWQsQUFBSyxBQUFXO0FBQTFCLEFBQ0E7TUFBTSxJQUFJLFNBQUosQUFBSSxLQUFBO1dBQUssRUFBTCxBQUFPO0FBQWpCLEFBRUE7O01BQU0sYUFBYSxLQUFuQixBQUFtQixBQUFLLEFBQ3hCO01BQU0sZUFBZSxLQUFLLEtBQUEsQUFBSyxTQUEvQixBQUFxQixBQUFtQixBQUV4Qzs7TUFBTSxXQUFXLEtBQUEsQUFBSyxpREFBTyxLQUFBLEFBQUssSUFBbEMsQUFBaUIsQUFBWSxBQUFTLEFBQ3RDO01BQU0sV0FBVyxLQUFBLEFBQUssaURBQU8sS0FBQSxBQUFLLElBQWxDLEFBQWlCLEFBQVksQUFBUyxBQUN0QztNQUFNLGVBQWUsQ0FDbkIsRUFBRSxNQUFNLEVBQVIsQUFBUSxBQUFFLGFBQWEsT0FESixBQUNuQixBQUE4QixZQUM5QixFQUFFLE1BQU0sRUFBUixBQUFRLEFBQUUsZUFBZSxPQUYzQixBQUFxQixBQUVuQixBQUFnQyxBQUdsQzs7TUFBTSxlQUFlLENBQ25CLEVBQUUsTUFBTSxFQUFSLEFBQVEsQUFBRSxhQUFhLE9BREosQUFDbkIsQUFBOEIsWUFDOUIsRUFBRSxNQUFNLEVBQVIsQUFBUSxBQUFFLGVBQWUsT0FGM0IsQUFBcUIsQUFFbkIsQUFBZ0MsQUFHbEM7O01BQU07V0FDRyxDQUFBLEFBQUMsR0FEZSxBQUNoQixBQUFJLEFBQ1g7WUFBUSxDQUFDLEtBQUEsQUFBSyxpREFBTyxLQUFBLEFBQUssSUFBbEIsQUFBQyxBQUFZLEFBQVMsTUFBSyxLQUFBLEFBQUssaURBQU8sS0FBQSxBQUFLLElBRnRELEFBQWUsQUFBVSxBQUVmLEFBQTJCLEFBQVksQUFBUyxBQUUxRDtBQUp5QixBQUN2QixHQURhO0FBS2Y7TUFBTTtXQUNHLENBQUEsQUFBQyxRQURpQixBQUNsQixBQUFTLEFBQ2hCO1lBQVEsQ0FBQSxBQUFDLFVBRlgsQUFBZSxBQUFZLEFBRWpCLEFBQVcsQUFHckI7QUFMMkIsQUFDekIsR0FEYTs7QUFNZjtBQUVBOztBQUNBO0FBQ0E7QUFDQTt5QkFDRSxjQUFBOztnQkFBQTtrQkFBQSxBQUNFO0FBREY7QUFBQSxHQUFBLGtCQUNFLGNBQUEsU0FBSyxPQUFMLEFBQVksT0FBTyxRQUFuQixBQUEyQjtnQkFBM0I7a0JBQUEsQUFDRTtBQURGO3FCQUNFLEFBQUMsa0NBQVcsTUFBWixBQUFrQixNQUFNLE9BQXhCLEFBQStCLFFBQVEsR0FBdkMsQUFBMEM7Z0JBQTFDO2tCQURGLEFBQ0UsQUFDQTtBQURBO3NCQUNBLEFBQUM7UUFBRCxBQUNLLEFBQ0g7VUFGRixBQUVPLEFBQ0w7UUFIRixBQUdLLEFBQ0g7aUJBSkYsQUFJZSxBQUNiO2VBTEYsQUFLYTs7Z0JBTGI7a0JBRkYsQUFFRSxBQU9BO0FBUEE7QUFDRSxzQkFNRixBQUFDO1VBQUQsQUFDUSxBQUNOO1lBRkYsQUFFVSxBQUNSO1lBSEYsQUFHVSxBQUNSO09BSkYsQUFJSyxBQUNIO09BTEYsQUFLSyxBQUNIO1dBQU8sMkJBTlQsQUFNUyxBQUFZLEFBQ25CO1dBQU8sT0FQVCxBQU9TLEFBQU87O2dCQVBoQjtrQkFURixBQVNFLEFBU0E7QUFUQTtBQUNFLHNCQVFGLEFBQUM7VUFBRCxBQUNRLEFBQ047WUFGRixBQUVVLEFBQ1I7WUFIRixBQUdVLEFBQ1I7T0FKRixBQUlLLEFBQ0g7T0FMRixBQUtLLEFBQ0g7V0FBTywyQkFOVCxBQU1TLEFBQVksQUFDbkI7V0FBTyxPQVBULEFBT1MsQUFBTzs7Z0JBUGhCO2tCQWxCRixBQWtCRSxBQVNBO0FBVEE7QUFDRSxzQkFRRixBQUFDO1VBQUQsQUFDUSxBQUNOO1lBRkYsQUFFVSxBQUNSO1lBSEYsQUFHVSxBQUNSO09BSkYsQUFJSyxBQUNIO09BTEYsQUFLSyxBQUNIO1VBTkYsQUFNTyxBQUNMO1lBUEYsQUFPUzs7Z0JBUFQ7a0JBM0JGLEFBMkJFLEFBU0E7QUFUQTtBQUNFLHNCQVFGLEFBQUMsaUNBQVMsTUFBVixBQUFnQixNQUFNLFFBQXRCLEFBQThCLFFBQVEsUUFBdEMsQUFBOEMsUUFBUSxHQUF0RCxBQUF5RCxHQUFHLEdBQTVELEFBQStEO2dCQUEvRDtrQkF0Q04sQUFDRSxBQUNFLEFBb0NFLEFBSVA7QUFKTzs7QUFNUjs7a0JBQWUsZ0NBQWYsQUFBZSxBQUFlIiwiZmlsZSI6ImNoYXJ0LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9wcmlzY18wMDAvY29kZS9DQUNERVYvdngtdGVzdCJ9

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/Users/prisc_000/code/CACDEV/vx-test/components/chart.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/prisc_000/code/CACDEV/vx-test/components/chart.js"); } } })();

/***/ }),

/***/ 657:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  top: 'top',
  left: 'left',
  right: 'right',
  bottom: 'bottom'
};

/***/ }),

/***/ 658:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = Axis;

var _react = __webpack_require__(17);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(58);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__(391);

var _classnames2 = _interopRequireDefault(_classnames);

var _shape = __webpack_require__(601);

var _point = __webpack_require__(631);

var _group = __webpack_require__(413);

var _center = __webpack_require__(660);

var _center2 = _interopRequireDefault(_center);

var _identity = __webpack_require__(661);

var _identity2 = _interopRequireDefault(_identity);

var _labelTransform = __webpack_require__(662);

var _labelTransform2 = _interopRequireDefault(_labelTransform);

var _orientation = __webpack_require__(657);

var _orientation2 = _interopRequireDefault(_orientation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var propTypes = {
  axisClassName: _propTypes2.default.string,
  axisLineClassName: _propTypes2.default.string,
  hideAxisLine: _propTypes2.default.bool,
  hideTicks: _propTypes2.default.bool,
  hideZero: _propTypes2.default.bool,
  label: _propTypes2.default.string,
  labelClassName: _propTypes2.default.string,
  labelOffset: _propTypes2.default.number,
  labelProps: _propTypes2.default.object,
  left: _propTypes2.default.number,
  numTicks: _propTypes2.default.number,
  orientation: _propTypes2.default.oneOf([_orientation2.default.top, _orientation2.default.right, _orientation2.default.bottom, _orientation2.default.left]),
  rangePadding: _propTypes2.default.number,
  scale: _propTypes2.default.func.isRequired,
  stroke: _propTypes2.default.string,
  strokeWidth: _propTypes2.default.number,
  strokeDasharray: _propTypes2.default.string,
  tickClassName: _propTypes2.default.string,
  tickFormat: _propTypes2.default.func,
  tickLabelProps: _propTypes2.default.func,
  tickLength: _propTypes2.default.number,
  tickStroke: _propTypes2.default.string,
  tickTransform: _propTypes2.default.string,
  tickValues: _propTypes2.default.array,
  top: _propTypes2.default.number,
  children: _propTypes2.default.func
};

function Axis(_ref) {
  var children = _ref.children,
      axisClassName = _ref.axisClassName,
      axisLineClassName = _ref.axisLineClassName,
      _ref$hideAxisLine = _ref.hideAxisLine,
      hideAxisLine = _ref$hideAxisLine === undefined ? false : _ref$hideAxisLine,
      _ref$hideTicks = _ref.hideTicks,
      hideTicks = _ref$hideTicks === undefined ? false : _ref$hideTicks,
      _ref$hideZero = _ref.hideZero,
      hideZero = _ref$hideZero === undefined ? false : _ref$hideZero,
      _ref$label = _ref.label,
      label = _ref$label === undefined ? '' : _ref$label,
      labelClassName = _ref.labelClassName,
      _ref$labelOffset = _ref.labelOffset,
      labelOffset = _ref$labelOffset === undefined ? 14 : _ref$labelOffset,
      _ref$labelProps = _ref.labelProps,
      labelProps = _ref$labelProps === undefined ? {
    textAnchor: 'middle',
    fontFamily: 'Arial',
    fontSize: 10,
    fill: 'black'
  } : _ref$labelProps,
      _ref$left = _ref.left,
      left = _ref$left === undefined ? 0 : _ref$left,
      _ref$numTicks = _ref.numTicks,
      numTicks = _ref$numTicks === undefined ? 10 : _ref$numTicks,
      _ref$orientation = _ref.orientation,
      orientation = _ref$orientation === undefined ? _orientation2.default.bottom : _ref$orientation,
      _ref$rangePadding = _ref.rangePadding,
      rangePadding = _ref$rangePadding === undefined ? 0 : _ref$rangePadding,
      scale = _ref.scale,
      _ref$stroke = _ref.stroke,
      stroke = _ref$stroke === undefined ? 'black' : _ref$stroke,
      _ref$strokeWidth = _ref.strokeWidth,
      strokeWidth = _ref$strokeWidth === undefined ? 1 : _ref$strokeWidth,
      strokeDasharray = _ref.strokeDasharray,
      tickClassName = _ref.tickClassName,
      tickFormat = _ref.tickFormat,
      _ref$tickLabelProps = _ref.tickLabelProps,
      tickLabelProps = _ref$tickLabelProps === undefined ? function (tickValue, index) {
    return {
      textAnchor: 'middle',
      fontFamily: 'Arial',
      fontSize: 10,
      fill: 'black'
    };
  } : _ref$tickLabelProps,
      _ref$tickLength = _ref.tickLength,
      tickLength = _ref$tickLength === undefined ? 8 : _ref$tickLength,
      _ref$tickStroke = _ref.tickStroke,
      tickStroke = _ref$tickStroke === undefined ? 'black' : _ref$tickStroke,
      tickTransform = _ref.tickTransform,
      tickValues = _ref.tickValues,
      _ref$top = _ref.top,
      top = _ref$top === undefined ? 0 : _ref$top;

  var values = scale.ticks ? scale.ticks(numTicks) : scale.domain();
  if (tickValues) values = tickValues;
  var format = scale.tickFormat ? scale.tickFormat() : _identity2.default;
  if (tickFormat) format = tickFormat;

  var range = scale.range();
  var range0 = range[0] + 0.5 - rangePadding;
  var range1 = range[range.length - 1] + 0.5 + rangePadding;

  var horizontal = orientation !== _orientation2.default.left && orientation !== _orientation2.default.right;
  var isLeft = orientation === _orientation2.default.left;
  var isTop = orientation === _orientation2.default.top;
  var tickSign = isLeft || isTop ? -1 : 1;

  var position = (scale.bandwidth ? _center2.default : _identity2.default)(scale.copy());

  var axisFromPoint = new _point.Point({
    x: horizontal ? range0 : 0,
    y: horizontal ? 0 : range0
  });
  var axisToPoint = new _point.Point({
    x: horizontal ? range1 : 0,
    y: horizontal ? 0 : range1
  });

  var tickLabelFontSize = 10; // track the max tick label size to compute label offset

  if (!!children) {
    return _react2.default.createElement(
      _group.Group,
      {
        className: (0, _classnames2.default)('vx-axis', axisClassName),
        top: top,
        left: left
      },
      children({
        axisFromPoint: axisFromPoint,
        axisToPoint: axisToPoint,
        horizontal: horizontal,
        tickSign: tickSign,
        numTicks: numTicks,
        label: label,
        rangePadding: rangePadding,
        tickLength: tickLength,
        tickFormat: format,
        tickPosition: position,
        ticks: values.map(function (value, index) {
          var from = new _point.Point({
            x: horizontal ? position(value) : 0,
            y: horizontal ? 0 : position(value)
          });
          var to = new _point.Point({
            x: horizontal ? position(value) : tickSign * tickLength,
            y: horizontal ? tickLength * tickSign : position(value)
          });
          return {
            value: value,
            index: index,
            from: from,
            to: to,
            formattedValue: format(value, index)
          };
        })
      })
    );
  }

  return _react2.default.createElement(
    _group.Group,
    {
      className: (0, _classnames2.default)('vx-axis', axisClassName),
      top: top,
      left: left
    },
    values.map(function (val, index) {
      if (hideZero && val === 0) return null;

      var tickFromPoint = new _point.Point({
        x: horizontal ? position(val) : 0,
        y: horizontal ? 0 : position(val)
      });
      var tickToPoint = new _point.Point({
        x: horizontal ? position(val) : tickSign * tickLength,
        y: horizontal ? tickLength * tickSign : position(val)
      });

      var tickLabelPropsObj = tickLabelProps(val, index);
      tickLabelFontSize = Math.max(tickLabelFontSize, tickLabelPropsObj.fontSize || 0);

      return _react2.default.createElement(
        _group.Group,
        {
          key: 'vx-tick-' + val + '-' + index,
          className: (0, _classnames2.default)('vx-axis-tick', tickClassName),
          transform: tickTransform
        },
        !hideTicks && _react2.default.createElement(_shape.Line, {
          from: tickFromPoint,
          to: tickToPoint,
          stroke: tickStroke
        }),
        _react2.default.createElement(
          'text',
          _extends({
            x: tickToPoint.x,
            y: tickToPoint.y + (horizontal && !isTop ? tickLabelFontSize : 0)
          }, tickLabelPropsObj),
          format(val, index)
        )
      );
    }),
    !hideAxisLine && _react2.default.createElement(_shape.Line, {
      className: (0, _classnames2.default)('vx-axis-line', axisLineClassName),
      from: axisFromPoint,
      to: axisToPoint,
      stroke: stroke,
      strokeWidth: strokeWidth,
      strokeDasharray: strokeDasharray
    }),
    label && _react2.default.createElement(
      'text',
      _extends({
        className: (0, _classnames2.default)('vx-axis-label', labelClassName)
      }, (0, _labelTransform2.default)({
        labelOffset: labelOffset,
        labelProps: labelProps,
        orientation: orientation,
        range: range,
        tickLabelFontSize: tickLabelFontSize,
        tickLength: tickLength
      }), labelProps),
      label
    )
  );
}

Axis.propTypes = propTypes;

/***/ }),

/***/ 659:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Axis = __webpack_require__(658);

Object.defineProperty(exports, 'Axis', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Axis).default;
  }
});

var _AxisLeft = __webpack_require__(663);

Object.defineProperty(exports, 'AxisLeft', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_AxisLeft).default;
  }
});

var _AxisRight = __webpack_require__(664);

Object.defineProperty(exports, 'AxisRight', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_AxisRight).default;
  }
});

var _AxisTop = __webpack_require__(665);

Object.defineProperty(exports, 'AxisTop', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_AxisTop).default;
  }
});

var _AxisBottom = __webpack_require__(666);

Object.defineProperty(exports, 'AxisBottom', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_AxisBottom).default;
  }
});

var _orientation = __webpack_require__(657);

Object.defineProperty(exports, 'Orientation', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_orientation).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ 660:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = center;
function center(scale) {
  var offset = scale.bandwidth() / 2;
  if (scale.round()) offset = Math.round(offset);
  return function (d) {
    return scale(d) + offset;
  };
}

/***/ }),

/***/ 661:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = identity;
function identity(x) {
  return x;
}

/***/ }),

/***/ 662:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = labelTransform;

var _orientation = __webpack_require__(657);

var _orientation2 = _interopRequireDefault(_orientation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function labelTransform(_ref) {
  var labelOffset = _ref.labelOffset,
      labelProps = _ref.labelProps,
      orientation = _ref.orientation,
      range = _ref.range,
      tickLabelFontSize = _ref.tickLabelFontSize,
      tickLength = _ref.tickLength;

  var sign = orientation === _orientation2.default.left || orientation === _orientation2.default.top ? -1 : 1;

  var x = void 0,
      y = void 0,
      transform = null;
  if (orientation === _orientation2.default.top || orientation === _orientation2.default.bottom) {
    x = Math.max.apply(Math, _toConsumableArray(range)) / 2;
    y = sign * (tickLength + labelOffset + tickLabelFontSize + (orientation === _orientation2.default.bottom ? labelProps.fontSize : 0));
  } else {
    x = sign * (Math.max.apply(Math, _toConsumableArray(range)) / 2);
    y = -(tickLength + labelOffset);
    transform = 'rotate(' + sign * 90 + ')';
  }

  return { x: x, y: y, transform: transform };
}

/***/ }),

/***/ 663:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = AxisLeft;

var _react = __webpack_require__(17);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(58);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__(391);

var _classnames2 = _interopRequireDefault(_classnames);

var _Axis = __webpack_require__(658);

var _Axis2 = _interopRequireDefault(_Axis);

var _orientation = __webpack_require__(657);

var _orientation2 = _interopRequireDefault(_orientation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var propTypes = {
  axisClassName: _propTypes2.default.string,
  axisLineClassName: _propTypes2.default.string,
  hideAxisLine: _propTypes2.default.bool,
  hideTicks: _propTypes2.default.bool,
  hideZero: _propTypes2.default.bool,
  label: _propTypes2.default.string,
  labelClassName: _propTypes2.default.string,
  labelOffset: _propTypes2.default.number,
  labelProps: _propTypes2.default.object,
  left: _propTypes2.default.number,
  numTicks: _propTypes2.default.number,
  rangePadding: _propTypes2.default.number,
  scale: _propTypes2.default.func.isRequired,
  stroke: _propTypes2.default.string,
  strokeWidth: _propTypes2.default.number,
  strokeDasharray: _propTypes2.default.string,
  tickClassName: _propTypes2.default.string,
  tickFormat: _propTypes2.default.func,
  tickLabelProps: _propTypes2.default.func,
  tickLength: _propTypes2.default.number,
  tickStroke: _propTypes2.default.string,
  tickTransform: _propTypes2.default.string,
  tickValues: _propTypes2.default.array,
  top: _propTypes2.default.number,
  children: _propTypes2.default.func
};

function AxisLeft(_ref) {
  var children = _ref.children,
      axisClassName = _ref.axisClassName,
      axisLineClassName = _ref.axisLineClassName,
      hideAxisLine = _ref.hideAxisLine,
      hideTicks = _ref.hideTicks,
      hideZero = _ref.hideZero,
      label = _ref.label,
      labelClassName = _ref.labelClassName,
      _ref$labelOffset = _ref.labelOffset,
      labelOffset = _ref$labelOffset === undefined ? 36 : _ref$labelOffset,
      labelProps = _ref.labelProps,
      left = _ref.left,
      numTicks = _ref.numTicks,
      rangePadding = _ref.rangePadding,
      scale = _ref.scale,
      stroke = _ref.stroke,
      strokeWidth = _ref.strokeWidth,
      strokeDasharray = _ref.strokeDasharray,
      tickClassName = _ref.tickClassName,
      tickFormat = _ref.tickFormat,
      _ref$tickLabelProps = _ref.tickLabelProps,
      tickLabelProps = _ref$tickLabelProps === undefined ? function (_ref2) {
    var tick = _ref2.tick,
        index = _ref2.index;
    return {
      dx: '-0.25em',
      dy: '0.25em',
      fill: 'black',
      fontFamily: 'Arial',
      fontSize: 10,
      textAnchor: 'end'
    };
  } : _ref$tickLabelProps,
      _ref$tickLength = _ref.tickLength,
      tickLength = _ref$tickLength === undefined ? 8 : _ref$tickLength,
      tickStroke = _ref.tickStroke,
      tickTransform = _ref.tickTransform,
      tickValues = _ref.tickValues,
      top = _ref.top;

  return _react2.default.createElement(_Axis2.default, {
    axisClassName: (0, _classnames2.default)('vx-axis-left', axisClassName),
    axisLineClassName: axisLineClassName,
    hideAxisLine: hideAxisLine,
    hideTicks: hideTicks,
    hideZero: hideZero,
    label: label,
    labelClassName: labelClassName,
    labelOffset: labelOffset,
    labelProps: labelProps,
    left: left,
    numTicks: numTicks,
    orientation: _orientation2.default.left,
    rangePadding: rangePadding,
    scale: scale,
    stroke: stroke,
    strokeWidth: strokeWidth,
    strokeDasharray: strokeDasharray,
    tickClassName: tickClassName,
    tickFormat: tickFormat,
    tickLabelProps: tickLabelProps,
    tickLength: tickLength,
    tickStroke: tickStroke,
    tickTransform: tickTransform,
    tickValues: tickValues,
    top: top,
    children: children
  });
}

AxisLeft.propTypes = propTypes;

/***/ }),

/***/ 664:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = AxisRight;

var _react = __webpack_require__(17);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(58);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__(391);

var _classnames2 = _interopRequireDefault(_classnames);

var _Axis = __webpack_require__(658);

var _Axis2 = _interopRequireDefault(_Axis);

var _orientation = __webpack_require__(657);

var _orientation2 = _interopRequireDefault(_orientation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var propTypes = {
  axisClassName: _propTypes2.default.string,
  axisLineClassName: _propTypes2.default.string,
  hideAxisLine: _propTypes2.default.bool,
  hideTicks: _propTypes2.default.bool,
  hideZero: _propTypes2.default.bool,
  label: _propTypes2.default.string,
  labelClassName: _propTypes2.default.string,
  labelOffset: _propTypes2.default.number,
  labelProps: _propTypes2.default.object,
  left: _propTypes2.default.number,
  numTicks: _propTypes2.default.number,
  rangePadding: _propTypes2.default.number,
  scale: _propTypes2.default.func.isRequired,
  stroke: _propTypes2.default.string,
  strokeWidth: _propTypes2.default.number,
  strokeDasharray: _propTypes2.default.string,
  tickClassName: _propTypes2.default.string,
  tickFormat: _propTypes2.default.func,
  tickLabelProps: _propTypes2.default.func,
  tickLength: _propTypes2.default.number,
  tickStroke: _propTypes2.default.string,
  tickTransform: _propTypes2.default.string,
  tickValues: _propTypes2.default.array,
  top: _propTypes2.default.number,
  children: _propTypes2.default.func
};

function AxisRight(_ref) {
  var children = _ref.children,
      axisClassName = _ref.axisClassName,
      axisLineClassName = _ref.axisLineClassName,
      hideAxisLine = _ref.hideAxisLine,
      hideTicks = _ref.hideTicks,
      hideZero = _ref.hideZero,
      label = _ref.label,
      labelClassName = _ref.labelClassName,
      _ref$labelOffset = _ref.labelOffset,
      labelOffset = _ref$labelOffset === undefined ? 36 : _ref$labelOffset,
      labelProps = _ref.labelProps,
      left = _ref.left,
      numTicks = _ref.numTicks,
      rangePadding = _ref.rangePadding,
      scale = _ref.scale,
      stroke = _ref.stroke,
      strokeWidth = _ref.strokeWidth,
      strokeDasharray = _ref.strokeDasharray,
      tickClassName = _ref.tickClassName,
      tickFormat = _ref.tickFormat,
      _ref$tickLabelProps = _ref.tickLabelProps,
      tickLabelProps = _ref$tickLabelProps === undefined ? function (_ref2) {
    var tick = _ref2.tick,
        index = _ref2.index;
    return {
      dx: '0.25em',
      dy: '0.25em',
      fill: 'black',
      fontFamily: 'Arial',
      fontSize: 10,
      textAnchor: 'start'
    };
  } : _ref$tickLabelProps,
      _ref$tickLength = _ref.tickLength,
      tickLength = _ref$tickLength === undefined ? 8 : _ref$tickLength,
      tickStroke = _ref.tickStroke,
      tickTransform = _ref.tickTransform,
      tickValues = _ref.tickValues,
      top = _ref.top;

  return _react2.default.createElement(_Axis2.default, {
    axisClassName: (0, _classnames2.default)('vx-axis-right', axisClassName),
    axisLineClassName: axisLineClassName,
    hideAxisLine: hideAxisLine,
    hideTicks: hideTicks,
    hideZero: hideZero,
    label: label,
    labelClassName: labelClassName,
    labelOffset: labelOffset,
    labelProps: labelProps,
    left: left,
    numTicks: numTicks,
    orientation: _orientation2.default.right,
    rangePadding: rangePadding,
    scale: scale,
    stroke: stroke,
    strokeWidth: strokeWidth,
    strokeDasharray: strokeDasharray,
    tickClassName: tickClassName,
    tickFormat: tickFormat,
    tickLabelProps: tickLabelProps,
    tickLength: tickLength,
    tickStroke: tickStroke,
    tickTransform: tickTransform,
    tickValues: tickValues,
    top: top,
    children: children
  });
}

AxisRight.propTypes = propTypes;

/***/ }),

/***/ 665:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = AxisTop;

var _react = __webpack_require__(17);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(58);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__(391);

var _classnames2 = _interopRequireDefault(_classnames);

var _Axis = __webpack_require__(658);

var _Axis2 = _interopRequireDefault(_Axis);

var _orientation = __webpack_require__(657);

var _orientation2 = _interopRequireDefault(_orientation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var propTypes = {
  axisClassName: _propTypes2.default.string,
  axisLineClassName: _propTypes2.default.string,
  hideAxisLine: _propTypes2.default.bool,
  hideTicks: _propTypes2.default.bool,
  hideZero: _propTypes2.default.bool,
  label: _propTypes2.default.string,
  labelClassName: _propTypes2.default.string,
  labelOffset: _propTypes2.default.number,
  labelProps: _propTypes2.default.object,
  left: _propTypes2.default.number,
  numTicks: _propTypes2.default.number,
  rangePadding: _propTypes2.default.number,
  scale: _propTypes2.default.func.isRequired,
  stroke: _propTypes2.default.string,
  strokeWidth: _propTypes2.default.number,
  strokeDasharray: _propTypes2.default.string,
  tickClassName: _propTypes2.default.string,
  tickFormat: _propTypes2.default.func,
  tickLabelProps: _propTypes2.default.func,
  tickLength: _propTypes2.default.number,
  tickStroke: _propTypes2.default.string,
  tickTransform: _propTypes2.default.string,
  tickValues: _propTypes2.default.array,
  top: _propTypes2.default.number,
  children: _propTypes2.default.func
};

function AxisTop(_ref) {
  var children = _ref.children,
      axisClassName = _ref.axisClassName,
      axisLineClassName = _ref.axisLineClassName,
      hideAxisLine = _ref.hideAxisLine,
      hideTicks = _ref.hideTicks,
      hideZero = _ref.hideZero,
      label = _ref.label,
      labelClassName = _ref.labelClassName,
      _ref$labelOffset = _ref.labelOffset,
      labelOffset = _ref$labelOffset === undefined ? 8 : _ref$labelOffset,
      labelProps = _ref.labelProps,
      left = _ref.left,
      numTicks = _ref.numTicks,
      rangePadding = _ref.rangePadding,
      scale = _ref.scale,
      stroke = _ref.stroke,
      strokeWidth = _ref.strokeWidth,
      strokeDasharray = _ref.strokeDasharray,
      tickClassName = _ref.tickClassName,
      tickFormat = _ref.tickFormat,
      _ref$tickLabelProps = _ref.tickLabelProps,
      tickLabelProps = _ref$tickLabelProps === undefined ? function (_ref2) {
    var tick = _ref2.tick,
        index = _ref2.index;
    return {
      dy: '-0.25em',
      fill: 'black',
      fontFamily: 'Arial',
      fontSize: 10,
      textAnchor: 'middle'
    };
  } : _ref$tickLabelProps,
      _ref$tickLength = _ref.tickLength,
      tickLength = _ref$tickLength === undefined ? 8 : _ref$tickLength,
      tickStroke = _ref.tickStroke,
      tickTransform = _ref.tickTransform,
      tickValues = _ref.tickValues,
      top = _ref.top;

  return _react2.default.createElement(_Axis2.default, {
    axisClassName: (0, _classnames2.default)('vx-axis-top', axisClassName),
    axisLineClassName: axisLineClassName,
    hideAxisLine: hideAxisLine,
    hideTicks: hideTicks,
    hideZero: hideZero,
    label: label,
    labelClassName: labelClassName,
    labelOffset: labelOffset,
    labelProps: labelProps,
    left: left,
    numTicks: numTicks,
    orientation: _orientation2.default.top,
    rangePadding: rangePadding,
    scale: scale,
    stroke: stroke,
    strokeWidth: strokeWidth,
    strokeDasharray: strokeDasharray,
    tickClassName: tickClassName,
    tickFormat: tickFormat,
    tickLabelProps: tickLabelProps,
    tickLength: tickLength,
    tickStroke: tickStroke,
    tickTransform: tickTransform,
    tickValues: tickValues,
    top: top,
    children: children
  });
}

AxisTop.propTypes = propTypes;

/***/ }),

/***/ 666:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = AxisBottom;

var _react = __webpack_require__(17);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(58);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__(391);

var _classnames2 = _interopRequireDefault(_classnames);

var _Axis = __webpack_require__(658);

var _Axis2 = _interopRequireDefault(_Axis);

var _orientation = __webpack_require__(657);

var _orientation2 = _interopRequireDefault(_orientation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var propTypes = {
  axisClassName: _propTypes2.default.string,
  axisLineClassName: _propTypes2.default.string,
  hideAxisLine: _propTypes2.default.bool,
  hideTicks: _propTypes2.default.bool,
  hideZero: _propTypes2.default.bool,
  label: _propTypes2.default.string,
  labelClassName: _propTypes2.default.string,
  labelOffset: _propTypes2.default.number,
  labelProps: _propTypes2.default.object,
  left: _propTypes2.default.number,
  numTicks: _propTypes2.default.number,
  rangePadding: _propTypes2.default.number,
  scale: _propTypes2.default.func.isRequired,
  stroke: _propTypes2.default.string,
  strokeWidth: _propTypes2.default.number,
  strokeDasharray: _propTypes2.default.string,
  tickClassName: _propTypes2.default.string,
  tickFormat: _propTypes2.default.func,
  tickLabelProps: _propTypes2.default.func,
  tickLength: _propTypes2.default.number,
  tickStroke: _propTypes2.default.string,
  tickTransform: _propTypes2.default.string,
  tickValues: _propTypes2.default.array,
  top: _propTypes2.default.number,
  children: _propTypes2.default.func
};

function AxisBottom(_ref) {
  var children = _ref.children,
      axisClassName = _ref.axisClassName,
      axisLineClassName = _ref.axisLineClassName,
      hideAxisLine = _ref.hideAxisLine,
      hideTicks = _ref.hideTicks,
      hideZero = _ref.hideZero,
      label = _ref.label,
      labelClassName = _ref.labelClassName,
      _ref$labelOffset = _ref.labelOffset,
      labelOffset = _ref$labelOffset === undefined ? 8 : _ref$labelOffset,
      labelProps = _ref.labelProps,
      left = _ref.left,
      numTicks = _ref.numTicks,
      rangePadding = _ref.rangePadding,
      scale = _ref.scale,
      stroke = _ref.stroke,
      strokeWidth = _ref.strokeWidth,
      strokeDasharray = _ref.strokeDasharray,
      tickClassName = _ref.tickClassName,
      tickFormat = _ref.tickFormat,
      _ref$tickLabelProps = _ref.tickLabelProps,
      tickLabelProps = _ref$tickLabelProps === undefined ? function (_ref2) {
    var tick = _ref2.tick,
        index = _ref2.index;
    return {
      dy: '0.25em',
      fill: 'black',
      fontFamily: 'Arial',
      fontSize: 10,
      textAnchor: 'middle'
    };
  } : _ref$tickLabelProps,
      _ref$tickLength = _ref.tickLength,
      tickLength = _ref$tickLength === undefined ? 8 : _ref$tickLength,
      tickStroke = _ref.tickStroke,
      tickTransform = _ref.tickTransform,
      tickValues = _ref.tickValues,
      top = _ref.top;

  return _react2.default.createElement(_Axis2.default, {
    axisClassName: (0, _classnames2.default)('vx-axis-bottom', axisClassName),
    axisLineClassName: axisLineClassName,
    hideAxisLine: hideAxisLine,
    hideTicks: hideTicks,
    hideZero: hideZero,
    label: label,
    labelClassName: labelClassName,
    labelOffset: labelOffset,
    labelProps: labelProps,
    left: left,
    numTicks: numTicks,
    orientation: _orientation2.default.bottom,
    rangePadding: rangePadding,
    scale: scale,
    stroke: stroke,
    strokeWidth: strokeWidth,
    strokeDasharray: strokeDasharray,
    tickClassName: tickClassName,
    tickFormat: tickFormat,
    tickLabelProps: tickLabelProps,
    tickLength: tickLength,
    tickStroke: tickStroke,
    tickTransform: tickTransform,
    tickValues: tickValues,
    top: top,
    children: children
  });
}

AxisBottom.propTypes = propTypes;

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS5lN2RjNzM1NGQyMDFmZTVhNzRjOC5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9jaGFydC5qcz8wZWQzNjkwIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AdngvYXhpcy9idWlsZC9jb25zdGFudHMvb3JpZW50YXRpb24uanM/MDM5NzJiNyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHZ4L2F4aXMvYnVpbGQvYXhpcy9BeGlzLmpzPzAzOTcyYjciLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0B2eC9heGlzL2J1aWxkL2luZGV4LmpzPzAzOTcyYjciLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0B2eC9heGlzL2J1aWxkL3V0aWxzL2NlbnRlci5qcz8wMzk3MmI3Iiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AdngvYXhpcy9idWlsZC91dGlscy9pZGVudGl0eS5qcz8wMzk3MmI3Iiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AdngvYXhpcy9idWlsZC91dGlscy9sYWJlbFRyYW5zZm9ybS5qcz8wMzk3MmI3Iiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AdngvYXhpcy9idWlsZC9heGlzL0F4aXNMZWZ0LmpzPzAzOTcyYjciLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0B2eC9heGlzL2J1aWxkL2F4aXMvQXhpc1JpZ2h0LmpzPzAzOTcyYjciLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0B2eC9heGlzL2J1aWxkL2F4aXMvQXhpc1RvcC5qcz8wMzk3MmI3Iiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AdngvYXhpcy9idWlsZC9heGlzL0F4aXNCb3R0b20uanM/MDM5NzJiNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB3aXRoUGFyZW50U2l6ZSB9IGZyb20gXCJAdngvcmVzcG9uc2l2ZVwiO1xuaW1wb3J0IHsgc2NhbGVUaW1lLCBzY2FsZUxpbmVhciB9IGZyb20gXCJAdngvc2NhbGVcIjtcbmltcG9ydCB7IExpbmVQYXRoLCBBcmVhQ2xvc2VkIH0gZnJvbSBcIkB2eC9zaGFwZVwiO1xuaW1wb3J0IHsgTGluZWFyR3JhZGllbnQgfSBmcm9tIFwiQHZ4L2dyYWRpZW50XCI7XG5pbXBvcnQgeyBBeGlzQm90dG9tIH0gZnJvbSBcIkB2eC9heGlzXCI7XG5pbXBvcnQgZm9ybWF0UHJpY2UgZnJvbSBcIi4uL3V0aWxzL2Zvcm1hdFByaWNlXCI7XG5cbmltcG9ydCBNYXhQcmljZSBmcm9tIFwiLi9tYXhwcmljZVwiO1xuaW1wb3J0IE1pblByaWNlIGZyb20gXCIuL21pbnByaWNlXCI7XG5cbmZ1bmN0aW9uIENoYXJ0KHsgZGF0YSwgcGFyZW50V2lkdGgsIHBhcmVudEhlaWdodCB9KSB7XG4gIC8qKiBEZWZpbmUgbWFyZ2luIGZvciB0aGlzIGRpdiB0byBwYXNzIHRvIGNhbGN1bGF0aW9uIGZvciBzdmcgKi9cbiAgY29uc3QgbWFyZ2luID0ge1xuICAgIHRvcDogMTUsXG4gICAgYm90dG9tOiA0MCxcbiAgICBsZWZ0OiAwLFxuICAgIHJpZ2h0OiAwXG4gIH07XG4gIGNvbnN0IHdpZHRoID0gcGFyZW50V2lkdGggLSBtYXJnaW4ubGVmdCAtIG1hcmdpbi5yaWdodDtcbiAgY29uc3QgaGVpZ2h0ID0gcGFyZW50SGVpZ2h0IC0gbWFyZ2luLnRvcCAtIG1hcmdpbi5ib3R0b207XG5cbiAgLyoqIERlZmluZSBhY2Nlc3NvcnMgYW5kIHZhbHVlcyB0byBiZSBwYXNzZWQgdG8gb3VyIHNoYXBlc1xuICAgKi9cblxuICBjb25zdCB4ID0gZCA9PiBuZXcgRGF0ZShkLnRpbWUpO1xuICBjb25zdCB5ID0gZCA9PiBkLnByaWNlO1xuXG4gIGNvbnN0IGZpcnN0UG9pbnQgPSBkYXRhWzBdO1xuICBjb25zdCBjdXJyZW50UG9pbnQgPSBkYXRhW2RhdGEubGVuZ3RoIC0gMV07XG5cbiAgY29uc3QgbWluUHJpY2UgPSBNYXRoLm1pbiguLi5kYXRhLm1hcCh5KSk7XG4gIGNvbnN0IG1heFByaWNlID0gTWF0aC5tYXgoLi4uZGF0YS5tYXAoeSkpO1xuICBjb25zdCBtYXhQcmljZURhdGEgPSBbXG4gICAgeyB0aW1lOiB4KGZpcnN0UG9pbnQpLCBwcmljZTogbWF4UHJpY2UgfSxcbiAgICB7IHRpbWU6IHgoY3VycmVudFBvaW50KSwgcHJpY2U6IG1heFByaWNlIH1cbiAgXTtcblxuICBjb25zdCBtaW5QcmljZURhdGEgPSBbXG4gICAgeyB0aW1lOiB4KGZpcnN0UG9pbnQpLCBwcmljZTogbWluUHJpY2UgfSxcbiAgICB7IHRpbWU6IHgoY3VycmVudFBvaW50KSwgcHJpY2U6IG1pblByaWNlIH1cbiAgXTtcblxuICBjb25zdCB4U2NhbGUgPSBzY2FsZVRpbWUoe1xuICAgIHJhbmdlOiBbMCwgd2lkdGhdLFxuICAgIGRvbWFpbjogW01hdGgubWluKC4uLmRhdGEubWFwKHgpKSwgTWF0aC5tYXgoLi4uZGF0YS5tYXAoeCkpXVxuICB9KTtcbiAgLyoqIGRlZmluZXMgdGhlIHNjYWxlIG9mIGEgeSBheGlzIGxpbmUgKi9cbiAgY29uc3QgeVNjYWxlID0gc2NhbGVMaW5lYXIoe1xuICAgIHJhbmdlOiBbaGVpZ2h0LCAwXSxcbiAgICBkb21haW46IFttaW5QcmljZSwgbWF4UHJpY2VdXG4gIH0pO1xuXG4gIC8vIENvbnNvbGUubG9nKHhTY2FsZS5kb21haW4oKSk7XG4gIC8vIGNvbnNvbGUubG9nKHlTY2FsZS5kb21haW4oKSk7XG5cbiAgLyogZW5kIGFjY2Vzc29yIHZhbHVlcyAqL1xuICAvLyAgIGNhbGwgPExpbmVQYXRoLCBwYXNzIGluIHRoZSBkYXRhLCB4U2NhbGUsIHlTY2FsZSBkb21haW4gbWFwcGVycyxcbiAgLy8gIGFuZCB4IGFuZCB5IGFjY2Vzc29yc1xuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8c3ZnIHdpZHRoPXt3aWR0aH0gaGVpZ2h0PXtoZWlnaHR9PlxuICAgICAgICA8QXhpc0JvdHRvbSBkYXRhPXtkYXRhfSBzY2FsZT17eFNjYWxlfSB4PXt4fSAvPlxuICAgICAgICA8TGluZWFyR3JhZGllbnRcbiAgICAgICAgICBpZD1cImFyZWEtZmlsbFwiXG4gICAgICAgICAgZnJvbT1cIiM0NmEyYjRcIlxuICAgICAgICAgIHRvPVwiIzQ2YTJiNFwiXG4gICAgICAgICAgZnJvbU9wYWNpdHk9ezAuM31cbiAgICAgICAgICB0b09wYWNpdHk9ezB9XG4gICAgICAgIC8+XG4gICAgICAgIDxNYXhQcmljZVxuICAgICAgICAgIGRhdGE9e21heFByaWNlRGF0YX1cbiAgICAgICAgICB5U2NhbGU9e3lTY2FsZX1cbiAgICAgICAgICB4U2NhbGU9e3hTY2FsZX1cbiAgICAgICAgICB4PXt4fVxuICAgICAgICAgIHk9e3l9XG4gICAgICAgICAgbGFiZWw9e2Zvcm1hdFByaWNlKG1heFByaWNlKX1cbiAgICAgICAgICB5VGV4dD17eVNjYWxlKG1heFByaWNlKX1cbiAgICAgICAgLz5cbiAgICAgICAgPE1pblByaWNlXG4gICAgICAgICAgZGF0YT17bWluUHJpY2VEYXRhfVxuICAgICAgICAgIHlTY2FsZT17eVNjYWxlfVxuICAgICAgICAgIHhTY2FsZT17eFNjYWxlfVxuICAgICAgICAgIHg9e3h9XG4gICAgICAgICAgeT17eX1cbiAgICAgICAgICBsYWJlbD17Zm9ybWF0UHJpY2UobWluUHJpY2UpfVxuICAgICAgICAgIHlUZXh0PXt5U2NhbGUobWluUHJpY2UpfVxuICAgICAgICAvPlxuICAgICAgICA8QXJlYUNsb3NlZFxuICAgICAgICAgIGRhdGE9e2RhdGF9XG4gICAgICAgICAgeVNjYWxlPXt5U2NhbGV9XG4gICAgICAgICAgeFNjYWxlPXt4U2NhbGV9XG4gICAgICAgICAgeD17eH1cbiAgICAgICAgICB5PXt5fVxuICAgICAgICAgIGZpbGw9XCJ1cmwoI2FyZWEtZmlsbClcIlxuICAgICAgICAgIHN0cm9rZT1cInRyYW5zcGFyZW50XCJcbiAgICAgICAgLz5cbiAgICAgICAgPExpbmVQYXRoIGRhdGE9e2RhdGF9IHlTY2FsZT17eVNjYWxlfSB4U2NhbGU9e3hTY2FsZX0geD17eH0geT17eX0gLz5cbiAgICAgIDwvc3ZnPlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoUGFyZW50U2l6ZShDaGFydCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL2NoYXJ0LmpzIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0ge1xuICB0b3A6ICd0b3AnLFxuICBsZWZ0OiAnbGVmdCcsXG4gIHJpZ2h0OiAncmlnaHQnLFxuICBib3R0b206ICdib3R0b20nXG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL0B2eC9heGlzL2J1aWxkL2NvbnN0YW50cy9vcmllbnRhdGlvbi5qc1xuLy8gbW9kdWxlIGlkID0gNjU3XG4vLyBtb2R1bGUgY2h1bmtzID0gNSIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gQXhpcztcblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX3Byb3BUeXBlcyA9IHJlcXVpcmUoJ3Byb3AtdHlwZXMnKTtcblxudmFyIF9wcm9wVHlwZXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcHJvcFR5cGVzKTtcblxudmFyIF9jbGFzc25hbWVzID0gcmVxdWlyZSgnY2xhc3NuYW1lcycpO1xuXG52YXIgX2NsYXNzbmFtZXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY2xhc3NuYW1lcyk7XG5cbnZhciBfc2hhcGUgPSByZXF1aXJlKCdAdngvc2hhcGUnKTtcblxudmFyIF9wb2ludCA9IHJlcXVpcmUoJ0B2eC9wb2ludCcpO1xuXG52YXIgX2dyb3VwID0gcmVxdWlyZSgnQHZ4L2dyb3VwJyk7XG5cbnZhciBfY2VudGVyID0gcmVxdWlyZSgnLi4vdXRpbHMvY2VudGVyJyk7XG5cbnZhciBfY2VudGVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NlbnRlcik7XG5cbnZhciBfaWRlbnRpdHkgPSByZXF1aXJlKCcuLi91dGlscy9pZGVudGl0eScpO1xuXG52YXIgX2lkZW50aXR5MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2lkZW50aXR5KTtcblxudmFyIF9sYWJlbFRyYW5zZm9ybSA9IHJlcXVpcmUoJy4uL3V0aWxzL2xhYmVsVHJhbnNmb3JtJyk7XG5cbnZhciBfbGFiZWxUcmFuc2Zvcm0yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfbGFiZWxUcmFuc2Zvcm0pO1xuXG52YXIgX29yaWVudGF0aW9uID0gcmVxdWlyZSgnLi4vY29uc3RhbnRzL29yaWVudGF0aW9uJyk7XG5cbnZhciBfb3JpZW50YXRpb24yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfb3JpZW50YXRpb24pO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG52YXIgcHJvcFR5cGVzID0ge1xuICBheGlzQ2xhc3NOYW1lOiBfcHJvcFR5cGVzMi5kZWZhdWx0LnN0cmluZyxcbiAgYXhpc0xpbmVDbGFzc05hbWU6IF9wcm9wVHlwZXMyLmRlZmF1bHQuc3RyaW5nLFxuICBoaWRlQXhpc0xpbmU6IF9wcm9wVHlwZXMyLmRlZmF1bHQuYm9vbCxcbiAgaGlkZVRpY2tzOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmJvb2wsXG4gIGhpZGVaZXJvOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmJvb2wsXG4gIGxhYmVsOiBfcHJvcFR5cGVzMi5kZWZhdWx0LnN0cmluZyxcbiAgbGFiZWxDbGFzc05hbWU6IF9wcm9wVHlwZXMyLmRlZmF1bHQuc3RyaW5nLFxuICBsYWJlbE9mZnNldDogX3Byb3BUeXBlczIuZGVmYXVsdC5udW1iZXIsXG4gIGxhYmVsUHJvcHM6IF9wcm9wVHlwZXMyLmRlZmF1bHQub2JqZWN0LFxuICBsZWZ0OiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm51bWJlcixcbiAgbnVtVGlja3M6IF9wcm9wVHlwZXMyLmRlZmF1bHQubnVtYmVyLFxuICBvcmllbnRhdGlvbjogX3Byb3BUeXBlczIuZGVmYXVsdC5vbmVPZihbX29yaWVudGF0aW9uMi5kZWZhdWx0LnRvcCwgX29yaWVudGF0aW9uMi5kZWZhdWx0LnJpZ2h0LCBfb3JpZW50YXRpb24yLmRlZmF1bHQuYm90dG9tLCBfb3JpZW50YXRpb24yLmRlZmF1bHQubGVmdF0pLFxuICByYW5nZVBhZGRpbmc6IF9wcm9wVHlwZXMyLmRlZmF1bHQubnVtYmVyLFxuICBzY2FsZTogX3Byb3BUeXBlczIuZGVmYXVsdC5mdW5jLmlzUmVxdWlyZWQsXG4gIHN0cm9rZTogX3Byb3BUeXBlczIuZGVmYXVsdC5zdHJpbmcsXG4gIHN0cm9rZVdpZHRoOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm51bWJlcixcbiAgc3Ryb2tlRGFzaGFycmF5OiBfcHJvcFR5cGVzMi5kZWZhdWx0LnN0cmluZyxcbiAgdGlja0NsYXNzTmFtZTogX3Byb3BUeXBlczIuZGVmYXVsdC5zdHJpbmcsXG4gIHRpY2tGb3JtYXQ6IF9wcm9wVHlwZXMyLmRlZmF1bHQuZnVuYyxcbiAgdGlja0xhYmVsUHJvcHM6IF9wcm9wVHlwZXMyLmRlZmF1bHQuZnVuYyxcbiAgdGlja0xlbmd0aDogX3Byb3BUeXBlczIuZGVmYXVsdC5udW1iZXIsXG4gIHRpY2tTdHJva2U6IF9wcm9wVHlwZXMyLmRlZmF1bHQuc3RyaW5nLFxuICB0aWNrVHJhbnNmb3JtOiBfcHJvcFR5cGVzMi5kZWZhdWx0LnN0cmluZyxcbiAgdGlja1ZhbHVlczogX3Byb3BUeXBlczIuZGVmYXVsdC5hcnJheSxcbiAgdG9wOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm51bWJlcixcbiAgY2hpbGRyZW46IF9wcm9wVHlwZXMyLmRlZmF1bHQuZnVuY1xufTtcblxuZnVuY3Rpb24gQXhpcyhfcmVmKSB7XG4gIHZhciBjaGlsZHJlbiA9IF9yZWYuY2hpbGRyZW4sXG4gICAgICBheGlzQ2xhc3NOYW1lID0gX3JlZi5heGlzQ2xhc3NOYW1lLFxuICAgICAgYXhpc0xpbmVDbGFzc05hbWUgPSBfcmVmLmF4aXNMaW5lQ2xhc3NOYW1lLFxuICAgICAgX3JlZiRoaWRlQXhpc0xpbmUgPSBfcmVmLmhpZGVBeGlzTGluZSxcbiAgICAgIGhpZGVBeGlzTGluZSA9IF9yZWYkaGlkZUF4aXNMaW5lID09PSB1bmRlZmluZWQgPyBmYWxzZSA6IF9yZWYkaGlkZUF4aXNMaW5lLFxuICAgICAgX3JlZiRoaWRlVGlja3MgPSBfcmVmLmhpZGVUaWNrcyxcbiAgICAgIGhpZGVUaWNrcyA9IF9yZWYkaGlkZVRpY2tzID09PSB1bmRlZmluZWQgPyBmYWxzZSA6IF9yZWYkaGlkZVRpY2tzLFxuICAgICAgX3JlZiRoaWRlWmVybyA9IF9yZWYuaGlkZVplcm8sXG4gICAgICBoaWRlWmVybyA9IF9yZWYkaGlkZVplcm8gPT09IHVuZGVmaW5lZCA/IGZhbHNlIDogX3JlZiRoaWRlWmVybyxcbiAgICAgIF9yZWYkbGFiZWwgPSBfcmVmLmxhYmVsLFxuICAgICAgbGFiZWwgPSBfcmVmJGxhYmVsID09PSB1bmRlZmluZWQgPyAnJyA6IF9yZWYkbGFiZWwsXG4gICAgICBsYWJlbENsYXNzTmFtZSA9IF9yZWYubGFiZWxDbGFzc05hbWUsXG4gICAgICBfcmVmJGxhYmVsT2Zmc2V0ID0gX3JlZi5sYWJlbE9mZnNldCxcbiAgICAgIGxhYmVsT2Zmc2V0ID0gX3JlZiRsYWJlbE9mZnNldCA9PT0gdW5kZWZpbmVkID8gMTQgOiBfcmVmJGxhYmVsT2Zmc2V0LFxuICAgICAgX3JlZiRsYWJlbFByb3BzID0gX3JlZi5sYWJlbFByb3BzLFxuICAgICAgbGFiZWxQcm9wcyA9IF9yZWYkbGFiZWxQcm9wcyA9PT0gdW5kZWZpbmVkID8ge1xuICAgIHRleHRBbmNob3I6ICdtaWRkbGUnLFxuICAgIGZvbnRGYW1pbHk6ICdBcmlhbCcsXG4gICAgZm9udFNpemU6IDEwLFxuICAgIGZpbGw6ICdibGFjaydcbiAgfSA6IF9yZWYkbGFiZWxQcm9wcyxcbiAgICAgIF9yZWYkbGVmdCA9IF9yZWYubGVmdCxcbiAgICAgIGxlZnQgPSBfcmVmJGxlZnQgPT09IHVuZGVmaW5lZCA/IDAgOiBfcmVmJGxlZnQsXG4gICAgICBfcmVmJG51bVRpY2tzID0gX3JlZi5udW1UaWNrcyxcbiAgICAgIG51bVRpY2tzID0gX3JlZiRudW1UaWNrcyA9PT0gdW5kZWZpbmVkID8gMTAgOiBfcmVmJG51bVRpY2tzLFxuICAgICAgX3JlZiRvcmllbnRhdGlvbiA9IF9yZWYub3JpZW50YXRpb24sXG4gICAgICBvcmllbnRhdGlvbiA9IF9yZWYkb3JpZW50YXRpb24gPT09IHVuZGVmaW5lZCA/IF9vcmllbnRhdGlvbjIuZGVmYXVsdC5ib3R0b20gOiBfcmVmJG9yaWVudGF0aW9uLFxuICAgICAgX3JlZiRyYW5nZVBhZGRpbmcgPSBfcmVmLnJhbmdlUGFkZGluZyxcbiAgICAgIHJhbmdlUGFkZGluZyA9IF9yZWYkcmFuZ2VQYWRkaW5nID09PSB1bmRlZmluZWQgPyAwIDogX3JlZiRyYW5nZVBhZGRpbmcsXG4gICAgICBzY2FsZSA9IF9yZWYuc2NhbGUsXG4gICAgICBfcmVmJHN0cm9rZSA9IF9yZWYuc3Ryb2tlLFxuICAgICAgc3Ryb2tlID0gX3JlZiRzdHJva2UgPT09IHVuZGVmaW5lZCA/ICdibGFjaycgOiBfcmVmJHN0cm9rZSxcbiAgICAgIF9yZWYkc3Ryb2tlV2lkdGggPSBfcmVmLnN0cm9rZVdpZHRoLFxuICAgICAgc3Ryb2tlV2lkdGggPSBfcmVmJHN0cm9rZVdpZHRoID09PSB1bmRlZmluZWQgPyAxIDogX3JlZiRzdHJva2VXaWR0aCxcbiAgICAgIHN0cm9rZURhc2hhcnJheSA9IF9yZWYuc3Ryb2tlRGFzaGFycmF5LFxuICAgICAgdGlja0NsYXNzTmFtZSA9IF9yZWYudGlja0NsYXNzTmFtZSxcbiAgICAgIHRpY2tGb3JtYXQgPSBfcmVmLnRpY2tGb3JtYXQsXG4gICAgICBfcmVmJHRpY2tMYWJlbFByb3BzID0gX3JlZi50aWNrTGFiZWxQcm9wcyxcbiAgICAgIHRpY2tMYWJlbFByb3BzID0gX3JlZiR0aWNrTGFiZWxQcm9wcyA9PT0gdW5kZWZpbmVkID8gZnVuY3Rpb24gKHRpY2tWYWx1ZSwgaW5kZXgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdGV4dEFuY2hvcjogJ21pZGRsZScsXG4gICAgICBmb250RmFtaWx5OiAnQXJpYWwnLFxuICAgICAgZm9udFNpemU6IDEwLFxuICAgICAgZmlsbDogJ2JsYWNrJ1xuICAgIH07XG4gIH0gOiBfcmVmJHRpY2tMYWJlbFByb3BzLFxuICAgICAgX3JlZiR0aWNrTGVuZ3RoID0gX3JlZi50aWNrTGVuZ3RoLFxuICAgICAgdGlja0xlbmd0aCA9IF9yZWYkdGlja0xlbmd0aCA9PT0gdW5kZWZpbmVkID8gOCA6IF9yZWYkdGlja0xlbmd0aCxcbiAgICAgIF9yZWYkdGlja1N0cm9rZSA9IF9yZWYudGlja1N0cm9rZSxcbiAgICAgIHRpY2tTdHJva2UgPSBfcmVmJHRpY2tTdHJva2UgPT09IHVuZGVmaW5lZCA/ICdibGFjaycgOiBfcmVmJHRpY2tTdHJva2UsXG4gICAgICB0aWNrVHJhbnNmb3JtID0gX3JlZi50aWNrVHJhbnNmb3JtLFxuICAgICAgdGlja1ZhbHVlcyA9IF9yZWYudGlja1ZhbHVlcyxcbiAgICAgIF9yZWYkdG9wID0gX3JlZi50b3AsXG4gICAgICB0b3AgPSBfcmVmJHRvcCA9PT0gdW5kZWZpbmVkID8gMCA6IF9yZWYkdG9wO1xuXG4gIHZhciB2YWx1ZXMgPSBzY2FsZS50aWNrcyA/IHNjYWxlLnRpY2tzKG51bVRpY2tzKSA6IHNjYWxlLmRvbWFpbigpO1xuICBpZiAodGlja1ZhbHVlcykgdmFsdWVzID0gdGlja1ZhbHVlcztcbiAgdmFyIGZvcm1hdCA9IHNjYWxlLnRpY2tGb3JtYXQgPyBzY2FsZS50aWNrRm9ybWF0KCkgOiBfaWRlbnRpdHkyLmRlZmF1bHQ7XG4gIGlmICh0aWNrRm9ybWF0KSBmb3JtYXQgPSB0aWNrRm9ybWF0O1xuXG4gIHZhciByYW5nZSA9IHNjYWxlLnJhbmdlKCk7XG4gIHZhciByYW5nZTAgPSByYW5nZVswXSArIDAuNSAtIHJhbmdlUGFkZGluZztcbiAgdmFyIHJhbmdlMSA9IHJhbmdlW3JhbmdlLmxlbmd0aCAtIDFdICsgMC41ICsgcmFuZ2VQYWRkaW5nO1xuXG4gIHZhciBob3Jpem9udGFsID0gb3JpZW50YXRpb24gIT09IF9vcmllbnRhdGlvbjIuZGVmYXVsdC5sZWZ0ICYmIG9yaWVudGF0aW9uICE9PSBfb3JpZW50YXRpb24yLmRlZmF1bHQucmlnaHQ7XG4gIHZhciBpc0xlZnQgPSBvcmllbnRhdGlvbiA9PT0gX29yaWVudGF0aW9uMi5kZWZhdWx0LmxlZnQ7XG4gIHZhciBpc1RvcCA9IG9yaWVudGF0aW9uID09PSBfb3JpZW50YXRpb24yLmRlZmF1bHQudG9wO1xuICB2YXIgdGlja1NpZ24gPSBpc0xlZnQgfHwgaXNUb3AgPyAtMSA6IDE7XG5cbiAgdmFyIHBvc2l0aW9uID0gKHNjYWxlLmJhbmR3aWR0aCA/IF9jZW50ZXIyLmRlZmF1bHQgOiBfaWRlbnRpdHkyLmRlZmF1bHQpKHNjYWxlLmNvcHkoKSk7XG5cbiAgdmFyIGF4aXNGcm9tUG9pbnQgPSBuZXcgX3BvaW50LlBvaW50KHtcbiAgICB4OiBob3Jpem9udGFsID8gcmFuZ2UwIDogMCxcbiAgICB5OiBob3Jpem9udGFsID8gMCA6IHJhbmdlMFxuICB9KTtcbiAgdmFyIGF4aXNUb1BvaW50ID0gbmV3IF9wb2ludC5Qb2ludCh7XG4gICAgeDogaG9yaXpvbnRhbCA/IHJhbmdlMSA6IDAsXG4gICAgeTogaG9yaXpvbnRhbCA/IDAgOiByYW5nZTFcbiAgfSk7XG5cbiAgdmFyIHRpY2tMYWJlbEZvbnRTaXplID0gMTA7IC8vIHRyYWNrIHRoZSBtYXggdGljayBsYWJlbCBzaXplIHRvIGNvbXB1dGUgbGFiZWwgb2Zmc2V0XG5cbiAgaWYgKCEhY2hpbGRyZW4pIHtcbiAgICByZXR1cm4gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICBfZ3JvdXAuR3JvdXAsXG4gICAgICB7XG4gICAgICAgIGNsYXNzTmFtZTogKDAsIF9jbGFzc25hbWVzMi5kZWZhdWx0KSgndngtYXhpcycsIGF4aXNDbGFzc05hbWUpLFxuICAgICAgICB0b3A6IHRvcCxcbiAgICAgICAgbGVmdDogbGVmdFxuICAgICAgfSxcbiAgICAgIGNoaWxkcmVuKHtcbiAgICAgICAgYXhpc0Zyb21Qb2ludDogYXhpc0Zyb21Qb2ludCxcbiAgICAgICAgYXhpc1RvUG9pbnQ6IGF4aXNUb1BvaW50LFxuICAgICAgICBob3Jpem9udGFsOiBob3Jpem9udGFsLFxuICAgICAgICB0aWNrU2lnbjogdGlja1NpZ24sXG4gICAgICAgIG51bVRpY2tzOiBudW1UaWNrcyxcbiAgICAgICAgbGFiZWw6IGxhYmVsLFxuICAgICAgICByYW5nZVBhZGRpbmc6IHJhbmdlUGFkZGluZyxcbiAgICAgICAgdGlja0xlbmd0aDogdGlja0xlbmd0aCxcbiAgICAgICAgdGlja0Zvcm1hdDogZm9ybWF0LFxuICAgICAgICB0aWNrUG9zaXRpb246IHBvc2l0aW9uLFxuICAgICAgICB0aWNrczogdmFsdWVzLm1hcChmdW5jdGlvbiAodmFsdWUsIGluZGV4KSB7XG4gICAgICAgICAgdmFyIGZyb20gPSBuZXcgX3BvaW50LlBvaW50KHtcbiAgICAgICAgICAgIHg6IGhvcml6b250YWwgPyBwb3NpdGlvbih2YWx1ZSkgOiAwLFxuICAgICAgICAgICAgeTogaG9yaXpvbnRhbCA/IDAgOiBwb3NpdGlvbih2YWx1ZSlcbiAgICAgICAgICB9KTtcbiAgICAgICAgICB2YXIgdG8gPSBuZXcgX3BvaW50LlBvaW50KHtcbiAgICAgICAgICAgIHg6IGhvcml6b250YWwgPyBwb3NpdGlvbih2YWx1ZSkgOiB0aWNrU2lnbiAqIHRpY2tMZW5ndGgsXG4gICAgICAgICAgICB5OiBob3Jpem9udGFsID8gdGlja0xlbmd0aCAqIHRpY2tTaWduIDogcG9zaXRpb24odmFsdWUpXG4gICAgICAgICAgfSk7XG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgICAgICAgIGluZGV4OiBpbmRleCxcbiAgICAgICAgICAgIGZyb206IGZyb20sXG4gICAgICAgICAgICB0bzogdG8sXG4gICAgICAgICAgICBmb3JtYXR0ZWRWYWx1ZTogZm9ybWF0KHZhbHVlLCBpbmRleClcbiAgICAgICAgICB9O1xuICAgICAgICB9KVxuICAgICAgfSlcbiAgICApO1xuICB9XG5cbiAgcmV0dXJuIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgIF9ncm91cC5Hcm91cCxcbiAgICB7XG4gICAgICBjbGFzc05hbWU6ICgwLCBfY2xhc3NuYW1lczIuZGVmYXVsdCkoJ3Z4LWF4aXMnLCBheGlzQ2xhc3NOYW1lKSxcbiAgICAgIHRvcDogdG9wLFxuICAgICAgbGVmdDogbGVmdFxuICAgIH0sXG4gICAgdmFsdWVzLm1hcChmdW5jdGlvbiAodmFsLCBpbmRleCkge1xuICAgICAgaWYgKGhpZGVaZXJvICYmIHZhbCA9PT0gMCkgcmV0dXJuIG51bGw7XG5cbiAgICAgIHZhciB0aWNrRnJvbVBvaW50ID0gbmV3IF9wb2ludC5Qb2ludCh7XG4gICAgICAgIHg6IGhvcml6b250YWwgPyBwb3NpdGlvbih2YWwpIDogMCxcbiAgICAgICAgeTogaG9yaXpvbnRhbCA/IDAgOiBwb3NpdGlvbih2YWwpXG4gICAgICB9KTtcbiAgICAgIHZhciB0aWNrVG9Qb2ludCA9IG5ldyBfcG9pbnQuUG9pbnQoe1xuICAgICAgICB4OiBob3Jpem9udGFsID8gcG9zaXRpb24odmFsKSA6IHRpY2tTaWduICogdGlja0xlbmd0aCxcbiAgICAgICAgeTogaG9yaXpvbnRhbCA/IHRpY2tMZW5ndGggKiB0aWNrU2lnbiA6IHBvc2l0aW9uKHZhbClcbiAgICAgIH0pO1xuXG4gICAgICB2YXIgdGlja0xhYmVsUHJvcHNPYmogPSB0aWNrTGFiZWxQcm9wcyh2YWwsIGluZGV4KTtcbiAgICAgIHRpY2tMYWJlbEZvbnRTaXplID0gTWF0aC5tYXgodGlja0xhYmVsRm9udFNpemUsIHRpY2tMYWJlbFByb3BzT2JqLmZvbnRTaXplIHx8IDApO1xuXG4gICAgICByZXR1cm4gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgIF9ncm91cC5Hcm91cCxcbiAgICAgICAge1xuICAgICAgICAgIGtleTogJ3Z4LXRpY2stJyArIHZhbCArICctJyArIGluZGV4LFxuICAgICAgICAgIGNsYXNzTmFtZTogKDAsIF9jbGFzc25hbWVzMi5kZWZhdWx0KSgndngtYXhpcy10aWNrJywgdGlja0NsYXNzTmFtZSksXG4gICAgICAgICAgdHJhbnNmb3JtOiB0aWNrVHJhbnNmb3JtXG4gICAgICAgIH0sXG4gICAgICAgICFoaWRlVGlja3MgJiYgX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoX3NoYXBlLkxpbmUsIHtcbiAgICAgICAgICBmcm9tOiB0aWNrRnJvbVBvaW50LFxuICAgICAgICAgIHRvOiB0aWNrVG9Qb2ludCxcbiAgICAgICAgICBzdHJva2U6IHRpY2tTdHJva2VcbiAgICAgICAgfSksXG4gICAgICAgIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICd0ZXh0JyxcbiAgICAgICAgICBfZXh0ZW5kcyh7XG4gICAgICAgICAgICB4OiB0aWNrVG9Qb2ludC54LFxuICAgICAgICAgICAgeTogdGlja1RvUG9pbnQueSArIChob3Jpem9udGFsICYmICFpc1RvcCA/IHRpY2tMYWJlbEZvbnRTaXplIDogMClcbiAgICAgICAgICB9LCB0aWNrTGFiZWxQcm9wc09iaiksXG4gICAgICAgICAgZm9ybWF0KHZhbCwgaW5kZXgpXG4gICAgICAgIClcbiAgICAgICk7XG4gICAgfSksXG4gICAgIWhpZGVBeGlzTGluZSAmJiBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChfc2hhcGUuTGluZSwge1xuICAgICAgY2xhc3NOYW1lOiAoMCwgX2NsYXNzbmFtZXMyLmRlZmF1bHQpKCd2eC1heGlzLWxpbmUnLCBheGlzTGluZUNsYXNzTmFtZSksXG4gICAgICBmcm9tOiBheGlzRnJvbVBvaW50LFxuICAgICAgdG86IGF4aXNUb1BvaW50LFxuICAgICAgc3Ryb2tlOiBzdHJva2UsXG4gICAgICBzdHJva2VXaWR0aDogc3Ryb2tlV2lkdGgsXG4gICAgICBzdHJva2VEYXNoYXJyYXk6IHN0cm9rZURhc2hhcnJheVxuICAgIH0pLFxuICAgIGxhYmVsICYmIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgJ3RleHQnLFxuICAgICAgX2V4dGVuZHMoe1xuICAgICAgICBjbGFzc05hbWU6ICgwLCBfY2xhc3NuYW1lczIuZGVmYXVsdCkoJ3Z4LWF4aXMtbGFiZWwnLCBsYWJlbENsYXNzTmFtZSlcbiAgICAgIH0sICgwLCBfbGFiZWxUcmFuc2Zvcm0yLmRlZmF1bHQpKHtcbiAgICAgICAgbGFiZWxPZmZzZXQ6IGxhYmVsT2Zmc2V0LFxuICAgICAgICBsYWJlbFByb3BzOiBsYWJlbFByb3BzLFxuICAgICAgICBvcmllbnRhdGlvbjogb3JpZW50YXRpb24sXG4gICAgICAgIHJhbmdlOiByYW5nZSxcbiAgICAgICAgdGlja0xhYmVsRm9udFNpemU6IHRpY2tMYWJlbEZvbnRTaXplLFxuICAgICAgICB0aWNrTGVuZ3RoOiB0aWNrTGVuZ3RoXG4gICAgICB9KSwgbGFiZWxQcm9wcyksXG4gICAgICBsYWJlbFxuICAgIClcbiAgKTtcbn1cblxuQXhpcy5wcm9wVHlwZXMgPSBwcm9wVHlwZXM7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvQHZ4L2F4aXMvYnVpbGQvYXhpcy9BeGlzLmpzXG4vLyBtb2R1bGUgaWQgPSA2NThcbi8vIG1vZHVsZSBjaHVua3MgPSA1IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX0F4aXMgPSByZXF1aXJlKCcuL2F4aXMvQXhpcycpO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ0F4aXMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgIHJldHVybiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9BeGlzKS5kZWZhdWx0O1xuICB9XG59KTtcblxudmFyIF9BeGlzTGVmdCA9IHJlcXVpcmUoJy4vYXhpcy9BeGlzTGVmdCcpO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ0F4aXNMZWZ0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICByZXR1cm4gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfQXhpc0xlZnQpLmRlZmF1bHQ7XG4gIH1cbn0pO1xuXG52YXIgX0F4aXNSaWdodCA9IHJlcXVpcmUoJy4vYXhpcy9BeGlzUmlnaHQnKTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdBeGlzUmlnaHQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgIHJldHVybiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9BeGlzUmlnaHQpLmRlZmF1bHQ7XG4gIH1cbn0pO1xuXG52YXIgX0F4aXNUb3AgPSByZXF1aXJlKCcuL2F4aXMvQXhpc1RvcCcpO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ0F4aXNUb3AnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgIHJldHVybiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9BeGlzVG9wKS5kZWZhdWx0O1xuICB9XG59KTtcblxudmFyIF9BeGlzQm90dG9tID0gcmVxdWlyZSgnLi9heGlzL0F4aXNCb3R0b20nKTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdBeGlzQm90dG9tJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICByZXR1cm4gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfQXhpc0JvdHRvbSkuZGVmYXVsdDtcbiAgfVxufSk7XG5cbnZhciBfb3JpZW50YXRpb24gPSByZXF1aXJlKCcuL2NvbnN0YW50cy9vcmllbnRhdGlvbicpO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ09yaWVudGF0aW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICByZXR1cm4gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfb3JpZW50YXRpb24pLmRlZmF1bHQ7XG4gIH1cbn0pO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL0B2eC9heGlzL2J1aWxkL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSA2NTlcbi8vIG1vZHVsZSBjaHVua3MgPSA1IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSBjZW50ZXI7XG5mdW5jdGlvbiBjZW50ZXIoc2NhbGUpIHtcbiAgdmFyIG9mZnNldCA9IHNjYWxlLmJhbmR3aWR0aCgpIC8gMjtcbiAgaWYgKHNjYWxlLnJvdW5kKCkpIG9mZnNldCA9IE1hdGgucm91bmQob2Zmc2V0KTtcbiAgcmV0dXJuIGZ1bmN0aW9uIChkKSB7XG4gICAgcmV0dXJuIHNjYWxlKGQpICsgb2Zmc2V0O1xuICB9O1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL0B2eC9heGlzL2J1aWxkL3V0aWxzL2NlbnRlci5qc1xuLy8gbW9kdWxlIGlkID0gNjYwXG4vLyBtb2R1bGUgY2h1bmtzID0gNSIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gaWRlbnRpdHk7XG5mdW5jdGlvbiBpZGVudGl0eSh4KSB7XG4gIHJldHVybiB4O1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL0B2eC9heGlzL2J1aWxkL3V0aWxzL2lkZW50aXR5LmpzXG4vLyBtb2R1bGUgaWQgPSA2NjFcbi8vIG1vZHVsZSBjaHVua3MgPSA1IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gbGFiZWxUcmFuc2Zvcm07XG5cbnZhciBfb3JpZW50YXRpb24gPSByZXF1aXJlKCcuLi9jb25zdGFudHMvb3JpZW50YXRpb24nKTtcblxudmFyIF9vcmllbnRhdGlvbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9vcmllbnRhdGlvbik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF90b0NvbnN1bWFibGVBcnJheShhcnIpIHsgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgeyBmb3IgKHZhciBpID0gMCwgYXJyMiA9IEFycmF5KGFyci5sZW5ndGgpOyBpIDwgYXJyLmxlbmd0aDsgaSsrKSB7IGFycjJbaV0gPSBhcnJbaV07IH0gcmV0dXJuIGFycjI7IH0gZWxzZSB7IHJldHVybiBBcnJheS5mcm9tKGFycik7IH0gfVxuXG5mdW5jdGlvbiBsYWJlbFRyYW5zZm9ybShfcmVmKSB7XG4gIHZhciBsYWJlbE9mZnNldCA9IF9yZWYubGFiZWxPZmZzZXQsXG4gICAgICBsYWJlbFByb3BzID0gX3JlZi5sYWJlbFByb3BzLFxuICAgICAgb3JpZW50YXRpb24gPSBfcmVmLm9yaWVudGF0aW9uLFxuICAgICAgcmFuZ2UgPSBfcmVmLnJhbmdlLFxuICAgICAgdGlja0xhYmVsRm9udFNpemUgPSBfcmVmLnRpY2tMYWJlbEZvbnRTaXplLFxuICAgICAgdGlja0xlbmd0aCA9IF9yZWYudGlja0xlbmd0aDtcblxuICB2YXIgc2lnbiA9IG9yaWVudGF0aW9uID09PSBfb3JpZW50YXRpb24yLmRlZmF1bHQubGVmdCB8fCBvcmllbnRhdGlvbiA9PT0gX29yaWVudGF0aW9uMi5kZWZhdWx0LnRvcCA/IC0xIDogMTtcblxuICB2YXIgeCA9IHZvaWQgMCxcbiAgICAgIHkgPSB2b2lkIDAsXG4gICAgICB0cmFuc2Zvcm0gPSBudWxsO1xuICBpZiAob3JpZW50YXRpb24gPT09IF9vcmllbnRhdGlvbjIuZGVmYXVsdC50b3AgfHwgb3JpZW50YXRpb24gPT09IF9vcmllbnRhdGlvbjIuZGVmYXVsdC5ib3R0b20pIHtcbiAgICB4ID0gTWF0aC5tYXguYXBwbHkoTWF0aCwgX3RvQ29uc3VtYWJsZUFycmF5KHJhbmdlKSkgLyAyO1xuICAgIHkgPSBzaWduICogKHRpY2tMZW5ndGggKyBsYWJlbE9mZnNldCArIHRpY2tMYWJlbEZvbnRTaXplICsgKG9yaWVudGF0aW9uID09PSBfb3JpZW50YXRpb24yLmRlZmF1bHQuYm90dG9tID8gbGFiZWxQcm9wcy5mb250U2l6ZSA6IDApKTtcbiAgfSBlbHNlIHtcbiAgICB4ID0gc2lnbiAqIChNYXRoLm1heC5hcHBseShNYXRoLCBfdG9Db25zdW1hYmxlQXJyYXkocmFuZ2UpKSAvIDIpO1xuICAgIHkgPSAtKHRpY2tMZW5ndGggKyBsYWJlbE9mZnNldCk7XG4gICAgdHJhbnNmb3JtID0gJ3JvdGF0ZSgnICsgc2lnbiAqIDkwICsgJyknO1xuICB9XG5cbiAgcmV0dXJuIHsgeDogeCwgeTogeSwgdHJhbnNmb3JtOiB0cmFuc2Zvcm0gfTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9AdngvYXhpcy9idWlsZC91dGlscy9sYWJlbFRyYW5zZm9ybS5qc1xuLy8gbW9kdWxlIGlkID0gNjYyXG4vLyBtb2R1bGUgY2h1bmtzID0gNSIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IEF4aXNMZWZ0O1xuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfcHJvcFR5cGVzID0gcmVxdWlyZSgncHJvcC10eXBlcycpO1xuXG52YXIgX3Byb3BUeXBlczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wcm9wVHlwZXMpO1xuXG52YXIgX2NsYXNzbmFtZXMgPSByZXF1aXJlKCdjbGFzc25hbWVzJyk7XG5cbnZhciBfY2xhc3NuYW1lczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jbGFzc25hbWVzKTtcblxudmFyIF9BeGlzID0gcmVxdWlyZSgnLi9BeGlzJyk7XG5cbnZhciBfQXhpczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9BeGlzKTtcblxudmFyIF9vcmllbnRhdGlvbiA9IHJlcXVpcmUoJy4uL2NvbnN0YW50cy9vcmllbnRhdGlvbicpO1xuXG52YXIgX29yaWVudGF0aW9uMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX29yaWVudGF0aW9uKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxudmFyIHByb3BUeXBlcyA9IHtcbiAgYXhpc0NsYXNzTmFtZTogX3Byb3BUeXBlczIuZGVmYXVsdC5zdHJpbmcsXG4gIGF4aXNMaW5lQ2xhc3NOYW1lOiBfcHJvcFR5cGVzMi5kZWZhdWx0LnN0cmluZyxcbiAgaGlkZUF4aXNMaW5lOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmJvb2wsXG4gIGhpZGVUaWNrczogX3Byb3BUeXBlczIuZGVmYXVsdC5ib29sLFxuICBoaWRlWmVybzogX3Byb3BUeXBlczIuZGVmYXVsdC5ib29sLFxuICBsYWJlbDogX3Byb3BUeXBlczIuZGVmYXVsdC5zdHJpbmcsXG4gIGxhYmVsQ2xhc3NOYW1lOiBfcHJvcFR5cGVzMi5kZWZhdWx0LnN0cmluZyxcbiAgbGFiZWxPZmZzZXQ6IF9wcm9wVHlwZXMyLmRlZmF1bHQubnVtYmVyLFxuICBsYWJlbFByb3BzOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9iamVjdCxcbiAgbGVmdDogX3Byb3BUeXBlczIuZGVmYXVsdC5udW1iZXIsXG4gIG51bVRpY2tzOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm51bWJlcixcbiAgcmFuZ2VQYWRkaW5nOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm51bWJlcixcbiAgc2NhbGU6IF9wcm9wVHlwZXMyLmRlZmF1bHQuZnVuYy5pc1JlcXVpcmVkLFxuICBzdHJva2U6IF9wcm9wVHlwZXMyLmRlZmF1bHQuc3RyaW5nLFxuICBzdHJva2VXaWR0aDogX3Byb3BUeXBlczIuZGVmYXVsdC5udW1iZXIsXG4gIHN0cm9rZURhc2hhcnJheTogX3Byb3BUeXBlczIuZGVmYXVsdC5zdHJpbmcsXG4gIHRpY2tDbGFzc05hbWU6IF9wcm9wVHlwZXMyLmRlZmF1bHQuc3RyaW5nLFxuICB0aWNrRm9ybWF0OiBfcHJvcFR5cGVzMi5kZWZhdWx0LmZ1bmMsXG4gIHRpY2tMYWJlbFByb3BzOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmZ1bmMsXG4gIHRpY2tMZW5ndGg6IF9wcm9wVHlwZXMyLmRlZmF1bHQubnVtYmVyLFxuICB0aWNrU3Ryb2tlOiBfcHJvcFR5cGVzMi5kZWZhdWx0LnN0cmluZyxcbiAgdGlja1RyYW5zZm9ybTogX3Byb3BUeXBlczIuZGVmYXVsdC5zdHJpbmcsXG4gIHRpY2tWYWx1ZXM6IF9wcm9wVHlwZXMyLmRlZmF1bHQuYXJyYXksXG4gIHRvcDogX3Byb3BUeXBlczIuZGVmYXVsdC5udW1iZXIsXG4gIGNoaWxkcmVuOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmZ1bmNcbn07XG5cbmZ1bmN0aW9uIEF4aXNMZWZ0KF9yZWYpIHtcbiAgdmFyIGNoaWxkcmVuID0gX3JlZi5jaGlsZHJlbixcbiAgICAgIGF4aXNDbGFzc05hbWUgPSBfcmVmLmF4aXNDbGFzc05hbWUsXG4gICAgICBheGlzTGluZUNsYXNzTmFtZSA9IF9yZWYuYXhpc0xpbmVDbGFzc05hbWUsXG4gICAgICBoaWRlQXhpc0xpbmUgPSBfcmVmLmhpZGVBeGlzTGluZSxcbiAgICAgIGhpZGVUaWNrcyA9IF9yZWYuaGlkZVRpY2tzLFxuICAgICAgaGlkZVplcm8gPSBfcmVmLmhpZGVaZXJvLFxuICAgICAgbGFiZWwgPSBfcmVmLmxhYmVsLFxuICAgICAgbGFiZWxDbGFzc05hbWUgPSBfcmVmLmxhYmVsQ2xhc3NOYW1lLFxuICAgICAgX3JlZiRsYWJlbE9mZnNldCA9IF9yZWYubGFiZWxPZmZzZXQsXG4gICAgICBsYWJlbE9mZnNldCA9IF9yZWYkbGFiZWxPZmZzZXQgPT09IHVuZGVmaW5lZCA/IDM2IDogX3JlZiRsYWJlbE9mZnNldCxcbiAgICAgIGxhYmVsUHJvcHMgPSBfcmVmLmxhYmVsUHJvcHMsXG4gICAgICBsZWZ0ID0gX3JlZi5sZWZ0LFxuICAgICAgbnVtVGlja3MgPSBfcmVmLm51bVRpY2tzLFxuICAgICAgcmFuZ2VQYWRkaW5nID0gX3JlZi5yYW5nZVBhZGRpbmcsXG4gICAgICBzY2FsZSA9IF9yZWYuc2NhbGUsXG4gICAgICBzdHJva2UgPSBfcmVmLnN0cm9rZSxcbiAgICAgIHN0cm9rZVdpZHRoID0gX3JlZi5zdHJva2VXaWR0aCxcbiAgICAgIHN0cm9rZURhc2hhcnJheSA9IF9yZWYuc3Ryb2tlRGFzaGFycmF5LFxuICAgICAgdGlja0NsYXNzTmFtZSA9IF9yZWYudGlja0NsYXNzTmFtZSxcbiAgICAgIHRpY2tGb3JtYXQgPSBfcmVmLnRpY2tGb3JtYXQsXG4gICAgICBfcmVmJHRpY2tMYWJlbFByb3BzID0gX3JlZi50aWNrTGFiZWxQcm9wcyxcbiAgICAgIHRpY2tMYWJlbFByb3BzID0gX3JlZiR0aWNrTGFiZWxQcm9wcyA9PT0gdW5kZWZpbmVkID8gZnVuY3Rpb24gKF9yZWYyKSB7XG4gICAgdmFyIHRpY2sgPSBfcmVmMi50aWNrLFxuICAgICAgICBpbmRleCA9IF9yZWYyLmluZGV4O1xuICAgIHJldHVybiB7XG4gICAgICBkeDogJy0wLjI1ZW0nLFxuICAgICAgZHk6ICcwLjI1ZW0nLFxuICAgICAgZmlsbDogJ2JsYWNrJyxcbiAgICAgIGZvbnRGYW1pbHk6ICdBcmlhbCcsXG4gICAgICBmb250U2l6ZTogMTAsXG4gICAgICB0ZXh0QW5jaG9yOiAnZW5kJ1xuICAgIH07XG4gIH0gOiBfcmVmJHRpY2tMYWJlbFByb3BzLFxuICAgICAgX3JlZiR0aWNrTGVuZ3RoID0gX3JlZi50aWNrTGVuZ3RoLFxuICAgICAgdGlja0xlbmd0aCA9IF9yZWYkdGlja0xlbmd0aCA9PT0gdW5kZWZpbmVkID8gOCA6IF9yZWYkdGlja0xlbmd0aCxcbiAgICAgIHRpY2tTdHJva2UgPSBfcmVmLnRpY2tTdHJva2UsXG4gICAgICB0aWNrVHJhbnNmb3JtID0gX3JlZi50aWNrVHJhbnNmb3JtLFxuICAgICAgdGlja1ZhbHVlcyA9IF9yZWYudGlja1ZhbHVlcyxcbiAgICAgIHRvcCA9IF9yZWYudG9wO1xuXG4gIHJldHVybiBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChfQXhpczIuZGVmYXVsdCwge1xuICAgIGF4aXNDbGFzc05hbWU6ICgwLCBfY2xhc3NuYW1lczIuZGVmYXVsdCkoJ3Z4LWF4aXMtbGVmdCcsIGF4aXNDbGFzc05hbWUpLFxuICAgIGF4aXNMaW5lQ2xhc3NOYW1lOiBheGlzTGluZUNsYXNzTmFtZSxcbiAgICBoaWRlQXhpc0xpbmU6IGhpZGVBeGlzTGluZSxcbiAgICBoaWRlVGlja3M6IGhpZGVUaWNrcyxcbiAgICBoaWRlWmVybzogaGlkZVplcm8sXG4gICAgbGFiZWw6IGxhYmVsLFxuICAgIGxhYmVsQ2xhc3NOYW1lOiBsYWJlbENsYXNzTmFtZSxcbiAgICBsYWJlbE9mZnNldDogbGFiZWxPZmZzZXQsXG4gICAgbGFiZWxQcm9wczogbGFiZWxQcm9wcyxcbiAgICBsZWZ0OiBsZWZ0LFxuICAgIG51bVRpY2tzOiBudW1UaWNrcyxcbiAgICBvcmllbnRhdGlvbjogX29yaWVudGF0aW9uMi5kZWZhdWx0LmxlZnQsXG4gICAgcmFuZ2VQYWRkaW5nOiByYW5nZVBhZGRpbmcsXG4gICAgc2NhbGU6IHNjYWxlLFxuICAgIHN0cm9rZTogc3Ryb2tlLFxuICAgIHN0cm9rZVdpZHRoOiBzdHJva2VXaWR0aCxcbiAgICBzdHJva2VEYXNoYXJyYXk6IHN0cm9rZURhc2hhcnJheSxcbiAgICB0aWNrQ2xhc3NOYW1lOiB0aWNrQ2xhc3NOYW1lLFxuICAgIHRpY2tGb3JtYXQ6IHRpY2tGb3JtYXQsXG4gICAgdGlja0xhYmVsUHJvcHM6IHRpY2tMYWJlbFByb3BzLFxuICAgIHRpY2tMZW5ndGg6IHRpY2tMZW5ndGgsXG4gICAgdGlja1N0cm9rZTogdGlja1N0cm9rZSxcbiAgICB0aWNrVHJhbnNmb3JtOiB0aWNrVHJhbnNmb3JtLFxuICAgIHRpY2tWYWx1ZXM6IHRpY2tWYWx1ZXMsXG4gICAgdG9wOiB0b3AsXG4gICAgY2hpbGRyZW46IGNoaWxkcmVuXG4gIH0pO1xufVxuXG5BeGlzTGVmdC5wcm9wVHlwZXMgPSBwcm9wVHlwZXM7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvQHZ4L2F4aXMvYnVpbGQvYXhpcy9BeGlzTGVmdC5qc1xuLy8gbW9kdWxlIGlkID0gNjYzXG4vLyBtb2R1bGUgY2h1bmtzID0gNSIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IEF4aXNSaWdodDtcblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX3Byb3BUeXBlcyA9IHJlcXVpcmUoJ3Byb3AtdHlwZXMnKTtcblxudmFyIF9wcm9wVHlwZXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcHJvcFR5cGVzKTtcblxudmFyIF9jbGFzc25hbWVzID0gcmVxdWlyZSgnY2xhc3NuYW1lcycpO1xuXG52YXIgX2NsYXNzbmFtZXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY2xhc3NuYW1lcyk7XG5cbnZhciBfQXhpcyA9IHJlcXVpcmUoJy4vQXhpcycpO1xuXG52YXIgX0F4aXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfQXhpcyk7XG5cbnZhciBfb3JpZW50YXRpb24gPSByZXF1aXJlKCcuLi9jb25zdGFudHMvb3JpZW50YXRpb24nKTtcblxudmFyIF9vcmllbnRhdGlvbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9vcmllbnRhdGlvbik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbnZhciBwcm9wVHlwZXMgPSB7XG4gIGF4aXNDbGFzc05hbWU6IF9wcm9wVHlwZXMyLmRlZmF1bHQuc3RyaW5nLFxuICBheGlzTGluZUNsYXNzTmFtZTogX3Byb3BUeXBlczIuZGVmYXVsdC5zdHJpbmcsXG4gIGhpZGVBeGlzTGluZTogX3Byb3BUeXBlczIuZGVmYXVsdC5ib29sLFxuICBoaWRlVGlja3M6IF9wcm9wVHlwZXMyLmRlZmF1bHQuYm9vbCxcbiAgaGlkZVplcm86IF9wcm9wVHlwZXMyLmRlZmF1bHQuYm9vbCxcbiAgbGFiZWw6IF9wcm9wVHlwZXMyLmRlZmF1bHQuc3RyaW5nLFxuICBsYWJlbENsYXNzTmFtZTogX3Byb3BUeXBlczIuZGVmYXVsdC5zdHJpbmcsXG4gIGxhYmVsT2Zmc2V0OiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm51bWJlcixcbiAgbGFiZWxQcm9wczogX3Byb3BUeXBlczIuZGVmYXVsdC5vYmplY3QsXG4gIGxlZnQ6IF9wcm9wVHlwZXMyLmRlZmF1bHQubnVtYmVyLFxuICBudW1UaWNrczogX3Byb3BUeXBlczIuZGVmYXVsdC5udW1iZXIsXG4gIHJhbmdlUGFkZGluZzogX3Byb3BUeXBlczIuZGVmYXVsdC5udW1iZXIsXG4gIHNjYWxlOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmZ1bmMuaXNSZXF1aXJlZCxcbiAgc3Ryb2tlOiBfcHJvcFR5cGVzMi5kZWZhdWx0LnN0cmluZyxcbiAgc3Ryb2tlV2lkdGg6IF9wcm9wVHlwZXMyLmRlZmF1bHQubnVtYmVyLFxuICBzdHJva2VEYXNoYXJyYXk6IF9wcm9wVHlwZXMyLmRlZmF1bHQuc3RyaW5nLFxuICB0aWNrQ2xhc3NOYW1lOiBfcHJvcFR5cGVzMi5kZWZhdWx0LnN0cmluZyxcbiAgdGlja0Zvcm1hdDogX3Byb3BUeXBlczIuZGVmYXVsdC5mdW5jLFxuICB0aWNrTGFiZWxQcm9wczogX3Byb3BUeXBlczIuZGVmYXVsdC5mdW5jLFxuICB0aWNrTGVuZ3RoOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm51bWJlcixcbiAgdGlja1N0cm9rZTogX3Byb3BUeXBlczIuZGVmYXVsdC5zdHJpbmcsXG4gIHRpY2tUcmFuc2Zvcm06IF9wcm9wVHlwZXMyLmRlZmF1bHQuc3RyaW5nLFxuICB0aWNrVmFsdWVzOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmFycmF5LFxuICB0b3A6IF9wcm9wVHlwZXMyLmRlZmF1bHQubnVtYmVyLFxuICBjaGlsZHJlbjogX3Byb3BUeXBlczIuZGVmYXVsdC5mdW5jXG59O1xuXG5mdW5jdGlvbiBBeGlzUmlnaHQoX3JlZikge1xuICB2YXIgY2hpbGRyZW4gPSBfcmVmLmNoaWxkcmVuLFxuICAgICAgYXhpc0NsYXNzTmFtZSA9IF9yZWYuYXhpc0NsYXNzTmFtZSxcbiAgICAgIGF4aXNMaW5lQ2xhc3NOYW1lID0gX3JlZi5heGlzTGluZUNsYXNzTmFtZSxcbiAgICAgIGhpZGVBeGlzTGluZSA9IF9yZWYuaGlkZUF4aXNMaW5lLFxuICAgICAgaGlkZVRpY2tzID0gX3JlZi5oaWRlVGlja3MsXG4gICAgICBoaWRlWmVybyA9IF9yZWYuaGlkZVplcm8sXG4gICAgICBsYWJlbCA9IF9yZWYubGFiZWwsXG4gICAgICBsYWJlbENsYXNzTmFtZSA9IF9yZWYubGFiZWxDbGFzc05hbWUsXG4gICAgICBfcmVmJGxhYmVsT2Zmc2V0ID0gX3JlZi5sYWJlbE9mZnNldCxcbiAgICAgIGxhYmVsT2Zmc2V0ID0gX3JlZiRsYWJlbE9mZnNldCA9PT0gdW5kZWZpbmVkID8gMzYgOiBfcmVmJGxhYmVsT2Zmc2V0LFxuICAgICAgbGFiZWxQcm9wcyA9IF9yZWYubGFiZWxQcm9wcyxcbiAgICAgIGxlZnQgPSBfcmVmLmxlZnQsXG4gICAgICBudW1UaWNrcyA9IF9yZWYubnVtVGlja3MsXG4gICAgICByYW5nZVBhZGRpbmcgPSBfcmVmLnJhbmdlUGFkZGluZyxcbiAgICAgIHNjYWxlID0gX3JlZi5zY2FsZSxcbiAgICAgIHN0cm9rZSA9IF9yZWYuc3Ryb2tlLFxuICAgICAgc3Ryb2tlV2lkdGggPSBfcmVmLnN0cm9rZVdpZHRoLFxuICAgICAgc3Ryb2tlRGFzaGFycmF5ID0gX3JlZi5zdHJva2VEYXNoYXJyYXksXG4gICAgICB0aWNrQ2xhc3NOYW1lID0gX3JlZi50aWNrQ2xhc3NOYW1lLFxuICAgICAgdGlja0Zvcm1hdCA9IF9yZWYudGlja0Zvcm1hdCxcbiAgICAgIF9yZWYkdGlja0xhYmVsUHJvcHMgPSBfcmVmLnRpY2tMYWJlbFByb3BzLFxuICAgICAgdGlja0xhYmVsUHJvcHMgPSBfcmVmJHRpY2tMYWJlbFByb3BzID09PSB1bmRlZmluZWQgPyBmdW5jdGlvbiAoX3JlZjIpIHtcbiAgICB2YXIgdGljayA9IF9yZWYyLnRpY2ssXG4gICAgICAgIGluZGV4ID0gX3JlZjIuaW5kZXg7XG4gICAgcmV0dXJuIHtcbiAgICAgIGR4OiAnMC4yNWVtJyxcbiAgICAgIGR5OiAnMC4yNWVtJyxcbiAgICAgIGZpbGw6ICdibGFjaycsXG4gICAgICBmb250RmFtaWx5OiAnQXJpYWwnLFxuICAgICAgZm9udFNpemU6IDEwLFxuICAgICAgdGV4dEFuY2hvcjogJ3N0YXJ0J1xuICAgIH07XG4gIH0gOiBfcmVmJHRpY2tMYWJlbFByb3BzLFxuICAgICAgX3JlZiR0aWNrTGVuZ3RoID0gX3JlZi50aWNrTGVuZ3RoLFxuICAgICAgdGlja0xlbmd0aCA9IF9yZWYkdGlja0xlbmd0aCA9PT0gdW5kZWZpbmVkID8gOCA6IF9yZWYkdGlja0xlbmd0aCxcbiAgICAgIHRpY2tTdHJva2UgPSBfcmVmLnRpY2tTdHJva2UsXG4gICAgICB0aWNrVHJhbnNmb3JtID0gX3JlZi50aWNrVHJhbnNmb3JtLFxuICAgICAgdGlja1ZhbHVlcyA9IF9yZWYudGlja1ZhbHVlcyxcbiAgICAgIHRvcCA9IF9yZWYudG9wO1xuXG4gIHJldHVybiBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChfQXhpczIuZGVmYXVsdCwge1xuICAgIGF4aXNDbGFzc05hbWU6ICgwLCBfY2xhc3NuYW1lczIuZGVmYXVsdCkoJ3Z4LWF4aXMtcmlnaHQnLCBheGlzQ2xhc3NOYW1lKSxcbiAgICBheGlzTGluZUNsYXNzTmFtZTogYXhpc0xpbmVDbGFzc05hbWUsXG4gICAgaGlkZUF4aXNMaW5lOiBoaWRlQXhpc0xpbmUsXG4gICAgaGlkZVRpY2tzOiBoaWRlVGlja3MsXG4gICAgaGlkZVplcm86IGhpZGVaZXJvLFxuICAgIGxhYmVsOiBsYWJlbCxcbiAgICBsYWJlbENsYXNzTmFtZTogbGFiZWxDbGFzc05hbWUsXG4gICAgbGFiZWxPZmZzZXQ6IGxhYmVsT2Zmc2V0LFxuICAgIGxhYmVsUHJvcHM6IGxhYmVsUHJvcHMsXG4gICAgbGVmdDogbGVmdCxcbiAgICBudW1UaWNrczogbnVtVGlja3MsXG4gICAgb3JpZW50YXRpb246IF9vcmllbnRhdGlvbjIuZGVmYXVsdC5yaWdodCxcbiAgICByYW5nZVBhZGRpbmc6IHJhbmdlUGFkZGluZyxcbiAgICBzY2FsZTogc2NhbGUsXG4gICAgc3Ryb2tlOiBzdHJva2UsXG4gICAgc3Ryb2tlV2lkdGg6IHN0cm9rZVdpZHRoLFxuICAgIHN0cm9rZURhc2hhcnJheTogc3Ryb2tlRGFzaGFycmF5LFxuICAgIHRpY2tDbGFzc05hbWU6IHRpY2tDbGFzc05hbWUsXG4gICAgdGlja0Zvcm1hdDogdGlja0Zvcm1hdCxcbiAgICB0aWNrTGFiZWxQcm9wczogdGlja0xhYmVsUHJvcHMsXG4gICAgdGlja0xlbmd0aDogdGlja0xlbmd0aCxcbiAgICB0aWNrU3Ryb2tlOiB0aWNrU3Ryb2tlLFxuICAgIHRpY2tUcmFuc2Zvcm06IHRpY2tUcmFuc2Zvcm0sXG4gICAgdGlja1ZhbHVlczogdGlja1ZhbHVlcyxcbiAgICB0b3A6IHRvcCxcbiAgICBjaGlsZHJlbjogY2hpbGRyZW5cbiAgfSk7XG59XG5cbkF4aXNSaWdodC5wcm9wVHlwZXMgPSBwcm9wVHlwZXM7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvQHZ4L2F4aXMvYnVpbGQvYXhpcy9BeGlzUmlnaHQuanNcbi8vIG1vZHVsZSBpZCA9IDY2NFxuLy8gbW9kdWxlIGNodW5rcyA9IDUiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSBBeGlzVG9wO1xuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfcHJvcFR5cGVzID0gcmVxdWlyZSgncHJvcC10eXBlcycpO1xuXG52YXIgX3Byb3BUeXBlczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wcm9wVHlwZXMpO1xuXG52YXIgX2NsYXNzbmFtZXMgPSByZXF1aXJlKCdjbGFzc25hbWVzJyk7XG5cbnZhciBfY2xhc3NuYW1lczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jbGFzc25hbWVzKTtcblxudmFyIF9BeGlzID0gcmVxdWlyZSgnLi9BeGlzJyk7XG5cbnZhciBfQXhpczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9BeGlzKTtcblxudmFyIF9vcmllbnRhdGlvbiA9IHJlcXVpcmUoJy4uL2NvbnN0YW50cy9vcmllbnRhdGlvbicpO1xuXG52YXIgX29yaWVudGF0aW9uMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX29yaWVudGF0aW9uKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxudmFyIHByb3BUeXBlcyA9IHtcbiAgYXhpc0NsYXNzTmFtZTogX3Byb3BUeXBlczIuZGVmYXVsdC5zdHJpbmcsXG4gIGF4aXNMaW5lQ2xhc3NOYW1lOiBfcHJvcFR5cGVzMi5kZWZhdWx0LnN0cmluZyxcbiAgaGlkZUF4aXNMaW5lOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmJvb2wsXG4gIGhpZGVUaWNrczogX3Byb3BUeXBlczIuZGVmYXVsdC5ib29sLFxuICBoaWRlWmVybzogX3Byb3BUeXBlczIuZGVmYXVsdC5ib29sLFxuICBsYWJlbDogX3Byb3BUeXBlczIuZGVmYXVsdC5zdHJpbmcsXG4gIGxhYmVsQ2xhc3NOYW1lOiBfcHJvcFR5cGVzMi5kZWZhdWx0LnN0cmluZyxcbiAgbGFiZWxPZmZzZXQ6IF9wcm9wVHlwZXMyLmRlZmF1bHQubnVtYmVyLFxuICBsYWJlbFByb3BzOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9iamVjdCxcbiAgbGVmdDogX3Byb3BUeXBlczIuZGVmYXVsdC5udW1iZXIsXG4gIG51bVRpY2tzOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm51bWJlcixcbiAgcmFuZ2VQYWRkaW5nOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm51bWJlcixcbiAgc2NhbGU6IF9wcm9wVHlwZXMyLmRlZmF1bHQuZnVuYy5pc1JlcXVpcmVkLFxuICBzdHJva2U6IF9wcm9wVHlwZXMyLmRlZmF1bHQuc3RyaW5nLFxuICBzdHJva2VXaWR0aDogX3Byb3BUeXBlczIuZGVmYXVsdC5udW1iZXIsXG4gIHN0cm9rZURhc2hhcnJheTogX3Byb3BUeXBlczIuZGVmYXVsdC5zdHJpbmcsXG4gIHRpY2tDbGFzc05hbWU6IF9wcm9wVHlwZXMyLmRlZmF1bHQuc3RyaW5nLFxuICB0aWNrRm9ybWF0OiBfcHJvcFR5cGVzMi5kZWZhdWx0LmZ1bmMsXG4gIHRpY2tMYWJlbFByb3BzOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmZ1bmMsXG4gIHRpY2tMZW5ndGg6IF9wcm9wVHlwZXMyLmRlZmF1bHQubnVtYmVyLFxuICB0aWNrU3Ryb2tlOiBfcHJvcFR5cGVzMi5kZWZhdWx0LnN0cmluZyxcbiAgdGlja1RyYW5zZm9ybTogX3Byb3BUeXBlczIuZGVmYXVsdC5zdHJpbmcsXG4gIHRpY2tWYWx1ZXM6IF9wcm9wVHlwZXMyLmRlZmF1bHQuYXJyYXksXG4gIHRvcDogX3Byb3BUeXBlczIuZGVmYXVsdC5udW1iZXIsXG4gIGNoaWxkcmVuOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmZ1bmNcbn07XG5cbmZ1bmN0aW9uIEF4aXNUb3AoX3JlZikge1xuICB2YXIgY2hpbGRyZW4gPSBfcmVmLmNoaWxkcmVuLFxuICAgICAgYXhpc0NsYXNzTmFtZSA9IF9yZWYuYXhpc0NsYXNzTmFtZSxcbiAgICAgIGF4aXNMaW5lQ2xhc3NOYW1lID0gX3JlZi5heGlzTGluZUNsYXNzTmFtZSxcbiAgICAgIGhpZGVBeGlzTGluZSA9IF9yZWYuaGlkZUF4aXNMaW5lLFxuICAgICAgaGlkZVRpY2tzID0gX3JlZi5oaWRlVGlja3MsXG4gICAgICBoaWRlWmVybyA9IF9yZWYuaGlkZVplcm8sXG4gICAgICBsYWJlbCA9IF9yZWYubGFiZWwsXG4gICAgICBsYWJlbENsYXNzTmFtZSA9IF9yZWYubGFiZWxDbGFzc05hbWUsXG4gICAgICBfcmVmJGxhYmVsT2Zmc2V0ID0gX3JlZi5sYWJlbE9mZnNldCxcbiAgICAgIGxhYmVsT2Zmc2V0ID0gX3JlZiRsYWJlbE9mZnNldCA9PT0gdW5kZWZpbmVkID8gOCA6IF9yZWYkbGFiZWxPZmZzZXQsXG4gICAgICBsYWJlbFByb3BzID0gX3JlZi5sYWJlbFByb3BzLFxuICAgICAgbGVmdCA9IF9yZWYubGVmdCxcbiAgICAgIG51bVRpY2tzID0gX3JlZi5udW1UaWNrcyxcbiAgICAgIHJhbmdlUGFkZGluZyA9IF9yZWYucmFuZ2VQYWRkaW5nLFxuICAgICAgc2NhbGUgPSBfcmVmLnNjYWxlLFxuICAgICAgc3Ryb2tlID0gX3JlZi5zdHJva2UsXG4gICAgICBzdHJva2VXaWR0aCA9IF9yZWYuc3Ryb2tlV2lkdGgsXG4gICAgICBzdHJva2VEYXNoYXJyYXkgPSBfcmVmLnN0cm9rZURhc2hhcnJheSxcbiAgICAgIHRpY2tDbGFzc05hbWUgPSBfcmVmLnRpY2tDbGFzc05hbWUsXG4gICAgICB0aWNrRm9ybWF0ID0gX3JlZi50aWNrRm9ybWF0LFxuICAgICAgX3JlZiR0aWNrTGFiZWxQcm9wcyA9IF9yZWYudGlja0xhYmVsUHJvcHMsXG4gICAgICB0aWNrTGFiZWxQcm9wcyA9IF9yZWYkdGlja0xhYmVsUHJvcHMgPT09IHVuZGVmaW5lZCA/IGZ1bmN0aW9uIChfcmVmMikge1xuICAgIHZhciB0aWNrID0gX3JlZjIudGljayxcbiAgICAgICAgaW5kZXggPSBfcmVmMi5pbmRleDtcbiAgICByZXR1cm4ge1xuICAgICAgZHk6ICctMC4yNWVtJyxcbiAgICAgIGZpbGw6ICdibGFjaycsXG4gICAgICBmb250RmFtaWx5OiAnQXJpYWwnLFxuICAgICAgZm9udFNpemU6IDEwLFxuICAgICAgdGV4dEFuY2hvcjogJ21pZGRsZSdcbiAgICB9O1xuICB9IDogX3JlZiR0aWNrTGFiZWxQcm9wcyxcbiAgICAgIF9yZWYkdGlja0xlbmd0aCA9IF9yZWYudGlja0xlbmd0aCxcbiAgICAgIHRpY2tMZW5ndGggPSBfcmVmJHRpY2tMZW5ndGggPT09IHVuZGVmaW5lZCA/IDggOiBfcmVmJHRpY2tMZW5ndGgsXG4gICAgICB0aWNrU3Ryb2tlID0gX3JlZi50aWNrU3Ryb2tlLFxuICAgICAgdGlja1RyYW5zZm9ybSA9IF9yZWYudGlja1RyYW5zZm9ybSxcbiAgICAgIHRpY2tWYWx1ZXMgPSBfcmVmLnRpY2tWYWx1ZXMsXG4gICAgICB0b3AgPSBfcmVmLnRvcDtcblxuICByZXR1cm4gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoX0F4aXMyLmRlZmF1bHQsIHtcbiAgICBheGlzQ2xhc3NOYW1lOiAoMCwgX2NsYXNzbmFtZXMyLmRlZmF1bHQpKCd2eC1heGlzLXRvcCcsIGF4aXNDbGFzc05hbWUpLFxuICAgIGF4aXNMaW5lQ2xhc3NOYW1lOiBheGlzTGluZUNsYXNzTmFtZSxcbiAgICBoaWRlQXhpc0xpbmU6IGhpZGVBeGlzTGluZSxcbiAgICBoaWRlVGlja3M6IGhpZGVUaWNrcyxcbiAgICBoaWRlWmVybzogaGlkZVplcm8sXG4gICAgbGFiZWw6IGxhYmVsLFxuICAgIGxhYmVsQ2xhc3NOYW1lOiBsYWJlbENsYXNzTmFtZSxcbiAgICBsYWJlbE9mZnNldDogbGFiZWxPZmZzZXQsXG4gICAgbGFiZWxQcm9wczogbGFiZWxQcm9wcyxcbiAgICBsZWZ0OiBsZWZ0LFxuICAgIG51bVRpY2tzOiBudW1UaWNrcyxcbiAgICBvcmllbnRhdGlvbjogX29yaWVudGF0aW9uMi5kZWZhdWx0LnRvcCxcbiAgICByYW5nZVBhZGRpbmc6IHJhbmdlUGFkZGluZyxcbiAgICBzY2FsZTogc2NhbGUsXG4gICAgc3Ryb2tlOiBzdHJva2UsXG4gICAgc3Ryb2tlV2lkdGg6IHN0cm9rZVdpZHRoLFxuICAgIHN0cm9rZURhc2hhcnJheTogc3Ryb2tlRGFzaGFycmF5LFxuICAgIHRpY2tDbGFzc05hbWU6IHRpY2tDbGFzc05hbWUsXG4gICAgdGlja0Zvcm1hdDogdGlja0Zvcm1hdCxcbiAgICB0aWNrTGFiZWxQcm9wczogdGlja0xhYmVsUHJvcHMsXG4gICAgdGlja0xlbmd0aDogdGlja0xlbmd0aCxcbiAgICB0aWNrU3Ryb2tlOiB0aWNrU3Ryb2tlLFxuICAgIHRpY2tUcmFuc2Zvcm06IHRpY2tUcmFuc2Zvcm0sXG4gICAgdGlja1ZhbHVlczogdGlja1ZhbHVlcyxcbiAgICB0b3A6IHRvcCxcbiAgICBjaGlsZHJlbjogY2hpbGRyZW5cbiAgfSk7XG59XG5cbkF4aXNUb3AucHJvcFR5cGVzID0gcHJvcFR5cGVzO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL0B2eC9heGlzL2J1aWxkL2F4aXMvQXhpc1RvcC5qc1xuLy8gbW9kdWxlIGlkID0gNjY1XG4vLyBtb2R1bGUgY2h1bmtzID0gNSIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IEF4aXNCb3R0b207XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIF9wcm9wVHlwZXMgPSByZXF1aXJlKCdwcm9wLXR5cGVzJyk7XG5cbnZhciBfcHJvcFR5cGVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3Byb3BUeXBlcyk7XG5cbnZhciBfY2xhc3NuYW1lcyA9IHJlcXVpcmUoJ2NsYXNzbmFtZXMnKTtcblxudmFyIF9jbGFzc25hbWVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NsYXNzbmFtZXMpO1xuXG52YXIgX0F4aXMgPSByZXF1aXJlKCcuL0F4aXMnKTtcblxudmFyIF9BeGlzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0F4aXMpO1xuXG52YXIgX29yaWVudGF0aW9uID0gcmVxdWlyZSgnLi4vY29uc3RhbnRzL29yaWVudGF0aW9uJyk7XG5cbnZhciBfb3JpZW50YXRpb24yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfb3JpZW50YXRpb24pO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG52YXIgcHJvcFR5cGVzID0ge1xuICBheGlzQ2xhc3NOYW1lOiBfcHJvcFR5cGVzMi5kZWZhdWx0LnN0cmluZyxcbiAgYXhpc0xpbmVDbGFzc05hbWU6IF9wcm9wVHlwZXMyLmRlZmF1bHQuc3RyaW5nLFxuICBoaWRlQXhpc0xpbmU6IF9wcm9wVHlwZXMyLmRlZmF1bHQuYm9vbCxcbiAgaGlkZVRpY2tzOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmJvb2wsXG4gIGhpZGVaZXJvOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmJvb2wsXG4gIGxhYmVsOiBfcHJvcFR5cGVzMi5kZWZhdWx0LnN0cmluZyxcbiAgbGFiZWxDbGFzc05hbWU6IF9wcm9wVHlwZXMyLmRlZmF1bHQuc3RyaW5nLFxuICBsYWJlbE9mZnNldDogX3Byb3BUeXBlczIuZGVmYXVsdC5udW1iZXIsXG4gIGxhYmVsUHJvcHM6IF9wcm9wVHlwZXMyLmRlZmF1bHQub2JqZWN0LFxuICBsZWZ0OiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm51bWJlcixcbiAgbnVtVGlja3M6IF9wcm9wVHlwZXMyLmRlZmF1bHQubnVtYmVyLFxuICByYW5nZVBhZGRpbmc6IF9wcm9wVHlwZXMyLmRlZmF1bHQubnVtYmVyLFxuICBzY2FsZTogX3Byb3BUeXBlczIuZGVmYXVsdC5mdW5jLmlzUmVxdWlyZWQsXG4gIHN0cm9rZTogX3Byb3BUeXBlczIuZGVmYXVsdC5zdHJpbmcsXG4gIHN0cm9rZVdpZHRoOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm51bWJlcixcbiAgc3Ryb2tlRGFzaGFycmF5OiBfcHJvcFR5cGVzMi5kZWZhdWx0LnN0cmluZyxcbiAgdGlja0NsYXNzTmFtZTogX3Byb3BUeXBlczIuZGVmYXVsdC5zdHJpbmcsXG4gIHRpY2tGb3JtYXQ6IF9wcm9wVHlwZXMyLmRlZmF1bHQuZnVuYyxcbiAgdGlja0xhYmVsUHJvcHM6IF9wcm9wVHlwZXMyLmRlZmF1bHQuZnVuYyxcbiAgdGlja0xlbmd0aDogX3Byb3BUeXBlczIuZGVmYXVsdC5udW1iZXIsXG4gIHRpY2tTdHJva2U6IF9wcm9wVHlwZXMyLmRlZmF1bHQuc3RyaW5nLFxuICB0aWNrVHJhbnNmb3JtOiBfcHJvcFR5cGVzMi5kZWZhdWx0LnN0cmluZyxcbiAgdGlja1ZhbHVlczogX3Byb3BUeXBlczIuZGVmYXVsdC5hcnJheSxcbiAgdG9wOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm51bWJlcixcbiAgY2hpbGRyZW46IF9wcm9wVHlwZXMyLmRlZmF1bHQuZnVuY1xufTtcblxuZnVuY3Rpb24gQXhpc0JvdHRvbShfcmVmKSB7XG4gIHZhciBjaGlsZHJlbiA9IF9yZWYuY2hpbGRyZW4sXG4gICAgICBheGlzQ2xhc3NOYW1lID0gX3JlZi5heGlzQ2xhc3NOYW1lLFxuICAgICAgYXhpc0xpbmVDbGFzc05hbWUgPSBfcmVmLmF4aXNMaW5lQ2xhc3NOYW1lLFxuICAgICAgaGlkZUF4aXNMaW5lID0gX3JlZi5oaWRlQXhpc0xpbmUsXG4gICAgICBoaWRlVGlja3MgPSBfcmVmLmhpZGVUaWNrcyxcbiAgICAgIGhpZGVaZXJvID0gX3JlZi5oaWRlWmVybyxcbiAgICAgIGxhYmVsID0gX3JlZi5sYWJlbCxcbiAgICAgIGxhYmVsQ2xhc3NOYW1lID0gX3JlZi5sYWJlbENsYXNzTmFtZSxcbiAgICAgIF9yZWYkbGFiZWxPZmZzZXQgPSBfcmVmLmxhYmVsT2Zmc2V0LFxuICAgICAgbGFiZWxPZmZzZXQgPSBfcmVmJGxhYmVsT2Zmc2V0ID09PSB1bmRlZmluZWQgPyA4IDogX3JlZiRsYWJlbE9mZnNldCxcbiAgICAgIGxhYmVsUHJvcHMgPSBfcmVmLmxhYmVsUHJvcHMsXG4gICAgICBsZWZ0ID0gX3JlZi5sZWZ0LFxuICAgICAgbnVtVGlja3MgPSBfcmVmLm51bVRpY2tzLFxuICAgICAgcmFuZ2VQYWRkaW5nID0gX3JlZi5yYW5nZVBhZGRpbmcsXG4gICAgICBzY2FsZSA9IF9yZWYuc2NhbGUsXG4gICAgICBzdHJva2UgPSBfcmVmLnN0cm9rZSxcbiAgICAgIHN0cm9rZVdpZHRoID0gX3JlZi5zdHJva2VXaWR0aCxcbiAgICAgIHN0cm9rZURhc2hhcnJheSA9IF9yZWYuc3Ryb2tlRGFzaGFycmF5LFxuICAgICAgdGlja0NsYXNzTmFtZSA9IF9yZWYudGlja0NsYXNzTmFtZSxcbiAgICAgIHRpY2tGb3JtYXQgPSBfcmVmLnRpY2tGb3JtYXQsXG4gICAgICBfcmVmJHRpY2tMYWJlbFByb3BzID0gX3JlZi50aWNrTGFiZWxQcm9wcyxcbiAgICAgIHRpY2tMYWJlbFByb3BzID0gX3JlZiR0aWNrTGFiZWxQcm9wcyA9PT0gdW5kZWZpbmVkID8gZnVuY3Rpb24gKF9yZWYyKSB7XG4gICAgdmFyIHRpY2sgPSBfcmVmMi50aWNrLFxuICAgICAgICBpbmRleCA9IF9yZWYyLmluZGV4O1xuICAgIHJldHVybiB7XG4gICAgICBkeTogJzAuMjVlbScsXG4gICAgICBmaWxsOiAnYmxhY2snLFxuICAgICAgZm9udEZhbWlseTogJ0FyaWFsJyxcbiAgICAgIGZvbnRTaXplOiAxMCxcbiAgICAgIHRleHRBbmNob3I6ICdtaWRkbGUnXG4gICAgfTtcbiAgfSA6IF9yZWYkdGlja0xhYmVsUHJvcHMsXG4gICAgICBfcmVmJHRpY2tMZW5ndGggPSBfcmVmLnRpY2tMZW5ndGgsXG4gICAgICB0aWNrTGVuZ3RoID0gX3JlZiR0aWNrTGVuZ3RoID09PSB1bmRlZmluZWQgPyA4IDogX3JlZiR0aWNrTGVuZ3RoLFxuICAgICAgdGlja1N0cm9rZSA9IF9yZWYudGlja1N0cm9rZSxcbiAgICAgIHRpY2tUcmFuc2Zvcm0gPSBfcmVmLnRpY2tUcmFuc2Zvcm0sXG4gICAgICB0aWNrVmFsdWVzID0gX3JlZi50aWNrVmFsdWVzLFxuICAgICAgdG9wID0gX3JlZi50b3A7XG5cbiAgcmV0dXJuIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KF9BeGlzMi5kZWZhdWx0LCB7XG4gICAgYXhpc0NsYXNzTmFtZTogKDAsIF9jbGFzc25hbWVzMi5kZWZhdWx0KSgndngtYXhpcy1ib3R0b20nLCBheGlzQ2xhc3NOYW1lKSxcbiAgICBheGlzTGluZUNsYXNzTmFtZTogYXhpc0xpbmVDbGFzc05hbWUsXG4gICAgaGlkZUF4aXNMaW5lOiBoaWRlQXhpc0xpbmUsXG4gICAgaGlkZVRpY2tzOiBoaWRlVGlja3MsXG4gICAgaGlkZVplcm86IGhpZGVaZXJvLFxuICAgIGxhYmVsOiBsYWJlbCxcbiAgICBsYWJlbENsYXNzTmFtZTogbGFiZWxDbGFzc05hbWUsXG4gICAgbGFiZWxPZmZzZXQ6IGxhYmVsT2Zmc2V0LFxuICAgIGxhYmVsUHJvcHM6IGxhYmVsUHJvcHMsXG4gICAgbGVmdDogbGVmdCxcbiAgICBudW1UaWNrczogbnVtVGlja3MsXG4gICAgb3JpZW50YXRpb246IF9vcmllbnRhdGlvbjIuZGVmYXVsdC5ib3R0b20sXG4gICAgcmFuZ2VQYWRkaW5nOiByYW5nZVBhZGRpbmcsXG4gICAgc2NhbGU6IHNjYWxlLFxuICAgIHN0cm9rZTogc3Ryb2tlLFxuICAgIHN0cm9rZVdpZHRoOiBzdHJva2VXaWR0aCxcbiAgICBzdHJva2VEYXNoYXJyYXk6IHN0cm9rZURhc2hhcnJheSxcbiAgICB0aWNrQ2xhc3NOYW1lOiB0aWNrQ2xhc3NOYW1lLFxuICAgIHRpY2tGb3JtYXQ6IHRpY2tGb3JtYXQsXG4gICAgdGlja0xhYmVsUHJvcHM6IHRpY2tMYWJlbFByb3BzLFxuICAgIHRpY2tMZW5ndGg6IHRpY2tMZW5ndGgsXG4gICAgdGlja1N0cm9rZTogdGlja1N0cm9rZSxcbiAgICB0aWNrVHJhbnNmb3JtOiB0aWNrVHJhbnNmb3JtLFxuICAgIHRpY2tWYWx1ZXM6IHRpY2tWYWx1ZXMsXG4gICAgdG9wOiB0b3AsXG4gICAgY2hpbGRyZW46IGNoaWxkcmVuXG4gIH0pO1xufVxuXG5BeGlzQm90dG9tLnByb3BUeXBlcyA9IHByb3BUeXBlcztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9AdngvYXhpcy9idWlsZC9heGlzL0F4aXNCb3R0b20uanNcbi8vIG1vZHVsZSBpZCA9IDY2NlxuLy8gbW9kdWxlIGNodW5rcyA9IDUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBOzs7QUFDQTtBQUNBOzs7QUFBQTtBQUNBOzs7Ozs7OztBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFMQTtBQUtBO0FBQ0E7QUFDQTtBQUlBOzs7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQURBO0FBSUE7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBSUE7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTs7QUFMQTtBQU9BO0FBUEE7QUFDQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBOztBQVBBO0FBU0E7QUFUQTtBQUNBO0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7O0FBUEE7QUFTQTtBQVRBO0FBQ0E7QUFVQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTs7QUFQQTtBQVNBO0FBVEE7QUFDQTtBQVFBO0FBSUE7QUFKQTs7QUFNQTtBQUNBO0FBREE7Ozs7Ozs7Ozs7O0FDdEdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDVkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDM1FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQzVEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUNaQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDUkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQ3RDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDaElBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUNoSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUMvSEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBIiwic291cmNlUm9vdCI6IiJ9