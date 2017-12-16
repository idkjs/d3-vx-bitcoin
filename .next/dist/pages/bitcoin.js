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
        className: "jsx-1464507090" + " " + "app",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        }
      }, _react2.default.createElement(Background, { width: screenWidth, height: screenHeight, __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        }
      }), _react2.default.createElement("div", {
        className: "jsx-1464507090" + " " + "center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        }
      }, _react2.default.createElement("div", {
        className: "jsx-1464507090" + " " + "chart",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        }
      }, _react2.default.createElement("div", {
        className: "jsx-1464507090" + " " + "titlebar",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        }
      }, _react2.default.createElement("div", {
        className: "jsx-1464507090" + " " + "title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        }
      }, _react2.default.createElement("div", {
        className: "jsx-1464507090",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        }
      }, "BITCOIN PRICE"), _react2.default.createElement("div", {
        className: "jsx-1464507090",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        }
      }, _react2.default.createElement("small", {
        className: "jsx-1464507090",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        }
      }, "last 30 days"))), _react2.default.createElement("div", {
        className: "jsx-1464507090" + " " + "spacer",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        }
      }), _react2.default.createElement("div", {
        className: "jsx-1464507090",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        }
      }, _react2.default.createElement("div", {
        className: "jsx-1464507090",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        }
      }, (0, _formatPrice2.default)(currentPrice)), _react2.default.createElement("div", {
        className: "jsx-1464507090",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        }
      }, (0, _formatPrice2.default)(diffPrice)))), _react2.default.createElement("div", {
        className: "jsx-1464507090" + " " + "container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        }
      }, _react2.default.createElement(_chart2.default, { data: data, __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        }
      }))), _react2.default.createElement("p", {
        className: "jsx-1464507090" + " " + "disclaimer",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        }
      }, data.disclaimer)), _react2.default.createElement(_style2.default, {
        styleId: "1464507090",
        css: ".app.jsx-1464507090,.center.jsx-1464507090{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;position:absolute;top:0;left:0;right:0;bottom:0;-webkit-flex:1;-ms-flex:1;flex:1;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;font-family:arial;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}.spacer.jsx-1464507090{-webkit-flex:1;-ms-flex:1;flex:1;}.titlebar.jsx-1464507090{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding:15px;}.container.jsx-1464507090{-webkit-flex:1;-ms-flex:1;flex:1;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}.disclaimer.jsx-1464507090{margin-top:35px;font-size:11px;color:white;opacity:0.4;}.chart.jsx-1464507090{width:600px;height:400px;background-color:#27273f;border-radius:8px;color:white;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2JpdGNvaW4uanM/ZW50cnkiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBaUZvQixBQUkwQixBQWFOLEFBR00sQUFRTixBQUlTLEFBTUosWUFDQyxJQU5FLFNBT1UsTUFOYixFQWhCZCxBQVdlLFVBTUQsT0FNTSxLQUxwQixhQU1jLE1BckNNLEFBZ0JDLE1Bc0JOLFlBckNQLE1BQ0MsT0FDQyxFQXNCVixNQXJCVyxTQUNGLHFCQVlZLFdBc0JHLENBakNDLDZFQWtDekIsSUF0QmUsYUFDZixLQVpxQiw2RkFDRCxrQkFDSSw4RUFDeEIiLCJmaWxlIjoicGFnZXMvYml0Y29pbi5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiIvVXNlcnMvcHJpc2NfMDAwL2NvZGUvQ0FDREVWL3Z4LXRlc3QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBMaW5lYXJHcmFkaWVudCB9IGZyb20gXCJAdngvZ3JhZGllbnRcIjtcbmltcG9ydCB7IHdpdGhTY3JlZW5TaXplIH0gZnJvbSBcIkB2eC9yZXNwb25zaXZlXCI7XG5pbXBvcnQgQ2hhcnQgZnJvbSBcIi4uL2NvbXBvbmVudHMvY2hhcnRcIjtcbmltcG9ydCBmb3JtYXRQcmljZSBmcm9tIFwiLi4vdXRpbHMvZm9ybWF0UHJpY2VcIjtcblxuZnVuY3Rpb24gQmFja2dyb3VuZCh7IHdpZHRoLCBoZWlnaHQgfSkge1xuICByZXR1cm4gKFxuICAgIDxzdmcgd2lkdGg9e3dpZHRofSBoZWlnaHQ9e2hlaWdodH0+XG4gICAgICA8TGluZWFyR3JhZGllbnQgaWQ9XCJmaWxsXCIgdmVydGljYWw9e2ZhbHNlfT5cbiAgICAgICAgPHN0b3Agc3RvcENvbG9yPVwiI2E5NDNlNFwiIG9mZnNldD1cIjAlXCIgLz5cbiAgICAgICAgPHN0b3Agc3RvcENvbG9yPVwiI2Y1NTk4OVwiIG9mZnNldD1cIjUwJVwiIC8+XG4gICAgICAgIDxzdG9wIHN0b3BDb2xvcj1cIiNmZmFmODRcIiBvZmZzZXQ9XCIxMDAlXCIgLz5cbiAgICAgIDwvTGluZWFyR3JhZGllbnQ+XG4gICAgICB7LyogPHJlY3QgZmlsbCBhdHRyaWJ1dGUgaXMgcG9pbnRpbmcgdG8gPExHIGlkPVwiZmlsbFwiICovfVxuICAgICAgPHJlY3Qgd2lkdGg9e3dpZHRofSBoZWlnaHQ9e2hlaWdodH0gZmlsbD1cInVybCgjZmlsbClcIiAvPlxuICAgIDwvc3ZnPlxuICApO1xufVxuXG5jbGFzcyBBcHAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAvLyBTZXQgdXAgc3RhdGVcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgLy8gU2V0IGRhdGEgdG8gZW1wdHkgb2JqZWN0XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGRhdGE6IHt9XG4gICAgfTtcbiAgfVxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBmZXRjaChcImh0dHBzOi8vYXBpLmNvaW5kZXNrLmNvbS92MS9icGkvaGlzdG9yaWNhbC9jbG9zZS5qc29uXCIpXG4gICAgICAudGhlbihyZXMgPT4gcmVzLmpzb24oKSlcbiAgICAgIC50aGVuKGpzb24gPT4ge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICBkYXRhOiBqc29uXG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgc2NyZWVuV2lkdGgsIHNjcmVlbkhlaWdodCB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCB7IGRhdGEgfSA9IHRoaXMuc3RhdGU7XG4gICAgaWYgKCFkYXRhLmJwaSkge1xuICAgICAgcmV0dXJuIDxkaXY+TG9hZGluZy4uLjwvZGl2PjtcbiAgICB9XG4gICAgY29uc3QgcHJpY2VzID0gT2JqZWN0LmtleXMoZGF0YS5icGkpLm1hcChrID0+IHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHRpbWU6IGssXG4gICAgICAgIHByaWNlOiBkYXRhLmJwaVtrXVxuICAgICAgfTtcbiAgICB9KTtcbiAgICAvKiogd2Ugd2FudCB0byBjdXJyZW50IHByaWNlIHdoaWNoIHdpbGwgYmUgdGhlIGxhc3QgaXRlbSByZXR1cm5lZCBmcm9tIG91ciBhcGkgY2FsbFxuICAgICAqXG4gICAgICovXG4gICAgY29uc3QgY3VycmVudFByaWNlID0gcHJpY2VzW3ByaWNlcy5sZW5ndGggLSAxXS5wcmljZTtcbiAgICAvLyB2YXIgdG8gZ2V0IGRpZmZlcmVuY2UgaW4gY3VycmVudC9sYXN0IHByaWNlLiBkZWYgZmlyc3RQcmljZSAtIHN1YnRyYWN0IGZyb20gY3VycmVudFxuICAgIGNvbnN0IGZpcnN0UHJpY2UgPSBwcmljZXNbMF0ucHJpY2U7XG4gICAgY29uc3QgZGlmZlByaWNlID0gY3VycmVudFByaWNlIC0gZmlyc3RQcmljZTtcbiAgICAvLyBjb25zb2xlLmxvZyhjdXJyZW50UHJpY2UpO1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImFwcFwiPlxuICAgICAgICA8QmFja2dyb3VuZCB3aWR0aD17c2NyZWVuV2lkdGh9IGhlaWdodD17c2NyZWVuSGVpZ2h0fSAvPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNlbnRlclwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2hhcnRcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGl0bGViYXJcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aXRsZVwiPlxuICAgICAgICAgICAgICAgIDxkaXY+QklUQ09JTiBQUklDRTwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICA8c21hbGw+bGFzdCAzMCBkYXlzPC9zbWFsbD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3BhY2VyXCIgLz5cbiAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8ZGl2Pntmb3JtYXRQcmljZShjdXJyZW50UHJpY2UpfTwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXY+e2Zvcm1hdFByaWNlKGRpZmZQcmljZSl9PC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICA8Q2hhcnQgZGF0YT17ZGF0YX0gLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImRpc2NsYWltZXJcIj57ZGF0YS5kaXNjbGFpbWVyfTwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAuYXBwLFxuICAgICAgICAgIC5jZW50ZXIge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgICByaWdodDogMDtcbiAgICAgICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgICAgIGZsZXg6IDE7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICBmb250LWZhbWlseTogYXJpYWw7XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuc3BhY2VyIHtcbiAgICAgICAgICAgIGZsZXg6IDE7XG4gICAgICAgICAgfVxuICAgICAgICAgIC50aXRsZWJhciB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICBwYWRkaW5nOiAxNXB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAudGl0bGUge1xuICAgICAgICAgIH1cbiAgICAgICAgICAuY29udGFpbmVyIHtcbiAgICAgICAgICAgIGZsZXg6IDE7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAuZGlzY2xhaW1lciB7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAzNXB4O1xuICAgICAgICAgICAgZm9udC1zaXplOiAxMXB4O1xuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgb3BhY2l0eTogMC40O1xuICAgICAgICAgIH1cbiAgICAgICAgICAuY2hhcnQge1xuICAgICAgICAgICAgd2lkdGg6IDYwMHB4O1xuICAgICAgICAgICAgaGVpZ2h0OiA0MDBweDtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMyNzI3M2Y7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFNjcmVlblNpemUoQXBwKTtcbiJdfQ== */\n/*@ sourceURL=pages/bitcoin.js?entry */"
      }));
    }
  }]);

  return App;
}(_react2.default.Component);

