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
                className: 'jsx-2588786047' + ' ' + 'app',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 42
                }
            }, _react2.default.createElement(Background, { width: screenWidth, height: screenHeight, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 43
                }
            }), _react2.default.createElement('div', {
                className: 'jsx-2588786047' + ' ' + 'center',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 44
                }
            }, _react2.default.createElement('div', {
                className: 'jsx-2588786047' + ' ' + 'chart',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 45
                }
            }, _react2.default.createElement('div', {
                className: 'jsx-2588786047' + ' ' + 'title',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 46
                }
            }, 'CAC40 VS NASDAQ'), _react2.default.createElement('div', {
                className: 'jsx-2588786047' + ' ' + 'container',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 49
                }
            }, _react2.default.createElement(_chart2.default, { data: data, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 50
                }
            })))), _react2.default.createElement(_style2.default, {
                styleId: '2588786047',
                css: '.app.jsx-2588786047,.center.jsx-2588786047{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;position:absolute;top:0;left:0;right:0;bottom:0;-webkit-flex:1;-ms-flex:1;flex:1;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;font-family:arial;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}.title.jsx-2588786047{padding:15px;}.container.jsx-2588786047{-webkit-flex:1;-ms-flex:1;flex:1;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}.chart.jsx-2588786047{width:600px;height:400px;background-color:#27273f;border-radius:8px;color:white;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2V4Y2hhbmdlcy5qcz9lbnRyeSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFxRHdCLEFBSTZCLEFBYUMsQUFHUCxBQUlNLFlBQ0MsQ0FQakIsWUFRNkIsUUFMYixpQkFNTSxrQkFDTixNQXZCTSxNQXdCTixZQXZCUCxNQUNDLE9BQ0MsRUFjWCxNQWJZLFNBQ0YsZ0NBb0JnQixDQW5CQyw2RUFxQjNCLHNCQXBCdUIsNkZBQ0Qsa0JBQ0ksOEVBQzFCIiwiZmlsZSI6InBhZ2VzL2V4Y2hhbmdlcy5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiIvVXNlcnMvcHJpc2NfMDAwL2NvZGUvQ0FDREVWL3Z4LXRlc3QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0xpbmVhckdyYWRpZW50fSBmcm9tICdAdngvZ3JhZGllbnQnO1xuaW1wb3J0IHt3aXRoU2NyZWVuU2l6ZX0gZnJvbSAnQHZ4L3Jlc3BvbnNpdmUnO1xuaW1wb3J0IENoYXJ0IGZyb20gJy4uL2NvbXBvbmVudHMvY2hhcnQnO1xuXG5mdW5jdGlvbiBCYWNrZ3JvdW5kKHt3aWR0aCwgaGVpZ2h0fSkge1xuXHRyZXR1cm4gKFxuICAgICAgICA8c3ZnIHdpZHRoPXt3aWR0aH0gaGVpZ2h0PXtoZWlnaHR9PlxuICAgICAgICAgICAgPExpbmVhckdyYWRpZW50IGlkPVwiZmlsbFwiIHZlcnRpY2FsPXtmYWxzZX0+XG4gICAgICAgICAgICAgICAgPHN0b3Agc3RvcENvbG9yPVwiI2E5NDNlNFwiIG9mZnNldD1cIjAlXCIgLz5cbiAgICAgICAgICAgICAgICA8c3RvcCBzdG9wQ29sb3I9XCIjZjU1OTg5XCIgb2Zmc2V0PVwiNTAlXCIgLz5cbiAgICAgICAgICAgICAgICA8c3RvcCBzdG9wQ29sb3I9XCIjZmZhZjg0XCIgb2Zmc2V0PVwiMTAwJVwiIC8+XG4gICAgICAgICAgICA8L0xpbmVhckdyYWRpZW50PlxuICAgICAgICAgICAgey8qIDxyZWN0IGZpbGwgYXR0cmlidXRlIGlzIHBvaW50aW5nIHRvIDxMRyBpZD1cImZpbGxcIiAqL31cbiAgICAgICAgPHJlY3Qgd2lkdGg9e3dpZHRofSBoZWlnaHQ9e2hlaWdodH0gZmlsbD1cInVybCgjZmlsbClcIi8+XG4gICAgICAgIDwvc3ZnPlxuXHQpO1xufVxuXG5jbGFzcyBBcHAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIC8vIFNldCB1cCBzdGF0ZVxuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xuXHRcdHN1cGVyKHByb3BzKTtcbiAgICAgICAgLy8gU2V0IGRhdGEgdG8gZW1wdHkgb2JqZWN0XG5cdFx0dGhpcy5zdGF0ZSA9IHtcblx0XHRcdGRhdGE6IHt9XG5cdFx0fTtcblx0fVxuXHRjb21wb25lbnREaWRNb3VudCgpIHtcblx0XHRmZXRjaCgnaHR0cDovL2xvY2FsaG9zdDo4MDAwJylcbiAgICAgICAgLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpXG4gICAgICAgIC50aGVuKGpzb24gPT4ge1xuXHR0aGlzLnNldFN0YXRlKHtcblx0XHRkYXRhOiBqc29uXG5cdH0pO1xufSk7XG5cdH1cblx0cmVuZGVyKCkge1xuXHRcdGNvbnN0IHtzY3JlZW5XaWR0aCwgc2NyZWVuSGVpZ2h0fSA9IHRoaXMucHJvcHM7XG5cdFx0Y29uc3Qge2RhdGF9ID0gdGhpcy5zdGF0ZTtcblx0XHQvLyBDb25zb2xlLmxvZyhkYXRhKTtcblx0XHRyZXR1cm4gKFxuXHRcdDxkaXYgY2xhc3NOYW1lPVwiYXBwXCI+XG4gICAgICAgICAgICA8QmFja2dyb3VuZCB3aWR0aD17c2NyZWVuV2lkdGh9IGhlaWdodD17c2NyZWVuSGVpZ2h0fSAvPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjZW50ZXJcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNoYXJ0XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGl0bGVcIj5cbiAgICAgICAgICAgICAgICAgICAgQ0FDNDAgVlMgTkFTREFRIFxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPENoYXJ0IGRhdGE9e2RhdGF9IC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICAuYXBwLFxuICAgICAgICAgICAgLmNlbnRlciB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTpmbGV4O1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICB0b3A6MDtcbiAgICAgICAgICAgICAgICBsZWZ0OjA7XG4gICAgICAgICAgICAgICAgcmlnaHQ6MDtcbiAgICAgICAgICAgICAgICBib3R0b206MDtcbiAgICAgICAgICAgICAgICBmbGV4OjE7XG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogYXJpYWw7XG4gICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC50aXRsZSB7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogMTVweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5jb250YWluZXIge1xuICAgICAgICAgICAgICAgIGZsZXg6MTtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OmZsZXg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuY2hhcnQge1xuICAgICAgICAgICAgICAgIHdpZHRoOiA2MDBweDtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDQwMHB4O1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMyNzI3M2Y7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OmZsZXg7XG4gICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblxuICAgICAgICAgICAgfSAgICAgICBcbiAgICAgICAgICAgIGB9PC9zdHlsZT5cblxuICAgICAgICA8L2Rpdj5cblx0XHQpO1xuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTY3JlZW5TaXplKEFwcCk7XG4iXX0= */\n/*@ sourceURL=pages/exchanges.js?entry */'
            }));
        }
    }]);

    return App;
}(_react2.default.Component);

