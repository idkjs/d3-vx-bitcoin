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
            // Console.log(data);

            return _react2.default.createElement('div', {
                className: 'jsx-3290552878' + ' ' + 'app',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 42
                }
            }, _react2.default.createElement(Background, { width: screenWidth, height: screenHeight, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 43
                }
            }), _react2.default.createElement('div', {
                className: 'jsx-3290552878' + ' ' + 'center',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 44
                }
            }, _react2.default.createElement('div', {
                className: 'jsx-3290552878' + ' ' + 'chart',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 45
                }
            }, _react2.default.createElement(_chart2.default, { data: data, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 46
                }
            }))), _react2.default.createElement(_style2.default, {
                styleId: '3290552878',
                css: '.app.jsx-3290552878,.center.jsx-3290552878{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;position:absolute;top:0;left:0;right:0;bottom:0;-webkit-flex:1;-ms-flex:1;flex:1;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;font-family:arial;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}.title.jsx-3290552878{padding:15px 15px 0;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.chart.jsx-3290552878{width:600px;height:400px;background-color:#27273f;border-radius:8px;color:white;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2V4Y2hhbmdlcy5qcz9lbnRyeSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFnRHdCLEFBSTZCLEFBYVEsQUFNUixZQUNDLFFBTkEsS0FPWSx5QkFDUCxrQkFDTixNQXRCTSxNQXVCdEIsWUF0QlMsRUFhYyxJQVpiLE9BQ0MsUUFDQyxTQUNGLGlDQUNpQixRQVNKLDJGQVJBLEVBU3ZCLDJGQVJzQixrQkFDSSw4RUFDMUIiLCJmaWxlIjoicGFnZXMvZXhjaGFuZ2VzLmpzP2VudHJ5Iiwic291cmNlUm9vdCI6Ii9Vc2Vycy9wcmlzY18wMDAvY29kZS9DQUNERVYvdngtdGVzdCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7TGluZWFyR3JhZGllbnR9IGZyb20gJ0B2eC9ncmFkaWVudCc7XG5pbXBvcnQge3dpdGhTY3JlZW5TaXplfSBmcm9tICdAdngvcmVzcG9uc2l2ZSc7XG5pbXBvcnQgQ2hhcnQgZnJvbSAnLi4vY29tcG9uZW50cy9jaGFydCc7XG5cbmZ1bmN0aW9uIEJhY2tncm91bmQoe3dpZHRoLCBoZWlnaHR9KSB7XG5cdHJldHVybiAoXG4gICAgICAgIDxzdmcgd2lkdGg9e3dpZHRofSBoZWlnaHQ9e2hlaWdodH0+XG4gICAgICAgICAgICA8TGluZWFyR3JhZGllbnQgaWQ9XCJmaWxsXCIgdmVydGljYWw9e2ZhbHNlfT5cbiAgICAgICAgICAgICAgICA8c3RvcCBzdG9wQ29sb3I9XCIjYTk0M2U0XCIgb2Zmc2V0PVwiMCVcIiAvPlxuICAgICAgICAgICAgICAgIDxzdG9wIHN0b3BDb2xvcj1cIiNmNTU5ODlcIiBvZmZzZXQ9XCI1MCVcIiAvPlxuICAgICAgICAgICAgICAgIDxzdG9wIHN0b3BDb2xvcj1cIiNmZmFmODRcIiBvZmZzZXQ9XCIxMDAlXCIgLz5cbiAgICAgICAgICAgIDwvTGluZWFyR3JhZGllbnQ+XG4gICAgICAgICAgICB7LyogPHJlY3QgZmlsbCBhdHRyaWJ1dGUgaXMgcG9pbnRpbmcgdG8gPExHIGlkPVwiZmlsbFwiICovfVxuICAgICAgICA8cmVjdCB3aWR0aD17d2lkdGh9IGhlaWdodD17aGVpZ2h0fSBmaWxsPVwidXJsKCNmaWxsKVwiLz5cbiAgICAgICAgPC9zdmc+XG5cdCk7XG59XG5cbmNsYXNzIEFwcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgLy8gU2V0IHVwIHN0YXRlXG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XG5cdFx0c3VwZXIocHJvcHMpO1xuICAgICAgICAvLyBTZXQgZGF0YSB0byBlbXB0eSBvYmplY3Rcblx0XHR0aGlzLnN0YXRlID0ge1xuXHRcdFx0ZGF0YToge31cblx0XHR9O1xuXHR9XG5cdGNvbXBvbmVudERpZE1vdW50KCkge1xuXHRcdGZldGNoKCdodHRwOi8vbG9jYWxob3N0OjgwMDAnKVxuICAgICAgICAudGhlbihyZXMgPT4gcmVzLmpzb24oKSlcbiAgICAgICAgLnRoZW4oanNvbiA9PiB7XG5cdHRoaXMuc2V0U3RhdGUoe1xuXHRcdGRhdGE6IGpzb25cblx0fSk7XG59KTtcblx0fVxuXHRyZW5kZXIoKSB7XG5cdFx0Y29uc3Qge3NjcmVlbldpZHRoLCBzY3JlZW5IZWlnaHR9ID0gdGhpcy5wcm9wcztcblx0XHRjb25zdCB7ZGF0YX0gPSB0aGlzLnN0YXRlO1xuXHRcdC8vIENvbnNvbGUubG9nKGRhdGEpO1xuXHRcdHJldHVybiAoXG5cdFx0PGRpdiBjbGFzc05hbWU9XCJhcHBcIj5cbiAgICAgICAgICAgIDxCYWNrZ3JvdW5kIHdpZHRoPXtzY3JlZW5XaWR0aH0gaGVpZ2h0PXtzY3JlZW5IZWlnaHR9IC8+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNlbnRlclwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2hhcnRcIj5cbiAgICAgICAgICAgICAgICAgICAgPENoYXJ0IGRhdGE9e2RhdGF9IC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgIC5hcHAsXG4gICAgICAgICAgICAuY2VudGVyIHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OmZsZXg7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgIHRvcDowO1xuICAgICAgICAgICAgICAgIGxlZnQ6MDtcbiAgICAgICAgICAgICAgICByaWdodDowO1xuICAgICAgICAgICAgICAgIGJvdHRvbTowO1xuICAgICAgICAgICAgICAgIGZsZXg6MTtcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBhcmlhbDtcbiAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnRpdGxlIHtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAxNXB4IDE1cHggMDtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5jaGFydCB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDYwMHB4O1xuICAgICAgICAgICAgICAgIGhlaWdodDogNDAwcHg7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzI3MjczZjtcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgfSAgICAgICBcbiAgICAgICAgICAgIGB9PC9zdHlsZT5cblxuICAgICAgICA8L2Rpdj5cblx0XHQpO1xuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTY3JlZW5TaXplKEFwcCk7XG4iXX0= */\n/*@ sourceURL=pages/exchanges.js?entry */'
            }));
        }
    }]);

    return App;
}(_react2.default.Component);

