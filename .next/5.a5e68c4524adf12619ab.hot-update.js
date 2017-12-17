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

var _maxprice = __webpack_require__(655);

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
      lineNumber: 44
    }
  }, _react2.default.createElement("svg", { width: width, height: height, __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    }
  }, _react2.default.createElement(_gradient.LinearGradient, {
    id: "area-fill",
    from: "#46a2b4",
    to: "#46a2b4",
    fromOpacity: 0.3,
    toOpacity: 0,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    }
  }), _react2.default.createElement(_maxprice2.default, { data: {}, yScale: yScale, xScale: xScale, x: x, y: y, __source: {
      fileName: _jsxFileName,
      lineNumber: 53
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
      lineNumber: 54
    }
  }), _react2.default.createElement(_shape.LinePath, { data: data, yScale: yScale, xScale: xScale, x: x, y: y, __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    }
  })));
}

exports.default = (0, _responsive.withParentSize)(Chart);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvY2hhcnQuanMiXSwibmFtZXMiOlsid2l0aFBhcmVudFNpemUiLCJzY2FsZVRpbWUiLCJzY2FsZUxpbmVhciIsIkxpbmVQYXRoIiwiQXJlYUNsb3NlZCIsIkxpbmVhckdyYWRpZW50IiwiTWF4UHJpY2UiLCJDaGFydCIsImRhdGEiLCJwYXJlbnRXaWR0aCIsInBhcmVudEhlaWdodCIsIm1hcmdpbiIsInRvcCIsImJvdHRvbSIsImxlZnQiLCJyaWdodCIsIndpZHRoIiwiaGVpZ2h0IiwieCIsIkRhdGUiLCJkIiwidGltZSIsInkiLCJwcmljZSIsIm1pblByaWNlIiwiTWF0aCIsIm1pbiIsIm1hcCIsIm1heFByaWNlIiwibWF4IiwieFNjYWxlIiwicmFuZ2UiLCJkb21haW4iLCJ5U2NhbGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBUzs7QUFDVCxBQUFTLEFBQVc7O0FBQ3BCLEFBQVMsQUFBVTs7QUFDbkIsQUFBUzs7QUFFVCxBQUFPLEFBQWM7Ozs7Ozs7OztBQUVyQixTQUFBLEFBQVMsWUFBMkM7TUFBbkMsQUFBbUMsWUFBbkMsQUFBbUM7TUFBN0IsQUFBNkIsbUJBQTdCLEFBQTZCO01BQWhCLEFBQWdCLG9CQUFoQixBQUFnQixBQUNsRDs7QUFDQTtNQUFNO1NBQVMsQUFDUixBQUNMO1lBRmEsQUFFTCxBQUNSO1VBSGEsQUFHUCxBQUNOO1dBSkYsQUFBZSxBQUlOLEFBRVQ7QUFOZSxBQUNiO01BS0ksUUFBUSxjQUFjLE9BQWQsQUFBcUIsT0FBTyxPQUExQyxBQUFpRCxBQUNqRDtNQUFNLFNBQVMsZUFBZSxPQUFmLEFBQXNCLE1BQU0sT0FBM0MsQUFBa0QsQUFFbEQ7O0FBR0E7OztNQUFNLElBQUksU0FBSixBQUFJLEtBQUE7V0FBSyxJQUFBLEFBQUksS0FBSyxFQUFkLEFBQUssQUFBVztBQUExQixBQUNBO01BQU0sSUFBSSxTQUFKLEFBQUksS0FBQTtXQUFLLEVBQUwsQUFBTztBQUFqQixBQUVBOztNQUFNLFdBQVcsS0FBQSxBQUFLLGlEQUFPLEtBQUEsQUFBSyxJQUFsQyxBQUFpQixBQUFZLEFBQVMsQUFDdEM7TUFBTSxXQUFXLEtBQUEsQUFBSyxpREFBTyxLQUFBLEFBQUssSUFBbEMsQUFBaUIsQUFBWSxBQUFTLEFBQ3RDO01BQU07V0FDRyxDQUFBLEFBQUMsR0FEZSxBQUNoQixBQUFJLEFBQ1g7WUFBUSxDQUFDLEtBQUEsQUFBSyxpREFBTyxLQUFBLEFBQUssSUFBbEIsQUFBQyxBQUFZLEFBQVMsTUFBSyxLQUFBLEFBQUssaURBQU8sS0FBQSxBQUFLLElBRnRELEFBQWUsQUFBVSxBQUVmLEFBQTJCLEFBQVksQUFBUyxBQUcxRDtBQUx5QixBQUN2QixHQURhOztNQUtUO1dBQ0csQ0FBQSxBQUFDLFFBRGlCLEFBQ2xCLEFBQVMsQUFDaEI7WUFBUSxDQUFBLEFBQUMsVUFGWCxBQUFlLEFBQVksQUFFakIsQUFBVyxBQUdyQjtBQUwyQixBQUN6QixHQURhOztBQU1mO0FBRUE7O0FBQ0E7QUFDQTtBQUNBO3lCQUNFLGNBQUE7O2dCQUFBO2tCQUFBLEFBQ0U7QUFERjtBQUFBLEdBQUEsa0JBQ0UsY0FBQSxTQUFLLE9BQUwsQUFBWSxPQUFPLFFBQW5CLEFBQTJCO2dCQUEzQjtrQkFBQSxBQUNFO0FBREY7cUJBQ0UsQUFBQztRQUFELEFBQ0ssQUFDSDtVQUZGLEFBRU8sQUFDTDtRQUhGLEFBR0ssQUFDSDtpQkFKRixBQUllLEFBQ2I7ZUFMRixBQUthOztnQkFMYjtrQkFERixBQUNFLEFBT0E7QUFQQTtBQUNFLHNCQU1GLEFBQUMsb0NBQVMsTUFBVixBQUFnQixJQUFJLFFBQXBCLEFBQTRCLFFBQVEsUUFBcEMsQUFBNEMsUUFBUSxHQUFwRCxBQUF1RCxHQUFHLEdBQTFELEFBQTZEO2dCQUE3RDtrQkFSRixBQVFFLEFBQ0E7QUFEQTtzQkFDQSxBQUFDO1VBQUQsQUFDUSxBQUNOO1lBRkYsQUFFVSxBQUNSO1lBSEYsQUFHVSxBQUNSO09BSkYsQUFJSyxBQUNIO09BTEYsQUFLSyxBQUNIO1VBTkYsQUFNTyxBQUNMO1lBUEYsQUFPUzs7Z0JBUFQ7a0JBVEYsQUFTRSxBQVNBO0FBVEE7QUFDRSxzQkFRRixBQUFDLGlDQUFTLE1BQVYsQUFBZ0IsTUFBTSxRQUF0QixBQUE4QixRQUFRLFFBQXRDLEFBQThDLFFBQVEsR0FBdEQsQUFBeUQsR0FBRyxHQUE1RCxBQUErRDtnQkFBL0Q7a0JBcEJOLEFBQ0UsQUFDRSxBQWtCRSxBQUlQO0FBSk87O0FBTVI7O2tCQUFlLGdDQUFmLEFBQWUsQUFBZSIsImZpbGUiOiJjaGFydC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvcHJpc2NfMDAwL2NvZGUvQ0FDREVWL3Z4LXRlc3QifQ==

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/Users/prisc_000/code/CACDEV/vx-test/components/chart.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/prisc_000/code/CACDEV/vx-test/components/chart.js"); } } })();

