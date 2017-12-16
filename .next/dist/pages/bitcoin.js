"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _keys = require("babel-runtime/core-js/object/keys");

var _keys2 = _interopRequireDefault(_keys);

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

var _gradient = require("@vx/gradient");

var _responsive = require("@vx/responsive");

var _chart = require("../components/chart");

var _chart2 = _interopRequireDefault(_chart);

var _formatPrice = require("../utils/formatPrice");

var _formatPrice2 = _interopRequireDefault(_formatPrice);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/Users/prisc_000/code/CACDEV/vx-test/pages/bitcoin.js?entry";


function Background(_ref) {
  var width = _ref.width,
      height = _ref.height;

  return _react2.default.createElement("svg", { width: width, height: height, __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, _react2.default.createElement(_gradient.LinearGradient, { id: "fill", vertical: false, __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }, _react2.default.createElement("stop", { stopColor: "#a943e4", offset: "0%", __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }), _react2.default.createElement("stop", { stopColor: "#f55989", offset: "50%", __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }), _react2.default.createElement("stop", { stopColor: "#ffaf84", offset: "100%", __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  })), _react2.default.createElement("rect", { width: width, height: height, fill: "url(#fill)", __source: {
      fileName: _jsxFileName,
      lineNumber: 15
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
            lineNumber: 42
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
      // var to get difference in current/last price. def firstPrice - subtract from current
      var firstPrice = prices[0].price;
      var diffPrice = currentPrice - firstPrice;
      // console.log(currentPrice);
      return _react2.default.createElement("div", {
        className: "jsx-4048110173" + " " + "app",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        }
      }, _react2.default.createElement(Background, { width: screenWidth, height: screenHeight, __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        }
      }), _react2.default.createElement("div", {
        className: "jsx-4048110173" + " " + "center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        }
      }, _react2.default.createElement("div", {
        className: "jsx-4048110173" + " " + "chart",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        }
      }, _react2.default.createElement("div", {
        className: "jsx-4048110173" + " " + "titlebar",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        }
      }, _react2.default.createElement("div", {
        className: "jsx-4048110173" + " " + "title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        }
      }, _react2.default.createElement("div", {
        className: "jsx-4048110173",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        }
      }, "BITCOIN PRICE"), _react2.default.createElement("div", {
        className: "jsx-4048110173",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        }
      }, _react2.default.createElement("small", {
        className: "jsx-4048110173",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        }
      }, "last 30 days"))), _react2.default.createElement("div", {
        className: "jsx-4048110173" + " " + "spacer",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        }
      }), _react2.default.createElement("div", {
        className: "jsx-4048110173" + " " + "prices",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        }
      }, _react2.default.createElement("div", {
        className: "jsx-4048110173",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        }
      }, (0, _formatPrice2.default)(currentPrice)), _react2.default.createElement("div", {
        className: "jsx-4048110173",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        }
      }, (0, _formatPrice2.default)(diffPrice)))), _react2.default.createElement("div", {
        className: "jsx-4048110173" + " " + "container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        }
      }, _react2.default.createElement(_chart2.default, { data: data, __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        }
      }))), _react2.default.createElement("p", {
        className: "jsx-4048110173" + " " + "disclaimer",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        }
      }, data.disclaimer)), _react2.default.createElement(_style2.default, {
        styleId: "4048110173",
        css: ".app.jsx-4048110173,.center.jsx-4048110173{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;position:absolute;top:0;left:0;right:0;bottom:0;-webkit-flex:1;-ms-flex:1;flex:1;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;font-family:arial;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}.prices.jsx-4048110173{-webkit-align-items:flex-end;-webkit-box-align:flex-end;-ms-flex-align:flex-end;align-items:flex-end;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}.spacer.jsx-4048110173{-webkit-flex:1;-ms-flex:1;flex:1;}.titlebar.jsx-4048110173{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding:15px;}.container.jsx-4048110173{-webkit-flex:1;-ms-flex:1;flex:1;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}.disclaimer.jsx-4048110173{margin-top:35px;font-size:11px;color:white;opacity:0.4;}.chart.jsx-4048110173{width:600px;height:400px;background-color:#27273f;border-radius:8px;color:white;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2JpdGNvaW4uanM/ZW50cnkiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBaUZvQixBQUkwQixBQWFRLEFBS2QsQUFHTSxBQVFOLEFBSVMsQUFNSixZQUNDLElBTkUsU0FPVSxNQU5iLEVBaEJkLEFBV2UsVUFNRCxPQU1NLEtBTHBCLGFBTWMsTUExQ00sQUFxQkMsTUFzQk4sWUExQ1AsTUFDQyxHQVdNLElBVkwsRUEyQlYsTUExQlcsU0FDRixxQkFpQlksV0FzQkcsQ0F0Q0Msb0JBUUQseURBK0J4QixJQXRCZSxhQUNmLElBVEEsQ0FScUIsNkZBQ0Qsa0JBQ0ksOEVBQ3hCIiwiZmlsZSI6InBhZ2VzL2JpdGNvaW4uanM/ZW50cnkiLCJzb3VyY2VSb290IjoiL1VzZXJzL3ByaXNjXzAwMC9jb2RlL0NBQ0RFVi92eC10ZXN0Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTGluZWFyR3JhZGllbnQgfSBmcm9tIFwiQHZ4L2dyYWRpZW50XCI7XG5pbXBvcnQgeyB3aXRoU2NyZWVuU2l6ZSB9IGZyb20gXCJAdngvcmVzcG9uc2l2ZVwiO1xuaW1wb3J0IENoYXJ0IGZyb20gXCIuLi9jb21wb25lbnRzL2NoYXJ0XCI7XG5pbXBvcnQgZm9ybWF0UHJpY2UgZnJvbSBcIi4uL3V0aWxzL2Zvcm1hdFByaWNlXCI7XG5cbmZ1bmN0aW9uIEJhY2tncm91bmQoeyB3aWR0aCwgaGVpZ2h0IH0pIHtcbiAgcmV0dXJuIChcbiAgICA8c3ZnIHdpZHRoPXt3aWR0aH0gaGVpZ2h0PXtoZWlnaHR9PlxuICAgICAgPExpbmVhckdyYWRpZW50IGlkPVwiZmlsbFwiIHZlcnRpY2FsPXtmYWxzZX0+XG4gICAgICAgIDxzdG9wIHN0b3BDb2xvcj1cIiNhOTQzZTRcIiBvZmZzZXQ9XCIwJVwiIC8+XG4gICAgICAgIDxzdG9wIHN0b3BDb2xvcj1cIiNmNTU5ODlcIiBvZmZzZXQ9XCI1MCVcIiAvPlxuICAgICAgICA8c3RvcCBzdG9wQ29sb3I9XCIjZmZhZjg0XCIgb2Zmc2V0PVwiMTAwJVwiIC8+XG4gICAgICA8L0xpbmVhckdyYWRpZW50PlxuICAgICAgey8qIDxyZWN0IGZpbGwgYXR0cmlidXRlIGlzIHBvaW50aW5nIHRvIDxMRyBpZD1cImZpbGxcIiAqL31cbiAgICAgIDxyZWN0IHdpZHRoPXt3aWR0aH0gaGVpZ2h0PXtoZWlnaHR9IGZpbGw9XCJ1cmwoI2ZpbGwpXCIgLz5cbiAgICA8L3N2Zz5cbiAgKTtcbn1cblxuY2xhc3MgQXBwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgLy8gU2V0IHVwIHN0YXRlXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIC8vIFNldCBkYXRhIHRvIGVtcHR5IG9iamVjdFxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBkYXRhOiB7fVxuICAgIH07XG4gIH1cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgZmV0Y2goXCJodHRwczovL2FwaS5jb2luZGVzay5jb20vdjEvYnBpL2hpc3RvcmljYWwvY2xvc2UuanNvblwiKVxuICAgICAgLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpXG4gICAgICAudGhlbihqc29uID0+IHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgZGF0YToganNvblxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICB9XG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IHNjcmVlbldpZHRoLCBzY3JlZW5IZWlnaHQgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgeyBkYXRhIH0gPSB0aGlzLnN0YXRlO1xuICAgIGlmICghZGF0YS5icGkpIHtcbiAgICAgIHJldHVybiA8ZGl2PkxvYWRpbmcuLi48L2Rpdj47XG4gICAgfVxuICAgIGNvbnN0IHByaWNlcyA9IE9iamVjdC5rZXlzKGRhdGEuYnBpKS5tYXAoayA9PiB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICB0aW1lOiBrLFxuICAgICAgICBwcmljZTogZGF0YS5icGlba11cbiAgICAgIH07XG4gICAgfSk7XG4gICAgLyoqIHdlIHdhbnQgdG8gY3VycmVudCBwcmljZSB3aGljaCB3aWxsIGJlIHRoZSBsYXN0IGl0ZW0gcmV0dXJuZWQgZnJvbSBvdXIgYXBpIGNhbGxcbiAgICAgKlxuICAgICAqL1xuICAgIGNvbnN0IGN1cnJlbnRQcmljZSA9IHByaWNlc1twcmljZXMubGVuZ3RoIC0gMV0ucHJpY2U7XG4gICAgLy8gdmFyIHRvIGdldCBkaWZmZXJlbmNlIGluIGN1cnJlbnQvbGFzdCBwcmljZS4gZGVmIGZpcnN0UHJpY2UgLSBzdWJ0cmFjdCBmcm9tIGN1cnJlbnRcbiAgICBjb25zdCBmaXJzdFByaWNlID0gcHJpY2VzWzBdLnByaWNlO1xuICAgIGNvbnN0IGRpZmZQcmljZSA9IGN1cnJlbnRQcmljZSAtIGZpcnN0UHJpY2U7XG4gICAgLy8gY29uc29sZS5sb2coY3VycmVudFByaWNlKTtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJhcHBcIj5cbiAgICAgICAgPEJhY2tncm91bmQgd2lkdGg9e3NjcmVlbldpZHRofSBoZWlnaHQ9e3NjcmVlbkhlaWdodH0gLz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjZW50ZXJcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNoYXJ0XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpdGxlYmFyXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGl0bGVcIj5cbiAgICAgICAgICAgICAgICA8ZGl2PkJJVENPSU4gUFJJQ0U8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgPHNtYWxsPmxhc3QgMzAgZGF5czwvc21hbGw+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwYWNlclwiIC8+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJpY2VzXCI+XG4gICAgICAgICAgICAgICAgPGRpdj57Zm9ybWF0UHJpY2UoY3VycmVudFByaWNlKX08L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2Pntmb3JtYXRQcmljZShkaWZmUHJpY2UpfTwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgICAgICAgPENoYXJ0IGRhdGE9e2RhdGF9IC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJkaXNjbGFpbWVyXCI+e2RhdGEuZGlzY2xhaW1lcn08L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgLmFwcCxcbiAgICAgICAgICAuY2VudGVyIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgICAgICBib3R0b206IDA7XG4gICAgICAgICAgICBmbGV4OiAxO1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6IGFyaWFsO1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnByaWNlcyB7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnNwYWNlciB7XG4gICAgICAgICAgICBmbGV4OiAxO1xuICAgICAgICAgIH1cbiAgICAgICAgICAudGl0bGViYXIge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgcGFkZGluZzogMTVweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnRpdGxlIHtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmNvbnRhaW5lciB7XG4gICAgICAgICAgICBmbGV4OiAxO1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmRpc2NsYWltZXIge1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogMzVweDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTFweDtcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgIG9wYWNpdHk6IDAuNDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmNoYXJ0IHtcbiAgICAgICAgICAgIHdpZHRoOiA2MDBweDtcbiAgICAgICAgICAgIGhlaWdodDogNDAwcHg7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjcyNzNmO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTY3JlZW5TaXplKEFwcCk7XG4iXX0= */\n/*@ sourceURL=pages/bitcoin.js?entry */"
      }));
    }
  }]);

  return App;
}(_react2.default.Component);

