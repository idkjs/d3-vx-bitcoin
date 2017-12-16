"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require("babel-runtime/core-js/object/get-prototype-of");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require("babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

var _style = require("styled-jsx/style.js");

var _style2 = _interopRequireDefault(_style);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _responsive = require("@vx/responsive");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/Users/prisc_000/code/CACDEV/vx-test/pages/exchanges.js?entry";
// get responsive HOC d3 stuff to make Background resp.
// call App export with it. Expects screen dimensions in coming
//  in from react props so we destructure them of the props object
// and pass them to Background.

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
      var _props = this.props,
          screenWidth = _props.screenWidth,
          screenHeight = _props.screenHeight;
      var data = this.state.data;

      return _react2.default.createElement("div", {
        className: "jsx-338705054" + " " + "app",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        }
      }, _react2.default.createElement(Background, { width: screenWidth, height: screenHeight, __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        }
      }), _react2.default.createElement(_style2.default, {
        styleId: "338705054",
        css: ".app.jsx-338705054{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;position:absolute;top:0;left:0;right:0;bottom:0;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2V4Y2hhbmdlcy5qcz9lbnRyeSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFnQ3dCLEFBRzZCLDBFQUNNLGtCQUNiLE1BQ0MsT0FDQyxRQUNDLFNBQ1oiLCJmaWxlIjoicGFnZXMvZXhjaGFuZ2VzLmpzP2VudHJ5Iiwic291cmNlUm9vdCI6Ii9Vc2Vycy9wcmlzY18wMDAvY29kZS9DQUNERVYvdngtdGVzdCIsInNvdXJjZXNDb250ZW50IjpbIi8vIGdldCByZXNwb25zaXZlIEhPQyBkMyBzdHVmZiB0byBtYWtlIEJhY2tncm91bmQgcmVzcC5cbi8vIGNhbGwgQXBwIGV4cG9ydCB3aXRoIGl0LiBFeHBlY3RzIHNjcmVlbiBkaW1lbnNpb25zIGluIGNvbWluZ1xuLy8gIGluIGZyb20gcmVhY3QgcHJvcHMgc28gd2UgZGVzdHJ1Y3R1cmUgdGhlbSBvZiB0aGUgcHJvcHMgb2JqZWN0XG4vLyBhbmQgcGFzcyB0aGVtIHRvIEJhY2tncm91bmQuXG5pbXBvcnQgeyB3aXRoU2NyZWVuU2l6ZSB9IGZyb20gJ0B2eC9yZXNwb25zaXZlJztcbmZ1bmN0aW9uIEJhY2tncm91bmQoe3dpZHRoLCBoZWlnaHR9KSB7XG5cdHJldHVybiAoXG4gICAgICAgIDxzdmcgd2lkdGg9e3dpZHRofSBoZWlnaHQ9e2hlaWdodH0+XG4gICAgICAgICAgICA8cmVjdFxuICAgICAgICAgICAgd2lkdGg9e3dpZHRofVxuICAgICAgICAgICAgaGVpZ2h0PXtoZWlnaHR9XG4gICAgICAgICAgICBmaWxsPVwic3RlZWxibHVlXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgIDwvc3ZnPlxuXHQpO1xufVxuXG5jbGFzcyBBcHAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIC8vIFNldCB1cCBzdGF0ZVxuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xuXHRcdHN1cGVyKHByb3BzKTtcbiAgICAgICAgLy8gU2V0IGRhdGEgdG8gZW1wdHkgb2JqZWN0XG5cdFx0dGhpcy5zdGF0ZSA9IHtcblx0XHRcdGRhdGE6IHt9XG5cdFx0fTtcblx0fVxuXHRyZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IHsgc2NyZWVuV2lkdGgsIHNjcmVlbkhlaWdodH0gPSB0aGlzLnByb3BzO1xuXHRcdGNvbnN0IHsgZGF0YSB9ID0gdGhpcy5zdGF0ZTtcblx0XHRyZXR1cm4gKFxuXHRcdDxkaXYgY2xhc3NOYW1lPVwiYXBwXCI+XG4gICAgICAgICAgICA8QmFja2dyb3VuZCB3aWR0aD17c2NyZWVuV2lkdGh9IGhlaWdodD17c2NyZWVuSGVpZ2h0fSAvPlxuICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgLmFwcCB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTpmbGV4O1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICB0b3A6MDtcbiAgICAgICAgICAgICAgICBsZWZ0OjA7XG4gICAgICAgICAgICAgICAgcmlnaHQ6MDtcbiAgICAgICAgICAgICAgICBib3R0b206MDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGB9PC9zdHlsZT5cblxuICAgICAgICA8L2Rpdj5cblx0XHQpO1xuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTY3JlZW5TaXplKEFwcCk7XG4iXX0= */\n/*@ sourceURL=pages/exchanges.js?entry */"
      }));
    }
  }]);

  return App;
}(_react2.default.Component);

