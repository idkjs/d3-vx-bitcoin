webpackHotUpdate(5,{

/***/ 514:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _toConsumableArray2 = __webpack_require__(82);

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _getPrototypeOf = __webpack_require__(44);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(15);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(16);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(45);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(49);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(17);

var _react2 = _interopRequireDefault(_react);

var _responsive = __webpack_require__(441);

var _scale = __webpack_require__(515);

var _shape = __webpack_require__(419);

var _gradient = __webpack_require__(440);

var _axis = __webpack_require__(658);

var _tooltip = __webpack_require__(666);

var _formatPrice = __webpack_require__(493);

var _formatPrice2 = _interopRequireDefault(_formatPrice);

var _maxprice = __webpack_require__(671);

var _maxprice2 = _interopRequireDefault(_maxprice);

var _minprice = __webpack_require__(672);

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
      var _this2 = this;

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
      }, _react2.default.createElement("svg", { ref: function ref(s) {
          return _this2.svg - s;
        }, width: width, height: parentHeight, __source: {
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
      }), _react2.default.createElement(_shape.Bar, {
        width: width,
        height: height,
        fill: "transparent",
        onMouseMove: function onMouseMove(data) {
          return function (event) {};
        },
        onMouseLeave: function onMouseLeave(data) {
          return function (event) {};
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 115
        }
      })));
    }
  }]);

  return Chart;
}(_react2.default.Component);

