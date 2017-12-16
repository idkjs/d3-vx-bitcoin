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
    key: 'render',
    value: function render() {
      var _props = this.props,
          screenWidth = _props.screenWidth,
          screenHeight = _props.screenHeight;
      var data = this.state.data;

      return _react2.default.createElement('div', {
        className: 'jsx-579481127' + ' ' + 'app',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        }
      }, _react2.default.createElement(Background, { width: screenWidth, height: screenHeight, __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        }
      }), _react2.default.createElement('div', {
        className: 'jsx-579481127' + ' ' + 'center',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        }
      }, _react2.default.createElement('div', {
        className: 'jsx-579481127' + ' ' + 'chart',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        }
      }, 'Chart')), _react2.default.createElement(_style2.default, {
        styleId: '579481127',
        css: '.app.jsx-579481127{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;position:absolute;top:0;left:0;right:0;bottom:0;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2V4Y2hhbmdlcy5qcz9lbnRyeSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFtQ3dCLEFBRzZCLDBFQUNNLGtCQUNiLE1BQ0MsT0FDQyxRQUNDLFNBQ1oiLCJmaWxlIjoicGFnZXMvZXhjaGFuZ2VzLmpzP2VudHJ5Iiwic291cmNlUm9vdCI6Ii9Vc2Vycy9wcmlzY18wMDAvY29kZS9DQUNERVYvdngtdGVzdCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7TGluZWFyR3JhZGllbnR9IGZyb20gJ0B2eC9ncmFkaWVudCc7XG5pbXBvcnQge3dpdGhTY3JlZW5TaXplfSBmcm9tICdAdngvcmVzcG9uc2l2ZSc7XG5cbmZ1bmN0aW9uIEJhY2tncm91bmQoe3dpZHRoLCBoZWlnaHR9KSB7XG5cdHJldHVybiAoXG4gICAgICAgIDxzdmcgd2lkdGg9e3dpZHRofSBoZWlnaHQ9e2hlaWdodH0+XG4gICAgICAgICAgICA8TGluZWFyR3JhZGllbnQgaWQ9XCJmaWxsXCIgdmVydGljYWw9e2ZhbHNlfT5cbiAgICAgICAgICAgICAgICA8c3RvcCBzdG9wQ29sb3I9XCIjYTk0M2U0XCIgb2Zmc2V0PVwiMCVcIiAvPlxuICAgICAgICAgICAgICAgIDxzdG9wIHN0b3BDb2xvcj1cIiNmNTU5ODlcIiBvZmZzZXQ9XCI1MCVcIiAvPlxuICAgICAgICAgICAgICAgIDxzdG9wIHN0b3BDb2xvcj1cIiNmZmFmODRcIiBvZmZzZXQ9XCIxMDAlXCIgLz5cbiAgICAgICAgICAgIDwvTGluZWFyR3JhZGllbnQ+XG4gICAgICAgICAgICB7LyogPHJlY3QgZmlsbCBhdHRyaWJ1dGUgaXMgcG9pbnRpbmcgdG8gPExHIGlkPVwiZmlsbFwiICovfVxuICAgICAgICA8cmVjdCB3aWR0aD17d2lkdGh9IGhlaWdodD17aGVpZ2h0fSBmaWxsPVwidXJsKCNmaWxsKVwiLz5cbiAgICAgICAgPC9zdmc+XG5cdCk7XG59XG5cbmNsYXNzIEFwcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgLy8gU2V0IHVwIHN0YXRlXG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XG5cdFx0c3VwZXIocHJvcHMpO1xuICAgICAgICAvLyBTZXQgZGF0YSB0byBlbXB0eSBvYmplY3Rcblx0XHR0aGlzLnN0YXRlID0ge1xuXHRcdFx0ZGF0YToge31cblx0XHR9O1xuXHR9XG5cdHJlbmRlcigpIHtcblx0XHRjb25zdCB7c2NyZWVuV2lkdGgsIHNjcmVlbkhlaWdodH0gPSB0aGlzLnByb3BzO1xuXHRcdGNvbnN0IHtkYXRhfSA9IHRoaXMuc3RhdGU7XG5cdFx0cmV0dXJuIChcblx0XHQ8ZGl2IGNsYXNzTmFtZT1cImFwcFwiPlxuICAgICAgICAgICAgPEJhY2tncm91bmQgd2lkdGg9e3NjcmVlbldpZHRofSBoZWlnaHQ9e3NjcmVlbkhlaWdodH0gLz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaGFydFwiPkNoYXJ0PC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgIC5hcHAge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6ZmxleDtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgdG9wOjA7XG4gICAgICAgICAgICAgICAgbGVmdDowO1xuICAgICAgICAgICAgICAgIHJpZ2h0OjA7XG4gICAgICAgICAgICAgICAgYm90dG9tOjA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgIFxuICAgICAgICAgICAgYH08L3N0eWxlPlxuXG4gICAgICAgIDwvZGl2PlxuXHRcdCk7XG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFNjcmVlblNpemUoQXBwKTtcbiJdfQ== */\n/*@ sourceURL=pages/exchanges.js?entry */'
      }));
    }
  }]);

  return App;
}(_react2.default.Component);

