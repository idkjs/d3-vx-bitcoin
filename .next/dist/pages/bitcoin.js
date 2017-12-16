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
      // console.log(currentPrice);
      return _react2.default.createElement("div", {
        className: "jsx-1464507090" + " " + "app",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        }
      }, _react2.default.createElement(Background, { width: screenWidth, height: screenHeight, __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        }
      }), _react2.default.createElement("div", {
        className: "jsx-1464507090" + " " + "center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        }
      }, _react2.default.createElement("div", {
        className: "jsx-1464507090" + " " + "chart",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        }
      }, _react2.default.createElement("div", {
        className: "jsx-1464507090" + " " + "titlebar",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        }
      }, _react2.default.createElement("div", {
        className: "jsx-1464507090" + " " + "title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        }
      }, _react2.default.createElement("div", {
        className: "jsx-1464507090",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        }
      }, "BITCOIN PRICE"), _react2.default.createElement("div", {
        className: "jsx-1464507090",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        }
      }, _react2.default.createElement("small", {
        className: "jsx-1464507090",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        }
      }, "last 30 days"))), _react2.default.createElement("div", {
        className: "jsx-1464507090" + " " + "spacer",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        }
      }), _react2.default.createElement("div", {
        className: "jsx-1464507090",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        }
      }, _react2.default.createElement("div", {
        className: "jsx-1464507090",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        }
      }, (0, _formatPrice2.default)(currentPrice)))), _react2.default.createElement("div", {
        className: "jsx-1464507090" + " " + "container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        }
      }, _react2.default.createElement(_chart2.default, { data: data, __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        }
      }))), _react2.default.createElement("p", {
        className: "jsx-1464507090" + " " + "disclaimer",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        }
      }, data.disclaimer)), _react2.default.createElement(_style2.default, {
        styleId: "1464507090",
        css: ".app.jsx-1464507090,.center.jsx-1464507090{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;position:absolute;top:0;left:0;right:0;bottom:0;-webkit-flex:1;-ms-flex:1;flex:1;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;font-family:arial;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}.spacer.jsx-1464507090{-webkit-flex:1;-ms-flex:1;flex:1;}.titlebar.jsx-1464507090{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding:15px;}.container.jsx-1464507090{-webkit-flex:1;-ms-flex:1;flex:1;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}.disclaimer.jsx-1464507090{margin-top:35px;font-size:11px;color:white;opacity:0.4;}.chart.jsx-1464507090{width:600px;height:400px;background-color:#27273f;border-radius:8px;color:white;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2JpdGNvaW4uanM/ZW50cnkiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBNkVvQixBQUkwQixBQWFOLEFBR00sQUFRTixBQUlTLEFBTUosWUFDQyxJQU5FLFNBT1UsTUFOYixFQWhCZCxBQVdlLFVBTUQsT0FNTSxLQUxwQixhQU1jLE1BckNNLEFBZ0JDLE1Bc0JOLFlBckNQLE1BQ0MsT0FDQyxFQXNCVixNQXJCVyxTQUNGLHFCQVlZLFdBc0JHLENBakNDLDZFQWtDekIsSUF0QmUsYUFDZixLQVpxQiw2RkFDRCxrQkFDSSw4RUFDeEIiLCJmaWxlIjoicGFnZXMvYml0Y29pbi5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiIvVXNlcnMvcHJpc2NfMDAwL2NvZGUvQ0FDREVWL3Z4LXRlc3QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBMaW5lYXJHcmFkaWVudCB9IGZyb20gXCJAdngvZ3JhZGllbnRcIjtcbmltcG9ydCB7IHdpdGhTY3JlZW5TaXplIH0gZnJvbSBcIkB2eC9yZXNwb25zaXZlXCI7XG5pbXBvcnQgQ2hhcnQgZnJvbSBcIi4uL2NvbXBvbmVudHMvY2hhcnRcIjtcbmltcG9ydCBmb3JtYXRQcmljZSBmcm9tIFwiLi4vdXRpbHMvZm9ybWF0UHJpY2VcIjtcblxuZnVuY3Rpb24gQmFja2dyb3VuZCh7IHdpZHRoLCBoZWlnaHQgfSkge1xuICByZXR1cm4gKFxuICAgIDxzdmcgd2lkdGg9e3dpZHRofSBoZWlnaHQ9e2hlaWdodH0+XG4gICAgICA8TGluZWFyR3JhZGllbnQgaWQ9XCJmaWxsXCIgdmVydGljYWw9e2ZhbHNlfT5cbiAgICAgICAgPHN0b3Agc3RvcENvbG9yPVwiI2E5NDNlNFwiIG9mZnNldD1cIjAlXCIgLz5cbiAgICAgICAgPHN0b3Agc3RvcENvbG9yPVwiI2Y1NTk4OVwiIG9mZnNldD1cIjUwJVwiIC8+XG4gICAgICAgIDxzdG9wIHN0b3BDb2xvcj1cIiNmZmFmODRcIiBvZmZzZXQ9XCIxMDAlXCIgLz5cbiAgICAgIDwvTGluZWFyR3JhZGllbnQ+XG4gICAgICB7LyogPHJlY3QgZmlsbCBhdHRyaWJ1dGUgaXMgcG9pbnRpbmcgdG8gPExHIGlkPVwiZmlsbFwiICovfVxuICAgICAgPHJlY3Qgd2lkdGg9e3dpZHRofSBoZWlnaHQ9e2hlaWdodH0gZmlsbD1cInVybCgjZmlsbClcIiAvPlxuICAgIDwvc3ZnPlxuICApO1xufVxuXG5jbGFzcyBBcHAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAvLyBTZXQgdXAgc3RhdGVcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgLy8gU2V0IGRhdGEgdG8gZW1wdHkgb2JqZWN0XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGRhdGE6IHt9XG4gICAgfTtcbiAgfVxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBmZXRjaChcImh0dHBzOi8vYXBpLmNvaW5kZXNrLmNvbS92MS9icGkvaGlzdG9yaWNhbC9jbG9zZS5qc29uXCIpXG4gICAgICAudGhlbihyZXMgPT4gcmVzLmpzb24oKSlcbiAgICAgIC50aGVuKGpzb24gPT4ge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICBkYXRhOiBqc29uXG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgc2NyZWVuV2lkdGgsIHNjcmVlbkhlaWdodCB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCB7IGRhdGEgfSA9IHRoaXMuc3RhdGU7XG4gICAgaWYgKCFkYXRhLmJwaSkge1xuICAgICAgcmV0dXJuIDxkaXY+TG9hZGluZy4uLjwvZGl2PjtcbiAgICB9XG4gICAgY29uc3QgcHJpY2VzID0gT2JqZWN0LmtleXMoZGF0YS5icGkpLm1hcChrID0+IHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHRpbWU6IGssXG4gICAgICAgIHByaWNlOiBkYXRhLmJwaVtrXVxuICAgICAgfTtcbiAgICB9KTtcbiAgICAvKiogd2Ugd2FudCB0byBjdXJyZW50IHByaWNlIHdoaWNoIHdpbGwgYmUgdGhlIGxhc3QgaXRlbSByZXR1cm5lZCBmcm9tIG91ciBhcGkgY2FsbFxuICAgICAqXG4gICAgICovXG4gICAgY29uc3QgY3VycmVudFByaWNlID0gcHJpY2VzW3ByaWNlcy5sZW5ndGggLSAxXS5wcmljZTtcbiAgICAvLyBjb25zb2xlLmxvZyhjdXJyZW50UHJpY2UpO1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImFwcFwiPlxuICAgICAgICA8QmFja2dyb3VuZCB3aWR0aD17c2NyZWVuV2lkdGh9IGhlaWdodD17c2NyZWVuSGVpZ2h0fSAvPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNlbnRlclwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2hhcnRcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGl0bGViYXJcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aXRsZVwiPlxuICAgICAgICAgICAgICAgIDxkaXY+QklUQ09JTiBQUklDRTwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICA8c21hbGw+bGFzdCAzMCBkYXlzPC9zbWFsbD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3BhY2VyXCIgLz5cbiAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8ZGl2Pntmb3JtYXRQcmljZShjdXJyZW50UHJpY2UpfTwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgICAgICAgPENoYXJ0IGRhdGE9e2RhdGF9IC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJkaXNjbGFpbWVyXCI+e2RhdGEuZGlzY2xhaW1lcn08L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgLmFwcCxcbiAgICAgICAgICAuY2VudGVyIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgICAgICBib3R0b206IDA7XG4gICAgICAgICAgICBmbGV4OiAxO1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6IGFyaWFsO1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnNwYWNlciB7XG4gICAgICAgICAgICBmbGV4OiAxO1xuICAgICAgICAgIH1cbiAgICAgICAgICAudGl0bGViYXIge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgcGFkZGluZzogMTVweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnRpdGxlIHtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmNvbnRhaW5lciB7XG4gICAgICAgICAgICBmbGV4OiAxO1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmRpc2NsYWltZXIge1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogMzVweDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTFweDtcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgIG9wYWNpdHk6IDAuNDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmNoYXJ0IHtcbiAgICAgICAgICAgIHdpZHRoOiA2MDBweDtcbiAgICAgICAgICAgIGhlaWdodDogNDAwcHg7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjcyNzNmO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTY3JlZW5TaXplKEFwcCk7XG4iXX0= */\n/*@ sourceURL=pages/bitcoin.js?entry */"
      }));
    }
  }]);

  return App;
}(_react2.default.Component);

