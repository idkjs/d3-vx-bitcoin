"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

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

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/Users/prisc_000/code/CACDEV/vx-test/pages/exchanges.js?entry";

//   Create a Background component for the chart using svg. Define
//  a funtion that takes witdth and height  the produces and
//  svg d3 dom element. define the <svg container then what
//  we want in the container, her a <rect for our chart we can then
//  call the component in our app component wiht some test w/h values
function Background(width, height) {
	return _react2.default.createElement("svg", { width: width, height: height, __source: {
			fileName: _jsxFileName,
			lineNumber: 8
		}
	}, _react2.default.createElement("rect", {
		width: width,
		height: height,
		fill: "steelblue",
		__source: {
			fileName: _jsxFileName,
			lineNumber: 9
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
		key: "render",
		value: function render() {
			var data = this.state.data;

			return _react2.default.createElement("div", {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 30
				}
			}, _react2.default.createElement(Background, { width: 100, height: 100, __source: {
					fileName: _jsxFileName,
					lineNumber: 31
				}
			}));
		}
	}]);

	return App;
}(_react2.default.Component);

exports.default = App;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2V4Y2hhbmdlcy5qcyJdLCJuYW1lcyI6WyJCYWNrZ3JvdW5kIiwid2lkdGgiLCJoZWlnaHQiLCJBcHAiLCJwcm9wcyIsInN0YXRlIiwiZGF0YSIsIlJlYWN0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQUEsQUFBUyxXQUFULEFBQW9CLE9BQXBCLEFBQTJCLFFBQVEsQUFDbEM7d0JBQ08sY0FBQSxTQUFLLE9BQUwsQUFBWSxPQUFPLFFBQW5CLEFBQTJCO2FBQTNCO2VBQUEsQUFDSTtBQURKO0VBQUE7U0FDSSxBQUNPLEFBQ1A7VUFGQSxBQUVRLEFBQ1I7UUFIQSxBQUdLOzthQUhMO2VBRlgsQUFDTyxBQUNJLEFBT1g7QUFQVztBQUNBOzs7SSxBQVFOOzhCQUNGOztBQUNIO2NBQUEsQUFBWSxPQUFPO3NDQUVaOztBQUZZOzhIQUFBLEFBQ1osQUFFTjs7UUFBQSxBQUFLO1NBSGEsQUFHbEIsQUFBYSxBQUNOO0FBRE0sQUFDWjtTQUVEOzs7OzsyQkFDUTtPQUFBLEFBQ0QsT0FBUSxLQURQLEFBQ1ksTUFEWixBQUNELEFBQ1A7OzBCQUNBLGNBQUE7O2VBQUE7aUJBQUEsQUFDVTtBQURWO0FBQUEsSUFBQSxnQ0FDVSxBQUFDLGNBQVcsT0FBWixBQUFtQixLQUFLLFFBQXhCLEFBQWdDO2VBQWhDO2lCQUZWLEFBQ0EsQUFDVSxBQUdWO0FBSFU7Ozs7OztFQWJNLGdCQUFNLEEsQUFtQnhCOztrQkFBQSxBQUFlIiwiZmlsZSI6ImV4Y2hhbmdlcy5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiIvVXNlcnMvcHJpc2NfMDAwL2NvZGUvQ0FDREVWL3Z4LXRlc3QifQ==