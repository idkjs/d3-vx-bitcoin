webpackHotUpdate(5,{

/***/ 395:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _keys = __webpack_require__(159);

var _keys2 = _interopRequireDefault(_keys);

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

var _style = __webpack_require__(396);

var _style2 = _interopRequireDefault(_style);

var _react = __webpack_require__(17);

var _react2 = _interopRequireDefault(_react);

var _gradient = __webpack_require__(397);

var _responsive = __webpack_require__(392);

var _chart = __webpack_require__(415);

var _chart2 = _interopRequireDefault(_chart);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/Users/prisc_000/code/CACDEV/vx-test/pages/bitcoin.js?entry";


function Background(_ref) {
  var width = _ref.width,
      height = _ref.height;

  return _react2.default.createElement("svg", { width: width, height: height, __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }, _react2.default.createElement(_gradient.LinearGradient, { id: "fill", vertical: false, __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, _react2.default.createElement("stop", { stopColor: "#a943e4", offset: "0%", __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }), _react2.default.createElement("stop", { stopColor: "#f55989", offset: "50%", __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }), _react2.default.createElement("stop", { stopColor: "#ffaf84", offset: "100%", __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  })), _react2.default.createElement("rect", { width: width, height: height, fill: "url(#fill)", __source: {
      fileName: _jsxFileName,
      lineNumber: 14
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
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      fetch("https://api.coindesk.com/v1/bpi/historical/close.json").then(function (res) {
        return res.json();
      }).then(function (json) {
        _this2.setState({
          data: json
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _props = this.props,
          screenWidth = _props.screenWidth,
          screenHeight = _props.screenHeight;
      var data = this.state.data;

      if (!data.bpi) {
        return _react2.default.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 41
          }
        }, "Loading...");
      }
      var prices = (0, _keys2.default)(data.bpi).map(function (k) {
        return {
          time: k,
          price: data.bpi[k]
        };
      });
      /** we want to current price which will be the last item returned from our api call
       *
       */
      var currentPrice = prices[prices.length - 1].price;
      // console.log(currentPrice);
      return _react2.default.createElement("div", {
        className: "jsx-3420029867" + " " + "app",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        }
      }, _react2.default.createElement(Background, { width: screenWidth, height: screenHeight, __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        }
      }), _react2.default.createElement("div", {
        className: "jsx-3420029867" + " " + "center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        }
      }, _react2.default.createElement("div", {
        className: "jsx-3420029867" + " " + "chart",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        }
      }, _react2.default.createElement("div", {
        className: "jsx-3420029867" + " " + "titlebar",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        }
      }, _react2.default.createElement("div", {
        className: "jsx-3420029867" + " " + "title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        }
      }, _react2.default.createElement("div", {
        className: "jsx-3420029867",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        }
      }, "BITCOIN PRICE"), _react2.default.createElement("div", {
        className: "jsx-3420029867",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        }
      }, _react2.default.createElement("small", {
        className: "jsx-3420029867",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        }
      }, "last 30 days"))), _react2.default.createElement("div", {
        className: "jsx-3420029867" + " " + "spacer",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        }
      }), _react2.default.createElement("div", {
        className: "jsx-3420029867",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        }
      }, _react2.default.createElement("div", {
        className: "jsx-3420029867",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        }
      }, currentPrice))), _react2.default.createElement("div", {
        className: "jsx-3420029867" + " " + "container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        }
      }, _react2.default.createElement(_chart2.default, { data: data, __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        }
      }))), _react2.default.createElement("p", {
        className: "jsx-3420029867" + " " + "disclaimer",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        }
      }, data.disclaimer)), _react2.default.createElement(_style2.default, {
        styleId: "3420029867",
        css: ".app.jsx-3420029867,.center.jsx-3420029867{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;position:absolute;top:0;left:0;right:0;bottom:0;-webkit-flex:1;-ms-flex:1;flex:1;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;font-family:arial;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}.spacer.jsx-3420029867{-webkit-flex:1;-ms-flex:1;flex:1;}.titlebar.jsx-3420029867{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.title.jsx-3420029867{padding:15px;}.container.jsx-3420029867{-webkit-flex:1;-ms-flex:1;flex:1;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}.disclaimer.jsx-3420029867{margin-top:35px;font-size:11px;color:white;opacity:0.4;}.chart.jsx-3420029867{width:600px;height:400px;background-color:#27273f;border-radius:8px;color:white;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2JpdGNvaW4uanM/ZW50cnkiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBNEVvQixBQUkwQixBQWFOLEFBR00sQUFLQSxBQUdOLEFBSVMsQUFNSixZQUNDLENBYmYsR0FPaUIsU0FPVSxNQU5iLEVBaEJkLEFBV2UsVUFNRCxPQU1NLEtBTHBCLGFBTWMsTUFyQ00sQUFnQkMsTUFzQk4sWUFyQ1AsTUFDQyxPQUNDLEVBc0JWLE1BckJXLFNBQ0YscUJBWVksV0FzQkcsQ0FqQ0MsNkVBa0N6QixJQXRCQSxrQkFYcUIsNkZBQ0Qsa0JBQ0ksOEVBQ3hCIiwiZmlsZSI6InBhZ2VzL2JpdGNvaW4uanM/ZW50cnkiLCJzb3VyY2VSb290IjoiL1VzZXJzL3ByaXNjXzAwMC9jb2RlL0NBQ0RFVi92eC10ZXN0Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTGluZWFyR3JhZGllbnQgfSBmcm9tIFwiQHZ4L2dyYWRpZW50XCI7XG5pbXBvcnQgeyB3aXRoU2NyZWVuU2l6ZSB9IGZyb20gXCJAdngvcmVzcG9uc2l2ZVwiO1xuaW1wb3J0IENoYXJ0IGZyb20gXCIuLi9jb21wb25lbnRzL2NoYXJ0XCI7XG5cbmZ1bmN0aW9uIEJhY2tncm91bmQoeyB3aWR0aCwgaGVpZ2h0IH0pIHtcbiAgcmV0dXJuIChcbiAgICA8c3ZnIHdpZHRoPXt3aWR0aH0gaGVpZ2h0PXtoZWlnaHR9PlxuICAgICAgPExpbmVhckdyYWRpZW50IGlkPVwiZmlsbFwiIHZlcnRpY2FsPXtmYWxzZX0+XG4gICAgICAgIDxzdG9wIHN0b3BDb2xvcj1cIiNhOTQzZTRcIiBvZmZzZXQ9XCIwJVwiIC8+XG4gICAgICAgIDxzdG9wIHN0b3BDb2xvcj1cIiNmNTU5ODlcIiBvZmZzZXQ9XCI1MCVcIiAvPlxuICAgICAgICA8c3RvcCBzdG9wQ29sb3I9XCIjZmZhZjg0XCIgb2Zmc2V0PVwiMTAwJVwiIC8+XG4gICAgICA8L0xpbmVhckdyYWRpZW50PlxuICAgICAgey8qIDxyZWN0IGZpbGwgYXR0cmlidXRlIGlzIHBvaW50aW5nIHRvIDxMRyBpZD1cImZpbGxcIiAqL31cbiAgICAgIDxyZWN0IHdpZHRoPXt3aWR0aH0gaGVpZ2h0PXtoZWlnaHR9IGZpbGw9XCJ1cmwoI2ZpbGwpXCIgLz5cbiAgICA8L3N2Zz5cbiAgKTtcbn1cblxuY2xhc3MgQXBwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgLy8gU2V0IHVwIHN0YXRlXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIC8vIFNldCBkYXRhIHRvIGVtcHR5IG9iamVjdFxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBkYXRhOiB7fVxuICAgIH07XG4gIH1cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgZmV0Y2goXCJodHRwczovL2FwaS5jb2luZGVzay5jb20vdjEvYnBpL2hpc3RvcmljYWwvY2xvc2UuanNvblwiKVxuICAgICAgLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpXG4gICAgICAudGhlbihqc29uID0+IHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgZGF0YToganNvblxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICB9XG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IHNjcmVlbldpZHRoLCBzY3JlZW5IZWlnaHQgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgeyBkYXRhIH0gPSB0aGlzLnN0YXRlO1xuICAgIGlmICghZGF0YS5icGkpIHtcbiAgICAgIHJldHVybiA8ZGl2PkxvYWRpbmcuLi48L2Rpdj47XG4gICAgfVxuICAgIGNvbnN0IHByaWNlcyA9IE9iamVjdC5rZXlzKGRhdGEuYnBpKS5tYXAoayA9PiB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICB0aW1lOiBrLFxuICAgICAgICBwcmljZTogZGF0YS5icGlba11cbiAgICAgIH07XG4gICAgfSk7XG4gICAgLyoqIHdlIHdhbnQgdG8gY3VycmVudCBwcmljZSB3aGljaCB3aWxsIGJlIHRoZSBsYXN0IGl0ZW0gcmV0dXJuZWQgZnJvbSBvdXIgYXBpIGNhbGxcbiAgICAgKlxuICAgICAqL1xuICAgIGNvbnN0IGN1cnJlbnRQcmljZSA9IHByaWNlc1twcmljZXMubGVuZ3RoIC0gMV0ucHJpY2U7XG4gICAgLy8gY29uc29sZS5sb2coY3VycmVudFByaWNlKTtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJhcHBcIj5cbiAgICAgICAgPEJhY2tncm91bmQgd2lkdGg9e3NjcmVlbldpZHRofSBoZWlnaHQ9e3NjcmVlbkhlaWdodH0gLz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjZW50ZXJcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNoYXJ0XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpdGxlYmFyXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGl0bGVcIj5cbiAgICAgICAgICAgICAgICA8ZGl2PkJJVENPSU4gUFJJQ0U8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgPHNtYWxsPmxhc3QgMzAgZGF5czwvc21hbGw+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwYWNlclwiIC8+XG4gICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGRpdj57Y3VycmVudFByaWNlfTwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgICAgICAgPENoYXJ0IGRhdGE9e2RhdGF9IC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJkaXNjbGFpbWVyXCI+e2RhdGEuZGlzY2xhaW1lcn08L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgLmFwcCxcbiAgICAgICAgICAuY2VudGVyIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgICAgICBib3R0b206IDA7XG4gICAgICAgICAgICBmbGV4OiAxO1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6IGFyaWFsO1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnNwYWNlciB7XG4gICAgICAgICAgICBmbGV4OiAxO1xuICAgICAgICAgIH1cbiAgICAgICAgICAudGl0bGViYXIge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIH1cbiAgICAgICAgICAudGl0bGUge1xuICAgICAgICAgICAgcGFkZGluZzogMTVweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmNvbnRhaW5lciB7XG4gICAgICAgICAgICBmbGV4OiAxO1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmRpc2NsYWltZXIge1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogMzVweDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTFweDtcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgIG9wYWNpdHk6IDAuNDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmNoYXJ0IHtcbiAgICAgICAgICAgIHdpZHRoOiA2MDBweDtcbiAgICAgICAgICAgIGhlaWdodDogNDAwcHg7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjcyNzNmO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTY3JlZW5TaXplKEFwcCk7XG4iXX0= */\n/*@ sourceURL=pages/bitcoin.js?entry */"
      }));
    }
  }]);

  return App;
}(_react2.default.Component);

