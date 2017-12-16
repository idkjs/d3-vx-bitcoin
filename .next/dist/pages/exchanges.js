'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

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

var _jsxFileName = '/Users/prisc_000/code/CACDEV/vx-test/pages/exchanges.js?entry';

function Background(_ref) {
    var width = _ref.width,
        height = _ref.height;

    return _react2.default.createElement('svg', { width: width, height: height, __source: {
            fileName: _jsxFileName,
            lineNumber: 6
        }
    }, _react2.default.createElement(_gradient.LinearGradient, { id: 'fill', vertical: false, __source: {
            fileName: _jsxFileName,
            lineNumber: 7
        }
    }, _react2.default.createElement('stop', { stopColor: '#a943e4', offset: '0%', __source: {
            fileName: _jsxFileName,
            lineNumber: 8
        }
    }), _react2.default.createElement('stop', { stopColor: '#f55989', offset: '50%', __source: {
            fileName: _jsxFileName,
            lineNumber: 9
        }
    }), _react2.default.createElement('stop', { stopColor: '#ffaf84', offset: '100%', __source: {
            fileName: _jsxFileName,
            lineNumber: 10
        }
    })), _react2.default.createElement('rect', { width: width, height: height, fill: 'url(#fill)', __source: {
            fileName: _jsxFileName,
            lineNumber: 13
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

            fetch('http://localhost:8000').then(function (res) {
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
            // console.log(data);

            return _react2.default.createElement('div', {
                className: 'jsx-2092225112' + ' ' + 'app',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 41
                }
            }, _react2.default.createElement(Background, { width: screenWidth, height: screenHeight, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 42
                }
            }), _react2.default.createElement('div', {
                className: 'jsx-2092225112' + ' ' + 'center',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 43
                }
            }, _react2.default.createElement('div', {
                className: 'jsx-2092225112' + ' ' + 'chart',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 44
                }
            }, _react2.default.createElement(_chart2.default, { data: data, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 45
                }
            }))), _react2.default.createElement(_style2.default, {
                styleId: '2092225112',
                css: '.app.jsx-2092225112,.center.jsx-2092225112{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;position:absolute;top:0;left:0;right:0;bottom:0;-webkit-flex:1;-ms-flex:1;flex:1;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;font-family:arial;}.chart.jsx-2092225112{width:600px;height:400px;background-color:#27273f;border-radius:8px;color:white;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2V4Y2hhbmdlcy5qcz9lbnRyeSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUErQ3dCLEFBSTZCLEFBWUEsWUFDQyxhQUNZLHlCQUNQLGtCQUNOLE1BZk0sTUFnQnRCLFlBZlMsTUFDQyxPQUNDLFFBQ0MsU0FDRixpQ0FDaUIsbUdBQ0osNkZBQ0Qsa0JBQ3RCIiwiZmlsZSI6InBhZ2VzL2V4Y2hhbmdlcy5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiIvVXNlcnMvcHJpc2NfMDAwL2NvZGUvQ0FDREVWL3Z4LXRlc3QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0xpbmVhckdyYWRpZW50fSBmcm9tICdAdngvZ3JhZGllbnQnO1xuaW1wb3J0IHt3aXRoU2NyZWVuU2l6ZX0gZnJvbSAnQHZ4L3Jlc3BvbnNpdmUnO1xuaW1wb3J0IENoYXJ0IGZyb20gJy4uL2NvbXBvbmVudHMvY2hhcnQnO1xuZnVuY3Rpb24gQmFja2dyb3VuZCh7d2lkdGgsIGhlaWdodH0pIHtcblx0cmV0dXJuIChcbiAgICAgICAgPHN2ZyB3aWR0aD17d2lkdGh9IGhlaWdodD17aGVpZ2h0fT5cbiAgICAgICAgICAgIDxMaW5lYXJHcmFkaWVudCBpZD1cImZpbGxcIiB2ZXJ0aWNhbD17ZmFsc2V9PlxuICAgICAgICAgICAgICAgIDxzdG9wIHN0b3BDb2xvcj1cIiNhOTQzZTRcIiBvZmZzZXQ9XCIwJVwiIC8+XG4gICAgICAgICAgICAgICAgPHN0b3Agc3RvcENvbG9yPVwiI2Y1NTk4OVwiIG9mZnNldD1cIjUwJVwiIC8+XG4gICAgICAgICAgICAgICAgPHN0b3Agc3RvcENvbG9yPVwiI2ZmYWY4NFwiIG9mZnNldD1cIjEwMCVcIiAvPlxuICAgICAgICAgICAgPC9MaW5lYXJHcmFkaWVudD5cbiAgICAgICAgICAgIHsvKiA8cmVjdCBmaWxsIGF0dHJpYnV0ZSBpcyBwb2ludGluZyB0byA8TEcgaWQ9XCJmaWxsXCIgKi99XG4gICAgICAgIDxyZWN0IHdpZHRoPXt3aWR0aH0gaGVpZ2h0PXtoZWlnaHR9IGZpbGw9XCJ1cmwoI2ZpbGwpXCIvPlxuICAgICAgICA8L3N2Zz5cblx0KTtcbn1cblxuY2xhc3MgQXBwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICAvLyBTZXQgdXAgc3RhdGVcblx0Y29uc3RydWN0b3IocHJvcHMpIHtcblx0XHRzdXBlcihwcm9wcyk7XG4gICAgICAgIC8vIFNldCBkYXRhIHRvIGVtcHR5IG9iamVjdFxuXHRcdHRoaXMuc3RhdGUgPSB7XG5cdFx0XHRkYXRhOiB7fVxuXHRcdH07XG5cdH1cblx0Y29tcG9uZW50RGlkTW91bnQoKSB7XG5cdFx0ZmV0Y2goJ2h0dHA6Ly9sb2NhbGhvc3Q6ODAwMCcpXG4gICAgICAgIC50aGVuKHJlcyA9PiByZXMuanNvbigpKVxuICAgICAgICAudGhlbihqc29uID0+IHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgIGRhdGE6IGpzb25cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcblx0fVxuXHRyZW5kZXIoKSB7XG5cdFx0Y29uc3Qge3NjcmVlbldpZHRoLCBzY3JlZW5IZWlnaHR9ID0gdGhpcy5wcm9wcztcblx0XHRjb25zdCB7ZGF0YX0gPSB0aGlzLnN0YXRlO1xuXHRcdC8vIGNvbnNvbGUubG9nKGRhdGEpO1xuXHRcdHJldHVybiAoXG5cdFx0PGRpdiBjbGFzc05hbWU9XCJhcHBcIj5cbiAgICAgICAgICAgIDxCYWNrZ3JvdW5kIHdpZHRoPXtzY3JlZW5XaWR0aH0gaGVpZ2h0PXtzY3JlZW5IZWlnaHR9IC8+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNlbnRlclwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2hhcnRcIj5cbiAgICAgICAgICAgICAgICA8Q2hhcnQgZGF0YT17ZGF0YX0gLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgLmFwcCxcbiAgICAgICAgICAgIC5jZW50ZXIge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6ZmxleDtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgdG9wOjA7XG4gICAgICAgICAgICAgICAgbGVmdDowO1xuICAgICAgICAgICAgICAgIHJpZ2h0OjA7XG4gICAgICAgICAgICAgICAgYm90dG9tOjA7XG4gICAgICAgICAgICAgICAgZmxleDoxO1xuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IGFyaWFsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmNoYXJ0IHtcbiAgICAgICAgICAgICAgICB3aWR0aDogNjAwcHg7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA0MDBweDtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjcyNzNmO1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICB9ICAgICAgIFxuICAgICAgICAgICAgYH08L3N0eWxlPlxuXG4gICAgICAgIDwvZGl2PlxuXHRcdCk7XG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFNjcmVlblNpemUoQXBwKTtcbiJdfQ== */\n/*@ sourceURL=pages/exchanges.js?entry */'
            }));
        }
    }]);

    return App;
}(_react2.default.Component);

