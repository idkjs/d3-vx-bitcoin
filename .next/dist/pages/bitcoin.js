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
        className: "jsx-2065852237" + " " + "app",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        }
      }, _react2.default.createElement(Background, { width: screenWidth, height: screenHeight, __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        }
      }), _react2.default.createElement("div", {
        className: "jsx-2065852237" + " " + "center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        }
      }, _react2.default.createElement("div", {
        className: "jsx-2065852237" + " " + "chart",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        }
      }, _react2.default.createElement("div", {
        className: "jsx-2065852237" + " " + "titlebar",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        }
      }, _react2.default.createElement("div", {
        className: "jsx-2065852237" + " " + "title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        }
      }, _react2.default.createElement("div", {
        className: "jsx-2065852237",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        }
      }, "BITCOIN PRICE"), _react2.default.createElement("div", {
        className: "jsx-2065852237",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        }
      }, _react2.default.createElement("small", {
        className: "jsx-2065852237",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        }
      }, "last 30 days")), _react2.default.createElement("div", {
        className: "jsx-2065852237",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        }
      }, currentPrice))), _react2.default.createElement("div", {
        className: "jsx-2065852237" + " " + "container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        }
      }, _react2.default.createElement(_chart2.default, { data: data, __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        }
      }))), _react2.default.createElement("p", {
        className: "jsx-2065852237" + " " + "disclaimer",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        }
      }, data.disclaimer)), _react2.default.createElement(_style2.default, {
        styleId: "2065852237",
        css: ".app.jsx-2065852237,.center.jsx-2065852237{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;position:absolute;top:0;left:0;right:0;bottom:0;-webkit-flex:1;-ms-flex:1;flex:1;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;font-family:arial;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}.titlebar.jsx-2065852237{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;}.title.jsx-2065852237{padding:15px;}.container.jsx-2065852237{-webkit-flex:1;-ms-flex:1;flex:1;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}.disclaimer.jsx-2065852237{margin-top:35px;font-size:11px;color:white;opacity:0.4;}.chart.jsx-2065852237{width:600px;height:400px;background-color:#27273f;border-radius:8px;color:white;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2JpdGNvaW4uanM/ZW50cnkiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBeUVvQixBQUkwQixBQWFBLEFBSUEsQUFHTixBQUlTLEFBTUosWUFDQyxDQWJmLEdBT2lCLFNBT1UsTUFOYixFQUxDLFVBTUQsT0FNTSxLQUxwQixhQU1jLE1BakNNLEFBYUMsTUFxQk4sWUFqQ1AsTUFDQyxPQUNDLEVBa0JWLE1BakJXLFNBQ0YscUJBU1QsV0FxQndCLENBN0JDLDZFQThCekIsc0JBN0JxQiw2RkFDRCxrQkFDSSw4RUFDeEIiLCJmaWxlIjoicGFnZXMvYml0Y29pbi5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiIvVXNlcnMvcHJpc2NfMDAwL2NvZGUvQ0FDREVWL3Z4LXRlc3QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBMaW5lYXJHcmFkaWVudCB9IGZyb20gXCJAdngvZ3JhZGllbnRcIjtcbmltcG9ydCB7IHdpdGhTY3JlZW5TaXplIH0gZnJvbSBcIkB2eC9yZXNwb25zaXZlXCI7XG5pbXBvcnQgQ2hhcnQgZnJvbSBcIi4uL2NvbXBvbmVudHMvY2hhcnRcIjtcblxuZnVuY3Rpb24gQmFja2dyb3VuZCh7IHdpZHRoLCBoZWlnaHQgfSkge1xuICByZXR1cm4gKFxuICAgIDxzdmcgd2lkdGg9e3dpZHRofSBoZWlnaHQ9e2hlaWdodH0+XG4gICAgICA8TGluZWFyR3JhZGllbnQgaWQ9XCJmaWxsXCIgdmVydGljYWw9e2ZhbHNlfT5cbiAgICAgICAgPHN0b3Agc3RvcENvbG9yPVwiI2E5NDNlNFwiIG9mZnNldD1cIjAlXCIgLz5cbiAgICAgICAgPHN0b3Agc3RvcENvbG9yPVwiI2Y1NTk4OVwiIG9mZnNldD1cIjUwJVwiIC8+XG4gICAgICAgIDxzdG9wIHN0b3BDb2xvcj1cIiNmZmFmODRcIiBvZmZzZXQ9XCIxMDAlXCIgLz5cbiAgICAgIDwvTGluZWFyR3JhZGllbnQ+XG4gICAgICB7LyogPHJlY3QgZmlsbCBhdHRyaWJ1dGUgaXMgcG9pbnRpbmcgdG8gPExHIGlkPVwiZmlsbFwiICovfVxuICAgICAgPHJlY3Qgd2lkdGg9e3dpZHRofSBoZWlnaHQ9e2hlaWdodH0gZmlsbD1cInVybCgjZmlsbClcIiAvPlxuICAgIDwvc3ZnPlxuICApO1xufVxuXG5jbGFzcyBBcHAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAvLyBTZXQgdXAgc3RhdGVcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgLy8gU2V0IGRhdGEgdG8gZW1wdHkgb2JqZWN0XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGRhdGE6IHt9XG4gICAgfTtcbiAgfVxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBmZXRjaChcImh0dHBzOi8vYXBpLmNvaW5kZXNrLmNvbS92MS9icGkvaGlzdG9yaWNhbC9jbG9zZS5qc29uXCIpXG4gICAgICAudGhlbihyZXMgPT4gcmVzLmpzb24oKSlcbiAgICAgIC50aGVuKGpzb24gPT4ge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICBkYXRhOiBqc29uXG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgc2NyZWVuV2lkdGgsIHNjcmVlbkhlaWdodCB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCB7IGRhdGEgfSA9IHRoaXMuc3RhdGU7XG4gICAgaWYgKCFkYXRhLmJwaSkge1xuICAgICAgcmV0dXJuIDxkaXY+TG9hZGluZy4uLjwvZGl2PjtcbiAgICB9XG4gICAgY29uc3QgcHJpY2VzID0gT2JqZWN0LmtleXMoZGF0YS5icGkpLm1hcChrID0+IHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHRpbWU6IGssXG4gICAgICAgIHByaWNlOiBkYXRhLmJwaVtrXVxuICAgICAgfTtcbiAgICB9KTtcbiAgICAvKiogd2Ugd2FudCB0byBjdXJyZW50IHByaWNlIHdoaWNoIHdpbGwgYmUgdGhlIGxhc3QgaXRlbSByZXR1cm5lZCBmcm9tIG91ciBhcGkgY2FsbFxuICAgICAqXG4gICAgICovXG4gICAgY29uc3QgY3VycmVudFByaWNlID0gcHJpY2VzW3ByaWNlcy5sZW5ndGggLSAxXS5wcmljZTtcbiAgICAvLyBjb25zb2xlLmxvZyhjdXJyZW50UHJpY2UpO1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImFwcFwiPlxuICAgICAgICA8QmFja2dyb3VuZCB3aWR0aD17c2NyZWVuV2lkdGh9IGhlaWdodD17c2NyZWVuSGVpZ2h0fSAvPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNlbnRlclwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2hhcnRcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGl0bGViYXJcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aXRsZVwiPlxuICAgICAgICAgICAgICAgIDxkaXY+QklUQ09JTiBQUklDRTwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICA8c21hbGw+bGFzdCAzMCBkYXlzPC9zbWFsbD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2PntjdXJyZW50UHJpY2V9PC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICA8Q2hhcnQgZGF0YT17ZGF0YX0gLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImRpc2NsYWltZXJcIj57ZGF0YS5kaXNjbGFpbWVyfTwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAuYXBwLFxuICAgICAgICAgIC5jZW50ZXIge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgICByaWdodDogMDtcbiAgICAgICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgICAgIGZsZXg6IDE7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICBmb250LWZhbWlseTogYXJpYWw7XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgIH1cbiAgICAgICAgICAudGl0bGViYXIge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgICAgfVxuICAgICAgICAgIC50aXRsZSB7XG4gICAgICAgICAgICBwYWRkaW5nOiAxNXB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAuY29udGFpbmVyIHtcbiAgICAgICAgICAgIGZsZXg6IDE7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAuZGlzY2xhaW1lciB7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAzNXB4O1xuICAgICAgICAgICAgZm9udC1zaXplOiAxMXB4O1xuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgb3BhY2l0eTogMC40O1xuICAgICAgICAgIH1cbiAgICAgICAgICAuY2hhcnQge1xuICAgICAgICAgICAgd2lkdGg6IDYwMHB4O1xuICAgICAgICAgICAgaGVpZ2h0OiA0MDBweDtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMyNzI3M2Y7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFNjcmVlblNpemUoQXBwKTtcbiJdfQ== */\n/*@ sourceURL=pages/bitcoin.js?entry */"
      }));
    }
  }]);

  return App;
}(_react2.default.Component);

