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

var _style = __webpack_require__(393);

var _style2 = _interopRequireDefault(_style);

var _react = __webpack_require__(17);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/Users/prisc_000/code/CACDEV/vx-test/pages/exchanges.js?entry";

//   Create a Background component for the chart using svg. Define
//  a funtion that takes witdth and height  the produces and
//  svg d3 dom element. define the <svg container then what
//  we want in the container, her a <rect for our chart we can then
//  call the component in our app component wiht some test w/h values
function Background(_ref) {
  var width = _ref.width,
      height = _ref.height;

  return _react2.default.createElement("svg", { width: width, height: height, __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, _react2.default.createElement("rect", {
    width: width,
    height: height,
    fill: "steelblue",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }));
}

var App = function (_React$Component) {
  (0, _inherits3.default)(App, _React$Component);

  // Set up state
  function App(props) {
    (0, _classCallCheck3.default)(this, App);

    // Set data to empty object
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
        className: "jsx-338705054" + " " + "app",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        }
      }, _react2.default.createElement(Background, { width: 100, height: 100, __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        }
      }), _react2.default.createElement(_style2.default, {
        styleId: "338705054",
        css: ".app.jsx-338705054{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;position:absolute;top:0;left:0;right:0;bottom:0;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2V4Y2hhbmdlcy5qcz9lbnRyeSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUErQndCLEFBRzZCLDBFQUNNLGtCQUNiLE1BQ0MsT0FDQyxRQUNDLFNBQ1oiLCJmaWxlIjoicGFnZXMvZXhjaGFuZ2VzLmpzP2VudHJ5Iiwic291cmNlUm9vdCI6Ii9Vc2Vycy9wcmlzY18wMDAvY29kZS9DQUNERVYvdngtdGVzdCIsInNvdXJjZXNDb250ZW50IjpbIi8vICAgQ3JlYXRlIGEgQmFja2dyb3VuZCBjb21wb25lbnQgZm9yIHRoZSBjaGFydCB1c2luZyBzdmcuIERlZmluZVxuLy8gIGEgZnVudGlvbiB0aGF0IHRha2VzIHdpdGR0aCBhbmQgaGVpZ2h0ICB0aGUgcHJvZHVjZXMgYW5kXG4vLyAgc3ZnIGQzIGRvbSBlbGVtZW50LiBkZWZpbmUgdGhlIDxzdmcgY29udGFpbmVyIHRoZW4gd2hhdFxuLy8gIHdlIHdhbnQgaW4gdGhlIGNvbnRhaW5lciwgaGVyIGEgPHJlY3QgZm9yIG91ciBjaGFydCB3ZSBjYW4gdGhlblxuLy8gIGNhbGwgdGhlIGNvbXBvbmVudCBpbiBvdXIgYXBwIGNvbXBvbmVudCB3aWh0IHNvbWUgdGVzdCB3L2ggdmFsdWVzXG5mdW5jdGlvbiBCYWNrZ3JvdW5kKHt3aWR0aCwgaGVpZ2h0fSkge1xuXHRyZXR1cm4gKFxuICAgICAgICA8c3ZnIHdpZHRoPXt3aWR0aH0gaGVpZ2h0PXtoZWlnaHR9PlxuICAgICAgICAgICAgPHJlY3RcbiAgICAgICAgICAgIHdpZHRoPXt3aWR0aH1cbiAgICAgICAgICAgIGhlaWdodD17aGVpZ2h0fVxuICAgICAgICAgICAgZmlsbD1cInN0ZWVsYmx1ZVwiXG4gICAgICAgICAgICAvPlxuICAgICAgICA8L3N2Zz5cblx0KTtcbn1cblxuY2xhc3MgQXBwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICAvLyBTZXQgdXAgc3RhdGVcblx0Y29uc3RydWN0b3IocHJvcHMpIHtcblx0XHRzdXBlcihwcm9wcyk7XG4gICAgICAgIC8vIFNldCBkYXRhIHRvIGVtcHR5IG9iamVjdFxuXHRcdHRoaXMuc3RhdGUgPSB7XG5cdFx0XHRkYXRhOiB7fVxuXHRcdH07XG5cdH1cblx0cmVuZGVyKCkge1xuXHRcdGNvbnN0IHtkYXRhfSA9IHRoaXMuc3RhdGU7XG5cdFx0cmV0dXJuIChcblx0XHQ8ZGl2IGNsYXNzTmFtZT1cImFwcFwiPlxuICAgICAgICAgICAgPEJhY2tncm91bmQgd2lkdGg9ezEwMH0gaGVpZ2h0PXsxMDB9IC8+XG4gICAgICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICAuYXBwIHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OmZsZXg7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgIHRvcDowO1xuICAgICAgICAgICAgICAgIGxlZnQ6MDtcbiAgICAgICAgICAgICAgICByaWdodDowO1xuICAgICAgICAgICAgICAgIGJvdHRvbTowO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYH08L3N0eWxlPlxuXG4gICAgICAgIDwvZGl2PlxuXHRcdCk7XG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQXBwO1xuIl19 */\n/*@ sourceURL=pages/exchanges.js?entry */"
      }));
    }
  }]);

  return App;
}(_react2.default.Component);

