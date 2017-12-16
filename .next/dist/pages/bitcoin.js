'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _style = require('styled-jsx/style.js');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _gradient = require('@vx/gradient');

var _responsive = require('@vx/responsive');

var _chart = require('../components/chart');

var _chart2 = _interopRequireDefault(_chart);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/prisc_000/code/CACDEV/vx-test/pages/bitcoin.js?entry';


function Background(_ref) {
  var width = _ref.width,
      height = _ref.height;

  return _react2.default.createElement('svg', { width: width, height: height, __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }, _react2.default.createElement(_gradient.LinearGradient, { id: 'fill', vertical: false, __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, _react2.default.createElement('stop', { stopColor: '#a943e4', offset: '0%', __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }), _react2.default.createElement('stop', { stopColor: '#f55989', offset: '50%', __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }), _react2.default.createElement('stop', { stopColor: '#ffaf84', offset: '100%', __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  })), _react2.default.createElement('rect', { width: width, height: height, fill: 'url(#fill)', __source: {
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
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      fetch('https://api.coindesk.com/v1/bpi/historical/close.json').then(function (res) {
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

      if (!data.bpi) {
        return _react2.default.createElement('div', {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 41
          }
        }, 'Loading...');
      }
      var prices = (0, _keys2.default)(data).map(function (k) {
        return {
          time: k,
          price: data[k]
        };
      });
      console.log(prices);
      return _react2.default.createElement('div', {
        className: 'jsx-2797844293' + ' ' + 'app',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        }
      }, _react2.default.createElement(Background, { width: screenWidth, height: screenHeight, __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        }
      }), _react2.default.createElement('div', {
        className: 'jsx-2797844293' + ' ' + 'center',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        }
      }, _react2.default.createElement('div', {
        className: 'jsx-2797844293' + ' ' + 'chart',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        }
      }, _react2.default.createElement('div', {
        className: 'jsx-2797844293' + ' ' + 'title',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        }
      }, 'CAC40 VS NASDAQ'), _react2.default.createElement('div', {
        className: 'jsx-2797844293' + ' ' + 'container',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        }
      }, _react2.default.createElement(_chart2.default, { data: data, __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        }
      }))), _react2.default.createElement('p', {
        className: 'jsx-2797844293' + ' ' + 'disclaimer',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        }
      }, data.disclaimer)), _react2.default.createElement(_style2.default, {
        styleId: '2797844293',
        css: '.app.jsx-2797844293,.center.jsx-2797844293{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;position:absolute;top:0;left:0;right:0;bottom:0;-webkit-flex:1;-ms-flex:1;flex:1;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;font-family:arial;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}.title.jsx-2797844293{padding:15px;}.container.jsx-2797844293{-webkit-flex:1;-ms-flex:1;flex:1;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}.disclaimer.jsx-2797844293{margin-top:35px;font-size:11px;color:white;opacity:0.4;}.chart.jsx-2797844293{width:600px;height:400px;background-color:#27273f;border-radius:8px;color:white;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2JpdGNvaW4uanM/ZW50cnkiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBaUV3QixBQUk2QixBQWFDLEFBR1AsQUFJVSxBQU1KLFlBQ0MsQ0FiakIsR0FPbUIsU0FPVSxNQU5iLEVBTEEsVUFNQSxPQU1NLEtBTHBCLGFBTWMsTUE3Qk0sTUE4Qk4sWUE3QlAsTUFDQyxPQUNDLEVBY1gsTUFiWSxTQUNGLGdDQTBCZ0IsQ0F6QkMsNkVBMkIzQixzQkExQnVCLDZGQUNELGtCQUNJLDhFQUMxQiIsImZpbGUiOiJwYWdlcy9iaXRjb2luLmpzP2VudHJ5Iiwic291cmNlUm9vdCI6Ii9Vc2Vycy9wcmlzY18wMDAvY29kZS9DQUNERVYvdngtdGVzdCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7TGluZWFyR3JhZGllbnR9IGZyb20gJ0B2eC9ncmFkaWVudCc7XG5pbXBvcnQge3dpdGhTY3JlZW5TaXplfSBmcm9tICdAdngvcmVzcG9uc2l2ZSc7XG5pbXBvcnQgQ2hhcnQgZnJvbSAnLi4vY29tcG9uZW50cy9jaGFydCc7XG5cbmZ1bmN0aW9uIEJhY2tncm91bmQoe3dpZHRoLCBoZWlnaHR9KSB7XG5cdHJldHVybiAoXG4gICAgICAgIDxzdmcgd2lkdGg9e3dpZHRofSBoZWlnaHQ9e2hlaWdodH0+XG4gICAgICAgICAgICA8TGluZWFyR3JhZGllbnQgaWQ9XCJmaWxsXCIgdmVydGljYWw9e2ZhbHNlfT5cbiAgICAgICAgICAgICAgICA8c3RvcCBzdG9wQ29sb3I9XCIjYTk0M2U0XCIgb2Zmc2V0PVwiMCVcIiAvPlxuICAgICAgICAgICAgICAgIDxzdG9wIHN0b3BDb2xvcj1cIiNmNTU5ODlcIiBvZmZzZXQ9XCI1MCVcIiAvPlxuICAgICAgICAgICAgICAgIDxzdG9wIHN0b3BDb2xvcj1cIiNmZmFmODRcIiBvZmZzZXQ9XCIxMDAlXCIgLz5cbiAgICAgICAgICAgIDwvTGluZWFyR3JhZGllbnQ+XG4gICAgICAgICAgICB7LyogPHJlY3QgZmlsbCBhdHRyaWJ1dGUgaXMgcG9pbnRpbmcgdG8gPExHIGlkPVwiZmlsbFwiICovfVxuICAgICAgICA8cmVjdCB3aWR0aD17d2lkdGh9IGhlaWdodD17aGVpZ2h0fSBmaWxsPVwidXJsKCNmaWxsKVwiLz5cbiAgICAgICAgPC9zdmc+XG5cdCk7XG59XG5cbmNsYXNzIEFwcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgLy8gU2V0IHVwIHN0YXRlXG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XG5cdFx0c3VwZXIocHJvcHMpO1xuICAgICAgICAvLyBTZXQgZGF0YSB0byBlbXB0eSBvYmplY3Rcblx0XHR0aGlzLnN0YXRlID0ge1xuXHRcdFx0ZGF0YToge31cblx0XHR9O1xuXHR9XG5cdGNvbXBvbmVudERpZE1vdW50KCkge1xuXHRcdGZldGNoKCdodHRwczovL2FwaS5jb2luZGVzay5jb20vdjEvYnBpL2hpc3RvcmljYWwvY2xvc2UuanNvbicpXG4gICAgICAgIC50aGVuKHJlcyA9PiByZXMuanNvbigpKVxuICAgICAgICAudGhlbihqc29uID0+IHtcblx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0ZGF0YToganNvblxuXHR9KTtcbn0pO1xuXHR9XG5cdHJlbmRlcigpIHtcblx0XHRjb25zdCB7c2NyZWVuV2lkdGgsIHNjcmVlbkhlaWdodH0gPSB0aGlzLnByb3BzO1xuXHRcdGNvbnN0IHtkYXRhfSA9IHRoaXMuc3RhdGU7XG5cdFx0aWYgKCFkYXRhLmJwaSkge1xuXHRcdFx0cmV0dXJuIDxkaXY+TG9hZGluZy4uLjwvZGl2Pjtcblx0XHR9XG5cdFx0Y29uc3QgcHJpY2VzID0gT2JqZWN0LmtleXMoZGF0YSkubWFwKGsgPT4ge1xuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0dGltZTogayxcblx0XHRcdFx0cHJpY2U6IGRhdGFba11cblx0XHRcdH07XG5cdFx0fSk7XG5cdFx0Y29uc29sZS5sb2cocHJpY2VzKTtcblx0XHRyZXR1cm4gKFxuXHRcdDxkaXYgY2xhc3NOYW1lPVwiYXBwXCI+XG4gICAgICAgICAgICA8QmFja2dyb3VuZCB3aWR0aD17c2NyZWVuV2lkdGh9IGhlaWdodD17c2NyZWVuSGVpZ2h0fSAvPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjZW50ZXJcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNoYXJ0XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGl0bGVcIj5cbiAgICAgICAgICAgICAgICAgICAgQ0FDNDAgVlMgTkFTREFRXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICA8Q2hhcnQgZGF0YT17ZGF0YX0gLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZGlzY2xhaW1lclwiPlxuICAgICAgICAgICAge2RhdGEuZGlzY2xhaW1lcn1cbjwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgLmFwcCxcbiAgICAgICAgICAgIC5jZW50ZXIge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6ZmxleDtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgdG9wOjA7XG4gICAgICAgICAgICAgICAgbGVmdDowO1xuICAgICAgICAgICAgICAgIHJpZ2h0OjA7XG4gICAgICAgICAgICAgICAgYm90dG9tOjA7XG4gICAgICAgICAgICAgICAgZmxleDoxO1xuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IGFyaWFsO1xuICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAudGl0bGUge1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDE1cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuY29udGFpbmVyIHtcbiAgICAgICAgICAgICAgICBmbGV4OjE7XG4gICAgICAgICAgICAgICAgZGlzcGxheTpmbGV4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmRpc2NsYWltZXIge1xuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDM1cHg7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMXB4O1xuICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAwLjQ7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5jaGFydCB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDYwMHB4O1xuICAgICAgICAgICAgICAgIGhlaWdodDogNDAwcHg7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzI3MjczZjtcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6ZmxleDtcbiAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXG4gICAgICAgICAgICB9ICAgICAgIFxuICAgICAgICAgICAgYH08L3N0eWxlPlxuXG4gICAgICAgIDwvZGl2PlxuXHRcdCk7XG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFNjcmVlblNpemUoQXBwKTtcbiJdfQ== */\n/*@ sourceURL=pages/bitcoin.js?entry */'
      }));
    }
  }]);

  return App;
}(_react2.default.Component);