exports.default = (0, _responsive.withScreenSize)(App);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2V4Y2hhbmdlcy5qcyJdLCJuYW1lcyI6WyJ3aXRoU2NyZWVuU2l6ZSIsIkJhY2tncm91bmQiLCJ3aWR0aCIsImhlaWdodCIsIkFwcCIsInByb3BzIiwic3RhdGUiLCJkYXRhIiwic2NyZWVuV2lkdGgiLCJzY3JlZW5IZWlnaHQiLCJSZWFjdCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUlBLEFBQVM7Ozs7O0FBSlQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBQSxBQUFTLGlCQUE0QjtNQUFoQixBQUFnQixhQUFoQixBQUFnQjtNQUFULEFBQVMsY0FBVCxBQUFTLEFBQ3BDOzt5QkFDTyxjQUFBLFNBQUssT0FBTCxBQUFZLE9BQU8sUUFBbkIsQUFBMkI7Z0JBQTNCO2tCQUFBLEFBQ0k7QUFESjtHQUFBO1dBQ0ksQUFDTyxBQUNQO1lBRkEsQUFFUSxBQUNSO1VBSEEsQUFHSzs7Z0JBSEw7a0JBRlgsQUFDTyxBQUNJLEFBT1g7QUFQVztBQUNBOzs7SUFRTixBOytCQUNGOztBQUNIO2VBQUEsQUFBWSxPQUFPO3dDQUVaOztBQUZZO2dJQUFBLEFBQ1osQUFFTjs7VUFBQSxBQUFLO1lBSGEsQUFHbEIsQUFBYSxBQUNOO0FBRE0sQUFDWjtXQUVEOzs7Ozs2QkFDUTttQkFDbUMsS0FEbkMsQUFDd0M7VUFEeEMsQUFDTSxxQkFETixBQUNNO1VBRE4sQUFDbUIsc0JBRG5CLEFBQ21CO1VBRG5CLEFBRUEsT0FBUyxLQUZULEFBRWMsTUFGZCxBQUVBLEFBQ1I7OzZCQUNBLGNBQUE7MkNBQUEsQUFBZTs7b0JBQWY7c0JBQUEsQUFDVTtBQURWO0FBQUEsT0FBQSxnQ0FDVSxBQUFDLGNBQVcsT0FBWixBQUFtQixhQUFhLFFBQWhDLEFBQXdDO29CQUF4QztzQkFEVixBQUNVO0FBQUE7O2lCQURWO2FBREEsQUFDQSxBQWVBO0FBZkE7Ozs7O0VBYmdCLGdCQUFNLEEsQUErQnhCOztrQkFBZSxnQ0FBZixBQUFlLEFBQWUiLCJmaWxlIjoiZXhjaGFuZ2VzLmpzP2VudHJ5Iiwic291cmNlUm9vdCI6Ii9Vc2Vycy9wcmlzY18wMDAvY29kZS9DQUNERVYvdngtdGVzdCJ9