exports.default = (0, _responsive.withScreenSize)(App);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2V4Y2hhbmdlcy5qcyJdLCJuYW1lcyI6WyJMaW5lYXJHcmFkaWVudCIsIndpdGhTY3JlZW5TaXplIiwiQ2hhcnQiLCJCYWNrZ3JvdW5kIiwid2lkdGgiLCJoZWlnaHQiLCJBcHAiLCJwcm9wcyIsInN0YXRlIiwiZGF0YSIsImZldGNoIiwidGhlbiIsInJlcyIsImpzb24iLCJzZXRTdGF0ZSIsInNjcmVlbldpZHRoIiwic2NyZWVuSGVpZ2h0IiwiUmVhY3QiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFROztBQUNSLEFBQVE7O0FBQ1IsQUFBTyxBQUFXOzs7Ozs7Ozs7QUFFbEIsU0FBQSxBQUFTLGlCQUE0QjtRQUFoQixBQUFnQixhQUFoQixBQUFnQjtRQUFULEFBQVMsY0FBVCxBQUFTLEFBQ3BDOzsyQkFDTyxjQUFBLFNBQUssT0FBTCxBQUFZLE9BQU8sUUFBbkIsQUFBMkI7c0JBQTNCO3dCQUFBLEFBQ0k7QUFESjtLQUFBLGtCQUNJLEFBQUMsMENBQWUsSUFBaEIsQUFBbUIsUUFBTyxVQUExQixBQUFvQztzQkFBcEM7d0JBQUEsQUFDSTtBQURKOytDQUNVLFdBQU4sQUFBZ0IsV0FBVSxRQUExQixBQUFpQztzQkFBakM7d0JBREosQUFDSSxBQUNBO0FBREE7Z0RBQ00sV0FBTixBQUFnQixXQUFVLFFBQTFCLEFBQWlDO3NCQUFqQzt3QkFGSixBQUVJLEFBQ0E7QUFEQTtnREFDTSxXQUFOLEFBQWdCLFdBQVUsUUFBMUIsQUFBaUM7c0JBQWpDO3dCQUpSLEFBQ0ksQUFHSSxBQUdSO0FBSFE7aURBR0YsT0FBTixBQUFhLE9BQU8sUUFBcEIsQUFBNEIsUUFBUSxNQUFwQyxBQUF5QztzQkFBekM7d0JBUlAsQUFDTyxBQU9BLEFBR1A7QUFITzs7OztJQUtGLEE7aUNBQ0Y7O0FBQ0g7aUJBQUEsQUFBWSxPQUFPOzRDQUVaOztBQUZZO29JQUFBLEFBQ1osQUFFTjs7Y0FBQSxBQUFLO2tCQUhhLEFBR2xCLEFBQWEsQUFDTjtBQURNLEFBQ1o7ZUFFRDs7Ozs7NENBQ21CO3lCQUNuQjs7a0JBQUEsQUFBTSx5QkFBTixBQUNPLEtBQUssZUFBQTt1QkFBTyxJQUFQLEFBQU8sQUFBSTtBQUR2QixlQUFBLEFBRU8sS0FBSyxnQkFBUSxBQUNyQjt1QkFBQSxBQUFLOzBCQUFMLEFBQWMsQUFDUCxBQUVQO0FBSGMsQUFDYjtBQUpBLEFBT0E7Ozs7aUNBQ1E7eUJBQzRCLEtBRDVCLEFBQ2lDO2dCQURqQyxBQUNELHFCQURDLEFBQ0Q7Z0JBREMsQUFDWSxzQkFEWixBQUNZO2dCQURaLEFBRUQsT0FBUSxLQUZQLEFBRVksTUFGWixBQUVELEFBQ1A7QUFDQTs7bUNBQ0EsY0FBQTtvREFBQSxBQUFlOzs4QkFBZjtnQ0FBQSxBQUNVO0FBRFY7QUFBQSxhQUFBLGdDQUNVLEFBQUMsY0FBVyxPQUFaLEFBQW1CLGFBQWEsUUFBaEMsQUFBd0M7OEJBQXhDO2dDQURWLEFBQ1UsQUFDQTtBQURBO2dDQUNBLGNBQUE7b0RBQUEsQUFBZTs7OEJBQWY7Z0NBQUEsQUFDSTtBQURKO0FBQUEsK0JBQ0ksY0FBQTtvREFBQSxBQUFlOzs4QkFBZjtnQ0FBQSxBQUNJO0FBREo7QUFBQSwrQkFDSSxjQUFBO29EQUFBLEFBQWU7OzhCQUFmO2dDQUFBO0FBQUE7QUFBQSxlQURKLEFBQ0ksQUFHQSxvQ0FBQSxjQUFBO29EQUFBLEFBQWU7OzhCQUFmO2dDQUFBLEFBQ0E7QUFEQTtBQUFBLCtCQUNBLEFBQUMsaUNBQU0sTUFBUCxBQUFhOzhCQUFiO2dDQVJsQixBQUVVLEFBQ0ksQUFJSSxBQUNBO0FBQUE7O3lCQVJsQjtxQkFEQSxBQUNBLEFBZ0RBO0FBaERBOzs7OztFQXZCZ0IsZ0JBQU0sQSxBQTBFeEI7O2tCQUFlLGdDQUFmLEFBQWUsQUFBZSIsImZpbGUiOiJleGNoYW5nZXMuanM/ZW50cnkiLCJzb3VyY2VSb290IjoiL1VzZXJzL3ByaXNjXzAwMC9jb2RlL0NBQ0RFVi92eC10ZXN0In0=