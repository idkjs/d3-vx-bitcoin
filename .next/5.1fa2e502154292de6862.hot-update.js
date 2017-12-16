webpackHotUpdate(5,{

/***/ 415:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(17);

var _react2 = _interopRequireDefault(_react);

var _responsive = __webpack_require__(395);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/Users/prisc_000/code/CACDEV/vx-test/components/chart.js";
/** Get with and heigth from this components parent
 * container and pass it to <Chart params with HOC.
 * 
 * svg is expecting width and heigth params since we moved title in here
 * we need to calculate the margines for rendering the title inside 
 * this component. We can do that with the info we get from parentSize
 */


function Chart(_ref) {
    var parentWidth = _ref.parentWidth,
        parentHeight = _ref.parentHeight;

    /** define margin for this div to pass to calculation for svg */
    var margin = {
        top: 15,
        bottom: 40,
        left: 0,
        right: 0
    };
    var width = parentWidth - margin.left - margin.right;
    var height = parentHeight - margin.top - margin.bottom;
    return _react2.default.createElement("div", {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 21
        }
    }, _react2.default.createElement("div", { className: "title", __source: {
            fileName: _jsxFileName,
            lineNumber: 22
        }
    }, "CAC40 VS NASDAQ"), _react2.default.createElement("svg", { width: width, height: height, __source: {
            fileName: _jsxFileName,
            lineNumber: 25
        }
    }, _react2.default.createElement("rect", { width: width, height: height, fill: "steelblue", __source: {
            fileName: _jsxFileName,
            lineNumber: 26
        }
    })));
}

exports.default = (0, _responsive.withParentSize)(Chart);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvY2hhcnQuanMiXSwibmFtZXMiOlsid2l0aFBhcmVudFNpemUiLCJDaGFydCIsInBhcmVudFdpZHRoIiwicGFyZW50SGVpZ2h0IiwibWFyZ2luIiwidG9wIiwiYm90dG9tIiwibGVmdCIsInJpZ2h0Iiwid2lkdGgiLCJoZWlnaHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFPQSxBQUFROzs7OztBQVBSOzs7Ozs7Ozs7QUFTQSxTQUFBLEFBQVMsWUFBbUM7UUFBNUIsQUFBNEIsbUJBQTVCLEFBQTRCO1FBQWYsQUFBZSxvQkFBZixBQUFlLEFBQ3hDOztBQUNBO1FBQU07YUFBUyxBQUNOLEFBQ0w7Z0JBRlcsQUFFSCxBQUNSO2NBSFcsQUFHTCxBQUNOO2VBSkosQUFBZSxBQUlMLEFBRVY7QUFOZSxBQUNYO1FBS0UsUUFBUSxjQUFjLE9BQWQsQUFBcUIsT0FBTyxPQUExQyxBQUFpRCxBQUNqRDtRQUFNLFNBQVMsZUFBZSxPQUFmLEFBQXNCLE1BQU0sT0FBM0MsQUFBa0QsQUFDckQ7MkJBQ08sY0FBQTs7c0JBQUE7d0JBQUEsQUFDSTtBQURKO0FBQUEsS0FBQSxrQkFDSSxjQUFBLFNBQUssV0FBTCxBQUFlO3NCQUFmO3dCQUFBO0FBQUE7T0FESixBQUNJLEFBR0Esb0NBQUEsY0FBQSxTQUFLLE9BQUwsQUFBWSxPQUFPLFFBQW5CLEFBQTJCO3NCQUEzQjt3QkFBQSxBQUNJO0FBREo7K0NBQ1UsT0FBTixBQUFhLE9BQU8sUUFBcEIsQUFBNEIsUUFBUSxNQUFwQyxBQUF5QztzQkFBekM7d0JBTmYsQUFDTyxBQUlJLEFBQ0ksQUFLZjtBQUxlOztBQU9oQjs7a0JBQWUsZ0NBQWYsQUFBZSxBQUFlIiwiZmlsZSI6ImNoYXJ0LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9wcmlzY18wMDAvY29kZS9DQUNERVYvdngtdGVzdCJ9

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/Users/prisc_000/code/CACDEV/vx-test/components/chart.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/prisc_000/code/CACDEV/vx-test/components/chart.js"); } } })();

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS4xZmEyZTUwMjE1NDI5MmRlNjg2Mi5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9jaGFydC5qcz9lZjc5MGMyIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKiBHZXQgd2l0aCBhbmQgaGVpZ3RoIGZyb20gdGhpcyBjb21wb25lbnRzIHBhcmVudFxuICogY29udGFpbmVyIGFuZCBwYXNzIGl0IHRvIDxDaGFydCBwYXJhbXMgd2l0aCBIT0MuXG4gKiBcbiAqIHN2ZyBpcyBleHBlY3Rpbmcgd2lkdGggYW5kIGhlaWd0aCBwYXJhbXMgc2luY2Ugd2UgbW92ZWQgdGl0bGUgaW4gaGVyZVxuICogd2UgbmVlZCB0byBjYWxjdWxhdGUgdGhlIG1hcmdpbmVzIGZvciByZW5kZXJpbmcgdGhlIHRpdGxlIGluc2lkZSBcbiAqIHRoaXMgY29tcG9uZW50LiBXZSBjYW4gZG8gdGhhdCB3aXRoIHRoZSBpbmZvIHdlIGdldCBmcm9tIHBhcmVudFNpemVcbiAqL1xuaW1wb3J0IHt3aXRoUGFyZW50U2l6ZX0gZnJvbSAnQHZ4L3Jlc3BvbnNpdmUnO1xuXG5mdW5jdGlvbiBDaGFydCh7cGFyZW50V2lkdGgsIHBhcmVudEhlaWdodH0pIHtcbiAgICAvKiogZGVmaW5lIG1hcmdpbiBmb3IgdGhpcyBkaXYgdG8gcGFzcyB0byBjYWxjdWxhdGlvbiBmb3Igc3ZnICovXG4gICAgY29uc3QgbWFyZ2luID0ge1xuICAgICAgICB0b3A6IDE1LFxuICAgICAgICBib3R0b206IDQwLFxuICAgICAgICBsZWZ0OiAwLFxuICAgICAgICByaWdodDowXG4gICAgfVxuICAgIGNvbnN0IHdpZHRoID0gcGFyZW50V2lkdGggLSBtYXJnaW4ubGVmdCAtIG1hcmdpbi5yaWdodDtcbiAgICBjb25zdCBoZWlnaHQgPSBwYXJlbnRIZWlnaHQgLSBtYXJnaW4udG9wIC0gbWFyZ2luLmJvdHRvbTtcblx0cmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGl0bGVcIj5cbiAgICAgICAgICAgICAgICBDQUM0MCBWUyBOQVNEQVEgXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxzdmcgd2lkdGg9e3dpZHRofSBoZWlnaHQ9e2hlaWdodH0+XG4gICAgICAgICAgICAgICAgPHJlY3Qgd2lkdGg9e3dpZHRofSBoZWlnaHQ9e2hlaWdodH0gZmlsbD1cInN0ZWVsYmx1ZVwiLz5cbiAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgXG5cdCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhQYXJlbnRTaXplKENoYXJ0KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvY2hhcnQuanMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPQTtBQUNBOzs7O0FBUkE7Ozs7Ozs7OztBQVNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBTEE7QUFLQTtBQUNBO0FBRUE7O0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFHQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFLQTtBQUxBOztBQU9BO0FBQ0E7QUFEQTs7Ozs7OztBIiwic291cmNlUm9vdCI6IiJ9