exports.default = (0, _responsive.withScreenSize)(App);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2JpdGNvaW4uanMiXSwibmFtZXMiOlsiTGluZWFyR3JhZGllbnQiLCJ3aXRoU2NyZWVuU2l6ZSIsIkNoYXJ0IiwiQmFja2dyb3VuZCIsIndpZHRoIiwiaGVpZ2h0IiwiQXBwIiwicHJvcHMiLCJzdGF0ZSIsImRhdGEiLCJmZXRjaCIsInRoZW4iLCJyZXMiLCJqc29uIiwic2V0U3RhdGUiLCJzY3JlZW5XaWR0aCIsInNjcmVlbkhlaWdodCIsImJwaSIsInByaWNlcyIsIm1hcCIsInRpbWUiLCJrIiwicHJpY2UiLCJjb25zb2xlIiwibG9nIiwiZGlzY2xhaW1lciIsIlJlYWN0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQVE7O0FBQ1IsQUFBUTs7QUFDUixBQUFPLEFBQVc7Ozs7Ozs7OztBQUVsQixTQUFBLEFBQVMsaUJBQTRCO01BQWhCLEFBQWdCLGFBQWhCLEFBQWdCO01BQVQsQUFBUyxjQUFULEFBQVMsQUFDcEM7O3lCQUNPLGNBQUEsU0FBSyxPQUFMLEFBQVksT0FBTyxRQUFuQixBQUEyQjtnQkFBM0I7a0JBQUEsQUFDSTtBQURKO0dBQUEsa0JBQ0ksQUFBQywwQ0FBZSxJQUFoQixBQUFtQixRQUFPLFVBQTFCLEFBQW9DO2dCQUFwQztrQkFBQSxBQUNJO0FBREo7NkNBQ1UsV0FBTixBQUFnQixXQUFVLFFBQTFCLEFBQWlDO2dCQUFqQztrQkFESixBQUNJLEFBQ0E7QUFEQTs4Q0FDTSxXQUFOLEFBQWdCLFdBQVUsUUFBMUIsQUFBaUM7Z0JBQWpDO2tCQUZKLEFBRUksQUFDQTtBQURBOzhDQUNNLFdBQU4sQUFBZ0IsV0FBVSxRQUExQixBQUFpQztnQkFBakM7a0JBSlIsQUFDSSxBQUdJLEFBR1I7QUFIUTsrQ0FHRixPQUFOLEFBQWEsT0FBTyxRQUFwQixBQUE0QixRQUFRLE1BQXBDLEFBQXlDO2dCQUF6QztrQkFSUCxBQUNPLEFBT0EsQUFHUDtBQUhPOzs7O0lBS0YsQTsrQkFDRjs7QUFDSDtlQUFBLEFBQVksT0FBTzt3Q0FFWjs7QUFGWTtnSUFBQSxBQUNaLEFBRU47O1VBQUEsQUFBSztZQUhhLEFBR2xCLEFBQWEsQUFDTjtBQURNLEFBQ1o7V0FFRDs7Ozs7d0NBQ21CO21CQUNuQjs7WUFBQSxBQUFNLHlEQUFOLEFBQ08sS0FBSyxlQUFBO2VBQU8sSUFBUCxBQUFPLEFBQUk7QUFEdkIsU0FBQSxBQUVPLEtBQUssZ0JBQVEsQUFDckI7ZUFBQSxBQUFLO2dCQUFMLEFBQWMsQUFDUCxBQUVQO0FBSGMsQUFDYjtBQUpBLEFBT0E7Ozs7NkJBQ1E7bUJBQzRCLEtBRDVCLEFBQ2lDO1VBRGpDLEFBQ0QscUJBREMsQUFDRDtVQURDLEFBQ1ksc0JBRFosQUFDWTtVQURaLEFBRUQsT0FBUSxLQUZQLEFBRVksTUFGWixBQUVELEFBQ1A7O1VBQUksQ0FBQyxLQUFMLEFBQVUsS0FBSyxBQUNkOytCQUFPLGNBQUE7O3NCQUFBO3dCQUFBO0FBQUE7QUFBQSxTQUFBLEVBQVAsQUFBTyxBQUNQO0FBQ0Q7VUFBTSw2QkFBUyxBQUFZLE1BQVosQUFBa0IsSUFBSSxhQUFLLEFBQ3pDOztnQkFBTyxBQUNBLEFBQ047aUJBQU8sS0FGUixBQUFPLEFBRUMsQUFBSyxBQUViO0FBSk8sQUFDTjtBQUZGLEFBQWUsQUFNZixPQU5lO2NBTWYsQUFBUSxJQUFSLEFBQVksQUFDWjs2QkFDQSxjQUFBOzRDQUFBLEFBQWU7O29CQUFmO3NCQUFBLEFBQ1U7QUFEVjtBQUFBLE9BQUEsZ0NBQ1UsQUFBQyxjQUFXLE9BQVosQUFBbUIsYUFBYSxRQUFoQyxBQUF3QztvQkFBeEM7c0JBRFYsQUFDVSxBQUNBO0FBREE7MEJBQ0EsY0FBQTs0Q0FBQSxBQUFlOztvQkFBZjtzQkFBQSxBQUNJO0FBREo7QUFBQSx5QkFDSSxjQUFBOzRDQUFBLEFBQWU7O29CQUFmO3NCQUFBLEFBQ0k7QUFESjtBQUFBLHlCQUNJLGNBQUE7NENBQUEsQUFBZTs7b0JBQWY7c0JBQUE7QUFBQTtBQUFBLFNBREosQUFDSSxBQUdBLG9DQUFBLGNBQUE7NENBQUEsQUFBZTs7b0JBQWY7c0JBQUEsQUFDQTtBQURBO0FBQUEseUJBQ0EsQUFBQyxpQ0FBTSxNQUFQLEFBQWE7b0JBQWI7c0JBTlIsQUFDSSxBQUlJLEFBQ0EsQUFHSjtBQUhJOzRCQUdKLGNBQUE7NENBQUEsQUFBYTs7b0JBQWI7c0JBQUEsQUFDSDtBQURHO0FBQUEsY0FYZCxBQUVVLEFBU0ksQUFDRTtpQkFaaEI7YUFEQSxBQUNBLEFBeURBO0FBekRBOzs7OztFQWhDZ0IsZ0JBQU0sQSxBQTRGeEI7O2tCQUFlLGdDQUFmLEFBQWUsQUFBZSIsImZpbGUiOiJiaXRjb2luLmpzP2VudHJ5Iiwic291cmNlUm9vdCI6Ii9Vc2Vycy9wcmlzY18wMDAvY29kZS9DQUNERVYvdngtdGVzdCJ9