exports.default = (0, _responsive.withScreenSize)(App);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2JpdGNvaW4uanMiXSwibmFtZXMiOlsiTGluZWFyR3JhZGllbnQiLCJ3aXRoU2NyZWVuU2l6ZSIsIkNoYXJ0IiwiZm9ybWF0UHJpY2UiLCJCYWNrZ3JvdW5kIiwid2lkdGgiLCJoZWlnaHQiLCJBcHAiLCJwcm9wcyIsInN0YXRlIiwiZGF0YSIsImZldGNoIiwidGhlbiIsInJlcyIsImpzb24iLCJzZXRTdGF0ZSIsInNjcmVlbldpZHRoIiwic2NyZWVuSGVpZ2h0IiwiYnBpIiwicHJpY2VzIiwibWFwIiwidGltZSIsImsiLCJwcmljZSIsImN1cnJlbnRQcmljZSIsImxlbmd0aCIsImZpcnN0UHJpY2UiLCJkaWZmUHJpY2UiLCJkaXNjbGFpbWVyIiwiUmVhY3QiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBUzs7QUFDVCxBQUFTOztBQUNULEFBQU8sQUFBVzs7OztBQUNsQixBQUFPLEFBQWlCOzs7Ozs7Ozs7QUFFeEIsU0FBQSxBQUFTLGlCQUE4QjtNQUFqQixBQUFpQixhQUFqQixBQUFpQjtNQUFWLEFBQVUsY0FBVixBQUFVLEFBQ3JDOzt5QkFDRSxjQUFBLFNBQUssT0FBTCxBQUFZLE9BQU8sUUFBbkIsQUFBMkI7Z0JBQTNCO2tCQUFBLEFBQ0U7QUFERjtHQUFBLGtCQUNFLEFBQUMsMENBQWUsSUFBaEIsQUFBbUIsUUFBTyxVQUExQixBQUFvQztnQkFBcEM7a0JBQUEsQUFDRTtBQURGOzZDQUNRLFdBQU4sQUFBZ0IsV0FBVSxRQUExQixBQUFpQztnQkFBakM7a0JBREYsQUFDRSxBQUNBO0FBREE7OENBQ00sV0FBTixBQUFnQixXQUFVLFFBQTFCLEFBQWlDO2dCQUFqQztrQkFGRixBQUVFLEFBQ0E7QUFEQTs4Q0FDTSxXQUFOLEFBQWdCLFdBQVUsUUFBMUIsQUFBaUM7Z0JBQWpDO2tCQUpKLEFBQ0UsQUFHRSxBQUdGO0FBSEU7K0NBR0ksT0FBTixBQUFhLE9BQU8s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