exports.default = (0, _responsive.withScreenSize)(App);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2JpdGNvaW4uanMiXSwibmFtZXMiOlsiTGluZWFyR3JhZGllbnQiLCJ3aXRoU2NyZWVuU2l6ZSIsIkNoYXJ0IiwiQmFja2dyb3VuZCIsIndpZHRoIiwiaGVpZ2h0IiwiQXBwIiwicHJvcHMiLCJzdGF0ZSIsImRhdGEiLCJmZXRjaCIsInRoZW4iLCJyZXMiLCJqc29uIiwic2V0U3RhdGUiLCJzY3JlZW5XaWR0aCIsInNjcmVlbkhlaWdodCIsImJwaSIsInByaWNlcyIsIm1hcCIsInRpbWUiLCJrIiwicHJpY2UiLCJjdXJyZW50UHJpY2UiLCJsZW5ndGgiLCJkaXNjbGFpbWVyIiwiUmVhY3QiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBUzs7QUFDVCxBQUFTOztBQUNULEFBQU8sQUFBVzs7Ozs7Ozs7O0FBRWxCLFNBQUEsQUFBUyxpQkFBOEI7TUFBakIsQUFBaUIsYUFBakIsQUFBaUI7TUFBVixBQUFVLGNBQVYsQUFBVSxBQUNyQzs7eUJBQ0UsY0FBQSxTQUFLLE9BQUwsQUFBWSxPQUFPLFFBQW5CLEFBQTJCO2dCQUEzQjtrQkFBQSxBQUNFO0FBREY7R0FBQSxrQkFDRSxBQUFDLDBDQUFlLElBQWhCLEFBQW1CLFFBQU8sVUFBMUIsQUFBb0M7Z0JBQXBDO2tCQUFBLEFBQ0U7QUFERjs2Q0FDUSxXQUFOLEFBQWdCLFdBQVUsUUFBMUIsQUFBaUM7Z0JBQWpDO2tCQURGLEFBQ0UsQUFDQTtBQURBOzhDQUNNLFdBQU4sQUFBZ0IsV0FBVSxRQUExQixBQUFpQztnQkFBakM7a0JBRkYsQUFFRSxBQUNBO0FBREE7OENBQ00sV0FBTixBQUFnQixXQUFVLFFBQTFCLEFBQWlDO2dCQUFqQztrQkFKSixBQUNFLEFBR0UsQUFHRjtBQUhFOytDQUdJLE9BQU4sQUFBYSxPQUFPLFFBQXBCLEFBQTRCLFFBQVEsTUFBcEMsQUFBeUM7Z0JBQXpDO2tCQVJKLEFBQ0UsQUFPRSxBQUdMO0FBSEs7Ozs7SSxBQUtBOytCQUNKOztBQUNBO2VBQUEsQUFBWSxPQUFPO3dDQUVqQjs7QUFGaUI7Z0lBQUEsQUFDWCxBQUVOOztVQUFBLEFBQUs7WUFIWSxBQUdqQixBQUFhLEFBQ0w7QUFESyxBQUNYO1dBRUg7Ozs7O3dDQUNtQjttQkFDbEI7O1lBQUEsQUFBTSx5REFBTixBQUNHLEtBQUssZUFBQTtlQUFPLElBQVAsQUFBTyxBQUFJO0FBRG5CLFNBQUEsQUFFRyxLQUFLLGdCQUFRLEFBQ1o7ZUFBQSxBQUFLO2dCQUFMLEFBQWMsQUFDTixBQUVUO0FBSGUsQUFDWjtBQUpOLEFBT0Q7Ozs7NkJBQ1E7bUJBQytCLEtBRC9CLEFBQ29DO1VBRHBDLEFBQ0MscUJBREQsQUFDQztVQURELEFBQ2Msc0JBRGQsQUFDYztVQURkLEFBRUMsT0FBUyxLQUZWLEFBRWUsTUFGZixBQUVDLEFBQ1I7O1VBQUksQ0FBQyxLQUFMLEFBQVUsS0FBSyxBQUNiOytCQUFPLGNBQUE7O3NCQUFBO3dCQUFBO0FBQUE7QUFBQSxTQUFBLEVBQVAsQUFBTyxBQUNSO0FBQ0Q7VUFBTSw2QkFBcUIsS0FBWixBQUFpQixLQUFqQixBQUFzQixJQUFJLGFBQUssQUFDNUM7O2dCQUFPLEFBQ0MsQUFDTjtpQkFBTyxLQUFBLEFBQUssSUFGZCxBQUFPLEFBRUUsQUFBUyxBQUVuQjtBQUpRLEFBQ0w7QUFGSixBQUFlLEFBTWYsT0FOZTtBQVNmOzs7VUFBTSxlQUFlLE9BQU8sT0FBQSxBQUFPLFNBQWQsQUFBdUIsR0FBNUMsQUFBK0MsQUFDL0M7QUFDQTs2QkFDRSxjQUFBOzRDQUFBLEFBQWU7O29CQUFmO3NCQUFBLEFBQ0U7QUFERjtBQUFBLE9BQUEsZ0NBQ0UsQUFBQyxjQUFXLE9BQVosQUFBbUIsYUFBYSxRQUFoQyxBQUF3QztvQkFBeEM7c0JBREYsQUFDRSxBQUNBO0FBREE7MEJBQ0EsY0FBQTs0Q0FBQSxBQUFlOztvQkFBZjtzQkFBQSxBQUNFO0FBREY7QUFBQSx5QkFDRSxjQUFBOzRDQUFBLEFBQWU7O29CQUFmO3NCQUFBLEFBQ0U7QUFERjtBQUFBLHlCQUNFLGNBQUE7NENBQUEsQUFBZTs7b0JBQWY7c0JBQUEsQUFDRTtBQURGO0FBQUEseUJBQ0UsY0FBQTs0Q0FBQSxBQUFlOztvQkFBZjtzQkFBQSxBQUNFO0FBREY7QUFBQSx5QkFDRSxjQUFBO21CQUFBOztvQkFBQTtzQkFBQTtBQUFBO0FBQUEsU0FERixBQUNFLEFBQ0Esa0NBQUEsY0FBQTttQkFBQTs7b0JBQUE7c0JBQUEsQUFDRTtBQURGO0FBQUEseUJBQ0UsY0FBQTttQkFBQTs7b0JBQUE7c0JBQUE7QUFBQTtBQUFBLFNBSk4sQUFDRSxBQUVFLEFBQ0UsQUFHSjs0Q0FBQSxBQUFlOztvQkFBZjtzQkFQRixBQU9FLEFBQ0E7QUFEQTtBQUFBLDBCQUNBLGNBQUE7bUJBQUE7O29CQUFBO3NCQUFBLEFBQ0U7QUFERjtBQUFBLHlCQUNFLGNBQUE7bUJBQUE7O29CQUFBO3NCQUFBLEFBQU07QUFBTjtBQUFBLFNBVk4sQUFDRSxBQVFFLEFBQ0UsQUFHSixpQ0FBQSxjQUFBOzRDQUFBLEFBQWU7O29CQUFmO3NCQUFBLEFBQ0U7QUFERjtBQUFBLHlCQUNFLEFBQUMsaUNBQU0sTUFBUCxBQUFhO29CQUFiO3NCQWZOLEFBQ0UsQUFhRSxBQUNFLEFBR0o7QUFISTs0QkFHSixjQUFBOzRDQUFBLEFBQWE7O29CQUFiO3NCQUFBLEFBQTJCO0FBQTNCO0FBQUEsY0FwQkosQUFFRSxBQWtCRSxBQUFnQztpQkFwQnBDO2FBREYsQUFDRSxBQXNFSDtBQXRFRzs7Ozs7RUFwQ1ksZ0IsQUFBTSxBQTZHeEI7O2tCQUFlLGdDQUFmLEFBQWUsQUFBZSIsImZpbGUiOiJiaXRjb2luLmpzP2VudHJ5Iiwic291cmNlUm9vdCI6Ii9Vc2Vycy9wcmlzY18wMDAvY29kZS9DQUNERVYvdngtdGVzdCJ9

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/Users/prisc_000/code/CACDEV/vx-test/pages/bitcoin.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/prisc_000/code/CACDEV/vx-test/pages/bitcoin.js"); } } })();
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
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/bitcoin")
  