/***/ }),

/***/ 655:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(17);

var _react2 = _interopRequireDefault(_react);

var _shape = __webpack_require__(601);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/Users/prisc_000/code/CACDEV/vx-test/components/maxprice.js";

exports.default = function (_ref) {
  var data = _ref.data,
      label = _ref.label,
      yScale = _ref.yScale,
      xScale = _ref.xScale,
      yText = _ref.yText,
      x = _ref.x,
      y = _ref.y;

  return (
    // <g> = group tag
    _react2.default.createElement("g", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 6
      }
    }, _react2.default.createElement(_shape.LinePath, { data: data, yScale: yScale, xScale: xScale, x: x, y: y, __source: {
        fileName: _jsxFileName,
        lineNumber: 7
      }
    }), _react2.default.createElement("text", { y: yText, fontSize: "12", __source: {
        fileName: _jsxFileName,
        lineNumber: 8
      }
    }, label))
  );
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvbWF4cHJpY2UuanMiXSwibmFtZXMiOlsiTGluZVBhdGgiLCJkYXRhIiwibGFiZWwiLCJ5U2NhbGUiLCJ4U2NhbGUiLCJ5VGV4dCIsIngiLCJ5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsQUFBUyxBQUVUOzs7Ozs7a0JBQWUsZ0JBQWtEO01BQS9DLEFBQStDLFlBQS9DLEFBQStDO01BQXpDLEFBQXlDLGFBQXpDLEFBQXlDO01BQWxDLEFBQWtDLGNBQWxDLEFBQWtDO01BQTFCLEFBQTBCLGNBQTFCLEFBQTBCO01BQWxCLEFBQWtCLGFBQWxCLEFBQWtCO01BQVgsQUFBVyxTQUFYLEFBQVc7TUFBUixBQUFRLFNBQVIsQUFBUSxBQUMvRDs7QUFDRTtBQUNBO29CQUFBLGNBQUE7O2tCQUFBO29CQUFBLEFBQ0U7QUFERjtBQUFBLHVCQUNFLEFBQUMsaUNBQVMsTUFBVixBQUFnQixNQUFNLFFBQXRCLEFBQThCLFFBQVEsUUFBdEMsQUFBOEMsUUFBUSxHQUF0RCxBQUF5RCxHQUFHLEdBQTVELEFBQStEO2tCQUEvRDtvQkFERixBQUNFLEFBQ0E7QUFEQTt3QkFDQSxjQUFBLFVBQU0sR0FBTixBQUFTLE9BQU8sVUFBaEIsQUFBeUI7a0JBQXpCO29CQUFBLEFBQ0c7QUFESDtPQUpKLEFBRUUsQUFFRSxBQUtMOztBQVZEIiwiZmlsZSI6Im1heHByaWNlLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9wcmlzY18wMDAvY29kZS9DQUNERVYvdngtdGVzdCJ9

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/Users/prisc_000/code/CACDEV/vx-test/components/maxprice.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/prisc_000/code/CACDEV/vx-test/components/maxprice.js"); } } })();

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS5hNWU2OGM0NTI0YWRmMTI2MTlhYi5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9jaGFydC5qcz83MzJmY2UxIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbWF4cHJpY2UuanM/ZjFkMzZkZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB3aXRoUGFyZW50U2l6ZSB9IGZyb20gXCJAdngvcmVzcG9uc2l2ZVwiO1xuaW1wb3J0IHsgc2NhbGVUaW1lLCBzY2FsZUxpbmVhciB9IGZyb20gXCJAdngvc2NhbGVcIjtcbmltcG9ydCB7IExpbmVQYXRoLCBBcmVhQ2xvc2VkIH0gZnJvbSBcIkB2eC9zaGFwZVwiO1xuaW1wb3J0IHsgTGluZWFyR3JhZGllbnQgfSBmcm9tIFwiQHZ4L2dyYWRpZW50XCI7XG5cbmltcG9ydCBNYXhQcmljZSBmcm9tIFwiLi9tYXhwcmljZVwiO1xuXG5mdW5jdGlvbiBDaGFydCh7IGRhdGEsIHBhcmVudFdpZHRoLCBwYXJlbnRIZWlnaHQgfSkge1xuICAvKiogRGVmaW5lIG1hcmdpbiBmb3IgdGhpcyBkaXYgdG8gcGFzcyB0byBjYWxjdWxhdGlvbiBmb3Igc3ZnICovXG4gIGNvbnN0IG1hcmdpbiA9IHtcbiAgICB0b3A6IDE1LFxuICAgIGJvdHRvbTogNDAsXG4gICAgbGVmdDogMCxcbiAgICByaWdodDogMFxuICB9O1xuICBjb25zdCB3aWR0aCA9IHBhcmVudFdpZHRoIC0gbWFyZ2luLmxlZnQgLSBtYXJnaW4ucmlnaHQ7XG4gIGNvbnN0IGhlaWdodCA9IHBhcmVudEhlaWdodCAtIG1hcmdpbi50b3AgLSBtYXJnaW4uYm90dG9tO1xuXG4gIC8qKiBEZWZpbmUgYWNjZXNzb3JzIGFuZCB2YWx1ZXMgdG8gYmUgcGFzc2VkIHRvIG91ciBzaGFwZXNcbiAgICovXG5cbiAgY29uc3QgeCA9IGQgPT4gbmV3IERhdGUoZC50aW1lKTtcbiAgY29uc3QgeSA9IGQgPT4gZC5wcmljZTtcblxuICBjb25zdCBtaW5QcmljZSA9IE1hdGgubWluKC4uLmRhdGEubWFwKHkpKTtcbiAgY29uc3QgbWF4UHJpY2UgPSBNYXRoLm1heCguLi5kYXRhLm1hcCh5KSk7XG4gIGNvbnN0IHhTY2FsZSA9IHNjYWxlVGltZSh7XG4gICAgcmFuZ2U6IFswLCB3aWR0aF0sXG4gICAgZG9tYWluOiBbTWF0aC5taW4oLi4uZGF0YS5tYXAoeCkpLCBNYXRoLm1heCguLi5kYXRhLm1hcCh4KSldXG4gIH0pO1xuXG4gIGNvbnN0IHlTY2FsZSA9IHNjYWxlTGluZWFyKHtcbiAgICByYW5nZTogW2hlaWdodCwgMF0sXG4gICAgZG9tYWluOiBbbWluUHJpY2UsIG1heFByaWNlXVxuICB9KTtcblxuICAvLyBjb25zb2xlLmxvZyh4U2NhbGUuZG9tYWluKCkpO1xuICAvLyBjb25zb2xlLmxvZyh5U2NhbGUuZG9tYWluKCkpO1xuXG4gIC8qIGVuZCBhY2Nlc3NvciB2YWx1ZXMgKi9cbiAgLy8gICBjYWxsIDxMaW5lUGF0aCwgcGFzcyBpbiB0aGUgZGF0YSwgeFNjYWxlLCB5U2NhbGUgZG9tYWluIG1hcHBlcnMsXG4gIC8vICBhbmQgeCBhbmQgeSBhY2Nlc3NvcnNcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPHN2ZyB3aWR0aD17d2lkdGh9IGhlaWdodD17aGVpZ2h0fT5cbiAgICAgICAgPExpbmVhckdyYWRpZW50XG4gICAgICAgICAgaWQ9XCJhcmVhLWZpbGxcIlxuICAgICAgICAgIGZyb209XCIjNDZhMmI0XCJcbiAgICAgICAgICB0bz1cIiM0NmEyYjRcIlxuICAgICAgICAgIGZyb21PcGFjaXR5PXswLjN9XG4gICAgICAgICAgdG9PcGFjaXR5PXswfVxuICAgICAgICAvPlxuICAgICAgICA8TWF4UHJpY2UgZGF0YT17e319IHlTY2FsZT17eVNjYWxlfSB4U2NhbGU9e3hTY2FsZX0geD17eH0geT17eX0gLz5cbiAgICAgICAgPEFyZWFDbG9zZWRcbiAgICAgICAgICBkYXRhPXtkYXRhfVxuICAgICAgICAgIHlTY2FsZT17eVNjYWxlfVxuICAgICAgICAgIHhTY2FsZT17eFNjYWxlfVxuICAgICAgICAgIHg9e3h9XG4gICAgICAgICAgeT17eX1cbiAgICAgICAgICBmaWxsPVwidXJsKCNhcmVhLWZpbGwpXCJcbiAgICAgICAgICBzdHJva2U9XCJ0cmFuc3BhcmVudFwiXG4gICAgICAgIC8+XG4gICAgICAgIDxMaW5lUGF0aCBkYXRhPXtkYXRhfSB5U2NhbGU9e3lTY2FsZX0geFNjYWxlPXt4U2NhbGV9IHg9e3h9IHk9e3l9IC8+XG4gICAgICA8L3N2Zz5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFBhcmVudFNpemUoQ2hhcnQpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9jaGFydC5qcyIsImltcG9ydCB7IExpbmVQYXRoIH0gZnJvbSBcIkB2eC9zaGFwZVwiO1xuXG5leHBvcnQgZGVmYXVsdCAoeyBkYXRhLCBsYWJlbCwgeVNjYWxlLCB4U2NhbGUsIHlUZXh0LCB4LCB5IH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICAvLyA8Zz4gPSBncm91cCB0YWdcbiAgICA8Zz5cbiAgICAgIDxMaW5lUGF0aCBkYXRhPXtkYXRhfSB5U2NhbGU9e3lTY2FsZX0geFNjYWxlPXt4U2NhbGV9IHg9e3h9IHk9e3l9IC8+XG4gICAgICA8dGV4dCB5PXt5VGV4dH0gZm9udFNpemU9XCIxMlwiPlxuICAgICAgICB7bGFiZWx9XG4gICAgICA8L3RleHQ+XG4gICAgPC9nPlxuICApO1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvbWF4cHJpY2UuanMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUxBO0FBS0E7QUFDQTtBQUNBO0FBSUE7OztBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBSUE7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7O0FBTEE7QUFPQTtBQVBBO0FBQ0E7QUFNQTtBQUNBO0FBREE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBOztBQVBBO0FBU0E7QUFUQTtBQUNBO0FBUUE7QUFJQTtBQUpBOztBQU1BO0FBQ0E7QUFEQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEVBO0FBQ0E7Ozs7O0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBOztBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFLQTs7QUFWQTs7Ozs7OztBIiwic291cmNlUm9vdCI6IiJ9