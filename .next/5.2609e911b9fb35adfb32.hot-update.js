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

var _gradient = __webpack_require__(403);

var _responsive = __webpack_require__(395);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/prisc_000/code/CACDEV/vx-test/pages/exchanges.js?entry';


function Background(_ref) {
    var width = _ref.width,
        height = _ref.height;

    return _react2.default.createElement('svg', { width: width, height: height, __source: {
            fileName: _jsxFileName,
            lineNumber: 6
        }
    }, _react2.default.createElement(_gradient.LinearGradient, { id: 'fill', vertical: false, __source: {
            fileName: _jsxFileName,
            lineNumber: 7
        }
    }, _react2.default.createElement('stop', { stopColor: '#a943e4', offset: '0%', __source: {
            fileName: _jsxFileName,
            lineNumber: 8
        }
    }), _react2.default.createElement('stop', { stopColor: '#f55989', offset: '50%', __source: {
            fileName: _jsxFileName,
            lineNumber: 9
        }
    }), _react2.default.createElement('stop', { stopColor: '#ffaf84', offset: '100%', __source: {
            fileName: _jsxFileName,
            lineNumber: 10
        }
    })), _react2.default.createElement('rect', { width: width, height: height, fill: 'url(#fill)', __source: {
            fileName: _jsxFileName,
            lineNumber: 13
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
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this2 = this;

            fetch('http://localhost:8000').then(function (res) {
                return res.json();
            }).then(function (json) {
                _this2.setState({
                    data: json
                });
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var _props = this.props,
                screenWidth = _props.screenWidth,
                screenHeight = _props.screenHeight;
            var data = this.state.data;

            console.log(data);
            return _react2.default.createElement('div', {
                className: 'jsx-2092225112' + ' ' + 'app',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 41
                }
            }, _react2.default.createElement(Background, { width: screenWidth, height: screenHeight, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 42
                }
            }), _react2.default.createElement('div', {
                className: 'jsx-2092225112' + ' ' + 'center',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 43
                }
            }, _react2.default.createElement('div', {
                className: 'jsx-2092225112' + ' ' + 'chart',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 44
                }
            }, 'Chart')), _react2.default.createElement(_style2.default, {
                styleId: '2092225112',
                css: '.app.jsx-2092225112,.center.jsx-2092225112{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;position:absolute;top:0;left:0;right:0;bottom:0;-webkit-flex:1;-ms-flex:1;flex:1;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;font-family:arial;}.chart.jsx-2092225112{width:600px;height:400px;background-color:#27273f;border-radius:8px;color:white;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2V4Y2hhbmdlcy5qcz9lbnRyeSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE2Q3dCLEFBSTZCLEFBWUEsWUFDQyxhQUNZLHlCQUNQLGtCQUNOLE1BZk0sTUFnQnRCLFlBZlMsTUFDQyxPQUNDLFFBQ0MsU0FDRixpQ0FDaUIsbUdBQ0osNkZBQ0Qsa0JBQ3RCIiwiZmlsZSI6InBhZ2VzL2V4Y2hhbmdlcy5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiIvVXNlcnMvcHJpc2NfMDAwL2NvZGUvQ0FDREVWL3Z4LXRlc3QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0xpbmVhckdyYWRpZW50fSBmcm9tICdAdngvZ3JhZGllbnQnO1xuaW1wb3J0IHt3aXRoU2NyZWVuU2l6ZX0gZnJvbSAnQHZ4L3Jlc3BvbnNpdmUnO1xuXG5mdW5jdGlvbiBCYWNrZ3JvdW5kKHt3aWR0aCwgaGVpZ2h0fSkge1xuXHRyZXR1cm4gKFxuICAgICAgICA8c3ZnIHdpZHRoPXt3aWR0aH0gaGVpZ2h0PXtoZWlnaHR9PlxuICAgICAgICAgICAgPExpbmVhckdyYWRpZW50IGlkPVwiZmlsbFwiIHZlcnRpY2FsPXtmYWxzZX0+XG4gICAgICAgICAgICAgICAgPHN0b3Agc3RvcENvbG9yPVwiI2E5NDNlNFwiIG9mZnNldD1cIjAlXCIgLz5cbiAgICAgICAgICAgICAgICA8c3RvcCBzdG9wQ29sb3I9XCIjZjU1OTg5XCIgb2Zmc2V0PVwiNTAlXCIgLz5cbiAgICAgICAgICAgICAgICA8c3RvcCBzdG9wQ29sb3I9XCIjZmZhZjg0XCIgb2Zmc2V0PVwiMTAwJVwiIC8+XG4gICAgICAgICAgICA8L0xpbmVhckdyYWRpZW50PlxuICAgICAgICAgICAgey8qIDxyZWN0IGZpbGwgYXR0cmlidXRlIGlzIHBvaW50aW5nIHRvIDxMRyBpZD1cImZpbGxcIiAqL31cbiAgICAgICAgPHJlY3Qgd2lkdGg9e3dpZHRofSBoZWlnaHQ9e2hlaWdodH0gZmlsbD1cInVybCgjZmlsbClcIi8+XG4gICAgICAgIDwvc3ZnPlxuXHQpO1xufVxuXG5jbGFzcyBBcHAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIC8vIFNldCB1cCBzdGF0ZVxuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xuXHRcdHN1cGVyKHByb3BzKTtcbiAgICAgICAgLy8gU2V0IGRhdGEgdG8gZW1wdHkgb2JqZWN0XG5cdFx0dGhpcy5zdGF0ZSA9IHtcblx0XHRcdGRhdGE6IHt9XG5cdFx0fTtcblx0fVxuXHRjb21wb25lbnREaWRNb3VudCgpIHtcblx0XHRmZXRjaCgnaHR0cDovL2xvY2FsaG9zdDo4MDAwJylcbiAgICAgICAgLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpXG4gICAgICAgIC50aGVuKGpzb24gPT4ge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgZGF0YToganNvblxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuXHR9XG5cdHJlbmRlcigpIHtcblx0XHRjb25zdCB7c2NyZWVuV2lkdGgsIHNjcmVlbkhlaWdodH0gPSB0aGlzLnByb3BzO1xuXHRcdGNvbnN0IHtkYXRhfSA9IHRoaXMuc3RhdGU7XG5cdFx0Y29uc29sZS5sb2coZGF0YSk7XG5cdFx0cmV0dXJuIChcblx0XHQ8ZGl2IGNsYXNzTmFtZT1cImFwcFwiPlxuICAgICAgICAgICAgPEJhY2tncm91bmQgd2lkdGg9e3NjcmVlbldpZHRofSBoZWlnaHQ9e3NjcmVlbkhlaWdodH0gLz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaGFydFwiPkNoYXJ0PC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgIC5hcHAsXG4gICAgICAgICAgICAuY2VudGVyIHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OmZsZXg7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgIHRvcDowO1xuICAgICAgICAgICAgICAgIGxlZnQ6MDtcbiAgICAgICAgICAgICAgICByaWdodDowO1xuICAgICAgICAgICAgICAgIGJvdHRvbTowO1xuICAgICAgICAgICAgICAgIGZsZXg6MTtcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBhcmlhbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5jaGFydCB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDYwMHB4O1xuICAgICAgICAgICAgICAgIGhlaWdodDogNDAwcHg7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzI3MjczZjtcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgfSAgICAgICBcbiAgICAgICAgICAgIGB9PC9zdHlsZT5cblxuICAgICAgICA8L2Rpdj5cblx0XHQpO1xuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTY3JlZW5TaXplKEFwcCk7XG4iXX0= */\n/*@ sourceURL=pages/exchanges.js?entry */'
            }));
        }
    }]);

    return App;
}(_react2.default.Component);