exports.default = (0, _responsive.withScreenSize)(App);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2JpdGNvaW4uanMiXSwibmFtZXMiOlsiTGluZWFyR3JhZGllbnQiLCJ3aXRoU2NyZWVuU2l6ZSIsIkNoYXJ0IiwiZm9ybWF0UHJpY2UiLCJCYWNrZ3JvdW5kIiwid2lkdGgiLCJoZWlnaHQiLCJBcHAiLCJwcm9wcyIsInN0YXRlIiwiZGF0YSIsImZldGNoIiwidGhlbiIsInJlcyIsImpzb24iLCJzZXRTdGF0ZSIsInNjcmVlbldpZHRoIiwic2NyZWVuSGVpZ2h0IiwiYnBpIiwicHJpY2VzIiwibWFwIiwidGltZSIsImsiLCJwcmljZSIsImN1cnJlbnRQcmljZSIsImxlbmd0aCIsImZpcnN0UHJpY2UiLCJkaWZmUHJpY2UiLCJkaXNjbGFpbWVyIiwiUmVhY3QiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBUzs7QUFDVCxBQUFTOztBQUNULEFBQU8sQUFBVzs7OztBQUNsQixBQUFPLEFBQWlCOzs7Ozs7Ozs7QUFFeEIsU0FBQSxBQUFTLGlCQUE4QjtNQUFqQixBQUFpQixhQUFqQixBQUFpQjtNQUFWLEFBQVUsY0FBVixBQUFVLEFBQ3JDOzt5QkFDRSxjQUFBLFNBQUssT0FBTCxBQUFZLE9BQU8sUUFBbkIsQUFBMkI7Z0JBQTNCO2tCQUFBLEFBQ0U7QUFERjtHQUFBLGtCQUNFLEFBQUMsMENBQWUsSUFBaEIsQUFBbUIsUUFBTyxVQUExQixBQUFvQztnQkFBcEM7a0JBQUEsQUFDRTtBQURGOzZDQUNRLFdBQU4sQUFBZ0IsV0FBVSxRQUExQixBQUFpQztnQkFBakM7a0JBREYsQUFDRSxBQUNBO0FBREE7OENBQ00sV0FBTixBQUFnQixXQUFVLFFBQTFCLEFBQWlDO2dCQUFqQztrQkFGRixBQUVFLEFBQ0E7QUFEQTs4Q0FDTSxXQUFOLEFBQWdCLFdBQVUsUUFBMUIsQUFBaUM7Z0JBQWpDO2tCQUpKLEFBQ0UsQUFHRSxBQUdGO0FBSEU7K0NBR0ksT0FBTixBQUFhLE9BQU8s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