exports.default = (0, _responsive.withScreenSize)(App);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2JpdGNvaW4uanMiXSwibmFtZXMiOlsiTGluZWFyR3JhZGllbnQiLCJ3aXRoU2NyZWVuU2l6ZSIsIkNoYXJ0IiwiQmFja2dyb3VuZCIsIndpZHRoIiwiaGVpZ2h0IiwiQXBwIiwicHJvcHMiLCJzdGF0ZSIsImRhdGEiLCJmZXRjaCIsInRoZW4iLCJyZXMiLCJqc29uIiwic2V0U3RhdGUiLCJzY3JlZW5XaWR0aCIsInNjcmVlbkhlaWdodCIsImJwaSIsInByaWNlcyIsIm1hcCIsInRpbWUiLCJrIiwicHJpY2UiLCJjdXJyZW50UHJpY2UiLCJsZW5ndGgiLCJkaXNjbGFpbWVyIiwiUmVhY3QiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBUzs7QUFDVCxBQUFTOztBQUNULEFBQU8sQUFBVzs7Ozs7Ozs7O0FBRWxCLFNBQUEsQUFBUyxpQkFBOEI7TUFBakIsQUFBaUIsYUFBakIsQUFBaUI7TUFBVixBQUFVLGNBQVYsQUFBVSxBQUNyQzs7eUJBQ0UsY0FBQSxTQUFLLE9BQUwsQUFBWSxPQUFPLFFBQW5CLEFBQTJCO2dCQUEzQjtrQkFBQSxBQUNFO0FBREY7R0FBQSxrQkFDRSxBQUFDLDBDQUFlLElBQWhCLEFBQW1CLFFBQU8sVUFBMUIsQUFBb0M7Z0JBQXBDO2tCQUFBLEFBQ0U7QUFERjs2Q0FDUSxXQUFOLEFBQWdCLFdBQVUsUUFBMUIsQUFBaUM7Z0JBQWpDO2tCQURGLEFBQ0UsQUFDQTtBQURBOzhDQUNNLFdBQU4sQUFBZ0IsV0FBVSxRQUExQixBQUFpQztnQkFBakM7a0JBRkYsQUFFRSxBQUNBO0FBREE7OENBQ00sV0FBTixBQUFnQixXQUFVLFFBQTFCLEFBQWlDO2dCQUFqQztrQkFKSixBQUNFLEFBR0UsQUFHRjtBQUhFOytDQUdJLE9BQU4sQUFBYSxPQUFPLFFBQXBCLEFBQTRCLFFBQVEsTUFBcEMsQUFBeUM7Z0JBQXpDO2tCQVJKLEFBQ0UsQUFPRSxBQUdMO0FBSEs7Ozs7SSxBQUtBOytCQUNKOztBQUNBO2VBQUEsQUFBWSxPQUFPO3dDQUVqQjs7QUFGaUI7Z0lBQUEsQUFDWCxBQUVOOztVQUFBLEFBQUs7WUFIWSxBQUdqQixBQUFhLEFBQ0w7QUFESyxBQUNYO1dBRUg7Ozs7O3dDQUNtQjttQkFDbEI7O1lBQUEsQUFBTSx5REFBTixBQUNHLEtBQUssZUFBQTtlQUFPLElBQVAsQUFBTyxBQUFJO0FBRG5CLFNBQUEsQUFFRyxLQUFLLGdCQUFRLEFBQ1o7ZUFBQSxBQUFLO2dCQUFMLEFBQWMsQUFDTixBQUVUO0FBSGUsQUFDWjtBQUpOLEFBT0Q7Ozs7NkJBQ1E7bUJBQytCLEtBRC9CLEFBQ29DO1VBRHBDLEFBQ0MscUJBREQsQUFDQztVQURELEFBQ2Msc0JBRGQsQUFDYztVQURkLEFBRUMsT0FBUyxLQUZWLEFBRWUsTUFGZixBQUVDLEFBQ1I7O1VBQUksQ0FBQyxLQUFMLEFBQVUsS0FBSyxBQUNiOytCQUFPLGNBQUE7O3NCQUFBO3dCQUFBO0FBQUE7QUFBQSxTQUFBLEVBQVAsQUFBTyxBQUNSO0FBQ0Q7VUFBTSw2QkFBcUIsS0FBWixBQUFpQixLQUFqQixBQUFzQixJQUFJLGFBQUssQUFDNUM7O2dCQUFPLEFBQ0MsQUFDTjtpQkFBTyxLQUFBLEFBQUssSUFGZCxBQUFPLEFBRUUsQUFBUyxBQUVuQjtBQUpRLEFBQ0w7QUFGSixBQUFlLEFBTWYsT0FOZTtBQVNmOzs7VUFBTSxlQUFlLE9BQU8sT0FBQSxBQUFPLFNBQWQsQUFBdUIsR0FBNUMsQUFBK0MsQUFDL0M7QUFDQTs2QkFDRSxjQUFBOzRDQUFBLEFBQWU7O29CQUFmO3NCQUFBLEFBQ0U7QUFERjtBQUFBLE9BQUEsZ0NBQ0UsQUFBQyxjQUFXLE9BQVosQUFBbUIsYUFBYSxRQUFoQyxBQUF3QztvQkFBeEM7c0JBREYsQUFDRSxBQUNBO0FBREE7MEJBQ0EsY0FBQTs0Q0FBQSxBQUFlOztvQkFBZjtzQkFBQSxBQUNFO0FBREY7QUFBQSx5QkFDRSxjQUFBOzRDQUFBLEFBQWU7O29CQUFmO3NCQUFBLEFBQ0U7QUFERjtBQUFBLHlCQUNFLGNBQUE7NENBQUEsQUFBZTs7b0JBQWY7c0JBQUEsQUFDRTtBQURGO0FBQUEseUJBQ0UsY0FBQTs0Q0FBQSxBQUFlOztvQkFBZjtzQkFBQSxBQUNFO0FBREY7QUFBQSx5QkFDRSxjQUFBO21CQUFBOztvQkFBQTtzQkFBQTtBQUFBO0FBQUEsU0FERixBQUNFLEFBQ0Esa0NBQUEsY0FBQTttQkFBQTs7b0JBQUE7c0JBQUEsQUFDRTtBQURGO0FBQUEseUJBQ0UsY0FBQTttQkFBQTs7b0JBQUE7c0JBQUE7QUFBQTtBQUFBLFNBSEosQUFFRSxBQUNFLEFBRUYsa0NBQUEsY0FBQTttQkFBQTs7b0JBQUE7c0JBQUEsQUFBTTtBQUFOO0FBQUEsU0FQTixBQUNFLEFBQ0UsQUFLRSxBQUdKLGlDQUFBLGNBQUE7NENBQUEsQUFBZTs7b0JBQWY7c0JBQUEsQUFDRTtBQURGO0FBQUEseUJBQ0UsQUFBQyxpQ0FBTSxNQUFQLEFBQWE7b0JBQWI7c0JBWk4sQUFDRSxBQVVFLEFBQ0UsQUFHSjtBQUhJOzRCQUdKLGNBQUE7NENBQUEsQUFBYTs7b0JBQWI7c0JBQUEsQUFBMkI7QUFBM0I7QUFBQSxjQWpCSixBQUVFLEFBZUUsQUFBZ0M7aUJBakJwQzthQURGLEFBQ0UsQUErREg7QUEvREc7Ozs7O0VBcENZLGdCLEFBQU0sQUFzR3hCOztrQkFBZSxnQ0FBZixBQUFlLEFBQWUiLCJmaWxlIjoiYml0Y29pbi5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiIvVXNlcnMvcHJpc2NfMDAwL2NvZGUvQ0FDREVWL3Z4LXRlc3QifQ==