exports.default = (0, _responsive.withScreenSize)(App);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2V4Y2hhbmdlcy5qcyJdLCJuYW1lcyI6WyJMaW5lYXJHcmFkaWVudCIsIndpdGhTY3JlZW5TaXplIiwiQ2hhcnQiLCJCYWNrZ3JvdW5kIiwid2lkdGgiLCJoZWlnaHQiLCJBcHAiLCJwcm9wcyIsInN0YXRlIiwiZGF0YSIsImZldGNoIiwidGhlbiIsInJlcyIsImpzb24iLCJzZXRTdGF0ZSIsInNjcmVlbldpZHRoIiwic2NyZWVuSGVpZ2h0IiwiUmVhY3QiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFROztBQUNSLEFBQVE7O0FBQ1IsQUFBTyxBQUFXOzs7Ozs7OztBQUNsQixTQUFBLEFBQVMsaUJBQTRCO1FBQWhCLEFBQWdCLGFBQWhCLEFBQWdCO1FBQVQsQUFBUyxjQUFULEFBQVMsQUFDcEM7OzJCQUNPLGNBQUEsU0FBSyxPQUFMLEFBQVksT0FBTyxRQUFuQixBQUEyQjtzQkFBM0I7d0JBQUEsQUFDSTtBQURKO0tBQUEsa0JBQ0ksQUFBQywwQ0FBZSxJQUFoQixBQUFtQixRQUFPLFVBQTFCLEFBQW9DO3NCQUFwQzt3QkFBQSxBQUNJO0FBREo7K0NBQ1UsV0FBTixBQUFnQixXQUFVLFFBQTFCLEFBQWlDO3NCQUFqQzt3QkFESixBQUNJLEFBQ0E7QUFEQTtnREFDTSxXQUFOLEFBQWdCLFdBQVUsUUFBMUIsQUFBaUM7c0JBQWpDO3dCQUZKLEFBRUksQUFDQTtBQURBO2dEQUNNLFdBQU4sQUFBZ0IsV0FBVSxRQUExQixBQUFpQztzQkFBakM7d0JBSlIsQUFDSSxBQUdJLEFBR1I7QUFIUTtpREFHRixPQUFOLEFBQWEsT0FBTyxRQUFwQixBQUE0QixRQUFRLE1BQXBDLEFBQXlDO3NCQUF6Qzt3QkFSUCxBQUNPLEFBT0EsQUFHUDtBQUhPOzs7O0ksQUFLRjtpQ0FDRjs7QUFDSDtpQkFBQSxBQUFZLE9BQU87NENBRVo7O0FBRlk7b0lBQUEsQUFDWixBQUVOOztjQUFBLEFBQUs7a0JBSGEsQUFHbEIsQUFBYSxBQUNOO0FBRE0sQUFDWjtlQUVEOzs7Ozs0Q0FDbUI7eUJBQ25COztrQkFBQSxBQUFNLHlCQUFOLEFBQ08sS0FBSyxlQUFBO3VCQUFPLElBQVAsQUFBTyxBQUFJO0FBRHZCLGVBQUEsQUFFTyxLQUFLLGdCQUFRLEFBQ1Y7dUJBQUEsQUFBSzswQkFBTCxBQUFjLEFBQ0osQUFFYjtBQUhpQixBQUNWO0FBSmQsQUFPQTs7OztpQ0FDUTt5QkFDNEIsS0FENUIsQUFDaUM7Z0JBRGpDLEFBQ0QscUJBREMsQUFDRDtnQkFEQyxBQUNZLHNCQURaLEFBQ1k7Z0JBRFosQUFFRCxPQUFRLEtBRlAsQUFFWSxNQUZaLEFBRUQsQUFDUDtBQUNBOzttQ0FDQSxjQUFBO29EQUFBLEFBQWU7OzhCQUFmO2dDQUFBLEFBQ1U7QUFEVjtBQUFBLGFBQUEsZ0NBQ1UsQUFBQyxjQUFXLE9BQVosQUFBbUIsYUFBYSxRQUFoQyxBQUF3Qzs4QkFBeEM7Z0NBRFYsQUFDVSxBQUNBO0FBREE7Z0NBQ0EsY0FBQTtvREFBQSxBQUFlOzs4QkFBZjtnQ0FBQSxBQUNJO0FBREo7QUFBQSwrQkFDSSxjQUFBO29EQUFBLEFBQWU7OzhCQUFmO2dDQUFBLEFBQ0E7QUFEQTtBQUFBLCtCQUNBLEFBQUMsaUNBQU0sTUFBUCxBQUFhOzhCQUFiO2dDQUpkLEFBRVUsQUFDSSxBQUNBO0FBQUE7O3lCQUpkO3FCQURBLEFBQ0EsQUFnQ0E7QUFoQ0E7Ozs7O0VBdkJnQixnQkFBTSxBLEFBMER4Qjs7a0JBQWUsZ0NBQWYsQUFBZSxBQUFlIiwiZmlsZSI6ImV4Y2hhbmdlcy5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiIvVXNlcnMvcHJpc2NfMDAwL2NvZGUvQ0FDREVWL3Z4LXRlc3QifQ==