exports.default = App;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2V4Y2hhbmdlcy5qcyJdLCJuYW1lcyI6WyJCYWNrZ3JvdW5kIiwid2lkdGgiLCJoZWlnaHQiLCJBcHAiLCJwcm9wcyIsInN0YXRlIiwiZGF0YSIsIlJlYWN0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFBLEFBQVMsaUJBQTRCO01BQWhCLEFBQWdCLGFBQWhCLEFBQWdCO01BQVQsQUFBUyxjQUFULEFBQVMsQUFDcEM7O3lCQUNPLGNBQUEsU0FBSyxPQUFMLEFBQVksT0FBTyxRQUFuQixBQUEyQjtnQkFBM0I7a0JBQUEsQUFDSTtBQURKO0dBQUE7V0FDSSxBQUNPLEFBQ1A7WUFGQSxBQUVRLEFBQ1I7VUFIQSxBQUdLOztnQkFITDtrQkFGWCxBQUNPLEFBQ0ksQUFPWDtBQVBXO0FBQ0E7OztJLEFBUU47K0JBQ0Y7O0FBQ0g7ZUFBQSxBQUFZLE9BQU87d0NBRVo7O0FBRlk7Z0lBQUEsQUFDWixBQUVOOztVQUFBLEFBQUs7WUFIYSxBQUdsQixBQUFhLEFBQ047QUFETSxBQUNaO1dBRUQ7Ozs7OzZCQUNRO1VBQUEsQUFDRCxPQUFRLEtBRFAsQUFDWSxNQURaLEFBQ0QsQUFDUDs7NkJBQ0EsY0FBQTsyQ0FBQSxBQUFlOztvQkFBZjtzQkFBQSxBQUNVO0FBRFY7QUFBQSxPQUFBLGdDQUNVLEFBQUMsY0FBVyxPQUFaLEFBQW1CLEtBQUssUUFBeEIsQUFBZ0M7b0JBQWhDO3NCQURWLEFBQ1U7QUFBQTs7aUJBRFY7YUFEQSxBQUNBLEFBZUE7QUFmQTs7Ozs7RUFaZ0IsZ0JBQU0sQSxBQThCeEI7O2tCQUFBLEFBQWUiLCJmaWxlIjoiZXhjaGFuZ2VzLmpzP2VudHJ5Iiwic291cmNlUm9vdCI6Ii9Vc2Vycy9wcmlzY18wMDAvY29kZS9DQUNERVYvdngtdGVzdCJ9

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS44ZjFlYWRjNmQyNWU5ZTBjNDg2ZS5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXMvZXhjaGFuZ2VzLmpzP2VlMDA3ZjUiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gICBDcmVhdGUgYSBCYWNrZ3JvdW5kIGNvbXBvbmVudCBmb3IgdGhlIGNoYXJ0IHVzaW5nIHN2Zy4gRGVmaW5lXG4vLyAgYSBmdW50aW9uIHRoYXQgdGFrZXMgd2l0ZHRoIGFuZCBoZWlnaHQgIHRoZSBwcm9kdWNlcyBhbmRcbi8vICBzdmcgZDMgZG9tIGVsZW1lbnQuIGRlZmluZSB0aGUgPHN2ZyBjb250YWluZXIgdGhlbiB3aGF0XG4vLyAgd2Ugd2FudCBpbiB0aGUgY29udGFpbmVyLCBoZXIgYSA8cmVjdCBmb3Igb3VyIGNoYXJ0IHdlIGNhbiB0aGVuXG4vLyAgY2FsbCB0aGUgY29tcG9uZW50IGluIG91ciBhcHAgY29tcG9uZW50IHdpaHQgc29tZSB0ZXN0IHcvaCB2YWx1ZXNcbmZ1bmN0aW9uIEJhY2tncm91bmQoe3dpZHRoLCBoZWlnaHR9KSB7XG5cdHJldHVybiAoXG4gICAgICAgIDxzdmcgd2lkdGg9e3dpZHRofSBoZWlnaHQ9e2hlaWdodH0+XG4gICAgICAgICAgICA8cmVjdFxuICAgICAgICAgICAgd2lkdGg9e3dpZHRofVxuICAgICAgICAgICAgaGVpZ2h0PXtoZWlnaHR9XG4gICAgICAgICAgICBmaWxsPVwic3RlZWxibHVlXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgIDwvc3ZnPlxuXHQpO1xufVxuXG5jbGFzcyBBcHAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIC8vIFNldCB1cCBzdGF0ZVxuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xuXHRcdHN1cGVyKHByb3BzKTtcbiAgICAgICAgLy8gU2V0IGRhdGEgdG8gZW1wdHkgb2JqZWN0XG5cdFx0dGhpcy5zdGF0ZSA9IHtcblx0XHRcdGRhdGE6IHt9XG5cdFx0fTtcblx0fVxuXHRyZW5kZXIoKSB7XG5cdFx0Y29uc3Qge2RhdGF9ID0gdGhpcy5zdGF0ZTtcblx0XHRyZXR1cm4gKFxuXHRcdDxkaXYgY2xhc3NOYW1lPVwiYXBwXCI+XG4gICAgICAgICAgICA8QmFja2dyb3VuZCB3aWR0aD17MTAwfSBoZWlnaHQ9ezEwMH0gLz5cbiAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgIC5hcHAge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6ZmxleDtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgdG9wOjA7XG4gICAgICAgICAgICAgICAgbGVmdDowO1xuICAgICAgICAgICAgICAgIHJpZ2h0OjA7XG4gICAgICAgICAgICAgICAgYm90dG9tOjA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBgfTwvc3R5bGU+XG5cbiAgICAgICAgPC9kaXY+XG5cdFx0KTtcblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCBBcHA7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWdlcy9leGNoYW5nZXMuanM/ZW50cnkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUdBO0FBQ0E7QUFBQTs7QUFIQTtBQU9BO0FBUEE7QUFDQTs7OztBQVNBO0FBQ0E7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUhBO0FBR0E7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUVBOzs7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7O0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUFBO0FBQUE7O0FBREE7QUFlQTtBQWZBOzs7OztBQVpBO0FBQ0E7QUE2QkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==