exports.default = (0, _responsive.withScreenSize)(App);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2V4Y2hhbmdlcy5qcyJdLCJuYW1lcyI6WyJMaW5lYXJHcmFkaWVudCIsIndpdGhTY3JlZW5TaXplIiwiQmFja2dyb3VuZCIsIndpZHRoIiwiaGVpZ2h0IiwiQXBwIiwicHJvcHMiLCJzdGF0ZSIsImRhdGEiLCJmZXRjaCIsInRoZW4iLCJyZXMiLCJqc29uIiwic2V0U3RhdGUiLCJzY3JlZW5XaWR0aCIsInNjcmVlbkhlaWdodCIsImNvbnNvbGUiLCJsb2ciLCJSZWFjdCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQVE7O0FBQ1IsQUFBUTs7Ozs7OztBQUVSLFNBQUEsQUFBUyxpQkFBNEI7UUFBaEIsQUFBZ0IsYUFBaEIsQUFBZ0I7UUFBVCxBQUFTLGNBQVQsQUFBUyxBQUNwQzs7MkJBQ08sY0FBQSxTQUFLLE9BQUwsQUFBWSxPQUFPLFFBQW5CLEFBQTJCO3NCQUEzQjt3QkFBQSxBQUNJO0FBREo7S0FBQSxrQkFDSSxBQUFDLDBDQUFlLElBQWhCLEFBQW1CLFFBQU8sVUFBMUIsQUFBb0M7c0JBQXBDO3dCQUFBLEFBQ0k7QUFESjsrQ0FDVSxXQUFOLEFBQWdCLFdBQVUsUUFBMUIsQUFBaUM7c0JBQWpDO3dCQURKLEFBQ0ksQUFDQTtBQURBO2dEQUNNLFdBQU4sQUFBZ0IsV0FBVSxRQUExQixBQUFpQztzQkFBakM7d0JBRkosQUFFSSxBQUNBO0FBREE7Z0RBQ00sV0FBTixBQUFnQixXQUFVLFFBQTFCLEFBQWlDO3NCQUFqQzt3QkFKUixBQUNJLEFBR0ksQUFHUjtBQUhRO2lEQUdGLE9BQU4sQUFBYSxPQUFPLFFBQXBCLEFBQTRCLFFBQVEsTUFBcEMsQUFBeUM7c0JBQXpDO3dCQVJQLEFBQ08sQUFPQSxBQUdQO0FBSE87Ozs7SSxBQUtGO2lDQUNGOztBQUNIO2lCQUFBLEFBQVksT0FBTzs0Q0FFWjs7QUFGWTtvSUFBQSxBQUNaLEFBRU47O2NBQUEsQUFBSztrQkFIYSxBQUdsQixBQUFhLEFBQ047QUFETSxBQUNaO2VBRUQ7Ozs7OzRDQUNtQjt5QkFDbkI7O2tCQUFBLEFBQU0seUJBQU4sQUFDTyxLQUFLLGVBQUE7dUJBQU8sSUFBUCxBQUFPLEFBQUk7QUFEdkIsZUFBQSxBQUVPLEtBQUssZ0JBQVEsQUFDVjt1QkFBQSxBQUFLOzBCQUFMLEFBQWMsQUFDSixBQUViO0FBSGlCLEFBQ1Y7QUFKZCxBQU9BOzs7O2lDQUNRO3lCQUM0QixLQUQ1QixBQUNpQztnQkFEakMsQUFDRCxxQkFEQyxBQUNEO2dCQURDLEFBQ1ksc0JBRFosQUFDWTtnQkFEWixBQUVELE9BQVEsS0FGUCxBQUVZLE1BRlosQUFFRCxBQUNQOztvQkFBQSxBQUFRLElBQVIsQUFBWSxBQUNaO21DQUNBLGNBQUE7b0RBQUEsQUFBZTs7OEJBQWY7Z0NBQUEsQUFDVTtBQURWO0FBQUEsYUFBQSxnQ0FDVSxBQUFDLGNBQVcsT0FBWixBQUFtQixhQUFhLFFBQWhDLEFBQXdDOzhCQUF4QztnQ0FEVixBQUNVLEFBQ0E7QUFEQTtnQ0FDQSxjQUFBO29EQUFBLEFBQWU7OzhCQUFmO2dDQUFBLEFBQ0k7QUFESjtBQUFBLCtCQUNJLGNBQUE7b0RBQUEsQUFBZTs7OEJBQWY7Z0NBQUE7QUFBQTtBQUFBLGVBSGQsQUFFVSxBQUNJO3lCQUhkO3FCQURBLEFBQ0EsQUE4QkE7QUE5QkE7Ozs7O0VBdkJnQixnQkFBTSxBLEFBd0R4Qjs7a0JBQWUsZ0NBQWYsQUFBZSxBQUFlIiwiZmlsZSI6ImV4Y2hhbmdlcy5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiIvVXNlcnMvcHJpc2NfMDAwL2NvZGUvQ0FDREVWL3Z4LXRlc3QifQ==

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS4yNjA5ZTkxMWI5ZmIzNWFkZmIzMi5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXMvZXhjaGFuZ2VzLmpzPzVmMzc3MjgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtMaW5lYXJHcmFkaWVudH0gZnJvbSAnQHZ4L2dyYWRpZW50JztcbmltcG9ydCB7d2l0aFNjcmVlblNpemV9IGZyb20gJ0B2eC9yZXNwb25zaXZlJztcblxuZnVuY3Rpb24gQmFja2dyb3VuZCh7d2lkdGgsIGhlaWdodH0pIHtcblx0cmV0dXJuIChcbiAgICAgICAgPHN2ZyB3aWR0aD17d2lkdGh9IGhlaWdodD17aGVpZ2h0fT5cbiAgICAgICAgICAgIDxMaW5lYXJHcmFkaWVudCBpZD1cImZpbGxcIiB2ZXJ0aWNhbD17ZmFsc2V9PlxuICAgICAgICAgICAgICAgIDxzdG9wIHN0b3BDb2xvcj1cIiNhOTQzZTRcIiBvZmZzZXQ9XCIwJVwiIC8+XG4gICAgICAgICAgICAgICAgPHN0b3Agc3RvcENvbG9yPVwiI2Y1NTk4OVwiIG9mZnNldD1cIjUwJVwiIC8+XG4gICAgICAgICAgICAgICAgPHN0b3Agc3RvcENvbG9yPVwiI2ZmYWY4NFwiIG9mZnNldD1cIjEwMCVcIiAvPlxuICAgICAgICAgICAgPC9MaW5lYXJHcmFkaWVudD5cbiAgICAgICAgICAgIHsvKiA8cmVjdCBmaWxsIGF0dHJpYnV0ZSBpcyBwb2ludGluZyB0byA8TEcgaWQ9XCJmaWxsXCIgKi99XG4gICAgICAgIDxyZWN0IHdpZHRoPXt3aWR0aH0gaGVpZ2h0PXtoZWlnaHR9IGZpbGw9XCJ1cmwoI2ZpbGwpXCIvPlxuICAgICAgICA8L3N2Zz5cblx0KTtcbn1cblxuY2xhc3MgQXBwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICAvLyBTZXQgdXAgc3RhdGVcblx0Y29uc3RydWN0b3IocHJvcHMpIHtcblx0XHRzdXBlcihwcm9wcyk7XG4gICAgICAgIC8vIFNldCBkYXRhIHRvIGVtcHR5IG9iamVjdFxuXHRcdHRoaXMuc3RhdGUgPSB7XG5cdFx0XHRkYXRhOiB7fVxuXHRcdH07XG5cdH1cblx0Y29tcG9uZW50RGlkTW91bnQoKSB7XG5cdFx0ZmV0Y2goJ2h0dHA6Ly9sb2NhbGhvc3Q6ODAwMCcpXG4gICAgICAgIC50aGVuKHJlcyA9PiByZXMuanNvbigpKVxuICAgICAgICAudGhlbihqc29uID0+IHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgIGRhdGE6IGpzb25cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcblx0fVxuXHRyZW5kZXIoKSB7XG5cdFx0Y29uc3Qge3NjcmVlbldpZHRoLCBzY3JlZW5IZWlnaHR9ID0gdGhpcy5wcm9wcztcblx0XHRjb25zdCB7ZGF0YX0gPSB0aGlzLnN0YXRlO1xuXHRcdGNvbnNvbGUubG9nKGRhdGEpO1xuXHRcdHJldHVybiAoXG5cdFx0PGRpdiBjbGFzc05hbWU9XCJhcHBcIj5cbiAgICAgICAgICAgIDxCYWNrZ3JvdW5kIHdpZHRoPXtzY3JlZW5XaWR0aH0gaGVpZ2h0PXtzY3JlZW5IZWlnaHR9IC8+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNlbnRlclwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2hhcnRcIj5DaGFydDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICAuYXBwLFxuICAgICAgICAgICAgLmNlbnRlciB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTpmbGV4O1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICB0b3A6MDtcbiAgICAgICAgICAgICAgICBsZWZ0OjA7XG4gICAgICAgICAgICAgICAgcmlnaHQ6MDtcbiAgICAgICAgICAgICAgICBib3R0b206MDtcbiAgICAgICAgICAgICAgICBmbGV4OjE7XG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogYXJpYWw7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuY2hhcnQge1xuICAgICAgICAgICAgICAgIHdpZHRoOiA2MDBweDtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDQwMHB4O1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMyNzI3M2Y7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgIH0gICAgICAgXG4gICAgICAgICAgICBgfTwvc3R5bGU+XG5cbiAgICAgICAgPC9kaXY+XG5cdFx0KTtcblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoU2NyZWVuU2l6ZShBcHApO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFnZXMvZXhjaGFuZ2VzLmpzP2VudHJ5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7Ozs7OztBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBR0E7QUFIQTtBQUdBO0FBQUE7QUFHQTtBQUhBOzs7OztBQU1BO0FBQ0E7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUhBO0FBR0E7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUVBOzs7OztBQUNBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFEQTtBQUdBO0FBR0E7QUFGQTtBQUdBOzs7O0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQUFBOztBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFBQTs7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSEE7QUE4QkE7QUE5QkE7Ozs7O0FBdkJBO0FBQ0E7QUF1REE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==