exports.default = (0, _responsive.withScreenSize)(App);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2V4Y2hhbmdlcy5qcyJdLCJuYW1lcyI6WyJMaW5lYXJHcmFkaWVudCIsIndpdGhTY3JlZW5TaXplIiwiQ2hhcnQiLCJCYWNrZ3JvdW5kIiwid2lkdGgiLCJoZWlnaHQiLCJBcHAiLCJwcm9wcyIsInN0YXRlIiwiZGF0YSIsImZldGNoIiwidGhlbiIsInJlcyIsImpzb24iLCJzZXRTdGF0ZSIsInNjcmVlbldpZHRoIiwic2NyZWVuSGVpZ2h0IiwiUmVhY3QiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFROztBQUNSLEFBQVE7O0FBQ1IsQUFBTyxBQUFXOzs7Ozs7Ozs7QUFFbEIsU0FBQSxBQUFTLGlCQUE0QjtRQUFoQixBQUFnQixhQUFoQixBQUFnQjtRQUFULEFBQVMsY0FBVCxBQUFTLEFBQ3BDOzsyQkFDTyxjQUFBLFNBQUssT0FBTCxBQUFZLE9BQU8sUUFBbkIsQUFBMkI7c0JBQTNCO3dCQUFBLEFBQ0k7QUFESjtLQUFBLGtCQUNJLEFBQUMsMENBQWUsSUFBaEIsQUFBbUIsUUFBTyxVQUExQixBQUFvQztzQkFBcEM7d0JBQUEsQUFDSTtBQURKOytDQUNVLFdBQU4sQUFBZ0IsV0FBVSxRQUExQixBQUFpQztzQkFBakM7d0JBREosQUFDSSxBQUNBO0FBREE7Z0RBQ00sV0FBTixBQUFnQixXQUFVLFFBQTFCLEFBQWlDO3NCQUFqQzt3QkFGSixBQUVJLEFBQ0E7QUFEQTtnREFDTSxXQUFOLEFBQWdCLFdBQVUsUUFBMUIsQUFBaUM7c0JBQWpDO3dCQUpSLEFBQ0ksQUFHSSxBQUdSO0FBSFE7aURBR0YsT0FBTixBQUFhLE9BQU8sUUFBcEIsQUFBNEIsUUFBUSxNQUFwQyxBQUF5QztzQkFBekM7d0JBUlAsQUFDTyxBQU9BLEFBR1A7QUFITzs7OztJLEFBS0Y7aUNBQ0Y7O0FBQ0g7aUJBQUEsQUFBWSxPQUFPOzRDQUVaOztBQUZZO29JQUFBLEFBQ1osQUFFTjs7Y0FBQSxBQUFLO2tCQUhhLEFBR2xCLEFBQWEsQUFDTjtBQURNLEFBQ1o7ZUFFRDs7Ozs7NENBQ21CO3lCQUNuQjs7a0JBQUEsQUFBTSx5QkFBTixBQUNPLEtBQUssZUFBQTt1QkFBTyxJQUFQLEFBQU8sQUFBSTtBQUR2QixlQUFBLEFBRU8sS0FBSyxnQkFBUSxBQUNyQjt1QkFBQSxBQUFLOzBCQUFMLEFBQWMsQUFDUCxBQUVQO0FBSGMsQUFDYjtBQUpBLEFBT0E7Ozs7aUNBQ1E7eUJBQzRCLEtBRDVCLEFBQ2lDO2dCQURqQyxBQUNELHFCQURDLEFBQ0Q7Z0JBREMsQUFDWSxzQkFEWixBQUNZO2dCQURaLEFBRUQsT0FBUSxLQUZQLEFBRVksTUFGWixBQUVELEFBQ1A7QUFDQTs7bUNBQ0EsY0FBQTtvREFBQSxBQUFlOzs4QkFBZjtnQ0FBQSxBQUNVO0FBRFY7QUFBQSxhQUFBLGdDQUNVLEFBQUMsY0FBVyxPQUFaLEFBQW1CLGFBQWEsUUFBaEMsQUFBd0M7OEJBQXhDO2dDQURWLEFBQ1UsQUFDQTtBQURBO2dDQUNBLGNBQUE7b0RBQUEsQUFBZTs7OEJBQWY7Z0NBQUEsQUFDSTtBQURKO0FBQUEsK0JBQ0ksY0FBQTtvREFBQSxBQUFlOzs4QkFBZjtnQ0FBQSxBQUNJO0FBREo7QUFBQSwrQkFDSSxBQUFDLGlDQUFNLE1BQVAsQUFBYTs4QkFBYjtnQ0FKbEIsQUFFVSxBQUNJLEFBQ0k7QUFBQTs7eUJBSmxCO3FCQURBLEFBQ0EsQUF1Q0E7QUF2Q0E7Ozs7O0VBdkJnQixnQkFBTSxBLEFBaUV4Qjs7a0JBQWUsZ0NBQWYsQUFBZSxBQUFlIiwiZmlsZSI6ImV4Y2hhbmdlcy5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiIvVXNlcnMvcHJpc2NfMDAwL2NvZGUvQ0FDREVWL3Z4LXRlc3QifQ==