exports.default = (0, _responsive.withScreenSize)(App);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2V4Y2hhbmdlcy5qcyJdLCJuYW1lcyI6WyJMaW5lYXJHcmFkaWVudCIsIndpdGhTY3JlZW5TaXplIiwiQmFja2dyb3VuZCIsIndpZHRoIiwiaGVpZ2h0IiwiQXBwIiwicHJvcHMiLCJzdGF0ZSIsImRhdGEiLCJzY3JlZW5XaWR0aCIsInNjcmVlbkhlaWdodCIsIlJlYWN0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBUTs7QUFDUixBQUFROzs7Ozs7O0FBRVIsU0FBQSxBQUFTLGlCQUE0QjtNQUFoQixBQUFnQixhQUFoQixBQUFnQjtNQUFULEFBQVMsY0FBVCxBQUFTLEFBQ3BDOzt5QkFDTyxjQUFBLFNBQUssT0FBTCxBQUFZLE9BQU8sUUFBbkIsQUFBMkI7Z0JBQTNCO2tCQUFBLEFBQ0k7QUFESjtHQUFBLGtCQUNJLEFBQUMsMENBQWUsSUFBaEIsQUFBbUIsUUFBTyxVQUExQixBQUFvQztnQkFBcEM7a0JBQUEsQUFDSTtBQURKOzZDQUNVLFdBQU4sQUFBZ0IsV0FBVSxRQUExQixBQUFpQztnQkFBakM7a0JBREosQUFDSSxBQUNBO0FBREE7OENBQ00sV0FBTixBQUFnQixXQUFVLFFBQTFCLEFBQWlDO2dCQUFqQztrQkFGSixBQUVJLEFBQ0E7QUFEQTs4Q0FDTSxXQUFOLEFBQWdCLFdBQVUsUUFBMUIsQUFBaUM7Z0JBQWpDO2tCQUpSLEFBQ0ksQUFHSSxBQUdSO0FBSFE7K0NBR0YsT0FBTixBQUFhLE9BQU8sUUFBcEIsQUFBNEIsUUFBUSxNQUFwQyxBQUF5QztnQkFBekM7a0JBUlAsQUFDTyxBQU9BLEFBR1A7QUFITzs7OztJQUtGLEE7K0JBQ0Y7O0FBQ0g7ZUFBQSxBQUFZLE9BQU87d0NBRVo7O0FBRlk7Z0lBQUEsQUFDWixBQUVOOztVQUFBLEFBQUs7WUFIYSxBQUdsQixBQUFhLEFBQ047QUFETSxBQUNaO1dBRUQ7Ozs7OzZCQUNRO21CQUM0QixLQUQ1QixBQUNpQztVQURqQyxBQUNELHFCQURDLEFBQ0Q7VUFEQyxBQUNZLHNCQURaLEFBQ1k7VUFEWixBQUVELE9BQVEsS0FGUCxBQUVZLE1BRlosQUFFRCxBQUNQOzs2QkFDQSxjQUFBOzJDQUFBLEFBQWU7O29CQUFmO3NCQUFBLEFBQ1U7QUFEVjtBQUFBLE9BQUEsZ0NBQ1UsQUFBQyxjQUFXLE9BQVosQUFBbUIsYUFBYSxRQUFoQyxBQUF3QztvQkFBeEM7c0JBRFYsQUFDVSxBQUNBO0FBREE7MEJBQ0EsY0FBQTsyQ0FBQSxBQUFlOztvQkFBZjtzQkFBQSxBQUNJO0FBREo7QUFBQSx5QkFDSSxjQUFBOzJDQUFBLEFBQWU7O29CQUFmO3NCQUFBO0FBQUE7QUFBQSxTQUhkLEFBRVUsQUFDSTtpQkFIZDthQURBLEFBQ0EsQUFtQkE7QUFuQkE7Ozs7O0VBYmdCLGdCQUFNLEEsQUFtQ3hCOztrQkFBZSxnQ0FBZixBQUFlLEFBQWUiLCJmaWxlIjoiZXhjaGFuZ2VzLmpzP2VudHJ5Iiwic291cmNlUm9vdCI6Ii9Vc2Vycy9wcmlzY18wMDAvY29kZS9DQUNERVYvdngtdGVzdCJ9

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS4zMzhiYWM0MmQwNTk5NjhlZDMwMS5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXMvZXhjaGFuZ2VzLmpzPzNkODdjNGUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtMaW5lYXJHcmFkaWVudH0gZnJvbSAnQHZ4L2dyYWRpZW50JztcbmltcG9ydCB7d2l0aFNjcmVlblNpemV9IGZyb20gJ0B2eC9yZXNwb25zaXZlJztcblxuZnVuY3Rpb24gQmFja2dyb3VuZCh7d2lkdGgsIGhlaWdodH0pIHtcblx0cmV0dXJuIChcbiAgICAgICAgPHN2ZyB3aWR0aD17d2lkdGh9IGhlaWdodD17aGVpZ2h0fT5cbiAgICAgICAgICAgIDxMaW5lYXJHcmFkaWVudCBpZD1cImZpbGxcIiB2ZXJ0aWNhbD17ZmFsc2V9PlxuICAgICAgICAgICAgICAgIDxzdG9wIHN0b3BDb2xvcj1cIiNhOTQzZTRcIiBvZmZzZXQ9XCIwJVwiIC8+XG4gICAgICAgICAgICAgICAgPHN0b3Agc3RvcENvbG9yPVwiI2Y1NTk4OVwiIG9mZnNldD1cIjUwJVwiIC8+XG4gICAgICAgICAgICAgICAgPHN0b3Agc3RvcENvbG9yPVwiI2ZmYWY4NFwiIG9mZnNldD1cIjEwMCVcIiAvPlxuICAgICAgICAgICAgPC9MaW5lYXJHcmFkaWVudD5cbiAgICAgICAgICAgIHsvKiA8cmVjdCBmaWxsIGF0dHJpYnV0ZSBpcyBwb2ludGluZyB0byA8TEcgaWQ9XCJmaWxsXCIgKi99XG4gICAgICAgIDxyZWN0IHdpZHRoPXt3aWR0aH0gaGVpZ2h0PXtoZWlnaHR9IGZpbGw9XCJ1cmwoI2ZpbGwpXCIvPlxuICAgICAgICA8L3N2Zz5cblx0KTtcbn1cblxuY2xhc3MgQXBwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICAvLyBTZXQgdXAgc3RhdGVcblx0Y29uc3RydWN0b3IocHJvcHMpIHtcblx0XHRzdXBlcihwcm9wcyk7XG4gICAgICAgIC8vIFNldCBkYXRhIHRvIGVtcHR5IG9iamVjdFxuXHRcdHRoaXMuc3RhdGUgPSB7XG5cdFx0XHRkYXRhOiB7fVxuXHRcdH07XG5cdH1cblx0cmVuZGVyKCkge1xuXHRcdGNvbnN0IHtzY3JlZW5XaWR0aCwgc2NyZWVuSGVpZ2h0fSA9IHRoaXMucHJvcHM7XG5cdFx0Y29uc3Qge2RhdGF9ID0gdGhpcy5zdGF0ZTtcblx0XHRyZXR1cm4gKFxuXHRcdDxkaXYgY2xhc3NOYW1lPVwiYXBwXCI+XG4gICAgICAgICAgICA8QmFja2dyb3VuZCB3aWR0aD17c2NyZWVuV2lkdGh9IGhlaWdodD17c2NyZWVuSGVpZ2h0fSAvPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjZW50ZXJcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNoYXJ0XCI+Q2hhcnQ8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgLmFwcCB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTpmbGV4O1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICB0b3A6MDtcbiAgICAgICAgICAgICAgICBsZWZ0OjA7XG4gICAgICAgICAgICAgICAgcmlnaHQ6MDtcbiAgICAgICAgICAgICAgICBib3R0b206MDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgXG4gICAgICAgICAgICBgfTwvc3R5bGU+XG5cbiAgICAgICAgPC9kaXY+XG5cdFx0KTtcblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoU2NyZWVuU2l6ZShBcHApO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFnZXMvZXhjaGFuZ2VzLmpzP2VudHJ5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7Ozs7OztBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBR0E7QUFIQTtBQUdBO0FBQUE7QUFHQTtBQUhBOzs7OztBQU1BO0FBQ0E7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUhBO0FBR0E7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUVBOzs7OztBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7O0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUFBOztBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIQTtBQW1CQTtBQW5CQTs7Ozs7QUFiQTtBQUNBO0FBa0NBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0EiLCJzb3VyY2VSb290IjoiIn0=