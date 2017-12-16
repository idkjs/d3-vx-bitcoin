webpackHotUpdate(5,{

/***/ 392:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/Users/prisc_000/code/CACDEV/vx-test/pages/exchanges.js?entry";


var App = function (_React$Component) {
    (0, _inherits3.default)(App, _React$Component);

    // set up state
    function App(props) {
        (0, _classCallCheck3.default)(this, App);

        // set data to empty object
        var _this = (0, _possibleConstructorReturn3.default)(this, (App.__proto__ || (0, _getPrototypeOf2.default)(App)).call(this, props));

        _this.state = {
            data: {}
        };
        return _this;
    }

    (0, _createClass3.default)(App, [{
        key: "render",
        value: function render() {
            var data = this.state.data;

            return _react2.default.createElement("div", {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 12
                }
            }, "App");
        }
    }]);

    return App;
}(_react2.default.Component);

exports.default = App;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2V4Y2hhbmdlcy5qcyJdLCJuYW1lcyI6WyJBcHAiLCJwcm9wcyIsInN0YXRlIiwiZGF0YSIsIlJlYWN0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUFPLEE7aUNBQ0g7O0FBQ0E7aUJBQUEsQUFBWSxPQUFPOzRDQUVmOztBQUZlO29JQUFBLEFBQ1QsQUFFTjs7Y0FBQSxBQUFLO2tCQUhVLEFBR2YsQUFBYSxBQUNIO0FBREcsQUFDVDtlQUVQOzs7OztpQ0FDUTtnQkFBQSxBQUNHLE9BQVMsS0FEWixBQUNpQixNQURqQixBQUNHLEFBQ1I7O21DQUFPLGNBQUE7OzhCQUFBO2dDQUFBO0FBQUE7QUFBQSxhQUFBLEVBQVAsQUFBTyxBQUNWOzs7OztFQVpjLGdCQUFNLEEsQUFlekI7O2tCQUFBLEFBQWUiLCJmaWxlIjoiZXhjaGFuZ2VzLmpzP2VudHJ5Iiwic291cmNlUm9vdCI6Ii9Vc2Vycy9wcmlzY18wMDAvY29kZS9DQUNERVYvdngtdGVzdCJ9

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/Users/prisc_000/code/CACDEV/vx-test/pages/exchanges.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/prisc_000/code/CACDEV/vx-test/pages/exchanges.js"); } } })();
    (function (Component, route) {
      if (false) return
      if (false) return

      var qs = __webpack_require__(84)
      var params = qs.parse(__resourceQuery.slice(1))
      if (params.entry == null) return

      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/exchanges")
  
/* WEBPACK VAR INJECTION */}.call(exports, "?entry"))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS5lMDgwODIyYzA3ZGFjODI3YTJlNS5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXMvZXhjaGFuZ2VzLmpzPzFiMTA2NTgiXSwic291cmNlc0NvbnRlbnQiOlsiIGNsYXNzIEFwcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgLy8gc2V0IHVwIHN0YXRlXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICAvLyBzZXQgZGF0YSB0byBlbXB0eSBvYmplY3RcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIGRhdGE6IHt9XG4gICAgICAgIH07XG4gICAgfVxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3QgeyBkYXRhIH0gPSB0aGlzLnN0YXRlO1xuICAgICAgICByZXR1cm4gPGRpdj5BcHA8L2Rpdj47XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBBcHA7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFnZXMvZXhjaGFuZ2VzLmpzP2VudHJ5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFIQTtBQUdBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFFQTs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7QUFYQTtBQUNBO0FBY0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==