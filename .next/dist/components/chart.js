"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _responsive = require("@vx/responsive");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/Users/prisc_000/code/CACDEV/vx-test/components/chart.js";
/** Get with and heigth from this components parent
 * container and pass it to <Chart params with HOC.
 * 
 * svg is expecting width and heigth params since we moved title in here
 * we need to calculate the margines for rendering the title inside 
 * this component. We can do that with the info we get from parentSize
 */


function Chart(_ref) {
    var parentWidth = _ref.parentWidth,
        parentHeight = _ref.parentHeight;

    /** define margin for this div to pass to calculation for svg */
    var margin = {
        top: 15,
        bottom: 40,
        left: 0,
        right: 0
    };
    var width = parentWidth - margin.left - margin.right;
    var height = parentHeight - margin.top - margin.bottom;
    return _react2.default.createElement("div", {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 21
        }
    }, _react2.default.createElement("div", { className: "title", __source: {
            fileName: _jsxFileName,
            lineNumber: 22
        }
    }, "CAC40 VS NASDAQ"), _react2.default.createElement("svg", { width: width, height: height, __source: {
            fileName: _jsxFileName,
            lineNumber: 25
        }
    }, _react2.default.createElement("rect", { width: width, height: height, fill: "steelblue", __source: {
            fileName: _jsxFileName,
            lineNumber: 26
        }
    })));
}

exports.default = (0, _responsive.withParentSize)(Chart);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvY2hhcnQuanMiXSwibmFtZXMiOlsid2l0aFBhcmVudFNpemUiLCJDaGFydCIsInBhcmVudFdpZHRoIiwicGFyZW50SGVpZ2h0IiwibWFyZ2luIiwidG9wIiwiYm90dG9tIiwibGVmdCIsInJpZ2h0Iiwid2lkdGgiLCJoZWlnaHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFPQSxBQUFROzs7OztBQVBSOzs7Ozs7Ozs7QUFTQSxTQUFBLEFBQVMsWUFBbUM7UUFBNUIsQUFBNEIsbUJBQTVCLEFBQTRCO1FBQWYsQUFBZSxvQkFBZixBQUFlLEFBQ3hDOztBQUNBO1FBQU07YUFBUyxBQUNOLEFBQ0w7Z0JBRlcsQUFFSCxBQUNSO2NBSFcsQUFHTCxBQUNOO2VBSkosQUFBZSxBQUlMLEFBRVY7QUFOZSxBQUNYO1FBS0UsUUFBUSxjQUFjLE9BQWQsQUFBcUIsT0FBTyxPQUExQyxBQUFpRCxBQUNqRDtRQUFNLFNBQVMsZUFBZSxPQUFmLEFBQXNCLE1BQU0sT0FBM0MsQUFBa0QsQUFDckQ7MkJBQ08sY0FBQTs7c0JBQUE7d0JBQUEsQUFDSTtBQURKO0FBQUEsS0FBQSxrQkFDSSxjQUFBLFNBQUssV0FBTCxBQUFlO3NCQUFmO3dCQUFBO0FBQUE7T0FESixBQUNJLEFBR0Esb0NBQUEsY0FBQSxTQUFLLE9BQUwsQUFBWSxPQUFPLFFBQW5CLEFBQTJCO3NCQUEzQjt3QkFBQSxBQUNJO0FBREo7K0NBQ1UsT0FBTixBQUFhLE9BQU8sUUFBcEIsQUFBNEIsUUFBUSxNQUFwQyxBQUF5QztzQkFBekM7d0JBTmYsQUFDTyxBQUlJLEFBQ0ksQUFLZjtBQUxlOztBQU9oQjs7a0JBQWUsZ0NBQWYsQUFBZSxBQUFlIiwiZmlsZSI6ImNoYXJ0LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9wcmlzY18wMDAvY29kZS9DQUNERVYvdngtdGVzdCJ9