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