exports.default = (0, _responsive.withScreenSize)(App);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2JpdGNvaW4uanMiXSwibmFtZXMiOlsiTGluZWFyR3JhZGllbnQiLCJ3aXRoU2NyZWVuU2l6ZSIsIkNoYXJ0IiwiZm9ybWF0UHJpY2UiLCJCYWNrZ3JvdW5kIiwid2lkdGgiLCJoZWlnaHQiLCJBcHAiLCJwcm9wcyIsInN0YXRlIiwiZGF0YSIsImZldGNoIiwidGhlbiIsInJlcyIsImpzb24iLCJzZXRTdGF0ZSIsInNjcmVlbldpZHRoIiwic2NyZWVuSGVpZ2h0IiwiYnBpIiwicHJpY2VzIiwibWFwIiwidGltZSIsImsiLCJwcmljZSIsImN1cnJlbnRQcmljZSIsImxlbmd0aCIsImRpc2NsYWltZXIiLCJSZWFjdCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFTOztBQUNULEFBQVM7O0FBQ1QsQUFBTyxBQUFXOzs7O0FBQ2xCLEFBQU8sQUFBaUI7Ozs7Ozs7OztBQUV4QixTQUFBLEFBQVMsaUJBQThCO01BQWpCLEFBQWlCLGFBQWpCLEFBQWlCO01BQVYsQUFBVSxjQUFWLEFBQVUsQUFDckM7O3lCQUNFLGNBQUEsU0FBSyxPQUFMLEFBQVksT0FBTyxRQUFuQixBQUEyQjtnQkFBM0I7a0JBQUEsQUFDRTtBQURGO0dBQUEsa0JBQ0UsQUFBQywwQ0FBZSxJQUFoQixBQUFtQixRQUFPLFVBQTFCLEFBQW9DO2dCQUFwQztrQkFBQSxBQUNFO0FBREY7NkNBQ1EsV0FBTixBQUFnQixXQUFVLFFBQTFCLEFBQWlDO2dCQUFqQztrQkFERixBQUNFLEFBQ0E7QUFEQTs4Q0FDTSxXQUFOLEFBQWdCLFdBQVUsUUFBMUIsQUFBaUM7Z0JBQWpDO2tCQUZGLEFBRUUsQUFDQTtBQURBOzhDQUNNLFdBQU4sQUFBZ0IsV0FBVSxRQUExQixBQUFpQztnQkFBakM7a0JBSkosQUFDRSxBQUdFLEFBR0Y7QUFIRTsrQ0FHSSxPQUFOLEFBQWEsT0FBTyxRQUFwQixBQUE0QixRQUFRLE1BQXBDLEFBQXlDO2dCQUF6QztrQkFSSixBQUNFLEFBT0UsQUFHTDtBQUhLOzs7O0lBS0EsQTsrQkFDSjs7QUFDQTtlQUFBLEFBQVksT0FBTzt3Q0FFakI7O0FBRmlCO2dJQUFBLEFBQ1gsQUFFTjs7VUFBQSxBQUFLO1lBSFksQUFHakIsQUFBYSxBQUNMO0FBREssQUFDWDtXQUVIOzs7Ozt3Q0FDbUI7bUJBQ2xCOztZQUFBLEFBQU0seURBQU4sQUFDRyxLQUFLLGVBQUE7ZUFBTyxJQUFQLEFBQU8sQUFBSTtBQURuQixTQUFBLEFBRUcsS0FBSyxnQkFBUSxBQUNaO2VBQUEsQUFBSztnQkFBTCxBQUFjLEFBQ04sQUFFVDtBQUhlLEFBQ1o7QUFKTixBQU9EOzs7OzZCQUNRO21CQUMrQixLQUQvQixBQUNvQztVQURwQyxBQUNDLHFCQURELEFBQ0M7VUFERCxBQUNjLHNCQURkLEFBQ2M7VUFEZCxBQUVDLE9BQVMsS0FGVixBQUVlLE1BRmYsQUFFQyxBQUNSOztVQUFJLENBQUMsS0FBTCxBQUFVLEtBQUssQUFDYjsrQkFBTyxjQUFBOztzQkFBQTt3QkFBQTtBQUFBO0FBQUEsU0FBQSxFQUFQLEFBQU8sQUFDUjtBQUNEO1VBQU0sNkJBQXFCLEtBQVosQUFBaUIsS0FBakIsQUFBc0IsSUFBSSxhQUFLLEFBQzVDOztnQkFBTyxBQUNDLEFBQ047aUJBQU8sS0FBQSxBQUFLLElBRmQsQUFBTyxBQUVFLEFBQVMsQUFFbkI7QUFKUSxBQUNMO0FBRkosQUFBZSxBQU1mLE9BTmU7QUFTZjs7O1VBQU0sZUFBZSxPQUFPLE9BQUEsQUFBTyxTQUFkLEFBQXVCLEdBQTVDLEFBQStDLEFBQy9DO0FBQ0E7NkJBQ0UsY0FBQTs0Q0FBQSxBQUFlOztvQkFBZjtzQkFBQSxBQUNFO0FBREY7QUFBQSxPQUFBLGdDQUNFLEFBQUMsY0FBVyxPQUFaLEFBQW1CLGFBQWEsUUFBaEMsQUFBd0M7b0JBQXhDO3NCQURGLEFBQ0UsQUFDQTtBQURBOzBCQUNBLGNBQUE7NENBQUEsQUFBZTs7b0JBQWY7c0JBQUEsQUFDRTtBQURGO0FBQUEseUJBQ0UsY0FBQTs0Q0FBQSxBQUFlOztvQkFBZjtzQkFBQSxBQUNFO0FBREY7QUFBQSx5QkFDRSxjQUFBOzRDQUFBLEFBQWU7O29CQUFmO3NCQUFBLEFBQ0U7QUFERjtBQUFBLHlCQUNFLGNBQUE7NENBQUEsQUFBZTs7b0JBQWY7c0JBQUEsQUFDRTtBQURGO0FBQUEseUJBQ0UsY0FBQTttQkFBQTs7b0JBQUE7c0JBQUE7QUFBQTtBQUFBLFNBREYsQUFDRSxBQUNBLGtDQUFBLGNBQUE7bUJBQUE7O29CQUFBO3NCQUFBLEFBQ0U7QUFERjtBQUFBLHlCQUNFLGNBQUE7bUJBQUE7O29CQUFBO3NCQUFBO0FBQUE7QUFBQSxTQUpOLEFBQ0UsQUFFRSxBQUNFLEFBR0o7NENBQUEsQUFBZTs7b0JBQWY7c0JBUEYsQUFPRSxBQUNBO0FBREE7QUFBQSwwQkFDQSxjQUFBO21CQUFBOztvQkFBQTtzQkFBQSxBQUNFO0FBREY7QUFBQSx5QkFDRSxjQUFBO21CQUFBOztvQkFBQTtzQkFBQSxBQUFNO0FBQU47QUFBQSxvQ0FWTixBQUNFLEFBUUUsQUFDRSxBQUFNLEFBQVksQUFHdEIsa0NBQUEsY0FBQTs0Q0FBQSxBQUFlOztvQkFBZjtzQkFBQSxBQUNFO0FBREY7QUFBQSx5QkFDRSxBQUFDLGlDQUFNLE1BQVAsQUFBYTtvQkFBYjtzQkFmTixBQUNFLEFBYUUsQUFDRSxBQUdKO0FBSEk7NEJBR0osY0FBQTs0Q0FBQSxBQUFhOztvQkFBYjtzQkFBQSxBQUEyQjtBQUEzQjtBQUFBLGNBcEJKLEFBRUUsQUFrQkUsQUFBZ0M7aUJBcEJwQzthQURGLEFBQ0UsQUFzRUg7QUF0RUc7Ozs7O0VBcENZLGdCLEFBQU0sQUE2R3hCOztrQkFBZSxnQ0FBZixBQUFlLEFBQWUiLCJmaWxlIjoiYml0Y29pbi5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiIvVXNlcnMvcHJpc2NfMDAwL2NvZGUvQ0FDREVWL3Z4LXRlc3QifQ==