/* WEBPACK VAR INJECTION */}.call(exports, "?entry"))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS4yNjgzM2M2Y2FkOGMyMDIyNzM5Zi5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXMvYml0Y29pbi5qcz9lOTU2NWU4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IExpbmVhckdyYWRpZW50IH0gZnJvbSBcIkB2eC9ncmFkaWVudFwiO1xuaW1wb3J0IHsgd2l0aFNjcmVlblNpemUgfSBmcm9tIFwiQHZ4L3Jlc3BvbnNpdmVcIjtcbmltcG9ydCBDaGFydCBmcm9tIFwiLi4vY29tcG9uZW50cy9jaGFydFwiO1xuXG5mdW5jdGlvbiBCYWNrZ3JvdW5kKHsgd2lkdGgsIGhlaWdodCB9KSB7XG4gIHJldHVybiAoXG4gICAgPHN2ZyB3aWR0aD17d2lkdGh9IGhlaWdodD17aGVpZ2h0fT5cbiAgICAgIDxMaW5lYXJHcmFkaWVudCBpZD1cImZpbGxcIiB2ZXJ0aWNhbD17ZmFsc2V9PlxuICAgICAgICA8c3RvcCBzdG9wQ29sb3I9XCIjYTk0M2U0XCIgb2Zmc2V0PVwiMCVcIiAvPlxuICAgICAgICA8c3RvcCBzdG9wQ29sb3I9XCIjZjU1OTg5XCIgb2Zmc2V0PVwiNTAlXCIgLz5cbiAgICAgICAgPHN0b3Agc3RvcENvbG9yPVwiI2ZmYWY4NFwiIG9mZnNldD1cIjEwMCVcIiAvPlxuICAgICAgPC9MaW5lYXJHcmFkaWVudD5cbiAgICAgIHsvKiA8cmVjdCBmaWxsIGF0dHJpYnV0ZSBpcyBwb2ludGluZyB0byA8TEcgaWQ9XCJmaWxsXCIgKi99XG4gICAgICA8cmVjdCB3aWR0aD17d2lkdGh9IGhlaWdodD17aGVpZ2h0fSBmaWxsPVwidXJsKCNmaWxsKVwiIC8+XG4gICAgPC9zdmc+XG4gICk7XG59XG5cbmNsYXNzIEFwcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIC8vIFNldCB1cCBzdGF0ZVxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICAvLyBTZXQgZGF0YSB0byBlbXB0eSBvYmplY3RcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgZGF0YToge31cbiAgICB9O1xuICB9XG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGZldGNoKFwiaHR0cHM6Ly9hcGkuY29pbmRlc2suY29tL3YxL2JwaS9oaXN0b3JpY2FsL2Nsb3NlLmpzb25cIilcbiAgICAgIC50aGVuKHJlcyA9PiByZXMuanNvbigpKVxuICAgICAgLnRoZW4oanNvbiA9PiB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgIGRhdGE6IGpzb25cbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgfVxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBzY3JlZW5XaWR0aCwgc2NyZWVuSGVpZ2h0IH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHsgZGF0YSB9ID0gdGhpcy5zdGF0ZTtcbiAgICBpZiAoIWRhdGEuYnBpKSB7XG4gICAgICByZXR1cm4gPGRpdj5Mb2FkaW5nLi4uPC9kaXY+O1xuICAgIH1cbiAgICBjb25zdCBwcmljZXMgPSBPYmplY3Qua2V5cyhkYXRhLmJwaSkubWFwKGsgPT4ge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgdGltZTogayxcbiAgICAgICAgcHJpY2U6IGRhdGEuYnBpW2tdXG4gICAgICB9O1xuICAgIH0pO1xuICAgIC8qKiB3ZSB3YW50IHRvIGN1cnJlbnQgcHJpY2Ugd2hpY2ggd2lsbCBiZSB0aGUgbGFzdCBpdGVtIHJldHVybmVkIGZyb20gb3VyIGFwaSBjYWxsXG4gICAgICpcbiAgICAgKi9cbiAgICBjb25zdCBjdXJyZW50UHJpY2UgPSBwcmljZXNbcHJpY2VzLmxlbmd0aCAtIDFdLnByaWNlO1xuICAgIC8vIGNvbnNvbGUubG9nKGN1cnJlbnRQcmljZSk7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXBwXCI+XG4gICAgICAgIDxCYWNrZ3JvdW5kIHdpZHRoPXtzY3JlZW5XaWR0aH0gaGVpZ2h0PXtzY3JlZW5IZWlnaHR9IC8+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2VudGVyXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaGFydFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aXRsZWJhclwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpdGxlXCI+XG4gICAgICAgICAgICAgICAgPGRpdj5CSVRDT0lOIFBSSUNFPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgIDxzbWFsbD5sYXN0IDMwIGRheXM8L3NtYWxsPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcGFjZXJcIiAvPlxuICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxkaXY+e2N1cnJlbnRQcmljZX08L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgIDxDaGFydCBkYXRhPXtkYXRhfSAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZGlzY2xhaW1lclwiPntkYXRhLmRpc2NsYWltZXJ9PC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgIC5hcHAsXG4gICAgICAgICAgLmNlbnRlciB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICAgICAgZmxleDogMTtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBhcmlhbDtcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgfVxuICAgICAgICAgIC5zcGFjZXIge1xuICAgICAgICAgICAgZmxleDogMTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnRpdGxlYmFyIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnRpdGxlIHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDE1cHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5jb250YWluZXIge1xuICAgICAgICAgICAgZmxleDogMTtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5kaXNjbGFpbWVyIHtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDM1cHg7XG4gICAgICAgICAgICBmb250LXNpemU6IDExcHg7XG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICBvcGFjaXR5OiAwLjQ7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5jaGFydCB7XG4gICAgICAgICAgICB3aWR0aDogNjAwcHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDQwMHB4O1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzI3MjczZjtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoU2NyZWVuU2l6ZShBcHApO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFnZXMvYml0Y29pbi5qcz9lbnRyeSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7Ozs7Ozs7O0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFHQTtBQUhBO0FBR0E7QUFBQTtBQUdBO0FBSEE7Ozs7O0FBTUE7QUFDQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBSEE7QUFHQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBRUE7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFDQTtBQURBO0FBR0E7QUFHQTtBQUZBO0FBR0E7Ozs7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFBQTs7QUFHQTtBQUFBO0FBREE7QUFJQTtBQUdBOzs7QUFBQTtBQUVBO0FBQ0E7QUFBQTs7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7O0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTs7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBOztBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7O0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBOztBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTs7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBOztBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTs7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBR0E7QUFIQTtBQUdBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFwQkE7QUFzRUE7QUF0RUE7Ozs7O0FBcENBO0FBQ0E7QUE0R0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==