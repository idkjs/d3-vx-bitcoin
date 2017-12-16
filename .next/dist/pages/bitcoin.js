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

var _formatPrice = require('../utils/formatPrice');

var _formatPrice2 = _interopRequireDefault(_formatPrice);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/prisc_000/code/CACDEV/vx-test/pages/bitcoin.js?entry';


function Background(_ref) {
  var width = _ref.width,
      height = _ref.height;

  return _react2.default.createElement('svg', { width: width, height: height, __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, _react2.default.createElement(_gradient.LinearGradient, { id: 'fill', vertical: false, __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }, _react2.default.createElement('stop', { stopColor: '#a943e4', offset: '0%', __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }), _react2.default.createElement('stop', { stopColor: '#f55989', offset: '50%', __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }), _react2.default.createElement('stop', { stopColor: '#ffaf84', offset: '100%', __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  })), _react2.default.createElement('rect', { width: width, height: height, fill: 'url(#fill)', __source: {
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
            lineNumber: 42
          }
        }, 'Loading...');
      }
      var prices = (0, _keys2.default)(data.bpi).map(function (k) {
        return {
          time: k,
          price: data.bpi[k]
        };
      });
      /** We want to current price which will be the last item returned from our api call
       *
       */
      var currentPrice = prices[prices.length - 1].price;
      // Var to get difference in current/last price. def firstPrice - subtract from current
      var firstPrice = prices[0].price;
      var diffPrice = currentPrice - firstPrice;
      // Boolean to check if that price has increased or decreased
      var hasIncreased = diffPrice > 0;
      // Console.log(currentPrice);
      return _react2.default.createElement('div', {
        className: 'jsx-3522186945' + ' ' + 'app',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        }
      }, _react2.default.createElement(Background, { width: screenWidth, height: screenHeight, __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        }
      }), _react2.default.createElement('div', {
        className: 'jsx-3522186945' + ' ' + 'center',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        }
      }, _react2.default.createElement('div', {
        className: 'jsx-3522186945' + ' ' + 'chart',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        }
      }, _react2.default.createElement('div', {
        className: 'jsx-3522186945' + ' ' + 'titlebar',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        }
      }, _react2.default.createElement('div', {
        className: 'jsx-3522186945' + ' ' + 'title',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        }
      }, _react2.default.createElement('div', {
        className: 'jsx-3522186945',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        }
      }, 'BITCOIN PRICE'), _react2.default.createElement('div', {
        className: 'jsx-3522186945',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        }
      }, _react2.default.createElement('small', {
        className: 'jsx-3522186945',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        }
      }, 'last 30 days'))), _react2.default.createElement('div', {
        className: 'jsx-3522186945' + ' ' + 'spacer',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        }
      }), _react2.default.createElement('div', {
        className: 'jsx-3522186945' + ' ' + 'prices',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        }
      }, _react2.default.createElement('div', {
        className: 'jsx-3522186945',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        }
      }, (0, _formatPrice2.default)(currentPrice)), _react2.default.createElement('small', {
        className: 'jsx-3522186945' + ' ' + ((hasIncreased ? 'increased' : 'decreased') || ''),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        }
      }, hasIncreased ? '+' : '-', (0, _formatPrice2.default)(diffPrice)))), _react2.default.createElement('div', {
        className: 'jsx-3522186945' + ' ' + 'container',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        }
      }, _react2.default.createElement(_chart2.default, { data: prices, __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        }
      }))), _react2.default.createElement('p', {
        className: 'jsx-3522186945' + ' ' + 'disclaimer',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        }
      }, data.disclaimer)), _react2.default.createElement(_style2.default, {
        styleId: '3522186945',
        css: '.app.jsx-3522186945,.center.jsx-3522186945{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;position:absolute;top:0;left:0;right:0;bottom:0;-webkit-flex:1;-ms-flex:1;flex:1;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;font-family:arial;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}.increased.jsx-3522186945{color:#00f1a1;}.prices.jsx-3522186945{-webkit-align-items:flex-end;-webkit-box-align:flex-end;-ms-flex-align:flex-end;align-items:flex-end;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}.spacer.jsx-3522186945{-webkit-flex:1;-ms-flex:1;flex:1;}.titlebar.jsx-3522186945{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding:15px;}.container.jsx-3522186945{-webkit-flex:1;-ms-flex:1;flex:1;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}.disclaimer.jsx-3522186945{margin-top:35px;font-size:11px;color:white;opacity:0.4;}.chart.jsx-3522186945{width:600px;height:400px;background-color:#27273f;border-radius:8px;color:white;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2JpdGNvaW4uanM/ZW50cnkiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBc0ZvQixBQUkwQixBQWFDLEFBSU8sQUFLZCxBQUdNLEFBUU4sQUFJUyxBQU1KLFlBQ0MsRUE5QmYsRUF3QmlCLFNBT1UsTUFOYixFQWhCZCxBQVdlLFVBTUQsT0FNTSxLQUxwQixhQU1jLE1BOUNNLEFBeUJDLE1Bc0JOLFlBOUNQLE1BQ0MsR0FlTSxJQWRMLEVBK0JWLE1BOUJXLFNBQ0YscUJBcUJZLFdBc0JHLENBMUNDLG9CQVlELHlEQStCeEIsSUF0QmUsYUFDZixJQVRBLENBWnFCLDZGQUNELGtCQUNJLDhFQUN4QiIsImZpbGUiOiJwYWdlcy9iaXRjb2luLmpzP2VudHJ5Iiwic291cmNlUm9vdCI6Ii9Vc2Vycy9wcmlzY18wMDAvY29kZS9DQUNERVYvdngtdGVzdCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7TGluZWFyR3JhZGllbnR9IGZyb20gJ0B2eC9ncmFkaWVudCc7XG5pbXBvcnQge3dpdGhTY3JlZW5TaXplfSBmcm9tICdAdngvcmVzcG9uc2l2ZSc7XG5pbXBvcnQgQ2hhcnQgZnJvbSAnLi4vY29tcG9uZW50cy9jaGFydCc7XG5pbXBvcnQgZm9ybWF0UHJpY2UgZnJvbSAnLi4vdXRpbHMvZm9ybWF0UHJpY2UnO1xuXG5mdW5jdGlvbiBCYWNrZ3JvdW5kKHt3aWR0aCwgaGVpZ2h0fSkge1xuXHRyZXR1cm4gKFxuICAgIDxzdmcgd2lkdGg9e3dpZHRofSBoZWlnaHQ9e2hlaWdodH0+XG4gICAgICA8TGluZWFyR3JhZGllbnQgaWQ9XCJmaWxsXCIgdmVydGljYWw9e2ZhbHNlfT5cbiAgICAgICAgPHN0b3Agc3RvcENvbG9yPVwiI2E5NDNlNFwiIG9mZnNldD1cIjAlXCIgLz5cbiAgICAgICAgPHN0b3Agc3RvcENvbG9yPVwiI2Y1NTk4OVwiIG9mZnNldD1cIjUwJVwiIC8+XG4gICAgICAgIDxzdG9wIHN0b3BDb2xvcj1cIiNmZmFmODRcIiBvZmZzZXQ9XCIxMDAlXCIgLz5cbiAgICAgIDwvTGluZWFyR3JhZGllbnQ+XG4gICAgICB7LyogPHJlY3QgZmlsbCBhdHRyaWJ1dGUgaXMgcG9pbnRpbmcgdG8gPExHIGlkPVwiZmlsbFwiICovfVxuICAgICAgPHJlY3Qgd2lkdGg9e3dpZHRofSBoZWlnaHQ9e2hlaWdodH0gZmlsbD1cInVybCgjZmlsbClcIiAvPlxuICAgIDwvc3ZnPlxuXHQpO1xufVxuXG5jbGFzcyBBcHAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAvLyBTZXQgdXAgc3RhdGVcblx0Y29uc3RydWN0b3IocHJvcHMpIHtcblx0XHRzdXBlcihwcm9wcyk7XG4gICAgLy8gU2V0IGRhdGEgdG8gZW1wdHkgb2JqZWN0XG5cdFx0dGhpcy5zdGF0ZSA9IHtcblx0XHRcdGRhdGE6IHt9XG5cdFx0fTtcblx0fVxuXHRjb21wb25lbnREaWRNb3VudCgpIHtcblx0XHRmZXRjaCgnaHR0cHM6Ly9hcGkuY29pbmRlc2suY29tL3YxL2JwaS9oaXN0b3JpY2FsL2Nsb3NlLmpzb24nKVxuICAgICAgLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpXG4gICAgICAudGhlbihqc29uID0+IHtcblx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0ZGF0YToganNvblxuXHR9KTtcbn0pO1xuXHR9XG5cdHJlbmRlcigpIHtcblx0XHRjb25zdCB7c2NyZWVuV2lkdGgsIHNjcmVlbkhlaWdodH0gPSB0aGlzLnByb3BzO1xuXHRcdGNvbnN0IHtkYXRhfSA9IHRoaXMuc3RhdGU7XG5cdFx0aWYgKCFkYXRhLmJwaSkge1xuXHRcdFx0cmV0dXJuIDxkaXY+TG9hZGluZy4uLjwvZGl2Pjtcblx0XHR9XG5cdFx0Y29uc3QgcHJpY2VzID0gT2JqZWN0LmtleXMoZGF0YS5icGkpLm1hcChrID0+IHtcblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdHRpbWU6IGssXG5cdFx0XHRcdHByaWNlOiBkYXRhLmJwaVtrXVxuXHRcdFx0fTtcblx0XHR9KTtcbiAgICAvKiogV2Ugd2FudCB0byBjdXJyZW50IHByaWNlIHdoaWNoIHdpbGwgYmUgdGhlIGxhc3QgaXRlbSByZXR1cm5lZCBmcm9tIG91ciBhcGkgY2FsbFxuICAgICAqXG4gICAgICovXG5cdFx0Y29uc3QgY3VycmVudFByaWNlID0gcHJpY2VzW3ByaWNlcy5sZW5ndGggLSAxXS5wcmljZTtcbiAgICAvLyBWYXIgdG8gZ2V0IGRpZmZlcmVuY2UgaW4gY3VycmVudC9sYXN0IHByaWNlLiBkZWYgZmlyc3RQcmljZSAtIHN1YnRyYWN0IGZyb20gY3VycmVudFxuXHRcdGNvbnN0IGZpcnN0UHJpY2UgPSBwcmljZXNbMF0ucHJpY2U7XG5cdFx0Y29uc3QgZGlmZlByaWNlID0gY3VycmVudFByaWNlIC0gZmlyc3RQcmljZTtcbiAgICAvLyBCb29sZWFuIHRvIGNoZWNrIGlmIHRoYXQgcHJpY2UgaGFzIGluY3JlYXNlZCBvciBkZWNyZWFzZWRcblx0XHRjb25zdCBoYXNJbmNyZWFzZWQgPSBkaWZmUHJpY2UgPiAwO1xuICAgIC8vIENvbnNvbGUubG9nKGN1cnJlbnRQcmljZSk7XG5cdFx0cmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXBwXCI+XG4gICAgICAgIDxCYWNrZ3JvdW5kIHdpZHRoPXtzY3JlZW5XaWR0aH0gaGVpZ2h0PXtzY3JlZW5IZWlnaHR9IC8+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2VudGVyXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaGFydFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aXRsZWJhclwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpdGxlXCI+XG4gICAgICAgICAgICAgICAgPGRpdj5CSVRDT0lOIFBSSUNFPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgIDxzbWFsbD5sYXN0IDMwIGRheXM8L3NtYWxsPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcGFjZXJcIiAvPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByaWNlc1wiPlxuICAgICAgICAgICAgICAgIDxkaXY+e2Zvcm1hdFByaWNlKGN1cnJlbnRQcmljZSl9PC9kaXY+XG4gICAgICAgICAgICAgICAgPHNtYWxsIGNsYXNzTmFtZT17aGFzSW5jcmVhc2VkID8gJ2luY3JlYXNlZCcgOiAnZGVjcmVhc2VkJ30+XG4gICAgICAgICAgICAgICAgICB7aGFzSW5jcmVhc2VkID8gJysnIDogJy0nfVxuICAgICAgICAgICAgICAgICAge2Zvcm1hdFByaWNlKGRpZmZQcmljZSl9XG4gICAgICAgICAgICAgICAgPC9zbWFsbD5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgIDxDaGFydCBkYXRhPXtwcmljZXN9IC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJkaXNjbGFpbWVyXCI+e2RhdGEuZGlzY2xhaW1lcn08L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgLmFwcCxcbiAgICAgICAgICAuY2VudGVyIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgICAgICBib3R0b206IDA7XG4gICAgICAgICAgICBmbGV4OiAxO1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6IGFyaWFsO1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmluY3JlYXNlZCB7XG4gICAgICAgICAgICBjb2xvcjogIzAwZjFhMTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAucHJpY2VzIHtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuc3BhY2VyIHtcbiAgICAgICAgICAgIGZsZXg6IDE7XG4gICAgICAgICAgfVxuICAgICAgICAgIC50aXRsZWJhciB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICBwYWRkaW5nOiAxNXB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAudGl0bGUge1xuICAgICAgICAgIH1cbiAgICAgICAgICAuY29udGFpbmVyIHtcbiAgICAgICAgICAgIGZsZXg6IDE7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAuZGlzY2xhaW1lciB7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAzNXB4O1xuICAgICAgICAgICAgZm9udC1zaXplOiAxMXB4O1xuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgb3BhY2l0eTogMC40O1xuICAgICAgICAgIH1cbiAgICAgICAgICAuY2hhcnQge1xuICAgICAgICAgICAgd2lkdGg6IDYwMHB4O1xuICAgICAgICAgICAgaGVpZ2h0OiA0MDBweDtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMyNzI3M2Y7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDwvZGl2PlxuXHRcdCk7XG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFNjcmVlblNpemUoQXBwKTtcbiJdfQ== */\n/*@ sourceURL=pages/bitcoin.js?entry */'
      }));
    }
  }]);

  return App;
}(_react2.default.Component);

