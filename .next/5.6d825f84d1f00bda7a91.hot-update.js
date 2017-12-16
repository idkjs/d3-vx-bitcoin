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

var _formatPrice = __webpack_require__(422);

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
      // boolean to check if that price has increased or decreased
      var hasIncreased = diffPrice > 0;
      // console.log(currentPrice);
      return _react2.default.createElement("div", {
        className: "jsx-3522186945" + " " + "app",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        }
      }, _react2.default.createElement(Background, { width: screenWidth, height: screenHeight, __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        }
      }), _react2.default.createElement("div", {
        className: "jsx-3522186945" + " " + "center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        }
      }, _react2.default.createElement("div", {
        className: "jsx-3522186945" + " " + "chart",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        }
      }, _react2.default.createElement("div", {
        className: "jsx-3522186945" + " " + "titlebar",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        }
      }, _react2.default.createElement("div", {
        className: "jsx-3522186945" + " " + "title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        }
      }, _react2.default.createElement("div", {
        className: "jsx-3522186945",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        }
      }, "BITCOIN PRICE"), _react2.default.createElement("div", {
        className: "jsx-3522186945",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        }
      }, _react2.default.createElement("small", {
        className: "jsx-3522186945",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        }
      }, "last 30 days"))), _react2.default.createElement("div", {
        className: "jsx-3522186945" + " " + "spacer",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        }
      }), _react2.default.createElement("div", {
        className: "jsx-3522186945" + " " + "prices",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        }
      }, _react2.default.createElement("div", {
        className: "jsx-3522186945",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        }
      }, (0, _formatPrice2.default)(currentPrice)), _react2.default.createElement("small", {
        className: "jsx-3522186945" + " " + ((hasIncreased ? "increased" : "decreased") || ""),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        }
      }, hasIncreased ? "+" : "-", (0, _formatPrice2.default)(diffPrice)))), _react2.default.createElement("div", {
        className: "jsx-3522186945" + " " + "container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        }
      }, _react2.default.createElement(_chart2.default, { data: data, __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        }
      }))), _react2.default.createElement("p", {
        className: "jsx-3522186945" + " " + "disclaimer",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        }
      }, data.disclaimer)), _react2.default.createElement(_style2.default, {
        styleId: "3522186945",
        css: ".app.jsx-3522186945,.center.jsx-3522186945{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;position:absolute;top:0;left:0;right:0;bottom:0;-webkit-flex:1;-ms-flex:1;flex:1;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;font-family:arial;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}.increased.jsx-3522186945{color:#00f1a1;}.prices.jsx-3522186945{-webkit-align-items:flex-end;-webkit-box-align:flex-end;-ms-flex-align:flex-end;align-items:flex-end;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}.spacer.jsx-3522186945{-webkit-flex:1;-ms-flex:1;flex:1;}.titlebar.jsx-3522186945{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding:15px;}.container.jsx-3522186945{-webkit-flex:1;-ms-flex:1;flex:1;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}.disclaimer.jsx-3522186945{margin-top:35px;font-size:11px;color:white;opacity:0.4;}.chart.jsx-3522186945{width:600px;height:400px;background-color:#27273f;border-radius:8px;color:white;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2JpdGNvaW4uanM/ZW50cnkiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBc0ZvQixBQUkwQixBQWFDLEFBSU8sQUFLZCxBQUdNLEFBUU4sQUFJUyxBQU1KLFlBQ0MsRUE5QmYsRUF3QmlCLFNBT1UsTUFOYixFQWhCZCxBQVdlLFVBTUQsT0FNTSxLQUxwQixhQU1jLE1BOUNNLEFBeUJDLE1Bc0JOLFlBOUNQLE1BQ0MsR0FlTSxJQWRMLEVBK0JWLE1BOUJXLFNBQ0YscUJBcUJZLFdBc0JHLENBMUNDLG9CQVlELHlEQStCeEIsSUF0QmUsYUFDZixJQVRBLENBWnFCLDZGQUNELGtCQUNJLDhFQUN4QiIsImZpbGUiOiJwYWdlcy9iaXRjb2luLmpzP2VudHJ5Iiwic291cmNlUm9vdCI6Ii9Vc2Vycy9wcmlzY18wMDAvY29kZS9DQUNERVYvdngtdGVzdCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IExpbmVhckdyYWRpZW50IH0gZnJvbSBcIkB2eC9ncmFkaWVudFwiO1xuaW1wb3J0IHsgd2l0aFNjcmVlblNpemUgfSBmcm9tIFwiQHZ4L3Jlc3BvbnNpdmVcIjtcbmltcG9ydCBDaGFydCBmcm9tIFwiLi4vY29tcG9uZW50cy9jaGFydFwiO1xuaW1wb3J0IGZvcm1hdFByaWNlIGZyb20gXCIuLi91dGlscy9mb3JtYXRQcmljZVwiO1xuXG5mdW5jdGlvbiBCYWNrZ3JvdW5kKHsgd2lkdGgsIGhlaWdodCB9KSB7XG4gIHJldHVybiAoXG4gICAgPHN2ZyB3aWR0aD17d2lkdGh9IGhlaWdodD17aGVpZ2h0fT5cbiAgICAgIDxMaW5lYXJHcmFkaWVudCBpZD1cImZpbGxcIiB2ZXJ0aWNhbD17ZmFsc2V9PlxuICAgICAgICA8c3RvcCBzdG9wQ29sb3I9XCIjYTk0M2U0XCIgb2Zmc2V0PVwiMCVcIiAvPlxuICAgICAgICA8c3RvcCBzdG9wQ29sb3I9XCIjZjU1OTg5XCIgb2Zmc2V0PVwiNTAlXCIgLz5cbiAgICAgICAgPHN0b3Agc3RvcENvbG9yPVwiI2ZmYWY4NFwiIG9mZnNldD1cIjEwMCVcIiAvPlxuICAgICAgPC9MaW5lYXJHcmFkaWVudD5cbiAgICAgIHsvKiA8cmVjdCBmaWxsIGF0dHJpYnV0ZSBpcyBwb2ludGluZyB0byA8TEcgaWQ9XCJmaWxsXCIgKi99XG4gICAgICA8cmVjdCB3aWR0aD17d2lkdGh9IGhlaWdodD17aGVpZ2h0fSBmaWxsPVwidXJsKCNmaWxsKVwiIC8+XG4gICAgPC9zdmc+XG4gICk7XG59XG5cbmNsYXNzIEFwcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIC8vIFNldCB1cCBzdGF0ZVxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICAvLyBTZXQgZGF0YSB0byBlbXB0eSBvYmplY3RcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgZGF0YToge31cbiAgICB9O1xuICB9XG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGZldGNoKFwiaHR0cHM6Ly9hcGkuY29pbmRlc2suY29tL3YxL2JwaS9oaXN0b3JpY2FsL2Nsb3NlLmpzb25cIilcbiAgICAgIC50aGVuKHJlcyA9PiByZXMuanNvbigpKVxuICAgICAgLnRoZW4oanNvbiA9PiB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgIGRhdGE6IGpzb25cbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgfVxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBzY3JlZW5XaWR0aCwgc2NyZWVuSGVpZ2h0IH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHsgZGF0YSB9ID0gdGhpcy5zdGF0ZTtcbiAgICBpZiAoIWRhdGEuYnBpKSB7XG4gICAgICByZXR1cm4gPGRpdj5Mb2FkaW5nLi4uPC9kaXY+O1xuICAgIH1cbiAgICBjb25zdCBwcmljZXMgPSBPYmplY3Qua2V5cyhkYXRhLmJwaSkubWFwKGsgPT4ge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgdGltZTogayxcbiAgICAgICAgcHJpY2U6IGRhdGEuYnBpW2tdXG4gICAgICB9O1xuICAgIH0pO1xuICAgIC8qKiB3ZSB3YW50IHRvIGN1cnJlbnQgcHJpY2Ugd2hpY2ggd2lsbCBiZSB0aGUgbGFzdCBpdGVtIHJldHVybmVkIGZyb20gb3VyIGFwaSBjYWxsXG4gICAgICpcbiAgICAgKi9cbiAgICBjb25zdCBjdXJyZW50UHJpY2UgPSBwcmljZXNbcHJpY2VzLmxlbmd0aCAtIDFdLnByaWNlO1xuICAgIC8vIHZhciB0byBnZXQgZGlmZmVyZW5jZSBpbiBjdXJyZW50L2xhc3QgcHJpY2UuIGRlZiBmaXJzdFByaWNlIC0gc3VidHJhY3QgZnJvbSBjdXJyZW50XG4gICAgY29uc3QgZmlyc3RQcmljZSA9IHByaWNlc1swXS5wcmljZTtcbiAgICBjb25zdCBkaWZmUHJpY2UgPSBjdXJyZW50UHJpY2UgLSBmaXJzdFByaWNlO1xuICAgIC8vIGJvb2xlYW4gdG8gY2hlY2sgaWYgdGhhdCBwcmljZSBoYXMgaW5jcmVhc2VkIG9yIGRlY3JlYXNlZFxuICAgIGNvbnN0IGhhc0luY3JlYXNlZCA9IGRpZmZQcmljZSA+IDA7XG4gICAgLy8gY29uc29sZS5sb2coY3VycmVudFByaWNlKTtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJhcHBcIj5cbiAgICAgICAgPEJhY2tncm91bmQgd2lkdGg9e3NjcmVlbldpZHRofSBoZWlnaHQ9e3NjcmVlbkhlaWdodH0gLz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjZW50ZXJcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNoYXJ0XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpdGxlYmFyXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGl0bGVcIj5cbiAgICAgICAgICAgICAgICA8ZGl2PkJJVENPSU4gUFJJQ0U8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgPHNtYWxsPmxhc3QgMzAgZGF5czwvc21hbGw+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwYWNlclwiIC8+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJpY2VzXCI+XG4gICAgICAgICAgICAgICAgPGRpdj57Zm9ybWF0UHJpY2UoY3VycmVudFByaWNlKX08L2Rpdj5cbiAgICAgICAgICAgICAgICA8c21hbGwgY2xhc3NOYW1lPXtoYXNJbmNyZWFzZWQgPyBcImluY3JlYXNlZFwiIDogXCJkZWNyZWFzZWRcIn0+XG4gICAgICAgICAgICAgICAgICB7aGFzSW5jcmVhc2VkID8gXCIrXCIgOiBcIi1cIn1cbiAgICAgICAgICAgICAgICAgIHtmb3JtYXRQcmljZShkaWZmUHJpY2UpfVxuICAgICAgICAgICAgICAgIDwvc21hbGw+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICA8Q2hhcnQgZGF0YT17ZGF0YX0gLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImRpc2NsYWltZXJcIj57ZGF0YS5kaXNjbGFpbWVyfTwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAuYXBwLFxuICAgICAgICAgIC5jZW50ZXIge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgICByaWdodDogMDtcbiAgICAgICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgICAgIGZsZXg6IDE7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICBmb250LWZhbWlseTogYXJpYWw7XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuaW5jcmVhc2VkIHtcbiAgICAgICAgICAgIGNvbG9yOiAjMDBmMWExO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5wcmljZXMge1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgfVxuICAgICAgICAgIC5zcGFjZXIge1xuICAgICAgICAgICAgZmxleDogMTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnRpdGxlYmFyIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIHBhZGRpbmc6IDE1cHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC50aXRsZSB7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5jb250YWluZXIge1xuICAgICAgICAgICAgZmxleDogMTtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5kaXNjbGFpbWVyIHtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDM1cHg7XG4gICAgICAgICAgICBmb250LXNpemU6IDExcHg7XG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICBvcGFjaXR5OiAwLjQ7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5jaGFydCB7XG4gICAgICAgICAgICB3aWR0aDogNjAwcHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDQwMHB4O1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzI3MjczZjtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoU2NyZWVuU2l6ZShBcHApO1xuIl19 */\n/*@ sourceURL=pages/bitcoin.js?entry */"
      }));
    }
  }]);

  return App;
}(_react2.default.Component);