exports.default = (0, _responsive.withParentSize)(Chart);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvY2hhcnQuanMiXSwibmFtZXMiOlsid2l0aFBhcmVudFNpemUiLCJzY2FsZVRpbWUiLCJzY2FsZUxpbmVhciIsIkxpbmVQYXRoIiwiQXJlYUNsb3NlZCIsIkJhciIsIkxpbmVhckdyYWRpZW50IiwiQXhpc0JvdHRvbSIsIndpdGhUb29sVGlwIiwidG9vbFRpcCIsImZvcm1hdFByaWNlIiwiTWF4UHJpY2UiLCJNaW5QcmljZSIsIkNoYXJ0IiwicHJvcHMiLCJkYXRhIiwicGFyZW50V2lkdGgiLCJwYXJlbnRIZWlnaHQiLCJtYXJnaW4iLCJ0b3AiLCJib3R0b20iLCJsZWZ0IiwicmlnaHQiLCJ3aWR0aCIsImhlaWdodCIsIngiLCJEYXRlIiwiZCIsInRpbWUiLCJ5IiwicHJpY2UiLCJmaXJzdFBvaW50IiwiY3VycmVudFBvaW50IiwibGVuZ3RoIiwibWluUHJpY2UiLCJNYXRoIiwibWluIiwibWFwIiwibWF4UHJpY2UiLCJtYXgiLCJtYXhQcmljZURhdGEiLCJtaW5QcmljZURhdGEiLCJ4U2NhbGUiLCJyYW5nZSIsImRvbWFpbiIsInlTY2FsZSIsInN2ZyIsInMiLCJSZWFjdCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQVM7O0FBQ1QsQUFBUyxBQUFXOztBQUNwQixBQUFTLEFBQVUsQUFBWTs7QUFDL0IsQUFBUzs7QUFDVCxBQUFTOztBQUNULEFBQVMsQUFBYTs7QUFDdEIsQUFBTyxBQUFpQjs7OztBQUV4QixBQUFPLEFBQWM7Ozs7QUFDckIsQUFBTyxBQUFjOzs7Ozs7Ozs7SSxBQUVmO2lDQUNKOztpQkFBQSxBQUFZLE9BQU87d0NBQUE7OytIQUFBLEFBQ1gsQUFDUDs7Ozs7NkJBQ1E7bUJBQUE7O21CQUNxQyxLQURyQyxBQUMwQztVQUQxQyxBQUNDLGNBREQsQUFDQztVQURELEFBQ08scUJBRFAsQUFDTztVQURQLEFBQ29CLHNCQURwQixBQUNvQixBQUUzQjs7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QUNRLEFBQ047Z0JBRkYsQUFFVSxBQUNSO2dCQUhGLEFBR1UsQUFDUjtXQUpGLEFBSUssQUFDSDtXQUxGLEFBS0ssQUFDSDtlQUFPLDJCQU5ULEFBTVMsQUFBWSxBQUNuQjtlQUFPLE9BUFQsQUFPUyxBQUFPOztvQkFQaEI7c0JBNUJGLEFBNEJFLEFBU0E7QUFUQTtBQUNFLDBCQVFGLEFBQUM7Y0FBRCxBQUNRLEFBQ047Z0JBRkYsQUFFVSxBQUNSO2dCQUhGLEFBR1UsQUFDUjtXQUpGLEFBSUssQUFDSDtXQUxGLEFBS0ssQUFDSDtjQU5GLEFBTU8sQUFDTDtnQkFQRixBQU9TOztvQkFQVDtzQkFyQ0YsQUFxQ0UsQUFTQTtBQVRBO0FBQ0UsMEJBUUYsQUFBQyxpQ0FBUyxNQUFWLEFBQWdCLE1BQU0sUUFBdEIsQUFBOEIsUUFBUSxRQUF0QyxBQUE4QyxRQUFRLEdBQXRELEFBQXlELEdBQUcsR0FBNUQsQUFBK0Q7b0JBQS9EO3NCQTlDRixBQThDRSxBQUNBO0FBREE7MEJBQ0EsQUFBQztlQUFELEFBQ1MsQUFDUDtnQkFGRixBQUVVLEFBQ1I7Y0FIRixBQUdPLEFBQ0w7cUJBQWEsMkJBQUE7aUJBQVEsaUJBQVMsQUFBRSxDQUFuQjtBQUpmLEFBS0U7c0JBQWMsNEJBQUE7aUJBQVEsaUJBQVMsQUFBRSxDQUFuQjtBQUxoQjs7b0JBQUE7c0JBakROLEFBQ0UsQUFDRSxBQStDRSxBQVVQO0FBVk87QUFDRTs7Ozs7RUF4R1EsZ0JBQU0sQSxBQW9IMUI7O2tCQUFlLGdDQUFmLEFBQWUsQUFBZSIsImZpbGUiOiJjaGFydC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvcHJpc2NfMDAwL2NvZGUvQ0FDREVWL3Z4LXRlc3QifQ==

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/Users/prisc_000/code/CACDEV/vx-test/components/chart.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/prisc_000/code/CACDEV/vx-test/components/chart.js"); } } })();

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS44OWYxNzNiZTZiOTZiNmQ4NDM2Zi5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9jaGFydC5qcz82ZDM5NDhhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHdpdGhQYXJlbnRTaXplIH0gZnJvbSBcIkB2eC9yZXNwb25zaXZlXCI7XG5pbXBvcnQgeyBzY2FsZVRpbWUsIHNjYWxlTGluZWFyIH0gZnJvbSBcIkB2eC9zY2FsZVwiO1xuaW1wb3J0IHsgTGluZVBhdGgsIEFyZWFDbG9zZWQsIEJhciB9IGZyb20gXCJAdngvc2hhcGVcIjtcbmltcG9ydCB7IExpbmVhckdyYWRpZW50IH0gZnJvbSBcIkB2eC9ncmFkaWVudFwiO1xuaW1wb3J0IHsgQXhpc0JvdHRvbSB9IGZyb20gXCJAdngvYXhpc1wiO1xuaW1wb3J0IHsgd2l0aFRvb2xUaXAsIHRvb2xUaXAgfSBmcm9tIFwiQHZ4L3Rvb2x0aXBcIjtcbmltcG9ydCBmb3JtYXRQcmljZSBmcm9tIFwiLi4vdXRpbHMvZm9ybWF0UHJpY2VcIjtcblxuaW1wb3J0IE1heFByaWNlIGZyb20gXCIuL21heHByaWNlXCI7XG5pbXBvcnQgTWluUHJpY2UgZnJvbSBcIi4vbWlucHJpY2VcIjtcblxuY2xhc3MgQ2hhcnQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgfVxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBkYXRhLCBwYXJlbnRXaWR0aCwgcGFyZW50SGVpZ2h0IH0gPSB0aGlzLnByb3BzO1xuXG4gICAgLyoqIERlZmluZSBtYXJnaW4gZm9yIHRoaXMgZGl2IHRvIHBhc3MgdG8gY2FsY3VsYXRpb24gZm9yIHN2ZyAqL1xuICAgIGNvbnN0IG1hcmdpbiA9IHtcbiAgICAgIHRvcDogMTUsXG4gICAgICBib3R0b206IDQwLFxuICAgICAgbGVmdDogMCxcbiAgICAgIHJpZ2h0OiAwXG4gICAgfTtcbiAgICBjb25zdCB3aWR0aCA9IHBhcmVudFdpZHRoIC0gbWFyZ2luLmxlZnQgLSBtYXJnaW4ucmlnaHQ7XG4gICAgY29uc3QgaGVpZ2h0ID0gcGFyZW50SGVpZ2h0IC0gbWFyZ2luLnRvcCAtIG1hcmdpbi5ib3R0b207XG5cbiAgICAvKiogRGVmaW5lIGFjY2Vzc29ycyBhbmQgdmFsdWVzIHRvIGJlIHBhc3NlZCB0byBvdXIgc2hhcGVzXG4gICAgICovXG5cbiAgICBjb25zdCB4ID0gZCA9PiBuZXcgRGF0ZShkLnRpbWUpO1xuICAgIGNvbnN0IHkgPSBkID0+IGQucHJpY2U7XG5cbiAgICBjb25zdCBmaXJzdFBvaW50ID0gZGF0YVswXTtcbiAgICBjb25zdCBjdXJyZW50UG9pbnQgPSBkYXRhW2RhdGEubGVuZ3RoIC0gMV07XG5cbiAgICBjb25zdCBtaW5QcmljZSA9IE1hdGgubWluKC4uLmRhdGEubWFwKHkpKTtcbiAgICBjb25zdCBtYXhQcmljZSA9IE1hdGgubWF4KC4uLmRhdGEubWFwKHkpKTtcbiAgICBjb25zdCBtYXhQcmljZURhdGEgPSBbXG4gICAgICB7IHRpbWU6IHgoZmlyc3RQb2ludCksIHByaWNlOiBtYXhQcmljZSB9LFxuICAgICAgeyB0aW1lOiB4KGN1cnJlbnRQb2ludCksIHByaWNlOiBtYXhQcmljZSB9XG4gICAgXTtcblxuICAgIGNvbnN0IG1pblByaWNlRGF0YSA9IFtcbiAgICAgIHsgdGltZTogeChmaXJzdFBvaW50KSwgcHJpY2U6IG1pblByaWNlIH0sXG4gICAgICB7IHRpbWU6IHgoY3VycmVudFBvaW50KSwgcHJpY2U6IG1pblByaWNlIH1cbiAgICBdO1xuXG4gICAgY29uc3QgeFNjYWxlID0gc2NhbGVUaW1lKHtcbiAgICAgIHJhbmdlOiBbMCwgd2lkdGhdLFxuICAgICAgZG9tYWluOiBbTWF0aC5taW4oLi4uZGF0YS5tYXAoeCkpLCBNYXRoLm1heCguLi5kYXRhLm1hcCh4KSldXG4gICAgfSk7XG4gICAgLyoqIERlZmluZXMgdGhlIHNjYWxlIG9mIGEgeSBheGlzIGxpbmUgKi9cbiAgICBjb25zdCB5U2NhbGUgPSBzY2FsZUxpbmVhcih7XG4gICAgICByYW5nZTogW2hlaWdodCwgMF0sXG4gICAgICBkb21haW46IFttaW5QcmljZSwgbWF4UHJpY2VdXG4gICAgfSk7XG5cbiAgICAvLyBDb25zb2xlLmxvZyh4U2NhbGUuZG9tYWluKCkpO1xuICAgIC8vIGNvbnNvbGUubG9nKHlTY2FsZS5kb21haW4oKSk7XG5cbiAgICAvKiBlbmQgYWNjZXNzb3IgdmFsdWVzICovXG4gICAgLy8gICBjYWxsIDxMaW5lUGF0aCwgcGFzcyBpbiB0aGUgZGF0YSwgeFNjYWxlLCB5U2NhbGUgZG9tYWluIG1hcHBlcnMsXG4gICAgLy8gIGFuZCB4IGFuZCB5IGFjY2Vzc29yc1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8c3ZnIHJlZj17cyA9PiB0aGlzLnN2ZyAtIHN9IHdpZHRoPXt3aWR0aH0gaGVpZ2h0PXtwYXJlbnRIZWlnaHR9PlxuICAgICAgICAgIHsvKiB0b3A6IHNob3J0Y3V0IGZvciB0cmFuc2xhdGUgeSB2YWx1ZSAqL31cbiAgICAgICAgICA8QXhpc0JvdHRvbVxuICAgICAgICAgICAgdG9wPXt5U2NhbGUobWluUHJpY2UpfVxuICAgICAgICAgICAgZGF0YT17ZGF0YX1cbiAgICAgICAgICAgIHNjYWxlPXt4U2NhbGV9XG4gICAgICAgICAgICB4PXt4fVxuICAgICAgICAgICAgbnVtVGlja3M9ezR9XG4gICAgICAgICAgICBoaWRlQXhpc0xpbmVcbiAgICAgICAgICAgIGhpZGVUaWNrc1xuICAgICAgICAgICAgdGlja0xhYmVsQ29tcG9uZW50PXs8dGV4dCBmaWxsPVwiI2ZmZmZmZlwiIGZvbnRTaXplPXsxMX0gLz59XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8TGluZWFyR3JhZGllbnRcbiAgICAgICAgICAgIGlkPVwiYXJlYS1maWxsXCJcbiAgICAgICAgICAgIGZyb209XCIjNDZhMmI0XCJcbiAgICAgICAgICAgIHRvPVwiIzQ2YTJiNFwiXG4gICAgICAgICAgICBmcm9tT3BhY2l0eT17MC4zfVxuICAgICAgICAgICAgdG9PcGFjaXR5PXswfVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPE1heFByaWNlXG4gICAgICAgICAgICBkYXRhPXttYXhQcmljZURhdGF9XG4gICAgICAgICAgICB5U2NhbGU9e3lTY2FsZX1cbiAgICAgICAgICAgIHhTY2FsZT17eFNjYWxlfVxuICAgICAgICAgICAgeD17eH1cbiAgICAgICAgICAgIHk9e3l9XG4gICAgICAgICAgICBsYWJlbD17Zm9ybWF0UHJpY2UobWF4UHJpY2UpfVxuICAgICAgICAgICAgeVRleHQ9e3lTY2FsZShtYXhQcmljZSl9XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8TWluUHJpY2VcbiAgICAgICAgICAgIGRhdGE9e21pblByaWNlRGF0YX1cbiAgICAgICAgICAgIHlTY2FsZT17eVNjYWxlfVxuICAgICAgICAgICAgeFNjYWxlPXt4U2NhbGV9XG4gICAgICAgICAgICB4PXt4fVxuICAgICAgICAgICAgeT17eX1cbiAgICAgICAgICAgIGxhYmVsPXtmb3JtYXRQcmljZShtaW5QcmljZSl9XG4gICAgICAgICAgICB5VGV4dD17eVNjYWxlKG1pblByaWNlKX1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxBcmVhQ2xvc2VkXG4gICAgICAgICAgICBkYXRhPXtkYXRhfVxuICAgICAgICAgICAgeVNjYWxlPXt5U2NhbGV9XG4gICAgICAgICAgICB4U2NhbGU9e3hTY2FsZX1cbiAgICAgICAgICAgIHg9e3h9XG4gICAgICAgICAgICB5PXt5fVxuICAgICAgICAgICAgZmlsbD1cInVybCgjYXJlYS1maWxsKVwiXG4gICAgICAgICAgICBzdHJva2U9XCJ0cmFuc3BhcmVudFwiXG4gICAgICAgICAgLz5cbiAgICAgICAgICA8TGluZVBhdGggZGF0YT17ZGF0YX0geVNjYWxlPXt5U2NhbGV9IHhTY2FsZT17eFNjYWxlfSB4PXt4fSB5PXt5fSAvPlxuICAgICAgICAgIDxCYXJcbiAgICAgICAgICAgIHdpZHRoPXt3aWR0aH1cbiAgICAgICAgICAgIGhlaWdodD17aGVpZ2h0fVxuICAgICAgICAgICAgZmlsbD1cInRyYW5zcGFyZW50XCJcbiAgICAgICAgICAgIG9uTW91c2VNb3ZlPXtkYXRhID0+IGV2ZW50ID0+IHt9fVxuICAgICAgICAgICAgb25Nb3VzZUxlYXZlPXtkYXRhID0+IGV2ZW50ID0+IHt9fVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvc3ZnPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoUGFyZW50U2l6ZShDaGFydCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL2NoYXJ0LmpzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTs7O0FBQ0E7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7Ozs7O0FBRUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUNBOzs7OztBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBREE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUxBO0FBS0E7QUFDQTtBQUNBO0FBSUE7OztBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBREE7QUFJQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFJQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUVBO0FBRkE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFSQTtBQVVBO0FBVkE7QUFDQTtBQVdBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7O0FBTEE7QUFPQTtBQVBBO0FBQ0E7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTs7QUFQQTtBQVNBO0FBVEE7QUFDQTtBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBOztBQVBBO0FBU0E7QUFUQTtBQUNBO0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7O0FBUEE7QUFTQTtBQVRBO0FBQ0E7QUFRQTtBQUNBO0FBREE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFMQTs7QUFBQTtBQVVBO0FBVkE7QUFDQTs7Ozs7QUF4R0E7QUFDQTtBQW1IQTs7Ozs7OztBIiwic291cmNlUm9vdCI6IiJ9