exports.default = (0, _responsive.withScreenSize)(App);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2JpdGNvaW4uanMiXSwibmFtZXMiOlsiTGluZWFyR3JhZGllbnQiLCJ3aXRoU2NyZWVuU2l6ZSIsIkNoYXJ0IiwiZm9ybWF0UHJpY2UiLCJCYWNrZ3JvdW5kIiwid2lkdGgiLCJoZWlnaHQiLCJBcHAiLCJwcm9wcyIsInN0YXRlIiwiZGF0YSIsImZldGNoIiwidGhlbiIsInJlcyIsImpzb24iLCJzZXRTdGF0ZSIsInNjcmVlbldpZHRoIiwic2NyZWVuSGVpZ2h0IiwiYnBpIiwicHJpY2VzIiwibWFwIiwidGltZSIsImsiLCJwcmljZSIsImN1cnJlbnRQcmljZSIsImxlbmd0aCIsImZpcnN0UHJpY2UiLCJkaWZmUHJpY2UiLCJoYXNJbmNyZWFzZWQiLCJkaXNjbGFpbWVyIiwiUmVhY3QiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBUTs7QUFDUixBQUFROztBQUNSLEFBQU8sQUFBVzs7OztBQUNsQixBQUFPLEFBQWlCOzs7Ozs7Ozs7QUFFeEIsU0FBQSxBQUFTLGlCQUE0QjtNQUFoQixBQUFnQixhQUFoQixBQUFnQjtNQUFULEFBQVMsY0FBVCxBQUFTLEFBQ3BDOzt5QkFDRyxjQUFBLFNBQUssT0FBTCxBQUFZLE9BQU8sUUFBbkIsQUFBMkI7Z0JBQTNCO2tCQUFBLEFBQ0U7QUFERjtHQUFBLGtCQUNFLEFBQUMsMENBQWUsSUFBaEIsQUFBbUIsUUFBTyxVQUExQixBQUFvQztnQkFBcEM7a0JBQUEsQUFDRTtBQURGOzZDQUNRLFdBQU4sQUFBZ0IsV0FBVSxRQUExQixBQUFpQztnQkFBakM7a0JBREYsQUFDRSxBQUNBO0FBREE7OENBQ00sV0FBTixBQUFnQixXQUFVLFFBQTFCLEFBQWlDO2dCQUFqQztrQkFGRixBQUVFLEFBQ0E7QUFEQTs4Q0FDTSxXQUFOLEFBQWdCLFdBQVUsUUFBMUIsQUFBaUM7Z0JBQWpDO2tCQUpKLEFBQ0UsQUFHRSxBQUdGO0FBSEU7K0NBR0ksT0FBTixBQUFhLE9BQU8sUUFBcEIsQUFBNEIsUUFBUSxNQUFwQyxBQUF5QztnQkFBekM7a0JBUkwsQUFDRyxBQU9FLEFBR0w7QUFISzs7OztJLEFBS0E7K0JBQ0o7O0FBQ0Q7ZUFBQSxBQUFZLE9BQU87d0NBRWhCOztBQUZnQjtnSUFBQSxBQUNaLEFBRU47O1VBQUEsQUFBSztZQUhhLEFBR2xCLEFBQWEsQUFDTjtBQURNLEFBQ1o7V0FFRDs7Ozs7d0NBQ21CO21CQUNuQjs7WUFBQSxBQUFNLHlEQUFOLEFBQ0ssS0FBSyxlQUFBO2VBQU8sSUFBUCxBQUFPLEFBQUk7QUFEckIsU0FBQSxBQUVLLEtBQUssZ0JBQVEsQUFDbkI7ZUFBQSxBQUFLO2dCQUFMLEFBQWMsQUFDUCxBQUVQO0FBSGMsQUFDYjtBQUpBLEFBT0E7Ozs7NkJBQ1E7bUJBQzRCLEtBRDVCLEFBQ2lDO1VBRGpDLEFBQ0QscUJBREMsQUFDRDtVQURDLEFBQ1ksc0JBRFosQUFDWTtVQURaLEFBRUQsT0FBUSxLQUZQLEFBRVksTUFGWixBQUVELEFBQ1A7O1VBQUksQ0FBQyxLQUFMLEFBQVUsS0FBSyxBQUNkOytCQUFPLGNBQUE7O3NCQUFBO3dCQUFBO0FBQUE7QUFBQSxTQUFBLEVBQVAsQUFBTyxBQUNQO0FBQ0Q7VUFBTSw2QkFBcUIsS0FBWixBQUFpQixLQUFqQixBQUFzQixJQUFJLGFBQUssQUFDN0M7O2dCQUFPLEFBQ0EsQUFDTjtpQkFBTyxLQUFBLEFBQUssSUFGYixBQUFPLEFBRUMsQUFBUyxBQUVqQjtBQUpPLEFBQ047QUFGRixBQUFlLEFBTWIsT0FOYTtBQVNmOzs7VUFBTSxlQUFlLE9BQU8sT0FBQSxBQUFPLFNBQWQsQUFBdUIsR0FBNUMsQUFBK0MsQUFDN0M7QUFDRjtVQUFNLGFBQWEsT0FBQSxBQUFPLEdBQTFCLEFBQTZCLEFBQzdCO1VBQU0sWUFBWSxlQUFsQixBQUFpQyxBQUMvQjtBQUNGO1VBQU0sZUFBZSxZQUFyQixBQUFpQyxBQUMvQjtBQUNGOzZCQUNJLGNBQUE7NENBQUEsQUFBZTs7b0JBQWY7c0JBQUEsQUFDRTtBQURGO0FBQUEsT0FBQSxnQ0FDRSxBQUFDLGNBQVcsT0FBWixBQUFtQixhQUFhLFFBQWhDLEFBQXdDO29CQUF4QztzQkFERixBQUNFLEFBQ0E7QUFEQTswQkFDQSxjQUFBOzRDQUFBLEFBQWU7O29CQUFmO3NCQUFBLEFBQ0U7QUFERjtBQUFBLHlCQUNFLGNBQUE7NENBQUEsQUFBZTs7b0JBQWY7c0JBQUEsQUFDRTtBQURGO0FBQUEseUJBQ0UsY0FBQTs0Q0FBQSxBQUFlOztvQkFBZjtzQkFBQSxBQUNFO0FBREY7QUFBQSx5QkFDRSxjQUFBOzRDQUFBLEFBQWU7O29CQUFmO3NCQUFBLEFBQ0U7QUFERjtBQUFBLHlCQUNFLGNBQUE7bUJBQUE7O29CQUFBO3NCQUFBO0FBQUE7QUFBQSxTQURGLEFBQ0UsQUFDQSxrQ0FBQSxjQUFBO21CQUFBOztvQkFBQTtzQkFBQSxBQUNFO0FBREY7QUFBQSx5QkFDRSxjQUFBO21CQUFBOztvQkFBQTtzQkFBQTtBQUFBO0FBQUEsU0FKTixBQUNFLEFBRUUsQUFDRSxBQUdKOzRDQUFBLEFBQWU7O29CQUFmO3NCQVBGLEFBT0UsQUFDQTtBQURBO0FBQUEsMEJBQ0EsY0FBQTs0Q0FBQSxBQUFlOztvQkFBZjtzQkFBQSxBQUNFO0FBREY7QUFBQSx5QkFDRSxjQUFBO21CQUFBOztvQkFBQTtzQkFBQSxBQUFNO0FBQU47QUFBQSxvQ0FERixBQUNFLEFBQU0sQUFBWSxBQUNsQixnQ0FBQSxjQUFBOzhDQUFrQixlQUFBLEFBQWUsY0FBakMsQUFBK0MsZ0JBQS9DOztvQkFBQTtzQkFBQSxBQUNHO0FBREg7QUFBQSx3QkFDRyxBQUFlLE1BRGxCLEFBQ3dCLEFBQ3JCLGdDQWJULEFBQ0UsQUFRRSxBQUVFLEFBRUcsQUFBWSxBQUluQiwrQkFBQSxjQUFBOzRDQUFBLEFBQWU7O29CQUFmO3NCQUFBLEFBQ0U7QUFERjtBQUFBLHlCQUNFLEFBQUMsaUNBQU0sTUFBUCxBQUFhO29CQUFiO3NCQW5CTixBQUNFLEFBaUJFLEFBQ0UsQUFHSjtBQUhJOzRCQUdKLGNBQUE7NENBQUEsQUFBYTs7b0JBQWI7c0JBQUEsQUFBMkI7QUFBM0I7QUFBQSxjQXhCSixBQUVFLEFBc0JFLEFBQWdDO2lCQXhCcEM7YUFESixBQUNJLEFBbUZKO0FBbkZJOzs7OztFQXpDWSxnQkFBTSxBQStIeEIsQTs7a0JBQWUsZ0NBQWYsQUFBZSxBQUFlIiwiZmlsZSI6ImJpdGNvaW4uanM/ZW50cnkiLCJzb3VyY2VSb290IjoiL1VzZXJzL3ByaXNjXzAwMC9jb2RlL0NBQ0RFVi92eC10ZXN0In0=