exports.default = (0, _responsive.withScreenSize)(App);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2JpdGNvaW4uanMiXSwibmFtZXMiOlsiTGluZWFyR3JhZGllbnQiLCJ3aXRoU2NyZWVuU2l6ZSIsIkNoYXJ0IiwiZm9ybWF0UHJpY2UiLCJCYWNrZ3JvdW5kIiwid2lkdGgiLCJoZWlnaHQiLCJBcHAiLCJwcm9wcyIsInN0YXRlIiwiZGF0YSIsImZldGNoIiwidGhlbiIsInJlcyIsImpzb24iLCJzZXRTdGF0ZSIsInNjcmVlbldpZHRoIiwic2NyZWVuSGVpZ2h0IiwiYnBpIiwicHJpY2VzIiwibWFwIiwidGltZSIsImsiLCJwcmljZSIsImN1cnJlbnRQcmljZSIsImxlbmd0aCIsImZpcnN0UHJpY2UiLCJkaWZmUHJpY2UiLCJoYXNJbmNyZWFzZWQiLCJkaXNjbGFpbWVyIiwiUmVhY3QiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBUzs7QUFDVCxBQUFTOztBQUNULEFBQU8sQUFBVzs7OztBQUNsQixBQUFPLEFBQWlCOzs7Ozs7Ozs7QUFFeEIsU0FBQSxBQUFTLGlCQUE4QjtNQUFqQixBQUFpQixhQUFqQixBQUFpQjtNQUFWLEFBQVUsY0FBVixBQUFVLEFBQ3JDOzt5QkFDRSxjQUFBLFNBQUssT0FBTCxBQUFZLE9BQU8sUUFBbkIsQUFBMkI7Z0JBQTNCO2tCQUFBLEFBQ0U7QUFERjtHQUFBLGtCQUNFLEFBQUMsMENBQWUsSUFBaEIsQUFBbUIsUUFBTyxVQUExQixBQUFvQztnQkFBcEM7a0JBQUEsQUFDRTtBQURGOzZDQUNRLFdBQU4sQUFBZ0IsV0FBVSxRQUExQixBQUFpQztnQkFBakM7a0JBREYsQUFDRSxBQUNBO0FBREE7OENBQ00sV0FBTixBQUFnQixXQUFVLFFBQTFCLEFBQWlDO2dCQUFqQztrQkFGRixBQUVFLEFBQ0E7QUFEQTs4Q0FDTSxXQUFOLEFBQWdCLFdBQVUsUUFBMUIsQUFBaUM7Z0JBQWpDO2tCQUpKLEFBQ0UsQUFHRSxBQUdGO0FBSEU7K0NBR0ksT0FBTixBQUFhLE9BQU8sUUFBcEIsQUFBNEIsUUFBUSxNQUFwQyxBQUF5QztnQkFBekM7a0JBUkosQUFDRSxBQU9FLEFBR0w7QUFISzs7OztJLEFBS0E7K0JBQ0o7O0FBQ0E7ZUFBQSxBQUFZLE9BQU87d0NBRWpCOztBQUZpQjtnSUFBQSxBQUNYLEFBRU47O1VBQUEsQUFBSztZQUhZLEFBR2pCLEFBQWEsQUFDTDtBQURLLEFBQ1g7V0FFSDs7Ozs7d0NBQ21CO21CQUNsQjs7WUFBQSxBQUFNLHlEQUFOLEFBQ0csS0FBSyxlQUFBO2VBQU8sSUFBUCxBQUFPLEFBQUk7QUFEbkIsU0FBQSxBQUVHLEtBQUssZ0JBQVEsQUFDWjtlQUFBLEFBQUs7Z0JBQUwsQUFBYyxBQUNOLEFBRVQ7QUFIZSxBQUNaO0FBSk4sQUFPRDs7Ozs2QkFDUTttQkFDK0IsS0FEL0IsQUFDb0M7VUFEcEMsQUFDQyxxQkFERCxBQUNDO1VBREQsQUFDYyxzQkFEZCxBQUNjO1VBRGQsQUFFQyxPQUFTLEtBRlYsQUFFZSxNQUZmLEFBRUMsQUFDUjs7VUFBSSxDQUFDLEtBQUwsQUFBVSxLQUFLLEFBQ2I7K0JBQU8sY0FBQTs7c0JBQUE7d0JBQUE7QUFBQTtBQUFBLFNBQUEsRUFBUCxBQUFPLEFBQ1I7QUFDRDtVQUFNLDZCQUFxQixLQUFaLEFBQWlCLEtBQWpCLEFBQXNCLElBQUksYUFBSyxBQUM1Qzs7Z0JBQU8sQUFDQyxBQUNOO2lCQUFPLEtBQUEsQUFBSyxJQUZkLEFBQU8sQUFFRSxBQUFTLEFBRW5CO0FBSlEsQUFDTDtBQUZKLEFBQWUsQUFNZixPQU5lO0FBU2Y7OztVQUFNLGVBQWUsT0FBTyxPQUFBLEFBQU8sU0FBZCxBQUF1QixHQUE1QyxBQUErQyxBQUMvQztBQUNBO1VBQU0sYUFBYSxPQUFBLEFBQU8sR0FBMUIsQUFBNkIsQUFDN0I7VUFBTSxZQUFZLGVBQWxCLEFBQWlDLEFBQ2pDO0FBQ0E7VUFBTSxlQUFlLFlBQXJCLEFBQWlDLEFBQ2pDO0FBQ0E7NkJBQ0UsY0FBQTs0Q0FBQSxBQUFlOztvQkFBZjtzQkFBQSxBQUNFO0FBREY7QUFBQSxPQUFBLGdDQUNFLEFBQUMsY0FBVyxPQUFaLEFBQW1CLGFBQWEsUUFBaEMsQUFBd0M7b0JBQXhDO3NCQURGLEFBQ0UsQUFDQTtBQURBOzBCQUNBLGNBQUE7NENBQUEsQUFBZTs7b0JBQWY7c0JBQUEsQUFDRTtBQURGO0FBQUEseUJBQ0UsY0FBQTs0Q0FBQSxBQUFlOztvQkFBZjtzQkFBQSxBQUNFO0FBREY7QUFBQSx5QkFDRSxjQUFBOzRDQUFBLEFBQWU7O29CQUFmO3NCQUFBLEFBQ0U7QUFERjtBQUFBLHlCQUNFLGNBQUE7NENBQUEsQUFBZTs7b0JBQWY7c0JBQUEsQUFDRTtBQURGO0FBQUEseUJBQ0UsY0FBQTttQkFBQTs7b0JBQUE7c0JBQUE7QUFBQTtBQUFBLFNBREYsQUFDRSxBQUNBLGtDQUFBLGNBQUE7bUJBQUE7O29CQUFBO3NCQUFBLEFBQ0U7QUFERjtBQUFBLHlCQUNFLGNBQUE7bUJBQUE7O29CQUFBO3NCQUFBO0FBQUE7QUFBQSxTQUpOLEFBQ0UsQUFFRSxBQUNFLEFBR0o7NENBQUEsQUFBZTs7b0JBQWY7c0JBUEYsQUFPRSxBQUNBO0FBREE7QUFBQSwwQkFDQSxjQUFBOzRDQUFBLEFBQWU7O29CQUFmO3NCQUFBLEFBQ0U7QUFERjtBQUFBLHlCQUNFLGNBQUE7bUJBQUE7O29CQUFBO3NCQUFBLEFBQU07QUFBTjtBQUFBLG9DQURGLEFBQ0UsQUFBTSxBQUFZLEFBQ2xCLGdDQUFBLGNBQUE7OENBQWtCLGVBQUEsQUFBZSxjQUFqQyxBQUErQyxnQkFBL0M7O29CQUFBO3NCQUFBLEFBQ0c7QUFESDtBQUFBLHdCQUNHLEFBQWUsTUFEbEIsQUFDd0IsQUFDckIsZ0NBYlQsQUFDRSxBQVFFLEFBRUUsQUFFRyxBQUFZLEFBSW5CLCtCQUFBLGNBQUE7NENBQUEsQUFBZTs7b0JBQWY7c0JBQUEsQUFDRTtBQURGO0FBQUEseUJBQ0UsQUFBQyxpQ0FBTSxNQUFQLEFBQWE7b0JBQWI7c0JBbkJOLEFBQ0UsQUFpQkUsQUFDRSxBQUdKO0FBSEk7NEJBR0osY0FBQTs0Q0FBQSxBQUFhOztvQkFBYjtzQkFBQSxBQUEyQjtBQUEzQjtBQUFBLGNBeEJKLEFBRUUsQUFzQkUsQUFBZ0M7aUJBeEJwQzthQURGLEFBQ0UsQUFtRkg7QUFuRkc7Ozs7O0VBekNZLGdCQUFNLEFBK0h4QixBOztrQkFBZSxnQ0FBZixBQUFlLEFBQWUiLCJmaWxlIjoiYml0Y29pbi5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiIvVXNlcnMvcHJpc2NfMDAwL2NvZGUvQ0FDREVWL3Z4LXRlc3QifQ==

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS42ZDgyNWY4NGQxZjAwYmRhN2E5MS5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXMvYml0Y29pbi5qcz80MDc3ODlmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IExpbmVhckdyYWRpZW50IH0gZnJvbSBcIkB2eC9ncmFkaWVudFwiO1xuaW1wb3J0IHsgd2l0aFNjcmVlblNpemUgfSBmcm9tIFwiQHZ4L3Jlc3BvbnNpdmVcIjtcbmltcG9ydCBDaGFydCBmcm9tIFwiLi4vY29tcG9uZW50cy9jaGFydFwiO1xuaW1wb3J0IGZvcm1hdFByaWNlIGZyb20gXCIuLi91dGlscy9mb3JtYXRQcmljZVwiO1xuXG5mdW5jdGlvbiBCYWNrZ3JvdW5kKHsgd2lkdGgsIGhlaWdodCB9KSB7XG4gIHJldHVybiAoXG4gICAgPHN2ZyB3aWR0aD17d2lkdGh9IGhlaWdodD17aGVpZ2h0fT5cbiAgICAgIDxMaW5lYXJHcmFkaWVudCBpZD1cImZpbGxcIiB2ZXJ0aWNhbD17ZmFsc2V9PlxuICAgICAgICA8c3RvcCBzdG9wQ29sb3I9XCIjYTk0M2U0XCIgb2Zmc2V0PVwiMCVcIiAvPlxuICAgICAgICA8c3RvcCBzdG9wQ29sb3I9XCIjZjU1OTg5XCIgb2Zmc2V0PVwiNTAlXCIgLz5cbiAgICAgICAgPHN0b3Agc3RvcENvbG9yPVwiI2ZmYWY4NFwiIG9mZnNldD1cIjEwMCVcIiAvPlxuICAgICAgPC9MaW5lYXJHcmFkaWVudD5cbiAgICAgIHsvKiA8cmVjdCBmaWxsIGF0dHJpYnV0ZSBpcyBwb2ludGluZyB0byA8TEcgaWQ9XCJmaWxsXCIgKi99XG4gICAgICA8cmVjdCB3aWR0aD17d2lkdGh9IGhlaWdodD17aGVpZ2h0fSBmaWxsPVwidXJsKCNmaWxsKVwiIC8+XG4gICAgPC9zdmc+XG4gICk7XG59XG5cbmNsYXNzIEFwcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIC8vIFNldCB1cCBzdGF0ZVxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICAvLyBTZXQgZGF0YSB0byBlbXB0eSBvYmplY3RcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgZGF0YToge31cbiAgICB9O1xuICB9XG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGZldGNoKFwiaHR0cHM6Ly9hcGkuY29pbmRlc2suY29tL3YxL2JwaS9oaXN0b3JpY2FsL2Nsb3NlLmpzb25cIilcbiAgICAgIC50aGVuKHJlcyA9PiByZXMuanNvbigpKVxuICAgICAgLnRoZW4oanNvbiA9PiB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgIGRhdGE6IGpzb25cbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgfVxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBzY3JlZW5XaWR0aCwgc2NyZWVuSGVpZ2h0IH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHsgZGF0YSB9ID0gdGhpcy5zdGF0ZTtcbiAgICBpZiAoIWRhdGEuYnBpKSB7XG4gICAgICByZXR1cm4gPGRpdj5Mb2FkaW5nLi4uPC9kaXY+O1xuICAgIH1cbiAgICBjb25zdCBwcmljZXMgPSBPYmplY3Qua2V5cyhkYXRhLmJwaSkubWFwKGsgPT4ge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgdGltZTogayxcbiAgICAgICAgcHJpY2U6IGRhdGEuYnBpW2tdXG4gICAgICB9O1xuICAgIH0pO1xuICAgIC8qKiB3ZSB3YW50IHRvIGN1cnJlbnQgcHJpY2Ugd2hpY2ggd2lsbCBiZSB0aGUgbGFzdCBpdGVtIHJldHVybmVkIGZyb20gb3VyIGFwaSBjYWxsXG4gICAgICpcbiAgICAgKi9cbiAgICBjb25zdCBjdXJyZW50UHJpY2UgPSBwcmljZXNbcHJpY2VzLmxlbmd0aCAtIDFdLnByaWNlO1xuICAgIC8vIHZhciB0byBnZXQgZGlmZmVyZW5jZSBpbiBjdXJyZW50L2xhc3QgcHJpY2UuIGRlZiBmaXJzdFByaWNlIC0gc3VidHJhY3QgZnJvbSBjdXJyZW50XG4gICAgY29uc3QgZmlyc3RQcmljZSA9IHByaWNlc1swXS5wcmljZTtcbiAgICBjb25zdCBkaWZmUHJpY2UgPSBjdXJyZW50UHJpY2UgLSBmaXJzdFByaWNlO1xuICAgIC8vIGJvb2xlYW4gdG8gY2hlY2sgaWYgdGhhdCBwcmljZSBoYXMgaW5jcmVhc2VkIG9yIGRlY3JlYXNlZFxuICAgIGNvbnN0IGhhc0luY3JlYXNlZCA9IGRpZmZQcmljZSA+IDA7XG4gICAgLy8gY29uc29sZS5sb2coY3VycmVudFByaWNlKTtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJhcHBcIj5cbiAgICAgICAgPEJhY2tncm91bmQgd2lkdGg9e3NjcmVlbldpZHRofSBoZWlnaHQ9e3NjcmVlbkhlaWdodH0gLz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjZW50ZXJcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNoYXJ0XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpdGxlYmFyXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGl0bGVcIj5cbiAgICAgICAgICAgICAgICA8ZGl2PkJJVENPSU4gUFJJQ0U8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgPHNtYWxsPmxhc3QgMzAgZGF5czwvc21hbGw+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwYWNlclwiIC8+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJpY2VzXCI+XG4gICAgICAgICAgICAgICAgPGRpdj57Zm9ybWF0UHJpY2UoY3VycmVudFByaWNlKX08L2Rpdj5cbiAgICAgICAgICAgICAgICA8c21hbGwgY2xhc3NOYW1lPXtoYXNJbmNyZWFzZWQgPyBcImluY3JlYXNlZFwiIDogXCJkZWNyZWFzZWRcIn0+XG4gICAgICAgICAgICAgICAgICB7aGFzSW5jcmVhc2VkID8gXCIrXCIgOiBcIi1cIn1cbiAgICAgICAgICAgICAgICAgIHtmb3JtYXRQcmljZShkaWZmUHJpY2UpfVxuICAgICAgICAgICAgICAgIDwvc21hbGw+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICA8Q2hhcnQgZGF0YT17ZGF0YX0gLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImRpc2NsYWltZXJcIj57ZGF0YS5kaXNjbGFpbWVyfTwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAuYXBwLFxuICAgICAgICAgIC5jZW50ZXIge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgICByaWdodDogMDtcbiAgICAgICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgICAgIGZsZXg6IDE7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICBmb250LWZhbWlseTogYXJpYWw7XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuaW5jcmVhc2VkIHtcbiAgICAgICAgICAgIGNvbG9yOiAjMDBmMWExO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5wcmljZXMge1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgfVxuICAgICAgICAgIC5zcGFjZXIge1xuICAgICAgICAgICAgZmxleDogMTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnRpdGxlYmFyIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIHBhZGRpbmc6IDE1cHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC50aXRsZSB7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5jb250YWluZXIge1xuICAgICAgICAgICAgZmxleDogMTtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5kaXNjbGFpbWVyIHtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDM1cHg7XG4gICAgICAgICAgICBmb250LXNpemU6IDExcHg7XG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICBvcGFjaXR5OiAwLjQ7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5jaGFydCB7XG4gICAgICAgICAgICB3aWR0aDogNjAwcHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDQwMHB4O1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzI3MjczZjtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoU2NyZWVuU2l6ZShBcHApO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFnZXMvYml0Y29pbi5qcz9lbnRyeSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7Ozs7O0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFHQTtBQUhBO0FBR0E7QUFBQTtBQUdBO0FBSEE7Ozs7O0FBTUE7QUFDQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBSEE7QUFHQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBRUE7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFDQTtBQURBO0FBR0E7QUFHQTtBQUZBO0FBR0E7Ozs7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFBQTs7QUFHQTtBQUFBO0FBREE7QUFJQTtBQUdBOzs7QUFBQTtBQUVBO0FBQUE7QUFDQTtBQUVBO0FBQUE7QUFFQTtBQUNBO0FBQUE7O0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUFBOztBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7O0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTs7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBOztBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTs7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7O0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTs7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7O0FBQUE7QUFDQTtBQURBO0FBQUE7QUFNQTs7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBR0E7QUFIQTtBQUdBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUF4QkE7QUFtRkE7QUFuRkE7Ozs7O0FBekNBO0FBQ0E7QUE4SEE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==